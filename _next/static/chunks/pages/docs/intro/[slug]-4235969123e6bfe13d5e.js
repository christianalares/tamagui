(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[972],{628:function(e,t,n){"use strict";n.d(t,{W:function(){return w}});var r=n(9097),a=n(2784),l=n(5558),i=n(8042),o=n(8303),c=n(4371),u=n(1801),f=n(9099);function s(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,l=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw l}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=Object.defineProperty,m=Object.defineProperties,g=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,v=function(e,t,n){return t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},b=function(e){var t,n,l=e,i=l.href,c=function(e,t){var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p){var a,l=s(p(e));try{for(l.s();!(a=l.n()).done;)r=a.value,t.indexOf(r)<0&&y.call(e,r)&&(n[r]=e[r])}catch(i){l.e(i)}finally{l.f()}}return n}(l,["href"]);return a.createElement(r.default,{passHref:!0,href:i},a.createElement(o.n,(t=function(e,t){for(var n in t||(t={}))h.call(t,n)&&v(e,n,t[n]);if(p){var r,a=s(p(t));try{for(a.s();!(r=a.n()).done;)n=r.value,y.call(t,n)&&v(e,n,t[n])}catch(l){a.e(l)}finally{a.f()}}return e}({tag:"a"},c),n={className:(0,f.concatClassName)(" _boxSizing-deolkf _color-1gcmrwd _display-1471scf _fontFamily-ia93fe _lineHeight-p0j6p4 _paddingBottom-1pwmhhh _paddingTop-f83l11 _wordWrap-qvutc0 _color-1gcmrwd _cursor-1loqt21 _fontSize-3zobxw _opacity-icoktb _opacity--hover-6dt33c "+(c&&c.className||""),c)},m(t,g(n)))))};function w(){var e=(0,a.useState)([]),t=e[0],n=e[1];(0,a.useEffect)((function(){var e=Array.from(document.querySelectorAll("[data-heading]"));n(e)}),[]);var r=function(e){return Number(e.replace("H",""))};return a.createElement(c.F,{tag:"aside",className:(0,f.concatClassName)(" _alignItems-1oszu61 _boxSizing-deolkf _display-hvic4v _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx _display-hvic4v"+(i.Z.classNames.zeroRight?" "+i.Z.classNames.zeroRight:"")+"  _display-_lg_6koalj  _flexShrink-_lg_1q142lx  _position-_lg_1xcajam  _right-_lg_zchlnj  _top-_lg_1y37hes  _width-_lg_12kfsgm  _zIndex-_lg_184en5c")},a.createElement(l.Z,null,a.createElement(c.F,{tag:"nav","aria-labelledby":"site-quick-nav-heading",space:!0,className:(0,f.concatClassName)(" _alignItems-1oszu61 _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx _paddingLeft-14km6ah _paddingRight-1qpq1qc "+(0===t.length?" _display-hvic4v":" _display-1adg3ll"))},a.createElement(u.H4,{accessibilityRole:"header",id:"site-quick-nav-heading",className:" _boxSizing-deolkf _color-1gcmrwd _display-1471scf _fontFamily-144z2zw _fontSize-1unh9ke _fontWeight-b88u0q _letterSpacing-5pxjbv _lineHeight-29l1bz _wordWrap-qvutc0"},"Quick nav"),a.createElement("ul",{style:{margin:0,padding:0}},t.map((function(e){var t=e.id,n=e.nodeName,l=e.innerText;return a.createElement(c.F,{tag:"li",key:t,"data-level":r(n),className:" _alignItems-1oszu61 _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx"},a.createElement(b,{href:"#".concat(t)},l))}))))))}},2787:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return s}});var r=n(8750),a=n(628),l=n(6668),i=n(3098),o=n(2784),c=n(1801),u=n(7178),f=!0;function s(e){var t=e.frontmatter,n=e.code;if(!t)return null;var f=o.useMemo((function(){return(0,i.getMDXComponent)(n)}),[n]);return o.createElement(o.Fragment,null,o.createElement(l.H,{title:"".concat(t.title," \u2014 Tamagui")}),o.createElement(c.H1,{accessibilityRole:"header",className:" _boxSizing-deolkf _color-1gcmrwd _display-1471scf _fontFamily-144z2zw _fontSize-1kvnedt _fontWeight-b88u0q _letterSpacing-16krg75 _lineHeight-1vtq1c2 _wordWrap-qvutc0"},t.title),o.createElement(u.d,null,t.description),o.createElement(f,{components:r.wx}),o.createElement(a.W,null))}},397:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/intro/[slug]",function(){return n(2787)}])}},function(e){e.O(0,[774,58,916,888,179],(function(){return t=397,e(e.s=t);var t}));var t=e.O();_N_E=t}]);