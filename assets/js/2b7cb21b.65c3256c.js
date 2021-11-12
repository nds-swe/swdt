(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7116],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9123:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(2122),i=a(9756),r=(a(7294),a(3905)),s=["components"],o={title:"Database",sidebar_position:10},l=void 0,p={unversionedId:"database",id:"database",isDocsHomePage:!1,title:"Database",description:"|Lecture equivalent| Duration |",source:"@site/tasks/database.md",sourceDirName:".",slug:"/database",permalink:"/swdt/tasks/database",editUrl:"https://github.com/nds-swe/swdt/edit/main/tasks/database.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1636737856,formattedLastUpdatedAt:"11/12/2021",sidebarPosition:10,frontMatter:{title:"Database",sidebar_position:10},sidebar:"myAutogeneratedSidebar",previous:{title:"Client-Server",permalink:"/swdt/tasks/client-server"},next:{title:"GitHub Actions",permalink:"/swdt/tasks/github-actions"}},d=[{value:"Pre-requisites",id:"pre-requisites",children:[],level:2},{value:"Guide",id:"guide",children:[],level:2},{value:"Prepare the database",id:"prepare-the-database",children:[],level:2},{value:"Follow the guideline",id:"follow-the-guideline",children:[],level:2},{value:"Migrations",id:"migrations",children:[],level:2},{value:"Sample",id:"sample",children:[],level:2}],c={toc:d};function m(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Metadata")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Lecture equivalent"),(0,r.kt)("th",{parentName:"tr",align:null},"Duration"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"2h 15min")))),(0,r.kt)("p",{parentName:"div"},"At the end of this task, students"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"have linked ",(0,r.kt)("inlineCode",{parentName:"li"},"spring-starter")," to a MySQL database using JPA"),(0,r.kt)("li",{parentName:"ul"},"have run 1 migration with ",(0,r.kt)("a",{parentName:"li",href:"https://www.liquibase.org/"},"Liquibase")," ")))),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"In the lecture, we started to reproduce ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nds-swe/spring-starter/pull/6"},"spring-starter#6"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Task")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Do add the Scientist repository as H2 database to your project as you see in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nds-swe/spring-starter/pull/6"},"pull request"),"!"))),(0,r.kt)("h2",{id:"guide"},"Guide"),(0,r.kt)("p",null,"The transfer task follows ",(0,r.kt)("a",{parentName:"p",href:"https://spring.io/guides/gs/accessing-data-mysql/"},"this guide")," but with one key change \ud83d\udd11: We do not use a host-machine mysql server, we use a docker container ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/mysql"},(0,r.kt)("inlineCode",{parentName:"a"},"mysql")),"."),(0,r.kt)("h2",{id:"prepare-the-database"},"Prepare the database"),(0,r.kt)("p",null,"In the ",(0,r.kt)("strong",{parentName:"p"},"Environment Variables")," section of ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/mysql"},(0,r.kt)("inlineCode",{parentName:"a"},"mysql"))," you find a way to replace the database from ",(0,r.kt)("a",{parentName:"p",href:"https://spring.io/guides/gs/accessing-data-mysql/"},"the guide")," with some values of your choice."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Data loss")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Using a docker database that is not mounted to you host machine will result in data loss. But in my case and in this transfer task, this is actually the goal because some scientists get pre-loaded at every startup as you can see in ",(0,r.kt)("a",{parentName:"p",href:"#pre-requisites"},"pre-requisites"),"."))),(0,r.kt)("h2",{id:"follow-the-guideline"},"Follow the guideline"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Task")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://spring.io/guides/gs/accessing-data-mysql/"},"the guide")," now but use your docker database!"),(0,r.kt)("p",{parentName:"div"},"If you did complete the ",(0,r.kt)("a",{parentName:"p",href:"#pre-requisites"},"pre-requisites")," then stop before the ",(0,r.kt)("em",{parentName:"p"},"Create the @Entity Model")," part.\nIf not, continue the guide until the end."))),(0,r.kt)("h2",{id:"migrations"},"Migrations"),(0,r.kt)("p",null,"In the lecture, you learned what migrations are. In case you forgot, ",(0,r.kt)("a",{parentName:"p",href:"https://www.cloudbees.com/blog/database-migration"},"read this"),"."),(0,r.kt)("p",null,"It is finally time, to fease all you learned today into one smooth deliverable:"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Task")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Complete ",(0,r.kt)("a",{parentName:"p",href:"https://dzone.com/articles/integrating-spring-data-jpa-postgresql-and-liquiba"},"this tutorial")," to finish your journey on the database. But:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Do not create new entities, use the existing ones!"),(0,r.kt)("li",{parentName:"ul"},"Do not use ",(0,r.kt)("a",{parentName:"li",href:"https://projectlombok.org/"},"Lombok")," if you do not want another adventure again, just write plain code. ")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"But Dominik, its in PostgreSQL?!")),(0,r.kt)("p",null,"Yes, but you can also drive a Canyon and a Trek bike... These frameworks are capable of using another technology instead, switch it with your engineering capabilities ",(0,r.kt)("strong",{parentName:"p"},"OR")," learn something new by switching your ",(0,r.kt)("inlineCode",{parentName:"p"},"spring-starter")," to PostgreSQL!"),(0,r.kt)("h2",{id:"sample"},"Sample"),(0,r.kt)("p",null,"The sample solution has two steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nds-swe/spring-starter/pull/6"},"Adding JPA and the MySQL setup")," - note that this uses ",(0,r.kt)("em",{parentName:"li"},"volatile")," data which disappears at restart (except that docker compose caches it, which we circumvent in this part)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nds-swe/spring-starter/pull/27"},"Running a migration")," on our data (can be done against a persistent service or against the cached compose volume)")))}m.isMDXComponent=!0}}]);