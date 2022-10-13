"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),c=u(n),f=i,m=c["".concat(d,".").concat(f)]||c[f]||p[f]||l;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=c;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const l={id:"configuration-file",title:"Configuration file"},o=void 0,r={unversionedId:"containers/configuration-file",id:"containers/configuration-file",title:"Configuration file",description:"The configuration is a optional JavaScript file where you can easily configure some parameters of your project. The file named warp.config.js is a module that exports a default object, or an array of objects. Alternatively, you can export a function that return these same objects. If you use the CLI, the configuration file's values are overridden by the CLI's parameters. This file is optional because our SDK can detect a basic configuration (if you have a dockerfile for example).",source:"@site/docs/containers/configuration-file.md",sourceDirName:"containers",slug:"/containers/configuration-file",permalink:"/docs/containers/configuration-file",draft:!1,tags:[],version:"current",frontMatter:{id:"configuration-file",title:"Configuration file"},sidebar:"mainSidebar",previous:{title:"Deployment",permalink:"/docs/containers/deployment"},next:{title:"Moving containers",permalink:"/docs/containers/move"}},d={},u=[{value:"Docker config",id:"docker-config",level:2},{value:"Example of <code>warp.config.js</code>",id:"example-of-warpconfigjs",level:3},{value:"Attribute list",id:"attribute-list",level:3},{value:"docker",id:"docker",level:4},{value:"dockerfile",id:"dockerfile",level:4},{value:"variables",id:"variables",level:4},{value:"deployment",id:"deployment",level:4},{value:"deployment.include",id:"deploymentinclude",level:5},{value:"deployment.exclude",id:"deploymentexclude",level:5},{value:"deployment.variables",id:"deploymentvariables",level:5},{value:"deployment.baseUrlId",id:"deploymentbaseurlid",level:5},{value:"Server config",id:"server-config",level:2},{value:"Example of <code>warp.config.js</code>",id:"example-of-warpconfigjs-1",level:3},{value:"Attribute list",id:"attribute-list-1",level:3},{value:"server",id:"server",level:4},{value:"variables",id:"variables-1",level:4},{value:"deployment",id:"deployment-1",level:4},{value:"deployment.include",id:"deploymentinclude-1",level:5},{value:"deployment.exclude",id:"deploymentexclude-1",level:5},{value:"deployment.baseUrlId",id:"deploymentbaseurlid-1",level:5},{value:"deployment.engine",id:"deploymentengine",level:5},{value:"deployment.variables",id:"deploymentvariables-1",level:5},{value:"Hosting config",id:"hosting-config",level:2},{value:"Example of <code>warp.config.js</code>",id:"example-of-warpconfigjs-2",level:3},{value:"Attribute List",id:"attribute-list-2",level:3},{value:"hosting",id:"hosting",level:4},{value:"include",id:"include",level:4},{value:"exclude",id:"exclude",level:4},{value:"public",id:"public",level:4},{value:"deployment",id:"deployment-2",level:4},{value:"deployment.baseUrlId",id:"deploymentbaseurlid-2",level:5},{value:"Variables",id:"variables-2",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The configuration is a ",(0,i.kt)("em",{parentName:"p"},"optional")," JavaScript file where you can easily configure some parameters of your project. The file named ",(0,i.kt)("inlineCode",{parentName:"p"},"warp.config.js")," is a module that exports a default object, or an array of objects. Alternatively, you can export a function that return these same objects. If you use the CLI, the configuration file's values are overridden by the CLI's parameters. This file is optional because our SDK can detect a basic configuration (if you have a dockerfile for example)."),(0,i.kt)("p",null,"The objects exported can be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a docker configuration"),(0,i.kt)("li",{parentName:"ul"},"a server configuration"),(0,i.kt)("li",{parentName:"ul"},"a hosting configuration")),(0,i.kt)("h2",{id:"docker-config"},"Docker config"),(0,i.kt)("p",null,"If there is no docker configuration but there is a dockerfile in your server directory, a default docker configuration will be generated."),(0,i.kt)("h3",{id:"example-of-warpconfigjs"},"Example of ",(0,i.kt)("inlineCode",{parentName:"h3"},"warp.config.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  docker: "docker-name",\n  deployment: {\n    include: "/.*/",\n    exclude: "/.git/",\n    baseUrlId: "docker",\n  },\n};\n')),(0,i.kt)("h3",{id:"attribute-list"},"Attribute list"),(0,i.kt)("h4",{id:"docker"},"docker"),(0,i.kt)("p",null,"The name of your docker. Allowed characters are ","[a-z]",", ","[0-9]",", underscore (","_","), dash (-), dot (.)."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")),(0,i.kt)("h4",{id:"dockerfile"},"dockerfile"),(0,i.kt)("p",null,"The path to a dockerfile."),(0,i.kt)("h4",{id:"variables"},"variables"),(0,i.kt)("p",null,"Set environment variables in the deployments."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,i.kt)("h4",{id:"deployment"},"deployment"),(0,i.kt)("h5",{id:"deploymentinclude"},"deployment.include"),(0,i.kt)("p",null,"Include all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be included."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/.*/")),(0,i.kt)("h5",{id:"deploymentexclude"},"deployment.exclude"),(0,i.kt)("p",null,"Exclude all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be excluded."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},".dockerignore")," file content if it exist, otherwise ",(0,i.kt)("inlineCode",{parentName:"p"},"/\\.git/")),(0,i.kt)("h5",{id:"deploymentvariables"},"deployment.variables"),(0,i.kt)("p",null,"Set environment variables in all deployments. If the same variable is declared in the main ",(0,i.kt)("inlineCode",{parentName:"p"},"variables")," attribute, then it overrides it."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,i.kt)("h5",{id:"deploymentbaseurlid"},"deployment.baseUrlId"),(0,i.kt)("p",null,"The ID of the base URL used for the deployment. If your environment doesn't have a base URL with this ID, you will be asked to add one."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")),(0,i.kt)("h2",{id:"server-config"},"Server config"),(0,i.kt)("p",null,"If there is no server configuration and no dockerfile but there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts.start")," attribute in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", a default server configuration will be generated."),(0,i.kt)("h3",{id:"example-of-warpconfigjs-1"},"Example of ",(0,i.kt)("inlineCode",{parentName:"h3"},"warp.config.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  server: "server-name",\n  deployment: {\n    include: "/.*/",\n    exclude: "/.git/",\n    baseUrlId: "server",\n    engine: {\n      node: "16",\n    },\n  },\n};\n')),(0,i.kt)("h3",{id:"attribute-list-1"},"Attribute list"),(0,i.kt)("h4",{id:"server"},"server"),(0,i.kt)("p",null,"The name of your server. Allowed characters are ","[a-z]",", ","[0-9]",", underscore (","_","), dash (-), dot (.)."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attribute from the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")),(0,i.kt)("h4",{id:"variables-1"},"variables"),(0,i.kt)("p",null,"Set environment variables both in the emulator and in the deployments."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,i.kt)("h4",{id:"deployment-1"},"deployment"),(0,i.kt)("h5",{id:"deploymentinclude-1"},"deployment.include"),(0,i.kt)("p",null,"Include all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be included."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/.*/")),(0,i.kt)("h5",{id:"deploymentexclude-1"},"deployment.exclude"),(0,i.kt)("p",null,"Exclude all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be excluded."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/\\.git/, /node_modules/")),(0,i.kt)("h5",{id:"deploymentbaseurlid-1"},"deployment.baseUrlId"),(0,i.kt)("p",null,"The ID of the base URL used for the deployment. If your environment doesn't have a base URL with this ID, you will be asked to add one."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"server")),(0,i.kt)("h5",{id:"deploymentengine"},"deployment.engine"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v6/using-npm/semver#ranges"},"semver")," range to specify the engine version. The chosen version will be the latest LTS version in your range. If none are LTS, then it will be the latest version in your range."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'engine: {\n  node: "16";\n}\n')),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"engines")," attribute from the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". If not defined then default value is the latest LTS version of node."),(0,i.kt)("h5",{id:"deploymentvariables-1"},"deployment.variables"),(0,i.kt)("p",null,"Set environment variables in all deployments. If the same variable is declared in the main ",(0,i.kt)("inlineCode",{parentName:"p"},"variables")," attribute, then it overrides it."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,i.kt)("h2",{id:"hosting-config"},"Hosting config"),(0,i.kt)("p",null,"If there is no hosting configuration and no dockerfile, but there is either a ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," directory in your server directory, a default hosting configuration will be generated."),(0,i.kt)("h3",{id:"example-of-warpconfigjs-2"},"Example of ",(0,i.kt)("inlineCode",{parentName:"h3"},"warp.config.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  hosting: "hosting-name",\n  include: "/.*/",\n  exclude: "/.git/",\n  public: "public",\n  deployment: {\n    baseUrlId: "hosting",\n  },\n};\n')),(0,i.kt)("h3",{id:"attribute-list-2"},"Attribute List"),(0,i.kt)("h4",{id:"hosting"},"hosting"),(0,i.kt)("p",null,"The name of your hosting. Allowed characters are ","[a-z]",", ","[0-9]",", underscore (","_","), dash (-), dot (.)."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"hosting-[name]")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"[name]")," being the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attribute from the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")),(0,i.kt)("h4",{id:"include"},"include"),(0,i.kt)("p",null,"Include all files matching any of these conditions. Conditions can be a RegExp, a path, or a function. In case of a function, it must take a path parameter, and return true if that path should be included."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/.*/")),(0,i.kt)("h4",{id:"exclude"},"exclude"),(0,i.kt)("p",null,"Exclude all files matching any of these conditions. Conditions can be a RegExp, a path, or a function. In case of a function, it must take a path parameter, and return true if that path should be excluded."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/\\.git/, /node_modules/")),(0,i.kt)("h4",{id:"public"},"public"),(0,i.kt)("p",null,"The path to a directory containing your assets."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"public")),(0,i.kt)("h4",{id:"deployment-2"},"deployment"),(0,i.kt)("h5",{id:"deploymentbaseurlid-2"},"deployment.baseUrlId"),(0,i.kt)("p",null,"The ID of the base URL used for the deployment. If your environment doesn't have a base URL with this ID, you will be asked to add one."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"hosting")),(0,i.kt)("h2",{id:"variables-2"},"Variables"),(0,i.kt)("p",null,"The configuration file provides a way to set environment variables in your projects. You can go ",(0,i.kt)("a",{parentName:"p",href:"/docs/containers/env-variables#configuration-files-variables"},"here")," to learn more about it."))}p.isMDXComponent=!0}}]);