function RS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function n_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var eo={},PS={get exports(){return eo},set exports(t){eo=t}},cu={},y={},OS={get exports(){return y},set exports(t){y=t}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),AS=Symbol.for("react.portal"),DS=Symbol.for("react.fragment"),MS=Symbol.for("react.strict_mode"),LS=Symbol.for("react.profiler"),FS=Symbol.for("react.provider"),US=Symbol.for("react.context"),$S=Symbol.for("react.forward_ref"),jS=Symbol.for("react.suspense"),zS=Symbol.for("react.memo"),BS=Symbol.for("react.lazy"),jm=Symbol.iterator;function WS(t){return t===null||typeof t!="object"?null:(t=jm&&t[jm]||t["@@iterator"],typeof t=="function"?t:null)}var r_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i_=Object.assign,s_={};function ts(t,e,n){this.props=t,this.context=e,this.refs=s_,this.updater=n||r_}ts.prototype.isReactComponent={};ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function o_(){}o_.prototype=ts.prototype;function Yf(t,e,n){this.props=t,this.context=e,this.refs=s_,this.updater=n||r_}var qf=Yf.prototype=new o_;qf.constructor=Yf;i_(qf,ts.prototype);qf.isPureReactComponent=!0;var zm=Array.isArray,a_=Object.prototype.hasOwnProperty,Qf={current:null},l_={key:!0,ref:!0,__self:!0,__source:!0};function u_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)a_.call(e,r)&&!l_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Fo,type:t,key:s,ref:o,props:i,_owner:Qf.current}}function HS(t,e){return{$$typeof:Fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo}function VS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bm=/\/+/g;function nc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?VS(""+t.key):e.toString(36)}function za(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fo:case AS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+nc(o,0):r,zm(i)?(n="",t!=null&&(n=t.replace(Bm,"$&/")+"/"),za(i,e,n,"",function(u){return u})):i!=null&&(Xf(i)&&(i=HS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Bm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",zm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+nc(s,a);o+=za(s,e,n,l,i)}else if(l=WS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+nc(s,a++),o+=za(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function aa(t,e,n){if(t==null)return t;var r=[],i=0;return za(t,r,"","",function(s){return e.call(n,s,i++)}),r}function GS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xe={current:null},Ba={transition:null},KS={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:Ba,ReactCurrentOwner:Qf};V.Children={map:aa,forEach:function(t,e,n){aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return aa(t,function(){e++}),e},toArray:function(t){return aa(t,function(e){return e})||[]},only:function(t){if(!Xf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};V.Component=ts;V.Fragment=DS;V.Profiler=LS;V.PureComponent=Yf;V.StrictMode=MS;V.Suspense=jS;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KS;V.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=i_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)a_.call(e,l)&&!l_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Fo,type:t.type,key:i,ref:s,props:r,_owner:o}};V.createContext=function(t){return t={$$typeof:US,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:FS,_context:t},t.Consumer=t};V.createElement=u_;V.createFactory=function(t){var e=u_.bind(null,t);return e.type=t,e};V.createRef=function(){return{current:null}};V.forwardRef=function(t){return{$$typeof:$S,render:t}};V.isValidElement=Xf;V.lazy=function(t){return{$$typeof:BS,_payload:{_status:-1,_result:t},_init:GS}};V.memo=function(t,e){return{$$typeof:zS,type:t,compare:e===void 0?null:e}};V.startTransition=function(t){var e=Ba.transition;Ba.transition={};try{t()}finally{Ba.transition=e}};V.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};V.useCallback=function(t,e){return Xe.current.useCallback(t,e)};V.useContext=function(t){return Xe.current.useContext(t)};V.useDebugValue=function(){};V.useDeferredValue=function(t){return Xe.current.useDeferredValue(t)};V.useEffect=function(t,e){return Xe.current.useEffect(t,e)};V.useId=function(){return Xe.current.useId()};V.useImperativeHandle=function(t,e,n){return Xe.current.useImperativeHandle(t,e,n)};V.useInsertionEffect=function(t,e){return Xe.current.useInsertionEffect(t,e)};V.useLayoutEffect=function(t,e){return Xe.current.useLayoutEffect(t,e)};V.useMemo=function(t,e){return Xe.current.useMemo(t,e)};V.useReducer=function(t,e,n){return Xe.current.useReducer(t,e,n)};V.useRef=function(t){return Xe.current.useRef(t)};V.useState=function(t){return Xe.current.useState(t)};V.useSyncExternalStore=function(t,e,n){return Xe.current.useSyncExternalStore(t,e,n)};V.useTransition=function(){return Xe.current.useTransition()};V.version="18.2.0";(function(t){t.exports=V})(OS);const dt=n_(y),nd=RS({__proto__:null,default:dt},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YS=y,qS=Symbol.for("react.element"),QS=Symbol.for("react.fragment"),XS=Object.prototype.hasOwnProperty,JS=YS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZS={key:!0,ref:!0,__self:!0,__source:!0};function c_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)XS.call(e,r)&&!ZS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qS,type:t,key:s,ref:o,props:i,_owner:JS.current}}cu.Fragment=QS;cu.jsx=c_;cu.jsxs=c_;(function(t){t.exports=cu})(PS);const to=eo.Fragment,E=eo.jsx,H=eo.jsxs;var rd={},al={},ek={get exports(){return al},set exports(t){al=t}},gt={},id={},tk={get exports(){return id},set exports(t){id=t}},d_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,D){var M=N.length;N.push(D);e:for(;0<M;){var q=M-1>>>1,Q=N[q];if(0<i(Q,D))N[q]=D,N[M]=Q,M=q;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var D=N[0],M=N.pop();if(M!==D){N[0]=M;e:for(var q=0,Q=N.length,et=Q>>>1;q<et;){var tt=2*(q+1)-1,Ie=N[tt],xe=tt+1,Bt=N[xe];if(0>i(Ie,M))xe<Q&&0>i(Bt,Ie)?(N[q]=Bt,N[xe]=M,q=xe):(N[q]=Ie,N[tt]=M,q=tt);else if(xe<Q&&0>i(Bt,M))N[q]=Bt,N[xe]=M,q=xe;else break e}}return D}function i(N,D){var M=N.sortIndex-D.sortIndex;return M!==0?M:N.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,h=!1,g=!1,_=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=N)r(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function w(N){if(_=!1,v(N),!g)if(n(l)!==null)g=!0,nn(S);else{var D=n(u);D!==null&&zt(w,D.startTime-N)}}function S(N,D){g=!1,_&&(_=!1,m(x),x=-1),h=!0;var M=f;try{for(v(D),d=n(l);d!==null&&(!(d.expirationTime>D)||N&&!Te());){var q=d.callback;if(typeof q=="function"){d.callback=null,f=d.priorityLevel;var Q=q(d.expirationTime<=D);D=t.unstable_now(),typeof Q=="function"?d.callback=Q:d===n(l)&&r(l),v(D)}else r(l);d=n(l)}if(d!==null)var et=!0;else{var tt=n(u);tt!==null&&zt(w,tt.startTime-D),et=!1}return et}finally{d=null,f=M,h=!1}}var k=!1,b=null,x=-1,F=5,U=-1;function Te(){return!(t.unstable_now()-U<F)}function _t(){if(b!==null){var N=t.unstable_now();U=N;var D=!0;try{D=b(!0,N)}finally{D?Ze():(k=!1,b=null)}}else k=!1}var Ze;if(typeof p=="function")Ze=function(){p(_t)};else if(typeof MessageChannel<"u"){var wt=new MessageChannel,_e=wt.port2;wt.port1.onmessage=_t,Ze=function(){_e.postMessage(null)}}else Ze=function(){C(_t,0)};function nn(N){b=N,k||(k=!0,Ze())}function zt(N,D){x=C(function(){N(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,nn(S))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var M=f;f=D;try{return N()}finally{f=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,D){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=f;f=N;try{return D()}finally{f=M}},t.unstable_scheduleCallback=function(N,D,M){var q=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?q+M:q):M=q,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=M+Q,N={id:c++,callback:D,priorityLevel:N,startTime:M,expirationTime:Q,sortIndex:-1},M>q?(N.sortIndex=M,e(u,N),n(l)===null&&N===n(u)&&(_?(m(x),x=-1):_=!0,zt(w,M-q))):(N.sortIndex=Q,e(l,N),g||h||(g=!0,nn(S))),N},t.unstable_shouldYield=Te,t.unstable_wrapCallback=function(N){var D=f;return function(){var M=f;f=D;try{return N.apply(this,arguments)}finally{f=M}}}})(d_);(function(t){t.exports=d_})(tk);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_=y,mt=id;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h_=new Set,no={};function Jr(t,e){$i(t,e),$i(t+"Capture",e)}function $i(t,e){for(no[t]=e,t=0;t<e.length;t++)h_.add(e[t])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sd=Object.prototype.hasOwnProperty,nk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wm={},Hm={};function rk(t){return sd.call(Hm,t)?!0:sd.call(Wm,t)?!1:nk.test(t)?Hm[t]=!0:(Wm[t]=!0,!1)}function ik(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sk(t,e,n,r){if(e===null||typeof e>"u"||ik(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Je(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$e[t]=new Je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$e[e]=new Je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$e[t]=new Je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$e[t]=new Je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$e[t]=new Je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$e[t]=new Je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$e[t]=new Je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$e[t]=new Je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$e[t]=new Je(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jf=/[\-:]([a-z])/g;function Zf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jf,Zf);$e[e]=new Je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jf,Zf);$e[e]=new Je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jf,Zf);$e[e]=new Je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$e[t]=new Je(t,1,!1,t.toLowerCase(),null,!1,!1)});$e.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$e[t]=new Je(t,1,!1,t.toLowerCase(),null,!0,!0)});function eh(t,e,n,r){var i=$e.hasOwnProperty(e)?$e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sk(e,n,i,r)&&(n=null),r||i===null?rk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tn=f_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,la=Symbol.for("react.element"),ui=Symbol.for("react.portal"),ci=Symbol.for("react.fragment"),th=Symbol.for("react.strict_mode"),od=Symbol.for("react.profiler"),p_=Symbol.for("react.provider"),m_=Symbol.for("react.context"),nh=Symbol.for("react.forward_ref"),ad=Symbol.for("react.suspense"),ld=Symbol.for("react.suspense_list"),rh=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),g_=Symbol.for("react.offscreen"),Vm=Symbol.iterator;function ms(t){return t===null||typeof t!="object"?null:(t=Vm&&t[Vm]||t["@@iterator"],typeof t=="function"?t:null)}var he=Object.assign,rc;function Rs(t){if(rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rc=e&&e[1]||""}return`
`+rc+t}var ic=!1;function sc(t,e){if(!t||ic)return"";ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Rs(t):""}function ok(t){switch(t.tag){case 5:return Rs(t.type);case 16:return Rs("Lazy");case 13:return Rs("Suspense");case 19:return Rs("SuspenseList");case 0:case 2:case 15:return t=sc(t.type,!1),t;case 11:return t=sc(t.type.render,!1),t;case 1:return t=sc(t.type,!0),t;default:return""}}function ud(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ci:return"Fragment";case ui:return"Portal";case od:return"Profiler";case th:return"StrictMode";case ad:return"Suspense";case ld:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case m_:return(t.displayName||"Context")+".Consumer";case p_:return(t._context.displayName||"Context")+".Provider";case nh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rh:return e=t.displayName||null,e!==null?e:ud(t.type)||"Memo";case Dn:e=t._payload,t=t._init;try{return ud(t(e))}catch{}}return null}function ak(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ud(e);case 8:return e===th?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function v_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lk(t){var e=v_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ua(t){t._valueTracker||(t._valueTracker=lk(t))}function y_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=v_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cd(t,e){var n=e.checked;return he({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function __(t,e){e=e.checked,e!=null&&eh(t,"checked",e,!1)}function dd(t,e){__(t,e);var n=sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fd(t,e.type,n):e.hasOwnProperty("defaultValue")&&fd(t,e.type,sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Km(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fd(t,e,n){(e!=="number"||ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ps=Array.isArray;function Ti(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+sr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return he({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ym(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(Ps(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sr(n)}}function w_(t,e){var n=sr(e.value),r=sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function E_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?E_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ca,C_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ca=ca||document.createElement("div"),ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uk=["Webkit","ms","Moz","O"];Object.keys(Fs).forEach(function(t){uk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fs[e]=Fs[t]})});function S_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fs.hasOwnProperty(t)&&Fs[t]?(""+e).trim():e+"px"}function k_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=S_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ck=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function md(t,e){if(e){if(ck[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function gd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vd=null;function ih(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yd=null,Ii=null,xi=null;function Qm(t){if(t=jo(t)){if(typeof yd!="function")throw Error(T(280));var e=t.stateNode;e&&(e=mu(e),yd(t.stateNode,t.type,e))}}function b_(t){Ii?xi?xi.push(t):xi=[t]:Ii=t}function T_(){if(Ii){var t=Ii,e=xi;if(xi=Ii=null,Qm(t),e)for(t=0;t<e.length;t++)Qm(e[t])}}function I_(t,e){return t(e)}function x_(){}var oc=!1;function N_(t,e,n){if(oc)return t(e,n);oc=!0;try{return I_(t,e,n)}finally{oc=!1,(Ii!==null||xi!==null)&&(x_(),T_())}}function io(t,e){var n=t.stateNode;if(n===null)return null;var r=mu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var _d=!1;if(gn)try{var gs={};Object.defineProperty(gs,"passive",{get:function(){_d=!0}}),window.addEventListener("test",gs,gs),window.removeEventListener("test",gs,gs)}catch{_d=!1}function dk(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Us=!1,ul=null,cl=!1,wd=null,fk={onError:function(t){Us=!0,ul=t}};function hk(t,e,n,r,i,s,o,a,l){Us=!1,ul=null,dk.apply(fk,arguments)}function pk(t,e,n,r,i,s,o,a,l){if(hk.apply(this,arguments),Us){if(Us){var u=ul;Us=!1,ul=null}else throw Error(T(198));cl||(cl=!0,wd=u)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function R_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xm(t){if(Zr(t)!==t)throw Error(T(188))}function mk(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Xm(i),t;if(s===r)return Xm(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function P_(t){return t=mk(t),t!==null?O_(t):null}function O_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=O_(t);if(e!==null)return e;t=t.sibling}return null}var A_=mt.unstable_scheduleCallback,Jm=mt.unstable_cancelCallback,gk=mt.unstable_shouldYield,vk=mt.unstable_requestPaint,we=mt.unstable_now,yk=mt.unstable_getCurrentPriorityLevel,sh=mt.unstable_ImmediatePriority,D_=mt.unstable_UserBlockingPriority,dl=mt.unstable_NormalPriority,_k=mt.unstable_LowPriority,M_=mt.unstable_IdlePriority,du=null,qt=null;function wk(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(du,t,void 0,(t.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:Sk,Ek=Math.log,Ck=Math.LN2;function Sk(t){return t>>>=0,t===0?32:31-(Ek(t)/Ck|0)|0}var da=64,fa=4194304;function Os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Os(a):(s&=o,s!==0&&(r=Os(s)))}else o=n&~i,o!==0?r=Os(o):s!==0&&(r=Os(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Lt(e),i=1<<n,r|=t[n],e&=~i;return r}function kk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Lt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=kk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ed(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function L_(){var t=da;return da<<=1,!(da&4194240)&&(da=64),t}function ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Lt(e),t[e]=n}function Tk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Lt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function oh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Lt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function F_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var U_,ah,$_,j_,z_,Cd=!1,ha=[],Yn=null,qn=null,Qn=null,so=new Map,oo=new Map,Fn=[],Ik="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zm(t,e){switch(t){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":so.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(e.pointerId)}}function vs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=jo(e),e!==null&&ah(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xk(t,e,n,r,i){switch(e){case"focusin":return Yn=vs(Yn,t,e,n,r,i),!0;case"dragenter":return qn=vs(qn,t,e,n,r,i),!0;case"mouseover":return Qn=vs(Qn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return so.set(s,vs(so.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,oo.set(s,vs(oo.get(s)||null,t,e,n,r,i)),!0}return!1}function B_(t){var e=kr(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=R_(n),e!==null){t.blockedOn=e,z_(t.priority,function(){$_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Sd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vd=r,n.target.dispatchEvent(r),vd=null}else return e=jo(n),e!==null&&ah(e),t.blockedOn=n,!1;e.shift()}return!0}function eg(t,e,n){Wa(t)&&n.delete(e)}function Nk(){Cd=!1,Yn!==null&&Wa(Yn)&&(Yn=null),qn!==null&&Wa(qn)&&(qn=null),Qn!==null&&Wa(Qn)&&(Qn=null),so.forEach(eg),oo.forEach(eg)}function ys(t,e){t.blockedOn===e&&(t.blockedOn=null,Cd||(Cd=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,Nk)))}function ao(t){function e(i){return ys(i,t)}if(0<ha.length){ys(ha[0],t);for(var n=1;n<ha.length;n++){var r=ha[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yn!==null&&ys(Yn,t),qn!==null&&ys(qn,t),Qn!==null&&ys(Qn,t),so.forEach(e),oo.forEach(e),n=0;n<Fn.length;n++)r=Fn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)B_(n),n.blockedOn===null&&Fn.shift()}var Ni=Tn.ReactCurrentBatchConfig,hl=!0;function Rk(t,e,n,r){var i=J,s=Ni.transition;Ni.transition=null;try{J=1,lh(t,e,n,r)}finally{J=i,Ni.transition=s}}function Pk(t,e,n,r){var i=J,s=Ni.transition;Ni.transition=null;try{J=4,lh(t,e,n,r)}finally{J=i,Ni.transition=s}}function lh(t,e,n,r){if(hl){var i=Sd(t,e,n,r);if(i===null)vc(t,e,r,pl,n),Zm(t,r);else if(xk(i,t,e,n,r))r.stopPropagation();else if(Zm(t,r),e&4&&-1<Ik.indexOf(t)){for(;i!==null;){var s=jo(i);if(s!==null&&U_(s),s=Sd(t,e,n,r),s===null&&vc(t,e,r,pl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vc(t,e,r,null,n)}}var pl=null;function Sd(t,e,n,r){if(pl=null,t=ih(r),t=kr(t),t!==null)if(e=Zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=R_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pl=t,null}function W_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yk()){case sh:return 1;case D_:return 4;case dl:case _k:return 16;case M_:return 536870912;default:return 16}default:return 16}}var Wn=null,uh=null,Ha=null;function H_(){if(Ha)return Ha;var t,e=uh,n=e.length,r,i="value"in Wn?Wn.value:Wn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ha=i.slice(t,1<r?1-r:void 0)}function Va(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pa(){return!0}function tg(){return!1}function vt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pa:tg,this.isPropagationStopped=tg,this}return he(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),e}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ch=vt(ns),$o=he({},ns,{view:0,detail:0}),Ok=vt($o),lc,uc,_s,fu=he({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_s&&(_s&&t.type==="mousemove"?(lc=t.screenX-_s.screenX,uc=t.screenY-_s.screenY):uc=lc=0,_s=t),lc)},movementY:function(t){return"movementY"in t?t.movementY:uc}}),ng=vt(fu),Ak=he({},fu,{dataTransfer:0}),Dk=vt(Ak),Mk=he({},$o,{relatedTarget:0}),cc=vt(Mk),Lk=he({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Fk=vt(Lk),Uk=he({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$k=vt(Uk),jk=he({},ns,{data:0}),rg=vt(jk),zk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Wk[t])?!!e[t]:!1}function dh(){return Hk}var Vk=he({},$o,{key:function(t){if(t.key){var e=zk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Va(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dh,charCode:function(t){return t.type==="keypress"?Va(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Va(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gk=vt(Vk),Kk=he({},fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ig=vt(Kk),Yk=he({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dh}),qk=vt(Yk),Qk=he({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xk=vt(Qk),Jk=he({},fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zk=vt(Jk),eb=[9,13,27,32],fh=gn&&"CompositionEvent"in window,$s=null;gn&&"documentMode"in document&&($s=document.documentMode);var tb=gn&&"TextEvent"in window&&!$s,V_=gn&&(!fh||$s&&8<$s&&11>=$s),sg=String.fromCharCode(32),og=!1;function G_(t,e){switch(t){case"keyup":return eb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function K_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var di=!1;function nb(t,e){switch(t){case"compositionend":return K_(e);case"keypress":return e.which!==32?null:(og=!0,sg);case"textInput":return t=e.data,t===sg&&og?null:t;default:return null}}function rb(t,e){if(di)return t==="compositionend"||!fh&&G_(t,e)?(t=H_(),Ha=uh=Wn=null,di=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return V_&&e.locale!=="ko"?null:e.data;default:return null}}var ib={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ag(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ib[t.type]:e==="textarea"}function Y_(t,e,n,r){b_(r),e=ml(e,"onChange"),0<e.length&&(n=new ch("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var js=null,lo=null;function sb(t){s0(t,0)}function hu(t){var e=pi(t);if(y_(e))return t}function ob(t,e){if(t==="change")return e}var q_=!1;if(gn){var dc;if(gn){var fc="oninput"in document;if(!fc){var lg=document.createElement("div");lg.setAttribute("oninput","return;"),fc=typeof lg.oninput=="function"}dc=fc}else dc=!1;q_=dc&&(!document.documentMode||9<document.documentMode)}function ug(){js&&(js.detachEvent("onpropertychange",Q_),lo=js=null)}function Q_(t){if(t.propertyName==="value"&&hu(lo)){var e=[];Y_(e,lo,t,ih(t)),N_(sb,e)}}function ab(t,e,n){t==="focusin"?(ug(),js=e,lo=n,js.attachEvent("onpropertychange",Q_)):t==="focusout"&&ug()}function lb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(lo)}function ub(t,e){if(t==="click")return hu(e)}function cb(t,e){if(t==="input"||t==="change")return hu(e)}function db(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:db;function uo(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sd.call(e,i)||!$t(t[i],e[i]))return!1}return!0}function cg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dg(t,e){var n=cg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cg(n)}}function X_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?X_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function J_(){for(var t=window,e=ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ll(t.document)}return e}function hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fb(t){var e=J_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&X_(n.ownerDocument.documentElement,n)){if(r!==null&&hh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=dg(n,s);var o=dg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hb=gn&&"documentMode"in document&&11>=document.documentMode,fi=null,kd=null,zs=null,bd=!1;function fg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bd||fi==null||fi!==ll(r)||(r=fi,"selectionStart"in r&&hh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zs&&uo(zs,r)||(zs=r,r=ml(kd,"onSelect"),0<r.length&&(e=new ch("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=fi)))}function ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hi={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},hc={},Z_={};gn&&(Z_=document.createElement("div").style,"AnimationEvent"in window||(delete hi.animationend.animation,delete hi.animationiteration.animation,delete hi.animationstart.animation),"TransitionEvent"in window||delete hi.transitionend.transition);function pu(t){if(hc[t])return hc[t];if(!hi[t])return t;var e=hi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Z_)return hc[t]=e[n];return t}var e0=pu("animationend"),t0=pu("animationiteration"),n0=pu("animationstart"),r0=pu("transitionend"),i0=new Map,hg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){i0.set(t,e),Jr(e,[t])}for(var pc=0;pc<hg.length;pc++){var mc=hg[pc],pb=mc.toLowerCase(),mb=mc[0].toUpperCase()+mc.slice(1);pr(pb,"on"+mb)}pr(e0,"onAnimationEnd");pr(t0,"onAnimationIteration");pr(n0,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(r0,"onTransitionEnd");$i("onMouseEnter",["mouseout","mouseover"]);$i("onMouseLeave",["mouseout","mouseover"]);$i("onPointerEnter",["pointerout","pointerover"]);$i("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var As="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gb=new Set("cancel close invalid load scroll toggle".split(" ").concat(As));function pg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,pk(r,e,void 0,t),t.currentTarget=null}function s0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;pg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;pg(i,a,u),s=l}}}if(cl)throw t=wd,cl=!1,wd=null,t}function oe(t,e){var n=e[Rd];n===void 0&&(n=e[Rd]=new Set);var r=t+"__bubble";n.has(r)||(o0(e,t,2,!1),n.add(r))}function gc(t,e,n){var r=0;e&&(r|=4),o0(n,t,r,e)}var ga="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[ga]){t[ga]=!0,h_.forEach(function(n){n!=="selectionchange"&&(gb.has(n)||gc(n,!1,t),gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ga]||(e[ga]=!0,gc("selectionchange",!1,e))}}function o0(t,e,n,r){switch(W_(e)){case 1:var i=Rk;break;case 4:i=Pk;break;default:i=lh}n=i.bind(null,e,n,t),i=void 0,!_d||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=kr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}N_(function(){var u=s,c=ih(n),d=[];e:{var f=i0.get(t);if(f!==void 0){var h=ch,g=t;switch(t){case"keypress":if(Va(n)===0)break e;case"keydown":case"keyup":h=Gk;break;case"focusin":g="focus",h=cc;break;case"focusout":g="blur",h=cc;break;case"beforeblur":case"afterblur":h=cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=ng;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Dk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=qk;break;case e0:case t0:case n0:h=Fk;break;case r0:h=Xk;break;case"scroll":h=Ok;break;case"wheel":h=Zk;break;case"copy":case"cut":case"paste":h=$k;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ig}var _=(e&4)!==0,C=!_&&t==="scroll",m=_?f!==null?f+"Capture":null:f;_=[];for(var p=u,v;p!==null;){v=p;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,m!==null&&(w=io(p,m),w!=null&&_.push(fo(p,w,v)))),C)break;p=p.return}0<_.length&&(f=new h(f,g,null,n,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",f&&n!==vd&&(g=n.relatedTarget||n.fromElement)&&(kr(g)||g[vn]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?kr(g):null,g!==null&&(C=Zr(g),g!==C||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(_=ng,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=ig,w="onPointerLeave",m="onPointerEnter",p="pointer"),C=h==null?f:pi(h),v=g==null?f:pi(g),f=new _(w,p+"leave",h,n,c),f.target=C,f.relatedTarget=v,w=null,kr(c)===u&&(_=new _(m,p+"enter",g,n,c),_.target=v,_.relatedTarget=C,w=_),C=w,h&&g)t:{for(_=h,m=g,p=0,v=_;v;v=si(v))p++;for(v=0,w=m;w;w=si(w))v++;for(;0<p-v;)_=si(_),p--;for(;0<v-p;)m=si(m),v--;for(;p--;){if(_===m||m!==null&&_===m.alternate)break t;_=si(_),m=si(m)}_=null}else _=null;h!==null&&mg(d,f,h,_,!1),g!==null&&C!==null&&mg(d,C,g,_,!0)}}e:{if(f=u?pi(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var S=ob;else if(ag(f))if(q_)S=cb;else{S=lb;var k=ab}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=ub);if(S&&(S=S(t,u))){Y_(d,S,n,c);break e}k&&k(t,f,u),t==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&fd(f,"number",f.value)}switch(k=u?pi(u):window,t){case"focusin":(ag(k)||k.contentEditable==="true")&&(fi=k,kd=u,zs=null);break;case"focusout":zs=kd=fi=null;break;case"mousedown":bd=!0;break;case"contextmenu":case"mouseup":case"dragend":bd=!1,fg(d,n,c);break;case"selectionchange":if(hb)break;case"keydown":case"keyup":fg(d,n,c)}var b;if(fh)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else di?G_(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(V_&&n.locale!=="ko"&&(di||x!=="onCompositionStart"?x==="onCompositionEnd"&&di&&(b=H_()):(Wn=c,uh="value"in Wn?Wn.value:Wn.textContent,di=!0)),k=ml(u,x),0<k.length&&(x=new rg(x,t,null,n,c),d.push({event:x,listeners:k}),b?x.data=b:(b=K_(n),b!==null&&(x.data=b)))),(b=tb?nb(t,n):rb(t,n))&&(u=ml(u,"onBeforeInput"),0<u.length&&(c=new rg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}s0(d,e)})}function fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ml(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=io(t,n),s!=null&&r.unshift(fo(t,s,i)),s=io(t,e),s!=null&&r.push(fo(t,s,i))),t=t.return}return r}function si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=io(n,s),l!=null&&o.unshift(fo(n,l,a))):i||(l=io(n,s),l!=null&&o.push(fo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vb=/\r\n?/g,yb=/\u0000|\uFFFD/g;function gg(t){return(typeof t=="string"?t:""+t).replace(vb,`
`).replace(yb,"")}function va(t,e,n){if(e=gg(e),gg(t)!==e&&n)throw Error(T(425))}function gl(){}var Td=null,Id=null;function xd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nd=typeof setTimeout=="function"?setTimeout:void 0,_b=typeof clearTimeout=="function"?clearTimeout:void 0,vg=typeof Promise=="function"?Promise:void 0,wb=typeof queueMicrotask=="function"?queueMicrotask:typeof vg<"u"?function(t){return vg.resolve(null).then(t).catch(Eb)}:Nd;function Eb(t){setTimeout(function(){throw t})}function yc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ao(e)}function Xn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var rs=Math.random().toString(36).slice(2),Vt="__reactFiber$"+rs,ho="__reactProps$"+rs,vn="__reactContainer$"+rs,Rd="__reactEvents$"+rs,Cb="__reactListeners$"+rs,Sb="__reactHandles$"+rs;function kr(t){var e=t[Vt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vn]||n[Vt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yg(t);t!==null;){if(n=t[Vt])return n;t=yg(t)}return e}t=n,n=t.parentNode}return null}function jo(t){return t=t[Vt]||t[vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function pi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function mu(t){return t[ho]||null}var Pd=[],mi=-1;function mr(t){return{current:t}}function le(t){0>mi||(t.current=Pd[mi],Pd[mi]=null,mi--)}function se(t,e){mi++,Pd[mi]=t.current,t.current=e}var or={},Ve=mr(or),ot=mr(!1),Fr=or;function ji(t,e){var n=t.type.contextTypes;if(!n)return or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function at(t){return t=t.childContextTypes,t!=null}function vl(){le(ot),le(Ve)}function _g(t,e,n){if(Ve.current!==or)throw Error(T(168));se(Ve,e),se(ot,n)}function a0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,ak(t)||"Unknown",i));return he({},n,r)}function yl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Fr=Ve.current,se(Ve,t),se(ot,ot.current),!0}function wg(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=a0(t,e,Fr),r.__reactInternalMemoizedMergedChildContext=t,le(ot),le(Ve),se(Ve,t)):le(ot),se(ot,n)}var sn=null,gu=!1,_c=!1;function l0(t){sn===null?sn=[t]:sn.push(t)}function kb(t){gu=!0,l0(t)}function gr(){if(!_c&&sn!==null){_c=!0;var t=0,e=J;try{var n=sn;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sn=null,gu=!1}catch(i){throw sn!==null&&(sn=sn.slice(t+1)),A_(sh,gr),i}finally{J=e,_c=!1}}return null}var gi=[],vi=0,_l=null,wl=0,Et=[],Ct=0,Ur=null,ln=1,un="";function yr(t,e){gi[vi++]=wl,gi[vi++]=_l,_l=t,wl=e}function u0(t,e,n){Et[Ct++]=ln,Et[Ct++]=un,Et[Ct++]=Ur,Ur=t;var r=ln;t=un;var i=32-Lt(r)-1;r&=~(1<<i),n+=1;var s=32-Lt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ln=1<<32-Lt(e)+i|n<<i|r,un=s+t}else ln=1<<s|n<<i|r,un=t}function ph(t){t.return!==null&&(yr(t,1),u0(t,1,0))}function mh(t){for(;t===_l;)_l=gi[--vi],gi[vi]=null,wl=gi[--vi],gi[vi]=null;for(;t===Ur;)Ur=Et[--Ct],Et[Ct]=null,un=Et[--Ct],Et[Ct]=null,ln=Et[--Ct],Et[Ct]=null}var pt=null,ft=null,ce=!1,Pt=null;function c0(t,e){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Eg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pt=t,ft=Xn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pt=t,ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ur!==null?{id:ln,overflow:un}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pt=t,ft=null,!0):!1;default:return!1}}function Od(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ad(t){if(ce){var e=ft;if(e){var n=e;if(!Eg(t,e)){if(Od(t))throw Error(T(418));e=Xn(n.nextSibling);var r=pt;e&&Eg(t,e)?c0(r,n):(t.flags=t.flags&-4097|2,ce=!1,pt=t)}}else{if(Od(t))throw Error(T(418));t.flags=t.flags&-4097|2,ce=!1,pt=t}}}function Cg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pt=t}function ya(t){if(t!==pt)return!1;if(!ce)return Cg(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xd(t.type,t.memoizedProps)),e&&(e=ft)){if(Od(t))throw d0(),Error(T(418));for(;e;)c0(t,e),e=Xn(e.nextSibling)}if(Cg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ft=Xn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ft=null}}else ft=pt?Xn(t.stateNode.nextSibling):null;return!0}function d0(){for(var t=ft;t;)t=Xn(t.nextSibling)}function zi(){ft=pt=null,ce=!1}function gh(t){Pt===null?Pt=[t]:Pt.push(t)}var bb=Tn.ReactCurrentBatchConfig;function Nt(t,e){if(t&&t.defaultProps){e=he({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var El=mr(null),Cl=null,yi=null,vh=null;function yh(){vh=yi=Cl=null}function _h(t){var e=El.current;le(El),t._currentValue=e}function Dd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ri(t,e){Cl=t,vh=yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rt=!0),t.firstContext=null)}function Tt(t){var e=t._currentValue;if(vh!==t)if(t={context:t,memoizedValue:e,next:null},yi===null){if(Cl===null)throw Error(T(308));yi=t,Cl.dependencies={lanes:0,firstContext:t}}else yi=yi.next=t;return e}var br=null;function wh(t){br===null?br=[t]:br.push(t)}function f0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wh(e)):(n.next=i.next,i.next=n),e.interleaved=n,yn(t,r)}function yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mn=!1;function Eh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,yn(t,n)}return i=r.interleaved,i===null?(e.next=e,wh(r)):(e.next=i.next,i.next=e),r.interleaved=e,yn(t,n)}function Ga(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,oh(t,n)}}function Sg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Sl(t,e,n,r){var i=t.updateQueue;Mn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,h=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(f=e,h=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(h,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(h,d,f):g,f==null)break e;d=he({},d,f);break e;case 2:Mn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=d}}function kg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var p0=new f_.Component().refs;function Md(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:he({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vu={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qe(),i=er(t),s=hn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(Ft(e,t,i,r),Ga(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qe(),i=er(t),s=hn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(Ft(e,t,i,r),Ga(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qe(),r=er(t),i=hn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jn(t,i,r),e!==null&&(Ft(e,t,r,n),Ga(e,t,r))}};function bg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!uo(n,r)||!uo(i,s):!0}function m0(t,e,n){var r=!1,i=or,s=e.contextType;return typeof s=="object"&&s!==null?s=Tt(s):(i=at(e)?Fr:Ve.current,r=e.contextTypes,s=(r=r!=null)?ji(t,i):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&vu.enqueueReplaceState(e,e.state,null)}function Ld(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=p0,Eh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Tt(s):(s=at(e)?Fr:Ve.current,i.context=ji(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Md(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&vu.enqueueReplaceState(i,i.state,null),Sl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===p0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function _a(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ig(t){var e=t._init;return e(t._payload)}function g0(t){function e(m,p){if(t){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=tr(m,p),m.index=0,m.sibling=null,m}function s(m,p,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,v,w){return p===null||p.tag!==6?(p=Tc(v,m.mode,w),p.return=m,p):(p=i(p,v),p.return=m,p)}function l(m,p,v,w){var S=v.type;return S===ci?c(m,p,v.props.children,w,v.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Dn&&Ig(S)===p.type)?(w=i(p,v.props),w.ref=ws(m,p,v),w.return=m,w):(w=Ja(v.type,v.key,v.props,null,m.mode,w),w.ref=ws(m,p,v),w.return=m,w)}function u(m,p,v,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Ic(v,m.mode,w),p.return=m,p):(p=i(p,v.children||[]),p.return=m,p)}function c(m,p,v,w,S){return p===null||p.tag!==7?(p=Or(v,m.mode,w,S),p.return=m,p):(p=i(p,v),p.return=m,p)}function d(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Tc(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case la:return v=Ja(p.type,p.key,p.props,null,m.mode,v),v.ref=ws(m,null,p),v.return=m,v;case ui:return p=Ic(p,m.mode,v),p.return=m,p;case Dn:var w=p._init;return d(m,w(p._payload),v)}if(Ps(p)||ms(p))return p=Or(p,m.mode,v,null),p.return=m,p;_a(m,p)}return null}function f(m,p,v,w){var S=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(m,p,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case la:return v.key===S?l(m,p,v,w):null;case ui:return v.key===S?u(m,p,v,w):null;case Dn:return S=v._init,f(m,p,S(v._payload),w)}if(Ps(v)||ms(v))return S!==null?null:c(m,p,v,w,null);_a(m,v)}return null}function h(m,p,v,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(v)||null,a(p,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case la:return m=m.get(w.key===null?v:w.key)||null,l(p,m,w,S);case ui:return m=m.get(w.key===null?v:w.key)||null,u(p,m,w,S);case Dn:var k=w._init;return h(m,p,v,k(w._payload),S)}if(Ps(w)||ms(w))return m=m.get(v)||null,c(p,m,w,S,null);_a(p,w)}return null}function g(m,p,v,w){for(var S=null,k=null,b=p,x=p=0,F=null;b!==null&&x<v.length;x++){b.index>x?(F=b,b=null):F=b.sibling;var U=f(m,b,v[x],w);if(U===null){b===null&&(b=F);break}t&&b&&U.alternate===null&&e(m,b),p=s(U,p,x),k===null?S=U:k.sibling=U,k=U,b=F}if(x===v.length)return n(m,b),ce&&yr(m,x),S;if(b===null){for(;x<v.length;x++)b=d(m,v[x],w),b!==null&&(p=s(b,p,x),k===null?S=b:k.sibling=b,k=b);return ce&&yr(m,x),S}for(b=r(m,b);x<v.length;x++)F=h(b,m,x,v[x],w),F!==null&&(t&&F.alternate!==null&&b.delete(F.key===null?x:F.key),p=s(F,p,x),k===null?S=F:k.sibling=F,k=F);return t&&b.forEach(function(Te){return e(m,Te)}),ce&&yr(m,x),S}function _(m,p,v,w){var S=ms(v);if(typeof S!="function")throw Error(T(150));if(v=S.call(v),v==null)throw Error(T(151));for(var k=S=null,b=p,x=p=0,F=null,U=v.next();b!==null&&!U.done;x++,U=v.next()){b.index>x?(F=b,b=null):F=b.sibling;var Te=f(m,b,U.value,w);if(Te===null){b===null&&(b=F);break}t&&b&&Te.alternate===null&&e(m,b),p=s(Te,p,x),k===null?S=Te:k.sibling=Te,k=Te,b=F}if(U.done)return n(m,b),ce&&yr(m,x),S;if(b===null){for(;!U.done;x++,U=v.next())U=d(m,U.value,w),U!==null&&(p=s(U,p,x),k===null?S=U:k.sibling=U,k=U);return ce&&yr(m,x),S}for(b=r(m,b);!U.done;x++,U=v.next())U=h(b,m,x,U.value,w),U!==null&&(t&&U.alternate!==null&&b.delete(U.key===null?x:U.key),p=s(U,p,x),k===null?S=U:k.sibling=U,k=U);return t&&b.forEach(function(_t){return e(m,_t)}),ce&&yr(m,x),S}function C(m,p,v,w){if(typeof v=="object"&&v!==null&&v.type===ci&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case la:e:{for(var S=v.key,k=p;k!==null;){if(k.key===S){if(S=v.type,S===ci){if(k.tag===7){n(m,k.sibling),p=i(k,v.props.children),p.return=m,m=p;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Dn&&Ig(S)===k.type){n(m,k.sibling),p=i(k,v.props),p.ref=ws(m,k,v),p.return=m,m=p;break e}n(m,k);break}else e(m,k);k=k.sibling}v.type===ci?(p=Or(v.props.children,m.mode,w,v.key),p.return=m,m=p):(w=Ja(v.type,v.key,v.props,null,m.mode,w),w.ref=ws(m,p,v),w.return=m,m=w)}return o(m);case ui:e:{for(k=v.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(m,p.sibling),p=i(p,v.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Ic(v,m.mode,w),p.return=m,m=p}return o(m);case Dn:return k=v._init,C(m,p,k(v._payload),w)}if(Ps(v))return g(m,p,v,w);if(ms(v))return _(m,p,v,w);_a(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,v),p.return=m,m=p):(n(m,p),p=Tc(v,m.mode,w),p.return=m,m=p),o(m)):n(m,p)}return C}var Bi=g0(!0),v0=g0(!1),zo={},Qt=mr(zo),po=mr(zo),mo=mr(zo);function Tr(t){if(t===zo)throw Error(T(174));return t}function Ch(t,e){switch(se(mo,e),se(po,t),se(Qt,zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pd(e,t)}le(Qt),se(Qt,e)}function Wi(){le(Qt),le(po),le(mo)}function y0(t){Tr(mo.current);var e=Tr(Qt.current),n=pd(e,t.type);e!==n&&(se(po,t),se(Qt,n))}function Sh(t){po.current===t&&(le(Qt),le(po))}var de=mr(0);function kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wc=[];function kh(){for(var t=0;t<wc.length;t++)wc[t]._workInProgressVersionPrimary=null;wc.length=0}var Ka=Tn.ReactCurrentDispatcher,Ec=Tn.ReactCurrentBatchConfig,$r=0,fe=null,Ce=null,Re=null,bl=!1,Bs=!1,go=0,Tb=0;function Be(){throw Error(T(321))}function bh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function Th(t,e,n,r,i,s){if($r=s,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ka.current=t===null||t.memoizedState===null?Rb:Pb,t=n(r,i),Bs){s=0;do{if(Bs=!1,go=0,25<=s)throw Error(T(301));s+=1,Re=Ce=null,e.updateQueue=null,Ka.current=Ob,t=n(r,i)}while(Bs)}if(Ka.current=Tl,e=Ce!==null&&Ce.next!==null,$r=0,Re=Ce=fe=null,bl=!1,e)throw Error(T(300));return t}function Ih(){var t=go!==0;return go=0,t}function Ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?fe.memoizedState=Re=t:Re=Re.next=t,Re}function It(){if(Ce===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var e=Re===null?fe.memoizedState:Re.next;if(e!==null)Re=e,Ce=t;else{if(t===null)throw Error(T(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Re===null?fe.memoizedState=Re=t:Re=Re.next=t}return Re}function vo(t,e){return typeof e=="function"?e(t):e}function Cc(t){var e=It(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if(($r&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,fe.lanes|=c,jr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,$t(r,e.memoizedState)||(rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,fe.lanes|=s,jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sc(t){var e=It(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$t(s,e.memoizedState)||(rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function _0(){}function w0(t,e){var n=fe,r=It(),i=e(),s=!$t(r.memoizedState,i);if(s&&(r.memoizedState=i,rt=!0),r=r.queue,xh(S0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,yo(9,C0.bind(null,n,r,i,e),void 0,null),De===null)throw Error(T(349));$r&30||E0(n,e,i)}return i}function E0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function C0(t,e,n,r){e.value=n,e.getSnapshot=r,k0(e)&&b0(t)}function S0(t,e,n){return n(function(){k0(e)&&b0(t)})}function k0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function b0(t){var e=yn(t,1);e!==null&&Ft(e,t,1,-1)}function xg(t){var e=Ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},e.queue=t,t=t.dispatch=Nb.bind(null,fe,t),[e.memoizedState,t]}function yo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function T0(){return It().memoizedState}function Ya(t,e,n,r){var i=Ht();fe.flags|=t,i.memoizedState=yo(1|e,n,void 0,r===void 0?null:r)}function yu(t,e,n,r){var i=It();r=r===void 0?null:r;var s=void 0;if(Ce!==null){var o=Ce.memoizedState;if(s=o.destroy,r!==null&&bh(r,o.deps)){i.memoizedState=yo(e,n,s,r);return}}fe.flags|=t,i.memoizedState=yo(1|e,n,s,r)}function Ng(t,e){return Ya(8390656,8,t,e)}function xh(t,e){return yu(2048,8,t,e)}function I0(t,e){return yu(4,2,t,e)}function x0(t,e){return yu(4,4,t,e)}function N0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function R0(t,e,n){return n=n!=null?n.concat([t]):null,yu(4,4,N0.bind(null,e,t),n)}function Nh(){}function P0(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function O0(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function A0(t,e,n){return $r&21?($t(n,e)||(n=L_(),fe.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rt=!0),t.memoizedState=n)}function Ib(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=Ec.transition;Ec.transition={};try{t(!1),e()}finally{J=n,Ec.transition=r}}function D0(){return It().memoizedState}function xb(t,e,n){var r=er(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},M0(t))L0(e,n);else if(n=f0(t,e,n,r),n!==null){var i=qe();Ft(n,t,r,i),F0(n,e,r)}}function Nb(t,e,n){var r=er(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(M0(t))L0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,$t(a,o)){var l=e.interleaved;l===null?(i.next=i,wh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=f0(t,e,i,r),n!==null&&(i=qe(),Ft(n,t,r,i),F0(n,e,r))}}function M0(t){var e=t.alternate;return t===fe||e!==null&&e===fe}function L0(t,e){Bs=bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function F0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,oh(t,n)}}var Tl={readContext:Tt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},Rb={readContext:Tt,useCallback:function(t,e){return Ht().memoizedState=[t,e===void 0?null:e],t},useContext:Tt,useEffect:Ng,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ya(4194308,4,N0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ya(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ya(4,2,t,e)},useMemo:function(t,e){var n=Ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xb.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var e=Ht();return t={current:t},e.memoizedState=t},useState:xg,useDebugValue:Nh,useDeferredValue:function(t){return Ht().memoizedState=t},useTransition:function(){var t=xg(!1),e=t[0];return t=Ib.bind(null,t[1]),Ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=fe,i=Ht();if(ce){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),De===null)throw Error(T(349));$r&30||E0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ng(S0.bind(null,r,s,t),[t]),r.flags|=2048,yo(9,C0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ht(),e=De.identifierPrefix;if(ce){var n=un,r=ln;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Tb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Pb={readContext:Tt,useCallback:P0,useContext:Tt,useEffect:xh,useImperativeHandle:R0,useInsertionEffect:I0,useLayoutEffect:x0,useMemo:O0,useReducer:Cc,useRef:T0,useState:function(){return Cc(vo)},useDebugValue:Nh,useDeferredValue:function(t){var e=It();return A0(e,Ce.memoizedState,t)},useTransition:function(){var t=Cc(vo)[0],e=It().memoizedState;return[t,e]},useMutableSource:_0,useSyncExternalStore:w0,useId:D0,unstable_isNewReconciler:!1},Ob={readContext:Tt,useCallback:P0,useContext:Tt,useEffect:xh,useImperativeHandle:R0,useInsertionEffect:I0,useLayoutEffect:x0,useMemo:O0,useReducer:Sc,useRef:T0,useState:function(){return Sc(vo)},useDebugValue:Nh,useDeferredValue:function(t){var e=It();return Ce===null?e.memoizedState=t:A0(e,Ce.memoizedState,t)},useTransition:function(){var t=Sc(vo)[0],e=It().memoizedState;return[t,e]},useMutableSource:_0,useSyncExternalStore:w0,useId:D0,unstable_isNewReconciler:!1};function Hi(t,e){try{var n="",r=e;do n+=ok(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ab=typeof WeakMap=="function"?WeakMap:Map;function U0(t,e,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xl||(xl=!0,Kd=r),Fd(t,e)},n}function $0(t,e,n){n=hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Fd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fd(t,e),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ab;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Kb.bind(null,t,e,n),e.then(t,t))}function Pg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Og(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hn(-1,1),e.tag=2,Jn(n,e,1))),n.lanes|=1),t)}var Db=Tn.ReactCurrentOwner,rt=!1;function Ye(t,e,n,r){e.child=t===null?v0(e,null,n,r):Bi(e,t.child,n,r)}function Ag(t,e,n,r,i){n=n.render;var s=e.ref;return Ri(e,i),r=Th(t,e,n,r,s,i),n=Ih(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_n(t,e,i)):(ce&&n&&ph(e),e.flags|=1,Ye(t,e,r,i),e.child)}function Dg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Fh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,j0(t,e,s,r,i)):(t=Ja(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(o,r)&&t.ref===e.ref)return _n(t,e,i)}return e.flags|=1,t=tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function j0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(uo(s,r)&&t.ref===e.ref)if(rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(rt=!0);else return e.lanes=t.lanes,_n(t,e,i)}return Ud(t,e,n,r,i)}function z0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(wi,ut),ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(wi,ut),ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(wi,ut),ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(wi,ut),ut|=r;return Ye(t,e,i,n),e.child}function B0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ud(t,e,n,r,i){var s=at(n)?Fr:Ve.current;return s=ji(e,s),Ri(e,i),n=Th(t,e,n,r,s,i),r=Ih(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_n(t,e,i)):(ce&&r&&ph(e),e.flags|=1,Ye(t,e,n,i),e.child)}function Mg(t,e,n,r,i){if(at(n)){var s=!0;yl(e)}else s=!1;if(Ri(e,i),e.stateNode===null)qa(t,e),m0(e,n,r),Ld(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Tt(u):(u=at(n)?Fr:Ve.current,u=ji(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Tg(e,o,r,u),Mn=!1;var f=e.memoizedState;o.state=f,Sl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||ot.current||Mn?(typeof c=="function"&&(Md(e,n,c,r),l=e.memoizedState),(a=Mn||bg(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,h0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Nt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Tt(l):(l=at(n)?Fr:Ve.current,l=ji(e,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Tg(e,o,r,l),Mn=!1,f=e.memoizedState,o.state=f,Sl(e,r,o,i);var g=e.memoizedState;a!==d||f!==g||ot.current||Mn?(typeof h=="function"&&(Md(e,n,h,r),g=e.memoizedState),(u=Mn||bg(e,n,u,r,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return $d(t,e,n,r,s,i)}function $d(t,e,n,r,i,s){B0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&wg(e,n,!1),_n(t,e,s);r=e.stateNode,Db.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bi(e,t.child,null,s),e.child=Bi(e,null,a,s)):Ye(t,e,a,s),e.memoizedState=r.state,i&&wg(e,n,!0),e.child}function W0(t){var e=t.stateNode;e.pendingContext?_g(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_g(t,e.context,!1),Ch(t,e.containerInfo)}function Lg(t,e,n,r,i){return zi(),gh(i),e.flags|=256,Ye(t,e,n,r),e.child}var jd={dehydrated:null,treeContext:null,retryLane:0};function zd(t){return{baseLanes:t,cachePool:null,transitions:null}}function H0(t,e,n){var r=e.pendingProps,i=de.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(de,i&1),t===null)return Ad(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Eu(o,r,0,null),t=Or(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zd(n),e.memoizedState=jd,t):Rh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Mb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=tr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=tr(a,s):(s=Or(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?zd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jd,r}return s=t.child,t=s.sibling,r=tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rh(t,e){return e=Eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wa(t,e,n,r){return r!==null&&gh(r),Bi(e,t.child,null,n),t=Rh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Mb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=kc(Error(T(422))),wa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Eu({mode:"visible",children:r.children},i,0,null),s=Or(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bi(e,t.child,null,o),e.child.memoizedState=zd(o),e.memoizedState=jd,s);if(!(e.mode&1))return wa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=kc(s,r,void 0),wa(t,e,o,r)}if(a=(o&t.childLanes)!==0,rt||a){if(r=De,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,yn(t,i),Ft(r,t,i,-1))}return Lh(),r=kc(Error(T(421))),wa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Yb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ft=Xn(i.nextSibling),pt=e,ce=!0,Pt=null,t!==null&&(Et[Ct++]=ln,Et[Ct++]=un,Et[Ct++]=Ur,ln=t.id,un=t.overflow,Ur=e),e=Rh(e,r.children),e.flags|=4096,e)}function Fg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Dd(t.return,e,n)}function bc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function V0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ye(t,e,r.children,n),r=de.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fg(t,n,e);else if(t.tag===19)Fg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(de,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&kl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&kl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bc(e,!0,n,null,s);break;case"together":bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Lb(t,e,n){switch(e.tag){case 3:W0(e),zi();break;case 5:y0(e);break;case 1:at(e.type)&&yl(e);break;case 4:Ch(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(El,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(de,de.current&1),e.flags|=128,null):n&e.child.childLanes?H0(t,e,n):(se(de,de.current&1),t=_n(t,e,n),t!==null?t.sibling:null);se(de,de.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return V0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(de,de.current),r)break;return null;case 22:case 23:return e.lanes=0,z0(t,e,n)}return _n(t,e,n)}var G0,Bd,K0,Y0;G0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bd=function(){};K0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Tr(Qt.current);var s=null;switch(n){case"input":i=cd(t,i),r=cd(t,r),s=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),s=[];break;case"textarea":i=hd(t,i),r=hd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=gl)}md(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(no.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(no.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&oe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Y0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Es(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Fb(t,e,n){var r=e.pendingProps;switch(mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(e),null;case 1:return at(e.type)&&vl(),We(e),null;case 3:return r=e.stateNode,Wi(),le(ot),le(Ve),kh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pt!==null&&(Qd(Pt),Pt=null))),Bd(t,e),We(e),null;case 5:Sh(e);var i=Tr(mo.current);if(n=e.type,t!==null&&e.stateNode!=null)K0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return We(e),null}if(t=Tr(Qt.current),ya(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Vt]=e,r[ho]=s,t=(e.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<As.length;i++)oe(As[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Gm(r,s),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},oe("invalid",r);break;case"textarea":Ym(r,s),oe("invalid",r)}md(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&va(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&va(r.textContent,a,t),i=["children",""+a]):no.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&oe("scroll",r)}switch(n){case"input":ua(r),Km(r,s,!0);break;case"textarea":ua(r),qm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=gl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=E_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Vt]=e,t[ho]=r,G0(t,e,!1,!1),e.stateNode=t;e:{switch(o=gd(n,r),n){case"dialog":oe("cancel",t),oe("close",t),i=r;break;case"iframe":case"object":case"embed":oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<As.length;i++)oe(As[i],t);i=r;break;case"source":oe("error",t),i=r;break;case"img":case"image":case"link":oe("error",t),oe("load",t),i=r;break;case"details":oe("toggle",t),i=r;break;case"input":Gm(t,r),i=cd(t,r),oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),oe("invalid",t);break;case"textarea":Ym(t,r),i=hd(t,r),oe("invalid",t);break;default:i=r}md(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?k_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&C_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ro(t,l):typeof l=="number"&&ro(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(no.hasOwnProperty(s)?l!=null&&s==="onScroll"&&oe("scroll",t):l!=null&&eh(t,s,l,o))}switch(n){case"input":ua(t),Km(t,r,!1);break;case"textarea":ua(t),qm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+sr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ti(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ti(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return We(e),null;case 6:if(t&&e.stateNode!=null)Y0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=Tr(mo.current),Tr(Qt.current),ya(e)){if(r=e.stateNode,n=e.memoizedProps,r[Vt]=e,(s=r.nodeValue!==n)&&(t=pt,t!==null))switch(t.tag){case 3:va(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&va(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=e,e.stateNode=r}return We(e),null;case 13:if(le(de),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&ft!==null&&e.mode&1&&!(e.flags&128))d0(),zi(),e.flags|=98560,s=!1;else if(s=ya(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[Vt]=e}else zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;We(e),s=!1}else Pt!==null&&(Qd(Pt),Pt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||de.current&1?Se===0&&(Se=3):Lh())),e.updateQueue!==null&&(e.flags|=4),We(e),null);case 4:return Wi(),Bd(t,e),t===null&&co(e.stateNode.containerInfo),We(e),null;case 10:return _h(e.type._context),We(e),null;case 17:return at(e.type)&&vl(),We(e),null;case 19:if(le(de),s=e.memoizedState,s===null)return We(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Es(s,!1);else{if(Se!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=kl(t),o!==null){for(e.flags|=128,Es(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(de,de.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>Vi&&(e.flags|=128,r=!0,Es(s,!1),e.lanes=4194304)}else{if(!r)if(t=kl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Es(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return We(e),null}else 2*we()-s.renderingStartTime>Vi&&n!==1073741824&&(e.flags|=128,r=!0,Es(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=de.current,se(de,r?n&1|2:n&1),e):(We(e),null);case 22:case 23:return Mh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ut&1073741824&&(We(e),e.subtreeFlags&6&&(e.flags|=8192)):We(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function Ub(t,e){switch(mh(e),e.tag){case 1:return at(e.type)&&vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wi(),le(ot),le(Ve),kh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sh(e),null;case 13:if(le(de),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(de),null;case 4:return Wi(),null;case 10:return _h(e.type._context),null;case 22:case 23:return Mh(),null;case 24:return null;default:return null}}var Ea=!1,He=!1,$b=typeof WeakSet=="function"?WeakSet:Set,P=null;function _i(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(t,e,r)}else n.current=null}function Wd(t,e,n){try{n()}catch(r){pe(t,e,r)}}var Ug=!1;function jb(t,e){if(Td=hl,t=J_(),hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Id={focusedElem:t,selectionRange:n},hl=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,C=g.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:Nt(e.type,_),C);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){pe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return g=Ug,Ug=!1,g}function Ws(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Wd(e,n,s)}i=i.next}while(i!==r)}}function _u(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Hd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function q0(t){var e=t.alternate;e!==null&&(t.alternate=null,q0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Vt],delete e[ho],delete e[Rd],delete e[Cb],delete e[Sb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Q0(t){return t.tag===5||t.tag===3||t.tag===4}function $g(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gl));else if(r!==4&&(t=t.child,t!==null))for(Vd(t,e,n),t=t.sibling;t!==null;)Vd(t,e,n),t=t.sibling}function Gd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Gd(t,e,n),t=t.sibling;t!==null;)Gd(t,e,n),t=t.sibling}var Le=null,Rt=!1;function Pn(t,e,n){for(n=n.child;n!==null;)X0(t,e,n),n=n.sibling}function X0(t,e,n){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(du,n)}catch{}switch(n.tag){case 5:He||_i(n,e);case 6:var r=Le,i=Rt;Le=null,Pn(t,e,n),Le=r,Rt=i,Le!==null&&(Rt?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Rt?(t=Le,n=n.stateNode,t.nodeType===8?yc(t.parentNode,n):t.nodeType===1&&yc(t,n),ao(t)):yc(Le,n.stateNode));break;case 4:r=Le,i=Rt,Le=n.stateNode.containerInfo,Rt=!0,Pn(t,e,n),Le=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wd(n,e,o),i=i.next}while(i!==r)}Pn(t,e,n);break;case 1:if(!He&&(_i(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){pe(n,e,a)}Pn(t,e,n);break;case 21:Pn(t,e,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,Pn(t,e,n),He=r):Pn(t,e,n);break;default:Pn(t,e,n)}}function jg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $b),e.forEach(function(r){var i=qb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Le=a.stateNode,Rt=!1;break e;case 3:Le=a.stateNode.containerInfo,Rt=!0;break e;case 4:Le=a.stateNode.containerInfo,Rt=!0;break e}a=a.return}if(Le===null)throw Error(T(160));X0(s,o,i),Le=null,Rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){pe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)J0(e,t),e=e.sibling}function J0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xt(e,t),Wt(t),r&4){try{Ws(3,t,t.return),_u(3,t)}catch(_){pe(t,t.return,_)}try{Ws(5,t,t.return)}catch(_){pe(t,t.return,_)}}break;case 1:xt(e,t),Wt(t),r&512&&n!==null&&_i(n,n.return);break;case 5:if(xt(e,t),Wt(t),r&512&&n!==null&&_i(n,n.return),t.flags&32){var i=t.stateNode;try{ro(i,"")}catch(_){pe(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&__(i,s),gd(a,o);var u=gd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?k_(i,d):c==="dangerouslySetInnerHTML"?C_(i,d):c==="children"?ro(i,d):eh(i,c,d,u)}switch(a){case"input":dd(i,s);break;case"textarea":w_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Ti(i,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ti(i,!!s.multiple,s.defaultValue,!0):Ti(i,!!s.multiple,s.multiple?[]:"",!1))}i[ho]=s}catch(_){pe(t,t.return,_)}}break;case 6:if(xt(e,t),Wt(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){pe(t,t.return,_)}}break;case 3:if(xt(e,t),Wt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(e.containerInfo)}catch(_){pe(t,t.return,_)}break;case 4:xt(e,t),Wt(t);break;case 13:xt(e,t),Wt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ah=we())),r&4&&jg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(He=(u=He)||c,xt(e,t),He=u):xt(e,t),Wt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(P=t,c=t.child;c!==null;){for(d=P=c;P!==null;){switch(f=P,h=f.child,f.tag){case 0:case 11:case 14:case 15:Ws(4,f,f.return);break;case 1:_i(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){pe(r,n,_)}}break;case 5:_i(f,f.return);break;case 22:if(f.memoizedState!==null){Bg(d);continue}}h!==null?(h.return=f,P=h):Bg(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=S_("display",o))}catch(_){pe(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){pe(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:xt(e,t),Wt(t),r&4&&jg(t);break;case 21:break;default:xt(e,t),Wt(t)}}function Wt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Q0(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ro(i,""),r.flags&=-33);var s=$g(t);Gd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=$g(t);Vd(t,a,o);break;default:throw Error(T(161))}}catch(l){pe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zb(t,e,n){P=t,Z0(t)}function Z0(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ea;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||He;a=Ea;var u=He;if(Ea=o,(He=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?Wg(i):l!==null?(l.return=o,P=l):Wg(i);for(;s!==null;)P=s,Z0(s),s=s.sibling;P=i,Ea=a,He=u}zg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):zg(t)}}function zg(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:He||_u(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!He)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Nt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ao(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}He||e.flags&512&&Hd(e)}catch(f){pe(e,e.return,f)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function Bg(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function Wg(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_u(4,e)}catch(l){pe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){pe(e,i,l)}}var s=e.return;try{Hd(e)}catch(l){pe(e,s,l)}break;case 5:var o=e.return;try{Hd(e)}catch(l){pe(e,o,l)}}}catch(l){pe(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var Bb=Math.ceil,Il=Tn.ReactCurrentDispatcher,Ph=Tn.ReactCurrentOwner,bt=Tn.ReactCurrentBatchConfig,K=0,De=null,Ee=null,Ue=0,ut=0,wi=mr(0),Se=0,_o=null,jr=0,wu=0,Oh=0,Hs=null,nt=null,Ah=0,Vi=1/0,rn=null,xl=!1,Kd=null,Zn=null,Ca=!1,Hn=null,Nl=0,Vs=0,Yd=null,Qa=-1,Xa=0;function qe(){return K&6?we():Qa!==-1?Qa:Qa=we()}function er(t){return t.mode&1?K&2&&Ue!==0?Ue&-Ue:bb.transition!==null?(Xa===0&&(Xa=L_()),Xa):(t=J,t!==0||(t=window.event,t=t===void 0?16:W_(t.type)),t):1}function Ft(t,e,n,r){if(50<Vs)throw Vs=0,Yd=null,Error(T(185));Uo(t,n,r),(!(K&2)||t!==De)&&(t===De&&(!(K&2)&&(wu|=n),Se===4&&Un(t,Ue)),lt(t,r),n===1&&K===0&&!(e.mode&1)&&(Vi=we()+500,gu&&gr()))}function lt(t,e){var n=t.callbackNode;bk(t,e);var r=fl(t,t===De?Ue:0);if(r===0)n!==null&&Jm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jm(n),e===1)t.tag===0?kb(Hg.bind(null,t)):l0(Hg.bind(null,t)),wb(function(){!(K&6)&&gr()}),n=null;else{switch(F_(r)){case 1:n=sh;break;case 4:n=D_;break;case 16:n=dl;break;case 536870912:n=M_;break;default:n=dl}n=aw(n,ew.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ew(t,e){if(Qa=-1,Xa=0,K&6)throw Error(T(327));var n=t.callbackNode;if(Pi()&&t.callbackNode!==n)return null;var r=fl(t,t===De?Ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Rl(t,r);else{e=r;var i=K;K|=2;var s=nw();(De!==t||Ue!==e)&&(rn=null,Vi=we()+500,Pr(t,e));do try{Vb();break}catch(a){tw(t,a)}while(1);yh(),Il.current=s,K=i,Ee!==null?e=0:(De=null,Ue=0,e=Se)}if(e!==0){if(e===2&&(i=Ed(t),i!==0&&(r=i,e=qd(t,i))),e===1)throw n=_o,Pr(t,0),Un(t,r),lt(t,we()),n;if(e===6)Un(t,r);else{if(i=t.current.alternate,!(r&30)&&!Wb(i)&&(e=Rl(t,r),e===2&&(s=Ed(t),s!==0&&(r=s,e=qd(t,s))),e===1))throw n=_o,Pr(t,0),Un(t,r),lt(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:_r(t,nt,rn);break;case 3:if(Un(t,r),(r&130023424)===r&&(e=Ah+500-we(),10<e)){if(fl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Nd(_r.bind(null,t,nt,rn),e);break}_r(t,nt,rn);break;case 4:if(Un(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Lt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bb(r/1960))-r,10<r){t.timeoutHandle=Nd(_r.bind(null,t,nt,rn),r);break}_r(t,nt,rn);break;case 5:_r(t,nt,rn);break;default:throw Error(T(329))}}}return lt(t,we()),t.callbackNode===n?ew.bind(null,t):null}function qd(t,e){var n=Hs;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=Rl(t,e),t!==2&&(e=nt,nt=n,e!==null&&Qd(e)),t}function Qd(t){nt===null?nt=t:nt.push.apply(nt,t)}function Wb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Un(t,e){for(e&=~Oh,e&=~wu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Lt(e),r=1<<n;t[n]=-1,e&=~r}}function Hg(t){if(K&6)throw Error(T(327));Pi();var e=fl(t,0);if(!(e&1))return lt(t,we()),null;var n=Rl(t,e);if(t.tag!==0&&n===2){var r=Ed(t);r!==0&&(e=r,n=qd(t,r))}if(n===1)throw n=_o,Pr(t,0),Un(t,e),lt(t,we()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,nt,rn),lt(t,we()),null}function Dh(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(Vi=we()+500,gu&&gr())}}function zr(t){Hn!==null&&Hn.tag===0&&!(K&6)&&Pi();var e=K;K|=1;var n=bt.transition,r=J;try{if(bt.transition=null,J=1,t)return t()}finally{J=r,bt.transition=n,K=e,!(K&6)&&gr()}}function Mh(){ut=wi.current,le(wi)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_b(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(mh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vl();break;case 3:Wi(),le(ot),le(Ve),kh();break;case 5:Sh(r);break;case 4:Wi();break;case 13:le(de);break;case 19:le(de);break;case 10:_h(r.type._context);break;case 22:case 23:Mh()}n=n.return}if(De=t,Ee=t=tr(t.current,null),Ue=ut=e,Se=0,_o=null,Oh=wu=jr=0,nt=Hs=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}br=null}return t}function tw(t,e){do{var n=Ee;try{if(yh(),Ka.current=Tl,bl){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bl=!1}if($r=0,Re=Ce=fe=null,Bs=!1,go=0,Ph.current=null,n===null||n.return===null){Se=1,_o=e,Ee=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=Pg(o);if(h!==null){h.flags&=-257,Og(h,o,a,s,e),h.mode&1&&Rg(s,u,e),e=h,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Rg(s,u,e),Lh();break e}l=Error(T(426))}}else if(ce&&a.mode&1){var C=Pg(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Og(C,o,a,s,e),gh(Hi(l,a));break e}}s=l=Hi(l,a),Se!==4&&(Se=2),Hs===null?Hs=[s]:Hs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=U0(s,l,e);Sg(s,m);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Zn===null||!Zn.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=$0(s,a,e);Sg(s,w);break e}}s=s.return}while(s!==null)}iw(n)}catch(S){e=S,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function nw(){var t=Il.current;return Il.current=Tl,t===null?Tl:t}function Lh(){(Se===0||Se===3||Se===2)&&(Se=4),De===null||!(jr&268435455)&&!(wu&268435455)||Un(De,Ue)}function Rl(t,e){var n=K;K|=2;var r=nw();(De!==t||Ue!==e)&&(rn=null,Pr(t,e));do try{Hb();break}catch(i){tw(t,i)}while(1);if(yh(),K=n,Il.current=r,Ee!==null)throw Error(T(261));return De=null,Ue=0,Se}function Hb(){for(;Ee!==null;)rw(Ee)}function Vb(){for(;Ee!==null&&!gk();)rw(Ee)}function rw(t){var e=ow(t.alternate,t,ut);t.memoizedProps=t.pendingProps,e===null?iw(t):Ee=e,Ph.current=null}function iw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ub(n,e),n!==null){n.flags&=32767,Ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Se=6,Ee=null;return}}else if(n=Fb(n,e,ut),n!==null){Ee=n;return}if(e=e.sibling,e!==null){Ee=e;return}Ee=e=t}while(e!==null);Se===0&&(Se=5)}function _r(t,e,n){var r=J,i=bt.transition;try{bt.transition=null,J=1,Gb(t,e,n,r)}finally{bt.transition=i,J=r}return null}function Gb(t,e,n,r){do Pi();while(Hn!==null);if(K&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Tk(t,s),t===De&&(Ee=De=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ca||(Ca=!0,aw(dl,function(){return Pi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bt.transition,bt.transition=null;var o=J;J=1;var a=K;K|=4,Ph.current=null,jb(t,n),J0(n,t),fb(Id),hl=!!Td,Id=Td=null,t.current=n,zb(n),vk(),K=a,J=o,bt.transition=s}else t.current=n;if(Ca&&(Ca=!1,Hn=t,Nl=i),s=t.pendingLanes,s===0&&(Zn=null),wk(n.stateNode),lt(t,we()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xl)throw xl=!1,t=Kd,Kd=null,t;return Nl&1&&t.tag!==0&&Pi(),s=t.pendingLanes,s&1?t===Yd?Vs++:(Vs=0,Yd=t):Vs=0,gr(),null}function Pi(){if(Hn!==null){var t=F_(Nl),e=bt.transition,n=J;try{if(bt.transition=null,J=16>t?16:t,Hn===null)var r=!1;else{if(t=Hn,Hn=null,Nl=0,K&6)throw Error(T(331));var i=K;for(K|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:Ws(8,c,s)}var d=c.child;if(d!==null)d.return=c,P=d;else for(;P!==null;){c=P;var f=c.sibling,h=c.return;if(q0(c),c===u){P=null;break}if(f!==null){f.return=h,P=f;break}P=h}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var C=_.sibling;_.sibling=null,_=C}while(_!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ws(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,P=m;break e}P=s.return}}var p=t.current;for(P=p;P!==null;){o=P;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,P=v;else e:for(o=p;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_u(9,a)}}catch(S){pe(a,a.return,S)}if(a===o){P=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,P=w;break e}P=a.return}}if(K=i,gr(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(du,t)}catch{}r=!0}return r}finally{J=n,bt.transition=e}}return!1}function Vg(t,e,n){e=Hi(n,e),e=U0(t,e,1),t=Jn(t,e,1),e=qe(),t!==null&&(Uo(t,1,e),lt(t,e))}function pe(t,e,n){if(t.tag===3)Vg(t,t,n);else for(;e!==null;){if(e.tag===3){Vg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){t=Hi(n,t),t=$0(e,t,1),e=Jn(e,t,1),t=qe(),e!==null&&(Uo(e,1,t),lt(e,t));break}}e=e.return}}function Kb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qe(),t.pingedLanes|=t.suspendedLanes&n,De===t&&(Ue&n)===n&&(Se===4||Se===3&&(Ue&130023424)===Ue&&500>we()-Ah?Pr(t,0):Oh|=n),lt(t,e)}function sw(t,e){e===0&&(t.mode&1?(e=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):e=1);var n=qe();t=yn(t,e),t!==null&&(Uo(t,e,n),lt(t,n))}function Yb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sw(t,n)}function qb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),sw(t,n)}var ow;ow=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ot.current)rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rt=!1,Lb(t,e,n);rt=!!(t.flags&131072)}else rt=!1,ce&&e.flags&1048576&&u0(e,wl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;qa(t,e),t=e.pendingProps;var i=ji(e,Ve.current);Ri(e,n),i=Th(null,e,r,t,i,n);var s=Ih();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,at(r)?(s=!0,yl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Eh(e),i.updater=vu,e.stateNode=i,i._reactInternals=e,Ld(e,r,t,n),e=$d(null,e,r,!0,s,n)):(e.tag=0,ce&&s&&ph(e),Ye(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(qa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Xb(r),t=Nt(r,t),i){case 0:e=Ud(null,e,r,t,n);break e;case 1:e=Mg(null,e,r,t,n);break e;case 11:e=Ag(null,e,r,t,n);break e;case 14:e=Dg(null,e,r,Nt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),Ud(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),Mg(t,e,r,i,n);case 3:e:{if(W0(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,h0(t,e),Sl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Hi(Error(T(423)),e),e=Lg(t,e,r,n,i);break e}else if(r!==i){i=Hi(Error(T(424)),e),e=Lg(t,e,r,n,i);break e}else for(ft=Xn(e.stateNode.containerInfo.firstChild),pt=e,ce=!0,Pt=null,n=v0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zi(),r===i){e=_n(t,e,n);break e}Ye(t,e,r,n)}e=e.child}return e;case 5:return y0(e),t===null&&Ad(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,xd(r,i)?o=null:s!==null&&xd(r,s)&&(e.flags|=32),B0(t,e),Ye(t,e,o,n),e.child;case 6:return t===null&&Ad(e),null;case 13:return H0(t,e,n);case 4:return Ch(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bi(e,null,r,n):Ye(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),Ag(t,e,r,i,n);case 7:return Ye(t,e,e.pendingProps,n),e.child;case 8:return Ye(t,e,e.pendingProps.children,n),e.child;case 12:return Ye(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,se(El,r._currentValue),r._currentValue=o,s!==null)if($t(s.value,o)){if(s.children===i.children&&!ot.current){e=_n(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=hn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Dd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Dd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ye(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ri(e,n),i=Tt(i),r=r(i),e.flags|=1,Ye(t,e,r,n),e.child;case 14:return r=e.type,i=Nt(r,e.pendingProps),i=Nt(r.type,i),Dg(t,e,r,i,n);case 15:return j0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),qa(t,e),e.tag=1,at(r)?(t=!0,yl(e)):t=!1,Ri(e,n),m0(e,r,i),Ld(e,r,i,n),$d(null,e,r,!0,t,n);case 19:return V0(t,e,n);case 22:return z0(t,e,n)}throw Error(T(156,e.tag))};function aw(t,e){return A_(t,e)}function Qb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(t,e,n,r){return new Qb(t,e,n,r)}function Fh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xb(t){if(typeof t=="function")return Fh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nh)return 11;if(t===rh)return 14}return 2}function tr(t,e){var n=t.alternate;return n===null?(n=St(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ja(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Fh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ci:return Or(n.children,i,s,e);case th:o=8,i|=8;break;case od:return t=St(12,n,e,i|2),t.elementType=od,t.lanes=s,t;case ad:return t=St(13,n,e,i),t.elementType=ad,t.lanes=s,t;case ld:return t=St(19,n,e,i),t.elementType=ld,t.lanes=s,t;case g_:return Eu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case p_:o=10;break e;case m_:o=9;break e;case nh:o=11;break e;case rh:o=14;break e;case Dn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=St(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Or(t,e,n,r){return t=St(7,t,r,e),t.lanes=n,t}function Eu(t,e,n,r){return t=St(22,t,r,e),t.elementType=g_,t.lanes=n,t.stateNode={isHidden:!1},t}function Tc(t,e,n){return t=St(6,t,null,e),t.lanes=n,t}function Ic(t,e,n){return e=St(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Jb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ac(0),this.expirationTimes=ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ac(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uh(t,e,n,r,i,s,o,a,l){return t=new Jb(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=St(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eh(s),t}function Zb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function lw(t){if(!t)return or;t=t._reactInternals;e:{if(Zr(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(at(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(at(n))return a0(t,n,e)}return e}function uw(t,e,n,r,i,s,o,a,l){return t=Uh(n,r,!0,t,i,s,o,a,l),t.context=lw(null),n=t.current,r=qe(),i=er(n),s=hn(r,i),s.callback=e??null,Jn(n,s,i),t.current.lanes=i,Uo(t,i,r),lt(t,r),t}function Cu(t,e,n,r){var i=e.current,s=qe(),o=er(i);return n=lw(n),e.context===null?e.context=n:e.pendingContext=n,e=hn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jn(i,e,o),t!==null&&(Ft(t,i,o,s),Ga(t,i,o)),o}function Pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $h(t,e){Gg(t,e),(t=t.alternate)&&Gg(t,e)}function eT(){return null}var cw=typeof reportError=="function"?reportError:function(t){console.error(t)};function jh(t){this._internalRoot=t}Su.prototype.render=jh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));Cu(t,e,null,null)};Su.prototype.unmount=jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zr(function(){Cu(null,t,null,null)}),e[vn]=null}};function Su(t){this._internalRoot=t}Su.prototype.unstable_scheduleHydration=function(t){if(t){var e=j_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fn.length&&e!==0&&e<Fn[n].priority;n++);Fn.splice(n,0,t),n===0&&B_(t)}};function zh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kg(){}function tT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Pl(o);s.call(u)}}var o=uw(e,r,t,0,null,!1,!1,"",Kg);return t._reactRootContainer=o,t[vn]=o.current,co(t.nodeType===8?t.parentNode:t),zr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Pl(l);a.call(u)}}var l=Uh(t,0,!1,null,null,!1,!1,"",Kg);return t._reactRootContainer=l,t[vn]=l.current,co(t.nodeType===8?t.parentNode:t),zr(function(){Cu(e,l,n,r)}),l}function bu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Pl(o);a.call(l)}}Cu(e,o,t,i)}else o=tT(n,e,t,i,r);return Pl(o)}U_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Os(e.pendingLanes);n!==0&&(oh(e,n|1),lt(e,we()),!(K&6)&&(Vi=we()+500,gr()))}break;case 13:zr(function(){var r=yn(t,1);if(r!==null){var i=qe();Ft(r,t,1,i)}}),$h(t,1)}};ah=function(t){if(t.tag===13){var e=yn(t,134217728);if(e!==null){var n=qe();Ft(e,t,134217728,n)}$h(t,134217728)}};$_=function(t){if(t.tag===13){var e=er(t),n=yn(t,e);if(n!==null){var r=qe();Ft(n,t,e,r)}$h(t,e)}};j_=function(){return J};z_=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};yd=function(t,e,n){switch(e){case"input":if(dd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=mu(r);if(!i)throw Error(T(90));y_(r),dd(r,i)}}}break;case"textarea":w_(t,n);break;case"select":e=n.value,e!=null&&Ti(t,!!n.multiple,e,!1)}};I_=Dh;x_=zr;var nT={usingClientEntryPoint:!1,Events:[jo,pi,mu,b_,T_,Dh]},Cs={findFiberByHostInstance:kr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rT={bundleType:Cs.bundleType,version:Cs.version,rendererPackageName:Cs.rendererPackageName,rendererConfig:Cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=P_(t),t===null?null:t.stateNode},findFiberByHostInstance:Cs.findFiberByHostInstance||eT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sa.isDisabled&&Sa.supportsFiber)try{du=Sa.inject(rT),qt=Sa}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nT;gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zh(e))throw Error(T(200));return Zb(t,e,null,n)};gt.createRoot=function(t,e){if(!zh(t))throw Error(T(299));var n=!1,r="",i=cw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Uh(t,1,!1,null,null,n,!1,r,i),t[vn]=e.current,co(t.nodeType===8?t.parentNode:t),new jh(e)};gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=P_(e),t=t===null?null:t.stateNode,t};gt.flushSync=function(t){return zr(t)};gt.hydrate=function(t,e,n){if(!ku(e))throw Error(T(200));return bu(null,t,e,!0,n)};gt.hydrateRoot=function(t,e,n){if(!zh(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=cw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=uw(e,null,t,1,n??null,i,!1,s,o),t[vn]=e.current,co(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Su(e)};gt.render=function(t,e,n){if(!ku(e))throw Error(T(200));return bu(null,t,e,!1,n)};gt.unmountComponentAtNode=function(t){if(!ku(t))throw Error(T(40));return t._reactRootContainer?(zr(function(){bu(null,null,t,!1,function(){t._reactRootContainer=null,t[vn]=null})}),!0):!1};gt.unstable_batchedUpdates=Dh;gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ku(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return bu(t,e,n,!1,r)};gt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=gt})(ek);const Ei=n_(al);var Yg=al;rd.createRoot=Yg.createRoot,rd.hydrateRoot=Yg.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw is(e)},is=function(t){return new Error("Firebase Database ("+dw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,h=u&63;l||(h=64,o||(f=64)),r.push(n[c],n[d],n[f],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const f=s<<2|a>>4;if(r.push(f),u!==64){const h=a<<4&240|u>>2;if(r.push(h),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},hw=function(t){const e=fw(t);return Bh.encodeByteArray(e,!0)},Ol=function(t){return hw(t).replace(/\./g,"")},Al=function(t){try{return Bh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t){return pw(void 0,t)}function pw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!oT(n)||(t[n]=pw(t[n],e[n]));return t}function oT(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function aT(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uT(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gw(){return dw.NODE_ADMIN===!0}function cT(){try{return typeof indexedDB=="object"}catch{return!1}}function dT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function fT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=()=>fT().__FIREBASE_DEFAULTS__,pT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Al(t[1]);return e&&JSON.parse(e)},Hh=()=>{try{return hT()||pT()||mT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vw=t=>{var e,n;return(n=(e=Hh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yw=t=>{const e=vw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gT=()=>{var t;return(t=Hh())===null||t===void 0?void 0:t.config},_w=t=>{var e;return(e=Hh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ol(JSON.stringify(n)),Ol(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="FirebaseError";class In extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vT,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wo.prototype.create)}}class Wo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new In(i,a,r)}}function yT(t,e){return t.replace(_T,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _T=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){return JSON.parse(t)}function Ae(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=wo(Al(s[0])||""),n=wo(Al(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},wT=function(t){const e=Ew(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ET=function(t){const e=Ew(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Gi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Xd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ml(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(qg(s)&&qg(o)){if(!Ml(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function ST(t,e){const n=new kT(t,e);return n.subscribe.bind(n)}class kT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xc),i.error===void 0&&(i.error=xc),i.complete===void 0&&(i.complete=xc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xc(){}function Tu(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Iu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t){return t&&t._delegate?t._delegate:t}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Bo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NT(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xT(t){return t===wr?void 0:t}function NT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const PT={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},OT=te.INFO,AT={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},DT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=AT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vh{constructor(e){this.name=e,this._logLevel=OT,this._logHandler=DT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const MT=(t,e)=>e.some(n=>t instanceof n);let Qg,Xg;function LT(){return Qg||(Qg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FT(){return Xg||(Xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cw=new WeakMap,Jd=new WeakMap,Sw=new WeakMap,Nc=new WeakMap,Gh=new WeakMap;function UT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cw.set(n,t)}).catch(()=>{}),Gh.set(e,t),e}function $T(t){if(Jd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Jd.set(t,e)}let Zd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jT(t){Zd=t(Zd)}function zT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rc(this),e,...n);return Sw.set(r,e.sort?e.sort():[e]),nr(r)}:FT().includes(t)?function(...e){return t.apply(Rc(this),e),nr(Cw.get(this))}:function(...e){return nr(t.apply(Rc(this),e))}}function BT(t){return typeof t=="function"?zT(t):(t instanceof IDBTransaction&&$T(t),MT(t,LT())?new Proxy(t,Zd):t)}function nr(t){if(t instanceof IDBRequest)return UT(t);if(Nc.has(t))return Nc.get(t);const e=BT(t);return e!==t&&(Nc.set(t,e),Gh.set(e,t)),e}const Rc=t=>Gh.get(t);function WT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nr(o.result),l.oldVersion,l.newVersion,nr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const HT=["get","getKey","getAll","getAllKeys","count"],VT=["put","add","delete","clear"],Pc=new Map;function Jg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pc.get(e))return Pc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=VT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Pc.set(e,s),s}jT(t=>({...t,get:(e,n,r)=>Jg(e,n)||t.get(e,n,r),has:(e,n)=>!!Jg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ef="@firebase/app",Zg="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Vh("@firebase/app"),YT="@firebase/app-compat",qT="@firebase/analytics-compat",QT="@firebase/analytics",XT="@firebase/app-check-compat",JT="@firebase/app-check",ZT="@firebase/auth",eI="@firebase/auth-compat",tI="@firebase/database",nI="@firebase/database-compat",rI="@firebase/functions",iI="@firebase/functions-compat",sI="@firebase/installations",oI="@firebase/installations-compat",aI="@firebase/messaging",lI="@firebase/messaging-compat",uI="@firebase/performance",cI="@firebase/performance-compat",dI="@firebase/remote-config",fI="@firebase/remote-config-compat",hI="@firebase/storage",pI="@firebase/storage-compat",mI="@firebase/firestore",gI="@firebase/firestore-compat",vI="firebase",yI="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="[DEFAULT]",_I={[ef]:"fire-core",[YT]:"fire-core-compat",[QT]:"fire-analytics",[qT]:"fire-analytics-compat",[JT]:"fire-app-check",[XT]:"fire-app-check-compat",[ZT]:"fire-auth",[eI]:"fire-auth-compat",[tI]:"fire-rtdb",[nI]:"fire-rtdb-compat",[rI]:"fire-fn",[iI]:"fire-fn-compat",[sI]:"fire-iid",[oI]:"fire-iid-compat",[aI]:"fire-fcm",[lI]:"fire-fcm-compat",[uI]:"fire-perf",[cI]:"fire-perf-compat",[dI]:"fire-rc",[fI]:"fire-rc-compat",[hI]:"fire-gcs",[pI]:"fire-gcs-compat",[mI]:"fire-fst",[gI]:"fire-fst-compat","fire-js":"fire-js",[vI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=new Map,nf=new Map;function wI(t,e){try{t.container.addComponent(e)}catch(n){Br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wr(t){const e=t.name;if(nf.has(e))return Br.debug(`There were multiple attempts to register component ${e}.`),!1;nf.set(e,t);for(const n of Ll.values())wI(n,t);return!0}function xu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rr=new Wo("app","Firebase",EI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=yI;function kw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw rr.create("bad-app-name",{appName:String(i)});if(n||(n=gT()),!n)throw rr.create("no-options");const s=Ll.get(i);if(s){if(Ml(n,s.options)&&Ml(r,s.config))return s;throw rr.create("duplicate-app",{appName:i})}const o=new RT(i);for(const l of nf.values())o.addComponent(l);const a=new CI(n,r,o);return Ll.set(i,a),a}function Kh(t=tf){const e=Ll.get(t);if(!e&&t===tf)return kw();if(!e)throw rr.create("no-app",{appName:t});return e}function Xt(t,e,n){var r;let i=(r=_I[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Br.warn(a.join(" "));return}Wr(new ar(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="firebase-heartbeat-database",kI=1,Eo="firebase-heartbeat-store";let Oc=null;function bw(){return Oc||(Oc=WT(SI,kI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Eo)}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),Oc}async function bI(t){try{return(await bw()).transaction(Eo).objectStore(Eo).get(Tw(t))}catch(e){if(e instanceof In)Br.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Br.warn(n.message)}}}async function ev(t,e){try{const r=(await bw()).transaction(Eo,"readwrite");return await r.objectStore(Eo).put(e,Tw(t)),r.done}catch(n){if(n instanceof In)Br.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Br.warn(r.message)}}}function Tw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=1024,II=30*24*60*60*1e3;class xI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=II}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=tv(),{heartbeatsToSend:n,unsentEntries:r}=NI(this._heartbeatsCache.heartbeats),i=Ol(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function tv(){return new Date().toISOString().substring(0,10)}function NI(t,e=TI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),nv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cT()?dT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ev(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ev(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function nv(t){return Ol(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t){Wr(new ar("platform-logger",e=>new GT(e),"PRIVATE")),Wr(new ar("heartbeat",e=>new xI(e),"PRIVATE")),Xt(ef,Zg,t),Xt(ef,Zg,"esm2017"),Xt("fire-js","")}PI("");var OI="firebase",AI="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(OI,AI,"app");const rv="@firebase/database",iv="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iw="";function DI(t){Iw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:wo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return tn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new MI(e)}}catch{}return new LI},Ir=xw("localStorage"),rf=xw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Vh("@firebase/database"),FI=function(){let t=1;return function(){return t++}}(),Nw=function(t){const e=TT(t),n=new CT;n.update(e);const r=n.digest();return Bh.encodeByteArray(r)},Ho=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ho.apply(null,r):typeof r=="object"?e+=Ae(r):e+=r,e+=" "}return e};let Ar=null,sv=!0;const UI=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Oi.logLevel=te.VERBOSE,Ar=Oi.log.bind(Oi),e&&rf.set("logging_enabled",!0)):typeof t=="function"?Ar=t:(Ar=null,rf.remove("logging_enabled"))},Fe=function(...t){if(sv===!0&&(sv=!1,Ar===null&&rf.get("logging_enabled")===!0&&UI(!0)),Ar){const e=Ho.apply(null,t);Ar(e)}},Vo=function(t){return function(...e){Fe(t,...e)}},sf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ho(...t);Oi.error(e)},wn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ho(...t)}`;throw Oi.error(e),new Error(e)},Qe=function(...t){const e="FIREBASE WARNING: "+Ho(...t);Oi.warn(e)},$I=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Yh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},jI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ki="[MIN_NAME]",Hr="[MAX_NAME]",ei=function(t,e){if(t===e)return 0;if(t===Ki||e===Hr)return-1;if(e===Ki||t===Hr)return 1;{const n=ov(t),r=ov(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},zI=function(t,e){return t===e?0:t<e?-1:1},Ss=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ae(e))},qh=function(t){if(typeof t!="object"||t===null)return Ae(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ae(e[r]),n+=":",n+=qh(t[e[r]]);return n+="}",n},Rw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Pw=function(t){I(!Yh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},BI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},WI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function HI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const VI=new RegExp("^-?(0*)\\d{1,10}$"),GI=-2147483648,KI=2147483647,ov=function(t){if(VI.test(t)){const e=Number(t);if(e>=GI&&e<=KI)return e}return null},as=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},YI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Gs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Qe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qe(e)}}class Ai{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ai.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="5",Ow="v",Aw="s",Dw="r",Mw="f",Lw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fw="ls",Uw="p",of="ac",$w="websocket",jw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ir.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ir.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function XI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Bw(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===$w)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===jw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);XI(t)&&(n.ns=t.namespace);const i=[];return je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(){this.counters_={}}incrementCounter(e,n=1){tn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return sT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac={},Dc={};function Xh(t){const e=t.toString();return Ac[e]||(Ac[e]=new JI),Ac[e]}function ZI(t,e){const n=t.toString();return Dc[n]||(Dc[n]=e()),Dc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&as(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="start",tx="close",nx="pLPCommand",rx="pRTLPCB",Ww="id",Hw="pw",Vw="ser",ix="cb",sx="seg",ox="ts",ax="d",lx="dframe",Gw=1870,Kw=30,ux=Gw-Kw,cx=25e3,dx=3e4;class Ci{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vo(e),this.stats_=Xh(n),this.urlFn=l=>(this.appCheckToken&&(l[of]=this.appCheckToken),Bw(n,jw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ex(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dx)),jI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Jh((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===av)this.id=a,this.password=l;else if(o===tx)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[av]="t",r[Vw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[ix]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ow]=Qh,this.transportSessionId&&(r[Aw]=this.transportSessionId),this.lastSessionId&&(r[Fw]=this.lastSessionId),this.applicationId&&(r[Uw]=this.applicationId),this.appCheckToken&&(r[of]=this.appCheckToken),typeof location<"u"&&location.hostname&&Lw.test(location.hostname)&&(r[Dw]=Mw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ci.forceAllow_=!0}static forceDisallow(){Ci.forceDisallow_=!0}static isAvailable(){return Ci.forceAllow_?!0:!Ci.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!BI()&&!WI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=hw(n),i=Rw(r,ux);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[lx]="t",r[Ww]=e,r[Hw]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Jh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=FI(),window[nx+this.uniqueCallbackIdentifier]=e,window[rx+this.uniqueCallbackIdentifier]=n,this.myIFrame=Jh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Fe("frame writing exception"),a.stack&&Fe(a.stack),Fe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Fe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ww]=this.myID,e[Hw]=this.myPW,e[Vw]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Kw+r.length<=Gw;){const o=this.pendingSegs.shift();r=r+"&"+sx+i+"="+o.seg+"&"+ox+i+"="+o.ts+"&"+ax+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(cx)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=16384,hx=45e3;let Fl=null;typeof MozWebSocket<"u"?Fl=MozWebSocket:typeof WebSocket<"u"&&(Fl=WebSocket);class At{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vo(this.connId),this.stats_=Xh(n),this.connURL=At.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Ow]=Qh,typeof location<"u"&&location.hostname&&Lw.test(location.hostname)&&(o[Dw]=Mw),n&&(o[Aw]=n),r&&(o[Fw]=r),i&&(o[of]=i),s&&(o[Uw]=s),Bw(e,$w,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ir.set("previous_websocket_failure",!0);try{let r;gw(),this.mySock=new Fl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){At.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Fl!==null&&!At.forceDisallow_}static previouslyFailed(){return Ir.isInMemoryStorage||Ir.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ir.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=wo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Rw(n,fx);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(hx))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}At.responsesRequiredToBeHealthy=2;At.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ci,At]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=At&&At.isAvailable();let r=n&&!At.previouslyFailed();if(e.webSocketOnly&&(n||Qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[At];else{const i=this.transports_=[];for(const s of Co.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Co.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Co.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=6e4,mx=5e3,gx=10*1024,vx=100*1024,Mc="t",lv="d",yx="s",uv="r",_x="e",cv="o",dv="a",fv="n",hv="p",wx="h";class Ex{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vo("c:"+this.id+":"),this.transportManager_=new Co(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Gs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>vx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>gx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Mc in e){const n=e[Mc];n===dv?this.upgradeIfSecondaryHealthy_():n===uv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===cv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ss("t",e),r=Ss("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:dv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ss("t",e),r=Ss("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ss(Mc,e);if(lv in e){const r=e[lv];if(n===wx)this.onHandshake_(r);else if(n===fv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===yx?this.onConnectionShutdown_(r):n===uv?this.onReset_(r):n===_x?sf("Server Error: "+r):n===cv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Qh!==r&&Qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Gs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(px))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ir.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends qw{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Wh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ul}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=32,mv=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Y(){return new Z("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function lr(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function Zh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Cx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function So(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Qw(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function ge(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Z)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Z(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function it(t,e){const n=z(t),r=z(e);if(n===null)return e;if(n===r)return it(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Sx(t,e){const n=So(t,0),r=So(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=ei(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function ep(t,e){if(lr(t)!==lr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function kt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(lr(t)>lr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class kx{constructor(e,n){this.errorPrefix_=n,this.parts_=So(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Iu(this.parts_[r]);Xw(this)}}function bx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Iu(e),Xw(t)}function Tx(t){const e=t.parts_.pop();t.byteLength_-=Iu(e),t.parts_.length>0&&(t.byteLength_-=1)}function Xw(t){if(t.byteLength_>mv)throw new Error(t.errorPrefix_+"has a key path longer than "+mv+" bytes ("+t.byteLength_+").");if(t.parts_.length>pv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pv+") or object contains a cycle "+Er(t))}function Er(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp extends qw{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new tp}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=1e3,Ix=60*5*1e3,gv=30*1e3,xx=1.3,Nx=3e4,Rx="server_kill",vv=3;class pn extends Yw{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=pn.nextPersistentConnectionId_++,this.log_=Vo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ks,this.maxReconnectDelay_=Ix,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!gw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");tp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ul.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ae(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Bo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;pn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&tn(e,"w")){const r=Gi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ET(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=wT(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ae(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):sf("Unrecognized action received from server: "+Ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Nx&&(this.reconnectDelay_=ks),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+pn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Fe("getToken() completed but was canceled"):(Fe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new Ex(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,h=>{Qe(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(Rx)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Qe(d),l())}}}interrupt(e){Fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xd(this.interruptReasons_)&&(this.reconnectDelay_=ks,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>qh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Z(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Fe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vv&&(this.reconnectDelay_=gv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Fe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Iw.replace(/\./g,"-")]=1,Wh()?e["framework.cordova"]=1:mw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ul.getInstance().currentlyOnline();return Xd(this.interruptReasons_)&&e}}pn.nextPersistentConnectionId_=0;pn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new B(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new B(Ki,e),i=new B(Ki,n);return this.compare(r,i)!==0}minPost(){return B.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka;class Jw extends Nu{static get __EMPTY_NODE(){return ka}static set __EMPTY_NODE(e){ka=e}compare(e,n){return ei(e.name,n.name)}isDefinedOn(e){throw is("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return B.MIN}maxPost(){return new B(Hr,ka)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new B(e,ka)}toString(){return".key"}}const Di=new Jw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Pe.RED,this.left=i??st.EMPTY_NODE,this.right=s??st.EMPTY_NODE}copy(e,n,r,i,s){return new Pe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return st.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return st.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pe.RED=!0;Pe.BLACK=!1;class Px{copy(e,n,r,i,s){return this}insert(e,n,r){return new Pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class st{constructor(e,n=st.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new st(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Pe.BLACK,null,null))}remove(e){return new st(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ba(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ba(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ba(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ba(this.root_,null,this.comparator_,!0,e)}}st.EMPTY_NODE=new Px;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t,e){return ei(t.name,e.name)}function np(t,e){return ei(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let af;function Ax(t){af=t}const Zw=function(t){return typeof t=="number"?"number:"+Pw(t):"string:"+t},eE=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tn(e,".sv"),"Priority must be a string or number.")}else I(t===af||t.isEmpty(),"priority of unexpected type.");I(t===af||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yv;class Ne{constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),eE(this.priorityNode_)}static set __childrenNodeConstructor(e){yv=e}static get __childrenNodeConstructor(){return yv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:z(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||lr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Pw(this.value_):e+=this.value_,this.lazyHash_=Nw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ne.VALUE_TYPE_ORDER.indexOf(n),s=Ne.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tE,nE;function Dx(t){tE=t}function Mx(t){nE=t}class Lx extends Nu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ei(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return B.MIN}maxPost(){return new B(Hr,new Ne("[PRIORITY-POST]",nE))}makePost(e,n){const r=tE(e);return new B(n,new Ne("[PRIORITY-POST]",r))}toString(){return".priority"}}const ve=new Lx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx=Math.log(2);class Ux{constructor(e){const n=s=>parseInt(Math.log(s)/Fx,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $l=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new Pe(f,d.node,Pe.BLACK,null,null);{const h=parseInt(c/2,10)+l,g=i(l,h),_=i(h+1,u);return d=t[h],f=n?n(d):d,new Pe(f,d.node,Pe.BLACK,g,_)}},s=function(l){let u=null,c=null,d=t.length;const f=function(g,_){const C=d-g,m=d;d-=g;const p=i(C+1,m),v=t[C],w=n?n(v):v;h(new Pe(w,v.node,_,null,p))},h=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),C=Math.pow(2,l.count-(g+1));_?f(C,Pe.BLACK):(f(C,Pe.BLACK),f(C,Pe.RED))}return c},o=new Ux(t.length),a=s(o);return new st(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc;const oi={};class cn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(oi&&ve,"ChildrenNode.ts has not been loaded"),Lc=Lc||new cn({".priority":oi},{".priority":ve}),Lc}get(e){const n=Gi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof st?n:null}hasIndex(e){return tn(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Di,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(B.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=$l(r,e.getCompare()):a=oi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new cn(c,u)}addToIndexes(e,n){const r=Dl(this.indexes_,(i,s)=>{const o=Gi(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===oi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(B.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),$l(a,o.getCompare())}else return oi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new B(e.name,a))),l.insert(e,e.node)}});return new cn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Dl(this.indexes_,i=>{if(i===oi)return i;{const s=n.get(e.name);return s?i.remove(new B(e.name,s)):i}});return new cn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bs;class L{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&eE(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return bs||(bs=new L(new st(np),null,cn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bs}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?bs:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new B(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?bs:this.priorityNode_;return new L(i,o,s)}}updateChild(e,n){const r=z(e);if(r===null)return n;{I(z(e)!==".priority"||lr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ie(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ve,(o,a)=>{n[o]=a.val(e),r++,s&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zw(this.getPriority().val())+":"),this.forEachChild(ve,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Nw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new B(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new B(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new B(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Go?-1:0}withIndex(e){if(e===Di||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Di||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ve),i=n.getIterator(ve);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Di?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $x extends L{constructor(){super(new st(np),L.EMPTY_NODE,cn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Go=new $x;Object.defineProperties(B,{MIN:{value:new B(Ki,L.EMPTY_NODE)},MAX:{value:new B(Hr,Go)}});Jw.__EMPTY_NODE=L.EMPTY_NODE;Ne.__childrenNodeConstructor=L;Ax(Go);Mx(Go);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=!0;function Oe(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,Oe(e))}if(!(t instanceof Array)&&jx){const n=[];let r=!1;if(je(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Oe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new B(o,l)))}}),n.length===0)return L.EMPTY_NODE;const s=$l(n,Ox,o=>o.name,np);if(r){const o=$l(n,ve.getCompare());return new L(s,Oe(e),new cn({".priority":o},{".priority":ve}))}else return new L(s,Oe(e),cn.Default)}else{let n=L.EMPTY_NODE;return je(t,(r,i)=>{if(tn(t,r)&&r.substring(0,1)!=="."){const s=Oe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Oe(e))}}Dx(Oe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx extends Nu{constructor(e){super(),this.indexPath_=e,I(!W(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ei(e.name,n.name):s}makePost(e,n){const r=Oe(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,r);return new B(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Go);return new B(Hr,e)}toString(){return So(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx extends Nu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ei(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return B.MIN}maxPost(){return B.MAX}makePost(e,n){const r=Oe(e);return new B(n,r)}toString(){return".value"}}const Wx=new Bx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(t){return{type:"value",snapshotNode:t}}function Yi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ko(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function bo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Hx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ko(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Yi(n,r)):o.trackChildChange(bo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ve,(i,s)=>{n.hasChild(i)||r.trackChildChange(ko(i,s))}),n.isLeafNode()||n.forEachChild(ve,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(bo(i,s,o))}else r.trackChildChange(Yi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e){this.indexedFilter_=new rp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=To.getStartPost_(e),this.endPost_=To.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new B(n,r))||(r=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const s=this;return n.forEachChild(ve,(o,a)=>{s.matches(new B(o,a))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new To(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new B(n,r))||(r=L.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,h)=>d(h,f)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new B(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:o(f,l);if(c&&!r.isEmpty()&&h>=0)return s!=null&&s.trackChildChange(bo(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ko(n,d));const _=a.updateImmediateChild(n,L.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Yi(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ko(u.name,u.node)),s.trackChildChange(Yi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ki}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Hr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new ip;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Gx(t){return t.loadsAllData()?new rp(t.getIndex()):t.hasLimit()?new Vx(t):new To(t)}function _v(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ve?n="$priority":t.index_===Wx?n="$value":t.index_===Di?n="$key":(I(t.index_ instanceof zx,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ae(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ae(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ae(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ae(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function wv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ve&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends Yw{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Vo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=jl.getListenId_(e,r),a={};this.listens_[o]=a;const l=_v(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Gi(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=jl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=_v(e._queryParams),r=e._path.toString(),i=new Bo;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ss(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=wo(a.responseText)}catch{Qe("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Qe("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(){return{value:null,children:new Map}}function iE(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=z(e);t.children.has(r)||t.children.set(r,zl());const i=t.children.get(r);e=ie(e),iE(i,e,n)}}function lf(t,e,n){t.value!==null?n(e,t.value):Yx(t,(r,i)=>{const s=new Z(e.toString()+"/"+r);lf(i,s,n)})}function Yx(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=10*1e3,Qx=30*1e3,Xx=5*60*1e3;class Jx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qx(e);const r=Ev+(Qx-Ev)*Math.random();Gs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;je(e,(i,s)=>{s>0&&tn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Gs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Xx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dt||(Dt={}));function sp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function op(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ap(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Dt.ACK_USER_WRITE,this.source=sp()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new Bl(Y(),n,this.revert)}}else return I(z(this.path)===e,"operationForChild called for unrelated child."),new Bl(ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.source=e,this.path=n,this.type=Dt.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new Io(this.source,Y()):new Io(this.source,ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Dt.OVERWRITE}operationForChild(e){return W(this.path)?new Vr(this.source,Y(),this.snap.getImmediateChild(e)):new Vr(this.source,ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Dt.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new Vr(this.source,Y(),n.value):new qi(this.source,Y(),n)}else return I(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qi(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function eN(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Hx(o.childName,o.snapshotNode))}),Ts(t,i,"child_removed",e,r,n),Ts(t,i,"child_added",e,r,n),Ts(t,i,"child_moved",s,r,n),Ts(t,i,"child_changed",e,r,n),Ts(t,i,"value",e,r,n),i}function Ts(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>nN(t,a,l)),o.forEach(a=>{const l=tN(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function tN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function nN(t,e,n){if(e.childName==null||n.childName==null)throw is("Should only compare child_ events.");const r=new B(e.childName,e.snapshotNode),i=new B(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t,e){return{eventCache:t,serverCache:e}}function Ks(t,e,n,r){return Ru(new Gr(e,n,r),t.serverCache)}function sE(t,e,n,r){return Ru(t.eventCache,new Gr(e,n,r))}function uf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Kr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fc;const rN=()=>(Fc||(Fc=new st(zI)),Fc);class re{constructor(e,n=rN()){this.value=e,this.children=n}static fromObject(e){let n=new re(null);return je(e,(r,i)=>{n=n.set(new Z(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Y(),value:this.value};if(W(e))return null;{const r=z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ie(e),n);return s!=null?{path:ge(new Z(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=z(e),r=this.children.get(n);return r!==null?r.subtree(ie(e)):new re(null)}}set(e,n){if(W(e))return new re(n,this.children);{const r=z(e),s=(this.children.get(r)||new re(null)).set(ie(e),n),o=this.children.insert(r,s);return new re(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=z(e),r=this.children.get(n);if(r){const i=r.remove(ie(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new re(null):new re(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const n=z(e),r=this.children.get(n);return r?r.get(ie(e)):null}}setTree(e,n){if(W(e))return n;{const r=z(e),s=(this.children.get(r)||new re(null)).setTree(ie(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new re(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ge(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Y(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(W(e))return null;{const s=z(e),o=this.children.get(s);return o?o.findOnPath_(ie(e),ge(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Y(),n)}foreachOnPath_(e,n,r){if(W(e))return this;{this.value&&r(n,this.value);const i=z(e),s=this.children.get(i);return s?s.foreachOnPath_(ie(e),ge(n,i),r):new re(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ge(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.writeTree_=e}static empty(){return new Ut(new re(null))}}function Ys(t,e,n){if(W(e))return new Ut(new re(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=it(i,e);return s=s.updateChild(o,n),new Ut(t.writeTree_.set(i,s))}else{const i=new re(n),s=t.writeTree_.setTree(e,i);return new Ut(s)}}}function cf(t,e,n){let r=t;return je(n,(i,s)=>{r=Ys(r,ge(e,i),s)}),r}function Cv(t,e){if(W(e))return Ut.empty();{const n=t.writeTree_.setTree(e,new re(null));return new Ut(n)}}function df(t,e){return ti(t,e)!=null}function ti(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(it(n.path,e)):null}function Sv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ve,(r,i)=>{e.push(new B(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new B(r,i.value))}),e}function ir(t,e){if(W(e))return t;{const n=ti(t,e);return n!=null?new Ut(new re(n)):new Ut(t.writeTree_.subtree(e))}}function ff(t){return t.writeTree_.isEmpty()}function Qi(t,e){return oE(Y(),t.writeTree_,e)}function oE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=oE(ge(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ge(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(t,e){return cE(e,t)}function iN(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ys(t.visibleWrites,e,n)),t.lastWriteId=r}function sN(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=cf(t.visibleWrites,e,n),t.lastWriteId=r}function oN(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function aN(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&lN(a,r.path)?i=!1:kt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return uN(t),!0;if(r.snap)t.visibleWrites=Cv(t.visibleWrites,r.path);else{const a=r.children;je(a,l=>{t.visibleWrites=Cv(t.visibleWrites,ge(r.path,l))})}return!0}else return!1}function lN(t,e){if(t.snap)return kt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&kt(ge(t.path,n),e))return!0;return!1}function uN(t){t.visibleWrites=aE(t.allWrites,cN,Y()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function cN(t){return t.visible}function aE(t,e,n){let r=Ut.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)kt(n,o)?(a=it(n,o),r=Ys(r,a,s.snap)):kt(o,n)&&(a=it(o,n),r=Ys(r,Y(),s.snap.getChild(a)));else if(s.children){if(kt(n,o))a=it(n,o),r=cf(r,a,s.children);else if(kt(o,n))if(a=it(o,n),W(a))r=cf(r,Y(),s.children);else{const l=Gi(s.children,z(a));if(l){const u=l.getChild(ie(a));r=Ys(r,Y(),u)}}}else throw is("WriteRecord should have .snap or .children")}}return r}function lE(t,e,n,r,i){if(!r&&!i){const s=ti(t.visibleWrites,e);if(s!=null)return s;{const o=ir(t.visibleWrites,e);if(ff(o))return n;if(n==null&&!df(o,Y()))return null;{const a=n||L.EMPTY_NODE;return Qi(o,a)}}}else{const s=ir(t.visibleWrites,e);if(!i&&ff(s))return n;if(!i&&n==null&&!df(s,Y()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(kt(u.path,e)||kt(e,u.path))},a=aE(t.allWrites,o,e),l=n||L.EMPTY_NODE;return Qi(a,l)}}}function dN(t,e,n){let r=L.EMPTY_NODE;const i=ti(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ve,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ir(t.visibleWrites,e);return n.forEachChild(ve,(o,a)=>{const l=Qi(ir(s,new Z(o)),a);r=r.updateImmediateChild(o,l)}),Sv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ir(t.visibleWrites,e);return Sv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function fN(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ge(e,n);if(df(t.visibleWrites,s))return null;{const o=ir(t.visibleWrites,s);return ff(o)?i.getChild(n):Qi(o,i.getChild(n))}}function hN(t,e,n,r){const i=ge(e,n),s=ti(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ir(t.visibleWrites,i);return Qi(o,r.getNode().getImmediateChild(n))}else return null}function pN(t,e){return ti(t.visibleWrites,e)}function mN(t,e,n,r,i,s,o){let a;const l=ir(t.visibleWrites,e),u=ti(l,Y());if(u!=null)a=u;else if(n!=null)a=Qi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let h=f.getNext();for(;h&&c.length<i;)d(h,r)!==0&&c.push(h),h=f.getNext();return c}else return[]}function gN(){return{visibleWrites:Ut.empty(),allWrites:[],lastWriteId:-1}}function Wl(t,e,n,r){return lE(t.writeTree,t.treePath,e,n,r)}function up(t,e){return dN(t.writeTree,t.treePath,e)}function kv(t,e,n,r){return fN(t.writeTree,t.treePath,e,n,r)}function Hl(t,e){return pN(t.writeTree,ge(t.treePath,e))}function vN(t,e,n,r,i,s){return mN(t.writeTree,t.treePath,e,n,r,i,s)}function cp(t,e,n){return hN(t.writeTree,t.treePath,e,n)}function uE(t,e){return cE(ge(t.treePath,e),t.writeTree)}function cE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,bo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ko(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Yi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,bo(r,e.snapshotNode,i.oldSnap));else throw is("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const dE=new _N;class dp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Gr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Kr(this.viewCache_),s=vN(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(t){return{filter:t}}function EN(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function CN(t,e,n,r,i){const s=new yN;let o,a;if(n.type===Dt.OVERWRITE){const u=n;u.source.fromUser?o=hf(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!W(u.path),o=Vl(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Dt.MERGE){const u=n;u.source.fromUser?o=kN(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=pf(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Dt.ACK_USER_WRITE){const u=n;u.revert?o=IN(t,e,u.path,r,i,s):o=bN(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Dt.LISTEN_COMPLETE)o=TN(t,e,n.path,r,s);else throw is("Unknown operation type: "+n.type);const l=s.getChanges();return SN(e,o,l),{viewCache:o,changes:l}}function SN(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=uf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(rE(uf(e)))}}function fE(t,e,n,r,i,s){const o=e.eventCache;if(Hl(r,n)!=null)return e;{let a,l;if(W(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Kr(e),c=u instanceof L?u:L.EMPTY_NODE,d=up(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Wl(r,Kr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=z(n);if(u===".priority"){I(lr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=kv(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=ie(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=kv(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=cp(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return Ks(e,a,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Vl(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(W(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),h,null)}else{const h=z(n);if(!l.isCompleteForPath(n)&&lr(n)>1)return e;const g=ie(n),C=l.getNode().getImmediateChild(h).updateChild(g,r);h===".priority"?u=c.updatePriority(l.getNode(),C):u=c.updateChild(l.getNode(),h,C,g,dE,null)}const d=sE(e,u,l.isFullyInitialized()||W(n),c.filtersNodes()),f=new dp(i,d,s);return fE(t,d,n,i,f,a)}function hf(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new dp(i,e,s);if(W(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ks(e,u,!0,t.filter.filtersNodes());else{const d=z(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ks(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=ie(n),h=a.getNode().getImmediateChild(d);let g;if(W(f))g=r;else{const _=c.getCompleteChild(d);_!=null?Zh(f)===".priority"&&_.getChild(Qw(f)).isEmpty()?g=_:g=_.updateChild(f,r):g=L.EMPTY_NODE}if(h.equals(g))l=e;else{const _=t.filter.updateChild(a.getNode(),d,g,f,c,o);l=Ks(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function bv(t,e){return t.eventCache.isCompleteForChild(e)}function kN(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=ge(n,l);bv(e,z(c))&&(a=hf(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=ge(n,l);bv(e,z(c))||(a=hf(t,a,c,u,i,s,o))}),a}function Tv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function pf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;W(n)?u=r:u=new re(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const h=e.serverCache.getNode().getImmediateChild(d),g=Tv(t,h,f);l=Vl(t,l,new Z(d),g,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const h=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!h){const g=e.serverCache.getNode().getImmediateChild(d),_=Tv(t,g,f);l=Vl(t,l,new Z(d),_,i,s,o,a)}}),l}function bN(t,e,n,r,i,s,o){if(Hl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(W(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Vl(t,e,n,l.getNode().getChild(n),i,s,a,o);if(W(n)){let u=new re(null);return l.getNode().forEachChild(Di,(c,d)=>{u=u.set(new Z(c),d)}),pf(t,e,n,u,i,s,a,o)}else return e}else{let u=new re(null);return r.foreach((c,d)=>{const f=ge(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),pf(t,e,n,u,i,s,a,o)}}function TN(t,e,n,r,i){const s=e.serverCache,o=sE(e,s.getNode(),s.isFullyInitialized()||W(n),s.isFiltered());return fE(t,o,n,r,dE,i)}function IN(t,e,n,r,i,s){let o;if(Hl(r,n)!=null)return e;{const a=new dp(r,e,i),l=e.eventCache.getNode();let u;if(W(n)||z(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Wl(r,Kr(e));else{const d=e.serverCache.getNode();I(d instanceof L,"serverChildren would be complete if leaf node"),c=up(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=z(n);let d=cp(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,ie(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,L.EMPTY_NODE,ie(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Wl(r,Kr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Hl(r,Y())!=null,Ks(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new rp(r.getIndex()),s=Gx(r);this.processor_=wN(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(L.EMPTY_NODE,a.getNode(),null),c=new Gr(l,o.isFullyInitialized(),i.filtersNodes()),d=new Gr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ru(d,c),this.eventGenerator_=new Zx(this.query_)}get query(){return this.query_}}function NN(t){return t.viewCache_.serverCache.getNode()}function RN(t,e){const n=Kr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function Iv(t){return t.eventRegistrations_.length===0}function PN(t,e){t.eventRegistrations_.push(e)}function xv(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Nv(t,e,n,r){e.type===Dt.MERGE&&e.source.queryId!==null&&(I(Kr(t.viewCache_),"We should always have a full cache before handling merges"),I(uf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=CN(t.processor_,i,e,n,r);return EN(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,hE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function ON(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ve,(s,o)=>{r.push(Yi(s,o))}),n.isFullyInitialized()&&r.push(rE(n.getNode())),hE(t,r,n.getNode(),e)}function hE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return eN(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gl;class AN{constructor(){this.views=new Map}}function DN(t){I(!Gl,"__referenceConstructor has already been defined"),Gl=t}function MN(){return I(Gl,"Reference.ts has not been loaded"),Gl}function LN(t){return t.views.size===0}function fp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),Nv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Nv(o,e,n,r));return s}}function FN(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Wl(n,i?r:null),l=!1;a?l=!0:r instanceof L?(a=up(n,r),l=!1):(a=L.EMPTY_NODE,l=!1);const u=Ru(new Gr(a,l,!1),new Gr(r,i,!1));return new xN(e,u)}return o}function UN(t,e,n,r,i,s){const o=FN(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),PN(o,n),ON(o,n)}function $N(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=ur(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(xv(u,n,r)),Iv(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(xv(l,n,r)),Iv(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!ur(t)&&s.push(new(MN())(e._repo,e._path)),{removed:s,events:o}}function pE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Mi(t,e){let n=null;for(const r of t.views.values())n=n||RN(r,e);return n}function mE(t,e){if(e._queryParams.loadsAllData())return Pu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function gE(t,e){return mE(t,e)!=null}function ur(t){return Pu(t)!=null}function Pu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kl;function jN(t){I(!Kl,"__referenceConstructor has already been defined"),Kl=t}function zN(){return I(Kl,"Reference.ts has not been loaded"),Kl}let BN=1;class Rv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=gN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vE(t,e,n,r,i){return iN(t.pendingWriteTree_,e,n,r,i),i?ls(t,new Vr(sp(),e,n)):[]}function WN(t,e,n,r){sN(t.pendingWriteTree_,e,n,r);const i=re.fromObject(n);return ls(t,new qi(sp(),e,i))}function Vn(t,e,n=!1){const r=oN(t.pendingWriteTree_,e);if(aN(t.pendingWriteTree_,e)){let s=new re(null);return r.snap!=null?s=s.set(Y(),!0):je(r.children,o=>{s=s.set(new Z(o),!0)}),ls(t,new Bl(r.path,s,n))}else return[]}function Ou(t,e,n){return ls(t,new Vr(op(),e,n))}function HN(t,e,n){const r=re.fromObject(n);return ls(t,new qi(op(),e,r))}function VN(t,e){return ls(t,new Io(op(),e))}function GN(t,e,n){const r=pp(t,n);if(r){const i=mp(r),s=i.path,o=i.queryId,a=it(s,e),l=new Io(ap(o),a);return gp(t,s,l)}else return[]}function mf(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||gE(o,e))){const l=$N(o,e,n,r);LN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,h)=>ur(h));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const h=qN(f);for(let g=0;g<h.length;++g){const _=h[g],C=_.query,m=wE(t,_);t.listenProvider_.startListening(qs(C),Yl(t,C),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(qs(e),null):u.forEach(f=>{const h=t.queryToTagMap.get(Au(f));t.listenProvider_.stopListening(qs(f),h)}))}QN(t,u)}return a}function KN(t,e,n,r){const i=pp(t,r);if(i!=null){const s=mp(i),o=s.path,a=s.queryId,l=it(o,e),u=new Vr(ap(a),l,n);return gp(t,o,u)}else return[]}function YN(t,e,n,r){const i=pp(t,r);if(i){const s=mp(i),o=s.path,a=s.queryId,l=it(o,e),u=re.fromObject(n),c=new qi(ap(a),l,u);return gp(t,o,c)}else return[]}function Pv(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,h)=>{const g=it(f,i);s=s||Mi(h,g),o=o||ur(h)});let a=t.syncPointTree_.get(i);a?(o=o||ur(a),s=s||Mi(a,Y())):(a=new AN,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((h,g)=>{const _=Mi(g,Y());_&&(s=s.updateImmediateChild(h,_))}));const u=gE(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Au(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=XN();t.queryToTagMap.set(f,h),t.tagToQueryMap.set(h,f)}const c=lp(t.pendingWriteTree_,i);let d=UN(a,e,n,c,s,l);if(!u&&!o&&!r){const f=mE(a,e);d=d.concat(JN(t,e,f))}return d}function hp(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=it(o,e),u=Mi(a,l);if(u)return u});return lE(i,e,s,n,!0)}function ls(t,e){return yE(e,t.syncPointTree_,null,lp(t.pendingWriteTree_,Y()))}function yE(t,e,n,r){if(W(t.path))return _E(t,e,n,r);{const i=e.get(Y());n==null&&i!=null&&(n=Mi(i,Y()));let s=[];const o=z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=uE(r,o);s=s.concat(yE(a,l,u,c))}return i&&(s=s.concat(fp(i,t,r,n))),s}}function _E(t,e,n,r){const i=e.get(Y());n==null&&i!=null&&(n=Mi(i,Y()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=uE(r,o),c=t.operationForChild(o);c&&(s=s.concat(_E(c,a,l,u)))}),i&&(s=s.concat(fp(i,t,r,n))),s}function wE(t,e){const n=e.query,r=Yl(t,n);return{hashFn:()=>(NN(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?GN(t,n._path,r):VN(t,n._path);{const s=HI(i,n);return mf(t,n,null,s)}}}}function Yl(t,e){const n=Au(e);return t.queryToTagMap.get(n)}function Au(t){return t._path.toString()+"$"+t._queryIdentifier}function pp(t,e){return t.tagToQueryMap.get(e)}function mp(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function gp(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=lp(t.pendingWriteTree_,e);return fp(r,n,i,null)}function qN(t){return t.fold((e,n,r)=>{if(n&&ur(n))return[Pu(n)];{let i=[];return n&&(i=pE(n)),je(r,(s,o)=>{i=i.concat(o)}),i}})}function qs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(zN())(t._repo,t._path):t}function QN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Au(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function XN(){return BN++}function JN(t,e,n){const r=e._path,i=Yl(t,e),s=wE(t,n),o=t.listenProvider_.startListening(qs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)I(!ur(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!W(u)&&c&&ur(c))return[Pu(c).query];{let f=[];return c&&(f=f.concat(pE(c).map(h=>h.query))),je(d,(h,g)=>{f=f.concat(g)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(qs(c),Yl(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vp(n)}node(){return this.node_}}class yp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ge(this.path_,e);return new yp(this.syncTree_,n)}node(){return hp(this.syncTree_,this.path_)}}const ZN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ov=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return eR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return tR(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},eR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},tR=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},EE=function(t,e,n,r){return _p(e,new yp(n,t),r)},CE=function(t,e,n){return _p(t,new vp(e),n)};function _p(t,e,n){const r=t.getPriority().val(),i=Ov(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Ov(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ne(a,Oe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ne(i))),o.forEachChild(ve,(a,l)=>{const u=_p(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ep(t,e){let n=e instanceof Z?e:new Z(e),r=t,i=z(n);for(;i!==null;){const s=Gi(r.node.children,i)||{children:{},childCount:0};r=new wp(i,r,s),n=ie(n),i=z(n)}return r}function us(t){return t.node.value}function SE(t,e){t.node.value=e,gf(t)}function kE(t){return t.node.childCount>0}function nR(t){return us(t)===void 0&&!kE(t)}function Du(t,e){je(t.node.children,(n,r)=>{e(new wp(n,t,r))})}function bE(t,e,n,r){n&&!r&&e(t),Du(t,i=>{bE(i,e,!0,r)}),n&&r&&e(t)}function rR(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ko(t){return new Z(t.parent===null?t.name:Ko(t.parent)+"/"+t.name)}function gf(t){t.parent!==null&&iR(t.parent,t.name,t)}function iR(t,e,n){const r=nR(n),i=tn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,gf(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,gf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=/[\[\].#$\/\u0000-\u001F\u007F]/,oR=/[\[\].#$\u0000-\u001F\u007F]/,Uc=10*1024*1024,Cp=function(t){return typeof t=="string"&&t.length!==0&&!sR.test(t)},TE=function(t){return typeof t=="string"&&t.length!==0&&!oR.test(t)},aR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),TE(t)},lR=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Yh(t)||t&&typeof t=="object"&&tn(t,".sv")},IE=function(t,e,n,r){r&&e===void 0||Mu(Tu(t,"value"),e,n)},Mu=function(t,e,n){const r=n instanceof Z?new kx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Er(r));if(typeof e=="function")throw new Error(t+"contains a function "+Er(r)+" with contents = "+e.toString());if(Yh(e))throw new Error(t+"contains "+e.toString()+" "+Er(r));if(typeof e=="string"&&e.length>Uc/3&&Iu(e)>Uc)throw new Error(t+"contains a string greater than "+Uc+" utf8 bytes "+Er(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(je(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Cp(o)))throw new Error(t+" contains an invalid key ("+o+") "+Er(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);bx(r,o),Mu(t,a,r),Tx(r)}),i&&s)throw new Error(t+' contains ".value" child '+Er(r)+" in addition to actual children.")}},uR=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=So(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Cp(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Sx);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&kt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},cR=function(t,e,n,r){if(r&&e===void 0)return;const i=Tu(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];je(e,(o,a)=>{const l=new Z(o);if(Mu(i,a,ge(n,l)),Zh(l)===".priority"&&!lR(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),uR(i,s)},xE=function(t,e,n,r){if(!(r&&n===void 0)&&!TE(n))throw new Error(Tu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},dR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xE(t,e,n,r)},NE=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},fR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Cp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!aR(n))throw new Error(Tu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Lu(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ep(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function RE(t,e,n){Lu(t,n),PE(t,r=>ep(r,e))}function jt(t,e,n){Lu(t,n),PE(t,r=>kt(r,e)||kt(e,r))}function PE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(pR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function pR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ar&&Fe("event: "+n.toString()),as(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="repo_interrupt",gR=25;class vR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new hR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zl(),this.transactionQueueTree_=new wp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function yR(t,e,n){if(t.stats_=Xh(t.repoInfo_),t.forceRestClient_||YI())t.server_=new jl(t.repoInfo_,(r,i,s,o)=>{Av(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Dv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ae(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new pn(t.repoInfo_,e,(r,i,s,o)=>{Av(t,r,i,s,o)},r=>{Dv(t,r)},r=>{_R(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ZI(t.repoInfo_,()=>new Jx(t.stats_,t.server_)),t.infoData_=new Kx,t.infoSyncTree_=new Rv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ou(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Sp(t,"connected",!1),t.serverSyncTree_=new Rv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);jt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function OE(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Fu(t){return ZN({timestamp:OE(t)})}function Av(t,e,n,r,i){t.dataUpdateCount++;const s=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Dl(n,u=>Oe(u));o=YN(t.serverSyncTree_,s,l,i)}else{const l=Oe(n);o=KN(t.serverSyncTree_,s,l,i)}else if(r){const l=Dl(n,u=>Oe(u));o=HN(t.serverSyncTree_,s,l)}else{const l=Oe(n);o=Ou(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Xi(t,s)),jt(t.eventQueue_,a,o)}function Dv(t,e){Sp(t,"connected",e),e===!1&&CR(t)}function _R(t,e){je(e,(n,r)=>{Sp(t,n,r)})}function Sp(t,e,n){const r=new Z("/.info/"+e),i=Oe(n);t.infoData_.updateSnapshot(r,i);const s=Ou(t.infoSyncTree_,r,i);jt(t.eventQueue_,r,s)}function kp(t){return t.nextWriteId_++}function wR(t,e,n,r,i){Uu(t,"set",{path:e.toString(),value:n,priority:r});const s=Fu(t),o=Oe(n,r),a=hp(t.serverSyncTree_,e),l=CE(o,a,s),u=kp(t),c=vE(t.serverSyncTree_,e,l,u,!0);Lu(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,h)=>{const g=f==="ok";g||Qe("set at "+e+" failed: "+f);const _=Vn(t.serverSyncTree_,u,!g);jt(t.eventQueue_,e,_),vf(t,i,f,h)});const d=Tp(t,e);Xi(t,d),jt(t.eventQueue_,d,[])}function ER(t,e,n,r){Uu(t,"update",{path:e.toString(),value:n});let i=!0;const s=Fu(t),o={};if(je(n,(a,l)=>{i=!1,o[a]=EE(ge(e,a),Oe(l),t.serverSyncTree_,s)}),i)Fe("update() called with empty data.  Don't do anything."),vf(t,r,"ok",void 0);else{const a=kp(t),l=WN(t.serverSyncTree_,e,o,a);Lu(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||Qe("update at "+e+" failed: "+u);const f=Vn(t.serverSyncTree_,a,!d),h=f.length>0?Xi(t,e):e;jt(t.eventQueue_,h,f),vf(t,r,u,c)}),je(n,u=>{const c=Tp(t,ge(e,u));Xi(t,c)}),jt(t.eventQueue_,e,[])}}function CR(t){Uu(t,"onDisconnectEvents");const e=Fu(t),n=zl();lf(t.onDisconnect_,Y(),(i,s)=>{const o=EE(i,s,t.serverSyncTree_,e);iE(n,i,o)});let r=[];lf(n,Y(),(i,s)=>{r=r.concat(Ou(t.serverSyncTree_,i,s));const o=Tp(t,i);Xi(t,o)}),t.onDisconnect_=zl(),jt(t.eventQueue_,Y(),r)}function SR(t,e,n){let r;z(e._path)===".info"?r=Pv(t.infoSyncTree_,e,n):r=Pv(t.serverSyncTree_,e,n),RE(t.eventQueue_,e._path,r)}function Mv(t,e,n){let r;z(e._path)===".info"?r=mf(t.infoSyncTree_,e,n):r=mf(t.serverSyncTree_,e,n),RE(t.eventQueue_,e._path,r)}function kR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(mR)}function Uu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Fe(n,...e)}function vf(t,e,n,r){e&&as(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function AE(t,e,n){return hp(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function bp(t,e=t.transactionQueueTree_){if(e||$u(t,e),us(e)){const n=ME(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&bR(t,Ko(e),n)}else kE(e)&&Du(e,n=>{bp(t,n)})}function bR(t,e,n){const r=n.map(u=>u.currentWriteId),i=AE(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];I(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=it(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Uu(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(Vn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();$u(t,Ep(t.transactionQueueTree_,e)),bp(t,t.transactionQueueTree_),jt(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)as(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Qe("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Xi(t,e)}},o)}function Xi(t,e){const n=DE(t,e),r=Ko(n),i=ME(t,n);return TR(t,i,r),r}function TR(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=it(n,l.path);let c=!1,d;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=gR)c=!0,d="maxretry",i=i.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=AE(t,l.path,o);l.currentInputSnapshot=f;const h=e[a].update(f.val());if(h!==void 0){Mu("transaction failed: Data returned ",h,l.path);let g=Oe(h);typeof h=="object"&&h!=null&&tn(h,".priority")||(g=g.updatePriority(f.getPriority()));const C=l.currentWriteId,m=Fu(t),p=CE(g,f,m);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=p,l.currentWriteId=kp(t),o.splice(o.indexOf(C),1),i=i.concat(vE(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(Vn(t.serverSyncTree_,C,!0))}else c=!0,d="nodata",i=i.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0))}jt(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}$u(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)as(r[a]);bp(t,t.transactionQueueTree_)}function DE(t,e){let n,r=t.transactionQueueTree_;for(n=z(e);n!==null&&us(r)===void 0;)r=Ep(r,n),e=ie(e),n=z(e);return r}function ME(t,e){const n=[];return LE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function LE(t,e,n){const r=us(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Du(e,i=>{LE(t,i,n)})}function $u(t,e){const n=us(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,SE(e,n.length>0?n:void 0)}Du(e,r=>{$u(t,r)})}function Tp(t,e){const n=Ko(DE(t,e)),r=Ep(t.transactionQueueTree_,e);return rR(r,i=>{$c(t,i)}),$c(t,r),bE(r,i=>{$c(t,i)}),n}function $c(t,e){const n=us(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Vn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?SE(e,void 0):n.length=s+1,jt(t.eventQueue_,Ko(e),i);for(let o=0;o<r.length;o++)as(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function xR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Lv=function(t,e){const n=NR(t),r=n.namespace;n.domain==="firebase.com"&&wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||$I();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zw(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Z(n.pathString)}},NR=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=IR(t.substring(c,d)));const f=xR(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const h=e.slice(0,u);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",RR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Fv.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Fv.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ae(this.snapshot.exportVal())}}class UE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return W(this._path)?null:Zh(this._path)}get ref(){return new xn(this._repo,this._path)}get _queryIdentifier(){const e=wv(this._queryParams),n=qh(e);return n==="{}"?"default":n}get _queryObject(){return wv(this._queryParams)}isEqual(e){if(e=Me(e),!(e instanceof Ip))return!1;const n=this._repo===e._repo,r=ep(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Cx(this._path)}}class xn extends Ip{constructor(e,n){super(e,n,new ip,!1)}get parent(){const e=Qw(this._path);return e===null?null:new xn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class xo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Z(e),r=cr(this.ref,e);return new xo(this._node.getChild(n),r,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new xo(i,cr(this.ref,r),ve)))}hasChild(e){const n=new Z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Yo(t,e){return t=Me(t),t._checkNotDeleted("ref"),e!==void 0?cr(t._root,e):t._root}function cr(t,e){return t=Me(t),z(t._path)===null?dR("child","path",e,!1):xE("child","path",e,!1),new xn(t._repo,ge(t._path,e))}function OR(t,e){t=Me(t),NE("push",t._path),IE("push",e,t._path,!0);const n=OE(t._repo),r=RR(n),i=cr(t,r),s=cr(t,r);let o;return e!=null?o=xp(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function xp(t,e){t=Me(t),NE("set",t._path),IE("set",e,t._path,!1);const n=new Bo;return wR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function AR(t,e){cR("update",e,t._path,!1);const n=new Bo;return ER(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Np{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new FE("value",this,new xo(e.snapshotNode,new xn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new UE(this,e,n):null}matches(e){return e instanceof Np?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Rp{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new UE(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const r=cr(new xn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new FE(e.type,this,new xo(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Rp?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function DR(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{Mv(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new PR(n,s||void 0),a=e==="value"?new Np(o):new Rp(e,o);return SR(t._repo,t,a),()=>Mv(t._repo,t,a)}function MR(t,e,n,r){return DR(t,"value",e,n,r)}DN(xn);jN(xn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="FIREBASE_DATABASE_EMULATOR_HOST",yf={};let FR=!1;function UR(t,e,n,r){t.repoInfo_=new zw(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function $R(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Fe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Lv(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[LR]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Lv(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new Ai(Ai.OWNER):new QI(t.name,t.options,e);fR("Invalid Firebase Database URL",o),W(o.path)||wn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=zR(a,t,c,new qI(t.name,n));return new BR(d,t)}function jR(t,e){const n=yf[e];(!n||n[t.key]!==t)&&wn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),kR(t),delete n[t.key]}function zR(t,e,n,r){let i=yf[e.name];i||(i={},yf[e.name]=i);let s=i[t.toURLString()];return s&&wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new vR(t,FR,n,r),i[t.toURLString()]=s,s}class BR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(yR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xn(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wn("Cannot call "+e+" on a deleted database.")}}function WR(t=Kh(),e){const n=xu(t,"database").getImmediate({identifier:e}),r=yw("database");return r&&HR(n,...r),n}function HR(t,e,n,r={}){t=Me(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&wn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ai(Ai.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:ww(r.mockUserToken,t.app.options.projectId);s=new Ai(o)}UR(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(t){DI(os),Wr(new ar("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return $R(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Xt(rv,iv,t),Xt(rv,iv,"esm2017")}pn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};VR();function Pp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function $E(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GR=$E,jE=new Wo("auth","Firebase",$E());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=new Vh("@firebase/auth");function Za(t,...e){Uv.logLevel<=te.ERROR&&Uv.error(`Auth (${os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t,...e){throw Op(t,...e)}function Jt(t,...e){return Op(t,...e)}function zE(t,e,n){const r=Object.assign(Object.assign({},GR()),{[e]:n});return new Wo("auth","Firebase",r).create(e,{appName:t.name})}function KR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&en(t,"argument-error"),zE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Op(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jE.create(t,...e)}function $(t,e,...n){if(!t)throw Op(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Za(e),new Error(e)}function En(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=new Map;function fn(t){En(t instanceof Function,"Expected a class definition");let e=$v.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$v.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(t,e){const n=xu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ml(s,e??{}))return i;en(i,"already-initialized")}return n.initialize({options:e})}function qR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QR(){return jv()==="http:"||jv()==="https:"}function jv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QR()||lT()||"connection"in navigator)?navigator.onLine:!0}function JR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=Wh()||mw()}get(){return XR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t,e){En(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=new qo(3e4,6e4);function tP(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ju(t,e,n,r,i={}){return WE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ss(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),BE.fetch()(HE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function WE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZR),e);try{const i=new rP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ta(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ta(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ta(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ta(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw zE(t,c,u);en(t,c)}}catch(i){if(i instanceof In)throw i;en(t,"network-request-failed")}}async function nP(t,e,n,r,i={}){const s=await ju(t,e,n,r,i);return"mfaPendingCredential"in s&&en(t,"multi-factor-auth-required",{_serverResponse:s}),s}function HE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ap(t.config,i):`${t.config.apiScheme}://${i}`}class rP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),eP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Jt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(t,e){return ju(t,"POST","/v1/accounts:delete",e)}async function sP(t,e){return ju(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oP(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=Dp(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qs(jc(i.auth_time)),issuedAtTime:Qs(jc(i.iat)),expirationTime:Qs(jc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function jc(t){return Number(t)*1e3}function Dp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Za("JWT malformed, contained fewer than 3 sections"),null;try{const i=Al(n);return i?JSON.parse(i):(Za("Failed to decode base64 JWT payload"),null)}catch(i){return Za("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function aP(t){const e=Dp(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof In&&lP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(t){var e;const n=t.auth,r=await t.getIdToken(),i=await No(t,sP(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fP(s.providerUserInfo):[],a=dP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new VE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function cP(t){const e=Me(t);await ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fP(t){return t.map(e=>{var{providerId:n}=e,r=Pp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hP(t,e){const n=await WE(t,{},async()=>{const r=ss({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=HE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",BE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ro;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ro,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Pp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new VE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await No(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oP(this,e)}reload(){return cP(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Dr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await No(this,iP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:w,isAnonymous:S,providerData:k,stsTokenManager:b}=n;$(v&&b,e,"internal-error");const x=Ro.fromJSON(this.name,b);$(typeof v=="string",e,"internal-error"),On(d,e.name),On(f,e.name),$(typeof w=="boolean",e,"internal-error"),$(typeof S=="boolean",e,"internal-error"),On(h,e.name),On(g,e.name),On(_,e.name),On(C,e.name),On(m,e.name),On(p,e.name);const F=new Dr({uid:v,auth:e,email:f,emailVerified:w,displayName:d,isAnonymous:S,photoURL:g,phoneNumber:h,tenantId:_,stsTokenManager:x,createdAt:m,lastLoginAt:p});return k&&Array.isArray(k)&&(F.providerData=k.map(U=>Object.assign({},U))),C&&(F._redirectEventId=C),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ro;i.updateFromServerResponse(n);const s=new Dr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ql(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}GE.type="NONE";const zv=GE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t,e,n){return`firebase:${t}:${e}:${n}`}class Li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=el(this.userKey,i.apiKey,s),this.fullPersistenceKey=el("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Li(fn(zv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||fn(zv);const o=el(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Dr._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Li(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Li(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(KE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(XE(e))return"Blackberry";if(JE(e))return"Webos";if(Mp(e))return"Safari";if((e.includes("chrome/")||YE(e))&&!e.includes("edge/"))return"Chrome";if(QE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function KE(t=Ge()){return/firefox\//i.test(t)}function Mp(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function YE(t=Ge()){return/crios\//i.test(t)}function qE(t=Ge()){return/iemobile/i.test(t)}function QE(t=Ge()){return/android/i.test(t)}function XE(t=Ge()){return/blackberry/i.test(t)}function JE(t=Ge()){return/webos/i.test(t)}function zu(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pP(t=Ge()){var e;return zu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mP(){return uT()&&document.documentMode===10}function ZE(t=Ge()){return zu(t)||QE(t)||JE(t)||XE(t)||/windows phone/i.test(t)||qE(t)}function gP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t,e=[]){let n;switch(t){case"Browser":n=Bv(Ge());break;case"Worker":n=`${Bv(Ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${os}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wv(this),this.idTokenSubscription=new Wv(this),this.beforeStateQueue=new vP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Li.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Me(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Li.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=e1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Bu(t){return Me(t)}class Wv{constructor(e){this.auth=e,this.observer=null,this.addObserver=ST(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function _P(t,e,n){const r=Bu(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=t1(e),{host:o,port:a}=wP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||EP()}function t1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wP(t){const e=t1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hv(o)}}}function Hv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function EP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t,e){return nP(t,"POST","/v1/accounts:signInWithIdp",tP(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP="http://localhost";class Yr extends n1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Pp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fi(e,n)}buildRequest(){const e={requestUri:CP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ss(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends Lp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Qo{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return on.credential(n,r)}catch{return null}}}on.GOOGLE_SIGN_IN_METHOD="google.com";on.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Qo{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Qo{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Dr._fromIdTokenResponse(e,r,i),o=Vv(r);return new Ji({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Vv(r);return new Ji({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Vv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends In{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ql.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ql(e,n,r,i)}}function r1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ql._fromErrorAndOperation(t,s,e,r):s})}async function SP(t,e,n=!1){const r=await No(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ji._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kP(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await No(t,r1(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=Dp(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),Ji._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&en(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bP(t,e,n=!1){const r="signIn",i=await r1(t,r,e),s=await Ji._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function TP(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function IP(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function xP(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function NP(t){return Me(t).signOut()}const Xl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xl,"1"),this.storage.removeItem(Xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(){const t=Ge();return Mp(t)||zu(t)}const PP=1e3,OP=10;class s1 extends i1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=RP()&&gP(),this.fallbackToPolling=ZE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);mP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,OP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},PP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}s1.type="LOCAL";const AP=s1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1 extends i1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}o1.type="SESSION";const a1=o1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await DP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Fp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return window}function LP(t){Zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function FP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $P(){return l1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="firebaseLocalStorageDb",jP=1,Jl="firebaseLocalStorage",c1="fbase_key";class Xo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hu(t,e){return t.transaction([Jl],e?"readwrite":"readonly").objectStore(Jl)}function zP(){const t=indexedDB.deleteDatabase(u1);return new Xo(t).toPromise()}function wf(){const t=indexedDB.open(u1,jP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jl,{keyPath:c1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jl)?e(r):(r.close(),await zP(),e(await wf()))})})}async function Gv(t,e,n){const r=Hu(t,!0).put({[c1]:e,value:n});return new Xo(r).toPromise()}async function BP(t,e){const n=Hu(t,!1).get(e),r=await new Xo(n).toPromise();return r===void 0?null:r.value}function Kv(t,e){const n=Hu(t,!0).delete(e);return new Xo(n).toPromise()}const WP=800,HP=3;class d1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return l1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wu._getInstance($P()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await FP(),!this.activeServiceWorker)return;this.sender=new MP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wf();return await Gv(e,Xl,"1"),await Kv(e,Xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hu(i,!1).getAll();return new Xo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}d1.type="LOCAL";const VP=d1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function KP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Jt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",GP().appendChild(r)})}function YP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new qo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(t,e){return e?fn(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up extends n1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qP(t){return bP(t.auth,new Up(t),t.bypassAuthState)}function QP(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),kP(n,new Up(t),t.bypassAuthState)}async function XP(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),SP(n,new Up(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qP;case"linkViaPopup":case"linkViaRedirect":return XP;case"reauthViaPopup":case"reauthViaRedirect":return QP;default:en(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=new qo(2e3,1e4);async function ZP(t,e,n){const r=Bu(t);KR(t,e,Lp);const i=f1(r,n);return new xr(r,"signInViaPopup",e,i).executeNotNull()}class xr extends h1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=Fp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,JP.get())};e()}}xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO="pendingRedirect",tl=new Map;class tO extends h1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tl.get(this.auth._key());if(!e){try{const r=await nO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tl.set(this.auth._key(),e)}return this.bypassAuthState||tl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nO(t,e){const n=sO(e),r=iO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rO(t,e){tl.set(t._key(),e)}function iO(t){return fn(t._redirectPersistence)}function sO(t){return el(eO,t.config.apiKey,t.name)}async function oO(t,e,n=!1){const r=Bu(t),i=f1(r,e),o=await new tO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO=10*60*1e3;class lO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!p1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yv(e))}saveEventToCache(e){this.cachedEventUids.add(Yv(e)),this.lastProcessedEventTime=Date.now()}}function Yv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function p1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return p1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cO(t,e={}){return ju(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fO=/^https?/;async function hO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cO(t);for(const n of e)try{if(pO(n))return}catch{}en(t,"unauthorized-domain")}function pO(t){const e=_f(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fO.test(n))return!1;if(dO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=new qo(3e4,6e4);function qv(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gO(t){return new Promise((e,n)=>{var r,i,s;function o(){qv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qv(),n(Jt(t,"network-request-failed"))},timeout:mO.get()})}if(!((i=(r=Zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Zt().gapi)===null||s===void 0)&&s.load)o();else{const a=YP("iframefcb");return Zt()[a]=()=>{gapi.load?o():n(Jt(t,"network-request-failed"))},KP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw nl=null,e})}let nl=null;function vO(t){return nl=nl||gO(t),nl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO=new qo(5e3,15e3),_O="__/auth/iframe",wO="emulator/auth/iframe",EO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SO(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ap(e,wO):`https://${t.config.authDomain}/${_O}`,r={apiKey:e.apiKey,appName:t.name,v:os},i=CO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ss(r).slice(1)}`}async function kO(t){const e=await vO(t),n=Zt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:SO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Jt(t,"network-request-failed"),a=Zt().setTimeout(()=>{s(o)},yO.get());function l(){Zt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TO=500,IO=600,xO="_blank",NO="http://localhost";class Qv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RO(t,e,n,r=TO,i=IO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ge().toLowerCase();n&&(a=YE(u)?xO:n),KE(u)&&(e=e||NO,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[h,g])=>`${f}${h}=${g},`,"");if(pP(u)&&a!=="_self")return PO(e||"",a),new Qv(null);const d=window.open(e||"",a,c);$(d,t,"popup-blocked");try{d.focus()}catch{}return new Qv(d)}function PO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO="__/auth/handler",AO="emulator/auth/handler";function Xv(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:os,eventId:i};if(e instanceof Lp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Qo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${DO(t)}?${ss(a).slice(1)}`}function DO({config:t}){return t.emulator?Ap(t,AO):`https://${t.authDomain}/${OO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc="webStorageSupport";class MO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=a1,this._completeRedirectFn=oO,this._overrideRedirectResult=rO}async _openPopup(e,n,r,i){var s;En((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Xv(e,n,r,_f(),i);return RO(e,o,Fp())}async _openRedirect(e,n,r,i){return await this._originValidation(e),LP(Xv(e,n,r,_f(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(En(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kO(e),r=new lO(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zc,{type:zc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[zc];o!==void 0&&n(!!o),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ZE()||Mp()||zu()}}const LO=MO;var Jv="@firebase/auth",Zv="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $O(t){Wr(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{$(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:e1(t)},c=new yP(a,l,u);return qR(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wr(new ar("auth-internal",e=>{const n=Bu(e.getProvider("auth").getImmediate());return(r=>new FO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(Jv,Zv,UO(t)),Xt(Jv,Zv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO=5*60,zO=_w("authIdTokenMaxAge")||jO;let ey=null;const BO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zO)return;const i=n==null?void 0:n.token;ey!==i&&(ey=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $p(t=Kh()){const e=xu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YR(t,{popupRedirectResolver:LO,persistence:[VP,AP,a1]}),r=_w("authTokenSyncURL");if(r){const s=BO(r);IP(n,s,()=>s(n.currentUser)),TP(n,o=>s(o))}const i=vw("auth");return i&&_P(n,`http://${i}`),n}$O("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1="firebasestorage.googleapis.com",g1="storageBucket",WO=2*60*1e3,HO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends In{constructor(e,n,r=0){super(Bc(e),`Firebase Storage: ${n} (${Bc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Bc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Bc(t){return"storage/"+t}function jp(){const t="An unknown error occurred, please check the error payload for server response.";return new ye("unknown",t)}function VO(t){return new ye("object-not-found","Object '"+t+"' does not exist.")}function GO(t){return new ye("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function KO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ye("unauthenticated",t)}function YO(){return new ye("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function qO(t){return new ye("unauthorized","User does not have permission to access '"+t+"'.")}function QO(){return new ye("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function XO(){return new ye("canceled","User canceled the upload/download.")}function JO(t){return new ye("invalid-url","Invalid URL '"+t+"'.")}function ZO(t){return new ye("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function eA(){return new ye("no-default-bucket","No default bucket found. Did you set the '"+g1+"' property when initializing the app?")}function tA(){return new ye("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function nA(){return new ye("no-download-url","The given file does not have any download URLs.")}function rA(t){return new ye("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ef(t){return new ye("invalid-argument",t)}function v1(){return new ye("app-deleted","The Firebase app was deleted.")}function iA(t){return new ye("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xs(t,e){return new ye("invalid-format","String does not match format '"+t+"': "+e)}function Is(t){throw new ye("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ht.makeFromUrl(e,n)}catch{return new ht(e,"")}if(r.path==="")return r;throw ZO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",h=new RegExp(`^https?://${d}/${c}/b/${i}/o${f}`,"i"),g={bucket:1,path:3},_=n===m1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",m=new RegExp(`^https?://${_}/${i}/${C}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:h,indices:g,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<v.length;w++){const S=v[w],k=S.regex.exec(e);if(k){const b=k[S.indices.bucket];let x=k[S.indices.path];x||(x=""),r=new ht(b,x),S.postModify(r);break}}if(r==null)throw JO(e);return r}}class sA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...C){u||(u=!0,e.apply(null,C))}function d(C){i=setTimeout(()=>{i=null,t(h,l())},C)}function f(){s&&clearTimeout(s)}function h(C,...m){if(u){f();return}if(C){f(),c.call(null,C,...m);return}if(l()||o){f(),c.call(null,C,...m);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,d(v)}let g=!1;function _(C){g||(g=!0,f(),!u&&(i!==null?(C||(a=2),clearTimeout(i),d(0)):C||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function aA(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t){return t!==void 0}function uA(t){return typeof t=="object"&&!Array.isArray(t)}function zp(t){return typeof t=="string"||t instanceof String}function ty(t){return Bp()&&t instanceof Blob}function Bp(){return typeof Blob<"u"&&!aT()}function ny(t,e,n,r){if(r<e)throw Ef(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ef(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function y1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Mr||(Mr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n,r,i,s,o,a,l,u,c,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,g)=>{this.resolve_=h,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ia(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Mr.NO_ERROR,l=s.getStatus();if((!a||cA(l,this.additionalRetryCodes_))&&this.retry){const c=s.getErrorCode()===Mr.ABORT;r(!1,new Ia(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ia(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());lA(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=jp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?v1():XO();o(l)}else{const l=QO();o(l)}};this.canceled_?n(!1,new Ia(!1,null,!0)):this.backoffId_=oA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ia{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function fA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function mA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function gA(t,e,n,r,i,s,o=!0){const a=y1(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return pA(u,e),fA(u,n),hA(u,s),mA(u,r),new dA(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yA(...t){const e=vA();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Bp())return new Blob(t);throw new ye("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function _A(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t){if(typeof atob>"u")throw rA("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Wc{constructor(e,n){this.data=e,this.contentType=n||null}}function EA(t,e){switch(t){case Kt.RAW:return new Wc(_1(e));case Kt.BASE64:case Kt.BASE64URL:return new Wc(w1(t,e));case Kt.DATA_URL:return new Wc(SA(e),kA(e))}throw jp()}function _1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function CA(t){let e;try{e=decodeURIComponent(t)}catch{throw Xs(Kt.DATA_URL,"Malformed data URL.")}return _1(e)}function w1(t,e){switch(t){case Kt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Xs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Kt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Xs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=wA(e)}catch(i){throw i.message.includes("polyfill")?i:Xs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class E1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Xs(Kt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=bA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function SA(t){const e=new E1(t);return e.base64?w1(Kt.BASE64,e.rest):CA(e.rest)}function kA(t){return new E1(t).contentType}function bA(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n){let r=0,i="";ty(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(ty(this.data_)){const r=this.data_,i=_A(r,e,n);return i===null?null:new Bn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Bn(r,!0)}}static getBlob(...e){if(Bp()){const n=e.map(r=>r instanceof Bn?r.data_:r);return new Bn(yA.apply(null,n))}else{const n=e.map(o=>zp(o)?EA(Kt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Bn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(t){let e;try{e=JSON.parse(t)}catch{return null}return uA(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function IA(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function S1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t,e){return e}class Ke{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||xA}}let xa=null;function NA(t){return!zp(t)||t.length<2?t:S1(t)}function k1(){if(xa)return xa;const t=[];t.push(new Ke("bucket")),t.push(new Ke("generation")),t.push(new Ke("metageneration")),t.push(new Ke("name","fullPath",!0));function e(s,o){return NA(o)}const n=new Ke("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ke("size");return i.xform=r,t.push(i),t.push(new Ke("timeCreated")),t.push(new Ke("updated")),t.push(new Ke("md5Hash",null,!0)),t.push(new Ke("cacheControl",null,!0)),t.push(new Ke("contentDisposition",null,!0)),t.push(new Ke("contentEncoding",null,!0)),t.push(new Ke("contentLanguage",null,!0)),t.push(new Ke("contentType",null,!0)),t.push(new Ke("metadata","customMetadata",!0)),xa=t,xa}function RA(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ht(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function PA(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return RA(r,t),r}function b1(t,e,n){const r=C1(e);return r===null?null:PA(t,r,n)}function OA(t,e,n,r){const i=C1(e);if(i===null||!zp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,f="/b/"+o(c)+"/o/"+o(d),h=Wp(f,n,r),g=y1({alt:"media",token:u});return h+g})[0]}function AA(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class T1{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t){if(!t)throw jp()}function DA(t,e){function n(r,i){const s=b1(t,i,e);return I1(s!==null),s}return n}function MA(t,e){function n(r,i){const s=b1(t,i,e);return I1(s!==null),OA(s,i,t.host,t._protocol)}return n}function x1(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=YO():i=KO():n.getStatus()===402?i=GO(t.bucket):n.getStatus()===403?i=qO(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function LA(t){const e=x1(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=VO(t.path)),s.serverResponse=i.serverResponse,s}return n}function FA(t,e,n){const r=e.fullServerUrl(),i=Wp(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new T1(i,s,MA(t,n),o);return a.errorHandler=LA(e),a}function UA(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function $A(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=UA(null,e)),r}function jA(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let w=0;w<2;w++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=$A(e,r,i),c=AA(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",h=Bn.getBlob(d,r,f);if(h===null)throw tA();const g={name:u.fullPath},_=Wp(s,t.host,t._protocol),C="POST",m=t.maxUploadRetryTime,p=new T1(_,C,DA(t,n),m);return p.urlParams=g,p.headers=o,p.body=h.uploadData(),p.errorHandler=x1(e),p}class zA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Mr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Mr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Mr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Is("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Is("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Is("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Is("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Is("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class BA extends zA{initXhr(){this.xhr_.responseType="text"}}function N1(){return new BA}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n){this._service=e,n instanceof ht?this._location=n:this._location=ht.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new qr(e,n)}get root(){const e=new ht(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return S1(this._location.path)}get storage(){return this._service}get parent(){const e=TA(this._location.path);if(e===null)return null;const n=new ht(this._location.bucket,e);return new qr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw iA(e)}}function WA(t,e,n){t._throwIfRoot("uploadBytes");const r=jA(t.storage,t._location,k1(),new Bn(e,!0),n);return t.storage.makeRequestWithTokens(r,N1).then(i=>({metadata:i,ref:t}))}function HA(t){t._throwIfRoot("getDownloadURL");const e=FA(t.storage,t._location,k1());return t.storage.makeRequestWithTokens(e,N1).then(n=>{if(n===null)throw nA();return n})}function VA(t,e){const n=IA(t._location.path,e),r=new ht(t._location.bucket,n);return new qr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t){return/^[A-Za-z]+:\/\//.test(t)}function KA(t,e){return new qr(t,e)}function R1(t,e){if(t instanceof Hp){const n=t;if(n._bucket==null)throw eA();const r=new qr(n,n._bucket);return e!=null?R1(r,e):r}else return e!==void 0?VA(t,e):t}function YA(t,e){if(e&&GA(e)){if(t instanceof Hp)return KA(t,e);throw Ef("To use ref(service, url), the first argument must be a Storage instance.")}else return R1(t,e)}function ry(t,e){const n=e==null?void 0:e[g1];return n==null?null:ht.makeFromBucketSpec(n,t)}function qA(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:ww(i,t.app.options.projectId))}class Hp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=m1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=WO,this._maxUploadRetryTime=HO,this._requests=new Set,i!=null?this._bucket=ht.makeFromBucketSpec(i,this._host):this._bucket=ry(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ht.makeFromBucketSpec(this._url,e):this._bucket=ry(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ny("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ny("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new sA(v1());{const o=gA(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const iy="@firebase/storage",sy="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="storage";function QA(t,e,n){return t=Me(t),WA(t,e,n)}function O1(t){return t=Me(t),HA(t)}function A1(t,e){return t=Me(t),YA(t,e)}function XA(t=Kh(),e){t=Me(t);const r=xu(t,P1).getImmediate({identifier:e}),i=yw("storage");return i&&JA(r,...i),r}function JA(t,e,n,r={}){qA(t,e,n,r)}function ZA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Hp(n,r,i,e,os)}function e2(){Wr(new ar(P1,ZA,"PUBLIC").setMultipleInstances(!0)),Xt(iy,sy,""),Xt(iy,sy,"esm2017")}e2();const t2={apiKey:"AIzaSyD0rTZHHcGBphDZed-iv-N3QCmvkOKo7To",authDomain:"matchpoint-9d3b2.firebaseapp.com",databaseURL:"https://matchpoint-9d3b2-default-rtdb.firebaseio.com",projectId:"matchpoint-9d3b2",storageBucket:"matchpoint-9d3b2.appspot.com",messagingSenderId:"915139787408",appId:"1:915139787408:web:7b2007d60a631c4e0db615",measurementId:"G-E8N9D91SFJ"},Vu=kw(t2),Jo=WR(Vu),D1=XA(),oy=t=>{const[e,n]=y.useState(),[r,i]=y.useState(null);return y.useEffect(()=>MR(Yo(Jo,t),s=>{n(s.val())},s=>{i(s)}),[t]),[e,r]},n2=(t,e)=>{xp(Yo(Jo,"users/"+e),t)},r2=(t,e)=>{xp(Yo(Jo,"events/"+e),t)},i2=async(t,e)=>{const n=cr(Yo(Jo),`events/${e}`);let r=!1;try{await AR(n,t),r=!0}catch(i){console.log(i)}return r},s2=()=>OR(cr(Yo(Jo),"events")).key,o2=async t=>{let e=`images/${t.name}`,n="",r=!1;const i=A1(D1,e);try{await QA(i,t),n=await O1(i),console.log("File upload successful"),r=!0}catch(s){console.log("Error: "+s)}return[r,n]},a2=async t=>{let e=`images/${t}`,n="";const r=A1(D1,e);try{n=await O1(r)}catch(i){console.log(i)}return n},l2=()=>{ZP($p(Vu),new on)},u2=()=>NP($p(Vu)),M1=()=>{const[t,e]=y.useState();return y.useEffect(()=>xP($p(Vu),e),[]),t};var Cf={},c2={get exports(){return Cf},set exports(t){Cf=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(c2);const j=Cf;function Sf(){return Sf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sf.apply(this,arguments)}function L1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ay(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function d2(t){var e=f2(t,"string");return typeof e=="symbol"?e:String(e)}function f2(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function h2(t,e,n){var r=y.useRef(t!==void 0),i=y.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,y.useCallback(function(u){for(var c=arguments.length,d=new Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];n&&n.apply(void 0,[u].concat(d)),o(u)},[n])]}function Vp(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[ay(r)],a=s[r],l=L1(s,[ay(r),r].map(d2)),u=e[r],c=h2(a,o,t[u]),d=c[0],f=c[1];return Sf({},l,(i={},i[r]=d,i[u]=f,i))},t)}function kf(t,e){return kf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},kf(t,e)}function p2(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,kf(t,e)}const F1=["xxl","xl","lg","md","sm","xs"],U1="xs",Gu=y.createContext({prefixes:{},breakpoints:F1,minBreakpoint:U1});function G(t,e){const{prefixes:n}=y.useContext(Gu);return t||n[e]||e}function Gp(){const{breakpoints:t}=y.useContext(Gu);return t}function Kp(){const{minBreakpoint:t}=y.useContext(Gu);return t}function m2(){const{dir:t}=y.useContext(Gu);return t==="rtl"}function Ku(t){return t&&t.ownerDocument||document}function g2(t){var e=Ku(t);return e&&e.defaultView||window}function v2(t,e){return g2(t).getComputedStyle(t,e)}var y2=/([A-Z])/g;function _2(t){return t.replace(y2,"-$1").toLowerCase()}var w2=/^ms-/;function Na(t){return _2(t).replace(w2,"-ms-")}var E2=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function C2(t){return!!(t&&E2.test(t))}function mn(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(Na(e))||v2(t).getPropertyValue(Na(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(Na(i)):C2(i)?r+=i+"("+s+") ":n+=Na(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var A={},S2={get exports(){return A},set exports(t){A=t}},k2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",b2=k2,T2=b2;function $1(){}function j1(){}j1.resetWarningCache=$1;var I2=function(){function t(r,i,s,o,a,l){if(l!==T2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:j1,resetWarningCache:$1};return n.PropTypes=n,n};S2.exports=I2();const ly={disabled:!1},z1=dt.createContext(null);var x2=function(e){return e.scrollTop},Ds="unmounted",Ln="exited",Ot="entering",an="entered",Po="exiting",Nn=function(t){p2(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=Ln,s.appearStatus=Ot):l=an:r.unmountOnExit||r.mountOnEnter?l=Ds:l=Ln,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===Ds?{status:Ln}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==Ot&&o!==an&&(s=Ot):(o===Ot||o===an)&&(s=Po)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===Ot){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Ei.findDOMNode(this);o&&x2(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ln&&this.setState({status:Ds})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[Ei.findDOMNode(this),a],u=l[0],c=l[1],d=this.getTimeouts(),f=a?d.appear:d.enter;if(!i&&!o||ly.disabled){this.safeSetState({status:an},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:Ot},function(){s.props.onEntering(u,c),s.onTransitionEnd(f,function(){s.safeSetState({status:an},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:Ei.findDOMNode(this);if(!s||ly.disabled){this.safeSetState({status:Ln},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Po},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Ln},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:Ei.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Ds)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=L1(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return dt.createElement(z1.Provider,{value:null},typeof o=="function"?o(i,a):dt.cloneElement(dt.Children.only(o),a))},e}(dt.Component);Nn.contextType=z1;Nn.propTypes={};function ai(){}Nn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ai,onEntering:ai,onEntered:ai,onExit:ai,onExiting:ai,onExited:ai};Nn.UNMOUNTED=Ds;Nn.EXITED=Ln;Nn.ENTERING=Ot;Nn.ENTERED=an;Nn.EXITING=Po;const cs=!!(typeof window<"u"&&window.document&&window.document.createElement);var bf=!1,Tf=!1;try{var Hc={get passive(){return bf=!0},get once(){return Tf=bf=!0}};cs&&(window.addEventListener("test",Hc,Hc),window.removeEventListener("test",Hc,!0))}catch{}function B1(t,e,n,r){if(r&&typeof r!="boolean"&&!Tf){var i=r.once,s=r.capture,o=n;!Tf&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,bf?r:s)}t.addEventListener(e,n,r)}function If(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function Zl(t,e,n,r){return B1(t,e,n,r),function(){If(t,e,n,r)}}function N2(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function R2(t){var e=mn(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function P2(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||N2(t,"transitionend",!0)},e+n),s=Zl(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function W1(t,e,n,r){n==null&&(n=R2(t)||0);var i=P2(t,n,r),s=Zl(t,"transitionend",e);return function(){i(),s()}}function uy(t,e){const n=mn(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function Yp(t,e){const n=uy(t,"transitionDuration"),r=uy(t,"transitionDelay"),i=W1(t,s=>{s.target===t&&(i(),e(s))},n+r)}function xs(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...i){e.apply(this,i),n.apply(this,i)}},null)}function H1(t){t.offsetHeight}var cy=function(e){return!e||typeof e=="function"?e:function(n){e.current=n}};function O2(t,e){var n=cy(t),r=cy(e);return function(i){n&&n(i),r&&r(i)}}function qp(t,e){return y.useMemo(function(){return O2(t,e)},[t,e])}function A2(t){return t&&"setState"in t?Ei.findDOMNode(t):t??null}const D2=dt.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const d=y.useRef(null),f=qp(d,l),h=k=>{f(A2(k))},g=k=>b=>{k&&d.current&&k(d.current,b)},_=y.useCallback(g(t),[t]),C=y.useCallback(g(e),[e]),m=y.useCallback(g(n),[n]),p=y.useCallback(g(r),[r]),v=y.useCallback(g(i),[i]),w=y.useCallback(g(s),[s]),S=y.useCallback(g(o),[o]);return E(Nn,{ref:c,...u,onEnter:_,onEntered:m,onEntering:C,onExit:p,onExited:w,onExiting:v,addEndListener:S,nodeRef:d,children:typeof a=="function"?(k,b)=>a(k,{...b,ref:h}):dt.cloneElement(a,{ref:h})})}),Qp=D2,M2={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function V1(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,r=e[n],i=M2[t];return r+parseInt(mn(e,i[0]),10)+parseInt(mn(e,i[1]),10)}const L2={[Ln]:"collapse",[Po]:"collapsing",[Ot]:"collapsing",[an]:"collapse show"},F2={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:V1},G1=dt.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,className:s,children:o,dimension:a="height",getDimensionValue:l=V1,...u},c)=>{const d=typeof a=="function"?a():a,f=y.useMemo(()=>xs(m=>{m.style[d]="0"},t),[d,t]),h=y.useMemo(()=>xs(m=>{const p=`scroll${d[0].toUpperCase()}${d.slice(1)}`;m.style[d]=`${m[p]}px`},e),[d,e]),g=y.useMemo(()=>xs(m=>{m.style[d]=null},n),[d,n]),_=y.useMemo(()=>xs(m=>{m.style[d]=`${l(d,m)}px`,H1(m)},r),[r,l,d]),C=y.useMemo(()=>xs(m=>{m.style[d]=null},i),[d,i]);return E(Qp,{ref:c,addEndListener:Yp,...u,"aria-expanded":u.role?u.in:null,onEnter:f,onEntering:h,onEntered:g,onExit:_,onExiting:C,childRef:o.ref,children:(m,p)=>dt.cloneElement(o,{...p,className:j(s,o.props.className,L2[m],d==="width"&&"collapse-horizontal")})})});G1.defaultProps=F2;const U2=G1;function $2(t){var e=y.useRef(t);return y.useEffect(function(){e.current=t},[t]),e}function ct(t){var e=$2(t);return y.useCallback(function(){return e.current&&e.current.apply(e,arguments)},[e])}function j2(){return y.useState(null)}function z2(){var t=y.useRef(!0),e=y.useRef(function(){return t.current});return y.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]),e.current}function B2(t){var e=y.useRef(null);return y.useEffect(function(){e.current=t}),e.current}var W2=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",H2=typeof document<"u";const V2=H2||W2?y.useLayoutEffect:y.useEffect,G2=["as","disabled"];function K2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Y2(t){return!t||t.trim()==="#"}function Xp({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=f=>{if((e||t==="a"&&Y2(n))&&f.preventDefault(),e){f.stopPropagation();return}o==null||o(f)},d=f=>{f.key===" "&&(f.preventDefault(),c(f))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:c,onKeyDown:d},u]}const K1=y.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=K2(t,G2);const[s,{tagName:o}]=Xp(Object.assign({tagName:n,disabled:r},i));return E(o,Object.assign({},i,s,{ref:e}))});K1.displayName="Button";const q2=["onKeyDown"];function Q2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function X2(t){return!t||t.trim()==="#"}const Jp=y.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=Q2(t,q2);const[i]=Xp(Object.assign({tagName:"a"},r)),s=ct(o=>{i.onKeyDown(o),n==null||n(o)});return X2(r.href)||r.role==="button"?E("a",Object.assign({ref:e},r,i,{onKeyDown:s})):E("a",Object.assign({ref:e},r,{onKeyDown:n}))});Jp.displayName="Anchor";const J2={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Z2={[Ot]:"show",[an]:"show"},Zp=y.forwardRef(({className:t,children:e,transitionClasses:n={},...r},i)=>{const s=y.useCallback((o,a)=>{H1(o),r.onEnter==null||r.onEnter(o,a)},[r]);return E(Qp,{ref:i,addEndListener:Yp,...r,onEnter:s,childRef:e.ref,children:(o,a)=>y.cloneElement(e,{...a,className:j("fade",t,e.props.className,Z2[o],n[o])})})});Zp.defaultProps=J2;Zp.displayName="Fade";const Zo=Zp,eD={"aria-label":A.string,onClick:A.func,variant:A.oneOf(["white"])},tD={"aria-label":"Close"},Yu=y.forwardRef(({className:t,variant:e,...n},r)=>E("button",{ref:r,type:"button",className:j("btn-close",e&&`btn-close-${e}`,t),...n}));Yu.displayName="CloseButton";Yu.propTypes=eD;Yu.defaultProps=tD;const Y1=Yu,ea=t=>y.forwardRef((e,n)=>E("div",{...e,ref:n,className:j(e.className,t)}));var nD=/-(.)/g;function rD(t){return t.replace(nD,function(e,n){return n.toUpperCase()})}const iD=t=>t[0].toUpperCase()+rD(t).slice(1);function ze(t,{displayName:e=iD(t),Component:n,defaultProps:r}={}){const i=y.forwardRef(({className:s,bsPrefix:o,as:a=n||"div",...l},u)=>{const c=G(o,t);return E(a,{ref:u,className:j(s,c),...l})});return i.defaultProps=r,i.displayName=e,i}const q1=ea("h4");q1.displayName="DivStyledAsH4";const sD=ze("alert-heading",{Component:q1}),oD=ze("alert-link",{Component:Jp}),aD={variant:"primary",show:!0,transition:Zo,closeLabel:"Close alert"},em=y.forwardRef((t,e)=>{const{bsPrefix:n,show:r,closeLabel:i,closeVariant:s,className:o,children:a,variant:l,onClose:u,dismissible:c,transition:d,...f}=Vp(t,{show:"onClose"}),h=G(n,"alert"),g=ct(m=>{u&&u(!1,m)}),_=d===!0?Zo:d,C=H("div",{role:"alert",..._?void 0:f,ref:e,className:j(o,h,l&&`${h}-${l}`,c&&`${h}-dismissible`),children:[c&&E(Y1,{onClick:g,"aria-label":i,variant:s}),a]});return _?E(_,{unmountOnExit:!0,...f,ref:void 0,in:r,children:C}):r?C:null});em.displayName="Alert";em.defaultProps=aD;const Sr=Object.assign(em,{Link:oD,Heading:sD}),lD={variant:"primary",active:!1,disabled:!1},tm=y.forwardRef(({as:t,bsPrefix:e,variant:n,size:r,active:i,className:s,...o},a)=>{const l=G(e,"btn"),[u,{tagName:c}]=Xp({tagName:t,...o});return E(c,{...u,...o,ref:a,className:j(s,l,i&&"active",n&&`${l}-${n}`,r&&`${l}-${r}`,o.href&&o.disabled&&"disabled")})});tm.displayName="Button";tm.defaultProps=lD;const Zi=tm,Q1=y.forwardRef(({bsPrefix:t,className:e,variant:n,as:r="img",...i},s)=>{const o=G(t,"card-img");return E(r,{ref:s,className:j(n?`${o}-${n}`:o,e),...i})});Q1.displayName="CardImg";const uD=Q1,X1=y.createContext(null);X1.displayName="CardHeaderContext";const J1=X1,Z1=y.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=G(t,"card-header"),o=y.useMemo(()=>({cardHeaderBsPrefix:s}),[s]);return E(J1.Provider,{value:o,children:E(n,{ref:i,...r,className:j(e,s)})})});Z1.displayName="CardHeader";const cD=Z1,dD=ea("h5"),fD=ea("h6"),eC=ze("card-body"),hD=ze("card-title",{Component:dD}),pD=ze("card-subtitle",{Component:fD}),mD=ze("card-link",{Component:"a"}),gD=ze("card-text",{Component:"p"}),vD=ze("card-footer"),yD=ze("card-img-overlay"),_D={body:!1},nm=y.forwardRef(({bsPrefix:t,className:e,bg:n,text:r,border:i,body:s,children:o,as:a="div",...l},u)=>{const c=G(t,"card");return E(a,{ref:u,...l,className:j(e,c,n&&`bg-${n}`,r&&`text-${r}`,i&&`border-${i}`),children:s?E(eC,{children:o}):o})});nm.displayName="Card";nm.defaultProps=_D;const Ns=Object.assign(nm,{Img:uD,Title:hD,Subtitle:pD,Body:eC,Link:mD,Text:gD,Header:cD,Footer:vD,ImgOverlay:yD});function wD(t){var e=y.useRef(t);return e.current=t,e}function tC(t){var e=wD(t);y.useEffect(function(){return function(){return e.current()}},[])}function ED(t,e){return y.Children.toArray(t).some(n=>y.isValidElement(n)&&n.type===e)}function CD({as:t,bsPrefix:e,className:n,...r}){e=G(e,"col");const i=Gp(),s=Kp(),o=[],a=[];return i.forEach(l=>{const u=r[l];delete r[l];let c,d,f;typeof u=="object"&&u!=null?{span:c,offset:d,order:f}=u:c=u;const h=l!==s?`-${l}`:"";c&&o.push(c===!0?`${e}${h}`:`${e}${h}-${c}`),f!=null&&a.push(`order${h}-${f}`),d!=null&&a.push(`offset${h}-${d}`)}),[{...r,className:j(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const nC=y.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=CD(t);return E(i,{...r,ref:e,className:j(n,!o.length&&s)})});nC.displayName="Col";const Ms=nC;var SD=Function.prototype.bind.call(Function.prototype.call,[].slice);function Cr(t,e){return SD(t.querySelectorAll(e))}function kD(){var t=y.useReducer(function(n){return!n},!1),e=t[1];return e}function dy(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}const eu=y.createContext(null),rm=(t,e=null)=>t!=null?String(t):e||null,im=y.createContext(null);im.displayName="NavContext";const bD="data-rr-ui-",TD="rrUi";function qu(t){return`${bD}${t}`}function ID(t){return`${TD}${t}`}const rC=y.createContext(cs?window:void 0);rC.Provider;function iC(){return y.useContext(rC)}const sC=y.createContext(null);sC.displayName="NavbarContext";const ds=sC,xD={type:A.string,tooltip:A.bool,as:A.elementType},sm=y.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>E(t,{...i,ref:s,className:j(e,`${n}-${r?"tooltip":"feedback"}`)}));sm.displayName="Feedback";sm.propTypes=xD;const oC=sm,ND=y.createContext({}),Cn=ND,aC=y.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...a},l)=>{const{controlId:u}=y.useContext(Cn);return e=G(e,"form-check-input"),E(o,{...a,ref:l,type:r,id:t||u,className:j(n,e,i&&"is-valid",s&&"is-invalid")})});aC.displayName="FormCheckInput";const lC=aC,uC=y.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=y.useContext(Cn);return t=G(t,"form-check-label"),E("label",{...r,ref:i,htmlFor:n||s,className:j(e,t)})});uC.displayName="FormCheckLabel";const xf=uC,cC=y.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:l=!1,feedback:u,feedbackType:c,className:d,style:f,title:h="",type:g="checkbox",label:_,children:C,as:m="input",...p},v)=>{e=G(e,"form-check"),n=G(n,"form-switch");const{controlId:w}=y.useContext(Cn),S=y.useMemo(()=>({controlId:t||w}),[w,t]),k=!C&&_!=null&&_!==!1||ED(C,xf),b=E(lC,{...p,type:g==="switch"?"checkbox":g,ref:v,isValid:o,isInvalid:a,disabled:s,as:m});return E(Cn.Provider,{value:S,children:E("div",{style:f,className:j(d,k&&e,r&&`${e}-inline`,i&&`${e}-reverse`,g==="switch"&&n),children:C||H(to,{children:[b,k&&E(xf,{title:h,children:_}),u&&E(oC,{type:c,tooltip:l,children:u})]})})})});cC.displayName="FormCheck";const tu=Object.assign(cC,{Input:lC,Label:xf}),dC=y.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:l,readOnly:u,as:c="input",...d},f)=>{const{controlId:h}=y.useContext(Cn);t=G(t,"form-control");let g;return l?g={[`${t}-plaintext`]:!0}:g={[t]:!0,[`${t}-${n}`]:n},E(c,{...d,type:e,size:r,ref:f,readOnly:u,id:i||h,className:j(s,g,o&&"is-valid",a&&"is-invalid",e==="color"&&`${t}-color`)})});dC.displayName="FormControl";const RD=Object.assign(dC,{Feedback:oC}),PD=ze("form-floating"),fC=y.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=y.useMemo(()=>({controlId:t}),[t]);return E(Cn.Provider,{value:i,children:E(e,{...n,ref:r})})});fC.displayName="FormGroup";const hC=fC,OD={column:!1,visuallyHidden:!1},om=y.forwardRef(({as:t="label",bsPrefix:e,column:n,visuallyHidden:r,className:i,htmlFor:s,...o},a)=>{const{controlId:l}=y.useContext(Cn);e=G(e,"form-label");let u="col-form-label";typeof n=="string"&&(u=`${u} ${u}-${n}`);const c=j(i,e,r&&"visually-hidden",n&&u);return s=s||l,n?E(Ms,{ref:a,as:"label",className:c,htmlFor:s,...o}):E(t,{ref:a,className:c,htmlFor:s,...o})});om.displayName="FormLabel";om.defaultProps=OD;const AD=om,pC=y.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=y.useContext(Cn);return t=G(t,"form-range"),E("input",{...r,type:"range",ref:i,className:j(e,t),id:n||s})});pC.displayName="FormRange";const DD=pC,mC=y.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...a},l)=>{const{controlId:u}=y.useContext(Cn);return t=G(t,"form-select"),E("select",{...a,size:n,ref:l,className:j(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||u})});mC.displayName="FormSelect";const MD=mC,gC=y.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=G(t,"form-text"),E(n,{...i,ref:s,className:j(e,t,r&&"text-muted")})));gC.displayName="FormText";const LD=gC,vC=y.forwardRef((t,e)=>E(tu,{...t,ref:e,type:"switch"}));vC.displayName="Switch";const FD=Object.assign(vC,{Input:tu.Input,Label:tu.Label}),yC=y.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=G(t,"form-floating"),H(hC,{ref:o,className:j(e,t),controlId:r,...s,children:[n,E("label",{htmlFor:r,children:i})]})));yC.displayName="FloatingLabel";const UD=yC,$D={_ref:A.any,validated:A.bool,as:A.elementType},am=y.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>E(n,{...r,ref:i,className:j(t,e&&"was-validated")}));am.displayName="Form";am.propTypes=$D;const ne=Object.assign(am,{Group:hC,Control:RD,Floating:PD,Check:tu,Switch:FD,Label:AD,Text:LD,Range:DD,Select:MD,FloatingLabel:UD}),jD={fluid:!1},lm=y.forwardRef(({bsPrefix:t,fluid:e,as:n="div",className:r,...i},s)=>{const o=G(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return E(n,{ref:s,...i,className:j(r,e?`${o}${a}`:o)})});lm.displayName="Container";lm.defaultProps=jD;const _C=lm;A.string,A.bool,A.bool,A.bool,A.bool;const zD={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},nu=y.forwardRef(({bsPrefix:t,className:e,fluid:n,rounded:r,roundedCircle:i,thumbnail:s,...o},a)=>(t=G(t,"img"),E("img",{ref:a,...o,className:j(e,n&&`${t}-fluid`,r&&"rounded",i&&"rounded-circle",s&&`${t}-thumbnail`)})));nu.displayName="Image";nu.defaultProps=zD;const wC=y.createContext(null),BD=["as","active","eventKey"];function WD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function EC({key:t,onClick:e,active:n,id:r,role:i,disabled:s}){const o=y.useContext(eu),a=y.useContext(im),l=y.useContext(wC);let u=n;const c={role:i};if(a){!i&&a.role==="tablist"&&(c.role="tab");const d=a.getControllerId(t??null),f=a.getControlledId(t??null);c[qu("event-key")]=t,c.id=d||r,u=n==null&&t!=null?a.activeKey===t:n,(u||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(c["aria-controls"]=f)}return c.role==="tab"&&(c["aria-selected"]=u,u||(c.tabIndex=-1),s&&(c.tabIndex=-1,c["aria-disabled"]=!0)),c.onClick=ct(d=>{s||(e==null||e(d),t!=null&&o&&!d.isPropagationStopped()&&o(t,d))}),[c,{isActive:u}]}const CC=y.forwardRef((t,e)=>{let{as:n=K1,active:r,eventKey:i}=t,s=WD(t,BD);const[o,a]=EC(Object.assign({key:rm(i,s.href),active:r},s));return o[qu("active")]=a.isActive,E(n,Object.assign({},s,o,{ref:e}))});CC.displayName="NavItem";const HD=["as","onSelect","activeKey","role","onKeyDown"];function VD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const fy=()=>{},hy=qu("event-key"),SC=y.forwardRef((t,e)=>{let{as:n="div",onSelect:r,activeKey:i,role:s,onKeyDown:o}=t,a=VD(t,HD);const l=kD(),u=y.useRef(!1),c=y.useContext(eu),d=y.useContext(wC);let f,h;d&&(s=s||"tablist",i=d.activeKey,f=d.getControlledId,h=d.getControllerId);const g=y.useRef(null),_=v=>{const w=g.current;if(!w)return null;const S=Cr(w,`[${hy}]:not([aria-disabled=true])`),k=w.querySelector("[aria-selected=true]");if(!k||k!==document.activeElement)return null;const b=S.indexOf(k);if(b===-1)return null;let x=b+v;return x>=S.length&&(x=0),x<0&&(x=S.length-1),S[x]},C=(v,w)=>{v!=null&&(r==null||r(v,w),c==null||c(v,w))},m=v=>{if(o==null||o(v),!d)return;let w;switch(v.key){case"ArrowLeft":case"ArrowUp":w=_(-1);break;case"ArrowRight":case"ArrowDown":w=_(1);break;default:return}w&&(v.preventDefault(),C(w.dataset[ID("EventKey")]||null,v),u.current=!0,l())};y.useEffect(()=>{if(g.current&&u.current){const v=g.current.querySelector(`[${hy}][aria-selected=true]`);v==null||v.focus()}u.current=!1});const p=qp(e,g);return E(eu.Provider,{value:C,children:E(im.Provider,{value:{role:s,activeKey:rm(i),getControlledId:f||fy,getControllerId:h||fy},children:E(n,Object.assign({},a,{onKeyDown:m,ref:p,role:s}))})})});SC.displayName="Nav";const GD=Object.assign(SC,{Item:CC});var Ra;function py(t){if((!Ra&&Ra!==0||t)&&cs){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),Ra=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return Ra}function Vc(t){t===void 0&&(t=Ku());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function KD(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const my=qu("modal-open");class um{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return KD(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(mn(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(my,""),mn(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(my),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const Gc=(t,e)=>cs?t==null?(e||Ku()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function YD(t,e){const n=iC(),[r,i]=y.useState(()=>Gc(t,n==null?void 0:n.document));if(!r){const s=Gc(t);s&&i(s)}return y.useEffect(()=>{e&&r&&e(r)},[e,r]),y.useEffect(()=>{const s=Gc(t);s!==r&&i(s)},[t,r]),r}const qD=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function QD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let Kc;function XD(t){return Kc||(Kc=new um({ownerDocument:t==null?void 0:t.document})),Kc}function JD(t){const e=iC(),n=t||XD(e),r=y.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:y.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:y.useCallback(i=>{r.current.backdrop=i},[])})}const kC=y.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:c,transition:d,backdropTransition:f,autoFocus:h=!0,enforceFocus:g=!0,restoreFocus:_=!0,restoreFocusOptions:C,renderDialog:m,renderBackdrop:p=ee=>E("div",Object.assign({},ee)),manager:v,container:w,onShow:S,onHide:k=()=>{},onExit:b,onExited:x,onExiting:F,onEnter:U,onEntering:Te,onEntered:_t}=t,Ze=QD(t,qD);const wt=YD(w),_e=JD(v),nn=z2(),zt=B2(n),[N,D]=y.useState(!n),M=y.useRef(null);y.useImperativeHandle(e,()=>_e,[_e]),cs&&!zt&&n&&(M.current=Vc()),!d&&!n&&!N?D(!0):n&&N&&D(!1);const q=ct(()=>{if(_e.add(),Bt.current=Zl(document,"keydown",Ie),xe.current=Zl(document,"focus",()=>setTimeout(et),!0),S&&S(),h){const ee=Vc(document);_e.dialog&&ee&&!dy(_e.dialog,ee)&&(M.current=ee,_e.dialog.focus())}}),Q=ct(()=>{if(_e.remove(),Bt.current==null||Bt.current(),xe.current==null||xe.current(),_){var ee;(ee=M.current)==null||ee.focus==null||ee.focus(C),M.current=null}});y.useEffect(()=>{!n||!wt||q()},[n,wt,q]),y.useEffect(()=>{N&&Q()},[N,Q]),tC(()=>{Q()});const et=ct(()=>{if(!g||!nn()||!_e.isTopModal())return;const ee=Vc();_e.dialog&&ee&&!dy(_e.dialog,ee)&&_e.dialog.focus()}),tt=ct(ee=>{ee.target===ee.currentTarget&&(u==null||u(ee),a===!0&&k())}),Ie=ct(ee=>{l&&ee.keyCode===27&&_e.isTopModal()&&(c==null||c(ee),ee.defaultPrevented||k())}),xe=y.useRef(),Bt=y.useRef(),tc=(...ee)=>{D(!0),x==null||x(...ee)},ni=d;if(!wt||!(n||ni&&!N))return null;const ps=Object.assign({role:r,ref:_e.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},Ze,{style:s,className:i,tabIndex:-1});let vr=m?m(ps):E("div",Object.assign({},ps,{children:y.cloneElement(o,{role:"document"})}));ni&&(vr=E(ni,{appear:!0,unmountOnExit:!0,in:!!n,onExit:b,onExiting:F,onExited:tc,onEnter:U,onEntering:Te,onEntered:_t,children:vr}));let ri=null;if(a){const ee=f;ri=p({ref:_e.setBackdropRef,onClick:tt}),ee&&(ri=E(ee,{appear:!0,in:!!n,children:ri}))}return E(to,{children:Ei.createPortal(H(to,{children:[ri,vr]}),wt)})});kC.displayName="Modal";const bC=Object.assign(kC,{Manager:um});function ZD(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function eM(t,e){t.classList?t.classList.add(e):ZD(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function gy(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function tM(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=gy(t.className,e):t.setAttribute("class",gy(t.className&&t.className.baseVal||"",e))}const li={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class TC extends um{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,mn(n,{[e]:`${parseFloat(mn(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],mn(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(eM(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Cr(n,li.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),Cr(n,li.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),Cr(n,li.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();tM(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Cr(n,li.FIXED_CONTENT).forEach(s=>this.restore(r,s)),Cr(n,li.STICKY_CONTENT).forEach(s=>this.restore(i,s)),Cr(n,li.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let Yc;function IC(t){return Yc||(Yc=new TC(t)),Yc}const nM=TC,rM=ze("modal-body"),iM=y.createContext({onHide(){}}),cm=iM,xC=y.forwardRef(({bsPrefix:t,className:e,contentClassName:n,centered:r,size:i,fullscreen:s,children:o,scrollable:a,...l},u)=>{t=G(t,"modal");const c=`${t}-dialog`,d=typeof s=="string"?`${t}-fullscreen-${s}`:`${t}-fullscreen`;return E("div",{...l,ref:u,className:j(c,e,i&&`${t}-${i}`,r&&`${c}-centered`,a&&`${c}-scrollable`,s&&d),children:E("div",{className:j(`${t}-content`,n),children:o})})});xC.displayName="ModalDialog";const NC=xC,sM=ze("modal-footer"),oM={closeLabel:"Close",closeButton:!1},RC=y.forwardRef(({closeLabel:t,closeVariant:e,closeButton:n,onHide:r,children:i,...s},o)=>{const a=y.useContext(cm),l=ct(()=>{a==null||a.onHide(),r==null||r()});return H("div",{ref:o,...s,children:[i,n&&E(Y1,{"aria-label":t,variant:e,onClick:l})]})});RC.defaultProps=oM;const PC=RC,aM={closeLabel:"Close",closeButton:!1},dm=y.forwardRef(({bsPrefix:t,className:e,...n},r)=>(t=G(t,"modal-header"),E(PC,{ref:r,...n,className:j(e,t)})));dm.displayName="ModalHeader";dm.defaultProps=aM;const lM=dm,uM=ea("h4"),cM=ze("modal-title",{Component:uM}),dM={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:NC};function fM(t){return E(Zo,{...t,timeout:null})}function hM(t){return E(Zo,{...t,timeout:null})}const fm=y.forwardRef(({bsPrefix:t,className:e,style:n,dialogClassName:r,contentClassName:i,children:s,dialogAs:o,"aria-labelledby":a,"aria-describedby":l,"aria-label":u,show:c,animation:d,backdrop:f,keyboard:h,onEscapeKeyDown:g,onShow:_,onHide:C,container:m,autoFocus:p,enforceFocus:v,restoreFocus:w,restoreFocusOptions:S,onEntered:k,onExit:b,onExiting:x,onEnter:F,onEntering:U,onExited:Te,backdropClassName:_t,manager:Ze,...wt},_e)=>{const[nn,zt]=y.useState({}),[N,D]=y.useState(!1),M=y.useRef(!1),q=y.useRef(!1),Q=y.useRef(null),[et,tt]=j2(),Ie=qp(_e,tt),xe=ct(C),Bt=m2();t=G(t,"modal");const tc=y.useMemo(()=>({onHide:xe}),[xe]);function ni(){return Ze||IC({isRTL:Bt})}function ps(X){if(!cs)return;const ii=ni().getScrollbarWidth()>0,$m=X.scrollHeight>Ku(X).documentElement.clientHeight;zt({paddingRight:ii&&!$m?py():void 0,paddingLeft:!ii&&$m?py():void 0})}const vr=ct(()=>{et&&ps(et.dialog)});tC(()=>{If(window,"resize",vr),Q.current==null||Q.current()});const ri=()=>{M.current=!0},ee=X=>{M.current&&et&&X.target===et.dialog&&(q.current=!0),M.current=!1},Fm=()=>{D(!0),Q.current=W1(et.dialog,()=>{D(!1)})},ES=X=>{X.target===X.currentTarget&&Fm()},CS=X=>{if(f==="static"){ES(X);return}if(q.current||X.target!==X.currentTarget){q.current=!1;return}C==null||C()},SS=X=>{h?g==null||g(X):(X.preventDefault(),f==="static"&&Fm())},kS=(X,ii)=>{X&&ps(X),F==null||F(X,ii)},bS=X=>{Q.current==null||Q.current(),b==null||b(X)},TS=(X,ii)=>{U==null||U(X,ii),B1(window,"resize",vr)},IS=X=>{X&&(X.style.display=""),Te==null||Te(X),If(window,"resize",vr)},xS=y.useCallback(X=>E("div",{...X,className:j(`${t}-backdrop`,_t,!d&&"show")}),[d,_t,t]),Um={...n,...nn};Um.display="block";const NS=X=>E("div",{role:"dialog",...X,style:Um,className:j(e,t,N&&`${t}-static`,!d&&"show"),onClick:f?CS:void 0,onMouseUp:ee,"aria-label":u,"aria-labelledby":a,"aria-describedby":l,children:E(o,{...wt,onMouseDown:ri,className:r,contentClassName:i,children:s})});return E(cm.Provider,{value:tc,children:E(bC,{show:c,ref:Ie,backdrop:f,container:m,keyboard:!0,autoFocus:p,enforceFocus:v,restoreFocus:w,restoreFocusOptions:S,onEscapeKeyDown:SS,onShow:_,onHide:C,onEnter:kS,onEntering:TS,onEntered:k,onExit:bS,onExiting:x,onExited:IS,manager:ni(),transition:d?fM:void 0,backdropTransition:d?hM:void 0,renderBackdrop:xS,renderDialog:NS})})});fm.displayName="Modal";fm.defaultProps=dM;const Gt=Object.assign(fm,{Body:rM,Header:lM,Title:cM,Footer:sM,Dialog:NC,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});var Nf={},pM={get exports(){return Nf},set exports(t){Nf=t}},ru={},mM={get exports(){return ru},set exports(t){ru=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){function i(o,a,l,u,c,d){var f=u||"<<anonymous>>",h=d||l;if(a[l]==null)return o?new Error("Required "+c+" `"+h+"` was not specified "+("in `"+f+"`.")):null;for(var g=arguments.length,_=Array(g>6?g-6:0),C=6;C<g;C++)_[C-6]=arguments[C];return r.apply(void 0,[a,l,f,c,h].concat(_))}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}t.exports=e.default})(mM,ru);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=ru,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}function s(){for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];function u(){for(var c=arguments.length,d=Array(c),f=0;f<c;f++)d[f]=arguments[f];var h=null;return a.forEach(function(g){if(h==null){var _=g.apply(void 0,d);_!=null&&(h=_)}}),h}return(0,r.default)(u)}t.exports=e.default})(pM,Nf);const gM=ze("nav-item"),vM={disabled:!1},hm=y.forwardRef(({bsPrefix:t,className:e,as:n=Jp,active:r,eventKey:i,...s},o)=>{t=G(t,"nav-link");const[a,l]=EC({key:rm(i,s.href),active:r,...s});return E(n,{...s,...a,ref:o,className:j(e,t,s.disabled&&"disabled",l.isActive&&"active")})});hm.displayName="NavLink";hm.defaultProps=vM;const yM=hm,_M={justify:!1,fill:!1},pm=y.forwardRef((t,e)=>{const{as:n="div",bsPrefix:r,variant:i,fill:s,justify:o,navbar:a,navbarScroll:l,className:u,activeKey:c,...d}=Vp(t,{activeKey:"onSelect"}),f=G(r,"nav");let h,g,_=!1;const C=y.useContext(ds),m=y.useContext(J1);return C?(h=C.bsPrefix,_=a??!0):m&&({cardHeaderBsPrefix:g}=m),E(GD,{as:n,ref:e,activeKey:c,className:j(u,{[f]:!_,[`${h}-nav`]:_,[`${h}-nav-scroll`]:_&&l,[`${g}-${i}`]:!!g,[`${f}-${i}`]:!!i,[`${f}-fill`]:s,[`${f}-justified`]:o}),...d})});pm.displayName="Nav";pm.defaultProps=_M;const vy=Object.assign(pm,{Item:gM,Link:yM}),OC=y.forwardRef(({bsPrefix:t,className:e,as:n,...r},i)=>{t=G(t,"navbar-brand");const s=n||(r.href?"a":"span");return E(s,{...r,ref:i,className:j(e,t)})});OC.displayName="NavbarBrand";const wM=OC,AC=y.forwardRef(({children:t,bsPrefix:e,...n},r)=>{e=G(e,"navbar-collapse");const i=y.useContext(ds);return E(U2,{in:!!(i&&i.expanded),...n,children:E("div",{ref:r,className:e,children:t})})});AC.displayName="NavbarCollapse";const EM=AC,CM={label:"Toggle navigation"},mm=y.forwardRef(({bsPrefix:t,className:e,children:n,label:r,as:i="button",onClick:s,...o},a)=>{t=G(t,"navbar-toggler");const{onToggle:l,expanded:u}=y.useContext(ds)||{},c=ct(d=>{s&&s(d),l&&l()});return i==="button"&&(o.type="button"),E(i,{...o,ref:a,onClick:c,"aria-label":r,className:j(e,t,!u&&"collapsed"),children:n||E("span",{className:`${t}-icon`})})});mm.displayName="NavbarToggle";mm.defaultProps=CM;const SM=mm;var Rf=new WeakMap,yy=function(e,n){if(!(!e||!n)){var r=Rf.get(n)||new Map;Rf.set(n,r);var i=r.get(e);return i||(i=n.matchMedia(e),i.refCount=0,r.set(i.media,i)),i}};function kM(t,e){e===void 0&&(e=typeof window>"u"?void 0:window);var n=yy(t,e),r=y.useState(function(){return n?n.matches:!1}),i=r[0],s=r[1];return V2(function(){var o=yy(t,e);if(!o)return s(!1);var a=Rf.get(e),l=function(){s(o.matches)};return o.refCount++,o.addListener(l),l(),function(){o.removeListener(l),o.refCount--,o.refCount<=0&&(a==null||a.delete(o.media)),o=void 0}},[t]),i}function bM(t){var e=Object.keys(t);function n(a,l){return a===l?l:a?a+" and "+l:l}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){var l=r(a),u=t[l];return typeof u=="number"?u=u-.2+"px":u="calc("+u+" - 0.2px)","(max-width: "+u+")"}function s(a){var l=t[a];return typeof l=="number"&&(l=l+"px"),"(min-width: "+l+")"}function o(a,l,u){var c;if(typeof a=="object")c=a,u=l,l=!0;else{var d;l=l||!0,c=(d={},d[a]=l,d)}var f=y.useMemo(function(){return Object.entries(c).reduce(function(h,g){var _=g[0],C=g[1];return(C==="up"||C===!0)&&(h=n(h,s(_))),(C==="down"||C===!0)&&(h=n(h,i(_))),h},"")},[JSON.stringify(c)]);return kM(f,u)}return o}var TM=bM({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});const IM=ze("offcanvas-body"),xM={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},NM={[Ot]:"show",[an]:"show"},gm=y.forwardRef(({bsPrefix:t,className:e,children:n,...r},i)=>(t=G(t,"offcanvas"),E(Qp,{ref:i,addEndListener:Yp,...r,childRef:n.ref,children:(s,o)=>y.cloneElement(n,{...o,className:j(e,n.props.className,(s===Ot||s===Po)&&`${t}-toggling`,NM[s])})})));gm.defaultProps=xM;gm.displayName="OffcanvasToggling";const RM=gm,PM={closeLabel:"Close",closeButton:!1},vm=y.forwardRef(({bsPrefix:t,className:e,...n},r)=>(t=G(t,"offcanvas-header"),E(PC,{ref:r,...n,className:j(e,t)})));vm.displayName="OffcanvasHeader";vm.defaultProps=PM;const OM=vm,AM=ea("h5"),DM=ze("offcanvas-title",{Component:AM}),MM={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};function LM(t){return E(RM,{...t})}function FM(t){return E(Zo,{...t})}const ym=y.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i,responsive:s,show:o,backdrop:a,keyboard:l,scroll:u,onEscapeKeyDown:c,onShow:d,onHide:f,container:h,autoFocus:g,enforceFocus:_,restoreFocus:C,restoreFocusOptions:m,onEntered:p,onExit:v,onExiting:w,onEnter:S,onEntering:k,onExited:b,backdropClassName:x,manager:F,renderStaticNode:U,...Te},_t)=>{const Ze=y.useRef();t=G(t,"offcanvas");const{onToggle:wt}=y.useContext(ds)||{},[_e,nn]=y.useState(!1),zt=TM(s||"xs","up");y.useEffect(()=>{nn(s?o&&!zt:o)},[o,s,zt]);const N=ct(()=>{wt==null||wt(),f==null||f()}),D=y.useMemo(()=>({onHide:N}),[N]);function M(){return F||(u?(Ze.current||(Ze.current=new nM({handleContainerOverflow:!1})),Ze.current):IC())}const q=(Ie,...xe)=>{Ie&&(Ie.style.visibility="visible"),S==null||S(Ie,...xe)},Q=(Ie,...xe)=>{Ie&&(Ie.style.visibility=""),b==null||b(...xe)},et=y.useCallback(Ie=>E("div",{...Ie,className:j(`${t}-backdrop`,x)}),[x,t]),tt=Ie=>E("div",{...Ie,...Te,className:j(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return H(to,{children:[!_e&&(s||U)&&tt({}),E(cm.Provider,{value:D,children:E(bC,{show:_e,ref:_t,backdrop:a,container:h,keyboard:l,autoFocus:g,enforceFocus:_&&!u,restoreFocus:C,restoreFocusOptions:m,onEscapeKeyDown:c,onShow:d,onHide:N,onEnter:q,onEntering:k,onEntered:p,onExit:v,onExiting:w,onExited:Q,manager:M(),transition:LM,backdropTransition:FM,renderBackdrop:et,renderDialog:tt})})]})});ym.displayName="Offcanvas";ym.defaultProps=MM;const rl=Object.assign(ym,{Body:IM,Header:OM,Title:DM}),DC=y.forwardRef((t,e)=>{const n=y.useContext(ds);return E(rl,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});DC.displayName="NavbarOffcanvas";const UM=DC,$M=ze("navbar-text",{Component:"span"}),jM={expand:!0,variant:"light",collapseOnSelect:!1},_m=y.forwardRef((t,e)=>{const{bsPrefix:n,expand:r,variant:i,bg:s,fixed:o,sticky:a,className:l,as:u="nav",expanded:c,onToggle:d,onSelect:f,collapseOnSelect:h,...g}=Vp(t,{expanded:"onToggle"}),_=G(n,"navbar"),C=y.useCallback((...v)=>{f==null||f(...v),h&&c&&(d==null||d(!1))},[f,h,c,d]);g.role===void 0&&u!=="nav"&&(g.role="navigation");let m=`${_}-expand`;typeof r=="string"&&(m=`${m}-${r}`);const p=y.useMemo(()=>({onToggle:()=>d==null?void 0:d(!c),bsPrefix:_,expanded:!!c,expand:r}),[_,c,r,d]);return E(ds.Provider,{value:p,children:E(eu.Provider,{value:C,children:E(u,{ref:e,...g,className:j(l,_,r&&m,i&&`${_}-${i}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});_m.defaultProps=jM;_m.displayName="Navbar";const Pa=Object.assign(_m,{Brand:wM,Collapse:EM,Offcanvas:UM,Text:$M,Toggle:SM}),MC=y.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=G(t,"row"),o=Gp(),a=Kp(),l=`${s}-cols`,u=[];return o.forEach(c=>{const d=r[c];delete r[c];let f;d!=null&&typeof d=="object"?{cols:f}=d:f=d;const h=c!==a?`-${c}`:"";f!=null&&u.push(`${l}${h}-${f}`)}),E(n,{ref:i,...r,className:j(e,s,...u)})});MC.displayName="Row";const _y=MC,LC=y.forwardRef(({bsPrefix:t,variant:e,animation:n="border",size:r,as:i="div",className:s,...o},a)=>{t=G(t,"spinner");const l=`${t}-${n}`;return E(i,{ref:a,...o,className:j(s,l,r&&`${l}-${r}`,e&&`text-${e}`)})});LC.displayName="Spinner";const zM=LC;function BM(t,e=F1,n=U1){const r=[];return Object.entries(t).forEach(([i,s])=>{s!=null&&(typeof s=="object"?e.forEach(o=>{const a=s[o];if(a!=null){const l=o!==n?`-${o}`:"";r.push(`${i}${l}-${a}`)}}):r.push(`${i}-${s}`))}),r}const FC=y.forwardRef(({as:t="div",bsPrefix:e,className:n,direction:r,gap:i,...s},o)=>{e=G(e,r==="horizontal"?"hstack":"vstack");const a=Gp(),l=Kp();return E(t,{...s,ref:o,className:j(n,e,...BM({gap:i,breakpoints:a,minBreakpoint:l}))})});FC.displayName="Stack";const WM=FC;const HM=({openModal:t,cardData:e})=>{const{name:n,location:r,maxCap:i,imgSrc:s,participants:o}=e;return E(Ns,{className:"card",children:E(_C,{children:H(_y,{children:[E(Ms,{xs:4,className:"circular-image-wrapper",children:E("img",{className:"image",src:s,alt:"image of event"})}),E(Ms,{xs:8,children:H(Ns.Body,{className:"card-body",children:[E(Ns.Title,{className:"card-title",children:n}),H(_y,{children:[E(Ms,{children:H(Ns.Text,{className:"card-text",children:["Location: ",r]})}),E(Ms,{children:H(Ns.Text,{className:"card-text",children:[i-o.length," / ",i," spots available"]})})]}),E(Zi,{className:"card-button",onClick:()=>{t(e)},variant:"primary",size:"lg",children:"See More"})]})})]})})})};function VM({show:t,handleJoin:e,handleClose:n,data:r,allUsers:i}){console.log("modal data: ",r);const{name:s,location:o,maxCap:a,currCap:l,participants:u,id:c,imgSrc:d,dateTimeString:f}=r,[h,g]=y.useState(!1),[_,C]=y.useState(null),m=new Date(f);console.log("participants: ",u),console.log("All users: ",i);const p=E(Sr,{variant:"success",children:"Successfully joined event!"},"success"),v=E(Sr,{variant:"danger",children:"Hmm something went wrong... Please check and try again."},"danger"),w=E(Sr,{variant:"danger",children:"Error: you can't join an event that you created!"},"danger"),S=E(Sr,{variant:"danger",children:"Error: you can't join an event that you're already a part of!"},"danger"),k=E(Sr,{variant:"danger",children:"Sorry the event has no available spots left..."},"danger"),b=async()=>{switch(await e(r)){case 1:C(p);break;case 2:C(v);break;case 3:C(w);break;case 4:C(S);break;case 5:C(k);break}g(!0),setTimeout(()=>{g(!1),C(null),n()},2e3)};return H(Gt,{show:t,onHide:n,info:r,centered:!0,backdrop:"static",children:[E(Gt.Header,{closeButton:!0,children:E(Gt.Title,{children:s})}),H(Gt.Body,{children:[H("p",{children:["Location: ",o]}),E("span",{children:"Participants: "}),u&&u.map(x=>i[x].displayName).join(", "),H("p",{children:["Spots Available: ",u?a-u.length:a]}),H("p",{children:["Time: ",m.toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1,timeZone:"CST"})," CST"]}),h&&_]}),E(Gt.Footer,{children:E(Zi,{variant:"primary",onClick:b,disabled:h,children:"Join Event"})})]})}const GM=({show:t,handleClose:e,handleSubmit:n,user:r})=>{const[i,s]=y.useState({eventName:"",eventLocation:"",eventCapacity:0,imageFile:"",dateString:"",timeString:""}),o=()=>{s({eventName:"",eventLocation:"",eventCapacity:0}),h(!1),d(0)},a=H("div",{className:"creating-event-container",children:[E("p",{className:"creating-event-text",children:"Creating Event..."}),E("div",{className:"submission-status-icon",children:E(zM,{animation:"border",role:"status",children:E("span",{className:"visually-hidden",children:"Creating Event..."})})})]}),l=E(Sr,{variant:"success",children:"Successfully created event!"},"success"),u=E(Sr,{variant:"danger",children:"Hmm something went wrong... Please check and try again."},"danger");let[c,d]=y.useState(0);const[f,h]=y.useState(!1),g=C=>{const{name:m,value:p,type:v,files:w}=C.target;console.log(i),s(S=>({...S,[m]:v==="file"?w[0]:p}))},_=async C=>{if(C.preventDefault(),d(1),C.currentTarget.checkValidity()===!1){C.stopPropagation(),d(0),h(!0);return}const v=new Date(`${i.dateString} ${i.timeString}`).toUTCString(),w={name:i.eventName,maxCap:i.eventCapacity,location:i.eventLocation,owner:r.uid,currCap:1,activity:"",desc:"",imgSrc:"",privacy:0,participants:[],dateTimeString:v};try{const S=await n(w,i.imageFile);d(2),setTimeout(()=>{o(),e()},5e3)}catch(S){console.log(S),d(3)}};return H(Gt,{show:t,onHide:()=>{o(),e()},centered:!0,backdrop:"static",children:[E(Gt.Header,{closeButton:!0,children:E(Gt.Title,{children:"Create an event"})}),E(Gt.Body,{children:H(ne,{noValidate:!0,validated:f,onSubmit:_,id:"create-event-form",children:[H(ne.Group,{className:"mb-3",controlId:"event-name",children:[E(ne.Label,{children:"Event Name"}),E(ne.Control,{type:"text",name:"eventName",value:i.eventName,onChange:g,autoFocus:!0,required:!0}),E(ne.Control.Feedback,{type:"invalid",children:"Please provide an event name."})]}),H(ne.Group,{className:"mb-3",controlId:"event-location",children:[E(ne.Label,{children:"Location"}),E(ne.Control,{type:"text",name:"eventLocation",value:i.eventLocation,onChange:g,required:!0,autoFocus:!0}),E(ne.Control.Feedback,{type:"invalid",children:"Please provide a location."})]}),H(ne.Group,{className:"mb-3",controlId:"event-capacity",children:[E(ne.Label,{children:"Capacity"}),E(ne.Control,{type:"number",min:"1",max:"100",name:"eventCapacity",value:i.eventCapacity,onChange:g,required:!0,autoFocus:!0}),E(ne.Control.Feedback,{type:"invalid",children:"Please provide a valid number of attendees."})]}),H(ne.Group,{className:"mb-3",controlId:"event-date",children:[E(ne.Label,{children:"Date"}),E(ne.Control,{type:"date",name:"dateString",onChange:g,autoFocus:!0,required:!0}),E(ne.Control.Feedback,{type:"invalid",children:"Please provide a valid date."})]}),H(ne.Group,{className:"mb-3",controlId:"event-time",children:[E(ne.Label,{children:"Time"}),E(ne.Control,{type:"time",name:"timeString",onChange:g,autoFocus:!0,required:!0}),E(ne.Control.Feedback,{type:"invalid",children:"Please provide a valid time."})]}),H(ne.Group,{className:"mb-3",controlId:"upload-image",children:[E(ne.Label,{children:"Upload Cover Image (Optional)"}),E(ne.Control,{type:"file",name:"imageFile",onChange:g,accept:"image/*"})]}),E("div",{className:"submission-status",children:(()=>{switch(c){case 1:return a;case 2:return l;case 3:return u}})()})]})}),E(Gt.Footer,{children:E(Zi,{variant:"primary",type:"submit",form:"create-event-form",disabled:c!==0,children:"Create Event"})})]})};function wy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?wy(Object(n),!0).forEach(function(r){be(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function iu(t){return iu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},iu(t)}function KM(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ey(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function YM(t,e,n){return e&&Ey(t.prototype,e),n&&Ey(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function be(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wm(t,e){return QM(t)||JM(t,e)||UC(t,e)||eL()}function ta(t){return qM(t)||XM(t)||UC(t)||ZM()}function qM(t){if(Array.isArray(t))return Pf(t)}function QM(t){if(Array.isArray(t))return t}function XM(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function JM(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function UC(t,e){if(t){if(typeof t=="string")return Pf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pf(t,e)}}function Pf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ZM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Cy=function(){},Em={},$C={},jC=null,zC={mark:Cy,measure:Cy};try{typeof window<"u"&&(Em=window),typeof document<"u"&&($C=document),typeof MutationObserver<"u"&&(jC=MutationObserver),typeof performance<"u"&&(zC=performance)}catch{}var tL=Em.navigator||{},Sy=tL.userAgent,ky=Sy===void 0?"":Sy,dr=Em,ue=$C,by=jC,Oa=zC;dr.document;var Rn=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",BC=~ky.indexOf("MSIE")||~ky.indexOf("Trident/"),Aa,Da,Ma,La,Fa,Sn="___FONT_AWESOME___",Of=16,WC="fa",HC="svg-inline--fa",Qr="data-fa-i2svg",Af="data-fa-pseudo-element",nL="data-fa-pseudo-element-pending",Cm="data-prefix",Sm="data-icon",Ty="fontawesome-i2svg",rL="async",iL=["HTML","HEAD","STYLE","SCRIPT"],VC=function(){try{return!0}catch{return!1}}(),ae="classic",me="sharp",km=[ae,me];function na(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ae]}})}var Oo=na((Aa={},be(Aa,ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),be(Aa,me,{fa:"solid",fass:"solid","fa-solid":"solid"}),Aa)),Ao=na((Da={},be(Da,ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),be(Da,me,{solid:"fass"}),Da)),Do=na((Ma={},be(Ma,ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),be(Ma,me,{fass:"fa-solid"}),Ma)),sL=na((La={},be(La,ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),be(La,me,{"fa-solid":"fass"}),La)),oL=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,GC="fa-layers-text",aL=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,lL=na((Fa={},be(Fa,ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),be(Fa,me,{900:"fass"}),Fa)),KC=[1,2,3,4,5,6,7,8,9,10],uL=KC.concat([11,12,13,14,15,16,17,18,19,20]),cL=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Nr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Mo=new Set;Object.keys(Ao[ae]).map(Mo.add.bind(Mo));Object.keys(Ao[me]).map(Mo.add.bind(Mo));var dL=[].concat(km,ta(Mo),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Nr.GROUP,Nr.SWAP_OPACITY,Nr.PRIMARY,Nr.SECONDARY]).concat(KC.map(function(t){return"".concat(t,"x")})).concat(uL.map(function(t){return"w-".concat(t)})),Js=dr.FontAwesomeConfig||{};function fL(t){var e=ue.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function hL(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ue&&typeof ue.querySelector=="function"){var pL=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];pL.forEach(function(t){var e=wm(t,2),n=e[0],r=e[1],i=hL(fL(n));i!=null&&(Js[r]=i)})}var YC={styleDefault:"solid",familyDefault:"classic",cssPrefix:WC,replacementClass:HC,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Js.familyPrefix&&(Js.cssPrefix=Js.familyPrefix);var es=R(R({},YC),Js);es.autoReplaceSvg||(es.observeMutations=!1);var O={};Object.keys(YC).forEach(function(t){Object.defineProperty(O,t,{enumerable:!0,set:function(n){es[t]=n,Zs.forEach(function(r){return r(O)})},get:function(){return es[t]}})});Object.defineProperty(O,"familyPrefix",{enumerable:!0,set:function(e){es.cssPrefix=e,Zs.forEach(function(n){return n(O)})},get:function(){return es.cssPrefix}});dr.FontAwesomeConfig=O;var Zs=[];function mL(t){return Zs.push(t),function(){Zs.splice(Zs.indexOf(t),1)}}var An=Of,Yt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gL(t){if(!(!t||!Rn)){var e=ue.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ue.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ue.head.insertBefore(e,r),t}}var vL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Lo(){for(var t=12,e="";t-- >0;)e+=vL[Math.random()*62|0];return e}function fs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function bm(t){return t.classList?fs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function qC(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yL(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(qC(t[n]),'" ')},"").trim()}function Qu(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Tm(t){return t.size!==Yt.size||t.x!==Yt.x||t.y!==Yt.y||t.rotate!==Yt.rotate||t.flipX||t.flipY}function _L(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function wL(t){var e=t.transform,n=t.width,r=n===void 0?Of:n,i=t.height,s=i===void 0?Of:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&BC?l+="translate(".concat(e.x/An-r/2,"em, ").concat(e.y/An-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/An,"em), calc(-50% + ").concat(e.y/An,"em)) "):l+="translate(".concat(e.x/An,"em, ").concat(e.y/An,"em) "),l+="scale(".concat(e.size/An*(e.flipX?-1:1),", ").concat(e.size/An*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var EL=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function QC(){var t=WC,e=HC,n=O.cssPrefix,r=O.replacementClass,i=EL;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Iy=!1;function qc(){O.autoAddCss&&!Iy&&(gL(QC()),Iy=!0)}var CL={mixout:function(){return{dom:{css:QC,insertCss:qc}}},hooks:function(){return{beforeDOMElementCreation:function(){qc()},beforeI2svg:function(){qc()}}}},kn=dr||{};kn[Sn]||(kn[Sn]={});kn[Sn].styles||(kn[Sn].styles={});kn[Sn].hooks||(kn[Sn].hooks={});kn[Sn].shims||(kn[Sn].shims=[]);var Mt=kn[Sn],XC=[],SL=function t(){ue.removeEventListener("DOMContentLoaded",t),su=1,XC.map(function(e){return e()})},su=!1;Rn&&(su=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),su||ue.addEventListener("DOMContentLoaded",SL));function kL(t){Rn&&(su?setTimeout(t,0):XC.push(t))}function ra(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?qC(t):"<".concat(e," ").concat(yL(r),">").concat(s.map(ra).join(""),"</").concat(e,">")}function xy(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var bL=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Qc=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?bL(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function TL(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Df(t){var e=TL(t);return e.length===1?e[0].toString(16):null}function IL(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ny(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Mf(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Ny(e);typeof Mt.hooks.addPack=="function"&&!i?Mt.hooks.addPack(t,Ny(e)):Mt.styles[t]=R(R({},Mt.styles[t]||{}),s),t==="fas"&&Mf("fa",e)}var Ua,$a,ja,Si=Mt.styles,xL=Mt.shims,NL=(Ua={},be(Ua,ae,Object.values(Do[ae])),be(Ua,me,Object.values(Do[me])),Ua),Im=null,JC={},ZC={},eS={},tS={},nS={},RL=($a={},be($a,ae,Object.keys(Oo[ae])),be($a,me,Object.keys(Oo[me])),$a);function PL(t){return~dL.indexOf(t)}function OL(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!PL(i)?i:null}var rS=function(){var e=function(s){return Qc(Si,function(o,a,l){return o[l]=Qc(a,s,{}),o},{})};JC=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),ZC=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),nS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Si||O.autoFetchSvg,r=Qc(xL,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});eS=r.names,tS=r.unicodes,Im=Xu(O.styleDefault,{family:O.familyDefault})};mL(function(t){Im=Xu(t.styleDefault,{family:O.familyDefault})});rS();function xm(t,e){return(JC[t]||{})[e]}function AL(t,e){return(ZC[t]||{})[e]}function Rr(t,e){return(nS[t]||{})[e]}function iS(t){return eS[t]||{prefix:null,iconName:null}}function DL(t){var e=tS[t],n=xm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function fr(){return Im}var Nm=function(){return{prefix:null,iconName:null,rest:[]}};function Xu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ae:n,i=Oo[r][t],s=Ao[r][t]||Ao[r][i],o=t in Mt.styles?t:null;return s||o||null}var Ry=(ja={},be(ja,ae,Object.keys(Do[ae])),be(ja,me,Object.keys(Do[me])),ja);function Ju(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},be(e,ae,"".concat(O.cssPrefix,"-").concat(ae)),be(e,me,"".concat(O.cssPrefix,"-").concat(me)),e),o=null,a=ae;(t.includes(s[ae])||t.some(function(u){return Ry[ae].includes(u)}))&&(a=ae),(t.includes(s[me])||t.some(function(u){return Ry[me].includes(u)}))&&(a=me);var l=t.reduce(function(u,c){var d=OL(O.cssPrefix,c);if(Si[c]?(c=NL[a].includes(c)?sL[a][c]:c,o=c,u.prefix=c):RL[a].indexOf(c)>-1?(o=c,u.prefix=Xu(c,{family:a})):d?u.iconName=d:c!==O.replacementClass&&c!==s[ae]&&c!==s[me]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?iS(u.iconName):{},h=Rr(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||h||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!Si.far&&Si.fas&&!O.autoFetchSvg&&(u.prefix="fas")}return u},Nm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===me&&(Si.fass||O.autoFetchSvg)&&(l.prefix="fass",l.iconName=Rr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=fr()||"fas"),l}var ML=function(){function t(){KM(this,t),this.definitions={}}return YM(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=R(R({},n.definitions[a]||{}),o[a]),Mf(a,o[a]);var l=Do[ae][a];l&&Mf(l,o[a]),rS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),Py=[],ki={},Ui={},LL=Object.keys(Ui);function FL(t,e){var n=e.mixoutsTo;return Py=t,ki={},Object.keys(Ui).forEach(function(r){LL.indexOf(r)===-1&&delete Ui[r]}),Py.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),iu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){ki[o]||(ki[o]=[]),ki[o].push(s[o])})}r.provides&&r.provides(Ui)}),n}function Lf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=ki[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Xr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=ki[t]||[];i.forEach(function(s){s.apply(null,n)})}function bn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ui[t]?Ui[t].apply(null,e):void 0}function Ff(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||fr();if(e)return e=Rr(n,e)||e,xy(sS.definitions,n,e)||xy(Mt.styles,n,e)}var sS=new ML,UL=function(){O.autoReplaceSvg=!1,O.observeMutations=!1,Xr("noAuto")},$L={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Rn?(Xr("beforeI2svg",e),bn("pseudoElements2svg",e),bn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;O.autoReplaceSvg===!1&&(O.autoReplaceSvg=!0),O.observeMutations=!0,kL(function(){zL({autoReplaceSvgRoot:n}),Xr("watch",e)})}},jL={icon:function(e){if(e===null)return null;if(iu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Rr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Xu(e[0]);return{prefix:r,iconName:Rr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(O.cssPrefix,"-"))>-1||e.match(oL))){var i=Ju(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||fr(),iconName:Rr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=fr();return{prefix:s,iconName:Rr(s,e)||e}}}},yt={noAuto:UL,config:O,dom:$L,parse:jL,library:sS,findIconDefinition:Ff,toHtml:ra},zL=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ue:n;(Object.keys(Mt.styles).length>0||O.autoFetchSvg)&&Rn&&O.autoReplaceSvg&&yt.dom.i2svg({node:r})};function Zu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ra(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Rn){var r=ue.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function BL(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Tm(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Qu(R(R({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function WL(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(O.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},i),{},{id:o}),children:r}]}]}function Rm(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,h=f===void 0?!1:f,g=r.found?r:n,_=g.width,C=g.height,m=i==="fak",p=[O.replacementClass,s?"".concat(O.cssPrefix,"-").concat(s):""].filter(function(F){return d.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(d.classes).join(" "),v={children:[],attributes:R(R({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(C)})},w=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/C*16*.0625,"em")}:{};h&&(v.attributes[Qr]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||Lo())},children:[l]}),delete v.attributes.title);var S=R(R({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:R(R({},w),d.styles)}),k=r.found&&n.found?bn("generateAbstractMask",S)||{children:[],attributes:{}}:bn("generateAbstractIcon",S)||{children:[],attributes:{}},b=k.children,x=k.attributes;return S.children=b,S.attributes=x,a?WL(S):BL(S)}function Oy(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=R(R(R({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Qr]="");var c=R({},o.styles);Tm(i)&&(c.transform=wL({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Qu(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function HL(t){var e=t.content,n=t.title,r=t.extra,i=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Qu(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Xc=Mt.styles;function Uf(t){var e=t[0],n=t[1],r=t.slice(4),i=wm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(O.cssPrefix,"-").concat(Nr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(Nr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(O.cssPrefix,"-").concat(Nr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var VL={found:!1,width:512,height:512};function GL(t,e){!VC&&!O.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function $f(t,e){var n=e;return e==="fa"&&O.styleDefault!==null&&(e=fr()),new Promise(function(r,i){if(bn("missingIconAbstract"),n==="fa"){var s=iS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Xc[e]&&Xc[e][t]){var o=Xc[e][t];return r(Uf(o))}GL(t,e),r(R(R({},VL),{},{icon:O.showMissingIcons&&t?bn("missingIconAbstract")||{}:{}}))})}var Ay=function(){},jf=O.measurePerformance&&Oa&&Oa.mark&&Oa.measure?Oa:{mark:Ay,measure:Ay},Ls='FA "6.2.1"',KL=function(e){return jf.mark("".concat(Ls," ").concat(e," begins")),function(){return oS(e)}},oS=function(e){jf.mark("".concat(Ls," ").concat(e," ends")),jf.measure("".concat(Ls," ").concat(e),"".concat(Ls," ").concat(e," begins"),"".concat(Ls," ").concat(e," ends"))},Pm={begin:KL,end:oS},il=function(){};function Dy(t){var e=t.getAttribute?t.getAttribute(Qr):null;return typeof e=="string"}function YL(t){var e=t.getAttribute?t.getAttribute(Cm):null,n=t.getAttribute?t.getAttribute(Sm):null;return e&&n}function qL(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(O.replacementClass)}function QL(){if(O.autoReplaceSvg===!0)return sl.replace;var t=sl[O.autoReplaceSvg];return t||sl.replace}function XL(t){return ue.createElementNS("http://www.w3.org/2000/svg",t)}function JL(t){return ue.createElement(t)}function aS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?XL:JL:n;if(typeof t=="string")return ue.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(aS(o,{ceFn:r}))}),i}function ZL(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var sl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(aS(i),n)}),n.getAttribute(Qr)===null&&O.keepOriginalSource){var r=ue.createComment(ZL(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~bm(n).indexOf(O.replacementClass))return sl.replace(e);var i=new RegExp("".concat(O.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===O.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return ra(a)}).join(`
`);n.setAttribute(Qr,""),n.innerHTML=o}};function My(t){t()}function lS(t,e){var n=typeof e=="function"?e:il;if(t.length===0)n();else{var r=My;O.mutateApproach===rL&&(r=dr.requestAnimationFrame||My),r(function(){var i=QL(),s=Pm.begin("mutate");t.map(i),s(),n()})}}var Om=!1;function uS(){Om=!0}function zf(){Om=!1}var ou=null;function Ly(t){if(by&&O.observeMutations){var e=t.treeCallback,n=e===void 0?il:e,r=t.nodeCallback,i=r===void 0?il:r,s=t.pseudoElementsCallback,o=s===void 0?il:s,a=t.observeMutationsRoot,l=a===void 0?ue:a;ou=new by(function(u){if(!Om){var c=fr();fs(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Dy(d.addedNodes[0])&&(O.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&O.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Dy(d.target)&&~cL.indexOf(d.attributeName))if(d.attributeName==="class"&&YL(d.target)){var f=Ju(bm(d.target)),h=f.prefix,g=f.iconName;d.target.setAttribute(Cm,h||c),g&&d.target.setAttribute(Sm,g)}else qL(d.target)&&i(d.target)})}}),Rn&&ou.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function eF(){ou&&ou.disconnect()}function tF(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function nF(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Ju(bm(t));return i.prefix||(i.prefix=fr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=AL(i.prefix,t.innerText)||xm(i.prefix,Df(t.innerText))),!i.iconName&&O.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function rF(t){var e=fs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return O.autoA11y&&(n?e["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(r||Lo()):(e["aria-hidden"]="true",e.focusable="false")),e}function iF(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Yt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=nF(t),r=n.iconName,i=n.prefix,s=n.rest,o=rF(t),a=Lf("parseNodeAttributes",{},t),l=e.styleParser?tF(t):[];return R({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Yt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var sF=Mt.styles;function cS(t){var e=O.autoReplaceSvg==="nest"?Fy(t,{styleParser:!1}):Fy(t);return~e.extra.classes.indexOf(GC)?bn("generateLayersText",t,e):bn("generateSvgReplacementMutation",t,e)}var hr=new Set;km.map(function(t){hr.add("fa-".concat(t))});Object.keys(Oo[ae]).map(hr.add.bind(hr));Object.keys(Oo[me]).map(hr.add.bind(hr));hr=ta(hr);function Uy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Rn)return Promise.resolve();var n=ue.documentElement.classList,r=function(d){return n.add("".concat(Ty,"-").concat(d))},i=function(d){return n.remove("".concat(Ty,"-").concat(d))},s=O.autoFetchSvg?hr:km.map(function(c){return"fa-".concat(c)}).concat(Object.keys(sF));s.includes("fa")||s.push("fa");var o=[".".concat(GC,":not([").concat(Qr,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Qr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=fs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Pm.begin("onTree"),u=a.reduce(function(c,d){try{var f=cS(d);f&&c.push(f)}catch(h){VC||h.name==="MissingIcon"&&console.error(h)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){lS(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function oF(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cS(t).then(function(n){n&&lS([n],e)})}function aF(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Ff(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ff(i||{})),t(r,R(R({},n),{},{mask:i}))}}var lF=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Yt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,h=n.titleId,g=h===void 0?null:h,_=n.classes,C=_===void 0?[]:_,m=n.attributes,p=m===void 0?{}:m,v=n.styles,w=v===void 0?{}:v;if(e){var S=e.prefix,k=e.iconName,b=e.icon;return Zu(R({type:"icon"},e),function(){return Xr("beforeDOMElementCreation",{iconDefinition:e,params:n}),O.autoA11y&&(f?p["aria-labelledby"]="".concat(O.replacementClass,"-title-").concat(g||Lo()):(p["aria-hidden"]="true",p.focusable="false")),Rm({icons:{main:Uf(b),mask:l?Uf(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:k,transform:R(R({},Yt),i),symbol:o,title:f,maskId:c,titleId:g,extra:{attributes:p,styles:w,classes:C}})})}},uF={mixout:function(){return{icon:aF(lF)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Uy,n.nodeCallback=oF,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ue:r,s=n.callback,o=s===void 0?function(){}:s;return Uy(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(h,g){Promise.all([$f(i,a),c.iconName?$f(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var C=wm(_,2),m=C[0],p=C[1];h([n,Rm({icons:{main:m,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Qu(a);l.length>0&&(i.style=l);var u;return Tm(o)&&(u=bn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},cF={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Zu({type:"layer"},function(){Xr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(O.cssPrefix,"-layers")].concat(ta(s)).join(" ")},children:o}]})}}}},dF={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Zu({type:"counter",content:n},function(){return Xr("beforeDOMElementCreation",{content:n,params:r}),HL({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(O.cssPrefix,"-layers-counter")].concat(ta(a))}})})}}}},fF={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Yt:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,h=f===void 0?{}:f;return Zu({type:"text",content:n},function(){return Xr("beforeDOMElementCreation",{content:n,params:r}),Oy({content:n,transform:R(R({},Yt),s),title:a,extra:{attributes:d,styles:h,classes:["".concat(O.cssPrefix,"-layers-text")].concat(ta(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(BC){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return O.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Oy({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},hF=new RegExp('"',"ug"),$y=[1105920,1112319];function pF(t){var e=t.replace(hF,""),n=IL(e,0),r=n>=$y[0]&&n<=$y[1],i=e.length===2?e[0]===e[1]:!1;return{value:Df(i?e[0]:e),isSecondary:r||i}}function jy(t,e){var n="".concat(nL).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=fs(t.children),o=s.filter(function(b){return b.getAttribute(Af)===e})[0],a=dr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(aL),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?me:ae,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ao[f][l[2].toLowerCase()]:lL[f][u],g=pF(d),_=g.value,C=g.isSecondary,m=l[0].startsWith("FontAwesome"),p=xm(h,_),v=p;if(m){var w=DL(_);w.iconName&&w.prefix&&(p=w.iconName,h=w.prefix)}if(p&&!C&&(!o||o.getAttribute(Cm)!==h||o.getAttribute(Sm)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var S=iF(),k=S.extra;k.attributes[Af]=e,$f(p,h).then(function(b){var x=Rm(R(R({},S),{},{icons:{main:b,mask:Nm()},prefix:h,iconName:v,extra:k,watchable:!0})),F=ue.createElement("svg");e==="::before"?t.insertBefore(F,t.firstChild):t.appendChild(F),F.outerHTML=x.map(function(U){return ra(U)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function mF(t){return Promise.all([jy(t,"::before"),jy(t,"::after")])}function gF(t){return t.parentNode!==document.head&&!~iL.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Af)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function zy(t){if(Rn)return new Promise(function(e,n){var r=fs(t.querySelectorAll("*")).filter(gF).map(mF),i=Pm.begin("searchPseudoElements");uS(),Promise.all(r).then(function(){i(),zf(),e()}).catch(function(){i(),zf(),n()})})}var vF={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=zy,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ue:r;O.searchPseudoElements&&zy(i)}}},By=!1,yF={mixout:function(){return{dom:{unwatch:function(){uS(),By=!0}}}},hooks:function(){return{bootstrap:function(){Ly(Lf("mutationObserverCallbacks",{}))},noAuto:function(){eF()},watch:function(n){var r=n.observeMutationsRoot;By?zf():Ly(Lf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Wy=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},_F={mixout:function(){return{parse:{transform:function(n){return Wy(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Wy(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},h={outer:a,inner:d,path:f};return{tag:"g",attributes:R({},h.outer),children:[{tag:"g",attributes:R({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),h.path)}]}]}}}},Jc={x:0,y:0,width:"100%",height:"100%"};function Hy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function wF(t){return t.tag==="g"?t.children:[t]}var EF={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Ju(i.split(" ").map(function(o){return o.trim()})):Nm();return s.prefix||(s.prefix=fr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,h=_L({transform:l,containerWidth:d,iconWidth:u}),g={tag:"rect",attributes:R(R({},Jc),{},{fill:"white"})},_=c.children?{children:c.children.map(Hy)}:{},C={tag:"g",attributes:R({},h.inner),children:[Hy(R({tag:c.tag,attributes:R(R({},c.attributes),h.path)},_))]},m={tag:"g",attributes:R({},h.outer),children:[C]},p="mask-".concat(a||Lo()),v="clip-".concat(a||Lo()),w={tag:"mask",attributes:R(R({},Jc),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,m]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:wF(f)},w]};return r.push(S,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(p,")")},Jc)}),{children:r,attributes:i}}}},CF={provides:function(e){var n=!1;dr.matchMedia&&(n=dr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:R(R({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:R(R({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:R(R({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},SF={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},kF=[CL,uF,cF,dF,fF,vF,yF,_F,EF,CF,SF];FL(kF,{mixoutsTo:yt});yt.noAuto;yt.config;yt.library;yt.dom;var Bf=yt.parse;yt.findIconDefinition;yt.toHtml;var bF=yt.icon;yt.layer;yt.text;yt.counter;function Vy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Gn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vy(Object(n),!0).forEach(function(r){bi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function au(t){return au=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},au(t)}function bi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function TF(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function IF(t,e){if(t==null)return{};var n=TF(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Wf(t){return xF(t)||NF(t)||RF(t)||PF()}function xF(t){if(Array.isArray(t))return Hf(t)}function NF(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function RF(t,e){if(t){if(typeof t=="string")return Hf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hf(t,e)}}function Hf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function PF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OF(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,h=t.inverse,g=t.border,_=t.listItem,C=t.flip,m=t.size,p=t.rotation,v=t.pull,w=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":h,"fa-border":g,"fa-li":_,"fa-flip":C===!0,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},bi(e,"fa-".concat(m),typeof m<"u"&&m!==null),bi(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),bi(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),bi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(w).map(function(S){return w[S]?S:null}).filter(function(S){return S})}function AF(t){return t=t-0,t===t}function dS(t){return AF(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var DF=["style"];function MF(t){return t.charAt(0).toUpperCase()+t.slice(1)}function LF(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=dS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[MF(i)]=s:e[i]=s,e},{})}function fS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return fS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=LF(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[dS(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=IF(n,DF);return i.attrs.style=Gn(Gn({},i.attrs.style),o),t.apply(void 0,[e.tag,Gn(Gn({},i.attrs),a)].concat(Wf(r)))}var hS=!1;try{hS=!0}catch{}function FF(){if(!hS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Gy(t){if(t&&au(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Bf.icon)return Bf.icon(t);if(t===null)return null;if(t&&au(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Zc(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?bi({},t,e):{}}var ia=dt.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=Gy(n),c=Zc("classes",[].concat(Wf(OF(t)),Wf(s.split(" ")))),d=Zc("transform",typeof t.transform=="string"?Bf.transform(t.transform):t.transform),f=Zc("mask",Gy(r)),h=bF(u,Gn(Gn(Gn(Gn({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!h)return FF("Could not find icon",u),null;var g=h.abstract,_={ref:e};return Object.keys(t).forEach(function(C){ia.defaultProps.hasOwnProperty(C)||(_[C]=t[C])}),UF(g[0],_)});ia.displayName="FontAwesomeIcon";ia.propTypes={beat:A.bool,border:A.bool,beatFade:A.bool,bounce:A.bool,className:A.string,fade:A.bool,flash:A.bool,mask:A.oneOfType([A.object,A.array,A.string]),maskId:A.string,fixedWidth:A.bool,inverse:A.bool,flip:A.oneOf([!0,!1,"horizontal","vertical","both"]),icon:A.oneOfType([A.object,A.array,A.string]),listItem:A.bool,pull:A.oneOf(["right","left"]),pulse:A.bool,rotation:A.oneOf([0,90,180,270]),shake:A.bool,size:A.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:A.bool,spinPulse:A.bool,spinReverse:A.bool,symbol:A.oneOfType([A.bool,A.string]),title:A.string,titleId:A.string,transform:A.oneOfType([A.string,A.object]),swapOpacity:A.bool};ia.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var UF=fS.bind(null,dt.createElement),$F={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]};const jF=({eventData:t,user:e,allUsers:n})=>{const[r,i]=y.useState(!1),[s,o]=y.useState(!1),[a,l]=y.useState([]),[u,c]=y.useState([]);console.log("events: ",a);const[d,f]=y.useState(""),h=async w=>{if(w.owner===e.uid)return 3;if(w.participants.includes(e.uid))return 4;if(w.participants.length===w.maxCap)return 5;const S=w.id,k={participants:[...w.participants,e.uid]};return await i2(k,S)?1:0},g=()=>{i(!1)},_=w=>{c(w),i(!0)},C=()=>o(!1),m=w=>{o(!0)},p=async(w,S)=>{if(S&&["image/gif","image/jpeg","image/png"].includes(S.type)){let[x,F]=await o2(S);console.log("Successful? ",x),x&&(w.imgSrc=F)}else{let x=await a2("default-cover.png");w.imgSrc=x}let b=s2();w.id=b,w.participants.push(e.uid),console.log("new event object: ",w),r2(w,b)},v=()=>{let w=d.split(" ").map(k=>k.toLowerCase());console.log("search terms:",w);let S=a.filter(k=>{let b=k.name.toLowerCase();return w.some(F=>b.includes(F))});l(S)};return y.useEffect(()=>{t&&l(Object.values(t))},[d,t]),H("div",{className:"event-list",children:[E("div",{className:"event-list-tool-bar",children:E(ne,{className:"d-flex",children:H(WM,{direction:"horizontal",gap:2,children:[E(ne.Control,{type:"search",placeholder:"Search for an activity",className:"me-2","aria-label":"Search",value:d,onChange:w=>f(w.target.value)}),E(Zi,{className:"search-button",variant:"outline-success",onClick:v,children:"Search"}),H(Zi,{className:"add-event-button",onClick:m,children:[E(ia,{icon:$F}),"Add Event"]})]})})}),E(VM,{show:r,handleJoin:h,handleClose:g,data:u,allUsers:n}),E(GM,{show:s,handleClose:C,handleSubmit:p,user:e}),!a||a.length===0?E("p",{className:"empty-page-message",children:"No events to display..."}):a.map(w=>E(HM,{openModal:_,cardData:w},w.id))]})};/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lu(){return lu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},lu.apply(this,arguments)}var Kn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Kn||(Kn={}));const Ky="popstate";function zF(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Vf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Am(i)}return HF(e,n,null,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function BF(){return Math.random().toString(36).substr(2,8)}function Yy(t){return{usr:t.state,key:t.key}}function Vf(t,e,n,r){return n===void 0&&(n=null),lu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?hs(e):e,{state:n,key:e&&e.key||r||BF()})}function Am(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function hs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function WF(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof t=="string"?t:Am(t);return ke(e,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,e)}function HF(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Kn.Pop,l=null;function u(){a=Kn.Pop,l&&l({action:a,location:f.location})}function c(h,g){a=Kn.Push;let _=Vf(f.location,h,g);n&&n(_,h);let C=Yy(_),m=f.createHref(_);try{o.pushState(C,"",m)}catch{i.location.assign(m)}s&&l&&l({action:a,location:f.location})}function d(h,g){a=Kn.Replace;let _=Vf(f.location,h,g);n&&n(_,h);let C=Yy(_),m=f.createHref(_);o.replaceState(C,"",m),s&&l&&l({action:a,location:f.location})}let f={get action(){return a},get location(){return t(i,o)},listen(h){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ky,u),l=h,()=>{i.removeEventListener(Ky,u),l=null}},createHref(h){return e(i,h)},encodeLocation(h){let g=WF(typeof h=="string"?h:Am(h));return{pathname:g.pathname,search:g.search,hash:g.hash}},push:c,replace:d,go(h){return o.go(h)}};return f}var qy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(qy||(qy={}));function VF(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?hs(e):e,i=gS(r.pathname||"/",n);if(i==null)return null;let s=pS(t);GF(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=tU(s[a],iU(i));return o}function pS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ke(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Lr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),pS(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ZF(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of mS(s.path))i(s,o,l)}),e}function mS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=mS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function GF(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:eU(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const KF=/^:\w+$/,YF=3,qF=2,QF=1,XF=10,JF=-2,Qy=t=>t==="*";function ZF(t,e){let n=t.split("/"),r=n.length;return n.some(Qy)&&(r+=JF),e&&(r+=qF),n.filter(i=>!Qy(i)).reduce((i,s)=>i+(KF.test(s)?YF:s===""?QF:XF),r)}function eU(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function tU(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=nU({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Lr([i,c.pathname]),pathnameBase:cU(Lr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Lr([i,c.pathnameBase]))}return s}function nU(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=rU(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=sU(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function rU(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Dm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function iU(t){try{return decodeURI(t)}catch(e){return Dm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function sU(t,e){try{return decodeURIComponent(t)}catch(n){return Dm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function gS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Dm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oU(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?hs(t):t;return{pathname:n?n.startsWith("/")?n:aU(n,e):e,search:dU(r),hash:fU(i)}}function aU(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ed(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lU(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function uU(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=hs(t):(i=lu({},t),ke(!i.pathname||!i.pathname.includes("?"),ed("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),ed("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),ed("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=oU(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Lr=t=>t.join("/").replace(/\/\/+/g,"/"),cU=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),dU=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,fU=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class hU{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function pU(t){return t instanceof hU}const mU=["post","put","patch","delete"];[...mU];/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gf(){return Gf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gf.apply(this,arguments)}function gU(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const vU=typeof Object.is=="function"?Object.is:gU,{useState:yU,useEffect:_U,useLayoutEffect:wU,useDebugValue:EU}=nd;function CU(t,e,n){const r=e(),[{inst:i},s]=yU({inst:{value:r,getSnapshot:e}});return wU(()=>{i.value=r,i.getSnapshot=e,td(i)&&s({inst:i})},[t,r,e]),_U(()=>(td(i)&&s({inst:i}),t(()=>{td(i)&&s({inst:i})})),[t]),EU(r),r}function td(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!vU(n,r)}catch{return!0}}function SU(t,e,n){return e()}const kU=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bU=!kU,TU=bU?SU:CU;"useSyncExternalStore"in nd&&(t=>t.useSyncExternalStore)(nd);const vS=y.createContext(null),Mm=y.createContext(null),Lm=y.createContext(null),ec=y.createContext(null),sa=y.createContext({outlet:null,matches:[]}),yS=y.createContext(null);function oa(){return y.useContext(ec)!=null}function _S(){return oa()||ke(!1),y.useContext(ec).location}function wS(){oa()||ke(!1);let{basename:t,navigator:e}=y.useContext(Lm),{matches:n}=y.useContext(sa),{pathname:r}=_S(),i=JSON.stringify(lU(n).map(a=>a.pathnameBase)),s=y.useRef(!1);return y.useEffect(()=>{s.current=!0}),y.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=uU(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Lr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function IU(t,e){oa()||ke(!1);let{navigator:n}=y.useContext(Lm),r=y.useContext(Mm),{matches:i}=y.useContext(sa),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=_S(),u;if(e){var c;let _=typeof e=="string"?hs(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ke(!1),u=_}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",h=VF(t,{pathname:f}),g=PU(h&&h.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Lr([a,n.encodeLocation?n.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Lr([a,n.encodeLocation?n.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,r||void 0);return e&&g?y.createElement(ec.Provider,{value:{location:Gf({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Kn.Pop}},g):g}function xU(){let t=MU(),e=pU(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unhandled Thrown Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},e),n?y.createElement("pre",{style:i},n):null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:s},"errorElement")," props on ",y.createElement("code",{style:s},"<Route>")))}class NU extends y.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?y.createElement(sa.Provider,{value:this.props.routeContext},y.createElement(yS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RU(t){let{routeContext:e,match:n,children:r}=t,i=y.useContext(vS);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(sa.Provider,{value:e},r)}function PU(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ke(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||y.createElement(xU,null):null,c=e.concat(r.slice(0,a+1)),d=()=>y.createElement(RU,{match:o,routeContext:{outlet:s,matches:c}},l?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||a===0)?y.createElement(NU,{location:n.location,component:u,error:l,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Xy;(function(t){t.UseRevalidator="useRevalidator"})(Xy||(Xy={}));var uu;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(uu||(uu={}));function OU(t){let e=y.useContext(Mm);return e||ke(!1),e}function AU(t){let e=y.useContext(sa);return e||ke(!1),e}function DU(t){let e=AU(),n=e.matches[e.matches.length-1];return n.route.id||ke(!1),n.route.id}function MU(){var t;let e=y.useContext(yS),n=OU(uu.UseRouteError),r=DU(uu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function LU(t){let{to:e,replace:n,state:r,relative:i}=t;oa()||ke(!1);let s=y.useContext(Mm),o=wS();return y.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function ol(t){ke(!1)}function FU(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Kn.Pop,navigator:s,static:o=!1}=t;oa()&&ke(!1);let a=e.replace(/^\/*/,"/"),l=y.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=hs(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:h="default"}=r,g=y.useMemo(()=>{let _=gS(u,a);return _==null?null:{pathname:_,search:c,hash:d,state:f,key:h}},[a,u,c,d,f,h]);return g==null?null:y.createElement(Lm.Provider,{value:l},y.createElement(ec.Provider,{children:n,value:{location:g,navigationType:i}}))}function UU(t){let{children:e,location:n}=t,r=y.useContext(vS),i=r&&!e?r.router.routes:Kf(e);return IU(i,n)}var Jy;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Jy||(Jy={}));new Promise(()=>{});function Kf(t,e){e===void 0&&(e=[]);let n=[];return y.Children.forEach(t,(r,i)=>{if(!y.isValidElement(r))return;if(r.type===y.Fragment){n.push.apply(n,Kf(r.props.children,e));return}r.type!==ol&&ke(!1),!r.props.index||!r.props.children||ke(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Kf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $U(t){let{basename:e,children:n,window:r}=t,i=y.useRef();i.current==null&&(i.current=zF({window:r,v5Compat:!0}));let s=i.current,[o,a]=y.useState({action:s.action,location:s.location});return y.useLayoutEffect(()=>s.listen(a),[s]),y.createElement(FU,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}var Zy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Zy||(Zy={}));var e_;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(e_||(e_={}));const jU=()=>{const t=wS();async function e(){await u2(),t("/")}return E("button",{className:"btn btn-dark",onClick:e,children:"Sign out"})},zU=()=>E(jU,{}),t_=()=>E(to,{children:E(Pa,{expand:"false",className:"bar",children:H(_C,{fluid:!0,children:[E(Pa.Toggle,{"aria-controls":"offcanvasNavbar"}),E(Pa.Brand,{className:"logo",href:"src/components/events/EventList.jsx",children:"MatchPoint"}),E(zU,{}),H(Pa.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"start",className:"burger-menu",children:[E(rl.Header,{closeButton:!0,children:E(rl.Title,{id:"offcanvasNavbarLabel",children:"MatchPoint"})}),E(rl.Body,{children:E(vy,{className:"justify-content-end flex-grow-1 pe-3",children:E(vy.Link,{href:"/allEvents",children:"All Events"})})})]})]})})});const BU="/assets/app-e5f8a34a.png",WU="/assets/MatchPoint-ec046658.png",HU=()=>E("div",{className:"sign-in-button",children:E(Zi,{variant:"light",size:"lg",onClick:l2,children:"Sign In"})}),VU=t=>{const e=M1();if(e&&!t[e.uid]){const n={displayName:e.displayName,email:e.email};n2(n,e.uid)}return e?E(LU,{to:"/allEvents"}):H("div",{className:"landing-page-container",children:[E("div",{className:"col-left",children:E(nu,{src:BU,className:"app-image"})}),H("div",{className:"col-right",children:[H("div",{className:"logo-container",children:[E(nu,{src:WU,className:"small-logo"}),E("h1",{className:"app-name",children:"MatchPoint"})]}),E("h3",{children:"Find open events, join teams, and much more."}),E("p",{className:"blurb",children:"MatchPoint lets you seamlessly find open sporting events and sign up for them, join teams with your friends, and join leagues with your teams!"}),E(HU,{})]})]})};function GU(){return E("div",{children:"TeamList"})}const KU=()=>{const[t,e]=oy("/events");console.log(e);const n=M1(),[r,i]=oy("/users");return console.log("Users: ",r),console.log(i),E($U,{children:H(UU,{children:[E(ol,{path:"/",element:E("div",{children:E(VU,{allUsers:r})})}),E(ol,{path:"allEvents",element:H("div",{children:[E(t_,{}),E(jF,{eventData:t,user:n,allUsers:r})]})}),E(ol,{path:"Teams",element:H("div",{children:[E(t_,{}),E(GU,{})]})})]})})};const YU=rd.createRoot(document.getElementById("root"));YU.render(E(dt.StrictMode,{children:E(KU,{})}));
