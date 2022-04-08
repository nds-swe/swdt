"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5709],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(r),p=i,v=d["".concat(l,".").concat(p)]||d[p]||f[p]||o;return r?n.createElement(v,a(a({ref:t},s),{},{components:r})):n.createElement(v,a({ref:t},s))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5593:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=r(9084),u=["components"],l={title:"31 - GraphQL",sidebar_position:31},c=void 0,s={unversionedId:"graphql",id:"graphql",isDocsHomePage:!1,title:"31 - GraphQL",description:"Fin",source:"@site/syllabus/graphql.mdx",sourceDirName:".",slug:"/graphql",permalink:"/swdt/syllabus/graphql",editUrl:"https://github.com/nds-swe/swdt/edit/main/syllabus/graphql.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1649407389,formattedLastUpdatedAt:"4/8/2022",sidebarPosition:31,frontMatter:{title:"31 - GraphQL",sidebar_position:31},sidebar:"myAutogeneratedSidebar",previous:{title:"30 - Continuous Delivery",permalink:"/swdt/syllabus/continuous-delivery"}},f=[{value:"Fin",id:"fin",children:[],level:2}],d={toc:f};function p(e){var t=e.components,r=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.M,{title:"GraphQL",htmlFile:"graphql",mdxType:"Slides"}),(0,o.kt)("h2",{id:"fin"},"Fin"),(0,o.kt)("p",null,"This lecture marks the end of our syllabus. Mastering GraphQL is a big topic and does not fit into one lesson at all. Also, we might want to discuss one or the other additional topic as well as fill out questionnaires. This is why this lecture is kept as a hidden card and we will check GraphQL only, if there is ",(0,o.kt)("em",{parentName:"p"},"nothing left to do"),"."))}p.isMDXComponent=!0},9960:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(3366),i=r(7294),o=r(3727),a=r(2263),u=r(3919),l=r(412),c=(0,i.createContext)({collectLink:function(){}}),s=r(4996),f=r(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,r,p=e.isNavLink,v=e.to,h=e.href,m=e.activeClassName,b=e.isActive,y=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,w=void 0===g||g,O=(0,n.Z)(e,d),k=(0,a.Z)().siteConfig,j=k.trailingSlash,E=k.baseUrl,P=(0,s.C)().withBaseUrl,C=(0,i.useContext)(c),U=v||h,x=(0,u.Z)(U),L=null==U?void 0:U.replace("pathname://",""),T=void 0!==L?(r=L,w&&function(e){return e.startsWith("/")}(r)?P(r):r):void 0;T&&x&&(T=(0,f.applyTrailingSlash)(T,{trailingSlash:j,baseUrl:E}));var Z=(0,i.useRef)(!1),_=p?o.OL:o.rU,S=l.Z.canUseIntersectionObserver,M=(0,i.useRef)();(0,i.useEffect)((function(){return!S&&x&&null!=T&&window.docusaurus.prefetch(T),function(){S&&M.current&&M.current.disconnect()}}),[M,T,S,x]);var A=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,D=!T||!x||A;return T&&x&&!A&&!y&&C.collectLink(T),D?i.createElement("a",Object.assign({href:T},U&&!x&&{target:"_blank",rel:"noopener noreferrer"},O)):i.createElement(_,Object.assign({},O,{onMouseEnter:function(){Z.current||null==T||(window.docusaurus.preload(T),Z.current=!0)},innerRef:function(e){var t,r;S&&e&&x&&(t=e,r=function(){null!=T&&window.docusaurus.prefetch(T)},M.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(t),M.current.disconnect(),r())}))})),M.current.observe(t))},to:T||""},p&&{isActive:b,activeClassName:m}))}},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{Z:function(){return i},b:function(){return n}})},4996:function(e,t,r){r.d(t,{C:function(){return o},Z:function(){return a}});var n=r(2263),i=r(3919);function o(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,u=void 0!==a&&a,l=o.absolute,c=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(u)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+s:s}(o,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var i,o=e.split(/[#?]/)[0],a="/"===o||o===n?o:(i=o,r?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(o,a)}},8780:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(i).default}});var o=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(o).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},9084:function(e,t,r){r.d(t,{M:function(){return u}});var n=r(7294),i=r(9960),o=r(4996),a=r(2263),u=function(e){var t=e.htmlFile,r=e.title,u=(0,a.Z)().siteConfig,l=(0,o.Z)("/p/"+t+".html");return n.createElement(n.Fragment,null,n.createElement("iframe",{src:l,height:"600px",width:"100%",title:r}),n.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},"See in full screen"),"\xa0(",n.createElement("a",{href:l+"?print-pdf",target:"_blank",rel:"noopener noreferrer"},"Print")," ",n.createElement("small",null,n.createElement(i.Z,{to:"https://revealjs.com/pdf-export/"},"How to")),") (",n.createElement(i.Z,{to:u.customFields.editUrl+l},"Edit"),")")}}}]);