"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5135],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(r),p=i,m=d["".concat(c,".").concat(p)]||d[p]||f[p]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6726:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return f}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=r(9084),u=["components"],c={title:"29 - Prometheus",sidebar_position:29},l=void 0,s={unversionedId:"telemetry",id:"telemetry",isDocsHomePage:!1,title:"29 - Prometheus",description:"",source:"@site/syllabus/telemetry.mdx",sourceDirName:".",slug:"/telemetry",permalink:"/swdt/syllabus/telemetry",editUrl:"https://github.com/nds-swe/swdt/edit/main/syllabus/telemetry.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1649407389,formattedLastUpdatedAt:"4/8/2022",sidebarPosition:29,frontMatter:{title:"29 - Prometheus",sidebar_position:29},sidebar:"myAutogeneratedSidebar",previous:{title:"28 - Documentation",permalink:"/swdt/syllabus/documentation"},next:{title:"30 - Continuous Delivery",permalink:"/swdt/syllabus/continuous-delivery"}},f=[],d={toc:f};function p(e){var t=e.components,r=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.M,{title:"Swagger & Changelog",htmlFile:"telemetry",mdxType:"Slides"}))}p.isMDXComponent=!0},9960:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(3366),i=r(7294),o=r(3727),a=r(2263),u=r(3919),c=r(412),l=(0,i.createContext)({collectLink:function(){}}),s=r(4996),f=r(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,r,p=e.isNavLink,m=e.to,v=e.href,b=e.activeClassName,y=e.isActive,h=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,w=void 0===g||g,O=(0,n.Z)(e,d),k=(0,a.Z)().siteConfig,P=k.trailingSlash,j=k.baseUrl,E=(0,s.C)().withBaseUrl,C=(0,i.useContext)(l),x=m||v,U=(0,u.Z)(x),S=null==x?void 0:x.replace("pathname://",""),Z=void 0!==S?(r=S,w&&function(e){return e.startsWith("/")}(r)?E(r):r):void 0;Z&&U&&(Z=(0,f.applyTrailingSlash)(Z,{trailingSlash:P,baseUrl:j}));var _=(0,i.useRef)(!1),T=p?o.OL:o.rU,D=c.Z.canUseIntersectionObserver,M=(0,i.useRef)();(0,i.useEffect)((function(){return!D&&U&&null!=Z&&window.docusaurus.prefetch(Z),function(){D&&M.current&&M.current.disconnect()}}),[M,Z,D,U]);var A=null!==(t=null==Z?void 0:Z.startsWith("#"))&&void 0!==t&&t,B=!Z||!U||A;return Z&&U&&!A&&!h&&C.collectLink(Z),B?i.createElement("a",Object.assign({href:Z},x&&!U&&{target:"_blank",rel:"noopener noreferrer"},O)):i.createElement(T,Object.assign({},O,{onMouseEnter:function(){_.current||null==Z||(window.docusaurus.preload(Z),_.current=!0)},innerRef:function(e){var t,r;D&&e&&U&&(t=e,r=function(){null!=Z&&window.docusaurus.prefetch(Z)},M.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(t),M.current.disconnect(),r())}))})),M.current.observe(t))},to:Z||""},p&&{isActive:y,activeClassName:b}))}},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{Z:function(){return i},b:function(){return n}})},4996:function(e,t,r){r.d(t,{C:function(){return o},Z:function(){return a}});var n=r(2263),i=r(3919);function o(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,u=void 0!==a&&a,c=o.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(u)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+s:s}(o,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var i,o=e.split(/[#?]/)[0],a="/"===o||o===n?o:(i=o,r?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(o,a)}},8780:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(i).default}});var o=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(o).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},9084:function(e,t,r){r.d(t,{M:function(){return u}});var n=r(7294),i=r(9960),o=r(4996),a=r(2263),u=function(e){var t=e.htmlFile,r=e.title,u=(0,a.Z)().siteConfig,c=(0,o.Z)("/p/"+t+".html");return n.createElement(n.Fragment,null,n.createElement("iframe",{src:c,height:"600px",width:"100%",title:r}),n.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},"See in full screen"),"\xa0(",n.createElement("a",{href:c+"?print-pdf",target:"_blank",rel:"noopener noreferrer"},"Print")," ",n.createElement("small",null,n.createElement(i.Z,{to:"https://revealjs.com/pdf-export/"},"How to")),") (",n.createElement(i.Z,{to:u.customFields.editUrl+c},"Edit"),")")}}}]);