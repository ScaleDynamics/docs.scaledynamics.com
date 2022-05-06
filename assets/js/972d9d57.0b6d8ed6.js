"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[937],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9880:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(9750),s=r(4996),l=["components"],u={id:"introduction",title:"Introduction",slug:"/"},c=void 0,d={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"<ThemedImage",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction",slug:"/"},sidebar:"mainSidebar",next:{title:"Features",permalink:"/docs/features"}},p={},m=[{value:"Time to get started",id:"time-to-get-started",level:2}],f={toc:m};function y(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{class:"text--center"},(0,o.kt)(i.Z,{alt:"ScaleDynamics logo",width:"400",sources:{light:(0,s.Z)("/img/sd-dark.png"),dark:(0,s.Z)("/img/sd-white.png")},mdxType:"ThemedImage"})),(0,o.kt)("p",null,"ScaleDynamics is a managed multi-cloud computing platform with advanced and unique cloud management features. The platform handles all the complexity of deploying, managing, and healing your services, with maximum simplicity, security and cloud agility in mind."),(0,o.kt)("p",null,"We provide four different services:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Managed HTTP docker"),", manages the run on the cloud of a docker server to serve over HTTP a microservice, an API, a backend, a CMS, ... You can use your favorite languages (Go, Python, Java, Rust, JavaScript, TypeScript, PHP, .NET..."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Managed Node.js server"),", manages the run on the cloud of a standard Node.js server (no docker to know). You can use your favorite web Node.js framework (i.e. Express, Koa, Fastify, ...) to serve over HTTP a microservice, an API, a Node.js app..."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/module/module-as-a-service"},(0,o.kt)("strong",{parentName:"a"},"Managed Node.js modules"))," is a unique feature that pushes the JavaScript/TypeScript experience to the maximum simplicity, opening new areas of cloud management. Code a standard module, deploy it and call its exported function directly in JavaScript or TypeScript without using HTTP."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Static asset hosting"),", that stores and serves static asset files (.html, .css, .js, .img, .json...) over HTTP. You can use it to serve your frontend files or libraries, an overall statically generated website, or other data.")),(0,o.kt)("p",null,"The platform provides a ",(0,o.kt)("a",{parentName:"p",href:"/docs/features"},"set of features")," so you can manage easily from your laptop your services. We have uniq features like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"1-Click provisioning"),", select on which cloud provider and resource you want to run your services,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Automatized deployment using a command line"),", to make live your service from your laptop or CI/CD,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hot migration"),", change anytime of your cloud provider/resource according to your need (traffic, performance, latency, SLA...),"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"End user and server metrics"),", more than having the execution metrics on the server side, we provide you the end to end user metrics that provides you the real performance of your codes."),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("h2",{id:"time-to-get-started"},"Time to get started"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/docker"},"Deploy your first Docker server in less than 2 minutes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/server"},"Deploy your first Node.js HTTP server in less than 2 minutes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/hosting"},"Deploy your first static website in less than 2 minutes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/module/getting-started"},"Deploy your first Node.js module in less than 2 minutes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/installation"},"Download the SDK to start deploying in one command line"))))}y.isMDXComponent=!0}}]);