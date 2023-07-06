"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=l.createContext({}),s=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,h=p["".concat(d,".").concat(m)]||p[m]||c[m]||a;return n?l.createElement(h,o(o({ref:t},u),{},{components:n})):l.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[p]="string"==typeof e?e:i,o[1]=r;for(var s=2;s<a;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var l=n(87462),i=(n(67294),n(3905));const a={id:"configuration-file",title:"Configuration file"},o=void 0,r={unversionedId:"services/configuration-file",id:"version-5.3.x/services/configuration-file",title:"Configuration file",description:"The configuration is an optional JavaScript file where you can easily configure some parameters of your project. The file named warp.config.js is a module that exports a default object. Alternatively, you can export a function that return these same objects.",source:"@site/versioned_docs/version-5.3.x/services/configuration-file.md",sourceDirName:"services",slug:"/services/configuration-file",permalink:"/docs/services/configuration-file",draft:!1,tags:[],version:"5.3.x",frontMatter:{id:"configuration-file",title:"Configuration file"},sidebar:"mainSidebar",previous:{title:"Project, environment, session",permalink:"/docs/services/session"},next:{title:"Custom domains",permalink:"/docs/services/custom-domains"}},d={},s=[{value:"Container config",id:"container-config",level:2},{value:"Example of <code>warp.config.js</code>",id:"example-of-warpconfigjs",level:3},{value:"Attribute list",id:"attribute-list",level:3},{value:"container",id:"container",level:4},{value:"variables",id:"variables",level:4},{value:"args",id:"args",level:4},{value:"build",id:"build",level:4},{value:"build.context",id:"buildcontext",level:5},{value:"build.dockerfile",id:"builddockerfile",level:5},{value:"build.include",id:"buildinclude",level:5},{value:"build.exclude",id:"buildexclude",level:5},{value:"image",id:"image",level:4},{value:"image.name",id:"imagename",level:5},{value:"image.credential",id:"imagecredential",level:5},{value:"image.credential.login",id:"imagecredentiallogin",level:6},{value:"image.credential.password",id:"imagecredentialpassword",level:6},{value:"deployment",id:"deployment",level:4},{value:"deployment.variables",id:"deploymentvariables",level:5},{value:"deployment.baseUrl",id:"deploymentbaseurl",level:5},{value:"deployment.baseUrl.id",id:"deploymentbaseurlid",level:6},{value:"deployment.baseUrl.description",id:"deploymentbaseurldescription",level:6},{value:"deployment.baseUrl.port",id:"deploymentbaseurlport",level:6},{value:"deployment.configId",id:"deploymentconfigid",level:5},{value:"volumes",id:"volumes",level:4},{value:"volumes.id",id:"volumesid",level:5},{value:"volumes.description",id:"volumesdescription",level:5},{value:"volumes.path",id:"volumespath",level:5},{value:"volumes.mode",id:"volumesmode",level:5},{value:"Server config",id:"server-config",level:2},{value:"Example of <code>warp.config.js</code>",id:"example-of-warpconfigjs-1",level:3},{value:"Attribute list",id:"attribute-list-1",level:3},{value:"server",id:"server",level:4},{value:"variables",id:"variables-1",level:4},{value:"deployment",id:"deployment-1",level:4},{value:"deployment.include",id:"deploymentinclude",level:5},{value:"deployment.exclude",id:"deploymentexclude",level:5},{value:"deployment.baseUrl",id:"deploymentbaseurl-1",level:5},{value:"deployment.baseUrl.id",id:"deploymentbaseurlid-1",level:6},{value:"deployment.baseUrl.description",id:"deploymentbaseurldescription-1",level:6},{value:"deployment.configId",id:"deploymentconfigid-1",level:5},{value:"deployment.engine",id:"deploymentengine",level:5},{value:"deployment.variables",id:"deploymentvariables-1",level:5},{value:"Hosting config",id:"hosting-config",level:2},{value:"Example of <code>warp.config.js</code>",id:"example-of-warpconfigjs-2",level:3},{value:"Attribute List",id:"attribute-list-2",level:3},{value:"hosting",id:"hosting",level:4},{value:"public",id:"public",level:4},{value:"deployment",id:"deployment-2",level:4},{value:"deployment.include",id:"deploymentinclude-1",level:5},{value:"deployment.exclude",id:"deploymentexclude-1",level:5},{value:"deployment.baseUrl",id:"deploymentbaseurl-2",level:5},{value:"deployment.baseUrl.id",id:"deploymentbaseurlid-2",level:6},{value:"deployment.baseUrl.description",id:"deploymentbaseurldescription-2",level:6},{value:"deployment.configId",id:"deploymentconfigid-2",level:5},{value:"Variables",id:"variables-2",level:2}],u={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The configuration is an ",(0,i.kt)("em",{parentName:"p"},"optional")," JavaScript file where you can easily configure some parameters of your project. The file named ",(0,i.kt)("inlineCode",{parentName:"p"},"warp.config.js")," is a module that exports a default object. Alternatively, you can export a function that return these same objects."),(0,i.kt)("p",null,"This file is optional because our SDK can detect a basic configuration (if you have a dockerfile for example)."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you use the CLI, the configuration file's values are overridden by the CLI's parameters.")),(0,i.kt)("p",null,"The objects exported can be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a container configuration"),(0,i.kt)("li",{parentName:"ul"},"a server configuration"),(0,i.kt)("li",{parentName:"ul"},"a hosting configuration")),(0,i.kt)("h2",{id:"container-config"},"Container config"),(0,i.kt)("p",null,"A container config has either a build or an image property. With a build property you will build and deploy a docker image of your own local project. With an image property you will deploy an already existing docker image.\nIf there is no container configuration but there is a dockerfile in your server directory, a default container configuration will be generated."),(0,i.kt)("h3",{id:"example-of-warpconfigjs"},"Example of ",(0,i.kt)("inlineCode",{parentName:"h3"},"warp.config.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  container: "container",\n  build: {\n    context: ".",\n    dockerfile: "./Dockerfile",\n    include: /.*/,\n    exclude: /.git/,\n  },\n  deployment: {\n    baseUrl: {\n      id: "container",\n    },\n    configId: "container",\n  },\n  volumes: {\n    id: "html-asset",\n    path: "/var/www/html",\n  },\n};\n')),(0,i.kt)("h3",{id:"attribute-list"},"Attribute list"),(0,i.kt)("h4",{id:"container"},"container"),(0,i.kt)("p",null,"The name of your container. All characters are allowed excepted slash (/)."),(0,i.kt)("p",null,"Default: name of the parent directory of your project if there is one, otherwise ",(0,i.kt)("inlineCode",{parentName:"p"},"container")),(0,i.kt)("h4",{id:"variables"},"variables"),(0,i.kt)("p",null,"Set environment variables in the deployments."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/services/env-variables"},"variables"),"."),(0,i.kt)("h4",{id:"args"},"args"),(0,i.kt)("p",null,"Equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"ARG")," in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/run/"},"docker run command")),(0,i.kt)("p",null,"It will override the default specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"CMD")," when starting the container."),(0,i.kt)("p",null,"It can either be a string following the shell syntax. Or an array of string, each of which will be an argument."),(0,i.kt)("h4",{id:"build"},"build"),(0,i.kt)("p",null,"Mutually exclusive with ",(0,i.kt)("a",{parentName:"p",href:"#image"},"image"),"."),(0,i.kt)("h5",{id:"buildcontext"},"build.context"),(0,i.kt)("p",null,"The path to the base directory of your project. This path is relative to your configuration file."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},".")),(0,i.kt)("h5",{id:"builddockerfile"},"build.dockerfile"),(0,i.kt)("p",null,"The path to the dockerfile of your project. This path is relative to the ",(0,i.kt)("a",{parentName:"p",href:"#build.context"},"context"),"."),(0,i.kt)("h5",{id:"buildinclude"},"build.include"),(0,i.kt)("p",null,"Include all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be included. It will be evaluated relative to the ",(0,i.kt)("a",{parentName:"p",href:"#build.context"},"context"),"."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/.*/")),(0,i.kt)("h5",{id:"buildexclude"},"build.exclude"),(0,i.kt)("p",null,"Exclude all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be excluded. It will be evaluated relative to the ",(0,i.kt)("a",{parentName:"p",href:"#build.context"},"context"),"."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},".dockerignore")," file content if it exist, otherwise ",(0,i.kt)("inlineCode",{parentName:"p"},"/\\.git/")),(0,i.kt)("h4",{id:"image"},"image"),(0,i.kt)("p",null,"Mutually exclusive with ",(0,i.kt)("a",{parentName:"p",href:"#build"},"build"),"."),(0,i.kt)("h5",{id:"imagename"},"image.name"),(0,i.kt)("p",null,"The name of the image to start the container from. It must follow this format: ",(0,i.kt)("inlineCode",{parentName:"p"},"[<registry>/][<project>/]<name>[:<tag>|@<digest>]"),"."),(0,i.kt)("h5",{id:"imagecredential"},"image.credential"),(0,i.kt)("h6",{id:"imagecredentiallogin"},"image.credential.login"),(0,i.kt)("p",null,"Login to access the image registry."),(0,i.kt)("h6",{id:"imagecredentialpassword"},"image.credential.password"),(0,i.kt)("p",null,"Password to access the image registry."),(0,i.kt)("h4",{id:"deployment"},"deployment"),(0,i.kt)("h5",{id:"deploymentvariables"},"deployment.variables"),(0,i.kt)("p",null,"Set environment variables in all deployments. If the same variable is declared in the main ",(0,i.kt)("inlineCode",{parentName:"p"},"variables")," attribute, then it overrides it."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/services/env-variables"},"variables"),"."),(0,i.kt)("h5",{id:"deploymentbaseurl"},"deployment.baseUrl"),(0,i.kt)("h6",{id:"deploymentbaseurlid"},"deployment.baseUrl.id"),(0,i.kt)("p",null,"The ID of the base URL used for the deployment. If your environment doesn't have a base URL with this ID, you will be asked to add one."),(0,i.kt)("p",null,"Default: container name"),(0,i.kt)("h6",{id:"deploymentbaseurldescription"},"deployment.baseUrl.description"),(0,i.kt)("p",null,"A description that will be displayed if you are asked to add a base URL with the provided ID."),(0,i.kt)("h6",{id:"deploymentbaseurlport"},"deployment.baseUrl.port"),(0,i.kt)("p",null,"The container private port used to serve the URL."),(0,i.kt)("h5",{id:"deploymentconfigid"},"deployment.configId"),(0,i.kt)("p",null,"The ID of the deployment configuration used for the deployment. If your environment doesn't have a deployment configuration with this ID, you will be asked to add one."),(0,i.kt)("p",null,"Default: container name"),(0,i.kt)("h4",{id:"volumes"},"volumes"),(0,i.kt)("h5",{id:"volumesid"},"volumes.id"),(0,i.kt)("p",null,"The service volume ID. If your environment doesn't have a volume linked with this service volume ID, you will be asked to add one."),(0,i.kt)("h5",{id:"volumesdescription"},"volumes.description"),(0,i.kt)("p",null,"A description that will be displayed if you are asked to add a volume with the service volume ID."),(0,i.kt)("h5",{id:"volumespath"},"volumes.path"),(0,i.kt)("p",null,"Absolute path to the volume in the container."),(0,i.kt)("h5",{id:"volumesmode"},"volumes.mode"),(0,i.kt)("p",null,"Can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"ro")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"rw"),". Specify wether a volume is in a read-only mode (",(0,i.kt)("inlineCode",{parentName:"p"},"ro"),") or read-write mode (",(0,i.kt)("inlineCode",{parentName:"p"},"rw"),"). Note that a volume can be read-write for some containers, and read-only for others."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"rw")),(0,i.kt)("h2",{id:"server-config"},"Server config"),(0,i.kt)("p",null,"If there is no server configuration and no dockerfile but there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts.start")," attribute in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", a default server configuration will be generated."),(0,i.kt)("h3",{id:"example-of-warpconfigjs-1"},"Example of ",(0,i.kt)("inlineCode",{parentName:"h3"},"warp.config.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  server: "server",\n  deployment: {\n    include: /.*/,\n    exclude: /.git/,\n    baseUrl: {\n      id: "server",\n    },\n    engine: {\n      node: "16",\n    },\n  },\n};\n')),(0,i.kt)("h3",{id:"attribute-list-1"},"Attribute list"),(0,i.kt)("h4",{id:"server"},"server"),(0,i.kt)("p",null,"The name of your server. All characters are allowed excepted slash (/)."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attribute from the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")),(0,i.kt)("h4",{id:"variables-1"},"variables"),(0,i.kt)("p",null,"Set environment variables both in the emulator and in the deployments."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,i.kt)("h4",{id:"deployment-1"},"deployment"),(0,i.kt)("h5",{id:"deploymentinclude"},"deployment.include"),(0,i.kt)("p",null,"Include all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be included."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/.*/")),(0,i.kt)("h5",{id:"deploymentexclude"},"deployment.exclude"),(0,i.kt)("p",null,"Exclude all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be excluded."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/\\.git/, /node_modules/")),(0,i.kt)("h5",{id:"deploymentbaseurl-1"},"deployment.baseUrl"),(0,i.kt)("h6",{id:"deploymentbaseurlid-1"},"deployment.baseUrl.id"),(0,i.kt)("p",null,"The ID of the base URL used for the deployment. If your environment doesn't have a base URL with this ID, you will be asked to add one."),(0,i.kt)("p",null,"Default: server name"),(0,i.kt)("h6",{id:"deploymentbaseurldescription-1"},"deployment.baseUrl.description"),(0,i.kt)("p",null,"A description that will be displayed if you are asked to add a base URL with the provided ID."),(0,i.kt)("h5",{id:"deploymentconfigid-1"},"deployment.configId"),(0,i.kt)("p",null,"The ID of the deployment configuration used for the deployment. If your environment doesn't have a deployment configuration with this ID, you will be asked to add one."),(0,i.kt)("p",null,"Default: server name"),(0,i.kt)("h5",{id:"deploymentengine"},"deployment.engine"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v6/using-npm/semver#ranges"},"semver")," range to specify the engine version. The chosen version will be the latest LTS version in your range. If none are LTS, then it will be the latest version in your range."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'engine: {\n  node: "16";\n}\n')),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"engines")," attribute from the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". If not defined then default value is the latest LTS version of node."),(0,i.kt)("h5",{id:"deploymentvariables-1"},"deployment.variables"),(0,i.kt)("p",null,"Set environment variables in all deployments. If the same variable is declared in the main ",(0,i.kt)("inlineCode",{parentName:"p"},"variables")," attribute, then it overrides it."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/services/env-variables"},"variables"),"."),(0,i.kt)("h2",{id:"hosting-config"},"Hosting config"),(0,i.kt)("p",null,"If there is no hosting configuration and no dockerfile, but there is either a ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," directory in your server directory, a default hosting configuration will be generated."),(0,i.kt)("h3",{id:"example-of-warpconfigjs-2"},"Example of ",(0,i.kt)("inlineCode",{parentName:"h3"},"warp.config.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  hosting: "hosting",\n  public: "public",\n  deployment: {\n    include: /.*/,\n    exclude: [/.git/, /node_modules/],\n    baseUrl: {\n      id: "hosting",\n    },\n  },\n};\n')),(0,i.kt)("h3",{id:"attribute-list-2"},"Attribute List"),(0,i.kt)("h4",{id:"hosting"},"hosting"),(0,i.kt)("p",null,"The name of your hosting. All characters are allowed excepted slash (/)."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"hosting-[name]")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"[name]")," being the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attribute from the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")),(0,i.kt)("h4",{id:"public"},"public"),(0,i.kt)("p",null,"The path to a directory containing your assets."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"public")),(0,i.kt)("h4",{id:"deployment-2"},"deployment"),(0,i.kt)("h5",{id:"deploymentinclude-1"},"deployment.include"),(0,i.kt)("p",null,"Include all files matching any of these conditions. Conditions can be a RegExp, a path, or a function. In case of a function, it must take a path parameter, and return true if that path should be included."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/.*/")),(0,i.kt)("h5",{id:"deploymentexclude-1"},"deployment.exclude"),(0,i.kt)("p",null,"Exclude all files matching any of these conditions. Conditions can be a RegExp, a path, or a function. In case of a function, it must take a path parameter, and return true if that path should be excluded."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/\\.git/, /node_modules/")),(0,i.kt)("h5",{id:"deploymentbaseurl-2"},"deployment.baseUrl"),(0,i.kt)("h6",{id:"deploymentbaseurlid-2"},"deployment.baseUrl.id"),(0,i.kt)("p",null,"The ID of the base URL used for the deployment. If your environment doesn't have a base URL with this ID, you will be asked to add one."),(0,i.kt)("p",null,"Default: hosting name"),(0,i.kt)("h6",{id:"deploymentbaseurldescription-2"},"deployment.baseUrl.description"),(0,i.kt)("p",null,"A description that will be displayed if you are asked to add a base URL with the provided ID."),(0,i.kt)("h5",{id:"deploymentconfigid-2"},"deployment.configId"),(0,i.kt)("p",null,"The ID of the deployment configuration used for the deployment. If your environment doesn't have a deployment configuration with this ID, you will be asked to add one."),(0,i.kt)("p",null,"Default: hosting name"),(0,i.kt)("h2",{id:"variables-2"},"Variables"),(0,i.kt)("p",null,"The configuration file provides a way to set environment variables in your projects, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/services/env-variables"},"variables"),"."))}c.isMDXComponent=!0}}]);