"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[433],{86029:function(e,t,r){r.d(t,{W:function(){return o}});var n=r(2784);function o(e){const t=n.useRef(e);return n.useEffect((()=>{t.current=e})),n.useMemo((()=>(...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}},68683:function(e,t,r){r.d(t,{F:function(){return l},e:function(){return f}});var n=r(2784);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=Object.defineProperty,u=function(e,t){return a(e,"name",{value:t,configurable:!0})};function c(e,t){"function"===typeof e?e(t):null!==e&&void 0!==e&&(e.current=t)}function l(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.forEach((function(t){return c(t,e)}))}}function f(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.useCallback(l.apply(void 0,i(t)),t)}u(c,"setRef"),u(l,"composeRefs"),u(f,"useComposedRefs")},92682:function(e,t,r){r.d(t,{b:function(){return b},k:function(){return d}});var n=r(52322),o=r(2784);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function l(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=Object.defineProperty,s=function(e,t){return f(e,"name",{value:t,configurable:!0})};function d(e,t){var r=function(e){var t=e.children,r=c(e,["children"]),i=o.useMemo((function(){return r}),Object.values(r));return(0,n.jsx)(a.Provider,{value:i,children:t})},i=function(r){var n=o.useContext(a);if(n)return n;if(void 0!==t)return t;throw new Error("`".concat(r,"` must be used within `").concat(e,"`"))},a=o.createContext(t);return s(r,"Provider"),s(i,"useContext"),r.displayName=e+"Provider",[r,i]}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=function(t,r){var a=o.createContext(r),u=i.length;function f(t){var r=t.scope,i=t.children,l=c(t,["scope","children"]),f=(null==r?void 0:r[e][u])||a,s=o.useMemo((function(){return l}),Object.values(l));return(0,n.jsx)(f.Provider,{value:s,children:i})}function d(n,i){var c=(null==i?void 0:i[e][u])||a,l=o.useContext(c);if(l)return l;if(void 0!==r)return r;throw new Error("`".concat(n,"` must be used within `").concat(t,"`"))}return i=l(i).concat([r]),s(f,"Provider"),s(d,"useContext"),f.displayName=t+"Provider",[f,d]},i=[];s(r,"createContext");var f=s((function(){var t=i.map((function(e){return o.createContext(e)}));return s((function(r){var n=(null==r?void 0:r[e])||t;return o.useMemo((function(){return a({},"__scope".concat(e),u({},r,a({},e,n)))}),[r,n])}),"useScope")}),"createScope");return f.scopeName=e,[r,h.apply(void 0,[f].concat(l(t)))]}function h(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t[0];if(1===t.length)return n;var i=s((function(){var e=t.map((function(e){return{useScope:e(),scopeName:e.scopeName}}));return s((function(t){var r=e.reduce((function(e,r){var n=r.useScope,o=r.scopeName;return u({},e,n(t)["__scope".concat(o)])}),{});return o.useMemo((function(){return a({},"__scope".concat(n.scopeName),r)}),[r])}),"useComposedScopes")}),"createScope");return i.scopeName=n.scopeName,i}s(d,"createContext"),s(b,"createContextScope"),s(h,"composeContextScopes")},91433:function(e,t,r){r.r(t),r.d(t,{default:function(){return M}});var n=r(52322),o=r(68683),i=r(68970),a=Object.defineProperty,u=(e,t)=>a(e,"name",{value:t,configurable:!0});const c=u(((e,t=0)=>{const r=(0,i.lz)().size,n=Object.keys(r);return r[n[Math.max(0,n.indexOf(String(e||"$4"))+t)]]||r.$4}),"getSize");var l=r(45482),f=r(63035),s=r(59699),d=r(92682),b=r(56695),h=r(23917),m=r(2784);function p(e){var t=m.useRef({value:e,previous:e});return m.useMemo((function(){return t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous}),[e])}(0,Object.defineProperty)(p,"name",{value:"usePrevious",configurable:!0});var y=r(63862),v=r(73456);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){w(e,t,r[t])}))}return e}function j(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=Object.defineProperty,S=function(e,t){return O(e,"name",{value:t,configurable:!0})},k="Switch",z=(0,d.b)(k),R=x(z,1)[0],P=(z[1],x(R(k),2)),C=P[0],A=P[1],E=S((function(e,t){return(0,v.k)(c(e,1),t)}),"getSwitchHeight"),$=S((function(e,t){return(0,v.k)(c(e,3),t)}),"getSwitchWidth"),I=(0,l.z)(b.sL,{name:"Switch",tag:"button",borderRadius:1e3,borderWidth:0,variants:{size:{"...size":function(e,t){var r=E(e,t),n=r.height,o=r.minHeight,i=r.maxHeight,a=$(e,t);return{height:n,minHeight:o,maxHeight:i,width:a.width,minWidth:a.minWidth,maxWidth:a.maxWidth}}}},defaultVariants:{size:"$4"}}),L=m.forwardRef((function(e,t){var r=e.__scopeSwitch,i=e.labeledBy,a=e.name,u=e.checked,c=e.defaultChecked,l=e.required,f=e.disabled,s=e.value,d=void 0===s?"on":s,b=e.onCheckedChange,p=e.size,v=void 0===p?"$4":p,g=j(e,["__scopeSwitch","labeledBy","name","checked","defaultChecked","required","disabled","value","onCheckedChange","size"]),w=x(m.useState(null),2),O=w[0],S=w[1],k=(0,o.e)(t,(function(e){return S(e)})),z=(0,y.t0)(O),R=i||z,P=m.useRef(!1),A=!O||Boolean(O.closest("form")),E=x((0,h.T)({prop:u,defaultProp:c||!1,onChange:b}),2),$=E[0],L=void 0!==$&&$,T=E[1];return(0,n.jsxs)(C,{scope:r,checked:L,disabled:f,size:v,children:[(0,n.jsx)(I,_({size:v,role:"switch","aria-checked":L,"aria-labelledby":R,"aria-required":l,"data-state":F(L),"data-disabled":f?"":void 0,disabled:f,value:d},g,{ref:k,onPress:function(t){var r;null==(r=e.onPress)||r.call(e,t),T((function(e){return!e})),A&&(P.current=t.isPropagationStopped(),P.current||t.stopPropagation())}})),A&&(0,n.jsx)(q,{control:O,bubbles:!P.current,name:a,value:d,checked:L,required:l,disabled:f,style:{transform:"translateX(-100%)"}})]})}));L.displayName=k;var T=I.extractable((0,f.Y)(L),{neverFlatten:!0}),H="SwitchThumb",W=(0,l.z)(b.sL,{name:"SwitchThumb",backgroundColor:"$color",borderRadius:1e3,variants:{size:{"...size":E}},defaultVariants:{size:"$4"}}),N=W.extractable(m.forwardRef((function(e,t){var r=e.__scopeSwitch,o=j(e,["__scopeSwitch"]),i=A(H,r),a=i.size,u=i.disabled,l=i.checked;return(0,n.jsx)(W,_({size:a,"data-state":F(l),"data-disabled":u?"":void 0},o,{x:l?(0,s.Ve)(c(a,3))-(0,s.Ve)(c(a,1)):0,ref:t}))})),{neverFlatten:!0});N.displayName=H,T.Thumb=N;var q=S((function(e){e.control;var t=e.checked,r=e.bubbles,o=void 0===r||r,i=j(e,["control","checked","bubbles"]),a=m.useRef(null),u=p(t);return m.useEffect((function(){var e=a.current,r=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(r,"checked").set;if(u!==t&&n){var i=new Event("click",{bubbles:o});n.call(e,t),e.dispatchEvent(i)}}),[u,t,o]),(0,n.jsx)("input",_({type:"checkbox","aria-hidden":!0,defaultChecked:t},i,{tabIndex:-1,ref:a,style:_({},e.style,{position:"absolute",pointerEvents:"none",opacity:0,margin:0})}))}),"BubbleInput");function F(e){return e?"checked":"unchecked"}S(F,"getState");function M(){return(0,n.jsxs)(b.FA,{alignItems:"_ai-1awozwy",width:"_w-1ipicw7",space:"$1",children:[(0,n.jsxs)(b.sL,{alignItems:"_ai-1awozwy",space:"$2",children:[(0,n.jsx)(y.__,{tag:"label",size:"$2",borderBottomLeftRadius:"_bblr-16of09f",borderBottomRightRadius:"_bbrr-1lf30or",borderTopLeftRadius:"_btlr-9bfr1a",borderTopRightRadius:"_btrr-h7h2ax",color:"_col-1gcmrwd",fontFamily:"_fofam-1f1w1o8",fontSize:"_fos-n6v787",fontWeight:"_fow-1od2jal",letterSpacing:"_letsp-oxtfae",lineHeight:"_lh-135wba7",minHeight:"_mih-1vsu8ta",paddingLeft:"_pl-1dsia8u",paddingRight:"_pr-wsh07t",htmlFor:"switch-1",children:"Dark mode"}),(0,n.jsx)(T,{tag:"button",id:"switch-1",size:"$2",height:"_h-ll8gdx",maxHeight:"_mah-1u9d64z",maxWidth:"_maw-ba78bg",minHeight:"_mih-1f2ialv",minWidth:"_miw-xjylmr",width:"_w-3zc0nh",children:(0,n.jsx)(T.Thumb,{animation:"bouncy"})})]}),(0,n.jsxs)(b.sL,{alignItems:"_ai-1awozwy",space:"$2",children:[(0,n.jsx)(y.__,{tag:"label",size:"$3",borderBottomLeftRadius:"_bblr-q9mco7",borderBottomRightRadius:"_bbrr-yqu18q",borderTopLeftRadius:"_btlr-n725eh",borderTopRightRadius:"_btrr-nc5cgv",color:"_col-1gcmrwd",fontFamily:"_fofam-1f1w1o8",fontSize:"_fos-1b43r93",fontWeight:"_fow-1od2jal",letterSpacing:"_letsp-oxtfae",lineHeight:"_lh-waer2z",minHeight:"_mih-1ov1q5u",paddingLeft:"_pl-m2pi6t",paddingRight:"_pr-1hvjb8t",htmlFor:"switch-2",children:"Dark mode"}),(0,n.jsx)(T,{tag:"button",id:"switch-2",size:"$3",height:"_h-1878k13",maxHeight:"_mah-vcmv3f",maxWidth:"_maw-1ou0gya",minHeight:"_mih-1i5i5l1",minWidth:"_miw-11rdig3",width:"_w-1gnxyq3",children:(0,n.jsx)(T.Thumb,{animation:"bouncy"})})]}),(0,n.jsxs)(b.sL,{alignItems:"_ai-1awozwy",space:"$2",children:[(0,n.jsx)(y.__,{tag:"label",size:"$4",borderBottomLeftRadius:"_bblr-jttyys",borderBottomRightRadius:"_bbrr-wae8j0",borderTopLeftRadius:"_btlr-zfawj4",borderTopRightRadius:"_btrr-1cvu0hm",color:"_col-1gcmrwd",fontFamily:"_fofam-1f1w1o8",fontSize:"_fos-a023e6",fontWeight:"_fow-1od2jal",letterSpacing:"_letsp-oxtfae",lineHeight:"_lh-1kt6imw",minHeight:"_mih-1vuscfd",paddingLeft:"_pl-1ss6j8a",paddingRight:"_pr-1qortcd",htmlFor:"switch-3",children:"Dark mode"}),(0,n.jsx)(T,{tag:"button",id:"switch-3",size:"$4",height:"_h-dv9pw8",maxHeight:"_mah-mgbpes",maxWidth:"_maw-1iqctsz",minHeight:"_mih-5pnkls",minWidth:"_miw-o2pj4o",width:"_w-1izedky",children:(0,n.jsx)(T.Thumb,{animation:"bouncy"})})]}),(0,n.jsxs)("div",{className:" _ai-1awozwy _boxs-deolkf _disp-6koalj _fb-1mlwlqe _fd-18u37iz _fs-1q142lx ",children:[(0,n.jsx)(y.__,{tag:"label",size:"$5",borderBottomLeftRadius:"_bblr-1dmmkbk",borderBottomRightRadius:"_bbrr-6dt042",borderTopLeftRadius:"_btlr-b75cpd",borderTopRightRadius:"_btrr-u8nydt",color:"_col-1gcmrwd",fontFamily:"_fofam-1f1w1o8",fontSize:"_fos-1b6yd1w",fontWeight:"_fow-1od2jal",letterSpacing:"_letsp-oxtfae",lineHeight:"_lh-1c92x1x",minHeight:"_mih-116um31",paddingLeft:"_pl-1m04atk",paddingRight:"_pr-1pyaxff",htmlFor:"switch-4",children:"Dark mode"}),(0,n.jsx)(T,{tag:"button",id:"switch-4",size:"$5",height:"_h-su0nr0",maxHeight:"_mah-1piw381",maxWidth:"_maw-1rqzen7",minHeight:"_mih-1piye6b",minWidth:"_miw-qzcrye",width:"_w-gxeogz",children:(0,n.jsx)(T.Thumb,{animation:"bouncy"})})]})]})}},63862:function(e,t,r){r.d(t,{__:function(){return C},t0:function(){return A}});var n=r(52322),o=r(87561),i=r(68683),a=r(45482),u=r(54503),c=r(63035),l=r(92682),f=r(2784),s=r(67249),d=r(9388),b=r(65637);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){m(e,t,r[t])}))}return e}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var v,g,w=Object.defineProperty,_=function(e,t){return w(e,"name",{value:t,configurable:!0})},j="Label",x=(v=(0,l.k)(j,{id:void 0,controlRef:{current:null}}),g=2,function(e){if(Array.isArray(e))return e}(v)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(v,g)||function(e,t){if(e){if("string"===typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(v,g)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),O=x[0],S=x[1],k=(0,s.a)(),z=d.z,R=(0,a.z)(b.J,{name:"Label",tag:"label",size:"$4",backgroundColor:"transparent",display:"flex",alignItems:"center",justifyContent:"center",cursor:"default",pressStyle:{color:"$colorPress"},variants:{size:{"...size":function(e,t){return p({},k(e,t),z(e,t))}}}}),P=f.forwardRef((function(e,t){var r=e.htmlFor,a=e.id,c=y(e,["htmlFor","id"]),l=f.useRef(null),s=f.useRef(null),d=(0,i.e)(t,s),b=(0,o.Me)(a);return u.$L&&f.useEffect((function(){if(r){var e=document.getElementById(r);if(s.current&&e){var t=_((function(){return e.getAttribute("aria-labelledby")}),"getAriaLabel"),n=[b,t()].filter(Boolean).join(" ");return e.setAttribute("aria-labelledby",n),l.current=e,function(){var r,n=null==(r=t())?void 0:r.replace(b,"");""===n?e.removeAttribute("aria-labelledby"):n&&e.setAttribute("aria-labelledby",n)}}}}),[b,r]),(0,n.jsx)(O,{id:b,controlRef:l,children:(0,n.jsx)(R,p({role:"label",id:b},c,{ref:d,onMouseDown:function(t){var r;null==(r=e.onMouseDown)||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()},onPress:function(t){var r;if(null==(r=e.onPress)||r.call(e,t),l.current&&!t.defaultPrevented){var n=l.current.contains(t.target),o=!0===t.isTrusted;!n&&o&&(l.current.click(),l.current.focus())}}}))})}));P.displayName=j;var C=R.extractable((0,c.Y)(P),{neverFlatten:!0}),A=_((function(e){var t=S("LabelConsumer"),r=t.controlRef;return f.useEffect((function(){e&&(r.current=e)}),[e,r]),t.id}),"useLabelContext")},23917:function(e,t,r){r.d(t,{T:function(){return u}});var n=r(86029),o=r(2784),i=Object.defineProperty,a=function(e,t){return i(e,"name",{value:t,configurable:!0})};function u(e){var t=e.prop,r=e.defaultProp,i=e.onChange,a=e.strategy,u=void 0===a?"prop-wins":a,l=(0,o.useRef)(t),f=(0,n.W)(i),s=(0,o.useState)(null!=t?t:r),d=s[0],b=s[1],h="prop-wins"===u;return(0,o.useEffect)((function(){l.current=t,b((function(e){return c(e,t,f)}))}),[t]),[d,(0,o.useCallback)((function(e){h&&void 0!==l.current||b((function(t){return c(t,"function"===typeof e?e(t):e,f)}))}),[b,h])]}a(u,"useControllableState");var c=a((function(e,t,r){return e===t||void 0===t?e:(r(t),t)}),"getNextStateWithCallback")}}]);