(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4644],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return h}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},C=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),C=d(a),h=i,p=C["".concat(s,".").concat(h)]||C[h]||c[h]||n;return a?r.createElement(p,o(o({ref:t},m),{},{components:a})):r.createElement(p,o({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=C;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<n;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}C.displayName="MDXCreateElement"},410:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return m},default:function(){return C}});var r=a(2122),i=a(9756),n=(a(7294),a(3905)),o=["components"],l={title:"C4 Modeling"},s=void 0,d={unversionedId:"techniques/c4-modeling",id:"techniques/c4-modeling",isDocsHomePage:!1,title:"C4 Modeling",description:"\ud83d\udd17 c4model.com",source:"@site/docs/techniques/c4-modeling.md",sourceDirName:"techniques",slug:"/techniques/c4-modeling",permalink:"/swdt/docs/techniques/c4-modeling",editUrl:"https://github.com/nds-swe/swdt/edit/main/docs/techniques/c4-modeling.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1636737856,formattedLastUpdatedAt:"11/12/2021",frontMatter:{title:"C4 Modeling"},sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/swdt/docs/techniques/continuous-integration"},next:{title:"Hexagonal Architecture",permalink:"/swdt/docs/techniques/hexagonal-architecture"}},m=[{value:"Tooling",id:"tooling",children:[],level:2},{value:"Tools",id:"tools",children:[{value:"Recommended",id:"recommended",children:[],level:3},{value:"VSCode",id:"vscode",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2}],c={toc:m};function C(e){var t=e.components,a=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\ud83d\udd17 ",(0,n.kt)("a",{parentName:"p",href:"https://c4model.com/"},"c4model.com")),(0,n.kt)("p",null,"The C4 Model is ... are you kidding me? We said we do not repeat content that deprecates! If you need technical documentation of the C4 Model, ",(0,n.kt)("a",{parentName:"p",href:"https://c4model.com/"},"head over here"),". There is also a great ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=x2-rSnhpw0g"},"onboarding video")," that you will watch in ",(0,n.kt)("a",{parentName:"p",href:"/tasks/c4-exman"},"Task C4 ExMan"),"!"),(0,n.kt)("p",null,'We use the C4 Model to find a scalable "mid-way" between costly UML and sketches - or worst case having no documentation at all. '),(0,n.kt)("p",null,"It is important to note that the C4 Model is very well documented so you will not learn that in the face-to-face lecture. What we will learn is how to get from one layer to the next!"),(0,n.kt)("img",{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20id%3D%22mermaid-1636737909750%22%20width%3D%22100%25%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20height%3D%2254%22%20style%3D%22max-width%3A%20772.53125px%3B%22%20viewBox%3D%220%200%20772.53125%2054%22%3E%3Cstyle%3E%23mermaid-1636737909750%7Bfont-family%3A%22trebuchet%20ms%22%2Cverdana%2Carial%2Csans-serif%3Bfont-size%3A16px%3Bfill%3A%23333%3B%7D%23mermaid-1636737909750%20.error-icon%7Bfill%3A%23552222%3B%7D%23mermaid-1636737909750%20.error-text%7Bfill%3A%23552222%3Bstroke%3A%23552222%3B%7D%23mermaid-1636737909750%20.edge-thickness-normal%7Bstroke-width%3A2px%3B%7D%23mermaid-1636737909750%20.edge-thickness-thick%7Bstroke-width%3A3.5px%3B%7D%23mermaid-1636737909750%20.edge-pattern-solid%7Bstroke-dasharray%3A0%3B%7D%23mermaid-1636737909750%20.edge-pattern-dashed%7Bstroke-dasharray%3A3%3B%7D%23mermaid-1636737909750%20.edge-pattern-dotted%7Bstroke-dasharray%3A2%3B%7D%23mermaid-1636737909750%20.marker%7Bfill%3A%23333333%3Bstroke%3A%23333333%3B%7D%23mermaid-1636737909750%20.marker.cross%7Bstroke%3A%23333333%3B%7D%23mermaid-1636737909750%20svg%7Bfont-family%3A%22trebuchet%20ms%22%2Cverdana%2Carial%2Csans-serif%3Bfont-size%3A16px%3B%7D%23mermaid-1636737909750%20.label%7Bfont-family%3A%22trebuchet%20ms%22%2Cverdana%2Carial%2Csans-serif%3Bcolor%3A%23333%3B%7D%23mermaid-1636737909750%20.cluster-label%20text%7Bfill%3A%23333%3B%7D%23mermaid-1636737909750%20.cluster-label%20span%7Bcolor%3A%23333%3B%7D%23mermaid-1636737909750%20.label%20text%2C%23mermaid-1636737909750%20span%7Bfill%3A%23333%3Bcolor%3A%23333%3B%7D%23mermaid-1636737909750%20.node%20rect%2C%23mermaid-1636737909750%20.node%20circle%2C%23mermaid-1636737909750%20.node%20ellipse%2C%23mermaid-1636737909750%20.node%20polygon%2C%23mermaid-1636737909750%20.node%20path%7Bfill%3A%23ECECFF%3Bstroke%3A%239370DB%3Bstroke-width%3A1px%3B%7D%23mermaid-1636737909750%20.node%20.label%7Btext-align%3Acenter%3B%7D%23mermaid-1636737909750%20.node.clickable%7Bcursor%3Apointer%3B%7D%23mermaid-1636737909750%20.arrowheadPath%7Bfill%3A%23333333%3B%7D%23mermaid-1636737909750%20.edgePath%20.path%7Bstroke%3A%23333333%3Bstroke-width%3A1.5px%3B%7D%23mermaid-1636737909750%20.flowchart-link%7Bstroke%3A%23333333%3Bfill%3Anone%3B%7D%23mermaid-1636737909750%20.edgeLabel%7Bbackground-color%3A%23e8e8e8%3Btext-align%3Acenter%3B%7D%23mermaid-1636737909750%20.edgeLabel%20rect%7Bopacity%3A0.5%3Bbackground-color%3A%23e8e8e8%3Bfill%3A%23e8e8e8%3B%7D%23mermaid-1636737909750%20.cluster%20rect%7Bfill%3A%23ffffde%3Bstroke%3A%23aaaa33%3Bstroke-width%3A1px%3B%7D%23mermaid-1636737909750%20.cluster%20text%7Bfill%3A%23333%3B%7D%23mermaid-1636737909750%20.cluster%20span%7Bcolor%3A%23333%3B%7D%23mermaid-1636737909750%20div.mermaidTooltip%7Bposition%3Aabsolute%3Btext-align%3Acenter%3Bmax-width%3A200px%3Bpadding%3A2px%3Bfont-family%3A%22trebuchet%20ms%22%2Cverdana%2Carial%2Csans-serif%3Bfont-size%3A12px%3Bbackground%3Ahsl(80%2C100%25%2C96.2745098039%25)%3Bborder%3A1px%20solid%20%23aaaa33%3Bborder-radius%3A2px%3Bpointer-events%3Anone%3Bz-index%3A100%3B%7D%23mermaid-1636737909750%3Aroot%7B--mermaid-font-family%3A%22trebuchet%20ms%22%2Cverdana%2Carial%2Csans-serif%3B%7D%3C%2Fstyle%3E%3Cg%3E%3Cg%20class%3D%22output%22%3E%3Cg%20class%3D%22clusters%22%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePaths%22%3E%3Cg%20class%3D%22edgePath%20LS-A%20LE-B%22%20id%3D%22L-A-B%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M83.140625%2C27L94.79296875%2C27C106.4453125%2C27%2C129.75%2C27%2C153.0546875%2C27C176.359375%2C27%2C199.6640625%2C27%2C211.31640625%2C27L222.96875%2C27%22%20marker-end%3D%22url(%23arrowhead20)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead20%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePath%20LS-B%20LE-C%22%20id%3D%22L-B-C%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M312.34375%2C27L323.99609375%2C27C335.6484375%2C27%2C358.953125%2C27%2C382.2578125%2C27C405.5625%2C27%2C428.8671875%2C27%2C440.51953125%2C27L452.171875%2C27%22%20marker-end%3D%22url(%23arrowhead21)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead21%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePath%20LS-C%20LE-D%22%20id%3D%22L-C-D%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M554.890625%2C27L567.5065104166666%2C27C580.1223958333334%2C27%2C605.3541666666666%2C27%2C630.5859375%2C27C655.8177083333334%2C27%2C681.0494791666666%2C27%2C693.6653645833334%2C27L706.28125%2C27%22%20marker-end%3D%22url(%23arrowhead22)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead22%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabels%22%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22translate(153.0546875%2C27)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(-44.9140625%2C-9)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%2289.828125%22%20height%3D%2218%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%2289.828125%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-A-B%22%20class%3D%22edgeLabel%20L-LS-A'%20L-LE-B%22%3Ethis%20we%20learn%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22translate(382.2578125%2C27)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(-44.9140625%2C-9)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%2289.828125%22%20height%3D%2218%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%2289.828125%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-B-C%22%20class%3D%22edgeLabel%20L-LS-B'%20L-LE-C%22%3Ethis%20we%20learn%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22translate(630.5859375%2C27)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(-50.6953125%2C-9)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%22101.390625%22%20height%3D%2218%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%22101.390625%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-C-D%22%20class%3D%22edgeLabel%20L-LS-C'%20L-LE-D%22%3Ethis%20we%20look%20at%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22nodes%22%3E%3Cg%20class%3D%22node%20default%22%20id%3D%22flowchart-A-6%22%20transform%3D%22translate(45.5703125%2C27)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20x%3D%22-37.5703125%22%20y%3D%22-19%22%20width%3D%2275.140625%22%20height%3D%2238%22%20class%3D%22label-container%22%3E%3C%2Frect%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C0)%22%3E%3Cg%20transform%3D%22translate(-27.5703125%2C-9)%22%3E%3CforeignObject%20width%3D%2255.140625%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3EContext%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22node%20default%22%20id%3D%22flowchart-B-7%22%20transform%3D%22translate(267.65625%2C27)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20x%3D%22-44.6875%22%20y%3D%22-19%22%20width%3D%2289.375%22%20height%3D%2238%22%20class%3D%22label-container%22%3E%3C%2Frect%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C0)%22%3E%3Cg%20transform%3D%22translate(-34.6875%2C-9)%22%3E%3CforeignObject%20width%3D%2269.375%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3EContainer%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22node%20default%22%20id%3D%22flowchart-C-9%22%20transform%3D%22translate(503.53125%2C27)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20x%3D%22-51.359375%22%20y%3D%22-19%22%20width%3D%22102.71875%22%20height%3D%2238%22%20class%3D%22label-container%22%3E%3C%2Frect%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C0)%22%3E%3Cg%20transform%3D%22translate(-41.359375%2C-9)%22%3E%3CforeignObject%20width%3D%2282.71875%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3EComponent%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22node%20default%22%20id%3D%22flowchart-D-11%22%20transform%3D%22translate(735.40625%2C27)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20x%3D%22-29.125%22%20y%3D%22-19%22%20width%3D%2258.25%22%20height%3D%2238%22%20class%3D%22label-container%22%3E%3C%2Frect%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C0)%22%3E%3Cg%20transform%3D%22translate(-19.125%2C-9)%22%3E%3CforeignObject%20width%3D%2238.25%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3ECode%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",title:"Diagram generated via mermaid"}),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"We will write like 5% of ",(0,n.kt)("em",{parentName:"p"},"Code")," level documentation, that is not related to documenting code itself. We will write clean, documented code and the absolutely most necessary parts we will describe with one or two ",(0,n.kt)("em",{parentName:"p"},"Code")," level diagrams. The ",(0,n.kt)("em",{parentName:"p"},"Code")," level diagrams tend to deprecate as they are created due to our agile, devops-ial and refactoring nature \u267b\ufe0f!"))),(0,n.kt)("h2",{id:"tooling"},"Tooling"),(0,n.kt)("p",null,"The tool, sadly, has to be chosen first. Sadly, because often one regrets the choice not even one week later."),(0,n.kt)("p",null,"The DevOps culture embraces the ",(0,n.kt)("strong",{parentName:"p"},"YBIYRI")," ",(0,n.kt)("small",null,"You build it, you run it")," philosophy, so from a lecturer point of view I will not imply any choice of tool on you. You can generate the diagrams with anything you want. You can even draw them by hand if you see this future oriented and maintainable."),(0,n.kt)("p",null,"From an experience point of view I suggest you orient towards something that supports:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Versioning"),(0,n.kt)("li",{parentName:"ul"},"Sharing"),(0,n.kt)("li",{parentName:"ul"},"Collaboration")),(0,n.kt)("p",null,"I personally as of 2021 opt for ",(0,n.kt)("inlineCode",{parentName:"p"},"Diagrams As Code")," as you see them within these docs (e.g. above)."),(0,n.kt)("img",{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20id%3D%22mermaid-1636737909757%22%20width%3D%22100%25%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20height%3D%2254%22%20style%3D%22max-width%3A%20167.390625px%3B%22%20viewBox%3D%220%200%20167.390625%2054%22%3E%3Cstyle%3E%23mermaid-1636737909757%7Bfont-family%3A%22trebuchet%20ms%22%2Cverdana%2Carial%2Csans-serif%3Bfont-size%3A16px%3Bfill%3A%23333%3B%7D%23mermaid-1636737909757%20.error-icon%7Bfill%3A%23552222%3B%7D%23mermaid-1636737909757%20.error-text%7Bfill%3A%23552222%3Bstroke%3A%23552222%3B%7D%23mermaid-1636737909757%20.edge-thickness-normal%7Bstroke-width%3A2px%3B%7D%23mermaid-1636737909757%20.edge-thickness-thick%7Bstroke-width%3A3.5px%3B%7D%23mermaid-1636737909757%20.edge-pattern-solid%7Bstroke-dasharray%3A0%3B%7D%23mermaid-1636737909757%20.edge-pattern-dashed%7Bstroke-dasharray%3A3%3B%7D%23mermaid-1636737909757%20.edge-pattern-dotted%7Bstroke-dasharray%3A2%3B%7D%23mermaid-1636737909757%20.marker%7Bfill%3A%23333333%3Bstroke%3A%23333333%3B%7D%23mermaid-1636737909757%20.marker.cross%7Bstroke%3A%23333333%3B%7D%23mermaid-1636737909757%20svg%7Bfont-family%3A%22trebuchet%20ms%22%2Cverdana%2Carial%2Csans-serif%3Bfont-size%3A16px%3B%7D%23mermaid-1636737909757%20.label%7Bfont-family%3A%22trebuchet%20ms%22%2Cverdana%2Carial%2Csans-serif%3Bcolor%3A%23333%3B%7D%23mermaid-1636737909757%20.cluster-label%20text%7Bfill%3A%23333%3B%7D%23mermaid-1636737909757%20.cluster-label%20span%7Bcolor%3A%23333%3B%7D%23mermaid-1636737909757%20.label%20text%2C%23mermaid-1636737909757%20span%7Bfill%3A%23333%3Bcolor%3A%23333%3B%7D%23mermaid-1636737909757%20.node%20rect%2C%23mermaid-1636737909757%20.node%20circle%2C%23mermaid-1636737909757%20.node%20ellipse%2C%23mermaid-1636737909757%20.node%20polygon%2C%23mermaid-1636737909757%20.node%20path%7Bfill%3A%23ECECFF%3Bstroke%3A%239370DB%3Bstroke-width%3A1px%3B%7D%23mermaid-1636737909757%20.node%20.label%7Btext-align%3Acenter%3B%7D%23mermaid-1636737909757%20.node.clickable%7Bcursor%3Apointer%3B%7D%23mermaid-1636737909757%20.arrowheadPath%7Bfill%3A%23333333%3B%7D%23mermaid-1636737909757%20.edgePath%20.path%7Bstroke%3A%23333333%3Bstroke-width%3A1.5px%3B%7D%23mermaid-1636737909757%20.flowchart-link%7Bstroke%3A%23333333%3Bfill%3Anone%3B%7D%23mermaid-1636737909757%20.edgeLabel%7Bbackground-color%3A%23e8e8e8%3Btext-align%3Acenter%3B%7D%23mermaid-1636737909757%20.edgeLabel%20rect%7Bopacity%3A0.5%3Bbackground-color%3A%23e8e8e8%3Bfill%3A%23e8e8e8%3B%7D%23mermaid-1636737909757%20.cluster%20rect%7Bfill%3A%23ffffde%3Bstroke%3A%23aaaa33%3Bstroke-width%3A1px%3B%7D%23mermaid-1636737909757%20.cluster%20text%7Bfill%3A%23333%3B%7D%23mermaid-1636737909757%20.cluster%20span%7Bcolor%3A%23333%3B%7D%23mermaid-1636737909757%20div.mermaidTooltip%7Bposition%3Aabsolute%3Btext-align%3Acenter%3Bmax-width%3A200px%3Bpadding%3A2px%3Bfont-family%3A%22trebuchet%20ms%22%2Cverdana%2Carial%2Csans-serif%3Bfont-size%3A12px%3Bbackground%3Ahsl(80%2C100%25%2C96.2745098039%25)%3Bborder%3A1px%20solid%20%23aaaa33%3Bborder-radius%3A2px%3Bpointer-events%3Anone%3Bz-index%3A100%3B%7D%23mermaid-1636737909757%3Aroot%7B--mermaid-font-family%3A%22trebuchet%20ms%22%2Cverdana%2Carial%2Csans-serif%3B%7D%3C%2Fstyle%3E%3Cg%3E%3Cg%20class%3D%22output%22%3E%3Cg%20class%3D%22clusters%22%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePaths%22%3E%3Cg%20class%3D%22edgePath%20LS-A%20LE-B%22%20id%3D%22L-A-B%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M32.453125%2C27L38.47265625%2C27C44.4921875%2C27%2C56.53125%2C27%2C68.5703125%2C27C80.609375%2C27%2C92.6484375%2C27%2C98.66796875%2C27L104.6875%2C27%22%20marker-end%3D%22url(%23arrowhead8)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead8%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabels%22%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22translate(68.5703125%2C27)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(-11.1171875%2C-9)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%2222.234375%22%20height%3D%2218%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%2222.234375%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-A-B%22%20class%3D%22edgeLabel%20L-LS-A'%20L-LE-B%22%3Eam%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22nodes%22%3E%3Cg%20class%3D%22node%20default%22%20id%3D%22flowchart-A-2%22%20transform%3D%22translate(20.2265625%2C27)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20x%3D%22-12.2265625%22%20y%3D%22-19%22%20width%3D%2224.453125%22%20height%3D%2238%22%20class%3D%22label-container%22%3E%3C%2Frect%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C0)%22%3E%3Cg%20transform%3D%22translate(-2.2265625%2C-9)%22%3E%3CforeignObject%20width%3D%224.453125%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3EI%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22node%20default%22%20id%3D%22flowchart-B-3%22%20transform%3D%22translate(132.0390625%2C27)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20x%3D%22-27.3515625%22%20y%3D%22-19%22%20width%3D%2254.703125%22%20height%3D%2238%22%20class%3D%22label-container%22%3E%3C%2Frect%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C0)%22%3E%3Cg%20transform%3D%22translate(-17.3515625%2C-9)%22%3E%3CforeignObject%20width%3D%2234.703125%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3Ecode%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",title:"Diagram generated via mermaid"}),(0,n.kt)("p",null,"They maybe do not look so pretty but as long as they visualize using C4 ",(0,n.kt)("em",{parentName:"p"},"notation")," I could not care less. ",(0,n.kt)("strong",{parentName:"p"},"Value goes over a tool or fancy notations!")," The same goes for your solutions."),(0,n.kt)("h2",{id:"tools"},"Tools"),(0,n.kt)("p",null,"This is in descending priority of my personal flavour. You can pick yours \u2935\ufe0f"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/tools/plantuml"},"PlantUML")," - or any of its alternatives described in the tools section"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://app.diagrams.net/"},"draw.io")," - also used in subject ",(0,n.kt)("inlineCode",{parentName:"li"},"WEG")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"http://alexdp.free.fr/violetumleditor/page.php"},"Violet UML Editor")," - also used in subjects ",(0,n.kt)("inlineCode",{parentName:"li"},"ALG")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"OOP")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://staruml.io/"},"StarUML")," - also used in subject ",(0,n.kt)("inlineCode",{parentName:"li"},"RME")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://www.gliffy.com/"},"Gliffy")," - \ud83d\udcb0 if you can get your hands on it"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-ww/microsoft-365/visio/flowchart-software"},"Visio\u2122\ufe0f")," - \ud83d\udcb0 if you can get your hands on it"),(0,n.kt)("li",{parentName:"ol"},"Powerpoint\u2122\ufe0f"),(0,n.kt)("li",{parentName:"ol"},"Word\u2122\ufe0f Diagrams")),(0,n.kt)("h3",{id:"recommended"},"Recommended"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://app.diagrams.net/"},"draw.io")," will become the preferred drawing tool for our NDS. It will be added to the recommended ",(0,n.kt)("em",{parentName:"p"},"toolchain")," and used by all subjects starting summer semester 2022."),(0,n.kt)("h3",{id:"vscode"},"VSCode"),(0,n.kt)("p",null,"For VS Code there is ",(0,n.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml"},"a plugin"),", which previews ",(0,n.kt)("inlineCode",{parentName:"p"},".puml")," files ",(0,n.kt)("em",{parentName:"p"},"on the fly")," to the right!"),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"We get to know the Model with the ",(0,n.kt)("a",{parentName:"p",href:"/tasks/bites/c4-model"},"C4 Model")," task and deepen it in the ",(0,n.kt)("a",{parentName:"p",href:"/tasks/c4-exman"},"C4 ExMan")," task."))}C.isMDXComponent=!0}}]);