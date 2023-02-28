"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6245],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>y});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(o),p=r,y=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return o?n.createElement(y,l(l({ref:t},u),{},{components:o})):n.createElement(y,l({ref:t},u))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5213:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={id:"module-as-a-service",title:"Module-as-a-Service"},l=void 0,i={unversionedId:"module/module-as-a-service",id:"module/module-as-a-service",title:"Module-as-a-Service",description:"ScaleDynamics Containers-as-a-Service provides a way (in beta) to run Node.js module as a service using containeurs.",source:"@site/docs/module/module-as-a-service.md",sourceDirName:"module",slug:"/module/module-as-a-service",permalink:"/docs/next/module/module-as-a-service",draft:!1,tags:[],version:"current",frontMatter:{id:"module-as-a-service",title:"Module-as-a-Service"}},s={},c=[{value:"Time to get started",id:"time-to-get-started",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ScaleDynamics Containers-as-a-Service provides a way (in beta) to run Node.js module as a service using containeurs."),(0,r.kt)("p",null,"The principle is simple: create a standard Node.js module, deploy it to make it live inside a container and call its exported functions in JavaScript or TypeScript with traditional function calls. No need to learn, use, configure, or route HTTP, all is managed for you."),(0,r.kt)("i",null,"When you say I call my module, what does that mean?"),(0,r.kt)("p",null,"It means that instead of doing an call from your JavaScript browser or Node.js to call your hosted module, you import the module like any other module and you call its exported JavaScript/TypeScript functions using objects. No need to learn, use, configure, route HTTP, behind the scene our compiler does all that for you, from advanced JS object serialization, integrity checks, try/catch forwards, HTTP layer management..."),(0,r.kt)("i",null,"Seems awesome! Want an example?"),(0,r.kt)("p",null,"For example the module below exports a ",(0,r.kt)("inlineCode",{parentName:"p"},"hello")," function."),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{width:"450",src:"/img/docs/be-w-w.png",alt:"module as a service code"})),(0,r.kt)("p",null,"After build we generate a client module that can be imported on the client side (browser, Node.js, node-red... like a standard module, so you can call the ",(0,r.kt)("inlineCode",{parentName:"p"},"hello"),"function like a standard function."),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{width:"450",src:"/img/docs/client-w-w.png",alt:"call a module as a service"})),(0,r.kt)("p",null,"Deploy the module and your clients will call the hosted module. That's it!"),(0,r.kt)("i",null,"What do you mean by client module?"),(0,r.kt)("p",null,"You can see the client module like a driver to access your own hosted module. For example to access mongodb from Node.js you use the mongodb driver module (you don't manage HTTP calls behind the scene). Similarly, to access your own hosted module, you use the client module."),(0,r.kt)("p",null,"Our tools automatically generate the client module to access your hosted module functions, nothing to code on your side."),(0,r.kt)("i",null,"Do I have all the tools I need to start coding this way?"),(0,r.kt)("p",null,"Yes, we provide all you need to code, deploy and manage the run of your modules."),(0,r.kt)("i",null,"Looking for some use cases?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"module is only accessed from a JavaScript client (browser, Node.js script, Node.js server or function),"),(0,r.kt)("li",{parentName:"ul"},"want to keep your microservice private not accessible from HTTP?"),(0,r.kt)("li",{parentName:"ul"},"want to develop a backend specific to a browser frontend?"),(0,r.kt)("li",{parentName:"ul"},"want to develop super fast without HTTP learning, configuration, coding?"),(0,r.kt)("li",{parentName:"ul"},"want to expose your module on npm, or within your team so any other JS developer can use your microservice?"),(0,r.kt)("li",{parentName:"ul"},"want to use TypeScript to specifiy the APIs between microservices ?")),(0,r.kt)("h2",{id:"time-to-get-started"},"Time to get started"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/module/getting-started"},"Deploy your first Managed Node.js module in less than 2 minutes"))))}m.isMDXComponent=!0}}]);