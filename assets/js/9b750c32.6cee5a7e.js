"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4110],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>s});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),m=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=m(r),s=o,f=d["".concat(i,".").concat(s)]||d[s]||c[s]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var m=2;m<a;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>m});var n=r(7462),o=(r(7294),r(3905));const a={id:"output-format",title:"Output format"},l="Output format",u={unversionedId:"module/output-format",id:"module/output-format",title:"Output format",description:"Our platform provide two output formats for your node modules, but we recommend to use only one, the umd format. The main reason is that the node_modules format can have issues with live reload with some modern frameworks / bundler, mainly because of the cache. So you can still use it but at your discretion.",source:"@site/docs/module/output-format.md",sourceDirName:"module",slug:"/module/output-format",permalink:"/docs/module/output-format",draft:!1,tags:[],version:"current",frontMatter:{id:"output-format",title:"Output format"},sidebar:"mainSidebar",previous:{title:"Frontend frameworks integration",permalink:"/docs/module/integrates-in-frameworks"},next:{title:"Configuration file",permalink:"/docs/module/configuration-file"}},i={},m=[{value:"umd",id:"umd",level:2},{value:"Import example",id:"import-example",level:3},{value:"CLI example",id:"cli-example",level:3},{value:"Config example",id:"config-example",level:3},{value:"node-module",id:"node-module",level:2},{value:"CLI example",id:"cli-example-1",level:3},{value:"Config example",id:"config-example-1",level:3}],p={toc:m};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"output-format"},"Output format"),(0,o.kt)("p",null,"Our platform provide two output formats for your node modules, but we recommend to use only one, the ",(0,o.kt)("em",{parentName:"p"},"umd")," format. The main reason is that the ",(0,o.kt)("em",{parentName:"p"},"node_modules")," format can have issues with live reload with some modern frameworks / bundler, mainly because of the cache. So you can still use it but at your discretion. "),(0,o.kt)("h2",{id:"umd"},"umd"),(0,o.kt)("p",null,"Universal Module Definition (UMD) is capable of working everywhere, be it in the client, on the server or elsewhere."),(0,o.kt)("p",null,"It can be useful to import the client with an HTML ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," tag."),(0,o.kt)("h3",{id:"import-example"},"Import example"),(0,o.kt)("p",null,"After generating a umd module, it can be imported in:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JavaScript")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import MicroService from './umd_module.js'\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const MicroService = require('./umd_module.js')\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HTML")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="umd_module.js"><\/script>\n')),(0,o.kt)("h3",{id:"cli-example"},"CLI example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp build --output umd:./client/src/module-client.js ./server\n")),(0,o.kt)("h3",{id:"config-example"},"Config example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'output: {\n  format: "umd",\n  filePath: "../client/src/functions.js",\n  name: "outputname",\n},\n')),(0,o.kt)("h2",{id:"node-module"},"node-module"),(0,o.kt)("p",null,"Use it to generate a npm module with its ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("p",null,"The path has to be the target directory containing the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," directory."),(0,o.kt)("h3",{id:"cli-example-1"},"CLI example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp build --output node-module:./client/ ./server\n")),(0,o.kt)("h3",{id:"config-example-1"},"Config example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'output: {\n  format: "node-module",\n  projectPath: "../client",\n  name: "outputname",\n},\n')))}c.isMDXComponent=!0}}]);