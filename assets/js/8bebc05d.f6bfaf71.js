"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(7462),l=(n(7294),n(3905));const r={id:"logs",title:"Logs"},a=void 0,i={unversionedId:"containers/logs",id:"version-5.0.2/containers/logs",title:"Logs",description:"With the CLI of the SDK, you can access the execution logs of all your deployed projects.",source:"@site/versioned_docs/version-5.0.2/containers/logs.md",sourceDirName:"containers",slug:"/containers/logs",permalink:"/docs/containers/logs",draft:!1,tags:[],version:"5.0.2",frontMatter:{id:"logs",title:"Logs"},sidebar:"mainSidebar",previous:{title:"Password protection",permalink:"/docs/containers/password-protection"},next:{title:"Environment variables",permalink:"/docs/containers/env-variables"}},s={},p=[{value:"Get the list of deployments",id:"get-the-list-of-deployments",level:2},{value:"Get logs of a deployment",id:"get-logs-of-a-deployment",level:2},{value:"To get realtime update of logs",id:"to-get-realtime-update-of-logs",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"With the CLI of the SDK, you can access the execution logs of all your deployed projects."),(0,l.kt)("h2",{id:"get-the-list-of-deployments"},"Get the list of deployments"),(0,l.kt)("p",null,"You will need to select a project and a environment before or during the prompt of the command."),(0,l.kt)("p",null,"Then to get the list of all deployments let's use this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deployment list\n")),(0,l.kt)("p",null,"The command will dump you something like that:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"logs list",src:n(3758).Z,width:"1386",height:"246"})),(0,l.kt)("h2",{id:"get-logs-of-a-deployment"},"Get logs of a deployment"),(0,l.kt)("p",null,"You can fetch the logs in two different ways, one being with the name of the deployment you can find with the list command above, or via an interactive prompt:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"  npx warp deployment logs deployment-2021-08-06T14:46:04.890Z\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"  npx warp deployment logs\n")),(0,l.kt)("p",null,"The result will give you something like that (interactive prompt mode, but the end result will be the same):"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"logs gif",src:n(5543).Z,width:"1852",height:"480"})),(0,l.kt)("p",null,"You can display the level of logs using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--level <level>")," where ",(0,l.kt)("inlineCode",{parentName:"p"},"<level>")," can be:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build")," for build logs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stdout")," for stdout logs of the container"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stderr")," for stderr logs of the container"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"system"),", for logs related to scaledynamics platform like (container start, or container stop)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"access"),", for logs related to HTTP requests")),(0,l.kt)("h2",{id:"to-get-realtime-update-of-logs"},"To get realtime update of logs"),(0,l.kt)("p",null,"To fetch the server logs and follow in realtime, use the previous commands with ",(0,l.kt)("inlineCode",{parentName:"p"},"--follow")," flag :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"  npx warp deployment logs --follow deployment-2021-08-06T14:46:04.890Z\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"logs follow gif",src:n(3111).Z,width:"1754",height:"486"})))}u.isMDXComponent=!0},3111:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/logs-follow-598e5c844f5328e74f244fc009c132eb.gif"},3758:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/logs-list-12e23de2d478fff63fce555c13ce2e48.png"},5543:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/logs-134ae55a0c3f7bb0d829e6ea6018c4e4.gif"}}]);