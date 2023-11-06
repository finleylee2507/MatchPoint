function sb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function d0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lo={},ob={get exports(){return Lo},set exports(t){Lo=t}},Xc={},g={},ab={get exports(){return g},set exports(t){g=t}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wa=Symbol.for("react.element"),lb=Symbol.for("react.portal"),cb=Symbol.for("react.fragment"),ub=Symbol.for("react.strict_mode"),db=Symbol.for("react.profiler"),fb=Symbol.for("react.provider"),hb=Symbol.for("react.context"),pb=Symbol.for("react.forward_ref"),mb=Symbol.for("react.suspense"),gb=Symbol.for("react.memo"),vb=Symbol.for("react.lazy"),Bg=Symbol.iterator;function yb(t){return t===null||typeof t!="object"?null:(t=Bg&&t[Bg]||t["@@iterator"],typeof t=="function"?t:null)}var f0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h0=Object.assign,p0={};function Ps(t,e,n){this.props=t,this.context=e,this.refs=p0,this.updater=n||f0}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function m0(){}m0.prototype=Ps.prototype;function Kh(t,e,n){this.props=t,this.context=e,this.refs=p0,this.updater=n||f0}var Yh=Kh.prototype=new m0;Yh.constructor=Kh;h0(Yh,Ps.prototype);Yh.isPureReactComponent=!0;var jg=Array.isArray,g0=Object.prototype.hasOwnProperty,qh={current:null},v0={key:!0,ref:!0,__self:!0,__source:!0};function y0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)g0.call(e,r)&&!v0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:wa,type:t,key:s,ref:o,props:i,_owner:qh.current}}function _b(t,e){return{$$typeof:wa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qh(t){return typeof t=="object"&&t!==null&&t.$$typeof===wa}function wb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hg=/\/+/g;function Gu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wb(""+t.key):e.toString(36)}function kl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wa:case lb:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gu(o,0):r,jg(i)?(n="",t!=null&&(n=t.replace(Hg,"$&/")+"/"),kl(i,e,n,"",function(c){return c})):i!=null&&(Qh(i)&&(i=_b(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Hg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",jg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Gu(s,a);o+=kl(s,e,n,l,i)}else if(l=yb(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Gu(s,a++),o+=kl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ha(t,e,n){if(t==null)return t;var r=[],i=0;return kl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Eb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Et={current:null},Il={transition:null},Cb={ReactCurrentDispatcher:Et,ReactCurrentBatchConfig:Il,ReactCurrentOwner:qh};ie.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!Qh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Ps;ie.Fragment=cb;ie.Profiler=db;ie.PureComponent=Kh;ie.StrictMode=ub;ie.Suspense=mb;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cb;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=h0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)g0.call(e,l)&&!v0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:wa,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:hb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fb,_context:t},t.Consumer=t};ie.createElement=y0;ie.createFactory=function(t){var e=y0.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:pb,render:t}};ie.isValidElement=Qh;ie.lazy=function(t){return{$$typeof:vb,_payload:{_status:-1,_result:t},_init:Eb}};ie.memo=function(t,e){return{$$typeof:gb,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Il.transition;Il.transition={};try{t()}finally{Il.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return Et.current.useCallback(t,e)};ie.useContext=function(t){return Et.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Et.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Et.current.useEffect(t,e)};ie.useId=function(){return Et.current.useId()};ie.useImperativeHandle=function(t,e,n){return Et.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Et.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Et.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Et.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Et.current.useReducer(t,e,n)};ie.useRef=function(t){return Et.current.useRef(t)};ie.useState=function(t){return Et.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Et.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Et.current.useTransition()};ie.version="18.2.0";(function(t){t.exports=ie})(ab);const G=d0(g),Xd=sb({__proto__:null,default:G},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sb=g,Tb=Symbol.for("react.element"),bb=Symbol.for("react.fragment"),kb=Object.prototype.hasOwnProperty,Ib=Sb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nb={key:!0,ref:!0,__self:!0,__source:!0};function _0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)kb.call(e,r)&&!Nb.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Tb,type:t,key:s,ref:o,props:i,_owner:Ib.current}}Xc.Fragment=bb;Xc.jsx=_0;Xc.jsxs=_0;(function(t){t.exports=Xc})(ob);const Fo=Lo.Fragment,h=Lo.jsx,N=Lo.jsxs;var Jd={},Gl={},xb={get exports(){return Gl},set exports(t){Gl=t}},$t={},Zd={},Rb={get exports(){return Zd},set exports(t){Zd=t}},w0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,P){var O=I.length;I.push(P);e:for(;0<O;){var W=O-1>>>1,V=I[W];if(0<i(V,P))I[W]=P,I[O]=V,O=W;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var P=I[0],O=I.pop();if(O!==P){I[0]=O;e:for(var W=0,V=I.length,ke=V>>>1;W<ke;){var Se=2*(W+1)-1,me=I[Se],Re=Se+1,St=I[Re];if(0>i(me,O))Re<V&&0>i(St,me)?(I[W]=St,I[Re]=O,W=Re):(I[W]=me,I[Se]=O,W=Se);else if(Re<V&&0>i(St,O))I[W]=St,I[Re]=O,W=Re;else break e}}return P}function i(I,P){var O=I.sortIndex-P.sortIndex;return O!==0?O:I.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,m=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=I)r(c),P.sortIndex=P.expirationTime,e(l,P);else break;P=n(c)}}function E(I){if(w=!1,_(I),!m)if(n(l)!==null)m=!0,le(S);else{var P=n(c);P!==null&&B(E,P.startTime-I)}}function S(I,P){m=!1,w&&(w=!1,v(k),k=-1),p=!0;var O=f;try{for(_(P),d=n(l);d!==null&&(!(d.expirationTime>P)||I&&!H());){var W=d.callback;if(typeof W=="function"){d.callback=null,f=d.priorityLevel;var V=W(d.expirationTime<=P);P=t.unstable_now(),typeof V=="function"?d.callback=V:d===n(l)&&r(l),_(P)}else r(l);d=n(l)}if(d!==null)var ke=!0;else{var Se=n(c);Se!==null&&B(E,Se.startTime-P),ke=!1}return ke}finally{d=null,f=O,p=!1}}var T=!1,b=null,k=-1,D=5,M=-1;function H(){return!(t.unstable_now()-M<D)}function Y(){if(b!==null){var I=t.unstable_now();M=I;var P=!0;try{P=b(!0,I)}finally{P?te():(T=!1,b=null)}}else T=!1}var te;if(typeof y=="function")te=function(){y(Y)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,X=J.port2;J.port1.onmessage=Y,te=function(){X.postMessage(null)}}else te=function(){C(Y,0)};function le(I){b=I,T||(T=!0,te())}function B(I,P){k=C(function(){I(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,le(S))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var O=f;f=P;try{return I()}finally{f=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,P){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var O=f;f=I;try{return P()}finally{f=O}},t.unstable_scheduleCallback=function(I,P,O){var W=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?W+O:W):O=W,I){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=O+V,I={id:u++,callback:P,priorityLevel:I,startTime:O,expirationTime:V,sortIndex:-1},O>W?(I.sortIndex=O,e(c,I),n(l)===null&&I===n(c)&&(w?(v(k),k=-1):w=!0,B(E,O-W))):(I.sortIndex=V,e(l,I),m||p||(m=!0,le(S))),I},t.unstable_shouldYield=H,t.unstable_wrapCallback=function(I){var P=f;return function(){var O=f;f=P;try{return I.apply(this,arguments)}finally{f=O}}}})(w0);(function(t){t.exports=w0})(Rb);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0=g,Ft=Zd;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C0=new Set,$o={};function xi(t,e){vs(t,e),vs(t+"Capture",e)}function vs(t,e){for($o[t]=e,t=0;t<e.length;t++)C0.add(e[t])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=Object.prototype.hasOwnProperty,Ob=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wg={},Vg={};function Pb(t){return ef.call(Vg,t)?!0:ef.call(Wg,t)?!1:Ob.test(t)?Vg[t]=!0:(Wg[t]=!0,!1)}function Ab(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Mb(t,e,n,r){if(e===null||typeof e>"u"||Ab(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){st[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];st[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){st[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){st[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){st[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){st[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){st[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){st[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){st[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xh=/[\-:]([a-z])/g;function Jh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xh,Jh);st[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xh,Jh);st[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xh,Jh);st[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){st[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});st.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){st[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zh(t,e,n,r){var i=st.hasOwnProperty(e)?st[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Mb(e,n,i,r)&&(n=null),r||i===null?Pb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qn=E0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),zi=Symbol.for("react.portal"),Bi=Symbol.for("react.fragment"),ep=Symbol.for("react.strict_mode"),tf=Symbol.for("react.profiler"),S0=Symbol.for("react.provider"),T0=Symbol.for("react.context"),tp=Symbol.for("react.forward_ref"),nf=Symbol.for("react.suspense"),rf=Symbol.for("react.suspense_list"),np=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),b0=Symbol.for("react.offscreen"),Gg=Symbol.iterator;function Gs(t){return t===null||typeof t!="object"?null:(t=Gg&&t[Gg]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,Ku;function oo(t){if(Ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ku=e&&e[1]||""}return`
`+Ku+t}var Yu=!1;function qu(t,e){if(!t||Yu)return"";Yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oo(t):""}function Db(t){switch(t.tag){case 5:return oo(t.type);case 16:return oo("Lazy");case 13:return oo("Suspense");case 19:return oo("SuspenseList");case 0:case 2:case 15:return t=qu(t.type,!1),t;case 11:return t=qu(t.type.render,!1),t;case 1:return t=qu(t.type,!0),t;default:return""}}function sf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bi:return"Fragment";case zi:return"Portal";case tf:return"Profiler";case ep:return"StrictMode";case nf:return"Suspense";case rf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case T0:return(t.displayName||"Context")+".Consumer";case S0:return(t._context.displayName||"Context")+".Provider";case tp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case np:return e=t.displayName||null,e!==null?e:sf(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return sf(t(e))}catch{}}return null}function Lb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sf(e);case 8:return e===ep?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function k0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fb(t){var e=k0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Va(t){t._valueTracker||(t._valueTracker=Fb(t))}function I0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=k0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function of(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function N0(t,e){e=e.checked,e!=null&&Zh(t,"checked",e,!1)}function af(t,e){N0(t,e);var n=Mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lf(t,e.type,n):e.hasOwnProperty("defaultValue")&&lf(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lf(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ao=Array.isArray;function is(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(ao(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function x0(t,e){var n=Mr(e.value),r=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function R0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?R0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ga,O0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$b=["Webkit","ms","Moz","O"];Object.keys(vo).forEach(function(t){$b.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vo[e]=vo[t]})});function P0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vo.hasOwnProperty(t)&&vo[t]?(""+e).trim():e+"px"}function A0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=P0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Ub=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function df(t,e){if(e){if(Ub[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function ff(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hf=null;function rp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pf=null,ss=null,os=null;function Xg(t){if(t=Sa(t)){if(typeof pf!="function")throw Error(x(280));var e=t.stateNode;e&&(e=nu(e),pf(t.stateNode,t.type,e))}}function M0(t){ss?os?os.push(t):os=[t]:ss=t}function D0(){if(ss){var t=ss,e=os;if(os=ss=null,Xg(t),e)for(t=0;t<e.length;t++)Xg(e[t])}}function L0(t,e){return t(e)}function F0(){}var Qu=!1;function $0(t,e,n){if(Qu)return t(e,n);Qu=!0;try{return L0(t,e,n)}finally{Qu=!1,(ss!==null||os!==null)&&(F0(),D0())}}function zo(t,e){var n=t.stateNode;if(n===null)return null;var r=nu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var mf=!1;if(zn)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){mf=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{mf=!1}function zb(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var yo=!1,Yl=null,ql=!1,gf=null,Bb={onError:function(t){yo=!0,Yl=t}};function jb(t,e,n,r,i,s,o,a,l){yo=!1,Yl=null,zb.apply(Bb,arguments)}function Hb(t,e,n,r,i,s,o,a,l){if(jb.apply(this,arguments),yo){if(yo){var c=Yl;yo=!1,Yl=null}else throw Error(x(198));ql||(ql=!0,gf=c)}}function Ri(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function U0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jg(t){if(Ri(t)!==t)throw Error(x(188))}function Wb(t){var e=t.alternate;if(!e){if(e=Ri(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jg(i),t;if(s===r)return Jg(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function z0(t){return t=Wb(t),t!==null?B0(t):null}function B0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=B0(t);if(e!==null)return e;t=t.sibling}return null}var j0=Ft.unstable_scheduleCallback,Zg=Ft.unstable_cancelCallback,Vb=Ft.unstable_shouldYield,Gb=Ft.unstable_requestPaint,Ue=Ft.unstable_now,Kb=Ft.unstable_getCurrentPriorityLevel,ip=Ft.unstable_ImmediatePriority,H0=Ft.unstable_UserBlockingPriority,Ql=Ft.unstable_NormalPriority,Yb=Ft.unstable_LowPriority,W0=Ft.unstable_IdlePriority,Jc=null,vn=null;function qb(t){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(Jc,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:Jb,Qb=Math.log,Xb=Math.LN2;function Jb(t){return t>>>=0,t===0?32:31-(Qb(t)/Xb|0)|0}var Ka=64,Ya=4194304;function lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=lo(a):(s&=o,s!==0&&(r=lo(s)))}else o=n&~i,o!==0?r=lo(o):s!==0&&(r=lo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function Zb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ek(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Zb(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function vf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function V0(){var t=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),t}function Xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function tk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function sp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function G0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var K0,op,Y0,q0,Q0,yf=!1,qa=[],Cr=null,Sr=null,Tr=null,Bo=new Map,jo=new Map,ur=[],nk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ev(t,e){switch(t){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function Ys(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Sa(e),e!==null&&op(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function rk(t,e,n,r,i){switch(e){case"focusin":return Cr=Ys(Cr,t,e,n,r,i),!0;case"dragenter":return Sr=Ys(Sr,t,e,n,r,i),!0;case"mouseover":return Tr=Ys(Tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Bo.set(s,Ys(Bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,jo.set(s,Ys(jo.get(s)||null,t,e,n,r,i)),!0}return!1}function X0(t){var e=Jr(t.target);if(e!==null){var n=Ri(e);if(n!==null){if(e=n.tag,e===13){if(e=U0(n),e!==null){t.blockedOn=e,Q0(t.priority,function(){Y0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);hf=r,n.target.dispatchEvent(r),hf=null}else return e=Sa(n),e!==null&&op(e),t.blockedOn=n,!1;e.shift()}return!0}function tv(t,e,n){Nl(t)&&n.delete(e)}function ik(){yf=!1,Cr!==null&&Nl(Cr)&&(Cr=null),Sr!==null&&Nl(Sr)&&(Sr=null),Tr!==null&&Nl(Tr)&&(Tr=null),Bo.forEach(tv),jo.forEach(tv)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,yf||(yf=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,ik)))}function Ho(t){function e(i){return qs(i,t)}if(0<qa.length){qs(qa[0],t);for(var n=1;n<qa.length;n++){var r=qa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Cr!==null&&qs(Cr,t),Sr!==null&&qs(Sr,t),Tr!==null&&qs(Tr,t),Bo.forEach(e),jo.forEach(e),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)X0(n),n.blockedOn===null&&ur.shift()}var as=Qn.ReactCurrentBatchConfig,Jl=!0;function sk(t,e,n,r){var i=de,s=as.transition;as.transition=null;try{de=1,ap(t,e,n,r)}finally{de=i,as.transition=s}}function ok(t,e,n,r){var i=de,s=as.transition;as.transition=null;try{de=4,ap(t,e,n,r)}finally{de=i,as.transition=s}}function ap(t,e,n,r){if(Jl){var i=_f(t,e,n,r);if(i===null)ad(t,e,r,Zl,n),ev(t,r);else if(rk(i,t,e,n,r))r.stopPropagation();else if(ev(t,r),e&4&&-1<nk.indexOf(t)){for(;i!==null;){var s=Sa(i);if(s!==null&&K0(s),s=_f(t,e,n,r),s===null&&ad(t,e,r,Zl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ad(t,e,r,null,n)}}var Zl=null;function _f(t,e,n,r){if(Zl=null,t=rp(r),t=Jr(t),t!==null)if(e=Ri(t),e===null)t=null;else if(n=e.tag,n===13){if(t=U0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function J0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kb()){case ip:return 1;case H0:return 4;case Ql:case Yb:return 16;case W0:return 536870912;default:return 16}default:return 16}}var gr=null,lp=null,xl=null;function Z0(){if(xl)return xl;var t,e=lp,n=e.length,r,i="value"in gr?gr.value:gr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return xl=i.slice(t,1<r?1-r:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qa(){return!0}function nv(){return!1}function Ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qa:nv,this.isPropagationStopped=nv,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),e}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cp=Ut(As),Ca=xe({},As,{view:0,detail:0}),ak=Ut(Ca),Ju,Zu,Qs,Zc=xe({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:up,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(Ju=t.screenX-Qs.screenX,Zu=t.screenY-Qs.screenY):Zu=Ju=0,Qs=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:Zu}}),rv=Ut(Zc),lk=xe({},Zc,{dataTransfer:0}),ck=Ut(lk),uk=xe({},Ca,{relatedTarget:0}),ed=Ut(uk),dk=xe({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),fk=Ut(dk),hk=xe({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pk=Ut(hk),mk=xe({},As,{data:0}),iv=Ut(mk),gk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _k(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yk[t])?!!e[t]:!1}function up(){return _k}var wk=xe({},Ca,{key:function(t){if(t.key){var e=gk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:up,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ek=Ut(wk),Ck=xe({},Zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sv=Ut(Ck),Sk=xe({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:up}),Tk=Ut(Sk),bk=xe({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),kk=Ut(bk),Ik=xe({},Zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nk=Ut(Ik),xk=[9,13,27,32],dp=zn&&"CompositionEvent"in window,_o=null;zn&&"documentMode"in document&&(_o=document.documentMode);var Rk=zn&&"TextEvent"in window&&!_o,e1=zn&&(!dp||_o&&8<_o&&11>=_o),ov=String.fromCharCode(32),av=!1;function t1(t,e){switch(t){case"keyup":return xk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function n1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ji=!1;function Ok(t,e){switch(t){case"compositionend":return n1(e);case"keypress":return e.which!==32?null:(av=!0,ov);case"textInput":return t=e.data,t===ov&&av?null:t;default:return null}}function Pk(t,e){if(ji)return t==="compositionend"||!dp&&t1(t,e)?(t=Z0(),xl=lp=gr=null,ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return e1&&e.locale!=="ko"?null:e.data;default:return null}}var Ak={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ak[t.type]:e==="textarea"}function r1(t,e,n,r){M0(r),e=ec(e,"onChange"),0<e.length&&(n=new cp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wo=null,Wo=null;function Mk(t){p1(t,0)}function eu(t){var e=Vi(t);if(I0(e))return t}function Dk(t,e){if(t==="change")return e}var i1=!1;if(zn){var td;if(zn){var nd="oninput"in document;if(!nd){var cv=document.createElement("div");cv.setAttribute("oninput","return;"),nd=typeof cv.oninput=="function"}td=nd}else td=!1;i1=td&&(!document.documentMode||9<document.documentMode)}function uv(){wo&&(wo.detachEvent("onpropertychange",s1),Wo=wo=null)}function s1(t){if(t.propertyName==="value"&&eu(Wo)){var e=[];r1(e,Wo,t,rp(t)),$0(Mk,e)}}function Lk(t,e,n){t==="focusin"?(uv(),wo=e,Wo=n,wo.attachEvent("onpropertychange",s1)):t==="focusout"&&uv()}function Fk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eu(Wo)}function $k(t,e){if(t==="click")return eu(e)}function Uk(t,e){if(t==="input"||t==="change")return eu(e)}function zk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cn=typeof Object.is=="function"?Object.is:zk;function Vo(t,e){if(cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ef.call(e,i)||!cn(t[i],e[i]))return!1}return!0}function dv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fv(t,e){var n=dv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dv(n)}}function o1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?o1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function a1(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Bk(t){var e=a1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&o1(n.ownerDocument.documentElement,n)){if(r!==null&&fp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=fv(n,s);var o=fv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jk=zn&&"documentMode"in document&&11>=document.documentMode,Hi=null,wf=null,Eo=null,Ef=!1;function hv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ef||Hi==null||Hi!==Kl(r)||(r=Hi,"selectionStart"in r&&fp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&Vo(Eo,r)||(Eo=r,r=ec(wf,"onSelect"),0<r.length&&(e=new cp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hi)))}function Xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wi={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},rd={},l1={};zn&&(l1=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function tu(t){if(rd[t])return rd[t];if(!Wi[t])return t;var e=Wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in l1)return rd[t]=e[n];return t}var c1=tu("animationend"),u1=tu("animationiteration"),d1=tu("animationstart"),f1=tu("transitionend"),h1=new Map,pv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){h1.set(t,e),xi(e,[t])}for(var id=0;id<pv.length;id++){var sd=pv[id],Hk=sd.toLowerCase(),Wk=sd[0].toUpperCase()+sd.slice(1);jr(Hk,"on"+Wk)}jr(c1,"onAnimationEnd");jr(u1,"onAnimationIteration");jr(d1,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(f1,"onTransitionEnd");vs("onMouseEnter",["mouseout","mouseover"]);vs("onMouseLeave",["mouseout","mouseover"]);vs("onPointerEnter",["pointerout","pointerover"]);vs("onPointerLeave",["pointerout","pointerover"]);xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xi("onBeforeInput",["compositionend","keypress","textInput","paste"]);xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vk=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function mv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Hb(r,e,void 0,t),t.currentTarget=null}function p1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;mv(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;mv(i,a,c),s=l}}}if(ql)throw t=gf,ql=!1,gf=null,t}function _e(t,e){var n=e[kf];n===void 0&&(n=e[kf]=new Set);var r=t+"__bubble";n.has(r)||(m1(e,t,2,!1),n.add(r))}function od(t,e,n){var r=0;e&&(r|=4),m1(n,t,r,e)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function Go(t){if(!t[Ja]){t[Ja]=!0,C0.forEach(function(n){n!=="selectionchange"&&(Vk.has(n)||od(n,!1,t),od(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ja]||(e[Ja]=!0,od("selectionchange",!1,e))}}function m1(t,e,n,r){switch(J0(e)){case 1:var i=sk;break;case 4:i=ok;break;default:i=ap}n=i.bind(null,e,n,t),i=void 0,!mf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ad(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Jr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}$0(function(){var c=s,u=rp(n),d=[];e:{var f=h1.get(t);if(f!==void 0){var p=cp,m=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":p=Ek;break;case"focusin":m="focus",p=ed;break;case"focusout":m="blur",p=ed;break;case"beforeblur":case"afterblur":p=ed;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=rv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ck;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Tk;break;case c1:case u1:case d1:p=fk;break;case f1:p=kk;break;case"scroll":p=ak;break;case"wheel":p=Nk;break;case"copy":case"cut":case"paste":p=pk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=sv}var w=(e&4)!==0,C=!w&&t==="scroll",v=w?f!==null?f+"Capture":null:f;w=[];for(var y=c,_;y!==null;){_=y;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,v!==null&&(E=zo(y,v),E!=null&&w.push(Ko(y,E,_)))),C)break;y=y.return}0<w.length&&(f=new p(f,m,null,n,u),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==hf&&(m=n.relatedTarget||n.fromElement)&&(Jr(m)||m[Bn]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?Jr(m):null,m!==null&&(C=Ri(m),m!==C||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(w=rv,E="onMouseLeave",v="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(w=sv,E="onPointerLeave",v="onPointerEnter",y="pointer"),C=p==null?f:Vi(p),_=m==null?f:Vi(m),f=new w(E,y+"leave",p,n,u),f.target=C,f.relatedTarget=_,E=null,Jr(u)===c&&(w=new w(v,y+"enter",m,n,u),w.target=_,w.relatedTarget=C,E=w),C=E,p&&m)t:{for(w=p,v=m,y=0,_=w;_;_=Li(_))y++;for(_=0,E=v;E;E=Li(E))_++;for(;0<y-_;)w=Li(w),y--;for(;0<_-y;)v=Li(v),_--;for(;y--;){if(w===v||v!==null&&w===v.alternate)break t;w=Li(w),v=Li(v)}w=null}else w=null;p!==null&&gv(d,f,p,w,!1),m!==null&&C!==null&&gv(d,C,m,w,!0)}}e:{if(f=c?Vi(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var S=Dk;else if(lv(f))if(i1)S=Uk;else{S=Fk;var T=Lk}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=$k);if(S&&(S=S(t,c))){r1(d,S,n,u);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&lf(f,"number",f.value)}switch(T=c?Vi(c):window,t){case"focusin":(lv(T)||T.contentEditable==="true")&&(Hi=T,wf=c,Eo=null);break;case"focusout":Eo=wf=Hi=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,hv(d,n,u);break;case"selectionchange":if(jk)break;case"keydown":case"keyup":hv(d,n,u)}var b;if(dp)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else ji?t1(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(e1&&n.locale!=="ko"&&(ji||k!=="onCompositionStart"?k==="onCompositionEnd"&&ji&&(b=Z0()):(gr=u,lp="value"in gr?gr.value:gr.textContent,ji=!0)),T=ec(c,k),0<T.length&&(k=new iv(k,t,null,n,u),d.push({event:k,listeners:T}),b?k.data=b:(b=n1(n),b!==null&&(k.data=b)))),(b=Rk?Ok(t,n):Pk(t,n))&&(c=ec(c,"onBeforeInput"),0<c.length&&(u=new iv("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=b))}p1(d,e)})}function Ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ec(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=zo(t,n),s!=null&&r.unshift(Ko(t,s,i)),s=zo(t,e),s!=null&&r.push(Ko(t,s,i))),t=t.return}return r}function Li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=zo(n,s),l!=null&&o.unshift(Ko(n,l,a))):i||(l=zo(n,s),l!=null&&o.push(Ko(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Gk=/\r\n?/g,Kk=/\u0000|\uFFFD/g;function vv(t){return(typeof t=="string"?t:""+t).replace(Gk,`
`).replace(Kk,"")}function Za(t,e,n){if(e=vv(e),vv(t)!==e&&n)throw Error(x(425))}function tc(){}var Cf=null,Sf=null;function Tf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bf=typeof setTimeout=="function"?setTimeout:void 0,Yk=typeof clearTimeout=="function"?clearTimeout:void 0,yv=typeof Promise=="function"?Promise:void 0,qk=typeof queueMicrotask=="function"?queueMicrotask:typeof yv<"u"?function(t){return yv.resolve(null).then(t).catch(Qk)}:bf;function Qk(t){setTimeout(function(){throw t})}function ld(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ho(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _v(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),pn="__reactFiber$"+Ms,Yo="__reactProps$"+Ms,Bn="__reactContainer$"+Ms,kf="__reactEvents$"+Ms,Xk="__reactListeners$"+Ms,Jk="__reactHandles$"+Ms;function Jr(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bn]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_v(t);t!==null;){if(n=t[pn])return n;t=_v(t)}return e}t=n,n=t.parentNode}return null}function Sa(t){return t=t[pn]||t[Bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function nu(t){return t[Yo]||null}var If=[],Gi=-1;function Hr(t){return{current:t}}function Ee(t){0>Gi||(t.current=If[Gi],If[Gi]=null,Gi--)}function ye(t,e){Gi++,If[Gi]=t.current,t.current=e}var Dr={},ft=Hr(Dr),xt=Hr(!1),fi=Dr;function ys(t,e){var n=t.type.contextTypes;if(!n)return Dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Rt(t){return t=t.childContextTypes,t!=null}function nc(){Ee(xt),Ee(ft)}function wv(t,e,n){if(ft.current!==Dr)throw Error(x(168));ye(ft,e),ye(xt,n)}function g1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,Lb(t)||"Unknown",i));return xe({},n,r)}function rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,fi=ft.current,ye(ft,t),ye(xt,xt.current),!0}function Ev(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=g1(t,e,fi),r.__reactInternalMemoizedMergedChildContext=t,Ee(xt),Ee(ft),ye(ft,t)):Ee(xt),ye(xt,n)}var Nn=null,ru=!1,cd=!1;function v1(t){Nn===null?Nn=[t]:Nn.push(t)}function Zk(t){ru=!0,v1(t)}function Wr(){if(!cd&&Nn!==null){cd=!0;var t=0,e=de;try{var n=Nn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nn=null,ru=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(t+1)),j0(ip,Wr),i}finally{de=e,cd=!1}}return null}var Ki=[],Yi=0,ic=null,sc=0,jt=[],Ht=0,hi=null,On=1,Pn="";function Gr(t,e){Ki[Yi++]=sc,Ki[Yi++]=ic,ic=t,sc=e}function y1(t,e,n){jt[Ht++]=On,jt[Ht++]=Pn,jt[Ht++]=hi,hi=t;var r=On;t=Pn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,On=1<<32-on(e)+i|n<<i|r,Pn=s+t}else On=1<<s|n<<i|r,Pn=t}function hp(t){t.return!==null&&(Gr(t,1),y1(t,1,0))}function pp(t){for(;t===ic;)ic=Ki[--Yi],Ki[Yi]=null,sc=Ki[--Yi],Ki[Yi]=null;for(;t===hi;)hi=jt[--Ht],jt[Ht]=null,Pn=jt[--Ht],jt[Ht]=null,On=jt[--Ht],jt[Ht]=null}var Lt=null,Mt=null,be=!1,en=null;function _1(t,e){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Cv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Lt=t,Mt=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Lt=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hi!==null?{id:On,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Lt=t,Mt=null,!0):!1;default:return!1}}function Nf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xf(t){if(be){var e=Mt;if(e){var n=e;if(!Cv(t,e)){if(Nf(t))throw Error(x(418));e=br(n.nextSibling);var r=Lt;e&&Cv(t,e)?_1(r,n):(t.flags=t.flags&-4097|2,be=!1,Lt=t)}}else{if(Nf(t))throw Error(x(418));t.flags=t.flags&-4097|2,be=!1,Lt=t}}}function Sv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lt=t}function el(t){if(t!==Lt)return!1;if(!be)return Sv(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Tf(t.type,t.memoizedProps)),e&&(e=Mt)){if(Nf(t))throw w1(),Error(x(418));for(;e;)_1(t,e),e=br(e.nextSibling)}if(Sv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=Lt?br(t.stateNode.nextSibling):null;return!0}function w1(){for(var t=Mt;t;)t=br(t.nextSibling)}function _s(){Mt=Lt=null,be=!1}function mp(t){en===null?en=[t]:en.push(t)}var eI=Qn.ReactCurrentBatchConfig;function Jt(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var oc=Hr(null),ac=null,qi=null,gp=null;function vp(){gp=qi=ac=null}function yp(t){var e=oc.current;Ee(oc),t._currentValue=e}function Rf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ls(t,e){ac=t,gp=qi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(bt=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(gp!==t)if(t={context:t,memoizedValue:e,next:null},qi===null){if(ac===null)throw Error(x(308));qi=t,ac.dependencies={lanes:0,firstContext:t}}else qi=qi.next=t;return e}var Zr=null;function _p(t){Zr===null?Zr=[t]:Zr.push(t)}function E1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_p(e)):(n.next=i.next,i.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function wp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function C1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jn(t,n)}return i=r.interleaved,i===null?(e.next=e,_p(r)):(e.next=i.next,i.next=e),r.interleaved=e,jn(t,n)}function Ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sp(t,n)}}function Tv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lc(t,e,n,r){var i=t.updateQueue;lr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,w=a;switch(f=e,p=n,w.tag){case 1:if(m=w.payload,typeof m=="function"){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=w.payload,f=typeof m=="function"?m.call(p,d,f):m,f==null)break e;d=xe({},d,f);break e;case 2:lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);mi|=o,t.lanes=o,t.memoizedState=d}}function bv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var S1=new E0.Component().refs;function Of(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var iu={isMounted:function(t){return(t=t._reactInternals)?Ri(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_t(),i=Nr(t),s=Fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(an(e,t,i,r),Ol(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_t(),i=Nr(t),s=Fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kr(t,s,i),e!==null&&(an(e,t,i,r),Ol(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_t(),r=Nr(t),i=Fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=kr(t,i,r),e!==null&&(an(e,t,r,n),Ol(e,t,r))}};function kv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vo(n,r)||!Vo(i,s):!0}function T1(t,e,n){var r=!1,i=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=Rt(e)?fi:ft.current,r=e.contextTypes,s=(r=r!=null)?ys(t,i):Dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Iv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function Pf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=S1,wp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=Rt(e)?fi:ft.current,i.context=ys(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Of(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&iu.enqueueReplaceState(i,i.state,null),lc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===S1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function tl(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nv(t){var e=t._init;return e(t._payload)}function b1(t){function e(v,y){if(t){var _=v.deletions;_===null?(v.deletions=[y],v.flags|=16):_.push(y)}}function n(v,y){if(!t)return null;for(;y!==null;)e(v,y),y=y.sibling;return null}function r(v,y){for(v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function i(v,y){return v=xr(v,y),v.index=0,v.sibling=null,v}function s(v,y,_){return v.index=_,t?(_=v.alternate,_!==null?(_=_.index,_<y?(v.flags|=2,y):_):(v.flags|=2,y)):(v.flags|=1048576,y)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,y,_,E){return y===null||y.tag!==6?(y=gd(_,v.mode,E),y.return=v,y):(y=i(y,_),y.return=v,y)}function l(v,y,_,E){var S=_.type;return S===Bi?u(v,y,_.props.children,E,_.key):y!==null&&(y.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ar&&Nv(S)===y.type)?(E=i(y,_.props),E.ref=Xs(v,y,_),E.return=v,E):(E=Fl(_.type,_.key,_.props,null,v.mode,E),E.ref=Xs(v,y,_),E.return=v,E)}function c(v,y,_,E){return y===null||y.tag!==4||y.stateNode.containerInfo!==_.containerInfo||y.stateNode.implementation!==_.implementation?(y=vd(_,v.mode,E),y.return=v,y):(y=i(y,_.children||[]),y.return=v,y)}function u(v,y,_,E,S){return y===null||y.tag!==7?(y=oi(_,v.mode,E,S),y.return=v,y):(y=i(y,_),y.return=v,y)}function d(v,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return y=gd(""+y,v.mode,_),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wa:return _=Fl(y.type,y.key,y.props,null,v.mode,_),_.ref=Xs(v,null,y),_.return=v,_;case zi:return y=vd(y,v.mode,_),y.return=v,y;case ar:var E=y._init;return d(v,E(y._payload),_)}if(ao(y)||Gs(y))return y=oi(y,v.mode,_,null),y.return=v,y;tl(v,y)}return null}function f(v,y,_,E){var S=y!==null?y.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:a(v,y,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Wa:return _.key===S?l(v,y,_,E):null;case zi:return _.key===S?c(v,y,_,E):null;case ar:return S=_._init,f(v,y,S(_._payload),E)}if(ao(_)||Gs(_))return S!==null?null:u(v,y,_,E,null);tl(v,_)}return null}function p(v,y,_,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(_)||null,a(y,v,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Wa:return v=v.get(E.key===null?_:E.key)||null,l(y,v,E,S);case zi:return v=v.get(E.key===null?_:E.key)||null,c(y,v,E,S);case ar:var T=E._init;return p(v,y,_,T(E._payload),S)}if(ao(E)||Gs(E))return v=v.get(_)||null,u(y,v,E,S,null);tl(y,E)}return null}function m(v,y,_,E){for(var S=null,T=null,b=y,k=y=0,D=null;b!==null&&k<_.length;k++){b.index>k?(D=b,b=null):D=b.sibling;var M=f(v,b,_[k],E);if(M===null){b===null&&(b=D);break}t&&b&&M.alternate===null&&e(v,b),y=s(M,y,k),T===null?S=M:T.sibling=M,T=M,b=D}if(k===_.length)return n(v,b),be&&Gr(v,k),S;if(b===null){for(;k<_.length;k++)b=d(v,_[k],E),b!==null&&(y=s(b,y,k),T===null?S=b:T.sibling=b,T=b);return be&&Gr(v,k),S}for(b=r(v,b);k<_.length;k++)D=p(b,v,k,_[k],E),D!==null&&(t&&D.alternate!==null&&b.delete(D.key===null?k:D.key),y=s(D,y,k),T===null?S=D:T.sibling=D,T=D);return t&&b.forEach(function(H){return e(v,H)}),be&&Gr(v,k),S}function w(v,y,_,E){var S=Gs(_);if(typeof S!="function")throw Error(x(150));if(_=S.call(_),_==null)throw Error(x(151));for(var T=S=null,b=y,k=y=0,D=null,M=_.next();b!==null&&!M.done;k++,M=_.next()){b.index>k?(D=b,b=null):D=b.sibling;var H=f(v,b,M.value,E);if(H===null){b===null&&(b=D);break}t&&b&&H.alternate===null&&e(v,b),y=s(H,y,k),T===null?S=H:T.sibling=H,T=H,b=D}if(M.done)return n(v,b),be&&Gr(v,k),S;if(b===null){for(;!M.done;k++,M=_.next())M=d(v,M.value,E),M!==null&&(y=s(M,y,k),T===null?S=M:T.sibling=M,T=M);return be&&Gr(v,k),S}for(b=r(v,b);!M.done;k++,M=_.next())M=p(b,v,k,M.value,E),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?k:M.key),y=s(M,y,k),T===null?S=M:T.sibling=M,T=M);return t&&b.forEach(function(Y){return e(v,Y)}),be&&Gr(v,k),S}function C(v,y,_,E){if(typeof _=="object"&&_!==null&&_.type===Bi&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Wa:e:{for(var S=_.key,T=y;T!==null;){if(T.key===S){if(S=_.type,S===Bi){if(T.tag===7){n(v,T.sibling),y=i(T,_.props.children),y.return=v,v=y;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ar&&Nv(S)===T.type){n(v,T.sibling),y=i(T,_.props),y.ref=Xs(v,T,_),y.return=v,v=y;break e}n(v,T);break}else e(v,T);T=T.sibling}_.type===Bi?(y=oi(_.props.children,v.mode,E,_.key),y.return=v,v=y):(E=Fl(_.type,_.key,_.props,null,v.mode,E),E.ref=Xs(v,y,_),E.return=v,v=E)}return o(v);case zi:e:{for(T=_.key;y!==null;){if(y.key===T)if(y.tag===4&&y.stateNode.containerInfo===_.containerInfo&&y.stateNode.implementation===_.implementation){n(v,y.sibling),y=i(y,_.children||[]),y.return=v,v=y;break e}else{n(v,y);break}else e(v,y);y=y.sibling}y=vd(_,v.mode,E),y.return=v,v=y}return o(v);case ar:return T=_._init,C(v,y,T(_._payload),E)}if(ao(_))return m(v,y,_,E);if(Gs(_))return w(v,y,_,E);tl(v,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,y!==null&&y.tag===6?(n(v,y.sibling),y=i(y,_),y.return=v,v=y):(n(v,y),y=gd(_,v.mode,E),y.return=v,v=y),o(v)):n(v,y)}return C}var ws=b1(!0),k1=b1(!1),Ta={},yn=Hr(Ta),qo=Hr(Ta),Qo=Hr(Ta);function ei(t){if(t===Ta)throw Error(x(174));return t}function Ep(t,e){switch(ye(Qo,e),ye(qo,t),ye(yn,Ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uf(e,t)}Ee(yn),ye(yn,e)}function Es(){Ee(yn),Ee(qo),Ee(Qo)}function I1(t){ei(Qo.current);var e=ei(yn.current),n=uf(e,t.type);e!==n&&(ye(qo,t),ye(yn,n))}function Cp(t){qo.current===t&&(Ee(yn),Ee(qo))}var Ie=Hr(0);function cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ud=[];function Sp(){for(var t=0;t<ud.length;t++)ud[t]._workInProgressVersionPrimary=null;ud.length=0}var Pl=Qn.ReactCurrentDispatcher,dd=Qn.ReactCurrentBatchConfig,pi=0,Ne=null,je=null,Qe=null,uc=!1,Co=!1,Xo=0,tI=0;function ct(){throw Error(x(321))}function Tp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cn(t[n],e[n]))return!1;return!0}function bp(t,e,n,r,i,s){if(pi=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?sI:oI,t=n(r,i),Co){s=0;do{if(Co=!1,Xo=0,25<=s)throw Error(x(301));s+=1,Qe=je=null,e.updateQueue=null,Pl.current=aI,t=n(r,i)}while(Co)}if(Pl.current=dc,e=je!==null&&je.next!==null,pi=0,Qe=je=Ne=null,uc=!1,e)throw Error(x(300));return t}function kp(){var t=Xo!==0;return Xo=0,t}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Ne.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function qt(){if(je===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=Qe===null?Ne.memoizedState:Qe.next;if(e!==null)Qe=e,je=t;else{if(t===null)throw Error(x(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Qe===null?Ne.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function Jo(t,e){return typeof e=="function"?e(t):e}function fd(t){var e=qt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((pi&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Ne.lanes|=u,mi|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,cn(r,e.memoizedState)||(bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,mi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hd(t){var e=qt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);cn(s,e.memoizedState)||(bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function N1(){}function x1(t,e){var n=Ne,r=qt(),i=e(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,bt=!0),r=r.queue,Ip(P1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,Zo(9,O1.bind(null,n,r,i,e),void 0,null),et===null)throw Error(x(349));pi&30||R1(n,e,i)}return i}function R1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function O1(t,e,n,r){e.value=n,e.getSnapshot=r,A1(e)&&M1(t)}function P1(t,e,n){return n(function(){A1(e)&&M1(t)})}function A1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cn(t,n)}catch{return!0}}function M1(t){var e=jn(t,1);e!==null&&an(e,t,1,-1)}function xv(t){var e=fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:t},e.queue=t,t=t.dispatch=iI.bind(null,Ne,t),[e.memoizedState,t]}function Zo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function D1(){return qt().memoizedState}function Al(t,e,n,r){var i=fn();Ne.flags|=t,i.memoizedState=Zo(1|e,n,void 0,r===void 0?null:r)}function su(t,e,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&Tp(r,o.deps)){i.memoizedState=Zo(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=Zo(1|e,n,s,r)}function Rv(t,e){return Al(8390656,8,t,e)}function Ip(t,e){return su(2048,8,t,e)}function L1(t,e){return su(4,2,t,e)}function F1(t,e){return su(4,4,t,e)}function $1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function U1(t,e,n){return n=n!=null?n.concat([t]):null,su(4,4,$1.bind(null,e,t),n)}function Np(){}function z1(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function B1(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function j1(t,e,n){return pi&21?(cn(n,e)||(n=V0(),Ne.lanes|=n,mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,bt=!0),t.memoizedState=n)}function nI(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=dd.transition;dd.transition={};try{t(!1),e()}finally{de=n,dd.transition=r}}function H1(){return qt().memoizedState}function rI(t,e,n){var r=Nr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},W1(t))V1(e,n);else if(n=E1(t,e,n,r),n!==null){var i=_t();an(n,t,r,i),G1(n,e,r)}}function iI(t,e,n){var r=Nr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(W1(t))V1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,cn(a,o)){var l=e.interleaved;l===null?(i.next=i,_p(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=E1(t,e,i,r),n!==null&&(i=_t(),an(n,t,r,i),G1(n,e,r))}}function W1(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function V1(t,e){Co=uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function G1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sp(t,n)}}var dc={readContext:Yt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},sI={readContext:Yt,useCallback:function(t,e){return fn().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:Rv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Al(4194308,4,$1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Al(4194308,4,t,e)},useInsertionEffect:function(t,e){return Al(4,2,t,e)},useMemo:function(t,e){var n=fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=rI.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=fn();return t={current:t},e.memoizedState=t},useState:xv,useDebugValue:Np,useDeferredValue:function(t){return fn().memoizedState=t},useTransition:function(){var t=xv(!1),e=t[0];return t=nI.bind(null,t[1]),fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=fn();if(be){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),et===null)throw Error(x(349));pi&30||R1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Rv(P1.bind(null,r,s,t),[t]),r.flags|=2048,Zo(9,O1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=fn(),e=et.identifierPrefix;if(be){var n=Pn,r=On;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},oI={readContext:Yt,useCallback:z1,useContext:Yt,useEffect:Ip,useImperativeHandle:U1,useInsertionEffect:L1,useLayoutEffect:F1,useMemo:B1,useReducer:fd,useRef:D1,useState:function(){return fd(Jo)},useDebugValue:Np,useDeferredValue:function(t){var e=qt();return j1(e,je.memoizedState,t)},useTransition:function(){var t=fd(Jo)[0],e=qt().memoizedState;return[t,e]},useMutableSource:N1,useSyncExternalStore:x1,useId:H1,unstable_isNewReconciler:!1},aI={readContext:Yt,useCallback:z1,useContext:Yt,useEffect:Ip,useImperativeHandle:U1,useInsertionEffect:L1,useLayoutEffect:F1,useMemo:B1,useReducer:hd,useRef:D1,useState:function(){return hd(Jo)},useDebugValue:Np,useDeferredValue:function(t){var e=qt();return je===null?e.memoizedState=t:j1(e,je.memoizedState,t)},useTransition:function(){var t=hd(Jo)[0],e=qt().memoizedState;return[t,e]},useMutableSource:N1,useSyncExternalStore:x1,useId:H1,unstable_isNewReconciler:!1};function Cs(t,e){try{var n="",r=e;do n+=Db(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lI=typeof WeakMap=="function"?WeakMap:Map;function K1(t,e,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){hc||(hc=!0,Hf=r),Af(t,e)},n}function Y1(t,e,n){n=Fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Af(t,e),typeof r!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ov(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new lI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=CI.bind(null,t,e,n),e.then(t,t))}function Pv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Av(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fn(-1,1),e.tag=2,kr(n,e,1))),n.lanes|=1),t)}var cI=Qn.ReactCurrentOwner,bt=!1;function gt(t,e,n,r){e.child=t===null?k1(e,null,n,r):ws(e,t.child,n,r)}function Mv(t,e,n,r,i){n=n.render;var s=e.ref;return ls(e,i),r=bp(t,e,n,r,s,i),n=kp(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(be&&n&&hp(e),e.flags|=1,gt(t,e,r,i),e.child)}function Dv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Lp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,q1(t,e,s,r,i)):(t=Fl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(o,r)&&t.ref===e.ref)return Hn(t,e,i)}return e.flags|=1,t=xr(s,r),t.ref=e.ref,t.return=e,e.child=t}function q1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Vo(s,r)&&t.ref===e.ref)if(bt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(bt=!0);else return e.lanes=t.lanes,Hn(t,e,i)}return Mf(t,e,n,r,i)}function Q1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Xi,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Xi,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(Xi,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(Xi,At),At|=r;return gt(t,e,i,n),e.child}function X1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mf(t,e,n,r,i){var s=Rt(n)?fi:ft.current;return s=ys(e,s),ls(e,i),n=bp(t,e,n,r,s,i),r=kp(),t!==null&&!bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(be&&r&&hp(e),e.flags|=1,gt(t,e,n,i),e.child)}function Lv(t,e,n,r,i){if(Rt(n)){var s=!0;rc(e)}else s=!1;if(ls(e,i),e.stateNode===null)Ml(t,e),T1(e,n,r),Pf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yt(c):(c=Rt(n)?fi:ft.current,c=ys(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Iv(e,o,r,c),lr=!1;var f=e.memoizedState;o.state=f,lc(e,r,o,i),l=e.memoizedState,a!==r||f!==l||xt.current||lr?(typeof u=="function"&&(Of(e,n,u,r),l=e.memoizedState),(a=lr||kv(e,n,a,r,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,C1(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Jt(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yt(l):(l=Rt(n)?fi:ft.current,l=ys(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Iv(e,o,r,l),lr=!1,f=e.memoizedState,o.state=f,lc(e,r,o,i);var m=e.memoizedState;a!==d||f!==m||xt.current||lr?(typeof p=="function"&&(Of(e,n,p,r),m=e.memoizedState),(c=lr||kv(e,n,c,r,f,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Df(t,e,n,r,s,i)}function Df(t,e,n,r,i,s){X1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ev(e,n,!1),Hn(t,e,s);r=e.stateNode,cI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ws(e,t.child,null,s),e.child=ws(e,null,a,s)):gt(t,e,a,s),e.memoizedState=r.state,i&&Ev(e,n,!0),e.child}function J1(t){var e=t.stateNode;e.pendingContext?wv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wv(t,e.context,!1),Ep(t,e.containerInfo)}function Fv(t,e,n,r,i){return _s(),mp(i),e.flags|=256,gt(t,e,n,r),e.child}var Lf={dehydrated:null,treeContext:null,retryLane:0};function Ff(t){return{baseLanes:t,cachePool:null,transitions:null}}function Z1(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Ie,i&1),t===null)return xf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lu(o,r,0,null),t=oi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ff(n),e.memoizedState=Lf,t):xp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return uI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=xr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=xr(a,s):(s=oi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ff(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lf,r}return s=t.child,t=s.sibling,r=xr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xp(t,e){return e=lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function nl(t,e,n,r){return r!==null&&mp(r),ws(e,t.child,null,n),t=xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=pd(Error(x(422))),nl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=lu({mode:"visible",children:r.children},i,0,null),s=oi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ws(e,t.child,null,o),e.child.memoizedState=Ff(o),e.memoizedState=Lf,s);if(!(e.mode&1))return nl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=pd(s,r,void 0),nl(t,e,o,r)}if(a=(o&t.childLanes)!==0,bt||a){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jn(t,i),an(r,t,i,-1))}return Dp(),r=pd(Error(x(421))),nl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=SI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mt=br(i.nextSibling),Lt=e,be=!0,en=null,t!==null&&(jt[Ht++]=On,jt[Ht++]=Pn,jt[Ht++]=hi,On=t.id,Pn=t.overflow,hi=e),e=xp(e,r.children),e.flags|=4096,e)}function $v(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rf(t.return,e,n)}function md(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function ew(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(gt(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$v(t,n,e);else if(t.tag===19)$v(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&cc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),md(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&cc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}md(e,!0,n,null,s);break;case"together":md(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dI(t,e,n){switch(e.tag){case 3:J1(e),_s();break;case 5:I1(e);break;case 1:Rt(e.type)&&rc(e);break;case 4:Ep(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(oc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?Z1(t,e,n):(ye(Ie,Ie.current&1),t=Hn(t,e,n),t!==null?t.sibling:null);ye(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ew(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Q1(t,e,n)}return Hn(t,e,n)}var tw,$f,nw,rw;tw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$f=function(){};nw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ei(yn.current);var s=null;switch(n){case"input":i=of(t,i),r=of(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=cf(t,i),r=cf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=tc)}df(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($o.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};rw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Js(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fI(t,e,n){var r=e.pendingProps;switch(pp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return Rt(e.type)&&nc(),ut(e),null;case 3:return r=e.stateNode,Es(),Ee(xt),Ee(ft),Sp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(el(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,en!==null&&(Gf(en),en=null))),$f(t,e),ut(e),null;case 5:Cp(e);var i=ei(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)nw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return ut(e),null}if(t=ei(yn.current),el(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pn]=e,r[Yo]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<co.length;i++)_e(co[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":Kg(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":qg(r,s),_e("invalid",r)}df(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Za(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Za(r.textContent,a,t),i=["children",""+a]):$o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Va(r),Yg(r,s,!0);break;case"textarea":Va(r),Qg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=tc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=R0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pn]=e,t[Yo]=r,tw(t,e,!1,!1),e.stateNode=t;e:{switch(o=ff(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<co.length;i++)_e(co[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":Kg(t,r),i=of(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),_e("invalid",t);break;case"textarea":qg(t,r),i=cf(t,r),_e("invalid",t);break;default:i=r}df(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?A0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&O0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Uo(t,l):typeof l=="number"&&Uo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",t):l!=null&&Zh(t,s,l,o))}switch(n){case"input":Va(t),Yg(t,r,!1);break;case"textarea":Va(t),Qg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?is(t,!!r.multiple,s,!1):r.defaultValue!=null&&is(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=tc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)rw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=ei(Qo.current),ei(yn.current),el(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(s=r.nodeValue!==n)&&(t=Lt,t!==null))switch(t.tag){case 3:Za(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Za(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return ut(e),null;case 13:if(Ee(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&Mt!==null&&e.mode&1&&!(e.flags&128))w1(),_s(),e.flags|=98560,s=!1;else if(s=el(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[pn]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ut(e),s=!1}else en!==null&&(Gf(en),en=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?He===0&&(He=3):Dp())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return Es(),$f(t,e),t===null&&Go(e.stateNode.containerInfo),ut(e),null;case 10:return yp(e.type._context),ut(e),null;case 17:return Rt(e.type)&&nc(),ut(e),null;case 19:if(Ee(Ie),s=e.memoizedState,s===null)return ut(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Js(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cc(t),o!==null){for(e.flags|=128,Js(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>Ss&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304)}else{if(!r)if(t=cc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!be)return ut(e),null}else 2*Ue()-s.renderingStartTime>Ss&&n!==1073741824&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=Ie.current,ye(Ie,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return Mp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function hI(t,e){switch(pp(e),e.tag){case 1:return Rt(e.type)&&nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Es(),Ee(xt),Ee(ft),Sp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cp(e),null;case 13:if(Ee(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Ie),null;case 4:return Es(),null;case 10:return yp(e.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var rl=!1,dt=!1,pI=typeof WeakSet=="function"?WeakSet:Set,$=null;function Qi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function Uf(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Uv=!1;function mI(t,e){if(Cf=Jl,t=a1(),fp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++u===r&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sf={focusedElem:t,selectionRange:n},Jl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var w=m.memoizedProps,C=m.memoizedState,v=e.stateNode,y=v.getSnapshotBeforeUpdate(e.elementType===e.type?w:Jt(e.type,w),C);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(E){Ae(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return m=Uv,Uv=!1,m}function So(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Uf(e,n,s)}i=i.next}while(i!==r)}}function ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function iw(t){var e=t.alternate;e!==null&&(t.alternate=null,iw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[Yo],delete e[kf],delete e[Xk],delete e[Jk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sw(t){return t.tag===5||t.tag===3||t.tag===4}function zv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tc));else if(r!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}function jf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jf(t,e,n),t=t.sibling;t!==null;)jf(t,e,n),t=t.sibling}var nt=null,Zt=!1;function ir(t,e,n){for(n=n.child;n!==null;)ow(t,e,n),n=n.sibling}function ow(t,e,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(Jc,n)}catch{}switch(n.tag){case 5:dt||Qi(n,e);case 6:var r=nt,i=Zt;nt=null,ir(t,e,n),nt=r,Zt=i,nt!==null&&(Zt?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(Zt?(t=nt,n=n.stateNode,t.nodeType===8?ld(t.parentNode,n):t.nodeType===1&&ld(t,n),Ho(t)):ld(nt,n.stateNode));break;case 4:r=nt,i=Zt,nt=n.stateNode.containerInfo,Zt=!0,ir(t,e,n),nt=r,Zt=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Uf(n,e,o),i=i.next}while(i!==r)}ir(t,e,n);break;case 1:if(!dt&&(Qi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ae(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,ir(t,e,n),dt=r):ir(t,e,n);break;default:ir(t,e,n)}}function Bv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new pI),e.forEach(function(r){var i=TI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:nt=a.stateNode,Zt=!1;break e;case 3:nt=a.stateNode.containerInfo,Zt=!0;break e;case 4:nt=a.stateNode.containerInfo,Zt=!0;break e}a=a.return}if(nt===null)throw Error(x(160));ow(s,o,i),nt=null,Zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)aw(e,t),e=e.sibling}function aw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qt(e,t),dn(t),r&4){try{So(3,t,t.return),ou(3,t)}catch(w){Ae(t,t.return,w)}try{So(5,t,t.return)}catch(w){Ae(t,t.return,w)}}break;case 1:Qt(e,t),dn(t),r&512&&n!==null&&Qi(n,n.return);break;case 5:if(Qt(e,t),dn(t),r&512&&n!==null&&Qi(n,n.return),t.flags&32){var i=t.stateNode;try{Uo(i,"")}catch(w){Ae(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&N0(i,s),ff(a,o);var c=ff(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?A0(i,d):u==="dangerouslySetInnerHTML"?O0(i,d):u==="children"?Uo(i,d):Zh(i,u,d,c)}switch(a){case"input":af(i,s);break;case"textarea":x0(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?is(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?is(i,!!s.multiple,s.defaultValue,!0):is(i,!!s.multiple,s.multiple?[]:"",!1))}i[Yo]=s}catch(w){Ae(t,t.return,w)}}break;case 6:if(Qt(e,t),dn(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Ae(t,t.return,w)}}break;case 3:if(Qt(e,t),dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ho(e.containerInfo)}catch(w){Ae(t,t.return,w)}break;case 4:Qt(e,t),dn(t);break;case 13:Qt(e,t),dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pp=Ue())),r&4&&Bv(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(c=dt)||u,Qt(e,t),dt=c):Qt(e,t),dn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for($=t,u=t.child;u!==null;){for(d=$=u;$!==null;){switch(f=$,p=f.child,f.tag){case 0:case 11:case 14:case 15:So(4,f,f.return);break;case 1:Qi(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(w){Ae(r,n,w)}}break;case 5:Qi(f,f.return);break;case 22:if(f.memoizedState!==null){Hv(d);continue}}p!==null?(p.return=f,$=p):Hv(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=P0("display",o))}catch(w){Ae(t,t.return,w)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){Ae(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qt(e,t),dn(t),r&4&&Bv(t);break;case 21:break;default:Qt(e,t),dn(t)}}function dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(sw(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Uo(i,""),r.flags&=-33);var s=zv(t);jf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=zv(t);Bf(t,a,o);break;default:throw Error(x(161))}}catch(l){Ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gI(t,e,n){$=t,lw(t)}function lw(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||rl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||dt;a=rl;var c=dt;if(rl=o,(dt=l)&&!c)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?Wv(i):l!==null?(l.return=o,$=l):Wv(i);for(;s!==null;)$=s,lw(s),s=s.sibling;$=i,rl=a,dt=c}jv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):jv(t)}}function jv(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||ou(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ho(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}dt||e.flags&512&&zf(e)}catch(f){Ae(e,e.return,f)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Hv(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Wv(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ou(4,e)}catch(l){Ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ae(e,i,l)}}var s=e.return;try{zf(e)}catch(l){Ae(e,s,l)}break;case 5:var o=e.return;try{zf(e)}catch(l){Ae(e,o,l)}}}catch(l){Ae(e,e.return,l)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var vI=Math.ceil,fc=Qn.ReactCurrentDispatcher,Rp=Qn.ReactCurrentOwner,Kt=Qn.ReactCurrentBatchConfig,oe=0,et=null,ze=null,it=0,At=0,Xi=Hr(0),He=0,ea=null,mi=0,au=0,Op=0,To=null,Tt=null,Pp=0,Ss=1/0,In=null,hc=!1,Hf=null,Ir=null,il=!1,vr=null,pc=0,bo=0,Wf=null,Dl=-1,Ll=0;function _t(){return oe&6?Ue():Dl!==-1?Dl:Dl=Ue()}function Nr(t){return t.mode&1?oe&2&&it!==0?it&-it:eI.transition!==null?(Ll===0&&(Ll=V0()),Ll):(t=de,t!==0||(t=window.event,t=t===void 0?16:J0(t.type)),t):1}function an(t,e,n,r){if(50<bo)throw bo=0,Wf=null,Error(x(185));Ea(t,n,r),(!(oe&2)||t!==et)&&(t===et&&(!(oe&2)&&(au|=n),He===4&&dr(t,it)),Ot(t,r),n===1&&oe===0&&!(e.mode&1)&&(Ss=Ue()+500,ru&&Wr()))}function Ot(t,e){var n=t.callbackNode;ek(t,e);var r=Xl(t,t===et?it:0);if(r===0)n!==null&&Zg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zg(n),e===1)t.tag===0?Zk(Vv.bind(null,t)):v1(Vv.bind(null,t)),qk(function(){!(oe&6)&&Wr()}),n=null;else{switch(G0(r)){case 1:n=ip;break;case 4:n=H0;break;case 16:n=Ql;break;case 536870912:n=W0;break;default:n=Ql}n=gw(n,cw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cw(t,e){if(Dl=-1,Ll=0,oe&6)throw Error(x(327));var n=t.callbackNode;if(cs()&&t.callbackNode!==n)return null;var r=Xl(t,t===et?it:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=mc(t,r);else{e=r;var i=oe;oe|=2;var s=dw();(et!==t||it!==e)&&(In=null,Ss=Ue()+500,si(t,e));do try{wI();break}catch(a){uw(t,a)}while(1);vp(),fc.current=s,oe=i,ze!==null?e=0:(et=null,it=0,e=He)}if(e!==0){if(e===2&&(i=vf(t),i!==0&&(r=i,e=Vf(t,i))),e===1)throw n=ea,si(t,0),dr(t,r),Ot(t,Ue()),n;if(e===6)dr(t,r);else{if(i=t.current.alternate,!(r&30)&&!yI(i)&&(e=mc(t,r),e===2&&(s=vf(t),s!==0&&(r=s,e=Vf(t,s))),e===1))throw n=ea,si(t,0),dr(t,r),Ot(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Kr(t,Tt,In);break;case 3:if(dr(t,r),(r&130023424)===r&&(e=Pp+500-Ue(),10<e)){if(Xl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bf(Kr.bind(null,t,Tt,In),e);break}Kr(t,Tt,In);break;case 4:if(dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vI(r/1960))-r,10<r){t.timeoutHandle=bf(Kr.bind(null,t,Tt,In),r);break}Kr(t,Tt,In);break;case 5:Kr(t,Tt,In);break;default:throw Error(x(329))}}}return Ot(t,Ue()),t.callbackNode===n?cw.bind(null,t):null}function Vf(t,e){var n=To;return t.current.memoizedState.isDehydrated&&(si(t,e).flags|=256),t=mc(t,e),t!==2&&(e=Tt,Tt=n,e!==null&&Gf(e)),t}function Gf(t){Tt===null?Tt=t:Tt.push.apply(Tt,t)}function yI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~Op,e&=~au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function Vv(t){if(oe&6)throw Error(x(327));cs();var e=Xl(t,0);if(!(e&1))return Ot(t,Ue()),null;var n=mc(t,e);if(t.tag!==0&&n===2){var r=vf(t);r!==0&&(e=r,n=Vf(t,r))}if(n===1)throw n=ea,si(t,0),dr(t,e),Ot(t,Ue()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,Tt,In),Ot(t,Ue()),null}function Ap(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Ss=Ue()+500,ru&&Wr())}}function gi(t){vr!==null&&vr.tag===0&&!(oe&6)&&cs();var e=oe;oe|=1;var n=Kt.transition,r=de;try{if(Kt.transition=null,de=1,t)return t()}finally{de=r,Kt.transition=n,oe=e,!(oe&6)&&Wr()}}function Mp(){At=Xi.current,Ee(Xi)}function si(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Yk(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(pp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nc();break;case 3:Es(),Ee(xt),Ee(ft),Sp();break;case 5:Cp(r);break;case 4:Es();break;case 13:Ee(Ie);break;case 19:Ee(Ie);break;case 10:yp(r.type._context);break;case 22:case 23:Mp()}n=n.return}if(et=t,ze=t=xr(t.current,null),it=At=e,He=0,ea=null,Op=au=mi=0,Tt=To=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zr=null}return t}function uw(t,e){do{var n=ze;try{if(vp(),Pl.current=dc,uc){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}uc=!1}if(pi=0,Qe=je=Ne=null,Co=!1,Xo=0,Rp.current=null,n===null||n.return===null){He=1,ea=e,ze=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=it,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Pv(o);if(p!==null){p.flags&=-257,Av(p,o,a,s,e),p.mode&1&&Ov(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var w=new Set;w.add(l),e.updateQueue=w}else m.add(l);break e}else{if(!(e&1)){Ov(s,c,e),Dp();break e}l=Error(x(426))}}else if(be&&a.mode&1){var C=Pv(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Av(C,o,a,s,e),mp(Cs(l,a));break e}}s=l=Cs(l,a),He!==4&&(He=2),To===null?To=[s]:To.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=K1(s,l,e);Tv(s,v);break e;case 1:a=l;var y=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ir===null||!Ir.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Y1(s,a,e);Tv(s,E);break e}}s=s.return}while(s!==null)}hw(n)}catch(S){e=S,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(1)}function dw(){var t=fc.current;return fc.current=dc,t===null?dc:t}function Dp(){(He===0||He===3||He===2)&&(He=4),et===null||!(mi&268435455)&&!(au&268435455)||dr(et,it)}function mc(t,e){var n=oe;oe|=2;var r=dw();(et!==t||it!==e)&&(In=null,si(t,e));do try{_I();break}catch(i){uw(t,i)}while(1);if(vp(),oe=n,fc.current=r,ze!==null)throw Error(x(261));return et=null,it=0,He}function _I(){for(;ze!==null;)fw(ze)}function wI(){for(;ze!==null&&!Vb();)fw(ze)}function fw(t){var e=mw(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?hw(t):ze=e,Rp.current=null}function hw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hI(n,e),n!==null){n.flags&=32767,ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,ze=null;return}}else if(n=fI(n,e,At),n!==null){ze=n;return}if(e=e.sibling,e!==null){ze=e;return}ze=e=t}while(e!==null);He===0&&(He=5)}function Kr(t,e,n){var r=de,i=Kt.transition;try{Kt.transition=null,de=1,EI(t,e,n,r)}finally{Kt.transition=i,de=r}return null}function EI(t,e,n,r){do cs();while(vr!==null);if(oe&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(tk(t,s),t===et&&(ze=et=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||il||(il=!0,gw(Ql,function(){return cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kt.transition,Kt.transition=null;var o=de;de=1;var a=oe;oe|=4,Rp.current=null,mI(t,n),aw(n,t),Bk(Sf),Jl=!!Cf,Sf=Cf=null,t.current=n,gI(n),Gb(),oe=a,de=o,Kt.transition=s}else t.current=n;if(il&&(il=!1,vr=t,pc=i),s=t.pendingLanes,s===0&&(Ir=null),qb(n.stateNode),Ot(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hc)throw hc=!1,t=Hf,Hf=null,t;return pc&1&&t.tag!==0&&cs(),s=t.pendingLanes,s&1?t===Wf?bo++:(bo=0,Wf=t):bo=0,Wr(),null}function cs(){if(vr!==null){var t=G0(pc),e=Kt.transition,n=de;try{if(Kt.transition=null,de=16>t?16:t,vr===null)var r=!1;else{if(t=vr,vr=null,pc=0,oe&6)throw Error(x(331));var i=oe;for(oe|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for($=c;$!==null;){var u=$;switch(u.tag){case 0:case 11:case 15:So(8,u,s)}var d=u.child;if(d!==null)d.return=u,$=d;else for(;$!==null;){u=$;var f=u.sibling,p=u.return;if(iw(u),u===c){$=null;break}if(f!==null){f.return=p,$=f;break}$=p}}}var m=s.alternate;if(m!==null){var w=m.child;if(w!==null){m.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:So(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,$=v;break e}$=s.return}}var y=t.current;for($=y;$!==null;){o=$;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,$=_;else e:for(o=y;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ou(9,a)}}catch(S){Ae(a,a.return,S)}if(a===o){$=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,$=E;break e}$=a.return}}if(oe=i,Wr(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(Jc,t)}catch{}r=!0}return r}finally{de=n,Kt.transition=e}}return!1}function Gv(t,e,n){e=Cs(n,e),e=K1(t,e,1),t=kr(t,e,1),e=_t(),t!==null&&(Ea(t,1,e),Ot(t,e))}function Ae(t,e,n){if(t.tag===3)Gv(t,t,n);else for(;e!==null;){if(e.tag===3){Gv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ir===null||!Ir.has(r))){t=Cs(n,t),t=Y1(e,t,1),e=kr(e,t,1),t=_t(),e!==null&&(Ea(e,1,t),Ot(e,t));break}}e=e.return}}function CI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_t(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(it&n)===n&&(He===4||He===3&&(it&130023424)===it&&500>Ue()-Pp?si(t,0):Op|=n),Ot(t,e)}function pw(t,e){e===0&&(t.mode&1?(e=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):e=1);var n=_t();t=jn(t,e),t!==null&&(Ea(t,e,n),Ot(t,n))}function SI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),pw(t,n)}function TI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),pw(t,n)}var mw;mw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return bt=!1,dI(t,e,n);bt=!!(t.flags&131072)}else bt=!1,be&&e.flags&1048576&&y1(e,sc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ml(t,e),t=e.pendingProps;var i=ys(e,ft.current);ls(e,n),i=bp(null,e,r,t,i,n);var s=kp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rt(r)?(s=!0,rc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wp(e),i.updater=iu,e.stateNode=i,i._reactInternals=e,Pf(e,r,t,n),e=Df(null,e,r,!0,s,n)):(e.tag=0,be&&s&&hp(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ml(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kI(r),t=Jt(r,t),i){case 0:e=Mf(null,e,r,t,n);break e;case 1:e=Lv(null,e,r,t,n);break e;case 11:e=Mv(null,e,r,t,n);break e;case 14:e=Dv(null,e,r,Jt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Mf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Lv(t,e,r,i,n);case 3:e:{if(J1(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,C1(t,e),lc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Cs(Error(x(423)),e),e=Fv(t,e,r,n,i);break e}else if(r!==i){i=Cs(Error(x(424)),e),e=Fv(t,e,r,n,i);break e}else for(Mt=br(e.stateNode.containerInfo.firstChild),Lt=e,be=!0,en=null,n=k1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),r===i){e=Hn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return I1(e),t===null&&xf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Tf(r,i)?o=null:s!==null&&Tf(r,s)&&(e.flags|=32),X1(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&xf(e),null;case 13:return Z1(t,e,n);case 4:return Ep(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ws(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Mv(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(oc,r._currentValue),r._currentValue=o,s!==null)if(cn(s.value,o)){if(s.children===i.children&&!xt.current){e=Hn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Fn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Rf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ls(e,n),i=Yt(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=Jt(r,e.pendingProps),i=Jt(r.type,i),Dv(t,e,r,i,n);case 15:return q1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Ml(t,e),e.tag=1,Rt(r)?(t=!0,rc(e)):t=!1,ls(e,n),T1(e,r,i),Pf(e,r,i,n),Df(null,e,r,!0,t,n);case 19:return ew(t,e,n);case 22:return Q1(t,e,n)}throw Error(x(156,e.tag))};function gw(t,e){return j0(t,e)}function bI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(t,e,n,r){return new bI(t,e,n,r)}function Lp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kI(t){if(typeof t=="function")return Lp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tp)return 11;if(t===np)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=Vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Lp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bi:return oi(n.children,i,s,e);case ep:o=8,i|=8;break;case tf:return t=Vt(12,n,e,i|2),t.elementType=tf,t.lanes=s,t;case nf:return t=Vt(13,n,e,i),t.elementType=nf,t.lanes=s,t;case rf:return t=Vt(19,n,e,i),t.elementType=rf,t.lanes=s,t;case b0:return lu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case S0:o=10;break e;case T0:o=9;break e;case tp:o=11;break e;case np:o=14;break e;case ar:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function oi(t,e,n,r){return t=Vt(7,t,r,e),t.lanes=n,t}function lu(t,e,n,r){return t=Vt(22,t,r,e),t.elementType=b0,t.lanes=n,t.stateNode={isHidden:!1},t}function gd(t,e,n){return t=Vt(6,t,null,e),t.lanes=n,t}function vd(t,e,n){return e=Vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function II(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fp(t,e,n,r,i,s,o,a,l){return t=new II(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wp(s),t}function NI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function vw(t){if(!t)return Dr;t=t._reactInternals;e:{if(Ri(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Rt(n))return g1(t,n,e)}return e}function yw(t,e,n,r,i,s,o,a,l){return t=Fp(n,r,!0,t,i,s,o,a,l),t.context=vw(null),n=t.current,r=_t(),i=Nr(n),s=Fn(r,i),s.callback=e??null,kr(n,s,i),t.current.lanes=i,Ea(t,i,r),Ot(t,r),t}function cu(t,e,n,r){var i=e.current,s=_t(),o=Nr(i);return n=vw(n),e.context===null?e.context=n:e.pendingContext=n,e=Fn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kr(i,e,o),t!==null&&(an(t,i,o,s),Ol(t,i,o)),o}function gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $p(t,e){Kv(t,e),(t=t.alternate)&&Kv(t,e)}function xI(){return null}var _w=typeof reportError=="function"?reportError:function(t){console.error(t)};function Up(t){this._internalRoot=t}uu.prototype.render=Up.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));cu(t,e,null,null)};uu.prototype.unmount=Up.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gi(function(){cu(null,t,null,null)}),e[Bn]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=q0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&X0(t)}};function zp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yv(){}function RI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=gc(o);s.call(c)}}var o=yw(e,r,t,0,null,!1,!1,"",Yv);return t._reactRootContainer=o,t[Bn]=o.current,Go(t.nodeType===8?t.parentNode:t),gi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=gc(l);a.call(c)}}var l=Fp(t,0,!1,null,null,!1,!1,"",Yv);return t._reactRootContainer=l,t[Bn]=l.current,Go(t.nodeType===8?t.parentNode:t),gi(function(){cu(e,l,n,r)}),l}function fu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=gc(o);a.call(l)}}cu(e,o,t,i)}else o=RI(n,e,t,i,r);return gc(o)}K0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=lo(e.pendingLanes);n!==0&&(sp(e,n|1),Ot(e,Ue()),!(oe&6)&&(Ss=Ue()+500,Wr()))}break;case 13:gi(function(){var r=jn(t,1);if(r!==null){var i=_t();an(r,t,1,i)}}),$p(t,1)}};op=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=_t();an(e,t,134217728,n)}$p(t,134217728)}};Y0=function(t){if(t.tag===13){var e=Nr(t),n=jn(t,e);if(n!==null){var r=_t();an(n,t,e,r)}$p(t,e)}};q0=function(){return de};Q0=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};pf=function(t,e,n){switch(e){case"input":if(af(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nu(r);if(!i)throw Error(x(90));I0(r),af(r,i)}}}break;case"textarea":x0(t,n);break;case"select":e=n.value,e!=null&&is(t,!!n.multiple,e,!1)}};L0=Ap;F0=gi;var OI={usingClientEntryPoint:!1,Events:[Sa,Vi,nu,M0,D0,Ap]},Zs={findFiberByHostInstance:Jr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},PI={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=z0(t),t===null?null:t.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||xI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{Jc=sl.inject(PI),vn=sl}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OI;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zp(e))throw Error(x(200));return NI(t,e,null,n)};$t.createRoot=function(t,e){if(!zp(t))throw Error(x(299));var n=!1,r="",i=_w;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fp(t,1,!1,null,null,n,!1,r,i),t[Bn]=e.current,Go(t.nodeType===8?t.parentNode:t),new Up(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=z0(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return gi(t)};$t.hydrate=function(t,e,n){if(!du(e))throw Error(x(200));return fu(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!zp(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=_w;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=yw(e,null,t,1,n??null,i,!1,s,o),t[Bn]=e.current,Go(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new uu(e)};$t.render=function(t,e,n){if(!du(e))throw Error(x(200));return fu(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!du(t))throw Error(x(40));return t._reactRootContainer?(gi(function(){fu(null,null,t,!1,function(){t._reactRootContainer=null,t[Bn]=null})}),!0):!1};$t.unstable_batchedUpdates=Ap;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!du(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return fu(t,e,n,!1,r)};$t.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=$t})(xb);const Ji=d0(Gl);var qv=Gl;Jd.createRoot=qv.createRoot,Jd.hydrateRoot=qv.hydrateRoot;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vc(){return vc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vc.apply(this,arguments)}var yr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yr||(yr={}));const Qv="popstate";function AI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Kf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Bp(i)}return LI(e,n,null,t)}function We(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function MI(){return Math.random().toString(36).substr(2,8)}function Xv(t){return{usr:t.state,key:t.key}}function Kf(t,e,n,r){return n===void 0&&(n=null),vc({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ds(e):e,{state:n,key:e&&e.key||r||MI()})}function Bp(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ds(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function DI(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof t=="string"?t:Bp(t);return We(e,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,e)}function LI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=yr.Pop,l=null;function c(){a=yr.Pop,l&&l({action:a,location:f.location})}function u(p,m){a=yr.Push;let w=Kf(f.location,p,m);n&&n(w,p);let C=Xv(w),v=f.createHref(w);try{o.pushState(C,"",v)}catch{i.location.assign(v)}s&&l&&l({action:a,location:f.location})}function d(p,m){a=yr.Replace;let w=Kf(f.location,p,m);n&&n(w,p);let C=Xv(w),v=f.createHref(w);o.replaceState(C,"",v),s&&l&&l({action:a,location:f.location})}let f={get action(){return a},get location(){return t(i,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Qv,c),l=p,()=>{i.removeEventListener(Qv,c),l=null}},createHref(p){return e(i,p)},encodeLocation(p){let m=DI(typeof p=="string"?p:Bp(p));return{pathname:m.pathname,search:m.search,hash:m.hash}},push:u,replace:d,go(p){return o.go(p)}};return f}var Jv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Jv||(Jv={}));function FI(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ds(e):e,i=Cw(r.pathname||"/",n);if(i==null)return null;let s=ww(t);$I(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=KI(s[a],QI(i));return o}function ww(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(We(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=ai([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(We(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ww(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:VI(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Ew(s.path))i(s,o,l)}),e}function Ew(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Ew(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function $I(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:GI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const UI=/^:\w+$/,zI=3,BI=2,jI=1,HI=10,WI=-2,Zv=t=>t==="*";function VI(t,e){let n=t.split("/"),r=n.length;return n.some(Zv)&&(r+=WI),e&&(r+=BI),n.filter(i=>!Zv(i)).reduce((i,s)=>i+(UI.test(s)?zI:s===""?jI:HI),r)}function GI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function KI(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",u=YI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let d=a.route;s.push({params:r,pathname:ai([i,u.pathname]),pathnameBase:nN(ai([i,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(i=ai([i,u.pathnameBase]))}return s}function YI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=qI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{if(u==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return c[u]=XI(a[d]||"",u),c},{}),pathname:s,pathnameBase:o,pattern:t}}function qI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),jp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function QI(t){try{return decodeURI(t)}catch(e){return jp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function XI(t,e){try{return decodeURIComponent(t)}catch(n){return jp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Cw(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function jp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function JI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ds(t):t;return{pathname:n?n.startsWith("/")?n:ZI(n,e):e,search:rN(r),hash:iN(i)}}function ZI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function tN(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ds(t):(i=vc({},t),We(!i.pathname||!i.pathname.includes("?"),yd("?","pathname","search",i)),We(!i.pathname||!i.pathname.includes("#"),yd("#","pathname","hash",i)),We(!i.search||!i.search.includes("#"),yd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=JI(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const ai=t=>t.join("/").replace(/\/\/+/g,"/"),nN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),rN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,iN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class sN{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function oN(t){return t instanceof sN}const aN=["post","put","patch","delete"];[...aN];/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yf(){return Yf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yf.apply(this,arguments)}function lN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const cN=typeof Object.is=="function"?Object.is:lN,{useState:uN,useEffect:dN,useLayoutEffect:fN,useDebugValue:hN}=Xd;function pN(t,e,n){const r=e(),[{inst:i},s]=uN({inst:{value:r,getSnapshot:e}});return fN(()=>{i.value=r,i.getSnapshot=e,_d(i)&&s({inst:i})},[t,r,e]),dN(()=>(_d(i)&&s({inst:i}),t(()=>{_d(i)&&s({inst:i})})),[t]),hN(r),r}function _d(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!cN(n,r)}catch{return!0}}function mN(t,e,n){return e()}const gN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vN=!gN,yN=vN?mN:pN;"useSyncExternalStore"in Xd&&(t=>t.useSyncExternalStore)(Xd);const Sw=g.createContext(null),Hp=g.createContext(null),Wp=g.createContext(null),hu=g.createContext(null),ba=g.createContext({outlet:null,matches:[]}),Tw=g.createContext(null);function ka(){return g.useContext(hu)!=null}function Vp(){return ka()||We(!1),g.useContext(hu).location}function bw(){ka()||We(!1);let{basename:t,navigator:e}=g.useContext(Wp),{matches:n}=g.useContext(ba),{pathname:r}=Vp(),i=JSON.stringify(eN(n).map(a=>a.pathnameBase)),s=g.useRef(!1);return g.useEffect(()=>{s.current=!0}),g.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let c=tN(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(c.pathname=c.pathname==="/"?t:ai([t,c.pathname])),(l.replace?e.replace:e.push)(c,l.state,l)},[t,e,i,r])}function _N(t,e){ka()||We(!1);let{navigator:n}=g.useContext(Wp),r=g.useContext(Hp),{matches:i}=g.useContext(ba),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Vp(),c;if(e){var u;let w=typeof e=="string"?Ds(e):e;a==="/"||(u=w.pathname)!=null&&u.startsWith(a)||We(!1),c=w}else c=l;let d=c.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",p=FI(t,{pathname:f}),m=SN(p&&p.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:ai([a,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:ai([a,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return e&&m?g.createElement(hu.Provider,{value:{location:Yf({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:yr.Pop}},m):m}function wN(){let t=IN(),e=oN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unhandled Thrown Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},e),n?g.createElement("pre",{style:i},n):null,g.createElement("p",null,"💿 Hey developer 👋"),g.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",g.createElement("code",{style:s},"errorElement")," props on ",g.createElement("code",{style:s},"<Route>")))}class EN extends g.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?g.createElement(ba.Provider,{value:this.props.routeContext},g.createElement(Tw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CN(t){let{routeContext:e,match:n,children:r}=t,i=g.useContext(Sw);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(ba.Provider,{value:e},r)}function SN(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||We(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,c=n?o.route.errorElement||g.createElement(wN,null):null,u=e.concat(r.slice(0,a+1)),d=()=>g.createElement(CN,{match:o,routeContext:{outlet:s,matches:u}},l?c:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||a===0)?g.createElement(EN,{location:n.location,component:c,error:l,children:d(),routeContext:{outlet:null,matches:u}}):d()},null)}var ey;(function(t){t.UseRevalidator="useRevalidator"})(ey||(ey={}));var yc;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(yc||(yc={}));function TN(t){let e=g.useContext(Hp);return e||We(!1),e}function bN(t){let e=g.useContext(ba);return e||We(!1),e}function kN(t){let e=bN(),n=e.matches[e.matches.length-1];return n.route.id||We(!1),n.route.id}function IN(){var t;let e=g.useContext(Tw),n=TN(yc.UseRouteError),r=kN(yc.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function NN(t){let{to:e,replace:n,state:r,relative:i}=t;ka()||We(!1);let s=g.useContext(Hp),o=bw();return g.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function uo(t){We(!1)}function xN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=yr.Pop,navigator:s,static:o=!1}=t;ka()&&We(!1);let a=e.replace(/^\/*/,"/"),l=g.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ds(r));let{pathname:c="/",search:u="",hash:d="",state:f=null,key:p="default"}=r,m=g.useMemo(()=>{let w=Cw(c,a);return w==null?null:{pathname:w,search:u,hash:d,state:f,key:p}},[a,c,u,d,f,p]);return m==null?null:g.createElement(Wp.Provider,{value:l},g.createElement(hu.Provider,{children:n,value:{location:m,navigationType:i}}))}function RN(t){let{children:e,location:n}=t,r=g.useContext(Sw),i=r&&!e?r.router.routes:qf(e);return _N(i,n)}var ty;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(ty||(ty={}));new Promise(()=>{});function qf(t,e){e===void 0&&(e=[]);let n=[];return g.Children.forEach(t,(r,i)=>{if(!g.isValidElement(r))return;if(r.type===g.Fragment){n.push.apply(n,qf(r.props.children,e));return}r.type!==uo&&We(!1),!r.props.index||!r.props.children||We(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=qf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ON(t){let{basename:e,children:n,window:r}=t,i=g.useRef();i.current==null&&(i.current=AI({window:r,v5Compat:!0}));let s=i.current,[o,a]=g.useState({action:s.action,location:s.location});return g.useLayoutEffect(()=>s.listen(a),[s]),g.createElement(xN,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}var ny;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(ny||(ny={}));var ry;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ry||(ry={}));/**
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
 */const kw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const R=function(t,e){if(!t)throw Ls(e)},Ls=function(t){return new Error("Firebase Database ("+kw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Iw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},PN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Gp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),r.push(n[u],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Iw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new AN;const f=s<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),d!==64){const m=c<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nw=function(t){const e=Iw(t);return Gp.encodeByteArray(e,!0)},_c=function(t){return Nw(t).replace(/\./g,"")},wc=function(t){try{return Gp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function MN(t){return xw(void 0,t)}function xw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!DN(n)||(t[n]=xw(t[n],e[n]));return t}function DN(t){return t!=="__proto__"}/**
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
 */function LN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FN=()=>LN().__FIREBASE_DEFAULTS__,$N=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},UN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wc(t[1]);return e&&JSON.parse(e)},pu=()=>{try{return FN()||$N()||UN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rw=t=>{var e,n;return(n=(e=pu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ow=t=>{const e=Rw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Pw=()=>{var t;return(t=pu())===null||t===void 0?void 0:t.config},Aw=t=>{var e;return(e=pu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ia{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Mw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[_c(JSON.stringify(n)),_c(JSON.stringify(o)),a].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function zN(){var t;const e=(t=pu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jN(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Lw(){return kw.NODE_ADMIN===!0}function HN(){try{return typeof indexedDB=="object"}catch{return!1}}function WN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const VN="FirebaseError";class Xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VN,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Na.prototype.create)}}class Na{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?GN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xn(i,a,r)}}function GN(t,e){return t.replace(KN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const KN=/\{\$([^}]+)}/g;/**
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
 */function ta(t){return JSON.parse(t)}function Ze(t){return JSON.stringify(t)}/**
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
 */const Fw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ta(wc(s[0])||""),n=ta(wc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},YN=function(t){const e=Fw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},qN=function(t){const e=Fw(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Tn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ts(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Qf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ec(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Cc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(iy(s)&&iy(o)){if(!Cc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function iy(t){return t!==null&&typeof t=="object"}/**
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
 */function Fs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class QN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function XN(t,e){const n=new JN(t,e);return n.subscribe.bind(n)}class JN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wd),i.error===void 0&&(i.error=wd),i.complete===void 0&&(i.complete=wd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wd(){}function mu(t,e){return`${t} failed: ${e} argument `}/**
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
 */const e2=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class Lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yr="[DEFAULT]";/**
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
 */class t2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ia;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(r2(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:n2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function n2(t){return t===Yr?void 0:t}function r2(t){return t.instantiationMode==="EAGER"}/**
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
 */class i2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new t2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const s2={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},o2=fe.INFO,a2={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},l2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=a2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yp{constructor(e){this.name=e,this._logLevel=o2,this._logHandler=l2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?s2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const c2=(t,e)=>e.some(n=>t instanceof n);let sy,oy;function u2(){return sy||(sy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function d2(){return oy||(oy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $w=new WeakMap,Xf=new WeakMap,Uw=new WeakMap,Ed=new WeakMap,qp=new WeakMap;function f2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$w.set(n,t)}).catch(()=>{}),qp.set(e,t),e}function h2(t){if(Xf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xf.set(t,e)}let Jf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function p2(t){Jf=t(Jf)}function m2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cd(this),e,...n);return Uw.set(r,e.sort?e.sort():[e]),Rr(r)}:d2().includes(t)?function(...e){return t.apply(Cd(this),e),Rr($w.get(this))}:function(...e){return Rr(t.apply(Cd(this),e))}}function g2(t){return typeof t=="function"?m2(t):(t instanceof IDBTransaction&&h2(t),c2(t,u2())?new Proxy(t,Jf):t)}function Rr(t){if(t instanceof IDBRequest)return f2(t);if(Ed.has(t))return Ed.get(t);const e=g2(t);return e!==t&&(Ed.set(t,e),qp.set(e,t)),e}const Cd=t=>qp.get(t);function v2(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Rr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rr(o.result),l.oldVersion,l.newVersion,Rr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const y2=["get","getKey","getAll","getAllKeys","count"],_2=["put","add","delete","clear"],Sd=new Map;function ay(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sd.get(e))return Sd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||y2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Sd.set(e,s),s}p2(t=>({...t,get:(e,n,r)=>ay(e,n)||t.get(e,n,r),has:(e,n)=>!!ay(e,n)||t.has(e,n)}));/**
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
 */class w2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(E2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function E2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zf="@firebase/app",ly="0.9.13";/**
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
 */const vi=new Yp("@firebase/app"),C2="@firebase/app-compat",S2="@firebase/analytics-compat",T2="@firebase/analytics",b2="@firebase/app-check-compat",k2="@firebase/app-check",I2="@firebase/auth",N2="@firebase/auth-compat",x2="@firebase/database",R2="@firebase/database-compat",O2="@firebase/functions",P2="@firebase/functions-compat",A2="@firebase/installations",M2="@firebase/installations-compat",D2="@firebase/messaging",L2="@firebase/messaging-compat",F2="@firebase/performance",$2="@firebase/performance-compat",U2="@firebase/remote-config",z2="@firebase/remote-config-compat",B2="@firebase/storage",j2="@firebase/storage-compat",H2="@firebase/firestore",W2="@firebase/firestore-compat",V2="firebase",G2="9.23.0";/**
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
 */const eh="[DEFAULT]",K2={[Zf]:"fire-core",[C2]:"fire-core-compat",[T2]:"fire-analytics",[S2]:"fire-analytics-compat",[k2]:"fire-app-check",[b2]:"fire-app-check-compat",[I2]:"fire-auth",[N2]:"fire-auth-compat",[x2]:"fire-rtdb",[R2]:"fire-rtdb-compat",[O2]:"fire-fn",[P2]:"fire-fn-compat",[A2]:"fire-iid",[M2]:"fire-iid-compat",[D2]:"fire-fcm",[L2]:"fire-fcm-compat",[F2]:"fire-perf",[$2]:"fire-perf-compat",[U2]:"fire-rc",[z2]:"fire-rc-compat",[B2]:"fire-gcs",[j2]:"fire-gcs-compat",[H2]:"fire-fst",[W2]:"fire-fst-compat","fire-js":"fire-js",[V2]:"fire-js-all"};/**
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
 */const Sc=new Map,th=new Map;function Y2(t,e){try{t.container.addComponent(e)}catch(n){vi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yi(t){const e=t.name;if(th.has(e))return vi.debug(`There were multiple attempts to register component ${e}.`),!1;th.set(e,t);for(const n of Sc.values())Y2(n,t);return!0}function vu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const q2={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Or=new Na("app","Firebase",q2);/**
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
 */class Q2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Or.create("app-deleted",{appName:this._name})}}/**
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
 */const Oi=G2;function zw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:eh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Or.create("bad-app-name",{appName:String(i)});if(n||(n=Pw()),!n)throw Or.create("no-options");const s=Sc.get(i);if(s){if(Cc(n,s.options)&&Cc(r,s.config))return s;throw Or.create("duplicate-app",{appName:i})}const o=new i2(i);for(const l of th.values())o.addComponent(l);const a=new Q2(n,r,o);return Sc.set(i,a),a}function Qp(t=eh){const e=Sc.get(t);if(!e&&t===eh&&Pw())return zw();if(!e)throw Or.create("no-app",{appName:t});return e}function _n(t,e,n){var r;let i=(r=K2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vi.warn(a.join(" "));return}yi(new Lr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const X2="firebase-heartbeat-database",J2=1,na="firebase-heartbeat-store";let Td=null;function Bw(){return Td||(Td=v2(X2,J2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(na)}}}).catch(t=>{throw Or.create("idb-open",{originalErrorMessage:t.message})})),Td}async function Z2(t){try{return await(await Bw()).transaction(na).objectStore(na).get(jw(t))}catch(e){if(e instanceof Xn)vi.warn(e.message);else{const n=Or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vi.warn(n.message)}}}async function cy(t,e){try{const r=(await Bw()).transaction(na,"readwrite");await r.objectStore(na).put(e,jw(t)),await r.done}catch(n){if(n instanceof Xn)vi.warn(n.message);else{const r=Or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vi.warn(r.message)}}}function jw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ex=1024,tx=30*24*60*60*1e3;class nx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ix(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=uy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=tx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=uy(),{heartbeatsToSend:n,unsentEntries:r}=rx(this._heartbeatsCache.heartbeats),i=_c(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function uy(){return new Date().toISOString().substring(0,10)}function rx(t,e=ex){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),dy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),dy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ix{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return HN()?WN().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Z2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return cy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function dy(t){return _c(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function sx(t){yi(new Lr("platform-logger",e=>new w2(e),"PRIVATE")),yi(new Lr("heartbeat",e=>new nx(e),"PRIVATE")),_n(Zf,ly,t),_n(Zf,ly,"esm2017"),_n("fire-js","")}sx("");var ox="firebase",ax="9.23.0";/**
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
 */_n(ox,ax,"app");const fy="@firebase/database",hy="0.14.4";/**
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
 */let Hw="";function lx(t){Hw=t}/**
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
 */class cx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ze(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ta(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ux{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Tn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ww=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cx(e)}}catch{}return new ux},ti=Ww("localStorage"),nh=Ww("sessionStorage");/**
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
 */const us=new Yp("@firebase/database"),dx=function(){let t=1;return function(){return t++}}(),Vw=function(t){const e=e2(t),n=new QN;n.update(e);const r=n.digest();return Gp.encodeByteArray(r)},xa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=xa.apply(null,r):typeof r=="object"?e+=Ze(r):e+=r,e+=" "}return e};let li=null,py=!0;const fx=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(us.logLevel=fe.VERBOSE,li=us.log.bind(us),e&&nh.set("logging_enabled",!0)):typeof t=="function"?li=t:(li=null,nh.remove("logging_enabled"))},rt=function(...t){if(py===!0&&(py=!1,li===null&&nh.get("logging_enabled")===!0&&fx(!0)),li){const e=xa.apply(null,t);li(e)}},Ra=function(t){return function(...e){rt(t,...e)}},rh=function(...t){const e="FIREBASE INTERNAL ERROR: "+xa(...t);us.error(e)},Wn=function(...t){const e=`FIREBASE FATAL ERROR: ${xa(...t)}`;throw us.error(e),new Error(e)},wt=function(...t){const e="FIREBASE WARNING: "+xa(...t);us.warn(e)},hx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&wt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Xp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},px=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bs="[MIN_NAME]",_i="[MAX_NAME]",Pi=function(t,e){if(t===e)return 0;if(t===bs||e===_i)return-1;if(e===bs||t===_i)return 1;{const n=my(t),r=my(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},mx=function(t,e){return t===e?0:t<e?-1:1},eo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ze(e))},Jp=function(t){if(typeof t!="object"||t===null)return Ze(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ze(e[r]),n+=":",n+=Jp(t[e[r]]);return n+="}",n},Gw=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ot(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Kw=function(t){R(!Xp(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},gx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function yx(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const _x=new RegExp("^-?(0*)\\d{1,10}$"),wx=-2147483648,Ex=2147483647,my=function(t){if(_x.test(t)){const e=Number(t);if(e>=wx&&e<=Ex)return e}return null},$s=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw wt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Cx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ko=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Sx{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){wt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Tx{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(rt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',wt(e)}}class ds{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ds.OWNER="owner";/**
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
 */const Zp="5",Yw="v",qw="s",Qw="r",Xw="f",Jw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Zw="ls",eE="p",ih="ac",tE="websocket",nE="long_polling";/**
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
 */class rE{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ti.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ti.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function bx(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function iE(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===tE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===nE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bx(t)&&(n.ns=t.namespace);const i=[];return ot(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class kx{constructor(){this.counters_={}}incrementCounter(e,n=1){Tn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return MN(this.counters_)}}/**
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
 */const bd={},kd={};function em(t){const e=t.toString();return bd[e]||(bd[e]=new kx),bd[e]}function Ix(t,e){const n=t.toString();return kd[n]||(kd[n]=e()),kd[n]}/**
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
 */class Nx{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&$s(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const gy="start",xx="close",Rx="pLPCommand",Ox="pRTLPCB",sE="id",oE="pw",aE="ser",Px="cb",Ax="seg",Mx="ts",Dx="d",Lx="dframe",lE=1870,cE=30,Fx=lE-cE,$x=25e3,Ux=3e4;class Zi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ra(e),this.stats_=em(n),this.urlFn=l=>(this.appCheckToken&&(l[ih]=this.appCheckToken),iE(n,nE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Nx(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ux)),px(()=>{if(this.isClosed_)return;this.scriptTagHolder=new tm((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gy)this.id=a,this.password=l;else if(o===xx)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[gy]="t",r[aE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Px]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Yw]=Zp,this.transportSessionId&&(r[qw]=this.transportSessionId),this.lastSessionId&&(r[Zw]=this.lastSessionId),this.applicationId&&(r[eE]=this.applicationId),this.appCheckToken&&(r[ih]=this.appCheckToken),typeof location<"u"&&location.hostname&&Jw.test(location.hostname)&&(r[Qw]=Xw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zi.forceAllow_=!0}static forceDisallow(){Zi.forceDisallow_=!0}static isAvailable(){return Zi.forceAllow_?!0:!Zi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gx()&&!vx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Nw(n),i=Gw(r,Fx);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Lx]="t",r[sE]=e,r[oE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ze(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class tm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dx(),window[Rx+this.uniqueCallbackIdentifier]=e,window[Ox+this.uniqueCallbackIdentifier]=n,this.myIFrame=tm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){rt("frame writing exception"),a.stack&&rt(a.stack),rt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sE]=this.myID,e[oE]=this.myPW,e[aE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cE+r.length<=lE;){const o=this.pendingSegs.shift();r=r+"&"+Ax+i+"="+o.seg+"&"+Mx+i+"="+o.ts+"&"+Dx+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor($x)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{rt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const zx=16384,Bx=45e3;let Tc=null;typeof MozWebSocket<"u"?Tc=MozWebSocket:typeof WebSocket<"u"&&(Tc=WebSocket);class nn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ra(this.connId),this.stats_=em(n),this.connURL=nn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Yw]=Zp,typeof location<"u"&&location.hostname&&Jw.test(location.hostname)&&(o[Qw]=Xw),n&&(o[qw]=n),r&&(o[Zw]=r),i&&(o[ih]=i),s&&(o[eE]=s),iE(e,tE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ti.set("previous_websocket_failure",!0);try{let r;Lw(),this.mySock=new Tc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){nn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Tc!==null&&!nn.forceDisallow_}static previouslyFailed(){return ti.isInMemoryStorage||ti.get("previous_websocket_failure")===!0}markConnectionHealthy(){ti.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ta(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Gw(n,zx);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Bx))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nn.responsesRequiredToBeHealthy=2;nn.healthyTimeout=3e4;/**
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
 */class ra{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Zi,nn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=nn&&nn.isAvailable();let r=n&&!nn.previouslyFailed();if(e.webSocketOnly&&(n||wt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[nn];else{const i=this.transports_=[];for(const s of ra.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ra.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ra.globalTransportInitialized_=!1;/**
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
 */const jx=6e4,Hx=5e3,Wx=10*1024,Vx=100*1024,Id="t",vy="d",Gx="s",yy="r",Kx="e",_y="o",wy="a",Ey="n",Cy="p",Yx="h";class qx{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ra("c:"+this.id+":"),this.transportManager_=new ra(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ko(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Vx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Wx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Id in e){const n=e[Id];n===wy?this.upgradeIfSecondaryHealthy_():n===yy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===_y&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=eo("t",e),r=eo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ey,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=eo("t",e),r=eo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=eo(Id,e);if(vy in e){const r=e[vy];if(n===Yx){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ey){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Gx?this.onConnectionShutdown_(r):n===yy?this.onReset_(r):n===Kx?rh("Server Error: "+r):n===_y?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Zp!==r&&wt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ko(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(jx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ko(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Hx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ti.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class uE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class dE{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class bc extends dE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Kp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bc}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Sy=32,Ty=768;class he{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new he("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fr(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new he(t.pieces_,e)}function nm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Qx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ia(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function fE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new he(e,0)}function De(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof he)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new he(n,0)}function ne(t){return t.pieceNum_>=t.pieces_.length}function kt(t,e){const n=Z(t),r=Z(e);if(n===null)return e;if(n===r)return kt(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Xx(t,e){const n=ia(t,0),r=ia(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Pi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function rm(t,e){if(Fr(t)!==Fr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Gt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fr(t)>Fr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Jx{constructor(e,n){this.errorPrefix_=n,this.parts_=ia(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=gu(this.parts_[r]);hE(this)}}function Zx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=gu(e),hE(t)}function eR(t){const e=t.parts_.pop();t.byteLength_-=gu(e),t.parts_.length>0&&(t.byteLength_-=1)}function hE(t){if(t.byteLength_>Ty)throw new Error(t.errorPrefix_+"has a key path longer than "+Ty+" bytes ("+t.byteLength_+").");if(t.parts_.length>Sy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sy+") or object contains a cycle "+qr(t))}function qr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class im extends dE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new im}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const to=1e3,tR=60*5*1e3,by=30*1e3,nR=1.3,rR=3e4,iR="server_kill",ky=3;class $n extends uE{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$n.nextPersistentConnectionId_++,this.log_=Ra("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=to,this.maxReconnectDelay_=tR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Lw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");im.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ze(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ia,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;$n.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Tn(e,"w")){const r=Ts(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();wt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||qN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=by)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=YN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ze(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):rh("Unrecognized action received from server: "+Ze(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=to,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=to,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>rR&&(this.reconnectDelay_=to),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$n.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?rt("getToken() completed but was canceled"):(rt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new qx(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{wt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(iR)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&wt(d),l())}}}interrupt(e){rt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qf(this.interruptReasons_)&&(this.reconnectDelay_=to,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Jp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new he(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){rt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ky&&(this.reconnectDelay_=by,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){rt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ky&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Hw.replace(/\./g,"-")]=1,Kp()?e["framework.cordova"]=1:Dw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bc.getInstance().currentlyOnline();return Qf(this.interruptReasons_)&&e}}$n.nextPersistentConnectionId_=0;$n.nextConnectionId_=0;/**
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
 */class yu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ee(bs,e),i=new ee(bs,n);return this.compare(r,i)!==0}minPost(){return ee.MIN}}/**
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
 */let ol;class pE extends yu{static get __EMPTY_NODE(){return ol}static set __EMPTY_NODE(e){ol=e}compare(e,n){return Pi(e.name,n.name)}isDefinedOn(e){throw Ls("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(_i,ol)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,ol)}toString(){return".key"}}const fs=new pE;/**
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
 */class al{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??It.EMPTY_NODE,this.right=s??It.EMPTY_NODE}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return It.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return It.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Xe.RED=!0;Xe.BLACK=!1;class sR{copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class It{constructor(e,n=It.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new It(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Xe.BLACK,null,null))}remove(e){return new It(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Xe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new al(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new al(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new al(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new al(this.root_,null,this.comparator_,!0,e)}}It.EMPTY_NODE=new sR;/**
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
 */function oR(t,e){return Pi(t.name,e.name)}function sm(t,e){return Pi(t,e)}/**
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
 */let sh;function aR(t){sh=t}const mE=function(t){return typeof t=="number"?"number:"+Kw(t):"string:"+t},gE=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Tn(e,".sv"),"Priority must be a string or number.")}else R(t===sh||t.isEmpty(),"priority of unexpected type.");R(t===sh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Iy;class qe{constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gE(this.priorityNode_)}static set __childrenNodeConstructor(e){Iy=e}static get __childrenNodeConstructor(){return Iy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ne(e)?this:Z(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Z(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||Fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+mE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Kw(this.value_):e+=this.value_,this.lazyHash_=Vw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=qe.VALUE_TYPE_ORDER.indexOf(n),s=qe.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let vE,yE;function lR(t){vE=t}function cR(t){yE=t}class uR extends yu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Pi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(_i,new qe("[PRIORITY-POST]",yE))}makePost(e,n){const r=vE(e);return new ee(n,new qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Le=new uR;/**
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
 */const dR=Math.log(2);class fR{constructor(e){const n=s=>parseInt(Math.log(s)/dR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const kc=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Xe(f,d.node,Xe.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=i(l,p),w=i(p+1,c);return d=t[p],f=n?n(d):d,new Xe(f,d.node,Xe.BLACK,m,w)}},s=function(l){let c=null,u=null,d=t.length;const f=function(m,w){const C=d-m,v=d;d-=m;const y=i(C+1,v),_=t[C],E=n?n(_):_;p(new Xe(E,_.node,w,null,y))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const w=l.nextBitIsOne(),C=Math.pow(2,l.count-(m+1));w?f(C,Xe.BLACK):(f(C,Xe.BLACK),f(C,Xe.RED))}return u},o=new fR(t.length),a=s(o);return new It(r||e,a)};/**
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
 */let Nd;const Fi={};class An{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(Fi&&Le,"ChildrenNode.ts has not been loaded"),Nd=Nd||new An({".priority":Fi},{".priority":Le}),Nd}get(e){const n=Ts(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof It?n:null}hasIndex(e){return Tn(this.indexSet_,e.toString())}addIndex(e,n){R(e!==fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ee.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=kc(r,e.getCompare()):a=Fi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new An(u,c)}addToIndexes(e,n){const r=Ec(this.indexes_,(i,s)=>{const o=Ts(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===Fi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),kc(a,o.getCompare())}else return Fi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ee(e.name,a))),l.insert(e,e.node)}});return new An(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ec(this.indexes_,i=>{if(i===Fi)return i;{const s=n.get(e.name);return s?i.remove(new ee(e.name,s)):i}});return new An(r,this.indexSet_)}}/**
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
 */let no;class K{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&gE(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return no||(no=new K(new It(sm),null,An.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||no}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?no:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ee(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?no:this.priorityNode_;return new K(i,o,s)}}updateChild(e,n){const r=Z(e);if(r===null)return n;{R(Z(e)!==".priority"||Fr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ve(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Le,(o,a)=>{n[o]=a.val(e),r++,s&&K.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+mE(this.getPriority().val())+":"),this.forEachChild(Le,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Vw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ee(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Oa?-1:0}withIndex(e){if(e===fs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Le),i=n.getIterator(Le);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fs?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hR extends K{constructor(){super(new It(sm),K.EMPTY_NODE,An.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const Oa=new hR;Object.defineProperties(ee,{MIN:{value:new ee(bs,K.EMPTY_NODE)},MAX:{value:new ee(_i,Oa)}});pE.__EMPTY_NODE=K.EMPTY_NODE;qe.__childrenNodeConstructor=K;aR(Oa);cR(Oa);/**
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
 */const pR=!0;function Je(t,e=null){if(t===null)return K.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new qe(n,Je(e))}if(!(t instanceof Array)&&pR){const n=[];let r=!1;if(ot(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Je(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ee(o,l)))}}),n.length===0)return K.EMPTY_NODE;const s=kc(n,oR,o=>o.name,sm);if(r){const o=kc(n,Le.getCompare());return new K(s,Je(e),new An({".priority":o},{".priority":Le}))}else return new K(s,Je(e),An.Default)}else{let n=K.EMPTY_NODE;return ot(t,(r,i)=>{if(Tn(t,r)&&r.substring(0,1)!=="."){const s=Je(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Je(e))}}lR(Je);/**
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
 */class mR extends yu{constructor(e){super(),this.indexPath_=e,R(!ne(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Pi(e.name,n.name):s}makePost(e,n){const r=Je(e),i=K.EMPTY_NODE.updateChild(this.indexPath_,r);return new ee(n,i)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,Oa);return new ee(_i,e)}toString(){return ia(this.indexPath_,0).join("/")}}/**
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
 */class gR extends yu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Pi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const r=Je(e);return new ee(n,r)}toString(){return".value"}}const vR=new gR;/**
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
 */function _E(t){return{type:"value",snapshotNode:t}}function ks(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function sa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function oa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function yR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class om{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(sa(n,a)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ks(n,r)):o.trackChildChange(oa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Le,(i,s)=>{n.hasChild(i)||r.trackChildChange(sa(i,s))}),n.isLeafNode()||n.forEachChild(Le,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(oa(i,s,o))}else r.trackChildChange(ks(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class aa{constructor(e){this.indexedFilter_=new om(e.getIndex()),this.index_=e.getIndex(),this.startPost_=aa.getStartPost_(e),this.endPost_=aa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ee(n,r))||(r=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=K.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(K.EMPTY_NODE);const s=this;return n.forEachChild(Le,(o,a)=>{s.matches(new ee(o,a))||(i=i.updateImmediateChild(o,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class _R{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new aa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ee(n,r))||(r=K.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=K.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(K.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;R(a.numChildren()===this.limit_,"");const l=new ee(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(oa(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(sa(n,d));const w=a.updateImmediateChild(n,K.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(ks(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(sa(c.name,c.node)),s.trackChildChange(ks(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,K.EMPTY_NODE)):e}}/**
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
 */class am{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bs}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_i}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Le}copy(){const e=new am;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wR(t){return t.loadsAllData()?new om(t.getIndex()):t.hasLimit()?new _R(t):new aa(t)}function Ny(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Le?n="$priority":t.index_===vR?n="$value":t.index_===fs?n="$key":(R(t.index_ instanceof mR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ze(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ze(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ze(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ze(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ze(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function xy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Le&&(e.i=t.index_.toString()),e}/**
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
 */class Ic extends uE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ra("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ic.getListenId_(e,r),a={};this.listens_[o]=a;const l=Ny(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),Ts(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=Ic.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ny(e._queryParams),r=e._path.toString(),i=new Ia;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ta(a.responseText)}catch{wt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&wt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class ER{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Nc(){return{value:null,children:new Map}}function wE(t,e,n){if(ne(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Z(e);t.children.has(r)||t.children.set(r,Nc());const i=t.children.get(r);e=ve(e),wE(i,e,n)}}function oh(t,e,n){t.value!==null?n(e,t.value):CR(t,(r,i)=>{const s=new he(e.toString()+"/"+r);oh(i,s,n)})}function CR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class SR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ot(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Ry=10*1e3,TR=30*1e3,bR=5*60*1e3;class kR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new SR(e);const r=Ry+(TR-Ry)*Math.random();ko(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ot(e,(i,s)=>{s>0&&Tn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ko(this.reportStats_.bind(this),Math.floor(Math.random()*2*bR))}}/**
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
 */var rn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(rn||(rn={}));function lm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function cm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function um(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class xc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=rn.ACK_USER_WRITE,this.source=lm()}operationForChild(e){if(ne(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new he(e));return new xc(ce(),n,this.revert)}}else return R(Z(this.path)===e,"operationForChild called for unrelated child."),new xc(ve(this.path),this.affectedTree,this.revert)}}/**
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
 */class la{constructor(e,n){this.source=e,this.path=n,this.type=rn.LISTEN_COMPLETE}operationForChild(e){return ne(this.path)?new la(this.source,ce()):new la(this.source,ve(this.path))}}/**
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
 */class wi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=rn.OVERWRITE}operationForChild(e){return ne(this.path)?new wi(this.source,ce(),this.snap.getImmediateChild(e)):new wi(this.source,ve(this.path),this.snap)}}/**
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
 */class Is{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=rn.MERGE}operationForChild(e){if(ne(this.path)){const n=this.children.subtree(new he(e));return n.isEmpty()?null:n.value?new wi(this.source,ce(),n.value):new Is(this.source,ce(),n)}else return R(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Is(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ei{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ne(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class IR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function NR(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(yR(o.childName,o.snapshotNode))}),ro(t,i,"child_removed",e,r,n),ro(t,i,"child_added",e,r,n),ro(t,i,"child_moved",s,r,n),ro(t,i,"child_changed",e,r,n),ro(t,i,"value",e,r,n),i}function ro(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>RR(t,a,l)),o.forEach(a=>{const l=xR(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function xR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function RR(t,e,n){if(e.childName==null||n.childName==null)throw Ls("Should only compare child_ events.");const r=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function _u(t,e){return{eventCache:t,serverCache:e}}function Io(t,e,n,r){return _u(new Ei(e,n,r),t.serverCache)}function EE(t,e,n,r){return _u(t.eventCache,new Ei(e,n,r))}function ah(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ci(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let xd;const OR=()=>(xd||(xd=new It(mx)),xd);class ge{constructor(e,n=OR()){this.value=e,this.children=n}static fromObject(e){let n=new ge(null);return ot(e,(r,i)=>{n=n.set(new he(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(ne(e))return null;{const r=Z(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ve(e),n);return s!=null?{path:De(new he(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ne(e))return this;{const n=Z(e),r=this.children.get(n);return r!==null?r.subtree(ve(e)):new ge(null)}}set(e,n){if(ne(e))return new ge(n,this.children);{const r=Z(e),s=(this.children.get(r)||new ge(null)).set(ve(e),n),o=this.children.insert(r,s);return new ge(this.value,o)}}remove(e){if(ne(e))return this.children.isEmpty()?new ge(null):new ge(null,this.children);{const n=Z(e),r=this.children.get(n);if(r){const i=r.remove(ve(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ge(null):new ge(this.value,s)}else return this}}get(e){if(ne(e))return this.value;{const n=Z(e),r=this.children.get(n);return r?r.get(ve(e)):null}}setTree(e,n){if(ne(e))return n;{const r=Z(e),s=(this.children.get(r)||new ge(null)).setTree(ve(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ge(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(De(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ne(e))return null;{const s=Z(e),o=this.children.get(s);return o?o.findOnPath_(ve(e),De(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,r){if(ne(e))return this;{this.value&&r(n,this.value);const i=Z(e),s=this.children.get(i);return s?s.foreachOnPath_(ve(e),De(n,i),r):new ge(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(De(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class ln{constructor(e){this.writeTree_=e}static empty(){return new ln(new ge(null))}}function No(t,e,n){if(ne(e))return new ln(new ge(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=kt(i,e);return s=s.updateChild(o,n),new ln(t.writeTree_.set(i,s))}else{const i=new ge(n),s=t.writeTree_.setTree(e,i);return new ln(s)}}}function lh(t,e,n){let r=t;return ot(n,(i,s)=>{r=No(r,De(e,i),s)}),r}function Oy(t,e){if(ne(e))return ln.empty();{const n=t.writeTree_.setTree(e,new ge(null));return new ln(n)}}function ch(t,e){return Ai(t,e)!=null}function Ai(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(kt(n.path,e)):null}function Py(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Le,(r,i)=>{e.push(new ee(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ee(r,i.value))}),e}function Pr(t,e){if(ne(e))return t;{const n=Ai(t,e);return n!=null?new ln(new ge(n)):new ln(t.writeTree_.subtree(e))}}function uh(t){return t.writeTree_.isEmpty()}function Ns(t,e){return CE(ce(),t.writeTree_,e)}function CE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=CE(De(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(De(t,".priority"),r)),n}}/**
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
 */function dm(t,e){return kE(e,t)}function PR(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=No(t.visibleWrites,e,n)),t.lastWriteId=r}function AR(t,e,n,r){R(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=lh(t.visibleWrites,e,n),t.lastWriteId=r}function MR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function DR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&LR(a,r.path)?i=!1:Gt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return FR(t),!0;if(r.snap)t.visibleWrites=Oy(t.visibleWrites,r.path);else{const a=r.children;ot(a,l=>{t.visibleWrites=Oy(t.visibleWrites,De(r.path,l))})}return!0}else return!1}function LR(t,e){if(t.snap)return Gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Gt(De(t.path,n),e))return!0;return!1}function FR(t){t.visibleWrites=SE(t.allWrites,$R,ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function $R(t){return t.visible}function SE(t,e,n){let r=ln.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Gt(n,o)?(a=kt(n,o),r=No(r,a,s.snap)):Gt(o,n)&&(a=kt(o,n),r=No(r,ce(),s.snap.getChild(a)));else if(s.children){if(Gt(n,o))a=kt(n,o),r=lh(r,a,s.children);else if(Gt(o,n))if(a=kt(o,n),ne(a))r=lh(r,ce(),s.children);else{const l=Ts(s.children,Z(a));if(l){const c=l.getChild(ve(a));r=No(r,ce(),c)}}}else throw Ls("WriteRecord should have .snap or .children")}}return r}function TE(t,e,n,r,i){if(!r&&!i){const s=Ai(t.visibleWrites,e);if(s!=null)return s;{const o=Pr(t.visibleWrites,e);if(uh(o))return n;if(n==null&&!ch(o,ce()))return null;{const a=n||K.EMPTY_NODE;return Ns(o,a)}}}else{const s=Pr(t.visibleWrites,e);if(!i&&uh(s))return n;if(!i&&n==null&&!ch(s,ce()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Gt(c.path,e)||Gt(e,c.path))},a=SE(t.allWrites,o,e),l=n||K.EMPTY_NODE;return Ns(a,l)}}}function UR(t,e,n){let r=K.EMPTY_NODE;const i=Ai(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Le,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Pr(t.visibleWrites,e);return n.forEachChild(Le,(o,a)=>{const l=Ns(Pr(s,new he(o)),a);r=r.updateImmediateChild(o,l)}),Py(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Pr(t.visibleWrites,e);return Py(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function zR(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=De(e,n);if(ch(t.visibleWrites,s))return null;{const o=Pr(t.visibleWrites,s);return uh(o)?i.getChild(n):Ns(o,i.getChild(n))}}function BR(t,e,n,r){const i=De(e,n),s=Ai(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Pr(t.visibleWrites,i);return Ns(o,r.getNode().getImmediateChild(n))}else return null}function jR(t,e){return Ai(t.visibleWrites,e)}function HR(t,e,n,r,i,s,o){let a;const l=Pr(t.visibleWrites,e),c=Ai(l,ce());if(c!=null)a=c;else if(n!=null)a=Ns(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&u.length<i;)d(p,r)!==0&&u.push(p),p=f.getNext();return u}else return[]}function WR(){return{visibleWrites:ln.empty(),allWrites:[],lastWriteId:-1}}function Rc(t,e,n,r){return TE(t.writeTree,t.treePath,e,n,r)}function fm(t,e){return UR(t.writeTree,t.treePath,e)}function Ay(t,e,n,r){return zR(t.writeTree,t.treePath,e,n,r)}function Oc(t,e){return jR(t.writeTree,De(t.treePath,e))}function VR(t,e,n,r,i,s){return HR(t.writeTree,t.treePath,e,n,r,i,s)}function hm(t,e,n){return BR(t.writeTree,t.treePath,e,n)}function bE(t,e){return kE(De(t.treePath,e),t.writeTree)}function kE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class GR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,oa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,sa(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ks(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,oa(r,e.snapshotNode,i.oldSnap));else throw Ls("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class KR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const IE=new KR;class pm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ei(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ci(this.viewCache_),s=VR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function YR(t){return{filter:t}}function qR(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function QR(t,e,n,r,i){const s=new GR;let o,a;if(n.type===rn.OVERWRITE){const c=n;c.source.fromUser?o=dh(t,e,c.path,c.snap,r,i,s):(R(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ne(c.path),o=Pc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===rn.MERGE){const c=n;c.source.fromUser?o=JR(t,e,c.path,c.children,r,i,s):(R(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=fh(t,e,c.path,c.children,r,i,a,s))}else if(n.type===rn.ACK_USER_WRITE){const c=n;c.revert?o=tO(t,e,c.path,r,i,s):o=ZR(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===rn.LISTEN_COMPLETE)o=eO(t,e,n.path,r,s);else throw Ls("Unknown operation type: "+n.type);const l=s.getChanges();return XR(e,o,l),{viewCache:o,changes:l}}function XR(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ah(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(_E(ah(e)))}}function NE(t,e,n,r,i,s){const o=e.eventCache;if(Oc(r,n)!=null)return e;{let a,l;if(ne(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ci(e),u=c instanceof K?c:K.EMPTY_NODE,d=fm(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Rc(r,Ci(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Z(n);if(c===".priority"){R(Fr(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Ay(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ve(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Ay(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=hm(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return Io(e,a,o.isFullyInitialized()||ne(n),t.filter.filtersNodes())}}function Pc(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ne(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),p,null)}else{const p=Z(n);if(!l.isCompleteForPath(n)&&Fr(n)>1)return e;const m=ve(n),C=l.getNode().getImmediateChild(p).updateChild(m,r);p===".priority"?c=u.updatePriority(l.getNode(),C):c=u.updateChild(l.getNode(),p,C,m,IE,null)}const d=EE(e,c,l.isFullyInitialized()||ne(n),u.filtersNodes()),f=new pm(i,d,s);return NE(t,d,n,i,f,a)}function dh(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new pm(i,e,s);if(ne(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Io(e,c,!0,t.filter.filtersNodes());else{const d=Z(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Io(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ve(n),p=a.getNode().getImmediateChild(d);let m;if(ne(f))m=r;else{const w=u.getCompleteChild(d);w!=null?nm(f)===".priority"&&w.getChild(fE(f)).isEmpty()?m=w:m=w.updateChild(f,r):m=K.EMPTY_NODE}if(p.equals(m))l=e;else{const w=t.filter.updateChild(a.getNode(),d,m,f,u,o);l=Io(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function My(t,e){return t.eventCache.isCompleteForChild(e)}function JR(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=De(n,l);My(e,Z(u))&&(a=dh(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=De(n,l);My(e,Z(u))||(a=dh(t,a,u,c,i,s,o))}),a}function Dy(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function fh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ne(n)?c=r:c=new ge(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),m=Dy(t,p,f);l=Pc(t,l,new he(d),m,i,s,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const m=e.serverCache.getNode().getImmediateChild(d),w=Dy(t,m,f);l=Pc(t,l,new he(d),w,i,s,o,a)}}),l}function ZR(t,e,n,r,i,s,o){if(Oc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ne(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Pc(t,e,n,l.getNode().getChild(n),i,s,a,o);if(ne(n)){let c=new ge(null);return l.getNode().forEachChild(fs,(u,d)=>{c=c.set(new he(u),d)}),fh(t,e,n,c,i,s,a,o)}else return e}else{let c=new ge(null);return r.foreach((u,d)=>{const f=De(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),fh(t,e,n,c,i,s,a,o)}}function eO(t,e,n,r,i){const s=e.serverCache,o=EE(e,s.getNode(),s.isFullyInitialized()||ne(n),s.isFiltered());return NE(t,o,n,r,IE,i)}function tO(t,e,n,r,i,s){let o;if(Oc(r,n)!=null)return e;{const a=new pm(r,e,i),l=e.eventCache.getNode();let c;if(ne(n)||Z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Rc(r,Ci(e));else{const d=e.serverCache.getNode();R(d instanceof K,"serverChildren would be complete if leaf node"),u=fm(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=Z(n);let d=hm(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ve(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,K.EMPTY_NODE,ve(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Rc(r,Ci(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Oc(r,ce())!=null,Io(e,c,o,t.filter.filtersNodes())}}/**
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
 */class nO{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new om(r.getIndex()),s=wR(r);this.processor_=YR(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(K.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(K.EMPTY_NODE,a.getNode(),null),u=new Ei(l,o.isFullyInitialized(),i.filtersNodes()),d=new Ei(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=_u(d,u),this.eventGenerator_=new IR(this.query_)}get query(){return this.query_}}function rO(t){return t.viewCache_.serverCache.getNode()}function iO(t,e){const n=Ci(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ne(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function Ly(t){return t.eventRegistrations_.length===0}function sO(t,e){t.eventRegistrations_.push(e)}function Fy(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function $y(t,e,n,r){e.type===rn.MERGE&&e.source.queryId!==null&&(R(Ci(t.viewCache_),"We should always have a full cache before handling merges"),R(ah(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=QR(t.processor_,i,e,n,r);return qR(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,xE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function oO(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Le,(s,o)=>{r.push(ks(s,o))}),n.isFullyInitialized()&&r.push(_E(n.getNode())),xE(t,r,n.getNode(),e)}function xE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return NR(t.eventGenerator_,e,n,i)}/**
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
 */let Ac;class aO{constructor(){this.views=new Map}}function lO(t){R(!Ac,"__referenceConstructor has already been defined"),Ac=t}function cO(){return R(Ac,"Reference.ts has not been loaded"),Ac}function uO(t){return t.views.size===0}function mm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),$y(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat($y(o,e,n,r));return s}}function dO(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Rc(n,i?r:null),l=!1;a?l=!0:r instanceof K?(a=fm(n,r),l=!1):(a=K.EMPTY_NODE,l=!1);const c=_u(new Ei(a,l,!1),new Ei(r,i,!1));return new nO(e,c)}return o}function fO(t,e,n,r,i,s){const o=dO(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),sO(o,n),oO(o,n)}function hO(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=$r(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Fy(c,n,r)),Ly(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Fy(l,n,r)),Ly(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!$r(t)&&s.push(new(cO())(e._repo,e._path)),{removed:s,events:o}}function RE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hs(t,e){let n=null;for(const r of t.views.values())n=n||iO(r,e);return n}function OE(t,e){if(e._queryParams.loadsAllData())return wu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function PE(t,e){return OE(t,e)!=null}function $r(t){return wu(t)!=null}function wu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Mc;function pO(t){R(!Mc,"__referenceConstructor has already been defined"),Mc=t}function mO(){return R(Mc,"Reference.ts has not been loaded"),Mc}let gO=1;class Uy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ge(null),this.pendingWriteTree_=WR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function AE(t,e,n,r,i){return PR(t.pendingWriteTree_,e,n,r,i),i?Us(t,new wi(lm(),e,n)):[]}function vO(t,e,n,r){AR(t.pendingWriteTree_,e,n,r);const i=ge.fromObject(n);return Us(t,new Is(lm(),e,i))}function _r(t,e,n=!1){const r=MR(t.pendingWriteTree_,e);if(DR(t.pendingWriteTree_,e)){let s=new ge(null);return r.snap!=null?s=s.set(ce(),!0):ot(r.children,o=>{s=s.set(new he(o),!0)}),Us(t,new xc(r.path,s,n))}else return[]}function Eu(t,e,n){return Us(t,new wi(cm(),e,n))}function yO(t,e,n){const r=ge.fromObject(n);return Us(t,new Is(cm(),e,r))}function _O(t,e){return Us(t,new la(cm(),e))}function wO(t,e,n){const r=vm(t,n);if(r){const i=ym(r),s=i.path,o=i.queryId,a=kt(s,e),l=new la(um(o),a);return _m(t,s,l)}else return[]}function hh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||PE(o,e))){const l=hO(o,e,n,r);uO(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,p)=>$r(p));if(u&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const p=SO(f);for(let m=0;m<p.length;++m){const w=p[m],C=w.query,v=LE(t,w);t.listenProvider_.startListening(xo(C),Dc(t,C),v.hashFn,v.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(xo(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(Cu(f));t.listenProvider_.stopListening(xo(f),p)}))}TO(t,c)}return a}function EO(t,e,n,r){const i=vm(t,r);if(i!=null){const s=ym(i),o=s.path,a=s.queryId,l=kt(o,e),c=new wi(um(a),l,n);return _m(t,o,c)}else return[]}function CO(t,e,n,r){const i=vm(t,r);if(i){const s=ym(i),o=s.path,a=s.queryId,l=kt(o,e),c=ge.fromObject(n),u=new Is(um(a),l,c);return _m(t,o,u)}else return[]}function zy(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const m=kt(f,i);s=s||hs(p,m),o=o||$r(p)});let a=t.syncPointTree_.get(i);a?(o=o||$r(a),s=s||hs(a,ce())):(a=new aO,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=K.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,m)=>{const w=hs(m,ce());w&&(s=s.updateImmediateChild(p,w))}));const c=PE(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Cu(e);R(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=bO();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=dm(t.pendingWriteTree_,i);let d=fO(a,e,n,u,s,l);if(!c&&!o&&!r){const f=OE(a,e);d=d.concat(kO(t,e,f))}return d}function gm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=kt(o,e),c=hs(a,l);if(c)return c});return TE(i,e,s,n,!0)}function Us(t,e){return ME(e,t.syncPointTree_,null,dm(t.pendingWriteTree_,ce()))}function ME(t,e,n,r){if(ne(t.path))return DE(t,e,n,r);{const i=e.get(ce());n==null&&i!=null&&(n=hs(i,ce()));let s=[];const o=Z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=bE(r,o);s=s.concat(ME(a,l,c,u))}return i&&(s=s.concat(mm(i,t,r,n))),s}}function DE(t,e,n,r){const i=e.get(ce());n==null&&i!=null&&(n=hs(i,ce()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=bE(r,o),u=t.operationForChild(o);u&&(s=s.concat(DE(u,a,l,c)))}),i&&(s=s.concat(mm(i,t,r,n))),s}function LE(t,e){const n=e.query,r=Dc(t,n);return{hashFn:()=>(rO(e)||K.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?wO(t,n._path,r):_O(t,n._path);{const s=yx(i,n);return hh(t,n,null,s)}}}}function Dc(t,e){const n=Cu(e);return t.queryToTagMap.get(n)}function Cu(t){return t._path.toString()+"$"+t._queryIdentifier}function vm(t,e){return t.tagToQueryMap.get(e)}function ym(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new he(t.substr(0,e))}}function _m(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=dm(t.pendingWriteTree_,e);return mm(r,n,i,null)}function SO(t){return t.fold((e,n,r)=>{if(n&&$r(n))return[wu(n)];{let i=[];return n&&(i=RE(n)),ot(r,(s,o)=>{i=i.concat(o)}),i}})}function xo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(mO())(t._repo,t._path):t}function TO(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Cu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function bO(){return gO++}function kO(t,e,n){const r=e._path,i=Dc(t,e),s=LE(t,n),o=t.listenProvider_.startListening(xo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)R(!$r(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!ne(c)&&u&&$r(u))return[wu(u).query];{let f=[];return u&&(f=f.concat(RE(u).map(p=>p.query))),ot(d,(p,m)=>{f=f.concat(m)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(xo(u),Dc(t,u))}}return o}/**
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
 */class wm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new wm(n)}node(){return this.node_}}class Em{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=De(this.path_,e);return new Em(this.syncTree_,n)}node(){return gm(this.syncTree_,this.path_)}}const IO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},By=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return NO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return xO(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},NO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},xO=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},FE=function(t,e,n,r){return Cm(e,new Em(n,t),r)},$E=function(t,e,n){return Cm(t,new wm(e),n)};function Cm(t,e,n){const r=t.getPriority().val(),i=By(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=By(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new qe(a,Je(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new qe(i))),o.forEachChild(Le,(a,l)=>{const c=Cm(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Sm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Tm(t,e){let n=e instanceof he?e:new he(e),r=t,i=Z(n);for(;i!==null;){const s=Ts(r.node.children,i)||{children:{},childCount:0};r=new Sm(i,r,s),n=ve(n),i=Z(n)}return r}function zs(t){return t.node.value}function UE(t,e){t.node.value=e,ph(t)}function zE(t){return t.node.childCount>0}function RO(t){return zs(t)===void 0&&!zE(t)}function Su(t,e){ot(t.node.children,(n,r)=>{e(new Sm(n,t,r))})}function BE(t,e,n,r){n&&!r&&e(t),Su(t,i=>{BE(i,e,!0,r)}),n&&r&&e(t)}function OO(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Pa(t){return new he(t.parent===null?t.name:Pa(t.parent)+"/"+t.name)}function ph(t){t.parent!==null&&PO(t.parent,t.name,t)}function PO(t,e,n){const r=RO(n),i=Tn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ph(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ph(t))}/**
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
 */const AO=/[\[\].#$\/\u0000-\u001F\u007F]/,MO=/[\[\].#$\u0000-\u001F\u007F]/,Rd=10*1024*1024,bm=function(t){return typeof t=="string"&&t.length!==0&&!AO.test(t)},jE=function(t){return typeof t=="string"&&t.length!==0&&!MO.test(t)},DO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),jE(t)},LO=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Xp(t)||t&&typeof t=="object"&&Tn(t,".sv")},HE=function(t,e,n,r){r&&e===void 0||Tu(mu(t,"value"),e,n)},Tu=function(t,e,n){const r=n instanceof he?new Jx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+qr(r));if(typeof e=="function")throw new Error(t+"contains a function "+qr(r)+" with contents = "+e.toString());if(Xp(e))throw new Error(t+"contains "+e.toString()+" "+qr(r));if(typeof e=="string"&&e.length>Rd/3&&gu(e)>Rd)throw new Error(t+"contains a string greater than "+Rd+" utf8 bytes "+qr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ot(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!bm(o)))throw new Error(t+" contains an invalid key ("+o+") "+qr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Zx(r,o),Tu(t,a,r),eR(r)}),i&&s)throw new Error(t+' contains ".value" child '+qr(r)+" in addition to actual children.")}},FO=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ia(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!bm(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Xx);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Gt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},$O=function(t,e,n,r){if(r&&e===void 0)return;const i=mu(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ot(e,(o,a)=>{const l=new he(o);if(Tu(i,a,De(n,l)),nm(l)===".priority"&&!LO(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),FO(i,s)},WE=function(t,e,n,r){if(!(r&&n===void 0)&&!jE(n))throw new Error(mu(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},UO=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),WE(t,e,n,r)},km=function(t,e){if(Z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},zO=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!DO(n))throw new Error(mu(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class BO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bu(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!rm(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function VE(t,e,n){bu(t,n),GE(t,r=>rm(r,e))}function un(t,e,n){bu(t,n),GE(t,r=>Gt(r,e)||Gt(e,r))}function GE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(jO(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function jO(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();li&&rt("event: "+n.toString()),$s(r)}}}/**
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
 */const HO="repo_interrupt",WO=25;class VO{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new BO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Nc(),this.transactionQueueTree_=new Sm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function GO(t,e,n){if(t.stats_=em(t.repoInfo_),t.forceRestClient_||Cx())t.server_=new Ic(t.repoInfo_,(r,i,s,o)=>{jy(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Hy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ze(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new $n(t.repoInfo_,e,(r,i,s,o)=>{jy(t,r,i,s,o)},r=>{Hy(t,r)},r=>{KO(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Ix(t.repoInfo_,()=>new kR(t.stats_,t.server_)),t.infoData_=new ER,t.infoSyncTree_=new Uy({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Eu(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Im(t,"connected",!1),t.serverSyncTree_=new Uy({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);un(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function KE(t){const n=t.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ku(t){return IO({timestamp:KE(t)})}function jy(t,e,n,r,i){t.dataUpdateCount++;const s=new he(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Ec(n,c=>Je(c));o=CO(t.serverSyncTree_,s,l,i)}else{const l=Je(n);o=EO(t.serverSyncTree_,s,l,i)}else if(r){const l=Ec(n,c=>Je(c));o=yO(t.serverSyncTree_,s,l)}else{const l=Je(n);o=Eu(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=xs(t,s)),un(t.eventQueue_,a,o)}function Hy(t,e){Im(t,"connected",e),e===!1&&QO(t)}function KO(t,e){ot(e,(n,r)=>{Im(t,n,r)})}function Im(t,e,n){const r=new he("/.info/"+e),i=Je(n);t.infoData_.updateSnapshot(r,i);const s=Eu(t.infoSyncTree_,r,i);un(t.eventQueue_,r,s)}function Nm(t){return t.nextWriteId_++}function YO(t,e,n,r,i){Iu(t,"set",{path:e.toString(),value:n,priority:r});const s=ku(t),o=Je(n,r),a=gm(t.serverSyncTree_,e),l=$E(o,a,s),c=Nm(t),u=AE(t.serverSyncTree_,e,l,c,!0);bu(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const m=f==="ok";m||wt("set at "+e+" failed: "+f);const w=_r(t.serverSyncTree_,c,!m);un(t.eventQueue_,e,w),mh(t,i,f,p)});const d=Rm(t,e);xs(t,d),un(t.eventQueue_,d,[])}function qO(t,e,n,r){Iu(t,"update",{path:e.toString(),value:n});let i=!0;const s=ku(t),o={};if(ot(n,(a,l)=>{i=!1,o[a]=FE(De(e,a),Je(l),t.serverSyncTree_,s)}),i)rt("update() called with empty data.  Don't do anything."),mh(t,r,"ok",void 0);else{const a=Nm(t),l=vO(t.serverSyncTree_,e,o,a);bu(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||wt("update at "+e+" failed: "+c);const f=_r(t.serverSyncTree_,a,!d),p=f.length>0?xs(t,e):e;un(t.eventQueue_,p,f),mh(t,r,c,u)}),ot(n,c=>{const u=Rm(t,De(e,c));xs(t,u)}),un(t.eventQueue_,e,[])}}function QO(t){Iu(t,"onDisconnectEvents");const e=ku(t),n=Nc();oh(t.onDisconnect_,ce(),(i,s)=>{const o=FE(i,s,t.serverSyncTree_,e);wE(n,i,o)});let r=[];oh(n,ce(),(i,s)=>{r=r.concat(Eu(t.serverSyncTree_,i,s));const o=Rm(t,i);xs(t,o)}),t.onDisconnect_=Nc(),un(t.eventQueue_,ce(),r)}function XO(t,e,n){let r;Z(e._path)===".info"?r=zy(t.infoSyncTree_,e,n):r=zy(t.serverSyncTree_,e,n),VE(t.eventQueue_,e._path,r)}function Wy(t,e,n){let r;Z(e._path)===".info"?r=hh(t.infoSyncTree_,e,n):r=hh(t.serverSyncTree_,e,n),VE(t.eventQueue_,e._path,r)}function JO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(HO)}function Iu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),rt(n,...e)}function mh(t,e,n,r){e&&$s(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function YE(t,e,n){return gm(t.serverSyncTree_,e,n)||K.EMPTY_NODE}function xm(t,e=t.transactionQueueTree_){if(e||Nu(t,e),zs(e)){const n=QE(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&ZO(t,Pa(e),n)}else zE(e)&&Su(e,n=>{xm(t,n)})}function ZO(t,e,n){const r=n.map(c=>c.currentWriteId),i=YE(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];R(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=kt(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Iu(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(_r(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Nu(t,Tm(t.transactionQueueTree_,e)),xm(t,t.transactionQueueTree_),un(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)$s(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{wt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}xs(t,e)}},o)}function xs(t,e){const n=qE(t,e),r=Pa(n),i=QE(t,n);return eP(t,i,r),r}function eP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=kt(n,l.path);let u=!1,d;if(R(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(_r(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=WO)u=!0,d="maxretry",i=i.concat(_r(t.serverSyncTree_,l.currentWriteId,!0));else{const f=YE(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Tu("transaction failed: Data returned ",p,l.path);let m=Je(p);typeof p=="object"&&p!=null&&Tn(p,".priority")||(m=m.updatePriority(f.getPriority()));const C=l.currentWriteId,v=ku(t),y=$E(m,f,v);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=y,l.currentWriteId=Nm(t),o.splice(o.indexOf(C),1),i=i.concat(AE(t.serverSyncTree_,l.path,y,l.currentWriteId,l.applyLocally)),i=i.concat(_r(t.serverSyncTree_,C,!0))}else u=!0,d="nodata",i=i.concat(_r(t.serverSyncTree_,l.currentWriteId,!0))}un(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Nu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)$s(r[a]);xm(t,t.transactionQueueTree_)}function qE(t,e){let n,r=t.transactionQueueTree_;for(n=Z(e);n!==null&&zs(r)===void 0;)r=Tm(r,n),e=ve(e),n=Z(e);return r}function QE(t,e){const n=[];return XE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function XE(t,e,n){const r=zs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Su(e,i=>{XE(t,i,n)})}function Nu(t,e){const n=zs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,UE(e,n.length>0?n:void 0)}Su(e,r=>{Nu(t,r)})}function Rm(t,e){const n=Pa(qE(t,e)),r=Tm(t.transactionQueueTree_,e);return OO(r,i=>{Od(t,i)}),Od(t,r),BE(r,i=>{Od(t,i)}),n}function Od(t,e){const n=zs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(_r(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?UE(e,void 0):n.length=s+1,un(t.eventQueue_,Pa(e),i);for(let o=0;o<r.length;o++)$s(r[o])}}/**
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
 */function tP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function nP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):wt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Vy=function(t,e){const n=rP(t),r=n.namespace;n.domain==="firebase.com"&&Wn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||hx();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new rE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new he(n.pathString)}},rP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=tP(t.substring(u,d)));const f=nP(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const Gy="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",iP=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Gy.charAt(n%64),n=Math.floor(n/64);R(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Gy.charAt(e[i]);return R(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class JE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ze(this.snapshot.exportVal())}}class ZE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class sP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Om{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ne(this._path)?null:nm(this._path)}get ref(){return new Jn(this._repo,this._path)}get _queryIdentifier(){const e=xy(this._queryParams),n=Jp(e);return n==="{}"?"default":n}get _queryObject(){return xy(this._queryParams)}isEqual(e){if(e=Ye(e),!(e instanceof Om))return!1;const n=this._repo===e._repo,r=rm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Qx(this._path)}}class Jn extends Om{constructor(e,n){super(e,n,new am,!1)}get parent(){const e=fE(this._path);return e===null?null:new Jn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ca{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new he(e),r=tt(this.ref,e);return new ca(this._node.getChild(n),r,Le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ca(i,tt(this.ref,r),Le)))}hasChild(e){const n=new he(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ve(t,e){return t=Ye(t),t._checkNotDeleted("ref"),e!==void 0?tt(t._root,e):t._root}function tt(t,e){return t=Ye(t),Z(t._path)===null?UO("child","path",e,!1):WE("child","path",e,!1),new Jn(t._repo,De(t._path,e))}function eC(t,e){t=Ye(t),km("push",t._path),HE("push",e,t._path,!0);const n=KE(t._repo),r=iP(n),i=tt(t,r),s=tt(t,r);let o;return e!=null?o=Mi(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function oP(t){return km("remove",t._path),Mi(t,null)}function Mi(t,e){t=Ye(t),km("set",t._path),HE("set",e,t._path,!1);const n=new Ia;return YO(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Cn(t,e){$O("update",e,t._path,!1);const n=new Ia;return qO(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Pm{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new JE("value",this,new ca(e.snapshotNode,new Jn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ZE(this,e,n):null}matches(e){return e instanceof Pm?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Am{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ZE(this,e,n):null}createEvent(e,n){R(e.childName!=null,"Child events should have a childName.");const r=tt(new Jn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new JE(e.type,this,new ca(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Am?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function aP(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{Wy(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new sP(n,s||void 0),a=e==="value"?new Pm(o):new Am(e,o);return XO(t._repo,t,a),()=>Wy(t._repo,t,a)}function lP(t,e,n,r){return aP(t,"value",e,n,r)}lO(Jn);pO(Jn);/**
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
 */const cP="FIREBASE_DATABASE_EMULATOR_HOST",gh={};let uP=!1;function dP(t,e,n,r){t.repoInfo_=new rE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function fP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Vy(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[cP]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Vy(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new ds(ds.OWNER):new Tx(t.name,t.options,e);zO("Invalid Firebase Database URL",o),ne(o.path)||Wn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=pP(a,t,u,new Sx(t.name,n));return new mP(d,t)}function hP(t,e){const n=gh[e];(!n||n[t.key]!==t)&&Wn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),JO(t),delete n[t.key]}function pP(t,e,n,r){let i=gh[e.name];i||(i={},gh[e.name]=i);let s=i[t.toURLString()];return s&&Wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new VO(t,uP,n,r),i[t.toURLString()]=s,s}class mP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(GO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jn(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wn("Cannot call "+e+" on a deleted database.")}}function gP(t=Qp(),e){const n=vu(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Ow("database");r&&vP(n,...r)}return n}function vP(t,e,n,r={}){t=Ye(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Wn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ds(ds.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Mw(r.mockUserToken,t.app.options.projectId);s=new ds(o)}dP(i,e,n,s)}/**
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
 */function yP(t){lx(Oi),yi(new Lr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return fP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),_n(fy,hy,t),_n(fy,hy,"esm2017")}$n.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$n.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};yP();function Mm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function tC(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _P=tC,nC=new Na("auth","Firebase",tC());/**
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
 */const Lc=new Yp("@firebase/auth");function wP(t,...e){Lc.logLevel<=fe.WARN&&Lc.warn(`Auth (${Oi}): ${t}`,...e)}function $l(t,...e){Lc.logLevel<=fe.ERROR&&Lc.error(`Auth (${Oi}): ${t}`,...e)}/**
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
 */function Sn(t,...e){throw Dm(t,...e)}function wn(t,...e){return Dm(t,...e)}function rC(t,e,n){const r=Object.assign(Object.assign({},_P()),{[e]:n});return new Na("auth","Firebase",r).create(e,{appName:t.name})}function EP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Sn(t,"argument-error"),rC(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nC.create(t,...e)}function q(t,e,...n){if(!t)throw Dm(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $l(e),new Error(e)}function Vn(t,e){t||Mn(e)}/**
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
 */function vh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function CP(){return Ky()==="http:"||Ky()==="https:"}function Ky(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function SP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CP()||BN()||"connection"in navigator)?navigator.onLine:!0}function TP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=Kp()||Dw()}get(){return SP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lm(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class iC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kP=new Aa(3e4,6e4);function sC(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ma(t,e,n,r,i={}){return oC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),iC.fetch()(aC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function oC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bP),e);try{const i=new NP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ll(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ll(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ll(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ll(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw rC(t,u,c);Sn(t,u)}}catch(i){if(i instanceof Xn)throw i;Sn(t,"network-request-failed",{message:String(i)})}}async function IP(t,e,n,r,i={}){const s=await Ma(t,e,n,r,i);return"mfaPendingCredential"in s&&Sn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function aC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Lm(t.config,i):`${t.config.apiScheme}://${i}`}class NP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),kP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ll(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function xP(t,e){return Ma(t,"POST","/v1/accounts:delete",e)}async function RP(t,e){return Ma(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OP(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),i=Fm(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ro(Pd(i.auth_time)),issuedAtTime:Ro(Pd(i.iat)),expirationTime:Ro(Pd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Pd(t){return Number(t)*1e3}function Fm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $l("JWT malformed, contained fewer than 3 sections"),null;try{const i=wc(n);return i?JSON.parse(i):($l("Failed to decode base64 JWT payload"),null)}catch(i){return $l("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function PP(t){const e=Fm(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ua(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xn&&AP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class MP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ro(this.lastLoginAt),this.creationTime=Ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ua(t,RP(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?FP(s.providerUserInfo):[],a=LP(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new lC(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function DP(t){const e=Ye(t);await Fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function FP(t){return t.map(e=>{var{providerId:n}=e,r=Mm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $P(t,e){const n=await oC(t,{},async()=>{const r=Fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=aC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class da{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):PP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $P(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new da;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new da,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
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
 */function sr(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ci{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Mm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ua(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return OP(this,e)}reload(){return DP(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ci(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ua(this,xP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:E,isAnonymous:S,providerData:T,stsTokenManager:b}=n;q(_&&b,e,"internal-error");const k=da.fromJSON(this.name,b);q(typeof _=="string",e,"internal-error"),sr(d,e.name),sr(f,e.name),q(typeof E=="boolean",e,"internal-error"),q(typeof S=="boolean",e,"internal-error"),sr(p,e.name),sr(m,e.name),sr(w,e.name),sr(C,e.name),sr(v,e.name),sr(y,e.name);const D=new ci({uid:_,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:S,photoURL:m,phoneNumber:p,tenantId:w,stsTokenManager:k,createdAt:v,lastLoginAt:y});return T&&Array.isArray(T)&&(D.providerData=T.map(M=>Object.assign({},M))),C&&(D._redirectEventId=C),D}static async _fromIdTokenResponse(e,n,r=!1){const i=new da;i.updateFromServerResponse(n);const s=new ci({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fc(s),s}}/**
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
 */const Yy=new Map;function Dn(t){Vn(t instanceof Function,"Expected a class definition");let e=Yy.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yy.set(t,e),e)}/**
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
 */class cC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cC.type="NONE";const qy=cC;/**
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
 */function Ul(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ul(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ul("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ci._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ps(Dn(qy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Dn(qy);const o=Ul(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=ci._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ps(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ps(s,e,r))}}/**
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
 */function Qy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pC(e))return"Blackberry";if(mC(e))return"Webos";if($m(e))return"Safari";if((e.includes("chrome/")||dC(e))&&!e.includes("edge/"))return"Chrome";if(hC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uC(t=ht()){return/firefox\//i.test(t)}function $m(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dC(t=ht()){return/crios\//i.test(t)}function fC(t=ht()){return/iemobile/i.test(t)}function hC(t=ht()){return/android/i.test(t)}function pC(t=ht()){return/blackberry/i.test(t)}function mC(t=ht()){return/webos/i.test(t)}function xu(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UP(t=ht()){var e;return xu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zP(){return jN()&&document.documentMode===10}function gC(t=ht()){return xu(t)||hC(t)||mC(t)||pC(t)||/windows phone/i.test(t)||fC(t)}function BP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function vC(t,e=[]){let n;switch(t){case"Browser":n=Qy(ht());break;case"Worker":n=`${Qy(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Oi}/${r}`}async function yC(t,e){return Ma(t,"GET","/v2/recaptchaConfig",sC(t,e))}function Xy(t){return t!==void 0&&t.enterprise!==void 0}class _C{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function jP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",jP().appendChild(r)})}function HP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const WP="https://www.google.com/recaptcha/enterprise.js?render=",VP="recaptcha-enterprise",GP="NO_RECAPTCHA";class KP{constructor(e){this.type=VP,this.auth=Da(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{yC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new _C(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Xy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(GP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Xy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}wC(WP+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class YP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class qP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jy(this),this.idTokenSubscription=new Jy(this),this.beforeStateQueue=new YP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(e))})}async initializeRecaptchaConfig(){const e=await yC(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new _C(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new KP(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Na("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[Dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Da(t){return Ye(t)}class Jy{constructor(e){this.auth=e,this.observer=null,this.addObserver=XN(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function QP(t,e){const n=vu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Cc(s,e??{}))return i;Sn(i,"already-initialized")}return n.initialize({options:e})}function XP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JP(t,e,n){const r=Da(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=EC(e),{host:o,port:a}=ZP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||eA()}function EC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZP(t){const e=EC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Zy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Zy(o)}}}function Zy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class CC{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}/**
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
 */async function ms(t,e){return IP(t,"POST","/v1/accounts:signInWithIdp",sC(t,e))}/**
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
 */const tA="http://localhost";class Si extends CC{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Mm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Si(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ms(e,n)}buildRequest(){const e={requestUri:tA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fs(n)}return e}}/**
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
 */class Um{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class La extends Um{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fr extends La{constructor(){super("facebook.com")}static credential(e){return Si._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";fr.PROVIDER_ID="facebook.com";/**
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
 */class xn extends La{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Si._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
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
 */class hr extends La{constructor(){super("github.com")}static credential(e){return Si._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
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
 */class pr extends La{constructor(){super("twitter.com")}static credential(e,n){return Si._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
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
 */class Rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ci._fromIdTokenResponse(e,r,i),o=e_(r);return new Rs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=e_(r);return new Rs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function e_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $c extends Xn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$c.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new $c(e,n,r,i)}}function SC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$c._fromErrorAndOperation(t,s,e,r):s})}async function nA(t,e,n=!1){const r=await ua(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rs._forOperation(t,"link",r)}/**
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
 */async function rA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ua(t,SC(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=Fm(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(t.uid===a,r,"user-mismatch"),Rs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Sn(r,"user-mismatch"),s}}/**
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
 */async function iA(t,e,n=!1){const r="signIn",i=await SC(t,r,e),s=await Rs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function sA(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function oA(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function aA(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function lA(t){return Ye(t).signOut()}const Uc="__sak";/**
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
 */class TC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uc,"1"),this.storage.removeItem(Uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function cA(){const t=ht();return $m(t)||xu(t)}const uA=1e3,dA=10;class bC extends TC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cA()&&BP(),this.fallbackToPolling=gC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,dA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bC.type="LOCAL";const fA=bC;/**
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
 */class kC extends TC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kC.type="SESSION";const IC=kC;/**
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
 */function hA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ru{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ru(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await hA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ru.receivers=[];/**
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
 */function zm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=zm("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function En(){return window}function mA(t){En().location.href=t}/**
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
 */function NC(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function gA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yA(){return NC()?self:null}/**
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
 */const xC="firebaseLocalStorageDb",_A=1,zc="firebaseLocalStorage",RC="fbase_key";class Fa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ou(t,e){return t.transaction([zc],e?"readwrite":"readonly").objectStore(zc)}function wA(){const t=indexedDB.deleteDatabase(xC);return new Fa(t).toPromise()}function yh(){const t=indexedDB.open(xC,_A);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zc,{keyPath:RC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zc)?e(r):(r.close(),await wA(),e(await yh()))})})}async function t_(t,e,n){const r=Ou(t,!0).put({[RC]:e,value:n});return new Fa(r).toPromise()}async function EA(t,e){const n=Ou(t,!1).get(e),r=await new Fa(n).toPromise();return r===void 0?null:r.value}function n_(t,e){const n=Ou(t,!0).delete(e);return new Fa(n).toPromise()}const CA=800,SA=3;class OC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return NC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ru._getInstance(yA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gA(),!this.activeServiceWorker)return;this.sender=new pA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yh();return await t_(e,Uc,"1"),await n_(e,Uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>t_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>EA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>n_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ou(i,!1).getAll();return new Fa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}OC.type="LOCAL";const TA=OC;new Aa(3e4,6e4);/**
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
 */function PC(t,e){return e?Dn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bm extends CC{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bA(t){return iA(t.auth,new Bm(t),t.bypassAuthState)}function kA(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),rA(n,new Bm(t),t.bypassAuthState)}async function IA(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),nA(n,new Bm(t),t.bypassAuthState)}/**
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
 */class AC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bA;case"linkViaPopup":case"linkViaRedirect":return IA;case"reauthViaPopup":case"reauthViaRedirect":return kA;default:Sn(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const NA=new Aa(2e3,1e4);async function xA(t,e,n){const r=Da(t);EP(t,e,Um);const i=PC(r,n);return new ni(r,"signInViaPopup",e,i).executeNotNull()}class ni extends AC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ni.currentPopupAction&&ni.currentPopupAction.cancel(),ni.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=zm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ni.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NA.get())};e()}}ni.currentPopupAction=null;/**
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
 */const RA="pendingRedirect",zl=new Map;class OA extends AC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zl.get(this.auth._key());if(!e){try{const r=await PA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zl.set(this.auth._key(),e)}return this.bypassAuthState||zl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PA(t,e){const n=DA(e),r=MA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function AA(t,e){zl.set(t._key(),e)}function MA(t){return Dn(t._redirectPersistence)}function DA(t){return Ul(RA,t.config.apiKey,t.name)}async function LA(t,e,n=!1){const r=Da(t),i=PC(r,e),o=await new OA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const FA=10*60*1e3;class $A{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!MC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FA&&this.cachedEventUids.clear(),this.cachedEventUids.has(r_(e))}saveEventToCache(e){this.cachedEventUids.add(r_(e)),this.lastProcessedEventTime=Date.now()}}function r_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function MC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return MC(t);default:return!1}}/**
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
 */async function zA(t,e={}){return Ma(t,"GET","/v1/projects",e)}/**
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
 */const BA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jA=/^https?/;async function HA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zA(t);for(const n of e)try{if(WA(n))return}catch{}Sn(t,"unauthorized-domain")}function WA(t){const e=vh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jA.test(n))return!1;if(BA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const VA=new Aa(3e4,6e4);function i_(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GA(t){return new Promise((e,n)=>{var r,i,s;function o(){i_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{i_(),n(wn(t,"network-request-failed"))},timeout:VA.get()})}if(!((i=(r=En().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=En().gapi)===null||s===void 0)&&s.load)o();else{const a=HP("iframefcb");return En()[a]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},wC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Bl=null,e})}let Bl=null;function KA(t){return Bl=Bl||GA(t),Bl}/**
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
 */const YA=new Aa(5e3,15e3),qA="__/auth/iframe",QA="emulator/auth/iframe",XA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZA(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lm(e,QA):`https://${t.config.authDomain}/${qA}`,r={apiKey:e.apiKey,appName:t.name,v:Oi},i=JA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fs(r).slice(1)}`}async function eM(t){const e=await KA(t),n=En().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:ZA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),a=En().setTimeout(()=>{s(o)},YA.get());function l(){En().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const tM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nM=500,rM=600,iM="_blank",sM="http://localhost";class s_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oM(t,e,n,r=nM,i=rM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tM),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ht().toLowerCase();n&&(a=dC(c)?iM:n),uC(c)&&(e=e||sM,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(UP(c)&&a!=="_self")return aM(e||"",a),new s_(null);const d=window.open(e||"",a,u);q(d,t,"popup-blocked");try{d.focus()}catch{}return new s_(d)}function aM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lM="__/auth/handler",cM="emulator/auth/handler",uM=encodeURIComponent("fac");async function o_(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Oi,eventId:i};if(e instanceof Um){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof La){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${uM}=${encodeURIComponent(l)}`:"";return`${dM(t)}?${Fs(a).slice(1)}${c}`}function dM({config:t}){return t.emulator?Lm(t,cM):`https://${t.authDomain}/${lM}`}/**
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
 */const Ad="webStorageSupport";class fM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=IC,this._completeRedirectFn=LA,this._overrideRedirectResult=AA}async _openPopup(e,n,r,i){var s;Vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await o_(e,n,r,vh(),i);return oM(e,o,zm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await o_(e,n,r,vh(),i);return mA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eM(e),r=new $A(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ad,{type:Ad},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ad];o!==void 0&&n(!!o),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gC()||$m()||xu()}}const hM=fM;var a_="@firebase/auth",l_="0.23.2";/**
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
 */class pM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gM(t){yi(new Lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vC(t)},c=new qP(r,i,s,l);return XP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yi(new Lr("auth-internal",e=>{const n=Da(e.getProvider("auth").getImmediate());return(r=>new pM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(a_,l_,mM(t)),_n(a_,l_,"esm2017")}/**
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
 */const vM=5*60,yM=Aw("authIdTokenMaxAge")||vM;let c_=null;const _M=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yM)return;const i=n==null?void 0:n.token;c_!==i&&(c_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Pu(t=Qp()){const e=vu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QP(t,{popupRedirectResolver:hM,persistence:[TA,fA,IC]}),r=Aw("authTokenSyncURL");if(r){const s=_M(r);oA(n,s,()=>s(n.currentUser)),sA(n,o=>s(o))}const i=Rw("auth");return i&&JP(n,`http://${i}`),n}gM("Browser");/**
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
 */const DC="firebasestorage.googleapis.com",LC="storageBucket",wM=2*60*1e3,EM=10*60*1e3;/**
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
 */class $e extends Xn{constructor(e,n,r=0){super(Md(e),`Firebase Storage: ${n} (${Md(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Md(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function Md(t){return"storage/"+t}function jm(){const t="An unknown error occurred, please check the error payload for server response.";return new $e(Fe.UNKNOWN,t)}function CM(t){return new $e(Fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function SM(t){return new $e(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function TM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new $e(Fe.UNAUTHENTICATED,t)}function bM(){return new $e(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function kM(t){return new $e(Fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function IM(){return new $e(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function NM(){return new $e(Fe.CANCELED,"User canceled the upload/download.")}function xM(t){return new $e(Fe.INVALID_URL,"Invalid URL '"+t+"'.")}function RM(t){return new $e(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function OM(){return new $e(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+LC+"' property when initializing the app?")}function PM(){return new $e(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function AM(){return new $e(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function MM(t){return new $e(Fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _h(t){return new $e(Fe.INVALID_ARGUMENT,t)}function FC(){return new $e(Fe.APP_DELETED,"The Firebase app was deleted.")}function DM(t){return new $e(Fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Oo(t,e){return new $e(Fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function io(t){throw new $e(Fe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Dt.makeFromUrl(e,n)}catch{return new Dt(e,"")}if(r.path==="")return r;throw RM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${u}/b/${i}/o${f}`,"i"),m={bucket:1,path:3},w=n===DC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",v=new RegExp(`^https?://${w}/${i}/${C}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:p,indices:m,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<_.length;E++){const S=_[E],T=S.regex.exec(e);if(T){const b=T[S.indices.bucket];let k=T[S.indices.path];k||(k=""),r=new Dt(b,k),S.postModify(r);break}}if(r==null)throw xM(e);return r}}class LM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function FM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...C){c||(c=!0,e.apply(null,C))}function d(C){i=setTimeout(()=>{i=null,t(p,l())},C)}function f(){s&&clearTimeout(s)}function p(C,...v){if(c){f();return}if(C){f(),u.call(null,C,...v);return}if(l()||o){f(),u.call(null,C,...v);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,d(_)}let m=!1;function w(C){m||(m=!0,f(),!c&&(i!==null?(C||(a=2),clearTimeout(i),d(0)):C||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function $M(t){t(!1)}/**
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
 */function UM(t){return t!==void 0}function zM(t){return typeof t=="object"&&!Array.isArray(t)}function Hm(t){return typeof t=="string"||t instanceof String}function u_(t){return Wm()&&t instanceof Blob}function Wm(){return typeof Blob<"u"&&!zN()}function d_(t,e,n,r){if(r<e)throw _h(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw _h(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Au(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function $C(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ui;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ui||(ui={}));/**
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
 */function BM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class jM{constructor(e,n,r,i,s,o,a,l,c,u,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new cl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ui.NO_ERROR,l=s.getStatus();if(!a||BM(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===ui.ABORT;r(!1,new cl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new cl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());UM(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=jm();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?FC():NM();o(l)}else{const l=IM();o(l)}};this.canceled_?n(!1,new cl(!1,null,!0)):this.backoffId_=FM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$M(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class cl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function HM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function WM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function VM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function KM(t,e,n,r,i,s,o=!0){const a=$C(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return VM(c,e),HM(c,n),WM(c,s),GM(c,r),new jM(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function YM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function qM(...t){const e=YM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Wm())return new Blob(t);throw new $e(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function QM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function XM(t){if(typeof atob>"u")throw MM("base-64");return atob(t)}/**
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
 */const mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Dd{constructor(e,n){this.data=e,this.contentType=n||null}}function JM(t,e){switch(t){case mn.RAW:return new Dd(UC(e));case mn.BASE64:case mn.BASE64URL:return new Dd(zC(t,e));case mn.DATA_URL:return new Dd(e4(e),t4(e))}throw jm()}function UC(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function ZM(t){let e;try{e=decodeURIComponent(t)}catch{throw Oo(mn.DATA_URL,"Malformed data URL.")}return UC(e)}function zC(t,e){switch(t){case mn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Oo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case mn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Oo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=XM(e)}catch(i){throw i.message.includes("polyfill")?i:Oo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class BC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Oo(mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=n4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function e4(t){const e=new BC(t);return e.base64?zC(mn.BASE64,e.rest):ZM(e.rest)}function t4(t){return new BC(t).contentType}function n4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class mr{constructor(e,n){let r=0,i="";u_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(u_(this.data_)){const r=this.data_,i=QM(r,e,n);return i===null?null:new mr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new mr(r,!0)}}static getBlob(...e){if(Wm()){const n=e.map(r=>r instanceof mr?r.data_:r);return new mr(qM.apply(null,n))}else{const n=e.map(o=>Hm(o)?JM(mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new mr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function jC(t){let e;try{e=JSON.parse(t)}catch{return null}return zM(e)?e:null}/**
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
 */function r4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function i4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function HC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function s4(t,e){return e}class mt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||s4}}let ul=null;function o4(t){return!Hm(t)||t.length<2?t:HC(t)}function WC(){if(ul)return ul;const t=[];t.push(new mt("bucket")),t.push(new mt("generation")),t.push(new mt("metageneration")),t.push(new mt("name","fullPath",!0));function e(s,o){return o4(o)}const n=new mt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new mt("size");return i.xform=r,t.push(i),t.push(new mt("timeCreated")),t.push(new mt("updated")),t.push(new mt("md5Hash",null,!0)),t.push(new mt("cacheControl",null,!0)),t.push(new mt("contentDisposition",null,!0)),t.push(new mt("contentEncoding",null,!0)),t.push(new mt("contentLanguage",null,!0)),t.push(new mt("contentType",null,!0)),t.push(new mt("metadata","customMetadata",!0)),ul=t,ul}function a4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Dt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function l4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return a4(r,t),r}function VC(t,e,n){const r=jC(e);return r===null?null:l4(t,r,n)}function c4(t,e,n,r){const i=jC(e);if(i===null||!Hm(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=t.bucket,d=t.fullPath,f="/b/"+o(u)+"/o/"+o(d),p=Au(f,n,r),m=$C({alt:"media",token:c});return p+m})[0]}function u4(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Vm{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function GC(t){if(!t)throw jm()}function d4(t,e){function n(r,i){const s=VC(t,i,e);return GC(s!==null),s}return n}function f4(t,e){function n(r,i){const s=VC(t,i,e);return GC(s!==null),c4(s,i,t.host,t._protocol)}return n}function KC(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=bM():i=TM():n.getStatus()===402?i=SM(t.bucket):n.getStatus()===403?i=kM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function YC(t){const e=KC(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=CM(t.path)),s.serverResponse=i.serverResponse,s}return n}function h4(t,e,n){const r=e.fullServerUrl(),i=Au(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Vm(i,s,f4(t,n),o);return a.errorHandler=YC(e),a}function p4(t,e){const n=e.fullServerUrl(),r=Au(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new Vm(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=YC(e),a}function m4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function g4(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=m4(null,e)),r}function v4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let _="";for(let E=0;E<2;E++)_=_+Math.random().toString().slice(2);return _}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=g4(e,r,i),u=u4(c,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=mr.getBlob(d,r,f);if(p===null)throw PM();const m={name:c.fullPath},w=Au(s,t.host,t._protocol),C="POST",v=t.maxUploadRetryTime,y=new Vm(w,C,d4(t,n),v);return y.urlParams=m,y.headers=o,y.body=p.uploadData(),y.errorHandler=KC(e),y}class y4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ui.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ui.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ui.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw io("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw io("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw io("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw io("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw io("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class _4 extends y4{initXhr(){this.xhr_.responseType="text"}}function Gm(){return new _4}/**
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
 */class Ti{constructor(e,n){this._service=e,n instanceof Dt?this._location=n:this._location=Dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ti(e,n)}get root(){const e=new Dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return HC(this._location.path)}get storage(){return this._service}get parent(){const e=r4(this._location.path);if(e===null)return null;const n=new Dt(this._location.bucket,e);return new Ti(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw DM(e)}}function w4(t,e,n){t._throwIfRoot("uploadBytes");const r=v4(t.storage,t._location,WC(),new mr(e,!0),n);return t.storage.makeRequestWithTokens(r,Gm).then(i=>({metadata:i,ref:t}))}function E4(t){t._throwIfRoot("getDownloadURL");const e=h4(t.storage,t._location,WC());return t.storage.makeRequestWithTokens(e,Gm).then(n=>{if(n===null)throw AM();return n})}function C4(t){t._throwIfRoot("deleteObject");const e=p4(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Gm)}function S4(t,e){const n=i4(t._location.path,e),r=new Dt(t._location.bucket,n);return new Ti(t.storage,r)}/**
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
 */function T4(t){return/^[A-Za-z]+:\/\//.test(t)}function b4(t,e){return new Ti(t,e)}function qC(t,e){if(t instanceof Km){const n=t;if(n._bucket==null)throw OM();const r=new Ti(n,n._bucket);return e!=null?qC(r,e):r}else return e!==void 0?S4(t,e):t}function k4(t,e){if(e&&T4(e)){if(t instanceof Km)return b4(t,e);throw _h("To use ref(service, url), the first argument must be a Storage instance.")}else return qC(t,e)}function f_(t,e){const n=e==null?void 0:e[LC];return n==null?null:Dt.makeFromBucketSpec(n,t)}function I4(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Mw(i,t.app.options.projectId))}class Km{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=DC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wM,this._maxUploadRetryTime=EM,this._requests=new Set,i!=null?this._bucket=Dt.makeFromBucketSpec(i,this._host):this._bucket=f_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dt.makeFromBucketSpec(this._url,e):this._bucket=f_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){d_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){d_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ti(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new LM(FC());{const o=KM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const h_="@firebase/storage",p_="0.11.2";/**
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
 */const QC="storage";function N4(t,e,n){return t=Ye(t),w4(t,e,n)}function XC(t){return t=Ye(t),E4(t)}function x4(t){return t=Ye(t),C4(t)}function Ym(t,e){return t=Ye(t),k4(t,e)}function R4(t=Qp(),e){t=Ye(t);const r=vu(t,QC).getImmediate({identifier:e}),i=Ow("storage");return i&&O4(r,...i),r}function O4(t,e,n,r={}){I4(t,e,n,r)}function P4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Km(n,r,i,e,Oi)}function A4(){yi(new Lr(QC,P4,"PUBLIC").setMultipleInstances(!0)),_n(h_,p_,""),_n(h_,p_,"esm2017")}A4();const M4={apiKey:{}.API_KEY,authDomain:{}.AUTH_DOMAIN,databaseURL:{}.DATABASE_URL,projectId:{}.PROJECT_ID,storageBucket:{}.STORAGE_BUCKET,messagingSenderId:{}.MESSAGING_SENDER_ID,appId:{}.APP_ID},$a=zw(M4),Ge=gP($a),qm=R4();Pu($a);const Ld=t=>{const[e,n]=g.useState(),[r,i]=g.useState(null);return g.useEffect(()=>lP(Ve(Ge,t),s=>{n(s.val())},s=>{i(s)}),[t]),[e,r]},D4=(t,e)=>{Mi(Ve(Ge,"users/"+e),t)},JC=async(t,e)=>{let n=!0;for(const r of t){const i=t.indexOf(r),s=tt(Ve(Ge),`users/${r}`);try{await Cn(s,e[i])}catch(o){console.log(o),n=!1}}return n},L4=()=>eC(tt(Ve(Ge),"events")).key,F4=(t,e,n,r)=>{Mi(Ve(Ge,"events/"+e),t);const i=tt(Ve(Ge),`users/${r}`);Cn(i,n)},ZC=async t=>{let e=!1;try{await oP(Ve(Ge,"events/"+t)),e=!0}catch(n){console.log(n)}return e},wh=async(t,e,n,r)=>{const i=tt(Ve(Ge),`events/${n}`),s=tt(Ve(Ge),`users/${r}`);let o=!1;try{await Cn(i,t),await Cn(s,e),o=!0}catch(a){console.log(a)}return o},eS=async(t,e)=>{const n=tt(Ve(Ge),`events/${e}`);let r=!1;try{await Cn(n,t),r=!0}catch(i){console.log(i)}return r},es=()=>eC(tt(Ve(Ge),"messages")).key,$4=(t,e,n,r)=>{Mi(Ve(Ge,"messages/"+n),e);const i=tt(Ve(Ge),`users/${r}`);Cn(i,t)},tS=(t,e,n,r)=>{Mi(Ve(Ge,"messages/"+r),t);for(let i of n){let s=n.indexOf(i);const o=tt(Ve(Ge),`users/${i}`);Cn(o,e[s])}},Eh=(t,e,n,r,i,s)=>{try{Mi(Ve(Ge,"messages/"+r),t);const o=tt(Ve(Ge),`users/${i}`);Cn(o,e);const a=tt(Ve(Ge),`users/${s}`);Cn(a,n)}catch(o){console.log("Error in join event message"),console.log(o)}},dl=(t,e)=>{const n=tt(Ve(Ge),`users/${e}`);Cn(n,t)},Ch=async t=>{let e=`images/${t.name}`,n="",r=!1;const i=Ym(qm,e);try{await N4(i,t),n=await XC(i),console.log("File upload successful"),r=!0}catch(s){console.log("Error: "+s)}return[r,n]},nS=async t=>{let e=Ym(qm,t);try{let n=await x4(e);console.log(n)}catch(n){console.log(n)}},rS=async t=>{let e=`images/${t}`,n="";const r=Ym(qm,e);try{n=await XC(r)}catch(i){console.log(i)}return n},U4=()=>{xA(Pu($a),new xn)},z4=()=>lA(Pu($a)),iS=()=>{const[t,e]=g.useState();return g.useEffect(()=>aA(Pu($a),e),[]),t};var Sh={},B4={get exports(){return Sh},set exports(t){Sh=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(B4);const Q=Sh;function Th(){return Th=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Th.apply(this,arguments)}function sS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function m_(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function j4(t){var e=H4(t,"string");return typeof e=="symbol"?e:String(e)}function H4(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function oS(t,e,n){var r=g.useRef(t!==void 0),i=g.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,g.useCallback(function(c){for(var u=arguments.length,d=new Array(u>1?u-1:0),f=1;f<u;f++)d[f-1]=arguments[f];n&&n.apply(void 0,[c].concat(d)),o(c)},[n])]}function Qm(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[m_(r)],a=s[r],l=sS(s,[m_(r),r].map(j4)),c=e[r],u=oS(a,o,t[c]),d=u[0],f=u[1];return Th({},l,(i={},i[r]=d,i[c]=f,i))},t)}function bh(t,e){return bh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},bh(t,e)}function W4(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,bh(t,e)}const aS=["xxl","xl","lg","md","sm","xs"],lS="xs",Mu=g.createContext({prefixes:{},breakpoints:aS,minBreakpoint:lS});function se(t,e){const{prefixes:n}=g.useContext(Mu);return t||n[e]||e}function Xm(){const{breakpoints:t}=g.useContext(Mu);return t}function Jm(){const{minBreakpoint:t}=g.useContext(Mu);return t}function V4(){const{dir:t}=g.useContext(Mu);return t==="rtl"}function Du(t){return t&&t.ownerDocument||document}function G4(t){var e=Du(t);return e&&e.defaultView||window}function K4(t,e){return G4(t).getComputedStyle(t,e)}var Y4=/([A-Z])/g;function q4(t){return t.replace(Y4,"-$1").toLowerCase()}var Q4=/^ms-/;function fl(t){return q4(t).replace(Q4,"-ms-")}var X4=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function J4(t){return!!(t&&X4.test(t))}function Un(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(fl(e))||K4(t).getPropertyValue(fl(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(fl(i)):J4(i)?r+=i+"("+s+") ":n+=fl(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var U={},Z4={get exports(){return U},set exports(t){U=t}},eD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",tD=eD,nD=tD;function cS(){}function uS(){}uS.resetWarningCache=cS;var rD=function(){function t(r,i,s,o,a,l){if(l!==nD){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:uS,resetWarningCache:cS};return n.PropTypes=n,n};Z4.exports=rD();const g_={disabled:!1},dS=G.createContext(null);var iD=function(e){return e.scrollTop},fo="unmounted",cr="exited",tn="entering",Rn="entered",fa="exiting",Zn=function(t){W4(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=cr,s.appearStatus=tn):l=Rn:r.unmountOnExit||r.mountOnEnter?l=fo:l=cr,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===fo?{status:cr}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==tn&&o!==Rn&&(s=tn):(o===tn||o===Rn)&&(s=fa)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===tn){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Ji.findDOMNode(this);o&&iD(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===cr&&this.setState({status:fo})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[Ji.findDOMNode(this),a],c=l[0],u=l[1],d=this.getTimeouts(),f=a?d.appear:d.enter;if(!i&&!o||g_.disabled){this.safeSetState({status:Rn},function(){s.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:tn},function(){s.props.onEntering(c,u),s.onTransitionEnd(f,function(){s.safeSetState({status:Rn},function(){s.props.onEntered(c,u)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:Ji.findDOMNode(this);if(!s||g_.disabled){this.safeSetState({status:cr},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:fa},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:cr},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:Ji.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=l[0],u=l[1];this.props.addEndListener(c,u)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===fo)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=sS(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return G.createElement(dS.Provider,{value:null},typeof o=="function"?o(i,a):G.cloneElement(G.Children.only(o),a))},e}(G.Component);Zn.contextType=dS;Zn.propTypes={};function $i(){}Zn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:$i,onEntering:$i,onEntered:$i,onExit:$i,onExiting:$i,onExited:$i};Zn.UNMOUNTED=fo;Zn.EXITED=cr;Zn.ENTERING=tn;Zn.ENTERED=Rn;Zn.EXITING=fa;const Bs=!!(typeof window<"u"&&window.document&&window.document.createElement);var kh=!1,Ih=!1;try{var Fd={get passive(){return kh=!0},get once(){return Ih=kh=!0}};Bs&&(window.addEventListener("test",Fd,Fd),window.removeEventListener("test",Fd,!0))}catch{}function fS(t,e,n,r){if(r&&typeof r!="boolean"&&!Ih){var i=r.once,s=r.capture,o=n;!Ih&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,kh?r:s)}t.addEventListener(e,n,r)}function Nh(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function Bc(t,e,n,r){return fS(t,e,n,r),function(){Nh(t,e,n,r)}}function sD(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function oD(t){var e=Un(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function aD(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||sD(t,"transitionend",!0)},e+n),s=Bc(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function hS(t,e,n,r){n==null&&(n=oD(t)||0);var i=aD(t,n,r),s=Bc(t,"transitionend",e);return function(){i(),s()}}function v_(t,e){const n=Un(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function Zm(t,e){const n=v_(t,"transitionDuration"),r=v_(t,"transitionDelay"),i=hS(t,s=>{s.target===t&&(i(),e(s))},n+r)}function so(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...i){e.apply(this,i),n.apply(this,i)}},null)}function pS(t){t.offsetHeight}var y_=function(e){return!e||typeof e=="function"?e:function(n){e.current=n}};function lD(t,e){var n=y_(t),r=y_(e);return function(i){n&&n(i),r&&r(i)}}function eg(t,e){return g.useMemo(function(){return lD(t,e)},[t,e])}function cD(t){return t&&"setState"in t?Ji.findDOMNode(t):t??null}const uD=G.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...c},u)=>{const d=g.useRef(null),f=eg(d,l),p=T=>{f(cD(T))},m=T=>b=>{T&&d.current&&T(d.current,b)},w=g.useCallback(m(t),[t]),C=g.useCallback(m(e),[e]),v=g.useCallback(m(n),[n]),y=g.useCallback(m(r),[r]),_=g.useCallback(m(i),[i]),E=g.useCallback(m(s),[s]),S=g.useCallback(m(o),[o]);return h(Zn,{ref:u,...c,onEnter:w,onEntered:v,onEntering:C,onExit:y,onExited:E,onExiting:_,addEndListener:S,nodeRef:d,children:typeof a=="function"?(T,b)=>a(T,{...b,ref:p}):G.cloneElement(a,{ref:p})})}),tg=uD,dD={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function mS(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,r=e[n],i=dD[t];return r+parseInt(Un(e,i[0]),10)+parseInt(Un(e,i[1]),10)}const fD={[cr]:"collapse",[fa]:"collapsing",[tn]:"collapsing",[Rn]:"collapse show"},hD={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:mS},gS=G.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,className:s,children:o,dimension:a="height",getDimensionValue:l=mS,...c},u)=>{const d=typeof a=="function"?a():a,f=g.useMemo(()=>so(v=>{v.style[d]="0"},t),[d,t]),p=g.useMemo(()=>so(v=>{const y=`scroll${d[0].toUpperCase()}${d.slice(1)}`;v.style[d]=`${v[y]}px`},e),[d,e]),m=g.useMemo(()=>so(v=>{v.style[d]=null},n),[d,n]),w=g.useMemo(()=>so(v=>{v.style[d]=`${l(d,v)}px`,pS(v)},r),[r,l,d]),C=g.useMemo(()=>so(v=>{v.style[d]=null},i),[d,i]);return h(tg,{ref:u,addEndListener:Zm,...c,"aria-expanded":c.role?c.in:null,onEnter:f,onEntering:p,onEntered:m,onExit:w,onExiting:C,childRef:o.ref,children:(v,y)=>G.cloneElement(o,{...y,className:Q(s,o.props.className,fD[v],d==="width"&&"collapse-horizontal")})})});gS.defaultProps=hD;const pD=gS;function mD(t){var e=g.useRef(t);return g.useEffect(function(){e.current=t},[t]),e}function Wt(t){var e=mD(t);return g.useCallback(function(){return e.current&&e.current.apply(e,arguments)},[e])}function gD(){return g.useState(null)}function vD(){var t=g.useRef(!0),e=g.useRef(function(){return t.current});return g.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]),e.current}function yD(t){var e=g.useRef(null);return g.useEffect(function(){e.current=t}),e.current}var _D=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",wD=typeof document<"u";const ED=wD||_D?g.useLayoutEffect:g.useEffect,CD=["as","disabled"];function SD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function TD(t){return!t||t.trim()==="#"}function ng({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const c={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},c];const u=f=>{if((e||t==="a"&&TD(n))&&f.preventDefault(),e){f.stopPropagation();return}o==null||o(f)},d=f=>{f.key===" "&&(f.preventDefault(),u(f))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:u,onKeyDown:d},c]}const vS=g.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=SD(t,CD);const[s,{tagName:o}]=ng(Object.assign({tagName:n,disabled:r},i));return h(o,Object.assign({},i,s,{ref:e}))});vS.displayName="Button";const bD=["onKeyDown"];function kD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ID(t){return!t||t.trim()==="#"}const yS=g.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=kD(t,bD);const[i]=ng(Object.assign({tagName:"a"},r)),s=Wt(o=>{i.onKeyDown(o),n==null||n(o)});return ID(r.href)||r.role==="button"?h("a",Object.assign({ref:e},r,i,{onKeyDown:s})):h("a",Object.assign({ref:e},r,{onKeyDown:n}))});yS.displayName="Anchor";const ND={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},xD={[tn]:"show",[Rn]:"show"},rg=g.forwardRef(({className:t,children:e,transitionClasses:n={},...r},i)=>{const s=g.useCallback((o,a)=>{pS(o),r.onEnter==null||r.onEnter(o,a)},[r]);return h(tg,{ref:i,addEndListener:Zm,...r,onEnter:s,childRef:e.ref,children:(o,a)=>g.cloneElement(e,{...a,className:Q("fade",t,e.props.className,xD[o],n[o])})})});rg.defaultProps=ND;rg.displayName="Fade";const Ua=rg,RD={"aria-label":U.string,onClick:U.func,variant:U.oneOf(["white"])},OD={"aria-label":"Close"},Lu=g.forwardRef(({className:t,variant:e,...n},r)=>h("button",{ref:r,type:"button",className:Q("btn-close",e&&`btn-close-${e}`,t),...n}));Lu.displayName="CloseButton";Lu.propTypes=RD;Lu.defaultProps=OD;const PD=Lu,Fu=t=>g.forwardRef((e,n)=>h("div",{...e,ref:n,className:Q(e.className,t)}));var AD=/-(.)/g;function MD(t){return t.replace(AD,function(e,n){return n.toUpperCase()})}const DD=t=>t[0].toUpperCase()+MD(t).slice(1);function pt(t,{displayName:e=DD(t),Component:n,defaultProps:r}={}){const i=g.forwardRef(({className:s,bsPrefix:o,as:a=n||"div",...l},c)=>{const u=se(o,t);return h(a,{ref:c,className:Q(s,u),...l})});return i.defaultProps=r,i.displayName=e,i}const LD={variant:"primary",active:!1,disabled:!1},ig=g.forwardRef(({as:t,bsPrefix:e,variant:n,size:r,active:i,className:s,...o},a)=>{const l=se(e,"btn"),[c,{tagName:u}]=ng({tagName:t,...o});return h(u,{...c,...o,ref:a,className:Q(s,l,i&&"active",n&&`${l}-${n}`,r&&`${l}-${r}`,o.href&&o.disabled&&"disabled")})});ig.displayName="Button";ig.defaultProps=LD;const yt=ig,_S=g.forwardRef(({bsPrefix:t,className:e,variant:n,as:r="img",...i},s)=>{const o=se(t,"card-img");return h(r,{ref:s,className:Q(n?`${o}-${n}`:o,e),...i})});_S.displayName="CardImg";const FD=_S,wS=g.createContext(null);wS.displayName="CardHeaderContext";const ES=wS,CS=g.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=se(t,"card-header"),o=g.useMemo(()=>({cardHeaderBsPrefix:s}),[s]);return h(ES.Provider,{value:o,children:h(n,{ref:i,...r,className:Q(e,s)})})});CS.displayName="CardHeader";const $D=CS,UD=Fu("h5"),zD=Fu("h6"),SS=pt("card-body"),BD=pt("card-title",{Component:UD}),jD=pt("card-subtitle",{Component:zD}),HD=pt("card-link",{Component:"a"}),WD=pt("card-text",{Component:"p"}),VD=pt("card-footer"),GD=pt("card-img-overlay"),KD={body:!1},sg=g.forwardRef(({bsPrefix:t,className:e,bg:n,text:r,border:i,body:s,children:o,as:a="div",...l},c)=>{const u=se(t,"card");return h(a,{ref:c,...l,className:Q(e,u,n&&`bg-${n}`,r&&`text-${r}`,i&&`border-${i}`),children:s?h(SS,{children:o}):o})});sg.displayName="Card";sg.defaultProps=KD;const jc=Object.assign(sg,{Img:FD,Title:BD,Subtitle:jD,Body:SS,Link:HD,Text:WD,Header:$D,Footer:VD,ImgOverlay:GD});function YD(t){var e=g.useRef(t);return e.current=t,e}function TS(t){var e=YD(t);g.useEffect(function(){return function(){return e.current()}},[])}function __(t,e){let n=0;return g.Children.map(t,r=>g.isValidElement(r)?e(r,n++):r)}function qD(t,e){let n=0;g.Children.forEach(t,r=>{g.isValidElement(r)&&e(r,n++)})}function QD(t,e){return g.Children.toArray(t).some(n=>g.isValidElement(n)&&n.type===e)}function XD({as:t,bsPrefix:e,className:n,...r}){e=se(e,"col");const i=Xm(),s=Jm(),o=[],a=[];return i.forEach(l=>{const c=r[l];delete r[l];let u,d,f;typeof c=="object"&&c!=null?{span:u,offset:d,order:f}=c:u=c;const p=l!==s?`-${l}`:"";u&&o.push(u===!0?`${e}${p}`:`${e}${p}-${u}`),f!=null&&a.push(`order${p}-${f}`),d!=null&&a.push(`offset${p}-${d}`)}),[{...r,className:Q(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const bS=g.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=XD(t);return h(i,{...r,ref:e,className:Q(n,!o.length&&s)})});bS.displayName="Col";const Xt=bS;var JD=Function.prototype.bind.call(Function.prototype.call,[].slice);function Qr(t,e){return JD(t.querySelectorAll(e))}function ZD(){var t=g.useReducer(function(n){return!n},!1),e=t[1];return e}function w_(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}const kS={prefix:String(Math.round(Math.random()*1e10)),current:0},eL=G.createContext(kS);let tL=Boolean(typeof window<"u"&&window.document&&window.document.createElement);function nL(t){let e=g.useContext(eL);return e===kS&&!tL&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),g.useMemo(()=>t||`react-aria${e.prefix}-${++e.current}`,[t])}const bi=g.createContext(null),ha=(t,e=null)=>t!=null?String(t):e||null,og=g.createContext(null);og.displayName="NavContext";const rL="data-rr-ui-",iL="rrUi";function $u(t){return`${rL}${t}`}function sL(t){return`${iL}${t}`}const IS=g.createContext(Bs?window:void 0);IS.Provider;function NS(){return g.useContext(IS)}const xS=g.createContext(null);xS.displayName="NavbarContext";const js=xS,oL={type:U.string,tooltip:U.bool,as:U.elementType},ag=g.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>h(t,{...i,ref:s,className:Q(e,`${n}-${r?"tooltip":"feedback"}`)}));ag.displayName="Feedback";ag.propTypes=oL;const RS=ag,aL=g.createContext({}),Gn=aL,OS=g.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...a},l)=>{const{controlId:c}=g.useContext(Gn);return e=se(e,"form-check-input"),h(o,{...a,ref:l,type:r,id:t||c,className:Q(n,e,i&&"is-valid",s&&"is-invalid")})});OS.displayName="FormCheckInput";const PS=OS,AS=g.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=g.useContext(Gn);return t=se(t,"form-check-label"),h("label",{...r,ref:i,htmlFor:n||s,className:Q(e,t)})});AS.displayName="FormCheckLabel";const xh=AS,MS=g.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:l=!1,feedback:c,feedbackType:u,className:d,style:f,title:p="",type:m="checkbox",label:w,children:C,as:v="input",...y},_)=>{e=se(e,"form-check"),n=se(n,"form-switch");const{controlId:E}=g.useContext(Gn),S=g.useMemo(()=>({controlId:t||E}),[E,t]),T=!C&&w!=null&&w!==!1||QD(C,xh),b=h(PS,{...y,type:m==="switch"?"checkbox":m,ref:_,isValid:o,isInvalid:a,disabled:s,as:v});return h(Gn.Provider,{value:S,children:h("div",{style:f,className:Q(d,T&&e,r&&`${e}-inline`,i&&`${e}-reverse`,m==="switch"&&n),children:C||N(Fo,{children:[b,T&&h(xh,{title:p,children:w}),c&&h(RS,{type:u,tooltip:l,children:c})]})})})});MS.displayName="FormCheck";const Hc=Object.assign(MS,{Input:PS,Label:xh}),DS=g.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:l,readOnly:c,as:u="input",...d},f)=>{const{controlId:p}=g.useContext(Gn);t=se(t,"form-control");let m;return l?m={[`${t}-plaintext`]:!0}:m={[t]:!0,[`${t}-${n}`]:n},h(u,{...d,type:e,size:r,ref:f,readOnly:c,id:i||p,className:Q(s,m,o&&"is-valid",a&&"is-invalid",e==="color"&&`${t}-color`)})});DS.displayName="FormControl";const lL=Object.assign(DS,{Feedback:RS}),cL=pt("form-floating"),LS=g.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=g.useMemo(()=>({controlId:t}),[t]);return h(Gn.Provider,{value:i,children:h(e,{...n,ref:r})})});LS.displayName="FormGroup";const FS=LS,uL={column:!1,visuallyHidden:!1},lg=g.forwardRef(({as:t="label",bsPrefix:e,column:n,visuallyHidden:r,className:i,htmlFor:s,...o},a)=>{const{controlId:l}=g.useContext(Gn);e=se(e,"form-label");let c="col-form-label";typeof n=="string"&&(c=`${c} ${c}-${n}`);const u=Q(i,e,r&&"visually-hidden",n&&c);return s=s||l,n?h(Xt,{ref:a,as:"label",className:u,htmlFor:s,...o}):h(t,{ref:a,className:u,htmlFor:s,...o})});lg.displayName="FormLabel";lg.defaultProps=uL;const dL=lg,$S=g.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=g.useContext(Gn);return t=se(t,"form-range"),h("input",{...r,type:"range",ref:i,className:Q(e,t),id:n||s})});$S.displayName="FormRange";const fL=$S,US=g.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...a},l)=>{const{controlId:c}=g.useContext(Gn);return t=se(t,"form-select"),h("select",{...a,size:n,ref:l,className:Q(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||c})});US.displayName="FormSelect";const hL=US,zS=g.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=se(t,"form-text"),h(n,{...i,ref:s,className:Q(e,t,r&&"text-muted")})));zS.displayName="FormText";const pL=zS,BS=g.forwardRef((t,e)=>h(Hc,{...t,ref:e,type:"switch"}));BS.displayName="Switch";const mL=Object.assign(BS,{Input:Hc.Input,Label:Hc.Label}),jS=g.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=se(t,"form-floating"),N(FS,{ref:o,className:Q(e,t),controlId:r,...s,children:[n,h("label",{htmlFor:r,children:i})]})));jS.displayName="FloatingLabel";const gL=jS,vL={_ref:U.any,validated:U.bool,as:U.elementType},cg=g.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>h(n,{...r,ref:i,className:Q(t,e&&"was-validated")}));cg.displayName="Form";cg.propTypes=vL;const A=Object.assign(cg,{Group:FS,Control:lL,Floating:cL,Check:Hc,Switch:mL,Label:dL,Text:pL,Range:fL,Select:hL,FloatingLabel:gL}),yL={fluid:!1},ug=g.forwardRef(({bsPrefix:t,fluid:e,as:n="div",className:r,...i},s)=>{const o=se(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return h(n,{ref:s,...i,className:Q(r,e?`${o}${a}`:o)})});ug.displayName="Container";ug.defaultProps=yL;const _L=ug;U.string,U.bool,U.bool,U.bool,U.bool;const wL={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},dg=g.forwardRef(({bsPrefix:t,className:e,fluid:n,rounded:r,roundedCircle:i,thumbnail:s,...o},a)=>(t=se(t,"img"),h("img",{ref:a,...o,className:Q(e,n&&`${t}-fluid`,r&&"rounded",i&&"rounded-circle",s&&`${t}-thumbnail`)})));dg.displayName="Image";dg.defaultProps=wL;const Hs=g.createContext(null),EL=["as","active","eventKey"];function CL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function HS({key:t,onClick:e,active:n,id:r,role:i,disabled:s}){const o=g.useContext(bi),a=g.useContext(og),l=g.useContext(Hs);let c=n;const u={role:i};if(a){!i&&a.role==="tablist"&&(u.role="tab");const d=a.getControllerId(t??null),f=a.getControlledId(t??null);u[$u("event-key")]=t,u.id=d||r,c=n==null&&t!=null?a.activeKey===t:n,(c||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(u["aria-controls"]=f)}return u.role==="tab"&&(u["aria-selected"]=c,c||(u.tabIndex=-1),s&&(u.tabIndex=-1,u["aria-disabled"]=!0)),u.onClick=Wt(d=>{s||(e==null||e(d),t!=null&&o&&!d.isPropagationStopped()&&o(t,d))}),[u,{isActive:c}]}const WS=g.forwardRef((t,e)=>{let{as:n=vS,active:r,eventKey:i}=t,s=CL(t,EL);const[o,a]=HS(Object.assign({key:ha(i,s.href),active:r},s));return o[$u("active")]=a.isActive,h(n,Object.assign({},s,o,{ref:e}))});WS.displayName="NavItem";const SL=["as","onSelect","activeKey","role","onKeyDown"];function TL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const E_=()=>{},C_=$u("event-key"),VS=g.forwardRef((t,e)=>{let{as:n="div",onSelect:r,activeKey:i,role:s,onKeyDown:o}=t,a=TL(t,SL);const l=ZD(),c=g.useRef(!1),u=g.useContext(bi),d=g.useContext(Hs);let f,p;d&&(s=s||"tablist",i=d.activeKey,f=d.getControlledId,p=d.getControllerId);const m=g.useRef(null),w=_=>{const E=m.current;if(!E)return null;const S=Qr(E,`[${C_}]:not([aria-disabled=true])`),T=E.querySelector("[aria-selected=true]");if(!T||T!==document.activeElement)return null;const b=S.indexOf(T);if(b===-1)return null;let k=b+_;return k>=S.length&&(k=0),k<0&&(k=S.length-1),S[k]},C=(_,E)=>{_!=null&&(r==null||r(_,E),u==null||u(_,E))},v=_=>{if(o==null||o(_),!d)return;let E;switch(_.key){case"ArrowLeft":case"ArrowUp":E=w(-1);break;case"ArrowRight":case"ArrowDown":E=w(1);break;default:return}E&&(_.preventDefault(),C(E.dataset[sL("EventKey")]||null,_),c.current=!0,l())};g.useEffect(()=>{if(m.current&&c.current){const _=m.current.querySelector(`[${C_}][aria-selected=true]`);_==null||_.focus()}c.current=!1});const y=eg(e,m);return h(bi.Provider,{value:C,children:h(og.Provider,{value:{role:s,activeKey:ha(i),getControlledId:f||E_,getControllerId:p||E_},children:h(n,Object.assign({},a,{onKeyDown:v,ref:y,role:s}))})})});VS.displayName="Nav";const bL=Object.assign(VS,{Item:WS});var hl;function S_(t){if((!hl&&hl!==0||t)&&Bs){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),hl=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return hl}function $d(t){t===void 0&&(t=Du());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function kL(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const T_=$u("modal-open");class fg{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return kL(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(Un(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(T_,""),Un(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(T_),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const Ud=(t,e)=>Bs?t==null?(e||Du()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function IL(t,e){const n=NS(),[r,i]=g.useState(()=>Ud(t,n==null?void 0:n.document));if(!r){const s=Ud(t);s&&i(s)}return g.useEffect(()=>{e&&r&&e(r)},[e,r]),g.useEffect(()=>{const s=Ud(t);s!==r&&i(s)},[t,r]),r}const NL=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function xL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let zd;function RL(t){return zd||(zd=new fg({ownerDocument:t==null?void 0:t.document})),zd}function OL(t){const e=NS(),n=t||RL(e),r=g.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:g.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:g.useCallback(i=>{r.current.backdrop=i},[])})}const GS=g.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:c,onEscapeKeyDown:u,transition:d,backdropTransition:f,autoFocus:p=!0,enforceFocus:m=!0,restoreFocus:w=!0,restoreFocusOptions:C,renderDialog:v,renderBackdrop:y=ue=>h("div",Object.assign({},ue)),manager:_,container:E,onShow:S,onHide:T=()=>{},onExit:b,onExited:k,onExiting:D,onEnter:M,onEntering:H,onEntered:Y}=t,te=xL(t,NL);const J=IL(E),X=OL(_),le=vD(),B=yD(n),[I,P]=g.useState(!n),O=g.useRef(null);g.useImperativeHandle(e,()=>X,[X]),Bs&&!B&&n&&(O.current=$d()),!d&&!n&&!I?P(!0):n&&I&&P(!1);const W=Wt(()=>{if(X.add(),St.current=Bc(document,"keydown",me),Re.current=Bc(document,"focus",()=>setTimeout(ke),!0),S&&S(),p){const ue=$d(document);X.dialog&&ue&&!w_(X.dialog,ue)&&(O.current=ue,X.dialog.focus())}}),V=Wt(()=>{if(X.remove(),St.current==null||St.current(),Re.current==null||Re.current(),w){var ue;(ue=O.current)==null||ue.focus==null||ue.focus(C),O.current=null}});g.useEffect(()=>{!n||!J||W()},[n,J,W]),g.useEffect(()=>{I&&V()},[I,V]),TS(()=>{V()});const ke=Wt(()=>{if(!m||!le()||!X.isTopModal())return;const ue=$d();X.dialog&&ue&&!w_(X.dialog,ue)&&X.dialog.focus()}),Se=Wt(ue=>{ue.target===ue.currentTarget&&(c==null||c(ue),a===!0&&T())}),me=Wt(ue=>{l&&ue.keyCode===27&&X.isTopModal()&&(u==null||u(ue),ue.defaultPrevented||T())}),Re=g.useRef(),St=g.useRef(),bn=(...ue)=>{P(!0),k==null||k(...ue)},tr=d;if(!J||!(n||tr&&!I))return null;const Vr=Object.assign({role:r,ref:X.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},te,{style:s,className:i,tabIndex:-1});let kn=v?v(Vr):h("div",Object.assign({},Vr,{children:g.cloneElement(o,{role:"document"})}));tr&&(kn=h(tr,{appear:!0,unmountOnExit:!0,in:!!n,onExit:b,onExiting:D,onExited:bn,onEnter:M,onEntering:H,onEntered:Y,children:kn}));let nr=null;if(a){const ue=f;nr=y({ref:X.setBackdropRef,onClick:Se}),ue&&(nr=h(ue,{appear:!0,in:!!n,children:nr}))}return h(Fo,{children:Ji.createPortal(N(Fo,{children:[nr,kn]}),J)})});GS.displayName="Modal";const KS=Object.assign(GS,{Manager:fg});function PL(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function AL(t,e){t.classList?t.classList.add(e):PL(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function b_(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function ML(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=b_(t.className,e):t.setAttribute("class",b_(t.className&&t.className.baseVal||"",e))}const Ui={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class YS extends fg{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,Un(n,{[e]:`${parseFloat(Un(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],Un(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(AL(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Qr(n,Ui.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),Qr(n,Ui.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),Qr(n,Ui.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();ML(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Qr(n,Ui.FIXED_CONTENT).forEach(s=>this.restore(r,s)),Qr(n,Ui.STICKY_CONTENT).forEach(s=>this.restore(i,s)),Qr(n,Ui.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let Bd;function qS(t){return Bd||(Bd=new YS(t)),Bd}const DL=pt("modal-body"),hg=g.createContext({onHide(){}}),QS=g.forwardRef(({bsPrefix:t,className:e,contentClassName:n,centered:r,size:i,fullscreen:s,children:o,scrollable:a,...l},c)=>{t=se(t,"modal");const u=`${t}-dialog`,d=typeof s=="string"?`${t}-fullscreen-${s}`:`${t}-fullscreen`;return h("div",{...l,ref:c,className:Q(u,e,i&&`${t}-${i}`,r&&`${u}-centered`,a&&`${u}-scrollable`,s&&d),children:h("div",{className:Q(`${t}-content`,n),children:o})})});QS.displayName="ModalDialog";const XS=QS,LL=pt("modal-footer"),FL={closeLabel:"Close",closeButton:!1},pg=g.forwardRef(({closeLabel:t,closeVariant:e,closeButton:n,onHide:r,children:i,...s},o)=>{const a=g.useContext(hg),l=Wt(()=>{a==null||a.onHide(),r==null||r()});return N("div",{ref:o,...s,children:[i,n&&h(PD,{"aria-label":t,variant:e,onClick:l})]})});pg.defaultProps=FL;const $L={closeLabel:"Close",closeButton:!1},mg=g.forwardRef(({bsPrefix:t,className:e,...n},r)=>(t=se(t,"modal-header"),h(pg,{ref:r,...n,className:Q(e,t)})));mg.displayName="ModalHeader";mg.defaultProps=$L;const UL=mg,zL=Fu("h4"),BL=pt("modal-title",{Component:zL}),jL={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:XS};function HL(t){return h(Ua,{...t,timeout:null})}function WL(t){return h(Ua,{...t,timeout:null})}const gg=g.forwardRef(({bsPrefix:t,className:e,style:n,dialogClassName:r,contentClassName:i,children:s,dialogAs:o,"aria-labelledby":a,"aria-describedby":l,"aria-label":c,show:u,animation:d,backdrop:f,keyboard:p,onEscapeKeyDown:m,onShow:w,onHide:C,container:v,autoFocus:y,enforceFocus:_,restoreFocus:E,restoreFocusOptions:S,onEntered:T,onExit:b,onExiting:k,onEnter:D,onEntering:M,onExited:H,backdropClassName:Y,manager:te,...J},X)=>{const[le,B]=g.useState({}),[I,P]=g.useState(!1),O=g.useRef(!1),W=g.useRef(!1),V=g.useRef(null),[ke,Se]=gD(),me=eg(X,Se),Re=Wt(C),St=V4();t=se(t,"modal");const bn=g.useMemo(()=>({onHide:Re}),[Re]);function tr(){return te||qS({isRTL:St})}function Vr(re){if(!Bs)return;const Di=tr().getScrollbarWidth()>0,zg=re.scrollHeight>Du(re).documentElement.clientHeight;B({paddingRight:Di&&!zg?S_():void 0,paddingLeft:!Di&&zg?S_():void 0})}const kn=Wt(()=>{ke&&Vr(ke.dialog)});TS(()=>{Nh(window,"resize",kn),V.current==null||V.current()});const nr=()=>{O.current=!0},ue=re=>{O.current&&ke&&re.target===ke.dialog&&(W.current=!0),O.current=!1},F=()=>{P(!0),V.current=hS(ke.dialog,()=>{P(!1)})},pe=re=>{re.target===re.currentTarget&&F()},Oe=re=>{if(f==="static"){pe(re);return}if(W.current||re.target!==re.currentTarget){W.current=!1;return}C==null||C()},Be=re=>{p?m==null||m(re):(re.preventDefault(),f==="static"&&F())},Te=(re,Di)=>{re&&Vr(re),D==null||D(re,Di)},Pe=re=>{V.current==null||V.current(),b==null||b(re)},at=(re,Di)=>{M==null||M(re,Di),fS(window,"resize",kn)},lt=re=>{re&&(re.style.display=""),H==null||H(re),Nh(window,"resize",kn)},Pt=g.useCallback(re=>h("div",{...re,className:Q(`${t}-backdrop`,Y,!d&&"show")}),[d,Y,t]),rr={...n,...le};rr.display="block";const Vs=re=>h("div",{role:"dialog",...re,style:rr,className:Q(e,t,I&&`${t}-static`,!d&&"show"),onClick:f?Oe:void 0,onMouseUp:ue,"aria-label":c,"aria-labelledby":a,"aria-describedby":l,children:h(o,{...J,onMouseDown:nr,className:r,contentClassName:i,children:s})});return h(hg.Provider,{value:bn,children:h(KS,{show:u,ref:me,backdrop:f,container:v,keyboard:!0,autoFocus:y,enforceFocus:_,restoreFocus:E,restoreFocusOptions:S,onEscapeKeyDown:Be,onShow:w,onHide:C,onEnter:Te,onEntering:at,onEntered:T,onExit:Pe,onExiting:k,onExited:lt,manager:tr(),transition:d?HL:void 0,backdropTransition:d?WL:void 0,renderBackdrop:Pt,renderDialog:Vs})})});gg.displayName="Modal";gg.defaultProps=jL;const ae=Object.assign(gg,{Body:DL,Header:UL,Title:BL,Footer:LL,Dialog:XS,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});var Rh={},VL={get exports(){return Rh},set exports(t){Rh=t}},Wc={},GL={get exports(){return Wc},set exports(t){Wc=t}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){function i(o,a,l,c,u,d){var f=c||"<<anonymous>>",p=d||l;if(a[l]==null)return o?new Error("Required "+u+" `"+p+"` was not specified "+("in `"+f+"`.")):null;for(var m=arguments.length,w=Array(m>6?m-6:0),C=6;C<m;C++)w[C-6]=arguments[C];return r.apply(void 0,[a,l,f,u,p].concat(w))}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}t.exports=e.default})(GL,Wc);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=Wc,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}function s(){for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];function c(){for(var u=arguments.length,d=Array(u),f=0;f<u;f++)d[f]=arguments[f];var p=null;return a.forEach(function(m){if(p==null){var w=m.apply(void 0,d);w!=null&&(p=w)}}),p}return(0,r.default)(c)}t.exports=e.default})(VL,Rh);const JS=pt("nav-item"),KL={disabled:!1},vg=g.forwardRef(({bsPrefix:t,className:e,as:n=yS,active:r,eventKey:i,...s},o)=>{t=se(t,"nav-link");const[a,l]=HS({key:ha(i,s.href),active:r,...s});return h(n,{...s,...a,ref:o,className:Q(e,t,s.disabled&&"disabled",l.isActive&&"active")})});vg.displayName="NavLink";vg.defaultProps=KL;const ZS=vg,YL={justify:!1,fill:!1},yg=g.forwardRef((t,e)=>{const{as:n="div",bsPrefix:r,variant:i,fill:s,justify:o,navbar:a,navbarScroll:l,className:c,activeKey:u,...d}=Qm(t,{activeKey:"onSelect"}),f=se(r,"nav");let p,m,w=!1;const C=g.useContext(js),v=g.useContext(ES);return C?(p=C.bsPrefix,w=a??!0):v&&({cardHeaderBsPrefix:m}=v),h(bL,{as:n,ref:e,activeKey:u,className:Q(c,{[f]:!w,[`${p}-nav`]:w,[`${p}-nav-scroll`]:w&&l,[`${m}-${i}`]:!!m,[`${f}-${i}`]:!!i,[`${f}-fill`]:s,[`${f}-justified`]:o}),...d})});yg.displayName="Nav";yg.defaultProps=YL;const ho=Object.assign(yg,{Item:JS,Link:ZS}),eT=g.forwardRef(({bsPrefix:t,className:e,as:n,...r},i)=>{t=se(t,"navbar-brand");const s=n||(r.href?"a":"span");return h(s,{...r,ref:i,className:Q(e,t)})});eT.displayName="NavbarBrand";const qL=eT,tT=g.forwardRef(({children:t,bsPrefix:e,...n},r)=>{e=se(e,"navbar-collapse");const i=g.useContext(js);return h(pD,{in:!!(i&&i.expanded),...n,children:h("div",{ref:r,className:e,children:t})})});tT.displayName="NavbarCollapse";const QL=tT,XL={label:"Toggle navigation"},_g=g.forwardRef(({bsPrefix:t,className:e,children:n,label:r,as:i="button",onClick:s,...o},a)=>{t=se(t,"navbar-toggler");const{onToggle:l,expanded:c}=g.useContext(js)||{},u=Wt(d=>{s&&s(d),l&&l()});return i==="button"&&(o.type="button"),h(i,{...o,ref:a,onClick:u,"aria-label":r,className:Q(e,t,!c&&"collapsed"),children:n||h("span",{className:`${t}-icon`})})});_g.displayName="NavbarToggle";_g.defaultProps=XL;const JL=_g;var Oh=new WeakMap,k_=function(e,n){if(!(!e||!n)){var r=Oh.get(n)||new Map;Oh.set(n,r);var i=r.get(e);return i||(i=n.matchMedia(e),i.refCount=0,r.set(i.media,i)),i}};function ZL(t,e){e===void 0&&(e=typeof window>"u"?void 0:window);var n=k_(t,e),r=g.useState(function(){return n?n.matches:!1}),i=r[0],s=r[1];return ED(function(){var o=k_(t,e);if(!o)return s(!1);var a=Oh.get(e),l=function(){s(o.matches)};return o.refCount++,o.addListener(l),l(),function(){o.removeListener(l),o.refCount--,o.refCount<=0&&(a==null||a.delete(o.media)),o=void 0}},[t]),i}function e3(t){var e=Object.keys(t);function n(a,l){return a===l?l:a?a+" and "+l:l}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){var l=r(a),c=t[l];return typeof c=="number"?c=c-.2+"px":c="calc("+c+" - 0.2px)","(max-width: "+c+")"}function s(a){var l=t[a];return typeof l=="number"&&(l=l+"px"),"(min-width: "+l+")"}function o(a,l,c){var u;if(typeof a=="object")u=a,c=l,l=!0;else{var d;l=l||!0,u=(d={},d[a]=l,d)}var f=g.useMemo(function(){return Object.entries(u).reduce(function(p,m){var w=m[0],C=m[1];return(C==="up"||C===!0)&&(p=n(p,s(w))),(C==="down"||C===!0)&&(p=n(p,i(w))),p},"")},[JSON.stringify(u)]);return ZL(f,c)}return o}var t3=e3({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});const n3=pt("offcanvas-body"),r3={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},i3={[tn]:"show",[Rn]:"show"},wg=g.forwardRef(({bsPrefix:t,className:e,children:n,...r},i)=>(t=se(t,"offcanvas"),h(tg,{ref:i,addEndListener:Zm,...r,childRef:n.ref,children:(s,o)=>g.cloneElement(n,{...o,className:Q(e,n.props.className,(s===tn||s===fa)&&`${t}-toggling`,i3[s])})})));wg.defaultProps=r3;wg.displayName="OffcanvasToggling";const s3=wg,o3={closeLabel:"Close",closeButton:!1},Eg=g.forwardRef(({bsPrefix:t,className:e,...n},r)=>(t=se(t,"offcanvas-header"),h(pg,{ref:r,...n,className:Q(e,t)})));Eg.displayName="OffcanvasHeader";Eg.defaultProps=o3;const a3=Eg,l3=Fu("h5"),c3=pt("offcanvas-title",{Component:l3}),u3={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};function d3(t){return h(s3,{...t})}function f3(t){return h(Ua,{...t})}const Cg=g.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i,responsive:s,show:o,backdrop:a,keyboard:l,scroll:c,onEscapeKeyDown:u,onShow:d,onHide:f,container:p,autoFocus:m,enforceFocus:w,restoreFocus:C,restoreFocusOptions:v,onEntered:y,onExit:_,onExiting:E,onEnter:S,onEntering:T,onExited:b,backdropClassName:k,manager:D,renderStaticNode:M,...H},Y)=>{const te=g.useRef();t=se(t,"offcanvas");const{onToggle:J}=g.useContext(js)||{},[X,le]=g.useState(!1),B=t3(s||"xs","up");g.useEffect(()=>{le(s?o&&!B:o)},[o,s,B]);const I=Wt(()=>{J==null||J(),f==null||f()}),P=g.useMemo(()=>({onHide:I}),[I]);function O(){return D||(c?(te.current||(te.current=new YS({handleContainerOverflow:!1})),te.current):qS())}const W=(me,...Re)=>{me&&(me.style.visibility="visible"),S==null||S(me,...Re)},V=(me,...Re)=>{me&&(me.style.visibility=""),b==null||b(...Re)},ke=g.useCallback(me=>h("div",{...me,className:Q(`${t}-backdrop`,k)}),[k,t]),Se=me=>h("div",{...me,...H,className:Q(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return N(Fo,{children:[!X&&(s||M)&&Se({}),h(hg.Provider,{value:P,children:h(KS,{show:X,ref:Y,backdrop:a,container:p,keyboard:l,autoFocus:m,enforceFocus:w&&!c,restoreFocus:C,restoreFocusOptions:v,onEscapeKeyDown:u,onShow:d,onHide:I,onEnter:W,onEntering:T,onEntered:y,onExit:_,onExiting:E,onExited:V,manager:O(),transition:d3,backdropTransition:f3,renderBackdrop:ke,renderDialog:Se})})]})});Cg.displayName="Offcanvas";Cg.defaultProps=u3;const jl=Object.assign(Cg,{Body:n3,Header:a3,Title:c3}),nT=g.forwardRef((t,e)=>{const n=g.useContext(js);return h(jl,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});nT.displayName="NavbarOffcanvas";const h3=nT,p3=pt("navbar-text",{Component:"span"}),m3={expand:!0,variant:"light",collapseOnSelect:!1},Sg=g.forwardRef((t,e)=>{const{bsPrefix:n,expand:r,variant:i,bg:s,fixed:o,sticky:a,className:l,as:c="nav",expanded:u,onToggle:d,onSelect:f,collapseOnSelect:p,...m}=Qm(t,{expanded:"onToggle"}),w=se(n,"navbar"),C=g.useCallback((..._)=>{f==null||f(..._),p&&u&&(d==null||d(!1))},[f,p,u,d]);m.role===void 0&&c!=="nav"&&(m.role="navigation");let v=`${w}-expand`;typeof r=="string"&&(v=`${v}-${r}`);const y=g.useMemo(()=>({onToggle:()=>d==null?void 0:d(!u),bsPrefix:w,expanded:!!u,expand:r}),[w,u,r,d]);return h(js.Provider,{value:y,children:h(bi.Provider,{value:C,children:h(c,{ref:e,...m,className:Q(l,w,r&&v,i&&`${w}-${i}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});Sg.defaultProps=m3;Sg.displayName="Navbar";const pl=Object.assign(Sg,{Brand:qL,Collapse:QL,Offcanvas:h3,Text:p3,Toggle:JL}),rT=g.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=se(t,"row"),o=Xm(),a=Jm(),l=`${s}-cols`,c=[];return o.forEach(u=>{const d=r[u];delete r[u];let f;d!=null&&typeof d=="object"?{cols:f}=d:f=d;const p=u!==a?`-${u}`:"";f!=null&&c.push(`${l}${p}-${f}`)}),h(n,{ref:i,...r,className:Q(e,s,...c)})});rT.displayName="Row";const po=rT,iT=g.forwardRef(({bsPrefix:t,variant:e,animation:n="border",size:r,as:i="div",className:s,...o},a)=>{t=se(t,"spinner");const l=`${t}-${n}`;return h(i,{ref:a,...o,className:Q(s,l,r&&`${l}-${r}`,e&&`text-${e}`)})});iT.displayName="Spinner";const sT=iT;function g3(t,e=aS,n=lS){const r=[];return Object.entries(t).forEach(([i,s])=>{s!=null&&(typeof s=="object"?e.forEach(o=>{const a=s[o];if(a!=null){const l=o!==n?`-${o}`:"";r.push(`${i}${l}-${a}`)}}):r.push(`${i}-${s}`))}),r}const oT=g.forwardRef(({as:t="div",bsPrefix:e,className:n,direction:r,gap:i,...s},o)=>{e=se(e,r==="horizontal"?"hstack":"vstack");const a=Xm(),l=Jm();return h(t,{...s,ref:o,className:Q(n,e,...g3({gap:i,breakpoints:a,minBreakpoint:l}))})});oT.displayName="Stack";const I_=oT;function aT({children:t,in:e,mountOnEnter:n,unmountOnExit:r}){const i=g.useRef(e);return g.useEffect(()=>{e&&(i.current=!0)},[e]),e?t:r||!i.current&&n?null:t}const v3=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],y3=["activeKey","getControlledId","getControllerId"],_3=["as"];function Ph(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function lT(t){let{active:e,eventKey:n,mountOnEnter:r,transition:i,unmountOnExit:s,role:o="tabpanel",onEnter:a,onEntering:l,onEntered:c,onExit:u,onExiting:d,onExited:f}=t,p=Ph(t,v3);const m=g.useContext(Hs);if(!m)return[Object.assign({},p,{role:o}),{eventKey:n,isActive:e,mountOnEnter:r,transition:i,unmountOnExit:s,onEnter:a,onEntering:l,onEntered:c,onExit:u,onExiting:d,onExited:f}];const{activeKey:w,getControlledId:C,getControllerId:v}=m,y=Ph(m,y3),_=ha(n);return[Object.assign({},p,{role:o,id:C(n),"aria-labelledby":v(n)}),{eventKey:n,isActive:e==null&&_!=null?ha(w)===_:e,transition:i||y.transition,mountOnEnter:r??y.mountOnEnter,unmountOnExit:s??y.unmountOnExit,onEnter:a,onEntering:l,onEntered:c,onExit:u,onExiting:d,onExited:f}]}const cT=g.forwardRef((t,e)=>{let{as:n="div"}=t,r=Ph(t,_3);const[i,{isActive:s,onEnter:o,onEntering:a,onEntered:l,onExit:c,onExiting:u,onExited:d,mountOnEnter:f,unmountOnExit:p,transition:m=aT}]=lT(r);return h(Hs.Provider,{value:null,children:h(bi.Provider,{value:null,children:h(m,{in:s,onEnter:o,onEntering:a,onEntered:l,onExit:c,onExiting:u,onExited:d,mountOnEnter:f,unmountOnExit:p,children:h(n,Object.assign({},i,{ref:e,hidden:!s,"aria-hidden":!s}))})})})});cT.displayName="TabPanel";const Tg=t=>{const{id:e,generateChildId:n,onSelect:r,activeKey:i,defaultActiveKey:s,transition:o,mountOnEnter:a,unmountOnExit:l,children:c}=t,[u,d]=oS(i,s,r),f=nL(e),p=g.useMemo(()=>n||((w,C)=>f?`${f}-${C}-${w}`:null),[f,n]),m=g.useMemo(()=>({onSelect:d,activeKey:u,transition:o,mountOnEnter:a||!1,unmountOnExit:l||!1,getControlledId:w=>p(w,"tabpane"),getControllerId:w=>p(w,"tab")}),[d,u,o,a,l,p]);return h(Hs.Provider,{value:m,children:h(bi.Provider,{value:d||null,children:c})})};Tg.Panel=cT;function bg(t){return typeof t=="boolean"?t?Ua:aT:t}const uT=({transition:t,...e})=>h(Tg,{...e,transition:bg(t)});uT.displayName="TabContainer";const w3=uT,dT=pt("tab-content"),fT=g.forwardRef(({bsPrefix:t,transition:e,...n},r)=>{const[{className:i,as:s="div",...o},{isActive:a,onEnter:l,onEntering:c,onEntered:u,onExit:d,onExiting:f,onExited:p,mountOnEnter:m,unmountOnExit:w,transition:C=Ua}]=lT({...n,transition:bg(e)}),v=se(t,"tab-pane");return h(Hs.Provider,{value:null,children:h(bi.Provider,{value:null,children:h(C,{in:a,onEnter:l,onEntering:c,onEntered:u,onExit:d,onExiting:f,onExited:p,mountOnEnter:m,unmountOnExit:w,children:h(s,{...o,ref:r,className:Q(i,v,a&&"active")})})})})});fT.displayName="TabPane";const hT=fT,E3={eventKey:U.oneOfType([U.string,U.number]),title:U.node.isRequired,disabled:U.bool,tabClassName:U.string,tabAttrs:U.object},pT=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};pT.propTypes=E3;const Vc=Object.assign(pT,{Container:w3,Content:dT,Pane:hT}),C3=g.forwardRef(({bsPrefix:t,className:e,striped:n,bordered:r,borderless:i,hover:s,size:o,variant:a,responsive:l,...c},u)=>{const d=se(t,"table"),f=Q(e,d,a&&`${d}-${a}`,o&&`${d}-${o}`,n&&`${d}-${typeof n=="string"?`striped-${n}`:"striped"}`,r&&`${d}-bordered`,i&&`${d}-borderless`,s&&`${d}-hover`),p=h("table",{...c,className:f,ref:u});if(l){let m=`${d}-responsive`;return typeof l=="string"&&(m=`${m}-${l}`),h("div",{className:m,children:p})}return p}),S3=C3,T3={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1};function b3(t){let e;return qD(t,n=>{e==null&&(e=n.props.eventKey)}),e}function k3(t){const{title:e,eventKey:n,disabled:r,tabClassName:i,tabAttrs:s,id:o}=t.props;return e==null?null:h(JS,{as:"li",role:"presentation",children:h(ZS,{as:"button",type:"button",eventKey:n,disabled:r,id:o,className:i,...s,children:e})})}const Uu=t=>{const{id:e,onSelect:n,transition:r,mountOnEnter:i,unmountOnExit:s,children:o,activeKey:a=b3(o),...l}=Qm(t,{activeKey:"onSelect"});return N(Tg,{id:e,activeKey:a,onSelect:n,transition:bg(r),mountOnEnter:i,unmountOnExit:s,children:[h(ho,{...l,role:"tablist",as:"ul",children:__(o,k3)}),h(dT,{children:__(o,c=>{const u={...c.props};return delete u.title,delete u.disabled,delete u.tabClassName,delete u.tabAttrs,h(hT,{...u})})})]})};Uu.defaultProps=T3;Uu.displayName="Tabs";function N_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?N_(Object(n),!0).forEach(function(r){Ke(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Gc(t){return Gc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gc(t)}function I3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function N3(t,e,n){return e&&x_(t.prototype,e),n&&x_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ke(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kg(t,e){return R3(t)||P3(t,e)||mT(t,e)||M3()}function za(t){return x3(t)||O3(t)||mT(t)||A3()}function x3(t){if(Array.isArray(t))return Ah(t)}function R3(t){if(Array.isArray(t))return t}function O3(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function P3(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function mT(t,e){if(t){if(typeof t=="string")return Ah(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ah(t,e)}}function Ah(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function A3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var R_=function(){},Ig={},gT={},vT=null,yT={mark:R_,measure:R_};try{typeof window<"u"&&(Ig=window),typeof document<"u"&&(gT=document),typeof MutationObserver<"u"&&(vT=MutationObserver),typeof performance<"u"&&(yT=performance)}catch{}var D3=Ig.navigator||{},O_=D3.userAgent,P_=O_===void 0?"":O_,Ur=Ig,Ce=gT,A_=vT,ml=yT;Ur.document;var er=!!Ce.documentElement&&!!Ce.head&&typeof Ce.addEventListener=="function"&&typeof Ce.createElement=="function",_T=~P_.indexOf("MSIE")||~P_.indexOf("Trident/"),gl,vl,yl,_l,wl,Kn="___FONT_AWESOME___",Mh=16,wT="fa",ET="svg-inline--fa",ki="data-fa-i2svg",Dh="data-fa-pseudo-element",L3="data-fa-pseudo-element-pending",Ng="data-prefix",xg="data-icon",M_="fontawesome-i2svg",F3="async",$3=["HTML","HEAD","STYLE","SCRIPT"],CT=function(){try{return!0}catch{return!1}}(),we="classic",Me="sharp",Rg=[we,Me];function Ba(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[we]}})}var pa=Ba((gl={},Ke(gl,we,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ke(gl,Me,{fa:"solid",fass:"solid","fa-solid":"solid"}),gl)),ma=Ba((vl={},Ke(vl,we,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ke(vl,Me,{solid:"fass"}),vl)),ga=Ba((yl={},Ke(yl,we,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ke(yl,Me,{fass:"fa-solid"}),yl)),U3=Ba((_l={},Ke(_l,we,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ke(_l,Me,{"fa-solid":"fass"}),_l)),z3=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,ST="fa-layers-text",B3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,j3=Ba((wl={},Ke(wl,we,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ke(wl,Me,{900:"fass"}),wl)),TT=[1,2,3,4,5,6,7,8,9,10],H3=TT.concat([11,12,13,14,15,16,17,18,19,20]),W3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ri={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},va=new Set;Object.keys(ma[we]).map(va.add.bind(va));Object.keys(ma[Me]).map(va.add.bind(va));var V3=[].concat(Rg,za(va),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ri.GROUP,ri.SWAP_OPACITY,ri.PRIMARY,ri.SECONDARY]).concat(TT.map(function(t){return"".concat(t,"x")})).concat(H3.map(function(t){return"w-".concat(t)})),Po=Ur.FontAwesomeConfig||{};function G3(t){var e=Ce.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function K3(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ce&&typeof Ce.querySelector=="function"){var Y3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Y3.forEach(function(t){var e=kg(t,2),n=e[0],r=e[1],i=K3(G3(n));i!=null&&(Po[r]=i)})}var bT={styleDefault:"solid",familyDefault:"classic",cssPrefix:wT,replacementClass:ET,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Po.familyPrefix&&(Po.cssPrefix=Po.familyPrefix);var Os=L(L({},bT),Po);Os.autoReplaceSvg||(Os.observeMutations=!1);var z={};Object.keys(bT).forEach(function(t){Object.defineProperty(z,t,{enumerable:!0,set:function(n){Os[t]=n,Ao.forEach(function(r){return r(z)})},get:function(){return Os[t]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(e){Os.cssPrefix=e,Ao.forEach(function(n){return n(z)})},get:function(){return Os.cssPrefix}});Ur.FontAwesomeConfig=z;var Ao=[];function q3(t){return Ao.push(t),function(){Ao.splice(Ao.indexOf(t),1)}}var or=Mh,gn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Q3(t){if(!(!t||!er)){var e=Ce.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ce.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ce.head.insertBefore(e,r),t}}var X3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ya(){for(var t=12,e="";t-- >0;)e+=X3[Math.random()*62|0];return e}function Ws(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Og(t){return t.classList?Ws(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function kT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function J3(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(kT(t[n]),'" ')},"").trim()}function zu(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Pg(t){return t.size!==gn.size||t.x!==gn.x||t.y!==gn.y||t.rotate!==gn.rotate||t.flipX||t.flipY}function Z3(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function e5(t){var e=t.transform,n=t.width,r=n===void 0?Mh:n,i=t.height,s=i===void 0?Mh:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&_T?l+="translate(".concat(e.x/or-r/2,"em, ").concat(e.y/or-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/or,"em), calc(-50% + ").concat(e.y/or,"em)) "):l+="translate(".concat(e.x/or,"em, ").concat(e.y/or,"em) "),l+="scale(".concat(e.size/or*(e.flipX?-1:1),", ").concat(e.size/or*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var t5=`:root, :host {
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
}`;function IT(){var t=wT,e=ET,n=z.cssPrefix,r=z.replacementClass,i=t5;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var D_=!1;function jd(){z.autoAddCss&&!D_&&(Q3(IT()),D_=!0)}var n5={mixout:function(){return{dom:{css:IT,insertCss:jd}}},hooks:function(){return{beforeDOMElementCreation:function(){jd()},beforeI2svg:function(){jd()}}}},Yn=Ur||{};Yn[Kn]||(Yn[Kn]={});Yn[Kn].styles||(Yn[Kn].styles={});Yn[Kn].hooks||(Yn[Kn].hooks={});Yn[Kn].shims||(Yn[Kn].shims=[]);var sn=Yn[Kn],NT=[],r5=function t(){Ce.removeEventListener("DOMContentLoaded",t),Kc=1,NT.map(function(e){return e()})},Kc=!1;er&&(Kc=(Ce.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ce.readyState),Kc||Ce.addEventListener("DOMContentLoaded",r5));function i5(t){er&&(Kc?setTimeout(t,0):NT.push(t))}function ja(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?kT(t):"<".concat(e," ").concat(J3(r),">").concat(s.map(ja).join(""),"</").concat(e,">")}function L_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var s5=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Hd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?s5(n,i):n,l,c,u;for(r===void 0?(l=1,u=e[s[0]]):(l=0,u=r);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function o5(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Lh(t){var e=o5(t);return e.length===1?e[0].toString(16):null}function a5(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function F_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Fh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=F_(e);typeof sn.hooks.addPack=="function"&&!i?sn.hooks.addPack(t,F_(e)):sn.styles[t]=L(L({},sn.styles[t]||{}),s),t==="fas"&&Fh("fa",e)}var El,Cl,Sl,ts=sn.styles,l5=sn.shims,c5=(El={},Ke(El,we,Object.values(ga[we])),Ke(El,Me,Object.values(ga[Me])),El),Ag=null,xT={},RT={},OT={},PT={},AT={},u5=(Cl={},Ke(Cl,we,Object.keys(pa[we])),Ke(Cl,Me,Object.keys(pa[Me])),Cl);function d5(t){return~V3.indexOf(t)}function f5(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!d5(i)?i:null}var MT=function(){var e=function(s){return Hd(ts,function(o,a,l){return o[l]=Hd(a,s,{}),o},{})};xT=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),RT=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),AT=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in ts||z.autoFetchSvg,r=Hd(l5,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});OT=r.names,PT=r.unicodes,Ag=Bu(z.styleDefault,{family:z.familyDefault})};q3(function(t){Ag=Bu(t.styleDefault,{family:z.familyDefault})});MT();function Mg(t,e){return(xT[t]||{})[e]}function h5(t,e){return(RT[t]||{})[e]}function ii(t,e){return(AT[t]||{})[e]}function DT(t){return OT[t]||{prefix:null,iconName:null}}function p5(t){var e=PT[t],n=Mg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function zr(){return Ag}var Dg=function(){return{prefix:null,iconName:null,rest:[]}};function Bu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?we:n,i=pa[r][t],s=ma[r][t]||ma[r][i],o=t in sn.styles?t:null;return s||o||null}var $_=(Sl={},Ke(Sl,we,Object.keys(ga[we])),Ke(Sl,Me,Object.keys(ga[Me])),Sl);function ju(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ke(e,we,"".concat(z.cssPrefix,"-").concat(we)),Ke(e,Me,"".concat(z.cssPrefix,"-").concat(Me)),e),o=null,a=we;(t.includes(s[we])||t.some(function(c){return $_[we].includes(c)}))&&(a=we),(t.includes(s[Me])||t.some(function(c){return $_[Me].includes(c)}))&&(a=Me);var l=t.reduce(function(c,u){var d=f5(z.cssPrefix,u);if(ts[u]?(u=c5[a].includes(u)?U3[a][u]:u,o=u,c.prefix=u):u5[a].indexOf(u)>-1?(o=u,c.prefix=Bu(u,{family:a})):d?c.iconName=d:u!==z.replacementClass&&u!==s[we]&&u!==s[Me]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var f=o==="fa"?DT(c.iconName):{},p=ii(c.prefix,c.iconName);f.prefix&&(o=null),c.iconName=f.iconName||p||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!ts.far&&ts.fas&&!z.autoFetchSvg&&(c.prefix="fas")}return c},Dg());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Me&&(ts.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=ii(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=zr()||"fas"),l}var m5=function(){function t(){I3(this,t),this.definitions={}}return N3(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=L(L({},n.definitions[a]||{}),o[a]),Fh(a,o[a]);var l=ga[we][a];l&&Fh(l,o[a]),MT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(n[a][d]=c)}),n[a][l]=c}),n}}]),t}(),U_=[],ns={},gs={},g5=Object.keys(gs);function v5(t,e){var n=e.mixoutsTo;return U_=t,ns={},Object.keys(gs).forEach(function(r){g5.indexOf(r)===-1&&delete gs[r]}),U_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Gc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){ns[o]||(ns[o]=[]),ns[o].push(s[o])})}r.provides&&r.provides(gs)}),n}function $h(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=ns[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Ii(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=ns[t]||[];i.forEach(function(s){s.apply(null,n)})}function qn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return gs[t]?gs[t].apply(null,e):void 0}function Uh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||zr();if(e)return e=ii(n,e)||e,L_(LT.definitions,n,e)||L_(sn.styles,n,e)}var LT=new m5,y5=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Ii("noAuto")},_5={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return er?(Ii("beforeI2svg",e),qn("pseudoElements2svg",e),qn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,i5(function(){E5({autoReplaceSvgRoot:n}),Ii("watch",e)})}},w5={icon:function(e){if(e===null)return null;if(Gc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ii(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Bu(e[0]);return{prefix:r,iconName:ii(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(z.cssPrefix,"-"))>-1||e.match(z3))){var i=ju(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||zr(),iconName:ii(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=zr();return{prefix:s,iconName:ii(s,e)||e}}}},zt={noAuto:y5,config:z,dom:_5,parse:w5,library:LT,findIconDefinition:Uh,toHtml:ja},E5=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ce:n;(Object.keys(sn.styles).length>0||z.autoFetchSvg)&&er&&z.autoReplaceSvg&&zt.dom.i2svg({node:r})};function Hu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return ja(r)})}}),Object.defineProperty(t,"node",{get:function(){if(er){var r=Ce.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function C5(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Pg(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=zu(L(L({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function S5(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:o}),children:r}]}]}function Lg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,d=t.extra,f=t.watchable,p=f===void 0?!1:f,m=r.found?r:n,w=m.width,C=m.height,v=i==="fak",y=[z.replacementClass,s?"".concat(z.cssPrefix,"-").concat(s):""].filter(function(D){return d.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(d.classes).join(" "),_={children:[],attributes:L(L({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:y,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(C)})},E=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(w/C*16*.0625,"em")}:{};p&&(_.attributes[ki]=""),l&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(u||ya())},children:[l]}),delete _.attributes.title);var S=L(L({},_),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:L(L({},E),d.styles)}),T=r.found&&n.found?qn("generateAbstractMask",S)||{children:[],attributes:{}}:qn("generateAbstractIcon",S)||{children:[],attributes:{}},b=T.children,k=T.attributes;return S.children=b,S.attributes=k,a?S5(S):C5(S)}function z_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=L(L(L({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[ki]="");var u=L({},o.styles);Pg(i)&&(u.transform=e5({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var d=zu(u);d.length>0&&(c.style=d);var f=[];return f.push({tag:"span",attributes:c,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function T5(t){var e=t.content,n=t.title,r=t.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=zu(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Wd=sn.styles;function zh(t){var e=t[0],n=t[1],r=t.slice(4),i=kg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(ri.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(ri.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(ri.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var b5={found:!1,width:512,height:512};function k5(t,e){!CT&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Bh(t,e){var n=e;return e==="fa"&&z.styleDefault!==null&&(e=zr()),new Promise(function(r,i){if(qn("missingIconAbstract"),n==="fa"){var s=DT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Wd[e]&&Wd[e][t]){var o=Wd[e][t];return r(zh(o))}k5(t,e),r(L(L({},b5),{},{icon:z.showMissingIcons&&t?qn("missingIconAbstract")||{}:{}}))})}var B_=function(){},jh=z.measurePerformance&&ml&&ml.mark&&ml.measure?ml:{mark:B_,measure:B_},mo='FA "6.2.1"',I5=function(e){return jh.mark("".concat(mo," ").concat(e," begins")),function(){return FT(e)}},FT=function(e){jh.mark("".concat(mo," ").concat(e," ends")),jh.measure("".concat(mo," ").concat(e),"".concat(mo," ").concat(e," begins"),"".concat(mo," ").concat(e," ends"))},Fg={begin:I5,end:FT},Hl=function(){};function j_(t){var e=t.getAttribute?t.getAttribute(ki):null;return typeof e=="string"}function N5(t){var e=t.getAttribute?t.getAttribute(Ng):null,n=t.getAttribute?t.getAttribute(xg):null;return e&&n}function x5(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function R5(){if(z.autoReplaceSvg===!0)return Wl.replace;var t=Wl[z.autoReplaceSvg];return t||Wl.replace}function O5(t){return Ce.createElementNS("http://www.w3.org/2000/svg",t)}function P5(t){return Ce.createElement(t)}function $T(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?O5:P5:n;if(typeof t=="string")return Ce.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild($T(o,{ceFn:r}))}),i}function A5(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Wl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore($T(i),n)}),n.getAttribute(ki)===null&&z.keepOriginalSource){var r=Ce.createComment(A5(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Og(n).indexOf(z.replacementClass))return Wl.replace(e);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return ja(a)}).join(`
`);n.setAttribute(ki,""),n.innerHTML=o}};function H_(t){t()}function UT(t,e){var n=typeof e=="function"?e:Hl;if(t.length===0)n();else{var r=H_;z.mutateApproach===F3&&(r=Ur.requestAnimationFrame||H_),r(function(){var i=R5(),s=Fg.begin("mutate");t.map(i),s(),n()})}}var $g=!1;function zT(){$g=!0}function Hh(){$g=!1}var Yc=null;function W_(t){if(A_&&z.observeMutations){var e=t.treeCallback,n=e===void 0?Hl:e,r=t.nodeCallback,i=r===void 0?Hl:r,s=t.pseudoElementsCallback,o=s===void 0?Hl:s,a=t.observeMutationsRoot,l=a===void 0?Ce:a;Yc=new A_(function(c){if(!$g){var u=zr();Ws(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!j_(d.addedNodes[0])&&(z.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&z.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&j_(d.target)&&~W3.indexOf(d.attributeName))if(d.attributeName==="class"&&N5(d.target)){var f=ju(Og(d.target)),p=f.prefix,m=f.iconName;d.target.setAttribute(Ng,p||u),m&&d.target.setAttribute(xg,m)}else x5(d.target)&&i(d.target)})}}),er&&Yc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function M5(){Yc&&Yc.disconnect()}function D5(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function L5(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=ju(Og(t));return i.prefix||(i.prefix=zr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=h5(i.prefix,t.innerText)||Mg(i.prefix,Lh(t.innerText))),!i.iconName&&z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function F5(t){var e=Ws(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||ya()):(e["aria-hidden"]="true",e.focusable="false")),e}function $5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:gn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function V_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=L5(t),r=n.iconName,i=n.prefix,s=n.rest,o=F5(t),a=$h("parseNodeAttributes",{},t),l=e.styleParser?D5(t):[];return L({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:gn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var U5=sn.styles;function BT(t){var e=z.autoReplaceSvg==="nest"?V_(t,{styleParser:!1}):V_(t);return~e.extra.classes.indexOf(ST)?qn("generateLayersText",t,e):qn("generateSvgReplacementMutation",t,e)}var Br=new Set;Rg.map(function(t){Br.add("fa-".concat(t))});Object.keys(pa[we]).map(Br.add.bind(Br));Object.keys(pa[Me]).map(Br.add.bind(Br));Br=za(Br);function G_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!er)return Promise.resolve();var n=Ce.documentElement.classList,r=function(d){return n.add("".concat(M_,"-").concat(d))},i=function(d){return n.remove("".concat(M_,"-").concat(d))},s=z.autoFetchSvg?Br:Rg.map(function(u){return"fa-".concat(u)}).concat(Object.keys(U5));s.includes("fa")||s.push("fa");var o=[".".concat(ST,":not([").concat(ki,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(ki,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Ws(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Fg.begin("onTree"),c=a.reduce(function(u,d){try{var f=BT(d);f&&u.push(f)}catch(p){CT||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,d){Promise.all(c).then(function(f){UT(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(f){l(),d(f)})})}function z5(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;BT(t).then(function(n){n&&UT([n],e)})}function B5(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Uh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Uh(i||{})),t(r,L(L({},n),{},{mask:i}))}}var j5=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?gn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,d=n.title,f=d===void 0?null:d,p=n.titleId,m=p===void 0?null:p,w=n.classes,C=w===void 0?[]:w,v=n.attributes,y=v===void 0?{}:v,_=n.styles,E=_===void 0?{}:_;if(e){var S=e.prefix,T=e.iconName,b=e.icon;return Hu(L({type:"icon"},e),function(){return Ii("beforeDOMElementCreation",{iconDefinition:e,params:n}),z.autoA11y&&(f?y["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(m||ya()):(y["aria-hidden"]="true",y.focusable="false")),Lg({icons:{main:zh(b),mask:l?zh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:T,transform:L(L({},gn),i),symbol:o,title:f,maskId:u,titleId:m,extra:{attributes:y,styles:E,classes:C}})})}},H5={mixout:function(){return{icon:B5(j5)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=G_,n.nodeCallback=z5,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ce:r,s=n.callback,o=s===void 0?function(){}:s;return G_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,d=r.maskId,f=r.extra;return new Promise(function(p,m){Promise.all([Bh(i,a),u.iconName?Bh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var C=kg(w,2),v=C[0],y=C[1];p([n,Lg({icons:{main:v,mask:y},prefix:a,iconName:i,transform:l,symbol:c,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=zu(a);l.length>0&&(i.style=l);var c;return Pg(o)&&(c=qn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},W5={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Hu({type:"layer"},function(){Ii("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(za(s)).join(" ")},children:o}]})}}}},V5={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,d=u===void 0?{}:u;return Hu({type:"counter",content:n},function(){return Ii("beforeDOMElementCreation",{content:n,params:r}),T5({content:n.toString(),title:s,extra:{attributes:c,styles:d,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(za(a))}})})}}}},G5={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?gn:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,d=u===void 0?{}:u,f=r.styles,p=f===void 0?{}:f;return Hu({type:"text",content:n},function(){return Ii("beforeDOMElementCreation",{content:n,params:r}),z_({content:n,transform:L(L({},gn),s),title:a,extra:{attributes:d,styles:p,classes:["".concat(z.cssPrefix,"-layers-text")].concat(za(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(_T){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return z.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,z_({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},K5=new RegExp('"',"ug"),K_=[1105920,1112319];function Y5(t){var e=t.replace(K5,""),n=a5(e,0),r=n>=K_[0]&&n<=K_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Lh(i?e[0]:e),isSecondary:r||i}}function Y_(t,e){var n="".concat(L3).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Ws(t.children),o=s.filter(function(b){return b.getAttribute(Dh)===e})[0],a=Ur.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(B3),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&u!=="none"&&u!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Me:we,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ma[f][l[2].toLowerCase()]:j3[f][c],m=Y5(d),w=m.value,C=m.isSecondary,v=l[0].startsWith("FontAwesome"),y=Mg(p,w),_=y;if(v){var E=p5(w);E.iconName&&E.prefix&&(y=E.iconName,p=E.prefix)}if(y&&!C&&(!o||o.getAttribute(Ng)!==p||o.getAttribute(xg)!==_)){t.setAttribute(n,_),o&&t.removeChild(o);var S=$5(),T=S.extra;T.attributes[Dh]=e,Bh(y,p).then(function(b){var k=Lg(L(L({},S),{},{icons:{main:b,mask:Dg()},prefix:p,iconName:_,extra:T,watchable:!0})),D=Ce.createElement("svg");e==="::before"?t.insertBefore(D,t.firstChild):t.appendChild(D),D.outerHTML=k.map(function(M){return ja(M)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function q5(t){return Promise.all([Y_(t,"::before"),Y_(t,"::after")])}function Q5(t){return t.parentNode!==document.head&&!~$3.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Dh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function q_(t){if(er)return new Promise(function(e,n){var r=Ws(t.querySelectorAll("*")).filter(Q5).map(q5),i=Fg.begin("searchPseudoElements");zT(),Promise.all(r).then(function(){i(),Hh(),e()}).catch(function(){i(),Hh(),n()})})}var X5={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=q_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ce:r;z.searchPseudoElements&&q_(i)}}},Q_=!1,J5={mixout:function(){return{dom:{unwatch:function(){zT(),Q_=!0}}}},hooks:function(){return{bootstrap:function(){W_($h("mutationObserverCallbacks",{}))},noAuto:function(){M5()},watch:function(n){var r=n.observeMutationsRoot;Q_?Hh():W_($h("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},X_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},Z5={mixout:function(){return{parse:{transform:function(n){return X_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=X_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:d,path:f};return{tag:"g",attributes:L({},p.outer),children:[{tag:"g",attributes:L({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),p.path)}]}]}}}},Vd={x:0,y:0,width:"100%",height:"100%"};function J_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function e6(t){return t.tag==="g"?t.children:[t]}var t6={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?ju(i.split(" ").map(function(o){return o.trim()})):Dg();return s.prefix||(s.prefix=zr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,u=s.icon,d=o.width,f=o.icon,p=Z3({transform:l,containerWidth:d,iconWidth:c}),m={tag:"rect",attributes:L(L({},Vd),{},{fill:"white"})},w=u.children?{children:u.children.map(J_)}:{},C={tag:"g",attributes:L({},p.inner),children:[J_(L({tag:u.tag,attributes:L(L({},u.attributes),p.path)},w))]},v={tag:"g",attributes:L({},p.outer),children:[C]},y="mask-".concat(a||ya()),_="clip-".concat(a||ya()),E={tag:"mask",attributes:L(L({},Vd),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,v]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:e6(f)},E]};return r.push(S,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(y,")")},Vd)}),{children:r,attributes:i}}}},n6={provides:function(e){var n=!1;Ur.matchMedia&&(n=Ur.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:L(L({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},r6={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},i6=[n5,H5,W5,V5,G5,X5,J5,Z5,t6,n6,r6];v5(i6,{mixoutsTo:zt});zt.noAuto;zt.config;zt.library;zt.dom;var Wh=zt.parse;zt.findIconDefinition;zt.toHtml;var s6=zt.icon;zt.layer;zt.text;zt.counter;function Z_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function wr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Z_(Object(n),!0).forEach(function(r){rs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function qc(t){return qc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qc(t)}function rs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o6(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function a6(t,e){if(t==null)return{};var n=o6(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Vh(t){return l6(t)||c6(t)||u6(t)||d6()}function l6(t){if(Array.isArray(t))return Gh(t)}function c6(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function u6(t,e){if(t){if(typeof t=="string")return Gh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gh(t,e)}}function Gh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f6(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,d=t.pulse,f=t.fixedWidth,p=t.inverse,m=t.border,w=t.listItem,C=t.flip,v=t.size,y=t.rotation,_=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":f,"fa-inverse":p,"fa-border":m,"fa-li":w,"fa-flip":C===!0,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},rs(e,"fa-".concat(v),typeof v<"u"&&v!==null),rs(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),rs(e,"fa-pull-".concat(_),typeof _<"u"&&_!==null),rs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(S){return E[S]?S:null}).filter(function(S){return S})}function h6(t){return t=t-0,t===t}function jT(t){return h6(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var p6=["style"];function m6(t){return t.charAt(0).toUpperCase()+t.slice(1)}function g6(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=jT(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[m6(i)]=s:e[i]=s,e},{})}function HT(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return HT(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=g6(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[jT(c)]=u}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=a6(n,p6);return i.attrs.style=wr(wr({},i.attrs.style),o),t.apply(void 0,[e.tag,wr(wr({},i.attrs),a)].concat(Vh(r)))}var WT=!1;try{WT=!0}catch{}function v6(){if(!WT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function e0(t){if(t&&qc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Wh.icon)return Wh.icon(t);if(t===null)return null;if(t&&qc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Gd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?rs({},t,e):{}}var vt=G.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,c=e0(n),u=Gd("classes",[].concat(Vh(f6(t)),Vh(s.split(" ")))),d=Gd("transform",typeof t.transform=="string"?Wh.transform(t.transform):t.transform),f=Gd("mask",e0(r)),p=s6(c,wr(wr(wr(wr({},u),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return v6("Could not find icon",c),null;var m=p.abstract,w={ref:e};return Object.keys(t).forEach(function(C){vt.defaultProps.hasOwnProperty(C)||(w[C]=t[C])}),y6(m[0],w)});vt.displayName="FontAwesomeIcon";vt.propTypes={beat:U.bool,border:U.bool,beatFade:U.bool,bounce:U.bool,className:U.string,fade:U.bool,flash:U.bool,mask:U.oneOfType([U.object,U.array,U.string]),maskId:U.string,fixedWidth:U.bool,inverse:U.bool,flip:U.oneOf([!0,!1,"horizontal","vertical","both"]),icon:U.oneOfType([U.object,U.array,U.string]),listItem:U.bool,pull:U.oneOf(["right","left"]),pulse:U.bool,rotation:U.oneOf([0,90,180,270]),shake:U.bool,size:U.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:U.bool,spinPulse:U.bool,spinReverse:U.bool,symbol:U.oneOfType([U.bool,U.string]),title:U.string,titleId:U.string,transform:U.oneOfType([U.string,U.object]),swapOpacity:U.bool};vt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var y6=HT.bind(null,G.createElement),_6={prefix:"fas",iconName:"people-group",icon:[640,512,[],"e533","M184 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zM568 88c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm8 157.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 160c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"]},w6={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"]},E6={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"]},C6={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"]},t0={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"]},S6={prefix:"fas",iconName:"award",icon:[384,512,[],"f559","M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80s80-35.8 80-80zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"]},T6={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};const VT="/assets/ellipsis-47261b4d.jpg",b6=({openModal:t,cardData:e,openDeleteEventModal:n,handleSetEventToDelete:r,handleSetEventToEdit:i,openEditEventModal:s,user:o,allUsers:a,handleJoin:l,handleLeave:c,handleSetEventToShowParticipants:u,handleShowParticipantsModal:d,calculateDateObjects:f})=>{const{name:p,location:m,maxCap:w,imgSrc:C,participants:v,owner:y}=e,[_,E]=g.useState(null),[S,T]=g.useState(null),[b,k]=g.useState([]);g.useEffect(()=>{if(e&&a){let Y=[];for(let X=0;X<Math.min(5,e.participants.length);X++)Y.push({photoURL:a[e.participants[X]].photoURL,displayName:a[e.participants[X]].displayName});k(Y);let[te,J]=f(e);E(te),T(J)}},[e]);const D=()=>{r(e),n()},M=()=>{i(e),s()},H=()=>{l(e)};return h(jc,{className:"card",children:N(Xt,{children:[N(po,{className:"card-top",children:[h(Xt,{sm:3,className:"circular-image-wrapper",children:h("img",{className:"event-image",src:C,alt:"image of event"})}),N(Xt,{sm:5,className:"card-top-detail-container",children:[h(jc.Title,{className:"title",children:p}),N("h2",{className:"date-time",children:[_&&_.toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1,timeZone:"CST"})," ","—"," ",S&&S.toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1,timeZone:"CST"})]}),N("div",{className:"location",children:[h(vt,{className:"icon-width",icon:C6}),N("a",{href:`https://maps.google.com/?q=${e.location}`,className:"subheader",target:"_blank",children:[" ",e.location]})]}),N("div",{className:"see-more","data-testid":"see-event-details",children:[h(vt,{className:"icon-width",icon:E6}),h("a",{className:"subheader","data-cy":"see-event-details",onClick:()=>{t(e)},children:"See Event Details"})]})]}),h(Xt,{children:h(po,{children:h(Xt,{xs:12,sm:12,children:N(po,{children:[h(Xt,{xs:{span:1,offset:4},sm:{span:2,offset:0},className:"circular-image-wrapper footer-padding",children:a&&a[y]&&a[y].photoURL&&h("img",{className:"owner-profile-image",src:a[y].photoURL,alt:"image of event"})}),N(Xt,{xs:5,sm:9,className:"footer-padding",children:[h("h2",{className:"subheader",children:"Organized by"}),h("h3",{className:"details-text",children:a[y].displayName})]})]})})})})]}),h("hr",{className:"solid"}),N(po,{className:"card-middle",children:[N(Xt,{children:[h("h3",{className:"details-header",children:"Event Size"}),N("div",{className:"details",children:[h("div",{className:"left",children:h(vt,{className:"icon-width",icon:_6})}),h("div",{className:"right",children:h("h3",{className:"details-text",children:w})})]})]}),N(Xt,{children:[h("h3",{className:"details-header",children:"Spots Available"}),N("div",{className:"details",children:[h("div",{className:"left",children:h(vt,{className:"icon-width",icon:T6})}),h("div",{className:"right",children:h("h3",{className:"details-text",children:w-v.length})})]})]}),N(Xt,{children:[h("h3",{className:"details-header",children:"Experience Level"}),N("div",{className:"details",children:[h("div",{className:"left",children:h(vt,{className:"icon-width",icon:S6})}),h("div",{className:"right",children:h("h3",{className:"details-text",children:e.skillLevel})})]})]})]}),h("hr",{className:"solid"}),N("div",{className:"participant-list-section",children:[h("h3",{className:"participant-title",children:"Participants:"}),h("div",{children:N("p",{className:"participant-list-container",onClick:()=>{d(),u(e)},children:[b.map(Y=>{let te=Y.photoURL,J=Y.displayName;return h("img",{className:"participant-profile-image",src:te,alt:J,title:J},b.indexOf(Y))}),e.participants.length>5&&h("img",{className:"participant-profile-image",src:VT,title:"more"})]})})]}),N("div",{className:"card-footer",children:[e.owner!==o.uid&&!e.participants.includes(o.uid)&&h(yt,{className:"event-card-button join-event-button","data-testid":"join-event",onClick:H,variant:"primary",size:"lg",children:"Join Event"}),y===o.uid&&h(yt,{onClick:M,variant:"warning",size:"lg",className:"event-card-button edit-event-button",children:"Edit Event"}),y===o.uid&&h("div",{"data-cy":"delete-event-button",children:h(yt,{onClick:D,variant:"danger",size:"lg",className:"event-card-button delete-event-button",children:"Delete Event"})}),e.participants.includes(o.uid)&&e.owner!==o.uid&&h(yt,{size:"lg","data-testid":"leave-event",className:"event-card-button leave-event-button",onClick:()=>{c(e)},children:"Leave Event"})]})]})})};function k6({show:t,handleJoin:e,handleClose:n,data:r}){if(!r)return"";const{name:i,location:s,dateTimeString:o,desc:a}=r;return N(ae,{show:t,onHide:n,info:r,centered:!0,backdrop:"static",children:[h(ae.Header,{closeButton:!0,children:h(ae.Title,{children:i+" Details"})}),h(ae.Body,{children:h("p",{className:"modal-details","data-cy":"event-details-description",children:a})})]})}const n0=({show:t,handleClose:e,handleSubmit:n,user:r,checkConflict:i,createConfirmationModal:s})=>{const[o,a]=g.useState({eventName:"",eventLocation:"",eventCapacity:0,imageFile:"",dateString:"",timeString:"",currentDate:new Date(new Date().getTime()-216e5).toISOString().split("T")[0],currentTime:new Date(new Date().getTime()-216e5).toISOString().split("T")[1].substring(0,5),skillLevel:"",eventDescription:"",eventDuration:""}),l=()=>{a({eventName:"",eventLocation:"",eventCapacity:0,dateString:"",timeString:"",currentDate:new Date(new Date().getTime()-60*60*1e3*6).toISOString().split("T")[0],currentTime:new Date(new Date().getTime()-60*60*1e3*6).toISOString().split("T")[1].substring(0,5),skillLevel:"",eventDescription:"",eventDuration:""}),p(!1),d(0)},c=N("div",{className:"creating-event-container",children:[h("p",{className:"creating-event-text",children:"Creating Event..."}),h("div",{className:"submission-status-icon",children:h(sT,{animation:"border",role:"status",children:h("span",{className:"visually-hidden",children:"Creating Event..."})})})]});let[u,d]=g.useState(0);const[f,p]=g.useState(!1),m=C=>{const{name:v,value:y,type:_,files:E}=C.target;a(S=>({...S,[v]:_==="file"?E[0]:y}))},w=async C=>{if(C.preventDefault(),d(1),C.currentTarget.checkValidity()===!1){C.stopPropagation(),d(0),p(!0);return}const _=new Date(`${o.dateString} ${o.timeString}`).toUTCString(),E={name:o.eventName,maxCap:parseInt(o.eventCapacity,10),location:o.eventLocation,owner:r.uid,activity:"",desc:o.eventDescription,imgSrc:"",privacy:0,participants:[],dateTimeString:_,skillLevel:o.skillLevel,duration:o.eventDuration};let[S,T]=i(E),b=!0;if(S&&(b=await s({isShow:!0,conflictingEventName:T,actionItem:"create"})),b){const k={content:`Congratulations ${r.displayName}! Your event titled '${o.eventName}' is officially live! The event is now listed on the 'All Event' page. 
        You can also find it in the 'upcoming' section of your profile page. You will receive notifications when people join or leave your event. Have fun!!!`,title:`Event "${o.eventName}" Successfully Created`,timeStamp:new Date().toUTCString()};try{await n(E,k,o.imageFile),l(),e()}catch(D){console.log(D),d(0)}}else l(),e()};return N(ae,{show:t,onHide:()=>{l(),e()},centered:!0,backdrop:"static",fullscreen:"sm-down",scrollable:"true","data-cy":"add-event-modal",children:[h(ae.Header,{closeButton:!0,children:h(ae.Title,{children:"Create an event"})}),h(ae.Body,{children:N(A,{noValidate:!0,validated:f,onSubmit:w,id:"create-event-form",children:[N(A.Group,{"data-cy":"event-name",className:"mb-3",controlId:"event-name",children:[h(A.Label,{children:"Event Name"}),h(A.Control,{type:"text",name:"eventName",value:o.eventName,onChange:m,autoFocus:!0,required:!0}),h("div",{"data-cy":"no-event-name-feedback",children:h(A.Control.Feedback,{type:"invalid",children:"Please provide an event name."})})]}),N(A.Group,{className:"mb-3",controlId:"event-description",children:[h(A.Label,{children:"Description"}),h(A.Control,{type:"text",as:"textarea",rows:3,name:"eventDescription",value:o.eventDescription,onChange:m,autoFocus:!0})]}),N(A.Group,{className:"mb-3",controlId:"event-location",children:[h(A.Label,{children:"Location"}),h(A.Control,{type:"text",name:"eventLocation",value:o.eventLocation,onChange:m,required:!0,autoFocus:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a location."})]}),N(A.Group,{className:"mb-3",controlId:"event-capacity",children:[h(A.Label,{children:"Capacity"}),h(A.Control,{type:"number",min:"1",max:"100",step:"1",name:"eventCapacity",value:o.eventCapacity,onChange:m,required:!0,autoFocus:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a valid number of attendees."})]}),N(A.Group,{className:"mb-3",controlId:"event-date",children:[h(A.Label,{children:"Date"}),h(A.Control,{type:"date",name:"dateString",onChange:m,value:o.dateString,min:o.currentDate,autoFocus:!0,required:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a valid date."})]}),N(A.Group,{className:"mb-3",controlId:"event-time",children:[h(A.Label,{children:"Time"}),h(A.Control,{type:"time",name:"timeString",onChange:m,value:o.timeString,min:o.dateString===o.currentDate?o.currentTime:"00:00",autoFocus:!0,required:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a valid time."})]}),N(A.Group,{className:"mb-3",controlId:"event-duration",children:[h(A.Label,{children:"Duration (hour)"}),h(A.Control,{type:"number",min:"1",max:"24",step:"0.1",name:"eventDuration",value:o.eventDuration,onChange:m,required:!0,autoFocus:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a valid duration of event."})]}),N(A.Group,{className:"mb-3",controlId:"event-time",children:[h(A.Label,{children:"Skill Level:"}),N(A.Select,{"aria-label":"Default select example",value:o.skillLevel,onChange:m,name:"skillLevel",required:!0,children:[h("option",{value:"",children:"-- choose a skill level --"}),h("option",{value:"Beginner",children:"Beginner"}),h("option",{value:"Intermediate",children:"Intermediate"}),h("option",{value:"Advanced",children:"Advanced"})]}),h(A.Control.Feedback,{type:"invalid",children:"Please select a skill level"})]}),N(A.Group,{className:"mb-3",controlId:"upload-image",children:[h(A.Label,{children:"Upload Cover Image (Optional)"}),h(A.Control,{type:"file",name:"imageFile",onChange:m,accept:"image/*"})]}),h("div",{className:"submission-status",children:u===1&&c})]})}),h(ae.Footer,{children:h("div",{"data-cy":"create-event-button",children:h(yt,{variant:"primary",type:"submit",form:"create-event-form",className:"create-event-button",disabled:u!==0,children:"Create Event"})})})]})};const GT=({show:t,handleClose:e,handleDelete:n})=>{const[r,i]=g.useState(0),s=async()=>{let o=await n();i(o?1:2),i(0),e()};return N(ae,{show:t,centered:!0,backdrop:"static",onHide:e,"data-cy":"delete-event-modal",children:[h(ae.Header,{closeButton:!0,children:h(ae.Title,{children:"Are you sure you want to delete this event?"})}),h(ae.Body,{children:N("p",{children:["Since you are the creator of this event, deleting it will delete the event for all participants. Are you sure?"," "]})}),N(ae.Footer,{children:[h("div",{"data-cy":"delete-confirm-button",children:h(yt,{variant:"primary",onClick:s,disabled:r!==0,className:"delete-confirm-button",children:"Yes"})}),h(yt,{variant:"outline-secondary",onClick:e,disabled:r!==0,className:"delete-cancel-button",children:"Cancel"})]})]})};const KT=t=>{const e=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];let n=new Date(t),r=n.toLocaleString("en-US",{timeZone:"CST",hour12:!1});const[i,s]=r.split(",").map(p=>p.trim());let[o,a,l]=i.split("/"),[c,u,d]=s.split(":");o=o.padStart(2,"0"),a=a.padStart(2,"0"),c=c.padStart(2,"0");let f=e[n.getDay()];return{month:o,day:a,year:l,hours:c,minutes:u,seconds:d,weekday:f}},YT=({show:t,handleClose:e,handleSubmit:n,user:r,data:i,checkConflict:s,createConfirmationModal:o,allEvents:a})=>{const[l,c]=g.useState({eventName:"haha",eventLocation:"",eventCapacity:0,imageFile:"",dateString:"",timeString:"",currentDate:new Date(new Date().getTime()-216e5).toISOString().split("T")[0],currentTime:new Date(new Date().getTime()-216e5).toISOString().split("T")[1].substring(0,5),skillLevel:"",eventDescription:"",eventDuration:""});g.useEffect(()=>{u()},[i]);const u=()=>{if(i){let{month:_,day:E,year:S,hours:T,minutes:b,seconds:k}=KT(i.dateTimeString);c(D=>({...D,eventName:`${i.name}`,eventLocation:`${i.location}`,eventCapacity:`${i.maxCap}`,dateString:`${S}-${_}-${E}`,timeString:`${T}:${b}:${k}`,imageFile:null,skillLevel:i.skillLevel,eventDescription:i.desc,eventDuration:i.duration}))}},d=()=>{u(),C(!1),m(0)},f=N("div",{className:"editing-event-container",children:[h("p",{className:"editing-event-text",children:"Editing Event..."}),h("div",{className:"submission-status-icon",children:h(sT,{animation:"border",role:"status",children:h("span",{className:"visually-hidden",children:"Editing Event..."})})})]});let[p,m]=g.useState(0);const[w,C]=g.useState(!1),v=_=>{const{name:E,value:S,type:T,files:b}=_.target;c(k=>({...k,[E]:T==="file"?b[0]:S}))},y=async _=>{if(_.preventDefault(),m(1),_.currentTarget.checkValidity()===!1){_.stopPropagation(),m(0),C(!0);return}const T=new Date(`${l.dateString} ${l.timeString}`).toUTCString(),b={...i,name:l.eventName,maxCap:parseInt(l.eventCapacity,10),location:l.eventLocation,dateTimeString:T,skillLevel:l.skillLevel,desc:l.eventDescription,duration:l.eventDuration};let[k,D]=s(b),M=!0;if(k&&(M=await o({isShow:!0,conflictingEventName:D,actionItem:"create"})),M)try{const H=await n(b,l.imageFile);m(0),d(),e()}catch(H){console.log(H),m(0)}else d(),e()};return N(ae,{show:t,onHide:()=>{d(),e()},centered:!0,backdrop:"static",fullscreen:"sm-down",scrollable:"true",children:[h(ae.Header,{closeButton:!0,children:h(ae.Title,{children:"Edit the event"})}),h(ae.Body,{children:N(A,{noValidate:!0,validated:w,onSubmit:y,id:"create-event-form",children:[N(A.Group,{className:"mb-3",controlId:"event-name",children:[h(A.Label,{children:"Event Name"}),h(A.Control,{type:"text",name:"eventName",value:l.eventName,onChange:v,autoFocus:!0,required:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide an event name."})]}),N(A.Group,{className:"mb-3",controlId:"event-description",children:[h(A.Label,{children:"Description"}),h(A.Control,{type:"text",as:"textarea",rows:3,name:"eventDescription",value:l.eventDescription,onChange:v,autoFocus:!0})]}),N(A.Group,{className:"mb-3",controlId:"event-location",children:[h(A.Label,{children:"Location"}),h(A.Control,{type:"text",name:"eventLocation",value:l.eventLocation,onChange:v,required:!0,autoFocus:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a location."})]}),N(A.Group,{className:"mb-3",controlId:"event-capacity",children:[h(A.Label,{children:"Capacity"}),h(A.Control,{type:"number",min:"1",max:"100",name:"eventCapacity",value:l.eventCapacity,onChange:v,required:!0,autoFocus:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a valid number of attendees."})]}),N(A.Group,{className:"mb-3",controlId:"event-date",children:[h(A.Label,{children:"Date"}),h(A.Control,{type:"date",name:"dateString",onChange:v,value:l.dateString,min:l.currentDate,autoFocus:!0,required:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a valid date."})]}),N(A.Group,{className:"mb-3",controlId:"event-time",children:[h(A.Label,{children:"Time"}),h(A.Control,{type:"time",name:"timeString",onChange:v,value:l.timeString,min:l.dateString===l.currentDate?l.currentTime:"00:00",autoFocus:!0,required:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a valid time."})]}),N(A.Group,{className:"mb-3",controlId:"event-duration",children:[h(A.Label,{children:"Duration (hour)"}),h(A.Control,{type:"number",min:"1",max:"24",step:"0.1",name:"eventDuration",value:l.eventDuration,onChange:v,required:!0,autoFocus:!0}),h(A.Control.Feedback,{type:"invalid",children:"Please provide a valid duration of event."})]}),N(A.Group,{className:"mb-3",controlId:"event-time",children:[h(A.Label,{children:"Skill Level:"}),N(A.Select,{"aria-label":"Default select example",value:l.skillLevel,onChange:v,name:"skillLevel",required:!0,children:[h("option",{value:"",children:"-- choose a skill level --"}),h("option",{value:"Beginner",children:"Beginner"}),h("option",{value:"Intermediate",children:"Intermediate"}),h("option",{value:"Advanced",children:"Advanced"})]}),h(A.Control.Feedback,{type:"invalid",children:"Please select a skill level"})]}),N(A.Group,{className:"mb-3",controlId:"upload-image",children:[h(A.Label,{children:"Update Cover Image (Optional)"}),h(A.Control,{type:"file",name:"imageFile",onChange:v,accept:"image/*"})]}),h("div",{className:"submission-status",children:p===1&&f})]})}),h(ae.Footer,{children:h(yt,{variant:"primary",type:"submit",form:"create-event-form",className:"update-event-button",disabled:p!==0,children:"Update Event"})})]})};const I6="/assets/small-logo-5a7aa8ea.png";function qT({show:t,handleClose:e,data:n,allUsers:r}){if(!n||!r)return"";const{maxCap:i,participants:s,owner:o}=n;return N(ae,{show:t,onHide:e,info:n,centered:!0,backdrop:"static",scrollable:"true",fullscreen:"sm-down",children:[h(ae.Header,{closeButton:!0,children:h(ae.Title,{children:"Event Participants"})}),N(ae.Body,{children:[h("span",{children:"Participants: "})," ",s&&s.length==i&&h("span",{children:"Event is full!"}),h(S3,{className:"modal-participant-list",children:N("tbody",{children:[s&&s.map(a=>N("tr",{className:"participant-list-items",children:[h("td",{children:h("img",{className:"profile-image-modal",src:r[a].photoURL})}),h("td",{className:"participant-list-names",children:N("span",{className:"modal-participant-name",children:[r[a].displayName," ",a==o?"(Owner)":""]})})]},a)),s&&s.length<i&&[...Array(i-s.length)].map((a,l)=>N("tr",{className:"participant-list-items",children:[h("td",{children:h("img",{className:"profile-image-modal",src:I6})}),h("td",{className:"participant-list-names",children:h("span",{className:"empty-participant-name",children:"Empty spot"})})]},l)),s&&s.length==0&&h("tr",{children:h("td",{children:"No participants yet!"})})]})})]})]})}/*! *****************************************************************************
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
***************************************************************************** */var hn=function(){return hn=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},hn.apply(this,arguments)};function N6(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function r0(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t}var QT=function(t){t===void 0&&(t=12);for(var e=8,n=Math.pow(16,Math.min(t,e)-1),r=Math.pow(16,Math.min(t,e))-1,i=Math.floor(Math.random()*(r-n+1))+n,s=i.toString(16);s.length<t;)s=s+QT(t-e);return s},XT="stack",_a="factoryStack";typeof window<"u"&&(window[_a]||(window[_a]={}));var x6=function(t,e){return window[_a][t]=e,e},R6=function(t){delete window[_a][t]},O6=function(t){return window[_a][t||XT]},P6=function(t,e){var n=(t||{}).scope,r=n===void 0?XT:n,i=g.useRef(t),s=g.useState({}),o=s[0],a=s[1],l=g.useState([]),c=l[0],u=l[1],d=g.useCallback(function(T,b){var k;return(k=o==null?void 0:o[T])===null||k===void 0?void 0:k.resolve(b)},[o]),f=g.useCallback(function(T){return Object.values(o).forEach(function(b){return b.resolve(T)})},[o]),p=g.useCallback(function(T,b){var k;return(k=o==null?void 0:o[T])===null||k===void 0?void 0:k.reject(b)},[o]),m=g.useCallback(function(T){return Object.values(o).forEach(function(b){return b.reject(T)})},[o]),w=g.useCallback(function(T){return!!c.find(function(b){return b===T})},[c]),C=g.useCallback(function(T){return o==null?void 0:o[T]},[o]),v=function(T,b){var k;u(function(D){return D.filter(function(M){return M!==T})}),setTimeout(function(){a(function(D){var M=D,H=T;M[H];var Y=N6(M,[typeof H=="symbol"?H:H+""]);return Y})},b==null?void 0:b.exitTimeout),(k=t.onRemove)===null||k===void 0||k.call(t,T)},y=function(T,b,k){return b===void 0&&(b={}),new Promise(function(D,M){var H=(k==null?void 0:k.instanceId)||QT(),Y=i.current,te=Y.enterTimeout,J=Y.exitTimeout,X=Y.isAppendIntances,le=Y.onResolve,B=Y.onReject,I=hn({enterTimeout:te,exitTimeout:J,instanceId:H},b),P=hn({Component:T,props:hn(hn({},b),k),resolve:function(O){_.current(H,I),D(O),le==null||le(O,H)},reject:function(O){_.current(H,I),M(O),B==null||B(O,H)}},I);a(function(O){var W,V;return X?hn(hn({},O),(W={},W[H]=P,W)):hn((V={},V[H]=P,V),O)}),setTimeout(function(){var O,W;u(function(V){return r0(r0([],V),[H])}),(W=(O=i.current).onOpen)===null||W===void 0||W.call(O,H,P)},I.enterTimeout)})},_=g.useRef(v),E=g.useRef(y);g.useEffect(function(){i.current=t,_.current=v,E.current=y}),g.useImperativeHandle(e,function(){return{create:E.current,resolve:d,reject:p,resolveAll:f,rejectAll:m,hasInstance:w,getInstance:C}}),g.useEffect(function(){return x6(r,{create:E.current,resolve:d,reject:p,resolveAll:f,rejectAll:m,hasInstance:w,getInstance:C}),function(){return R6(r)}},[r]);var S=g.useMemo(function(){var T=Object.keys(o);return T.map(function(b){var k=o[b],D=k.Component,M=k.props,H=k.resolve,Y=k.reject,te=!!c.find(function(J){return J===b});return G.createElement(D,hn({},M,{key:b,isOpen:te,onReject:Y,onResolve:H,close:H,open:te}))})},[o,c]);return G.createElement(G.Fragment,null,S)},Ug=g.forwardRef(P6);Ug.defaultProps={exitTimeout:500,enterTimeout:50};var JT=function(t,e){return function(n){return O6(e==null?void 0:e.scope).create(t,e,n)}};const ZT=({isShow:t,onResolve:e,conflictingEventName:n,actionItem:r})=>N(ae,{show:t,backdrop:"static",onHide:()=>e(!1),size:"lg",centered:!0,children:[h(ae.Header,{closeButton:!0,children:N(ae.Title,{children:[r.charAt(0).toUpperCase()+r.slice(1)," event?"]})}),N(ae.Body,{children:["The event that you're trying to ",r," conflicts with one of your other events titled ",h("b",{children:n}),". Are you sure you want to ",r,"?"]}),N(ae.Footer,{children:[h("div",{"data-cy":"modal-confirm-button",children:h(yt,{variant:"primary",className:"confirmation-modal-confirm-button",onClick:()=>e(!0),children:"Confirm"})}),h(yt,{variant:"outline-secondary",className:"confirmation-modal-close-button",onClick:()=>e(!1),children:"Close"})]})]});function eb(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=eb(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Er(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=eb(t))&&(r&&(r+=" "),r+=e);return r}const Mo=t=>typeof t=="number"&&!isNaN(t),Ni=t=>typeof t=="string",Nt=t=>typeof t=="function",Vl=t=>Ni(t)||Nt(t)?t:null,Kd=t=>g.isValidElement(t)||Ni(t)||Nt(t)||Mo(t);function A6(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Wu(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:f}=o;const p=r?`${e}--${l}`:e,m=r?`${n}--${l}`:n,w=g.useRef(0);return g.useLayoutEffect(()=>{const C=d.current,v=p.split(" "),y=_=>{_.target===d.current&&(C.dispatchEvent(new Event("d")),C.removeEventListener("animationend",y),C.removeEventListener("animationcancel",y),w.current===0&&_.type!=="animationcancel"&&C.classList.remove(...v))};C.classList.add(...v),C.addEventListener("animationend",y),C.addEventListener("animationcancel",y)},[]),g.useEffect(()=>{const C=d.current,v=()=>{C.removeEventListener("animationend",v),i?A6(C,u,s):u()};f||(c?v():(w.current=1,C.className+=` ${m}`,C.addEventListener("animationend",v)))},[f]),G.createElement(G.Fragment,null,a)}}function i0(t,e){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}}const Bt={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},Tl=t=>{let{theme:e,type:n,...r}=t;return G.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Yd={info:function(t){return G.createElement(Tl,{...t},G.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return G.createElement(Tl,{...t},G.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return G.createElement(Tl,{...t},G.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return G.createElement(Tl,{...t},G.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return G.createElement("div",{className:"Toastify__spinner"})}};function M6(t){const[,e]=g.useReducer(p=>p+1,0),[n,r]=g.useState([]),i=g.useRef(null),s=g.useRef(new Map).current,o=p=>n.indexOf(p)!==-1,a=g.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:p=>s.get(p)}).current;function l(p){let{containerId:m}=p;const{limit:w}=a.props;!w||m&&a.containerId!==m||(a.count-=a.queue.length,a.queue=[])}function c(p){r(m=>p==null?[]:m.filter(w=>w!==p))}function u(){const{toastContent:p,toastProps:m,staleId:w}=a.queue.shift();f(p,m,w)}function d(p,m){let{delay:w,staleId:C,...v}=m;if(!Kd(p)||function(Y){return!i.current||a.props.enableMultiContainer&&Y.containerId!==a.props.containerId||s.has(Y.toastId)&&Y.updateId==null}(v))return;const{toastId:y,updateId:_,data:E}=v,{props:S}=a,T=()=>c(y),b=_==null;b&&a.count++;const k={...S,style:S.toastStyle,key:a.toastKey++,...v,toastId:y,updateId:_,data:E,closeToast:T,isIn:!1,className:Vl(v.className||S.toastClassName),bodyClassName:Vl(v.bodyClassName||S.bodyClassName),progressClassName:Vl(v.progressClassName||S.progressClassName),autoClose:!v.isLoading&&(D=v.autoClose,M=S.autoClose,D===!1||Mo(D)&&D>0?D:M),deleteToast(){const Y=i0(s.get(y),"removed");s.delete(y),Bt.emit(4,Y);const te=a.queue.length;if(a.count=y==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),te>0){const J=y==null?a.props.limit:1;if(te===1||J===1)a.displayedToast++,u();else{const X=J>te?te:J;a.displayedToast=X;for(let le=0;le<X;le++)u()}}else e()}};var D,M;k.iconOut=function(Y){let{theme:te,type:J,isLoading:X,icon:le}=Y,B=null;const I={theme:te,type:J};return le===!1||(Nt(le)?B=le(I):g.isValidElement(le)?B=g.cloneElement(le,I):Ni(le)||Mo(le)?B=le:X?B=Yd.spinner():(P=>P in Yd)(J)&&(B=Yd[J](I))),B}(k),Nt(v.onOpen)&&(k.onOpen=v.onOpen),Nt(v.onClose)&&(k.onClose=v.onClose),k.closeButton=S.closeButton,v.closeButton===!1||Kd(v.closeButton)?k.closeButton=v.closeButton:v.closeButton===!0&&(k.closeButton=!Kd(S.closeButton)||S.closeButton);let H=p;g.isValidElement(p)&&!Ni(p.type)?H=g.cloneElement(p,{closeToast:T,toastProps:k,data:E}):Nt(p)&&(H=p({closeToast:T,toastProps:k,data:E})),S.limit&&S.limit>0&&a.count>S.limit&&b?a.queue.push({toastContent:H,toastProps:k,staleId:C}):Mo(w)?setTimeout(()=>{f(H,k,C)},w):f(H,k,C)}function f(p,m,w){const{toastId:C}=m;w&&s.delete(w);const v={content:p,props:m};s.set(C,v),r(y=>[...y,C].filter(_=>_!==w)),Bt.emit(4,i0(v,v.props.updateId==null?"added":"updated"))}return g.useEffect(()=>(a.containerId=t.containerId,Bt.cancelEmit(3).on(0,d).on(1,p=>i.current&&c(p)).on(5,l).emit(2,a),()=>{s.clear(),Bt.emit(3,a)}),[]),g.useEffect(()=>{a.props=t,a.isToastActive=o,a.displayedToast=n.length}),{getToastToRender:function(p){const m=new Map,w=Array.from(s.values());return t.newestOnTop&&w.reverse(),w.forEach(C=>{const{position:v}=C.props;m.has(v)||m.set(v,[]),m.get(v).push(C)}),Array.from(m,C=>p(C[0],C[1]))},containerRef:i,isToastActive:o}}function s0(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function o0(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function D6(t){const[e,n]=g.useState(!1),[r,i]=g.useState(!1),s=g.useRef(null),o=g.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=g.useRef(t),{autoClose:l,pauseOnHover:c,closeToast:u,onClick:d,closeOnClick:f}=t;function p(E){if(t.draggable){E.nativeEvent.type==="touchstart"&&E.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",v),document.addEventListener("mouseup",y),document.addEventListener("touchmove",v),document.addEventListener("touchend",y);const S=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=S.getBoundingClientRect(),S.style.transition="",o.x=s0(E.nativeEvent),o.y=o0(E.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=S.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=S.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function m(E){if(o.boundingRect){const{top:S,bottom:T,left:b,right:k}=o.boundingRect;E.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=b&&o.x<=k&&o.y>=S&&o.y<=T?C():w()}}function w(){n(!0)}function C(){n(!1)}function v(E){const S=s.current;o.canDrag&&S&&(o.didMove=!0,e&&C(),o.x=s0(E),o.y=o0(E),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),S.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,S.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function y(){document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",y),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",y);const E=s.current;if(o.canDrag&&o.didMove&&E){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();E.style.transition="transform 0.2s, opacity 0.2s",E.style.transform=`translate${t.draggableDirection}(0)`,E.style.opacity="1"}}g.useEffect(()=>{a.current=t}),g.useEffect(()=>(s.current&&s.current.addEventListener("d",w,{once:!0}),Nt(t.onOpen)&&t.onOpen(g.isValidElement(t.children)&&t.children.props),()=>{const E=a.current;Nt(E.onClose)&&E.onClose(g.isValidElement(E.children)&&E.children.props)}),[]),g.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",w),window.addEventListener("blur",C)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",w),window.removeEventListener("blur",C))}),[t.pauseOnFocusLoss]);const _={onMouseDown:p,onTouchStart:p,onMouseUp:m,onTouchEnd:m};return l&&c&&(_.onMouseEnter=C,_.onMouseLeave=w),f&&(_.onClick=E=>{d&&d(E),o.canCloseOnClick&&u()}),{playToast:w,pauseToast:C,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:_}}function tb(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return G.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},G.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},G.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function L6(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:c,rtl:u,isIn:d,theme:f}=t;const p=s||l&&c===0,m={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:p?0:1};l&&(m.transform=`scaleX(${c})`);const w=Er("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":u}),C=Nt(o)?o({rtl:u,type:i,defaultClassName:w}):Er(w,o);return G.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:C,style:m,[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{d&&r()}})}const F6=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=D6(t),{closeButton:s,children:o,autoClose:a,onClick:l,type:c,hideProgressBar:u,closeToast:d,transition:f,position:p,className:m,style:w,bodyClassName:C,bodyStyle:v,progressClassName:y,progressStyle:_,updateId:E,role:S,progress:T,rtl:b,toastId:k,deleteToast:D,isIn:M,isLoading:H,iconOut:Y,closeOnClick:te,theme:J}=t,X=Er("Toastify__toast",`Toastify__toast-theme--${J}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":b},{"Toastify__toast--close-on-click":te}),le=Nt(m)?m({rtl:b,position:p,type:c,defaultClassName:X}):Er(X,m),B=!!T||!a,I={closeToast:d,type:c,theme:J};let P=null;return s===!1||(P=Nt(s)?s(I):g.isValidElement(s)?g.cloneElement(s,I):tb(I)),G.createElement(f,{isIn:M,done:D,position:p,preventExitTransition:n,nodeRef:r},G.createElement("div",{id:k,onClick:l,className:le,...i,style:w,ref:r},G.createElement("div",{...M&&{role:S},className:Nt(C)?C({type:c}):Er("Toastify__toast-body",C),style:v},Y!=null&&G.createElement("div",{className:Er("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!H})},Y),G.createElement("div",null,o)),P,G.createElement(L6,{...E&&!B?{key:`pb-${E}`}:{},rtl:b,theme:J,delay:a,isRunning:e,isIn:M,closeToast:d,hide:u,type:c,style:_,className:y,controlledProgress:B,progress:T||0})))},Vu=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},$6=Wu(Vu("bounce",!0));Wu(Vu("slide",!0));Wu(Vu("zoom"));Wu(Vu("flip"));const Ln=g.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=M6(t),{className:s,style:o,rtl:a,containerId:l}=t;function c(u){const d=Er("Toastify__toast-container",`Toastify__toast-container--${u}`,{"Toastify__toast-container--rtl":a});return Nt(s)?s({position:u,rtl:a,defaultClassName:d}):Er(d,Vl(s))}return g.useEffect(()=>{e&&(e.current=r.current)},[]),G.createElement("div",{ref:r,className:"Toastify",id:l},n((u,d)=>{const f=d.length?{...o}:{...o,pointerEvents:"none"};return G.createElement("div",{className:c(u),style:f,key:`container-${u}`},d.map((p,m)=>{let{content:w,props:C}=p;return G.createElement(F6,{...C,isIn:i(C.toastId),style:{...C.style,"--nth":m+1,"--len":d.length},key:`toast-${C.key}`},w)}))}))});Ln.displayName="ToastContainer",Ln.defaultProps={position:"top-right",transition:$6,autoClose:5e3,closeButton:tb,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let qd,Xr=new Map,go=[],U6=1;function nb(){return""+U6++}function z6(t){return t&&(Ni(t.toastId)||Mo(t.toastId))?t.toastId:nb()}function Do(t,e){return Xr.size>0?Bt.emit(0,t,e):go.push({content:t,options:e}),e.toastId}function Qc(t,e){return{...e,type:e&&e.type||t,toastId:z6(e)}}function bl(t){return(e,n)=>Do(e,Qc(t,n))}function j(t,e){return Do(t,Qc("default",e))}j.loading=(t,e)=>Do(t,Qc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),j.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Ni(i)?j.loading(i,n):j.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},l=(u,d,f)=>{if(d==null)return void j.dismiss(r);const p={type:u,...a,...n,data:f},m=Ni(d)?{render:d}:d;return r?j.update(r,{...p,...m}):j(m.render,{...p,...m}),f},c=Nt(t)?t():t;return c.then(u=>l("success",o,u)).catch(u=>l("error",s,u)),c},j.success=bl("success"),j.info=bl("info"),j.error=bl("error"),j.warning=bl("warning"),j.warn=j.warning,j.dark=(t,e)=>Do(t,Qc("default",{theme:"dark",...e})),j.dismiss=t=>{Xr.size>0?Bt.emit(1,t):go=go.filter(e=>t!=null&&e.options.toastId!==t)},j.clearWaitingQueue=function(t){return t===void 0&&(t={}),Bt.emit(5,t)},j.isActive=t=>{let e=!1;return Xr.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},j.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=Xr.get(s||qd);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={...r,...e,toastId:e.toastId||t,updateId:nb()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,Do(o,s)}},0)},j.done=t=>{j.update(t,{progress:1})},j.onChange=t=>(Bt.on(4,t),()=>{Bt.off(4,t)}),j.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},j.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Bt.on(2,t=>{qd=t.containerId||t,Xr.set(qd,t),go.forEach(e=>{Bt.emit(0,e.content,e.options)}),go=[]}).on(3,t=>{Xr.delete(t.containerId||t),Xr.size===0&&Bt.off(0).off(1).off(5)});var B6={prefix:"far",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"]},a0={prefix:"far",iconName:"calendar-plus",icon:[448,512,[],"f271","M224 232C237.3 232 248 242.7 248 256V304H296C309.3 304 320 314.7 320 328C320 341.3 309.3 352 296 352H248V400C248 413.3 237.3 424 224 424C210.7 424 200 413.3 200 400V352H152C138.7 352 128 341.3 128 328C128 314.7 138.7 304 152 304H200V256C200 242.7 210.7 232 224 232zM152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"]};const di="/assets/no_event-c9aa5464.png",j6=({eventData:t,user:e,allUsers:n})=>{const[r,i]=g.useState(""),[s,o]=g.useState(!1),[a,l]=g.useState(""),[c,u]=g.useState(!1),[d,f]=g.useState(!1),[p,m]=g.useState(!1),[w,C]=g.useState(!1),[v,y]=g.useState([]),[_,E]=g.useState(null),[S,T]=g.useState(null),[b,k]=g.useState(null),[D,M]=g.useState(null),H=JT(ZT),Y=()=>o(!1),te=()=>{o(!0)},J=async(F,pe,Oe)=>{if(Oe&&["image/gif","image/jpeg","image/png"].includes(Oe.type)){let[Pt,rr]=await Ch(Oe);Pt&&(F.imgSrc=rr,F.owner=e.uid)}else F.imgSrc=a;let Te=L4(),Pe=es();F.id=Te,F.participants.push(e.uid),pe.id=Pe;let at;n[e.uid].events?at={events:[...n[e.uid].events,Te]}:at={events:[Te]};let lt={unreadMessages:[...n[e.uid].unreadMessages,Pe]};try{F4(F,Te,at,e.uid),$4(lt,pe,Pe,e.uid),j.success("Successfully created event!",{position:j.POSITION.TOP_RIGHT})}catch(Pt){console.log(Pt),j.error("Hmm...Something went wrong. Please try again or contact the dev team.",{position:j.POSITION.TOP_RIGHT})}};g.useEffect(()=>{t&&y(Object.values(t))},[r,t]),g.useEffect(()=>{rS("default-cover.png").then(F=>{l(F)}).catch(F=>{console.log(F)})},[]);const X=()=>{let F=r.split(" ").map(pe=>pe.toLowerCase());y(pe=>pe.filter(Oe=>{let Be=Oe.name.toLowerCase();return F.some(Te=>Be.includes(Te))}))};if(t===void 0||e===void 0||n===void 0)return N("div",{className:"event-list",children:[h(Ln,{autoClose:2e3}),N("div",{className:"event-list-tool-bar",children:[h(A,{className:"d-flex search-bar-form",children:N(I_,{direction:"horizontal",gap:1,children:[h(A.Control,{type:"search",placeholder:"Search for an activity",className:"me-2 activity-search-bar","aria-label":"Search",value:r,onKeyPress:F=>ue(F),onChange:F=>i(F.target.value)}),h(vt,{icon:t0,className:"activity-search-bar-search-icon"})]})}),h("div",{className:"add-event-icon","data-cy":"add-event-icon",children:h(vt,{icon:a0,size:"lg",title:"Add event",onClick:te})})]}),N("div",{className:"no-event-container",children:[h("img",{className:"no-event-img",src:di,alt:"no_event"}),h("p",{className:"empty-page-message-event-list",children:"Loading events..."})]}),h(n0,{show:s,handleClose:Y,handleSubmit:J,user:e})]});const le=()=>{C(!0)},B=()=>{C(!1)},I=F=>{T(F)},P=F=>{console.log("Current data: ",F);let pe=new Date(F.dateTimeString),Oe=F.duration,Be=new Date(pe),Te=Math.floor(Oe),Pe=Math.round(Oe%1*60);return Be.setHours(pe.getHours()+Te),Be.setMinutes(Be.getMinutes()+Pe),[pe,Be]},O=F=>{let pe=!1,[Oe,Be]=P(F),Te;if(n[e.uid].events)for(let Pe of n[e.uid].events){if(Pe===F.id)continue;let at=t[Pe],[lt,Pt]=P(at);if(Oe<=Pt&&Be>=lt){pe=!0,Te=at.name;break}}return[pe,Te]},W=async F=>{if(console.log("Joining"),F.participants.length>=F.maxCap){j.error("Sorry the event is full!",{position:j.POSITION.TOP_RIGHT});return}let pe=!0,[Oe,Be]=O(F);if(Oe&&(pe=await H({isShow:!0,conflictingEventName:Be,actionItem:"join"})),pe){const Te=F.id,Pe={participants:[...F.participants,e.uid]};console.log("Updated participants: ",Pe);let at;n[e.uid].events?at={events:[...n[e.uid].events,Te]}:at={events:[Te]};let lt=es(),Pt={title:`New Event Participant for "${F.name}" `,id:lt,content:`Hurrah! We got a new participant! ${n[e.uid].displayName} just joined the event "${F.name}". Welcome to the event ${n[e.uid].displayName}!`,timeStamp:new Date().toUTCString()},rr={unreadMessages:[...n[e.uid].unreadMessages,lt]},Vs={unreadMessages:[...n[F.owner].unreadMessages,lt]},re=await wh(Pe,at,Te,e.uid);if(Eh(Pt,Vs,rr,lt,F.owner,e.uid),!re){j.error("Hmm...Something went wrong. Please try again or contact the dev team.",{position:j.POSITION.TOP_RIGHT});return}j.success("Successfully joined event!",{position:j.POSITION.TOP_RIGHT})}},V=async F=>{let pe=F.participants,Oe=n[e.uid].events;console.log("Curr user events: ",Oe),console.log("Curr participants: ",pe);let Be=F.id,Te={participants:pe.filter(re=>re!==e.uid)},Pe={events:Oe.filter(re=>re!==Be)};console.log("Updated participants: ",Te),console.log("Updated events: ",Pe);let at=await wh(Te,Pe,Be,e.uid),lt=es(),Pt={title:`A Participant Left the Event "${F.name}"`,id:lt,content:`Oh no! ${n[e.uid].displayName} just left the event "${F.name}". Goodbyes are always hard and we're so sad to see you go ${n[e.uid].displayName} :(. `,timeStamp:new Date().toUTCString()},rr={unreadMessages:[...n[e.uid].unreadMessages,lt]},Vs={unreadMessages:[...n[F.owner].unreadMessages,lt]};Eh(Pt,Vs,rr,lt,F.owner,e.uid),at?j.success("Successfully left event!",{position:j.POSITION.TOP_RIGHT}):j.error("Hmm...Something went wrong. Please try again or contact the dev team.",{position:j.POSITION.TOP_RIGHT})},ke=()=>{u(!1)},Se=F=>{E(F),u(!0)},me=()=>f(!1),Re=()=>{f(!0)},St=F=>{k(F)},bn=()=>{m(!0)},tr=()=>{m(!1)},Vr=F=>{M(F)},kn=async()=>{let F=b.participants.map(Pe=>({events:n[Pe].events.filter(Pt=>Pt!==b.id)}));await JC(b.participants,F);let pe=await ZC(b.id);b.imgSrc!==a&&await nS(b.imgSrc),v.length===1&&y([]);let Oe=es();const Be={content:`We're sorry to inform you the event '${b.name}' that you're a part of has been cancelled. Please keep an eye out for new available events, or you can create one yourself! `,title:`Event "${b.name}" Cancelled`,id:Oe,timeStamp:new Date().toUTCString()};let Te=b.participants.map(Pe=>({unreadMessages:[...n[Pe].unreadMessages,Oe]}));tS(Be,Te,b.participants,Oe),pe?j.success("Successfully deleted event!",{position:j.POSITION.TOP_RIGHT}):j.error("Hmm...Something went wrong. Please try again or contact the dev team.",{position:j.POSITION.TOP_RIGHT})},nr=async(F,pe)=>{if(pe&&["image/gif","image/jpeg","image/png"].includes(pe.type)){let[Te,Pe]=await Ch(pe);Te&&(F.imgSrc=Pe)}await eS(F,F.id)?j.success("Successfully edited event!",{position:j.POSITION.TOP_RIGHT}):j.error("Hmm...Something went wrong. Please try again or contact the dev team.",{position:j.POSITION.TOP_RIGHT})},ue=F=>{event.key==="Enter"&&(F.preventDefault(),X())};return N("div",{className:"event-list",children:[h(Ln,{autoClose:2e3}),N("div",{className:"event-list-tool-bar",children:[h(A,{className:"d-flex search-bar-form",children:N(I_,{direction:"horizontal",gap:1,children:[h(A.Control,{type:"search",placeholder:"Search for an activity",className:"me-2 activity-search-bar","aria-label":"Search",value:r,onKeyPress:F=>ue(F),onChange:F=>i(F.target.value)}),h(vt,{icon:t0,className:"activity-search-bar-search-icon"})]})}),h("div",{className:"add-event-icon","data-cy":"add-event-icon",children:h(vt,{icon:a0,size:"lg",title:"Add event",onClick:te})})]}),h(k6,{show:c,handleJoin:W,handleClose:ke,data:_,allUsers:n,"data-testid":"event-modal"}),h(n0,{show:s,handleClose:Y,handleSubmit:J,user:e,allEvents:t,checkConflict:O,createConfirmationModal:H}),h(GT,{show:d,handleClose:me,handleDelete:kn}),h(YT,{show:p,handleClose:tr,handleSubmit:nr,data:D,user:e,allEvents:t,checkConflict:O,createConfirmationModal:H}),h(qT,{show:w,handleClose:B,data:S,allUsers:n}),h(Ug,{}),!v||v.length===0?N("div",{className:"no-event-container",children:[h("img",{className:"no-event-img",src:di,alt:"no_event"}),h("p",{className:"empty-page-message-event-list",children:"No events to display..."})]}):v.map(F=>h(b6,{openModal:Se,openDeleteEventModal:Re,handleSetEventToDelete:St,handleSetEventToEdit:Vr,handleSetEventToShowParticipants:I,openEditEventModal:bn,handleLeave:V,handleJoin:W,handleShowParticipantsModal:le,calculateDateObjects:P,cardData:F,user:e,allUsers:n},F.id))]})};const H6=()=>{const t=bw();Vp();async function e(){await z4(),t("/")}return h("button",{"data-cy":"sign-out",className:"nav-button",onClick:e,children:"Sign out"})},W6=()=>h(H6,{}),Qd=({numberOfUnread:t})=>{const[e,n]=g.useState(location.pathname),r=i=>{n(i)};return h(Fo,{children:h(pl,{expand:"false",className:"bar navbar-expand-lg navbar-light",children:N(_L,{fluid:!0,children:[h(pl.Toggle,{"aria-controls":"offcanvasNavbar"}),h(pl.Brand,{className:"logo",href:"/allEvents",children:"MatchPoint"}),N(pl.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"start",className:"burger-menu",children:[h(jl.Header,{closeButton:!0,children:h(jl.Title,{id:"offcanvasNavbarLabel",children:"MatchPoint"})}),h(jl.Body,{children:N(ho,{className:"justify-content-end flex-grow-1 pe-3",children:[h(ho.Link,{className:`nav-link-events${e==="/allEvents"?"active":""}`,href:"/allEvents",onClick:()=>r("allEvents"),children:"All Events"}),N(ho.Link,{className:`nav-link-inbox ${e==="/inbox"?"active":""}`,href:"/inbox",onClick:()=>r("inbox"),children:["Inbox",t!==0?h("span",{className:"number-of-unread",children:t}):h("span",{})]}),h(ho.Link,{className:`nav-link-profile ${e==="/profile"?"active":""}`,href:"/profile",onClick:()=>r("profile"),children:"Profile"})]})})]}),h(W6,{})]})})})};const V6="/assets/1-8c0ef175.png",G6="/assets/2-01bcd91d.png",K6="/assets/3-1759e013.png",Y6="/assets/4-87ca6e7a.png",q6="/assets/5-959d8486.png",Q6="/assets/6-b28b593a.png",X6="/assets/7-5fcc8bf4.png",J6="/assets/8-67ef8384.png",Z6="/assets/MatchPoint-1-7de25589.gif";var rb={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l0=G.createContext&&G.createContext(rb),Ar=globalThis&&globalThis.__assign||function(){return Ar=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ar.apply(this,arguments)},eF=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function ib(t){return t&&t.map(function(e,n){return G.createElement(e.tag,Ar({key:n},e.attr),ib(e.child))})}function tF(t){return function(e){return G.createElement(nF,Ar({attr:Ar({},t.attr)},e),ib(t.child))}}function nF(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=eF(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),G.createElement("svg",Ar({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Ar(Ar({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&G.createElement("title",null,s),t.children)};return l0!==void 0?G.createElement(l0.Consumer,null,function(n){return e(n)}):e(rb)}function rF(t){return tF({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(t)}const iF=()=>h("div",{className:"sign-in-btn-container",children:N(yt,{variant:"light",className:"sign-in-button",size:"lg","aria-label":"Sign in with google",onClick:U4,children:[h(rF,{className:"google-icon"}),h("span",{children:"Sign in with Google"})]})}),sF=t=>{const e=iS();if(e&&t&&t.allUsers&&t.allUsers&&!t.allUsers[e.uid]){const n={displayName:e.displayName,email:e.email,unreadMessages:["welcome"],photoURL:e.photoURL};D4(n,e.uid)}return e?h(NN,{to:"/allEvents"}):N("div",{className:"landing-page-container",children:[h("img",{className:"landing-img1",src:V6,alt:"landing page image"}),h("img",{className:"landing-img2",src:G6,alt:"landing page image"}),h("img",{className:"landing-img3",src:K6,alt:"landing page image"}),h("img",{className:"landing-img4",src:Y6,alt:"landing page image"}),h("img",{className:"landing-img5",src:q6,alt:"landing page image"}),h("img",{className:"landing-img6",src:Q6,alt:"landing page image"}),h("img",{className:"landing-img7",src:X6,alt:"landing page image"}),h("img",{className:"landing-img8",src:J6,alt:"landing page image"}),N("div",{className:"col-right",children:[N("div",{className:"logo-container",children:[h(dg,{src:Z6,className:"small-logo",alt:"small MatchPoint app gif logo"}),h("h1",{className:"app-name","data-cy":"app-name",children:"MatchPoint"})]}),h("h3",{className:"blurb",children:"We help students create or join sporting events that pique their interests!"}),h(iF,{})]})]})};const c0=({message:t,allUsers:e,user:n,showModal:r,setCurrentMessageToDisplay:i,isRead:s,displayDeletedMesasge:o})=>{if(t===void 0||e===void 0||n===void 0)return"";const[a,l]=g.useState(null);g.useEffect(()=>{if(t!==void 0&&t.timeStamp!=="undated"){let{month:f,day:p,year:m,hours:w,minutes:C,seconds:v,weekday:y}=KT(t.timeStamp);l({month:f,day:p,year:m,hours:w,minutes:C,seconds:v,weekday:y})}},[t]);const c=()=>{u(),i(t),r()},u=()=>{if(t.id==="welcome")return;let f={};if(e[n.uid].readMessages){if(!e[n.uid].readMessages.includes(t.id)){let p=e[n.uid].unreadMessages;p=p.filter(m=>m!==t.id),f.unreadMessages=p,f.readMessages=[...e[n.uid].readMessages,t.id],dl(f,n.uid)}}else{let p=e[n.uid].unreadMessages;p=p.filter(m=>m!==t.id),f.unreadMessages=p,f.readMessages=[t.id],dl(f,n.uid)}},d=f=>{f.stopPropagation();let p={};if(e[n.uid].readMessages){let m=e[n.uid].unreadMessages,w=e[n.uid].readMessages;m=m.filter(C=>C!==t.id),w=w.filter(C=>C!==t.id),p.unreadMessages=m,p.readMessages=w,dl(p,n.uid),o()}else{let m=e[n.uid].unreadMessages;m=m.filter(w=>w!==t.id),p.unreadMessages=m,p.readMessages=[],dl(p,n.uid)}};return h("div",{className:"message"+(s?" read":"")+(t.id==="welcome"?" default":" custom"),onClick:c,children:N("div",{className:"message-upper-container",children:[h(vt,{icon:w6,className:"unread-dot"+(s?" read":"")}),h("h2",{className:"message-card-title"+(s?" read":""),children:t.title}),N("div",{className:"date-and-delete-container",children:[a&&h("span",{className:"date-string"+(s?" read":""),children:a.year!=new Date().getFullYear()?`${a.month}/${a.day}/${a.year}`:`${a.weekday} ${a.month}/${a.day}`}),t.id!=="welcome"&&h(vt,{icon:B6,className:"delete-message-icon",size:"lg",onClick:d})]})]})})};const oF=({show:t,handleClose:e,messageData:n})=>N(ae,{show:t,backdrop:"static",fullscreen:"sm-down",size:"lg",scrollable:"true",centered:!0,onHide:e,children:[h(ae.Header,{closeButton:!0,children:h(ae.Title,{children:n.title})}),h(ae.Body,{children:n.content}),h(ae.Footer,{children:h(yt,{variant:"primary",onClick:()=>{e()},className:"message-modal-confirm-button",children:"Got it"})})]});const aF=({allUsers:t,user:e,allMessages:n})=>{const[r,i]=g.useState(!1),[s,o]=g.useState(null),a=()=>{i(!0)},l=()=>{i(!1)},c=()=>{j.success("Successfully deleted message!",{position:j.POSITION.TOP_RIGHT})},u=m=>{o(m)};if(console.log(e),console.log(t),console.log("All messages: ",n),e==null||t==null||n==null||t[e.uid]==null||t[e.uid].unreadMessages==null&&t[e.uid].readMessages==null)return h("div",{className:"message-list",children:N("div",{className:"loading-container",children:[h("img",{className:"no-message-img",src:di,alt:"Loading"}),h("p",{className:"empty-page-message-message-list",children:"Loading messages ..."})]})});let d=[];t[e.uid].unreadMessages&&(d=[...d,...t[e.uid].unreadMessages]),t[e.uid].readMessages&&(d=[...d,...t[e.uid].readMessages]);let f=Object.entries(d).filter(([m,w])=>t[e.uid].unreadMessages.includes(w)),p=Object.entries(d).filter(([m,w])=>!t[e.uid].unreadMessages.includes(w));return N("div",{className:"inbox-wrapper",children:[h(Ln,{autoClose:500}),N(Uu,{defaultActiveKey:"unread",className:"mb-3 message-list-tabs",children:[h(Vc,{className:"message-list-tab",eventKey:"unread",title:"Unread",children:h("div",{className:"message-list",children:f.length>0?f.map(([m,w])=>h(c0,{message:n[w],allUsers:t,user:e,setCurrentMessageToDisplay:u,showModal:a,isRead:!t[e.uid].unreadMessages.includes(w),displayDeletedMesasge:c},m)):N("div",{className:"empty-message-container",children:[h("img",{className:"no-message-img",src:di,alt:"Loading"}),h("p",{children:"You don't have any unread messages..."})]})})}),h(Vc,{className:"message-list-tab",eventKey:"read",title:"Read",children:h("div",{className:"message-list",children:p.length>0?p.map(([m,w])=>h(c0,{message:n[w],allUsers:t,user:e,setCurrentMessageToDisplay:u,showModal:a,isRead:!t[e.uid].unreadMessages.includes(w),displayDeletedMesasge:c},m)):N("div",{className:"empty-message-container",children:[h("img",{className:"no-message-img",src:di,alt:"Loading"}),h("p",{children:"You don't have any read messages..."})]})})})]}),s&&h(oF,{handleClose:l,messageData:s,show:r})]})};function lF({imgSrc:t,width:e,height:n}){return e&&n||(e=100,n=100),h("img",{style:{img:{width:e,height:n,borderRadius:"50%"}}.img,src:t})}const cF=({event:t,allUsers:e,user:n,handleSetEventToShowParticipants:r,handleShowParticipantsModal:i,handleSetEventToDelete:s,openDeleteEventModal:o,handleSetEventToEdit:a,openEditEventModal:l,handleLeave:c})=>{const[u,d]=g.useState(null),[f,p]=g.useState(null),[m,w]=g.useState([]),C=_=>{let E=new Date(_.dateTimeString),S=_.duration,T=new Date(E),b=Math.floor(S),k=Math.round(S%1*60);return T.setHours(E.getHours()+b),T.setMinutes(T.getMinutes()+k),[E,T]};g.useEffect(()=>{if(t&&e){let _=[];for(let T=0;T<Math.min(5,t.participants.length);T++)_.push({photoURL:e[t.participants[T]].photoURL,displayName:e[t.participants[T]].displayName});w(_);let[E,S]=C(t);d(E),p(S)}},[t]);const v=()=>{s(t),o()},y=()=>{a(t),l()};return N(jc,{className:"user-card",children:[N("div",{className:"card-header",children:[h(jc.Title,{className:"user-event-card-title",children:t.name}),h("div",{className:"date-location-container",children:N("p",{children:[" ",new Date(t.dateTimeString).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0,timeZone:"CST"})+" - "+t.location]})}),h("hr",{className:"solid"}),h("div",{className:"user-event-description-container",children:h("p",{className:"user-event-card-description",children:t.desc})}),h("div",{className:"user-event-participants-container",children:N(po,{children:[h("h3",{className:"user-event-participant-title",children:"Participants:"}),N("p",{className:"user-event-participant-list-container",onClick:()=>{i(),r(t)},children:[m.map(_=>{let E=_.photoURL,S=_.displayName;return h("img",{className:"user-event-participant-profile-image",src:E,alt:S,title:S},m.indexOf(_))}),t.participants.length>5&&h("img",{className:"user-event-participant-profile-image",src:VT,title:"more"})]})]})})]}),N("div",{className:"card-footer",children:[n&&t.owner===n.uid&&h(yt,{onClick:y,variant:"warning",size:"lg",className:"event-card-button edit-event-button profile-button",children:"Edit Event"}),n&&t.owner===n.uid&&h(yt,{onClick:v,variant:"danger",size:"lg",className:"event-card-button delete-event-button profile-button",children:"Delete Event"}),t.participants.includes(n.uid)&&t.owner!==n.uid&&h(yt,{size:"lg",className:"event-card-button leave-event-button profile-button",onClick:()=>{c(t)},children:"Leave Event"})]})]})};const u0=({events:t,renderEvents:e,user:n,users:r})=>{const[i,s]=g.useState(!1),[o,a]=g.useState(null),[l,c]=g.useState(!1),[u,d]=g.useState(!1),[f,p]=g.useState(null),[m,w]=g.useState(null),[C,v]=g.useState(""),y=JT(ZT);g.useEffect(()=>{rS("default-cover.png").then(B=>{v(B)}).catch(B=>{console.log(B)})},[]);const _=()=>{s(!0)},E=()=>{s(!1)},S=B=>{a(B)},T=()=>c(!1),b=()=>{c(!0)},k=async B=>{let I=B.participants,P=r[n.uid].events;console.log("Curr user events: ",P),console.log("Curr participants: ",I);let O=B.id,W={participants:I.filter(bn=>bn!==n.uid)},V={events:P.filter(bn=>bn!==O)};console.log("Updated participants: ",W),console.log("Updated events: ",V);let ke=await wh(W,V,O,n.uid),Se=es(),me={title:`A Participant Left the Event "${B.name}"`,id:Se,content:`Oh no! ${r[n.uid].displayName} just left the event "${B.name}". Goodbyes are always hard and we're so sad to see you go ${r[n.uid].displayName} :(. `,timeStamp:new Date().toUTCString()},Re={unreadMessages:[...r[n.uid].unreadMessages,Se]},St={unreadMessages:[...r[B.owner].unreadMessages,Se]};Eh(me,St,Re,Se,B.owner,n.uid),ke?j.success("Successfully left event!",{position:j.POSITION.TOP_RIGHT}):j.error("Hmm...Something went wrong. Please try again or contact the dev team.",{position:j.POSITION.TOP_RIGHT})},D=B=>{p(B)},M=()=>{d(!0)},H=()=>{d(!1)},Y=B=>{w(B)},te=async()=>{let B=f.participants.map(V=>({events:r[V].events.filter(me=>me!==f.id)}));await JC(f.participants,B);let I=await ZC(f.id);f.imgSrc!==C&&await nS(f.imgSrc),t.length===1&&setEvents([]);let P=es();const O={content:`We're sorry to inform you the event '${f.name}' that you're a part of has been cancelled. Please keep an eye out for new available events, or you can create one yourself! `,title:`Event "${f.name}" Cancelled`,id:P,timeStamp:new Date().toUTCString()};let W=f.participants.map(V=>({unreadMessages:[...r[V].unreadMessages,P]}));tS(O,W,f.participants,P),I?j.success("Successfully deleted event!",{position:j.POSITION.TOP_RIGHT}):j.error("Hmm...Something went wrong. Please try again or contact the dev team.",{position:j.POSITION.TOP_RIGHT})},J=async(B,I)=>{if(I&&["image/gif","image/jpeg","image/png"].includes(I.type)){let[W,V]=await Ch(I);W&&(B.imgSrc=V)}await eS(B,B.id)?j.success("Successfully edited event!",{position:j.POSITION.TOP_RIGHT}):j.error("Hmm...Something went wrong. Please try again or contact the dev team.",{position:j.POSITION.TOP_RIGHT})},X=B=>{let I=!1,[P,O]=le(B),W;if(r[n.uid].events)for(let V of r[n.uid].events){if(V===B.id)continue;let ke=t[V],[Se,me]=le(ke);if(P<=me&&O>=Se){I=!0,W=ke.name;break}}return[I,W]},le=B=>{console.log("Current data: ",B);let I=new Date(B.dateTimeString),P=B.duration,O=new Date(I),W=Math.floor(P),V=Math.round(P%1*60);return O.setHours(I.getHours()+W),O.setMinutes(O.getMinutes()+V),[I,O]};return t&&e?N("div",{className:"user-profile-events-container",children:[h(Ug,{}),h(GT,{show:l,handleClose:T,handleDelete:te}),h(YT,{show:u,handleClose:H,handleSubmit:J,data:m,user:n,allEvents:t,checkConflict:X,createConfirmationModal:y}),h(qT,{show:i,handleClose:E,data:o,allUsers:r}),e.map(B=>h(cF,{allUsers:r,user:n,event:t[B],handleShowParticipantsModal:_,handleSetEventToShowParticipants:S,handleSetEventToDelete:D,openDeleteEventModal:b,handleSetEventToEdit:Y,openEditEventModal:M,handleLeave:k},B))]}):h("div",{className:"",children:h("p",{children:"Unable to display profile..."})})},uF=({allUsers:t,user:e,allEvents:n})=>{g.useState(!1),g.useState({}),console.log(e);const r=g.useRef(null);let i=!1;if(e==null||t==null)return i||(i=!0,r.current=setTimeout(()=>{console.log("Failed to load"),i=!1},1e3)),h("div",{children:h("p",{className:"profile-loading-message",children:i?"Loading...":"Unable to load profile. Please try again later"})});if(t[e.uid]){clearTimeout(r.current),console.log("done loading");let s=[],o=[];return t[e.uid].events&&(s=t[e.uid].events.filter(a=>new Date(n[a].dateTimeString)>new Date),o=t[e.uid].events.filter(a=>new Date(n[a].dateTimeString)<=new Date)),console.log("Upcoming events: ",s),console.log("Past events: ",o),N("div",{className:"user-profile-container",children:[N("div",{className:"profile-top",children:[h(lF,{imgSrc:e.photoURL}),h("p",{className:"user-profile-title",children:t[e.uid].displayName})]}),N(Uu,{defaultActiveKey:"upcoming",className:"mb-3 profile-tabs",children:[h(Vc,{className:"profile-tab-upcoming",eventKey:"upcoming",title:"Upcoming",children:s.length===0?N("div",{children:[h(Ln,{autoClose:2e3}),h("img",{className:"no-event-img",src:di,alt:"no_event"}),h("p",{children:"You don't have any upcoming events. Please create one, or join one from the All Events tab!"})]}):N("div",{children:[h(Ln,{autoClose:2e3}),h(u0,{events:n,renderEvents:s,user:e,users:t})]})}),h(Vc,{className:"profile-tab-past",eventKey:"past",title:"Past",children:o.length===0?N("div",{children:[h(Ln,{autoClose:2e3}),h("img",{className:"no-event-img",src:di,alt:"no_event"}),h("p",{children:"You don't have any past events."})]}):N("div",{children:[h(Ln,{autoClose:2e3}),h(u0,{events:n,renderEvents:o,user:e,users:t})]})})]})]})}},dF=()=>{const t=iS(),[e,n]=Ld("/events"),[r,i]=Ld("/users"),[s,o]=Ld("/messages");n?console.log(n):i?console.log(i):o&&console.log(o);const[a,l]=g.useState(0);return g.useEffect(()=>{t&&r&&r[t.uid]&&r[t.uid].unreadMessages&&l(r[t.uid].unreadMessages.length)}),h(ON,{children:N(RN,{children:[h(uo,{path:"/",element:h("div",{children:h(sF,{allUsers:r})})}),h(uo,{path:"/allEvents",element:N("div",{children:[h(Qd,{numberOfUnread:a}),h(j6,{eventData:e,user:t,allUsers:r})]})}),h(uo,{path:"/profile",element:N("div",{children:[h(Qd,{numberOfUnread:a}),h(uF,{allUsers:r,user:t,allEvents:e})]})}),h(uo,{path:"/inbox",element:N("div",{children:[h(Qd,{numberOfUnread:a}),h(aF,{allUsers:r,user:t,allMessages:s})]})})]})})};const fF=Jd.createRoot(document.getElementById("root"));fF.render(h(G.StrictMode,{children:h(dF,{})}));
