import{j as ne}from"./framer-motion-kFtXoL4_.js";import{c as Xo,a as gr,u as Hl,b as Ra,d as Ca,B as Kn,L as Pa}from"./index-nJKW7zSP.js";import{C as kl,a as Da,b as La,c as Ia,d as Ua,e as Na}from"./card-cVmdxmLc.js";import{I as Wl}from"./input-DVIXwaBe.js";import{r as De,e as Xl,f as ql,L as vi}from"./react-vendor-C1HZPQBF.js";import{u as Yl}from"./use-page-meta-vnqzm1YF.js";import{L as Fa}from"./leaf-BrOpf8D0.js";import{S as Oa}from"./sparkles-DiyHSdbc.js";import{M as Kl}from"./mail-Dqes-LAu.js";import{A as Ba}from"./arrow-right-4uvU8lpS.js";import"./radix-ui-b83sQlpf.js";import"./charts-BV_0ZDnt.js";const Zl=[["path",{d:"M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",key:"139s4v"}],["path",{d:"M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4",key:"1dlkgp"}],["path",{d:"M5 21h14",key:"11awu3"}]],za=Xo("sprout",Zl);const $l=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],Jl=Xo("user-x",$l);var Ql=Object.defineProperty,jl=Object.defineProperties,ec=Object.getOwnPropertyDescriptors,_r=Object.getOwnPropertySymbols,qo=Object.prototype.hasOwnProperty,Yo=Object.prototype.propertyIsEnumerable,Ga=(i,e,t)=>e in i?Ql(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,tc=(i,e)=>{for(var t in e||(e={}))qo.call(e,t)&&Ga(i,t,e[t]);if(_r)for(var t of _r(e))Yo.call(e,t)&&Ga(i,t,e[t]);return i},nc=(i,e)=>jl(i,ec(e)),ic=(i,e)=>{var t={};for(var n in i)qo.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&_r)for(var n of _r(i))e.indexOf(n)<0&&Yo.call(i,n)&&(t[n]=i[n]);return t};function rc(i){let e=setTimeout(i,0),t=setTimeout(i,10),n=setTimeout(i,50);return[e,t,n]}function sc(i){let e=De.useRef();return De.useEffect(()=>{e.current=i}),e.current}var ac=18,us=40,oc=`${us}px`;function Va(i){let e=i.getBoundingClientRect().right,t=i;for(;t;){if(getComputedStyle(t).overflowX!=="visible")return t.getBoundingClientRect().left+t.clientLeft+t.clientWidth-e;t=t.parentElement}return document.documentElement.clientWidth-e}var lc=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");function cc({containerRef:i,inputRef:e,pushPasswordManagerStrategy:t,isFocused:n}){let[r,s]=De.useState(!1),[a,o]=De.useState(!1),[c,l]=De.useState(!1),d=De.useMemo(()=>t==="none"?!1:(t==="increase-width"||t==="experimental-no-flickering")&&r&&a,[r,a,t]),p=De.useCallback(()=>{let u=i.current,g=e.current;if(!u||!g||c||t==="none")return;let x=u,S=x.getBoundingClientRect().left+x.offsetWidth,m=x.getBoundingClientRect().top+x.offsetHeight/2,h=S-ac,T=m;document.querySelectorAll(lc).length===0&&document.elementFromPoint(h,T)===u||(o(Va(u)>=us),s(!0),l(!0))},[i,e,c,t]);return De.useEffect(()=>{let u=i.current;if(!u||t==="none")return;function g(){o(Va(u)>=us)}g();let x=setInterval(g,1e3);return()=>{clearInterval(x)}},[i,t]),De.useEffect(()=>{let u=n||document.activeElement===e.current;if(t==="none"||!u)return;let g=setTimeout(p,0),x=setTimeout(p,2e3),S=setTimeout(p,5e3),m=setTimeout(()=>{l(!0)},6e3);return()=>{clearTimeout(g),clearTimeout(x),clearTimeout(S),clearTimeout(m)}},[e,n,t,p]),{hasPWMBadge:r,willPushPWMBadge:d,PWM_BADGE_SPACE_WIDTH:oc}}var Ko=De.createContext({}),Zo=De.forwardRef((i,e)=>{var t=i,{value:n,onChange:r,maxLength:s,textAlign:a="left",pattern:o,placeholder:c,inputMode:l="numeric",onComplete:d,pushPasswordManagerStrategy:p="increase-width",pasteTransformer:u,containerClassName:g,noScriptCSSFallback:x=uc,nonce:S,render:m,children:h}=t,T=ic(t,["value","onChange","maxLength","textAlign","pattern","placeholder","inputMode","onComplete","pushPasswordManagerStrategy","pasteTransformer","containerClassName","noScriptCSSFallback","nonce","render","children"]),R,M,A,b,w;let[_,E]=De.useState(typeof T.defaultValue=="string"?T.defaultValue:""),C=n??_,P=sc(C),I=De.useCallback(ve=>{r?.(ve),E(ve)},[r]),W=De.useMemo(()=>o?typeof o=="string"?new RegExp(o):o:null,[o]),V=De.useRef(null),O=De.useRef(null),X=De.useRef({value:C,onChange:I,isIOS:typeof window<"u"&&((M=(R=window?.CSS)==null?void 0:R.supports)==null?void 0:M.call(R,"-webkit-touch-callout","none"))}),k=De.useRef({prev:[(A=V.current)==null?void 0:A.selectionStart,(b=V.current)==null?void 0:b.selectionEnd,(w=V.current)==null?void 0:w.selectionDirection]});De.useImperativeHandle(e,()=>V.current,[]),De.useEffect(()=>{let ve=V.current,xe=O.current;if(!ve||!xe)return;X.current.value!==ve.value&&X.current.onChange(ve.value),k.current.prev=[ve.selectionStart,ve.selectionEnd,ve.selectionDirection];function Le(){if(document.activeElement!==ve){ze(null),Ge(null);return}let Fe=ve.selectionStart,Xe=ve.selectionEnd,rt=ve.selectionDirection,D=ve.maxLength,dt=ve.value,ke=k.current.prev,y=-1,f=-1,N;if(dt.length!==0&&Fe!==null&&Xe!==null){let ae=Fe===Xe,K=Fe===dt.length&&dt.length<D;if(ae&&!K){let J=Fe;if(J===0)y=0,f=1,N="forward";else if(J===D)y=J-1,f=J,N="backward";else if(D>1&&dt.length>1){let se=0;if(ke[0]!==null&&ke[1]!==null){N=J<ke[1]?"backward":"forward";let Te=ke[0]===ke[1]&&ke[0]<D;N==="backward"&&!Te&&(se=-1)}y=se+J,f=se+J+1}}y!==-1&&f!==-1&&y!==f&&ve.setSelectionRange(y,f,N)}let G=y!==-1?y:Fe,q=f!==-1?f:Xe,re=N??rt;ze(G),Ge(q),k.current.prev=[G,q,re]}if(document.addEventListener("selectionchange",Le,{capture:!0}),Le(),document.activeElement===ve&&le(!0),!document.getElementById("input-otp-style")){let Fe=document.createElement("style");if(Fe.id="input-otp-style",S&&Fe.setAttribute("nonce",S),document.head.appendChild(Fe),Fe.sheet){let Xe="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";Mi(Fe.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),Mi(Fe.sheet,`[data-input-otp]:autofill { ${Xe} }`),Mi(Fe.sheet,`[data-input-otp]:-webkit-autofill { ${Xe} }`),Mi(Fe.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),Mi(Fe.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let je=()=>{xe&&xe.style.setProperty("--root-height",`${ve.clientHeight}px`)};je();let et=typeof ResizeObserver>"u"?null:new ResizeObserver(je);return et?.observe(ve),()=>{document.removeEventListener("selectionchange",Le,{capture:!0}),et?.disconnect()}},[]);let[j,te]=De.useState(!1),[ie,le]=De.useState(!1),[pe,ze]=De.useState(null),[Qe,Ge]=De.useState(null);De.useEffect(()=>{let ve=rc(()=>{var xe,Le,je,et;(xe=V.current)==null||xe.dispatchEvent(new Event("input"));let Fe=(Le=V.current)==null?void 0:Le.selectionStart,Xe=(je=V.current)==null?void 0:je.selectionEnd,rt=(et=V.current)==null?void 0:et.selectionDirection;Fe!==null&&Xe!==null&&(ze(Fe),Ge(Xe),k.current.prev=[Fe,Xe,rt])});return()=>{ve.forEach(xe=>clearTimeout(xe))}},[C,ie]),De.useEffect(()=>{P!==void 0&&C!==P&&P.length<s&&C.length===s&&d?.(C)},[s,d,P,C]);let Z=cc({containerRef:O,inputRef:V,pushPasswordManagerStrategy:p,isFocused:ie}),Y=De.useCallback(ve=>{let xe=ve.currentTarget.value.slice(0,s);if(xe.length>0&&W&&!W.test(xe)){ve.preventDefault();return}typeof P=="string"&&xe.length<P.length&&document.dispatchEvent(new Event("selectionchange")),I(xe)},[s,I,P,W]),$=De.useCallback(()=>{var ve;if(V.current){let xe=Math.min(V.current.value.length,s-1),Le=V.current.value.length;(ve=V.current)==null||ve.setSelectionRange(xe,Le),ze(xe),Ge(Le)}le(!0)},[s]),he=De.useCallback(ve=>{var xe,Le;let je=V.current;if(!u&&(!X.current.isIOS||!ve.clipboardData||!je))return;let et=ve.clipboardData.getData("text/plain"),Fe=u?u(et):et;ve.preventDefault();let Xe=(xe=V.current)==null?void 0:xe.selectionStart,rt=(Le=V.current)==null?void 0:Le.selectionEnd,D=(Xe!==rt?C.slice(0,Xe)+Fe+C.slice(rt):C.slice(0,Xe)+Fe+C.slice(Xe)).slice(0,s);if(D.length>0&&W&&!W.test(D))return;je.value=D,I(D);let dt=Math.min(D.length,s-1),ke=D.length;je.setSelectionRange(dt,ke),ze(dt),Ge(ke)},[s,I,u,W,C]),Ee=De.useMemo(()=>({position:"relative",cursor:T.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[T.disabled]),Re=De.useMemo(()=>({position:"absolute",inset:0,width:Z.willPushPWMBadge?`calc(100% + ${Z.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:Z.willPushPWMBadge?`inset(0 ${Z.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:a,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height, 16px)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[Z.PWM_BADGE_SPACE_WIDTH,Z.willPushPWMBadge,a]),ot=De.useMemo(()=>{var ve;return De.createElement("input",nc(tc({autoComplete:T.autoComplete||"one-time-code"},T),{"data-input-otp":!0,"data-input-otp-placeholder-shown":C.length===0||void 0,"data-input-otp-mss":pe,"data-input-otp-mse":Qe,inputMode:l,pattern:W?.source,"aria-placeholder":c,style:Re,maxLength:s,value:C,ref:V,spellCheck:(ve=T.spellCheck)!=null?ve:!1,onPaste:xe=>{var Le;he(xe),(Le=T.onPaste)==null||Le.call(T,xe)},onChange:Y,onMouseOver:xe=>{var Le;te(!0),(Le=T.onMouseOver)==null||Le.call(T,xe)},onMouseLeave:xe=>{var Le;te(!1),(Le=T.onMouseLeave)==null||Le.call(T,xe)},onFocus:xe=>{var Le;$(),(Le=T.onFocus)==null||Le.call(T,xe)},onBlur:xe=>{var Le;le(!1),(Le=T.onBlur)==null||Le.call(T,xe)}}))},[Y,$,he,l,Re,s,Qe,pe,c,T,W?.source,C]),Ve=De.useMemo(()=>({slots:Array.from({length:s}).map((ve,xe)=>{var Le;let je=ie&&pe!==null&&Qe!==null&&(pe===Qe&&xe===pe||xe>=pe&&xe<Qe),et=C[xe]!==void 0?C[xe]:null,Fe=C[0]!==void 0?null:(Le=c?.[xe])!=null?Le:null;return{char:et,placeholderChar:Fe,isActive:je,hasFakeCaret:je&&et===null}}),isFocused:ie,isHovering:!T.disabled&&j}),[ie,j,s,Qe,pe,c,T.disabled,C]),tt=De.useMemo(()=>m?m(Ve):De.createElement(Ko.Provider,{value:Ve},h),[h,Ve,m]);return De.createElement(De.Fragment,null,x!==null&&De.createElement("noscript",null,De.createElement("style",null,x)),De.createElement("div",{ref:O,"data-input-otp-container":!0,translate:"no",style:Ee,className:g},tt,De.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},ot)))});Zo.displayName="Input";function Mi(i,e){try{i.insertRule(e)}catch{console.warn("input-otp could not insert CSS rule:",e)}}var uc=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;function hc({className:i,containerClassName:e,...t}){return ne.jsx(Zo,{"data-slot":"input-otp",containerClassName:gr("flex items-center gap-2 has-disabled:opacity-50",e),className:gr("disabled:cursor-not-allowed",i),...t})}function dc({className:i,...e}){return ne.jsx("div",{"data-slot":"input-otp-group",className:gr("flex items-center",i),...e})}function fc({index:i,className:e,...t}){const n=De.useContext(Ko),{char:r,hasFakeCaret:s,isActive:a}=n?.slots[i]??{};return ne.jsxs("div",{"data-slot":"input-otp-slot","data-active":a,className:gr("data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",e),...t,children:[r,s&&ne.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:ne.jsx("div",{className:"animate-caret-blink bg-foreground h-4 w-px duration-1000"})})]})}const ia="185",pc=0,Ha=1,mc=2,ur=1,gc=2,Ri=3,Pn=0,It=1,Ht=2,pn=0,ci=1,ka=2,Wa=3,Xa=4,_c=5,Bn=100,xc=101,vc=102,Mc=103,Sc=104,Ec=200,yc=201,bc=202,Tc=203,hs=204,ds=205,Ac=206,wc=207,Rc=208,Cc=209,Pc=210,Dc=211,Lc=212,Ic=213,Uc=214,fs=0,ps=1,ms=2,di=3,gs=4,_s=5,xs=6,vs=7,$o=0,Nc=1,Fc=2,rn=0,Jo=1,Qo=2,jo=3,el=4,tl=5,nl=6,il=7,rl=300,kn=301,fi=302,Pr=303,Dr=304,br=306,Ms=1e3,fn=1001,Ss=1002,yt=1003,Oc=1004,Gi=1005,Rt=1006,Lr=1007,Gn=1008,Bt=1009,sl=1010,al=1011,Di=1012,ra=1013,an=1014,tn=1015,gn=1016,sa=1017,aa=1018,Li=1020,ol=35902,ll=35899,cl=1021,ul=1022,Yt=1023,_n=1026,Vn=1027,hl=1028,oa=1029,Wn=1030,la=1031,ca=1033,hr=33776,dr=33777,fr=33778,pr=33779,Es=35840,ys=35841,bs=35842,Ts=35843,As=36196,ws=37492,Rs=37496,Cs=37488,Ps=37489,xr=37490,Ds=37491,Ls=37808,Is=37809,Us=37810,Ns=37811,Fs=37812,Os=37813,Bs=37814,zs=37815,Gs=37816,Vs=37817,Hs=37818,ks=37819,Ws=37820,Xs=37821,qs=36492,Ys=36494,Ks=36495,Zs=36283,$s=36284,vr=36285,Js=36286,Bc=3200,Qs=0,zc=1,Rn="",Vt="srgb",Mr="srgb-linear",Sr="linear",nt="srgb",Zn=7680,qa=519,Gc=512,Vc=513,Hc=514,ua=515,kc=516,Wc=517,ha=518,Xc=519,Ya=35044,Ka="300 es",nn=2e3,Ii=2001;function qc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yc(){const i=Er("canvas");return i.style.display="block",i}const Za={};function $a(...i){const e="THREE."+i.shift();console.log(e,...i)}function dl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ue(...i){i=dl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Je(...i){i=dl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ui(...i){const e=i.join(" ");e in Za||(Za[e]=!0,Ue(...i))}function Kc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Zc={[fs]:ps,[ms]:xs,[gs]:vs,[di]:_s,[ps]:fs,[xs]:ms,[vs]:gs,[_s]:di};class Xn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ir=Math.PI/180,js=180/Math.PI;function Ui(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function $c(i,e){return(i%e+e)%e}function Ur(i,e,t){return(1-t)*i+t*e}function Si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class qe{static{qe.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],d=n[r+2],p=n[r+3],u=s[a+0],g=s[a+1],x=s[a+2],S=s[a+3];if(p!==S||c!==u||l!==g||d!==x){let m=c*u+l*g+d*x+p*S;m<0&&(u=-u,g=-g,x=-x,S=-S,m=-m);let h=1-o;if(m<.9995){const T=Math.acos(m),R=Math.sin(T);h=Math.sin(h*T)/R,o=Math.sin(o*T)/R,c=c*h+u*o,l=l*h+g*o,d=d*h+x*o,p=p*h+S*o}else{c=c*h+u*o,l=l*h+g*o,d=d*h+x*o,p=p*h+S*o;const T=1/Math.sqrt(c*c+l*l+d*d+p*p);c*=T,l*=T,d*=T,p*=T}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],d=n[r+3],p=s[a],u=s[a+1],g=s[a+2],x=s[a+3];return e[t]=o*x+d*p+c*g-l*u,e[t+1]=c*x+d*u+l*p-o*g,e[t+2]=l*x+d*g+o*u-c*p,e[t+3]=d*x-o*p-c*u-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(r/2),p=o(s/2),u=c(n/2),g=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=u*d*p+l*g*x,this._y=l*g*p-u*d*x,this._z=l*d*x+u*g*p,this._w=l*d*p-u*g*x;break;case"YXZ":this._x=u*d*p+l*g*x,this._y=l*g*p-u*d*x,this._z=l*d*x-u*g*p,this._w=l*d*p+u*g*x;break;case"ZXY":this._x=u*d*p-l*g*x,this._y=l*g*p+u*d*x,this._z=l*d*x+u*g*p,this._w=l*d*p-u*g*x;break;case"ZYX":this._x=u*d*p-l*g*x,this._y=l*g*p+u*d*x,this._z=l*d*x-u*g*p,this._w=l*d*p+u*g*x;break;case"YZX":this._x=u*d*p+l*g*x,this._y=l*g*p+u*d*x,this._z=l*d*x-u*g*p,this._w=l*d*p-u*g*x;break;case"XZY":this._x=u*d*p-l*g*x,this._y=l*g*p-u*d*x,this._z=l*d*x+u*g*p,this._w=l*d*p+u*g*x;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],p=t[10],u=n+o+p;if(u>0){const g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(d-c)*g,this._y=(s-l)*g,this._z=(a-r)*g}else if(n>o&&n>p){const g=2*Math.sqrt(1+n-o-p);this._w=(d-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+l)/g}else if(o>p){const g=2*Math.sqrt(1+o-n-p);this._w=(s-l)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+d)/g}else{const g=2*Math.sqrt(1+p-n-o);this._w=(a-r)/g,this._x=(s+l)/g,this._y=(c+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+r*l-s*c,this._y=r*d+a*c+s*o-n*l,this._z=s*d+a*l+n*c-r*o,this._w=a*d-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{static{F.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ja.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ja.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),d=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+c*l+a*p-o*d,this.y=n+c*d+o*l-s*p,this.z=r+c*p+s*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nr.copy(this).projectOnVector(e),this.sub(Nr)}reflect(e){return this.sub(Nr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nr=new F,Ja=new gi;class Ne{static{Ne.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],p=n[7],u=n[2],g=n[5],x=n[8],S=r[0],m=r[3],h=r[6],T=r[1],R=r[4],M=r[7],A=r[2],b=r[5],w=r[8];return s[0]=a*S+o*T+c*A,s[3]=a*m+o*R+c*b,s[6]=a*h+o*M+c*w,s[1]=l*S+d*T+p*A,s[4]=l*m+d*R+p*b,s[7]=l*h+d*M+p*w,s[2]=u*S+g*T+x*A,s[5]=u*m+g*R+x*b,s[8]=u*h+g*M+x*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*s*d+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],p=d*a-o*l,u=o*c-d*s,g=l*s-a*c,x=t*p+n*u+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=p*S,e[1]=(r*l-d*n)*S,e[2]=(o*n-r*a)*S,e[3]=u*S,e[4]=(d*t-r*c)*S,e[5]=(r*s-o*t)*S,e[6]=g*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ui("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fr.makeScale(e,t)),this}rotate(e){return ui("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fr.makeRotation(-e)),this}translate(e,t){return ui("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fr=new Ne,Qa=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ja=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jc(){const i={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=mn(r.r),r.g=mn(r.g),r.b=mn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=hi(r.r),r.g=hi(r.g),r.b=hi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rn?Sr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mr]:{primaries:e,whitePoint:n,transfer:Sr,toXYZ:Qa,fromXYZ:ja,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Qa,fromXYZ:ja,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}const Ye=Jc();function mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $n;class Qc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$n===void 0&&($n=Er("canvas")),$n.width=e.width,$n.height=e.height;const r=$n.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=$n}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Er("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mn(t[n]/255)*255):t[n]=mn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jc=0;class da{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Or(r[a].image)):s.push(Or(r[a]))}else s=Or(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Or(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let eu=0;const Br=new F;class Pt extends Xn{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=fn,r=fn,s=Rt,a=Gn,o=Yt,c=Bt,l=Pt.DEFAULT_ANISOTROPY,d=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Ui(),this.name="",this.source=new da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Br).x}get height(){return this.source.getSize(Br).y}get depth(){return this.source.getSize(Br).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ms:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case Ss:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ms:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case Ss:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=rl;Pt.DEFAULT_ANISOTROPY=1;class ht{static{ht.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],d=c[4],p=c[8],u=c[1],g=c[5],x=c[9],S=c[2],m=c[6],h=c[10];if(Math.abs(d-u)<.01&&Math.abs(p-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+S)<.1&&Math.abs(x+m)<.1&&Math.abs(l+g+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,M=(g+1)/2,A=(h+1)/2,b=(d+u)/4,w=(p+S)/4,_=(x+m)/4;return R>M&&R>A?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=b/n,s=w/n):M>A?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=b/r,s=_/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=w/s,r=_/s),this.set(n,r,s,t),this}let T=Math.sqrt((m-x)*(m-x)+(p-S)*(p-S)+(u-d)*(u-d));return Math.abs(T)<.001&&(T=1),this.x=(m-x)/T,this.y=(p-S)/T,this.z=(u-d)/T,this.w=Math.acos((l+g+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tu extends Xn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Pt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new da(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends tu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fl extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nu extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ut{static{ut.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,o,c,l,d,p,u,g,x,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,d,p,u,g,x,S,m)}set(e,t,n,r,s,a,o,c,l,d,p,u,g,x,S,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=d,h[10]=p,h[14]=u,h[3]=g,h[7]=x,h[11]=S,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Jn.setFromMatrixColumn(e,0).length(),s=1/Jn.setFromMatrixColumn(e,1).length(),a=1/Jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const u=a*d,g=a*p,x=o*d,S=o*p;t[0]=c*d,t[4]=-c*p,t[8]=l,t[1]=g+x*l,t[5]=u-S*l,t[9]=-o*c,t[2]=S-u*l,t[6]=x+g*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*d,g=c*p,x=l*d,S=l*p;t[0]=u+S*o,t[4]=x*o-g,t[8]=a*l,t[1]=a*p,t[5]=a*d,t[9]=-o,t[2]=g*o-x,t[6]=S+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*d,g=c*p,x=l*d,S=l*p;t[0]=u-S*o,t[4]=-a*p,t[8]=x+g*o,t[1]=g+x*o,t[5]=a*d,t[9]=S-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*d,g=a*p,x=o*d,S=o*p;t[0]=c*d,t[4]=x*l-g,t[8]=u*l+S,t[1]=c*p,t[5]=S*l+u,t[9]=g*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,g=a*l,x=o*c,S=o*l;t[0]=c*d,t[4]=S-u*p,t[8]=x*p+g,t[1]=p,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=g*p+x,t[10]=u-S*p}else if(e.order==="XZY"){const u=a*c,g=a*l,x=o*c,S=o*l;t[0]=c*d,t[4]=-p,t[8]=l*d,t[1]=u*p+S,t[5]=a*d,t[9]=g*p-x,t[2]=x*p-g,t[6]=o*d,t[10]=S*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iu,e,ru)}lookAt(e,t,n){const r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Sn.crossVectors(n,Nt),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Sn.crossVectors(n,Nt)),Sn.normalize(),Vi.crossVectors(Nt,Sn),r[0]=Sn.x,r[4]=Vi.x,r[8]=Nt.x,r[1]=Sn.y,r[5]=Vi.y,r[9]=Nt.y,r[2]=Sn.z,r[6]=Vi.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],p=n[5],u=n[9],g=n[13],x=n[2],S=n[6],m=n[10],h=n[14],T=n[3],R=n[7],M=n[11],A=n[15],b=r[0],w=r[4],_=r[8],E=r[12],C=r[1],P=r[5],I=r[9],W=r[13],V=r[2],O=r[6],X=r[10],k=r[14],j=r[3],te=r[7],ie=r[11],le=r[15];return s[0]=a*b+o*C+c*V+l*j,s[4]=a*w+o*P+c*O+l*te,s[8]=a*_+o*I+c*X+l*ie,s[12]=a*E+o*W+c*k+l*le,s[1]=d*b+p*C+u*V+g*j,s[5]=d*w+p*P+u*O+g*te,s[9]=d*_+p*I+u*X+g*ie,s[13]=d*E+p*W+u*k+g*le,s[2]=x*b+S*C+m*V+h*j,s[6]=x*w+S*P+m*O+h*te,s[10]=x*_+S*I+m*X+h*ie,s[14]=x*E+S*W+m*k+h*le,s[3]=T*b+R*C+M*V+A*j,s[7]=T*w+R*P+M*O+A*te,s[11]=T*_+R*I+M*X+A*ie,s[15]=T*E+R*W+M*k+A*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],p=e[6],u=e[10],g=e[14],x=e[3],S=e[7],m=e[11],h=e[15],T=c*g-l*u,R=o*g-l*p,M=o*u-c*p,A=a*g-l*d,b=a*u-c*d,w=a*p-o*d;return t*(S*T-m*R+h*M)-n*(x*T-m*A+h*b)+r*(x*R-S*A+h*w)-s*(x*M-S*b+m*w)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(a*d-o*l)-n*(s*d-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],p=e[9],u=e[10],g=e[11],x=e[12],S=e[13],m=e[14],h=e[15],T=t*o-n*a,R=t*c-r*a,M=t*l-s*a,A=n*c-r*o,b=n*l-s*o,w=r*l-s*c,_=d*S-p*x,E=d*m-u*x,C=d*h-g*x,P=p*m-u*S,I=p*h-g*S,W=u*h-g*m,V=T*W-R*I+M*P+A*C-b*E+w*_;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/V;return e[0]=(o*W-c*I+l*P)*O,e[1]=(r*I-n*W-s*P)*O,e[2]=(S*w-m*b+h*A)*O,e[3]=(u*b-p*w-g*A)*O,e[4]=(c*C-a*W-l*E)*O,e[5]=(t*W-r*C+s*E)*O,e[6]=(m*M-x*w-h*R)*O,e[7]=(d*w-u*M+g*R)*O,e[8]=(a*I-o*C+l*_)*O,e[9]=(n*C-t*I-s*_)*O,e[10]=(x*b-S*M+h*T)*O,e[11]=(p*M-d*b-g*T)*O,e[12]=(o*E-a*P-c*_)*O,e[13]=(t*P-n*E+r*_)*O,e[14]=(S*R-x*A-m*T)*O,e[15]=(d*A-p*R+u*T)*O,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,d=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,d*o+n,d*c-r*a,0,l*c-r*o,d*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,d=a+a,p=o+o,u=s*l,g=s*d,x=s*p,S=a*d,m=a*p,h=o*p,T=c*l,R=c*d,M=c*p,A=n.x,b=n.y,w=n.z;return r[0]=(1-(S+h))*A,r[1]=(g+M)*A,r[2]=(x-R)*A,r[3]=0,r[4]=(g-M)*b,r[5]=(1-(u+h))*b,r[6]=(m+T)*b,r[7]=0,r[8]=(x+R)*w,r[9]=(m-T)*w,r[10]=(1-(u+S))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Jn.set(r[0],r[1],r[2]).length();const o=Jn.set(r[4],r[5],r[6]).length(),c=Jn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),kt.copy(this);const l=1/a,d=1/o,p=1/c;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=d,kt.elements[5]*=d,kt.elements[6]*=d,kt.elements[8]*=p,kt.elements[9]*=p,kt.elements[10]*=p,t.setFromRotationMatrix(kt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=nn,c=!1){const l=this.elements,d=2*s/(t-e),p=2*s/(n-r),u=(t+e)/(t-e),g=(n+r)/(n-r);let x,S;if(c)x=s/(a-s),S=a*s/(a-s);else if(o===nn)x=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Ii)x=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=p,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=nn,c=!1){const l=this.elements,d=2/(t-e),p=2/(n-r),u=-(t+e)/(t-e),g=-(n+r)/(n-r);let x,S;if(c)x=1/(a-s),S=a/(a-s);else if(o===nn)x=-2/(a-s),S=-(a+s)/(a-s);else if(o===Ii)x=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=p,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=x,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Jn=new F,kt=new ut,iu=new F(0,0,0),ru=new F(1,1,1),Sn=new F,Vi=new F,Nt=new F,eo=new ut,to=new gi;class Dn{constructor(e=0,t=0,n=0,r=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],d=r[9],p=r[2],u=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return to.setFromEuler(this),this.setFromQuaternion(to,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class pl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let su=0;const no=new F,Qn=new gi,ln=new ut,Hi=new F,Ei=new F,au=new F,ou=new gi,io=new F(1,0,0),ro=new F(0,1,0),so=new F(0,0,1),ao={type:"added"},lu={type:"removed"},jn={type:"childadded",child:null},zr={type:"childremoved",child:null};class bt extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new F,t=new Dn,n=new gi,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ne}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.premultiply(Qn),this}rotateX(e){return this.rotateOnAxis(io,e)}rotateY(e){return this.rotateOnAxis(ro,e)}rotateZ(e){return this.rotateOnAxis(so,e)}translateOnAxis(e,t){return no.copy(e).applyQuaternion(this.quaternion),this.position.add(no.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(io,e)}translateY(e){return this.translateOnAxis(ro,e)}translateZ(e){return this.translateOnAxis(so,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hi.copy(e):Hi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Ei,Hi,this.up):ln.lookAt(Hi,Ei,this.up),this.quaternion.setFromRotationMatrix(ln),r&&(ln.extractRotation(r.matrixWorld),Qn.setFromRotationMatrix(ln),this.quaternion.premultiply(Qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ao),jn.child=e,this.dispatchEvent(jn),jn.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lu),zr.child=e,this.dispatchEvent(zr),zr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ao),jn.child=e,this.dispatchEvent(jn),jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,e,au),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,ou,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),p=a(e.shapes),u=a(e.skeletons),g=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}bt.DEFAULT_UP=new F(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hn extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cu={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),h=this._getHandJoint(l,S);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=d.position.distanceTo(p.position),g=.02,x=.005;l.inputState.pinching&&u>g+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=g-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cu)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},ki={h:0,s:0,l:0};function Vr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ye.workingColorSpace){if(e=$c(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Vr(a,s,e+1/3),this.g=Vr(a,s,e),this.b=Vr(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=ml[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mn(e.r),this.g=mn(e.g),this.b=mn(e.b),this}copyLinearToSRGB(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Ye.workingToColorSpace(wt.copy(this),e),Math.round(Ke(wt.r*255,0,255))*65536+Math.round(Ke(wt.g*255,0,255))*256+Math.round(Ke(wt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(wt.copy(this),t);const n=wt.r,r=wt.g,s=wt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=d<=.5?p/(a+o):p/(2-a-o),a){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Vt){Ye.workingToColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,r=wt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(En),this.setHSL(En.h+e,En.s+t,En.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(ki);const n=Ur(En.h,ki.h,t),r=Ur(En.s,ki.s,t),s=Ur(En.l,ki.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Ze;Ze.NAMES=ml;class uu extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Wt=new F,cn=new F,Hr=new F,un=new F,ei=new F,ti=new F,oo=new F,kr=new F,Wr=new F,Xr=new F,qr=new ht,Yr=new ht,Kr=new ht;class qt{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wt.subVectors(e,t),r.cross(Wt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Wt.subVectors(r,t),cn.subVectors(n,t),Hr.subVectors(e,t);const a=Wt.dot(Wt),o=Wt.dot(cn),c=Wt.dot(Hr),l=cn.dot(cn),d=cn.dot(Hr),p=a*l-o*o;if(p===0)return s.set(0,0,0),null;const u=1/p,g=(l*c-o*d)*u,x=(a*d-o*c)*u;return s.set(1-g-x,x,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,un.x),c.addScaledVector(a,un.y),c.addScaledVector(o,un.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return qr.setScalar(0),Yr.setScalar(0),Kr.setScalar(0),qr.fromBufferAttribute(e,t),Yr.fromBufferAttribute(e,n),Kr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qr,s.x),a.addScaledVector(Yr,s.y),a.addScaledVector(Kr,s.z),a}static isFrontFacing(e,t,n,r){return Wt.subVectors(n,t),cn.subVectors(e,t),Wt.cross(cn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Wt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ei.subVectors(r,n),ti.subVectors(s,n),kr.subVectors(e,n);const c=ei.dot(kr),l=ti.dot(kr);if(c<=0&&l<=0)return t.copy(n);Wr.subVectors(e,r);const d=ei.dot(Wr),p=ti.dot(Wr);if(d>=0&&p<=d)return t.copy(r);const u=c*p-d*l;if(u<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(ei,a);Xr.subVectors(e,s);const g=ei.dot(Xr),x=ti.dot(Xr);if(x>=0&&g<=x)return t.copy(s);const S=g*l-c*x;if(S<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(ti,o);const m=d*x-g*p;if(m<=0&&p-d>=0&&g-x>=0)return oo.subVectors(s,r),o=(p-d)/(p-d+(g-x)),t.copy(r).addScaledVector(oo,o);const h=1/(m+S+u);return a=S*h,o=u*h,t.copy(n).addScaledVector(ei,a).addScaledVector(ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ni{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xt):Xt.fromBufferAttribute(s,a),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wi.copy(n.boundingBox)),Wi.applyMatrix4(e.matrixWorld),this.union(Wi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yi),Xi.subVectors(this.max,yi),ni.subVectors(e.a,yi),ii.subVectors(e.b,yi),ri.subVectors(e.c,yi),yn.subVectors(ii,ni),bn.subVectors(ri,ii),In.subVectors(ni,ri);let t=[0,-yn.z,yn.y,0,-bn.z,bn.y,0,-In.z,In.y,yn.z,0,-yn.x,bn.z,0,-bn.x,In.z,0,-In.x,-yn.y,yn.x,0,-bn.y,bn.x,0,-In.y,In.x,0];return!Zr(t,ni,ii,ri,Xi)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,ni,ii,ri,Xi))?!1:(qi.crossVectors(yn,bn),t=[qi.x,qi.y,qi.z],Zr(t,ni,ii,ri,Xi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hn=[new F,new F,new F,new F,new F,new F,new F,new F],Xt=new F,Wi=new Ni,ni=new F,ii=new F,ri=new F,yn=new F,bn=new F,In=new F,yi=new F,Xi=new F,qi=new F,Un=new F;function Zr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Un.fromArray(i,s);const o=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),c=e.dot(Un),l=t.dot(Un),d=n.dot(Un);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const xt=new F,Yi=new qe;let hu=0;class Kt extends Xn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ya,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yi.fromBufferAttribute(this,t),Yi.applyMatrix3(e),this.setXY(t,Yi.x,Yi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ya&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class gl extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _l extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _t extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const du=new Ni,bi=new F,$r=new F;class Tr{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):du.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bi.subVectors(e,this.center);const t=bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(bi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($r.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bi.copy(e.center).add($r)),this.expandByPoint(bi.copy(e.center).sub($r))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let fu=0;const Gt=new ut,Jr=new bt,si=new F,Ft=new Ni,Ti=new Ni,Et=new F;class Dt extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qc(e)?_l:gl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Jr.lookAt(e),Jr.updateMatrix(),this.applyMatrix4(Jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Ft.min,Ti.min),Ft.expandByPoint(Et),Et.addVectors(Ft.max,Ti.max),Ft.expandByPoint(Et)):(Ft.expandByPoint(Ti.min),Ft.expandByPoint(Ti.max))}Ft.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Et.fromBufferAttribute(o,l),c&&(si.fromBufferAttribute(e,l),Et.add(si)),r=Math.max(r,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new F,c[_]=new F;const l=new F,d=new F,p=new F,u=new qe,g=new qe,x=new qe,S=new F,m=new F;function h(_,E,C){l.fromBufferAttribute(n,_),d.fromBufferAttribute(n,E),p.fromBufferAttribute(n,C),u.fromBufferAttribute(s,_),g.fromBufferAttribute(s,E),x.fromBufferAttribute(s,C),d.sub(l),p.sub(l),g.sub(u),x.sub(u);const P=1/(g.x*x.y-x.x*g.y);isFinite(P)&&(S.copy(d).multiplyScalar(x.y).addScaledVector(p,-g.y).multiplyScalar(P),m.copy(p).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(P),o[_].add(S),o[E].add(S),o[C].add(S),c[_].add(m),c[E].add(m),c[C].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let _=0,E=T.length;_<E;++_){const C=T[_],P=C.start,I=C.count;for(let W=P,V=P+I;W<V;W+=3)h(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const R=new F,M=new F,A=new F,b=new F;function w(_){A.fromBufferAttribute(r,_),b.copy(A);const E=o[_];R.copy(E),R.sub(A.multiplyScalar(A.dot(E))).normalize(),M.crossVectors(b,E);const P=M.dot(c[_])<0?-1:1;a.setXYZW(_,R.x,R.y,R.z,P)}for(let _=0,E=T.length;_<E;++_){const C=T[_],P=C.start,I=C.count;for(let W=P,V=P+I;W<V;W+=3)w(e.getX(W+0)),w(e.getX(W+1)),w(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,g=n.count;u<g;u++)n.setXYZ(u,0,0,0);const r=new F,s=new F,a=new F,o=new F,c=new F,l=new F,d=new F,p=new F;if(e)for(let u=0,g=e.count;u<g;u+=3){const x=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,g=t.count;u<g;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,p=o.normalized,u=new l.constructor(c.length*d);let g=0,x=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?g=c[S]*o.data.stride+o.offset:g=c[S]*d;for(let h=0;h<d;h++)u[x++]=l[g++]}return new Kt(u,d,p)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,p=l.length;d<p;d++){const u=l[d],g=e(u,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let p=0,u=l.length;p<u;p++){const g=l[p];d.push(g.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],p=s[l];for(let u=0,g=p.length;u<g;u++)d.push(p[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let pu=0;class _i extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=ci,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hs,this.blendDst=ds,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hs&&(n.blendSrc=this.blendSrc),this.blendDst!==ds&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const dn=new F,Qr=new F,Ki=new F,Tn=new F,jr=new F,Zi=new F,es=new F;class xl{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qr.copy(e).add(t).multiplyScalar(.5),Ki.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(Qr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ki),o=Tn.dot(this.direction),c=-Tn.dot(Ki),l=Tn.lengthSq(),d=Math.abs(1-a*a);let p,u,g,x;if(d>0)if(p=a*c-o,u=a*o-c,x=s*d,p>=0)if(u>=-x)if(u<=x){const S=1/d;p*=S,u*=S,g=p*(p+a*u+2*o)+u*(a*p+u+2*c)+l}else u=s,p=Math.max(0,-(a*u+o)),g=-p*p+u*(u+2*c)+l;else u=-s,p=Math.max(0,-(a*u+o)),g=-p*p+u*(u+2*c)+l;else u<=-x?(p=Math.max(0,-(-a*s+o)),u=p>0?-s:Math.min(Math.max(-s,-c),s),g=-p*p+u*(u+2*c)+l):u<=x?(p=0,u=Math.min(Math.max(-s,-c),s),g=u*(u+2*c)+l):(p=Math.max(0,-(a*s+o)),u=p>0?s:Math.min(Math.max(-s,-c),s),g=-p*p+u*(u+2*c)+l);else u=a>0?-s:s,p=Math.max(0,-(a*u+o)),g=-p*p+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Qr).addScaledVector(Ki,u),g}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),r=dn.dot(dn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-u.z)*p,c=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,c=(e.min.z-u.z)*p),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,r,s){jr.subVectors(t,e),Zi.subVectors(n,e),es.crossVectors(jr,Zi);let a=this.direction.dot(es),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,e);const c=o*this.direction.dot(Zi.crossVectors(Tn,Zi));if(c<0)return null;const l=o*this.direction.dot(jr.cross(Tn));if(l<0||c+l>a)return null;const d=-o*Tn.dot(es);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vl extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lo=new ut,Nn=new xl,$i=new Tr,co=new F,Ji=new F,Qi=new F,ji=new F,ts=new F,er=new F,uo=new F,tr=new F;class vt extends bt{constructor(e=new Dt,t=new vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){er.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],p=s[c];d!==0&&(ts.fromBufferAttribute(p,e),a?er.addScaledVector(ts,d):er.addScaledVector(ts.sub(t),d))}t.add(er)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(s),Nn.copy(e.ray).recast(e.near),!($i.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere($i,co)===null||Nn.origin.distanceToSquared(co)>(e.far-e.near)**2))&&(lo.copy(s).invert(),Nn.copy(e.ray).applyMatrix4(lo),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,u=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=u.length;x<S;x++){const m=u[x],h=a[m.materialIndex],T=Math.max(m.start,g.start),R=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let M=T,A=R;M<A;M+=3){const b=o.getX(M),w=o.getX(M+1),_=o.getX(M+2);r=nr(this,h,e,n,l,d,p,b,w,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let m=x,h=S;m<h;m+=3){const T=o.getX(m),R=o.getX(m+1),M=o.getX(m+2);r=nr(this,a,e,n,l,d,p,T,R,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,S=u.length;x<S;x++){const m=u[x],h=a[m.materialIndex],T=Math.max(m.start,g.start),R=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let M=T,A=R;M<A;M+=3){const b=M,w=M+1,_=M+2;r=nr(this,h,e,n,l,d,p,b,w,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),S=Math.min(c.count,g.start+g.count);for(let m=x,h=S;m<h;m+=3){const T=m,R=m+1,M=m+2;r=nr(this,a,e,n,l,d,p,T,R,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function mu(i,e,t,n,r,s,a,o){let c;if(e.side===It?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Pn,o),c===null)return null;tr.copy(o),tr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(tr);return l<t.near||l>t.far?null:{distance:l,point:tr.clone(),object:i}}function nr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Ji),i.getVertexPosition(c,Qi),i.getVertexPosition(l,ji);const d=mu(i,e,t,n,Ji,Qi,ji,uo);if(d){const p=new F;qt.getBarycoord(uo,Ji,Qi,ji,p),r&&(d.uv=qt.getInterpolatedAttribute(r,o,c,l,p,new qe)),s&&(d.uv1=qt.getInterpolatedAttribute(s,o,c,l,p,new qe)),a&&(d.normal=qt.getInterpolatedAttribute(a,o,c,l,p,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new F,materialIndex:0};qt.getNormal(Ji,Qi,ji,u.normal),d.face=u,d.barycoord=p}return d}class gu extends Pt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=yt,d=yt,p,u){super(null,a,o,c,l,d,r,s,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ns=new F,_u=new F,xu=new Ne;class On{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ns.subVectors(n,t).cross(_u.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(ns),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xu.getNormalMatrix(e),r=this.coplanarPoint(ns).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new Tr,vu=new qe(.5,.5),ir=new F;class fa{constructor(e=new On,t=new On,n=new On,r=new On,s=new On,a=new On){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],d=s[4],p=s[5],u=s[6],g=s[7],x=s[8],S=s[9],m=s[10],h=s[11],T=s[12],R=s[13],M=s[14],A=s[15];if(r[0].setComponents(l-a,g-d,h-x,A-T).normalize(),r[1].setComponents(l+a,g+d,h+x,A+T).normalize(),r[2].setComponents(l+o,g+p,h+S,A+R).normalize(),r[3].setComponents(l-o,g-p,h-S,A-R).normalize(),n)r[4].setComponents(c,u,m,M).normalize(),r[5].setComponents(l-c,g-u,h-m,A-M).normalize();else if(r[4].setComponents(l-c,g-u,h-m,A-M).normalize(),t===nn)r[5].setComponents(l+c,g+u,h+m,A+M).normalize();else if(t===Ii)r[5].setComponents(c,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){Fn.center.set(0,0,0);const t=vu.distanceTo(e.center);return Fn.radius=.7071067811865476+t,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ir.x=r.normal.x>0?e.max.x:e.min.x,ir.y=r.normal.y>0?e.max.y:e.min.y,ir.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ml extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ho=new ut,ea=new xl,rr=new Tr,sr=new F;class fo extends bt{constructor(e=new Dt,t=new Ml){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),rr.radius+=s,e.ray.intersectsSphere(rr)===!1)return;ho.copy(r).invert(),ea.copy(e.ray).applyMatrix4(ho);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,p=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),g=Math.min(l.count,a.start+a.count);for(let x=u,S=g;x<S;x++){const m=l.getX(x);sr.fromBufferAttribute(p,m),po(sr,m,c,r,e,t,this)}}else{const u=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let x=u,S=g;x<S;x++)sr.fromBufferAttribute(p,x),po(sr,x,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function po(i,e,t,n,r,s,a){const o=ea.distanceSqToPoint(i);if(o<t){const c=new F;ea.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Sl extends Pt{constructor(e=[],t=kn,n,r,s,a,o,c,l,d){super(e,t,n,r,s,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pi extends Pt{constructor(e,t,n=an,r,s,a,o=yt,c=yt,l,d=_n,p=1){if(d!==_n&&d!==Vn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:p};super(u,r,s,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new da(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Mu extends pi{constructor(e,t=an,n=kn,r,s,a=yt,o=yt,c,l=_n){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,r,s,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class El extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fi extends Dt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],p=[];let u=0,g=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(d,3)),this.setAttribute("uv",new _t(p,2));function x(S,m,h,T,R,M,A,b,w,_,E){const C=M/w,P=A/_,I=M/2,W=A/2,V=b/2,O=w+1,X=_+1;let k=0,j=0;const te=new F;for(let ie=0;ie<X;ie++){const le=ie*P-W;for(let pe=0;pe<O;pe++){const ze=pe*C-I;te[S]=ze*T,te[m]=le*R,te[h]=V,l.push(te.x,te.y,te.z),te[S]=0,te[m]=0,te[h]=b>0?1:-1,d.push(te.x,te.y,te.z),p.push(pe/w),p.push(1-ie/_),k+=1}}for(let ie=0;ie<_;ie++)for(let le=0;le<w;le++){const pe=u+le+O*ie,ze=u+le+O*(ie+1),Qe=u+(le+1)+O*(ie+1),Ge=u+(le+1)+O*ie;c.push(pe,ze,Ge),c.push(ze,Qe,Ge),j+=6}o.addGroup(g,j,E),g+=j,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pa extends Dt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new F,d=new qe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,u=3;p<=t;p++,u+=3){const g=n+p/t*r;l.x=e*Math.cos(g),l.y=e*Math.sin(g),a.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(a[u]/e+1)/2,d.y=(a[u+1]/e+1)/2,c.push(d.x,d.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(o,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ma extends Dt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const d=[],p=[],u=[],g=[];let x=0;const S=[],m=n/2;let h=0;T(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(d),this.setAttribute("position",new _t(p,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(g,2));function T(){const M=new F,A=new F;let b=0;const w=(t-e)/n;for(let _=0;_<=s;_++){const E=[],C=_/s,P=C*(t-e)+e;for(let I=0;I<=r;I++){const W=I/r,V=W*c+o,O=Math.sin(V),X=Math.cos(V);A.x=P*O,A.y=-C*n+m,A.z=P*X,p.push(A.x,A.y,A.z),M.set(O,w,X).normalize(),u.push(M.x,M.y,M.z),g.push(W,1-C),E.push(x++)}S.push(E)}for(let _=0;_<r;_++)for(let E=0;E<s;E++){const C=S[E][_],P=S[E+1][_],I=S[E+1][_+1],W=S[E][_+1];(e>0||E!==0)&&(d.push(C,P,W),b+=3),(t>0||E!==s-1)&&(d.push(P,I,W),b+=3)}l.addGroup(h,b,0),h+=b}function R(M){const A=x,b=new qe,w=new F;let _=0;const E=M===!0?e:t,C=M===!0?1:-1;for(let I=1;I<=r;I++)p.push(0,m*C,0),u.push(0,C,0),g.push(.5,.5),x++;const P=x;for(let I=0;I<=r;I++){const V=I/r*c+o,O=Math.cos(V),X=Math.sin(V);w.x=E*X,w.y=m*C,w.z=E*O,p.push(w.x,w.y,w.z),u.push(0,C,0),b.x=O*.5+.5,b.y=X*.5*C+.5,g.push(b.x,b.y),x++}for(let I=0;I<r;I++){const W=A+I,V=P+I;M===!0?d.push(V,V+1,W):d.push(V+1,V,W),_+=3}l.addGroup(h,_,M===!0?1:2),h+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ga extends ma{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ga(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oi extends Dt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,d=c+1,p=e/o,u=t/c,g=[],x=[],S=[],m=[];for(let h=0;h<d;h++){const T=h*u-a;for(let R=0;R<l;R++){const M=R*p-s;x.push(M,-T,0),S.push(0,0,1),m.push(R/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let T=0;T<o;T++){const R=T+l*h,M=T+l*(h+1),A=T+1+l*(h+1),b=T+1+l*h;g.push(R,M,b),g.push(M,A,b)}this.setIndex(g),this.setAttribute("position",new _t(x,3)),this.setAttribute("normal",new _t(S,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.widthSegments,e.heightSegments)}}class yr extends Dt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const d=[],p=new F,u=new F,g=[],x=[],S=[],m=[];for(let h=0;h<=n;h++){const T=[],R=h/n,M=a+R*o,A=e*Math.cos(M),b=Math.sqrt(e*e-A*A);let w=0;h===0&&a===0?w=.5/t:h===n&&c===Math.PI&&(w=-.5/t);for(let _=0;_<=t;_++){const E=_/t,C=r+E*s;p.x=-b*Math.cos(C),p.y=A,p.z=b*Math.sin(C),x.push(p.x,p.y,p.z),u.copy(p).normalize(),S.push(u.x,u.y,u.z),m.push(E+w,1-R),T.push(l++)}d.push(T)}for(let h=0;h<n;h++)for(let T=0;T<t;T++){const R=d[h][T+1],M=d[h][T],A=d[h+1][T],b=d[h+1][T+1];(h!==0||a>0)&&g.push(R,M,b),(h!==n-1||c<Math.PI)&&g.push(M,A,b)}this.setIndex(g),this.setAttribute("position",new _t(x,3)),this.setAttribute("normal",new _t(S,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pi extends Dt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const c=[],l=[],d=[],p=[],u=new F,g=new F,x=new F;for(let S=0;S<=n;S++){const m=a+S/n*o;for(let h=0;h<=r;h++){const T=h/r*s;g.x=(e+t*Math.cos(m))*Math.cos(T),g.y=(e+t*Math.cos(m))*Math.sin(T),g.z=t*Math.sin(m),l.push(g.x,g.y,g.z),u.x=e*Math.cos(T),u.y=e*Math.sin(T),x.subVectors(g,u).normalize(),d.push(x.x,x.y,x.z),p.push(h/r),p.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=r;m++){const h=(r+1)*S+m-1,T=(r+1)*(S-1)+m-1,R=(r+1)*(S-1)+m,M=(r+1)*S+m;c.push(h,T,M),c.push(T,R,M)}this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(d,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function mi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(mo(r))r.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(mo(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=mi(i[t]);for(const r in n)e[r]=n[r]}return e}function mo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Su(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Eu={clone:mi,merge:Ct};var yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yu,this.fragmentShader=bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=Su(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ze().setHex(r.value);break;case"v2":this.uniforms[n].value=new qe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new F().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ht().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ne().fromArray(r.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Tu extends on{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class An extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Au extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wu extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _a extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const is=new ut,go=new F,_o=new F;class bl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Bt,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;go.setFromMatrixPosition(e.matrixWorld),t.position.copy(go),_o.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_o),t.updateMatrixWorld(),is.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(is,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ii||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(is)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ar=new F,or=new gi,Qt=new F;class Tl extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ar,or,Qt),Qt.x===1&&Qt.y===1&&Qt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ar,or,Qt.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ar,or,Qt),Qt.x===1&&Qt.y===1&&Qt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ar,or,Qt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wn=new F,xo=new qe,vo=new qe;class Ot extends Tl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,xo,vo),t.subVectors(vo,xo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ru extends bl{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0}}class Mo extends _a{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Ru}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class xa extends Tl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cu extends bl{constructor(){super(new xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pu extends _a{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Cu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Du extends _a{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ai=-90,oi=1;class Lu extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ot(ai,oi,e,t);r.layers=this.layers,this.add(r);const s=new Ot(ai,oi,e,t);s.layers=this.layers,this.add(s);const a=new Ot(ai,oi,e,t);a.layers=this.layers,this.add(a);const o=new Ot(ai,oi,e,t);o.layers=this.layers,this.add(o);const c=new Ot(ai,oi,e,t);c.layers=this.layers,this.add(c);const l=new Ot(ai,oi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ii)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,u,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Iu extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Uu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ue("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Al{static{Al.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}}function So(i,e,t,n){const r=Nu(n);switch(t){case cl:return i*e;case hl:return i*e/r.components*r.byteLength;case oa:return i*e/r.components*r.byteLength;case Wn:return i*e*2/r.components*r.byteLength;case la:return i*e*2/r.components*r.byteLength;case ul:return i*e*3/r.components*r.byteLength;case Yt:return i*e*4/r.components*r.byteLength;case ca:return i*e*4/r.components*r.byteLength;case hr:case dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ys:case Ts:return Math.max(i,16)*Math.max(e,8)/4;case Es:case bs:return Math.max(i,8)*Math.max(e,8)/2;case As:case ws:case Cs:case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rs:case xr:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Is:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Us:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ns:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Fs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Os:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Gs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ks:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ws:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case qs:case Ys:case Ks:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zs:case $s:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vr:case Js:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nu(i){switch(i){case Bt:case sl:return{byteLength:1,components:1};case Di:case al:case gn:return{byteLength:2,components:1};case sa:case aa:return{byteLength:2,components:4};case an:case ra:case tn:return{byteLength:4,components:1};case ol:case ll:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);function wl(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Fu(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,p=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),o.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){const d=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,d);else{p.sort((g,x)=>g.start-x.start);let u=0;for(let g=1;g<p.length;g++){const x=p[u],S=p[g];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++u,p[u]=S)}p.length=u+1;for(let g=0,x=p.length;g<x;g++){const S=p[g];i.bufferSubData(l,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ku=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$u=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ju=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ih=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ah=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ph=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_h=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Th=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ah=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ch=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ph=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ih=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Oh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zh=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Gh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$h=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ed=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ad=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ud=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Md=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ed=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ad=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ld=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ef=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,af=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,of=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Ou,alphahash_pars_fragment:Bu,alphamap_fragment:zu,alphamap_pars_fragment:Gu,alphatest_fragment:Vu,alphatest_pars_fragment:Hu,aomap_fragment:ku,aomap_pars_fragment:Wu,batching_pars_vertex:Xu,batching_vertex:qu,begin_vertex:Yu,beginnormal_vertex:Ku,bsdfs:Zu,iridescence_fragment:$u,bumpmap_pars_fragment:Ju,clipping_planes_fragment:Qu,clipping_planes_pars_fragment:ju,clipping_planes_pars_vertex:eh,clipping_planes_vertex:th,color_fragment:nh,color_pars_fragment:ih,color_pars_vertex:rh,color_vertex:sh,common:ah,cube_uv_reflection_fragment:oh,defaultnormal_vertex:lh,displacementmap_pars_vertex:ch,displacementmap_vertex:uh,emissivemap_fragment:hh,emissivemap_pars_fragment:dh,colorspace_fragment:fh,colorspace_pars_fragment:ph,envmap_fragment:mh,envmap_common_pars_fragment:gh,envmap_pars_fragment:_h,envmap_pars_vertex:xh,envmap_physical_pars_fragment:Ch,envmap_vertex:vh,fog_vertex:Mh,fog_pars_vertex:Sh,fog_fragment:Eh,fog_pars_fragment:yh,gradientmap_pars_fragment:bh,lightmap_pars_fragment:Th,lights_lambert_fragment:Ah,lights_lambert_pars_fragment:wh,lights_pars_begin:Rh,lights_toon_fragment:Ph,lights_toon_pars_fragment:Dh,lights_phong_fragment:Lh,lights_phong_pars_fragment:Ih,lights_physical_fragment:Uh,lights_physical_pars_fragment:Nh,lights_fragment_begin:Fh,lights_fragment_maps:Oh,lights_fragment_end:Bh,lightprobes_pars_fragment:zh,logdepthbuf_fragment:Gh,logdepthbuf_pars_fragment:Vh,logdepthbuf_pars_vertex:Hh,logdepthbuf_vertex:kh,map_fragment:Wh,map_pars_fragment:Xh,map_particle_fragment:qh,map_particle_pars_fragment:Yh,metalnessmap_fragment:Kh,metalnessmap_pars_fragment:Zh,morphinstance_vertex:$h,morphcolor_vertex:Jh,morphnormal_vertex:Qh,morphtarget_pars_vertex:jh,morphtarget_vertex:ed,normal_fragment_begin:td,normal_fragment_maps:nd,normal_pars_fragment:id,normal_pars_vertex:rd,normal_vertex:sd,normalmap_pars_fragment:ad,clearcoat_normal_fragment_begin:od,clearcoat_normal_fragment_maps:ld,clearcoat_pars_fragment:cd,iridescence_pars_fragment:ud,opaque_fragment:hd,packing:dd,premultiplied_alpha_fragment:fd,project_vertex:pd,dithering_fragment:md,dithering_pars_fragment:gd,roughnessmap_fragment:_d,roughnessmap_pars_fragment:xd,shadowmap_pars_fragment:vd,shadowmap_pars_vertex:Md,shadowmap_vertex:Sd,shadowmask_pars_fragment:Ed,skinbase_vertex:yd,skinning_pars_vertex:bd,skinning_vertex:Td,skinnormal_vertex:Ad,specularmap_fragment:wd,specularmap_pars_fragment:Rd,tonemapping_fragment:Cd,tonemapping_pars_fragment:Pd,transmission_fragment:Dd,transmission_pars_fragment:Ld,uv_pars_fragment:Id,uv_pars_vertex:Ud,uv_vertex:Nd,worldpos_vertex:Fd,background_vert:Od,background_frag:Bd,backgroundCube_vert:zd,backgroundCube_frag:Gd,cube_vert:Vd,cube_frag:Hd,depth_vert:kd,depth_frag:Wd,distance_vert:Xd,distance_frag:qd,equirect_vert:Yd,equirect_frag:Kd,linedashed_vert:Zd,linedashed_frag:$d,meshbasic_vert:Jd,meshbasic_frag:Qd,meshlambert_vert:jd,meshlambert_frag:ef,meshmatcap_vert:tf,meshmatcap_frag:nf,meshnormal_vert:rf,meshnormal_frag:sf,meshphong_vert:af,meshphong_frag:of,meshphysical_vert:lf,meshphysical_frag:cf,meshtoon_vert:uf,meshtoon_frag:hf,points_vert:df,points_frag:ff,shadow_vert:pf,shadow_frag:mf,sprite_vert:gf,sprite_frag:_f},fe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},en={basic:{uniforms:Ct([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Ct([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Ct([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Ct([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Ct([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Ct([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Ct([fe.points,fe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Ct([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Ct([fe.common,fe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Ct([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Ct([fe.sprite,fe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Ct([fe.common,fe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Ct([fe.lights,fe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};en.physical={uniforms:Ct([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const lr={r:0,b:0,g:0},xf=new ut,Rl=new Ne;Rl.set(-1,0,0,0,1,0,0,0,1);function vf(i,e,t,n,r,s){const a=new Ze(0);let o=r===!0?0:1,c,l,d=null,p=0,u=null;function g(T){let R=T.isScene===!0?T.background:null;if(R&&R.isTexture){const M=T.backgroundBlurriness>0;R=e.get(R,M)}return R}function x(T){let R=!1;const M=g(T);M===null?m(a,o):M&&M.isColor&&(m(M,1),R=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(T,R){const M=g(R);M&&(M.isCubeTexture||M.mapping===br)?(l===void 0&&(l=new vt(new Fi(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:mi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(xf.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Rl),l.material.toneMapped=Ye.getTransfer(M.colorSpace)!==nt,(d!==M||p!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,p=M.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new vt(new Oi(2,2),new on({name:"BackgroundMaterial",uniforms:mi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(M.colorSpace)!==nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||p!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,p=M.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,R){T.getRGB(lr,yl(i)),t.buffers.color.setClear(lr.r,lr.g,lr.b,R,s)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,R=1){a.set(T),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:x,addToRenderList:S,dispose:h}}function Mf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(P,I,W,V,O){let X=!1;const k=p(P,V,W,I);s!==k&&(s=k,l(s.object)),X=g(P,V,W,O),X&&x(P,V,W,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(P,I,W,V),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function p(P,I,W,V){const O=V.wireframe===!0;let X=n[I.id];X===void 0&&(X={},n[I.id]=X);const k=P.isInstancedMesh===!0?P.id:0;let j=X[k];j===void 0&&(j={},X[k]=j);let te=j[W.id];te===void 0&&(te={},j[W.id]=te);let ie=te[O];return ie===void 0&&(ie=u(c()),te[O]=ie),ie}function u(P){const I=[],W=[],V=[];for(let O=0;O<t;O++)I[O]=0,W[O]=0,V[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:V,object:P,attributes:{},index:null}}function g(P,I,W,V){const O=s.attributes,X=I.attributes;let k=0;const j=W.getAttributes();for(const te in j)if(j[te].location>=0){const le=O[te];let pe=X[te];if(pe===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor)),le===void 0||le.attribute!==pe||pe&&le.data!==pe.data)return!0;k++}return s.attributesNum!==k||s.index!==V}function x(P,I,W,V){const O={},X=I.attributes;let k=0;const j=W.getAttributes();for(const te in j)if(j[te].location>=0){let le=X[te];le===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(le=P.instanceColor));const pe={};pe.attribute=le,le&&le.data&&(pe.data=le.data),O[te]=pe,k++}s.attributes=O,s.attributesNum=k,s.index=V}function S(){const P=s.newAttributes;for(let I=0,W=P.length;I<W;I++)P[I]=0}function m(P){h(P,0)}function h(P,I){const W=s.newAttributes,V=s.enabledAttributes,O=s.attributeDivisors;W[P]=1,V[P]===0&&(i.enableVertexAttribArray(P),V[P]=1),O[P]!==I&&(i.vertexAttribDivisor(P,I),O[P]=I)}function T(){const P=s.newAttributes,I=s.enabledAttributes;for(let W=0,V=I.length;W<V;W++)I[W]!==P[W]&&(i.disableVertexAttribArray(W),I[W]=0)}function R(P,I,W,V,O,X,k){k===!0?i.vertexAttribIPointer(P,I,W,O,X):i.vertexAttribPointer(P,I,W,V,O,X)}function M(P,I,W,V){S();const O=V.attributes,X=W.getAttributes(),k=I.defaultAttributeValues;for(const j in X){const te=X[j];if(te.location>=0){let ie=O[j];if(ie===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),ie!==void 0){const le=ie.normalized,pe=ie.itemSize,ze=e.get(ie);if(ze===void 0)continue;const Qe=ze.buffer,Ge=ze.type,Z=ze.bytesPerElement,Y=Ge===i.INT||Ge===i.UNSIGNED_INT||ie.gpuType===ra;if(ie.isInterleavedBufferAttribute){const $=ie.data,he=$.stride,Ee=ie.offset;if($.isInstancedInterleavedBuffer){for(let Re=0;Re<te.locationSize;Re++)h(te.location+Re,$.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Re=0;Re<te.locationSize;Re++)m(te.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let Re=0;Re<te.locationSize;Re++)R(te.location+Re,pe/te.locationSize,Ge,le,he*Z,(Ee+pe/te.locationSize*Re)*Z,Y)}else{if(ie.isInstancedBufferAttribute){for(let $=0;$<te.locationSize;$++)h(te.location+$,ie.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let $=0;$<te.locationSize;$++)m(te.location+$);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let $=0;$<te.locationSize;$++)R(te.location+$,pe/te.locationSize,Ge,le,pe*Z,pe/te.locationSize*$*Z,Y)}}else if(k!==void 0){const le=k[j];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(te.location,le);break;case 3:i.vertexAttrib3fv(te.location,le);break;case 4:i.vertexAttrib4fv(te.location,le);break;default:i.vertexAttrib1fv(te.location,le)}}}}T()}function A(){E();for(const P in n){const I=n[P];for(const W in I){const V=I[W];for(const O in V){const X=V[O];for(const k in X)d(X[k].object),delete X[k];delete V[O]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;const I=n[P.id];for(const W in I){const V=I[W];for(const O in V){const X=V[O];for(const k in X)d(X[k].object),delete X[k];delete V[O]}}delete n[P.id]}function w(P){for(const I in n){const W=n[I];for(const V in W){const O=W[V];if(O[P.id]===void 0)continue;const X=O[P.id];for(const k in X)d(X[k].object),delete X[k];delete O[P.id]}}}function _(P){for(const I in n){const W=n[I],V=P.isInstancedMesh===!0?P.id:0,O=W[V];if(O!==void 0){for(const X in O){const k=O[X];for(const j in k)d(k[j].object),delete k[j];delete O[X]}delete W[V],Object.keys(W).length===0&&delete n[I]}}}function E(){C(),a=!0,s!==r&&(s=r,l(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:T}}function Sf(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let u=0;for(let g=0;g<d;g++)u+=l[g];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Ef(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Yt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const _=w===gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Bt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==tn&&!_)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(Ue("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:g,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:M,maxSamples:A,samples:b}}function yf(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new On,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const g=p.length!==0||u||n!==0||r;return r=u,n=p.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){t=d(p,u,0)},this.setState=function(p,u,g){const x=p.clippingPlanes,S=p.clipIntersection,m=p.clipShadows,h=i.get(p);if(!r||x===null||x.length===0||s&&!m)s?d(null):l();else{const T=s?0:n,R=T*4;let M=h.clippingState||null;c.value=M,M=d(x,u,R,g);for(let A=0;A!==R;++A)M[A]=t[A];h.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,u,g,x){const S=p!==null?p.length:0;let m=null;if(S!==0){if(m=c.value,x!==!0||m===null){const h=g+S*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<h)&&(m=new Float32Array(h));for(let R=0,M=g;R!==S;++R,M+=4)a.copy(p[R]).applyMatrix4(T,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}const Cn=4,Eo=[.125,.215,.35,.446,.526,.582],zn=20,bf=256,Ai=new xa,yo=new Ze;let rs=null,ss=0,as=0,os=!1;const Tf=new F;class bo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Tf}=s;rs=this._renderer.getRenderTarget(),ss=this._renderer.getActiveCubeFace(),as=this._renderer.getActiveMipmapLevel(),os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rs,ss,as),this._renderer.xr.enabled=os,e.scissorTest=!1,li(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kn||e.mapping===fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rs=this._renderer.getRenderTarget(),ss=this._renderer.getActiveCubeFace(),as=this._renderer.getActiveMipmapLevel(),os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:gn,format:Yt,colorSpace:Mr,depthBuffer:!1},r=To(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=To(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Af(s)),this._blurMaterial=Rf(s,e,t),this._ggxMaterial=wf(s,e,t)}return r}_compileMaterial(e){const t=new vt(new Dt,e);this._renderer.compile(t,Ai)}_sceneToCubeUV(e,t,n,r,s){const c=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,g=p.toneMapping;p.getClearColor(yo),p.toneMapping=rn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vt(new Fi,new vl({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let h=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,h=!0):(m.color.copy(yo),h=!0);for(let R=0;R<6;R++){const M=R%3;M===0?(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[R],s.y,s.z)):M===1?(c.up.set(0,0,l[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[R],s.z)):(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[R]));const A=this._cubeSize;li(r,M*A,R>2?A:0,A,A),p.setRenderTarget(r),h&&p.render(S,c),p.render(e,c)}p.toneMapping=g,p.autoClear=u,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===kn||e.mapping===fi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ao());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;li(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ai)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-d*d),u=0+l*1.25,g=p*u,{_lodMax:x}=this,S=this._sizeLods[n],m=3*S*(n>x-Cn?n-x+Cn:0),h=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=x-t,li(s,m,h,3*S,2*S),r.setRenderTarget(s),r.render(o,Ai),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=x-n,li(e,m,h,3*S,2*S),r.setRenderTarget(e),r.render(o,Ai)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[r];p.material=l;const u=l.uniforms,g=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*zn-1),S=s/x,m=isFinite(s)?1+Math.floor(d*S):zn;m>zn&&Ue(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zn}`);const h=[];let T=0;for(let w=0;w<zn;++w){const _=w/S,E=Math.exp(-_*_/2);h.push(E),w===0?T+=E:w<m&&(T+=2*E)}for(let w=0;w<h.length;w++)h[w]=h[w]/T;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:R}=this;u.dTheta.value=x,u.mipInt.value=R-n;const M=this._sizeLods[r],A=3*M*(r>R-Cn?r-R+Cn:0),b=4*(this._cubeSize-M);li(t,A,b,3*M,2*M),c.setRenderTarget(t),c.render(p,Ai)}}function Af(i){const e=[],t=[],n=[];let r=i;const s=i-Cn+1+Eo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Cn?c=Eo[a-i+Cn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),d=-l,p=1+l,u=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,x=6,S=3,m=2,h=1,T=new Float32Array(S*x*g),R=new Float32Array(m*x*g),M=new Float32Array(h*x*g);for(let b=0;b<g;b++){const w=b%3*2/3-1,_=b>2?0:-1,E=[w,_,0,w+2/3,_,0,w+2/3,_+1,0,w,_,0,w+2/3,_+1,0,w,_+1,0];T.set(E,S*x*b),R.set(u,m*x*b);const C=[b,b,b,b,b,b];M.set(C,h*x*b)}const A=new Dt;A.setAttribute("position",new Kt(T,S)),A.setAttribute("uv",new Kt(R,m)),A.setAttribute("faceIndex",new Kt(M,h)),n.push(new vt(A,null)),r>Cn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function To(i,e,t){const n=new sn(i,e,t);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function li(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function wf(i,e,t){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ar(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Rf(i,e,t){const n=new Float32Array(zn),r=new F(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ar(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ao(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ar(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function wo(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ar(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ar(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Cl extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Sl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fi(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:pn});s.uniforms.tEquirect.value=t;const a=new vt(r,s),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Rt),new Lu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Cf(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,g=!1){return u==null?null:g?a(u):s(u)}function s(u){if(u&&u.isTexture){const g=u.mapping;if(g===Pr||g===Dr)if(e.has(u)){const x=e.get(u).texture;return o(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const S=new Cl(x.height);return S.fromEquirectangularTexture(i,u),e.set(u,S),u.addEventListener("dispose",l),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const g=u.mapping,x=g===Pr||g===Dr,S=g===kn||g===fi;if(x||S){let m=t.get(u);const h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return n===null&&(n=new bo(i)),m=x?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const T=u.image;return x&&T&&T.height>0||S&&T&&c(T)?(n===null&&(n=new bo(i)),m=x?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,g){return g===Pr?u.mapping=kn:g===Dr&&(u.mapping=fi),u}function c(u){let g=0;const x=6;for(let S=0;S<x;S++)u[S]!==void 0&&g++;return g===x}function l(u){const g=u.target;g.removeEventListener("dispose",l);const x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function d(u){const g=u.target;g.removeEventListener("dispose",d);const x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function Pf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ui("WebGLRenderer: "+n+" extension not supported."),r}}}function Df(i,e,t,n){const r={},s=new WeakMap;function a(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete r[u.id];const g=s.get(u);g&&(e.remove(g),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function c(p){const u=p.attributes;for(const g in u)e.update(u[g],i.ARRAY_BUFFER)}function l(p){const u=[],g=p.index,x=p.attributes.position;let S=0;if(x===void 0)return;if(g!==null){const T=g.array;S=g.version;for(let R=0,M=T.length;R<M;R+=3){const A=T[R+0],b=T[R+1],w=T[R+2];u.push(A,b,b,w,w,A)}}else{const T=x.array;S=x.version;for(let R=0,M=T.length/3-1;R<M;R+=3){const A=R+0,b=R+1,w=R+2;u.push(A,b,b,w,w,A)}}const m=new(x.count>=65535?_l:gl)(u,1);m.version=S;const h=s.get(p);h&&e.remove(h),s.set(p,m)}function d(p){const u=s.get(p);if(u){const g=p.index;g!==null&&u.version<g.version&&l(p)}else l(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:d}}function Lf(i,e,t){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,u){i.drawElements(n,u,s,p*a),t.update(u,n,1)}function l(p,u,g){g!==0&&(i.drawElementsInstanced(n,u,s,p*a,g),t.update(u,n,g))}function d(p,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,p,0,g);let S=0;for(let m=0;m<g;m++)S+=u[m];t.update(S,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function If(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Uf(i,e,t){const n=new WeakMap,r=new ht;function s(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==p){let E=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let R=0;g===!0&&(R=1),x===!0&&(R=2),S===!0&&(R=3);let M=o.attributes.position.count*R,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*A*4*p),w=new fl(b,M,A,p);w.type=tn,w.needsUpdate=!0;const _=R*4;for(let C=0;C<p;C++){const P=m[C],I=h[C],W=T[C],V=M*A*4*C;for(let O=0;O<P.count;O++){const X=O*_;g===!0&&(r.fromBufferAttribute(P,O),b[V+X+0]=r.x,b[V+X+1]=r.y,b[V+X+2]=r.z,b[V+X+3]=0),x===!0&&(r.fromBufferAttribute(I,O),b[V+X+4]=r.x,b[V+X+5]=r.y,b[V+X+6]=r.z,b[V+X+7]=0),S===!0&&(r.fromBufferAttribute(W,O),b[V+X+8]=r.x,b[V+X+9]=r.y,b[V+X+10]=r.z,b[V+X+11]=W.itemSize===4?r.w:1)}}u={count:p,texture:w,size:new qe(M,A)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let S=0;S<l.length;S++)g+=l[S];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Nf(i,e,t,n,r){let s=new WeakMap;function a(l){const d=r.render.frame,p=l.geometry,u=e.get(l,p);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){const g=l.skeleton;s.get(g)!==d&&(g.update(),s.set(g,d))}return u}function o(){s=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const Ff={[Jo]:"LINEAR_TONE_MAPPING",[Qo]:"REINHARD_TONE_MAPPING",[jo]:"CINEON_TONE_MAPPING",[el]:"ACES_FILMIC_TONE_MAPPING",[nl]:"AGX_TONE_MAPPING",[il]:"NEUTRAL_TONE_MAPPING",[tl]:"CUSTOM_TONE_MAPPING"};function Of(i,e,t,n,r,s){const a=new sn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new pi(e,t):void 0}),o=new sn(e,t,{type:gn,depthBuffer:!1,stencilBuffer:!1}),c=new Dt;c.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new _t([0,2,0,0,2,0],2));const l=new Tu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new vt(c,l),p=new xa(-1,1,1,-1,0,1);let u=null,g=null,x=!1,S,m=null,h=[],T=!1;this.setSize=function(R,M){a.setSize(R,M),o.setSize(R,M);for(let A=0;A<h.length;A++){const b=h[A];b.setSize&&b.setSize(R,M)}},this.setEffects=function(R){h=R,T=h.length>0&&h[0].isRenderPass===!0;const M=a.width,A=a.height;for(let b=0;b<h.length;b++){const w=h[b];w.setSize&&w.setSize(M,A)}},this.begin=function(R,M){if(x||R.toneMapping===rn&&h.length===0)return!1;if(m=M,M!==null){const A=M.width,b=M.height;(a.width!==A||a.height!==b)&&this.setSize(A,b)}return T===!1&&R.setRenderTarget(a),S=R.toneMapping,R.toneMapping=rn,!0},this.hasRenderPass=function(){return T},this.end=function(R,M){R.toneMapping=S,x=!0;let A=a,b=o;for(let w=0;w<h.length;w++){const _=h[w];if(_.enabled!==!1&&(_.render(R,b,A,M),_.needsSwap!==!1)){const E=A;A=b,b=E}}if(u!==R.outputColorSpace||g!==R.toneMapping){u=R.outputColorSpace,g=R.toneMapping,l.defines={},Ye.getTransfer(u)===nt&&(l.defines.SRGB_TRANSFER="");const w=Ff[g];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,R.setRenderTarget(m),R.render(d,p),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const Pl=new Pt,ta=new pi(1,1),Dl=new fl,Ll=new nu,Il=new Sl,Ro=[],Co=[],Po=new Float32Array(16),Do=new Float32Array(9),Lo=new Float32Array(4);function xi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ro[r];if(s===void 0&&(s=new Float32Array(r),Ro[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wr(i,e){let t=Co[e];t===void 0&&(t=new Int32Array(e),Co[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function Gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function Vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function Hf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Lo.set(n),i.uniformMatrix2fv(this.addr,!1,Lo),St(t,n)}}function kf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Do.set(n),i.uniformMatrix3fv(this.addr,!1,Do),St(t,n)}}function Wf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Po.set(n),i.uniformMatrix4fv(this.addr,!1,Po),St(t,n)}}function Xf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function Yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function Kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function Zf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function Jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function Qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function jf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ta.compareFunction=t.isReversedDepthBuffer()?ha:ua,s=ta):s=Pl,t.setTexture2D(e||s,r)}function ep(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ll,r)}function tp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Il,r)}function np(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Dl,r)}function ip(i){switch(i){case 5126:return Bf;case 35664:return zf;case 35665:return Gf;case 35666:return Vf;case 35674:return Hf;case 35675:return kf;case 35676:return Wf;case 5124:case 35670:return Xf;case 35667:case 35671:return qf;case 35668:case 35672:return Yf;case 35669:case 35673:return Kf;case 5125:return Zf;case 36294:return $f;case 36295:return Jf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return ep;case 35680:case 36300:case 36308:case 36293:return tp;case 36289:case 36303:case 36311:case 36292:return np}}function rp(i,e){i.uniform1fv(this.addr,e)}function sp(i,e){const t=xi(e,this.size,2);i.uniform2fv(this.addr,t)}function ap(i,e){const t=xi(e,this.size,3);i.uniform3fv(this.addr,t)}function op(i,e){const t=xi(e,this.size,4);i.uniform4fv(this.addr,t)}function lp(i,e){const t=xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cp(i,e){const t=xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function up(i,e){const t=xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hp(i,e){i.uniform1iv(this.addr,e)}function dp(i,e){i.uniform2iv(this.addr,e)}function fp(i,e){i.uniform3iv(this.addr,e)}function pp(i,e){i.uniform4iv(this.addr,e)}function mp(i,e){i.uniform1uiv(this.addr,e)}function gp(i,e){i.uniform2uiv(this.addr,e)}function _p(i,e){i.uniform3uiv(this.addr,e)}function xp(i,e){i.uniform4uiv(this.addr,e)}function vp(i,e,t){const n=this.cache,r=e.length,s=wr(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=ta:a=Pl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Mp(i,e,t){const n=this.cache,r=e.length,s=wr(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ll,s[a])}function Sp(i,e,t){const n=this.cache,r=e.length,s=wr(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Il,s[a])}function Ep(i,e,t){const n=this.cache,r=e.length,s=wr(t,r);Mt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Dl,s[a])}function yp(i){switch(i){case 5126:return rp;case 35664:return sp;case 35665:return ap;case 35666:return op;case 35674:return lp;case 35675:return cp;case 35676:return up;case 5124:case 35670:return hp;case 35667:case 35671:return dp;case 35668:case 35672:return fp;case 35669:case 35673:return pp;case 5125:return mp;case 36294:return gp;case 36295:return _p;case 36296:return xp;case 35678:case 36198:case 36298:case 36306:case 35682:return vp;case 35679:case 36299:case 36307:return Mp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Ep}}class bp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ip(t.type)}}class Tp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yp(t.type)}}class Ap{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ls=/(\w+)(\])?(\[|\.)?/g;function Io(i,e){i.seq.push(e),i.map[e.id]=e}function wp(i,e,t){const n=i.name,r=n.length;for(ls.lastIndex=0;;){const s=ls.exec(n),a=ls.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Io(t,l===void 0?new bp(o,i,e):new Tp(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Ap(o),Io(t,p)),t=p}}}class mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);wp(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Uo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Rp=37297;let Cp=0;function Pp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const No=new Ne;function Dp(i){Ye._getMatrix(No,Ye.workingColorSpace,i);const e=`mat3( ${No.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Sr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Pp(i.getShaderSource(e),o)}else return s}function Lp(i,e){const t=Dp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ip={[Jo]:"Linear",[Qo]:"Reinhard",[jo]:"Cineon",[el]:"ACESFilmic",[nl]:"AgX",[il]:"Neutral",[tl]:"Custom"};function Up(i,e){const t=Ip[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cr=new F;function Np(){Ye.getLuminanceCoefficients(cr);const i=cr.x.toFixed(4),e=cr.y.toFixed(4),t=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ci).join(`
`)}function Op(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ci(i){return i!==""}function Oo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function na(i){return i.replace(zp,Vp)}const Gp=new Map;function Vp(i,e){let t=He[e];if(t===void 0){const n=Gp.get(e);if(n!==void 0)t=He[n],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return na(t)}const Hp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zo(i){return i.replace(Hp,kp)}function kp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Go(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Wp={[ur]:"SHADOWMAP_TYPE_PCF",[Ri]:"SHADOWMAP_TYPE_VSM"};function Xp(i){return Wp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qp={[kn]:"ENVMAP_TYPE_CUBE",[fi]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE_UV"};function Yp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":qp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Kp={[fi]:"ENVMAP_MODE_REFRACTION"};function Zp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Kp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $p={[$o]:"ENVMAP_BLENDING_MULTIPLY",[Nc]:"ENVMAP_BLENDING_MIX",[Fc]:"ENVMAP_BLENDING_ADD"};function Jp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$p[i.combine]||"ENVMAP_BLENDING_NONE"}function Qp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Xp(t),l=Yp(t),d=Zp(t),p=Jp(t),u=Qp(t),g=Fp(t),x=Op(s),S=r.createProgram();let m,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ci).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ci).join(`
`),h.length>0&&(h+=`
`)):(m=[Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ci).join(`
`),h=[Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rn?"#define TONE_MAPPING":"",t.toneMapping!==rn?He.tonemapping_pars_fragment:"",t.toneMapping!==rn?Up("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Lp("linearToOutputTexel",t.outputColorSpace),Np(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ci).join(`
`)),a=na(a),a=Oo(a,t),a=Bo(a,t),o=na(o),o=Oo(o,t),o=Bo(o,t),a=zo(a),o=zo(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const R=T+m+a,M=T+h+o,A=Uo(r,r.VERTEX_SHADER,R),b=Uo(r,r.FRAGMENT_SHADER,M);r.attachShader(S,A),r.attachShader(S,b),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function w(P){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(S)||"",W=r.getShaderInfoLog(A)||"",V=r.getShaderInfoLog(b)||"",O=I.trim(),X=W.trim(),k=V.trim();let j=!0,te=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,A,b);else{const ie=Fo(r,A,"vertex"),le=Fo(r,b,"fragment");Je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+ie+`
`+le)}else O!==""?Ue("WebGLProgram: Program Info Log:",O):(X===""||k==="")&&(te=!1);te&&(P.diagnostics={runnable:j,programLog:O,vertexShader:{log:X,prefix:m},fragmentShader:{log:k,prefix:h}})}r.deleteShader(A),r.deleteShader(b),_=new mr(r,S),E=Bp(r,S)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(S,Rp)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cp++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=b,this}let em=0;class tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nm(e),t.set(e,n)),n}}class nm{constructor(e){this.id=em++,this.code=e,this.usedTimes=0}}function im(i){return i===Wn||i===xr||i===vr}function rm(i,e,t,n,r,s){const a=new pl,o=new tm,c=new Set,l=[],d=new Map,p=n.logarithmicDepthBuffer;let u=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function S(_,E,C,P,I,W){const V=P.fog,O=I.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=e.get(_.envMap||X,k),te=j&&j.mapping===br?j.image.height:null,ie=g[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ue("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const le=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,pe=le!==void 0?le.length:0;let ze=0;O.morphAttributes.position!==void 0&&(ze=1),O.morphAttributes.normal!==void 0&&(ze=2),O.morphAttributes.color!==void 0&&(ze=3);let Qe,Ge,Z,Y;if(ie){const ye=en[ie];Qe=ye.vertexShader,Ge=ye.fragmentShader}else{Qe=_.vertexShader,Ge=_.fragmentShader;const ye=o.getVertexShaderStage(_),ft=o.getFragmentShaderStage(_);o.update(_,ye,ft),Z=ye.id,Y=ft.id}const $=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Ee=I.isInstancedMesh===!0,Re=I.isBatchedMesh===!0,ot=!!_.map,Ve=!!_.matcap,tt=!!j,ve=!!_.aoMap,xe=!!_.lightMap,Le=!!_.bumpMap&&_.wireframe===!1,je=!!_.normalMap,et=!!_.displacementMap,Fe=!!_.emissiveMap,Xe=!!_.metalnessMap,rt=!!_.roughnessMap,D=_.anisotropy>0,dt=_.clearcoat>0,ke=_.dispersion>0,y=_.iridescence>0,f=_.sheen>0,N=_.transmission>0,G=D&&!!_.anisotropyMap,q=dt&&!!_.clearcoatMap,re=dt&&!!_.clearcoatNormalMap,ae=dt&&!!_.clearcoatRoughnessMap,K=y&&!!_.iridescenceMap,J=y&&!!_.iridescenceThicknessMap,se=f&&!!_.sheenColorMap,Te=f&&!!_.sheenRoughnessMap,de=!!_.specularMap,ce=!!_.specularColorMap,Pe=!!_.specularIntensityMap,Ie=N&&!!_.transmissionMap,Oe=N&&!!_.thicknessMap,L=!!_.gradientMap,oe=!!_.alphaMap,Q=_.alphaTest>0,ue=!!_.alphaHash,_e=!!_.extensions;let ee=rn;_.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ee=i.toneMapping);const Ae={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:Qe,fragmentShader:Ge,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Re,batchingColor:Re&&I._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&I.instanceColor!==null,instancingMorph:Ee&&I.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ot,matcap:Ve,envMap:tt,envMapMode:tt&&j.mapping,envMapCubeUVHeight:te,aoMap:ve,lightMap:xe,bumpMap:Le,normalMap:je,displacementMap:et,emissiveMap:Fe,normalMapObjectSpace:je&&_.normalMapType===zc,normalMapTangentSpace:je&&_.normalMapType===Qs,packedNormalMap:je&&_.normalMapType===Qs&&im(_.normalMap.format),metalnessMap:Xe,roughnessMap:rt,anisotropy:D,anisotropyMap:G,clearcoat:dt,clearcoatMap:q,clearcoatNormalMap:re,clearcoatRoughnessMap:ae,dispersion:ke,iridescence:y,iridescenceMap:K,iridescenceThicknessMap:J,sheen:f,sheenColorMap:se,sheenRoughnessMap:Te,specularMap:de,specularColorMap:ce,specularIntensityMap:Pe,transmission:N,transmissionMap:Ie,thicknessMap:Oe,gradientMap:L,opaque:_.transparent===!1&&_.blending===ci&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:Q,alphaHash:ue,combine:_.combine,mapUv:ot&&x(_.map.channel),aoMapUv:ve&&x(_.aoMap.channel),lightMapUv:xe&&x(_.lightMap.channel),bumpMapUv:Le&&x(_.bumpMap.channel),normalMapUv:je&&x(_.normalMap.channel),displacementMapUv:et&&x(_.displacementMap.channel),emissiveMapUv:Fe&&x(_.emissiveMap.channel),metalnessMapUv:Xe&&x(_.metalnessMap.channel),roughnessMapUv:rt&&x(_.roughnessMap.channel),anisotropyMapUv:G&&x(_.anisotropyMap.channel),clearcoatMapUv:q&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:se&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Te&&x(_.sheenRoughnessMap.channel),specularMapUv:de&&x(_.specularMap.channel),specularColorMapUv:ce&&x(_.specularColorMap.channel),specularIntensityMapUv:Pe&&x(_.specularIntensityMap.channel),transmissionMapUv:Ie&&x(_.transmissionMap.channel),thicknessMapUv:Oe&&x(_.thicknessMap.channel),alphaMapUv:oe&&x(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(je||D),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(ot||oe),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&je===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:he,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,decodeVideoTexture:ot&&_.map.isVideoTexture===!0&&Ye.getTransfer(_.map.colorSpace)===nt,decodeVideoTextureEmissive:Fe&&_.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(_.emissiveMap.colorSpace)===nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ht,flipSided:_.side===It,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function m(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)E.push(C),E.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(h(E,_),T(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function h(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function T(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function R(_){const E=g[_.type];let C;if(E){const P=en[E];C=Eu.clone(P.uniforms)}else C=_.uniforms;return C}function M(_,E){let C=d.get(E);return C!==void 0?++C.usedTimes:(C=new jp(i,E,_,r),l.push(C),d.set(E,C)),C}function A(_){if(--_.usedTimes===0){const E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),d.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function w(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:R,acquireProgram:M,releaseProgram:A,releaseShaderCache:b,programs:l,dispose:w}}function sm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function am(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Vo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ho(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u){let g=0;return u.isInstancedMesh&&(g+=2),u.isSkinnedMesh&&(g+=1),g}function o(u,g,x,S,m,h){let T=i[e];return T===void 0?(T={id:u.id,object:u,geometry:g,material:x,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:h},i[e]=T):(T.id=u.id,T.object=u,T.geometry=g,T.material=x,T.materialVariant=a(u),T.groupOrder=S,T.renderOrder=u.renderOrder,T.z=m,T.group=h),e++,T}function c(u,g,x,S,m,h){const T=o(u,g,x,S,m,h);x.transmission>0?n.push(T):x.transparent===!0?r.push(T):t.push(T)}function l(u,g,x,S,m,h){const T=o(u,g,x,S,m,h);x.transmission>0?n.unshift(T):x.transparent===!0?r.unshift(T):t.unshift(T)}function d(u,g,x){t.length>1&&t.sort(u||am),n.length>1&&n.sort(g||Vo),r.length>1&&r.sort(g||Vo),x&&(t.reverse(),n.reverse(),r.reverse())}function p(){for(let u=e,g=i.length;u<g;u++){const x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:p,sort:d}}function om(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ho,i.set(n,[a])):r>=s.length?(a=new Ho,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function lm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ze};break;case"SpotLight":t={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function cm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let um=0;function hm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dm(i){const e=new lm,t=cm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const r=new F,s=new ut,a=new ut;function o(l){let d=0,p=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let g=0,x=0,S=0,m=0,h=0,T=0,R=0,M=0,A=0,b=0,w=0;l.sort(hm);for(let E=0,C=l.length;E<C;E++){const P=l[E],I=P.color,W=P.intensity,V=P.distance;let O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Wn?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=I.r*W,p+=I.g*W,u+=I.b*W;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],W);w++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,j=t.get(P);j.shadowIntensity=k.intensity,j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=O,n.directionalShadowMatrix[g]=P.shadow.matrix,T++}n.directional[g]=X,g++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(I).multiplyScalar(W),X.distance=V,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[S]=X;const k=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,k.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[S]=k.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=k.intensity,j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=O,M++}S++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(I).multiplyScalar(W),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const k=P.shadow,j=t.get(P);j.shadowIntensity=k.intensity,j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,j.shadowCameraNear=k.camera.near,j.shadowCameraFar=k.camera.far,n.pointShadow[x]=j,n.pointShadowMap[x]=O,n.pointShadowMatrix[x]=P.shadow.matrix,R++}n.point[x]=X,x++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(W),X.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[h]=X,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=u;const _=n.hash;(_.directionalLength!==g||_.pointLength!==x||_.spotLength!==S||_.rectAreaLength!==m||_.hemiLength!==h||_.numDirectionalShadows!==T||_.numPointShadows!==R||_.numSpotShadows!==M||_.numSpotMaps!==A||_.numLightProbes!==w)&&(n.directional.length=g,n.spot.length=S,n.rectArea.length=m,n.point.length=x,n.hemi.length=h,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=M+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,_.directionalLength=g,_.pointLength=x,_.spotLength=S,_.rectAreaLength=m,_.hemiLength=h,_.numDirectionalShadows=T,_.numPointShadows=R,_.numSpotShadows=M,_.numSpotMaps=A,_.numLightProbes=w,n.version=um++)}function c(l,d){let p=0,u=0,g=0,x=0,S=0;const m=d.matrixWorldInverse;for(let h=0,T=l.length;h<T;h++){const R=l[h];if(R.isDirectionalLight){const M=n.directional[p];M.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(R.isSpotLight){const M=n.spot[g];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(R.isRectAreaLight){const M=n.rectArea[x];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(R.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(R.width*.5,0,0),M.halfHeight.set(0,R.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(R.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(R.matrixWorld),M.position.applyMatrix4(m),u++}else if(R.isHemisphereLight){const M=n.hemi[S];M.direction.setFromMatrixPosition(R.matrixWorld),M.direction.transformDirection(m),S++}}}return{setup:o,setupView:c,state:n}}function ko(i){const e=new dm(i),t=[],n=[],r=[];function s(u){p.camera=u,t.length=0,n.length=0,r.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function d(u){e.setupView(t,u)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function fm(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ko(i),e.set(r,[o])):s>=a.length?(o=new ko(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gm=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],_m=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Wo=new ut,wi=new F,cs=new F;function xm(i,e,t){let n=new fa;const r=new qe,s=new qe,a=new ht,o=new Au,c=new wu,l={},d=t.maxTextureSize,p={[Pn]:It,[It]:Pn,[Ht]:Ht},u=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:pm,fragmentShader:mm}),g=u.clone();g.defines.HORIZONTAL_PASS=1;const x=new Dt;x.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new vt(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ur;let h=this.type;this.render=function(b,w,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===gc&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ur);const E=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(pn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const W=h!==this.type;W&&w.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(O=>O.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,O=b.length;V<O;V++){const X=b[V],k=X.shadow;if(k===void 0){Ue("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const j=k.getFrameExtents();r.multiply(j),s.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/j.x),r.x=s.x*j.x,k.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/j.y),r.y=s.y*j.y,k.mapSize.y=s.y));const te=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=te,k.map===null||W===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ri){if(X.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new sn(r.x,r.y,{format:Wn,type:gn,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new pi(r.x,r.y,tn),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=_n,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=yt,k.map.depthTexture.magFilter=yt}else X.isPointLight?(k.map=new Cl(r.x),k.map.depthTexture=new Mu(r.x,an)):(k.map=new sn(r.x,r.y),k.map.depthTexture=new pi(r.x,r.y,an)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=_n,this.type===ur?(k.map.depthTexture.compareFunction=te?ha:ua,k.map.depthTexture.minFilter=Rt,k.map.depthTexture.magFilter=Rt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=yt,k.map.depthTexture.magFilter=yt);k.camera.updateProjectionMatrix()}const ie=k.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<ie;le++){if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,le),i.clear();else{le===0&&(i.setRenderTarget(k.map),i.clear());const pe=k.getViewport(le);a.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),I.viewport(a)}if(X.isPointLight){const pe=k.camera,ze=k.matrix,Qe=X.distance||pe.far;Qe!==pe.far&&(pe.far=Qe,pe.updateProjectionMatrix()),wi.setFromMatrixPosition(X.matrixWorld),pe.position.copy(wi),cs.copy(pe.position),cs.add(gm[le]),pe.up.copy(_m[le]),pe.lookAt(cs),pe.updateMatrixWorld(),ze.makeTranslation(-wi.x,-wi.y,-wi.z),Wo.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Wo,pe.coordinateSystem,pe.reversedDepth)}else k.updateMatrices(X);n=k.getFrustum(),M(w,_,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===Ri&&T(k,_),k.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(E,C,P)};function T(b,w){const _=e.update(S);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new sn(r.x,r.y,{format:Wn,type:gn})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,_,u,S,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,_,g,S,null)}function R(b,w,_,E){let C=null;const P=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)C=P;else if(C=_.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=C.uuid,W=w.uuid;let V=l[I];V===void 0&&(V={},l[I]=V);let O=V[W];O===void 0&&(O=C.clone(),V[W]=O,w.addEventListener("dispose",A)),C=O}if(C.visible=w.visible,C.wireframe=w.wireframe,E===Ri?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:p[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const I=i.properties.get(C);I.light=_}return C}function M(b,w,_,E,C){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Ri)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const W=e.update(b),V=b.material;if(Array.isArray(V)){const O=W.groups;for(let X=0,k=O.length;X<k;X++){const j=O[X],te=V[j.materialIndex];if(te&&te.visible){const ie=R(b,te,E,C);b.onBeforeShadow(i,b,w,_,W,ie,j),i.renderBufferDirect(_,null,W,ie,b,j),b.onAfterShadow(i,b,w,_,W,ie,j)}}}else if(V.visible){const O=R(b,V,E,C);b.onBeforeShadow(i,b,w,_,W,O,null),i.renderBufferDirect(_,null,W,O,b,null),b.onAfterShadow(i,b,w,_,W,O,null)}}const I=b.children;for(let W=0,V=I.length;W<V;W++)M(I[W],w,_,E,C)}function A(b){b.target.removeEventListener("dispose",A);for(const _ in l){const E=l[_],C=b.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function vm(i,e){function t(){let L=!1;const oe=new ht;let Q=null;const ue=new ht(0,0,0,0);return{setMask:function(_e){Q!==_e&&!L&&(i.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){L=_e},setClear:function(_e,ee,Ae,ye,ft){ft===!0&&(_e*=ye,ee*=ye,Ae*=ye),oe.set(_e,ee,Ae,ye),ue.equals(oe)===!1&&(i.clearColor(_e,ee,Ae,ye),ue.copy(oe))},reset:function(){L=!1,Q=null,ue.set(-1,0,0,0)}}}function n(){let L=!1,oe=!1,Q=null,ue=null,_e=null;return{setReversed:function(ee){if(oe!==ee){const Ae=e.get("EXT_clip_control");ee?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),oe=ee;const ye=_e;_e=null,this.setClear(ye)}},getReversed:function(){return oe},setTest:function(ee){ee?$(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(ee){Q!==ee&&!L&&(i.depthMask(ee),Q=ee)},setFunc:function(ee){if(oe&&(ee=Zc[ee]),ue!==ee){switch(ee){case fs:i.depthFunc(i.NEVER);break;case ps:i.depthFunc(i.ALWAYS);break;case ms:i.depthFunc(i.LESS);break;case di:i.depthFunc(i.LEQUAL);break;case gs:i.depthFunc(i.EQUAL);break;case _s:i.depthFunc(i.GEQUAL);break;case xs:i.depthFunc(i.GREATER);break;case vs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=ee}},setLocked:function(ee){L=ee},setClear:function(ee){_e!==ee&&(_e=ee,oe&&(ee=1-ee),i.clearDepth(ee))},reset:function(){L=!1,Q=null,ue=null,_e=null,oe=!1}}}function r(){let L=!1,oe=null,Q=null,ue=null,_e=null,ee=null,Ae=null,ye=null,ft=null;return{setTest:function(lt){L||(lt?$(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(lt){oe!==lt&&!L&&(i.stencilMask(lt),oe=lt)},setFunc:function(lt,Zt,$t){(Q!==lt||ue!==Zt||_e!==$t)&&(i.stencilFunc(lt,Zt,$t),Q=lt,ue=Zt,_e=$t)},setOp:function(lt,Zt,$t){(ee!==lt||Ae!==Zt||ye!==$t)&&(i.stencilOp(lt,Zt,$t),ee=lt,Ae=Zt,ye=$t)},setLocked:function(lt){L=lt},setClear:function(lt){ft!==lt&&(i.clearStencil(lt),ft=lt)},reset:function(){L=!1,oe=null,Q=null,ue=null,_e=null,ee=null,Ae=null,ye=null,ft=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let d={},p={},u={},g=new WeakMap,x=[],S=null,m=!1,h=null,T=null,R=null,M=null,A=null,b=null,w=null,_=new Ze(0,0,0),E=0,C=!1,P=null,I=null,W=null,V=null,O=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,j=0;const te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(te)[1]),k=j>=1):te.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),k=j>=2);let ie=null,le={};const pe=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),Qe=new ht().fromArray(pe),Ge=new ht().fromArray(ze);function Z(L,oe,Q,ue){const _e=new Uint8Array(4),ee=i.createTexture();i.bindTexture(L,ee),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<Q;Ae++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(oe+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return ee}const Y={};Y[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(di),Le(!1),je(Ha),$(i.CULL_FACE),ve(pn);function $(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function he(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Ee(L,oe){return u[L]!==oe?(i.bindFramebuffer(L,oe),u[L]=oe,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=oe),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Re(L,oe){let Q=x,ue=!1;if(L){Q=g.get(oe),Q===void 0&&(Q=[],g.set(oe,Q));const _e=L.textures;if(Q.length!==_e.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Ae=_e.length;ee<Ae;ee++)Q[ee]=i.COLOR_ATTACHMENT0+ee;Q.length=_e.length,ue=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ue=!0);ue&&i.drawBuffers(Q)}function ot(L){return S!==L?(i.useProgram(L),S=L,!0):!1}const Ve={[Bn]:i.FUNC_ADD,[xc]:i.FUNC_SUBTRACT,[vc]:i.FUNC_REVERSE_SUBTRACT};Ve[Mc]=i.MIN,Ve[Sc]=i.MAX;const tt={[Ec]:i.ZERO,[yc]:i.ONE,[bc]:i.SRC_COLOR,[hs]:i.SRC_ALPHA,[Pc]:i.SRC_ALPHA_SATURATE,[Rc]:i.DST_COLOR,[Ac]:i.DST_ALPHA,[Tc]:i.ONE_MINUS_SRC_COLOR,[ds]:i.ONE_MINUS_SRC_ALPHA,[Cc]:i.ONE_MINUS_DST_COLOR,[wc]:i.ONE_MINUS_DST_ALPHA,[Dc]:i.CONSTANT_COLOR,[Lc]:i.ONE_MINUS_CONSTANT_COLOR,[Ic]:i.CONSTANT_ALPHA,[Uc]:i.ONE_MINUS_CONSTANT_ALPHA};function ve(L,oe,Q,ue,_e,ee,Ae,ye,ft,lt){if(L===pn){m===!0&&(he(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),L!==_c){if(L!==h||lt!==C){if((T!==Bn||A!==Bn)&&(i.blendEquation(i.FUNC_ADD),T=Bn,A=Bn),lt)switch(L){case ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ka:i.blendFunc(i.ONE,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Je("WebGLState: Invalid blending: ",L);break}else switch(L){case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ka:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wa:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xa:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",L);break}R=null,M=null,b=null,w=null,_.set(0,0,0),E=0,h=L,C=lt}return}_e=_e||oe,ee=ee||Q,Ae=Ae||ue,(oe!==T||_e!==A)&&(i.blendEquationSeparate(Ve[oe],Ve[_e]),T=oe,A=_e),(Q!==R||ue!==M||ee!==b||Ae!==w)&&(i.blendFuncSeparate(tt[Q],tt[ue],tt[ee],tt[Ae]),R=Q,M=ue,b=ee,w=Ae),(ye.equals(_)===!1||ft!==E)&&(i.blendColor(ye.r,ye.g,ye.b,ft),_.copy(ye),E=ft),h=L,C=!1}function xe(L,oe){L.side===Ht?he(i.CULL_FACE):$(i.CULL_FACE);let Q=L.side===It;oe&&(Q=!Q),Le(Q),L.blending===ci&&L.transparent===!1?ve(pn):ve(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const ue=L.stencilWrite;o.setTest(ue),ue&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Fe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(L){P!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),P=L)}function je(L){L!==pc?($(i.CULL_FACE),L!==I&&(L===Ha?i.cullFace(i.BACK):L===mc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),I=L}function et(L){L!==W&&(k&&i.lineWidth(L),W=L)}function Fe(L,oe,Q){L?($(i.POLYGON_OFFSET_FILL),(V!==oe||O!==Q)&&(V=oe,O=Q,a.getReversed()&&(oe=-oe),i.polygonOffset(oe,Q))):he(i.POLYGON_OFFSET_FILL)}function Xe(L){L?$(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function rt(L){L===void 0&&(L=i.TEXTURE0+X-1),ie!==L&&(i.activeTexture(L),ie=L)}function D(L,oe,Q){Q===void 0&&(ie===null?Q=i.TEXTURE0+X-1:Q=ie);let ue=le[Q];ue===void 0&&(ue={type:void 0,texture:void 0},le[Q]=ue),(ue.type!==L||ue.texture!==oe)&&(ie!==Q&&(i.activeTexture(Q),ie=Q),i.bindTexture(L,oe||Y[L]),ue.type=L,ue.texture=oe)}function dt(){const L=le[ie];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ke(){try{i.compressedTexImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function y(){try{i.compressedTexImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function f(){try{i.texSubImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function N(){try{i.texSubImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function re(){try{i.texStorage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function ae(){try{i.texStorage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function K(){try{i.texImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function J(){try{i.texImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function se(L){return p[L]!==void 0?p[L]:i.getParameter(L)}function Te(L,oe){p[L]!==oe&&(i.pixelStorei(L,oe),p[L]=oe)}function de(L){Qe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Qe.copy(L))}function ce(L){Ge.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Ge.copy(L))}function Pe(L,oe){let Q=l.get(oe);Q===void 0&&(Q=new WeakMap,l.set(oe,Q));let ue=Q.get(L);ue===void 0&&(ue=i.getUniformBlockIndex(oe,L.name),Q.set(L,ue))}function Ie(L,oe){const ue=l.get(oe).get(L);c.get(oe)!==ue&&(i.uniformBlockBinding(oe,ue,L.__bindingPointIndex),c.set(oe,ue))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},p={},ie=null,le={},u={},g=new WeakMap,x=[],S=null,m=!1,h=null,T=null,R=null,M=null,A=null,b=null,w=null,_=new Ze(0,0,0),E=0,C=!1,P=null,I=null,W=null,V=null,O=null,Qe.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:he,bindFramebuffer:Ee,drawBuffers:Re,useProgram:ot,setBlending:ve,setMaterial:xe,setFlipSided:Le,setCullFace:je,setLineWidth:et,setPolygonOffset:Fe,setScissorTest:Xe,activeTexture:rt,bindTexture:D,unbindTexture:dt,compressedTexImage2D:ke,compressedTexImage3D:y,texImage2D:K,texImage3D:J,pixelStorei:Te,getParameter:se,updateUBOMapping:Pe,uniformBlockBinding:Ie,texStorage2D:re,texStorage3D:ae,texSubImage2D:f,texSubImage3D:N,compressedTexSubImage2D:G,compressedTexSubImage3D:q,scissor:de,viewport:ce,reset:Oe}}function Mm(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qe,d=new WeakMap,p=new Set;let u;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(y,f){return x?new OffscreenCanvas(y,f):Er("canvas")}function m(y,f,N){let G=1;const q=ke(y);if((q.width>N||q.height>N)&&(G=N/Math.max(q.width,q.height)),G<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const re=Math.floor(G*q.width),ae=Math.floor(G*q.height);u===void 0&&(u=S(re,ae));const K=f?S(re,ae):u;return K.width=re,K.height=ae,K.getContext("2d").drawImage(y,0,0,re,ae),Ue("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+re+"x"+ae+")."),K}else return"data"in y&&Ue("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),y;return y}function h(y){return y.generateMipmaps}function T(y){i.generateMipmap(y)}function R(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(y,f,N,G,q,re=!1){if(y!==null){if(i[y]!==void 0)return i[y];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ae;G&&(ae=e.get("EXT_texture_norm16"),ae||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=f;if(f===i.RED&&(N===i.FLOAT&&(K=i.R32F),N===i.HALF_FLOAT&&(K=i.R16F),N===i.UNSIGNED_BYTE&&(K=i.R8),N===i.UNSIGNED_SHORT&&ae&&(K=ae.R16_EXT),N===i.SHORT&&ae&&(K=ae.R16_SNORM_EXT)),f===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.R8UI),N===i.UNSIGNED_SHORT&&(K=i.R16UI),N===i.UNSIGNED_INT&&(K=i.R32UI),N===i.BYTE&&(K=i.R8I),N===i.SHORT&&(K=i.R16I),N===i.INT&&(K=i.R32I)),f===i.RG&&(N===i.FLOAT&&(K=i.RG32F),N===i.HALF_FLOAT&&(K=i.RG16F),N===i.UNSIGNED_BYTE&&(K=i.RG8),N===i.UNSIGNED_SHORT&&ae&&(K=ae.RG16_EXT),N===i.SHORT&&ae&&(K=ae.RG16_SNORM_EXT)),f===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RG8UI),N===i.UNSIGNED_SHORT&&(K=i.RG16UI),N===i.UNSIGNED_INT&&(K=i.RG32UI),N===i.BYTE&&(K=i.RG8I),N===i.SHORT&&(K=i.RG16I),N===i.INT&&(K=i.RG32I)),f===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RGB8UI),N===i.UNSIGNED_SHORT&&(K=i.RGB16UI),N===i.UNSIGNED_INT&&(K=i.RGB32UI),N===i.BYTE&&(K=i.RGB8I),N===i.SHORT&&(K=i.RGB16I),N===i.INT&&(K=i.RGB32I)),f===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),N===i.UNSIGNED_INT&&(K=i.RGBA32UI),N===i.BYTE&&(K=i.RGBA8I),N===i.SHORT&&(K=i.RGBA16I),N===i.INT&&(K=i.RGBA32I)),f===i.RGB&&(N===i.UNSIGNED_SHORT&&ae&&(K=ae.RGB16_EXT),N===i.SHORT&&ae&&(K=ae.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),f===i.RGBA){const J=re?Sr:Ye.getTransfer(q);N===i.FLOAT&&(K=i.RGBA32F),N===i.HALF_FLOAT&&(K=i.RGBA16F),N===i.UNSIGNED_BYTE&&(K=J===nt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&ae&&(K=ae.RGBA16_EXT),N===i.SHORT&&ae&&(K=ae.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function A(y,f){let N;return y?f===null||f===an||f===Li?N=i.DEPTH24_STENCIL8:f===tn?N=i.DEPTH32F_STENCIL8:f===Di&&(N=i.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===an||f===Li?N=i.DEPTH_COMPONENT24:f===tn?N=i.DEPTH_COMPONENT32F:f===Di&&(N=i.DEPTH_COMPONENT16),N}function b(y,f){return h(y)===!0||y.isFramebufferTexture&&y.minFilter!==yt&&y.minFilter!==Rt?Math.log2(Math.max(f.width,f.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?f.mipmaps.length:1}function w(y){const f=y.target;f.removeEventListener("dispose",w),E(f),f.isVideoTexture&&d.delete(f),f.isHTMLTexture&&p.delete(f)}function _(y){const f=y.target;f.removeEventListener("dispose",_),P(f)}function E(y){const f=n.get(y);if(f.__webglInit===void 0)return;const N=y.source,G=g.get(N);if(G){const q=G[f.__cacheKey];q.usedTimes--,q.usedTimes===0&&C(y),Object.keys(G).length===0&&g.delete(N)}n.remove(y)}function C(y){const f=n.get(y);i.deleteTexture(f.__webglTexture);const N=y.source,G=g.get(N);delete G[f.__cacheKey],a.memory.textures--}function P(y){const f=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(f.__webglFramebuffer[G]))for(let q=0;q<f.__webglFramebuffer[G].length;q++)i.deleteFramebuffer(f.__webglFramebuffer[G][q]);else i.deleteFramebuffer(f.__webglFramebuffer[G]);f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer[G])}else{if(Array.isArray(f.__webglFramebuffer))for(let G=0;G<f.__webglFramebuffer.length;G++)i.deleteFramebuffer(f.__webglFramebuffer[G]);else i.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&i.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let G=0;G<f.__webglColorRenderbuffer.length;G++)f.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(f.__webglColorRenderbuffer[G]);f.__webglDepthRenderbuffer&&i.deleteRenderbuffer(f.__webglDepthRenderbuffer)}const N=y.textures;for(let G=0,q=N.length;G<q;G++){const re=n.get(N[G]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(N[G])}n.remove(y)}let I=0;function W(){I=0}function V(){return I}function O(y){I=y}function X(){const y=I;return y>=r.maxTextures&&Ue("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),I+=1,y}function k(y){const f=[];return f.push(y.wrapS),f.push(y.wrapT),f.push(y.wrapR||0),f.push(y.magFilter),f.push(y.minFilter),f.push(y.anisotropy),f.push(y.internalFormat),f.push(y.format),f.push(y.type),f.push(y.generateMipmaps),f.push(y.premultiplyAlpha),f.push(y.flipY),f.push(y.unpackAlignment),f.push(y.colorSpace),f.join()}function j(y,f){const N=n.get(y);if(y.isVideoTexture&&D(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&N.__version!==y.version){const G=y.image;if(G===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{he(N,y,f);return}}else y.isExternalTexture&&(N.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+f)}function te(y,f){const N=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){he(N,y,f);return}else y.isExternalTexture&&(N.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+f)}function ie(y,f){const N=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){he(N,y,f);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+f)}function le(y,f){const N=n.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&N.__version!==y.version){Ee(N,y,f);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+f)}const pe={[Ms]:i.REPEAT,[fn]:i.CLAMP_TO_EDGE,[Ss]:i.MIRRORED_REPEAT},ze={[yt]:i.NEAREST,[Oc]:i.NEAREST_MIPMAP_NEAREST,[Gi]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[Lr]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},Qe={[Gc]:i.NEVER,[Xc]:i.ALWAYS,[Vc]:i.LESS,[ua]:i.LEQUAL,[Hc]:i.EQUAL,[ha]:i.GEQUAL,[kc]:i.GREATER,[Wc]:i.NOTEQUAL};function Ge(y,f){if(f.type===tn&&e.has("OES_texture_float_linear")===!1&&(f.magFilter===Rt||f.magFilter===Lr||f.magFilter===Gi||f.magFilter===Gn||f.minFilter===Rt||f.minFilter===Lr||f.minFilter===Gi||f.minFilter===Gn)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,pe[f.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,pe[f.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,pe[f.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,ze[f.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,ze[f.minFilter]),f.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Qe[f.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===yt||f.minFilter!==Gi&&f.minFilter!==Gn||f.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||n.get(f).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,r.getMaxAnisotropy())),n.get(f).__currentAnisotropy=f.anisotropy}}}function Z(y,f){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,f.addEventListener("dispose",w));const G=f.source;let q=g.get(G);q===void 0&&(q={},g.set(G,q));const re=k(f);if(re!==y.__cacheKey){q[re]===void 0&&(q[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),q[re].usedTimes++;const ae=q[y.__cacheKey];ae!==void 0&&(q[y.__cacheKey].usedTimes--,ae.usedTimes===0&&C(f)),y.__cacheKey=re,y.__webglTexture=q[re].texture}return N}function Y(y,f,N){return Math.floor(Math.floor(y/N)/f)}function $(y,f,N,G){const re=y.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,f.width,f.height,N,G,f.data);else{re.sort((Te,de)=>Te.start-de.start);let ae=0;for(let Te=1;Te<re.length;Te++){const de=re[ae],ce=re[Te],Pe=de.start+de.count,Ie=Y(ce.start,f.width,4),Oe=Y(de.start,f.width,4);ce.start<=Pe+1&&Ie===Oe&&Y(ce.start+ce.count-1,f.width,4)===Ie?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++ae,re[ae]=ce)}re.length=ae+1;const K=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,f.width);for(let Te=0,de=re.length;Te<de;Te++){const ce=re[Te],Pe=Math.floor(ce.start/4),Ie=Math.ceil(ce.count/4),Oe=Pe%f.width,L=Math.floor(Pe/f.width),oe=Ie,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Oe,L,oe,Q,N,G,f.data)}y.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,se)}}function he(y,f,N){let G=i.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),f.isData3DTexture&&(G=i.TEXTURE_3D);const q=Z(y,f),re=f.source;t.bindTexture(G,y.__webglTexture,i.TEXTURE0+N);const ae=n.get(re);if(re.version!==ae.__version||q===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&f.image instanceof ImageBitmap)===!1){const Q=Ye.getPrimaries(Ye.workingColorSpace),ue=f.colorSpace===Rn?null:Ye.getPrimaries(f.colorSpace),_e=f.colorSpace===Rn||Q===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment);let J=m(f.image,!1,r.maxTextureSize);J=dt(f,J);const se=s.convert(f.format,f.colorSpace),Te=s.convert(f.type);let de=M(f.internalFormat,se,Te,f.normalized,f.colorSpace,f.isVideoTexture);Ge(G,f);let ce;const Pe=f.mipmaps,Ie=f.isVideoTexture!==!0,Oe=ae.__version===void 0||q===!0,L=re.dataReady,oe=b(f,J);if(f.isDepthTexture)de=A(f.format===Vn,f.type),Oe&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,de,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,de,J.width,J.height,0,se,Te,null));else if(f.isDataTexture)if(Pe.length>0){Ie&&Oe&&t.texStorage2D(i.TEXTURE_2D,oe,de,Pe[0].width,Pe[0].height);for(let Q=0,ue=Pe.length;Q<ue;Q++)ce=Pe[Q],Ie?L&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,se,Te,ce.data):t.texImage2D(i.TEXTURE_2D,Q,de,ce.width,ce.height,0,se,Te,ce.data);f.generateMipmaps=!1}else Ie?(Oe&&t.texStorage2D(i.TEXTURE_2D,oe,de,J.width,J.height),L&&$(f,J,se,Te)):t.texImage2D(i.TEXTURE_2D,0,de,J.width,J.height,0,se,Te,J.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){Ie&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,de,Pe[0].width,Pe[0].height,J.depth);for(let Q=0,ue=Pe.length;Q<ue;Q++)if(ce=Pe[Q],f.format!==Yt)if(se!==null)if(Ie){if(L)if(f.layerUpdates.size>0){const _e=So(ce.width,ce.height,f.format,f.type);for(const ee of f.layerUpdates){const Ae=ce.data.subarray(ee*_e/ce.data.BYTES_PER_ELEMENT,(ee+1)*_e/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ee,ce.width,ce.height,1,se,Ae)}f.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,J.depth,se,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,de,ce.width,ce.height,J.depth,0,ce.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,J.depth,se,Te,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,de,ce.width,ce.height,J.depth,0,se,Te,ce.data)}else{Ie&&Oe&&t.texStorage2D(i.TEXTURE_2D,oe,de,Pe[0].width,Pe[0].height);for(let Q=0,ue=Pe.length;Q<ue;Q++)ce=Pe[Q],f.format!==Yt?se!==null?Ie?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,se,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,de,ce.width,ce.height,0,ce.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?L&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ce.width,ce.height,se,Te,ce.data):t.texImage2D(i.TEXTURE_2D,Q,de,ce.width,ce.height,0,se,Te,ce.data)}else if(f.isDataArrayTexture)if(Ie){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,de,J.width,J.height,J.depth),L)if(f.layerUpdates.size>0){const Q=So(J.width,J.height,f.format,f.type);for(const ue of f.layerUpdates){const _e=J.data.subarray(ue*Q/J.data.BYTES_PER_ELEMENT,(ue+1)*Q/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,J.width,J.height,1,se,Te,_e)}f.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,se,Te,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,J.width,J.height,J.depth,0,se,Te,J.data);else if(f.isData3DTexture)Ie?(Oe&&t.texStorage3D(i.TEXTURE_3D,oe,de,J.width,J.height,J.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,se,Te,J.data)):t.texImage3D(i.TEXTURE_3D,0,de,J.width,J.height,J.depth,0,se,Te,J.data);else if(f.isFramebufferTexture){if(Oe)if(Ie)t.texStorage2D(i.TEXTURE_2D,oe,de,J.width,J.height);else{let Q=J.width,ue=J.height;for(let _e=0;_e<oe;_e++)t.texImage2D(i.TEXTURE_2D,_e,de,Q,ue,0,se,Te,null),Q>>=1,ue>>=1}}else if(f.isHTMLTexture){if("texElementImage2D"in i){const Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),J.parentNode!==Q){Q.appendChild(J),p.add(f),Q.onpaint=ue=>{const _e=ue.changedElements;for(const ee of p)_e.includes(ee.image)&&(ee.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const _e=i.RGBA,ee=i.RGBA,Ae=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_e,ee,Ae,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Ie&&Oe){const Q=ke(Pe[0]);t.texStorage2D(i.TEXTURE_2D,oe,de,Q.width,Q.height)}for(let Q=0,ue=Pe.length;Q<ue;Q++)ce=Pe[Q],Ie?L&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,se,Te,ce):t.texImage2D(i.TEXTURE_2D,Q,de,se,Te,ce);f.generateMipmaps=!1}else if(Ie){if(Oe){const Q=ke(J);t.texStorage2D(i.TEXTURE_2D,oe,de,Q.width,Q.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,Te,J)}else t.texImage2D(i.TEXTURE_2D,0,de,se,Te,J);h(f)&&T(G),ae.__version=re.version,f.onUpdate&&f.onUpdate(f)}y.__version=f.version}function Ee(y,f,N){if(f.image.length!==6)return;const G=Z(y,f),q=f.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+N);const re=n.get(q);if(q.version!==re.__version||G===!0){t.activeTexture(i.TEXTURE0+N);const ae=Ye.getPrimaries(Ye.workingColorSpace),K=f.colorSpace===Rn?null:Ye.getPrimaries(f.colorSpace),J=f.colorSpace===Rn||ae===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const se=f.isCompressedTexture||f.image[0].isCompressedTexture,Te=f.image[0]&&f.image[0].isDataTexture,de=[];for(let ee=0;ee<6;ee++)!se&&!Te?de[ee]=m(f.image[ee],!0,r.maxCubemapSize):de[ee]=Te?f.image[ee].image:f.image[ee],de[ee]=dt(f,de[ee]);const ce=de[0],Pe=s.convert(f.format,f.colorSpace),Ie=s.convert(f.type),Oe=M(f.internalFormat,Pe,Ie,f.normalized,f.colorSpace),L=f.isVideoTexture!==!0,oe=re.__version===void 0||G===!0,Q=q.dataReady;let ue=b(f,ce);Ge(i.TEXTURE_CUBE_MAP,f);let _e;if(se){L&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Oe,ce.width,ce.height);for(let ee=0;ee<6;ee++){_e=de[ee].mipmaps;for(let Ae=0;Ae<_e.length;Ae++){const ye=_e[Ae];f.format!==Yt?Pe!==null?L?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,ye.width,ye.height,Pe,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,Oe,ye.width,ye.height,0,ye.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,ye.width,ye.height,Pe,Ie,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,Oe,ye.width,ye.height,0,Pe,Ie,ye.data)}}}else{if(_e=f.mipmaps,L&&oe){_e.length>0&&ue++;const ee=ke(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Oe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Te){L?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,de[ee].width,de[ee].height,Pe,Ie,de[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Oe,de[ee].width,de[ee].height,0,Pe,Ie,de[ee].data);for(let Ae=0;Ae<_e.length;Ae++){const ft=_e[Ae].image[ee].image;L?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,ft.width,ft.height,Pe,Ie,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,Oe,ft.width,ft.height,0,Pe,Ie,ft.data)}}else{L?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,Ie,de[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Oe,Pe,Ie,de[ee]);for(let Ae=0;Ae<_e.length;Ae++){const ye=_e[Ae];L?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,Pe,Ie,ye.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,Oe,Pe,Ie,ye.image[ee])}}}h(f)&&T(i.TEXTURE_CUBE_MAP),re.__version=q.version,f.onUpdate&&f.onUpdate(f)}y.__version=f.version}function Re(y,f,N,G,q,re){const ae=s.convert(N.format,N.colorSpace),K=s.convert(N.type),J=M(N.internalFormat,ae,K,N.normalized,N.colorSpace),se=n.get(f),Te=n.get(N);if(Te.__renderTarget=f,!se.__hasExternalTextures){const de=Math.max(1,f.width>>re),ce=Math.max(1,f.height>>re);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,re,J,de,ce,f.depth,0,ae,K,null):t.texImage2D(q,re,J,de,ce,0,ae,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),rt(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,q,Te.__webglTexture,0,Xe(f)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,q,Te.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(y,f,N){if(i.bindRenderbuffer(i.RENDERBUFFER,y),f.depthBuffer){const G=f.depthTexture,q=G&&G.isDepthTexture?G.type:null,re=A(f.stencilBuffer,q),ae=f.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;rt(f)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe(f),re,f.width,f.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe(f),re,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,re,f.width,f.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,y)}else{const G=f.textures;for(let q=0;q<G.length;q++){const re=G[q],ae=s.convert(re.format,re.colorSpace),K=s.convert(re.type),J=M(re.internalFormat,ae,K,re.normalized,re.colorSpace);rt(f)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe(f),J,f.width,f.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe(f),J,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,J,f.width,f.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(y,f,N){const G=f.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(f.depthTexture);if(q.__renderTarget=f,(!q.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),G){if(q.__webglInit===void 0&&(q.__webglInit=!0,f.depthTexture.addEventListener("dispose",w)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,f.depthTexture);const se=s.convert(f.depthTexture.format),Te=s.convert(f.depthTexture.type);let de;f.depthTexture.format===_n?de=i.DEPTH_COMPONENT24:f.depthTexture.format===Vn&&(de=i.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,f.width,f.height,0,se,Te,null)}}else j(f.depthTexture,0);const re=q.__webglTexture,ae=Xe(f),K=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,J=f.depthTexture.format===Vn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(f.depthTexture.format===_n)rt(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,K,re,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,J,K,re,0);else if(f.depthTexture.format===Vn)rt(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,K,re,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,J,K,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(y){const f=n.get(y),N=y.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==y.depthTexture){const G=y.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),G){const q=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,G.removeEventListener("dispose",q)};G.addEventListener("dispose",q),f.__depthDisposeCallback=q}f.__boundDepthTexture=G}if(y.depthTexture&&!f.__autoAllocateDepthBuffer)if(N)for(let G=0;G<6;G++)Ve(f.__webglFramebuffer[G],y,G);else{const G=y.texture.mipmaps;G&&G.length>0?Ve(f.__webglFramebuffer[0],y,0):Ve(f.__webglFramebuffer,y,0)}else if(N){f.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[G]),f.__webglDepthbuffer[G]===void 0)f.__webglDepthbuffer[G]=i.createRenderbuffer(),ot(f.__webglDepthbuffer[G],y,!1);else{const q=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=f.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,re)}}else{const G=y.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=i.createRenderbuffer(),ot(f.__webglDepthbuffer,y,!1);else{const q=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=f.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(y,f,N){const G=n.get(y);f!==void 0&&Re(G.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&tt(y)}function xe(y){const f=y.texture,N=n.get(y),G=n.get(f);y.addEventListener("dispose",_);const q=y.textures,re=y.isWebGLCubeRenderTarget===!0,ae=q.length>1;if(ae||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=f.version,a.memory.textures++),re){N.__webglFramebuffer=[];for(let K=0;K<6;K++)if(f.mipmaps&&f.mipmaps.length>0){N.__webglFramebuffer[K]=[];for(let J=0;J<f.mipmaps.length;J++)N.__webglFramebuffer[K][J]=i.createFramebuffer()}else N.__webglFramebuffer[K]=i.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){N.__webglFramebuffer=[];for(let K=0;K<f.mipmaps.length;K++)N.__webglFramebuffer[K]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ae)for(let K=0,J=q.length;K<J;K++){const se=n.get(q[K]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&rt(y)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){const J=q[K];N.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[K]);const se=s.convert(J.format,J.colorSpace),Te=s.convert(J.type),de=M(J.internalFormat,se,Te,J.normalized,J.colorSpace,y.isXRRenderTarget===!0),ce=Xe(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,de,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,N.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,f);for(let K=0;K<6;K++)if(f.mipmaps&&f.mipmaps.length>0)for(let J=0;J<f.mipmaps.length;J++)Re(N.__webglFramebuffer[K][J],y,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else Re(N.__webglFramebuffer[K],y,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);h(f)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let K=0,J=q.length;K<J;K++){const se=q[K],Te=n.get(se);let de=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(de=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Te.__webglTexture),Ge(de,se),Re(N.__webglFramebuffer,y,se,i.COLOR_ATTACHMENT0+K,de,0),h(se)&&T(de)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(K=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,G.__webglTexture),Ge(K,f),f.mipmaps&&f.mipmaps.length>0)for(let J=0;J<f.mipmaps.length;J++)Re(N.__webglFramebuffer[J],y,f,i.COLOR_ATTACHMENT0,K,J);else Re(N.__webglFramebuffer,y,f,i.COLOR_ATTACHMENT0,K,0);h(f)&&T(K),t.unbindTexture()}y.depthBuffer&&tt(y)}function Le(y){const f=y.textures;for(let N=0,G=f.length;N<G;N++){const q=f[N];if(h(q)){const re=R(y),ae=n.get(q).__webglTexture;t.bindTexture(re,ae),T(re),t.unbindTexture()}}}const je=[],et=[];function Fe(y){if(y.samples>0){if(rt(y)===!1){const f=y.textures,N=y.width,G=y.height;let q=i.COLOR_BUFFER_BIT;const re=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(y),K=f.length>1;if(K)for(let se=0;se<f.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const J=y.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let se=0;se<f.length;se++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[se]);const Te=n.get(f[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,N,G,0,0,N,G,q,i.NEAREST),c===!0&&(je.length=0,et.length=0,je.push(i.COLOR_ATTACHMENT0+se),y.depthBuffer&&y.resolveDepthBuffer===!1&&(je.push(re),et.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let se=0;se<f.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,ae.__webglColorRenderbuffer[se]);const Te=n.get(f[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const f=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[f])}}}function Xe(y){return Math.min(r.maxSamples,y.samples)}function rt(y){const f=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function D(y){const f=a.render.frame;d.get(y)!==f&&(d.set(y,f),y.update())}function dt(y,f){const N=y.colorSpace,G=y.format,q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||N!==Mr&&N!==Rn&&(Ye.getTransfer(N)===nt?(G!==Yt||q!==Bt)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",N)),f}function ke(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.getTextureUnits=V,this.setTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=te,this.setTexture3D=ie,this.setTextureCube=le,this.rebindTextures=ve,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Sm(i,e){function t(n,r=Rn){let s;const a=Ye.getTransfer(r);if(n===Bt)return i.UNSIGNED_BYTE;if(n===sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ol)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ll)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sl)return i.BYTE;if(n===al)return i.SHORT;if(n===Di)return i.UNSIGNED_SHORT;if(n===ra)return i.INT;if(n===an)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===gn)return i.HALF_FLOAT;if(n===cl)return i.ALPHA;if(n===ul)return i.RGB;if(n===Yt)return i.RGBA;if(n===_n)return i.DEPTH_COMPONENT;if(n===Vn)return i.DEPTH_STENCIL;if(n===hl)return i.RED;if(n===oa)return i.RED_INTEGER;if(n===Wn)return i.RG;if(n===la)return i.RG_INTEGER;if(n===ca)return i.RGBA_INTEGER;if(n===hr||n===dr||n===fr||n===pr)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===hr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===hr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Es||n===ys||n===bs||n===Ts)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Es)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ys)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ts)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===As||n===ws||n===Rs||n===Cs||n===Ps||n===xr||n===Ds)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===As||n===ws)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Rs)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Cs)return s.COMPRESSED_R11_EAC;if(n===Ps)return s.COMPRESSED_SIGNED_R11_EAC;if(n===xr)return s.COMPRESSED_RG11_EAC;if(n===Ds)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ls||n===Is||n===Us||n===Ns||n===Fs||n===Os||n===Bs||n===zs||n===Gs||n===Vs||n===Hs||n===ks||n===Ws||n===Xs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ls)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Is)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Us)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ns)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fs)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Os)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bs)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zs)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gs)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vs)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hs)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ks)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ws)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xs)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qs||n===Ys||n===Ks)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===qs)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ys)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ks)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zs||n===$s||n===vr||n===Js)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$s)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Js)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Em=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ym=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new El(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new on({vertexShader:Em,fragmentShader:ym,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tm extends Xn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,d=null,p=null,u=null,g=null,x=null;const S=typeof XRWebGLBinding<"u",m=new bm,h={},T=t.getContextAttributes();let R=null,M=null;const A=[],b=[],w=new qe;let _=null;const E=new Ot;E.viewport=new ht;const C=new Ot;C.viewport=new ht;const P=[E,C],I=new Iu;let W=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Y=A[Z];return Y===void 0&&(Y=new Gr,A[Z]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(Z){let Y=A[Z];return Y===void 0&&(Y=new Gr,A[Z]=Y),Y.getGripSpace()},this.getHand=function(Z){let Y=A[Z];return Y===void 0&&(Y=new Gr,A[Z]=Y),Y.getHandSpace()};function O(Z){const Y=b.indexOf(Z.inputSource);if(Y===-1)return;const $=A[Y];$!==void 0&&($.update(Z.inputSource,Z.frame,l||a),$.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",k);for(let Z=0;Z<A.length;Z++){const Y=b[Z];Y!==null&&(b[Z]=null,A[Z].disconnect(Y))}W=null,V=null,m.reset();for(const Z in h)delete h[Z];e.setRenderTarget(R),g=null,u=null,p=null,r=null,M=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",X),r.addEventListener("inputsourceschange",k),T.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,he=null,Ee=null;T.depth&&(Ee=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=T.stencil?Vn:_n,he=T.stencil?Li:an);const Re={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Re),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new sn(u.textureWidth,u.textureHeight,{format:Yt,type:Bt,depthTexture:new pi(u.textureWidth,u.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const $={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new sn(g.framebufferWidth,g.framebufferHeight,{format:Yt,type:Bt,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ge.setContext(r),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(Z){for(let Y=0;Y<Z.removed.length;Y++){const $=Z.removed[Y],he=b.indexOf($);he>=0&&(b[he]=null,A[he].disconnect($))}for(let Y=0;Y<Z.added.length;Y++){const $=Z.added[Y];let he=b.indexOf($);if(he===-1){for(let Re=0;Re<A.length;Re++)if(Re>=b.length){b.push($),he=Re;break}else if(b[Re]===null){b[Re]=$,he=Re;break}if(he===-1)break}const Ee=A[he];Ee&&Ee.connect($)}}const j=new F,te=new F;function ie(Z,Y,$){j.setFromMatrixPosition(Y.matrixWorld),te.setFromMatrixPosition($.matrixWorld);const he=j.distanceTo(te),Ee=Y.projectionMatrix.elements,Re=$.projectionMatrix.elements,ot=Ee[14]/(Ee[10]-1),Ve=Ee[14]/(Ee[10]+1),tt=(Ee[9]+1)/Ee[5],ve=(Ee[9]-1)/Ee[5],xe=(Ee[8]-1)/Ee[0],Le=(Re[8]+1)/Re[0],je=ot*xe,et=ot*Le,Fe=he/(-xe+Le),Xe=Fe*-xe;if(Y.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Xe),Z.translateZ(Fe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ee[10]===-1)Z.projectionMatrix.copy(Y.projectionMatrix),Z.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const rt=ot+Fe,D=Ve+Fe,dt=je-Xe,ke=et+(he-Xe),y=tt*Ve/D*rt,f=ve*Ve/D*rt;Z.projectionMatrix.makePerspective(dt,ke,y,f,rt,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,Y){Y===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Y.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let Y=Z.near,$=Z.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&($=m.depthFar)),I.near=C.near=E.near=Y,I.far=C.far=E.far=$,(W!==I.near||V!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),W=I.near,V=I.far),I.layers.mask=Z.layers.mask|6,E.layers.mask=I.layers.mask&-5,C.layers.mask=I.layers.mask&-3;const he=Z.parent,Ee=I.cameras;le(I,he);for(let Re=0;Re<Ee.length;Re++)le(Ee[Re],he);Ee.length===2?ie(I,E,C):I.projectionMatrix.copy(E.projectionMatrix),pe(Z,I,he)};function pe(Z,Y,$){$===null?Z.matrix.copy(Y.matrixWorld):(Z.matrix.copy($.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Y.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Y.projectionMatrix),Z.projectionMatrixInverse.copy(Y.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=js*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&g===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Z){return h[Z]};let ze=null;function Qe(Z,Y){if(d=Y.getViewerPose(l||a),x=Y,d!==null){const $=d.views;g!==null&&(e.setRenderTargetFramebuffer(M,g.framebuffer),e.setRenderTarget(M));let he=!1;$.length!==I.cameras.length&&(I.cameras.length=0,he=!0);for(let Ve=0;Ve<$.length;Ve++){const tt=$[Ve];let ve=null;if(g!==null)ve=g.getViewport(tt);else{const Le=p.getViewSubImage(u,tt);ve=Le.viewport,Ve===0&&(e.setRenderTargetTextures(M,Le.colorTexture,Le.depthStencilTexture),e.setRenderTarget(M))}let xe=P[Ve];xe===void 0&&(xe=new Ot,xe.layers.enable(Ve),xe.viewport=new ht,P[Ve]=xe),xe.matrix.fromArray(tt.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(tt.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(ve.x,ve.y,ve.width,ve.height),Ve===0&&(I.matrix.copy(xe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),he===!0&&I.cameras.push(xe)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){p=n.getBinding();const Ve=p.getDepthInformation($[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,r.renderState)}if(Ee&&Ee.includes("camera-access")&&S){e.state.unbindTexture(),p=n.getBinding();for(let Ve=0;Ve<$.length;Ve++){const tt=$[Ve].camera;if(tt){let ve=h[tt];ve||(ve=new El,h[tt]=ve);const xe=p.getCameraImage(tt);ve.sourceTexture=xe}}}}for(let $=0;$<A.length;$++){const he=b[$],Ee=A[$];he!==null&&Ee!==void 0&&Ee.update(he,Y,l||a)}ze&&ze(Z,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),x=null}const Ge=new wl;Ge.setAnimationLoop(Qe),this.setAnimationLoop=function(Z){ze=Z},this.dispose=function(){}}}const Am=new ut,Ul=new Ne;Ul.set(-1,0,0,0,1,0,0,0,1);function wm(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,yl(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,T,R,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),p(m,h)):h.isMeshPhongMaterial?(s(m,h),d(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),u(m,h),h.isMeshPhysicalMaterial&&g(m,h,M)):h.isMeshMatcapMaterial?(s(m,h),x(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),S(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,T,R):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===It&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===It&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const T=e.get(h),R=T.envMap,M=T.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(Am.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ul),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,T,R){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*T,m.scale.value=R*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function p(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function g(m,h,T){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===It&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function S(m,h){const T=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Rm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,A){const b=A.program;n.uniformBlockBinding(M,b)}function l(M,A){let b=r[M.id];b===void 0&&(m(M),b=d(M),r[M.id]=b,M.addEventListener("dispose",T));const w=A.program;n.updateUBOMapping(M,w);const _=e.render.frame;s[M.id]!==_&&(u(M),s[M.id]=_)}function d(M){const A=p();M.__bindingPointIndex=A;const b=i.createBuffer(),w=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,w,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,b),b}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const A=r[M.id],b=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let _=0,E=b.length;_<E;_++){const C=b[_];if(Array.isArray(C))for(let P=0,I=C.length;P<I;P++)g(C[P],_,P,w);else g(C,_,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(M,A,b,w){if(S(M,A,b,w)===!0){const _=M.__offset,E=M.value;if(Array.isArray(E)){let C=0;for(let P=0;P<E.length;P++){const I=E[P],W=h(I);x(I,M.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(E,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function x(M,A,b){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,b)}function S(M,A,b,w){const _=M.value,E=A+"_"+b;if(w[E]===void 0)return typeof _=="number"||typeof _=="boolean"?w[E]=_:ArrayBuffer.isView(_)?w[E]=_.slice():w[E]=_.clone(),!0;{const C=w[E];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return w[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(M){const A=M.uniforms;let b=0;const w=16;for(let E=0,C=A.length;E<C;E++){const P=Array.isArray(A[E])?A[E]:[A[E]];for(let I=0,W=P.length;I<W;I++){const V=P[I],O=Array.isArray(V.value)?V.value:[V.value];for(let X=0,k=O.length;X<k;X++){const j=O[X],te=h(j),ie=b%w,le=ie%te.boundary,pe=ie+le;b+=le,pe!==0&&w-pe<te.storage&&(b+=w-pe),V.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=te.storage}}}const _=b%w;return _>0&&(b+=w-_),M.__size=b,M.__cache={},this}function h(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",M),A}function T(M){const A=M.target;A.removeEventListener("dispose",T);const b=a.indexOf(A.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function R(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:R}}const Cm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jt=null;function Pm(){return jt===null&&(jt=new gu(Cm,16,16,Wn,gn),jt.name="DFG_LUT",jt.minFilter=Rt,jt.magFilter=Rt,jt.wrapS=fn,jt.wrapT=fn,jt.generateMipmaps=!1,jt.needsUpdate=!0),jt}class Dm{constructor(e={}){const{canvas:t=Yc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:g=Bt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const S=g,m=new Set([ca,la,oa]),h=new Set([Bt,an,Di,Li,sa,aa]),T=new Uint32Array(4),R=new Int32Array(4),M=new F;let A=null,b=null;const w=[],_=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,I=null,W=null,V=null,O=null;this._outputColorSpace=Vt;let X=0,k=0,j=null,te=-1,ie=null;const le=new ht,pe=new ht;let ze=null;const Qe=new Ze(0);let Ge=0,Z=t.width,Y=t.height,$=1,he=null,Ee=null;const Re=new ht(0,0,Z,Y),ot=new ht(0,0,Z,Y);let Ve=!1;const tt=new fa;let ve=!1,xe=!1;const Le=new ut,je=new F,et=new ht,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function rt(){return j===null?$:1}let D=n;function dt(v,U){return t.getContext(v,U)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ia}`),t.addEventListener("webglcontextlost",ft,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Zt,!1),D===null){const U="webgl2";if(D=dt(U,v),D===null)throw dt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw Je("WebGLRenderer: "+v.message),v}let ke,y,f,N,G,q,re,ae,K,J,se,Te,de,ce,Pe,Ie,Oe,L,oe,Q,ue,_e,ee;function Ae(){ke=new Pf(D),ke.init(),ue=new Sm(D,ke),y=new Ef(D,ke,e,ue),f=new vm(D,ke),y.reversedDepthBuffer&&u&&f.buffers.depth.setReversed(!0),W=D.createFramebuffer(),V=D.createFramebuffer(),O=D.createFramebuffer(),N=new If(D),G=new sm,q=new Mm(D,ke,f,G,y,ue,N),re=new Cf(C),ae=new Fu(D),_e=new Mf(D,ae),K=new Df(D,ae,N,_e),J=new Nf(D,K,ae,_e,N),L=new Uf(D,y,q),Pe=new yf(G),se=new rm(C,re,ke,y,_e,Pe),Te=new wm(C,G),de=new om,ce=new fm(ke),Oe=new vf(C,re,f,J,x,c),Ie=new xm(C,J,y),ee=new Rm(D,N,y,f),oe=new Sf(D,ke,N),Q=new Lf(D,ke,N),N.programs=se.programs,C.capabilities=y,C.extensions=ke,C.properties=G,C.renderLists=de,C.shadowMap=Ie,C.state=f,C.info=N}Ae(),S!==Bt&&(E=new Of(S,t.width,t.height,o,r,s));const ye=new Tm(C,D);this.xr=ye,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const v=ke.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=ke.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(v){v!==void 0&&($=v,this.setSize(Z,Y,!1))},this.getSize=function(v){return v.set(Z,Y)},this.setSize=function(v,U,H=!0){if(ye.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=v,Y=U,t.width=Math.floor(v*$),t.height=Math.floor(U*$),H===!0&&(t.style.width=v+"px",t.style.height=U+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(Z*$,Y*$).floor()},this.setDrawingBufferSize=function(v,U,H){Z=v,Y=U,$=H,t.width=Math.floor(v*H),t.height=Math.floor(U*H),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(S===Bt){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(le)},this.getViewport=function(v){return v.copy(Re)},this.setViewport=function(v,U,H,B){v.isVector4?Re.set(v.x,v.y,v.z,v.w):Re.set(v,U,H,B),f.viewport(le.copy(Re).multiplyScalar($).round())},this.getScissor=function(v){return v.copy(ot)},this.setScissor=function(v,U,H,B){v.isVector4?ot.set(v.x,v.y,v.z,v.w):ot.set(v,U,H,B),f.scissor(pe.copy(ot).multiplyScalar($).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(v){f.setScissorTest(Ve=v)},this.setOpaqueSort=function(v){he=v},this.setTransparentSort=function(v){Ee=v},this.getClearColor=function(v){return v.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,H=!0){let B=0;if(v){let z=!1;if(j!==null){const ge=j.texture.format;z=m.has(ge)}if(z){const ge=j.texture.type,Se=h.has(ge),me=Oe.getClearColor(),be=Oe.getClearAlpha(),we=me.r,Be=me.g,We=me.b;Se?(T[0]=we,T[1]=Be,T[2]=We,T[3]=be,D.clearBufferuiv(D.COLOR,0,T)):(R[0]=we,R[1]=Be,R[2]=We,R[3]=be,D.clearBufferiv(D.COLOR,0,R))}else B|=D.COLOR_BUFFER_BIT}U&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),I=v},this.dispose=function(){t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Zt,!1),Oe.dispose(),de.dispose(),ce.dispose(),G.dispose(),re.dispose(),J.dispose(),_e.dispose(),ee.dispose(),se.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Ma),ye.removeEventListener("sessionend",Sa),Ln.stop()};function ft(v){v.preventDefault(),$a("WebGLRenderer: Context Lost."),P=!0}function lt(){$a("WebGLRenderer: Context Restored."),P=!1;const v=N.autoReset,U=Ie.enabled,H=Ie.autoUpdate,B=Ie.needsUpdate,z=Ie.type;Ae(),N.autoReset=v,Ie.enabled=U,Ie.autoUpdate=H,Ie.needsUpdate=B,Ie.type=z}function Zt(v){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function $t(v){const U=v.target;U.removeEventListener("dispose",$t),Nl(U)}function Nl(v){Fl(v),G.remove(v)}function Fl(v){const U=G.get(v).programs;U!==void 0&&(U.forEach(function(H){se.releaseProgram(H)}),v.isShaderMaterial&&se.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,H,B,z,ge){U===null&&(U=Fe);const Se=z.isMesh&&z.matrixWorld.determinantAffine()<0,me=zl(v,U,H,B,z);f.setMaterial(B,Se);let be=H.index,we=1;if(B.wireframe===!0){if(be=K.getWireframeAttribute(H),be===void 0)return;we=2}const Be=H.drawRange,We=H.attributes.position;let Ce=Be.start*we,it=(Be.start+Be.count)*we;ge!==null&&(Ce=Math.max(Ce,ge.start*we),it=Math.min(it,(ge.start+ge.count)*we)),be!==null?(Ce=Math.max(Ce,0),it=Math.min(it,be.count)):We!=null&&(Ce=Math.max(Ce,0),it=Math.min(it,We.count));const mt=it-Ce;if(mt<0||mt===1/0)return;_e.setup(z,B,me,H,be);let pt,st=oe;if(be!==null&&(pt=ae.get(be),st=Q,st.setIndex(pt)),z.isMesh)B.wireframe===!0?(f.setLineWidth(B.wireframeLinewidth*rt()),st.setMode(D.LINES)):st.setMode(D.TRIANGLES);else if(z.isLine){let Tt=B.linewidth;Tt===void 0&&(Tt=1),f.setLineWidth(Tt*rt()),z.isLineSegments?st.setMode(D.LINES):z.isLineLoop?st.setMode(D.LINE_LOOP):st.setMode(D.LINE_STRIP)}else z.isPoints?st.setMode(D.POINTS):z.isSprite&&st.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(ke.get("WEBGL_multi_draw"))st.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Tt=z._multiDrawStarts,Me=z._multiDrawCounts,Ut=z._multiDrawCount,$e=be?ae.get(be).bytesPerElement:1,zt=G.get(B).currentProgram.getUniforms();for(let Jt=0;Jt<Ut;Jt++)zt.setValue(D,"_gl_DrawID",Jt),st.render(Tt[Jt]/$e,Me[Jt])}else if(z.isInstancedMesh)st.renderInstances(Ce,mt,z.count);else if(H.isInstancedBufferGeometry){const Tt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Me=Math.min(H.instanceCount,Tt);st.renderInstances(Ce,mt,Me)}else st.render(Ce,mt)};function va(v,U,H){v.transparent===!0&&v.side===Ht&&v.forceSinglePass===!1?(v.side=It,v.needsUpdate=!0,zi(v,U,H),v.side=Pn,v.needsUpdate=!0,zi(v,U,H),v.side=Ht):zi(v,U,H)}this.compile=function(v,U,H=null){H===null&&(H=v),b=ce.get(H),b.init(U),_.push(b),H.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),v!==H&&v.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights();const B=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ge=z.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){const me=ge[Se];va(me,H,z),B.add(me)}else va(ge,H,z),B.add(ge)}),b=_.pop(),B},this.compileAsync=function(v,U,H=null){const B=this.compile(v,U,H);return new Promise(z=>{function ge(){if(B.forEach(function(Se){G.get(Se).currentProgram.isReady()&&B.delete(Se)}),B.size===0){z(v);return}setTimeout(ge,10)}ke.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Rr=null;function Ol(v){Rr&&Rr(v)}function Ma(){Ln.stop()}function Sa(){Ln.start()}const Ln=new wl;Ln.setAnimationLoop(Ol),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(v){Rr=v,ye.setAnimationLoop(v),v===null?Ln.stop():Ln.start()},ye.addEventListener("sessionstart",Ma),ye.addEventListener("sessionend",Sa),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(v,U);const H=ye.enabled===!0&&ye.isPresenting===!0,B=E!==null&&(j===null||H)&&E.begin(C,j);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(U),U=ye.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,U,j),b=ce.get(v,_.length),b.init(U),b.state.textureUnits=q.getTextureUnits(),_.push(b),Le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),tt.setFromProjectionMatrix(Le,nn,U.reversedDepth),xe=this.localClippingEnabled,ve=Pe.init(this.clippingPlanes,xe),A=de.get(v,w.length),A.init(),w.push(A),ye.enabled===!0&&ye.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&Cr(Se,U,-1/0,C.sortObjects)}Cr(v,U,0,C.sortObjects),A.finish(),C.sortObjects===!0&&A.sort(he,Ee,U.reversedDepth),Xe=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Xe&&Oe.addToRenderList(A,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ve===!0&&Pe.beginShadows();const z=b.state.shadowsArray;if(Ie.render(z,v,U),ve===!0&&Pe.endShadows(),(B&&E.hasRenderPass())===!1){const Se=A.opaque,me=A.transmissive;if(b.setupLights(),U.isArrayCamera){const be=U.cameras;if(me.length>0)for(let we=0,Be=be.length;we<Be;we++){const We=be[we];ya(Se,me,v,We)}Xe&&Oe.render(v);for(let we=0,Be=be.length;we<Be;we++){const We=be[we];Ea(A,v,We,We.viewport)}}else me.length>0&&ya(Se,me,v,U),Xe&&Oe.render(v),Ea(A,v,U)}j!==null&&k===0&&(q.updateMultisampleRenderTarget(j),q.updateRenderTargetMipmap(j)),B&&E.end(C),v.isScene===!0&&v.onAfterRender(C,v,U),_e.resetDefaultState(),te=-1,ie=null,_.pop(),_.length>0?(b=_[_.length-1],q.setTextureUnits(b.state.textureUnits),ve===!0&&Pe.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?A=w[w.length-1]:A=null,I!==null&&I.renderEnd()};function Cr(v,U,H,B){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||tt.intersectsSprite(v)){B&&et.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Le);const Se=J.update(v),me=v.material;me.visible&&A.push(v,Se,me,H,et.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||tt.intersectsObject(v))){const Se=J.update(v),me=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),et.copy(v.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),et.copy(Se.boundingSphere.center)),et.applyMatrix4(v.matrixWorld).applyMatrix4(Le)),Array.isArray(me)){const be=Se.groups;for(let we=0,Be=be.length;we<Be;we++){const We=be[we],Ce=me[We.materialIndex];Ce&&Ce.visible&&A.push(v,Se,Ce,H,et.z,We)}}else me.visible&&A.push(v,Se,me,H,et.z,null)}}const ge=v.children;for(let Se=0,me=ge.length;Se<me;Se++)Cr(ge[Se],U,H,B)}function Ea(v,U,H,B){const{opaque:z,transmissive:ge,transparent:Se}=v;b.setupLightsView(H),ve===!0&&Pe.setGlobalState(C.clippingPlanes,H),B&&f.viewport(le.copy(B)),z.length>0&&Bi(z,U,H),ge.length>0&&Bi(ge,U,H),Se.length>0&&Bi(Se,U,H),f.buffers.depth.setTest(!0),f.buffers.depth.setMask(!0),f.buffers.color.setMask(!0),f.setPolygonOffset(!1)}function ya(v,U,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[B.id]===void 0){const Ce=ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[B.id]=new sn(1,1,{generateMipmaps:!0,type:Ce?gn:Bt,minFilter:Gn,samples:Math.max(4,y.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const ge=b.state.transmissionRenderTarget[B.id],Se=B.viewport||le;ge.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);const me=C.getRenderTarget(),be=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(Qe),Ge=C.getClearAlpha(),Ge<1&&C.setClearColor(16777215,.5),C.clear(),Xe&&Oe.render(H);const Be=C.toneMapping;C.toneMapping=rn;const We=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),b.setupLightsView(B),ve===!0&&Pe.setGlobalState(C.clippingPlanes,B),Bi(v,H,B),q.updateMultisampleRenderTarget(ge),q.updateRenderTargetMipmap(ge),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let it=0,mt=U.length;it<mt;it++){const pt=U[it],{object:st,geometry:Tt,material:Me,group:Ut}=pt;if(Me.side===Ht&&st.layers.test(B.layers)){const $e=Me.side;Me.side=It,Me.needsUpdate=!0,ba(st,H,B,Tt,Me,Ut),Me.side=$e,Me.needsUpdate=!0,Ce=!0}}Ce===!0&&(q.updateMultisampleRenderTarget(ge),q.updateRenderTargetMipmap(ge))}C.setRenderTarget(me,be,we),C.setClearColor(Qe,Ge),We!==void 0&&(B.viewport=We),C.toneMapping=Be}function Bi(v,U,H){const B=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ge=v.length;z<ge;z++){const Se=v[z],{object:me,geometry:be,group:we}=Se;let Be=Se.material;Be.allowOverride===!0&&B!==null&&(Be=B),me.layers.test(H.layers)&&ba(me,U,H,be,Be,we)}}function ba(v,U,H,B,z,ge){v.onBeforeRender(C,U,H,B,z,ge),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(C,U,H,B,v,ge),z.transparent===!0&&z.side===Ht&&z.forceSinglePass===!1?(z.side=It,z.needsUpdate=!0,C.renderBufferDirect(H,U,B,z,v,ge),z.side=Pn,z.needsUpdate=!0,C.renderBufferDirect(H,U,B,z,v,ge),z.side=Ht):C.renderBufferDirect(H,U,B,z,v,ge),v.onAfterRender(C,U,H,B,z,ge)}function zi(v,U,H){U.isScene!==!0&&(U=Fe);const B=G.get(v),z=b.state.lights,ge=b.state.shadowsArray,Se=z.state.version,me=se.getParameters(v,z.state,ge,U,H,b.state.lightProbeGridArray),be=se.getProgramCacheKey(me);let we=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;const Be=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=re.get(v.envMap||B.environment,Be),B.envMapRotation=B.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,we===void 0&&(v.addEventListener("dispose",$t),we=new Map,B.programs=we);let We=we.get(be);if(We!==void 0){if(B.currentProgram===We&&B.lightsStateVersion===Se)return Aa(v,me),We}else me.uniforms=se.getUniforms(v),I!==null&&v.isNodeMaterial&&I.build(v,H,me),v.onBeforeCompile(me,C),We=se.acquireProgram(me,be),we.set(be,We),B.uniforms=me.uniforms;const Ce=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ce.clippingPlanes=Pe.uniform),Aa(v,me),B.needsLights=Vl(v),B.lightsStateVersion=Se,B.needsLights&&(Ce.ambientLightColor.value=z.state.ambient,Ce.lightProbe.value=z.state.probe,Ce.directionalLights.value=z.state.directional,Ce.directionalLightShadows.value=z.state.directionalShadow,Ce.spotLights.value=z.state.spot,Ce.spotLightShadows.value=z.state.spotShadow,Ce.rectAreaLights.value=z.state.rectArea,Ce.ltc_1.value=z.state.rectAreaLTC1,Ce.ltc_2.value=z.state.rectAreaLTC2,Ce.pointLights.value=z.state.point,Ce.pointLightShadows.value=z.state.pointShadow,Ce.hemisphereLights.value=z.state.hemi,Ce.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ce.spotLightMatrix.value=z.state.spotLightMatrix,Ce.spotLightMap.value=z.state.spotLightMap,Ce.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=b.state.lightProbeGridArray.length>0,B.currentProgram=We,B.uniformsList=null,We}function Ta(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=mr.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Aa(v,U){const H=G.get(v);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Bl(v,U){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let H=0,B=v.length;H<B;H++){const z=v[H];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function zl(v,U,H,B,z){U.isScene!==!0&&(U=Fe),q.resetTextureUnits();const ge=U.fog,Se=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,me=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ye.workingColorSpace,be=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,we=re.get(B.envMap||Se,be),Be=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,We=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ce=!!H.morphAttributes.position,it=!!H.morphAttributes.normal,mt=!!H.morphAttributes.color;let pt=rn;B.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(pt=C.toneMapping);const st=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Tt=st!==void 0?st.length:0,Me=G.get(B),Ut=b.state.lights;if(ve===!0&&(xe===!0||v!==ie)){const ct=v===ie&&B.id===te;Pe.setState(B,v,ct)}let $e=!1;B.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ut.state.version||Me.outputColorSpace!==me||z.isBatchedMesh&&Me.batching===!1||!z.isBatchedMesh&&Me.batching===!0||z.isBatchedMesh&&Me.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Me.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Me.instancing===!1||!z.isInstancedMesh&&Me.instancing===!0||z.isSkinnedMesh&&Me.skinning===!1||!z.isSkinnedMesh&&Me.skinning===!0||z.isInstancedMesh&&Me.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Me.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Me.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Me.instancingMorph===!1&&z.morphTexture!==null||Me.envMap!==we||B.fog===!0&&Me.fog!==ge||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Pe.numPlanes||Me.numIntersection!==Pe.numIntersection)||Me.vertexAlphas!==Be||Me.vertexTangents!==We||Me.morphTargets!==Ce||Me.morphNormals!==it||Me.morphColors!==mt||Me.toneMapping!==pt||Me.morphTargetsCount!==Tt||!!Me.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,Me.__version=B.version);let zt=Me.currentProgram;$e===!0&&(zt=zi(B,U,z),I&&B.isNodeMaterial&&I.onUpdateProgram(B,zt,Me));let Jt=!1,xn=!1,qn=!1;const at=zt.getUniforms(),gt=Me.uniforms;if(f.useProgram(zt.program)&&(Jt=!0,xn=!0,qn=!0),B.id!==te&&(te=B.id,xn=!0),Me.needsLights){const ct=Bl(b.state.lightProbeGridArray,z);Me.lightProbeGrid!==ct&&(Me.lightProbeGrid=ct,xn=!0)}if(Jt||ie!==v){f.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),at.setValue(D,"projectionMatrix",v.projectionMatrix),at.setValue(D,"viewMatrix",v.matrixWorldInverse);const Mn=at.map.cameraPosition;Mn!==void 0&&Mn.setValue(D,je.setFromMatrixPosition(v.matrixWorld)),y.logarithmicDepthBuffer&&at.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&at.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),ie!==v&&(ie=v,xn=!0,qn=!0)}if(Me.needsLights&&(Ut.state.directionalShadowMap.length>0&&at.setValue(D,"directionalShadowMap",Ut.state.directionalShadowMap,q),Ut.state.spotShadowMap.length>0&&at.setValue(D,"spotShadowMap",Ut.state.spotShadowMap,q),Ut.state.pointShadowMap.length>0&&at.setValue(D,"pointShadowMap",Ut.state.pointShadowMap,q)),z.isSkinnedMesh){at.setOptional(D,z,"bindMatrix"),at.setOptional(D,z,"bindMatrixInverse");const ct=z.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),at.setValue(D,"boneTexture",ct.boneTexture,q))}z.isBatchedMesh&&(at.setOptional(D,z,"batchingTexture"),at.setValue(D,"batchingTexture",z._matricesTexture,q),at.setOptional(D,z,"batchingIdTexture"),at.setValue(D,"batchingIdTexture",z._indirectTexture,q),at.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&at.setValue(D,"batchingColorTexture",z._colorsTexture,q));const vn=H.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&L.update(z,H,zt),(xn||Me.receiveShadow!==z.receiveShadow)&&(Me.receiveShadow=z.receiveShadow,at.setValue(D,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(gt.envMapIntensity.value=U.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=Pm()),xn){if(at.setValue(D,"toneMappingExposure",C.toneMappingExposure),Me.needsLights&&Gl(gt,qn),ge&&B.fog===!0&&Te.refreshFogUniforms(gt,ge),Te.refreshMaterialUniforms(gt,B,$,Y,b.state.transmissionRenderTarget[v.id]),Me.needsLights&&Me.lightProbeGrid){const ct=Me.lightProbeGrid;gt.probesSH.value=ct.texture,gt.probesMin.value.copy(ct.boundingBox.min),gt.probesMax.value.copy(ct.boundingBox.max),gt.probesResolution.value.copy(ct.resolution)}mr.upload(D,Ta(Me),gt,q)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(mr.upload(D,Ta(Me),gt,q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&at.setValue(D,"center",z.center),at.setValue(D,"modelViewMatrix",z.modelViewMatrix),at.setValue(D,"normalMatrix",z.normalMatrix),at.setValue(D,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const ct=B.uniformsGroups;for(let Mn=0,Yn=ct.length;Mn<Yn;Mn++){const wa=ct[Mn];ee.update(wa,zt),ee.bind(wa,zt)}}return zt}function Gl(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Vl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(v,U,H){const B=G.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(v.texture).__webglTexture=U,G.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const H=G.get(v);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,H=0){j=v,X=U,k=H;let B=null,z=!1,ge=!1;if(v){const me=G.get(v);if(me.__useDefaultFramebuffer!==void 0){f.bindFramebuffer(D.FRAMEBUFFER,me.__webglFramebuffer),le.copy(v.viewport),pe.copy(v.scissor),ze=v.scissorTest,f.viewport(le),f.scissor(pe),f.setScissorTest(ze),te=-1;return}else if(me.__webglFramebuffer===void 0)q.setupRenderTarget(v);else if(me.__hasExternalTextures)q.rebindTextures(v,G.get(v.texture).__webglTexture,G.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Be=v.depthTexture;if(me.__boundDepthTexture!==Be){if(Be!==null&&G.has(Be)&&(v.width!==Be.image.width||v.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(v)}}const be=v.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ge=!0);const we=G.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(we[U])?B=we[U][H]:B=we[U],z=!0):v.samples>0&&q.useMultisampledRTT(v)===!1?B=G.get(v).__webglMultisampledFramebuffer:Array.isArray(we)?B=we[H]:B=we,le.copy(v.viewport),pe.copy(v.scissor),ze=v.scissorTest}else le.copy(Re).multiplyScalar($).floor(),pe.copy(ot).multiplyScalar($).floor(),ze=Ve;if(H!==0&&(B=W),f.bindFramebuffer(D.FRAMEBUFFER,B)&&f.drawBuffers(v,B),f.viewport(le),f.scissor(pe),f.setScissorTest(ze),z){const me=G.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,H)}else if(ge){const me=U;for(let be=0;be<v.textures.length;be++){const we=G.get(v.textures[be]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+be,we.__webglTexture,H,me)}}else if(v!==null&&H!==0){const me=G.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,me.__webglTexture,H)}te=-1},this.readRenderTargetPixels=function(v,U,H,B,z,ge,Se,me=0){if(!(v&&v.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){f.bindFramebuffer(D.FRAMEBUFFER,be);try{const we=v.textures[me],Be=we.format,We=we.type;if(v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!y.textureFormatReadable(Be)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!y.textureTypeReadable(We)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-B&&H>=0&&H<=v.height-z&&D.readPixels(U,H,B,z,ue.convert(Be),ue.convert(We),ge)}finally{const we=j!==null?G.get(j).__webglFramebuffer:null;f.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(v,U,H,B,z,ge,Se,me=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=G.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be)if(U>=0&&U<=v.width-B&&H>=0&&H<=v.height-z){f.bindFramebuffer(D.FRAMEBUFFER,be);const we=v.textures[me],Be=we.format,We=we.type;if(v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!y.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!y.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.bufferData(D.PIXEL_PACK_BUFFER,ge.byteLength,D.STREAM_READ),D.readPixels(U,H,B,z,ue.convert(Be),ue.convert(We),0);const it=j!==null?G.get(j).__webglFramebuffer:null;f.bindFramebuffer(D.FRAMEBUFFER,it);const mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Kc(D,mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ge),D.deleteBuffer(Ce),D.deleteSync(mt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,H=0){const B=Math.pow(2,-H),z=Math.floor(v.image.width*B),ge=Math.floor(v.image.height*B),Se=U!==null?U.x:0,me=U!==null?U.y:0;q.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,Se,me,z,ge),f.unbindTexture()},this.copyTextureToTexture=function(v,U,H=null,B=null,z=0,ge=0){let Se,me,be,we,Be,We,Ce,it,mt;const pt=v.isCompressedTexture?v.mipmaps[ge]:v.image;if(H!==null)Se=H.max.x-H.min.x,me=H.max.y-H.min.y,be=H.isBox3?H.max.z-H.min.z:1,we=H.min.x,Be=H.min.y,We=H.isBox3?H.min.z:0;else{const gt=Math.pow(2,-z);Se=Math.floor(pt.width*gt),me=Math.floor(pt.height*gt),v.isDataArrayTexture?be=pt.depth:v.isData3DTexture?be=Math.floor(pt.depth*gt):be=1,we=0,Be=0,We=0}B!==null?(Ce=B.x,it=B.y,mt=B.z):(Ce=0,it=0,mt=0);const st=ue.convert(U.format),Tt=ue.convert(U.type);let Me;U.isData3DTexture?(q.setTexture3D(U,0),Me=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(q.setTexture2DArray(U,0),Me=D.TEXTURE_2D_ARRAY):(q.setTexture2D(U,0),Me=D.TEXTURE_2D),f.activeTexture(D.TEXTURE0),f.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),f.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),f.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Ut=f.getParameter(D.UNPACK_ROW_LENGTH),$e=f.getParameter(D.UNPACK_IMAGE_HEIGHT),zt=f.getParameter(D.UNPACK_SKIP_PIXELS),Jt=f.getParameter(D.UNPACK_SKIP_ROWS),xn=f.getParameter(D.UNPACK_SKIP_IMAGES);f.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),f.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),f.pixelStorei(D.UNPACK_SKIP_PIXELS,we),f.pixelStorei(D.UNPACK_SKIP_ROWS,Be),f.pixelStorei(D.UNPACK_SKIP_IMAGES,We);const qn=v.isDataArrayTexture||v.isData3DTexture,at=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const gt=G.get(v),vn=G.get(U),ct=G.get(gt.__renderTarget),Mn=G.get(vn.__renderTarget);f.bindFramebuffer(D.READ_FRAMEBUFFER,ct.__webglFramebuffer),f.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let Yn=0;Yn<be;Yn++)qn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(v).__webglTexture,z,We+Yn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(U).__webglTexture,ge,mt+Yn)),D.blitFramebuffer(we,Be,Se,me,Ce,it,Se,me,D.DEPTH_BUFFER_BIT,D.NEAREST);f.bindFramebuffer(D.READ_FRAMEBUFFER,null),f.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||G.has(v)){const gt=G.get(v),vn=G.get(U);f.bindFramebuffer(D.READ_FRAMEBUFFER,V),f.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let ct=0;ct<be;ct++)qn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,gt.__webglTexture,z,We+ct):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gt.__webglTexture,z),at?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vn.__webglTexture,ge,mt+ct):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vn.__webglTexture,ge),z!==0?D.blitFramebuffer(we,Be,Se,me,Ce,it,Se,me,D.COLOR_BUFFER_BIT,D.NEAREST):at?D.copyTexSubImage3D(Me,ge,Ce,it,mt+ct,we,Be,Se,me):D.copyTexSubImage2D(Me,ge,Ce,it,we,Be,Se,me);f.bindFramebuffer(D.READ_FRAMEBUFFER,null),f.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else at?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(Me,ge,Ce,it,mt,Se,me,be,st,Tt,pt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Me,ge,Ce,it,mt,Se,me,be,st,pt.data):D.texSubImage3D(Me,ge,Ce,it,mt,Se,me,be,st,Tt,pt):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ge,Ce,it,Se,me,st,Tt,pt.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ge,Ce,it,pt.width,pt.height,st,pt.data):D.texSubImage2D(D.TEXTURE_2D,ge,Ce,it,Se,me,st,Tt,pt);f.pixelStorei(D.UNPACK_ROW_LENGTH,Ut),f.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$e),f.pixelStorei(D.UNPACK_SKIP_PIXELS,zt),f.pixelStorei(D.UNPACK_SKIP_ROWS,Jt),f.pixelStorei(D.UNPACK_SKIP_IMAGES,xn),ge===0&&U.generateMipmaps&&D.generateMipmap(Me),f.unbindTexture()},this.initRenderTarget=function(v){G.get(v).__webglFramebuffer===void 0&&q.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?q.setTextureCube(v,0):v.isData3DTexture?q.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?q.setTexture2DArray(v,0):q.setTexture2D(v,0),f.unbindTexture()},this.resetState=function(){X=0,k=0,j=null,f.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}function Lm(){const i=De.useRef(null);return De.useEffect(()=>{const e=i.current;if(!e)return;const t=new Dm({alpha:!0,antialias:!0,powerPreference:"high-performance"}),n=Math.min(window.devicePixelRatio||1,1.75);t.setPixelRatio(n),t.setSize(e.clientWidth,e.clientHeight),t.setClearColor(0,0),e.appendChild(t.domElement);const r=new uu,s=new Ot(55,e.clientWidth/e.clientHeight,.1,100);s.position.set(0,0,9);const a=new Du(16774112,.9);r.add(a);const o=new Mo(16757854,1.6,30);o.position.set(2,2,5),r.add(o);const c=new Pu(12575684,.9);c.position.set(-3,4,2),r.add(c);const l=new Mo(16767392,.7,20);l.position.set(-2,-2,4),r.add(l);const d={petalDeep:14251863,petalMid:15246141,lotusCore:16764797,leaf:5217891,leafDark:3111501,gold:15776094,dust:16767370},p=new Hn;r.add(p);const u=new Hn;p.add(u);const g=new yr(.32,14,10);g.scale(.42,1.6,.22);const x=new An({color:d.petalMid,flatShading:!0,roughness:.75,metalness:.05,emissive:d.petalMid,emissiveIntensity:.06}),S=new An({color:d.petalDeep,flatShading:!0,roughness:.7,metalness:.05,emissive:d.petalDeep,emissiveIntensity:.05}),m=new Hn;u.add(m);for(let Y=0;Y<8;Y++){const $=Y/8*Math.PI*2,he=new vt(g,x);he.position.set(Math.cos($)*.55,-.1,Math.sin($)*.55),he.rotation.x=Math.cos($)*-.5,he.rotation.z=Math.sin($)*-.5,he.rotation.y=-$,m.add(he)}for(let Y=0;Y<6;Y++){const $=Y/6*Math.PI*2+.35,he=new vt(g,S);he.position.set(Math.cos($)*.3,.28,Math.sin($)*.3),he.rotation.x=Math.cos($)*-.28,he.rotation.z=Math.sin($)*-.28,he.rotation.y=-$,m.add(he)}const h=new vt(new yr(.2,16,12),new An({color:d.lotusCore,roughness:.35,metalness:.1,emissive:d.lotusCore,emissiveIntensity:.25}));h.position.y=.5,u.add(h);const T=new vt(new pa(1.05,28),new An({color:d.leafDark,roughness:.8,side:Ht}));T.rotation.x=-Math.PI/2,T.position.y=-.85,u.add(T);const R=new An({color:d.gold,roughness:.35,metalness:.6,emissive:d.gold,emissiveIntensity:.18}),M=new vt(new Pi(2.1,.028,12,90),R);M.rotation.x=Math.PI/2.15,p.add(M);const A=new vt(new Pi(2.7,.018,12,110),R);A.rotation.x=Math.PI/1.85,A.rotation.y=.6,p.add(A);const b=new vt(new Pi(3.3,.012,10,130),R);b.rotation.x=Math.PI/1.7,b.rotation.z=.4,p.add(b);const w=new An({color:d.leaf,roughness:.7,flatShading:!0}),_=new ga(.06,.34,5),E=[];for(let Y=0;Y<10;Y++){const $=Y/10*Math.PI*2,he=1.45+Y%3*.3,Ee=new vt(_,w);Ee.position.set(Math.cos($)*he,-.75,Math.sin($)*he),Ee.rotation.z=Math.PI/2-$,Ee.rotation.x=Math.PI/2,p.add(Ee),E.push(Ee)}const C=[],P=new An({color:d.leaf,roughness:.75,side:Ht,transparent:!0,opacity:.85}),I=new An({color:15246141,roughness:.75,side:Ht,transparent:!0,opacity:.7}),W=new Oi(.34,.58);for(let Y=0;Y<22;Y++){const $=new vt(W,Y%5===0?I:P);$.position.set((Math.random()-.5)*14,(Math.random()-.5)*9,-2-Math.random()*4),$.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const he=.6+Math.random()*1.1;$.scale.setScalar(he),r.add($),C.push({mesh:$,speed:.12+Math.random()*.28,phase:Math.random()*Math.PI*2,drift:.3+Math.random()*.8})}const V=240,O=new Float32Array(V*3);for(let Y=0;Y<V;Y++)O[Y*3]=(Math.random()-.5)*16,O[Y*3+1]=(Math.random()-.5)*10,O[Y*3+2]=-1-Math.random()*5;const X=new Dt;X.setAttribute("position",new Kt(O,3));const k=new Ml({color:d.dust,size:.06,transparent:!0,opacity:.55,depthWrite:!1}),j=new fo(X,k);r.add(j);const te={x:0,y:0},ie={x:0,y:0},le=Y=>{te.x=Y.clientX/window.innerWidth*2-1,te.y=-(Y.clientY/window.innerHeight)*2+1};window.addEventListener("pointermove",le,{passive:!0});const pe=()=>{const Y=e.clientWidth,$=e.clientHeight;Y===0||$===0||(t.setSize(Y,$),s.aspect=Y/$,s.updateProjectionMatrix())};window.addEventListener("resize",pe);const ze=new Uu;let Qe=0,Ge=!1;const Z=()=>{if(Ge)return;const Y=ze.getElapsedTime(),$=Math.min(ze.getDelta(),.05);u.rotation.y=Y*.22,u.position.y=Math.sin(Y*.9)*.12,M.rotation.z=Y*.1,A.rotation.z=-Y*.07,b.rotation.z=Y*.05,b.rotation.x=Math.PI/1.7+Math.sin(Y*.3)*.05,E.forEach((he,Ee)=>{const Re=Ee/10*Math.PI*2,ot=1.45+Ee%3*.3;he.position.x=Math.cos(Re+Y*.25)*ot,he.position.z=Math.sin(Re+Y*.25)*ot});for(const he of C){const Ee=he.mesh;Ee.position.y+=he.speed*$,Ee.position.x+=Math.sin(Y*.6+he.phase)*he.drift*$,Ee.rotation.z+=$*(.3+Math.random()*.2),Ee.rotation.x+=$*.1,Ee.position.y>5.2&&(Ee.position.y=-5.2,Ee.position.x=(Math.random()-.5)*14)}j.rotation.y=Y*.02,ie.x+=(te.x-ie.x)*.04,ie.y+=(te.y-ie.y)*.04,s.position.x=ie.x*.9,s.position.y=-ie.y*.55,s.position.z=9+ie.y*.4,s.lookAt(0,0,0),p.rotation.y=ie.x*.12,p.rotation.x=ie.y*.06,t.render(r,s),Qe=requestAnimationFrame(Z)};return Z(),()=>{Ge=!0,cancelAnimationFrame(Qe),window.removeEventListener("resize",pe),window.removeEventListener("pointermove",le),r.traverse(Y=>{(Y instanceof vt||Y instanceof fo)&&(Y.geometry?.dispose(),(Array.isArray(Y.material)?Y.material:[Y.material]).forEach(he=>he?.dispose()))}),X.dispose(),k.dispose(),t.dispose(),t.domElement.parentNode===e&&e.removeChild(t.domElement)}},[]),ne.jsx("div",{ref:i,"aria-hidden":"true",className:"absolute inset-0 overflow-hidden",style:{pointerEvents:"none"}})}function Im(i,e="/dashboard"){return i?.startsWith("/")&&!i.startsWith("//")?i:e}function Um({redirectAfterAuth:i}={}){const{isLoading:e,isAuthenticated:t,signIn:n}=Hl(),r=Ra(Ca.rateLimits.checkOtpSend),s=Ra(Ca.rateLimits.checkOtpVerify),a=Xl();Yl({title:"Sign In or Sign Up",description:"Sign in or create your AyurSetu account to find matched Ayurveda and AYUSH internships, plan your learning roadmap and keep an internship diary.",path:"/auth"});const[o]=ql(),c=Im(o.get("returnTo"),i),[l,d]=De.useState("signIn"),[p,u]=De.useState("email"),[g,x]=De.useState(""),[S,m]=De.useState(!1),[h,T]=De.useState(null);De.useEffect(()=>{!e&&t&&a(c)},[e,t,a,c]);const R=_=>{_!==l&&(d(_),u("email"),T(null),x(""))},M=async _=>{_.preventDefault(),m(!0),T(null);try{const E=new FormData(_.currentTarget),C=E.get("email")??"",P=await r({email:C});if(!P.ok){const I=Math.max(1,Math.ceil(P.retryAfterMs/6e4));throw new Error(`Too many sign-in codes requested for this email. Please wait ${I} minute${I===1?"":"s"} and try again.`)}await n("email-otp",E),u({email:C}),m(!1)}catch(E){console.error("Email sign-in error:",E),T(E instanceof Error?E.message:"Failed to send verification code. Please try again."),m(!1)}},A=async _=>{_.preventDefault(),m(!0),T(null);try{const E=new FormData(_.currentTarget),C=E.get("email")??"",P=await s({email:C});if(!P.ok){const I=Math.max(1,Math.ceil(P.retryAfterMs/6e4));throw new Error(`Too many verification attempts for this email. Please wait ${I} minute${I===1?"":"s"} and try again.`)}await n("email-otp",E),a(c)}catch(E){console.error("OTP verification error:",E),T(E instanceof Error&&E.message.startsWith("Too many")?E.message:"The verification code you entered is incorrect."),m(!1),x("")}},b=async()=>{m(!0),T(null);try{await n("anonymous"),a(c)}catch(_){console.error("Guest login error:",_),T(`Failed to sign in as guest: ${_ instanceof Error?_.message:"Unknown error"}`),m(!1)}},w=l==="signUp";return ne.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-[oklch(0.99_0.005_100)] via-[oklch(0.96_0.02_100)] to-[oklch(0.90_0.05_155)]",children:[ne.jsxs("div",{className:"absolute inset-0",children:[ne.jsx(Lm,{}),ne.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.97_0.01_100/0.55)_68%,oklch(0.97_0.01_100/0.85)_100%)]"}),ne.jsx("div",{className:"absolute top-0 left-0 w-[45vw] h-[45vw] min-w-[320px] min-h-[320px] rounded-full bg-leaf-light/30 blur-3xl"}),ne.jsx("div",{className:"absolute bottom-0 right-0 w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] rounded-full bg-saffron-light/40 blur-3xl"})]}),ne.jsxs("div",{className:"relative z-10 flex flex-col items-center px-4 py-10",children:[ne.jsxs(vi,{to:"/home",className:"flex items-center gap-2.5 mb-5",children:[ne.jsx("div",{className:"w-11 h-11 rounded-2xl clay-card-sm flex items-center justify-center bg-primary/10",children:ne.jsx(Fa,{className:"w-5 h-5 text-primary"})}),ne.jsxs("span",{className:"text-2xl font-bold tracking-tight",children:["Ayur",ne.jsx("span",{className:"text-primary",children:"Setu"})]})]}),ne.jsxs("p",{className:"text-sm text-muted-foreground mb-7 text-center max-w-sm flex items-center gap-2 justify-center",children:[ne.jsx(za,{className:"w-4 h-4 text-primary shrink-0"}),"Ayurveda internships, learning roadmaps & a daily diary — all in one place"]}),ne.jsx(kl,{className:"clay-card w-full max-w-[420px] border-0 relative z-10",style:{background:"color-mix(in oklab, var(--clay) 80%, transparent)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)"},children:p==="email"?ne.jsxs(ne.Fragment,{children:[ne.jsxs(Da,{className:"text-center pt-7",children:[ne.jsxs("div",{className:"clay-inset p-1 rounded-2xl grid grid-cols-2 gap-1 mb-5",children:[ne.jsx("button",{type:"button",onClick:()=>R("signIn"),className:`rounded-xl h-10 text-sm font-semibold transition-all ${w?"text-muted-foreground hover:text-foreground":"clay-button shadow-md"}`,children:"Sign In"}),ne.jsx("button",{type:"button",onClick:()=>R("signUp"),className:`rounded-xl h-10 text-sm font-semibold transition-all ${w?"clay-button shadow-md":"text-muted-foreground hover:text-foreground"}`,children:"Sign Up"})]}),ne.jsxs(La,{className:"text-xl flex items-center justify-center gap-2",children:[w?"Create your account":"Welcome back",w&&ne.jsx(Oa,{className:"w-5 h-5 text-saffron"})]}),ne.jsx(Ia,{children:w?"Enter your email and we'll send a code to get you started":"Enter your email and we'll send a sign-in code"})]}),ne.jsx("form",{onSubmit:M,children:ne.jsxs(Ua,{children:[ne.jsxs("div",{className:"relative flex items-center gap-2",children:[ne.jsxs("div",{className:"relative flex-1",children:[ne.jsx(Kl,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),ne.jsx(Wl,{name:"email",placeholder:"name@example.com",type:"email",className:"clay-inset border-0 pl-9 h-11 rounded-xl",disabled:S,required:!0})]}),ne.jsx(Kn,{type:"submit",variant:"outline",size:"icon",className:"clay-inset border-0 h-11 w-11 rounded-xl shrink-0",disabled:S,title:w?"Create account":"Continue",children:S?ne.jsx(Pa,{className:"h-4 w-4 animate-spin"}):ne.jsx(Ba,{className:"h-4 w-4"})})]}),h&&ne.jsx("p",{className:"mt-2 text-sm text-destructive",children:h}),ne.jsxs("div",{className:"mt-5",children:[ne.jsxs("div",{className:"relative",children:[ne.jsx("div",{className:"absolute inset-0 flex items-center",children:ne.jsx("span",{className:"w-full border-t border-border/50"})}),ne.jsx("div",{className:"relative flex justify-center text-xs uppercase",children:ne.jsx("span",{className:"bg-card px-2 text-muted-foreground",children:"Or"})})]}),ne.jsxs(Kn,{type:"button",variant:"outline",className:"clay-inset border-0 w-full mt-4 rounded-xl h-11 font-medium",onClick:b,disabled:S,children:[ne.jsx(Jl,{className:"mr-2 h-4 w-4"}),"Continue as Guest"]})]})]})}),ne.jsx(Na,{className:"justify-center pb-6",children:ne.jsxs("p",{className:"text-xs text-muted-foreground text-center",children:[w?"First time here? Your profile setup comes right after.":"New to AyurSetu?"," ",ne.jsx(Kn,{variant:"link",className:"p-0 h-auto text-xs",onClick:()=>R(w?"signIn":"signUp"),children:w?"Sign in instead":"Create an account"})]})})]}):ne.jsxs(ne.Fragment,{children:[ne.jsxs(Da,{className:"text-center",children:[ne.jsx(La,{children:"Check your email"}),ne.jsxs(Ia,{children:["We've sent a code to"," ",ne.jsx("span",{className:"font-medium text-foreground",children:p.email})]})]}),ne.jsxs("form",{onSubmit:A,children:[ne.jsxs(Ua,{className:"pb-4",children:[ne.jsx("input",{type:"hidden",name:"email",value:p.email}),ne.jsx("input",{type:"hidden",name:"code",value:g}),ne.jsx("div",{className:"flex justify-center",children:ne.jsx(hc,{value:g,onChange:x,maxLength:6,disabled:S,onKeyDown:_=>{if(_.key==="Enter"&&g.length===6&&!S){const E=_.target.closest("form");E&&E.requestSubmit()}},children:ne.jsx(dc,{children:Array.from({length:6}).map((_,E)=>ne.jsx(fc,{index:E},E))})})}),h&&ne.jsx("p",{className:"mt-2 text-sm text-destructive text-center",children:h}),ne.jsxs("p",{className:"text-sm text-muted-foreground text-center mt-4",children:["Didn't receive a code?"," ",ne.jsx(Kn,{variant:"link",className:"p-0 h-auto",onClick:()=>u("email"),children:"Try again"})]})]}),ne.jsxs(Na,{className:"flex-col gap-2",children:[ne.jsx(Kn,{type:"submit",className:"clay-button w-full rounded-xl h-11 font-semibold",disabled:S||g.length!==6,children:S?ne.jsxs(ne.Fragment,{children:[ne.jsx(Pa,{className:"mr-2 h-4 w-4 animate-spin"}),"Verifying..."]}):ne.jsxs(ne.Fragment,{children:[w?"Create account & continue":"Verify & continue",ne.jsx(Ba,{className:"ml-2 h-4 w-4"})]})}),ne.jsx(Kn,{type:"button",variant:"ghost",onClick:()=>u("email"),disabled:S,className:"w-full rounded-xl",children:"Use different email"})]})]})]})}),ne.jsxs("div",{className:"mt-7 flex items-center gap-4 text-xs text-muted-foreground",children:[ne.jsxs("span",{className:"flex items-center gap-1.5",children:[ne.jsx(Fa,{className:"w-3.5 h-3.5 text-primary"}),"Matched internships"]}),ne.jsxs("span",{className:"flex items-center gap-1.5",children:[ne.jsx(Oa,{className:"w-3.5 h-3.5 text-saffron"}),"Skill roadmap"]}),ne.jsxs("span",{className:"flex items-center gap-1.5",children:[ne.jsx(za,{className:"w-3.5 h-3.5 text-leaf"}),"Daily diary & planner"]})]}),ne.jsxs("div",{className:"mt-6 flex items-center gap-4 text-xs text-muted-foreground/80",children:[ne.jsx(vi,{to:"/home",className:"hover:text-foreground transition-colors",children:"Home"}),ne.jsx("span",{className:"text-border",children:"•"}),ne.jsx(vi,{to:"/contact",className:"hover:text-foreground transition-colors",children:"Contact"}),ne.jsx("span",{className:"text-border",children:"•"}),ne.jsx(vi,{to:"/privacy",className:"hover:text-foreground transition-colors",children:"Privacy"}),ne.jsx("span",{className:"text-border",children:"•"}),ne.jsx(vi,{to:"/terms",className:"hover:text-foreground transition-colors",children:"Terms"})]})]})]})}function Ym(i){return ne.jsx(De.Suspense,{children:ne.jsx(Um,{...i})})}export{Ym as default};
