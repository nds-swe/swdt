"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7162],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9390:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Getting Started",slug:"/"},c=void 0,l={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Welcome to the Software Design and Testing lecture. Read this summary to know how to navigate the docs.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/",permalink:"/swdt/docs/",editUrl:"https://github.com/nds-swe/swdt/edit/main/docs/getting-started.md",tags:[],version:"current",lastUpdatedBy:"mambax",lastUpdatedAt:1649406819,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"Getting Started",slug:"/"},sidebar:"docs",next:{title:"Expectations",permalink:"/swdt/docs/expectations"}},d=[{value:"Theory",id:"theory",children:[],level:2},{value:"Techniques",id:"techniques",children:[],level:2},{value:"Tools",id:"tools",children:[],level:2},{value:"Tasks",id:"tasks",children:[],level:2},{value:"Help",id:"help",children:[],level:2},{value:"Guiding thread",id:"guiding-thread",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the Software Design and Testing lecture. Read this summary to know how to navigate the docs."),(0,r.kt)("p",null,"The lecture as well as the docs are separated into three main topics:"),(0,r.kt)("h2",{id:"theory"},"Theory"),(0,r.kt)("p",null,"Our lecture is practice oriented, none the less some concepts are purely theoretical. In this section you find theoretical abstracts of subjects we touch. This is mostly complementary lecture as we will focus on the practical part in ",(0,r.kt)("strong",{parentName:"p"},"Techniques"),"."),(0,r.kt)("h2",{id:"techniques"},"Techniques"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"How do we do something? How do we approach it, what is it good for, what is the output?"))),(0,r.kt)("p",null,"Questions like these we approach in ",(0,r.kt)("strong",{parentName:"p"},"Techniques"),". They can not always be separated 100% from Tools or Theory but it makes sense to not talk about the configuration parameters of a tool when we just want to learn a technique."),(0,r.kt)("h2",{id:"tools"},"Tools"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"With which tools can we apply or support a technique? How does it work and where can you get started?"))),(0,r.kt)("p",null,"The tools we investigate and use are picked from experience. For all of them many alternatives exist - we care more about how we can use them to apply a technique.\nThe official docs will never be repeated, but there will be pointers where you can start."),(0,r.kt)("h2",{id:"tasks"},"Tasks"),(0,r.kt)("p",null,"We obviously want to train what we see in Theory and Techniques. Tasks will mostly use ",(0,r.kt)("em",{parentName:"p"},"recommended")," tools, but feel free to come up with a tool of your own. The way and result count, not that you master a tool to perfection."),(0,r.kt)("h2",{id:"help"},"Help"),(0,r.kt)("p",null,"Some basic help is provided in the help section. If you do not find what you look for, go to any of the communities (check the footer)."),(0,r.kt)("h2",{id:"guiding-thread"},"Guiding thread"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Before doing anything else, read what you are ",(0,r.kt)("a",{parentName:"li",href:"expectations"},"expected to know")," before heading into this lecture"),(0,r.kt)("li",{parentName:"ol"},"Read the ",(0,r.kt)("a",{parentName:"li",href:"guiding-thread"},"guiding thread")," as a starting point, from there you can explore the docs on your own (or guided by the lecture of course).")))}p.isMDXComponent=!0}}]);