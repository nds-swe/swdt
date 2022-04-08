"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9034],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=o.createContext({}),c=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=c(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(h,r(r({ref:e},u),{},{components:n})):o.createElement(h,r({ref:e},u))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2383:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],s={title:"GitHub Actions"},l=void 0,c={unversionedId:"tools/github-actions",id:"tools/github-actions",isDocsHomePage:!1,title:"GitHub Actions",description:"Automate, customize, and execute your software development workflows right in your repository with GitHub Actions. You can discover, create, and share actions to perform any job you'd like, including CI/CD, and combine actions in a completely customized workflow. - github.com/en/actions",source:"@site/docs/tools/github-actions.md",sourceDirName:"tools",slug:"/tools/github-actions",permalink:"/swdt/docs/tools/github-actions",editUrl:"https://github.com/nds-swe/swdt/edit/main/docs/tools/github-actions.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1649407389,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"GitHub Actions"},sidebar:"docs",previous:{title:"Docker",permalink:"/swdt/docs/tools/docker"},next:{title:"Postman",permalink:"/swdt/docs/tools/postman"}},u=[{value:"Use",id:"use",children:[],level:2},{value:"Install / Get started",id:"install--get-started",children:[],level:2},{value:"Tasks",id:"tasks",children:[],level:2},{value:"Alternative",id:"alternative",children:[],level:2}],p={toc:u};function d(t){var e=t.components,n=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Automate, customize, and execute your software development workflows right in your repository with GitHub Actions. You can discover, create, and share actions to perform any job you'd like, including CI/CD, and combine actions in a completely customized workflow. - ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://docs.github.com/en/actions"},"github.com/en/actions")))),(0,a.kt)("p",null,"\ud83d\udd17 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"github.com/en/actions")),(0,a.kt)("p",null,"This repo features the most simple action to start with, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nds-swe/swdt/blob/main/.github/workflows/example-action_push.yml"},"check it out"),". You can see the output of this very first action ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nds-swe/swdt/actions/runs/736246719"},"here"),"!"),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"GitHub Actions have uncountable use cases. In our lecture we will use them for some basic cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check a Pull Request for vulnerabilities"),(0,a.kt)("li",{parentName:"ul"},"Execute Unit Tests on Pull Requests"),(0,a.kt)("li",{parentName:"ul"},"Build and push a docker image"),(0,a.kt)("li",{parentName:"ul"},"Execute one or the other integration test"),(0,a.kt)("li",{parentName:"ul"},"Build diagrams or these docs")),(0,a.kt)("p",null,"These bullets all belong to the technique ",(0,a.kt)("a",{parentName:"p",href:"/docs/techniques/continuous-integration"},"Continuous Integration"),"."),(0,a.kt)("p",null,"Obviously, since one can develop his own actions, this list is endless. You also find GitHub Actions in our ",(0,a.kt)("a",{parentName:"p",href:"/docs/guiding-thread"},"guiding thread")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Test")," area."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"GitHub Actions is only added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Test")," phase for simplicity and because in this lecture we mostly use it there. GitHub Actions (or rather CI) in fact and in practice is central and all-present in DevOps."))),(0,a.kt)("h2",{id:"install--get-started"},"Install / Get started"),(0,a.kt)("p",null,"Check out their ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/quickstart"},"Quick Start")," or our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nds-swe/swdt/blob/main/.github/workflows/example-action_push.yml"},"super basic action")," from the lecture."),(0,a.kt)("h2",{id:"tasks"},"Tasks"),(0,a.kt)("p",null,"You get to know Actions in the tasks ",(0,a.kt)("a",{parentName:"p",href:"/tasks/bites/github-actions"},"bites/github-actions")," and ",(0,a.kt)("a",{parentName:"p",href:"/tasks/github-actions"},"github-actions"),"."),(0,a.kt)("h2",{id:"alternative"},"Alternative"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://circleci.com/"},"Circle CI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://travis-ci.org/"},"Travis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/pipelines/"},"GitLab CI/CD Pipelines"))),(0,a.kt)("p",null,"There is even more like Atlassian Bamboo, Jenkins, TeamCity etc."))}d.isMDXComponent=!0}}]);