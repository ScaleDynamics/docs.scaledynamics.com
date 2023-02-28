"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),d=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),c=r,h=p["".concat(u,".").concat(c)]||p[c]||m[c]||a;return n?o.createElement(h,l(l({ref:t},s),{},{components:n})):o.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={id:"development",title:"Develop your modules"},l=void 0,i={unversionedId:"module/development",id:"version-5.0.2/module/development",title:"Develop your modules",description:"In this page we describe how to build, emulate and develop a cloud Node.js module on our platform.",source:"@site/versioned_docs/version-5.0.2/module/development.md",sourceDirName:"module",slug:"/module/development",permalink:"/docs/module/development",draft:!1,tags:[],version:"5.0.2",frontMatter:{id:"development",title:"Develop your modules"},sidebar:"mainSidebar",previous:{title:"Getting started",permalink:"/docs/module/getting-started"},next:{title:"TypeScript support",permalink:"/docs/module/typescript"}},u={},d=[{value:"Install the SDK and start a session",id:"install-the-sdk-and-start-a-session",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Build the module",id:"build-the-module",level:2},{value:"Emulate the module",id:"emulate-the-module",level:2},{value:"Development of the module with live reload",id:"development-of-the-module-with-live-reload",level:2}],s={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this page we describe how to build, emulate and develop a cloud Node.js module on our platform."),(0,r.kt)("h2",{id:"install-the-sdk-and-start-a-session"},"Install the SDK and start a session"),(0,r.kt)("p",null,"If you haven't installed the SDK globally, you need to add it as a dependency to your module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install warp\n")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"We consider the Node.js module that you want our platform to manage contains at least a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," and a main script (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),")."),(0,r.kt)("p",null,"Your module is a standard Node.js one that can have other module dependencies. Local resources like config files, images, ... must be located within the module directory."),(0,r.kt)("h2",{id:"build-the-module"},"Build the module"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," command to build the module. You need to indicate which client module output to use and where to store it."),(0,r.kt)("p",null,"Note that when running this command, you have to select a project. On the ScaleDynamics platform, a project identifies an application or a microservice. If you are logged, select an existing project or create a new one.\nYou can also use the platform anonymously by selecting the ",(0,r.kt)("strong",{parentName:"p"},"anonymous")," project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp build --output node-module:../browser\n")),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{src:"/img/docs/module-build.png",alt:"building",width:"500"})),(0,r.kt)("h2",{id:"emulate-the-module"},"Emulate the module"),(0,r.kt)("p",null,"To emulate the module on your computer just use the ",(0,r.kt)("inlineCode",{parentName:"p"},"emulator")," command that will start your module emulation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp emulator run\n")),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{src:"/img/docs/module-emulatorrun.png",alt:"emulator run",width:"180"})),(0,r.kt)("h2",{id:"development-of-the-module-with-live-reload"},"Development of the module with live reload"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dev")," command provides you a way to develop with live reload. It builds and starts an emulator, and at each change of your module code it rebuilds and restarts the emulator."),(0,r.kt)("p",null,"Note that when running this command, you have to select a project. On the ScaleDynamics platform, a project identifies an application or a microservice. If you are logged, select an existing project or create a new one.\nYou can also use the platform anonymously by selecting the ",(0,r.kt)("strong",{parentName:"p"},"anonymous")," project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp dev --output node-module:../browser\n")),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{src:"/img/docs/module-dev.png",alt:"dev session",width:"500"})))}m.isMDXComponent=!0}}]);