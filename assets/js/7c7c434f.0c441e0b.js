"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),u=p(n),m=l,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=m;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[u]="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const i={id:"configuration-file",title:"Configuration file"},o=void 0,r={unversionedId:"containers/configuration-file",id:"version-5.0.0/containers/configuration-file",title:"Configuration file",description:"The configuration is a optional JavaScript file where you can easily configure some parameters of your project. The file named warp.config.js is a module that exports a default object, or an array of objects. Alternatively, you can export a function that return these same objects. If you use the CLI, the configuration file's values are overridden by the CLI's parameters. This file is optional because our SDK can detect a basic configuration (if you have a dockerfile for example).",source:"@site/versioned_docs/version-5.0.0/containers/configuration-file.md",sourceDirName:"containers",slug:"/containers/configuration-file",permalink:"/docs/5.0.0/containers/configuration-file",draft:!1,tags:[],version:"5.0.0",frontMatter:{id:"configuration-file",title:"Configuration file"},sidebar:"mainSidebar",previous:{title:"Deployment",permalink:"/docs/5.0.0/containers/deployment"},next:{title:"Moving containers",permalink:"/docs/5.0.0/containers/move"}},d={},p=[{value:"Docker config",id:"docker-config",level:2},{value:"Example of <code>warp.config.js</code>",id:"example-of-warpconfigjs",level:3},{value:"Attribute list",id:"attribute-list",level:3},{value:"docker",id:"docker",level:4},{value:"dockerfile",id:"dockerfile",level:4},{value:"variables",id:"variables",level:4},{value:"deployment",id:"deployment",level:4},{value:"deployment.include",id:"deploymentinclude",level:5},{value:"deployment.exclude",id:"deploymentexclude",level:5},{value:"deployment.variables",id:"deploymentvariables",level:5},{value:"deployment.baseUrl",id:"deploymentbaseurl",level:5},{value:"deployment.baseUrl.id",id:"deploymentbaseurlid",level:6},{value:"deployment.baseUrl.description",id:"deploymentbaseurldescription",level:6},{value:"deployment.baseUrl.port",id:"deploymentbaseurlport",level:6},{value:"deployment.configId",id:"deploymentconfigid",level:5},{value:"Server config",id:"server-config",level:2},{value:"Example of <code>warp.config.js</code>",id:"example-of-warpconfigjs-1",level:3},{value:"Attribute list",id:"attribute-list-1",level:3},{value:"server",id:"server",level:4},{value:"variables",id:"variables-1",level:4},{value:"deployment",id:"deployment-1",level:4},{value:"deployment.include",id:"deploymentinclude-1",level:5},{value:"deployment.exclude",id:"deploymentexclude-1",level:5},{value:"deployment.baseUrl",id:"deploymentbaseurl-1",level:5},{value:"deployment.baseUrl.id",id:"deploymentbaseurlid-1",level:6},{value:"deployment.baseUrl.description",id:"deploymentbaseurldescription-1",level:6},{value:"deployment.engine",id:"deploymentengine",level:5},{value:"deployment.variables",id:"deploymentvariables-1",level:5},{value:"Hosting config",id:"hosting-config",level:2},{value:"Example of <code>warp.config.js</code>",id:"example-of-warpconfigjs-2",level:3},{value:"Attribute List",id:"attribute-list-2",level:3},{value:"hosting",id:"hosting",level:4},{value:"include",id:"include",level:4},{value:"exclude",id:"exclude",level:4},{value:"public",id:"public",level:4},{value:"deployment",id:"deployment-2",level:4},{value:"deployment.baseUrl",id:"deploymentbaseurl-2",level:5},{value:"deployment.baseUrl.id",id:"deploymentbaseurlid-2",level:6},{value:"deployment.baseUrl.description",id:"deploymentbaseurldescription-2",level:6},{value:"Variables",id:"variables-2",level:2}],s={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The configuration is a ",(0,l.kt)("em",{parentName:"p"},"optional")," JavaScript file where you can easily configure some parameters of your project. The file named ",(0,l.kt)("inlineCode",{parentName:"p"},"warp.config.js")," is a module that exports a default object, or an array of objects. Alternatively, you can export a function that return these same objects. If you use the CLI, the configuration file's values are overridden by the CLI's parameters. This file is optional because our SDK can detect a basic configuration (if you have a dockerfile for example)."),(0,l.kt)("p",null,"The objects exported can be:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a docker configuration"),(0,l.kt)("li",{parentName:"ul"},"a server configuration"),(0,l.kt)("li",{parentName:"ul"},"a hosting configuration")),(0,l.kt)("h2",{id:"docker-config"},"Docker config"),(0,l.kt)("p",null,"If there is no docker configuration but there is a dockerfile in your server directory, a default docker configuration will be generated."),(0,l.kt)("h3",{id:"example-of-warpconfigjs"},"Example of ",(0,l.kt)("inlineCode",{parentName:"h3"},"warp.config.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  docker: "docker-name",\n  deployment: {\n    include: "/.*/",\n    exclude: "/.git/",\n    baseUrl: {\n      id: "docker-name",\n    },\n    configId: "docker-name",\n  },\n};\n')),(0,l.kt)("h3",{id:"attribute-list"},"Attribute list"),(0,l.kt)("h4",{id:"docker"},"docker"),(0,l.kt)("p",null,"The name of your docker. All characters are allowed excepted slash (/)."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"docker")),(0,l.kt)("h4",{id:"dockerfile"},"dockerfile"),(0,l.kt)("p",null,"The path to a dockerfile."),(0,l.kt)("h4",{id:"variables"},"variables"),(0,l.kt)("p",null,"Set environment variables in the deployments."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,l.kt)("h4",{id:"deployment"},"deployment"),(0,l.kt)("h5",{id:"deploymentinclude"},"deployment.include"),(0,l.kt)("p",null,"Include all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be included."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"/.*/")),(0,l.kt)("h5",{id:"deploymentexclude"},"deployment.exclude"),(0,l.kt)("p",null,"Exclude all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be excluded."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},".dockerignore")," file content if it exist, otherwise ",(0,l.kt)("inlineCode",{parentName:"p"},"/\\.git/")),(0,l.kt)("h5",{id:"deploymentvariables"},"deployment.variables"),(0,l.kt)("p",null,"Set environment variables in all deployments. If the same variable is declared in the main ",(0,l.kt)("inlineCode",{parentName:"p"},"variables")," attribute, then it overrides it."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,l.kt)("h5",{id:"deploymentbaseurl"},"deployment.baseUrl"),(0,l.kt)("h6",{id:"deploymentbaseurlid"},"deployment.baseUrl.id"),(0,l.kt)("p",null,"The ID of the base URL used for the deployment. If your environment doesn't have a base URL with this ID, you will be asked to add one."),(0,l.kt)("p",null,"Default: docker name"),(0,l.kt)("h6",{id:"deploymentbaseurldescription"},"deployment.baseUrl.description"),(0,l.kt)("p",null,"A description that will be displayed if you are asked to add a base URL with the provided ID."),(0,l.kt)("h6",{id:"deploymentbaseurlport"},"deployment.baseUrl.port"),(0,l.kt)("p",null,"The container private port used to serve the URL."),(0,l.kt)("h5",{id:"deploymentconfigid"},"deployment.configId"),(0,l.kt)("p",null,"The ID of the deployment configuration used for the deployment. If your environment doesn't have a deployment configuration with this ID, you will be asked to add one."),(0,l.kt)("p",null,"Default: docker name"),(0,l.kt)("h2",{id:"server-config"},"Server config"),(0,l.kt)("p",null,"If there is no server configuration and no dockerfile but there is a ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts.start")," attribute in your ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),", a default server configuration will be generated."),(0,l.kt)("h3",{id:"example-of-warpconfigjs-1"},"Example of ",(0,l.kt)("inlineCode",{parentName:"h3"},"warp.config.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  server: "server-name",\n  deployment: {\n    include: "/.*/",\n    exclude: "/.git/",\n    baseUrl : {\n      id: "server-name",\n    },\n    engine: {\n      node: "16",\n    },\n  },\n};\n')),(0,l.kt)("h3",{id:"attribute-list-1"},"Attribute list"),(0,l.kt)("h4",{id:"server"},"server"),(0,l.kt)("p",null,"The name of your server. All characters are allowed excepted slash (/)."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," attribute from the ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")),(0,l.kt)("h4",{id:"variables-1"},"variables"),(0,l.kt)("p",null,"Set environment variables both in the emulator and in the deployments."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,l.kt)("h4",{id:"deployment-1"},"deployment"),(0,l.kt)("h5",{id:"deploymentinclude-1"},"deployment.include"),(0,l.kt)("p",null,"Include all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be included."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"/.*/")),(0,l.kt)("h5",{id:"deploymentexclude-1"},"deployment.exclude"),(0,l.kt)("p",null,"Exclude all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be excluded."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"/\\.git/, /node_modules/")),(0,l.kt)("h5",{id:"deploymentbaseurl-1"},"deployment.baseUrl"),(0,l.kt)("h6",{id:"deploymentbaseurlid-1"},"deployment.baseUrl.id"),(0,l.kt)("p",null,"The ID of the base URL used for the deployment. If your environment doesn't have a base URL with this ID, you will be asked to add one."),(0,l.kt)("p",null,"Default: server name"),(0,l.kt)("h6",{id:"deploymentbaseurldescription-1"},"deployment.baseUrl.description"),(0,l.kt)("p",null,"A description that will be displayed if you are asked to add a base URL with the provided ID."),(0,l.kt)("h5",{id:"deploymentengine"},"deployment.engine"),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v6/using-npm/semver#ranges"},"semver")," range to specify the engine version. The chosen version will be the latest LTS version in your range. If none are LTS, then it will be the latest version in your range."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'engine: {\n  node: "16";\n}\n')),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"engines")," attribute from the ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),". If not defined then default value is the latest LTS version of node."),(0,l.kt)("h5",{id:"deploymentvariables-1"},"deployment.variables"),(0,l.kt)("p",null,"Set environment variables in all deployments. If the same variable is declared in the main ",(0,l.kt)("inlineCode",{parentName:"p"},"variables")," attribute, then it overrides it."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,l.kt)("h2",{id:"hosting-config"},"Hosting config"),(0,l.kt)("p",null,"If there is no hosting configuration and no dockerfile, but there is either a ",(0,l.kt)("inlineCode",{parentName:"p"},"public")," or a ",(0,l.kt)("inlineCode",{parentName:"p"},"static")," directory in your server directory, a default hosting configuration will be generated."),(0,l.kt)("h3",{id:"example-of-warpconfigjs-2"},"Example of ",(0,l.kt)("inlineCode",{parentName:"h3"},"warp.config.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  hosting: "hosting-name",\n  include: "/.*/",\n  exclude: "/.git/",\n  public: "public",\n  deployment: {\n    baseUrl: {\n      id: "hosting-name",\n    }\n  },\n};\n')),(0,l.kt)("h3",{id:"attribute-list-2"},"Attribute List"),(0,l.kt)("h4",{id:"hosting"},"hosting"),(0,l.kt)("p",null,"The name of your hosting. All characters are allowed excepted slash (/)."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"hosting-[name]")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"[name]")," being the ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," attribute from the ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")),(0,l.kt)("h4",{id:"include"},"include"),(0,l.kt)("p",null,"Include all files matching any of these conditions. Conditions can be a RegExp, a path, or a function. In case of a function, it must take a path parameter, and return true if that path should be included."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"/.*/")),(0,l.kt)("h4",{id:"exclude"},"exclude"),(0,l.kt)("p",null,"Exclude all files matching any of these conditions. Conditions can be a RegExp, a path, or a function. In case of a function, it must take a path parameter, and return true if that path should be excluded."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"/\\.git/, /node_modules/")),(0,l.kt)("h4",{id:"public"},"public"),(0,l.kt)("p",null,"The path to a directory containing your assets."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"public")),(0,l.kt)("h4",{id:"deployment-2"},"deployment"),(0,l.kt)("h5",{id:"deploymentbaseurl-2"},"deployment.baseUrl"),(0,l.kt)("h6",{id:"deploymentbaseurlid-2"},"deployment.baseUrl.id"),(0,l.kt)("p",null,"The ID of the base URL used for the deployment. If your environment doesn't have a base URL with this ID, you will be asked to add one."),(0,l.kt)("p",null,"Default: hosting name"),(0,l.kt)("h6",{id:"deploymentbaseurldescription-2"},"deployment.baseUrl.description"),(0,l.kt)("p",null,"A description that will be displayed if you are asked to add a base URL with the provided ID."),(0,l.kt)("h2",{id:"variables-2"},"Variables"),(0,l.kt)("p",null,"The configuration file provides a way to set environment variables in your projects. You can go ",(0,l.kt)("a",{parentName:"p",href:"/docs/5.0.0/containers/env-variables#configuration-files-variables"},"here")," to learn more about it."))}c.isMDXComponent=!0}}]);