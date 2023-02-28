"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5548],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(h,i(i({ref:t},s),{},{components:n})):o.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:l,i[1]=a;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var o=n(7462),l=(n(7294),n(3905));const r={id:"call-from-html",title:"Call from browser using HTML"},i=void 0,a={unversionedId:"module/call-from-html",id:"module/call-from-html",title:"Call from browser using HTML",description:"To use the cloud Node.js module from a Browser script, you need first to import the client module that was generated after build. You also need to import the Warp Engine that will provide you access to the functions of the module you want to use in your script.",source:"@site/docs/module/call-from-html.md",sourceDirName:"module",slug:"/module/call-from-html",permalink:"/docs/next/module/call-from-html",draft:!1,tags:[],version:"current",frontMatter:{id:"call-from-html",title:"Call from browser using HTML"}},c={},u=[{value:"Import the client module",id:"import-the-client-module",level:2},{value:"Get access to the module",id:"get-access-to-the-module",level:2},{value:"Load Warp engine",id:"load-warp-engine",level:2},{value:"Using <code>loadEngine()</code>",id:"using-loadengine",level:3},{value:"Using an engine script",id:"using-an-engine-script",level:3},{value:"Get client module functions and use them",id:"get-client-module-functions-and-use-them",level:2},{value:"Full example",id:"full-example",level:2}],s={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To use the cloud Node.js module from a Browser script, you need first to import the client module that was generated after build. You also need to import the Warp Engine that will provide you access to the functions of the module you want to use in your script."),(0,l.kt)("h2",{id:"import-the-client-module"},"Import the client module"),(0,l.kt)("p",null,"In order to use it from HTML, the client module should have been build in ",(0,l.kt)("inlineCode",{parentName:"p"},"umd")," format."),(0,l.kt)("p",null,"In your html, you have to import it using a script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="client_module.js"><\/script>\n')),(0,l.kt)("h2",{id:"get-access-to-the-module"},"Get access to the module"),(0,l.kt)("p",null,"Now you loaded it, you need to get access to it. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  const MicroService = window['module-client']\n<\/script>\n")),(0,l.kt)("h2",{id:"load-warp-engine"},"Load Warp engine"),(0,l.kt)("p",null,"Next step is to load the Warp engine. Warp engine provides you the way to call functions of your Node.js module using its client. You have 2 ways to load it: using ",(0,l.kt)("inlineCode",{parentName:"p"},"loadEngine")," client module function or using a Warp engine module dependency. "),(0,l.kt)("h3",{id:"using-loadengine"},"Using ",(0,l.kt)("inlineCode",{parentName:"h3"},"loadEngine()")),(0,l.kt)("p",null,"A client-module provides a ",(0,l.kt)("inlineCode",{parentName:"p"},"loadEngine")," function. That function will load the latest compatible release of the Warp engine for the client module build. We recommend using this way because you never have to manage the Warp engine version. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  const MicroService = window['module-client']\n  MicroService.loadEngine().then( ... )\n<\/script>\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  const MicroService = window['module-client']\n  async function start() {\n    await MicroService.loadEngine()\n  }\n  start()\n<\/script>\n")),(0,l.kt)("h3",{id:"using-an-engine-script"},"Using an engine script"),(0,l.kt)("p",null,"In case you cannot use or adapt your code to be asynchronous and use the ",(0,l.kt)("inlineCode",{parentName:"p"},"loadEngine")," way, you can directly import the engine from an url before loading the client module. At each release of a warp engine we push it on a CDN. You then have to load the right engine version which should match with the Warp version you used when building the client module. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.scaledynamics.com/warp-engine/5.0.0/engine-web-prod.js"><\/script>\n<script src="client_module.js"><\/script>\n')),(0,l.kt)("p",null,"Note that you have to manage yourself the dependency of the Warp engine that must be compatible with your client module build."),(0,l.kt)("h2",{id:"get-client-module-functions-and-use-them"},"Get client module functions and use them"),(0,l.kt)("p",null,"Now you have loaded the client module and warp engine you can set your functions and call them."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<script>\nconst MicroService = window['module-client']\nMicroService.loadEngine().then(()=> {\n  const { hello } = new MicroService()  \n  hello('World').then((message) => {  \n    console.log(message)\n  })  \n})\n<\/script>\n")),(0,l.kt)("h2",{id:"full-example"},"Full example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width,initial-scale=1" />\n    <title>You Node.js module use</title>\n  </head>\n  <body>\n    ...\n    <script src="client_module.js"><\/script>\n    <script>\n      const MicroService = window[\'module-client\']\n      MicroService.loadEngine().then(()=> {\n        const { hello } = new MicroService()  \n        hello(\'World\').then((message) => {  \n          console.log(message)\n        })  \n      })\n    <\/script>\n  </body>\n</html>\n')))}p.isMDXComponent=!0}}]);