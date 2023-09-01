"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6733],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},v=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),v=o,f=p["".concat(s,".").concat(v)]||p[v]||m[v]||i;return r?t.createElement(f,a(a({ref:n},u),{},{components:r})):t.createElement(f,a({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=v;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}v.displayName="MDXCreateElement"},78982:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=r(87462),o=(r(67294),r(3905));const i={id:"move",title:"Moving a service"},a=void 0,c={unversionedId:"services/move",id:"version-5.3/services/move",title:"Moving a service",description:"Using the SDK ClI you can move a container service running on a specific runner to another runner.",source:"@site/versioned_docs/version-5.3/services/move.md",sourceDirName:"services",slug:"/services/move",permalink:"/docs/services/move",draft:!1,tags:[],version:"5.3",frontMatter:{id:"move",title:"Moving a service"},sidebar:"mainSidebar",previous:{title:"Inter Service Traffic",permalink:"/docs/services/ist"},next:{title:"CI/CD",permalink:"/docs/services/cicd"}},s={},l=[{value:"Principle",id:"principle",level:2},{value:"CLI",id:"cli",level:2}],u={toc:l},p="wrapper";function m(e){let{components:n,...r}=e;return(0,o.kt)(p,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using the SDK ClI you can move a container service running on a specific runner to another runner."),(0,o.kt)("h2",{id:"principle"},"Principle"),(0,o.kt)("p",null,"When asking to move a service from a runner (A) to another runner (B), the platform handles the automatic re-deployment of the\nlast deployed service on the new runner, configure the certicates and update DNS entries."),(0,o.kt)("p",null,"The move is realized in 'hot' way meaning that the end user accessing the service does not have any\nbreaks of traffic."),(0,o.kt)("p",null,"In order to maintain the traffic and due to the DNS propagation time and caches, on the original runner (A)\nwe run a redirection of the traffic for the service moved on runner (B)."),(0,o.kt)("p",null,"This is why on the 'runner' page of the console you will see a type of service with a 'traffic' icon running on the original runner (A) with this representation:"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/trafficicon.png",width:"100"}),(0,o.kt)("p",null,"Traffic representation")),(0,o.kt)("p",null,"Using the console you can delete the traffic redirection any time according to you DNS propagation time. In general one hour.\nBy default the platform deletes the redirection after 24 hours."),(0,o.kt)("h2",{id:"cli"},"CLI"),(0,o.kt)("p",null,"To move a service to a new runner, use the command below. ",(0,o.kt)("em",{parentName:"p"},"<service_name>"),"\ncorresponds to the name of\nthe service you want to move in the environment and ",(0,o.kt)("em",{parentName:"p"},"<runner_name>")," corresponds to the runner\nyou want to move your service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env runner set <service_name> <runner_name>\n")),(0,o.kt)("p",null,"To get the list of all service names and associated urls of one environment, use the command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env info\n")),(0,o.kt)("p",null,"If you need to have the list of available runners for that env, use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp runner list\n")))}m.isMDXComponent=!0}}]);