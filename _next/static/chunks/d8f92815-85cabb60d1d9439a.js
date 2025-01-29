"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[480],{3818:(e,t,o)=>{o.d(t,{$n:()=>ot,AM:()=>rd,B3:()=>v,BI:()=>nl,BJ:()=>r$,CA:()=>tV,Co:()=>ny,Cy:()=>os,D0:()=>S,DP:()=>eM,DZ:()=>og,Dr:()=>nA,EA:()=>nH,EY:()=>tQ,EZ:()=>oN,Ex:()=>t1,GD:()=>o6,GE:()=>tU,IU:()=>nE,JU:()=>tT,KC:()=>z,Ki:()=>oX,Kp:()=>nG,NP:()=>e_,Nj:()=>nz,PR:()=>N,Qx:()=>y,Sc:()=>oa,U1:()=>j,W1:()=>nR,WP:()=>o4,Wd:()=>o0,X:()=>oL,XS:()=>oU,Xy:()=>eW,Z4:()=>oW,ZL:()=>o5,Zp:()=>or,aY:()=>eB,az:()=>tK,cF:()=>ej,cV:()=>ov,cZ:()=>eA,dO:()=>rR,dU:()=>oM,dj:()=>n9,eu:()=>tD,fs:()=>rT,gK:()=>eI,jT:()=>nn,ks:()=>rV,l6:()=>ry,lG:()=>nv,m_:()=>r2,mc:()=>of,oz:()=>nJ,qW:()=>n$,r5:()=>nD,rX:()=>nT,s5:()=>oG,sQ:()=>eC,sU:()=>oA,sb:()=>oD,so:()=>t3,sx:()=>ru,tE:()=>n8,tH:()=>oF,vE:()=>r0,wb:()=>nq,wj:()=>rr,xA:()=>oh,y$:()=>t6});var r=o(24285),n=o(42029),i=o(95155),a=o(45054),l=o(12115),d=o(40583),s=o(65285),c=o(64775),u=o(53888),f=o(57205),p=o(96932),h=o(39124),m=o(25683),g=o(47650),b=o(84880);let v=r.B3,y=(0,r.me)(),w=[],x={},$="--motion-content-opacity",k={initial:{opacity:.5,[$]:0,scale:.97,willChange:"transform"},animate:{opacity:[null,1,1],[$]:[null,null,1],scale:1},exit:{opacity:[null,null,0],[$]:[null,0,0],scale:.97},transition:{duration:.4,type:"spring"}};function S(e){return 0===e?0:`${e/16}rem`}function j(e,t,o){return(t?.map(o)||[]).map((t,o)=>0===o?t:{[`@media screen and (min-width: ${e[o-1]}px)`]:t})}function C(e,t){return void 0===e?t||w:Array.isArray(e)?e:[e]}function I(e,t,o=w){if(!Array.isArray(o))throw Error("the property must be array of numbers");if(0===o.length)return null;let{media:r,space:i}=(0,n.JW)(e);return j(r,o,e=>{var o;return o=S(i[e]),t.reduce((e,t)=>(e[t]=o,e),{})})}function R(e,t){let{$size:o,$weight:r}=t,{font:i,media:a}=(0,n.JW)(t.theme),{family:l,sizes:d,weights:s}=i[e],c=r&&s[r]||s.regular,u=d[2],f={position:"relative",fontFamily:l,fontWeight:c,padding:"1px 0",margin:0,"&:before":{content:'""',display:"block",height:0},"&:after":{content:'""',display:"block",height:0},"& > code, & > span":{display:"block"},"&:not([hidden])":{display:"block"}};return o?[f,...j(a,o,e=>(function(e){let{ascenderHeight:t,descenderHeight:o,fontSize:r,iconSize:n,letterSpacing:i,lineHeight:a}=e,l=t+o,d=a-l,s=2*Math.floor(1.125*r/2)+1;return{fontSize:S(r),lineHeight:`calc(${a} / ${r})`,letterSpacing:S(i),transform:`translateY(${S(o)})`,"&:before":{marginTop:`calc(${S(0-l)} - 1px)`},"&:after":{marginBottom:"-1px"},"& svg:not([data-sanity-icon])":{fontSize:`calc(${s} / 16 * 1rem)`,margin:S((d-s)/2)},"& [data-sanity-icon]":{fontSize:`calc(${n} / 16 * 1rem)`,margin:S((d-n)/2)}}})(d[e]||u))]:(R.warned||(console.warn("No size specified for responsive font",{fontKey:e,$size:o,props:t,base:f}),R.warned=!0),[f])}function E(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$align,e=>({textAlign:e}))}function z(e,t){let o;let r=(0,a.c)(3);r[0]!==t||r[1]!==e?(o=()=>[C(e,t),JSON.stringify(e??t)],r[0]=t,r[1]=e,r[2]=o):o=r[2];let[n,i]=(0,l.useState)(o),[d,s]=n,c=JSON.stringify(e??t);return c!==s&&i([C(e,t),c]),d}function N(e,t,o){let r,n,i;let d=(0,a.c)(8),s=void 0===t?_:t;d[0]!==o||d[1]!==s||d[2]!==e?(r=t=>{if(!e)return;let r=t.target;if(!(r instanceof Node))return;let n=o?.();if(!n||n.contains(r)){for(let e of s().flat())if(e&&(r===e||e.contains(r)))return;e(t)}},d[0]=o,d[1]=s,d[2]=e,d[3]=r):r=d[3];let c=(0,b.J)(r),u=!!e;d[4]!==u||d[5]!==c?(n=()=>{if(!u)return;let e=e=>c(e);return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},i=[u,c],d[4]=u,d[5]=c,d[6]=n,d[7]=i):(n=d[6],i=d[7]),(0,l.useEffect)(n,i),(0,l.useDebugValue)(e?"MouseDown On":"MouseDown Off")}function _(){return w}function T(e,t){let o,r;let n=(0,a.c)(6);n[0]!==t||n[1]!==e.current?(o=()=>{e.current?.setCustomValidity(t||"")},n[0]=t,n[1]=e.current,n[2]=o):o=n[2],n[3]!==t||n[4]!==e?(r=[t,e],n[3]=t,n[4]=e,n[5]=r):r=n[5],(0,l.useEffect)(o,r)}var A,M=[],F="ResizeObserver loop completed with undelivered notifications.",O=function(){var e;"function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:F}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=F),window.dispatchEvent(e)};!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(A||(A={}));var B,W=function(e){return Object.freeze(e)},H=function(e,t){this.inlineSize=e,this.blockSize=t,W(this)},L=function(){function e(e,t,o,r){return this.x=e,this.y=t,this.width=o,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,W(this)}return e.prototype.toJSON=function(){var e=this.x,t=this.y,o=this.top,r=this.right,n=this.bottom;return{x:e,y:t,top:o,right:r,bottom:n,left:this.left,width:this.width,height:this.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),D=function(e){return e instanceof SVGElement&&"getBBox"in e},P=function(e){if(D(e)){var t=e.getBBox(),o=t.width,r=t.height;return!o&&!r}var n=e.offsetWidth,i=e.offsetHeight;return!(n||i||e.getClientRects().length)},J=function(e){if(e instanceof Element)return!0;var t,o=null===(t=e?.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(o&&e instanceof o.Element)},V=function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},q="u">typeof window?window:{},G=new WeakMap,X=/auto|scroll/,U=/^tb|vertical/,Y=/msie|trident/i.test(q.navigator&&q.navigator.userAgent),K=function(e){return parseFloat(e||"0")},Z=function(e,t,o){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===o&&(o=!1),new H((o?t:e)||0,(o?e:t)||0)},Q=W({devicePixelContentBoxSize:Z(),borderBoxSize:Z(),contentBoxSize:Z(),contentRect:new L(0,0,0,0)}),ee=function(e,t){if(void 0===t&&(t=!1),G.has(e)&&!t)return G.get(e);if(P(e))return G.set(e,Q),Q;var o=getComputedStyle(e),r=D(e)&&e.ownerSVGElement&&e.getBBox(),n=!Y&&"border-box"===o.boxSizing,i=U.test(o.writingMode||""),a=!r&&X.test(o.overflowY||""),l=!r&&X.test(o.overflowX||""),d=r?0:K(o.paddingTop),s=r?0:K(o.paddingRight),c=r?0:K(o.paddingBottom),u=r?0:K(o.paddingLeft),f=r?0:K(o.borderTopWidth),p=r?0:K(o.borderRightWidth),h=r?0:K(o.borderBottomWidth),m=r?0:K(o.borderLeftWidth),g=u+s,b=d+c,v=m+p,y=f+h,w=l?e.offsetHeight-y-e.clientHeight:0,x=a?e.offsetWidth-v-e.clientWidth:0,$=r?r.width:K(o.width)-(n?g+v:0)-x,k=r?r.height:K(o.height)-(n?b+y:0)-w,S=$+g+x+v,j=k+b+w+y,C=W({devicePixelContentBoxSize:Z(Math.round($*devicePixelRatio),Math.round(k*devicePixelRatio),i),borderBoxSize:Z(S,j,i),contentBoxSize:Z($,k,i),contentRect:new L(u,d,$,k)});return G.set(e,C),C},et=function(e,t,o){var r=ee(e,o),n=r.borderBoxSize,i=r.contentBoxSize,a=r.devicePixelContentBoxSize;switch(t){case A.DEVICE_PIXEL_CONTENT_BOX:return a;case A.BORDER_BOX:return n;default:return i}},eo=function(e){var t=ee(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=W([t.borderBoxSize]),this.contentBoxSize=W([t.contentBoxSize]),this.devicePixelContentBoxSize=W([t.devicePixelContentBoxSize])},er=function(e){if(P(e))return 1/0;for(var t=0,o=e.parentNode;o;)t+=1,o=o.parentNode;return t},en=function(){var e=1/0,t=[];M.forEach(function(o){if(0!==o.activeTargets.length){var r=[];o.activeTargets.forEach(function(t){var o=new eo(t.target),n=er(t.target);r.push(o),t.lastReportedSize=et(t.target,t.observedBox),n<e&&(e=n)}),t.push(function(){o.callback.call(o.observer,r,o.observer)}),o.activeTargets.splice(0,o.activeTargets.length)}});for(var o=0;o<t.length;o++)(0,t[o])();return e},ei=function(e){M.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(o){o.isActive()&&(er(o.target)>e?t.activeTargets.push(o):t.skippedTargets.push(o))})})},ea=function(){var e=0;for(ei(0);M.some(function(e){return e.activeTargets.length>0});)ei(e=en());return M.some(function(e){return e.skippedTargets.length>0})&&O(),e>0},el=[],ed=function(e){if(!B){var t=0,o=document.createTextNode("");new MutationObserver(function(){return el.splice(0).forEach(function(e){return e()})}).observe(o,{characterData:!0}),B=function(){o.textContent="".concat(t?t--:t++)}}el.push(e),B()},es=function(e){ed(function(){requestAnimationFrame(e)})},ec=0,eu={attributes:!0,characterData:!0,childList:!0,subtree:!0},ef=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],ep=function(e){return void 0===e&&(e=0),Date.now()+e},eh=!1,em=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!eh){eh=!0;var o=ep(e);es(function(){var r=!1;try{r=ea()}finally{if(eh=!1,e=o-ep(),!ec)return;r?t.run(1e3):e>0?t.run(e):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,eu)};document.body?t():q.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),ef.forEach(function(t){return q.addEventListener(t,e.listener,!0)}))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),ef.forEach(function(t){return q.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},e}()),eg=function(e){!ec&&e>0&&em.start(),(ec+=e)||em.stop()},eb=function(){function e(e,t){this.target=e,this.observedBox=t||A.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=et(this.target,this.observedBox,!0);return D(e=this.target)||V(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),ev=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},ey=new WeakMap,ew=function(e,t){for(var o=0;o<e.length;o+=1)if(e[o].target===t)return o;return -1},ex=function(){function e(){}return e.connect=function(e,t){var o=new ev(e,t);ey.set(e,o)},e.observe=function(e,t,o){var r=ey.get(e),n=0===r.observationTargets.length;0>ew(r.observationTargets,t)&&(n&&M.push(r),r.observationTargets.push(new eb(t,o&&o.box)),eg(1),em.schedule())},e.unobserve=function(e,t){var o=ey.get(e),r=ew(o.observationTargets,t),n=1===o.observationTargets.length;r>=0&&(n&&M.splice(M.indexOf(o),1),o.observationTargets.splice(r,1),eg(-1))},e.disconnect=function(e){var t=this,o=ey.get(e);o.observationTargets.slice().forEach(function(o){return t.unobserve(e,o.target)}),o.activeTargets.splice(0,o.activeTargets.length)},e}(),e$=function(){function e(e){if(0==arguments.length)throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");ex.connect(this,e)}return e.prototype.observe=function(e,t){if(0==arguments.length)throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!J(e))throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");ex.observe(this,e,t)},e.prototype.unobserve=function(e){if(0==arguments.length)throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!J(e))throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");ex.unobserve(this,e)},e.prototype.disconnect=function(){ex.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();let ek="u">typeof document&&"u">typeof window&&window.ResizeObserver?window.ResizeObserver:e$,eS=function(){let e=new WeakMap,t=new WeakMap;return{subscribe(o,r){let n=t.get(o)||[],i=e.get(o);return t.has(o)||(t.set(o,n),i=({subscribe(e,t){let o=new ek(([e])=>{t({_contentRect:e.contentRect,border:{width:e.borderBoxSize[0].inlineSize,height:e.borderBoxSize[0].blockSize},content:{width:e.contentRect.width,height:e.contentRect.height}})});return o.observe(e),()=>{o.unobserve(e),o.disconnect()}}}).subscribe(o,e=>{for(let t of n)t(e)})),n.push(r),()=>{let e=n.indexOf(r);e>-1&&n.splice(e,1),0===n.length&&i&&i()}}}}();function ej(e){let t,o;let r=(0,a.c)(3),[n,i]=(0,l.useState)(null);return r[0]!==e?(t=()=>{if(e)return eS.subscribe(e,i)},o=[e],r[0]=e,r[1]=t,r[2]=o):(t=r[1],o=r[2]),(0,l.useEffect)(t,o),n}function eC(e){return ej(e)?._contentRect||null}function eI(e){let t,o,r;let n=(0,a.c)(5);n[0]!==e?(t=t=>e(t),n[0]=e,n[1]=t):t=n[1];let i=(0,b.J)(t);n[2]!==i?(o=()=>{let e=e=>i(e);return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},r=[i],n[2]=i,n[3]=o,n[4]=r):(o=n[3],r=n[4]),(0,l.useEffect)(o,r)}function eR(e,t){let{subscribe:o,getSnapshot:r}=(0,l.useMemo)(()=>{let t;let o=()=>(t||(t=window.matchMedia(e)),t);return{subscribe:e=>{let t=o();return t.addEventListener("change",e),()=>t.removeEventListener("change",e)},getSnapshot:()=>o().matches}},[e]);return(0,l.useDebugValue)(e),(0,l.useSyncExternalStore)(o,r,t)}let eE=function(){if("u">typeof globalThis)return globalThis;if("u">typeof window)return window;if("u">typeof self)return self;if("u">typeof global)return global;throw Error("@sanity/ui: could not locate global scope")}();function ez(e,t){let o=Symbol.for(e);return typeof document>"u"?(0,l.createContext)(t):(eE[o]=eE[o]||(0,l.createContext)(t),eE[o])}let eN=ez("@sanity/ui/context/theme",null);function e_(e){let t,o,n,d;let c=(0,a.c)(15),u=(0,l.useContext)(eN),{children:f}=e,p=e.scheme??(u?.scheme||"light"),h=e.theme??(u?.theme||null),m=e.tone??(u?.tone||"default");e:{let e;if(!h){t=null;break e}c[0]!==h||c[1]!==p||c[2]!==m?(e={version:0,theme:h,scheme:p,tone:m},c[0]=h,c[1]=p,c[2]=m,c[3]=e):e=c[3],t=e}let g=t;t:{let e;if(!h){o=null;break t}c[4]!==h||c[5]!==p||c[6]!==m?(e=(0,r.sR)(h,p,m),c[4]=h,c[5]=p,c[6]=m,c[7]=e):e=c[7],o=e}let b=o;if(!b){let e;return c[8]===Symbol.for("react.memo_cache_sentinel")?(e=(0,i.jsx)("pre",{children:'ThemeProvider: no "theme" property provided'}),c[8]=e):e=c[8],e}return c[9]!==f||c[10]!==b?(n=(0,i.jsx)(s.NP,{theme:b,children:f}),c[9]=f,c[10]=b,c[11]=n):n=c[11],c[12]!==n||c[13]!==g?(d=(0,i.jsx)(eN.Provider,{value:g,children:n}),c[12]=n,c[13]=g,c[14]=d):d=c[14],d}function eT(){let e=(0,l.useContext)(eN);if(!e)throw Error("useRootTheme(): missing context value");return e}function eA(e){let t;let o=(0,a.c)(5),{children:r,scheme:n,tone:l}=e,d=eT(),s=n||d.scheme;return o[0]!==r||o[1]!==d.theme||o[2]!==s||o[3]!==l?(t=(0,i.jsx)(e_,{scheme:s,theme:d.theme,tone:l,children:r}),o[0]=r,o[1]=d.theme,o[2]=s,o[3]=l,o[4]=t):t=o[4],t}function eM(){return(0,s.DP)()}function eF(){let e;let t=(0,a.c)(2),o=(0,s.DP)();return t[0]!==o?(e=(0,n.JW)(o),t[0]=o,t[1]=e):e=t[1],e}function eO(){return 0}function eB(){let e,t;let o=(0,a.c)(2),{media:r}=eF();return o[0]!==r?(t=function(e){let t;let o=e.length,r=()=>{if(!t){t=[];for(let n=o;n>-1;n-=1){var r;let o=0===(r=n)?`screen and (max-width: ${e[r]-1}px)`:r===e.length?`screen and (min-width: ${e[r-1]}px)`:`screen and (min-width: ${e[r-1]}px) and (max-width: ${e[r]-1}px)`;t.push({index:n,mq:window.matchMedia(o)})}}return t};return{getSnapshot:()=>{for(let{index:e,mq:t}of r())if(t.matches)return e;return 0},subscribe:e=>{let t=[];for(let{mq:o}of r()){let r=()=>{o.matches&&e()};o.addEventListener("change",r),t.push(()=>o.removeEventListener("change",r))}return()=>{for(let e of t)e()}}}}(r),o[0]=r,o[1]=t):t=o[1],e=t,(0,l.useSyncExternalStore)(e.subscribe,e.getSnapshot,eO)}function eW(e){return eR("(prefers-color-scheme: dark)",void 0===e?eH:e)}function eH(){return!1}function eL(e){return eR("(prefers-reduced-motion: reduce)",void 0===e?eD:e)}function eD(){return!1}function eP(e){let{card:t,media:o}=(0,n.JW)(e.theme),r=`${t.border?.width??1}px solid var(--card-border-color)`;return j(o,e.$border,e=>e?{"&&":{border:r}}:{"&&":{border:0}})}function eJ(e){let{card:t,media:o}=(0,n.JW)(e.theme),r=`${t.border?.width??1}px solid var(--card-border-color)`;return j(o,e.$borderTop,e=>e?{"&&":{borderTop:r}}:{"&&":{borderTop:0}})}function eV(e){let{card:t,media:o}=(0,n.JW)(e.theme),r=`${t.border?.width??1}px solid var(--card-border-color)`;return j(o,e.$borderRight,e=>e?{"&&":{borderRight:r}}:{"&&":{borderRight:0}})}function eq(e){let{card:t,media:o}=(0,n.JW)(e.theme),r=`${t.border?.width??1}px solid var(--card-border-color)`;return j(o,e.$borderBottom,e=>e?{"&&":{borderBottom:r}}:{"&&":{borderBottom:0}})}function eG(e){let{card:t,media:o}=(0,n.JW)(e.theme),r=`${t.border?.width??1}px solid var(--card-border-color)`;return j(o,e.$borderLeft,e=>e?{"&&":{borderLeft:r}}:{"&&":{borderLeft:0}})}e_.displayName="ThemeProvider",eA.displayName="ThemeColorProvider";let eX={'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},eU={content:"content-box",border:"border-box"},eY={stretch:"stretch",fill:"100%"};function eK(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$display,e=>({"&:not([hidden])":{display:e}}))}function eZ(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$sizing,e=>({boxSizing:eU[e]}))}function eQ(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$height,e=>({height:eY[e]}))}function e0(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$overflow,e=>({overflow:e}))}let e1={"&&:not([hidden])":{display:"flex"}};function e2(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$align,e=>({alignItems:e}))}function e3(e){let{media:t,space:o}=(0,n.JW)(e.theme);return j(t,e.$gap,e=>({gap:e?S(o[e]):void 0}))}function e4(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$wrap,e=>({flexWrap:e}))}function e5(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$justify,e=>({justifyContent:e}))}function e6(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$direction,e=>({flexDirection:e}))}let e7={minWidth:0,minHeight:0};function e8(){return[e7,e9]}function e9(e){let{media:t}=(0,n.JW)(e.theme);return e.$flex?j(t,e.$flex,e=>({flex:e})):w}function te(e){return`inset 0 0 0 ${e.width}px ${e.color}`}function tt(e){let{base:t,border:o,focusRing:r}=e,n=r.offset+r.width,i=0-r.offset,a=t?t.bg:"var(--card-bg-color)";return[i>0&&`inset 0 0 0 ${i}px var(--card-focus-ring-color)`,o&&te(o),i<0&&`0 0 0 ${0-i}px ${a}`,n>0&&`0 0 0 ${n}px var(--card-focus-ring-color)`].filter(Boolean).join(",")}let to={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},tr={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},tn={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"};function ti(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$autoFlow,e=>({gridAutoFlow:e}))}function ta(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$autoRows,e=>({gridAutoRows:e&&tn[e]}))}function tl(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$autoCols,e=>({gridAutoColumns:e&&tr[e]}))}function td(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$columns,e=>({gridTemplateColumns:e&&`repeat(${e},minmax(0,1fr));`}))}function ts(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$rows,e=>({gridTemplateRows:e&&`repeat(${e},minmax(0,1fr));`}))}function tc(e){let{media:t,space:o}=(0,n.JW)(e.theme);return j(t,e.$gap,e=>({gridGap:e?S(o[e]):void 0}))}function tu(e){let{media:t,space:o}=(0,n.JW)(e.theme);return j(t,e.$gapX,e=>({columnGap:e?S(o[e]):void 0}))}function tf(e){let{media:t,space:o}=(0,n.JW)(e.theme);return j(t,e.$gapY,e=>({rowGap:e?S(o[e]):void 0}))}let tp={auto:"auto",full:"1 / -1"},th={auto:"auto",full:"1 / -1"};function tm(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$row,e=>"number"==typeof e?{gridRow:`span ${e} / span ${e}`}:{gridRow:tp[e]})}function tg(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$rowStart,e=>({gridRowStart:e}))}function tb(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$rowEnd,e=>({gridRowEnd:e}))}function tv(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$column,e=>"number"==typeof e?{gridColumn:`span ${e} / span ${e}`}:{gridColumn:th[e]})}function ty(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$columnStart,e=>({gridColumnStart:e}))}function tw(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$columnEnd,e=>({gridColumnEnd:e}))}function tx(e){let{$fontSize:t,$iconLeft:o,$iconRight:r,$padding:i,$space:a}=e,{font:l,media:d,space:s}=(0,n.JW)(e.theme),c=Math.max(i.length,a.length,t.length),u=[],f=[],p=[];for(let e=0;e<c;e+=1)p[e]=void 0===t[e]?p[e-1]:t[e],u[e]=void 0===i[e]?u[e-1]:i[e],f[e]=void 0===a[e]?f[e-1]:a[e];return j(d,u,(e,t)=>{let n=l.text.sizes[p[t]]||l.text.sizes[2],i=n.lineHeight-n.ascenderHeight-n.descenderHeight,a=s[u[t]],d=s[f[t]],c={paddingTop:S(a-n.ascenderHeight),paddingRight:S(a),paddingBottom:S(a-n.descenderHeight),paddingLeft:S(a)};return r&&(c.paddingRight=S(a+i+d)),o&&(c.paddingLeft=S(a+i+d)),c})}function t$(e){return tx({...e,$iconRight:!0})}let tk=(0,s.AH)`
  &:not([hidden]) {
    display: flex;
  }

  align-items: center;
`;function tS(){return tk}function tj(e){let{$scheme:t,$tone:o,$weight:r}=e,{color:i,font:a}=(0,n.JW)(e.theme);return(0,s.AH)`
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: ${a.text.family};
    font-weight: ${r&&a.text.weights[r]||a.text.weights.regular};
    margin: 0;
    position: relative;
    z-index: 1;
    display: block;

    /* NOTE: This is a hack to disable Chrome’s autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--input-fg-color) !important;
      transition: background-color 5000s;
      transition-delay: 86400s /* 24h */;
    }

    /* &:is(textarea) */
    &[data-as='textarea'] {
      resize: none;
    }

    color: var(--input-fg-color);

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &[data-scheme='${t}'][data-tone='${o}'] {
      --input-fg-color: ${i.input.default.enabled.fg};
      --input-placeholder-color: ${i.input.default.enabled.placeholder};

      /* enabled */
      &:not(:invalid):not(:disabled):not(:read-only) {
        --input-fg-color: ${i.input.default.enabled.fg};
        --input-placeholder-color: ${i.input.default.enabled.placeholder};
      }

      /* disabled */
      &:not(:invalid):disabled {
        --input-fg-color: ${i.input.default.disabled.fg};
        --input-placeholder-color: ${i.input.default.disabled.placeholder};
      }

      /* invalid */
      &:invalid {
        --input-fg-color: ${i.input.invalid.enabled.fg};
        --input-placeholder-color: ${i.input.invalid.enabled.placeholder};
      }

      /* readOnly */
      &:read-only {
        --input-fg-color: ${i.input.default.readOnly.fg};
        --input-placeholder-color: ${i.input.default.readOnly.placeholder};
      }
    }
  `}function tC(e){let{font:t,media:o}=(0,n.JW)(e.theme);return j(o,e.$fontSize,e=>{let o=t.text.sizes[e]||t.text.sizes[2];return{fontSize:S(o.fontSize),lineHeight:o.lineHeight/o.fontSize}})}function tI(e){let{$hasPrefix:t,$hasSuffix:o,$scheme:r,$tone:i,$unstableDisableFocusRing:a}=e,{color:l,input:d}=(0,n.JW)(e.theme);return(0,s.AH)`
    --input-box-shadow: none;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    pointer-events: none;
    z-index: 0;

    background-color: var(--card-bg-color);
    box-shadow: var(--input-box-shadow);

    border-top-left-radius: ${t?0:void 0};
    border-bottom-left-radius: ${t?0:void 0};
    border-top-right-radius: ${o?0:void 0};
    border-bottom-right-radius: ${o?0:void 0};

    &[data-scheme='${r}'][data-tone='${i}'] {
      --card-bg-color: ${l.input.default.enabled.bg};
      --card-fg-color: ${l.input.default.enabled.fg};

      /* enabled */
      *:not(:disabled) + &[data-border] {
        --input-box-shadow: ${te({color:l.input.default.enabled.border,width:d.border.width})};
      }

      /* invalid */
      *:not(:disabled):invalid + & {
        --card-bg-color: ${l.input.invalid.enabled.bg};
        --card-fg-color: ${l.input.invalid.enabled.fg};

        &[data-border] {
          --input-box-shadow: ${te({color:l.input.invalid.enabled.border,width:d.border.width})};
        }
      }

      /* focused */
      *:not(:disabled):focus + & {
        &[data-border] {
          --input-box-shadow: ${a?void 0:tt({border:{color:l.input.default.enabled.border,width:d.border.width},focusRing:d.text.focusRing})};
        }

        &:not([data-border]) {
          --input-box-shadow: ${a?void 0:tt({focusRing:d.text.focusRing})};
        }
      }

      /* disabled */
      *:not(:invalid):disabled + & {
        --card-bg-color: ${l.input.default.disabled.bg} !important;
        --card-fg-color: ${l.input.default.disabled.fg} !important;
        --card-icon-color: ${l.input.default.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${te({color:l.input.default.disabled.border,width:d.border.width})};
        }
      }

      *:invalid:disabled + & {
        --card-bg-color: ${l.input.invalid.disabled.bg} !important;
        --card-fg-color: ${l.input.invalid.disabled.fg} !important;
        --card-icon-color: ${l.input.invalid.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${te({color:l.input.invalid.disabled.border,width:d.border.width})};
        }
      }

      /* readOnly */
      *:not(:invalid):read-only + & {
        --card-bg-color: ${l.input.default.readOnly.bg} !important;
        --card-fg-color: ${l.input.default.readOnly.fg} !important;
      }

      *:invalid:read-only + & {
        --card-bg-color: ${l.input.invalid.readOnly.bg} !important;
        --card-fg-color: ${l.input.invalid.readOnly.fg} !important;
      }

      /* hovered */
      @media (hover: hover) {
        *:not(:disabled):not(:read-only):not(:invalid):hover + & {
          --card-bg-color: ${l.input.default.hovered.bg};
          --card-fg-color: ${l.input.default.hovered.fg};
        }

        *:invalid:not(:disabled):not(:read-only):hover + & {
          --card-bg-color: ${l.input.invalid.hovered.bg};
          --card-fg-color: ${l.input.invalid.hovered.fg};
        }

        *:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${te({color:l.input.default.hovered.border,width:d.border.width})};
        }

        *:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${te({color:l.input.invalid.hovered.border,width:d.border.width})};
        }
      }
    }
  `}function tR(e){let{theme:t}=e;return[I(t,["padding"],e.$padding),I(t,["paddingLeft","paddingRight"],e.$paddingX),I(t,["paddingTop","paddingBottom"],e.$paddingY),I(t,["paddingTop"],e.$paddingTop),I(t,["paddingRight"],e.$paddingRight),I(t,["paddingBottom"],e.$paddingBottom),I(t,["paddingLeft"],e.$paddingLeft)].filter(Boolean)}function tE(e){let{media:t,radius:o}=(0,n.JW)(e.theme);return j(t,e.$radius,e=>{let t=0;return"number"==typeof e&&(t=S(o[e])),"full"===e&&(t="9999px"),{borderRadius:t}})}function tz(e,t){return`${e.map(S).join(" ")} ${t}`}let tN=s.I4.span.withConfig({displayName:"SpanWithTextOverflow",componentId:"sc-ol2i3b-0"})`display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;overflow:clip;`,t_=s.I4.div.withConfig({displayName:"StyledLabel",componentId:"sc-1luap7z-0"})(function(e){return R("label",e)},E,function(e){let{$accent:t,$muted:o}=e,{font:r}=(0,n.JW)(e.theme);return(0,s.AH)`
    text-transform: uppercase;

    ${t&&(0,s.AH)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,s.AH)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${r.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `}),tT=(0,l.forwardRef)(function(e,t){let o,r,n,l,d,s,c,u,f;let p=(0,a.c)(22);p[0]!==e?({accent:o,align:r,children:n,muted:d,size:s,textOverflow:c,weight:u,...l}=e,p[0]=e,p[1]=o,p[2]=r,p[3]=n,p[4]=l,p[5]=d,p[6]=s,p[7]=c,p[8]=u):(o=p[1],r=p[2],n=p[3],l=p[4],d=p[5],s=p[6],c=p[7],u=p[8]);let h=void 0!==d&&d,m=void 0===s?2:s,g=n;if("ellipsis"===c){let e;p[9]!==g?(e=(0,i.jsx)(tN,{children:g}),p[9]=g,p[10]=e):e=p[10],g=e}else{let e;p[11]!==g?(e=(0,i.jsx)("span",{children:g}),p[11]=g,p[12]=e):e=p[12],g=e}let b=z(r),v=z(m);return p[13]!==o||p[14]!==g||p[15]!==h||p[16]!==t||p[17]!==l||p[18]!==b||p[19]!==v||p[20]!==u?(f=(0,i.jsx)(t_,{"data-ui":"Label",...l,$accent:o,$align:b,$muted:h,$size:v,$weight:u,ref:t,children:g}),p[13]=o,p[14]=g,p[15]=h,p[16]=t,p[17]=l,p[18]=b,p[19]=v,p[20]=u,p[21]=f):f=p[21],f});tT.displayName="ForwardRef(Label)";let tA={root:function(e){let{$color:t}=e,{avatar:o}=(0,n.JW)(e.theme);return{"--avatar-bg-color":`var(--card-avatar-${t}-bg-color)`,"--avatar-fg-color":`var(--card-avatar-${t}-fg-color)`,backgroundColor:"var(--avatar-bg-color)",position:"relative",boxSizing:"border-box",userSelect:"none",boxShadow:"0 0 0 1px var(--card-bg-color)",'&[data-status="inactive"]':{opacity:.5},"&>svg":{"&:not([hidden])":{display:"block"}},'&[data-as="button"]':{WebkitFontSmoothing:"inherit",appearance:"none",margin:0,padding:0,border:0,font:"inherit",color:"inherit",outline:"none","&:focus":{boxShadow:tt({focusRing:o.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:"none"}}}},arrow:function(){return{position:"absolute",boxSizing:"border-box",zIndex:0,opacity:0,transition:"all 0.2s linear",transform:"rotate(-90deg) translate3d(0, 6px, 0)",left:0,right:0,top:0,bottom:0,"& > svg":{width:"11px",height:"7px",position:"absolute",top:"-5px",left:"50%",transform:"translateX(-6px)","&:not([hidden])":{display:"block"}},"[data-arrow-position='inside'] > &":{transform:"rotate(-90deg) translate3d(0, 6px, 0)",opacity:0},"[data-arrow-position='top'] > &":{opacity:1,transform:"rotate(0deg)"},"[data-arrow-position='bottom'] > &":{opacity:1,transform:"rotate(-180deg)"}}},bgStroke:function(){return{strokeWidth:"4px",stroke:"var(--card-bg-color)"}},stroke:function(){return{strokeWidth:"2px",stroke:"var(--avatar-bg-color)",'[data-status="editing"] &':{strokeDasharray:"2 4",strokeLinecap:"round"}}},initials:function(){return{width:"100%",height:"100%",color:"var(--avatar-fg-color)",alignItems:"center",justifyContent:"center",textTransform:"uppercase",textAlign:"center",borderRadius:"50%","&:not([hidden])":{display:"flex"}}},image:function(){return{position:"relative"}}},tM=s.I4.div.withConfig({displayName:"StyledAvatar",componentId:"sc-1rj7kl0-0"})(function(e){let{avatar:t,media:o}=(0,n.JW)(e.theme);return j(o,e.$size,e=>{let o=t.sizes[e]||t.sizes[0];return{width:S(o.size),height:S(o.size),borderRadius:S(o.size/2),"&>svg":{width:S(o.size),height:S(o.size),borderRadius:S(o.size/2)}}})},tA.root),tF=s.I4.div.withConfig({displayName:"Arrow",componentId:"sc-1rj7kl0-1"})(tA.arrow),tO=s.I4.ellipse.withConfig({displayName:"BgStroke",componentId:"sc-1rj7kl0-2"})(tA.bgStroke),tB=s.I4.ellipse.withConfig({displayName:"Stroke",componentId:"sc-1rj7kl0-3"})(tA.stroke),tW=s.I4.div.withConfig({displayName:"Initials",componentId:"sc-1rj7kl0-4"})(tA.initials),tH=(0,s.I4)(tT).withConfig({displayName:"InitialsLabel",componentId:"sc-1rj7kl0-5"})({color:"inherit"}),tL=s.I4.svg.withConfig({displayName:"AvatarImage",componentId:"sc-1rj7kl0-6"})(tA.image),tD=(0,l.forwardRef)(function(e,t){let o,r,n,s,c,u,f,p,h,m,g,b,v,y,w,x,$,k,S,j,C,I,R;let E=(0,a.c)(52);E[0]!==e?({__unstable_hideInnerStroke:o,as:s,color:h,src:p,title:b,initials:c,onImageLoadError:u,arrowPosition:n,animateArrowFrom:r,status:m,size:g,...f}=e,E[0]=e,E[1]=o,E[2]=r,E[3]=n,E[4]=s,E[5]=c,E[6]=u,E[7]=f,E[8]=p,E[9]=h,E[10]=m,E[11]=g,E[12]=b):(o=E[1],r=E[2],n=E[3],s=E[4],c=E[5],u=E[6],f=E[7],p=E[8],h=E[9],m=E[10],g=E[11],b=E[12]);let N=void 0===h?"gray":h,_=void 0===m?"online":m,T=void 0===g?1:g,{avatar:A}=eF(),M=d.isValidElementType(s)?s:"div",F=z(T),O=(A.sizes[F[0]]||A.sizes[0]).size,B=O/2,W=(0,l.useId)(),[H,L]=(0,l.useState)(r||n||"inside"),[D,P]=(0,l.useState)(!1),J=`avatar-image-${W}`;E[13]!==H||E[14]!==n?(v=()=>{if(H===n)return;let e=requestAnimationFrame(()=>L(n));return()=>cancelAnimationFrame(e)},y=[H,n],E[13]=H,E[14]=n,E[15]=v,E[16]=y):(v=E[15],y=E[16]),(0,l.useEffect)(v,y),E[17]!==p?(w=()=>{p&&P(!1)},x=[p],E[17]=p,E[18]=w,E[19]=x):(w=E[18],x=E[19]),(0,l.useEffect)(w,x),E[20]!==u?($=()=>{P(!0),u&&u(Error("Avatar: the image failed to load"))},E[20]=u,E[21]=$):$=E[21];let V=$;E[22]!==F?(S=F.map(tP),E[22]=F,E[23]=S):S=E[23],k=S;let q="string"==typeof M?M:void 0;return E[24]!==N?(j=(0,i.jsx)(tF,{children:(0,i.jsx)("svg",{width:"11",height:"7",viewBox:"0 0 11 7",fill:"none",children:(0,i.jsx)("path",{d:"M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",fill:N})})}),E[24]=N,E[25]=j):j=E[25],E[26]!==o||E[27]!==B||E[28]!==O||E[29]!==V||E[30]!==D||E[31]!==J||E[32]!==p?(C=!D&&p&&(0,i.jsxs)(tL,{viewBox:`0 0 ${O} ${O}`,fill:"none",children:[(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:J,patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:(0,i.jsx)("image",{href:p,width:"1",height:"1",onError:V})})}),(0,i.jsx)("circle",{cx:B,cy:B,r:B,fill:`url(#${J})`}),!o&&(0,i.jsx)(tO,{cx:B,cy:B,rx:B,ry:B,vectorEffect:"non-scaling-stroke"}),(0,i.jsx)(tB,{cx:B,cy:B,rx:B,ry:B,vectorEffect:"non-scaling-stroke"})]}),E[26]=o,E[27]=B,E[28]=O,E[29]=V,E[30]=D,E[31]=J,E[32]=p,E[33]=C):C=E[33],E[34]!==D||E[35]!==c||E[36]!==k||E[37]!==p?(I=(D||!p)&&c&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(tW,{children:(0,i.jsx)(tH,{forwardedAs:"span",size:k,weight:"medium",children:c})})}),E[34]=D,E[35]=c,E[36]=k,E[37]=p,E[38]=I):I=E[38],E[39]!==H||E[40]!==M||E[41]!==N||E[42]!==t||E[43]!==f||E[44]!==F||E[45]!==_||E[46]!==q||E[47]!==j||E[48]!==C||E[49]!==I||E[50]!==b?(R=(0,i.jsxs)(tM,{as:M,"data-as":q,"data-ui":"Avatar",...f,$color:N,$size:F,"aria-label":b,"data-arrow-position":H,"data-status":_,ref:t,title:b,children:[j,C,I]}),E[39]=H,E[40]=M,E[41]=N,E[42]=t,E[43]=f,E[44]=F,E[45]=_,E[46]=q,E[47]=j,E[48]=C,E[49]=I,E[50]=b,E[51]=R):R=E[51],R});function tP(e){return 1===e?1:2===e?3:3===e?5:0}tD.displayName="ForwardRef(Avatar)";let tJ=s.I4.div.withConfig({displayName:"StyledAvatarCounter",componentId:"sc-1ydx86y-0"})(function(e){let{avatar:t,media:o}=(0,n.JW)(e.theme);return j(o,e.$size,e=>{let o=t.sizes[e];return o?{borderRadius:S(o.size/2),minWidth:S(o.size),height:S(o.size)}:x})},function(e){let{space:t}=(0,n.JW)(e.theme);return(0,s.AH)`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    user-select: none;
    color: inherit;
    color: var(--card-fg-color);
    background: var(--card-bg-color);
    box-shadow:
      0 0 0 1px var(--card-bg-color),
      inset 0 0 0 1px var(--card-hairline-hard-color);
    padding: 0 ${S(t[2])};

    &:not([hidden]) {
      display: flex;
    }
  `}),tV=(0,l.forwardRef)(function(e,t){let o,r,n,l;let d=(0,a.c)(9),{count:s,size:c}=e,u=z(void 0===c?1:c);return d[0]!==u?(r=u.map(tq),d[0]=u,d[1]=r):r=d[1],o=r,d[2]!==s||d[3]!==o?(n=(0,i.jsx)(tT,{as:"span",size:o,weight:"medium",children:s}),d[2]=s,d[3]=o,d[4]=n):n=d[4],d[5]!==t||d[6]!==u||d[7]!==n?(l=(0,i.jsx)(tJ,{$size:u,"data-ui":"AvatarCounter",ref:t,children:n}),d[5]=t,d[6]=u,d[7]=n,d[8]=l):l=d[8],l});function tq(e){return 1===e?1:2===e?3:3===e?5:0}tV.displayName="ForwardRef(AvatarCounter)";let tG=(0,s.AH)`
  white-space: nowrap;

  & > div {
    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  }
`,tX=s.I4.div.withConfig({displayName:"StyledAvatarStack",componentId:"sc-cysmbb-0"})(function(e){let{avatar:t,media:o}=(0,n.JW)(e.theme);return j(o,e.$size,e=>{let o=t.sizes[e];return o?{"& > div + div":{marginLeft:S(o.distance)}}:x})},function(){return tG}),tU=(0,l.forwardRef)(function(e,t){let o,r,n,d,s,c;let u=(0,a.c)(15);u[0]!==e?({children:o,maxLength:n,size:d,...r}=e,u[0]=e,u[1]=o,u[2]=r,u[3]=n,u[4]=d):(o=u[1],r=u[2],n=u[3],d=u[4]);let f=void 0===n?4:n,p=void 0===d?1:d,h=l.Children.toArray(o).filter(l.isValidElement),m=Math.max(f,0),g=z(p),b=h.length,v=b-(m-1),y=v>1?h.slice(v,b):h,w=0===b&&(0,i.jsx)("div",{children:(0,i.jsx)(tV,{count:b,size:g})}),x=0!==b&&v>1&&(0,i.jsx)("div",{children:(0,i.jsx)(tV,{count:v,size:g})});u[5]!==g?(s=(e,t)=>(0,i.jsx)("div",{children:(0,l.cloneElement)(e,{size:g})},String(t)),u[5]=g,u[6]=s):s=u[6];let $=y.map(s);return u[7]!==tX||u[8]!==t||u[9]!==r||u[10]!==g||u[11]!==w||u[12]!==x||u[13]!==$?(c=(0,i.jsxs)(tX,{"data-ui":"AvatarStack",...r,ref:t,$size:g,children:[w,x,$]}),u[7]=tX,u[8]=t,u[9]=r,u[10]=g,u[11]=w,u[12]=x,u[13]=$,u[14]=c):c=u[14],c});tU.displayName="ForwardRef(AvatarStack)";let tY=s.I4.div.withConfig({displayName:"StyledBox",componentId:"sc-1hhky9f-0"})(function(){return eX},e8,function(){return[eZ,eQ,e0,eK]},function(){return[tm,tg,tb,tv,ty,tw]},function(e){let{theme:t}=e;return[I(t,["margin"],e.$margin),I(t,["marginLeft","marginRight"],e.$marginX),I(t,["marginTop","marginBottom"],e.$marginY),I(t,["marginTop"],e.$marginTop),I(t,["marginRight"],e.$marginRight),I(t,["marginBottom"],e.$marginBottom),I(t,["marginLeft"],e.$marginLeft)].filter(Boolean)},tR),tK=(0,l.forwardRef)(function(e,t){let o,r,n,l,d,s,c,u,f,p,h,m,g,b,v,y,w,x,$,k,S,j,C,I,R,E,N,_;let T=(0,a.c)(59);T[0]!==e?({as:I,column:o,columnStart:n,columnEnd:r,display:R,flex:l,height:d,margin:E,marginX:p,marginY:h,marginTop:f,marginRight:u,marginBottom:s,marginLeft:c,overflow:m,padding:N,paddingX:w,paddingY:x,paddingTop:y,paddingRight:v,paddingBottom:g,paddingLeft:b,row:k,rowStart:j,rowEnd:S,sizing:C,...$}=e,T[0]=e,T[1]=o,T[2]=r,T[3]=n,T[4]=l,T[5]=d,T[6]=s,T[7]=c,T[8]=u,T[9]=f,T[10]=p,T[11]=h,T[12]=m,T[13]=g,T[14]=b,T[15]=v,T[16]=y,T[17]=w,T[18]=x,T[19]=$,T[20]=k,T[21]=S,T[22]=j,T[23]=C,T[24]=I,T[25]=R,T[26]=E,T[27]=N):(o=T[1],r=T[2],n=T[3],l=T[4],d=T[5],s=T[6],c=T[7],u=T[8],f=T[9],p=T[10],h=T[11],m=T[12],g=T[13],b=T[14],v=T[15],y=T[16],w=T[17],x=T[18],$=T[19],k=T[20],S=T[21],j=T[22],C=T[23],I=T[24],R=T[25],E=T[26],N=T[27]);let A=void 0===I?"div":I,M=void 0===R?"block":R,F=void 0===E?0:E,O=void 0===N?0:N,B="string"==typeof A?A:void 0,W=z(o),H=z(n),L=z(r),D=z(M),P=z(l),J=z(d),V=z(F),q=z(p),G=z(h),X=z(f),U=z(u),Y=z(s),K=z(c),Z=z(m),Q=z(O),ee=z(w),et=z(x),eo=z(y),er=z(v),en=z(g),ei=z(b),ea=z(k),el=z(j),ed=z(S),es=z(C);return T[28]!==A||T[29]!==e.children||T[30]!==t||T[31]!==$||T[32]!==J||T[33]!==V||T[34]!==q||T[35]!==G||T[36]!==X||T[37]!==U||T[38]!==Y||T[39]!==K||T[40]!==Z||T[41]!==Q||T[42]!==ee||T[43]!==et||T[44]!==eo||T[45]!==er||T[46]!==en||T[47]!==ei||T[48]!==ea||T[49]!==el||T[50]!==ed||T[51]!==es||T[52]!==B||T[53]!==W||T[54]!==H||T[55]!==L||T[56]!==D||T[57]!==P?(_=(0,i.jsx)(tY,{"data-as":B,"data-ui":"Box",...$,$column:W,$columnStart:H,$columnEnd:L,$display:D,$flex:P,$height:J,$margin:V,$marginX:q,$marginY:G,$marginTop:X,$marginRight:U,$marginBottom:Y,$marginLeft:K,$overflow:Z,$padding:Q,$paddingX:ee,$paddingY:et,$paddingTop:eo,$paddingRight:er,$paddingBottom:en,$paddingLeft:ei,$row:ea,$rowStart:el,$rowEnd:ed,$sizing:es,as:A,ref:t,children:e.children}),T[28]=A,T[29]=e.children,T[30]=t,T[31]=$,T[32]=J,T[33]=V,T[34]=q,T[35]=G,T[36]=X,T[37]=U,T[38]=Y,T[39]=K,T[40]=Z,T[41]=Q,T[42]=ee,T[43]=et,T[44]=eo,T[45]=er,T[46]=en,T[47]=ei,T[48]=ea,T[49]=el,T[50]=ed,T[51]=es,T[52]=B,T[53]=W,T[54]=H,T[55]=L,T[56]=D,T[57]=P,T[58]=_):_=T[58],_});tK.displayName="ForwardRef(Box)";let tZ=s.I4.div.withConfig({displayName:"StyledText",componentId:"sc-11ov82j-0"})(function(e){return R("text",e)},E,function(e){let{$accent:t,$muted:o}=e,{font:r}=(0,n.JW)(e.theme);return(0,s.AH)`
    color: var(--card-fg-color);

    ${t&&(0,s.AH)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,s.AH)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${r.code.family};
      border-radius: 1px;
      background-color: var(--card-code-bg-color);
      color: var(--card-code-fg-color);
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${r.text.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
      color: var(--card-icon-color);

      & path {
        vector-effect: non-scaling-stroke !important;
      }
    }
  `}),tQ=(0,l.forwardRef)(function(e,t){let o,r,n,l,d,s,c,u,f,p;let h=(0,a.c)(22);h[0]!==e?({accent:l,align:o,children:r,muted:d,size:s,textOverflow:c,weight:u,...n}=e,h[0]=e,h[1]=o,h[2]=r,h[3]=n,h[4]=l,h[5]=d,h[6]=s,h[7]=c,h[8]=u):(o=h[1],r=h[2],n=h[3],l=h[4],d=h[5],s=h[6],c=h[7],u=h[8]);let m=void 0!==l&&l,g=void 0!==d&&d,b=void 0===s?2:s,v=r;if("ellipsis"===c){let e;h[9]!==v?(e=(0,i.jsx)(tN,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let y=z(o),w=z(b);return h[11]!==v?(f=(0,i.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==m||h[14]!==g||h[15]!==t||h[16]!==n||h[17]!==y||h[18]!==w||h[19]!==f||h[20]!==u?(p=(0,i.jsx)(tZ,{"data-ui":"Text",...n,$accent:m,$align:y,$muted:g,ref:t,$size:w,$weight:u,children:f}),h[13]=m,h[14]=g,h[15]=t,h[16]=n,h[17]=y,h[18]=w,h[19]=f,h[20]=u,h[21]=p):p=h[21],p});tQ.displayName="ForwardRef(Text)";let t0=(0,s.I4)(tK).withConfig({displayName:"StyledBadge",componentId:"sc-5u140l-0"})(tE,function(e){let{$tone:t}=e;return{"--card-bg-color":`var(--card-badge-${t}-bg-color)`,"--card-fg-color":`var(--card-badge-${t}-fg-color)`,backgroundColor:"var(--card-bg-color)",cursor:"default","&:not([hidden])":{display:"inline-block",verticalAlign:"top"}}}),t1=(0,l.forwardRef)(function(e,t){let o,r,n,l,d,s,c,u;let f=(0,a.c)(17);if(f[0]!==e){let{children:t,fontSize:i,mode:a,padding:c,radius:u,tone:p,...h}=e;o=t,n=i,l=c,d=u,s=p,r=h,f[0]=e,f[1]=o,f[2]=r,f[3]=n,f[4]=l,f[5]=d,f[6]=s}else o=f[1],r=f[2],n=f[3],l=f[4],d=f[5],s=f[6];let p=void 0===n?1:n,h=void 0===l?1:l,m=void 0===s?"default":s,g=z(void 0===d?"full":d),b=z(h);return f[7]!==o||f[8]!==p?(c=(0,i.jsx)(tQ,{size:p,children:o}),f[7]=o,f[8]=p,f[9]=c):c=f[9],f[10]!==t||f[11]!==r||f[12]!==g||f[13]!==b||f[14]!==c||f[15]!==m?(u=(0,i.jsx)(t0,{"data-ui":"Badge",...r,$tone:m,$radius:g,padding:b,ref:t,children:c}),f[10]=t,f[11]=r,f[12]=g,f[13]=b,f[14]=c,f[15]=m,f[16]=u):u=f[16],u});t1.displayName="ForwardRef(Badge)";let t2=(0,s.I4)(tK).withConfig({displayName:"StyledFlex",componentId:"sc-oxesg3-0"})(e8,function(){return[e1,e2,e3,e4,e5,e6]}),t3=(0,l.forwardRef)(function(e,t){let o,r,n,l,d,s,c,u;let f=(0,a.c)(17);f[0]!==e?({align:o,as:r,direction:s,gap:n,justify:l,wrap:c,...d}=e,f[0]=e,f[1]=o,f[2]=r,f[3]=n,f[4]=l,f[5]=d,f[6]=s,f[7]=c):(o=f[1],r=f[2],n=f[3],l=f[4],d=f[5],s=f[6],c=f[7]);let p=void 0===s?"row":s,h=z(o),m=z(p),g=z(n),b=z(l),v=z(c);return f[8]!==r||f[9]!==t||f[10]!==d||f[11]!==h||f[12]!==m||f[13]!==g||f[14]!==b||f[15]!==v?(u=(0,i.jsx)(t2,{"data-ui":"Flex",...d,$align:h,$direction:m,$gap:g,$justify:b,$wrap:v,forwardedAs:r,ref:t}),f[8]=r,f[9]=t,f[10]=d,f[11]=h,f[12]=m,f[13]=g,f[14]=b,f[15]=v,f[16]=u):u=f[16],u});t3.displayName="ForwardRef(Flex)";let t4=(0,s.i7)`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,t5=(0,s.I4)(tQ).withConfig({displayName:"StyledSpinner",componentId:"sc-124hnd0-0"})`& > span > svg{animation:${t4} 500ms linear infinite;}`,t6=(0,l.forwardRef)(function(e,t){let o,r;let n=(0,a.c)(4);return n[0]===Symbol.for("react.memo_cache_sentinel")?(o=(0,i.jsx)(c.Nl1,{}),n[0]=o):o=n[0],n[1]!==e||n[2]!==t?(r=(0,i.jsx)(t5,{"data-ui":"Spinner",...e,ref:t,children:o}),n[1]=e,n[2]=t,n[3]=r):r=n[3],r});function t7(e,t,o=!1){return{"--card-backdrop-color":e.backdrop,"--card-focus-ring-color":e.focusRing,"--card-shadow-outline-color":e.shadow.outline,"--card-shadow-umbra-color":e.shadow.umbra,"--card-shadow-penumbra-color":e.shadow.penumbra,"--card-shadow-ambient-color":e.shadow.ambient,"--card-accent-fg-color":t.accent.fg,"--card-avatar-gray-bg-color":t.avatar.gray.bg,"--card-avatar-gray-fg-color":t.avatar.gray.fg,"--card-avatar-blue-bg-color":t.avatar.blue.bg,"--card-avatar-blue-fg-color":t.avatar.blue.fg,"--card-avatar-purple-bg-color":t.avatar.purple.bg,"--card-avatar-purple-fg-color":t.avatar.purple.fg,"--card-avatar-magenta-bg-color":t.avatar.magenta.bg,"--card-avatar-magenta-fg-color":t.avatar.magenta.fg,"--card-avatar-red-bg-color":t.avatar.red.bg,"--card-avatar-red-fg-color":t.avatar.red.fg,"--card-avatar-orange-bg-color":t.avatar.orange.bg,"--card-avatar-orange-fg-color":t.avatar.orange.fg,"--card-avatar-yellow-bg-color":t.avatar.yellow.bg,"--card-avatar-yellow-fg-color":t.avatar.yellow.fg,"--card-avatar-green-bg-color":t.avatar.green.bg,"--card-avatar-green-fg-color":t.avatar.green.fg,"--card-avatar-cyan-bg-color":t.avatar.cyan.bg,"--card-avatar-cyan-fg-color":t.avatar.cyan.fg,"--card-bg-color":t.bg,"--card-bg-image":o?`repeating-conic-gradient(${t.bg} 0% 25%, ${t.muted.bg} 0% 50%)`:void 0,"--card-border-color":t.border,"--card-badge-default-bg-color":t.badge.default.bg,"--card-badge-default-dot-color":t.badge.default.dot,"--card-badge-default-fg-color":t.badge.default.fg,"--card-badge-default-icon-color":t.badge.default.icon,"--card-badge-neutral-bg-color":t.badge.neutral?.bg,"--card-badge-neutral-dot-color":t.badge.neutral?.dot,"--card-badge-neutral-fg-color":t.badge.neutral?.fg,"--card-badge-neutral-icon-color":t.badge.neutral?.icon,"--card-badge-primary-bg-color":t.badge.primary.bg,"--card-badge-primary-dot-color":t.badge.primary.dot,"--card-badge-primary-fg-color":t.badge.primary.fg,"--card-badge-primary-icon-color":t.badge.primary.icon,"--card-badge-suggest-bg-color":t.badge.suggest?.bg,"--card-badge-suggest-dot-color":t.badge.suggest?.dot,"--card-badge-suggest-fg-color":t.badge.suggest?.fg,"--card-badge-suggest-icon-color":t.badge.suggest?.icon,"--card-badge-positive-bg-color":t.badge.positive.bg,"--card-badge-positive-dot-color":t.badge.positive.dot,"--card-badge-positive-fg-color":t.badge.positive.fg,"--card-badge-positive-icon-color":t.badge.positive.icon,"--card-badge-caution-bg-color":t.badge.caution.bg,"--card-badge-caution-dot-color":t.badge.caution.dot,"--card-badge-caution-fg-color":t.badge.caution.fg,"--card-badge-caution-icon-color":t.badge.caution.icon,"--card-badge-critical-bg-color":t.badge.critical.bg,"--card-badge-critical-dot-color":t.badge.critical.dot,"--card-badge-critical-fg-color":t.badge.critical.fg,"--card-badge-critical-icon-color":t.badge.critical.icon,"--card-code-bg-color":t.code.bg,"--card-code-fg-color":t.code.fg,"--card-fg-color":t.fg,"--card-icon-color":t.icon,"--card-kbd-bg-color":t.kbd.bg,"--card-kbd-border-color":t.kbd.border,"--card-kbd-fg-color":t.kbd.fg,"--card-link-fg-color":t.link.fg,"--card-muted-bg-color":t.muted.bg,"--card-muted-fg-color":t.muted.fg,"--card-skeleton-color-from":t.skeleton.from,"--card-skeleton-color-to":t.skeleton.to,"--card-bg2-color":t.muted.bg,"--card-link-color":t.link.fg,"--card-hairline-soft-color":t.border,"--card-hairline-hard-color":t.border}}function t8(...e){return e.filter(Boolean).join(",")}t6.displayName="ForwardRef(Spinner)";let t9=s.I4.button.withConfig({displayName:"StyledButton",componentId:"sc-aaekt4-0"})(tE,function(e){let{$width:t}=e,{style:o}=(0,n.JW)(e.theme);return(0,s.AH)`
    ${o?.button};

    -webkit-font-smoothing: inherit;
    appearance: none;
    display: inline-flex;
    align-items: center;
    font: inherit;
    border: 0;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    text-align: left;
    position: relative;
    vertical-align: top;

    ${"fill"===t&&(0,s.AH)`
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    `}

    & > span {
      display: block;
      flex: 1;
      min-width: 0;
      border-radius: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `},function(e){let{$mode:t}=e,{button:o,color:r,style:i}=(0,n.JW)(e.theme),a="ghost"===e.$mode,l=r.button[t]||r.button.default,d=l[e.$tone]||l.default,s={width:o.border.width,color:"var(--card-border-color)"},c=void 0;return[t7(r,d.enabled),{backgroundColor:"var(--card-bg-color)",color:"var(--card-fg-color)",boxShadow:te(s),'&:disabled, &[data-disabled="true"]':t7(r,d.disabled),"&:not([data-disabled='true'])":{boxShadow:t8(te(s),a?c:void 0),"&:focus":{boxShadow:tt({base:r,border:{width:2,color:r.bg},focusRing:o.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:t8(te(s),a?c:void 0)},"@media (hover: hover)":{"&:hover":t7(r,d.hovered),"&:active":t7(r,d.pressed),"&[data-hovered]":t7(r,d.hovered)},"&[data-selected]":t7(r,d.pressed)}},i?.button?.root].filter(Boolean)}),oe=s.I4.div.withConfig({displayName:"LoadingBox",componentId:"sc-aaekt4-1"})`position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background-color:var(--card-bg-color);border-radius:inherit;z-index:1;box-shadow:inherit;`,ot=(0,l.forwardRef)(function(e,t){let o,r,n,s,c,u,f,p,h,m,g,b,v,y,w,x,$,k,S,j,C,I,R,E,N,_,T,A,M,F,O;let B=(0,a.c)(64);B[0]!==e?({children:n,disabled:s,fontSize:y,icon:o,iconRight:r,justify:w,loading:c,mode:x,padding:$,paddingX:m,paddingY:g,paddingTop:h,paddingBottom:u,paddingLeft:f,paddingRight:p,radius:k,selected:v,space:S,text:R,textAlign:E,tone:j,type:C,muted:I,width:N,...b}=e,B[0]=e,B[1]=o,B[2]=r,B[3]=n,B[4]=s,B[5]=c,B[6]=u,B[7]=f,B[8]=p,B[9]=h,B[10]=m,B[11]=g,B[12]=b,B[13]=v,B[14]=y,B[15]=w,B[16]=x,B[17]=$,B[18]=k,B[19]=S,B[20]=j,B[21]=C,B[22]=I,B[23]=R,B[24]=E,B[25]=N):(o=B[1],r=B[2],n=B[3],s=B[4],c=B[5],u=B[6],f=B[7],p=B[8],h=B[9],m=B[10],g=B[11],b=B[12],v=B[13],y=B[14],w=B[15],x=B[16],$=B[17],k=B[18],S=B[19],j=B[20],C=B[21],I=B[22],R=B[23],E=B[24],N=B[25]);let W=void 0===y?1:y,H=void 0===w?"center":w,L=void 0===x?"default":x,D=void 0===$?3:$,P=void 0===k?2:k,J=void 0===S?3:S,V=void 0===j?"default":j,q=void 0===C?"button":C,G=void 0!==I&&I,{button:X}=eF(),U=z(H),Y=z(D),K=z(m),Z=z(g),Q=z(h),ee=z(u),et=z(f),eo=z(p),er=z(P),en=z(J);B[26]!==Y||B[27]!==ee||B[28]!==et||B[29]!==eo||B[30]!==Q||B[31]!==K||B[32]!==Z?(T={padding:Y,paddingX:K,paddingY:Z,paddingTop:Q,paddingBottom:ee,paddingLeft:et,paddingRight:eo},B[26]=Y,B[27]=ee,B[28]=et,B[29]=eo,B[30]=Q,B[31]=K,B[32]=Z,B[33]=T):T=B[33],_=T;let ei=!!(c||s),ea=v?"":void 0,el=!!(c||s);return B[34]!==c?(A=!!c&&(0,i.jsx)(oe,{children:(0,i.jsx)(t6,{})}),B[34]=c,B[35]=A):A=B[35],B[36]!==o||B[37]!==r||B[38]!==_||B[39]!==X||B[40]!==W||B[41]!==U||B[42]!==G||B[43]!==en||B[44]!==R||B[45]!==E?(M=(o||R||r)&&(0,i.jsx)(tK,{as:"span",..._,children:(0,i.jsxs)(t3,{as:"span",justify:U,gap:en,children:[o&&(0,i.jsxs)(tQ,{size:W,children:[(0,l.isValidElement)(o)&&o,(0,d.isValidElementType)(o)&&(0,i.jsx)(o,{})]}),R&&(0,i.jsx)(tK,{children:(0,i.jsx)(tQ,{muted:G,align:E,size:W,textOverflow:"ellipsis",weight:X.textWeight,children:R})}),r&&(0,i.jsxs)(tQ,{size:W,children:[(0,l.isValidElement)(r)&&r,(0,d.isValidElementType)(r)&&(0,i.jsx)(r,{})]})]})}),B[36]=o,B[37]=r,B[38]=_,B[39]=X,B[40]=W,B[41]=U,B[42]=G,B[43]=en,B[44]=R,B[45]=E,B[46]=M):M=B[46],B[47]!==_||B[48]!==n?(F=n&&(0,i.jsx)(tK,{as:"span",..._,children:n}),B[47]=_,B[48]=n,B[49]=F):F=B[49],B[50]!==L||B[51]!==er||B[52]!==t||B[53]!==b||B[54]!==ei||B[55]!==ea||B[56]!==el||B[57]!==A||B[58]!==M||B[59]!==F||B[60]!==V||B[61]!==q||B[62]!==N?(O=(0,i.jsxs)(t9,{"data-ui":"Button",...b,$mode:L,$radius:er,$tone:V,"data-disabled":ei,"data-selected":ea,disabled:el,ref:t,type:q,$width:N,children:[A,M,F]}),B[50]=L,B[51]=er,B[52]=t,B[53]=b,B[54]=ei,B[55]=ea,B[56]=el,B[57]=A,B[58]=M,B[59]=F,B[60]=V,B[61]=q,B[62]=N,B[63]=O):O=B[63],O});ot.displayName="ForwardRef(Button)";let oo=(0,s.I4)(tK).withConfig({displayName:"StyledCard",componentId:"sc-osnro2-0"})(function(){return[eP,eJ,eV,eq,eG]},tE,function(e){let{card:t,media:o,shadow:r}=(0,n.JW)(e.theme);return j(o,e.$shadow,e=>(function(e,t=1){if(!e)return x;let o=`0 0 0 ${S(t)} var(--card-shadow-outline-color)`,r=tz(e.umbra,"var(--card-shadow-umbra-color)"),n=tz(e.penumbra,"var(--card-shadow-penumbra-color)"),i=tz(e.ambient,"var(--card-shadow-ambient-color)");return{boxShadow:`${o}, ${r}, ${n}, ${i}`}})(r[e],t.shadow.outline))},function(e){return[function(e){let{$checkered:t}=e,{space:o}=(0,n.JW)(e.theme);return(0,s.AH)`
    ${t&&(0,s.AH)`
      background-size: ${o[3]}px ${o[3]}px;
      background-position: 50% 50%;
      background-image: var(--card-bg-image);
    `}

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      outline: none;
      text-decoration: none;
    }

    /* &:is(pre) */
    &[data-as='pre'] {
      font: inherit;
    }
  `}(e),function(e){let{$checkered:t,$focusRing:o,$muted:r}=e,{card:i,color:a,style:l}=(0,n.JW)(e.theme),d={width:i.border.width,color:"var(--card-border-color)"};return(0,s.AH)`
    color-scheme: ${a._dark?"dark":"light"};

    ${t7(a,a,t)}

    background-color: ${r?"var(--card-muted-bg-color)":"var(--card-bg-color)"};
    color: var(--card-fg-color);

    /* &:is(button) */
    &[data-as='button'] {
      --card-focus-ring-box-shadow: none;

      cursor: default;
      box-shadow: var(--card-focus-ring-box-shadow);

      &:disabled {
        ${t7(a,a.selectable.default.disabled,t)}
      }

      &:not(:disabled) {
        &[data-pressed] {
          ${t7(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${t7(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t7(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${t7(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${o?tt({base:a,border:d,focusRing:i.focusRing}):void 0};
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      cursor: pointer;
      box-shadow: var(--card-focus-ring-box-shadow);

      &[data-disabled] {
        ${t7(a,a.selectable.default.disabled,t)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${t7(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${t7(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t7(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${t7(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${o?tt({base:a,border:d,focusRing:i.focusRing}):void 0};
        }
      }
    }

    ${l?.card?.root}
  `}(e)]}),or=(0,l.forwardRef)(function(e,t){let o,r,n,l,s,c,u,f,p,h,m,g,b,v,y,w,x,$;let k=(0,a.c)(42);k[0]!==e?({__unstable_checkered:b,__unstable_focusRing:v,as:o,border:r,borderTop:c,borderRight:s,borderBottom:n,borderLeft:l,muted:u,pressed:f,radius:y,scheme:h,selected:m,shadow:g,tone:w,...p}=e,k[0]=e,k[1]=o,k[2]=r,k[3]=n,k[4]=l,k[5]=s,k[6]=c,k[7]=u,k[8]=f,k[9]=p,k[10]=h,k[11]=m,k[12]=g,k[13]=b,k[14]=v,k[15]=y,k[16]=w):(o=k[1],r=k[2],n=k[3],l=k[4],s=k[5],c=k[6],u=k[7],f=k[8],p=k[9],h=k[10],m=k[11],g=k[12],b=k[13],v=k[14],y=k[15],w=k[16]);let S=void 0!==b&&b,j=void 0!==v&&v,C=void 0===y?0:y,I=void 0===w?"default":w,R=(0,d.isValidElementType)(o)?o:"div",E=eT(),N="inherit"===I?E.tone:I,_="string"==typeof R?R:void 0,T=E.scheme,A=z(r),M=z(c),F=z(s),O=z(n),B=z(l),W=z(C),H=z(g),L=S?"":void 0,D=f?"":void 0,P=m?"":void 0;return k[17]!==R||k[18]!==S||k[19]!==j||k[20]!==u||k[21]!==t||k[22]!==p||k[23]!==E.scheme||k[24]!==m||k[25]!==B||k[26]!==W||k[27]!==H||k[28]!==L||k[29]!==D||k[30]!==P||k[31]!==_||k[32]!==A||k[33]!==M||k[34]!==F||k[35]!==O||k[36]!==N?(x=(0,i.jsx)(oo,{"data-as":_,"data-scheme":T,"data-ui":"Card","data-tone":N,...p,$border:A,$borderTop:M,$borderRight:F,$borderBottom:O,$borderLeft:B,$checkered:S,$focusRing:j,$muted:u,$radius:W,$shadow:H,$tone:N,"data-checkered":L,"data-pressed":D,"data-selected":P,forwardedAs:R,ref:t,selected:m}),k[17]=R,k[18]=S,k[19]=j,k[20]=u,k[21]=t,k[22]=p,k[23]=E.scheme,k[24]=m,k[25]=B,k[26]=W,k[27]=H,k[28]=L,k[29]=D,k[30]=P,k[31]=_,k[32]=A,k[33]=M,k[34]=F,k[35]=O,k[36]=N,k[37]=x):x=k[37],k[38]!==h||k[39]!==x||k[40]!==N?($=(0,i.jsx)(eA,{scheme:h,tone:N,children:x}),k[38]=h,k[39]=x,k[40]=N,k[41]=$):$=k[41],$});or.displayName="ForwardRef(Card)";let on=s.I4.div.withConfig({displayName:"StyledCheckbox",componentId:"sc-1l5mt2l-0"})(function(){return(0,s.AH)`
    position: relative;
    display: inline-block;
  `}),oi=s.I4.input.withConfig({displayName:"Input",componentId:"sc-1l5mt2l-1"})(function(e){let{color:t,input:o,radius:r}=(0,n.JW)(e.theme),{focusRing:i}=o.checkbox;return(0,s.AH)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    z-index: 1;
    padding: 0;
    margin: 0;

    & + span {
      position: relative;
      display: block;
      height: ${S(o.checkbox.size)};
      width: ${S(o.checkbox.size)};
      box-sizing: border-box;
      box-shadow: ${te({color:t.input.default.enabled.border,width:o.border.width})};
      border-radius: ${S(r[2])};
      line-height: 1;
      background-color: ${t.input.default.enabled.bg};

      & > svg {
        display: block;
        position: absolute;
        opacity: 0;
        height: 100%;
        width: 100%;

        & > path {
          vector-effect: non-scaling-stroke;
          stroke-width: 1.5px !important;
        }
      }
    }

    &:checked + span {
      background: ${t.input.default.enabled.fg};
      box-shadow: ${te({color:t.input.default.enabled.fg,width:o.border.width})};
      color: ${t.input.default.enabled.bg};
    }

    /* focus */
    &:not(:disabled):focus:focus-visible + span {
      box-shadow: ${tt({focusRing:i})};
    }

    /* focus when checked - uses a different offset */
    &:not(:disabled):focus:focus-visible&:checked + span {
      box-shadow: ${tt({focusRing:{width:1,offset:1}})};
    }

    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${te({width:o.border.width,color:t.input.invalid.enabled.muted.bg})};
      color: ${t.input.default.disabled.fg};
    }
    &[data-error]&:checked + span {
      background-color: ${t.input.invalid.enabled.muted.bg};
      color: ${t.input.default.enabled.bg};
    }
    &[data-error]&:checked&:not(:disabled):focus:focus-visible + span {
      box-shadow: ${tt({border:{width:o.border.width,color:t.input.invalid.readOnly.muted.bg},focusRing:{width:1,offset:1}})};
    }

    &:disabled + span {
      background-color: ${t.input.default.disabled.bg};
      box-shadow: ${te({width:o.border.width,color:t.input.default.disabled.border})};
      color: ${t.input.default.disabled.fg};
    }
    &:disabled&:checked + span {
      background-color: ${t.input.default.disabled.muted.bg};
    }

    &[data-read-only] + span {
      background-color: ${t.input.default.readOnly.bg};
      box-shadow: ${te({width:o.border.width,color:t.input.default.readOnly.border})};
      color: ${t.input.default.readOnly.fg};
    }

    &[data-read-only]&:checked + span {
      background-color: ${t.input.default.readOnly.muted.bg};
    }

    &:checked + span > svg:first-child {
      opacity: 1;
    }
    &:indeterminate + span > svg:last-child {
      opacity: 1;
    }
  `}),oa=(0,l.forwardRef)(function(e,t){let o,r,n,d,s,u,f,p,h,m,g,b,v,y;let w=(0,a.c)(25);w[0]!==e?({checked:o,className:r,disabled:d,indeterminate:s,customValidity:n,readOnly:u,style:p,...f}=e,w[0]=e,w[1]=o,w[2]=r,w[3]=n,w[4]=d,w[5]=s,w[6]=u,w[7]=f,w[8]=p):(o=w[1],r=w[2],n=w[3],d=w[4],s=w[5],u=w[6],f=w[7],p=w[8]);let x=(0,l.useRef)(null);w[9]===Symbol.for("react.memo_cache_sentinel")?(h=()=>x.current,w[9]=h):h=w[9],(0,l.useImperativeHandle)(t,h),w[10]!==s?(m=()=>{x.current&&(x.current.indeterminate=s||!1)},g=[s],w[10]=s,w[11]=m,w[12]=g):(m=w[11],g=w[12]),(0,l.useEffect)(m,g),T(x,n);let $=!d&&u?"":void 0,k=n?"":void 0,S=d||u;return w[13]!==o||w[14]!==u||w[15]!==f||w[16]!==$||w[17]!==k||w[18]!==S?(b=(0,i.jsx)(oi,{"data-read-only":$,"data-error":k,...f,checked:o,disabled:S,type:"checkbox",readOnly:u,ref:x}),w[13]=o,w[14]=u,w[15]=f,w[16]=$,w[17]=k,w[18]=S,w[19]=b):b=w[19],w[20]===Symbol.for("react.memo_cache_sentinel")?(v=(0,i.jsxs)("span",{children:[(0,i.jsx)(c.Nrt,{}),(0,i.jsx)(c.YPx,{})]}),w[20]=v):v=w[20],w[21]!==r||w[22]!==p||w[23]!==b?(y=(0,i.jsxs)(on,{className:r,"data-ui":"Checkbox",style:p,children:[b,v]}),w[21]=r,w[22]=p,w[23]=b,w[24]=y):y=w[24],y});function ol({theme:e}){let{color:{syntax:t}}=(0,n.JW)(e);return{"&.atrule":{color:t.atrule},"&.attr-name":{color:t.attrName},"&.attr-value":{color:t.attrValue},"&.attribute":{color:t.attribute},"&.boolean":{color:t.boolean},"&.builtin":{color:t.builtin},"&.cdata":{color:t.cdata},"&.char":{color:t.char},"&.class":{color:t.class},"&.class-name":{color:t.className},"&.comment":{color:t.comment},"&.constant":{color:t.constant},"&.deleted":{color:t.deleted},"&.doctype":{color:t.doctype},"&.entity":{color:t.entity},"&.function":{color:t.function},"&.hexcode":{color:t.hexcode},"&.id":{color:t.id},"&.important":{color:t.important},"&.inserted":{color:t.inserted},"&.keyword":{color:t.keyword},"&.number":{color:t.number},"&.operator":{color:t.operator},"&.prolog":{color:t.prolog},"&.property":{color:t.property},"&.pseudo-class":{color:t.pseudoClass},"&.pseudo-element":{color:t.pseudoElement},"&.punctuation":{color:t.punctuation},"&.regex":{color:t.regex},"&.selector":{color:t.selector},"&.string":{color:t.string},"&.symbol":{color:t.symbol},"&.tag":{color:t.tag},"&.unit":{color:t.unit},"&.url":{color:t.url},"&.variable":{color:t.variable}}}oa.displayName="ForwardRef(Checkbox)";let od=s.I4.pre.withConfig({displayName:"StyledCode",componentId:"sc-4dymyn-0"})(function(){return(0,s.AH)`
    color: var(--card-code-fg-color);

    & code {
      font-family: inherit;

      &.refractor .token {
        ${ol}
      }
    }

    & a {
      color: inherit;
      text-decoration: underline;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},function(e){return R("code",e)}),os=(0,l.forwardRef)(function(e,t){let o,r,n,l,d,s,c,f,p;let h=(0,a.c)(23);h[0]!==e?({children:o,language:r,size:l,weight:d,...n}=e,h[0]=e,h[1]=o,h[2]=r,h[3]=n,h[4]=l,h[5]=d):(o=h[1],r=h[2],n=h[3],l=h[4],d=h[5]);let m=void 0===l?2:l,g="string"==typeof r?r:void 0;h[6]!==g?(s=!!g&&u.hasLanguage(g),h[6]=g,h[7]=s):s=h[7];let b=s,v=z(m);return h[8]!==o||h[9]!==g||h[10]!==b?(c=!(g&&b)&&(0,i.jsx)("code",{children:o}),h[8]=o,h[9]=g,h[10]=b,h[11]=c):c=h[11],h[12]!==o||h[13]!==g||h[14]!==b?(f=g&&b&&(0,i.jsx)(u,{inline:!0,language:g,value:String(o)}),h[12]=o,h[13]=g,h[14]=b,h[15]=f):f=h[15],h[16]!==t||h[17]!==n||h[18]!==v||h[19]!==c||h[20]!==f||h[21]!==d?(p=(0,i.jsxs)(od,{"data-ui":"Code",...n,$size:v,$weight:d,ref:t,children:[c,f]}),h[16]=t,h[17]=n,h[18]=v,h[19]=c,h[20]=f,h[21]=d,h[22]=p):p=h[22],p});os.displayName="ForwardRef(Code)";let oc={width:"100%",margin:"0 auto"},ou=(0,s.I4)(tK).withConfig({displayName:"StyledContainer",componentId:"sc-wyroop-0"})(function(){return oc},function(e){let{container:t,media:o}=(0,n.JW)(e.theme);return j(o,e.$width,e=>({maxWidth:"auto"===e?"none":S(t[e])}))}),of=(0,l.forwardRef)(function(e,t){let o,r,n,l;let d=(0,a.c)(9);d[0]!==e?({as:o,width:n,...r}=e,d[0]=e,d[1]=o,d[2]=r,d[3]=n):(o=d[1],r=d[2],n=d[3]);let s=z(void 0===n?2:n);return d[4]!==o||d[5]!==t||d[6]!==r||d[7]!==s?(l=(0,i.jsx)(ou,{"data-ui":"Container",...r,$width:s,forwardedAs:o,ref:t}),d[4]=o,d[5]=t,d[6]=r,d[7]=s,d[8]=l):l=d[8],l});of.displayName="ForwardRef(Container)";let op=(0,s.I4)(tK).withConfig({displayName:"StyledGrid",componentId:"sc-v8t8oz-0"})(function(){return[to,ti,ta,tl,td,ts,tc,tu,tf]}),oh=(0,l.forwardRef)(function(e,t){let o,r,n,l,d,s,c,u,f,p,h,m;let g=(0,a.c)(26);g[0]!==e?({as:o,autoRows:l,autoCols:r,autoFlow:n,columns:s,gap:c,gapX:u,gapY:f,rows:h,children:d,...p}=e,g[0]=e,g[1]=o,g[2]=r,g[3]=n,g[4]=l,g[5]=d,g[6]=s,g[7]=c,g[8]=u,g[9]=f,g[10]=p,g[11]=h):(o=g[1],r=g[2],n=g[3],l=g[4],d=g[5],s=g[6],c=g[7],u=g[8],f=g[9],p=g[10],h=g[11]);let b="string"==typeof o?o:void 0,v=z(l),y=z(r),w=z(n),x=z(s),$=z(c),k=z(u),S=z(f),j=z(h);return g[12]!==o||g[13]!==d||g[14]!==t||g[15]!==p||g[16]!==b||g[17]!==v||g[18]!==y||g[19]!==w||g[20]!==x||g[21]!==$||g[22]!==k||g[23]!==S||g[24]!==j?(m=(0,i.jsx)(op,{"data-as":b,"data-ui":"Grid",...p,$autoRows:v,$autoCols:y,$autoFlow:w,$columns:x,$gap:$,$gapX:k,$gapY:S,$rows:j,forwardedAs:o,ref:t,children:d}),g[12]=o,g[13]=d,g[14]=t,g[15]=p,g[16]=b,g[17]=v,g[18]=y,g[19]=w,g[20]=x,g[21]=$,g[22]=k,g[23]=S,g[24]=j,g[25]=m):m=g[25],m});oh.displayName="ForwardRef(Grid)";let om=s.I4.div.withConfig({displayName:"StyledHeading",componentId:"sc-137lwim-0"})(function(e){let{$accent:t,$muted:o}=e,{font:r}=(0,n.JW)(e.theme);return(0,s.AH)`
    ${t&&(0,s.AH)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,s.AH)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${r.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${r.heading.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},E,function(e){return R("heading",e)}),og=(0,l.forwardRef)(function(e,t){let o,r,n,l,d,s,c,u,f,p;let h=(0,a.c)(22);h[0]!==e?({accent:l,align:o,children:r,muted:d,size:s,textOverflow:c,weight:u,...n}=e,h[0]=e,h[1]=o,h[2]=r,h[3]=n,h[4]=l,h[5]=d,h[6]=s,h[7]=c,h[8]=u):(o=h[1],r=h[2],n=h[3],l=h[4],d=h[5],s=h[6],c=h[7],u=h[8]);let m=void 0!==l&&l,g=void 0!==d&&d,b=void 0===s?2:s,v=r;if("ellipsis"===c){let e;h[9]!==v?(e=(0,i.jsx)(tN,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let y=z(o),w=z(b);return h[11]!==v?(f=(0,i.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==m||h[14]!==g||h[15]!==t||h[16]!==n||h[17]!==y||h[18]!==w||h[19]!==f||h[20]!==u?(p=(0,i.jsx)(om,{"data-ui":"Heading",...n,$accent:m,$align:y,$muted:g,$size:w,$weight:u,ref:t,children:f}),h[13]=m,h[14]=g,h[15]=t,h[16]=n,h[17]=y,h[18]=w,h[19]=f,h[20]=u,h[21]=p):p=h[21],p});og.displayName="ForwardRef(Heading)";let ob=(0,s.I4)(tK).withConfig({displayName:"StyledInline",componentId:"sc-1pkiy6j-0"})(function(){return{lineHeight:0,"&&:not([hidden])":{display:"block"},"& > div":{display:"inline-block",verticalAlign:"middle"}}},function(e){let{media:t,space:o}=(0,n.JW)(e.theme);return j(t,e.$space,e=>{let t=S(.5===e?o[1]/2:o[e]);return{margin:`-${t} 0 0 -${t}`,"& > div":{padding:`${t} 0 0 ${t}`}}})}),ov=(0,l.forwardRef)(function(e,t){let o,r,n,d,s,c,u;let f=(0,a.c)(12);f[0]!==e?({as:o,children:r,space:d,...n}=e,f[0]=e,f[1]=o,f[2]=r,f[3]=n,f[4]=d):(o=f[1],r=f[2],n=f[3],d=f[4]),f[5]!==r?(c=l.Children.map(r,oy),f[5]=r,f[6]=c):c=f[6],s=c;let p=z(d);return f[7]!==o||f[8]!==s||f[9]!==n||f[10]!==p?(u=(0,i.jsx)(ob,{"data-ui":"Inline",...n,$space:p,forwardedAs:o,ref:t,children:s}),f[7]=o,f[8]=s,f[9]=n,f[10]=p,f[11]=u):u=f[11],u});function oy(e){return e&&(0,i.jsx)("div",{children:e})}ov.displayName="ForwardRef(Inline)";let ow=s.I4.kbd.withConfig({displayName:"StyledKBD",componentId:"sc-1w7yd8w-0"})(tE,function(){return(0,s.AH)`
    --card-bg-color: var(--card-kbd-bg-color);
    --card-border-color: var(--card-kbd-border-color);
    --card-fg-color: var(--card-kbd-fg-color);

    box-shadow: inset 0 0 0 1px var(--card-border-color);
    background: var(--card-bg-color);
    font: inherit;

    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),ox=(0,l.forwardRef)(function(e,t){let o,r,n,l,d,s,c,u;let f=(0,a.c)(17);f[0]!==e?({children:o,fontSize:n,padding:l,radius:d,...r}=e,f[0]=e,f[1]=o,f[2]=r,f[3]=n,f[4]=l,f[5]=d):(o=f[1],r=f[2],n=f[3],l=f[4],d=f[5]);let p=void 0===n?0:n,h=void 0===l?1:l,m=z(void 0===d?2:d);return f[6]!==o||f[7]!==p?(s=(0,i.jsx)(tQ,{as:"span",size:p,weight:"semibold",children:o}),f[6]=o,f[7]=p,f[8]=s):s=f[8],f[9]!==h||f[10]!==s?(c=(0,i.jsx)(tK,{as:"span",padding:h,children:s}),f[9]=h,f[10]=s,f[11]=c):c=f[11],f[12]!==t||f[13]!==r||f[14]!==m||f[15]!==c?(u=(0,i.jsx)(ow,{"data-ui":"KBD",...r,$radius:m,ref:t,children:c}),f[12]=t,f[13]=r,f[14]=m,f[15]=c,f[16]=u):u=f[16],u});ox.displayName="ForwardRef(KBD)";let o$={name:"@sanity/ui/origin",fn({middlewareData:e,placement:t,rects:o}){let[r]=t.split("-"),n=o.floating.width,i=o.floating.height,a=e.shift?.x||0,l=e.shift?.y||0;if(n<=0||i<=0)return{};let{originX:d,originY:s}=["bottom","top"].includes(r)?{originX:ok(.5-a/n,0,1),originY:"bottom"===r?0:1}:{originX:"left"===r?1:0,originY:ok(.5-l/i,0,1)};return{data:{originX:d,originY:s}}}};function ok(e,t,o){return Math.min(Math.max(e,t),o)}function oS(e,t,o){let r=t.x-e.x,n=t.y-e.y;return oj(e,t,Math.min(1,o/Math.sqrt(r*r+n*n)))}function oj(e,t,o){return{x:e.x+(t.x-e.x)*o,y:e.y+(t.y-e.y)*o}}let oC=s.I4.div.withConfig({displayName:"StyledArrow",componentId:"sc-12vzy6c-0"})(({$w:e})=>(0,s.AH)`
    position: absolute;
    width: ${e}px;
    height: ${e}px;

    :empty + & {
      display: none;
    }

    & > svg {
      display: block;
      line-height: 0;
      transform-origin: ${e/2}px ${e/2}px;
    }

    [data-placement^='top'] > & {
      bottom: -${e}px;

      & > svg {
        transform: rotate(0);
      }
    }

    [data-placement^='right'] > & {
      left: -${e}px;

      & > svg {
        transform: rotate(90deg);
      }
    }

    [data-placement^='left'] > & {
      right: -${e}px;

      & > svg {
        transform: rotate(-90deg);
      }
    }

    [data-placement^='bottom'] > & {
      top: -${e}px;

      & > svg {
        transform: rotate(180deg);
      }
    }
  `),oI=s.I4.path.withConfig({displayName:"StrokePath",componentId:"sc-12vzy6c-1"})`stroke:var(--card-shadow-outline-color);`,oR=s.I4.path.withConfig({displayName:"ShapePath",componentId:"sc-12vzy6c-2"})`fill:var(--card-bg-color);`,oE=(0,l.forwardRef)(function(e,t){let o,r,n,l,d,s,c,u,f;let p=(0,a.c)(24);p[0]!==e?({width:l,height:o,radius:n,...r}=e,p[0]=e,p[1]=o,p[2]=r,p[3]=n,p[4]=l):(o=p[1],r=p[2],n=p[3],l=p[4]);let h=void 0===n?0:n,{card:m}=eF(),g=m.shadow.outline,b=(function(e){let t=e.length,o=[];for(let r=0;r<t;r+=1){let t=e[r],n=e[r-1],i=e[r+1];if(n&&t.radius){let e=oS(t,n,t.radius),r=oS(t,i,t.radius),a=oj(e,t,.5),l=oj(t,r,.5);o.push({type:"point",...e}),o.push({type:"curve",curveEnd:r,startControl:a,endControl:l})}else o.push({type:"point",...t})}return o})([{x:0,y:0},{x:h,y:0,radius:h},{x:l/2,y:o-1,radius:h},{x:l-h,y:0,radius:h},{x:l,y:0}]).map((e,t)=>"point"===e.type?`${0===t?"M":"L"} ${e.x} ${e.y}`:"curve"===e.type?`C ${e.startControl.x} ${e.startControl.y} ${e.endControl.x} ${e.endControl.y} ${e.curveEnd.x} ${e.curveEnd.y}`:"").join(" "),v=`${b}`,y=`${b} M ${l} -1 M 0 -1 Z`,w=`0 0 ${l} ${l}`;p[5]!==g||p[6]!==l?(d=(0,i.jsx)("mask",{id:"stroke-mask",children:(0,i.jsx)("rect",{x:0,y:g,width:l,height:l,fill:"white"})}),p[5]=g,p[6]=l,p[7]=d):d=p[7];let x=2*g;return p[8]!==v||p[9]!==x?(s=(0,i.jsx)(oI,{d:v,mask:"url(#stroke-mask)",strokeWidth:x}),p[8]=v,p[9]=x,p[10]=s):s=p[10],p[11]!==y?(c=(0,i.jsx)(oR,{d:y}),p[11]=y,p[12]=c):c=p[12],p[13]!==w||p[14]!==d||p[15]!==s||p[16]!==c||p[17]!==l?(u=(0,i.jsxs)("svg",{width:l,height:l,viewBox:w,children:[d,s,c]}),p[13]=w,p[14]=d,p[15]=s,p[16]=c,p[17]=l,p[18]=u):u=p[18],p[19]!==t||p[20]!==r||p[21]!==u||p[22]!==l?(f=(0,i.jsx)(oC,{...r,$w:l,ref:t,children:u}),p[19]=t,p[20]=r,p[21]=u,p[22]=l,p[23]=f):f=p[23],f});oE.displayName="ForwardRef(Arrow)";let oz=ez("@sanity/ui/context/boundaryElement",null);function oN(e){let t,o,r;let n=(0,a.c)(5),{children:l,element:d}=e;return n[0]!==d?(o={version:0,element:d},n[0]=d,n[1]=o):o=n[1],t=o,n[2]!==l||n[3]!==t?(r=(0,i.jsx)(oz.Provider,{value:t,children:l}),n[2]=l,n[3]=t,n[4]=r):r=n[4],r}function o_(e){return!!(e&&"object"==typeof e&&!Array.isArray(e))}oN.displayName="BoundaryElementProvider";let oT={version:0,element:null};function oA(){let e=(0,l.useContext)(oz);if(e&&(!o_(e)||0!==e.version))throw Error("useBoundaryElement(): the context value is not compatible");return e||oT}let oM=(0,l.forwardRef)(function(e,t){let o,r,n,d,s,c,u,f,p,h,m;let g=(0,a.c)(18),b=eF();g[0]!==e?({children:r,media:o,...n}=e,g[0]=e,g[1]=o,g[2]=r,g[3]=n):(o=g[1],r=g[2],n=g[3]);let v=o??b.media,[y,w]=(0,l.useState)(null),x=ej(y);if(d=x?.border.width??window.innerWidth,g[4]!==v||g[5]!==d){let e=function(e,t){let o=[];for(let r=0;r<e.length;r+=1)e[r]>t&&o.push(r);return o}(v,d);c=e.length?e.join(" "):void 0,g[4]=v,g[5]=d,g[6]=c}else c=g[6];if(s=c,g[7]!==v||g[8]!==d){let e=function(e,t){let o=[];for(let r=0;r<e.length;r+=1)e[r]<=t&&o.push(r);return o}(v,d);f=e.length?e.join(" "):void 0,g[7]=v,g[8]=d,g[9]=f}else f=g[9];return u=f,g[10]!==y?(p=()=>y,h=[y],g[10]=y,g[11]=p,g[12]=h):(p=g[11],h=g[12]),(0,l.useImperativeHandle)(t,p,h),g[13]!==r||g[14]!==s||g[15]!==u||g[16]!==n?(m=(0,i.jsx)("div",{"data-ui":"ElementQuery",...n,"data-eq-max":s,"data-eq-min":u,ref:w,children:r}),g[13]=r,g[14]=s,g[15]=u,g[16]=n,g[17]=m):m=g[17],m});oM.displayName="ForwardRef(ElementQuery)";class oF extends l.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){this.props.onCatch({error:e,info:t})}render(){let{error:e}=this.state;if(e){let t="string"==typeof e?.message?e.message:"Error";return(0,i.jsx)(os,{children:t})}return this.props.children}}function oO(e){if(!o_(e)||0!==e.version)throw Error("the context value is not compatible");if(!e)throw Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");if(0===e.version)return e;throw Error("could not get layer context")}let oB=ez("@sanity/ui/context/layer",null);function oW(){let e=(0,a.c)(2),t=(0,l.useContext)(oB);if(!t)throw Error("useLayer(): missing context value");try{let o;return e[0]!==t?(o=oO(t),e[0]=t,e[1]=o):o=e[1],o}catch(e){throw e instanceof Error?Error(`useLayer(): ${e.message}`):Error(`useLayer(): ${e}`)}}function oH(e){let t=requestAnimationFrame(e);return()=>{cancelAnimationFrame(t)}}function oL(e){let t=null,o=oH(()=>{t=oH(e)});return()=>{t&&t(),o()}}function oD(e){return e instanceof Node&&e.nodeType===Node.ELEMENT_NODE}function oP(e){return oD(e)&&"A"===e.nodeName}function oJ(e){return oD(e)&&"BUTTON"===e.nodeName}function oV(e,t){return e.contains(t)||e===t}function oq(e){if(!(e.tabIndex>0||0===e.tabIndex&&null!==e.getAttribute("tabIndex")||(oP(e)?!!e.href&&"ignore"!==e.rel:oD(e)&&"INPUT"===e.nodeName?"hidden"!==e.type&&"file"!==e.type&&!e.disabled:!!(oJ(e)||oD(e)&&"SELECT"===e.nodeName||oD(e)&&"TEXTAREA"===e.nodeName)&&!e.disabled)))return!1;try{e.focus()}catch{}return document.activeElement===e}function oG(e){for(let t=0;t<e.childNodes.length;t++){let o=e.childNodes[t];if(oD(o)&&(oq(o)||oG(o)))return!0}return!1}function oX(e){for(let t=e.childNodes.length-1;t>=0;t--){let o=e.childNodes[t];if(oD(o)&&(oq(o)||oX(o)))return!0}return!1}function oU(e){let t,o,r,n,d,s,c,u;let f=(0,a.c)(19),{children:p,zOffset:h}=e,m=(0,l.useContext)(oB);f[0]!==m?(t=m&&oO(m),f[0]=m,f[1]=t):t=f[1];let g=t,b=g?.registerChild,v=(g?.level??0)+1,y=z(void 0===h?0:h),w=y.length-1,x=Math.min(eB(),w),$=g?g.zIndex+y[x]:y[x];f[2]===Symbol.for("react.memo_cache_sentinel")?(o={},f[2]=o):o=f[2];let[,k]=(0,l.useState)(o),[S,j]=(0,l.useState)(0),C=0===S;f[3]!==b||f[4]!==k?(r=e=>{let t=b?.(e);return void 0!==e?k(t=>{let o=t[e]??0,r={...t,[e]:o+1};return j(Object.keys(r).length),r}):j(oK),()=>{void 0!==e?k(t=>{let o={...t};return 1===o[e]?(delete o[e],j(Object.keys(o).length)):o[e]=o[e]-1,o}):j(oY),t?.()}},f[3]=b,f[4]=k,f[5]=r):r=f[5];let I=r;return f[6]!==v||f[7]!==b?(n=()=>b?.(v),d=[v,b],f[6]=v,f[7]=b,f[8]=n,f[9]=d):(n=f[8],d=f[9]),(0,l.useEffect)(n,d),f[10]!==C||f[11]!==v||f[12]!==I||f[13]!==S||f[14]!==$?(c={version:0,isTopLayer:C,level:v,registerChild:I,size:S,zIndex:$},f[10]=C,f[11]=v,f[12]=I,f[13]=S,f[14]=$,f[15]=c):c=f[15],s=c,f[16]!==p||f[17]!==s?(u=(0,i.jsx)(oB.Provider,{value:s,children:p}),f[16]=p,f[17]=s,f[18]=u):u=f[18],u}function oY(e){return e-1}function oK(e){return e+1}oU.displayName="LayerProvider";let oZ=s.I4.div.withConfig({displayName:"StyledLayer",componentId:"sc-16kojrv-0"})({position:"relative"}),oQ=(0,l.forwardRef)(function(e,t){let o,r,n,d,s,c,u,f,p,h,m;let g=(0,a.c)(22);g[0]!==e?({children:o,onActivate:r,onFocus:n,style:s,...d}=e,g[0]=e,g[1]=o,g[2]=r,g[3]=n,g[4]=d,g[5]=s):(o=g[1],r=g[2],n=g[3],d=g[4],s=g[5]);let b=void 0===s?x:s,{zIndex:v,isTopLayer:y}=oW(),w=(0,l.useRef)(null),$=(0,l.useRef)(null),k=(0,l.useRef)(y);g[6]===Symbol.for("react.memo_cache_sentinel")?(c=()=>$.current,g[6]=c):c=g[6],(0,l.useImperativeHandle)(t,c),g[7]!==y||g[8]!==r?(u=()=>{k.current!==y&&y&&r?.({activeElement:w.current}),k.current=y},f=[y,r],g[7]=y,g[8]=r,g[9]=u,g[10]=f):(u=g[9],f=g[10]),(0,l.useEffect)(u,f),g[11]!==y||g[12]!==n?(p=e=>{n?.(e);let t=$.current,o=document.activeElement;!y||!t||!o||oD(o)&&oV(t,o)&&(w.current=o)},g[11]=y,g[12]=n,g[13]=p):p=g[13];let S=p;return g[14]!==b||g[15]!==v?(h={...b,zIndex:v},g[14]=b,g[15]=v,g[16]=h):h=g[16],g[17]!==o||g[18]!==S||g[19]!==d||g[20]!==h?(m=(0,i.jsx)(oZ,{...d,"data-ui":"Layer",onFocus:S,ref:$,style:h,children:o}),g[17]=o,g[18]=S,g[19]=d,g[20]=h,g[21]=m):m=g[21],m}),o0=(0,l.forwardRef)(function(e,t){let o,r,n,l,d;let s=(0,a.c)(11);s[0]!==e?({children:o,zOffset:n,...r}=e,s[0]=e,s[1]=o,s[2]=r,s[3]=n):(o=s[1],r=s[2],n=s[3]);let c=void 0===n?1:n;return s[4]!==o||s[5]!==t||s[6]!==r?(l=(0,i.jsx)(oQ,{...r,ref:t,children:o}),s[4]=o,s[5]=t,s[6]=r,s[7]=l):l=s[7],s[8]!==l||s[9]!==c?(d=(0,i.jsx)(oU,{zOffset:c,children:l}),s[8]=l,s[9]=c,s[10]=d):d=s[10],d});o0.displayName="ForwardRef(Layer)";let o1="@sanity/ui/context/portal",o2=Symbol.for(`${o1}/element`);eE[o2]=null;let o3=ez(o1,{version:0,boundaryElement:null,get element(){return typeof document>"u"?null:(eE[o2]||(eE[o2]=document.createElement("div"),eE[o2].setAttribute("data-portal",""),document.body.appendChild(eE[o2])),eE[o2])}});function o4(){let e=(0,l.useContext)(o3);if(!e)throw Error("usePortal(): missing context value");if(!o_(e)||0!==e.version)throw Error("usePortal(): the context value is not compatible");return e}function o5(e){let t;let o=(0,a.c)(3),{children:r,__unstable_name:n}=e,i=o4(),l=(n?i.elements&&i.elements[n]:i.element)||i.elements?.default;return l?(o[0]!==r||o[1]!==l?(t=(0,g.createPortal)(r,l),o[0]=r,o[1]=l,o[2]=t):t=o[2],t):null}function o6(e){let t,o,r;let n=(0,a.c)(7),{boundaryElement:d,children:s,element:c,__unstable_elements:u}=e,f=function(e){let t=(0,l.useRef)(e);return function(e,t){if(!e||!t)return e===t;let o=Object.keys(e),r=Object.keys(t);return o.length===r.length&&o.every(o=>e[o]===t[o])}(t.current,e)||(t.current=e),t.current}(u),p=(0,l.useSyncExternalStore)(o9,o8,o7),h=d||null,m=c||p;return n[0]!==f||n[1]!==h||n[2]!==m?(o={version:0,boundaryElement:h,element:m,elements:f},n[0]=f,n[1]=h,n[2]=m,n[3]=o):o=n[3],t=o,n[4]!==s||n[5]!==t?(r=(0,i.jsx)(o3.Provider,{value:t,children:s}),n[4]=s,n[5]=t,n[6]=r):r=n[6],r}function o7(){return null}function o8(){return document.body}o5.displayName="Portal",o6.displayName="PortalProvider";let o9=()=>()=>{},re=s.I4.div.withConfig({displayName:"StyledSrOnly",componentId:"sc-mubr0c-0"})`display:block;width:0;height:0;position:absolute;overflow:hidden;overflow:clip;`;(0,l.forwardRef)(function(e,t){let o;let r=(0,a.c)(4),{as:n,children:l}=e;return r[0]!==n||r[1]!==l||r[2]!==t?(o=(0,i.jsx)(re,{"aria-hidden":!0,as:n,"data-ui":"SrOnly",ref:t,children:l}),r[0]=n,r[1]=l,r[2]=t,r[3]=o):o=r[3],o}).displayName="ForwardRef(SrOnly)";let rt=s.I4.div.withConfig({displayName:"StyledVirtualList",componentId:"sc-dlqsj4-0"})`position:relative;`,ro=s.I4.div.withConfig({displayName:"ItemWrapper",componentId:"sc-dlqsj4-1"})`position:absolute;left:0;right:0;`,rr=(0,l.forwardRef)(function(e,t){let o,r,n,d,s,c,u,f,p,h,m,g,b,v,y,w,x,$,k,S;let j=(0,a.c)(56);j[0]!==e?({as:s,gap:c,getItemKey:o,items:u,onChange:r,renderItem:n,...d}=e,j[0]=e,j[1]=o,j[2]=r,j[3]=n,j[4]=d,j[5]=s,j[6]=c,j[7]=u):(o=j[1],r=j[2],n=j[3],d=j[4],s=j[5],c=j[6],u=j[7]);let C=void 0===s?"div":s,I=void 0===c?0:c;j[8]!==u?(f=void 0===u?[]:u,j[8]=u,j[9]=f):f=j[9];let R=f,{space:E}=eF(),z=(0,l.useRef)(null),N=(0,l.useRef)(null),[_,T]=(0,l.useState)(0),[A,M]=(0,l.useState)(0),[F,O]=(0,l.useState)(-1);j[10]===Symbol.for("react.memo_cache_sentinel")?(p=()=>z.current,j[10]=p):p=j[10],(0,l.useImperativeHandle)(t,p),j[11]===Symbol.for("react.memo_cache_sentinel")?(h=()=>{if(!N.current)return;let e=N.current.firstChild;e instanceof HTMLElement&&O(e.offsetHeight)},j[11]=h):h=j[11],j[12]!==n?(m=[n],j[12]=n,j[13]=m):m=j[13],(0,l.useEffect)(h,m),j[14]===Symbol.for("react.memo_cache_sentinel")?(g=()=>{if(!z.current)return;let e=function(e){let t=e;for(;t&&!function(e){if(!(e instanceof Element))return!1;let t=window.getComputedStyle(e);return t.overflowX.includes("auto")||t.overflowX.includes("scroll")||t.overflowY.includes("auto")||t.overflowY.includes("scroll")}(t);)t=t.parentNode;return t}(z.current.parentNode);if(e){if(!(e instanceof HTMLElement))return;let t=()=>{T(e.scrollTop)};e.addEventListener("scroll",t,{passive:!0});let o=new ek(e=>{M(e[0].contentRect.height)});return o.observe(e),t(),()=>{e.removeEventListener("scroll",t),o.unobserve(e),o.disconnect()}}let t=()=>{T(window.scrollY)},o=()=>{M(window.innerHeight)};return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",o),M(window.innerHeight),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",o)}},b=[],j[14]=g,j[15]=b):(g=j[14],b=j[15]),(0,l.useEffect)(g,b);let B=R.length,W=F?B*(F+E[I])-E[I]:0,H=W?Math.max(Math.floor(_/W*B)-2,0):0,L=W?Math.ceil((_+A)/W*B)+1:0;j[16]!==H||j[17]!==I||j[18]!==F||j[19]!==r||j[20]!==A||j[21]!==_||j[22]!==E||j[23]!==L?(y=()=>{r&&r({fromIndex:H,gap:E[I],itemHeight:F,scrollHeight:A,scrollTop:_,toIndex:L})},v=[H,I,F,r,A,_,E,L],j[16]=H,j[17]=I,j[18]=F,j[19]=r,j[20]=A,j[21]=_,j[22]=E,j[23]=L,j[24]=v,j[25]=y):(v=j[24],y=j[25]),(0,l.useEffect)(y,v);e:{let e;if(!n||0===R.length){w=null;break e}if(-1===F){let e,t;let o=R[0];j[26]!==n||j[27]!==o?(e=n(o),j[26]=n,j[27]=o,j[28]=e):e=j[28],j[29]!==e?(t=[(0,i.jsx)(ro,{children:e},0)],j[29]=e,j[30]=t):t=j[30],w=t;break e}if(j[31]!==H||j[32]!==I||j[33]!==o||j[34]!==F||j[35]!==R||j[36]!==n||j[37]!==E||j[38]!==L){let t;j[40]!==H||j[41]!==I||j[42]!==o||j[43]!==F||j[44]!==n||j[45]!==E?(t=(e,t)=>{let r=H+t,a=n(e),l=o?o(e,r):r;return(0,i.jsx)(ro,{style:{top:r*(F+E[I])},children:a},l)},j[40]=H,j[41]=I,j[42]=o,j[43]=F,j[44]=n,j[45]=E,j[46]=t):t=j[46],e=R.slice(H,L).map(t),j[31]=H,j[32]=I,j[33]=o,j[34]=F,j[35]=R,j[36]=n,j[37]=E,j[38]=L,j[39]=e}else e=j[39];w=e}let D=w;return j[47]!==W?($={height:W},j[47]=W,j[48]=$):$=j[48],x=$,j[49]!==D||j[50]!==x?(k=(0,i.jsx)("div",{ref:N,style:x,children:D}),j[49]=D,j[50]=x,j[51]=k):k=j[51],j[52]!==C||j[53]!==d||j[54]!==k?(S=(0,i.jsx)(rt,{as:C,"data-ui":"VirtualList",...d,ref:z,children:k}),j[52]=C,j[53]=d,j[54]=k,j[55]=S):S=j[55],S});rr.displayName="ForwardRef(VirtualList)";let rn=[0,0,0,0],ri={top:["bottom","left","right"],"top-start":["bottom-start","left-start","right-start"],"top-end":["bottom-end","left-end","right-end"],bottom:["top","left","right"],"bottom-start":["top-start","left-start","right-start"],"bottom-end":["top-end","left-end","right-end"],left:["right","top","bottom"],"left-start":["right-start","top-start","bottom-start"],"left-end":["right-end","top-end","bottom-end"],right:["left","top","bottom"],"right-start":["left-start","top-start","bottom-start"],"right-end":["left-end","top-end","bottom-end"]},ra=(0,s.I4)(h.P.create(or)).withConfig({displayName:"MotionCard",componentId:"sc-ihg31s-0"})`&:not([hidden]){display:flex;}flex-direction:column;width:max-content;min-width:min-content;& > *{opacity:var(${$},1);will-change:opacity;}`,rl=(0,l.memo)((0,l.forwardRef)(function(e,t){let o,r,n,l,d,s,c,u,f,p,h,m,g,b,v,y,w,x,$,S,j,C,I,R,E,z,N,_,T,A,M,F;let O=(0,a.c)(60);O[0]!==e?({__unstable_margins:c,animate:o,arrow:r,arrowRef:n,arrowX:l,arrowY:d,children:s,padding:h,placement:m,originX:u,originY:f,overflow:p,radius:g,scheme:v,shadow:y,strategy:w,style:x,tone:$,width:S,x:j,y:C,...b}=e,O[0]=e,O[1]=o,O[2]=r,O[3]=n,O[4]=l,O[5]=d,O[6]=s,O[7]=c,O[8]=u,O[9]=f,O[10]=p,O[11]=h,O[12]=m,O[13]=g,O[14]=b,O[15]=v,O[16]=y,O[17]=w,O[18]=x,O[19]=$,O[20]=S,O[21]=j,O[22]=C):(o=O[1],r=O[2],n=O[3],l=O[4],d=O[5],s=O[6],c=O[7],u=O[8],f=O[9],p=O[10],h=O[11],m=O[12],g=O[13],b=O[14],v=O[15],y=O[16],w=O[17],x=O[18],$=O[19],S=O[20],j=O[21],C=O[22]);let{zIndex:B}=oW(),W=(j??0)+(I=c||rn)[3],H=(C??0)+I[0],L=o?"transform":void 0;O[23]!==u||O[24]!==f||O[25]!==w||O[26]!==x||O[27]!==L||O[28]!==S||O[29]!==W||O[30]!==H||O[31]!==B?(E={left:W,originX:u,originY:f,position:w,top:H,width:S,zIndex:B,willChange:L,...x},O[23]=u,O[24]=f,O[25]=w,O[26]=x,O[27]=L,O[28]=S,O[29]=W,O[30]=H,O[31]=B,O[32]=E):E=O[32],R=E;let D=null!==l?l:void 0,P=null!==d?d:void 0;O[33]!==D||O[34]!==P?(N={left:D,top:P,right:void 0,bottom:void 0},O[33]=D,O[34]=P,O[35]=N):N=O[35],z=N;let J=b;return O[36]!==o?(_=o?k:{},O[36]=o,O[37]=_):_=O[37],O[38]!==s||O[39]!==h?(T=(0,i.jsx)(t3,{direction:"column",flex:1,padding:h,children:s}),O[38]=s,O[39]=h,O[40]=T):T=O[40],O[41]!==p||O[42]!==T?(A=(0,i.jsx)(t3,{"data-ui":"Popover__wrapper",direction:"column",flex:1,overflow:p,children:T}),O[41]=p,O[42]=T,O[43]=A):A=O[43],O[44]!==r||O[45]!==n||O[46]!==z?(M=r&&(0,i.jsx)(oE,{ref:n,style:z,width:19,height:8,radius:2}),O[44]=r,O[45]=n,O[46]=z,O[47]=M):M=O[47],O[48]!==m||O[49]!==g||O[50]!==t||O[51]!==R||O[52]!==v||O[53]!==y||O[54]!==A||O[55]!==M||O[56]!==J||O[57]!==_||O[58]!==$?(F=(0,i.jsxs)(ra,{"data-ui":"Popover",...J,"data-placement":m,radius:g,ref:t,scheme:v,shadow:y,sizing:"border",style:R,tone:$,..._,children:[A,M]}),O[48]=m,O[49]=g,O[50]=t,O[51]=R,O[52]=v,O[53]=y,O[54]=A,O[55]=M,O[56]=J,O[57]=_,O[58]=$,O[59]=F):F=O[59],F}));rl.displayName="Memo(ForwardRef(PopoverCard))";let rd=(0,l.memo)((0,l.forwardRef)(function(e,t){let{container:o,layer:r}=eF(),n=oA(),{__unstable_margins:a=rn,animate:d=!1,arrow:s=!1,boundaryElement:c=n.element,children:u,constrainSize:h=!1,content:g,disabled:b,fallbackPlacements:v=e.fallbackPlacements??ri[e.placement??"bottom"],matchReferenceWidth:y,floatingBoundary:w=e.boundaryElement??n.element,onActivate:x,open:$,overflow:k="hidden",padding:S,placement:j="bottom",portal:C,preventOverflow:I=!0,radius:R=3,referenceBoundary:E=e.boundaryElement??n.element,referenceElement:N,scheme:_,shadow:T=3,tone:A="inherit",width:M="auto",zOffset:F=r.popover.zOffset,updateRef:O,...B}=e,W=!eL()&&d,H=ej(c)?.border,L=z(S),D=z(R),P=z(T),J=z(M),V=z(F),q=(0,l.useRef)(null),G=(0,l.useRef)(null),X="viewport";(0,l.useImperativeHandle)(t,()=>q.current);let U=eB(),Y=h||I?H?.width:void 0,K=function(e){let{container:t,mediaIndex:o,width:r}=e,n=r[o],i=void 0===n?r[r.length-1]:n;return"number"==typeof i?t[i]:void 0}({container:o,mediaIndex:U,width:J}),Z=(0,l.useRef)(K);(0,l.useEffect)(()=>{Z.current=K},[K]);let Q=function(e){let{boundaryWidth:t,currentWidth:o}=e;if(!(void 0===o&&void 0===t))return Math.min(o??1/0,(t||1/0)-8)}({boundaryWidth:Y,currentWidth:K}),ee=(0,l.useRef)(Q);(0,l.useEffect)(()=>{ee.current=Q},[Q]);let et=(0,l.useRef)(void 0);(0,l.useEffect)(()=>{let e=q.current;if(!$||!e)return;let t=et.current;y?void 0!==t&&(e.style.width=`${t}px`):void 0!==K&&(e.style.width=`${K}px`),"number"==typeof Q&&(e.style.maxWidth=`${Q}px`)},[K,y,Q,$]);let eo=(0,l.useMemo)(()=>{let e=[];return(h||I)&&e.push((0,p.UU)({boundary:w||void 0,fallbackPlacements:v,padding:4,rootBoundary:X})),e.push((0,p.cY)({mainAxis:4})),(h||y)&&e.push(function(e){let{apply:t,margins:o,padding:r=0}=e;return{name:"@sanity/ui/size",async fn(n){let{elements:i,placement:a,platform:l,rects:d}=n,{floating:s,reference:c}=d,u=await (0,f.__)(n,{altBoundary:!0,boundary:e.boundaryElement||void 0,elementContext:"floating",padding:r,rootBoundary:"viewport"}),p=1/0,h=1/0,m=s.width,g=s.height;a.includes("top")&&(p=m-(u.left+u.right),h=g-u.top),a.includes("right")&&(p=m-u.right,h=g-(u.top+u.bottom)),a.includes("bottom")&&(p=m-(u.left+u.right),h=g-u.bottom),a.includes("left")&&(p=m-u.left,h=g-(u.top+u.bottom)),t({availableWidth:p-o[1]-o[3],availableHeight:h-o[0]-o[2],elements:i,referenceWidth:c.width-o[1]-o[3]});let b=await l.getDimensions(i.floating),v=b.height;return m!==b.width||g!==v?{reset:{rects:!0}}:{}}}}({apply({availableWidth:e,availableHeight:t,elements:o,referenceWidth:r}){et.current=r;let n=Z.current,i=ee.current;y?o.floating.style.width=`${r}px`:void 0!==n&&(o.floating.style.width=`${n}px`),h&&(o.floating.style.maxWidth=`${Math.min(e,i??1/0)}px`,o.floating.style.maxHeight=`${t}px`)},boundaryElement:w||void 0,constrainSize:h,margins:a,matchReferenceWidth:y,padding:4})),I&&e.push((0,p.BN)({boundary:w||void 0,rootBoundary:X,padding:4})),s&&e.push((0,p.UE)({element:G,padding:4})),W&&e.push(o$),e.push((0,p.jD)({boundary:E||void 0,padding:4,strategy:"referenceHidden"})),e},[W,s,h,v,w,a,y,I,E]),{x:er,y:en,middlewareData:ei,placement:ea,refs:el,strategy:ed,update:es}=(0,p.we)({middleware:eo,placement:j,whileElementsMounted:f.ll,elements:N?{reference:N}:void 0}),ec=ei.hide?.referenceHidden,eu=ei.arrow?.x,ef=ei.arrow?.y,ep=ei["@sanity/ui/origin"]?.originX,eh=ei["@sanity/ui/origin"]?.originY,em=(0,l.useCallback)(e=>{G.current=e},[]),eg=(0,l.useCallback)(e=>{q.current=e,el.setFloating(e)},[el]),eb=(0,l.useCallback)(e=>{let t,o;el.setReference(e);let r=(t=Object.getOwnPropertyDescriptor(u.props,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?u.ref:(t=Object.getOwnPropertyDescriptor(u,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?u.props.ref:u.props.ref||u.ref;"function"==typeof r?r(e):r&&(r.current=e)},[u,el]),ev=(0,l.useMemo)(()=>N?u:u?(0,l.cloneElement)(u,{ref:eb}):null,[u,N,eb]);if((0,l.useEffect)(()=>{O&&("function"==typeof O?O(es):O&&(O.current=es))},[es,O]),b)return u||(0,i.jsx)(i.Fragment,{});let ey=(0,i.jsx)(oU,{zOffset:V,children:(0,i.jsx)(rl,{...B,__unstable_margins:a,animate:W,arrow:s,arrowRef:em,arrowX:eu,arrowY:ef,hidden:ec,overflow:k,padding:L,placement:ea,radius:D,ref:eg,scheme:_,shadow:P,originX:ep,originY:eh,strategy:ed,tone:A,width:y?et.current:K,x:er,y:en,children:g})}),ew=$&&(C?(0,i.jsx)(o5,{__unstable_name:"string"==typeof C?C:void 0,children:ey}):ey);return(0,i.jsxs)(i.Fragment,{children:[W?(0,i.jsx)(m.N,{children:ew}):ew,ev]})}));rd.displayName="Memo(ForwardRef(Popover))";let rs=s.I4.div.withConfig({displayName:"StyledRadio",componentId:"sc-ccrwkf-0"})(function(){return(0,s.AH)`
    position: relative;

    &:not([hidden]) {
      display: inline-block;
    }

    &[data-read-only] {
      outline: 1px solid red;
    }
  `}),rc=s.I4.input.withConfig({displayName:"Input",componentId:"sc-ccrwkf-1"})(function(e){let{color:t,input:o}=(0,n.JW)(e.theme),r=(o.radio.size-o.radio.markSize)/2;return(0,s.AH)`
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    z-index: 1;
    padding: 0;
    margin: 0;
    border-radius: ${S(o.radio.size/2)};
    border: none;

    /* enabled */
    & + span {
      display: block;
      position: relative;
      height: ${S(o.radio.size)};
      width: ${S(o.radio.size)};
      border-radius: ${S(o.radio.size/2)};
      background: ${t.input.default.enabled.bg};
      box-shadow: ${te({color:t.input.default.enabled.border,width:o.border.width})};

      &::after {
        content: '';
        position: absolute;
        top: ${S(r)};
        left: ${S(r)};
        height: ${S(o.radio.markSize)};
        width: ${S(o.radio.markSize)};
        border-radius: ${S(o.radio.markSize/2)};
        background: ${t.input.default.enabled.fg};
        opacity: 0;
      }
    }

    /* focused */
    &:not(:disabled):focus + span {
      box-shadow: ${tt({border:{width:o.border.width,color:t.input.default.enabled.border},focusRing:o.radio.focusRing})};
    }

    &:not(:disabled):focus:not(:focus-visible) + span {
      box-shadow: ${te({color:t.input.default.enabled.border,width:o.border.width})};
    }

    &:checked + span::after {
      opacity: 1;
    }

    /* customValidity */
    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${te({width:o.border.width,color:t.input.invalid.enabled.muted.bg})};
      &::after {
        background: ${t.input.invalid.enabled.muted.bg};
      }
    }

    /* read only */
    &[data-read-only] + span {
      box-shadow: 0 0 0 1px ${t.input.default.readOnly.border};
      background: ${t.input.default.readOnly.bg};

      &::after {
        background: ${t.input.default.readOnly.border};
      }
    }

    /* disabled */
    &:not([data-read-only]):disabled + span {
      box-shadow: 0 0 0 1px ${t.input.default.disabled.border};
      background: ${t.input.default.disabled.bg};

      &::after {
        background: ${t.input.default.disabled.border};
      }
    }
  `}),ru=(0,l.forwardRef)(function(e,t){let o,r,n,d,s,c,u,f,p,h;let m=(0,a.c)(19);m[0]!==e?({className:o,disabled:n,style:c,customValidity:r,readOnly:d,...s}=e,m[0]=e,m[1]=o,m[2]=r,m[3]=n,m[4]=d,m[5]=s,m[6]=c):(o=m[1],r=m[2],n=m[3],d=m[4],s=m[5],c=m[6]);let g=(0,l.useRef)(null);m[7]===Symbol.for("react.memo_cache_sentinel")?(u=()=>g.current,m[7]=u):u=m[7],(0,l.useImperativeHandle)(t,u),T(g,r);let b=!n&&d?"":void 0,v=r?"":void 0,y=n||d;return m[8]!==d||m[9]!==s||m[10]!==b||m[11]!==v||m[12]!==y?(f=(0,i.jsx)(rc,{"data-read-only":b,"data-error":v,...s,disabled:y,readOnly:d,ref:g,type:"radio"}),m[8]=d,m[9]=s,m[10]=b,m[11]=v,m[12]=y,m[13]=f):f=m[13],m[14]===Symbol.for("react.memo_cache_sentinel")?(p=(0,i.jsx)("span",{}),m[14]=p):p=m[14],m[15]!==o||m[16]!==c||m[17]!==f?(h=(0,i.jsxs)(rs,{className:o,"data-ui":"Radio",style:c,children:[f,p]}),m[15]=o,m[16]=c,m[17]=f,m[18]=h):h=m[18],h});function rf(e){let{font:t}=(0,n.JW)(e.theme);return(0,s.AH)`
    -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0;
    font-family: ${t.text.family};
    color: inherit;
    width: 100%;
    outline: none;
    margin: 0;

    &:disabled {
      opacity: 1;
    }
  `}function rp(e){let{color:t,input:o}=(0,n.JW)(e.theme);return(0,s.AH)`
    /* enabled */
    background-color: ${t.input.default.enabled.bg};
    color: ${t.input.default.enabled.fg};
    box-shadow: ${te({color:t.input.default.enabled.border,width:o.border.width})};

    /* hovered */
    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: ${t.input.default.hovered.bg};
        color: ${t.input.default.hovered.fg};
        box-shadow: ${te({color:t.input.default.hovered.border,width:o.border.width})};
      }
    }

    /* focused */
    &:not(:disabled):focus {
      box-shadow: ${tt({border:{width:o.border.width,color:t.input.default.enabled.border},focusRing:o.select.focusRing})};
    }

    /* read-only */
    &[data-read-only] {
      background-color: ${t.input.default.readOnly.bg};
      color: ${t.input.default.readOnly.fg};
      box-shadow: ${te({color:t.input.default.readOnly.border,width:o.border.width})};
    }

    /* disabled */
    &:not([data-read-only]):disabled {
      background-color: ${t.input.default.disabled.bg};
      color: ${t.input.default.disabled.fg};
      box-shadow: ${te({color:t.input.default.disabled.border,width:o.border.width})};
    }
  `}function rh(e){let{$fontSize:t}=e,{font:o,media:r}=(0,n.JW)(e.theme);return j(r,t,e=>{var t;return{fontSize:S((t=o.text.sizes[e]||o.text.sizes[2]).fontSize),lineHeight:S(t.lineHeight)}})}ru.displayName="ForwardRef(Radio)";let rm={root:function(){return(0,s.AH)`
    position: relative;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;

    &:not([hidden]) {
      display: inline-block;
    }
  `},input:function(){return[tE,rf,rp,rh,t$]},iconBox:function(e){let{color:t}=(0,n.JW)(e.theme);return(0,s.AH)`
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;

    /* enabled */
    --card-fg-color: ${t.input.default.enabled.fg};

    /* hover */
    @media (hover: hover) {
      select:not(disabled):not(:read-only):hover + && {
        --card-fg-color: ${t.input.default.hovered.fg};
      }
    }

    /* disabled */
    select:disabled + && {
      --card-fg-color: ${t.input.default.disabled.fg};
    }

    /* read-only */
    select[data-read-only] + && {
      --card-fg-color: ${t.input.default.readOnly.fg};
    }
  `}},rg=s.I4.div.withConfig({displayName:"StyledSelect",componentId:"sc-5mxno7-0"})(rm.root),rb=s.I4.select.withConfig({displayName:"Input",componentId:"sc-5mxno7-1"})(rm.input),rv=(0,s.I4)(tK).withConfig({displayName:"IconBox",componentId:"sc-5mxno7-2"})(rm.iconBox),ry=(0,l.forwardRef)(function(e,t){let o,r,n,d,s,u,f,p,h,m,g,b,v,y,w;let x=(0,a.c)(29);x[0]!==e?({children:o,customValidity:r,disabled:n,fontSize:u,padding:f,radius:p,readOnly:d,space:h,...s}=e,x[0]=e,x[1]=o,x[2]=r,x[3]=n,x[4]=d,x[5]=s,x[6]=u,x[7]=f,x[8]=p,x[9]=h):(o=x[1],r=x[2],n=x[3],d=x[4],s=x[5],u=x[6],f=x[7],p=x[8],h=x[9]);let $=void 0===u?2:u,k=void 0===f?3:f,S=void 0===p?2:p,j=void 0===h?3:h,C=(0,l.useRef)(null);x[10]===Symbol.for("react.memo_cache_sentinel")?(m=()=>C.current,x[10]=m):m=x[10],(0,l.useImperativeHandle)(t,m),T(C,r);let I=!n&&d?"":void 0,R=z($),E=z(k),N=z(S),_=z(j),A=n||d;return x[11]!==o||x[12]!==s||x[13]!==A||x[14]!==I||x[15]!==R||x[16]!==E||x[17]!==N||x[18]!==_?(g=(0,i.jsx)(rb,{"data-read-only":I,"data-ui":"Select",...s,$fontSize:R,$padding:E,$radius:N,$space:_,disabled:A,ref:C,children:o}),x[11]=o,x[12]=s,x[13]=A,x[14]=I,x[15]=R,x[16]=E,x[17]=N,x[18]=_,x[19]=g):g=x[19],x[20]===Symbol.for("react.memo_cache_sentinel")?(b=(0,i.jsx)(c.D3D,{}),x[20]=b):b=x[20],x[21]!==$?(v=(0,i.jsx)(tQ,{size:$,children:b}),x[21]=$,x[22]=v):v=x[22],x[23]!==k||x[24]!==v?(y=(0,i.jsx)(rv,{padding:k,children:v}),x[23]=k,x[24]=v,x[25]=y):y=x[25],x[26]!==g||x[27]!==y?(w=(0,i.jsxs)(rg,{"data-ui":"Select",children:[g,y]}),x[26]=g,x[27]=y,x[28]=w):w=x[28],w});ry.displayName="ForwardRef(Select)";let rw={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"},gridTemplateColumns:"minmax(0, 1fr)",gridAutoRows:"min-content"},rx=(0,s.I4)(tK).withConfig({displayName:"StyledStack",componentId:"sc-8dpfq2-0"})(function(){return rw},function(e){let{media:t,space:o}=(0,n.JW)(e.theme);return j(t,e.$space,e=>({gridGap:S(o[e])}))}),r$=(0,l.forwardRef)(function(e,t){let o,r,n,l;let d=(0,a.c)(10);d[0]!==e?({as:o,space:n,...r}=e,d[0]=e,d[1]=o,d[2]=r,d[3]=n):(o=d[1],r=d[2],n=d[3]);let s="string"==typeof o?o:void 0,c=z(n);return d[4]!==o||d[5]!==t||d[6]!==r||d[7]!==s||d[8]!==c?(l=(0,i.jsx)(rx,{"data-as":s,"data-ui":"Stack",...r,$space:c,forwardedAs:o,ref:t}),d[4]=o,d[5]=t,d[6]=r,d[7]=s,d[8]=c,d[9]=l):l=d[9],l});r$.displayName="ForwardRef(Stack)";let rk=s.I4.span.withConfig({displayName:"StyledSwitch",componentId:"sc-dw1foe-0"})(function(){return(0,s.AH)`
    position: relative;
    &:not([hidden]) {
      display: inline-block;
    }
  `}),rS=s.I4.input.withConfig({displayName:"Input",componentId:"sc-dw1foe-1"})(function(){return(0,s.AH)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0;
    margin: 0;

    /* Place the input element above the representation element */
    z-index: 1;
  `}),rj=s.I4.span.withConfig({displayName:"Representation",componentId:"sc-dw1foe-2"})(function(e){let{color:t,input:o}=(0,n.JW)(e.theme);return(0,s.AH)`
    --switch-bg-color: ${t.input.default.enabled.border};
    --switch-fg-color: ${t.input.default.enabled.bg};
    --switch-box-shadow: none;

    &:not([hidden]) {
      display: block;
    }
    position: relative;
    width: ${S(o.switch.width)};
    height: ${S(o.switch.height)};
    border-radius: ${S(o.switch.height/2)};

    /* Make sure it’s not possible to interact with the wrapper element */
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      box-shadow: var(--switch-box-shadow);
      border-radius: inherit;
    }

    /* Focus styles */
    input:focus + && {
      --switch-box-shadow: ${tt({focusRing:o.switch.focusRing})};
    }

    input:focus:not(:focus-visible) + && {
      --switch-box-shadow: none;
    }

    input:checked + && {
      --switch-bg-color: ${t.input.default.enabled.fg};
      --switch-fg-color: ${t.input.default.enabled.bg};
    }

    @media (hover: hover) {
      input:not(:disabled):hover + && {
        --switch-bg-color: ${t.input.default.hovered.border};
        --switch-fg-color: ${t.input.default.hovered.bg};
      }

      input:not(:disabled):checked:hover + && {
        --switch-bg-color: ${t.input.default.enabled.fg};
        --switch-fg-color: ${t.input.default.enabled.bg};
      }
    }

    input:not([data-read-only]):disabled + && {
      --switch-bg-color: ${t.input.default.disabled.border};
      --switch-fg-color: ${t.input.default.disabled.bg};
    }

    input[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.border};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }

    input:checked[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.fg};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }
  `}),rC=s.I4.span.withConfig({displayName:"Track",componentId:"sc-dw1foe-3"})(function(e){let{input:t}=(0,n.JW)(e.theme);return(0,s.AH)`
    &:not([hidden]) {
      display: block;
    }
    background-color: var(--switch-bg-color);
    position: absolute;
    left: 0;
    top: 0;
    width: ${S(t.switch.width)};
    height: ${S(t.switch.height)};
    border-radius: ${S(t.switch.height/2)};
  `}),rI=s.I4.span.withConfig({displayName:"Thumb",componentId:"sc-dw1foe-4"})(function(e){let{$indeterminate:t}=e,{input:o}=(0,n.JW)(e.theme),r=o.switch.width,i=o.switch.height,a=o.switch.padding,l=i-2*o.switch.padding,d=r-2*a-l,c=r/2-l/2-a,u=!0!==t&&!0===e.$checked;return(0,s.AH)`
    &:not([hidden]) {
      display: block;
    }
    position: absolute;
    left: ${S(a)};
    top: ${S(a)};
    height: ${S(l)};
    width: ${S(l)};
    border-radius: ${S(l/2)};
    transition-property: transform;
    transition-duration: ${o.switch.transitionDurationMs}ms;
    transition-timing-function: ${o.switch.transitionTimingFunction};
    background: var(--switch-fg-color);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

    ${u&&(0,s.AH)`
      transform: translate3d(${d}px, 0, 0);
    `}

    ${t&&(0,s.AH)`
      transform: translate3d(${c}px, 0, 0);
    `}
  `}),rR=(0,l.forwardRef)(function(e,t){let o,r,n,d,s,c,u,f,p,h,m,g,b,v;let y=(0,a.c)(26);y[0]!==e?({checked:o,className:r,disabled:n,indeterminate:d,readOnly:s,style:u,...c}=e,y[0]=e,y[1]=o,y[2]=r,y[3]=n,y[4]=d,y[5]=s,y[6]=c,y[7]=u):(o=y[1],r=y[2],n=y[3],d=y[4],s=y[5],c=y[6],u=y[7]);let w=(0,l.useRef)(null);y[8]===Symbol.for("react.memo_cache_sentinel")?(f=()=>w.current,y[8]=f):f=y[8],(0,l.useImperativeHandle)(t,f),y[9]!==d?(p=()=>{w.current&&(w.current.indeterminate=d||!1)},h=[d],y[9]=d,y[10]=p,y[11]=h):(p=y[10],h=y[11]),(0,l.useEffect)(p,h);let x=!n&&s?"":void 0,$=!0!==d&&o,k=n||s;return y[12]!==c||y[13]!==x||y[14]!==$||y[15]!==k?(m=(0,i.jsx)(rS,{"data-read-only":x,...c,checked:$,disabled:k,type:"checkbox",ref:w}),y[12]=c,y[13]=x,y[14]=$,y[15]=k,y[16]=m):m=y[16],y[17]===Symbol.for("react.memo_cache_sentinel")?(g=(0,i.jsx)(rC,{}),y[17]=g):g=y[17],y[18]!==o||y[19]!==d?(b=(0,i.jsxs)(rj,{"aria-hidden":!0,"data-name":"representation",children:[g,(0,i.jsx)(rI,{$checked:o,$indeterminate:d})]}),y[18]=o,y[19]=d,y[20]=b):b=y[20],y[21]!==r||y[22]!==u||y[23]!==m||y[24]!==b?(v=(0,i.jsxs)(rk,{className:r,"data-ui":"Switch",style:u,children:[m,b]}),y[21]=r,y[22]=u,y[23]=m,y[24]=b,y[25]=v):v=y[25],v});rR.displayName="ForwardRef(Switch)";let rE=s.I4.span.withConfig({displayName:"StyledTextArea",componentId:"sc-1d6h1o8-0"})(tS),rz=s.I4.span.withConfig({displayName:"InputRoot",componentId:"sc-1d6h1o8-1"})`flex:1;min-width:0;display:block;position:relative;`,rN=s.I4.textarea.withConfig({displayName:"Input",componentId:"sc-1d6h1o8-2"})(tx,tj,tC),r_=s.I4.div.withConfig({displayName:"Presentation",componentId:"sc-1d6h1o8-3"})(tE,tI),rT=(0,l.forwardRef)(function(e,t){let o,r,n,d,s,c,u,f,p,h,m,g,b;let v=(0,a.c)(29);v[0]!==e?({border:d,customValidity:r,disabled:s,fontSize:c,padding:u,radius:f,weight:p,__unstable_disableFocusRing:o,...n}=e,v[0]=e,v[1]=o,v[2]=r,v[3]=n,v[4]=d,v[5]=s,v[6]=c,v[7]=u,v[8]=f,v[9]=p):(o=v[1],r=v[2],n=v[3],d=v[4],s=v[5],c=v[6],u=v[7],f=v[8],p=v[9]);let y=void 0===d||d,w=void 0!==s&&s,x=void 0===c?2:c,$=void 0===u?3:u,k=void 0===f?2:f,S=(0,l.useRef)(null),j=eT();v[10]===Symbol.for("react.memo_cache_sentinel")?(h=()=>S.current,v[10]=h):h=v[10],(0,l.useImperativeHandle)(t,h),T(S,r);let C=j.scheme,I=j.tone,R=z(x),E=z($),N=j.scheme,_=z(0);v[11]!==w||v[12]!==n||v[13]!==j.scheme||v[14]!==j.tone||v[15]!==_||v[16]!==R||v[17]!==E||v[18]!==p?(m=(0,i.jsx)(rN,{"data-as":"textarea","data-scheme":C,"data-tone":I,...n,$fontSize:R,$padding:E,$scheme:N,$space:_,$tone:j.tone,$weight:p,disabled:w,ref:S}),v[11]=w,v[12]=n,v[13]=j.scheme,v[14]=j.tone,v[15]=_,v[16]=R,v[17]=E,v[18]=p,v[19]=m):m=v[19];let A=z(k),M=y?"":void 0;return v[20]!==o||v[21]!==j.scheme||v[22]!==j.tone||v[23]!==A||v[24]!==M?(g=(0,i.jsx)(r_,{$radius:A,$unstableDisableFocusRing:o,$scheme:j.scheme,$tone:j.tone,"data-border":M,"data-scheme":j.scheme,"data-tone":j.tone}),v[20]=o,v[21]=j.scheme,v[22]=j.tone,v[23]=A,v[24]=M,v[25]=g):g=v[25],v[26]!==m||v[27]!==g?(b=(0,i.jsx)(rE,{"data-ui":"TextArea",children:(0,i.jsxs)(rz,{children:[m,g]})}),v[26]=m,v[27]=g,v[28]=b):b=v[28],b});rT.displayName="ForwardRef(TextArea)";let rA={zIndex:2},rM=(0,s.I4)(or).attrs({forwardedAs:"span"}).withConfig({displayName:"StyledTextInput",componentId:"sc-h62wco-0"})(tS),rF=s.I4.span.withConfig({displayName:"InputRoot",componentId:"sc-h62wco-1"})`flex:1;min-width:0;display:block;position:relative;`,rO=(0,s.I4)(or).attrs({forwardedAs:"span"}).withConfig({displayName:"Prefix",componentId:"sc-h62wco-2"})`border-top-right-radius:0;border-bottom-right-radius:0;& > span{display:block;margin:-1px;}`,rB=(0,s.I4)(or).attrs({forwardedAs:"span"}).withConfig({displayName:"Suffix",componentId:"sc-h62wco-3"})`border-top-left-radius:0;border-bottom-left-radius:0;& > span{display:block;margin:-1px;}`,rW=s.I4.input.withConfig({displayName:"Input",componentId:"sc-h62wco-4"})(tx,tj,tC),rH=s.I4.span.withConfig({displayName:"Presentation",componentId:"sc-h62wco-5"})(tE,tI),rL=(0,s.I4)(tK).withConfig({displayName:"LeftBox",componentId:"sc-h62wco-6"})`position:absolute;top:0;left:0;`,rD=(0,s.I4)(tK).withConfig({displayName:"RightBox",componentId:"sc-h62wco-7"})`position:absolute;top:0;right:0;`,rP=(0,s.I4)(or).withConfig({displayName:"RightCard",componentId:"sc-h62wco-8"})`background-color:transparent;position:absolute;top:0;right:0;`,rJ=(0,s.I4)(ot).withConfig({displayName:"TextInputClearButton",componentId:"sc-h62wco-9"})({"&:not([hidden])":{display:"block"}}),rV=(0,l.forwardRef)(function(e,t){let o,r,n,s,u,f,p,h,m,g,b,v,y,w,$,k,S,j,C,I,R,E,N,_,A,M,F,O,B,W,H,L,D,P,J,V,q,G;let X=(0,a.c)(84);X[0]!==e?({__unstable_disableFocusRing:n,border:b,clearButton:s,disabled:v,fontSize:y,icon:o,iconRight:r,onClear:f,padding:w,prefix:p,radius:$,readOnly:h,space:k,suffix:g,customValidity:u,type:S,weight:j,...m}=e,X[0]=e,X[1]=o,X[2]=r,X[3]=n,X[4]=s,X[5]=u,X[6]=f,X[7]=p,X[8]=h,X[9]=m,X[10]=g,X[11]=b,X[12]=v,X[13]=y,X[14]=w,X[15]=$,X[16]=k,X[17]=S,X[18]=j):(o=X[1],r=X[2],n=X[3],s=X[4],u=X[5],f=X[6],p=X[7],h=X[8],m=X[9],g=X[10],b=X[11],v=X[12],y=X[13],w=X[14],$=X[15],k=X[16],S=X[17],j=X[18]);let U=void 0===b||b,Y=void 0!==v&&v,K=void 0===y?2:y,Z=void 0===w?3:w,Q=void 0===$?2:$,ee=void 0===k?3:k,et=void 0===S?"text":S,eo=(0,l.useRef)(null),er=eT(),en=z(K),ei=z(Z),ea=z(Q),el=z(ee),ed=!!s,es=!!o,ec=!!r,eu=!!g,ef=!!p;X[19]===Symbol.for("react.memo_cache_sentinel")?(C=()=>eo.current,X[19]=C):C=X[19],(0,l.useImperativeHandle)(t,C),T(eo,u),X[20]!==f?(I=e=>{e.preventDefault(),e.stopPropagation(),f&&f(),eo.current?.focus()},X[20]=f,X[21]=I):I=X[21];let ep=I;X[22]!==p||X[23]!==ea?(E=p&&(0,i.jsx)(rO,{borderTop:!0,borderLeft:!0,borderBottom:!0,radius:ea,sizing:"border",tone:"inherit",children:(0,i.jsx)("span",{children:p})}),X[22]=p,X[23]=ea,X[24]=E):E=X[24],R=E;let eh=U?"":void 0;X[25]!==o||X[26]!==en||X[27]!==ei?(_=o&&(0,i.jsx)(rL,{padding:ei,children:(0,i.jsxs)(tQ,{size:en,children:[(0,l.isValidElement)(o)&&o,(0,d.isValidElementType)(o)&&(0,i.jsx)(o,{})]})}),X[25]=o,X[26]=en,X[27]=ei,X[28]=_):_=X[28],X[29]!==ed||X[30]!==r||X[31]!==en||X[32]!==ei?(A=!ed&&r&&(0,i.jsx)(rD,{padding:ei,children:(0,i.jsxs)(tQ,{size:en,children:[(0,l.isValidElement)(r)&&r,(0,d.isValidElementType)(r)&&(0,i.jsx)(r,{})]})}),X[29]=ed,X[30]=r,X[31]=en,X[32]=ei,X[33]=A):A=X[33],X[34]!==ef||X[35]!==eu||X[36]!==n||X[37]!==ea||X[38]!==er.scheme||X[39]!==er.tone||X[40]!==eh||X[41]!==_||X[42]!==A?(M=(0,i.jsxs)(rH,{$hasPrefix:ef,$unstableDisableFocusRing:n,$hasSuffix:eu,$radius:ea,$scheme:er.scheme,$tone:er.tone,"data-border":eh,"data-scheme":er.scheme,"data-tone":er.tone,children:[_,A]}),X[34]=ef,X[35]=eu,X[36]=n,X[37]=ea,X[38]=er.scheme,X[39]=er.tone,X[40]=eh,X[41]=_,X[42]=A,X[43]=M):M=X[43],N=M,X[44]!==ei?(O=ei.map(rG),X[44]=ei,X[45]=O):O=X[45],F=O,X[46]!==ei?(W=ei.map(rX),X[46]=ei,X[47]=W):W=X[47],B=W,H="object"==typeof s?s:x,X[48]!==s||X[49]!==F||X[50]!==B||X[51]!==H||X[52]!==u||X[53]!==Y||X[54]!==en||X[55]!==ep||X[56]!==ea||X[57]!==h?(D=!Y&&!h&&s&&(0,i.jsx)(rP,{forwardedAs:"span",padding:F,style:rA,tone:u?"critical":"inherit",children:(0,i.jsx)(rJ,{"aria-label":"Clear","data-qa":"clear-button",fontSize:en,icon:c.USm,mode:"bleed",padding:B,radius:ea,...H,onClick:ep,onMouseDown:rq})}),X[48]=s,X[49]=F,X[50]=B,X[51]=H,X[52]=u,X[53]=Y,X[54]=en,X[55]=ep,X[56]=ea,X[57]=h,X[58]=D):D=X[58],L=D,X[59]!==ea||X[60]!==g?(J=g&&(0,i.jsx)(rB,{borderTop:!0,borderRight:!0,borderBottom:!0,radius:ea,sizing:"border",tone:"inherit",children:(0,i.jsx)("span",{children:g})}),X[59]=ea,X[60]=g,X[61]=J):J=X[61],P=J;let em=ec||ed;return X[62]!==es||X[63]!==Y||X[64]!==en||X[65]!==ei||X[66]!==h||X[67]!==m||X[68]!==er.scheme||X[69]!==er.tone||X[70]!==el||X[71]!==em||X[72]!==et||X[73]!==j?(V=(0,i.jsx)(rW,{"data-as":"input","data-scheme":er.scheme,"data-tone":er.tone,...m,$fontSize:en,$iconLeft:es,$iconRight:em,$padding:ei,$scheme:er.scheme,$space:el,$tone:er.tone,$weight:j,disabled:Y,readOnly:h,ref:eo,type:et}),X[62]=es,X[63]=Y,X[64]=en,X[65]=ei,X[66]=h,X[67]=m,X[68]=er.scheme,X[69]=er.tone,X[70]=el,X[71]=em,X[72]=et,X[73]=j,X[74]=V):V=X[74],X[75]!==L||X[76]!==N||X[77]!==V?(q=(0,i.jsxs)(rF,{children:[V,N,L]}),X[75]=L,X[76]=N,X[77]=V,X[78]=q):q=X[78],X[79]!==R||X[80]!==er.tone||X[81]!==P||X[82]!==q?(G=(0,i.jsxs)(rM,{"data-ui":"TextInput",tone:er.tone,children:[R,q,P]}),X[79]=R,X[80]=er.tone,X[81]=P,X[82]=q,X[83]=G):G=X[83],G});function rq(e){e.preventDefault(),e.stopPropagation()}function rG(e){return 0===e?0:1===e||2===e?1:e-2}function rX(e){return 0===e||1===e?0:2===e?1:e-1}function rU(e){let t,o;let r=(0,a.c)(3),[n,i]=(0,l.useState)(e),d=(0,l.useRef)(void 0);r[0]===Symbol.for("react.memo_cache_sentinel")?(t=(e,t)=>{let o=()=>{i(e)};if(d.current&&(clearTimeout(d.current),d.current=void 0),!t)return o();d.current=setTimeout(o,t)},r[0]=t):t=r[0];let s=t;return r[1]!==n?(o=[n,s],r[1]=n,r[2]=o):o=r[2],o}rV.displayName="ForwardRef(TextInput)";let rY={top:["top-end","top-start","bottom","left","right"],"top-start":["top","top-end","bottom-start","left-start","right-start"],"top-end":["top","top-start","bottom-end","left-end","right-end"],bottom:["bottom-end","bottom-start","top","left","right"],"bottom-start":["bottom","bottom-end","top-start","left-start","right-start"],"bottom-end":["bottom","bottom-start","top-end","left-end","right-end"],left:["left-end","left-start","right","top","bottom"],"left-start":["left","left-end","right-start","top-start","bottom-start"],"left-end":["left","left-start","right-end","top-end","bottom-end"],right:["right-end","right-start","left","top","bottom"],"right-start":["right","right-end","left-start","top-start","bottom-start"],"right-end":["right","right-start","left-end","top-end","bottom-end"]},rK=(0,s.I4)(h.P.create(or)).withConfig({displayName:"MotionCard",componentId:"sc-1xn138w-0"})`& > *{opacity:var(${$},1);will-change:opacity;}`,rZ=(0,l.memo)((0,l.forwardRef)(function(e,t){let o,r,n,l,d,s,c,u,f,p,h,m,g,b,v,y,w,x,$,S,j,C;let I=(0,a.c)(42);I[0]!==e?({animate:o,arrow:r,arrowRef:n,arrowX:l,arrowY:d,children:s,originX:c,originY:u,padding:f,placement:p,radius:h,scheme:g,shadow:b,style:v,...m}=e,I[0]=e,I[1]=o,I[2]=r,I[3]=n,I[4]=l,I[5]=d,I[6]=s,I[7]=c,I[8]=u,I[9]=f,I[10]=p,I[11]=h,I[12]=m,I[13]=g,I[14]=b,I[15]=v):(o=I[1],r=I[2],n=I[3],l=I[4],d=I[5],s=I[6],c=I[7],u=I[8],f=I[9],p=I[10],h=I[11],m=I[12],g=I[13],b=I[14],v=I[15]);let R=o?"transform":void 0;I[16]!==c||I[17]!==u||I[18]!==v||I[19]!==R?(w={originX:c,originY:u,willChange:R,...v},I[16]=c,I[17]=u,I[18]=v,I[19]=R,I[20]=w):w=I[20],y=w;let E=null!==l?l:void 0,z=null!==d?d:void 0;I[21]!==E||I[22]!==z?($={left:E,top:z,right:void 0,bottom:void 0},I[21]=E,I[22]=z,I[23]=$):$=I[23],x=$;let N=m;return I[24]!==o?(S=o?k:{},I[24]=o,I[25]=S):S=I[25],I[26]!==r||I[27]!==n||I[28]!==x?(j=r&&(0,i.jsx)(oE,{ref:n,style:x,width:15,height:6,radius:2}),I[26]=r,I[27]=n,I[28]=x,I[29]=j):j=I[29],I[30]!==s||I[31]!==f||I[32]!==p||I[33]!==h||I[34]!==t||I[35]!==y||I[36]!==g||I[37]!==b||I[38]!==N||I[39]!==S||I[40]!==j?(C=(0,i.jsxs)(rK,{"data-ui":"Tooltip__card",...N,"data-placement":p,padding:f,radius:h,ref:t,scheme:g,shadow:b,style:y,...S,children:[s,j]}),I[30]=s,I[31]=f,I[32]=p,I[33]=h,I[34]=t,I[35]=y,I[36]=g,I[37]=b,I[38]=N,I[39]=S,I[40]=j,I[41]=C):C=I[41],C}));rZ.displayName="Memo(ForwardRef(TooltipCard))";let rQ=ez("@sanity/ui/context/tooltipDelayGroup",null);function r0(e){let t,o,r;let n=(0,a.c)(10),{children:l,delay:d}=e,[s,c]=rU(!1),[u,f]=rU(null),p="number"==typeof d?d:d?.open||0,h="number"==typeof d?d:d?.close||0,m=s?1:p;return n[0]!==h||n[1]!==s||n[2]!==u||n[3]!==c||n[4]!==f||n[5]!==m?(o={isGroupActive:s,setIsGroupActive:c,openTooltipId:u,setOpenTooltipId:f,openDelay:m,closeDelay:h},n[0]=h,n[1]=s,n[2]=u,n[3]=c,n[4]=f,n[5]=m,n[6]=o):o=n[6],t=o,n[7]!==l||n[8]!==t?(r=(0,i.jsx)(rQ.Provider,{value:t,children:l}),n[7]=l,n[8]=t,n[9]=r):r=n[9],r}r0.displayName="TooltipDelayGroupProvider";let r1=(0,s.I4)(o0).withConfig({displayName:"StyledTooltip",componentId:"sc-13f2zvh-0"})`pointer-events:none;`,r2=(0,l.forwardRef)(function(e,t){let o=oA(),{layer:r}=eF(),{animate:n=!1,arrow:d=!1,boundaryElement:s=o?.element,children:c,content:u,disabled:h,fallbackPlacements:g=e.fallbackPlacements??rY[e.placement??"bottom"],padding:v=2,placement:y="bottom",portal:w,radius:x=2,scheme:$,shadow:k=2,zOffset:S=r.tooltip.zOffset,delay:j,...C}=e,I=!eL()&&n,R=z(g),E=(0,l.useRef)(null),[N,_]=(0,l.useState)(null),T=(0,l.useRef)(null),A="viewport",[M,F]=(0,l.useState)(0);(0,l.useImperativeHandle)(t,()=>E.current);let O=o4(),B="string"==typeof w?O.elements?.[w]||null:O.element,W=(0,l.useMemo)(()=>{let e=[];return e.push((0,p.UU)({boundary:s||void 0,fallbackPlacements:R,padding:4,rootBoundary:A})),e.push((0,p.cY)({mainAxis:4})),e.push((0,p.BN)({boundary:s||void 0,rootBoundary:A,padding:4})),d&&e.push((0,p.UE)({element:T,padding:4})),I&&e.push(o$),e},[I,d,s,R]),{floatingStyles:H,placement:L,middlewareData:D,refs:P,update:J}=(0,p.we)({middleware:W,placement:y,whileElementsMounted:f.ll,elements:{reference:N}}),V=D.arrow?.x,q=D.arrow?.y,G=D["@sanity/ui/origin"]?.originX,X=D["@sanity/ui/origin"]?.originY,U=(0,l.useId)(),[Y,K]=rU(!1),Z=(0,l.useContext)(rQ),Q=Y||Z?.openTooltipId===U,ee=null!==Z,et="number"==typeof j?j:j?.open||0,eo="number"==typeof j?j:j?.close||0,er=ee?Z.openDelay:et,en=ee?Z.closeDelay:eo,ei=(0,l.useCallback)((e,t)=>{if(ee){if(e){let o=t?0:er;Z.setIsGroupActive(e,o),Z.setOpenTooltipId(U,o)}else{let o=en>200?en:200;Z.setIsGroupActive(e,o),Z.setOpenTooltipId(null,t?0:en)}}else K(e,t?0:e?er:en)},[ee,Z,er,U,en,K]),ea=(0,l.useCallback)(e=>{ei(!1),c?.props?.onBlur?.(e)},[c?.props,ei]),el=(0,l.useCallback)(e=>{ei(!1,!0),c?.props.onClick?.(e)},[c?.props,ei]),ed=(0,l.useCallback)(e=>{ei(!1,!0),c?.props.onContextMenu?.(e)},[c?.props,ei]),es=(0,l.useCallback)(e=>{ei(!0),c?.props?.onFocus?.(e)},[c?.props,ei]),ec=(0,l.useCallback)(e=>{ei(!0),c?.props?.onMouseEnter?.(e)},[c?.props,ei]),eu=(0,l.useCallback)(e=>{ei(!1),c?.props?.onMouseLeave?.(e)},[c?.props,ei]);(function(e){let t,o,r;let n=(0,a.c)(7),{handleIsOpenChange:i,referenceElement:d,showTooltip:s}=e;n[0]!==i||n[1]!==d?(t=(e,t)=>{d&&(d===e||e instanceof Node&&d.contains(e)||(i(!1),t()))},n[0]=i,n[1]=d,n[2]=t):t=n[2];let c=(0,b.J)(t);n[3]!==c||n[4]!==s?(o=()=>{if(!s)return;let e=t=>{c(t.target,()=>window.removeEventListener("mousemove",e))};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},r=[c,s],n[3]=c,n[4]=s,n[5]=o,n[6]=r):(o=n[5],r=n[6]),(0,l.useEffect)(o,r)})({handleIsOpenChange:ei,referenceElement:N,showTooltip:Q}),(0,l.useEffect)(()=>{h&&Q&&ei(!1)},[h,ei,Q]),(0,l.useEffect)(()=>{!u&&Q&&ei(!1)},[u,ei,Q]),(0,l.useEffect)(()=>{if(Q)return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)};function e(e){"Escape"===e.key&&ei(!1,!0)}},[ei,Q]),(0,l.useLayoutEffect)(()=>{F(Math.min(...s?[s.offsetWidth]:[],B?.offsetWidth||document.body.offsetWidth)-8)},[s,B]);let ef=(0,l.useCallback)(e=>{T.current=e,J()},[J]),ep=(0,l.useCallback)(e=>{E.current=e,P.setFloating(e)},[P]),eh=(0,l.useRef)(null);(0,l.useImperativeHandle)(c?.ref,()=>eh.current);let em=(0,l.useMemo)(()=>c?(0,l.cloneElement)(c,{onBlur:ea,onFocus:es,onMouseEnter:ec,onMouseLeave:eu,onClick:el,onContextMenu:ed,ref:eh}):null,[c,ea,el,ed,es,ec,eu]);if((0,l.useEffect)(()=>{if(em)return _(eh.current),()=>_(null)},[em]),!em)return(0,i.jsx)(i.Fragment,{});if(h)return em;let eg=(0,i.jsx)(r1,{"data-ui":"Tooltip",...C,ref:ep,style:{...H,maxWidth:M>0?`${M}px`:void 0},zOffset:S,children:(0,i.jsx)(rZ,{...C,animate:I,arrow:d,arrowRef:ef,arrowX:V,arrowY:q,originX:G,originY:X,padding:v,placement:L,radius:x,ref:ep,scheme:$,shadow:k,children:u})}),eb=Q&&(w?(0,i.jsx)(o5,{__unstable_name:"string"==typeof w?w:void 0,children:eg}):eg);return(0,i.jsxs)(i.Fragment,{children:[I?(0,i.jsx)(m.N,{children:eb}):eb,em]})});r2.displayName="ForwardRef(Tooltip)";let r3=s.I4.div.withConfig({displayName:"StyledAutocomplete",componentId:"sc-1igauft-0"})`line-height:0;`,r4=(0,s.I4)(tK).withConfig({displayName:"ListBox",componentId:"sc-1igauft-1"})`& > ul{list-style:none;padding:0;margin:0;}`,r5=(0,s.i7)`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,r6=(0,s.I4)(c.Nl1).withConfig({displayName:"AnimatedSpinnerIcon",componentId:"sc-1igauft-2"})`animation:${r5} 500ms linear infinite;`;function r7(e){let t,o,r;let n=(0,a.c)(11),{children:l,id:d,onSelect:s,selected:c,value:u}=e;n[0]!==s||n[1]!==u?(t=()=>{setTimeout(()=>{s(u)},0)},n[0]=s,n[1]=u,n[2]=t):t=n[2];let f=t;n[3]!==f?(o=e=>{var t;"Enter"!==e.key||oP(t=e.currentTarget)||oJ(t)||f()},n[3]=f,n[4]=o):o=n[4];let p=o;return n[5]!==l||n[6]!==f||n[7]!==p||n[8]!==d||n[9]!==c?(r=(0,i.jsx)("li",{"aria-selected":c,"data-ui":"AutocompleteOption",id:d,role:"option",onClick:f,onKeyDown:p,children:l}),n[5]=l,n[6]=f,n[7]=p,n[8]=d,n[9]=c,n[10]=r):r=n[10],r}function r8(e,t){return"input/change"===t.type?{...e,activeValue:null,focused:!0,query:t.query}:"input/focus"===t.type?{...e,focused:!0}:"root/blur"===t.type?{...e,focused:!1,query:null}:"root/clear"===t.type?{...e,activeValue:null,query:null,value:null}:"root/escape"===t.type?{...e,focused:!1,query:null}:"root/open"===t.type?{...e,query:e.query||t.query}:"root/setActiveValue"===t.type?{...e,activeValue:t.value,listFocused:t.listFocused||e.listFocused}:"root/setListFocused"===t.type?{...e,listFocused:t.listFocused}:"value/change"===t.type?{...e,activeValue:t.value,query:null,value:t.value}:e}let r9=["Control","Shift","Alt","Enter","Home","End","PageUp","PageDown","Meta","Tab","CapsLock"],ne=["bottom-start","top-start"],nt=(e,t)=>t?t.value:e,no=(e,t)=>t.value.toLowerCase().indexOf(e.toLowerCase())>-1,nr=(0,l.forwardRef)(function(e,t){let{border:o=!0,customValidity:r,disabled:n,filterOption:a,fontSize:d=2,icon:s,id:u,listBox:f=x,loading:p,onBlur:h,onChange:m,onFocus:g,onQueryChange:b,onSelect:v,openButton:y,openOnFocus:$,options:k,padding:S=3,popover:j=x,prefix:C,radius:I=2,readOnly:R,relatedElements:E,renderOption:N,renderPopover:_,renderValue:T=nt,suffix:A,value:M,...F}=e,[O,B]=(0,l.useReducer)(r8,{activeValue:M||null,focused:!1,listFocused:!1,query:null,value:M||null}),{activeValue:W,focused:H,listFocused:L,query:D,value:P}=O,J=(0,l.useCallback)(({value:e})=>(0,i.jsx)(or,{"data-as":"button",padding:S,radius:2,tone:"inherit",children:(0,i.jsx)(tQ,{size:d,textOverflow:"ellipsis",children:e})}),[d,S]),V="function"==typeof N?N:J,q="function"==typeof a?a:no,G=(0,l.useRef)(null),X=(0,l.useRef)(null),U=(0,l.useRef)(null),Y=(0,l.useRef)(null),K=(0,l.useRef)(!1),Z=(0,l.useRef)(P),Q=(0,l.useRef)(M),ee=(0,l.useRef)(!1);(0,l.useImperativeHandle)(t,()=>U.current);let et=`${u}-listbox`,eo=Array.isArray(k)?k:w,er=z(S),en=(0,l.useMemo)(()=>null!==P?eo.find(e=>e.value===P):void 0,[eo,P]),ei=(0,l.useMemo)(()=>eo.filter(e=>!D||q(D,e)),[q,eo,D]),ea=ei.length,el=W?`${u}-option-${W}`:void 0,ed=null!==D&&p||H&&null!==D,es=(0,l.useCallback)(e=>{setTimeout(()=>{if(ee.current)return;let t=(E||[]).concat(G.current?[G.current]:[],X.current?[X.current]:[]),o=!1;if(document.activeElement){for(let e of t)if(e===document.activeElement||e.contains(document.activeElement)){o=!0;break}}!1===o&&(B({type:"root/blur"}),ee.current=!1,b&&b(null),h&&h(e))},0)},[h,b,E]),ec=(0,l.useCallback)(e=>{let t=Y.current,o=e.target instanceof HTMLElement?e.target:null,r=t?.contains(o)||!1;r!==K.current&&(K.current=r,B({type:"root/setListFocused",listFocused:r}))},[]),eu=(0,l.useCallback)(e=>{B({type:"value/change",value:e}),ee.current=!1,v&&v(e),Z.current=e,m&&m(e),b&&b(null),U.current?.focus()},[m,v,b]),ef=(0,l.useCallback)(e=>{if("ArrowDown"===e.key){if(e.preventDefault(),!ea)return;let t=ei.find(e=>e.value===W),o=t?ei.indexOf(t):-1,r=ei[(o+1)%ea];r&&B({type:"root/setActiveValue",value:r.value,listFocused:!0});return}if("ArrowUp"===e.key){if(e.preventDefault(),!ea)return;let t=ei.find(e=>e.value===W),o=t?ei.indexOf(t):-1,r=ei[-1===o?ea-1:(ea+o-1)%ea];r&&B({type:"root/setActiveValue",value:r.value,listFocused:!0});return}if("Escape"===e.key){B({type:"root/escape"}),ee.current=!1,b&&b(null),U.current?.focus();return}let t=e.target,o=Y.current;if((o===t||o?.contains(t))&&!r9.includes(e.key)){U.current?.focus();return}},[W,ei,ea,b]),ep=(0,l.useCallback)(e=>{let t=e.currentTarget.value;B({type:"input/change",query:t}),b&&b(t)},[b]),eh=(0,l.useCallback)(()=>{B({type:"root/open",query:P?T(P,en):""})},[en,T,P]),em=(0,l.useCallback)(e=>{H||(B({type:"input/focus"}),g&&g(e),$&&eh())},[H,g,$,eh]),eg=(0,l.useCallback)(()=>{ee.current=!0},[]),eb=(0,l.useCallback)(()=>{ee.current=!1},[]),ev=(0,l.useCallback)(()=>{B({type:"root/clear"}),Z.current="",m&&m(""),b&&b(null),U.current?.focus()},[m,b]),ey=(0,l.useCallback)(()=>{B({type:"input/focus"})},[]);(0,l.useEffect)(()=>{if(M!==Q.current){Q.current=M,void 0!==M&&(B({type:"value/change",value:M}),Z.current=M);return}M!==Z.current&&(Z.current=M||null,B({type:"value/change",value:M||null}))},[M]),(0,l.useEffect)(()=>{!H&&Z.current&&B({type:"root/setActiveValue",value:Z.current})},[H]),(0,l.useEffect)(()=>{let e=Y.current;if(!e)return;let t=ei.find(e=>e.value===W);if(t){let o=ei.indexOf(t),r=e.childNodes[o];if(r){if(document.activeElement&&r.contains(document.activeElement))return;oG(r)}}},[W,ei]);let ew=(0,l.useMemo)(()=>{if(!p&&!n&&P)return{"aria-label":"Clear",onFocus:ey}},[n,ey,p,P]),ex=(0,l.useMemo)(()=>er.map(e=>0===e?0:1===e||2===e?1:e-2),[er]),e$=(0,l.useMemo)(()=>er.map(e=>Math.max(e-1,0)),[er]),ek=(0,l.useMemo)(()=>"object"==typeof y?y:x,[y]),eS=(0,l.useCallback)(e=>{eh(),ek.onClick&&ek.onClick(e),oH(()=>U.current?.focus())},[ek,eh]),ej=(0,l.useMemo)(()=>n||R||!y?void 0:(0,i.jsx)(tK,{"aria-hidden":ed,padding:ex,children:(0,i.jsx)(ot,{"aria-label":"Open",disabled:ed,fontSize:d,icon:c.D3D,mode:"bleed",padding:e$,...ek,onClick:eS})}),[n,ed,d,eS,y,ex,e$,ek,R]),eC=(0,l.useMemo)(()=>null===D?null!==P?T(P,en):"":D,[en,D,T,P]),eI=(0,i.jsx)(rV,{...F,"aria-activedescendant":el,"aria-autocomplete":"list","aria-expanded":ed,"aria-owns":et,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",border:o,clearButton:ew,customValidity:r,disabled:n,fontSize:d,icon:s,iconRight:p&&r6,id:u,inputMode:"search",onChange:ep,onClear:ev,onFocus:em,padding:er,prefix:C,radius:I,readOnly:R,ref:U,role:"combobox",spellCheck:!1,suffix:A||ej,value:eC}),eR=(0,l.useCallback)(e=>{"Tab"===e.key&&L&&U.current?.focus()},[L]),eE=(0,l.useMemo)(()=>0===ei.length?null:(0,i.jsx)(r4,{"data-ui":"AutoComplete__results",onKeyDown:eR,padding:1,...f,tabIndex:-1,children:(0,i.jsx)(r$,{as:"ul","aria-multiselectable":!1,"data-ui":"AutoComplete__resultsList",id:et,ref:Y,role:"listbox",space:1,children:ei.map(e=>{let t=null!==W?e.value===W:en===e;return(0,i.jsx)(r7,{id:`${u}-option-${e.value}`,onSelect:eu,selected:t,value:e.value,children:(0,l.cloneElement)(V(e),{disabled:p,selected:t,tabIndex:L&&t?0:-1})},e.value)})})}),[W,en,ei,eu,eR,u,f,et,L,p,V]),ez=(0,l.useMemo)(()=>_?_({content:eE,hidden:!ed,inputElement:U.current,onMouseEnter:eg,onMouseLeave:eb},X):0===ea?null:(0,i.jsx)(rd,{arrow:!1,constrainSize:!0,content:eE,fallbackPlacements:ne,matchReferenceWidth:!0,onMouseEnter:eg,onMouseLeave:eb,open:ed,overflow:"auto",placement:"bottom-start",portal:!0,radius:I,ref:X,referenceElement:U.current,...j}),[eE,ed,ea,eg,eb,j,I,_]);return(0,i.jsxs)(r3,{"data-ui":"Autocomplete",onBlur:es,onFocus:ec,onKeyDown:ef,ref:G,children:[eI,ez]})});nr.displayName="ForwardRef(Autocomplete)";let nn=nr,ni=s.I4.ol.withConfig({displayName:"StyledBreadcrumbs",componentId:"sc-1es8h8q-0"})`margin:0;padding:0;display:flex;list-style:none;align-items:center;white-space:nowrap;line-height:0;`,na=(0,s.I4)(ot).withConfig({displayName:"ExpandButton",componentId:"sc-1es8h8q-1"})`appearance:none;margin:-4px;`,nl=(0,l.forwardRef)(function(e,t){let{children:o,maxLength:r,separator:n,space:a=2,...d}=e,s=z(a),[c,u]=(0,l.useState)(!1),f=(0,l.useRef)(null),p=(0,l.useRef)(null),h=(0,l.useCallback)(()=>u(!1),[]),m=(0,l.useCallback)(()=>u(!0),[]);N(h,()=>[f.current,p.current]);let g=(0,l.useMemo)(()=>l.Children.toArray(o).filter(l.isValidElement),[o]),b=(0,l.useMemo)(()=>{let e=g.length;if(r&&e>r){let t=Math.ceil(r/2),o=Math.floor(r/2);return[...g.slice(0,t-1),(0,i.jsx)(rd,{constrainSize:!0,content:(0,i.jsx)(r$,{as:"ol",overflow:"auto",padding:s,space:s,children:g.slice(t-1,e-o)}),open:c,placement:"top",portal:!0,ref:p,children:(0,i.jsx)(na,{fontSize:1,mode:"bleed",onClick:c?h:m,padding:1,ref:f,selected:c,text:"…"})},"button"),...g.slice(e-o)]}return g},[h,m,r,c,g,s]);return(0,i.jsx)(ni,{"data-ui":"Breadcrumbs",...d,ref:t,children:b.map((e,t)=>(0,i.jsxs)(l.Fragment,{children:[t>0&&(0,i.jsx)(tK,{"aria-hidden":!0,as:"li",paddingX:s,children:n||(0,i.jsx)(tQ,{muted:!0,children:"/"})}),(0,i.jsx)(tK,{as:"li",children:e})]},t))})});nl.displayName="ForwardRef(Breadcrumbs)";let nd=ez("@sanity/ui/context/dialog",{version:0});function ns(e,t,o){return!e||!t||oV(e,o)||oV(t,o)}let nc=(0,s.I4)(o0).withConfig({displayName:"StyledDialog",componentId:"sc-4n4xb3-0"})(tR,function({theme:e}){let{color:t}=(0,n.JW)(e);return{"&:not([hidden])":{display:"flex"},top:0,left:0,right:0,bottom:0,alignItems:"center",justifyContent:"center",outline:"none",background:t.backdrop}},function(e){let{media:t}=(0,n.JW)(e.theme);return j(t,e.$position,e=>({"&&":{position:e}}))},function(e){return e.$animate?(0,s.AH)`
    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    animation: fadeIn 200ms ease-out;
    // Animates the dialog card.
    & > [data-ui='DialogCard'] {
      animation: zoomIn 200ms ease-out;
    }
  `:(0,s.AH)``}),nu=(0,s.I4)(of).withConfig({displayName:"DialogContainer",componentId:"sc-4n4xb3-1"})`&:not([hidden]){display:flex;}width:100%;height:100%;flex-direction:column;align-items:center;justify-content:center;`,nf=(0,s.I4)(or).withConfig({displayName:"DialogCardRoot",componentId:"sc-4n4xb3-2"})`&:not([hidden]){display:flex;}width:100%;min-height:0;max-height:100%;overflow:hidden;overflow:clip;`,np=(0,s.I4)(t3).withConfig({displayName:"DialogLayout",componentId:"sc-4n4xb3-3"})`flex:1;min-height:0;width:100%;`,nh=(0,s.I4)(tK).withConfig({displayName:"DialogHeader",componentId:"sc-4n4xb3-4"})`position:relative;z-index:2;`,nm=(0,s.I4)(tK).withConfig({displayName:"DialogContent",componentId:"sc-4n4xb3-5"})`position:relative;z-index:1;overflow:auto;outline:none;`,ng=(0,s.I4)(tK).withConfig({displayName:"DialogFooter",componentId:"sc-4n4xb3-6"})`position:relative;z-index:3;`,nb=(0,l.forwardRef)(function(e,t){let o,r,n,d,s,u,f,p,h,m,g,b,v;let y=(0,a.c)(38),{__unstable_autoFocus:w,__unstable_hideCloseButton:x,children:$,contentRef:k,footer:S,header:j,id:C,onClickOutside:I,onClose:R,portal:E,radius:_,scheme:T,shadow:A,width:M}=e,F=o4(),O=E?F.elements?.[E]||null:F.element,B=oA().element,W=z(_),H=z(A),L=z(M),D=(0,l.useRef)(null),P=(0,l.useRef)(null),{isTopLayer:J}=oW(),V=`${C}_label`,q=!!R&&!1===x,G=!!j||q;return y[0]===Symbol.for("react.memo_cache_sentinel")?(o=()=>D.current,y[0]=o):o=y[0],(0,l.useImperativeHandle)(t,o),y[1]===Symbol.for("react.memo_cache_sentinel")?(r=()=>P.current,y[1]=r):r=y[1],(0,l.useImperativeHandle)(k,r),y[2]!==w?(n=()=>{w&&D.current&&oG(D.current)},d=[w,D],y[2]=w,y[3]=n,y[4]=d):(n=y[3],d=y[4]),(0,l.useEffect)(n,d),y[5]!==B||y[6]!==J||y[7]!==R||y[8]!==O?(s=e=>{if(!J||!R)return;let t=document.activeElement;t&&!ns(B,O,t)||"Escape"===e.key&&(e.preventDefault(),e.stopPropagation(),R())},y[5]=B,y[6]=J,y[7]=R,y[8]=O,y[9]=s):s=y[9],eI(s),y[10]!==B||y[11]!==J||y[12]!==I||y[13]!==O?(u=J&&I&&(e=>{let t=e.target;t&&!ns(B,O,t)||I()}),y[10]=B,y[11]=J,y[12]=I,y[13]=O,y[14]=u):u=y[14],y[15]===Symbol.for("react.memo_cache_sentinel")?(f=()=>[D.current],y[15]=f):f=y[15],N(u,f),y[16]!==j||y[17]!==V||y[18]!==R||y[19]!==q||y[20]!==G?(p=G&&(0,i.jsx)(nh,{children:(0,i.jsxs)(t3,{align:"flex-start",padding:3,children:[(0,i.jsx)(tK,{flex:1,padding:2,children:j&&(0,i.jsx)(tQ,{id:V,size:1,weight:"semibold",children:j})}),q&&(0,i.jsx)(tK,{flex:"none",children:(0,i.jsx)(ot,{"aria-label":"Close dialog",disabled:!R,icon:c.USm,mode:"bleed",onClick:R,padding:2})})]})}),y[16]=j,y[17]=V,y[18]=R,y[19]=q,y[20]=G,y[21]=p):p=y[21],y[22]!==$?(h=(0,i.jsx)(nm,{flex:1,ref:P,tabIndex:-1,children:$}),y[22]=$,y[23]=h):h=y[23],y[24]!==S?(m=S&&(0,i.jsx)(ng,{children:S}),y[24]=S,y[25]=m):m=y[25],y[26]!==p||y[27]!==h||y[28]!==m?(g=(0,i.jsxs)(np,{direction:"column",children:[p,h,m]}),y[26]=p,y[27]=h,y[28]=m,y[29]=g):g=y[29],y[30]!==W||y[31]!==T||y[32]!==H||y[33]!==g?(b=(0,i.jsx)(nf,{radius:W,ref:D,scheme:T,shadow:H,children:g}),y[30]=W,y[31]=T,y[32]=H,y[33]=g,y[34]=b):b=y[34],y[35]!==b||y[36]!==L?(v=(0,i.jsx)(nu,{"data-ui":"DialogCard",width:L,children:b}),y[35]=b,y[36]=L,y[37]=v):v=y[37],v});nb.displayName="ForwardRef(DialogCard)";let nv=(0,l.forwardRef)(function(e,t){let o,r,n,d,s,c,u,f,p,h,m,g,b,v,y,w,x,$,k,S,j,C,I,R,E,N,_,T;let A=(0,a.c)(60),M=(0,l.useContext)(nd),{layer:F}=eF();A[0]!==e?({__unstable_autoFocus:y,__unstable_hideCloseButton:w,cardRadius:x,cardShadow:$,children:n,contentRef:d,footer:s,header:c,id:u,onActivate:f,onClickOutside:p,onClose:h,onFocus:m,padding:k,portal:g,position:o,scheme:v,width:S,zOffset:r,animate:j,...b}=e,A[0]=e,A[1]=o,A[2]=r,A[3]=n,A[4]=d,A[5]=s,A[6]=c,A[7]=u,A[8]=f,A[9]=p,A[10]=h,A[11]=m,A[12]=g,A[13]=b,A[14]=v,A[15]=y,A[16]=w,A[17]=x,A[18]=$,A[19]=k,A[20]=S,A[21]=j):(o=A[1],r=A[2],n=A[3],d=A[4],s=A[5],c=A[6],u=A[7],f=A[8],p=A[9],h=A[10],m=A[11],g=A[12],b=A[13],v=A[14],y=A[15],w=A[16],x=A[17],$=A[18],k=A[19],S=A[20],j=A[21]);let O=void 0===y||y,B=void 0!==w&&w,W=void 0===x?4:x,H=void 0===$?3:$,L=void 0===k?3:k,D=void 0===S?0:S,P=void 0!==j&&j,J=o??(M.position||"fixed"),V=r??(M.zOffset||F.dialog.zOffset),q=!eL()&&P,G=o4(),X=g?G.elements?.[g]||null:G.element,U=oA().element,Y=z(W),K=z(L),Z=z(J),Q=z(D),ee=z(V),et=(0,l.useRef)(null),eo=(0,l.useRef)(null),er=(0,l.useRef)(null),en=(0,l.useRef)(null);A[22]!==m?(C=e=>{m?.(e);let t=e.target,o=er.current;if(o&&t===et.current){oX(o);return}if(o&&t===eo.current){oG(o);return}oD(e.target)&&(en.current=e.target)},A[22]=m,A[23]=C):C=A[23];let ei=C,ea=`${u}_label`,el=(0,l.useRef)(void 0);A[24]!==U||A[25]!==X?(I=()=>{el.current&&clearTimeout(el.current),el.current=setTimeout(()=>{let e=document.activeElement;if(e&&!ns(U,X,e)){let e=en.current;if(!e||!document.body.contains(e)){let e=er.current;e&&oG(e);return}e.focus()}},0)},A[24]=U,A[25]=X,A[26]=I):I=A[26];let ed=I;return A[27]===Symbol.for("react.memo_cache_sentinel")?(R=(0,i.jsx)("div",{ref:et,tabIndex:0}),A[27]=R):R=A[27],A[28]!==O||A[29]!==Y||A[30]!==H||A[31]!==n||A[32]!==d||A[33]!==s||A[34]!==c||A[35]!==B||A[36]!==u||A[37]!==p||A[38]!==h||A[39]!==g||A[40]!==v||A[41]!==Q?(E=(0,i.jsx)(nb,{__unstable_autoFocus:O,__unstable_hideCloseButton:B,contentRef:d,footer:s,header:c,id:u,onClickOutside:p,onClose:h,portal:g,radius:Y,ref:er,scheme:v,shadow:H,width:Q,children:n}),A[28]=O,A[29]=Y,A[30]=H,A[31]=n,A[32]=d,A[33]=s,A[34]=c,A[35]=B,A[36]=u,A[37]=p,A[38]=h,A[39]=g,A[40]=v,A[41]=Q,A[42]=E):E=A[42],A[43]===Symbol.for("react.memo_cache_sentinel")?(N=(0,i.jsx)("div",{ref:eo,tabIndex:0}),A[43]=N):N=A[43],A[44]!==q||A[45]!==ei||A[46]!==ed||A[47]!==u||A[48]!==ea||A[49]!==f||A[50]!==K||A[51]!==Z||A[52]!==t||A[53]!==b||A[54]!==E||A[55]!==ee?(_=(0,i.jsxs)(nc,{...b,$animate:q,$padding:K,$position:Z,"aria-labelledby":ea,"aria-modal":!0,"data-ui":"Dialog",id:u,onActivate:f,onClick:ed,onFocus:ei,ref:t,role:"dialog",zOffset:ee,children:[R,E,N]}),A[44]=q,A[45]=ei,A[46]=ed,A[47]=u,A[48]=ea,A[49]=f,A[50]=K,A[51]=Z,A[52]=t,A[53]=b,A[54]=E,A[55]=ee,A[56]=_):_=A[56],A[57]!==g||A[58]!==_?(T=(0,i.jsx)(o5,{__unstable_name:g,children:_}),A[57]=g,A[58]=_,A[59]=T):T=A[59],T});function ny(e){let t,o,r;let n=(0,a.c)(6),{children:l,position:d,zOffset:s}=e;return n[0]!==d||n[1]!==s?(o={version:0,position:d,zOffset:s},n[0]=d,n[1]=s,n[2]=o):o=n[2],t=o,n[3]!==l||n[4]!==t?(r=(0,i.jsx)(nd.Provider,{value:t,children:l}),n[3]=l,n[4]=t,n[5]=r):r=n[5],r}nv.displayName="ForwardRef(Dialog)",ny.displayName="DialogProvider";let nw=s.I4.kbd.withConfig({displayName:"StyledHotkeys",componentId:"sc-b37mge-0"})`font:inherit;padding:1px;&:not([hidden]){display:block;}`,nx=(0,s.I4)(ox).withConfig({displayName:"Key",componentId:"sc-b37mge-1"})`&:not([hidden]){display:block;}`,n$=(0,l.forwardRef)(function(e,t){let o,r,n,l,d,s,c,u,f;let p=(0,a.c)(24);p[0]!==e?({fontSize:o,keys:r,padding:n,radius:l,space:s,...d}=e,p[0]=e,p[1]=o,p[2]=r,p[3]=n,p[4]=l,p[5]=d,p[6]=s):(o=p[1],r=p[2],n=p[3],l=p[4],d=p[5],s=p[6]);let h=z(void 0===s?.5:s);if(!r||0===r.length){let e;return p[7]===Symbol.for("react.memo_cache_sentinel")?(e=(0,i.jsx)(i.Fragment,{}),p[7]=e):e=p[7],e}if(p[8]!==o||p[9]!==r||p[10]!==n||p[11]!==l){let e;p[13]!==o||p[14]!==n||p[15]!==l?(e=(e,t)=>(0,i.jsx)(nx,{fontSize:o,padding:n,radius:l,children:e},t),p[13]=o,p[14]=n,p[15]=l,p[16]=e):e=p[16],c=r.map(e),p[8]=o,p[9]=r,p[10]=n,p[11]=l,p[12]=c}else c=p[12];return p[17]!==h||p[18]!==c?(u=(0,i.jsx)(ov,{as:"span",space:h,children:c}),p[17]=h,p[18]=c,p[19]=u):u=p[19],p[20]!==t||p[21]!==d||p[22]!==u?(f=(0,i.jsx)(nw,{"data-ui":"Hotkeys",...d,ref:t,children:u}),p[20]=t,p[21]=d,p[22]=u,p[23]=f):f=p[23],f});n$.displayName="ForwardRef(Hotkeys)";let nk=ez("@sanity/ui/context/menu",null);function nS(e){return oP(e)&&"true"!==e.getAttribute("data-disabled")||oJ(e)&&!e.disabled}function nj(e){return e.filter(nS)}let nC=[],nI=(0,s.I4)(tK).withConfig({displayName:"StyledMenu",componentId:"sc-xt0tnv-0"})`outline:none;overflow:auto;`,nR=(0,l.forwardRef)(function(e,t){let o,r,n,d,s,c,u,f,p,h,m,g,b,v,y,w,x,$,k,S,j,C,I,R;let E=(0,a.c)(50);if(E[0]!==e){let{children:t,focusFirst:i,focusLast:a,onClickOutside:l,onEscape:b,onItemClick:v,onItemSelect:y,onKeyDown:w,originElement:x,padding:$,registerElement:k,shouldFocus:S,space:j,...C}=e;r=t,n=l,d=b,s=v,c=y,u=w,f=x,m=$,p=k,o=S,g=j,h=C,E[0]=e,E[1]=o,E[2]=r,E[3]=n,E[4]=d,E[5]=s,E[6]=c,E[7]=u,E[8]=f,E[9]=p,E[10]=h,E[11]=m,E[12]=g}else o=E[1],r=E[2],n=E[3],d=E[4],s=E[5],c=E[6],u=E[7],f=E[8],p=E[9],h=E[10],m=E[11],g=E[12];let z=void 0===m?1:m,_=void 0===g?1:g,T=o??(e.focusFirst&&"first"||e.focusLast&&"last"||null),A=(0,l.useRef)(null);E[13]===Symbol.for("react.memo_cache_sentinel")?(b=()=>A.current,E[13]=b):b=E[13],(0,l.useImperativeHandle)(t,b);let{isTopLayer:M}=oW();E[14]!==u||E[15]!==f||E[16]!==T?(v={onKeyDown:u,originElement:f,shouldFocus:T,rootElementRef:A},E[14]=u,E[15]=f,E[16]=T,E[17]=v):v=E[17];let{activeElement:F,activeIndex:O,handleItemMouseEnter:B,handleItemMouseLeave:W,handleKeyDown:H,mount:L}=function(e){let{onKeyDown:t,originElement:o,shouldFocus:r,rootElementRef:n}=e,i=(0,l.useRef)([]),[a,d]=(0,l.useState)(-1),s=(0,l.useRef)(a),c=(0,l.useMemo)(()=>i.current[a]||null,[a]),u=!!n.current,f=(0,l.useCallback)(e=>{d(e),s.current=e},[]),p=(0,l.useCallback)((e,t)=>e?(-1===i.current.indexOf(e)&&(i.current.push(e),function(e,t){if(!e)return;let o=new WeakMap;for(let r of t)o.set(r,function(e,t){let o=[],r=t;for(;r!==e;){let t=r.parentElement;if(!t)break;let n=Array.from(t.childNodes).indexOf(r);if(o.unshift(n),t===e)break;r=t}return o}(e,r));t.sort((e,t)=>{let r=o.get(e)||nC,n=o.get(t)||nC,i=Math.max(r.length,n.length);for(let e=0;e<i;e+=1){let t=r[e]||-1,o=n[e]||-1;if(t!==o)return t-o}return 0})}(n.current,i.current)),t&&f(i.current.indexOf(e)),()=>{let t=i.current.indexOf(e);t>-1&&i.current.splice(t,1)}):()=>{},[n,f]),h=(0,l.useCallback)(e=>{if("Tab"===e.key){o&&o.focus();return}if("Home"===e.key){e.preventDefault(),e.stopPropagation();let t=nj(i.current)[0];if(!t)return;f(i.current.indexOf(t));return}if("End"===e.key){e.preventDefault(),e.stopPropagation();let t=nj(i.current),o=t[t.length-1];if(!o)return;f(i.current.indexOf(o));return}if("ArrowUp"===e.key){e.preventDefault(),e.stopPropagation();let t=nj(i.current),o=t.length;if(0===o)return;let r=i.current[s.current],n=t.indexOf(r),a=t[n=(n-1+o)%o];f(i.current.indexOf(a));return}if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();let t=nj(i.current),o=t.length;if(0===o)return;let r=i.current[s.current],n=t.indexOf(r),a=t[n=(n+1)%o];f(i.current.indexOf(a));return}t&&t(e)},[t,o,f]),m=(0,l.useCallback)(e=>{let t=e.currentTarget;f(i.current.indexOf(t))},[f]),g=(0,l.useCallback)(()=>{f(-2),n.current?.focus()},[n,f]);return(0,l.useEffect)(()=>{if(!u)return;let e=requestAnimationFrame(()=>{if(-1===a){if("first"===r){let e=nj(i.current)[0];e&&f(i.current.indexOf(e))}if("last"===r){let e=nj(i.current),t=e[e.length-1];t&&f(i.current.indexOf(t))}return}(i.current[a]||null)?.focus()});return()=>cancelAnimationFrame(e)},[a,u,f,r]),{activeElement:c,activeIndex:a,handleItemMouseEnter:m,handleItemMouseLeave:g,handleKeyDown:h,mount:p}}(v),D=(0,l.useRef)(null);E[18]!==p?(y=e=>{D.current&&(D.current(),D.current=null),A.current=e,A.current&&p&&(D.current=p(A.current))},E[18]=p,E[19]=y):y=E[19];let P=y;return E[20]!==O||E[21]!==c?(w=()=>{c&&c(O)},x=[O,c],E[20]=O,E[21]=c,E[22]=w,E[23]=x):(w=E[22],x=E[23]),(0,l.useEffect)(w,x),E[24]===Symbol.for("react.memo_cache_sentinel")?($=()=>[A.current],E[24]=$):$=E[24],N(M&&n,$),E[25]!==M||E[26]!==d?(k=e=>{M&&"Escape"===e.key&&(e.stopPropagation(),d&&d())},E[25]=M,E[26]=d,E[27]=k):k=E[27],eI(k),E[28]!==F||E[29]!==O||E[30]!==B||E[31]!==W||E[32]!==L||E[33]!==n||E[34]!==d||E[35]!==s||E[36]!==p?(j={version:0,activeElement:F,activeIndex:O,mount:L,onClickOutside:n,onEscape:d,onItemClick:s,onItemMouseEnter:B,onItemMouseLeave:W,registerElement:p,onMouseEnter:B,onMouseLeave:W},E[28]=F,E[29]=O,E[30]=B,E[31]=W,E[32]=L,E[33]=n,E[34]=d,E[35]=s,E[36]=p,E[37]=j):j=E[37],S=j,E[38]!==r||E[39]!==_?(C=(0,i.jsx)(r$,{space:_,children:r}),E[38]=r,E[39]=_,E[40]=C):C=E[40],E[41]!==H||E[42]!==P||E[43]!==z||E[44]!==h||E[45]!==C?(I=(0,i.jsx)(nI,{"data-ui":"Menu",...h,onKeyDown:H,padding:z,ref:P,role:"menu",tabIndex:-1,children:C}),E[41]=H,E[42]=P,E[43]=z,E[44]=h,E[45]=C,E[46]=I):I=E[46],E[47]!==I||E[48]!==S?(R=(0,i.jsx)(nk.Provider,{value:S,children:I}),E[47]=I,E[48]=S,E[49]=R):R=E[49],R});nR.displayName="ForwardRef(Menu)";let nE=(0,l.forwardRef)(function(e,t){let{__unstable_disableRestoreFocusOnClose:o=!1,boundaryElement:r,button:n,id:a,menu:d,onClose:s,onOpen:c,placement:u,popoverScheme:f,portal:p=!0,popover:h,popoverRadius:m,preventOverflow:g}=e,[b,v]=(0,l.useState)(!1),[y,w]=(0,l.useState)(null),[x,$]=(0,l.useState)(null),[k,S]=(0,l.useState)([]),j=(0,l.useRef)(b);(0,l.useEffect)(()=>{c&&b&&!j.current&&c()},[c,b]),(0,l.useEffect)(()=>{s&&!b&&j.current&&s()},[s,b]),(0,l.useEffect)(()=>{j.current=b},[b]);let C=(0,l.useCallback)(()=>{v(e=>!e),w(null)},[]),I=(0,l.useCallback)(e=>{b&&e.preventDefault()},[b]),R=(0,l.useCallback)(e=>{if("ArrowDown"===e.key||"Enter"===e.key||" "===e.key){e.preventDefault(),v(!0),w("first");return}if("ArrowUp"===e.key){e.preventDefault(),v(!0),w("last");return}},[]),E=(0,l.useCallback)(e=>{let t=e.target;if(t instanceof Node&&!(x&&(t===x||x.contains(t)))){for(let e of k)if(t===e||e.contains(t))return;v(!1)}},[x,k]),z=(0,l.useCallback)(()=>{v(!1),!o&&x&&x.focus()},[x,o]),N=(0,l.useCallback)(e=>{let t=e.relatedTarget;if(t instanceof Node){for(let e of k)if(e===t||e.contains(t))return;v(!1)}},[k]),_=(0,l.useCallback)(()=>{v(!1),!o&&x&&x.focus()},[x,o]),T=(0,l.useCallback)(e=>(S(t=>t.concat([e])),()=>S(t=>t.filter(t=>t!==e))),[]),A=d&&(0,l.cloneElement)(d,{"aria-labelledby":a,onBlurCapture:N,onClickOutside:E,onEscape:z,onItemClick:_,originElement:x,registerElement:T,shouldFocus:y}),M=(0,l.useMemo)(()=>n&&(0,l.cloneElement)(n,{"data-ui":"MenuButton",id:a,onClick:C,onKeyDown:R,onMouseDown:I,"aria-haspopup":!0,"aria-expanded":b,ref:$,selected:n.props.selected??b}),[n,C,R,I,a,b]);(0,l.useImperativeHandle)(t,()=>x,[x]);let F=(0,l.useMemo)(()=>({boundaryElement:r,overflow:"auto",placement:u,portal:p,preventOverflow:g,radius:m,scheme:f,...h||{}}),[r,u,m,f,p,g,h]);return(0,i.jsx)(rd,{"data-ui":"MenuButton__popover",...F,content:A,open:b,children:M||(0,i.jsx)(i.Fragment,{})})});nE.displayName="ForwardRef(MenuButton)";let nz=s.I4.hr.withConfig({displayName:"MenuDivider",componentId:"sc-uhoxwu-0"})`height:1px;border:0;background:var(--card-hairline-soft-color);margin:0;`;nz.displayName="MenuDivider";let nN=(0,s.I4)(tK).withConfig({displayName:"Selectable",componentId:"sc-1w01ang-0"})(tE,function(){return(0,s.AH)`
    background-color: inherit;
    color: inherit;

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      text-decoration: none;
    }
  `},function(e){let{$tone:t}=e,{color:o,style:r}=(0,n.JW)(e.theme),i=o.selectable[t];return(0,s.AH)`
    ${t7(o,i.enabled)}

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);
    outline: none;

    /* &:is(button) */
    &[data-as='button'] {
      &:disabled {
        ${t7(o,i.disabled)}
      }

      &:not(:disabled) {
        &[aria-pressed='true'] {
          ${t7(o,i.pressed)}
        }

        &[data-selected],
        &[aria-selected='true'] > & {
          ${t7(o,i.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t7(o,i.hovered)}
            }

            &:active {
              ${t7(o,i.pressed)}
            }
          }
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      &[data-disabled] {
        ${t7(o,i.disabled)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${t7(o,i.pressed)}
        }

        &[data-selected] {
          ${t7(o,i.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t7(o,i.hovered)}
            }
            &:active {
              ${t7(o,i.pressed)}
            }
          }
        }
      }
    }

    ${r?.card?.root}
  `});function n_(){let e=(0,l.useContext)(nk);if(!e)throw Error("useMenu(): missing context value");if(!o_(e)||0!==e.version)throw Error("useMenu(): the context value is not compatible");return e}function nT(e){let t,o,r,n,s,u,f,p,h,m,g,b,v,y,w,x,$,k,S,j,C,I,R,E,N,_,T,A,M,F,O,B,W,H,L;let D=(0,a.c)(79);D[0]!==e?({as:f,children:o,fontSize:p,icon:t,menu:r,onClick:n,padding:h,popover:s,radius:m,space:g,text:v,tone:b,...u}=e,D[0]=e,D[1]=t,D[2]=o,D[3]=r,D[4]=n,D[5]=s,D[6]=u,D[7]=f,D[8]=p,D[9]=h,D[10]=m,D[11]=g,D[12]=b,D[13]=v):(t=D[1],o=D[2],r=D[3],n=D[4],s=D[5],u=D[6],f=D[7],p=D[8],h=D[9],m=D[10],g=D[11],b=D[12],v=D[13]);let P=void 0===f?"button":f,J=void 0===p?1:p,V=void 0===h?3:h,q=void 0===m?2:m,G=void 0===g?3:g,X=void 0===b?"default":b,U=n_(),{scheme:Y}=eT(),{activeElement:K,mount:Z,onClickOutside:Q,onEscape:ee,onItemClick:et,onItemMouseEnter:eo,registerElement:er}=U,en=eo??U.onMouseEnter,[ei,ea]=(0,l.useState)(null),[el,ed]=(0,l.useState)(!1),[es,ec]=(0,l.useState)(null),eu=!!K&&K===ei,[ef,ep]=(0,l.useState)(!1);D[14]!==en?(y=e=>{ep(!1),en(e),ed(!0)},D[14]=en,D[15]=y):y=D[15];let eh=y;D[16]!==ei?(w=e=>{"ArrowLeft"===e.key&&(e.stopPropagation(),ed(!1),requestAnimationFrame(()=>{ei?.focus()}))},D[16]=ei,D[17]=w):w=D[17];let em=w;D[18]!==n?(x=e=>{n?.(e),ec("first"),ed(!0)},D[18]=n,D[19]=x):x=D[19];let eg=x;D[20]!==et?($=()=>{ed(!1),et?.()},D[20]=et,D[21]=$):$=D[21];let eb=$;D[22]===Symbol.for("react.memo_cache_sentinel")?(k=()=>ep(!0),D[22]=k):k=D[22];let ev=k;D[23]!==Z||D[24]!==ei?(S=()=>Z(ei),j=[Z,ei],D[23]=Z,D[24]=ei,D[25]=S,D[26]=j):(S=D[25],j=D[26]),(0,l.useEffect)(S,j),D[27]!==eu?(C=()=>{eu||ed(!1)},I=[eu],D[27]=eu,D[28]=C,D[29]=I):(C=D[28],I=D[29]),(0,l.useEffect)(C,I),D[30]!==el?(R=()=>{el||ep(!1)},E=[el],D[30]=el,D[31]=R,D[32]=E):(R=D[31],E=D[32]),(0,l.useEffect)(R,E),D[33]!==es?(N=()=>{if(!es)return;let e=requestAnimationFrame(()=>ec(null));return()=>cancelAnimationFrame(e)},_=[es],D[33]=es,D[34]=N,D[35]=_):(N=D[34],_=D[35]),(0,l.useEffect)(N,_),D[36]!==o||D[37]!==eb||D[38]!==em||D[39]!==r||D[40]!==Q||D[41]!==ee||D[42]!==er||D[43]!==es?(T=(0,i.jsx)(nR,{...r,onClickOutside:Q,onEscape:ee,onItemClick:eb,onKeyDown:em,onMouseEnter:ev,registerElement:er,shouldFocus:es,children:o}),D[36]=o,D[37]=eb,D[38]=em,D[39]=r,D[40]=Q,D[41]=ee,D[42]=er,D[43]=es,D[44]=T):T=D[44];let ey=T;D[45]===Symbol.for("react.memo_cache_sentinel")?(A=e=>{let t=e.currentTarget;if(document.activeElement===t&&"ArrowRight"===e.key){ec("first"),ed(!0),ep(!0);return}},D[45]=A):A=D[45];let ew=A,ex="button"===P?ef:void 0,e$="button"!==P?ef:void 0,ek=!ef&&eu?"":void 0,eS=z(q),ej="button"===P?"button":void 0;return D[46]!==t||D[47]!==J?(M=t&&(0,i.jsxs)(tQ,{size:J,children:[(0,l.isValidElement)(t)&&t,(0,d.isValidElementType)(t)&&(0,i.jsx)(t,{})]}),D[46]=t,D[47]=J,D[48]=M):M=D[48],D[49]!==J||D[50]!==v?(F=(0,i.jsx)(tK,{flex:1,children:(0,i.jsx)(tQ,{size:J,textOverflow:"ellipsis",weight:"medium",children:v})}),D[49]=J,D[50]=v,D[51]=F):F=D[51],D[52]===Symbol.for("react.memo_cache_sentinel")?(O=(0,i.jsx)(c.vKP,{}),D[52]=O):O=D[52],D[53]!==J?(B=(0,i.jsx)(tQ,{size:J,children:O}),D[53]=J,D[54]=B):B=D[54],D[55]!==V||D[56]!==G||D[57]!==M||D[58]!==F||D[59]!==B?(W=(0,i.jsxs)(t3,{gap:G,padding:V,children:[M,F,B]}),D[55]=V,D[56]=G,D[57]=M,D[58]=F,D[59]=B,D[60]=W):W=D[60],D[61]!==P||D[62]!==eg||D[63]!==eh||D[64]!==u||D[65]!==Y||D[66]!==ex||D[67]!==e$||D[68]!==ek||D[69]!==eS||D[70]!==ej||D[71]!==W||D[72]!==X?(H=(0,i.jsx)(nN,{"data-as":P,"data-ui":"MenuGroup",forwardedAs:P,...u,"aria-pressed":ex,"data-pressed":e$,"data-selected":ek,$radius:eS,$tone:X,$scheme:Y,onClick:eg,onKeyDown:ew,onMouseEnter:eh,ref:ea,tabIndex:-1,type:ej,children:W}),D[61]=P,D[62]=eg,D[63]=eh,D[64]=u,D[65]=Y,D[66]=ex,D[67]=e$,D[68]=ek,D[69]=eS,D[70]=ej,D[71]=W,D[72]=X,D[73]=H):H=D[73],D[74]!==ey||D[75]!==el||D[76]!==s||D[77]!==H?(L=(0,i.jsx)(rd,{...s,content:ey,"data-ui":"MenuGroup__popover",open:el,children:H}),D[74]=ey,D[75]=el,D[76]=s,D[77]=H,D[78]=L):L=D[78],L}nN.displayName="Selectable",nT.displayName="MenuGroup";let nA=(0,l.forwardRef)(function(e,t){let o,r,n,s,c,u,f,p,h,m,g,b,v,y,w,x,$,k,S,j,C,I,R,E,N,_,T,A,M,F,O,B,W;let H=(0,a.c)(74);H[0]!==e?({as:x,children:n,disabled:s,fontSize:$,hotkeys:c,icon:o,iconRight:r,onClick:u,padding:k,paddingX:g,paddingY:b,paddingTop:m,paddingRight:h,paddingBottom:f,paddingLeft:p,pressed:v,radius:S,selected:w,space:j,text:I,tone:C,...y}=e,H[0]=e,H[1]=o,H[2]=r,H[3]=n,H[4]=s,H[5]=c,H[6]=u,H[7]=f,H[8]=p,H[9]=h,H[10]=m,H[11]=g,H[12]=b,H[13]=v,H[14]=y,H[15]=w,H[16]=x,H[17]=$,H[18]=k,H[19]=S,H[20]=j,H[21]=C,H[22]=I):(o=H[1],r=H[2],n=H[3],s=H[4],c=H[5],u=H[6],f=H[7],p=H[8],h=H[9],m=H[10],g=H[11],b=H[12],v=H[13],y=H[14],w=H[15],x=H[16],$=H[17],k=H[18],S=H[19],j=H[20],C=H[21],I=H[22]);let L=void 0===x?"button":x,D=void 0===$?1:$,P=void 0===k?3:k,J=void 0===S?2:S,V=void 0===j?3:j,q=void 0===C?"default":C,{scheme:G}=eT(),X=n_(),{activeElement:U,mount:Y,onItemClick:K,onItemMouseEnter:Z,onItemMouseLeave:Q}=X,ee=Z??X.onMouseEnter,et=Q??X.onMouseLeave,[eo,er]=(0,l.useState)(null),en=!!U&&U===eo,ei=(0,l.useRef)(null);H[23]===Symbol.for("react.memo_cache_sentinel")?(R=()=>ei.current,H[23]=R):R=H[23],(0,l.useImperativeHandle)(t,R),H[24]!==Y||H[25]!==eo||H[26]!==w?(E=()=>Y(eo,w),N=[Y,eo,w],H[24]=Y,H[25]=eo,H[26]=w,H[27]=E,H[28]=N):(E=H[27],N=H[28]),(0,l.useEffect)(E,N),H[29]!==s||H[30]!==u||H[31]!==K?(_=e=>{s||(u&&u(e),K&&K())},H[29]=s,H[30]=u,H[31]=K,H[32]=_):_=H[32];let ea=_;H[33]!==P||H[34]!==f||H[35]!==p||H[36]!==h||H[37]!==m||H[38]!==g||H[39]!==b?(A={padding:P,paddingX:g,paddingY:b,paddingTop:m,paddingRight:h,paddingBottom:f,paddingLeft:p},H[33]=P,H[34]=f,H[35]=p,H[36]=h,H[37]=m,H[38]=g,H[39]=b,H[40]=A):A=H[40],T=A;let el=z(D);H[41]!==el?(M=el.map(nM),H[41]=el,H[42]=M):M=H[42];let ed=M;H[43]===Symbol.for("react.memo_cache_sentinel")?(F=e=>{ei.current=e,er(e)},H[43]=F):F=H[43];let es=F,ec="button"===L&&v,eu="button"!==L&&v?"":void 0,ef=en?"":void 0,ep=s?"":void 0,eh=z(J),em=z(0),eg=s?"default":q,eb="button"===L?"button":void 0;return H[44]!==o||H[45]!==r||H[46]!==D||H[47]!==c||H[48]!==ed||H[49]!==T||H[50]!==V||H[51]!==I?(O=(o||I||r)&&(0,i.jsxs)(t3,{as:"span",gap:V,align:"center",...T,children:[o&&(0,i.jsxs)(tQ,{size:D,children:[(0,l.isValidElement)(o)&&o,(0,d.isValidElementType)(o)&&(0,i.jsx)(o,{})]}),I&&(0,i.jsx)(tK,{flex:1,children:(0,i.jsx)(tQ,{size:D,textOverflow:"ellipsis",weight:"medium",children:I})}),c&&(0,i.jsx)(n$,{fontSize:ed,keys:c,style:{marginTop:-4,marginBottom:-4}}),r&&(0,i.jsxs)(tQ,{size:D,children:[(0,l.isValidElement)(r)&&r,(0,d.isValidElementType)(r)&&(0,i.jsx)(r,{})]})]}),H[44]=o,H[45]=r,H[46]=D,H[47]=c,H[48]=ed,H[49]=T,H[50]=V,H[51]=I,H[52]=O):O=H[52],H[53]!==n||H[54]!==T?(B=n&&(0,i.jsx)(tK,{as:"span",...T,children:n}),H[53]=n,H[54]=T,H[55]=B):B=H[55],H[56]!==L||H[57]!==s||H[58]!==ea||H[59]!==ee||H[60]!==et||H[61]!==y||H[62]!==G||H[63]!==ec||H[64]!==eu||H[65]!==ef||H[66]!==ep||H[67]!==eh||H[68]!==em||H[69]!==eg||H[70]!==eb||H[71]!==O||H[72]!==B?(W=(0,i.jsxs)(nN,{"data-ui":"MenuItem",role:"menuitem",...y,"aria-pressed":ec,"data-pressed":eu,"data-selected":ef,"data-disabled":ep,forwardedAs:L,$radius:eh,$padding:em,$tone:eg,$scheme:G,disabled:s,onClick:ea,onMouseEnter:ee,onMouseLeave:et,ref:es,tabIndex:-1,type:eb,children:[O,B]}),H[56]=L,H[57]=s,H[58]=ea,H[59]=ee,H[60]=et,H[61]=y,H[62]=G,H[63]=ec,H[64]=eu,H[65]=ef,H[66]=ep,H[67]=eh,H[68]=em,H[69]=eg,H[70]=eb,H[71]=O,H[72]=B,H[73]=W):W=H[73],W});function nM(e){return e-1}nA.displayName="ForwardRef(MenuItem)";let nF=(0,s.i7)`
  0% {
    background-position: 100%;
  }
  100% {
    background-position: -100%;
  }
`,nO=(0,s.AH)`
  background-image: linear-gradient(
    to right,
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-to),
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-from),
    var(--card-skeleton-color-from)
  );
  background-position: 100%;
  background-size: 200% 100%;
  background-attachment: fixed;
  animation-name: ${nF};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 2000ms;
`,nB=(0,s.AH)`
  opacity: ${({$visible:e})=>e?1:0};
  transition: opacity 200ms ease-in;

  @media screen and (prefers-reduced-motion: no-preference) {
    ${({$animated:e})=>e?nO:(0,s.AH)`
            background-color: var(--card-skeleton-color-from);
          `}
  }

  @media screen and (prefers-reduced-motion: reduce) {
    background-color: var(--card-skeleton-color-from);
  }
`,nW=(0,s.I4)(tK).withConfig({displayName:"StyledSkeleton",componentId:"sc-ebtpni-0"})(tE,nB),nH=(0,l.forwardRef)(function(e,t){let o,r,n,d,s,c,u;let f=(0,a.c)(14);f[0]!==e?({animated:d,delay:o,radius:r,...n}=e,f[0]=e,f[1]=o,f[2]=r,f[3]=n,f[4]=d):(o=f[1],r=f[2],n=f[3],d=f[4]);let p=void 0!==d&&d,[h,m]=(0,l.useState)(!o);f[5]!==o?(s=()=>{if(!o)return m(!0);let e=setTimeout(()=>{m(!0)},o);return()=>{clearTimeout(e)}},c=[o],f[5]=o,f[6]=s,f[7]=c):(s=f[6],c=f[7]),(0,l.useEffect)(s,c);let g=z(r);return f[8]!==p||f[9]!==t||f[10]!==n||f[11]!==g||f[12]!==h?(u=(0,i.jsx)(nW,{...n,$animated:p,$radius:g,$visible:h,ref:t}),f[8]=p,f[9]=t,f[10]=n,f[11]=g,f[12]=h,f[13]=u):u=f[13],u});nH.displayName="ForwardRef(Skeleton)";let nL=(0,s.I4)(nH).withConfig({displayName:"StyledSkeleton",componentId:"sc-2p7a1v-0"})(e=>{let{$size:t,$style:o}=e,{font:r,media:i}=(0,n.JW)(e.theme),a=r[o];return j(i,t,e=>{let t=a.sizes[e];return{height:t.lineHeight-t.ascenderHeight-t.descenderHeight}})}),nD=(0,l.forwardRef)(function(e,t){let o,r,n;let l=(0,a.c)(7);l[0]!==e?({size:r,...o}=e,l[0]=e,l[1]=o,l[2]=r):(o=l[1],r=l[2]);let d=z(void 0===r?2:r);return l[3]!==d||l[4]!==t||l[5]!==o?(n=(0,i.jsx)(nL,{...o,$size:d,ref:t,$style:"text"}),l[3]=d,l[4]=t,l[5]=o,l[6]=n):n=l[6],n});nD.displayName="ForwardRef(TextSkeleton)",(0,l.forwardRef)(function(e,t){let o,r,n;let l=(0,a.c)(7);l[0]!==e?({size:r,...o}=e,l[0]=e,l[1]=o,l[2]=r):(o=l[1],r=l[2]);let d=z(void 0===r?2:r);return l[3]!==d||l[4]!==t||l[5]!==o?(n=(0,i.jsx)(nL,{...o,$size:d,ref:t,$style:"label"}),l[3]=d,l[4]=t,l[5]=o,l[6]=n):n=l[6],n}).displayName="ForwardRef(LabelSkeleton)",(0,l.forwardRef)(function(e,t){let o,r,n;let l=(0,a.c)(7);l[0]!==e?({size:r,...o}=e,l[0]=e,l[1]=o,l[2]=r):(o=l[1],r=l[2]);let d=z(void 0===r?2:r);return l[3]!==d||l[4]!==t||l[5]!==o?(n=(0,i.jsx)(nL,{...o,$size:d,ref:t,$style:"heading"}),l[3]=d,l[4]=t,l[5]=o,l[6]=n):n=l[6],n}).displayName="ForwardRef(HeadingSkeleton)",(0,l.forwardRef)(function(e,t){let o,r,n;let l=(0,a.c)(7);l[0]!==e?({size:r,...o}=e,l[0]=e,l[1]=o,l[2]=r):(o=l[1],r=l[2]);let d=z(void 0===r?2:r);return l[3]!==d||l[4]!==t||l[5]!==o?(n=(0,i.jsx)(nL,{...o,$size:d,ref:t,$style:"code"}),l[3]=d,l[4]=t,l[5]=o,l[6]=n):n=l[6],n}).displayName="ForwardRef(CodeSkeleton)";let nP=(0,s.I4)(ot).withConfig({displayName:"CustomButton",componentId:"sc-1kns779-0"})`max-width:100%;`,nJ=(0,l.forwardRef)(function(e,t){let o,r,n,d,s,c,u,f,p,h,m,g,b,v,y,w;let x=(0,a.c)(30);x[0]!==e?({icon:r,id:n,focused:o,fontSize:p,label:d,onClick:s,onFocus:c,padding:h,selected:f,...u}=e,x[0]=e,x[1]=o,x[2]=r,x[3]=n,x[4]=d,x[5]=s,x[6]=c,x[7]=u,x[8]=f,x[9]=p,x[10]=h):(o=x[1],r=x[2],n=x[3],d=x[4],s=x[5],c=x[6],u=x[7],f=x[8],p=x[9],h=x[10]);let $=void 0===p?1:p,k=void 0===h?2:h,S=(0,l.useRef)(null),j=(0,l.useRef)(!1);x[11]===Symbol.for("react.memo_cache_sentinel")?(m=()=>S.current,x[11]=m):m=x[11],(0,l.useImperativeHandle)(t,m),x[12]===Symbol.for("react.memo_cache_sentinel")?(g=()=>{j.current=!1},x[12]=g):g=x[12];let C=g;x[13]!==c?(b=e=>{j.current=!0,c&&c(e)},x[13]=c,x[14]=b):b=x[14];let I=b;x[15]!==o?(v=()=>{o&&!j.current&&(S.current&&S.current.focus(),j.current=!0)},y=[o],x[15]=o,x[16]=v,x[17]=y):(v=x[16],y=x[17]),(0,l.useEffect)(v,y);let R=f?"true":"false",E=f?0:-1;return x[18]!==$||x[19]!==I||x[20]!==r||x[21]!==n||x[22]!==d||x[23]!==s||x[24]!==k||x[25]!==u||x[26]!==f||x[27]!==R||x[28]!==E?(w=(0,i.jsx)(nP,{"data-ui":"Tab",...u,"aria-selected":R,fontSize:$,icon:r,id:n,mode:"bleed",onClick:s,onBlur:C,onFocus:I,padding:k,ref:S,role:"tab",selected:f,tabIndex:E,text:d,type:"button"}),x[18]=$,x[19]=I,x[20]=r,x[21]=n,x[22]=d,x[23]=s,x[24]=k,x[25]=u,x[26]=f,x[27]=R,x[28]=E,x[29]=w):w=x[29],w});nJ.displayName="ForwardRef(Tab)";let nV=(0,s.I4)(ov).withConfig({displayName:"CustomInline",componentId:"sc-5cm04m-0"})`& > div{display:inline-block;vertical-align:middle;max-width:100%;box-sizing:border-box;}`,nq=(0,l.forwardRef)(function(e,t){let o,r,n,d,s;let c=(0,a.c)(15);c[0]!==e?({children:o,...r}=e,c[0]=e,c[1]=o,c[2]=r):(o=c[1],r=c[2]);let[u,f]=(0,l.useState)(-1);if(c[3]!==o||c[4]!==u){let e;let t=l.Children.toArray(o).filter(l.isValidElement);c[6]!==u?(e=(e,t)=>(0,l.cloneElement)(e,{focused:u===t,key:t,onFocus:()=>f(t)}),c[6]=u,c[7]=e):e=c[7],n=t.map(e),c[3]=o,c[4]=u,c[5]=n}else n=c[5];let p=n,h=p.length;c[8]!==h?(d=e=>{"ArrowLeft"===e.key&&f(e=>(e+h-1)%h),"ArrowRight"===e.key&&f(e=>(e+1)%h)},c[8]=h,c[9]=d):d=c[9];let m=d;return c[10]!==m||c[11]!==t||c[12]!==r||c[13]!==p?(s=(0,i.jsx)(nV,{"data-ui":"TabList",...r,onKeyDown:m,ref:t,role:"tablist",children:p}),c[10]=m,c[11]=t,c[12]=r,c[13]=p,c[14]=s):s=c[14],s});nq.displayName="ForwardRef(TabList)";let nG=(0,l.forwardRef)(function(e,t){let o,r,n;let l=(0,a.c)(9);l[0]!==e?({flex:o,...r}=e,l[0]=e,l[1]=o,l[2]=r):(o=l[1],r=l[2]);let d=void 0===e.tabIndex?0:e.tabIndex;return l[3]!==o||l[4]!==e.children||l[5]!==t||l[6]!==r||l[7]!==d?(n=(0,i.jsx)(tK,{"data-ui":"TabPanel",...r,flex:o,ref:t,role:"tabpanel",tabIndex:d,children:e.children}),l[3]=o,l[4]=e.children,l[5]=t,l[6]=r,l[7]=d,l[8]=n):n=l[8],n});nG.displayName="ForwardRef(TabPanel)";let nX=(0,s.I4)(t3).withConfig({displayName:"TextBox",componentId:"sc-1rr7rxo-0"})`overflow-x:auto;`,nU=(0,s.i7)`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`,nY={error:"critical",warning:"caution",success:"positive",info:"neutral"},nK={error:"critical",warning:"caution",success:"positive",info:"neutral"},nZ={error:"alert",warning:"alert",success:"alert",info:"alert"},nQ=(0,s.I4)(or).withConfig({displayName:"StyledToast",componentId:"sc-1icz8ea-0"})(function(e){let{color:t}=(0,n.JW)(e.theme),o=t.button.default[e.tone].enabled.bg;return e.$duration?(0,s.AH)`
    pointer-events: all;
    width: 100%;
    position: relative;
    overflow: hidden;
    overflow: clip;
    padding-bottom: ${2}px;
    &::before {
      content: '';
      position: absolute;
      bottom: 0px;
      height: ${2}px;
      background: ${o};
      animation-name: ${nU};
      animation-duration: ${e.$duration}ms;
      animation-fill-mode: both;
    }

    & > * {
      opacity: var(${$}, 1);
      will-change: opacity;
    }
  `:(0,s.AH)`
      pointer-events: all;
      & > * {
        opacity: var(${$}, 1);
        will-change: opacity;
      }
    `});function n0(e){let t,o,r,n,l,d,s,u,f,p,h,m,g,b;let v=(0,a.c)(30);v[0]!==e?({closable:t,description:o,duration:r,onClose:n,radius:s,title:u,status:d,...l}=e,v[0]=e,v[1]=t,v[2]=o,v[3]=r,v[4]=n,v[5]=l,v[6]=d,v[7]=s,v[8]=u):(t=v[1],o=v[2],r=v[3],n=v[4],l=v[5],d=v[6],s=v[7],u=v[8]);let y=void 0===s?3:s,w=d?nY[d]:"default",x=d?nK[d]:"default",$=d?nZ[d]:"status";return v[9]!==u?(f=u&&(0,i.jsx)(tQ,{size:1,weight:"medium",children:u}),v[9]=u,v[10]=f):f=v[10],v[11]!==o?(p=o&&(0,i.jsx)(tQ,{muted:!0,size:1,children:o}),v[11]=o,v[12]=p):p=v[12],v[13]!==f||v[14]!==p?(h=(0,i.jsx)(nX,{flex:1,padding:3,children:(0,i.jsxs)(r$,{space:3,children:[f,p]})}),v[13]=f,v[14]=p,v[15]=h):h=v[15],v[16]!==x||v[17]!==t||v[18]!==n?(m=t&&(0,i.jsx)(tK,{padding:1,children:(0,i.jsx)(ot,{as:"button",icon:c.USm,mode:"bleed",padding:2,tone:x,onClick:n,style:{verticalAlign:"top"}})}),v[16]=x,v[17]=t,v[18]=n,v[19]=m):m=v[19],v[20]!==h||v[21]!==m?(g=(0,i.jsxs)(t3,{align:"flex-start",children:[h,m]}),v[20]=h,v[21]=m,v[22]=g):g=v[22],v[23]!==w||v[24]!==r||v[25]!==y||v[26]!==l||v[27]!==$||v[28]!==g?(b=(0,i.jsx)(nQ,{"data-ui":"Toast",role:$,...l,marginTop:3,radius:y,shadow:2,tone:w,$duration:r,children:g}),v[23]=w,v[24]=r,v[25]=y,v[26]=l,v[27]=$,v[28]=g,v[29]=b):b=v[29],b}function n1(){return!1}function n2(){return!0}n0.displayName="Toast";let n3=()=>()=>{},n4=ez("@sanity/ui/context/toast",null),n5=0,n6=(0,s.I4)(o0).withConfig({displayName:"StyledToastProvider",componentId:"sc-17mn6j-0"})`position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;`,n7=s.I4.div.withConfig({displayName:"ToastContainer",componentId:"sc-17mn6j-1"})`box-sizing:border-box;position:absolute;right:0;bottom:0;max-width:420px;width:100%;`;function n8(e){let t,o,r,n,d,s,c,u,f,p,g,b,v,y,w;let x=(0,a.c)(24),{children:k,padding:S,paddingX:j,paddingY:C,zOffset:I}=e,R=void 0===S?4:S;x[0]===Symbol.for("react.memo_cache_sentinel")?(t=[],x[0]=t):t=x[0];let[E,z]=(0,l.useState)(t);x[1]===Symbol.for("react.memo_cache_sentinel")?(o={},x[1]=o):o=x[1];let N=(0,l.useRef)(o),_=(0,l.useSyncExternalStore)(n3,n2,n1),T=eL();x[2]===Symbol.for("react.memo_cache_sentinel")?(n={opacity:0,[$]:0,y:32,scale:.25,willChange:"transform"},d=[0,1,1],x[2]=n,x[3]=d):(n=x[2],d=x[3]),x[4]===Symbol.for("react.memo_cache_sentinel")?(s={opacity:d,[$]:[0,0,1],y:0,scale:1},c=[1,1,0],x[4]=s,x[5]=c):(s=x[4],c=x[5]),x[6]===Symbol.for("react.memo_cache_sentinel")?(u=[1,0,0],x[6]=u):u=x[6];let A=T?0:.2;return x[7]!==A?(f={initial:n,animate:s,exit:{opacity:c,[$]:u,scale:.5,transition:{duration:A}}},x[7]=A,x[8]=f):f=x[8],r=f,x[9]===Symbol.for("react.memo_cache_sentinel")?(g={version:0,push:e=>{let t=e=>(0,l.startTransition)(()=>z(e)),o=e.id||String(n5++),r=e.duration||5e3,n=()=>{let e=N.current[o]?.timeoutId;t(e=>{let t=e.findIndex(e=>e.id===o);if(t>-1){let o=e.slice(0);return o.splice(t,1),o}return e}),void 0!==e&&(clearTimeout(e),delete N.current[o])};return t(t=>t.filter(e=>e.id!==o).concat([{dismiss:n,id:o,params:{...e,duration:r}}])),N.current[o]&&(clearTimeout(N.current[o].timeoutId),delete N.current[o]),N.current[o]={timeoutId:setTimeout(n,r)},o}},x[9]=g):g=x[9],p=g,x[10]===Symbol.for("react.memo_cache_sentinel")?(b=()=>()=>{for(let{timeoutId:e}of Object.values(N.current))clearTimeout(e);N.current={}},v=[],x[10]=b,x[11]=v):(b=x[10],v=x[11]),(0,l.useEffect)(b,v),x[12]!==_||x[13]!==R||x[14]!==j||x[15]!==C||x[16]!==T||x[17]!==E||x[18]!==r||x[19]!==I?(y=_&&(0,i.jsx)(n6,{"data-ui":"ToastProvider",zOffset:I,children:(0,i.jsx)(n7,{children:(0,i.jsx)(tK,{padding:R,paddingX:j,paddingY:C,children:(0,i.jsx)(m.N,{initial:!1,children:E.map(e=>{let{dismiss:t,id:o,params:n}=e;return(0,i.jsx)(h.P.div,{layout:"position",initial:"initial",animate:"animate",exit:"exit",variants:r,transition:T?{duration:0}:{type:"spring",damping:30,stiffness:400},children:(0,i.jsx)(n0,{closable:n.closable,description:n.description,onClose:t,status:n.status,title:n.title,duration:n.duration})},o)})})})})}),x[12]=_,x[13]=R,x[14]=j,x[15]=C,x[16]=T,x[17]=E,x[18]=r,x[19]=I,x[20]=y):y=x[20],x[21]!==k||x[22]!==y?(w=(0,i.jsxs)(n4.Provider,{value:p,children:[k,y]}),x[21]=k,x[22]=y,x[23]=w):w=x[23],w}function n9(){let e=(0,l.useContext)(n4);if(!e)throw Error("useToast(): missing context value");if(!o_(e)||0!==e.version)throw Error("useToast(): the context value is not compatible");return e}function ie(e){if("treeitem"===e.getAttribute("role")&&e.focus(),"none"===e.getAttribute("role")){let t=e.firstChild;t&&t instanceof HTMLElement&&t.focus()}}n8.displayName="ToastProvider";let it=ez("@sanity/ui/context/tree",null);function io(){let e=(0,l.useContext)(it);if(!e)throw Error("Tree: missing context value");return e}(0,l.memo)((0,l.forwardRef)(function(e,t){let o,r,n,d,s,c,u,f,p,h,m,g,b,v,y,w,x,$,k,S,j,C,I;let R=(0,a.c)(37);R[0]!==e?({children:o,space:d,onFocus:r,...n}=e,R[0]=e,R[1]=o,R[2]=r,R[3]=n,R[4]=d):(o=R[1],r=R[2],n=R[3],d=R[4]);let E=void 0===d?1:d,z=(0,l.useRef)(null),[N,_]=(0,l.useState)(null),T=(0,l.useRef)(N);R[5]===Symbol.for("react.memo_cache_sentinel")?(c=[],R[5]=c):c=R[5],s=c,R[6]===Symbol.for("react.memo_cache_sentinel")?(u=[],R[6]=u):u=R[6];let[A,M]=(0,l.useState)(u);R[7]===Symbol.for("react.memo_cache_sentinel")?(f={},R[7]=f):f=R[7];let[F,O]=(0,l.useState)(f),B=(0,l.useRef)(F);R[8]===Symbol.for("react.memo_cache_sentinel")?(p=()=>z.current,R[8]=p):p=R[8],(0,l.useImperativeHandle)(t,p),R[9]!==N?(h=()=>{T.current=N},m=[N],R[9]=N,R[10]=h,R[11]=m):(h=R[10],m=R[11]),(0,l.useEffect)(h,m),R[12]!==F?(g=()=>{B.current=F},b=[F],R[12]=F,R[13]=g,R[14]=b):(g=R[13],b=R[14]),(0,l.useEffect)(g,b),R[15]===Symbol.for("react.memo_cache_sentinel")?(v=(e,t,o,r)=>(O(r=>({...r,[t]:{element:e,expanded:o}})),r&&_(e),()=>{O(e=>{let o={...e};return delete o[t],o})}),R[15]=v):v=R[15];let W=v;R[16]===Symbol.for("react.memo_cache_sentinel")?(y=(e,t)=>{O(o=>{let r=o[e];return r?{...o,[e]:{...r,expanded:t}}:o})},R[16]=y):y=R[16];let H=y,L=N||A[0]||null;R[17]!==E||R[18]!==F||R[19]!==L?(x={version:0,focusedElement:L,level:0,path:s,registerItem:W,setExpanded:H,setFocusedElement:_,space:E,state:F},R[17]=E,R[18]=F,R[19]=L,R[20]=x):x=R[20],w=x,R[21]!==A?($=e=>{if(T.current){if("ArrowDown"===e.key){e.preventDefault();let t=function(e,t,o){let r=t.indexOf(o),n=t.slice(r),i=t.length;for(let t=1;t<i;t+=1){if(!n[t])continue;let o=n[t].getAttribute("data-tree-key");if(!o)continue;let r=o.split("/");r.pop();let i=[],a=!0;for(let t=0;t<r.length;t+=1){i.push(r[t]);let o=i.join("/");if(!e[o]?.expanded){a=!1;break}}if(a)return n[t]}return null}(B.current,A,T.current);t&&(ie(t),_(t));return}if("ArrowUp"===e.key){e.preventDefault();let t=function(e,t,o){let r=t.indexOf(o),n=t.slice(0,r),i=n.length;for(let t=i-1;t>=0;t-=1){let o=n[t].getAttribute("data-tree-key");if(!o)continue;let r=o.split("/");r.pop();let i=[],a=!0;for(let t=0;t<r.length;t+=1){i.push(r[t]);let o=i.join("/");if(!e[o]?.expanded){a=!1;break}}if(a)return n[t]}return null}(B.current,A,T.current);t&&(ie(t),_(t));return}if("ArrowLeft"===e.key){e.preventDefault();let t=T.current.getAttribute("data-tree-key");if(!t)return;let o=B.current[t];if(!o)return;if(o.expanded)O(e=>{let o=e[t];return o?{...e,[t]:{...o,expanded:!1}}:e});else{let e=t.split("/");e.pop();let o=e.join("/"),r=o&&B.current[o];r&&(r.element.focus(),_(r.element))}return}if("ArrowRight"===e.key){e.preventDefault();let t=T.current.getAttribute("data-tree-key");if(!t)return;B.current[t]?.expanded||O(e=>{let o=e[t];return o?{...e,[t]:{...o,expanded:!0}}:e});return}}},R[21]=A,R[22]=$):$=R[22];let D=$;R[23]!==r?(k=e=>{_(e.target),r?.(e)},R[23]=r,R[24]=k):k=R[24];let P=k;return R[25]===Symbol.for("react.memo_cache_sentinel")?(S=()=>{z.current&&M(Array.from(z.current.querySelectorAll('[data-ui="TreeItem"]')))},R[25]=S):S=R[25],R[26]!==o?(j=[o],R[26]=o,R[27]=j):j=R[27],(0,l.useEffect)(S,j),R[28]!==o||R[29]!==P||R[30]!==D||R[31]!==n||R[32]!==E?(C=(0,i.jsx)(r$,{as:"ul","data-ui":"Tree",...n,onFocus:P,onKeyDown:D,ref:z,role:"tree",space:E,children:o}),R[28]=o,R[29]=P,R[30]=D,R[31]=n,R[32]=E,R[33]=C):C=R[33],R[34]!==w||R[35]!==C?(I=(0,i.jsx)(it.Provider,{value:w,children:C}),R[34]=w,R[35]=C,R[36]=I):I=R[36],I})).displayName="Memo(ForwardRef(Tree))";let ir=(0,l.memo)(function(e){let t,o,r,n;let l=(0,a.c)(9);l[0]!==e?({children:t,expanded:r,...o}=e,l[0]=e,l[1]=t,l[2]=o,l[3]=r):(t=l[1],o=l[2],r=l[3]);let d=void 0!==r&&r,s=io(),c=!d;return l[4]!==t||l[5]!==o||l[6]!==c||l[7]!==s.space?(n=(0,i.jsx)(r$,{as:"ul","data-ui":"TreeGroup",...o,hidden:c,marginTop:s.space,role:"group",space:s.space,children:t}),l[4]=t,l[5]=o,l[6]=c,l[7]=s.space,l[8]=n):n=l[8],n}),ii=(0,l.memo)(s.I4.li.withConfig({displayName:"StyledTreeItem",componentId:"sc-iiskig-0"})(function(){return(0,s.AH)`
    &[role='none'] > [role='treeitem'] {
      outline: none;
      cursor: default;
      border-radius: 3px;

      background-color: var(--card-bg-color);
      color: var(--treeitem-fg-color);

      &:focus {
        position: relative;
      }
    }

    &[role='treeitem'] {
      outline: none;

      & > div {
        cursor: default;
        border-radius: 3px;

        background-color: var(--card-bg-color);
        color: var(--treeitem-fg-color);
      }

      &:focus > div {
        position: relative;
      }
    }
  `},function(e){let{color:t}=(0,n.JW)(e.theme),o=t.selectable.default;return(0,s.AH)`
    &[role='none'] {
      & > [role='treeitem'] {
        ${t7(t,o.enabled)}
      }

      &[data-selected] > [role='treeitem'] {
        ${t7(t,o.pressed)}
      }

      @media (hover: hover) {
        &:not([data-selected]) > [role='treeitem']:not(:focus):hover {
          ${t7(t,o.hovered)}
        }

        & > [role='treeitem']:focus {
          ${t7(t,o.selected)}
        }
      }
    }

    &[role='treeitem'] {
      & > [data-ui='TreeItem__box'] {
        ${t7(t,o.enabled)}
      }

      &[data-selected] > [data-ui='TreeItem__box'] {
        ${t7(t,o.pressed)}
      }

      @media (hover: hover) {
        &:not([data-selected]):not(:focus) > [data-ui='TreeItem__box']:hover {
          ${t7(t,o.hovered)}
        }

        &:focus > [data-ui='TreeItem__box'] {
          ${t7(t,o.selected)}
        }
      }
    }
  `})),ia=(0,s.I4)(tK).attrs({forwardedAs:"a"}).withConfig({displayName:"TreeItemBox",componentId:"sc-iiskig-1"})(function(e){let{$level:t}=e,{space:o}=(0,n.JW)(e.theme);return(0,s.AH)`
    padding-left: ${S(o[2]*t)};

    &[data-as='a'] {
      text-decoration: none;
    }
  `}),il=(0,s.I4)(tQ).withConfig({displayName:"ToggleArrowText",componentId:"sc-iiskig-2"})`& > svg{transition:transform 100ms;}`;(0,l.memo)(function(e){let{children:t,expanded:o=!1,fontSize:r=1,href:n,icon:a,id:d,linkAs:s,muted:u,onClick:f,padding:p=2,selected:h=!1,space:m=2,text:g,weight:b,...v}=e,y=(0,l.useRef)(null),w=(0,l.useRef)(null),x=io(),{path:$,registerItem:k,setExpanded:S,setFocusedElement:j}=x,C=(0,l.useId)(),I=d||C,R=(0,l.useMemo)(()=>$.concat([I||""]),[I,$]),E=R.join("/"),z=x.state[E],N=x.focusedElement===y.current,_=z?.expanded===void 0?o:z?.expanded||!1,T=x.focusedElement&&x.focusedElement===y.current?0:-1,A=(0,l.useMemo)(()=>({...x,level:x.level+1,path:R}),[R,x]),M=(0,l.useCallback)(e=>{f&&f(e);let t=e.target;t instanceof HTMLElement&&("TreeItem"===t.getAttribute("data-ui")||t.closest('[data-ui="TreeItem__box"]'))&&(e.stopPropagation(),S(E,!_),j(y.current))},[_,E,f,S,j]),F=(0,l.useCallback)(e=>{N&&"Enter"===e.key&&(w.current||y.current)?.click()},[N]);(0,l.useEffect)(()=>{if(y.current)return k(y.current,R.join("/"),_,h)},[_,R,k,h]);let O=(0,i.jsxs)(t3,{padding:p,children:[(0,i.jsxs)(tK,{marginRight:m,style:{visibility:a||t?"visible":"hidden",pointerEvents:"none"},children:[a&&(0,i.jsx)(tQ,{muted:u,size:r,weight:b,children:(0,i.jsx)(a,{})}),!a&&(0,i.jsx)(il,{muted:u,size:r,weight:b,children:(0,i.jsx)(c.nVd,{style:{transform:_?"rotate(90deg)":void 0}})})]}),(0,i.jsx)(tK,{flex:1,children:(0,i.jsx)(tQ,{muted:u,size:r,textOverflow:"ellipsis",weight:b,children:g})})]});return n?(0,i.jsxs)(ii,{"data-selected":h?"":void 0,"data-tree-id":I,"data-tree-key":E,"data-ui":"TreeItem",...v,onClick:M,ref:y,role:"none",children:[(0,i.jsx)(ia,{$level:x.level,"aria-expanded":_,as:s,"data-ui":"TreeItem__box",href:n,ref:w,role:"treeitem",tabIndex:T,children:O}),(0,i.jsx)(it.Provider,{value:A,children:t&&(0,i.jsx)(ir,{hidden:!_,children:t})})]}):(0,i.jsxs)(ii,{"data-selected":h?"":void 0,"data-ui":"TreeItem","data-tree-id":I,"data-tree-key":E,...v,"aria-expanded":_,onClick:M,onKeyDown:F,ref:y,role:"treeitem",tabIndex:T,children:[(0,i.jsx)(ia,{$level:x.level,as:"div","data-ui":"TreeItem__box",children:O}),(0,i.jsx)(it.Provider,{value:A,children:t&&(0,i.jsx)(ir,{expanded:_,children:t})})]})}).displayName="Memo(TreeItem)"}}]);