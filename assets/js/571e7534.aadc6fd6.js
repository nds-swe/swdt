(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6047],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:e},p),{},{components:n})):a.createElement(h,i({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},486:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],l={title:"PlantUML"},s=void 0,c={unversionedId:"tools/plantuml",id:"tools/plantuml",isDocsHomePage:!1,title:"PlantUML",description:"\ud83d\udd17 plantuml.com",source:"@site/docs/tools/plantuml.md",sourceDirName:"tools",slug:"/tools/plantuml",permalink:"/swdt/docs/tools/plantuml",editUrl:"https://github.com/nds-swe/swdt/edit/main/docs/tools/plantuml.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1636737856,formattedLastUpdatedAt:"11/12/2021",frontMatter:{title:"PlantUML"},sidebar:"docs",previous:{title:"Postman",permalink:"/swdt/docs/tools/postman"},next:{title:"Spring",permalink:"/swdt/docs/tools/spring"}},p=[{value:"In short",id:"in-short",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Alternatives",id:"alternatives",children:[],level:2}],m={toc:p};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud83d\udd17 ",(0,o.kt)("a",{parentName:"p",href:"https://plantuml.com/"},"plantuml.com")),(0,o.kt)("p",null,"PlantUML can be summarized as ",(0,o.kt)("em",{parentName:"p"},"declarative diagrams")," or ",(0,o.kt)("em",{parentName:"p"},"domain specific language (DSL)"),". I tend to call it ",(0,o.kt)("inlineCode",{parentName:"p"},"Diagrams As Code")," for simplicity although this is not 100% ",(0,o.kt)("em",{parentName:"p"},"technically")," correct."),(0,o.kt)("p",null,"PlantUML takes some code like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"@startuml\nAlice -> Bob: Authentication Request\nBob --\x3e Alice: Authentication Response\n\nAlice -> Bob: Another authentication Request\nAlice <-- Bob: Another authentication Response\n@enduml\n")),(0,o.kt)("p",null,"And converts it to this"),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuNBCoKnELT2rKt3AJx9IS2mjoKZDAybCJYp9pCzJ24ejB4qjBk42oYde0jM05MDHLLoGdrUSoeLkM5u-K5sHGY9sGo6ARNHr2QY66kwGcfS2T300",alt:null}),(0,o.kt)("p",null,"Within our docs and it is even more elaborate thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"docusaurus.io"),",",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"mdxjs.com")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.com/plugins/gatsby-remark-plantuml/"},"remark-plugins"),". The community does amazing things \u2764\ufe0f"),(0,o.kt)("p",null,"Note that PlantUML does not look extremely pretty, but I am willing to pay any price to have maintainable, versioned, in-code diagrams! The two times a month we check the diagrams PlantUML or its alternatives ",(0,o.kt)("strong",{parentName:"p"},"definitely")," do their job!"),(0,o.kt)("h2",{id:"in-short"},"In short"),(0,o.kt)("p",null,"PlantUML (or its alternatives) take declarative code and convert it to an image of some form. It is like the ",(0,o.kt)("inlineCode",{parentName:"p"},".svg")," file format - except that it describes a diagram instead of an ",(0,o.kt)("em",{parentName:"p"},"image"),"."),(0,o.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Online Server")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"They have an ",(0,o.kt)("a",{parentName:"p",href:"http://www.plantuml.com/plantuml/uml/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000"},"online server")," to start even!"))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"We use it primarily for ",(0,o.kt)("a",{parentName:"p",href:"/docs/techniques/c4-modeling"},"C4 Modeling"),". Note that I do not imply on the/you students that you use PlantUML, everyone can drink their own soup \ud83c\udf5c"),(0,o.kt)("h2",{id:"alternatives"},"Alternatives"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mermaid-js.github.io/mermaid/#/"},"Mermaid.js"))))}u.isMDXComponent=!0}}]);