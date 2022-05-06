"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9693],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(n),c=l,h=m["".concat(u,".").concat(c)]||m[c]||s[c]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=m;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1263:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return s}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),o=["components"],r={id:"configuration-file",title:"Configuration file"},u=void 0,d={unversionedId:"advanced-usage/configuration-file",id:"advanced-usage/configuration-file",title:"Configuration file",description:"The configuration is a optional Javascript file where you can easily configure some parameters of your project. For example, you can chose the output format and the directory for a node module project, or configure the folder you want to deploy, etc. The file is a module that exports a default object, or an array of objects. Alternatively, you can export a function that return these same objects. If you use the CLI, the configuration file's values are overridden by the CLI's parameters. This file is optional because our SDK can detect a basic configuration (if you have a dockerfile for example).",source:"@site/docs/advanced-usage/configuration-file.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/configuration-file",permalink:"/docs/advanced-usage/configuration-file",tags:[],version:"current",frontMatter:{id:"configuration-file",title:"Configuration file"},sidebar:"mainSidebar",previous:{title:"Metrics",permalink:"/docs/metrics"},next:{title:"Custom domains",permalink:"/docs/advanced-usage/custom-domains"}},p={},s=[{value:"Docker config",id:"docker-config",level:2},{value:"Example",id:"example",level:3},{value:"Attribute list",id:"attribute-list",level:3},{value:"docker",id:"docker",level:4},{value:"dockerfile",id:"dockerfile",level:4},{value:"variables",id:"variables",level:4},{value:"deployment",id:"deployment",level:4},{value:"deployment.include",id:"deploymentinclude",level:5},{value:"deployment.exclude",id:"deploymentexclude",level:5},{value:"deployment.variables",id:"deploymentvariables",level:5},{value:"deployment.baseUrlId",id:"deploymentbaseurlid",level:5},{value:"Server config",id:"server-config",level:2},{value:"Example",id:"example-1",level:3},{value:"Attribute list",id:"attribute-list-1",level:3},{value:"server",id:"server",level:4},{value:"variables",id:"variables-1",level:4},{value:"deployment",id:"deployment-1",level:4},{value:"deployment.include",id:"deploymentinclude-1",level:5},{value:"deployment.exclude",id:"deploymentexclude-1",level:5},{value:"deployment.baseUrlId",id:"deploymentbaseurlid-1",level:5},{value:"deployment.engine",id:"deploymentengine",level:5},{value:"deployment.variables",id:"deploymentvariables-1",level:5},{value:"Hosting config",id:"hosting-config",level:2},{value:"Example",id:"example-2",level:3},{value:"Attribute List",id:"attribute-list-2",level:3},{value:"hosting",id:"hosting",level:4},{value:"include",id:"include",level:4},{value:"exclude",id:"exclude",level:4},{value:"public",id:"public",level:4},{value:"deployment",id:"deployment-2",level:4},{value:"deployment.baseUrlId",id:"deploymentbaseurlid-2",level:5},{value:"Module config",id:"module-config",level:2},{value:"Example",id:"example-3",level:3},{value:"Attribute List",id:"attribute-list-3",level:3},{value:"module",id:"module",level:4},{value:"expose",id:"expose",level:4},{value:"output",id:"output",level:4},{value:"format.output",id:"formatoutput",level:5},{value:"format.name",id:"formatname",level:5},{value:"format.filePath",id:"formatfilepath",level:5},{value:"format.projectPath",id:"formatprojectpath",level:5},{value:"env",id:"env",level:4},{value:"variables",id:"variables-2",level:4},{value:"emulator",id:"emulator",level:4},{value:"emulator.variables",id:"emulatorvariables",level:5},{value:"emulator.host",id:"emulatorhost",level:5},{value:"emulator.port",id:"emulatorport",level:5},{value:"emulator.loggingLevel",id:"emulatorlogginglevel",level:5},{value:"engine",id:"engine",level:4},{value:"engine.url",id:"engineurl",level:5},{value:"deployment",id:"deployment-3",level:4},{value:"deployment.include",id:"deploymentinclude-2",level:5},{value:"deployment.exclude",id:"deploymentexclude-2",level:5},{value:"deployment.engine",id:"deploymentengine-1",level:5},{value:"deployment.variables",id:"deploymentvariables-2",level:5},{value:"deployment.instances",id:"deploymentinstances",level:5},{value:"deployment.instances.variables",id:"deploymentinstancesvariables",level:6},{value:"Variables",id:"variables-3",level:2}],m={toc:s};function c(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The configuration is a ",(0,i.kt)("em",{parentName:"p"},"optional")," Javascript file where you can easily configure some parameters of your project. For example, you can chose the output format and the directory for a node module project, or configure the folder you want to deploy, etc. The file is a module that exports a default object, or an array of objects. Alternatively, you can export a function that return these same objects. If you use the CLI, the configuration file's values are overridden by the CLI's parameters. This file is optional because our SDK can detect a basic configuration (if you have a dockerfile for example)."),(0,i.kt)("p",null,"The objects exported can be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a docker configuration"),(0,i.kt)("li",{parentName:"ul"},"a server configuration"),(0,i.kt)("li",{parentName:"ul"},"a hosting configuration"),(0,i.kt)("li",{parentName:"ul"},"a module configuration")),(0,i.kt)("h2",{id:"docker-config"},"Docker config"),(0,i.kt)("p",null,"If there is no docker configuration but there is a dockerfile in your server directory, a default docker configuration will be generated."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  docker: "docker-name",\n  deployment: {\n    include: "/.*/",\n    exclude: "/\\.git/",\n    baseUrlId: "docker",\n  },\n};\n')),(0,i.kt)("h3",{id:"attribute-list"},"Attribute list"),(0,i.kt)("h4",{id:"docker"},"docker"),(0,i.kt)("p",null,"The name of your docker. Allowed characters are ","[a-z]",", ","[0-9]",", underscore (_), dash (-), dot (.)."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")),(0,i.kt)("h4",{id:"dockerfile"},"dockerfile"),(0,i.kt)("p",null,"The path to a dockerfile."),(0,i.kt)("h4",{id:"variables"},"variables"),(0,i.kt)("p",null,"Set environment variables in the deployments."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,i.kt)("h4",{id:"deployment"},"deployment"),(0,i.kt)("h5",{id:"deploymentinclude"},"deployment.include"),(0,i.kt)("p",null,"Include all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be included."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/.*/")),(0,i.kt)("h5",{id:"deploymentexclude"},"deployment.exclude"),(0,i.kt)("p",null,"Exclude all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be excluded."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},".dockerignore")," file content if it exist, otherwise ",(0,i.kt)("inlineCode",{parentName:"p"},"/\\.git/")),(0,i.kt)("h5",{id:"deploymentvariables"},"deployment.variables"),(0,i.kt)("p",null,"Set environment variables in all deployments. If the same variable is declared in the main ",(0,i.kt)("inlineCode",{parentName:"p"},"variables")," attribute, then it overrides it."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,i.kt)("h5",{id:"deploymentbaseurlid"},"deployment.baseUrlId"),(0,i.kt)("p",null,"The ID of the base URL used for the deployment. If your environment doesn't have a base URL with this ID, you will be asked to add one."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")),(0,i.kt)("h2",{id:"server-config"},"Server config"),(0,i.kt)("p",null,"If there is no server configuration and no dockerfile but there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts.start")," attribute in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", a default server configuration will be generated."),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  server: "server-name",\n  deployment: {\n    include: "/.*/",\n    exclude: "/\\.git/",\n    baseUrlId: "server",\n    engine: {\n      node: 12,\n    },\n  },\n};\n')),(0,i.kt)("h3",{id:"attribute-list-1"},"Attribute list"),(0,i.kt)("h4",{id:"server"},"server"),(0,i.kt)("p",null,"The name of your server. Allowed characters are ","[a-z]",", ","[0-9]",", underscore (_), dash (-), dot (.)."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attribute from the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")),(0,i.kt)("h4",{id:"variables-1"},"variables"),(0,i.kt)("p",null,"Set environment variables both in the emulator and in the deployments."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,i.kt)("h4",{id:"deployment-1"},"deployment"),(0,i.kt)("h5",{id:"deploymentinclude-1"},"deployment.include"),(0,i.kt)("p",null,"Include all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be included."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/.*/")),(0,i.kt)("h5",{id:"deploymentexclude-1"},"deployment.exclude"),(0,i.kt)("p",null,"Exclude all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be excluded."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/\\.git/")),(0,i.kt)("h5",{id:"deploymentbaseurlid-1"},"deployment.baseUrlId"),(0,i.kt)("p",null,"The ID of the base URL used for the deployment. If your environment doesn't have a base URL with this ID, you will be asked to add one."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"server")),(0,i.kt)("h5",{id:"deploymentengine"},"deployment.engine"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://nodesource.com/blog/semver-a-primer"},"semver")," range to specify the engine version. The chosen version will be the latest LTS version in your range. If none are LTS, then it will be the latest version in your range."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"engine: {\n  node: 12\n}\n")),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"engine")," attribute from the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". If not defined then default value is the latest LTS version of node."),(0,i.kt)("h5",{id:"deploymentvariables-1"},"deployment.variables"),(0,i.kt)("p",null,"Set environment variables in all deployments. If the same variable is declared in the main ",(0,i.kt)("inlineCode",{parentName:"p"},"variables")," attribute, then it overrides it."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,i.kt)("h2",{id:"hosting-config"},"Hosting config"),(0,i.kt)("p",null,"If there is no hosting configuration and no dockerfile, but there is either a ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," directory in your server directory, a default hosting configuration will be generated."),(0,i.kt)("h3",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  hosting: "hosting-name",\n  include: "/.*/",\n  exclude: "/\\.git/",\n  public: "public",\n  deployment: {\n    baseUrlId: "hosting",\n  },\n};\n')),(0,i.kt)("h3",{id:"attribute-list-2"},"Attribute List"),(0,i.kt)("h4",{id:"hosting"},"hosting"),(0,i.kt)("p",null,"The name of your hosting. Allowed characters are ","[a-z]",", ","[0-9]",", underscore (_), dash (-), dot (.)."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"hosting-[name]")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"[name]")," being the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attribute from the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")),(0,i.kt)("h4",{id:"include"},"include"),(0,i.kt)("p",null,"Include all files matching any of these conditions. Conditions can be a RegExp, a path, or a function."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/.*/")),(0,i.kt)("h4",{id:"exclude"},"exclude"),(0,i.kt)("p",null,"Exclude all files matching any of these conditions. Conditions can be a RegExp, a path, or a function."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/\\.git/")),(0,i.kt)("h4",{id:"public"},"public"),(0,i.kt)("p",null,"The path to a directory containing your assets."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"public")),(0,i.kt)("h4",{id:"deployment-2"},"deployment"),(0,i.kt)("h5",{id:"deploymentbaseurlid-2"},"deployment.baseUrlId"),(0,i.kt)("p",null,"The ID of the base URL used for the deployment. If your environment doesn't have a base URL with this ID, you will be asked to add one."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"hosting")),(0,i.kt)("h2",{id:"module-config"},"Module config"),(0,i.kt)("p",null,"If there is no module configuration, no dockerfile and no ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts.start")," attribute but a ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," attribute in your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", a default module configuration will be generated."),(0,i.kt)("h3",{id:"example-3"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  module: "module-name",\n  expose: "./src/index.js",\n  output: {\n    format: "umd",\n    filePath: "../client/src/functions.js",\n    name: "outputname",\n  },\n  env: "auto",\n  engine: {\n    url: "https://cdn.scaledynamics.com/warp-engine",\n  },\n  variables: {\n    key: "value",\n  },\n  emulator: {\n    variables: {\n      key: "value",\n    },\n    host: "localhost",\n    port: 3192,\n    loggingLevel: "info",\n  },\n  deployment: {\n    include: "/.*/",\n    exclude: "/\\.git/",\n    engine: {\n      node: 12,\n    },\n    variables: {\n      key: "value",\n    },\n  }\n};\n')),(0,i.kt)("h3",{id:"attribute-list-3"},"Attribute List"),(0,i.kt)("h4",{id:"module"},"module"),(0,i.kt)("p",null,"The name of your module. Allowed characters are ","[a-z]",", ","[0-9]",", underscore (_), dash (-), dot (.)."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attribute from the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")),(0,i.kt)("h4",{id:"expose"},"expose"),(0,i.kt)("p",null,"The entry point to expose an API to the client. It can either be a path to a JavaScript file or an object with 'source' and 'type' as attribute. Source being a path to a JavaScript file, and type the path to a TypeScript declaration file."),(0,i.kt)("p",null,"This TypeScript declaration file can import any other TypeScript declaration file."),(0,i.kt)("h4",{id:"output"},"output"),(0,i.kt)("p",null,"Can be an array of outputs."),(0,i.kt)("h5",{id:"formatoutput"},"format.output"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/module/output-format"},"format"),"."),(0,i.kt)("h5",{id:"formatname"},"format.name"),(0,i.kt)("p",null,"The name under which your client will be generated. This defines under which name you will import it, for example, if it is a node-module you will use ",(0,i.kt)("inlineCode",{parentName:"p"},"require([format.name]);"),"."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"[module]-client")," with ","[module]"," being the value of the module attribute."),(0,i.kt)("h5",{id:"formatfilepath"},"format.filePath"),(0,i.kt)("p",null,"Only for ",(0,i.kt)("inlineCode",{parentName:"p"},"umd")," format."),(0,i.kt)("h5",{id:"formatprojectpath"},"format.projectPath"),(0,i.kt)("p",null,"Only for ",(0,i.kt)("inlineCode",{parentName:"p"},"node-modules")," format. This path has to be the target directory containing the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," directory."),(0,i.kt)("h4",{id:"env"},"env"),(0,i.kt)("p",null,"The default environment used by the client."),(0,i.kt)("p",null,"Possible values:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"auto"),": the environment is chosen according to the URL of the script in a browser, or the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"WARP_ENV")," for node."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"emulator"),": use the emulator"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"auto")),(0,i.kt)("h4",{id:"variables-2"},"variables"),(0,i.kt)("p",null,"Set environment variables both in the emulator and in the deployments."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,i.kt)("h4",{id:"emulator"},"emulator"),(0,i.kt)("p",null,"The Warp emulator starts with the warp emulator run command, and stops with warp emulator stop."),(0,i.kt)("h5",{id:"emulatorvariables"},"emulator.variables"),(0,i.kt)("p",null,"Set environment variables in the emulator. If the same variable is declared in the main ",(0,i.kt)("inlineCode",{parentName:"p"},"variables")," attribute, then it overrides it."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,i.kt)("h5",{id:"emulatorhost"},"emulator.host"),(0,i.kt)("p",null,"The default hostname of the emulator."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")),(0,i.kt)("h5",{id:"emulatorport"},"emulator.port"),(0,i.kt)("p",null,"Warp emulator port number."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"3192")," or automatically assigned when launching a ",(0,i.kt)("inlineCode",{parentName:"p"},"warp dev")," command"),(0,i.kt)("h5",{id:"emulatorlogginglevel"},"emulator.loggingLevel"),(0,i.kt)("p",null,"Available log levels: ",(0,i.kt)("inlineCode",{parentName:"p"},"none"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"warn"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"info"),"."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"info")),(0,i.kt)("h4",{id:"engine"},"engine"),(0,i.kt)("p",null,"The url of the CDN where the ",(0,i.kt)("inlineCode",{parentName:"p"},"loadEngine")," can find the warp engine."),(0,i.kt)("h5",{id:"engineurl"},"engine.url"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://cdn.scaledynamics.com/warp-engine")),(0,i.kt)("h4",{id:"deployment-3"},"deployment"),(0,i.kt)("h5",{id:"deploymentinclude-2"},"deployment.include"),(0,i.kt)("p",null,"Include all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be included."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/.*/")),(0,i.kt)("h5",{id:"deploymentexclude-2"},"deployment.exclude"),(0,i.kt)("p",null,"Exclude all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be excluded."),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"/\\.git/")),(0,i.kt)("h5",{id:"deploymentengine-1"},"deployment.engine"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://nodesource.com/blog/semver-a-primer"},"semver")," range to specify the engine version. The chosen version will be the latest LTS version in your range. If none are LTS, then it will be the latest version in your range."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"engine: {\n  node: 12\n}\n")),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"engine")," attribute from the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". If not defined then default value is the latest LTS version of node."),(0,i.kt)("h5",{id:"deploymentvariables-2"},"deployment.variables"),(0,i.kt)("p",null,"Set environment variables in all deployments. If the same variable is declared in the main ",(0,i.kt)("inlineCode",{parentName:"p"},"variables")," attribute, then it overrides it."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,i.kt)("h5",{id:"deploymentinstances"},"deployment.instances"),(0,i.kt)("p",null,"Cloud services where your module will be hosted."),(0,i.kt)("h6",{id:"deploymentinstancesvariables"},"deployment.instances.variables"),(0,i.kt)("p",null,"Set environment variables in this instance. If the same variable is declared in the main ",(0,i.kt)("inlineCode",{parentName:"p"},"variables")," attribute or the ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment.variables")," attribute, then it overrides it."),(0,i.kt)("h2",{id:"variables-3"},"Variables"),(0,i.kt)("p",null,"The configuration file provides a way to set environment variables in your projects. You can go ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced-usage/env-variables#configuration-files-variables"},"here")," to learn more about it."))}c.isMDXComponent=!0}}]);