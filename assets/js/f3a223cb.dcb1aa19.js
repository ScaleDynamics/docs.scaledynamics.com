"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3220],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||v[f]||i;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={id:"view",title:"View Services"},s=void 0,a={unversionedId:"services/view",id:"version-5.0/services/view",title:"View Services",description:"Using the Web console",source:"@site/versioned_docs/version-5.0/services/view.md",sourceDirName:"services",slug:"/services/view",permalink:"/docs/5.0/services/view",draft:!1,tags:[],version:"5.0",frontMatter:{id:"view",title:"View Services"},sidebar:"mainSidebar",previous:{title:"CI/CD",permalink:"/docs/5.0/services/cicd"},next:{title:"Container metrics",permalink:"/docs/5.0/services/metrics"}},c={},l=[{value:"Using the Web console",id:"using-the-web-console",level:3}],u={toc:l},p="wrapper";function v(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"using-the-web-console"},"Using the Web console"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that you can access the console on ",(0,o.kt)("a",null,(0,o.kt)("a",{parentName:"p",href:"https://console.scaledynamics.com"},"https://console.scaledynamics.com")),".")),(0,o.kt)("p",null,"On the 'Runners' page of the web console, you'll be able to view all your runners and for each runner which container services are running."),(0,o.kt)("p",null,"The 'Runners' page takes care of the level your are browsing to help you identify which services are running. If you are on the organization level, you'll see all services of the organization (all environment of all projects)\nIf you are in a project level, you'll see only services of a project (all environment of a project). If your are in an environment level, you'll see only all services of the environment."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/runner-view.png",width:"100%"}),(0,o.kt)("p",null,"Runner view")),(0,o.kt)("p",null,"The running state of each runner/services is shown (look to ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.0/runners/states"},"Runner states")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.0/services/states"},"Service states")," for details)."),(0,o.kt)("p",null,"On the UI you can access ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.0/services/metrics"},"Service metrics")," that shows the activity of the service and helps to identifies issues or optimization to do on the container code,and also identifies performance issues due to the runner. For example the performance of requests is below your expectation: optimize your code, move service to a pouwerfull runner (more RAM, vCPU, GPU)."),(0,o.kt)("p",null,"Note that if you apply a move of service (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.0/services/move"},"Moving servicess"),") you will see a type of service with a 'traffic' icon running on the original runner (A) with this representation:"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/trafficicon.png",width:"100"}),(0,o.kt)("p",null,"Traffic representation")))}v.isMDXComponent=!0}}]);