local L="__STAGE2_TOKEN__"; local B="__BASE_URL__"; local H="__STAGE2_SHA256__"; local N="__STAGE2_NONCE__"
local E1="__ST_ERR_HASHER__"; local E2="__ST_ERR_REQUEST__"; local E3="__ST_ERR_PROOF__"; local E4="__ST_ERR_FETCH__"; local E5="__ST_ERR_DIGEST__"; local E6="__ST_ERR_COMPILER__"; local E7="__ST_ERR_COMPILE__"
local U=table.unpack or unpack; local A={n=select("#",...),...}; local C=A.n; local X={L,B,H,N,E1,E2,E3,E4,E5,E6,E7}
for I=1,#X do A[C+I]=X[I] end; A.n=C+#X
local F=function(...)
-- Loadc stays readable; match somtank's wait, run-buster, protected fetch/compile flow.
if not game:IsLoaded() then game.Loaded:Wait() end
local k,s,l,b,h,n,e1,e2,e3,e4,e5,e6,e7=...
if type(k)~="string" then k="" end
if type(s)~="string" or #s<1 or #s>64 or not s:match("^[%w_%-]+$") then s="main" end; if s=="Main" then s="main" end
local u=b.."/"..l; local v=u.."?run="..tostring(os.clock())
local x={key=k,scriptName=s,chain={Version="999MS-chain-v1",Id=l:match("^(%x+)") or l,Stage="stage1",UpdatedAt=tick()}}
local c=(type(syn)=="table" and syn.crypt) or crypt; local hs=type(c)=="table" and c.hash or nil
if type(hs)~="function" then error(e1,0) end
local rf=(type(syn)=="table" and syn.request) or (type(http)=="table" and http.request) or (type(request)=="function" and request) or (type(http_request)=="function" and http_request)
if type(rf)~="function" then error(e2,0) end
local ok,p=pcall(hs,"999MS-fetch-v1|"..n.."|"..u,"sha256"); if not ok or type(p)~="string" then error(e3,0) end
-- This endpoint requires one-time POST proof; game:HttpGet (GET) is rejected.
local ok,r=pcall(rf,{Url=v,Method="POST",Headers={["content-type"]="application/json"},Body='{"p":"'..p..'"}'})
local d=type(r)=="table" and r.Body or nil; if not ok or type(d)~="string" or d=="" or #d>4*1024*1024 then error(e4,0) end
local ok,g=pcall(hs,d,"sha256"); if not ok or type(g)~="string" or string.lower(g)~=h then error(e5,0) end
local f=loadstring or load; if type(f)~="function" then error(e6,0) end
local ok,q=pcall(f,d); if not ok or type(q)~="function" then error(e7,0) end
x.chain.UpdatedAt=tick(); return q(x)
end
return F(U(A,1,A.n))
