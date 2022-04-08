"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9601],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||l;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3780:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),a=["components"],s={title:"cURL"},i=void 0,u={unversionedId:"tools/curl",id:"tools/curl",isDocsHomePage:!1,title:"cURL",description:"curl is used in command lines or scripts to transfer data. curl is also used in cars, television sets, routers, printers, audio equipment, mobile phones, tablets, settop boxes, media players and is the Internet transfer engine for thousands of software applications in over ten billion installations. - curl.se",source:"@site/docs/tools/curl.md",sourceDirName:"tools",slug:"/tools/curl",permalink:"/swdt/docs/tools/curl",editUrl:"https://github.com/nds-swe/swdt/edit/main/docs/tools/curl.md",tags:[],version:"current",lastUpdatedBy:"mambax",lastUpdatedAt:1649406819,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"cURL"},sidebar:"docs",previous:{title:"Hexagonal Architecture",permalink:"/swdt/docs/techniques/hexagonal-architecture"},next:{title:"Docker",permalink:"/swdt/docs/tools/docker"}},c=[{value:"Use",id:"use",children:[],level:2},{value:"Install",id:"install",children:[],level:2},{value:"Get started",id:"get-started",children:[],level:2}],p={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"curl is used in command lines or scripts to transfer data. curl is also used in cars, television sets, routers, printers, audio equipment, mobile phones, tablets, settop boxes, media players and is the Internet transfer engine for thousands of software applications in over ten billion installations. - ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://curl.se/"},"curl.se")))),(0,l.kt)("p",null,"\ud83d\udd17 ",(0,l.kt)("a",{parentName:"p",href:"https://curl.se/"},"curl.se")),(0,l.kt)("h2",{id:"use"},"Use"),(0,l.kt)("p",null,"We use cURL to get to know the ",(0,l.kt)("a",{parentName:"p",href:"/tasks/client-server"},"Task Client-Server"),"."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"For the first tool ",(0,l.kt)("a",{parentName:"p",href:"https://curl.se/download.html"},"the link is provided"),", for any further tool finding out the way to install will also be up to you."),(0,l.kt)("h2",{id:"get-started"},"Get started"),(0,l.kt)("p",null,"cURL is a command line utility, so you will need a terminal to use it."),(0,l.kt)("p",null,"Here is their official ",(0,l.kt)("a",{parentName:"p",href:"https://curl.se/docs/manual.html"},"manual"),"."),(0,l.kt)("p",null,"Try"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X GET https://nds-swe.github.io/swdt\n")),(0,l.kt)("p",null,"to see if your curl works. The output of this query is obviously gibberish only parsable with a browser but at least you know you curled something."))}d.isMDXComponent=!0}}]);