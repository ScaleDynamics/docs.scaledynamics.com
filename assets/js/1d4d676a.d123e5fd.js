"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),v=o,f=p["".concat(s,".").concat(v)]||p[v]||d[v]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},93178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={id:"states",title:"Service states"},a=void 0,l={unversionedId:"services/states",id:"services/states",title:"Service states",description:"A container service can have several states.",source:"@site/docs/services/states.md",sourceDirName:"services",slug:"/services/states",permalink:"/docs/next/services/states",draft:!1,tags:[],version:"current",frontMatter:{id:"states",title:"Service states"},sidebar:"mainSidebar",previous:{title:"Container metrics",permalink:"/docs/next/services/metrics"},next:{title:"Introduction",permalink:"/docs/next/carbon/introduction"}},s={},c=[{value:"Deploy ongoing",id:"deploy-ongoing",level:2},{value:"Deploy error",id:"deploy-error",level:2},{value:"Running",id:"running",level:2},{value:"Delete ongoing",id:"delete-ongoing",level:2},{value:"Delete error",id:"delete-error",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A container service can have several states."),(0,o.kt)("h2",{id:"deploy-ongoing"},"Deploy ongoing"),(0,o.kt)("p",null,"A deployment of the service is ongoing and not finished."),(0,o.kt)("h2",{id:"deploy-error"},"Deploy error"),(0,o.kt)("p",null,"The last deployment has failed. Can be due to an issue of one of the deployment step like contacting the runner, or building the container docker image.\nWhen you are in this state you can launch a new deployment or delete the service."),(0,o.kt)("h2",{id:"running"},"Running"),(0,o.kt)("p",null,"The service is deployed and running. Metrics are collected.\nWhen you are in this state you can ask for a service deletion."),(0,o.kt)("h2",{id:"delete-ongoing"},"Delete ongoing"),(0,o.kt)("p",null,"The service deletion is ongoing and not finished."),(0,o.kt)("h2",{id:"delete-error"},"Delete error"),(0,o.kt)("p",null,"The service deletion has failed. This can be due to an of one of the deployment step like contacting the runner. When you are in this state you can retry the deletion of the service."))}d.isMDXComponent=!0}}]);