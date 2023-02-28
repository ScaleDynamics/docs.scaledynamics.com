"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1343],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,f=u["".concat(s,".").concat(d)]||u[d]||v[d]||l;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const l={id:"env-variables",title:"Environment variables"},o=void 0,i={unversionedId:"containers/env-variables",id:"version-5.0.2/containers/env-variables",title:"Environment variables",description:"Our platform defines environment variables that you can use in your project, and allow you to add any variables you want in the configuration file.",source:"@site/versioned_docs/version-5.0.2/containers/env-variables.md",sourceDirName:"containers",slug:"/containers/env-variables",permalink:"/docs/5.0.2/containers/env-variables",draft:!1,tags:[],version:"5.0.2",frontMatter:{id:"env-variables",title:"Environment variables"},sidebar:"mainSidebar",previous:{title:"Logs",permalink:"/docs/5.0.2/containers/logs"},next:{title:"CI/CD",permalink:"/docs/5.0.2/containers/cicd"}},s={},p=[{value:"Configuration file&#39;s variables",id:"configuration-files-variables",level:2},{value:"Example",id:"example",level:3},{value:"Default exported variables",id:"default-exported-variables",level:2},{value:"WARP_PORT",id:"warp_port",level:3},{value:"WARP_ENV",id:"warp_env",level:3},{value:"PATH",id:"path",level:3}],c={toc:p},u="wrapper";function v(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Our platform defines environment variables that you can use in your project, and allow you to add any variables you want in the configuration file."),(0,a.kt)("h2",{id:"configuration-files-variables"},"Configuration file's variables"),(0,a.kt)("p",null,"You must declare your environment variable in a ",(0,a.kt)("inlineCode",{parentName:"p"},"variables")," object inside your configuration file. The property names of this object will be the name of your variables. Their value can be a string, an empty string or an object. "),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'variables: {\n  myfirstvar: "value",\n  mysecondvar: "",\n  mythirdvar: {\n    local: true,\n  }\n}\n')),(0,a.kt)("p",null,"If it is an object, then its possible values are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  local: true,\n}\n")),(0,a.kt)("p",null,"In this case, the value will be taken from the CLI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  empty: true,\n}\n")),(0,a.kt)("p",null,"In this case, the variable will be declared but not assigned a value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  undef: true,\n}\n")),(0,a.kt)("p",null,"In this case, the variable will be undefined."),(0,a.kt)("h2",{id:"default-exported-variables"},"Default exported variables"),(0,a.kt)("h3",{id:"warp_port"},"WARP_PORT"),(0,a.kt)("p",null,"Only available for a server."),(0,a.kt)("p",null,"Contains the port your server listens on."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express')\nconst app = express()\nconst port = process.env.WARP_PORT\n\napp.get('/', (req, res) => {\n  res.send('Hello World!')\n})\n\napp.listen(port, () => {\n  console.log(`Example app listening at http://localhost:${port}`)\n})\n")),(0,a.kt)("h3",{id:"warp_env"},"WARP_ENV"),(0,a.kt)("p",null,"Contains the environment your project is running in."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express')\nconst app = express()\nconst env = process.env.WARP_ENV\n\napp.get('/', (req, res) => {\n  res.send('Hello World!')\n})\n\napp.listen(port, () => {\n  console.log(`Example app is running in env ${env}`)\n})\n")),(0,a.kt)("h3",{id:"path"},"PATH"),(0,a.kt)("p",null,"Only available for a server."),(0,a.kt)("p",null,"Contains the path of the operating system."))}v.isMDXComponent=!0}}]);