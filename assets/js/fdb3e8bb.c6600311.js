"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(n),c=l,f=m["".concat(u,".").concat(c)]||m[c]||s[c]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=c;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[m]="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const i={id:"configuration-file",title:"Configuration file"},o=void 0,r={unversionedId:"module/configuration-file",id:"version-5.0.2/module/configuration-file",title:"Configuration file",description:"On our platform you can use a configuration file to configure some parameters of your project.",source:"@site/versioned_docs/version-5.0.2/module/configuration-file.md",sourceDirName:"module",slug:"/module/configuration-file",permalink:"/docs/5.0.2/module/configuration-file",draft:!1,tags:[],version:"5.0.2",frontMatter:{id:"configuration-file",title:"Configuration file"},sidebar:"mainSidebar",previous:{title:"Output format",permalink:"/docs/5.0.2/module/output-format"}},u={},p=[{value:"Module config",id:"module-config",level:2},{value:"Example",id:"example",level:3},{value:"Attribute List",id:"attribute-list",level:3},{value:"module",id:"module",level:4},{value:"expose",id:"expose",level:4},{value:"output",id:"output",level:4},{value:"format.output",id:"formatoutput",level:5},{value:"format.name",id:"formatname",level:5},{value:"format.filePath",id:"formatfilepath",level:5},{value:"format.projectPath",id:"formatprojectpath",level:5},{value:"env",id:"env",level:4},{value:"variables",id:"variables",level:4},{value:"emulator",id:"emulator",level:4},{value:"emulator.variables",id:"emulatorvariables",level:5},{value:"emulator.host",id:"emulatorhost",level:5},{value:"emulator.port",id:"emulatorport",level:5},{value:"emulator.loggingLevel",id:"emulatorlogginglevel",level:5},{value:"engine",id:"engine",level:4},{value:"engine.url",id:"engineurl",level:5},{value:"deployment",id:"deployment",level:4},{value:"deployment.include",id:"deploymentinclude",level:5},{value:"deployment.exclude",id:"deploymentexclude",level:5},{value:"deployment.engine",id:"deploymentengine",level:5},{value:"deployment.variables",id:"deploymentvariables",level:5},{value:"deployment.instances",id:"deploymentinstances",level:5},{value:"deployment.instances.variables",id:"deploymentinstancesvariables",level:6},{value:"Variables",id:"variables-1",level:2}],d={toc:p},m="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"On our platform you can use a ",(0,l.kt)("a",{parentName:"p",href:"/docs/5.0.2/containers/configuration-file"},"configuration file")," to configure some parameters of your project."),(0,l.kt)("p",null,"For modules you can also specifiy a configuration."),(0,l.kt)("h2",{id:"module-config"},"Module config"),(0,l.kt)("p",null,"If there is no module configuration, no dockerfile and no ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts.start")," attribute but a ",(0,l.kt)("inlineCode",{parentName:"p"},"main")," attribute in your ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),", a default module configuration will be generated."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  module: "module-name",\n  expose: "./src/index.js",\n  output: {\n    format: "umd",\n    filePath: "../client/src/functions.js",\n    name: "outputname",\n  },\n  env: "auto",\n  engine: {\n    url: "https://cdn.scaledynamics.com/warp-engine",\n  },\n  variables: {\n    key: "value",\n  },\n  emulator: {\n    variables: {\n      key: "value",\n    },\n    host: "localhost",\n    port: 3192,\n    loggingLevel: "info",\n  },\n  deployment: {\n    include: "/.*/",\n    exclude: "/.git/",\n    engine: {\n      node: "16",\n    },\n    variables: {\n      key: "value",\n    },\n  },\n};\n')),(0,l.kt)("h3",{id:"attribute-list"},"Attribute List"),(0,l.kt)("h4",{id:"module"},"module"),(0,l.kt)("p",null,"The name of your module. All characters are allowed excepted slash (/)."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," attribute from the ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")),(0,l.kt)("h4",{id:"expose"},"expose"),(0,l.kt)("p",null,"The entry point to expose an API to the client. It can either be a path to a JavaScript file or an object with 'source' and 'type' as attribute. Source being a path to a JavaScript file, and type the path to a TypeScript declaration file."),(0,l.kt)("p",null,"This TypeScript declaration file can import any other TypeScript declaration file."),(0,l.kt)("h4",{id:"output"},"output"),(0,l.kt)("p",null,"Can be an array of outputs."),(0,l.kt)("h5",{id:"formatoutput"},"format.output"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/5.0.2/module/output-format"},"format"),"."),(0,l.kt)("h5",{id:"formatname"},"format.name"),(0,l.kt)("p",null,"The name under which your client will be generated. This defines under which name you will import it, for example, if it is a node-module you will use ",(0,l.kt)("inlineCode",{parentName:"p"},"require([format.name]);"),"."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"[module]-client")," with ","[module]"," being the value of the module attribute."),(0,l.kt)("h5",{id:"formatfilepath"},"format.filePath"),(0,l.kt)("p",null,"Only for ",(0,l.kt)("inlineCode",{parentName:"p"},"umd")," format."),(0,l.kt)("h5",{id:"formatprojectpath"},"format.projectPath"),(0,l.kt)("p",null,"Only for ",(0,l.kt)("inlineCode",{parentName:"p"},"node-modules")," format. This path has to be the target directory containing the ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," directory."),(0,l.kt)("h4",{id:"env"},"env"),(0,l.kt)("p",null,"The default environment used by the client."),(0,l.kt)("p",null,"Possible values:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"auto"),": the environment is chosen according to the URL of the script in a browser, or the environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"WARP_ENV")," for node."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"emulator"),": use the emulator"),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"auto")),(0,l.kt)("h4",{id:"variables"},"variables"),(0,l.kt)("p",null,"Set environment variables both in the emulator and in the deployments."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,l.kt)("h4",{id:"emulator"},"emulator"),(0,l.kt)("p",null,"The Warp emulator starts with the warp emulator run command, and stops with warp emulator stop."),(0,l.kt)("h5",{id:"emulatorvariables"},"emulator.variables"),(0,l.kt)("p",null,"Set environment variables in the emulator. If the same variable is declared in the main ",(0,l.kt)("inlineCode",{parentName:"p"},"variables")," attribute, then it overrides it."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,l.kt)("h5",{id:"emulatorhost"},"emulator.host"),(0,l.kt)("p",null,"The default hostname of the emulator."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost")),(0,l.kt)("h5",{id:"emulatorport"},"emulator.port"),(0,l.kt)("p",null,"Warp emulator port number."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"3192")," or automatically assigned when launching a ",(0,l.kt)("inlineCode",{parentName:"p"},"warp dev")," command"),(0,l.kt)("h5",{id:"emulatorlogginglevel"},"emulator.loggingLevel"),(0,l.kt)("p",null,"Available log levels: ",(0,l.kt)("inlineCode",{parentName:"p"},"none"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"warn"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"info"),"."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"info")),(0,l.kt)("h4",{id:"engine"},"engine"),(0,l.kt)("p",null,"The url of the CDN where the ",(0,l.kt)("inlineCode",{parentName:"p"},"loadEngine")," can find the warp engine."),(0,l.kt)("h5",{id:"engineurl"},"engine.url"),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"https://cdn.scaledynamics.com/warp-engine")),(0,l.kt)("h4",{id:"deployment"},"deployment"),(0,l.kt)("h5",{id:"deploymentinclude"},"deployment.include"),(0,l.kt)("p",null,"Include all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be included."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"/.*/")),(0,l.kt)("h5",{id:"deploymentexclude"},"deployment.exclude"),(0,l.kt)("p",null,"Exclude all files matching any of these conditions. Conditions can be a RegExp, an absolute path, or a function. In case of a function, it must take a path parameter, and return true if that path should be excluded."),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"/\\.git/, /node_modules/")),(0,l.kt)("h5",{id:"deploymentengine"},"deployment.engine"),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v6/using-npm/semver#ranges"},"semver")," range to specify the engine version. The chosen version will be the latest LTS version in your range. If none are LTS, then it will be the latest version in your range."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'engine: {\n  node: "16";\n}\n')),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"engines")," attribute from the ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),". If not defined then default value is the latest LTS version of node."),(0,l.kt)("h5",{id:"deploymentvariables"},"deployment.variables"),(0,l.kt)("p",null,"Set environment variables in all deployments. If the same variable is declared in the main ",(0,l.kt)("inlineCode",{parentName:"p"},"variables")," attribute, then it overrides it."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"#variables-3"},"variables"),"."),(0,l.kt)("h5",{id:"deploymentinstances"},"deployment.instances"),(0,l.kt)("p",null,"Cloud services where your module will be hosted."),(0,l.kt)("h6",{id:"deploymentinstancesvariables"},"deployment.instances.variables"),(0,l.kt)("p",null,"Set environment variables in this instance. If the same variable is declared in the main ",(0,l.kt)("inlineCode",{parentName:"p"},"variables")," attribute or the ",(0,l.kt)("inlineCode",{parentName:"p"},"deployment.variables")," attribute, then it overrides it."),(0,l.kt)("h2",{id:"variables-1"},"Variables"),(0,l.kt)("p",null,"The configuration file provides a way to set environment variables in your projects. You can go ",(0,l.kt)("a",{parentName:"p",href:"/docs/5.0.2/containers/env-variables#configuration-files-variables"},"here")," to learn more about it."))}s.isMDXComponent=!0}}]);