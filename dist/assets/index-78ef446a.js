function Qb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function a0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Do={},Xb={get exports(){return Do},set exports(t){Do=t}},Gc={},m={},Jb={get exports(){return m},set exports(t){m=t}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),Zb=Symbol.for("react.portal"),ek=Symbol.for("react.fragment"),tk=Symbol.for("react.strict_mode"),nk=Symbol.for("react.profiler"),rk=Symbol.for("react.provider"),ik=Symbol.for("react.context"),sk=Symbol.for("react.forward_ref"),ok=Symbol.for("react.suspense"),ak=Symbol.for("react.memo"),lk=Symbol.for("react.lazy"),Fg=Symbol.iterator;function ck(t){return t===null||typeof t!="object"?null:(t=Fg&&t[Fg]||t["@@iterator"],typeof t=="function"?t:null)}var l0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},c0=Object.assign,u0={};function Ps(t,e,n){this.props=t,this.context=e,this.refs=u0,this.updater=n||l0}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function d0(){}d0.prototype=Ps.prototype;function Bh(t,e,n){this.props=t,this.context=e,this.refs=u0,this.updater=n||l0}var Hh=Bh.prototype=new d0;Hh.constructor=Bh;c0(Hh,Ps.prototype);Hh.isPureReactComponent=!0;var $g=Array.isArray,f0=Object.prototype.hasOwnProperty,Wh={current:null},h0={key:!0,ref:!0,__self:!0,__source:!0};function p0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)f0.call(e,r)&&!h0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:_a,type:t,key:s,ref:o,props:i,_owner:Wh.current}}function uk(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vh(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function dk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ug=/\/+/g;function ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dk(""+t.key):e.toString(36)}function Sl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _a:case Zb:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ju(o,0):r,$g(i)?(n="",t!=null&&(n=t.replace(Ug,"$&/")+"/"),Sl(i,e,n,"",function(c){return c})):i!=null&&(Vh(i)&&(i=uk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ug,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",$g(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ju(s,a);o+=Sl(s,e,n,l,i)}else if(l=ck(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ju(s,a++),o+=Sl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function za(t,e,n){if(t==null)return t;var r=[],i=0;return Sl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function fk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wt={current:null},bl={transition:null},hk={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:bl,ReactCurrentOwner:Wh};ie.Children={map:za,forEach:function(t,e,n){za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return za(t,function(){e++}),e},toArray:function(t){return za(t,function(e){return e})||[]},only:function(t){if(!Vh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Ps;ie.Fragment=ek;ie.Profiler=nk;ie.PureComponent=Bh;ie.StrictMode=tk;ie.Suspense=ok;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hk;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=c0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)f0.call(e,l)&&!h0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:_a,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:ik,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rk,_context:t},t.Consumer=t};ie.createElement=p0;ie.createFactory=function(t){var e=p0.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:sk,render:t}};ie.isValidElement=Vh;ie.lazy=function(t){return{$$typeof:lk,_payload:{_status:-1,_result:t},_init:fk}};ie.memo=function(t,e){return{$$typeof:ak,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=bl.transition;bl.transition={};try{t()}finally{bl.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return wt.current.useCallback(t,e)};ie.useContext=function(t){return wt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return wt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return wt.current.useEffect(t,e)};ie.useId=function(){return wt.current.useId()};ie.useImperativeHandle=function(t,e,n){return wt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return wt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return wt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return wt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return wt.current.useReducer(t,e,n)};ie.useRef=function(t){return wt.current.useRef(t)};ie.useState=function(t){return wt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return wt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return wt.current.useTransition()};ie.version="18.2.0";(function(t){t.exports=ie})(Jb);const G=a0(m),Gd=Qb({__proto__:null,default:G},[m]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pk=m,mk=Symbol.for("react.element"),gk=Symbol.for("react.fragment"),vk=Object.prototype.hasOwnProperty,yk=pk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_k={key:!0,ref:!0,__self:!0,__source:!0};function m0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vk.call(e,r)&&!_k.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:mk,type:t,key:s,ref:o,props:i,_owner:yk.current}}Gc.Fragment=gk;Gc.jsx=m0;Gc.jsxs=m0;(function(t){t.exports=Gc})(Xb);const Lo=Do.Fragment,h=Do.jsx,N=Do.jsxs;var Kd={},Hl={},wk={get exports(){return Hl},set exports(t){Hl=t}},$t={},Yd={},Ek={get exports(){return Yd},set exports(t){Yd=t}},g0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,O){var P=I.length;I.push(O);e:for(;0<P;){var W=P-1>>>1,V=I[W];if(0<i(V,O))I[W]=O,I[P]=V,P=W;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var O=I[0],P=I.pop();if(P!==O){I[0]=P;e:for(var W=0,V=I.length,Te=V>>>1;W<Te;){var Se=2*(W+1)-1,me=I[Se],Re=Se+1,Ct=I[Re];if(0>i(me,P))Re<V&&0>i(Ct,me)?(I[W]=Ct,I[Re]=P,W=Re):(I[W]=me,I[Se]=P,W=Se);else if(Re<V&&0>i(Ct,P))I[W]=Ct,I[Re]=P,W=Re;else break e}}return O}function i(I,O){var P=I.sortIndex-O.sortIndex;return P!==0?P:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,g=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=I)r(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function E(I){if(w=!1,_(I),!g)if(n(l)!==null)g=!0,le(S);else{var O=n(c);O!==null&&j(E,O.startTime-I)}}function S(I,O){g=!1,w&&(w=!1,v(T),T=-1),p=!0;var P=f;try{for(_(O),d=n(l);d!==null&&(!(d.expirationTime>O)||I&&!H());){var W=d.callback;if(typeof W=="function"){d.callback=null,f=d.priorityLevel;var V=W(d.expirationTime<=O);O=t.unstable_now(),typeof V=="function"?d.callback=V:d===n(l)&&r(l),_(O)}else r(l);d=n(l)}if(d!==null)var Te=!0;else{var Se=n(c);Se!==null&&j(E,Se.startTime-O),Te=!1}return Te}finally{d=null,f=P,p=!1}}var b=!1,k=null,T=-1,D=5,M=-1;function H(){return!(t.unstable_now()-M<D)}function Y(){if(k!==null){var I=t.unstable_now();M=I;var O=!0;try{O=k(!0,I)}finally{O?te():(b=!1,k=null)}}else b=!1}var te;if(typeof y=="function")te=function(){y(Y)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,X=J.port2;J.port1.onmessage=Y,te=function(){X.postMessage(null)}}else te=function(){C(Y,0)};function le(I){k=I,b||(b=!0,te())}function j(I,O){T=C(function(){I(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,le(S))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var P=f;f=O;try{return I()}finally{f=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var P=f;f=I;try{return O()}finally{f=P}},t.unstable_scheduleCallback=function(I,O,P){var W=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?W+P:W):P=W,I){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=P+V,I={id:u++,callback:O,priorityLevel:I,startTime:P,expirationTime:V,sortIndex:-1},P>W?(I.sortIndex=P,e(c,I),n(l)===null&&I===n(c)&&(w?(v(T),T=-1):w=!0,j(E,P-W))):(I.sortIndex=V,e(l,I),g||p||(g=!0,le(S))),I},t.unstable_shouldYield=H,t.unstable_wrapCallback=function(I){var O=f;return function(){var P=f;f=O;try{return I.apply(this,arguments)}finally{f=P}}}})(g0);(function(t){t.exports=g0})(Ek);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0=m,Ft=Yd;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y0=new Set,Fo={};function Ii(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for(Fo[t]=e,t=0;t<e.length;t++)y0.add(e[t])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qd=Object.prototype.hasOwnProperty,Ck=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zg={},jg={};function Sk(t){return qd.call(jg,t)?!0:qd.call(zg,t)?!1:Ck.test(t)?jg[t]=!0:(zg[t]=!0,!1)}function bk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kk(t,e,n,r){if(e===null||typeof e>"u"||bk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new Et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new Et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new Et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new Et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new Et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new Et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new Et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new Et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new Et(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gh=/[\-:]([a-z])/g;function Kh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gh,Kh);it[e]=new Et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gh,Kh);it[e]=new Et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gh,Kh);it[e]=new Et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new Et(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new Et(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yh(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kk(e,n,i,r)&&(n=null),r||i===null?Sk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qn=v0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ja=Symbol.for("react.element"),Fi=Symbol.for("react.portal"),$i=Symbol.for("react.fragment"),qh=Symbol.for("react.strict_mode"),Qd=Symbol.for("react.profiler"),_0=Symbol.for("react.provider"),w0=Symbol.for("react.context"),Qh=Symbol.for("react.forward_ref"),Xd=Symbol.for("react.suspense"),Jd=Symbol.for("react.suspense_list"),Xh=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),E0=Symbol.for("react.offscreen"),Bg=Symbol.iterator;function Gs(t){return t===null||typeof t!="object"?null:(t=Bg&&t[Bg]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,Bu;function oo(t){if(Bu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bu=e&&e[1]||""}return`
`+Bu+t}var Hu=!1;function Wu(t,e){if(!t||Hu)return"";Hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oo(t):""}function Tk(t){switch(t.tag){case 5:return oo(t.type);case 16:return oo("Lazy");case 13:return oo("Suspense");case 19:return oo("SuspenseList");case 0:case 2:case 15:return t=Wu(t.type,!1),t;case 11:return t=Wu(t.type.render,!1),t;case 1:return t=Wu(t.type,!0),t;default:return""}}function Zd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $i:return"Fragment";case Fi:return"Portal";case Qd:return"Profiler";case qh:return"StrictMode";case Xd:return"Suspense";case Jd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case w0:return(t.displayName||"Context")+".Consumer";case _0:return(t._context.displayName||"Context")+".Provider";case Qh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xh:return e=t.displayName||null,e!==null?e:Zd(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return Zd(t(e))}catch{}}return null}function Ik(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zd(e);case 8:return e===qh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function C0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Nk(t){var e=C0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ba(t){t._valueTracker||(t._valueTracker=Nk(t))}function S0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=C0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ef(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function b0(t,e){e=e.checked,e!=null&&Yh(t,"checked",e,!1)}function tf(t,e){b0(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nf(t,e.type,n):e.hasOwnProperty("defaultValue")&&nf(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nf(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ao=Array.isArray;function ns(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function rf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(ao(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function k0(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function T0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?T0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ha,I0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ha.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xk=["Webkit","ms","Moz","O"];Object.keys(go).forEach(function(t){xk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),go[e]=go[t]})});function N0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||go.hasOwnProperty(t)&&go[t]?(""+e).trim():e+"px"}function x0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=N0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Rk=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function of(t,e){if(e){if(Rk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function af(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lf=null;function Jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cf=null,rs=null,is=null;function Kg(t){if(t=Ca(t)){if(typeof cf!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Xc(e),cf(t.stateNode,t.type,e))}}function R0(t){rs?is?is.push(t):is=[t]:rs=t}function P0(){if(rs){var t=rs,e=is;if(is=rs=null,Kg(t),e)for(t=0;t<e.length;t++)Kg(e[t])}}function O0(t,e){return t(e)}function A0(){}var Vu=!1;function M0(t,e,n){if(Vu)return t(e,n);Vu=!0;try{return O0(t,e,n)}finally{Vu=!1,(rs!==null||is!==null)&&(A0(),P0())}}function Uo(t,e){var n=t.stateNode;if(n===null)return null;var r=Xc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var uf=!1;if(Un)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){uf=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{uf=!1}function Pk(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var vo=!1,Vl=null,Gl=!1,df=null,Ok={onError:function(t){vo=!0,Vl=t}};function Ak(t,e,n,r,i,s,o,a,l){vo=!1,Vl=null,Pk.apply(Ok,arguments)}function Mk(t,e,n,r,i,s,o,a,l){if(Ak.apply(this,arguments),vo){if(vo){var c=Vl;vo=!1,Vl=null}else throw Error(x(198));Gl||(Gl=!0,df=c)}}function Ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function D0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yg(t){if(Ni(t)!==t)throw Error(x(188))}function Dk(t){var e=t.alternate;if(!e){if(e=Ni(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yg(i),t;if(s===r)return Yg(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function L0(t){return t=Dk(t),t!==null?F0(t):null}function F0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=F0(t);if(e!==null)return e;t=t.sibling}return null}var $0=Ft.unstable_scheduleCallback,qg=Ft.unstable_cancelCallback,Lk=Ft.unstable_shouldYield,Fk=Ft.unstable_requestPaint,$e=Ft.unstable_now,$k=Ft.unstable_getCurrentPriorityLevel,Zh=Ft.unstable_ImmediatePriority,U0=Ft.unstable_UserBlockingPriority,Kl=Ft.unstable_NormalPriority,Uk=Ft.unstable_LowPriority,z0=Ft.unstable_IdlePriority,Kc=null,gn=null;function zk(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Kc,t,void 0,(t.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:Hk,jk=Math.log,Bk=Math.LN2;function Hk(t){return t>>>=0,t===0?32:31-(jk(t)/Bk|0)|0}var Wa=64,Va=4194304;function lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=lo(a):(s&=o,s!==0&&(r=lo(s)))}else o=n&~i,o!==0?r=lo(o):s!==0&&(r=lo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sn(e),i=1<<n,r|=t[n],e&=~i;return r}function Wk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-sn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Wk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ff(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function j0(){var t=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),t}function Gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-sn(e),t[e]=n}function Gk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ep(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function B0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var H0,tp,W0,V0,G0,hf=!1,Ga=[],Er=null,Cr=null,Sr=null,zo=new Map,jo=new Map,cr=[],Kk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qg(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function Ys(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ca(e),e!==null&&tp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Yk(t,e,n,r,i){switch(e){case"focusin":return Er=Ys(Er,t,e,n,r,i),!0;case"dragenter":return Cr=Ys(Cr,t,e,n,r,i),!0;case"mouseover":return Sr=Ys(Sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return zo.set(s,Ys(zo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,jo.set(s,Ys(jo.get(s)||null,t,e,n,r,i)),!0}return!1}function K0(t){var e=Xr(t.target);if(e!==null){var n=Ni(e);if(n!==null){if(e=n.tag,e===13){if(e=D0(n),e!==null){t.blockedOn=e,G0(t.priority,function(){W0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);lf=r,n.target.dispatchEvent(r),lf=null}else return e=Ca(n),e!==null&&tp(e),t.blockedOn=n,!1;e.shift()}return!0}function Xg(t,e,n){kl(t)&&n.delete(e)}function qk(){hf=!1,Er!==null&&kl(Er)&&(Er=null),Cr!==null&&kl(Cr)&&(Cr=null),Sr!==null&&kl(Sr)&&(Sr=null),zo.forEach(Xg),jo.forEach(Xg)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,hf||(hf=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,qk)))}function Bo(t){function e(i){return qs(i,t)}if(0<Ga.length){qs(Ga[0],t);for(var n=1;n<Ga.length;n++){var r=Ga[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Er!==null&&qs(Er,t),Cr!==null&&qs(Cr,t),Sr!==null&&qs(Sr,t),zo.forEach(e),jo.forEach(e),n=0;n<cr.length;n++)r=cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)K0(n),n.blockedOn===null&&cr.shift()}var ss=qn.ReactCurrentBatchConfig,ql=!0;function Qk(t,e,n,r){var i=de,s=ss.transition;ss.transition=null;try{de=1,np(t,e,n,r)}finally{de=i,ss.transition=s}}function Xk(t,e,n,r){var i=de,s=ss.transition;ss.transition=null;try{de=4,np(t,e,n,r)}finally{de=i,ss.transition=s}}function np(t,e,n,r){if(ql){var i=pf(t,e,n,r);if(i===null)nd(t,e,r,Ql,n),Qg(t,r);else if(Yk(i,t,e,n,r))r.stopPropagation();else if(Qg(t,r),e&4&&-1<Kk.indexOf(t)){for(;i!==null;){var s=Ca(i);if(s!==null&&H0(s),s=pf(t,e,n,r),s===null&&nd(t,e,r,Ql,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else nd(t,e,r,null,n)}}var Ql=null;function pf(t,e,n,r){if(Ql=null,t=Jh(r),t=Xr(t),t!==null)if(e=Ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=D0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ql=t,null}function Y0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($k()){case Zh:return 1;case U0:return 4;case Kl:case Uk:return 16;case z0:return 536870912;default:return 16}default:return 16}}var mr=null,rp=null,Tl=null;function q0(){if(Tl)return Tl;var t,e=rp,n=e.length,r,i="value"in mr?mr.value:mr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Tl=i.slice(t,1<r?1-r:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function Jg(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:Jg,this.isPropagationStopped=Jg,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ip=Ut(Os),Ea=xe({},Os,{view:0,detail:0}),Jk=Ut(Ea),Ku,Yu,Qs,Yc=xe({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(Ku=t.screenX-Qs.screenX,Yu=t.screenY-Qs.screenY):Yu=Ku=0,Qs=t),Ku)},movementY:function(t){return"movementY"in t?t.movementY:Yu}}),Zg=Ut(Yc),Zk=xe({},Yc,{dataTransfer:0}),eT=Ut(Zk),tT=xe({},Ea,{relatedTarget:0}),qu=Ut(tT),nT=xe({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),rT=Ut(nT),iT=xe({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sT=Ut(iT),oT=xe({},Os,{data:0}),ev=Ut(oT),aT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cT[t])?!!e[t]:!1}function sp(){return uT}var dT=xe({},Ea,{key:function(t){if(t.key){var e=aT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sp,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fT=Ut(dT),hT=xe({},Yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tv=Ut(hT),pT=xe({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sp}),mT=Ut(pT),gT=xe({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),vT=Ut(gT),yT=xe({},Yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_T=Ut(yT),wT=[9,13,27,32],op=Un&&"CompositionEvent"in window,yo=null;Un&&"documentMode"in document&&(yo=document.documentMode);var ET=Un&&"TextEvent"in window&&!yo,Q0=Un&&(!op||yo&&8<yo&&11>=yo),nv=String.fromCharCode(32),rv=!1;function X0(t,e){switch(t){case"keyup":return wT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ui=!1;function CT(t,e){switch(t){case"compositionend":return J0(e);case"keypress":return e.which!==32?null:(rv=!0,nv);case"textInput":return t=e.data,t===nv&&rv?null:t;default:return null}}function ST(t,e){if(Ui)return t==="compositionend"||!op&&X0(t,e)?(t=q0(),Tl=rp=mr=null,Ui=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Q0&&e.locale!=="ko"?null:e.data;default:return null}}var bT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bT[t.type]:e==="textarea"}function Z0(t,e,n,r){R0(r),e=Xl(e,"onChange"),0<e.length&&(n=new ip("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _o=null,Ho=null;function kT(t){u1(t,0)}function qc(t){var e=Bi(t);if(S0(e))return t}function TT(t,e){if(t==="change")return e}var e1=!1;if(Un){var Qu;if(Un){var Xu="oninput"in document;if(!Xu){var sv=document.createElement("div");sv.setAttribute("oninput","return;"),Xu=typeof sv.oninput=="function"}Qu=Xu}else Qu=!1;e1=Qu&&(!document.documentMode||9<document.documentMode)}function ov(){_o&&(_o.detachEvent("onpropertychange",t1),Ho=_o=null)}function t1(t){if(t.propertyName==="value"&&qc(Ho)){var e=[];Z0(e,Ho,t,Jh(t)),M0(kT,e)}}function IT(t,e,n){t==="focusin"?(ov(),_o=e,Ho=n,_o.attachEvent("onpropertychange",t1)):t==="focusout"&&ov()}function NT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qc(Ho)}function xT(t,e){if(t==="click")return qc(e)}function RT(t,e){if(t==="input"||t==="change")return qc(e)}function PT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:PT;function Wo(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qd.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function av(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lv(t,e){var n=av(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=av(n)}}function n1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function r1(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function OT(t){var e=r1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&n1(n.ownerDocument.documentElement,n)){if(r!==null&&ap(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=lv(n,s);var o=lv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var AT=Un&&"documentMode"in document&&11>=document.documentMode,zi=null,mf=null,wo=null,gf=!1;function cv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gf||zi==null||zi!==Wl(r)||(r=zi,"selectionStart"in r&&ap(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wo&&Wo(wo,r)||(wo=r,r=Xl(mf,"onSelect"),0<r.length&&(e=new ip("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zi)))}function Ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ji={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},Ju={},i1={};Un&&(i1=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function Qc(t){if(Ju[t])return Ju[t];if(!ji[t])return t;var e=ji[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in i1)return Ju[t]=e[n];return t}var s1=Qc("animationend"),o1=Qc("animationiteration"),a1=Qc("animationstart"),l1=Qc("transitionend"),c1=new Map,uv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){c1.set(t,e),Ii(e,[t])}for(var Zu=0;Zu<uv.length;Zu++){var ed=uv[Zu],MT=ed.toLowerCase(),DT=ed[0].toUpperCase()+ed.slice(1);jr(MT,"on"+DT)}jr(s1,"onAnimationEnd");jr(o1,"onAnimationIteration");jr(a1,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(l1,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LT=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function dv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Mk(r,e,void 0,t),t.currentTarget=null}function u1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;dv(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;dv(i,a,c),s=l}}}if(Gl)throw t=df,Gl=!1,df=null,t}function _e(t,e){var n=e[Ef];n===void 0&&(n=e[Ef]=new Set);var r=t+"__bubble";n.has(r)||(d1(e,t,2,!1),n.add(r))}function td(t,e,n){var r=0;e&&(r|=4),d1(n,t,r,e)}var qa="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[qa]){t[qa]=!0,y0.forEach(function(n){n!=="selectionchange"&&(LT.has(n)||td(n,!1,t),td(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qa]||(e[qa]=!0,td("selectionchange",!1,e))}}function d1(t,e,n,r){switch(Y0(e)){case 1:var i=Qk;break;case 4:i=Xk;break;default:i=np}n=i.bind(null,e,n,t),i=void 0,!uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function nd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}M0(function(){var c=s,u=Jh(n),d=[];e:{var f=c1.get(t);if(f!==void 0){var p=ip,g=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":p=fT;break;case"focusin":g="focus",p=qu;break;case"focusout":g="blur",p=qu;break;case"beforeblur":case"afterblur":p=qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Zg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=eT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=mT;break;case s1:case o1:case a1:p=rT;break;case l1:p=vT;break;case"scroll":p=Jk;break;case"wheel":p=_T;break;case"copy":case"cut":case"paste":p=sT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=tv}var w=(e&4)!==0,C=!w&&t==="scroll",v=w?f!==null?f+"Capture":null:f;w=[];for(var y=c,_;y!==null;){_=y;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,v!==null&&(E=Uo(y,v),E!=null&&w.push(Go(y,E,_)))),C)break;y=y.return}0<w.length&&(f=new p(f,g,null,n,u),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==lf&&(g=n.relatedTarget||n.fromElement)&&(Xr(g)||g[zn]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Xr(g):null,g!==null&&(C=Ni(g),g!==C||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(w=Zg,E="onMouseLeave",v="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(w=tv,E="onPointerLeave",v="onPointerEnter",y="pointer"),C=p==null?f:Bi(p),_=g==null?f:Bi(g),f=new w(E,y+"leave",p,n,u),f.target=C,f.relatedTarget=_,E=null,Xr(u)===c&&(w=new w(v,y+"enter",g,n,u),w.target=_,w.relatedTarget=C,E=w),C=E,p&&g)t:{for(w=p,v=g,y=0,_=w;_;_=Ai(_))y++;for(_=0,E=v;E;E=Ai(E))_++;for(;0<y-_;)w=Ai(w),y--;for(;0<_-y;)v=Ai(v),_--;for(;y--;){if(w===v||v!==null&&w===v.alternate)break t;w=Ai(w),v=Ai(v)}w=null}else w=null;p!==null&&fv(d,f,p,w,!1),g!==null&&C!==null&&fv(d,C,g,w,!0)}}e:{if(f=c?Bi(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var S=TT;else if(iv(f))if(e1)S=RT;else{S=NT;var b=IT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=xT);if(S&&(S=S(t,c))){Z0(d,S,n,u);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&nf(f,"number",f.value)}switch(b=c?Bi(c):window,t){case"focusin":(iv(b)||b.contentEditable==="true")&&(zi=b,mf=c,wo=null);break;case"focusout":wo=mf=zi=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,cv(d,n,u);break;case"selectionchange":if(AT)break;case"keydown":case"keyup":cv(d,n,u)}var k;if(op)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Ui?X0(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Q0&&n.locale!=="ko"&&(Ui||T!=="onCompositionStart"?T==="onCompositionEnd"&&Ui&&(k=q0()):(mr=u,rp="value"in mr?mr.value:mr.textContent,Ui=!0)),b=Xl(c,T),0<b.length&&(T=new ev(T,t,null,n,u),d.push({event:T,listeners:b}),k?T.data=k:(k=J0(n),k!==null&&(T.data=k)))),(k=ET?CT(t,n):ST(t,n))&&(c=Xl(c,"onBeforeInput"),0<c.length&&(u=new ev("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=k))}u1(d,e)})}function Go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Uo(t,n),s!=null&&r.unshift(Go(t,s,i)),s=Uo(t,e),s!=null&&r.push(Go(t,s,i))),t=t.return}return r}function Ai(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Uo(n,s),l!=null&&o.unshift(Go(n,l,a))):i||(l=Uo(n,s),l!=null&&o.push(Go(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var FT=/\r\n?/g,$T=/\u0000|\uFFFD/g;function hv(t){return(typeof t=="string"?t:""+t).replace(FT,`
`).replace($T,"")}function Qa(t,e,n){if(e=hv(e),hv(t)!==e&&n)throw Error(x(425))}function Jl(){}var vf=null,yf=null;function _f(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wf=typeof setTimeout=="function"?setTimeout:void 0,UT=typeof clearTimeout=="function"?clearTimeout:void 0,pv=typeof Promise=="function"?Promise:void 0,zT=typeof queueMicrotask=="function"?queueMicrotask:typeof pv<"u"?function(t){return pv.resolve(null).then(t).catch(jT)}:wf;function jT(t){setTimeout(function(){throw t})}function rd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Bo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bo(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var As=Math.random().toString(36).slice(2),hn="__reactFiber$"+As,Ko="__reactProps$"+As,zn="__reactContainer$"+As,Ef="__reactEvents$"+As,BT="__reactListeners$"+As,HT="__reactHandles$"+As;function Xr(t){var e=t[hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zn]||n[hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mv(t);t!==null;){if(n=t[hn])return n;t=mv(t)}return e}t=n,n=t.parentNode}return null}function Ca(t){return t=t[hn]||t[zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Xc(t){return t[Ko]||null}var Cf=[],Hi=-1;function Br(t){return{current:t}}function Ee(t){0>Hi||(t.current=Cf[Hi],Cf[Hi]=null,Hi--)}function ye(t,e){Hi++,Cf[Hi]=t.current,t.current=e}var Mr={},dt=Br(Mr),xt=Br(!1),ui=Mr;function gs(t,e){var n=t.type.contextTypes;if(!n)return Mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Rt(t){return t=t.childContextTypes,t!=null}function Zl(){Ee(xt),Ee(dt)}function gv(t,e,n){if(dt.current!==Mr)throw Error(x(168));ye(dt,e),ye(xt,n)}function f1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,Ik(t)||"Unknown",i));return xe({},n,r)}function ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,ui=dt.current,ye(dt,t),ye(xt,xt.current),!0}function vv(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=f1(t,e,ui),r.__reactInternalMemoizedMergedChildContext=t,Ee(xt),Ee(dt),ye(dt,t)):Ee(xt),ye(xt,n)}var In=null,Jc=!1,id=!1;function h1(t){In===null?In=[t]:In.push(t)}function WT(t){Jc=!0,h1(t)}function Hr(){if(!id&&In!==null){id=!0;var t=0,e=de;try{var n=In;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}In=null,Jc=!1}catch(i){throw In!==null&&(In=In.slice(t+1)),$0(Zh,Hr),i}finally{de=e,id=!1}}return null}var Wi=[],Vi=0,tc=null,nc=0,Bt=[],Ht=0,di=null,Rn=1,Pn="";function Vr(t,e){Wi[Vi++]=nc,Wi[Vi++]=tc,tc=t,nc=e}function p1(t,e,n){Bt[Ht++]=Rn,Bt[Ht++]=Pn,Bt[Ht++]=di,di=t;var r=Rn;t=Pn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rn=1<<32-sn(e)+i|n<<i|r,Pn=s+t}else Rn=1<<s|n<<i|r,Pn=t}function lp(t){t.return!==null&&(Vr(t,1),p1(t,1,0))}function cp(t){for(;t===tc;)tc=Wi[--Vi],Wi[Vi]=null,nc=Wi[--Vi],Wi[Vi]=null;for(;t===di;)di=Bt[--Ht],Bt[Ht]=null,Pn=Bt[--Ht],Bt[Ht]=null,Rn=Bt[--Ht],Bt[Ht]=null}var Lt=null,Mt=null,ke=!1,Zt=null;function m1(t,e){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Lt=t,Mt=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Lt=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=di!==null?{id:Rn,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Lt=t,Mt=null,!0):!1;default:return!1}}function Sf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bf(t){if(ke){var e=Mt;if(e){var n=e;if(!yv(t,e)){if(Sf(t))throw Error(x(418));e=br(n.nextSibling);var r=Lt;e&&yv(t,e)?m1(r,n):(t.flags=t.flags&-4097|2,ke=!1,Lt=t)}}else{if(Sf(t))throw Error(x(418));t.flags=t.flags&-4097|2,ke=!1,Lt=t}}}function _v(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lt=t}function Xa(t){if(t!==Lt)return!1;if(!ke)return _v(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_f(t.type,t.memoizedProps)),e&&(e=Mt)){if(Sf(t))throw g1(),Error(x(418));for(;e;)m1(t,e),e=br(e.nextSibling)}if(_v(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=Lt?br(t.stateNode.nextSibling):null;return!0}function g1(){for(var t=Mt;t;)t=br(t.nextSibling)}function vs(){Mt=Lt=null,ke=!1}function up(t){Zt===null?Zt=[t]:Zt.push(t)}var VT=qn.ReactCurrentBatchConfig;function Xt(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var rc=Br(null),ic=null,Gi=null,dp=null;function fp(){dp=Gi=ic=null}function hp(t){var e=rc.current;Ee(rc),t._currentValue=e}function kf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function os(t,e){ic=t,dp=Gi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kt=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(dp!==t)if(t={context:t,memoizedValue:e,next:null},Gi===null){if(ic===null)throw Error(x(308));Gi=t,ic.dependencies={lanes:0,firstContext:t}}else Gi=Gi.next=t;return e}var Jr=null;function pp(t){Jr===null?Jr=[t]:Jr.push(t)}function v1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,pp(e)):(n.next=i.next,i.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function mp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function y1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jn(t,n)}return i=r.interleaved,i===null?(e.next=e,pp(r)):(e.next=i.next,i.next=e),r.interleaved=e,jn(t,n)}function Nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ep(t,n)}}function wv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sc(t,e,n,r){var i=t.updateQueue;ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,w=a;switch(f=e,p=n,w.tag){case 1:if(g=w.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=xe({},d,f);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hi|=o,t.lanes=o,t.memoizedState=d}}function Ev(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var _1=new v0.Component().refs;function Tf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zc={isMounted:function(t){return(t=t._reactInternals)?Ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yt(),i=Ir(t),s=Ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(on(e,t,i,r),Nl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yt(),i=Ir(t),s=Ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(on(e,t,i,r),Nl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yt(),r=Ir(t),i=Ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=kr(t,i,r),e!==null&&(on(e,t,r,n),Nl(e,t,r))}};function Cv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wo(n,r)||!Wo(i,s):!0}function w1(t,e,n){var r=!1,i=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=Rt(e)?ui:dt.current,r=e.contextTypes,s=(r=r!=null)?gs(t,i):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zc.enqueueReplaceState(e,e.state,null)}function If(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=_1,mp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=Rt(e)?ui:dt.current,i.context=gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zc.enqueueReplaceState(i,i.state,null),sc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===_1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bv(t){var e=t._init;return e(t._payload)}function E1(t){function e(v,y){if(t){var _=v.deletions;_===null?(v.deletions=[y],v.flags|=16):_.push(y)}}function n(v,y){if(!t)return null;for(;y!==null;)e(v,y),y=y.sibling;return null}function r(v,y){for(v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function i(v,y){return v=Nr(v,y),v.index=0,v.sibling=null,v}function s(v,y,_){return v.index=_,t?(_=v.alternate,_!==null?(_=_.index,_<y?(v.flags|=2,y):_):(v.flags|=2,y)):(v.flags|=1048576,y)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,y,_,E){return y===null||y.tag!==6?(y=dd(_,v.mode,E),y.return=v,y):(y=i(y,_),y.return=v,y)}function l(v,y,_,E){var S=_.type;return S===$i?u(v,y,_.props.children,E,_.key):y!==null&&(y.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===or&&bv(S)===y.type)?(E=i(y,_.props),E.ref=Xs(v,y,_),E.return=v,E):(E=Ml(_.type,_.key,_.props,null,v.mode,E),E.ref=Xs(v,y,_),E.return=v,E)}function c(v,y,_,E){return y===null||y.tag!==4||y.stateNode.containerInfo!==_.containerInfo||y.stateNode.implementation!==_.implementation?(y=fd(_,v.mode,E),y.return=v,y):(y=i(y,_.children||[]),y.return=v,y)}function u(v,y,_,E,S){return y===null||y.tag!==7?(y=si(_,v.mode,E,S),y.return=v,y):(y=i(y,_),y.return=v,y)}function d(v,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return y=dd(""+y,v.mode,_),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ja:return _=Ml(y.type,y.key,y.props,null,v.mode,_),_.ref=Xs(v,null,y),_.return=v,_;case Fi:return y=fd(y,v.mode,_),y.return=v,y;case or:var E=y._init;return d(v,E(y._payload),_)}if(ao(y)||Gs(y))return y=si(y,v.mode,_,null),y.return=v,y;Ja(v,y)}return null}function f(v,y,_,E){var S=y!==null?y.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:a(v,y,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ja:return _.key===S?l(v,y,_,E):null;case Fi:return _.key===S?c(v,y,_,E):null;case or:return S=_._init,f(v,y,S(_._payload),E)}if(ao(_)||Gs(_))return S!==null?null:u(v,y,_,E,null);Ja(v,_)}return null}function p(v,y,_,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(_)||null,a(y,v,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ja:return v=v.get(E.key===null?_:E.key)||null,l(y,v,E,S);case Fi:return v=v.get(E.key===null?_:E.key)||null,c(y,v,E,S);case or:var b=E._init;return p(v,y,_,b(E._payload),S)}if(ao(E)||Gs(E))return v=v.get(_)||null,u(y,v,E,S,null);Ja(y,E)}return null}function g(v,y,_,E){for(var S=null,b=null,k=y,T=y=0,D=null;k!==null&&T<_.length;T++){k.index>T?(D=k,k=null):D=k.sibling;var M=f(v,k,_[T],E);if(M===null){k===null&&(k=D);break}t&&k&&M.alternate===null&&e(v,k),y=s(M,y,T),b===null?S=M:b.sibling=M,b=M,k=D}if(T===_.length)return n(v,k),ke&&Vr(v,T),S;if(k===null){for(;T<_.length;T++)k=d(v,_[T],E),k!==null&&(y=s(k,y,T),b===null?S=k:b.sibling=k,b=k);return ke&&Vr(v,T),S}for(k=r(v,k);T<_.length;T++)D=p(k,v,T,_[T],E),D!==null&&(t&&D.alternate!==null&&k.delete(D.key===null?T:D.key),y=s(D,y,T),b===null?S=D:b.sibling=D,b=D);return t&&k.forEach(function(H){return e(v,H)}),ke&&Vr(v,T),S}function w(v,y,_,E){var S=Gs(_);if(typeof S!="function")throw Error(x(150));if(_=S.call(_),_==null)throw Error(x(151));for(var b=S=null,k=y,T=y=0,D=null,M=_.next();k!==null&&!M.done;T++,M=_.next()){k.index>T?(D=k,k=null):D=k.sibling;var H=f(v,k,M.value,E);if(H===null){k===null&&(k=D);break}t&&k&&H.alternate===null&&e(v,k),y=s(H,y,T),b===null?S=H:b.sibling=H,b=H,k=D}if(M.done)return n(v,k),ke&&Vr(v,T),S;if(k===null){for(;!M.done;T++,M=_.next())M=d(v,M.value,E),M!==null&&(y=s(M,y,T),b===null?S=M:b.sibling=M,b=M);return ke&&Vr(v,T),S}for(k=r(v,k);!M.done;T++,M=_.next())M=p(k,v,T,M.value,E),M!==null&&(t&&M.alternate!==null&&k.delete(M.key===null?T:M.key),y=s(M,y,T),b===null?S=M:b.sibling=M,b=M);return t&&k.forEach(function(Y){return e(v,Y)}),ke&&Vr(v,T),S}function C(v,y,_,E){if(typeof _=="object"&&_!==null&&_.type===$i&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ja:e:{for(var S=_.key,b=y;b!==null;){if(b.key===S){if(S=_.type,S===$i){if(b.tag===7){n(v,b.sibling),y=i(b,_.props.children),y.return=v,v=y;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===or&&bv(S)===b.type){n(v,b.sibling),y=i(b,_.props),y.ref=Xs(v,b,_),y.return=v,v=y;break e}n(v,b);break}else e(v,b);b=b.sibling}_.type===$i?(y=si(_.props.children,v.mode,E,_.key),y.return=v,v=y):(E=Ml(_.type,_.key,_.props,null,v.mode,E),E.ref=Xs(v,y,_),E.return=v,v=E)}return o(v);case Fi:e:{for(b=_.key;y!==null;){if(y.key===b)if(y.tag===4&&y.stateNode.containerInfo===_.containerInfo&&y.stateNode.implementation===_.implementation){n(v,y.sibling),y=i(y,_.children||[]),y.return=v,v=y;break e}else{n(v,y);break}else e(v,y);y=y.sibling}y=fd(_,v.mode,E),y.return=v,v=y}return o(v);case or:return b=_._init,C(v,y,b(_._payload),E)}if(ao(_))return g(v,y,_,E);if(Gs(_))return w(v,y,_,E);Ja(v,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,y!==null&&y.tag===6?(n(v,y.sibling),y=i(y,_),y.return=v,v=y):(n(v,y),y=dd(_,v.mode,E),y.return=v,v=y),o(v)):n(v,y)}return C}var ys=E1(!0),C1=E1(!1),Sa={},vn=Br(Sa),Yo=Br(Sa),qo=Br(Sa);function Zr(t){if(t===Sa)throw Error(x(174));return t}function gp(t,e){switch(ye(qo,e),ye(Yo,t),ye(vn,Sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sf(e,t)}Ee(vn),ye(vn,e)}function _s(){Ee(vn),Ee(Yo),Ee(qo)}function S1(t){Zr(qo.current);var e=Zr(vn.current),n=sf(e,t.type);e!==n&&(ye(Yo,t),ye(vn,n))}function vp(t){Yo.current===t&&(Ee(vn),Ee(Yo))}var Ie=Br(0);function oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sd=[];function yp(){for(var t=0;t<sd.length;t++)sd[t]._workInProgressVersionPrimary=null;sd.length=0}var xl=qn.ReactCurrentDispatcher,od=qn.ReactCurrentBatchConfig,fi=0,Ne=null,je=null,qe=null,ac=!1,Eo=!1,Qo=0,GT=0;function lt(){throw Error(x(321))}function _p(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function wp(t,e,n,r,i,s){if(fi=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xl.current=t===null||t.memoizedState===null?QT:XT,t=n(r,i),Eo){s=0;do{if(Eo=!1,Qo=0,25<=s)throw Error(x(301));s+=1,qe=je=null,e.updateQueue=null,xl.current=JT,t=n(r,i)}while(Eo)}if(xl.current=lc,e=je!==null&&je.next!==null,fi=0,qe=je=Ne=null,ac=!1,e)throw Error(x(300));return t}function Ep(){var t=Qo!==0;return Qo=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Ne.memoizedState=qe=t:qe=qe.next=t,qe}function qt(){if(je===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=qe===null?Ne.memoizedState:qe.next;if(e!==null)qe=e,je=t;else{if(t===null)throw Error(x(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},qe===null?Ne.memoizedState=qe=t:qe=qe.next=t}return qe}function Xo(t,e){return typeof e=="function"?e(t):e}function ad(t){var e=qt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((fi&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Ne.lanes|=u,hi|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,ln(r,e.memoizedState)||(kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ld(t){var e=qt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ln(s,e.memoizedState)||(kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function b1(){}function k1(t,e){var n=Ne,r=qt(),i=e(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,kt=!0),r=r.queue,Cp(N1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Jo(9,I1.bind(null,n,r,i,e),void 0,null),Ze===null)throw Error(x(349));fi&30||T1(n,e,i)}return i}function T1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function I1(t,e,n,r){e.value=n,e.getSnapshot=r,x1(e)&&R1(t)}function N1(t,e,n){return n(function(){x1(e)&&R1(t)})}function x1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function R1(t){var e=jn(t,1);e!==null&&on(e,t,1,-1)}function kv(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},e.queue=t,t=t.dispatch=qT.bind(null,Ne,t),[e.memoizedState,t]}function Jo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function P1(){return qt().memoizedState}function Rl(t,e,n,r){var i=dn();Ne.flags|=t,i.memoizedState=Jo(1|e,n,void 0,r===void 0?null:r)}function eu(t,e,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&_p(r,o.deps)){i.memoizedState=Jo(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=Jo(1|e,n,s,r)}function Tv(t,e){return Rl(8390656,8,t,e)}function Cp(t,e){return eu(2048,8,t,e)}function O1(t,e){return eu(4,2,t,e)}function A1(t,e){return eu(4,4,t,e)}function M1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function D1(t,e,n){return n=n!=null?n.concat([t]):null,eu(4,4,M1.bind(null,e,t),n)}function Sp(){}function L1(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_p(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function F1(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_p(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function $1(t,e,n){return fi&21?(ln(n,e)||(n=j0(),Ne.lanes|=n,hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kt=!0),t.memoizedState=n)}function KT(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=od.transition;od.transition={};try{t(!1),e()}finally{de=n,od.transition=r}}function U1(){return qt().memoizedState}function YT(t,e,n){var r=Ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},z1(t))j1(e,n);else if(n=v1(t,e,n,r),n!==null){var i=yt();on(n,t,r,i),B1(n,e,r)}}function qT(t,e,n){var r=Ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(z1(t))j1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ln(a,o)){var l=e.interleaved;l===null?(i.next=i,pp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=v1(t,e,i,r),n!==null&&(i=yt(),on(n,t,r,i),B1(n,e,r))}}function z1(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function j1(t,e){Eo=ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ep(t,n)}}var lc={readContext:Yt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},QT={readContext:Yt,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:Tv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,M1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=YT.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:kv,useDebugValue:Sp,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=kv(!1),e=t[0];return t=KT.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=dn();if(ke){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),Ze===null)throw Error(x(349));fi&30||T1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Tv(N1.bind(null,r,s,t),[t]),r.flags|=2048,Jo(9,I1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=Ze.identifierPrefix;if(ke){var n=Pn,r=Rn;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=GT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},XT={readContext:Yt,useCallback:L1,useContext:Yt,useEffect:Cp,useImperativeHandle:D1,useInsertionEffect:O1,useLayoutEffect:A1,useMemo:F1,useReducer:ad,useRef:P1,useState:function(){return ad(Xo)},useDebugValue:Sp,useDeferredValue:function(t){var e=qt();return $1(e,je.memoizedState,t)},useTransition:function(){var t=ad(Xo)[0],e=qt().memoizedState;return[t,e]},useMutableSource:b1,useSyncExternalStore:k1,useId:U1,unstable_isNewReconciler:!1},JT={readContext:Yt,useCallback:L1,useContext:Yt,useEffect:Cp,useImperativeHandle:D1,useInsertionEffect:O1,useLayoutEffect:A1,useMemo:F1,useReducer:ld,useRef:P1,useState:function(){return ld(Xo)},useDebugValue:Sp,useDeferredValue:function(t){var e=qt();return je===null?e.memoizedState=t:$1(e,je.memoizedState,t)},useTransition:function(){var t=ld(Xo)[0],e=qt().memoizedState;return[t,e]},useMutableSource:b1,useSyncExternalStore:k1,useId:U1,unstable_isNewReconciler:!1};function ws(t,e){try{var n="",r=e;do n+=Tk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function cd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ZT=typeof WeakMap=="function"?WeakMap:Map;function H1(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){uc||(uc=!0,$f=r),Nf(t,e)},n}function W1(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Nf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nf(t,e),typeof r!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Iv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ZT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=hI.bind(null,t,e,n),e.then(t,t))}function Nv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,kr(n,e,1))),n.lanes|=1),t)}var eI=qn.ReactCurrentOwner,kt=!1;function mt(t,e,n,r){e.child=t===null?C1(e,null,n,r):ys(e,t.child,n,r)}function Rv(t,e,n,r,i){n=n.render;var s=e.ref;return os(e,i),r=wp(t,e,n,r,s,i),n=Ep(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(ke&&n&&lp(e),e.flags|=1,mt(t,e,r,i),e.child)}function Pv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,V1(t,e,s,r,i)):(t=Ml(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wo,n(o,r)&&t.ref===e.ref)return Bn(t,e,i)}return e.flags|=1,t=Nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function V1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wo(s,r)&&t.ref===e.ref)if(kt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,Bn(t,e,i)}return xf(t,e,n,r,i)}function G1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Yi,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Yi,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(Yi,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(Yi,At),At|=r;return mt(t,e,i,n),e.child}function K1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xf(t,e,n,r,i){var s=Rt(n)?ui:dt.current;return s=gs(e,s),os(e,i),n=wp(t,e,n,r,s,i),r=Ep(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(ke&&r&&lp(e),e.flags|=1,mt(t,e,n,i),e.child)}function Ov(t,e,n,r,i){if(Rt(n)){var s=!0;ec(e)}else s=!1;if(os(e,i),e.stateNode===null)Pl(t,e),w1(e,n,r),If(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yt(c):(c=Rt(n)?ui:dt.current,c=gs(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Sv(e,o,r,c),ar=!1;var f=e.memoizedState;o.state=f,sc(e,r,o,i),l=e.memoizedState,a!==r||f!==l||xt.current||ar?(typeof u=="function"&&(Tf(e,n,u,r),l=e.memoizedState),(a=ar||Cv(e,n,a,r,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,y1(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Xt(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yt(l):(l=Rt(n)?ui:dt.current,l=gs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Sv(e,o,r,l),ar=!1,f=e.memoizedState,o.state=f,sc(e,r,o,i);var g=e.memoizedState;a!==d||f!==g||xt.current||ar?(typeof p=="function"&&(Tf(e,n,p,r),g=e.memoizedState),(c=ar||Cv(e,n,c,r,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Rf(t,e,n,r,s,i)}function Rf(t,e,n,r,i,s){K1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&vv(e,n,!1),Bn(t,e,s);r=e.stateNode,eI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ys(e,t.child,null,s),e.child=ys(e,null,a,s)):mt(t,e,a,s),e.memoizedState=r.state,i&&vv(e,n,!0),e.child}function Y1(t){var e=t.stateNode;e.pendingContext?gv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gv(t,e.context,!1),gp(t,e.containerInfo)}function Av(t,e,n,r,i){return vs(),up(i),e.flags|=256,mt(t,e,n,r),e.child}var Pf={dehydrated:null,treeContext:null,retryLane:0};function Of(t){return{baseLanes:t,cachePool:null,transitions:null}}function q1(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Ie,i&1),t===null)return bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ru(o,r,0,null),t=si(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Of(n),e.memoizedState=Pf,t):bp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return tI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Nr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Nr(a,s):(s=si(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Of(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pf,r}return s=t.child,t=s.sibling,r=Nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function bp(t,e){return e=ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Za(t,e,n,r){return r!==null&&up(r),ys(e,t.child,null,n),t=bp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=cd(Error(x(422))),Za(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ru({mode:"visible",children:r.children},i,0,null),s=si(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ys(e,t.child,null,o),e.child.memoizedState=Of(o),e.memoizedState=Pf,s);if(!(e.mode&1))return Za(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=cd(s,r,void 0),Za(t,e,o,r)}if(a=(o&t.childLanes)!==0,kt||a){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jn(t,i),on(r,t,i,-1))}return Rp(),r=cd(Error(x(421))),Za(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=pI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mt=br(i.nextSibling),Lt=e,ke=!0,Zt=null,t!==null&&(Bt[Ht++]=Rn,Bt[Ht++]=Pn,Bt[Ht++]=di,Rn=t.id,Pn=t.overflow,di=e),e=bp(e,r.children),e.flags|=4096,e)}function Mv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kf(t.return,e,n)}function ud(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Q1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(mt(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mv(t,n,e);else if(t.tag===19)Mv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&oc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ud(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&oc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ud(e,!0,n,null,s);break;case"together":ud(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nI(t,e,n){switch(e.tag){case 3:Y1(e),vs();break;case 5:S1(e);break;case 1:Rt(e.type)&&ec(e);break;case 4:gp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(rc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?q1(t,e,n):(ye(Ie,Ie.current&1),t=Bn(t,e,n),t!==null?t.sibling:null);ye(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Q1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,G1(t,e,n)}return Bn(t,e,n)}var X1,Af,J1,Z1;X1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Af=function(){};J1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Zr(vn.current);var s=null;switch(n){case"input":i=ef(t,i),r=ef(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=rf(t,i),r=rf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Jl)}of(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Z1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Js(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function rI(t,e,n){var r=e.pendingProps;switch(cp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return Rt(e.type)&&Zl(),ct(e),null;case 3:return r=e.stateNode,_s(),Ee(xt),Ee(dt),yp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zt!==null&&(jf(Zt),Zt=null))),Af(t,e),ct(e),null;case 5:vp(e);var i=Zr(qo.current);if(n=e.type,t!==null&&e.stateNode!=null)J1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return ct(e),null}if(t=Zr(vn.current),Xa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[hn]=e,r[Ko]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<co.length;i++)_e(co[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Hg(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Vg(r,s),_e("invalid",r)}of(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qa(r.textContent,a,t),i=["children",""+a]):Fo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Ba(r),Wg(r,s,!0);break;case"textarea":Ba(r),Gg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Jl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=T0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[hn]=e,t[Ko]=r,X1(t,e,!1,!1),e.stateNode=t;e:{switch(o=af(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<co.length;i++)_e(co[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":Hg(t,r),i=ef(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Vg(t,r),i=rf(t,r),_e("invalid",t);break;default:i=r}of(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?x0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&I0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$o(t,l):typeof l=="number"&&$o(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",t):l!=null&&Yh(t,s,l,o))}switch(n){case"input":Ba(t),Wg(t,r,!1);break;case"textarea":Ba(t),Gg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ns(t,!!r.multiple,s,!1):r.defaultValue!=null&&ns(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)Z1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Zr(qo.current),Zr(vn.current),Xa(e)){if(r=e.stateNode,n=e.memoizedProps,r[hn]=e,(s=r.nodeValue!==n)&&(t=Lt,t!==null))switch(t.tag){case 3:Qa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=e,e.stateNode=r}return ct(e),null;case 13:if(Ee(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&Mt!==null&&e.mode&1&&!(e.flags&128))g1(),vs(),e.flags|=98560,s=!1;else if(s=Xa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[hn]=e}else vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),s=!1}else Zt!==null&&(jf(Zt),Zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Be===0&&(Be=3):Rp())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return _s(),Af(t,e),t===null&&Vo(e.stateNode.containerInfo),ct(e),null;case 10:return hp(e.type._context),ct(e),null;case 17:return Rt(e.type)&&Zl(),ct(e),null;case 19:if(Ee(Ie),s=e.memoizedState,s===null)return ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Js(s,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=oc(t),o!==null){for(e.flags|=128,Js(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&$e()>Es&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304)}else{if(!r)if(t=oc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ke)return ct(e),null}else 2*$e()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=$e(),e.sibling=null,n=Ie.current,ye(Ie,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return xp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function iI(t,e){switch(cp(e),e.tag){case 1:return Rt(e.type)&&Zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),Ee(xt),Ee(dt),yp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vp(e),null;case 13:if(Ee(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Ie),null;case 4:return _s(),null;case 10:return hp(e.type._context),null;case 22:case 23:return xp(),null;case 24:return null;default:return null}}var el=!1,ut=!1,sI=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function Mf(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Dv=!1;function oI(t,e){if(vf=ql,t=r1(),ap(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++u===r&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yf={focusedElem:t,selectionRange:n},ql=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.memoizedProps,C=g.memoizedState,v=e.stateNode,y=v.getSnapshotBeforeUpdate(e.elementType===e.type?w:Xt(e.type,w),C);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(E){Ae(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return g=Dv,Dv=!1,g}function Co(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Mf(e,n,s)}i=i.next}while(i!==r)}}function tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Df(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ew(t){var e=t.alternate;e!==null&&(t.alternate=null,ew(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hn],delete e[Ko],delete e[Ef],delete e[BT],delete e[HT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tw(t){return t.tag===5||t.tag===3||t.tag===4}function Lv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jl));else if(r!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}function Ff(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ff(t,e,n),t=t.sibling;t!==null;)Ff(t,e,n),t=t.sibling}var tt=null,Jt=!1;function rr(t,e,n){for(n=n.child;n!==null;)nw(t,e,n),n=n.sibling}function nw(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Kc,n)}catch{}switch(n.tag){case 5:ut||Ki(n,e);case 6:var r=tt,i=Jt;tt=null,rr(t,e,n),tt=r,Jt=i,tt!==null&&(Jt?(t=tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(Jt?(t=tt,n=n.stateNode,t.nodeType===8?rd(t.parentNode,n):t.nodeType===1&&rd(t,n),Bo(t)):rd(tt,n.stateNode));break;case 4:r=tt,i=Jt,tt=n.stateNode.containerInfo,Jt=!0,rr(t,e,n),tt=r,Jt=i;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mf(n,e,o),i=i.next}while(i!==r)}rr(t,e,n);break;case 1:if(!ut&&(Ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ae(n,e,a)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,rr(t,e,n),ut=r):rr(t,e,n);break;default:rr(t,e,n)}}function Fv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sI),e.forEach(function(r){var i=mI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:tt=a.stateNode,Jt=!1;break e;case 3:tt=a.stateNode.containerInfo,Jt=!0;break e;case 4:tt=a.stateNode.containerInfo,Jt=!0;break e}a=a.return}if(tt===null)throw Error(x(160));nw(s,o,i),tt=null,Jt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rw(e,t),e=e.sibling}function rw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qt(e,t),un(t),r&4){try{Co(3,t,t.return),tu(3,t)}catch(w){Ae(t,t.return,w)}try{Co(5,t,t.return)}catch(w){Ae(t,t.return,w)}}break;case 1:Qt(e,t),un(t),r&512&&n!==null&&Ki(n,n.return);break;case 5:if(Qt(e,t),un(t),r&512&&n!==null&&Ki(n,n.return),t.flags&32){var i=t.stateNode;try{$o(i,"")}catch(w){Ae(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&b0(i,s),af(a,o);var c=af(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?x0(i,d):u==="dangerouslySetInnerHTML"?I0(i,d):u==="children"?$o(i,d):Yh(i,u,d,c)}switch(a){case"input":tf(i,s);break;case"textarea":k0(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ns(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ns(i,!!s.multiple,s.defaultValue,!0):ns(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ko]=s}catch(w){Ae(t,t.return,w)}}break;case 6:if(Qt(e,t),un(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Ae(t,t.return,w)}}break;case 3:if(Qt(e,t),un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bo(e.containerInfo)}catch(w){Ae(t,t.return,w)}break;case 4:Qt(e,t),un(t);break;case 13:Qt(e,t),un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ip=$e())),r&4&&Fv(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(c=ut)||u,Qt(e,t),ut=c):Qt(e,t),un(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for($=t,u=t.child;u!==null;){for(d=$=u;$!==null;){switch(f=$,p=f.child,f.tag){case 0:case 11:case 14:case 15:Co(4,f,f.return);break;case 1:Ki(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(w){Ae(r,n,w)}}break;case 5:Ki(f,f.return);break;case 22:if(f.memoizedState!==null){Uv(d);continue}}p!==null?(p.return=f,$=p):Uv(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=N0("display",o))}catch(w){Ae(t,t.return,w)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){Ae(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qt(e,t),un(t),r&4&&Fv(t);break;case 21:break;default:Qt(e,t),un(t)}}function un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tw(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($o(i,""),r.flags&=-33);var s=Lv(t);Ff(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Lv(t);Lf(t,a,o);break;default:throw Error(x(161))}}catch(l){Ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function aI(t,e,n){$=t,iw(t)}function iw(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||el;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ut;a=el;var c=ut;if(el=o,(ut=l)&&!c)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?zv(i):l!==null?(l.return=o,$=l):zv(i);for(;s!==null;)$=s,iw(s),s=s.sibling;$=i,el=a,ut=c}$v(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):$v(t)}}function $v(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||tu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ev(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ev(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Bo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ut||e.flags&512&&Df(e)}catch(f){Ae(e,e.return,f)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Uv(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function zv(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tu(4,e)}catch(l){Ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ae(e,i,l)}}var s=e.return;try{Df(e)}catch(l){Ae(e,s,l)}break;case 5:var o=e.return;try{Df(e)}catch(l){Ae(e,o,l)}}}catch(l){Ae(e,e.return,l)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var lI=Math.ceil,cc=qn.ReactCurrentDispatcher,kp=qn.ReactCurrentOwner,Kt=qn.ReactCurrentBatchConfig,oe=0,Ze=null,Ue=null,rt=0,At=0,Yi=Br(0),Be=0,Zo=null,hi=0,nu=0,Tp=0,So=null,bt=null,Ip=0,Es=1/0,Tn=null,uc=!1,$f=null,Tr=null,tl=!1,gr=null,dc=0,bo=0,Uf=null,Ol=-1,Al=0;function yt(){return oe&6?$e():Ol!==-1?Ol:Ol=$e()}function Ir(t){return t.mode&1?oe&2&&rt!==0?rt&-rt:VT.transition!==null?(Al===0&&(Al=j0()),Al):(t=de,t!==0||(t=window.event,t=t===void 0?16:Y0(t.type)),t):1}function on(t,e,n,r){if(50<bo)throw bo=0,Uf=null,Error(x(185));wa(t,n,r),(!(oe&2)||t!==Ze)&&(t===Ze&&(!(oe&2)&&(nu|=n),Be===4&&ur(t,rt)),Pt(t,r),n===1&&oe===0&&!(e.mode&1)&&(Es=$e()+500,Jc&&Hr()))}function Pt(t,e){var n=t.callbackNode;Vk(t,e);var r=Yl(t,t===Ze?rt:0);if(r===0)n!==null&&qg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&qg(n),e===1)t.tag===0?WT(jv.bind(null,t)):h1(jv.bind(null,t)),zT(function(){!(oe&6)&&Hr()}),n=null;else{switch(B0(r)){case 1:n=Zh;break;case 4:n=U0;break;case 16:n=Kl;break;case 536870912:n=z0;break;default:n=Kl}n=fw(n,sw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sw(t,e){if(Ol=-1,Al=0,oe&6)throw Error(x(327));var n=t.callbackNode;if(as()&&t.callbackNode!==n)return null;var r=Yl(t,t===Ze?rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fc(t,r);else{e=r;var i=oe;oe|=2;var s=aw();(Ze!==t||rt!==e)&&(Tn=null,Es=$e()+500,ii(t,e));do try{dI();break}catch(a){ow(t,a)}while(1);fp(),cc.current=s,oe=i,Ue!==null?e=0:(Ze=null,rt=0,e=Be)}if(e!==0){if(e===2&&(i=ff(t),i!==0&&(r=i,e=zf(t,i))),e===1)throw n=Zo,ii(t,0),ur(t,r),Pt(t,$e()),n;if(e===6)ur(t,r);else{if(i=t.current.alternate,!(r&30)&&!cI(i)&&(e=fc(t,r),e===2&&(s=ff(t),s!==0&&(r=s,e=zf(t,s))),e===1))throw n=Zo,ii(t,0),ur(t,r),Pt(t,$e()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Gr(t,bt,Tn);break;case 3:if(ur(t,r),(r&130023424)===r&&(e=Ip+500-$e(),10<e)){if(Yl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wf(Gr.bind(null,t,bt,Tn),e);break}Gr(t,bt,Tn);break;case 4:if(ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lI(r/1960))-r,10<r){t.timeoutHandle=wf(Gr.bind(null,t,bt,Tn),r);break}Gr(t,bt,Tn);break;case 5:Gr(t,bt,Tn);break;default:throw Error(x(329))}}}return Pt(t,$e()),t.callbackNode===n?sw.bind(null,t):null}function zf(t,e){var n=So;return t.current.memoizedState.isDehydrated&&(ii(t,e).flags|=256),t=fc(t,e),t!==2&&(e=bt,bt=n,e!==null&&jf(e)),t}function jf(t){bt===null?bt=t:bt.push.apply(bt,t)}function cI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~Tp,e&=~nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sn(e),r=1<<n;t[n]=-1,e&=~r}}function jv(t){if(oe&6)throw Error(x(327));as();var e=Yl(t,0);if(!(e&1))return Pt(t,$e()),null;var n=fc(t,e);if(t.tag!==0&&n===2){var r=ff(t);r!==0&&(e=r,n=zf(t,r))}if(n===1)throw n=Zo,ii(t,0),ur(t,e),Pt(t,$e()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,bt,Tn),Pt(t,$e()),null}function Np(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Es=$e()+500,Jc&&Hr())}}function pi(t){gr!==null&&gr.tag===0&&!(oe&6)&&as();var e=oe;oe|=1;var n=Kt.transition,r=de;try{if(Kt.transition=null,de=1,t)return t()}finally{de=r,Kt.transition=n,oe=e,!(oe&6)&&Hr()}}function xp(){At=Yi.current,Ee(Yi)}function ii(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,UT(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(cp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zl();break;case 3:_s(),Ee(xt),Ee(dt),yp();break;case 5:vp(r);break;case 4:_s();break;case 13:Ee(Ie);break;case 19:Ee(Ie);break;case 10:hp(r.type._context);break;case 22:case 23:xp()}n=n.return}if(Ze=t,Ue=t=Nr(t.current,null),rt=At=e,Be=0,Zo=null,Tp=nu=hi=0,bt=So=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Jr=null}return t}function ow(t,e){do{var n=Ue;try{if(fp(),xl.current=lc,ac){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ac=!1}if(fi=0,qe=je=Ne=null,Eo=!1,Qo=0,kp.current=null,n===null||n.return===null){Be=1,Zo=e,Ue=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Nv(o);if(p!==null){p.flags&=-257,xv(p,o,a,s,e),p.mode&1&&Iv(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var w=new Set;w.add(l),e.updateQueue=w}else g.add(l);break e}else{if(!(e&1)){Iv(s,c,e),Rp();break e}l=Error(x(426))}}else if(ke&&a.mode&1){var C=Nv(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),xv(C,o,a,s,e),up(ws(l,a));break e}}s=l=ws(l,a),Be!==4&&(Be=2),So===null?So=[s]:So.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=H1(s,l,e);wv(s,v);break e;case 1:a=l;var y=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Tr===null||!Tr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=W1(s,a,e);wv(s,E);break e}}s=s.return}while(s!==null)}cw(n)}catch(S){e=S,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(1)}function aw(){var t=cc.current;return cc.current=lc,t===null?lc:t}function Rp(){(Be===0||Be===3||Be===2)&&(Be=4),Ze===null||!(hi&268435455)&&!(nu&268435455)||ur(Ze,rt)}function fc(t,e){var n=oe;oe|=2;var r=aw();(Ze!==t||rt!==e)&&(Tn=null,ii(t,e));do try{uI();break}catch(i){ow(t,i)}while(1);if(fp(),oe=n,cc.current=r,Ue!==null)throw Error(x(261));return Ze=null,rt=0,Be}function uI(){for(;Ue!==null;)lw(Ue)}function dI(){for(;Ue!==null&&!Lk();)lw(Ue)}function lw(t){var e=dw(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?cw(t):Ue=e,kp.current=null}function cw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iI(n,e),n!==null){n.flags&=32767,Ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,Ue=null;return}}else if(n=rI(n,e,At),n!==null){Ue=n;return}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);Be===0&&(Be=5)}function Gr(t,e,n){var r=de,i=Kt.transition;try{Kt.transition=null,de=1,fI(t,e,n,r)}finally{Kt.transition=i,de=r}return null}function fI(t,e,n,r){do as();while(gr!==null);if(oe&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Gk(t,s),t===Ze&&(Ue=Ze=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,fw(Kl,function(){return as(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kt.transition,Kt.transition=null;var o=de;de=1;var a=oe;oe|=4,kp.current=null,oI(t,n),rw(n,t),OT(yf),ql=!!vf,yf=vf=null,t.current=n,aI(n),Fk(),oe=a,de=o,Kt.transition=s}else t.current=n;if(tl&&(tl=!1,gr=t,dc=i),s=t.pendingLanes,s===0&&(Tr=null),zk(n.stateNode),Pt(t,$e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uc)throw uc=!1,t=$f,$f=null,t;return dc&1&&t.tag!==0&&as(),s=t.pendingLanes,s&1?t===Uf?bo++:(bo=0,Uf=t):bo=0,Hr(),null}function as(){if(gr!==null){var t=B0(dc),e=Kt.transition,n=de;try{if(Kt.transition=null,de=16>t?16:t,gr===null)var r=!1;else{if(t=gr,gr=null,dc=0,oe&6)throw Error(x(331));var i=oe;for(oe|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for($=c;$!==null;){var u=$;switch(u.tag){case 0:case 11:case 15:Co(8,u,s)}var d=u.child;if(d!==null)d.return=u,$=d;else for(;$!==null;){u=$;var f=u.sibling,p=u.return;if(ew(u),u===c){$=null;break}if(f!==null){f.return=p,$=f;break}$=p}}}var g=s.alternate;if(g!==null){var w=g.child;if(w!==null){g.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Co(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,$=v;break e}$=s.return}}var y=t.current;for($=y;$!==null;){o=$;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,$=_;else e:for(o=y;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tu(9,a)}}catch(S){Ae(a,a.return,S)}if(a===o){$=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,$=E;break e}$=a.return}}if(oe=i,Hr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Kc,t)}catch{}r=!0}return r}finally{de=n,Kt.transition=e}}return!1}function Bv(t,e,n){e=ws(n,e),e=H1(t,e,1),t=kr(t,e,1),e=yt(),t!==null&&(wa(t,1,e),Pt(t,e))}function Ae(t,e,n){if(t.tag===3)Bv(t,t,n);else for(;e!==null;){if(e.tag===3){Bv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tr===null||!Tr.has(r))){t=ws(n,t),t=W1(e,t,1),e=kr(e,t,1),t=yt(),e!==null&&(wa(e,1,t),Pt(e,t));break}}e=e.return}}function hI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yt(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(rt&n)===n&&(Be===4||Be===3&&(rt&130023424)===rt&&500>$e()-Ip?ii(t,0):Tp|=n),Pt(t,e)}function uw(t,e){e===0&&(t.mode&1?(e=Va,Va<<=1,!(Va&130023424)&&(Va=4194304)):e=1);var n=yt();t=jn(t,e),t!==null&&(wa(t,e,n),Pt(t,n))}function pI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uw(t,n)}function mI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),uw(t,n)}var dw;dw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kt=!1,nI(t,e,n);kt=!!(t.flags&131072)}else kt=!1,ke&&e.flags&1048576&&p1(e,nc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pl(t,e),t=e.pendingProps;var i=gs(e,dt.current);os(e,n),i=wp(null,e,r,t,i,n);var s=Ep();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rt(r)?(s=!0,ec(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mp(e),i.updater=Zc,e.stateNode=i,i._reactInternals=e,If(e,r,t,n),e=Rf(null,e,r,!0,s,n)):(e.tag=0,ke&&s&&lp(e),mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vI(r),t=Xt(r,t),i){case 0:e=xf(null,e,r,t,n);break e;case 1:e=Ov(null,e,r,t,n);break e;case 11:e=Rv(null,e,r,t,n);break e;case 14:e=Pv(null,e,r,Xt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),xf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Ov(t,e,r,i,n);case 3:e:{if(Y1(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,y1(t,e),sc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ws(Error(x(423)),e),e=Av(t,e,r,n,i);break e}else if(r!==i){i=ws(Error(x(424)),e),e=Av(t,e,r,n,i);break e}else for(Mt=br(e.stateNode.containerInfo.firstChild),Lt=e,ke=!0,Zt=null,n=C1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vs(),r===i){e=Bn(t,e,n);break e}mt(t,e,r,n)}e=e.child}return e;case 5:return S1(e),t===null&&bf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,_f(r,i)?o=null:s!==null&&_f(r,s)&&(e.flags|=32),K1(t,e),mt(t,e,o,n),e.child;case 6:return t===null&&bf(e),null;case 13:return q1(t,e,n);case 4:return gp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ys(e,null,r,n):mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Rv(t,e,r,i,n);case 7:return mt(t,e,e.pendingProps,n),e.child;case 8:return mt(t,e,e.pendingProps.children,n),e.child;case 12:return mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(rc,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!xt.current){e=Bn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ln(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),kf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),kf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,os(e,n),i=Yt(i),r=r(i),e.flags|=1,mt(t,e,r,n),e.child;case 14:return r=e.type,i=Xt(r,e.pendingProps),i=Xt(r.type,i),Pv(t,e,r,i,n);case 15:return V1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Pl(t,e),e.tag=1,Rt(r)?(t=!0,ec(e)):t=!1,os(e,n),w1(e,r,i),If(e,r,i,n),Rf(null,e,r,!0,t,n);case 19:return Q1(t,e,n);case 22:return G1(t,e,n)}throw Error(x(156,e.tag))};function fw(t,e){return $0(t,e)}function gI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(t,e,n,r){return new gI(t,e,n,r)}function Pp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vI(t){if(typeof t=="function")return Pp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qh)return 11;if(t===Xh)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=Vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $i:return si(n.children,i,s,e);case qh:o=8,i|=8;break;case Qd:return t=Vt(12,n,e,i|2),t.elementType=Qd,t.lanes=s,t;case Xd:return t=Vt(13,n,e,i),t.elementType=Xd,t.lanes=s,t;case Jd:return t=Vt(19,n,e,i),t.elementType=Jd,t.lanes=s,t;case E0:return ru(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _0:o=10;break e;case w0:o=9;break e;case Qh:o=11;break e;case Xh:o=14;break e;case or:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function si(t,e,n,r){return t=Vt(7,t,r,e),t.lanes=n,t}function ru(t,e,n,r){return t=Vt(22,t,r,e),t.elementType=E0,t.lanes=n,t.stateNode={isHidden:!1},t}function dd(t,e,n){return t=Vt(6,t,null,e),t.lanes=n,t}function fd(t,e,n){return e=Vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gu(0),this.expirationTimes=Gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Op(t,e,n,r,i,s,o,a,l){return t=new yI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mp(s),t}function _I(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hw(t){if(!t)return Mr;t=t._reactInternals;e:{if(Ni(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Rt(n))return f1(t,n,e)}return e}function pw(t,e,n,r,i,s,o,a,l){return t=Op(n,r,!0,t,i,s,o,a,l),t.context=hw(null),n=t.current,r=yt(),i=Ir(n),s=Ln(r,i),s.callback=e??null,kr(n,s,i),t.current.lanes=i,wa(t,i,r),Pt(t,r),t}function iu(t,e,n,r){var i=e.current,s=yt(),o=Ir(i);return n=hw(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kr(i,e,o),t!==null&&(on(t,i,o,s),Nl(t,i,o)),o}function hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ap(t,e){Hv(t,e),(t=t.alternate)&&Hv(t,e)}function wI(){return null}var mw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mp(t){this._internalRoot=t}su.prototype.render=Mp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));iu(t,e,null,null)};su.prototype.unmount=Mp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pi(function(){iu(null,t,null,null)}),e[zn]=null}};function su(t){this._internalRoot=t}su.prototype.unstable_scheduleHydration=function(t){if(t){var e=V0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&K0(t)}};function Dp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wv(){}function EI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=hc(o);s.call(c)}}var o=pw(e,r,t,0,null,!1,!1,"",Wv);return t._reactRootContainer=o,t[zn]=o.current,Vo(t.nodeType===8?t.parentNode:t),pi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=hc(l);a.call(c)}}var l=Op(t,0,!1,null,null,!1,!1,"",Wv);return t._reactRootContainer=l,t[zn]=l.current,Vo(t.nodeType===8?t.parentNode:t),pi(function(){iu(e,l,n,r)}),l}function au(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=hc(o);a.call(l)}}iu(e,o,t,i)}else o=EI(n,e,t,i,r);return hc(o)}H0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=lo(e.pendingLanes);n!==0&&(ep(e,n|1),Pt(e,$e()),!(oe&6)&&(Es=$e()+500,Hr()))}break;case 13:pi(function(){var r=jn(t,1);if(r!==null){var i=yt();on(r,t,1,i)}}),Ap(t,1)}};tp=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=yt();on(e,t,134217728,n)}Ap(t,134217728)}};W0=function(t){if(t.tag===13){var e=Ir(t),n=jn(t,e);if(n!==null){var r=yt();on(n,t,e,r)}Ap(t,e)}};V0=function(){return de};G0=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};cf=function(t,e,n){switch(e){case"input":if(tf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xc(r);if(!i)throw Error(x(90));S0(r),tf(r,i)}}}break;case"textarea":k0(t,n);break;case"select":e=n.value,e!=null&&ns(t,!!n.multiple,e,!1)}};O0=Np;A0=pi;var CI={usingClientEntryPoint:!1,Events:[Ca,Bi,Xc,R0,P0,Np]},Zs={findFiberByHostInstance:Xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},SI={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=L0(t),t===null?null:t.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||wI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Kc=nl.inject(SI),gn=nl}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CI;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dp(e))throw Error(x(200));return _I(t,e,null,n)};$t.createRoot=function(t,e){if(!Dp(t))throw Error(x(299));var n=!1,r="",i=mw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Op(t,1,!1,null,null,n,!1,r,i),t[zn]=e.current,Vo(t.nodeType===8?t.parentNode:t),new Mp(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=L0(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return pi(t)};$t.hydrate=function(t,e,n){if(!ou(e))throw Error(x(200));return au(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!Dp(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pw(e,null,t,1,n??null,i,!1,s,o),t[zn]=e.current,Vo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new su(e)};$t.render=function(t,e,n){if(!ou(e))throw Error(x(200));return au(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!ou(t))throw Error(x(40));return t._reactRootContainer?(pi(function(){au(null,null,t,!1,function(){t._reactRootContainer=null,t[zn]=null})}),!0):!1};$t.unstable_batchedUpdates=Np;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ou(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return au(t,e,n,!1,r)};$t.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=$t})(wk);const qi=a0(Hl);var Vv=Hl;Kd.createRoot=Vv.createRoot,Kd.hydrateRoot=Vv.hydrateRoot;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pc(){return pc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pc.apply(this,arguments)}var vr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(vr||(vr={}));const Gv="popstate";function bI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Bf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Lp(i)}return II(e,n,null,t)}function He(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function kI(){return Math.random().toString(36).substr(2,8)}function Kv(t){return{usr:t.state,key:t.key}}function Bf(t,e,n,r){return n===void 0&&(n=null),pc({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ms(e):e,{state:n,key:e&&e.key||r||kI()})}function Lp(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ms(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function TI(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof t=="string"?t:Lp(t);return He(e,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,e)}function II(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=vr.Pop,l=null;function c(){a=vr.Pop,l&&l({action:a,location:f.location})}function u(p,g){a=vr.Push;let w=Bf(f.location,p,g);n&&n(w,p);let C=Kv(w),v=f.createHref(w);try{o.pushState(C,"",v)}catch{i.location.assign(v)}s&&l&&l({action:a,location:f.location})}function d(p,g){a=vr.Replace;let w=Bf(f.location,p,g);n&&n(w,p);let C=Kv(w),v=f.createHref(w);o.replaceState(C,"",v),s&&l&&l({action:a,location:f.location})}let f={get action(){return a},get location(){return t(i,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Gv,c),l=p,()=>{i.removeEventListener(Gv,c),l=null}},createHref(p){return e(i,p)},encodeLocation(p){let g=TI(typeof p=="string"?p:Lp(p));return{pathname:g.pathname,search:g.search,hash:g.hash}},push:u,replace:d,go(p){return o.go(p)}};return f}var Yv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Yv||(Yv={}));function NI(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ms(e):e,i=yw(r.pathname||"/",n);if(i==null)return null;let s=gw(t);xI(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=$I(s[a],jI(i));return o}function gw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(He(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=oi([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(He(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),gw(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:LI(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of vw(s.path))i(s,o,l)}),e}function vw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=vw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function xI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const RI=/^:\w+$/,PI=3,OI=2,AI=1,MI=10,DI=-2,qv=t=>t==="*";function LI(t,e){let n=t.split("/"),r=n.length;return n.some(qv)&&(r+=DI),e&&(r+=OI),n.filter(i=>!qv(i)).reduce((i,s)=>i+(RI.test(s)?PI:s===""?AI:MI),r)}function FI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function $I(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",u=UI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let d=a.route;s.push({params:r,pathname:oi([i,u.pathname]),pathnameBase:KI(oi([i,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(i=oi([i,u.pathnameBase]))}return s}function UI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=zI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{if(u==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return c[u]=BI(a[d]||"",u),c},{}),pathname:s,pathnameBase:o,pattern:t}}function zI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Fp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function jI(t){try{return decodeURI(t)}catch(e){return Fp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function BI(t,e){try{return decodeURIComponent(t)}catch(n){return Fp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function yw(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Fp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function HI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ms(t):t;return{pathname:n?n.startsWith("/")?n:WI(n,e):e,search:YI(r),hash:qI(i)}}function WI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function VI(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function GI(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ms(t):(i=pc({},t),He(!i.pathname||!i.pathname.includes("?"),hd("?","pathname","search",i)),He(!i.pathname||!i.pathname.includes("#"),hd("#","pathname","hash",i)),He(!i.search||!i.search.includes("#"),hd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=HI(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const oi=t=>t.join("/").replace(/\/\/+/g,"/"),KI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),YI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class QI{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function XI(t){return t instanceof QI}const JI=["post","put","patch","delete"];[...JI];/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hf(){return Hf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hf.apply(this,arguments)}function ZI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const e2=typeof Object.is=="function"?Object.is:ZI,{useState:t2,useEffect:n2,useLayoutEffect:r2,useDebugValue:i2}=Gd;function s2(t,e,n){const r=e(),[{inst:i},s]=t2({inst:{value:r,getSnapshot:e}});return r2(()=>{i.value=r,i.getSnapshot=e,pd(i)&&s({inst:i})},[t,r,e]),n2(()=>(pd(i)&&s({inst:i}),t(()=>{pd(i)&&s({inst:i})})),[t]),i2(r),r}function pd(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!e2(n,r)}catch{return!0}}function o2(t,e,n){return e()}const a2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",l2=!a2,c2=l2?o2:s2;"useSyncExternalStore"in Gd&&(t=>t.useSyncExternalStore)(Gd);const _w=m.createContext(null),$p=m.createContext(null),Up=m.createContext(null),lu=m.createContext(null),ba=m.createContext({outlet:null,matches:[]}),ww=m.createContext(null);function ka(){return m.useContext(lu)!=null}function zp(){return ka()||He(!1),m.useContext(lu).location}function Ew(){ka()||He(!1);let{basename:t,navigator:e}=m.useContext(Up),{matches:n}=m.useContext(ba),{pathname:r}=zp(),i=JSON.stringify(VI(n).map(a=>a.pathnameBase)),s=m.useRef(!1);return m.useEffect(()=>{s.current=!0}),m.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let c=GI(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(c.pathname=c.pathname==="/"?t:oi([t,c.pathname])),(l.replace?e.replace:e.push)(c,l.state,l)},[t,e,i,r])}function u2(t,e){ka()||He(!1);let{navigator:n}=m.useContext(Up),r=m.useContext($p),{matches:i}=m.useContext(ba),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=zp(),c;if(e){var u;let w=typeof e=="string"?Ms(e):e;a==="/"||(u=w.pathname)!=null&&u.startsWith(a)||He(!1),c=w}else c=l;let d=c.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",p=NI(t,{pathname:f}),g=p2(p&&p.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:oi([a,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:oi([a,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return e&&g?m.createElement(lu.Provider,{value:{location:Hf({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:vr.Pop}},g):g}function d2(){let t=y2(),e=XI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unhandled Thrown Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},e),n?m.createElement("pre",{style:i},n):null,m.createElement("p",null,"💿 Hey developer 👋"),m.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",m.createElement("code",{style:s},"errorElement")," props on ",m.createElement("code",{style:s},"<Route>")))}class f2 extends m.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?m.createElement(ba.Provider,{value:this.props.routeContext},m.createElement(ww.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function h2(t){let{routeContext:e,match:n,children:r}=t,i=m.useContext(_w);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(ba.Provider,{value:e},r)}function p2(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||He(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,c=n?o.route.errorElement||m.createElement(d2,null):null,u=e.concat(r.slice(0,a+1)),d=()=>m.createElement(h2,{match:o,routeContext:{outlet:s,matches:u}},l?c:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||a===0)?m.createElement(f2,{location:n.location,component:c,error:l,children:d(),routeContext:{outlet:null,matches:u}}):d()},null)}var Qv;(function(t){t.UseRevalidator="useRevalidator"})(Qv||(Qv={}));var mc;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(mc||(mc={}));function m2(t){let e=m.useContext($p);return e||He(!1),e}function g2(t){let e=m.useContext(ba);return e||He(!1),e}function v2(t){let e=g2(),n=e.matches[e.matches.length-1];return n.route.id||He(!1),n.route.id}function y2(){var t;let e=m.useContext(ww),n=m2(mc.UseRouteError),r=v2(mc.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function _2(t){let{to:e,replace:n,state:r,relative:i}=t;ka()||He(!1);let s=m.useContext($p),o=Ew();return m.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function uo(t){He(!1)}function w2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=vr.Pop,navigator:s,static:o=!1}=t;ka()&&He(!1);let a=e.replace(/^\/*/,"/"),l=m.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ms(r));let{pathname:c="/",search:u="",hash:d="",state:f=null,key:p="default"}=r,g=m.useMemo(()=>{let w=yw(c,a);return w==null?null:{pathname:w,search:u,hash:d,state:f,key:p}},[a,c,u,d,f,p]);return g==null?null:m.createElement(Up.Provider,{value:l},m.createElement(lu.Provider,{children:n,value:{location:g,navigationType:i}}))}function E2(t){let{children:e,location:n}=t,r=m.useContext(_w),i=r&&!e?r.router.routes:Wf(e);return u2(i,n)}var Xv;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Xv||(Xv={}));new Promise(()=>{});function Wf(t,e){e===void 0&&(e=[]);let n=[];return m.Children.forEach(t,(r,i)=>{if(!m.isValidElement(r))return;if(r.type===m.Fragment){n.push.apply(n,Wf(r.props.children,e));return}r.type!==uo&&He(!1),!r.props.index||!r.props.children||He(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Wf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function C2(t){let{basename:e,children:n,window:r}=t,i=m.useRef();i.current==null&&(i.current=bI({window:r,v5Compat:!0}));let s=i.current,[o,a]=m.useState({action:s.action,location:s.location});return m.useLayoutEffect(()=>s.listen(a),[s]),m.createElement(w2,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}var Jv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Jv||(Jv={}));var Zv;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Zv||(Zv={}));/**
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
 */const Cw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const R=function(t,e){if(!t)throw Ds(e)},Ds=function(t){return new Error("Firebase Database ("+Cw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Sw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},S2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),r.push(n[u],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):S2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw Error();const f=s<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),d!==64){const g=c<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},bw=function(t){const e=Sw(t);return jp.encodeByteArray(e,!0)},gc=function(t){return bw(t).replace(/\./g,"")},vc=function(t){try{return jp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function b2(t){return kw(void 0,t)}function kw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!k2(n)||(t[n]=kw(t[n],e[n]));return t}function k2(t){return t!=="__proto__"}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function T2(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function I2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function N2(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Iw(){return Cw.NODE_ADMIN===!0}function x2(){try{return typeof indexedDB=="object"}catch{return!1}}function R2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function P2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const O2=()=>P2().__FIREBASE_DEFAULTS__,A2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},M2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vc(t[1]);return e&&JSON.parse(e)},Hp=()=>{try{return O2()||A2()||M2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Nw=t=>{var e,n;return(n=(e=Hp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xw=t=>{const e=Nw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},D2=()=>{var t;return(t=Hp())===null||t===void 0?void 0:t.config},Rw=t=>{var e;return(e=Hp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ta{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Pw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[gc(JSON.stringify(n)),gc(JSON.stringify(o)),a].join(".")}/**
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
 */const L2="FirebaseError";class Qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=L2,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ia.prototype.create)}}class Ia{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?F2(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Qn(i,a,r)}}function F2(t,e){return t.replace($2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const $2=/\{\$([^}]+)}/g;/**
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
 */function ea(t){return JSON.parse(t)}function Je(t){return JSON.stringify(t)}/**
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
 */const Ow=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ea(vc(s[0])||""),n=ea(vc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},U2=function(t){const e=Ow(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},z2=function(t){const e=Ow(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Sn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Cs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Vf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function _c(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ey(s)&&ey(o)){if(!_c(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ey(t){return t!==null&&typeof t=="object"}/**
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
 */function Ls(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class j2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function B2(t,e){const n=new H2(t,e);return n.subscribe.bind(n)}class H2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");W2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=md),i.error===void 0&&(i.error=md),i.complete===void 0&&(i.complete=md);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function W2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function md(){}function cu(t,e){return`${t} failed: ${e} argument `}/**
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
 */const V2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ke(t){return t&&t._delegate?t._delegate:t}class Dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kr="[DEFAULT]";/**
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
 */class G2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ta;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Y2(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:K2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function K2(t){return t===Kr?void 0:t}function Y2(t){return t.instantiationMode==="EAGER"}/**
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
 */class q2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new G2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const Q2={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},X2=pe.INFO,J2={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},Z2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=J2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wp{constructor(e){this.name=e,this._logLevel=X2,this._logHandler=Z2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Q2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const eN=(t,e)=>e.some(n=>t instanceof n);let ty,ny;function tN(){return ty||(ty=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nN(){return ny||(ny=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Aw=new WeakMap,Gf=new WeakMap,Mw=new WeakMap,gd=new WeakMap,Vp=new WeakMap;function rN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Aw.set(n,t)}).catch(()=>{}),Vp.set(e,t),e}function iN(t){if(Gf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Gf.set(t,e)}let Kf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sN(t){Kf=t(Kf)}function oN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vd(this),e,...n);return Mw.set(r,e.sort?e.sort():[e]),xr(r)}:nN().includes(t)?function(...e){return t.apply(vd(this),e),xr(Aw.get(this))}:function(...e){return xr(t.apply(vd(this),e))}}function aN(t){return typeof t=="function"?oN(t):(t instanceof IDBTransaction&&iN(t),eN(t,tN())?new Proxy(t,Kf):t)}function xr(t){if(t instanceof IDBRequest)return rN(t);if(gd.has(t))return gd.get(t);const e=aN(t);return e!==t&&(gd.set(t,e),Vp.set(e,t)),e}const vd=t=>Vp.get(t);function lN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=xr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(xr(o.result),l.oldVersion,l.newVersion,xr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const cN=["get","getKey","getAll","getAllKeys","count"],uN=["put","add","delete","clear"],yd=new Map;function ry(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yd.get(e))return yd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=uN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return yd.set(e,s),s}sN(t=>({...t,get:(e,n,r)=>ry(e,n)||t.get(e,n,r),has:(e,n)=>!!ry(e,n)||t.has(e,n)}));/**
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
 */class dN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yf="@firebase/app",iy="0.9.0";/**
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
 */const mi=new Wp("@firebase/app"),hN="@firebase/app-compat",pN="@firebase/analytics-compat",mN="@firebase/analytics",gN="@firebase/app-check-compat",vN="@firebase/app-check",yN="@firebase/auth",_N="@firebase/auth-compat",wN="@firebase/database",EN="@firebase/database-compat",CN="@firebase/functions",SN="@firebase/functions-compat",bN="@firebase/installations",kN="@firebase/installations-compat",TN="@firebase/messaging",IN="@firebase/messaging-compat",NN="@firebase/performance",xN="@firebase/performance-compat",RN="@firebase/remote-config",PN="@firebase/remote-config-compat",ON="@firebase/storage",AN="@firebase/storage-compat",MN="@firebase/firestore",DN="@firebase/firestore-compat",LN="firebase",FN="9.15.0";/**
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
 */const qf="[DEFAULT]",$N={[Yf]:"fire-core",[hN]:"fire-core-compat",[mN]:"fire-analytics",[pN]:"fire-analytics-compat",[vN]:"fire-app-check",[gN]:"fire-app-check-compat",[yN]:"fire-auth",[_N]:"fire-auth-compat",[wN]:"fire-rtdb",[EN]:"fire-rtdb-compat",[CN]:"fire-fn",[SN]:"fire-fn-compat",[bN]:"fire-iid",[kN]:"fire-iid-compat",[TN]:"fire-fcm",[IN]:"fire-fcm-compat",[NN]:"fire-perf",[xN]:"fire-perf-compat",[RN]:"fire-rc",[PN]:"fire-rc-compat",[ON]:"fire-gcs",[AN]:"fire-gcs-compat",[MN]:"fire-fst",[DN]:"fire-fst-compat","fire-js":"fire-js",[LN]:"fire-js-all"};/**
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
 */const wc=new Map,Qf=new Map;function UN(t,e){try{t.container.addComponent(e)}catch(n){mi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gi(t){const e=t.name;if(Qf.has(e))return mi.debug(`There were multiple attempts to register component ${e}.`),!1;Qf.set(e,t);for(const n of wc.values())UN(n,t);return!0}function du(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const zN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rr=new Ia("app","Firebase",zN);/**
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
 */class jN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
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
 */const Fs=FN;function Dw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Rr.create("bad-app-name",{appName:String(i)});if(n||(n=D2()),!n)throw Rr.create("no-options");const s=wc.get(i);if(s){if(_c(n,s.options)&&_c(r,s.config))return s;throw Rr.create("duplicate-app",{appName:i})}const o=new q2(i);for(const l of Qf.values())o.addComponent(l);const a=new jN(n,r,o);return wc.set(i,a),a}function Gp(t=qf){const e=wc.get(t);if(!e&&t===qf)return Dw();if(!e)throw Rr.create("no-app",{appName:t});return e}function yn(t,e,n){var r;let i=(r=$N[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mi.warn(a.join(" "));return}gi(new Dr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const BN="firebase-heartbeat-database",HN=1,ta="firebase-heartbeat-store";let _d=null;function Lw(){return _d||(_d=lN(BN,HN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ta)}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),_d}async function WN(t){try{return(await Lw()).transaction(ta).objectStore(ta).get(Fw(t))}catch(e){if(e instanceof Qn)mi.warn(e.message);else{const n=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mi.warn(n.message)}}}async function sy(t,e){try{const r=(await Lw()).transaction(ta,"readwrite");return await r.objectStore(ta).put(e,Fw(t)),r.done}catch(n){if(n instanceof Qn)mi.warn(n.message);else{const r=Rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mi.warn(r.message)}}}function Fw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const VN=1024,GN=30*24*60*60*1e3;class KN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=oy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=GN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oy(),{heartbeatsToSend:n,unsentEntries:r}=YN(this._heartbeatsCache.heartbeats),i=gc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function oy(){return new Date().toISOString().substring(0,10)}function YN(t,e=VN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ay(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ay(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return x2()?R2().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await WN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ay(t){return gc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function QN(t){gi(new Dr("platform-logger",e=>new dN(e),"PRIVATE")),gi(new Dr("heartbeat",e=>new KN(e),"PRIVATE")),yn(Yf,iy,t),yn(Yf,iy,"esm2017"),yn("fire-js","")}QN("");var XN="firebase",JN="9.15.0";/**
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
 */yn(XN,JN,"app");const ly="@firebase/database",cy="0.14.0";/**
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
 */let $w="";function ZN(t){$w=t}/**
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
 */class ex{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ea(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class tx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Uw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ex(e)}}catch{}return new tx},ei=Uw("localStorage"),Xf=Uw("sessionStorage");/**
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
 */const ls=new Wp("@firebase/database"),nx=function(){let t=1;return function(){return t++}}(),zw=function(t){const e=V2(t),n=new j2;n.update(e);const r=n.digest();return jp.encodeByteArray(r)},Na=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Na.apply(null,r):typeof r=="object"?e+=Je(r):e+=r,e+=" "}return e};let ai=null,uy=!0;const rx=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ls.logLevel=pe.VERBOSE,ai=ls.log.bind(ls),e&&Xf.set("logging_enabled",!0)):typeof t=="function"?ai=t:(ai=null,Xf.remove("logging_enabled"))},nt=function(...t){if(uy===!0&&(uy=!1,ai===null&&Xf.get("logging_enabled")===!0&&rx(!0)),ai){const e=Na.apply(null,t);ai(e)}},xa=function(t){return function(...e){nt(t,...e)}},Jf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Na(...t);ls.error(e)},Hn=function(...t){const e=`FIREBASE FATAL ERROR: ${Na(...t)}`;throw ls.error(e),new Error(e)},_t=function(...t){const e="FIREBASE WARNING: "+Na(...t);ls.warn(e)},ix=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&_t("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ss="[MIN_NAME]",vi="[MAX_NAME]",xi=function(t,e){if(t===e)return 0;if(t===Ss||e===vi)return-1;if(e===Ss||t===vi)return 1;{const n=dy(t),r=dy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},ox=function(t,e){return t===e?0:t<e?-1:1},eo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Je(e))},Yp=function(t){if(typeof t!="object"||t===null)return Je(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Je(e[r]),n+=":",n+=Yp(t[e[r]]);return n+="}",n},jw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function st(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Bw=function(t){R(!Kp(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},ax=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function cx(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const ux=new RegExp("^-?(0*)\\d{1,10}$"),dx=-2147483648,fx=2147483647,dy=function(t){if(ux.test(t)){const e=Number(t);if(e>=dx&&e<=fx)return e}return null},$s=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw _t("Exception was thrown by user callback.",n),e},Math.floor(0))}},hx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ko=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class px{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){_t(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class mx{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',_t(e)}}class cs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}cs.OWNER="owner";/**
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
 */const qp="5",Hw="v",Ww="s",Vw="r",Gw="f",Kw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yw="ls",qw="p",Zf="ac",Qw="websocket",Xw="long_polling";/**
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
 */class Jw{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ei.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ei.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function gx(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Zw(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===Qw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Xw)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gx(t)&&(n.ns=t.namespace);const i=[];return st(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class vx{constructor(){this.counters_={}}incrementCounter(e,n=1){Sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return b2(this.counters_)}}/**
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
 */const wd={},Ed={};function Qp(t){const e=t.toString();return wd[e]||(wd[e]=new vx),wd[e]}function yx(t,e){const n=t.toString();return Ed[n]||(Ed[n]=e()),Ed[n]}/**
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
 */class _x{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&$s(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const fy="start",wx="close",Ex="pLPCommand",Cx="pRTLPCB",eE="id",tE="pw",nE="ser",Sx="cb",bx="seg",kx="ts",Tx="d",Ix="dframe",rE=1870,iE=30,Nx=rE-iE,xx=25e3,Rx=3e4;class Qi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xa(e),this.stats_=Qp(n),this.urlFn=l=>(this.appCheckToken&&(l[Zf]=this.appCheckToken),Zw(n,Xw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new _x(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Rx)),sx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xp((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===fy)this.id=a,this.password=l;else if(o===wx)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[fy]="t",r[nE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Sx]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Hw]=qp,this.transportSessionId&&(r[Ww]=this.transportSessionId),this.lastSessionId&&(r[Yw]=this.lastSessionId),this.applicationId&&(r[qw]=this.applicationId),this.appCheckToken&&(r[Zf]=this.appCheckToken),typeof location<"u"&&location.hostname&&Kw.test(location.hostname)&&(r[Vw]=Gw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qi.forceAllow_=!0}static forceDisallow(){Qi.forceDisallow_=!0}static isAvailable(){return Qi.forceAllow_?!0:!Qi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ax()&&!lx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=bw(n),i=jw(r,Nx);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Ix]="t",r[eE]=e,r[tE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nx(),window[Ex+this.uniqueCallbackIdentifier]=e,window[Cx+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){nt("frame writing exception"),a.stack&&nt(a.stack),nt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||nt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[eE]=this.myID,e[tE]=this.myPW,e[nE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+iE+r.length<=rE;){const o=this.pendingSegs.shift();r=r+"&"+bx+i+"="+o.seg+"&"+kx+i+"="+o.ts+"&"+Tx+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(xx)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Px=16384,Ox=45e3;let Ec=null;typeof MozWebSocket<"u"?Ec=MozWebSocket:typeof WebSocket<"u"&&(Ec=WebSocket);class tn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xa(this.connId),this.stats_=Qp(n),this.connURL=tn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Hw]=qp,typeof location<"u"&&location.hostname&&Kw.test(location.hostname)&&(o[Vw]=Gw),n&&(o[Ww]=n),r&&(o[Yw]=r),i&&(o[Zf]=i),s&&(o[qw]=s),Zw(e,Qw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ei.set("previous_websocket_failure",!0);try{let r;Iw(),this.mySock=new Ec(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ec!==null&&!tn.forceDisallow_}static previouslyFailed(){return ei.isInMemoryStorage||ei.get("previous_websocket_failure")===!0}markConnectionHealthy(){ei.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ea(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=jw(n,Px);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ox))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tn.responsesRequiredToBeHealthy=2;tn.healthyTimeout=3e4;/**
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
 */class na{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Qi,tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=tn&&tn.isAvailable();let r=n&&!tn.previouslyFailed();if(e.webSocketOnly&&(n||_t("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[tn];else{const i=this.transports_=[];for(const s of na.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);na.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}na.globalTransportInitialized_=!1;/**
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
 */const Ax=6e4,Mx=5e3,Dx=10*1024,Lx=100*1024,Cd="t",hy="d",Fx="s",py="r",$x="e",my="o",gy="a",vy="n",yy="p",Ux="h";class zx{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xa("c:"+this.id+":"),this.transportManager_=new na(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ko(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Lx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Dx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Cd in e){const n=e[Cd];n===gy?this.upgradeIfSecondaryHealthy_():n===py?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===my&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=eo("t",e),r=eo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=eo("t",e),r=eo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=eo(Cd,e);if(hy in e){const r=e[hy];if(n===Ux)this.onHandshake_(r);else if(n===vy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Fx?this.onConnectionShutdown_(r):n===py?this.onReset_(r):n===$x?Jf("Server Error: "+r):n===my?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),qp!==r&&_t("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ko(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ax))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ko(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Mx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ei.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class sE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class oE{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Cc extends oE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Bp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Cc}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _y=32,wy=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new fe("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Lr(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new fe(t.pieces_,e)}function Jp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function jx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ra(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function aE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new fe(e,0)}function De(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new fe(n,0)}function ne(t){return t.pieceNum_>=t.pieces_.length}function Tt(t,e){const n=Z(t),r=Z(e);if(n===null)return e;if(n===r)return Tt(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Bx(t,e){const n=ra(t,0),r=ra(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=xi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Zp(t,e){if(Lr(t)!==Lr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Gt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Lr(t)>Lr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Hx{constructor(e,n){this.errorPrefix_=n,this.parts_=ra(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=uu(this.parts_[r]);lE(this)}}function Wx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=uu(e),lE(t)}function Vx(t){const e=t.parts_.pop();t.byteLength_-=uu(e),t.parts_.length>0&&(t.byteLength_-=1)}function lE(t){if(t.byteLength_>wy)throw new Error(t.errorPrefix_+"has a key path longer than "+wy+" bytes ("+t.byteLength_+").");if(t.parts_.length>_y)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_y+") or object contains a cycle "+Yr(t))}function Yr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class em extends oE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new em}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const to=1e3,Gx=60*5*1e3,Ey=30*1e3,Kx=1.3,Yx=3e4,qx="server_kill",Cy=3;class Fn extends sE{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Fn.nextPersistentConnectionId_++,this.log_=xa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=to,this.maxReconnectDelay_=Gx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Iw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");em.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Cc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Je(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ta,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Fn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Sn(e,"w")){const r=Cs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();_t(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||z2(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ey)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=U2(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Je(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Jf("Unrecognized action received from server: "+Je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=to,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=to,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Yx&&(this.reconnectDelay_=to),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Kx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?nt("getToken() completed but was canceled"):(nt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new zx(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{_t(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(qx)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&_t(d),l())}}}interrupt(e){nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vf(this.interruptReasons_)&&(this.reconnectDelay_=to,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Yp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new fe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){nt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cy&&(this.reconnectDelay_=Ey,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){nt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+$w.replace(/\./g,"-")]=1,Bp()?e["framework.cordova"]=1:Tw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Cc.getInstance().currentlyOnline();return Vf(this.interruptReasons_)&&e}}Fn.nextPersistentConnectionId_=0;Fn.nextConnectionId_=0;/**
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
 */class ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ee(e,n)}}/**
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
 */class fu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ee(Ss,e),i=new ee(Ss,n);return this.compare(r,i)!==0}minPost(){return ee.MIN}}/**
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
 */let rl;class cE extends fu{static get __EMPTY_NODE(){return rl}static set __EMPTY_NODE(e){rl=e}compare(e,n){return xi(e.name,n.name)}isDefinedOn(e){throw Ds("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(vi,rl)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,rl)}toString(){return".key"}}const us=new cE;/**
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
 */class il{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??It.EMPTY_NODE,this.right=s??It.EMPTY_NODE}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return It.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return It.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class Qx{copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class It{constructor(e,n=It.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new It(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(e){return new It(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new il(this.root_,null,this.comparator_,!0,e)}}It.EMPTY_NODE=new Qx;/**
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
 */function Xx(t,e){return xi(t.name,e.name)}function tm(t,e){return xi(t,e)}/**
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
 */let eh;function Jx(t){eh=t}const uE=function(t){return typeof t=="number"?"number:"+Bw(t):"string:"+t},dE=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Sn(e,".sv"),"Priority must be a string or number.")}else R(t===eh||t.isEmpty(),"priority of unexpected type.");R(t===eh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Sy;class Ye{constructor(e,n=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dE(this.priorityNode_)}static set __childrenNodeConstructor(e){Sy=e}static get __childrenNodeConstructor(){return Sy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ne(e)?this:Z(e)===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||Lr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+uE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Bw(this.value_):e+=this.value_,this.lazyHash_=zw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ye.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ye.VALUE_TYPE_ORDER.indexOf(n),s=Ye.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let fE,hE;function Zx(t){fE=t}function eR(t){hE=t}class tR extends fu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?xi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(vi,new Ye("[PRIORITY-POST]",hE))}makePost(e,n){const r=fE(e);return new ee(n,new Ye("[PRIORITY-POST]",r))}toString(){return".priority"}}const Le=new tR;/**
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
 */const nR=Math.log(2);class rR{constructor(e){const n=s=>parseInt(Math.log(s)/nR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sc=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Qe(f,d.node,Qe.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=i(l,p),w=i(p+1,c);return d=t[p],f=n?n(d):d,new Qe(f,d.node,Qe.BLACK,g,w)}},s=function(l){let c=null,u=null,d=t.length;const f=function(g,w){const C=d-g,v=d;d-=g;const y=i(C+1,v),_=t[C],E=n?n(_):_;p(new Qe(E,_.node,w,null,y))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const w=l.nextBitIsOne(),C=Math.pow(2,l.count-(g+1));w?f(C,Qe.BLACK):(f(C,Qe.BLACK),f(C,Qe.RED))}return u},o=new rR(t.length),a=s(o);return new It(r||e,a)};/**
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
 */let Sd;const Mi={};class On{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(Mi&&Le,"ChildrenNode.ts has not been loaded"),Sd=Sd||new On({".priority":Mi},{".priority":Le}),Sd}get(e){const n=Cs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof It?n:null}hasIndex(e){return Sn(this.indexSet_,e.toString())}addIndex(e,n){R(e!==us,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ee.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Sc(r,e.getCompare()):a=Mi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new On(u,c)}addToIndexes(e,n){const r=yc(this.indexes_,(i,s)=>{const o=Cs(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===Mi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Sc(a,o.getCompare())}else return Mi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ee(e.name,a))),l.insert(e,e.node)}});return new On(r,this.indexSet_)}removeFromIndexes(e,n){const r=yc(this.indexes_,i=>{if(i===Mi)return i;{const s=n.get(e.name);return s?i.remove(new ee(e.name,s)):i}});return new On(r,this.indexSet_)}}/**
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
 */let no;class K{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&dE(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return no||(no=new K(new It(tm),null,On.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||no}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?no:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ee(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?no:this.priorityNode_;return new K(i,o,s)}}updateChild(e,n){const r=Z(e);if(r===null)return n;{R(Z(e)!==".priority"||Lr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ve(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Le,(o,a)=>{n[o]=a.val(e),r++,s&&K.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+uE(this.getPriority().val())+":"),this.forEachChild(Le,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":zw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ee(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ra?-1:0}withIndex(e){if(e===us||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===us||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Le),i=n.getIterator(Le);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===us?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class iR extends K{constructor(){super(new It(tm),K.EMPTY_NODE,On.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const Ra=new iR;Object.defineProperties(ee,{MIN:{value:new ee(Ss,K.EMPTY_NODE)},MAX:{value:new ee(vi,Ra)}});cE.__EMPTY_NODE=K.EMPTY_NODE;Ye.__childrenNodeConstructor=K;Jx(Ra);eR(Ra);/**
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
 */const sR=!0;function Xe(t,e=null){if(t===null)return K.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ye(n,Xe(e))}if(!(t instanceof Array)&&sR){const n=[];let r=!1;if(st(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Xe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ee(o,l)))}}),n.length===0)return K.EMPTY_NODE;const s=Sc(n,Xx,o=>o.name,tm);if(r){const o=Sc(n,Le.getCompare());return new K(s,Xe(e),new On({".priority":o},{".priority":Le}))}else return new K(s,Xe(e),On.Default)}else{let n=K.EMPTY_NODE;return st(t,(r,i)=>{if(Sn(t,r)&&r.substring(0,1)!=="."){const s=Xe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Xe(e))}}Zx(Xe);/**
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
 */class oR extends fu{constructor(e){super(),this.indexPath_=e,R(!ne(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?xi(e.name,n.name):s}makePost(e,n){const r=Xe(e),i=K.EMPTY_NODE.updateChild(this.indexPath_,r);return new ee(n,i)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,Ra);return new ee(vi,e)}toString(){return ra(this.indexPath_,0).join("/")}}/**
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
 */class aR extends fu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?xi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const r=Xe(e);return new ee(n,r)}toString(){return".value"}}const lR=new aR;/**
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
 */function pE(t){return{type:"value",snapshotNode:t}}function bs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ia(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function sa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function cR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class nm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ia(n,a)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(bs(n,r)):o.trackChildChange(sa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Le,(i,s)=>{n.hasChild(i)||r.trackChildChange(ia(i,s))}),n.isLeafNode()||n.forEachChild(Le,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(sa(i,s,o))}else r.trackChildChange(bs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class oa{constructor(e){this.indexedFilter_=new nm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=oa.getStartPost_(e),this.endPost_=oa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ee(n,r))||(r=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=K.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(K.EMPTY_NODE);const s=this;return n.forEachChild(Le,(o,a)=>{s.matches(new ee(o,a))||(i=i.updateImmediateChild(o,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class uR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new oa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ee(n,r))||(r=K.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=K.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(K.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;R(a.numChildren()===this.limit_,"");const l=new ee(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(sa(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ia(n,d));const w=a.updateImmediateChild(n,K.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(bs(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ia(c.name,c.node)),s.trackChildChange(bs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,K.EMPTY_NODE)):e}}/**
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
 */class rm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ss}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Le}copy(){const e=new rm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function dR(t){return t.loadsAllData()?new nm(t.getIndex()):t.hasLimit()?new uR(t):new oa(t)}function by(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Le?n="$priority":t.index_===lR?n="$value":t.index_===us?n="$key":(R(t.index_ instanceof oR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Je(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Je(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Je(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Je(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Je(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ky(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Le&&(e.i=t.index_.toString()),e}/**
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
 */class bc extends sE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=xa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=bc.getListenId_(e,r),a={};this.listens_[o]=a;const l=by(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),Cs(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=bc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=by(e._queryParams),r=e._path.toString(),i=new Ta;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ls(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ea(a.responseText)}catch{_t("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&_t("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class fR{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function kc(){return{value:null,children:new Map}}function mE(t,e,n){if(ne(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Z(e);t.children.has(r)||t.children.set(r,kc());const i=t.children.get(r);e=ve(e),mE(i,e,n)}}function th(t,e,n){t.value!==null?n(e,t.value):hR(t,(r,i)=>{const s=new fe(e.toString()+"/"+r);th(i,s,n)})}function hR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class pR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&st(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Ty=10*1e3,mR=30*1e3,gR=5*60*1e3;class vR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new pR(e);const r=Ty+(mR-Ty)*Math.random();ko(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;st(e,(i,s)=>{s>0&&Sn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ko(this.reportStats_.bind(this),Math.floor(Math.random()*2*gR))}}/**
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
 */var nn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nn||(nn={}));function im(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function om(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Tc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=nn.ACK_USER_WRITE,this.source=im()}operationForChild(e){if(ne(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new Tc(ce(),n,this.revert)}}else return R(Z(this.path)===e,"operationForChild called for unrelated child."),new Tc(ve(this.path),this.affectedTree,this.revert)}}/**
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
 */class aa{constructor(e,n){this.source=e,this.path=n,this.type=nn.LISTEN_COMPLETE}operationForChild(e){return ne(this.path)?new aa(this.source,ce()):new aa(this.source,ve(this.path))}}/**
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
 */class yi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=nn.OVERWRITE}operationForChild(e){return ne(this.path)?new yi(this.source,ce(),this.snap.getImmediateChild(e)):new yi(this.source,ve(this.path),this.snap)}}/**
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
 */class ks{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=nn.MERGE}operationForChild(e){if(ne(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new yi(this.source,ce(),n.value):new ks(this.source,ce(),n)}else return R(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ks(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class _i{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ne(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class yR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _R(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(cR(o.childName,o.snapshotNode))}),ro(t,i,"child_removed",e,r,n),ro(t,i,"child_added",e,r,n),ro(t,i,"child_moved",s,r,n),ro(t,i,"child_changed",e,r,n),ro(t,i,"value",e,r,n),i}function ro(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>ER(t,a,l)),o.forEach(a=>{const l=wR(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function wR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ER(t,e,n){if(e.childName==null||n.childName==null)throw Ds("Should only compare child_ events.");const r=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function hu(t,e){return{eventCache:t,serverCache:e}}function To(t,e,n,r){return hu(new _i(e,n,r),t.serverCache)}function gE(t,e,n,r){return hu(t.eventCache,new _i(e,n,r))}function nh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function wi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let bd;const CR=()=>(bd||(bd=new It(ox)),bd);class ge{constructor(e,n=CR()){this.value=e,this.children=n}static fromObject(e){let n=new ge(null);return st(e,(r,i)=>{n=n.set(new fe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(ne(e))return null;{const r=Z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ve(e),n);return s!=null?{path:De(new fe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ne(e))return this;{const n=Z(e),r=this.children.get(n);return r!==null?r.subtree(ve(e)):new ge(null)}}set(e,n){if(ne(e))return new ge(n,this.children);{const r=Z(e),s=(this.children.get(r)||new ge(null)).set(ve(e),n),o=this.children.insert(r,s);return new ge(this.value,o)}}remove(e){if(ne(e))return this.children.isEmpty()?new ge(null):new ge(null,this.children);{const n=Z(e),r=this.children.get(n);if(r){const i=r.remove(ve(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ge(null):new ge(this.value,s)}else return this}}get(e){if(ne(e))return this.value;{const n=Z(e),r=this.children.get(n);return r?r.get(ve(e)):null}}setTree(e,n){if(ne(e))return n;{const r=Z(e),s=(this.children.get(r)||new ge(null)).setTree(ve(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ge(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(De(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ne(e))return null;{const s=Z(e),o=this.children.get(s);return o?o.findOnPath_(ve(e),De(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,r){if(ne(e))return this;{this.value&&r(n,this.value);const i=Z(e),s=this.children.get(i);return s?s.foreachOnPath_(ve(e),De(n,i),r):new ge(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(De(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class an{constructor(e){this.writeTree_=e}static empty(){return new an(new ge(null))}}function Io(t,e,n){if(ne(e))return new an(new ge(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Tt(i,e);return s=s.updateChild(o,n),new an(t.writeTree_.set(i,s))}else{const i=new ge(n),s=t.writeTree_.setTree(e,i);return new an(s)}}}function rh(t,e,n){let r=t;return st(n,(i,s)=>{r=Io(r,De(e,i),s)}),r}function Iy(t,e){if(ne(e))return an.empty();{const n=t.writeTree_.setTree(e,new ge(null));return new an(n)}}function ih(t,e){return Ri(t,e)!=null}function Ri(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Tt(n.path,e)):null}function Ny(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Le,(r,i)=>{e.push(new ee(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ee(r,i.value))}),e}function Pr(t,e){if(ne(e))return t;{const n=Ri(t,e);return n!=null?new an(new ge(n)):new an(t.writeTree_.subtree(e))}}function sh(t){return t.writeTree_.isEmpty()}function Ts(t,e){return vE(ce(),t.writeTree_,e)}function vE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=vE(De(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(De(t,".priority"),r)),n}}/**
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
 */function am(t,e){return EE(e,t)}function SR(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Io(t.visibleWrites,e,n)),t.lastWriteId=r}function bR(t,e,n,r){R(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=rh(t.visibleWrites,e,n),t.lastWriteId=r}function kR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function TR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&IR(a,r.path)?i=!1:Gt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return NR(t),!0;if(r.snap)t.visibleWrites=Iy(t.visibleWrites,r.path);else{const a=r.children;st(a,l=>{t.visibleWrites=Iy(t.visibleWrites,De(r.path,l))})}return!0}else return!1}function IR(t,e){if(t.snap)return Gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Gt(De(t.path,n),e))return!0;return!1}function NR(t){t.visibleWrites=yE(t.allWrites,xR,ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function xR(t){return t.visible}function yE(t,e,n){let r=an.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Gt(n,o)?(a=Tt(n,o),r=Io(r,a,s.snap)):Gt(o,n)&&(a=Tt(o,n),r=Io(r,ce(),s.snap.getChild(a)));else if(s.children){if(Gt(n,o))a=Tt(n,o),r=rh(r,a,s.children);else if(Gt(o,n))if(a=Tt(o,n),ne(a))r=rh(r,ce(),s.children);else{const l=Cs(s.children,Z(a));if(l){const c=l.getChild(ve(a));r=Io(r,ce(),c)}}}else throw Ds("WriteRecord should have .snap or .children")}}return r}function _E(t,e,n,r,i){if(!r&&!i){const s=Ri(t.visibleWrites,e);if(s!=null)return s;{const o=Pr(t.visibleWrites,e);if(sh(o))return n;if(n==null&&!ih(o,ce()))return null;{const a=n||K.EMPTY_NODE;return Ts(o,a)}}}else{const s=Pr(t.visibleWrites,e);if(!i&&sh(s))return n;if(!i&&n==null&&!ih(s,ce()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Gt(c.path,e)||Gt(e,c.path))},a=yE(t.allWrites,o,e),l=n||K.EMPTY_NODE;return Ts(a,l)}}}function RR(t,e,n){let r=K.EMPTY_NODE;const i=Ri(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Le,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Pr(t.visibleWrites,e);return n.forEachChild(Le,(o,a)=>{const l=Ts(Pr(s,new fe(o)),a);r=r.updateImmediateChild(o,l)}),Ny(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Pr(t.visibleWrites,e);return Ny(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function PR(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=De(e,n);if(ih(t.visibleWrites,s))return null;{const o=Pr(t.visibleWrites,s);return sh(o)?i.getChild(n):Ts(o,i.getChild(n))}}function OR(t,e,n,r){const i=De(e,n),s=Ri(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Pr(t.visibleWrites,i);return Ts(o,r.getNode().getImmediateChild(n))}else return null}function AR(t,e){return Ri(t.visibleWrites,e)}function MR(t,e,n,r,i,s,o){let a;const l=Pr(t.visibleWrites,e),c=Ri(l,ce());if(c!=null)a=c;else if(n!=null)a=Ts(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&u.length<i;)d(p,r)!==0&&u.push(p),p=f.getNext();return u}else return[]}function DR(){return{visibleWrites:an.empty(),allWrites:[],lastWriteId:-1}}function Ic(t,e,n,r){return _E(t.writeTree,t.treePath,e,n,r)}function lm(t,e){return RR(t.writeTree,t.treePath,e)}function xy(t,e,n,r){return PR(t.writeTree,t.treePath,e,n,r)}function Nc(t,e){return AR(t.writeTree,De(t.treePath,e))}function LR(t,e,n,r,i,s){return MR(t.writeTree,t.treePath,e,n,r,i,s)}function cm(t,e,n){return OR(t.writeTree,t.treePath,e,n)}function wE(t,e){return EE(De(t.treePath,e),t.writeTree)}function EE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class FR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,sa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ia(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,bs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,sa(r,e.snapshotNode,i.oldSnap));else throw Ds("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class $R{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const CE=new $R;class um{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new _i(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:wi(this.viewCache_),s=LR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function UR(t){return{filter:t}}function zR(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function jR(t,e,n,r,i){const s=new FR;let o,a;if(n.type===nn.OVERWRITE){const c=n;c.source.fromUser?o=oh(t,e,c.path,c.snap,r,i,s):(R(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ne(c.path),o=xc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===nn.MERGE){const c=n;c.source.fromUser?o=HR(t,e,c.path,c.children,r,i,s):(R(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ah(t,e,c.path,c.children,r,i,a,s))}else if(n.type===nn.ACK_USER_WRITE){const c=n;c.revert?o=GR(t,e,c.path,r,i,s):o=WR(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===nn.LISTEN_COMPLETE)o=VR(t,e,n.path,r,s);else throw Ds("Unknown operation type: "+n.type);const l=s.getChanges();return BR(e,o,l),{viewCache:o,changes:l}}function BR(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=nh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(pE(nh(e)))}}function SE(t,e,n,r,i,s){const o=e.eventCache;if(Nc(r,n)!=null)return e;{let a,l;if(ne(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=wi(e),u=c instanceof K?c:K.EMPTY_NODE,d=lm(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Ic(r,wi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Z(n);if(c===".priority"){R(Lr(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=xy(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ve(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=xy(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=cm(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return To(e,a,o.isFullyInitialized()||ne(n),t.filter.filtersNodes())}}function xc(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ne(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),p,null)}else{const p=Z(n);if(!l.isCompleteForPath(n)&&Lr(n)>1)return e;const g=ve(n),C=l.getNode().getImmediateChild(p).updateChild(g,r);p===".priority"?c=u.updatePriority(l.getNode(),C):c=u.updateChild(l.getNode(),p,C,g,CE,null)}const d=gE(e,c,l.isFullyInitialized()||ne(n),u.filtersNodes()),f=new um(i,d,s);return SE(t,d,n,i,f,a)}function oh(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new um(i,e,s);if(ne(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=To(e,c,!0,t.filter.filtersNodes());else{const d=Z(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=To(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ve(n),p=a.getNode().getImmediateChild(d);let g;if(ne(f))g=r;else{const w=u.getCompleteChild(d);w!=null?Jp(f)===".priority"&&w.getChild(aE(f)).isEmpty()?g=w:g=w.updateChild(f,r):g=K.EMPTY_NODE}if(p.equals(g))l=e;else{const w=t.filter.updateChild(a.getNode(),d,g,f,u,o);l=To(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ry(t,e){return t.eventCache.isCompleteForChild(e)}function HR(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=De(n,l);Ry(e,Z(u))&&(a=oh(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=De(n,l);Ry(e,Z(u))||(a=oh(t,a,u,c,i,s,o))}),a}function Py(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ah(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ne(n)?c=r:c=new ge(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),g=Py(t,p,f);l=xc(t,l,new fe(d),g,i,s,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const g=e.serverCache.getNode().getImmediateChild(d),w=Py(t,g,f);l=xc(t,l,new fe(d),w,i,s,o,a)}}),l}function WR(t,e,n,r,i,s,o){if(Nc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ne(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return xc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ne(n)){let c=new ge(null);return l.getNode().forEachChild(us,(u,d)=>{c=c.set(new fe(u),d)}),ah(t,e,n,c,i,s,a,o)}else return e}else{let c=new ge(null);return r.foreach((u,d)=>{const f=De(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),ah(t,e,n,c,i,s,a,o)}}function VR(t,e,n,r,i){const s=e.serverCache,o=gE(e,s.getNode(),s.isFullyInitialized()||ne(n),s.isFiltered());return SE(t,o,n,r,CE,i)}function GR(t,e,n,r,i,s){let o;if(Nc(r,n)!=null)return e;{const a=new um(r,e,i),l=e.eventCache.getNode();let c;if(ne(n)||Z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ic(r,wi(e));else{const d=e.serverCache.getNode();R(d instanceof K,"serverChildren would be complete if leaf node"),u=lm(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=Z(n);let d=cm(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ve(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,K.EMPTY_NODE,ve(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ic(r,wi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Nc(r,ce())!=null,To(e,c,o,t.filter.filtersNodes())}}/**
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
 */class KR{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new nm(r.getIndex()),s=dR(r);this.processor_=UR(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(K.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(K.EMPTY_NODE,a.getNode(),null),u=new _i(l,o.isFullyInitialized(),i.filtersNodes()),d=new _i(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=hu(d,u),this.eventGenerator_=new yR(this.query_)}get query(){return this.query_}}function YR(t){return t.viewCache_.serverCache.getNode()}function qR(t,e){const n=wi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ne(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function Oy(t){return t.eventRegistrations_.length===0}function QR(t,e){t.eventRegistrations_.push(e)}function Ay(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function My(t,e,n,r){e.type===nn.MERGE&&e.source.queryId!==null&&(R(wi(t.viewCache_),"We should always have a full cache before handling merges"),R(nh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=jR(t.processor_,i,e,n,r);return zR(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,bE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function XR(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Le,(s,o)=>{r.push(bs(s,o))}),n.isFullyInitialized()&&r.push(pE(n.getNode())),bE(t,r,n.getNode(),e)}function bE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return _R(t.eventGenerator_,e,n,i)}/**
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
 */let Rc;class JR{constructor(){this.views=new Map}}function ZR(t){R(!Rc,"__referenceConstructor has already been defined"),Rc=t}function eP(){return R(Rc,"Reference.ts has not been loaded"),Rc}function tP(t){return t.views.size===0}function dm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),My(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(My(o,e,n,r));return s}}function nP(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ic(n,i?r:null),l=!1;a?l=!0:r instanceof K?(a=lm(n,r),l=!1):(a=K.EMPTY_NODE,l=!1);const c=hu(new _i(a,l,!1),new _i(r,i,!1));return new KR(e,c)}return o}function rP(t,e,n,r,i,s){const o=nP(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),QR(o,n),XR(o,n)}function iP(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Fr(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Ay(c,n,r)),Oy(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Ay(l,n,r)),Oy(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Fr(t)&&s.push(new(eP())(e._repo,e._path)),{removed:s,events:o}}function kE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ds(t,e){let n=null;for(const r of t.views.values())n=n||qR(r,e);return n}function TE(t,e){if(e._queryParams.loadsAllData())return pu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function IE(t,e){return TE(t,e)!=null}function Fr(t){return pu(t)!=null}function pu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Pc;function sP(t){R(!Pc,"__referenceConstructor has already been defined"),Pc=t}function oP(){return R(Pc,"Reference.ts has not been loaded"),Pc}let aP=1;class Dy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ge(null),this.pendingWriteTree_=DR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function NE(t,e,n,r,i){return SR(t.pendingWriteTree_,e,n,r,i),i?Us(t,new yi(im(),e,n)):[]}function lP(t,e,n,r){bR(t.pendingWriteTree_,e,n,r);const i=ge.fromObject(n);return Us(t,new ks(im(),e,i))}function yr(t,e,n=!1){const r=kR(t.pendingWriteTree_,e);if(TR(t.pendingWriteTree_,e)){let s=new ge(null);return r.snap!=null?s=s.set(ce(),!0):st(r.children,o=>{s=s.set(new fe(o),!0)}),Us(t,new Tc(r.path,s,n))}else return[]}function mu(t,e,n){return Us(t,new yi(sm(),e,n))}function cP(t,e,n){const r=ge.fromObject(n);return Us(t,new ks(sm(),e,r))}function uP(t,e){return Us(t,new aa(sm(),e))}function dP(t,e,n){const r=hm(t,n);if(r){const i=pm(r),s=i.path,o=i.queryId,a=Tt(s,e),l=new aa(om(o),a);return mm(t,s,l)}else return[]}function lh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||IE(o,e))){const l=iP(o,e,n,r);tP(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,p)=>Fr(p));if(u&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=pP(f);for(let g=0;g<p.length;++g){const w=p[g],C=w.query,v=PE(t,w);t.listenProvider_.startListening(No(C),Oc(t,C),v.hashFn,v.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(No(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(gu(f));t.listenProvider_.stopListening(No(f),p)}))}mP(t,c)}return a}function fP(t,e,n,r){const i=hm(t,r);if(i!=null){const s=pm(i),o=s.path,a=s.queryId,l=Tt(o,e),c=new yi(om(a),l,n);return mm(t,o,c)}else return[]}function hP(t,e,n,r){const i=hm(t,r);if(i){const s=pm(i),o=s.path,a=s.queryId,l=Tt(o,e),c=ge.fromObject(n),u=new ks(om(a),l,c);return mm(t,o,u)}else return[]}function Ly(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const g=Tt(f,i);s=s||ds(p,g),o=o||Fr(p)});let a=t.syncPointTree_.get(i);a?(o=o||Fr(a),s=s||ds(a,ce())):(a=new JR,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=K.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,g)=>{const w=ds(g,ce());w&&(s=s.updateImmediateChild(p,w))}));const c=IE(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=gu(e);R(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=gP();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=am(t.pendingWriteTree_,i);let d=rP(a,e,n,u,s,l);if(!c&&!o&&!r){const f=TE(a,e);d=d.concat(vP(t,e,f))}return d}function fm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Tt(o,e),c=ds(a,l);if(c)return c});return _E(i,e,s,n,!0)}function Us(t,e){return xE(e,t.syncPointTree_,null,am(t.pendingWriteTree_,ce()))}function xE(t,e,n,r){if(ne(t.path))return RE(t,e,n,r);{const i=e.get(ce());n==null&&i!=null&&(n=ds(i,ce()));let s=[];const o=Z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=wE(r,o);s=s.concat(xE(a,l,c,u))}return i&&(s=s.concat(dm(i,t,r,n))),s}}function RE(t,e,n,r){const i=e.get(ce());n==null&&i!=null&&(n=ds(i,ce()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=wE(r,o),u=t.operationForChild(o);u&&(s=s.concat(RE(u,a,l,c)))}),i&&(s=s.concat(dm(i,t,r,n))),s}function PE(t,e){const n=e.query,r=Oc(t,n);return{hashFn:()=>(YR(e)||K.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?dP(t,n._path,r):uP(t,n._path);{const s=cx(i,n);return lh(t,n,null,s)}}}}function Oc(t,e){const n=gu(e);return t.queryToTagMap.get(n)}function gu(t){return t._path.toString()+"$"+t._queryIdentifier}function hm(t,e){return t.tagToQueryMap.get(e)}function pm(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new fe(t.substr(0,e))}}function mm(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=am(t.pendingWriteTree_,e);return dm(r,n,i,null)}function pP(t){return t.fold((e,n,r)=>{if(n&&Fr(n))return[pu(n)];{let i=[];return n&&(i=kE(n)),st(r,(s,o)=>{i=i.concat(o)}),i}})}function No(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(oP())(t._repo,t._path):t}function mP(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=gu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function gP(){return aP++}function vP(t,e,n){const r=e._path,i=Oc(t,e),s=PE(t,n),o=t.listenProvider_.startListening(No(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)R(!Fr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!ne(c)&&u&&Fr(u))return[pu(u).query];{let f=[];return u&&(f=f.concat(kE(u).map(p=>p.query))),st(d,(p,g)=>{f=f.concat(g)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(No(u),Oc(t,u))}}return o}/**
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
 */class gm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new gm(n)}node(){return this.node_}}class vm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=De(this.path_,e);return new vm(this.syncTree_,n)}node(){return fm(this.syncTree_,this.path_)}}const yP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fy=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _P(t[".sv"],e,n);if(typeof t[".sv"]=="object")return wP(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_P=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},wP=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},OE=function(t,e,n,r){return ym(e,new vm(n,t),r)},AE=function(t,e,n){return ym(t,new gm(e),n)};function ym(t,e,n){const r=t.getPriority().val(),i=Fy(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Fy(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ye(a,Xe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ye(i))),o.forEachChild(Le,(a,l)=>{const c=ym(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class _m{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function wm(t,e){let n=e instanceof fe?e:new fe(e),r=t,i=Z(n);for(;i!==null;){const s=Cs(r.node.children,i)||{children:{},childCount:0};r=new _m(i,r,s),n=ve(n),i=Z(n)}return r}function zs(t){return t.node.value}function ME(t,e){t.node.value=e,ch(t)}function DE(t){return t.node.childCount>0}function EP(t){return zs(t)===void 0&&!DE(t)}function vu(t,e){st(t.node.children,(n,r)=>{e(new _m(n,t,r))})}function LE(t,e,n,r){n&&!r&&e(t),vu(t,i=>{LE(i,e,!0,r)}),n&&r&&e(t)}function CP(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Pa(t){return new fe(t.parent===null?t.name:Pa(t.parent)+"/"+t.name)}function ch(t){t.parent!==null&&SP(t.parent,t.name,t)}function SP(t,e,n){const r=EP(n),i=Sn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ch(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ch(t))}/**
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
 */const bP=/[\[\].#$\/\u0000-\u001F\u007F]/,kP=/[\[\].#$\u0000-\u001F\u007F]/,kd=10*1024*1024,Em=function(t){return typeof t=="string"&&t.length!==0&&!bP.test(t)},FE=function(t){return typeof t=="string"&&t.length!==0&&!kP.test(t)},TP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),FE(t)},IP=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Kp(t)||t&&typeof t=="object"&&Sn(t,".sv")},$E=function(t,e,n,r){r&&e===void 0||yu(cu(t,"value"),e,n)},yu=function(t,e,n){const r=n instanceof fe?new Hx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Yr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Yr(r)+" with contents = "+e.toString());if(Kp(e))throw new Error(t+"contains "+e.toString()+" "+Yr(r));if(typeof e=="string"&&e.length>kd/3&&uu(e)>kd)throw new Error(t+"contains a string greater than "+kd+" utf8 bytes "+Yr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(st(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Em(o)))throw new Error(t+" contains an invalid key ("+o+") "+Yr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Wx(r,o),yu(t,a,r),Vx(r)}),i&&s)throw new Error(t+' contains ".value" child '+Yr(r)+" in addition to actual children.")}},NP=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ra(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Em(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Bx);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Gt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},xP=function(t,e,n,r){if(r&&e===void 0)return;const i=cu(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];st(e,(o,a)=>{const l=new fe(o);if(yu(i,a,De(n,l)),Jp(l)===".priority"&&!IP(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),NP(i,s)},UE=function(t,e,n,r){if(!(r&&n===void 0)&&!FE(n))throw new Error(cu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},RP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),UE(t,e,n,r)},Cm=function(t,e){if(Z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},PP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Em(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!TP(n))throw new Error(cu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class OP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _u(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Zp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function zE(t,e,n){_u(t,n),jE(t,r=>Zp(r,e))}function cn(t,e,n){_u(t,n),jE(t,r=>Gt(r,e)||Gt(e,r))}function jE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(AP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function AP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ai&&nt("event: "+n.toString()),$s(r)}}}/**
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
 */const MP="repo_interrupt",DP=25;class LP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new OP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kc(),this.transactionQueueTree_=new _m,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function FP(t,e,n){if(t.stats_=Qp(t.repoInfo_),t.forceRestClient_||hx())t.server_=new bc(t.repoInfo_,(r,i,s,o)=>{$y(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Uy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Je(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Fn(t.repoInfo_,e,(r,i,s,o)=>{$y(t,r,i,s,o)},r=>{Uy(t,r)},r=>{$P(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=yx(t.repoInfo_,()=>new vR(t.stats_,t.server_)),t.infoData_=new fR,t.infoSyncTree_=new Dy({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=mu(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Sm(t,"connected",!1),t.serverSyncTree_=new Dy({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);cn(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function BE(t){const n=t.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function wu(t){return yP({timestamp:BE(t)})}function $y(t,e,n,r,i){t.dataUpdateCount++;const s=new fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=yc(n,c=>Xe(c));o=hP(t.serverSyncTree_,s,l,i)}else{const l=Xe(n);o=fP(t.serverSyncTree_,s,l,i)}else if(r){const l=yc(n,c=>Xe(c));o=cP(t.serverSyncTree_,s,l)}else{const l=Xe(n);o=mu(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Is(t,s)),cn(t.eventQueue_,a,o)}function Uy(t,e){Sm(t,"connected",e),e===!1&&jP(t)}function $P(t,e){st(e,(n,r)=>{Sm(t,n,r)})}function Sm(t,e,n){const r=new fe("/.info/"+e),i=Xe(n);t.infoData_.updateSnapshot(r,i);const s=mu(t.infoSyncTree_,r,i);cn(t.eventQueue_,r,s)}function bm(t){return t.nextWriteId_++}function UP(t,e,n,r,i){Eu(t,"set",{path:e.toString(),value:n,priority:r});const s=wu(t),o=Xe(n,r),a=fm(t.serverSyncTree_,e),l=AE(o,a,s),c=bm(t),u=NE(t.serverSyncTree_,e,l,c,!0);_u(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const g=f==="ok";g||_t("set at "+e+" failed: "+f);const w=yr(t.serverSyncTree_,c,!g);cn(t.eventQueue_,e,w),uh(t,i,f,p)});const d=Tm(t,e);Is(t,d),cn(t.eventQueue_,d,[])}function zP(t,e,n,r){Eu(t,"update",{path:e.toString(),value:n});let i=!0;const s=wu(t),o={};if(st(n,(a,l)=>{i=!1,o[a]=OE(De(e,a),Xe(l),t.serverSyncTree_,s)}),i)nt("update() called with empty data.  Don't do anything."),uh(t,r,"ok",void 0);else{const a=bm(t),l=lP(t.serverSyncTree_,e,o,a);_u(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||_t("update at "+e+" failed: "+c);const f=yr(t.serverSyncTree_,a,!d),p=f.length>0?Is(t,e):e;cn(t.eventQueue_,p,f),uh(t,r,c,u)}),st(n,c=>{const u=Tm(t,De(e,c));Is(t,u)}),cn(t.eventQueue_,e,[])}}function jP(t){Eu(t,"onDisconnectEvents");const e=wu(t),n=kc();th(t.onDisconnect_,ce(),(i,s)=>{const o=OE(i,s,t.serverSyncTree_,e);mE(n,i,o)});let r=[];th(n,ce(),(i,s)=>{r=r.concat(mu(t.serverSyncTree_,i,s));const o=Tm(t,i);Is(t,o)}),t.onDisconnect_=kc(),cn(t.eventQueue_,ce(),r)}function BP(t,e,n){let r;Z(e._path)===".info"?r=Ly(t.infoSyncTree_,e,n):r=Ly(t.serverSyncTree_,e,n),zE(t.eventQueue_,e._path,r)}function zy(t,e,n){let r;Z(e._path)===".info"?r=lh(t.infoSyncTree_,e,n):r=lh(t.serverSyncTree_,e,n),zE(t.eventQueue_,e._path,r)}function HP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(MP)}function Eu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),nt(n,...e)}function uh(t,e,n,r){e&&$s(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function HE(t,e,n){return fm(t.serverSyncTree_,e,n)||K.EMPTY_NODE}function km(t,e=t.transactionQueueTree_){if(e||Cu(t,e),zs(e)){const n=VE(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&WP(t,Pa(e),n)}else DE(e)&&vu(e,n=>{km(t,n)})}function WP(t,e,n){const r=n.map(c=>c.currentWriteId),i=HE(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];R(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Tt(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Eu(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(yr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Cu(t,wm(t.transactionQueueTree_,e)),km(t,t.transactionQueueTree_),cn(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)$s(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{_t("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Is(t,e)}},o)}function Is(t,e){const n=WE(t,e),r=Pa(n),i=VE(t,n);return VP(t,i,r),r}function VP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Tt(n,l.path);let u=!1,d;if(R(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(yr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=DP)u=!0,d="maxretry",i=i.concat(yr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=HE(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){yu("transaction failed: Data returned ",p,l.path);let g=Xe(p);typeof p=="object"&&p!=null&&Sn(p,".priority")||(g=g.updatePriority(f.getPriority()));const C=l.currentWriteId,v=wu(t),y=AE(g,f,v);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=y,l.currentWriteId=bm(t),o.splice(o.indexOf(C),1),i=i.concat(NE(t.serverSyncTree_,l.path,y,l.currentWriteId,l.applyLocally)),i=i.concat(yr(t.serverSyncTree_,C,!0))}else u=!0,d="nodata",i=i.concat(yr(t.serverSyncTree_,l.currentWriteId,!0))}cn(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Cu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)$s(r[a]);km(t,t.transactionQueueTree_)}function WE(t,e){let n,r=t.transactionQueueTree_;for(n=Z(e);n!==null&&zs(r)===void 0;)r=wm(r,n),e=ve(e),n=Z(e);return r}function VE(t,e){const n=[];return GE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function GE(t,e,n){const r=zs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);vu(e,i=>{GE(t,i,n)})}function Cu(t,e){const n=zs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ME(e,n.length>0?n:void 0)}vu(e,r=>{Cu(t,r)})}function Tm(t,e){const n=Pa(WE(t,e)),r=wm(t.transactionQueueTree_,e);return CP(r,i=>{Td(t,i)}),Td(t,r),LE(r,i=>{Td(t,i)}),n}function Td(t,e){const n=zs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(yr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ME(e,void 0):n.length=s+1,cn(t.eventQueue_,Pa(e),i);for(let o=0;o<r.length;o++)$s(r[o])}}/**
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
 */function GP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function KP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):_t(`Invalid query segment '${n}' in query '${t}'`)}return e}const jy=function(t,e){const n=YP(t),r=n.namespace;n.domain==="firebase.com"&&Hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ix();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Jw(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new fe(n.pathString)}},YP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=GP(t.substring(u,d)));const f=KP(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const By="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",qP=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=By.charAt(n%64),n=Math.floor(n/64);R(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=By.charAt(e[i]);return R(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class KE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Je(this.snapshot.exportVal())}}class YE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class QP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Im{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ne(this._path)?null:Jp(this._path)}get ref(){return new Xn(this._repo,this._path)}get _queryIdentifier(){const e=ky(this._queryParams),n=Yp(e);return n==="{}"?"default":n}get _queryObject(){return ky(this._queryParams)}isEqual(e){if(e=Ke(e),!(e instanceof Im))return!1;const n=this._repo===e._repo,r=Zp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+jx(this._path)}}class Xn extends Im{constructor(e,n){super(e,n,new rm,!1)}get parent(){const e=aE(this._path);return e===null?null:new Xn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class la{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new fe(e),r=et(this.ref,e);return new la(this._node.getChild(n),r,Le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new la(i,et(this.ref,r),Le)))}hasChild(e){const n=new fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function We(t,e){return t=Ke(t),t._checkNotDeleted("ref"),e!==void 0?et(t._root,e):t._root}function et(t,e){return t=Ke(t),Z(t._path)===null?RP("child","path",e,!1):UE("child","path",e,!1),new Xn(t._repo,De(t._path,e))}function qE(t,e){t=Ke(t),Cm("push",t._path),$E("push",e,t._path,!0);const n=BE(t._repo),r=qP(n),i=et(t,r),s=et(t,r);let o;return e!=null?o=Pi(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function XP(t){return Cm("remove",t._path),Pi(t,null)}function Pi(t,e){t=Ke(t),Cm("set",t._path),$E("set",e,t._path,!1);const n=new Ta;return UP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function En(t,e){xP("update",e,t._path,!1);const n=new Ta;return zP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Nm{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new KE("value",this,new la(e.snapshotNode,new Xn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new YE(this,e,n):null}matches(e){return e instanceof Nm?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class xm{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new YE(this,e,n):null}createEvent(e,n){R(e.childName!=null,"Child events should have a childName.");const r=et(new Xn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new KE(e.type,this,new la(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof xm?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function JP(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{zy(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new QP(n,s||void 0),a=e==="value"?new Nm(o):new xm(e,o);return BP(t._repo,t,a),()=>zy(t._repo,t,a)}function ZP(t,e,n,r){return JP(t,"value",e,n,r)}ZR(Xn);sP(Xn);/**
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
 */const eO="FIREBASE_DATABASE_EMULATOR_HOST",dh={};let tO=!1;function nO(t,e,n,r){t.repoInfo_=new Jw(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function rO(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=jy(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[eO]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=jy(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new cs(cs.OWNER):new mx(t.name,t.options,e);PP("Invalid Firebase Database URL",o),ne(o.path)||Hn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=sO(a,t,u,new px(t.name,n));return new oO(d,t)}function iO(t,e){const n=dh[e];(!n||n[t.key]!==t)&&Hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),HP(t),delete n[t.key]}function sO(t,e,n,r){let i=dh[e.name];i||(i={},dh[e.name]=i);let s=i[t.toURLString()];return s&&Hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new LP(t,tO,n,r),i[t.toURLString()]=s,s}class oO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(FP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xn(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(iO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Hn("Cannot call "+e+" on a deleted database.")}}function aO(t=Gp(),e){const n=du(t,"database").getImmediate({identifier:e}),r=xw("database");return r&&lO(n,...r),n}function lO(t,e,n,r={}){t=Ke(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Hn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new cs(cs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Pw(r.mockUserToken,t.app.options.projectId);s=new cs(o)}nO(i,e,n,s)}/**
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
 */function cO(t){ZN(Fs),gi(new Dr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return rO(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),yn(ly,cy,t),yn(ly,cy,"esm2017")}Fn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};cO();function Rm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function QE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uO=QE,XE=new Ia("auth","Firebase",QE());/**
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
 */const Hy=new Wp("@firebase/auth");function Dl(t,...e){Hy.logLevel<=pe.ERROR&&Hy.error(`Auth (${Fs}): ${t}`,...e)}/**
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
 */function Cn(t,...e){throw Pm(t,...e)}function _n(t,...e){return Pm(t,...e)}function JE(t,e,n){const r=Object.assign(Object.assign({},uO()),{[e]:n});return new Ia("auth","Firebase",r).create(e,{appName:t.name})}function dO(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Cn(t,"argument-error"),JE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return XE.create(t,...e)}function q(t,e,...n){if(!t)throw Pm(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dl(e),new Error(e)}function Wn(t,e){t||An(e)}/**
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
 */const Wy=new Map;function Mn(t){Wn(t instanceof Function,"Expected a class definition");let e=Wy.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wy.set(t,e),e)}/**
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
 */function fO(t,e){const n=du(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(_c(s,e??{}))return i;Cn(i,"already-initialized")}return n.initialize({options:e})}function hO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pO(){return Vy()==="http:"||Vy()==="https:"}function Vy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function mO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pO()||I2()||"connection"in navigator)?navigator.onLine:!0}function gO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Oa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=Bp()||Tw()}get(){return mO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Om(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ZE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const yO=new Oa(3e4,6e4);function _O(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Su(t,e,n,r,i={}){return eC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ls(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ZE.fetch()(tC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function eC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vO),e);try{const i=new EO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw sl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw sl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw sl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw sl(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw JE(t,u,c);Cn(t,u)}}catch(i){if(i instanceof Qn)throw i;Cn(t,"network-request-failed")}}async function wO(t,e,n,r,i={}){const s=await Su(t,e,n,r,i);return"mfaPendingCredential"in s&&Cn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function tC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Om(t.config,i):`${t.config.apiScheme}://${i}`}class EO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),yO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_n(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function CO(t,e){return Su(t,"POST","/v1/accounts:delete",e)}async function SO(t,e){return Su(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bO(t,e=!1){const n=Ke(t),r=await n.getIdToken(e),i=Am(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xo(Id(i.auth_time)),issuedAtTime:xo(Id(i.iat)),expirationTime:xo(Id(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Id(t){return Number(t)*1e3}function Am(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dl("JWT malformed, contained fewer than 3 sections"),null;try{const i=vc(n);return i?JSON.parse(i):(Dl("Failed to decode base64 JWT payload"),null)}catch(i){return Dl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kO(t){const e=Am(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ca(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qn&&TO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function TO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class IO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class nC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xo(this.lastLoginAt),this.creationTime=xo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ac(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ca(t,SO(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?RO(s.providerUserInfo):[],a=xO(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new nC(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function NO(t){const e=Ke(t);await Ac(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function RO(t){return t.map(e=>{var{providerId:n}=e,r=Rm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function PO(t,e){const n=await eC(t,{},async()=>{const r=Ls({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=tC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ZE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ua{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await PO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ua;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ua,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function ir(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class li{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Rm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new nC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ca(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bO(this,e)}reload(){return NO(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new li(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ac(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ca(this,CO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:E,isAnonymous:S,providerData:b,stsTokenManager:k}=n;q(_&&k,e,"internal-error");const T=ua.fromJSON(this.name,k);q(typeof _=="string",e,"internal-error"),ir(d,e.name),ir(f,e.name),q(typeof E=="boolean",e,"internal-error"),q(typeof S=="boolean",e,"internal-error"),ir(p,e.name),ir(g,e.name),ir(w,e.name),ir(C,e.name),ir(v,e.name),ir(y,e.name);const D=new li({uid:_,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:S,photoURL:g,phoneNumber:p,tenantId:w,stsTokenManager:T,createdAt:v,lastLoginAt:y});return b&&Array.isArray(b)&&(D.providerData=b.map(M=>Object.assign({},M))),C&&(D._redirectEventId=C),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new ua;i.updateFromServerResponse(n);const s=new li({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ac(s),s}}/**
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
 */class rC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rC.type="NONE";const Gy=rC;/**
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
 */function Ll(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ll(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ll("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?li._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fs(Mn(Gy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Mn(Gy);const o=Ll(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=li._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new fs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new fs(s,e,r))}}/**
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
 */function Ky(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lC(e))return"Blackberry";if(cC(e))return"Webos";if(Mm(e))return"Safari";if((e.includes("chrome/")||sC(e))&&!e.includes("edge/"))return"Chrome";if(aC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iC(t=ft()){return/firefox\//i.test(t)}function Mm(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sC(t=ft()){return/crios\//i.test(t)}function oC(t=ft()){return/iemobile/i.test(t)}function aC(t=ft()){return/android/i.test(t)}function lC(t=ft()){return/blackberry/i.test(t)}function cC(t=ft()){return/webos/i.test(t)}function bu(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OO(t=ft()){var e;return bu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AO(){return N2()&&document.documentMode===10}function uC(t=ft()){return bu(t)||aC(t)||cC(t)||lC(t)||/windows phone/i.test(t)||oC(t)}function MO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function dC(t,e=[]){let n;switch(t){case"Browser":n=Ky(ft());break;case"Worker":n=`${Ky(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fs}/${r}`}/**
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
 */class DO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class LO{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yy(this),this.idTokenSubscription=new Yy(this),this.beforeStateQueue=new DO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=XE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ac(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ke(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ia("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ku(t){return Ke(t)}class Yy{constructor(e){this.auth=e,this.observer=null,this.addObserver=B2(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function FO(t,e,n){const r=ku(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=fC(e),{host:o,port:a}=$O(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||UO()}function fC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $O(t){const e=fC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:qy(o)}}}function qy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function UO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class hC{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}/**
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
 */async function hs(t,e){return wO(t,"POST","/v1/accounts:signInWithIdp",_O(t,e))}/**
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
 */const zO="http://localhost";class Ei extends hC{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Rm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hs(e,n)}buildRequest(){const e={requestUri:zO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ls(n)}return e}}/**
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
 */class Dm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Aa extends Dm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dr extends Aa{constructor(){super("facebook.com")}static credential(e){return Ei._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends Aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ei._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class fr extends Aa{constructor(){super("github.com")}static credential(e){return Ei._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
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
 */class hr extends Aa{constructor(){super("twitter.com")}static credential(e,n){return Ei._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
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
 */class Ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await li._fromIdTokenResponse(e,r,i),o=Qy(r);return new Ns({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Qy(r);return new Ns({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Qy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Mc extends Qn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mc(e,n,r,i)}}function pC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mc._fromErrorAndOperation(t,s,e,r):s})}async function jO(t,e,n=!1){const r=await ca(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ns._forOperation(t,"link",r)}/**
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
 */async function BO(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ca(t,pC(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=Am(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(t.uid===a,r,"user-mismatch"),Ns._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Cn(r,"user-mismatch"),s}}/**
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
 */async function HO(t,e,n=!1){const r="signIn",i=await pC(t,r,e),s=await Ns._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function WO(t,e,n,r){return Ke(t).onIdTokenChanged(e,n,r)}function VO(t,e,n){return Ke(t).beforeAuthStateChanged(e,n)}function GO(t,e,n,r){return Ke(t).onAuthStateChanged(e,n,r)}function KO(t){return Ke(t).signOut()}const Dc="__sak";/**
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
 */class mC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dc,"1"),this.storage.removeItem(Dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function YO(){const t=ft();return Mm(t)||bu(t)}const qO=1e3,QO=10;class gC extends mC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=YO()&&MO(),this.fallbackToPolling=uC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);AO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gC.type="LOCAL";const XO=gC;/**
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
 */class vC extends mC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vC.type="SESSION";const yC=vC;/**
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
 */function JO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Tu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await JO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tu.receivers=[];/**
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
 */function Lm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ZO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Lm("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wn(){return window}function eA(t){wn().location.href=t}/**
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
 */function _C(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function tA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rA(){return _C()?self:null}/**
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
 */const wC="firebaseLocalStorageDb",iA=1,Lc="firebaseLocalStorage",EC="fbase_key";class Ma{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Iu(t,e){return t.transaction([Lc],e?"readwrite":"readonly").objectStore(Lc)}function sA(){const t=indexedDB.deleteDatabase(wC);return new Ma(t).toPromise()}function hh(){const t=indexedDB.open(wC,iA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Lc,{keyPath:EC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Lc)?e(r):(r.close(),await sA(),e(await hh()))})})}async function Xy(t,e,n){const r=Iu(t,!0).put({[EC]:e,value:n});return new Ma(r).toPromise()}async function oA(t,e){const n=Iu(t,!1).get(e),r=await new Ma(n).toPromise();return r===void 0?null:r.value}function Jy(t,e){const n=Iu(t,!0).delete(e);return new Ma(n).toPromise()}const aA=800,lA=3;class CC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _C()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tu._getInstance(rA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tA(),!this.activeServiceWorker)return;this.sender=new ZO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hh();return await Xy(e,Dc,"1"),await Jy(e,Dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Iu(i,!1).getAll();return new Ma(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}CC.type="LOCAL";const cA=CC;/**
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
 */function uA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function dA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",uA().appendChild(r)})}function fA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Oa(3e4,6e4);/**
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
 */function SC(t,e){return e?Mn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fm extends hC{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hA(t){return HO(t.auth,new Fm(t),t.bypassAuthState)}function pA(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),BO(n,new Fm(t),t.bypassAuthState)}async function mA(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),jO(n,new Fm(t),t.bypassAuthState)}/**
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
 */class bC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hA;case"linkViaPopup":case"linkViaRedirect":return mA;case"reauthViaPopup":case"reauthViaRedirect":return pA;default:Cn(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gA=new Oa(2e3,1e4);async function vA(t,e,n){const r=ku(t);dO(t,e,Dm);const i=SC(r,n);return new ti(r,"signInViaPopup",e,i).executeNotNull()}class ti extends bC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ti.currentPopupAction&&ti.currentPopupAction.cancel(),ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=Lm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,gA.get())};e()}}ti.currentPopupAction=null;/**
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
 */const yA="pendingRedirect",Fl=new Map;class _A extends bC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fl.get(this.auth._key());if(!e){try{const r=await wA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fl.set(this.auth._key(),e)}return this.bypassAuthState||Fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wA(t,e){const n=SA(e),r=CA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function EA(t,e){Fl.set(t._key(),e)}function CA(t){return Mn(t._redirectPersistence)}function SA(t){return Ll(yA,t.config.apiKey,t.name)}async function bA(t,e,n=!1){const r=ku(t),i=SC(r,e),o=await new _A(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const kA=10*60*1e3;class TA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zy(e))}saveEventToCache(e){this.cachedEventUids.add(Zy(e)),this.lastProcessedEventTime=Date.now()}}function Zy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kC(t);default:return!1}}/**
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
 */async function NA(t,e={}){return Su(t,"GET","/v1/projects",e)}/**
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
 */const xA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RA=/^https?/;async function PA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NA(t);for(const n of e)try{if(OA(n))return}catch{}Cn(t,"unauthorized-domain")}function OA(t){const e=fh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RA.test(n))return!1;if(xA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const AA=new Oa(3e4,6e4);function e_(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MA(t){return new Promise((e,n)=>{var r,i,s;function o(){e_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{e_(),n(_n(t,"network-request-failed"))},timeout:AA.get()})}if(!((i=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wn().gapi)===null||s===void 0)&&s.load)o();else{const a=fA("iframefcb");return wn()[a]=()=>{gapi.load?o():n(_n(t,"network-request-failed"))},dA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw $l=null,e})}let $l=null;function DA(t){return $l=$l||MA(t),$l}/**
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
 */const LA=new Oa(5e3,15e3),FA="__/auth/iframe",$A="emulator/auth/iframe",UA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jA(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Om(e,$A):`https://${t.config.authDomain}/${FA}`,r={apiKey:e.apiKey,appName:t.name,v:Fs},i=zA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ls(r).slice(1)}`}async function BA(t){const e=await DA(t),n=wn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:jA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),a=wn().setTimeout(()=>{s(o)},LA.get());function l(){wn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const HA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WA=500,VA=600,GA="_blank",KA="http://localhost";class t_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YA(t,e,n,r=WA,i=VA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},HA),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ft().toLowerCase();n&&(a=sC(c)?GA:n),iC(c)&&(e=e||KA,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(OO(c)&&a!=="_self")return qA(e||"",a),new t_(null);const d=window.open(e||"",a,u);q(d,t,"popup-blocked");try{d.focus()}catch{}return new t_(d)}function qA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const QA="__/auth/handler",XA="emulator/auth/handler";function n_(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fs,eventId:i};if(e instanceof Dm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof Aa){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${JA(t)}?${Ls(a).slice(1)}`}function JA({config:t}){return t.emulator?Om(t,XA):`https://${t.authDomain}/${QA}`}/**
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
 */const Nd="webStorageSupport";class ZA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yC,this._completeRedirectFn=bA,this._overrideRedirectResult=EA}async _openPopup(e,n,r,i){var s;Wn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=n_(e,n,r,fh(),i);return YA(e,o,Lm())}async _openRedirect(e,n,r,i){return await this._originValidation(e),eA(n_(e,n,r,fh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Wn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BA(e),r=new TA(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nd,{type:Nd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Nd];o!==void 0&&n(!!o),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uC()||Mm()||bu()}}const e4=ZA;var r_="@firebase/auth",i_="0.21.0";/**
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
 */class t4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function n4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function r4(t){gi(new Dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{q(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dC(t)},u=new LO(a,l,c);return hO(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gi(new Dr("auth-internal",e=>{const n=ku(e.getProvider("auth").getImmediate());return(r=>new t4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(r_,i_,n4(t)),yn(r_,i_,"esm2017")}/**
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
 */const i4=5*60,s4=Rw("authIdTokenMaxAge")||i4;let s_=null;const o4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>s4)return;const i=n==null?void 0:n.token;s_!==i&&(s_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Nu(t=Gp()){const e=du(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fO(t,{popupRedirectResolver:e4,persistence:[cA,XO,yC]}),r=Rw("authTokenSyncURL");if(r){const s=o4(r);VO(n,s,()=>s(n.currentUser)),WO(n,o=>s(o))}const i=Nw("auth");return i&&FO(n,`http://${i}`),n}r4("Browser");/**
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
 */const TC="firebasestorage.googleapis.com",IC="storageBucket",a4=2*60*1e3,l4=10*60*1e3;/**
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
 */class Fe extends Qn{constructor(e,n,r=0){super(xd(e),`Firebase Storage: ${n} (${xd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function xd(t){return"storage/"+t}function $m(){const t="An unknown error occurred, please check the error payload for server response.";return new Fe("unknown",t)}function c4(t){return new Fe("object-not-found","Object '"+t+"' does not exist.")}function u4(t){return new Fe("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function d4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Fe("unauthenticated",t)}function f4(){return new Fe("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function h4(t){return new Fe("unauthorized","User does not have permission to access '"+t+"'.")}function p4(){return new Fe("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function m4(){return new Fe("canceled","User canceled the upload/download.")}function g4(t){return new Fe("invalid-url","Invalid URL '"+t+"'.")}function v4(t){return new Fe("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function y4(){return new Fe("no-default-bucket","No default bucket found. Did you set the '"+IC+"' property when initializing the app?")}function _4(){return new Fe("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function w4(){return new Fe("no-download-url","The given file does not have any download URLs.")}function E4(t){return new Fe("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ph(t){return new Fe("invalid-argument",t)}function NC(){return new Fe("app-deleted","The Firebase app was deleted.")}function C4(t){return new Fe("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ro(t,e){return new Fe("invalid-format","String does not match format '"+t+"': "+e)}function io(t){throw new Fe("internal-error","Internal error: "+t)}/**
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
 */class Dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Dt.makeFromUrl(e,n)}catch{return new Dt(e,"")}if(r.path==="")return r;throw v4(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${u}/b/${i}/o${f}`,"i"),g={bucket:1,path:3},w=n===TC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",v=new RegExp(`^https?://${w}/${i}/${C}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:p,indices:g,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<_.length;E++){const S=_[E],b=S.regex.exec(e);if(b){const k=b[S.indices.bucket];let T=b[S.indices.path];T||(T=""),r=new Dt(k,T),S.postModify(r);break}}if(r==null)throw g4(e);return r}}class S4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function b4(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...C){c||(c=!0,e.apply(null,C))}function d(C){i=setTimeout(()=>{i=null,t(p,l())},C)}function f(){s&&clearTimeout(s)}function p(C,...v){if(c){f();return}if(C){f(),u.call(null,C,...v);return}if(l()||o){f(),u.call(null,C,...v);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,d(_)}let g=!1;function w(C){g||(g=!0,f(),!c&&(i!==null?(C||(a=2),clearTimeout(i),d(0)):C||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function k4(t){t(!1)}/**
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
 */function T4(t){return t!==void 0}function I4(t){return typeof t=="object"&&!Array.isArray(t)}function Um(t){return typeof t=="string"||t instanceof String}function o_(t){return zm()&&t instanceof Blob}function zm(){return typeof Blob<"u"&&!T2()}function a_(t,e,n,r){if(r<e)throw ph(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ph(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function xu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function xC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ci;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ci||(ci={}));/**
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
 */function N4(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class x4{constructor(e,n,r,i,s,o,a,l,c,u,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ol(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ci.NO_ERROR,l=s.getStatus();if((!a||N4(l,this.additionalRetryCodes_))&&this.retry){const u=s.getErrorCode()===ci.ABORT;r(!1,new ol(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new ol(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());T4(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=$m();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?NC():m4();o(l)}else{const l=p4();o(l)}};this.canceled_?n(!1,new ol(!1,null,!0)):this.backoffId_=b4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&k4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ol{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function R4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function P4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function O4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function A4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function M4(t,e,n,r,i,s,o=!0){const a=xC(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return O4(c,e),R4(c,n),P4(c,s),A4(c,r),new x4(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function D4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function L4(...t){const e=D4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(zm())return new Blob(t);throw new Fe("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function F4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function $4(t){if(typeof atob>"u")throw E4("base-64");return atob(t)}/**
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
 */const pn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Rd{constructor(e,n){this.data=e,this.contentType=n||null}}function U4(t,e){switch(t){case pn.RAW:return new Rd(RC(e));case pn.BASE64:case pn.BASE64URL:return new Rd(PC(t,e));case pn.DATA_URL:return new Rd(j4(e),B4(e))}throw $m()}function RC(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function z4(t){let e;try{e=decodeURIComponent(t)}catch{throw Ro(pn.DATA_URL,"Malformed data URL.")}return RC(e)}function PC(t,e){switch(t){case pn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ro(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case pn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ro(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=$4(e)}catch(i){throw i.message.includes("polyfill")?i:Ro(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class OC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ro(pn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=H4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function j4(t){const e=new OC(t);return e.base64?PC(pn.BASE64,e.rest):z4(e.rest)}function B4(t){return new OC(t).contentType}function H4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class pr{constructor(e,n){let r=0,i="";o_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(o_(this.data_)){const r=this.data_,i=F4(r,e,n);return i===null?null:new pr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new pr(r,!0)}}static getBlob(...e){if(zm()){const n=e.map(r=>r instanceof pr?r.data_:r);return new pr(L4.apply(null,n))}else{const n=e.map(o=>Um(o)?U4(pn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new pr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function AC(t){let e;try{e=JSON.parse(t)}catch{return null}return I4(e)?e:null}/**
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
 */function W4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function V4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function MC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function G4(t,e){return e}class pt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||G4}}let al=null;function K4(t){return!Um(t)||t.length<2?t:MC(t)}function DC(){if(al)return al;const t=[];t.push(new pt("bucket")),t.push(new pt("generation")),t.push(new pt("metageneration")),t.push(new pt("name","fullPath",!0));function e(s,o){return K4(o)}const n=new pt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new pt("size");return i.xform=r,t.push(i),t.push(new pt("timeCreated")),t.push(new pt("updated")),t.push(new pt("md5Hash",null,!0)),t.push(new pt("cacheControl",null,!0)),t.push(new pt("contentDisposition",null,!0)),t.push(new pt("contentEncoding",null,!0)),t.push(new pt("contentLanguage",null,!0)),t.push(new pt("contentType",null,!0)),t.push(new pt("metadata","customMetadata",!0)),al=t,al}function Y4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Dt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function q4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Y4(r,t),r}function LC(t,e,n){const r=AC(e);return r===null?null:q4(t,r,n)}function Q4(t,e,n,r){const i=AC(e);if(i===null||!Um(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=t.bucket,d=t.fullPath,f="/b/"+o(u)+"/o/"+o(d),p=xu(f,n,r),g=xC({alt:"media",token:c});return p+g})[0]}function X4(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class jm{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function FC(t){if(!t)throw $m()}function J4(t,e){function n(r,i){const s=LC(t,i,e);return FC(s!==null),s}return n}function Z4(t,e){function n(r,i){const s=LC(t,i,e);return FC(s!==null),Q4(s,i,t.host,t._protocol)}return n}function $C(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=f4():i=d4():n.getStatus()===402?i=u4(t.bucket):n.getStatus()===403?i=h4(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function UC(t){const e=$C(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=c4(t.path)),s.serverResponse=i.serverResponse,s}return n}function eM(t,e,n){const r=e.fullServerUrl(),i=xu(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new jm(i,s,Z4(t,n),o);return a.errorHandler=UC(e),a}function tM(t,e){const n=e.fullServerUrl(),r=xu(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new jm(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=UC(e),a}function nM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function rM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=nM(null,e)),r}function iM(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let _="";for(let E=0;E<2;E++)_=_+Math.random().toString().slice(2);return _}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=rM(e,r,i),u=X4(c,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=pr.getBlob(d,r,f);if(p===null)throw _4();const g={name:c.fullPath},w=xu(s,t.host,t._protocol),C="POST",v=t.maxUploadRetryTime,y=new jm(w,C,J4(t,n),v);return y.urlParams=g,y.headers=o,y.body=p.uploadData(),y.errorHandler=$C(e),y}class sM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ci.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ci.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ci.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw io("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw io("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw io("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw io("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw io("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class oM extends sM{initXhr(){this.xhr_.responseType="text"}}function Bm(){return new oM}/**
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
 */class Ci{constructor(e,n){this._service=e,n instanceof Dt?this._location=n:this._location=Dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ci(e,n)}get root(){const e=new Dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return MC(this._location.path)}get storage(){return this._service}get parent(){const e=W4(this._location.path);if(e===null)return null;const n=new Dt(this._location.bucket,e);return new Ci(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw C4(e)}}function aM(t,e,n){t._throwIfRoot("uploadBytes");const r=iM(t.storage,t._location,DC(),new pr(e,!0),n);return t.storage.makeRequestWithTokens(r,Bm).then(i=>({metadata:i,ref:t}))}function lM(t){t._throwIfRoot("getDownloadURL");const e=eM(t.storage,t._location,DC());return t.storage.makeRequestWithTokens(e,Bm).then(n=>{if(n===null)throw w4();return n})}function cM(t){t._throwIfRoot("deleteObject");const e=tM(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Bm)}function uM(t,e){const n=V4(t._location.path,e),r=new Dt(t._location.bucket,n);return new Ci(t.storage,r)}/**
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
 */function dM(t){return/^[A-Za-z]+:\/\//.test(t)}function fM(t,e){return new Ci(t,e)}function zC(t,e){if(t instanceof Hm){const n=t;if(n._bucket==null)throw y4();const r=new Ci(n,n._bucket);return e!=null?zC(r,e):r}else return e!==void 0?uM(t,e):t}function hM(t,e){if(e&&dM(e)){if(t instanceof Hm)return fM(t,e);throw ph("To use ref(service, url), the first argument must be a Storage instance.")}else return zC(t,e)}function l_(t,e){const n=e==null?void 0:e[IC];return n==null?null:Dt.makeFromBucketSpec(n,t)}function pM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Pw(i,t.app.options.projectId))}class Hm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=TC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=a4,this._maxUploadRetryTime=l4,this._requests=new Set,i!=null?this._bucket=Dt.makeFromBucketSpec(i,this._host):this._bucket=l_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dt.makeFromBucketSpec(this._url,e):this._bucket=l_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){a_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){a_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ci(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new S4(NC());{const o=M4(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const c_="@firebase/storage",u_="0.10.0";/**
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
 */const jC="storage";function mM(t,e,n){return t=Ke(t),aM(t,e,n)}function BC(t){return t=Ke(t),lM(t)}function gM(t){return t=Ke(t),cM(t)}function Wm(t,e){return t=Ke(t),hM(t,e)}function vM(t=Gp(),e){t=Ke(t);const r=du(t,jC).getImmediate({identifier:e}),i=xw("storage");return i&&yM(r,...i),r}function yM(t,e,n,r={}){pM(t,e,n,r)}function _M(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Hm(n,r,i,e,Fs)}function wM(){gi(new Dr(jC,_M,"PUBLIC").setMultipleInstances(!0)),yn(c_,u_,""),yn(c_,u_,"esm2017")}wM();const EM={apiKey:"AIzaSyD0rTZHHcGBphDZed-iv-N3QCmvkOKo7To",authDomain:"matchpoint-9d3b2.firebaseapp.com",databaseURL:"https://matchpoint-9d3b2-default-rtdb.firebaseio.com",projectId:"matchpoint-9d3b2",storageBucket:"matchpoint-9d3b2.appspot.com",messagingSenderId:"915139787408",appId:"1:915139787408:web:7b2007d60a631c4e0db615",measurementId:"G-E8N9D91SFJ"},Da=Dw(EM),Ve=aO(Da),Vm=vM();Nu(Da);const Pd=t=>{const[e,n]=m.useState(),[r,i]=m.useState(null);return m.useEffect(()=>ZP(We(Ve,t),s=>{n(s.val())},s=>{i(s)}),[t]),[e,r]},CM=(t,e)=>{Pi(We(Ve,"users/"+e),t)},HC=async(t,e)=>{let n=!0;for(const r of t){const i=t.indexOf(r),s=et(We(Ve),`users/${r}`);try{await En(s,e[i])}catch(o){console.log(o),n=!1}}return n},SM=()=>qE(et(We(Ve),"events")).key,bM=(t,e,n,r)=>{Pi(We(Ve,"events/"+e),t);const i=et(We(Ve),`users/${r}`);En(i,n)},WC=async t=>{let e=!1;try{await XP(We(Ve,"events/"+t)),e=!0}catch(n){console.log(n)}return e},mh=async(t,e,n,r)=>{const i=et(We(Ve),`events/${n}`),s=et(We(Ve),`users/${r}`);let o=!1;try{await En(i,t),await En(s,e),o=!0}catch(a){console.log(a)}return o},VC=async(t,e)=>{const n=et(We(Ve),`events/${e}`);let r=!1;try{await En(n,t),r=!0}catch(i){console.log(i)}return r},Xi=()=>qE(et(We(Ve),"messages")).key,kM=(t,e,n,r)=>{Pi(We(Ve,"messages/"+n),e);const i=et(We(Ve),`users/${r}`);En(i,t)},GC=(t,e,n,r)=>{Pi(We(Ve,"messages/"+r),t);for(let i of n){let s=n.indexOf(i);const o=et(We(Ve),`users/${i}`);En(o,e[s])}},gh=(t,e,n,r,i,s)=>{try{Pi(We(Ve,"messages/"+r),t);const o=et(We(Ve),`users/${i}`);En(o,e);const a=et(We(Ve),`users/${s}`);En(a,n)}catch(o){console.log("Error in join event message"),console.log(o)}},ll=(t,e)=>{const n=et(We(Ve),`users/${e}`);En(n,t)},vh=async t=>{let e=`images/${t.name}`,n="",r=!1;const i=Wm(Vm,e);try{await mM(i,t),n=await BC(i),console.log("File upload successful"),r=!0}catch(s){console.log("Error: "+s)}return[r,n]},KC=async t=>{let e=Wm(Vm,t);try{let n=await gM(e);console.log(n)}catch(n){console.log(n)}},YC=async t=>{let e=`images/${t}`,n="";const r=Wm(Vm,e);try{n=await BC(r)}catch(i){console.log(i)}return n},TM=()=>{vA(Nu(Da),new Nn)},IM=()=>KO(Nu(Da)),qC=()=>{const[t,e]=m.useState();return m.useEffect(()=>GO(Nu(Da),e),[]),t};var yh={},NM={get exports(){return yh},set exports(t){yh=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(NM);const Q=yh;function _h(){return _h=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_h.apply(this,arguments)}function QC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function d_(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function xM(t){var e=RM(t,"string");return typeof e=="symbol"?e:String(e)}function RM(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function XC(t,e,n){var r=m.useRef(t!==void 0),i=m.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,m.useCallback(function(c){for(var u=arguments.length,d=new Array(u>1?u-1:0),f=1;f<u;f++)d[f-1]=arguments[f];n&&n.apply(void 0,[c].concat(d)),o(c)},[n])]}function Gm(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[d_(r)],a=s[r],l=QC(s,[d_(r),r].map(xM)),c=e[r],u=XC(a,o,t[c]),d=u[0],f=u[1];return _h({},l,(i={},i[r]=d,i[c]=f,i))},t)}function wh(t,e){return wh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},wh(t,e)}function PM(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,wh(t,e)}const JC=["xxl","xl","lg","md","sm","xs"],ZC="xs",Ru=m.createContext({prefixes:{},breakpoints:JC,minBreakpoint:ZC});function se(t,e){const{prefixes:n}=m.useContext(Ru);return t||n[e]||e}function Km(){const{breakpoints:t}=m.useContext(Ru);return t}function Ym(){const{minBreakpoint:t}=m.useContext(Ru);return t}function OM(){const{dir:t}=m.useContext(Ru);return t==="rtl"}function Pu(t){return t&&t.ownerDocument||document}function AM(t){var e=Pu(t);return e&&e.defaultView||window}function MM(t,e){return AM(t).getComputedStyle(t,e)}var DM=/([A-Z])/g;function LM(t){return t.replace(DM,"-$1").toLowerCase()}var FM=/^ms-/;function cl(t){return LM(t).replace(FM,"-ms-")}var $M=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function UM(t){return!!(t&&$M.test(t))}function $n(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(cl(e))||MM(t).getPropertyValue(cl(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(cl(i)):UM(i)?r+=i+"("+s+") ":n+=cl(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var U={},zM={get exports(){return U},set exports(t){U=t}},jM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",BM=jM,HM=BM;function eS(){}function tS(){}tS.resetWarningCache=eS;var WM=function(){function t(r,i,s,o,a,l){if(l!==HM){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:tS,resetWarningCache:eS};return n.PropTypes=n,n};zM.exports=WM();const f_={disabled:!1},nS=G.createContext(null);var VM=function(e){return e.scrollTop},fo="unmounted",lr="exited",en="entering",xn="entered",da="exiting",Jn=function(t){PM(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=lr,s.appearStatus=en):l=xn:r.unmountOnExit||r.mountOnEnter?l=fo:l=lr,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===fo?{status:lr}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==en&&o!==xn&&(s=en):(o===en||o===xn)&&(s=da)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===en){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:qi.findDOMNode(this);o&&VM(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===lr&&this.setState({status:fo})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[qi.findDOMNode(this),a],c=l[0],u=l[1],d=this.getTimeouts(),f=a?d.appear:d.enter;if(!i&&!o||f_.disabled){this.safeSetState({status:xn},function(){s.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:en},function(){s.props.onEntering(c,u),s.onTransitionEnd(f,function(){s.safeSetState({status:xn},function(){s.props.onEntered(c,u)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:qi.findDOMNode(this);if(!s||f_.disabled){this.safeSetState({status:lr},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:da},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:lr},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:qi.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=l[0],u=l[1];this.props.addEndListener(c,u)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===fo)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=QC(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return G.createElement(nS.Provider,{value:null},typeof o=="function"?o(i,a):G.cloneElement(G.Children.only(o),a))},e}(G.Component);Jn.contextType=nS;Jn.propTypes={};function Di(){}Jn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Di,onEntering:Di,onEntered:Di,onExit:Di,onExiting:Di,onExited:Di};Jn.UNMOUNTED=fo;Jn.EXITED=lr;Jn.ENTERING=en;Jn.ENTERED=xn;Jn.EXITING=da;const js=!!(typeof window<"u"&&window.document&&window.document.createElement);var Eh=!1,Ch=!1;try{var Od={get passive(){return Eh=!0},get once(){return Ch=Eh=!0}};js&&(window.addEventListener("test",Od,Od),window.removeEventListener("test",Od,!0))}catch{}function rS(t,e,n,r){if(r&&typeof r!="boolean"&&!Ch){var i=r.once,s=r.capture,o=n;!Ch&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,Eh?r:s)}t.addEventListener(e,n,r)}function Sh(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function Fc(t,e,n,r){return rS(t,e,n,r),function(){Sh(t,e,n,r)}}function GM(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function KM(t){var e=$n(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function YM(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||GM(t,"transitionend",!0)},e+n),s=Fc(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function iS(t,e,n,r){n==null&&(n=KM(t)||0);var i=YM(t,n,r),s=Fc(t,"transitionend",e);return function(){i(),s()}}function h_(t,e){const n=$n(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function qm(t,e){const n=h_(t,"transitionDuration"),r=h_(t,"transitionDelay"),i=iS(t,s=>{s.target===t&&(i(),e(s))},n+r)}function so(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...i){e.apply(this,i),n.apply(this,i)}},null)}function sS(t){t.offsetHeight}var p_=function(e){return!e||typeof e=="function"?e:function(n){e.current=n}};function qM(t,e){var n=p_(t),r=p_(e);return function(i){n&&n(i),r&&r(i)}}function Qm(t,e){return m.useMemo(function(){return qM(t,e)},[t,e])}function QM(t){return t&&"setState"in t?qi.findDOMNode(t):t??null}const XM=G.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...c},u)=>{const d=m.useRef(null),f=Qm(d,l),p=b=>{f(QM(b))},g=b=>k=>{b&&d.current&&b(d.current,k)},w=m.useCallback(g(t),[t]),C=m.useCallback(g(e),[e]),v=m.useCallback(g(n),[n]),y=m.useCallback(g(r),[r]),_=m.useCallback(g(i),[i]),E=m.useCallback(g(s),[s]),S=m.useCallback(g(o),[o]);return h(Jn,{ref:u,...c,onEnter:w,onEntered:v,onEntering:C,onExit:y,onExited:E,onExiting:_,addEndListener:S,nodeRef:d,children:typeof a=="function"?(b,k)=>a(b,{...k,ref:p}):G.cloneElement(a,{ref:p})})}),Xm=XM,JM={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function oS(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,r=e[n],i=JM[t];return r+parseInt($n(e,i[0]),10)+parseInt($n(e,i[1]),10)}const ZM={[lr]:"collapse",[da]:"collapsing",[en]:"collapsing",[xn]:"collapse show"},eD={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:oS},aS=G.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,className:s,children:o,dimension:a="height",getDimensionValue:l=oS,...c},u)=>{const d=typeof a=="function"?a():a,f=m.useMemo(()=>so(v=>{v.style[d]="0"},t),[d,t]),p=m.useMemo(()=>so(v=>{const y=`scroll${d[0].toUpperCase()}${d.slice(1)}`;v.style[d]=`${v[y]}px`},e),[d,e]),g=m.useMemo(()=>so(v=>{v.style[d]=null},n),[d,n]),w=m.useMemo(()=>so(v=>{v.style[d]=`${l(d,v)}px`,sS(v)},r),[r,l,d]),C=m.useMemo(()=>so(v=>{v.style[d]=null},i),[d,i]);return h(Xm,{ref:u,addEndListener:qm,...c,"aria-expanded":c.role?c.in:null,onEnter:f,onEntering:p,onEntered:g,onExit:w,onExiting:C,childRef:o.ref,children:(v,y)=>G.cloneElement(o,{...y,className:Q(s,o.props.className,ZM[v],d==="width"&&"collapse-horizontal")})})});aS.defaultProps=eD;const tD=aS;function nD(t){var e=m.useRef(t);return m.useEffect(function(){e.current=t},[t]),e}function Wt(t){var e=nD(t);return m.useCallback(function(){return e.current&&e.current.apply(e,arguments)},[e])}function rD(){return m.useState(null)}function iD(){var t=m.useRef(!0),e=m.useRef(function(){return t.current});return m.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]),e.current}function sD(t){var e=m.useRef(null);return m.useEffect(function(){e.current=t}),e.current}var oD=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",aD=typeof document<"u";const lD=aD||oD?m.useLayoutEffect:m.useEffect,cD=["as","disabled"];function uD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function dD(t){return!t||t.trim()==="#"}function Jm({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const c={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},c];const u=f=>{if((e||t==="a"&&dD(n))&&f.preventDefault(),e){f.stopPropagation();return}o==null||o(f)},d=f=>{f.key===" "&&(f.preventDefault(),u(f))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:u,onKeyDown:d},c]}const lS=m.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=uD(t,cD);const[s,{tagName:o}]=Jm(Object.assign({tagName:n,disabled:r},i));return h(o,Object.assign({},i,s,{ref:e}))});lS.displayName="Button";const fD=["onKeyDown"];function hD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function pD(t){return!t||t.trim()==="#"}const cS=m.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=hD(t,fD);const[i]=Jm(Object.assign({tagName:"a"},r)),s=Wt(o=>{i.onKeyDown(o),n==null||n(o)});return pD(r.href)||r.role==="button"?h("a",Object.assign({ref:e},r,i,{onKeyDown:s})):h("a",Object.assign({ref:e},r,{onKeyDown:n}))});cS.displayName="Anchor";const mD={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},gD={[en]:"show",[xn]:"show"},Zm=m.forwardRef(({className:t,children:e,transitionClasses:n={},...r},i)=>{const s=m.useCallback((o,a)=>{sS(o),r.onEnter==null||r.onEnter(o,a)},[r]);return h(Xm,{ref:i,addEndListener:qm,...r,onEnter:s,childRef:e.ref,children:(o,a)=>m.cloneElement(e,{...a,className:Q("fade",t,e.props.className,gD[o],n[o])})})});Zm.defaultProps=mD;Zm.displayName="Fade";const La=Zm,vD={"aria-label":U.string,onClick:U.func,variant:U.oneOf(["white"])},yD={"aria-label":"Close"},Ou=m.forwardRef(({className:t,variant:e,...n},r)=>h("button",{ref:r,type:"button",className:Q("btn-close",e&&`btn-close-${e}`,t),...n}));Ou.displayName="CloseButton";Ou.propTypes=vD;Ou.defaultProps=yD;const _D=Ou,Au=t=>m.forwardRef((e,n)=>h("div",{...e,ref:n,className:Q(e.className,t)}));var wD=/-(.)/g;function ED(t){return t.replace(wD,function(e,n){return n.toUpperCase()})}const CD=t=>t[0].toUpperCase()+ED(t).slice(1);function ht(t,{displayName:e=CD(t),Component:n,defaultProps:r}={}){const i=m.forwardRef(({className:s,bsPrefix:o,as:a=n||"div",...l},c)=>{const u=se(o,t);return h(a,{ref:c,className:Q(s,u),...l})});return i.defaultProps=r,i.displayName=e,i}const SD={variant:"primary",active:!1,disabled:!1},eg=m.forwardRef(({as:t,bsPrefix:e,variant:n,size:r,active:i,className:s,...o},a)=>{const l=se(e,"btn"),[c,{tagName:u}]=Jm({tagName:t,...o});return h(u,{...c,...o,ref:a,className:Q(s,l,i&&"active",n&&`${l}-${n}`,r&&`${l}-${r}`,o.href&&o.disabled&&"disabled")})});eg.displayName="Button";eg.defaultProps=SD;const vt=eg,uS=m.forwardRef(({bsPrefix:t,className:e,variant:n,as:r="img",...i},s)=>{const o=se(t,"card-img");return h(r,{ref:s,className:Q(n?`${o}-${n}`:o,e),...i})});uS.displayName="CardImg";const bD=uS,dS=m.createContext(null);dS.displayName="CardHeaderContext";const fS=dS,hS=m.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=se(t,"card-header"),o=m.useMemo(()=>({cardHeaderBsPrefix:s}),[s]);return h(fS.Provider,{value:o,children:h(n,{ref:i,...r,className:Q(e,s)})})});hS.displayName="CardHeader";const kD=hS,TD=Au("h5"),ID=Au("h6"),pS=ht("card-body"),ND=ht("card-title",{Component:TD}),xD=ht("card-subtitle",{Component:ID}),RD=ht("card-link",{Component:"a"}),PD=ht("card-text",{Component:"p"}),OD=ht("card-footer"),AD=ht("card-img-overlay"),MD={body:!1},tg=m.forwardRef(({bsPrefix:t,className:e,bg:n,text:r,border:i,body:s,children:o,as:a="div",...l},c)=>{const u=se(t,"card");return h(a,{ref:c,...l,className:Q(e,u,n&&`bg-${n}`,r&&`text-${r}`,i&&`border-${i}`),children:s?h(pS,{children:o}):o})});tg.displayName="Card";tg.defaultProps=MD;const $c=Object.assign(tg,{Img:bD,Title:ND,Subtitle:xD,Body:pS,Link:RD,Text:PD,Header:kD,Footer:OD,ImgOverlay:AD});function DD(t){var e=m.useRef(t);return e.current=t,e}function mS(t){var e=DD(t);m.useEffect(function(){return function(){return e.current()}},[])}function m_(t,e){let n=0;return m.Children.map(t,r=>m.isValidElement(r)?e(r,n++):r)}function LD(t,e){let n=0;m.Children.forEach(t,r=>{m.isValidElement(r)&&e(r,n++)})}function FD(t,e){return m.Children.toArray(t).some(n=>m.isValidElement(n)&&n.type===e)}function $D({as:t,bsPrefix:e,className:n,...r}){e=se(e,"col");const i=Km(),s=Ym(),o=[],a=[];return i.forEach(l=>{const c=r[l];delete r[l];let u,d,f;typeof c=="object"&&c!=null?{span:u,offset:d,order:f}=c:u=c;const p=l!==s?`-${l}`:"";u&&o.push(u===!0?`${e}${p}`:`${e}${p}-${u}`),f!=null&&a.push(`order${p}-${f}`),d!=null&&a.push(`offset${p}-${d}`)}),[{...r,className:Q(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const gS=m.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=$D(t);return h(i,{...r,ref:e,className:Q(n,!o.length&&s)})});gS.displayName="Col";const St=gS;var UD=Function.prototype.bind.call(Function.prototype.call,[].slice);function qr(t,e){return UD(t.querySelectorAll(e))}function zD(){var t=m.useReducer(function(n){return!n},!1),e=t[1];return e}function g_(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}const vS={prefix:String(Math.round(Math.random()*1e10)),current:0},jD=G.createContext(vS);let BD=Boolean(typeof window<"u"&&window.document&&window.document.createElement);function HD(t){let e=m.useContext(jD);return e===vS&&!BD&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),m.useMemo(()=>t||`react-aria${e.prefix}-${++e.current}`,[t])}const Si=m.createContext(null),fa=(t,e=null)=>t!=null?String(t):e||null,ng=m.createContext(null);ng.displayName="NavContext";const WD="data-rr-ui-",VD="rrUi";function Mu(t){return`${WD}${t}`}function GD(t){return`${VD}${t}`}const yS=m.createContext(js?window:void 0);yS.Provider;function _S(){return m.useContext(yS)}const wS=m.createContext(null);wS.displayName="NavbarContext";const Bs=wS,KD={type:U.string,tooltip:U.bool,as:U.elementType},rg=m.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>h(t,{...i,ref:s,className:Q(e,`${n}-${r?"tooltip":"feedback"}`)}));rg.displayName="Feedback";rg.propTypes=KD;const ES=rg,YD=m.createContext({}),Vn=YD,CS=m.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...a},l)=>{const{controlId:c}=m.useContext(Vn);return e=se(e,"form-check-input"),h(o,{...a,ref:l,type:r,id:t||c,className:Q(n,e,i&&"is-valid",s&&"is-invalid")})});CS.displayName="FormCheckInput";const SS=CS,bS=m.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=m.useContext(Vn);return t=se(t,"form-check-label"),h("label",{...r,ref:i,htmlFor:n||s,className:Q(e,t)})});bS.displayName="FormCheckLabel";const bh=bS,kS=m.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:l=!1,feedback:c,feedbackType:u,className:d,style:f,title:p="",type:g="checkbox",label:w,children:C,as:v="input",...y},_)=>{e=se(e,"form-check"),n=se(n,"form-switch");const{controlId:E}=m.useContext(Vn),S=m.useMemo(()=>({controlId:t||E}),[E,t]),b=!C&&w!=null&&w!==!1||FD(C,bh),k=h(SS,{...y,type:g==="switch"?"checkbox":g,ref:_,isValid:o,isInvalid:a,disabled:s,as:v});return h(Vn.Provider,{value:S,children:h("div",{style:f,className:Q(d,b&&e,r&&`${e}-inline`,i&&`${e}-reverse`,g==="switch"&&n),children:C||N(Lo,{children:[k,b&&h(bh,{title:p,children:w}),c&&h(ES,{type:u,tooltip:l,children:c})]})})})});kS.displayName="FormCheck";const Uc=Object.assign(kS,{Input:SS,Label:bh}),TS=m.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:l,readOnly:c,as:u="input",...d},f)=>{const{controlId:p}=m.useContext(Vn);t=se(t,"form-control");let g;return l?g={[`${t}-plaintext`]:!0}:g={[t]:!0,[`${t}-${n}`]:n},h(u,{...d,type:e,size:r,ref:f,readOnly:c,id:i||p,className:Q(s,g,o&&"is-valid",a&&"is-invalid",e==="color"&&`${t}-color`)})});TS.displayName="FormControl";const qD=Object.assign(TS,{Feedback:ES}),QD=ht("form-floating"),IS=m.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=m.useMemo(()=>({controlId:t}),[t]);return h(Vn.Provider,{value:i,children:h(e,{...n,ref:r})})});IS.displayName="FormGroup";const NS=IS,XD={column:!1,visuallyHidden:!1},ig=m.forwardRef(({as:t="label",bsPrefix:e,column:n,visuallyHidden:r,className:i,htmlFor:s,...o},a)=>{const{controlId:l}=m.useContext(Vn);e=se(e,"form-label");let c="col-form-label";typeof n=="string"&&(c=`${c} ${c}-${n}`);const u=Q(i,e,r&&"visually-hidden",n&&c);return s=s||l,n?h(St,{ref:a,as:"label",className:u,htmlFor:s,...o}):h(t,{ref:a,className:u,htmlFor:s,...o})});ig.displayName="FormLabel";ig.defaultProps=XD;const JD=ig,xS=m.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=m.useContext(Vn);return t=se(t,"form-range"),h("input",{...r,type:"range",ref:i,className:Q(e,t),id:n||s})});xS.displayName="FormRange";const ZD=xS,RS=m.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...a},l)=>{const{controlId:c}=m.useContext(Vn);return t=se(t,"form-select"),h("select",{...a,size:n,ref:l,className:Q(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||c})});RS.displayName="FormSelect";const eL=RS,PS=m.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=se(t,"form-text"),h(n,{...i,ref:s,className:Q(e,t,r&&"text-muted")})));PS.displayName="FormText";const tL=PS,OS=m.forwardRef((t,e)=>h(Uc,{...t,ref:e,type:"switch"}));OS.displayName="Switch";const nL=Object.assign(OS,{Input:Uc.Input,Label:Uc.Label}),AS=m.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=se(t,"form-floating"),N(NS,{ref:o,className:Q(e,t),controlId:r,...s,children:[n,h("label",{htmlFor:r,children:i})]})));AS.displayName="FloatingLabel";const rL=AS,iL={_ref:U.any,validated:U.bool,as:U.elementType},sg=m.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>h(n,{...r,ref:i,className:Q(t,e&&"was-validated")}));sg.displayName="Form";sg.propTypes=iL;const A=Object.assign(sg,{Group:NS,Control:qD,Floating:QD,Check:Uc,Switch:nL,Label:JD,Text:tL,Range:ZD,Select:eL,FloatingLabel:rL}),sL={fluid:!1},og=m.forwardRef(({bsPrefix:t,fluid:e,as:n="div",className:r,...i},s)=>{const o=se(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return h(n,{ref:s,...i,className:Q(r,e?`${o}${a}`:o)})});og.displayName="Container";og.defaultProps=sL;const oL=og;U.string,U.bool,U.bool,U.bool,U.bool;const aL={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},xs=m.forwardRef(({bsPrefix:t,className:e,fluid:n,rounded:r,roundedCircle:i,thumbnail:s,...o},a)=>(t=se(t,"img"),h("img",{ref:a,...o,className:Q(e,n&&`${t}-fluid`,r&&"rounded",i&&"rounded-circle",s&&`${t}-thumbnail`)})));xs.displayName="Image";xs.defaultProps=aL;const Hs=m.createContext(null),lL=["as","active","eventKey"];function cL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function MS({key:t,onClick:e,active:n,id:r,role:i,disabled:s}){const o=m.useContext(Si),a=m.useContext(ng),l=m.useContext(Hs);let c=n;const u={role:i};if(a){!i&&a.role==="tablist"&&(u.role="tab");const d=a.getControllerId(t??null),f=a.getControlledId(t??null);u[Mu("event-key")]=t,u.id=d||r,c=n==null&&t!=null?a.activeKey===t:n,(c||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(u["aria-controls"]=f)}return u.role==="tab"&&(u["aria-selected"]=c,c||(u.tabIndex=-1),s&&(u.tabIndex=-1,u["aria-disabled"]=!0)),u.onClick=Wt(d=>{s||(e==null||e(d),t!=null&&o&&!d.isPropagationStopped()&&o(t,d))}),[u,{isActive:c}]}const DS=m.forwardRef((t,e)=>{let{as:n=lS,active:r,eventKey:i}=t,s=cL(t,lL);const[o,a]=MS(Object.assign({key:fa(i,s.href),active:r},s));return o[Mu("active")]=a.isActive,h(n,Object.assign({},s,o,{ref:e}))});DS.displayName="NavItem";const uL=["as","onSelect","activeKey","role","onKeyDown"];function dL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const v_=()=>{},y_=Mu("event-key"),LS=m.forwardRef((t,e)=>{let{as:n="div",onSelect:r,activeKey:i,role:s,onKeyDown:o}=t,a=dL(t,uL);const l=zD(),c=m.useRef(!1),u=m.useContext(Si),d=m.useContext(Hs);let f,p;d&&(s=s||"tablist",i=d.activeKey,f=d.getControlledId,p=d.getControllerId);const g=m.useRef(null),w=_=>{const E=g.current;if(!E)return null;const S=qr(E,`[${y_}]:not([aria-disabled=true])`),b=E.querySelector("[aria-selected=true]");if(!b||b!==document.activeElement)return null;const k=S.indexOf(b);if(k===-1)return null;let T=k+_;return T>=S.length&&(T=0),T<0&&(T=S.length-1),S[T]},C=(_,E)=>{_!=null&&(r==null||r(_,E),u==null||u(_,E))},v=_=>{if(o==null||o(_),!d)return;let E;switch(_.key){case"ArrowLeft":case"ArrowUp":E=w(-1);break;case"ArrowRight":case"ArrowDown":E=w(1);break;default:return}E&&(_.preventDefault(),C(E.dataset[GD("EventKey")]||null,_),c.current=!0,l())};m.useEffect(()=>{if(g.current&&c.current){const _=g.current.querySelector(`[${y_}][aria-selected=true]`);_==null||_.focus()}c.current=!1});const y=Qm(e,g);return h(Si.Provider,{value:C,children:h(ng.Provider,{value:{role:s,activeKey:fa(i),getControlledId:f||v_,getControllerId:p||v_},children:h(n,Object.assign({},a,{onKeyDown:v,ref:y,role:s}))})})});LS.displayName="Nav";const fL=Object.assign(LS,{Item:DS});var ul;function __(t){if((!ul&&ul!==0||t)&&js){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),ul=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return ul}function Ad(t){t===void 0&&(t=Pu());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function hL(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const w_=Mu("modal-open");class ag{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return hL(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt($n(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(w_,""),$n(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(w_),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const Md=(t,e)=>js?t==null?(e||Pu()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function pL(t,e){const n=_S(),[r,i]=m.useState(()=>Md(t,n==null?void 0:n.document));if(!r){const s=Md(t);s&&i(s)}return m.useEffect(()=>{e&&r&&e(r)},[e,r]),m.useEffect(()=>{const s=Md(t);s!==r&&i(s)},[t,r]),r}const mL=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function gL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let Dd;function vL(t){return Dd||(Dd=new ag({ownerDocument:t==null?void 0:t.document})),Dd}function yL(t){const e=_S(),n=t||vL(e),r=m.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:m.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:m.useCallback(i=>{r.current.backdrop=i},[])})}const FS=m.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:c,onEscapeKeyDown:u,transition:d,backdropTransition:f,autoFocus:p=!0,enforceFocus:g=!0,restoreFocus:w=!0,restoreFocusOptions:C,renderDialog:v,renderBackdrop:y=ue=>h("div",Object.assign({},ue)),manager:_,container:E,onShow:S,onHide:b=()=>{},onExit:k,onExited:T,onExiting:D,onEnter:M,onEntering:H,onEntered:Y}=t,te=gL(t,mL);const J=pL(E),X=yL(_),le=iD(),j=sD(n),[I,O]=m.useState(!n),P=m.useRef(null);m.useImperativeHandle(e,()=>X,[X]),js&&!j&&n&&(P.current=Ad()),!d&&!n&&!I?O(!0):n&&I&&O(!1);const W=Wt(()=>{if(X.add(),Ct.current=Fc(document,"keydown",me),Re.current=Fc(document,"focus",()=>setTimeout(Te),!0),S&&S(),p){const ue=Ad(document);X.dialog&&ue&&!g_(X.dialog,ue)&&(P.current=ue,X.dialog.focus())}}),V=Wt(()=>{if(X.remove(),Ct.current==null||Ct.current(),Re.current==null||Re.current(),w){var ue;(ue=P.current)==null||ue.focus==null||ue.focus(C),P.current=null}});m.useEffect(()=>{!n||!J||W()},[n,J,W]),m.useEffect(()=>{I&&V()},[I,V]),mS(()=>{V()});const Te=Wt(()=>{if(!g||!le()||!X.isTopModal())return;const ue=Ad();X.dialog&&ue&&!g_(X.dialog,ue)&&X.dialog.focus()}),Se=Wt(ue=>{ue.target===ue.currentTarget&&(c==null||c(ue),a===!0&&b())}),me=Wt(ue=>{l&&ue.keyCode===27&&X.isTopModal()&&(u==null||u(ue),ue.defaultPrevented||b())}),Re=m.useRef(),Ct=m.useRef(),bn=(...ue)=>{O(!0),T==null||T(...ue)},er=d;if(!J||!(n||er&&!I))return null;const Wr=Object.assign({role:r,ref:X.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},te,{style:s,className:i,tabIndex:-1});let kn=v?v(Wr):h("div",Object.assign({},Wr,{children:m.cloneElement(o,{role:"document"})}));er&&(kn=h(er,{appear:!0,unmountOnExit:!0,in:!!n,onExit:k,onExiting:D,onExited:bn,onEnter:M,onEntering:H,onEntered:Y,children:kn}));let tr=null;if(a){const ue=f;tr=y({ref:X.setBackdropRef,onClick:Se}),ue&&(tr=h(ue,{appear:!0,in:!!n,children:tr}))}return h(Lo,{children:qi.createPortal(N(Lo,{children:[tr,kn]}),J)})});FS.displayName="Modal";const $S=Object.assign(FS,{Manager:ag});function _L(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function wL(t,e){t.classList?t.classList.add(e):_L(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function E_(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function EL(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=E_(t.className,e):t.setAttribute("class",E_(t.className&&t.className.baseVal||"",e))}const Li={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class US extends ag{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,$n(n,{[e]:`${parseFloat($n(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],$n(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(wL(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";qr(n,Li.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),qr(n,Li.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),qr(n,Li.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();EL(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";qr(n,Li.FIXED_CONTENT).forEach(s=>this.restore(r,s)),qr(n,Li.STICKY_CONTENT).forEach(s=>this.restore(i,s)),qr(n,Li.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let Ld;function zS(t){return Ld||(Ld=new US(t)),Ld}const CL=ht("modal-body"),lg=m.createContext({onHide(){}}),jS=m.forwardRef(({bsPrefix:t,className:e,contentClassName:n,centered:r,size:i,fullscreen:s,children:o,scrollable:a,...l},c)=>{t=se(t,"modal");const u=`${t}-dialog`,d=typeof s=="string"?`${t}-fullscreen-${s}`:`${t}-fullscreen`;return h("div",{...l,ref:c,className:Q(u,e,i&&`${t}-${i}`,r&&`${u}-centered`,a&&`${u}-scrollable`,s&&d),children:h("div",{className:Q(`${t}-content`,n),children:o})})});jS.displayName="ModalDialog";const BS=jS,SL=ht("modal-footer"),bL={closeLabel:"Close",closeButton:!1},cg=m.forwardRef(({closeLabel:t,closeVariant:e,closeButton:n,onHide:r,children:i,...s},o)=>{const a=m.useContext(lg),l=Wt(()=>{a==null||a.onHide(),r==null||r()});return N("div",{ref:o,...s,children:[i,n&&h(_D,{"aria-label":t,variant:e,onClick:l})]})});cg.defaultProps=bL;const kL={closeLabel:"Close",closeButton:!1},ug=m.forwardRef(({bsPrefix:t,className:e,...n},r)=>(t=se(t,"modal-header"),h(cg,{ref:r,...n,className:Q(e,t)})));ug.displayName="ModalHeader";ug.defaultProps=kL;const TL=ug,IL=Au("h4"),NL=ht("modal-title",{Component:IL}),xL={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:BS};function RL(t){return h(La,{...t,timeout:null})}function PL(t){return h(La,{...t,timeout:null})}const dg=m.forwardRef(({bsPrefix:t,className:e,style:n,dialogClassName:r,contentClassName:i,children:s,dialogAs:o,"aria-labelledby":a,"aria-describedby":l,"aria-label":c,show:u,animation:d,backdrop:f,keyboard:p,onEscapeKeyDown:g,onShow:w,onHide:C,container:v,autoFocus:y,enforceFocus:_,restoreFocus:E,restoreFocusOptions:S,onEntered:b,onExit:k,onExiting:T,onEnter:D,onEntering:M,onExited:H,backdropClassName:Y,manager:te,...J},X)=>{const[le,j]=m.useState({}),[I,O]=m.useState(!1),P=m.useRef(!1),W=m.useRef(!1),V=m.useRef(null),[Te,Se]=rD(),me=Qm(X,Se),Re=Wt(C),Ct=OM();t=se(t,"modal");const bn=m.useMemo(()=>({onHide:Re}),[Re]);function er(){return te||zS({isRTL:Ct})}function Wr(re){if(!js)return;const Oi=er().getScrollbarWidth()>0,Lg=re.scrollHeight>Pu(re).documentElement.clientHeight;j({paddingRight:Oi&&!Lg?__():void 0,paddingLeft:!Oi&&Lg?__():void 0})}const kn=Wt(()=>{Te&&Wr(Te.dialog)});mS(()=>{Sh(window,"resize",kn),V.current==null||V.current()});const tr=()=>{P.current=!0},ue=re=>{P.current&&Te&&re.target===Te.dialog&&(W.current=!0),P.current=!1},F=()=>{O(!0),V.current=iS(Te.dialog,()=>{O(!1)})},he=re=>{re.target===re.currentTarget&&F()},Pe=re=>{if(f==="static"){he(re);return}if(W.current||re.target!==re.currentTarget){W.current=!1;return}C==null||C()},ze=re=>{p?g==null||g(re):(re.preventDefault(),f==="static"&&F())},be=(re,Oi)=>{re&&Wr(re),D==null||D(re,Oi)},Oe=re=>{V.current==null||V.current(),k==null||k(re)},ot=(re,Oi)=>{M==null||M(re,Oi),rS(window,"resize",kn)},at=re=>{re&&(re.style.display=""),H==null||H(re),Sh(window,"resize",kn)},Ot=m.useCallback(re=>h("div",{...re,className:Q(`${t}-backdrop`,Y,!d&&"show")}),[d,Y,t]),nr={...n,...le};nr.display="block";const Vs=re=>h("div",{role:"dialog",...re,style:nr,className:Q(e,t,I&&`${t}-static`,!d&&"show"),onClick:f?Pe:void 0,onMouseUp:ue,"aria-label":c,"aria-labelledby":a,"aria-describedby":l,children:h(o,{...J,onMouseDown:tr,className:r,contentClassName:i,children:s})});return h(lg.Provider,{value:bn,children:h($S,{show:u,ref:me,backdrop:f,container:v,keyboard:!0,autoFocus:y,enforceFocus:_,restoreFocus:E,restoreFocusOptions:S,onEscapeKeyDown:ze,onShow:w,onHide:C,onEnter:be,onEntering:ot,onEntered:b,onExit:Oe,onExiting:T,onExited:at,manager:er(),transition:d?RL:void 0,backdropTransition:d?PL:void 0,renderBackdrop:Ot,renderDialog:Vs})})});dg.displayName="Modal";dg.defaultProps=xL;const ae=Object.assign(dg,{Body:CL,Header:TL,Title:NL,Footer:SL,Dialog:BS,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});var kh={},OL={get exports(){return kh},set exports(t){kh=t}},zc={},AL={get exports(){return zc},set exports(t){zc=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){function i(o,a,l,c,u,d){var f=c||"<<anonymous>>",p=d||l;if(a[l]==null)return o?new Error("Required "+u+" `"+p+"` was not specified "+("in `"+f+"`.")):null;for(var g=arguments.length,w=Array(g>6?g-6:0),C=6;C<g;C++)w[C-6]=arguments[C];return r.apply(void 0,[a,l,f,u,p].concat(w))}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}t.exports=e.default})(AL,zc);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=zc,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}function s(){for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];function c(){for(var u=arguments.length,d=Array(u),f=0;f<u;f++)d[f]=arguments[f];var p=null;return a.forEach(function(g){if(p==null){var w=g.apply(void 0,d);w!=null&&(p=w)}}),p}return(0,r.default)(c)}t.exports=e.default})(OL,kh);const HS=ht("nav-item"),ML={disabled:!1},fg=m.forwardRef(({bsPrefix:t,className:e,as:n=cS,active:r,eventKey:i,...s},o)=>{t=se(t,"nav-link");const[a,l]=MS({key:fa(i,s.href),active:r,...s});return h(n,{...s,...a,ref:o,className:Q(e,t,s.disabled&&"disabled",l.isActive&&"active")})});fg.displayName="NavLink";fg.defaultProps=ML;const WS=fg,DL={justify:!1,fill:!1},hg=m.forwardRef((t,e)=>{const{as:n="div",bsPrefix:r,variant:i,fill:s,justify:o,navbar:a,navbarScroll:l,className:c,activeKey:u,...d}=Gm(t,{activeKey:"onSelect"}),f=se(r,"nav");let p,g,w=!1;const C=m.useContext(Bs),v=m.useContext(fS);return C?(p=C.bsPrefix,w=a??!0):v&&({cardHeaderBsPrefix:g}=v),h(fL,{as:n,ref:e,activeKey:u,className:Q(c,{[f]:!w,[`${p}-nav`]:w,[`${p}-nav-scroll`]:w&&l,[`${g}-${i}`]:!!g,[`${f}-${i}`]:!!i,[`${f}-fill`]:s,[`${f}-justified`]:o}),...d})});hg.displayName="Nav";hg.defaultProps=DL;const ho=Object.assign(hg,{Item:HS,Link:WS}),VS=m.forwardRef(({bsPrefix:t,className:e,as:n,...r},i)=>{t=se(t,"navbar-brand");const s=n||(r.href?"a":"span");return h(s,{...r,ref:i,className:Q(e,t)})});VS.displayName="NavbarBrand";const LL=VS,GS=m.forwardRef(({children:t,bsPrefix:e,...n},r)=>{e=se(e,"navbar-collapse");const i=m.useContext(Bs);return h(tD,{in:!!(i&&i.expanded),...n,children:h("div",{ref:r,className:e,children:t})})});GS.displayName="NavbarCollapse";const FL=GS,$L={label:"Toggle navigation"},pg=m.forwardRef(({bsPrefix:t,className:e,children:n,label:r,as:i="button",onClick:s,...o},a)=>{t=se(t,"navbar-toggler");const{onToggle:l,expanded:c}=m.useContext(Bs)||{},u=Wt(d=>{s&&s(d),l&&l()});return i==="button"&&(o.type="button"),h(i,{...o,ref:a,onClick:u,"aria-label":r,className:Q(e,t,!c&&"collapsed"),children:n||h("span",{className:`${t}-icon`})})});pg.displayName="NavbarToggle";pg.defaultProps=$L;const UL=pg;var Th=new WeakMap,C_=function(e,n){if(!(!e||!n)){var r=Th.get(n)||new Map;Th.set(n,r);var i=r.get(e);return i||(i=n.matchMedia(e),i.refCount=0,r.set(i.media,i)),i}};function zL(t,e){e===void 0&&(e=typeof window>"u"?void 0:window);var n=C_(t,e),r=m.useState(function(){return n?n.matches:!1}),i=r[0],s=r[1];return lD(function(){var o=C_(t,e);if(!o)return s(!1);var a=Th.get(e),l=function(){s(o.matches)};return o.refCount++,o.addListener(l),l(),function(){o.removeListener(l),o.refCount--,o.refCount<=0&&(a==null||a.delete(o.media)),o=void 0}},[t]),i}function jL(t){var e=Object.keys(t);function n(a,l){return a===l?l:a?a+" and "+l:l}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){var l=r(a),c=t[l];return typeof c=="number"?c=c-.2+"px":c="calc("+c+" - 0.2px)","(max-width: "+c+")"}function s(a){var l=t[a];return typeof l=="number"&&(l=l+"px"),"(min-width: "+l+")"}function o(a,l,c){var u;if(typeof a=="object")u=a,c=l,l=!0;else{var d;l=l||!0,u=(d={},d[a]=l,d)}var f=m.useMemo(function(){return Object.entries(u).reduce(function(p,g){var w=g[0],C=g[1];return(C==="up"||C===!0)&&(p=n(p,s(w))),(C==="down"||C===!0)&&(p=n(p,i(w))),p},"")},[JSON.stringify(u)]);return zL(f,c)}return o}var BL=jL({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});const HL=ht("offcanvas-body"),WL={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},VL={[en]:"show",[xn]:"show"},mg=m.forwardRef(({bsPrefix:t,className:e,children:n,...r},i)=>(t=se(t,"offcanvas"),h(Xm,{ref:i,addEndListener:qm,...r,childRef:n.ref,children:(s,o)=>m.cloneElement(n,{...o,className:Q(e,n.props.className,(s===en||s===da)&&`${t}-toggling`,VL[s])})})));mg.defaultProps=WL;mg.displayName="OffcanvasToggling";const GL=mg,KL={closeLabel:"Close",closeButton:!1},gg=m.forwardRef(({bsPrefix:t,className:e,...n},r)=>(t=se(t,"offcanvas-header"),h(cg,{ref:r,...n,className:Q(e,t)})));gg.displayName="OffcanvasHeader";gg.defaultProps=KL;const YL=gg,qL=Au("h5"),QL=ht("offcanvas-title",{Component:qL}),XL={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};function JL(t){return h(GL,{...t})}function ZL(t){return h(La,{...t})}const vg=m.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i,responsive:s,show:o,backdrop:a,keyboard:l,scroll:c,onEscapeKeyDown:u,onShow:d,onHide:f,container:p,autoFocus:g,enforceFocus:w,restoreFocus:C,restoreFocusOptions:v,onEntered:y,onExit:_,onExiting:E,onEnter:S,onEntering:b,onExited:k,backdropClassName:T,manager:D,renderStaticNode:M,...H},Y)=>{const te=m.useRef();t=se(t,"offcanvas");const{onToggle:J}=m.useContext(Bs)||{},[X,le]=m.useState(!1),j=BL(s||"xs","up");m.useEffect(()=>{le(s?o&&!j:o)},[o,s,j]);const I=Wt(()=>{J==null||J(),f==null||f()}),O=m.useMemo(()=>({onHide:I}),[I]);function P(){return D||(c?(te.current||(te.current=new US({handleContainerOverflow:!1})),te.current):zS())}const W=(me,...Re)=>{me&&(me.style.visibility="visible"),S==null||S(me,...Re)},V=(me,...Re)=>{me&&(me.style.visibility=""),k==null||k(...Re)},Te=m.useCallback(me=>h("div",{...me,className:Q(`${t}-backdrop`,T)}),[T,t]),Se=me=>h("div",{...me,...H,className:Q(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return N(Lo,{children:[!X&&(s||M)&&Se({}),h(lg.Provider,{value:O,children:h($S,{show:X,ref:Y,backdrop:a,container:p,keyboard:l,autoFocus:g,enforceFocus:w&&!c,restoreFocus:C,restoreFocusOptions:v,onEscapeKeyDown:u,onShow:d,onHide:I,onEnter:W,onEntering:b,onEntered:y,onExit:_,onExiting:E,onExited:V,manager:P(),transition:JL,backdropTransition:ZL,renderBackdrop:Te,renderDialog:Se})})]})});vg.displayName="Offcanvas";vg.defaultProps=XL;const Ul=Object.assign(vg,{Body:HL,Header:YL,Title:QL}),KS=m.forwardRef((t,e)=>{const n=m.useContext(Bs);return h(Ul,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});KS.displayName="NavbarOffcanvas";const e3=KS,t3=ht("navbar-text",{Component:"span"}),n3={expand:!0,variant:"light",collapseOnSelect:!1},yg=m.forwardRef((t,e)=>{const{bsPrefix:n,expand:r,variant:i,bg:s,fixed:o,sticky:a,className:l,as:c="nav",expanded:u,onToggle:d,onSelect:f,collapseOnSelect:p,...g}=Gm(t,{expanded:"onToggle"}),w=se(n,"navbar"),C=m.useCallback((..._)=>{f==null||f(..._),p&&u&&(d==null||d(!1))},[f,p,u,d]);g.role===void 0&&c!=="nav"&&(g.role="navigation");let v=`${w}-expand`;typeof r=="string"&&(v=`${v}-${r}`);const y=m.useMemo(()=>({onToggle:()=>d==null?void 0:d(!u),bsPrefix:w,expanded:!!u,expand:r}),[w,u,r,d]);return h(Bs.Provider,{value:y,children:h(Si.Provider,{value:C,children:h(c,{ref:e,...g,className:Q(l,w,r&&v,i&&`${w}-${i}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});yg.defaultProps=n3;yg.displayName="Navbar";const dl=Object.assign(yg,{Brand:LL,Collapse:FL,Offcanvas:e3,Text:t3,Toggle:UL}),YS=m.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=se(t,"row"),o=Km(),a=Ym(),l=`${s}-cols`,c=[];return o.forEach(u=>{const d=r[u];delete r[u];let f;d!=null&&typeof d=="object"?{cols:f}=d:f=d;const p=u!==a?`-${u}`:"";f!=null&&c.push(`${l}${p}-${f}`)}),h(n,{ref:i,...r,className:Q(e,s,...c)})});YS.displayName="Row";const Ji=YS,qS=m.forwardRef(({bsPrefix:t,variant:e,animation:n="border",size:r,as:i="div",className:s,...o},a)=>{t=se(t,"spinner");const l=`${t}-${n}`;return h(i,{ref:a,...o,className:Q(s,l,r&&`${l}-${r}`,e&&`text-${e}`)})});qS.displayName="Spinner";const QS=qS;function r3(t,e=JC,n=ZC){const r=[];return Object.entries(t).forEach(([i,s])=>{s!=null&&(typeof s=="object"?e.forEach(o=>{const a=s[o];if(a!=null){const l=o!==n?`-${o}`:"";r.push(`${i}${l}-${a}`)}}):r.push(`${i}-${s}`))}),r}const XS=m.forwardRef(({as:t="div",bsPrefix:e,className:n,direction:r,gap:i,...s},o)=>{e=se(e,r==="horizontal"?"hstack":"vstack");const a=Km(),l=Ym();return h(t,{...s,ref:o,className:Q(n,e,...r3({gap:i,breakpoints:a,minBreakpoint:l}))})});XS.displayName="Stack";const S_=XS;function JS({children:t,in:e,mountOnEnter:n,unmountOnExit:r}){const i=m.useRef(e);return m.useEffect(()=>{e&&(i.current=!0)},[e]),e?t:r||!i.current&&n?null:t}const i3=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],s3=["activeKey","getControlledId","getControllerId"],o3=["as"];function Ih(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ZS(t){let{active:e,eventKey:n,mountOnEnter:r,transition:i,unmountOnExit:s,role:o="tabpanel",onEnter:a,onEntering:l,onEntered:c,onExit:u,onExiting:d,onExited:f}=t,p=Ih(t,i3);const g=m.useContext(Hs);if(!g)return[Object.assign({},p,{role:o}),{eventKey:n,isActive:e,mountOnEnter:r,transition:i,unmountOnExit:s,onEnter:a,onEntering:l,onEntered:c,onExit:u,onExiting:d,onExited:f}];const{activeKey:w,getControlledId:C,getControllerId:v}=g,y=Ih(g,s3),_=fa(n);return[Object.assign({},p,{role:o,id:C(n),"aria-labelledby":v(n)}),{eventKey:n,isActive:e==null&&_!=null?fa(w)===_:e,transition:i||y.transition,mountOnEnter:r??y.mountOnEnter,unmountOnExit:s??y.unmountOnExit,onEnter:a,onEntering:l,onEntered:c,onExit:u,onExiting:d,onExited:f}]}const eb=m.forwardRef((t,e)=>{let{as:n="div"}=t,r=Ih(t,o3);const[i,{isActive:s,onEnter:o,onEntering:a,onEntered:l,onExit:c,onExiting:u,onExited:d,mountOnEnter:f,unmountOnExit:p,transition:g=JS}]=ZS(r);return h(Hs.Provider,{value:null,children:h(Si.Provider,{value:null,children:h(g,{in:s,onEnter:o,onEntering:a,onEntered:l,onExit:c,onExiting:u,onExited:d,mountOnEnter:f,unmountOnExit:p,children:h(n,Object.assign({},i,{ref:e,hidden:!s,"aria-hidden":!s}))})})})});eb.displayName="TabPanel";const _g=t=>{const{id:e,generateChildId:n,onSelect:r,activeKey:i,defaultActiveKey:s,transition:o,mountOnEnter:a,unmountOnExit:l,children:c}=t,[u,d]=XC(i,s,r),f=HD(e),p=m.useMemo(()=>n||((w,C)=>f?`${f}-${C}-${w}`:null),[f,n]),g=m.useMemo(()=>({onSelect:d,activeKey:u,transition:o,mountOnEnter:a||!1,unmountOnExit:l||!1,getControlledId:w=>p(w,"tabpane"),getControllerId:w=>p(w,"tab")}),[d,u,o,a,l,p]);return h(Hs.Provider,{value:g,children:h(Si.Provider,{value:d||null,children:c})})};_g.Panel=eb;function wg(t){return typeof t=="boolean"?t?La:JS:t}const tb=({transition:t,...e})=>h(_g,{...e,transition:wg(t)});tb.displayName="TabContainer";const a3=tb,nb=ht("tab-content"),rb=m.forwardRef(({bsPrefix:t,transition:e,...n},r)=>{const[{className:i,as:s="div",...o},{isActive:a,onEnter:l,onEntering:c,onEntered:u,onExit:d,onExiting:f,onExited:p,mountOnEnter:g,unmountOnExit:w,transition:C=La}]=ZS({...n,transition:wg(e)}),v=se(t,"tab-pane");return h(Hs.Provider,{value:null,children:h(Si.Provider,{value:null,children:h(C,{in:a,onEnter:l,onEntering:c,onEntered:u,onExit:d,onExiting:f,onExited:p,mountOnEnter:g,unmountOnExit:w,children:h(s,{...o,ref:r,className:Q(i,v,a&&"active")})})})})});rb.displayName="TabPane";const ib=rb,l3={eventKey:U.oneOfType([U.string,U.number]),title:U.node.isRequired,disabled:U.bool,tabClassName:U.string,tabAttrs:U.object},sb=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};sb.propTypes=l3;const b_=Object.assign(sb,{Container:a3,Content:nb,Pane:ib}),c3=m.forwardRef(({bsPrefix:t,className:e,striped:n,bordered:r,borderless:i,hover:s,size:o,variant:a,responsive:l,...c},u)=>{const d=se(t,"table"),f=Q(e,d,a&&`${d}-${a}`,o&&`${d}-${o}`,n&&`${d}-${typeof n=="string"?`striped-${n}`:"striped"}`,r&&`${d}-bordered`,i&&`${d}-borderless`,s&&`${d}-hover`),p=h("table",{...c,className:f,ref:u});if(l){let g=`${d}-responsive`;return typeof l=="string"&&(g=`${g}-${l}`),h("div",{className:g,children:p})}return p}),u3=c3,d3={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1};function f3(t){let e;return LD(t,n=>{e==null&&(e=n.props.eventKey)}),e}function h3(t){const{title:e,eventKey:n,disabled:r,tabClassName:i,tabAttrs:s,id:o}=t.props;return e==null?null:h(HS,{as:"li",role:"presentation",children:h(WS,{as:"button",type:"button",eventKey:n,disabled:r,id:o,className:i,...s,children:e})})}const Eg=t=>{const{id:e,onSelect:n,transition:r,mountOnEnter:i,unmountOnExit:s,children:o,activeKey:a=f3(o),...l}=Gm(t,{activeKey:"onSelect"});return N(_g,{id:e,activeKey:a,onSelect:n,transition:wg(r),mountOnEnter:i,unmountOnExit:s,children:[h(ho,{...l,role:"tablist",as:"ul",children:m_(o,h3)}),h(nb,{children:m_(o,c=>{const u={...c.props};return delete u.title,delete u.disabled,delete u.tabClassName,delete u.tabAttrs,h(ib,{...u})})})]})};Eg.defaultProps=d3;Eg.displayName="Tabs";function k_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?k_(Object(n),!0).forEach(function(r){Ge(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function jc(t){return jc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jc(t)}function p3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function T_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m3(t,e,n){return e&&T_(t.prototype,e),n&&T_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ge(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Cg(t,e){return v3(t)||_3(t,e)||ob(t,e)||E3()}function Fa(t){return g3(t)||y3(t)||ob(t)||w3()}function g3(t){if(Array.isArray(t))return Nh(t)}function v3(t){if(Array.isArray(t))return t}function y3(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _3(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function ob(t,e){if(t){if(typeof t=="string")return Nh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nh(t,e)}}function Nh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function w3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var I_=function(){},Sg={},ab={},lb=null,cb={mark:I_,measure:I_};try{typeof window<"u"&&(Sg=window),typeof document<"u"&&(ab=document),typeof MutationObserver<"u"&&(lb=MutationObserver),typeof performance<"u"&&(cb=performance)}catch{}var C3=Sg.navigator||{},N_=C3.userAgent,x_=N_===void 0?"":N_,$r=Sg,Ce=ab,R_=lb,fl=cb;$r.document;var Zn=!!Ce.documentElement&&!!Ce.head&&typeof Ce.addEventListener=="function"&&typeof Ce.createElement=="function",ub=~x_.indexOf("MSIE")||~x_.indexOf("Trident/"),hl,pl,ml,gl,vl,Gn="___FONT_AWESOME___",xh=16,db="fa",fb="svg-inline--fa",bi="data-fa-i2svg",Rh="data-fa-pseudo-element",S3="data-fa-pseudo-element-pending",bg="data-prefix",kg="data-icon",P_="fontawesome-i2svg",b3="async",k3=["HTML","HEAD","STYLE","SCRIPT"],hb=function(){try{return!0}catch{return!1}}(),we="classic",Me="sharp",Tg=[we,Me];function $a(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[we]}})}var ha=$a((hl={},Ge(hl,we,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ge(hl,Me,{fa:"solid",fass:"solid","fa-solid":"solid"}),hl)),pa=$a((pl={},Ge(pl,we,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ge(pl,Me,{solid:"fass"}),pl)),ma=$a((ml={},Ge(ml,we,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ge(ml,Me,{fass:"fa-solid"}),ml)),T3=$a((gl={},Ge(gl,we,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ge(gl,Me,{"fa-solid":"fass"}),gl)),I3=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,pb="fa-layers-text",N3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,x3=$a((vl={},Ge(vl,we,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ge(vl,Me,{900:"fass"}),vl)),mb=[1,2,3,4,5,6,7,8,9,10],R3=mb.concat([11,12,13,14,15,16,17,18,19,20]),P3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ni={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ga=new Set;Object.keys(pa[we]).map(ga.add.bind(ga));Object.keys(pa[Me]).map(ga.add.bind(ga));var O3=[].concat(Tg,Fa(ga),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ni.GROUP,ni.SWAP_OPACITY,ni.PRIMARY,ni.SECONDARY]).concat(mb.map(function(t){return"".concat(t,"x")})).concat(R3.map(function(t){return"w-".concat(t)})),Po=$r.FontAwesomeConfig||{};function A3(t){var e=Ce.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function M3(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ce&&typeof Ce.querySelector=="function"){var D3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];D3.forEach(function(t){var e=Cg(t,2),n=e[0],r=e[1],i=M3(A3(n));i!=null&&(Po[r]=i)})}var gb={styleDefault:"solid",familyDefault:"classic",cssPrefix:db,replacementClass:fb,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Po.familyPrefix&&(Po.cssPrefix=Po.familyPrefix);var Rs=L(L({},gb),Po);Rs.autoReplaceSvg||(Rs.observeMutations=!1);var z={};Object.keys(gb).forEach(function(t){Object.defineProperty(z,t,{enumerable:!0,set:function(n){Rs[t]=n,Oo.forEach(function(r){return r(z)})},get:function(){return Rs[t]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(e){Rs.cssPrefix=e,Oo.forEach(function(n){return n(z)})},get:function(){return Rs.cssPrefix}});$r.FontAwesomeConfig=z;var Oo=[];function L3(t){return Oo.push(t),function(){Oo.splice(Oo.indexOf(t),1)}}var sr=xh,mn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function F3(t){if(!(!t||!Zn)){var e=Ce.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ce.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ce.head.insertBefore(e,r),t}}var $3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function va(){for(var t=12,e="";t-- >0;)e+=$3[Math.random()*62|0];return e}function Ws(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ig(t){return t.classList?Ws(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function vb(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function U3(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(vb(t[n]),'" ')},"").trim()}function Du(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Ng(t){return t.size!==mn.size||t.x!==mn.x||t.y!==mn.y||t.rotate!==mn.rotate||t.flipX||t.flipY}function z3(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function j3(t){var e=t.transform,n=t.width,r=n===void 0?xh:n,i=t.height,s=i===void 0?xh:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&ub?l+="translate(".concat(e.x/sr-r/2,"em, ").concat(e.y/sr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/sr,"em), calc(-50% + ").concat(e.y/sr,"em)) "):l+="translate(".concat(e.x/sr,"em, ").concat(e.y/sr,"em) "),l+="scale(".concat(e.size/sr*(e.flipX?-1:1),", ").concat(e.size/sr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var B3=`:root, :host {
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
}`;function yb(){var t=db,e=fb,n=z.cssPrefix,r=z.replacementClass,i=B3;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var O_=!1;function Fd(){z.autoAddCss&&!O_&&(F3(yb()),O_=!0)}var H3={mixout:function(){return{dom:{css:yb,insertCss:Fd}}},hooks:function(){return{beforeDOMElementCreation:function(){Fd()},beforeI2svg:function(){Fd()}}}},Kn=$r||{};Kn[Gn]||(Kn[Gn]={});Kn[Gn].styles||(Kn[Gn].styles={});Kn[Gn].hooks||(Kn[Gn].hooks={});Kn[Gn].shims||(Kn[Gn].shims=[]);var rn=Kn[Gn],_b=[],W3=function t(){Ce.removeEventListener("DOMContentLoaded",t),Bc=1,_b.map(function(e){return e()})},Bc=!1;Zn&&(Bc=(Ce.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ce.readyState),Bc||Ce.addEventListener("DOMContentLoaded",W3));function V3(t){Zn&&(Bc?setTimeout(t,0):_b.push(t))}function Ua(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?vb(t):"<".concat(e," ").concat(U3(r),">").concat(s.map(Ua).join(""),"</").concat(e,">")}function A_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var G3=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},$d=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?G3(n,i):n,l,c,u;for(r===void 0?(l=1,u=e[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function K3(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ph(t){var e=K3(t);return e.length===1?e[0].toString(16):null}function Y3(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function M_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Oh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=M_(e);typeof rn.hooks.addPack=="function"&&!i?rn.hooks.addPack(t,M_(e)):rn.styles[t]=L(L({},rn.styles[t]||{}),s),t==="fas"&&Oh("fa",e)}var yl,_l,wl,Zi=rn.styles,q3=rn.shims,Q3=(yl={},Ge(yl,we,Object.values(ma[we])),Ge(yl,Me,Object.values(ma[Me])),yl),xg=null,wb={},Eb={},Cb={},Sb={},bb={},X3=(_l={},Ge(_l,we,Object.keys(ha[we])),Ge(_l,Me,Object.keys(ha[Me])),_l);function J3(t){return~O3.indexOf(t)}function Z3(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!J3(i)?i:null}var kb=function(){var e=function(s){return $d(Zi,function(o,a,l){return o[l]=$d(a,s,{}),o},{})};wb=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Eb=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),bb=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Zi||z.autoFetchSvg,r=$d(q3,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Cb=r.names,Sb=r.unicodes,xg=Lu(z.styleDefault,{family:z.familyDefault})};L3(function(t){xg=Lu(t.styleDefault,{family:z.familyDefault})});kb();function Rg(t,e){return(wb[t]||{})[e]}function e5(t,e){return(Eb[t]||{})[e]}function ri(t,e){return(bb[t]||{})[e]}function Tb(t){return Cb[t]||{prefix:null,iconName:null}}function t5(t){var e=Sb[t],n=Rg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ur(){return xg}var Pg=function(){return{prefix:null,iconName:null,rest:[]}};function Lu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?we:n,i=ha[r][t],s=pa[r][t]||pa[r][i],o=t in rn.styles?t:null;return s||o||null}var D_=(wl={},Ge(wl,we,Object.keys(ma[we])),Ge(wl,Me,Object.keys(ma[Me])),wl);function Fu(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ge(e,we,"".concat(z.cssPrefix,"-").concat(we)),Ge(e,Me,"".concat(z.cssPrefix,"-").concat(Me)),e),o=null,a=we;(t.includes(s[we])||t.some(function(c){return D_[we].includes(c)}))&&(a=we),(t.includes(s[Me])||t.some(function(c){return D_[Me].includes(c)}))&&(a=Me);var l=t.reduce(function(c,u){var d=Z3(z.cssPrefix,u);if(Zi[u]?(u=Q3[a].includes(u)?T3[a][u]:u,o=u,c.prefix=u):X3[a].indexOf(u)>-1?(o=u,c.prefix=Lu(u,{family:a})):d?c.iconName=d:u!==z.replacementClass&&u!==s[we]&&u!==s[Me]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var f=o==="fa"?Tb(c.iconName):{},p=ri(c.prefix,c.iconName);f.prefix&&(o=null),c.iconName=f.iconName||p||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!Zi.far&&Zi.fas&&!z.autoFetchSvg&&(c.prefix="fas")}return c},Pg());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Me&&(Zi.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=ri(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ur()||"fas"),l}var n5=function(){function t(){p3(this,t),this.definitions={}}return m3(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=L(L({},n.definitions[a]||{}),o[a]),Oh(a,o[a]);var l=ma[we][a];l&&Oh(l,o[a]),kb()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(n[a][d]=c)}),n[a][l]=c}),n}}]),t}(),L_=[],es={},ps={},r5=Object.keys(ps);function i5(t,e){var n=e.mixoutsTo;return L_=t,es={},Object.keys(ps).forEach(function(r){r5.indexOf(r)===-1&&delete ps[r]}),L_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),jc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){es[o]||(es[o]=[]),es[o].push(s[o])})}r.provides&&r.provides(ps)}),n}function Ah(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=es[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ki(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=es[t]||[];i.forEach(function(s){s.apply(null,n)})}function Yn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ps[t]?ps[t].apply(null,e):void 0}function Mh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ur();if(e)return e=ri(n,e)||e,A_(Ib.definitions,n,e)||A_(rn.styles,n,e)}var Ib=new n5,s5=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,ki("noAuto")},o5={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Zn?(ki("beforeI2svg",e),Yn("pseudoElements2svg",e),Yn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,V3(function(){l5({autoReplaceSvgRoot:n}),ki("watch",e)})}},a5={icon:function(e){if(e===null)return null;if(jc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ri(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Lu(e[0]);return{prefix:r,iconName:ri(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(z.cssPrefix,"-"))>-1||e.match(I3))){var i=Fu(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ur(),iconName:ri(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Ur();return{prefix:s,iconName:ri(s,e)||e}}}},zt={noAuto:s5,config:z,dom:o5,parse:a5,library:Ib,findIconDefinition:Mh,toHtml:Ua},l5=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ce:n;(Object.keys(rn.styles).length>0||z.autoFetchSvg)&&Zn&&z.autoReplaceSvg&&zt.dom.i2svg({node:r})};function $u(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ua(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Zn){var r=Ce.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function c5(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Ng(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=Du(L(L({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function u5(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:o}),children:r}]}]}function Og(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,d=t.extra,f=t.watchable,p=f===void 0?!1:f,g=r.found?r:n,w=g.width,C=g.height,v=i==="fak",y=[z.replacementClass,s?"".concat(z.cssPrefix,"-").concat(s):""].filter(function(D){return d.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(d.classes).join(" "),_={children:[],attributes:L(L({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:y,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(C)})},E=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/C*16*.0625,"em")}:{};p&&(_.attributes[bi]=""),l&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(u||va())},children:[l]}),delete _.attributes.title);var S=L(L({},_),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:L(L({},E),d.styles)}),b=r.found&&n.found?Yn("generateAbstractMask",S)||{children:[],attributes:{}}:Yn("generateAbstractIcon",S)||{children:[],attributes:{}},k=b.children,T=b.attributes;return S.children=k,S.attributes=T,a?u5(S):c5(S)}function F_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=L(L(L({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[bi]="");var u=L({},o.styles);Ng(i)&&(u.transform=j3({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var d=Du(u);d.length>0&&(c.style=d);var f=[];return f.push({tag:"span",attributes:c,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function d5(t){var e=t.content,n=t.title,r=t.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Du(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ud=rn.styles;function Dh(t){var e=t[0],n=t[1],r=t.slice(4),i=Cg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(ni.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(ni.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(ni.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var f5={found:!1,width:512,height:512};function h5(t,e){!hb&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Lh(t,e){var n=e;return e==="fa"&&z.styleDefault!==null&&(e=Ur()),new Promise(function(r,i){if(Yn("missingIconAbstract"),n==="fa"){var s=Tb(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Ud[e]&&Ud[e][t]){var o=Ud[e][t];return r(Dh(o))}h5(t,e),r(L(L({},f5),{},{icon:z.showMissingIcons&&t?Yn("missingIconAbstract")||{}:{}}))})}var $_=function(){},Fh=z.measurePerformance&&fl&&fl.mark&&fl.measure?fl:{mark:$_,measure:$_},po='FA "6.2.1"',p5=function(e){return Fh.mark("".concat(po," ").concat(e," begins")),function(){return Nb(e)}},Nb=function(e){Fh.mark("".concat(po," ").concat(e," ends")),Fh.measure("".concat(po," ").concat(e),"".concat(po," ").concat(e," begins"),"".concat(po," ").concat(e," ends"))},Ag={begin:p5,end:Nb},zl=function(){};function U_(t){var e=t.getAttribute?t.getAttribute(bi):null;return typeof e=="string"}function m5(t){var e=t.getAttribute?t.getAttribute(bg):null,n=t.getAttribute?t.getAttribute(kg):null;return e&&n}function g5(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function v5(){if(z.autoReplaceSvg===!0)return jl.replace;var t=jl[z.autoReplaceSvg];return t||jl.replace}function y5(t){return Ce.createElementNS("http://www.w3.org/2000/svg",t)}function _5(t){return Ce.createElement(t)}function xb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?y5:_5:n;if(typeof t=="string")return Ce.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(xb(o,{ceFn:r}))}),i}function w5(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var jl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(xb(i),n)}),n.getAttribute(bi)===null&&z.keepOriginalSource){var r=Ce.createComment(w5(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Ig(n).indexOf(z.replacementClass))return jl.replace(e);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Ua(a)}).join(`
`);n.setAttribute(bi,""),n.innerHTML=o}};function z_(t){t()}function Rb(t,e){var n=typeof e=="function"?e:zl;if(t.length===0)n();else{var r=z_;z.mutateApproach===b3&&(r=$r.requestAnimationFrame||z_),r(function(){var i=v5(),s=Ag.begin("mutate");t.map(i),s(),n()})}}var Mg=!1;function Pb(){Mg=!0}function $h(){Mg=!1}var Hc=null;function j_(t){if(R_&&z.observeMutations){var e=t.treeCallback,n=e===void 0?zl:e,r=t.nodeCallback,i=r===void 0?zl:r,s=t.pseudoElementsCallback,o=s===void 0?zl:s,a=t.observeMutationsRoot,l=a===void 0?Ce:a;Hc=new R_(function(c){if(!Mg){var u=Ur();Ws(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!U_(d.addedNodes[0])&&(z.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&z.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&U_(d.target)&&~P3.indexOf(d.attributeName))if(d.attributeName==="class"&&m5(d.target)){var f=Fu(Ig(d.target)),p=f.prefix,g=f.iconName;d.target.setAttribute(bg,p||u),g&&d.target.setAttribute(kg,g)}else g5(d.target)&&i(d.target)})}}),Zn&&Hc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function E5(){Hc&&Hc.disconnect()}function C5(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function S5(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Fu(Ig(t));return i.prefix||(i.prefix=Ur()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=e5(i.prefix,t.innerText)||Rg(i.prefix,Ph(t.innerText))),!i.iconName&&z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function b5(t){var e=Ws(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||va()):(e["aria-hidden"]="true",e.focusable="false")),e}function k5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function B_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=S5(t),r=n.iconName,i=n.prefix,s=n.rest,o=b5(t),a=Ah("parseNodeAttributes",{},t),l=e.styleParser?C5(t):[];return L({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:mn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var T5=rn.styles;function Ob(t){var e=z.autoReplaceSvg==="nest"?B_(t,{styleParser:!1}):B_(t);return~e.extra.classes.indexOf(pb)?Yn("generateLayersText",t,e):Yn("generateSvgReplacementMutation",t,e)}var zr=new Set;Tg.map(function(t){zr.add("fa-".concat(t))});Object.keys(ha[we]).map(zr.add.bind(zr));Object.keys(ha[Me]).map(zr.add.bind(zr));zr=Fa(zr);function H_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Zn)return Promise.resolve();var n=Ce.documentElement.classList,r=function(d){return n.add("".concat(P_,"-").concat(d))},i=function(d){return n.remove("".concat(P_,"-").concat(d))},s=z.autoFetchSvg?zr:Tg.map(function(u){return"fa-".concat(u)}).concat(Object.keys(T5));s.includes("fa")||s.push("fa");var o=[".".concat(pb,":not([").concat(bi,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(bi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Ws(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ag.begin("onTree"),c=a.reduce(function(u,d){try{var f=Ob(d);f&&u.push(f)}catch(p){hb||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,d){Promise.all(c).then(function(f){Rb(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(f){l(),d(f)})})}function I5(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ob(t).then(function(n){n&&Rb([n],e)})}function N5(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Mh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Mh(i||{})),t(r,L(L({},n),{},{mask:i}))}}var x5=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?mn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,d=n.title,f=d===void 0?null:d,p=n.titleId,g=p===void 0?null:p,w=n.classes,C=w===void 0?[]:w,v=n.attributes,y=v===void 0?{}:v,_=n.styles,E=_===void 0?{}:_;if(e){var S=e.prefix,b=e.iconName,k=e.icon;return $u(L({type:"icon"},e),function(){return ki("beforeDOMElementCreation",{iconDefinition:e,params:n}),z.autoA11y&&(f?y["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(g||va()):(y["aria-hidden"]="true",y.focusable="false")),Og({icons:{main:Dh(k),mask:l?Dh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:b,transform:L(L({},mn),i),symbol:o,title:f,maskId:u,titleId:g,extra:{attributes:y,styles:E,classes:C}})})}},R5={mixout:function(){return{icon:N5(x5)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=H_,n.nodeCallback=I5,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ce:r,s=n.callback,o=s===void 0?function(){}:s;return H_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,d=r.maskId,f=r.extra;return new Promise(function(p,g){Promise.all([Lh(i,a),u.iconName?Lh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var C=Cg(w,2),v=C[0],y=C[1];p([n,Og({icons:{main:v,mask:y},prefix:a,iconName:i,transform:l,symbol:c,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Du(a);l.length>0&&(i.style=l);var c;return Ng(o)&&(c=Yn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},P5={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return $u({type:"layer"},function(){ki("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(Fa(s)).join(" ")},children:o}]})}}}},O5={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,d=u===void 0?{}:u;return $u({type:"counter",content:n},function(){return ki("beforeDOMElementCreation",{content:n,params:r}),d5({content:n.toString(),title:s,extra:{attributes:c,styles:d,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(Fa(a))}})})}}}},A5={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?mn:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,d=u===void 0?{}:u,f=r.styles,p=f===void 0?{}:f;return $u({type:"text",content:n},function(){return ki("beforeDOMElementCreation",{content:n,params:r}),F_({content:n,transform:L(L({},mn),s),title:a,extra:{attributes:d,styles:p,classes:["".concat(z.cssPrefix,"-layers-text")].concat(Fa(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(ub){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return z.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,F_({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},M5=new RegExp('"',"ug"),W_=[1105920,1112319];function D5(t){var e=t.replace(M5,""),n=Y3(e,0),r=n>=W_[0]&&n<=W_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ph(i?e[0]:e),isSecondary:r||i}}function V_(t,e){var n="".concat(S3).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Ws(t.children),o=s.filter(function(k){return k.getAttribute(Rh)===e})[0],a=$r.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(N3),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Me:we,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?pa[f][l[2].toLowerCase()]:x3[f][c],g=D5(d),w=g.value,C=g.isSecondary,v=l[0].startsWith("FontAwesome"),y=Rg(p,w),_=y;if(v){var E=t5(w);E.iconName&&E.prefix&&(y=E.iconName,p=E.prefix)}if(y&&!C&&(!o||o.getAttribute(bg)!==p||o.getAttribute(kg)!==_)){t.setAttribute(n,_),o&&t.removeChild(o);var S=k5(),b=S.extra;b.attributes[Rh]=e,Lh(y,p).then(function(k){var T=Og(L(L({},S),{},{icons:{main:k,mask:Pg()},prefix:p,iconName:_,extra:b,watchable:!0})),D=Ce.createElement("svg");e==="::before"?t.insertBefore(D,t.firstChild):t.appendChild(D),D.outerHTML=T.map(function(M){return Ua(M)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function L5(t){return Promise.all([V_(t,"::before"),V_(t,"::after")])}function F5(t){return t.parentNode!==document.head&&!~k3.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Rh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function G_(t){if(Zn)return new Promise(function(e,n){var r=Ws(t.querySelectorAll("*")).filter(F5).map(L5),i=Ag.begin("searchPseudoElements");Pb(),Promise.all(r).then(function(){i(),$h(),e()}).catch(function(){i(),$h(),n()})})}var $5={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=G_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ce:r;z.searchPseudoElements&&G_(i)}}},K_=!1,U5={mixout:function(){return{dom:{unwatch:function(){Pb(),K_=!0}}}},hooks:function(){return{bootstrap:function(){j_(Ah("mutationObserverCallbacks",{}))},noAuto:function(){E5()},watch:function(n){var r=n.observeMutationsRoot;K_?$h():j_(Ah("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Y_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},z5={mixout:function(){return{parse:{transform:function(n){return Y_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Y_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:d,path:f};return{tag:"g",attributes:L({},p.outer),children:[{tag:"g",attributes:L({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),p.path)}]}]}}}},zd={x:0,y:0,width:"100%",height:"100%"};function q_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function j5(t){return t.tag==="g"?t.children:[t]}var B5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Fu(i.split(" ").map(function(o){return o.trim()})):Pg();return s.prefix||(s.prefix=Ur()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,d=o.width,f=o.icon,p=z3({transform:l,containerWidth:d,iconWidth:c}),g={tag:"rect",attributes:L(L({},zd),{},{fill:"white"})},w=u.children?{children:u.children.map(q_)}:{},C={tag:"g",attributes:L({},p.inner),children:[q_(L({tag:u.tag,attributes:L(L({},u.attributes),p.path)},w))]},v={tag:"g",attributes:L({},p.outer),children:[C]},y="mask-".concat(a||va()),_="clip-".concat(a||va()),E={tag:"mask",attributes:L(L({},zd),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,v]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:j5(f)},E]};return r.push(S,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(y,")")},zd)}),{children:r,attributes:i}}}},H5={provides:function(e){var n=!1;$r.matchMedia&&(n=$r.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:L(L({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},W5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},V5=[H3,R5,P5,O5,A5,$5,U5,z5,B5,H5,W5];i5(V5,{mixoutsTo:zt});zt.noAuto;zt.config;zt.library;zt.dom;var Uh=zt.parse;zt.findIconDefinition;zt.toHtml;var G5=zt.icon;zt.layer;zt.text;zt.counter;function Q_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function _r(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Q_(Object(n),!0).forEach(function(r){ts(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Wc(t){return Wc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wc(t)}function ts(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function K5(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Y5(t,e){if(t==null)return{};var n=K5(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function zh(t){return q5(t)||Q5(t)||X5(t)||J5()}function q5(t){if(Array.isArray(t))return jh(t)}function Q5(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function X5(t,e){if(t){if(typeof t=="string")return jh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jh(t,e)}}function jh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function J5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z5(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,d=t.pulse,f=t.fixedWidth,p=t.inverse,g=t.border,w=t.listItem,C=t.flip,v=t.size,y=t.rotation,_=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":f,"fa-inverse":p,"fa-border":g,"fa-li":w,"fa-flip":C===!0,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},ts(e,"fa-".concat(v),typeof v<"u"&&v!==null),ts(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),ts(e,"fa-pull-".concat(_),typeof _<"u"&&_!==null),ts(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(S){return E[S]?S:null}).filter(function(S){return S})}function e6(t){return t=t-0,t===t}function Ab(t){return e6(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var t6=["style"];function n6(t){return t.charAt(0).toUpperCase()+t.slice(1)}function r6(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Ab(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[n6(i)]=s:e[i]=s,e},{})}function Mb(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Mb(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=r6(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[Ab(c)]=u}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=Y5(n,t6);return i.attrs.style=_r(_r({},i.attrs.style),o),t.apply(void 0,[e.tag,_r(_r({},i.attrs),a)].concat(zh(r)))}var Db=!1;try{Db=!0}catch{}function i6(){if(!Db&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function X_(t){if(t&&Wc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Uh.icon)return Uh.icon(t);if(t===null)return null;if(t&&Wc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function jd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ts({},t,e):{}}var gt=G.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,c=X_(n),u=jd("classes",[].concat(zh(Z5(t)),zh(s.split(" ")))),d=jd("transform",typeof t.transform=="string"?Uh.transform(t.transform):t.transform),f=jd("mask",X_(r)),p=G5(c,_r(_r(_r(_r({},u),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return i6("Could not find icon",c),null;var g=p.abstract,w={ref:e};return Object.keys(t).forEach(function(C){gt.defaultProps.hasOwnProperty(C)||(w[C]=t[C])}),s6(g[0],w)});gt.displayName="FontAwesomeIcon";gt.propTypes={beat:U.bool,border:U.bool,beatFade:U.bool,bounce:U.bool,className:U.string,fade:U.bool,flash:U.bool,mask:U.oneOfType([U.object,U.array,U.string]),maskId:U.string,fixedWidth:U.bool,inverse:U.bool,flip:U.oneOf([!0,!1,"horizontal","vertical","both"]),icon:U.oneOfType([U.object,U.array,U.string]),listItem:U.bool,pull:U.oneOf(["right","left"]),pulse:U.bool,rotation:U.oneOf([0,90,180,270]),shake:U.bool,size:U.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:U.bool,spinPulse:U.bool,spinReverse:U.bool,symbol:U.oneOfType([U.bool,U.string]),title:U.string,titleId:U.string,transform:U.oneOfType([U.string,U.object]),swapOpacity:U.bool};gt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var s6=Mb.bind(null,G.createElement),o6={prefix:"fas",iconName:"people-group",icon:[640,512,[],"e533","M184 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zM568 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm8 157.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 160c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"]},a6={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"]},l6={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},c6={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"]},J_={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"]},u6={prefix:"fas",iconName:"award",icon:[384,512,[],"f559","M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80s80-35.8 80-80zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"]},d6={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};const Lb="/assets/ellipsis-47261b4d.jpg",f6=({openModal:t,cardData:e,openDeleteEventModal:n,handleSetEventToDelete:r,handleSetEventToEdit:i,openEditEventModal:s,user:o,allUsers:a,handleJoin:l,handleLeave:c,handleSetEventToShowParticipants:u,handleShowParticipantsModal:d,calculateDateObjects:f})=>{const{name:p,location:g,maxCap:w,imgSrc:C,participants:v,owner:y}=e,[_,E]=m.useState(null),[S,b]=m.useState(null),[k,T]=m.useState([]);m.useEffect(()=>{if(e&&a){let Y=[];for(let X=0;X<Math.min(5,e.participants.length);X++)Y.push({photoURL:a[e.participants[X]].photoURL,displayName:a[e.participants[X]].displayName});T(Y);let[te,J]=f(e);E(te),b(J)}},[e]);const D=()=>{r(e),n()},M=()=>{i(e),s()},H=()=>{l(e)};return h($c,{className:"card",children:N(St,{children:[N(Ji,{className:"card-top",children:[h(St,{sm:3,className:"circular-image-wrapper",children:h("img",{className:"image",src:C,alt:"image of event"})}),N(St,{sm:5,className:"card-top-detail-container",children:[h($c.Title,{className:"title",children:p}),N("h2",{className:"date-time",children:[_&&_.toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1,timeZone:"CST"})," ","—"," ",S&&S.toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1,timeZone:"CST"})]}),N("div",{className:"location",children:[h(gt,{className:"icon-width",icon:c6}),N("a",{href:`https://maps.google.com/?q=${e.location}`,className:"subheader",target:"_blank",children:[" ",e.location]})]}),N("div",{className:"see-more",children:[h(gt,{className:"icon-width",icon:l6}),h("a",{className:"subheader",onClick:()=>{t(e)},children:"See Event Details"})]})]}),h(St,{children:h(Ji,{children:h(St,{xs:12,sm:12,children:N(Ji,{children:[h(St,{xs:{span:1,offset:4},sm:{span:2,offset:0},className:"circular-image-wrapper footer-padding",children:a&&a[y]&&a[y].photoURL&&h("img",{className:"owner-profile-image",src:a[y].photoURL,alt:"image of event"})}),N(St,{xs:5,sm:9,className:"footer-padding",children:[h("h2",{className:"subheader",children:"Organized by"}),h("h3",{className:"details-text",children:a[y].displayName})]})]})})})})]}),h("hr",{className:"solid"}),N(Ji,{className:"card-middle",children:[N(St,{children:[h("h3",{className:"details-header",children:"Event Size"}),N("div",{className:"details",children:[h("div",{className:"left",children:h(gt,{className:"icon-width",icon:o6})}),h("div",{className:"right",children:h("h3",{className:"details-text",children:w})})]})]}),N(St,{children:[h("h3",{className:"details-header",children:"Spots Available"}),N("div",{className:"details",children:[h("div",{className:"left",children:h(gt,{className:"icon-width",icon:d6})}),h("div",{className:"right",children:h("h3",{className:"details-text",children:w-v.length})})]})]}),N(St,{children:[h("h3",{className:"details-header",children:"Experience Level"}),N("div",{className:"details",children:[h("div",{className:"left",children:h(gt,{className:"icon-width",icon:u6})}),h("div",{className:"right",children:h("h3",{className:"details-text",children:e.skillLevel})})]})]})]}),h("hr",{className:"solid"}),N("div",{className:"participant-list-section",children:[h("h3",{className:"participant-title",children:"Participants:"}),h("div",{children:N("p",{className:"participant-list-container",onClick:()=>{d(),u(e)},children:[k.map(Y=>{let te=Y.photoURL,J=Y.displayName;return h("img",{className:"participant-profile-image",src:te,alt:J,title:J},k.indexOf(Y))}),e.participants.length>5&&h("img",{className:"participant-profile-image",src:Lb,title:"more"})]})})]}),N("div",{className:"card-footer",children:[e.owner!==o.uid&&!e.participants.includes(o.uid)&&h(vt,{className:"event-card-button join-event-button",onClick:H,variant:"primary",size:"lg",children:"Join Event"}),y===o.uid&&h(vt,{onClick:M,variant:"warning",size:"lg",className:"event-card-button edit-event-button",children:"Edit Event"}),y===o.uid&&h(vt,{onClick:D,variant:"danger",size:"lg",className:"event-card-button delete-event-button",children:"Delete Event"}),e.participants.includes(o.uid)&&e.owner!==o.uid&&h(vt,{size:"lg",className:"event-card-button leave-event-button",onClick:()=>{c(e)},children:"Leave Event"})]})]})})};function h6({show:t,handleJoin:e,handleClose:n,data:r}){if(!r)return"";const{name:i,location:s,dateTimeString:o,desc:a}=r;return N(ae,{show:t,onHide:n,info:r,centered:!0,backdrop:"static",children:[h(ae.Header,{closeButton:!0,children:h(ae.Title,{children:i+" Details"})}),h(ae.Body,{children:h("p",{className:"modal-details",children:a})})]})}const Z_=({show:t,handleClose:e,handleSubmit:n,user:r,checkConflict:i,createConfirmationModal:s})=>{const[o,a]=m.useState({eventName:"",eventLocation:"",eventCapacity:0,imageFile:"",dateString:"",timeString:"",currentDate:new Date(new Date().getTime()-216e5).toISOString().split("T")[0],currentTime:new Date(new Date().getTime()-216e5).toISOString().split("T")[1].substring(0,5),skillLevel:"",eventDescription:"",eventDuration:""}),l=()=>{a({eventName:"",eventLocation:"",eventCapacity:0,dateString:"",timeString:"",currentDate:new Date(new Date().getTime()-60*60*1e3*6).toISOString().split("T")[0],currentTime:new Date(new Date().getTime()-60*60*1e3*6).toISOString().split("T")[1].substring(0,5),skillLevel:"",eventDescription:"",eventDuration:""}),p(!1),d(0)},c=N("div",{className:"creating-event-container",children:[h("p",{className:"creating-event-text",children:"Creating Event..."}),h("div",{className:"submission-status-icon",children:h(QS,{animation:"border",role:"status",children:h("span",{className:"visually-hidden",children:"Creating Event..."})})})]});let[u,d]=m.useState(0);const[f,p]=m.useState(!1),g=C=>{const{name:v,value:y,type:_,files:E}=C.target;a(S=>({...S,[v]:_==="file"?E[0]:y}))},w=async C=>{if(C.preventDefault(),d(1),C.currentTarget.checkValidity()===!1){C.stopPropagation(),d(0),p(!0);return}const _=new Date(`${o.dateString} ${o.timeString}`).toUTCString(),E={name:o.eventName,maxCap:parseInt(o.eventCapacity,10),location:o.eventLocation,owner:r.uid,activity:"",desc:o.eventDescription,imgSrc:"",privacy:0,participants:[],dateTimeString:_,skillLevel:o.skillLevel,duration:o.eventDuration};let[S,b]=i(E),k=!0;if(S&&(k=await s({isShow:!0,conflictingEventName:b,actionItem:"create"})),k){const T={content:`Congratulations ${r.displayName}! Your event titled '${o.eventName}' is officially live! The event is now listed on the 'All Event' page. 
        You can also find it in the 'upcoming' section of your profile page. You will receive notifications when people join or leave your event. Have fun!!!`,title:`Event "${o.eventName}" Successfully Created`,timeStamp:new Date().toUTCString()};try{await n(E,T,o.imageFile),l(),e()}catch(D){console.log(D),d(0)}}else l(),e()};return N(ae,{show:t,onHide:()=>{l(),e()},centered:!0,backdrop:"static",fullscreen:"sm-down",scrollable:"true",children:[h(ae.Header,{closeButton:!0,children:h(ae.Title,{children:"Create an event"})}),h(ae.Body,{children:N(A,{noValidate:!0,validated:f,onSubmit:w,id:"create-event-form",children:[N(A.Group,{"data-cy":"event-name",className:"mb-3",controlId:"event-name",children:[h(A.Label,{children:"Event Name"}),h(A.Control,{type:"text",name:"eventName",value:o.eventName,onChange:g,autoFocus:!0,required:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide an event name."})]}),N(A.Group,{className:"mb-3",controlId:"event-description",children:[h(A.Label,{children:"Description"}),h(A.Control,{type:"text",as:"textarea",rows:3,name:"eventDescription",value:o.eventDescription,onChange:g,autoFocus:!0})]}),N(A.Group,{className:"mb-3",controlId:"event-location",children:[h(A.Label,{children:"Location"}),h(A.Control,{type:"text",name:"eventLocation",value:o.eventLocation,onChange:g,required:!0,autoFocus:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a location."})]}),N(A.Group,{className:"mb-3",controlId:"event-capacity",children:[h(A.Label,{children:"Capacity"}),h(A.Control,{type:"number",min:"1",max:"100",step:"1",name:"eventCapacity",value:o.eventCapacity,onChange:g,required:!0,autoFocus:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a valid number of attendees."})]}),N(A.Group,{className:"mb-3",controlId:"event-date",children:[h(A.Label,{children:"Date"}),h(A.Control,{type:"date",name:"dateString",onChange:g,value:o.dateString,min:o.currentDate,autoFocus:!0,required:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a valid date."})]}),N(A.Group,{className:"mb-3",controlId:"event-time",children:[h(A.Label,{children:"Time"}),h(A.Control,{type:"time",name:"timeString",onChange:g,value:o.timeString,min:o.dateString===o.currentDate?o.currentTime:"00:00",autoFocus:!0,required:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a valid time."})]}),N(A.Group,{className:"mb-3",controlId:"event-duration",children:[h(A.Label,{children:"Duration (hour)"}),h(A.Control,{type:"number",min:"1",max:"24",step:"0.1",name:"eventDuration",value:o.eventDuration,onChange:g,required:!0,autoFocus:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a valid duration of event."})]}),N(A.Group,{className:"mb-3",controlId:"event-time",children:[h(A.Label,{children:"Skill Level:"}),N(A.Select,{"aria-label":"Default select example",value:o.skillLevel,onChange:g,name:"skillLevel",required:!0,children:[h("option",{value:"",children:"-- choose a skill level --"}),h("option",{value:"Beginner",children:"Beginner"}),h("option",{value:"Intermediate",children:"Intermediate"}),h("option",{value:"Advanced",children:"Advanced"})]}),h(A.Control.Feedback,{type:"invalid",children:"Please select a skill level"})]}),N(A.Group,{className:"mb-3",controlId:"upload-image",children:[h(A.Label,{children:"Upload Cover Image (Optional)"}),h(A.Control,{type:"file",name:"imageFile",onChange:g,accept:"image/*"})]}),h("div",{className:"submission-status",children:u===1&&c})]})}),h(ae.Footer,{children:h(vt,{variant:"primary",type:"submit",form:"create-event-form",className:"create-event-button",disabled:u!==0,children:"Create Event"})})]})};const Fb=({show:t,handleClose:e,handleDelete:n})=>{const[r,i]=m.useState(0),s=async()=>{let o=await n();i(o?1:2),i(0),e()};return N(ae,{show:t,centered:!0,backdrop:"static",onHide:e,children:[h(ae.Header,{closeButton:!0,children:h(ae.Title,{children:"Are you sure you want to delete this event?"})}),h(ae.Body,{children:N("p",{children:["Since you are the creator of this event, deleting it will delete the event for all participants. Are you sure?"," "]})}),N(ae.Footer,{children:[h(vt,{variant:"primary",onClick:s,disabled:r!==0,className:"delete-confirm-button",children:"Yes"}),h(vt,{variant:"outline-secondary",onClick:e,disabled:r!==0,className:"delete-cancel-button",children:"Cancel"})]})]})};const $b=t=>{const e=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];let n=new Date(t),r=n.toLocaleString("en-US",{timeZone:"CST",hour12:!1});const[i,s]=r.split(",").map(p=>p.trim());let[o,a,l]=i.split("/"),[c,u,d]=s.split(":");o=o.padStart(2,"0"),a=a.padStart(2,"0"),c=c.padStart(2,"0");let f=e[n.getDay()];return{month:o,day:a,year:l,hours:c,minutes:u,seconds:d,weekday:f}},Ub=({show:t,handleClose:e,handleSubmit:n,user:r,data:i,checkConflict:s,createConfirmationModal:o,allEvents:a})=>{const[l,c]=m.useState({eventName:"haha",eventLocation:"",eventCapacity:0,imageFile:"",dateString:"",timeString:"",currentDate:new Date(new Date().getTime()-216e5).toISOString().split("T")[0],currentTime:new Date(new Date().getTime()-216e5).toISOString().split("T")[1].substring(0,5),skillLevel:"",eventDescription:"",eventDuration:""});m.useEffect(()=>{u()},[i]);const u=()=>{if(i){let{month:_,day:E,year:S,hours:b,minutes:k,seconds:T}=$b(i.dateTimeString);c(D=>({...D,eventName:`${i.name}`,eventLocation:`${i.location}`,eventCapacity:`${i.maxCap}`,dateString:`${S}-${_}-${E}`,timeString:`${b}:${k}:${T}`,imageFile:null,skillLevel:i.skillLevel,eventDescription:i.desc,eventDuration:i.duration}))}},d=()=>{u(),C(!1),g(0)},f=N("div",{className:"editing-event-container",children:[h("p",{className:"editing-event-text",children:"Editing Event..."}),h("div",{className:"submission-status-icon",children:h(QS,{animation:"border",role:"status",children:h("span",{className:"visually-hidden",children:"Editing Event..."})})})]});let[p,g]=m.useState(0);const[w,C]=m.useState(!1),v=_=>{const{name:E,value:S,type:b,files:k}=_.target;c(T=>({...T,[E]:b==="file"?k[0]:S}))},y=async _=>{if(_.preventDefault(),g(1),_.currentTarget.checkValidity()===!1){_.stopPropagation(),g(0),C(!0);return}const b=new Date(`${l.dateString} ${l.timeString}`).toUTCString(),k={...i,name:l.eventName,maxCap:parseInt(l.eventCapacity,10),location:l.eventLocation,dateTimeString:b,skillLevel:l.skillLevel,desc:l.eventDescription,duration:l.eventDuration};let[T,D]=s(k),M=!0;if(T&&(M=await o({isShow:!0,conflictingEventName:D,actionItem:"create"})),M)try{const H=await n(k,l.imageFile);console.log(H),g(0),d(),e()}catch(H){console.log(H),g(0)}else d(),e()};return N(ae,{show:t,onHide:()=>{d(),e()},centered:!0,backdrop:"static",fullscreen:"sm-down",scrollable:"true",children:[h(ae.Header,{closeButton:!0,children:h(ae.Title,{children:"Edit the event"})}),h(ae.Body,{children:N(A,{noValidate:!0,validated:w,onSubmit:y,id:"create-event-form",children:[N(A.Group,{className:"mb-3",controlId:"event-name",children:[h(A.Label,{children:"Event Name"}),h(A.Control,{type:"text",name:"eventName",value:l.eventName,onChange:v,autoFocus:!0,required:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide an event name."})]}),N(A.Group,{className:"mb-3",controlId:"event-description",children:[h(A.Label,{children:"Description"}),h(A.Control,{type:"text",as:"textarea",rows:3,name:"eventDescription",value:l.eventDescription,onChange:v,autoFocus:!0})]}),N(A.Group,{className:"mb-3",controlId:"event-location",children:[h(A.Label,{children:"Location"}),h(A.Control,{type:"text",name:"eventLocation",value:l.eventLocation,onChange:v,required:!0,autoFocus:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a location."})]}),N(A.Group,{className:"mb-3",controlId:"event-capacity",children:[h(A.Label,{children:"Capacity"}),h(A.Control,{type:"number",min:"1",max:"100",name:"eventCapacity",value:l.eventCapacity,onChange:v,required:!0,autoFocus:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a valid number of attendees."})]}),N(A.Group,{className:"mb-3",controlId:"event-date",children:[h(A.Label,{children:"Date"}),h(A.Control,{type:"date",name:"dateString",onChange:v,value:l.dateString,min:l.currentDate,autoFocus:!0,required:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a valid date."})]}),N(A.Group,{className:"mb-3",controlId:"event-time",children:[h(A.Label,{children:"Time"}),h(A.Control,{type:"time",name:"timeString",onChange:v,value:l.timeString,min:l.dateString===l.currentDate?l.currentTime:"00:00",autoFocus:!0,required:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a valid time."})]}),N(A.Group,{className:"mb-3",controlId:"event-duration",children:[h(A.Label,{children:"Duration (hour)"}),h(A.Control,{type:"number",min:"1",max:"24",step:"0.1",name:"eventDuration",value:l.eventDuration,onChange:v,required:!0,autoFocus:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a valid duration of event."})]}),N(A.Group,{className:"mb-3",controlId:"event-time",children:[h(A.Label,{children:"Skill Level:"}),N(A.Select,{"aria-label":"Default select example",value:l.skillLevel,onChange:v,name:"skillLevel",required:!0,children:[h("option",{value:"",children:"-- choose a skill level --"}),h("option",{value:"Beginner",children:"Beginner"}),h("option",{value:"Intermediate",children:"Intermediate"}),h("option",{value:"Advanced",children:"Advanced"})]}),h(A.Control.Feedback,{type:"invalid",children:"Please select a skill level"})]}),N(A.Group,{className:"mb-3",controlId:"upload-image",children:[h(A.Label,{children:"Update Cover Image (Optional)"}),h(A.Control,{type:"file",name:"imageFile",onChange:v,accept:"image/*"})]}),h("div",{className:"submission-status",children:p===1&&f})]})}),h(ae.Footer,{children:h(vt,{variant:"primary",type:"submit",form:"create-event-form",className:"update-event-button",disabled:p!==0,children:"Update Event"})})]})};const p6="/assets/small-logo-5a7aa8ea.png";function zb({show:t,handleClose:e,data:n,allUsers:r}){if(!n||!r)return"";const{maxCap:i,participants:s,owner:o}=n;return N(ae,{show:t,onHide:e,info:n,centered:!0,backdrop:"static",scrollable:"true",fullscreen:"sm-down",children:[h(ae.Header,{closeButton:!0,children:h(ae.Title,{children:"Event Participants"})}),N(ae.Body,{children:[h("span",{children:"Participants: "})," ",s&&s.length==i&&h("span",{children:"Event is full!"}),h(u3,{className:"modal-participant-list",children:N("tbody",{children:[s&&s.map(a=>N("tr",{className:"participant-list-items",children:[h("td",{children:h("img",{className:"profile-image-modal",src:r[a].photoURL})}),h("td",{className:"participant-list-names",children:N("span",{className:"modal-participant-name",children:[r[a].displayName," ",a==o?"(Owner)":""]})})]},a)),s&&s.length<i&&[...Array(i-s.length)].map((a,l)=>N("tr",{className:"participant-list-items",children:[h("td",{children:h("img",{className:"profile-image-modal",src:p6})}),h("td",{className:"participant-list-names",children:h("span",{className:"empty-participant-name",children:"Empty spot"})})]},l)),s&&s.length==0&&h("tr",{children:h("td",{children:"No participants yet!"})})]})})]})]})}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var fn=function(){return fn=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},fn.apply(this,arguments)};function m6(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function e0(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t}var jb=function(t){t===void 0&&(t=12);for(var e=8,n=Math.pow(16,Math.min(t,e)-1),r=Math.pow(16,Math.min(t,e))-1,i=Math.floor(Math.random()*(r-n+1))+n,s=i.toString(16);s.length<t;)s=s+jb(t-e);return s},Bb="stack",ya="factoryStack";typeof window<"u"&&(window[ya]||(window[ya]={}));var g6=function(t,e){return window[ya][t]=e,e},v6=function(t){delete window[ya][t]},y6=function(t){return window[ya][t||Bb]},_6=function(t,e){var n=(t||{}).scope,r=n===void 0?Bb:n,i=m.useRef(t),s=m.useState({}),o=s[0],a=s[1],l=m.useState([]),c=l[0],u=l[1],d=m.useCallback(function(b,k){var T;return(T=o==null?void 0:o[b])===null||T===void 0?void 0:T.resolve(k)},[o]),f=m.useCallback(function(b){return Object.values(o).forEach(function(k){return k.resolve(b)})},[o]),p=m.useCallback(function(b,k){var T;return(T=o==null?void 0:o[b])===null||T===void 0?void 0:T.reject(k)},[o]),g=m.useCallback(function(b){return Object.values(o).forEach(function(k){return k.reject(b)})},[o]),w=m.useCallback(function(b){return!!c.find(function(k){return k===b})},[c]),C=m.useCallback(function(b){return o==null?void 0:o[b]},[o]),v=function(b,k){var T;u(function(D){return D.filter(function(M){return M!==b})}),setTimeout(function(){a(function(D){var M=D,H=b;M[H];var Y=m6(M,[typeof H=="symbol"?H:H+""]);return Y})},k==null?void 0:k.exitTimeout),(T=t.onRemove)===null||T===void 0||T.call(t,b)},y=function(b,k,T){return k===void 0&&(k={}),new Promise(function(D,M){var H=(T==null?void 0:T.instanceId)||jb(),Y=i.current,te=Y.enterTimeout,J=Y.exitTimeout,X=Y.isAppendIntances,le=Y.onResolve,j=Y.onReject,I=fn({enterTimeout:te,exitTimeout:J,instanceId:H},k),O=fn({Component:b,props:fn(fn({},k),T),resolve:function(P){_.current(H,I),D(P),le==null||le(P,H)},reject:function(P){_.current(H,I),M(P),j==null||j(P,H)}},I);a(function(P){var W,V;return X?fn(fn({},P),(W={},W[H]=O,W)):fn((V={},V[H]=O,V),P)}),setTimeout(function(){var P,W;u(function(V){return e0(e0([],V),[H])}),(W=(P=i.current).onOpen)===null||W===void 0||W.call(P,H,O)},I.enterTimeout)})},_=m.useRef(v),E=m.useRef(y);m.useEffect(function(){i.current=t,_.current=v,E.current=y}),m.useImperativeHandle(e,function(){return{create:E.current,resolve:d,reject:p,resolveAll:f,rejectAll:g,hasInstance:w,getInstance:C}}),m.useEffect(function(){return g6(r,{create:E.current,resolve:d,reject:p,resolveAll:f,rejectAll:g,hasInstance:w,getInstance:C}),function(){return v6(r)}},[r]);var S=m.useMemo(function(){var b=Object.keys(o);return b.map(function(k){var T=o[k],D=T.Component,M=T.props,H=T.resolve,Y=T.reject,te=!!c.find(function(J){return J===k});return G.createElement(D,fn({},M,{key:k,isOpen:te,onReject:Y,onResolve:H,close:H,open:te}))})},[o,c]);return G.createElement(G.Fragment,null,S)},Dg=m.forwardRef(_6);Dg.defaultProps={exitTimeout:500,enterTimeout:50};var Hb=function(t,e){return function(n){return y6(e==null?void 0:e.scope).create(t,e,n)}};const Wb=({isShow:t,onResolve:e,conflictingEventName:n,actionItem:r})=>N(ae,{show:t,backdrop:"static",onHide:()=>e(!1),size:"lg",centered:!0,children:[h(ae.Header,{closeButton:!0,children:N(ae.Title,{children:[r.charAt(0).toUpperCase()+r.slice(1)," event?"]})}),N(ae.Body,{children:["The event that you're trying to ",r," conflicts with one of your other events titled ",h("b",{children:n}),". Are you sure you want to ",r,"?"]}),N(ae.Footer,{children:[h(vt,{variant:"primary",className:"confirmation-modal-confirm-button",onClick:()=>e(!0),children:"Confirm"}),h(vt,{variant:"outline-secondary",className:"confirmation-modal-close-button",onClick:()=>e(!1),children:"Close"})]})]});function Vb(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=Vb(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function wr(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=Vb(t))&&(r&&(r+=" "),r+=e);return r}const Ao=t=>typeof t=="number"&&!isNaN(t),Ti=t=>typeof t=="string",Nt=t=>typeof t=="function",Bl=t=>Ti(t)||Nt(t)?t:null,Bd=t=>m.isValidElement(t)||Ti(t)||Nt(t)||Ao(t);function w6(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Uu(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:f}=o;const p=r?`${e}--${l}`:e,g=r?`${n}--${l}`:n,w=m.useRef(0);return m.useLayoutEffect(()=>{const C=d.current,v=p.split(" "),y=_=>{_.target===d.current&&(C.dispatchEvent(new Event("d")),C.removeEventListener("animationend",y),C.removeEventListener("animationcancel",y),w.current===0&&_.type!=="animationcancel"&&C.classList.remove(...v))};C.classList.add(...v),C.addEventListener("animationend",y),C.addEventListener("animationcancel",y)},[]),m.useEffect(()=>{const C=d.current,v=()=>{C.removeEventListener("animationend",v),i?w6(C,u,s):u()};f||(c?v():(w.current=1,C.className+=` ${g}`,C.addEventListener("animationend",v)))},[f]),G.createElement(G.Fragment,null,a)}}function t0(t,e){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}}const jt={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},El=t=>{let{theme:e,type:n,...r}=t;return G.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Hd={info:function(t){return G.createElement(El,{...t},G.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return G.createElement(El,{...t},G.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return G.createElement(El,{...t},G.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return G.createElement(El,{...t},G.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return G.createElement("div",{className:"Toastify__spinner"})}};function E6(t){const[,e]=m.useReducer(p=>p+1,0),[n,r]=m.useState([]),i=m.useRef(null),s=m.useRef(new Map).current,o=p=>n.indexOf(p)!==-1,a=m.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:p=>s.get(p)}).current;function l(p){let{containerId:g}=p;const{limit:w}=a.props;!w||g&&a.containerId!==g||(a.count-=a.queue.length,a.queue=[])}function c(p){r(g=>p==null?[]:g.filter(w=>w!==p))}function u(){const{toastContent:p,toastProps:g,staleId:w}=a.queue.shift();f(p,g,w)}function d(p,g){let{delay:w,staleId:C,...v}=g;if(!Bd(p)||function(Y){return!i.current||a.props.enableMultiContainer&&Y.containerId!==a.props.containerId||s.has(Y.toastId)&&Y.updateId==null}(v))return;const{toastId:y,updateId:_,data:E}=v,{props:S}=a,b=()=>c(y),k=_==null;k&&a.count++;const T={...S,style:S.toastStyle,key:a.toastKey++,...v,toastId:y,updateId:_,data:E,closeToast:b,isIn:!1,className:Bl(v.className||S.toastClassName),bodyClassName:Bl(v.bodyClassName||S.bodyClassName),progressClassName:Bl(v.progressClassName||S.progressClassName),autoClose:!v.isLoading&&(D=v.autoClose,M=S.autoClose,D===!1||Ao(D)&&D>0?D:M),deleteToast(){const Y=t0(s.get(y),"removed");s.delete(y),jt.emit(4,Y);const te=a.queue.length;if(a.count=y==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),te>0){const J=y==null?a.props.limit:1;if(te===1||J===1)a.displayedToast++,u();else{const X=J>te?te:J;a.displayedToast=X;for(let le=0;le<X;le++)u()}}else e()}};var D,M;T.iconOut=function(Y){let{theme:te,type:J,isLoading:X,icon:le}=Y,j=null;const I={theme:te,type:J};return le===!1||(Nt(le)?j=le(I):m.isValidElement(le)?j=m.cloneElement(le,I):Ti(le)||Ao(le)?j=le:X?j=Hd.spinner():(O=>O in Hd)(J)&&(j=Hd[J](I))),j}(T),Nt(v.onOpen)&&(T.onOpen=v.onOpen),Nt(v.onClose)&&(T.onClose=v.onClose),T.closeButton=S.closeButton,v.closeButton===!1||Bd(v.closeButton)?T.closeButton=v.closeButton:v.closeButton===!0&&(T.closeButton=!Bd(S.closeButton)||S.closeButton);let H=p;m.isValidElement(p)&&!Ti(p.type)?H=m.cloneElement(p,{closeToast:b,toastProps:T,data:E}):Nt(p)&&(H=p({closeToast:b,toastProps:T,data:E})),S.limit&&S.limit>0&&a.count>S.limit&&k?a.queue.push({toastContent:H,toastProps:T,staleId:C}):Ao(w)?setTimeout(()=>{f(H,T,C)},w):f(H,T,C)}function f(p,g,w){const{toastId:C}=g;w&&s.delete(w);const v={content:p,props:g};s.set(C,v),r(y=>[...y,C].filter(_=>_!==w)),jt.emit(4,t0(v,v.props.updateId==null?"added":"updated"))}return m.useEffect(()=>(a.containerId=t.containerId,jt.cancelEmit(3).on(0,d).on(1,p=>i.current&&c(p)).on(5,l).emit(2,a),()=>{s.clear(),jt.emit(3,a)}),[]),m.useEffect(()=>{a.props=t,a.isToastActive=o,a.displayedToast=n.length}),{getToastToRender:function(p){const g=new Map,w=Array.from(s.values());return t.newestOnTop&&w.reverse(),w.forEach(C=>{const{position:v}=C.props;g.has(v)||g.set(v,[]),g.get(v).push(C)}),Array.from(g,C=>p(C[0],C[1]))},containerRef:i,isToastActive:o}}function n0(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function r0(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function C6(t){const[e,n]=m.useState(!1),[r,i]=m.useState(!1),s=m.useRef(null),o=m.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=m.useRef(t),{autoClose:l,pauseOnHover:c,closeToast:u,onClick:d,closeOnClick:f}=t;function p(E){if(t.draggable){E.nativeEvent.type==="touchstart"&&E.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",v),document.addEventListener("mouseup",y),document.addEventListener("touchmove",v),document.addEventListener("touchend",y);const S=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=S.getBoundingClientRect(),S.style.transition="",o.x=n0(E.nativeEvent),o.y=r0(E.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=S.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=S.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function g(E){if(o.boundingRect){const{top:S,bottom:b,left:k,right:T}=o.boundingRect;E.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=k&&o.x<=T&&o.y>=S&&o.y<=b?C():w()}}function w(){n(!0)}function C(){n(!1)}function v(E){const S=s.current;o.canDrag&&S&&(o.didMove=!0,e&&C(),o.x=n0(E),o.y=r0(E),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),S.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,S.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function y(){document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",y),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",y);const E=s.current;if(o.canDrag&&o.didMove&&E){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();E.style.transition="transform 0.2s, opacity 0.2s",E.style.transform=`translate${t.draggableDirection}(0)`,E.style.opacity="1"}}m.useEffect(()=>{a.current=t}),m.useEffect(()=>(s.current&&s.current.addEventListener("d",w,{once:!0}),Nt(t.onOpen)&&t.onOpen(m.isValidElement(t.children)&&t.children.props),()=>{const E=a.current;Nt(E.onClose)&&E.onClose(m.isValidElement(E.children)&&E.children.props)}),[]),m.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",w),window.addEventListener("blur",C)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",w),window.removeEventListener("blur",C))}),[t.pauseOnFocusLoss]);const _={onMouseDown:p,onTouchStart:p,onMouseUp:g,onTouchEnd:g};return l&&c&&(_.onMouseEnter=C,_.onMouseLeave=w),f&&(_.onClick=E=>{d&&d(E),o.canCloseOnClick&&u()}),{playToast:w,pauseToast:C,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:_}}function Gb(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return G.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},G.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},G.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function S6(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:c,rtl:u,isIn:d,theme:f}=t;const p=s||l&&c===0,g={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:p?0:1};l&&(g.transform=`scaleX(${c})`);const w=wr("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":u}),C=Nt(o)?o({rtl:u,type:i,defaultClassName:w}):wr(w,o);return G.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:C,style:g,[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{d&&r()}})}const b6=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=C6(t),{closeButton:s,children:o,autoClose:a,onClick:l,type:c,hideProgressBar:u,closeToast:d,transition:f,position:p,className:g,style:w,bodyClassName:C,bodyStyle:v,progressClassName:y,progressStyle:_,updateId:E,role:S,progress:b,rtl:k,toastId:T,deleteToast:D,isIn:M,isLoading:H,iconOut:Y,closeOnClick:te,theme:J}=t,X=wr("Toastify__toast",`Toastify__toast-theme--${J}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":te}),le=Nt(g)?g({rtl:k,position:p,type:c,defaultClassName:X}):wr(X,g),j=!!b||!a,I={closeToast:d,type:c,theme:J};let O=null;return s===!1||(O=Nt(s)?s(I):m.isValidElement(s)?m.cloneElement(s,I):Gb(I)),G.createElement(f,{isIn:M,done:D,position:p,preventExitTransition:n,nodeRef:r},G.createElement("div",{id:T,onClick:l,className:le,...i,style:w,ref:r},G.createElement("div",{...M&&{role:S},className:Nt(C)?C({type:c}):wr("Toastify__toast-body",C),style:v},Y!=null&&G.createElement("div",{className:wr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!H})},Y),G.createElement("div",null,o)),O,G.createElement(S6,{...E&&!j?{key:`pb-${E}`}:{},rtl:k,theme:J,delay:a,isRunning:e,isIn:M,closeToast:d,hide:u,type:c,style:_,className:y,controlledProgress:j,progress:b||0})))},zu=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},k6=Uu(zu("bounce",!0));Uu(zu("slide",!0));Uu(zu("zoom"));Uu(zu("flip"));const Dn=m.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=E6(t),{className:s,style:o,rtl:a,containerId:l}=t;function c(u){const d=wr("Toastify__toast-container",`Toastify__toast-container--${u}`,{"Toastify__toast-container--rtl":a});return Nt(s)?s({position:u,rtl:a,defaultClassName:d}):wr(d,Bl(s))}return m.useEffect(()=>{e&&(e.current=r.current)},[]),G.createElement("div",{ref:r,className:"Toastify",id:l},n((u,d)=>{const f=d.length?{...o}:{...o,pointerEvents:"none"};return G.createElement("div",{className:c(u),style:f,key:`container-${u}`},d.map((p,g)=>{let{content:w,props:C}=p;return G.createElement(b6,{...C,isIn:i(C.toastId),style:{...C.style,"--nth":g+1,"--len":d.length},key:`toast-${C.key}`},w)}))}))});Dn.displayName="ToastContainer",Dn.defaultProps={position:"top-right",transition:k6,autoClose:5e3,closeButton:Gb,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Wd,Qr=new Map,mo=[],T6=1;function Kb(){return""+T6++}function I6(t){return t&&(Ti(t.toastId)||Ao(t.toastId))?t.toastId:Kb()}function Mo(t,e){return Qr.size>0?jt.emit(0,t,e):mo.push({content:t,options:e}),e.toastId}function Vc(t,e){return{...e,type:e&&e.type||t,toastId:I6(e)}}function Cl(t){return(e,n)=>Mo(e,Vc(t,n))}function B(t,e){return Mo(t,Vc("default",e))}B.loading=(t,e)=>Mo(t,Vc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),B.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Ti(i)?B.loading(i,n):B.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},l=(u,d,f)=>{if(d==null)return void B.dismiss(r);const p={type:u,...a,...n,data:f},g=Ti(d)?{render:d}:d;return r?B.update(r,{...p,...g}):B(g.render,{...p,...g}),f},c=Nt(t)?t():t;return c.then(u=>l("success",o,u)).catch(u=>l("error",s,u)),c},B.success=Cl("success"),B.info=Cl("info"),B.error=Cl("error"),B.warning=Cl("warning"),B.warn=B.warning,B.dark=(t,e)=>Mo(t,Vc("default",{theme:"dark",...e})),B.dismiss=t=>{Qr.size>0?jt.emit(1,t):mo=mo.filter(e=>t!=null&&e.options.toastId!==t)},B.clearWaitingQueue=function(t){return t===void 0&&(t={}),jt.emit(5,t)},B.isActive=t=>{let e=!1;return Qr.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},B.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=Qr.get(s||Wd);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={...r,...e,toastId:e.toastId||t,updateId:Kb()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,Mo(o,s)}},0)},B.done=t=>{B.update(t,{progress:1})},B.onChange=t=>(jt.on(4,t),()=>{jt.off(4,t)}),B.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},B.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},jt.on(2,t=>{Wd=t.containerId||t,Qr.set(Wd,t),mo.forEach(e=>{jt.emit(0,e.content,e.options)}),mo=[]}).on(3,t=>{Qr.delete(t.containerId||t),Qr.size===0&&jt.off(0).off(1).off(5)});var N6={prefix:"far",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"]},i0={prefix:"far",iconName:"calendar-plus",icon:[448,512,[],"f271","M224 232C237.3 232 248 242.7 248 256V304H296C309.3 304 320 314.7 320 328C320 341.3 309.3 352 296 352H248V400C248 413.3 237.3 424 224 424C210.7 424 200 413.3 200 400V352H152C138.7 352 128 341.3 128 328C128 314.7 138.7 304 152 304H200V256C200 242.7 210.7 232 224 232zM152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"]};const x6=({eventData:t,user:e,allUsers:n})=>{const[r,i]=m.useState(""),[s,o]=m.useState(!1),[a,l]=m.useState(""),[c,u]=m.useState(!1),[d,f]=m.useState(!1),[p,g]=m.useState(!1),[w,C]=m.useState(!1),[v,y]=m.useState([]),[_,E]=m.useState(null),[S,b]=m.useState(null),[k,T]=m.useState(null),[D,M]=m.useState(null),H=Hb(Wb),Y=()=>o(!1),te=()=>{o(!0)},J=async(F,he,Pe)=>{if(Pe&&["image/gif","image/jpeg","image/png"].includes(Pe.type)){let[Ot,nr]=await vh(Pe);Ot&&(F.imgSrc=nr,F.owner=e.uid)}else F.imgSrc=a;let be=SM(),Oe=Xi();F.id=be,F.participants.push(e.uid),he.id=Oe;let ot;n[e.uid].events?ot={events:[...n[e.uid].events,be]}:ot={events:[be]};let at={unreadMessages:[...n[e.uid].unreadMessages,Oe]};try{bM(F,be,ot,e.uid),kM(at,he,Oe,e.uid),B.success("Successfully created event!",{position:B.POSITION.TOP_RIGHT})}catch(Ot){console.log(Ot),B.error("Hmm...Something went wrong. Please try again or contact the dev team.",{position:B.POSITION.TOP_RIGHT})}};m.useEffect(()=>{t&&y(Object.values(t))},[r,t]),m.useEffect(()=>{YC("default-cover.png").then(F=>{l(F)}).catch(F=>{console.log(F)})},[]);const X=()=>{let F=r.split(" ").map(he=>he.toLowerCase());y(he=>he.filter(Pe=>{let ze=Pe.name.toLowerCase();return F.some(be=>ze.includes(be))}))};if(t===void 0||e===void 0||n===void 0)return N("div",{className:"event-list",children:[h(Dn,{autoClose:2e3}),N("div",{className:"event-list-tool-bar",children:[h(A,{className:"d-flex search-bar-form",children:N(S_,{direction:"horizontal",gap:1,children:[h(A.Control,{type:"search",placeholder:"Search for an activity",className:"me-2 activity-search-bar","aria-label":"Search",value:r,onKeyPress:F=>ue(F),onChange:F=>i(F.target.value)}),h(gt,{icon:J_,className:"activity-search-bar-search-icon"})]})}),h("div",{className:"add-event-icon",children:h(gt,{icon:i0,size:"lg",title:"Add event",onClick:te})})]}),h(xs,{className:"no-event-img",src:"../../src/assets/no_event.png",alt:"no_event"}),h("p",{className:"empty-page-message",children:"No events to display..."}),h(Z_,{show:s,handleClose:Y,handleSubmit:J,user:e})]});const le=()=>{C(!0)},j=()=>{C(!1)},I=F=>{b(F)},O=F=>{console.log("Current data: ",F);let he=new Date(F.dateTimeString),Pe=F.duration,ze=new Date(he),be=Math.floor(Pe),Oe=Math.round(Pe%1*60);return ze.setHours(he.getHours()+be),ze.setMinutes(ze.getMinutes()+Oe),[he,ze]},P=F=>{let he=!1,[Pe,ze]=O(F),be;if(n[e.uid].events)for(let Oe of n[e.uid].events){if(Oe===F.id)continue;let ot=t[Oe],[at,Ot]=O(ot);if(Pe<=Ot&&ze>=at){he=!0,be=ot.name;break}}return[he,be]},W=async F=>{if(console.log("Joining"),F.participants.length>=F.maxCap){B.error("Sorry the event is full!",{position:B.POSITION.TOP_RIGHT});return}let he=!0,[Pe,ze]=P(F);if(Pe&&(he=await H({isShow:!0,conflictingEventName:ze,actionItem:"join"})),he){const be=F.id,Oe={participants:[...F.participants,e.uid]};console.log("Updated participants: ",Oe);let ot;n[e.uid].events?ot={events:[...n[e.uid].events,be]}:ot={events:[be]};let at=Xi(),Ot={title:`New Event Participant for "${F.name}" `,id:at,content:`Hurrah! We got a new participant! ${n[e.uid].displayName} just joined the event "${F.name}". Welcome to the event ${n[e.uid].displayName}!`,timeStamp:new Date().toUTCString()},nr={unreadMessages:[...n[e.uid].unreadMessages,at]},Vs={unreadMessages:[...n[F.owner].unreadMessages,at]},re=await mh(Oe,ot,be,e.uid);if(gh(Ot,Vs,nr,at,F.owner,e.uid),!re){B.error("Hmm...Something went wrong. Please try again or contact the dev team.",{position:B.POSITION.TOP_RIGHT});return}B.success("Successfully joined event!",{position:B.POSITION.TOP_RIGHT})}},V=async F=>{let he=F.participants,Pe=n[e.uid].events;console.log("Curr user events: ",Pe),console.log("Curr participants: ",he);let ze=F.id,be={participants:he.filter(re=>re!==e.uid)},Oe={events:Pe.filter(re=>re!==ze)};console.log("Updated participants: ",be),console.log("Updated events: ",Oe);let ot=await mh(be,Oe,ze,e.uid),at=Xi(),Ot={title:`A Participant Left the Event "${F.name}"`,id:at,content:`Oh no! ${n[e.uid].displayName} just left the event "${F.name}". Goodbyes are always hard and we're so sad to see you go ${n[e.uid].displayName} :(. `,timeStamp:new Date().toUTCString()},nr={unreadMessages:[...n[e.uid].unreadMessages,at]},Vs={unreadMessages:[...n[F.owner].unreadMessages,at]};gh(Ot,Vs,nr,at,F.owner,e.uid),ot?B.success("Successfully left event!",{position:B.POSITION.TOP_RIGHT}):B.error("Hmm...Something went wrong. Please try again or contact the dev team.",{position:B.POSITION.TOP_RIGHT})},Te=()=>{u(!1)},Se=F=>{E(F),u(!0)},me=()=>f(!1),Re=()=>{f(!0)},Ct=F=>{T(F)},bn=()=>{g(!0)},er=()=>{g(!1)},Wr=F=>{M(F)},kn=async()=>{let F=k.participants.map(Oe=>({events:n[Oe].events.filter(Ot=>Ot!==k.id)}));await HC(k.participants,F);let he=await WC(k.id);k.imgSrc!==a&&await KC(k.imgSrc),v.length===1&&y([]);let Pe=Xi();const ze={content:`We're sorry to inform you the event '${k.name}' that you're a part of has been cancelled. Please keep an eye out for new available events, or you can create one yourself! `,title:`Event "${k.name}" Cancelled`,id:Pe,timeStamp:new Date().toUTCString()};let be=k.participants.map(Oe=>({unreadMessages:[...n[Oe].unreadMessages,Pe]}));GC(ze,be,k.participants,Pe),he?B.success("Successfully deleted event!",{position:B.POSITION.TOP_RIGHT}):B.error("Hmm...Something went wrong. Please try again or contact the dev team.",{position:B.POSITION.TOP_RIGHT})},tr=async(F,he)=>{if(he&&["image/gif","image/jpeg","image/png"].includes(he.type)){let[be,Oe]=await vh(he);be&&(F.imgSrc=Oe)}await VC(F,F.id)?B.success("Successfully edited event!",{position:B.POSITION.TOP_RIGHT}):B.error("Hmm...Something went wrong. Please try again or contact the dev team.",{position:B.POSITION.TOP_RIGHT})},ue=F=>{event.key==="Enter"&&(F.preventDefault(),X())};return N("div",{className:"event-list",children:[h(Dn,{autoClose:2e3}),N("div",{className:"event-list-tool-bar",children:[h(A,{className:"d-flex search-bar-form",children:N(S_,{direction:"horizontal",gap:1,children:[h(A.Control,{type:"search",placeholder:"Search for an activity",className:"me-2 activity-search-bar","aria-label":"Search",value:r,onKeyPress:F=>ue(F),onChange:F=>i(F.target.value)}),h(gt,{icon:J_,className:"activity-search-bar-search-icon"})]})}),h("div",{className:"add-event-icon",children:h(gt,{icon:i0,size:"lg",title:"Add event",onClick:te})})]}),h(h6,{show:c,handleJoin:W,handleClose:Te,data:_,allUsers:n}),h(Z_,{show:s,handleClose:Y,handleSubmit:J,user:e,allEvents:t,checkConflict:P,createConfirmationModal:H}),h(Fb,{show:d,handleClose:me,handleDelete:kn}),h(Ub,{show:p,handleClose:er,handleSubmit:tr,data:D,user:e,allEvents:t,checkConflict:P,createConfirmationModal:H}),h(zb,{show:w,handleClose:j,data:S,allUsers:n}),h(Dg,{}),!v||v.length===0?N("div",{children:[h(xs,{className:"no-event-img",src:"../../src/assets/no_event.png",alt:"no_event"}),h("p",{className:"empty-page-message",children:"No events to display..."})]}):v.map(F=>h(f6,{openModal:Se,openDeleteEventModal:Re,handleSetEventToDelete:Ct,handleSetEventToEdit:Wr,handleSetEventToShowParticipants:I,openEditEventModal:bn,handleLeave:V,handleJoin:W,handleShowParticipantsModal:le,calculateDateObjects:O,cardData:F,user:e,allUsers:n},F.id))]})};const R6=()=>{const t=Ew();zp();async function e(){await IM(),t("/")}return h("button",{"data-cy":"sign-out",className:"nav-button",onClick:e,children:"Sign out"})},P6=()=>h(R6,{}),Vd=({numberOfUnread:t})=>{const[e,n]=m.useState(location.pathname),r=i=>{n(i)};return h(Lo,{children:h(dl,{expand:"false",className:"bar navbar-expand-lg navbar-light",children:N(oL,{fluid:!0,children:[h(dl.Toggle,{"aria-controls":"offcanvasNavbar"}),h(dl.Brand,{className:"logo",href:"/allEvents",children:"MatchPoint"}),N(dl.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"start",className:"burger-menu",children:[h(Ul.Header,{closeButton:!0,children:h(Ul.Title,{id:"offcanvasNavbarLabel",children:"MatchPoint"})}),h(Ul.Body,{children:N(ho,{className:"justify-content-end flex-grow-1 pe-3",children:[h(ho.Link,{className:`nav-link ${e==="/allEvents"?"active":""}`,href:"/allEvents",onClick:()=>r("allEvents"),children:"All Events"}),N(ho.Link,{className:`nav-link ${e==="/inbox"?"active":""}`,href:"/inbox",onClick:()=>r("inbox"),children:["Inbox",t!==0?h("span",{className:"number-of-unread",children:t}):h("span",{})]}),h(ho.Link,{className:`nav-link ${e==="/profile"?"active":""}`,href:"/profile",onClick:()=>r("profile"),children:"Profile"})]})})]}),h(P6,{})]})})})};const O6="/assets/1-8c0ef175.png",A6="/assets/2-01bcd91d.png",M6="/assets/3-1759e013.png",D6="/assets/4-87ca6e7a.png",L6="/assets/5-959d8486.png",F6="/assets/6-b28b593a.png",$6="/assets/7-5fcc8bf4.png",U6="/assets/8-67ef8384.png",z6="/assets/MatchPoint-1-7de25589.gif";var Yb={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s0=G.createContext&&G.createContext(Yb),Or=globalThis&&globalThis.__assign||function(){return Or=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Or.apply(this,arguments)},j6=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function qb(t){return t&&t.map(function(e,n){return G.createElement(e.tag,Or({key:n},e.attr),qb(e.child))})}function B6(t){return function(e){return G.createElement(H6,Or({attr:Or({},t.attr)},e),qb(t.child))}}function H6(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=j6(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),G.createElement("svg",Or({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Or(Or({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&G.createElement("title",null,s),t.children)};return s0!==void 0?G.createElement(s0.Consumer,null,function(n){return e(n)}):e(Yb)}function W6(t){return B6({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(t)}const V6=()=>h("div",{className:"sign-in-btn-container",children:N(vt,{variant:"light",className:"sign-in-button",size:"lg","aria-label":"Sign in with google",onClick:TM,children:[h(W6,{className:"google-icon"}),h("span",{children:"Sign in with Google"})]})}),G6=t=>{const e=qC();if(e&&t&&t.allUsers&&t.allUsers&&!t.allUsers[e.uid]){const n={displayName:e.displayName,email:e.email,unreadMessages:["welcome"],photoURL:e.photoURL};CM(n,e.uid)}return e?h(_2,{to:"/allEvents"}):N("div",{className:"landing-page-container",children:[h("img",{className:"landing-img1",src:O6,alt:"landing page image"}),h("img",{className:"landing-img2",src:A6,alt:"landing page image"}),h("img",{className:"landing-img3",src:M6,alt:"landing page image"}),h("img",{className:"landing-img4",src:D6,alt:"landing page image"}),h("img",{className:"landing-img5",src:L6,alt:"landing page image"}),h("img",{className:"landing-img6",src:F6,alt:"landing page image"}),h("img",{className:"landing-img7",src:$6,alt:"landing page image"}),h("img",{className:"landing-img8",src:U6,alt:"landing page image"}),N("div",{className:"col-right",children:[N("div",{className:"logo-container",children:[h(xs,{src:z6,className:"small-logo",alt:"small MatchPoint app gif logo"}),h("h1",{className:"app-name",children:"MatchPoint"})]}),h("h3",{className:"blurb",children:"We help NU students create or join sporting events that pique their interests!"}),h(V6,{})]})]})};const K6=({message:t,allUsers:e,user:n,showModal:r,setCurrentMessageToDisplay:i,isRead:s,displayDeletedMesasge:o})=>{if(t===void 0||e===void 0||n===void 0)return"";const[a,l]=m.useState(null);m.useEffect(()=>{if(t!==void 0&&t.timeStamp!=="undated"){let{month:f,day:p,year:g,hours:w,minutes:C,seconds:v,weekday:y}=$b(t.timeStamp);l({month:f,day:p,year:g,hours:w,minutes:C,seconds:v,weekday:y})}},[t]),console.log(a);const c=()=>{u(),i(t),r()},u=()=>{if(console.log("message clicked"),console.log("Is read? ",s),console.log(t.id),t.id==="welcome")return;let f={};if(e[n.uid].readMessages){if(!e[n.uid].readMessages.includes(t.id)){let p=e[n.uid].unreadMessages;p=p.filter(g=>g!==t.id),f.unreadMessages=p,f.readMessages=[...e[n.uid].readMessages,t.id],ll(f,n.uid)}}else{let p=e[n.uid].unreadMessages;p=p.filter(g=>g!==t.id),f.unreadMessages=p,f.readMessages=[t.id],ll(f,n.uid)}},d=f=>{console.log("Deleting message..."),f.stopPropagation();let p={};if(e[n.uid].readMessages){let g=e[n.uid].unreadMessages,w=e[n.uid].readMessages;g=g.filter(C=>C!==t.id),w=w.filter(C=>C!==t.id),p.unreadMessages=g,p.readMessages=w,ll(p,n.uid),o()}else{let g=e[n.uid].unreadMessages;g=g.filter(w=>w!==t.id),p.unreadMessages=g,p.readMessages=[],ll(p,n.uid)}};return h("div",{className:"message"+(s?" read":"")+(t.id==="welcome"?" default":" custom"),onClick:c,children:N("div",{className:"message-upper-container",children:[h(gt,{icon:a6,className:"unread-dot"+(s?" read":"")}),h("h2",{className:"message-card-title"+(s?" read":""),children:t.title}),N("div",{className:"date-and-delete-container",children:[a&&h("span",{className:"date-string"+(s?" read":""),children:a.year!=new Date().getFullYear()?`${a.month}/${a.day}/${a.year}`:`${a.weekday} ${a.month}/${a.day}`}),t.id!=="welcome"&&h(gt,{icon:N6,className:"delete-message-icon",size:"lg",onClick:d})]})]})})};const Y6=({show:t,handleClose:e,messageData:n})=>N(ae,{show:t,backdrop:"static",fullscreen:"sm-down",size:"lg",scrollable:"true",centered:!0,onHide:e,children:[h(ae.Header,{closeButton:!0,children:h(ae.Title,{children:n.title})}),h(ae.Body,{children:n.content}),h(ae.Footer,{children:h(vt,{variant:"primary",onClick:()=>{e()},className:"message-modal-confirm-button",children:"Got it"})})]}),q6=({allUsers:t,user:e,allMessages:n})=>{const[r,i]=m.useState(!1),[s,o]=m.useState(null),a=()=>{i(!0)},l=()=>{i(!1)},c=()=>{B.success("Successfully deleted message!",{position:B.POSITION.TOP_RIGHT})},u=f=>{o(f)};if(console.log(e),console.log(t),console.log("All messages: ",n),e==null||t==null||n==null||t[e.uid]==null||t[e.uid].unreadMessages==null&&t[e.uid].readMessages==null)return h("div",{className:"event-list",children:h("p",{className:"empty-page-message",children:"You have no messages ..."})});let d=[];return t[e.uid].unreadMessages&&(d=[...d,...t[e.uid].unreadMessages]),t[e.uid].readMessages&&(d=[...d,...t[e.uid].readMessages]),N("div",{className:"event-list",children:[h(Dn,{autoClose:500}),Object.entries(d).map(([f,p])=>h(K6,{message:n[p],allUsers:t,user:e,setCurrentMessageToDisplay:u,showModal:a,isRead:!t[e.uid].unreadMessages.includes(p),displayDeletedMesasge:c},f)),s&&h(Y6,{handleClose:l,messageData:s,show:r})]})};function Q6({imgSrc:t,width:e,height:n}){return e&&n||(e=100,n=100),h("img",{style:{img:{width:e,height:n,borderRadius:"50%"}}.img,src:t})}const X6=({event:t,allUsers:e,user:n,handleSetEventToShowParticipants:r,handleShowParticipantsModal:i,handleSetEventToDelete:s,openDeleteEventModal:o,handleSetEventToEdit:a,openEditEventModal:l,handleLeave:c})=>{const[u,d]=m.useState(null),[f,p]=m.useState(null),[g,w]=m.useState([]),C=_=>{let E=new Date(_.dateTimeString),S=_.duration,b=new Date(E),k=Math.floor(S),T=Math.round(S%1*60);return b.setHours(E.getHours()+k),b.setMinutes(b.getMinutes()+T),[E,b]};m.useEffect(()=>{if(t&&e){let _=[];for(let b=0;b<Math.min(5,t.participants.length);b++)_.push({photoURL:e[t.participants[b]].photoURL,displayName:e[t.participants[b]].displayName});w(_);let[E,S]=C(t);d(E),p(S)}},[t]);const v=()=>{s(t),o()},y=()=>{a(t),l()};return N($c,{className:"user-card",children:[N("div",{className:"card-header",children:[h($c.Title,{className:"user-event-card-title",children:t.name}),h("div",{className:"date-location-container",children:N("p",{children:[" ",new Date(t.dateTimeString).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0,timeZone:"CST"})+" - "+t.location]})}),h("hr",{className:"solid"}),h("div",{className:"user-event-description-container",children:h("p",{className:"user-event-card-description",children:t.desc})}),h("div",{className:"user-event-participants-container",children:N(Ji,{children:[h("h3",{className:"user-event-participant-title",children:"Participants:"}),N("p",{className:"user-event-participant-list-container",onClick:()=>{i(),r(t)},children:[g.map(_=>{let E=_.photoURL,S=_.displayName;return h("img",{className:"user-event-participant-profile-image",src:E,alt:S,title:S},g.indexOf(_))}),t.participants.length>5&&h("img",{className:"user-event-participant-profile-image",src:Lb,title:"more"})]})]})})]}),h("div",{className:"card-footer",children:N(Ji,{children:[n&&t.owner===n.uid&&h(St,{children:h(vt,{onClick:y,variant:"warning",size:"lg",className:"event-card-button edit-event-button profile-button",children:"Edit Event"})}),n&&t.owner===n.uid&&h(St,{children:h(vt,{onClick:v,variant:"danger",size:"lg",className:"event-card-button delete-event-button profile-button",children:"Delete Event"})}),h(St,{children:t.participants.includes(n.uid)&&t.owner!==n.uid&&h(vt,{size:"lg",className:"event-card-button leave-event-button profile-button",onClick:()=>{c(t)},children:"Leave Event"})})]})})]})};const o0=({events:t,renderEvents:e,user:n,users:r})=>{const[i,s]=m.useState(!1),[o,a]=m.useState(null),[l,c]=m.useState(!1),[u,d]=m.useState(!1),[f,p]=m.useState(null),[g,w]=m.useState(null),[C,v]=m.useState(""),y=Hb(Wb);m.useEffect(()=>{YC("default-cover.png").then(j=>{v(j)}).catch(j=>{console.log(j)})},[]);const _=()=>{s(!0)},E=()=>{s(!1)},S=j=>{a(j)},b=()=>c(!1),k=()=>{c(!0)},T=async j=>{let I=j.participants,O=r[n.uid].events;console.log("Curr user events: ",O),console.log("Curr participants: ",I);let P=j.id,W={participants:I.filter(bn=>bn!==n.uid)},V={events:O.filter(bn=>bn!==P)};console.log("Updated participants: ",W),console.log("Updated events: ",V);let Te=await mh(W,V,P,n.uid),Se=Xi(),me={title:`A Participant Left the Event "${j.name}"`,id:Se,content:`Oh no! ${r[n.uid].displayName} just left the event "${j.name}". Goodbyes are always hard and we're so sad to see you go ${r[n.uid].displayName} :(. `,timeStamp:new Date().toUTCString()},Re={unreadMessages:[...r[n.uid].unreadMessages,Se]},Ct={unreadMessages:[...r[j.owner].unreadMessages,Se]};gh(me,Ct,Re,Se,j.owner,n.uid),Te?B.success("Successfully left event!",{position:B.POSITION.TOP_RIGHT}):B.error("Hmm...Something went wrong. Please try again or contact the dev team.",{position:B.POSITION.TOP_RIGHT})},D=j=>{p(j)},M=()=>{d(!0)},H=()=>{d(!1)},Y=j=>{w(j)},te=async()=>{let j=f.participants.map(V=>({events:r[V].events.filter(me=>me!==f.id)}));await HC(f.participants,j);let I=await WC(f.id);f.imgSrc!==C&&await KC(f.imgSrc),t.length===1&&setEvents([]);let O=Xi();const P={content:`We're sorry to inform you the event '${f.name}' that you're a part of has been cancelled. Please keep an eye out for new available events, or you can create one yourself! `,title:`Event "${f.name}" Cancelled`,id:O,timeStamp:new Date().toUTCString()};let W=f.participants.map(V=>({unreadMessages:[...r[V].unreadMessages,O]}));GC(P,W,f.participants,O),I?B.success("Successfully deleted event!",{position:B.POSITION.TOP_RIGHT}):B.error("Hmm...Something went wrong. Please try again or contact the dev team.",{position:B.POSITION.TOP_RIGHT})},J=async(j,I)=>{if(I&&["image/gif","image/jpeg","image/png"].includes(I.type)){let[W,V]=await vh(I);W&&(j.imgSrc=V)}await VC(j,j.id)?B.success("Successfully edited event!",{position:B.POSITION.TOP_RIGHT}):B.error("Hmm...Something went wrong. Please try again or contact the dev team.",{position:B.POSITION.TOP_RIGHT})},X=j=>{let I=!1,[O,P]=le(j),W;if(r[n.uid].events)for(let V of r[n.uid].events){if(V===j.id)continue;let Te=t[V],[Se,me]=le(Te);if(O<=me&&P>=Se){I=!0,W=Te.name;break}}return[I,W]},le=j=>{console.log("Current data: ",j);let I=new Date(j.dateTimeString),O=j.duration,P=new Date(I),W=Math.floor(O),V=Math.round(O%1*60);return P.setHours(I.getHours()+W),P.setMinutes(P.getMinutes()+V),[I,P]};return t&&e?N("div",{className:"user-profile-events-container",children:[h(Dg,{}),h(Fb,{show:l,handleClose:b,handleDelete:te}),h(Ub,{show:u,handleClose:H,handleSubmit:J,data:g,user:n,allEvents:t,checkConflict:X,createConfirmationModal:y}),h(zb,{show:i,handleClose:E,data:o,allUsers:r}),e.map(j=>h(X6,{allUsers:r,user:n,event:t[j],handleShowParticipantsModal:_,handleSetEventToShowParticipants:S,handleSetEventToDelete:D,openDeleteEventModal:k,handleSetEventToEdit:Y,openEditEventModal:M,handleLeave:T},j))]}):h("div",{className:"",children:h("p",{children:"Unable to display profile..."})})},J6="/assets/no_event-c9aa5464.png",Z6=({allUsers:t,user:e,allEvents:n})=>{m.useState(!1),m.useState({});const r=m.useRef(null);let i=!1;if(e==null||t==null)return i||(i=!0,r.current=setTimeout(()=>{console.log("Failed to load"),i=!1},1e3)),h("div",{children:h("p",{className:"profile-loading-message",children:i?"Loading...":"Unable to load profile. Please try again later"})});if(t[e.uid]){clearTimeout(r.current),console.log("done loading");let s=[],o=[];return t[e.uid].events&&(s=t[e.uid].events.filter(a=>new Date(n[a].dateTimeString)>new Date),o=t[e.uid].events.filter(a=>new Date(n[a].dateTimeString)<=new Date)),console.log("Upcoming events: ",s),console.log("Past events: ",o),N("div",{className:"user-profile-container",children:[N("div",{className:"profile-top",children:[h(Q6,{imgSrc:e.photoURL}),h("p",{className:"user-profile-title",children:t[e.uid].displayName})]}),N(Eg,{defaultActiveKey:"upcoming",className:"mb-3 profile-tabs",children:[h(b_,{className:"profile-tab",eventKey:"upcoming",title:"Upcoming",children:s.length===0?N("div",{children:[h(Dn,{autoClose:2e3}),h("img",{className:"no-event-img",src:J6,alt:"no_event"}),h("p",{children:"You don't have any upcoming events. Please create one, or join one from the All Events tab!"})]}):N("div",{children:[h(Dn,{autoClose:2e3}),h(o0,{events:n,renderEvents:s,user:e,users:t})]})}),h(b_,{className:"profile-tab",eventKey:"past",title:"Past",children:o.length===0?N("div",{children:[h(Dn,{autoClose:2e3}),h(xs,{className:"no-event-img",src:"../../src/assets/no_event.png",alt:"no_event"}),h("p",{children:"You don't have any past events."})]}):N("div",{children:[h(Dn,{autoClose:2e3}),h(o0,{events:n,renderEvents:o,user:e,users:t})]})})]})]})}},eF=()=>{const t=qC(),[e,n]=Pd("/events"),[r,i]=Pd("/users"),[s,o]=Pd("/messages");t&&(console.log("Users are"),console.log(r),console.log("Messages are"),console.log(s)),n?console.log(n):i?console.log(i):o&&console.log(o);const[a,l]=m.useState(0);return m.useEffect(()=>{t&&r&&r[t.uid]&&r[t.uid].unreadMessages&&l(r[t.uid].unreadMessages.length)}),h(C2,{children:N(E2,{children:[h(uo,{path:"/",element:h("div",{children:h(G6,{allUsers:r})})}),h(uo,{path:"/allEvents",element:N("div",{children:[h(Vd,{numberOfUnread:a}),h(x6,{eventData:e,user:t,allUsers:r})]})}),h(uo,{path:"/profile",element:N("div",{children:[h(Vd,{numberOfUnread:a}),h(Z6,{allUsers:r,user:t,allEvents:e})]})}),h(uo,{path:"/inbox",element:N("div",{children:[h(Vd,{numberOfUnread:a}),h(q6,{allUsers:r,user:t,allMessages:s})]})})]})})};const tF=Kd.createRoot(document.getElementById("root"));tF.render(h(G.StrictMode,{children:h(eF,{})}));