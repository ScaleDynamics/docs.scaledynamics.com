"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2371],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},86129:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={id:"view",title:"View Runners"},l=void 0,s={unversionedId:"runners/view",id:"version-5.2/runners/view",title:"View Runners",description:"Using the Web console",source:"@site/versioned_docs/version-5.2/runners/view.md",sourceDirName:"runners",slug:"/runners/view",permalink:"/docs/5.2/runners/view",draft:!1,tags:[],version:"5.2",frontMatter:{id:"view",title:"View Runners"},sidebar:"mainSidebar",previous:{title:"Add manually a runner",permalink:"/docs/5.2/runners/add"},next:{title:"Delete a runner",permalink:"/docs/5.2/runners/delete"}},i={},c=[{value:"Using the Web console",id:"using-the-web-console",level:2},{value:"Using the SDK",id:"using-the-sdk",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"using-the-web-console"},"Using the Web console"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that you can access the console on ",(0,o.kt)("a",null,(0,o.kt)("a",{parentName:"p",href:"https://console.scaledynamics.com"},"https://console.scaledynamics.com")),".")),(0,o.kt)("p",null,"On the 'Runners' page of the web console, you'll be able to view all your runners and for each runner which container services are running."),(0,o.kt)("p",null,"The 'Runners' page takes care of the level your are browsing to help you identify which services are running. If you are on the organization level, you'll see all services of the organization (all environment of all projects)\nIf you are in a project level, you'll see only services of a project (all environment of a project). If your are in an environment level, you'll see only all services of the environment."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/runner-view.png",width:"100%"}),(0,o.kt)("p",null,"Runner view")),(0,o.kt)("p",null,"The running state of each runner/services is shown (look to ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.2/runners/states"},"Runner states")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.2/services/states"},"Service states")," for details)."),(0,o.kt)("p",null,"On the UI you can access ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.2/runners/metrics"},"Runner metrics")," that can be used to identifies overallocate resources, or underallocated ones to make decisions like allocating a more powerfull runner or a smaller one and move some containers on it."),(0,o.kt)("h2",{id:"using-the-sdk"},"Using the SDK"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.2/caas/caas_sdk"},"SDK installation")," to get the SDK installed.")),(0,o.kt)("p",null,"With the command below list all available runners you can use for deployment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# List all runners\nnpx warp runner list\n")),(0,o.kt)("p",null,"You can also have details on one particular runner using the command below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# List all runners\nnpx warp runner info\n")))}d.isMDXComponent=!0}}]);