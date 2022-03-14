"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1510],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||l;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1492:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return s},toc:function(){return d},default:function(){return p}});var o=n(7462),r=n(3366),l=(n(7294),n(3905)),a=["components"],i={id:"call-from-nodejs",title:"Call from Node.js"},u=void 0,c={unversionedId:"module/call-from-nodejs",id:"module/call-from-nodejs",title:"Call from Node.js",description:"To use the cloud Node.js module from a Node.js script or another Node.js module, you need first to import the client module that was generated after build. You also need to import the Warp Engine that will provide you access to the functions of the module you want to use in your script.",source:"@site/docs/module/call-from-nodejs.md",sourceDirName:"module",slug:"/module/call-from-nodejs",permalink:"/docs/module/call-from-nodejs",tags:[],version:"current",frontMatter:{id:"call-from-nodejs",title:"Call from Node.js"},sidebar:"mainSidebar",previous:{title:"Call from browser using HTML",permalink:"/docs/module/call-from-html"},next:{title:"Frontend frameworks integration",permalink:"/docs/module/integrates-in-frameworks"}},s={},d=[{value:"Import the client module",id:"import-the-client-module",level:2},{value:"Load Warp engine",id:"load-warp-engine",level:2},{value:"Using a require",id:"using-a-require",level:3},{value:"Get client module functions and use them",id:"get-client-module-functions-and-use-them",level:2},{value:"Full example",id:"full-example",level:2}],m={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To use the cloud Node.js module from a Node.js script or another Node.js module, you need first to import the client module that was generated after build. You also need to import the Warp Engine that will provide you access to the functions of the module you want to use in your script."),(0,l.kt)("h2",{id:"import-the-client-module"},"Import the client module"),(0,l.kt)("p",null,"In order to use it from HTML, the client module should have been build in ",(0,l.kt)("inlineCode",{parentName:"p"},"umd")," format. "),(0,l.kt)("p",null,"Then you can requires it with its path:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const MicroService = require('./client_module.js')\n")),(0,l.kt)("h2",{id:"load-warp-engine"},"Load Warp engine"),(0,l.kt)("p",null,"Warp engine provides you the way to call functions of your client module.\nYou have to load it using a Warp engine module dependency. "),(0,l.kt)("h3",{id:"using-a-require"},"Using a require"),(0,l.kt)("p",null,"In case you cannot use or adapt your code to be asynchronous, you can directly import the engine, before requiring the client module. "),(0,l.kt)("p",null,"Of course you need to install it before using it"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @warpjs/engine\n")),(0,l.kt)("p",null,"Then requires it"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"require('@warpjs/engine')\nconst MicroService = require('./client_module.js')\n")),(0,l.kt)("p",null,"Note that you have to manage yourself the dependency of the Warp engine that must be compatible with your client module build."),(0,l.kt)("h2",{id:"get-client-module-functions-and-use-them"},"Get client module functions and use them"),(0,l.kt)("p",null,"Now you have load the client module and warp engine you can set your functions and call them."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { hello } = new MicroService()  \n// Call the function on the client module\nhello('World').then((message) => {  \n  console.log(message)\n})  \n")),(0,l.kt)("h2",{id:"full-example"},"Full example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"require('@warpjs/engine')\nconst MicroService = require('./client_module.js')\nconst { hello } = new MicroService()  \nhello('World').then((message) => {  \n  console.log(message)\n})  \n")))}p.isMDXComponent=!0}}]);