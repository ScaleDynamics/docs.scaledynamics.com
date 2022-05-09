"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2233],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),v=u(t),d=a,f=v["".concat(s,".").concat(d)]||v[d]||c[d]||l;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=v;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},3747:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],i={id:"env-variables",title:"Environment variables"},s=void 0,u={unversionedId:"advanced-usage/env-variables",id:"advanced-usage/env-variables",title:"Environment variables",description:"Our platform defines environment variables that you can use in your project, and allow you to add any variables you want in the configuration file.",source:"@site/docs/advanced-usage/env-variables.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/env-variables",permalink:"/docs/advanced-usage/env-variables",draft:!1,tags:[],version:"current",frontMatter:{id:"env-variables",title:"Environment variables"},sidebar:"mainSidebar",previous:{title:"Logs",permalink:"/docs/advanced-usage/logs"},next:{title:"CI/CD",permalink:"/docs/advanced-usage/cicd"}},p={},c=[{value:"Configuration file&#39;s variables",id:"configuration-files-variables",level:2},{value:"Example",id:"example",level:3},{value:"Default exported variables",id:"default-exported-variables",level:2},{value:"WARP_PORT",id:"warp_port",level:3},{value:"WARP_ENV",id:"warp_env",level:3},{value:"PATH",id:"path",level:3}],v={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Our platform defines environment variables that you can use in your project, and allow you to add any variables you want in the configuration file."),(0,l.kt)("h2",{id:"configuration-files-variables"},"Configuration file's variables"),(0,l.kt)("p",null,"You must declare your environment variable in a ",(0,l.kt)("inlineCode",{parentName:"p"},"variables")," object inside your configuration file. The property names of this object will be the name of your variables. Their value can be a string, an empty string or an object. "),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'variables: {\n  myfirstvar: "value",\n  mysecondvar: "",\n  mythirdvar: {\n    local: true,\n  }\n}\n')),(0,l.kt)("p",null,"If it is an object, then its possible values are:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  local: true,\n}\n")),(0,l.kt)("p",null,"In this case, the value will be taken from the CLI."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  empty: true,\n}\n")),(0,l.kt)("p",null,"In this case, the variable will be declared but not assigned a value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  undef: true,\n}\n")),(0,l.kt)("p",null,"In this case, the variable will be undefined."),(0,l.kt)("h2",{id:"default-exported-variables"},"Default exported variables"),(0,l.kt)("h3",{id:"warp_port"},"WARP_PORT"),(0,l.kt)("p",null,"Only available for a server."),(0,l.kt)("p",null,"Contains the port your server listens on."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express')\nconst app = express()\nconst port = process.env.WARP_PORT\n\napp.get('/', (req, res) => {\n  res.send('Hello World!')\n})\n\napp.listen(port, () => {\n  console.log(`Example app listening at http://localhost:${port}`)\n})\n")),(0,l.kt)("h3",{id:"warp_env"},"WARP_ENV"),(0,l.kt)("p",null,"Contains the environment your project is running in."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express')\nconst app = express()\nconst env = process.env.WARP_ENV\n\napp.get('/', (req, res) => {\n  res.send('Hello World!')\n})\n\napp.listen(port, () => {\n  console.log(`Example app is running in env ${env}`)\n})\n")),(0,l.kt)("h3",{id:"path"},"PATH"),(0,l.kt)("p",null,"Only available for a server."),(0,l.kt)("p",null,"Contains the path of the operating system."))}d.isMDXComponent=!0}}]);