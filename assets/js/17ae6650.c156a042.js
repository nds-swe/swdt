"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6437],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(d,i(i({ref:t},h),{},{components:a})):n.createElement(d,i({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1151:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return h}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],c={title:"Hexagonal Architecture"},l=void 0,s={unversionedId:"techniques/hexagonal-architecture",id:"techniques/hexagonal-architecture",isDocsHomePage:!1,title:"Hexagonal Architecture",description:"\ud83d\udd17 Hexagonal architecture)",source:"@site/docs/techniques/hexagonal-architecture.md",sourceDirName:"techniques",slug:"/techniques/hexagonal-architecture",permalink:"/swdt/docs/techniques/hexagonal-architecture",editUrl:"https://github.com/nds-swe/swdt/edit/main/docs/techniques/hexagonal-architecture.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1649407389,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"Hexagonal Architecture"},sidebar:"docs",previous:{title:"C4 Modeling",permalink:"/swdt/docs/techniques/c4-modeling"},next:{title:"cURL",permalink:"/swdt/docs/tools/curl"}},h=[{value:"Choice",id:"choice",children:[],level:2},{value:"Coverage",id:"coverage",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],u={toc:h};function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud83d\udd17 ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)"},"Hexagonal architecture")),(0,o.kt)("h2",{id:"choice"},"Choice"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Why was this chosen as the architecture to go for this study?")),(0,o.kt)("p",null,"There are many architectures one could choose to lead with. Also we could look at each of them for two hours or days or years. In the end one architecture had to be chosen to orient ourselves after. I chose ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)"},"Hexagonal architecture"),"."),(0,o.kt)("p",null,"This had various reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It resembles a layered architecture which is another common pattern"),(0,o.kt)("li",{parentName:"ul"},"It is said to be the origin of microservice architectures and because microservices are important (not necessarily the future)"),(0,o.kt)("li",{parentName:"ul"},"If one cuts out a tranche from the hexagonal approach one can end up with a layered architecture"),(0,o.kt)("li",{parentName:"ul"},"It embraces and encourages flexibility, something often needed at the start of a project"),(0,o.kt)("li",{parentName:"ul"},"It can improve maintainability"),(0,o.kt)("li",{parentName:"ul"},"We can focus on the things that matter (and make \ud83d\udcb8) - the rest we keep swappable"),(0,o.kt)("li",{parentName:"ul"},"It embraces a healthy testing culture (isolation)"),(0,o.kt)("li",{parentName:"ul"},"We use it in practice, as do ",(0,o.kt)("a",{parentName:"li",href:"https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749"},"others"))),(0,o.kt)("p",null,"Certainly this is not the holy grail, not even the solution for everything. But together with the layered architecture (and as I claim, hexagonal is just circular layers kind of) it makes a stable basis for upcoming software engineers."),(0,o.kt)("p",null,"You can check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/help/books"},"books section"),", inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"Clean Architecture")," you should find the hexagonal/onion respectively this architecture."),(0,o.kt)("h2",{id:"coverage"},"Coverage"),(0,o.kt)("p",null,"We will cover only a small part of the hexagonal architecture - none the less the most important one",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),": ",(0,o.kt)("strong",{parentName:"p"},"Layered Architecture"),". We will enlighten this area from two angles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Architectural point of view - layering your application"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Design point")," - separating or isolating concerns, increasing cohesion and lower coupling (using design patterns and SOLID/GRASP principles)")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Once more you wonder why not just ",(0,o.kt)("em",{parentName:"p"},"Layered Architecture")," has been chosen. We focus on learning small things with the capacity to go big and scale \ud83d\udca5 We want a broad horizon and foresight \ud83c\udf04\nAlso, to be frank, implementation wise there is not too much difference ",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"."))),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://julien-topcu.medium.com/decoupling-your-technical-code-from-your-business-logic-with-the-hexagonal-architecture-hexarch-b4da7ba62079"},"Hexagonal Architecture: the practical guide for a clean architecture")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749"},"Ready for changes with Hexagonal Architecture")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://airspeed.ca/write-more-maintainable-software-with-a-hexagonal-architecture/"},"Write More Maintainable Software With a Hexagonal Architecture")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://madewithlove.com/blog/software-engineering/hexagonal-architecture-demystified/"},"Hexagonal Architecture demystified"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Alone from these different resource we can see that ",(0,o.kt)("inlineCode",{parentName:"p"},"hexagonal architecture")," is more of an idea than an ISO-industrial standard"))),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"My 2\xa2.",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},(0,o.kt)("a",{parentName:"li",href:"https://www.codingthearchitecture.com/2016/04/25/layers_hexagons_features_and_components.html"},"Layers, hexagons, features and components"),(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);