"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3835],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,v=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return t?r.createElement(v,i(i({ref:n},u),{},{components:t})):r.createElement(v,i({ref:n},u))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},423:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={id:"move",title:"Moving a service"},i=void 0,c={unversionedId:"services/move",id:"services/move",title:"Moving a service",description:"Using the SDK ClI you can move a container service running on a specific runner to another runner.",source:"@site/docs/services/move.md",sourceDirName:"services",slug:"/services/move",permalink:"/docs/next/services/move",draft:!1,tags:[],version:"current",frontMatter:{id:"move",title:"Moving a service"},sidebar:"mainSidebar",previous:{title:"Inter Service Traffic",permalink:"/docs/next/services/ist"},next:{title:"CI/CD",permalink:"/docs/next/services/cicd"}},s={},l=[{value:"Principle",id:"principle",level:2},{value:"CLI",id:"cli",level:2}],u={toc:l},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using the SDK ClI you can move a container service running on a specific runner to another runner."),(0,o.kt)("h2",{id:"principle"},"Principle"),(0,o.kt)("p",null,"When asking to move a service from a runner (A) to another runner (B), the platform handles the automatic re-deployment of the\nlast deployed service on the new runner, configure the certicates and update DNS entries."),(0,o.kt)("p",null,"The move is realized in 'hot' way meaning that the end user accessing the service does not have any\nbreaks of traffic."),(0,o.kt)("p",null,"In order to maintain the traffic and due to the DNS propagation time and caches, on the original runner (A)\nwe run a redirection of the traffic for the service moved on runner (B)."),(0,o.kt)("p",null,"This is why on the 'runner' page of the console you will see a type of service with a 'traffic' icon running on the original runner (A) with this representation:"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/trafficicon.png",width:"100"}),(0,o.kt)("p",null,"Traffic representation")),(0,o.kt)("p",null,"Using the console you can delete the traffic redirection any time according to you DNS propagation time. In general one hour.\nBy default the platform deletes the redirection after 24 hours."),(0,o.kt)("h2",{id:"cli"},"CLI"),(0,o.kt)("p",null,"To move a service to a new runner, use the command below. ",(0,o.kt)("em",{parentName:"p"},"<service_name>"),"\ncorresponds to the name of\nthe service you want to move in the environment and ",(0,o.kt)("em",{parentName:"p"},"<runner_name>")," corresponds to the runner\nyou want to move your service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env runner set <service_name> <runner_name>\n")),(0,o.kt)("p",null,"To get the list of all service names and associated urls of one environment, use the command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env info\n")),(0,o.kt)("p",null,"If you need to have the list of available runners for that env, use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp runner list\n")))}m.isMDXComponent=!0}}]);