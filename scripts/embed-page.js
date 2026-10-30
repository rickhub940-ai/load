'use strict';

// Regenerates the embedded HTML pages inside Server/core.js from the readable
// sources in pages/. Vercel runs every request through the single api/auth
// function, so pages are inlined as string literals instead of being read from
// disk at runtime (no extra files need to be shipped with the function).
//
//   node scripts/embed-page.js            refresh every page in PAGE_SOURCES
//   node scripts/embed-page.js /hub       refresh a single route

const fs = require('node:fs');
const path = require('node:path');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const CORE = path.join(PROJECT_ROOT, 'Server', 'core.js');
const CYBERPUNK_HERO_IMAGE = path.join(PROJECT_ROOT, 'assets', 'cyberpunk-anime-hero.webp');
const CYBERPUNK_HERO_DATA_URI = `data:image/webp;base64,${fs.readFileSync(CYBERPUNK_HERO_IMAGE).toString('base64')}`;
const CYBERPUNK_THEME = fs.readFileSync(path.join(PROJECT_ROOT, 'styles', 'cyberpunk-anime.css'), 'utf8')
  .replaceAll('{{CYBERPUNK_HERO_DATA_URI}}', CYBERPUNK_HERO_DATA_URI);

// Route -> source file. Add a row here and the page becomes servable once the
// route is also reachable (vercel.json rewrite + the page lookup in core.js).
const PAGE_SOURCES = Object.freeze({
  '/': 'pages/index.html',
  '/hub': 'pages/hub.html',
  '/scripts': 'pages/scripts.html',
  '/control': 'pages/control.html',
  '/stats': 'pages/stats.html',
});

// Escape as a JS string literal, keeping non-ASCII as \uXXXX so the bundle
// stays pure ASCII like the rest of core.js.
function jsLiteral(line) {
  return JSON.stringify(line).replace(
    /[\u007f-\uffff]/g,
    (ch) => '\\u' + ch.charCodeAt(0).toString(16).padStart(4, '0'),
  );
}

function constName(route) {
  const slug = route.replace(/[^a-z0-9]+/gi, '_').replace(/^_+|_+$/g, '').toUpperCase();
  return `${slug || 'ROOT'}_PAGE`;
}

function renderBlock(route, html) {
  const name = constName(route);
  const chunks = html.split('\n');
  // A trailing newline shows up as a trailing empty chunk; drop it and restore
  // the line break on the emitted chunks instead.
  if (chunks.length && chunks[chunks.length - 1] === '') chunks.pop();
  const body = chunks
    .map((line, index) => {
      const last = index === chunks.length - 1;
      const text = last && !html.endsWith('\n') ? line : line + '\n';
      return `  ${jsLiteral(text)}${last ? ';' : ' +'}`;
    })
    .join('\n');
  return [
    `// BEGIN PAGE ${route} - generated from ${PAGE_SOURCES[route]}; run \`npm run pages\` to refresh.`,
    `const ${name} =`,
    body,
    `Object.assign(EMBEDDED_PAGES, { ${JSON.stringify(route)}: ${name} });`,
    `// END PAGE ${route}`,
  ].join('\n');
}

function replaceRegion(source, route, block) {
  const begin = `// BEGIN PAGE ${route} -`;
  const end = `// END PAGE ${route}`;
  const start = source.indexOf(begin);
  if (start === -1) return insertAfterPages(source, block);
  const stop = source.indexOf(end, start);
  if (stop === -1) throw new Error(`found ${begin} without ${end}`);
  return source.slice(0, start) + block + source.slice(stop + end.length);
}

function insertAfterPages(source, block) {
  const anchor = source.indexOf('const EMBEDDED_PAGES = {');
  if (anchor === -1) throw new Error('EMBEDDED_PAGES declaration not found in Server/core.js');
  const close = source.indexOf('\n};\n', anchor);
  if (close === -1) throw new Error('end of EMBEDDED_PAGES object not found');
  const cut = close + '\n};\n'.length;
  return source.slice(0, cut) + '\n' + block + '\n' + source.slice(cut);
}

function main() {
  const only = process.argv[2];
  let source = fs.readFileSync(CORE, 'utf8');
  let changed = 0;

  for (const [route, file] of Object.entries(PAGE_SOURCES)) {
    if (only && route !== only) continue;
    const abs = path.join(PROJECT_ROOT, file);
    if (!fs.existsSync(abs)) throw new Error(`missing page source: ${file}`);
    const template = fs.readFileSync(abs, 'utf8');
    if (!template.trim()) throw new Error(`empty page source: ${file}`);
    let html = template;
    if (!html.includes('id="cyberpunk-theme"')) {
      const themeBlock = [
        '<style id="cyberpunk-theme">',
        CYBERPUNK_THEME,
        '</style>',
      ].join('\n');
      html = html.replace('</head>', `${themeBlock}\n</head>`);
    }
    source = replaceRegion(source, route, renderBlock(route, html));
    changed++;
    console.log(`embedded ${route} <- ${file} (${Buffer.byteLength(html)} bytes)`);
  }

  if (!changed) {
    console.error(`no page matches ${only}`);
    process.exitCode = 1;
    return;
  }
  fs.writeFileSync(CORE, source);
}

main();
