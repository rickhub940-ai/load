'use strict';

// Minimal runtime bundle. Helpers, the existing public pages and legacy SDK
// asset are embedded here so no extra runtime files/dependencies are required.
// Lua files in lib/ and scripts/ are assembled source, not obfuscator output.
const nodeRequire = require;
const path = nodeRequire('node:path');
const http = nodeRequire('node:http');
const zlib = nodeRequire('node:zlib');
const crypto = nodeRequire('node:crypto');
const PROJECT_ROOT = path.resolve(__dirname, '..');
const EMBEDDED_SDK = "return ({[\"XT\"]=(function(TOD,_xF,kcJ)local Aj1=_xF[0x108C];local dxx=Aj1 and Aj1[kcJ];return dxx and dxx[1] or nil;end),[\"gG\"]=(function(oeB,oi6,ii7)local PuO,vEo=oeB.x,oeB.iPl;local JuD=ii7[3];if type(JuD) ~= \"number\" then local Zg1=(oeB.Hkys)(oeB,JuD or \"\",1) or 0;JuD=oeB.YG.bxor(Zg1,0x70FB);ii7[3]=JuD;end;local Opd=(((ii7[6] or {})[1] or {}));if JuD % 2 == 1 then Opd=(((ii7[6] or {})[2] or {}));end;local gjV,az7=vEo(oeB,oi6,Opd),oi6[0x2B7D];local lw9=az7[gjV];if lw9 == oeB.nUn then PuO(oeB,oi6,(((ii7[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,nil);elseif lw9 ~= nil then PuO(oeB,oi6,(((ii7[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,lw9);elseif gjV == oeB.GB then PuO(oeB,oi6,(((ii7[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,true);elseif az7 ~= oeB.lFB then PuO(oeB,oi6,(((ii7[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,nil);else PuO(oeB,oi6,(((ii7[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,oeB.W[gjV]);end;end),[\"EXQa\"]=(function(eio,Jbd,tii,gso)local xzA=eio.W;local __k,vrH,brR,Rhr,Eyy=(xzA.string and xzA.string.byte) or string.byte,eio.JEgx or 0x14FD,189,Jbd[0x6D74],0x892;local function Mro(mxT)vrH=(vrH * 309 + mxT + Eyy) % 0x10000;end;local function n5(kaP,rpM)local AA,Oeg,aeV=type(kaP),329,0;if AA == \"nil\" then Oeg=529;elseif AA == \"boolean\" then Oeg=811;aeV=kaP and 1 or 0;elseif AA == \"number\" then Oeg=0x44F;if kaP == kaP and kaP > -0x80000000000 and kaP < 0x80000000000 then local Iyg=kaP * 257;aeV=(Iyg - Iyg % 1) % 0x10000;else aeV=0x5A7;end;elseif AA == \"string\" then Oeg=0x61D;local jrC=#kaP;aeV=(jrC * 131 + rpM) % 0x10000;local KgJ=jrC < 4 and jrC or 4;for yxI=1,KgJ do local GuS=((gso + rpM + yxI * 17) % jrC) + 1;aeV=(aeV * 33 + (__k(kaP,GuS) or 0) + GuS * 19) % 0x10000;end;elseif AA == \"table\" then Oeg=0x72D;elseif AA == \"function\" then Oeg=0x83B;elseif AA == \"thread\" then Oeg=0x941;elseif AA == \"userdata\" then Oeg=0xA57;end;Mro((Oeg + aeV + rpM * brR) % 0x10000);end;local function tnG(LdY,gfA)if type(LdY) ~= \"table\" then Mro(gfA * 17);return;end;local CdV,ErY,qaV=LdY[0x721B] or 0x4E81,0,LdY[0x74E7] or 0;if type(qaV) == \"number\" and qaV == qaV and qaV > -0x80000000000 and qaV < 0x80000000000 then local YyN=qaV * 257;ErY=(YyN - YyN % 1) % 0x10000;end;Mro((CdV * 131 + ErY * 17 + gfA) % 0x10000);if CdV == 0x6514 then n5(Rhr[qaV],gfA + qaV);elseif CdV == 0x990 or CdV == 0x713 or CdV == 0xFCA then n5(qaV,gfA + CdV);end;end;local function baW(Jdo,owa)if type(Jdo) ~= \"table\" then Mro(owa * 31);return;end;local btZ=(eio.bESq)(eio,Jdo);Mro(btZ or 0);if type(btZ) == \"number\" then n5(Rhr[btZ],owa + btZ);end;tnG((eio.LIt)(eio,Jdo),owa + 1);tnG((eio.f)(eio,Jdo),owa + 2);end;local tlJ=Jbd[0x59C3];Mro((gso * 0x5578 + (tlJ or -1)) % 0x10000);if type(tlJ) == \"number\" and tlJ >= 0 and tlJ % 1 == 0 then n5(Rhr[0],gso + 3);n5(Rhr[tlJ],gso + 5);local kuh=tlJ < 6 and tlJ or 6;for fgy=1,kuh do n5(Rhr[fgy],gso + fgy * 7);end;local Eps=tlJ + 1;for Tph=1,4 do local Dma=(vrH + gso * 29 + Tph * 43) % Eps;n5(Rhr[Dma],gso + Dma + Tph * 11);end;end;Mro(tii[8] or 0);baW(tii,7);local BnC=tii[1];if type(BnC) == \"table\" and #BnC > 0 then for vgg=1,#BnC do baW(BnC[vgg],11 + vgg * 2);end;end;eio.qmPH=gso;eio.JEgx=vrH;end),[\"bESq\"]=(function(hIn,mjU)return (((mjU[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD;end),[\"fIj\"]=({[((\"dKB\" .. (\"D7\" .. \"R8T\" .. \"2qA\")))]=false,[(((\"v4\" .. \"FZY\") .. \"fKO\") .. \"DCv\")]=(function(drz,Wmr)if Wmr == \"\" then return {};end;local Ymd,kkm,ez5,ow2=1,#Wmr,{},drz.YG;while Ymd <= kkm do local kdE;local Zi2;local ps0;kdE,Ymd=(drz.Hkys)(drz,Wmr,Ymd);Zi2,Ymd=(drz.Hkys)(drz,Wmr,Ymd);ps0,Ymd=(drz.Hkys)(drz,Wmr,Ymd);if kdE == nil or Zi2 == nil or ps0 == nil then break;end;kdE=ow2.bxor(kdE,407);Zi2=ow2.bxor(Zi2,407);ps0=ow2.bxor(ps0,407);ez5[kdE - 1]={Zi2 - 1,ps0 - 1};end;return ez5;end)})[((\"v4F\" .. ((\"ZYf\" .. \"KO\") .. \"DCv\")))],[\"bw\"]=(function(KnF,Ruk,Pml)local kTQ,xjQ,qTJ=KnF.pd,KnF.x,KnF.iPl;xjQ(KnF,Ruk,(((Pml[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,qTJ(KnF,Ruk,(((Pml[6] or {})[1] or {}))));local _ey=Pml[3];if type(_ey) ~= \"number\" then _ey=(KnF.Gu)(KnF,_ey or \"\",1) or 0;Pml[3]=_ey;end;xjQ(KnF,Ruk,(((((Pml[6] or {})[2] or {})))[0x74E7] or 0),kTQ(KnF,Ruk,_ey));end),[\"JI\"]=(function(uId,NgH,jTX)local Vpx={[\"n\"]=1};Vpx[1]=NgH[0x6D74][(((jTX[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD];NgH[0x1DD7]=Vpx;end),[\"iPl\"]=(function(AoW,Duq,nhI)local zdI,mya=nhI[0x74E7] or 0,nhI[0x721B] or 0x4E81;if mya == 0x6514 then return Duq[0x6D74][zdI];elseif mya == 0x990 then return zdI;elseif mya == 0x713 or mya == 0xFCA then local Aeb=Duq[0x6B9A];if Aeb == nil then Aeb={};Duq[0x6B9A]=Aeb;end;local Zmv=Aeb[nhI];if Zmv ~= nil then if Zmv == AoW.nUn then return nil;end;return Zmv;end;AoW.y=AoW.YG.bxor(((zdI + 0x892) * 189 + (AoW.qmPH or 0) + (AoW.Zn or 0) + ((AoW.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);AoW.F=((zdI + (AoW.qmPH or 0)) % 4);local ZnV=Duq[0x14B2][zdI];AoW.y=nil;Aeb[nhI]=ZnV == nil and AoW.nUn or ZnV;if ZnV == AoW.nUn then return nil;end;return ZnV;end;return nil;end),[\"qOFT\"]=(function(MM,Zia,WAh)local PAd,Zxf,exw,txy,axp,VAl=MM.DFQ,MM.iPl,MM.f,MM.bESq,MM.x,MM.LIt;local BAu=PAd(MM,WAh);if BAu[2] == nil then return;end;local QAf=Zia[0x65D2] - 1;do local rOy=BAu[1];Zia[0x65D2]=QAf + 1;axp(MM,Zia,txy(MM,rOy),Zxf(MM,Zia,exw(MM,rOy)));end;do local ixb=BAu[2];Zia[0x65D2]=QAf + 2;local umO=ixb[3];if type(umO) ~= \"number\" then local qkf=(MM.Hkys)(MM,umO or \"\",1) or 0;umO=MM.YG.bxor(qkf,0x70FB);ixb[3]=umO;end;local epN=exw(MM,ixb);if umO % 2 == 1 then epN=VAl(MM,ixb);end;axp(MM,Zia,txy(MM,ixb),Zxf(MM,Zia,epN));end;Zia[0x65D2]=QAf + 2;end),[\"ibp\"]=(function(vIy,PgB,nxg)local VgG,r_o,Shs,fN2=PgB[0x6D74],nxg[6],PgB[0x219F],(((nxg[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD;local wN3,yN4=r_o[2],r_o[1];do local Cra,BgK=fN2,VgG[(yN4[0x74E7] or 0)] / (wN3[0x74E7] or 0);VgG[Cra]=BgK;local sxk=Shs and Shs[Cra];if sxk then sxk[1]=BgK;end;end;end),[\"H\"]=(function(i)local NdU=false;local hxq,tpS,rxj,kz_=\"__\" .. \"index\",\"__\" .. \"newindex\",\"__\" .. \"pairs\",\"__\" .. \"metatable\";local NiR={};NiR[1]={};local function apH(USy,pN5)return NiR[1][pN5];end;local h,jkw={},(i.W.setmetatable or setmetatable);jkw(h,{[tpS]=(function(CSp,vN6,bN7)if not NdU then NiR[1][vN6]=bN7;end;end),[hxq]=apH,[rxj]=(function()return (function()end);end),[kz_]=false});i.Vo=h;local teP,faL,bsa,De_={},{},{},{};local oa_=((function()local d_i=i.W;local prS,qzE=d_i.string.byte,d_i.math.floor;local cmI,ltY=\"gxosW9jrvVaADOFTzGdn4uq0bkilE8-7w5CPXK1RyUM_YBLcQf6hStZp2J3mNIHe\",{};for ZIJ=1,#cmI do ltY[prS(cmI,ZIJ)]=ZIJ - 1;end;local function lxz(Elj,xky)local eIX,tIZ,aI0,oI1,iI2,nI3=ltY[prS(Elj,xky)],ltY[prS(Elj,xky + 1)],ltY[prS(Elj,xky + 2)],ltY[prS(Elj,xky + 3)],ltY[prS(Elj,xky + 4)],ltY[prS(Elj,xky + 5)];if eIX == nil or tIZ == nil or aI0 == nil or oI1 == nil or iI2 == nil or nI3 == nil then return nil;end;local GgQ=eIX + tIZ * 64 + aI0 * 0x1000 + oI1 * 0x40000 + iI2 * 0x1000000 + nI3 * 0x40000000;if GgQ >= 0x100000000 then return nil;end;return GgQ;end;return (function(dOp,Tlx,ZAp,ux_)if type(Tlx) ~= \"string\" or #Tlx < 12 or #Tlx % 6 ~= 0 then return;end;local opR=lxz(Tlx,1);if opR == nil then return;end;local Hhh=(opR - 0x65F50BD0) % 0x100000000;local ipD=(function(bIp,jzT,eAv)return dOp(bIp,jzT,eAv);end);local xym,gte,SoB=nil,nil,ZAp == 1;local zyf=0;for gIv=7,#Tlx,6 do zyf=zyf + 1;Hhh=(Hhh + 0x6A8D + zyf * 0xF2BE) % 0x100000000;local Alz=lxz(Tlx,gIv);if Alz == nil then return;end;local npL=(Alz - Hhh) % 0x100000000;Hhh=(Hhh + Alz + 0xCD7C) % 0x100000000;local _yw,Yoo=npL % 0x8000,qzE(npL / 0x8000);if Yoo < 0 or Yoo >= 0x1FFFF or (_yw ~= 0 and (_yw < 64 or _yw >= 0x7FFF)) then return;end;h[Yoo]=SoB and ipD or dOp;bsa[Yoo]=_yw;if ux_ then De_[Yoo]=true;end;if gte then teP[gte]=Yoo;faL[Yoo]=gte;else xym=Yoo;end;SoB,gte=not SoB,Yoo;end;if gte then teP[gte]=xym;faL[xym]=gte;end;end);end))();local tAb=i.rQ;h[0xA1C]=tAb;i.rQ=nil;local aAg=i.bVZt;oa_(aAg,\"aVIoPo1m4Tdo5iVB1o\",0,false);i.bVZt=nil;local oAk=i.ti;oa_(oAk,\"TtUTuoOPAa1xyXcC2s4EIQDx\",0,true);i.ti=nil;local iAq=i.IW;h[0x10989]=iAq;i.IW=nil;local nAj=i.fGJ;h[0x105CC]=nAj;i.fGJ=nil;local sAx=i.Yzc;h[0x17D92]=sAx;i.Yzc=nil;local hAz=i.MDqx;oa_(hAz,\"IZ1cuo1p9Gko_Ri-Hg\",1,false);i.MDqx=nil;local rA_=i.WOH;oa_(rA_,\"mtu7IsNozmEsC8vNko\",1,false);i.WOH=nil;local dAE=i.VZ;h[0x1AFBC]=dAE;i.VZ=nil;local lAT=i.aZ;h[0x11FF6]=lAT;i.aZ=nil;local l_n=i.zh;oa_(l_n,\"GtbSvs8T4FzoLGUDsg\",1,false);i.zh=nil;local u_s=i.n;h[0x14B52]=u_s;i.n=nil;local c_h=i.NzV;h[0xA595]=c_h;i.NzV=nil;local m_r=i.zNjI;oa_(m_r,\"kUOjdsr1oJTsY5KFxx\",1,false);i.zNjI=nil;local f_d=i.T;h[0xC88E]=f_d;i.T=nil;local w_l=i.ykPX;h[0x6136]=w_l;i.ykPX=nil;local y_u=i.JY;oa_(y_u,\"BMTaCgGhwVdgZdNw2x\",1,false);i.JY=nil;local p_c=i.AnfQ;h[834]=p_c;i.AnfQ=nil;local v_m=i.Zbyr;h[0x8314]=v_m;i.Zbyr=nil;local b_f=i.Cc;h[0xBEF6]=b_f;i.Cc=nil;local g_w=i.azUR;oa_(g_w,\"tYxSfoIKiMLxntTDDo\",1,false);i.azUR=nil;local k_y=i.AK;oa_(k_y,\"GYCS3xWU2N9xSp6sQs\",1,false);i.AK=nil;local q_p=i.CucV;oa_(q_p,\"FuZ8Ps88eLDog_qORx2sAMco\",0,true);i.CucV=nil;local j_v=i.OolL;oa_(j_v,\"6-UEYoxiR3Gg3jPDOg\",0,false);i.OolL=nil;local x_b=i.PVsg;h[0x145DC]=x_b;i.PVsg=nil;local z_g=i.Q;h[0x32E8]=z_g;i.Q=nil;local E_q=i.maa;h[0xEF88]=E_q;i.maa=nil;local T_j=i.e;oa_(T_j,\"ZUr5IoitDnpxrU4ADg\",1,false);i.e=nil;local A_x=i.Uii;h[0xE8C8]=A_x;i.Uii=nil;local O_z=i.gG;oa_(O_z,\"LgTKxozm3r4soeA5zo\",0,false);i.gG=nil;local I__=i.Wi;oa_(I__,\"SqMVqgoRAcSxsu7fBodhSw_g\",1,false);i.Wi=nil;local N_E=i.XOkV;oa_(N_E,\"QI7x4xKXkhKx3nXWNo\",1,false);i.XOkV=nil;local S_T=i.JI;h[0xB352]=S_T;i.JI=nil;local H_A=i.BqBV;h[0x19989]=H_A;i.BqBV=nil;local R_O=i.nI;h[0x33EB]=R_O;i.nI=nil;local D_I=i.uh;h[0x1866]=D_I;i.uh=nil;local L_N=i.KFh;h[0xBA78]=L_N;i.KFh=nil;local U_S=i.bw;oa_(U_S,\"p28ipgxlDdWxuM_Qno\",0,false);i.bw=nil;local C_H=i.CMP;h[0x201E]=C_H;i.CMP=nil;local M_R=i.Olb;oa_(M_R,\"VqmoogvKmkug-wKYpx\",1,false);i.Olb=nil;local F_D=i.OZZy;h[0x151A8]=F_D;i.OZZy=nil;local W_L=i.YHnw;h[0xDEB4]=W_L;i.YHnw=nil;local Y_U=i.DUjd;h[0x192EA]=Y_U;i.DUjd=nil;local P_C=i.yDSC;h[0x8BE2]=P_C;i.yDSC=nil;local V_M=i.QOh;h[0x17A4C]=V_M;i.QOh=nil;local B_F=i.wVxU;h[0x27A8]=B_F;i.wVxU=nil;local G_W=i.cA;oa_(G_W,\"nyFMVxynUnZouV-Zhs\",1,false);i.cA=nil;local K_Y=i.dHs;h[0x1A8DC]=K_Y;i.dHs=nil;local Q_P=i.ibp;oa_(Q_P,\"7jOEVsW8sO1oMonQZo\",0,false);i.ibp=nil;local J_V=i.qOFT;oa_(J_V,\"EkKKAgbGrHxsbrw0uo\",1,false);i.qOFT=nil;local X_B=i.qq;h[0x1479D]=X_B;i.qq=nil;local Z_G=i.optL;oa_(Z_G,\"0AMKgoTJCXhgd49V8s\",0,false);i.optL=nil;local e_K=i.AyDD;oa_(e_K,\"W8vLgsglJ0qsHGHtZx\",0,false);i.AyDD=nil;local t_Q=i.fEmM;oa_(t_Q,\"hbQuvg4b5bRoNSEiwxt0r1Sx\",0,true);i.fEmM=nil;local a_J=i.EWv;oa_(a_J,\"E1Ie0sspal8okqh2Gg-3s6tg\",1,true);i.EWv=nil;local o_X=i.Lr;h[0x13A1A]=o_X;i.Lr=nil;local i_Z=i.roTb;h[0xF02D]=i_Z;i.roTb=nil;local n_0=i.jkQ;oa_(n_0,\"gKPnrgzxm6XsEh1LMgsdM0px\",1,false);i.jkQ=nil;local s_1=i.Bsf;h[0x75B6]=s_1;i.Bsf=nil;local h_2=i.MY;oa_(h_2,\"4thaeg_ssNDg6k2oesDUWefo\",0,true);i.MY=nil;local ktt,sfw,iaE=0,false,false;local Ol_,IlE,NlT;local ksi,fxA=7 - 2 + 1,i.YG;local function grD(zOS,wxO,Ekb)local ain=Ekb[0x45F8];local Uux=ain and ain[1];if not Uux then return;end;local SlA=(ain[3] or 1) - 1;if SlA <= 0 then local ois,hfy=ain[4] or 0,ain[2] or 0;ktt=(ktt * 0xAA25 + ois * 0x633 + hfy + 0x3E21) % 0x7FFFFFFF;local s6;if ktt % 2 == 0 then s6=teP[hfy];else s6=faL[hfy];end;local iih,Cuz=s6 and h[s6],s6 and bsa[s6];if iih and Cuz then ain[1]=iih;ain[2]=s6;Uux=iih;local Mu_,rfp=(((ois + 0x5FAB) * 343) + 0x785) % 0xFFFF,(((ois + 0x5EF6) * 0x7E3) + 0x1D8A) % 0x1FFFF;ain[5]=fxA.bxor(Cuz + Mu_ + rfp,0x1D8A);end;ain[3]=2 + (ktt % ksi);else ain[3]=SlA;end;return Uux(zOS,wxO,Ekb);end;local function Tkg(krL,CeA,M,Dhd,qrU)if krL == true then ktt=(CeA or 0) + 0xFAA6;sfw=true;iaE=true;return;elseif krL == false then Ol_=CeA;IlE=M;NlT=Dhd;ktt=(qrU or 0) + 0xFAA6;sfw=true;iaE=false;return;elseif krL == nil then return Ol_,IlE,NlT;end;if not sfw or teP[M] == nil or (iaE and not De_[M]) then return Dhd;end;local r_3=(CeA * 0x633 + M + ktt + 0x3E21) % 100;if not De_[M] and (12 <= 0 or r_3 >= 12) then return Dhd;end;local Typ=De_[M] and 1 or (2 + ((ktt + CeA + M) % ksi));krL[0x45F8]={Dhd,M,Typ,CeA};return grD;end;i.LpQI=Tkg;NdU=true;return h;end),[\"CLcz\"]=(function(Fri,Ayv,dfv)local FuE=Fri.r;Fri.r=Ayv or true;local dpF=(Fri.TA)(Fri,Ayv,dfv or 0);Fri.r=FuE;return (Fri.wihR)(Fri,dpF);end),[\"yDSC\"]=(function(_OH,lfb,d_4)do local ufg=(((((d_4[6] or {})[1] or {})))[0x74E7] or 0);local Oyb=(lfb[0x41DB] or 0x3F8314) - (lfb[0x58A9] or 0x73361);lfb[0x65D2]=Oyb + ufg;end;end),[\"DUjd\"]=(function(xx,VeR,lpW)local Akk,uAA,l_5,u_6,c_7,Okq,upY,cpP=xx.Ok,VeR[0x58A1],xx.Ctf,xx.uYXj,xx.fIj,xx.Qyx or ((function()return nil;end)),(xx.W.next or next),xx.x;local EOR,nir=(((lpW[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,(lpW[3] or {});if type(nir) ~= \"table\" or nir[0x422C] == nil then nir=(xx.kQEt)(xx,nir or \"\");lpW[3]=nir;end;local zzO,qsn,Ikj=nir[0x422C],nir[0x1B46],nir[0x29DB];if qsn == nil then local Nkx=nir[0x1D6F] or \"\";if not (Nkx == \"\") then local Skz=c_7(xx,Nkx);qsn=upY(Skz) and Skz or false;else qsn=false;end;nir[0x1B46]=qsn;end;local Hk_=VeR[0x2A4A];local m_8,RkE=Okq(zzO,Ikj,true);if not m_8 or RkE == nil then cpP(xx,VeR,EOR,(function()end));return;end;local Wrn=Hk_[RkE];if not Wrn then local SdC=Okq(zzO,Ikj);if not SdC then cpP(xx,VeR,EOR,(function()end));return;end;if SdC[0x2A30] ~= nil then Wrn=SdC;else Wrn=u_6(xx,SdC[0x6FEF],SdC[0x7E17],SdC[0x4185]);end;Hk_[RkE]=Wrn;end;local DkT,_zI,EzN,LkA,mpV,WuT=VeR[0x108C],VeR[0x41DB] or 0x3F8314,VeR[0x6D74],VeR[0x58A9] or 0x73361,VeR[0x2B7D],VeR[0x219F];local Nyk;local UkO={};local function fAN(ztn)if not WuT then WuT={};VeR[0x219F]=WuT;end;local cfk=WuT[ztn];if not cfk then cfk={EzN[Akk(xx,ztn)],ztn,EzN,true};WuT[ztn]=cfk;end;return cfk;end;if qsn then for wAS,TzS in upY,qsn do if TzS[1] == 0 then UkO[wAS]=fAN(TzS[2]);end;end;end;local function CkI(MkN,fpB)local AzH,FkS,utP,_ts,HdM={},{},1,Wrn[0x4185] or 0,{};if qsn then for OzR,IzD in upY,qsn do local YuA;if not (IzD[1] == 0) then YuA=DkT and DkT[IzD[2]] or nil;else YuA=UkO[OzR];end;if not YuA then YuA={nil,0,nil,false};end;AzH[OzR]=YuA;end;end;for kIb=1,_ts do FkS[Akk(xx,kIb - 1)]=MkN[kIb];end;for sI4=_ts + 1,fpB do HdM[utP]=MkN[sI4];utP=utP + 1;end;HdM.n=utP - 1;local f_9={[0x6D74]=FkS,[0x108C]=AzH,[0x14B2]=Wrn[0x1BA3],[0x65D2]=(_zI - LkA) + 1,[0x41DB]=_zI,[0x58A9]=LkA,[0x59C3]=_ts - 1,[0x58A1]=HdM,[0x2B7D]=mpV,[0x2A4A]=Hk_,[0x2C13]=Nyk,[0x219F]={}};return f_9,Wrn[0x2A30];end;Nyk=(function(...)local wpG,wEe=select(\"#\",...),{...};local yEt,pEa=CkI(wEe,wpG);return l_5(xx,yEt,pEa);end);if xx.akj then xx.akj[Nyk]=(function(WkH,Yrs)if WkH == xx.wGUL then if Yrs ~= nil then mpV=Yrs;return Nyk;end;return mpV;end;return CkI(WkH,Yrs);end);end;cpP(xx,VeR,EOR,Nyk);end),[\"OlGM\"]=(function(mfq,YkR,ul7)local ypK=(mfq.je)(mfq,YkR,0,ul7);return (mfq.wihR)(mfq,ypK);end),[\"jkQ\"]=(function(ieG,ni8,bEi)local PkD,VkL,BkU,gEn,kEs,qEh=ieG.bESq,ieG.f,ieG.x,ieG.iPl,ieG.DFQ,ieG.hXXQ;local jEr=kEs(ieG,bEi);if jEr[2] == nil then return;end;local xEd=ni8[0x65D2] - 1;do local yAH=jEr[1];ni8[0x65D2]=xEd + 1;BkU(ieG,ni8,PkD(ieG,yAH),gEn(ieG,ni8,VkL(ieG,yAH)));end;do local pAR=jEr[2];ni8[0x65D2]=xEd + 2;BkU(ieG,ni8,PkD(ieG,pAR),qEh(ieG,VkL(ieG,pAR)));end;ni8[0x65D2]=xEd + 2;end),[\"TNt\"]=(function(ee,Syq,ffj)local VuI=ee.r;ee.r=Syq or true;local ppQ=(ee.TA)(ee,Syq,ffj or 0);ee.r=VuI;local MeO=ee.VHXb;if not MeO then MeO={};ee.VHXb=MeO;end;local Et7=MeO[1];if not Et7 then Et7={(function(BuN,Prh)return (ee.w)(ee,BuN,Prh);end),(function(KuH)return (ee.MW)(ee,KuH);end)};Et7.n=2;MeO[1]=Et7;end;local function zEl(...)return {[\"n\"]=select(\"#\",...),...};end;local xrM=zEl((ee.wihR)(ee,ppQ,Et7));local OO=xrM.n == 1 and xrM[1];if type(OO) == \"table\" then local zz=OO[1];if type(zz) == \"table\" then if zz[0x2A30] ~= nil then return (ee.wihR)(ee,OO);elseif zz[0x6FEF] ~= nil then OO[1]=(ee.uYXj)(ee,zz[0x6FEF],zz[0x7E17],zz[0x4185]);return (ee.wihR)(ee,OO);end;end;end;if type(OO) == \"table\" and OO[0x341A] == 0x593D then return (ee.o)(ee,OO[0x3749],OO[0x31D8] or 0);end;local vpJ=(ee.W.table and ee.W.table.unpack) or ee.W.unpack or unpack;return vpJ(xrM,1,xrM.n or 0);end),[\"Cc\"]=(function(wfx,Xbl,GkC)local _Eu,EEc=wfx.XT,wfx.x;EEc(wfx,Xbl,(((GkC[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,_Eu(wfx,Xbl,(((((GkC[6] or {})[1] or {})))[0x74E7] or 0)));end),[\"PVsg\"]=(function(jss,si9,RdF)local pxN,bpX=jss.W.tonumber,jss.x;local yfz,QuR=si9[0x6D74],(((RdF[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD;local hne,HoG=(((((RdF[6] or {})[2] or {})))[0x74E7] or 0),yfz[QuR];local RoK,VV=yfz[hne],RdF[3];if type(VV) == \"table\" then VV=VV[0x74E7] or (hne + 1);RdF[3]=VV;elseif type(VV) ~= \"number\" then VV=(jss.Gu)(jss,VV or \"\",1) or (hne + 1);RdF[3]=VV;end;local xsh=yfz[VV];if type(HoG) ~= \"number\" or type(RoK) ~= \"number\" or type(xsh) ~= \"number\" then local rnt=jss.W.tonumber or tonumber;if type(HoG) ~= \"number\" then local zmP=rnt(HoG);if zmP == nil then error(\"invalid 'for' initial value (number expected, got \" .. type(HoG) .. \")\");end;HoG=zmP;bpX(jss,si9,QuR,HoG);end;if type(RoK) ~= \"number\" then local _mV=rnt(RoK);if _mV == nil then error(\"invalid 'for' limit (number expected, got \" .. type(RoK) .. \")\");end;RoK=_mV;bpX(jss,si9,hne,RoK);end;if type(xsh) ~= \"number\" then local EmB=rnt(xsh);if EmB == nil then error(\"invalid 'for' step (number expected, got \" .. type(xsh) .. \")\");end;xsh=EmB;bpX(jss,si9,VV,xsh);end;end;if (xsh > 0 and HoG > RoK) or (xsh < 0 and HoG < RoK) then do local pf_=(((((RdF[6] or {})[1] or {})))[0x74E7] or 0);local Hyj=(si9[0x41DB] or 0x3F8314) - (si9[0x58A9] or 0x73361);si9[0x65D2]=Hyj + pf_;end;end;end),[\"azUR\"]=(function(KkM,vxS,QkF)local TEm=KkM.x;local dna,DoQ=(((((QkF[6] or {})[1] or {})))[0x74E7] or 0),(((QkF[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD;if dna < DoQ then DoQ,dna=dna,DoQ;end;for AEf=DoQ,dna do TEm(KkM,vxS,AEf,nil);end;end),[\"xT\"]=(function(neK,jud,vfE,Eth,DdW,QgX)if DdW ~= nil and QgX ~= true then local Zbu=neK.YG;Eth=Zbu.bxor(Eth or 0,0x6B47);DdW=Zbu.bxor(DdW or 0,0xB3C);elseif DdW == nil then DdW=0;end;local qIg,lno=(neK.bESq)(neK,vfE),(neK.iPl)(neK,jud,(neK.LIt)(neK,vfE));local Ttr;if Eth == 0xE42 then Ttr=-lno;else local LoJ=(neK.iPl)(neK,jud,(neK.f)(neK,vfE));if DdW % 2 == 1 then lno,LoJ=LoJ,lno;end;if Eth == 0x1858 then Ttr=lno + LoJ;elseif Eth == 0x4867 then Ttr=lno - LoJ;elseif Eth == 0x3135 then Ttr=lno * LoJ;elseif Eth == 0x2048 then Ttr=lno / LoJ;elseif Eth == 0x1B03 then Ttr=lno % LoJ;elseif Eth == 0x43FF then Ttr=lno ^ LoJ;else return;end;end;local bfT=vfE[3];if type(bfT) == \"table\" then local UoX=bfT[3];if UoX == nil then UoX=(neK.Ok)(neK,qIg);bfT[3]=UoX;end;jud[0x6D74][UoX]=Ttr;else (neK.x)(neK,jud,qIg,Ttr);end;end),[\"Ye\"]=(function(naT,vAD)if naT.p ~= nil then return;end;local mhC=naT.RwA;if type(mhC) ~= \"string\" or mhC == \"\" then return;end;naT.RwA=nil;naT.W=vAD or naT.W or (_ENV or (getfenv and getfenv()) or _G);mhC=(naT.MW)(naT,mhC);local ww=naT.W;local gpZ,NzL=((ww and ww.string) or string).byte,((ww and ww.string) or string).sub;if #mhC < 18 then return;end;local ebc=(ww and ww.bit32) or _G.bit32;local kfO=ebc and ebc.bxor;if not kfO then kfO=(function(UdP,Lhl)local XuL,JkW=0,1;UdP=(tonumber(UdP) or 0) % 256;Lhl=(tonumber(Lhl) or 0) % 256;for gN8=1,8 do if UdP % 2 ~= Lhl % 2 then XuL=XuL + JkW;end;UdP=(UdP - UdP % 2) / 2;Lhl=(Lhl - Lhl % 2) / 2;JkW=JkW * 2;end;return XuL;end);end;local function uni(kp0,JgZ)if type(kp0) ~= \"string\" then return 0;end;local zrF,_rW=#kp0,(JgZ or 0x428A) % 0x7FFFFFFF;if zrF == 0 then return _rW;end;local bxH=zrF < 12 and zrF or 12;for jIk=1,bxH do local ZuU=((_rW + (jIk * 179)) % zrF) + 1;local gxR=gpZ(kp0,ZuU) or 0;_rW=(_rW * 109 + gxR * (jIk + 497) + ZuU * 619 + 0xB003) % 0x7FFFFFFF;end;return _rW;end;local XkY,euC,qp1,ZkP,OEw,ekV=1,126,96,150,249,40;local function anK()local qfI,tbm=gpZ(mhC,XkY),gpZ(mhC,XkY + 1);if not qfI or not tbm or qfI < 65 or qfI > 80 or tbm < 80 or tbm > 95 then return nil;end;XkY=XkY + 2;return ((qfI - 65) * 16) + (tbm - 80);end;local Ryx=anK();if Ryx == nil then return;end;local function TrP(jp2)local tuM,jfN,xfS=1,(ekV + (jp2 * euC)) % 256,0;for xIq=1,4 do local TmG=anK();if not TmG then return nil;end;local bAL=(OEw + jfN + (xIq * ZkP) + (jp2 * euC)) % 256;local SzU=kfO(TmG,bAL);xfS=xfS + (SzU * tuM);tuM=tuM * 256;jfN=(jfN + SzU + qp1 + (xIq * jp2)) % 256;end;return xfS;end;local MdB,zsr=TrP(1),TrP(2);if not MdB or not zsr then return;end;if Ryx ~= kfO(42,(MdB + zsr + ekV) % 256) then return;end;local HlO=XkY;local sid=HlO + MdB;local Dyz=sid + zsr - 1;if Dyz ~= #mhC then return;end;local cnn,ouW,doq=NzL(mhC,HlO,sid - 1),tostring(naT) .. tostring(ww),NzL(mhC,sid,Dyz);local Otl=uni(ouW,0x428A);local mtB=uni(cnn,Otl + (#cnn * 179));mtB=(mtB + uni(doq,Otl + (#doq * 0xB003))) % 0x7FFFFFFF;local WdK=((Otl * 455) + (mtB * 129) + (#ouW * 0x1BF0) + 0x428A) % 0x7FFFFFFF;if WdK == 0 then WdK=0x1BF0;end;naT.A=cnn;naT.vQ=doq;naT.p={1,ww,WdK,mtB,Otl};end),[\"JY\"]=(function(p,JJ,VdX)local LzW,lk2,cNe,SfW=VdX[6],JJ[0x219F],(((VdX[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,JJ[0x6D74];local mNt,fNa=LzW[1],LzW[2];local inJ;do local Von=mNt;local F,DfV=Von[0x74E7] or 0,Von[0x721B] or 0x4E81;if DfV == 0x990 then inJ=F;elseif DfV == 0xFCA then local d9=JJ[0x6B9A];if d9 == nil then d9={};JJ[0x6B9A]=d9;end;local Hai=d9[Von];if Hai == nil then p.y=p.YG.bxor(((F + 0x892) * 189 + (p.qmPH or 0) + (p.Zn or 0) + ((p.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);p.F=((F + ((((VdX[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD) + (p.qmPH or 0)) % 4);Hai=JJ[0x14B2][F];p.y=nil;d9[Von]=Hai == nil and p.nUn or Hai;if Hai == p.nUn then inJ=nil;else inJ=Hai;end;elseif Hai == p.nUn then inJ=nil;else inJ=Hai;end;elseif DfV == 0x713 then local lee=JJ[0x6B9A];if lee == nil then lee={};JJ[0x6B9A]=lee;end;local Ran=lee[Von];if Ran == nil then p.y=p.YG.bxor(((F + 0x892) * 189 + (p.qmPH or 0) + (p.Zn or 0) + ((p.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);p.F=((F + ((((VdX[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD) + (p.qmPH or 0)) % 4);Ran=JJ[0x14B2][F];p.y=nil;lee[Von]=Ran == nil and p.nUn or Ran;if Ran == p.nUn then inJ=nil;else inJ=Ran;end;elseif Ran == p.nUn then inJ=nil;else inJ=Ran;end;elseif DfV == 0x6514 then inJ=SfW[F];else inJ=nil;end;end;local JeM;do local Goh=fNa;local W,Bf2=Goh[0x74E7] or 0,Goh[0x721B] or 0x4E81;if Bf2 == 0x990 then JeM=W;elseif Bf2 == 0xFCA then local uet=JJ[0x6B9A];if uet == nil then uet={};JJ[0x6B9A]=uet;end;local Das=uet[Goh];if Das == nil then p.y=p.YG.bxor(((W + 0x892) * 189 + (p.qmPH or 0) + (p.Zn or 0) + ((p.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);p.F=((W + ((((VdX[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD) + (p.qmPH or 0)) % 4);Das=JJ[0x14B2][W];p.y=nil;uet[Goh]=Das == nil and p.nUn or Das;if Das == p.nUn then JeM=nil;else JeM=Das;end;elseif Das == p.nUn then JeM=nil;else JeM=Das;end;elseif Bf2 == 0x713 then local cea=JJ[0x6B9A];if cea == nil then cea={};JJ[0x6B9A]=cea;end;local Lah=cea[Goh];if Lah == nil then p.y=p.YG.bxor(((W + 0x892) * 189 + (p.qmPH or 0) + (p.Zn or 0) + ((p.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);p.F=((W + ((((VdX[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD) + (p.qmPH or 0)) % 4);Lah=JJ[0x14B2][W];p.y=nil;cea[Goh]=Lah == nil and p.nUn or Lah;if Lah == p.nUn then JeM=nil;else JeM=Lah;end;elseif Lah == p.nUn then JeM=nil;else JeM=Lah;end;elseif Bf2 == 0x6514 then JeM=SfW[W];else JeM=nil;end;end;local eqR=SfW[cNe];eqR[inJ]=JeM;end),[\"wihR\"]=(function(V,arv,xnp)local yib=V.p;if type(yib) ~= \"table\" or (yib[1] ~= 2 and yib[1] ~= 3) then return;end;local R=arv and arv[1];if not R then return;end;local KsI=V.lIC;if KsI == nil then V.lIC=V.Ctf;elseif V.Ctf ~= KsI then error(\"\",0);end;local Bhb=arv[2];if type(Bhb) == \"table\" then Bhb=(V.g)(V,\"\",\"\",Bhb);end;V.Qyx=Bhb or ((function()return nil;end));V.Vo=V.Vo or (V.H)(V);if V.ve == nil then V.ve=V.Vo;elseif V.Vo ~= V.ve then error(\"\",0);end;local e0=R[0x152A];if type(e0) ~= \"table\" then e0={};end;local ViK=(V.W and V.W.setmetatable) or setmetatable;if type(ViK) == \"function\" then local XsH=e0;R[0x152A]=ViK({},{[\"__\" .. \"index\"]=(function(SSu,Jvb)return XsH[Jvb];end),[\"__\" .. \"newindex\"]=(function(HSc,tvj,pwy)XsH[tvj]=pwy;end),[\"__\" .. \"metatable\"]={}});else R[0x152A]=e0;end;local zhX=0;if zhX ~= 0 then (V.xC)(V,R[0x2A30],R[0x1BA3],zhX);end;local hdm,kt1,KlP={},{},{};kt1.n=0;local Wm8=0;if xnp then local qt2,qmF,orb,ddw=1,V.Ok,xnp.n or #xnp,R[0x4185] or 0;for GO2=1,orb do local Kb7=xnp[GO2];KlP[(qmF)(V,GO2 - 1)]=Kb7;if GO2 > ddw then kt1[qt2]=Kb7;qt2=qt2 + 1;end;end;kt1.n=qt2 - 1;if orb > 0 then Wm8=orb - 1;end;end;local fy3={[0x6D74]=KlP,[0x108C]=hdm,[0x14B2]=R[0x1BA3],[0x65D2]=(0x3F8314 - 0x73361) + 1,[0x41DB]=0x3F8314,[0x58A9]=0x73361,[0x59C3]=Wm8,[0x58A1]=kt1,[0x2B7D]=V.lFB,[0x2A4A]=R[0x152A],[0x219F]={},[0x4B8F]=0};return (V.Ctf)(V,fy3,R[0x2A30]);end),[\"pd\"]=(function(XO6,Gx9,bcK)return Gx9[0x6D74][bcK];end),[\"RKF\"]=(function(cvH,jq5,ykr)local UA3=cvH.W;local CA4=UA3.string.sub;local TwE;TwE,ykr=(cvH.Hkys)(cvH,jq5,ykr);if TwE == nil then return nil,ykr;end;local Qzt=CA4(jq5,ykr,ykr + TwE - 1);return Qzt or \"\",ykr + TwE;end),[\"g\"]=(function(G,Tuf,xti,ega)if type(ega) == \"table\" then return (function(pkd)local UnI=ega[pkd];if UnI == nil then return nil;end;return UnI,UnI;end);end;if type(Tuf) ~= \"string\" or Tuf == \"\" or type(xti) ~= \"string\" or xti == \"\" then return (function()return nil;end);end;local Sej,MA5=(G.RKF)(G,Tuf,1);local xt4;xt4,MA5=(G.RKF)(G,Tuf,MA5);if type(Sej) ~= \"string\" or type(xt4) ~= \"string\" then return (function()return nil;end);end;local py6=G.W;local _q8,mdb,clr,YA8,qcX,vy7,KtT,Jza=py6.string.char,#xti,0x7FFFFFED,py6.string.sub,py6.string.byte,py6.table.concat,G.YG,py6.math.floor;local vv;local function Xzo(Jfs)return ((Jfs * 161 + 0x24DF + ((Jfs % 251) * 245)) % clr);end;local function KK(Xfh,Ajt)local QTx=((Xfh * 865) + (Ajt * 467) + 0x3EA6) % clr;local Oja=(((Xfh * 571) + (Ajt * 0x51CA)) % mdb) + 1;return KtT.bxor(QTx,qcX(xti,Oja) or 0);end;local function jpa(bku,ezn,wdk)return ((bku * 231 + ezn * 359 + wdk * 231 + 0x5A74) % clr);end;local function Ic7()if vv ~= nil then return vv;end;vv={};local FnH,cgf=(0x52DA + #Sej + mdb * 17) % 0x10000,{};for WnR=1,#Sej do local Pjy=(((WnR * 571) + 0x51CA) % mdb) + 1;local vlf,ydq=qcX(xti,Pjy) or 0,qcX(Sej,WnR) or 0;local izd,sTH=((vlf * ((WnR % 5) + 1)) + (FnH % 251) + WnR) % 256,(FnH + vlf + WnR * 911) % 256;cgf[WnR]=_q8(KtT.bxor(ydq,KtT.bxor(sTH,izd)));FnH=((FnH * 591) + ydq + vlf + WnR * 625) % 0x10000;end;local fe4=vy7(cgf);local dsV,bb=(G.Hkys)(G,fe4,1);if dsV == nil then return vv;end;local WwF=KtT.bxor(dsV,KK(0,7));if WwF < 0 or WwF > Jza((#fe4 - 1) / 5) then return vv;end;for QiZ=1,WwF do local lsB;local ZtN;local caR;local gg;local Rmt;lsB,bb=(G.Hkys)(G,fe4,bb);ZtN,bb=(G.Hkys)(G,fe4,bb);caR,bb=(G.Hkys)(G,fe4,bb);gg,bb=(G.Hkys)(G,fe4,bb);Rmt,bb=(G.Hkys)(G,fe4,bb);if lsB == nil or ZtN == nil or caR == nil or gg == nil or Rmt == nil then vv={};return vv;end;local mgw,_oC,Ko8,thE,htM=KtT.bxor(Rmt,KK(QiZ,5)),KtT.bxor(caR,KK(QiZ,3)),KtT.bxor(gg,KK(QiZ,4)),KtT.bxor(lsB,KK(QiZ,1)),KtT.bxor(ZtN,KK(QiZ,2));if thE > 0 and htM > 0 and _oC > 0 and Ko8 > 0 and htM + _oC - 1 <= #xt4 and mgw == Xzo(thE) and vv[thE] == nil then vv[thE]={htM,_oC,Ko8,mgw};end;end;return vv;end;local function YwW(Qo9,blw,PwY,etS)local wgp={};local VwP=(0xAE85 + (blw % 0x10000) + (PwY % 0x10000) + etS * 0x42D) % 0x10000;local rrx=(VwP + (blw % 251) + (PwY % 251)) % 0x10000;for YnD=1,#Qo9 do local Vjp=(((etS * 571) + YnD - 2) % mdb) + 1;local gly,PnL=qcX(xti,Vjp) or 0,qcX(Qo9,YnD) or 0;local hTR,nzl=(VwP + rrx + gly + YnD * 445) % 256,(blw + PwY + etS * 17 + YnD * 445) % 256;wgp[YnD]=_q8(KtT.bxor(PnL,KtT.bxor(hTR,nzl)));rrx=((rrx * 295) + PnL + gly + YnD * 761) % 0x10000;VwP=(VwP + gly + PnL + YnD * 445) % 0x10000;end;return vy7(wgp);end;return (function(ahT,Iup,Apr)if type(ahT) ~= \"number\" or type(Iup) ~= \"number\" then return nil;end;local Hex=Ic7()[ahT];if not Hex or Hex[4] ~= Iup then return nil;end;if Apr then return true,Hex;end;local pdj=YA8(xt4,Hex[1],Hex[1] + Hex[2] - 1);local usG=YwW(pdj,ahT,Iup,Hex[3]);local XOs,we5=(G.Hkys)(G,usG,1);if XOs ~= jpa(ahT,Iup,Hex[3]) then return nil;end;local rtF;local VnU;local csK;rtF,we5=(G.RKF)(G,usG,we5);VnU,we5=(G.RKF)(G,usG,we5);csK,we5=(G.Hkys)(G,usG,we5);if rtF == nil or VnU == nil or csK == nil or we5 ~= (#usG + 1) then return nil;end;local BwV={[0x6FEF]=rtF,[0x7E17]=VnU,[0x4185]=csK};return BwV,Hex;end);end),[\"AnfQ\"]=(function(nIo,ygv,Bjv)local XNC,msQ,ZOh,szu=(((Bjv[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,ygv[0x219F],Bjv[6],ygv[0x6D74];local DSf=ZOh[1];do local Oh3,pgb=XNC,nil;szu[Oh3]=pgb;local Gjb=msQ and msQ[Oh3];if Gjb then Gjb[1]=pgb;end;end;end),[\"vYK\"]=(function(AvX,vdx,U,mAI,zkp)local RR,v=vdx[0x6D74],vdx[0x219F];local maD=RR[U];if mAI == 1 then if zkp == 1 then maD();return;elseif zkp == 2 then local Ipl=maD();RR[U]=Ipl;local Kjg=v and v[U];if Kjg then Kjg[1]=Ipl;end;return;end;elseif mAI == 2 then local Qjk=RR[U + 1];if zkp == 1 then maD(Qjk);return;elseif zkp == 2 then local Npu=maD(Qjk);RR[U]=Npu;local Jjq=v and v[U];if Jjq then Jjq[1]=Npu;end;return;end;elseif mAI == 3 then local Xjj,Zjx=RR[U + 1],RR[U + 2];if zkp == 1 then maD(Xjj,Zjx);return;elseif zkp == 2 then local Spc=maD(Xjj,Zjx);RR[U]=Spc;local ejz=v and v[U];if ejz then ejz[1]=Spc;end;return;end;elseif mAI == 4 then local tj_,ajE,ojT=RR[U + 2],RR[U + 3],RR[U + 1];if zkp == 1 then maD(ojT,tj_,ajE);return;elseif zkp == 2 then local Hpm=maD(ojT,tj_,ajE);RR[U]=Hpm;local ijA=v and v[U];if ijA then ijA[1]=Hpm;end;return;end;end;local EoM=(AvX.W.table and AvX.W.table.unpack) or AvX.W.unpack;if not EoM then EoM=(function(Lmo,bdz,GwB)bdz=bdz or 1;GwB=GwB or #Lmo;if bdz > GwB then return;end;return Lmo[bdz],EoM(Lmo,bdz + 1,GwB);end);end;local function Ih4(...)return {[\"n\"]=select(\"#\",...),...};end;local gel;if mAI == 0 then gel=vdx[0x59C3] - U;else gel=mAI - 1;end;if gel < 0 then gel=0;end;local Ji0;if gel == 0 then if zkp == 1 then maD();return;end;Ji0=Ih4(maD());else local OvZ={};for YIF=1,gel do OvZ[YIF]=RR[U + YIF];end;if zkp == 1 then maD(EoM(OvZ,1,gel));return;end;Ji0=Ih4(maD(EoM(OvZ,1,gel)));end;local _iA=Ji0.n or 0;if zkp == 0 then if _iA == 0 then RR[U]=nil;local njO=v and v[U];if njO then njO[1]=nil;end;vdx[0x59C3]=U - 1;return;end;vdx[0x59C3]=U + _iA - 1;for PIW=1,_iA do local bgk,ggq=Ji0[PIW],U + PIW - 1;RR[ggq]=bgk;local sjI=v and v[ggq];if sjI then sjI[1]=bgk;end;end;else for VIY=1,zkp - 1 do local kgj,qgx=U + VIY - 1,Ji0[VIY];RR[kgj]=qgx;local hjN=v and v[kgj];if hjN then hjN[1]=qgx;end;end;end;end),[\"AK\"]=(function(sIi,jgz,rjS)local eOr,ZNM,hzc,fsJ=rjS[6],(((rjS[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,jgz[0x6D74],jgz[0x219F];local eNF=eOr[1];do local Nh5,xg_=ZNM,(eNF[0x74E7] or 0);hzc[Nh5]=xg_;local djH=fsJ and fsJ[Nh5];if djH then djH[1]=xg_;end;end;end),[((\"Dy\" .. \"J\"))]=(function(ljR,ujD,tOd)local tNW=0x2D90;repeat if tNW == 0x2D90 then return (ljR.AQ)(ljR,ujD,tOd);else return;end;until false;end),[\"ykPX\"]=(function(rIs,Nuv,cjL)if not Nuv[0x6D74][(((cjL[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD] then do local KwG=(((((cjL[6] or {})[1] or {})))[0x74E7] or 0);local Rpf=(Nuv[0x41DB] or 0x3F8314) - (Nuv[0x58A9] or 0x73361);Nuv[0x65D2]=Rpf + KwG;end;end;end),[\"EWv\"]=(function(Umi,rzm,rTD)local dTL=Umi.x;local Cmn,QwK,Xi1=Umi.YG,Umi.W.string.byte,Umi.hdi;local lTU,uTC,cTM,mTF=0,0,0,0;if type(Xi1) == \"string\" then lTU=QwK(Xi1,1) or 0;uTC=QwK(Xi1,2) or 0;cTM=QwK(Xi1,3) or 0;mTF=QwK(Xi1,4) or 0;end;local JwQ,Iv0=(cTM * 369 + mTF * 131 + 0x5DCB) % 0x10000,(lTU * 851 + uTC * 257 + 0x1164) % 0x10000;local zgE=Cmn.bxor(Iv0,JwQ);local dzf=(lTU * 17 + uTC * 29 + cTM * 43 + mTF * 59 + 0x7308) % 0x10000;local _gT=(zgE * 839 - Iv0 + JwQ + dzf + 743) % 0x10000;local qOO=Cmn.bxor((zgE + _gT + 0x1EB0) % 0x10000,(Iv0 + JwQ) % 0x10000);local Mms=_gT;dTL(Umi,rzm,(((rTD[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,Mms);end),[\"lK\"]=(function(dIh,fjC)return fjC;end),[\"AQ\"]=(function(XwJ,gd_,wjM)local jOI=537;local BIP;repeat if jOI == 537 then gd_,wjM=(XwJ.rO)(XwJ,gd_,wjM);if gd_ == nil then error(\"runtime error\",0);end;jOI=0x768E;elseif jOI == 0x768E then BIP=XwJ.EkY;jOI=0x2D90;else return BIP(XwJ,gd_,wjM);end;until false;end),[\"xC\"]=(function(yjF,wsX,Dpw,keu)if type(wsX) ~= \"table\" then return keu or 0;end;keu=keu or 0;local ysZ=keu < 0;if not ysZ and keu == 0 then return keu;end;local xmY,Fmh,Nv1=keu,0,1;while ysZ or Fmh < xmY do local Lpy=wsX[Nv1];if Lpy == nil then break;end;Fmh=Fmh + 1;keu=(yjF.z)(yjF,Lpy,Dpw,keu);if not ysZ and keu == 0 then break;end;Nv1=Nv1 + 1;end;return keu;end),[\"Yzc\"]=(function(lIr,Sub,Sv2)local lzw,Upp=Sub[0x6D74][(((Sv2[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD],(((((Sv2[6] or {})[2] or {})))[0x74E7] or 0) ~= 0;if (lzw == nil) == Upp then do local ZwX=(((((Sv2[6] or {})[1] or {})))[0x74E7] or 0);local Cpv=(Sub[0x41DB] or 0x3F8314) - (Sub[0x58A9] or 0x73361);Sub[0x65D2]=Cpv + ZwX;end;end;end),[\"o\"]=(function(ewZ,pjW,tw0)local Hv3=(ewZ.je)(ewZ,pjW,tw0 or 0);return (ewZ.wihR)(ewZ,Hv3);end),[\"zh\"]=(function(b,a2,klp)local vjY,Zz4,aw1,aNY=a2[0x219F],klp[6],a2[0x6D74],(((klp[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD;local oNP,iNV=Zz4[2],Zz4[1];local yn9;do local ooy=iNV;local iw3,Q=ooy[0x721B] or 0x4E81,ooy[0x74E7] or 0;if iw3 == 0x6514 then yn9=aw1[Q];elseif iw3 == 0x990 then yn9=Q;elseif iw3 == 0xFCA then local qec=a2[0x6B9A];if qec == nil then qec={};a2[0x6B9A]=qec;end;local Qab=qec[ooy];if Qab == nil then b.y=b.YG.bxor(((Q + 0x892) * 189 + (b.qmPH or 0) + (b.Zn or 0) + ((b.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);b.F=((Q + ((((klp[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD) + (b.qmPH or 0)) % 4);Qab=a2[0x14B2][Q];b.y=nil;qec[ooy]=Qab == nil and b.nUn or Qab;if Qab == b.nUn then yn9=nil;else yn9=Qab;end;elseif Qab == b.nUn then yn9=nil;else yn9=Qab;end;elseif iw3 == 0x713 then local jem=a2[0x6B9A];if jem == nil then jem={};a2[0x6B9A]=jem;end;local Jag=jem[ooy];if Jag == nil then b.y=b.YG.bxor(((Q + 0x892) * 189 + (b.qmPH or 0) + (b.Zn or 0) + ((b.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);b.F=((Q + ((((klp[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD) + (b.qmPH or 0)) % 4);Jag=a2[0x14B2][Q];b.y=nil;jem[ooy]=Jag == nil and b.nUn or Jag;if not (Jag == b.nUn) then yn9=Jag;else yn9=nil;end;elseif Jag == b.nUn then yn9=nil;else yn9=Jag;end;else yn9=nil;end;end;local ZeW;do local iop=oNP;local nw4,J=iop[0x721B] or 0x4E81,iop[0x74E7] or 0;if nw4 == 0x6514 then ZeW=aw1[J];elseif nw4 == 0x990 then ZeW=J;elseif nw4 == 0xFCA then local xef=a2[0x6B9A];if xef == nil then xef={};a2[0x6B9A]=xef;end;local Xak=xef[iop];if Xak == nil then b.y=b.YG.bxor(((J + 0x892) * 189 + (b.qmPH or 0) + (b.Zn or 0) + ((b.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);b.F=((J + ((((klp[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD) + (b.qmPH or 0)) % 4);Xak=a2[0x14B2][J];b.y=nil;xef[iop]=Xak == nil and b.nUn or Xak;if Xak == b.nUn then ZeW=nil;else ZeW=Xak;end;elseif Xak == b.nUn then ZeW=nil;else ZeW=Xak;end;elseif nw4 == 0x713 then local zew=a2[0x6B9A];if zew == nil then zew={};a2[0x6B9A]=zew;end;local Zaq=zew[iop];if Zaq == nil then b.y=b.YG.bxor(((J + 0x892) * 189 + (b.qmPH or 0) + (b.Zn or 0) + ((b.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);b.F=((J + ((((klp[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD) + (b.qmPH or 0)) % 4);Zaq=a2[0x14B2][J];b.y=nil;zew[iop]=Zaq == nil and b.nUn or Zaq;if not (Zaq == b.nUn) then ZeW=Zaq;else ZeW=nil;end;elseif Zaq == b.nUn then ZeW=nil;else ZeW=Zaq;end;else ZeW=nil;end;end;local fTW=aw1[aNY];fTW[yn9]=ZeW;end),[\"MW\"]=(function(lr_,ToF)if ToF == nil or ToF == \"\" then return ToF or \"\";end;local aOl=lr_.W;local oOu,Mpb=aOl.string.sub,\"lRS71iGSRZNUjW\";local vs1=#Mpb;if #ToF <= vs1 or oOu(ToF,1,vs1) ~= Mpb then return ToF;end;local ei3,wTY=(lr_.RKF)(lr_,ToF,vs1 + 1);local EiO;EiO,wTY=(lr_.Hkys)(lr_,ToF,wTY);if not ei3 or EiO == nil or wTY ~= (#ToF + 1) then return ToF;end;local Rv4=(lr_.bC)(lr_,ei3,EiO);return Rv4 or ToF;end),[\"CucV\"]=(function(ye6,uzy,bjP)local yTP=ye6.x;local Fpg=bjP[3];if type(Fpg) ~= \"string\" then Fpg=\"\";end;local urE=ye6.YG;local Hug,pTV=(ye6.Hkys)(ye6,Fpg,1);Hug=Hug or 1;local tfl;tfl,pTV=(ye6.Hkys)(ye6,Fpg,pTV or 1);tfl=urE.bxor(tfl or 0,0x668C);local bs2;bs2=(ye6.RKF)(ye6,Fpg,pTV or 1);if type(bs2) ~= \"string\" then bs2=\"\";end;local Sh6=ye6.Pl;local TiI,qdT=(type(Sh6) == \"string\" and #Sh6 or 0) % 0x10000,\"\";local tz6,nl1,kjB,qjG,GnM,vTB={},#qdT,ye6.W.table.concat,ye6.W.string.byte,(0x137B + tfl + TiI + (2 * 0xA113)) % 256,ye6.W.string.char;for bTG=1,#bs2 do local ohA;if nl1 > 0 then ohA=qjG(qdT,((bTG - 1) % nl1) + 1) or 0;else ohA=(TiI + bTG * 53 + tfl) % 256;end;local gTK=(tfl + TiI * 507 + bTG * 53 + ohA * 663 + GnM + 2 * 0xA113) % 256;local czp=(0x137B + bTG * 151 + GnM * 53 + 2 * 0x668C) % 256;local jjK,jdA=urE.bxor(gTK,czp),qjG(bs2,bTG) or 0;tz6[bTG]=vTB(urE.bxor(jdA,jjK));GnM=((GnM * 151) + jdA + jjK + ohA + bTG * 53 + 2 * 0xAA12) % 256;end;local Wpk=kjB(tz6);yTP(ye6,uzy,(((bjP[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,ye6.W.string.sub(Wpk,Hug,Hug + 1));ye6.hdi=Wpk;end),[\"Q\"]=(function(DD,o3,Vmu)local zjJ,crT,Dv5=(DD.W.next or next),DD.x,DD.pd;local gs3,_jX,Moe,mzv=(((Vmu[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,(((((Vmu[6] or {})[2] or {})))[0x74E7] or 0),Vmu[3],(((((Vmu[6] or {})[1] or {})))[0x74E7] or 0);local LL;local ti4;if not (type(Moe) == \"table\") then local fzb=1;LL,fzb=(DD.Gu)(DD,Moe or \"\",fzb);ti4,fzb=(DD.Gu)(DD,Moe or \"\",fzb);Moe={LL or (gs3 + 2),ti4 or (gs3 + 3)};Vmu[3]=Moe;LL=Moe[1];ti4=Moe[2];else LL=Moe[1];ti4=Moe[2];end;local Ypq,xON,pe7,pse=Dv5(DD,o3,LL),o3[0x6D74],Dv5(DD,o3,gs3),Dv5(DD,o3,gs3 + 1);local function qlv(...)local GIV=select(\"#\",...);local EgA={[\"n\"]=GIV};for TgO=1,GIV do EgA[TgO]=select(TgO,...);end;return EgA;end;local ihO;if pse == nil and Ypq == nil and type(pe7) ~= \"function\" then local afu,ks4,Lv6=DD.W.getmetatable or getmetatable,type(pe7),DD.W.rawget or rawget;local iOc=afu and afu(pe7);local EjZ=iOc and Lv6(iOc,\"__iter\");if EjZ ~= nil then local gaY,ai5,Jie=EjZ(pe7);crT(DD,o3,gs3,gaY);crT(DD,o3,gs3 + 1,ai5);crT(DD,o3,LL,Jie);ihO=qlv(gaY(ai5,Jie));elseif ks4 == \"table\" then crT(DD,o3,gs3,zjJ);crT(DD,o3,gs3 + 1,pe7);ihO=qlv(zjJ(pe7,nil));else error(\"attempt to iterate over a \" .. ks4 .. \" value\");end;else ihO=qlv(pe7(pse,Ypq));end;for AgI=1,mzv do crT(DD,o3,ti4 + AgI - 1,ihO[AgI]);end;if ihO[1] == nil then do local sw5=_jX;local Ppj=(o3[0x41DB] or 0x3F8314) - (o3[0x58A9] or 0x73361);o3[0x65D2]=Ppj + sw5;end;else crT(DD,o3,LL,ihO[1]);end;end),[\"XOkV\"]=(function(ff,Xit,hw6)local qs5,OgN,nOm,nNB=Xit[0x219F],Xit[0x6D74],hw6[6],(((hw6[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD;local sNG=nOm[1];local eeY;do local nov=sNG;local rw7,X=nov[0x721B] or 0x4E81,nov[0x74E7] or 0;if rw7 == 0xFCA then local Eep=Xit[0x6B9A];if Eep == nil then Eep={};Xit[0x6B9A]=Eep;end;local eaj=Eep[nov];if eaj == nil then ff.y=ff.YG.bxor(((X + 0x892) * 189 + (ff.qmPH or 0) + (ff.Zn or 0) + ((ff.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);ff.F=((X + ((((hw6[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD) + (ff.qmPH or 0)) % 4);eaj=Xit[0x14B2][X];ff.y=nil;Eep[nov]=eaj == nil and ff.nUn or eaj;if not (eaj == ff.nUn) then eeY=eaj;else eeY=nil;end;elseif eaj == ff.nUn then eeY=nil;else eeY=eaj;end;elseif rw7 == 0x713 then local Tev=Xit[0x6B9A];if Tev == nil then Tev={};Xit[0x6B9A]=Tev;end;local tax=Tev[nov];if tax == nil then ff.y=ff.YG.bxor(((X + 0x892) * 189 + (ff.qmPH or 0) + (ff.Zn or 0) + ((ff.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);ff.F=((X + ((((hw6[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD) + (ff.qmPH or 0)) % 4);tax=Xit[0x14B2][X];ff.y=nil;Tev[nov]=tax == nil and ff.nUn or tax;if tax == ff.nUn then eeY=nil;else eeY=tax;end;elseif tax == ff.nUn then eeY=nil;else eeY=tax;end;elseif rw7 == 0x6514 then eeY=OgN[X];elseif rw7 == 0x990 then eeY=X;else eeY=nil;end;end;do local IgS,Hh7=eeY,nNB;OgN[Hh7]=IgS;local Tj0=qs5 and qs5[Hh7];if Tj0 then Tj0[1]=IgS;end;end;end),[\"je\"]=(function(dtW,ttH,dw8,qur)local AiN=dtW.p;if type(AiN) ~= \"table\" or (AiN[1] ~= 2 and AiN[1] ~= 3) then return;end;if type(ttH) == \"table\" and not dtW.Pl then return;end;ttH=(dtW.lK)(dtW,ttH);ttH=(dtW.MW)(dtW,ttH);ttH=(dtW.mrX)(dtW,ttH);local Bmc=dtW.r;dtW.r=ttH or true;local Uv7=(dtW.TA)(dtW,ttH,dw8,qur);dtW.r=Bmc;return Uv7;end),[\"OolL\"]=(function(cIl,SgR,Oj2)local hNK,js6,HgD,oz8=(((Oj2[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,SgR[0x219F],SgR[0x6D74],Oj2[6];local rNQ,dNJ=oz8[2],oz8[1];do local Rh8,RgL=hNK,HgD[(dNJ[0x74E7] or 0)] * (rNQ[0x74E7] or 0);HgD[Rh8]=RgL;local Ij3=js6 and js6[Rh8];if Ij3 then Ij3[1]=RgL;end;end;end),[\"Olb\"]=(function(uye,cyt,Gmm)local xTZ=uye.pd;local sl2,Kmf,Nj4,xs7=(((((Gmm[6] or {})[1] or {})))[0x74E7] or 0),(((((Gmm[6] or {})[2] or {})))[0x74E7] or 0),cyt[0x6D74][(((Gmm[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD],Gmm[3];if type(xs7) ~= \"number\" then xs7=(uye.Hkys)(uye,xs7 or \"\",1) or 0;Gmm[3]=xs7;end;if xs7 ~= 0 then Kmf=cyt[0x59C3] or (sl2 - 1);end;local QnW=0;for zT0=sl2,Kmf do QnW=QnW + 1;Nj4[QnW]=xTZ(uye,cyt,zT0);end;end),[\"iaD\"]={[0x4293]=true,[0x4824]=true,[0x4C81]=true,[0x4ED4]=true,[0x6F48]=true,[0x78D6]=true,[0x144C]=true,[0x1EAE]=true,[0x2595]=true,[0x26CD]=true},[\"LIt\"]=(function(mIu,Sj5)local iz9=Sj5[6];return (type(iz9) == \"table\" and iz9[2]) or {};end),[\"z\"]=(function(Hj6,Bpz,Gp_,PP)if type(Bpz) ~= \"table\" then return PP or 0;end;PP=PP or 0;local zs8=PP < 0;if not zs8 and PP == 0 then return PP;end;if not zs8 then PP=PP - 1;end;local Rj7=Bpz[1];if type(Rj7) == \"table\" then for lNX=1,#Rj7 do PP=(Hj6.z)(Hj6,Rj7[lNX],Gp_,PP);if not zs8 and PP == 0 then break;end;end;end;return PP;end),[\"CMP\"]=(function(jlb,xdO,Qmw)local _T1,Cv8=jlb.iPl,jlb.x;local Mv9=xdO[0x6D74][(((Qmw[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD];Cv8(jlb,xdO,(((Qmw[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD + 1,Mv9);local n_e=_T1(jlb,xdO,(((Qmw[6] or {})[1] or {})));local KpE=Mv9[n_e];if KpE == nil then Cv8(jlb,xdO,(((Qmw[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,(function()error(\"attempt to call missing method '\" .. tostring(n_e) .. \"' of \" .. type(Mv9));end));else Cv8(jlb,xdO,(((Qmw[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,KpE);end;end),[\"fGJ\"]=(function(fIc,DgU,Dj8)local _s9,wzg,sOf,uNZ=DgU[0x219F],DgU[0x6D74],Dj8[6],(((Dj8[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD;local LSw=sOf[1];do local LgC,Dh9=true,uNZ;wzg[Dh9]=LgC;local Lj9=_s9 and _s9[Dh9];if Lj9 then Lj9[1]=LgC;end;end;end),[\"w\"]=(function(kk,Uxe,fyo)local Fbe,PeH=(kk.je)(kk,Uxe,fyo or 0),kk.VHXb;if not PeH then PeH={};kk.VHXb=PeH;end;local aaz=PeH[1];if not aaz then aaz={(function(Jmy,mrA)return (kk.w)(kk,Jmy,mrA);end),(function(Xmp)return (kk.MW)(kk,Xmp);end)};aaz.n=2;PeH[1]=aaz;end;local function ET2(...)return {[\"n\"]=select(\"#\",...),...};end;local _dN=ET2((kk.wihR)(kk,Fbe,aaz));local UU=_dN.n == 1 and _dN[1];if type(UU) == \"table\" then local TT=UU[1];if type(TT) == \"table\" then if TT[0x2A30] ~= nil then return (kk.wihR)(kk,UU);elseif TT[0x6FEF] ~= nil then UU[1]=(kk.uYXj)(kk,TT[0x6FEF],TT[0x7E17],TT[0x4185]);return (kk.wihR)(kk,UU);end;end;end;if type(UU) == \"table\" and UU[0x341A] == 0x593D then return (kk.o)(kk,UU[0x3749],UU[0x31D8] or 0);end;local Wbt=(kk.W.table and kk.W.table.unpack) or kk.W.unpack or unpack;return Wbt(_dN,1,_dN.n or 0);end),[\"fEmM\"]=(function(ve8,yzk,Cxt)local TT3=ve8.x;local QpT=Cxt[3];if type(QpT) ~= \"string\" then QpT=\"\";end;local frO=ve8.YG;local Luj,AT4=(ve8.Hkys)(ve8,QpT,1);Luj=Luj or 1;local ofc;ofc,AT4=(ve8.Hkys)(ve8,QpT,AT4 or 1);ofc=frO.bxor(ofc or 0,0x668C);local Ehe;Ehe=(ve8.RKF)(ve8,QpT,AT4 or 1);if type(Ehe) ~= \"string\" then Ehe=\"\";end;local Lre=ve8.Pl;local EdS,OiS=\"\",(type(Lre) == \"string\" and #Lre or 0) % 0x10000;local hl3,s_t,OT5,Mxa,JnY,Fxo=#EdS,{},ve8.W.string.char,ve8.W.table.concat,(0x137B + ofc + OiS + (1 * 0xA113)) % 256,ve8.W.string.byte;for IT6=1,#Ehe do local shN;if hl3 > 0 then shN=Fxo(EdS,((IT6 - 1) % hl3) + 1) or 0;else shN=(OiS + IT6 * 53 + ofc) % 256;end;local NT7=(ofc + OiS * 507 + IT6 * 53 + shN * 663 + JnY + 1 * 0xA113) % 256;local pzq=(0x137B + IT6 * 151 + JnY * 53 + 1 * 0x668C) % 256;local TdH,Wxi=Fxo(Ehe,IT6) or 0,frO.bxor(NT7,pzq);s_t[IT6]=OT5(frO.bxor(TdH,Wxi));JnY=((JnY * 151) + TdH + Wxi + shN + IT6 * 53 + 1 * 0xAA12) % 256;end;local JpA=Mxa(s_t);TT3(ve8,yzk,(((Cxt[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,ve8.W.string.sub(JpA,Luj,Luj + 1));ve8.hdi=JpA;end),[\"n\"]=(function(CC,i4,wrI)local wyi,ST8,XnP,Yxn=CC.pd,CC.Ctf,(CC.W.table and CC.W.table.unpack) or CC.W.unpack,CC.x;if not XnP then XnP=(function(emb,AdR,yyn)AdR=AdR or 1;yyn=yyn or #emb;if AdR > yyn then return;end;return emb[AdR],XnP(emb,AdR + 1,yyn);end);end;local OoY,D,T,qq,O=wrI[0x24A2],(((((wrI[6] or {})[2] or {})))[0x74E7] or 0),(((wrI[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,(((((wrI[6] or {})[1] or {})))[0x74E7] or 0),wrI[3];if type(O) ~= \"number\" then local tmg,hhS=O or \"\",1;O,hhS=(CC.Gu)(CC,tmg,hhS);O=O or -1;local _t6;_t6,hhS=(CC.Hkys)(CC,tmg,hhS);if type(_t6) == \"number\" and _t6 > 0 then OoY=_t6;end;wrI[3]=O;wrI[0x24A2]=OoY;end;local IoP=wyi(CC,i4,T);local Tht=CC.akj and CC.akj[IoP];if IoP == nil then local xlg=\"attempt to call a nil value\";if type(OoY) == \"number\" and OoY > 0 then xlg=\"script:\" .. tostring(OoY) .. \": \" .. xlg;end;error(xlg,0);end;if not Tht and qq >= 0 and qq <= 3 and D >= 0 and D <= 3 then local Rez,Aha=i4[0x6D74],i4[0x219F];local function Pxs(Urt,UgM)Rez[Urt]=UgM;local Vxh=Aha and Aha[Urt];if Vxh then Vxh[1]=UgM;end;end;if D == 0 then if qq == 0 then IoP();elseif qq == 1 then IoP(Rez[T + 1]);elseif qq == 2 then IoP(Rez[T + 1],Rez[T + 2]);else IoP(Rez[T + 1],Rez[T + 2],Rez[T + 3]);end;i4[0x59C3]=T - 1;return;end;local Bxr,Gxd,Kxl;if qq == 0 then Bxr,Gxd,Kxl=IoP();elseif qq == 1 then Bxr,Gxd,Kxl=IoP(Rez[T + 1]);elseif qq == 2 then Bxr,Gxd,Kxl=IoP(Rez[T + 1],Rez[T + 2]);else Bxr,Gxd,Kxl=IoP(Rez[T + 1],Rez[T + 2],Rez[T + 3]);end;Pxs(T,Bxr);if D >= 2 then Pxs(T + 1,Gxd);end;if D >= 3 then Pxs(T + 2,Kxl);end;i4[0x59C3]=T + D - 1;return;end;local Z,amk=0,{};if qq < 0 then if O < 0 then O=0;end;for cN0=1,O do Z=Z + 1;amk[Z]=wyi(CC,i4,T + cN0);end;local Yba=i4[0x59C3] or (T + O);for HT9=T + O + 1,Yba do Z=Z + 1;amk[Z]=wyi(CC,i4,HT9);end;else for mN1=1,qq do Z=Z + 1;amk[Z]=wyi(CC,i4,T + mN1);end;end;local function ifm(...)local CgF=select(\"#\",...);local h_a={[\"n\"]=CgF};for KIB=1,CgF do h_a[KIB]=select(KIB,...);end;return h_a;end;local sob;if not (Tht) then sob=ifm(IoP(XnP(amk,1,Z)));else local pys,chU=Tht(amk,Z);sob=ifm(ST8(CC,pys,chU));end;if D < 0 then for QIG=1,sob.n do Yxn(CC,i4,T + QIG - 1,sob[QIG]);end;i4[0x59C3]=T + sob.n - 1;elseif D > 0 then for JIK=1,D do Yxn(CC,i4,T + JIK - 1,sob[JIK]);end;i4[0x59C3]=T + D - 1;else i4[0x59C3]=T - 1;end;end),[\"Hkys\"]=(function(RAe,DAt,wIm)local hOw=RAe.W;local Oho,LAa,omq,imj,hog=0,hOw.string.byte,0,1,tonumber(wIm) or 1;while true do local yIf=LAa(DAt,hog);if not yIf then return nil,hog;end;omq=omq + (yIf % 128) * imj;hog=hog + 1;if yIf < 128 then break;end;imj=imj * 128;Oho=Oho + 7;if Oho > 56 then return nil,hog;end;end;return omq,hog;end),[\"VZ\"]=(function(Qxu,vzj,pIw)local UAo=Qxu.oj;UAo(Qxu,vzj,{},0);return;end),[\"zG\"]=(function(vyh,Jxc,XIQ,Pbo)local Vbi=(vyh.je)(vyh,Jxc,0);return (vyh.wihR)(vyh,Vbi,Pbo);end),[\"maa\"]=(function(atR,rhH,be9)local CAi,Bbn,MAn=atR.W.table.concat,atR.Vo or (atR.H)(atR),atR.i;local Fot=be9[3];if type(Fot) ~= \"string\" or Fot == \"\" then return;end;local MgW=atR.W;local Gbs,byr,Kbh,FAs,Xxm=(rhH[0x41DB] or 0x3F8314) - (rhH[0x58A9] or 0x73361),atR.YG,MgW.table.concat,MgW.string.byte,MgW.string.char;local IiH=(rhH[0x65D2] or 1) - Gbs - 1;if IiH < 1 then return;end;local gyd,Qbr,bzx,Woa,rl4={},IiH * 5,MgW.math.floor,(((IiH + 0x7EE2 + 41) * 761) + 0x66FD + 0x4AD3 + (IiH * 11)) % 0x10000,#Fot;for OdD=1,rl4 do local dl5,nff=bzx(Woa / 512),FAs(Fot,rl4 - OdD + 1);local YAr=(Woa + (OdD * 43) + Qbr + ((OdD % 7) * 19) + dl5) % 256;gyd[OdD]=Xxm(byr.bxor(nff,YAr));Woa=(Woa + (nff * 13) + (OdD * 31) + (IiH * 7) + dl5) % 0x10000;end;if gyd[1] == nil then return;end;local ll=MAn(atR,Kbh(gyd),IiH);if type(ll) ~= \"table\" then return;end;be9[8]=ll[8];be9[4]=ll[4];be9[6]=ll[6];be9[3]=ll[3];be9[1]=ll[1];be9[0x2B07]=ll[0x2B07];if be9[0x2B07] then (atR.EXQa)(atR,rhH,be9,IiH);end;(atR.AsYF)(atR,rhH,be9);be9[2]=nil;local XpO=be9[8];if XpO == nil then return;end;local kyl=(((IiH + 0x5EF6) * 0x7E3) + 0x1D8A) % 0x1FFFF;local nmx,smz=byr.bxor(XpO,0x1D8A) - kyl,(((IiH + 0x5FAB) * 343) + 0x785) % 0xFFFF;local hm_=nmx - smz;local otD=(((byr.bxor(hm_,0x4B5) * 173) + 0x1FAED) % 0x1FFFF);otD=((otD * 0xA4A7) + 0xB39D3) % 0x1C8F1;local rok=Bbn[otD];if rok then local vst=atR.LpQI;if vst then rok=vst(be9,IiH,otD,rok) or rok;end;be9[2]=rok;return (rok)(atR,rhH,be9);end;end),[\"Bsf\"]=(function(zlk,qyu,rmE)local GAc,KAm=zlk.pd,zlk.x;local ll6,dmT,Ihi,ZpI=(((((rmE[6] or {})[1] or {})))[0x74E7] or 0),(((((rmE[6] or {})[2] or {})))[0x74E7] or 0),rmE[3],{};if type(Ihi) ~= \"number\" then Ihi=(zlk.Hkys)(zlk,Ihi or \"\",1) or 0;rmE[3]=Ihi;end;if Ihi ~= 0 then dmT=qyu[0x59C3] or (ll6 - 1);end;local enB=0;for JAw=ll6,dmT do enB=enB + 1;ZpI[enB]=GAc(zlk,qyu,JAw);end;KAm(zlk,qyu,(((rmE[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,ZpI);end),[\"jWtP\"]=(function(oxv,gzz,NoV,FgY)local jyc=gzz[0x108C];local yrN=jyc and jyc[NoV];if not yrN then yrN={nil,NoV,nil,false};if jyc then jyc[NoV]=yrN;end;end;yrN[1]=FgY;local IdL=yrN[3];if IdL and yrN[4] then IdL[(oxv.Ok)(oxv,yrN[2])]=FgY;end;end),[\"AsYF\"]=(function(_lq,WgP,XAy,oo)if true then local lmA=(_lq.VIp)(_lq,XAy);if lmA ~= nil then if oo == nil and WgP ~= nil then oo=WgP[0x14B2];end;if oo ~= nil then local Nhn=_lq.RG;if Nhn == nil then Nhn=setmetatable({},{[\"__\" .. \"mode\"]=\"k\"});_lq.RG=Nhn;end;local YgV=(Nhn[oo] or 0) + 1;lmA[1]=YgV;_lq.YuLL=lmA;local _kv=oo[0x7F1E6];_lq.YuLL=nil;Nhn[oo]=YgV;end;end;end;end),[((\"Rw\" .. \"A\"))]=\"JUGPPQASP\\\\G[CQK_K[B]j=Br\\\"1BqBQP?rr^~,YgbxHRS],dO_>Fk?V.4RV!RQrvQ}EdmaV^(/>]R+`i#6E0!j;!qBQ0Srr^~5wgbQ~?#o^%Dg6h1^;CC5^<mr%gDR>eVhrBQrrr$ykiQu+E_eV3Ja5q]tk4,RQP#|/hWVtxr=B>1H(g~</;>]~;BpLQ3.zBY[F!x@iQrlV#Z?#ei3Cc6%4CZl+|qBQQ~rr^~%)9b7@+6\\\"fx~m=l,nt^O%iwgQ~Qr=B>1L(JF</36P{O=oO%Urr}r@i54*/]tN.6i1ry*c;lUI+dQ&10b1AMVhr)rVt@*y.FrKq7pqrHIh&xT\\\"W`YMVhrjrVt@*oYztvqY|hQd;&*t\\\"3jWZFwtLn@QrXrQ~@*t.FrKqeHhQh0!hRS]X5r:Rrrpf*nQ(HSB.M/pvevlj2nRSQ+@PjbH@4>!+MVhrMrVt@*l.FrKqRY&t7$?dv`/<TIrr(r!R[04Cyr</}S1=G{BnPGUSxec*!xw{VrlV#Z2#4?3C$*E?ECqJNyUx8X6L!3hWrrhr=B>1k(;<</`pLiP+0;@=7\\\"hWrrhr=BTsl(JF</5St&Z&sR|teVhrBQrrr$VEiQ,+&JS$=ahJNe@i#5le]2>BTrPQrrr7Yb~V|CV:?(@igE!OThP#R45+!xw{QrlV#Z_#LB3C%?DgjAlgIqXCwgrrxrlV#Z_#LB3CF&.<JU!_ZZU8GF;suhHe9:*STIrrxr!R[0;CLi^.NyG~d:HuD*!xQ~rrlVx*/#dD3C|9*{H[d([r/VrrrZrUrBz/nJC6IlG3H&I?m<TIrrWr!R[0lCLiN.kw=r?c\\\"`H4[$gG)ZYx3PyC}1<4RVQ~rrvQ`Lnm)$N+[k]R<c/{mKMr\\\"drr.?9]hXCqvLB\\\"*cf6(/&2my&MzAnqBQ=BQr^~@%%b7@RS2xL%$VtX7$c^+BwVhWj2kP}swgrrQrlVeJA#733Cj%4+>&[STIrr>r!R[0!iyr</L%c{y=Ca~!&XmKMr9Crr.?Q*hXRkE&iKko5Uio?O\\\"z>xi971VWIY%Urryr@i547_|~3q8*ur|>K#7hkW>qBQP?rr^~!Vyb7@?#S&BtxCdeP93qBQz#rr^~!Vyb2A<8d!{:(F;`ecjqX2hWrr>r=B>1sRJF</n%Q6ZAT5~/JJMNTg;+X1MVhr|Qrrr$gpiQ,+Gv/BX64brL6wQ5N9n(8+496+!xQ~QrlVeJ*#dDKNxq&YN1r<s]eVhr~Qrrr${jiQA+t`mhh$2h/)vdNG/u]=6X>HEzJ.TIrrTr!R[0Jsf{N.V<=rTW*Hf#L0hWVtgr=B>1d9;<</u2yrlHm|^{]P24xX5k^tR[2A`KMrh>rr.?P/p$6b9b(?7.7xxyTBTrCQrrr7~8~V?C;m8^/=<*|E1jgBTr.Qrrr7~8~VnC(1=>K6LW*i1I9zU>#y[([rPQrrrZAAtx}/:P16e%n+w%:+!xQ~QrlVx*ce73KNH&z{5>b!Rc0$wgQ~gr=BTsG9*{</b>{{s#2o^T#7fBaS#`pgN)9HQORVVtrr^~[$.k7@RSZYg,NR1XmH/1}vhWVtgr=B>1]9g~</FPy~:)?1/?03,/?,2NR<~?o;J4RVP?QrvQn7bP)$X?,bJFhB`m\\\"Ze(z|awF$wgrrxrlV#Z{ehrX?~jei+uNq(ph7+g7.u*[L<L8/hWVthr=B>179;<</PaJtDh_H(MilnX5rh>rrpf%0t9n.ER)%@/0Bkv[Y}TF9gBTr.Qrrr7Co~V?C0ekSZNj3I^pgl}nZ@+!xQ~VrlVh9`e4?3CV$3F|wVLAGYn.&zLTBTrCQrrr7GI~VnC6;FB*7TIhV{$h\\\"hWrrTr=B>1@9;<</7xP{VukFh:!k`S|]4XCqBQqfrr^~5wjkQ~RSAu3StkOgOI:Tt+oX%F!xw{VrlVh9aehr^(Z!O<ax=/lE4.Z]zK[iwgQ~hr=BTsA9;<</a=:8!q6`KSd7hWVt>r=B>1A9]R</;;Df&`yK6+*Cr3?SBx!mnCwgQ~Br=B>1^9g~</NwqALS./L>XyIr@)TBTr}Vrrr7@K~V9C$Sc>xLN(Ik~9)z.TL}{8WqBQo3rr^~!Vpk7@<8_U?mgJPcsZMETBTrAQrrr723~V?C4POx~Ou^r~CrSBKP%Urrir@i54C3DrN.ovW2/8`meWz:}Sjc?X5r;9rrpfI.t9=.GXKwTU?+I>&0/3}]Q\\\"\\\"1n@QrDrQ~@*R<ztvqM:zt5sidHiss]qBQ=BQr^~b>tk2ARSoN9,[^U?7yHu)F4u\\\")ZJ_H67nX5rTyrrpf+Tj90Sk:Smw;:eWmQgBF?+5_T\\\"`PeLkD@]nX5r!Rrrpf+Tj9HSH5obOo.a4/qy_f_R<h>:n:x:TIrr^r!R[01d6t</{o`\\\"|Ks?SDi`+]{uL344MEFp2y.eqmKU4g{TfZN)rHp:hCvAmA;TdlUCbX(66+B_q^`+|T1P|;&eI[dUngGqBQ%Orr^~o]UkQ~(3&[f%Hrm|`{k<79Ew\\\"%gBTrBQrrr7Z<_V%CBc6(9A{Z&xKlTBTrtVrrr7.E_V?CH^MBZSp*D06H$LuKbu<eb[3KR1%UrrIr@i54ZG]tN.af=~L/.{x[k<jUGGSIp*Xp0EgF!x@ixrlV#Z9edDKNv.$JlL,Y/L6xRDSeJ+a&9#(STIrr6r!R[0L6LiN.|C)~ppHf~7%Rvpj1&o^ER0RFn@QrHrQ~@*wNFr3qj1+tjuPagnMeQKMP{;X4gBTr/Vrrr7lS_V%C/1I>yY+m&|S9A$I8w=rEhWeVhr|Qrrr$:_iQA+BmvV+u!yOEhxkWCU@&J(89Y*!xVtrrvQwxFPht+6/Ux~A7ChJX5rXxrrpfu&j99._MbCL_qklQD8IX5rXxrrpfR(Y9HS1>SCE:}MO;i)8X5r{>rrpfghQ(n.d!:5N3nrkiF@U,a.:XwgQ~xr=B>1:(g~</`\\\"{i+xQXDjb\\\"Yz?+!x@ihrlVeJw#4?KNt2oFEkgZek.^lG3LO4.8n@QrGrQ~@*Vpztvq_{.rwoAM3*s!]=eVhrjrVt@*zpFrvq/|pre\\\"4h_,p[a9pq}jn@QrFrQ~@*IpFr3q@O|QCZq2XLKx=<u4R0gbckTIrrgr!R[0;sLiN.!Ec~FU>\\\"#J^lr#MVhrjrVt@*|ZFrKqn_]QSANMstN{S5)?&^%Urr]r@i54]7|~3qTpt9cX}d9^17Id),]TQ*daTIrr9r!R[0K$f{N.]MkJLWB8Icl/4yeVhr|Qrrr${)iQ,+:G0BmYi`5f;Uy7b%)0_2UvB+!x@iVrlVeJEedDKNq2Z?YkLNcc20/V,4RVP?QrvQMe\\\"P5RX?dY8FR~8%8gaC+4*g+CwgQ~>r=B>1=(]R</TFPi.H/ohmr8OT\\\"zpl7q?D|X5rwhrrpfa(Q(HS]zQ/s/|_(L3iwgQ~>r=B>1^(JF</X]zizJHCq?u|>oxg[kW%s)]X5rXxrrpf<WQ(=.(*gIlMkE.);$wgVthrKgx*|#4?KNUZFiYtfwP`}KKmWb=0C,k}2EJ3`J6g[jzux_c6h<,vmRUfhHSU*.$4N;wa07b+a0#6T$dOpq?5O}J>A%$uUQ2]%ycU,hR0vf^xH&{1H#DhB~K2AH}tm54sSQ?0W3!y,Vh{%BbQjn^C\\\"Qu]I3!Kj)?II:vJzov|r@XiUj!mstpG?oQyXYZhAk#[%duH:,;He^T$kg_wtwXdaw2zWgx9nJnx>=cj(~m76[~g6^eqSt?HURU;v%9!ul_qK]%>__v)Z\\\"BQXmAV1&*ni^nFX}=VWeK%J[LF>b,Q7kP7=}Ygz($=\\\"otR5rVOI/i[b$c.v)V4k7M3]c>>k)fcWpU[kF*]dOK2f(7dL|<y#DR=mQc_$J6=qRKw;s`;Lr!(tlMYks5_is\\\"e4eLYVg,htHo^)hh1XhjU([&>!6j0.%?0ARbF0*Y+;+^i/XlT}MhM@]QC&nO$0n7ejjYMf8F+!h@]{0)!sp=e83|:]8iDkJ\\\"E0P~{B/W,6jgx<IoA^d4]QoQoG9fkvC>yNA5L+4D&m@3.lLI!GwWo:(r;Ld\\\"J^sxI|j)m|^0y4C[DehQoFy{i1~qO}=2h|beE/`eL!&(WPBqE3|)TR:Kr96%~6Ch}!fD8?R5T3gY98HEY<9kztc@)}:4LM%i8}moEyy,:E)k>jkSBi)lYulbZ`YcOCG==>P@},+Aj8IU$UPp*w<\\\"#uR|{/flz|4pke18a5dVW_7[Ue[0|rouET_1ADV}LYq/T#Cz/0Xh)8Y1}&;bfN41Zkpr=q/K/?g/Ut[BpYn:&A:6Gj$@Qkut8K7KvB)+HRJNY+{3H4dw!Oh$t<{p20+5wFj99;8>ofWdXYHT4+3EAs+vyZ])bMV1pC9Wp3g9#ugLccR#f8|%2FQWE]P+f1&r1h`76UOzcS>#c4sMGlg@/sT5EJ\\\"22iE]CG~%(zgsO!X;G:^61vP#|zVkhLh;hQg0F@Fo^kC~:*+t;td(@F9r)}9`pA7V+@LbP4^fv]@2<Q3FhrAIf{TnllR__F\\\"6=Q[B/Pzq3|e3>*|%G8K5gGG,d<we5SOv#?2/iNp5@b:](t>?sPc+@m5`zXZ/b\\\"?_2axFeC#~n3UAHw(!`Ux~FS#?RF&<ie#T>3OEngjuhJH$yPGH9yeS,QTCb\\\"Xb,oE}~:@Lyn7]F/y]D_EG]?\\\"gcqEE(@;Oqe8fDm;n,dzt[X~lL9DH{h<zY8Y{\\\"*u>0y}0KGBxBQ8P/NO+F:2$b$w*hL#amen^[Qik*Bjba1%X!fup8LJZVA+PK3>ksvW:.^h^C:yobE#Sb1mdPZ.mz1EQ*KIHgh\\\"=8srC(=#pQF5d6,=S;/xv=&Vf_1]TH$8e_%6tW+w=H`SDvhtbw*(+h#Ij)6p&I]]j9DLV1&qRw*g1#.].|v+<9n)zeAHdVd0U[m]>mh8i?CP=>:1kGhh!:r`86AdIBzXmy<hLOA)|\\\"cIh=m>O(m|5SYI>pARU^=.GeU^i4CkM.uik%^\\\"P|ZIAE81b[xN,6L9;a)?.=^FHj&;kn,At[veB=vy(,9w}Hy8OFxel0%APCg^j{\\\">5Ua{1Q$#Q40d+!in7*JF&2$9}h+go:I2z5V8sNMv)kIl&02GVus.8Ew6zWD$^C`Et*]#u3Z?VenuXO:/c}KVLzX0?Z_+a~=qndq#;!=B,|.~?cOlqW1v7S!<\\\">OR$c]^mg|Do1hhRl!wT$wD3eX9RR!VVVx!:Vi*l>w2#Tbo_|Ns@@QCPh4h,Cb4^Lc1s]n3B{#n2}GG8k&u}vuPo[X|IE>!9E)5(X.aR8>QB}RJ*KgsSS3NZx3Qsy)UwUy9a/27b/L9;oSJXoP/{}m6(H4>yY{TxotLOz3\\\"T#cRW*IQwa%@mm.9e~R{2M=k7ji_Wj[s!v6P$(,ng<sDJ<9=(!*u8~8jtwB~_kdfyd@,Bou^^).9||~XcIU^>5*&nZM^@+v3Yo:,~g_n.>b02}#nyJw?ei:h2.TgKtVec<IU[yFKV4R8h9}R&o~42Usk1&ikkbN@?Ct}#V\\\"ns:1?~0yI)8r1eQ}3VbS$3pr@j142,WUcTC;c,iAiY<jl`\\\"0wf[o,{5#A~k|liw7lP~i_p/1l..#Vw$[>0uTE0,<ppD<N1N|lKc$zXP>,eWM6~\\\"X|i(CwyWg[D1_^~vPx%D@JQ6]$i<*PZjPe1NGlXE`3(NQOuD0+;z.>y/}w;8RM)$t1owS)Vo0NYOV*==\\\"McP`;,0{Xp(GMR<%L^>8a24`\\\"$J]sV#*U^d(?LYiBSC1%6#2:pdnE8A_Bu6.pwcWAd.,uNi10#zLm7yF?MoFmg9pc&[ooJ&}[/%6(nvB^na,=jx>sn%+{Lk!V>_2N~88}E~vsW+EknT3iZss_ds}b1>gKbEPVf^TU.*Mn}9YVFNHI2x5[:{V?/[$b;[7!}s:s|s<T<eR7R7.])~x~k=|0KF{uZ,(+Yy~rom#F2,|ZSU:dPy{{E4y),u~o#\\\"_9m@H,x[FK0FA{R]i/j9~6(YB1>G0D6S.h+dUzZ{.&/T*xX\\\"BtDXS4>@HT/)1B|h<!R.L:VfxN6MW8@e:f?HvuYmR68z4#fVY$bsbjb(+a#2T+FKZ3.E=nCIm+H$&Q~,s.R@wGtZz.pPNlPJBOs[6{C@:+j0\\\"^=HPHQ.Q6>I:KvOC?L/JS6%u]l|!6%w*.4Pf|7?CXNW0%+U_7&{HXm{tAH8hbVQDa%?TW&9Rl=ecqc:roCQi2h/j^{>[VrZmxNFQM*qXg&g`Eh#J/Ui~cZS%XgHp`i:7P2!]r+yjF3sk)4=na5#/hkDMAdap+0nfyQI`R=)`g7E6YIc($jDS}58L69m;gR;D,Cx@sWEPM0O*:iW(y{g:~sy~xG3(AW16AjvWl~f<;3hj3k}D[qjaJc;;kt?d$u9/94}]yh`Ttp}u1Y\\\"h35T%S|:iVnGgF`SeN[Fs|4<KO&cD!}B)?GzE}Ec~s,JaP.#1m!8pdMfC_s#2>@Itd,4&qj/t8ui\\\"\\\"^./b^n8qUFgsUQwTMi@I:a%m\\\"|08|Ru>,4bv0edU{:bk_/lams~xO\\\"(6;a::cPYgKC^W4]9SIQ!qm7!9,FZFD,e!Y>U!~|(AP*4ddQz3n/QXn8)L~L?sq#TNaIIcDAiS(\\\"Y:gz1n|S_<vz>e)5~;|.k?%|Ez9sZOq.[dJqBJro_l&`@LP{tUPdgWHrs2L]!*0$hKFYJ,#p9V0L`Rk]jWFP8[rY^Pr9KD{;0\\\"NHd`|8xbo+>|wt\\\"4`(BXEIH$FWe6PAb?`dABN5tmVP4bq4.,^>3x+8%C]Qjr+RM`QW!DFJm{wgrzxsc*(\\\"@X>TldeZ1CD.)RjNd$7fsLJ5_\\\"y^^fvA/w#Yr^d*wjY+Y~&De%!3G13vW+/6?4qND(i[*[3#\\\"W_?f`xF@\\\"x8M`9nOBZzV*~]d$:U/cD4%Sx!@WA9H.mHy*z%<3IJ<u&T>`@72`mu!8$9p*y%v$<yi$#}%&oyJnowVnf#!8IFG>Znl|TJX*38>2?km/.*A)R#RW`8+70Hh\\\"*{e/F<h8;y``f@,{]Y$EG2K(%5cq%uO=]s;f8Pc2PlFBI%BW~JFVF[*bdm=\\\"AZ}#d7E2,CG`ks,/x);z{SbdPTC5h|l8M&_Hij_h`Rn.NOk7Z;gg8QwiM0[8Y=~2\\\"na8[StYrS)o9EqCMg66Nx7TzGIkq2+U@iW`.1YE!LDIF#rCot{xiVepoSvi$OY\\\"W}N{*LJyBHZH:X!cZ7+NHQjh&*4r:67=n_WEgQ1Q#VvLbdr<x.:?Q!t|]/HSI.h=w}Wt,K<@+xHvnAHfc_Y?9V4v*e}q%.(tuLFK!w[F=vBLM4N(DU=w<5v0&9j@JLOWf1{gMY(*KX5iczHisN?fF*&_1[bnmxNSFky`YD+>p9s!x.~_kmmV\\\"pgEVew=9=%Aq?eKJBK)AgbSri,wT.uKjeC0,B.Q%a=k9N)q`Y*RWYe~fMg+.T$eH05W>yMmQl1Ziwu$yd75t!(6By95%#C$IODfIW.jn/jHc}$ew0k`Mxgq,[\\\";.nA6PRq#D{@fNXlR\\\"=OwzP+Ret.E#YS7Z<SUDh3<Sx=5x0dy(tNL/nH]lMT_wk}X*&+;!}mzc`JSyTf/(M76,MkRZ)U#biHnnu/1OE0zqjisLL8ejy]=Y<&%&AB>VUBZDnMuSh;m<=y/HzX~@xXTTnY\\\")G1,11x|~Vup_<h7nD!RQoo1|n{W[:AKL(C`CNf*dDI?r[Bo8}`{%,4jWSd}AgL5>5V\\\"n!J3.&si8DExTGXaV%]4K99sX+^Kvecy\\\">zk$D@@N%LgX\\\"wv0Fo,*#k[PHR%5?;jqS+:ne?,7K!ypjtB>UhT{yJ4]c>un(S[<p!M[6\\\"uXy]f0?~D$Kma}^6^;Pa3M7U%s/TS~8_6!E+h2OspgN_bZ#Gpc1SkBO^xI]`;t[~~x%Mu(l12~kO)D|H61z7Nb06<eL$gmi&Z*)iPnv=w31Gbr;I7E>9s&OJ~<Lw%%n4#`!b)vUFzX_Zqz,MA|nO3KN=GCe5y97CUiR)b8&Z9Ka#/UfY^|YBV+/=U.0RsB(|Dx3?]{;HBZ8Q2{RlxnVruOl&/=D:Q!b@B=5w2)Py!k1!nzNM}ykFv#wFgA(|sWE_%2HQ|`H}Z&<gL4/!+:9[^SOu5|(bpbc;|;oJy1o9hR#C/^l}?gDL8YV(PlGm9@:b9Q.mvNwf#}c;V%|?BjRI]y&%AOGkqD#gM13ONgB`Z{`mz1V)[?>HAk:sXo`uBmUo#%ZDX7=vxYQQ`AIMqLNYL0*62$DWy%&4T,[7niVI/rdpw4Q|ECS3jRw@2|9zmguO{zXae34@4kp2kv]rI:mD`5_(mcPGcQ2TsD6|=3JBg]wD~|{^|sIZP`l!Wgg9PMX9v~bS^d5cvC{}b$cuU0\\\"5%wC:EUYF&!)skJ&{D1@u!?aclwGya`B\\\"r\\\"9}{=dvpI{@$JFT=07gg?wc:5<*H!RDPt{k9e~`Tv1z13o~}W!S1Ng=O@LsJRf@0!m_D0Oym;:cq|~RruQEGPo;ep=Dn(nzU<EyYYsi4qgx?I<eL*D^%}:dH||GqbPy|m9TL)~YUqHbP=hy(`W&a~ne];m{EPare*j09#6e&0STc@5jBW\\\"ZR%p=$i~7moQNead)>*[P%JFV~uJ2gciy{@s_WAaY!V#vugg|(q}bi,yB\\\"N&Lp,5*X8FL:hJTJS454G)bZ~NOGEsR)QP?XfP]2d}E)AHd?j!zx]g+4X+bzv;.sK#);f2^6^JZe}TO5SwJXc&f^}CqJ8&ifZ*JYaDjXi!4{xc]h=?X$4F>Db.oIy)|Zx4rwho&q?:a)`scpmcL:/M,&93Rh#$z))J8Nyi)h^i3C(~X)o;x^13F\\\"$q@*7Cj[PYsW:2LT695o((*A6~:SZTu4Y)5H!kd7pKlj8X,u~Ij<i}(bB@kBuoKKDaxd;Pw:Si+A^_GU5vPLGWTIe~C},`cxAXnyJ$g||%PEgW)j=evP1/K];s:=0/+O:6I/!,Gn~4YCAp(=;!?].<fp]a~*u7u{[RdI|)&ygN@qd}/^,(TD/{w`w~9,uT+j].{_5a+Ep0I;4jR@|@e~.63$e%#\\\"|zB>uLGdT[D@z5v}jvZ[/jk[{YGmIJjcrIU]e_p7sXiI?B<Qr$goO[(!BPyR##p9jQA$x~fJB]!Zt5jf`mSbP3SNHScJ1kYJV$wEpm{U*#zIspZE#t#?G,Uox\\\"{0A*2eOTR?xE^,pO<r;}TH~7utdq/\\\"R`]`~xH,5sRrg<:D$%j<A^|6GJF_#\\\"k;&W)ypKqf$V/|{^K3xOYWbYsC27}R19LIfnSd0av5y;KetIk/$&^o`g7z7b(m3$+d=5V=`BA3sco.Gd7A:PteS[Gr;HE1|DV8h(YjC7!~/@3e*whg2~Ag.u<fk[>HfRaGL3~wLY3fW:h^2B/kIhH%#sZ\\\">.6*[_/w@g7>5r3,L4{<_\\\"zu!\\\"Y,iujl/:6O2moOL;[ncdO#Ww>,T0/Aw4t16D$,erT_YAXc39aJcWyjaOG}JR}$!n{Cf0mcf=,H^#=LPbIHb^klhc$VCS*a{d\\\"1cDP`k\\\"ksJej<w$$q547E7AA#yQ4`AacPEJ2i|:iFxSsl`8^wZ@}V6<!Rqm@bG:`#]%LLC\\\"UWW3yk#W:o1u};^I^|ThS`+q7st\\\"w8WLS5S\\\"X3EFELZ[p?Q+!>cyyIvlCMwk@Y:c81/p*_Cn}&TXlOaYszA.,mAN]G#Q9aQ0W+7wh1+Ys@)d4#N`Eb7PVl2%rIaK,2c_}*=hhw/9>^P_<aDStO(W&>/+c{lTX{:`T;tF$|@8th8cA#8$le[61XV)y&ImDf$jh1|toC;1F%D|8TycVY#N.3)Fjd>RG%(!_TdUm_`J_|#I?Fg_d<Vp//jedCs]QtV}Q1I{U{I1/cyw9iIF,8#F]2ZC\\\"4O4Z9ZL:&rKx~s]l4QZA6ZnbV_Y<>,B%W3ABDc`UZ=8~VKe(z[R\\\"K~$ixjiDsqnXe<A%CKukH[%QDC2Q<oV^3TWo=cq[{9s`kl}3[;y;DDXR&M1dDO,JZVG^eNLN2W\\\"&AHw]NDb_^k[TFlSAJ4_iI;rWIRN>EwEu>rXI(9z2~r@v!tfqVE4Q=X6NcL.E?eV;Tu@*/I%`*32m<4Ot0Q+9U*BW%l7cH*<.=7oc!}0%ajxIazv\\\">3{Xel2MVI0(g6JnC~MlinQ>?DxIk3]p@VgrIzK@>dq4R|M*F5lu^6:~q2:fK<zq1)EC7yev.lDqe$][0+,q%g|ABD1`A#cDZ6tQ)vhyU5IE?;Un%WBDR~Cm[^3vdAqU%~)mx]Jq<N.pP.Iw6E=:qPxW5m$>&/j:N~,SfP$wJL>~4w53VMGz~K/Z)e*ss@qx96aZtfWb/>kwKaF8A\\\"iF>s\\\"W<neRQ7%?xbVdDt~z*6[q/qLXK9q*]0xp^Ku{9qi\\\"Z8>a#4J#4LIq9$c^{W&}%C{x,1;P`7+#8eUA9Z.m:tSgQTm/E)zq;Ig_|;!r+xaM0XXJP}UW)ttku3.seUs&?bCp#I$TS#c?Uv?!u)J.#!VC?OqtQmA6zuki7#}zB~3ag,$?u+/@R#|SM+@R<HXL]`/\\\"U#d=g#eb>GW*|rRnOfNC%m~B.(5X?v?X:JgZhKHsctb_F?ejH0orBr[<6g1$K@J.ae`=lv!VVQ7}ij.Nps#KWl&/(r40f$QNFC~+b3oAgwHLwS1*?GQ%9KPz%i5~(U?P~$~?eQitR_{Gd|;FE8k=Tw<GqgS/jjp@Sw~w]l&,$Db]P(^)k/.>dZC(#J6ULyA@;[t;q/Vn`Ym(`fr|vybyX:1(XpoVm<wKE?gO}9A)s_zP4]St|jaI3<FTy0^A6L[@E?@1wNVASgNl}5;m9iD}4xZ%mZb9z8X%_x6X:tms^^}Lvz&ua\\\"!ThI7/%3n&Z`dH\\\"|@6J!f!?Q/pmk&*)Pmr3)6MR7X^]XNqeq<]@%,3+Y+b`!Pdt61{DK.<5]OLBcaw^*9~ikjtO]$roRkyjrzT*kCoY,<`l]D}gI8(GK6?cX).|2T{YZ8*C.OM7\\\"W#{uQ*{WC[L^]_zX|S0pId}%obX1Y&{D<K?E79pw6p4<=U(B|zcMeL6h5[qru.@^qGJ[xdY)E>/$xo8ulzDt<?gj3gu^)Ql]PY7f~&+h(`Sa?[HzS0S`.tC{/<WQ9%$wx=EZ>7py?5*2h)js.kd3uYZ7sP$Twg#mq:FIOneGrQI`8GOrfh!mI[[YJSgBfPA~_aY[#3o.sW6l~(TcN:^%],pyZ1#pIBT$xdCw\\\"1:mS,b>e{NaKImA`(}#Ha!:`PzI`w;2\\\"Zg@CzUAXX7#e}W%&?Z5:tp)GYP5]|gqb+fx<hA`X(,!=d0~kd@me]>j|tE:$Aw#:6O)^PDl?EXzE(nqcCUhc{PPrfbX/uAHiE3VK+#fT7M&X6KJ$?jebg`=a}0$cON44cs?,1gaI.2`g/IrdMCR!SvUHy;^:c,Q^g)+!hV+mM+2cG8Jo)devEV>Gfs}<cXQO=8|eQ<DVTo&mp`k@M|S>y5gVM.wKQj,c0pM0h2VywY9A5lJPU:2%MzD]B4K`r99uV.WceBILT_e|9Vqa~oV_^~IEO0%,NlL8XoQ$IH{mwAfb[VyH2wXl%\\\"eG[O&QBH:DvC^C&b6+&D@g_~lO[_t(vdAgQJb>XI)e(vrv%dAuz<LVed5k2d/lI+8Uu\\\"q@3(L;*E7(D]W~z>[.4HgF^c0Nx3;26?6F:![MNc\\\"/%^:N^O2,hw<iEhq%u4L$FW(]CAeT+sz03*`*O`L0)o6gDL{ykx(GZ/lbkDzh<@y!JHgG3p$Et+E}ZXp:_lO%zZK31#D<2ylw{[DX@2spFB8jaZQi)f}M6a;O{H:T%7|hNiSL{9kwz8fkWF(.p$vs8Ig5{#4.^w@)4mkN65/4Jr;eh,78P|6<~Wa\\\"14D1d71db5<~I%!35,mQ5[<<{hzuviX>q~k]c@sI}t7oodH.^B|a?hAdizxZ_5PJ`~FmX(R`26F&;#*8_hn]*>IqC}}\\\"|^J%G9*wR)+)aNcd<t1*<PZ>zZkXKZ8>MN&%1lv?8#0!7gOF#lXP`fHyQIv$cAW@/Ayg#C#O9xE}o8(t^=1\\\".*eLOlfHF7?@!$n3%Cw;/!5^sje5WvbPu4S^H_YCKV9kUYEAX#QM9Ba9Mf8i!L0LYI`cALfKODL~whOSd=~<=zy(N)d&1d/`~1H,_76y7A8e:QMf^6uV5`eJOzr@Z[Z5Q,?G;VD^o,34>mf,Kj&.JlIeepY9fGR#2MY`f[aD_+/8F6^oY9i`\\\"vwBd]AS:YT5T*\\\"/eRiHrdX]}Tnloa(JO$x2I(zInvh?.x<y[P=HCMa57b<x3+)X]&+xkLk&Jf%kd4^nm2;}6.i:_`xnZMi3uLjv^N`6=NU\\\"+chq$Zc>>Iw3<kw3p;V{no@aZ/sMdj[})b?rYUycb2rPQw?k>d&(!6%`]/>Z75>.tU{XfXO&,0xCbff~TL1Q0!0e{SeZ99o`(V]WYB)AlhL}`{#qTKp;BuQ{1kK<0NcLl*4B0xT/Z.LY<{4?kcIMmz$=z:CJ>z+Yny1}vj`X,|)a`G4:&sX7h4XgM?wVEQV@*uvp1R&nJ,2_T$iVTgo_w+nBcL8nK.=OW#f9J6gZ^B3xhz.A{)UgZGneZ~B6}~e{u~x82};@h/i[4xpM#LjHL@>]&|&o5}wf}qki&:JR#/M5K!I6O.56%={KYE0XL?#g2G}1I4wv>:xG|78)Hw<n}F![QNwdC>(JwBh${Z8uTwJ\\\"EOP:{y}FLFLfm_LQ{QUku|4\\\"+3uiJ9[4jr,LS_i6mB[~cn|[uWh2TnIO6ee=56A0.PUQ0X%t:UC3?3oa9J\\\"LE;VZ3XlLa_t=t)Zy)}D!1hjR0Bf[\\\"$`+;Po!xxaJlXH~z7[eN<&?#dugKORV[bm.rjSY%97H]mjzv(w)#):J2bRoQ%n!B5eB?k6BA+o.w,tu*biyW}xHbsk)`JGv`HH,=VO8pJp\\\"v(gdnYk~uXwdzqX/<?C0Uq2*g~8d^p8`1)EU#/}{8<S@%NATWEz4\\\"J[c\\\"7b_?0wDd`9Ki,H:vd>+sDj,$oi(m`=<4v4^e?Hj6nV:3ATv>fox0(t_PF!Ve,B1YAb#up_J!*XJ^h<^:F*OI:d~8+?V=Ss]&Y&M~D_/<VDJI<Jl{f+v~63?WB!jLT~C!V_l_N=@A4{!`CA0%BFqX/D.f8ae@H=h8E;vTizVB.e%!.QSu/>u*g3avlSP75rG!011_5U*#8\\\"gZngU$:jc_rlx/6u2<P3J{=kSZY/anuGR=[SXNp<?hjI%JF\\\"A5mgB~%{`pN?3,\\\"9[ulU`i0CMLw1%_d$@`sg@PyhUwR[D{{ckoX$7r>#,IjIOq\\\"iFJ!t]+i@M*Eq]H=&+|N2$\\\"f9;.TURt}[71{W}mx``p@6bex`pi0ogu@2,H5&ZWg^@;fz%wU&BUK/ni6jR0/4lcu(LX!z+7TuZs0X=;M>R_CG#}>)mb@#3oxk0JC+&lxe{VH@PxbdzMY;.FDc:Q$]/4}.Wh10<;+u>LB\\\">aVW}[V/5w2R.j`Op=!O3\\\"NtY!,$~=(^0KJ7&l/81rV@Uen{#4iG&15~=Ka*0`(FVKcd>_5Q6ziu>HFFTz?o){|1Nfai#iUh5*gjPn.#00q?bkb&y|K<`j::H=c%],b}=*:kRcPU}XJ_(\\\"+,KAnR,ku7f7$T4v^:#YIk%O[j(gBn8nFUC;#$e%om;k[mmm,f_{(79a[2x}VJAU+EhC(vye35e)(5G!$5ohkbI=yrb1b[\\\"$(p%w>MYAB2N8i#l,KnFSl7f]\\\":,Jm}^p4$Ov`|(%I7BJ8z{*3IlR;iK/)jr\\\"9/p2gR<0UkJE*uL5)(H)$8TS$<{4{Upr]eSX*~=|&6Hh:w+FG9.VZx_a4DZlZ>x)p6d6UdFPIngo}V)59ss~=&_UF,xb!kLQdI/Hb<H4!O0_Gx:#_X#Jw:uW,soYY)L:/E#gWZ<Qn+[`{=(aFQ?OeyS>,Bpj`W?e_{bp[Ff]5jYRK%:}Q=MJurZ:Kghdl;i)}o.@F2o}T_M%xD*m0cT6Vx:![E!\\\"(f$qx:QHR+pDa+7g9xik05h!PwD;22~K~|w+.$vXX~U[5[2,Q{`iY|Se!DE%^4o|*3o|z)Rz9VS56=cw>!:H{PCT)57ef&Zzt1$+0!qRs;ggU+)KwtmcI9v!1oIZF__NdTPEgI^<xVDZ@=v*(QXX,9z70&ocU;a=F^2$JD1G$]$?:Y`8=*no_)\\\"HP,#KMJ$#[zp;*N~!=y+0p$sfp~5{vP^dWG07EEzs?B^.CeAK}M4<k},1HTVW`>t$}7&r;wB(k`\\\"*uB:<}}E`^<?~rL`][P>?+pEikcy)`CR.)xHkXExy(@3`QqkS+}!.|>[pnP1<M5r.2FnNt3UmAN=E,F8.D:fN3?W({aIYPH!HLj)0l5l$x:#kOoI:R.Uz:IXQ_#%eY3lg.P}!SJhBqkf?gR9U/EA:[9{EK+Gwss(e@L2p%D]Bbmofh8~!![L!}Ib)eg;l<1ZZS~9Gmy++)z(^or:WU[yW#w/JkpUijNEEh~7cuYA)kI[*}2$ttMitMJ<dy?_ojAh|}V=`]~/IO/cPKV};sUZ_R[Z+[;<u<eVr_:W~?*9bx_yb.Q7!V<d?7xXz5c@4`nBpcRDpRJ$rmUByTjAP7}ps\\\"4Vm4VfMMT=;kNg>_/|eQQWn!ZLg@85s9`v{{[M3^:R3!l*d{t&Hl|)afwA`nohU,gF;#4bgrCFNYBmX5BCfL.|U5|G?a}4Gw6)gW:/]#ubxL;Bg$yCDB2xBe4TdI&C1U@S7OYqxU=4G($Eo*{hV1CgFh\\\"|Q6`.e362o~(HoU_>ygredhaudJF{XByBcKh|Sg9PP@V(A<QZU7rjs0rg>d4zYjkht2EN^2:vz{xnxf}B&;2jdsATuh}l1XA1+w.fzNvu9m`)=UjlVLk{A9sEu/cbYolo^%lzOYzE:l#jIsB%vJE|2~ji5bb1}fqx)fU`EdHu>dGh=g%gpy>,l2wb1r7R#A.b[n^|hIZ!af!s#F#SX1~L&8:`>)Mx:7OCy)EWpa+$7__$`Atbl=#UPR%UH7i&Bn@oe?hYXCQWmC4/jvWge,19/q\\\"Bjl=k$vK@PAU>dv~%bF:y*fF5MmU{:hD|TLg[YS]qwJ+4+w1`9e<#?.u)tShzZoLVRBh!jiEQh)fzXm]36:WyA_MD=/v2kk$yup,grSn.Q4F`[Q%oem,cAP{Evd:<ruGX0mm%x$%w.bS<+f_KwsLN,:oj`iD[p#{0B`~GKJDSRk9UoL~z})YA6H@c4qtKsplt|CQ.,TKJK>i&{M.cNNk;G]@$nSZBuWBg:Z_xEPWucGpk%kp/n_@lV{G`>@(65__aetHb8ZV/<.{,??>+RRi?t!dP~$BwM]ERI#c\\\"$XSXKs(KUGjWb?7K>*(LeA9xvmCR(grJ9lF5?CtD[spj~YJyFun/vc(}hH^gsrWgnFn%KRQl:!=4*a%M)wQ.PpDX%;xpz(0?9ka|}Rp@x$6)2&q([ieGD4&c{0!WPB`h<x#_^%R&$C:YiNg7b782LqUVU#aAnf(xMKMpHY\\\"4vNb7`Y!9J~.CK^>~==8zbdoeX]vv_b|#cR#k/Ahj3%>%bat5T(hf\\\"M+~@)y)Fahh.p`^NkQeQV%m]0)C)d1@Z{R~0G(cuv@W`b=mvW538y$/1)S^7|.42}hh.+9_c4.1wKq0rUO2y3Avk,:z~eT+mR=oc(x[T)a3Mx!^S,+>J6KN|i3&qBF`S9[@8BheCgH2myynV`0UT0%?MgDy|^L5e=#7)wpD?(FB2;H\\\"h=E~S?CeqEb_3~x,gn;s\\\"`\\\"|t4*U6GUs*1D:>p,6,<6]FHt$F=r%ckVbtr~z;w`LoLkkim*bi;{P[iyz2xqvg_~XF?@r7A9o1I{>N::KULMfg9VTSVk6h6>oYiw6K&yI8OiY|48ua\\\"JU+U0S.ji?p2tO%_~Q*g$!#&!h^*n2hok^o9e)AU?dBU$C[}Zz<Ci^3P8OQ9ytrb`8xiJx}vZ+Ce4WyVq5lx{aUZ}g<%hNn2LE+&,cwlv/B/QByU;fhRb5ot+3YN`F=+t%2<t*Ki]kI)LVyq^8!?p^rQ8~KL(}+&G5,a.C4C6t_*z+[[nRxX3Rt4:M|)a(O~7{%^yiuF0T}J^mHnXC!10Qs~23AROX{)fTsj5\\\"BJ5Uh\\\"0Oy_0qN}aI.%pK^Fc+u_5J;.+?g!Aa`V77!orrGn>a;R>JM/h?KGMi+A/8z|BdzbmNYM}4o7\\\"d(dzc)n=89o9kH3n;yqIeQLm.b7i4pjf26#NjH@=64~%Rg,[yCpR$0gC%8i3%33Z.mSzLMydDB\\\"$visZdUq=,(s~<T+E\\\"?IxT~pT6dL5K*dT!OQ5ybI~A:R=w@j!3i&N[NL`@\\\"HTotfr^6f!KgeRG\\\"I{pGg[ASu*`Q\\\"GCuRp6v$9Q?^N(x.W35|cgzH@wC:?T\\\"NK#<gl*E:`G,{qOIFV(3\\\"O)z}o=]P$:yQ2Tp7%C?*1YP:ljW|Bw]]#CD`)B0~~|F4aIs($}>Y8DpSrDsg(G+5&BKS*#L)RNrz>\\\"C>3yApPR<:ef|OI9mtS\\\"dz$^/<$Aln;&R~V|^62BnA+})f!?@g#oou[_G`hP%hTbBf~k]XTkQMa4rtdWSTK8/Kd)emMwh:\\\"Rg|P?zhyvC_cVM&&}X3z2e:i8&u!sa!8:cwfg0rp@;i7#}*+_n;1zE1+j+V%tfWMd/NIs+?Ue/W1u3p5H%iKU8xN7W3~@=P4pUg>d_sIEGHZCJGzZN3AKeGnP$5w#GOi$f\\\"(qs;EW4ruu}h;>h:NU)Q4%g[g?5Uk%4TgI2e`q;/<DH8Wfd49ATK*z2i<OC=Xe:1QI]c>>S4~%cn)mtnX~y}n^5x^zMTZtg5#;.sj9D\\\"AQ]yMk=s9I(;uT4jMRoG}rFqs%uR_^(G}U[a`u]Y6azqe)4qU7|15S_QIUi2K?f0B?9K:C`lN>.iy!IxKyO\\\"/UU@xtesn.e>~$0hLv52BEQ+1(E[1:;^~<W{(zVjG)f9x^cCjSh^d/\\\"38,]>.OZl&WqrCP{)sHS*&I<Xh>5.4U[,QS4,ZBhMaVJ$Iu}hvt_SSu~%i(Io;V6E@+j%Z~0|nY#g!=iWF!30\\\"c@}=YRTM$L3{*}^L(g5hP667%wgM+Ep)U[Q?LAF%#;K`>9+b&Ay`Xi]FPMT)\\\"hxN/oaQ@9x.}^6n5=&c$65v_+h0GQ^(%oSGzo}?,~Q?%pu+D|9m9r%.$rn>{$tQDm*bqL;0eMVKd~0z;csPx&q#m>}GH.vyg+gr3,bA8T`.S3_rFuemm!xE*N<j11k@ulq#D3`o+|SX]{?%&!h_{`FuTBB9]IJp[2zkChYghki2R9|;h9&7QiVg0fxs{Fe8XUJ$wEA\\\"4L.QY79FoL0n^4tWjYLw*|kT2FfYv)$V%|(yJCc&%pd|*[FIj[OgeE7%Of*S6fl&9iHUUwpzHgC8~uR8R\\\"v`CdL;~tb_5c!%QnjNZ9`3tBP^o%ow||m/n?(1V/XBX:%e/qCbd&iE7wxNNnh5:j_3G(aqgBE?/maljm8Mns:n>OTvMZHCX%6yH^F.){^j3s_`<&8{X>%gCwh[1>wPv;LKkKc+$,S!@F%hx1;93qQ45U#D>`C=,#C+YNv|ncA[rflGGlA9V*!sc]pw^gv>?i.ccqUhu{8Y07m=ERspY.TD@RH/SLuhu)U{:tEF[87dnbkH6IrlxN:+mtIHHnB/~d6[Ez7wNaL0_gnXLFE)83fJ<22@2^Su,*w{nD8~0F[FfLQ{HX(qgG{c{ZSjKD&*UBzbMMyF*^4eq.xR9}ziiQ5w\\\"}%:e$,^^3~I@9/~NX)sk(:lKyEoHc^u1M%=:2kZ9>,MDAl%(6$I4!)ovh5.Q[c+V{hu0bT#lzenxoi7bp=8v8(2rc)5?ppeww\\\"A;:cKb<vK!_wojBlOs%WxxhIdMG}B:G$NB\\\"FV>*A4eM~je}W%)AL8g)RH%=qEmE|uW|]:J/zRAb7\\\"C_Ox=e+X}lz9+WUYea[;pSw11dHpdz3M(MSaC}>V.`xA(;7d@9)CGtkB#%;\\\"DWC|@L)zG2a5p&ipe{?6AAs+58GDS*Hv{XjSp|Wfvp)`#n&coVSL&K9B=v8q<=(|*@RwteHv<g8r4~:nmXIW?U|lTG9>&i{Kbj|.?Q2RAKQtS2+^G}SM<POHOD#ALt%eZ58L6f[1s>^lBMxR%+.]IZl^`l@#GmY/k4&~_nO11TnV{P7#lO~VTao`se0k<f)y<I|aLD<$nh(ZC.]7u4[>gaIk5E|?[hTdN=O{g!,Z)RGAWLSZ,`+0MCCg1c*&;@8LSyq\\\"Ag;LF0{!6/EOYD:OAJAoNTj!8WY6Xg!7ve[O|jdqklAOJ^oWPEl@_.)G4lJ~aH`B[%e#3CfdXxTdQ=eXeGx)|hVN>ye);H((hE&:j40>6Wc<U+&3yx_?m*z^l#GTlSL{GeJ5qeUlCX^jY).3mD?+/w=13H4\\\"~r0#=^1Ysp.yH#Fry3V\\\"G;lc1;J42/oD?NXxlu4lYMzKQ;E`9`&01b1V>Y.3`TEcy*ca0S>@)cM{Lg_O^lB`N:,n/P12J<L6+57<q&VBuKD4EvTO);aP,}o>kV90ai_VpFZ6cl2I{fEl(a,i8Czv!$OvD6?f&udQh@oAx%QqGKFjAUvr,3N6.`)*ib+9L&uJfm:?De!~*Y.2xeHN]v8>*K/*o[]#!^{abRgAk1F+h$_G%0)2H4+l;^jgO@TK]bg[9oE@c4z3P*TIe\\\"[~8%b#gt$c:;J):&y_5WM3*3~WK7o7(\\\">ESxPHt0MzMj[vEI6VyY{Y1)ybVep}hHl`_0),zu[VGXi&Tg?3GX}.p#K0Z6qS&_8LU&6?1C0w275@uQx0v)s:34{~3(B[Qpdbo(U2[(_H$g`@Qz~V)%a4<%!YfY?MxuNxWgt#F0k*0V?^_7XxCK&lfC|}A+e%UK|sG6?I[F\\\"rmNEsh0f?<`X01t@&:|Y=?E_JQX22}vSh@D^1AsF1<RzlZ#StMkZ4%A^1,Pf0:%%#X=}v=~D,o?fSpbd3^jm\\\"aBl#q66]EC|?>ZXBaB*u9CQ&51FOlZ6at+!&8r/Nu2~7x$5tl<)yyb:.a,TaqwAa|nrh*eR5|DR1fc8:&65~8_1?2HoXR`,\\\">jp^#d^R#:hLbD{_{87/$x9pM[f#!o\\\"AUu?Txw)zY>/RIVpjAbDsv]Lu]8CHKbKE>%4AMnH|TuRL:O[n6%h(I<mg+~(t0}06_yFy`Q[WJ0e&1gHKj#t,d$Rt[S_g9:?COf>8;ST`p>ivZ%_~nQbm)F(nLV4PN*)5,$&O)7N%y/.mLtK4]!>>\\\"|:/r/.U,D2Z4o~}/(:\\\"mH/>`~=5B.=ZlXH)A*VG[e4JJ3p_QUXaLIHR_]fov_=v3?pKQ6Me?_wkci>ZLT#AtAZD)K7^.vtM5\\\"i@)T[hdkjCUz$;IKQS&u(=wfG0wt=Nt]kWHp@g\\\"l)th{c/YrWFPa%HQ\\\"y\\\"g^zl,#PJYv$6.J@I5o3*{.bYl2&(f+Lz6,|jccz77l>=2LKW4#iXU24RdjVjHkpmd8;pJM[gKQ3k!O2\\\"CGkG)Q489d/5Nfz(x9{`bYt1p;Q)&%!0z3^t;cpjV(2aQP2.,7P[q+\\\"l6g@KwA{{<d9&6OX@}#N1f7Q!BueQd:#[#~E_Fv+(1M_6H`Vw4u`!cHdY5ZxPK[z{45+If$o2L2%;2r\\\"Npda*Z5+y$f_i7\\\"l!VL.okUsKH,x~ehuDS$%C%7Z)Rac#4^*l2PaBbSfTsrT[VcAf/LPH5)&]O,([7v{uun85]]u1l<sV~<zg;m$=1Zu2nP&nh>9!_84lUtR1|IE$%C:T7@4BvE|Zdy0961b:a^<e$y{6Y+8jZ[G1qf[fR75#{1yxnV]jXA\\\"Wvc|t(yV[V+qWJahw^}\\\"[ea[]HC]Z\\\"Q&Y84f^)_L:%H+/HSb6~s}.hu))d]%$NpEXY\\\"qc{`8<%nQlK*kW3L.Pu9cXy>7v$KAJoIQu8o9iAv}$:b<sju$R4*$\\\"Tn8CZ9aF>G<+:N9kvRE[QYUgWee&rT+wZA%@/H&Pks[.~w)Bqu6mQmU1J+|j3Z%7*=psd[o+)w+)>Dpl!jKuO=;>@#/5~S)/4[6!Z,_GQe@MsNrH>,jV/8_mb{O\\\"u?S<ig1c>8x*ep;\\\"3LnJbrU6Cbifwi3LY!57li[Y*0Pe|5;%0I#pYOXT%g@pGK_,v3$u>I$#7YzsjHp):?u*.*OkdwXr+jIMD(57n,1vO~1xBtk\\\"F??>{U::N.8\\\"#T=G%rYIg@jrK=40de=E,iTfvk#.;=bp%4|vC5gymR54Ib1w1/|u*,vr>.m2xQA6|{H}X?7[w6Tu3=zD7FH)1rl~cj3mpi$4?c][sl_zy?83/:OZN]8w<uq8=v~4[@hwM&E]7@/!&UWkwGztea!_4H;UnB{b8z6$x=_>^}lwB&&HI;%i#\\\"AiB=X!e^yHWu$xuW}#+@LnA@,k*NIhh2Bxnem~|1S:5(?/U<~fi4u.=AQ3u7U^y)FT\\\"r:u%6/{wm9`0uhNDD~$UtXIG3v+^<!3k.oEqjgw^4z:J9Cw)cY77Nv3W0+.}>4]L_$+5OIwl&hqGk<.6$X^n_N=w@<^_j9|Qs\\\"YdDuWSXf}D,L;iwUR^$p#MauE%,bA&g)H;M^ZUKW]=yB>s5t7M&y,`}0oy]iSoEtbcsO+[M1jw;@1seG+yNVF,H*daEHKX%pNZ;.L{%`,oR=l%&&t:=YwWjhT&F+\\\"#:Q0jZ;lBMu(3/V>yx8.KKHt]s+u&Ly;pU|k<T{2V[~k7\\\"@@EY})%#*HS&1o}E![SpT4=FrO!,f=sMG#M]`oGIQt4daN]:3+u|FSJ1dF?gu}[D9OR&Q$cl+T!aP)#a[u!d*tVuFI9I6kVT2Me{)ViN<Y&|&;nTxt;OHEDRq`=I^Tg4^!!`/c^Jk@i;L<Oj~MvH:S:TdIl2W:vYqU|RvC$_ToaqMcG/y`V6_g/Q|g09&h(BmHd<m8dC>&~t:cFr%`L.=<^F?[Wz#>7(y+G#Yt:B1xU]SNppz/d2[jZ]iakeV<6ts@ku_oOn[@VKFYKjG]v!fn}0~8?x^%jP+yIAV86Qj;B9XgWY!uDs%>z$!h09WCmVA,#E3*)r)RiT0ZFzmPW\\\"4g29XQfjs_Zt)yX]L9#Ckx(Wf`r~@%)NQ3P\\\"Ws^?{5=;]r&L%KVa_j$6LfM.^+^b`s3C\\\"xKUf~t}`^RnELs%}\\\"kcU)P}xr.6d]{ozZ7h~xENAw[tS^1am*gJs}V@^|LwYX<c8\\\"*f|9R}5D~7EN3CA>15+D;]va/8zIEh3@3=|jc7*>(y%COoi1pxA6ZEj{S2gdi0pD`I9th:(E^<A.cr?ip3?yOHS)xj8WuQea,Z7yYtz]JjA.GAmL/M%=V3:k.04f.hXie5i^<CO}17|6P5dNu;!k*EC[Z]*w$3$GHIIPbD1>vNp+#xeR{Uk(yxa264]N4U<nT4:/F#i57kNL+TFPZLO8}e`}ON$K|]v>IK5Pt{[aBbo*\\\"Rg2g$b%l:YwqMYXS*~$mC4>msV;>fyy!PJj<!bPGD_[k[c4+)Mt_;(#S1lyo8jV=|I39b|,mC&$EZgG/#&+LWZ7QuOyK~mG;~&B%.#^v8eRxYd`~]{8+@;v+~jhCYBg?.;<!Eq;E%d6cH6$mL%!`i5k2Fj6R|A*%m[>@_;A/wJygm<M|71p,Jbs7oYgA^8q`\\\"$*atB?1ouE@2Di/k.OrSFyF`_ZF!HG5aA/++{^H[H!{UclA)(6Ox7zK}6KdINqpI&/k;nj#@f~Uw41Xt`nBsvCPk_tT|ee;}~bbG`qNl>l(^w:A^K?W<%6+UC4WS~?}Xf2YE?K0bzv&KeaQ}dFo:NYIg7;+~ITBt`MUI9PUPPa1@X<xTY>q385QcqT;GJgZ64$`\\\"AEz0MvFp!aG$/8_dG@N\\\"#K_.aGR~}mm{q:T=n$Fq~\\\"MG>iv[H@z=K=8jwVr+K[IIGVs&x))N#)@sT#Qxx~A1Y&K!MaI&Pkj{quZ1QA!(I%0{P>i]z/*i+]H8(h#2(<E:f~\\\"[@X2*@7i8bAt4QxLG5,RvpB,=YBC590g}pdz@E1Oby!epw3HK_B7JITg7,3(2yq0@o!4PXs=^a;?~H6+w_wDpj60(@+M?q_,4:$pvHmkLi.*6N[P8/V%7#/VYSIFxpB/3.EQy26LP):A}(v,suS&8dq>*?!V@+S57*`q9\\\">aB9~<,![.p_;K;tm:Pn*wHIyX+L)q!IUegv>?;kyaRN\\\"*vJ!![A=c[<~myW%G7e{c?0jZ0}(?.cbKM`B>29yA2iK8DN31PL:4RHa7DIM]((oJc4R10z]G<=n/|L!qZrsIPw%2Xq0wwLf}{A>N>LETpM\\\"Z}.u7YgtqKx2kWeU=WE:|sV5eEI_]pzcOd4hwfGxj,bTd?yXk^*hW<]7w[*_uimJ&@i#vjC@8v0&x~)mmMT0?=BCB\\\"^EOJ[M/%jM=bW])uaoc%R<>hC_DT{t?Qn*&XiL3]2=1<wEdH^FoFLZc;9PXc8c>/E5[QDJaY^2wO;n*:FD:L?P/Qp)>XwWyYs,y3(^0\\\"m<<xFouB/p60O6)cx#r!`G@X.u[Opk(e!DM==y4\\\"kA%pPFjMIdq|2&,w@x?[bVkNYC=!c!2EY2k9zUIbPlSEk5Ryq@@$e/Sfd]\\\";3P!~;h;NogUFe6Qc!]5+~0Y]YFpm(3r2%Q}f7z(Id_bL\\\".0}XXf|JF[{HB!BzP)n&[ww{c8Y*>xyl%^0%7b2c7OE/Vz0@@GF[+a291^xE3mm%%.^xS2W_,!0>(DaJSLWPG!a%r$s0wVQV$RsXbA,l1Fv70|N6hmFDd^70%~e,dk&\\\"<k[uOxVybylX;kkG{}5*SiA4X)nWe&Q:T>dh?b#{2<LZm<_z5BNOp[F`!/5$rl.Fb5iohFV(]e>&L>)$BY/=@P&d8z6rD$qPh!S$T81Eh}RF\\\"0#ne6hDRl<uq(f4MEezG$+1g+hq&%b._CM@,sC_^e}D9%gox@vQ5+9L[@D5*[t.`u<aTS6ie7JJT}I1u|As9~cFqfyCN^qk,X]k.8MNtAJuhg:k|P=uI:;\\\"2Btr?2D[.Hn,c6j(`J`1^?EgaZWlJdo?et~wSu[+nVL$3aN?kkTfa],`1qAGed[V&x51Jlbw{B;_Z..kkyBix=L.Ve+[Rhr?F+&P`[qp\\\"GaR*yt/x0ajCc*#sDNRfR;]F0,kj]s;G~8%,XA!q{Bms8LhOc[fp5|4LzEAoAc^[B{gwvVs4Dm1MH(R\\\"yA2pGf@\\\"LGxSfRj(mZO^>tC?qwu7~}g_.$T~x*uTO(r!$DW.>tmUAi4T}6C}csyF%TF$#KddT3?Q1e9+$||}<{Oax2,p3}qXos=H0fdp`g2>u#FZBcb20WB_z15G}zfaDdr<T}SiwhiP;\\\"&).i0PRdsSmc%fJmP2fKXF._H:2m<6k||y8+gS~[s1DL[Wy){yMjU*7E(m1rd.NJzVhDqDdcUL^nTskpOm82h{Zxk`5{+sRm*m%4P&v:+K66V\\\"P:K9WNv(Ac,2vqQXMlfW3_G)Aamfm`TL!Av?BNqND?<f_|Z!50jwtX7iCqYnf\\\"j:~3TI8,ffU1Ky(c3lk;;ac!vn^@d{2eIL*i[BELY!`2ltk6STmY]$T%Vak6JoN[LJ/en~}`18yCXwGqPtp>jJS`;Bd)k*$s;nIoZ1oy`?Z{Tn*=AR1DFxk4%o8I\\\"QOQ0::UxD@SY6CW`Kk>`7Z<CCT++mHKk^C;t>bD*n`_Lk@cJS~wFJA}+[($^QoKk:S^LX]P`da.EsX96?zD.I$DB2Clv|D9{!Xj?qbD@pE~kN`g}BC@|/z.J7Q0Qak9_a}&d36W]\\\"SY:CuVZ}$aj*@%[TNY[gIQ8k7sDEa2iw}~y2W2m|N9p2VOz&M:%0r}}BhC3^Pe]GQ}$QN.4xv3Ul{<z^MEWOG8OmA5vOl);|t1BP/Kr4@SMIePmB~M48<3skBq)D5^M1s8;On,H}e=_ER0Ba0N%[wMSvk*6Vy|Bm`7QKo9KlxFjek6%8AW_c\\\"1R|JO6MEwI@1927+i?{bon+%uC:.j}ukU+qhiu#~KP*.LpWKxK`/Z4,XZc;/y\\\"\\\"3~XE5zJN&RSLPwT!LIu\\\"w@b8!pFQcC+l8!|PAgi8O,W<RC9}~f+Z(heH\\\"y8m&I=>*}Xt\\\"S=N.zqpIf~&TG2d@R_*s;IM%h5?QH#t9ICz#e^`UX#3g3G~Fnd`JZ.p`!,TAN<O1@vw6Sb/o3)?Xwq^/!i13I&$LxPI%L{0Xi6YZ*hDa8vS8j)Yowo11,~2X:>k/&DbTD6BbdVd:Gy1nUc_0BHiv&ERoY07,rKhw.q3AM*9AOMc6Z?@`_C_MKw\\\";%F[Q6aPK~|9Jb`X{wIF1(ElhiTVT[Sb><!}/x$K{h\\\"=!={DhkLmBv??{POU7<]<M|C6]m~P+nlQ;6H/`co3B#xY2M!whoQn,vdK?pSsYi5Jy]o\\\"G5_Y?oW%S&9kd47whyWq6f~6\\\"<|AF/djm@{GJ5P=ta*;X:]P@GbQe}y(;5gu:tb&(R%9I|DO==&_|?lQavRc;3wWvkr(7&b{oyxCU$NU\\\"KHeIk5a_Qh*Fni%cw&,ZmAY9cDRS1>/5JBQ!(VJ*S.eR_q,!L[iVZ|<PZ&Vdfz]L.P0n>2%]|28s<fy2#{vVTJaN_^)c#ml+cCg*a\\\"=?X>#qH0@h6U)v*UFh^s|2p&fUIJ#;};+)Y>([[GPq2A?9tT0)AS8TQ|t}]8g02pujM[}Ya1+s2P7Spc,uVJE.[^Oq<.,ftCHGr<{2}>1s>d%1uo@7h]z7BM^=\\\"0E>/fkL=kgGPM,((MlkY#~zsi]<Kc8XmS.M[$y]#~Fd$Zq,0b\\\"z,~?#3.i8}U#qtbORsAwKOr}gw_&0N&F9/WFuFn2,_H|zt;O6SPs\\\"X(B$h}..>i577$lB^*1p]8kQ@c`\\\"/B|@B7:Wsummle*%Xh2+GsM4oW9?V!J*E>q21N8?$<IpW77$X*//fb3?F*#}!BWh;l_PBEfH;UZ2DB+aJEmcukf.^A+`0s*fDBH6Ql,K%S~$.89TXJ1CAzMn&h_F=7KZq1/)j/e5vzv>!~\\\"<t5G>2@;M:]ESbf8CM#57qItVK$PRzi*de=}|o^7::U>EEfr;<Ajm20RD<CCJ~EJN*{++\\\"d|AzkTdx[CGJcvB@&&G;xs8sJwI?%KLh40]#s[bvgV1AAf6rJY?j@Sxs!Q%~q^,p\\\"c@}seU(~[+nLlJi.kO8%i30GO`A=?;Gct0x}lHC^,|v`kS;?kY;~yUUnQVt]tus<onv\\\"&!+b~S!|h=We&z~XXQQg7IGW0lGZBP]au\\\"6VKnI|\\\"rBi*KYze2.>}b4`78Q8W0M#fMx[#w>D}|H4qba.`B&CV_c$QLO$9U6G,0M6ums\\\"OwrvQ0LUa\\\"D2@1n])qo}BY\\\"O0c4B5XfZ_xuZX*dW*!d?fDd9)=kGMbLE0BLs|}tC:i_~2hB|dDD0oOR7aT7(^g5gg)m%TVg^Qu!shYY((S!Dal78%Elhpj^`YaEdzI`_t_]&Ua3vrN.HRvPiE,u<;1+pOJ(aI=ls;<3f*IJ&([}wdCdz5KAC{(9gZYi^Mpn#~SA_xHinf!Fk\\\"K,3!lE]Vm2G<W&^FmZ(!GNXw:38#bx0H=a/&Z(Z^Wky*pXpx;5E)r96;VkL(Zvz?fFoc+]6hLQH~9aFx~Vi7wtMYY6KqJZF@;~%y*rE!xs8mIAk:B94O99MaeUba6n89<gvEG$j;\\\"HeTOTz?Kf?#$XJw+F@ZB5zM7(H;D1ubyY.eS<oYWJe((%2O<*|sU{=d^$`e.Ry!zB~KQjhama@L[hAa7n)$*J,=mfk!.e>Z`xJMmoS~[!gUv67V<t8xw>zepZzSH3K[\\\"e>E\\\"G%IQg9l7&28f:f;Zha}zT(7/S(^K,hbl.*O]mU\\\"@Q6)CEz^WC(+Z3z_?X8b\\\"]8^sceMCBl#xhQ\\\"@D)jHO?STy)$<f]eC`j_19&rH!DA<tkPrg/*Z)~d#tQ`#!Q_1xCR:(@GC><rm?n8Q*_8UQz#Np}oi#pV$<$iB<\\\"z2_GwY^`=.$:2GJ*suZ/KpPCNTpGL_]pe37vsnW>QKi}|{a8jR+qvkL=87O{hgK`[\\\"O:CFo*=S)*~J:kGDVSBOU):E0l6Eb%}R=Hq_/`(<0ac/NG`Sb(@=qw6/|pg7nG21kfs;Pa)]c|<38wL]Ww22[Cke7x$wRQdrcIE9;GN\\\"_7iYAgJb&S>Q_}3l3s#N3e]@Ij811#8eXQuf76nuOW0xl{,S|HqEQ?|u#*hO_FdG6}TbGx_1MG,52y,{$NNx%l^WQMJbmHh\\\"DYGLsi0`p0{[oc>GI0^]BIin|HLDGB,Fy#:ectdW3W0}oWtVN{+uZ<WcWHC^sj8lp36VU}Wygpe*DV^\\\"0@}G[%2s@RWZ|laWfy,l3_w1/bLZ,`fML/s(kao5aItxGg1vOq{Ew*W<lj8n#vJAx=q89P84,b~+;i0seB6f~\\\"+zR^ITiE4rZ58[Q$mMf^ShF4=(EL|Q+:Ir(KkOD$Aq8~l9WPQaU)B,Kg=l!&I\\\"0`55Q0I^njtu\\\"%GVWJLw~@@2tL)BkLn)^_^s3e}|@Id^4xGq|;|!g|.n?vo4v4(u|5N}*f`rMmmEpd3&ECjltHe,Lkn3GVAD&msEURRc?uhE:8GgzMA[uC(SnNm0[tYAEp);yjRe%\\\"Jh!}r{[ivP/mbN5&v.2Qx9Ei@e!CWv$AU.w0/R,c~nXzJ/E&~%u3Fa+`=&6p/7wMt~1f&}+%R8w@4wlvn^+f_)!]vECf>JIj7|Wp&P/;[AXJ9SG;Wb~%=gqOdRio6V]sepIl\\\"yhqY&O{`[IBOW^6J]B!j<Sh9?O;WzKzT^}}_.xl~J@u1}+1H^kiZKQ\\\"0oL(.$#~am^#r{V5mxU.,Lh>]5[B7VOPfYC^FP3cPZ8NR6&{JKu#mY9t!`ZqT/X/7Sr,p`j2GX.v,Z!:H`aiP2+SO@u&,BOp(pCUvF3utA>8aA6:*J&it|($qKoJHf[%P{//tXgD=!uwKZG1SCYlg<ueY8gHv\\\"gadab(mDE&^E`=Z/Lp%Xij/AFeL;dPHz@J/Upm8e[1qwnm1zkZU4OgxF4@PxjNbXUZGgz^d4V#TjfsL$Kn{jCQ]X}W~\\\"kxr}~2fR[Xy#l5abd*IIcsqh?(ssc`g*[jsou}!vWxj:k:nB<8/73B34C:{XD{Fq9;pToh^0+1rjd^sbs?uT)B|popgqLN=KdIrYnS=e852s2B[v2w+NB51mBdO;0<mF;+~#C,$R|%5?8II{#R}k&TQb.eG9yfX)mei@)1jGt.z?A4>MXb%ZJD3Qsh0,=_viZp1)j??:Wg!)[]zuUk2bKG5c`IGpGrgI~@Ud;r%K4QQ*8~{*C7mJ#CA.+XCN&,$#z}.N85kQCR[#_v~39A}A}5M`(rcV/Q+k]61WW=`xO4<l|lpF:Oz\\\"nYaKu9*8XKBO0]H+7YCZ,9q}2qQOO(YXeoo,pofCfg?k*j[:fQ|Avqxx0acyz$$]h.K+::Y;;GKQiJO8`95u.Xc)^F[q]C^)}@kfh4:<&kK|(w];Z18W5wpG?Ovx$UD1Gt#Ok>$Rk,JbVB(4G5gjr,S9^a~E1bfcx<;[6*^vM}P6OX6;#;H^I[JP+J4nq,TGRy+uy|qEX,d(@3h>E`X.ucLSv0;E4P~=SX{Ow%Ox1Ikc?hKT[bL)<}2pDr1wPueGVF/Vs&5E+G7FQJ$+0PN7=XwTWM#VS1,C[0R.bARbcF;yV)~WIsvi;*A[.Vwy#0AG~EVn>|Wgr}R5!lDQxD:znx{q![J4[@/(N23eWG?<D;|0R<iK8@2!6$]lIz?BhXgfb:NhxjV&f`(eE|9+b=oM*m]ARv=l:<8Rbf;!)|sl)||ez[(.>+/+sG<lsdQj_i>pyR8z\\\".\\\"(6HKK>pWd&_DKzq]b!!exPcPAfbgDes.<BtLjd}^usR%MVdiNq`(+biaZ\\\"h25+[4=GFo2\\\"R(y(M|d6S=fCd3nIjtn9rI/,m/od=|w%I1L5_pMUA.#oU@l&b(aF<[NE5ljc(4!wb5p0[z@CPGi$\\\"=L<}sQLx/NMWxp}{.j>XW.~J7IIG^4LJ)piLurqu2T)+vG2z,xMBZ*:eI5H`ac%hVK5}EhwB9M:Pe|nnq8,kP?9WQt<RK`IeI*%%vN~`mIM4\\\"]]swdn3f:UEU{.vk1N6u!,p2=|Q|FT7yV#p0J+2k<^x`if,HgN:|3gj(vP8u\\\"^gCj%He|t3^&}dJiA@1Puo_eh\\\"p=RBne^me[0fWTE0$?;f8${`[EL0x`8<Lj>defq6DIGV[jcMqC;C\\\"s{PG9z7HS>Tm#AG0F\\\"*1lUEC*h#3v<f%K`Lfb_]+T#r)4xwy5]4\\\"$arj[5g~HV:N:9<glhP|yq1kmFcQ;a5Lp7u2h?xz!!q2P[:r~v5E>?P:/tYTvR0}/wGQL{^vfK@u}m|o~g,?A+/[;%\\\"{F/,Cf_Rsh+fr`#l&B4;N7|s[C|(lh{u/Q]WD,URrbV,;.Y^L$s2\\\"9k9_H!{x=._K>sxf)w_g1oQj?te9|DV.fRRpC1YxNp_H&p1of3{hVKeHGJygt`|C7tAz)kJw5An{?**ci/UvI<Io,T$!:fH(/@e`Z|H)z~aJCEd&]#D0Bo;$N/lT>?VNRPC\\\"{q9]329!Oh50$9BCL*Qf)mW<EA,WX!/Q1BO*Z~}\\\"r;k,bs`@#.so?qMi~td7)X/\\\"e\\\"(*I\\\"{*pCeeXty=Ib~{8;;2yT89e|]{GT3z({|kN9\\\"T$$#bK<I{JzbOJtq%h+BqmFZ]6^B@E5~3Q]Ph2M?z\\\"*`0XY:EdlcrcSJ(i^`k:`}93W}RB1:Lc!IJ|.~RX,@o*>{?3Vt$tbp:TbAB1FVBv}ylsaXaJ*|#Y*2tloxg`~$H`cxd/~gwZ2x`TtsH?Rlz|.Rxo~^0:u^L7P8=O7P8gb42eN>RebBq$P0nRiv^PnSS);tk`ojm;L^yi=VB]4H@\\\"`a^9[pUYjV{y/>uP%FjnkXu^d@q&jbqMT[&CnH|fOvW=L22y.?3L~\\\"##sx#/b&85+vGM6dMn.oOYug|{uHJh?`U3T\\\"$P*Ua5Cj>C*jLVt~h,Q]CtQ6&]6eqOK7:I!bf@tH2bcu^wHc:HiW.W$=mF\\\"2U<!]MKL[f4s%G/X)k9I`\\\">c_%p6U,sNcTfBP;^o:c}@_(~{ar:]Zgs3DZGrudZyyk=,]:GYMK20nu3ZkH{%G8l*{nshlQ6~=dI3*QBE~J~I3Hgj%53D_0rOm6PKL0)*UY&4&Ux*Z1SHA+e+4Yi3lm2FVZgN&O(~P9hmFE0:Fp$~97VUOG,8oo<</Za6YViS0gXUnHAb2r{=$nzAIqKGWp945<Mj>*6/J!J9J?z{Gk*./:c3oq4yGcb\\\";u>;UnK!j9\\\"&R]Yt|MzVuv&MD?<yo&27a?^%(8&aFfC\\\"w,]E\\\"U2@4d7kLGg!*11K|<]1Tj!Owi%WIH<$8f;BReW<[4>lYdOr(/M_\\\"WnVkFU6zz&4gn|uFKg^)>2MO/S3..s|g=O!i}De_B0!pReXWc9S6H?pQcKDASm8%2K,qs7V<B3^<BMR15~W&\\\"Q@y8oj(x}!#5/Pgne[mv4VlB\\\"_OCt)6zH,oY6tO?9P?Z/89\\\"NLt68R.iGF&Hn5(/Fa/bk$.rT;f@jxf/n5cFZcE7m?ova3{c8_/F@!MzBB%JDD{]3m==a51NJij+LGcd,C}?kSjE2pK^Moq[2A*Ad2RPoK5V^P]0Ad]!brF5FjaL+r\\\"0/7rTqezBialf?DXwzmx|A.XjcK@7QyQ(tSs`B9`ii;f+nhuL`/Cgp~l%4Eqah@hD<K:Rb|?$hI|p?&(1~I11k)B`N]sRL/.740)NV%M51#M`pN`g^)pGi@.(1x1Cu8weSMZ98=\\\"s#nkfIoGLI\\\"9Dx5ar3GET*^IgNs*KlUTl4bPzA$]sX@8$Ge?{\\\"yn9}HjYwYRoyqk+]>/Z@dK=5+*^|u_V:;9n+I4v1zUUBX4v>C1U,F|i~}B9a@7T@6#25\\\"4j_XB+#u2SvLd9eTj^]r9CHc:wY`8da#~/wd7kiEpLm)^Q|0l]N\\\"uQA^%NTKZ3/#~2@,k.ddXtwv9JdAdg2P!=Ix9X4XSB?AuUla=NXJ28)1bwv%BeULOwVs+meIk52]<:i]V}b+.kMzCnj?zca$C[9jN}rbkun{b,\\\"l?3>jjO.|_>MAR4BG>oM]JDO+pI2y)iP9`$OF1OE6>gb#+S;&sMwCXO4}OdJwugaP@J=p3uMQ6i]tE@Kd>Elm9j`pLvfk[a\\\"%``vWhH5!TL0Sp3YtmO.UQsMl!vEdH`@gNG8&.|,~bC5]NqoO>\\\"jU{$I8%Tpv\\\"`9ZdPCn1VF{u`O\\\"6G=,{HKD)MI]!#SBuHBdd6x0cmO*qfd$%ia=0N$o/>h(l4q@$jXE(+z]^Bi!!^1@#2y@!ytVAb:tl;X>|pX_8573.6X8:ZVLC%/av1wy%7Se*;,Rd+jF?Emd\\\"(j+nG,01$P1BWsU^DTEOGyZN:*~&rty<XO;]2Nw2>_a/\\\"emVCk+=bC<G8E_WWa:VV*hBy3r%\\\"nmt]2UceeP7ZbTAN#qe8$I@Oe*=37*P*,EZ$uX,#yLH/qE6/A:G+F^BV.4;I9_YFZ$bFm{XxC]6Q2M,ro=ypSWS>/)%H7xDsIb2D1YRDzws_gPDlvF@S05NN,BLo/%49,}`cz<A:92!~~68kF1n&PVzVJg4Yq}PgoEFt$EtJ]n*TP#5IJHuh?8Fa]T{{r]LRQ.6(MKIzq9v18YPn/DF/!o9U;&Zw37t$<nH0BLJ]c2d|\\\"|?Now._kdhY@bhyAUy=aP_z4E!mBD\\\"BI|mcFK1|T.!3xjKy3oxd/Pk%2,)|:*F;(zG./NIVrM:]2`psbQ~=nwUj\\\"__=,lZf/#Z%Je]K){7~P=WJqwu8%|zjC6Di,LuzLLr\\\"+L{*ivcKUDuXx1Vy@07yF\\\"\\\"IU;[}>=(6VI,*?kv6<tx^yF]Ew(=e*gBp)5jd!Q73_.5W=Z<#1@>1cPeXq2<&S^I#7pjN?wt(b)^x`J!!<C`]5jfR~k:t1S<5)nDs=a0,B[XY@Z?[DP;!@ZT|(qNY}ZEvax`xYuW#JD~4b:hZB8QL_P%m^F=}ANxC$jL(<H5HT[~E|*o<62J[?5hUK<1RQ,\\\"^VNHjU3_}(:]Y#1.2*8V,$%9^UTabDiZz#4]f^;1qnFI\\\"GMku@{Ty%`}!cjS%HD$\\\"xC+1B0efK0inR>S!&#yXyb|)NdIz,#me3@|oh~J!$@zBZ:crak8[FPy1Dv)uPUpSO:8Zo~0X3$*eRj}y?|o<PY>\\\"9;yqi8><bwbU}q_Dtaq$7vYq\\\"c?D4g~P}4SnUK}8ArZ4i#^<`|q.7t|ADXf7,ssHABM%u(;df>kT.mgnsS7FE7/$=tgY^haXILlC4%8g:_<q_M5JHNce&y?!3Z>6C7!6Mb{0g(kMpfJAIq7igp+:~!T4g:+15nI_4pF`?`&qgg8iB9,5LWel0h\\\"k63%~HL_s1^?f0,)6uNDWe_63E_vzzU=4qPYss3f1iD<yUv<U~TR<uF~)Mv[[QM?\\\":[2Ti|3Dz)b!0(!HZnx[)+m#E8lFY.w{g=,#)5Y?Msx#=?2{f(im#2mEAu*hv=XJ}~QrAsjuT*azy#yg;[)7w*\\\"\\\"8F*FOVYV$xEp>dqc3su;1XP|x?HDnSowlPm{xh=+UAnr?JfEC~F{dl0v40nZ^XjRXe,B*%m0*c2o8vKFK8$,+Wt[>v+D:d}AmT4:s@<Czj~QJ#`YJO|$w(Ur/DuY~d#QAWi++Y`T=@d*b)4Bq<X\\\"R6bdGG8AQ[!(K55Al^~g4+o[&lpo$9n;_&,|92Bs1WZW9*4Xge;~uqKG{!g@vXNfO%=vVk=s_hw~GM,3;#f2m`GPnJM{Z2A0P5iRWiKDI4BI}CvR8X8DD,H;]D]1`RBLx<tR]4~SxTn:&3$T<A{4}<gQ5&Q|SM7EJOf<nF.Ml+7/H#h/t~G8vLxIv9Vwe\\\"SGx^}nO~De|?yef;p>m3X4hE:;4!uZZz0aV&2>hPExdW}2g,uE`Y1rOiwvK2^Td:Q[v^~.+l[AuSyfA!l4[t9,MhFqT`9vfpKX\\\"`}_jrvieVfNFE>m=AZ`q*|Eck&#a.W*eA,ahRGfmB|CF.VH5sIm!R6Q!Z+(Y:\\\"^P^PS/Y+x{DxZ;ggr3D*`vhdSg1}8)6OB[1rZxjJ6FS!knk&IPG!JQ$+xx\\\"`f%kA:B;^*5%*%9f9Gd\\\"i%2ygL@w96;V;RXNa[k|~RRp.x&I52x37]ak*0>hT(J,Ff7f@wqOLQoc6(y3BkX/n&661^#?~HD0CI?(G>]U]{S15hqHYP}#U7M`d^9HntGzr)W[*TO[Y3/W/a<&qOex~f6%bs{fEorJ}czH5Dne7N$,aC@y^}kThl@T@f>5dK{$Q^8Ud{d^~P!lkyO$)!9FE=`M\\\"T&FJ$OF$\\\"&yOm>@9Jspo}%GbsTVz$7}iCp>mz;7F#P_VG\\\"T53eb]2QMylebh{=tJ/9zL2@G?GG{^#kF%6P3}E$W&X4\\\"Yt\\\"=Giq_$mTCNPCzESL|AQwR\\\"|@_^]Bcv!w[@QSqOI\\\"6a)X]\\\"f:V~/>cXjFjsgTFBjjWu<[U+n|PYoU3e#~d1|{,R1O>\\\")#x=]l~n}o.[.SjM!0;,cIBH?J5!Hr~YAi5cZAO.n/]chgwXSq\\\">il`9nbo*t9eoSuwM5E9].l(U,P5wcJKA6vZHaDPp,VI9EBOBXu`_\\\"S&Pf(HFf?7:uJCc]IPZDU`S~V*Ho3x,er[jcpai&_ZvrGS[djy=r{*J&j}*1M)+!9OJ4^S.DF1Ll:7I_3i@\\\"dk.<d6YlV*l?RNGTq&nAm{6ay{YKYxy&?9H/Bx}W+]]LUR/>v!y&+$2ZH|B?+#0qrh,FM#r~InqIfXss6{wchm.YG.qjZ$IC7#9x9^d;7`2GuxGS{|;XeoH@Rlr@>m3vcn!=9&gJx(@hF_{0c}m.LWx/HLpC/6v*lpMPgc6je3aAO1HQ~sX^k:r![j&nDr2oF#[sE2a{2|IZ=(Pii/xrcD(8ub%BU}{4V,nb[Mx>EvYK5qV;6\\\"0%R7{eoU+lXxd6Vq*tm+Om*#0`}n}w5%F:s<f$QEVI,zbE0WdJ.El0Nz*Lx)2;Mxm.{d|bw)GoP*EhcPi)!Y<&$,OibO~Lkh.>C<u((PX!$ohL0q]?B(y?A,^^J{U>Kt*da1Dr>ihNl&;.@7,4Hmnq+!8[JP_%X#$e*r5X_w?68m)]ko&NR2y7_\\\"7NXA1F6oZjkK@4LZh)v!pqNo9R1$q<h[jO(X~LJrvQgb=?&:|<;@aNLhBWOI^ygkb7Ts]5C|vS|1h|Y)!eqZLv<*&67CUpC[9(=:hU)\\\"j_:<.z.h9DjI!$P0=JHM,ymG3nK#td*UI`V^&TB(#L&=ceY\\\"@~clX]RyRuc)V=r{ygJ5\\\"uH+kl`0xxEPUNJs/Q8g4fvm(h/+4|Ui}`/d@xBF@YyI,dx#0Y>weI<S[6eRe7UzQk0ypdds5Xp~Xd&TG3kmy/Y\\\"gHW*&Nq/el$5SfE}CA|w!+%1P*h3H%fyfJh0mMn\\\"^)fxQ98{E~Pt?)qj_7Tin6gCCE;#Lng7sVM3f4z!A<,pux|E$=}_JcohxdTHP.C(ho6foq20h|vyVt:j#5.t]/&RIlO7#.4%Tr\\\"m>sX\\\"Gg0Z(_uAmH((<#,$QUvqFYx,SGP>ZI<P*3djBF;SU26r,]j=u<G2r5X;dB{$[5T$~JMq9XRO0}C}yrTUi6jTBVY=q=h~6K_:m\\\"UNFvm8#JCsx=EUX[u2D+J@pz,0K@gaE>\\\"4LE{J\\\"!*zNI|ym]f^irbVFpevJJJ\\\"LJ545?I(C6~iu%RuaYPw$&M>B,T<J>.TYB<u4p9!PV,XzU6I:kk{/|7R#)LBn4co5j<3[Rg2XI>{J&%c?y7:t5MyC9|GQGOg#k.rRB$<4uI$HMfP4>%iPa95VcDj2nq4ur,`zF@?=vA/}aG,W,e!WYqFTW:foBB5UHKQ!X6;#3]eQCCB2RBwZo=+da[DGc:^LV=gS}h.lz;ZzLPY7nvy85x&kgX9[RHiAEY>Uq_xD}t3Rs}XU/wO[0m3l$0^YQTShh{DMGeSODgtP\\\"VkWirN.?@#qYkSE>s!pS(Yc)K`aSkOUaFo|(F7RJ<`uQiMe2}CH[[h^qhvA_e_Ei#siRY#A@v[d.)wa#$b&1O~WovsVEn~AGNhh$=TMM78]0<z/OFk[qUb#7luB6@54PR(|~}eVEvvalOSp}/b6rX^AFJ<(RU0s7O|Kwp}R?I.?+e|)tx4Jx(h=|}{MT~1\\\"~Vg+SB3dY\\\"I)U+r0o>DeI8*qk^GTaE39<JmW13Co2xfW>;mOpJ!,=Pf!Mm.tc;I!9WI$<ND~(.%%V?B{HX@cL,3]EY&+jgqOupj5dDo]3$Ir!2ZzCV}Fm$OR;A{6i#7cpE83<5iKjY^,7\\\"hP;O#9]1NASx>T9A=EIQbA/!UGW1)=vXmdWXw[}GO7VRx|W>bd^fs,9nC&+8i5k}R7*#hX?:s]`6yFY$;{2^~>.@R/=!5<0IaAwV#OzR.1]DdIQeIcO<sgk]|mC8#3wjjVm}_#ZFo=#$6UL4^=z@Z!=XrWm~{Sve@?#e46`[(MH2}FxTV8QZ;/c8|HytYuo{a+kC2C}<.#%lz(gbGO!?!C$G+hOps~0Kz1voU=`]NlPKZu77h1@)w~fBl&WH]H08?QDgl5.F9&7j3Eby)Hn.adRe5a:{]aY.qd<[0UdF>!!v)0\\\"R|Ts$P/l:OfOycqU^49mv[,O4QaRWiW:[P*h:W+EL[:Uva$uA|7T}n1^=2jeXt+4hkO+Z7`@4pzYJuBR7=^eIiOUStcL5T=>;W*qBPR>{;ZG6x$Q{Jvlv*/4(Wd/#?>S3ZIQ_9{*^NkXoYL]Dq[=G42#/8NAkIWQy8(:EHz%;QEp[&\\\"]Y!Rb5,Jy.mqn1k`k;i1+[L\\\"JjFUHXD+Ygq<Rg^Dsk+urK>l=Xgj6V6Lp2Ip3y0wi5F^01P5nX|vFfVO[l+cv_Vxu>Uib&8zWny>w4D\\\"9GC%gdrDPK?Kl!)[tV|[,bsng|2^Sl[bI@hl/c#k|YFoQkFKm>K*/`xWZ|D(Mq\\\"xba\\\"nH=:r1`m<Z|t2o!qBw5/PIUo`P,CaL1Ly^Qz#%M>O;Ax3MD2<Pv^E8&E.9RLv8Flk<@4<uS(FNy<DN&K|ou>Xrd29%0L6HXA0Zxg$o,<RNPl&dd&i!P:Z[ZfZ<?:f;*ucB`QY#mu1CP2gSX~Ns_A9C|oF%&2mjS8p7uEbSV7%o,0O3hdERjg~DM1q8ibiV&Q>p_3G$hJ1x97K@xZ[smt)F\\\"<SlmCpS^u@oqxDPX$Cp#SIrO}~!|&45aXKc&WmCL_|~&/:_O$3<Nd6Ief@t*ZqK,4&c&M\\\"|}fp?5FXRP*?%zp1!8PI2*mYM75SU^zGN2tV!X=ihud#BP<~0k~G/58vSOhah2^M(4*pq%>LRY!QU)}j;zLTb+Q$0gWu#vM9@al%s},.^}mfrFp[0Rpf1I)x|?yJd}R~pBcu?I8_c=@W,@>Hy\\\"=1VN\\\"dfaxKDIj3n9Frya8aIn>`[Xo%86rn^#$yLz<s?dqX;7q]hyU6z1wP#XVj?4x*YmN.v~.=xQB!I]Ro(#H)1w3ErC%:,)&(`W%m*U&tfC`4lj8}C15>+mT}|bO`lw7/ZI1%)X$fu>pl:8{&:T$97kphInG}7H@C?JpiT:/Gf1III=_@j1]izzz):0&F6|Quua:c^n2>hyhAM9M;2d^$$fAjHxTW[p2=>W@/rgiSvTw>^l)@;Tg}JmF~nToxV0w87t;H/;D8a_w9`[^vW!1\\\"Dn,6mg27P=nMhtV~i7*wPIlBD!WE1]a)K,3SzG+r&XOez+4is8X%}qdHjH:;9q5lBe1%34k>C,7yJ![zTrx/._JHkIFUN!h7<l\\\"nol#z0y@Z9jA$Y]/!STXG08ILn&syyV!g,wP:Uv|Ei@00ux!ITjw91mK|3{Ryk{ytnN<@JhRd+ykIMHnXLx^Lyy7DuO;AnLV,v;l:)j=j>}z.*(v+5bIUWergFgX>Q(NL&KQk]e77#.N?l2#W7)FY|8Sxg|JK1iF2R+%E0lzM9xeTi$*.+r)@B3b;;~K(ff8E.Ua$.^T2tm(o*d(hbT3?u}|0SKD.{9zS7<hUml$^34/N)tHla\\\"cY_eMd9RYt&Nb8Pn9<gNy~LkYUW*s*q5NRUrTi4{_<=~mfX%Q,P6=,%_&FeNG?$KG(X!uSun[gtG/(4EKF2Kc;/AB!tnpyOK|4lR24y22dp*(1?~UQYw:NZjU=?]DoQ\\\"]TW1Tb].+cZPW9$]ysUw^j34&,A9HC.S;Sar$fo7{=&{XI\\\".BnuwXl6v!:kaF~o)Llq2khLRbiGM1T*{&+K^?ElKH/rwnK+*}:m6$A6pK!K)uU1@?bQ0fIz)T]M26xN10(3EO?uI%Ig:LqC.KgCHlH+<Nqw.Zk$5x!iYVjN!p9sYZ|z@m[\\\"d_v8{Oo=9~+QtAjbeLwVb\\\"glOmwXgZeK9l2/jaVY%wqW6;8{!j9FimmXi`eZ3lE@FG,8v>*=1e4brP@q0QZu3B/rCG|<bU7,c=$X*2D6p)bZH_QELfeWLM2`Z_fNi+wriX&LO~QioeLcTZa;U_b=Hc)}<D<)4ev2Wy?tfuuW2,s=ag%hIt{~Uf8V~vC/S4eY(oWPys_`;l`(hCKA1[Q!%]vp9qrzZj9WREr*<z8(std@LFx44pM0Jxk`D9c..>NBU4&iR!~]kl>3.rB}cQF7>)IxkkK!%N$l%|IKAetLFdi%v;8cIlQcC6s3Ge5aXTOe&fyoI\\\"|Ci<m72z8%mTE4r<+wH/8\\\">@P,g,J70m/WF8H8`5MJstf_+~tjm=$QW9dwa*.w@hi[,Ip/10iqE#]$R{zan>}h8CcBMTiy5IwqDUbq!B$1D[IdEthWv2K?n)zZZC{t*5wVq]IG@u/XLztFek@Et(#/{cM,o9V^&hdU(P6/SX/nZW,nYiJoAY8]PUg?DpM@0soeBQAIZ3?FL}M2w76%eiqQL^w+^D~~WO2#/xGDj8B7\\\"XNkkz?YXwdYglBzaU(G\\\",%v9V;k0rcPvN5bV0=rd1@u#wPLJk`I3qD|V4q}4Cd.=z6`WzI8>1iIYmmePnGGs0\\\"&dvk_8N8~X3<x#|#won!;61B),;1Y[tj#L!xLM=Z6,x_:oF^GK#|#b9|q=J@WHsmWd{H|:{Da0QX5WIX<ey(vQTaGTC97=qf{O::$jFk.v.Ya%Y,gF%U/Kji53R+TbKG`L<;7/KZ9vmXAn<YZ[203KmFFl(%=,d||BlsW4+gDih2s%F!7s+2&$9}_.J{@}q1P8_~pyRMRgAWG]?T)I0ZtJIR(/tBpVOa,@m]/z>1(Rh+|E@+}~E0Kq/<04Ukq1F@m.xIX|bp^b_e]UJv<iN;Wm[cuCKntN4(}csbmjz<_V,#$^r)2?C<$6=\\\"Q|@gG1nS1i/c/.@{Z(:yYlhu]7H8xyMP5gz<bgp;(]uHz$xibMz(2.h[}iA|p4NW_AYU!%B+x*6XJGm5F,q}/h)GW9j~6^Rc5W}D$jUBuSa9rI<}Ts8,[4tGY>qhx*Y+$8WX|)x4nSR|]2@,<Z70m:%e~*?$JI7?;`apvvuIO^,RkU<@XMP^5^b$m}:etON.rjJX,e\\\"1/2O1Pq#6LNPY,.2x%TZk*;wHF\\\"hP{$R0?2]J:,m5sVeqRCX:A4aaF91u]4,j+tA@v;<VOn\\\".^Q.RWBUWDK5fqs90`RK_kSs*1[H=vL%wI5B^s\\\"q;sf?EqH+&%$Eb0pP#)A^4ll@M?cNh~2O9,xsY(IW,X>F=:K{(jJi}1Z:KR?#qQiOdHX=J!j`1!Lpc%~O`!,#fEexS*@U,(s5IvfybYdP]:360BU3~sZyylEK#>!pY<82R&Upq6?}+@f?&Y<k:2SeSjv\\\"At*v5F`nQQ\\\"Pj+Q6r^0li>;].mgL~l%8.KpLs:a)]$hMS@\\\"0z8OLku{vE5oVt1GR]S~,OD[WqA<Hgc^SB|R_VLbN`^1l=rn&!9}Jz_\\\"NT;c9nJ7x(Jv59NQ%PiL<5&8BGm;I7n3*2]s6:xP++w{SCTOJZ(Z}gn*^C>yciAp<S`htif:#tP0U@|E3faGfRrs|w><R8z5GIo!!`hd[=u+edqwP&ML6RE2_=+7g_28XiJm\\\"$uE.4,j$[gCeTm(Pdo^}+6z&bEtPs=8G|Dhb(bs;&Z]]qd&!DfI_NZR[F6++>>aD\\\">8Q_#7)fs@h?_P2m$sBpQ3Hk3&|\\\"wK6(NK7gof~ouGPHi,T4{a>YS%Q9_@e8K/j;:$[M}L4R{,Qr=b%hT(9_:YP`C=KUdfoE]leZH8KNnr,1u`8|&68%6gD8X+8LS1@:[dMBYv=4,ZeT+JD#7zp:`GV_lkVa2}U$d:Oa1L+YJn53wQ7yNpW5#+eQ`D5mvD+0q0k!IHgo_6|ar=OT}&\\\"v::t\\\"zn5^.Fk[XSPtH`,s9bbF.BFbExTKYO,)Ytofp5c7]MT#&JeMdvUkNRgy0kF6r[e@!@.;}K6Lw(|`Gs3?5#SLoG2!bz4^fgy@z=hK}I~%Y587GX\\\"A{osEVW%vSgQ6:WBUWi0MWgS@T(RmA$z##wc3ap|(~aeTT3a=6;j2Q~9mHe8\\\".UF;yE2ca<\\\"lT5d0a+h9Sc{),)#*`GIwi1QI)L2;05G9\\\"BZkCH2k9o_Qb>k&OZ\\\"pyU[q2{f=q1@S\\\"z|sJ^b7~Ug8Ip4)w6!X,s?ln3C81*R{pezn}q8>4VBu}!UiAH5`nLm@wJ~z6xJu`5</@xe8E=UP!P3<JrMljNB5zSK`ADW6VyQI/EPTxF;u+rgD2JLRv(fh\\\"13%OV#,xMceSXDcp|(MEykL6K|DlVYMy59aC^WJwxAQy.Qdd8^&,BUnyV5PbH+,3l.v$y18w3OI5p$jK}BGdp}S3CvIoG}TDsw$}%%0!DHqjuB6=>szD0:L5!!RgWr{NqGW~`{;L!&O*Q6W&K!p[S7pDKj{$T_RyH_J0n^Y%ZY&>LJ;/RCNyxpIj0@\\\"]zR)<gr\\\"R_aQ77\\\"u^<r69tU=_jiqINS]4.X58InpW@NqqV:QCz@^*gL)k9BZQpk[dh((fB$a/,*WJlzTah8A3=h))_SZG&,TBAgFe||lh)=Dw9%!P/zgevrz[]I@m6W&A*:i09N+4s^!GK$Wu=BgbGGU~@zgASczOO~DE!AwTFB:LmYv<GzL@_VT3:~DPSIR`:c.gcI}2385zvmC^elk[],X]FdDUb|Q>~G(y}4OD:j`Okd)3T#|xDu4Zhl~SaNh5/6OWAN$:Dx3UE!z&F/Pz2kz1bB^:^/sydO32lbG4V<=},u,U7N!Qy!h&\\\"Hc61vgd|M3{?aCd#J2)CS~6E50Y7b,?Hh#:TAsw\\\"T:2gs.`v\\\"!oD#T_Y)c}uZn;7I`9j9Sv)V9*XQkcDz$vY[ugoyEn2BWL&)_^/Ncjem#x8r4]$\\\"kw3dyXW%ZGbhcVgu?qenR48v8dJYU\\\"~F0]AI}CB`yT|0)B#oIViSj0Bg+fmQPk>y!74`a[,]Doy9}pBi<j(z$6g<5i\\\"%q}RIyYu)KnpU*Ga`s!j.xwwc>b_~,{7le>nX3,$v}ex,pTcdTGCt_DNUg&#deNVf9?n1.FgC`v#ph?AH$u^QVcU03o.ml>e7w\\\"~iYwDC7@BX=5].{R|.pE;s&;N\\\"g0RI3C&[MJ\\\"}ri5EvmubBsZ!\\\"[|G1)19QSCbHL4F0w8RDz$;@=}j0GIL{W+z]:s}BJZX_?Tq6T?&v>:UbZF,Tna<bUQ4&VF?9e/hP]`uO<fEn>$fl5n,hh%.U`be5hFS2VVXwF%V9|gYLH}Rh~lOD0LnIQh:ot!E<,w>e{W?3{E\\\"Ud7E26^a:x&YPb+wU0rM^3dVIbGj8H)`?+|X9*=/e3*wj+zEF7!c#f5Y)Hiqo_>%V^?%QjWSf1#`O%k>HtNI#O=j9V0~N>X$|bkVEI(Wr#t[.!S}uY^[iajH#6L=`@%yh9RB4aNmjVcO;3>8]O_dz6l1B_4LvLksgmwrw9<R0Djn%CAoW?0n.#yiOKMg7fSi@fPE4X4rH=(eZ1QO1tCW`=vPdt.o(Z#D!h`polbHetx;z:yGaQM~Lvn#h?Hcm10R^$HC|4cQ}|/b)npH^B)=;U_7TXL:wfg:#?M0s+H&r.g:Hi7.{dZ]7UbSLvZ,RDU;Xy2xH2,|o)M^ZAUu<s7P.kK44cu<4F6|qqo@MG3MI~6C*5jI^b)]d:mrBIAC<f!f4/=<3Og0K$YI1?IIcAX6;[q&HW:)&Mq+z@gvzxRbZ(HE;\\\"ZZ&o&Z()}])+jNmz/G0(sZ$8\\\"OoUKYnI!@@*),f4MXrPp%_O:2`yd9H},*?8wNN%sX2{4=./*%Ih9<Q^$x:a>d,c)T=HbtYIjdENhe*^(JC7S6<JNq}WH;Lb02Fn1_~hD1\\\"[:RU)$v?E?_*=+P8`7jev=TLC.[wP`2:KBLH5k{)2Hj7=BO`nT{NBrvqWi1aT/X0#W&nJWuWvaJMLf}B\\\"dx9aX.8)nw,y9OCBp(r+JorgR?*4LbnDfjgR\\\"9LF\\\"]:]flad27A;qA!`p5qx$^88_`*g~P/Qyn)HGo^$wOfVx<dm7315A#2PK1S,8A|WY}oix_ezY|(WOL6\\\"/,^{(Bl5bd9r>yy<_Ow&YpcvN<?)7h)zSsj<qSH\\\"$#AM!%*K{\\\"xjY/CcH>5MFC*V9JStF.Z$)Hb#M{I$b>oz=*/U#zS@[z?:sSIHDQxUs:k?5|h;0KkrU65vycnO?*[_w,Am3BR1bT[a_pLFk~eJ{g4MDWnt~=Lo$.CIZv?F4R!Yej_/V&FB}qbCuwncd0`NG|A.pBbnw|1Q!2pX$_VJmDR<D)vuZ;}\\\"=$8Wh*fk+8I$+{;,G9(e&1%zjy@JlM+k52F`P\\\"eBj$`&Bb${^XryQ$cL9[{SL$3{ws[VTU*GV,n6FkWI3LfR\\\"M=Ai:z:[*4$e[,$Q=_0*1FudZ\\\"Y[\\\"(DGBEZRu+Y$qSBxiQhIlJRdh0dFAsM.[Bd}ZBh_3%b_5913hsb4MU|D$qbT^akAvkr4MLXhdl?o|yl3v)56IiSNz\\\"MyJa|UybxkrX&r;Zq&[n0|l4R~xo:Z;K78X[8b<tnJJp},*aNs%Z@?cCC<d#48b5_H?91gyvg9FWK?Pv9pL([f\\\"!RW#7qM7l|do^EB&<y8R/HNC1HE1/}]~>l<b9~}F[Hc+Cv4TDB%XV_V(pdU$=_5WWe7P.Z%[9S6c#2,\\\"#7)X[kk1wi1I3lPrZuP>0^^R_Z8LxeNMqO#6*Hpr8g)(w471aq!nY6/EKxr5s5AEbWqn21!dgUKR)VzKXNUFANh>}yY*2D`/2+F^mUK|6&!(SVCzqiH~y.Mg3svBGGz@br.ONTpE?^(^vA19GFby5a/[9ePo!ims0HW`s4Y&i@nNlQ,6v4wT?mxt^a<$;R)dK4+8Qa;%~~|2}]{MA=IrCnkj6S_R&j3xM~KZ9Y2cA8{YrwT3ussz}qkQIy\\\"<xrmVF*]cbx=(`NeMF?Tg(Z}o&>k!]@81Q[KG>0f,m_jLWsN#HBOW)%D^]L_hs_205<0z9ckH|kQsuSqS9)WK5e(CTz,XfPc.9/S_nY#JEXdI>`f@f*h*_lrs~f5}:x%N(]A6<t_@~!&afpj3#14~hHNO}ctE9`n_YMjgYS!N(LXuODO<\\\"nz,(f|5PM0I&CgNcI)bZw7o~5dc4v{qZM4NGE^RvbUt~iK5~Ay2&Dq`DJPHoEK*F#G\\\"kbI=8cF_Nu5L+iLsbv|(X0]=)3mDA*^A3s$/z+SIVfz{<I$k#nBA>[BK}=PULkqKX\\\"4L(B`gxNm=@#PzsS|8#fbGLsW%#srKfO&/9(*n#W)|Q0krNw4h2gy15cgjo&ph@!;):mA9bKjZg,U/4y\\\"mTU?*x0X9ouvY_W5/U&R,;#Hx@9=B&u6<5ohWc/ae!wfy$2pcl|F?@%s$yW?_A3r11$lo3.&g!C36Vo~|z[L3Oi$/L|5e]|&7CfDN?h!k1okfLXtzkiG$Fk8%NdO9!7H4D!K{6PUs4bmA6n>|6okIO.)k+*nf=C{P,Q?/enEp#F3dm56uR=&IL@2;>X}`GV]!9T(X*MQm}:T.y&`JTXo)DqEBOL062~AuFZ/AZJSn6nVVc9Q|&q=D%{WXIUWUTwl1Uq&OA?~>Gb~<CJ_oiRrKa%*H{Kh}Jqr%~hjx]c0cW8kgKOZ.:oaBV9zHHnh_J3?dZIU20fvY:EHy)jaMT8/Z\\\"Uowm#.zVaM(c;L8y<\\\"tlh^$^]xgxsFxP?rIm^I.R?*]k;K3oLa4ES?hHO9|tE3w_lG*MvfI\\\"(\\\"yoyJ&\\\"ZO6S54=06/+8b@A|U`ZFy/*b\\\"+K2Uv<nA$+fP?qFsK)R;+z*|k/lhUn.lO7ItQaF*ngKO3QK)P7cWerEq8I**ztDptFI*zm!?%`+pzxjn+Yu,Nx;N1O>F*%;o0{CzdpX,(2@5<A*9gAopWS5V4xW2sYS]kh5;j2S*m2Ro>=p3</cF%\\\"1<I#aqjv3$UaHS*.wD;|:ls:e&ym\\\">J}1ATGf>[K^s.a~yOei#*4=vUq$@6=G#f0kO^/vx1~x~eb],>1p6YOKTNJaGfxxHko!z&WC49`Hr|gJ[p>x.XcEFA`72pD$+uKU(_:4$;x)5Skfv{jyYU7`^O+0m.vwnTZI3+LX1pb0c#I1fGH!8^wf+.$g2|=72{U.uY\\\"M_Sn~*Iu791yNTb%gsd.PuLhy4L1(+YZ?khh_?n%ID:IA4Y$&n:oG^)6ZG.+w^2)c3KdV/wS/SyAZ~|36I7_@TRp_xJRYm6%R9>jN2OoN/em/i~4)0*OM4s`gV%)=reaRlcPB_0[N^dhYoP~P(@,fS@aDC)?]^B=TjwyF,{[rbq;0pF2TlDR^3boQFe[X|GWcD#s$5q5]*h1?#`gH=DUJInwuO,hA=lHJ:Dn%iZe]!=jsSFJf|_P+niI9ofEVy?q>y4g6&42nM)Uh.f/IRd9((sjzAB=Ysi6MzXzUqg7$?:b8nfiRAz)$!TZ]giV)y(oH`PXoa.[IpFp~(bIaRr{rmdvC3q+MDY#(2QUPt&_7@i|3;30pTk>0>!!Lqh^3MrUm3w!+l6h,E@aH8.:>Gq@z8;)`YCcgf?~K1IQem$*X\\\"YC?JKtg#80qw*TP.m|Br/X{{=uO9P!ID2hVIWzQkN0HUJEx&C\\\"boYOYOyzW7Zk4h@q?pc/G*V(\\\"82:LC>v:(;x*/`>=ggv1BX<%py)|mi0Vz^!w#}hZ$5Nq>kd5JmGKLb3zu:P26RVuYVTAu@(zt|Jk69;8?rDY7]4WxS;nI@{<:JSv0F,M3C4&H%8*t&npcZU6[SXFw;R+7#O{KqqqbRkU1?+:_myl+QYo5JZ59&!)9t&QhW@Q(K.GNu*&Rqh4b;/2;Gox1+}ctiUFqAhju5]%b{Ul<9*JuKVM?BRmtQ**DRyM!.gp0E:M=5@7c(8\\\"71sgEFa(<hSd0i71[{NNsR0^t4<$4TK55BN`g14fvq}0#wD0XhEz%S~A>`C&~A&@WWR;7:axy[jip`kC%?pU4vbjawBHhzYLG*A`iJx.h38h/`stZ5LM!7kG<rP$QX::&R|}1R#.g(Ia=c>%]n/mMVGNyg65#FSUYO`eUlOK![%}}EQy2HP;)PvOdVQ.F(h>QWF#c=t0t?Dit}\\\"wosfn?]hd?pA/4$)FjIj|)YWZh24=5sKnoY|):..e5sd;PKRUcn:yZ]@PRz{<0x@wq2=v:>t4[\\\"3&UQ?Am)^QXbJAlyE#>Vx~^Z.>2}(sERNm)O2Mcbf+tff|Ez`eoD#>2^rNuN&&|#em&*SZ9D}07@V4q;I_iOT03*Gi+,Qs>2pLGI<3Wz[8iI_KJe[qk}isz*i1&478>xLnaPknue~P<E>L[fHTm5+(YpC$hsZ|uD5Bz>niNW%2T;TnIvvy;XEeVI+2RgugwGzK]o_BY8lJzs/PN[KgSYj6*1npGc_]nGfXZ7H}.d|9;A]+bd7Qb+8V7L(D<eE)dN>9YZk{PNAsuy3=fL~3*j1K&qV$.9H@pZR,~4,sl7Kt$KI?k`c)Zl]]JfdH!4xw`uRA0)>+Tm4T[[`\\\"y9?ljVrb@@Lm<d8gMIE;v=u9&!g})AsCAZn.lKlT,4,2;wc~|g?4h3Jm!+ez3f^:Z[In_9V|#eVFGQwl`CPb1?fl{+=kxw$K346A)vRA1mlG7.6wK#^!^rljE$nsJe9z;5)9G8{Z047a~bI&dc!i8Ow;7I)]`[.~9CH(XK{k4?.E7.@ke:<34+K4(GC2,oS}Hi7_O`nH>bWu#_VlGYpT(`}iLg~]p8)bpo*:{?Uq3wJ%eFh#*7Q{IQ<K8F}:a%zf0R:rjk}5K#jyxZ^liC;E[OM#u>L+N<3aJs$|)E<U(fvC.:T[6~Tf>pI??&p]=h%X6B%9>ml)tH(XocJMJIfizlfzqqWo~UmTFF;2m>Kq4~:=I(fx00_(s(Y(~.U[s8Iun]f@yB{u0Q@c^HcK!>!Hx\\\"jd\\\"geNz4DbxI:dHi,M5{{Q1<(kW8hdqR>}ln1IbP^n$9y%NgU2Jh/sc,~P.5#i92oWp}9?jaS_yun?Gc/j)O9!>|u:?X|O).O}zcTk;8F@(Mz_d_4/v@fl!P.PS[sL)z_mD`}`zfSZN%XLK;^tL*,7XaSic^#_)\\\"xgT!&h>4oB]1rRao\\\"pXiK!6?hGpuN(pUiVvaG,Uxi:8_ai%l`d$!V8JTPA,;?*{~a()2tKp_OiG.YBRD1]/B4&3>d.bv*9w!f(:8PQk%!1NOH(Foy`xz$)a|0BZbv9((1\\\"UsIfhF<9VFCb\\\"lgZ2]!pwoHH/yca2M*|y1bG55&fq6nD6yvzY9,[hm6YaXJc{9v({0BTR|ij?$K>ehkp:[!a>hIk\\\"gu26}%w9T+esgj{*#p!%}FUanPiQ[}bHwYEl\\\"#CNmhlWbm{kf6`/6|R0=]_SHHRgm|#<UbGy$nT}EC1#Q5?x4YSYW.q5Ssjmy>awj[Q{qBsyg$a&U57vWQg5<2$Ve|B$ea*VI_,\\\"ydk2/Y5Dzp&O/HH!j@Pq]q;iC*sK?yT`Zf>WU&M<npu^C>&b&/M,{VaU6#Nis]c@GuuR#T)5p?G@3FT@O<_Nf~}29uxADgVzQpq3~JR#Uo$1OXQ{T1?m9:W`kU+Jr4,k*K^N1_2_sKur^oZH.{o;NjSmbC\\\">S!_7R@,e${vg4#e?gea3~1`g7H)=0IYt+I:!j=~xiP$_&zq|s~+k+?0)sBWFjiCq_vWEvz[]{I%>cpMc#{pux=wE;dXM6dG>+cTp3=x|L_2NRrc%Z%Ik|)Hu8aT%:h|zPfN1h%)n+=QVk+Df3o/wO}Sd;sJpzK>uxZB9*|,/>l#6a.:d03AoDlyy^^*GBFBLf<&G,Zu6w)S~~ZbO;%q+UK|#h*)=9Wiv4(jxjScuEcAz^0Od#wpfED10\\\"beC5j`EZL$*PCo^Yoa]ipP4C5z0VD08yLP\\\"G@ex2zDS&<Hi!J@_u|zPX%:/U@g[*GjJBIJQuE+DW(%M:J/I7%1,az*]kq(v=jxCW*}/u)*]n#4_ZW/bGcPUX8Vbv&Qr,UH`BwGwO3suHj@ujzpVZj+@v1=_|sLZUPf=%VV;8jxhL+qmSDKnG]}26@S[j[y3^j]^EJ0ZMNh2NTZVh~a=b;Ow|B*JL9l=5}*BF>n^1H)K&8p1{q6u|z4=i1PY.7y!cllei`lN3.d|(P{JhlGe|LFjm26K.W4WT[E$W4y>zSsF`3n){]m6;UD&*uFUI3c*IV0)i6<3u4{!6^[cfS>n&~McMlRyz]!^E#^BLws.R5sk_JK:sp7+&zl%GEFxBh$,&D4`rRrE9X?wGx|WWtAuPu$m2w0/T4jV&{TQbf$,x>!Q?8v!P9Zz.$0bRIAH~qzn<\\\"0k3$RNxeY*;};ITk/V[4Q\\\"K`&Dg#V2MAL7zBc/[@dK?mGNoS{_173#Y72q[&v~Mku2gQ0>!9>u?$\\\"%#+nvy.\\\"mO_QK>!CE+mydp.8sPey)+0F_S)_<+48i#MfeCj4jb3Cyk];FnOEYumzXa+jY.bbgN|j4;e,^Q#\\\"%urV]#OnRy{1{]Ntm6a!zl.#%`_YnaGaX4lEJ%&\\\"ne.w@!Tix6~VFk,VqiPN0sfZy{.4=JPj)4hF=I#)3V(:MfAF8;{j/JR9+Q_]Iuq3H1C=mcC3Lb4q[m=a5J5++ZGG7A26H/C#*I?DYvvYlUJlC6xm=@%jLR1&o\\\"h?uo2YUY0z]J12q*WvCI5bT&MKT9Bj:J@o!B4{(Tdmj=mOj,9zMHO3^`ST^H#w`.|{dL5OPM~QKIc0|d4*C0.b_k18xyUQeFB)i0r~?!YGQ4!0{ofvE~.9:8#K2TeJsAo{|LZK<Z.H}rF>;*?k^wKo}^usdh+%*#p*=V3HrKrCS=mCv|6?*t2nu@D+zHdwlR+j@/OK;At4c_<vB^y#tVp4{Ivg={l*4bL5ny}>eJ7vvdM<1jy)pDniCh!sU>7&hFN:Zs3G3spt(Sa5,p^_pFRuw0,;3}}s(1gfNY_]=I(^f_.n}n|{15sep?;A$1DZDf~BM#fYskWZPAji}a7m@a~]EyC3@=}]!Fk!F=mKtFo;x_BlyMq4o^!~Y2\\\"~OLBkCUUX_=B{&%/(E(UST(vz5Qby!d@9kq.{h<~y2$UF^ykQw++O[s0)|.pF#.6%m1f]`?Ipp\\\"Xc.f1$G|IA@u/Pym(Vb8H<6GEEa4:??Lj=L2}z,1:.\\\"RvX?|z27cU@{q#@njdRQKH!sx865*6cLN9wc9R,<@0d+$2NVB)Ct?_w{}ObMM8fcHnc)nIn(nku@6&{MMU(]Mymp.c>!4%,!BdmD.9vi|~]3k0n][$8Px%@l*`L`VDQWoo/{yWM5Cm(oF`JHM_z$GuIN9AI;o,IJZ.Lq1le&=0zklR;J^u;x<Aid>X65jtq~(/QC*^NVJ^MjD)Eu}9Z*uF.cCo`CI;`Nc5=yp+SeM(q*9iK_w\\\"W}#O#a6cm#v=B%r|E,5H43)PZ`^C![~]6(GOU1^W;NU`;z!WJKC%7KuT;j4?MCPC(ZN[.gB6\\\"a2vQz{!`J>uC8m@ifJmR:ds,EEC%=[H5Z#,CkV\\\"M0O]kP^;_Qz]lpek=FbOC\\\"@M#sMjn{~T~Lkn<X=+|rdR@9oLYpKMK/uqZfaXiC&Ka5s#7XH}bz_YeF/yhk}M%}yVuq*LgeYg!Q;:+BZd2?s4PObfaALaGTIf5dQnI04k4:UQCiWi.wMM+Gx@t%#;><Q?7(\\\"zbCE`=W[D;RKbn;@,w9sZ@g4S):ss)vapK35+v&E(`;Jio2wO3?z?y|fOaI^!h=nwzIj)\\\"HFASo*K6we,&s14/jTyMmWddemZf8ih?#TnopE*YE&QC[,m8y}+vra+o~U2{Sh0&QD.H_9Y\\\"rBtXc6<pxxuW*q<%]`}H:=Sjo=5UK9flOIq9rIMSnT94HL@p!}*Kgj?bDhk~c{1mI1{K:)5$[!#},*pMh&(<vw[;`Q,f&TiT*_R&y?RI=/ABPzvA/{5\\\"G3HXD&HsMUTzz)~7*.(EiO#P@m!Kx_+ELk5yKq]+#uc#nJgSgb9Si*,o|%GZ16dVK`E{Na0j6hZWZ/oWIXKgoqn}t4RV&={T^v*M$e/L5&tx;^_%RJ}(M>h9+SDhWpm%~+h\\\"cC=G}2XbtEMMSC$xnd?W<}V!DWz,GfHL>d%z9*NX5vm[m@W:#Z{{w@rqDDjhy>#&Gx`U@:.#&^<+u<?nq4QKF1_Adp@D:y{mTQ%l.<V2G.ROs(dfyk4x4Cr!mK!Xo(hsW<B\\\">AjS*$7=m+kOd\\\"4%Hm*#.DefoK\\\"#5%$6I+WH?ig9f0,1Y%{?[PvW9|AE0:iI:|vAoV9VYD;fO.#e#U$&Z;=|`6uiKdZ^(k1+(SSD(JWIvSiM7{PxdSP7HooDzoru*hYk.kl|FBS2F!2Y#\\\"oNr^rf)W;u}(bRO0l$d_+ZfO%G_53L:os/W+[!.,j`f)87a7/B*(3MNsrit[xRpeI)]b4*Hp_|yT)[z$B2Qa}\\\"3}^aghu).s\\\"xG6J\\\"Ap0JQrk^nf6,um8?_prE8|u9j0:`mA3jCqg1D&jq\\\">^I`:J@}2cV_F)Ey}%^#u&hNn^q)UHkgxj|VJP\\\"j3lVcE\\\")44He(]Xd*)2YPvR2@\\\"H{$Qcg!YCx5/KB~n\\\"g:a[9TI*.vH/U_OClw9HY)W:@vX1W`OpIX(|UITK7q/hWJ!,4&%t9o[pDW7UgZ)Tf#.\\\"k5osGvHR+D+P$\\\"At2I[$c[qRsPtHwfh6h@)<)1\\\"dO8fp+J9r?Lmb[lg@[X*BuY@.}vHv&Vxi^e7N%L:V>qTBUL8(wdia\\\"B;LI?,NJ^4o+)xQot^z>sL(SF=pV%:u&q_O~d}{qvnNbsdl#!V%6a4V_/V)/4s8,zFii7n{peby%>x4BJ(v<n]l;?=LwrME#2kG9I}&I;<U(\\\"8{E!buNw<9aZua!%2xzLAHdFyKw;noAwX0S9>]5HW)INinsh[,{y5Gi#C1[v8!Nk`/v<V70,%yE&LiNxhzX\\\"%;00I]9duv?Fdl`hZRvN>kAr35m3n+Oy0wtRH~~#1Dz0cQ5T`54ZdQ4{Bbgj()E?Q@bpP^u%8VZBJ.n36UNi`9PAHD?wGU.{nLiASk3,[bAFjBeY>\\\"R^;%lI1WN+GhrT&ha\\\"_r[riDZGUxyAu#,`K6mQ%mI3:2N(FWvi`^pih&,s*K}{x*vf*<JT*T7<RO_k~3sOPT6Pb1iH[Rvq\\\"rLyp@nA<y&H:`6#JPOmWQL?7CTdiP*m:ESNZFwRI>!(*&g}3/|r^gDg=,qxWT(e=s*[Lx|LllW,jH1b5ZQ[1o(wMcCpC8`y{gCrj8PWb_VE,rW*[n8l?+k|SJv))Z7k_Lu`%XFV^M!qn+Tfcmx@EPufN!i?gUk`V.q6T{pu#fop~w>fdd.*Vgb+(ML=!ZBNPW,e~9g9a+S~Y]EDG=s$/&j3`A;sohg;eZ^yGA#7SrpXe)y(ozgkDY%j&@/P4UnqytC_0`_X=j{?*V%~aT|bC]0~lOGP7U#9c5q0+0VkvS~Fc4j&V&GiQyv31!l\\\"y`!EBcq)\\\"mbp~;Ki}@DmbK~i,;l&m*6e!5lKK$W@<lPSB$s*mRb]kwH8o&v#AvZG(nvsdz%Su$ih/KZ`[n[).T{iu<)_iN/w;^0cdF1s>(/_0C=>qj+XzK_w\\\"(0r%*U`qAiT:)J=dy);;NB|16.bUvcY%A=_2!ZPXXN]k^fj?6Y2^x.)4pDv{W;69K}hwD6n#:$%s4[piT=#A9m.k%jX^;|m@N?\\\"s*LH?j7|0wlQ(JFF6ADE$T{DBtFiT}c>|[2Aw{%13IbzpH&3Kb}>$+`C>V;h@=w&Lch0u#l\\\"281{Afw$o,xIRyK0`DcF.Lvg&}A>X!ko}*jpVaKX4H_kvgI;2.pnXnF8:C^%@+ar>Q3!`>Z#[P@mQWW]>0IQVJO%W_34|i(/kuTyHi:P?vO/bh>YS_Q#LyIV|^Kh{2wLTF+/Y=}cms`LUI|zuC/WQ+T#AgtMiBN|Y<R:(G.p~u=cXIEvWQgF{To<+t)1LFEg~Gq[<[Ejl7P#F]hfz@ui>t},iQ)S1qCpy|agd!5h8D%\\\"va|7/eXsar^qBkk,joWQ|{FuQ3u[(}]LI[+aX.M7+#>TX\\\"Jx[%bOW~R=!_O=[Zu4>Q_Eu.E~>SQO|{mxV$H8p\\\"#G?A<Nq^rxKj.rwn4+wMztZVx30yX#bY2~3NgAO#zbbgrD\\\"N<(VZurOo7eI+3LmaD2|ev!&dmZ8iz@xGopa>Ly}n%%2[]B|g?O!KBg:m{:=%)e7l?IX\\\"@N(D=$_Ej}f)UXH*q_$x?46Fbtqz`!Jl3O?F[`~9h60_|Qk=Rw$gg?_x]`&_QCh1S.\\\"Xl0j8Y~9)3z3=\\\"zAhGt?UdK\\\"!SsTDW%%XB8:p^2<6|0Vz7h|!p<CmUZ;Co8~:rr{:0vYof5,8iMxUl&$%!gwDkc/0lzY#2a{UD3q@:!7+U4P{7MX6cI8ojoGuL$2&,cHd27h``_48k5MepZvyuc&Q80q|C}1r5/v1?D;j^3#ia^n92b${E/&>BKsrzo/!PZ`SP3RcBkAQ(RuV7Nhd??O%rhM~Ni=AVrbayBG^x0y8=6<z~y(<iycsGVU,\\\"E(r;lOqn6P:gW{k4NQDLW])q:cO04<txU.0*q($u%Y.~Z2`Zvv[<M|tK%XKcSKF\\\"^cS_Oz%>pS,BBz|^5CSG]]G5B*@};wp(YR@2X[]CP`K~H!88+X#8rz]yJxk`2a![![x\\\"w1<oiE}m9u~vO]?,(Q(xRK(ERJP#kv%:F$FgjW{/iG#e0XMa&bCZug0ve7P5kgG41~v;>%_ei\\\"5KnHN1HJ}bJ`[xvs;MFFh?NLN)kPRv}&Tqu=<hNSrNYOP.=1k{Ho3=ufi*pfQ[)`a=J63Iqj;zT!#P,1Xqgr&H+{O|y|$0PMkf>o9Q[;C9/Q\\\"?#1Sc3@bg?H:d>,rBiw[pZ&ZmrKQ]hP:C>pUq@\\\"3{Me=/u1KM*+4wBrex>]8Ce+gy!Q?9XWAaS5o{BW:pP}9F]Y?4Sa]DCb_/@Z~kJ/g*$\\\"u(ssRQJEX<LW1[f^qP;$n3gh$Qa~gItHD(7DL~8;J+lcR78VY:gi}r42n87I{n<o8`y,`kCcCQtX[hp#f=.>~]~TuS]4~#|F0i(e^cC|LetPDi`~.m;N^8Mk!!BV;`rhFBk<Z1JUV^=}{Y\\\"j\\\"^i2k|iNP!s/{:x!$T,C!.x_+=(\\\"HsAyH_`FwX,zQGDtQe!QQmu1vNjK{,jz$XL(C0WJXbm3()7;I?E`[JSpge1;M]JqJ6<C{Poi=Ntaqfy$HhGiGkVVvK_*{Y]_29CSKDTVmHh<*6qR:(dEV;hE[[)vEcIz!peugV}j`ptr#,\\\"$?+W4P!QH1lawrDJ|x@cl$~3RM6Hh/9}^0,l?GE_}8h/FwsX~uM.`DO&*ZJa^gzoJ}kKpsQDNwq0ys:kG|V|&v,Pv#.{nws0BxOt,[NIc1YC*U/d\\\"+JgzLooQx%DQ:T<iZT.Gmc?g(LWX,TpZmE(Gcd6j2dv!`>H%H;F+imLSinr1ISQs$XN1ZxJepvK%eHzbW%~GUza&e5>`QN&~o30orn|N`,8[bOU/6UC[}!$YtH]bUX42&i*5L_f2`omV*G~*50)3gVzv,q2n/*k\\\"+<t#ZvJ6cY[v1!KoRCpsnD=L_mFIQknnhR8s{EoT7qg/:;{?t9rBuH9l#q8i6$Ul+\\\"ASsO}DHXSV|^v^czE)|&yMF9qSxLSZbG#q#L?])(I3H\\\"NvXL}7f1w#Rt1K](:YHMvF`mJ.@kz^[=;d{H$m=\\\"(CRjGj,ND{s(v%0$ki^(9v)K:Jf~2$a,=YG@~m!^z+8!koUu(Bi2eNfF]R6{F|DM):K</|^H\\\"u!bx;=9*?hixQ;4JOI)m;:b7)bZ<2Uw[,U.OU?/8IdlvpMqTat<creKq>.$H_;!(mP=/^r=>Mw+xKn?c|(1YK@8a1[mQ|=z,J\\\"J*D!{!6*fII|x0sVRv&4S6Ye4OV8((;}x.vF]Z9&35y#C#e8SHp2l&_TFK/+|.,:.6#EkdSNit^Giz]>.b_+p}0p~iGxNsv+n#pIvRW6bprMod?2h8WgK:`mgg!YqP.&B$N;{DU9&IxbyURS67o?dX##%RILha+8a!wa&;e79V|d;&Y[?aQ0$s4DE+[UZum1nP\\\"]e({89OSI2]T=6*$rin%n@j}NrFLJnYZ!dwh=HT70b>]E]5=az%o9XDc:JQH+Hg%M5V@hb{_0Nn&URI3eD5gGLO&nl!WyHd`baGzMtEUgKXcYqR;U]Zg}H[|o5Q$(@P=N4t>o*jGIabI,9_)u4e,HXnYPNs7jBZU8QHRIRVq{6kQ@uP0b@gymXAONZUZMTmkoR7t*n4,qmj25LWe8]XU(kM>_A_xnc*)F*dN0\\\"+LTdv9+lrFv]kLUe.|bPEODkPlfY[$.v`3!>I4&4}ij}pM;Z[t_G9%=2]lB5sD(WX+;,7kwpG(gQxR}rbu~Erl/i([H<$T@es]#jqY${[vvNN[l0OU^k;Q<;.d;|WO`)owb`7@djR`d{W4JsZy%@,/)[+fZ;=0,\\\"PyOO3.rK%GYd?#k0HeuU$n\\\"J_3U4`}?!\\\"Hd/Oss7QaUJNi`i<*^~lrZ,lNdi}f#USD,+zk`=)AR`nhi+$g%)TAEsv\\\"P%DqFo~%ejuuFM]kpFt`{yB%mh.Z[_w#L}6C2,\\\"WE&(r8jk;D5G]MX]p+A[$EV^px(ZG<{+~5h$?Ps$[u)8}w+*2FssuJYOb%.x|c6T=R*!i_0K?e@eenP(KfT0YgL\\\"L`jaz6X3%w).gsU1*Em>|kA10G4!Q|Y{pkC7}m47jECBonet`],A5O:Y!5F.U9(.GV.5R]H~*a@9i_ixQw`!L!$b7pi0hHJL+@0.xj26NQxS`CF{=^=,Dn#o4&BJatRz)2?j\\\"U&y725Tg!J3lP+08%8%!4bPo=7Q$zg2Rp*)<`)HHPARqWm1{v`:{Q0RfUNiR~(u@Ba#QJLU5Q.{\\\"D3%=euFq~(=p\\\"%YlM\\\";u)c^BUYc3V!8F9(V~+w&>YfVNKMc1v}m%P`?Y,$VHY5^R@zkiG2uV?{]C5nzMOzmQr)0|(;YCd3Iu7@><+aw&_o^mDRJdkQtE*^6h|TNkY>\\\"p8kTKlHTFH#dhN<m=!qqWo7Px46wWC3KPZna#lLX]{Q54!_*e(2IT5z/ZOo!saj@1ysY(~qOn8I4z!j,Z6GT5{C7]skcXv2QwG~jF3HOS@f$!IJCBE2eu]+Qf#`pZti(UsHp/SE^1v9rb}FP&Zfa*ClKn}$[BCV>`w3Ea@ir:OXKEZ0uY4!h|a#hu$w*~o]Ta;8cj~mN|N$A~zt/<hkR%l\\\"@VZ7I*@!og|Crlvg5;63G02FzU8+Y>md0Uf\\\"852p?IZ}tpmEl1Ef+tvh<m>7M15?mAVjGM_dn(>eq{a`Jgt}Btv]%GQaPWb<#;XFXE,:RS,J`Aw{+O%kg+tlW!~u7EW!Xl]]q)l7j|.Q]C|:)%.Q{jPevt16]p/rE;n.p,`Qb#J#MMdS3T})4B:j7kJxIkJ]JEne;#Tc.5$iiAh?RND!.q?B8ryL&FY%B\\\"|5J(~1{bnvJo_MZG[h}Mf2b^MMm@5gu0#]|UbY/I3r!gWRuju)r@s:{7k\\\"G9\\\"V&[z:pr9(cZ7YKZugWJyX`.z7b!}f$I4i*Q!#>PWyC[UGB~\\\"l,~o%6/g8t.{gXV9$XEW<%BroR`vXDx@Co8:!(vKcx()ox=`*j{g.Ymk$6W=5iQV6*;_A:O2^S@,Y_yyKIjtJ1z_~z4I5K7V0>/~20Sqy+4d4:`K,{Go<!l0vco;pA(KkzHGTE_25k_]ChS&udiXs.oY[UM?GJhVyf>@jvY{2#?>8L:&V730C.sN|7.az55=j<V~*@Za:[2$QtPP7&xS91~Kb%JzDn3W1Lfekpzkzx6,A|RrF]GbTdHH+\\\"%^`,G(s<PQN>r55}z<p1S:x^~^)k+(M_a5/(6iNjn#@8H.Df}l..K:Hq{NCztk.??8mMpdi0Hea?E>5p0(Ra{>?>Oe\\\".B7\\\"TiTsoKX)9R(,n}HqFG4|$?ad70B]37A&Jel[t%Tuk>=l,Jt.B!qf+}}ywh2C:`pQ;[Ek*AP[V\\\"cU+ZgczPxrJJk=2>,oDzhO;Ad#5dowvwQy<bi:~/!Ggy0/Jo|pkV2:[zJ(J.XFC4JO`|b[Q.oSOv$G{r.4vyS~9(zrI}OV0V1%|Yvswa0@XEt!33eQ`8*J:kPzqC0i6ijRm/qy$jgOnpD_UoX%#/u*q%>B^C<#q.Z,n=hcV[K;e4J:~5HLNwcLl%7NJKtlXHo*%iXNin[:fE\\\"P?s8;1*|i`!=kz:g5c/B=P)6\\\"l!oYeQd(Fk}2t6C/Tz.kPb1txfU)a6_O~}w3#{vRK6tk@j[yP?i{5rB0IR#XCaBnb/T4(D]#.?/I1nFAmZ!:\\\"#};<T,7_[Ixw*3!(k4g1E9o:Hrju#=qsb=}EixOZ_#=<W;(JuFYsc`kY$3de11QGZI*tpF5=P<HDx7:DWhT)_5lVj[C%h7S]xLAt6.#gah}L1,C%urbY=b#=8Wy=iRJe6`Jud4z]N\\\":vwv_,R&g5O=Jaf1E$PA9XjZU6ONVl%:e&1\\\"|GS}lr:N)~RS0:aE8/XJhXzdLIo){an>_={S&$K0!>L?q4v9#{)!HpWHo;w|lYT,.iDEw\\\"LsnyKVI!y<b916MIJGelLUdBtX?!khp*h*\\\"V(]T02+hW`w!|1RzfUeOyOozWpMy3Pix0Iaw<%URsZt+zmsm(^GC!nG/Z4~kikPU|JRoIinK%8.44C^3JvSN~V_ZkXb5~IdDlcP7*JG)UiG~*Qu%h<H8[?!?06vcGdSZ3s/rNB08U&z_jlg#QfoGc,Oim5Mb*MSLy;N>czA@@_y>mlOZ?B>Vt{=yc_fUi&;{o.C,Ho]ugIA\\\"L|kAs{ldjlT|6=S@Gae:l+o\\\"Uu(~v;oJ1tu6}Ma7VUKPvlVA`i:v7puEceqU4Uv_.o4.@U)NKPlQGbnOE0&/}E^fu]P[BJXo)y[GL/lOR{T#@Z`zBUsNcT3QFTt)c{acB_^5EA$(eTGcbw(X|.dn/|uJ!,L\\\"?D:Oe+u{o1Mx6k7:tkz>ee;;SgI5oC&cjxXZ!]`vOd)#>52a3G6VXQgiJ,QjbiLvH=%:Zz&#d7}89?hULwoX~ju1?2w=b\\\"_1!m|e}=Kl{\\\"=lkJ)B&i:8cV/l74G0i]4:0iAoPU<|{9CRnH_/nYr;+2,2`q(/+BP`DF,~yRDA$XB6CI[Ma/31)WEy;*&ESTep}}bzn4=AvQ6T^34C|m#Ye~fv|t1(CuXT74N5$T*Z;=HxCM_{]0ij>]2^e\\\"L!e]+Q$Saq_q_yV7;qxUct@:N2:UTa{>\\\"iBKl9I8vD/bm(s|c$^0F0lL)UKDA<Y&*F:7d4AHnMEpSs*d/s~=bT?epw#p%CiiyCGjC~#=L>4@j_AtY%JghUIcwCeY}l|B{L\\\"@/*j=UmU{5}]C6zf^8L5|:9(mk!KlYopx;`12]qmHDj@\\\"6mV$q=WxJe2%|MBHF*;bN$=?G(CN:7GfXvn35E;+RA*us?p>ITGJCfTkh:gGV8r^e._!6cEpCG({~FRA\\\"rgopt)ayec`.%$Lz~7[,MI7wdO&Jl1k9A?C9]wQCRnK1O{\\\"bp%Q6pf:{7~Yu_!1UZ\\\"4%wWN|NKBb1Odk8zD4ss8&u^2TCOCd>to^QT^=TeVAYV[G5ES)7%SC#VW?+o@$)}=DnsH\\\"{9u1d|}4=dRP;`6Q]j.~BoceY+x)aI:Ao|/}2^|$j@!s@|#?m8Kogfu1B`!);*~t*F:XV>B61T/PL=LBejYe@6A^={,.gt,%_KF;@;;~$veq,m4XhRBEfzf\\\"IG?~s*VQ<\\\"/YXv2{]UsJ@Si`a]$x||}+u/7Z~&XR.d$B!G`X5A94o+!76T,vNP4PNc$>+G/RG_uc!#$}Tzz2/Ofc+pYU]g)j4#gqi^tXD(W[a{b7O7dSPd}:HUgA,C^,Ism0$@p$/]CFFG}EQe{l+=~{[|bWCyls;`c\\\"}:pkg=hp\\\"]ye<Xbr(AG0qo74LmJoFVK8Lnq)~I@B/7lU/Jb?>V6g4Sk,AJV1gTq20\\\"xm!Mhj/X05YFRp#Cu*!O+FR7wBfB,=|^V+wsS6%D,cTU9iQi=!`9;`hYxYvp~sKZOkb`uXAZ$((4ZNifghUbdu}mfM+d:+X:]_z<R0~`W+q@GD~u#\\\"e<q=qTi5zT**`ja0`32{g}z;)#Y^G4Xd.MC`Lsim[YhB^mUyL<#Kz|M%@_3}>@c_}b2X>xNOt`:z69~(dJmRWE:KTxOq?m)s`6wzvPwls#.WeDc_(4I)X6LFulVafUe.Tu{TSIe$udU&iB6t9DKrjb8ZXSs+7^kI~<=>mX`g<vqox7y0uB;(}OO;Zs#`p8>.dX79\\\"e_X<yJ|Z>$wLfwS6avtT4Yn2,!ngWnv2(0_FP:DS_U1EWoBM,$6FkU#{jN,EXLNfr&=eYy!L}=|.F||lb+{OXLK~&o2C8\\\"?/DVi&}Nkb8_:K9FZ2azu}^]=88X)XO(Z6thxxOmi~|}j}>$:P;U)4W.rkP]?lx?MV{[.#U:(6OowDA1V$$:J,bKa#O*e8W;LlacL&W]wYOCZ11>*1.rmFCtd8pN@)e,<\\\"DmD6%fP+reK&/z/PXWi1<q>EttxOGky=wa},K~a&cZWM01ehkmjI(3X6jzi*rx:%>p*&NE;Ud:S*)|[56/X#.GY:0Z#=E7+|0}=agj0Z|9MqgiwsqoU3KuUZbuo%/n?bWk,[@6{.$14A&qAWbhue]f#L55%0K*z*UxBm_G5<(p\\\"94^W%0\\\"o&zhKy6u3psC3UHk`ch9`$F<bNTQ^=c%d:@/`tcSFW#,.Cr?fmzU|@p{;0KDiPdg~M>I9!SpJb}G;Eot?6t3J]<%[[L2I[DE6#Y&tiy4:W)(\\\"}Bf<:/Faj&v?$B.YyOZ`}BcbQYE,4~5em:^4}oL9$IF+v1#GoG/ry,@_4*f=CHRR3h]IDUw|YVjDRTRv<.|;pSSty>g_8[XBRp\\\"Z.|{+$b#!**?9[Bnzx>YHOT6{:NLL~3o<)VXp}#1]}r)c,LxS~Q*OS[\\\"8Bf)y4jflgj>^6M5BS3FGp.JJjv+:I57(1:tGP??n2L&6#2#Pt9XeG$O/\\\"dW.2AaCw]@7_dg?bL9]y`<r=uI,OsFW&4hCDx;2[r326VmJ!wL=q<b=4RGDdlu@aGFx<$|.#6VkXM>HVx;{X5ZURi*8G!nK8jEZJ*M=T$2H6^Y*18=$&l&Ipn^EZvN|7x[PA8YqMx|&1)LZHe_rAmJmyE=l8.CY{sA$LGJwo}pi|C=cQG&gonH7bA\\\"t#cP.~hg\\\"wSeusIe4PZEe8<0:{d&J$*1Pq3:GNDA_!+wA^Yoily#!t/9hG,=w!(PoK[J{TJPk|^5/D=!!?;Y1\\\"E*eSu+b?al;51xEcW+DYF>~D.L#z]_0|<)JN}4cbsH4v>IKHVo`efq:`[OF7Xa|f+86*NuwKse(^P&z|W8@*#nQ:S1MR4oYoa*s.d,kac?iFe|NZ5zbT<uxX>oAv4E=YF^g#x~5cpUTjje]3KAj6T+nn5nqtAdjnfnUjlflAnvT.47y)p:[VW3L@RkqS0r%%*S28X@#23J~Mu,dA7/N4@>BK|)W],L);:h{zpQ)BliAo3B8\\\"=%PbOm+u6AaT~|x^/j{S2Arv_,8MMq4?|}/12gtRo#az5)E=*zado[MFj/fU=j*j=~KdEe8iGb``pI?y/aP<,=%D~(X@L:]Co*_wq@J@$bvAmovs%<icQHs4(7G+<!ohy>CWj][C0Y2]N.r(3$)*Wg<jA_[df;3V<`:b;.Vb&Dyu#%LQ7gC8MYj)UXkl%U#Iyizzs!i}51lc6_mB|38I_e9_QkOs)lz]NTCA2LUv$`b#:q3}~i^d1iF{(SyrpQT9009T0BTS&G,a$cmnQ*=:BOr=@?UKLbVC4E:MEK)W]du:khtD|D(<eDQk$Od._|PipNUuA$rZ:bcz&Rvn`Ns)s;`7~u/j<^Q\\\"^2PKD6ko2AiW>c\\\"!q39zAULddHE\\\"ZLJ%69=>D`;!AU%k)/>]8S.Nv~5Do9MxBnJ^Tg[wr#5]P55hnwV:y49s[IWJZ^5{BXxTxq|]TwsuS%kS=iV~=dk;nK4W+J/#(43_<ps*lhNvhaSNJJd|}v_CQ|cWa3**|9CV4a~to.B}lIhA\\\"!Xz|PwVl5^1u#W<ub8`\\\"`vB%xv0F>k6k~eSo7=+5ZS{qZ/X^VXvvp)`)<\\\"W]VhoQ9$CY6cOE,#?&37Qhg:Y^B]M3G%Odd0h0}Jt/B3W.3KgXlUW6_9&xV+}t~wG?Fo}H=1/a?m]nP5H%\\\"{F7Q3I~=Pf%2SkZy?]2DDG.&q[r5.%.Q(FQAamXCfI@1WN>gBk;ojqf|f81Jsb4].|u({pH:>V_]h~Z_7!3L5w+|jG!mf+qV/*u5MkZ<Wm`HSC`Ypa|Oh@{jl\\\"gM}yk.4U_uWL/(&69vuOrGO4tNuw/9@Re+/yGnaz0OvG8fn`[*Lf5mF.HxC{XK:*T0x.((M]I${Yx2zqBG&*?Qbp}u;[v}>I:@q`,?Nwc\\\"OmRnDs;R|r|PN@NS1Wy1F048CF)}sB<3A*]eQF:g:$s5mcK\\\"$5FAA~yn?!yh3R;n,<rpV`+Q3|xX,~_7!?#6:$,X\\\"geu6txK2ehnczmf5GeywD]/J)#&eF{<*Jd5c#[$`tJ$ifyeexYmwQ)M`4T0bN<I>utQ7c*^)[YgXBaU0k>Uyzj|^L#+!muDo&<6B)4b2PQ7f<F+Avlfk4=Xc\\\"10v2_yPwzgh}2`;k]LR}4zV[`9YxMH$oKu@R>AwQ#.JALeKHv]Tt.JP+FZHXAgVzm2/n.!q6H&=d%K(ag}diKA!Np;zCVf&0[{hQ$$cI#Sx9&l9l&!q5;,.P]zqX|}qHS,s[|Z>mr,$0Q2s/S:!O^y}pQ~s~V9;V=lRW*$Fi8+N2]Ci?Y;U@QhG``82=8ai}FA5bKwY!Si[iB)E%eeaOaj?FLS!86J9=Bg=(yax0oTmM_g]|O:MHvsIV.`ko%c}dx&8s!Fdjf}[LE$D*.h$g]jT31vC`ZS~l2*l1mi[T2>M_R$YiU:NdC@v:r2(4+f@_5g1/z!0*Z,R12xsC!M.%Cn2~TUT8|\\\"k8M7KX&HlkxSU*B{x&B@^Qfhoj9>[xl6LnpPzq3Lq~;<&II/m07V.O!R\\\"_tL*m?uO1M|Z1sUf9OLE/e!S<WgoZ3{sF(3ARM^K:h()Y<N5M<RYW/Xuglqej/2reEgijpWN8?k#^:a{vP0RTf*.4t?KV/H:jd3]<TL*v}<@nh~0d6E<JgqwV|{=`Oul`>6I*KwpvsdMKUnQwxap]tI6g({8^?{{+}u};06o=Z)Uy1e#qjqAV@L\\\"Hf(K2u4Lzu`Sk?71k9kvOLFFcb$VQ#z3[jD33~|{O6Cy/ceaL|P]DlQ5G[H*F.HVGn\\\"6<_ZuQS!L0DiD*]hLsg;M1Q!7),Ir}pR`C:h4S[2lu>TObIk+4`iUm?*Vdf}enVA#h6DIPQ8c(Fy.NL#CZ4Lv$rH&[a:Szo}(>|P|^GZrH(_dE=x,,vkF`@.q>%~!<Pp1{:L.GKb\\\"j[!cxX)g8euJX4DxDQ,%\\\"IQWCZC>N%Zi_Z?qT;@w]kxZ,70\\\"Lj<Xl@qlX:{XIw*c#h{[]@+*|Zvx*(ar^J1@~L:K6yXY+)$S%`K6:2;&G(+$E\\\"m;9@LJ>`<sYm4(MTu)uh<btY=uf;BGA_Vc*h1@=KrDq2gC{j@FQGHe>H<KVUDHm#.CNm.YgWMu5,\\\"TSPlY+ExE3W7*Hx^8zK]L/&WP}XHr<ea8z~x!Hr@snr))pSC0p9<_,v?kI)K1?Lvk.eDkPaw%1W~)U[.u{g6@Dy_,u\\\"J&@ya!Na\\\"2bxVm):+i,UKL{Rj(1QHkzWrc%s4ab/+f2(E]]aYF2jM;<yPdLWf/z1XiPw*HAK!37z%^r_w0VVzOx!!y~LBs/d:<|_RbJrfi:3$%\\\"g}HSQ}|1Y3{?aCf5@TqwF._EpjkP8M4uDa#AHS\\\"Fw~?6)u@TJ^8^@.>=lO)O&X#Oro%)e&&:f>:v~),18QE+wfo,+x.K2dx:m7f|GtZOwtava#(\\\"OJwt{/,PRjvAq5`pgwGq4:TzL_K+;?j%ri3c><}YzfI_sdlXXpEv!zU&<\\\"qfxrH_]*#[t#CM&SVZ}YNAK1E?gm?hL\\\"1p;c~(j~i5ac<VzXKDD?cWYH0o1To42*@n<$4k^||UWnTx3n(JpAA`Y3#!29LeJNo+xyfm*y1;dAuj*<Q2^i,ge|4.?*^/=lOZ+&[lEX&_}fkYtYR^(c)`HSqz<mqVt#?}O>WgTtpj;9V_L8k[yXJ_O2mkR$1FhS,AI0zK5Ql`u7;Iy<F~|T\\\"M\\\":!4PXjN,Tu\\\"^|.RQt[2Z[lz.Nmc\\\",3SgwXsN0h;VccPJ\\\"=jb?A3Abq|nFibXL.fU=L_1_*#(k!!O+cjp%k8Z,:klmnK[(G2kiIP=>n1h7S|B$vp7h}6h3RPn|!6hX\\\">N(c8|Lw1q0N2%;I[N8ff*4#?CgE!L[UAUeooHN3dIQxB=Aa(Va~vfaOnpc+scS319l]A\\\"LZ&i!~PxjgoF7DvE}U<&]xE(2Cu}b{/rOD]P~KZ|f+r!xI]vTyDtF.%<.8%3gd^A*%2)8}uZRE~0Uyol%%navi|d;C?}%2#bK_@8\\\"ipN}(<x##93VVrK{qsws^X/*G=>>+RIVzC\\\"V3!ng>HU+OyP>_uquB6:mnIj#eVJOy:NnH4RN>62=L+iLLD`A%N.zWYxD\\\"M/yXA7_c}s{t!aFxzARQ`RXyAho7P!T|#zLc&4,[^~a~}SQ&\\\"@5y5$g27aJTT(;o}%51W[7,^WRwo>\\\"{Sq:5E@)#hHqy_S6!D8XB9:*FFo)J0*?PYt,F14\\\"im\\\"9N/y+4=SV?21{TU*>s}yyb?H.!5YOh&<W/=lI{%4UF4%q/q@p[*Wcst.J@~pN;)QjNKD^F%]7_6}@|,4lDOD[^|T])Z]l\\\"tPzyfGs1srp[azGeW2cX<)}\\\"`[:3]TM3=]ej,R.&:~n/]vMDeEr>^i2y2B[OibAMC^LNb/s9i7*wmAGnIUXpk4xn|XZJ!v|.gI@Dy{zJcg\\\"bf8D`vxy4uX@x|)7$Hriz!h8T&Ooi^z&(Oq4n[za\\\"f1mPrTCx{OZ}yTs\\\"0SX$kw[IIt^o$vfH1D/<(NJMf605uL8W2cUvfnpk)u}!h;un^dm4!XSxban3ymfkJI;zKR)Yq/8GrCW:jOwVJcCsG2m&LpiV[4Y{b22d_A#F18[kh<qE*@G[R,FY$/28!Fu~c2GoDQg.WKHzaJ8n)TlO>`qhm+=;3(}^,Hk;5?Fdd&B:N2[]jZOu~@j]G5=wpWy;a|Gdf#6PO@^XT?;kX_4\\\"t!G|+t3>M{=Df`M+:~:t9WU3d%fvH~BT*`NOMfWD.cZ=OhKv}oatD{;!%o$]<pC@8>B9ID!sQ=XLCuSv.M.oXf?2fN@;b%5YPR]iWCZm|.y\\\"X9^oI8O;Xq]L<dzaEBS_m7|!}u,%$L3PI8fL~Ecvqs;~l*njs6Nn%nGT:nG\\\"&a<|[O*K@;b*S08013]GElDR[KV{8^@R!]<V&&?jwoE11JS_dDf$LDyt}d*78gIJxTf`XJEV2`d~]Bn}yO,e1eUr6;iF+Q8zk#Y;,R]!Q:?6UX<_cW8Al)=j_b$I7k!1:bvRs<t0,BE^Cp_.`6+5Q_DS,BM6X[i@l&pyE+_i.U07\\\"T0\\\"A)MGAV`=FSKZB6_to~8nfMXN#B!NAIVS/i4aD}+0GGu),E)6\\\"chLZr/2y2SAoh_RMbcy8L@+0,DR[]6g>+k\\\"~r/g%8B\\\"x`FZY],K>]OM1a]QP)B#`<XvNBgZ,N}`lktIYao>C,>RgC}`Z3T;;TQ~X!!aWYWI{WA]=O|uCa7gygZ=D}5&S:M$z*#Kgi/m.qj*Y,cpB/#xu,:D]OY|f#A{7b1A>M=YeC5|g0:0N!g@oX66+^o3<?/@!}eZ;9+.&0p`B<5lV32/8#?{:$JG|zQkI`jx}wzm#s2VKox[U%~S#H]wvO~a;ci(pe\\\"pS^zXN#2QH3Kcic#gbb8|\\\"17RR,W;Xg=5jk+JDh7,%a#ir+5r2.L.~}:;>9Y#@Emd!4+fWVh^w}<c/&|*#2Y.(1DBVX`$vvIyg}RGSBf%K]da>\\\"DQ<+Iz]l.K!&i*=\\\"J.+y{rBYSlX!vf+S}E4C@SX9/]^,kd=hZD^+qbz(V3lf~DWh]))#w=I,N<Fz*52i8,)vk{Hm^QY~<C]C(4{@+b`),1QN^R7F.jOL&h9g.dapp]IqB[)xnEWqZ#K?<jyu7[o$j*:.1Mi+PmYg>QjU3SQs3O0+~ZpP~P{?bjan#MUHX<WBy;okf[a:8?Hn8C7a|<~_O,JYvQ(s_OWpjkp+\\\"}!7/_Hio;tY=n0^16?~arD,#NRpjrd8X<b?DO%9{*\\\"9X9ej#BhM:W`e%q_?R!q]vWH|SjFNj<S[,,X50mEX8TSr+GDH6@Mh$4.<&S/imQ`bT#?1oBY6H)vN._Ro//IEv*zDuup!svLK9>*g,j0{6J?OzOp`>r^XlS&.0S&Na*4GPUP1Hx2~2cf^1,4M|}<1J,H|>eo/ijjf#(0\\\"Bu`Ou}VvoC,Fp$%bD8juJ{JI>X[;q$D6fJwEUSAne}Za}6J6\\\"Q5DRmR=k?{SqqqcgRyDE5bXMs\\\"`5ZUXoC)IDqwC{Je3a[4Hu>|p]p6Acml!>t.RH/6%&vgI79Su)3l}~bu~+YG__MP_z0nO/0)LU,v93lhJUwALbGQp6{n%zX+.?i=m&y~Ke)|#UsV$RND\\\">_%SDqUoPl#MHOVVxn?[d>6m/(I=Ic.R)qQG6^\\\"~gB@60t}roaQBlM{l\\\";X[OO^DMn:,seYKegyLw%z{SLB_hC444Hw$wG$l>P<I,^,4,lc?RBN75#HPTi/V.lF#UO@{YXBmRV,Z_#y3#\\\"BsDu]K#238.$!d[U(a1koI!,+!b\\\"A83SB\\\"pI#53p_/sXA>Ak]Tb|:Nz||anz6ow!S>eAQB7zV6^~Og_VOy:t@|.oE[&icj{upvf4S(pJ;`n:b/0cl/3vquezK!v$xB#})2n[Ei{)du{\\\"Lo?%SkB;t}sSPm,:I?G>$^db1UOH@D9j)ZU{suHDOnoXNf#[};VXk{=./v4|t&Siic.@v:e:Zc_HLX{U2\\\"|qA[ClFHb*WNv1V[D~l&Mg,dGZ(`R}5/|Y&Dh7{J?5=LnKKgliC99GQVL>@qYP}ezfBZZ<#L,D@x/y\\\"j}8em/}*Y+/|uvm[)}39v%=Pt/;J9LV%47Ro!@^q8xMUpF>~2QvNxEl?=:#AJUp:1%J0jE#K50!u0hw=QiiP2);{5cU+::RGWst^ex!7wR&HXV{+|{,b4A8Y!J)K]OqcmxJ%o#K2Na@:u;ql3K!a{*tfLcER,`a|@Y4OrIm}|<g[kycUdOs<Gdy\\\"hnOPo.3A>hvxQ#hDW~v32o/;b.50*X$Sap%+vPBqRUsgVl@l4L$pkMvu?yP2#8L|lTkQGITz7`.f;w8heg`j}Q~VA(}`r]yQRp*Zw8/,os)n>,X21w)]g6N^55h*9B1p3<(#!B!yyGud/Do6EdA(7`wo$,NW]0,WO93Z905g.+e9BK4O;z#Y1QC.9YqMRHW^Z]dsMR{*BpW$.vkPjG;AHT:M_wHin[&5XsNe9Z@e[mH~Y[9V@&$avmidAOW/$qO6gPK_(0f{mv4ciWVLCxU~s4+d&HtbZj>S[oi)S#v$;ka@g)pvLhVVq4&~E[QiJ*9.4f@0?*I3\\\"uwy*Tta|Vp!Ux8h}ZUPH<nVsFc6igSM!oe:k+=2t[i%aV}j\\\"~~:Tx|y}p~[\\\")+8@^G1T.PJZ*XLiC3^^=jsL9lJ{R<UR.lyHF)0:u7I7T?c?0PXD?j6(6T+?gDCUe5x[Qt;U){#U|v^8|3:Pww_;0izKQ`3GGfY+:f7cfwAB1u}>42!Gi%q>&]TQ;<b*l1o#):BnT=`mR$l`dB|}\\\"i11Qi)!J<l#0PSOkTd(o4TpU6XPvi7^9p#fVM~<nGg_&UGMX69)AbaP,)Esr}<A{E5:!N9@#,:#)WSfGd*GWip8Efso7QyV8S!lqafZXnWp?rgu!84Em}g}+eS]X%;yV=x]HbkM6b/R*.b{+x<4+lH>G])*7wipZY+I6C;Fh)L0u$YHP)CzZ%v1d0ofk;=g)25.6:]kD,n]:uY5siGjo+xj.QD8|wY7*AJ#rTL]ues@NY4sG8hH&MI&YZ=fq`$K#xNnG:\\\"2_M/x0Z<HXn[I:U}:3wiJ?G&M?~L)Of<}(2&KFRO3T;4cRN,eZPX1{P>a#R!`fOz;WSL>`WoTDrW5daQ/M0S8DjN[q`R_)glTP]u7$Agl6yOS[Dm]FfeB+u)VPoPxtyNpS/wu;`c/`7oz=gn}E\\\"(CJdx.&HU6o1?Bf%S_SE7fF`$s5oyE^9~mC{E@E@wUip}%#[5Jgb;3j?olPeBy%P@O9d4anYMnZJnKB;#7syOkZlz5\\\"KR;&x>,Ameiv=csp6)TrZDK~(,x4`~nc`jAzz@g6)$l!rm5f|u*F[Ma2H%P{=Q3]m~R`j&T}GKbK`=Gq%f)/Dd^Rb,$S|.2mYF;qiGD)[<RQD~idSQz=a|*1;G_]c/oZ{uFjf1y/q>_5okW04h?z(k>]79@n{iEGEP8DZSsYlRyHy7*^K`VsxZZw6;h.OXp&Ld<%3;f+3nN:Lx!?iVYyv21ibm!0qH1^UsiF,_Z<`ANvj\\\"9OPHw@L%9j.\\\"}#2L/cL].zI]T&^qssse~q/HC%U6l)ai_eV>{CC(),I?8766&3>ECzThIzXVqxK#N+,5Ng!v5puI_W#`^V_RE!$Tt2<.YLV(N&60\\\"3p<oUtioc\\\"hlTtJXSkN[Csnv(e<1I))*Ms;VLUee~lG;Z%x;QezNSN2pF@K?op/QNGbO_<7JYp\\\"V$JJsFs_k,K5Tn*$bD*`H>o:HtoI2oyRhk}u81PiFnQfB%0QM<_`M~_QLJXZ^!y1*CHn5w~no?[X/0R<.(P{4\\\"gQ,D=}fG/UN+zu?|$Hz=q47?RO:`$+Z#1.`3;iTJ&DdN9G#u_f/*AO?S<i4>W[<|y(]0__KnLeZ]?`k4EyzQnuawOM#qP3hA@ywfrvH(>ef]uDQ%9_Z)2V[<2_Q=7D^SrL[3LO<IiAFzhY,YA[?Dp.)c;ITnOInlA3_(@:*E/\\\",:9)(J/curYle;\\\"XK)0BMh+Qd\\\"rQ]I.g8y;pS/YTU4u)Jo:vETHkx6wWM?|E6,U*eC;w?Jruxi_xc7FcsL_r{hYLW!Z623ab+|Ac`@js#,79PnHo3W=Xo7Dd?R4;{&IS&>fP+po<I,CX:$e=b^/4FkI1dL6,G;0ZhlCvq@(I/{h%o}e3+Ut:&W)4EG4Wv:TqzG(X/Mz;)N}+8^)+>ksLZvnB?!)x1<ZS)3,e2mICf0hT)nCA/2WAU0G=Qk[/=)},v@~b\\\"Tm/B~*D@okB*MaTf}A>OL/GsKz!ML%Gki,]fR#rdkt)<K)aK^KsqgQgk`ZiF:b3v06zBM2M=^r[x*NTft~OsJH;|Ez{or7^DAt(^@&ZW!x%`V5aOhu+Mamgaj8a>R^7u{Fmm6XyPU|;&XbN!YkXSQ+X!xSwTX2%bB@]lG~)AaH`?b?Mj\\\"p]#dllv4Xd#Lt6z1|sZtEJJass^;:SoH5*M(}U{TY._LfM,:noV)~GX@WNDbH~jzN..}m:zlq)j+zu`SB[hTgYxqx<ifkU6^@8#,#XT/cz~+o_93;ZlTA8do4>fWV<IBq$:^x:;`_YtVbp~sXFwYT@P8g8VN*l)GzB^Beu.0n/>QG<fxoMUWUdaKy$oqc`MwMF^Ie=N4>{,?U4I@h\\\"jG7d]S3A=}z<#Y)echd<ua3m%f0x)pT>JZqLbecNq~VxM=u_.jW;~[pfGe_&k)\\\"4zrb3ht.Gho+/FwN|YMkdHTf\\\"{d:0(}5SVz$:V[fQ%87<m;Ku.7>kob5:RQ0<9`=N1SUdHh<sBSoys*hya]jR\\\"}j7G]nq5WDxYa\\\"98<y%!nU@^Rbkwi~SJD7l,U)!d@sEmWiZ=uE{U@ko(w7cVS.q2O,SnAf@W_p=~CQ#Q$;`Hl=M]ESO,f)x7$n^($=p]fTT^>[\\\"Gmi:Ro%Cng*sh,Q9NnD+imAd$A=}29a)8Ku^_Uq@1<bg6}zN`7aIE#um=_0:ue*]fkb$]yE[B(c7T4_oJ%apck6MQ[,H{ao,%778i}lt=z6.;[f!nbm!sij_,)ww;)R>+HikygXOk`zO<bJlBw@j\\\"L)LTNr;MAn<lcLLtQt`py*}0NK/E?#`W0@xjzLjFbEeq7Wwa4mEUFQ*_Wt[r|X@r3s:9yIO$~A5YZuhJVl&m7~!=d(|Gx%pNOM|Hm~Y+dE#OWM=+XYwG},!&v]j1AtG}XG:1w4IY/ra0,S`xmV!zx~mg.f`|13{]Oe3@FCb`Sgdj)CjPs}#8\\\"Es#w#VPx*E!Lm=crYuj6af*&N&}+v]]1!0mYe?*N*|/Z(QR@URLv`=C8hdIMTyB{ieXn><)//{F8>F8z~mR_VZ+)t4_0<Olx}u;.im9YHjmB4dR<3ST8^%dy#;l[%;N%{0)m\\\"L3LyBHYK#,fBCmBhS:SL6P^;QSO}p?8ZFL0$7K:u94@M]/q(?i5olojR/p``jM3!xzIbm(C4|E5{pJ/K)ftW&@ln<bGXF3EA~{UD635r~=_^)=\\\"Zac)?VLSG].Pb4P.!pQ05[0[j(OnrSZ^*V!uEPl$0=jZvR2Lmdf)JCE%b[]%?,0+<jim.)@6?[N?Jv3HuF3/HX%Z_X=U(Gk^KmC!!`>;+&`v1})a.)l6@1Elkmq^h_)A=3yHifv{TJh&w+s\\\"AHyr(oK0e%._$@S>[B]?_qW*s\\\"n=D\\\"lze,hNrE%](zX.51Xcu8|M<%VU!GXIiOKa~E[RoN*%`CJ8Ogt;/AXn~j%a.Y!)#Y#]{t!VBdU=Y5NN^RQ|&p{a[61>c%WIy[+7.k:4+R#=Zwd,T),|xAH<Fu.}sXhKcEQS96n}h8oVDC>Y[@2}dQ4+?uV>33#Mg?>?:TIQo15TbFB|I9Ke>&6SXq~V7d`$%3_lPWwAml_HQk;4%4l9LyXuorwbCz6QD,xP0|ED]TP(i5~syAAe5/*,P0P#raHVNX04E~4xrppFcC)R#2PeM3esc2K59%B;WSkuiWexi8jyZmBLknNV9IvEofi(jU,x,:^yL[~6O4v@nyBc}5,xVz6IQln}0BD^5+Nzwz{0@<2\\\"#f,[jKay0`sTg3H%/6[i!qosrX74^@Z3nJRE<|l@8{FBV6SgRsq$=(g]*$R}>kr!eCwk>D2TEhm+MuSQqK~?3}IWJ4;w7qe|#_<Q!C0Ae;Fhy4dA<+hlAN^l2*D6A?@0jp`WH9VjmO<_{^|p(CT,NaXeXf7Yg$8>]zcP{AGa`v!j%ym<yO!1XnuW@D@$&N>K1H/g\\\"5Cf.B{xw}<}?ZQ6M+IV<W}j3Mt@H_8BO:M^F@|RKF&;S1[TfbtEq)EU\\\"k%]KOS9@(o$RfJ%dyQTKvx)Di:Wc{p0%Z)Y6~ELdo[R_^bv/v{53Mb5u7?i{#9~XRRwMAeV35<T%EPD+zRdvKs3WlQmdn<Ql_CG=cgmK)r.W?a.iuNO(>:xdYuO~E><f8O{7]\\\"U6fD:n]}Nc.9.6|/=Q:>!p>Rp%Hf}&yb#n.u.QjuE.d8{5&rxu@UMZi*x@F\\\";n&8+C*>UsLem3vOUy!9vFQtem[*7%mGRH+ve*)g5wJ?MFFq8/:QiC4yk6[rH:4@?(KOU9~<hNC]xU;zkvl]j^BoK&U+jRBcI0Ld<;,*|BLTX~s7H)*zz_]n;j65Ew_z{l#ah_W@>t6$EBAtj+_&S*j!TaR;=xt~w>>g6b5w2DTQ@SlqbR?N=6fF323Z_,!4(Hl=`]zu;WzH4.4fa!kwZQj5xP0u7f/.v$sN1[:9W8Ydi=A4_PXcf|q_B`?oM]?:7e19ZOVDq(,*sA3E}?%<S|;O>MJ152kLGV44XhQ1u^ZNs[nLkLZJF&pE6L:03{K`jFBWNuOLuv/%aO:Y$xSgM]UWgL&&(zT|Zn&5;cB7WFbjwNIxddGWQ)^v5n&#:wZSDmkTM6F!ENO1>o6./$[9y!\\\"{:!(lq_6#VYja&bshwx{;]033esBl!COUu]AC6*Mkf&g1b!Cg.TMQxOf1f\\\">{bfMIi\\\"vb4,VriaTsE0L%r+Qoy&{DxB5*$wJIzh;,n665S2)S3.)(+5VkLTcxmjw)48#RZo*+&+7wx;Z~ANj6D1m~OyFup_|#JbRV)[FhpC#@:\\\"~cz5_tPz2H@nIp%RzfEO9)QdQc4/E^rB3)eK7hhEq$Tv=NGV]N/v7r+1sIR!RP7Ni{B9P^iChJeP6WY(~$yT6I5iKFd:xyH2DW]p6?,RYi`M2[+.t9lARtM\\\"]3mh>rMtAO\\\"YO+}G)x11M2h~))>^Xr[eVn]b~5gPwW:n(+|_M0bM_hD,&cD0>yz|K3HvjDwMorxLwGgs;)kvtI;xLy5DufGH>6a5TZ4#?b^j&g*KP~/<}St}+`Nf]RX;lc|ff^`lh)|UMOO/h,wkjC[S(7k+=d54>nRrf?1oslVRT8Ve60~|KhW*&lFkQ^D5o.h;x6W%IQehpl^A94D/:Glnhd$z^V]C;DVS77gX;xKXoS7p]!|n4{Ka=7giFY~i|^a3\\\"%0guf,!mnW>?j{gM:jxJm@~QEP*7*An+oW9qwCE*O{)g,;|\\\"u1e=m_l*$9gh2l1RE:l4A;ztR[L,/6rHn1Vz}l3g$^D;Q$!u!Ek1GwNm=:uz!zlGNbWDCf\\\")!d2J36nD/}0{\\\"^peE`7\\\"0oj01ZdNb_+f{yu]:jB5(S*brdW66_oNogNoo%S,|:g~fnlgQY/.5e(bD_gX85SHZ{|&VgE9jj6:W5b_@Y*?x7gChta+Pf?M?8,A?M@s{(y4;}bo|5CW~sbl+&k\\\"Qi25RzS;eT;KA_w@}g;wrOF/%!?~dm9mG&(4#5NCKR((0u!d@o<z41PNiD_Al{Q``W7u:J?;m*D%x++LB.u6Wnw,,$rbm)7WI_03F}3fvwyu#nid0|@]@ut:+K`Be]4Ve\\\"Yd%t,rf*8q(KhYU3,RQ5ppCMs(Sp+`xd$<FKQWLvRN[Ss{2>t`Rzp`Egz{Smffg!,Cfc(!pC8(YM+W56TR\\\"hej1=V1/[1OnGl\\\"@za/[Ttb|@eqy@QrgElyV,2`8+m0f\\\"Uf3_?<46+^F*8##th_SR{Owv5N=T2sWZ:;<2boSH/Hf]z{k]&aIX5Ng#>`!U:\\\"Sk6W>W8CpaI}~1i?qPL%J=yFJ/0c8oZdUGxq`cjiKpfI#pqBv%YFud|cj*pV/wKaZApnvC9?34@n~pn50y^uf)Bi0alr<*E_sq0.I45K1]^U@QE_xZ}PtPonWJ{J:3^/.6J6!AG`jgS+LRxTt;:(o)m6|4/A?i[wmy{O7h0Y5zGcwhzfC57++*6lIB;&N5AatdBYzz1*rv9cZa$YkuBwCj}ku+w~zRfR>ZIk]^B9br/F6,Dp{Q5,7~P|p?n1I8k($9/q$$vij_3k+@pL=`8p!P@P,&&*yvld;W1><ZB|Hw9QBz%0+1s?]\\\"Wbd`1pSstS\\\"SiSQm)al)piM5YY2ZKvg\\\"^f[wF8FOg_\\\"6=4AnmZ\\\"/h&xat(P)#tNHBM~E`M.1Nw$9}piV0~V4eT,c$~AENVL=0FU*L.?:K+iIB*kKJoTL~~>[*)_&<Few@+7XS#~zU@4+?]H{Z_$*F,=>7iQ/R^%[0\\\"oav=Nu?H)Tq+/)gufF{D1]Lc*aRq<Tv#*f9eTN3=iyNnEDlgTBf?vVAkh_&9&HMbZ1lS<K/?oD5*Mo6/7T573HtwCw@,s@HjlQrK)sR(_bmXfF6<IisUV1#IIGxD3u5uOl~Wp6HZ&wJ]gL;2yWZ^S&&gC<{&:Bk:2.R5@o4pM+~27CMbc\\\"z~L|cfTH9}>M_nte\\\"[`,W#~*A;gLU?62|^FOJb_MdLlGy4e@Vylqx`j:i\\\"i@z%sNKsU8[//_J+%|d*JG<)\\\"vV#4&m*`ibk;W=X&?0<2!y/rBive0w6Rn}VUI^3m{!u:<(qoO8E?\\\"H;0.,@cSS?3ynEz,b6K~GHmMis|/DBX3cS]amckN9G^g/Wn`Q`@EH5mF#0\\\",:K;+mxEPyIjum9n,>f3Dq;L</mHxd~61wkBIX[>u0*JzWF)8HP;%KnFN8yVz;nnSjW208&2M5@CC3K8SC7$GeTLYwj}2lYfBtK#)Z$sHkdhJqa/,(@wyQiA\\\"/PDf;%S,&7b=1!OV}Hjo9|XHv%C=.m5>{U^zgl]RX2~PT%v{4M7u`^2PN~A)#;R*W~O_%jHEw;XfotnZ!5_V<vMubRoo~afNshD>2x@QoO\\\".dd<n,QBz)dyWd5=:`qYIIYZb*E{Qi}WR[sV1_ufU[S4!%)~xahP\\\"W|#J+;Wz<6*|3^jNa#WRYsBJ7*=[}iL&1XtfV2D)}0bMUWC&3++)hyYGfgRV7)gQUonhG@R`3#6YCTod}faU{]Oyi^}v?Hq6A[9On3=l0:;1IDh?}H\\\"y1p[6yaQWe+dbdEzPyEKAY}\\\"31P4%V,thmjm(UHj0{cHWASpIMCJZ{!VxedKey7Ya5|<s}R8iU1<Pd.g.8E.2#PR$V|Gn,;&gN_%FLt>O2*c}C%AD{z^Y9Q#2XOz1HuuICV]n}0C3Pl*?HOcqKPF,WEc5,1k{qTu|n:K8j%{Fry+d7w*.5:\\\"kBi/(5|YaY|gXwiNi*PAq>zPIG<g>:v|qB`86DZ<R<m<4wP%acSrV6%j\\\"P%]QO(u,#j5Wnj*i!zsq<dT\\\"~Q96S,UPrB_$si&y@{um68!#\\\"49zNzcv9x{a#Xc?a,$dVm71I8>pehQQX8YeyW6Frh=BTJ>aZ/x[8ikQMV/+MHMdh!^d{ca,^N2}@}[x\\\"Hw4nVd~D8~=EOO@Lb(UF9N9U^@`a(d0qcSIN$Q[$sNTZ|Ko%_kp{Jw,Ya1\\\"EHecXa1&QX/_Pmns21Ctoq)DyQ^L5Ud.QhyR`(<VB7E0pUCuze[gm\\\"5b*F]Aj,F=2w+nL:IE~^Y{4C6es*|]uZF\\\"y`b.20?A}\\\"b0qb(<ev=/?hvaN6Bq}noUb(VXA?TLf%+oDI}B~;yAfeg8(ZIx(%NS6D2.bVtf,/h/j$C|0xo&x/lp?=TRUmg3`J4tBxP}#i2A{q)AIM~t&lE~\\\"y0Id/NlhW~cRHWi<2i9IQAjW+L%OtBPXx$W]JJZy1wc{6r;h[ynn|;[_*`3W,8GVNp$r6a~G.V%]~6H10pCjhdzvN6hWpDgj+92!=K;BpWc#!Eq&kx^O^M5[D?!;H?T4)\\\"vEsIj[Fzh0>Bf:_5LM`:z}HKHH4j&OvS:ef4~4a#ha~KPNYVv|i7U\\\"]/=IcOM>vY~[gk$*3}cMf`+n5B9q@D4b_#||O2_SzC58hsko]Ji(b@.hc@np6Rss$UMV=911]8+@T5(~f`UF|i`ZQrxTZHp#d,UmPZ7&3/cMuhj;i4;^w*<A_:8pLD[cd)z*V\\\"|.UA_)jLZMz~8:?Z)1NQ/6Pl8!g(}^nQJ@KlM.{OL6py_m4>/%J<@;E3*$xq5V5x3}dr.Tcy2k=K|F<b#:/Rt&d!*+/(/$wCUd823@X+e,XS*D=yOz1fe&:n}b?,`=])mRPSGMHU>4j:CcLeLW/3j3kNLbDSD*>^]H,^BR)v%h&?!rEx+rUavYbH\\\"!Pdp8s$BCdekEYM(Mea3%!ORd$R]rSI)KTL5*.<`F(mOQ6\\\"X4^(\\\"tAlD)!p<^sv&[(qZ)E4^Uj@o;)]Ks14N!y\\\"2wRcfP6P@UpD&h&!uuek4W+wH`+p$Sj(&J}QeDW~VuSdyuDe~Y|A16)US(B0%F.$Cl</lHe(I{KE(U;a3hP,RtaSR$/OoGUPtHP_ncPEZoV{dAc&zl|oJa0y[d~bYCl0b.Q|saQ*MMk]!@GCp=P!!32&Bnrb[Nj>I+kt[o2H?DSl)K4?T#I_61+jr\\\"PHP+b6ikvsS1w^fR?sn)4@#q)T1*\\\"!sjk\\\"MST+aRLz.?imhOk?8Tg@gl?dDkYF0S&~8}41f~`xCxWrW@,#`L:]xx&m#b4vmO~us(XNqOQK=S:P=h`Ir2?,0bRCXPAJ[+kcUC>D\\\"yZn~b8)rD9}sxz$L!1&MP/uRNaDw^R!BIC::kF@KuX&2s?][^bTTNV{<A<7hs>Dlawfhl!20@S&;zF14eNS0ofxpAdsLG*<Q:ynBLJAGw$Qo=$jxuTGP,m`.EbEC{V$P#KmE,}n^p6S(G`K07(UAX<2\\\"op/>NaDTA&T{By!<m@d>I\\\"T~SQ}jdk}Arx8K3Q\\\"0D]Cp[pC2SuLXC?m&2NV!9R+*H?g<,)_`AHc#3P`iOXMNt2[&kI+?:;@k1$s*5.EW%X0L;&Gz<^w<LFeB?Myi@Xz@V%IeotFzOAJH(xGB5y\\\"CVFzaqou/D=y*]}tzi]`^o]ONTRx1ef]8Plq/J.[v70GIq#qHA+#${_iCSb?T^hXAeYF7wDZ#B&9~:j@Y|KGR8hElJz,H9DeE6y8{a*jg<_~M\\\"^+/l2E3?xhcirBax;;w^{P;#{^^vs;.I*P|lU>P?@b|dcu$4q/dGn3>hdqCZ2#_*d,S8U*AY&?jMKfhG(D%#[I;Z54RyKQZ}*=.k8rS85x>po~{7.edt0>GZst&p<SNmYXrpe&g#U\\\"@3DjFYl+_`0(A&PW^1$R5MvS)0G>dn9Tv:j[{BXn?95%]=v=8(e0C0~7ZaC9<;=9XZN&zgNYz%5EScGOZlveU3}ks9wawufKI+IDYkIAc9B^o\\\"<pw@2H`J$y}(DMi<GYw7drwCLefHB;1G$nN{2h\\\"LL?&H&Zer:ocIj2\\\"O=s8t@oP|c<\\\")59Yv5p>1azx+}:`epHIE4z{`<&q5anyreL>}C/l(iC#HPs&Hk2]4gE9?]_~l+7JYCuRppo7Wf>.\\\"iCn<?hjd?2\\\"6)?geijNk@CM.>E^IQ>,MR`B3V4jdS)/1Q=^B1jEKMVV#LZY4g|*+qFzA]*x?bPdW[`Qp`a$kI`ZC_@[f{@#}fav&0n,xnv.T1~h#>hA0TO9T`m^eb8/HIr5n`;go%Oy4O.+AMa$5XyJ?m=]CNeo]FHVgVLAU:a6Mbm!o_~zT>:SCK`d0Z}hXQ[9c!BUMn0f;1zcRR#<GvdV#Jif>Tqd>_[aA$7v<wy7d@U)JNmKdPr:,+_4j`HJugL/:_g[|j(Nyzx1Cz#(?T/0l{E6/BDv0*%K]M]|]yXcgBZwPMF~s~C]>$yqTrKH!^aija7@oe:e3i8JVS3!vF,lljj~(J.n^/R5$&*mCd#uh3E%5b}/z5LXFhA>K~~Zs}K[4iRw;$:1,dVoq.YrzW_;i,n~QMgLbx[R$Zxlvu<PMw:9eF@~N!|*{2jx/q<{5qX_Z5|G3zhS*eWl7qtl!X,qEcg2.:M_iMkBZMn?~FgWC4RBxKDhJb^oIlVP1`..Z!0.ih^\\\"F1V]&qMMI%fH^?c(b\\\"F7SI7**8_;a9}qg$\\\"fOW[@6%8eTC6nJU3}Xx)QJ|AWhW=#X.Mk^/n#UvwOmxp5)btM*5b1[<[!l]+zQkqz>~u]4eyB0Yp__~6|01NCk#hVX8EL0h3vT\\\"hvEdaxAm~,Vjc\\\"tiqkj[W(HEGu_>k2&p.@n]YC7iA27rqOYX5=C}tL=CR%X$n\\\"pz(}g`5,i+\\\":bi^93ga6M)pF!QbMKbW*2^5wQJA+}@@b`,j*GB6W+#.>Gq10Lv%wQdr{a(z{+\\\"5_m7iVS}}klk@7!0=IQLJZ}m%:NDxEr\\\"n9M~V<B}Dg.np*c%XsCF\\\"P%NrJPc`>aHuDd;eH6u@`G#V63&FAE+olkZp=Hm|iWRKoux#K(NEr64[zs|LX\\\"/(U3l:C9=J@H37k0]N[JI*IsA#Is)J:rSCCG^Y)9Z4.\\\"7^@>xw_l0dB(_2o]YFuMo!;GL^zOi6dK&>8v/}<i2]u$b70i6FuZnd(Gv<,gj2A2_!qF*/V|`e/xq+;98cr_ZJPCCr`+4T^>HCq%gN:cxD}HzO/ib6hUP+V<pI>r.YhGNK9}4{5w:T)`%(c^QhJ(\\\"0FIzG@z%bS<+7J@U:MRTjoTXDc]t){Sm}p3{iwo3`ux!/kFoYl=;ZOVUWx04ewUNbhuA6i9<.5Lvg=1wEcu4/R+Pc~ZEOy*.XO_057mya*(d>[lye~cU{#7SE+F#O9C{cYN2gh~65z(^&%u,*;)3~X6_Sif!)xFhMEhRb?EEA_?$@>9dwZVJAYY&qO3Pibqlvc7j/#MM?;)~[HF%)]1x6x~i$Ns2b4(78r76+4b29Uru{p~ufJ_l6gS~=VyQO[+@cz*pQ)CN|_03rT8C@wco(jEF$kG=(v#YOBtxP#$Y#j!y(ircWZofk+<:oU!Fne_AI~@Ch@Z518@(R?MFhVXIG%5*gX9u,%U?S5F|$s;QHMQI:Jl2+{7h;w|?(WeuP9o[|`YVq6KjYC=wM6GZS8plQz:&8fNgRp[,@!5u6fY!Ii$W018~0\\\"||(a<k}j_D~`K/=)Y5oN#<>2labuI3QyegEzzT^{(SSuT{q@zm\\\"Qcf.gro?X6,K4Q{+H\\\"Q3p>V;y/lUBpglg?~Fv`_m>j@Eak}j,5Na,&\\\"jjBC<L||GH3&Tx|(J|+8![zyqx(y|z8?y,Ub>5CV&<9pR:]sBfM9bNf\\\"|j&jl9:TC^ZVx[Au.A&JP:H]Gh]EK4{yTT&^L%</lr1`%8zGuzS;]UGKx]tf[aB}aXPN1Y#V=kvmkCy8B+!}f~fo=2<0BXOz$7\\\"Y/^G=z1Ym7M(v?a%_QqqOUo|z)@s:IdCU(fB!x.78cprx2yVLJp&j1h(Aud*|`8y_<wxx{}yKAWop8Y3KY5TM7(./!r?1hKTzw$*gDie$^T[!,9M1&YJamp$5#9K&H9N3?|MJ0R(H5&^Ii)!u(@thdM\\\"KURyk5{s{uG}rOhQ,^(k$W@x;.7`>;tT8[BGq$H(4$|ue&6w6M,=<|iRJz`ii!(mh#<Xb[oh$;4[Iy`r5P])6aOcbeRP+!S8T%Trs?,Q]~4vAP{M\\\"Im;]4(4eV9q6!Aiqze~$wj{tEf%EcuJg&7(}ozU{,#<1Vn*6Wn,Nii[mk[IiLXq^,W~WtsCaX:gF*Ip0r.wl;Clu:pCK8p/sUkNxPLo,_X2mwcML4u<U_L,$z}L\\\"S!X76\\\"NbS>BrcH3sWDENZi[FKBeVKEaI0CD=\\\"6i||?hPB_pxvKTsKsN_Y\\\"aMnz2/9d$Bd7@G2[mZO%04rN&V,u9#OIgk=N\\\"eCing|K7MTS_kmHp<*|N3t3:E6_BNHaUhcBT$#LYKMZD3$4@VLY>K>lKYT19WU~cV/P\\\"yeEIEB30pcyy`9utWN6^I_Uk|o%/Aga/h~yFv3^6NJ:DSu/4e9>%71;g!~Yef6k|wu)Qq|xxyoQYZB/8SPx(&s#NIwTf+*7IrrrHlqVK8raC6mr_e^VxJ]XJKuhn|Ojuo=cS]|LGBM\\\"_&xIHXK<4TXrDS/,ID^~}Vb|.r_EWko<Gr#So#bPVDOM@1Fg`0e<$fAjD[ZM;$T6Kk0HUa+#Z0&&M4:P%]BnX1W4j1nc5VI+|TT}E{aOi[,(udo;Fm3\\\"XVag>J4Dy{k4:\\\"(%WKlRhwG{2:lYL/4_n\\\">[/<0JMccF1;nm+~&d2J/1}y)iMM,fg>4o<S{1>~BQ4Rvjb82j^P/hPpZClfU8E1*&7%sonP\\\"=>VLmO34M6BbSYv*s%:_JaSR2Op2tZ!_#*sqy(YJXW54!m]+~.#t2;`(Cuk?=EFGL[*~dSd#ix87hIw6v]}}5pua&2Te7kFli8}0x4>,[y_]@pCaFpKLzli|M^Op1l0]`:W3;r.iK`a8g9b&}A8&}AW^X<?f32\\\"lbbm/[B6YH9x)Wsg#v$K]J^SK!sVO4FLX9+Pl/.xW[f}z6HIvmS9[F&)R_i5jKFpX8{otU/[(k{ZU|VYX`Jj)w5|,UO%S.AA>VEzAHA]c7~!u\\\"YqlJ6W].)%>1)mz|v3q0]oFQdQmTaz#*UN1omc6=ts~yy5Wa<[@:0UgMOhH7D&EGl;5e%DEl(9)kVo*%XL)|_LrD7DubFW>Z5wq~fMo+izxug5:AI5^fzRr6&d@q/KTTJUfOvyb6G:HQPh:YfXWB@`3MCYsF7Y}JiDs,6jn8=I^a%d%M#Wx6JRL/}CWc3k?4gq,zxcgYltdjo,i5.<;r$7D|0cV~K=D#CFVxc;{8ic*nTc,V8aGn{O|hpE[CVYHVXemX9gfPX4cW&yn466UZ?N4mDHd]gOe$E}Q!)`?|Ig~Z{H21~6,2(f]f6!OT4|k@=_\\\"()7x&$8Ge.Kj?T]Dz@\\\"`jDLVM_zLWN{@&)Pz9SqGTiLhKR{)%9QI*0F(vu.]}[.b|i71s(83uNf[yiKn4KDf,fE4N6S@V&1*z#PDSYe&jB$@+3y=l+e)).`pIV;HGO}M+=/a31qP?/E\\\"K6`X%D@E[UTOHMV@sBUJm.,Km4i@Ey6L=5KZ?V/pC^h#~F{F0pwxg_ST&]\\\"GxXmD/;\\\"x*S#gC;6qC\\\"x,1VG(6)$qCVpSW\\\"qzFiYRy$CObR`4L1~regQbppD}>gj8QgklEyTOG1F[9y9d<]0r737Tjpx;;(jg9I;FT`Jhj;A&^T>[5WxK3R>*^:b&&g^U;2$QFL:(\\\"=$vp:U#j!a7D6pLo5}YEdOdw:S{=SME9dHQ&oR<I5D@f:euBNixw`gBh%](Fx3iq7GW};WMvAD0)TSQ.:48aV0[]K_>])>BqkY<f+A;)a_O(?c>CKOhJ=\\\";+!$~}t%mIIb/Z&^5*6[+TW6r.(pa7RJv*}G!;G#u1Mn6|yy`9:p>r|O.1{#~U]viU~GW1zZ^Dz{)|~6&1USAc7PhH0}mQM&pa7fT3mSbUasAT7MI[*%rhB~@6t_rIr{[!W/kl*MVHTn+L4[Vfy}gXum.Z8|C*Gj;IwL0Ty#K&D!+I^6~TmY/ReZVXB1nh^(^=d$[[wUw~:]ss}h^tn%#71)MGes!K:g2`]fQ%7gJZ`;l`}VanV96`Yi\\\"f6>Z{=Nxd$6:*$d7A3OIm;,BjQCxD^O2;WGHD_gcw|]WGZBB;a$&`|aY%P~`Og\\\"y\\\"zF0B4Qnfl7^2jb\\\"ct1!b%Zum}^;>.+[Av:E].k$}}87)|y:2;bf/F(ZF1crdU<%ALUXBS,x*,=N/q\\\"soUTkpP|mDT1_8C~Rr!Q`w/m,>sjb7wX~^0}aIG4k3ls%<=vX[;PNn]]TB#4wWyB_YaDR>Nx:&~dh+;bw0j<BaDC{gMn=Dd~$|aQefK&S4qv]B;^zGPjn(,1Foi2tLq0*$yTnH|IF.;wN<Ye[M4@x.UK?xn!/d)x^C8E_/6z]K26x_v?0~P31^I>8Bgqebft:/3H$KN:&&8Hy`hR@A~DiD^dG>PS~I=yyh2@B,Aek=pz7|Fp5SR\\\":0Z&knn|7%A>yTVg(3+>#iWnG[53zc>Tq>ZdBZOH;l^+GIUu]%^ZPRRQ=p=0%V;Y()b~KslsbSoqBl44jqXe.|LLP_>0>}SJ`nYV}BTBW9mZhjO([(+[P#/yf>KIWGw._%^oAD]GKhz6QA[5L5y`Ljz)0&i?qsgV}k7xdQqK#x@UTZsRLnL24dOE2^0bR;5/QIM*?5GErG%7yG%?d6U~r/sbF9LUxf)D:n7cZFj3/}Q_eq#R}9uf>ur&0U[JRmuUS6Ff|0yZzrwcu{t1Ll_=1iAE#:{bF<~^;x=bpy5y&BxikQ..l/1hplB42/fxzh)pUd<KJFvr2yiqfSU/<X4%8_$!UPJSu0gT*E`s|ac7n6VKz2^PY[J\\\"(&Pzdn3JU@C#dK[+0?Vn)7watU?G,v{Wtyq<Iq9bff>,[+(!\\\"La40jZTY<<$p&^&?S&P4s3%cT1z]6GhRBpB~f%up\\\"~IxjX?K%{my)ivm@)R9!iWAo7yGWDyrY=_t7qRh<NgTrQOl7$z?:58CNyQG*^/lBxVHCY/MSP?bL@\\\"Jy%S^GH<.I]=7,Xxe.e*F+xb%y3^:fdN/LwX}d2aGDHwjQbI4]V(zlldrvg^dHQQZ#kufrw|Ck.|(GD0Q_l/WoBZwUHx7k8y#X.f3?JTfbUQ@}>#S8_v)@g/BEtFF+J9|C1~j1/J\\\"[^%I(l)RCmQ%[3K83KX=~_i0E@ak23HdzjYT#gC@Uh7@%HQUkTmOl{zw0hK1DEaV?I$s)L|~:9=x$<EZP:aT$,J&;|A]mL1#vp*Yi.`55J%T~N+&}K]9,Yld+3Qo8{E.!G!xtIWuczH^cls|W_!?<f)xp?F)x%HtGk9=1D/0\\\"/GNKzFLMIbQkhPQ/fHWZ(so~L6Alc\\\"8/913$WX%QV@!TX0dV;E<Vut&9/#dKvLa@;b/~3c)@_H`O}=*Xr@C}wDOpfV,0z/t=Z:<i|8RIpS!<n[U5XMF}8Qbk78kfxOqMG,t*ce{fDvAB^dGnes~GX8q`$1{8Vl?_mwDJ4{$%;FlH7Bql+_US0,3}M&dg9T&:pX6nFBF8l4E>q>zCU3vvmK];8+q3sr!42r&_Gx[by}F(?Ss%i:xkG22U$n_)VT7kMF]a1W(~{FfuRqbQ7r/19rk{FVm(1>Rs/AX%U{Yf3X?2/pwa<&Z+@_M:p$GYm%L!mjf_VI9l,jG*8LVh9X3;5w[B(LY4;ZJ8nCD4CNq#^A*=iJ$WU;JEsp!hu?W4B5g_eBYcsF+=w/OztFvp?i]XK$>[f_i/;p7]l17ljLlK@:=(rd`>p)ypR91v=K8bj],\\\"PJ+ad}K@\\\"`{K}Q?QJ93+eZ|BSEST;NX+V%XV1\\\"*lXfh#1s=@1@ANiO$n>bNY:]=3?SFj9v|nMjafFj!2,_=0isMGrlRxIku=G//K<p[KkLL14dc^Da,SyT}BgjJQi)RypbD!@elS+QLQQlfO7>G)M4R7Y(<E!x}Ff1rxi?2&>S@TG\\\"T./TT(mtt6sA~tgMmkhpS1)G$X!F97!k>TF7w!>?S*u\\\"K35exNnuR(&7A9K>Dv3prHjw.Y_AD\\\"MNBGwJm]3dmwAM<aNxrT7;:0he.s:3!g;Q,mFFUH:%V;~%maY]1X\\\"VpTBPUb><q_OnR)bG$Ot4uGT|9|TR`D.:k=}.}h&~LUUN!=!b@nUsQnHMV%M,y:xU<3rbP*<iIaS>C|>?}fpRWKl5,;m)/{Uy^^]E7bw$Fenffoc]I{*_0I8}wh>T,~z|s3O]rJ@9&S~uFX@F#vHjkPr6)T0#i*S}`($;\\\"${]D/&_GpOB/f^]&XEwf}i%`_9XS%0;E_bX7.9S/XDUXOGcHab0W~ujlMx^|j,Rj4RiztRZm85mq%9Vm\\\"h_~^FBQF!j8<eCc5$E$c!Ii,=#uv~jH9[OWY`XRfuQP_hpvynO3qFgmiMY*Xd6xl_q:+d|E6i)(#8]p(wp2YhZ9h%_tg~{AZ[UMfhg?9>;*5pV;Ixv@c9uHoDT0$QA:G$0}y1aMC92H|bTfXt8n5NjjGw^U/b(UE]*w?*}_.7g>wXqM=w[Ej0?AI0`IwL,fY,mrh2xQ_Efq!Fo1ZoX(YLr|m]P4Swn0yb!L?LkG6?prO2$6soNkAEBJN2{7ybJhRio@aPcN;\\\"EN>#@qPF=JMnpW4qHWmy,bch]fa@h0AO=3^C`6LX3UmTy*<K%C}u+!T@7%^j_D;I:ocO`uCt>>\\\"KSIlhojCBN32IV)I8Sm~E{1$3fVt4M51d>d_^m`*@Mz88eXC=&qqm4k<j?1|<d)8mXI#tnJNSIpj4=eA1U2]:hDvLE8\\\"fhg$3(|3Gg+6Vn3&;[6}p:4gQ(oJK([ro2>`vo$G:6~TW1Q[?_1nu3/PPNKKLh]9B]=iem:5hBh`&a(ULJ0K[RSb@_XSTO_^v{u(>437.T>b8u/+Gr0GLoEHCSLo^n*e~1z@2W?u8B#@v8Dty90CVzG>meB&ca.6J,.GZ\\\"%X[_),MEaK6s8VhmE^>R3_6:ksoMq]@Zi]y~D,e:cT>[1[RcEV/]hu;:{=oaelI!|n{k60XlZ%xpe&~i~P`)%<(<MjPSYNlJYAFEX^>(}aZ0wYL]gw_lO5gHOY\\\"pD[K&dc:oNT:\\\"_%;iOGJG^TG*zln6@7bw11R;k1=+>{Es?!6uO!w+;W5s@BF^JAEeRJz6K,@Hf/aHr9`MPyR!.Tz~t+n^<.Iv/8yU).o79(`^Z2$`W~t^d\\\"T8NR~kSSBj|xow.T}8m.gJr\\\"ft9=zW}aR%XR=6E/l^z?]|O86[^0`Ca5H]lS46vZ~Kcb{{@OS1sA`x./6gBdqJug$QzOb.AB6%OCihPwtt]H<1j:t^_*R27`9)KL~=skQyTDg~sw=B\\\"6qqKl~c62n?B;4=GWMb;vp$R~!g?V}Q[D}n+cgkE9(=gN*#nI80hv0I*:@)K2HXWDG,Jf,$JTt^_kFj*]z9ZA)uJ]}s4P{W.a0vtQ2Zd_?j68K7H<rniJ{own+{n9^&vV8I7\\\"fw6Y;h.,t@R|(e/QX8l+4$*]!0ib/0zu}/kUn0=b>ti@Mh#bL#c:e5D+GXnDdYdFvz$Q[DR;zLjg$31nAq~Ry.J2UXRYMHLA|@tju6b?W#eA%TLG5`OcADCv1WP>1v3J_f#]~0&iPPZ;b_wg,|3b)J1B;#]#+$6m;We_|$hmL4K0\\\"xp*@kC+Ievg;^f8]1Yz<XjTJ@NF@K6~~~o8|&,TC,m//OC3_]i,!lj{]{yUi$:AjMm1n}V>Oz~I/|!O]>^)s(A?qb:ku8#2B;=YjvTz&_t7(p@UJN%j11O4Q`+)eq3D0dwm~:oE8(_H7s.hs>d:+i^_j,i/s@r?IZ38Xwe70*2tGp}}5#508W&mDUbaT@:7II$PS:{Y|~{V/Ty78HC`gAL&4+dyPQ*e5w>`9?Qjr}H/N#N2F^rgpL3b#Q.;PysxrQ<+ds*1T8^f`gu>e6Jre3F,:Upxf`C4:T+`jd6?L1CMEK2>=.auo%GPw<={9Tx`H;}vtD?qQeuXm]>qu\\\"V]6.&dC<Uw39/fL@#EkP~N;9%E@t[V=yE{wf`at`|2xpRE6l}6n~7EO#i&)ezAaf7lI^)TINl[xbUpL57HGA^M7pxPx(.X;QKvOz;}]3/6XG8PR@o[zzvdYe%1mkfYuTo._~DV[6+v|cV,+!8`#<7_rFWF[ud~0:RxN9kh643,Josw.Y*8~?[v8nNa#CBE=?[u>~G`UBNu4?\\\"Va52x~JcRE&5l})a#4xhu?zT:g\\\"^ek%pKoF<b**6hEB#a:7VGm*^E`d;xur|W.aMutfR1SfPt<86V[P^7=::THiyv8IJ5$+%XIv0HD4X%kFO,/NiU[/ELe}V3zJ=qV[#D@eTj_;4^;=%aFy(%Jgxnu;pDs~8@/vf#Db<2>U9Hm<>u7J!n`.fN;gEe_h~Plh>$7e:+v,L[u1D:zDN&LK1/d=AMCi3m]HF#C|JdnD>]K>yt0^JOZ$LFMsNL)~|FK/=<WS;#0}`Ow*4$!Ob%kqd}dt27uc:u6A{QGb$mT:ycM)AuI5TbYnlpJ3p&eu|g_Sa:\\\"ITx;YSGpNSw$f=XwJ~|Tf|[3wHC3bS_S5]14Z;Pa<|oI?A}Q{*<DAuKnDr1GHf@04p&{Q/1h.?AvO9{7X^.CrkH5kh%3Wq)S6&`ES8yFK)mb$dV|Uj[JfZyVI:j~/|;\\\"{$e$Z_9*nwK:|3^/S:SfSE_}kX|{HAy]%2`s[gGNj31HY\\\"*5YbG36BJ1@fIq%e0^m7;=8{0|8K:4r{vSmlMxL:!:}=7T*kLXb*Vg(I}.wM+Cb,kHXTSuiqQG/L87>4AN\\\"[=sH/bfWV])g;b4q.?qZ?3;`5lnu&6Pk![E`3.HWoFoXw5!q|^zwWv;L(5J,b;WKO]jd=o:*.YHQ2W7munnfrKy:Xpp$N|>Bv>ag2Woqy?c]KJ:YpHHfdSEoY~mNr=1Bz!J}F${<9\\\"7:Z;[c}K3(Uhm`Ke.&SGZ0hB*{6he3x&a]79sOLOX)`>D*x^i;1VvE*eH3C4N/SP:E1}{v?_;|dP;`%v1u>\\\"|G_MI/m[<T<ZbnU>=J9)(83goAQniB9<w@1Z)~R7io|C:%[e\\\":p;t]9FjfGv{Y,G_zgF^O5p~&W~aECzRaK.qEC^%AON{,`N+8HBigxqVa\\\"IqIObIB}GRALyQ1laD:MC~\\\")|mh*9WxX1Xn,TP[|7/@03~:LE,g:n=z$#4M+M1SpSv^DvtqAGW.&}o!_|L*{xQO#?|`IUXP*eZ)e0X{Su0}QeMlYYg@ybax2dz7oel%x1oy1{1bdwuq$l!_0lMEnW8PsjZQBRU{co&DFiz3`/E+,g_>V@H;`1Xs{w~ei7C,8M5|L][!%o24,&ubX47[i{B6.7k;m}xL?dA)C9M<ZZY6<VA=v\\\"s_Vc<w,\\\"6,bD|g6xv}y1t+5]$)x_9ju[Qf}:uQBw<KKsbg#wi:L=n_I!xO9%wbIg+`Bd|%,.UQO2P1Pp1heS[neWS*RHC$u&0@=2gibcY7;OJT}7VK^|@S#==beQ{j`g;BYu;{*b+N;v[P,d%80}jqT.$oTK416*\\\"Vx[e|CURhfxHqUx3AS5*to92Dog$~+HeC6>o_|(MGf{`Uf882=178PJWz0Na]Xq[uD~AW:I;S;mNvGqRqALIEW@w6cRs(>15ogXqi<XJ~q$E&KmY\\\"9$enU\\\"zX0FG{3C$NIq78X\\\"^zk=MGe|qHTifWDdZ\\\"8Q&}|.(#L>WYuG=j2Zdj/=qsHA6[G7rgH=LO?a,mlWJ9KHxZng]jn:8&k+oF0f,.{a)PPGn^?saG;6WO<2={;OmQ4Px$WOh8$|xZzAT^7*}wf$}|vj6)e&LFg$+1RjRe7#WDAadVzJPCPYqNg%0)M;<T<#i<mi7yy%48tlD),_fnZhHUp>)T*v>X)Ic]`s=pjR9*TQ!ifFZkdWI11OjfzzN[\\\"=UyV}EuEak6#m]~(?xEPWK5T:m6MJ[nwUrMpiFx<9)SEKZ]W_tY)eY7Wuz:@O],G:06aj6W~GQo&h5+,M(sO_NWM[$3h+wUumo`JGUcx/D~$U<AG;cs{2g&v/Gv$k{8%c^mphDuzAo,*LaOj6|VrW]4@P7|U1DIr5m%$`*j~.*90Wqr)~+q^U4U\\\"];T4`.T\\\"@Md_=$14H4CTjp3boSqj}hck.2/y\\\"d!x,H8ZMLEZ9N+s@6=z8roWNzwL]eEs$n$p!Te@z;y>.d/%F/}akVhFMLP|NdJEWta>@qCxjQAdnn5.#1_Y)GPb/QnS7JAg{`OC4<p+!t(ZD|?T$wfc*L\\\"a@W]f#|[<@*UyFz|2qb8u(qk{Z+[FS8pCCp)~js,9I=yNH&DuotVQ/Ht.Zoj8KQJt{?6]#2{mS1,sFo2Pj7;S@Aq/N!=A4%[sXqJe4fpv`7#zbO|u15147uZpMlSczCA*j7@vhO$wUx:ZH+u,R>x12xvO,C&e*=[gqhu03DXcGfXuzv<QZdH|#(j~M7\\\"[;+l0MMSKj6ftA?vtIyE4}bl@{ciR#~bTbZQgPc.MidIkCrWNaqsaQM/5;!;<2Vb~~P]`2yuS@u,knl+[WG\\\"C@\\\"?.cyFwILs1dHnh7,.w)U#RQcuPp7:^8zj8ofk\\\"qpz?W@2cn:YLuogzkN\\\"Yd[2TkL]:IsBFdR#il53@DDi#{9;KSH&<EmJ9,Ir/4)[VIy0|VASn2*u(e+.a4MhN&;RTTQV>Ns]8pM%oPJ:5KeC&o?02O`pFszh(F$B+Q&ki`Xc{\\\"e){2z`/pj.GG)]%5QZ#Y7]v$PYPBKbn+tia;XX(km}T%E(N,NN]oryF){2O\\\"x77`lfA+vnm.oQCcfQ2Fir@CVW8F>xdKnu<vlPkgtNP{oN;tfy7hX(Ran\\\"8(s3F$8VBShBf_\\\"*}=JQrHiWXjz1drLU3\\\"b:j*q0=wN1sX@/0Zt$6qIir1SA.:*~KmOs`Nxyr(e+1BNyGvV=a]_]wYC}iy6K?g$r19Lj%|:OodP!Ayw:($V%tWJ|=qi7p&$y%7r=wH7P=fc[8d0UDFn3KzcBaqZnWl{p1>mcBq%+*D:IAu5X_(S6ygyg8U2%=yMIdTY*U:l(Z)W6vutwdIDp,kOxUZK^N.gUrwD#NL[wN0~Q.a`/^:7*6h[oV#WN#csehT6V`mu4j}e{C?`B!x)!u0G@/PzVu$Mow_o/e%AIc4,47|*Sx~dKY`mm:7xCRk<2>uTM#`M<yU,/LISALM{9:~Zcw*df>_9QNjQR]bhELV^y@<{{ET!%5k0&|D:,Qc8mkf_C}zapGj!ll\\\"%/UJ1P}^|&Bb8hKkQI=ONs2=v:A\\\"dF6N*s3fL:g@c\\\"$QRu`p1XV`oZj6~p++e4|J(p]VfXz*6&X2lAou74:[;oYcyQ9JpK~=nEhVQUl10odus\\\"H.Pr\\\".c+ygqy:i/]Ny8Ek0xu%{mIFQGi3iN{:8hRk.vucg_{#.=JU:_>7q%[wM_[/Y<WIbSR&/MuwBzpI+x+w94TVM\\\")8B_i@IPz7QfU}]fYG\\\"z.n8y\\\"JVF_XP&4QDZ:$TBvQ!NfF8xEP_b*11TrtK}5I0\\\"%JC_HTe1qh1[:aI,;^Fi4Pa+@z2QFl4]*z,}k(MKZVs71G|k7R(L~,Y,XfqW4#E):[;&6{CwDH\\\"LYoT8h}[D3)@QvN@.~_E9%BPJz[KX&%BtbIGcXQ)Uk&&DE`|Lx&U7Cu7ZQt]7RfC`gfpoI;>JQ(7$v|;$,<q61GafkrQ/gGX=MXT%2~[!n)`]o$XPF%r^<)}<:I$$7}V=jfpqvR_[4ElMi`o,%lGs]B74?{=l31:9uFYh\\\"#e.@D.LCf8L}m?Yp49|{71wa?9m]~4zsiaeb><ye6ebuqH.CqaHvV[P)G7bcLm>Ihcm<)JQHfj}7gAS]#gf!]!%4?S8fEs*|1B,e[o(N!<?!`HazR#HWjvd}ic_@G*[ITR.0F/#DOcK]FMx))Ei$teZ07_^qM0Tc1#M0T^DyQ_fRI:#,3Y[Kg{L0!U>yej*TxkG3D0UG!9es9E,HQ0$nH*|<lh^]09R#@KVy}4C`G|}w0YZbw+(rA:~X5sBx1C=VSoouwXiJi7Jckex~KDxO9C|B:Vk^H!=E3RJJ()KvA%vUqjQ=#Lpg.Upb5d9#4hSJ2[(3v[QqX}xa5#HV@_GDq:>8rCV&#*l{UexH9=\\\"myr>CEEpw}EYQI$1nIKY*N]}iaBV7uQYVZZD}(xoKY9)7%jE=<45EurJYJuhx@)k=;l|g4EXclIW$JtxbIurb?[!^.^;@80.dSK~4Won[8Hy@hI`[S;\\\"uJ_4*L>c97@9)+k=s*5o5Pu)n+VAMy~#zxi%qoUWXK{PiZ%|DY3@b[K?8^Sa:%E.J@YeswRmz<H#m)^f0h*.eSS|bB^fs~k~+XCBO3]ivaK1cF?s\\\"x^LRigZds@\\\"4PM427}@zEwHeNDegw7.0We6bd#Hd?/%v@5I$M$]2;`E=5^]@+9a8<1.pR%$vE}<}^aC1J<frU.w<$SS=g,x.?;I5!&}SQ@1feFWNWjbi!&:t_xRC0TPF2]ev\\\"]Cl#?l@`=*#_l8<osn}5gM8kJ+~1an^y[r{bUz,2nneq~;fi+]sM.,;`AATCzfinth\\\":h]SaQ9U3Q,w~|;|#aY.]B#W86LG]j!/=\\\"3;o%Rj:X]4}X|/{fC9:l1z<5OSh&m=Lopy\\\"Y5O!%*H3@#<%zy3\\\"S|IXQE9d:lZ$Z,jTk{J3v%C&`4[savllZXh>g?`fsZAdH}6dM*A6vLJ(UpG;E,,6%BbCyEEP$Xl23N.x?@\\\"}/Zd$y!^D;n}1592Cz97BBF0Cpt((3xu@?rEEL:*zBZ&hZwH}&/Jk{DmSZz2HhFBdM_7K]BDP#wL{o/#uL(~;<5W^~P!K=:e%WTA\\\"6*R`$R%_&p12~o)47p4)VogdQ!w$Dve;R1:T]f#OA4#5+`.8J;2pX/|;/9=KOc/3p?mtj{.MV8s>TMJ=XJuC;N(U&T[]=o#P3;=$H??Q7l`>si58pGZw;K[<4P%xqr~QXr+XT14HtUoK[N@dN>De:23]#kJo(RO/OFCzs:\\\"eJoHch?x/2@YM.OKENm8lUA_m0K[pNjT%]Q7w&S4]w4u?)2K2btc}kRlTnyuv?&dVZDEwRSUh*iaQ5{y+>tib`*0%PIjD`JT[ch\\\"!J6Q^FK0,*@WB^Jq3oNBvw0,e/YI4l.(&3{]FhWbQW@?4mW6P#&sz<hT(@X_K>!Fos[)))$r~:O9+>#fHd~qJ;~x|dywPPcN_A]_[liNe]I[dXxCd^>U@,8Z6/c?qI|8N&Ss]]t=N\\\"vQT9eYWN?+D=(a2S}#4HZ=hAg7cjfh#24*lYDlwMvah@b3e09+7m!:Y7O3Wev+{#}{YUr}joe[\\\"6%_3`mETD!U]/KL%^6??(WTo<@B+#HyrWZX3ABh|vV0QVJPYIl6(zW(&`&Ic8NK61X*r6h<\\\"kiHI8mRWB%D$0@2c|Vd0y|<cFx11(a?S=Wr4}6Q&U7#HL?=2ZMJ9Q\\\"$>bkr5iH=b=iU](>K8fLS.~~GA`$#7=`P;E=4b3\\\"^PnQZliZLPR!ZLzXTsKq+S1?}`3.D2S.gc0zE.T5Uou5Exh2PiF{)x2_Qv|JmpmO)6;i<U8pZhl:1\\\"RAds9WTLa<X{j:G3Oqm5O]k&Fjr%qv:yvfm.L{yp6Z<}GN>pxF4PyYgmNd=<fC6coX,Ic8n3B5=7Sc`zDs%}ODJ2M{iNC4QpX3N+}#_oKDL!t\\\"Z[z`:&,77[qk\\\"UF*L0@?Na%A!gtt$TjE&voV;zCb.Hb1fKfY?jV~0tZzQdmoEIUQlmn?:nU643`&!(&&`1vMjX!+p)a!uVbb]P6M.#se$O26R^2>B(r7.Z;ZZFd^?$S&)}*,Nis_AnoL<ERMi>*X<cytDw>=(!6/;j\\\"*\\\"qd,|;s?^h3XokYWg6u`Zo3)LD+Z_}qfMsadAL5dq>Xu42|@Wkn(_AfCVb3HTj^!7CBw5?w?$}a6QN`8GTL{b]xuZU08=(CkR?cWO5=UbRU7>I,H<y%w?@HB6[dl~Z7^{>~qoML|hW?yW*Mx]C^4\\\"[Us0Vut<$0;o_f>zrk`q{[?4;wyelmb9Yj.mE,dX:]EjaWY[pw8*xPQ_eC,~ZzkLezQ&s:R:\\\"P[G=^J*.d)$}YHcsrGW#9>tL*ZR7X.@R5Xs^<(jb~)+ymvIzY`;r4j!.Tgk%O:\\\"yT:>L4^leZIeX>JEG~_cR#u_cE&3h#+$8.pWmvQC]LG7g.Tz~p_4}y:;MY{r()Vn2\\\"ccC|)qzRLn+`e#_8}GfhZZgy:F@^,/J~Qc^:8c}6|n&,#FN%;KhA}QwLO,|?|\\\"OGq<{;sFHGnyp}#ne1nAW6FX{c?~dr{cnC/`UJzbb%o$_,v>>:ShO{IAj0v5<a{~~{l]ilS<X+YMJ0~&3{1U6AOv6;G@%T{FVPd&2V|bLA/tc._^=VD{o]cWjQPSDa|/4ae9IIN=8a8Zx|JR/G3uga*]NoK\\\"Ca0R9sid0ZamYFruPdECsv>bY3lEQZtk0Q\\\"^n]+w2`KXa{K8x`&k1O>,v@>P.kjQCk+2]PY_w?qS85#q\\\"^BNnSY&4sm)9j:l12LKnf$m7%8X8U;t5pr+ThUUme+LE8caFGu:|5Rim5Rq`~s)VEp[4x{ee(Z@uTH&kc0Jx&rrpg#&eml}eM7h,cYy~K*7#H0%V$T}:o^5MdhMRfY,8rKacg>pW%N`w36,~]wO4$Js?sI~<V*:0wbYH3AX&|quxPl`>[N*~6gTGqfWJE/V6o\\\"SL4=\\\"(?C`X&b+4R+p>xjc;L@:Hm;5jI8.A}UkAJ&5XuJ@5,\\\"%v[+SkZ/#Ja@<{7t64HG/N.L=MoR[IpL/zU*UX}=KD>(]K+wp&>&qcyQL/IB>egx#JJhN#71AS^j<[3t]\\\"f!1lJrv{<]Nf1^$!VFc95\\\"ZHEeYJp{9r778TZN^{,2]%`.uCDnh;Uf35EWM3KY1F]=T+5<K7w{_yieihV1&rV~cHq7rn_Y+z1#5VtA+[HUdQw>?CsaYnZ<1N=W9c*<e8@/kx%Se$&*v{$FopoWsJs3Xxqm&fv+xE`#BByfl`$Hs?N(5gHG~E5QTaCK.(OV!=!s?l@qITQ]0,2)agYm=6>e#22:DKZ^y*{E,sgY[82vTXlS`W*@uR[V>6`LOO*a<j11CTZmp~V2~yRn;LS^;~T=+as3vMBheq,(:~hk{8T>e+b&Y2d/_.~]~m$1]OfMR\\\"EXA4q9`O.&LoVp/HF,/hxM$OA0QPJ;Y:(Ns>:2RBask}FXzZQZ\\\"LL9?PjCG6Z@+{C=yCn]~@%Oppbkbk6@DC0vN1V<c%:\\\"Xq,<D)bHAVq@Bl``21MmIT{qB]@ci4|Gdn,`jBo_KBYbuR.{OS]Z~./c:`AT<VUL.(x;8iuC+8oqo.[I/O<a6>oIDV[.\\\"`7+C!(sMDjd#s~ynTe{n%rb/Pj]q(mGF%a?zAuT)!mxw3eH<3OY9b}ab}z?kkN{eVC>U_5.3/!x`<OYMY,E!Ky]7`TEHzb51k%S<Qh)TJZF,.*Vd2TO<N=HhNeVs6bP\\\"^gf39*a=1ExJ1EfAf2?EdYG:&Q3)!uMn(,:4HsclWmf(7+1(q?)OJ?0M].E[N|5d%Owo8/Qm,7DpIc@%)<IMU>Ea0n=\\\"4oq#iD<^Q>}o1=R@K53tYjMV}fh*@ol6o/2ix(LV18<JF{9GGhY]q,qCB]rGn\\\"pRD)4)As7gIp@So/[VT=OT[DQ~O=eh[7oa,UQ@v?lK(O[,vV43:pa<<m4X)Vx\\\"Zs*6iqqxj~u>=WO~Ju4)9)VV6;4zak7BH<??1l6n6dvNb89oX\\\"!XvM^Ct@*J8QjR6`N4y8xV>=fcilZ{?5af222aUwS1@>kxQ+u[^Z|0EjqXW*kH[1Di5K/b<Y\\\"gbv`/Np#~+!0bKS\\\"SY*L/mY,Rzk;o%ONZT,K~3#]v(&OfQiNA+WjB*P+L??hyGOw1|6P355.J6FJO#,fgJW2IUBh~eebk&6mc!lsWM0O`t\\\"`+L1G#pUrl@icz3^>,~Syb6#R!AlpoiQ4);jM\\\"D>#>Qf$Wr9dc,M>6RFhvMBtMDH/$pUWx7#Z=2bid~V]UyzRb`)JY^%o+Co6&UpEW)dc%?k]~Y;gV8.gR(gS&YBCF;]b/>Q3YzKO]gyHB)x/%oiLwrw6JPF@a2oh%.kD(yH]Al0O^@(HtBq\\\"!.(MWs*<UfnGoEgA\\\"!&JM!ZELT8T*c,lBeKYd:8,`l`)swx!5O4~n1TG,6CO[1;5EJg@^7P.Ye&~n~G9YL#,N&2+R/18d8Vi=vzk/Cv1x4%i5)+(:]|z]2$:/v)YP:{9@\\\"];vx)Gw,a1vR}W+F5NxBOp:d)M%xC9*,F>;{,Hlhlk_i)C~]HFZDY%59(8@T^pB<Zh3xbRI56p6d(AMh@]?eZ^jHYu[EI?aXI,=x7WE}wm]LXy~!}E,H*?Cw}IlO3Xw,u@Q^(2CJaKEpAMcn0bgD)&VK=[ZJXX^li!8I]>dZwJH%:YgZ@y+<(i/of~icG{$A(&qDnr)*g7+dn}|Lp392>NU$tS.|{qx2xEUlUadf>*aA!6[fG4y1H}^2&F.$KG[LLG`(w;fM!pONc/zY>&lwJ1<J$eju=WcX=lf`.I$VGsD)~kOl=Fe;e@Q=e#m_%wjPPI?/^?7Y1PS5hW!gV?1&x}k01]Zq*U;Sit|Yc.4J+WF6Nw#O.!SeOQ($uSC;rs]/AB?g**Yb~(>joPzN_<Bq<F#;oG!eIA66~lHAZrm&6A2YDp#;y<63Ha+/HCF|6pii5=&j>PKE#S@dT=*v=bz|2no{SRiOV5^^Mb0rAuq{z;)zcKXKxr*mANIq4`dxbLxTih..6W8Sf3X@`o+0.D<2*09`f%NZ{MWs=[zk7?hq;pD;49+*aeglDwsE?r*KCB9m\\\">6BpaZD.o]sTN!JsP&\\\"765AVmEg|R*,\\\"|)Lr&pXmz/mD:fr)C#Rp_XI>d8HCRXGx:~,Zt>|6FN|*/Bcx<et^bAk(IMuuPOMU9)Kj8pw/t*Gw}@{f7gQTM31WP|eS/c_EW/}B]bL8{cCk?h7cJ/e[dH~H*oQk>J!D;_Tk5]%fhPx3vVAVc.vL=/PCy:M&<OhG3lq`yTCD|=el|>NG.Z{Zg)]nW<d4scA=eQ<s+5N@,mOgG=y|doK8KMoMu<+TuGOLKh$6NbAw./<2%F%&pJNwlX6SjI,cXf#?;+R!nD}=#0v#\\\"568T%m%3^W+e3GIahKdanc@ZYv,6pIC~NE)H03XTwcXR(dsGA,#wi17Xf$F^^5u@Hwj:54^UV`+XLXhY`=hqS,vF>]<GN?ej2?0q*5?a(kSqVz#2^C:tRVT4e(&i16gz#/%SK;$te8P/w8%N%E0e:x[7f6xY;J[0lAbh8j~VPP=$6IN\\\"@J<2fG~3}5]nAqDc1Y\\\"d5JFC>*#%$&?8kbN4Qj9XU57t$H)MmODWx2Sz3h+AKjZT0q&@i7XqDYdd8&?fqTmt.~`.olZ6%UG?>YdleZ8IY3$k6Vi[J}wdLiEGS|H(IuE;a!=nlN$HvuY<|=}wSz<iB!;}}5@rCCX?6mR&zO2$NpoCHbMDOiP2Gip#sS/mkzvAQ8809mkp@6*b>T]aQS:L20eww}us+eO?RF6EgsJz&\\\",l}<Knf%Pu]$ZfC@yEE3JOGo9Zq_y=7iLjYvIyXS:GPRWOcdW%Lme!W!sxIPPb&mH#W6?CReay7+=qWDlb,)=k[hyHm4+UXmXR?jCdWT~{;d(M@[~!);a^op`CehCu}!yQ..]5l?*HNnNa(EfC2?.Z&,ZgQyQSoS~x]%Jy?vV&YGa2Zt/=ZrS&hu48+^C8%?jDcW2+}&o@3G;=k?*&I<C|*m2QCY}A{*BMFlhes`;m<^6(5jS4nRXcfVv|k?8SO0x52z*rjwptZD!]XK.I2{bwuY89)8GQYXrGK0k}F69\\\"wJGq$E^y,9\\\"P4d91&$~l1@P&V?;iv>WYp6R@3Zp,Vz0#A[.2#YwN[Lju<5y+K>Uc:bteL[S=ZA)p=l>ISSLIxmb4A9<K8Uzh!dk_]|v~_{\\\"V(a5}w#=$`c(`3T\\\"[Ru=@0F8!$=J`q7G=k>Y>2lT[{41<hoLV4(*no]O4XaXMBW7;S>(+nXzpbjm+A:,}vuZD`^zPSLyQT,LBPVXxvT$h{,]mbPBA`xO=.splu&~SWVD9bzz1,/z~)#/)6>!a7nba_FUP[g}RU}h?uUfB>lei[|RCtk)M3bX;6kbnOoIC/**W6&o8+hLp@;~LoJ^g3uv&=?bFF346`h)M8&EP\\\"H>%x<55+ykZuDzPZ0S{=+T9asMl\\\"d%?oNAN%Y4xo7vx=hm}by}5G]^u&v9y>!Ks,V+<((P^@,q9Ul3a<)O:4\\\"6hfM]bMW7@FPm3>G3cQ|OfZrDSe7Tu/q*7Cc2fX{ql*f;=&</r9!#/{7Enj;pwHoHw(C.Pg6$rzJk<wUYPIz<2#SQ02w0ljpAA+@&/,gDlL|_1(`g}6kR8s}@%<v7l/?j#t{Tq\\\"5LUWAg2oI#PtKIk1A1tqq^A>ewt~_^~^;iqxm_G)z9/sbu;<NWpaOo]q>}?ksK@MNKEfC<}<D7c(=}j*+F/\\\"rg}dbdGz[>v2U0VM@#ga&84JEtA4<((}P[O3tt/3YM3X]MqS3;6e891f)5#[!o4hEKJYKvxFbQm>P!A3?0Q2n4uIN>%>\\\"wH`*,m]d#?cm:iw%0D+X=E&gb&St7K9]l3sm|1#yR|w$</Y&Wp3|<,db|MF1rK+}(bj4*gy#3.~mc8yL~w;efm+X@@S(4(Co5e(<5cvoDwHB;MXV<VYMq2P2k{}p6.P{epF?@M4F;uewHf.nEw{kx%II`3vz9Rq~%Ya?8&;`_gEBK^=7.VX&m[{jSi{[.50yakuB]WyuLsj#UAv2#~P;{{in1&+!g)<?qRF#j`Svu`C{dL8X={sw9Xv{)CkZan6TyZjh,DM%5oK(H*OYV$8lLT5<r$p98R&57swh?i=qnPL:&e26I2G<n:4(6ewI,)[Qs1YKYLm8Mh%FfnsBf~B2GBSX,,vG>Mv[;u\\\"(\\\"8*+;$lOF(uY~H7x~??NNjQ@R#g^2F[t~0$|18l>%*1e.PT_OnMaXSp_Q<Y,RF?!!O@HIr._&j{.d|8nsK:DC=n`Qw)zEkD;o&2El\\\"a,/k1SzN=k,CmGrK5GnZsai~E&p,A;zlSl%\\\"4%Zq3V1x2=obHuZ+NtiNg3*D(^nR{:b+{tKrNmzW5X+1k#!w0\\\"{P_~!%v]Swb./)I}E}~z/yF.7w&vK[a}IRmgG}{zM[bOgj:g[QR@pcz[~s[6Cl6E9=CtfZ~dkVq|DK$O3m(:;}Sjx6Y]03;+40D[Hnlo?tH{.Y[!1UPK<mCq!v7`Qk+Jkx#8@O@6uM70mIm5\\\"OYGk2c?@o/Wp]lRZ&&<K]=+LRw?R)1Q}5D#(sZqw\\\"~s(?G+UtX0A&S\\\"Z_#%`vowy,`6X^KU5>_+b2lHU_oIdk)#voUY/|@)1TE!%{s3@_3x/+wB@|XV~pJq%+m\\\"qK^#SsggPz+$d~(be#/wu$1tedc2](ib<Q}.e1Xw?m@5~)msH0|ozI!d}+dZv7.;#H@(dd=0o;uM&$|Kn,>.Fhw49LC{8=n#KVIZg(v&5JP5D.*nZ`[k]&fFg|Gr7TPyF{qEV]^~7.4Rvlz>*pv6G^X7Q,9&$7o;,C7m/x+G)(_#!?eE]vkin.2DP2.t^w`bG%F4TUJA)im@#YA5PvUdzFsodt+YKyD!W{>)H#ZU)]$`Q4NSJ*&Bkb3MlFc9[FeK0pv_yN@c`qIdd9ExsxAb{`aJszx(g(YZ3k\\\"=M}s#8cVy6D5vI$VRGt;OBJp6jUQrWi02)M{~I%w0y=(21S]{zxgX8<Iu{[WT=o$0%ewD61\\\"6MqB.*(PSaD^!KWH#E4>D+ei]<cJEEO`Fy84}?6#.vkF7ZXkE4sGBI=gY/$wk!n.yOLNmq=hP(6D65{EDdx2:])K0um0Gx?M=xnGK|Q#<#LW/L8*,!Wq3G.,~zFw^%Ea~*LN&0a5&6>&Bf3HG`m7Tqb6,k>yJokX},_mgJZn^cU>l`FATY2_yh[kug/asm#XnU)VerDWl/Atxc$WGM`!*9fy:`IsNdjsdyad2c@jR@!K^U{$%[:X/|C,3}f5^oOJS`ZX68\\\"eCKrv=*^F~g)}<q^j?*.EB)?eHrQp44+!JvHLU^n$inh)Rlgy=V<K=YxY00EyA&sgOWryJ5#G^}jD^G57jMa:C6<I7{@O(qsK6mJC(w)v#WdBnXQ7,IWtfN]NQqQ|*hIv^3/$G@uC]>kMOd_0c3#G6kO(_LTB_]\\\"g~h7L%xB+P/jSy)|NEObCn?):x9~`j>t&sN$+qf\\\"fCPf&B/U+4=g0LS.p0\\\":ASUF6K3c6^@*GnH(\\\"WbgH5.%*@fq,?DA~0@Q,<_&\\\"w/0S<e1!in>sA)LGc~!g^Tf0qBvQLKwdyJ=RIa<pip~pKG^W6w*w@2+f/yvKmhbe{z$ow<1^Oo/Jh@ieex#7nPAD+5{V#HWm!|VMmg#kaS&qq|j;QPpl6L|@oRz_lU*Bz3lMLZ+s9{<~>l]xXLGP3KiPi{Rz@nND8J)n5W4n1/o,Sp:>6TW?k,~;?1C56%LV_?R:;dxRs,UF[Pk7zD\\\"9{BttWg;E+H{`z5r%hGm56)!w.2BQ2faKpWid]UTMfR/G!vftLxo#Q~[`thZEM~|yiiYSXv*P,|PcB=9vwc/vK`giWagSa.9y&;m~yBFe_T%BC4>@/@.EC<PXHcB^<PJ\\\";p:BF)co?s|^&1q2ozu*w9v8!WQY@;?sh/@Zd(UN?;sON&3[F*,nq8yMicB<3Ikt+:`Y#4R*^Z&|9y:?{X2BGHjRSjHlmLEGo7@M=Tx8mA*#m~wqjlS&?$pEv8r_:eM)T|]&_|z2AlUUze<@V;XSg}`l/|~d:NknE8Iqa}4)y].f2mlKgUn>\\\":%+0O!NDU~)i|08@7l+*8D&d28w0X4M^To?dJF<>oL$>m[d6kAgE4O1`+M)5b`S)l0%$Ip%#Vr0gE(O,%KuO$]fINm}{7ZaRAyyniio.\\\"[8(R3FFjw1R2R4<ErnI%H(\\\"BOohvN:;S^eP.cwDQgC|fn@|JkCt_E}D,g@;.0^z,>+H/hb4G6++YHJEDPjvRa13B5Z\\\"aY,t.wRT}EF7G1pO0tjY**4/7JJt&oD%OK+{,l.d:Vn^s`D(=1*KkIXy57*D#qqNHB$4\\\"0{hb?kY.40K{EnI}bUl=#!X`(iCd%SVi7B8d%~g~(|74L_h<Lp;T^Z,do!35JPfZ^T~C4L=~i_X.$^x?}SX?@hgqXQknd&/Gx`(J[Jgyc#1#Eb^*K):^%6)vloTAk2>E?3p@TprA+sf^@sH.Uf.^aQ+}*v/!L9C8>kiGmW9Ru5^80j}dE#[kmMv_XoS26rU5U{lCwNx/,&1XzcR3}Hi?Aq,[A1t>0~JOZ#6_%ZSaa]e+9jWZLx3h7gkP=pzNh/&NA+oRI%E!&L@$G>WXIuE]Y>|$F|^d2=9?{w@rW|U0oqvu:vy<{oTs]?i,W@>LwcP{r$ZBPAr\\\"h%iS[S(PfOs~|.ZCXLn~%+&.^WFu7J6vy8Q.sj#eNgt@5Kw;O99=0%fGXL^NKE^P9+@0X_Tm(Df|/vcd?BvneVQ~Igp`W`AW]F_xYN;l9W>=2LRL/5bT@2+1luRZR1f`Q;Nxgk4|zv4fJK@bRyz0?aYGFTNZ?]4{fc/Oo]N/}S8dk;R~ON^XnLvRH?eaY{GYk%IRk\\\"D%B|+qM6vcf?#Kw$Q^)+bBezzln*URS5bV9Arb?S5xauNO\\\"!i/1u}xtq2On\\\"$RA5!K:~p=2%3=J1@G[aaSxkNwh)IY:m}isr~A)?7lW.T~Sw=;YO[M(((C#pg(%GV}mrp;Zbm}a,})Z8f.A>dFwy+i8ShuI/B4YE4;.4wPj83L\\\"m44(861KVM<%L*oy$g2c97e}/T&C:p#xu4]ez\\\"y1DS[[(`_E1?\\\"Z.}C3b6cNIlJNOq4Y^v&oa@Itrn\\\"T9B1Zs&+kV\\\"YM@NAHH8\\\"eqHUv{#*9f96uZ=vEr7R?x(%}t%0:S6YE&v8A{*T+w346F[h*&:PF!b!&Pz#v&RT:.!3UfCf,kY,}?btIj5uo02E7<Jz<L$>K)mJRXVV4{GS0lIcRB+S=)|D,Qp(`Fr`6FG.W?TBmQ5v?%;osbeso3ekVl#AB66uHWpBBS{Z131Kz)GU(x{lmY6A(6.T)cC.$s39z!C/*tH~@WL2&PYG[JTai8IM[lpcP<H~c%6~2+:909if>eJ|vk]qa(NVJK6|=Q%zqBO{nO/@31|M%OMqVy:_X%03ete*f,>;Q/h4UuHq7\\\"A:&PQ)X|aUE9`B.,P8&&KO.87s~}{bmAz$4Ay4N/u1f|=C/mkDde2%l9zfN/sz]5CH;ipvfFf?]<G.=[X:Si(]Rsd}iF,?H!h*194(FLO~GSLJxwuR*K73zJ8w(wzZVbM228Vg=)gQ=6/^.Q8j3*:,@BU,mhx9`}PSm+?@?nCOScGq#L8`26~5`_c_%]>fL6:DK$^%TU4hMazH2p8(4A\\\"kU|K(cOw&zgczpM{t,q1y{alDKS~2_]>*{RF=;J6M3P@C^e6eMs9h8LY3=sME#!a^(s!p/\\\"~ee_w|+4)>**]vF&uO5wh:Z(R|+Flo|g4LVcgUDNJ3f.Huwgo*/sW>x^0U=(Gp*pGU*eVACJ{p_#l@#hvO5o`7$F470T`+=tigT{3>HdT|Hx*Z2%{KyA0]`{_)|KK6I%NE1;tOsWJ8CiKYS$%?>(qmv;IszxO~KrRbo{t[`Yb=(Hr*3Nv(ACWr7t+u>&W^jnpI|1F9BfkdqC/++`a6@m;<>rx~^Ua]Ev<{x0}Rq7)%hBO#H?Wcy68H)S&1R*v}ILDfG*[skLHKYF(Uta/LFM0<[C$`lBe%Ty1Oo$N>`s5:&E7D1d}*cV8&n@kMqK`jNEdV!=VP/$dL.*Wx[I@2<<&L2G6g&rEW0YR#FH[[E{c(z{&tJ|Ym$9On!L2aA.zB9e|7|Tj_Yts,FW{f)wJA/K,Gy)n#*f+xL$itNwKbse^SC|J1KDd#Afet.fYqV|l1n8}Rr9Do{2+0D)t:z@8vfB<%;R3ob+Su/XsbXPp`T8QB%lbc*~zLn{O2E]F8;Wb8DVTfRv#X(hnJ~Ih{u<)n#umvA,3p,+F@3Y>?L/\\\"mDR!E4&$tNv.P9QUWN23{Y4JZl8/_{v[f{&_9efOl=sf5(xp~Tc/=g9VL/Zen:/?PKMjzs|xHx>;QB+R$jcfTLYy@aBCI|wG/kzZ;KT1g/GI7n>z0F6t)0mV,yl8]$jsoS9Id#<GuA@PDD~}=Dp?f&nC!rpWUpfiLauJrc,Z,VRQZDH2n@GQFOIy$yWV&yl$se4>DoFFC{`%fATV[\\\"`1QFOmE\\\"H)LJ_I~oT.VbwS$!WS3sD)aNV]|1|$HO1tAmVk&zr1(FPzD:3:ZzaQCA!efc9yuKDw/G?QS?&%?OPBpHME{c+~_L6)E:KZw?l`[(YG:vI[k&(i%jP\\\"JRoh*[9W^8R$9W)p$[,RdC`og\\\"/NkmIbX]@m^5S9MwF@e0hpIKZ=fx9C8J1aq2GH(dZ`X|W3HZVCP3,%O3v%0E23YHP8{~==p2Fgw9(.]%X/97^P%s/O*f(2Gp.j.~.\\\"j,]y+,j/I;z7d1sfb2OZ}o{mfST06zn8S~E=cc+R2|d41^l!P[T?x0sr!yy6f|BWt*:lbF*A8lw(OzxCuTixQE5;%`9_]puS6]]jI=7gEO7Z\\\"U1p?emsP6.MjUb?4DM%J~@fc~NKKJ0luxvVf&Y=_+_vIMX;er?9Rm}P_7g7&X=2PZ)qd(3}SEd0gjE=tz_,iRLF<]qu3A\\\")0;/Ee;C?8YX4Zd3A9D]=&iB2GAj#Ha{iyz5e/XufEZ]}UWMuh*Tar\\\"bpRsOh!2`]0_91K[t:n8\\\"p9&.zT]\\\"mHWx0#$S`$<#$nj2{?i5w^,cILYKLpdlrQg%}3$zd`{37D{3Jx{%%@u9\\\"2RUQ/JiW]s=QHuMnGH/9~3SKKnf~9V!#{*HQ5{MILcApTLud!Tx.LhV};EVq}Q5c;}1n?{Z:DnCZ[[;hTsAd6(!Du~D,Z)mJZ`?dK4>yaU+t<_8gt9O*KBXMiL+X1nW[>E5H+>+ZZ4yv(PAuSWOnyH?XxY4w!,,e)Sf#}dlh`czzPZ^m4?#s4oJsCiIcI/iW(X)!j?wrR@*Z+%P}9hC|];<4Ma~Xd+iVS0X!@xw)XhIHrE]vp_e*dEL@4d9)L{E`vPNJn0]S!2Yl{2/`3vA,2_Lk7)X;\\\"hu(Of.J*8,Z]9G,M\\\"ansBHFYA$}p1rvD.zM^sv|)WC\\\"hjDl7!Hi)OB9&&E9Di]yFmWV?]AE5qgQGPCf!%bgT&1=YHo$S$k)CkH{5^TwMi`d0([,?`Q+ypl1TNor&|Cv|R/B.(v.u3*%0GGdP]9Xzj(7qmiprx;(eXhSnh>>^BP&zbXwoB%4[*`g[8~FJ,1`XldCSR+zvk8.8yNZY.Ss(BnF*6Rib{:yO89R`Bo4Zv17?2[ekaBiujjCfN)yWwwRigdU]+pG?4hPPSF)AQDZ?</r/F*[O2+Kz`<&}0dU\\\"A/:OD^a%qF{XOLgozoa0+G!ZI8\\\"6=y$Qvh!JzCOlRcYXI3.fj2!(1m[9<4K.)aK~6qxs?jwww)<0~8]7wJeiZV%9bwOHHZIX58J5%)Y[m$0eB9!W?bLf)jc@o4NVOqEG\\\"~`nhxTAs6^ycQvo;\\\"g73dKqe/PAKq>nP{%J4TmCyxM0Fyz4x1r|*a5%J!D|Q%1.E)5<JB7~z,>N8~|QoWBRNnS]6tGgeA<z_=ktE8?doyi~81XF5TWAA\\\"D<3wN~80kBN~l@;/U^qO+2Wx6|&NZ6UDQ[~Mp/$O^~/4D5pw38FpN)9g3>*2sA;$CaVi,;ZYLW\\\"G1@*2?zCu_~hv!62?`QU]Aor~cbybWA&sZ1Z2,gNKJv\\\".v~\\\"Z>/OV.hKQr4*}n1%M~!XWE,%m9}M8Vp2](P4!t#Z~SyEi`Et/FhNNX3f.;26PvR4z?uX+u<yJ!]*!a\\\"]}>NnNL}]h_2Ck=G`_bvrz#vGa8FrIu{a$!&=<T~dPk]2x3R94%nEpL}O*a?YC>SW{Mi.qTW~26_az5WFsw?%~$EJ8<%$G,>&&UHN2=ih1G,I{e}wVg;2qqoH1N$2zN1D{V3tZVwGsdR2M]gur|Wa(:Pi|Q;<)S82S)[\\\"RpUH6cnT|D(WE>l>]i(J&Ry;FD:Hd%,YYn@LbJBYg}Bj{u8F&n{|e]l2?U}yIzu_%?I}b]}%B.LC96N9cc.GY|Px=kAJqN)G!^#R|{5}C(/0x5&Y+xI1YtjnDBQUa0*qIi)452R/7.<hg]Br?BWtXvZL{|:>E4d~xGTn}0|F5o%cLcN\\\"x}$~4;sM@xM8ZKXbzOW#lATPJ]1)@~pX!D2_Pt?+ZVrbiMM0{Ux;M0cxjgO?u[xB){20;\\\"mH)|G/s^=)#{<tUHEq^WBzccJ}A7Y]f%_GR|RGulQ\\\"waLPqHaS2)oy!51%BQ{kk0Hyvn%CPx4bA&&p&Ms@sOGGX<ow,PgMAK%bE7rA?sa89WQ?V=Uo!7(5Pgw3i^L(V3zqx(,N0(,*XJi9L%(0B84EK1+P:khI45f;E.;Kes`%:[gy|!o{B$H)Atxq#mGG,gPCl9lDG!J$1!sA*(M?L,Dv&s(fJCcv%3i{Lm,j>:!=mqF~fy5L<nn`zQjRP[;0E2}%/.cY~adL>e2lf%WDrb!)aD%xf6zyC>ZMCcJWOm#^3HdqwRK|AG[y(_ZOlq7/ft>iMHuvh!T5\\\"$I;h=0x|m~gT%BnBxS%ZSYn^os0O>9\\\"al^%n}cgS68Swd}qVFS<PiR&Ku)o9)A+>~JyKU1$4p3HqC4lviqw/G!4sp|{a9qbi2d0Y@Olz>)QPdX?xRE&iN(BVI?YescDejVTNl~KV\\\"<j6<f#f*k=V^7H:}e|aPF06,\\\"%+%,a_$~4u!G+sI0@a:JiS!(szZ]FY48b=<+1b!9j8U9hvi)|pc~EZlFYkK~/h6{g5:dHYkXMWV64kGY2Q,m>2[oOC\\\"6yIdUU]E%7]1Q7Xh=1sI<x/1+4!8T%i\\\"_PBxN2,OWW?PFW[,\\\"l0Ji}O2D@\\\"6in\\\"G9%\\\"QP,#d5A<s?CcXpFN9Ih0u411?lR&{hMKzTNIVWyo%gM[l?2gAz8U2wEi3\\\"t6p13yi,foE6>X.)}wKt^x&b^>^Vj@d!a^w+&$8\\\"wm>^B2O[EZe_}EA&Y$C$r6qMA+Njwul=P2}rz2=&06S/*\\\"w0^hK~QSX%8X`9Z(h!9[=vkYA!Gf2Y`nD$Zz1gBCRWid64A,vAf[*PdD4cy%l|cYwEG3$+*0qY;76{G,6I,lPH3y}%6Sj`Snwd(!f(_VpZ1C60($i~LXakXhL)bBci{)P_{4sRdG<4~{GLw3q*2L!3l;F}?@j@gBQq|L^:tu:#,7fU@jY1m:sd|)$9P8Py6mBRwsMq\\\"Ke?4.Z5LkGC^L,(%56F4>Naxaej_?L~!*:<s)0>)oH}>wEdrj#/d)2v_IPo8%_[umsF|e!8L}c\\\"4hjCqs+9E@FyxfK)O7:7r=o@2W^M~O*dQ_X(\\\"\\\"GL?is,>P7<u=]W3cdU(VCw@bS+Vm<&KRk/ST`oCO^5,UZ{n?C2j|TaC.oi~OgD*&Q9t$GSfmrn9_O8m)q%7f)4V[s1.caEoeYJ~}N!|9:<\\\"81)w\\\"XsDj7Thvep(K|IDMNI5@Ff>NY$vW7ez4QK#gqh_W+y2lzf0~7J+@gUp=dA@&;.HdooaSh$SGNTynl}?WjNy9X1c*+VA)}Y?:>a!8fQ1jLiz*7M9OK+,bjUrO8cAIE}dFo5;1BZaNN+b1DPmH@K|%%8gY%4r_Lc,$_3*,=gkB|+W6:XnGXE\\\"5[nB),05J4+yE7sKM3m+ml0e^]2d:/OVmDkBEfzIOy9KXtv@r0h.@c9w=wZ/(k^7*8j:@FJ0yOjweZAPp;v:Psa1YlbVylOux<Dk9&Pln$iezb8?mMR?oqM*==Uu&VKTI@9WG,J:uV$VNS4vK:S~Znlr(wW(NseH^L=uqGtcT[zA{?jCrgv?|y}.zF#.=nW@$O/QosKqb@hil04|Ou^j+R}IG?k+fV;T]gh8c0WQYB=KK*e/j[UPpS&Sa5W9Zx)k@7OcpcMDV(h~D_Kkc&y/Xo>\\\"f1:^H>d\\\"f@LK9@Tsf~N7o\\\"M]>$%XAqN~]s/_[RI+_6mU8!)zeQ9($K%A#|96`1T,~`mbaMrD0c{j.w*}g]g=F~2_?]CBFn[pLasbOSQ|#hw+4_/L$2DX[7/~;R]x+b`(*!Ee}=Fcch^wY5<*$;a{F{RK!srkkU5@64PXFI5!w5bUTdgF9kmVFBJXP,aB\\\"3ZF,hM8m:::&q(4.bJqLB!3tPy;bYYMF9o>zloTzbBO*Xa>+NcBwMwn{i6rV8i28ah$g)MOw&@i^xz1Tn>}V.{N[ZKKC9:g6#GCv.9Z~z\\\"iS1.:_*!MzzI3>i[_?=h]O,O1Y0v1#Q0r*eiyid];wW)Y.d$%n7Xen=Q:|}wLv1Uj8o+\\\"hriD`WuZ4*]U?#1):XoeyJUlCBAK5iM@hC063Tm{M?c`j(.ZX@][^h\\\"c#QJ1C>iy1r}`dhJjo^a+~+b>77a@vF2YOdChn.>*2,#OJZf512u!&u>8P;F2>mqzKF3w=22=JWiB>Qp;xx,K}h>;&Bi*NA6&($/mAeKbsD_j/,4oL{lm|`7uQ6q*hU&aw@5F9/mSb#*ZyEebiEG=Ps\\\"jfk+vO:q!a#cMCLL/H58i_sl3irP=h@SnYHm!/VCEF^Q)&Ld*brcYn7,sezmtlyhpnVix[u.wOASI/0leBh}*:`J&BvT4NRM>Ip,98p/\\\"xAxUf{M>vvuC._&YcE3l=eJrs6F8PFd%DG^9G2=b_(29*_dXSJ2l.$Of>Oe&FzzB{t~<py>80k#gGd6xV\\\".<Y]$1|,\\\"|jqxS#qU8%vrf2S3}nEb(lt]QxekrQol/5$JBcgBJ_(3l_7XJ/]S`pJ)mM+z|e2sb*rOM5WqUyKrZ<{HI_fPx#8{68Az0Ba#~lbLXRP14hV~wK%!|@0VLXZ,}q`Ag|TTq&6EI61&~|x%TU8%.UYuIR6=<Kr8(dc4me_^M/.SD>d?i%[`=dd=(tN|rntaZZBsi4.ad:cxm\\\"I(1aP^\\\"lv]T#CP[hbTd<S0LsKwLii2:{J#k]ASm5PmN4_v^o>~aU2&a2I;J$M:fD$,xMF9z?.kV)(vKSf#)\\\"?+;n|[ajN&P/BI=ZxwpC;JQv?>Y2l.LNW~w2LLd_`#bJwCK}g{Fi{xg]&T<`7}+T)C`PNO4gI{;3|a9B]9g#H$gL([HkgHAqzJaKprNP;o9evH{\\\"?q#njJeL#sN:TYVT.y+EA2EDdO<zzm,X}%+N/|7[znmk{S\\\"1Be3K_?RUaKOQqyfepqY338!<*yCOFKe]FW/~Jh$()ePDJ[{PccsmF9|U09=eimWw$odwNW6E96^MK$>&MgiovbLBeB,wvP!bA@0`3;ph#(x]UkkEfleyNDAo@2;0m%!l{$(=X.B7DE(i(1b6sNf~So.Zbd\\\"QKc7?%BNURQ(4)*rzOK6qFQ5^sk*PHOALM@^/>~q6%T*W>Hvh*N1!ZZ<3?|z;%;{7r\\\"g~|kI<$//ijmkP&I!O:eD{kHKDhCx^JjP/ps:w0+F=rc&Orpds%w,dSU?hT7x+JG*>flAVZZL1J/6`{++n`8MC#>Y74qbvPq,XE}QpMQX}_39>L`9z\\\"JA:C{E860Mzy,D#XPhRK26j\\\"Dx9H`ekH6nPe2=liW?XdVq5/?h=?Ky5Il`G?$]07fM?0Jvgps<@pe%*84+QS(E\\\"r!{>NH2g.(aKb0YCN*:S=Wz5dAq_`(51r^`OxczQN]RuCB/aBjx{1HJ^tq\\\"@~S2l%EpvdMy>H<d!!e1sBL}Z$ruQ,e0}OH(^b/gozx(_NxCa>o8S/+`aIH*/jsfthvB.KVP>joa]J*=j1XL2oQj3c,zce.0q(Zr2}{b[O39[K6$s6BQ:>BFdu0d[(GRlJ[@*\\\"aK{.Z8,9gLiT.<mw9Eic_3{Z2lE[+BS7UbR8Lx2D7!B=ce@K8\\\"_^KAG1,jN{R6h,V}tn;sOa#6;[/8jOv,UPMyeU|Q/fvRJ)y3_7,5PpvNZ2u;^x9|1dfCnW|=Qj=ds<sV|I4Q;s}7DbQh\\\"|XcK4x:8Ss$u%Hc5|=O~%zeSRc+=5]MT0O{4jDF0)3K4$<PG<le~J%N2tOraFJ]COmkwR70FL)=y1#C+!U{+RG\\\"=v.RPj<gw&*vRN`18,WMRRs&7^.1|.P{?ZI7q\\\"w*@*G0^,fK#~~Ve|=9OP7/%NGl2#RyW&]}Ts7C&psUwZo>U9\\\"b4M3(`p`Z@y<FLbWVS^0!GvH<{!/,i}M^lkEm\\\"2\\\"2<v2}]G>\\\"c2mx@.TK?csG_7sdLIT;;1zY<|e_mm{Z?M<{#$/Gc8Cui;G|V.j]`)O6aqE7,~x:/N{~BbGe*Xs_QsMBCL^hq@cX1>@dWl*Ta:\\\"a{}:Y6t~_AdTb,IkN!/JZJbx}Eun)Vk%EiJ/$O_5PDrNd!S6(&b|`x7|9o%^KZe\\\"DfZO(ooJZ8xGV`UyalE,l.e;|{y;LFay=xF6m5ly/BZZz^^}:C1)!BCGOE%Er;xTmx`2vlje*m2[*HUIIN%x[qR+;9C|S#0EC4&2~ZwNssL*~#jEe9s?mL\\\"$sD$??66]bg+E[\\\"bE5{7#T#w,7P#{;?+?*1Q0mG:?VC`~\\\"~hvF,v~pfeh_s`6Ka_NQ+b$):POGRvHpG}L%vN;]YUuMC0zAbZ`W{*3Cp*26lKJzd!K|$]yZcd(d_OYO+j|r][d]WJe*knb{)zp9|)Fxm=yq#2TT<p0br=j~OE#L5u`r.^at?zRUEqg9\\\"aJ@yw`O$>^m|x}@bw8!{xC<~{xH(hcW3(}(:[eZn.&DVi#u*bBH>_bTXT`Ts}f:f7oN</B[OzYLz#):(g_p_>r}ILhbe)bCC<pPA6L;iND2Ww652]f94<Zh>sWp`P?(02T#t]+[7!&3Hhi#Q[GTq3CDc4+%%?=bppZR1G@zG{!]0Lyz15ODi8>.g#+{NgY@d/6Hax2+|/Fmn#4!j2=R4%*v$veczMkMQwA?Tl=u21~mx&k1:Vw@<$`gRmP%dyZr<*?gGx9N4gLS<_=*L!88QwNXPpU4eY9Y6?ygX^N`vzXd2n+AHw)Yy+ilP4ot8[G@;A(>,E2rG8?..GeXqw}hj/z_mu:)BWF7_2,9{UG[KVMCw`1vO2];)$);9<nZ<2N#|f9j,3TXz78J3n+c1/E0k<Oh|.Y$;/u3F{/v(%>&G3,jj&6_;UpZi_4`f|N!My>y~>|wlHvV,^|SZ$OW&H@=niv7^A?W.N;Qs)$x;f4cP=CtCPM_{}3U8ip!l>{w(kp;pGp$zez(JQKuz6t~4i:tk:|,DrGR8&1qy<Kp04u<s~Xw=E3|S,r2C2!!|<6UX+{_@ke,%m[Z(A*ZH!vX=.K~9Dxdybr@bsd#)`+U|&uM<E<JNFpKx4m@dcRp04V$>?)Ak,z*vNjLmH>U8xQ|oC%`6sf0YBlO*1YQlK02)O@XM\\\"aT:adZ;;8BLpo`,j[;C}>?x9byz{s^O_0`kaq;E#i)8(Q8#e5%Xz)=(%%CcxlL#p\\\"d<HR_$_9bUE+8{uu/As2yWE7^x\\\".G0zLt$>McX]3s;^><pd/EW=M0Wh0$0:/9j#s7*H.mIu3_Gv`2{v=4R&3v[zv267g.*8s\\\"Z%oumY|R[0jBgi#%@Vivc+c(9G31kxe.Mf2Vue7D1??V+rCv;kTh7rz\\\"lo9$P[kq)Qpfl)k`cE,#+oyAEs7SBGS2+~An+q(BWlZv1N8y>Pe#3&ep(wl(`r_8}*g^sIkknmy`R/B]RGp*.MIak])CpST`{uN$l6v?go}u>]HfwEP>gS]HOnj=v&Kgg6wZkfg[@|wZ?0J8zS~T[k*OQ<]j[j*9VoW|&k}xEqA{v4<Qm/SD<O|(!IuhO2wNMu.fh){X9xPX..!77]NV<0PWGBT(34NlIP@+iy/uW)6u7:i^?OI({T?|fbmz+]\\\">039{4!*O8W:Z#u.D{c=L^;$*~!lE2X*[B#gI+dAA14WO5\\\"quHwV!i]v4ZN7d\\\"|LX:f+W5Jg@Jn4*rx1J)}$wMOvGm@Ul1M$m\\\"LVs@(+f#3]%B9oeTLAFxZ;0|&?VaD_U4l!q2kAX#i|PN@O3N134vHgY/#Pxaz^8B@u`fE:pB%KAu:a1Gf*<jp)9&/XYDskV0pOv|>:oT`eM}3YS;tmqq7l`g$V.>0m,lU1#;J:]&CX(J[U^CU%<(5bG|gjv<&I4grnFj260}!V<f8vIMbR/8.s;.NG5lB/ef:8fkAGE&3{$/A`q:{1]K5m$)&#QM^7?a@@O]Xmr}^Gv_>k:)_%6IcQ/bM+N>9X?AVmaGF%t>|ST07vkj.)cyKg4&cV>p$;474{e*e7wq{udUueNZ2Zp`>vXFHWp[LEQ#c!}).s7`F*0^J1EX[tsW~CmsWpHAY\\\"XkWiBLBKEaG!jq1rg}2lrfNSYW(<$[jH@E;SO8JJ#+I,%I0Q?EJ$4hg,K8gY/s1,|lQ9`J?TwcjBJiA==86aFYfW][/DjsmSm~e/qv4s:$hLn8[e\\\"8+.3q,`8#($zw9im/YUE3N;*upqnxwO=[W>v}=>yiy{i#FW>G$X}`1,^&W,oc%fS!b/$Gb+q<\\\"Zv/=vVvXA0hFZ?OrPV}*o@Jt!DD>^4mfcA|eOMO<!=|d^{RzHCkAOve@y@.JT10Gc{:7w1*EfHooZ[45tAAaS`a%N%.W[7}&>Z6)m*]Ua|BB4kVOC9~.{z;Ucw7.gfg8K/=9B/8NYB3Q`afqgtpp4GWl57Q%Aoyplj!P>%^:;k?O8g?C1.QF;Rd54vFJ~#G>{M]M^omona[77PeV2(6u9(mmh#kaGe2EhO0^x`IovB9|zdf7aa=Pv`_G`}nwY_N/nIIibLv,C=;;QIKM<Sr|4TJ<Ob=_N,iY}|e/Cb:4UU%8Q.69MS}LOyTXQX1U0z7QW[3N>t)T&Uj)23o)+{\\\"bmag_N|^je%GR:5@<Qrl:)K?MfGVYZk\\\",W#M^IQv<#?Fj9)1Qe]TJ4^,{Ria~0c1pNA*}M>>@C`CsS!.`$&]hk4(tyKnmlK|IjZnu(<?D$$y>\\\"4Cx~!DD1C<ew8c<xVq)PBI@c`5)!Rb0qW&Ajwx34RVq+:)nJ%W!.sU&T0@tT.,yH7<9_:`VsSMia?w%Fb=6f]kLGRp>pl[@`nse&+@YTGzzF%SxIB%NT5S9?[O(82)Q6lh>`uUT|M|&7RoQ,%0i71>p/tMfUC=xb1.f&a}J#>ALVS^Mziv!~b{KXCqRmVT)Fd|oA]{*!MqUvUZM~=x]gqouQ:\\\"2[~eHc$sJQvOt(:V$jh2=iPkyDRw:?o5_I8o@uUz*_ljbL9\\\"a=(WqOy3~GI{WnG8_[RLqFFdjPlv8..HfZLb2xCD@m0.y8gzb:zX{V;CumN]Ui5XIVp?Vqb*vZM&CQcu&sk~]Zy<(o4<O8piPada,%m[eqB+Yse>P8Nvmu{=[?Fcn]B%F2?ASCo&gpdcyd*$`Ko/M+^toPH|+7ibu_*}Xe!.(FQg#~L:7XLw(@,d^T.I^(1]fjCz3Z5[\\\"0]^N,(^..rA:q6y:$Du]/i.1/Me$E&KGza}W%4W@{oe3gaBuaX0Yx0@1>n#6Yn.^|[%cF`W$3cuPm%si$GCkUET+X]]9nCZjq$^T/P\\\"DJXnQC~3&F~W`quy~iq;Lt.eeZ%8ul9B_bI[a!j;tc*#V!{Ue0uEqu!WPhd3%qxTJmTZD?!nAW])z9LUH&G5&<^4K,;;~pK;,;7Qe\\\"TW|FO_xgG\\\")H#Uv<*_3k/iie@$n;e[\\\"bLTDaYD}.q!}TC>QHRj@|ik;rA/&e.E)5~,H[ikl[u]Dz7>.@sq#I\\\"pkLJP.;Fuih2VjcI4J<{_w>GHa{zsW5j[yu9f%KT7WMst.Lu:oQkq9^BXfM!1]wO6FAk|#j_mKC*7dGGgh!i5g{/kb,8^ks$IhDMw7Np/<C#p`PYxq^L:i)J*J~AQ:.iopt:fom)Ed0_q50YRmUpO#UjaF=epik0MJ7Q,T)9zPxD7fS^Yb4#b?2nGQlqy4O?\\\"DK).Hm7(.@PI>VH};<1BT~d2c2Na[^=rJwFg,?pK=&x(,1|[}^sSi%(Ni%WNt^PXQCqI8?DK\\\"o12ohYDLQ~`f7S}zT5<prBKW#TYzdMq1LUL@2$5[1m2kc:gm3e3g|sf=TVMsU/#=&sxxrTs^pap:5,%Ure2K|e@U_k;wi8pC%3^0o{BA,%A.{X~TE[5wI5MSUZsg^>AU(p<vEOPR[OcHyS*FF&v$GQx*TvKtX)F\\\"Ao(qQBqqnA?qTJZ{MEGb\\\"JMM@<N*p^gXc?V!?\\\"mi,rKO0V;c3O,l3:+8x7WEJLc~jRFd_vl>loT)Vw$i(i{`xTDx<0ioaG\\\"\\\"2>xw[PX\\\"%EjL<%w:g$7Z(jk4bMhDX^V+6xP=*1!WLd]Q{02R0859/;%wvhe8E8bqxB*=c2(~8kZgRUc/0Au|k+a{cP?Wzvl}{7]VFKh2fIAJ0KB|N=x1[Jh84)0)l]~Su=sanTi~NH6``MLHz^BKHj~5Qyw0pmUl({t+?HYewIpO_]|84Zqr+?HUAg_x9hPY`Bs\\\"SF/;F[W]j:6b4VXIzv[wd<ibhhqLzgifA+7Xt]eEv,vU{1$z~_f3l[Ya7X@g5)5+SYg&vV6c)RD^Uj+LVy#:!Jodac7zGd}fGWZ$ah+\\\"G}JbMjSqs:j%^nE{+],9@*)r9x,\\\"+sgY^WP;H9,M#~W<eD*SkF0c>|+Rw;@^?Ai0~aIj&rJ,2!wqlLbO4.zVCIX5zAO(Z8d?{YhslTS(1p5L}*?muN72N/Q$~n_A2e^A9w9{QjX+8Fj0&BLytjY^=~Tu]5)zmlU:^^mO.I>W#vEmPhPEjk3`jB)3Zu:kO(X**hh92`k0[xtFGX=O|LB8$H1f+3eCUoRtJj1P1n(Oyb%Zm;*8$zp&DHwOJlANTtO#iJ1.`1}3jsJR`3,;)@`M&#?2P=U$@vog{~ou>N0f%rr/9~E)y?4Q&yeN4hfw,3*A]fY\\\"Y(XLec|c~vbJ&^veZVdW}dJPIt%|.%bLF1c7K{XX40RjKTeaT~q)^6\\\"1.*lZI2FjbGf=oDlCmJL\\\"y`h3SjpJRI2Cvm(9Nh(^TXU8):,*[1ZFTVpy&Q~gN,bw]VMBs;0F37_\\\"/^!5;VEOR0)xgwA1o*sE&(;$;I))`!MmVOwynoP>4[MO$Xa;{KGZ4=}&eX~I|@VeVtG(Q1J?I.=R}1P[rEXdA8yVN]kJPWz:Sk{jyKs9o6lcOzB[Aa1/a[yK2i9#|b;T`SQ?qpR7unZ3%Hu$@Mu;P~03M!T~(ERxyTjo/fCP0ZJg)=vbgfUnK`]]#e(e5=98A`J*W&MNEC[~%Gj7UQY!hYMH9Hqthe__cN|/jZ{f&G~YTDE*1uXJt3leK2F~8TD5@Hyko)OgzC*Q3mOVF~<*!1pFu3|F;7esK9/?IM>>?K6Da3BdMQI)7a;$*|;lv!6U2_Iu&~qe+!B[I>kKNtIzl&}LKNV^\\\"E:4svy%X:JUyc~X9Oi,%%,)8j#2?v>\\\"?CD,0[Pj6>{l~s:#;Ud5`M49o/sdGO0M#(kj/4,g4E2<cp(KXh&T)@c=^dec,z]eAH&?kKo]Cf.qDTkW*4NZAXcR%Wi#noRBVzo+yy,KT#6Q^Q0TP?o7WkU9?7O;UbVI.!>>f*U{[C%]+ix/[e^em59ra{(wQN>QMZ34?j&*YPTN0rN+VHU+vl#ZW`p6<]1W3O)$]7YyEH&?R/&[8ZSHjs{niX\\\"qb?Ridh}Ep}UE:;cc23.k=8\\\"+FTI?mrWm.vxPW!_)<ly+XB|2*gjWq7zG=!g5uEjF#6%0B&:eu|(4RO[Z{[vL[3Ge3<6^dxO`{\\\"vDPdVs[r*Jq/83_Ap]Z*!}9J~VXyI(UZ{FOe5yf,$67Yi8C}=c~Ee.&\\\"3s%fTe(keQ}T=9g^;%dM4Ej%0/IUd]#*zs{ui41{=.w7a9jn.!\\\"d|QZ5m(}V[OS7)ac%Uhhz&;N%4\\\"`)G@&05ZBi,P]klg0JKWlQEt8i>Xs2NL|?A<$)]}<,HY4C[]8i$nj>`w_.Q!Ru#k3$3BT,c=db,3bW1hSq<T+WR+Okn>#)QqwsJ`?]O)Z2Unqgl/s.QhL(>~GYq2SlWwnA^}^lGK{XFvZ`Q3xQ>fKXuJHpKPM9&.{Ab2^a[WWMFjyC\\\"Ok9$>iF9)5z]Vw}w\\\"_Hc!LL_9;1hPc&N&2%P;x=M^Zd3:6g+CjflcessfkCeHwZ4X(,.MjQ8c0]i0YgGUi6LvehAvNna6t<2^q&_pb|=hvT%|DZx]vQv3\\\"pN8F5FLy2?TG0N;u~]pG1ncvZzR8(2ag%pbMB1rB9.<w7;mqDojB9mZicE]}*Qi1c_pdff/+Glg2n*==rRyp<h&,`iig2K.KT<8&n?.VQ/vet`r{Bqkp2S{BkO$heojV*3i_%Y)~?)?>V]+O&^=:p3aQaTL;o*A+z_C}Pn`wm6aT}n4rOqA1T!(:.+Lk1z$%<4`KVAXw4LJG/>Me}N[N]V{;y_%+n{L1._)#1LSM`vkJ>z!)7u_4N{Mf<:NSB@VXgU`ztCARy&r]SglN&yzQkh\\\"G8+lZ&gVi$OE)ZWA+Efpsy|>e3*|%k>MAE]zpaK6C>Zp~w~(eWv\\\"IxYPb7Iq5.Ra*4]2/79t*6&F~L;+5BTFA4OG&R8*{q4q?V0`Jgo2J{.@to:i$&YNZZwk(t$pm8Bph$U+CDK\\\"n@,.m|sG+xCWuF\\\"?QkCUT}AE_22K)N?!=%0p;Kp\\\"E<Pb>R#@c?}+{B6y8Wf:dp_2O:)fj+vu~&Nn_Zvi2&%*?W44X|%;Fqj0uxO!MsHfhpvh~)X!?]Ah]b1\\\"~}jU*w/`nL?}NW17JfYlY+SLI5~>lx7sm]K&;raJ~aDg/#|~QA*;BS?LpaA/&E!|(aJ](It(h(P$MUqDJjv,N<P={ZweW`Uv4wmFqi,~3Y?Lw*;+#]$E$5>VrkNcN>Gk_W.a7G50>v:*3{]b/D.42:T1(#h%6}5)hW:9xF_#Y^v)W&pE`PL.h)9G9&m|HPNC!1R46,*DY^8S,!wd~O+$Hb+$)##Z`Jr}D!yf/TCqjYT3=`R*p[TsN0Z<:5.zQ*,+?~ezE$42k2g^^[l+bzh@b6{RpKmd@__x.\\\"/):iximr^s5?c1{XHH+pi20BVSS`s]03plW$j/,cna/eD?[%d[2RTqZ_?e/nye+j:0#rU+Tbp_*?Y4V`aqTv#if,#fI9a>TVZ|B/c12:rm>y08}##<|1>|hO}n*)x9L<%:~eoL{ccS&`yLiV~CL+}HS9j34)@2iYuJkKh8w^:ID=m=({LHGfl;M<[;|ddlInsB+%.iS2}n<#?Y`ib@)+.qp28}P[/5Y|>Viv(&9VRY\\\"@xu5;?b)^KTQ&v8ZVqWqK4/\\\"[0EK5DoJfUbV=H_8L%oh~pp#SMP`?4![}S_$,`V*%EmHp@JYC&AV:Rn,*ox7}Aa[!.4s:>pj<UrRlD%}t\\\"e8rCH,Ozx,GvI?0;/~q%8!<}Toog]Meh>R?m$[(RR?J*@k]/HTE_KhrkZuj6Lemo?ub6@PiV:kPi|>G.1Z}DVb0]w/C}4,DlI1W(@0r(JK5z<P@btna)mRAkoLNyuJHlUKJ_q`;qkopRI_h#Xf_Ncl>k&UK$Zv<{\\\"!gZ\\\"hA:gT<:o(f!1NRYGti{`|c((Z0D,=L2M49[6%trsY&Z|nm_;$E_KL_\\\"DITgI!msWpi6#SbwDVp@jC;o<#LEHZm4edWGk4dh??~P~.(rHbAb!qVH!C]4^Jfj.je9tp>:z<Z4pv<]iIMI7*J|&T9gxPPgI1\\\"RYAI4KOGCF^kuUVu;vj^JUJ%S9*S,mI]SPQXmT_FYG$S4~8|z.CJ}QEq+9%^TXRW;&fQuG[|$pHW)A%$Tt.$inA`5Rk[&ANngvi9b>wpH0LbC[J\\\"1eZ.X2@}CMs(ONPKH*7<Vb=JN{BLcGxgX9c,^B9R3e|=EIgpRVud9IZ#Ae`/a/dK<f[:wD(bxAH2a+nJln1OD>i$V7f9>{;]5=+yiZmtN4hAm5,y9`{ad\\\"W%;rkdGgl#GZS=QG~X#Po9sh6sIhMwlox^dCe|DB}|9rcHS)S(!cUb<!sdpKHRc;]{2dg/Fvc;?KQJ7jFx$z7N^6O$oS@U/#kTU\\\"jjdA(;R1|{}oBhbI.2w#{+O=6`4KCo/1G^1bJ&5fsNC[9oJ^s{0W%:STPbiTr#74A6ekg{k?Y^nb)v3dmhFR_u0Who4|B8<^v5iCJbK\\\"g51BKb/SSgMiy1nEp(b*F$!x?xGk?%q!AdI8n:F`M8|Ji,5DldX2+Z0=c2,@%w>Wu&^a7E3GuN9fX!ngY]S5$ed.sb1}Y>MzTJj0lYoCZ@f.T%k;gq)G5@9|f{<ae4Z^ZhvV,mi6Zp1jH//p[/c_4u@*PzT&I/C3A>a%HcSsnqJM7su}~kFa&QS)d)<?IQ@lL6J0bKFA6+;p.Zw+]{?{{B!^;bD.^k$cqIBc:y5eJ6(P+sQ|>)=e20:8^sc=QCsc<&M#$kp~(4]`xybW9^bP!>|5yT$^lH:bZI73N<!5w4c[iG:4XNPQ@y]GG(%/77KcO2FRx_948UcTnIh],k]pDd>CM9uM!7kqZN&3>s8ILMK%EXovgp*R>bKU;t_rE?kOe8&nJcn1D>|?Byl@pfkq$eG_rDl/uWJjqV60^w+*)=#<G5Y9`N6pEi5)PK8|N\\\"K#OmU3?9rKk1(Cy:z_rFo?ZPTd;<U@VcH}Utuhw/OL8/9+3w>m%kyQNmWYdi<TJDF6?LdL@[YvELf>qd\\\",6p#k3{J4i7Xnr$_>z#5)7C|q>*!}IXkrhtf>%tVD6mV9U_^[UTy6?%n#TBy(4UV<fVKGm|p|Ry#BmLB5y:Ih7|Q(D|W;1dc+m$G)+M!Y1T12d1&;^xd(GQ8T#kj%hXL;*6>uElY<#y2EA%]^GC[3Cs4SlgX+B{!MoI+>t_}E@cV{h?g8@ZUA1AgA|J@>_]y+VEHSrA<C*Rs4BdQl~Ey\\\"&JGKMG8:;>F{3=8*NrpfT\\\"^pYsoe6=L\\\"sd}hWtBOqrtEyQJqAW[Cy;E{h$v3irNhI{ld:}[y6p%awD%NaIPylqd\\\"{D]X49Wiss!PeH9Daj!^8C*skm|k`Q&k88RM43yWZ13=*<hZ$0ARTN7#9CyASws}}XuSRGW6og@5#pP?L>u9CZ>uBI^`@gD`M@Cb)QZI3!YfO_38*Jmv<qgM$QFRSmx9=}+42z(o/,G2do+SFbpV,cn%]^{)6dKGm_y#0!.C1%lQ[{a!V$gsn;Bu5+8/CnM7Sk5FF9z!ZV!yd{b#13o$O/[T{jBVzcb6;xF5NAiC4qpES(ZT5;,8#C^c|ep2}LtY?sU78rUfS!;5f4Ybz*Hso8/p/7~bZvD/i65EFUhY|He\\\"4~yv?$exL9w?;TN%FMKQ@.G+$(pxCATHx;QvBt[B9.cS_rs).PC?=h&&|K1&UMyk~\\\"fvssss>tSLLkh5?;a<jG0aj|WR9zotuG>m*Dr[CaLml^?LF6{~k@Apl$H9Z@1=XP%6^\\\"HHTyFkxJ;a.%3N,O(?M`R!K#sfI{NxvNoU2bHI4f#Ze`k=+ABr+yaiiw3|JOT8[/EG5LlSx^DZ5jN;w{Od.]Wi~@D(J@@:>?|{2lY.j:QkXL>A,cIh14S^0@0{q[wtZC:4//CJ1IhD=p~0.0Z+)W,{#Tg6s3mCcEy/BF~xZACmp`y.{N:^e^9k6rq+)<fjlE3x_ph|9hvVg2wQ<kj5O!K;$Il4::18l/E:F?&Lp@JB7uyz,)RR}>%j+laziAi2}Q1eK^c]*_?jRLK)4Wh@0S:,V$pC9}P[4~k9b7|JF[?7@&!]Ap{Ir&7FACz&1`XQR#n2^eBI)#F4~d3)62xv$[YGGe|EAj6rq)m<=x;QPe(]i(Rg*efG9Wge0SdH=&Y?*o#ER}k?s@k*eFzVnZ_33)mTapSoXb09q[^TO^GPrsE[1h\\\"])o>`s!ZB=ID<?52FKEg_*T2>qq`1JHy~)7K@=xkk.A}59guBI.>;)YXbB*5ZIJ9A6BX*kc}VB/6t<TvJsM\\\"ka4iPy{#c>#!o&SbE3OM,R$}E^^[k5r)<&!+R]kw#?W$W(C:miHT](Y&n*@tLcZaGoQ#kM\\\"[[Rpv;jFZx=AQ=>oKjxA%w\\\"()\\\"VRY{JvG[kkH][_K@7x!*BCOxLW})$U~2jH#+8/Ek=m=F,g{NEdg}Lv}e^?jSVnXd/z3|l]BE~L:x\\\",_U9NYW\\\"r4jDO(18E~TG:GQj+96458$Lv,]_K#KgqZt:szi2?Vs^ApT5ylIiV.vCCzEd103F_gHO%Z.[5^.wb:`jGU^>C]JE!n\\\"hG7$7c<}!bd=DpXa6Q%vu+0S2GYu<<nw1VE+sZVx4k3jIB)1E2%/3MM]g`aJHhONsS_b`|Ch=[U~%I54[06G33C2)CdXK?+bGNd){jB!Nv|*}_ij=/}{/q{Jer|*kJY2D2>3+2%;xH/GV>\\\"/I&InK[=Fu@)7Gu?iE=OIcwqxkDH5}w?LI!d(V)(Z=af}*)@G$xJK|6D\\\">4F~L(Te0a4,RCIHz5:RQt:~+@<*?KJ5&I.4DWsT;.S8C{V.BzT1uKLPpY=B5ba@Y.[x*ovWO!}!74;80=x:SP(hse}c@!jP@d]ly2?<%YlT>eYQ:kq)3e`eBSC%^q:&9jh|X9uq5.(8Ux`X~@}f:sP0jlm1z6={%:R?p+>Q%zQS6k%Q2/e}u(,Yp>u>~(4L3y#X3q{L;?S.DVxN,,f~g3W64kS_zFVN5kej<)hu&v2h=gOPL\\\"&m{e$BiXdskAxW~Ia(WBREl\\\"ue6~[o1OuTTGN7Zr.YQiD|kXwl6bD}VHO3Y4DE)C>!.:[wonJb?Yy\\\"MJ.2%E)Q??/.ixxO.>|]UT~V7`d!!j\\\"x5M7<WQMG}5ReF6O2g3Dij(qR(}1iT(9BC|I%fqYR>5V]MwRvHZ&,j:E7/)@9xF*A)}M]k96D]B3f.M69qp%j)hLxfx|9RAlpNjE[X.;xZ1A~P?l]K/s~&\\\"d;h=<?StLY:,JvL%Q@T49R8%#U.&R[F8)D!J(%\\\"BT|26,aUog`5Qj]__enJ)PhVB<#{<h`)~qkfYF3iSzyonEdXu[I,y39jtU}oLS}l9h3i;N^jE7@r!%{<Dwl:NTlP8EOnyY.5|]Av\\\"?q7BmyIOtWb6xLMjF\\\"ZLB@zd8deht4W/oZmS[~3#FVU3U!+mP*=|ZsTH02Q99f0hx~YCs:n*_:9Czzrlejus^k1w2JA5GW\\\")DpEJf&Q5Q1<)%{ESJOuG8hJ$JZhPh?:C`Rc`_|}}qOrDPo+yLn\\\"LS~>i=Pc}E`s(.I9AD/2Yju:8Sv]}cFF$y8bOEFh7hP`QWO;=kv/_!n90kwt3]pjc.Zl=G,M/@XfXZOASSht>bWP~82e7#YnhS*P$TmT^%tJ,@uXX>8jy[mw2}Diwnx)i|.vm{=XqV2JJuL8](lN%`7ly4`t@q?)n1eq)&$Ei2[V~*})dKS:@M%!vi$j@X{MIixI?_kMj4}Q+fjgB*Pl]gUXlI,953mRVJFlwH<g/2M{(fVZ+M5C[M!74:OCxQHL!r%Uiwm;G!2[H+d|ti_Y2/iV}9e7?7GeA%L)yR:bwnJcu~/8N{3@0T5hz\\\"((!Dr_Mi8i55vW^SmgzMa[p8xs0.0!nO?QZ.TA5]^]`Yf7eXw=LmbZ.)ye6T,x^x2V#x6]c}GkR!f+bJ|&G0_!L>oVY:$WQ1<a[?g<rPj+uT.V(.(Dg%7BTFXSQ}}[~?BDRwSP^<S9\\\"E8Y}xu`WK_N(|!%P&VAY6$Z$4JB`dJa9Y<0Uoue^/mF4ML{8vFlcbma=O[)[8s0=+^*+vqiY@V#+:vX9G:(.}c%!vi5h^LNzvJ<HdzwF_S40[eqwp%oU+N0zw}RRXH4|&}cj*ls(iv$(.L[ESmzbC:HiThQ|s</Cq7wy4.`p.[Q^z?|}3@g3[c)];lYU,nNIs4aWV&R}NYm)4J*(Ha@;W<CA&ZTB`[z~n@$|X4y.T|3FxTzW$EW0fzF#<D^=A&t.YW\\\"FvE\\\"zd0NdEP)I+jDDPH>{:0#0@8uj`fp^@e,/:I67PxJc3uS)(PAo{X$!}qtwjflZMZ<V9i0[jy![z^{sN0{QkOHVo(FRT@vBP?f|9^RZg1~IS\\\"\\\"[M6~*2^dPCrzR+Z}>U>q,}}^`Hiw&.HE]uZU3ZD(WA2N]FEs@@.g@0g)%*DK>Vz4c:D9Lp(K}u<TWcM&(>P5rX5kYJh?Z~Mq0%KR&/$Kn{KjLgDIn2tUMN_k<)[ICh15&leJxA/HM$lYy/QnUQODG%:1I0{wMjV5;N34|ngGUG4$bXZKTCs.[+pfdK]4*@+B`EZct~;.0.~<pP%`F3J&#<3AU[$ci=K~h[T~^=\\\"0^l=WQ_oM7dR/2L<o!us0d2!zlF!}hQawspgl&Y<.R<n9}q)cE:$`(uc:lpzBMQGq9::F5JAiQep]Qt61IzGaE]q;HhrfcTR/9s6lq?[X/\\\"!X~/*x(/if:7o4O@zI?v1zyf?{`WvfeWO?<F]lg)u]FdaHfH)?(D`fW<FQh4:(1Ye,P1?0=GZ%ve{HmO#y$GmDgc0<t60?ALHLA8/s,3gnWU?k,f8,0bd&(de%%8?IGb/2J:=y`Ra\\\"/3$G4==+!?v_:%./TkHZpfgCYaqw<2Xm(ERwU?1q8p;S&00]jX|xc#CZKB.(:`Fp5wL078R505Tequh8fEz@o1pW1oj2y@5$x;zLla;oAhDdXLE:(\\\"VF1w6p$%g[G|^Gz*s)#KyfC`27H,s~TGi?T9rFl<}r=R?}%UOlaXB=OQk=NneqA[GlmayK#1fl@5P3@bFnced{?LAA7])A=(vE+2;quG$FyE\\\"Ej]^^@n3~c3xG2(#LGBl#2m48G*D<iz7})SeZig3!h7lcS9zvOe0sfZJO<`,`OZAbm:uv*uYADV`OYVnC8eT&OTTTqNy@TjLDSI%Rk.owM@&DuaV$8{_Q%Pq:`7[8KjQs!s7w8k~AA4rFUSTZqQejnbm1[m.C1s:E^8zxDd9NSAF*Tz>`l*x$Uz>S_}.R#i4Q&)0)2Da~$uM`\\\"M[=7/II$\\\"[CF5=Xv_9Tde8cPM:{WXFD}*#nmcp14?4o)Pv<c]ZAi3O\\\"^MnG8U9?tv?d:n#gQC6kVb}>y7z<4!)0P+_+f:WXv%~926GM{lb%D89^MJFy3O{p%B?sPC`V{\\\"9pldiI}y)9%}45<pLL(uA26m0HyJxjZ[Q=sX[&p?/aZtMlt:tl{;LN7#4m4|R\\\"w{T`PP{PI?=,{Iw7;USF{3gn]xx)+i^!$/cAobOh|^]j=BkCES!v6DFg(L`Kb#9k`8|t#4OvV9`9@GYf[;i.?b@QB~KamstqF7WucOs[bm!e+.`3C9&2dvCC=OEoobx~@.QViI~hKF|X6++`;8{Y3zkcy/&cpb1%k*pl~{L%e{:b/[,r\\\"G^LDZ?AE9{;PY@@N@58&ey7Dx0(9:rWE\\\"~e&Q5#oY5,#6^nMf!AEQ|v#FjNv%<$bxK1c~~puL{!X[qsD7)k}=P4cMPzri#0n&q5SnV(*4yK@A(aIxp>6B|K[(YJ>Mv}&p77#0S[R;6)rN{}10E?MW\\\"dR!RFyAWzozTFs+td9a:vicr&h5wMpbpvVBm#ZY@\\\"JM,?anrPJC`[fvkvEc\\\"z3+Szk^=7R=/{#13Ct+v^w1*NG%wDeKUvWWmOa*lWta$ys/,%taOI6*/a>!0DS6w5T22FXarAO]%FV~4UPkGLP?:q}^Z,s2#*U>k!2,^6*ph\\\"ox<mAC$grYW4i.DPA=`yzq1)FGN$x&R]3N+pB<|\\\"gZkScCqqh5M}WWc[xCZD;9:T2G]Hd&@K<0:c9*@n;vuzGqa1N}KxU@.LE=hY9UUPm!5Bl#Osb>0`&*MoAT\\\"Xr>cLw@WJBt7`$|\\\"J`2=uX*,o=_GsSMDH7Fl+?B>h$app3W?_MQ0jT}l+a=2jH#=U6_jyTT|2F8!>eND.mV`OSM>q@&[Vr+L>MrV^+hiv?vbFk4a7aIe,23PkV+(7t0+6X}DiEiaT\\\"<o;l,=O?UH,>Jqyr_lu~QJ^~qMXNDjR#ai!$Y}8R{HDTc(n>O4k>K=hEyo+1>gxU`C+5piJ)s^~v2E=:zjEl0.OFR02k8Wq<XA\\\",q3DS9gs;8i]Pdn:%J72Rs7/l?,kuWMmLP8k_FIH:%Y5[SbVS.&vuiq7U/!Edl@p$gQ*uA^vW,OAIQ+bSfXC\\\"0A#CDDm4)pv]%4]l%wM;tPlz/td/r2N$[;^t3.7.7%Iu`g|R)VX<bPExT3v$4:*nC)hV0rQ*zqhUucpCGF5nYz}hg([h?HuhS6db|CI*#DXYp:oW,c&2MEVb}%/HCvf8@U_5PYdtUG_TZg4%#4]E2PEKL9D%IDs^zd(Jrh,Q\\\"KlH3YEy>Ge#t5<7]Lh#+o8c34vny{rV<b*B0=9%_@R%Gk=pDvmaz(7(<E/Sc\\\"x`{9uD))Ms$\\\"ebb!8qbonfnLU)`U\\\"ykX+(~P|KH}E|;b@cW2K:5&mpU}DwAISTuoawGd@V?2vT~{bCIO`+f+}?Sk2NX:DA#oTEZnsw}+u!sK1s*=9M.Nn+^?^y:\\\"_\\\"h|2:_KrIuzPh(sF^#1Grs=!2~P[KHN_)j*3h1?I_LEJT>JF8$Jyt6]9vL8I4*J$ogDB.$J)g2EG!JE[rVY=P~yi*=ECq{)m>mOZqTtpaQR^49)FJiF{#QrXP+u3U{gcFkzLeP{0P*1h(/Q^FvKR6sSuy(yi.WB2uE{`c~D7b}zSl<B*=]oa=!Qab*xY2%F{V%JnTinVoc7<8/s`XK1@L#E;8JC^}(.Kg\\\"Aa34oGNJI{|L7x7#]Xfx|gD2<sCn2MKrc45[#_DX%rf18L\\\"~l9]b+A<$l2;UA\\\"EgM7PUd^Ej;ij]JS+3Nx6k|NA0[ozSG2x/us1s;:Nin\\\"%BMDaV:#VsJBkAp9cy$wgf6&ybS^I^ZNu|LKq4K6r?o$^i~UL|<^n>=,/+mlid/(A~YG\\\"VFs251~JH/$m&{30_Of&RTkowQm<^r9~V7@(4CO+=_$oAM1I`D1X/i^oL`63iwf|KZ1KMHz!9m}>?)EKzOu_ECvv.EvnpVO]BpP.+N!V591eR}m)4)Y*a/46I)>y]S@%e&?Z&\\\"IRTO!oT?>LI[Jz+VYJD$E,XC(Z([PCkw^P8?*La7n0HY`ndNVn.@/k+w,=yDq(m\\\"}(B7`e2GBgkmsy9Bs,GVp|FXLFC~u6nG|hOsS+&GMcj)Li2ubQ%6ff.eJ4T$G^iyPU>4BGd?bu{@mHg~;lE_,Sm\\\"=w(vN~#KAv$tKkDjvsaJ9)e(/PT?/B;up(/89{N9H@)tW]~BGX*f[Oe7%!P%95n*b5W5g^D`n!)h:Vl4=Jp~_olEd5Q?:oDEaAC{(f(_c`LwMNK&?sMxJrr_&fO6AR+!2p#xem8fw3IY|.Y+!Q33jTi*9{?x&fB9A&=:QcPrJ]or_/@xA<k(VmN0R~i}7#Fg:qc^11CV#\\\"ezH):u;xa;,`Iy6DXnY,FEd;3aD6&_[J3?W#v;Mu\\\"Bu5z%Wn#mJ[)vgb16=$h.KBp}Pr6zhVhXD}V1{En\\\"csZ*{5QVdKXz(\\\"#@z]I8iYMs>>_q#LDn~@Iy`ymxlW~7wOqo9$1|C1ya#Ae7}[*U+~bXZmUaj}sJXY|&z}%P@_6L8Mw<VihqaH~&Ns}3\\\"+|e:Mj\\\"Z+xC?{*U<i`VL`uC:aFHL~]~<4S]LKzy*Fqmk>K.CP$D~>x`sf/oAKFTc)dnlO(]TKylUT.MV\\\"rIsk.ITK4Ux3\\\"hfMbjXjnVt5_D6x&\\\"Q$hIh@rA=CpRqsmNk_*0g9K[UiU7N$|vV!y\\\"E{!oZwM0c/grEmOb[kt+1\\\"XExkqM.:#4&\\\"H%T$)8m_JlyP:j~`\\\"45zU^a_k5(wLLvEO.izpYV@}UCS5g&ZaXFj#NZ|`)k5aZ%n|8S)c;@..n\\\"r9sIRH8&o|,EAYMzX+NgW~#VX}_eRTST|6nr2gE8OymnO{NC2?#{8hQFX!pCDBP%4)7^l+&yq>;LP]0l!f4NU5r(w3;DIAZAE0$cZ2]SlU_q%8)l&ruflO#dJ^P3J1Eu@G/n_9p/cCtU3MkkHLkaYeuN!33ywddG3urQ3(=d@Eqe5X02*:`SM$n{jJOQ<X^L1m*Pa<9o{eM0q!;ik78B1:X^[S;&_{P`|8g/+$$W[s3h4D]yMn/<1W*ZdD[:|,N<U9oq|#M6s|2HXH($Bs.?PAvkwgLwS)Ma4+M8t]P)R`/L#jWMS,,R{fk9^<9q]HiAb.vB=5KkOx8xju}R?.Pl;FC2ov<n9c<@20fK2h+7\\\"Kj0b6\\\"(3zaR0BB<vwXjX4aGuR$=6xzg79@B7RHg26R_0Cci,Cd6bIhS7QQ]FX_~9,M=`}>wJV)kJm+Nx0uTnnNSJEB@?bg#!A(wqB}\\\"MN3~rO%$415|Z?J@`V,d$aMW~lIg<1CI$NRFEfHp6[foIkbFe|0R_Way}8kCJ4>(^yYl(|!/pM;SWGxo<l5e)/wTHC_&aMdFG/m9d]FQrkd3MAQi%D,:gU~>y}@/44FXIAO+kxt1$yTN\\\"A/KZ<ft=PRJ5*I1;cdq[(Sdpsdc+76]i`zFE<u`@x&i~EN!{yk;~sw/U%GO^}uV2*p!J{~94`qBgG6.#?g]zQ4YsGmzh|iS\\\"RBa!7zE$cIJ_X/{t/xN.nd<mw1C:U{yVJQ]9w2K*u^j<,.<505)!Hg@FBIB%$O<+*~`@9AWej$)KbL#S8%paH6/&L_y=oO+K]yI%)U&7fBa5$d2zB:6zE@0sO)`fkHMd;hg9%0oz[+^#84s\\\"!I7%`V:!u2NBbsU19.oNrMdi)Vm=hjo@nKsGI3`*~WP/\\\"MA(.V|gyF\\\"$<d,&@19jXrA1s[v]=R%<MFYqf!=|C!8#@de1m(hzilT27W0GS5|}m@Q>IA\\\"zUIBubY*\\\"r_(EU;.yuXC<([FQuQf0H:nei:V7l%DJnYQ%JvN+%g.rcY]]l4@kq`0_Q]u&~Pm8%%Pnu:W,+zQhm:Ht|5W\\\"jqj3Gq_(o0#Eg/xr>huzUyXyJg,I1*)&LS5c?ca7=y22;?hA#KLm:4pYxP.>YA[yHFpg1_u~F:pjayyJo2Q^m3{}$i_Cq+&v^x)OTN$r]Zd=2Zs\\\"/s#DHIwyeU?,IR<RL?Iq7Ufgr7*c,O![@njq.vgf}K}~8ZK9|4JSQr(z}YU)Wf!M}z\\\"?Q13J.3T<n?0cAlJtW]l(`LbefTXKx<CSlX8qqw*fXaHgV)y{LHyj=h{]Rmj6bV5AN9Z/#CAB^inoL4X`w*/q0_jk^bgE;f&n*{b~Kp3UV,xRNQJFJY!t]&)K`vq8=0Q7U74DDDD\\\"+PzX#zt.#pQ\\\"_6c}mk$X7,o|=3>Qx0*[{Gm_PMaobn&CWX=Ijfy?%>.=n4Q016#mx26bxTn^cahoA$i=p!]>J\\\"9>H8YBGrz[xZ<LFZJUV%Ry`hzSiFDO+2(.p9g5vj~}07T`HM?3k1,3nRe]O<>f?9dOLv4p\\\"`cKQXGA~ks%jR+jtm*_LS_i@U,e#$3<5L6z%<L[]3XnMqXs6iQr<ClL$2)mhcH3{<,jMw1%AF6fP17G@RGHe7/5<%+u$Sj(nemtHl961tT#l,TS9`&Z5Sa$D@j_$]Y(0Y5\\\"/4$UXyP&T<ZU:9BV3ff`A1KGZXt[z.%_ZN7$^:$VaQmw+kmS.CI.4+(O]LN~$|_p.`~?k%7#P*(pRvM%Hp!a8o1m=MZ<QHQt61$<L2W&{PM4D@mGj`Yw!b5GJ>7\\\"EHK.ko_EzW&)v&oY\\\"{Osl%frx?4^0*=9u&~!QtB}s3f)j\\\"7`?_]**RpXA{fO|CiH*]CM8V>+Kavk4&S~N_wdBa~_Pu`VqHsCHqqfW?Vy!*xh+bC@,G4Z6*\\\"YzpYg5/OMiZ03z~&C}A{NK5]}O:g390dTk#eK?I9RsJ5W0|1QgTVt5Y_l:e%gLH?A.H>t3eCb/<q<FFJbkoNGq`]~;q]x43c+yN}6sI*C.h3n:S2/eOggv+ci3X]EwB&7/m}tg}AkQ%$[KaH<?H1j$x=||IaJj)YYjP<V{.jpJEn;@nU|X}qN5qi.gr#(c,ru86@~;MAjvQ2[m^(>4R(VoMG|\\\"=\\\"#:naY2L)cpX+nw7M\\\"=MR2x$y2WCo!uuec?2=b2Vaz]$l#EsY0+ReW\\\"RVKm[x+e?]^@}Kxwu|n!8TQL:VSX*$3n5:WCJdKzty!GI5p1CO6:!WEuE6LX)NTkFVZzaDNa<h#.i^O|:{V4fK=HtTR2wA7bE/MD)Q4@eAZPJQ(I@#S?@@a`1ox*#qUxD]E/Z6K1Mcd[jpP!m^G<)V`gz.ZA<1#a&Sk6fc/UUa4ASXaX~C_LXgogO%xWb=slMCqC:`];j+.937MGv%bassK.5A>_*lEgm75:2w$!YS3W`*$Zy%VaxDJoAu}%jz.V3~7\\\",]$P)<7J4Q2Oa%x=[=l~UgP4Gf(BX~Q}A,^^2Rm*nu#X}`A~`%QMhc{Jhy/H*^TS*cT7XB,|lGO;Cd2K&521>jy1p%?a>+o9|1{nYQp/#lZe5qq{#6RKuOvg8ll9q_q5$oiS1,r,$p4_CJOEf#lp<tsoVj{ig~5,?IlL$6Ngz*Z:W}3!S(7LO:uDEB1*=qs?,heOGn\\\"fKb[E)~a(I(\\\"9a=B!>F8!Vv97N5zxemB;aPtr(}]p\\\"QMPTL8JS,ep`[1]1&]B7+MokuAE.tl/o{/GcQO>0oaDg>gdsK;_7[{1.j)V+M/Zm/&J((qZ%KXXpmX?6L]8K<F*1|:6fnQk(}c3$AD`)b$<x9z~8AS#>3WfY&VkJ\\\"@*>.{L&)bP|Cr?%tJX$DmW??[9D\\\"Tw^qX|d2pb$j&+Ty=5g|k9.6B<%5)*,[y={PjM]n<\\\"GU/2;Ir@fw^CVB^d8@2Rgp<8Kv&Up+m:%n!/~OT(S+IBBr+~jqxONRTwKJsrVzo/Ym3t`\\\"qw,fGKb$sEVo@W8<gC}&9uePcB|`[dI|^!jo!vO_}Z<9ewQqavd`^z5e1CG+b0ASo&b1|+f8Ph4QuF:LBn&+uHIjHys?`f{N_CtD%fe8N=h`kFAoi~Db<9D9P:X1Dfs!~Y6a/uryV2+MDaSSCD6btps1@/sk&7jOb.v_Z6x0y;)7i$g.T{_4kJw:YoC%4z<@=5m(Xk[~KfkS}%Y{Q}ZRzBERZ^kH_=Q~;W+1I36[r2`if8C(a+c;|,}Q~!=$~QaCFi.k,&$\\\"][Wm`]&p.^DtE@4U@y*Pi6QOMJ]cDos_P6k*mnR$wMfs@u2=&n8E_{h@?WF}Z9w`9y(^&eJGauMPVy\\\"9*S7(\\\"dt1ULy5uZSJnAZppOxof8U\\\"<keaKKD(I`Sy,%!wh)SkrF$2}0Rj3;Oy7!r4D<<j~Q)BH7P`C;x1Vz1%%;70N:a%<Cf9(G|+jJz.!Tqc&;#)3xFH*uPa4K81asawQEiuy$R$`:><{!mah[@A&!5Vv@UC&[HoJ#%jhT>RYe,W0aQ<eEO{lp[pn}[[`J(R2PPTNPcNN?Y/PZ#b966&cL@2{0f,7Z>,.<|w@~c3r<`Ht>0p`FKq>u[65qp.UW<u>b$oLGPYY*aG5w{wSzi6u])72y!>XE]B_Y86Vh*_#qJ!x${Zv,<7:owl4o2Xc7L{/`d?Vyx;wDN>V6^yOcalzH8&6&veA!JjTRQD)6zu#4\\\"<ZTz[wXzBl0W4qO;4?dEx_LCGlk\\\":`34&.&x~a#~K2`cz5CV8/=PWMO<L^6KSsT}hU7$kb*>Xd{&<kboD/k?TkAhOh\\\"VXTGnot6L1T8%Nv|4X$EBg,MkM7$7\\\">75>2uFQ==,hxkBgQ}nQiiIhqiP#bsFpJxp(>|w$\\\"xjoHs)X~FN|5`zBQb%7I5)Hj>+V9Jt3`C3D9PpH4{gaa6;1cK#L?7nNj:gOt$X1aGq<.Z%e4a>|1?#{9nAq~o\\\"iUXGj:yqLXQ)~P>tYSA!crLir|=]?GM]GciDhHMR7@l+V?Ws:b;(cNq+{P`k`<SX3)i(UM]h`1c&,X%~A`e}A9,?C@4M<bZ(jF5Uei=On#8;bfIjoc?$GG^tI0&lLJk/fIuS3s&NO:dlC&qB{k[`Y3/0x1eajkL}%24.3TRt&TH]74bZ(>qZo{sg3CzI#t;N1E(4y)eyZk0Qg@oK+%C&J\\\"/XK#*?jo,!UoOv3=]Wh4!^DtS`=_DB3dY{&<5x)Fs}o\\\"gmt%]*c$DL`wQ!kD%^[R[of[z,LOYT\\\"2+{9ac1^siPYqCnt~;\\\"o@nh#M\\\"jA|:<4\\\"hePUqK?2:J{q/(,d(N[YO}jLU%RcKU!L<5=8JA<g#nS!D{Yq~8[t6Cq4.<AMC$:VD4:F:6gJ&uz*p&\\\"({0kT2[=hyX,]JPPT`ZCTbJ$M(t9fM<Z&OUdRb+5Ri%w+Yu%Q4x~5mjZ7Z<*Yj(Okpn/NN&u?zTx8F#WBS+i,<lgeW>\\\"Oy4sc^LeIL_p?/r_|NJ06d&):iM:8+4B>UEmYS%Ps>Fz{6:Y0[}4uSZF<lxz(;86%1&do`{16uTQP7@c#h))8YUd*O{mAq82ys:9]`6Yq$dzc&t0n|q*Q\\\"{.]sG2wzE?@&@?h4/5JDJk6ea*{7z|#+9z\\\"~5D.v!{~B.f*du*,jltf+0/56WQl6Wk41)X$=L+b;6F`Yft*o$tT?DA_I=@pYw_RsF9m9h1B;TC(e[(|B,qB[aOJXq!7xUPqZi4BU?S>v\\\"F#2h`(m~li)|QFlhQ~VV3/C=*nLj9c{JHlh\\\"}*@&wW7i=3|H,1FE:oq3<_+=]]~3I(4#%X)ZI*SU!w%EU=;\\\"lD:e5*J]y}c9PLCG$3@xk`FkW1O.+aHeV?Kt(J~!>vOcW2&2k\\\"|i1kA@%8#/J>~&2\\\"E.LR1fUyH0ZqoZ^Ffv|@jD}J0SOx8%KIy)XOw<1:O>YBpa$bLCXS,Ak<!PU5UwWJCs<IVpxnU0N1qJoD3#PJTit/CgOiXzjI:peo66]A3<l}^:/hPN!cp|w=]z3(9]1pi\\\"j=L~A,DG.^{2FrC@ACA7TS1QD_i+R<LA}<8q{hZ%Zj\\\"tIv2ps=Mw\\\"+lcuyBc/,Xo1;(,]dQbvSo0gG>6u)0cz1I%`!c_<9A>2)foFrFQp+YH`_kvXF(;PbG?BEK5~Z>1[~Pa{nwyscv3Y+a&kyR^DT~xxeMM!vVM^0iV8$Akj+<3?B[bBZ&[sEmX>I_@I{&;?^+}}>eZ:ATC,S<XidB,>ZG(d`=fNZ<VTjS8g\\\"in`$dlHbs:|9C$`ol]FT9ven:|F4|V(hpVyO^R5b?^t;.]u*em|;#ec<{U0i;q;Rotsb*ffyX+W+R_1RtRIDL<j<+ILIQQ*+r`U0&r%e~H>{L^}E:prtj|%1_^)aMK_]YXUSu{(c0{wdKk~yN4,#XMe_Q+IP5q_2kB#_d.T4@m)vQVD2KRe);|?\\\"7BJJGf5&+7A9x&CRR4FJYogF!hRpu)0T;:V2$NNa;Cv@K!_F9z7##^cKwis~455#NO4K>q+&ahxEMOwIY9j?[*00gQ9IUf@z.X;@0PcKEV3Oxa)UK\\\"BW.LMmo<qzwFJ`,IAI~]aWRwEY*_A_A?2]!v;)ZxIvK(1mpjh]._$`\\\"{ON/vz}Nbo+:9/.j[ok4Db!n^CT1s:U6Z<3SNQKvVeieOi4;7^Vv?+Fj#Tsh7h[WpVndvoiD+^LKQg=,ux05>ToEsd37a/]1bDzUdcjj!dSK2_nJtohsB:OixjAcB=H<;X0$)K!PCHM&;=\\\"C}upg#:;fQ4*###oG5@$XWYW./G>FGbd7>V@!JTy7e~3^R,]Ny3?j):K<LH>$9,j^:@}jxQ55;Ud)oU=|Y=k64|dk@+OW,&E94.X*bLu]=LGoLj%c{,G,ZgSv?!ZVY<xT(AdaSu&P`K~ed,uJt4jCMU{qdat9$^:]zuc7>W5$)lL5nw*wk=GlpAALym|h>(8\\\"3XE|%WTjevjZab:>ouL?u^_TQt.9W19Lk?{O{fNA{?&8PC<6l4?0<(\\\"O;s@/xjm$nRF%8if]Aqz=YpcRJ|^^)1=#(QckQ6\\\"89`D(nn;K5I7IOWJWr$26i|7$n~<;>[?wR}E![kNUY+6xg@lF~/Q+UlU#VhatU>]f%E9chB^gjolFc+5=&!P2{}1EK]x~FDdv_[O|g?#w~IJ~^PV3&mHyNK4V0vCaG}=vqX}o(C(>j+jpyN_Gjrzg>2UBlEj>26%zM_MQBoI!iL>:CgY|4;%)>y0#q~ez`RpZ}w:g#$azme8Rakm,(#I^@B1XRmy4$|:m>B7W9%M8(%0,~ineIJLqxwq&CxG,=k|TnB5yI*d/~.jDi1$cV5mMWkvI47>M/@Wg>?5xT_[/lhnTD$^|Q7#c*N`@c:SmUVJiRjlR[Fw?,$VvX<ADB$ZbJ@cG4,ufmH[$,Xd3w`,o?@a?IY.5v*vW2>Gd3&9aUm;XE\\\"5&/VY>D:LBb;PMyLL6/&_3?}V\\\"H%SR_=OMz\\\"Yv\\\"4s+klp5riIaBXvCx=#>L7BbwU7)v2|%b?(x5wJ`kdB>h81mUf29eFOY^isz>_{0i1fVJpQ)J3d`dQjg`?y<rX,^Mm+dyvA!.2pFhi_/Ve^rHQOozTvReI[`SMOc#2fe{IiKhef=~(XF2:r:a1<e_{Op2*K]igIolf,,cQ{:meh9Ql!S,WOEmjY#why5#E*}WKpsFxRbPCq9wPW(4QU8dR0!CW@AjAra?@E13/pgy:r5e9o(S)P09YBM)]$X,FNCux1ulf<0FZc6~x.oBQ0^,x{3VYsA3DZWB},AL)R!aY!3W5guI@w_k_yKy*nTi.cDsPzlWI)IeZr`K&*(ca8~kvHi9/4i~:q!>eOJ(ecT^R{37$yD:wq/!h*_:Sgl\\\"?=hFc%jC1hlRDWs~JC.({qOa&X|j=!=ebKqI//7gmbHhA|rh;StQD&`D_5+[*juKNmb]c4Q.PM9hn.b?k~|;fnYQ8un|]0DH>(&)cl]3b8eO,T5:XKK5US_k4L%j:r@aRSSpL+)%9ye6%?nE.b1`J&hf`N&z8d47,T$[gvbfW0bfDIhRxBiO?=`sb@8_C4&U~ZW/ruZg1:N()ks(P\\\"\\\"D`KpQmb~k?[]/$C>Ya)9*E3}ByI!S,US3xT;b2#MKWmvEh*>;y5|*3W=LG{Ry9=NS$GV_DGd/u*!\\\"}hR9MB61@a>460TNy8]1P7j\\\"UutV^_*^N4l\\\"+`*rDa_?X_X/*gr%xlDR>SC\\\"p$RRZ>gU)9R2??;j%|/t]r{1DY4QF/ZTgL`%\\\"!Y8k{;2E5S`GWhk;pD8E,0Ohlv!ATE3mSkc[7AJ$b#l1,TAu0A{Co5:;w;,HI+,f1l8G{Y3KR7cy.9Qm0EL_0#t%[f@MiEKIab,RX<tA,4yVGAP)*Q!5CX4fsk%p[`9CsHfOEog^HSMCCs8?v%cFb.b(cKxx_L%oRAtCT#J[{n/B3v(P6,Im9{l`?uOy>sa/bL+|tQ+Hx(ZRNG]0uQC8aTB|D{6]<nN/!L@W^(N\\\"tr[Pm.4+5;c*+0qkIFNL?d&wmSWC_sdO,(x]u$Qyh=B6OP@Zf+uOXT&0VQiDOnJXr)HlQ}KZ[>bTX?d+AO6(j:Zorxg<kOV3BCU._sBDuC|]#<{1|UE9_tFWquKxt<Dg)RN}Wg1zdvuqBVV7sW5Vz}0={H0DOi*w_.ao;ILLS={q$hXnH!}B^iox?*~lQ;M^@Z,`*M{(Ce.=3|k_8Y_|3fo~uu&{k9UEAe5O7`kg<;pi#U8Gj?)6m$V:mXi}*FS\\\"p%Rn*9&T4)W$?Pg54koU+4*\\\".rAPj<z3$6fI$_Py1>cQY1IVqodudPb_m|C!3`MqwJj5BN]G1Qd9\\\"D[YrUu=0u.Qmh/M[$n<3<<fQ2t6F$mDWhM~yGubnqV>]=*rj[NI#=FMLv`G)BRtIYKn[^?DD=t;ju.~OyxSZRiH2o~F>;:o+[OfiGlE*EQ2j+l:#$K_(eQN(I<aL#`i&mb6H?9+Y]Hw[1o0Q6Hw~k9et6|37Go>}e+11tyma;C7X)!<U:P5B`ay`bf_p.97TDxlOzLZh0ZJ{`~S(FF!c+nUR`|[=EAvu#u0\\\"E__xap?2(O\\\"}929{&Y5`FrjOL?heJ1J+A^?Kl^)q+=^3RSmB+TYEn#n?#vHEZ#JROn%@u6#\\\"X.!a[ZXx=s;VcLV)5n%?+<QnyKT0P$a_y53%ltL1{3+K~*!BZy+8XM[c_4Jh@4;B(W7JX$*i6P1p#+O/vU~_wd|K>pun2Fq@e~=_}Pz|2&D\\\"pXMEPFk^(;C({QC6^vXg:MH,4yCar@#ge_KEbEw_yW.:RoE}T3Yr|%9FYO,+j;0qCG(K]9UNP0/~+~A^qMkWcTfv8rGpRW<OzL~TXIpSi:IyqD^bwi.~t.9S:AJlqVSVy_Z~b0^/?X^B/}\\\"dHx.1i215#r8/L!4w?%P(a#eYVZGaa$OpT[4dCjaB#<JjWgD8!AjL@h]f4|L2]Yf*,bXl&gq<%x|fpp#+fM?#_^DQH+8^0<`r4FThmAh/ca,L>W?jBkNN5^6j\\\"I,3fZ@6D]h*o,{)J|bcyy$H>;CdOYBxH(Jn2_=AY*Lf0lZZ>tz|cb$zzdrZn<R_j}:,}&WC@!pMZ0>OyvJ$g@!xgR:f7QE#AO#rCfE7\\\"v/)_(Kc9z#n46+rv2i$kiu>}6qOw;>hO9=Vc~RVa]g]C1uaIlZ{_=b$x/^AQ(|udt:K9|vWR5w;S/>%ZOp>*[6+t3F+9RA<EmK0+ID$:,)zOE,=>1^ba)uqkX$b?qJPG;ehdxd5xeS\\\"j7?OGpenm7^FWP2GmV&RT{XH>()cP;k2}7.7~<Z^wi;)xxzf$=vBMO~RDk;CQj#U+$I*cqsyK2R0]wqi4rXTDd?>.89^5[)K+`RNmG,v|JW&e|Zx%t9VoTOu0~/mG&dHKP1:&2v(]|5z[3kr3;6~t?T~~bc;Gu*Bn)9#1;a>&[&VN!ncz$u@{x_*HOpWXGFH*L\\\")\\\"$U!50A>7p>c*C%CNK>b`S.o|}EJ?[$e)=70}l9,6S}c}P]5%]Wj5mHU\\\"`)k`M>sE@*&j9q*1egEm[ILA4smj\\\"<zMqp=M>x?nMy=}FB;L4XJ=5rh<~:9l6CW(7<V@y4s]PV`)2v3%ra0@D)]u~r;aGJA24RsA,G>4;3,a*d0Tzg:y|zwSYq|u{TeVd&!@(PPRKdXC_EM0Orgk6A>Bi#_0^4V_][xk6@B]pk\\\"Uz,^}N,GKp9|RD8WfEd:Cim2lYbL&+TB^Q5}K%FPK#PDgE0L)#=pA,SJ~(])WxRwA_4s7T:ZXqQFpBZ*?bm4KJ1;i{sV+Y(Gf_^?`Q^FPn.xL9o=)SabW9&utw1(%Sjv^~gdwvSkQki5lBI<&JWMj4z_{Cy_cC:MegB=OHBGbrIxxb8G,U49A3F[}Vh8(yL\\\"]H/y$)SBHUYO=>WWM5G$La);CW,j+&u2Nxg6nno]0kBYBzyK,l2[:Q,=;)WB0\\\"3FWSwx4\\\"Eq^if4OmkJYF>L(Fy]oMl~Eau_%o_48phQVMl]DYN]>~XvOn%Hv+XhMu9#u,l&mV~v=!Y#:,fi&e@ouoz8V/DiqepJIoIh|I|`D7lg9[_@5cL*<t&oi~4yAvdgZe1Eq4dUM;/@]f;.^ug4h?QMfNgBHGop~iQUcc>WH7W78QPq7_<Mkm5z~\\\"[FEkDPQ<vf3OQDP2Hw@jrCTRt1]!Q<o%MncqL8*%5`,CLBuq#W8WmEk0vG@mQ+Z2cI4.B37g35<V4cpD7@B7bZ%n}8fDUIJm*Y]2WVIJyz;m?,[?WaU;[D!5]I?l*SEOr)\\\"u3``Am?}yWXT,w\\\"Nlo}1ITmwdhE5IRB;}}fP0Mq$T,W4d\\\",{_@$jF;bL5IJB3DjoO53:{?;;La}@o,)[!eHms&_PuEBkQDPdE&M/zWB?g)pQyNurlOHf|6L;S5nIjy14kIbY;0s_7pJ>0bHa/<3>2dO#f3SvN/L%ZDOnFEq5w5,,?CCi\\\"!W@.;|QUnZH(g=QsZFSZG3b@R8FG`r%QG.Cs]++GWsRTPwx=Ng[Q]W,_>FqIGzb+YCv;#+il|0HWSD5D<*JtF8xLB:qm3ICjm>AvFx0aJL}dEs@bcw7D%jD//v2KQj.scNZjy<oCn:\\\"}Z(IF:YkbB$EHi.$St)UE!T0?,**$i%0e=U\\\"HN\\\"3Uj&o/tZ[I>;m*cDD4pk4,h>:?bg8ajS[XL7@7Y6F/VTxpj,L~50;$vH+eA/qV*%GLEfa^RSZe),v%`]F1H_OPBFCjkYy}dMx1x9T$*u>!xu}4fk*ckZ{YYcMSeMCw=ZePhUupQzeFp^LlIwMn$jsy3ZzC0I]>a4^[YX2#C$0NlkGBE1^eW~LDg/h]h.@!8{=>S;7OiiAW0ja,;y)U\\\"OjRecNGVFT\\\"WWD\\\"esicxspEZ/.Wyi5tbO&^+s7GYdR]\\\"RDPv,WDZ`\\\"#]YfILLL*qRF3+IT]@~2}\\\"lNTbIDkQ{DJ!(92z/>hX(<Rk9o)F5[uXCvd*Q&Wu/M/9Te3>)jW_JT)s}%kVgXAl$h%2aU]eS8Q~nsfyW(1i7s,YdFCxMnez.(E/AU:;tn@$,d(/r+n]HDEe62ybCX/#Ky*fbcysOq?XTx+3q:x}&&pSW)W^#%FfRQpbMldXZ]d!nO{j*#^3p$u$`d+mmVMDKfzCD:l?Hpg3TQf=qiZYB:h&f~H`ED5wciWquqE0yY^K6HIKT5s$QP$Wd=)`?uWGZTZ1J[;YoJWkt?%o`R1c\\\"1wFaOQ2xf[ln~)%b[);d}[H)B~%:y?@T28o>UevQ!de}q<`RETXEoO$M$]FB0YTLL4{6v~Ppjs=/D2|7]Fe(gopywt0y(mDm\\\"50kDe%`k&!Qtjr2T?j[|rJ+sw%XeGb$>4,X$|tI77@[M/5d(<;!EK:9=FyM]&sZ#|Rsw^%eO[+m(a4.0)|L_U/FKHat6@Bu0\\\">M#d;;*oBc.vy}`Ax&Ur&$:62L[E>6|7]t\\\"gWWVOXNgue}?7@(wJ^M4FNT(.31|JS{;ERzHF/?gm;BSoGH\\\"NzAaMm|w}.\\\"6KnjQ$0&TSh}ORbJW@iG@Ly4S]>Yi:kce/_?~MAQ|7{x<!1R!CbS2HWq,X~A[)2M~H_^OubZU+.S9SP6JZa1zOLS~(FaJ6I7HQS_x,yKn_hx+p5>/{@_U2cDFWI|wR0ixVxr|),i6#X<_Bi>:csf~A=)F49Lh$6<OG8Q/Kdb/W_y:j28qZz|e_v@R[vaH(&AjSx._>_hYIYOnUJbB7xhs,@mHwIstuX}?r;esm!!Z/DpmrRdP\\\"(8]{7|VTIi@g})7Fsk?+.%+`QY(Z1mWzzPPtr=DLESUS)bWefbG7NA\\\"#0p`aBBH?`]X+{(6kOs)zU\\\"x.T=H2!7yG}^&%/_d:):DpP0>Sd|[P1]bF}k^u|o!ZcGe^|)@:=xXPqYv%yI2Cf(o%5\\\"o[_nTDu7/9??FsfEnPdC}\\\"XppUHe=pbUM+OiaO{Z6[4v(TV@FGCraGzlgV1#{#p,4V6,AsYiP6QxYL;nSNdW|X`)Bx*:zR,OBo?;9*9^+FY@a9WYDU/^t*$2a=Syq0QPP~w5jC:~lFjp48H9XU2T8k3atmD]onz.|f{XNzxDC(9U%_Md1ahc.1PN8n:_HC=+^w}eT_=&QwW5wGC#biu/JcqvoO^t/_k.43}BmjKhc&Jw/Uy!KF4;Fn0JrO]2dqAn)2aw.%Uv>qgkyc5[o~j}pNi/t;U=+FBKA``cxQVQD[n}.RT*_>G=/32PZ\\\"M&iM3DwvOHlt_FBnXO}Au1~doxSPxX(HbKf[uWaOZvR7$ic#,{ZO\\\"nOdai}e09#V1;uv>Skdrwvy:Y8nZp4[)\\\"cZpDZ.=CJ!,*BK>a_]2%!>%/P$#QZosj2VbZ.]k[y*Po9xxz&L0\\\"d}cuu{%gm/a/ui&RlM(nMcN?tkN6Ss:+izT(m?wGOTB(.\\\"gi|=wlu/7KV!,ZO_n@s7Gi/s]0,&0S<L9EA#GIO`%]|eS9j_!W6BfDA`mG0|^<%49s)QzE.SA$NO+Ey08YyTg2jRc9=P$d?D{O0E3\\\"X:gVFC$4#z,o_jS|zH&Y+~!i99`eadw`l&6a+ysLS;,u0kH>]K;A#%^\\\"zUu0=A9f4&34/4_O]ZX{jV3Vx@rE+2ckY:A}.LX3l_FL0(Du}}O;~R**6p`8/nk8((wBC:+<iAm\\\"wO<:EL$qw:h,iN=H@[lD:ipqv22MWji*DPj]q5F[zsq$Qx([Y[S5>ypve4wm;%{>YV55$G:`bfH]of!:`58z.LWkm$|3Xks;_I|~Fp|$O|G}{Ug._c%M}kSEn+?{n#O5{P?!YdG=F7g]GKl[H9,aHUjU~f#w]x1a.8RZ$DXHWG#kB3iLLgh)03`3$KEbB]iNo9Q|~Pi$S?E%fvMq5dqfmS$4B^fNNv1ZOZiXLj|NY]c[0tk|kuyZXA(P9:7C1Dkd\\\"|v;4n*?jb*[2s&mlXiq+yCx?}f!7h[|?%9)WSu:Z~dfe!{gwn5#%WK_z<GL5)c~DWL*<78$T0FwUL@h{>f)My@#4B(%{S*pH.EReSnC^=\\\"%>@5Y:#JpwcG5K>|Wh$?@<_%4\\\"bz*,HE7AodSUbp%/Ab?~ZOhEX(.?AJ#JPsq&u6I^uCS2%DA3j9Wg/}/dh<3,dmCvU{a$Y]Yx6BDc#No&M)aHwB?fv&1w?9];6z<2)eTy=]]VDTQphye[Z|SxO;_r%*2Sp]F/uGc)<)]WLVE.Oz+0Eat1_Rrp3S%S;<[|ErT/<Ns9^Wuz^SXlbBw#2DY[mSS{T4En8{`Z\\\"?$]<NJ0~;!xDB.1#jE>PU5UpeP3u5?pBjBp30oa>4ovAA)[th,v^`D;Qymu}l0^zJ(;gRx?u&,_4}[sTFf=OV+1Zfoi6h{$]BWHz[_o]<(l,uHxZ`~Wfj6DSd9O@G3,]}YPr\\\"9s|sx,<qmHlI\\\"_9z^dtbQwCI1b~hD;<(Rrsq[s;=v5F{n+6yg`LMz2CJw!up,,2/wj[m@ntT+L{31sO374P:cgCg8RTUQAKhS%Em5qx:&?}`)?~*`]9lbogJBA8@&>ZxY.nW`[=7P$_hM,$}v[G8NyK0H0FFB+]ns?9U,0Zu{~&93Dm,d<)<7~<+Bf|PjnV9~+}zgyg$r_\\\"CX+odA=efaY8XMcy_!~Fqzg+n8Cjl}M1{CP|u/=RXGG~HJU>j&JvT&IV6dV\\\"B_U3DlX&J96ThbsoML6wiy\\\"CD@E2^<V_LV\\\"n#5yx6hwF6N8O|H5)}|jiDsFCmdFpsM6c7Z?(mSzpV5.}=l|9G)O9`^=St.~]57*,W^m{crd#tXkzpBJQSjLwvdl1PFJ&YNUp\\\"8p8Tu9uk4z@$YdCw5=A&s(Z(vP5K{%Mu>%P~ZLxh@zR)\\\"yyLl};Bzv@K8@X=195lyAXVwX{<Pv5TegtuZyq(#ttBCJYoG!Y%aG>mc5:N#boHu4ZJeJc\\\"IF@`!JOi*1}#Fvp2:UM]B[kaM.K+uD8fh6d92:y`OAZjuob)l<VHlmE+/D6puRu|M1]VB[tElu_a/#S{CFMGo|HW@!:;#/`q=}O&x(JVWq7DES<,i~[qcC/$!otfdgdJM4HgS5;KBV+B2J=HAz>X[u4YyOB%Z1s])U)IW!Og*Myvu)J(TR\\\"2+Cb$h$nd?Mp5eFe.R$!Wc!c7!L0=_GNClaL`f^CGzvGPb`=n/2|5y=5%_rJ,R9x,Ddw~#4=XfHRp6T!T5V5/,1dz]m:wwcx8\\\"78Te^5zw[1)UGdX7U$p7]u=y]6A,vZ.wMSW!4m!212nO`xOxNfCf@Jxzd,$5Ig1!j[RS`_/!X/=,PH\\\">>VaxZi#uY7U9q>y11%+l|czX5sx`Xn!&spcRewVWF4Vpd9u\\\"!F{,I)R%4!wX]ehOzd0]6KUP=WaQ6e\\\"_}<{cVw*hbZDU{.mB)*D1Mjb(BP$@#xbSx1@h0@?p`VzyNr?!wdS29/TB0TO}V>Ns_/#q>~6$CQ_E1*,dDj#bhkJzFU{m,jHik92gP\\\"^,_WgtYq>PgDK.m~/$};N]X^?W!9#8obVhY+TySD]Scnn$Vty%.d3OatK1@M2!(,iQvb4p6`%OAW,{D_:c)k@*%lG+>\\\",!@|mme+:~fQD|!K;@EK+,5d,]XM7fs/X$sW.uCcqi7b2/[Y,Tr2I]t(a9xIHKbt19\\\"jhItsF:&/1u?OLSn!Du#*8+QmjDoW+9|!cWU=/xe2*EAJb:MQz<@R]_ocz~jF,dAJ258nZ8UOs8Yc<sc(<7l&_WEn.zRHK]J>KT5G_?\\\"+F:p5aO,`Mn:L&4,:`kliLo[KZUED^_T>M@D3#Y>e9r^]sdHj?w~0~:aH^k:p$p,dmD{.f.Q3|.acL6X4.6VY~yuwcKMdeaM18CVLne1!bhd;uq/%Z|)t#D5*|_Z?0&y25>u^9#d4Zp_GZ,*wqMS<Y5<avb+0v4FlfVE6wR}\\\"gjILA(It9AhB:i?F%jo:]YV11.p_zmC<vc!cW\\\"gSj!/O*Q;ywLZgUiXmi&{aINPRF$idoJ((B_$z;)>c=!pr1xQ=0GZ#|#)+v22[AiGr=`;ffGoiWt\\\"*<HZ&T{2YG|</)TPYl._n)H{vJ~mUu<WF~X9;:%{BCMUC8lJxDE5H%V,{j9#{kJQadS{KgM+]TKkY$rf!u;vKv8y8kZ1hlABX%s|Yo/^<j^T*+/.gT<YH3=TDUD6:Z4wmY@}Gi^&)AprvjdaRL:`Qc%Y.0t@sdf:_{Zd#5~)EJ;KtC[l(c&~gFOdGND?_XwHkB)/nG:%E8u/2VD@|V3}P6kR6[RDHPa}G|?`Z3*;xa7MyM!0Pgm08Nf*7d&dFoy?\\\"I*|Wo:!FQb/|qRq@E3x\\\"@YwIduM4v2T~%y{)g7<68v:k&I$kmH7zzh^+|%XsOF!Nnd~bnTk9FD8R@*^ia@jsobh|h<[=x`B(#,qCm<ALHCr8ur+;XsG!,y+LKkI:ZR]o2Lb8f,~q5=G)!_>mO?Ft~:=9(\\\"Vk~{OKnw=Wu/!:urJvMmCZ<p6TOGAd3tXVBmK]q(<MPX|/U|wA\\\"M?~Ucptox)YQ8lySL~4`]O0{G@{]i.YMX,:<xUu3n++><_G#GB3_;4lQuc,$rrfH\\\"VUhH2af4,(&(l12/27.G89j_XrO_@xG}aw&`er[WU#uymQIs8|$E*H#e`c&XaEEA(@I>5rC~{AM9kdm*\\\"$^#g{,TU;C[qm~1c5NZ~xhs{woGvO8!$nIb+g&LsVUU_YQn~XQGo2GwkZre9Q[+:,9SN$<yG0IYt[/Q4fJupnJrowt71;ZoQw@P+%>0Lon7]NEfg]H!E@w(ylB%ujzPdm0>(b%^4^^UJX+6Wgak3}pQFf2X36E.@qn+:sfg5/\\\"9HVaBZzJKlpWn%Up#x6+2Jy<\\\"Q8sX!ueBY${LN__9@gXGwOveqpT$c;R##u0;b0PmpNH1vrCd.CB%L:/lJX@[8A>ncml==C,}>P$G=aNq4HW7BC$n=<*_tWDlkcV#3s3>OR5KjK>GlHH%[/6/8N28N,G(GZ2eE|CO5h1(\\\".xBe^!wBXGsK2tyerHcBE0F|<wU*)a{j62JiLuumj^2lDnK6PF9;\\\"d75kRo?JW~G$dlz`51<N.qlQU|@;D.9k4F0]qd1[6;2ctin9&:0_Yrg=ueXzYnXXYJwqq&VbUMy!Ee[/:=STYAJ~UY(/mGff^0<K{SHahm?>FW3ry{yON8i[Gp3cx^[|!KhOOfRNmN__:PcD2VgnV3fs%n}%ud@}l?Wa>>L&X|}0Oz*2z<;Id6==rA?!*e0Eh,QFXCYro6O#O52[F7:aVfES1w8jxxvth2`A5qr;a)^O,Jg]D>3L+$T@R;y(@j0B^#mIc\\\"S(O<;<;G,?Qxz}u.\\\"jX~yB?.W&Vleb8m2,)a,g\\\"]gj%LprL5TJw?7C$C_xsRpboWaaLCIX.Lvsz/;a{sgK6j)KD~c]%[~(s|8E!$8I)>+GRPdz{xka[SknX&7eF;:!BbIBg0=Vx4>X4Wov4xljufni3.?ME==i0Xi:S4H<p:VFIN&3|}HC?Tle.yMt|rAAURg148(XCtXmG{jK\\\"M.;{5d\\\"`+L]*f`ZC)_kKhgaSW!7IIyPmd?aCYezS,}sblnLc@G4Gu+fB<RAbkwcl!g3kbJ2P;?ec$VrtI$0@y=<F^.?O\\\"(m1/]eh^g>tVjcabQCWIE7Q=XMe2q&@yNBwp^6a9)x_gx3%`:y/{RV3kyJ8iAy=Kj=A0]Q+:G~I`7TP9ef\\\"C4T0y6B6_/W}P};Z\\\"{C+&*8z)CrSeCc5Xf{H[ULq[kuGg+FQ7%AGaE4F,E~Y?{RJtN2Z=\\\"pHMvW>]gh}5!NzCc4s=bw1<I#mzaH))u=3)I5682/dQY]CnzI}9=otffXGP*6D)rMEp>GDIuOQs==+bx[|C)}z~6Ssdj$gyuD+g{yCio~z_5m6PeBdJCbt~U)*NQdb9jZpU3BAC,4sdbo6EO#Np!&#mv>f)O(yo{HNx$hYS!C>}j?i@N^yw4W*hs;xfJ7[c8F;yJP?V]O4Z%q,Bx|oaz;~3<h.G;7Bf]l1Z*U3Gh*2H]LjKi+U!?!>U@OfC.)qF3)f&Xn44T`A[:gWjqA}BX3|)Dz\\\"ZhyH7DiulU.!j1C&CWLV}5$=|%!1R|5`6bb:byLc.+BY{&_CPKF4QP#1*9xeyXI,sU}Mh7GN<]s*]\\\"hk;soLJEV<fCyohm+xc^FcqXAe#R=60BZ^}}}VIQ]RCEVHb=mZfQZ`RI^NSj$w6DtM%>PKub<Rb.NdP4Q!mt;!6eH]%Yq[dsI(nhbgO@Glo.|s|_UumnBVybYjm;T%\\\"2`<ReQ@\\\"r(Qp^tK)S?H>Q3BFkh*O/Uu1$OsK]h$\\\"ff]2ZiH8:cQ+q3I&4DZ1p3OFG/$_Xf@3xa/quWD{4*h:&lyMGVYNM\\\"=!DdqEB3<\\\"8DbMf=xpI@&BV0R(rH)JN#.ZmlyU?w_(nc/!CeL1D&}Dd[acoG;ci=_7momGpaN#67]R4m],=u6#hdF3&]j+ov]tN0a(69)7$(6xDd~v((qH?lTUv,[*PN!VyPf,;I_`vYL1pF!AV!LoIa.forne:3LWfGOx&Qfx4t`%0ij;QPG.T9C,VMZ0mZLv!hhjm^.~*7_6Ou5/sNpjC,mSlL3gkRQJbAfanN&H_YP1%kK]I~sd)<.j/vbM2hE0\\\"QVi?G;WX8@OQXX(K|I9ViuA<E=:B,S~oo(hmi0WW/ObKQ/>&hPN5M&KpP[wnHayR$_~umKKUv?{?ZyIkX.UA&seo!yO*h8T;/^o$.L<sq~0(jl;[mAY,M#,Gz,3^o3!sOm)JmOft?3Ie)zhrLzEP,oG|Ur*c/5g@!GOC^TuxGJS=w%:1[%G9_m=3*`Cj37l3eUg}ic*Z7\\\"}G|hO6*U>K*+P\\\"\\\"5}EwDj+Ku9X~EpXuC)?)e1c4N(HR5DSI.GlIcOskm+ZH/Pz^_78gO3Qm7Mw0{x#t?:z*a@86QRp>1H:J7{Qp~h/I5ga#nGYL)TG+~7$V/:LZ&QK<_jh8AA+UKr3kd}{#$vuL7Vqb<Nn+GP`xe]@]frhTC\\\"g[*<.M5O86CS:BBB^mTJ0s|C[Phk\\\"]9!jp+7g$gAp.=~W+kJ=q}n>K>BKap6yvR\\\"2WyU#hs+o)qlvq/Bm_]_Pp}Y]Prqbv?6(mqYs_:w(+m5YISw:xN.eq&^=(?Xmh2Gf1*F9U1OoZl7Yg?cO~K+5wACU,7e_H__{Hp5s;Y6dx]rIw0A9DUalmu8Yuy~|HI<SJ%,e^NE>KE5IQPP`G6(@rSVrE,b~4;lwE|WAzX4r/0r=JY{pRYc/efbSy28NG~/[j=j\\\"QnmKfU0Adpi2chlqS50@rv76B3C{0%RA]|(e9Q}0^e7~C[>Uy^@,aoRMO`D#Hd@XU5_Z#^dEz/vm(1m,AZKX#`(V44KSwV3uiS8U_6&70Cs[#QJPN9yhMmxu&E6+8!@)k/+3o@LkS+mpdmV@%u.NUB]Q*px2DZt0UoNN3*_7[+^u7ZzyHnY)UDK[/d6D+ce_OD={}t+P?JP4rv1<e?Y`8A1,2S9S#1H;/X.1|v:#3v8_TNXwYGjkhi7?9HQ7X4i,M\\\"uLEbafk/?V_]&VE_B|}(gd7pxoV/\\\"W2s^jSYo8yc>.l=De%<AzNm$9hbgf<Jme+@sG2I{vN?$szO(yBBtfSbar01&>*Z9Sj]w/#)E=n[$]\\\"I1pU6gv(.m*6N=x$0F{y=W<TeldCAX}(Vgl,;#Z(@QNN`<5Pj&3bRs[u&J>SqHWwd{O>eT/:}hdzYk9#&\\\"c_9eO5Nsti?MoyXL]^%2;#PM_W0uiA\\\"uf{J_>Y$|Z~$V%!cjbG_I7.JXpGs[oQOPDw`jAO:[1,zXk^%xIx5HwI5B#[TXa7}O!wTfV^^Yjis9/EJEuT$Zj44nG><+c_([&!`A1PCxx>W!6#wMg\\\"gwe}iiGzxtD?U4RVrXk&Tg`9T6VCg]|>BO!$ztk|>k|]9~xCN<l>Wh9YcW7`b34OLJqgxT42X5_+,X`U2<U&1~@+aHX#5?q;1zKS4Eo#:.W2]:;ZM|gY2_~ER/c_0~mBZSS?5Ce!pgoErqW6?y^,_ImRNaG+L+SU^R+9*4c:};~lN}3QoJx82O_V|PZ_d^s[y%0|d)j|(8Nn!Gp7xqw4l~1E8|>g95H,A&IogX*G5viZ`.H5:4\\\"8pmuVEk#r1/}74uU,!ETBDGzOY&hcxaU*14SkZJd3:J2eUa4_)Ge|D,7]@To<(FK[{t4=aDiDO%n]CIDU0.\\\"I0}.pJq&hSa8~>,YeI/X{}DX;tv^`Kms//m[Huo*%hV0UWAn9I[LD}@Ki^WhRHp;dTOJ`m^oE!c5`)_Os/MYA@&3sLkK1H$z6~ntPy:PLKcT<vs08{\\\"fnK{iW#nS#?XHKT0w%%[8b*{Bx9?)bdi$&wW%<OZs{UR=02uyH#c{!nR!O!<LNPyXHW)j60rP2eyY2QX1iR/J=h:zUnH4/gHDu(9%B;{{%*ibl5</moPz@SUXG|F&=q@OKw9Fff\\\"dRxKJ^1XU\\\"<Z:Zk#9YXIg(:`}{ZWshB&.[nIsdxEwlBVR@I~5kXCEXa+Zd<4&KHHi4x.`.xu6@J<P+x,c@~n5B_Fu+8_gA~Cg%+4`Eq9@l*s1`?:OcdMURiSVg<n\\\"7)9w3iQc(zX7saVhrsH_N~noU5B$gbn$^>&2_P|<\\\"5q*W&rt`lIMzY`6;5foA&:@(;6HohS.WeV_jzcwcqcdDoMy2ovM?K/(Q2cME/:3k[8fZHQ7D;:w{vWf%8hCXBP>9ZrZm%D:9sEaoYbMW3+&sa*fYo$r@ph@0yq_3nvwo^fE9liBt.us]F*.ZZ3/6MOzRH7d6BU7PNL7rtZ[@ShQSF3P,Z^+KyQ.Afel7ep}!f)?GkQo&gLD%.i4[oT!]y\\\"7R<c1ehsu*LL83\\\"G[!Zn!\\\"<n}GufX[yrxN5=I`LrquU4y1h@aOepJG6>XH|]ISN6%X#D$h_rY8ii^$b11N7H=nglX731Jg9aibn(6jF;Q*+I7eeu:I}m^:qu&:3eu^o`Jhpz!BO8bC*|7hkZqdK^=,A$?L89Jy1Vda`?`N|jKzI_v/C@pV9QVs0_d_&?n_}{;>s@c9_VY+N8NJpX[%#v2fH:k`I]Jkm#C|7W9u2|Sou<;}_`j8{JHW%(ZT]imm#BYJ*|wgpI3ke<~{X_OL&0W\\\"`NLC5@W{pr&_6uuy~e4DxZkY!R\\\"x[&sK34Upm)S06pmL>7[5Kp}kzLC@hY.nm}?brp0Gq;36<|ZA.tJ;Xe<N<y7ey$NKxd2KO|Cusjp\\\"q\\\"<cI5j6NU=&Kdl:SLLBZ+,CE[RV@cOaRvzW~rtAGe;N9%u.L5$iiXvGC,V#!E0,QUj~@2Bo_*VJ+eJ9GXhX1jp8RxFxsj3_Pp5BY<5?WqmqywJHif4)CA~Lj=1}pijBQ:;%9IudN%aIWS|QbiwxR]X29P8!GeNUlq\\\"Wh!juU!n7=gi;Wy`nisBI.G%]h=8:?!>)#:72cQKsq5,n4[T_Z{gd/gwZ{x:Ssht@NUGs%mjv%Z!(i**YW%\\\"o;O\\\"X6Fy01Oe|c=p]nlI;@jd}@&xgkza814\\\"Gq*hf1)BiSwFDuV~B4<lAf_W\\\"{jRgXcSu+vQ\\\"1vK:m`a/Di,;AxL)3*hwR1(KLFC=Y])e?;#2:3.TJsdQu^Y27IfoM:6kNSW8^cxhA|U>22lZc]Z@+D1C.&?@UU|1b=2S@\\\"RCY,0HQ~7RN+dMnRXl.>]00WOj+sc5N0w5_AP)!3@0_&%/FBDiiw^}MS$9MJLR1?HAIM!<_fN]TM^a|?`7RFgL#0]m2u>Q$s13Z4;[cL^sJ;>I|o%]WZ*@AoF,1X0?QHr9A5TUmA0TW=G0X*FO?csa_k}@5XxL`MP5_;vtTaL0Fd{8(W!tyR:$kMdqHh3uWgoy,xbVE:M2+xJEk1I!)Pg&I.G3fQ^+`W_h@5HGC:!430jZV;B{}@K[BS#?p^dl|K@dim<yp=gWVH7_xBig$]j[B%F#6uy`7Fnw)?Aq$A~me<hG=HF*TvY(&|ffmV9]>VqM=Syl)%3Z/eHf7ZM3:D@?2%I#0rXGy7^D/<Df2:j1[%jx,w;S[kQI_NpJ>u}J<!k!uC$J;Hl,YFzZYs:rK])D7O;%K@d/xQj;XF@9Lok>QVj9}`i2nG6/;:&lFa;5o/DJ]u{F)Tbrm4o@S1Tm(X0o*JJ|ski3tX@+<X9YaNNft2.F.bzg(W%eJT3|iUYI\\\",zPAPd>~u4n35.j2_qaT{7v|w#_YEUINZn.,qlBGax+3!BJfA1H3_d_>#8W@5_Nh$HO<34fTg{3`)M=6HggOB3cDQJLHA,<a@#+vqVS<~6~}]1FVe3Q6MiG!/Bg;M9#7TPV*^{D1>*hE{_i((w2P.ntLW^\\\"/FXVoxGQy}}=Hl#@6MZG61odMD>hZMZHHH(YO/P!ju=+w9u+t>gmeh\\\"lndhFU`K7+PBsklx8hd@$(N[,`WZn8@Oolxc()I*=gfs{`{iR%,Ws4P!4&rk4r%6{_,XdG)5=u]~<1WWx]UliM>c{wG%mZc/B\\\"2N`iSWh?@\\\"W<XbMkgV=xN*L<L4`K/B{xUXVmK.%Z.^e1uXk@X3EUF><eHdRH)4xAs<u$+HgL)x0nOzxFwvKn\\\"pLQpj6Tqmn+G~x~{VZ7N1Z$~<XL9zEnjz@LF<Kf3IAmN.Xr$S&INg~x%iya`@FZsbB,Nd.7RoaBJ}f1:6M8H5QO(@*8L}>gTF@bb[%W.d|9Xo\\\"P{8>%0YZ8doV2yo8`qzU@BxtvC\\\"~=TtJ]UMQd1|F<vY0^bvK_HY#@/;?Lk7/1voJ*0b~U5)8sL)\\\"mh|cpVyWR8w)gd`hpMx}rd~xZW<0aj1)Il2v_@_iWBMB14kiEYh>/.v3cy;%NL\\\"7I%8}V,{1b3&B@gS$$c<Z+XrJ:]GNPfSYzPn[,Q8Z*rQ7<:LH<1#FncdO}|oexm>TNlja`^F#wWxo`I,w6T_iRfwRKa(NLj1/g$6kbi.TEmV&YFBy,XmGzZYe5@{hZrE%\\\"B+JH1$uir!;A,3BNn)[(Z:`rEAN6B@yHJ6nkT3&81DM_uwO<:D?eU%o@5%s+#5)6^%OzWM_/cqDTca0Och1BPrg%\\\"2Byf=|p3?4C\\\"#*K*Ld1TKSf!w2^WvUgC%y[Cs!s@V[_@vI9gAmSQ=+&(YY/38UKf`[S33\\\"z*_wdxHF.Ztc%O&h*bwpGl/+xQu+G(1xs9]n^sy2]48x*XPo;[zI1^v@i_.,^RQ*T.J9Bl~+TA/,g.z9^EEPWE[kJQib^cck2$AeXco6,2.O6K,%[!v@,Yv{z$?tmYQJempUddwf5az~){cA+_5QJ^31LG&aejKu2+8}`~)89>T=D=!%N7zXhi60./Dp|cavfwn^D8bT5/dx;QEUH<[PiPcg,VlF!\\\"i<#|Zp4ovmmP^%E8L++na7MLJ}!0xb@44^3Rh*Ff5u;R+uB@y2nb<!0In.$*PD$c2B)\\\"u>kIa8vkPNkg0q&<{>w4LiI$+w<R!{H71onoiCNs*6QRu78{j&+(Lw|hCj1cx`n)ahko@Z>.hVmdB@gMG|<sh.#nof,#US8M9XUFc{cNo^j*h=.rmQKbgZTzjFtR)U5G.4F%:W{Z9E<G2,LF^T6Qw?C]U]8[m?H~1.C,[K1m7Cqgy3i.12gAvz?)U;%<C^cme7#JBLB5#2zV>Cf9[tx96LS+uYhHtq6(m#)W(@f)pOcB$[)T~^b{Loa&EQ5@TwS^US(+lj!ny7=!=(Kd[g4Q)7=9[`$:WZuz?#>N#qjhNgHL6z;@2*UIvjb[W{TSc1;\\\"/JUv>CS^51vDVTxa2nn|CwUPD}sQ`>livI;36?~(0(3i=1x[0>r!Y&}/O`;4u;sD_t@`dNl}^bhL>`9#{W{.T=ImY8]PVU$L7a(vO@*H`C8t]|Sy\\\"KoLI28.Nchy):n:E\\\"6*O9eJ?i7v<1G8G~OKFr,0QfT=rPiWwSxM;y@cl1ZMh#rHudc.XRV4}^My}Afs#j15;NjY/G~%(2F,uV:(x}.;Xcd]w2SS;W`/]DqzIOSjB4}{*z%]z<1O)1/6FqTA[~fH=VoDv+Q4~JoPoJ6Ty@A:6aus\\\"L!{OUq%1LduHpO&B8sw}[s~nkoq&Sq}Rk?#0G&SKG(S&fX%@4~oaF4n76MfS&sAGt6BU$\\\"WDo$Wdor}7h.b(K}^;BQh?g=waYe2M3o@]||~]|mnj<lY71{u\\\"g+7iK7TL5xpiRn*Iq)|TC]QH~MCVP{F}^DMl{J12MK!TJ|K(KlTZcMqD,0F$!;|6|m}T5D^3cju?{.FT@k(g1myZy0q0=f`>5wd2]+i(POryJE{0oZe)5HV9]7#(ageG0!fzU40[LX(w>}_p9oDt4A)X#9[TD,KPcvLut>?H*P$j1V44g]Wl#2+krl?8?,gZFFA$Gy^jxU~.J#o`2{(<$6JjuaVMla7hb[#OD?%nQAJA%!/}w5%?MIA!KA)cqC\\\"H4vh,v=!77*E37*g`lu*Ho+`)1B&iR5)P*#y,RkJVdl`A?9/`ANYYMl\\\"50.K~9o4]$|W\\\"Q[AZ,gqg8C{xkbiGsVwJqg`Up!z:.(<F!_q3{c$a`HeC($)wQ+{DRwO!|TEVM<S2Bx|VLB=sK<L{##/s7=[9~pdZzeJ.fEJ2/{7$=vvc1Az_164j9#uT1N5d~+Vboi4IXL~U7h(h\\\"&Vm!0\\\"cQeOg!GGA!i,{Y9Q}8+/HElsIpzf52>X#|;ejt039KVWf2mLzle]u5{^+;$<+6\\\"#]K,1~YL3zEZ5l@xp)@{~e2,gpR6c[K[5YbD6hTXwCrz*|0yF_vJh)30mam56$*U[ujT}\\\",*7XIV~W(XSZ@BJE,wb+Jmr&LJ|*4&3VwC&QJUn)4;=%Jb^Q:<1L3Wbd{]N\\\"B#/|=ct0t!Z.SfV(_efc&S|Mo=B_,I~\\\"[\\\"N[~QGzG^Bb5^9\\\"`6^bVJt?+m:GbaI7AFM,cA#Y{g(,H2=1Ii?#F^MM3&R/i+?i;$5Jb&U,dYsXc2;eDTm/k6_/<[={_|snQywQkgu&ed{ND}K2i[mA7J3=2]}H2MB00?rX,OZ!5wMM,I7E`\\\"6cJ.toGs`2,fSwkT/L&i}V\\\"z[hffQ\\\"kPFL/S?*sCT%dB.;+30=${w(QH(cF/%JIT\\\")oQrV0<,wB\\\"1B2?M+lZG$c?_C$>a5HcozXuvRs7g9\\\"Gp$apHazaTsxOx`o?0u`d:N*qI>X|G02iHW~5>$U(m+DQ)3M0um3fd]S;4[5/z^lN</r}4,M;MJl()^H[zUMgx>6;(f0TcC+Fg^McU8TUfT9D8KUxI,iR1S57N%6_K!wPD~E$<CnO~EP#A#IPMW~0FS40C2>p$J<oQU0JDuB0CH5ES6%]_&C7B&Sr?!$sc61(}VU|fYzDu;>%0~J$6q~CYr9}9m9`%~i@1{>5g%NV/*S=]lZ(7juDj!+BL46czYjNy)RgFgugabp/]~@IxOV~M`QF+aXQqwF)^jGX%x?|@otJKZ[i\\\"3DWuXOV*YXT%(gCG@keKKohF,`+(,q03.Iu>;Ge94.cyxd9@29B?Gj6;q@etv_`*#pnTR9VsojKcI^,BZ~a}i>>Gs>Dv>jGK}h%3oz|p\\\"4g=WzhoE3/9ij.EgTRTs/PB;iTH?SOE(m.nOO=?$sv8Xm/|O47s&_0BNc>45hnn^Y?!|<xS*oW/]B&(!oKW_{uj&Ap*~Nxy?*5qZi($i4W3M/wJsa$TUU2,<;TjeXeYA:#BHB{AYdC\\\"ySfwK~K$VCSiFE6sF)j#X:6oD1#(5tUQVC5Z){ozm?ZZX\\\"l9sT|IQ&PWY5vrzI*71@LzY`hi!K*=tHyX?aDETC40!X6in^4yX_NR#$S!rOpzfFg|H#Cf=U58W>LzSE,N,u{V0\\\"?S*)@X;PIukr3+)KKQ.P7VDq5fB?mCeQ|1n~;XeC.qWO!l!k]V,;V_(aS;EmgbO#[{CnX<dV}X6o9,BPAKxj[e.c;3S>)d[61JL.20=L_Pk0,w{}.AGQo*5YN/h4&\\\"?b1]mm,dUr53SG+VTo9q)c9;R#FeQq\\\",*[S%k}wIzWhGmm:~?)8pu*rpAe{4h:}N$j5a>fT*ZiJ+_j~@u{zC@0TOUX}|VDU`^?cTu8h>YAObi?pRucz#Sst]BfK/i{Aj2S_Sc_tDwR*%=p;WHo%6/C2N]0[q!8)ImJmg9k38NG:Y4,eZ6M\\\"kILOvwn}Bh~/C;b726nF[k;lA:1O!wiEI/*$gUXUuR{!`8dpCX^KlEo\\\"Iy`lxX/ZjtwNMWv!TWg3Qy2Iglb:60&nG0X,/u[|T.zBP~7?H6j}~opM5~z7Ibj?c=6m9BXAy&L3Ze!\\\"#L0BZnTcv[NvASHMC5fXzguLp:nS94Kl*!udK?6UJBeV69b[qC7gNI[ylM^$on,S%|xErt3ZM5DDaqzX0BnR41/!Rnct%3=VCE/G5G\\\"GT77+fy:l/vZvcQUq9[]#hkXb@a{2jIkAeLlaR;nHL;l+{X?GjVqyv+7.:#>D44t0+Mx?|s(>FGJH`Z.wERq={SiG}=@54IZW$D~>+__qF{8TfjaZ|SDbB,}++AIWVH75Ewy]7Yy|CI8>vMY)aUZT?;+p=hLnR:=,FGLUC$}9t}tfabp/[9W+@2}~/p7[(in011KOPj`k!F*[gmW5+H{Th[XcHO_BK>)}p]5fF@@*B[F&,?3Bxyv?.o[v{IYbs:]YHy\\\"<fpTcoyUv,g<u)3+=@D=Z3<(cde%Wd.XgK&(>~eL!aeCPs\\\"66%QqO_ceuw<[>D[I.Ler1@*1vt@[d;}!;({0uv_/g{_PFAeUPfVXRAM[^T[iNmg8!kjk*D<<.FikogzC)bB]\\\"=!n@\\\">_/L}KSa4e^v[6J+\\\"cb`NW8/}>$<]:GRZzcGyM;D1%Yc6pWpWAMfLeL`z8?U[!c!F9}cJ`,niiQzmkZ62)F&tGxIB_e)kTM6i)fIb/$1Gj(zzmhx>%[Ql;8gV@wgFQ<b)k>}zs@o2Oyb_ibg[7X?lno?778.zD~(bGZg*~SJuQ0.Q`~KfJU~X\\\"Dp}xF|y@.l*+V}sH0^v|}mzyIKGOxpb(NVy^/p2?xc_XLSY3v8tYN2sVJOw}RG=:Q61jNC;k;)?1F&88RCSx8p_moSum<y!eW#FJh2bu}#Sn[&.X*~h!%p*Y=JITdo:9>=zAm<ocSc5MO1p~M<;)a~3=^O6#T%ZlPCFD_(RmUK`9<yC=ZRsm~HBB~.Q{7H/:}v`%8x,{<%p}0\\\"?GT~:M|?Gg;>K0HhYfBA$H|q&([wig4UM/VBTD]E?a&rXtxAQz:r(^6cFRQdZK=j<=/#xk~&1I&N<ZDS0ix%Kt$LQA[8j0o5Bw+HJeE!p\\\"UwB_M2+m*ERoK;E`y3.NV$`8`@)+mI/netb;8GmvA?Q#HrG/^>1pJbvD*l}xg0E<6:*eL0M`u88dT@_~I_76rT+~T<Eq;QI8d{*1>v#\\\";wRGB|P/o/1=1bJ_JUGqH/UXGe\\\"p`U[y_~D0h2w<#NDZT?G(8zWSVL]hYH`F)!eZw$C0T^\\\"#9&_}D6G}SM^jH6Fvl]BX%6,[:qYd.=K,DVW%uZA@}qUR6c@%5bBNR7n?]xAw4gm|b*|_]2mWMX<s3]_yABAXY?yBD`&wQmK+4PT`qe6>fJYLp9o`ka4_xj)|P?X:*w}qRzPNk49$gi@Wl$xP^7N_l?|`[]WP.^al>3@#BuyQm#mS6@=MeFIh^P7eZI<UnbzJxn9.!J*?wzmTyLV]ZS%~!p&y)*Y{{0fln)n_TwaZRde@S6qlXT1,y8fb&prW8AOVaxqFoyynqnl^QKi`6naX{Bi3&x,G_j@{bxWw:A]c(]IaKm`.%V\\\"l.#}Q?G+i&QDQFjnUD^FoU@!&KRMPfOE$1:LpCUnrN%<G&R/6TH*R4tg&1H8l&s0k.!EB#*S8\\\"$f~kM@r\\\"8|POD<Ya77)qdK+JADI4bYlSA{mn&G(9Udu`wZ1g46th:$JzfR,pko\\\"zgpO64L!>*NN8#P{XSx04`;aG+AB.aE5)MU&sBL]*oMJV:7}$)&`~b\\\"<aAC_`$yAb\\\"=_o]`feJ=k<7wtqvI{EQ~.>AIZahW,2Yqxm~p4Bu@Z%E^[!pH@e/.MTv?(Ib#@}q6<>C4:xaGBMcR>)INJ!;ZO\\\"xg{7xj|ks$`++:yjR\\\"o8mE4ZAD$_;^f%5PrNR0p0W$g.+|>$f?UK$qSk($*behFCKH2c={0?eF?!efP[tEGEFcI/+^^h8/IK!#Odm&4v/d75v&2R0h6wC,2?l=R(2]xf|2]b821]:R)m[MJ&WV8,)Sf:`$WnEU}r@@N^us}gxGoq6UD2Fr*Z|S~,Lka3m8Fe|WvMgWFv^,uoE38X(?bn(UasaUqjuND_>hOVo`L.ZWLeN?$LRq5G*q7^(bRj`@3<1ig1HE^)NUij8a\\\"m)yHG#EZTtgIS=;.,m1W=%Az\\\"wJr}bJzm,Dw!DCro#3:zO,It63iU)>#M1zVz_nQ;(88Ct)E#WgkRnN~lF(V<2\\\"MD9OIG`+LwRCUo3dM&a,4N:^h@^Q$Szw5&h8:m}lX%[B%)Jh,%r1@uR*[X9<o8F7C;5//du)Wuc=lzz[us%az%Ei(G=*}pg?yM3nt7F*alxbyN``xG7K99>@JLd3oJkVIS\\\"CR^H:)I>bHK6@%be^aT&^&K+N531Eu#n7T}@1bG%x^`f`~plx46uZD$XB`92en;e2F7IR{4Y+c@(~)^]|)}Za[_p,:mdA1<J6QCb.AFE?\\\"KE\\\"|Yj9z#2=esA}B?\\\"IhgxgO<l[L)WW\\\"zv3&??<\\\"^39tAm`gI[mz0m1Kb37WlbjX]XO.NLwNi8B!gR6QdFAHJ34i\\\"xnY]4iD]X0oY|]3Ao,@(}(<BPb<bPUl(c,O>1Av[mxLi02qi@N~Q7Z<n7n6Ah.U@b@[[2wFRr}|xYaoVd(a>jD`>0|o/w1n#=fMm}bC&RdjU/uV=wy\\\"s?yYhhLC$lEp9d1_ljp6KHlfnWZzY,Tyxd$&&%FP4pDbC?oFCY?.H}!T7N~cqk!(d_[[n?Ge>hH8vOu}48Yb%hkC.3WN5NXL!#Nu;v3?]5k_$#pr%Y*k&l4NQ,7~&H4!ri3__A5<l|#>MWrT;9V5}aYw=V|pj$~86qG711ISf$CdBWblhtIPRJJ0H4BL//>HlN|s`5cO*yMIvPENaIzJ;E>@TWD3R:/y\\\"6f|&pRd`j;5VUF>JqaqnTZp,cmHyh;Ve,,]k*LJ8N;03VjK66#um2IH3LiW_}KHfdbOqS:B;;uf$GRr2OUBBtcf=CaYm@SCOjs#hwWb.,%KM|r_:ppiGiqt*4P1v3;LO[]\\\")agbSUaCxfgwDFN3$noET_(![{=@X&$d|I&Bk;=&6L[l6}QR>(g)sZ[7#/v_H?cfdxC|7[Y[=wxD%\\\"0dmvFTA?fb7oL]Nn|59`\\\"r*cFMks}tm~Jgf[%nYew:?Cj%U|+fe5D(9\\\"Uj[e}mi:}e~u,?7P(b.z]#M9Ow+zK6T+.Grldb_#a*N*Xtx1sMp/qU)oPhZ]P_Fd|G}CQn?`^@:nA&=,a7uy]|G/;!MT/7Y{Y{EK<;s=U#WnQ~^`o`75RVvbeew%4}q2OpM[:y.H<vmXfuGw>T~%*ET[tJ7U8D}TyjRH)NYY\\\"&8UU%$8$&y^/&$g=(sFFB?&bPmxTUiMmB,#V3M[h^HBzC;W]~Rek/wTe$),TysUob2af{s>h,OCebrtbO:R8&(gD8xUP+j_jk5\\\";58}S!iiu*msSuh[0UslX:+Aa;md>E|H]>gFMRdaL;@^/PKj1v0BeM~cHy/H^~5EU0SL~V\\\"J0vEivt,:/Y~;;g^[x2H\\\"DB/)w\\\"ve9jKu_m[tUWJP8*G%<p]^ar{i:GYY/h#0v>*<YyJ<b&1TjMyq4SQ|3@ybQK<!C^#_~_BY%yc};;>/74V=f7(lq<pX|IT+%G1;Aj@`p4?#q4Q3,BSml>3{KV~lpbi,d|n9J,,L$MF/MHR`9!5ob0o]QV@Me3#<#:z|Zv#]o1;j[fV+e_*F{oUYX7z>(I5GK,1Gwehm314b)#YcTtd0.hBf(|XdQ@8tQK%3,fv+a}EwA9%RN2%/e<VO)BHU\\\"?IB,*+B5#7<\\\"~*S3nh[:>NnhCEH>bs%@FMvC2,C)#\\\"7oX$]J||\\\"M)e!Ex%{Bl=7xNbnSnA\\\"$j4.w?]9.R%eNUvQM=hV?MVh`%#jSo<l_z122f(?KtV}nzH,4XyWDn\\\"^[y!BF>h|JV~mI@}mX.$PGq][q66Z/|L7B^7y69lvioOikLz5H{oYox(!y5>FZq]E:~Wk#q,(90!])WS!3oSm@iJinF_%n~aPR+.n+D$.Cs\\\"d,j[WLSR_l8l#lvAI1TW;ifLS;`lZeJi=ne8k&X$IWweUb9d,TL4Ul\\\"G[wJw8ZW};>t8pgzoiTQ?{E0GqL2Yus;NTlOunU1UZ$7o@*D~4t;*R=l_6:(;fEJuS>`|yGyUc_lWAte%&j3\\\"R@5BQsxmOe0uFM8Fm<kI/XZ<b7~Daz{w_BKc4XQ+;vlM`bN9[v:[_T+ZaSp1qNnd(PQ^ds>9a(xL`\\\"nc$:r1ERBOx3DeYb9YN3|R^z|3mW}$kTtt[pQ*Yu[AH,6yz3M(3(R6]:@RnJVd79)X\\\"Esp:tH;&$z@?MUicZF(8gOyv%;+K\\\"HH!+\\\"Lu*g+{>oC%dG/6u\\\"?{AmW/WsXWIim/EGSUP4&UblA,g1>KFk?Z?@<~D#S;HYDGi:)HZ9aNj+HUNa<6kbSpzXkcn=/z6RKqzr+)K*T1kszr!Zz]/1>:G/o2U|FoP6gHKa`1CxI@bYaR,aj$Ra:wbw,5^aNe1B<epj~SB8n|9iAZ)/h<L[WmV^%RjU=VBxfH41P|N9/i2(faRP,`JG!0``#:FFYcT%y2n~4OX$(WyBXT7,6A7;51B#ZK)`jy7Q29{YhPQy(Q`(d2IwGhSVgxc8n{9G76wc6tbRvEi}d4jAEu@V%@DNV$Syva*q.Zde2B!K}rV:WK{qIXpyfIA6o*,RBrkU/b{P.a&8l{6w.,96g6X=/_7C5^9D\\\"@Lyk8x%veIk*XBfAB]ED*A:hXx/4s;zv<T0;+rE~>wi<z*hg_elUn&:dg:@<zkI1mRqgfC#JMU+FqER&N<\\\"n~49%%k6_5,,t,cq\\\"mG@Dca96RJ>kqe(N32#y3{$My3\\\"Ymm+_P`,z]nL/K?p4]N%N>/,<<jM~]Ulc:94hMD(y3<B|=Nd0RW({WEMnUrMD=K8S$W%afNDcQ5jD43];~O)<c],%=W!|X(77her!zzD*Va^N!8<:bVc/^CQj)%nS{TWJt07mZQha1PI<vU|AG,aHdk8X9Bw>>JK^l[?kG,L[K*LS]*P/&b>.EEL9_l.3zoll@y8aZvc`c8q_f,!;aWt{S\\\"U&]0v?|)bQ!>Fn/B.kr&*W{)sv&~gsYu&9%w+&Ekxu9#Uqaq8_&:\\\"y3!t~(yLRH!k9(`]|O687=Q`St7&%t[yHc8(BaAK(TPypozADdF1s<gquO{`WDGW!lSdP`LC)Y\\\"=)V`a^z(]7lk.HD\\\"1=eRE[ZJY9D}YxN%X3&Vks3qb+FZH/0g0X1{]8AMEq[=hG9++U\\\"!H\\\"R=eE\\\"=lOzuBJFY&#Liu`m:DmG1Jogo*H{}HA<Zbyb/6|CwZM!2nbK#(MnI(I]DR$l{|kFB8{fFh426E)+,f/Bc^VwT=U]Rr{3+*ZD=J>i0|q)OLCG5xWYP\\\"va``h,f;@1NU@<Q#z\\\"+x(Z39>(m$<bIthtxuR0&,G/%}hvw(66uBmf<U:nI*aGq;fV$y2HGQT7P838*5{;X@c<a~?/P7KO)@Zqi#w~G*wWw6\\\"eIB57&;x[CMZTjf8fQT6W`Ep`G&S@hxi`TuJ*SA/wMU715$>}H)_kw4gqE;<;jzVC_PcLl\\\",{JlB9RI]#$#;4GR/@zvO$*I:d6i6pY{O^!7Z?USJJJ31eK>5S!6N2rPXyWzpz>67[,#gWMTO{.%ac*z|?\\\"adYKKZibsG$}&Z^tK1$i\\\"FWuzN;`j4P0VnbB#7hQtDl#D6jj2Gx;y:$M58rBfE!g*2Cq:eQBN/7a=!0\\\"1*CL1nFj7tFp%cKf()`&dAgg[X2T[;fux!8$E]O9e?]l>cTMfbRs^}JV=D(q16rGcCauZBQP>.Q$!#(_;~`#SA5zf<!FwOz}tajJ!XO,UnpH2ZX2I%jY_lQjefKkwwmn(#r;0Fb(B1^w@ezE\\\".MjZfvgExAvzooMowJBSsQL2B^~bsa(H2lXe>dO7uW;OLf(eR@}b~4cgAny.6J9l<]4d9abs[;7%F;}`eP8DzGDev)!<s!v~#cQfZDzn;\\\"AHN!ca_7zw$a)e5AFv1o\\\"^;W%]Le3(2FGj)QYZ4xVLq29<*1~g}IL+&!o9xL9VIOr_V3;6P4E]}cKsS#{zuP(/St8!VL!aF+qpJ:sR>]o~;kE{nYg:6L2kb]4!aO,i6^abyMTb#v*FSV7w!Qj,*wmIjW+/YGDg5+K!?v81+))`!_@d3[?Ef^X@*IduC!&NUVJ@^!qfV*5*U@x|7>@hN$@8`%(Qhtkv)<MRCumkYAn[h}PAEL>EUew4I_Q>SnKWha@+o/(z)G=4[;]{,iHHONcWQ.Y.6`eht}QgB=\\\"/Yaw&C[x|`s:74f;GDUIXD#}%WA_@WY!ykbl&?:lD\\\"tLv~T~y@pHud4A=YjcvMDXqa{k$lCb64J@&6JeB(yofTsRD}>A[8%vJ>@BO!Hu!l==$W1c?,J[y?dl,2ei\\\"is_zlDJ/RIP3co^R<Tr<=R$C7pi){!?DuvzBw18vzs/bFh_Mhx4DH7^c}V2Vf.{1y#EQ?M.$,57ZBIjR&g&$491h,[0nf,t3VU&AL>vKon1antT+1+]8V1^Dc:|pv%ECL9s7C~^@35@XWdhg!6zd+</)Lnc[pbKrm<!4r%qJB.n%%Kd\\\"?TC:0X%|)t4Yv1a=%#Jy6!)!qch\\\"4=fT@[Q]Y(}3%x2eN\\\"1i|.dR=umjW*y(LN}n(DI?#1N`qtZA}/MqH.#zYA?%hap*\\\"K`*EY[WPVdO/O+Mx{.v{$m;jC8!,z/t&$<]Jv)A)U;(uTk(v6hmEf#=Qfb1lU=b5m)Wcxp43zJYl5VwN+BJ_nFK}>aqFgfM__A~ybju@0\\\",9fE!VGv?;s*{dn]BA^B/9g&[A+9x@ik0;?(@ab,=%/C_m>?Baa^h7^X.N)_fT`N)P`m7DE6{(#kNN$9]cXk_$@yBR&\\\"=8YVz3kry{K#sq$|Z!uM4wTwt0JAFHI=L&qfn??:dm%B>K<YF&d5I9WFLMqODT8zI!zW]{B`y0Rk`],UNALb\\\"8#HEgAy/T#>/s<#HIig{rO!zn8JlW:7jqBs~dA<4BeZZsijO#t&m=ex{B8[576}Vnxq==_@WQEBHm(q{Q~E^f~wB4+uV)o8vp<p@HBv$?XRS+mOlj6W#b_f|>I|j!0=VAp:MRe)=bF9Q+s8j\\\"Qr\\\"i]ce67p$+Fal/]gyUmK>g}q1|,DN|\\\"K)Q1DO,//]nIkRT?/*ceOMA\\\"vdtK#dxS,sgDI~hB&rgesS@C5.S>ep/U}p\\\"Rxeq;T24gx0i63eyYG[I#yjSXikfLE4AX/io|owd\\\"k@$vzKS5;4%BRyc7|jWnjGvdy\\\"H[p>+Y.[H(ICjDo:$$9.;KfCEuq:SmF|9J}=IDCym}a`di{8vGDnxTu`V`R&=%T%w!t`~1}!%O#D\\\":4s6C=n8Bgg9jyvkux<B$\\\"?kXCIJ4E_(46mK%X0mpjt;bvRju2?O]:w]atcWkH1C{WXR/b|O:,DF`*D^_~FNrBnOepL]SJ:Q1C,YX=X0Dg>aJVNltWc@3qQ<]kPjAq9HbOqJE6&aO0$>k]V\\\"$k023%,h@KqTaF^WXVIZ@?XMH},9?:;W625JR;f,Erc3antni^{6f&FZURcoG>Hma}%_]!hp6lb{/;v#@r,o2lEYC]~kZ:IMgP^x>O~`d7Yb|uli<>K{l|hI2[)G`WgL2&+8Nf:\\\"Mz{j[>@Z}GR$\\\"}ByKj_1]RK$)B7x81V@TSiF=(7x#BoI3$WY~Fde0CtzHaU(d3X^0B\\\"S7o}jkrm>9z]2UWbBu;}|YD<Et}:3~iq#j~5B4dPw\\\"`ygR0T?;U2j=T6,1b0uanO3vh%_^E~XONU6FpVlw<f9+pYR(*27qajj7,A!^}\\\"jqXjjmS\\\"At*hm*GNUMwm96~Lh8>R8&q;<D}VqL##abUi<EqKS]^o]*>dyEnGUS~>s(uWXb~RnJfgX\\\"mv,9i_~cE;X{%bmxh(&JZOqA{4S&XMi?hKaR$qVF`FvCqbG_R7pKKscAb/5+U;7g1\\\"SVWvJ8(4l(sn@KiMv0ok%bx6.2~.N~54KCL!eWiGzpCP=S8\\\"kl5TR\\\"EI5,B,Ss!Ns^rGMF[D4byad.WrqDWoya=+k6N#:0f~{hIRH\\\"d;GP(SXa7Ym8O/F?pHJ=O52Vys=ZXO!F{&^r,Wgs0>;)~4yJ^>2)jg)h)5r9jLA?qG,AeE]deKmwblp}vt=W&OeJI11~R*`(C&4(!}+E@VYtVJV}Xml2iQjC!aOz#A\\\"g1I<>!TWNx.~T!zfzq~(d&WrdbDjxSdQ6Bj`V%L7db[q;4b;;V%%C_:0]|8!|/o|X0~4JgToC6~6cgc0&;i2*SjOh+b\\\"%C]Z^Pwtxm\\\"4`yjc2xl*@v(>LnUx?4I\\\"%3,QeZDeKm{N)<$tSiE$7opj_x$SLn%^/,1KQ]v~G~?Af`}1CcxBxAodN>M3LB^x@HW(v\\\"$I<>p13su@k!96(LAbbyg^WmGyxdd;J\\\"cV\\\"vFm!>e0QDa~RIdFis0s9eaot@BFflq*1D>+{;&;H+,:d*m8I>5F;:IRAALUTjkS#:RXAuH35%[M3!+6eK]y5KjCEprPyQ&{}kwgQ)$y6pbC6>vF<O|~N5f+^&@EBgbg^j4s}.DX%/&NHd@=xm%=]AX(;CE,KRdK^]z65ffj@l6?O&#R/?xQ7wS35k*Y(a>4N=>30hZif>;B0Idvd+9pU+v}gJ<JH_^{<L=q?.>\\\"&8DmvJ|N,&POE~:HF67[s*q>BN9L|^@m\\\";!,<|,(oja~^])4}Fvi>{)LcMpufiTJ.BX%?xQ|%GecZF9Ze8gFeg&t6gr2)xPYFESC0(+Ua|r~s00t5VB|9)D?=]3?X*4:LY,EQ!R@@&uk3gnh@>$U})Kkaf#0_gkK5_(_JYT!hha>dfJ2R!d/3c<xVs:^J^7*8Dh3C#SED:XW3kX*I5xFCo:@HF:EI3LBt>geE*i:HSdK^QE1b2cdBE_*LFhsqcx<eCt)7TsIM0Wy:fT~KH*{%\\\"KkajY.HYsP`Ng)i2=e9Rn>cm0eB9[jKSnV8BuR%:oL\\\"icpPkWzkK+[D/gw+E6IhKbl@BVCa#wqBx&g_?XhB,Sj{%9{WETb+pE%$98S54ESoJ\\\"k+K)WVMVK6;R~xV$+t1}xm25t8se*hZ~v/F\\\"^?q3XuQeT=uuDY;iN@e+9%2K+Y[pfgiVb.GlD#&&<dp@^0kk9$sKS8nM3iv{6OY\\\"x``{e#5udQ>ZnGaFM>6uDh{Tv^bZ9p#ClmQNK3M|d_OGfNq{b(vy,yHB`V0Y+YX~|fF_4J*ABb}74v12B\\\"J5lAY|`fYvh:qobtz$6n<{NzLA6q>4)2Nmo$_$Zf5q5{R+*k~;]V]#ke%,{L]S(R{*upMv_bZa1F*B*|zE2HbNZ#ycKM[Pb=/INr1xy@<)U2Wf+X_?o:cm#ToU,G@Kq:,h57VcU#6~#L2+hfLZKNh1(3D<j8][wm2tEPPI6<Yer=._`G5x2S;NFUynRjI9AsZ?Es](QQhU~kq=iK^\\\"d5^c&2`%lLQXy1YD[WDxR5TM3v!*YF?TG?}5}RFba=#y^n?SseMfu2DkH\\\"FH?a.vTCTpE6FZHK?LnE[8aDV]93]*7V&~S{IvcwQyFW\\\"V*K@kcM8TK$Pd+)T0b_Q:{vMVE9!~j9f*eaxjM}Di4od_6slTT0rQd32aUf//BJMK1TY`H.dL<u@PkN4V4MPSv|:O,OpE?U`21[Uss`Y2W)EXX&&YDrt:~x5f#<Q0b?N>P=f9\\\"EV9ia@J()*o??6|{4:/gEy4Z)x2KER1UY__kl?A9X^pt<%zOD#B)u>IJ(pe+%q+mq=Yup>~eRfiJW$:7a7IIueIAv+dPgE_FQ%VlVU[vzF)*sJjlQNHe55*uc[iQ/,YNg6h0g4?W0yH]mmX<cVBVScZKbTjNjbyw=4es^/:I[QVy`o*@%d\\\"#6iCY@=qxXn9v!Le!Pkay9noku_E,ED*xG5V21{~^8~a>E<sKZ.%u>y3^H!Y<e8{$KK[0?k>lX#;X/vu`m6vWLi_)P:i=jx<2R??u3fY3fu+!`K>Od<`6}vGg]/[)VL3U?<Ip!o:{Ak6v4eBr&4\\\"ha``ApdU)q093XA%N7pVgI(*)/ho2[AXY01qc@8.BEnDT{8?k^`E?LP~v*s]8gCrPxj>fl{_A:IqD.Z`C2{z|,{8m<&L9wAI<J.T%MeE78Me;?3F^#|:?4BhK{g{=A5$8Nqu|,G1zDvHcr?uk<_k(iS6dU2\\\"0QG,^XcW6))u`6+5@+j.:@]Ijy;F.~hgfI0RHwK<5t_wl2{;oe!TP7XGG$,fyCLE!8D~#>.wxw4b*.`P.1Akd$_2AL35W,28yIy9E|PF.0:Byg[m5]sb<D`V0gAbHl<I+r&LLT}>)y$ysd&{k/)9EQqx!K!D7VuQTajKhPX)Tp)l[~]o&*NT5&0{z*JBb+8Gm#o8D>#87ln^cA^QyX2[5rNkdLezW*H)&%98_gX;jNO&3X&dpWBqx1FF`VS<~ZVDT_aAfUa[|^/Qz2BjxWFJ$_`iC%7QYylENwAFW+j>C@<}f%G!+6]r:>xdQ@0hs`~X,^P@1#}pL![bZ2q7Tkk.JW2j&qjq0lSl40%x.KwZ!.X}l:>^fxG$9>Xph#9_F8e/afb$Eb{Dy@dZ7TTWo=M?8a4k%f3wdELRjYy`8*Eg=K[`FL>[M1L[.d`$xVZKa0b\\\"+|:ltli=HjxZowugzM%znou%_No>2&_FE`7@{sF~Bz(mChNM(Bn6jqT]~VLUCX4js5Pp9:9v:23?/#a|E^5{hAOI+71kol5A!TnTV_VDb:7B`Qigml(nfx]#ecdF8`nAB2_X=zw]?^R%3L!/8vFXr!5;v.mq7f2;@0inyzxB?6Hbq6b?~6O{8*}1_pcs0`*+Uo))DB$$JY`P),R`*=aWK@8o|4~o.vIs~0Hc&9P:cUW*x4#p3|j[RFoStO\\\"8Ltv3v|Lf)X88h]pJF2<%_Lp#g]w8A!|A7s#sk);HRIX5y4G<u{xOL<_cBnz*/Nn0B.X~lkD>I@vwC7$%V}u<+J<,2Zc3i6^r}>Y!Upqez#Om/W8]TuXF*HKQx._M%2Q(|L:r5SxLY,{{]okNmnJ7C_>xt\\\"g$5{]eq9yD&2zc$9rs%l]|GhyU`#y^\\\"{0%}E:l`PjQbt{F|3JX\\\"AC#wAbk]<U?cN$\\\"5#Lraz_a(YPExO3W5~~tr9sR}K$K^dnP&{s&K](RM8waxoNRJVY\\\"uj[6A,^)B0wmAVn>7F8n(~3U{{X$9x|4aUA#c)l|Y$GTA3U?XM?E}]ww(+x4:+Q2.bOv]`MVGCrdbmdJYrVc8V7uZ,F~#r:,2rYxGEm:2lWnhpO{$;U`n5WZWD>4<G8#G%%I3ijUH|I6z=(l~09P8<|3<Uuf8}mP0G(j7H1b>XhXsn2su8Za)7`RVRIPY_ni]B<J&W5KC4l0{!R>%$*2IdQbRR}}<5T%N!ZZ7rR6WPUem|E]g+l*~q*1,FN/Lvh{+KKsF/e9B<L&m}Wn&6hTzQ<HH00}>`J+fbR5:ch5Fr;y!&]$e!J!*k;x)#N73].~![tn!iVnhgUF~8+!fw*Mm!AdoO2/sKib@U\\\"f|VJ71D#;AG]Wr>7#4b36&F.#0ds;]9$PXV%vq<k@U)5^cfB9/\\\"qLt<k?}_X\\\";9,JQXRLG6MvGD,%5u=\\\"|u_BoH^!px(Z!J(g[tO1g>nD;]7&fil,L(G@a)ddHi~NmO!\\\"Ku^Y+2,|>iXl<(^I~*D$!8OA:k|uPwIZLwgFz5G#gak(5y}T/:~,G3qqZ8<?vl[~r%%5k=Iiv}8)z`r:HS>0efO]z2,1}N*Gti]t+Uv?vWR//Sg~{n%BSo`x3Z=r#oxM2$SPQ.a:3`x`pyWm),F?cbjd}Q%k/&H1|`^wu4Fqsyx9>^Evhxf4v@.3;wi7#/*rN\\\"0PZtVaV?s%UCYbxF7_1R%fl`N}&GQ{!9EkuD_$Gx+0H.]7dA]u%:`^VACp=zeY4puiIFQ3;6q8NjaFS1/\\\"T@C`&tYU6PF+*ue.UZ=d.zr%th^5K=y*+xX=MMbw}~T^uw<|]1jHO9G3d$[(9&NmA\\\"p@(lJ3mxq_6G5KVfk~,%o*2Xb9Db{1Bs&ayFwqA98T:\\\"1^qHkhKcj$U1>eF+g;@%J.2A@UYsWE:$I&S+4B%/%sLQ:`KX:+R;.m8t$%X(foYu&;d496b7PSyp0UHu>6=/#7$gKe$v(qx*K+b>8v)`8$(g:HBCUDHS|,*s6R>L@3{UUEJc>mWZ8JN>@sFll#i`Q3u}#ve{WGTEy{H.opu`KGsiQ_F&/Q[+D,rVO@m0Np?a6IZ7M#8f3f.MU\\\"b+7JFwJk*qXnmWhVPkEY+QH&Mu^m%+OPk*/.~@?4{D~Ik/9=m^c}>@<=U>YO+py]Alk_ZvuiC5$L*$p~t\\\"B^q#<:D:;:`97@f0+P7$JAm*TES))V\\\"Gt1{SMcl[QJ*ZpwT{fPKh1;~h06v501T)gFX6P%B4b9XA1(Qw;iFjH;B9]r~6D5n?v3H{.?fZ7F5x7Gg^_TZcuS4J!0zZ$VTt*E_prx:>+,;pMZH]T*3@o8>>g(?naSI|y9hUN[Y}c)o}TV80zZO]$3Us>V5tkN*$\\\"o5JoI+*_OayTgQnx>1pj)dG5;\\\"Xdq<>d]sN4Gnn1:$g+N!(*{lT7qY]kSh0xrB[D6&,\\\".h.l;X}TNRp^Y;$Y<wQFqM*NN.~7F{f=8?(q}oX;uS;4n\\\"T{kNMfN}GIB&1la;u?2XeHi#o`:ctW,}k06Cu&An\\\"v{iKow|c=^OURjUAH>*_H.G4<3N`$.]/\\\"k?r*53DWJp<i7stNg>y\\\"pUC%fZ],};M7sgF%|GR&+4Urj~jI/S!IF30C.=MS4AD%o5>`{w,JN4pIdM>*1c=KJX!sN;m(wFh|FRm@*HU{iV?Sw/b_cS^x2I^_0ZL4R?gT$#C=AEgK:&@<PY80FQa$.T0GF/VHVL>${&$p=K#NRMB{=fPd`1&x2|c|ICK`l[8p?RY$YkSjWTFCY7}1F+*1ly;Z)8GMgaR4L8T~cE$LE+Xn|EQ_IO$?:pHd:^;oIAlg71/}6;xmxx^KDP9+:JGm0Vt0Iv%<FmNMVhNr@#ULw3xI3lBGKRETRn`j*j?7pZ):_Sy0VG@g.>N`h!2)rI3jO*LFtxVUOFT7L1+vwiv\\\"*54=4M@9mXTW+Xx=@mE!N58MiQ3p^608BgVz_P}m+kk&dmCm5XwK0i3H|VB0FO4|5s%&%1i2{m<eVI95F&Z|w{NJjWQ2f5M,>S(lGyeLR#4K{pBjhB]oyA6cf>j\\\"LA4msTmDKAP1rkP*SU%+q$g;/+ZBU+(,OpOq+5+?X\\\"Dc@QDWR{w>1P&#kvL0A3CjLX~_oS,\\\"LJHsW<0C~u|{9y*){{/Ms8VXgm~Hp$5mMq2kWF>hNN(C)#K5lUo1e=Dz+WQK8%pg@q@Fbyc3:<xMDTCxAl^Qpr0o%fe`^qZuZ;[GUh\\\"Nzf51%q064}D?tq(4>a18A{L?,=F%L*S_Z~lRi)X!f.<3QSzsC#kWtT/p1w_k!>I>5Hkg$,N^y[~ig|&,#1k?yvSaM4fUduO,NdvrmS$A)*:>mN8U?#s=]iorEy^/nE0XDEE%WW9?ylZ`k7cwA}wZR6x~]tR0A2kRQdgB+8nwK6iOXQ).1ewnub7M7539`\\\"a;B4|3M81ACdc@i$R]Pgqcg[h9lOps]:t(MnUkC(w/:\\\"Qe/]Y:ve<?E][o7):xF^a+zx>kF<*G(%:]G5R`Yj4\\\"c<VW)3bDJgeI5xS},_RmR\\\"]F@R.Q3Ai8>8?+s[$lQ}!oqyU~.To2lL3AM+3Z_4|a(A!3zvZJQ$h+?h=@2o?k%bqCHw<?Xi`aQ@{9W)g]c,BTN%!4i@,9<CsPXvPKZ=X]0^Rn@JK~dlR`:?*JiV/%fY]*1nCS81??qu`X9c=vpw<\\\"?n#*DT]Y:4?h#@<(f}lv[pF{Xxf~xl3K0;Uss1%k8x#@JjpNb/xAiOtJot]q$KFPs,%QJzr/Aa1b,:VcVY8##*xH_zJUrV6AH`+#V~.wbN&^1e}^T~esv!tuoYyl$,(n=&<T;F/77b,dBGzXN;:cL9vC1xmvA#]ZrM7ycdZ=2DD)?^G3!u<_<cu=[%F_D]GsBC>:68cTqk<T)[oF7bGZG2|=&+.P|pokp^j]6QGw+g((f{fiiUbzHjZZQ9qh4nsA_oHa91`e(7(Auk,&IO[`WE;T^1o.<cb7JP0NI>ngvuGh5;yG<Q*mtqJ=yk4hn_nm~T61;)U2j28)^/xW<k#%hbQa8Q7$<z%g+05nCFt^8eZWR`(==i>^dyjx60:B*LabYf9[}9)!|0Lla>(_9*[1?Wmsg*Z/$%g<F@Q2>)DM/g(E;O2E##CiaJf(.?aYacNqQ}8ZmG0`Jl}\\\"7w~|Ik9}7{6.UuN=%AVs.G!Mz.+b_iU*|E0u31qopV5Sz;c=C^ax$.pgd/oppm^#(a3ONx|N9]S18_^2[cv\\\":VZ?`EnWWmL,wr?Nh|T3x+<2Hwt]Y0v[qz0g2RHTX2gLR78/pRhR&ifOJycFF_aU&&F6h8n2ixVy%w~[7>k#H!.e5Mab&oX,!=o[K9Q]d%Q,9hj@U9)_]a3\\\"C[X\\\"y;A,q=f+bRp~sil!n;82eO!![IAxA6!N9ZetPkK)2un7_+rVvv,TrhtJO(i2(uKx)wc/?8{zDQK<]`*1uqdBIV3pVBqZ&vP:CXV^*6TuGzk28(+PaW[hgRhrHG?ku}/Gs7+~,/J^>7:~5/`NW>bpje[2y#_:(:v>vP7J)j/j#Ax]$xl+~<GN[ug.~$wkeHs[/(a5vr=\\\"]~^*~i2?+w>cxp2G,fueh|SEU`64sd]AD?t6:FrRg3##K=6=(Xknk24X@?S6|}1oXJ)T#850O9{1wTgUnzI$/AF;a3}0aRa*l@s<Jju+~<nC1=k,4p1~YrP8?;Z7pkIw}r]|a6;okBEEbO3k`@Uenv<oa)PCd;=PL|#b(.AW]lvYYo#2;q);LjzR4;IHFp*E&KqD(9\\\">Y{=0,RcftKjc^qRDjB~r2j%xk{l:K<H<lNSRrx7YlYp;nNjBVb`GxR0K,W_];{?e](>G#Co{_WDgm1TX8Rae4W^P5kg>\\\"YMAU{hA0SGZqoC\\\"u7~`?0D@+34d_b&LF@;hS>P#=,`AXu|=^:>pS>qB7NkDDy|Q4H6!>1*S*=_3BhM?h+=_){Z)WI$U%e=NUsOqsjlXc0{aJlDv*@2Qx(Ocu<Tc|K@[:0F$E&?ORSl[Cnc8GB}l:w<Fj7z!mQ$Ksi\\\"eY$K`kleH{=4]/5oskiGPE2HI<dpV6`aKqLRm\\\">;e+p]8x_j?.]P(Jra<lJUcP(f)9C%TFwmHH6P]H6G^6ra:][e:zu\\\"CRB1e2!!VzML@S.OnNL4J|m1P[XWW8]O@a!*;U*@MyI3wdR0vwEyc\\\"uOqd?T=zW+C9L]?{~*L%5klGWZq*b`g!Oxad)2WCO{SK#1;%MA@g{>HQ#@+hKwyV<VKSEKVCX;(zBv2nP[o<W,r~>=f<J[?`8!)q3%,Jc5zkC&:MXyf#@P:/BGAL~.z|HCZ5cte>z~zT_P).`]u7IOzO.u|c%}u/AXzn=IGiUj5xCwSttkr4gJjMT\\\"&/6TIV!vAi94=|OOt<Em1C%K&;}6X6N0]KRD;m#<*4nv%Fw;@e~?1vv]gJ%Q?6KAW=.q<TC6Yc%GhgB1hEueUbaLPa|`mZ^*pcqE=lbvJtxTA?<\\\"%+KCOyz_m._uYkqK7V7j]$gX6c(.y^H@?l%8U%kHN1Bw?lj)h{wW{=y@=Ib6M3\\\".kb45`,bZZI;89y8`UDK5ba&K?q0/74.tGKlB$0949tpRF`o!5[f+QyCV!^UFWS29s{xE%!fp9{p.STJdb+1ZgI0v30@R_{?T`&PJ!RnW]5=3:Y7|#ODw(Y2W;{b%f\\\"KClyf$q,hg0[t0u:vKtj2J!]z.6nEo((:!j;A~~{Iv:WcL</=a!;MiWAB%#*LL0Y~pe*faH+LXsxZ(7MC1&AEk7;<B0NTuc#j8B+/\\\"p;%BDI~ZzS+//s4&A{~gk[t4zldwIYfgls6U5p&j{{x)f$kZG;)H96;>1Y3,D=6fOUVuXbDpa.?Df,xLMWga{S8KY0ja`_@i[{a5_w>P7VuEn&J8)/_VVGrR3yA5u7!vEB\\\"Q8lnVUp!=O.Xa<4Fuw[:eH^%g0a/s^tD/!j^/XuR~Qcx[S2#6NW&(]drgQ3RA/E__kPrTI4KgYe~Hz+`{y}^SyWGR7k[H{;~8GG4S3s?V;%)`@:$NTXQ{e%)Je*zm}jcjL}S9<C%(|f3Pc<AmMZ7by=n\\\"*w1>:qQQeq>#G(<fa9oeQF!6T>A?I@NJ^EoF:!DA1Q/lFd$,#WU,&dr}T@L!C`R:`oUP~Y5QuW*0z_c&U.X?7G1%y\\\"BN]x:a8\\\"a_$tGRkdZzX/@;LmSTeV_7{gr:[:8.\\\"fBDI+g)Caa?*lTlG8DxlOXaK>_nkHreR7cjf+qNb8U8hw+sxMY~mUo`e8~\\\"wN~rRQu2|S.2_*P7y4S/MTS?f*st1GWl;y7]i|fdAc=|k2c|3MR#US=^o+ba9AN:XNE100#wzT$rN@/lCNwdG&[)O<e@tA%Ty+28!063k.<g,1@jF.Bm[%s!23iO[;2*dZ_mnp&(5A)d2}0`xWjn9o3Ga$i1}&T|N7$pQ6w@>F^#pR0yuB@q7`W5LZ^Dq}CB;&+Uj<^Yqe2V15o6Kr5_<R&,1ZDOgOjqQ=5b7[6.zv&.EQO+BhN\\\"aWW0?A`A,m:}8.8KCMU?Z%UjBn4\\\"j1/HbE1/m<wDo@#U!Oir0WVqAi2]qg/S<CY<+{k%+6j,viMC3L,&Or2]dFqY{Zn3\\\"CO\\\"*l*J`<&ps$J6t[>WR1*Kt]Vg>\\\"^a!&a:!ypqFkzJa/1=[G`;}$A@p29]O5m<)DanmWW.GNy{<?gNhn{Z+SwkH<IC4/5)$(eoRzSW_QMM6mm~EU_gy0/}e$al]Ch/&buX,U~t{3Ak{6b}Dn<uvJ4V1ZNtd!O.jy?t3Ww@LeHN{$j;Av?;,6\\\"9KIg0duED3ak#KHayu5V~=n`LuPc\\\"pzS/g2vB6`G:v0<\\\"?N6.!KMID9a[LQQiXG4xW8)MFF$}/h4a*AYTuDd{sE`POZ2B$:wFoj(q#/Y,Pp58*B3c^^#Y40EdWo;`#gwx)Z?n9%u{l=pnMHZeDQnsxgW+Q3IU)[!_KjcGA%+;R65VN,zcLF&@:Hm`3FYq~1HEfHAb!jkc*^/eTG>,(RIQoE1;1G,~x|d0IkR01/TivWHYZOww.S;nNpEVV]2d:Tax#xC+.$Ps3x`hZ}TM{Bw+F0\\\"4bxw<(6[,;JxW,Kif07dw=yPQN>p9\\\"gh7@q(wj29^@*]AD(L{PMsk1\\\"Ez\\\"of/C8XVila@8N#RzvHBp,^tRiv$YB./=(Xj;&1XD06;ygh;eYDdp)Nw\\\"|bW3(4mrf\\\"=Av]}vOl|f&e75;<xKWNC*.T7j.PimZ6]j;@E2C,6+X{,zv~[NQ$uzF)3w!SHg{7)Eh>Rba5PhHVa7gh|.det{Ql}(%W:@WR|_km!yxal7JCRTB?=Mred~z1OfwbVnMo)UA=()gwI}J;Tj<Tw<sATL?8H6v+)/v$/(*u6OdsnFFyQWq.i%_!@P?k#b%2=YKOJ%932u.6ORB~Sa)mmn/U`Q>Krwy3TUrIB%C2!,yjrC,z<Y:B=OBiR`Xxtr0ON64REjlhty.o|LzYf+ol,3@^#4tBtzvkgPF=u?!=s1I|xSZZ23WS?}*QmV}$.XS~&^:UVb_Fy*4IM.3kX#;Z(8b_/S1Wc;+\\\"#uM/fW/b~h]sRbb4aJ>SqZjhfw.,a5MC;oyuCzAuBttiPuf$KQxn<B$]<S*ZYXT*a<IhZG`!Ix6\\\"oS5@lOa{De1W4<@]ZBN*`WfB.,6@sry0i*c(`*D\\\":5C|n@{/X.D+d+35q)h?~]5L,C2jZU:>Ge\\\":^WxQs<Z]SihCD]oq<&+g5QgD^,tnF]k8lw)IeTNa.F8MvU<4ZfVaEM<JI0/5K6DNwjdJnPl}cVViwF^xn\\\"uq%Un8sd3/9bsz7w%}3@t\\\"VNY:%]/v}:her<=gO^d/M4LlT\\\"h~sRIC.[{Y1R2(n2O<.+?1GP7ki8&#P,zBoU~0dp/|?Zqvjy7&t2[H2;169BP0C/k_=5jTUO@8R%ioq\\\"JZSZt=Q1r<+O\\\"5=dS]EcRX#!v&6$W|{<|vTa0cw3rcX.|mW}&<s^YY7hg/9Nr)Y]L@W^dP*/Bz^wS6c\\\"<K?H2Q9R@6sk~mJ7&;)cYIomXUq>El>pBCu\\\"N,^uQLXa[Xg<2WV_#H=l6A9ehR5c9|`>s@W@m~Q#m$mq[?VS%OMahesQX_g|]b$MF*=v6)p~sEy)`/1B4f|t}vQ}]v^!HxW)^Ge2^n&ikatd>+<%N<G]P4cmU[DKI^S~=lrqU(Ot>&#`q$jQEzy2a)U([<X(S[RABHb!MFRQ[Buwe3omIP)QxI<VBo}{{dwB[*GF[L=1Eu~dBRY_h.K:(]Z{{yiX[/bybEayIKNLEJ]{Y.M#[{aXz5w_sCEdI6+^oRzIx>shC?C,{RjFl/i|k}JV\\\"wvUfW|D{f#~Z`9^`<xw(+.:6G%:t@0*[suDtr<7hUUDc=82@I?cd!*,SM6Q}0^Y/1HT,VIU|6IJzFbJKD,a~`r&d6yg>!GdeELtWNMHB4]US_O(2q;a8!U)2_wO@@$0q4ZRW7!S{~C&L=.9o3I~`/<d*>r>>FH4^cKpUTz3n8)$eiMD}T48&SqJ1YF}D3=%#1sH6<iEs+nu2>T9K5o;=YsG.yx29`ybKs~)nB0>:c~;EZhU55m_Refo,j7hyvGCgUz[WS<.FL(Efklx;k|sF!Z)z8\\\"9!h,!,2<Qh1&{Jv+s;BXoGx?QCOf{DSc?7;vl0L)YLBkw)NP1bpQ|SKf:8Cv3A=NG8:R?bc+xfm.)2Je|OJih!K0*kN}i1(iC(9U!.+TDB`M*eFT,FRG>hpTR|]wuYpcJBsK}ao*GE\\\"[E3W5C9LqORH+?<K:nI@gKmitp\\\"ju\\\"@0Z[#;|u3[RkZ&o~F/vKw7#f7niN,k\\\"::&5TZBmS,$jalL&z[b/>a\\\".aJB?bV_.>*d26_jD/ZJ8ohbD3NSczy1{Vv@3UAs=Rlb[?)ERbkunN7@J6azK(TgK:6&z#HjwWQ@iyU%T?^dl![17%d>bjNXA[EZu#+$c7Pv4[uU]>+}e^nI`BD$O/6tqchQno<@MYDFQWs[].QxLbFl^WW#c7fp_%];]]NaZjU_k)#kbcyF6&J:yU~l#w,N,,>R5%r/H;a;f9\\\"4CXPl=(w$yncvcOv{yn?gCv6sMnLp?Su6)Z/4rcmfBI?r%z`u(||$Nkf&I};{JGH#+Q+jBeD.n|d~:~`]mRPQ,MJ>`H>m;)qg|>@r[t,*uDSl9%?~;ZT]LAc`5{7`y9/F|RffOHf0bGoR/*208VW_pW**fnIu0*MR|Qc@8D^T+T/d]EoA/Mp4Q^GXP}F<h0nOn52f@UHFBvk}\\\"PnQ9/E+8&=Qm`X,;V%?9n]#Ud^Q:ex&.Wa+gs#gAd}@&j,Xdz4\\\"{>b(3R2;2)?{Ml.,t?egrjkP!2s{)ivoGqrvrI|}6<eV.L%u0mm#OFU[RU)/IC=)!A4^}){%WoQP\\\"kRdRR|Kuj54{vN[L1Io&+j\\\"ZKi]DYWF=.UN32820GDB~y:Cg]pJkqI/9Y.Sc^uEG;1j+dzRj0K;[l,Uuf{M78g8x``d1;F<nP^6!qrvj{mO\\\"U\\\"}GeSCc9(k]3:f/I*|Mc!1pz9f_<>PKeZB+8{pad}5@?>1.9NX7aegm0@)>wN)1ZY?]vl<%N<aREIn(z5{b<#q.~J#WT(\\\"\\\"b<r#{T/&I0%ahhscR!#)Af,@`PO\\\"u5V3*/*2F3O.E<ZQIy\\\"D1N&HI4\\\"@AVTVRMkrZ(e?x?^vjmhd4qT/(`EQ.n]u0pM||c!W9P^jUg4[_4d5cdW$7M}mq7>$$hl+d=fE*6EUYQ,2d7ETTBP_GqM*%_f3.5uvUPXXTV?WJy%B)~>{o:@Fg%P#WBOu*,%Nl#6&p,9)Hb0E\\\"9<7FzVQ9ou@5W=)R)p:3MEH:tX{bm?3`r*.eTamM5F42\\\"Uvw3X:cUI^Y`0E41UD~2TigZi&86i9UNWtiK7InX!iAF9Q1Cr\\\"Eg>_6Gl?\\\"M5\\\";oW0BzgL/K0nOj<_O7f2LysbCs[f~&I8Yc>h#p(41}tRUE{*wP|PB|o5.&ka%I,I7(\\\"F/}aDxMwy@7@O*jAtwvy7CCS\\\"^yiZm8x=~*W\\\"m~#wFiuccV\\\"u|G1DhBc.vvY_V9mRPd5}TpWSCX=`1,HA|Qif]4jE2s.qUz$QyW/4|gczEZ;kWPAg~<qg*k)Rwy`JCiGhTF;+s(crAxGU(u_]Ma&]$iX=pSiC5r/OJwdxvy2m@f&~EX6XlRkdR6Wt&k^wpE@@+hsJOozsEO6yV)hx{+U6.5YtK{_7Z!*Hd+FMM/o4oR*[f5*>KZm/(##I8A>v4gm?Hz^I\\\"lG1ZYCjrMZer@]B\\\":ss_/gJMHZ^bHR.3jSEx@i2%$Ql5[xyQ>sp.L6V:W%1g/^co2F9v(w|K1.([S:`b(/?haAlMSi&Loy0V2,$E.~ECEv^[:Cdgozj66+_i8KD\\\"^pkEyUz#9C.\\\"5%3;^3N{syQ.FX2^qshFmkYNiZdI(da[|a@#:?Ax,5)i]b%sQvK\\\"ANBM\\\"voEd5g6m1i3:W%\\\"J_inU0z@#u;phCC)_cK1.&_^g0[6*$;dO3@_qSqKRe_pi?/_koSG9Q,]Q/W2[ch&?%f(C},H%*8E9x~3f0N]@9:z|:Vc`Yg]|I>=*o8,)f/Yv!=0(m{U=z{kTa764$N>Fcw(z>M,%61)cg{ed9h`0]wW/jcCKLp{7D&nrz1Z3_;PF5\\\"CjRrU6*!ASe;~k?%J%?YYQ;#C>)zNYbCNZZNT?^q/ZkM0Fypi>8]8%~></]CVGD=e|]WEH4:&&;F;ZrX;:!W|p[}EFj.EU:PEeo/,UQ1%Z:.o_qe^u9RH]YzZA6s&}N#%C=qq)~2CUEvi}VGixX/2zD*f7K.dr,j6<;3*BvvN>g2)v>gPx_C6J$PV[+#ZZCjm#Wm0QO!#UdIH[4~w:i:a~,TnWd`/_TS}XhG0$$kDmqSfRi+$Jj%}|Ms$$N*@Uo!{`hAfbU]t^%SO)7(M{JwDe)C*m5Mg.*AOr66:<zCrR^vcZ^u_4{L|$I_C96u)a8VB(FJj?U<(2jU\\\"d$fvT&cZ|;ANAv5X3&AIJIrQR4~F5cyB\\\"K_C[cnwkgos1>]2r@F2[:e),U6Gp0ijJ>v3K+]^~%{Xh5jrlsKk#1x^!u@Ft.bM:e*TgsL|~|KwPPp,E?,%[(vCju\\\"R~k3yeg{vuBn5%v}/jJS|P/Mz4U\\\"eG!kG]x7u>6\\\"#e*^`G?A(*#l9V=}ap9o+qg,/(WeKN\\\"XNZLo![gnQ/dfZ(>B8[m5PAy%hE{`b6vYUm4\\\"RYFdJ#GZ$4H,(pWI#9yC}^jE9{L4#u{vo)=U.Wra4cS%ULTcM,%c%sN:p#z_u18d4FXJVX=3`>)j=q`[?Eyi3t1Vfikf({:9|Jd@}:@wytP3W[ch~B$G@2;tXijTdquXTIWr,HS%XoX/d_e#F2GKGi=S%!)|Qr1&PwXJl}b=bW9@|!`J@w2NnLM,NjNJj&p_,ij[p:LAf{~+dN[*azVX7Yq3F+>&IoP}$AV,&G0+C[ISg]peKh&Ey**8A2BK(+#QC~f@Al2=ycY/)*:}2!Bb0y&5D5x[<eG/ncpu=T3+h9G&\\\"^:9VBU<!Al*#3`9@Azn/DD(Nt1~goGu[mU;3Y)d<f}vrm6]0_IP[|{)H@]uVH5T^nYp&jbvTc8(;ozjbhOg>/jn~}R*yM]so^;.@HjF8>wVG<=jI@786S}*j*I!732M9q*W;_@NZJMsy&f;u?dmusy3Br)0:rs7A0TJ|^3Ges@vs3+?r)GU!:!U1tZ>^$0r+;3wLh=ecE<e[MEwmScqgIBcp./:If&JrGW,w0j+q7|pY,G*c,^O_TbbZs49LaRWa1X$[{_Zmg_%oJ>FA_]VSfXyw0QBX8lA)1|F/YROT27P!GVDvpo.NZc{V60eGR~K`3y>&=|Un\\\"%}gTJ]hgqW%~^uPxE>wm~usKYDv5+@=,W@1BCE:JDS2Hr##o~DOaH7v%]zp]D#mu(y_|&7OF0nee:+u?MaOR_PeUVU(.HrW1>#5|@n!JeIaUWK,;2Acsn<^:h.WPoJ^;u4_H},&U?=t%K$v{NYS`1U~>48.tr^xsNRKIC!inD.<_m}o3;&jqU_qZVI+UHfG@OAFL3Buz|S:N[_#@hn/5=r^%5un/i;uCbJH3c,Ww,D*q5=Jj/q+Q_;z^b@tyDO@w<#cPKg6:_&hR/SaMB]a==;l`)_EUQ}IY[qc_k5#wZksS.rx>SKG>iECz5zC:3*=f5z&mNVQ#e+}9_|,e%pVfo:<0k8M/?/W..Jvxt_qD|^M%~!/_9}^}GAmw#t$BmkQZNmiK3kHQWNL/HQl%z&$UmTP,;$aJ+V+ek6;DoH4[NR1MC>kEeV:),~twWE)kL/y>0!G[ye`T@vf9(\\\"F/#K!Jx{JQj/<cec7F4=Kun%{tty.fSOJ;rgpeO6k,QKF{Vn{v,6)f@F_aJ8x);coJ>kdRMOKkd]_pOd`WX5sn2[Ex(/oV9$}j;6MXBukgxJ<dVKK%*6>yWwa~@_9iApeU#T+Xkn}eOT@#5VLPYE#\\\"!Aq$3e/^!Kn5$:@x:|;^N\\\"_jWVe)h9HS?dk%Gqy7_1G,yPX_ih},]iT3mw9/YvGn~+8u?AEir)|x1F$YgU4nGKbU_O$B+_xy3yvDvq!l?nx3z`IB}k~Tp:N2$$eV8,\\\"5!tC}&Dgk0s#7S^<c`=[ZNHy+kbZ/t`n*Gg9$QbMuqBfo/jK5LJj3oYVY`({Wb.V2C|`R]$Rgm%?n5a5rcY<F2@QqPG)*.cfF[GLGW6C1v+PD&w%JK0uw*e@G@Hz705E:EvDU;$OOQLL+gf*~\\\"H\\\"0U+|Z_R:@e4w}4BWt+iLvp(`O6eO$e+g=C`Ec{(($me5b}>Vy}5|&+YEY0D|MPy,4~e.=4]/VSXWm*\\\"J(#T/H;S5(%;t?o|wyri9joKYs_|:JpS#G;7a6(!yV;V.~9HSs#(W]u{YqvT]rCa^hfoR!OV3O?oJEB|}xv7Z{*jax)gkYME=313nN2Qpd)(7RI0X<DwZo6FLR1R6~bHy6y_+05F#rWw4T.;p^Hcpta+gBGl~l=v?sQwa*/rU_]Z:2HB,>z?/:b7l7ap^+F2!;<]DjedAH]u~O!JCIQ,]iO;?U9hT)!3=AC[/V_0iUM\\\"JW,n9bkV.I]j4{*3Buvd,qA3*ov0jx5)24%6%i8Hh1ocWP!w|s96RB}o>x#!iKwKSn=Htr6`yV%vp~9hR,~)qznTJEBzd_F!{UL8)g1KGs.!&V,<[@,&e2&}(RddkKGb0}7d/%Y>BUXd5i\\\"knd*hkmT+!=^]us\\\"Tv62Vj_kpc~?dT(bu()NJ3%k8ZU5VxJ&jXLC[:.g1`ohL</Sn*D1yFLY+q:k&qOOrD5gPg~%B83H~1/J#ZCLFk6uUZya?Gaj{u2>M;VO`w%+ie]#T;3N]IIeb)!B\\\"!nL@B*x`<Cc;Sv_\\\"}A{SW)9DrWN(KqCNl+kahr#Eyf\\\"p(yc3t,bK`!L|.eCEHtT4F7^|:o*pSG+kb#p^IQk?:3Wj]jsnP4xKKZjh,GiR|So:+%RU#DL05^>,D.|)=.ekDyD#PQ.nR+ykN$kA}3q[oE,@IeZIG7[e*Bd3N`A^T39wPtBgF|0LCq<:V]`]b\\\"EK#~Ol^i!Kw9_sQ#\\\"q63l^^Yag}Cqis[nPe5Ps;%bT52MvJ,E:Ie)](5{F7u#&R*s_R`zL6&@uAeNZ4]N&Xj31Uq=V{J}|>i3W!DF)<[*m^EyS}:eB]Kcx9:}o[4ch465jo8kjaUq?x_J~+]d4<D9@+#j*6^kr+)!Ns{aX|R$A{6V++&;RZv^i<vc]V|/=xd!>q4!58}<#OBprIYs5`W,VWvX!y#sYeN6@3,Nuc!Ihydb`m${3NS$zVS$(1WrpTg:QH)RH,R_Bpyv0pqgo2]/421&BX$lMP4E^|57PT%H&:1D1j/+OwfkF|HEgNdN{?#$=xh\\\"Z4/B3ld4B6\\\"Rr}]CyY^4:X]DmD=4*0b1zgG@W6M0!2l[R#,~h8h]awW=!@R6UzVshnBpz{:m1J;cSm_WGBdXR}o1(?wTv/Q(O:Eclxa<+y}N#3E`>$,u)uR0.OY;D/;%C&(9>4YAH~?h*Ul`|^W*gGa72l.$tBEsK?N,*R^DswCk2s7(V0FG%q{X:/nV/,QX,IJ=ImIg{_W|s1z]A@S8dzaam?:@Z?rdWMdR&p=l[!}X)[Tgu|~Z]s6%LS08)@|*h[\\\"#6AZEiZ__)0ry2!DKH(!7~eiQeG9=p%?2bCH?0L/J,|j4eH#Mh5IF;RJcd3#&6o0qUyNX_3#]$w{:)C6H==uUyO7)Z}NU%PSheV@94mR*u#y9?>pNrS=sDyroLr\\\":W~x0U\\\"$L5!zEbqRf4qR3%plK(ZcLUDt?;k~OR+RhKM8=<)c2HD,>]PkW|vr352SdwBi&7D~7&%ufK+r]Vy>fP@|WV]lWTf&Uf#Z>b=UDE^gUX9me8|QvtUUMzM\\\"NFZj(HbC7~<>ClieqIcf(p$.[+*j(.u5W5^rHe!(Cst88uNI2s*ToRf<&17fYcM|J\\\">HxLa^_vPFkP$zZI%I_lJ)o^d{Q7xm17I5^Ofaota;.p{ms%HNpLm&cl3xk~4uM[e(c.H18IPA%#/ml_s2A*[Gw?yGfuaCN5~T10@;+@b8SWJ4z;F[bSaD4&LO70VI5)PZo#t6W2AVAY61;Kp^)byS+z91zJ?a>|BuR?~S)\\\"`Et;7~,(s6yefH73v?~5$%M`X1M.o4GTp3((bDS1w`ne+f(vdX0fv.j/psQ(f8KcaK(>|/}kRSA!%~#@8;ap^y5}Lck4p/n$h\\\"!H6CB`SA3{I<)7yGb?.\\\"el.#jepJ`sCQkL>4f|d)(6!JS>?CXZ]\\\"y]N+vlOxjg|F`LmJH37[f9w+!#ZA{tbP*>@jWQX]DlM#Pd=Ia>ckiUU=1UBGM;jiJVkMK.\\\";rpum\\\"MVbdj]S;+[c]9J;6?XN}(hsn^uHH~/j6Ww$YVGU<SY^5Kw$a.x{F=!~#ZD(wky2F6s71URCF2kf>)D$[8HnJ?@6{p(]2|Mbh2kIqfXom$FzUj(Q:sUhUN#U*$pW&ub4zF~jSLK+R31OoE\\\"4?vY*+uGI^d+N=s9yvh0Zyrcay0Vn,N}=\\\"R<S.iDue@LnYgJtI}j)h8d%oi~>VNHlAWDz8)9HF&]h0s[e8I((pFKf%x,Her0(k.SnX#V<kN>.%|)N!X=JCJCf>#uW0D7z;1#]Q!%P<Z7,n(c72{:Bez|8mq_^R{&_m4RM[2E?F`E{jrG\\\"q!E^a[MIyi:`&>fSKCfpLhqMc~$GJa<v`|.:,*N%11fz:%>Rq4sVZ?%XSa:T!|L`St+H{(>BOp.ba5B?Mwv6U$;teH[IKJ9T4#Od&Y.X1$<4f4+$B+MB#uiSjC[by~K^/P(^KeL1NKSJy%%Sz4~:[;s;v9GmuTO?fu7t:R<uLPHb;G\\\"KI(PfjyX,F?w0}MOrUQEwo5:5[n/sa.PhFgI>BUWGN{j]S>5*?jkjE;b}}PUxnz3u^o{)*<ijAWKiht^Rw<IG?nh)G9Q2*wfee)AOCvCw]R[_9TUHzPV7~3S6qfVQ.~x{+:&HP$LcQvS(/%jyp}mu4|jgj5x1~|\\\"h/9fgU,vrS^evNVIY0gEMQ_z(8|+40fs^V%G4kbwv<)0pB%Iu4S47L}Wk_bwE_>6^Z%N#)%pdODBKR4yn!CYRsKP+S,;;gj=o{jYvL)dsHOKohnxE?F4JIxUl?.yRxe}L?Ss0+$A6fyzEVS#vDfR>@Y]9Ra*+h1uj=fnrE*=$|1}89<,|tw]5PgQ>_YU~e(4?n#a?bt/ChY\\\"nL5QOkI~_UK#/,[Q9<3;<s4\\\"]ln*\\\"gGLMC?%}g%[l)YgC.B0Wcv0pNFJ.g0w>znvn{%<bI`OH1^!<,v}joWgg`s;*A*&Obf2Vw%5@B5#>A{]w2Rg|y8|NIN)pxGVy3ML.3:9h=s[q+16c6oK/HUIFM8\\\"C8xZxKOAju3lsopn_ChW1eXCd^]|wV@O\\\"/n8~++&#:o/$(+8dRnzl33e96&.2g5.JF0wGui|7282j/h_!U;WmWu!1!m~6^qpE[sDp6cE_IB7iiM.vy4[C7V>TNjNyEY3Z3bT[v(dsf{kt[Pvf%hC~W?]RH0[IQ!vd~)N(n[LJw>I,)#u9g\\\"jB_9J1rZT{U,|u+w:G>#tE1C&O20Yt|VK}C2|R0apV;MW9%NWuBg>!ggCKR`yx*g;phPE]9Ja_wy=>{AW^naCDj6ipdQ$bMg~kd,w]dJAw4by@kJO|!yE8&pB^5&wEB#Y:o**mkJ{W1c9(169Vw%vmd<ZNF6btsog!${I2+MA+*3.%g/qH*&#pK>O+Lke4#s9w>5>26DBaH[RB$R4TV$&k(Ep)a6u<QsEM\\\"@0^F/M[EZFU)rA#(:=i3rfGDi}!Jl=Xu:~]d>U:c`\\\"p$*!$8_Et<pNu5jMu`/gigd$=VJ*,e%Gol8D}%W@/(d!m#UxH#3soksMoDj{^J@l=%7^+o>A_6!UFKq3f+=]_1nE:!#@6lzCb)Ubpa6PmG]gL246N?Eu(Z1JF|+igv1@#[zRMM9dndUl+]c{4^.uv#z:Eb.\\\"z<>[VPmd~}N+tn?uXYCJaw^dhv^i>j{;5Hh;$yhL#8f/4~N,]ckaWT*A<3*a#.*5x?RR(R#X{^YkEO]DKrjHu7NPPUuT*`]nke8HQnQ1O<c+s8T1PUP\\\"261>X&m]f:;(%Ps%&=Eq@Ww*o/R1So=%19\\\"Jk.J]ApKh%3+>5S.n1%m=8i`=cIH\\\"D[FCAl!1vb~NKLUQh]U.oAjqvDF5QgM!g[n?o#q[{,;BIS3p+b;F0<&1xc@Vpj5]qA)\\\"S0r~C3*PZpj3Exl2bFd_C^=i$@!^&!Pt6dPHNO#{|2umOv?WW</FKQJhXa?=QM{UOynU|m#@ZFHB3O?n*+^5hLiIMU_?2_rfR4rI=(R?f`+}lK@R/%jS@HKlefVX3?5csqr\\\"J9Lj@/)+S6yLuU+v|m~6G]8p5{EF>T3x~L(lP3heC]BX>ynq[6nG,F%6?{~h$Z8jzl3sSm.G_0}<z=:KaW>:(,8r?dtRZ?>Z%&zJ!#$7LR+3sXUJh!x^iYQXHp&<|6K&hq8=Sk;[M9DEWFsWl<k:1U\\\"RHucr7!8Z@w<*#p:hCx|O_F\\\"M||+vH(|WGeQ.PqavBIZxuKC6#3VZ>04[&*epZGwz(edE!q\\\"C]fm$?M;0o3@]cc11zoI77k\\\"|uSEzq9wda]_@mb`rHg98)Kh5c]K@Oza^?+.zx=.1]AZ77wSbu/bq3Yf.$~LX`ZT*i0C#k$?Jgaq/%It>8*i&{1~LO]*uX^\\\"VGEH0IEqSuLU(xoOOm|^3V8}\\\"U<b&4z|J}XkSY[m(DXwT|T=?@Fv>1&w*;BU.!1eL<Pg0<BB.?6n~~qE9N%z0ias%tEm?g0d#+NP>qBkPp8=vXg%:w#/0%ZX:p%J|Ve6I{Ui;}M04rm>8||=0l}`j>L35ZFb8|f)C@58RLAfdK~G~Y>`xwzIXB#kxhq<J.92GFL+y5l!.8$g}C<OYw<Mei{k_R}p1AF[YU+Sj8aPodXUXt8}<dV&DbBRLeQA|LYmU~(7.T9p2VQAe~aR&KH~)j\\\"O31B@c/&x+oSu#jzr1m4gyG^(@Wg_RE0TEx0?#J8LGGq\\\"!!Hz1=OXgGSl<)e4*m)%<J9p.k]3<=Mg!z{!%yEf@,V/{25FGIB\\\"\\\"x${hcg<qSy/eP_jG=paH}+$NpQv!8fGln44HBR1h#bIvJq#w7,wYT),qW3I6mX>vfv@pySa1Sqb3jX%s/7=Z49T&49Y=@VyC*9$;Pp!<nd:>zE_RDt(We(0dFt&E=w>lA!+c^I1;dwH3~%dAuC:*.oqTWZW:9_u>YHt(aC/pH`mU*J)f)2$VEA@4XQX3d|dL5?!~ZFs,rXxv0Rcxj/o_u_i#Yb_+ML?J:d;EXT$auZl+I12zyVv),ove&)+os/Q<Q}sXIn@QrLrQ~w*V.ztvqOGNRkp33$wHzR]IGaK6mq:Q=K%f+`b4V(@Fw=%e;\\\"5y,\\\"3h3+~7M+F}/Od%(*@KG4mhcHcAu_@cM?>[/&SDB:<cKMr1bem,bR$EGkhzI%_&)1k!RHp8%~}lI,%j.d!KuOqF{dr`BeBrrFqLQV=TrC}V*I15JD1Mi{tQI<<iQ,+Upt#B=zQXk8RBrJROQm`8gUaS!h6T5o/nw%QrQ\\\"w/Iq~$mhtRSb\\\"CI(8=oUWLU{I)b]vWBTIrrKR9n~4WmJ\\\"&fmC.W=.t2(UG(h8$~aI[)x7eidQugvQ3|*{qZu+R{.hbQbbSxTrh/`h7yi#}S&Fb/}u<~,E3WA^Qre~N(BWC<mGJ%[?8qX8BrA]RID*\\\"@h~DQOgT@*8^5Y#%6DIyQ@iaiV5f2qr4?EJ*C{3J5zmll0A_KwO^T;4JX9QC!yujz`>=w?1SGfJ^^_!drU({k9CjjP~[75lGnti{kv!0\\\"v)BEQ~]Q09lVv#R~[<r:IqrdgbIy990tL!wVVt;ifigZiQZ*ty$QC$^1}!X6MmGhr0rr0RWn_48g|l`<EMdpOQ&O>T(A\\\"o,Q:WrrKQ8QyYWbCU,DT~G^7App+~Er,RE>:]2WS05tN:$:9qeo6;>h^lCoziOC?xq.E!CC1rn;Dqgjn\\\"occbeKBZw/[c<~M/!omQ/)o?rDocD2Jp~9o(gJ/rxH+0bwJBJFcLocF_<J?[Ks[I;~RwcxKF=(tN).En<|ltS*bbkX/;~0<2yDjIwhq<BH)Zr~G=%]T#{SyEtbbg&?>r3R*Vomla>.htO.AoA`443n(Eq5d>>X;{~rfBN#H0cgfO9yI&LV(lO4z5|F\\\"P4KxPB_Bt3t0~tp=PFnr&*`^e51ZZ<V3out@6*@$uf$_F;BB@_9qMHonB!0[I1%_lh>;4QYeV:2Uw)NEg0`S{Kob`^:G4GT^igF23[S~Vu2G:q<Xz?9?Py5ux}3w{7Tq~</`fL{vO_}+%6$x<Cf>)(@?5FJ`{QrNn8w3qF:Fr8#{Fz7)1>B_x#J@ivV)r3CJ!(*8u*H77/qwbC^,K=3jQxH(!P`DAx<%D0`MawxA.rrSVqQ|n{)GVJ|7FI/9zt|g(^(Ee&>t_VtKV])lVE+,{;Q)W/CPg5NrroVwB%nO?GI%dc0+ohr7(H[i]C~)P.`PY.hkXQ~OV3Pl./U{RA=h17d$N.<]22W$o)r7sZ<PQSV8tQG>rJ\\\"~O)BAUwhZL7DqOF=tg@&6:EdjnV@ogKF;r{d9k<h(y?~`_!19v7@P{>4O]^a#|(SK\\\"_`z2=Vfld{=g~wQTJYXkoVrF:#v2aa1Ubdo_,+njVVD<TR\\\"$c<(zOEBR8|Yz6,VEp|+O,79~Srr6`9gO.Abw=cKT)iqD~*PMCANaL$=0M^t)/w4e0,cR%S[{#f@_eR|eVqS42#ob)#=jmx5;\\\"5<6W5LeK/<b86qm?lw82VV2|DW[4NlNjwc^,SZ)?|k[Gv`a>=9~<\\\"KFgDTExYd.}.QRD`^p_Y)RSXJT[Xy@zp5Mzfrc?fvT)j=,/#.PkVkw_K${Y6dc3$L[@Ox=Nyiuc`%zU@pO6.u[DTU]F.p.lQ[6(RDKFEp9VpWDA?|IIc.k=:)/8+zY0*q`jyEh~:GCZ__F6x4by{6O?71k)6<@5\\\"@L{B,Z3IoQ+c,+?`Ea^KDPofQ)DrweBqdZ>km9eRc&!SmD6nQBNldd`cNz.M6q4f;+92ivOf:#{c!<`/#Hh`85l1&LBYG/5]7ynq>GyCLE5P{=m76yk&;~*4pqF!zB@wJgt7E+f:0QW=oYElofyZO8!x@B<EgI$6ji45~u9M>6Qt&Wn7f|t;CV;XqKv[%aZZ#E1<Gyp7Eo*.RlPwO=LNIchcPB@99=0bI#*ww.gH22Wo@~vkU?Lc!MKMPglpg(K8kKpHX_@)!FRiq7~~YWGos^!k&wZn~bF~#HfE^NSM8l86UB1*1OKNRk/kVE1obDJl<G).vD7etv)B6h#1agE^s6`c6:f[YjGVg4xGlOzEpv)\\\"r2.;mBF3NqYO;5*qPImqng6Ge0niGx@)YJ:0Bv<`.imxvHOKH<A%_Bt`]ULjMqw6$;RjeQ$80t[G|CExc5F`4E!W37z>f|M9VXG#7+`|txDpXQI[ybg;50vy%J*]jb%,`Ti.|NYBYi?7Ky&S)wzju?GI2iH(j=uV4XFaXR$h4DQ8Oc,1s3.=aT`ez}5D]h~;`_wR,Xj7X.\\\"B:x\\\"|):,4d6$J~k~Y5ybP]5$owdD}gYUk(8QnA)an+!CFx!]0%Kv6SxF,f&=m<=;,CDEs._zuDMfsZT8egC9X#y1aTI9)rBd#hk*Rx3?iP7cgX748#87FtC8s7u|]|4E*;k4~T$B39fq<6<cG@*N;n)^6s;zeNbk?SLwc/8^|oA+.0iV,F$}~F$s6E[o2a}uH6bDsK+vXYmJ>%gVd,YMTY|s*u9FU9Gd;sC;k5+TN`;]jL&RCs.%=KPs(kY+2I?`GTo2;l~<=e.ze!P0D.lY5E3)M6Cj+ng|}%l|\\\"ym:xqk4Z<cDpA#66h#X;Y<LW5YK(}~_wDxDky]X!`ca>a1ts<@%UJW^Jow\\\"S7L13h5]F3>W:5*<byxXVIEQ)NXM){~X&BE/HAf/UCANO{XlR:\\\";}&e&y]H?Ls~jfjEd.RY<B8E+K/ljvA+*e=c|@3[s+W4g0ew[KqW#h@!zb$h(>9TT`,13ssj1dj{?0cuYO3p2j*[/?IJc>/#36&Ac5r~7X;F7g;e0w!Gd*Pp`P*S=(>!U.h>Jx4zrgi+q@HHI5GNi`p4(*||WAp5$w3,iS}v*}yp>+*HmM3{1E1peW=JMV2<T|QZ@&,Ehetv)L8@F4T*{:@&goc`\\\"PsYh\\\"s#hz1Lvk|ii+O}|!npSfH[&/_Sai/Ya?s9uT(Dv&T3Di:>X0aoJb8ZgiAQOmH?hx5DCxFAqo>+}!PX>8vrIwgbY.yBr<+6K_<UCFDAm#B7PiVP{G&uh_KhsBI9YIW~d@v\\\"$&13z{/#A4jpq(.$#d0bCU&*~[]#*=Q*9mv_fORwmn=)cQx![]AoTDK@&YsCH#Q5I81Q$Np_`b@ZM.NQ*B7ap@/f$!&I_b\\\"S?Prr|J5+*K*m`2WnMEC^J?RlYL,M5/^Za=<rB{Ld6Bp.nC<VOmjXy:Uae:lS+BB@?3BQ$Q~iv5<~\\\"YCU&)=,5]11B5w{i/1Q0cxUZsMqkz{RPZdErs`a@W7P\\\"V<A^zMD_3iz7qHy/=[o^h;_9#vV0{m1q~t}^Wqg*l[9(v*To^k.:<2KBj!N@_oN`K4`x4#^QbC2sJ.\\\"zy7[ZwH5k.Z7[wOFuo/,E?)*@T5NC!d.&Dk*Y4JD\\\"VZE{Ti%j(BJ?i@bZE\\\"i,H28m:SyB^#g_B}RV[[;+5B7TFNZ8Y{X*v3|Yv!uvSM%3o@5RRS|`r$H5{hlxf?nYa`myE|cp$I=SD<;<0<Pw#9GM16@ig1QtYuPxL\\\"OO_!h(GLy*a}:z7A0US:~_Uk~~yo:Bi?|,J\\\"=`aWK}<YkwV%sunhqMLMR1/7Yn9q{/qCAC]{=?$)bWU%W{{4KC!Qp_Mlr9Z(D^}!GXh*3iR/Z1Do(k~`IUAlc}vbhg]z8%BM\\\"AOrEq|{A^CoAJ,!U}R<h$$[]/TC,r+g<lt9IFKlE}ul9S~*`5nsfXwQN6YWn%PBL|lGc&(&m]3cMwS0yu!`Ci|h;L\\\"<?b;wu+7C(Ii:_wcwDwLD;N6.oA1GuV87i)JrU0H!.J%1a}I!0811)4=oh&yF!ywZu>hJSHB(g8A\\\"XX0wSI`D.u|WlVv|kYnHF~Tsl,]^_{StNgTf]\\\"1/V^=eqkU4N>iRZvS(*5Y374W$M6DS`u2t;~qv|c57z}inoiE}p^+l0wow~|l%[_3.SJ:`qe|mvqYMAS!}AfUVLWK{cuQ98RgBeCWdF3L:f#SHxV~$Jc098kV@@e$*c%Jl/TNRY!GB=1&O7\\\"4%lj)8q$z=C<6v(jpG4&vI>rwM_yrWv[KrKwaa>Fo2|ecPb8o*|}xD`HEu(6U~3|z$o_P_X]0soY6IubO`$9#Kld&?Dp&[a!A,rf3GpWA:]Y.<?k[!;OH&+>Mm^Ve\\\"]k1RM[yRD}j2BsW|zw!m7twJ53c.$JRuLV65$w/7:8<3j~uK/kb5no>R?M/F9VBe7[d:}1sAZ.1{E(P%;n1+Ss%~I;9Vc,M/<VRDz:UjFr_S\\\"Sp,5Bo,qI=[!k6Iik`=x4PYuZd\\\"`Xf_q2((Ulik6`BUargwx=D&*yY(uJ5I?T=^r:e,h.&ZcS&[wg+UP7ZJHUy#w1>`Hat+e47R^SJ!9]MZH!7^[&0;*8+s9fz*.vkB`Y]MQ(#5#VS9]pquHm5E%X.wfwcY:C)lNJ~/WnZ1o;^9Y)j@f%PJaa{xy?6_JeJ9Ax,e}J9J#+j(,6dRTIi9js!6|1vTxXt;d?_#Dw{A!uqkynhLTl$mgzK\\\"7lU+DlWln=p`dj{M/f#%HAj;p{DQqxLH3{Ej!s0M:Qfyzm!Wi_Xw!srluJ]r=iCe0A(oUl(BBFwsr`zb*<O{j$[0\\\"eQ]1c!<CsKz1h$Wg2K>ahW(3LPgqpDZcaIIJS0q^zV3=1kh>|&&N;w!X.$Jf3$`iwR8~H$sC/z}HWe}gT7R=NnnZ|MKR}NU{4wH#ENo1%<L$|=7@eA3#{G[[z63%FKI<MBnVefeQ*{[x*QlV1:d<A>|jM7Yaj?u~]TJ_Vw{T`W5ID|<_=qVTDN@KDSW3t0F*In4!?<3e+d(=vCya6$]m/VSM`)YRx2,Ff>s9O{fi~/**T*,MN#vw_^hKA/#@{<z*56d0E}jKiow|}YM(3l55X/9?S$fDe]n9tWSbxRe/KFy)z,NF_=~HK`Dj|pok_:s_1IAd_r__y{`tCf7pI^eRI{2:*;`xnmIGTdmTTGT:KgsFSDMbq/=yux3]G+_sbYAP3[9J9RuS^+J*Q=j=CU_ai8e]H\\\"VMH7jVssFpA^S}>@{3J}S`[by7w{8=r4mmf2geF(*XYL<%_yE`bSIAIK=&3W9:iEB;S6+pghxBoor~k/ZUuW61>(*][W13o@m9r(;LA.,u;6;Q+N))jvz,MQ61_34auejfIMjen|cmn>Cy7Dh0(3xu5HhZ!E[Unw{LwHUu?F$FRV5pbx>3TQQ!ZEVyQ]n<0i.$dUfWLfb`!\\\"U{m_~/VN`<=a74TYuq.s3%,eO;FZ9de@s[O;}qzRh<4Qb!up$(KuJj5o}*%ff@/&$W?{%)?<w%S@c\\\"oGKnPW9>.!66<7)mlB;2tZ:$X(=/Pcw8*;Rqv3tc#T{Q{^tXEb}y2:W0Qc+XxGITk%o%Nr/PXTDaeo(M\\\"bSWR3y#?nT$PBdyL__n8{LDl/_kOgc)Pnzq*l;)Uf>?R5L((N6.?<Cu>;uBPuN(m)^7?<~LTIU{8FEwffl5oM{8Hrkcq6:T$66Kvk:(MJ/B%(Y)179uMJ#gJCdts?;Af@R&WHDLSS>~l3<:LNjV.BtK+Srq2bus2IAFc#w{GN$1S.u:rWCH>Pu?yM0vwB%}Fw{r{XEi9=U8f#:Rrjc>Wa#c}.*co^CjnS:}p_*Y?lGK#.=6ZRg=(RcIAgA.D5J^qJu)CqfmO/#zfFFeh)xk.BW4XoMsMGG=d1003z:}F}H[bZ|07M0jC0{V2Cte%vB[juj{tlEOYy$E#jN>*a=H_s6KDSS@&en/\\\"Ru?mSU^|sljh<CQU4L#EtQSzv{Ych|aYwK0h:YLV9m,(GNB#MMdAe$=:I&95*k&SI!tMyGT{gbRNSxtA[xGYOBvu^*wzijfHSruh(t};J1=QhqgHgIG|n?&Fx9Ur./yi6~^)0}x[wh{KAnU3GPSCGjE5b010bQaJGr/T|HqEwB>\\\"fQ0znb&,.x$nVT?kxHNu/YG&dAp(?,sTlbcZ`WPz>?;:4*a$EO<@ygMR6,,Na.3Q+GZ}6tWU0g=GGXOtF2R<(eRRAR8;4Lx!v3?HKQbYee8?(=eZ!S5zZ<!D`M3S_wp83US[M)a1mVV1Yd(u,VgHH]}Mj7zpRw]Rpt,QH[cKm2)I_q~Y>(_#G.p@i;?b~1{Wy<BfJnHzPf}I,^5tO|%/B)2^SdUE,4}EdZ@A2Oo)q07,R#a/DoKCweC*Rp}NF>5JoW|Y!^i^\\\"Cqx|gZA4(x}R]w:fSgf42N4D;`nbcGG@ig)M[$~Cd=HC@yH66jbV$*.\\\"#=Rl6@Fmu|vfv_eqow1rY62B{#]0n0(b[i@O9_r3_A}H%1RJut@l0DeV,6{2q2f(z<E:XK11b@4g/WEh(qiYN3ce{N|S#nvT7A!KbF3.p2mV^+2[hv[Yp}678bB,2<+z{I49a_Tt7YM1:OKFO{kFBEn\\\"{He3)?8fx}Wy/=MV6+6qDQ=./pL:~3MoTE2Dd6=6([OQ<=blQA(T;(H)m`ECG[dk6=#<oP~LjzV}c|)OPQCC:Y!3BbX4}{ZUFb4%dr<3_.Rw3^|(E@;$@RFJvxURBeRgPfx:RbyGl9YaJ<b4u{<`T0Gm}cKHHgS0F:!5Hb,W24:0F,j7L0nGPJ30@g![)WyW[@a?EwpVPv/%~+b7%LkS1iafs\\\"4pgFK,>Yqs_;8BZ7OQh`j{~),af,k\\\"xHRmI`aPOHcgB=zd$5L%`~,F(#,4b^bLSI9)gf%A8.s.h`IC*F)|EX8o)l7ocX6Ijfys7!ICDEXw.jL**{tk;O,D{~H=?p;OWPaOo0PZ_Gn$$x9@_~4&L72DubJ8(LHj&gK*Z^/>?voAj]HGWH2sb^WodE6OKH$@m)S@2Np40_JFvOt(>(SRWu[wD##9soW~snWFYc\\\"~dek$l4e|{}_0}Fzh0e9B^l}/142dt$K]3#F5_xLwq22p;|xn,$#<GnQ[\\\"$lOwlsAv[RO3@lHyA/cN0A*)|^L.3*FKfqIdP$=XYa||XO(/,5s[ES[M56}v%c{Bg_Gl+A>Fiq,gKf4u>;b;m>c]sr}/Zb[mjCVp}d(ZVSf6HWOOYBUi%ZH1c*9hu?KI@[A3UN5UC@X8r3RuLC=yyOkpk{|u2u@oW#.mg5x(,6zC$prG%bR^1Io<6oTvr2~9SyTXn(u@=!Xe`|pIhP#0obPbL`L1#7S,Cyw%QWly74irWQ;q3:`UP#s,&{DA_0P>4E2{h4yiq.mt2Oy^d*{:72Y(]B&@I!eO$+O6^.\\\"U&);].9>t;}v>@^$*yC5w[N|J*|MdTd63&Al=)<v%463eM%ME+Q6Le1sf)Ao=z3)Q^2Vk|h*E.g#;_0J6hr1FC[*jn8^!?zX&}s:}\\\"$9.b0Td4\\\"6JSA\\\"(j$R{;,@qEH{2Tg_;MX3[#)EiQm|(T`%`?we$/?}4#xe1=V,gz8>KDrwc}]*%t>wv_p~JHjLk)LMTK_a,yGgU9IAh>7M<D^yYTx:v(Cvj%,!+lz/gb#F6,hf%^NJ:`O2<zp.&!`iOCbUA1KO2v(P%md6d9s$~yX>]pseKS]$dgG=zQJ8=^eMgL04]OgvosZu=9|p6ysb\\\"<X**f,]HOb.659q}E5YvxNQAv@_cZ?%A(*Se~7T69K}lC\\\"O}1y,$W$J)iFR_BNL\\\"HrW_#3p0vnlpJV(j)Ry>!hS@X&69XNPCT<r4%[/yN]s,tQ~gT=(SRP.?lOCqNCYa}hL8Jd0MiX5~1as&i(9iM@Nua])XmP;w^{Z;[]htQPPgBiib?2oB.8{Ns2$/Fltj^rIjRThc&~E,g~(h)+e]Jb)l.UG;FbcYCl!]ARU2`:iXqRB8{Kim@Es3mkgSaD[:Z\\\"M27p4by<MgNv?=agp.hs/;h7;j1ADc%_*Gl4DfipuZ6an\\\"/;,*<U~u<E$=s/\\\";QwLNh8H*/(b*HR~7ok{{/Gf\\\"O$Vwl^Zt<\\\")#G{TPAW*l,m<W+2E((]L$F;A,irV!%vA:pFi17?Lnwv7;2#]:8bWB=R8JV$[iQ2\\\"^erW?)*hq\\\"ML0H)r7fVjyC/:H[)EFC[J7u$bW(~pYTK;<+RLkbfJH2fZsexO)>$,NRV?ZU4b_SI,3P/j%B~ONyQg_Dx(hM=z3E+>8g^wCmTaiAJJaa&u(u6>^;0o#WsSa<*)QRH+3hkTAf~:9je}ZDVVEw[~7S!jw~D0Q.Q(l6yb<g{Qt@.~L[ytJ]}9@Lu[)w2n=S#>]/p%.JH9&LaNV<<@!8~Z2RH]\\\"Vv]f=~#rUs/2<w7:j_e1|!*\\\"7>|)u~TU#b*Z)O/)Ak]y6{WES6g3,Oy<F&}@kq;,C[JX?,Y]S)%Qx9;LzvZOFPTl0HSXd>+Q:>v.PArH@2I:hD1S!x:j.RBnajsswi!=lO6.]|S51;!lFH+QV%==W4JGHHm@86~D{Ipf35Rzf{{ENYlT=0%`<f<1ah2k5Y=ryl^5|q2zac]<g{1$[Wn?.{Z\\\"~i3EZ{gk)7aBDw+UIk&f#z_dqbxD)>YoWK\\\"rII,J7QRz{SmRYe(J_1$\\\"PN.QFy<RC|S2#zCITGpj*#aHO=Fa?S~OUz<|/=b@f4IDF{RAA]Bj@<BjBk(t]R+%C?\\\"P[BNG6eEi#)0}G]&lLe%)2A>I+WDVzpmm~]9(RPxFz=V`saH}K&By~F<*)6Ct>H`=~$2)>LVfCI1NkiMnrAI*zpYAW>(G/=~_*Q,R<Db*?ME<k6;oZ+U.}A@L,S7ACOS+6GR.GNe:MtUHjFknFs4PRlaF+C>kGd3S2sIFY%y~.)GWb<sQZ,oI5e1N|!?Q~9&Cvhni*%]Afd.(M8f3$VICqLjvhCC3pHmg)7d/f>wrwI2;zf@iZfqJcJ\\\"]xgSb(i8DH4FIZBln&Bj=#@Ws_XO]CVy]Fe\\\"oCx,%Lyc(ybd:H|n@ugy%X;=].Y*UlY:d~oKj.TN?^FfG!~xS##|2b(@.;&pX*{DUI62UDL!Xv}RV@&qg6@|[,Mlq#mjk{i)jwpTJ5fa=VN>}=K!EuO*uWvxyek*lh,1!qjm*mbZdWTn#p;pz;GYosTvR0(\\\"&Z2lkZl|x&wNZ1y.8z}:oj~/qkid}^P1?s#?Y0;dpRIIylScQ1J{.XBbZrOV}V[1M/f:9[^T~.li{%^}8BU^qm\\\"WA3:PA=9OLi;U/FDB1%HqUNH8j>aRj;@W[ec9DE^pIeDSE<|J:qTv][?Zv.uU=%`#2(3UF&jb26+qJW>)b@^T>?R_FEeY|.!o#11~msUpm1$vmGaWt)j:)5RJZLpM}}@8HCK6wO9p{V(Wxjxvn*~[!D}R}=M/jGKRC;gc>Xz$CS&,{hHaizMkO<BlSCE?S}C($K#VVb1<An?(1{?[ya3&0*.Q!FLUUIFNkZ;2GusDtRipM<}e!%5*YBw]jbC^=B*=&shMf5QDxML0wO6{Jv[(ve?PD`(6lxaoE7>.JO=94@sdK{y:afD~.^f{KR(R1E}(OJymDB2d4bo%if5HSW^oFpp^I#LMBn.xG3@I.pnCU>!_!v?LSogl@E,:0|pra@MG2@R;lNw%Kaw_S3ApnRQ_FWmc22rDiEB>TLQ<Xm6%]}<Wv:ph.BV,G=+=b|/xRRaqr?`4Nk$2~c{T[(`#|Q]lyYHWzv=a<Yt@{}h[omso0$KgMhON;xr]C0ip<ylin:rqgj^@A2GsAq@~C@zY\\\"1T)7pdbd$Kj|N(LAAxay$~)col9geJYxh(~;nac;|qRO`.s*h[breP6r~/esf!L_Ga]@niOnOveb:>h<HvIde3GM|gPupb$k`s96grHom5D)@uF=YZ\\\"Yb}uCK&%Uq9B+7#4S/4?+KQ#V%,VQe4l,\\\"x5]?7ja0ow^4w.f_9xjH0UOlp%i7aRy~@Ag@.E)q5::%;B+izTln&>=HOOnw=+Zq?SbNP0x.d:0ek8*>EpfNuZ&?yZEozOs%?Wn~Ex?!v]*ioYLbTEv{Yk=+l;I<A!Agv\\\"H,b!j&Tr,hWE~{1gCV4d~4.{PyolBxmZ8jlAoVryIi:p.TP<t~PG~|H(2aFLEw3)TUA0(zX\\\"Bq=4$sk2mcd[]ypoqgQDJ.QVV/=J\\\"xL}q$g__|%,fL0(v{~6SlN{%8sBs;,K+%}51!ELO;aW7T5@^BzPNEK~N8,!Ob*jTgsF3}KMrnZyGyE3`\\\"5wGw\\\"OZUWf;MRA<NxcN7Ya35di^}VRwyo^5G(`KwNh6,5[RC4C7<j9hPjYd[8Vk%nlam,zB/,HR)|KF:>?<K~)&%JX*y^bKqrLH]lZ;ms{0?YT*V7Eb8>Z!44cKdTE\\\"Je1#F:fC!,K#l7]A{^SAfrb:#YTXqnI.Q0;}MC}Mhz16<:uKV+pup}Iw<1b^h?ug*/s9>>VU<bBRm*l+Us91Jm.($TTA$f17o^V#Ww#_l;QZQM0=;QLrJb~!q5J}|5>mm)hUc#]>Q3:,jhhK_pCy*>Gn\\\"kdb>xd|e4F=TEp=_dl~|is|}wa\\\"JYA=_k;t`pB9X)EW_X~0*!^U,S8c^e{kM=/vk~dUz#tnYDOts,^tlNdr3/Qus^N90%M+c;|x_4F0nB@5OC/r\\\"0XxOL#zN,ZC4NZK{ugd/`/1ylY9%4OU83Y4xEciNR9x]l9TxFpvlm?j6=Q]\\\"|J(Jj7@3fZJ<VLlG:}g@:up\\\"%Bba9Qg.1l0A*?{x4nD\\\"J3e|tAqNGB}W~[`{V{S~~cm^Y*X,EL\\\"8bL*0`gm&IpAEF=_J?::(s`!R}l<Yl*n/F(GyXJo0;R\\\"f=2_t1Zmh&^Ra4J5._QxMvh{G(8j`XWm?`Nx/cqXGxg\\\"FalrZ:YO~h?[361V(<%cd:FDZxi=*dOD=rgQvYZFp2dX0Szc?XWX6z!k37uJ/LULG6=}N{e^A#X+JFz$`T=t*t_oup4TJ2y?Ml)L]pr,xboJG^1e)fgxXvh{*oJ;uWw>Kk>IR:J_mr|EtfTsi!5s3JYmmX~Q@PL~L2.p%{l8IY8U>7sT{5$>LW=!RF0QRGiLwta=mXpX^)WWu(xSb+6]MX;6EH|QK#scCQ#~9eEC*@sR%2jM`~x495qE>:^u22jmxv/AFU/CpXG\\\"<nfddA>G,S^P=$DSO|5*b3XhO9m|\\\"*Hm8FFG&?.oeaN{P?%U.b*4/l[?`4*`}_+k:tUfigX3hOs1DY).4Pma73|P_<f=.;n2\\\"$bFCDz!hQI1K)\\\"#v_SN]9h~lrEaax5YYQ}|dF*(U9F$zS0aCXhkWGIh8OJCbQaK,4\\\"R|?[kH8geI2Rdk,Y!<EN((B4bvD=J3~F:HR+4~<J<K0_yY6?B9]UQe3x%9S@Lpj/k,t}3^mBuuV4`,Z2N&zNPjzplH5IAvUPewkVA0yNQxLk#`NIQar6DRaGZpExjAKupLm$|DPvd+|q*O5=Loh9BLG<N4/>L$0+Q`LQLNW)Fay2ADNL~sy]FmH:&gt!CeneiODlh&o0QMTK<MP_Fe$@0+B$|))9L}vv.AT@@0W>doFw2_j34XKF,Z+Q*)B}dNtiu>#xS>Nnb{:9PGtRRPF<u|cL@7aoL{cl.zw8.jUos(xzDf0K)xyNn3LMV4Yp6D@]aus7N?c9x,QC(I}l~vws~oT(72k#1(Y]zv/N]aE$*d]{bnn>Ir;|5S4`zAzv!Au,vaUvj?_Nbi*^4J3cQ9)<O2Sk36Oe&#RzWM=0.=X{2^!slpO.^3mz[w)5!;}R!f[FU>K@gPixC)ra)4zHp|9<TkzJs$(IctO>K);#xHQK#Zk#~=}TCWWc/f{)80Qw%g6V<jpAM~CFEtF[k[fO+8_M3|6Ujuq(V{^Sh|}P(u$FVYqsY>&(fp[N!X!cPR6.:B)Dl[Z,~P[~9ek82L+3A26fz%Tfc<oB2%8^$cG?AC6NUDQ&/?iT1nsM4U*@W.tLL%&6s]$9+k$`*)~T0q|P5EdczVqIn)*@T{XS@Iq]jN#PB+q(I+@47A:5hh(Bg)aZAdedx&x$!v.h<%^sH`zU&+.V;lXR4+[z=Ke8EH9e+*N`2[.q$nP\\\"LkTfVa?!)Vfx{WD<>@}Ja/Elbm]o|6)9nGQ?;,f@p[&m6=)]6iEDUtdN>)&|B.gaJ;Gkm:YvT2K!02PeN&f{>AJF9GJ`{O!h08S1CwDZ;W$NBZ*:A\\\"4g|UC<J0StslByGIB,?SG8CiZmI{bEy:_22@i/Fq#p]q*p{uup_sSLFV9#_e#,*x:l:AiTd@qMvP?4Bo/}PE3qpJIEq?#_EuqgE:=H%2pCnUhJ4vMkII<8QZB8=|r}u+4_*w]En+uH#o9jZ.TFKhAs>o^$818/1wUpBC@8FksmMpLND/:XPB1mbEH~d1ID_q$ocQ_vmW:G`eqh|+PqM+:C=[[voWRW83umDjt>MU<o,K18/e,iz(B,n_7Oz8af>E`|iHv+\\\"6C{nN]v$|&^ZFMf(oCGd(Q[$dd0Pb0+@K>UO)V}$&e})6={[*gWF`2$U+d^:=ybR<G`<h`h6V{i2[.$i5?en4D)Hc,ds\\\"NOI?ywUa31.JWP7S$s6G%3Dv^ZN6qFe):+F:KMA~1cwzepGQVp/}a]k,Fg_9o$%DG*ueS|f2mTxYcMrHoP/]fy6]uSOR{[;%XDEuc\\\":;y<gfau@#[BnO]0ed42CmCjIKo)4yP<_G,\\\"_8i[<d8J,n>Hdd[tak/x?7z%fkvzmo;/YvH(MWjzN{<_*z1Oq~G\\\"B&F[/uhEdsR^4=lBo0WJ#fLC6DlP9S}%bCXzqAAFtq|Hxk20S/X@gd!>VV^7Zz2a>4wwc;4p/ynX~ooIFn9[~$n]LUmaZ]>Ou%I&rp;4nx#ptgOhv2,3^go]1[g${0xf#eNIT=;mr8gbedR4~.Wb,=Q@vsrihAEMLZTL0uj{Zg{>a(#kTa_EWTSokru/_Lh[Aic|MW_EJU^_!Q7Bb6<8tuv&{bf~YDG,i+rul?=X&7_T*2U~)<&}U8<4RKu}\\\"`f<F[kl8ZP3TL(K^01zkeH|TiO|_Xi7V)(uP:e*nzVS2jQ<a1p9WR#$_Nr1vuFSfW(tf[nB#uXVXg5A/|kA~>uya5RfLBr2c!MPE{%hQ$%|7V5YJTRB2?(&jVy#2qTxlX/B8_;Jz)@dZU]$L0M8er(8P#)#R%k~7inE&[OVl%&NJuT.=78Y5Bjuf#XnQbI0KSh{VLl;K9t>[z\\\"Iv&J&8%s7@XTWYi]~Y!9\\\"09)0CjC)^`>yBhqsV52$u<$KR|\\\"~72rq&(2&*MS@\\\"Fx#3mDVI/7#FK$zL,NZ)i?o}t:Z{$0ewncAc`p`4_J;Qb}hkzNBZ6#!`_3#=H{fsGOwII|cHpTC\\\"_[L9=cc,A[XH`JoUehzv@!.hwD+USY1=Vesgwj5iCoVTj<v[`]hev3Q$FZ`mSy@Abb$d@t\\\"tcQV~Ks(e@awdi0oo`HdhlX[XX_A0@r]vZ)Q{;;K@d67z%C:<2nB[U*F4g$@p:^/S20&{0XM1KE2D:R<]+rK$L=x{U1vh7xM1f?`#9x&`0Y,Qgh*`?(Ft~6`J*N#GOA^}+^qUdr\\\"B97C)*!fE`.w(pg9vtt@a}(D(m3sVNF[qD>t<*Qv?A#~Vu,)ZA:~oJ75I.!/VmDW;:la?DGs7F^z+Y2XH(;^awf$kd;*i!fPXZs^~|L7sx0@81aVylc}j}J90n{K@[j)`+6HDMN7u&OYcz(@T}WSqFp(I8HK^IxQy2Zehu1tnqW:v*VUWd8~WSFaE+q.3!?G3ua)&T\\\"*/e]bG.M#$k1OxD+1[)5dwa]w~p#/3}w=X8jE#FMg([UCUHcbJimzDi+0^`i^WC1Mye5g)J>K~EvGW8+oxN)CKE,b){rKQ}7Ff\\\"]g`wVa;PjG.:<rpW_gMgkPnz_S?P(K7$1/D\\\"Ow,J:(LeG|17p.&a&lWUd1sZXRzB2M<A[GEJRA1?6lBJ35\\\"ioani$YpipUL+~+3&LO~@hu[)vA!88jKDdG]m^]U!$+yr/zr7osRdBY3Mn#6[O*\\\"sc3CE?pbds%lI0!:0&|(rnL[ek6m2N6!hM~W7^RjaMk8\\\"~j#n^#ddt@MUhn:041Ro,MVR+];f%>[A+^@W;@^#lM^?cuKM4/&,Mi~6c]5<H`oxx3B~hB0SC06%&e(c!aTm7p%Yi5EJl*vFD&*Re9[m4.1A,{CuL7AxG5*f57j_DoG{>K/cwkl/L;bvdfw~lJgx9.p*Y^`YNc~f4!o9R(_,hizYYlo;$<88pSc2*5!Mv/mb:X_MHEkKrK^M(E`kEL82Lw\\\"}RGw97]0]{MFD]=Ih8S>eII[*UL6DQ1iPKg(p]0%Q&r42/B7i<:bKDi}m[)JvAuZ`w!]@j_;11YAs)J\\\"l(p_Kt<ry9AAG{^G_p)bb|gWw@mT%rDft}}<k/3!;TL,jOYUTL}odOVVl9mMT;sw$p76~Ne&NV=cS4,*(<0{~Dwc?IW_kZ,=XbSp?B],uUXK{%1,z?L/:%E95*fAZ#:CI~FIwee#D3%4ez>L(B}4><6j/Fd9}X&86$#v4wqL*Mk4!]3ZAR!5}[UZdt2m3g/G^^Wok.u[[g!p$s>/jk%QU!;,^4Q0BG~b];6J2CiQ{pYwDE$3`k9{wkm*$G+$4S?#<}6=\\\"fp@B^QSlOQ=Pn5$WK4qih2}`V>I.X5Ib~<_MtgTXop/7Bx7O__]ip^7j!DS]vs0}~cB:J%#ZT0[9%a}KGFw.)#X{jA4@:4$S$2C6DuwJt9D!1]Fs)UI5T[%8^I!qc81lQlZslf;I=(<_Hg%h10W>3p@iD,S{tJ31PwpE0\\\"v8ChpGB*$r|E1,!2o{Bx)_x\\\"1|pPTlV<}~Fqh)C&`\\\"Gpba19AL,M4`faPZwwGBg+\\\"7X:9A6uT,jbo5vvVT/E6@d]?l>?mf:*vE$CYOHHGXT5`#PQC\\\"MOBREW/lK^hbMg/A32FR^,u:[mC9ap@b(I{^F&g?,9Q@ru6:jbvL$xdppF<HB.(!*Xjb[Vz2=hIryzsiu*2G#MU6jbW#l]xb#*rsBo4+N36br$[Wu8jug8q1m*as:3LOS3Oix;I5LH70x%{C.HanbV[ox2l2@nw2qMh}Mp%9#!_x@P)#2bLg.%&G8VPayV_7h*,KAD|&$*|uk.v{Db:Xj`oUV%fRL=U;O9E6Be=oII4@w8Dn*i</.];gw4@ND\\\"x{yzrzal}Ibx(ztb7JRJ:7;FY&$>WR5o(~(0v_;pbktkj4w0$P^s*DCac/i7,{W108JVBPEmh\\\"ZlrJ[RNhh=v:@mKCC6M2UNo$D+O[MdIuUKIK>DxQsT|<?UNYpUE_wDq.4,s87sip]rmXDuhU{p~bo\\\"S:QiM|y:1\\\"eAz@oVeik[pbceXsD`lp6E>zrlM{;i:70qh[6r2WIAKyPN|<m@mdh,[X&0OQTpX?^9&f!mr}nz?IBU:MyhXHB1|$54@S[RG)3E,KX=bRdL9#4xGo*)TtleR!tj5>shSu3Q*8B!$WJFrodjn}OsH[~Msf<(LxyF+{Qg?@A<Xpe^*Pto.\\\"zLqyTg9xU^I7[:y+@F+Vq%n}{W<CimDo6q}XAeV~McMIHo)ieL!h{54[**~w(k[jgKP{M40aC47btf1G&=M2RHpID^\\\"CXUP<zL91LA949V7s)^cdL7jMG1bC[gSP(>0Z+Co7Y9C|Jb0[!,W:a7JzX]0n%Aeww8GB}@;=6d^<HM`2P4OmdK^g9<I7KdU&b~x79RK;KxeHBc?:R$+gk0Y`B%P*aG})}*Z:k:j}#{7bJ#P7B=+H=A!2A;q5k=J|$}A|jPQeY/vii$%UV3u=cbPF=3bgy}lrLJdaPx`|\\\"|GTsBO0`LmdZYm.7<TdHP#)T5OGz0;9h>HvN@ca$s=OSZ3]`CV~EZOvjUmOtf:etm$3g_bdp}%h}Em(.~&H6K{|iK<LXfC`1JyuvkLQ]hj}.pvkW>|4?0y\\\"4(60aq?1~p4W}IxHiI4e.k`gy_C>]4ueH;$E+TzC+`<qHdt(>cR#ARD*XEY0}KN:UUFu80?D$1b2Q6$lybf3Gk5)Enxv2=Ml:YJNc?&zOD;8W7Zz=W>a`77=U^gv>7O1/f.52#Et#?GY4=:%F=pm[@+d^T]J#>(5rpDU?kvpd6z#;es0b=?Umj}?fKj<A^UbKNCm(sY688woa_\\\"{~<|Hm,W{p6Jmz&^veMLDhadgui)2xzn`m|I7!^;<2OzRd#qf!@zS:b:Em~_Ichxdt,MAh&)wNOm<$o`G<?\\\"SD>x{ddDq(A!;SoIn@bvX?*8/1jkIM24t#0f?#*Wh>l:p/=o.UOL{oYX3\\\"#lZ>2Ex06XXVlDbn4P5w<iI)~.S>Zw@vvw9HvfJkYU//s.XxO#U~^;SG!>lJV^[qKxRp5UKx9NWHPD_}*~>w%|iPakCRkEC,2Pf:eOXtN9<8c/1gkK_>R7q<2sDA}0|X\\\"l[<5ho/pC&vvgT<P,<E*}8*,+F:Rh6Uj):ps8DM,SwkLFHrfJE\\\"S~K[DlKoY+175L;+/D*ox`PgF#W/<G77BORG!/ji[$md.M?IqPwihmUy6&`:;cu,)bVG$51n<N1XGWFHpA]s)?_U]TM:mO8I6{=!l8An[Afyyk6yoLigCe{fR!32+J%<2bULp0.g(})nlw!.)UM7K\\\"<_ub,Wm*YT>dRkZY<Pm6br_Ofa=#h1:@|BU;]w)Vf#A&d\\\"2BTuyYUCA9!WVY/M6EBa,X%3J<=d:Q%QKaeUA2nRUZq%b$:#}lhXl:n~:FcRQcU]|W{5Bx>X]`e(Qk_alMp^#N@?=/O,@F{(Fk>?.$NMlgT7G0HUSViss7).Y#W=Yr+!5#/cm=sBCMZ*pAF.7vgxtt*A}b>?3FKvXAJuW:p2mia@(Ko:^yuN8+Dgurw4K?mF7!PPd;Rveu5`db%0G`HF}3Lg1++vjmIKR?yENvS*J&GAUn.iydSid3*WK,?CdZiR:AB;%)E~BvD;dU|=mRVC=pe^yimts~{{q:<&Ds:cZWP4f`_0):f0_`Py;#K{RM)4$^BaIbnOJjjo~dfWq5i$[uZh[\\\"(UN^a=M!>a`]k]EiEUdz!kyf!6[Id3iG=fq<pxm*c0\\\",*2s8#x8V(8w~,PGL8L#H[p7rj5pAM)}$K(@B/>7/#M:QaP#h;d[bgk2EWJnYQ8Fc%q*7rilp\\\"QE[L=xJyvlutwDZF4[\\\"Ah9H:cE<yM$NX=8bw`W0x/C4%??d{4yJJ`56?#8v~9S%sE$a#+_/EF#<]\\\"Uo0dRoe|@L^DDZQs(B4MtruKE8kK<}PxMnjHOm^z2]vb%=:SuU#0Y]<r|JTB?Q_RT,OVBB2MQcZ:&a/g@!ap(7H+*ob^vumAH>5(#TC4XdEn@o%gP=4bRgFGYx.IO0`l<@pmon6]?^T@}czus{Yc720ckyWMu_a?gzP8.RXf5h<\\\";NH,sZN0akowi&,SZA_W/T,HX6#BW;Dmbip>$~5qHYED}<A{(H&<ePi(j%^{D]Eg7TnEE*Td|tbJ:KW?Cg,rR[z|~k~wGr@zz%kQ6KH8wv+#O?mX<x?zw3._%`z^P3VS;o?Ifeh8*A:4/M{,4gq$~&4~TAZeDf=CeR3>W[i,_8\\\"PU?@7r*f__))gX)qD8Es:s}AGo3<E8SK4.m7@V3JdO;nYiN\\\"Z9c_1@J:2v)6pV(K?M^*V2RMTRCPGV1:pP#8,\\\"\\\"4lX8D[aloD.Vuv?F[O7<WvB]gZG/0($$Gt&yZJ6:u:K3(\\\"{+AJ5xk`(dI}Y5su>%pg;o*0>Nq3dvM/b0SZJJGpc{poZ?G|rAm9Ab%([R=8=hqb/l_A?/lu+LNOg\\\"Bv$H*j0*dG*]?8htRzXgfzPhRw1@WP13Fy#P+1|D|Czp7q4aLKdC>5u^k{1X]Kx%Z7j2HTDIqiVEE&F>ZcVb];J2C~3Akb[1FS#VQ6GGNJ5zOyi:O0W072$(%pP#uJ>5Zqj^>Mf&}c$P7GH&HP3Y^Scgu}`qaYt7]}XiH,jLl%j!$FeUc2ApFA\\\"6NZXJ=5\\\"B7w#y6W_GG=eT#w_g\\\"z8G/&KyL>GE1?jYRj;f[nV>hP*3\\\"=wFUnjo4_F7Zvd,oZ:dDHJnsq+wM7_:TxHOHR||B8Zbo(?E9jliTc6NGRmNRmH<*zbTXY=rKex[a`fw}Do:L8LGloci3Q\\\"r,$>u~U_U%It^EoUdf[l@?64=OrT]#HN^[?zy#G+8VDzc7G^j},;auaJR_&5Y&:%`oAOc/_B/L}%NwyVcwrSE?3iUu,K+K1!q9O\\\")d(:2:G<lJ+%0Zjs!#%\\\"&18p!IrQK\\\"*%Nv7s=.4_7~c1G$2_c\\\"3tN>#Ko*c=%nJz&.H_X4h0fTyA_R*L<|W2Q[>/4(%?|i&\\\"u[X8^&)Q$m]dy:s(Dr7+AT`ym|Hb`zHz]%B3O$1mxCFk|&O8Zjmqv2o{uuZb[~rT%{%,7u+$$@/FgCdf#At:X>7M8k_f+CZ{|#l*H/GhzAgVk|Lo!Z<Dv/<cNj20@_J@t3j8UebdR5/o@sTRIHSc0:x|*k{Kv\\\"yK[uK>%=^:gBJ,^/:(EOokr,RDGl>sm0}#\\\"_1Ln_#G>15[]Dl:2Ia{3fK:32b>zPoOc+X`*GR+0!:V]>h76i\\\"GT0l#HV6YL]}%Y@eDUJO1m%F!38bR1>[.t&Km^`k{%qwm:;bKj]]lGYLC`;5#Y0qy@$tw/GIv$L?^j+f.zd|BY#~HiA#<J~wtj3)o{gCMitSic$)TfNhz4v96b3J3fy*0yqQ:=H8Fju2C@rvd|#(BJZ_ksFZ#&bVm.=pK!16e#P(2F%&[{P~EoWgw3.p8Ig&SZd+UA:wGAH)R61i6vLq2]9/^Y,gv\\\"@\\\"yVHe:>W2+D/,%YeDq%{N`g2,!D_lIXh13OA6K_Glgs&*+oUwD*R&Wk:o*<p1EUqqL,i{z6Zex(gB%q81wDmr~J\\\"?4Mq?H~UD|TOV>oq5*sH4V=>tlC/PM5iTKoXr&s;mP0.O#NM_)$dG;[Dhc|&fmxfY7I&fErK2vhS$\\\"W]DooIgJDwKyLC^lem]ctxhXx|t)NxxY7`qBq7N$jXavyg&FbLo`Sqv>Q8vzk,j7*ua;~YK4%)D.Lo%_,`EFB(lz<)0X{{][&nNpyn0_1j\\\"\\\"=d*[ZXCx&{9ShKoKTWLy0WbF{Z7V337J|Jy5MT@]FTJn\\\"~DxRlJ+!5gnPnE(,<cfz5YCfa16OY?@],7=67#~VB#d[|DVfnQJYovqMjsRSHb:Fe}]/7U^xl/f,j/`qDMu[p9VchrGFT3`al^?YzDKlO+LK&kBYV(h@=xy`Q=wnC~9a?,<+ea?pZ1v$Wvcz@[Q8s:x9/J:|jF{8/*f7[F4szfIw.{.b?1.JM@Au4%J{u3Sw$S%4$}9tm*IiDpj(a9Z3.b{`j{gs!gP7drN,#&?9\\\"?o]`!/(*0Vcka+.m>/eS3,IfuO,uEp+b(3u[bekFdX/{dcrkT*^ohk\\\"Kg`t=HwDdS\\\"LBQBd6,0%0vZ$3yC~)Q`|PWBphTh=q]wk>h<KOHZoa4#/sV+y=.pC.~JEUm{=K@^/%qhINl3zx=6(xP8kkLtOEaaY8N>R/u8(#vE66wdV+^I:ZG3v,x5s!>7{#X^b_&gBn=&%z$G.=m$gcrs3Ov*0jF`ONdiQ,Q[4:#(P~g%;;G#VvC{lDe|\\\"Gkt5^x,niP+o:CJ7Ye%5,V%YHVE1.EOR=WDgs7On8puHC\",[\"mbQ\"]=(function(zfH,tkB)local Ly_,gAU=(zfH.RKF)(zfH,tkB,1);local auF;auF,gAU=(zfH.RKF)(zfH,tkB,gAU);return Ly_ or \"\",auF or \"\";end),[\"optL\"]=(function(AOL,abf,akG)local HzC,_sd,hI5,obw=akG[6],abf[0x219F],(((akG[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,abf[0x6D74];local rI6,dI7=HzC[1],HzC[2];do local iby,fhM=obw[(rI6[0x74E7] or 0)] - (dI7[0x74E7] or 0),hI5;obw[fhM]=iby;local okK=_sd and _sd[fhM];if okK then okK[1]=iby;end;end;end),[\"MY\"]=(function(iuY,kxD,IEy)local NEp=iuY.x;local SiD,_fR,nuP=iuY.hdi,iuY.W.string.byte,iuY.YG;local SEv,HEb,REg,DEk=0,0,0,0;if type(SiD) == \"string\" then SEv=_fR(SiD,1) or 0;HEb=_fR(SiD,2) or 0;REg=_fR(SiD,3) or 0;DEk=_fR(SiD,4) or 0;end;local EfD,xp3=(REg * 369 + DEk * 131 + 0x5DCB) % 0x10000,(SEv * 851 + HEb * 257 + 0x1164) % 0x10000;local TfL=nuP.bxor(xp3,EfD);local qxL=(SEv * 17 + HEb * 29 + REg * 43 + DEk * 59 + 0x7308) % 0x10000;local jxU=(TfL * 839 - xp3 + EfD + qxL + 743) % 0x10000;local lOv=nuP.bxor((TfL + jxU + 0x1EB0) % 0x10000,(xp3 + EfD) % 0x10000);local suV=TfL;NEp(iuY,kxD,(((IEy[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,suV);end),[\"Gu\"]=(function(ikQ,LEq,nkJ)local UyE;UyE,nkJ=(ikQ.Hkys)(ikQ,LEq,nkJ);if UyE == nil then return 0,nkJ;end;if UyE % 2 == 0 then return UyE / 2,nkJ;end;return -((UyE + 1) / 2),nkJ;end),[\"qq\"]=(function(Vrr,ArV,UEj)local zp4,CEx=Vrr.Vo or (Vrr.H)(Vrr),Vrr.DFQ;local RzM=CEx(Vrr,UEj);local CyT=#RzM;if CyT == 0 then return;end;local _p5,Atd,nbp=zp4,ArV[0x65D2] - 1,Vrr.YG;local sbv,ctV=Atd + CyT,Atd;repeat local xul=RzM[(ctV - Atd) + 1];local HiL=xul[2];if HiL == nil then local AfU=xul[8] or 0;local huB=nbp.bxor(AfU,0x1D8A) - 0x6093;local loj=(((nbp.bxor(huB,0x4B5) * 173) + 0x1FAED) % 0x1FFFF);loj=((loj * 0xA4A7) + 0xB39D3) % 0x1C8F1;HiL=_p5[loj];if not HiL then return;end;xul[2]=HiL;end;ArV[0x65D2]=ctV + 1;HiL(Vrr,ArV,xul);if ArV[0x1DD7] then return;end;local mns=ArV[0x65D2];if type(mns) ~= \"number\" or mns < Atd or mns > sbv then return;end;ctV=mns;until ctV >= sbv;end),[\"aZ\"]=(function(OfC,IfM,skX)local MEz,FE_=OfC.oj,OfC.pd;local OrB,Ep6=(((((skX[6] or {})[1] or {})))[0x74E7] or 0),(((skX[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD;local Esl=(IfM[0x59C3] or (Ep6 - 1)) - (Ep6 + OrB) + 1;if Esl < 0 then Esl=0;end;local DzF,hbb={},OrB + Esl;for zIj=1,hbb do DzF[zIj]=FE_(OfC,IfM,Ep6 + zIj - 1);end;MEz(OfC,IfM,DzF,hbb);end),[\"O\"]=(function(uox,whF,Tsu)local MyA=uox.W;local Xg0,Brd,Tp7,Ap8,hkZ=MyA.setmetatable or setmetatable,MyA.string.byte,MyA.string.char,MyA.tonumber,MyA.table.concat;local yhW,kAC=(uox.RKF)(uox,whF,1);local u;u,kAC=(uox.RKF)(uox,whF,kAC);local d,Itu,hil,Uhu,FdG,C=uox,{},{},(uox.Je)(uox,u or \"\"),true,uox.YG;local Tt8,At9,Oae=0,0,0;local onQ=d.LpQI;if onQ then Tt8,At9,Oae=onQ(nil);end;Tt8=C.bxor(Tt8 or 0x6D9F,0x6D9F);At9=((At9 or 0xAE88) - 0xAE88) % 0x10000;Oae=C.bxor(Oae or 0xFB73,0xFB73);local r=true;local BeD,GeL,N=648,0x48AA,r and 0xAAF1 or 0;N=r and (N + (type(Brd) == \"function\" and BeD or GeL) + (type(Tp7) == \"function\" and BeD or GeL) + (type(hkZ) == \"function\" and BeD or GeL) + (type(C.bxor) == \"function\" and BeD or GeL)) % 0x10000 or 0;local waU={};local riu,I,saA,jaB,xaG,seQ,dic=true,0,1,false,0,0,nil;local function ruG(tt,II,yy)II=II or 0;if II <= 0 then return 0;end;tt=tt or 0;yy=yy or 0;local zaK,Iat=II,waU[tt];if Iat == nil then Iat={};waU[tt]=Iat;end;local Asc=Iat[II];if Asc == nil then Asc={};Iat[II]=Asc;end;local Naa=Asc[yy];if Naa == nil then Naa={};Asc[yy]=Naa;end;local FyO=Naa[zaK];if FyO ~= nil then return FyO;end;local lI8=(((zaK + 620 + Tt8) * 893 + (tt * 185) + yy * 293 + II + 0x3D5E + At9 + Oae + N) % 0x10000);local uI9=((II + 0x46A2 + At9) * 369 + tt + yy * 0x3FB + Tt8 + C.bxor(Oae,(tt + yy) % 0x10000) + N) % 0x10000;local rk0=(((lI8 - uI9) % 0x10000) + zaK * 17 + tt * 13 + yy * 531 + II * 7 + N + 0xE440) % 0x10000;Naa[zaK]=rk0;return rk0;end;local function coz(fnh,Chc)if Chc <= 0 then return \"\";end;while Chc > 1 do local Mhm=0;for NfF=1,Chc,2 do Mhm=Mhm + 1;if NfF < Chc then fnh[Mhm]=fnh[NfF] .. fnh[NfF + 1];else fnh[Mhm]=fnh[NfF];end;end;for xxC=Mhm + 1,Chc do fnh[xxC]=nil;end;Chc=Mhm;end;return fnh[1] or \"\";end;local function cl8(duK)local WyI=#duK;if WyI == 0 then return \"\";end;local rbg=Brd(duK,WyI);local Poi;if WyI == 1 then Poi=\"\";else local luQ={};for _Ix=1,WyI - 1 do luQ[_Ix]=Tp7((Brd(duK,_Ix) + 142) % 256);end;Poi=coz(luQ,WyI - 1);end;if rbg == 11 then return Ap8(Poi);elseif rbg == 4 then return Poi;elseif rbg == 7 then return Poi == \"true\";elseif rbg == 6 then return nil;end;return Poi;end;local function uuJ(dk1,lim,WEE)local Osm;local _aQ;local RiU;local DiC;local ftG;local Grl;local YdQ;local PdJ;local KeU;local cc=dk1;Osm,cc=(d.Hkys)(d,u,cc);_aQ,cc=(d.Hkys)(d,u,cc);RiU,cc=(d.Hkys)(d,u,cc);DiC,cc=(d.Hkys)(d,u,cc);ftG,cc=(d.Hkys)(d,u,cc);Grl,cc=(d.Hkys)(d,u,cc);YdQ,cc=(d.Hkys)(d,u,cc);PdJ,cc=(d.Hkys)(d,u,cc);if r then KeU,cc=(d.Hkys)(d,u,cc);else KeU=0;end;if Osm == nil or _aQ == nil or RiU == nil or DiC == nil or ftG == nil or Grl == nil or YdQ == nil or PdJ == nil or KeU == nil then return nil;end;local HfY=RiU + DiC;if _aQ < 0 or HfY <= 0 or ftG < 0 then return nil;end;local Isf=#Tsu;if Isf == 0 then return nil;end;local Sao,dbk,q,ii,pp=C.bxor(Osm,0x419F) % 6,C.bxor(Grl or 0,0x3347),r and C.bxor(KeU or 0,0x7755) or 0,C.bxor(YdQ or 0,0x638E),(C.bxor(PdJ or 0,0x3CE4) % 6) + 1;local BdZ,RfP,uk3,cuX=_aQ,RiU,DiC,ftG;local h7,r8;if Sao == 0 then h7,r8=cc + BdZ,cc + BdZ + RfP;elseif Sao == 1 then h7,r8=cc,cc + RfP + BdZ + cuX;elseif Sao == 2 then h7,r8=cc + uk3 + cuX + BdZ,cc;elseif Sao == 3 then h7,r8=cc + cuX,cc + cuX + RfP + BdZ;elseif Sao == 4 then h7,r8=cc,cc + RfP + cuX;else h7,r8=cc + uk3 + BdZ,cc;end;local uif,Nsw=dbk % 4 >= 2 and ii > 0,0;if uif then Nsw=ruG(lim,ii,q);end;local zxM=(WEE or 0) % 4;local Ntc=r and (q + 0xDE62 + Sao * 55) % 0x10000 or 0;local ciw=r and q or lim;local function Op9(wtK,ml9,g,QeC)g=g or 0;QeC=QeC or 0;local Ive=(Nsw + (r and (lim * 7 + q * 31) or lim * 31) + (wtK * 891) + g + 0x638E) % 256;if pp == 1 then return Ive;elseif pp == 2 then return C.bxor(Ive,(Nsw + wtK * 879 + ciw * 13 + ii * 5 + g + 0xC13F) % 256);elseif pp == 3 then return (Ive + wtK * 29 + ciw * 11 + ii * 3 + g + 0xC13F) % 256;elseif pp == 4 then local mmN=((ml9 - wtK + 1) * 879 + ii + 0x15E1) % 256;return C.bxor((Nsw + mmN + ciw * 19 + g) % 256,(Ive + wtK * 3) % 256);elseif pp == 5 then return (Ive + ((wtK % 5) + 1) * 17 + ii * 7 + (r and q * 5 or 0) + g + 0xC13F) % 256;elseif pp == 6 then return C.bxor((Ive + QeC + wtK * 13 + lim * 9 + ii * 23) % 256,(Nsw + QeC * 7 + wtK + (r and q or 0) + g + 0xC13F) % 256);end;return C.bxor((Ive + wtK * 13 + (r and q * 9 or lim * 9) + ii * 23 + g) % 256,(Nsw + wtK + (r and q or lim) + 0xC13F) % 256);end;local function muZ(fu0,EaJ,wu1)if EaJ <= 0 then return \"\";end;local UzY={};local FF;local LeE=r and (Nsw + q * 17 + N + 0xCBD6) % 256 or 0;Ntc=r and (q + 0xDE62 + Sao * 55) % 0x10000 or 0;local phY=r and q or lim;if uif and pp == 6 then FF=(Nsw + lim * 499 + ii * 961 + 0xCBD6) % 256;end;for YET=1,EaJ do local mo_,CzP=wu1 + YET - 1,Brd(u,fu0 + YET - 1);local ck4=((mo_ + phY * 479 + 0x3F0 + (r and Ntc or 0)) % Isf) + 1;local wNo=Brd(Tsu,ck4);local PEA=(((phY + 0x35C4) * 719) + (mo_ * 99) + (Sao * 19) + 0x3F00 + (r and Ntc or 0)) % 256;local IrG=Brd(u,fu0 + YET - 1);CzP=C.bxor(CzP,C.bxor(wNo,PEA));if r then Ntc=((Ntc * 537) + (IrG or 0) + mo_ * 55 + q) % 0x10000;end;if uif then local yaC,mk5=CzP,Op9(YET,EaJ,LeE,FF);if FF ~= nil then FF=((FF * 961) + yaC + YET * 499 + (r and q or lim) + ii + 0x234F) % 256;end;if r then LeE=((LeE * 961) + yaC + YET * 499 + q + ii + N) % 256;end;if zxM == 3 then CzP=C.bxor(mk5,CzP);else CzP=C.bxor(CzP,mk5);end;end;UzY[YET]=Tp7(CzP);end;return coz(UzY,EaJ);end;local Bos=muZ(h7,RiU,1);if DiC ~= 0 then local qAM=muZ(r8,DiC,RiU + 1);Bos=(d.FLN)(d,Bos,qAM);end;if dbk % 8 >= 4 then local Nvt=(0xF7EF + (#Bos * 479) + 0xEBC) % 0x10000;for lbq=1,#Bos do Nvt=((Nvt * 531) + Brd(Bos,lbq) + lbq * 0x3FB + 0xEBC) % 0x10000;end;if Nvt ~= q then return nil;end;end;return cl8(Bos);end;local function CoZ(NrK)local wnr=Itu[NrK];if wnr ~= nil then return wnr[1],wnr[2];end;local PyS;local LfB;local fk6;local wk7;local fmS;local Kru;local AmK;local eg2;local nnX;local itL=NrK;PyS,itL=(d.Hkys)(d,u,itL);LfB,itL=(d.Hkys)(d,u,itL);fk6,itL=(d.Hkys)(d,u,itL);wk7,itL=(d.Hkys)(d,u,itL);fmS,itL=(d.Hkys)(d,u,itL);Kru,itL=(d.Hkys)(d,u,itL);AmK,itL=(d.Hkys)(d,u,itL);eg2,itL=(d.Hkys)(d,u,itL);if r then nnX,itL=(d.Hkys)(d,u,itL);else nnX=0;end;if Kru == nil then Itu[NrK]={0,0};return 0,0;end;local yu2,ubj=C.bxor(AmK or 0,0x638E),C.bxor(Kru,0x3347);Itu[NrK]={ubj,yu2};return ubj,yu2;end;local function LiM(Ssy,pu3)local vu4=Uhu[pu3 or Ssy];if not vu4 then return;end;local ExW=CoZ(vu4);if ExW % 2 == 1 then local OmQ=uuJ(vu4,Ssy,0);hil[Ssy]=OmQ == nil and d.nUn or OmQ;end;end;local Iek=nil;if yhW ~= \"\" then Iek=(uox.aD)(uox,yhW or \"\",Tsu);for VyH,bu5 in pairs(Iek) do LiM(VyH,bu5);end;else for RlI in pairs(Uhu) do LiM(RlI,RlI);end;end;local TxY=Xg0({},{[\"__\" .. \"index\"]=(function(kN9,XX)if jaB then return nil;end;if riu and XX == 0x7F1E6 then local SrQ=d.YuLL;d.YuLL=nil;if type(SrQ) == \"table\" and SrQ[1] == saA then saA=saA + 1;dic=SrQ;seQ=SrQ[2] or 0;xaG=seQ + 4;else I=I + 1;if I >= 64 then jaB=true;end;end;return nil;end;local wmH,fue=d.qmPH or 0,d.Zn or 0;local Gd0=C.bxor(((XX + 0x892) * 189 + wmH + fue + ((d.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);if d.y ~= Gd0 then d.F=nil;if riu then I=I + 1;if I >= 64 then jaB=true;end;end;return nil;end;d.y=nil;if riu then local ByR=false;if dic ~= nil and xaG > 0 then for yNi=3,seQ + 2 do if dic[yNi] == XX then ByR=true;break;end;end;end;if not ByR then d.F=nil;I=I + 1;if I >= 64 then jaB=true;end;return nil;end;xaG=xaG - 1;end;local qta=C.bxor(XX,0x3F00) - 0x906;local gu6=hil[qta];if gu6 ~= nil then d.F=nil;if gu6 == d.nUn then return nil;end;return gu6;end;local foE=Iek and Iek[qta] or qta;if not foE then d.F=nil;return nil;end;local ku7=Uhu[foE];if not ku7 then d.F=nil;return nil;end;local AxP,Sva=CoZ(ku7);local VEO,Hvo=d.F or 0,FdG and (AxP % 4 < 2 or Sva <= 0);d.F=nil;local Kd1=uuJ(ku7,qta,VEO);if Hvo then hil[qta]=Kd1 == nil and d.nUn or Kd1;Uhu[foE]=nil;if Iek then Iek[qta]=nil;end;end;return Kd1;end),[\"__\" .. \"metatable\"]={}});return TxY,nil;end),[\"Zbyr\"]=(function(OOU,uOb,IOC)end),[\"oj\"]=(function(NOM,OxV,yk8,cbx)local GyD={[\"n\"]=cbx or 0};for EIz=1,cbx or 0 do GyD[EIz]=yk8[EIz];end;OxV[0x1DD7]=GyD;end),[\"KFh\"]=(function(SOF,mbz,pk9)local fb_,jAF,TI_,Hsp=mbz[0x6D74],pk9[6],(((pk9[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,mbz[0x219F];local qSe=jAF[1];do local wbE,vhP=#fb_[TI_],TI_;fb_[vhP]=wbE;local vqe=Hsp and Hsp[vhP];if vqe then vqe[1]=wbE;end;end;end),[\"BqBV\"]=(function(UfG,ybT,bqt)local BEI,GEN=UfG.oj,UfG.pd;local pbA,KES,MzV=(((((bqt[6] or {})[1] or {})))[0x74E7] or 0),(((bqt[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,{};for AIE=1,pbA do MzV[AIE]=GEN(UfG,ybT,KES + AIE - 1);end;BEI(UfG,ybT,MzV,pbA);end),[\"cA\"]=(function(Qrc,vbO,qu8)local QEH,JER=Qrc.iPl,Qrc.x;local ju9=qu8[3];if type(ju9) ~= \"number\" then local tg3=(Qrc.Hkys)(Qrc,ju9 or \"\",1) or 0;ju9=Qrc.YG.bxor(tg3,0x70FB);qu8[3]=ju9;end;local KyL=(((qu8[6] or {})[1] or {}));if ju9 % 2 == 1 then KyL=(((qu8[6] or {})[2] or {}));end;JER(Qrc,vbO,(((qu8[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,QEH(Qrc,vbO,KyL));end),[\"k\"]=(function(nn,ynd,snZ)local bhV,dhR=(nn.RKF)(nn,ynd,1);local E;E,dhR=(nn.RKF)(nn,ynd,dhR);E=E or \"\";if snZ ~= nil then local gqa=nn.W;local XED,ImJ,kqo,CfK,qqi=gqa.string.byte,{},gqa.table.concat,snZ % 0x10000,gqa.string.char;for MfQ=1,#E do CfK=(CfK * 287 + MfQ * 0x7D30) % 0x10000;ImJ[MfQ]=qqi((XED(E,MfQ) - (CfK % 256)) % 256);end;E=kqo(ImJ);end;local haO;haO,dhR=(nn.Hkys)(nn,ynd,dhR);local Stm;Stm,dhR=(nn.Hkys)(nn,ynd,dhR);if Stm == 0x5869C9C5 then local bbI;bbI,dhR=(nn.RKF)(nn,ynd,dhR);return bhV or \"\",E or \"\",haO or 0,(nn.g)(nn,bbI or \"\",E or \"\");end;local gbN={};for ag4=1,Stm or 0 do local NmX;local UiF;local HrJ;local DlN;NmX,dhR=(nn.Hkys)(nn,ynd,dhR);UiF,dhR=(nn.RKF)(nn,ynd,dhR);HrJ,dhR=(nn.RKF)(nn,ynd,dhR);DlN,dhR=(nn.Hkys)(nn,ynd,dhR);gbN[NmX or ag4]={[0x6FEF]=UiF or \"\",[0x7E17]=HrJ or \"\",[0x4185]=DlN or 0};end;return bhV or \"\",E or \"\",haO or 0,(nn.g)(nn,\"\",E or \"\",gbN);end),[\"KTe\"]=(function(xce,jqn,xqs)local kbS=xce.YG;local FfJ;local qbH;FfJ,xqs=(xce.Hkys)(xce,jqn,xqs);qbH,xqs=(xce.Gu)(xce,jqn,xqs);if FfJ == nil then FfJ=kbS.bxor(0x4E81,889);end;return {[0x721B]=kbS.bxor(FfJ,889),[0x74E7]=(qbH or 51) - 51},xqs;end),[\"QOh\"]=(function(HOW,jbR,zqh)local xAW,OIT,xbD,Rsv=zqh[6],(((zqh[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,jbR[0x6D74],jbR[0x219F];local jSt=xAW[1];do local zbL,ghB=-xbD[OIT],OIT;xbD[ghB]=zbL;local _qr=Rsv and Rsv[ghB];if _qr then _qr[1]=zbL;end;end;end),[\"Uii\"]=(function(ROY,_bU,Eqd)local IxB,pNn,zAY,Dsb=_bU[0x6D74],(((Eqd[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,Eqd[6],_bU[0x219F];local xSa=zAY[1];do local EbC,khG=false,pNn;IxB[khG]=EbC;local Tql=Dsb and Dsb[khG];if Tql then Tql[1]=EbC;end;end;end),[((\"Ek\" .. \"Y\"))]=(function(s,Htf,Rtw)local ymR=bit32;Rtw=Rtw or (_ENV or (getfenv and getfenv()) or _G);local aa,c=Rtw.setmetatable or setmetatable,s.p;if type(c) ~= \"table\" or c[1] ~= 1 or c[2] ~= Rtw then error(\"runtime error\",0);end;local Fhf=Rtw;local Dty,ytQ=\"__\" .. \"index\",\"__\" .. \"metatable\";do local function Mo0(ZEL,SmZ)local RrX=Fhf[ZEL];if type(RrX) ~= \"table\" then return RrX;end;local Rvi={};for pmD=1,#SmZ do local QyU=SmZ[pmD];Rvi[QyU]=RrX[QyU];end;return aa and aa(Rvi,{[Dty]=RrX,[ytQ]=false}) or Rvi;end;local WfX={[\"string\"]=Mo0(\"string\",{\"byte\",\"char\",\"sub\",\"gsub\"}),[\"table\"]=Mo0(\"table\",{\"concat\",\"unpack\",\"find\"}),[\"math\"]=Mo0(\"math\",{\"abs\",\"ceil\",\"floor\",\"fmod\",\"max\",\"min\",\"sqrt\"}),[\"bit32\"]=Mo0(\"bit32\",{\"band\",\"bor\",\"bxor\",\"bnot\",\"lshift\",\"rshift\",\"arshift\",\"lrotate\",\"rrotate\",\"extract\",\"replace\"})};local LlS={\"error\",\"getfenv\",\"getmetatable\",\"load\",\"loadstring\",\"next\",\"pcall\",\"rawget\",\"rawset\",\"select\",\"setfenv\",\"setmetatable\",\"tonumber\",\"tostring\",\"type\",\"unpack\",\"xpcall\",\"_G\"};for JyC=1,#LlS do local Aqu=LlS[JyC];local TbM=Fhf[Aqu];if TbM ~= nil then WfX[Aqu]=TbM;end;end;local Fo1,DrZ,Dvn={},{},0;local og5=aa and aa(Fo1,{[Dty]=(function(zSo,_AP)Dvn=_AP;return DrZ;end),[ytQ]=false}) or Fo1;local zct=og5 == Fo1 and Dvn == 0 and next({}) == nil and rawget({1},1) == 1 and type(type) == \"function\" and tonumber(\"1\") == 1;if zct and aa then zct=Fo1[1] == DrZ and Dvn == 1 and getmetatable(Fo1) == false and rawset(Fo1,1,DrZ) == Fo1 and rawget(Fo1,1) == DrZ;end;if not zct then error(\"\",0);end;if aa then WfX=aa(WfX,{[Dty]=Fhf,[ytQ]=false});end;s.W=WfX;end;s.A=nil;s.nUn={};s.VHXb={};s.vQt={};s.lFB={};s.akj=aa and aa({},{[\"__\" .. \"mode\"]=\"k\"}) or {};local jj={};s.fVBR=aa and aa({},{[\"__\" .. \"index\"]=(function(_Si,YfZ)return jj[YfZ];end),[\"__\" .. \"newindex\"]=(function(ESn,Pf0,Vf1)jj[Pf0]=Vf1;end),[\"__\" .. \"len\"]=(function()return #jj;end),[\"__\" .. \"metatable\"]={}}) or jj;s.qmPH=0;s.wGUL={};s.lIC=s.Ctf;local heJ,TaX=true,s.lFB;if heJ then TaX._G=TaX;s.GB=\"limited\" .. \"stack\";TaX[s.GB]=true;if aa then aa(TaX,{[Dty]=Fhf,[ytQ]={}});end;end;local UlH,ClR=Rtw.getfenv or getfenv,Rtw.setfenv or setfenv;local function Wo2(AbF)if type(AbF) ~= \"number\" then error(\"bad argument #1 to 'getfenv' (number expected)\",3);end;local Lr0=s.fVBR;local ObW=Lr0[#Lr0 - AbF + 1];if not ObW then error(\"invalid stack level\",3);end;return ObW;end;local function pnl(Oqc)local Hm0=s.akj and s.akj[Oqc];if Hm0 then return Hm0(s.wGUL);end;return nil;end;if heJ then TaX.getfenv=(function(woT)if woT == nil then woT=1;end;local Ur1=type(woT);if Ur1 == \"number\" then if woT == 0 then return s.lFB;end;return Wo2(woT)[0x2B7D];elseif Ur1 == \"function\" then local Cr2=pnl(woT);if Cr2 ~= nil then return Cr2;end;if UlH then return UlH(woT);end;end;error(\"invalid argument to getfenv\",2);end);TaX.setfenv=(function(Lsg,CiW)CiW=CiW or s.lFB;local Mr3=type(Lsg);if Mr3 == \"number\" then if Lsg == 0 then s.lFB=CiW;return nil;end;local qhK=Wo2(Lsg);qhK[0x2B7D]=CiW;local raI=qhK[0x2C13];local Rm1=raI and s.akj and s.akj[raI];if Rm1 then Rm1(s.wGUL,CiW);end;return raI;elseif Mr3 == \"function\" then local Dm2=s.akj and s.akj[Lsg];if Dm2 then Dm2(s.wGUL,CiW);return Lsg;end;end;error(\"cannot change environment\",2);end);end;local Usk=Rtw.loadstring or Rtw.load;if heJ and Usk then TaX.loadstring=(function(Iqm,XyM)local _ca,EAV=Usk(Iqm,XyM);if type(_ca) == \"function\" and ClR then ClR(_ca,s.lFB);end;return _ca,EAV;end);TaX.load=TaX.loadstring;end;local Nqf=Rtw.string.byte;local function vnu(Lvs,ig6)if type(Lvs) ~= \"string\" then return 0;end;local Fr4,Wr5=#Lvs,(ig6 or 0x428A) % 0x7FFFFFFF;if Fr4 == 0 then return Wr5;end;local NxG=Fr4 < 12 and Fr4 or 12;for IIA=1,NxG do local Eco=((Wr5 + (IIA * 179)) % Fr4) + 1;local SxK=Nqf(Lvs,Eco) or 0;Wr5=(Wr5 * 109 + SxK * (IIA + 497) + Eco * 619 + 0xB003) % 0x7FFFFFFF;end;return Wr5;end;local yoA=s.vQ;if type(Htf) ~= \"string\" or type(yoA) ~= \"string\" then error(\"runtime error\",0);end;local Tci=tostring(s) .. tostring(Rtw);local Ltp=vnu(Tci,0x428A);local ptJ=vnu(Htf,Ltp + (#Htf * 179));ptJ=(ptJ + vnu(yoA,Ltp + (#yoA * 0xB003))) % 0x7FFFFFFF;local Whw=((Ltp * 455) + (ptJ * 129) + (#Tci * 0x1BF0) + 0x428A) % 0x7FFFFFFF;if Whw == 0 then Whw=0x1BF0;end;if c[3] ~= Whw or c[4] ~= ptJ or c[5] ~= Ltp then error(\"runtime error\",0);end;c[1]=2;s.Zn=Whw;local MiY,Csq=\"rQVhxBT>g9(R[%yd6Ws$XCi!5n}8D|]JG?Io0v73K2/\\\"_~@wMe#uHA*+F=z,Lfc1)^N{UPm`4OlaZ;<kbq&ES.Y:jpt\",{};for NIO=1,#MiY do Csq[Nqf(MiY,NIO)]=NIO - 1;end;s.vk=Csq;local Yr6=ymR or Rtw[\"bit32\"] or ((function()local function eEU(cOg,mOk)local DOP,LOV=0,1;for TSs=1,32 do if cOg % 2 == 1 and mOk % 2 == 1 then DOP=DOP + LOV;end;cOg,mOk,LOV=(cOg - cOg % 2) / 2,(mOk - mOk % 2) / 2,LOV * 2;end;return DOP;end;local function TAB(fOq,wOj)local UOB,COG=0,1;for ASh=1,32 do if fOq % 2 == 1 or wOj % 2 == 1 then UOB=UOB + COG;end;fOq,wOj,COG=(fOq - fOq % 2) / 2,(wOj - wOj % 2) / 2,COG * 2;end;return UOB;end;local function tEC(yOx,pOz)local MOK,FOQ=0,1;for OSr=1,32 do if yOx % 2 ~= pOz % 2 then MOK=MOK + FOQ;end;yOx,pOz,FOQ=(yOx - yOx % 2) / 2,(pOz - pOz % 2) / 2,FOQ * 2;end;return MOK;end;local function Sqw(vNs,SII)if SII >= 32 then return 0;end;return (vNs % 0x100000000) * (2 ^ SII) % 0x100000000;end;local function Hqy(bNh,HIN)if HIN >= 32 then return 0;end;return s.W.math.floor((bNh % 0x100000000) / (2 ^ HIN));end;local function aEM(gNr)return 0xFFFFFFFF - gNr % 0x100000000;end;return {[\"bxor\"]=tEC,[\"band\"]=eEU,[\"bor\"]=TAB,[\"bnot\"]=aEM,[\"lshift\"]=Sqw,[\"rshift\"]=Hqy};end))();s.YG=Yr6;s.Vo=s.Vo or (s.H)(s);s.H=nil;s.Pl=Htf;local Pr7=s.LpQI;if Pr7 then local ng7,Uvh=type(s.vQ) == \"string\" and #s.vQ or 0,type(Htf) == \"string\" and #Htf or 0;Pr7(true,(ng7 * 33 + Uvh * 17 + (c[3] or 0) + (c[4] or 0) + 0xFAA6) % 0x7FFFFFFF);end;if s.vQ ~= nil and not s.jY then s.jY=(s.je)(s,s.vQ,0);end;local FiP,Cvr=Rtw.error or error,(Rtw.table and Rtw.table.unpack) or Rtw.unpack or unpack;local function Gf3(...)return {[\"n\"]=select(\"#\",...),...};end;local Qd2,Lm3=s.jY,false;local function Jrm(kNd,qNl,jNu,oEF)if Lm3 or type(c) ~= \"table\" or c[1] ~= 2 then error(\"\",0);end;Lm3=true;c[1]=3;local IbY=s.LpQI;if IbY then IbY(false,kNd,qNl,jNu,((oEF or 0) + (c[3] or 0) + (c[4] or 0)) % 0x7FFFFFFF);end;s.hdi=nil;end;local sg8={[0x1784]=(function()local HxQ=s.hdi;s.hdi=nil;return HxQ;end),[0x6CA6]=(function(xNc,zNm,_Nf,iEW)Jrm(xNc,zNm,_Nf,iEW);return Gf3((s.zG)(s,Htf,Rtw));end),[0x3BAA]=(function(ENw,TNy,ANp,nEY,wut,ZyF)Jrm(ENw,TNy,ANp,nEY);return Gf3((s.OlGM)(s,wut,ZyF));end),[0x7EAD]=(function(ONv,INb,NNg,sEP)Jrm(ONv,INb,NNg,sEP);return Gf3((s.w)(s,Htf,0));end)};local Jd3=Rtw.pcall or pcall;if type(Jd3) ~= \"function\" then Jd3=pcall;end;local eyW,WW=Jd3((function()return (s.wihR)(s,Qd2,Gf3(s,Htf,Rtw,false,Yr6,sg8));end));s.hdi=nil;local Yo3=type(c) == \"table\" and c[1] == 3;if Yo3 then c[1]=4;end;local bnc=s.fVBR;if bnc then for SNk=1,#bnc do bnc[SNk]=nil;end;end;s.Pl=nil;s.RwA=nil;s.r=nil;s.qmPH=nil;s.hdi=nil;s.vQ=nil;s.jY=nil;s.LpQI=nil;if type(c) == \"table\" then c[2]=nil;c[4]=nil;c[5]=nil;end;s.TNt=nil;s.OlGM=nil;s.CLcz=nil;s.lK=nil;s.Ye=nil;if not eyW or type(WW) ~= \"table\" then if false then FiP(\"dbg-ctrl: \" .. tostring(WW),0);end;FiP(\"runtime error\",0);end;if WW[1] ~= true then local XeF=WW[2];if type(XeF) ~= \"string\" or XeF == \"\" then XeF=\"runtime error\";end;FiP(XeF,0);end;if not Yo3 then FiP(\"runtime error\",0);end;local Acn=WW[2];if type(Acn) ~= \"table\" then FiP(\"runtime error\",0);end;return Cvr(Acn,1,Acn.n or 0);end),[\"VIp\"]=(function(hEV,Mvd)local Rqp,vO_,Vr8,poO=Mvd[6],hEV.YG,0,nil;local function __(rEB)if type(rEB) == \"table\" then local RIS=rEB[0x721B];if RIS == 0x713 or RIS == 0xFCA then Vr8=Vr8 + 1;if Vr8 <= 96 then if poO == nil then poO={};end;poO[Vr8 + 2]=rEB[0x74E7] or 0;end;end;end;end;if Rqp ~= nil then __(Rqp[2]);__(Rqp[1]);end;local miy=Mvd[1];if type(miy) == \"table\" then for HNq=1,#miy do local NbP=miy[HNq];if type(NbP) == \"table\" then local Xrf=NbP[6];if Xrf ~= nil then __(Xrf[2]);__(Xrf[1]);end;end;end;end;local gnm=Mvd[3];if type(gnm) == \"table\" then for RNj=1,#gnm do __(gnm[RNj]);end;end;if poO == nil then return nil;end;poO[1]=0;poO[2]=Vr8;return poO;end),[\"mrX\"]=(function(voI,Dqv)local AAG=voI.W;local stC,tyY,OAK=(voI.CpG)(voI,Dqv),\"bvVMC1TVQ4xjbr\",AAG.string.sub;local Msj=#tyY;if #stC <= Msj or OAK(stC,1,Msj) ~= tyY then return stC;end;local Lqb=Msj + 1;local reX;local AaZ;reX,Lqb=(voI.RKF)(voI,stC,Lqb);AaZ,Lqb=(voI.RKF)(voI,stC,Lqb);if not reX or not AaZ or AaZ == \"\" or Lqb ~= (#stC + 1) then return stC;end;return (voI.CpG)(voI,(voI.FLN)(voI,reX,AaZ));end),[\"zz\"]=(function(WOJ,Uqg)return Uqg[0x721B] or 0x4E81;end),[\"nI\"]=(function(Fvl,Yhy,Cqk)local Mqq,cAO=Fvl.x,Yhy[0x58A1];local knf,Php,Ocs=(((Cqk[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,Yhy[0x58A1],(((((Cqk[6] or {})[1] or {})))[0x74E7] or 0);local SbV=Php.n or #Php;if Ocs < 0 then for DIH=1,SbV do Mqq(Fvl,Yhy,knf + DIH - 1,Php[DIH]);end;Yhy[0x59C3]=knf + SbV - 1;else for LIR=1,Ocs do Mqq(Fvl,Yhy,knf + LIR - 1,Php[LIR]);end;Yhy[0x59C3]=knf + Ocs - 1;end;end),[\"aD\"]=(function(Xd4,fip,Fsx)if fip == nil or fip == \"\" then return {};end;local IAQ=Xd4.W;local HbB,Ich,Ncr,Fqj,FzB,dEG,MlD=Xd4.YG,1,#Fsx,1,{},IAQ.string.byte,(Xd4.FLN)(Xd4,fip,Fsx);while Fqj <= #MlD do local Utv;Utv,Fqj=(Xd4.Hkys)(Xd4,MlD,Fqj);if Utv == nil then break;end;local hg9=dEG(Fsx,((Ich - 1) % Ncr) + 1);local vmL=HbB.bxor((Ich * 749) + 0x542D,hg9);FzB[Ich]=HbB.bxor(Utv,vmL);Ich=Ich + 1;end;return FzB;end),[\"roTb\"]=(function(Wqx,Br9,Zd5)local Zrw,ery,zuu,Neq=(((((Zd5[6] or {})[2] or {})))[0x74E7] or 0),(((Zd5[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,Br9[0x6D74],Zd5[3];if type(Neq) == \"table\" then Neq=Neq[0x74E7] or (Zrw + 1);Zd5[3]=Neq;elseif type(Neq) ~= \"number\" then Neq=(Wqx.Gu)(Wqx,Neq or \"\",1) or (Zrw + 1);Zd5[3]=Neq;end;local Wvu=zuu[Neq];local Po4=zuu[ery] + Wvu;zuu[ery]=Po4;local Wsz=Br9[0x219F];local Yqz=Wsz and Wsz[ery];if Yqz then Yqz[1]=Po4;end;local RbG=zuu[Zrw];if (Wvu > 0 and Po4 <= RbG) or (Wvu < 0 and Po4 >= RbG) then do local Kf4=(((((Zd5[6] or {})[1] or {})))[0x74E7] or 0);local ayP=(Br9[0x41DB] or 0x3F8314) - (Br9[0x58A9] or 0x73361);Br9[0x65D2]=ayP + Kf4;end;end;end),[\"hXXQ\"]=(function(YOX,Pq_)return Pq_[0x74E7] or 0;end),[\"cnKM\"]=(function(POZ,VqE)return VqE[3] or {};end),[\"AyDD\"]=(function(VO0,DbK,BqT)local DNx,NAJ,Ys_,RxJ=(((BqT[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,BqT[6],DbK[0x219F],DbK[0x6D74];local ISd=NAJ[1];do local jhQ,LbQ=DNx,{};RxJ[jhQ]=LbQ;local GqA=Ys_ and Ys_[jhQ];if GqA then GqA[1]=LbQ;end;end;end),[\"e\"]=(function(daN,qnw,ed6)local lEK,Scd=daN.iPl,daN.x;local KqO,WzG=lEK(daN,qnw,(((ed6[6] or {})[1] or {}))),qnw[0x2B7D];local Qf5=WzG[KqO];if Qf5 == daN.nUn then Scd(daN,qnw,(((ed6[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,nil);elseif Qf5 ~= nil then Scd(daN,qnw,(((ed6[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,Qf5);elseif KqO == daN.GB then Scd(daN,qnw,(((ed6[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,true);elseif WzG ~= daN.lFB then Scd(daN,qnw,(((ed6[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,nil);else Scd(daN,qnw,(((ed6[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,daN.W[KqO]);end;end),[\"u\"]=(function(PsE,Yvc,FlL)local oyV=PsE.W;local paM,NN,Pvm,QqI,Gde,Hcl,boN,Uar,td7,uEQ,Jf6,JqN,Um4,ad8,rke=true,{},oyV.rawset or rawset,oyV.table.concat,PsE.YG,1,#FlL,{},{},oyV.string.char,1,oyV.string.byte,#Yvc,{},oyV.setmetatable or setmetatable;if boN == 0 then return {};end;while Hcl <= Um4 do local jto;jto,Hcl=(PsE.Hkys)(PsE,Yvc,Hcl);if jto == nil or jto < 0 or Hcl + jto - 1 > Um4 then break;end;ad8[Jf6]=Hcl;td7[Jf6]=jto;Hcl=Hcl + jto;Jf6=Jf6 + 1;end;local Rcu={};local function lhD(VsT,wiv)local Dcc=PsE.Vo;if not Dcc or type(VsT) ~= \"table\" or VsT[2] ~= nil then return;end;local iyB=VsT[8];if iyB == nil then return;end;local Xf7=(((wiv + 0x5EF6) * 0x7E3) + 0x1D8A) % 0x1FFFF;local Lcm,Ucf=Gde.bxor(iyB,0x1D8A) - Xf7,(((wiv + 0x5FAB) * 343) + 0x785) % 0xFFFF;local Ccw=Lcm - Ucf;local Ctb=(((Gde.bxor(Ccw,0x4B5) * 173) + 0x1FAED) % 0x1FFFF);Ctb=((Ctb * 0xA4A7) + 0xB39D3) % 0x1C8F1;local WiV=Dcc[Ctb];if WiV then local hn0=PsE.LpQI;if hn0 then WiV=hn0(VsT,wiv,Ctb,WiV) or WiV;end;VsT[2]=WiV;end;end;local function Mtg(Cad)return {[8]=Cad[8],[4]=Cad[4],[6]=Cad[6],[3]=Cad[3],[1]=Cad[1],[0x2B07]=Cad[0x2B07],[2]=Cad[2],[0x45F8]=Cad[0x45F8],[0x6C01]=1};end;return rke(Rcu,{[\"__\" .. \"index\"]=(function(DxX,m)local ntU=NN[m];if ntU then return ntU;end;local vaF=Uar[m];if vaF then local Kdt=Mtg(vaF);NN[m]=Kdt;return Kdt;end;local WlU,YlC=ad8[m],td7[m];if not WlU or not YlC then return nil;end;local jny,Cm5,Zf8,dkt,Mcy=((m * 0x3F7) + 0x6B2B) % 256,{},WlU - 1,m - 2 + (((m * 887) + 0x461B) % boN),(((m + 31) % 4) * 2) + 17;local trp=(m * 29) + 0x6682 + jny;for lka=1,YlC do local LNz,XqS=JqN(Yvc,Zf8 + lka),((dkt + lka) % boN) + 1;local ZqH,UN_=(((m + 0x43E7) * 419) + lka) % 3,JqN(FlL,XqS);local ef9;if ZqH == 0 then ef9=(trp + (lka * Mcy) + ((lka % 3) * jny)) % 256;elseif ZqH == 1 then ef9=(trp + (lka * (Mcy + 2)) + ((lka % 5) * jny) + ((lka * lka + m) % 251)) % 256;else ef9=(trp + (lka * (Mcy + 4)) + Gde.bxor((lka * jny) % 256,(m + lka) % 256)) % 256;end;Cm5[lka]=uEQ(Gde.bxor(Gde.bxor(LNz,ef9),UN_));end;local goS=(PsE.i)(PsE,QqI(Cm5),m);lhD(goS,m);local YiB=type(goS) == \"table\" and goS[0x6C01] ~= nil;if paM and YiB then Uar[m]=goS;local Qda=Mtg(goS);NN[m]=Qda;return Qda;elseif paM then Pvm(DxX,m,goS);ad8[m]=nil;td7[m]=nil;end;return goS;end),[\"__\" .. \"metatable\"]={}});end),[\"rO\"]=(function(koH,FeI,Fcp)local SS=type(FeI);if koH.A == nil and koH.RwA ~= nil then (koH.Ye)(koH,Fcp or (SS == \"table\" and FeI) or nil);end;if SS == \"table\" and Fcp == nil then Fcp=FeI;if koH.A == nil and koH.RwA ~= nil then (koH.Ye)(koH,Fcp);end;FeI=koH.A;koH.A=nil;SS=type(FeI);end;if SS == \"function\" then local Xdi=FeI;FeI=Xdi(koH,Fcp);SS=type(FeI);end;if (SS ~= \"string\" and SS ~= \"table\") or FeI == \"\" then return nil,Fcp;end;return FeI,Fcp;end),[\"bVZt\"]=(function(w,ZZ,BsA)local twe,YzK,CNE,GsO=ZZ[0x6D74],BsA[6],(((BsA[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,ZZ[0x219F];local MNT,FNA=YzK[1],YzK[2];local S;do local Kor=MNT;local Y,awt=Kor[0x74E7] or 0,Kor[0x721B] or 0x4E81;if awt == 0x990 then S=Y;elseif awt == 0xFCA then local meo=ZZ[0x6B9A];if meo == nil then meo={};ZZ[0x6B9A]=meo;end;local Mal=meo[Kor];if Mal == nil then w.y=w.YG.bxor(((Y + 0x892) * 189 + (w.qmPH or 0) + (w.Zn or 0) + ((w.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);w.F=((Y + ((((BsA[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD) + (w.qmPH or 0)) % 4);Mal=ZZ[0x14B2][Y];w.y=nil;meo[Kor]=Mal == nil and w.nUn or Mal;if Mal == w.nUn then S=nil;else S=Mal;end;elseif Mal == w.nUn then S=nil;else S=Mal;end;elseif awt == 0x713 then local fei=ZZ[0x6B9A];if fei == nil then fei={};ZZ[0x6B9A]=fei;end;local Fau=fei[Kor];if Fau == nil then w.y=w.YG.bxor(((Y + 0x892) * 189 + (w.qmPH or 0) + (w.Zn or 0) + ((w.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);w.F=((Y + ((((BsA[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD) + (w.qmPH or 0)) % 4);Fau=ZZ[0x14B2][Y];w.y=nil;fei[Kor]=Fau == nil and w.nUn or Fau;if Fau == w.nUn then S=nil;else S=Fau;end;elseif Fau == w.nUn then S=nil;else S=Fau;end;elseif awt == 0x6514 then S=twe[Y];else S=nil;end;end;local j;do local Qod=FNA;local P,iwo=Qod[0x74E7] or 0,Qod[0x721B] or 0x4E81;if iwo == 0x990 then j=P;elseif iwo == 0xFCA then local wen=ZZ[0x6B9A];if wen == nil then wen={};ZZ[0x6B9A]=wen;end;local Wac=wen[Qod];if Wac == nil then w.y=w.YG.bxor(((P + 0x892) * 189 + (w.qmPH or 0) + (w.Zn or 0) + ((w.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);w.F=((P + ((((BsA[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD) + (w.qmPH or 0)) % 4);Wac=ZZ[0x14B2][P];w.y=nil;wen[Qod]=Wac == nil and w.nUn or Wac;if Wac == w.nUn then j=nil;else j=Wac;end;elseif Wac == w.nUn then j=nil;else j=Wac;end;elseif iwo == 0x713 then local yes=ZZ[0x6B9A];if yes == nil then yes={};ZZ[0x6B9A]=yes;end;local Yam=yes[Qod];if Yam == nil then w.y=w.YG.bxor(((P + 0x892) * 189 + (w.qmPH or 0) + (w.Zn or 0) + ((w.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);w.F=((P + ((((BsA[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD) + (w.qmPH or 0)) % 4);Yam=ZZ[0x14B2][P];w.y=nil;yes[Qod]=Yam == nil and w.nUn or Yam;if Yam == w.nUn then j=nil;else j=Yam;end;elseif Yam == w.nUn then j=nil;else j=Yam;end;elseif iwo == 0x6514 then j=twe[P];else j=nil;end;end;local PiG=BsA[3];if type(PiG) ~= \"number\" then local LxZ=(w.Hkys)(w,PiG or \"\",1) or 0;PiG=w.YG.bxor(LxZ,0x4B85);BsA[3]=PiG;end;local L;if PiG == 0x236A then L=S ~= j;elseif PiG == 0x4793 then L=S > j;elseif PiG == 0x3735 then L=S >= j;elseif PiG == 0x14DD then L=S < j;elseif PiG == 0x78FC then L=S <= j;elseif PiG == 0x4064 then L=S + j;elseif PiG == 0x5861 then L=S - j;elseif PiG == 0x5CA4 then L=S * j;elseif PiG == 0x2526 then L=S / j;elseif PiG == 0x323E then local PlM,Wcv=type(j),type(S);if (Wcv == \"number\" or Wcv == \"string\") and (PlM == \"number\" or PlM == \"string\") then L=math.floor(S / j);else local Ycb=getmetatable(S);local Zdn=type(Ycb) == \"table\" and rawget(Ycb,\"__idiv\") or nil;if Zdn == nil then local VlF=getmetatable(j);Zdn=type(VlF) == \"table\" and rawget(VlF,\"__idiv\") or nil;end;if Zdn ~= nil then L=Zdn(S,j);else L=math.floor(S / j);end;end;elseif PiG == 0xF92 then L=S % j;elseif PiG == 0x6802 then L=S ^ j;elseif PiG == 0x61EB then L=S .. j;elseif PiG == 0xB6D then L=S and j;elseif PiG == 0x55AC then L=S or j;elseif PiG == 0x224B then L=S == j;end;do local xhJ,UbJ=CNE,L;twe[xhJ]=UbJ;local tqD=GsO and GsO[xhJ];if tqD then tqD[1]=UbJ;end;end;end),[\"T\"]=(function(Pcg,eds,Vck)local cEJ=Pcg.iPl;local bmU=Vck[3];if type(bmU) ~= \"number\" then local Ux0=(Pcg.Hkys)(Pcg,bmU or \"\",1) or 0;bmU=Pcg.YG.bxor(Ux0,0x4B85);Vck[3]=bmU;end;local od9=eds[0x6D74][(((Vck[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD];local Vhv=cEJ(Pcg,eds,(((Vck[6] or {})[2] or {})));local HH;if bmU == 0x236A then HH=od9 == Vhv;elseif bmU == 0x4793 then HH=not (od9 > Vhv);elseif bmU == 0x3735 then HH=not (od9 >= Vhv);elseif bmU == 0x14DD then HH=not (od9 < Vhv);elseif bmU == 0x78FC then HH=not (od9 <= Vhv);elseif bmU == 0x224B then HH=od9 ~= Vhv;else error(\"runtime error\",0);end;if HH then do local nwi=(((((Vck[6] or {})[1] or {})))[0x74E7] or 0);local nyG=(eds[0x41DB] or 0x3F8314) - (eds[0x58A9] or 0x73361);eds[0x65D2]=nyG + nwi;end;end;end),[\"MDqx\"]=(function(Ftk,Vo5,mEX)local aqL,oqU,iqC,fEZ,nqM=Ftk.f,Ftk.bESq,Ftk.x,Ftk.DFQ,Ftk.iPl;local wE0=fEZ(Ftk,mEX);if wE0[2] == nil then return;end;local yE1=Vo5[0x65D2] - 1;do local SAX=wE0[1];Vo5[0x65D2]=yE1 + 1;iqC(Ftk,Vo5,oqU(Ftk,SAX),nqM(Ftk,Vo5,aqL(Ftk,SAX)));end;do local HAZ=wE0[2];Vo5[0x65D2]=yE1 + 2;iqC(Ftk,Vo5,oqU(Ftk,HAZ),nqM(Ftk,Vo5,aqL(Ftk,HAZ)));end;Vo5[0x65D2]=yE1 + 2;end),[\"CpG\"]=(function(sqF,swn)if swn == nil or swn == \"\" then return \"\";end;local hqW=sqF.W;local pE2,Cx1,yua,hws,syK=hqW.string.byte,hqW.math.floor,sqF.vk,91,hqW.string.char;local PzQ,cxE,qoR,tdh,vtX=0,0,0,{},-1;for Mx2=1,#swn do local Vvf=yua[pE2(swn,Mx2)];if Vvf ~= nil then if vtX < 0 then vtX=Vvf;else vtX=vtX + Vvf * hws;if (vtX % 0x2000) > 88 then PzQ=PzQ + vtX * (2 ^ cxE);cxE=cxE + 13;else PzQ=PzQ + vtX * (2 ^ cxE);cxE=cxE + 14;end;while cxE >= 8 do qoR=qoR + 1;tdh[qoR]=syK(PzQ % 256);PzQ=Cx1(PzQ / 256);cxE=cxE - 8;end;vtX=-1;end;end;end;if vtX >= 0 then qoR=qoR + 1;tdh[qoR]=syK((PzQ + vtX * (2 ^ cxE)) % 256);end;local adr=qoR;while adr > 1 do local Ghg=0;for rwh=1,adr,2 do Ghg=Ghg + 1;if rwh < adr then tdh[Ghg]=tdh[rwh] .. tdh[rwh + 1];else tdh[Ghg]=tdh[rwh];end;end;for Fx3=Ghg + 1,adr do tdh[Fx3]=nil;end;adr=Ghg;end;return tdh[1] or \"\";end),[\"bC\"]=(function(Bvw,QsN,BB)if QsN == nil or QsN == \"\" then return QsN or \"\";end;local rqY=Bvw.W;local dqP,vE3,lqV=rqY.table.concat,rqY.string.char,rqY.string.byte;local CbX,WeN,gmC={},0,1;while gmC <= #QsN do local MbZ=lqV(QsN,gmC);if not MbZ then break;end;gmC=gmC + 1;if MbZ < 128 then local znv=MbZ + 1;if gmC + znv - 1 > #QsN then return nil;end;for WNO=0,znv - 1 do WeN=WeN + 1;CbX[WeN]=vE3(lqV(QsN,gmC + WNO));end;gmC=gmC + znv;else local Gvy=(MbZ - 128) + 3;local pig;pig,gmC=(Bvw.Hkys)(Bvw,QsN,gmC);if pig == nil then return nil;end;local Bcq=pig + 1;if Bcq <= 0 or Bcq > WeN then return nil;end;local ile=WeN - Bcq + 1;for NSl=1,Gvy do local Fb0=CbX[ile];if Fb0 == nil then return nil;end;WeN=WeN + 1;CbX[WeN]=Fb0;ile=ile + 1;end;end;if BB and BB ~= 0 and WeN > BB then return nil;end;end;if BB and BB ~= 0 and WeN ~= BB then return nil;end;return dqP(CbX);end),[\"Wi\"]=(function(deZ,_nb,bE4)local gE5,uqB,cqG,mqK,kE6,qE7=deZ.iPl,deZ.f,deZ.bESq,deZ.x,deZ.hXXQ,deZ.DFQ;local jE8=qE7(deZ,bE4);if jE8[2] == nil then return;end;local xE9=_nb[0x65D2] - 1;do local RA0=jE8[1];_nb[0x65D2]=xE9 + 1;mqK(deZ,_nb,cqG(deZ,RA0),gE5(deZ,_nb,uqB(deZ,RA0)));end;do local DA1=jE8[2];_nb[0x65D2]=xE9 + 2;mqK(deZ,_nb,cqG(deZ,DA1),kE6(deZ,uqB(deZ,DA1)));end;_nb[0x65D2]=xE9 + 2;end),[\"TA\"]=(function(Eng,Gcj,Tnk,puo)if not Eng.r then return;end;Gcj=(Eng.MW)(Eng,Gcj);local JsS,vui,bun,odd=(Eng.k)(Eng,Gcj,puo);local vik=(Eng.uYXj)(Eng,JsS,vui,bun);if Tnk and Tnk ~= 0 then (Eng.xC)(Eng,vik[0x2A30],vik[0x1BA3],Tnk);end;return {vik,odd or {}};end),[\"Lr\"]=(function(dwr,lwd,fqQ)local zTe=dwr.iPl;local wqJ,Wb1,Yb2=zTe(dwr,lwd,(((fqQ[6] or {})[1] or {}))),lwd[0x6D74][(((fqQ[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD],lwd[0x2B7D];if Wb1 == nil then if Yb2 == dwr.lFB then Yb2[wqJ]=dwr.nUn;else Yb2[wqJ]=nil;end;else Yb2[wqJ]=Wb1;end;end),[\"OZZy\"]=(function(UeT,Anq,nlt)local uwl,Onj,_Tt=UeT.pd,(UeT.W.table and UeT.W.table.unpack) or UeT.W.unpack,UeT.oj;if not Onj then Onj=(function(Kcx,idl,cwu)idl=idl or 1;cwu=cwu or #Kcx;if idl > cwu then return;end;return Kcx[idl],Onj(Kcx,idl + 1,cwu);end);end;local joD,A,ndu,Qcz=nlt[0x24A2],nlt[3],(((nlt[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,(((((nlt[6] or {})[1] or {})))[0x74E7] or 0);if type(A) ~= \"number\" then local Khk,Jc_=1,A or \"\";A,Khk=(UeT.Gu)(UeT,Jc_,Khk);A=A or -1;local gt0;gt0,Khk=(UeT.Hkys)(UeT,Jc_,Khk);if type(gt0) == \"number\" and gt0 > 0 then joD=gt0;end;nlt[3]=A;nlt[0x24A2]=joD;end;local mwc=uwl(UeT,Anq,ndu);if mwc == nil then local sla=\"attempt to call a nil value\";if type(joD) == \"number\" and joD > 0 then sla=\"script:\" .. tostring(joD) .. \": \" .. sla;end;error(sla,0);end;local XcE,B={},0;if Qcz < 0 then if A < 0 then A=0;end;for YNI=1,A do B=B + 1;XcE[B]=uwl(UeT,Anq,ndu + YNI);end;local Kvp=Anq[0x59C3] or (ndu + A);for ETa=ndu + A + 1,Kvp do B=B + 1;XcE[B]=uwl(UeT,Anq,ETa);end;else for PNN=1,Qcz do B=B + 1;XcE[B]=uwl(UeT,Anq,ndu + PNN);end;end;local hyQ=UeT.akj and UeT.akj[mwc];if hyQ then Anq[0x40D7]={mwc,XcE,[\"n\"]=B};return;end;local function uko(...)local Pb3=select(\"#\",...);local VzJ={[\"n\"]=Pb3};for UID=1,Pb3 do VzJ[UID]=select(UID,...);end;return VzJ;end;local Mm6=uko(mwc(Onj(XcE,1,B)));_Tt(UeT,Anq,Mm6,Mm6.n);end),[\"ti\"]=(function(ZcT,Wx4,TTo)local ATi=ZcT.x;local ecA,BiQ,fwm=ZcT.YG,ZcT.hdi,ZcT.W.string.byte;local OTn,ITs,NTh,STr=0,0,0,0;if type(BiQ) == \"string\" then OTn=fwm(BiQ,1) or 0;ITs=fwm(BiQ,2) or 0;NTh=fwm(BiQ,3) or 0;STr=fwm(BiQ,4) or 0;end;local Qvv,wwf=(OTn * 851 + ITs * 257 + 0x1164) % 0x10000,(NTh * 369 + STr * 131 + 0x5DCB) % 0x10000;local Vb4=ecA.bxor(Qvv,wwf);local Yx5=(OTn * 17 + ITs * 29 + NTh * 43 + STr * 59 + 0x7308) % 0x10000;local Px6=(Vb4 * 839 - Qvv + wwf + Yx5 + 743) % 0x10000;local Vx7=ecA.bxor((Vb4 + Px6 + 0x1EB0) % 0x10000,(Qvv + wwf) % 0x10000);local tcO=Vx7;ATi(ZcT,Wx4,(((TTo[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,tcO);end),[\"IW\"]=(function(Wtq,Qhq,le0)local Xvg,HTd,RTl=Wtq.Vo or (Wtq.H)(Wtq),Wtq.W.table.concat,Wtq.i;local Oa0=le0[3];if type(Oa0) ~= \"string\" or Oa0 == \"\" then return;end;local Bb5=Wtq.W;local Zvk,yqX,yww,evq,DTu=Bb5.table.concat,Bb5.string.char,Wtq.YG,(Qhq[0x41DB] or 0x3F8314) - (Qhq[0x58A9] or 0x73361),Bb5.string.byte;local Inx=(Qhq[0x65D2] or 1) - evq - 1;if Inx < 1 then return;end;local Bx8,ZsR,vwp=Bb5.math.floor,#Oa0,{};local avx,Ia1=(Inx * 41) + (ZsR * 7),(((Inx + 0x7EE2 + 29) * 761) + 0x66FD + 0x4AD3 + (ZsR * 17)) % 0x10000;for _uc=1,ZsR do local Fm7,BlW=DTu(Oa0,_uc),Bx8(Ia1 / 128);local LTc=(Ia1 + (_uc * 53) + avx + BlW) % 256;vwp[_uc]=yqX(yww.bxor(Fm7,LTc));Ia1=(Ia1 + (Fm7 * 31) + (_uc * 17) + (Inx * 3) + BlW) % 0x10000;end;if vwp[1] == nil then return;end;local ss=RTl(Wtq,Zvk(vwp),Inx);if type(ss) ~= \"table\" then return;end;le0[8]=ss[8];le0[4]=ss[4];le0[6]=ss[6];le0[3]=ss[3];le0[1]=ss[1];le0[0x2B07]=ss[0x2B07];if le0[0x2B07] then (Wtq.EXQa)(Wtq,Qhq,le0,Inx);end;(Wtq.AsYF)(Wtq,Qhq,le0);le0[2]=nil;local ryJ=le0[8];if ryJ == nil then return;end;local bwv=(((Inx + 0x5EF6) * 0x7E3) + 0x1D8A) % 0x1FFFF;local acI,ocN=(((Inx + 0x5FAB) * 343) + 0x785) % 0xFFFF,yww.bxor(ryJ,0x1D8A) - bwv;local icS=ocN - acI;local Ytj=(((yww.bxor(icS,0x4B5) * 173) + 0x1FAED) % 0x1FFFF);Ytj=((Ytj * 0xA4A7) + 0xB39D3) % 0x1C8F1;local Jol=Xvg[Ytj];if Jol then local rn1=Wtq.LpQI;if rn1 then Jol=rn1(le0,Inx,Ytj,Jol) or Jol;end;le0[2]=Jol;return (Jol)(Wtq,Qhq,le0);end;end),[\"DFQ\"]=(function(BO1,pqZ)return pqZ[1] or {};end),[\"Ctf\"]=(function(EE,uu,esD)local hlo,ovz,iv_,_hZ,xoL,Gb6=EE.W.error or error,EE.W.xpcall or xpcall,EE.Vo,EE.p,(EE.W.table and EE.W.table.unpack) or EE.W.unpack,EE.YG;local biq=type(_hZ) == \"table\" and _hZ[1] or 0;if biq ~= 2 and biq ~= 3 and not (biq == 4 and type(uu) == \"table\" and uu[0x2C13] ~= nil) then hlo(\"\",0);end;if not xoL then xoL=(function(ncH,sdc,gwb)sdc=sdc or 1;gwb=gwb or #ncH;if sdc > gwb then return;end;return ncH[sdc],xoL(ncH,sdc + 1,gwb);end);end;local Na2=EE.fVBR;local t1=#Na2 + 1;if t1 > 747 then local cki=EE.W.error or error;cki(\"stack overflow\",2);end;local Paf=EE.qmPH;local function kmM(LA2)return LA2;end;local mkn,nvE,GlY,dyX,Vaw,lyZ=0x2B07,8,2,0x40D7,0x65D2,0x1DD7;local Nnz,uhL=EE.AsYF,EE.EXQa;Na2[t1]=uu;local function rdf(y)if type(y) ~= \"table\" then return;end;y[0x6D74]=nil;y[0x108C]=nil;y[0x14B2]=nil;y[Vaw]=nil;y[0x41DB]=nil;y[0x58A9]=nil;y[0x59C3]=nil;y[0x58A1]=nil;y[0x2B7D]=nil;y[0x2A4A]=nil;y[0x1DD7]=nil;y[0x40D7]=nil;y[0x2C13]=nil;y[0x4B8F]=nil;y[0x6B9A]=nil;end;local function dn2(GG)local tsL,uy0=GG[0x41DB],GG[0x58A9];if tsL == nil or uy0 == nil then tsL=0x3F8314;uy0=0x73361;GG[0x41DB]=tsL;GG[0x58A9]=uy0;GG[Vaw]=(GG[Vaw] or 1) + (tsL - uy0) - 1;end;return tsL - uy0;end;local QlV,asU=dn2(uu),0;local function UTm(...)return {[\"n\"]=select(\"#\",...),...};end;local function rli(gij,svT)local kwg=(((svT + 0x5EF6) * 0x7E3) + 0x1D8A) % 0x1FFFF;local scR,hcD=(((svT + 0x5FAB) * 343) + 0x785) % 0xFFFF,Gb6.bxor(gij[nvE] or 0,0x1D8A) - kwg;local rcL=hcD - scR;local Ptx=(((Gb6.bxor(rcL,0x4B5) * 173) + 0x1FAED) % 0x1FFFF);Ptx=((Ptx * 0xA4A7) + 0xB39D3) % 0x1C8F1;local Xou=iv_[Ptx];if Xou then local ln3=EE.LpQI;if ln3 then Xou=ln3(gij,svT,Ptx,Xou) or Xou;end;gij[GlY]=Xou;end;return Xou;end;local function fks()while true do local Ym9=uu[Vaw];local kix=Ym9 - QlV;local z=esD[kix];if not z then return;end;uu[Vaw]=Ym9 + 1;if z[mkn] then uhL(EE,uu,z,kix);Nnz(EE,uu,z);end;local Jhj=z[GlY];if not Jhj then Jhj=rli(z,kix);end;if not Jhj then return;end;Jhj(EE,uu,z);local Sa3=uu[dyX];if Sa3 then asU=asU + 1;if asU > 0x4617 then hlo(\"stack overflow\",2);end;local gus=uu;uu[dyX]=nil;local Pfe=EE.akj and EE.akj[Sa3[1]];if Pfe then uu,esD=Pfe(Sa3[2] or {},Sa3.n or 0);QlV=dn2(uu);Na2[t1]=uu;rdf(gus);end;else local Sn_=uu[lyZ];if Sn_ then uu[lyZ]=nil;return xoL(Sn_,1,Sn_.n or 0);end;end;end;end;local KO3,dcU=ovz((function()return UTm(fks());end),kmM);rdf(uu);Na2[t1]=nil;EE.qmPH=Paf;if not KO3 then hlo(dcU,0);end;return xoL(dcU,1,dcU.n or 0);end),[\"Ok\"]=(function(QO4,lcC)return lcC;end),[\"uh\"]=(function(Vtz,Xhx,ue1)local hvA,CTf,MTw=Vtz.Vo or (Vtz.H)(Vtz),Vtz.W.table.concat,Vtz.i;local Ha4=ue1[3];if type(Ha4) ~= \"string\" or Ha4 == \"\" then return;end;local vq0=Vtz.W;local bq1,FTy,rvO,dvI,qwk=vq0.string.char,vq0.string.byte,(Xhx[0x41DB] or 0x3F8314) - (Xhx[0x58A9] or 0x73361),vq0.table.concat,Vtz.YG;local HnE=(Xhx[0x65D2] or 1) - rvO - 1;if HnE < 1 then return;end;local RnT,cy1,jwq,lvN=(((HnE + 0x7EE2) * 761) + 0x66FD + 0x4AD3) % 0x10000,#Ha4,{},HnE * 13;for Eum=1,cy1 do local WTp,Vft=(RnT + (Eum * 29) + lvN) % 256,FTy(Ha4,Eum);jwq[Eum]=bq1(qwk.bxor(Vft,WTp));RnT=(RnT + (Vft * 17) + (Eum * 11) + HnE) % 0x10000;end;if jwq[1] == nil then return;end;local hh=MTw(Vtz,dvI(jwq),HnE);if type(hh) ~= \"table\" then return;end;ue1[8]=hh[8];ue1[4]=hh[4];ue1[6]=hh[6];ue1[3]=hh[3];ue1[1]=hh[1];ue1[0x2B07]=hh[0x2B07];if ue1[0x2B07] then (Vtz.EXQa)(Vtz,Xhx,ue1,HnE);end;(Vtz.AsYF)(Vtz,Xhx,ue1);ue1[2]=nil;local my2=ue1[8];if my2 == nil then return;end;local xwj=(((HnE + 0x5EF6) * 0x7E3) + 0x1D8A) % 0x1FFFF;local ucM,ccF=qwk.bxor(my2,0x1D8A) - xwj,(((HnE + 0x5FAB) * 343) + 0x785) % 0xFFFF;local mcW=ucM - ccF;local Bt_=(((qwk.bxor(mcW,0x4B5) * 173) + 0x1FAED) % 0x1FFFF);Bt_=((Bt_ * 0xA4A7) + 0xB39D3) % 0x1C8F1;local Zoc=hvA[Bt_];if Zoc then local un4=Vtz.LpQI;if un4 then Zoc=un4(ue1,HnE,Bt_,Zoc) or Zoc;end;ue1[2]=Zoc;return (Zoc)(Vtz,Xhx,ue1);end;end),[\"x\"]=(function(JO5,Qb8,osC,Jb9)Qb8[0x6D74][osC]=Jb9;local isM=Qb8[0x219F];local gq2=isM and isM[osC];if gq2 then gq2[1]=Jb9;end;end),[\"i\"]=(function(l,e,irg)local Bo6,x=l.W.string.byte,l.YG;local function o(YTv,DnA)local BzX,kq3=Bo6(YTv,DnA,DnA + 1);if BzX == nil or kq3 == nil then return nil,DnA + 2;end;return BzX + (kq3 * 256),DnA + 2;end;local function GiJ(PTb,LnO)local GzZ,wy4,qq4=Bo6(PTb,LnO,LnO + 2);if GzZ == nil or wy4 == nil or qq4 == nil then return nil,LnO + 3;end;return GzZ + (wy4 * 256) + (qq4 * 0x10000),LnO + 3;end;local fcY,f=(l.Hkys)(l,e,1);local nsF=x.bxor(fcY or 0,0x48C6);local _=nsF;if irg then local wcP=(((irg + 0x5FAB) * 343) + 0x785) % 0xFFFF;_=_ - wcP;end;local ycV=nsF;if irg then local zwx=(((irg + 0x5EF6) * 0x7E3) + 0x1D8A) % 0x1FFFF;ycV=x.bxor(nsF + zwx,0x1D8A);else ycV=x.bxor(nsF + 0x6093,0x1D8A);end;local qiz={[8]=ycV};if _ == 0x2231 or l.iaD[_] then local pcB;pcB,f=(l.Hkys)(l,e,f);local Kz0,vcG={},false;for VNS=1,pcB or 0 do local ldy;ldy,f=(l.Hkys)(l,e,f);if ldy == nil then break;end;local wkh=l.W.string.sub(e,f,f + ldy - 1);f=f + ldy;local _wz=(l.i)(l,wkh);Kz0[VNS]=_wz;if _wz and _wz[0x2B07] then vcG=true;end;end;qiz[1]=Kz0;if vcG then qiz[0x2B07]=1;end;return qiz;end;local JlB;local spU;local hpC;local k;local n;if true then n,f=GiJ(e,f);else n,f=(l.Hkys)(l,e,f);end;if n == nil then return nil;end;local laS=170;if irg then laS=(((irg + 0x1530) * 0x3F9) + 170) % 256;end;n=x.bxor(n or laS,laS);local Ew_,cn5=true and math.floor((n or 0) / 256) % 0x10000 or 0,true and (n or 0) % 256 or (n or 0);local YY=math.floor(cn5 / 16) % 6;n=cn5 % 16;local yy5=l.W.string.byte;local t;local Ra5;local function H(dln,jt3)if jt3 == nil then jt3=(dln == 2 or dln == 3) and {[0x721B]=0x4E81,[0x74E7]=0} or \"\";end;local nrk=(0x4DC8 + dln * 681) % 0x10000;if type(jt3) == \"table\" then nrk=(nrk + (jt3[0x721B] or 0) * 775 + (jt3[0x74E7] or 0) * 211) % 0x10000;elseif type(jt3) == \"number\" then nrk=(nrk + jt3 * 211) % 0x10000;elseif type(jt3) == \"string\" then for Xge=1,#jt3 do nrk=((nrk * 775) + yy5(jt3,Xge) + Xge * 681) % 0x10000;end;end;return nrk % 0x10000;end;local function a(lls,Kze,Zgt)local XlG=H(lls,Kze);local uvS=x.bxor((Ra5 + XlG * 673 + lls * 0x3FF) % 0x10000,0xFF73);if Zgt ~= uvS then return false;end;Ra5=(Ra5 * 731 + Zgt + XlG + lls * 90) % 0x10000;return true;end;Ra5=(0x2FB3 + _ * 197 + (irg or 0) * 360 + n * 90) % 0x10000;if YY == 0 then if x.band(n,4) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;hpC,f=(l.KTe)(l,e,f);if not a(3,hpC,t) then return nil;end;end;if x.band(n,2) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;spU,f=(l.KTe)(l,e,f);if not a(2,spU,t) then return nil;end;end;if x.band(n,1) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;JlB,f=(l.Gu)(l,e,f);JlB=(JlB or 6) - 6;if not a(1,JlB,t) then return nil;end;end;if x.band(n,8) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;k,f=(l.RKF)(l,e,f);if not a(4,k,t) then return nil;end;end;elseif YY == 1 then if x.band(n,1) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;JlB,f=(l.Gu)(l,e,f);JlB=(JlB or 6) - 6;if not a(1,JlB,t) then return nil;end;end;if x.band(n,8) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;k,f=(l.RKF)(l,e,f);if not a(4,k,t) then return nil;end;end;if x.band(n,2) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;spU,f=(l.KTe)(l,e,f);if not a(2,spU,t) then return nil;end;end;if x.band(n,4) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;hpC,f=(l.KTe)(l,e,f);if not a(3,hpC,t) then return nil;end;end;elseif YY == 2 then if x.band(n,2) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;spU,f=(l.KTe)(l,e,f);if not a(2,spU,t) then return nil;end;end;if x.band(n,1) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;JlB,f=(l.Gu)(l,e,f);JlB=(JlB or 6) - 6;if not a(1,JlB,t) then return nil;end;end;if x.band(n,8) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;k,f=(l.RKF)(l,e,f);if not a(4,k,t) then return nil;end;end;if x.band(n,4) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;hpC,f=(l.KTe)(l,e,f);if not a(3,hpC,t) then return nil;end;end;elseif YY == 3 then if x.band(n,4) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;hpC,f=(l.KTe)(l,e,f);if not a(3,hpC,t) then return nil;end;end;if x.band(n,1) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;JlB,f=(l.Gu)(l,e,f);JlB=(JlB or 6) - 6;if not a(1,JlB,t) then return nil;end;end;if x.band(n,8) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;k,f=(l.RKF)(l,e,f);if not a(4,k,t) then return nil;end;end;if x.band(n,2) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;spU,f=(l.KTe)(l,e,f);if not a(2,spU,t) then return nil;end;end;elseif YY == 4 then if x.band(n,4) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;hpC,f=(l.KTe)(l,e,f);if not a(3,hpC,t) then return nil;end;end;if x.band(n,8) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;k,f=(l.RKF)(l,e,f);if not a(4,k,t) then return nil;end;end;if x.band(n,2) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;spU,f=(l.KTe)(l,e,f);if not a(2,spU,t) then return nil;end;end;if x.band(n,1) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;JlB,f=(l.Gu)(l,e,f);JlB=(JlB or 6) - 6;if not a(1,JlB,t) then return nil;end;end;else if x.band(n,8) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;k,f=(l.RKF)(l,e,f);if not a(4,k,t) then return nil;end;end;if x.band(n,2) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;spU,f=(l.KTe)(l,e,f);if not a(2,spU,t) then return nil;end;end;if x.band(n,1) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;JlB,f=(l.Gu)(l,e,f);JlB=(JlB or 6) - 6;if not a(1,JlB,t) then return nil;end;end;if x.band(n,4) ~= 0 then t,f=o(e,f);if t == nil then return nil;end;hpC,f=(l.KTe)(l,e,f);if not a(3,hpC,t) then return nil;end;end;end;local srq=(0x4DC8 + _ * 197 + (JlB or 0) * 211 + H(2,spU) * 775 + H(3,hpC) * 775 + H(4,k) * 805) % 0x10000;if srq ~= Ew_ then return nil;end;local KiX=true and (_ == 0x2B68 or _ == 0x4B85 or _ == 0x3084 or _ == 0x958 or _ == 0x2DEB);local YeS=l.J;if YeS == nil then YeS={[0x721B]=0x4E81,[0x74E7]=0};l.J=YeS;end;qiz[4]=(((JlB or 0) * 0xF834) + 0xF4CEF) % 0xFFFFD;qiz[6]={[2]=spU or YeS,[1]=hpC or YeS,[3]=(nsF % 23)};do local FA6,WA7=spU and spU[0x721B],hpC and hpC[0x721B];if FA6 == 0x713 or FA6 == 0xFCA or WA7 == 0x713 or WA7 == 0xFCA then qiz[0x2B07]=1;end;end;if false then qiz[3]=(l.kQEt)(l,k or \"\");elseif k and k ~= \"\" then qiz[3]=k;end;if KiX then qiz[0x6C01]=1;end;return qiz;end),[\"zNjI\"]=(function(ZO7,tgo,xq6)local Qz1,ssW,BNH,agi=xq6[6],tgo[0x219F],(((xq6[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,tgo[0x6D74];local GNR,KND=Qz1[2],Qz1[1];do local ogn,Eh0=agi[(KND[0x74E7] or 0)] + (GNR[0x74E7] or 0),BNH;agi[Eh0]=ogn;local zq7=ssW and ssW[Eh0];if zq7 then zq7[1]=ogn;end;end;end),[\"Je\"]=(function(QQ,ji_)local Bfa,mvR,peh,Gfo={},1,1,#ji_;while peh <= Gfo do local fvD=peh;local ZlK;local Da6;local udp;local cdv;local zt5;local gcQ;local Kfi;local Qfn;local uaH;Bfa[mvR]=peh;ZlK,peh=(QQ.Hkys)(QQ,ji_,peh);Da6,peh=(QQ.Hkys)(QQ,ji_,peh);udp,peh=(QQ.Hkys)(QQ,ji_,peh);cdv,peh=(QQ.Hkys)(QQ,ji_,peh);zt5,peh=(QQ.Hkys)(QQ,ji_,peh);gcQ,peh=(QQ.Hkys)(QQ,ji_,peh);Kfi,peh=(QQ.Hkys)(QQ,ji_,peh);Qfn,peh=(QQ.Hkys)(QQ,ji_,peh);if true then uaH,peh=(QQ.Hkys)(QQ,ji_,peh);else uaH=0;end;if ZlK == nil or Da6 == nil or udp == nil or cdv == nil or zt5 == nil or gcQ == nil or Kfi == nil or Qfn == nil or uaH == nil then break;end;if Da6 < 0 or udp < 0 or cdv < 0 or zt5 < 0 then break;end;local ulh=peh + Da6 + udp + cdv + zt5;if ulh <= fvD then break;end;if ulh > Gfo + 1 then break;end;peh=ulh;mvR=mvR + 1;end;return Bfa;end),[\"wVxU\"]=(function(GtE,Zhz,ce2)local VTg,BTk,wvL=GtE.W.table.concat,GtE.i,GtE.Vo or (GtE.H)(GtE);local La7=ce2[3];if type(La7) ~= \"string\" or La7 == \"\" then return;end;local Eq9=GtE.W;local GTq,Tje,yvU,pvC,AwT=Eq9.string.byte,Eq9.string.char,Eq9.table.concat,(Zhz[0x41DB] or 0x3F8314) - (Zhz[0x58A9] or 0x73361),GtE.YG;local xiE=(Zhz[0x65D2] or 1) - pvC - 1;if xiE < 1 then return;end;local elQ,vvM,CnN,OwA=#La7,xiE * 23,(((xiE + 0x7EE2 + 17) * 761) + 0x66FD + 0x4AD3 + (xiE * 19)) % 0x10000,{};for fdg=1,elQ do local mld,KTj=GTq(La7,elQ - fdg + 1),(CnN + (fdg * 11) + vvM + ((fdg % 5) * 31)) % 256;OwA[fdg]=Tje(AwT.bxor(mld,KTj));CnN=(CnN + (mld * 19) + (fdg * 29) + xiE + ((mld % 7) * 43)) % 0x10000;end;if OwA[1] == nil then return;end;local rr=BTk(GtE,yvU(OwA),xiE);if type(rr) ~= \"table\" then return;end;ce2[8]=rr[8];ce2[4]=rr[4];ce2[6]=rr[6];ce2[3]=rr[3];ce2[1]=rr[1];ce2[0x2B07]=rr[0x2B07];if ce2[0x2B07] then (GtE.EXQa)(GtE,Zhz,ce2,xiE);end;(GtE.AsYF)(GtE,Zhz,ce2);ce2[2]=nil;local by8=ce2[8];if by8 == nil then return;end;local IwO=(((xiE + 0x5EF6) * 0x7E3) + 0x1D8A) % 0x1FFFF;local jcZ,xc0=AwT.bxor(by8,0x1D8A) - IwO,(((xiE + 0x5FAB) * 343) + 0x785) % 0xFFFF;local zc1=jcZ - xc0;local QtA=(((AwT.bxor(zc1,0x4B5) * 173) + 0x1FAED) % 0x1FFFF);QtA=((QtA * 0xA4A7) + 0xB39D3) % 0x1C8F1;local eom=wvL[QtA];if eom then local mn6=GtE.LpQI;if mn6 then eom=mn6(ce2,xiE,QtA,eom) or eom;end;ce2[2]=eom;return (eom)(GtE,Zhz,ce2);end;end),[\"uYXj\"]=(function(fll,wlu,alX,gy9)local kpe,bvF=(fll.mbQ)(fll,wlu);local ylc,plm=(fll.O)(fll,kpe,alX);return {[0x1BA3]=ylc,[0x152A]=plm or {},[0x2A30]=(fll.u)(fll,bvF,alX),[0x7E17]=\"\",[0x6FEF]=\"\",[0x4185]=gy9 or 0};end),[\"WOH\"]=(function(mm,Go7,NwI)local hsY,PA9,CIL,SwN=Go7[0x219F],NwI[6],(((NwI[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,Go7[0x6D74];local QNL=PA9[1];local fn7;do local tof=QNL;local K,HwS=tof[0x74E7] or 0,tof[0x721B] or 0x4E81;if HwS == 0x6514 then fn7=SwN[K];elseif HwS == 0x990 then fn7=K;elseif HwS == 0xFCA then local ver=Go7[0x6B9A];if ver == nil then ver={};Go7[0x6B9A]=ver;end;local Bay=ver[tof];if Bay == nil then mm.y=mm.YG.bxor(((K + 0x892) * 189 + (mm.qmPH or 0) + (mm.Zn or 0) + ((mm.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);mm.F=((K + ((((NwI[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD) + (mm.qmPH or 0)) % 4);Bay=Go7[0x14B2][K];mm.y=nil;ver[tof]=Bay == nil and mm.nUn or Bay;if not (Bay == mm.nUn) then fn7=Bay;else fn7=nil;end;elseif Bay == mm.nUn then fn7=nil;else fn7=Bay;end;elseif HwS == 0x713 then local bed=Go7[0x6B9A];if bed == nil then bed={};Go7[0x6B9A]=bed;end;local Gap=bed[tof];if Gap == nil then mm.y=mm.YG.bxor(((K + 0x892) * 189 + (mm.qmPH or 0) + (mm.Zn or 0) + ((mm.JEgx or 0x14FD) * 977)) % 0x10000,0xB665);mm.F=((K + ((((NwI[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD) + (mm.qmPH or 0)) % 4);Gap=Go7[0x14B2][K];mm.y=nil;bed[tof]=Gap == nil and mm.nUn or Gap;if Gap == mm.nUn then fn7=nil;else fn7=Gap;end;elseif Gap == mm.nUn then fn7=nil;else fn7=Gap;end;else fn7=nil;end;end;local JTz=SwN[CIL];do local igs,Th1=JTz[fn7],CIL;SwN[Th1]=igs;local Ijo=hsY and hsY[Th1];if Ijo then Ijo[1]=igs;end;end;end),[\"f\"]=(function(eO8,Nji)local Jz2=Nji[6];return (type(Jz2) == \"table\" and Jz2[1]) or {};end),[\"kQEt\"]=(function(hrj,_c2)if _c2 == nil or _c2 == \"\" then return {[0x422C]=0,[0x1D6F]=\"\",[0x29DB]=0};end;local vkl,Zzi=(hrj.Gu)(hrj,_c2,1);local Zfr;Zfr,Zzi=(hrj.RKF)(hrj,_c2,Zzi);local qpt;qpt,Zzi=(hrj.Hkys)(hrj,_c2,Zzi);return {[0x422C]=(vkl or 114) - 114,[0x1D6F]=Zfr or \"\",[0x29DB]=(hrj.YG).bxor(qpt or 0,0x214D)};end),[\"dHs\"]=(function(tO9,ngh,Sjn)local sgr,MIU,rsP,VOe=ngh[0x6D74],(((Sjn[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,ngh[0x219F],Sjn[6];local RSm=VOe[1];do local hgd,Ah2=not sgr[MIU],MIU;sgr[Ah2]=hgd;local Hjs=rsP and rsP[Ah2];if Hjs then Hjs[1]=hgd;end;end;end),[\"rQ\"]=(function(Ec3,RwH,Rjh)local Djr,XT_=Ec3.pd,Ec3.x;local olZ,Tc4=(((((Rjh[6] or {})[1] or {})))[0x74E7] or 0),{};Tc4[1]=Djr(Ec3,RwH,olZ + 0);Tc4[2]=Djr(Ec3,RwH,olZ + 1);XT_(Ec3,RwH,(((Rjh[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD,Tc4);end),[\"D\"]=(function(aIe,rgl,DwR,jmW)local tzs,Ac5,bOE=rgl[0x6D74],{},0;for JNU=DwR,jmW do bOE=bOE + 1;Ac5[bOE]=tzs[JNU];end;Ac5.n=bOE;rgl[0x1DD7]=Ac5;end),[\"FLN\"]=(function(Oc6,Ljd,xpo)local dgu=Oc6.W;local gvW,Ujl,Cju,azh=dgu.string.byte,dgu.string.char,dgu.table.concat,dgu.math.floor;local function ZTE(gOT,kOA)local oIt,Mjc=0,1;while gOT > 0 or kOA > 0 do local BOt,GOa=gOT % 2,kOA % 2;if BOt ~= GOa then oIt=oIt + Mjc;end;gOT=(gOT - BOt) / 2;kOA=(kOA - GOa) / 2;Mjc=Mjc * 2;end;return oIt;end;local Fjm=(Oc6.YG and Oc6.YG.bxor) or ZTE;local function LwD(FIC)local kvY=173;for WIM=1,#FIC do kvY=(kvY * 131 + gvW(FIC,WIM) + WIM) % 0x10000;end;return kvY;end;local KOo,qvP=#Ljd,#xpo;if qvP == 0 then return \"\";end;local Xz3,Kav={},Oc6.M;if Kav == nil then Kav={};Oc6.M=Kav;end;local MnS=Kav[xpo];if MnS == nil then MnS=LwD(xpo);Kav[xpo]=MnS;end;local jvV=qvP * 13 % 256;for Auw=1,KOo do local gkc=((Auw - 1) % qvP) + 1;local QOi=gvW(xpo,gkc);local JOn,iIa=gvW(Ljd,Auw),(MnS + azh(MnS / 256) + QOi + jvV) % 256;Xz3[Auw]=Ujl(Fjm(JOn,iIa));jvV=JOn;MnS=(MnS + QOi * 17 + Auw * 11 + jvV * 7) % 0x10000;end;return Cju(Xz3);end),[\"NzV\"]=(function(Wjf,lgc,eTT)local tTA=Wjf.pd;local zoU,xvB=lgc[0x219F],(((eTT[4] or 0xF4CEF) - 0xF4CEF) * 0xBBAE3) % 0xFFFFD;local UwL=zoU and zoU[xvB];if UwL then UwL[1]=tTA(Wjf,lgc,xvB);UwL[4]=false;UwL[3]=nil;zoU[xvB]=nil;end;end),[\"YHnw\"]=(function(JtO,eh_,me3)local zvG,aTO,oTI=JtO.Vo or (JtO.H)(JtO),JtO.W.table.concat,JtO.i;local Ua8=me3[3];if type(Ua8) ~= \"string\" or Ua8 == \"\" then return;end;local ugm=JtO.W;local Yjw,iTN,_vK,EvQ,CwU=ugm.string.char,ugm.string.byte,(eh_[0x41DB] or 0x3F8314) - (eh_[0x58A9] or 0x73361),ugm.table.concat,JtO.YG;local ziT=(eh_[0x65D2] or 1) - _vK - 1;if ziT < 1 then return;end;local TvJ,zpi,ozr,Ca9,MwC=ziT * 7,#Ua8,ugm.math.floor,(((ziT + 0x7EE2) * 761) + 0x66FD + 0x4AD3 + (ziT * 31)) % 0x10000,{};for Ouy=1,zpi do local il0,efd=ozr(Ca9 / 256),iTN(Ua8,Ouy);local nTS=(Ca9 + (Ouy * 37) + TvJ + il0) % 256;MwC[Ouy]=Yjw(CwU.bxor(efd,nTS));Ca9=(Ca9 + (efd * 23) + (Ouy * 13) + (ziT * 5) + il0) % 0x10000;end;if MwC[1] == nil then return;end;local dd=oTI(JtO,EvQ(MwC),ziT);if type(dd) ~= \"table\" then return;end;me3[8]=dd[8];me3[4]=dd[4];me3[6]=dd[6];me3[3]=dd[3];me3[1]=dd[1];me3[0x2B07]=dd[0x2B07];if me3[0x2B07] then (JtO.EXQa)(JtO,eh_,me3,ziT);end;(JtO.AsYF)(JtO,eh_,me3);me3[2]=nil;local _pn=me3[8];if _pn == nil then return;end;local FwM=(((ziT + 0x5EF6) * 0x7E3) + 0x1D8A) % 0x1FFFF;local Nc8,Sc9=CwU.bxor(_pn,0x1D8A) - FwM,(((ziT + 0x5FAB) * 343) + 0x785) % 0xFFFF;local Hme=Nc8 - Sc9;local XtI=(((CwU.bxor(Hme,0x4B5) * 173) + 0x1FAED) % 0x1FFFF);XtI=((XtI * 0xA4A7) + 0xB39D3) % 0x1C8F1;local aow=zvG[XtI];if aow then local wn8=JtO.LpQI;if wn8 then aow=wn8(me3,ziT,XtI,aow) or aow;end;me3[2]=aow;return (aow)(JtO,eh_,me3);end;end)}):DyJ(getfenv and getfenv() or _ENV or _G);";
const EMBEDDED_PAGES = {
  // Pages are appended below from pages/ by scripts/embed-page.js (`npm run pages`).
};

// BEGIN PAGE /scripts - generated from pages/scripts.html; run `npm run pages` to refresh.
const SCRIPTS_PAGE =
  "<!doctype html>\n" +
  "<html lang=\"en\">\n" +
  "<head>\n" +
  "  <meta charset=\"utf-8\" />\n" +
  "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\" />\n" +
  "  <meta name=\"theme-color\" content=\"#050505\" />\n" +
  "  <meta name=\"description\" content=\"Browse the 999MS script library.\" />\n" +
  "  <title>Script list \u2014 999MS</title>\n" +
  "  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n" +
  "  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n" +
  "  <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;650;700;750;800&display=swap\" rel=\"stylesheet\" />\n" +
  "  <style>\n" +
  "    :root{color-scheme:dark;--bg:#050505;--panel:#0a0a0c;--line:#202024;--muted:#85858e;--soft:#b5b5bd;--white:#f7f7f8;--accent:#22c55e;--blue:#39aafa;--max:1180px}\n" +
  "    *,*::before,*::after{box-sizing:border-box}\n" +
  "    html{background:var(--bg);scroll-behavior:smooth}\n" +
  "    body{margin:0;background:var(--bg);color:var(--white);font:400 16px/1.5 Inter,system-ui,-apple-system,\"Segoe UI\",sans-serif;-webkit-font-smoothing:antialiased}\n" +
  "    body.lock{overflow:hidden}\n" +
  "    a{color:inherit;text-decoration:none}button,input{font:inherit}button{color:inherit}\n" +
  "    .topbar{height:78px;position:sticky;top:0;z-index:20;background:rgba(5,5,5,.94);border-bottom:1px solid #1a1a1c;backdrop-filter:blur(16px)}\n" +
  "    .nav{width:min(var(--max),100%);height:100%;margin:auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between}\n" +
  "    .brand{display:flex;align-items:center;gap:11px;font-size:18px;font-weight:750;letter-spacing:-.045em}\n" +
  "    .brand-mark{width:38px;height:30px;display:grid;place-items:center;color:#050505;background:#f6f6f6;border-radius:9px;font-size:16px;font-weight:800;letter-spacing:-.1em;transform:skew(-8deg)}\n" +
  "    .brand-name{color:#f7f7f8}.brand-name span{color:#888}\n" +
  "    .nav-actions{display:flex;align-items:center;gap:28px}\n" +
  "    .nav-link{font-size:14px;color:#a6a6ae;transition:color .18s ease}.nav-link:hover,.nav-link.active{color:#fff}\n" +
  "    .nav-cta{height:40px;padding:0 17px;border:1px solid #303035;border-radius:999px;background:#f4f4f4;color:#080808;font-size:13px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;transition:transform .18s ease,background .18s ease}\n" +
  "    .nav-cta:hover{transform:translateY(-1px);background:#fff}\n" +
  "    .menu-btn{width:42px;height:42px;border:1px solid #252529;border-radius:50%;background:#0d0d0f;display:none;align-items:center;justify-content:center;cursor:pointer}\n" +
  "    .menu-btn svg{width:19px;height:19px}\n" +
  "    .mobile-menu{display:none}\n" +
  "    main{width:min(var(--max),100%);margin:0 auto;padding:52px 24px 96px}\n" +
  "    .intro{padding:0 0 34px;border-bottom:1px solid var(--line)}\n" +
  "    .eyebrow{display:flex;align-items:center;gap:9px;margin:0 0 17px;color:#9999a1;text-transform:uppercase;letter-spacing:.13em;font-size:11px;font-weight:700}\n" +
  "    .eyebrow-dot{width:7px;height:7px;background:var(--accent);border-radius:50%;box-shadow:0 0 12px rgba(34,197,94,.55)}\n" +
  "    h1{margin:0;font-size:clamp(36px,6.3vw,64px);line-height:1.06;font-weight:750;letter-spacing:-.065em}\n" +
  "    .subtitle{margin:17px 0 0;color:#85858e;font-size:clamp(15px,2vw,19px);letter-spacing:-.02em}\n" +
  "    .list-tools{margin-top:27px;display:flex;align-items:center;justify-content:space-between;gap:16px}\n" +
  "    .count-pill{min-height:42px;padding:0 16px;display:inline-flex;align-items:center;gap:8px;border:1px solid #252529;border-radius:999px;background:#09090b;color:#a2a2aa;font-size:13px;white-space:nowrap}\n" +
  "    .count-pill strong{color:#f2f2f4;font-weight:650}\n" +
  "    .search{width:min(310px,46vw);height:42px;padding:0 13px;display:flex;align-items:center;gap:9px;border:1px solid #252529;border-radius:999px;background:#09090b;transition:border-color .18s ease}\n" +
  "    .search:focus-within{border-color:#55555f}\n" +
  "    .search svg{width:16px;height:16px;color:#73737c;flex:none}\n" +
  "    .search input{width:100%;min-width:0;border:0;outline:0;background:transparent;color:#f2f2f4;font-size:13px}\n" +
  "    .search input::placeholder{color:#6e6e76}\n" +
  "    .section-label{display:flex;align-items:center;justify-content:space-between;margin:28px 0 20px;color:#a6a6ae;font-size:12px;font-weight:650;letter-spacing:.08em;text-transform:uppercase}\n" +
  "    .section-label .sort-note{color:#66666e;font-size:11px;font-weight:500;letter-spacing:0;text-transform:none}\n" +
  "    .grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:38px 24px}\n" +
  "    .script-card{min-width:0;overflow:hidden;cursor:pointer;outline:none;border:1px solid #222226;border-radius:25px;background:linear-gradient(180deg,#0b0b0d,#080809);transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease}\n" +
  "    .script-card:hover{transform:translateY(-3px);border-color:#3a3a40;box-shadow:0 18px 45px rgba(0,0,0,.28)}\n" +
  "    .script-card:focus-visible{outline:2px solid var(--accent);outline-offset:4px}\n" +
  "    .cover{position:relative;aspect-ratio:1.72/1;overflow:hidden;border:0;border-radius:0;background:radial-gradient(ellipse at 72% 30%,rgba(255,255,255,.2),transparent 37%),linear-gradient(135deg,#1c1c20,#111116 48%,#242428);isolation:isolate}.cover.has-image .cover-placeholder{display:none}\n" +
  "    .cover::before,.cover::after{content:\"\";position:absolute;z-index:1;pointer-events:none}\n" +
  "    .cover::before{width:43%;aspect-ratio:1;border-radius:50%;right:11%;top:11%;background:linear-gradient(135deg,rgba(255,255,255,.22),rgba(165,243,107,.08));filter:blur(1px);box-shadow:0 25px 70px rgba(0,0,0,.3)}\n" +
  "    .cover::after{inset:0;background:linear-gradient(180deg,transparent 33%,rgba(0,0,0,.74) 100%)}\n" +
  "    .cover img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;transition:transform .4s ease}\n" +
  "    .script-card:hover .cover img{transform:scale(1.035)}\n" +
  "    .cover-placeholder{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.86);font-size:clamp(60px,10vw,130px);font-weight:800;letter-spacing:-.12em;text-shadow:0 6px 30px rgba(0,0,0,.4);z-index:0}\n" +
  "    .cover-flag{position:absolute;left:16px;top:16px;z-index:2;padding:7px 12px;border:1px solid rgba(255,255,255,.16);border-radius:999px;background:rgba(7,7,9,.76);backdrop-filter:blur(10px);font-size:11px;font-weight:700;color:#ededf0}\n" +
  "    .cover-title{position:absolute;left:20px;right:20px;bottom:16px;z-index:2;display:flex;align-items:flex-end;justify-content:space-between;gap:12px}\n" +
  "    .cover-title strong{max-width:82%;font-size:clamp(17px,2.3vw,25px);line-height:1.12;font-weight:750;letter-spacing:-.05em;text-shadow:0 2px 12px #000}\n" +
  "    .cover-arrow{width:34px;height:34px;flex:none;display:grid;place-items:center;border:1px solid rgba(255,255,255,.3);border-radius:50%;background:rgba(0,0,0,.34);font-size:18px}\n" +
  "    .card-body{padding:17px 18px 16px}\n" +
  "    .card-title{margin:0;color:#f5f5f6;font-size:clamp(17px,2vw,21px);font-weight:700;line-height:1.25;letter-spacing:-.04em}\n" +
  "    .author-row{min-width:0;margin-top:14px;display:flex;align-items:center;gap:10px;color:#aaaab2;font-size:13px}\n" +
  "    .avatar{width:34px;height:34px;flex:none;border-radius:50%;display:grid;place-items:center;background:linear-gradient(145deg,#e8e8e8,#777);color:#111;font-size:11px;font-weight:800;box-shadow:0 0 0 2px #242428}\n" +
  "    .author-name{color:#e7e7ea;font-weight:650;white-space:nowrap}\n" +
  "    .crown{color:#ffca52;font-size:15px;line-height:1}\n" +
  "    .verified{width:16px;height:16px;display:grid;place-items:center;flex:none;border-radius:50%;background:#39aafa;color:#fff;font-size:10px;font-weight:800}\n" +
  "    .sep{color:#4f4f57}\n" +
  "    .file-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#707079;font-size:12px}\n" +
  "    .card-meta{margin-top:16px;display:flex;align-items:center;gap:16px;color:#81818a;font-size:13px}\n" +
  "    .meta-item{display:inline-flex;align-items:center;gap:7px}\n" +
  "    .meta-item svg{width:15px;height:15px;color:#75757e}\n" +
  "    .meta-spacer{flex:1}\n" +
  "    .updated{color:#66666f;font-size:12px}\n" +
  "    .card-rule{height:1px;margin-top:19px;background:#1d1d21}\n" +
  "    .loading-card{aspect-ratio:1.78/1;border:1px solid #1e1e23;border-radius:23px;background:linear-gradient(100deg,#0b0b0d 20%,#141417 38%,#0b0b0d 60%);background-size:200% 100%;animation:shimmer 1.3s ease infinite}\n" +
  "    @keyframes shimmer{to{background-position-x:-200%}}\n" +
  "    .empty{grid-column:1/-1;padding:55px 24px;border:1px solid #222227;border-radius:20px;color:#92929a;text-align:center;background:#09090b}\n" +
  "    .empty strong{display:block;margin-bottom:7px;color:#eee;font-size:18px}\n" +
  "    footer{border-top:1px solid #1a1a1e;padding:48px 24px 35px;color:#85858e}\n" +
  "    .footer-inner{width:min(var(--max),100%);margin:auto;display:flex;align-items:flex-start;justify-content:space-between;gap:40px}\n" +
  "    .footer-brand{display:flex;align-items:center;gap:12px;color:#f4f4f5;font-size:20px;font-weight:700}\n" +
  "    .footer-copy{max-width:430px;margin:14px 0 20px;color:#85858e;font-size:14px;line-height:1.7}\n" +
  "    .copyright{font-size:12px;color:#65656d}\n" +
  "    .footer-links{display:flex;gap:22px;color:#9a9aa2;font-size:13px}\n" +
  "    .footer-links a:hover{color:#fff}\n" +
  "    dialog{width:min(700px,calc(100% - 28px));max-height:min(90vh,900px);padding:0;border:1px solid #28282d;border-radius:24px;background:#09090b;color:#f5f5f6;box-shadow:0 25px 100px rgba(0,0,0,.75);overflow:auto}\n" +
  "    dialog::backdrop{background:rgba(0,0,0,.77);backdrop-filter:blur(8px)}\n" +
  "    .detail-cover{position:relative;aspect-ratio:1.9/1;background:linear-gradient(135deg,#121a17,#121217);overflow:hidden}\n" +
  "    .detail-cover img{width:100%;height:100%;object-fit:cover}\n" +
  "    .detail-cover::after{content:\"\";position:absolute;inset:30% 0 0;background:linear-gradient(transparent,rgba(7,7,8,.88))}\n" +
  "    .detail-close{position:absolute;right:15px;top:15px;z-index:3;width:38px;height:38px;border:1px solid #ffffff30;border-radius:50%;background:#050505ad;color:#fff;font-size:23px;cursor:pointer}\n" +
  "    .detail-content{padding:24px}\n" +
  "    .detail-title{margin:0;font-size:clamp(24px,5vw,34px);letter-spacing:-.05em;line-height:1.12}\n" +
  "    .detail-author{margin:18px 0 22px;display:flex;align-items:center;gap:11px}\n" +
  "    .copy-main{width:100%;min-height:54px;border-radius:999px;background:#f7f7f8;color:#09090a;font-size:16px;font-weight:700;cursor:pointer;transition:transform .18s ease,background .18s ease}\n" +
  "    .copy-main:hover{transform:translateY(-1px);background:#fff}\n" +
  "    .detail-actions{display:grid;grid-template-columns:1fr;gap:10px;margin-top:11px}\n" +
  "    .detail-actions a,.detail-actions button{min-height:45px;padding:0 12px;display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid #29292f;border-radius:14px;background:#0d0d10;color:#e4e4e8;font-size:13px;font-weight:600;cursor:pointer}\n" +
  "    .detail-actions a:hover,.detail-actions button:hover{background:#151519}\n" +
  "    .details-list{margin:23px 0 0;border-top:1px solid #25252a}\n" +
  "    .detail-line{min-height:54px;display:flex;align-items:center;justify-content:space-between;gap:20px;border-bottom:1px solid #25252a;color:#85858e;font-size:14px}\n" +
  "    .detail-line strong{color:#ececef;font-weight:600;text-align:right}\n" +
  "    .code-panel{margin-top:20px;border:1px solid #25252a;border-radius:17px;overflow:hidden;background:#070709}\n" +
  "    .code-head{padding:15px 17px;display:flex;align-items:center;gap:12px;border-bottom:1px solid #222227}\n" +
  "    .code-icon{width:40px;height:40px;display:grid;place-items:center;border:1px solid #303037;border-radius:12px;color:#a4a4ac;font-family:monospace;font-size:14px}\n" +
  "    .code-head strong{display:block;font-size:15px}.code-head span{display:block;margin-top:3px;color:#777780;font-size:12px}\n" +
  "    .code-note{margin:0;padding:18px;color:#9c9ca5;font:13px/1.7 ui-monospace,SFMono-Regular,Menlo,monospace;overflow:auto;white-space:pre-wrap}\n" +
  "    @media(max-width:700px){\n" +
  "      .topbar{height:70px}.nav{padding:0 20px}.nav-actions{display:none}.menu-btn{display:flex}\n" +
  "      .mobile-menu{position:absolute;left:12px;right:12px;top:calc(100% + 9px);padding:10px;border:1px solid #29292e;border-radius:17px;background:rgba(10,10,12,.98);box-shadow:0 15px 40px #000b}\n" +
  "      .mobile-menu.open{display:grid}.mobile-menu a{padding:13px 12px;border-radius:10px;color:#dedee2;font-size:14px}.mobile-menu a:hover{background:#17171a}\n" +
  "      main{padding:40px 20px 72px}.intro{padding-bottom:25px}.eyebrow{margin-bottom:13px}.subtitle{margin-top:13px;line-height:1.55}\n" +
  "      .list-tools{margin-top:22px}.search{width:44px;padding:0;justify-content:center;border-radius:50%;cursor:pointer}.search input{display:none}.search.open{width:min(250px,57vw);padding:0 12px;border-radius:999px;justify-content:flex-start}.search.open input{display:block}\n" +
  "      .section-label{margin:24px 0 16px}.grid{grid-template-columns:1fr;gap:30px}.cover{aspect-ratio:1.64/1;border-radius:0}.card-body{padding-top:15px}.card-meta{margin-top:14px}\n" +
  "      footer{padding:38px 20px 30px}.footer-inner{display:block}.footer-links{margin-top:25px;flex-wrap:wrap}.detail-content{padding:20px}.detail-cover{aspect-ratio:1.55/1}\n" +
  "    }\n" +
  "    @media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}\n" +
  "  </style>\n" +
  "</head>\n" +
  "<body>\n" +
  "  <header class=\"topbar\">\n" +
  "    <div class=\"nav\">\n" +
  "      <a class=\"brand\" href=\"/\" aria-label=\"999MS home\"><span class=\"brand-mark\">9</span><span class=\"brand-name\">999<span>MS</span></span></a>\n" +
  "      <nav class=\"nav-actions\" aria-label=\"Main navigation\">\n" +
  "        <a class=\"nav-link\" href=\"/\">Home</a><a class=\"nav-link active\" href=\"/scripts\">Scripts</a>\n" +
  "      </nav>\n" +
  "      <button class=\"menu-btn\" id=\"menuBtn\" type=\"button\" aria-label=\"Open menu\" aria-expanded=\"false\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M4 6h16M4 12h16M4 18h16\"/></svg></button>\n" +
  "      <nav class=\"mobile-menu\" id=\"mobileMenu\" aria-label=\"Mobile navigation\"><a href=\"/\">Home</a><a href=\"/scripts\">Scripts</a></nav>\n" +
  "    </div>\n" +
  "  </header>\n" +
  "  <main>\n" +
  "    <section class=\"intro\" aria-labelledby=\"pageTitle\">\n" +
  "      <p class=\"eyebrow\"><span class=\"eyebrow-dot\"></span>999MS \u00b7 COMMUNITY LIBRARY</p>\n" +
  "      <h1 id=\"pageTitle\">999MS Script list.</h1>\n" +
  "      <p class=\"subtitle\">Browse scripts published for supported Roblox experiences.</p>\n" +
  "      <div class=\"list-tools\">\n" +
  "        <div class=\"count-pill\" id=\"countPill\"><strong id=\"scriptCount\">Loading</strong><span id=\"countLabel\">scripts</span></div>\n" +
  "        <label class=\"search\" id=\"searchWrap\" aria-label=\"Search scripts\">\n" +
  "          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"><circle cx=\"10.8\" cy=\"10.8\" r=\"6.8\"/><path d=\"m16 16 4.2 4.2\"/></svg>\n" +
  "          <input id=\"searchInput\" type=\"search\" placeholder=\"Search scripts\" autocomplete=\"off\" />\n" +
  "        </label>\n" +
  "      </div>\n" +
  "    </section>\n" +
  "    <div class=\"section-label\"><span>Available scripts</span><span class=\"sort-note\" id=\"sortNote\">Newest first</span></div>\n" +
  "    <section class=\"grid\" id=\"scriptGrid\" aria-live=\"polite\" aria-label=\"Available scripts\">\n" +
  "      <div class=\"loading-card\" aria-hidden=\"true\"></div><div class=\"loading-card\" aria-hidden=\"true\"></div>\n" +
  "    </section>\n" +
  "  </main>\n" +
  "  <footer>\n" +
  "    <div class=\"footer-inner\">\n" +
  "      <div><a class=\"footer-brand\" href=\"/\"><span class=\"brand-mark\">9</span><span>999MS</span></a><p class=\"footer-copy\">A fast, simple Lua script hub for supported Roblox experiences.</p><div class=\"copyright\">\u00a9 <span id=\"year\"></span> 999MS.</div></div>\n" +
  "      <nav class=\"footer-links\" aria-label=\"Footer navigation\"><a href=\"/\">Home</a><a href=\"/scripts\">Scripts</a></nav>\n" +
  "    </div>\n" +
  "  </footer>\n" +
  "  <dialog id=\"detailDialog\" aria-labelledby=\"detailTitle\">\n" +
  "    <div class=\"detail-cover\" id=\"detailCover\"><button class=\"detail-close\" id=\"closeDetail\" type=\"button\" aria-label=\"Close\">\u00d7</button></div>\n" +
  "    <div class=\"detail-content\">\n" +
  "      <h2 class=\"detail-title\" id=\"detailTitle\"></h2>\n" +
  "      <div class=\"detail-author\"><span class=\"avatar\">9M</span><span class=\"author-name\">999MS</span><span class=\"crown\" aria-label=\"Official\">\u265b</span><span class=\"verified\" aria-label=\"Verified\">\u2713</span><span class=\"sep\">\u00b7</span><span class=\"file-name\" id=\"detailFile\"></span></div>\n" +
  "      <button class=\"copy-main\" id=\"copyLoader\" type=\"button\">Copy loader</button>\n" +
  "      <div class=\"detail-actions\"><button id=\"shareScript\" type=\"button\">Share script</button></div>\n" +
  "      <div class=\"details-list\"><div class=\"detail-line\"><span>Experience</span><strong id=\"detailExperience\"></strong></div><div class=\"detail-line\"><span>Updated</span><strong id=\"detailUpdated\"></strong></div><div class=\"detail-line\"><span>File size</span><strong id=\"detailSize\"></strong></div></div>\n" +
  "      <div class=\"code-panel\"><div class=\"code-head\"><span class=\"code-icon\">&lt;/&gt;</span><div><strong>Script code</strong><span>Protected source \u00b7 loader snippet</span></div></div><pre class=\"code-note\" id=\"detailCode\">-- Source is protected. Use Copy loader to get the launch command.</pre></div>\n" +
  "    </div>\n" +
  "  </dialog>\n" +
  "  <script>\n" +
  "    (function(){\n" +
  "      'use strict';\n" +
  "      var grid=document.getElementById('scriptGrid'),count=document.getElementById('scriptCount'),countLabel=document.getElementById('countLabel'),input=document.getElementById('searchInput'),searchWrap=document.getElementById('searchWrap'),dlg=document.getElementById('detailDialog'),chosen=null,all=[],games={};\n" +
  "      document.getElementById('year').textContent=String(new Date().getFullYear());\n" +
  "      function esc(v){return String(v==null?'':v).replace(/[&<>\"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[c]})}\n" +
  "      function titleCase(v){return String(v||'').replace(/[_-]+/g,' ').replace(/\\b\\w/g,function(c){return c.toUpperCase()})}\n" +
  "      function fmtSize(v){var n=Number(v)||0;if(n<1024)return n+' B';if(n<1048576)return (n/1024).toFixed(n<10240?1:0)+' KB';return (n/1048576).toFixed(1)+' MB'}\n" +
  "      function fmtDate(v){if(!v)return '\u2014';var d=new Date(v);return isNaN(d.getTime())?'\u2014':d.toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'})}\n" +
  "      function loaderText(x){return 'local License = \"\"\\nlocal Script = \"'+x.name+'\"\\nloadstring(game:HttpGet(\"'+location.origin+'/loadc.lua\"))(License, Script)'}\n" +
  "      function loaderSize(x){return fmtSize(new Blob([loaderText(x)]).size)}\n" +
  "      function nameFor(x){var g=games[x.placeId]||{};return g.name||titleCase(x.name)}\n" +
  "      function svg(kind){if(kind==='file')return '<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><path d=\"M14 2v6h6M8 13h8M8 17h8\"/></svg>';return '<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><path d=\"M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z\"/></svg>'}\n" +
  "      function createCard(x,i){var game=games[x.placeId]||{},name=nameFor(x),card=document.createElement('article');card.className='script-card';card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-label','View '+name+' script');\n" +
  "        var image=game.icon?'<img src=\"'+esc(game.icon)+'\" alt=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer\">':'';\n" +
  "        var date=fmtDate(x.updatedAt);card.innerHTML='<div class=\"cover'+(image?' has-image':'')+'\">'+image+'<span class=\"cover-placeholder\">'+esc(name.slice(0,1).toUpperCase()||'9')+'</span><span class=\"cover-flag\">'+(i===0?'RECENTLY UPDATED':'OFFICIAL')+'</span><div class=\"cover-title\"><strong>'+esc(name)+'</strong><span class=\"cover-arrow\" aria-hidden=\"true\">\u2197</span></div></div><div class=\"card-body\"><h2 class=\"card-title\">'+esc(name)+' \u2014 Official 999MS</h2><div class=\"author-row\"><span class=\"avatar\">9M</span><span class=\"author-name\">999MS</span><span class=\"crown\" aria-label=\"Official\">\u265b</span><span class=\"verified\" aria-label=\"Verified\">\u2713</span><span class=\"sep\">\u00b7</span><span class=\"file-name\">'+esc(x.name)+'.lua</span></div><div class=\"card-meta\"><span class=\"meta-item\">'+svg('file')+'<span>'+loaderSize(x)+'</span></span><span class=\"meta-spacer\"></span><span class=\"updated\">Updated '+esc(date)+'</span></div><div class=\"card-rule\"></div></div>';\n" +
  "        var img=card.querySelector('img');if(img)img.addEventListener('error',function(){img.remove();card.querySelector('.cover').classList.remove('has-image')});card.addEventListener('click',function(){openDetail(x)});card.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();openDetail(x)}});return card}\n" +
  "      function render(){var q=(input.value||'').trim().toLowerCase(),list=all.filter(function(x){var nm=nameFor(x)+' '+x.name+' '+x.placeId;return nm.toLowerCase().indexOf(q)!==-1});count.textContent=String(list.length);countLabel.textContent=list.length===1?'script':'scripts';grid.innerHTML='';if(!list.length){grid.innerHTML='<div class=\"empty\"><strong>'+(all.length?'No scripts found':'No scripts published yet')+'</strong>'+(all.length?'Try another search.':'New scripts will appear here when published.')+'</div>';return}list.forEach(function(x,i){grid.appendChild(createCard(x,i))})}\n" +
  "      function openDetail(x){chosen=x;var g=games[x.placeId]||{},name=nameFor(x),cover=document.getElementById('detailCover');cover.querySelectorAll('img').forEach(function(n){n.remove()});if(g.icon){var im=document.createElement('img');im.src=g.icon;im.alt='';im.referrerPolicy='no-referrer';cover.appendChild(im)}document.getElementById('detailTitle').textContent=name+' \u2014 Official 999MS';document.getElementById('detailFile').textContent=x.name+'.lua';document.getElementById('detailExperience').textContent=name+' \u00b7 '+x.placeId;document.getElementById('detailUpdated').textContent=fmtDate(x.updatedAt);document.getElementById('detailSize').textContent=loaderSize(x);document.getElementById('detailCode').textContent='-- '+name+'\\n-- Source is protected. Use Copy loader to get the launch command.';dlg.showModal();document.body.classList.add('lock')}\n" +
  "      function closeDetail(){dlg.close();document.body.classList.remove('lock')}\n" +
  "      document.getElementById('closeDetail').addEventListener('click',closeDetail);dlg.addEventListener('click',function(e){if(e.target===dlg)closeDetail()});dlg.addEventListener('close',function(){document.body.classList.remove('lock')});\n" +
  "      function copyText(text,btn){var done=function(){var old=btn.textContent;btn.textContent='Copied \u2713';setTimeout(function(){btn.textContent=old},1400)};if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(done,function(){fallback()})}else fallback();function fallback(){var t=document.createElement('textarea');t.value=text;t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();try{document.execCommand('copy');done()}catch(e){}t.remove()}}\n" +
  "      document.getElementById('copyLoader').addEventListener('click',function(){if(!chosen)return;var text=loaderText(chosen);copyText(text,this)});\n" +
  "      document.getElementById('shareScript').addEventListener('click',function(){if(!chosen)return;var url=location.origin+'/scripts?script='+encodeURIComponent(chosen.name);if(navigator.share)navigator.share({title:nameFor(chosen)+' \u2014 999MS',url:url}).catch(function(){});else copyText(url,this)});\n" +
  "      input.addEventListener('input',render);searchWrap.addEventListener('click',function(){if(window.innerWidth<=700&&!searchWrap.classList.contains('open')){searchWrap.classList.add('open');input.focus()}});input.addEventListener('blur',function(){if(!input.value&&window.innerWidth<=700)searchWrap.classList.remove('open')});\n" +
  "      var mb=document.getElementById('menuBtn'),mm=document.getElementById('mobileMenu');mb.addEventListener('click',function(){var o=mm.classList.toggle('open');mb.setAttribute('aria-expanded',String(o))});document.addEventListener('keydown',function(e){if(e.key==='Escape'){mm.classList.remove('open');mb.setAttribute('aria-expanded','false')}});\n" +
  "      function load(){fetch('/api/scripts',{headers:{accept:'application/json'}}).then(function(r){if(!r.ok)throw new Error('api');return r.json()}).then(function(d){all=(d&&Array.isArray(d.items)?d.items:[]).filter(function(x){return x&&x.placeId&&x.name});render();var ids=[];all.forEach(function(x){if(ids.indexOf(x.placeId)===-1)ids.push(x.placeId)});if(!ids.length)return;return fetch('/api/games?ids='+ids.join(','),{headers:{accept:'application/json'}}).then(function(r){return r.ok?r.json():null}).then(function(m){if(m&&Array.isArray(m.games))m.games.forEach(function(g){if(g&&g.placeId)games[String(g.placeId)]=g});render()}).catch(function(){})}).catch(function(){grid.innerHTML='<div class=\"empty\"><strong>Could not load scripts</strong>Refresh the page to try again.</div>';count.textContent='\u2014';countLabel.textContent='scripts'})}\n" +
  "      load();\n" +
  "    })();\n" +
  "  </script>\n" +
  "</body>\n" +
  "</html>\n";
Object.assign(EMBEDDED_PAGES, { "/scripts": SCRIPTS_PAGE });
// END PAGE /scripts

// BEGIN PAGE /stats - generated from pages/stats.html; run `npm run pages` to refresh.
const STATS_PAGE =
  "<!DOCTYPE html>\n" +
  "<html lang=\"th\">\n" +
  "<head>\n" +
  "  <meta charset=\"UTF-8\" />\n" +
  "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, viewport-fit=cover\" />\n" +
  "  <meta name=\"robots\" content=\"noindex,nofollow\" />\n" +
  "  <title>999MS \u00b7 Stats</title>\n" +
  "  <meta name=\"theme-color\" content=\"#000000\" />\n" +
  "  <link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%230a0c14'/%3E%3Cpath d='M20 42c6-10 10-14 14-20M24 22h16v6h-7l7 14h-6l-4-8-5 8h-6l9-14h-4z' fill='%2338d6ff'/%3E%3C/svg%3E\" />\n" +
  "\n" +
  "  <!-- 1. Inter (UI) -->\n" +
  "  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n" +
  "  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n" +
  "  <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap\" rel=\"stylesheet\" />\n" +
  "\n" +
  "  <!-- 2. BubbledotICG-FinePos (Display - Dot-matrix) -->\n" +
  "  <link href=\"https://db.onlinewebfonts.com/c/8cb707a9b8a73f8a7403336b861c3074?family=BubbledotICG-FinePos\" rel=\"stylesheet\" />\n" +
  "\n" +
  "  <!-- 3. Font Awesome 6.5.2 -->\n" +
  "  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css\" integrity=\"sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\n" +
  "\n" +
  "  <style>\n" +
  "    /* ===== Variables ===== */\n" +
  "    :root {\n" +
  "      --bg: #000000;\n" +
  "      --text: #ffffff;\n" +
  "      --muted: #8e8e93;\n" +
  "      --pill-dark: #1a1a1a;\n" +
  "      --nav-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);\n" +
  "      \n" +
  "      /* \u0e1f\u0e2d\u0e19\u0e15\u0e4c Dot-matrix \u0e17\u0e31\u0e49\u0e07\u0e2b\u0e19\u0e49\u0e32 */\n" +
  "      --font-sans: \"BubbledotICG-FinePos\", \"Geist Pixel Circle\", monospace;\n" +
  "      --font-display: \"BubbledotICG-FinePos\", \"Geist Pixel Circle\", monospace;\n" +
  "    }\n" +
  "\n" +
  "    *, *::before, *::after {\n" +
  "      box-sizing: border-box;\n" +
  "      margin: 0;\n" +
  "      padding: 0;\n" +
  "    }\n" +
  "\n" +
  "    html { scroll-behavior: smooth; }\n" +
  "\n" +
  "    body {\n" +
  "      background: var(--bg);\n" +
  "      color: var(--text);\n" +
  "      font-family: var(--font-sans);\n" +
  "      -webkit-font-smoothing: antialiased;\n" +
  "      -moz-osx-font-smoothing: grayscale;\n" +
  "      overflow-x: hidden;\n" +
  "      letter-spacing: 0.02em;\n" +
  "    }\n" +
  "\n" +
  "    a { text-decoration: none; color: inherit; }\n" +
  "    button { font-family: inherit; border: none; background: none; cursor: pointer; }\n" +
  "    img { display: block; max-width: 100%; }\n" +
  "\n" +
  "    /* ===== Background ===== */\n" +
  "    .bg-wave {\n" +
  "      position: fixed; inset: 0; z-index: 0;\n" +
  "      background-color: #000; overflow: hidden;\n" +
  "    }\n" +
  "\n" +
  "    .bg-wave::before {\n" +
  "      content: \"\"; position: absolute; top: -50%; left: -50%;\n" +
  "      width: 200%; height: 200%;\n" +
  "      background: radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.12) 0%, transparent 50%),\n" +
  "                  radial-gradient(ellipse at 80% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 40%);\n" +
  "      filter: blur(80px);\n" +
  "      animation: waveMove1 20s ease-in-out infinite alternate;\n" +
  "    }\n" +
  "\n" +
  "    .bg-wave::after {\n" +
  "      content: \"\"; position: absolute; bottom: -50%; right: -50%;\n" +
  "      width: 150%; height: 150%;\n" +
  "      background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 60%);\n" +
  "      filter: blur(100px);\n" +
  "      animation: waveMove2 25s ease-in-out infinite alternate;\n" +
  "    }\n" +
  "\n" +
  "    .green-orb {\n" +
  "      position: absolute; border-radius: 50%;\n" +
  "      filter: blur(60px); z-index: 1; pointer-events: none;\n" +
  "    }\n" +
  "\n" +
  "    .orb-1 {\n" +
  "      width: 45vw; height: 45vw;\n" +
  "      background: radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, transparent 70%);\n" +
  "      top: -15%; right: -10%;\n" +
  "      animation: orbFloat1 15s ease-in-out infinite alternate;\n" +
  "    }\n" +
  "\n" +
  "    .orb-2 {\n" +
  "      width: 35vw; height: 35vw;\n" +
  "      background: radial-gradient(circle, rgba(34, 197, 94, 0.25) 0%, transparent 70%);\n" +
  "      bottom: 5%; left: -5%;\n" +
  "      animation: orbFloat2 18s ease-in-out infinite alternate;\n" +
  "    }\n" +
  "\n" +
  "    .orb-3 {\n" +
  "      width: 25vw; height: 25vw;\n" +
  "      background: radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%);\n" +
  "      top: 40%; left: 30%;\n" +
  "      animation: orbFloat3 12s ease-in-out infinite alternate;\n" +
  "    }\n" +
  "\n" +
  "    .bg-wave .noise {\n" +
  "      position: absolute; inset: 0; opacity: 0.15;\n" +
  "      background-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\");\n" +
  "      mix-blend-mode: overlay; pointer-events: none; z-index: 2;\n" +
  "    }\n" +
  "\n" +
  "    @keyframes waveMove1 {\n" +
  "      0% { transform: translate(0, 0) scale(1) rotate(0deg); }\n" +
  "      50% { transform: translate(10%, 15%) scale(1.1) rotate(10deg); }\n" +
  "      100% { transform: translate(-5%, 5%) scale(0.9) rotate(-5deg); }\n" +
  "    }\n" +
  "\n" +
  "    @keyframes waveMove2 {\n" +
  "      0% { transform: translate(0, 0) scale(1); opacity: 0.8; }\n" +
  "      50% { transform: translate(-15%, -10%) scale(1.2); opacity: 1; }\n" +
  "      100% { transform: translate(5%, -5%) scale(0.95); opacity: 0.7; }\n" +
  "    }\n" +
  "\n" +
  "    @keyframes orbFloat1 {\n" +
  "      0% { transform: translate(0, 0) scale(1); opacity: 0.4; }\n" +
  "      100% { transform: translate(-15%, 20%) scale(1.3); opacity: 0.8; }\n" +
  "    }\n" +
  "\n" +
  "    @keyframes orbFloat2 {\n" +
  "      0% { transform: translate(0, 0) scale(1); opacity: 0.3; }\n" +
  "      100% { transform: translate(20%, -15%) scale(1.4); opacity: 0.7; }\n" +
  "    }\n" +
  "\n" +
  "    @keyframes orbFloat3 {\n" +
  "      0% { transform: translate(0, 0) scale(1); opacity: 0.2; }\n" +
  "      100% { transform: translate(-10%, -20%) scale(1.5); opacity: 0.5; }\n" +
  "    }\n" +
  "\n" +
  "    /* ===== Page Layout ===== */\n" +
  "    .page {\n" +
  "      position: relative; z-index: 3;\n" +
  "      display: flex; flex-direction: column; align-items: center;\n" +
  "      min-height: 100vh; padding: 0 clamp(14px, 3vw, 32px) 80px;\n" +
  "    }\n" +
  "\n" +
  "    /* ===== Header ===== */\n" +
  "    .site-header {\n" +
  "      width: 100%; max-width: 900px;\n" +
  "      display: flex; align-items: center; justify-content: center;\n" +
  "      position: sticky; top: 20px; z-index: 50; margin-bottom: 80px;\n" +
  "    }\n" +
  "\n" +
  "    .nav-pill {\n" +
  "      display: flex; align-items: center; justify-content: space-between;\n" +
  "      width: 100%; height: 64px; padding: 0 8px 0 16px;\n" +
  "      border-radius: 999px; background: rgba(10, 10, 12, 0.4);\n" +
  "      backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);\n" +
  "      border: 1px solid rgba(255, 255, 255, 0.1);\n" +
  "      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);\n" +
  "    }\n" +
  "\n" +
  "    .brand {\n" +
  "      flex-shrink: 0; display: grid; place-items: center;\n" +
  "      width: 44px; height: 44px; border-radius: 50%;\n" +
  "      background: #fff; overflow: hidden;\n" +
  "      transition: transform 0.25s ease;\n" +
  "      box-shadow: 0 0 15px rgba(255,255,255,0.3);\n" +
  "    }\n" +
  "\n" +
  "    .brand:hover { transform: scale(1.04); }\n" +
  "    .brand img { width: 72%; height: 72%; object-fit: contain; }\n" +
  "\n" +
  "    .nav-links { display: flex; align-items: center; gap: clamp(16px, 2.5vw, 32px); }\n" +
  "    .nav-link { font-size: 14px; font-weight: 500; color: var(--muted); transition: color 0.2s ease; }\n" +
  "    .nav-link:hover, .nav-link.is-active { color: #fff; }\n" +
  "\n" +
  "    .sign-in {\n" +
  "      display: inline-flex; align-items: center; justify-content: center;\n" +
  "      height: 48px; padding: 0 24px; border-radius: 999px;\n" +
  "      background: #fff; color: #000; font-size: 14px; font-weight: 600;\n" +
  "      transition: transform 0.2s ease, opacity 0.2s, box-shadow 0.2s;\n" +
  "    }\n" +
  "\n" +
  "    .sign-in:hover { transform: scale(1.02); box-shadow: 0 0 20px rgba(255,255,255,0.4); }\n" +
  "\n" +
  "    .burger {\n" +
  "      display: none; flex-direction: column; align-items: center; justify-content: center;\n" +
  "      gap: 5px; width: 48px; height: 48px; border-radius: 50%;\n" +
  "      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);\n" +
  "    }\n" +
  "    .burger span {\n" +
  "      display: block; width: 18px; height: 1.5px;\n" +
  "      background: #fff; border-radius: 2px;\n" +
  "      transition: transform 0.25s ease, background 0.25s ease;\n" +
  "    }\n" +
  "\n" +
  "    /* ===== Hero Section ===== */\n" +
  "    .hero {\n" +
  "      width: 100%; max-width: 900px;\n" +
  "      display: flex; flex-direction: column; align-items: center;\n" +
  "      text-align: center; padding: 40px 0 100px;\n" +
  "    }\n" +
  "\n" +
  "    /* =========================================\n" +
  "       HEADLINE: \u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e2a\u0e38\u0e48\u0e21\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07 \u0e44\u0e01\u0e25\u0e46 \u0e0a\u0e49\u0e32\u0e46\n" +
  "       ========================================= */\n" +
  "    .headline {\n" +
  "      display: flex; align-items: center; justify-content: center;\n" +
  "      flex-wrap: wrap; gap: 0.05em;\n" +
  "      font-weight: 400; font-size: clamp(48px, 9vw, 110px);\n" +
  "      letter-spacing: -0.02em; line-height: 1.1;\n" +
  "      margin-bottom: 24px; perspective: 1000px;\n" +
  "      min-height: 1.2em;\n" +
  "    }\n" +
  "\n" +
  "    .char {\n" +
  "      display: inline-block;\n" +
  "      background: linear-gradient(180deg, #ffffff 20%, #a0a0a0 100%);\n" +
  "      -webkit-background-clip: text; background-clip: text;\n" +
  "      color: transparent;\n" +
  "      filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.2));\n" +
  "      opacity: 0; visibility: hidden; /* \u0e0b\u0e48\u0e2d\u0e19\u0e44\u0e27\u0e49\u0e23\u0e2d\u0e04\u0e34\u0e27 */\n" +
  "    }\n" +
  "\n" +
  "    .char.pop-in {\n" +
  "      visibility: visible;\n" +
  "      animation: bouncyRandomPop 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n" +
  "      animation-delay: var(--delay);\n" +
  "    }\n" +
  "\n" +
  "    @keyframes bouncyRandomPop {\n" +
  "      0% {\n" +
  "        opacity: 0;\n" +
  "        transform: translate(var(--tx), var(--ty)) scale(0.2) rotate(var(--tr));\n" +
  "        filter: blur(15px);\n" +
  "      }\n" +
  "      60% {\n" +
  "        opacity: 1;\n" +
  "        transform: translate(0, 0) scale(1.1) rotate(0deg);\n" +
  "        filter: blur(0);\n" +
  "      }\n" +
  "      80% {\n" +
  "        transform: translate(0, 0) scale(0.95) rotate(0deg);\n" +
  "      }\n" +
  "      100% {\n" +
  "        opacity: 1;\n" +
  "        transform: translate(0, 0) scale(1) rotate(0deg);\n" +
  "        filter: blur(0);\n" +
  "      }\n" +
  "    }\n" +
  "\n" +
  "    .char.shimmer-ready::after {\n" +
  "      content: attr(data-char);\n" +
  "      position: absolute; top: 0; left: 0; width: 100%; height: 100%;\n" +
  "      background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%);\n" +
  "      background-size: 200% 100%;\n" +
  "      -webkit-background-clip: text; background-clip: text;\n" +
  "      color: transparent; animation: shimmer 3s infinite linear;\n" +
  "      z-index: 1;\n" +
  "    }\n" +
  "\n" +
  "    @keyframes shimmer {\n" +
  "      0% { background-position: -200% 0; }\n" +
  "      100% { background-position: 200% 0; }\n" +
  "    }\n" +
  "\n" +
  "    /* =========================================\n" +
  "       Subhead & CTA (\u0e25\u0e1a Discord \u0e2d\u0e2d\u0e01\u0e41\u0e25\u0e49\u0e27)\n" +
  "       ========================================= */\n" +
  "    .subhead {\n" +
  "      max-width: 650px; font-size: clamp(16px, 2vw, 18px);\n" +
  "      line-height: 1.6; color: #ccc; margin-bottom: 40px;\n" +
  "    }\n" +
  "\n" +
  "    .cta-group {\n" +
  "      display: flex; justify-content: center;\n" +
  "      width: 100%; max-width: 500px; margin-bottom: 32px;\n" +
  "    }\n" +
  "\n" +
  "    .cta-primary {\n" +
  "      display: flex; align-items: center; justify-content: center;\n" +
  "      /* \u0e1b\u0e23\u0e31\u0e1a\u0e43\u0e2b\u0e49\u0e01\u0e27\u0e49\u0e32\u0e07\u0e02\u0e36\u0e49\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e49\u0e14\u0e39\u0e2a\u0e21\u0e14\u0e38\u0e25\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e44\u0e21\u0e48\u0e21\u0e35\u0e1b\u0e38\u0e48\u0e21 Discord */\n" +
  "      width: 100%; max-width: 280px; padding: 16px 24px;\n" +
  "      border-radius: 999px; background: #fff; color: #000;\n" +
  "      font-size: 15px; font-weight: 600;\n" +
  "      box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,0.2);\n" +
  "      transition: transform 0.25s ease, box-shadow 0.25s ease;\n" +
  "    }\n" +
  "\n" +
  "    .cta-primary:hover {\n" +
  "      transform: translateY(-2px) scale(1.01);\n" +
  "      box-shadow: 0 0 0 1px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.5);\n" +
  "    }\n" +
  "\n" +
  "    /* =========================================\n" +
  "       Live Status\n" +
  "       ========================================= */\n" +
  "    .live-status {\n" +
  "      display: flex; align-items: center; gap: 10px;\n" +
  "      font-size: 12px; font-weight: 600; letter-spacing: 0.5px; color: #22c55e;\n" +
  "      text-shadow: 0 0 10px rgba(34, 197, 94, 0.5);\n" +
  "    }\n" +
  "\n" +
  "    .status-dot {\n" +
  "      position: relative; width: 10px; height: 10px;\n" +
  "      background: #22c55e; border-radius: 50%;\n" +
  "      box-shadow: 0 0 10px #22c55e;\n" +
  "    }\n" +
  "\n" +
  "    .status-dot::after {\n" +
  "      content: \"\"; position: absolute; top: 50%; left: 50%;\n" +
  "      width: 100%; height: 100%; background: #22c55e;\n" +
  "      border-radius: 50%; transform: translate(-50%, -50%);\n" +
  "      animation: pulseRing 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;\n" +
  "      z-index: -1;\n" +
  "    }\n" +
  "\n" +
  "    @keyframes pulseRing {\n" +
  "      0% { width: 100%; height: 100%; opacity: 0.8; }\n" +
  "      100% { width: 300%; height: 300%; opacity: 0; }\n" +
  "    }\n" +
  "\n" +
  "    /* ===== Stats Section ===== */\n" +
  "    .stats-section {\n" +
  "      width: 100%; max-width: 1000px; padding: 60px 20px;\n" +
  "      margin: 0 auto; border-top: 1px solid rgba(255,255,255,0.1);\n" +
  "    }\n" +
  "\n" +
  "    .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }\n" +
  "\n" +
  "    .stat {\n" +
  "      display: flex; flex-direction: column; align-items: center;\n" +
  "      text-align: center; gap: 6px;\n" +
  "      background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255,255,255,0.1);\n" +
  "      padding: 24px 16px; border-radius: 16px;\n" +
  "      backdrop-filter: blur(10px); transition: background 0.3s, border-color 0.3s;\n" +
  "    }\n" +
  "\n" +
  "    .stat:hover { background: rgba(255, 255, 255, 0.05); border-color: rgba(255,255,255,0.3); }\n" +
  "\n" +
  "    .stat-icon {\n" +
  "      font-size: clamp(22px, 3vw, 33px); color: #fff; line-height: 1;\n" +
  "      text-shadow: 0 0 10px rgba(255,255,255,0.5);\n" +
  "    }\n" +
  "\n" +
  "    .stat-value {\n" +
  "      font-size: clamp(18px, 2.2vw, 26px); font-weight: 500; color: #fff;\n" +
  "      font-variant-numeric: tabular-nums;\n" +
  "    }\n" +
  "\n" +
  "    .stat-label { font-size: 12px; color: #aaa; }\n" +
  "\n" +
  "    /* =========================================\n" +
  "       Elements \u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b: \u0e2a\u0e38\u0e48\u0e21\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19\u0e2b\u0e21\u0e14!\n" +
  "       ========================================= */\n" +
  "    .pop-element {\n" +
  "      opacity: 0;\n" +
  "      visibility: hidden;\n" +
  "      transform: translate(var(--tx), var(--ty)) scale(0.5) rotate(var(--tr));\n" +
  "      filter: blur(10px);\n" +
  "    }\n" +
  "\n" +
  "    .pop-element.pop-in {\n" +
  "      visibility: visible;\n" +
  "      animation: bouncyRandomPop 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n" +
  "      animation-delay: var(--delay);\n" +
  "    }\n" +
  "\n" +
  "    /* ===== Mobile Responsive ===== */\n" +
  "    @media (max-width: 900px) {\n" +
  "      .nav-pill { display: none; }\n" +
  "      .burger { display: flex; }\n" +
  "      .site-header { justify-content: space-between; padding: 0 10px; }\n" +
  "    }\n" +
  "\n" +
  "    @media (max-width: 720px) {\n" +
  "      .stats { grid-template-columns: repeat(2, 1fr); }\n" +
  "    }\n" +
  "  \n" +
  "    /* =========================================\n" +
  "       STATS \u2014 dashboard skin on the HUB theme\n" +
  "       ========================================= */\n" +
  "    :root {\n" +
  "      --mint: #22c55e;\n" +
  "      --danger: #ff6b81;\n" +
  "      --amber: #ffc65c;\n" +
  "      --mono: ui-monospace, SFMono-Regular, Menlo, Consolas, \"Liberation Mono\", monospace;\n" +
  "      --line: rgba(255, 255, 255, 0.1);\n" +
  "      --line-2: rgba(255, 255, 255, 0.18);\n" +
  "      --panel: rgba(0, 0, 0, 0.4);\n" +
  "      --shell: 1180px;\n" +
  "    }\n" +
  "\n" +
  "    .mono { font-family: var(--mono); }\n" +
  "    .hide { display: none; }\n" +
  "\n" +
  "    .page { padding-bottom: 80px; }\n" +
  "\n" +
  "    /* shell: sidebar + content */\n" +
  "    .shell {\n" +
  "      position: relative; z-index: 3; display: flex; gap: 20px;\n" +
  "      width: 100%; max-width: var(--shell); align-items: flex-start;\n" +
  "    }\n" +
  "    .sidebar {\n" +
  "      width: 240px; flex-shrink: 0; position: sticky; top: 20px;\n" +
  "      display: flex; flex-direction: column; gap: 16px; padding: 20px;\n" +
  "      border-radius: 20px; background: rgba(10, 10, 12, 0.45);\n" +
  "      border: 1px solid var(--line);\n" +
  "      backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);\n" +
  "      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);\n" +
  "    }\n" +
  "    .side-brand { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 15px; }\n" +
  "    .side-brand .mark {\n" +
  "      width: 38px; height: 38px; border-radius: 50%; background: #fff;\n" +
  "      display: grid; place-items: center; flex-shrink: 0; box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);\n" +
  "    }\n" +
  "    .side-brand small { display: block; font-size: 10px; font-weight: 500; color: var(--muted); letter-spacing: 0.08em; }\n" +
  "    .side-nav { display: flex; flex-direction: column; gap: 4px; }\n" +
  "    .side-label { font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: #6b6b70; padding: 0 12px; }\n" +
  "    .side-link {\n" +
  "      display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 12px;\n" +
  "      color: var(--muted); font-size: 13px; transition: background 0.2s ease, color 0.2s ease;\n" +
  "    }\n" +
  "    .side-link:hover { background: rgba(255, 255, 255, 0.07); color: #fff; }\n" +
  "    .side-link.is-active { background: rgba(255, 255, 255, 0.11); color: #fff; }\n" +
  "    .side-link i { width: 14px; text-align: center; font-size: 12px; }\n" +
  "    .side-sep { height: 1px; background: var(--line); margin: 4px 0; }\n" +
  "    .side-foot { margin-top: 8px; display: flex; flex-direction: column; gap: 8px; }\n" +
  "\n" +
  "    .content { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 20px; }\n" +
  "\n" +
  "    /* page head */\n" +
  "    .head-row { display: flex; align-items: flex-end; gap: 16px; flex-wrap: wrap; }\n" +
  "    .head-row h2 { font-size: clamp(28px, 4vw, 40px); font-weight: 600; margin: 0; letter-spacing: -0.01em;\n" +
  "      background: linear-gradient(180deg, #fff 20%, #a0a0a0 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }\n" +
  "    .head-row p { margin: 6px 0 0; color: var(--muted); font-size: 0.86rem; }\n" +
  "    .head-row .spacer { margin-left: auto; }\n" +
  "\n" +
  "    /* cards */\n" +
  "    .card {\n" +
  "      background: var(--panel); border: 1px solid var(--line); border-radius: 18px; overflow: hidden;\n" +
  "      backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);\n" +
  "    }\n" +
  "    .card-h { display: flex; align-items: center; gap: 12px; padding: 16px 20px; border-bottom: 1px solid var(--line); }\n" +
  "    .card-h h3 { font-size: 0.95rem; font-weight: 600; margin: 0; }\n" +
  "    .card-h .spacer { margin-left: auto; }\n" +
  "    .card-b { padding: 18px 20px; }\n" +
  "    .card-sub { font-size: 0.76rem; color: var(--muted); }\n" +
  "\n" +
  "    /* stat cards (LuaSync style: label above, big value below) */\n" +
  "    .tiles { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }\n" +
  "    .tile {\n" +
  "      background: var(--panel); border: 1px solid var(--line); border-radius: 16px; padding: 18px 18px 16px;\n" +
  "      backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);\n" +
  "      transition: border-color 0.3s ease, background 0.3s ease;\n" +
  "    }\n" +
  "    .tile:hover { border-color: rgba(255, 255, 255, 0.22); }\n" +
  "    .tile .k { display: flex; align-items: center; gap: 8px; font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }\n" +
  "    .tile .v { font-size: clamp(30px, 4vw, 44px); font-weight: 600; line-height: 1.1; margin-top: 10px; font-variant-numeric: tabular-nums; }\n" +
  "    .tile .v small { font-size: 0.42em; color: var(--muted); font-weight: 500; margin-left: 4px; }\n" +
  "    .tile .s { font-size: 0.74rem; color: var(--muted); margin-top: 4px; }\n" +
  "    .tile .bar { margin-top: 12px; height: 3px; border-radius: 999px; background: rgba(255, 255, 255, 0.08); overflow: hidden; }\n" +
  "    .tile .bar i { display: block; height: 100%; border-radius: 999px; background: #fff; box-shadow: 0 0 12px rgba(255, 255, 255, 0.6); }\n" +
  "\n" +
  "    /* stock-style chart */\n" +
  "    .chart-head { display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; }\n" +
  "    .chart-head .big { font-size: clamp(34px, 5vw, 52px); font-weight: 600; line-height: 1; font-variant-numeric: tabular-nums; }\n" +
  "    .chart-head .cap { font-size: 0.78rem; color: var(--muted); margin-left: auto; }\n" +
  "\n" +
  "    .ranges { display: flex; gap: 4px; padding: 3px; border-radius: 999px; background: rgba(255, 255, 255, 0.05); border: 1px solid var(--line); }\n" +
  "    .range {\n" +
  "      border: 0; background: transparent; color: var(--muted); font-family: inherit;\n" +
  "      font-size: 0.72rem; font-weight: 600; padding: 5px 12px; border-radius: 999px; cursor: pointer;\n" +
  "      transition: color 0.2s ease, background 0.2s ease;\n" +
  "    }\n" +
  "    .range:hover { color: #fff; }\n" +
  "    .range.is-active { background: #fff; color: #000; }\n" +
  "\n" +
  "    .delta {\n" +
  "      display: inline-flex; align-items: center; gap: 4px; font-size: 0.76rem; font-weight: 600;\n" +
  "      padding: 3px 10px; border-radius: 999px; border: 1px solid var(--line);\n" +
  "      background: rgba(255, 255, 255, 0.05); color: var(--muted);\n" +
  "    }\n" +
  "    .delta.up { border-color: rgba(34, 197, 94, 0.4); background: rgba(34, 197, 94, 0.12); color: #86efac; }\n" +
  "    .delta.down { border-color: rgba(255, 107, 129, 0.4); background: rgba(255, 107, 129, 0.12); color: #ffb3bf; }\n" +
  "\n" +
  "    .chart-wrap { position: relative; margin-top: 18px; }\n" +
  "    .chart { position: relative; height: 280px; }\n" +
  "    .chart svg { display: block; width: 100%; height: 100%; }\n" +
  "    .chart-empty { padding: 60px 0; text-align: center; color: var(--muted); font-size: 0.86rem; height: 100%; }\n" +
  "\n" +
  "    .grid-line { stroke: rgba(255, 255, 255, 0.07); stroke-width: 1; }\n" +
  "    .grid-text { fill: #6b6b70; font-size: 10px; font-family: var(--mono); }\n" +
  "    .axis-text { fill: #6b6b70; font-size: 10px; font-family: var(--mono); }\n" +
  "    .spark-area { fill: url(#areaFill); }\n" +
  "    .spark-line {\n" +
  "      fill: none; stroke: #fff; stroke-width: 2; stroke-linejoin: round; stroke-linecap: round;\n" +
  "      filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.35));\n" +
  "    }\n" +
  "    .spark-dot { fill: #22c55e; stroke: #000; stroke-width: 2; }\n" +
  "    .spark-cross { stroke: rgba(255, 255, 255, 0.4); stroke-width: 1; stroke-dasharray: 3 3; }\n" +
  "\n" +
  "    .tip {\n" +
  "      position: absolute; z-index: 4; pointer-events: none; opacity: 0;\n" +
  "      transform: translate(-50%, -100%); transition: opacity 0.12s ease;\n" +
  "      background: rgba(10, 10, 12, 0.95); border: 1px solid var(--line-2); border-radius: 10px;\n" +
  "      padding: 8px 10px; font-size: 0.74rem; white-space: nowrap;\n" +
  "      box-shadow: 0 12px 30px -12px #000; backdrop-filter: blur(8px);\n" +
  "    }\n" +
  "    .tip b { color: #fff; font-weight: 600; }\n" +
  "    .tip span { color: var(--muted); }\n" +
  "\n" +
  "    .chart-foot { display: flex; gap: 18px; flex-wrap: wrap; margin-top: 14px; font-size: 0.74rem; color: var(--muted); }\n" +
  "    .chart-foot b { color: #d7d7db; font-weight: 600; }\n" +
  "\n" +
  "    /* table */\n" +
  "    table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }\n" +
  "    th {\n" +
  "      text-align: left; font-size: 0.66rem; letter-spacing: 0.14em; text-transform: uppercase;\n" +
  "      color: var(--muted); font-weight: 600; padding: 10px 12px; border-bottom: 1px solid var(--line);\n" +
  "    }\n" +
  "    td { padding: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); vertical-align: middle; color: #d7d7db; }\n" +
  "    tr:last-child td { border-bottom: 0; }\n" +
  "    tbody tr:hover { background: rgba(255, 255, 255, 0.03); }\n" +
  "    .ident { display: flex; flex-direction: column; gap: 2px; }\n" +
  "    .ident b { font-weight: 600; font-size: 0.84rem; }\n" +
  "    .ident span { font-size: 0.72rem; color: var(--muted); font-family: var(--mono); }\n" +
  "    .empty { padding: 36px 18px; text-align: center; color: var(--muted); font-size: 0.86rem; }\n" +
  "\n" +
  "    /* buttons / pills / gate */\n" +
  "    .btn {\n" +
  "      display: inline-flex; align-items: center; justify-content: center; gap: 8px;\n" +
  "      padding: 9px 16px; border-radius: 999px;\n" +
  "      border: 1px solid var(--line-2); background: rgba(255, 255, 255, 0.06); color: #fff;\n" +
  "      font-family: inherit; font-size: 0.82rem; font-weight: 600; cursor: pointer;\n" +
  "      transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;\n" +
  "      white-space: nowrap;\n" +
  "    }\n" +
  "    .btn:hover { background: rgba(255, 255, 255, 0.14); border-color: rgba(255, 255, 255, 0.4); }\n" +
  "    .btn:disabled { opacity: 0.45; cursor: not-allowed; }\n" +
  "    .btn-primary { background: #fff; color: #000; border-color: #fff; box-shadow: 0 0 20px rgba(255, 255, 255, 0.18); }\n" +
  "    .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 0 32px rgba(255, 255, 255, 0.42); }\n" +
  "    .btn-sm { padding: 6px 12px; font-size: 0.76rem; width: 100%; }\n" +
  "    .btn-ghost { background: transparent; }\n" +
  "    .rotate { animation: spin 1s linear infinite; }\n" +
  "    @keyframes spin { to { transform: rotate(360deg); } }\n" +
  "\n" +
  "    .pill {\n" +
  "      display: inline-flex; align-items: center; gap: 6px; font-size: 0.7rem; color: var(--muted);\n" +
  "      border: 1px solid var(--line); border-radius: 999px; padding: 4px 10px; background: rgba(255, 255, 255, 0.04);\n" +
  "      white-space: nowrap;\n" +
  "    }\n" +
  "    .tag {\n" +
  "      display: inline-flex; align-items: center; gap: 6px; font-size: 0.72rem; font-weight: 600;\n" +
  "      padding: 3px 10px; border-radius: 999px; border: 1px solid rgba(34, 197, 94, 0.3);\n" +
  "      background: rgba(34, 197, 94, 0.1); color: #86efac; white-space: nowrap;\n" +
  "    }\n" +
  "    .tag.warn { border-color: rgba(255, 198, 92, 0.35); background: rgba(255, 198, 92, 0.1); color: #ffd899; }\n" +
  "    .tag.bad { border-color: rgba(255, 107, 129, 0.35); background: rgba(255, 107, 129, 0.12); color: #ffb3bf; }\n" +
  "    .tag.mute { border-color: var(--line); background: rgba(255, 255, 255, 0.04); color: var(--muted); }\n" +
  "\n" +
  "    .notice {\n" +
  "      border: 1px solid rgba(255, 198, 92, 0.35); background: rgba(255, 198, 92, 0.08);\n" +
  "      color: #ffd899; border-radius: 14px; padding: 12px 16px; font-size: 0.82rem;\n" +
  "    }\n" +
  "\n" +
  "    #gate {\n" +
  "      position: fixed; inset: 0; z-index: 100; display: grid; place-items: center;\n" +
  "      background: rgba(0, 0, 0, 0.86); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); padding: 20px;\n" +
  "    }\n" +
  "    #gate.hide { display: none; }\n" +
  "    .gate-card {\n" +
  "      width: min(420px, 100%); border: 1px solid var(--line-2); border-radius: 20px; padding: 30px;\n" +
  "      background: linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02));\n" +
  "      box-shadow: 0 40px 90px -40px #000; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);\n" +
  "    }\n" +
  "    .gate-card h1 { font-size: 1.4rem; font-weight: 600; margin: 0 0 8px; }\n" +
  "    .gate-card p { color: var(--muted); font-size: 0.86rem; margin: 0 0 22px; line-height: 1.6; }\n" +
  "    .gate-card .btn { width: 100%; margin-top: 14px; padding: 12px; }\n" +
  "    .err { color: #ffb3bf; font-size: 0.82rem; min-height: 20px; margin-top: 10px; }\n" +
  "    .brand-r { display: flex; align-items: center; gap: 10px; margin-bottom: 22px; font-weight: 700; }\n" +
  "    .mark { width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center; background: #fff; flex-shrink: 0; box-shadow: 0 0 15px rgba(255, 255, 255, 0.3); }\n" +
  "    label { display: block; font-size: 0.74rem; letter-spacing: 0.08em; color: var(--muted); margin-bottom: 6px; }\n" +
  "    input {\n" +
  "      width: 100%; font-family: inherit; font-size: 0.85rem; color: #fff;\n" +
  "      background: rgba(0, 0, 0, 0.45); border: 1px solid var(--line-2); border-radius: 12px;\n" +
  "      padding: 10px 13px; outline: none; transition: border-color 0.2s ease, box-shadow 0.2s ease;\n" +
  "    }\n" +
  "    input:focus { border-color: rgba(255, 255, 255, 0.5); box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.06); }\n" +
  "    input::placeholder { color: #5d6580; }\n" +
  "\n" +
  "    @media (max-width: 1000px) {\n" +
  "      .shell { flex-direction: column; }\n" +
  "      .sidebar { width: 100%; position: static; flex-direction: row; flex-wrap: wrap; align-items: center; gap: 10px; }\n" +
  "      .side-nav { flex-direction: row; flex-wrap: wrap; }\n" +
  "      .side-label { display: none; }\n" +
  "      .side-foot { margin-left: auto; flex-direction: row; }\n" +
  "      .tiles { grid-template-columns: repeat(2, 1fr); }\n" +
  "    }\n" +
  "    @media (max-width: 640px) {\n" +
  "      .tiles { grid-template-columns: 1fr; }\n" +
  "      .chart { height: 210px; }\n" +
  "      .ranges { order: 3; width: 100%; justify-content: center; }\n" +
  "    }\n" +
  "    @media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }\n" +
  "  </style>\n" +
  "</head>\n" +
  "<body>\n" +
  "  <!-- Background -->\n" +
  "  <div class=\"bg-wave\">\n" +
  "    <div class=\"green-orb orb-1\"></div>\n" +
  "    <div class=\"green-orb orb-2\"></div>\n" +
  "    <div class=\"green-orb orb-3\"></div>\n" +
  "    <div class=\"noise\"></div>\n" +
  "  </div>\n" +
  "\n" +
  "  <!-- \u2500\u2500 login gate \u2500\u2500 -->\n" +
  "  <div id=\"gate\">\n" +
  "    <form class=\"gate-card\" id=\"gateForm\" autocomplete=\"off\">\n" +
  "      <div class=\"brand-r\">\n" +
  "        <span class=\"mark\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\"><path d=\"M5 19c3.6-6.2 6.2-9.6 9-14M8 5h9v3.4h-4.2L18 19h-3.6l-2.2-4.6L8.6 19H5l4.6-7.2H6.4z\" fill=\"#000\"/></svg></span>\n" +
  "        <span>999MS \u00b7 Stats</span>\n" +
  "      </div>\n" +
  "      <h1>\u0e2a\u0e16\u0e34\u0e15\u0e34\u0e01\u0e32\u0e23\u0e23\u0e31\u0e19</h1>\n" +
  "      <p>\u0e43\u0e0a\u0e49 <span class=\"mono\">ADMIN_TOKEN</span> \u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e2b\u0e19\u0e49\u0e32 Control \u2014 \u0e23\u0e30\u0e1a\u0e1a\u0e40\u0e01\u0e47\u0e1a\u0e44\u0e27\u0e49\u0e43\u0e19\u0e41\u0e17\u0e47\u0e1a\u0e19\u0e35\u0e49\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19 (\u0e44\u0e21\u0e48\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e25\u0e07\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07)</p>\n" +
  "      <label for=\"token\">Admin token</label>\n" +
  "      <input id=\"token\" type=\"password\" placeholder=\"\u0e27\u0e32\u0e07 token \u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\" spellcheck=\"false\" />\n" +
  "      <button class=\"btn btn-primary\" id=\"loginBtn\" type=\"submit\">\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a</button>\n" +
  "      <div class=\"err\" id=\"gateErr\"></div>\n" +
  "    </form>\n" +
  "  </div>\n" +
  "\n" +
  "  <div class=\"page\">\n" +
  "    <div class=\"shell\">\n" +
  "      <!-- \u2500\u2500 sidebar \u2500\u2500 -->\n" +
  "      <aside class=\"sidebar pop-element\">\n" +
  "        <div class=\"side-brand\">\n" +
  "          <span class=\"mark\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\"><path d=\"M5 19c3.6-6.2 6.2-9.6 9-14M8 5h9v3.4h-4.2L18 19h-3.6l-2.2-4.6L8.6 19H5l4.6-7.2H6.4z\" fill=\"#000\"/></svg></span>\n" +
  "          <span>999MS<small>OFFICIAL SERVICE</small></span>\n" +
  "        </div>\n" +
  "\n" +
  "        <div class=\"side-sep\"></div>\n" +
  "\n" +
  "        <nav class=\"side-nav\">\n" +
  "          <div class=\"side-label\">Overview</div>\n" +
  "          <a class=\"side-link is-active\" href=\"#overview\"><i class=\"fa-solid fa-gauge-high\"></i> \u0e20\u0e32\u0e1e\u0e23\u0e27\u0e21</a>\n" +
  "          <a class=\"side-link\" href=\"#monthly\"><i class=\"fa-solid fa-chart-column\"></i> \u0e01\u0e32\u0e23\u0e23\u0e31\u0e19\u0e23\u0e32\u0e22\u0e40\u0e14\u0e37\u0e2d\u0e19</a>\n" +
  "          <a class=\"side-link\" href=\"#recent\"><i class=\"fa-solid fa-list\"></i> \u0e01\u0e32\u0e23\u0e23\u0e31\u0e19\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14</a>\n" +
  "        </nav>\n" +
  "\n" +
  "        <div class=\"side-sep\"></div>\n" +
  "\n" +
  "        <nav class=\"side-nav\">\n" +
  "          <div class=\"side-label\">Console</div>\n" +
  "          <a class=\"side-link\" href=\"/control\"><i class=\"fa-solid fa-sliders\"></i> \u0e2b\u0e19\u0e49\u0e32 Control</a>\n" +
  "          <a class=\"side-link\" href=\"/\"><i class=\"fa-solid fa-house\"></i> \u0e2b\u0e19\u0e49\u0e32\u0e41\u0e23\u0e01</a>\n" +
  "        </nav>\n" +
  "\n" +
  "        <div class=\"side-foot\">\n" +
  "          <span class=\"pill\"><span id=\"sideStatus\">\u0e23\u0e2d\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25</span></span>\n" +
  "          <button class=\"btn btn-sm btn-ghost\" id=\"logoutBtn\" type=\"button\">\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e23\u0e30\u0e1a\u0e1a</button>\n" +
  "        </div>\n" +
  "      </aside>\n" +
  "\n" +
  "      <!-- \u2500\u2500 content \u2500\u2500 -->\n" +
  "      <main class=\"content\">\n" +
  "        <div class=\"head-row pop-element\" id=\"overview\">\n" +
  "          <div>\n" +
  "            <h2>Overview</h2>\n" +
  "            <p>\u0e2a\u0e16\u0e34\u0e15\u0e34\u0e01\u0e32\u0e23\u0e23\u0e31\u0e19\u0e08\u0e32\u0e01 Supabase \u2014 \u0e19\u0e31\u0e1a 1 \u0e04\u0e23\u0e31\u0e49\u0e07\u0e15\u0e48\u0e2d HWID + job \u00b7 HWID \u0e40\u0e14\u0e34\u0e21 job \u0e40\u0e14\u0e34\u0e21\u0e44\u0e21\u0e48\u0e19\u0e31\u0e1a\u0e0b\u0e49\u0e33 \u00b7 \u0e41\u0e16\u0e27\u0e17\u0e35\u0e48\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e41\u0e25\u0e49\u0e27\u0e08\u0e30\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01 update</p>\n" +
  "          </div>\n" +
  "          <span class=\"spacer\"></span>\n" +
  "          <span class=\"pill mono\" id=\"updated\">\u2014</span>\n" +
  "          <button class=\"btn\" id=\"refreshBtn\" type=\"button\">\n" +
  "            <svg id=\"refreshIcon\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M21 12a9 9 0 1 1-2.6-6.4\"/><path d=\"M21 3v6h-6\"/></svg>\n" +
  "            \u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a\n" +
  "          </button>\n" +
  "        </div>\n" +
  "\n" +
  "        <div id=\"noticeHost\"></div>\n" +
  "\n" +
  "        <section class=\"tiles pop-element\">\n" +
  "          <div class=\"tile\">\n" +
  "            <div class=\"k\"><i class=\"fa-solid fa-play\"></i> Execution</div>\n" +
  "            <div class=\"v\" id=\"statRuns\">0</div>\n" +
  "            <div class=\"s\" id=\"statRunsSub\">\u0e19\u0e31\u0e1a 1 \u0e04\u0e23\u0e31\u0e49\u0e07\u0e15\u0e48\u0e2d HWID + job (HWID \u0e40\u0e14\u0e34\u0e21 job \u0e40\u0e14\u0e34\u0e21 = \u0e44\u0e21\u0e48\u0e19\u0e31\u0e1a\u0e0b\u0e49\u0e33)</div>\n" +
  "            <div class=\"bar\"><i id=\"statRunsBar\" style=\"width:0%\"></i></div>\n" +
  "          </div>\n" +
  "          <div class=\"tile\">\n" +
  "            <div class=\"k\"><i class=\"fa-solid fa-key\"></i> Keys</div>\n" +
  "            <div class=\"v\" id=\"statLinks\">0</div>\n" +
  "            <div class=\"s\" id=\"statLinksSub\">\u0e25\u0e34\u0e07\u0e01\u0e4c\u0e17\u0e35\u0e48\u0e2d\u0e2d\u0e01\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14</div>\n" +
  "            <div class=\"bar\"><i id=\"statLinksBar\" style=\"width:0%\"></i></div>\n" +
  "          </div>\n" +
  "          <div class=\"tile\">\n" +
  "            <div class=\"k\"><i class=\"fa-solid fa-code\"></i> Scripts</div>\n" +
  "            <div class=\"v\" id=\"statScripts\">0</div>\n" +
  "            <div class=\"s\" id=\"statScriptsSub\">\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e04\u0e22\u0e23\u0e31\u0e19</div>\n" +
  "          </div>\n" +
  "          <div class=\"tile\">\n" +
  "            <div class=\"k\"><i class=\"fa-solid fa-computer\"></i> Machines</div>\n" +
  "            <div class=\"v\" id=\"statMachines\">0</div>\n" +
  "            <div class=\"s\" id=\"statMachinesSub\">\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e0b\u0e49\u0e33\u0e01\u0e31\u0e19</div>\n" +
  "          </div>\n" +
  "        </section>\n" +
  "\n" +
  "        <section class=\"card pop-element\" id=\"monthly\">\n" +
  "          <div class=\"card-h\">\n" +
  "            <h3>Execution</h3>\n" +
  "            <span class=\"card-sub\">\u0e01\u0e23\u0e32\u0e1f\u0e01\u0e32\u0e23\u0e23\u0e31\u0e19</span>\n" +
  "            <span class=\"spacer\"></span>\n" +
  "            <div class=\"ranges\">\n" +
  "              <button class=\"range\" type=\"button\" data-range=\"24h\">24 \u0e0a\u0e21.</button>\n" +
  "              <button class=\"range\" type=\"button\" data-range=\"7d\">7 \u0e27\u0e31\u0e19</button>\n" +
  "              <button class=\"range\" type=\"button\" data-range=\"30d\">30 \u0e27\u0e31\u0e19</button>\n" +
  "              <button class=\"range is-active\" type=\"button\" data-range=\"12m\">12 \u0e40\u0e14\u0e37\u0e2d\u0e19</button>\n" +
  "            </div>\n" +
  "          </div>\n" +
  "          <div class=\"card-b\">\n" +
  "            <div class=\"chart-head\">\n" +
  "              <span class=\"big\" id=\"chartBig\">0</span>\n" +
  "              <span class=\"delta\" id=\"chartDelta\">\u2014</span>\n" +
  "              <span class=\"cap\" id=\"chartCap\">\u0e01\u0e32\u0e23\u0e23\u0e31\u0e19\u0e15\u0e48\u0e2d\u0e40\u0e14\u0e37\u0e2d\u0e19 \u00b7 12 \u0e40\u0e14\u0e37\u0e2d\u0e19\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14</span>\n" +
  "            </div>\n" +
  "            <div class=\"chart-wrap\">\n" +
  "              <div class=\"chart\" id=\"chart\"></div>\n" +
  "              <div class=\"tip\" id=\"tip\"></div>\n" +
  "            </div>\n" +
  "            <div class=\"chart-foot\" id=\"chartFoot\"></div>\n" +
  "          </div>\n" +
  "        </section>\n" +
  "\n" +
  "        <section class=\"card pop-element\" id=\"recent\">\n" +
  "          <div class=\"card-h\">\n" +
  "            <h3>\u0e01\u0e32\u0e23\u0e23\u0e31\u0e19\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14</h3>\n" +
  "            <span class=\"card-sub\">100 \u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14 \u00b7 \u0e19\u0e31\u0e1a\u0e04\u0e23\u0e31\u0e49\u0e07\u0e40\u0e14\u0e35\u0e22\u0e27\u0e15\u0e48\u0e2d HWID + job</span>\n" +
  "            <span class=\"spacer\"></span>\n" +
  "            <span class=\"pill\" id=\"recentCount\">0</span>\n" +
  "          </div>\n" +
  "          <div id=\"recentHost\"><div class=\"empty\">\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25</div></div>\n" +
  "        </section>\n" +
  "      </main>\n" +
  "    </div>\n" +
  "  </div>\n" +
  "\n" +
  "  <script>\n" +
  "    /* HUB theme motion (same reveal as the HUB / Control pages) */\n" +
  "    (function () {\n" +
  "      \"use strict\";\n" +
  "      function far() {\n" +
  "        return {\n" +
  "          tx: ((Math.random() - 0.5) * 420) + \"px\",\n" +
  "          ty: ((Math.random() - 0.5) * 420) + \"px\",\n" +
  "          tr: ((Math.random() - 0.5) * 140) + \"deg\"\n" +
  "        };\n" +
  "      }\n" +
  "      try {\n" +
  "        var pops = Array.prototype.slice.call(document.querySelectorAll(\".pop-element\"));\n" +
  "        pops.forEach(function (el, index) {\n" +
  "          var d = far();\n" +
  "          el.style.setProperty(\"--tx\", d.tx);\n" +
  "          el.style.setProperty(\"--ty\", d.ty);\n" +
  "          el.style.setProperty(\"--tr\", d.tr);\n" +
  "          el.style.setProperty(\"--delay\", (0.1 + index * 0.12) + \"s\");\n" +
  "        });\n" +
  "        setTimeout(function () {\n" +
  "          pops.forEach(function (el) { el.classList.add(\"pop-in\"); });\n" +
  "        }, 50);\n" +
  "      } catch (err) {\n" +
  "        Array.prototype.forEach.call(document.querySelectorAll(\".pop-element\"), function (el) {\n" +
  "          el.classList.remove(\"pop-element\");\n" +
  "          el.style.opacity = \"1\"; el.style.visibility = \"visible\";\n" +
  "          el.style.transform = \"none\"; el.style.filter = \"none\";\n" +
  "        });\n" +
  "      }\n" +
  "    })();\n" +
  "  </script>\n" +
  "\n" +
  "  <script>\n" +
  "(function () {\n" +
  "  'use strict';\n" +
  "  var KEY = 'ms999_admin_token';\n" +
  "  var state = { token: sessionStorage.getItem(KEY) || '', timer: null, busy: false };\n" +
  "\n" +
  "  var $ = function (id) { return document.getElementById(id); };\n" +
  "  var gate = $('gate'), gateErr = $('gateErr'), gateForm = $('gateForm'), tokenInput = $('token');\n" +
  "  var THAI_MONTHS = ['\u0e21.\u0e04.', '\u0e01.\u0e1e.', '\u0e21\u0e35.\u0e04.', '\u0e40\u0e21.\u0e22.', '\u0e1e.\u0e04.', '\u0e21\u0e34.\u0e22.', '\u0e01.\u0e04.', '\u0e2a.\u0e04.', '\u0e01.\u0e22.', '\u0e15.\u0e04.', '\u0e1e.\u0e22.', '\u0e18.\u0e04.'];\n" +
  "\n" +
  "  function num(v) { var n = Number(v); return Number.isFinite(n) ? n : 0; }\n" +
  "  function esc(v) {\n" +
  "    return String(v == null ? '' : v).replace(/[&<>\"']/g, function (ch) {\n" +
  "      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', \"'\": '&#39;' }[ch];\n" +
  "    });\n" +
  "  }\n" +
  "  function monthLabel(value) {\n" +
  "    var parts = String(value || '').split('-');\n" +
  "    var index = parseInt(parts[1], 10);\n" +
  "    if (!(index >= 1 && index <= 12)) return String(value || '-');\n" +
  "    return THAI_MONTHS[index - 1] + ' ' + String(parts[0] || '').slice(2);\n" +
  "  }\n" +
  "  function timeTh(value) {\n" +
  "    if (!value) return '\u2014';\n" +
  "    var d = new Date(value);\n" +
  "    if (isNaN(d.getTime())) return '\u2014';\n" +
  "    return d.toLocaleDateString('th-TH', { day: '2-digit', month: 'short' }) + ' ' +\n" +
  "      d.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });\n" +
  "  }\n" +
  "  function ago(value) {\n" +
  "    if (!value) return '\u2014';\n" +
  "    var s = Math.max(0, Math.floor((Date.now() - new Date(value).getTime()) / 1000));\n" +
  "    if (s < 60) return s + ' \u0e27\u0e34\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27';\n" +
  "    var m = Math.floor(s / 60);\n" +
  "    if (m < 60) return m + ' \u0e19\u0e32\u0e17\u0e35\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27';\n" +
  "    var h = Math.floor(m / 60);\n" +
  "    if (h < 24) return h + ' \u0e0a\u0e21.\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27';\n" +
  "    return Math.floor(h / 24) + ' \u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27';\n" +
  "  }\n" +
  "  function dur(sec) {\n" +
  "    var s = Math.max(0, num(sec));\n" +
  "    if (s < 60) return s + ' \u0e27\u0e34';\n" +
  "    var m = Math.floor(s / 60);\n" +
  "    if (m < 60) return m + ' \u0e19\u0e32\u0e17\u0e35';\n" +
  "    var h = Math.floor(m / 60);\n" +
  "    if (h < 24) return h + ' \u0e0a\u0e21. ' + (m % 60) + ' \u0e19.';\n" +
  "    return Math.floor(h / 24) + ' \u0e27\u0e31\u0e19 ' + (h % 24) + ' \u0e0a\u0e21.';\n" +
  "  }\n" +
  "\n" +
  "  function api(path, body) {\n" +
  "    return fetch(path, {\n" +
  "      method: 'POST',\n" +
  "      headers: { 'content-type': 'application/json', 'x-admin-token': state.token },\n" +
  "      body: JSON.stringify(body || {}),\n" +
  "      cache: 'no-store',\n" +
  "    }).then(function (res) {\n" +
  "      return res.json().catch(function () { return {}; }).then(function (data) {\n" +
  "        return { status: res.status, data: data };\n" +
  "      });\n" +
  "    });\n" +
  "  }\n" +
  "\n" +
  "  function notice(message) {\n" +
  "    $('noticeHost').innerHTML = message\n" +
  "      ? '<div class=\"notice\">' + esc(message) + '</div>'\n" +
  "      : '';\n" +
  "  }\n" +
  "\n" +
  "  function renderTotals(t) {\n" +
  "    var runs = num(t.total_runs), month = num(t.runs_month), today = num(t.runs_today);\n" +
  "    var links = num(t.total_links), active = num(t.active_links);\n" +
  "\n" +
  "    $('statRuns').textContent = String(runs);\n" +
  "    $('statRunsSub').textContent = '\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 ' + today + ' \u00b7 \u0e40\u0e14\u0e37\u0e2d\u0e19\u0e19\u0e35\u0e49 ' + month + ' \u00b7 ' + (t.last_run_at ? ago(t.last_run_at) : '\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e01\u0e32\u0e23\u0e23\u0e31\u0e19');\n" +
  "    $('statRunsBar').style.width = (runs ? Math.min(100, Math.round((month / runs) * 100)) : 0) + '%';\n" +
  "\n" +
  "    $('statLinks').textContent = String(links);\n" +
  "    $('statLinksSub').textContent = '\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49 ' + active + ' \u00b7 \u0e2b\u0e21\u0e14\u0e2d\u0e32\u0e22\u0e38 ' + Math.max(0, links - active);\n" +
  "    $('statLinksBar').style.width = (links ? Math.min(100, Math.round((active / links) * 100)) : 0) + '%';\n" +
  "\n" +
  "    $('statScripts').textContent = String(num(t.unique_scripts));\n" +
  "    $('statScriptsSub').textContent = '\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e04\u0e22\u0e23\u0e31\u0e19';\n" +
  "\n" +
  "    $('statMachines').textContent = String(num(t.unique_machines));\n" +
  "    $('statMachinesSub').textContent = 'HWID \u0e44\u0e21\u0e48\u0e0b\u0e49\u0e33 \u00b7 \u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49 ' + num(t.unique_users) + ' \u0e04\u0e19';\n" +
  "  }\n" +
  "\n" +
  "  var series = { monthly: [], daily: [], hourly: [] };\n" +
  "  var currentRange = '12m';\n" +
  "  var chartGeom = null;\n" +
  "\n" +
  "  var RANGES = {\n" +
  "    '24h': { cap: '\u0e01\u0e32\u0e23\u0e23\u0e31\u0e19\u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14 \u00b7 \u0e14\u0e39\u0e22\u0e49\u0e2d\u0e19\u0e2b\u0e25\u0e31\u0e07 24 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07', unit: ' \u0e0a\u0e21.' },\n" +
  "    '7d': { cap: '\u0e01\u0e32\u0e23\u0e23\u0e31\u0e19\u0e27\u0e31\u0e19\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14 \u00b7 \u0e14\u0e39\u0e22\u0e49\u0e2d\u0e19\u0e2b\u0e25\u0e31\u0e07 7 \u0e27\u0e31\u0e19', unit: ' \u0e27\u0e31\u0e19' },\n" +
  "    '30d': { cap: '\u0e01\u0e32\u0e23\u0e23\u0e31\u0e19\u0e27\u0e31\u0e19\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14 \u00b7 \u0e14\u0e39\u0e22\u0e49\u0e2d\u0e19\u0e2b\u0e25\u0e31\u0e07 30 \u0e27\u0e31\u0e19', unit: ' \u0e27\u0e31\u0e19' },\n" +
  "    '12m': { cap: '\u0e01\u0e32\u0e23\u0e23\u0e31\u0e19\u0e40\u0e14\u0e37\u0e2d\u0e19\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14 \u00b7 \u0e14\u0e39\u0e22\u0e49\u0e2d\u0e19\u0e2b\u0e25\u0e31\u0e07 12 \u0e40\u0e14\u0e37\u0e2d\u0e19', unit: ' \u0e40\u0e14\u0e37\u0e2d\u0e19' },\n" +
  "  };\n" +
  "\n" +
  "  function rangePoints(range) {\n" +
  "    var hourly = series.hourly || [], daily = series.daily || [], monthly = series.monthly || [];\n" +
  "    if (range === '24h') {\n" +
  "      return hourly.slice(-24).map(function (r) { return { key: r.hour, value: num(r.runs) }; });\n" +
  "    }\n" +
  "    if (range === '7d') {\n" +
  "      return daily.slice(-7).map(function (r) { return { key: r.day, value: num(r.runs) }; });\n" +
  "    }\n" +
  "    if (range === '30d') {\n" +
  "      return daily.slice(-30).map(function (r) { return { key: r.day, value: num(r.runs) }; });\n" +
  "    }\n" +
  "    return monthly.slice(-12).map(function (r) { return { key: r.month, value: num(r.runs) }; });\n" +
  "  }\n" +
  "\n" +
  "  function tickLabel(key, range) {\n" +
  "    if (range === '24h') return String(key).slice(11, 16);\n" +
  "    if (range === '12m') return monthLabel(key);\n" +
  "    var parts = String(key).split('-');\n" +
  "    var mi = parseInt(parts[1], 10);\n" +
  "    if (!(mi >= 1 && mi <= 12)) return String(key);\n" +
  "    return parseInt(parts[2], 10) + ' ' + THAI_MONTHS[mi - 1];\n" +
  "  }\n" +
  "\n" +
  "  function fullLabel(key, range) {\n" +
  "    if (range === '24h') return String(key).slice(5, 16);\n" +
  "    if (range === '12m') return monthLabel(key);\n" +
  "    var parts = String(key).split('-');\n" +
  "    var mi = parseInt(parts[1], 10);\n" +
  "    if (!(mi >= 1 && mi <= 12)) return String(key);\n" +
  "    return parseInt(parts[2], 10) + ' ' + THAI_MONTHS[mi - 1] + ' ' + String(parts[0]).slice(2);\n" +
  "  }\n" +
  "\n" +
  "  function niceMax(value) {\n" +
  "    if (value <= 5) return 5;\n" +
  "    var mag = Math.pow(10, Math.floor(Math.log10(value)));\n" +
  "    var scaled = value / mag;\n" +
  "    var step = scaled <= 1 ? 1 : scaled <= 2 ? 2 : scaled <= 5 ? 5 : 10;\n" +
  "    return step * mag;\n" +
  "  }\n" +
  "\n" +
  "  function renderChart() {\n" +
  "    var host = $('chart');\n" +
  "    var range = currentRange;\n" +
  "    var points = rangePoints(range);\n" +
  "    var total = points.reduce(function (acc, p) { return acc + p.value; }, 0);\n" +
  "    var peak = points.reduce(function (acc, p) { return Math.max(acc, p.value); }, 0);\n" +
  "    var latest = points.length ? points[points.length - 1].value : 0;\n" +
  "    var previous = points.length > 1 ? points[points.length - 2].value : null;\n" +
  "\n" +
  "    $('chartBig').textContent = String(latest);\n" +
  "    $('chartCap').textContent = (RANGES[range] || RANGES['12m']).cap;\n" +
  "\n" +
  "    // Stock-style change badge: latest point against the one before it.\n" +
  "    var deltaEl = $('chartDelta');\n" +
  "    if (previous == null) {\n" +
  "      deltaEl.className = 'delta';\n" +
  "      deltaEl.textContent = '\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e0a\u0e48\u0e27\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32';\n" +
  "    } else if (previous === 0) {\n" +
  "      deltaEl.className = 'delta';\n" +
  "      deltaEl.textContent = latest > 0 ? '\u0e0a\u0e48\u0e27\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e44\u0e21\u0e48\u0e21\u0e35\u0e01\u0e32\u0e23\u0e23\u0e31\u0e19' : '\u2014';\n" +
  "    } else {\n" +
  "      var pct = ((latest - previous) / previous) * 100;\n" +
  "      deltaEl.className = 'delta ' + (pct >= 0 ? 'up' : 'down');\n" +
  "      deltaEl.textContent = (pct >= 0 ? '\u25b2 ' : '\u25bc ') + Math.abs(pct).toFixed(1) + '% \u0e40\u0e17\u0e35\u0e22\u0e1a\u0e01\u0e31\u0e1a\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32';\n" +
  "    }\n" +
  "\n" +
  "    if (!points.length) {\n" +
  "      host.innerHTML = '<div class=\"chart-empty\">\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e01\u0e32\u0e23\u0e23\u0e31\u0e19 \u2014 \u0e43\u0e2b\u0e49\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e1c\u0e48\u0e32\u0e19\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e41\u0e25\u0e49\u0e27\u0e01\u0e14\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a</div>';\n" +
  "      $('chartFoot').innerHTML = '';\n" +
  "      chartGeom = null;\n" +
  "      return;\n" +
  "    }\n" +
  "\n" +
  "    var width = Math.max(320, Math.round(host.clientWidth || 640));\n" +
  "    var height = 280;\n" +
  "    var pad = { top: 18, right: 14, bottom: 26, left: 44 };\n" +
  "    var innerW = width - pad.left - pad.right;\n" +
  "    var innerH = height - pad.top - pad.bottom;\n" +
  "    var yMax = niceMax(peak);\n" +
  "    var count = points.length;\n" +
  "    var stepX = count > 1 ? innerW / (count - 1) : 0;\n" +
  "    var xAt = function (index) { return pad.left + (count > 1 ? index * stepX : innerW / 2); };\n" +
  "    var yAt = function (value) { return pad.top + innerH - (yMax ? (value / yMax) * innerH : 0); };\n" +
  "\n" +
  "    var grid = '';\n" +
  "    for (var t = 0; t <= 4; t++) {\n" +
  "      var tick = Math.round((yMax / 4) * t);\n" +
  "      var gy = yAt(tick);\n" +
  "      grid += '<line class=\"grid-line\" x1=\"' + pad.left + '\" x2=\"' + (width - pad.right) + '\" y1=\"' + gy + '\" y2=\"' + gy + '\"/>' +\n" +
  "        '<text class=\"grid-text\" x=\"' + (pad.left - 8) + '\" y=\"' + (gy + 3) + '\" text-anchor=\"end\">' + tick + '</text>';\n" +
  "    }\n" +
  "\n" +
  "    var want = Math.min(6, count);\n" +
  "    var every = Math.max(1, Math.round((count - 1) / (want - 1 || 1)));\n" +
  "    var axis = '';\n" +
  "    for (var i = 0; i < count; i++) {\n" +
  "      if (i % every !== 0 && i !== count - 1) continue;\n" +
  "      axis += '<text class=\"axis-text\" x=\"' + xAt(i).toFixed(1) + '\" y=\"' + (height - 8) + '\" text-anchor=\"middle\">' +\n" +
  "        esc(tickLabel(points[i].key, range)) + '</text>';\n" +
  "    }\n" +
  "\n" +
  "    var line = points.map(function (p, index) {\n" +
  "      return (index ? 'L' : 'M') + xAt(index).toFixed(1) + ' ' + yAt(p.value).toFixed(1);\n" +
  "    }).join(' ');\n" +
  "    var area = line + ' L' + xAt(count - 1).toFixed(1) + ' ' + (pad.top + innerH) +\n" +
  "      ' L' + xAt(0).toFixed(1) + ' ' + (pad.top + innerH) + ' Z';\n" +
  "\n" +
  "    host.innerHTML =\n" +
  "      '<svg viewBox=\"0 0 ' + width + ' ' + height + '\" preserveAspectRatio=\"none\" role=\"img\" aria-label=\"\u0e01\u0e23\u0e32\u0e1f\u0e01\u0e32\u0e23\u0e23\u0e31\u0e19\">' +\n" +
  "        '<defs><linearGradient id=\"areaFill\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">' +\n" +
  "          '<stop offset=\"0%\" stop-color=\"#ffffff\" stop-opacity=\"0.30\"/>' +\n" +
  "          '<stop offset=\"100%\" stop-color=\"#ffffff\" stop-opacity=\"0\"/>' +\n" +
  "        '</linearGradient></defs>' +\n" +
  "        grid + axis +\n" +
  "        '<path class=\"spark-area\" d=\"' + area + '\"/>' +\n" +
  "        '<path class=\"spark-line\" d=\"' + line + '\"/>' +\n" +
  "        '<line class=\"spark-cross\" id=\"crossX\" x1=\"0\" x2=\"0\" y1=\"' + pad.top + '\" y2=\"' + (pad.top + innerH) + '\" style=\"opacity:0\"/>' +\n" +
  "        '<circle class=\"spark-dot\" id=\"crossDot\" r=\"4.5\" style=\"opacity:0\"/>' +\n" +
  "        '<circle class=\"spark-dot\" cx=\"' + xAt(count - 1).toFixed(1) + '\" cy=\"' + yAt(points[count - 1].value).toFixed(1) + '\" r=\"4\"/>' +\n" +
  "        '<rect id=\"hitArea\" x=\"' + pad.left + '\" y=\"' + pad.top + '\" width=\"' + Math.max(1, innerW) + '\" height=\"' + innerH + '\" fill=\"transparent\"/>' +\n" +
  "      '</svg>';\n" +
  "\n" +
  "    chartGeom = {\n" +
  "      pad: pad, innerW: innerW, innerH: innerH, stepX: stepX, yMax: yMax,\n" +
  "      points: points, range: range, x: xAt, y: yAt, vbWidth: width, vbHeight: height,\n" +
  "    };\n" +
  "\n" +
  "    var busiest = 0;\n" +
  "    points.forEach(function (p, index) { if (p.value > points[busiest].value) busiest = index; });\n" +
  "    var avg = count ? (total / count) : 0;\n" +
  "    $('chartFoot').innerHTML =\n" +
  "      '<span>\u0e23\u0e27\u0e21 <b>' + total + '</b> \u0e01\u0e32\u0e23\u0e23\u0e31\u0e19</span>' +\n" +
  "      '<span>\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14 <b>' + peak + '</b> \u00b7 ' + esc(fullLabel(points[busiest].key, range)) + '</span>' +\n" +
  "      '<span>\u0e40\u0e09\u0e25\u0e35\u0e48\u0e22 <b>' + avg.toFixed(1) + '</b> \u0e15\u0e48\u0e2d' + (RANGES[range] || RANGES['12m']).unit + '</span>' +\n" +
  "      '<span>\u0e08\u0e38\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 <b>' + count + '</b></span>';\n" +
  "\n" +
  "    bindHover();\n" +
  "  }\n" +
  "\n" +
  "  function bindHover() {\n" +
  "    var host = $('chart');\n" +
  "    var tip = $('tip');\n" +
  "    var cross = document.getElementById('crossX');\n" +
  "    var dot = document.getElementById('crossDot');\n" +
  "    var hit = document.getElementById('hitArea');\n" +
  "    if (!host || !tip || !cross || !dot || !hit || !chartGeom) return;\n" +
  "\n" +
  "    function update(event) {\n" +
  "      var rect = host.getBoundingClientRect();\n" +
  "      if (!rect.width || !rect.height) return;\n" +
  "      var clientX = (event.touches && event.touches[0]) ? event.touches[0].clientX : event.clientX;\n" +
  "      var scaleX = chartGeom.vbWidth / rect.width;\n" +
  "      var scaleY = rect.height / chartGeom.vbHeight;\n" +
  "      var svgX = (clientX - rect.left) * scaleX;\n" +
  "      var index = Math.round((svgX - chartGeom.pad.left) / (chartGeom.stepX || 1));\n" +
  "      index = Math.max(0, Math.min(chartGeom.points.length - 1, index));\n" +
  "      var point = chartGeom.points[index];\n" +
  "      var cx = chartGeom.x(index);\n" +
  "      var cy = chartGeom.y(point.value);\n" +
  "\n" +
  "      cross.setAttribute('x1', cx);\n" +
  "      cross.setAttribute('x2', cx);\n" +
  "      cross.style.opacity = '1';\n" +
  "      dot.setAttribute('cx', cx);\n" +
  "      dot.setAttribute('cy', cy);\n" +
  "      dot.style.opacity = '1';\n" +
  "\n" +
  "      tip.innerHTML = '<b>' + point.value + '</b> \u0e01\u0e32\u0e23\u0e23\u0e31\u0e19 \u00b7 <span>' + esc(fullLabel(point.key, chartGeom.range)) + '</span>';\n" +
  "      tip.style.opacity = '1';\n" +
  "      var left = cx / scaleX;\n" +
  "      tip.style.left = Math.max(70, Math.min(rect.width - 70, left)) + 'px';\n" +
  "      tip.style.top = Math.max(14, (cy * scaleY) - 14) + 'px';\n" +
  "    }\n" +
  "\n" +
  "    function hide() {\n" +
  "      cross.style.opacity = '0';\n" +
  "      dot.style.opacity = '0';\n" +
  "      tip.style.opacity = '0';\n" +
  "    }\n" +
  "\n" +
  "    host.addEventListener('mousemove', update);\n" +
  "    host.addEventListener('mouseleave', hide);\n" +
  "    host.addEventListener('touchstart', update, { passive: true });\n" +
  "    host.addEventListener('touchmove', update, { passive: true });\n" +
  "    host.addEventListener('touchend', hide);\n" +
  "  }\n" +
  "\n" +
  "  function renderRecent(list) {\n" +
  "    var host = $('recentHost');\n" +
  "    $('recentCount').textContent = String(list.length);\n" +
  "    if (!list.length) {\n" +
  "      host.innerHTML = '<div class=\"empty\">\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25</div>';\n" +
  "      return;\n" +
  "    }\n" +
  "    var rows = list.map(function (r) {\n" +
  "      var who = r.display_name || r.username || '\u0e44\u0e21\u0e48\u0e23\u0e30\u0e1a\u0e38\u0e0a\u0e37\u0e48\u0e2d';\n" +
  "      var sub = r.user_id ? 'id ' + r.user_id : (r.hwid_hash ? 'hwid ' + String(r.hwid_hash).slice(0, 12) : '\u2014');\n" +
  "      var where = [];\n" +
  "      if (r.place_id) where.push('place ' + r.place_id);\n" +
  "      if (r.job_id) where.push(String(r.job_id).slice(0, 8));\n" +
  "      return '<tr>' +\n" +
  "        '<td class=\"mono\" style=\"font-size:.74rem;white-space:nowrap\">' + esc(timeTh(r.started_at)) + '</td>' +\n" +
  "        '<td><div class=\"ident\"><b>' + esc(who) + '</b><span>' + esc(sub) + '</span></div></td>' +\n" +
  "        '<td class=\"mono\" style=\"font-size:.76rem\">' + esc(r.script_name || '-') + '</td>' +\n" +
  "        '<td class=\"mono\" style=\"font-size:.74rem\">' + esc(r.executor || '-') + '</td>' +\n" +
  "        '<td class=\"mono\" style=\"font-size:.72rem\">' + esc(where.join(' \u00b7 ') || '\u2014') + '</td>' +\n" +
  "        '<td><span class=\"tag\">\u0e19\u0e31\u0e1a\u0e41\u0e25\u0e49\u0e27</span></td>' +\n" +
  "        '</tr>';\n" +
  "    }).join('');\n" +
  "    host.innerHTML = '<div style=\"overflow:auto;max-height:420px\"><table><thead><tr>' +\n" +
  "      '<th>\u0e40\u0e23\u0e34\u0e48\u0e21</th><th>\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49</th><th>\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c</th><th>Executor</th><th>Place \u00b7 Job</th><th>\u0e2a\u0e16\u0e32\u0e19\u0e30</th>' +\n" +
  "      '</tr></thead><tbody>' + rows + '</tbody></table></div>';\n" +
  "  }\n" +
  "\n" +
  "  function load() {\n" +
  "    if (state.busy || !state.token) return;\n" +
  "    state.busy = true;\n" +
  "    $('refreshIcon').classList.add('rotate');\n" +
  "    $('sideStatus').textContent = '\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14\u2026';\n" +
  "\n" +
  "    return api('/api/control/stats', {}).then(function (result) {\n" +
  "      var data = result.data || {};\n" +
  "      if (result.status !== 200 || !data.ok) {\n" +
  "        notice(data.reason || ('\u0e42\u0e2b\u0e25\u0e14\u0e2a\u0e16\u0e34\u0e15\u0e34\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08 (HTTP ' + result.status + ')'));\n" +
  "        $('sideStatus').textContent = '\u0e42\u0e2b\u0e25\u0e14\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08';\n" +
  "        if (result.status === 401) { showGate('token \u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07'); }\n" +
  "        return;\n" +
  "      }\n" +
  "      notice('');\n" +
  "      renderTotals(data.totals || {});\n" +
  "      series.monthly = data.monthly || [];\n" +
  "      series.daily = data.daily || [];\n" +
  "      series.hourly = data.hourly || [];\n" +
  "      renderChart();\n" +
  "      renderRecent(data.recent || []);\n" +
  "      $('updated').textContent = new Date().toLocaleTimeString('th-TH');\n" +
  "      $('sideStatus').textContent = '\u0e2d\u0e31\u0e1b\u0e40\u0e14\u0e15 ' + new Date().toLocaleTimeString('th-TH').slice(0, 8);\n" +
  "    }).catch(function () {\n" +
  "      notice('\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e15\u0e48\u0e2d\u0e40\u0e0b\u0e34\u0e23\u0e4c\u0e1f\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49');\n" +
  "      $('sideStatus').textContent = '\u0e2d\u0e2d\u0e1f\u0e44\u0e25\u0e19\u0e4c';\n" +
  "    }).then(function () {\n" +
  "      state.busy = false;\n" +
  "      $('refreshIcon').classList.remove('rotate');\n" +
  "    });\n" +
  "  }\n" +
  "\n" +
  "  function showGate(message) {\n" +
  "    gate.classList.remove('hide');\n" +
  "    gateErr.textContent = message || '';\n" +
  "    if (state.timer) clearInterval(state.timer);\n" +
  "  }\n" +
  "\n" +
  "  gateForm.addEventListener('submit', function (event) {\n" +
  "    event.preventDefault();\n" +
  "    var token = tokenInput.value.trim();\n" +
  "    if (!token) { gateErr.textContent = '\u0e01\u0e23\u0e38\u0e13\u0e32\u0e43\u0e2a\u0e48 token'; return; }\n" +
  "    $('loginBtn').disabled = true;\n" +
  "    state.token = token;\n" +
  "    api('/api/control/stats', {}).then(function (result) {\n" +
  "      $('loginBtn').disabled = false;\n" +
  "      if (result.status === 401) {\n" +
  "        state.token = '';\n" +
  "        gateErr.textContent = 'token \u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07';\n" +
  "        return;\n" +
  "      }\n" +
  "      sessionStorage.setItem(KEY, token);\n" +
  "      gate.classList.add('hide');\n" +
  "      load();\n" +
  "      state.timer = setInterval(function () { if (!document.hidden) load(); }, 30000);\n" +
  "    }).catch(function () {\n" +
  "      $('loginBtn').disabled = false;\n" +
  "      gateErr.textContent = '\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e15\u0e48\u0e2d\u0e40\u0e0b\u0e34\u0e23\u0e4c\u0e1f\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49';\n" +
  "    });\n" +
  "  });\n" +
  "\n" +
  "  $('logoutBtn').addEventListener('click', function () {\n" +
  "    sessionStorage.removeItem(KEY);\n" +
  "    state.token = '';\n" +
  "    showGate('');\n" +
  "    gateErr.textContent = '';\n" +
  "  });\n" +
  "\n" +
  "  $('refreshBtn').addEventListener('click', function () { load(); });\n" +
  "\n" +
  "  Array.prototype.forEach.call(document.querySelectorAll('.range'), function (button) {\n" +
  "    button.addEventListener('click', function () {\n" +
  "      currentRange = button.getAttribute('data-range') || '12m';\n" +
  "      Array.prototype.forEach.call(document.querySelectorAll('.range'), function (other) {\n" +
  "        other.classList.remove('is-active');\n" +
  "      });\n" +
  "      button.classList.add('is-active');\n" +
  "      renderChart();\n" +
  "    });\n" +
  "  });\n" +
  "\n" +
  "  var resizeTimer = null;\n" +
  "  window.addEventListener('resize', function () {\n" +
  "    if (resizeTimer) clearTimeout(resizeTimer);\n" +
  "    resizeTimer = setTimeout(function () { if ($('chart').clientWidth) renderChart(); }, 150);\n" +
  "  });\n" +
  "\n" +
  "  Array.prototype.forEach.call(document.querySelectorAll('.side-link'), function (link) {\n" +
  "    link.addEventListener('click', function () {\n" +
  "      Array.prototype.forEach.call(document.querySelectorAll('.side-link'), function (other) {\n" +
  "        other.classList.remove('is-active');\n" +
  "      });\n" +
  "      link.classList.add('is-active');\n" +
  "    });\n" +
  "  });\n" +
  "\n" +
  "  if (state.token) {\n" +
  "    api('/api/control/stats', {}).then(function (result) {\n" +
  "      if (result.status === 401) { showGate(''); return; }\n" +
  "      gate.classList.add('hide');\n" +
  "      load();\n" +
  "      state.timer = setInterval(function () { if (!document.hidden) load(); }, 30000);\n" +
  "    }).catch(function () { showGate(''); });\n" +
  "  }\n" +
  "})();\n" +
  "  </script>\n" +
  "</body>\n" +
  "</html>\n";
Object.assign(EMBEDDED_PAGES, { "/stats": STATS_PAGE });
// END PAGE /stats

// BEGIN PAGE /control - generated from pages/control.html; run `npm run pages` to refresh.
const CONTROL_PAGE =
  "<!DOCTYPE html>\n" +
  "<html lang=\"th\">\n" +
  "<head>\n" +
  "  <meta charset=\"UTF-8\" />\n" +
  "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, viewport-fit=cover\" />\n" +
  "  <meta name=\"robots\" content=\"noindex,nofollow\" />\n" +
  "  <title>999MS \u00b7 Control</title>\n" +
  "  <meta name=\"theme-color\" content=\"#000000\" />\n" +
  "  <link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%230a0c14'/%3E%3Cpath d='M20 42c6-10 10-14 14-20M24 22h16v6h-7l7 14h-6l-4-8-5 8h-6l9-14h-4z' fill='%2338d6ff'/%3E%3C/svg%3E\" />\n" +
  "\n" +
  "  <!-- 1. Inter (UI) -->\n" +
  "  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n" +
  "  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n" +
  "  <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap\" rel=\"stylesheet\" />\n" +
  "\n" +
  "  <!-- 2. BubbledotICG-FinePos (Display - Dot-matrix) -->\n" +
  "  <link href=\"https://db.onlinewebfonts.com/c/8cb707a9b8a73f8a7403336b861c3074?family=BubbledotICG-FinePos\" rel=\"stylesheet\" />\n" +
  "\n" +
  "  <!-- 3. Font Awesome 6.5.2 -->\n" +
  "  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css\" integrity=\"sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\n" +
  "\n" +
  "  <style>\n" +
  "    /* ===== Variables ===== */\n" +
  "    :root {\n" +
  "      --bg: #000000;\n" +
  "      --text: #ffffff;\n" +
  "      --muted: #8e8e93;\n" +
  "      --pill-dark: #1a1a1a;\n" +
  "      --nav-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);\n" +
  "      \n" +
  "      /* \u0e1f\u0e2d\u0e19\u0e15\u0e4c Dot-matrix \u0e17\u0e31\u0e49\u0e07\u0e2b\u0e19\u0e49\u0e32 */\n" +
  "      --font-sans: \"BubbledotICG-FinePos\", \"Geist Pixel Circle\", monospace;\n" +
  "      --font-display: \"BubbledotICG-FinePos\", \"Geist Pixel Circle\", monospace;\n" +
  "    }\n" +
  "\n" +
  "    *, *::before, *::after {\n" +
  "      box-sizing: border-box;\n" +
  "      margin: 0;\n" +
  "      padding: 0;\n" +
  "    }\n" +
  "\n" +
  "    html { scroll-behavior: smooth; }\n" +
  "\n" +
  "    body {\n" +
  "      background: var(--bg);\n" +
  "      color: var(--text);\n" +
  "      font-family: var(--font-sans);\n" +
  "      -webkit-font-smoothing: antialiased;\n" +
  "      -moz-osx-font-smoothing: grayscale;\n" +
  "      overflow-x: hidden;\n" +
  "      letter-spacing: 0.02em;\n" +
  "    }\n" +
  "\n" +
  "    a { text-decoration: none; color: inherit; }\n" +
  "    button { font-family: inherit; border: none; background: none; cursor: pointer; }\n" +
  "    img { display: block; max-width: 100%; }\n" +
  "\n" +
  "    /* ===== Background ===== */\n" +
  "    .bg-wave {\n" +
  "      position: fixed; inset: 0; z-index: 0;\n" +
  "      background-color: #000; overflow: hidden;\n" +
  "    }\n" +
  "\n" +
  "    .bg-wave::before {\n" +
  "      content: \"\"; position: absolute; top: -50%; left: -50%;\n" +
  "      width: 200%; height: 200%;\n" +
  "      background: radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.12) 0%, transparent 50%),\n" +
  "                  radial-gradient(ellipse at 80% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 40%);\n" +
  "      filter: blur(80px);\n" +
  "      animation: waveMove1 20s ease-in-out infinite alternate;\n" +
  "    }\n" +
  "\n" +
  "    .bg-wave::after {\n" +
  "      content: \"\"; position: absolute; bottom: -50%; right: -50%;\n" +
  "      width: 150%; height: 150%;\n" +
  "      background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 60%);\n" +
  "      filter: blur(100px);\n" +
  "      animation: waveMove2 25s ease-in-out infinite alternate;\n" +
  "    }\n" +
  "\n" +
  "    .green-orb {\n" +
  "      position: absolute; border-radius: 50%;\n" +
  "      filter: blur(60px); z-index: 1; pointer-events: none;\n" +
  "    }\n" +
  "\n" +
  "    .orb-1 {\n" +
  "      width: 45vw; height: 45vw;\n" +
  "      background: radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, transparent 70%);\n" +
  "      top: -15%; right: -10%;\n" +
  "      animation: orbFloat1 15s ease-in-out infinite alternate;\n" +
  "    }\n" +
  "\n" +
  "    .orb-2 {\n" +
  "      width: 35vw; height: 35vw;\n" +
  "      background: radial-gradient(circle, rgba(34, 197, 94, 0.25) 0%, transparent 70%);\n" +
  "      bottom: 5%; left: -5%;\n" +
  "      animation: orbFloat2 18s ease-in-out infinite alternate;\n" +
  "    }\n" +
  "\n" +
  "    .orb-3 {\n" +
  "      width: 25vw; height: 25vw;\n" +
  "      background: radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%);\n" +
  "      top: 40%; left: 30%;\n" +
  "      animation: orbFloat3 12s ease-in-out infinite alternate;\n" +
  "    }\n" +
  "\n" +
  "    .bg-wave .noise {\n" +
  "      position: absolute; inset: 0; opacity: 0.15;\n" +
  "      background-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\");\n" +
  "      mix-blend-mode: overlay; pointer-events: none; z-index: 2;\n" +
  "    }\n" +
  "\n" +
  "    @keyframes waveMove1 {\n" +
  "      0% { transform: translate(0, 0) scale(1) rotate(0deg); }\n" +
  "      50% { transform: translate(10%, 15%) scale(1.1) rotate(10deg); }\n" +
  "      100% { transform: translate(-5%, 5%) scale(0.9) rotate(-5deg); }\n" +
  "    }\n" +
  "\n" +
  "    @keyframes waveMove2 {\n" +
  "      0% { transform: translate(0, 0) scale(1); opacity: 0.8; }\n" +
  "      50% { transform: translate(-15%, -10%) scale(1.2); opacity: 1; }\n" +
  "      100% { transform: translate(5%, -5%) scale(0.95); opacity: 0.7; }\n" +
  "    }\n" +
  "\n" +
  "    @keyframes orbFloat1 {\n" +
  "      0% { transform: translate(0, 0) scale(1); opacity: 0.4; }\n" +
  "      100% { transform: translate(-15%, 20%) scale(1.3); opacity: 0.8; }\n" +
  "    }\n" +
  "\n" +
  "    @keyframes orbFloat2 {\n" +
  "      0% { transform: translate(0, 0) scale(1); opacity: 0.3; }\n" +
  "      100% { transform: translate(20%, -15%) scale(1.4); opacity: 0.7; }\n" +
  "    }\n" +
  "\n" +
  "    @keyframes orbFloat3 {\n" +
  "      0% { transform: translate(0, 0) scale(1); opacity: 0.2; }\n" +
  "      100% { transform: translate(-10%, -20%) scale(1.5); opacity: 0.5; }\n" +
  "    }\n" +
  "\n" +
  "    /* ===== Page Layout ===== */\n" +
  "    .page {\n" +
  "      position: relative; z-index: 3;\n" +
  "      display: flex; flex-direction: column; align-items: center;\n" +
  "      min-height: 100vh; padding: 0 clamp(14px, 3vw, 32px) 80px;\n" +
  "    }\n" +
  "\n" +
  "    /* ===== Header ===== */\n" +
  "    .site-header {\n" +
  "      width: 100%; max-width: 900px;\n" +
  "      display: flex; align-items: center; justify-content: center;\n" +
  "      position: sticky; top: 20px; z-index: 50; margin-bottom: 80px;\n" +
  "    }\n" +
  "\n" +
  "    .nav-pill {\n" +
  "      display: flex; align-items: center; justify-content: space-between;\n" +
  "      width: 100%; height: 64px; padding: 0 8px 0 16px;\n" +
  "      border-radius: 999px; background: rgba(10, 10, 12, 0.4);\n" +
  "      backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);\n" +
  "      border: 1px solid rgba(255, 255, 255, 0.1);\n" +
  "      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);\n" +
  "    }\n" +
  "\n" +
  "    .brand {\n" +
  "      flex-shrink: 0; display: grid; place-items: center;\n" +
  "      width: 44px; height: 44px; border-radius: 50%;\n" +
  "      background: #fff; overflow: hidden;\n" +
  "      transition: transform 0.25s ease;\n" +
  "      box-shadow: 0 0 15px rgba(255,255,255,0.3);\n" +
  "    }\n" +
  "\n" +
  "    .brand:hover { transform: scale(1.04); }\n" +
  "    .brand img { width: 72%; height: 72%; object-fit: contain; }\n" +
  "\n" +
  "    .nav-links { display: flex; align-items: center; gap: clamp(16px, 2.5vw, 32px); }\n" +
  "    .nav-link { font-size: 14px; font-weight: 500; color: var(--muted); transition: color 0.2s ease; }\n" +
  "    .nav-link:hover, .nav-link.is-active { color: #fff; }\n" +
  "\n" +
  "    .sign-in {\n" +
  "      display: inline-flex; align-items: center; justify-content: center;\n" +
  "      height: 48px; padding: 0 24px; border-radius: 999px;\n" +
  "      background: #fff; color: #000; font-size: 14px; font-weight: 600;\n" +
  "      transition: transform 0.2s ease, opacity 0.2s, box-shadow 0.2s;\n" +
  "    }\n" +
  "\n" +
  "    .sign-in:hover { transform: scale(1.02); box-shadow: 0 0 20px rgba(255,255,255,0.4); }\n" +
  "\n" +
  "    .burger {\n" +
  "      display: none; flex-direction: column; align-items: center; justify-content: center;\n" +
  "      gap: 5px; width: 48px; height: 48px; border-radius: 50%;\n" +
  "      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);\n" +
  "    }\n" +
  "    .burger span {\n" +
  "      display: block; width: 18px; height: 1.5px;\n" +
  "      background: #fff; border-radius: 2px;\n" +
  "      transition: transform 0.25s ease, background 0.25s ease;\n" +
  "    }\n" +
  "\n" +
  "    /* ===== Hero Section ===== */\n" +
  "    .hero {\n" +
  "      width: 100%; max-width: 900px;\n" +
  "      display: flex; flex-direction: column; align-items: center;\n" +
  "      text-align: center; padding: 40px 0 100px;\n" +
  "    }\n" +
  "\n" +
  "    /* =========================================\n" +
  "       HEADLINE: \u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e2a\u0e38\u0e48\u0e21\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07 \u0e44\u0e01\u0e25\u0e46 \u0e0a\u0e49\u0e32\u0e46\n" +
  "       ========================================= */\n" +
  "    .headline {\n" +
  "      display: flex; align-items: center; justify-content: center;\n" +
  "      flex-wrap: wrap; gap: 0.05em;\n" +
  "      font-weight: 400; font-size: clamp(48px, 9vw, 110px);\n" +
  "      letter-spacing: -0.02em; line-height: 1.1;\n" +
  "      margin-bottom: 24px; perspective: 1000px;\n" +
  "      min-height: 1.2em;\n" +
  "    }\n" +
  "\n" +
  "    .char {\n" +
  "      display: inline-block;\n" +
  "      background: linear-gradient(180deg, #ffffff 20%, #a0a0a0 100%);\n" +
  "      -webkit-background-clip: text; background-clip: text;\n" +
  "      color: transparent;\n" +
  "      filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.2));\n" +
  "      opacity: 0; visibility: hidden; /* \u0e0b\u0e48\u0e2d\u0e19\u0e44\u0e27\u0e49\u0e23\u0e2d\u0e04\u0e34\u0e27 */\n" +
  "    }\n" +
  "\n" +
  "    .char.pop-in {\n" +
  "      visibility: visible;\n" +
  "      animation: bouncyRandomPop 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n" +
  "      animation-delay: var(--delay);\n" +
  "    }\n" +
  "\n" +
  "    @keyframes bouncyRandomPop {\n" +
  "      0% {\n" +
  "        opacity: 0;\n" +
  "        transform: translate(var(--tx), var(--ty)) scale(0.2) rotate(var(--tr));\n" +
  "        filter: blur(15px);\n" +
  "      }\n" +
  "      60% {\n" +
  "        opacity: 1;\n" +
  "        transform: translate(0, 0) scale(1.1) rotate(0deg);\n" +
  "        filter: blur(0);\n" +
  "      }\n" +
  "      80% {\n" +
  "        transform: translate(0, 0) scale(0.95) rotate(0deg);\n" +
  "      }\n" +
  "      100% {\n" +
  "        opacity: 1;\n" +
  "        transform: translate(0, 0) scale(1) rotate(0deg);\n" +
  "        filter: blur(0);\n" +
  "      }\n" +
  "    }\n" +
  "\n" +
  "    .char.shimmer-ready::after {\n" +
  "      content: attr(data-char);\n" +
  "      position: absolute; top: 0; left: 0; width: 100%; height: 100%;\n" +
  "      background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%);\n" +
  "      background-size: 200% 100%;\n" +
  "      -webkit-background-clip: text; background-clip: text;\n" +
  "      color: transparent; animation: shimmer 3s infinite linear;\n" +
  "      z-index: 1;\n" +
  "    }\n" +
  "\n" +
  "    @keyframes shimmer {\n" +
  "      0% { background-position: -200% 0; }\n" +
  "      100% { background-position: 200% 0; }\n" +
  "    }\n" +
  "\n" +
  "    /* =========================================\n" +
  "       Subhead & CTA (\u0e25\u0e1a Discord \u0e2d\u0e2d\u0e01\u0e41\u0e25\u0e49\u0e27)\n" +
  "       ========================================= */\n" +
  "    .subhead {\n" +
  "      max-width: 650px; font-size: clamp(16px, 2vw, 18px);\n" +
  "      line-height: 1.6; color: #ccc; margin-bottom: 40px;\n" +
  "    }\n" +
  "\n" +
  "    .cta-group {\n" +
  "      display: flex; justify-content: center;\n" +
  "      width: 100%; max-width: 500px; margin-bottom: 32px;\n" +
  "    }\n" +
  "\n" +
  "    .cta-primary {\n" +
  "      display: flex; align-items: center; justify-content: center;\n" +
  "      /* \u0e1b\u0e23\u0e31\u0e1a\u0e43\u0e2b\u0e49\u0e01\u0e27\u0e49\u0e32\u0e07\u0e02\u0e36\u0e49\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e49\u0e14\u0e39\u0e2a\u0e21\u0e14\u0e38\u0e25\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e44\u0e21\u0e48\u0e21\u0e35\u0e1b\u0e38\u0e48\u0e21 Discord */\n" +
  "      width: 100%; max-width: 280px; padding: 16px 24px;\n" +
  "      border-radius: 999px; background: #fff; color: #000;\n" +
  "      font-size: 15px; font-weight: 600;\n" +
  "      box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,0.2);\n" +
  "      transition: transform 0.25s ease, box-shadow 0.25s ease;\n" +
  "    }\n" +
  "\n" +
  "    .cta-primary:hover {\n" +
  "      transform: translateY(-2px) scale(1.01);\n" +
  "      box-shadow: 0 0 0 1px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.5);\n" +
  "    }\n" +
  "\n" +
  "    /* =========================================\n" +
  "       Live Status\n" +
  "       ========================================= */\n" +
  "    .live-status {\n" +
  "      display: flex; align-items: center; gap: 10px;\n" +
  "      font-size: 12px; font-weight: 600; letter-spacing: 0.5px; color: #22c55e;\n" +
  "      text-shadow: 0 0 10px rgba(34, 197, 94, 0.5);\n" +
  "    }\n" +
  "\n" +
  "    .status-dot {\n" +
  "      position: relative; width: 10px; height: 10px;\n" +
  "      background: #22c55e; border-radius: 50%;\n" +
  "      box-shadow: 0 0 10px #22c55e;\n" +
  "    }\n" +
  "\n" +
  "    .status-dot::after {\n" +
  "      content: \"\"; position: absolute; top: 50%; left: 50%;\n" +
  "      width: 100%; height: 100%; background: #22c55e;\n" +
  "      border-radius: 50%; transform: translate(-50%, -50%);\n" +
  "      animation: pulseRing 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;\n" +
  "      z-index: -1;\n" +
  "    }\n" +
  "\n" +
  "    @keyframes pulseRing {\n" +
  "      0% { width: 100%; height: 100%; opacity: 0.8; }\n" +
  "      100% { width: 300%; height: 300%; opacity: 0; }\n" +
  "    }\n" +
  "\n" +
  "    /* ===== Stats Section ===== */\n" +
  "    .stats-section {\n" +
  "      width: 100%; max-width: 1000px; padding: 60px 20px;\n" +
  "      margin: 0 auto; border-top: 1px solid rgba(255,255,255,0.1);\n" +
  "    }\n" +
  "\n" +
  "    .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }\n" +
  "\n" +
  "    .stat {\n" +
  "      display: flex; flex-direction: column; align-items: center;\n" +
  "      text-align: center; gap: 6px;\n" +
  "      background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255,255,255,0.1);\n" +
  "      padding: 24px 16px; border-radius: 16px;\n" +
  "      backdrop-filter: blur(10px); transition: background 0.3s, border-color 0.3s;\n" +
  "    }\n" +
  "\n" +
  "    .stat:hover { background: rgba(255, 255, 255, 0.05); border-color: rgba(255,255,255,0.3); }\n" +
  "\n" +
  "    .stat-icon {\n" +
  "      font-size: clamp(22px, 3vw, 33px); color: #fff; line-height: 1;\n" +
  "      text-shadow: 0 0 10px rgba(255,255,255,0.5);\n" +
  "    }\n" +
  "\n" +
  "    .stat-value {\n" +
  "      font-size: clamp(18px, 2.2vw, 26px); font-weight: 500; color: #fff;\n" +
  "      font-variant-numeric: tabular-nums;\n" +
  "    }\n" +
  "\n" +
  "    .stat-label { font-size: 12px; color: #aaa; }\n" +
  "\n" +
  "    /* =========================================\n" +
  "       Elements \u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b: \u0e2a\u0e38\u0e48\u0e21\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19\u0e2b\u0e21\u0e14!\n" +
  "       ========================================= */\n" +
  "    .pop-element {\n" +
  "      opacity: 0;\n" +
  "      visibility: hidden;\n" +
  "      transform: translate(var(--tx), var(--ty)) scale(0.5) rotate(var(--tr));\n" +
  "      filter: blur(10px);\n" +
  "    }\n" +
  "\n" +
  "    .pop-element.pop-in {\n" +
  "      visibility: visible;\n" +
  "      animation: bouncyRandomPop 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n" +
  "      animation-delay: var(--delay);\n" +
  "    }\n" +
  "\n" +
  "    /* ===== Mobile Responsive ===== */\n" +
  "    @media (max-width: 900px) {\n" +
  "      .nav-pill { display: none; }\n" +
  "      .burger { display: flex; }\n" +
  "      .site-header { justify-content: space-between; padding: 0 10px; }\n" +
  "    }\n" +
  "\n" +
  "    @media (max-width: 720px) {\n" +
  "      .stats { grid-template-columns: repeat(2, 1fr); }\n" +
  "    }\n" +
  "  \n" +
  "    /* =========================================\n" +
  "       CONTROL \u2014 dashboard skin on the HUB theme\n" +
  "       ========================================= */\n" +
  "    :root {\n" +
  "      --mint: #22c55e;\n" +
  "      --danger: #ff6b81;\n" +
  "      --amber: #ffc65c;\n" +
  "      --mono: ui-monospace, SFMono-Regular, Menlo, Consolas, \"Liberation Mono\", monospace;\n" +
  "      --line: rgba(255, 255, 255, 0.1);\n" +
  "      --line-2: rgba(255, 255, 255, 0.18);\n" +
  "      --panel: rgba(0, 0, 0, 0.4);\n" +
  "      --shell: 1100px;\n" +
  "    }\n" +
  "\n" +
  "    .mono { font-family: var(--mono); }\n" +
  "    .hide { display: none; }\n" +
  "\n" +
  "    /* shell widths \u2014 same nav / hero / stats, wider for the dashboard */\n" +
  "    .page { padding-bottom: 80px; }\n" +
  "    .site-header { max-width: var(--shell); margin-bottom: 44px; }\n" +
  "    .nav-pill { max-width: var(--shell); }\n" +
  "    .hero { max-width: var(--shell); padding: 24px 0 44px; }\n" +
  "    .stats-section { max-width: var(--shell); padding: 24px 20px 36px; }\n" +
  "    .dash { width: 100%; max-width: var(--shell); position: relative; z-index: 3; }\n" +
  "\n" +
  "    /* nav right-hand side */\n" +
  "    .nav-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }\n" +
  "    .nav-status {\n" +
  "      display: inline-flex; align-items: center; gap: 8px;\n" +
  "      font-size: 11px; font-weight: 600; letter-spacing: 0.6px; color: var(--muted);\n" +
  "      padding-right: 4px;\n" +
  "    }\n" +
  "    #gwDot { background: var(--muted); box-shadow: none; }\n" +
  "    #gwDot::after { background: var(--muted); animation: none; }\n" +
  "    #gwDot.ok { background: var(--mint); box-shadow: 0 0 10px var(--mint); }\n" +
  "    #gwDot.ok::after { background: var(--mint); animation: pulseRing 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite; }\n" +
  "    #gwDot.bad { background: var(--danger); box-shadow: 0 0 10px var(--danger); }\n" +
  "    #gwDot.bad::after { background: var(--danger); animation: pulseRing 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite; }\n" +
  "    #gwDot.wait { background: var(--amber); box-shadow: 0 0 10px var(--amber); }\n" +
  "    #gwDot.wait::after { background: var(--amber); animation: pulseRing 1.4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite; }\n" +
  "\n" +
  "    .nav-btn {\n" +
  "      display: inline-flex; align-items: center; justify-content: center; gap: 6px;\n" +
  "      height: 40px; padding: 0 16px; border-radius: 999px;\n" +
  "      border: 1px solid var(--line); background: rgba(255, 255, 255, 0.06); color: #fff;\n" +
  "      font-size: 12px; font-weight: 600; cursor: pointer;\n" +
  "      transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;\n" +
  "    }\n" +
  "    .nav-btn:hover { background: rgba(255, 255, 255, 0.14); border-color: rgba(255, 255, 255, 0.35); }\n" +
  "    .nav-btn-ghost { background: transparent; }\n" +
  "    .rotate { animation: spin 1s linear infinite; }\n" +
  "    @keyframes spin { to { transform: rotate(360deg); } }\n" +
  "\n" +
  "    /* layout */\n" +
  "    .grid { display: grid; grid-template-columns: 1.55fr 0.95fr; gap: 16px; align-items: start; }\n" +
  "    .stack { display: flex; flex-direction: column; gap: 16px; }\n" +
  "    .row { display: flex; gap: 10px; flex-wrap: wrap; }\n" +
  "    .row > * { flex: 1; }\n" +
  "    .split { display: grid; grid-template-columns: 86px 1fr; gap: 8px; }\n" +
  "\n" +
  "    /* cards */\n" +
  "    .card {\n" +
  "      background: var(--panel); border: 1px solid var(--line); border-radius: 16px; overflow: hidden;\n" +
  "      backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);\n" +
  "      transition: border-color 0.3s ease, background 0.3s ease;\n" +
  "    }\n" +
  "    .card:hover { border-color: rgba(255, 255, 255, 0.2); }\n" +
  "    .card-h { display: flex; align-items: center; gap: 12px; padding: 16px 18px; border-bottom: 1px solid var(--line); }\n" +
  "    .card-h h2 { font-size: 1rem; font-weight: 600; margin: 0; }\n" +
  "    .card-h .spacer { margin-left: auto; }\n" +
  "    .card-b { padding: 16px 18px; }\n" +
  "    .card-b.stack { display: flex; flex-direction: column; gap: 14px; }\n" +
  "\n" +
  "    /* buttons */\n" +
  "    .btn {\n" +
  "      display: inline-flex; align-items: center; justify-content: center; gap: 8px;\n" +
  "      padding: 9px 16px; border-radius: 999px;\n" +
  "      border: 1px solid var(--line-2); background: rgba(255, 255, 255, 0.06); color: #fff;\n" +
  "      font-family: inherit; font-size: 0.82rem; font-weight: 600; cursor: pointer;\n" +
  "      transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;\n" +
  "      white-space: nowrap;\n" +
  "    }\n" +
  "    .btn:hover { background: rgba(255, 255, 255, 0.14); border-color: rgba(255, 255, 255, 0.4); }\n" +
  "    .btn:disabled { opacity: 0.45; cursor: not-allowed; }\n" +
  "    .btn-primary {\n" +
  "      background: #fff; color: #000; border-color: #fff;\n" +
  "      box-shadow: 0 0 20px rgba(255, 255, 255, 0.18);\n" +
  "    }\n" +
  "    .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 0 32px rgba(255, 255, 255, 0.42); }\n" +
  "    .btn-danger { border-color: rgba(255, 107, 129, 0.45); color: #ffb3bf; background: rgba(255, 107, 129, 0.1); }\n" +
  "    .btn-danger:hover { background: rgba(255, 107, 129, 0.2); border-color: rgba(255, 107, 129, 0.7); }\n" +
  "    .btn-sm { padding: 6px 12px; font-size: 0.76rem; }\n" +
  "    .btn-ghost { background: transparent; }\n" +
  "\n" +
  "    /* form controls */\n" +
  "    label { display: block; font-size: 0.74rem; letter-spacing: 0.08em; color: var(--muted); margin-bottom: 6px; }\n" +
  "    input, select, textarea {\n" +
  "      width: 100%; font-family: inherit; font-size: 0.85rem; color: #fff;\n" +
  "      background: rgba(0, 0, 0, 0.45); border: 1px solid var(--line-2); border-radius: 12px;\n" +
  "      padding: 10px 13px; outline: none;\n" +
  "      transition: border-color 0.2s ease, box-shadow 0.2s ease;\n" +
  "    }\n" +
  "    input:focus, select:focus, textarea:focus {\n" +
  "      border-color: rgba(255, 255, 255, 0.5); box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.06);\n" +
  "    }\n" +
  "    input::placeholder, textarea::placeholder { color: #5d6580; }\n" +
  "    textarea { font-family: var(--mono); font-size: 0.78rem; resize: vertical; line-height: 1.5; }\n" +
  "    select {\n" +
  "      appearance: none; -webkit-appearance: none;\n" +
  "      background-image: linear-gradient(45deg, transparent 50%, #8e8e93 50%),\n" +
  "                        linear-gradient(135deg, #8e8e93 50%, transparent 50%);\n" +
  "      background-position: calc(100% - 18px) 20px, calc(100% - 13px) 20px;\n" +
  "      background-size: 5px 5px, 5px 5px; background-repeat: no-repeat;\n" +
  "    }\n" +
  "    option { background: #0a0a0c; color: #fff; }\n" +
  "\n" +
  "    /* pills & tags */\n" +
  "    .pill {\n" +
  "      display: inline-flex; align-items: center; gap: 6px;\n" +
  "      font-size: 0.7rem; color: var(--muted);\n" +
  "      border: 1px solid var(--line); border-radius: 999px;\n" +
  "      padding: 4px 10px; background: rgba(255, 255, 255, 0.04); white-space: nowrap;\n" +
  "    }\n" +
  "    .tag {\n" +
  "      display: inline-flex; align-items: center; gap: 6px;\n" +
  "      font-size: 0.72rem; font-weight: 600; padding: 3px 10px; border-radius: 999px;\n" +
  "      border: 1px solid rgba(34, 197, 94, 0.3); background: rgba(34, 197, 94, 0.1);\n" +
  "      color: #86efac; white-space: nowrap;\n" +
  "    }\n" +
  "    .tag.warn { border-color: rgba(255, 198, 92, 0.35); background: rgba(255, 198, 92, 0.1); color: #ffd899; }\n" +
  "    .tag.bad { border-color: rgba(255, 107, 129, 0.35); background: rgba(255, 107, 129, 0.12); color: #ffb3bf; }\n" +
  "\n" +
  "    /* tables */\n" +
  "    table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }\n" +
  "    th {\n" +
  "      text-align: left; font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase;\n" +
  "      color: var(--muted); font-weight: 600; padding: 10px 12px; border-bottom: 1px solid var(--line);\n" +
  "    }\n" +
  "    td { padding: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); vertical-align: middle; color: #d7d7db; }\n" +
  "    tr:last-child td { border-bottom: 0; }\n" +
  "    tbody tr:hover { background: rgba(255, 255, 255, 0.03); }\n" +
  "    .ident { display: flex; flex-direction: column; gap: 2px; }\n" +
  "    .ident b { font-family: var(--mono); font-size: 0.78rem; font-weight: 500; }\n" +
  "    .ident span { font-size: 0.72rem; color: var(--muted); }\n" +
  "    .empty { padding: 36px 18px; text-align: center; color: var(--muted); font-size: 0.86rem; }\n" +
  "    .hint { font-size: 0.78rem; color: var(--muted); margin: 0 0 12px; line-height: 1.6; }\n" +
  "\n" +
  "    /* bans / log / toasts */\n" +
  "    .ban-list { display: flex; flex-direction: column; gap: 8px; max-height: 220px; overflow: auto; }\n" +
  "    .ban-item {\n" +
  "      display: flex; justify-content: space-between; gap: 10px;\n" +
  "      font-family: var(--mono); font-size: 0.76rem;\n" +
  "      padding: 8px 10px; border: 1px solid var(--line); border-radius: 10px;\n" +
  "      background: rgba(0, 0, 0, 0.3); color: #c2c9de;\n" +
  "    }\n" +
  "    .ban-item span { color: var(--muted); }\n" +
  "    #log {\n" +
  "      font-family: var(--mono); font-size: 0.76rem; color: var(--muted);\n" +
  "      max-height: 170px; overflow: auto; display: flex; flex-direction: column; gap: 4px;\n" +
  "    }\n" +
  "    #log div { border-left: 2px solid var(--line-2); padding-left: 9px; }\n" +
  "    #log .ok { border-color: var(--mint); color: #86efac; }\n" +
  "    #log .err { border-color: var(--danger); color: #ffb3bf; }\n" +
  "\n" +
  "    .toasts { position: fixed; right: 18px; bottom: 18px; z-index: 60; display: flex; flex-direction: column; gap: 8px; max-width: min(360px, 90vw); }\n" +
  "    .toast {\n" +
  "      border: 1px solid var(--line-2); background: rgba(10, 10, 12, 0.92);\n" +
  "      backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);\n" +
  "      border-radius: 14px; padding: 12px 14px; font-size: 0.82rem;\n" +
  "      box-shadow: 0 20px 50px -20px #000; animation: in 0.25s ease;\n" +
  "    }\n" +
  "    .toast.ok { border-color: rgba(34, 197, 94, 0.45); }\n" +
  "    .toast.err { border-color: rgba(255, 107, 129, 0.5); }\n" +
  "    @keyframes in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }\n" +
  "\n" +
  "    /* login gate */\n" +
  "    #gate {\n" +
  "      position: fixed; inset: 0; z-index: 100; display: grid; place-items: center;\n" +
  "      background: rgba(0, 0, 0, 0.86); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); padding: 20px;\n" +
  "    }\n" +
  "    #gate.hide { display: none; }\n" +
  "    .gate-card {\n" +
  "      width: min(420px, 100%); border: 1px solid var(--line-2); border-radius: 20px; padding: 30px;\n" +
  "      background: linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02));\n" +
  "      box-shadow: 0 40px 90px -40px #000; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);\n" +
  "    }\n" +
  "    .gate-card h1 { font-size: 1.4rem; font-weight: 600; margin: 0 0 8px; }\n" +
  "    .gate-card p { color: var(--muted); font-size: 0.86rem; margin: 0 0 22px; line-height: 1.6; }\n" +
  "    .gate-card .btn { width: 100%; margin-top: 14px; padding: 12px; }\n" +
  "    .err { color: #ffb3bf; font-size: 0.82rem; min-height: 20px; margin-top: 10px; }\n" +
  "    .brand-r { display: flex; align-items: center; gap: 10px; margin-bottom: 22px; font-weight: 700; }\n" +
  "    .mark {\n" +
  "      width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center;\n" +
  "      background: #fff; flex-shrink: 0; box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);\n" +
  "    }\n" +
  "\n" +
  "    /* responsive \u2014 keep the admin actions reachable on phones */\n" +
  "    @media (max-width: 900px) {\n" +
  "      .grid { grid-template-columns: 1fr; }\n" +
  "      .site-header { justify-content: center; gap: 10px; padding: 0; }\n" +
  "      .nav-pill { display: flex; width: auto; flex: 1; padding: 0 8px; }\n" +
  "      .nav-links { display: none; }\n" +
  "      .burger { display: flex; flex-shrink: 0; }\n" +
  "      .nav-actions .nav-status { display: none; }\n" +
  "    }\n" +
  "    @media (max-width: 640px) {\n" +
  "      .nav-btn { padding: 0 12px; }\n" +
  "      .row { flex-direction: column; }\n" +
  "      .card-h { flex-wrap: wrap; }\n" +
  "      .card-b { padding: 14px; }\n" +
  "    }\n" +
  "    @media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }\n" +
  "  </style>\n" +
  "</head>\n" +
  "<body>\n" +
  "  <!-- Background -->\n" +
  "  <div class=\"bg-wave\">\n" +
  "    <div class=\"green-orb orb-1\"></div>\n" +
  "    <div class=\"green-orb orb-2\"></div>\n" +
  "    <div class=\"green-orb orb-3\"></div>\n" +
  "    <div class=\"noise\"></div>\n" +
  "  </div>\n" +
  "\n" +
  "  <!-- \u2500\u2500 login gate \u2500\u2500 -->\n" +
  "  <div id=\"gate\">\n" +
  "    <form class=\"gate-card\" id=\"gateForm\" autocomplete=\"off\">\n" +
  "      <div class=\"brand-r\">\n" +
  "        <span class=\"mark\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\"><path d=\"M5 19c3.6-6.2 6.2-9.6 9-14M8 5h9v3.4h-4.2L18 19h-3.6l-2.2-4.6L8.6 19H5l4.6-7.2H6.4z\" fill=\"#000\"/></svg></span>\n" +
  "        <span>999MS \u00b7 Control</span>\n" +
  "      </div>\n" +
  "      <h1>\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21</h1>\n" +
  "      <p>\u0e43\u0e2a\u0e48 <span class=\"mono\">ADMIN_TOKEN</span> \u0e02\u0e2d\u0e07\u0e42\u0e1b\u0e23\u0e40\u0e08\u0e01\u0e15\u0e4c \u0e23\u0e30\u0e1a\u0e1a\u0e08\u0e30\u0e40\u0e01\u0e47\u0e1a\u0e44\u0e27\u0e49\u0e43\u0e19\u0e41\u0e17\u0e47\u0e1a\u0e19\u0e35\u0e49\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19 (\u0e44\u0e21\u0e48\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e25\u0e07\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07)</p>\n" +
  "      <label for=\"token\">Admin token</label>\n" +
  "      <input id=\"token\" type=\"password\" placeholder=\"\u0e27\u0e32\u0e07 token \u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\" spellcheck=\"false\" />\n" +
  "      <button class=\"btn btn-primary\" id=\"loginBtn\" type=\"submit\">\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a</button>\n" +
  "      <div class=\"err\" id=\"gateErr\"></div>\n" +
  "    </form>\n" +
  "  </div>\n" +
  "\n" +
  "  <div class=\"page\">\n" +
  "    <!-- Header -->\n" +
  "    <header class=\"site-header pop-element\">\n" +
  "      <div class=\"nav-pill\">\n" +
  "        <a class=\"brand\" href=\"/\" aria-label=\"Home\">\n" +
  "          <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 60%; height: 60%;\">\n" +
  "            <path d=\"M12 2L2 7L12 12L22 7L12 2Z\" fill=\"#000\"/>\n" +
  "            <path d=\"M2 17L12 22L22 17\" stroke=\"#000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "            <path d=\"M2 12L12 17L22 12\" stroke=\"#000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "          </svg>\n" +
  "        </a>\n" +
  "        <nav class=\"nav-links\">\n" +
  "          <a href=\"/\" class=\"nav-link\">Home</a>\n" +
  "          <a href=\"/hub\" class=\"nav-link\">Scripts</a>\n" +
  "          <a href=\"/control\" class=\"nav-link is-active\">Control</a>\n" +
  "          <a href=\"/stats\" class=\"nav-link\">Stats</a>\n" +
  "        </nav>\n" +
  "        <div class=\"nav-actions\">\n" +
  "          <span class=\"nav-status\"><span class=\"status-dot\" id=\"gwDot\"></span><span id=\"gwLabel\">API \u2014</span></span>\n" +
  "          <button class=\"nav-btn\" id=\"refreshBtn\" type=\"button\">\n" +
  "            <svg id=\"refreshIcon\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M21 12a9 9 0 1 1-2.6-6.4\"/><path d=\"M21 3v6h-6\"/></svg>\n" +
  "            \u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a\n" +
  "          </button>\n" +
  "          <button class=\"nav-btn nav-btn-ghost\" id=\"logoutBtn\" type=\"button\">\u0e2d\u0e2d\u0e01</button>\n" +
  "        </div>\n" +
  "      </div>\n" +
  "\n" +
  "      <button class=\"burger\" id=\"burger\" aria-label=\"Open menu\" aria-expanded=\"false\">\n" +
  "        <span></span><span></span><span></span>\n" +
  "      </button>\n" +
  "    </header>\n" +
  "\n" +
  "    <!-- Hero -->\n" +
  "    <main class=\"hero\">\n" +
  "      <h1 class=\"headline\" id=\"dynamicHeadline\" aria-label=\"999MS CONTROL\"></h1>\n" +
  "\n" +
  "      <p class=\"subhead pop-element\">\n" +
  "        \u0e2b\u0e19\u0e49\u0e32\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e41\u0e2d\u0e14\u0e21\u0e34\u0e19 \u2014 \u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c, \u0e04\u0e35\u0e22\u0e4c, \u0e41\u0e1a\u0e19 \u0e41\u0e25\u0e30\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e17\u0e23\u0e32\u0e1f\u0e1f\u0e34\u0e01\n" +
  "      </p>\n" +
  "\n" +
  "      <div class=\"live-status pop-element\">\n" +
  "        <span class=\"status-dot\" id=\"liveDot\"></span> <span id=\"liveText\">LIVE \u2014 \u0e01\u0e33\u0e25\u0e31\u0e07\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a API</span>\n" +
  "      </div>\n" +
  "    </main>\n" +
  "\n" +
  "    <!-- Stats -->\n" +
  "    <section class=\"stats-section pop-element\">\n" +
  "      <div class=\"stats\">\n" +
  "        <div class=\"stat\">\n" +
  "          <span class=\"stat-icon\">~</span>\n" +
  "          <span class=\"stat-value\" id=\"statClients\">\u2014</span>\n" +
  "          <span class=\"stat-label\" id=\"statClientsSub\">health check</span>\n" +
  "        </div>\n" +
  "        <div class=\"stat\">\n" +
  "          <span class=\"stat-icon\">#</span>\n" +
  "          <span class=\"stat-value\" id=\"statGateway\">\u2014</span>\n" +
  "          <span class=\"stat-label\" id=\"statGatewaySub\">traffic buffer</span>\n" +
  "        </div>\n" +
  "        <div class=\"stat\">\n" +
  "          <span class=\"stat-icon\">!</span>\n" +
  "          <span class=\"stat-value\" id=\"statBans\">\u2014</span>\n" +
  "          <span class=\"stat-label\" id=\"statBansSub\">hwid / user / ip</span>\n" +
  "        </div>\n" +
  "        <div class=\"stat\">\n" +
  "          <span class=\"stat-icon\">*</span>\n" +
  "          <span class=\"stat-value\" id=\"statUpdated\">\u2014</span>\n" +
  "          <span class=\"stat-label\">\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34\u0e17\u0e38\u0e01 15 \u0e27\u0e34</span>\n" +
  "        </div>\n" +
  "      </div>\n" +
  "    </section>\n" +
  "\n" +
  "    <!-- Dashboard -->\n" +
  "    <section class=\"dash\">\n" +
  "  <div class=\"grid\">\n" +
  "    <div class=\"stack\">\n" +
  "      <section class=\"card\">\n" +
  "        <div class=\"card-h\">\n" +
  "          <h2>\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e25\u0e34\u0e07\u0e01\u0e4c\u0e42\u0e2b\u0e25\u0e14</h2>\n" +
  "          <span class=\"spacer\"></span>\n" +
  "          <span class=\"pill hide-sm\">\u0e1e\u0e32\u0e18\u0e2a\u0e38\u0e48\u0e21 40 hex \u00b7 token \u0e2b\u0e21\u0e14\u0e2d\u0e32\u0e22\u0e38</span>\n" +
  "        </div>\n" +
  "        <div class=\"card-b stack\">\n" +
  "          <p class=\"hint\">\u0e25\u0e34\u0e07\u0e01\u0e4c\u0e41\u0e1a\u0e1asomtank: <span class=\"mono\">/x/&lt;40 hex \u0e2a\u0e38\u0e48\u0e21&gt;?at=&lt;token&gt;</span> \u2014 \u0e41\u0e15\u0e48\u0e25\u0e30\u0e25\u0e34\u0e07\u0e01\u0e4c\u0e21\u0e35 namespace \u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e2d\u0e07 \u0e44\u0e21\u0e48\u0e0b\u0e49\u0e33\u0e01\u0e31\u0e19 \u0e41\u0e25\u0e30\u0e2b\u0e21\u0e14\u0e2d\u0e32\u0e22\u0e38\u0e44\u0e14\u0e49</p>\n" +
  "          <div style=\"display:flex;gap:10px;flex-wrap:wrap\">\n" +
  "            <div style=\"flex:1;min-width:140px\">\n" +
  "              <label for=\"linkScript\">\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c</label>\n" +
  "              <input id=\"linkScript\" value=\"main\" spellcheck=\"false\" />\n" +
  "            </div>\n" +
  "            <div style=\"flex:1;min-width:120px\">\n" +
  "              <label for=\"linkHours\">\u0e2d\u0e32\u0e22\u0e38 (\u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07)</label>\n" +
  "              <input id=\"linkHours\" type=\"number\" min=\"1\" max=\"8760\" value=\"168\" />\n" +
  "            </div>\n" +
  "          </div>\n" +
  "          <button class=\"btn\" id=\"linkBtn\" type=\"button\">\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e25\u0e34\u0e07\u0e01\u0e4c</button>\n" +
  "          <div id=\"linkOut\" class=\"hide\">\n" +
  "            <div style=\"border-top:1px solid var(--line);padding-top:12px\" class=\"stack\">\n" +
  "              <div>\n" +
  "                <label>\u0e25\u0e34\u0e07\u0e01\u0e4c</label>\n" +
  "                <div style=\"display:flex;gap:8px\">\n" +
  "                  <input id=\"linkUrl\" readonly class=\"mono\" style=\"flex:1\" />\n" +
  "                  <button class=\"btn btn-sm\" type=\"button\" data-copy=\"linkUrl\">\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01</button>\n" +
  "                </div>\n" +
  "              </div>\n" +
  "              <div>\n" +
  "                <label>\u0e1a\u0e23\u0e23\u0e17\u0e31\u0e14\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a executor</label>\n" +
  "                <div style=\"display:flex;gap:8px\">\n" +
  "                  <input id=\"linkLine\" readonly class=\"mono\" style=\"flex:1\" />\n" +
  "                  <button class=\"btn btn-sm\" type=\"button\" data-copy=\"linkLine\">\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01</button>\n" +
  "                </div>\n" +
  "              </div>\n" +
  "              <div>\n" +
  "                <label>\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e40\u0e15\u0e47\u0e21 (\u0e21\u0e35 hash \u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a)</label>\n" +
  "                <textarea id=\"linkStub\" readonly rows=\"8\" class=\"mono\" style=\"width:100%;font-size:.76rem\"></textarea>\n" +
  "                <button class=\"btn btn-sm\" type=\"button\" data-copy=\"linkStub\">\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e40\u0e15\u0e47\u0e21</button>\n" +
  "              </div>\n" +
  "              <p class=\"hint\" id=\"linkMeta\" style=\"margin:0\"></p>\n" +
  "            </div>\n" +
  "          </div>\n" +
  "        </div>\n" +
  "      </section>\n" +
  "\n" +
  "      <section class=\"card\" id=\"scriptCard\">\n" +
  "        <div class=\"card-h\">\n" +
  "          <h2>\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e02\u0e2d\u0e07\u0e41\u0e21\u0e1e</h2>\n" +
  "          <span class=\"pill\" id=\"scriptCount\">0</span>\n" +
  "          <span class=\"spacer\"></span>\n" +
  "          <span class=\"pill hide-sm\">place id \u00b7 \u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c \u00b7 \u0e44\u0e1f\u0e25\u0e4c</span>\n" +
  "        </div>\n" +
  "        <div class=\"card-b stack\">\n" +
  "          <p class=\"hint\">\u0e2d\u0e31\u0e1b\u0e42\u0e2b\u0e25\u0e14\u0e2b\u0e23\u0e37\u0e2d\u0e01\u0e14 <b>\u0e41\u0e01\u0e49\u0e44\u0e02</b> \u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e17\u0e35\u0e48\u0e21\u0e35\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e14\u0e49\u0e15\u0e25\u0e2d\u0e14 \u2014 \u0e15\u0e31\u0e27\u0e44\u0e1f\u0e25\u0e4c\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e40\u0e01\u0e47\u0e1a\u0e44\u0e27\u0e49\u0e1a\u0e19 GitHub (<span class=\"mono\">scripts/&lt;name&gt;.lua</span> \u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14 25 MB) \u0e2a\u0e48\u0e27\u0e19 Supabase \u0e40\u0e01\u0e47\u0e1a\u0e41\u0e04\u0e48 metadata \u0e02\u0e19\u0e32\u0e14\u0e40\u0e25\u0e47\u0e01 (\u0e0a\u0e37\u0e48\u0e2d\u0e41\u0e21\u0e1e, Place ID \u0e41\u0e25\u0e30\u0e42\u0e2b\u0e21\u0e14\u0e04\u0e35\u0e22\u0e4c)</p>\n" +
  "          <p class=\"hint\">\u0e43\u0e2a\u0e48\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e42\u0e04\u0e49\u0e14\u0e02\u0e2d\u0e07\u0e41\u0e21\u0e1e\u0e44\u0e14\u0e49\u0e40\u0e25\u0e22 \u2014 runtime \u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e41\u0e25\u0e30\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e2a\u0e16\u0e34\u0e15\u0e34\u0e01\u0e48\u0e2d\u0e19\u0e23\u0e31\u0e19\u0e43\u0e2b\u0e49\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34 \u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01 verification \u0e08\u0e32\u0e01 <span class=\"mono\">main.lua</span>; obfuscate \u0e17\u0e31\u0e49\u0e07\u0e44\u0e1f\u0e25\u0e4c\u0e44\u0e14\u0e49</p>\n" +
  "          <div id=\"editBanner\" style=\"display:none;align-items:center;gap:8px;padding:8px 12px;border-radius:10px;border:1px solid rgba(34,197,94,.4);background:rgba(34,197,94,.08);font-size:.82rem\">\n" +
  "            <span style=\"color:var(--green);font-weight:600\" id=\"editBannerText\">\u0e01\u0e33\u0e25\u0e31\u0e07\u0e41\u0e01\u0e49\u0e44\u0e02 \u2014</span>\n" +
  "            <span class=\"spacer\"></span>\n" +
  "            <button class=\"btn btn-sm btn-ghost\" id=\"upCancelEdit\" type=\"button\">\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e41\u0e01\u0e49\u0e44\u0e02</button>\n" +
  "          </div>\n" +
  "          <div style=\"display:flex;gap:10px;flex-wrap:wrap\">\n" +
  "            <div style=\"flex:1;min-width:130px\">\n" +
  "              <label for=\"upPlace\">Place ID</label>\n" +
  "              <input id=\"upPlace\" inputmode=\"numeric\" spellcheck=\"false\" placeholder=\"1234567890\" />\n" +
  "            </div>\n" +
  "            <div style=\"flex:1;min-width:130px\">\n" +
  "              <label for=\"upName\">\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c</label>\n" +
  "              <input id=\"upName\" spellcheck=\"false\" placeholder=\"main\" />\n" +
  "            </div>\n" +
  "          </div>\n" +
  "          <label style=\"display:flex;align-items:center;gap:9px;margin:0\">\n" +
  "            <input id=\"upKeyRequired\" type=\"checkbox\" checked style=\"width:16px;height:16px;accent-color:#38d6ff\" />\n" +
  "            <span>\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e04\u0e35\u0e22\u0e4c\u0e01\u0e48\u0e2d\u0e19\u0e23\u0e31\u0e19\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c</span>\n" +
  "          </label>\n" +
  "          <p class=\"hint\" style=\"margin:-5px 0 0 25px\">\u0e40\u0e2d\u0e32\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e21\u0e32\u0e22\u0e16\u0e39\u0e01\u0e2d\u0e2d\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e49\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e19\u0e35\u0e49\u0e23\u0e31\u0e19\u0e44\u0e14\u0e49\u0e42\u0e14\u0e22\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e23\u0e2d\u0e01\u0e04\u0e35\u0e22\u0e4c</p>\n" +
  "          <div>\n" +
  "            <label for=\"upFile\">\u0e44\u0e1f\u0e25\u0e4c\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c (.lua / .txt)</label>\n" +
  "            <input id=\"upFile\" type=\"file\" accept=\".lua,.txt,text/plain,.luau\" />\n" +
  "          </div>\n" +
  "          <div>\n" +
  "            <label for=\"upBody\">\u0e2b\u0e23\u0e37\u0e2d\u0e27\u0e32\u0e07\u0e42\u0e04\u0e49\u0e14\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e15\u0e23\u0e07\u0e19\u0e35\u0e49</label>\n" +
  "            <textarea id=\"upBody\" rows=\"7\" spellcheck=\"false\" class=\"mono\" style=\"font-size:.74rem\" placeholder=\"print('hello from 999MS')\"></textarea>\n" +
  "          </div>\n" +
  "          <div class=\"row\">\n" +
  "            <button class=\"btn btn-primary\" id=\"upSave\" type=\"button\">\u0e2d\u0e31\u0e1b\u0e42\u0e2b\u0e25\u0e14\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c</button>\n" +
  "            <button class=\"btn btn-sm btn-ghost\" id=\"upRefresh\" type=\"button\">\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23</button>\n" +
  "          </div>\n" +
  "          <p class=\"hint\" id=\"upMeta\" style=\"margin:0\"></p>\n" +
  "          <div style=\"border-top:1px solid var(--line);padding-top:12px\">\n" +
  "            <div class=\"k\" style=\"font-size:.74rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:8px\">\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e17\u0e35\u0e48\u0e2d\u0e31\u0e1b\u0e42\u0e2b\u0e25\u0e14\u0e41\u0e25\u0e49\u0e27</div>\n" +
  "            <div class=\"ban-list\" id=\"scriptList\"><div class=\"hint\" style=\"margin:0\">\u2014</div></div>\n" +
  "          </div>\n" +
  "        </div>\n" +
  "      </section>\n" +
  "\n" +
  "      <section class=\"card\">\n" +
  "        <div class=\"card-h\"><h2>\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e01\u0e32\u0e23\u0e17\u0e33\u0e07\u0e32\u0e19</h2><span class=\"spacer\"></span>\n" +
  "          <button class=\"btn btn-sm btn-ghost\" id=\"clearLog\" type=\"button\">\u0e25\u0e49\u0e32\u0e07</button>\n" +
  "        </div>\n" +
  "        <div class=\"card-b\"><div id=\"log\"></div></div>\n" +
  "      </section>\n" +
  "\n" +
  "      <section class=\"card\">\n" +
  "        <div class=\"card-h\">\n" +
  "          <h2>\u0e04\u0e33\u0e02\u0e2d\u0e17\u0e35\u0e48\u0e40\u0e02\u0e49\u0e32\u0e21\u0e32\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14</h2>\n" +
  "          <span class=\"pill\" id=\"traceCount\">0</span>\n" +
  "          <span class=\"spacer\"></span>\n" +
  "          <span class=\"pill hide-sm\">\u0e08\u0e32\u0e01 executor / \u0e40\u0e1a\u0e23\u0e32\u0e27\u0e4c\u0e40\u0e0b\u0e2d\u0e23\u0e4c</span>\n" +
  "        </div>\n" +
  "        <div id=\"traceHost\"><div class=\"empty\">\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25</div></div>\n" +
  "      </section>\n" +
  "\n" +
  "      <section class=\"card\">\n" +
  "        <div class=\"card-h\">\n" +
  "          <h2>\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22</h2>\n" +
  "          <span class=\"pill\" id=\"eventCount\">0</span>\n" +
  "          <span class=\"spacer\"></span>\n" +
  "          <span class=\"pill hide-sm\">hop / hwid / ban</span>\n" +
  "        </div>\n" +
  "        <div id=\"eventHost\"><div class=\"empty\">\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c</div></div>\n" +
  "      </section>\n" +
  "    </div>\n" +
  "\n" +
  "    <div class=\"stack\">\n" +
  "      <section class=\"card\">\n" +
  "        <div class=\"card-h\"><h2>\u0e41\u0e1a\u0e19 / \u0e15\u0e31\u0e14\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c</h2></div>\n" +
  "        <div class=\"card-b stack\">\n" +
  "          <p class=\"hint\">\u0e41\u0e1a\u0e19\u0e21\u0e35\u0e1c\u0e25\u0e17\u0e31\u0e19\u0e17\u0e35\u0e01\u0e31\u0e1a\u0e04\u0e33\u0e02\u0e2d\u0e16\u0e31\u0e14\u0e44\u0e1b \u2014 \u0e43\u0e2a\u0e48 <span class=\"mono\">hwid_\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c</span> \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e1a\u0e19\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e19\u0e31\u0e49\u0e19 \u0e2b\u0e23\u0e37\u0e2d\u0e43\u0e2a\u0e48 <span class=\"mono\">hwid</span> \u0e40\u0e1b\u0e25\u0e48\u0e32\u0e46 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e1a\u0e19\u0e17\u0e38\u0e01\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c</p>\n" +
  "          <div>\n" +
  "            <label for=\"banType\">\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17</label>\n" +
  "            <select id=\"banType\">\n" +
  "              <option value=\"hwid\">HWID / hwid_\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c</option>\n" +
  "              <option value=\"hwidHash\">HWID hash (64 hex)</option>\n" +
  "              <option value=\"user\">User ID</option>\n" +
  "              <option value=\"ip\">IP address</option>\n" +
  "            </select>\n" +
  "          </div>\n" +
  "          <div>\n" +
  "            <label for=\"banValue\">\u0e04\u0e48\u0e32</label>\n" +
  "            <input id=\"banValue\" placeholder=\"\u0e27\u0e32\u0e07\u0e04\u0e48\u0e32\u0e41\u0e25\u0e49\u0e27\u0e01\u0e14\u0e41\u0e1a\u0e19\" spellcheck=\"false\" />\n" +
  "          </div>\n" +
  "          <button class=\"btn btn-danger\" id=\"banBtn\" type=\"button\">\u0e41\u0e1a\u0e19</button>\n" +
  "          <div style=\"border-top:1px solid var(--line);padding-top:12px\">\n" +
  "            <div class=\"k\" style=\"font-size:.74rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:8px\">\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e41\u0e1a\u0e19\u0e2d\u0e22\u0e39\u0e48</div>\n" +
  "            <div class=\"ban-list\" id=\"banList\"><div class=\"hint\" style=\"margin:0\">\u2014</div></div>\n" +
  "          </div>\n" +
  "        </div>\n" +
  "      </section>\n" +
  "\n" +
  "    </div>\n" +
  "  </div>\n" +
  "    </section>\n" +
  "  </div>\n" +
  "\n" +
  "  <div class=\"toasts\" id=\"toasts\"></div>\n" +
  "\n" +
  "  <script>\n" +
  "    /* HUB theme motion + live probe (identical behaviour to the HUB page) */\n" +
  "    (function () {\n" +
  "      \"use strict\";\n" +
  "\n" +
  "      function far() {\n" +
  "        return {\n" +
  "          tx: ((Math.random() - 0.5) * 420) + \"px\",\n" +
  "          ty: ((Math.random() - 0.5) * 420) + \"px\",\n" +
  "          tr: ((Math.random() - 0.5) * 140) + \"deg\"\n" +
  "        };\n" +
  "      }\n" +
  "\n" +
  "      function reveal(elements) {\n" +
  "        elements.forEach(function (el) {\n" +
  "          el.classList.remove(\"pop-element\");\n" +
  "          el.style.opacity = \"1\";\n" +
  "          el.style.visibility = \"visible\";\n" +
  "          el.style.transform = \"none\";\n" +
  "          el.style.filter = \"none\";\n" +
  "        });\n" +
  "      }\n" +
  "\n" +
  "      try {\n" +
  "        var headline = document.getElementById(\"dynamicHeadline\");\n" +
  "        var text = \"CONTROL\";\n" +
  "\n" +
  "        text.split(\"\").forEach(function (ch) {\n" +
  "          var span = document.createElement(\"span\");\n" +
  "          span.className = \"char\";\n" +
  "          span.textContent = ch;\n" +
  "          span.setAttribute(\"data-char\", ch);\n" +
  "          headline.appendChild(span);\n" +
  "        });\n" +
  "\n" +
  "        setTimeout(function () {\n" +
  "          var chars = headline.querySelectorAll(\".char\");\n" +
  "          chars.forEach(function (span, index) {\n" +
  "            var d = far();\n" +
  "            span.style.setProperty(\"--tx\", d.tx);\n" +
  "            span.style.setProperty(\"--ty\", d.ty);\n" +
  "            span.style.setProperty(\"--tr\", d.tr);\n" +
  "            var delay = 0.2 + (index * 0.12);\n" +
  "            span.style.setProperty(\"--delay\", delay + \"s\");\n" +
  "            span.classList.add(\"pop-in\");\n" +
  "\n" +
  "            if (index === chars.length - 1) {\n" +
  "              setTimeout(function () {\n" +
  "                chars.forEach(function (c) { c.classList.add(\"shimmer-ready\"); });\n" +
  "              }, (delay + 2) * 1000);\n" +
  "            }\n" +
  "          });\n" +
  "        }, 50);\n" +
  "\n" +
  "        var pops = Array.prototype.slice.call(document.querySelectorAll(\".pop-element\"));\n" +
  "        pops.forEach(function (el, index) {\n" +
  "          var d = far();\n" +
  "          el.style.setProperty(\"--tx\", d.tx);\n" +
  "          el.style.setProperty(\"--ty\", d.ty);\n" +
  "          el.style.setProperty(\"--tr\", d.tr);\n" +
  "          el.style.setProperty(\"--delay\", (1.0 + index * 0.15) + \"s\");\n" +
  "        });\n" +
  "        setTimeout(function () {\n" +
  "          pops.forEach(function (el) { el.classList.add(\"pop-in\"); });\n" +
  "        }, 60);\n" +
  "      } catch (err) {\n" +
  "        reveal(Array.prototype.slice.call(document.querySelectorAll(\".pop-element\")));\n" +
  "      }\n" +
  "\n" +
  "      /* mobile menu */\n" +
  "      var burger = document.getElementById(\"burger\");\n" +
  "      var navLinks = document.querySelector(\".nav-links\");\n" +
  "      var navActions = document.querySelector(\".nav-actions\");\n" +
  "\n" +
  "      if (burger && navLinks) {\n" +
  "        burger.addEventListener(\"click\", function () {\n" +
  "          var open = burger.getAttribute(\"aria-expanded\") === \"true\";\n" +
  "          burger.setAttribute(\"aria-expanded\", String(!open));\n" +
  "          if (!open) {\n" +
  "            navLinks.style.display = \"flex\";\n" +
  "            navLinks.style.flexDirection = \"column\";\n" +
  "            navLinks.style.position = \"absolute\";\n" +
  "            navLinks.style.top = \"70px\";\n" +
  "            navLinks.style.left = \"0\";\n" +
  "            navLinks.style.width = \"100%\";\n" +
  "            navLinks.style.background = \"rgba(10,10,12,0.95)\";\n" +
  "            navLinks.style.padding = \"20px\";\n" +
  "            navLinks.style.borderRadius = \"16px\";\n" +
  "            navLinks.style.border = \"1px solid rgba(255,255,255,0.1)\";\n" +
  "            if (navActions) navActions.style.display = \"none\";\n" +
  "          } else {\n" +
  "            navLinks.style.display = \"\";\n" +
  "            if (navActions) navActions.style.display = \"\";\n" +
  "          }\n" +
  "        });\n" +
  "      }\n" +
  "\n" +
  "      /* live status */\n" +
  "      var liveText = document.getElementById(\"liveText\");\n" +
  "      var liveDot = document.getElementById(\"liveDot\");\n" +
  "      var started = Date.now();\n" +
  "\n" +
  "      fetch(\"/api/health\", { cache: \"no-store\" })\n" +
  "        .then(function (res) {\n" +
  "          if (!res.ok) throw new Error(\"HTTP \" + res.status);\n" +
  "          return res.json();\n" +
  "        })\n" +
  "        .then(function (data) {\n" +
  "          var ms = Date.now() - started;\n" +
  "          if (liveText) liveText.textContent = \"LIVE \u00b7 \" + ms + \" MS \u00b7 v\" + (data.version || \"\");\n" +
  "        })\n" +
  "        .catch(function () {\n" +
  "          if (liveText) {\n" +
  "            liveText.textContent = \"OFFLINE \u2014 API NOT REACHABLE\";\n" +
  "            liveText.style.color = \"#ff6b81\";\n" +
  "            liveText.style.textShadow = \"0 0 10px rgba(255, 107, 129, 0.5)\";\n" +
  "          }\n" +
  "          if (liveDot) {\n" +
  "            liveDot.style.background = \"#ff6b81\";\n" +
  "            liveDot.style.boxShadow = \"0 0 10px #ff6b81\";\n" +
  "          }\n" +
  "        });\n" +
  "    })();\n" +
  "  </script>\n" +
  "<script>\n" +
  "(function () {\n" +
  "  'use strict';\n" +
  "  var KEY = 'ms999_admin_token';\n" +
  "  var state = { token: sessionStorage.getItem(KEY) || '', timer: null, busy: false };\n" +
  "\n" +
  "  var $ = function (id) { return document.getElementById(id); };\n" +
  "  var gate = $('gate'), gateErr = $('gateErr'), gateForm = $('gateForm'), tokenInput = $('token');\n" +
  "  var currentScriptItems = [], selectedFileCode = null, editingItem = null;\n" +
  "  var upFile = $('upFile'), upBody = $('upBody');\n" +
  "  var defaultBodyPlaceholder = upBody ? upBody.placeholder : '';\n" +
  "  var fileReadBusy = false, fileReadToken = 0, selectedFileName = '';\n" +
  "  var MAX_SCRIPT_FILE_BYTES = 25 * 1024 * 1024;\n" +
  "  var MAX_UPLOAD_JSON_BYTES = 4.1 * 1024 * 1024;\n" +
  "\n" +
  "  function exitEditMode(clearInputs) {\n" +
  "    editingItem = null;\n" +
  "    selectedFileCode = null;\n" +
  "    selectedFileName = '';\n" +
  "    fileReadBusy = false;\n" +
  "    fileReadToken++;\n" +
  "    if (upFile) upFile.value = '';\n" +
  "    if ($('editBanner')) $('editBanner').style.display = 'none';\n" +
  "    if ($('upSave')) $('upSave').textContent = '\u0e2d\u0e31\u0e1b\u0e42\u0e2b\u0e25\u0e14\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c';\n" +
  "    if (upBody) {\n" +
  "      upBody.rows = 7;\n" +
  "      upBody.placeholder = defaultBodyPlaceholder;\n" +
  "      upBody.value = '';\n" +
  "    }\n" +
  "    if (clearInputs) {\n" +
  "      if ($('upPlace')) $('upPlace').value = '';\n" +
  "      if ($('upName')) $('upName').value = '';\n" +
  "      if ($('upKeyRequired')) $('upKeyRequired').checked = true;\n" +
  "    }\n" +
  "    renderScripts(currentScriptItems);\n" +
  "  }\n" +
  "\n" +
  "  if (upFile) {\n" +
  "    upFile.addEventListener('change', function () {\n" +
  "      var file = upFile.files && upFile.files[0];\n" +
  "      var token = ++fileReadToken;\n" +
  "      selectedFileCode = null;\n" +
  "      selectedFileName = '';\n" +
  "      fileReadBusy = false;\n" +
  "      if (!file) return;\n" +
  "      if (file.size > MAX_SCRIPT_FILE_BYTES) {\n" +
  "        upFile.value = '';\n" +
  "        $('upMeta').textContent = '\u0e44\u0e1f\u0e25\u0e4c\u0e43\u0e2b\u0e0d\u0e48\u0e40\u0e01\u0e34\u0e19\u0e02\u0e19\u0e32\u0e14\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14 25 MB';\n" +
  "        toast('\u0e44\u0e1f\u0e25\u0e4c\u0e43\u0e2b\u0e0d\u0e48\u0e40\u0e01\u0e34\u0e19\u0e02\u0e19\u0e32\u0e14\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14 25 MB', 'err');\n" +
  "        return;\n" +
  "      }\n" +
  "      selectedFileName = file.name;\n" +
  "      fileReadBusy = true;\n" +
  "      if (upBody) {\n" +
  "        upBody.value = '';\n" +
  "        upBody.placeholder = '\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2d\u0e48\u0e32\u0e19\u0e44\u0e1f\u0e25\u0e4c ' + file.name + ' (' + bytes(file.size) + ')\u2026';\n" +
  "      }\n" +
  "      $('upMeta').textContent = '\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2d\u0e48\u0e32\u0e19\u0e44\u0e1f\u0e25\u0e4c ' + file.name + ' (' + bytes(file.size) + ')\u2026';\n" +
  "      readFileText(file).then(function (code) {\n" +
  "        if (token !== fileReadToken) return;\n" +
  "        selectedFileCode = code;\n" +
  "        fileReadBusy = false;\n" +
  "        if (upBody) upBody.placeholder = '\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e44\u0e1f\u0e25\u0e4c\u0e41\u0e25\u0e49\u0e27: ' + file.name + ' (' + bytes(file.size) + ')';\n" +
  "        $('upMeta').textContent = '\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e44\u0e1f\u0e25\u0e4c\u0e41\u0e25\u0e49\u0e27: ' + file.name + ' (' + bytes(file.size) + ') \u2014 \u0e01\u0e14\u0e2d\u0e31\u0e1b\u0e42\u0e2b\u0e25\u0e14\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e15\u0e48\u0e2d';\n" +
  "      }).catch(function (error) {\n" +
  "        if (token !== fileReadToken) return;\n" +
  "        fileReadBusy = false;\n" +
  "        selectedFileCode = null;\n" +
  "        selectedFileName = '';\n" +
  "        $('upMeta').textContent = '\u0e2d\u0e48\u0e32\u0e19\u0e44\u0e1f\u0e25\u0e4c\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08: ' + (error && error.message ? error.message : '\u0e2d\u0e48\u0e32\u0e19\u0e44\u0e1f\u0e25\u0e4c\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49');\n" +
  "        toast('\u0e2d\u0e48\u0e32\u0e19\u0e44\u0e1f\u0e25\u0e4c\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08', 'err');\n" +
  "      });\n" +
  "    });\n" +
  "  }\n" +
  "\n" +
  "  if (upBody) {\n" +
  "    upBody.addEventListener('input', function () {\n" +
  "      if (fileReadBusy || selectedFileCode !== null) {\n" +
  "        fileReadToken++;\n" +
  "        fileReadBusy = false;\n" +
  "        selectedFileCode = null;\n" +
  "        selectedFileName = '';\n" +
  "        if (upFile) upFile.value = '';\n" +
  "        upBody.placeholder = defaultBodyPlaceholder;\n" +
  "        $('upMeta').textContent = '\u0e43\u0e0a\u0e49\u0e42\u0e04\u0e49\u0e14\u0e08\u0e32\u0e01\u0e0a\u0e48\u0e2d\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21';\n" +
  "      }\n" +
  "    });\n" +
  "  }\n" +
  "\n" +
  "  if ($('upCancelEdit')) {\n" +
  "    $('upCancelEdit').addEventListener('click', function () { exitEditMode(true); });\n" +
  "  }\n" +
  "\n" +
  "  function api(path, body, timeoutMs) {\n" +
  "    var controller = timeoutMs && typeof AbortController !== 'undefined' ? new AbortController() : null;\n" +
  "    var timer = controller ? setTimeout(function () { controller.abort(); }, timeoutMs) : null;\n" +
  "    var options = {\n" +
  "      method: 'POST',\n" +
  "      headers: { 'content-type': 'application/json', 'x-admin-token': state.token },\n" +
  "      body: JSON.stringify(body || {}),\n" +
  "      cache: 'no-store'\n" +
  "    };\n" +
  "    if (controller) options.signal = controller.signal;\n" +
  "    return fetch(path, options).then(function (res) {\n" +
  "      return res.json().catch(function () { return {}; }).then(function (data) {\n" +
  "        return { status: res.status, data: data };\n" +
  "      });\n" +
  "    }).finally(function () {\n" +
  "      if (timer) clearTimeout(timer);\n" +
  "    });\n" +
  "  }\n" +
  "\n" +
  "  function toast(message, kind) {\n" +
  "    var el = document.createElement('div');\n" +
  "    el.className = 'toast ' + (kind || '');\n" +
  "    el.textContent = message;\n" +
  "    $('toasts').appendChild(el);\n" +
  "    setTimeout(function () { el.remove(); }, 4200);\n" +
  "  }\n" +
  "\n" +
  "  function logLine(message, kind) {\n" +
  "    var line = document.createElement('div');\n" +
  "    if (kind) line.className = kind;\n" +
  "    var t = new Date().toLocaleTimeString('th-TH');\n" +
  "    line.textContent = t + '  ' + message;\n" +
  "    var host = $('log');\n" +
  "    host.insertBefore(line, host.firstChild);\n" +
  "    while (host.children.length > 60) host.removeChild(host.lastChild);\n" +
  "  }\n" +
  "\n" +
  "  function bytes(value) {\n" +
  "    var n = Number(value) || 0;\n" +
  "    if (n < 1024) return n + ' B';\n" +
  "    if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';\n" +
  "    return (n / 1024 / 1024).toFixed(1) + ' MB';\n" +
  "  }\n" +
  "\n" +
  "  function uint8ToBase64(data) {\n" +
  "    var parts = [];\n" +
  "    for (var i = 0; i < data.length; i += 0x8000) {\n" +
  "      parts.push(String.fromCharCode.apply(null, data.subarray(i, Math.min(i + 0x8000, data.length))));\n" +
  "    }\n" +
  "    return btoa(parts.join(''));\n" +
  "  }\n" +
  "\n" +
  "  function base64ToUint8(value) {\n" +
  "    var binary = atob(value);\n" +
  "    var data = new Uint8Array(binary.length);\n" +
  "    for (var i = 0; i < binary.length; i++) data[i] = binary.charCodeAt(i);\n" +
  "    return data;\n" +
  "  }\n" +
  "\n" +
  "  function compressGzipBase64(text) {\n" +
  "    if (typeof CompressionStream === 'undefined' || typeof TextEncoder === 'undefined' || typeof Response === 'undefined') {\n" +
  "      return Promise.resolve(null);\n" +
  "    }\n" +
  "    try {\n" +
  "      var stream = new Blob([new TextEncoder().encode(text)]).stream()\n" +
  "        .pipeThrough(new CompressionStream('gzip'));\n" +
  "      return new Response(stream).arrayBuffer().then(function (buffer) {\n" +
  "        return uint8ToBase64(new Uint8Array(buffer));\n" +
  "      });\n" +
  "    } catch (error) {\n" +
  "      return Promise.resolve(null);\n" +
  "    }\n" +
  "  }\n" +
  "\n" +
  "  function decompressGzipBase64(value) {\n" +
  "    if (typeof DecompressionStream === 'undefined' || typeof Response === 'undefined') {\n" +
  "      return Promise.reject(new Error('\u0e40\u0e1a\u0e23\u0e32\u0e27\u0e4c\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e19\u0e35\u0e49\u0e44\u0e21\u0e48\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e04\u0e25\u0e32\u0e22\u0e44\u0e1f\u0e25\u0e4c gzip'));\n" +
  "    }\n" +
  "    try {\n" +
  "      var stream = new Blob([base64ToUint8(value)]).stream()\n" +
  "        .pipeThrough(new DecompressionStream('gzip'));\n" +
  "      return new Response(stream).text();\n" +
  "    } catch (error) {\n" +
  "      return Promise.reject(error);\n" +
  "    }\n" +
  "  }\n" +
  "\n" +
  "  function readFileText(file) {\n" +
  "    if (file && typeof file.text === 'function') return file.text();\n" +
  "    return new Promise(function (resolve, reject) {\n" +
  "      var reader = new FileReader();\n" +
  "      reader.onload = function () { resolve(String(reader.result || '')); };\n" +
  "      reader.onerror = function () { reject(reader.error || new Error('\u0e2d\u0e48\u0e32\u0e19\u0e44\u0e1f\u0e25\u0e4c\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08')); };\n" +
  "      reader.readAsText(file, 'UTF-8');\n" +
  "    });\n" +
  "  }\n" +
  "\n" +
  "  function renderScripts(items) {\n" +
  "    currentScriptItems = items || [];\n" +
  "    var host = $('scriptList');\n" +
  "    $('scriptCount').textContent = String(currentScriptItems.length);\n" +
  "    if (!currentScriptItems.length) {\n" +
  "      host.innerHTML = '<div class=\"hint\" style=\"margin:0\">\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c \u2014 \u0e2d\u0e31\u0e1b\u0e42\u0e2b\u0e25\u0e14\u0e41\u0e25\u0e49\u0e27\u0e08\u0e30\u0e44\u0e1b\u0e42\u0e0a\u0e27\u0e4c\u0e43\u0e19\u0e2b\u0e19\u0e49\u0e32 /scripts</div>';\n" +
  "      return;\n" +
  "    }\n" +
  "    host.innerHTML = currentScriptItems.map(function (item, index) {\n" +
  "      var when = item.updatedAt ? new Date(item.updatedAt).toLocaleString('th-TH') : '\u2014';\n" +
  "      var isEditing = editingItem && editingItem.placeId === item.placeId && editingItem.name === item.name;\n" +
  "      var activeStyle = isEditing ? ' style=\"border-color:rgba(34,197,94,.5);background:rgba(34,197,94,.06)\"' : '';\n" +
  "      return '<div class=\"ban-item\"' + activeStyle + '>' +\n" +
  "        '<div style=\"min-width:0\">' +\n" +
  "          '<b class=\"mono\">' + esc(item.name) + '</b>' +\n" +
  "          '<div class=\"hint\" style=\"margin:0\">place ' + esc(item.placeId) + ' \u00b7 ' + (item.keyRequired === false ? '\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e04\u0e35\u0e22\u0e4c' : '\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e04\u0e35\u0e22\u0e4c') + ' \u00b7 ' + bytes(item.size) + ' \u00b7 ' + esc(when) + '</div>' +\n" +
  "        '</div>' +\n" +
  "        '<span class=\"spacer\"></span>' +\n" +
  "        '<button class=\"btn btn-sm btn-ghost\" type=\"button\" data-edit=\"' + index + '\">\u0e41\u0e01\u0e49\u0e44\u0e02</button>' +\n" +
  "        '<button class=\"btn btn-sm btn-ghost\" type=\"button\" data-del=\"' + index + '\">\u0e25\u0e1a</button>' +\n" +
  "      '</div>';\n" +
  "    }).join('');\n" +
  "    Array.prototype.forEach.call(host.querySelectorAll('button[data-edit]'), function (btn) {\n" +
  "      btn.addEventListener('click', function () {\n" +
  "        var item = currentScriptItems[Number(btn.getAttribute('data-edit'))];\n" +
  "        if (!item) return;\n" +
  "        startEditScript(item, btn);\n" +
  "      });\n" +
  "    });\n" +
  "    Array.prototype.forEach.call(host.querySelectorAll('button[data-del]'), function (btn) {\n" +
  "      btn.addEventListener('click', function () {\n" +
  "        var item = currentScriptItems[Number(btn.getAttribute('data-del'))];\n" +
  "        if (!item) return;\n" +
  "        deleteScript(item);\n" +
  "      });\n" +
  "    });\n" +
  "  }\n" +
  "\n" +
  "  function startEditScript(item, btn) {\n" +
  "    if (btn) btn.disabled = true;\n" +
  "    fileReadToken++;\n" +
  "    fileReadBusy = false;\n" +
  "    selectedFileCode = null;\n" +
  "    selectedFileName = '';\n" +
  "    if (upFile) upFile.value = '';\n" +
  "    $('upMeta').textContent = '\u0e01\u0e33\u0e25\u0e31\u0e07\u0e14\u0e36\u0e07\u0e42\u0e04\u0e49\u0e14\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c ' + item.name + ' \u0e08\u0e32\u0e01 GitHub\u2026';\n" +
  "    api('/api/control/scripts', { op: 'get', name: item.name })\n" +
  "      .then(function (result) {\n" +
  "        if (btn) btn.disabled = false;\n" +
  "        var data = result.data || {};\n" +
  "        if (!data.ok) {\n" +
  "          var reason = data.reason || ('HTTP ' + result.status);\n" +
  "          $('upMeta').textContent = '\u0e14\u0e36\u0e07\u0e42\u0e04\u0e49\u0e14\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08: ' + reason;\n" +
  "          toast('\u0e14\u0e36\u0e07\u0e42\u0e04\u0e49\u0e14\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08: ' + reason, 'err');\n" +
  "          return null;\n" +
  "        }\n" +
  "        if (data.bodyGzip) return decompressGzipBase64(data.bodyGzip);\n" +
  "        return typeof data.body === 'string' ? data.body : '';\n" +
  "      })\n" +
  "      .then(function (code) {\n" +
  "        if (code === null || code === undefined) return;\n" +
  "        editingItem = { placeId: String(item.placeId), name: String(item.name) };\n" +
  "        $('upPlace').value = editingItem.placeId;\n" +
  "        $('upName').value = editingItem.name;\n" +
  "        if ($('upKeyRequired')) $('upKeyRequired').checked = item.keyRequired !== false;\n" +
  "        if (upFile) upFile.value = '';\n" +
  "        if ($('editBannerText')) {\n" +
  "          $('editBannerText').textContent = '\u0e01\u0e33\u0e25\u0e31\u0e07\u0e41\u0e01\u0e49\u0e44\u0e02: ' + editingItem.name + ' (place ' + editingItem.placeId + ')';\n" +
  "        }\n" +
  "        if ($('editBanner')) $('editBanner').style.display = 'flex';\n" +
  "        if ($('upSave')) $('upSave').textContent = '\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e01\u0e32\u0e23\u0e41\u0e01\u0e49\u0e44\u0e02';\n" +
  "        if (upBody) {\n" +
  "          upBody.rows = 10;\n" +
  "          if (code.length <= 131072) {\n" +
  "            selectedFileCode = null;\n" +
  "            upBody.value = code;\n" +
  "            upBody.placeholder = defaultBodyPlaceholder;\n" +
  "          } else {\n" +
  "            selectedFileCode = code;\n" +
  "            upBody.value = '';\n" +
  "            upBody.placeholder = '\u0e42\u0e2b\u0e25\u0e14\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e02\u0e19\u0e32\u0e14\u0e43\u0e2b\u0e0d\u0e48 ' + editingItem.name + ' (' + bytes(code.length) + ') \u0e44\u0e27\u0e49\u0e41\u0e25\u0e49\u0e27 \u2014 \u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19 Place ID / \u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c \u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e44\u0e1f\u0e25\u0e4c\u0e43\u0e2b\u0e21\u0e48\u0e17\u0e31\u0e1a\u0e44\u0e14\u0e49\u0e40\u0e25\u0e22';\n" +
  "          }\n" +
  "        }\n" +
  "        $('upMeta').textContent = '\u0e42\u0e2b\u0e25\u0e14\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c ' + editingItem.name + ' (' + bytes(code.length) + ') \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e41\u0e01\u0e49\u0e44\u0e02\u0e41\u0e25\u0e49\u0e27';\n" +
  "        renderScripts(currentScriptItems);\n" +
  "        var card = $('scriptCard');\n" +
  "        if (card && card.scrollIntoView) card.scrollIntoView({ behavior: 'smooth', block: 'start' });\n" +
  "        if (upBody && code.length <= 131072) upBody.focus();\n" +
  "      })\n" +
  "      .catch(function (err) {\n" +
  "        if (btn) btn.disabled = false;\n" +
  "        toast('\u0e14\u0e36\u0e07\u0e42\u0e04\u0e49\u0e14\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08: ' + (err && err.message ? err.message : 'network error'), 'err');\n" +
  "      });\n" +
  "  }\n" +
  "\n" +
  "  function loadScripts() {\n" +
  "    return api('/api/control/scripts', { op: 'list' }).then(function (result) {\n" +
  "      var data = result.data || {};\n" +
  "      if (!result.status || result.status >= 400 || !data.ok) {\n" +
  "        renderScripts([]);\n" +
  "        if (data && data.note) $('upMeta').textContent = data.note;\n" +
  "        return;\n" +
  "      }\n" +
  "      renderScripts(data.items || []);\n" +
  "    }).catch(function () { renderScripts([]); });\n" +
  "  }\n" +
  "\n" +
  "  function deleteScript(item) {\n" +
  "    api('/api/control/scripts', { op: 'delete', placeId: item.placeId, name: item.name })\n" +
  "      .then(function (result) {\n" +
  "        var data = result.data || {};\n" +
  "        if (data.ok) {\n" +
  "          if (editingItem && editingItem.placeId === item.placeId && editingItem.name === item.name) {\n" +
  "            exitEditMode(true);\n" +
  "          }\n" +
  "          toast('\u0e25\u0e1a\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c ' + item.name + ' \u0e41\u0e25\u0e49\u0e27', 'ok');\n" +
  "          logLine('\u0e25\u0e1a\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c ' + item.name + ' (place ' + item.placeId + ')' + ((data.github && data.github.ok) ? ' \u00b7 \u0e25\u0e1a\u0e44\u0e1f\u0e25\u0e4c\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01 GitHub \u0e14\u0e49\u0e27\u0e22' : ''), 'ok');\n" +
  "        } else {\n" +
  "          toast('\u0e25\u0e1a\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08: ' + (data.reason || result.status), 'err');\n" +
  "        }\n" +
  "        return loadScripts();\n" +
  "      });\n" +
  "  }\n" +
  "\n" +
  "  if ($('upSave')) {\n" +
  "    $('upSave').addEventListener('click', function () {\n" +
  "      var btn = $('upSave');\n" +
  "      var placeId = ($('upPlace').value || '').trim();\n" +
  "      var name = ($('upName').value || '').trim();\n" +
  "      if (!placeId) { toast('\u0e43\u0e2a\u0e48 Place ID \u0e01\u0e48\u0e2d\u0e19', 'err'); return; }\n" +
  "      if (!name) { toast('\u0e43\u0e2a\u0e48\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e01\u0e48\u0e2d\u0e19', 'err'); return; }\n" +
  "      if (fileReadBusy) { toast('\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2d\u0e48\u0e32\u0e19\u0e44\u0e1f\u0e25\u0e4c\u0e2d\u0e22\u0e39\u0e48 \u0e23\u0e2d\u0e2a\u0e31\u0e01\u0e04\u0e23\u0e39\u0e48\u0e41\u0e25\u0e49\u0e27\u0e01\u0e14\u0e2d\u0e31\u0e1b\u0e42\u0e2b\u0e25\u0e14\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07', 'err'); return; }\n" +
  "      var code = selectedFileCode !== null ? selectedFileCode : (upBody.value || '');\n" +
  "      if (!code.trim()) { toast('\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e44\u0e1f\u0e25\u0e4c\u0e2b\u0e23\u0e37\u0e2d\u0e27\u0e32\u0e07\u0e42\u0e04\u0e49\u0e14\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e01\u0e48\u0e2d\u0e19', 'err'); return; }\n" +
  "      var sourceBytes = new Blob([code]).size;\n" +
  "      if (sourceBytes > MAX_SCRIPT_FILE_BYTES) {\n" +
  "        toast('\u0e44\u0e1f\u0e25\u0e4c\u0e43\u0e2b\u0e0d\u0e48\u0e40\u0e01\u0e34\u0e19\u0e02\u0e19\u0e32\u0e14\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14 25 MB', 'err');\n" +
  "        return;\n" +
  "      }\n" +
  "\n" +
  "      var wasEditing = editingItem ? { placeId: editingItem.placeId, name: editingItem.name } : null;\n" +
  "      var buttonLabel = wasEditing ? '\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e01\u0e32\u0e23\u0e41\u0e01\u0e49\u0e44\u0e02' : '\u0e2d\u0e31\u0e1b\u0e42\u0e2b\u0e25\u0e14\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c';\n" +
  "      btn.disabled = true;\n" +
  "      btn.textContent = '\u0e01\u0e33\u0e25\u0e31\u0e07\u0e1a\u0e35\u0e1a\u0e2d\u0e31\u0e14\u2026';\n" +
  "      $('upMeta').textContent = '\u0e01\u0e33\u0e25\u0e31\u0e07\u0e40\u0e15\u0e23\u0e35\u0e22\u0e21 ' + (selectedFileName || name) + ' (' + bytes(sourceBytes) + ')\u2026';\n" +
  "\n" +
  "      compressGzipBase64(code).then(function (gzB64) {\n" +
  "        var payload = { op: 'save', placeId: placeId, name: name, keyRequired: $('upKeyRequired').checked };\n" +
  "        if (wasEditing) {\n" +
  "          payload.prevPlaceId = wasEditing.placeId;\n" +
  "          payload.prevName = wasEditing.name;\n" +
  "        }\n" +
  "        if (gzB64) payload.bodyGzip = gzB64;\n" +
  "        else payload.body = code;\n" +
  "\n" +
  "        var requestBytes = new Blob([JSON.stringify(payload)]).size;\n" +
  "        if (requestBytes > MAX_UPLOAD_JSON_BYTES) {\n" +
  "          throw new Error('\u0e2b\u0e25\u0e31\u0e07\u0e1a\u0e35\u0e1a\u0e2d\u0e31\u0e14\u0e41\u0e25\u0e49\u0e27\u0e22\u0e31\u0e07\u0e43\u0e2b\u0e0d\u0e48\u0e40\u0e01\u0e34\u0e19\u0e02\u0e35\u0e14\u0e08\u0e33\u0e01\u0e31\u0e14\u0e01\u0e32\u0e23\u0e2a\u0e48\u0e07\u0e44\u0e1f\u0e25\u0e4c (' + bytes(requestBytes) + '). \u0e25\u0e14\u0e02\u0e19\u0e32\u0e14\u0e44\u0e1f\u0e25\u0e4c\u0e2b\u0e23\u0e37\u0e2d\u0e1a\u0e35\u0e1a\u0e2d\u0e31\u0e14\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e01\u0e48\u0e2d\u0e19\u0e2d\u0e31\u0e1b\u0e42\u0e2b\u0e25\u0e14');\n" +
  "        }\n" +
  "\n" +
  "        btn.textContent = '\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2d\u0e31\u0e1b\u0e42\u0e2b\u0e25\u0e14\u2026';\n" +
  "        $('upMeta').textContent = '\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2a\u0e48\u0e07\u0e44\u0e1f\u0e25\u0e4c ' + (selectedFileName || name) + ' (' + bytes(sourceBytes) + ') \u0e02\u0e36\u0e49\u0e19 GitHub\u2026';\n" +
  "        return api('/api/control/scripts', payload, 120000);\n" +
  "      }).then(function (result) {\n" +
  "        btn.disabled = false;\n" +
  "        btn.textContent = buttonLabel;\n" +
  "        var data = result.data || {};\n" +
  "        if (data.ok) {\n" +
  "          var gh = data.github || {};\n" +
  "          var deployNote = (gh.deploy && gh.deploy.triggered) ? ' \u00b7 \u0e2a\u0e31\u0e48\u0e07\u0e14\u0e35\u0e1e\u0e25\u0e2d\u0e22 Vercel \u0e41\u0e25\u0e49\u0e27' : '';\n" +
  "          var actionWord = wasEditing ? '\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e01\u0e32\u0e23\u0e41\u0e01\u0e49\u0e44\u0e02 ' : '\u0e2d\u0e31\u0e1b\u0e42\u0e2b\u0e25\u0e14 ';\n" +
  "          var ghText = gh.ok\n" +
  "            ? ' \u00b7 \u0e02\u0e36\u0e49\u0e19 GitHub \u0e41\u0e25\u0e49\u0e27 (' + (gh.path || ('scripts/' + name + '.lua')) + deployNote + ')'\n" +
  "            : '';\n" +
  "          toast(actionWord + name + ' \u0e41\u0e25\u0e49\u0e27 (' + bytes(data.size) + ')', 'ok');\n" +
  "          logLine(actionWord + '\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c ' + name + ' (' + bytes(data.size) + ') \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a place ' + placeId, 'ok');\n" +
  "          if (gh.ok) logLine('commit ' + (gh.path || name) + ' \u0e44\u0e1b\u0e17\u0e35\u0e48 ' + (gh.branch || 'main') + deployNote, 'ok');\n" +
  "          exitEditMode(true);\n" +
  "          $('upMeta').textContent = '\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e41\u0e25\u0e49\u0e27 \u2014 ' + name + ' (' + bytes(data.size) + ') \u00b7 place ' + placeId + ghText + ' \u00b7 \u0e44\u0e21\u0e48\u0e40\u0e1b\u0e25\u0e37\u0e2d\u0e07 Supabase';\n" +
  "          return loadScripts();\n" +
  "        }\n" +
  "        var errMsg = data.reason || ('HTTP ' + result.status);\n" +
  "        $('upMeta').textContent = '\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08: ' + errMsg;\n" +
  "        logLine('\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08: ' + errMsg, 'err');\n" +
  "        toast('\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08: ' + errMsg, 'err');\n" +
  "      }).catch(function (err) {\n" +
  "        btn.disabled = false;\n" +
  "        btn.textContent = buttonLabel;\n" +
  "        var message = err && err.message ? err.message : 'network error';\n" +
  "        $('upMeta').textContent = '\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08: ' + message;\n" +
  "        toast('\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08: ' + message, 'err');\n" +
  "      });\n" +
  "    });\n" +
  "  }\n" +
  "\n" +
  "  if ($('upRefresh')) $('upRefresh').addEventListener('click', function () { loadScripts(); });\n" +
  "\n" +
  "  /* \u2500\u2500 login \u2500\u2500 */\n" +
  "  gateForm.addEventListener('submit', function (event) {\n" +
  "    event.preventDefault();\n" +
  "    var token = tokenInput.value.trim();\n" +
  "    if (!token) { gateErr.textContent = '\u0e01\u0e23\u0e38\u0e13\u0e32\u0e43\u0e2a\u0e48 token'; return; }\n" +
  "    var loginBtn = $('loginBtn');\n" +
  "    loginBtn.disabled = true;\n" +
  "    loginBtn.textContent = '\u0e01\u0e33\u0e25\u0e31\u0e07\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u2026';\n" +
  "    gateErr.textContent = '';\n" +
  "    state.token = token;\n" +
  "    api('/api/control/bans', {}, 10000).then(function (result) {\n" +
  "      loginBtn.disabled = false;\n" +
  "      loginBtn.textContent = '\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a';\n" +
  "      if (result.status === 401) {\n" +
  "        state.token = '';\n" +
  "        gateErr.textContent = 'token \u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07 \u2014 \u0e43\u0e0a\u0e49 ADMIN_TOKEN \u0e02\u0e2d\u0e07 Vercel \u0e42\u0e1b\u0e23\u0e40\u0e08\u0e01\u0e15\u0e4c\u0e19\u0e35\u0e49';\n" +
  "        return;\n" +
  "      }\n" +
  "      if (result.status !== 200 || !result.data || result.data.ok !== true) {\n" +
  "        state.token = '';\n" +
  "        gateErr.textContent = (result.data && result.data.reason) || ('\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08 (HTTP ' + result.status + ')');\n" +
  "        return;\n" +
  "      }\n" +
  "      sessionStorage.setItem(KEY, token);\n" +
  "      gate.classList.add('hide');\n" +
  "      logLine('\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e41\u0e25\u0e49\u0e27', 'ok');\n" +
  "      api('/api/control/events', { limit: 40 }).then(function (events) {\n" +
  "        if (events.status === 200 && events.data) {\n" +
  "          $('eventCount').textContent = String(events.data.count || 0);\n" +
  "          renderEvents(events.data.events || []);\n" +
  "        }\n" +
  "      }).catch(function () {});\n" +
  "      loadAll();\n" +
  "      state.timer = setInterval(function () { if (!document.hidden) loadAll(true); }, 15000);\n" +
  "    }).catch(function (error) {\n" +
  "      loginBtn.disabled = false;\n" +
  "      loginBtn.textContent = '\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a';\n" +
  "      state.token = '';\n" +
  "      gateErr.textContent = error && error.name === 'AbortError'\n" +
  "        ? '\u0e40\u0e0b\u0e34\u0e23\u0e4c\u0e1f\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e15\u0e2d\u0e1a\u0e0a\u0e49\u0e32\u0e40\u0e01\u0e34\u0e19 10 \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35 \u0e25\u0e2d\u0e07\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e25\u0e49\u0e27\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07'\n" +
  "        : '\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e15\u0e48\u0e2d\u0e40\u0e0b\u0e34\u0e23\u0e4c\u0e1f\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49';\n" +
  "    });\n" +
  "  });\n" +
  "\n" +
  "  $('logoutBtn').addEventListener('click', function () {\n" +
  "    sessionStorage.removeItem(KEY);\n" +
  "    state.token = '';\n" +
  "    showGate('');\n" +
  "    gateErr.textContent = '';\n" +
  "  });\n" +
  "\n" +
  "  /* \u2500\u2500 data \u2500\u2500 */\n" +
  "  function loadAll(quiet) {\n" +
  "    if (state.busy || !state.token) return;\n" +
  "    state.busy = true;\n" +
  "    var icon = $('refreshIcon');\n" +
  "    icon.classList.add('rotate');\n" +
  "\n" +
  "    fetch('/api/health', { cache: 'no-store' }).then(function (res) {\n" +
  "      return res.json().then(function (data) { return { status: res.status, data: data }; });\n" +
  "    }).then(function (result) {\n" +
  "      var data = result.data || {};\n" +
  "      var ok = result.status === 200 && data.ok === true;\n" +
  "      setDot($('gwDot'), ok ? 'ok' : 'bad');\n" +
  "      $('gwLabel').textContent = ok ? 'API v' + (data.version || '?') : 'API \u0e2d\u0e2d\u0e1f\u0e44\u0e25\u0e19\u0e4c';\n" +
  "      $('statClients').textContent = ok ? '\u0e2d\u0e2d\u0e19\u0e44\u0e25\u0e19\u0e4c' : '\u0e2d\u0e2d\u0e1f\u0e44\u0e25\u0e19\u0e4c';\n" +
  "      $('statClientsSub').textContent = ok ? ('service ' + (data.service || '') + ' \u00b7 chain ' + (data.chain || '')) : 'health check \u0e25\u0e49\u0e21\u0e40\u0e2b\u0e25\u0e27';\n" +
  "      $('statUpdated').textContent = new Date().toLocaleTimeString('th-TH').slice(0, 8);\n" +
  "      if (!quiet) logLine(ok ? 'API \u0e2d\u0e2d\u0e19\u0e44\u0e25\u0e19\u0e4c' : 'API \u0e2d\u0e2d\u0e1f\u0e44\u0e25\u0e19\u0e4c', ok ? 'ok' : 'err');\n" +
  "    }).catch(function () {\n" +
  "      setDot($('gwDot'), 'bad');\n" +
  "      $('gwLabel').textContent = 'API \u0e2d\u0e2d\u0e1f\u0e44\u0e25\u0e19\u0e4c';\n" +
  "      $('statClients').textContent = '\u0e2d\u0e2d\u0e1f\u0e44\u0e25\u0e19\u0e4c';\n" +
  "      if (!quiet) logLine('\u0e40\u0e23\u0e35\u0e22\u0e01 API \u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08', 'err');\n" +
  "    }).then(function () {\n" +
  "      state.busy = false;\n" +
  "      icon.classList.remove('rotate');\n" +
  "    });\n" +
  "\n" +
  "    api('/api/control/traffic', { limit: 40 }).then(function (result) {\n" +
  "      if (result.status !== 200 || !result.data) return;\n" +
  "      $('statGateway').textContent = String(result.data.count || 0);\n" +
  "      $('statGatewaySub').textContent = 'traffic buffer (\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14 200)';\n" +
  "      renderTraffic(result.data.traffic || []);\n" +
  "    }).catch(function () {});\n" +
  "\n" +
  "    loadScripts();\n" +
  "\n" +
  "    api('/api/control/bans').then(function (result) {\n" +
  "      if (result.status !== 200) return;\n" +
  "      var data = result.data || {};\n" +
  "      var st = data.stats || { hwids: 0, users: 0, ips: 0 };\n" +
  "      $('statBans').textContent = (st.hwids + st.users + st.ips);\n" +
  "      $('statBansSub').textContent = 'hwid ' + st.hwids + ' \u00b7 user ' + st.users + ' \u00b7 ip ' + st.ips;\n" +
  "      renderBans(data.lists || {});\n" +
  "    }).catch(function () {});\n" +
  "  }\n" +
  "\n" +
  "  function esc(value) {\n" +
  "    return String(value == null ? '' : value).replace(/[&<>\"']/g, function (ch) {\n" +
  "      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', \"'\": '&#39;' }[ch];\n" +
  "    });\n" +
  "  }\n" +
  "\n" +
  "  function statusClass(code) {\n" +
  "    if (code >= 200 && code < 300) return 'tag';\n" +
  "    if (code >= 300 && code < 400) return 'tag warn';\n" +
  "    return 'tag bad';\n" +
  "  }\n" +
  "\n" +
  "  function renderEvents(list) {\n" +
  "    var host = $('eventHost');\n" +
  "    if (!list.length) {\n" +
  "      host.innerHTML = '<div class=\"empty\">\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c</div>';\n" +
  "      return;\n" +
  "    }\n" +
  "    var tone = { verify_reject: 'bad', script_reject: 'bad', runtime_reject: 'bad', hwid_spoof: 'bad', ban_hit: 'warn' };\n" +
  "    var rows = list.map(function (row) {\n" +
  "      var time = new Date(row.ts).toLocaleTimeString('th-TH');\n" +
  "      return '<tr>' +\n" +
  "        '<td class=\"mono\" style=\"font-size:.76rem;white-space:nowrap\">' + esc(time) + '</td>' +\n" +
  "        '<td><span class=\"' + (tone[row.kind] || 'tag') + '\">' + esc(row.kind || '') + '</span></td>' +\n" +
  "        '<td class=\"mono\" style=\"font-size:.78rem\">' + esc(row.detail || '') + '</td>' +\n" +
  "      '</tr>';\n" +
  "    }).join('');\n" +
  "    host.innerHTML = '<div style=\"overflow:auto;max-height:240px\"><table><thead><tr>' +\n" +
  "      '<th>\u0e40\u0e27\u0e25\u0e32</th><th>\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17</th><th>\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14</th></tr></thead><tbody>' + rows + '</tbody></table></div>';\n" +
  "  }\n" +
  "\n" +
  "  function renderTraffic(list) {\n" +
  "    $('traceCount').textContent = list.length + ' \u0e23\u0e32\u0e22\u0e01\u0e32\u0e23';\n" +
  "    var host = $('traceHost');\n" +
  "    if (!list.length) {\n" +
  "      host.innerHTML = '<div class=\"empty\">\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e04\u0e33\u0e02\u0e2d \u2014 \u0e43\u0e2b\u0e49\u0e04\u0e19\u0e23\u0e31\u0e19 loadc.lua \u0e41\u0e25\u0e49\u0e27\u0e01\u0e14\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a</div>';\n" +
  "      return;\n" +
  "    }\n" +
  "    var rows = list.map(function (row) {\n" +
  "      var time = new Date(row.ts).toLocaleTimeString('th-TH');\n" +
  "      var label = (row.method || 'GET') + ' ' + (row.path || '');\n" +
  "      if (row.name) label += '  (' + row.name + ')';\n" +
  "      return '<tr>' +\n" +
  "        '<td class=\"mono\" style=\"font-size:.76rem;white-space:nowrap\">' + esc(time) + '</td>' +\n" +
  "        '<td><div class=\"ident\"><b>' + esc(label) + '</b><span>' + esc(row.host || '') + ' \u00b7 ' + esc((row.ua || '').slice(0, 34)) + '</span></div></td>' +\n" +
  "        '<td><span class=\"' + statusClass(row.status) + '\">' + esc(String(row.status)) + '</span></td>' +\n" +
  "      '</tr>';\n" +
  "    }).join('');\n" +
  "    host.innerHTML = '<div style=\"overflow:auto;max-height:260px\"><table><thead><tr>' +\n" +
  "      '<th>\u0e40\u0e27\u0e25\u0e32</th><th>\u0e04\u0e33\u0e02\u0e2d</th><th>\u0e2a\u0e16\u0e32\u0e19\u0e30</th></tr></thead><tbody>' + rows + '</tbody></table></div>';\n" +
  "  }\n" +
  "\n" +
  "  function renderBans(lists) {\n" +
  "    var host = $('banList');\n" +
  "    var items = [];\n" +
  "    (lists.hwids || []).forEach(function (v) { items.push(['HWID', v]); });\n" +
  "    (lists.users || []).forEach(function (v) { items.push(['USER', v]); });\n" +
  "    (lists.ips || []).forEach(function (v) { items.push(['IP', v]); });\n" +
  "    if (!items.length) {\n" +
  "      host.innerHTML = '<div class=\"hint\" style=\"margin:0\">\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e41\u0e1a\u0e19\u0e43\u0e19 instance \u0e19\u0e35\u0e49</div>';\n" +
  "      return;\n" +
  "    }\n" +
  "    host.innerHTML = items.map(function (pair) {\n" +
  "      return '<div class=\"ban-item\"><span>' + esc(pair[0]) + '</span><b style=\"font-weight:500\">' + esc(pair[1]) + '</b></div>';\n" +
  "    }).join('');\n" +
  "  }\n" +
  "\n" +
  "  /* \u2500\u2500 link generator \u2500\u2500 */\n" +
  "  $('linkBtn').addEventListener('click', function () {\n" +
  "    var scriptName = ($('linkScript').value || 'main').trim();\n" +
  "    var hours = Number($('linkHours').value) || 168;\n" +
  "    var btn = $('linkBtn');\n" +
  "    btn.disabled = true;\n" +
  "    api('/api/link', { scriptName: scriptName, hours: hours }).then(function (result) {\n" +
  "      btn.disabled = false;\n" +
  "      var data = result.data || {};\n" +
  "      if (result.status !== 200 || !data.ok) {\n" +
  "        toast(data.reason || '\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e25\u0e34\u0e07\u0e01\u0e4c\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08', 'err');\n" +
  "        return;\n" +
  "      }\n" +
  "      $('linkOut').classList.remove('hide');\n" +
  "      $('linkUrl').value = data.url || '';\n" +
  "      $('linkLine').value = data.line || '';\n" +
  "      $('linkStub').value = data.stub || '';\n" +
  "      $('linkMeta').textContent = 'id ' + (data.id || '') + ' \u00b7 sha256 ' + String(data.sha256 || '').slice(0, 16) +\n" +
  "        '\u2026 \u00b7 \u0e2b\u0e21\u0e14\u0e2d\u0e32\u0e22\u0e38 ' + new Date(data.expiresAt).toLocaleString('th-TH');\n" +
  "      logLine('\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e25\u0e34\u0e07\u0e01\u0e4c ' + (data.id || ''), 'ok');\n" +
  "      toast('\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e25\u0e34\u0e07\u0e01\u0e4c\u0e41\u0e25\u0e49\u0e27', 'ok');\n" +
  "    }).catch(function () {\n" +
  "      btn.disabled = false;\n" +
  "      toast('\u0e40\u0e23\u0e35\u0e22\u0e01\u0e40\u0e0b\u0e34\u0e23\u0e4c\u0e1f\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49', 'err');\n" +
  "    });\n" +
  "  });\n" +
  "\n" +
  "  document.addEventListener('click', function (event) {\n" +
  "    var btn = event.target.closest('button[data-copy]');\n" +
  "    if (!btn) return;\n" +
  "    var field = $(btn.getAttribute('data-copy'));\n" +
  "    if (!field) return;\n" +
  "    field.select();\n" +
  "    field.setSelectionRange(0, 99999);\n" +
  "    var done = function () { toast('\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01\u0e41\u0e25\u0e49\u0e27', 'ok'); };\n" +
  "    if (navigator.clipboard && navigator.clipboard.writeText) {\n" +
  "      navigator.clipboard.writeText(field.value).then(done).catch(done);\n" +
  "    } else {\n" +
  "      try { document.execCommand('copy'); done(); } catch (e) { toast('\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49', 'err'); }\n" +
  "    }\n" +
  "  });\n" +
  "\n" +
  "  /* \u2500\u2500 manual ban form \u2500\u2500 */\n" +
  "  $('banBtn').addEventListener('click', function () {\n" +
  "    var type = $('banType').value;\n" +
  "    var value = $('banValue').value.trim();\n" +
  "    if (!value) { toast('\u0e43\u0e2a\u0e48\u0e04\u0e48\u0e32\u0e17\u0e35\u0e48\u0e08\u0e30\u0e41\u0e1a\u0e19', 'err'); return; }\n" +
  "    api('/api/admin/ban', { type: type, value: value }).then(function (result) {\n" +
  "      if (result.status === 200) {\n" +
  "        toast('\u0e41\u0e1a\u0e19\u0e41\u0e25\u0e49\u0e27', 'ok');\n" +
  "        logLine('\u0e41\u0e1a\u0e19 ' + type + ' ' + value.slice(0, 14) + '\u2026', 'ok');\n" +
  "        $('banValue').value = '';\n" +
  "        loadAll(true);\n" +
  "      } else {\n" +
  "        toast(result.data && result.data.error ? result.data.error : '\u0e41\u0e1a\u0e19\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08', 'err');\n" +
  "      }\n" +
  "    }).catch(function () { toast('\u0e40\u0e23\u0e35\u0e22\u0e01\u0e40\u0e0b\u0e34\u0e23\u0e4c\u0e1f\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49', 'err'); });\n" +
  "  });\n" +
  "\n" +
  "  $('refreshBtn').addEventListener('click', function () { loadAll(false); });\n" +
  "  $('clearLog').addEventListener('click', function () { $('log').innerHTML = ''; });\n" +
  "  $('clock').textContent = new Date().toLocaleDateString('th-TH');\n" +
  "  setInterval(function () {\n" +
  "    $('clock').textContent = new Date().toLocaleTimeString('th-TH');\n" +
  "  }, 1000);\n" +
  "\n" +
  "  /* \u2500\u2500 boot \u2500\u2500 */\n" +
  "  if (state.token) {\n" +
  "    api('/api/control/bans', {}, 10000).then(function (result) {\n" +
  "      if (result.status === 200 && result.data && result.data.ok === true) {\n" +
  "        gate.classList.add('hide');\n" +
  "        loadAll(true);\n" +
  "        state.timer = setInterval(function () { if (!document.hidden) loadAll(true); }, 15000);\n" +
  "      } else {\n" +
  "        sessionStorage.removeItem(KEY);\n" +
  "        state.token = '';\n" +
  "        showGate(result.status === 401 ? 'token \u0e17\u0e35\u0e48\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e44\u0e27\u0e49\u0e43\u0e0a\u0e49\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e41\u0e25\u0e49\u0e27' : '\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a token \u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08 \u2014 \u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07');\n" +
  "      }\n" +
  "    }).catch(function (error) {\n" +
  "      showGate(error && error.name === 'AbortError'\n" +
  "        ? '\u0e40\u0e0b\u0e34\u0e23\u0e4c\u0e1f\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e15\u0e2d\u0e1a\u0e0a\u0e49\u0e32\u0e40\u0e01\u0e34\u0e19 10 \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35 \u0e25\u0e2d\u0e07\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e25\u0e49\u0e27\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07'\n" +
  "        : '\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e15\u0e48\u0e2d\u0e40\u0e0b\u0e34\u0e23\u0e4c\u0e1f\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49');\n" +
  "    });\n" +
  "  } else {\n" +
  "    showGate('');\n" +
  "  }\n" +
  "})();\n" +
  "</script>\n" +
  "</body>\n" +
  "</html>\n";
Object.assign(EMBEDDED_PAGES, { "/control": CONTROL_PAGE });
// END PAGE /control
const factories = Object.create(null);

// Bundled module: api/auth.js
factories["api/auth.js"] = function(module, exports, require, __filename, __dirname) {
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const APP_ROOT = path.resolve(__dirname, '..');
const wire = require('../lib/wire-codec');

const { verifyKey, createLink, probeIdentifier } = require('../lib/platoboost');
const { resolveHwid, deviceBindingId, formatBoundHwid, canonical } = require('../lib/hwid');
const { issueTicket, verifyTicket, hashHwid, hashBindingId } = require('../lib/ticket');
const link = require('../lib/link');
const chainLinks = require('../lib/chainlink');
const {
  createChallengeResponse,
  validateClientChallenge,
  isValidScriptName,
  encodeProtectedPayload,
  decodeProtectedPayload,
  deriveRuntimeCredentials,
  verifyRuntimeProof,
  issueHop,
  consumeHop,
  createEquationChallenge,
  checkEquationAnswer,
} = require('../lib/999MS-server-sdk');
const {
  revokeHwid, revokeHwidHash, revokeUser, revokeIp, revokeKey, revokeKeyHash,
  isKeyRevoked, checkRevoked, stats, listRevocations,
} = require('../lib/revoke');

const SESSION_TTL = 30 * 60 * 1000;
const RUNTIME_TTL = 60 * 1000;
const ARTIFACT_FILES = Object.freeze({
  loadc: 'loadc.lua',
  loada: 'loada.lua',
  loader: 'loader.lua',
  payload: 'payload.lua',
  sdk: '999MS-sdk.lua',
});
const OBF_MARKER = '-- 999MS-OBF:';
const DEFAULT_ARTIFACT_DIR = 'lib';

// ═══ Rate limit ═══
const rateLimit = new Map();
const RATE_WINDOW = 60 * 1000;
const RATE_MAX = 15;
// Heartbeats are frequent by design, so they get their own bucket; clients
// sharing one NAT would otherwise starve each other out of RATE_MAX.
const BEAT_RATE_MAX = 60;

function checkRateLimit(ip, max = RATE_MAX) {
  if (!ip) return true;
  const now = Date.now();
  const entry = rateLimit.get(ip) || { count: 0, reset: now + RATE_WINDOW };
  if (now > entry.reset) {
    entry.count = 0;
    entry.reset = now + RATE_WINDOW;
  }
  entry.count++;
  rateLimit.set(ip, entry);
  return entry.count <= max;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimit.entries()) {
    if (now > entry.reset) rateLimit.delete(ip);
  }
}, 5 * 60 * 1000).unref?.();

// ═══ Trap redirect ═══
const TRAP_URL = 'https://yura.lol/09ms';

function trapRedirect(res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Location', TRAP_URL);
  return res.status(302).send('');
}

// Roblox-marked requests never receive the browser redirect. Invalid paths or
// methods still fail closed, but with a normal empty HTTP error instead.
function rejectOrTrap(req, res, status = 404) {
  if (hasRobloxHeader(req)) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(status).send('');
  }
  return trapRedirect(res);
}

// ═══ Request classification ═══
// Roblox executor/game requests are allowed through the browser-trap gate when
// any header name or value contains "roblox", regardless of letter casing.
function hasRobloxHeader(req) {
  for (const [name, value] of Object.entries(req.headers || {})) {
    if (`${name}:${Array.isArray(value) ? value.join(',') : value || ''}`.toLowerCase().includes('roblox')) {
      return true;
    }
  }
  return false;
}

// Prefer the host the executor actually reached so a preview deployment or a
// renamed project can never point the chain at a host that does not exist.
// PUBLIC_BASE_URL stays as the fallback for local runs.
function requestOrigin(req) {
  const host = String(
    (req && req.headers && (req.headers['x-forwarded-host'] || req.headers.host)) || '',
  ).split(',')[0].trim();
  if (!host || !/^[a-zA-Z0-9.:-]+$/.test(host)) return publicBaseUrl();
  const forwarded = req.headers['x-forwarded-proto'];
  // Behind Vercel the forwarded header is authoritative. Locally (no proxy)
  // fall back to the socket so tests and dev servers are served over http.
  const plainSocket = !(req.socket && req.socket.encrypted);
  const proto = String(forwarded || (plainSocket ? 'http' : 'https')).split(',')[0].trim();
  return `${proto === 'http' ? 'http' : 'https'}://${host}`;
}

function publicBaseUrl() {
  const value = process.env.PUBLIC_BASE_URL;
  if (typeof value !== 'string' || value.length > 2048) return null;
  try {
    const parsed = new URL(value);
    if ((parsed.protocol !== 'https:' && parsed.protocol !== 'http:') || parsed.username || parsed.password || parsed.search || parsed.hash) return null;
    return parsed.origin;
  } catch {
    return null;
  }
}

// LOADA_PATH_SECRET is optional when the already-required TICKET_SECRET is
// present. The sole Stage-1 capability is stateless, so its Stage-2 fetch can
// land on a different Vercel instance without a database.
function timingSafeStringEquals(supplied, expectedValue) {
  if (typeof supplied !== 'string' || typeof expectedValue !== 'string') return false;
  const expected = Buffer.from(expectedValue, 'utf8');
  const candidate = Buffer.from(supplied, 'utf8');
  return candidate.length === expected.length && crypto.timingSafeEqual(candidate, expected);
}

function hasAdminAccess(req) {
  const expected = process.env.ADMIN_TOKEN;
  return typeof expected === 'string' && expected.length >= 32
    && timingSafeStringEquals(req.headers['x-admin-token'], expected);
}

// Readable stages carry @BASE_URL@ so neither the host nor a preview domain is
// ever hard-coded. The save-detector marker is a plain literal inside the stage
// itself (see source/savecheck.lua), so the same bytes are served every time.
function applyChainTokens(body, baseUrl) {
  if (typeof body !== 'string') return body;
  if (baseUrl && body.includes('@BASE_URL@')) return body.replaceAll('@BASE_URL@', baseUrl);
  return body;
}

// Browser trapping is cosmetic anti-scraping, never authorization. Mobile
// executors (Delta, Fluxus, …) look like Chrome, so trapping artifacts on UA
// used to break the loader's own /loader.lua fetch. Opt in with
// TRAP_BROWSER_ARTIFACTS=1 to restore the old behaviour.
function trapBrowserArtifacts() {
  return process.env.TRAP_BROWSER_ARTIFACTS === '1';
}

function isBrowserRequest(req) {
  const headers = req.headers || {};
  if (hasRobloxHeader(req)) return false;
  const ua = (headers['user-agent'] || '').toLowerCase();

  if (/mozilla|chrome|safari|firefox|edge|opera|msie|trident/i.test(ua)) return true;
  if (/discordbot|telegrambot|twitterbot|facebookexternalhit|slackbot/i.test(ua)) return true;

  if (headers['origin'] || headers['referer']) return true;
  if (headers['accept-language']) return true;
  for (const k of Object.keys(headers)) {
    if (k.startsWith('sec-')) return true;
  }

  return false;
}

// ═══ Main handler ═══
const CONTROL_ACTIONS = new Set([
  'control-bans', 'control-traffic', 'control-events',
  'control-stats', 'control-scripts',
]);
const OPAQUE_ACTIONS = Object.freeze({
  q7: 'verify',
  m2: 'script',
  x9: 'script-verify',
  k8: 'start',
});
const BAD_HWID_CODE = 'BAD HWID : ]';
const BAD_DEVICE_REASONS = new Set([
  'invalid hwid format',
  'hwid mismatch',
  'fingerprint required',
  'invalid fingerprint format',
  'hwid fingerprint mismatch',
]);
function clientDeviceMessage(reason) {
  return BAD_DEVICE_REASONS.has(reason) ? BAD_HWID_CODE : reason;
}

function decodeDeviceParts(body = {}) {
  const parts = [body.b, body.c, body.d, body.e, body.f];
  if (parts.some((part) => typeof part !== 'string' || !part)) return '';
  const encoded = parts.join('');
  if (encoded.length > 1024 || encoded.length % 4 !== 0 || !/^[A-Za-z0-9+/]+={0,2}$/.test(encoded)) return '';
  try {
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    if (!decoded || Buffer.from(decoded, 'utf8').toString('base64') !== encoded) return '';
    if (canonical(decoded) !== decoded || deviceBindingId(decoded) !== encoded) return '';
    return decoded;
  } catch {
    return '';
  }
}

function decodeOpaqueRequest(action, body = {}) {
  // body.u may carry the client's raw-HWID decoy; deliberately ignore it.
  // Only the validated five-part Base64 representation determines identity.
  const hwid = decodeDeviceParts(body);
  switch (action) {
    case 'verify':
      return {
        key: body.a, c: hwid, scriptName: body.g, userId: body.h,
        Rng1: body.i, Rng2: body.j, Rng3: body.k,
        Rng4: body.l, Rng5: body.m, RngFloat: body.n,
      };
    case 'script':
      return { ticket: body.a, c: hwid, scriptName: body.g, Data: body.o, hop: body.q, eq: body.r };
    case 'script-verify':
      return {
        ticket: body.a, c: hwid, scriptName: body.g,
        hop: body.q, runtimeSecret: body.s, scriptToken: body.t,
        placeId: body.v, jobId: body.w, username: body.y,
        displayName: body.z, executor: body.aa, userId: body.ab,
      };
    case 'start':
      return { c: hwid, scriptName: body.g };
    default:
      return {};
  }
}
// Ring buffer of the last 200 requests (no bodies, keys, HWIDs or tickets) so
// the panel can show what an executor actually fetched and which status it got.
const trafficLog = [];
const TRAFFIC_MAX = 200;

// ═══ Security events (bounded ring buffer, surfaced in the panel) ═══
const EVENTS_MAX = 200;
const securityEvents = [];
function noteEvent(kind, detail) {
  securityEvents.push({
    ts: Date.now(),
    kind: String(kind).slice(0, 40),
    detail: typeof detail === 'string' ? detail.slice(0, 160) : '',
  });
  if (securityEvents.length > EVENTS_MAX) securityEvents.splice(0, securityEvents.length - EVENTS_MAX);
}

// The client getter HWID is transported as five Base64 fragments. The server
// requires it to match the executor fingerprint header and trusts that
// fingerprint when deriving the persistent identifier. Base64 is reversible.
function hwidFromRequest(req, bodyValue) {
  const result = resolveHwid(req.headers || {}, bodyValue);
  if (!result.ok && result.reason === 'hwid mismatch') {
    noteEvent('hwid_spoof', 'explicit header and body disagree');
  }
  return result;
}

// A ticket is bound to the per-script "<hwid>_<scriptName>" identifier that
// earned it. Every protected request verifies both the physical executor
// fingerprint header and the script-scoped binding.
function deviceMatches(req, hwidHash, bodyValue, scriptName) {
  const device = hwidFromRequest(req, bodyValue);
  if (!device.ok) return { ok: false, reason: device.reason };
  if (typeof hwidHash !== 'string' || !hwidHash) return { ok: false, reason: 'ticket has no device' };
  const expectedBindingId = deviceBindingId(device.hwid, scriptName);
  const boundHwid = formatBoundHwid(device.hwid, scriptName);
  if (hashBindingId(expectedBindingId) !== hwidHash) {
    noteEvent('device_reject', 'ticket used with a different HWID/script binding');
    return { ok: false, reason: 'device mismatch' };
  }
  return {
    ok: true,
    ...device,
    boundHwid,
    bindingId: expectedBindingId,
  };
}

// ═══ /api/link (admin) ═══
// Creates one random, expiring loader link: /x/<40 hex>?at=<token>.
async function handleLinkCreate(req, res) {
  if (!hasAdminAccess(req)) return res.status(401).json({ ok: false, reason: 'unauthorized' });

  const body = req.body || {};
  const scriptName = link.normalizeScriptName(body.scriptName) || 'main';
  const hours = Math.min(Math.max(Number(body.hours) || 168, 1), 24 * 365);
  const origin = requestOrigin(req) || publicBaseUrl();
  if (!origin) return res.status(503).json({ ok: false, reason: 'origin unavailable' });

  const linkPath = link.randomLinkPath();
  const expiresAt = Date.now() + hours * 60 * 60 * 1000;
  const token = link.issuePathToken({ path: linkPath, expiresAt });
  if (!token) return res.status(503).json({ ok: false, reason: 'LINK_SECRET/TICKET_SECRET missing' });

  const entry = link.renderEntryBody({ baseUrl: origin, path: linkPath, token });
  const digest = link.sha256(entry);
  const url = `${origin}/x/${linkPath}?at=${token}`;

  trackLink(linkPath, scriptName, hours);

  return res.status(200).json({
    ok: true,
    id: link.linkId(linkPath),
    path: `/x/${linkPath}`,
    url,
    line: `local License = ""\nlocal Script = ${JSON.stringify(scriptName)}\nloadstring(game:HttpGet("${url}"))(License, Script)`,
    sha256: digest,
    scriptName,
    expiresAt,
    stub: link.renderStub({ baseUrl: origin, path: linkPath, token, sha256: digest, scriptName, expiresAt }),
  });
}

// ═══ /x/<40 hex> ═══
// Serves the deterministic entry script for a link, then the normal chain.
async function handleLinkServe(req, res, url) {
  const linkPath = req.query?.p || url.searchParams.get('p') || '';
  const token = url.searchParams.get('at') || req.query?.at || '';
  if (!link.isLinkPath(linkPath)) return rejectOrTrap(req, res);
  const claim = link.verifyPathToken(token, linkPath);
  if (!claim) return rejectOrTrap(req, res);
  const origin = requestOrigin(req) || publicBaseUrl();
  if (!origin) return res.status(503).send('');
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).send(link.renderEntryBody({ baseUrl: origin, path: linkPath, token }));
}

// Private per-request claim: external headers/body cannot supply this marker.
const STAGE_CLAIM = Symbol('999ms-stage-claim');

async function readStageRequestBody(req) {
  const limit = 1024 * 1024;
  let raw = req.body;
  if (raw === undefined && typeof req.on === 'function') {
    raw = await new Promise((resolve, reject) => {
      const chunks = [];
      let size = 0, settled = false;
      req.on('data', (chunk) => {
        if (settled) return;
        const bytes = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
        size += bytes.length;
        if (size > limit) {
          settled = true;
          reject(Object.assign(new Error('body too large'), { statusCode: 413 }));
          return;
        }
        chunks.push(bytes);
      });
      req.once('end', () => {
        if (!settled) { settled = true; resolve(Buffer.concat(chunks).toString('utf8')); }
      });
      req.once('error', () => {
        if (!settled) {
          settled = true;
          reject(Object.assign(new Error('invalid body'), { statusCode: 400 }));
        }
      });
    });
  }
  if (Buffer.isBuffer(raw)) raw = raw.toString('utf8');
  if (typeof raw === 'string') {
    if (Buffer.byteLength(raw) > limit) throw Object.assign(new Error('body too large'), { statusCode: 413 });
    try { return raw.length ? JSON.parse(raw) : {}; }
    catch { throw Object.assign(new Error('invalid json'), { statusCode: 400 }); }
  }
  return raw || {};
}

module.exports = async function handler(req, res) {
  const url = new URL(req.url, 'http://x');
  const requestedAction = req.query?.action || url.searchParams.get('action');
  let wireRateChecked = false;
  // Only the new client uses this envelope. Existing SDK/script clients keep
  // their legacy /api/q body and response shapes during migration.
  if (requestedAction === 'opaque' && req.body &&
      Object.prototype.hasOwnProperty.call(req.body, 'w')) {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    if (req.method !== 'POST' || !String(req.headers['content-type'] || '').includes('application/json')) {
      return res.status(400).json({ error: 'Invalid wire request' });
    }
    const wireIp = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket?.remoteAddress || '';
    let packet;
    try { packet = wire.unwrap(req.body); }
    catch { return res.status(400).json({ error: 'Invalid wire packet' }); }
    const isBeat = !!(packet.b && packet.b.p === 'v4');
    if (!checkRateLimit(isBeat ? 'beat\u0000' + wireIp : wireIp, isBeat ? BEAT_RATE_MAX : RATE_MAX))
      return res.status(429).json({ error: 'Rate limited' });
    wireRateChecked = true;
    req.body = packet.b;
    const originalJson = res.json.bind(res);
    res.json = (value) => {
      try { return originalJson(wire.wrap(value, packet.n)); }
      catch {
        res.status(500);
        return originalJson(wire.wrap({ error: 'Wire response too large' }, packet.n));
      }
    };
  }
  const action = requestedAction === 'opaque'
    ? OPAQUE_ACTIONS[req.body?.p]
    : requestedAction;
  if (requestedAction === 'opaque' && action) {
    req.body = decodeOpaqueRequest(action, req.body);
  }

  const trace = {
    ts: Date.now(),
    method: req.method,
    path: url.pathname,
    action: action || null,
    name: req.query?.name || url.searchParams.get('name') || null,
    host: String(req.headers['x-forwarded-host'] || req.headers.host || ''),
    ua: String(req.headers['user-agent'] || '').slice(0, 80),
    status: 0,
    ms: 0,
  };
  trafficLog.push(trace);
  if (trafficLog.length > TRAFFIC_MAX) trafficLog.shift();
  const finish = (code) => { trace.status = trace.status || code; trace.ms = Date.now() - trace.ts; };
  const rawStatus = res.status.bind(res);
  res.status = (code) => { finish(code); return rawStatus(code); };
  for (const methodName of ['send', 'json', 'end']) {
    if (typeof res[methodName] === 'function') {
      const raw = res[methodName].bind(res);
      res[methodName] = (...args) => { finish(200); return raw(...args); };
    }
  }

  // loadc is generated per request and is the only stage that mints a path
  // capability. The remaining legacy artifacts keep their static handoffs.
  if (action === 'artifact') {
    const artifactName = req.query?.name || url.searchParams.get('name');
    // Stage links answer only a proven POST; the entry script stays a GET.
    const requiredMethod = artifactName === 'stage' ? 'POST' : 'GET';
    if (req.method !== requiredMethod) return rejectOrTrap(req, res, 405);
    if (artifactName === 'stage') {
      const token = req.query?.t || url.searchParams.get('t');
      // Synchronous claim happens before any await/body/proof/browser handling.
      // The first POST spends the link, whether it eventually succeeds or fails.
      const claim = chainLinks.consume(token);
      if (!claim) return rejectOrTrap(req, res);
      req[STAGE_CLAIM] = { token, claim };
    }
    if (trapBrowserArtifacts() && isBrowserRequest(req)) return trapRedirect(res);
    if (artifactName === 'stage') {
      try { req.body = await readStageRequestBody(req); }
      catch (error) { return res.status(error.statusCode || 400).send(''); }
    }
    const name = artifactName;
    return await serveArtifact(req, res, name, url, requestOrigin(req));
  }

  // Public, credential-free health probe for the landing page.
  if (action === 'health') {
    if (req.method !== 'GET') return res.status(405).json({ ok: false });
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    const out = {
      ok: true,
      service: '999MS',
      version: '3.0.0',
      chain: '999MS-chain-v1',
      ts: Date.now(),
    };
    if (req.query && req.query.gh === '1') {
      const cfg = githubConfig();
      if (!cfg) {
        out.github = { configured: false, canPush: false };
      } else {
        const ghCheck = await githubRequest('/repos/' + cfg.repo, { method: 'GET' }, 10000);
        out.github = {
          configured: true,
          status: ghCheck.status,
          canPush: Boolean(ghCheck.ok && ghCheck.data && ghCheck.data.permissions && ghCheck.data.permissions.push),
        };
      }
    }
    if (req.query && req.query.plato === '1') {
      out.platoboost = await probeIdentifier('probe1234_T');
    }
    return res.status(200).json(out);
  }

  // Public list of scripts uploaded from the Control panel. Bodies are never
  // exposed here; this metadata powers the public scripts catalog.
  if (action === 'scripts-list') {
    if (req.method !== 'GET') return res.status(405).json({ ok: false });
    res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=60');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return await handleScriptsList(req, res);
  }

  if (action === 'game-info') {
    if (req.method !== 'GET') return res.status(405).json({ ok: false });
    res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return await handleGameInfo(req, res);
  }

  // ═══ Control panel (browser-facing, ADMIN_TOKEN gated) ═══
  if (CONTROL_ACTIONS.has(action)) {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    if (req.method !== 'POST') return res.status(405).json({ ok: false, reason: 'method' });
    if (!hasAdminAccess(req)) return res.status(401).json({ ok: false, reason: 'unauthorized' });

    if (action === 'control-traffic') {
      const limit = Math.min(Number(req.body && req.body.limit) || 100, TRAFFIC_MAX);
      return res.status(200).json({ ok: true, count: trafficLog.length, traffic: trafficLog.slice(-limit).reverse() });
    }

    if (action === 'control-events') {
      const limit = Math.min(Number(req.body && req.body.limit) || 100, EVENTS_MAX);
      return res.status(200).json({ ok: true, count: securityEvents.length, events: securityEvents.slice(-limit).reverse() });
    }

    // Run statistics, read back from Supabase (see handleControlStats).
    if (action === 'control-stats') return await handleControlStats(req, res);
    if (action === 'control-scripts') return await handleControlScripts(req, res);

    // control-bans
    return res.status(200).json({
      ok: true,
      stats: stats(),
      lists: listRevocations(),
      scope: 'instance',
      note: 'In-memory revocations apply to this function instance; env REVOKED_* entries apply everywhere.',
    });
  }

  // Link system: /x/<40 hex>?at=<token> serves the entry script and
  // /api/link (admin) mints a new random link.
  if (action === 'link-serve') {
    if (req.method !== 'GET') return rejectOrTrap(req, res, 405);
    return await handleLinkServe(req, res, url);
  }

  if (action === 'link-create') {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    if (req.method !== 'POST') return res.status(405).json({ ok: false, reason: 'method' });
    if (trapBrowserArtifacts() && isBrowserRequest(req)) return trapRedirect(res);
    return await handleLinkCreate(req, res);
  }

  if (action === 'script-raw') {
    if (req.method !== 'POST') return rejectOrTrap(req, res, 405);
    if (trapBrowserArtifacts() && isBrowserRequest(req)) return trapRedirect(res);
    return await handleScriptRaw(req, res);
  }

  if (action === 'trap') return rejectOrTrap(req, res);



  // ═══ อื่นๆ: ต้อง POST ═══
  if (req.method !== 'POST') return rejectOrTrap(req, res, 405);
  if (trapBrowserArtifacts() && isBrowserRequest(req)) return trapRedirect(res);

  const ct = req.headers['content-type'] || '';
  if (!ct.includes('application/json')) return rejectOrTrap(req, res, 415);

  const validActions = ['verify', 'script', 'script-verify', 'start', 'admin-ban'];
  if (!action || !validActions.includes(action)) return rejectOrTrap(req, res);

  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
             req.socket?.remoteAddress || '';

  if (!wireRateChecked && !checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Rate limited' });
  }

  try {
    switch (action) {
      case 'verify':         return await handleVerify(req, res, ip);
      case 'script':         return await handleScript(req, res, ip);
      case 'script-verify':  return await handleScriptVerify(req, res, ip);
      case 'start':          return await handleStart(req, res, ip);
      case 'admin-ban':      return await handleAdminBan(req, res);
      default:
        return trapRedirect(res);
    }
  } catch (err) {
    console.error('[auth]', action, err.message);
    return res.status(502).json({ error: 'Service unavailable' });
  }
};


// BEGIN PAGE / - generated from pages/index.html; run `npm run pages` to refresh.
const ROOT_PAGE =
  "<!DOCTYPE html>\n" +
  "<html lang=\"en\">\n" +
  "<head>\n" +
  "  <meta charset=\"UTF-8\" />\n" +
  "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, viewport-fit=cover\" />\n" +
  "  <title>999MS HUB \u2014 Premium Roblox Scripts</title>\n" +
  "\n" +
  "  <!-- 1. Inter (UI) -->\n" +
  "  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n" +
  "  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n" +
  "  <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap\" rel=\"stylesheet\" />\n" +
  "\n" +
  "  <!-- 2. BubbledotICG-FinePos (Display - Dot-matrix) -->\n" +
  "  <link href=\"https://db.onlinewebfonts.com/c/8cb707a9b8a73f8a7403336b861c3074?family=BubbledotICG-FinePos\" rel=\"stylesheet\" />\n" +
  "\n" +
  "  <!-- 3. Font Awesome 6.5.2 -->\n" +
  "  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css\" integrity=\"sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\n" +
  "\n" +
  "  <style>\n" +
  "    /* ===== Variables ===== */\n" +
  "    :root {\n" +
  "      --bg: #000000;\n" +
  "      --text: #ffffff;\n" +
  "      --muted: #8e8e93;\n" +
  "      --pill-dark: #1a1a1a;\n" +
  "      --nav-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);\n" +
  "      \n" +
  "      /* \u0e1f\u0e2d\u0e19\u0e15\u0e4c Dot-matrix \u0e17\u0e31\u0e49\u0e07\u0e2b\u0e19\u0e49\u0e32 */\n" +
  "      --font-sans: \"Inter\", system-ui, -apple-system, \"Segoe UI\", sans-serif;\n" +
  "      --font-display: \"Inter\", system-ui, -apple-system, \"Segoe UI\", sans-serif;\n" +
  "    }\n" +
  "\n" +
  "    *, *::before, *::after {\n" +
  "      box-sizing: border-box;\n" +
  "      margin: 0;\n" +
  "      padding: 0;\n" +
  "    }\n" +
  "\n" +
  "    html { scroll-behavior: smooth; }\n" +
  "\n" +
  "    body {\n" +
  "      background: #dce4f5;\n" +
  "      color: var(--text);\n" +
  "      font-family: var(--font-sans);\n" +
  "      -webkit-font-smoothing: antialiased;\n" +
  "      -moz-osx-font-smoothing: grayscale;\n" +
  "      overflow-x: hidden;\n" +
  "      letter-spacing: 0.02em;\n" +
  "    }\n" +
  "\n" +
  "    a { text-decoration: none; color: inherit; }\n" +
  "    button { font-family: inherit; border: none; background: none; cursor: pointer; }\n" +
  "    img { display: block; max-width: 100%; }\n" +
  "\n" +
  "    /* ===== Page Layout ===== */\n" +
  "    .page { position:relative; z-index:3; width:100%; display:flex; flex-direction:column; align-items:stretch; padding-bottom:0; }\n" +
  "    .hero-stage { position:relative; isolation:isolate; width:100%; min-height:52svh; display:flex; flex-direction:column; align-items:center; padding:0 clamp(16px,4vw,42px) 24px; overflow:visible; color:#07080b; background:linear-gradient(135deg,#dbe3f4 0%,#b9c5e3 46%,#e4eaf5 100%); }\n" +
  "    .hero-stage::before { content:\"\"; position:absolute; inset:0; z-index:0; background:radial-gradient(ellipse at 22% 26%,rgba(255,255,255,.75),transparent 45%),radial-gradient(ellipse at 82% 66%,rgba(255,255,255,.46),transparent 45%); }\n" +
  "    .hero-stage::after { display:none; }\n" +
  "    .hero-stage > * { position:relative; z-index:1; width:min(100%,1200px); }\n" +
  "\n" +
  "    /* ===== Header ===== */\n" +
  "    .site-header { position:sticky; top:0; z-index:50; width:min(100%,1440px); margin:0 auto; padding:10px clamp(16px,3vw,42px); display:flex; align-items:center; justify-content:center; }\n" +
  "    .site-header::before { content:\"\"; position:absolute; z-index:0; top:0; bottom:0; left:calc(50% - 50vw); right:calc(50% - 50vw); background:transparent; transition:background .2s ease; pointer-events:none; }\n" +
  "    body.scrolled .site-header::before { background:rgba(5,5,6,.94); border-bottom:1px solid #202024; backdrop-filter:blur(16px); }\n" +
  "\n" +
  "    .nav-pill { position:relative; z-index:1; display:flex; align-items:center; justify-content:space-between; width:100%; height:64px; padding:0 8px 0 16px; border-radius:0; background:transparent; border:0; box-shadow:none; backdrop-filter:none; }\n" +
  "\n" +
  "    .brand {\n" +
  "      flex-shrink: 0; display: grid; place-items: center;\n" +
  "      width: 44px; height: 44px; border-radius: 50%;\n" +
  "      background: #fff; overflow: hidden;\n" +
  "      transition: transform 0.25s ease;\n" +
  "      box-shadow: 0 0 15px rgba(255,255,255,0.3);\n" +
  "    }\n" +
  "\n" +
  "    .brand:hover { transform: scale(1.04); }\n" +
  "    .brand img { width: 72%; height: 72%; object-fit: contain; }\n" +
  "\n" +
  "    .nav-links { display:flex;align-items:center;gap:clamp(16px,2.5vw,34px); }\n" +
  "    .nav-actions{display:flex;align-items:center;gap:12px}.nav-try{height:48px;padding:0 24px;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;background:#050505;color:#fff;font-size:14px;font-weight:650}.nav-actions .sign-in{background:rgba(255,255,255,.3);color:#111}.nav-actions .nav-try{background:#050505;color:#fff}\n" +
  "    .nav-link { font-size:14px; font-weight:600; color:rgba(7,8,11,.62); transition:color .2s ease; }\n" +
  "    .nav-link:hover, .nav-link.is-active { color:#050608; }\n" +
  "    body.scrolled .nav-link{color:#a6a6ae}body.scrolled .nav-link:hover,body.scrolled .nav-link.is-active{color:#fff}\n" +
  "    body.scrolled .nav-actions .sign-in{background:rgba(255,255,255,.12);color:#fff}body.scrolled .nav-actions .nav-try{background:#fff;color:#050505}\n" +
  "    body.scrolled .burger span{background:#fff}body.scrolled .burger{background:transparent}\n" +
  "\n" +
  "    .sign-in {\n" +
  "      display:inline-flex;align-items:center;justify-content:center;\n" +
  "      height:48px;padding:0 20px;border-radius:999px;\n" +
  "      background: #050505; color: #fff; font-size: 14px; font-weight: 600;\n" +
  "      transition: transform 0.2s ease, opacity 0.2s, box-shadow 0.2s;\n" +
  "    }\n" +
  "\n" +
  "    .sign-in:hover { transform: scale(1.02); box-shadow: 0 0 20px rgba(255,255,255,0.4); }\n" +
  "\n" +
  "    .burger {\n" +
  "      display: none; flex-direction: column; align-items: center; justify-content: center;\n" +
  "      gap: 5px; width: 48px; height: 48px; border-radius: 50%;\n" +
  "      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);\n" +
  "    }\n" +
  "    .burger span {\n" +
  "      display: block; width: 18px; height: 1.5px;\n" +
  "      background: #fff; border-radius: 2px;\n" +
  "      transition: transform 0.25s ease, background 0.25s ease;\n" +
  "    }\n" +
  "\n" +
  "    /* ===== Hero Section ===== */\n" +
  "    .hero {\n" +
  "      position:relative;width:100%;max-width:1000px;flex:1;\n" +
  "      display:flex;flex-direction:column;align-items:center;justify-content:flex-start;\n" +
  "      text-align:center;padding:64px 0 18px;\n" +
  "    }\n" +
  "\n" +
  "    /* =========================================\n" +
  "       HEADLINE: \u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e2a\u0e38\u0e48\u0e21\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07 \u0e44\u0e01\u0e25\u0e46 \u0e0a\u0e49\u0e32\u0e46\n" +
  "       ========================================= */\n" +
  "    .headline {\n" +
  "      position:absolute;top:-220px;left:50%;width:max-content;max-width:none;\n" +
  "      display:flex;align-items:center;justify-content:center;white-space:nowrap;\n" +
  "      flex-wrap:nowrap;gap:.045em;font-weight:800;font-size:clamp(140px,17vw,270px);\n" +
  "      letter-spacing:.025em;line-height:.9;margin:0;perspective:none;color:#07080b;\n" +
  "      min-height:0;transform:translateX(-50%);pointer-events:none;\n" +
  "    }\n" +
  "    @media(min-width:901px){\n" +
  "      .hero{padding-top:clamp(20px,3vw,44px)}\n" +
  "      .headline{position:relative;top:auto;left:auto;width:100%;max-width:100%;transform:none;white-space:nowrap;gap:.035em;font-size:clamp(68px,12vw,190px);line-height:.88;margin:0 0 clamp(20px,2.5vw,36px)}\n" +
  "    }\n" +
  "\n" +
  "    .char {\n" +
  "      display: inline-block;\n" +
  "      background: linear-gradient(180deg,#050609 8%,#777b86 54%,#202229 100%);\n" +
  "      -webkit-background-clip:text; background-clip:text;\n" +
  "      color:transparent; filter:none;\n" +
  "      opacity: 0; visibility: hidden; /* \u0e0b\u0e48\u0e2d\u0e19\u0e44\u0e27\u0e49\u0e23\u0e2d\u0e04\u0e34\u0e27 */\n" +
  "    }\n" +
  "\n" +
  "    .char.pop-in {\n" +
  "      visibility: visible;\n" +
  "      animation: bouncyRandomPop 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n" +
  "      animation-delay: var(--delay);\n" +
  "    }\n" +
  "\n" +
  "    @keyframes bouncyRandomPop {\n" +
  "      0% {\n" +
  "        opacity: 0;\n" +
  "        transform: translate(var(--tx), var(--ty)) scale(0.2) rotate(var(--tr));\n" +
  "        filter: blur(15px);\n" +
  "      }\n" +
  "      60% {\n" +
  "        opacity: 1;\n" +
  "        transform: translate(0, 0) scale(1.1) rotate(0deg);\n" +
  "        filter: blur(0);\n" +
  "      }\n" +
  "      80% {\n" +
  "        transform: translate(0, 0) scale(0.95) rotate(0deg);\n" +
  "      }\n" +
  "      100% {\n" +
  "        opacity: 1;\n" +
  "        transform: translate(0, 0) scale(1) rotate(0deg);\n" +
  "        filter: blur(0);\n" +
  "      }\n" +
  "    }\n" +
  "\n" +
  "    .char.shimmer-ready::after {\n" +
  "      content: attr(data-char);\n" +
  "      position: absolute; top: 0; left: 0; width: 100%; height: 100%;\n" +
  "      background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%);\n" +
  "      background-size: 200% 100%;\n" +
  "      -webkit-background-clip: text; background-clip: text;\n" +
  "      color: transparent; animation: shimmer 3s infinite linear;\n" +
  "      z-index: 1;\n" +
  "    }\n" +
  "\n" +
  "    @keyframes shimmer {\n" +
  "      0% { background-position: -200% 0; }\n" +
  "      100% { background-position: 200% 0; }\n" +
  "    }\n" +
  "\n" +
  "    /* =========================================\n" +
  "       Subhead & CTA (\u0e25\u0e1a Discord \u0e2d\u0e2d\u0e01\u0e41\u0e25\u0e49\u0e27)\n" +
  "       ========================================= */\n" +
  "    .subhead {\n" +
  "      max-width:720px; font-size:clamp(16px,2vw,20px);\n" +
  "      line-height:1.55; color:rgba(7,8,11,.78); margin-bottom:28px;\n" +
  "    }\n" +
  "\n" +
  "    .cta-group {\n" +
  "      display:flex; justify-content:center; flex-wrap:wrap; gap:14px;\n" +
  "      width:100%; max-width:560px; margin-bottom:28px;\n" +
  "    }\n" +
  "\n" +
  "    .cta-primary {\n" +
  "      display: flex; align-items: center; justify-content: center;\n" +
  "      width:auto; min-width:156px; padding:14px 22px;\n" +
  "      border-radius:999px; background:#050505; color:#fff;\n" +
  "      font-size:16px; font-weight:600; box-shadow:0 8px 24px rgba(0,0,0,.12);\n" +
  "      transition:transform .25s ease,box-shadow .25s ease;\n" +
  "    }\n" +
  "    .cta-secondary{background:rgba(255,255,255,.38);color:#08090c;box-shadow:none}\n" +
  "    .cta-secondary:hover{background:rgba(255,255,255,.68);box-shadow:0 10px 28px rgba(20,30,55,.1)}\n" +
  "\n" +
  "    .cta-primary:hover {\n" +
  "      transform: translateY(-2px) scale(1.01);\n" +
  "      box-shadow:0 12px 30px rgba(0,0,0,.2);\n" +
  "    }\n" +
  "\n" +
  "    /* =========================================\n" +
  "       Live Status\n" +
  "       ========================================= */\n" +
  "    .live-status {\n" +
  "      display: flex; align-items: center; gap: 10px;\n" +
  "      font-size:12px; font-weight:700; letter-spacing:.06em; color:#14783d;\n" +
  "      text-shadow:none;\n" +
  "    }\n" +
  "\n" +
  "    .status-dot {\n" +
  "      position:relative; width:9px; height:9px;\n" +
  "      background:#22a85a; border-radius:50%; box-shadow:0 0 0 4px rgba(34,168,90,.14);\n" +
  "    }\n" +
  "\n" +
  "    .status-dot::after {\n" +
  "      content:\"\"; position:absolute; top:50%; left:50%; width:100%; height:100%;\n" +
  "      background:#22a85a; border-radius:50%; transform:translate(-50%,-50%);\n" +
  "      animation:pulseRing 1.5s cubic-bezier(.215,.61,.355,1) infinite; z-index:-1;\n" +
  "    }\n" +
  "\n" +
  "    @keyframes pulseRing {\n" +
  "      0% { width: 100%; height: 100%; opacity: 0.8; }\n" +
  "      100% { width: 300%; height: 300%; opacity: 0; }\n" +
  "    }\n" +
  "\n" +
  "    /* ===== Stats Section ===== */\n" +
  "    .trust-strip{display:flex;justify-content:center;align-items:center;gap:clamp(22px,5vw,70px);flex-wrap:wrap;padding:10px 0 20px;color:rgba(6,8,12,.57);font-size:13px;font-weight:600}\n" +
  "    .trust-item{display:flex;align-items:center;gap:9px;white-space:nowrap}\n" +
  "    .trust-item b{color:#111;font-weight:700}.trust-mark{width:7px;height:7px;border-radius:50%;background:#111;opacity:.48}\n" +
  "    .dark-section{width:100%;padding:clamp(76px,10vw,132px) clamp(20px,5vw,64px);background:#050505;color:#f7f7f8}\n" +
  "    .section-inner{width:min(1120px,100%);margin:0 auto}\n" +
  "    .section-kicker{margin-bottom:18px;color:#888991;font-size:12px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}\n" +
  "    .section-heading{max-width:760px;margin:0;font-size:clamp(38px,7vw,76px);line-height:.99;letter-spacing:-.065em;font-weight:700}\n" +
  "    .section-copy{max-width:640px;margin:22px 0 0;color:#92929b;font-size:clamp(16px,2vw,20px);line-height:1.65}\n" +
  "    .product-section{padding-top:26px;padding-bottom:64px;background:linear-gradient(180deg,#dce4f5 0%,#cbd5eb 60%,#111 100%)}\n" +
  "    .showcase-layout{display:grid;grid-template-columns:minmax(0,1.55fr) minmax(210px,.7fr);gap:clamp(42px,8vw,136px);align-items:center;margin-top:0}\n" +
  "    .product-window{position:relative;width:100%;aspect-ratio:16/9;margin-top:0;padding:14px;display:flex;flex-direction:column;overflow:hidden;border:1px solid #2a2a2e;border-radius:26px;background:linear-gradient(145deg,#151517,#09090a);box-shadow:0 35px 100px rgba(0,0,0,.55);opacity:0;filter:blur(12px) brightness(1.35);transform:translateY(90px) scale(.94);transition:opacity .9s ease .18s,transform 1s cubic-bezier(.2,.7,.2,1) .18s,filter .85s ease .18s;will-change:opacity,transform,filter}\n" +
  "    .product-window::after{content:\"\";position:absolute;z-index:5;top:-35%;bottom:-35%;left:-65%;width:58%;pointer-events:none;opacity:0;transform:translateX(-110%) skewX(-17deg);background:linear-gradient(90deg,transparent,rgba(173,119,255,.08) 24%,rgba(255,255,255,.72) 50%,rgba(173,119,255,.2) 72%,transparent);mix-blend-mode:screen}\n" +
  "    .product-window.is-visible{opacity:1;filter:blur(0) brightness(1);transform:translateY(0) scale(1);animation:ui-warp-glow 1.2s ease-out .25s both}\n" +
  "    .product-window.is-visible::after{animation:ui-light-warp 1.25s cubic-bezier(.2,.7,.2,1) .28s both}\n" +
  "    @keyframes ui-light-warp{0%{opacity:0;transform:translateX(-110%) skewX(-17deg)}20%{opacity:.95}78%{opacity:.8}100%{opacity:0;transform:translateX(300%) skewX(-17deg)}}\n" +
  "    @keyframes ui-warp-glow{0%,100%{box-shadow:0 35px 100px rgba(0,0,0,.55),0 0 0 rgba(155,115,255,0)}35%{box-shadow:0 35px 100px rgba(0,0,0,.55),0 0 42px rgba(155,115,255,.62),0 0 90px rgba(110,80,255,.28)}}\n" +
  "    .window-bar{height:58px;flex:none;display:flex;align-items:center;gap:12px;padding:0 18px;color:#f4f4f6;font-size:14px}\n" +
  "    .window-app-icon{width:38px;height:38px;flex:none;display:grid;place-items:center;border-radius:7px;background:#050608;color:#fff;font-size:23px;font-style:italic;font-weight:900;line-height:1}\n" +
  "    .window-project{min-width:0;color:#f6f6f8;font-size:18px;font-weight:700;line-height:1.2;letter-spacing:-.02em}\n" +
  "    .window-controls{margin-left:auto;display:flex;align-items:center;gap:24px;color:#c9cbd2;font-size:18px}\n" +
  "    .window-content{min-height:0;flex:1;display:grid;grid-template-columns:24% minmax(0,1fr);overflow:hidden;border:0;border-top:1px solid #202126;border-radius:0 0 24px 24px;background:#15161a;opacity:0;transform:translateY(42px);transition:opacity .8s ease .38s,transform .85s cubic-bezier(.2,.7,.2,1) .38s}\n" +
  "    .product-window.is-visible .window-content{opacity:1;transform:translateY(0)}\n" +
  "    .window-sidebar{min-width:0;display:flex;flex-direction:column;gap:10px;padding:0 8px 10px;background:#101114;border-right:1px solid #25262b}\n" +
  "    .window-nav{display:grid;gap:4px}.window-nav .window-community{min-height:42px;padding:0 9px;display:flex;align-items:center;gap:9px;border-radius:13px;background:#292a2f;color:#f7f7f9;font-size:14px;font-weight:650}.window-community-mark{width:27px;height:27px;flex:none;display:grid;place-items:center;border-radius:6px;background:#050608;color:#fff;font-size:16px;font-style:italic;font-weight:900}\n" +
  "    .window-nav-label{padding:10px 9px 2px;color:#777982;font-size:13px;font-weight:650}.window-nav-item{min-height:32px;padding:0 9px;display:flex;align-items:center;gap:10px;color:#d3d4d9;font-size:14px;font-weight:550}.window-nav-item i{width:19px;color:#aeb1bb;text-align:center;font-size:16px}\n" +
  "    .window-profile{display:flex;align-items:center;gap:9px;margin-top:auto;padding:0 6px;color:#f7f7f9;font-size:14px;font-weight:700}.window-avatar{width:42px;height:42px;display:grid;place-items:center;flex:none;border-radius:50%;background:linear-gradient(145deg,#32343a,#15161a);color:#cfd0d4;font-size:22px}.window-profile small{display:block;margin-top:3px;color:#8d9099;font-size:11px;font-weight:500}\n" +
  "    .window-main{min-width:0;padding:16px 20px;display:flex;flex-direction:column;gap:14px;background:#17181c}.hub-project-head{display:flex;align-items:center;justify-content:space-between;gap:16px;color:#f3f3f5}.hub-project-head h3{font-size:20px;line-height:1.2;font-weight:700;letter-spacing:-.025em}.hub-project-head i{color:#a5a7b0;font-size:18px}\n" +
  "    .discord-card{min-width:0;padding:14px;display:flex;flex-direction:column;gap:8px;border-radius:22px;background:#24252a}.discord-card-heading{display:flex;align-items:center;gap:12px;min-width:0}.discord-card-icon{width:58px;height:58px;flex:none;display:grid;place-items:center;border-radius:15px;background:#050608;color:#fff;font-size:34px}.discord-copy{min-width:0}.discord-copy h4{color:#f7f7f8;font-size:18px;line-height:1.2;font-weight:700;letter-spacing:-.02em}.discord-copy p{margin-top:5px;color:#b1b3bb;font-size:14px;line-height:1.3}.discord-actions{display:grid;gap:8px}.discord-action{min-height:48px;padding:8px 14px;display:flex;align-items:center;justify-content:center;gap:12px;border-radius:15px;color:#fff;font-size:17px;font-weight:700}.discord-action i{font-size:21px}.discord-server{background:#1877f2}.discord-destroy{background:#050608}\n" +
  "    .showcase-metrics{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:42px}.trust-ring{position:relative;width:190px;height:190px;margin:0;display:grid;place-content:center;text-align:center;border-radius:50%;box-shadow:0 0 50px rgba(155,115,255,.14);opacity:0;transform:translateY(44px) scale(.82);transition:opacity .8s ease,transform .9s cubic-bezier(.2,.7,.2,1),box-shadow .35s ease}\n" +
  "    .trust-ring.is-visible{opacity:1;transform:translateY(0) scale(1)}\n" +
  "    .trust-ring svg{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg);pointer-events:none;overflow:visible}\n" +
  "    .trust-track,.trust-progress{fill:none;stroke-width:10}\n" +
  "    .trust-track{stroke:rgba(255,255,255,.12)}\n" +
  "    .trust-progress{stroke:#9b73ff;stroke-linecap:round;stroke-dasharray:515.22;stroke-dashoffset:515.22;filter:drop-shadow(0 0 7px rgba(155,115,255,.55))}\n" +
  "    .trust-ring strong,.trust-ring span{position:relative;z-index:1}\n" +
  "    .trust-ring strong{font-size:44px;line-height:1;letter-spacing:-.06em}.trust-ring span{margin-top:10px;color:#92929a;font-size:12px;font-weight:800;letter-spacing:.25em}\n" +
  "    .compatibility-note{width:100%;padding-top:22px;border-top:1px solid #27272a;text-align:center}.compatibility-note strong{display:block;color:#bbbcc4;font-size:14px;font-weight:550}.compatibility-note span{display:block;margin-top:10px;color:#777982;font-size:12px;line-height:1.5}\n" +
  "    .terms-note{margin:6px 0 120px;color:rgba(7,8,11,.78);font-size:14px;line-height:1.5;text-align:center}.terms-note a{text-decoration:underline;text-underline-offset:3px}\n" +
  "    .tech-label{margin:0 0 22px;color:rgba(7,8,11,.55);font-size:14px;font-weight:600;text-align:center}\n" +
  "    .tech-strip{display:flex;justify-content:center;align-items:center;padding:0 0 12px;color:rgba(16,18,25,.68)}.tech-track{display:flex;align-items:center;gap:clamp(28px,6vw,82px)}.tech-track[aria-hidden=\"true\"]{display:none}\n" +
  "    .tech-wordmark{display:flex;align-items:center;gap:9px;font-size:clamp(17px,2.1vw,24px);font-weight:750;letter-spacing:-.04em;white-space:nowrap}.tech-wordmark i{font-size:1.05em}.tech-wordmark:last-child{font-size:15px;letter-spacing:.1em}\n" +
  "    .why-section{border-top:1px solid #202024}\n" +
  "    .section-title-row{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:42px}\n" +
  "    .section-link{flex:none;padding-bottom:8px;color:#f4f4f5;font-weight:700}.section-link span{margin-left:12px;font-size:20px}\n" +
  "    .feature-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}\n" +
  "    .feature-card{min-height:280px;padding:clamp(24px,4vw,42px);display:flex;flex-direction:column;justify-content:space-between;border:1px solid #29292d;border-radius:28px;background:#1b1b1e}\n" +
  "    .feature-card small{color:#a0a0a7;font-size:14px;font-weight:700}.feature-card h3{max-width:460px;margin-top:6px;font-size:clamp(24px,3.7vw,38px);line-height:1.1;letter-spacing:-.05em}\n" +
  "    .feature-card p{max-width:460px;margin-top:18px;color:#a0a0a7;font-size:16px;line-height:1.65}\n" +
  "    .feature-icon{align-self:flex-start;margin-top:28px;color:#c4c4ca;font-size:42px;line-height:1}\n" +
  "    .scripts-section{border-top:1px solid #202024}\n" +
  "    .home-script-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin-top:42px}\n" +
  "    .home-script-card{display:block;min-width:0;color:#f5f5f6}.home-script-cover{aspect-ratio:1.65/1;overflow:hidden;border:1px solid #28282c;border-radius:20px;background:linear-gradient(135deg,#19191d,#09090b)}\n" +
  "    .home-script-cover img{width:100%;height:100%;object-fit:cover;transition:transform .35s ease}.home-script-card:hover img{transform:scale(1.04)}\n" +
  "    .home-script-cover span{width:100%;height:100%;display:grid;place-items:center;color:#ccc;font-size:60px;font-weight:800}\n" +
  "    .home-script-card h3{margin:15px 3px 0;font-size:19px;line-height:1.25;letter-spacing:-.035em}.home-script-meta{margin:9px 3px 0;color:#777780;font-size:12px}\n" +
  "    .home-script-empty{grid-column:1/-1;padding:30px;border:1px solid #26262a;border-radius:18px;color:#8f8f97;background:#0a0a0c}\n" +
  "    .community-section{padding-top:25px;padding-bottom:100px}\n" +
  "    .community-card{padding:clamp(30px,6vw,70px);border:1px solid #28282c;border-radius:32px;background:radial-gradient(ellipse at 85% 15%,rgba(125,99,196,.13),transparent 35%),#09090b}\n" +
  "    .community-card h2{max-width:680px;font-size:clamp(38px,7vw,70px);line-height:1;letter-spacing:-.06em}\n" +
  "    .community-card p{max-width:620px;margin:20px 0 30px;color:#93939b;font-size:18px;line-height:1.6}\n" +
  "    .community-action{display:inline-flex;align-items:center;justify-content:center;min-height:56px;padding:0 26px;border-radius:999px;background:#f5f5f5;color:#080808;font-weight:700}\n" +
  "    .site-footer{padding:48px clamp(20px,5vw,64px) 35px;border-top:1px solid #202024;background:#050505;color:#9999a1}\n" +
  "    .footer-inner{width:min(1120px,100%);margin:0 auto;display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:34px}\n" +
  "    .footer-brand{color:#f5f5f5;font-size:22px;font-weight:700}.footer-copy{max-width:400px;margin-top:14px;line-height:1.7}.footer-col strong{display:block;margin-bottom:15px;color:#e8e8eb}.footer-col a{display:block;margin:11px 0;color:#888890}.footer-col a:hover{color:#fff}.footer-bottom{width:min(1120px,100%);margin:36px auto 0;padding-top:20px;border-top:1px solid #202024;color:#696970;font-size:12px}\n" +
  "    .reveal{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease}.reveal.is-visible{opacity:1;transform:none}\n" +
  "\n" +
  "    /* =========================================\n" +
  "       Elements \u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b: \u0e2a\u0e38\u0e48\u0e21\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19\u0e2b\u0e21\u0e14!\n" +
  "       ========================================= */\n" +
  "    .pop-element {\n" +
  "      opacity: 0;\n" +
  "      visibility: hidden;\n" +
  "      transform: translate(var(--tx), var(--ty)) scale(0.5) rotate(var(--tr));\n" +
  "      filter: blur(10px);\n" +
  "    }\n" +
  "\n" +
  "    .pop-element.pop-in {\n" +
  "      visibility: visible;\n" +
  "      animation: bouncyRandomPop 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n" +
  "      animation-delay: var(--delay);\n" +
  "    }\n" +
  "\n" +
  "    /* ===== Mobile Responsive ===== */\n" +
  "    @media (max-width:900px){\n" +
  "      .site-header{position:sticky;top:0;left:0;right:0;width:100%;justify-content:space-between;padding:7px 20px}\n" +
  "      .nav-pill{display:flex;flex:1;height:52px;padding:0;border:0;border-radius:0;background:transparent;box-shadow:none;backdrop-filter:none}\n" +
  "      .brand{width:42px;height:42px;background:transparent;box-shadow:none}.brand svg path{fill:#08090b!important;stroke:#08090b!important}body.scrolled .brand svg path{fill:#fff!important;stroke:#fff!important}\n" +
  "      .nav-links,.nav-actions{display:none}.burger{position:relative;z-index:1;display:flex;width:44px;height:44px;border:0;background:transparent}.burger span{width:22px;height:2px;background:#08090b}\n" +
  "      .hero-stage{min-height:calc(100svh - 66px);padding-left:22px;padding-right:22px;padding-bottom:0}.hero{flex:none;padding-top:clamp(145px,26svh,215px);padding-bottom:22px}.pop-element{opacity:0;visibility:hidden;transform:translateY(18px);filter:blur(6px)}.pop-element.pop-in{visibility:visible;animation:heroReveal .75s cubic-bezier(.2,.7,.2,1) var(--delay) both}.headline{position:static;top:auto;left:auto;width:100%;max-width:100%;transform:none;display:flex;justify-content:center;white-space:nowrap;letter-spacing:.13em;font-size:clamp(38px,11vw,58px);line-height:1;margin-bottom:15px}.trust-strip{gap:18px 28px;font-size:11px}\n" +
  "    }\n" +
  "    @keyframes heroReveal{from{opacity:0;transform:translateY(18px);filter:blur(6px)}to{opacity:1;transform:none;filter:none}}\n" +
  "    @media(max-width:720px){\n" +
  "      body{background:#dce4f5}.hero-stage{background:linear-gradient(180deg,#dce4f5 0%,#cbd5eb 100%)}.hero-stage::after{display:none}.site-header{top:0}.hero{padding-top:clamp(145px,26svh,215px)}\n" +
  "      .live-status{display:none}\n" +
  "      .subhead{max-width:600px;margin:0 auto 24px;font-size:clamp(16px,4vw,19px);line-height:1.45}\n" +
  "      .cta-group{max-width:560px;gap:12px;margin-bottom:20px}\n" +
  "      .cta-primary{min-width:0;flex:1;padding:15px 16px;font-size:16px}\n" +
  "      .terms-note{margin:22px 0 46px;font-size:13px}\n" +
  "      .tech-label{margin-bottom:25px;font-size:14px}\n" +
  "      .hero-stage .tech-marquee{width:100vw;max-width:none;margin-left:calc(50% - 50vw);overflow:hidden}\n" +
  "      .hero-stage .tech-strip{width:max-content;justify-content:flex-start;gap:0;padding:0;animation:techTicker 24s linear infinite;will-change:transform}\n" +
  "      .hero-stage .tech-track{flex:none;gap:clamp(32px,8vw,58px);padding:0 24px 18px}.hero-stage .tech-track[aria-hidden=\"true\"]{display:flex}\n" +
  "      .tech-wordmark{font-size:clamp(17px,4.6vw,23px)}.tech-wordmark:last-child{font-size:12px}\n" +
  "      @keyframes techTicker{to{transform:translateX(-50%)}}\n" +
  "      .trust-strip{display:none}\n" +
  "      .feature-grid,.home-script-grid{grid-template-columns:1fr}\n" +
  "      .feature-card{min-height:260px}.home-script-grid{gap:28px}\n" +
  "      .showcase-layout{grid-template-columns:1fr;gap:28px}.showcase-metrics{display:flex;gap:28px;margin:8px auto 0}.product-window{aspect-ratio:1.5;min-height:260px;padding:0;border-radius:20px}.window-bar{height:48px;gap:9px;padding:0 12px}.window-app-icon{width:29px;height:29px;border-radius:6px;font-size:18px}.window-project{font-size:14px}.window-controls{gap:12px;font-size:14px}.window-content{grid-template-columns:25% minmax(0,1fr);min-height:0}.window-sidebar{gap:4px;padding:4px 4px 5px}.window-nav{gap:2px}.window-nav .window-community{min-height:26px;padding:0 5px;gap:4px;border-radius:8px;font-size:9px}.window-community-mark{width:18px;height:18px;border-radius:4px;font-size:12px}.window-nav-label{padding:3px 4px 1px;font-size:7px}.window-nav-item{min-height:18px;padding:0 4px;gap:4px;font-size:8px}.window-nav-item i{width:12px;font-size:9px}.window-profile{gap:4px;padding:0 2px;font-size:8px}.window-avatar{width:23px;height:23px;font-size:13px}.window-profile small{margin-top:1px;font-size:6px}.window-main{min-width:0;padding:11px;gap:10px}.hub-project-head h3{font-size:13px}.hub-project-head i{font-size:12px}.discord-card{padding:10px;gap:8px;border-radius:14px}.discord-card-heading{gap:8px}.discord-card-icon{width:34px;height:34px;border-radius:9px;font-size:20px}.discord-copy h4{font-size:11px;line-height:1.2}.discord-copy p{margin-top:3px;font-size:9px;line-height:1.2}.discord-actions{gap:6px}.discord-action{min-height:30px;padding:5px 8px;gap:7px;border-radius:9px;font-size:10px}.discord-action i{font-size:12px}\n" +
  "      .section-title-row{align-items:flex-start;flex-direction:column}.section-link{padding:0}\n" +
  "      .footer-inner{grid-template-columns:1fr 1fr}.footer-brand-col{grid-column:1/-1}\n" +
  "      .dark-section{padding-left:22px;padding-right:22px}.product-section{padding-top:26px;padding-bottom:36px}\n" +
  "    }\n" +
  "    @media(max-width:420px){.hero-stage{padding-left:18px;padding-right:18px}.cta-primary{min-width:0;flex:1;padding:14px 10px;font-size:14px;white-space:nowrap}.terms-note{margin-bottom:52px}.tech-wordmark{gap:6px;font-size:15px}.tech-wordmark:last-child{font-size:11px}.product-section{padding-left:14px;padding-right:14px}.product-window{aspect-ratio:1.5;min-height:260px;padding:0;border-radius:18px}.window-sidebar{gap:4px;padding:4px 3px 5px}.window-nav-item{min-height:18px;font-size:8px}.window-nav-item i{width:11px;font-size:9px}.window-profile{font-size:8px}.window-avatar{width:22px;height:22px;font-size:12px}.window-main{padding:9px;gap:8px}.discord-card{padding:8px}.discord-card-icon{width:30px;height:30px;font-size:18px}.discord-copy h4{font-size:11px}.discord-copy p{font-size:8px}.discord-action{min-height:30px;font-size:10px}}\n" +
  "    @media(max-width:600px){.tech-wordmark{gap:7px;font-size:16px}.tech-wordmark:last-child{font-size:12px}.window-nav-item{font-size:9px}.window-nav-item i{font-size:10px}.window-profile{font-size:9px}.window-profile small{font-size:7px}.hub-project-head h3{font-size:14px}.discord-copy h4{font-size:12px}.discord-copy p{font-size:9px}.discord-action{min-height:32px;font-size:11px}}\n" +
  "    @media(max-width:720px){.product-section{padding-top:clamp(70px,9svh,100px);padding-bottom:36px;background:linear-gradient(180deg,#cbd5eb 0%,#cbd5eb 58%,#101012 100%)}.product-section .section-kicker,.product-section .section-heading,.product-section .section-copy{display:none}.product-window{margin-top:0}.product-section .section-inner{width:min(100%,1120px)}}\n" +
  "    @media(prefers-reduced-motion:reduce){.tech-strip{animation:none!important;transform:none!important}.tech-track[aria-hidden=\"true\"]{display:none!important}*,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;transition-duration:.01ms!important}.reveal,.product-window,.window-content,.trust-ring{opacity:1;filter:none;transform:none}.product-window::after{display:none}.reveal{opacity:1;transform:none}}\n" +
  "  </style>\n" +
  "</head>\n" +
  "<body>\n" +
  "  <div class=\"page\">\n" +
  "    <!-- Header -->\n" +
  "    <header class=\"site-header\">\n" +
  "      <div class=\"nav-pill\">\n" +
  "        <a href=\"/\" class=\"brand\" aria-label=\"Home\">\n" +
  "          <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 60%; height: 60%;\">\n" +
  "            <path d=\"M12 2L2 7L12 12L22 7L12 2Z\" fill=\"#000\"/>\n" +
  "            <path d=\"M2 17L12 22L22 17\" stroke=\"#000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "            <path d=\"M2 12L12 17L22 12\" stroke=\"#000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "          </svg>\n" +
  "        </a>\n" +
  "        <nav class=\"nav-links\">\n" +
  "          <a href=\"/\" class=\"nav-link is-active\">Home</a>\n" +
  "          <a href=\"#workflow\" class=\"nav-link\">Product</a>\n" +
  "          <a href=\"/scripts\" class=\"nav-link\">Pricing</a>\n" +
  "          <a href=\"/scripts\" class=\"nav-link\">Resources</a>\n" +
  "          <a href=\"#community\" class=\"nav-link\">Community</a>\n" +
  "        </nav>\n" +
  "        <div class=\"nav-actions\"><a href=\"/scripts\" class=\"sign-in\">Sign in</a><a href=\"/scripts\" class=\"nav-try\">Try 999MS&nbsp; \u2197</a></div>\n" +
  "      </div>\n" +
  "      \n" +
  "      <button class=\"burger\" id=\"burger\" aria-label=\"Open menu\" aria-expanded=\"false\">\n" +
  "        <span></span><span></span><span></span>\n" +
  "      </button>\n" +
  "    </header>\n" +
  "\n" +
  "    <section class=\"hero-stage\" aria-label=\"999MS introduction\">\n" +
  "    <!-- Hero -->\n" +
  "    <main class=\"hero\">\n" +
  "      <h1 class=\"headline\" id=\"dynamicHeadline\" aria-label=\"999MS HUB\"></h1>\n" +
  "\n" +
  "      <p class=\"subhead pop-element\">\n" +
  "        A focused platform for Roblox. Fast, stable, built to last.\n" +
  "      </p>\n" +
  "\n" +
  "      <div class=\"cta-group pop-element\">\n" +
  "        <a href=\"/scripts\" class=\"cta-primary\">Get Started</a>\n" +
  "        <a href=\"/scripts\" class=\"cta-primary cta-secondary\">Explore Scripts</a>\n" +
  "      </div>\n" +
  "      <p class=\"terms-note pop-element\">Using 999MS means you agree to use the platform responsibly.</p>\n" +
  "    </main>\n" +
  "      <p class=\"tech-label\">Technology behind 999MS</p>\n" +
  "      <div class=\"tech-marquee\" aria-label=\"999MS platform technology\">\n" +
  "        <div class=\"tech-strip\">\n" +
  "          <div class=\"tech-track\">\n" +
  "            <span class=\"tech-wordmark\"><i class=\"fa-brands fa-roblox\" aria-hidden=\"true\"></i> Roblox</span>\n" +
  "            <span class=\"tech-wordmark\"><i class=\"fa-brands fa-discord\" aria-hidden=\"true\"></i> Discord</span>\n" +
  "            <span class=\"tech-wordmark\"><i class=\"fa-solid fa-shield-halved\" aria-hidden=\"true\"></i> SHA-256</span>\n" +
  "            <span class=\"tech-wordmark\">999MS HUB</span>\n" +
  "          </div>\n" +
  "          <div class=\"tech-track\" aria-hidden=\"true\">\n" +
  "            <span class=\"tech-wordmark\"><i class=\"fa-brands fa-roblox\"></i> Roblox</span>\n" +
  "            <span class=\"tech-wordmark\"><i class=\"fa-brands fa-discord\"></i> Discord</span>\n" +
  "            <span class=\"tech-wordmark\"><i class=\"fa-solid fa-shield-halved\"></i> SHA-256</span>\n" +
  "            <span class=\"tech-wordmark\">999MS HUB</span>\n" +
  "          </div>\n" +
  "        </div>\n" +
  "      </div>\n" +
  "    </section>\n" +
  "\n" +
  "    <section class=\"dark-section product-section reveal\" id=\"workflow\">\n" +
  "      <div class=\"section-inner\">\n" +
  "        <div class=\"showcase-layout\">\n" +
  "        <div class=\"product-window\" aria-label=\"Illustration of the 999MS workspace\">\n" +
  "          <div class=\"window-bar\"><span class=\"window-app-icon\" aria-hidden=\"true\">9</span><span class=\"window-project\">999MS HUB</span><span class=\"window-controls\" aria-hidden=\"true\"><i class=\"fa-solid fa-minus\"></i><i class=\"fa-solid fa-expand\"></i><i class=\"fa-solid fa-xmark\"></i></span></div>\n" +
  "          <div class=\"window-content\" aria-label=\"Preview of the 999MS HUB Discord community interface\">\n" +
  "            <aside class=\"window-sidebar\">\n" +
  "              <nav class=\"window-nav\" aria-label=\"Hub navigation\">\n" +
  "                <div class=\"window-community\"><span class=\"window-community-mark\" aria-hidden=\"true\">9</span><span>Discord</span></div>\n" +
  "                <div class=\"window-nav-label\">Main Core</div>\n" +
  "                <div class=\"window-nav-item\"><i class=\"fa-solid fa-cube\" aria-hidden=\"true\"></i><span>Auto Farm</span></div>\n" +
  "                <div class=\"window-nav-item\"><i class=\"fa-solid fa-gamepad\" aria-hidden=\"true\"></i><span>Another</span></div>\n" +
  "                <div class=\"window-nav-item\"><i class=\"fa-regular fa-user\" aria-hidden=\"true\"></i><span>Character</span></div>\n" +
  "                <div class=\"window-nav-item\"><i class=\"fa-solid fa-gear\" aria-hidden=\"true\"></i><span>Settings</span></div>\n" +
  "                <div class=\"window-nav-item\"><i class=\"fa-regular fa-folder-open\" aria-hidden=\"true\"></i><span>Config</span></div>\n" +
  "              </nav>\n" +
  "              <div class=\"window-profile\"><span class=\"window-avatar\"><i class=\"fa-regular fa-face-smile\" aria-hidden=\"true\"></i></span><span>Anonymous<small>anonymous</small></span></div>\n" +
  "            </aside>\n" +
  "            <div class=\"window-main\">\n" +
  "              <div class=\"hub-project-head\"><h3>999MS HUB Project</h3><i class=\"fa-solid fa-chevron-up\" aria-hidden=\"true\"></i></div>\n" +
  "              <div class=\"discord-card\">\n" +
  "                <div class=\"discord-card-heading\"><span class=\"discord-card-icon\"><i class=\"fa-brands fa-discord\" aria-hidden=\"true\"></i></span><div class=\"discord-copy\"><h4>Join Our Community Discord Server</h4><p>Get the latest updates, support, and connect with other users!</p></div></div>\n" +
  "                <div class=\"discord-actions\"><div class=\"discord-action discord-server\"><i class=\"fa-brands fa-discord\" aria-hidden=\"true\"></i><span>Discord Server</span></div><div class=\"discord-action discord-destroy\"><i class=\"fa-regular fa-trash-can\" aria-hidden=\"true\"></i><span>Destroy Window</span></div></div>\n" +
  "              </div>\n" +
  "            </div>\n" +
  "          </div>\n" +
  "        </div>\n" +
  "        <aside class=\"showcase-metrics\" aria-label=\"999MS verification and compatibility\">\n" +
  "          <div class=\"trust-ring\" role=\"progressbar\" aria-label=\"SHA-256 verification\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"0\">\n" +
  "            <svg viewBox=\"0 0 190 190\" aria-hidden=\"true\"><circle class=\"trust-track\" cx=\"95\" cy=\"95\" r=\"82\"/><circle class=\"trust-progress\" id=\"trustProgress\" cx=\"95\" cy=\"95\" r=\"82\"/></svg>\n" +
  "            <strong><span id=\"trustPercent\">0</span>%</strong><span>SECURE</span>\n" +
  "          </div>\n" +
  "          <div class=\"compatibility-note\"><strong>Compatibility</strong><span>Verified loader stages</span></div>\n" +
  "        </aside>\n" +
  "        </div>\n" +
  "      </div>\n" +
  "    </section>\n" +
  "\n" +
  "    <section class=\"dark-section why-section reveal\" id=\"why-999ms\">\n" +
  "      <div class=\"section-inner\">\n" +
  "        <div class=\"section-title-row\"><div><p class=\"section-kicker\">Why 999MS?</p><h2 class=\"section-heading\">Built for the way you play.</h2></div><a class=\"section-link\" href=\"/scripts\">View scripts <span>\u2192</span></a></div>\n" +
  "        <div class=\"feature-grid\">\n" +
  "          <article class=\"feature-card\"><div><small>Integrity first</small><h3>Every stage is checked.</h3><p>The loader verifies each delivered stage with SHA-256 before handing it off.</p></div><span class=\"feature-icon\" aria-hidden=\"true\">\u2301</span></article>\n" +
  "          <article class=\"feature-card\"><div><small>ScriptHub</small><h3>Find scripts without the hunt.</h3><p>Browse supported experiences, view update information, and copy the matching loader command.</p></div><span class=\"feature-icon\" aria-hidden=\"true\">\u2315</span></article>\n" +
  "          <article class=\"feature-card\"><div><small>Protected source</small><h3>Only the details are public.</h3><p>The catalog shows useful metadata while script source stays protected.</p></div><span class=\"feature-icon\" aria-hidden=\"true\">\u25c8</span></article>\n" +
  "          <article class=\"feature-card\"><div><small>Made for mobile</small><h3>Easy to use on any screen.</h3><p>A responsive catalog and simple controls keep the experience clear on phones and desktops.</p></div><span class=\"feature-icon\" aria-hidden=\"true\">\u25b1</span></article>\n" +
  "        </div>\n" +
  "      </div>\n" +
  "    </section>\n" +
  "\n" +
  "    <section class=\"dark-section scripts-section reveal\">\n" +
  "      <div class=\"section-inner\">\n" +
  "        <div class=\"section-title-row\"><div><p class=\"section-kicker\">ScriptHub</p><h2 class=\"section-heading\">Your scripts, close by.</h2><p class=\"section-copy\">Take a look through the latest scripts published to the 999MS library.</p></div><a class=\"section-link\" href=\"/scripts\">View all <span>\u2192</span></a></div>\n" +
  "        <div class=\"home-script-grid\" id=\"homeScriptPreview\" aria-live=\"polite\"><div class=\"home-script-empty\">Loading the latest scripts\u2026</div></div>\n" +
  "      </div>\n" +
  "    </section>\n" +
  "\n" +
  "    <section class=\"dark-section community-section reveal\" id=\"community\">\n" +
  "      <div class=\"section-inner\"><div class=\"community-card\"><p class=\"section-kicker\">Ready when you are</p><h2>Find your next script.</h2><p>Open the library to explore published scripts, check the available metadata, and copy the loader command.</p><a class=\"community-action\" href=\"/scripts\">Explore ScriptHub&nbsp; \u2192</a></div></div>\n" +
  "    </section>\n" +
  "\n" +
  "    <footer class=\"site-footer\"><div class=\"footer-inner\">\n" +
  "      <div class=\"footer-brand-col\"><a href=\"/\" class=\"footer-brand\">999MS</a><p class=\"footer-copy\">A focused loader and script library for Roblox experiences.</p></div>\n" +
  "      <div class=\"footer-col\"><strong>Explore</strong><a href=\"/\">Home</a><a href=\"/scripts\">ScriptHub</a><a href=\"/hub\">999MS Hub</a></div>\n" +
  "      <div class=\"footer-col\"><strong>Platform</strong><a href=\"/control\">Control panel</a><a href=\"/stats\">Service status</a></div>\n" +
  "    </div><div class=\"footer-bottom\">\u00a9 <span id=\"homeYear\"></span> 999MS. Built for the community.</div></footer>\n" +
  "  </div>\n" +
  "\n" +
  "  <script>\n" +
  "    (function () {\n" +
  "      \"use strict\";\n" +
  "\n" +
  "      // \u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e04\u0e48\u0e32\u0e2a\u0e38\u0e48\u0e21 (\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07\u0e40\u0e14\u0e49\u0e07\u0e44\u0e01\u0e25\u0e46)\n" +
  "      function getFarRandomDirection() {\n" +
  "        const tx = (Math.random() - 0.5) * 600; // \u0e2a\u0e38\u0e48\u0e21\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07 -300px \u0e16\u0e36\u0e07 300px\n" +
  "        const ty = (Math.random() - 0.5) * 600;\n" +
  "        const tr = (Math.random() - 0.5) * 180; // \u0e2a\u0e38\u0e48\u0e21\u0e21\u0e38\u0e21\u0e40\u0e2d\u0e35\u0e22\u0e07\n" +
  "        return { tx: `${tx}px`, ty: `${ty}px`, tr: `${tr}deg` };\n" +
  "      }\n" +
  "\n" +
  "      // =========================================\n" +
  "      // 1. \u0e2a\u0e23\u0e49\u0e32\u0e07\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e41\u0e25\u0e30\u0e2a\u0e31\u0e48\u0e07\u0e43\u0e2b\u0e49\u0e40\u0e14\u0e49\u0e07\n" +
  "      // =========================================\n" +
  "      const headlineEl = document.getElementById('dynamicHeadline');\n" +
  "      const text = \"999MS HUB\";\n" +
  "      \n" +
  "      // \u0e2a\u0e23\u0e49\u0e32\u0e07 Element \u0e44\u0e27\u0e49\u0e01\u0e48\u0e2d\u0e19 (\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e42\u0e1c\u0e25\u0e48)\n" +
  "      text.split(\"\").forEach((char) => {\n" +
  "        if (char === \" \") {\n" +
  "          const space = document.createElement('span');\n" +
  "          space.innerHTML = \"&nbsp;\";\n" +
  "          space.style.width = \"0.4em\";\n" +
  "          headlineEl.appendChild(space);\n" +
  "        } else {\n" +
  "          const span = document.createElement('span');\n" +
  "          span.className = 'char';\n" +
  "          span.textContent = char;\n" +
  "          span.setAttribute('data-char', char);\n" +
  "          headlineEl.appendChild(span);\n" +
  "        }\n" +
  "      });\n" +
  "\n" +
  "      // \u0e23\u0e2d\u0e43\u0e2b\u0e49\u0e40\u0e1a\u0e23\u0e32\u0e27\u0e4c\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e27\u0e32\u0e14\u0e2b\u0e19\u0e49\u0e32\u0e08\u0e2d\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e01\u0e48\u0e2d\u0e19 1 Tick \u0e41\u0e25\u0e49\u0e27\u0e04\u0e48\u0e2d\u0e22\u0e2a\u0e31\u0e48\u0e07\u0e41\u0e2d\u0e19\u0e34\u0e40\u0e21\u0e0a\u0e31\u0e19\n" +
  "      setTimeout(() => {\n" +
  "        const chars = headlineEl.querySelectorAll('.char');\n" +
  "        chars.forEach((span, index) => {\n" +
  "          const dir = getFarRandomDirection();\n" +
  "          span.style.setProperty('--tx', dir.tx);\n" +
  "          span.style.setProperty('--ty', dir.ty);\n" +
  "          span.style.setProperty('--tr', dir.tr);\n" +
  "          \n" +
  "          // \u0e2b\u0e19\u0e48\u0e27\u0e07\u0e40\u0e27\u0e25\u0e32\u0e43\u0e2b\u0e49\u0e21\u0e32\u0e17\u0e35\u0e25\u0e30\u0e15\u0e31\u0e27 (\u0e0a\u0e49\u0e32\u0e25\u0e07 0.15s \u0e15\u0e48\u0e2d\u0e15\u0e31\u0e27)\n" +
  "          const delay = 0.2 + (index * 0.15); \n" +
  "          span.style.setProperty('--delay', `${delay}s`);\n" +
  "          \n" +
  "          span.classList.add('pop-in');\n" +
  "\n" +
  "          if (index === chars.length - 1) {\n" +
  "            setTimeout(() => {\n" +
  "              chars.forEach(c => c.classList.add('shimmer-ready'));\n" +
  "            }, (delay + 2) * 1000); // \u0e23\u0e2d\u0e43\u0e2b\u0e49\u0e15\u0e31\u0e27\u0e2a\u0e38\u0e14\u0e17\u0e49\u0e32\u0e22\u0e40\u0e14\u0e49\u0e07\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e01\u0e48\u0e2d\u0e19\u0e04\u0e48\u0e2d\u0e22\u0e27\u0e34\u0e48\u0e07\u0e41\u0e2a\u0e07\n" +
  "          }\n" +
  "        });\n" +
  "      }, 50);\n" +
  "\n" +
  "      // =========================================\n" +
  "      // 2. Elements \u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e43\u0e2b\u0e49\u0e40\u0e14\u0e49\u0e07\u0e41\u0e1a\u0e1a\u0e2a\u0e38\u0e48\u0e21\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19\n" +
  "      // =========================================\n" +
  "      const popElements = document.querySelectorAll('.pop-element');\n" +
  "      \n" +
  "      popElements.forEach((el, index) => {\n" +
  "        // \u0e2a\u0e38\u0e48\u0e21\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07\u0e43\u0e2b\u0e49 Element \u0e19\u0e31\u0e49\u0e19\u0e46\n" +
  "        const dir = getFarRandomDirection();\n" +
  "        el.style.setProperty('--tx', dir.tx);\n" +
  "        el.style.setProperty('--ty', dir.ty);\n" +
  "        el.style.setProperty('--tr', dir.tr);\n" +
  "        \n" +
  "        // \u0e43\u0e2b\u0e49\u0e40\u0e23\u0e34\u0e48\u0e21\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e40\u0e23\u0e34\u0e48\u0e21\u0e42\u0e1c\u0e25\u0e48\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27\u0e19\u0e34\u0e14\u0e19\u0e36\u0e07 (\u0e40\u0e23\u0e34\u0e48\u0e21\u0e17\u0e35\u0e48 1.8 \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35)\n" +
  "        const delay = window.matchMedia(\"(max-width: 900px)\").matches ? 0.12 + (index * 0.12) : 1.8 + (index * 0.2);\n" +
  "        el.style.setProperty('--delay', `${delay}s`);\n" +
  "        \n" +
  "        setTimeout(() => {\n" +
  "          el.classList.add('pop-in');\n" +
  "        }, 50);\n" +
  "      });\n" +
  "\n" +
  "      // =========================================\n" +
  "      // 3. Mobile Menu Toggle\n" +
  "      // =========================================\n" +
  "      const burger = document.getElementById(\"burger\");\n" +
  "      const navLinks = document.querySelector(\".nav-links\");\n" +
  "      const signIn = document.querySelector(\".sign-in\");\n" +
  "\n" +
  "      if (burger) {\n" +
  "        burger.addEventListener(\"click\", () => {\n" +
  "          const isExpanded = burger.getAttribute(\"aria-expanded\") === \"true\";\n" +
  "          burger.setAttribute(\"aria-expanded\", !isExpanded);\n" +
  "          \n" +
  "          if (!isExpanded) {\n" +
  "            navLinks.style.display = \"flex\";\n" +
  "            navLinks.style.flexDirection = \"column\";\n" +
  "            navLinks.style.position = \"absolute\";\n" +
  "            navLinks.style.top = \"66px\";\n" +
  "            navLinks.style.left = \"0\";\n" +
  "            navLinks.style.width = \"100%\";\n" +
  "            navLinks.style.background = \"rgba(248,249,252,0.98)\";\n" +
  "            navLinks.style.padding = \"18px\";\n" +
  "            navLinks.style.borderRadius = \"18px\";\n" +
  "            navLinks.style.border = \"1px solid rgba(10,12,18,0.12)\";\n" +
  "            navLinks.style.boxShadow = \"0 18px 42px rgba(0,0,0,0.18)\";\n" +
  "            navLinks.style.zIndex = \"60\";\n" +
  "            signIn.style.display = \"none\";\n" +
  "          } else {\n" +
  "            navLinks.style.display = \"\";\n" +
  "            signIn.style.display = \"\";\n" +
  "          }\n" +
  "        });\n" +
  "      }\n" +
  "\n" +
  "      // Keep the live badge tied to the actual API health endpoint.\n" +
  "      const liveText = document.getElementById(\"liveText\");\n" +
  "      const liveDot = document.getElementById(\"liveDot\");\n" +
  "      const probeStart = Date.now();\n" +
  "      const homeYear = document.getElementById(\"homeYear\");\n" +
  "      if (homeYear) homeYear.textContent = String(new Date().getFullYear());\n" +
  "      const updateHeaderTone = () => document.body.classList.toggle(\"scrolled\", window.scrollY > 80);\n" +
  "      updateHeaderTone();\n" +
  "      window.addEventListener(\"scroll\", updateHeaderTone, { passive: true });\n" +
  "\n" +
  "      if (\"IntersectionObserver\" in window) {\n" +
  "        const revealObserver = new IntersectionObserver((entries, observer) => {\n" +
  "          entries.forEach((entry) => {\n" +
  "            if (entry.isIntersecting) { entry.target.classList.add(\"is-visible\"); observer.unobserve(entry.target); }\n" +
  "          });\n" +
  "        }, { threshold: 0.08 });\n" +
  "        document.querySelectorAll(\".reveal\").forEach((el) => revealObserver.observe(el));\n" +
  "      } else {\n" +
  "        document.querySelectorAll(\".reveal\").forEach((el) => el.classList.add(\"is-visible\"));\n" +
  "      }\n" +
  "\n" +
  "      const productWindow = document.querySelector(\".product-window\");\n" +
  "      if (productWindow && \"IntersectionObserver\" in window) {\n" +
  "        const uiObserver = new IntersectionObserver((entries, observer) => {\n" +
  "          entries.forEach((entry) => {\n" +
  "            if (entry.isIntersecting) { entry.target.classList.add(\"is-visible\"); observer.unobserve(entry.target); }\n" +
  "          });\n" +
  "        }, { threshold: 0.08 });\n" +
  "        uiObserver.observe(productWindow);\n" +
  "      } else if (productWindow) {\n" +
  "        productWindow.classList.add(\"is-visible\");\n" +
  "      }\n" +
  "\n" +
  "      const trustRing = document.querySelector(\".trust-ring\");\n" +
  "      const trustProgress = document.getElementById(\"trustProgress\");\n" +
  "      const trustPercent = document.getElementById(\"trustPercent\");\n" +
  "      if (trustRing && trustProgress && trustPercent) {\n" +
  "        const circumference = 2 * Math.PI * 82;\n" +
  "        const purple = [155, 115, 255];\n" +
  "        const green = [34, 197, 94];\n" +
  "        let trustStarted = false;\n" +
  "        const paintTrustProgress = (amount) => {\n" +
  "          const value = Math.round(amount);\n" +
  "          const eased = Math.max(0, Math.min(1, amount / 100));\n" +
  "          const color = purple.map((channel, index) => Math.round(channel + (green[index] - channel) * eased));\n" +
  "          trustPercent.textContent = String(value);\n" +
  "          trustRing.setAttribute(\"aria-valuenow\", String(value));\n" +
  "          trustProgress.style.strokeDashoffset = String(circumference * (1 - eased));\n" +
  "          trustProgress.style.stroke = `rgb(${color[0]} ${color[1]} ${color[2]})`;\n" +
  "          trustProgress.style.filter = `drop-shadow(0 0 7px rgba(${color[0]},${color[1]},${color[2]},.55))`;\n" +
  "          trustRing.style.boxShadow = `0 0 50px rgba(${color[0]},${color[1]},${color[2]},.16)`;\n" +
  "        };\n" +
  "        const startTrustProgress = () => {\n" +
  "          if (trustStarted) return;\n" +
  "          trustStarted = true;\n" +
  "          trustRing.classList.add(\"is-visible\");\n" +
  "          if (window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches) {\n" +
  "            paintTrustProgress(100);\n" +
  "            return;\n" +
  "          }\n" +
  "          const startedAt = performance.now();\n" +
  "          const duration = 3200;\n" +
  "          const tick = (now) => {\n" +
  "            const linear = Math.min(1, (now - startedAt) / duration);\n" +
  "            const eased = 1 - Math.pow(1 - linear, 2.2);\n" +
  "            paintTrustProgress(eased * 100);\n" +
  "            if (linear < 1) requestAnimationFrame(tick);\n" +
  "          };\n" +
  "          requestAnimationFrame(tick);\n" +
  "        };\n" +
  "        if (\"IntersectionObserver\" in window) {\n" +
  "          const trustObserver = new IntersectionObserver((entries, observer) => {\n" +
  "            entries.forEach((entry) => {\n" +
  "              if (entry.isIntersecting) { startTrustProgress(); observer.unobserve(entry.target); }\n" +
  "            });\n" +
  "          }, { threshold: 0.25 });\n" +
  "          trustObserver.observe(trustRing);\n" +
  "        } else {\n" +
  "          startTrustProgress();\n" +
  "        }\n" +
  "      }\n" +
  "\n" +
  "      const previewGrid = document.getElementById(\"homeScriptPreview\");\n" +
  "      const safe = (value) => String(value == null ? \"\" : value).replace(/[&<>\"']/g, (ch) => ({\"&\":\"&amp;\",\"<\":\"&lt;\",\">\":\"&gt;\",'\"':\"&quot;\",\"'\":\"&#39;\"}[ch]));\n" +
  "      const scriptTitle = (value) => String(value || \"Script\").replace(/[_-]+/g,\" \").replace(/\\b\\w/g,(ch)=>ch.toUpperCase());\n" +
  "      if (previewGrid) {\n" +
  "        fetch(\"/api/scripts\", { cache: \"no-store\" }).then((res) => { if (!res.ok) throw new Error(\"scripts unavailable\"); return res.json(); }).then(async (data) => {\n" +
  "          const items = Array.isArray(data.items) ? data.items.slice(0,3) : [];\n" +
  "          if (!items.length) { previewGrid.innerHTML = '<div class=\"home-script-empty\">No scripts are published yet. Check back soon.</div>'; return; }\n" +
  "          const ids = items.map((item) => item.placeId).filter(Boolean).join(\",\");\n" +
  "          let games = {};\n" +
  "          if (ids) {\n" +
  "            try { const gameRes = await fetch(\"/api/games?ids=\" + encodeURIComponent(ids), { cache: \"no-store\" }); const gameData = await gameRes.json(); (gameData.games || []).forEach((game) => { games[String(game.placeId)] = game; }); } catch (_) {}\n" +
  "          }\n" +
  "          previewGrid.innerHTML = items.map((item) => {\n" +
  "            const game = games[String(item.placeId)] || {};\n" +
  "            const title = game.name || scriptTitle(item.name);\n" +
  "            const cover = game.icon ? '<img src=\"' + safe(game.icon) + '\" alt=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer\">' : '<span>' + safe(title.slice(0,1).toUpperCase() || \"9\") + '</span>';\n" +
  "            const date = item.updatedAt ? new Date(item.updatedAt).toLocaleDateString(undefined,{year:\"numeric\",month:\"short\",day:\"numeric\"}) : \"Recently published\";\n" +
  "            return '<a class=\"home-script-card\" href=\"/scripts\"><div class=\"home-script-cover\">' + cover + '</div><h3>' + safe(title) + '</h3><p class=\"home-script-meta\">999MS &nbsp;\u00b7&nbsp; ' + safe(item.name) + '.lua &nbsp;\u00b7&nbsp; ' + safe(date) + '</p></a>';\n" +
  "          }).join(\"\");\n" +
  "          previewGrid.querySelectorAll(\"img\").forEach((img) => img.addEventListener(\"error\", () => { const cover = img.parentNode; img.remove(); const span = document.createElement(\"span\"); span.textContent = \"9\"; cover.appendChild(span); }));\n" +
  "        }).catch(() => { previewGrid.innerHTML = '<div class=\"home-script-empty\">The script library is temporarily unavailable. <a href=\"/scripts\" style=\"color:#fff\">Open ScriptHub \u2192</a></div>'; });\n" +
  "      }\n" +
  "\n" +
  "      fetch(\"/api/health\", { cache: \"no-store\" })\n" +
  "        .then((res) => {\n" +
  "          if (!res.ok) throw new Error(\"HTTP \" + res.status);\n" +
  "          return res.json();\n" +
  "        })\n" +
  "        .then((data) => {\n" +
  "          const ms = Date.now() - probeStart;\n" +
  "          if (liveText) liveText.textContent = \"LIVE \u00b7 \" + ms + \" MS \u00b7 v\" + (data.version || \"\");\n" +
  "        })\n" +
  "        .catch(() => {\n" +
  "          if (liveText) {\n" +
  "            liveText.textContent = \"OFFLINE \u2014 API NOT REACHABLE\";\n" +
  "            liveText.style.color = \"#ff6b81\";\n" +
  "            liveText.style.textShadow = \"0 0 10px rgba(255, 107, 129, 0.5)\";\n" +
  "          }\n" +
  "          if (liveDot) {\n" +
  "            liveDot.style.background = \"#ff6b81\";\n" +
  "            liveDot.style.boxShadow = \"0 0 10px #ff6b81\";\n" +
  "          }\n" +
  "        });\n" +
  "    })();\n" +
  "  </script>\n" +
  "</body>\n" +
  "</html>";
Object.assign(EMBEDDED_PAGES, { "/": ROOT_PAGE });
// END PAGE /
// BEGIN PAGE /hub - generated from pages/hub.html; run `npm run pages` to refresh.
const HUB_PAGE =
  "<!DOCTYPE html>\n" +
  "<html lang=\"en\">\n" +
  "<head>\n" +
  "  <meta charset=\"UTF-8\" />\n" +
  "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, viewport-fit=cover\" />\n" +
  "  <title>999MS HUB \u2014 Premium Roblox Scripts</title>\n" +
  "\n" +
  "  <!-- 1. Inter (UI) -->\n" +
  "  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n" +
  "  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n" +
  "  <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap\" rel=\"stylesheet\" />\n" +
  "\n" +
  "  <!-- 2. BubbledotICG-FinePos (Display - Dot-matrix) -->\n" +
  "  <link href=\"https://db.onlinewebfonts.com/c/8cb707a9b8a73f8a7403336b861c3074?family=BubbledotICG-FinePos\" rel=\"stylesheet\" />\n" +
  "\n" +
  "  <!-- 3. Font Awesome 6.5.2 -->\n" +
  "  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css\" integrity=\"sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\n" +
  "\n" +
  "  <style>\n" +
  "    /* ===== Variables ===== */\n" +
  "    :root {\n" +
  "      --bg: #000000;\n" +
  "      --text: #ffffff;\n" +
  "      --muted: #8e8e93;\n" +
  "      --pill-dark: #1a1a1a;\n" +
  "      --nav-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);\n" +
  "      \n" +
  "      /* \u0e1f\u0e2d\u0e19\u0e15\u0e4c Dot-matrix \u0e17\u0e31\u0e49\u0e07\u0e2b\u0e19\u0e49\u0e32 */\n" +
  "      --font-sans: \"Inter\", system-ui, -apple-system, \"Segoe UI\", sans-serif;\n" +
  "      --font-display: \"Inter\", system-ui, -apple-system, \"Segoe UI\", sans-serif;\n" +
  "    }\n" +
  "\n" +
  "    *, *::before, *::after {\n" +
  "      box-sizing: border-box;\n" +
  "      margin: 0;\n" +
  "      padding: 0;\n" +
  "    }\n" +
  "\n" +
  "    html { scroll-behavior: smooth; }\n" +
  "\n" +
  "    body {\n" +
  "      background: #dce4f5;\n" +
  "      color: var(--text);\n" +
  "      font-family: var(--font-sans);\n" +
  "      -webkit-font-smoothing: antialiased;\n" +
  "      -moz-osx-font-smoothing: grayscale;\n" +
  "      overflow-x: hidden;\n" +
  "      letter-spacing: 0.02em;\n" +
  "    }\n" +
  "\n" +
  "    a { text-decoration: none; color: inherit; }\n" +
  "    button { font-family: inherit; border: none; background: none; cursor: pointer; }\n" +
  "    img { display: block; max-width: 100%; }\n" +
  "\n" +
  "    /* ===== Page Layout ===== */\n" +
  "    .page { position:relative; z-index:3; width:100%; display:flex; flex-direction:column; align-items:stretch; padding-bottom:0; }\n" +
  "    .hero-stage { position:relative; isolation:isolate; width:100%; min-height:52svh; display:flex; flex-direction:column; align-items:center; padding:0 clamp(16px,4vw,42px) 24px; overflow:visible; color:#07080b; background:linear-gradient(135deg,#dbe3f4 0%,#b9c5e3 46%,#e4eaf5 100%); }\n" +
  "    .hero-stage::before { content:\"\"; position:absolute; inset:0; z-index:0; background:radial-gradient(ellipse at 22% 26%,rgba(255,255,255,.75),transparent 45%),radial-gradient(ellipse at 82% 66%,rgba(255,255,255,.46),transparent 45%); }\n" +
  "    .hero-stage::after { display:none; }\n" +
  "    .hero-stage > * { position:relative; z-index:1; width:min(100%,1200px); }\n" +
  "\n" +
  "    /* ===== Header ===== */\n" +
  "    .site-header { position:sticky; top:0; z-index:50; width:min(100%,1440px); margin:0 auto; padding:10px clamp(16px,3vw,42px); display:flex; align-items:center; justify-content:center; }\n" +
  "    .site-header::before { content:\"\"; position:absolute; z-index:0; top:0; bottom:0; left:calc(50% - 50vw); right:calc(50% - 50vw); background:transparent; transition:background .2s ease; pointer-events:none; }\n" +
  "    body.scrolled .site-header::before { background:rgba(5,5,6,.94); border-bottom:1px solid #202024; backdrop-filter:blur(16px); }\n" +
  "\n" +
  "    .nav-pill { position:relative; z-index:1; display:flex; align-items:center; justify-content:space-between; width:100%; height:64px; padding:0 8px 0 16px; border-radius:0; background:transparent; border:0; box-shadow:none; backdrop-filter:none; }\n" +
  "\n" +
  "    .brand {\n" +
  "      flex-shrink: 0; display: grid; place-items: center;\n" +
  "      width: 44px; height: 44px; border-radius: 50%;\n" +
  "      background: #fff; overflow: hidden;\n" +
  "      transition: transform 0.25s ease;\n" +
  "      box-shadow: 0 0 15px rgba(255,255,255,0.3);\n" +
  "    }\n" +
  "\n" +
  "    .brand:hover { transform: scale(1.04); }\n" +
  "    .brand img { width: 72%; height: 72%; object-fit: contain; }\n" +
  "\n" +
  "    .nav-links { display:flex;align-items:center;gap:clamp(16px,2.5vw,34px); }\n" +
  "    .nav-actions{display:flex;align-items:center;gap:12px}.nav-try{height:48px;padding:0 24px;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;background:#050505;color:#fff;font-size:14px;font-weight:650}.nav-actions .sign-in{background:rgba(255,255,255,.3);color:#111}.nav-actions .nav-try{background:#050505;color:#fff}\n" +
  "    .nav-link { font-size:14px; font-weight:600; color:rgba(7,8,11,.62); transition:color .2s ease; }\n" +
  "    .nav-link:hover, .nav-link.is-active { color:#050608; }\n" +
  "    body.scrolled .nav-link{color:#a6a6ae}body.scrolled .nav-link:hover,body.scrolled .nav-link.is-active{color:#fff}\n" +
  "    body.scrolled .nav-actions .sign-in{background:rgba(255,255,255,.12);color:#fff}body.scrolled .nav-actions .nav-try{background:#fff;color:#050505}\n" +
  "    body.scrolled .burger span{background:#fff}body.scrolled .burger{background:transparent}\n" +
  "\n" +
  "    .sign-in {\n" +
  "      display:inline-flex;align-items:center;justify-content:center;\n" +
  "      height:48px;padding:0 20px;border-radius:999px;\n" +
  "      background: #050505; color: #fff; font-size: 14px; font-weight: 600;\n" +
  "      transition: transform 0.2s ease, opacity 0.2s, box-shadow 0.2s;\n" +
  "    }\n" +
  "\n" +
  "    .sign-in:hover { transform: scale(1.02); box-shadow: 0 0 20px rgba(255,255,255,0.4); }\n" +
  "\n" +
  "    .burger {\n" +
  "      display: none; flex-direction: column; align-items: center; justify-content: center;\n" +
  "      gap: 5px; width: 48px; height: 48px; border-radius: 50%;\n" +
  "      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);\n" +
  "    }\n" +
  "    .burger span {\n" +
  "      display: block; width: 18px; height: 1.5px;\n" +
  "      background: #fff; border-radius: 2px;\n" +
  "      transition: transform 0.25s ease, background 0.25s ease;\n" +
  "    }\n" +
  "\n" +
  "    /* ===== Hero Section ===== */\n" +
  "    .hero {\n" +
  "      position:relative;width:100%;max-width:1000px;flex:1;\n" +
  "      display:flex;flex-direction:column;align-items:center;justify-content:flex-start;\n" +
  "      text-align:center;padding:64px 0 18px;\n" +
  "    }\n" +
  "\n" +
  "    /* =========================================\n" +
  "       HEADLINE: \u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e2a\u0e38\u0e48\u0e21\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07 \u0e44\u0e01\u0e25\u0e46 \u0e0a\u0e49\u0e32\u0e46\n" +
  "       ========================================= */\n" +
  "    .headline {\n" +
  "      position:absolute;top:-220px;left:50%;width:max-content;max-width:none;\n" +
  "      display:flex;align-items:center;justify-content:center;white-space:nowrap;\n" +
  "      flex-wrap:nowrap;gap:.045em;font-weight:800;font-size:clamp(140px,17vw,270px);\n" +
  "      letter-spacing:.025em;line-height:.9;margin:0;perspective:none;color:#07080b;\n" +
  "      min-height:0;transform:translateX(-50%);pointer-events:none;\n" +
  "    }\n" +
  "    @media(min-width:901px){\n" +
  "      .hero{padding-top:clamp(20px,3vw,44px)}\n" +
  "      .headline{position:relative;top:auto;left:auto;width:100%;max-width:100%;transform:none;white-space:nowrap;gap:.035em;font-size:clamp(68px,12vw,190px);line-height:.88;margin:0 0 clamp(20px,2.5vw,36px)}\n" +
  "    }\n" +
  "\n" +
  "    .char {\n" +
  "      display: inline-block;\n" +
  "      background: linear-gradient(180deg,#050609 8%,#777b86 54%,#202229 100%);\n" +
  "      -webkit-background-clip:text; background-clip:text;\n" +
  "      color:transparent; filter:none;\n" +
  "      opacity: 0; visibility: hidden; /* \u0e0b\u0e48\u0e2d\u0e19\u0e44\u0e27\u0e49\u0e23\u0e2d\u0e04\u0e34\u0e27 */\n" +
  "    }\n" +
  "\n" +
  "    .char.pop-in {\n" +
  "      visibility: visible;\n" +
  "      animation: bouncyRandomPop 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n" +
  "      animation-delay: var(--delay);\n" +
  "    }\n" +
  "\n" +
  "    @keyframes bouncyRandomPop {\n" +
  "      0% {\n" +
  "        opacity: 0;\n" +
  "        transform: translate(var(--tx), var(--ty)) scale(0.2) rotate(var(--tr));\n" +
  "        filter: blur(15px);\n" +
  "      }\n" +
  "      60% {\n" +
  "        opacity: 1;\n" +
  "        transform: translate(0, 0) scale(1.1) rotate(0deg);\n" +
  "        filter: blur(0);\n" +
  "      }\n" +
  "      80% {\n" +
  "        transform: translate(0, 0) scale(0.95) rotate(0deg);\n" +
  "      }\n" +
  "      100% {\n" +
  "        opacity: 1;\n" +
  "        transform: translate(0, 0) scale(1) rotate(0deg);\n" +
  "        filter: blur(0);\n" +
  "      }\n" +
  "    }\n" +
  "\n" +
  "    .char.shimmer-ready::after {\n" +
  "      content: attr(data-char);\n" +
  "      position: absolute; top: 0; left: 0; width: 100%; height: 100%;\n" +
  "      background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%);\n" +
  "      background-size: 200% 100%;\n" +
  "      -webkit-background-clip: text; background-clip: text;\n" +
  "      color: transparent; animation: shimmer 3s infinite linear;\n" +
  "      z-index: 1;\n" +
  "    }\n" +
  "\n" +
  "    @keyframes shimmer {\n" +
  "      0% { background-position: -200% 0; }\n" +
  "      100% { background-position: 200% 0; }\n" +
  "    }\n" +
  "\n" +
  "    /* =========================================\n" +
  "       Subhead & CTA (\u0e25\u0e1a Discord \u0e2d\u0e2d\u0e01\u0e41\u0e25\u0e49\u0e27)\n" +
  "       ========================================= */\n" +
  "    .subhead {\n" +
  "      max-width:720px; font-size:clamp(16px,2vw,20px);\n" +
  "      line-height:1.55; color:rgba(7,8,11,.78); margin-bottom:28px;\n" +
  "    }\n" +
  "\n" +
  "    .cta-group {\n" +
  "      display:flex; justify-content:center; flex-wrap:wrap; gap:14px;\n" +
  "      width:100%; max-width:560px; margin-bottom:28px;\n" +
  "    }\n" +
  "\n" +
  "    .cta-primary {\n" +
  "      display: flex; align-items: center; justify-content: center;\n" +
  "      width:auto; min-width:156px; padding:14px 22px;\n" +
  "      border-radius:999px; background:#050505; color:#fff;\n" +
  "      font-size:16px; font-weight:600; box-shadow:0 8px 24px rgba(0,0,0,.12);\n" +
  "      transition:transform .25s ease,box-shadow .25s ease;\n" +
  "    }\n" +
  "    .cta-secondary{background:rgba(255,255,255,.38);color:#08090c;box-shadow:none}\n" +
  "    .cta-secondary:hover{background:rgba(255,255,255,.68);box-shadow:0 10px 28px rgba(20,30,55,.1)}\n" +
  "\n" +
  "    .cta-primary:hover {\n" +
  "      transform: translateY(-2px) scale(1.01);\n" +
  "      box-shadow:0 12px 30px rgba(0,0,0,.2);\n" +
  "    }\n" +
  "\n" +
  "    /* =========================================\n" +
  "       Live Status\n" +
  "       ========================================= */\n" +
  "    .live-status {\n" +
  "      display: flex; align-items: center; gap: 10px;\n" +
  "      font-size:12px; font-weight:700; letter-spacing:.06em; color:#14783d;\n" +
  "      text-shadow:none;\n" +
  "    }\n" +
  "\n" +
  "    .status-dot {\n" +
  "      position:relative; width:9px; height:9px;\n" +
  "      background:#22a85a; border-radius:50%; box-shadow:0 0 0 4px rgba(34,168,90,.14);\n" +
  "    }\n" +
  "\n" +
  "    .status-dot::after {\n" +
  "      content:\"\"; position:absolute; top:50%; left:50%; width:100%; height:100%;\n" +
  "      background:#22a85a; border-radius:50%; transform:translate(-50%,-50%);\n" +
  "      animation:pulseRing 1.5s cubic-bezier(.215,.61,.355,1) infinite; z-index:-1;\n" +
  "    }\n" +
  "\n" +
  "    @keyframes pulseRing {\n" +
  "      0% { width: 100%; height: 100%; opacity: 0.8; }\n" +
  "      100% { width: 300%; height: 300%; opacity: 0; }\n" +
  "    }\n" +
  "\n" +
  "    /* ===== Stats Section ===== */\n" +
  "    .trust-strip{display:flex;justify-content:center;align-items:center;gap:clamp(22px,5vw,70px);flex-wrap:wrap;padding:10px 0 20px;color:rgba(6,8,12,.57);font-size:13px;font-weight:600}\n" +
  "    .trust-item{display:flex;align-items:center;gap:9px;white-space:nowrap}\n" +
  "    .trust-item b{color:#111;font-weight:700}.trust-mark{width:7px;height:7px;border-radius:50%;background:#111;opacity:.48}\n" +
  "    .dark-section{width:100%;padding:clamp(76px,10vw,132px) clamp(20px,5vw,64px);background:#050505;color:#f7f7f8}\n" +
  "    .section-inner{width:min(1120px,100%);margin:0 auto}\n" +
  "    .section-kicker{margin-bottom:18px;color:#888991;font-size:12px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}\n" +
  "    .section-heading{max-width:760px;margin:0;font-size:clamp(38px,7vw,76px);line-height:.99;letter-spacing:-.065em;font-weight:700}\n" +
  "    .section-copy{max-width:640px;margin:22px 0 0;color:#92929b;font-size:clamp(16px,2vw,20px);line-height:1.65}\n" +
  "    .product-section{padding-top:26px;padding-bottom:64px;background:linear-gradient(180deg,#dce4f5 0%,#cbd5eb 60%,#111 100%)}\n" +
  "    .showcase-layout{display:grid;grid-template-columns:minmax(0,1.55fr) minmax(210px,.7fr);gap:clamp(42px,8vw,136px);align-items:center;margin-top:0}\n" +
  "    .product-window{position:relative;width:100%;aspect-ratio:16/9;margin-top:0;padding:14px;display:flex;flex-direction:column;overflow:hidden;border:1px solid #2a2a2e;border-radius:26px;background:linear-gradient(145deg,#151517,#09090a);box-shadow:0 35px 100px rgba(0,0,0,.55);opacity:0;filter:blur(12px) brightness(1.35);transform:translateY(90px) scale(.94);transition:opacity .9s ease .18s,transform 1s cubic-bezier(.2,.7,.2,1) .18s,filter .85s ease .18s;will-change:opacity,transform,filter}\n" +
  "    .product-window::after{content:\"\";position:absolute;z-index:5;top:-35%;bottom:-35%;left:-65%;width:58%;pointer-events:none;opacity:0;transform:translateX(-110%) skewX(-17deg);background:linear-gradient(90deg,transparent,rgba(173,119,255,.08) 24%,rgba(255,255,255,.72) 50%,rgba(173,119,255,.2) 72%,transparent);mix-blend-mode:screen}\n" +
  "    .product-window.is-visible{opacity:1;filter:blur(0) brightness(1);transform:translateY(0) scale(1);animation:ui-warp-glow 1.2s ease-out .25s both}\n" +
  "    .product-window.is-visible::after{animation:ui-light-warp 1.25s cubic-bezier(.2,.7,.2,1) .28s both}\n" +
  "    @keyframes ui-light-warp{0%{opacity:0;transform:translateX(-110%) skewX(-17deg)}20%{opacity:.95}78%{opacity:.8}100%{opacity:0;transform:translateX(300%) skewX(-17deg)}}\n" +
  "    @keyframes ui-warp-glow{0%,100%{box-shadow:0 35px 100px rgba(0,0,0,.55),0 0 0 rgba(155,115,255,0)}35%{box-shadow:0 35px 100px rgba(0,0,0,.55),0 0 42px rgba(155,115,255,.62),0 0 90px rgba(110,80,255,.28)}}\n" +
  "    .window-bar{height:58px;flex:none;display:flex;align-items:center;gap:12px;padding:0 18px;color:#f4f4f6;font-size:14px}\n" +
  "    .window-app-icon{width:38px;height:38px;flex:none;display:grid;place-items:center;border-radius:7px;background:#050608;color:#fff;font-size:23px;font-style:italic;font-weight:900;line-height:1}\n" +
  "    .window-project{min-width:0;color:#f6f6f8;font-size:18px;font-weight:700;line-height:1.2;letter-spacing:-.02em}\n" +
  "    .window-controls{margin-left:auto;display:flex;align-items:center;gap:24px;color:#c9cbd2;font-size:18px}\n" +
  "    .window-content{min-height:0;flex:1;display:grid;grid-template-columns:24% minmax(0,1fr);overflow:hidden;border:0;border-top:1px solid #202126;border-radius:0 0 24px 24px;background:#15161a;opacity:0;transform:translateY(42px);transition:opacity .8s ease .38s,transform .85s cubic-bezier(.2,.7,.2,1) .38s}\n" +
  "    .product-window.is-visible .window-content{opacity:1;transform:translateY(0)}\n" +
  "    .window-sidebar{min-width:0;display:flex;flex-direction:column;gap:10px;padding:0 8px 10px;background:#101114;border-right:1px solid #25262b}\n" +
  "    .window-nav{display:grid;gap:4px}.window-nav .window-community{min-height:42px;padding:0 9px;display:flex;align-items:center;gap:9px;border-radius:13px;background:#292a2f;color:#f7f7f9;font-size:14px;font-weight:650}.window-community-mark{width:27px;height:27px;flex:none;display:grid;place-items:center;border-radius:6px;background:#050608;color:#fff;font-size:16px;font-style:italic;font-weight:900}\n" +
  "    .window-nav-label{padding:10px 9px 2px;color:#777982;font-size:13px;font-weight:650}.window-nav-item{min-height:32px;padding:0 9px;display:flex;align-items:center;gap:10px;color:#d3d4d9;font-size:14px;font-weight:550}.window-nav-item i{width:19px;color:#aeb1bb;text-align:center;font-size:16px}\n" +
  "    .window-profile{display:flex;align-items:center;gap:9px;margin-top:auto;padding:0 6px;color:#f7f7f9;font-size:14px;font-weight:700}.window-avatar{width:42px;height:42px;display:grid;place-items:center;flex:none;border-radius:50%;background:linear-gradient(145deg,#32343a,#15161a);color:#cfd0d4;font-size:22px}.window-profile small{display:block;margin-top:3px;color:#8d9099;font-size:11px;font-weight:500}\n" +
  "    .window-main{min-width:0;padding:16px 20px;display:flex;flex-direction:column;gap:14px;background:#17181c}.hub-project-head{display:flex;align-items:center;justify-content:space-between;gap:16px;color:#f3f3f5}.hub-project-head h3{font-size:20px;line-height:1.2;font-weight:700;letter-spacing:-.025em}.hub-project-head i{color:#a5a7b0;font-size:18px}\n" +
  "    .discord-card{min-width:0;padding:14px;display:flex;flex-direction:column;gap:8px;border-radius:22px;background:#24252a}.discord-card-heading{display:flex;align-items:center;gap:12px;min-width:0}.discord-card-icon{width:58px;height:58px;flex:none;display:grid;place-items:center;border-radius:15px;background:#050608;color:#fff;font-size:34px}.discord-copy{min-width:0}.discord-copy h4{color:#f7f7f8;font-size:18px;line-height:1.2;font-weight:700;letter-spacing:-.02em}.discord-copy p{margin-top:5px;color:#b1b3bb;font-size:14px;line-height:1.3}.discord-actions{display:grid;gap:8px}.discord-action{min-height:48px;padding:8px 14px;display:flex;align-items:center;justify-content:center;gap:12px;border-radius:15px;color:#fff;font-size:17px;font-weight:700}.discord-action i{font-size:21px}.discord-server{background:#1877f2}.discord-destroy{background:#050608}\n" +
  "    .showcase-metrics{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:42px}.trust-ring{position:relative;width:190px;height:190px;margin:0;display:grid;place-content:center;text-align:center;border-radius:50%;box-shadow:0 0 50px rgba(155,115,255,.14);opacity:0;transform:translateY(44px) scale(.82);transition:opacity .8s ease,transform .9s cubic-bezier(.2,.7,.2,1),box-shadow .35s ease}\n" +
  "    .trust-ring.is-visible{opacity:1;transform:translateY(0) scale(1)}\n" +
  "    .trust-ring svg{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg);pointer-events:none;overflow:visible}\n" +
  "    .trust-track,.trust-progress{fill:none;stroke-width:10}\n" +
  "    .trust-track{stroke:rgba(255,255,255,.12)}\n" +
  "    .trust-progress{stroke:#9b73ff;stroke-linecap:round;stroke-dasharray:515.22;stroke-dashoffset:515.22;filter:drop-shadow(0 0 7px rgba(155,115,255,.55))}\n" +
  "    .trust-ring strong,.trust-ring span{position:relative;z-index:1}\n" +
  "    .trust-ring strong{font-size:44px;line-height:1;letter-spacing:-.06em}.trust-ring span{margin-top:10px;color:#92929a;font-size:12px;font-weight:800;letter-spacing:.25em}\n" +
  "    .compatibility-note{width:100%;padding-top:22px;border-top:1px solid #27272a;text-align:center}.compatibility-note strong{display:block;color:#bbbcc4;font-size:14px;font-weight:550}.compatibility-note span{display:block;margin-top:10px;color:#777982;font-size:12px;line-height:1.5}\n" +
  "    .terms-note{margin:6px 0 120px;color:rgba(7,8,11,.78);font-size:14px;line-height:1.5;text-align:center}.terms-note a{text-decoration:underline;text-underline-offset:3px}\n" +
  "    .tech-label{margin:0 0 22px;color:rgba(7,8,11,.55);font-size:14px;font-weight:600;text-align:center}\n" +
  "    .tech-strip{display:flex;justify-content:center;align-items:center;padding:0 0 12px;color:rgba(16,18,25,.68)}.tech-track{display:flex;align-items:center;gap:clamp(28px,6vw,82px)}.tech-track[aria-hidden=\"true\"]{display:none}\n" +
  "    .tech-wordmark{display:flex;align-items:center;gap:9px;font-size:clamp(17px,2.1vw,24px);font-weight:750;letter-spacing:-.04em;white-space:nowrap}.tech-wordmark i{font-size:1.05em}.tech-wordmark:last-child{font-size:15px;letter-spacing:.1em}\n" +
  "    .why-section{border-top:1px solid #202024}\n" +
  "    .section-title-row{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:42px}\n" +
  "    .section-link{flex:none;padding-bottom:8px;color:#f4f4f5;font-weight:700}.section-link span{margin-left:12px;font-size:20px}\n" +
  "    .feature-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}\n" +
  "    .feature-card{min-height:280px;padding:clamp(24px,4vw,42px);display:flex;flex-direction:column;justify-content:space-between;border:1px solid #29292d;border-radius:28px;background:#1b1b1e}\n" +
  "    .feature-card small{color:#a0a0a7;font-size:14px;font-weight:700}.feature-card h3{max-width:460px;margin-top:6px;font-size:clamp(24px,3.7vw,38px);line-height:1.1;letter-spacing:-.05em}\n" +
  "    .feature-card p{max-width:460px;margin-top:18px;color:#a0a0a7;font-size:16px;line-height:1.65}\n" +
  "    .feature-icon{align-self:flex-start;margin-top:28px;color:#c4c4ca;font-size:42px;line-height:1}\n" +
  "    .scripts-section{border-top:1px solid #202024}\n" +
  "    .home-script-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin-top:42px}\n" +
  "    .home-script-card{display:block;min-width:0;color:#f5f5f6}.home-script-cover{aspect-ratio:1.65/1;overflow:hidden;border:1px solid #28282c;border-radius:20px;background:linear-gradient(135deg,#19191d,#09090b)}\n" +
  "    .home-script-cover img{width:100%;height:100%;object-fit:cover;transition:transform .35s ease}.home-script-card:hover img{transform:scale(1.04)}\n" +
  "    .home-script-cover span{width:100%;height:100%;display:grid;place-items:center;color:#ccc;font-size:60px;font-weight:800}\n" +
  "    .home-script-card h3{margin:15px 3px 0;font-size:19px;line-height:1.25;letter-spacing:-.035em}.home-script-meta{margin:9px 3px 0;color:#777780;font-size:12px}\n" +
  "    .home-script-empty{grid-column:1/-1;padding:30px;border:1px solid #26262a;border-radius:18px;color:#8f8f97;background:#0a0a0c}\n" +
  "    .community-section{padding-top:25px;padding-bottom:100px}\n" +
  "    .community-card{padding:clamp(30px,6vw,70px);border:1px solid #28282c;border-radius:32px;background:radial-gradient(ellipse at 85% 15%,rgba(125,99,196,.13),transparent 35%),#09090b}\n" +
  "    .community-card h2{max-width:680px;font-size:clamp(38px,7vw,70px);line-height:1;letter-spacing:-.06em}\n" +
  "    .community-card p{max-width:620px;margin:20px 0 30px;color:#93939b;font-size:18px;line-height:1.6}\n" +
  "    .community-action{display:inline-flex;align-items:center;justify-content:center;min-height:56px;padding:0 26px;border-radius:999px;background:#f5f5f5;color:#080808;font-weight:700}\n" +
  "    .site-footer{padding:48px clamp(20px,5vw,64px) 35px;border-top:1px solid #202024;background:#050505;color:#9999a1}\n" +
  "    .footer-inner{width:min(1120px,100%);margin:0 auto;display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:34px}\n" +
  "    .footer-brand{color:#f5f5f5;font-size:22px;font-weight:700}.footer-copy{max-width:400px;margin-top:14px;line-height:1.7}.footer-col strong{display:block;margin-bottom:15px;color:#e8e8eb}.footer-col a{display:block;margin:11px 0;color:#888890}.footer-col a:hover{color:#fff}.footer-bottom{width:min(1120px,100%);margin:36px auto 0;padding-top:20px;border-top:1px solid #202024;color:#696970;font-size:12px}\n" +
  "    .reveal{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease}.reveal.is-visible{opacity:1;transform:none}\n" +
  "\n" +
  "    /* =========================================\n" +
  "       Elements \u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b: \u0e2a\u0e38\u0e48\u0e21\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19\u0e2b\u0e21\u0e14!\n" +
  "       ========================================= */\n" +
  "    .pop-element {\n" +
  "      opacity: 0;\n" +
  "      visibility: hidden;\n" +
  "      transform: translate(var(--tx), var(--ty)) scale(0.5) rotate(var(--tr));\n" +
  "      filter: blur(10px);\n" +
  "    }\n" +
  "\n" +
  "    .pop-element.pop-in {\n" +
  "      visibility: visible;\n" +
  "      animation: bouncyRandomPop 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n" +
  "      animation-delay: var(--delay);\n" +
  "    }\n" +
  "\n" +
  "    /* ===== Mobile Responsive ===== */\n" +
  "    @media (max-width:900px){\n" +
  "      .site-header{position:sticky;top:0;left:0;right:0;width:100%;justify-content:space-between;padding:7px 20px}\n" +
  "      .nav-pill{display:flex;flex:1;height:52px;padding:0;border:0;border-radius:0;background:transparent;box-shadow:none;backdrop-filter:none}\n" +
  "      .brand{width:42px;height:42px;background:transparent;box-shadow:none}.brand svg path{fill:#08090b!important;stroke:#08090b!important}body.scrolled .brand svg path{fill:#fff!important;stroke:#fff!important}\n" +
  "      .nav-links,.nav-actions{display:none}.burger{position:relative;z-index:1;display:flex;width:44px;height:44px;border:0;background:transparent}.burger span{width:22px;height:2px;background:#08090b}\n" +
  "      .hero-stage{min-height:calc(100svh - 66px);padding-left:22px;padding-right:22px;padding-bottom:0}.hero{flex:none;padding-top:clamp(145px,26svh,215px);padding-bottom:22px}.pop-element{opacity:0;visibility:hidden;transform:translateY(18px);filter:blur(6px)}.pop-element.pop-in{visibility:visible;animation:heroReveal .75s cubic-bezier(.2,.7,.2,1) var(--delay) both}.headline{position:static;top:auto;left:auto;width:100%;max-width:100%;transform:none;display:flex;justify-content:center;white-space:nowrap;letter-spacing:.13em;font-size:clamp(38px,11vw,58px);line-height:1;margin-bottom:15px}.trust-strip{gap:18px 28px;font-size:11px}\n" +
  "    }\n" +
  "    @keyframes heroReveal{from{opacity:0;transform:translateY(18px);filter:blur(6px)}to{opacity:1;transform:none;filter:none}}\n" +
  "    @media(max-width:720px){\n" +
  "      body{background:#dce4f5}.hero-stage{background:linear-gradient(180deg,#dce4f5 0%,#cbd5eb 100%)}.hero-stage::after{display:none}.site-header{top:0}.hero{padding-top:clamp(145px,26svh,215px)}\n" +
  "      .live-status{display:none}\n" +
  "      .subhead{max-width:600px;margin:0 auto 24px;font-size:clamp(16px,4vw,19px);line-height:1.45}\n" +
  "      .cta-group{max-width:560px;gap:12px;margin-bottom:20px}\n" +
  "      .cta-primary{min-width:0;flex:1;padding:15px 16px;font-size:16px}\n" +
  "      .terms-note{margin:22px 0 46px;font-size:13px}\n" +
  "      .tech-label{margin-bottom:25px;font-size:14px}\n" +
  "      .hero-stage .tech-marquee{width:100vw;max-width:none;margin-left:calc(50% - 50vw);overflow:hidden}\n" +
  "      .hero-stage .tech-strip{width:max-content;justify-content:flex-start;gap:0;padding:0;animation:techTicker 24s linear infinite;will-change:transform}\n" +
  "      .hero-stage .tech-track{flex:none;gap:clamp(32px,8vw,58px);padding:0 24px 18px}.hero-stage .tech-track[aria-hidden=\"true\"]{display:flex}\n" +
  "      .tech-wordmark{font-size:clamp(17px,4.6vw,23px)}.tech-wordmark:last-child{font-size:12px}\n" +
  "      @keyframes techTicker{to{transform:translateX(-50%)}}\n" +
  "      .trust-strip{display:none}\n" +
  "      .feature-grid,.home-script-grid{grid-template-columns:1fr}\n" +
  "      .feature-card{min-height:260px}.home-script-grid{gap:28px}\n" +
  "      .showcase-layout{grid-template-columns:1fr;gap:28px}.showcase-metrics{display:flex;gap:28px;margin:8px auto 0}.product-window{aspect-ratio:1.5;min-height:260px;padding:0;border-radius:20px}.window-bar{height:48px;gap:9px;padding:0 12px}.window-app-icon{width:29px;height:29px;border-radius:6px;font-size:18px}.window-project{font-size:14px}.window-controls{gap:12px;font-size:14px}.window-content{grid-template-columns:25% minmax(0,1fr);min-height:0}.window-sidebar{gap:4px;padding:4px 4px 5px}.window-nav{gap:2px}.window-nav .window-community{min-height:26px;padding:0 5px;gap:4px;border-radius:8px;font-size:9px}.window-community-mark{width:18px;height:18px;border-radius:4px;font-size:12px}.window-nav-label{padding:3px 4px 1px;font-size:7px}.window-nav-item{min-height:18px;padding:0 4px;gap:4px;font-size:8px}.window-nav-item i{width:12px;font-size:9px}.window-profile{gap:4px;padding:0 2px;font-size:8px}.window-avatar{width:23px;height:23px;font-size:13px}.window-profile small{margin-top:1px;font-size:6px}.window-main{min-width:0;padding:11px;gap:10px}.hub-project-head h3{font-size:13px}.hub-project-head i{font-size:12px}.discord-card{padding:10px;gap:8px;border-radius:14px}.discord-card-heading{gap:8px}.discord-card-icon{width:34px;height:34px;border-radius:9px;font-size:20px}.discord-copy h4{font-size:11px;line-height:1.2}.discord-copy p{margin-top:3px;font-size:9px;line-height:1.2}.discord-actions{gap:6px}.discord-action{min-height:30px;padding:5px 8px;gap:7px;border-radius:9px;font-size:10px}.discord-action i{font-size:12px}\n" +
  "      .section-title-row{align-items:flex-start;flex-direction:column}.section-link{padding:0}\n" +
  "      .footer-inner{grid-template-columns:1fr 1fr}.footer-brand-col{grid-column:1/-1}\n" +
  "      .dark-section{padding-left:22px;padding-right:22px}.product-section{padding-top:26px;padding-bottom:36px}\n" +
  "    }\n" +
  "    @media(max-width:420px){.hero-stage{padding-left:18px;padding-right:18px}.cta-primary{min-width:0;flex:1;padding:14px 10px;font-size:14px;white-space:nowrap}.terms-note{margin-bottom:52px}.tech-wordmark{gap:6px;font-size:15px}.tech-wordmark:last-child{font-size:11px}.product-section{padding-left:14px;padding-right:14px}.product-window{aspect-ratio:1.5;min-height:260px;padding:0;border-radius:18px}.window-sidebar{gap:4px;padding:4px 3px 5px}.window-nav-item{min-height:18px;font-size:8px}.window-nav-item i{width:11px;font-size:9px}.window-profile{font-size:8px}.window-avatar{width:22px;height:22px;font-size:12px}.window-main{padding:9px;gap:8px}.discord-card{padding:8px}.discord-card-icon{width:30px;height:30px;font-size:18px}.discord-copy h4{font-size:11px}.discord-copy p{font-size:8px}.discord-action{min-height:30px;font-size:10px}}\n" +
  "    @media(max-width:600px){.tech-wordmark{gap:7px;font-size:16px}.tech-wordmark:last-child{font-size:12px}.window-nav-item{font-size:9px}.window-nav-item i{font-size:10px}.window-profile{font-size:9px}.window-profile small{font-size:7px}.hub-project-head h3{font-size:14px}.discord-copy h4{font-size:12px}.discord-copy p{font-size:9px}.discord-action{min-height:32px;font-size:11px}}\n" +
  "    @media(max-width:720px){.product-section{padding-top:clamp(70px,9svh,100px);padding-bottom:36px;background:linear-gradient(180deg,#cbd5eb 0%,#cbd5eb 58%,#101012 100%)}.product-section .section-kicker,.product-section .section-heading,.product-section .section-copy{display:none}.product-window{margin-top:0}.product-section .section-inner{width:min(100%,1120px)}}\n" +
  "    @media(prefers-reduced-motion:reduce){.tech-strip{animation:none!important;transform:none!important}.tech-track[aria-hidden=\"true\"]{display:none!important}*,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;transition-duration:.01ms!important}.reveal,.product-window,.window-content,.trust-ring{opacity:1;filter:none;transform:none}.product-window::after{display:none}.reveal{opacity:1;transform:none}}\n" +
  "  </style>\n" +
  "</head>\n" +
  "<body>\n" +
  "  <div class=\"page\">\n" +
  "    <!-- Header -->\n" +
  "    <header class=\"site-header\">\n" +
  "      <div class=\"nav-pill\">\n" +
  "        <a href=\"/\" class=\"brand\" aria-label=\"Home\">\n" +
  "          <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 60%; height: 60%;\">\n" +
  "            <path d=\"M12 2L2 7L12 12L22 7L12 2Z\" fill=\"#000\"/>\n" +
  "            <path d=\"M2 17L12 22L22 17\" stroke=\"#000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "            <path d=\"M2 12L12 17L22 12\" stroke=\"#000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
  "          </svg>\n" +
  "        </a>\n" +
  "        <nav class=\"nav-links\">\n" +
  "          <a href=\"/\" class=\"nav-link is-active\">Home</a>\n" +
  "          <a href=\"#workflow\" class=\"nav-link\">Product</a>\n" +
  "          <a href=\"/scripts\" class=\"nav-link\">Pricing</a>\n" +
  "          <a href=\"/scripts\" class=\"nav-link\">Resources</a>\n" +
  "          <a href=\"#community\" class=\"nav-link\">Community</a>\n" +
  "        </nav>\n" +
  "        <div class=\"nav-actions\"><a href=\"/scripts\" class=\"sign-in\">Sign in</a><a href=\"/scripts\" class=\"nav-try\">Try 999MS&nbsp; \u2197</a></div>\n" +
  "      </div>\n" +
  "      \n" +
  "      <button class=\"burger\" id=\"burger\" aria-label=\"Open menu\" aria-expanded=\"false\">\n" +
  "        <span></span><span></span><span></span>\n" +
  "      </button>\n" +
  "    </header>\n" +
  "\n" +
  "    <section class=\"hero-stage\" aria-label=\"999MS introduction\">\n" +
  "    <!-- Hero -->\n" +
  "    <main class=\"hero\">\n" +
  "      <h1 class=\"headline\" id=\"dynamicHeadline\" aria-label=\"999MS HUB\"></h1>\n" +
  "\n" +
  "      <p class=\"subhead pop-element\">\n" +
  "        A focused platform for Roblox. Fast, stable, built to last.\n" +
  "      </p>\n" +
  "\n" +
  "      <div class=\"cta-group pop-element\">\n" +
  "        <a href=\"/scripts\" class=\"cta-primary\">Get Started</a>\n" +
  "        <a href=\"/scripts\" class=\"cta-primary cta-secondary\">Explore Scripts</a>\n" +
  "      </div>\n" +
  "      <p class=\"terms-note pop-element\">Using 999MS means you agree to use the platform responsibly.</p>\n" +
  "    </main>\n" +
  "      <p class=\"tech-label\">Technology behind 999MS</p>\n" +
  "      <div class=\"tech-marquee\" aria-label=\"999MS platform technology\">\n" +
  "        <div class=\"tech-strip\">\n" +
  "          <div class=\"tech-track\">\n" +
  "            <span class=\"tech-wordmark\"><i class=\"fa-brands fa-roblox\" aria-hidden=\"true\"></i> Roblox</span>\n" +
  "            <span class=\"tech-wordmark\"><i class=\"fa-brands fa-discord\" aria-hidden=\"true\"></i> Discord</span>\n" +
  "            <span class=\"tech-wordmark\"><i class=\"fa-solid fa-shield-halved\" aria-hidden=\"true\"></i> SHA-256</span>\n" +
  "            <span class=\"tech-wordmark\">999MS HUB</span>\n" +
  "          </div>\n" +
  "          <div class=\"tech-track\" aria-hidden=\"true\">\n" +
  "            <span class=\"tech-wordmark\"><i class=\"fa-brands fa-roblox\"></i> Roblox</span>\n" +
  "            <span class=\"tech-wordmark\"><i class=\"fa-brands fa-discord\"></i> Discord</span>\n" +
  "            <span class=\"tech-wordmark\"><i class=\"fa-solid fa-shield-halved\"></i> SHA-256</span>\n" +
  "            <span class=\"tech-wordmark\">999MS HUB</span>\n" +
  "          </div>\n" +
  "        </div>\n" +
  "      </div>\n" +
  "    </section>\n" +
  "\n" +
  "    <section class=\"dark-section product-section reveal\" id=\"workflow\">\n" +
  "      <div class=\"section-inner\">\n" +
  "        <div class=\"showcase-layout\">\n" +
  "        <div class=\"product-window\" aria-label=\"Illustration of the 999MS workspace\">\n" +
  "          <div class=\"window-bar\"><span class=\"window-app-icon\" aria-hidden=\"true\">9</span><span class=\"window-project\">999MS HUB</span><span class=\"window-controls\" aria-hidden=\"true\"><i class=\"fa-solid fa-minus\"></i><i class=\"fa-solid fa-expand\"></i><i class=\"fa-solid fa-xmark\"></i></span></div>\n" +
  "          <div class=\"window-content\" aria-label=\"Preview of the 999MS HUB Discord community interface\">\n" +
  "            <aside class=\"window-sidebar\">\n" +
  "              <nav class=\"window-nav\" aria-label=\"Hub navigation\">\n" +
  "                <div class=\"window-community\"><span class=\"window-community-mark\" aria-hidden=\"true\">9</span><span>Discord</span></div>\n" +
  "                <div class=\"window-nav-label\">Main Core</div>\n" +
  "                <div class=\"window-nav-item\"><i class=\"fa-solid fa-cube\" aria-hidden=\"true\"></i><span>Auto Farm</span></div>\n" +
  "                <div class=\"window-nav-item\"><i class=\"fa-solid fa-gamepad\" aria-hidden=\"true\"></i><span>Another</span></div>\n" +
  "                <div class=\"window-nav-item\"><i class=\"fa-regular fa-user\" aria-hidden=\"true\"></i><span>Character</span></div>\n" +
  "                <div class=\"window-nav-item\"><i class=\"fa-solid fa-gear\" aria-hidden=\"true\"></i><span>Settings</span></div>\n" +
  "                <div class=\"window-nav-item\"><i class=\"fa-regular fa-folder-open\" aria-hidden=\"true\"></i><span>Config</span></div>\n" +
  "              </nav>\n" +
  "              <div class=\"window-profile\"><span class=\"window-avatar\"><i class=\"fa-regular fa-face-smile\" aria-hidden=\"true\"></i></span><span>Anonymous<small>anonymous</small></span></div>\n" +
  "            </aside>\n" +
  "            <div class=\"window-main\">\n" +
  "              <div class=\"hub-project-head\"><h3>999MS HUB Project</h3><i class=\"fa-solid fa-chevron-up\" aria-hidden=\"true\"></i></div>\n" +
  "              <div class=\"discord-card\">\n" +
  "                <div class=\"discord-card-heading\"><span class=\"discord-card-icon\"><i class=\"fa-brands fa-discord\" aria-hidden=\"true\"></i></span><div class=\"discord-copy\"><h4>Join Our Community Discord Server</h4><p>Get the latest updates, support, and connect with other users!</p></div></div>\n" +
  "                <div class=\"discord-actions\"><div class=\"discord-action discord-server\"><i class=\"fa-brands fa-discord\" aria-hidden=\"true\"></i><span>Discord Server</span></div><div class=\"discord-action discord-destroy\"><i class=\"fa-regular fa-trash-can\" aria-hidden=\"true\"></i><span>Destroy Window</span></div></div>\n" +
  "              </div>\n" +
  "            </div>\n" +
  "          </div>\n" +
  "        </div>\n" +
  "        <aside class=\"showcase-metrics\" aria-label=\"999MS verification and compatibility\">\n" +
  "          <div class=\"trust-ring\" role=\"progressbar\" aria-label=\"SHA-256 verification\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"0\">\n" +
  "            <svg viewBox=\"0 0 190 190\" aria-hidden=\"true\"><circle class=\"trust-track\" cx=\"95\" cy=\"95\" r=\"82\"/><circle class=\"trust-progress\" id=\"trustProgress\" cx=\"95\" cy=\"95\" r=\"82\"/></svg>\n" +
  "            <strong><span id=\"trustPercent\">0</span>%</strong><span>SECURE</span>\n" +
  "          </div>\n" +
  "          <div class=\"compatibility-note\"><strong>Compatibility</strong><span>Verified loader stages</span></div>\n" +
  "        </aside>\n" +
  "        </div>\n" +
  "      </div>\n" +
  "    </section>\n" +
  "\n" +
  "    <section class=\"dark-section why-section reveal\" id=\"why-999ms\">\n" +
  "      <div class=\"section-inner\">\n" +
  "        <div class=\"section-title-row\"><div><p class=\"section-kicker\">Why 999MS?</p><h2 class=\"section-heading\">Built for the way you play.</h2></div><a class=\"section-link\" href=\"/scripts\">View scripts <span>\u2192</span></a></div>\n" +
  "        <div class=\"feature-grid\">\n" +
  "          <article class=\"feature-card\"><div><small>Integrity first</small><h3>Every stage is checked.</h3><p>The loader verifies each delivered stage with SHA-256 before handing it off.</p></div><span class=\"feature-icon\" aria-hidden=\"true\">\u2301</span></article>\n" +
  "          <article class=\"feature-card\"><div><small>ScriptHub</small><h3>Find scripts without the hunt.</h3><p>Browse supported experiences, view update information, and copy the matching loader command.</p></div><span class=\"feature-icon\" aria-hidden=\"true\">\u2315</span></article>\n" +
  "          <article class=\"feature-card\"><div><small>Protected source</small><h3>Only the details are public.</h3><p>The catalog shows useful metadata while script source stays protected.</p></div><span class=\"feature-icon\" aria-hidden=\"true\">\u25c8</span></article>\n" +
  "          <article class=\"feature-card\"><div><small>Made for mobile</small><h3>Easy to use on any screen.</h3><p>A responsive catalog and simple controls keep the experience clear on phones and desktops.</p></div><span class=\"feature-icon\" aria-hidden=\"true\">\u25b1</span></article>\n" +
  "        </div>\n" +
  "      </div>\n" +
  "    </section>\n" +
  "\n" +
  "    <section class=\"dark-section scripts-section reveal\">\n" +
  "      <div class=\"section-inner\">\n" +
  "        <div class=\"section-title-row\"><div><p class=\"section-kicker\">ScriptHub</p><h2 class=\"section-heading\">Your scripts, close by.</h2><p class=\"section-copy\">Take a look through the latest scripts published to the 999MS library.</p></div><a class=\"section-link\" href=\"/scripts\">View all <span>\u2192</span></a></div>\n" +
  "        <div class=\"home-script-grid\" id=\"homeScriptPreview\" aria-live=\"polite\"><div class=\"home-script-empty\">Loading the latest scripts\u2026</div></div>\n" +
  "      </div>\n" +
  "    </section>\n" +
  "\n" +
  "    <section class=\"dark-section community-section reveal\" id=\"community\">\n" +
  "      <div class=\"section-inner\"><div class=\"community-card\"><p class=\"section-kicker\">Ready when you are</p><h2>Find your next script.</h2><p>Open the library to explore published scripts, check the available metadata, and copy the loader command.</p><a class=\"community-action\" href=\"/scripts\">Explore ScriptHub&nbsp; \u2192</a></div></div>\n" +
  "    </section>\n" +
  "\n" +
  "    <footer class=\"site-footer\"><div class=\"footer-inner\">\n" +
  "      <div class=\"footer-brand-col\"><a href=\"/\" class=\"footer-brand\">999MS</a><p class=\"footer-copy\">A focused loader and script library for Roblox experiences.</p></div>\n" +
  "      <div class=\"footer-col\"><strong>Explore</strong><a href=\"/\">Home</a><a href=\"/scripts\">ScriptHub</a><a href=\"/hub\">999MS Hub</a></div>\n" +
  "      <div class=\"footer-col\"><strong>Platform</strong><a href=\"/control\">Control panel</a><a href=\"/stats\">Service status</a></div>\n" +
  "    </div><div class=\"footer-bottom\">\u00a9 <span id=\"homeYear\"></span> 999MS. Built for the community.</div></footer>\n" +
  "  </div>\n" +
  "\n" +
  "  <script>\n" +
  "    (function () {\n" +
  "      \"use strict\";\n" +
  "\n" +
  "      // \u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e04\u0e48\u0e32\u0e2a\u0e38\u0e48\u0e21 (\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07\u0e40\u0e14\u0e49\u0e07\u0e44\u0e01\u0e25\u0e46)\n" +
  "      function getFarRandomDirection() {\n" +
  "        const tx = (Math.random() - 0.5) * 600; // \u0e2a\u0e38\u0e48\u0e21\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07 -300px \u0e16\u0e36\u0e07 300px\n" +
  "        const ty = (Math.random() - 0.5) * 600;\n" +
  "        const tr = (Math.random() - 0.5) * 180; // \u0e2a\u0e38\u0e48\u0e21\u0e21\u0e38\u0e21\u0e40\u0e2d\u0e35\u0e22\u0e07\n" +
  "        return { tx: `${tx}px`, ty: `${ty}px`, tr: `${tr}deg` };\n" +
  "      }\n" +
  "\n" +
  "      // =========================================\n" +
  "      // 1. \u0e2a\u0e23\u0e49\u0e32\u0e07\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e41\u0e25\u0e30\u0e2a\u0e31\u0e48\u0e07\u0e43\u0e2b\u0e49\u0e40\u0e14\u0e49\u0e07\n" +
  "      // =========================================\n" +
  "      const headlineEl = document.getElementById('dynamicHeadline');\n" +
  "      const text = \"999MS HUB\";\n" +
  "      \n" +
  "      // \u0e2a\u0e23\u0e49\u0e32\u0e07 Element \u0e44\u0e27\u0e49\u0e01\u0e48\u0e2d\u0e19 (\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e42\u0e1c\u0e25\u0e48)\n" +
  "      text.split(\"\").forEach((char) => {\n" +
  "        if (char === \" \") {\n" +
  "          const space = document.createElement('span');\n" +
  "          space.innerHTML = \"&nbsp;\";\n" +
  "          space.style.width = \"0.4em\";\n" +
  "          headlineEl.appendChild(space);\n" +
  "        } else {\n" +
  "          const span = document.createElement('span');\n" +
  "          span.className = 'char';\n" +
  "          span.textContent = char;\n" +
  "          span.setAttribute('data-char', char);\n" +
  "          headlineEl.appendChild(span);\n" +
  "        }\n" +
  "      });\n" +
  "\n" +
  "      // \u0e23\u0e2d\u0e43\u0e2b\u0e49\u0e40\u0e1a\u0e23\u0e32\u0e27\u0e4c\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e27\u0e32\u0e14\u0e2b\u0e19\u0e49\u0e32\u0e08\u0e2d\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e01\u0e48\u0e2d\u0e19 1 Tick \u0e41\u0e25\u0e49\u0e27\u0e04\u0e48\u0e2d\u0e22\u0e2a\u0e31\u0e48\u0e07\u0e41\u0e2d\u0e19\u0e34\u0e40\u0e21\u0e0a\u0e31\u0e19\n" +
  "      setTimeout(() => {\n" +
  "        const chars = headlineEl.querySelectorAll('.char');\n" +
  "        chars.forEach((span, index) => {\n" +
  "          const dir = getFarRandomDirection();\n" +
  "          span.style.setProperty('--tx', dir.tx);\n" +
  "          span.style.setProperty('--ty', dir.ty);\n" +
  "          span.style.setProperty('--tr', dir.tr);\n" +
  "          \n" +
  "          // \u0e2b\u0e19\u0e48\u0e27\u0e07\u0e40\u0e27\u0e25\u0e32\u0e43\u0e2b\u0e49\u0e21\u0e32\u0e17\u0e35\u0e25\u0e30\u0e15\u0e31\u0e27 (\u0e0a\u0e49\u0e32\u0e25\u0e07 0.15s \u0e15\u0e48\u0e2d\u0e15\u0e31\u0e27)\n" +
  "          const delay = 0.2 + (index * 0.15); \n" +
  "          span.style.setProperty('--delay', `${delay}s`);\n" +
  "          \n" +
  "          span.classList.add('pop-in');\n" +
  "\n" +
  "          if (index === chars.length - 1) {\n" +
  "            setTimeout(() => {\n" +
  "              chars.forEach(c => c.classList.add('shimmer-ready'));\n" +
  "            }, (delay + 2) * 1000); // \u0e23\u0e2d\u0e43\u0e2b\u0e49\u0e15\u0e31\u0e27\u0e2a\u0e38\u0e14\u0e17\u0e49\u0e32\u0e22\u0e40\u0e14\u0e49\u0e07\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e01\u0e48\u0e2d\u0e19\u0e04\u0e48\u0e2d\u0e22\u0e27\u0e34\u0e48\u0e07\u0e41\u0e2a\u0e07\n" +
  "          }\n" +
  "        });\n" +
  "      }, 50);\n" +
  "\n" +
  "      // =========================================\n" +
  "      // 2. Elements \u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e43\u0e2b\u0e49\u0e40\u0e14\u0e49\u0e07\u0e41\u0e1a\u0e1a\u0e2a\u0e38\u0e48\u0e21\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19\n" +
  "      // =========================================\n" +
  "      const popElements = document.querySelectorAll('.pop-element');\n" +
  "      \n" +
  "      popElements.forEach((el, index) => {\n" +
  "        // \u0e2a\u0e38\u0e48\u0e21\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07\u0e43\u0e2b\u0e49 Element \u0e19\u0e31\u0e49\u0e19\u0e46\n" +
  "        const dir = getFarRandomDirection();\n" +
  "        el.style.setProperty('--tx', dir.tx);\n" +
  "        el.style.setProperty('--ty', dir.ty);\n" +
  "        el.style.setProperty('--tr', dir.tr);\n" +
  "        \n" +
  "        // \u0e43\u0e2b\u0e49\u0e40\u0e23\u0e34\u0e48\u0e21\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e40\u0e23\u0e34\u0e48\u0e21\u0e42\u0e1c\u0e25\u0e48\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27\u0e19\u0e34\u0e14\u0e19\u0e36\u0e07 (\u0e40\u0e23\u0e34\u0e48\u0e21\u0e17\u0e35\u0e48 1.8 \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35)\n" +
  "        const delay = window.matchMedia(\"(max-width: 900px)\").matches ? 0.12 + (index * 0.12) : 1.8 + (index * 0.2);\n" +
  "        el.style.setProperty('--delay', `${delay}s`);\n" +
  "        \n" +
  "        setTimeout(() => {\n" +
  "          el.classList.add('pop-in');\n" +
  "        }, 50);\n" +
  "      });\n" +
  "\n" +
  "      // =========================================\n" +
  "      // 3. Mobile Menu Toggle\n" +
  "      // =========================================\n" +
  "      const burger = document.getElementById(\"burger\");\n" +
  "      const navLinks = document.querySelector(\".nav-links\");\n" +
  "      const signIn = document.querySelector(\".sign-in\");\n" +
  "\n" +
  "      if (burger) {\n" +
  "        burger.addEventListener(\"click\", () => {\n" +
  "          const isExpanded = burger.getAttribute(\"aria-expanded\") === \"true\";\n" +
  "          burger.setAttribute(\"aria-expanded\", !isExpanded);\n" +
  "          \n" +
  "          if (!isExpanded) {\n" +
  "            navLinks.style.display = \"flex\";\n" +
  "            navLinks.style.flexDirection = \"column\";\n" +
  "            navLinks.style.position = \"absolute\";\n" +
  "            navLinks.style.top = \"66px\";\n" +
  "            navLinks.style.left = \"0\";\n" +
  "            navLinks.style.width = \"100%\";\n" +
  "            navLinks.style.background = \"rgba(248,249,252,0.98)\";\n" +
  "            navLinks.style.padding = \"18px\";\n" +
  "            navLinks.style.borderRadius = \"18px\";\n" +
  "            navLinks.style.border = \"1px solid rgba(10,12,18,0.12)\";\n" +
  "            navLinks.style.boxShadow = \"0 18px 42px rgba(0,0,0,0.18)\";\n" +
  "            navLinks.style.zIndex = \"60\";\n" +
  "            signIn.style.display = \"none\";\n" +
  "          } else {\n" +
  "            navLinks.style.display = \"\";\n" +
  "            signIn.style.display = \"\";\n" +
  "          }\n" +
  "        });\n" +
  "      }\n" +
  "\n" +
  "      // Keep the live badge tied to the actual API health endpoint.\n" +
  "      const liveText = document.getElementById(\"liveText\");\n" +
  "      const liveDot = document.getElementById(\"liveDot\");\n" +
  "      const probeStart = Date.now();\n" +
  "      const homeYear = document.getElementById(\"homeYear\");\n" +
  "      if (homeYear) homeYear.textContent = String(new Date().getFullYear());\n" +
  "      const updateHeaderTone = () => document.body.classList.toggle(\"scrolled\", window.scrollY > 80);\n" +
  "      updateHeaderTone();\n" +
  "      window.addEventListener(\"scroll\", updateHeaderTone, { passive: true });\n" +
  "\n" +
  "      if (\"IntersectionObserver\" in window) {\n" +
  "        const revealObserver = new IntersectionObserver((entries, observer) => {\n" +
  "          entries.forEach((entry) => {\n" +
  "            if (entry.isIntersecting) { entry.target.classList.add(\"is-visible\"); observer.unobserve(entry.target); }\n" +
  "          });\n" +
  "        }, { threshold: 0.08 });\n" +
  "        document.querySelectorAll(\".reveal\").forEach((el) => revealObserver.observe(el));\n" +
  "      } else {\n" +
  "        document.querySelectorAll(\".reveal\").forEach((el) => el.classList.add(\"is-visible\"));\n" +
  "      }\n" +
  "\n" +
  "      const productWindow = document.querySelector(\".product-window\");\n" +
  "      if (productWindow && \"IntersectionObserver\" in window) {\n" +
  "        const uiObserver = new IntersectionObserver((entries, observer) => {\n" +
  "          entries.forEach((entry) => {\n" +
  "            if (entry.isIntersecting) { entry.target.classList.add(\"is-visible\"); observer.unobserve(entry.target); }\n" +
  "          });\n" +
  "        }, { threshold: 0.08 });\n" +
  "        uiObserver.observe(productWindow);\n" +
  "      } else if (productWindow) {\n" +
  "        productWindow.classList.add(\"is-visible\");\n" +
  "      }\n" +
  "\n" +
  "      const trustRing = document.querySelector(\".trust-ring\");\n" +
  "      const trustProgress = document.getElementById(\"trustProgress\");\n" +
  "      const trustPercent = document.getElementById(\"trustPercent\");\n" +
  "      if (trustRing && trustProgress && trustPercent) {\n" +
  "        const circumference = 2 * Math.PI * 82;\n" +
  "        const purple = [155, 115, 255];\n" +
  "        const green = [34, 197, 94];\n" +
  "        let trustStarted = false;\n" +
  "        const paintTrustProgress = (amount) => {\n" +
  "          const value = Math.round(amount);\n" +
  "          const eased = Math.max(0, Math.min(1, amount / 100));\n" +
  "          const color = purple.map((channel, index) => Math.round(channel + (green[index] - channel) * eased));\n" +
  "          trustPercent.textContent = String(value);\n" +
  "          trustRing.setAttribute(\"aria-valuenow\", String(value));\n" +
  "          trustProgress.style.strokeDashoffset = String(circumference * (1 - eased));\n" +
  "          trustProgress.style.stroke = `rgb(${color[0]} ${color[1]} ${color[2]})`;\n" +
  "          trustProgress.style.filter = `drop-shadow(0 0 7px rgba(${color[0]},${color[1]},${color[2]},.55))`;\n" +
  "          trustRing.style.boxShadow = `0 0 50px rgba(${color[0]},${color[1]},${color[2]},.16)`;\n" +
  "        };\n" +
  "        const startTrustProgress = () => {\n" +
  "          if (trustStarted) return;\n" +
  "          trustStarted = true;\n" +
  "          trustRing.classList.add(\"is-visible\");\n" +
  "          if (window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches) {\n" +
  "            paintTrustProgress(100);\n" +
  "            return;\n" +
  "          }\n" +
  "          const startedAt = performance.now();\n" +
  "          const duration = 3200;\n" +
  "          const tick = (now) => {\n" +
  "            const linear = Math.min(1, (now - startedAt) / duration);\n" +
  "            const eased = 1 - Math.pow(1 - linear, 2.2);\n" +
  "            paintTrustProgress(eased * 100);\n" +
  "            if (linear < 1) requestAnimationFrame(tick);\n" +
  "          };\n" +
  "          requestAnimationFrame(tick);\n" +
  "        };\n" +
  "        if (\"IntersectionObserver\" in window) {\n" +
  "          const trustObserver = new IntersectionObserver((entries, observer) => {\n" +
  "            entries.forEach((entry) => {\n" +
  "              if (entry.isIntersecting) { startTrustProgress(); observer.unobserve(entry.target); }\n" +
  "            });\n" +
  "          }, { threshold: 0.25 });\n" +
  "          trustObserver.observe(trustRing);\n" +
  "        } else {\n" +
  "          startTrustProgress();\n" +
  "        }\n" +
  "      }\n" +
  "\n" +
  "      const previewGrid = document.getElementById(\"homeScriptPreview\");\n" +
  "      const safe = (value) => String(value == null ? \"\" : value).replace(/[&<>\"']/g, (ch) => ({\"&\":\"&amp;\",\"<\":\"&lt;\",\">\":\"&gt;\",'\"':\"&quot;\",\"'\":\"&#39;\"}[ch]));\n" +
  "      const scriptTitle = (value) => String(value || \"Script\").replace(/[_-]+/g,\" \").replace(/\\b\\w/g,(ch)=>ch.toUpperCase());\n" +
  "      if (previewGrid) {\n" +
  "        fetch(\"/api/scripts\", { cache: \"no-store\" }).then((res) => { if (!res.ok) throw new Error(\"scripts unavailable\"); return res.json(); }).then(async (data) => {\n" +
  "          const items = Array.isArray(data.items) ? data.items.slice(0,3) : [];\n" +
  "          if (!items.length) { previewGrid.innerHTML = '<div class=\"home-script-empty\">No scripts are published yet. Check back soon.</div>'; return; }\n" +
  "          const ids = items.map((item) => item.placeId).filter(Boolean).join(\",\");\n" +
  "          let games = {};\n" +
  "          if (ids) {\n" +
  "            try { const gameRes = await fetch(\"/api/games?ids=\" + encodeURIComponent(ids), { cache: \"no-store\" }); const gameData = await gameRes.json(); (gameData.games || []).forEach((game) => { games[String(game.placeId)] = game; }); } catch (_) {}\n" +
  "          }\n" +
  "          previewGrid.innerHTML = items.map((item) => {\n" +
  "            const game = games[String(item.placeId)] || {};\n" +
  "            const title = game.name || scriptTitle(item.name);\n" +
  "            const cover = game.icon ? '<img src=\"' + safe(game.icon) + '\" alt=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer\">' : '<span>' + safe(title.slice(0,1).toUpperCase() || \"9\") + '</span>';\n" +
  "            const date = item.updatedAt ? new Date(item.updatedAt).toLocaleDateString(undefined,{year:\"numeric\",month:\"short\",day:\"numeric\"}) : \"Recently published\";\n" +
  "            return '<a class=\"home-script-card\" href=\"/scripts\"><div class=\"home-script-cover\">' + cover + '</div><h3>' + safe(title) + '</h3><p class=\"home-script-meta\">999MS &nbsp;\u00b7&nbsp; ' + safe(item.name) + '.lua &nbsp;\u00b7&nbsp; ' + safe(date) + '</p></a>';\n" +
  "          }).join(\"\");\n" +
  "          previewGrid.querySelectorAll(\"img\").forEach((img) => img.addEventListener(\"error\", () => { const cover = img.parentNode; img.remove(); const span = document.createElement(\"span\"); span.textContent = \"9\"; cover.appendChild(span); }));\n" +
  "        }).catch(() => { previewGrid.innerHTML = '<div class=\"home-script-empty\">The script library is temporarily unavailable. <a href=\"/scripts\" style=\"color:#fff\">Open ScriptHub \u2192</a></div>'; });\n" +
  "      }\n" +
  "\n" +
  "      fetch(\"/api/health\", { cache: \"no-store\" })\n" +
  "        .then((res) => {\n" +
  "          if (!res.ok) throw new Error(\"HTTP \" + res.status);\n" +
  "          return res.json();\n" +
  "        })\n" +
  "        .then((data) => {\n" +
  "          const ms = Date.now() - probeStart;\n" +
  "          if (liveText) liveText.textContent = \"LIVE \u00b7 \" + ms + \" MS \u00b7 v\" + (data.version || \"\");\n" +
  "        })\n" +
  "        .catch(() => {\n" +
  "          if (liveText) {\n" +
  "            liveText.textContent = \"OFFLINE \u2014 API NOT REACHABLE\";\n" +
  "            liveText.style.color = \"#ff6b81\";\n" +
  "            liveText.style.textShadow = \"0 0 10px rgba(255, 107, 129, 0.5)\";\n" +
  "          }\n" +
  "          if (liveDot) {\n" +
  "            liveDot.style.background = \"#ff6b81\";\n" +
  "            liveDot.style.boxShadow = \"0 0 10px #ff6b81\";\n" +
  "          }\n" +
  "        });\n" +
  "    })();\n" +
  "  </script>\n" +
  "</body>\n" +
  "</html>";
Object.assign(EMBEDDED_PAGES, { "/hub": HUB_PAGE });
// END PAGE /hub
function artifactDir() {
  return DEFAULT_ARTIFACT_DIR; // Fixed minimal layout; do not read old obf/artifacts folders.
}

function artifactMethod() {
  return null;
}

function isPreobfuscated(body) {
  return typeof body === 'string' && body.startsWith(OBF_MARKER);
}

function readArtifact(name) {
  if (name === 'sdk') return EMBEDDED_SDK;
  const filename = ARTIFACT_FILES[name];
  if (!filename) return null;
  return fs.readFileSync(path.join(APP_ROOT, artifactDir(), filename), 'utf8');
}

function renderLoaderArtifact() {
  // Stage 3 receives the per-run context as a positional local argument. Keep
  // the readable marker at byte zero; no environment normalizer is injected.
  return readArtifact('loader');
}

// ═══ Stage rendering ═══
// Bodies are deterministic for a host and a token, so a stage can pin the exact
// bytes of the next one. The next-stage link is minted while serving a stage
// and written straight into that stage's body.
const sha256 = (text) => crypto.createHash('sha256').update(text).digest('hex');

function renderStage(name, baseUrl, nextUrl, nextSha, nextNonce) {
  const raw = name === 'loader' ? renderLoaderArtifact() : readArtifact(name);
  if (typeof raw !== 'string') return null;
  let body = applyChainTokens(raw, baseUrl);
  if (typeof nextUrl === 'string' && nextUrl) body = body.replaceAll('@NEXT@', nextUrl);
  if (typeof nextSha === 'string' && nextSha) body = body.replaceAll('@NEXT_SHA@', nextSha);
  if (typeof nextNonce === 'string' && nextNonce) body = body.replaceAll('@NONCE@', nextNonce);
  return body;
}

// Raw templates, cached per host. Substitution happens per request because the
// next-stage link changes every time.
const rawBodyCache = new Map();
function stageTemplate(name, baseUrl) {
  const key = `${name}|${baseUrl}`;
  if (rawBodyCache.has(key)) return rawBodyCache.get(key);
  let body = null;
  if (name === 'sdk') {
    body = readArtifact('sdk');
  } else {
    body = renderStage(name, baseUrl);
  }
  if (typeof body === 'string') rawBodyCache.set(key, body);
  return body;
}

// Walks the chain from any token: the next link is derived from the current
// one, so every stage body (and its hash) can be produced up front.
function renderChain(baseUrl, token, depth = 0) {
  if (depth > 4) return null;
  const claim = chainLinks.resolveToken(token);
  if (!claim) return null;

  if (claim.stage === 'payload') {
    const body = renderStage('payload', baseUrl);
    return body ? { stage: 'payload', body, sha: sha256(body) } : null;
  }

  const next = chainLinks.deriveNext(token);
  if (!next) return null;
  const downstream = renderChain(baseUrl, next.token, depth + 1);
  if (!downstream) return null;

  const body = renderStage(
    claim.stage,
    baseUrl,
    `${baseUrl}/${next.token}`,
    downstream.sha,
    chainLinks.deriveNonce(next.token),
  );
  return body ? { stage: claim.stage, body, sha: sha256(body) } : null;
}

async function serveArtifact(req, res, name, url, origin) {
  const baseUrl = origin || publicBaseUrl();
  if (!baseUrl) return res.status(503).send('');

  // Source-mode Stage 1: substitute its readable header; do not auto-obfuscate.
  if (name === 'loadc') {
    const link = chainLinks.mintLink('loada', Date.now(), 0);
    if (!link) return res.status(503).send('');
    const run = renderChain(baseUrl, link.token);
    if (!run) return res.status(503).send('');
    const template = readArtifact('loadc');
    if (typeof template !== 'string') return res.status(503).send('');
    const stageErrorCodes = {
      '__ST_ERR_HASHER__': `0x${crypto.randomBytes(6).toString('hex')}`,
      '__ST_ERR_REQUEST__': `0x${crypto.randomBytes(6).toString('hex')}`,
      '__ST_ERR_PROOF__': `0x${crypto.randomBytes(6).toString('hex')}`,
      '__ST_ERR_FETCH__': `0x${crypto.randomBytes(6).toString('hex')}`,
      '__ST_ERR_DIGEST__': `0x${crypto.randomBytes(6).toString('hex')}`,
      '__ST_ERR_COMPILER__': `0x${crypto.randomBytes(6).toString('hex')}`,
      '__ST_ERR_COMPILE__': `0x${crypto.randomBytes(6).toString('hex')}`,
    };
    let rendered = template
      .replaceAll('__STAGE2_TOKEN__', link.token)
      .replaceAll('__Z__', run.sha)
      .replaceAll('__STAGE2_NONCE__', chainLinks.deriveNonce(link.token))
      .replaceAll('__BASE_URL__', baseUrl);
    for (const [marker, code] of Object.entries(stageErrorCodes)) {
      rendered = rendered.replaceAll(marker, code);
    }
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('x-999ms-obf', isPreobfuscated(template) ? 'prebuilt' : 'plain');
    if (process.env.CHAIN_DEBUG === '1') {
      res.setHeader('x-999ms-stage2', `${baseUrl}/${link.token}`);
    }
    return res.status(200).send(rendered);
  }

  // Stages 2-4: reached through a bare `https://host/<token>` link. The token
  // carries no file name; the stage is recovered from its signature.
  if (name === 'stage') {
    const token = req.query?.t || url.searchParams.get('t');
    const redeemed = req[STAGE_CLAIM];
    if (!redeemed || redeemed.token !== token) return rejectOrTrap(req, res);
    const pending = redeemed.claim;

    // Execution proof: the body of the previous stage carried a nonce, and only
    // a client that ran it can send back the matching hash. A plain GET (curl,
    // `game:HttpGet`, a browser) never has it.
    // The proof is over the full link the stage was given, not the bare token.
    const expected = chainLinks.fetchProof(chainLinks.deriveNonce(token), `${baseUrl}/${token}`);
    let supplied = '';
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      if (body && typeof body.p === 'string') supplied = body.p;
    } catch { supplied = ''; }
    const proofOk = Boolean(expected) &&
      supplied.length === expected.length &&
      crypto.timingSafeEqual(Buffer.from(supplied, 'utf8'), Buffer.from(expected, 'utf8'));
    if (!proofOk || req.method !== 'POST') {
      // Already spent when this POST arrived; a bad proof cannot be retried.
      noteEvent('crawl_reject', `stage ${pending.stage} fetched without proof (${req.method})`);
      return rejectOrTrap(req, res);
    }

    const run = renderChain(baseUrl, token);
    if (!run) return res.status(503).send('');
    const body = run.body;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).send(body);
  }

  if (name === 'sdk') {
    try {
      const body = stageTemplate('sdk', baseUrl);
      if (typeof body !== 'string') return res.status(503).send('');
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.setHeader('Cache-Control', 'no-store');
      return res.status(200).send(body);
    } catch (error) {
      console.error('[artifact]', error.message);
      return res.status(404).send('Not Found');
    }
  }

  return rejectOrTrap(req, res);
}

// ═══ /api/verify ═══// ═══ /api/verify ═══// ═══ /api/verify ═══
async function handleVerify(req, res, ip) {
  const xorKey = process.env.PAYLOAD_XOR_KEY || '';
  const body = req.body || {};
  const { key, userId, scriptName } = body;
  const hwid = body.c ?? body.hwid;
  // Pre-key runtime challenge: the client must prove its request context before
  // the provider is consulted. /api/script and /api/script-verify independently
  // retain the post-key challenge and runtime-proof gates.
  const clientChallenge = validateClientChallenge(body);

  const keyProvided = typeof key === 'string' && key.trim().length > 0;
  const normalizedKey = keyProvided ? key.trim() : '';

  const hwidCheck = hwidFromRequest(req, hwid);
  if (!hwidCheck.ok) {
    noteEvent('verify_reject', hwidCheck.reason + ' | key ' + hashHwid(key).slice(0, 12));
    const message = clientDeviceMessage(hwidCheck.reason);
    return res.status(403).json({ valid: false, error: message, message });
  }
  const clientHwid = hwidCheck.hwid;
  if (typeof scriptName !== 'string' || scriptName.length < 1 || scriptName.length > 64)
    return res.status(400).json({ valid: false, error: 'scriptName required' });
  if (!isValidScriptName(scriptName))
    return res.status(400).json({ valid: false, error: 'invalid scriptName format' });
  const boundHwid = formatBoundHwid(clientHwid, scriptName);
  const bindingId = deviceBindingId(clientHwid, scriptName);
  const hwidHash = hashBindingId(bindingId);
  const reason = checkRevoked({ hwid: clientHwid, boundHwid, hwidHash, userId, ip });
  if (reason) {
    noteEvent('ban_hit', 'verify | hwid ' + boundHwid.slice(0, 28));
    return res.status(403).json({ valid: false, message: 'Banned: ' + reason });
  }
  if (!clientChallenge.ok) {
    noteEvent('verify_reject', 'pre-key runtime challenge');
    return res.status(400).json({ valid: false, error: clientChallenge.reason });
  }

  if (keyProvided && isKeyRevoked(normalizedKey)) {
    noteEvent('verify_reject', 'revoked key | key ' + crypto.createHash('sha256').update(normalizedKey).digest('hex').slice(0, 12));
    return res.status(200).json({ valid: false, message: 'Invalid key' });
  }

  // Keyless access is opt-in per script. Missing metadata or database errors
  // fail closed and preserve the normal Platoboost requirement.
  if (keyProvided) {
    // Bind and check Platoboost strictly against "<hwid>_<scriptName>".
    const result = await verifyKey(normalizedKey, boundHwid);
    if (!result.valid) {
      const failure = {
        valid: false,
        message: result.message || 'Invalid key',
      };
      if (result.deviceMismatch === true) failure.deviceMismatch = true;
      return res.status(result.rateLimited ? 429 : 200).json(failure);
    }
  } else {
    const rows = await supabaseRows(
      '/rest/v1/scripts?select=key_required&script_name=eq.' + encodeURIComponent(scriptName) + '&limit=1');
    if (!Array.isArray(rows) || !rows.length || rows[0].key_required !== false) {
      return res.status(200).json({
        valid: false,
        keyRequired: true,
        message: 'This script requires a key',
      });
    }
  }

  const ticket = issueTicket({
    // Bind ticket & runtime proof to "<hwid>_<scriptName>".
    hwidHash,
    boundHwid,
    scope: 'script',
    userId: userId || null,
    scriptName,
  });
  const claims = verifyTicket(ticket);

  // Hand the client two things it has to work with before it may proceed:
  //  * hop    — a one-time id that /api/script must burn
  //  * A, B   — linear transforms of a secret integer; the answer is Equate(x)
  const equation = createEquationChallenge();
  const hop = issueHop(claims.jti, { answer: equation.answer, hwidHash: claims.hwidHash });

  const response = {
    valid: true,
    ticket,
    k: xorKey,
    hop,
    A: equation.a,
    B: equation.b,
  };
  if (clientChallenge.ok) response.check = createChallengeResponse(clientChallenge.values);
  return res.status(200).json(response);
}

// ═══ /api/script ═══
async function handleScript(req, res, ip) {
  const xorKey = process.env.PAYLOAD_XOR_KEY || '';
  const { ticket, Data, scriptName, hop, eq } = req.body || {};

  if (typeof ticket !== 'string' || ticket.length > 4096)
    return res.status(400).json({ Valid: false, reason: 'ticket required' });

  const payload = verifyTicket(ticket);
  if (!payload) return res.status(401).json({ Valid: false, reason: 'invalid ticket' });

  const name = (typeof scriptName === 'string' && scriptName.length > 0)
    ? scriptName
    : payload.scriptName;

  if (!name) return res.status(400).json({ Valid: false, reason: 'no scriptName' });
  if (name !== payload.scriptName)
    return res.status(403).json({ Valid: false, reason: 'scriptName mismatch' });

  const device = deviceMatches(req, payload.hwidHash, req.body?.c ?? req.body?.hwid, name);
  if (!device.ok)
    return res.status(403).json({ Valid: false, reason: clientDeviceMessage(device.reason) });

  // One-time hop from /api/verify: proves this request follows a real
  // verification instead of replaying a captured ticket.
  const hopEntry = consumeHop(hop, payload.jti);
  if (!hopEntry) {
    noteEvent('script_reject', 'missing or replayed hop');
    return res.status(409).json({ Valid: false, reason: 'hop required' });
  }
  if (!checkEquationAnswer({ answer: hopEntry.answer }, eq)) {
    noteEvent('script_reject', 'equation answer wrong');
    return res.status(409).json({ Valid: false, reason: 'equation rejected' });
  }
  if (payload.scope !== 'script')
    return res.status(403).json({ Valid: false, reason: 'scope' });

  const reason = checkRevoked({
    hwid: device.hwid,
    boundHwid: device.boundHwid,
    hwidHash: payload.hwidHash,
    userId: payload.userId,
    ip,
  });
  if (reason)
    return res.status(403).json({ Valid: false, reason: 'Banned: ' + reason });

  if (!isValidScriptName(name))
    return res.status(200).json(encodeProtectedPayload({ Valid: false, reason: 'Invalid script name' }, xorKey));

  let clientData = null;
  if (Data) {
    const decoded = decodeProtectedPayload({ Data }, xorKey);
    if (decoded.ok) clientData = decoded.data;
  }

  // This is a tamper signal only; server-issued tickets remain the
  // authorization boundary.
  const rngChallenge = validateClientChallenge(clientData);
  if (!rngChallenge.ok) {
    return res.status(200).json(encodeProtectedPayload({
      Valid: false, reason: 'RNG challenge rejected',
    }, xorKey));
  }

  // Keep the response fields compatible with the existing obfuscated stages,
  // while making the proof verifiable by any Vercel instance (no in-memory
  // affinity is required between /api/script and /api/script-verify).
  const { scriptToken, runtimeSecret } = deriveRuntimeCredentials({
    ticketPayload: payload,
    scriptName: name,
  });

  // Script bodies live in GitHub (scripts/<name>.lua), never in Supabase, so
  // large obfuscated scripts consume 0 Supabase storage and 0 Supabase egress.
  const rawScript = await loadStoredScript(name);
  if (typeof rawScript !== 'string') {
    return res.status(200).json(encodeProtectedPayload({ Valid: false, reason: 'Script not found: ' + name }, xorKey));
  }

  const issuedIso = new Date().toISOString();
  const baseOrigin = requestOrigin(req);
  const templated = renderScriptTemplate(rawScript, {
    jti: payload.jti,
    name: name,
    hwidHash: payload.hwidHash,
    issued: issuedIso,
    baseUrl: baseOrigin,
  });

  // Inline small scripts in one shot; stream large obfuscated scripts (>128 KB,
  // up to 25 MB) across XOR-masked 2 MB chunks via /api/script-raw so neither
  // Wire encoding nor serverless payload caps ever choke on multi-MB Lua files.
  const byteLen = Buffer.byteLength(templated, 'utf8');
  const scriptBody = byteLen <= SCRIPT_INLINE_MAX
    ? templated
    : buildChunkedScriptLoader({
        name: name,
        jti: payload.jti,
        hwidHash: payload.hwidHash,
        issued: issuedIso,
        baseUrl: baseOrigin,
        byteLen: byteLen,
      });

  const check = createChallengeResponse(rngChallenge.values);

  const nextHop = issueHop(payload.jti, { hwidHash: payload.hwidHash });

  return res.status(200).json(encodeProtectedPayload({
    Valid: true,
    check,
    hop: nextHop,
    Body: scriptBody,
    ServerId: payload.jti,
    ScriptId: name,
    ScriptToken: scriptToken,
    RuntimeSecret: runtimeSecret,
  }, xorKey));
}

// ═══ /api/script-verify ═══
// The on-screen client reference stays opaque. This server-side category is
// intentionally credential-free, so it can be safely correlated in Vercel logs
// without recording keys, tickets, HWIDs, tokens, or runtime secrets.
function diagnosticReference(category) {
  const text = `[999MS] ${category}`;
  let hash = 5381;
  for (let index = 0; index < text.length; index += 1) {
    hash = (hash * 33 + text.charCodeAt(index) + index + 1) % 2147483647;
  }
  return `MS9-${hash.toString(16).toUpperCase().padStart(8, '0')}`;
}

function rejectRuntimeVerification(res, status, category) {
  console.warn(`[script-verify] category=${category} reference=${diagnosticReference(category)}`);
  return res.status(status).json({ valid: false, diagnostic: category });
}

async function handleScriptVerify(req, res, ip) {
  const body = req.body || {};
  const { ticket, scriptToken, runtimeSecret, scriptName, hop, placeId, jobId, username, displayName, executor, userId } = body;
  const hwid = body.c ?? body.hwid;

  if (typeof ticket !== 'string' || ticket.length > 4096) {
    return rejectRuntimeVerification(res, 400, 'D2_TICKET_MISSING');
  }

  const payload = verifyTicket(ticket);
  if (!payload) return rejectRuntimeVerification(res, 401, 'D2_TICKET_INVALID');
  if (payload.scope !== 'script') return rejectRuntimeVerification(res, 403, 'D2_TICKET_SCOPE');

  // Resolve HWID before burning the next-step hop so an invalid device
  // request does not make a retried legitimate request look replayed.
  const targetScript = (typeof scriptName === 'string' && scriptName.length > 0)
    ? scriptName
    : payload.scriptName;
  const device = deviceMatches(req, payload.hwidHash, hwid, targetScript);
  if (!device.ok) {
    const category = BAD_DEVICE_REASONS.has(device.reason)
      ? BAD_HWID_CODE
      : device.reason === 'device mismatch' ? 'D2_DEVICE_BINDING_MISMATCH' : 'D2_DEVICE_INVALID';
    return rejectRuntimeVerification(res, 403, category);
  }
  const clientHwid = device.hwid;

  const banReason = checkRevoked({
    hwid: clientHwid,
    boundHwid: device.boundHwid,
    hwidHash: payload.hwidHash,
    userId: payload.userId,
  });
  if (banReason) return rejectRuntimeVerification(res, 403, 'D2_REVOKED');

  if (typeof runtimeSecret !== 'string' || runtimeSecret.length !== 64) {
    return rejectRuntimeVerification(res, 403, 'D2_SECRET_FORMAT');
  }
  if (!consumeHop(hop, payload.jti)) {
    noteEvent('runtime_reject', 'missing or replayed hop');
    return rejectRuntimeVerification(res, 409, 'D2_HOP_MISSING');
  }

  const proofFailure = verifyRuntimeProof({
    ticketPayload: payload,
    runtimeSecret,
    scriptToken,
    hwidHash: hashBindingId(device.bindingId),
    scriptName,
    runtimeTtl: RUNTIME_TTL,
  });
  if (proofFailure) {
    const categories = {
      'ticket claims invalid': 'D2_TICKET_CLAIMS',
      'scriptName changed': 'D2_SCRIPT_MISMATCH',
      'hwid mismatch': 'D2_HWID_MISMATCH',
      'token malformed': 'D2_TOKEN_FORMAT',
      'runtime expired': 'D2_RUNTIME_EXPIRED',
      'token mismatch': 'D2_TOKEN_MISMATCH',
      'secret mismatch': 'D2_SECRET_MISMATCH',
    };
    return rejectRuntimeVerification(res, 403, categories[proofFailure] || 'D2_PROOF_REJECTED');
  }

  // Count a single verified script launch without polling or keeping a
  // live client session. Identity fields are display-only; ticket + HWID proof
  // above remains the authorization boundary.
  trackRun(payload.jti, {
    hwidHash: payload.hwidHash,
    scriptName: targetScript,
    userId: payload.userId || userId || null,
    profile: { placeId, jobId, userId, name: username, displayName, executor },
    ip,
  });

  return res.status(200).json({ valid: true, serverId: payload.jti, diagnostic: 'D2_OK' });
}

// ═══════════════════════════════════════════════════════════════════════════
// Supabase analytics (optional)
//
// Run statistics are persisted to a Supabase project so they survive a restart
// and are shared by every instance. Every write is fire-and-forget: analytics
// can never fail runtime verification or a link, and with no SUPABASE_URL /
// SUPABASE_SERVICE_ROLE_KEY configured the whole module is a no-op.
// ═══════════════════════════════════════════════════════════════════════════
const SUPABASE_TIMEOUT_MS = 3500;

function supabaseConfig() {
  const url = String(process.env.SUPABASE_URL || '').trim().replace(/\/+$/, '');
  const key = String(process.env.SUPABASE_SERVICE_ROLE_KEY || '').trim();
  if (!/^https:\/\/[a-z0-9-]+\.supabase\.(co|in)$/i.test(url) || key.length < 24) return null;
  return { url: url, key: key };
}

async function supabaseFetch(pathname, init) {
  if (!supabaseConfig()) return null;
  const cfg = supabaseConfig();
  const controller = new AbortController();
  const timer = setTimeout(function () { controller.abort(); }, SUPABASE_TIMEOUT_MS);
  try {
    const options = Object.assign({}, init || {});
    const res = await fetch(cfg.url + pathname, Object.assign(options, {
      signal: controller.signal,
      headers: Object.assign({
        apikey: cfg.key,
        authorization: 'Bearer ' + cfg.key,
        'content-type': 'application/json',
      }, options.headers || {}),
    }));
    if (!res.ok) return null;
    const text = await res.text();
    if (!text) return null;
    return JSON.parse(text);
  } catch (err) {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

// Analytics is best-effort: nothing awaits these and nothing can throw.
function supabaseWrite(pathname, init) {
  if (!supabaseConfig()) return;
  void supabaseFetch(pathname, init).catch(function () {});
}

// A run is counted ONCE, keyed by HWID + jobId: the same machine already in the
// database with the same jobId is the same run (not counted again), while the
// same machine with a different jobId is a new run. The row is never updated
// afterwards: one INSERT per counted run, nothing else. The same guard exists in
// SQL (executions_run_key) so concurrent instances cannot double-count either.
const statsRecorded = new Map(); // jti -> "hwid|job" already written

function pruneStatsState() {
  if (statsRecorded.size < 4000) return;
  const keep = Array.from(statsRecorded.entries()).slice(-2000);
  statsRecorded.clear();
  keep.forEach(function (entry) { statsRecorded.set(entry[0], entry[1]); });
}

function sbText(value, max) {
  if (typeof value === 'number' && Number.isFinite(value)) value = String(value);
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max || 255);
}

// Called once after a successful runtime proof. Records one launch per HWID + jobId.
function trackRun(jti, session) {
  if (!jti || !session) return;
  const profile = (session.profile && typeof session.profile === 'object') ? session.profile : {};
  const jobId = sbText(profile.jobId, 128);
  if (!jobId) return; // wait until the client reports which server instance it is in

  const hwidHash = sbText(session.hwidHash, 128);
  if (!hwidHash) return; // the HWID is half of the counting key

  const placeId = sbText(profile.placeId, 64);
  const userId = sbText(session.userId, 64) || sbText(profile.userId, 64);
  const key = hwidHash + '|' + jobId;
  if (statsRecorded.get(jti) === key) return;
  statsRecorded.set(jti, key);
  pruneStatsState();

  supabaseWrite('/rest/v1/rpc/record_run', {
    method: 'POST',
    headers: { prefer: 'return=minimal' },
    body: JSON.stringify({
      p_session_id: String(jti),
      p_script_name: sbText(session.scriptName, 64),
      p_hwid_hash: sbText(session.hwidHash, 128),
      p_user_id: userId,
      p_username: sbText(profile.name, 64),
      p_display_name: sbText(profile.displayName, 64),
      p_executor: sbText(profile.executor, 64),
      p_place_id: placeId,
      p_job_id: jobId,
      p_ip: sbText(session.ip, 64),
    }),
  });
}

function trackLink(path, scriptName, hours) {
  if (!path) return;
  supabaseWrite('/rest/v1/rpc/record_link', {
    method: 'POST',
    headers: { prefer: 'return=minimal' },
    body: JSON.stringify({
      p_path: String(path),
      p_script_name: sbText(scriptName, 64),
      p_hours: Number.isFinite(hours) ? hours : null,
    }),
  });
}

// ═══ /api/games?ids=<placeId>[,<placeId>] — public Roblox metadata proxy ═══
const GAME_INFO_MAX_IDS = 20;
const GAME_INFO_TTL = 30 * 60 * 1000;
const gameInfoCache = new Map(); // placeId -> { placeId, name, icon, at }

async function robloxJson(target) {
  try {
    const res = await fetch(target, {
      signal: AbortSignal.timeout(6000),
      headers: { accept: 'application/json' },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    return null;
  }
}

async function handleGameInfo(req, res) {
  const raw = String((req.query && req.query.ids) || '');
  const ids = [];
  raw.split(',').forEach(function (value) {
    const id = String(value || '').trim();
    if (/^\d{1,20}$/.test(id) && ids.indexOf(id) === -1) ids.push(id);
  });
  if (!ids.length) return res.status(200).json({ ok: true, games: [] });

  const now = Date.now();
  const games = ids.map(function (id) {
    const cached = gameInfoCache.get(id);
    if (cached && now - cached.at < GAME_INFO_TTL) return cached;
    return { placeId: id, name: '', icon: '', at: 0 };
  });
  const pending = games.filter(function (g) { return !g.at; });
  const byPlace = new Map(games.map(function (g) { return [g.placeId, g]; }));

  if (pending.length) {
    // place id -> universe id
    const universes = await Promise.all(pending.map(function (g) {
      return robloxJson('https://apis.roblox.com/universes/v1/places/' + g.placeId + '/universe');
    }));
    const universeIds = [];
    pending.forEach(function (g, i) {
      const universeId = universes[i] && Number(universes[i].universeId);
      if (Number.isSafeInteger(universeId) && universeId > 0) {
        g.universeId = universeId;
        if (universeIds.indexOf(universeId) === -1) universeIds.push(universeId);
      }
    });

    // universe ids -> game names
    if (universeIds.length) {
      const detail = await robloxJson(
        'https://games.roblox.com/v1/games?universeIds=' + universeIds.join(','));
      const byUniverse = new Map();
      (detail && Array.isArray(detail.data) ? detail.data : []).forEach(function (row) {
        if (row && typeof row.name === 'string') byUniverse.set(Number(row.id), row.name);
      });
      pending.forEach(function (g) {
        if (g.universeId) g.name = byUniverse.get(g.universeId) || '';
      });
    }

    // place ids -> game icons
    const icons = await robloxJson(
      'https://thumbnails.roblox.com/v1/places/gameicons?placeIds=' +
      pending.map(function (g) { return g.placeId; }).join(',') +
      '&size=512x512&format=Png&isCircular=false');
    const byIcon = new Map();
    (icons && Array.isArray(icons.data) ? icons.data : []).forEach(function (row) {
      if (row && row.state === 'Completed' && typeof row.imageUrl === 'string') {
        byIcon.set(String(row.targetId), row.imageUrl);
      }
    });
    pending.forEach(function (g) { g.icon = byIcon.get(g.placeId) || ''; });

    pending.forEach(function (g) {
      g.at = Date.now();
      delete g.universeId;
      if (g.name || g.icon) gameInfoCache.set(g.placeId, g);
    });
  }

  return res.status(200).json({
    ok: true,
    games: games.map(function (g) {
      return { placeId: g.placeId, name: g.name || '', icon: g.icon || '' };
    }),
  });
}

// ═══ GitHub primary storage for uploaded scripts (0 Supabase body/egress) ═══
// Full .lua source files live ONLY in GitHub (scripts/<name>.lua on main),
// supporting obfuscated scripts up to 25 MB via the Git Data Blobs API.
// Supabase public.scripts holds only tiny map metadata (~100 B/row: place_id,
// script_name, size, timestamps) and is never read during player script loads.
const GITHUB_API = 'https://api.github.com';
const SCRIPT_BODY_MAX = 25 * 1024 * 1024;
const SCRIPT_INLINE_MAX = 128 * 1024;
const SCRIPT_CHUNK_BYTES = 2 * 1024 * 1024;
const SCRIPT_LIST_MAX = 200;
const SCRIPT_CACHE_TTL_MS = 120 * 1000;
const SCRIPT_CACHE_MAX_BYTES = 48 * 1024 * 1024;
const MAX_JSON_BODY_BYTES = Math.floor(4.4 * 1024 * 1024);

const scriptsBodyCache = new Map();
let scriptsBodyCacheBytes = 0;

function cacheScriptBody(name, code) {
  if (!name || typeof code !== 'string') return;
  const prev = scriptsBodyCache.get(name);
  if (prev) {
    scriptsBodyCacheBytes -= prev.bytes;
    scriptsBodyCache.delete(name);
  }
  const bytes = Buffer.byteLength(code, 'utf8');
  if (bytes > SCRIPT_CACHE_MAX_BYTES) return;
  while (scriptsBodyCache.size > 0 && scriptsBodyCacheBytes + bytes > SCRIPT_CACHE_MAX_BYTES) {
    const oldestKey = scriptsBodyCache.keys().next().value;
    const oldest = scriptsBodyCache.get(oldestKey);
    scriptsBodyCache.delete(oldestKey);
    if (oldest) scriptsBodyCacheBytes -= oldest.bytes;
  }
  scriptsBodyCache.set(name, { at: Date.now(), body: code, bytes: bytes });
  scriptsBodyCacheBytes += bytes;
}

function dropCachedScriptBody(name) {
  const prev = scriptsBodyCache.get(name);
  if (prev) {
    scriptsBodyCacheBytes -= prev.bytes;
    scriptsBodyCache.delete(name);
  }
}

function githubRepoParts() {
  const repo = String(process.env.GITHUB_REPO || 'rickhub940-ai/load').trim();
  const branch = String(process.env.GITHUB_BRANCH || 'main').trim() || 'main';
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo)) return null;
  return { repo: repo, branch: branch };
}

function githubConfig() {
  const token = String(process.env.GITHUB_TOKEN || '').trim();
  const parts = githubRepoParts();
  if (!token || !parts) return null;
  return { token: token, repo: parts.repo, branch: parts.branch };
}

async function githubRequest(pathname, init, timeoutMs) {
  const cfg = githubConfig();
  if (!cfg) return { ok: false, status: 0, data: null, reason: 'github not configured' };
  try {
    const options = Object.assign({}, init || {});
    const res = await fetch(GITHUB_API + pathname, Object.assign(options, {
      signal: AbortSignal.timeout(timeoutMs || 20000),
      headers: Object.assign({
        authorization: 'Bearer ' + cfg.token,
        accept: 'application/vnd.github+json',
        'x-github-api-version': '2022-11-28',
        'user-agent': '999ms-loader',
      }, options.headers || {}),
    }));
    const text = await res.text();
    let data = null;
    if (text) { try { data = JSON.parse(text); } catch { data = null; } }
    return { ok: res.ok, status: res.status, data: data, text: text };
  } catch (err) {
    return { ok: false, status: 0, data: null, reason: 'github request failed' };
  }
}

function scriptHeader(name, placeId) {
  return '-- 999MS script: ' + name + '\n' +
         '-- place: ' + placeId + '\n' +
         '-- uploaded from the Control panel at ' + new Date().toISOString() + '\n\n';
}

async function triggerVercelDeployHook() {
  const hook = String(process.env.VERCEL_DEPLOY_HOOK || '').trim();
  if (!hook || !/^https:\/\/api\.vercel\.com\/v1\/integrations\/deploy\//.test(hook)) {
    return { triggered: false };
  }
  try {
    const res = await fetch(hook, { method: 'POST', signal: AbortSignal.timeout(10000) });
    return { triggered: res.ok, status: res.status };
  } catch {
    return { triggered: false, reason: 'hook failed' };
  }
}

function stripScriptHeader(code) {
  if (typeof code !== 'string') return '';
  return code.replace(/^(?:-- 999MS script: [^\r\n]*\r?\n-- place: [^\r\n]*\r?\n-- uploaded from the Control panel at [^\r\n]*\r?\n\r?\n)+/, '');
}

// Commits scripts/<name>.lua via Git Data API (blobs -> trees -> commits -> ref)
// so large obfuscated scripts (>1 MB up to 25 MB) never hit the 1 MB Contents cap.
async function commitScriptToGithub(name, placeId, code, removeOldName) {
  const cfg = githubConfig();
  if (!cfg) {
    return {
      ok: false,
      reason: 'ยังไม่ได้ตั้ง GITHUB_TOKEN ใน Vercel — ตั้งค่า GITHUB_TOKEN เพื่อเก็บไฟล์สคริปต์บน GitHub',
    };
  }
  const cleanCode = stripScriptHeader(code);
  const fullContent = scriptHeader(name, placeId) + cleanCode;
  const repoPath = 'scripts/' + name + '.lua';
  const refPath = '/repos/' + cfg.repo + '/git/ref/heads/' + encodeURIComponent(cfg.branch);

  const refRes = await githubRequest(refPath, { method: 'GET' });
  const headSha = refRes.ok && refRes.data && refRes.data.object && refRes.data.object.sha;
  if (!headSha) {
    return { ok: false, reason: (refRes.data && refRes.data.message) || ('github ref ' + refRes.status) };
  }

  const commitRes = await githubRequest('/repos/' + cfg.repo + '/git/commits/' + headSha, { method: 'GET' });
  const baseTree = commitRes.ok && commitRes.data && commitRes.data.tree && commitRes.data.tree.sha;
  if (!baseTree) {
    return { ok: false, reason: (commitRes.data && commitRes.data.message) || ('github commit ' + commitRes.status) };
  }

  const blobRes = await githubRequest('/repos/' + cfg.repo + '/git/blobs', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      content: Buffer.from(fullContent, 'utf8').toString('base64'),
      encoding: 'base64',
    }),
  }, 45000);
  const blobSha = blobRes.ok && blobRes.data && blobRes.data.sha;
  if (!blobSha) {
    return { ok: false, reason: (blobRes.data && blobRes.data.message) || ('github blob ' + blobRes.status) };
  }

  const treeEntries = [{ path: repoPath, mode: '100644', type: 'blob', sha: blobSha }];
  if (removeOldName && isValidScriptName(removeOldName) && removeOldName !== name) {
    treeEntries.push({ path: 'scripts/' + removeOldName + '.lua', mode: '100644', type: 'blob', sha: null });
  }

  const treeRes = await githubRequest('/repos/' + cfg.repo + '/git/trees', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      base_tree: baseTree,
      tree: treeEntries,
    }),
  });
  const newTreeSha = treeRes.ok && treeRes.data && treeRes.data.sha;
  if (!newTreeSha) {
    return { ok: false, reason: (treeRes.data && treeRes.data.message) || ('github tree ' + treeRes.status) };
  }

  // If the tree SHA is identical, the exact same file bytes are already on head.
  let commitSha = headSha;
  if (newTreeSha !== baseTree) {
    const msg = (removeOldName && removeOldName !== name)
      ? 'script: rename ' + removeOldName + ' -> ' + name + ' (place ' + placeId + ')'
      : 'script: ' + name + ' (place ' + placeId + ')';
    const newCommit = await githubRequest('/repos/' + cfg.repo + '/git/commits', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        message: msg,
        tree: newTreeSha,
        parents: [headSha],
      }),
    });
    commitSha = newCommit.ok && newCommit.data && newCommit.data.sha;
    if (!commitSha) {
      return { ok: false, reason: (newCommit.data && newCommit.data.message) || ('github commit ' + newCommit.status) };
    }
    const upd = await githubRequest('/repos/' + cfg.repo + '/git/refs/heads/' + encodeURIComponent(cfg.branch), {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ sha: commitSha }),
    });
    if (!upd.ok) {
      return { ok: false, reason: (upd.data && upd.data.message) || ('github ref update ' + upd.status) };
    }
  }

  if (removeOldName && removeOldName !== name) dropCachedScriptBody(removeOldName);
  cacheScriptBody(name, fullContent);
  const deploy = await triggerVercelDeployHook();
  return {
    ok: true,
    path: repoPath,
    branch: cfg.branch,
    commit: commitSha,
    updated: newTreeSha !== baseTree,
    deploy: deploy,
  };
}

async function deleteScriptFromGithub(name) {
  dropCachedScriptBody(name);
  const cfg = githubConfig();
  if (!cfg) return { ok: false, reason: 'github not configured' };
  const repoPath = 'scripts/' + name + '.lua';
  const refRes = await githubRequest('/repos/' + cfg.repo + '/git/ref/heads/' + encodeURIComponent(cfg.branch), { method: 'GET' });
  const headSha = refRes.ok && refRes.data && refRes.data.object && refRes.data.object.sha;
  if (!headSha) return { ok: false, reason: 'github ref ' + refRes.status };

  const commitRes = await githubRequest('/repos/' + cfg.repo + '/git/commits/' + headSha, { method: 'GET' });
  const baseTree = commitRes.ok && commitRes.data && commitRes.data.tree && commitRes.data.tree.sha;
  if (!baseTree) return { ok: false, reason: 'github commit ' + commitRes.status };

  const treeRes = await githubRequest('/repos/' + cfg.repo + '/git/trees', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      base_tree: baseTree,
      tree: [{ path: repoPath, mode: '100644', type: 'blob', sha: null }],
    }),
  });
  if (!treeRes.ok || !treeRes.data || !treeRes.data.sha || treeRes.data.sha === baseTree) {
    return { ok: false, reason: 'not on github' };
  }
  const newCommit = await githubRequest('/repos/' + cfg.repo + '/git/commits', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      message: 'script: remove ' + name,
      tree: treeRes.data.sha,
      parents: [headSha],
    }),
  });
  if (!newCommit.ok || !newCommit.data || !newCommit.data.sha) {
    return { ok: false, reason: 'github commit ' + newCommit.status };
  }
  const upd = await githubRequest('/repos/' + cfg.repo + '/git/refs/heads/' + encodeURIComponent(cfg.branch), {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ sha: newCommit.data.sha }),
  });
  if (!upd.ok) return { ok: false, reason: 'github ref ' + upd.status };
  const deploy = await triggerVercelDeployHook();
  return { ok: true, path: repoPath, deploy: deploy };
}

async function fetchScriptFromGithub(name) {
  const cfg = githubConfig();
  if (cfg) {
    try {
      const res = await fetch(
        GITHUB_API + '/repos/' + cfg.repo + '/contents/scripts/' + encodeURIComponent(name) + '.lua?ref=' + encodeURIComponent(cfg.branch),
        {
          method: 'GET',
          signal: AbortSignal.timeout(30000),
          headers: {
            authorization: 'Bearer ' + cfg.token,
            accept: 'application/vnd.github.raw+json',
            'x-github-api-version': '2022-11-28',
            'user-agent': '999ms-loader',
          },
        }
      );
      if (res.ok) return await res.text();
    } catch { /* fall through */ }
  }
  const parts = githubRepoParts();
  if (parts) {
    try {
      const rawUrl = 'https://raw.githubusercontent.com/' + parts.repo + '/' + encodeURIComponent(parts.branch) + '/scripts/' + encodeURIComponent(name) + '.lua';
      const res = await fetch(rawUrl, {
        method: 'GET',
        signal: AbortSignal.timeout(25000),
        headers: { 'user-agent': '999ms-loader', 'cache-control': 'no-cache' },
      });
      if (res.ok) return await res.text();
    } catch { /* fall through */ }
  }
  return null;
}

// ═══ /api/control/scripts (admin) — upload/list/delete map scripts ═══
// Metadata only in Supabase (~100 bytes/map); script source lives on GitHub.
function cleanPlaceId(value) {
  const id = String(value == null ? '' : value).trim();
  return /^\d{1,20}$/.test(id) ? id : '';
}

function decodeUploadedScriptBody(body) {
  if (body && typeof body.bodyGzip === 'string' && body.bodyGzip.length > 0) {
    try {
      const compressed = Buffer.from(body.bodyGzip, 'base64');
      const unzipped = zlib.gunzipSync(compressed, { maxOutputLength: SCRIPT_BODY_MAX });
      return { ok: true, code: unzipped.toString('utf8') };
    } catch (err) {
      if (err && /maxOutputLength|ERR_BUFFER_TOO_LARGE/i.test(String(err.code || err.message))) {
        return { ok: false, status: 413, reason: 'ไฟล์สคริปต์ใหญ่เกิน 25 MB' };
      }
      return { ok: false, status: 400, reason: 'คลายบีบอัดไฟล์ไม่สำเร็จ' };
    }
  }
  const code = typeof (body && body.body) === 'string' ? body.body : '';
  if (Buffer.byteLength(code, 'utf8') > SCRIPT_BODY_MAX) {
    return { ok: false, status: 413, reason: 'ไฟล์สคริปต์ใหญ่เกิน 25 MB' };
  }
  return { ok: true, code: code };
}

async function supabaseRows(pathname) {
  if (!supabaseConfig()) return null;
  const rows = await supabaseFetch(pathname, { method: 'GET' });
  return Array.isArray(rows) ? rows : null;
}

// The warm lambda keeps the list for a minute so the public catalog appears
// without waiting for a cross-region round trip on every page load.
let scriptsListCache = { at: 0, items: [], scope: 'memory' };

async function handleScriptsList(req, res) {
  const now = Date.now();
  if (scriptsListCache.items && now - scriptsListCache.at < 60000) {
    return res.status(200).json({
      ok: true,
      items: scriptsListCache.items,
      scope: scriptsListCache.scope,
      cached: true,
    });
  }
  const rows = await supabaseRows(
    '/rest/v1/scripts?select=place_id,script_name,size,updated_at&order=updated_at.desc&limit=' + SCRIPT_LIST_MAX);
  const items = (rows || []).map(function (row) {
    return {
      placeId: String(row.place_id || ''),
      name: String(row.script_name || ''),
      size: Number(row.size) || 0,
      updatedAt: row.updated_at || null,
    };
  }).filter(function (item) { return item.placeId && item.name; });
  scriptsListCache = { at: now, items: items, scope: rows ? 'supabase' : 'memory' };
  return res.status(200).json({
    ok: true,
    items: items,
    scope: scriptsListCache.scope,
  });
}

async function handleControlScripts(req, res) {
  const body = req.body || {};
  const op = String(body.op || 'list');

  if (op === 'get') {
    const name = sbText(body.name, 64);
    if (!name || !isValidScriptName(name)) {
      return res.status(400).json({ ok: false, reason: 'ชื่อสคริปต์ไม่ถูกต้อง' });
    }
    const raw = await loadStoredScript(name);
    if (typeof raw !== 'string') {
      return res.status(404).json({ ok: false, reason: 'ไม่พบไฟล์สคริปต์ ' + name + ' บน GitHub' });
    }
    const clean = stripScriptHeader(raw);
    const size = Buffer.byteLength(clean, 'utf8');
    if (size > 512 * 1024) {
      return res.status(200).json({
        ok: true,
        name: name,
        size: size,
        bodyGzip: zlib.gzipSync(Buffer.from(clean, 'utf8')).toString('base64'),
      });
    }
    return res.status(200).json({ ok: true, name: name, size: size, body: clean });
  }

  if (!supabaseConfig()) {
    return res.status(503).json({
      ok: false,
      reason: 'supabase not configured',
      note: 'ต้องตั้ง SUPABASE_URL และ SUPABASE_SERVICE_ROLE_KEY ก่อนจึงจะจัดการรายการแมพได้',
    });
  }

  if (op === 'list') {
    const rows = await supabaseRows(
      '/rest/v1/scripts?select=place_id,script_name,size,key_required,created_at,updated_at&order=updated_at.desc&limit=' + SCRIPT_LIST_MAX);
    if (!rows) return res.status(502).json({ ok: false, reason: 'read failed' });
    return res.status(200).json({
      ok: true,
      items: rows.map(function (row) {
        return {
          placeId: String(row.place_id || ''),
          name: String(row.script_name || ''),
          size: Number(row.size) || 0,
          keyRequired: row.key_required !== false,
          createdAt: row.created_at || null,
          updatedAt: row.updated_at || null,
        };
      }),
    });
  }

  if (op === 'save') {
    const placeId = cleanPlaceId(body.placeId);
    const name = sbText(body.name, 64);
    const prevPlaceId = cleanPlaceId(body.prevPlaceId);
    const prevName = sbText(body.prevName, 64);
    if (!placeId) return res.status(400).json({ ok: false, reason: 'place id ไม่ถูกต้อง' });
    if (!name || !isValidScriptName(name)) return res.status(400).json({ ok: false, reason: 'ชื่อสคริปต์ไม่ถูกต้อง (a-z 0-9 - _)' });

    const decoded = decodeUploadedScriptBody(body);
    if (!decoded.ok) return res.status(decoded.status).json({ ok: false, reason: decoded.reason });
    const code = stripScriptHeader(decoded.code);
    if (!code.trim()) return res.status(400).json({ ok: false, reason: 'ไม่มีโค้ดสคริปต์' });

    let removeOldName = null;
    if (prevName && isValidScriptName(prevName) && prevName !== name) {
      const others = await supabaseRows(
        '/rest/v1/scripts?select=place_id&script_name=eq.' + encodeURIComponent(prevName) +
        (prevPlaceId ? '&place_id=neq.' + encodeURIComponent(prevPlaceId) : '') + '&limit=1');
      if (!others || others.length === 0) removeOldName = prevName;
    }

    const byteSize = Buffer.byteLength(code, 'utf8');
    // Commit full .lua file to GitHub FIRST; Supabase stores metadata ONLY (0 script bytes).
    const github = await commitScriptToGithub(name, placeId, code, removeOldName);
    if (!github.ok) {
      return res.status(502).json({
        ok: false,
        reason: github.reason || 'อัปโหลดขึ้น GitHub ไม่สำเร็จ',
        github: github,
      });
    }

    const saved = await supabaseFetch(
      '/rest/v1/scripts?on_conflict=place_id,script_name', {
        method: 'POST',
        headers: { prefer: 'resolution=merge-duplicates,return=representation' },
        body: JSON.stringify({
          place_id: placeId,
          script_name: name,
          size: byteSize,
          key_required: body.keyRequired !== false,
          updated_at: new Date().toISOString(),
        }),
      });
    if (saved === null) return res.status(502).json({ ok: false, reason: 'Supabase metadata save failed' });
    // A script body is globally keyed by script name in GitHub, so keep its
    // access mode consistent across any map rows that reference that file.
    const modeSaved = await supabaseFetch(
      '/rest/v1/scripts?script_name=eq.' + encodeURIComponent(name), {
        method: 'PATCH',
        headers: { prefer: 'return=representation' },
        body: JSON.stringify({ key_required: body.keyRequired !== false }),
      });
    if (modeSaved === null) return res.status(502).json({ ok: false, reason: 'Supabase key mode save failed' });

    if (prevPlaceId && prevName && (prevPlaceId !== placeId || prevName !== name)) {
      await supabaseFetch(
        '/rest/v1/scripts?place_id=eq.' + encodeURIComponent(prevPlaceId) +
        '&script_name=eq.' + encodeURIComponent(prevName), {
          method: 'DELETE',
          headers: { prefer: 'return=minimal' },
        });
    }

    scriptsListCache = { at: 0, items: [], scope: 'memory' };
    noteEvent('script_save', 'saved ' + name + ' (' + byteSize + 'B on GitHub) for place ' + placeId);
    return res.status(200).json({
      ok: true,
      placeId: placeId,
      name: name,
      size: byteSize,
      github: github,
    });
  }

  if (op === 'delete') {
    const placeId = cleanPlaceId(body.placeId);
    const name = sbText(body.name, 64);
    if (!placeId || !name) return res.status(400).json({ ok: false, reason: 'ระบุ place id และชื่อสคริปต์' });
    const done = await supabaseFetch(
      '/rest/v1/scripts?place_id=eq.' + encodeURIComponent(placeId) +
      '&script_name=eq.' + encodeURIComponent(name), {
        method: 'DELETE',
        headers: { prefer: 'return=minimal' },
      });
    if (done === null && !supabaseConfig()) return res.status(502).json({ ok: false, reason: 'delete failed' });
    scriptsListCache = { at: 0, items: [], scope: 'memory' };
    noteEvent('script_delete', 'deleted ' + name + ' for place ' + placeId);
    const githubDelete = await deleteScriptFromGithub(name);
    return res.status(200).json({ ok: true, github: githubDelete });
  }

  return res.status(400).json({ ok: false, reason: 'unknown op' });
}

function renderScriptTemplate(scriptBody, meta) {
  return scriptBody
    .replace(/\$\{SERVERID\}/g, meta.jti)
    .replace(/\$\{SCRIPTID\}/g, meta.name)
    .replace(/\$\{HWIDHASH\}/g, meta.hwidHash)
    .replace(/\$\{ISSUED\}/g, meta.issued)
    .replaceAll('@BASE_URL@', meta.baseUrl);
}

// Loads script source with 0 Supabase queries / 0 Supabase egress:
//   1. Warm Lambda memory cache (120s TTL)
//   2. GitHub raw content (scripts/<name>.lua on main, supports up to 100 MB)
//   3. Bundled scripts/<name>.lua on the deployed filesystem
async function loadStoredScript(name) {
  if (!isValidScriptName(name)) return null;
  const now = Date.now();
  const cached = scriptsBodyCache.get(name);
  if (cached && now - cached.at < SCRIPT_CACHE_TTL_MS) {
    return cached.body;
  }
  const fromGithub = await fetchScriptFromGithub(name);
  if (typeof fromGithub === 'string' && fromGithub.length > 0) {
    cacheScriptBody(name, fromGithub);
    return fromGithub;
  }
  try {
    const localBody = fs.readFileSync(path.join(APP_ROOT, 'scripts', name + '.lua'), 'utf8');
    if (typeof localBody === 'string') {
      cacheScriptBody(name, localBody);
      return localBody;
    }
  } catch { /* not bundled locally */ }
  return null;
}

function scriptRawSigningSecret() {
  const secret = process.env.RUNTIME_CREDENTIAL_SECRET || process.env.TICKET_SECRET;
  if (typeof secret !== 'string' || secret.length < 32) {
    throw new Error('RUNTIME_CREDENTIAL_SECRET or TICKET_SECRET must be >=32 chars');
  }
  return secret;
}

function signScriptRawToken(meta, chunkCount) {
  const secret = scriptRawSigningSecret();
  const bodyB64 = Buffer.from(JSON.stringify({
    n: meta.name,
    j: meta.jti,
    h: meta.hwidHash,
    i: meta.issued,
    u: meta.baseUrl,
    c: chunkCount,
    x: Date.now() + 120 * 1000,
  }), 'utf8').toString('base64url');
  const sig = crypto.createHmac('sha256', secret).update('999MS-sraw-v1|' + bodyB64).digest('base64url');
  const xorMask = crypto.createHmac('sha256', secret).update('999MS-sraw-key|' + bodyB64).digest('hex');
  return { token: bodyB64 + '.' + sig, xorHex: xorMask };
}

function verifyScriptRawToken(token) {
  if (typeof token !== 'string' || token.length < 24 || token.length > 2048) return null;
  const dot = token.indexOf('.');
  if (dot <= 0) return null;
  const bodyB64 = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const secret = scriptRawSigningSecret();
  const expected = crypto.createHmac('sha256', secret).update('999MS-sraw-v1|' + bodyB64).digest('base64url');
  if (expected.length !== sig.length || !crypto.timingSafeEqual(Buffer.from(expected, 'utf8'), Buffer.from(sig, 'utf8'))) {
    return null;
  }
  let parsed = null;
  try { parsed = JSON.parse(Buffer.from(bodyB64, 'base64url').toString('utf8')); } catch { return null; }
  if (!parsed || typeof parsed !== 'object') return null;
  if (!parsed.x || Date.now() > Number(parsed.x)) return null;
  if (!isValidScriptName(parsed.n)) return null;
  const keyBuf = Buffer.from(
    crypto.createHmac('sha256', secret).update('999MS-sraw-key|' + bodyB64).digest('hex'),
    'hex'
  );
  return { meta: parsed, keyBuf: keyBuf };
}

function buildChunkedScriptLoader(meta) {
  const chunkCount = Math.max(1, Math.ceil(meta.byteLen / SCRIPT_CHUNK_BYTES));
  const signed = signScriptRawToken(meta, chunkCount);
  const endpoint = meta.baseUrl + '/api/script-raw';
  return [
    'local _A={...}',
    'local _R=_A[9]',
    'if type(_R)~="function" then return false end',
    'local _K=(function(x)local t={}for i=1,#x,2 do t[#t+1]=tonumber(x:sub(i,i+1),16)end return t end)(' + JSON.stringify(signed.xorHex) + ')',
    'local _B="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"',
    'local _D={} for i=1,#_B do _D[_B:byte(i)]=i-1 end',
    'local _X=bit32 and bit32.bxor',
    'if not _X then',
    '  local _N={} for a=0,15 do for b=0,15 do local r,p,x,y=0,1,a,b for _=1,4 do local u,v=x%2,y%2 if u~=v then r=r+p end x=(x-u)/2 y=(y-v)/2 p=p*2 end _N[a*16+b]=r end end',
    '  local _T={} for a=0,255 do local ah,al=math.floor(a/16),a%16 for b=0,255 do _T[a*256+b]=_N[ah*16+math.floor(b/16)]*16+_N[al*16+b%16] end end',
    '  _X=function(a,b) return _T[a*256+b] end',
    'end',
    'local function _U(s,o)',
    '  local sbyte,schar,floor=string.byte,string.char,math.floor',
    '  local out,n,kl={},0,#_K',
    '  local buf,bl={},0',
    '  for i=1,#s,4 do',
    '    local r1,r2,r3,r4=sbyte(s,i,i+3)',
    '    local c1,c2,c3,c4=r1 and _D[r1],r2 and _D[r2],r3 and _D[r3],r4 and _D[r4]',
    '    if not c1 or not c2 then break end',
    '    local v=c1*262144+c2*4096+(c3 or 0)*64+(c4 or 0)',
    '    bl=bl+1 buf[bl]=_X(floor(v/65536)%256,_K[(o+n)%kl+1]) n=n+1',
    '    if c3 then bl=bl+1 buf[bl]=_X(floor(v/256)%256,_K[(o+n)%kl+1]) n=n+1 end',
    '    if c4 then bl=bl+1 buf[bl]=_X(v%256,_K[(o+n)%kl+1]) n=n+1 end',
    '    if bl>=3072 then out[#out+1]=schar(unpack(buf,1,bl)) bl=0 end',
    '  end',
    '  if bl>0 then out[#out+1]=schar(unpack(buf,1,bl)) end',
    '  return table.concat(out),n',
    'end',
    'local _P,_O={},0',
    'for idx=0,' + (chunkCount - 1) + ' do',
    '  local ok,res=pcall(_R,{Url=' + JSON.stringify(endpoint) + ',Method="POST",Headers={["Content-Type"]="application/json"},Body=\'{"t":' + JSON.stringify(signed.token) + ',"i":\'..tostring(idx)..\'}\'})',
    '  local st=type(res)=="table" and tonumber(res.StatusCode or res.Status) or 0',
    '  if not ok or st~=200 or type(res.Body)~="string" then return false end',
    '  local part,got=_U(res.Body,_O)',
    '  _P[#_P+1]=part _O=_O+got',
    'end',
    'local _F,err=(loadstring or load)(table.concat(_P))',
    '_P=nil',
    'if type(_F)~="function" then return false end',
    'return _F(unpack(_A,1,11))',
  ].join('\n');
}

async function handleScriptRaw(req, res) {
  const body = req.body || {};
  const verified = verifyScriptRawToken(body.t);
  if (!verified) return rejectOrTrap(req, res, 403);
  const idx = Number(body.i);
  const meta = verified.meta;
  if (!Number.isInteger(idx) || idx < 0 || idx >= Number(meta.c || 0)) {
    return res.status(400).send('');
  }
  const rawScript = await loadStoredScript(meta.n);
  if (typeof rawScript !== 'string') return res.status(404).send('');
  const fullBuf = Buffer.from(renderScriptTemplate(rawScript, {
    jti: meta.j,
    name: meta.n,
    hwidHash: meta.h,
    issued: meta.i,
    baseUrl: meta.u,
  }), 'utf8');
  const start = idx * SCRIPT_CHUNK_BYTES;
  if (start >= fullBuf.length && fullBuf.length > 0) return res.status(416).send('');
  const slice = fullBuf.subarray(start, Math.min(fullBuf.length, start + SCRIPT_CHUNK_BYTES));
  const masked = Buffer.allocUnsafe(slice.length);
  const keyBuf = verified.keyBuf;
  const klen = keyBuf.length;
  for (let i = 0; i < slice.length; i += 1) {
    masked[i] = slice[i] ^ keyBuf[(start + i) % klen];
  }
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'text/plain; charset=ascii');
  return res.status(200).send(masked.toString('base64'));
}

async function handleControlStats(req, res) {
  if (!supabaseConfig()) {
    return res.status(503).json({
      ok: false,
      reason: 'ยังไม่ได้ตั้งค่า SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY',
    });
  }
  const results = await Promise.all([
    supabaseFetch('/rest/v1/v_exec_totals?select=*'),
    supabaseFetch('/rest/v1/v_exec_monthly?select=*'),
    supabaseFetch('/rest/v1/v_recent_runs?select=*'),
    supabaseFetch('/rest/v1/v_exec_daily?select=*'),
    supabaseFetch('/rest/v1/v_exec_hourly?select=*'),
  ]);
  const totals = results[0];
  if (!Array.isArray(totals)) {
    return res.status(502).json({ ok: false, reason: 'อ่านสถิติจาก Supabase ไม่สำเร็จ' });
  }
  return res.status(200).json({
    ok: true,
    totals: totals[0] || {},
    monthly: Array.isArray(results[1]) ? results[1] : [],
    recent: Array.isArray(results[2]) ? results[2] : [],
    daily: Array.isArray(results[3]) ? results[3] : [],
    hourly: Array.isArray(results[4]) ? results[4] : [],
    scope: 'supabase',
    note: 'นับการรัน 1 ครั้งต่อ HWID + job ลง Supabase — ข้อมูลอยู่ข้าม instance และไม่หายเมื่อรีสตาร์ท',
  });
}

function verifiedScriptContext(ticket, req, hwid, scriptName, ip) {
  if (typeof ticket !== 'string' || ticket.length > 4096) return { error: 'ticket required', status: 400 };
  const device = hwidFromRequest(req, hwid);
  if (!device.ok) return { error: clientDeviceMessage(device.reason), status: 403 };
  const payload = verifyTicket(ticket);
  if (!payload || payload.scope !== 'script') return { error: 'invalid ticket', status: 401 };
  const name = typeof scriptName === 'string' && scriptName.length ? scriptName : payload.scriptName;
  if (!isValidScriptName(name) || name !== payload.scriptName) return { error: 'scriptName mismatch', status: 403 };
  const expectedBindingId = deviceBindingId(device.hwid, name);
  const boundHwid = formatBoundHwid(device.hwid, name);
  if (!timingSafeStringEquals(payload.hwidHash, hashBindingId(expectedBindingId))) {
    return { error: 'device mismatch', status: 403 };
  }
  const reason = checkRevoked({
    hwid: device.hwid,
    boundHwid,
    hwidHash: payload.hwidHash,
    userId: payload.userId,
    ip,
  });
  if (reason) return { error: 'Banned: ' + reason, status: 403 };
  return { payload, name, boundHwid, hwidHash: hashBindingId(expectedBindingId) };
}

async function handleStart(req, res, ip) {
  const body = req.body || {};
  const hwid = body.c ?? body.hwid;
  const requestedScript = typeof body.scriptName === 'string' ? body.scriptName.trim() : '';
  const targetScript = requestedScript && isValidScriptName(requestedScript) ? requestedScript : 'main';
  const device = hwidFromRequest(req, hwid);
  if (!device.ok) return res.status(403).json({ error: clientDeviceMessage(device.reason) });

  const boundHwid = formatBoundHwid(device.hwid, targetScript);
  const hwidHash = hashBindingId(deviceBindingId(device.hwid, targetScript));
  const reason = checkRevoked({ hwid: device.hwid, boundHwid, hwidHash, ip });
  if (reason)
    return res.status(403).json({ error: 'Banned: ' + reason });

  try {
    const result = await createLink(boundHwid);
    return res.status(result.rateLimited ? 429 : 200).json(result);
  } catch (err) {
    console.error('[start]', err.message);
    return res.status(502).json({ error: 'Could not create link' });
  }
}

// ═══ /api/admin/ban ═══
async function handleAdminBan(req, res) {
  if (!hasAdminAccess(req)) return res.status(401).json({ error: 'unauthorized' });

  const { type, value } = req.body || {};
  if (typeof value !== 'string' || value.length < 1 || value.length > 512)
    return res.status(400).json({ error: 'invalid value' });

  switch (type) {
    case 'hwid': revokeHwid(value); break;
    case 'hwidHash':
      if (!/^[a-f0-9]{64}$/i.test(value)) return res.status(400).json({ error: 'invalid hash' });
      revokeHwidHash(value);
      break;
    case 'key': revokeKey(value); break;
    case 'keyHash':
      if (!/^[a-f0-9]{64}$/i.test(value)) return res.status(400).json({ error: 'invalid hash' });
      revokeKeyHash(value);
      break;
    case 'user': revokeUser(value); break;
    case 'ip':   revokeIp(value);   break;
    default: return res.status(400).json({ error: 'invalid type' });
  }

  return res.status(200).json({
    ok: true, type,
    value: type === 'key'
      ? `sha256:${crypto.createHash('sha256').update(value.trim()).digest('hex').slice(0, 12)}`
      : value.slice(0, 20) + (value.length > 20 ? '...' : ''),
    stats: stats(),
  });
    }
};

// Bundled module: lib/platoboost.js
factories["lib/platoboost.js"] = function(module, exports, require, __filename, __dirname) {
const crypto = require('node:crypto');

const sha256 = (v) => crypto.createHash('sha256').update(String(v)).digest('hex');
// Bound identifier sent directly to Platoboost in "<hwid>_<scriptName>" form
// so each key locks to both the device HWID and the target script name.
const normalizeIdentifier = (boundHwid) => String(boundHwid).trim();

const service = () => {
  const v = process.env.PLATO_SERVICE_ID;
  if (!v) throw new Error('Missing PLATO_SERVICE_ID');
  return v;
};
const secret = () => {
  const v = process.env.PLATO_SECRET;
  if (!v) throw new Error('Missing PLATO_SECRET');
  return v;
};
// Platoboost serves the same API from api.platoboost.com (primary, the host the
// official drivers use) and api.platoboost.net (fallback when the primary is
// unreachable). platoboost.app is only the website/key gateway, never the API.
// Probe the primary and fall back; PLATO_API_HOST pins one host and skips it.
const PLATO_HOSTS = ['https://api.platoboost.com', 'https://api.platoboost.net'];
const PLATO_HOST_TTL = 10 * 60 * 1000;
let platoHost = null;
let platoHostAt = 0;

const pinnedHost = () => String(process.env.PLATO_API_HOST || '').replace(/\/$/, '');

async function host() {
  const pinned = pinnedHost();
  if (pinned) return pinned;
  if (platoHost && Date.now() - platoHostAt < PLATO_HOST_TTL) return platoHost;
  for (const candidate of PLATO_HOSTS) {
    try {
      const res = await fetch(candidate + '/public/connectivity', { signal: AbortSignal.timeout(4000) });
      const body = await res.json().catch(function () { return null; });
      if (res.ok && body && body.success === true) {
        platoHost = candidate;
        platoHostAt = Date.now();
        return candidate;
      }
    } catch (err) { /* try the next host */ }
  }
  platoHost = PLATO_HOSTS[PLATO_HOSTS.length - 1];
  platoHostAt = Date.now();
  return platoHost;
}

async function platoFetch(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    signal: AbortSignal.timeout(10000),
  });
  let data;
  try { data = await res.json(); }
  catch { throw new Error('Invalid response from Platoboost'); }
  return { status: res.status, data };
}

function verifyIntegrity(data, nonce) {
  return (
    data?.success === true &&
    data?.data?.valid === true &&
    data.data.hash === sha256(`true-${nonce}-${secret()}`)
  );
}

function invalidResult(message) {
  const result = { valid: false, message };
  if (typeof message === 'string' &&
      message.toLowerCase().includes('this key has already been redeemed to a different identifier')) {
    result.deviceMismatch = true;
  }
  return result;
}

async function verifyKey(key, hwid) {
  if (typeof key !== 'string' || !key.trim())
    return { valid: false, message: 'Invalid key' };
  if (typeof hwid !== 'string' || !hwid.trim() || hwid.length > 512)
    return { valid: false, message: 'Invalid device' };

  const identifier = normalizeIdentifier(hwid);
  const nonce = crypto.randomBytes(16).toString('hex');
  const url = new URL(`/public/whitelist/${encodeURIComponent(service())}`, await host());
  url.searchParams.set('identifier', identifier);
  url.searchParams.set('key', key.trim());
  url.searchParams.set('nonce', nonce);

  let result = await platoFetch(url.toString());
  if (result.status === 429)
    return { valid: false, rateLimited: true, message: 'Rate limited' };
  if (result.status !== 200 || result.data?.success !== true)
    return invalidResult(result.data?.message || 'Verification failed');

  if (verifyIntegrity(result.data, nonce)) return { valid: true };

  if (result.data?.data?.valid !== true && key.trim().startsWith('KEY_')) {
    const redeemNonce = crypto.randomBytes(16).toString('hex');
    result = await platoFetch(
      `${await host()}/public/redeem/${encodeURIComponent(service())}`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ identifier, key: key.trim(), nonce: redeemNonce }),
      }
    );
    if (result.status === 429)
      return { valid: false, rateLimited: true, message: 'Rate limited' };
    if (!verifyIntegrity(result.data, redeemNonce))
      return invalidResult(result.data?.message || 'Key invalid');

    const checkNonce = crypto.randomBytes(16).toString('hex');
    url.searchParams.set('nonce', checkNonce);
    const check = await platoFetch(url.toString());
    if (check.status === 200 && verifyIntegrity(check.data, checkNonce))
      return { valid: true };
    return invalidResult(check.data?.message || 'Activation unverified');
  }

  return invalidResult(result.data?.message || 'Could not verify integrity');
}

async function createLink(hwid) {
  if (typeof hwid !== 'string' || !hwid.trim() || hwid.length > 512)
    throw new Error('Invalid device');

  const rawService = String(service()).trim();
  const serviceId = /^\d+$/.test(rawService) ? Number(rawService) : rawService;
  const result = await platoFetch(`${await host()}/public/start`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ service: serviceId, identifier: normalizeIdentifier(hwid) }),
  });
  if (result.status === 429) return { rateLimited: true };
  if (result.status !== 200 || result.data?.success !== true ||
      typeof result.data?.data?.url !== 'string')
    throw new Error(result.data?.message || 'Could not create link');
  return { url: result.data.data.url };
}

async function probeIdentifier(sampleId = 'probe1234-abcd_T') {
  try {
    const id = normalizeIdentifier(sampleId);
    const nonce = crypto.randomBytes(16).toString('hex');
    const url = new URL(`/public/whitelist/${encodeURIComponent(service())}`, await host());
    url.searchParams.set('identifier', id);
    url.searchParams.set('key', 'probe_invalid_key');
    url.searchParams.set('nonce', nonce);
    const result = await platoFetch(url.toString());
    const startCheck = await createLink(id).catch((e) => ({ error: e.message }));
    return {
      configured: true,
      status: result.status,
      acceptsBoundHwid: result.status === 200 && result.data?.success === true,
      startLinkOk: Boolean(startCheck && (startCheck.url || startCheck.rateLimited)),
    };
  } catch (err) {
    return { configured: false, acceptsBoundHwid: false, error: err.message };
  }
}

module.exports = { verifyKey, createLink, probeIdentifier };
};

// Bundled module: lib/hwid.js
factories["lib/hwid.js"] = function(module, exports, require, __filename, __dirname) {
'use strict';

const crypto = require('node:crypto');
const { Buffer } = require('node:buffer');
const MAX_HWID_LENGTH = 512;
const MIN_HWID_LENGTH = 4;

function canonical(value) {
  return typeof value === 'string' ? value.trim().toLowerCase() : '';
}

function normalizeRawHwid(fingerprint) {
  const value = canonical(fingerprint);
  if (!value) return '';
  return /^[a-z0-9-]+$/.test(value)
    ? value
    : crypto.createHash('sha256').update(value).digest('hex');
}

// Formats the per-script bound HWID string: "<hwid>_<scriptName>"
function formatBoundHwid(fingerprint, scriptName) {
  const base = normalizeRawHwid(fingerprint);
  if (!base) return '';
  const script = typeof scriptName === 'string' ? scriptName.trim() : '';
  return script ? `${base}_${script}` : base;
}

// The matching fingerprint value is authoritative. When scriptName is supplied,
// the binding encodes "<hwid>_<scriptName>" so keys and tickets bind per script.
function deviceBindingId(fingerprint, scriptName) {
  const value = scriptName
    ? formatBoundHwid(fingerprint, scriptName)
    : canonical(fingerprint);
  return value ? Buffer.from(value, 'utf8').toString('base64') : '';
}

function headerValue(headers = {}, name) {
  const found = Object.entries(headers).find(([key]) => String(key).toLowerCase() === name);
  const value = found && found[1];
  if (typeof value === 'string') return value.trim();
  if (Array.isArray(value)) {
    const first = value.find((item) => typeof item === 'string');
    return first ? first.trim() : '';
  }
  return '';
}

// Do not whitelist executor-specific names. Accept any HTTP header whose name
// contains the word "fingerprint", case-insensitively.
function fingerprintsFromHeaders(headers = {}) {
  const values = [];
  for (const [name, value] of Object.entries(headers)) {
    if (!String(name).toLowerCase().includes('fingerprint')) continue;
    if (typeof value === 'string' && value.trim()) values.push(value.trim());
    else if (Array.isArray(value)) {
      for (const item of value) if (typeof item === 'string' && item.trim()) values.push(item.trim());
    }
  }
  return values;
}

// Accept the split/Base64 body after server reconstruction and old raw-HWID
// fields/headers during transition. A matching fingerprint is required and
// trusted for the persistent identifier.
function resolveHwid(headers = {}, bodyValue) {
  const opaqueHeader = headerValue(headers, 'x-r7q');
  const legacyHeader = headerValue(headers, 'x-ms999-hwid');
  const body = typeof bodyValue === 'string' ? bodyValue.trim() : '';
  if (opaqueHeader && legacyHeader && canonical(opaqueHeader) !== canonical(legacyHeader)) {
    return { ok: false, reason: 'hwid mismatch' };
  }
  const header = opaqueHeader || legacyHeader;
  if (header && body && canonical(header) !== canonical(body)) {
    return { ok: false, reason: 'hwid mismatch' };
  }

  const hwid = header || body;
  if (hwid.length < MIN_HWID_LENGTH || hwid.length > MAX_HWID_LENGTH) {
    return { ok: false, reason: 'invalid hwid format' };
  }

  const fingerprints = fingerprintsFromHeaders(headers);
  if (!fingerprints.length) return { ok: false, reason: 'fingerprint required' };
  if (fingerprints.some((value) => value.length < MIN_HWID_LENGTH || value.length > MAX_HWID_LENGTH)) {
    return { ok: false, reason: 'invalid fingerprint format' };
  }
  if (fingerprints.some((value) => value !== hwid)) {
    return { ok: false, reason: 'hwid fingerprint mismatch' };
  }

  // All matching fields carry the same value; use the fingerprint as authority.
  const fingerprint = fingerprints[0];
  return { ok: true, hwid: fingerprint, fingerprint, bindingId: deviceBindingId(fingerprint) };
}

module.exports = {
  resolveHwid,
  deviceBindingId,
  formatBoundHwid,
  canonical,
  fingerprintsFromHeaders,
  MAX_HWID_LENGTH,
  MIN_HWID_LENGTH,
};
};

// Bundled module: lib/ticket.js
factories["lib/ticket.js"] = function(module, exports, require, __filename, __dirname) {
const crypto = require('node:crypto');

const TICKET_TTL = 30 * 60;
const SESSION_TTL = 24 * 60 * 60;

function b64url(buf) {
  return Buffer.from(buf).toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function b64urlDecode(str) {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) str += '=';
  return Buffer.from(str, 'base64');
}
function tsecret() {
  const v = process.env.TICKET_SECRET;
  if (!v || v.length < 32) throw new Error('TICKET_SECRET must be >=32 chars');
  return v;
}
function sign(data) {
  return b64url(crypto.createHmac('sha256', tsecret()).update(data).digest());
}

function issueTicket(payload) {
  const header = b64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const now = Math.floor(Date.now() / 1000);
  const body = b64url(JSON.stringify({
    ...payload, iat: now, exp: now + TICKET_TTL,
    jti: crypto.randomBytes(12).toString('hex'),
  }));
  return `${header}.${body}.${sign(`${header}.${body}`)}`;
}

function verifyTicket(token) {
  if (typeof token !== 'string' || token.length > 4096) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [header, body, sig] = parts;
  const expected = sign(`${header}.${body}`);
  if (sig.length !== expected.length) return null;
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  let payload;
  try { payload = JSON.parse(b64urlDecode(body).toString('utf8')); }
  catch { return null; }
  const now = Math.floor(Date.now() / 1000);
  if (!payload.exp || payload.exp < now) return null;
  if (!payload.iat || payload.iat > now + 60) return null;
  return payload;
}

const hashHwid = (hwid) =>
  crypto.createHash('sha256').update(String(hwid).trim().toLowerCase()).digest('hex');
// Base64 binding IDs are case-sensitive; keep their exact normalized spelling.
const hashBindingId = (bindingId) =>
  crypto.createHash('sha256').update(String(bindingId).trim()).digest('hex');

module.exports = { issueTicket, verifyTicket, hashHwid, hashBindingId };
};

// Bundled module: lib/link.js
factories["lib/link.js"] = function(module, exports, require, __filename, __dirname) {
'use strict';

// Loader-link system.
//
// A link is `https://HOST/x/<40 hex random>?at=<exp>.<sig>`: the namespace and
// the token are random long values (the somtank-style `/x/<40 hex>` shape), and
// nothing about them can be guessed from another link. The token is stateless
// (HMAC), so a link works across Vercel instances and needs no database.
//
// `/x/<path>` serves a small, fully deterministic entry script; because the
// bytes depend only on the link, the generated stub can pin `sha256` of them
// exactly like the reference loader does with its `d` constant.

const crypto = require('node:crypto');

const PATH_HEX = 40;
const DEFAULT_TTL_SECONDS = 7 * 24 * 60 * 60;

function linkSecret() {
  const value = process.env.LINK_SECRET || process.env.TICKET_SECRET;
  if (typeof value !== 'string' || value.length < 32) return null;
  return value;
}

function b64url(buffer) {
  return Buffer.from(buffer).toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function sign(value) {
  const secret = linkSecret();
  if (!secret) return null;
  return b64url(crypto.createHmac('sha256', secret).update(value).digest()).slice(0, 32);
}

function isLinkPath(value) {
  return typeof value === 'string' && new RegExp(`^[a-f0-9]{${PATH_HEX}}$`).test(value);
}

function randomLinkPath() {
  return crypto.randomBytes(PATH_HEX / 2).toString('hex');
}

// Short, human-friendly id shown in the panel (derived from the path).
function linkId(linkPath) {
  return Buffer.from(linkPath, 'hex').toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '').slice(0, 22);
}

function normalizeScriptName(value) {
  const name = typeof value === 'string' ? value.trim() : '';
  if (!/^[\w-]{1,64}$/.test(name)) return null;
  return name;
}

// The token binds only the path and expiry. Script selection and the key travel
// as ordinary positional arguments, never through a shared executor environment.
function issuePathToken({ path: linkPath, expiresAt }) {
  const exp = Math.floor(Number(expiresAt) / 1000);
  if (!isLinkPath(linkPath) || !Number.isFinite(exp)) return null;
  const sig = sign(`link|${linkPath}|${exp}`);
  if (!sig) return null;
  return `${exp.toString(36)}.${sig}`;
}

function verifyPathToken(token, linkPath) {
  if (typeof token !== 'string' || token.length > 128) return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const exp = Number.parseInt(parts[0], 36);
  if (!Number.isFinite(exp) || exp * 1000 < Date.now()) return null;
  const expected = sign(`link|${linkPath}|${exp}`);
  if (!expected) return null;
  const supplied = Buffer.from(parts[1], 'utf8');
  const want = Buffer.from(expected, 'utf8');
  if (supplied.length !== want.length || !crypto.timingSafeEqual(supplied, want)) return null;
  return { expiresAt: exp * 1000, path: linkPath };
}

// Deterministic entry script: same link ⇒ same bytes, so the stub's sha256 pin
// always matches. It only hands over to the regular Stage-1 loader.
function renderEntryBody({ baseUrl, path: linkPath, token }) {
  const url = `${baseUrl}/x/${linkPath}?at=${token}`;
  return [
    '-- 999MS link entry (readable).',
    '-- Generated for one link only: the namespace and token are random, and the',
    '-- body is deterministic so the launcher can verify its sha256 before running.',
    `local LINK_URL = ${JSON.stringify(url)}`,
    '',
    'if not game:IsLoaded() then game.Loaded:Wait() end',
    '',
    'local License, Script = ...',
    'if type(License) ~= "string" then License = "" end',
    'if type(Script) ~= "string" or Script == "" then Script = "main" end',
    '',
    'local BASE_URL = LINK_URL:match("^(https://[^/]+)")',
    'if type(BASE_URL) ~= "string" then',
    '    return warn("[999MS] Link malformed")',
    'end',
    '',
    '-- Hand over to Stage 1 on the same host; the chain is unchanged from there.',
    'local body = game:HttpGet(BASE_URL .. "/loadc.lua")',
    'local chunk, err = loadstring(body)',
    'if not chunk then',
    '    return warn("[999MS] Link entry failed: " .. tostring(err))',
    'end',
    'return chunk(License, Script)',
    '',
  ].join('\n');
}

function sha256(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}

// The launcher the user pastes into the executor, in the same shape as the
// reference loader: a short table of constants, the URL, the hash, then a
// verified loadstring.
function renderStub({ baseUrl, path: linkPath, token, sha256: digest, scriptName, expiresAt }) {
  const url = `${baseUrl}/x/${linkPath}?at=${token}`;
  const shortId = linkId(linkPath);
  const table = JSON.stringify([baseUrl, `/x/${linkPath}`, token, shortId, scriptName, true]);
  return [
    `-- 999MS loader link • ${scriptName} • expires ${new Date(expiresAt).toISOString()}`,
    `local c=${table}`,
    `local u=${JSON.stringify(url)}`,
    `local d=${JSON.stringify(digest)}`,
    'local License = ""',
    `local Script = ${JSON.stringify(scriptName || 'main')}`,
    '',
    'if not game:IsLoaded() then game.Loaded:Wait() end',
    '',
    'local body = game:HttpGet(u)',
    'if type(body) ~= "string" or #body == 0 then',
    '    return warn("[999MS] Link fetch failed")',
    'end',
    '',
    '-- Hash check when the executor exposes a sha256 helper; otherwise the chain',
    '-- still verifies its own stages server-side.',
    'local function sha256Hex(s)',
    '    local crypt = (syn and syn.crypt and syn.crypt.hash) or (crypt and crypt.hash)',
    '    if type(crypt) ~= "function" then return nil end',
    '    local ok, v = pcall(crypt, s, "sha256")',
    '    if not ok or type(v) ~= "string" then return nil end',
    '    return string.lower((v:gsub("%s", "")))',
    'end',
    '',
    'local got = sha256Hex(body)',
    'if got and got ~= d then',
    '    return warn("[999MS] Link integrity check failed")',
    'end',
    '',
    'local chunk, err = loadstring(body)',
    'if not chunk then',
    '    return warn("[999MS] Link load failed: " .. tostring(err))',
    'end',
    'return chunk(License, Script)',
    '',
  ].join('\n');
}

module.exports = {
  PATH_HEX,
  DEFAULT_TTL_SECONDS,
  isLinkPath,
  randomLinkPath,
  linkId,
  normalizeScriptName,
  issuePathToken,
  verifyPathToken,
  renderEntryBody,
  renderStub,
  sha256,
};
};

// Bundled module: lib/chainlink.js
factories["lib/chainlink.js"] = function(module, exports, require, __filename, __dirname) {
'use strict';

/**
 * On-demand stage links.
 *
 *   /loadc.lua  ──►  https://host/<token>  ──►  https://host/<token>  ──►  https://host/<token>
 *                     (Stage 2)                 (Stage 3)                 (Stage 4)
 *
 * Only the entry script carries a file name. Every later stage is reached
 * through a bare, opaque token, so a link says nothing about what it serves.
 *
 * Token layout: `<chainId>.<exp>.<sig>`
 *   chainId  16 random bytes (32 hex), fresh for every minted link
 *   exp      epoch milliseconds, the link dies after TTL
 *   sig      HMAC-SHA256(secret, "999MS-link-v3|<stage>|<chainId>|<exp>")[:32]
 *
 * The stage is inside the signature only, never in the token, so the server
 * resolves it by testing the token against each stage.
 */

const crypto = require('node:crypto');

const STAGES = ['loada', 'loader', 'payload'];
const NEXT_STAGE = Object.freeze({ loada: 'loader', loader: 'payload' });
const DEFAULT_TTL_MS = 10_000;

function chainSecret() {
  const secret = process.env.CHAIN_LINK_SECRET || process.env.TICKET_SECRET;
  return typeof secret === 'string' && secret.length >= 32 ? secret : null;
}

// Fixed deadline: environment overrides and obfuscation budgets cannot extend it.
function linkTtlMs() {
  return DEFAULT_TTL_MS;
}

function sign(chainId, stage, exp) {
  return crypto
    .createHmac('sha256', chainSecret())
    .update(`999MS-link-v3|${stage}|${chainId}|${exp}`)
    .digest('hex')
    .slice(0, 32);
}

function tokenFor(stage, chainId, exp) {
  if (!STAGES.includes(stage)) throw new Error('unknown stage: ' + stage);
  return `${chainId}.${exp}.${sign(chainId, stage, exp)}`;
}

// Every link expires no later than ten seconds after its creation.
function mintLink(stage, now = Date.now()) {
  if (!chainSecret() || !STAGES.includes(stage)) return null;
  const chainId = crypto.randomBytes(16).toString('hex');
  const exp = now + DEFAULT_TTL_MS;
  return { chainId, stage, exp, token: tokenFor(stage, chainId, exp) };
}

function isTokenShape(token) {
  return typeof token === 'string' && /^[a-f0-9]{32}\.\d{13}\.[a-f0-9]{32}$/.test(token);
}

// Resolve which stage a bare token belongs to. The stage is not written in the
// token, so it is recovered by checking the signature against each stage.
function resolveToken(token, now = Date.now()) {
  if (!chainSecret() || !isTokenShape(token)) return null;

  const [chainId, expRaw, signature] = token.split('.');
  const exp = Number(expRaw);
  if (!Number.isSafeInteger(exp)) return null;
  if (exp <= now) return null;
  // A link may never be minted further ahead than one window.
  if (exp > now + DEFAULT_TTL_MS) return null;

  const supplied = Buffer.from(signature, 'utf8');
  for (const stage of STAGES) {
    const expected = Buffer.from(sign(chainId, stage, exp), 'utf8');
    if (supplied.length === expected.length && crypto.timingSafeEqual(supplied, expected)) {
      return { chainId, stage, exp };
    }
  }
  return null;
}

// Kept for callers that already know the stage (tests, tooling).
function verifyToken(token, stage, now = Date.now()) {
  const claim = resolveToken(token, now);
  return claim && claim.stage === stage ? claim : null;
}

// One POST claims a link immediately on this process, before reading its body
// or checking proof. Keep the tombstone until expiry; do not reopen a failed fetch.
// This process-local Map does not coordinate separate serverless instances.
const usedLinks = new Map();

function consume(token, now = Date.now()) {
  const claim = resolveToken(token, now);
  if (!claim) return null;
  for (const [key, expiresAt] of usedLinks) {
    if (expiresAt <= now) usedLinks.delete(key);
  }
  const key = `${claim.chainId}:${claim.stage}`;
  if (usedLinks.has(key)) return null;
  usedLinks.set(key, claim.exp);
  return claim;
}

// The next link is derived from the token that was just redeemed, so the whole
// chain can be rendered (and hashed) the moment any stage is served. Nothing is
// stored: the same token always derives the same next link.
function deriveNext(token, now = Date.now()) {
  const claim = resolveToken(token, now);
  if (!claim) return null;
  const nextStage = NEXT_STAGE[claim.stage];
  if (!nextStage) return null;

  const chainId = crypto
    .createHmac('sha256', chainSecret())
    .update(`999MS-next-v1|${token}`)
    .digest('hex')
    .slice(0, 32);
  // The whole chain is pre-rendered to bind exact downstream SHA-256 hashes.
  // Its derived links already exist then, so they share the same deadline;
  // deriving or fetching later must not renew their ten-second lifetime.
  const exp = claim.exp;
  return { chainId, stage: nextStage, exp, token: tokenFor(nextStage, chainId, exp) };
}

// ── Fetch proof ──────────────────────────────────────────────────────────────
// A stage body is only handed over to a client that already ran the stage
// before it. That stage receives `nonce` in its body and must send back
// sha256("999MS-fetch-v1|<nonce>|<token>"). A bare `game:HttpGet` or curl has
// no nonce, so it gets the trap instead of the next stage.
function deriveNonce(token, now = Date.now()) {
  const claim = resolveToken(token, now);
  if (!claim) return null;
  return crypto
    .createHmac('sha256', chainSecret())
    .update(`999MS-nonce-v1|${claim.stage}|${claim.chainId}|${claim.exp}`)
    .digest('hex')
    .slice(0, 32);
}

function fetchProof(nonce, token) {
  if (typeof nonce !== 'string' || typeof token !== 'string') return null;
  return crypto
    .createHash('sha256')
    .update(`999MS-fetch-v1|${nonce}|${token}`)
    .digest('hex');
}

module.exports = {
  STAGES,
  NEXT_STAGE,
  mintLink,
  tokenFor,
  resolveToken,
  verifyToken,
  deriveNext,
  deriveNonce,
  fetchProof,
  consume,
  isTokenShape,
  linkTtlMs,
};
};

// Bundled module: lib/999MS-server-sdk.js
factories["lib/999MS-server-sdk.js"] = function(module, exports, require, __filename, __dirname) {
'use strict';

const crypto = require('node:crypto');
const { xorCipher, b64encode, b64decode } = require('./crypto');

/**
 * 999MS Server SDK
 *
 * Shared protocol helpers for a 999MS-compatible authorization endpoint.
 * Tickets, key-provider checks, storage, and revocation policy intentionally
 * stay with the host application: this module only owns the portable wire
 * protocol and short-lived runtime proof helpers.
 */

const MAX_PROTECTED_BYTES = 1024 * 1024;

// These constants are protocol-visible and are not authorization secrets.
// They deliberately vary per component so a response is not a repetition of
// one arithmetic mapping.
const RNG_CHALLENGE_TRANSFORMS = Object.freeze([
  Object.freeze({ multiplier: 2, offset: -32 }),
  Object.freeze({ multiplier: 5, offset: 256 }),
  Object.freeze({ multiplier: 3, offset: -17 }),
  Object.freeze({ multiplier: 7, offset: 19 }),
  Object.freeze({ multiplier: 11, offset: -101 }),
]);

function isValidScriptName(value) {
  return typeof value === 'string' && /^[a-zA-Z0-9_-]{1,64}$/.test(value);
}

function isFiniteNonInteger(value) {
  return Number.isFinite(value) && !Number.isInteger(value);
}

function validateClientChallenge(clientData) {
  const values = ['Rng1', 'Rng2', 'Rng3', 'Rng4', 'Rng5']
    .map((field) => clientData?.[field]);

  if (!values.every(Number.isSafeInteger)) {
    return { ok: false, reason: 'RNG integers rejected' };
  }
  // The client generates an integer in [1, 1_000_000] plus math.random().
  // Requiring a bounded non-integer catches simple constant/integer RNG hooks
  // on the server without using client stack or hook metadata as authority.
  const rngFloat = clientData?.RngFloat;
  if (!isFiniteNonInteger(rngFloat) || rngFloat <= 1 || rngFloat >= 1_000_001) {
    return { ok: false, reason: 'RNG float rejected' };
  }
  return { ok: true, values };
}

function createChallengeResponse(values) {
  if (!Array.isArray(values) || values.length !== RNG_CHALLENGE_TRANSFORMS.length ||
      !values.every(Number.isSafeInteger)) {
    throw new TypeError('Expected five safe integer RNG values');
  }

  return values.map((value, index) => {
    const { multiplier, offset } = RNG_CHALLENGE_TRANSFORMS[index];
    return (value * multiplier) + offset;
  }).join('|');
}

function requireXorKey(xorKey) {
  if (typeof xorKey !== 'string' || xorKey.length === 0 || xorKey.length > 4096) {
    throw new TypeError('A non-empty PAYLOAD_XOR_KEY is required');
  }
  return xorKey;
}

function isByteArray(value) {
  return Array.isArray(value) && value.length <= MAX_PROTECTED_BYTES &&
    value.every((byte) => Number.isInteger(byte) && byte >= 0 && byte <= 255);
}

function encodeProtectedPayload(data, xorKey) {
  const key = requireXorKey(xorKey);
  const json = JSON.stringify(data);
  if (typeof json !== 'string') throw new TypeError('Payload must be JSON serializable');

  const encrypted = xorCipher(Buffer.from(json, 'utf8'), key);
  const full = key + b64encode(encrypted);
  return { Data: Array.from(Buffer.from(full, 'utf8')) };
}

function decodeProtectedPayload(body, xorKey) {
  try {
    const key = requireXorKey(xorKey);
    const { Data } = body || {};
    if (!isByteArray(Data)) return { ok: false };

    const raw = Buffer.from(Data).toString('utf8');
    if (raw.length < key.length + 4 || raw.slice(0, key.length) !== key) {
      return { ok: false };
    }

    const b64 = raw.slice(key.length);
    const decrypted = xorCipher(b64decode(b64), key).toString('utf8');
    return { ok: true, data: JSON.parse(decrypted) };
  } catch {
    return { ok: false };
  }
}

function runtimeCredentialSecret() {
  const secret = process.env.RUNTIME_CREDENTIAL_SECRET || process.env.TICKET_SECRET;
  if (typeof secret !== 'string' || secret.length < 32) {
    throw new Error('RUNTIME_CREDENTIAL_SECRET or TICKET_SECRET must be >=32 chars');
  }
  return secret;
}

function timingSafeStringEqual(expected, actual) {
  if (typeof expected !== 'string' || typeof actual !== 'string') return false;
  const a = Buffer.from(expected, 'utf8');
  const b = Buffer.from(actual, 'utf8');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function runtimeContext(ticketPayload, scriptName, issuedAt) {
  if (!ticketPayload || typeof ticketPayload !== 'object' ||
      typeof ticketPayload.jti !== 'string' ||
      typeof ticketPayload.hwidHash !== 'string' ||
      typeof scriptName !== 'string' || !isValidScriptName(scriptName) ||
      !Number.isSafeInteger(issuedAt)) {
    return null;
  }
  return `${ticketPayload.jti}:${ticketPayload.hwidHash}:${scriptName}:${issuedAt}`;
}

function runtimeDigest(kind, context) {
  return crypto.createHmac('sha256', runtimeCredentialSecret())
    .update(`999MS-runtime-v2:${kind}:${context}`)
    .digest('hex');
}

/**
 * Creates credentials that can be verified by any stateless serverless
 * invocation. The executor continues to receive the same two fields as before
 * (ScriptToken and RuntimeSecret), so obfuscated client artifacts do not need
 * changing. Neither credential is a server secret once delivered to a client;
 * the HMAC makes them unforgeable for a different signed ticket/HWID/script.
 */
function deriveRuntimeCredentials({ ticketPayload, scriptName, issuedAt = Date.now() }) {
  const createdAt = Math.floor(issuedAt);
  const context = runtimeContext(ticketPayload, scriptName, createdAt);
  if (!context) throw new TypeError('Invalid runtime credential context');
  const timestamp = createdAt.toString(36);
  return {
    scriptToken: `${timestamp}.${runtimeDigest('token', context)}`,
    runtimeSecret: runtimeDigest('secret', context),
  };
}

function verifyRuntimeProof({
  ticketPayload,
  runtimeSecret,
  scriptToken,
  hwidHash,
  scriptName,
  now = Date.now(),
  runtimeTtl = 60 * 1000,
}) {
  if (!ticketPayload || ticketPayload.scope !== 'script') return 'ticket claims invalid';
  if (typeof scriptName !== 'string' || scriptName !== ticketPayload.scriptName) {
    return 'scriptName changed';
  }
  if (typeof hwidHash !== 'string' || !timingSafeStringEqual(ticketPayload.hwidHash, hwidHash)) {
    return 'hwid mismatch';
  }
  if (typeof scriptToken !== 'string' || !/^[0-9a-z]+\.[a-f0-9]{64}$/.test(scriptToken)) {
    return 'token malformed';
  }

  const [encodedIssuedAt] = scriptToken.split('.', 1);
  const issuedAt = Number.parseInt(encodedIssuedAt, 36);
  if (!Number.isSafeInteger(issuedAt) || issuedAt > now + 5000 || now - issuedAt > runtimeTtl) {
    return 'runtime expired';
  }

  let expected;
  try {
    expected = deriveRuntimeCredentials({ ticketPayload, scriptName, issuedAt });
  } catch {
    return 'ticket claims invalid';
  }
  if (!timingSafeStringEqual(expected.scriptToken, scriptToken)) return 'token mismatch';
  if (typeof runtimeSecret !== 'string' || runtimeSecret.length !== 64 ||
      !timingSafeStringEqual(expected.runtimeSecret, runtimeSecret)) {
    return 'secret mismatch';
  }
  return null;
}

// ═══ Request hopping (nonce chain between the three client calls) ═══
// Each successful step burns its hop and issues the next one, so a captured
// response cannot be replayed and a skipped step cannot be imitated.
const HOPS = new Map();
const HOP_TTL_MS = 3 * 60 * 1000;

function pruneHops(now = Date.now()) {
  for (const [key, value] of HOPS) {
    if (now - value.issuedAt > HOP_TTL_MS) HOPS.delete(key);
  }
}

function issueHop(ticketJti, meta = {}) {
  pruneHops();
  const hop = crypto.randomBytes(24).toString('hex');
  HOPS.set(hop, { jti: ticketJti, issuedAt: Date.now(), ...meta });
  return hop;
}

function consumeHop(hop, ticketJti) {
  if (typeof hop !== 'string' || !/^[a-f0-9]{48}$/.test(hop)) return null;
  pruneHops();
  const entry = HOPS.get(hop);
  if (!entry) return null;
  if (entry.jti !== ticketJti) return null;
  HOPS.delete(hop);
  if (Date.now() - entry.issuedAt > HOP_TTL_MS) return null;
  return entry;
}

// ═══ Equation challenge (client must answer with the inverse transform) ═══
// The server publishes two linear transforms of a secret integer; the client
// recovers the integer and answers with Equate(integer). A replayed or forged
// response cannot produce a fresh answer.
function clampInt(value) {
  if (!Number.isSafeInteger(value)) return null;
  return ((value % 2000000000) + 2000000000) % 2000000000;
}

function equateServer(value) {
  let X = (value + 73) % 2147483647;
  let Y = Math.pow(X % 11, 3) + (X % 5) * 97 + Math.floor(X / 3);
  if (X !== 0) Y = Y + X * 37 - Math.pow(X % 9, 2);
  else Y = Math.abs(Y) + 137;
  return (Y * 7919 + 1234567) % 100000000000003;
}

function createEquationChallenge() {
  const secret = crypto.randomInt(1000, 1000000000);
  return {
    secret,
    // f1(x) = 2x - 32 ; f2(x) = 5x + 256
    a: secret * 2 - 32,
    b: secret * 5 + 256,
    answer: equateServer(secret),
  };
}

function checkEquationAnswer(challenge, supplied) {
  if (!challenge) return false;
  if (typeof supplied !== 'number' || !Number.isFinite(supplied)) return false;
  return Math.abs(supplied - challenge.answer) < 0.5;
}

module.exports = {
  RNG_CHALLENGE_TRANSFORMS,
  createChallengeResponse,
  validateClientChallenge,
  isValidScriptName,
  encodeProtectedPayload,
  decodeProtectedPayload,
  deriveRuntimeCredentials,
  timingSafeStringEqual,
  verifyRuntimeProof,
  issueHop,
  consumeHop,
  createEquationChallenge,
  checkEquationAnswer,
};
};

// Bundled module: lib/revoke.js
factories["lib/revoke.js"] = function(module, exports, require, __filename, __dirname) {
const crypto = require('node:crypto');

const revokedHwids = new Set();
const revokedUsers = new Set();
const revokedIps = new Set();
const revokedKeys = new Set();

let loaded = false;

function loadFromEnv() {
  if (loaded) return;
  loaded = true;

  for (const h of (process.env.REVOKED_HWIDS || '').split(',').map(s => s.trim()).filter(Boolean))
    revokedHwids.add(h.toLowerCase());
  for (const u of (process.env.REVOKED_USERS || '').split(',').map(s => s.trim()).filter(Boolean))
    revokedUsers.add(u);
  for (const i of (process.env.REVOKED_IPS || '').split(',').map(s => s.trim()).filter(Boolean))
    revokedIps.add(i);
  for (const h of (process.env.REVOKED_KEY_HASHES || '').split(',').map(s => s.trim()).filter(Boolean))
    if (/^[a-f0-9]{64}$/i.test(h)) revokedKeys.add(h.toLowerCase());
}

const hashHwid = (hwid) =>
  crypto.createHash('sha256').update(String(hwid).trim().toLowerCase()).digest('hex');
const hashKey = (key) =>
  crypto.createHash('sha256').update(String(key).trim()).digest('hex');

function isKeyRevoked(key) {
  loadFromEnv();
  return typeof key === 'string' && revokedKeys.has(hashKey(key));
}
function revokeKey(key) { revokedKeys.add(hashKey(key)); }
function revokeKeyHash(hash) {
  const value = String(hash).trim().toLowerCase();
  if (/^[a-f0-9]{64}$/.test(value)) revokedKeys.add(value);
}
function revokeHwid(hwid) { revokedHwids.add(hashHwid(hwid)); }
// The control panel bans by the hash the gateway already reports, so the raw
// device identifier never has to travel back through the browser.
function revokeHwidHash(hash) { revokedHwids.add(String(hash).trim().toLowerCase()); }
function revokeUser(userId) { revokedUsers.add(String(userId)); }
function revokeIp(ip) { revokedIps.add(String(ip)); }

function checkRevoked({ hwid, boundHwid, hwidHash, userId, ip } = {}) {
  loadFromEnv();
  if (boundHwid && revokedHwids.has(hashHwid(boundHwid))) return 'hwid_banned';
  if (hwid && revokedHwids.has(hashHwid(hwid))) return 'hwid_banned';
  if (hwidHash && revokedHwids.has(String(hwidHash).trim().toLowerCase())) return 'hwid_banned';
  if (userId && revokedUsers.has(String(userId))) return 'user_banned';
  if (ip && revokedIps.has(String(ip))) return 'ip_banned';
  return null;
}

function stats() {
  loadFromEnv();
  return { hwids: revokedHwids.size, users: revokedUsers.size, ips: revokedIps.size, keys: revokedKeys.size };
}

module.exports = {
  revokeHwid, revokeHwidHash, revokeUser, revokeIp, revokeKey, revokeKeyHash,
  isKeyRevoked, checkRevoked, stats, listRevocations,
};

function listRevocations() {
  const mask = (value) => (value.length <= 18 ? value : `${value.slice(0, 12)}…${value.slice(-4)}`);
  return {
    hwids: [...revokedHwids].map(mask),
    users: [...revokedUsers].map(mask),
    ips: [...revokedIps].map(mask),
    keys: [...revokedKeys].map(mask),
  };
}
};

// Bundled module: lib/crypto.js
factories["lib/crypto.js"] = function(module, exports, require, __filename, __dirname) {
function xorCipher(data, key) {
  if (typeof data === 'string') data = Buffer.from(data, 'utf8');
  if (typeof key === 'string') key = Buffer.from(key, 'utf8');
  const out = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i++) {
    out[i] = data[i] ^ key[i % key.length];
  }
  return out;
}

function b64encode(buf) { return Buffer.from(buf).toString('base64'); }
function b64decode(str) { return Buffer.from(str, 'base64'); }
function inverse(y) { return ((y * 20) + 5) / 10; }

module.exports = { xorCipher, b64encode, b64decode, inverse };
};

// Bundled module: lib/wire-codec.js
factories["lib/wire-codec.js"] = function(module, exports, require, __filename, __dirname) {
'use strict';

// Versioned XOR/shuffle/Morse framing adapted from Jjhj.txt.
// The random XOR key is INCLUDED in the frame: this is reversible obfuscation,
// NOT authenticated encryption, a signature, or an authorization boundary.
const crypto = require('node:crypto');
const { TextDecoder } = require('node:util');

const VERSION = 'ms999-morse-v1';
const KEY_BYTES = 16;
const MAX_PLAIN_BYTES = 128 * 1024;
const MAX_WIRE_CHARS = (MAX_PLAIN_BYTES + KEY_BYTES + 8) * 12;
const MAX_CLOCK_SKEW = 300;
const MAX_BULK_BYTES = 1024 * 1024;
const MORSE = Object.freeze({
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.',
});
const REVERSE = Object.freeze(Object.fromEntries(Object.entries(MORSE).map(([key, value]) => [value, key])));
const decoder = new TextDecoder('utf-8', { fatal: true });

function checksum16(bytes) {
  let sum = 0;
  for (let i = 0; i < bytes.length; i += 1) sum = (sum + bytes[i] * (i + 1)) % 65536;
  return sum;
}

// Products stay below 2^53 so JS and Lua number arithmetic agree exactly.
function permutation(length, seed) {
  const order = Array.from({ length }, (_, i) => i);
  for (let i = length - 1; i > 0; i -= 1) {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    const j = seed % (i + 1);
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

function encodeBytes(input, key = crypto.randomBytes(KEY_BYTES)) {
  const bytes = Buffer.from(input);
  key = Buffer.from(key);
  if (key.length !== KEY_BYTES || bytes.length > MAX_PLAIN_BYTES) throw new Error('Wire input size invalid');
  const frame = Buffer.alloc(bytes.length + 8);
  frame.write('M1', 0, 'ascii');
  frame.writeUInt32BE(bytes.length, 2);
  bytes.copy(frame, 6);
  frame.writeUInt16BE(checksum16(bytes), frame.length - 2);
  for (let i = 0; i < frame.length; i += 1) frame[i] ^= key[i % key.length];
  const order = permutation(frame.length, checksum16(key));
  const shuffled = Buffer.from(order.map((i) => frame[i]));
  const hex = Buffer.concat([key, shuffled]).toString('hex').toUpperCase();
  return Array.from(hex, (ch) => MORSE[ch]
    .replace(/--/g, 'I').replace(/-/g, 'l').replace(/\.\./g, ':')).join(';');
}

function decodeBytes(encoded) {
  if (typeof encoded !== 'string' || encoded.length === 0 || encoded.length > MAX_WIRE_CHARS ||
      /[^Il.:;]/.test(encoded) || encoded.startsWith(';') || encoded.endsWith(';') || encoded.includes(';;')) {
    throw new Error('Wire encoding invalid');
  }
  const tokens = encoded.split(';');
  if (tokens.length % 2 || tokens.length < (KEY_BYTES + 8) * 2 ||
      tokens.length > (MAX_PLAIN_BYTES + KEY_BYTES + 8) * 2) throw new Error('Wire frame size invalid');
  const hex = tokens.map((token) => {
    if (token.length > 5) throw new Error('Wire token invalid');
    const symbol = REVERSE[token.replace(/I/g, '--').replace(/l/g, '-').replace(/:/g, '..')];
    if (!symbol) throw new Error('Wire token invalid');
    return symbol;
  }).join('');
  const raw = Buffer.from(hex, 'hex');
  const key = raw.subarray(0, KEY_BYTES);
  const shuffled = raw.subarray(KEY_BYTES);
  const order = permutation(shuffled.length, checksum16(key));
  const frame = Buffer.alloc(shuffled.length);
  for (let i = 0; i < order.length; i += 1) frame[order[i]] = shuffled[i];
  for (let i = 0; i < frame.length; i += 1) frame[i] ^= key[i % key.length];
  if (frame.toString('ascii', 0, 2) !== 'M1') throw new Error('Wire magic invalid');
  const length = frame.readUInt32BE(2);
  if (length > MAX_PLAIN_BYTES || length + 8 !== frame.length) throw new Error('Wire length invalid');
  const plain = frame.subarray(6, 6 + length);
  if (frame.readUInt16BE(frame.length - 2) !== checksum16(plain)) throw new Error('Wire checksum invalid');
  return plain;
}

function encode(text, key) {
  if (typeof text !== 'string') throw new Error('Wire text required');
  return encodeBytes(Buffer.from(text, 'utf8'), key);
}

function decode(text) {
  return decoder.decode(decodeBytes(text));
}

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function wrap(body, nonce, now = Math.floor(Date.now() / 1000)) {
  if (!isObject(body) || typeof nonce !== 'string' || !/^[a-f0-9]{32}$/.test(nonce) || !Number.isSafeInteger(now)) {
    throw new Error('Wire packet metadata invalid');
  }
  const packet = { v: 1, n: nonce, t: now, b: body };
  const envelope = { w: VERSION };
  // Keep the existing protected-script byte array out of Morse expansion.
  // Its digest is carried in the framed metadata; this is integrity framing,
  // not a keyed MAC or a new authorization mechanism.
  if (Object.prototype.hasOwnProperty.call(body, 'Data')) {
    const data = body.Data;
    if (!Array.isArray(data) || data.length > MAX_BULK_BYTES || Object.keys(data).length !== data.length ||
        !data.every((byte) => Number.isInteger(byte) && byte >= 0 && byte <= 255)) throw new Error('Wire bulk invalid');
    packet.b = { ...body };
    delete packet.b.Data;
    packet.x = { t: 'bytes', l: data.length, h: crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex') };
    envelope.x = data;
  }
  envelope.d = encode(JSON.stringify(packet));
  return envelope;
}

function unwrap(envelope, { nonce = null, now = Math.floor(Date.now() / 1000) } = {}) {
  if (!isObject(envelope) || envelope.w !== VERSION) throw new Error('Wire version invalid');
  const packet = JSON.parse(decode(envelope.d));
  if (!isObject(packet) || packet.v !== 1 || typeof packet.n !== 'string' ||
      !/^[a-f0-9]{32}$/.test(packet.n) || !Number.isSafeInteger(packet.t) ||
      Math.abs(now - packet.t) > MAX_CLOCK_SKEW || !isObject(packet.b)) throw new Error('Wire packet invalid');
  if (nonce !== null && packet.n !== nonce) throw new Error('Wire nonce mismatch');
  if (packet.x !== undefined || Object.prototype.hasOwnProperty.call(envelope, 'x')) {
    const data = envelope.x;
    if (!isObject(packet.x) || packet.x.t !== 'bytes' || !Array.isArray(data) ||
        data.length > MAX_BULK_BYTES || data.length !== packet.x.l || Object.keys(data).length !== data.length ||
        !data.every((byte) => Number.isInteger(byte) && byte >= 0 && byte <= 255) ||
        typeof packet.x.h !== 'string' || !/^[a-f0-9]{64}$/.test(packet.x.h) ||
        Object.prototype.hasOwnProperty.call(packet.b, 'Data')) throw new Error('Wire bulk invalid');
    const digest = crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex');
    if (!crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(packet.x.h))) throw new Error('Wire bulk digest invalid');
    packet.b.Data = data;
  }
  return packet;
}

module.exports = {
  VERSION, KEY_BYTES, MAX_PLAIN_BYTES, MAX_WIRE_CHARS, MAX_CLOCK_SKEW, MAX_BULK_BYTES,
  checksum16, permutation, encodeBytes, decodeBytes, encode, decode, wrap, unwrap,
};
};

const moduleCache = Object.create(null);
function bundledRequire(id) {
  if (moduleCache[id]) return moduleCache[id].exports;
  const factory = factories[id];
  if (!factory) throw new Error('Missing internal module: ' + id);
  const module = { exports: {} };
  moduleCache[id] = module;
  const localRequire = (request) => {
    if (request.startsWith('node:')) return nodeRequire(request);
    if (!request.startsWith('.')) throw new Error('Unexpected external dependency');
    let target = path.posix.normalize(path.posix.join(path.posix.dirname(id), request));
    if (!target.endsWith('.js')) target += '.js';
    return bundledRequire(target);
  };
  const filename = path.join(PROJECT_ROOT, id);
  factory(module, module.exports, localRequire, filename, path.dirname(filename));
  return module.exports;
}
const authHandler = bundledRequire('api/auth.js');

function response(res) {
  if (typeof res.status !== 'function') res.status = (code) => { res.statusCode = code; return res; };
  if (typeof res.json !== 'function') res.json = (value) => {
    if (!res.getHeader('content-type')) res.setHeader('content-type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(value));
    return res;
  };
  if (typeof res.send !== 'function') res.send = (value = '') => {
    res.end(Buffer.isBuffer(value) || typeof value === 'string' ? value : JSON.stringify(value));
    return res;
  };
  return res;
}

const ROUTES = Object.freeze({
  '/loadc.lua': ['artifact', 'loadc'],
  '/999MS-sdk.lua': ['artifact', 'sdk'],
  '/api/health': ['health'],
  '/api/scripts': ['scripts-list'],
  '/api/games': ['game-info'],
  '/api/q': ['opaque'],
  '/api/link': ['link-create'],
  '/api/control/bans': ['control-bans'],
  '/api/control/traffic': ['control-traffic'],
  '/api/control/events': ['control-events'],
  '/api/control/stats': ['control-stats'],
  '/api/control/scripts': ['control-scripts'],
  '/api/verify': ['verify'],
  '/api/script': ['script'],
  '/api/script-raw': ['script-raw'],
  '/api/script-verify': ['script-verify'],
  '/api/start': ['start'],
  '/api/admin/ban': ['admin-ban'],
});
function route(req) {
  const url = new URL(req.url, 'http://gateway.local');
  const query = { ...Object.fromEntries(url.searchParams.entries()), ...(req.query || {}) };
  const entry = url.pathname.match(/^\/x\/([a-f0-9]{40})$/);
  const stage = url.pathname.match(/^\/([a-f0-9]{32}\.[0-9]{13}\.[a-f0-9]{32})$/);
  const mapped = ROUTES[url.pathname];
  if (entry) { query.action = 'link-serve'; query.p = entry[1]; }
  else if (stage) { query.action = 'artifact'; query.name = 'stage'; query.t = stage[1]; }
  else if (mapped) { query.action = mapped[0]; if (mapped[1]) query.name = mapped[1]; }
  else if (url.pathname !== '/api/auth') query.action = 'trap';
  req.query = query;
}

const MAX_JSON_BODY_BYTES = 4613734; // 4.4 MB (under Vercel's 4.5 MB platform limit)

async function handler(req, res) {
  response(res);
  const url = new URL(req.url, 'http://gateway.local');
  // Vercel rewrites the public pages to the same function with a page
  // selector; locally they are served straight from their own path.
  const pagePath = url.pathname === '/api/auth'
    ? (req.query?.page || url.searchParams.get('page'))
    : (url.pathname === '/' ? '/' : url.pathname.replace(/\/+$/, ''));
  if (pagePath === '/key') {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Location', '/scripts');
    return res.status(308).send('');
  }
  const page = Object.prototype.hasOwnProperty.call(EMBEDDED_PAGES, pagePath)
    ? EMBEDDED_PAGES[pagePath]
    : null;
  if (page) {
    if (req.method !== 'GET') return res.status(405).send('');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).send(page);
  }
  route(req);
  // Stage POSTs claim their capability before body parsing, including bad JSON.
  if (req.query.action === 'artifact' && req.query.name === 'stage') {
    return authHandler(req, res);
  }
  if (typeof req.body === 'string') {
    if (Buffer.byteLength(req.body) > MAX_JSON_BODY_BYTES) return res.status(413).json({ error: 'body too large' });
    try { req.body = JSON.parse(req.body); }
    catch { return res.status(400).json({ error: 'invalid json' }); }
  }
  return authHandler(req, res);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let total = 0;
    req.on('data', (chunk) => {
      total += chunk.length;
      if (total > MAX_JSON_BODY_BYTES) { reject(new Error('body too large')); req.destroy(); return; }
      chunks.push(chunk);
    });
    req.once('error', reject);
    req.once('end', () => {
      try { resolve(chunks.length ? JSON.parse(Buffer.concat(chunks).toString('utf8')) : {}); }
      catch { reject(new Error('invalid json')); }
    });
  });
}
function createServer() {
  return http.createServer(async (req, res) => {
    response(res);
    try {
      route(req);
      const isStage = req.query.action === 'artifact' && req.query.name === 'stage';
      if (!isStage) {
        if (req.method === 'POST' && String(req.headers['content-type'] || '').includes('application/json')) {
          req.body = await readBody(req);
        } else req.body = {};
      }
      await handler(req, res);
    } catch (error) {
      const status = error.message === 'invalid json' ? 400 : error.message === 'body too large' ? 413 : 500;
      if (!res.writableEnded && !res.destroyed) {
        res.status(status).json({ error: status === 500 ? 'Service unavailable' : error.message });
      }
    }
  });
}
module.exports = { handler, createServer };
if (require.main === module) {
  const port = Number.parseInt(process.env.PORT || '10000', 10);
  createServer().listen(port, '0.0.0.0', () => console.log('999MS API listening on ' + port));
}
