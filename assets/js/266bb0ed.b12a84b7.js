"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4326],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,b=u["".concat(s,".").concat(y)]||u[y]||m[y]||o;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={slug:"nest-github-actions",title:"CI/CD with a simple NestJS server",authors:["clem"],tags:["NestJS","SSR","cloud","ScaleDynamics","deploy"]},l=void 0,i={permalink:"/blog/nest-github-actions",source:"@site/blog/2022-02-28-nest-github-actions/index.mdx",title:"CI/CD with a simple NestJS server",description:"In this tutorial, we will see how we can make a CI/CD (Continuous Integration and Continuous Delivery) script with GitHub Actions and a simple NestJS server.",date:"2022-02-28T00:00:00.000Z",formattedDate:"February 28, 2022",tags:[{label:"NestJS",permalink:"/blog/tags/nest-js"},{label:"SSR",permalink:"/blog/tags/ssr"},{label:"cloud",permalink:"/blog/tags/cloud"},{label:"ScaleDynamics",permalink:"/blog/tags/scale-dynamics"},{label:"deploy",permalink:"/blog/tags/deploy"}],readingTime:6.785,hasTruncateMarker:!0,authors:[{name:"Cl\xe9ment Poisson",title:"Full Stack Engineer @ ScaleDynamics",key:"clem"}],frontMatter:{slug:"nest-github-actions",title:"CI/CD with a simple NestJS server",authors:["clem"],tags:["NestJS","SSR","cloud","ScaleDynamics","deploy"]},prevItem:{title:"How to deploy Drupal on cloud with Docker",permalink:"/blog/drupal-on-docker"},nextItem:{title:"Deploy a Next.js SSR application",permalink:"/blog/next-js-ssr"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial, we will see how we can make a CI/CD (Continuous Integration and Continuous Delivery) script with GitHub Actions and a simple NestJS server."))}m.isMDXComponent=!0}}]);