"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8744],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},v="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),v=p(t),d=a,m=v["".concat(s,".").concat(d)]||v[d]||u[d]||i;return t?n.createElement(m,l(l({ref:r},c),{},{components:t})):n.createElement(m,l({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[v]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1525:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const i={id:"env-variables",title:"Environment variables"},l=void 0,o={unversionedId:"services/env-variables",id:"version-5.1/services/env-variables",title:"Environment variables",description:"Our platform provides a way to send environment variables to your services. When the container service starts, it will have access to these variables in its environment.",source:"@site/versioned_docs/version-5.1/services/env-variables.md",sourceDirName:"services",slug:"/services/env-variables",permalink:"/docs/5.1/services/env-variables",draft:!1,tags:[],version:"5.1",frontMatter:{id:"env-variables",title:"Environment variables"},sidebar:"mainSidebar",previous:{title:"Logs",permalink:"/docs/5.1/services/logs"},next:{title:"Inter Service Traffic",permalink:"/docs/5.1/services/ist"}},s={},p=[{value:"Configuration file&#39;s variables",id:"configuration-files-variables",level:2},{value:"Example of <code>warp.config.js</code>",id:"example-of-warpconfigjs",level:3},{value:"Default exported variables",id:"default-exported-variables",level:2},{value:"General",id:"general",level:3},{value:"For a <code>server</code> service only",id:"for-a-server-service-only",level:3},{value:"WARP_PORT",id:"warp_port",level:4},{value:"PATH",id:"path",level:3}],c={toc:p},v="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(v,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Our platform provides a way to send environment variables to your services. When the container service starts, it will have access to these variables in its environment."),(0,a.kt)("h2",{id:"configuration-files-variables"},"Configuration file's variables"),(0,a.kt)("p",null,"To send variables to a service, you must declare your environment variable in a ",(0,a.kt)("inlineCode",{parentName:"p"},"variables")," object inside the configuration file of the service See ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.1/services/configuration-file"},"configuration file"),". The property names of this object will be the name of your variables. Their value can be a string, an empty string or an object."),(0,a.kt)("h3",{id:"example-of-warpconfigjs"},"Example of ",(0,a.kt)("inlineCode",{parentName:"h3"},"warp.config.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  docker: "docker",\n  variables: {\n    myfirstvar: "value",\n    mysecondvar: "",\n    mythirdvar: {\n      local: true,\n    },\n  },\n};\n')),(0,a.kt)("p",null,"If it is an object (like for ",(0,a.kt)("inlineCode",{parentName:"p"},"mythirdvar")," in the previous example), then its possible values are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  local: true,\n}\n")),(0,a.kt)("p",null,"In this case, the value will be taken from the shell environment variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  empty: true,\n}\n")),(0,a.kt)("p",null,"In this case, the variable will be declared but not assigned a value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  undef: true,\n}\n")),(0,a.kt)("p",null,"In this case, the variable will be undefined."),(0,a.kt)("h2",{id:"default-exported-variables"},"Default exported variables"),(0,a.kt)("h3",{id:"general"},"General"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WARP_PROJECT_ID, the project ID where the service is deployed,"),(0,a.kt)("li",{parentName:"ul"},"WARP_PROJECT, the project name where the service is deployed,"),(0,a.kt)("li",{parentName:"ul"},"WARP_ENV_ID, the environment ID where the service is deployed,"),(0,a.kt)("li",{parentName:"ul"},"WARP_ENV, the environment name where the service is deployed,"),(0,a.kt)("li",{parentName:"ul"},"WARP_SERVICE_ID, the service ID of the deployed service,"),(0,a.kt)("li",{parentName:"ul"},"WARP_SERVICE, the service name of the deployed service,"),(0,a.kt)("li",{parentName:"ul"},"WARP_DEPLOYMENT_ID, the deployment ID,"),(0,a.kt)("li",{parentName:"ul"},"WARP_DEPLOYMENT, the deployment name,"),(0,a.kt)("li",{parentName:"ul"},"WARP_RUNNER_ID, the runner ID where the service is deployed,"),(0,a.kt)("li",{parentName:"ul"},"WARP_RUNNER, the runner name where the service is deployed,")),(0,a.kt)("h3",{id:"for-a-server-service-only"},"For a ",(0,a.kt)("inlineCode",{parentName:"h3"},"server")," service only"),(0,a.kt)("h4",{id:"warp_port"},"WARP_PORT"),(0,a.kt)("p",null,"Contains the port your server listens on."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const express = require("express");\nconst app = express();\nconst port = process.env.WARP_PORT;\n\napp.get("/", (req, res) => {\n  res.send("Hello World!");\n});\n\napp.listen(port, () => {\n  console.log(`Example app listening at http://localhost:${port}`);\n});\n')),(0,a.kt)("h3",{id:"path"},"PATH"),(0,a.kt)("p",null,"Contains the path of the operating system."))}u.isMDXComponent=!0}}]);