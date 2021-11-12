(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8499],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7563:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],l={title:"Docker"},s=void 0,c={unversionedId:"tools/docker",id:"tools/docker",isDocsHomePage:!1,title:"Docker",description:"Docker takes away repetitive, mundane configuration tasks and is used throughout the development lifecycle for fast, easy and portable application development - desktop and cloud. Docker\u2019s comprehensive end to end platform includes UIs, CLIs, APIs and security that are engineered to work together across the entire application delivery lifecycle. - docker.com",source:"@site/docs/tools/docker.md",sourceDirName:"tools",slug:"/tools/docker",permalink:"/swdt/docs/tools/docker",editUrl:"https://github.com/nds-swe/swdt/edit/main/docs/tools/docker.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1636737856,formattedLastUpdatedAt:"11/12/2021",frontMatter:{title:"Docker"},sidebar:"docs",previous:{title:"cURL",permalink:"/swdt/docs/tools/curl"},next:{title:"GitHub Actions",permalink:"/swdt/docs/tools/github-actions"}},d=[{value:"Use",id:"use",children:[],level:2},{value:"Install / Get started",id:"install--get-started",children:[],level:2},{value:"Alternative",id:"alternative",children:[],level:2}],u={toc:d};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Docker takes away repetitive, mundane configuration tasks and is used throughout the development lifecycle for fast, easy and portable application development - desktop and cloud. Docker\u2019s comprehensive end to end platform includes UIs, CLIs, APIs and security that are engineered to work together across the entire application delivery lifecycle. - ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://www.docker.com/"},"docker.com")))),(0,a.kt)("p",null,"\ud83d\udd17 ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"docker.com")),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"We use docker for ",(0,a.kt)("strong",{parentName:"p"},"many")," reasons but in this modules it comes handy especially for the following areas:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sharing code between different operating systems becomes easy, docker unifies the platforms"),(0,a.kt)("li",{parentName:"ul"},"Deploying code to Azure"),(0,a.kt)("li",{parentName:"ul"},"Running tests against test-containers (ref follows)"),(0,a.kt)("li",{parentName:"ul"},"Abstract and simplify versioning"),(0,a.kt)("li",{parentName:"ul"},"Keeping our development machines clear from clutter"),(0,a.kt)("li",{parentName:"ul"},"Consistency, docker containers are always the same, there is not suddenly a new version or variable in them")),(0,a.kt)("p",null,"There are only a handful of cloud providers or ",(0,a.kt)("em",{parentName:"p"},"hosters")," where you can appear without a docker image and serve it - even those where you do not bring a container will under the hood containerize it. It is therefor high time to start using it!"),(0,a.kt)("h2",{id:"install--get-started"},"Install / Get started"),(0,a.kt)("p",null,"This is not the first time you meet docker as you can see in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/expectations"},"expectations"),". I think the course is completable without docker but it will be \ud83d\ude16"),(0,a.kt)("p",null,"If, still so, ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/get-started"},"get started")," right now!"),(0,a.kt)("h2",{id:"alternative"},"Alternative"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://containerd.io/"},"containerd"))),(0,a.kt)("p",null,"There are not too many ",(0,a.kt)("a",{parentName:"p",href:"https://www.aquasec.com/cloud-native-academy/docker-container/docker-alternatives/"},"viable alternatives")," because even docker itself, under the hood, uses ",(0,a.kt)("em",{parentName:"p"},"containerd"),"."))}p.isMDXComponent=!0}}]);