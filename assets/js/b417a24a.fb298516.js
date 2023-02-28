"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2076],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={id:"getting-started",title:"Getting started"},l=void 0,i={unversionedId:"module/getting-started",id:"version-5.0.2/module/getting-started",title:"Getting started",description:"On our platform a Node.js module can be run as-a-service. It is similar to a microservice. All exported asynchronous functions of a module are transformed by our platform as API calls of a microservice.",source:"@site/versioned_docs/version-5.0.2/module/getting-started.md",sourceDirName:"module",slug:"/module/getting-started",permalink:"/docs/module/getting-started",draft:!1,tags:[],version:"5.0.2",frontMatter:{id:"getting-started",title:"Getting started"},sidebar:"mainSidebar",previous:{title:"Module-as-a-Service",permalink:"/docs/module/module-as-a-service"},next:{title:"Develop your modules",permalink:"/docs/module/development"}},s={},c=[{value:"1. Prepare the project",id:"1-prepare-the-project",level:2},{value:"2. Create an empty module",id:"2-create-an-empty-module",level:2},{value:"Create a <code>package.json</code> file",id:"create-a-packagejson-file",level:3},{value:"Create <code>index.js</code> module script",id:"create-indexjs-module-script",level:3},{value:"3. Install the ScaleDynamics SDK",id:"3-install-the-scaledynamics-sdk",level:2},{value:"4. Build and generate the client module",id:"4-build-and-generate-the-client-module",level:2},{value:"5. Create a simple Node.js script to call the module",id:"5-create-a-simple-nodejs-script-to-call-the-module",level:2},{value:"Install engine",id:"install-engine",level:3},{value:"create Node.js script",id:"create-nodejs-script",level:3},{value:"6. Create the project and the environment",id:"6-create-the-project-and-the-environment",level:2},{value:"Login to your account",id:"login-to-your-account",level:3},{value:"Create a project",id:"create-a-project",level:3},{value:"Create an environment",id:"create-an-environment",level:3},{value:"7. Deploy the module",id:"7-deploy-the-module",level:2},{value:"Chapeau!",id:"chapeau",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"On our platform a Node.js module can be run as-a-service. It is similar to a microservice. All exported asynchronous functions of a module are transformed by our platform as API calls of a microservice.\nBefore deployment we build the ready-to-deploy module and we generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"client module")," that can be imported in any JavaScript client to call remotely the hosted module."),(0,r.kt)("p",null,"In this quick tutorial, you'll learn how to create and deploy on a cloud your own Node.js module you can call from a Node.Js script. You'll do all the steps from scratch."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that if you're interested in creating an HTTP Node.js server (using Express for example),\nlook at ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/server"},"deploy your first Node.js HTTP server in less than 2 minutes"),".")),(0,r.kt)("h2",{id:"1-prepare-the-project"},"1. Prepare the project"),(0,r.kt)("p",null,"Let's start from our ready-to-use project, and go directly to the ",(0,r.kt)("a",{parentName:"p",href:"#4-build-and-generate-the-client-module"},"step 4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ScaleDynamics/module my-module\ncd my-module/\nnpm install\n")),(0,r.kt)("p",null,"or,"),(0,r.kt)("p",null,"Let's create manually your own ",(0,r.kt)("inlineCode",{parentName:"p"},"my-module")," working directory, and follow the next steps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir my-module\nmkdir my-module/client\ncd my-module/\n")),(0,r.kt)("h2",{id:"2-create-an-empty-module"},"2. Create an empty module"),(0,r.kt)("h3",{id:"create-a-packagejson-file"},"Create a ",(0,r.kt)("inlineCode",{parentName:"h3"},"package.json")," file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm init -y\n")),(0,r.kt)("h3",{id:"create-indexjs-module-script"},"Create ",(0,r.kt)("inlineCode",{parentName:"h3"},"index.js")," module script"),(0,r.kt)("p",null,"In this example, we are simply writing a ",(0,r.kt)("inlineCode",{parentName:"p"},"hello")," function that returns some text, with the Node.js version."),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," file in the module directory, and copy-paste the following code into it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// my-module/index.js\n\nexports.hello = function (name) {\n  return `Hello ${name} from Node.js ${process.version}`;\n};\n")),(0,r.kt)("h2",{id:"3-install-the-scaledynamics-sdk"},"3. Install the ScaleDynamics SDK"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To install the SDK you need Node.js installed on your computer.",(0,r.kt)("br",{parentName:"p"}),"\n","Look at ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")," to install it.")),(0,r.kt)("p",null,"Install SDK to access all CLI commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install warp --save-dev\n")),(0,r.kt)("p",null,"To access our CLI, use ",(0,r.kt)("inlineCode",{parentName:"p"},"npx warp"),". You can have the list of available commands and help with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp help\n")),(0,r.kt)("h2",{id:"4-build-and-generate-the-client-module"},"4. Build and generate the client module"),(0,r.kt)("p",null,"Now that the module is ready, we can test it locally. No account is required, you can use the anonymous mode we provide. Just select ",(0,r.kt)("em",{parentName:"p"},"anonymous")," when the CLI ask you to choose a project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp build --output umd:./client/client.js\n")),(0,r.kt)("h2",{id:"5-create-a-simple-nodejs-script-to-call-the-module"},"5. Create a simple Node.js script to call the module"),(0,r.kt)("p",null,"Now the module is build and ready to be used, let's call it from a Node.js script."),(0,r.kt)("h3",{id:"install-engine"},"Install engine"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"@warpjs/engine")," npm module that is required to manage your client module calls."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @warpjs/engine\n")),(0,r.kt)("h3",{id:"create-nodejs-script"},"create Node.js script"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"test.js")," file containing the following codes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'require("@warpjs/engine");\n\nconst MicroService = require("./client/client.js");\nconst { hello } = new MicroService({ env: "demo" });\n\nhello("World").then((message) => {\n  console.log(message);\n});\n')),(0,r.kt)("h2",{id:"6-create-the-project-and-the-environment"},"6. Create the project and the environment"),(0,r.kt)("h3",{id:"login-to-your-account"},"Login to your account"),(0,r.kt)("p",null,"To access projects and deployment resources you need a ScaleDynamics account. You can ",(0,r.kt)("a",{href:"https://console.scaledynamics.com/auth/signup",target:"_blank",rel:"noopener"},"sign up here")," to create your account. Subscription is FREE, no credit card required."),(0,r.kt)("p",null,"Once your account is created, you can login to your account with your email and password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp login\n")),(0,r.kt)("h3",{id:"create-a-project"},"Create a project"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"project")," is a name that identifies a website, a web app, a microservice or an API."),(0,r.kt)("p",null,"Let's create a ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," project, and let's indicate the SDK we are working in it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp project create module\nnpx warp project select module\n")),(0,r.kt)("h3",{id:"create-an-environment"},"Create an environment"),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"environment")," is a name that identifies a cloud execution configuration to run modules. For example you can have 'pre-prod', 'demo', 'staging' or 'production' environments. Each one will have it's own cloud resource configuration."),(0,r.kt)("p",null,"Let's create a ",(0,r.kt)("inlineCode",{parentName:"p"},"demo")," environment, and let's indicate the SDK we are working in it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env create demo\nnpx warp env select demo\n")),(0,r.kt)("h2",{id:"7-deploy-the-module"},"7. Deploy the module"),(0,r.kt)("p",null,"Since the build was done before, you can deploy it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy\n")),(0,r.kt)("p",null,"During the deployment, you will have to indicate on which runner to deploy and run your container.\nAll runners that can be used by the env are shown and you can select the right one.\nYou can select the configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"scaledynamics-shared-runner"),"\nthat is a FREE mutalized runner we provide for getting started purposes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"You need to select a runner for deployment configuration 'my-module'\n? Pick a runner or a configuration: \u203a\n\u276f   Config: scaledynamics-shared-runner\n")),(0,r.kt)("p",null,"Then call the module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"node test.js\n")),(0,r.kt)("h2",{id:"chapeau"},"Chapeau!"),(0,r.kt)("p",null,"Congrats', you deployed your first Node.js module-as-a-service. Want to continue?"),(0,r.kt)("p",null,"Want to continue? ",(0,r.kt)("a",{parentName:"p",href:"../runners/create"},"Create your first Runner")))}p.isMDXComponent=!0}}]);