"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"server",title:"Deploy a Node.js server"},s=void 0,l={unversionedId:"getting-started/server",id:"version-5.1.x/getting-started/server",title:"Deploy a Node.js server",description:"On our platform you can deploy a standard HTTP Node.js server (i.e. using Express, Koa, Fastify, ...) on a FREE shared runner we provide for getting started purposes, so you can access it with traditional HTTP requests. You can use your favorite Node.js web framework to host all all your website by serving your static assets and backend, your microservice APIs, a backend proxy... without managing the cloud itself (provisioning, deployment, setup, HTTPS certificates, security patches, cloud change...)",source:"@site/versioned_docs/version-5.1.x/getting-started/server.md",sourceDirName:"getting-started",slug:"/getting-started/server",permalink:"/docs/5.1.x/getting-started/server",draft:!1,tags:[],version:"5.1.x",frontMatter:{id:"server",title:"Deploy a Node.js server"},sidebar:"mainSidebar",previous:{title:"Deploy from a Dockerfile",permalink:"/docs/5.1.x/getting-started/docker"},next:{title:"Deploy Static assets",permalink:"/docs/5.1.x/getting-started/hosting"}},i={},p=[{value:"1. Prepare the project",id:"1-prepare-the-project",level:2},{value:"2. Create a basic HTTP Express.js Node.js server",id:"2-create-a-basic-http-expressjs-nodejs-server",level:2},{value:"Create a <code>package.json</code> file",id:"create-a-packagejson-file",level:3},{value:"Install Express",id:"install-express",level:3},{value:"Create <code>index.js</code>",id:"create-indexjs",level:3},{value:"3. Install the ScaleDynamics SDK",id:"3-install-the-scaledynamics-sdk",level:2},{value:"4. Create the project and the environment",id:"4-create-the-project-and-the-environment",level:2},{value:"Login to your account",id:"login-to-your-account",level:3},{value:"Create a project",id:"create-a-project",level:3},{value:"Create an environment",id:"create-an-environment",level:3},{value:"5. Deploy the server",id:"5-deploy-the-server",level:2},{value:"6. Call the server",id:"6-call-the-server",level:2},{value:"Chapeau!",id:"chapeau",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"On our platform you can deploy a standard HTTP Node.js server (i.e. using Express, Koa, Fastify, ...) on a FREE shared runner we provide for getting started purposes, so you can access it with traditional HTTP requests. You can use your favorite Node.js web framework to host all all your website by serving your static assets and backend, your microservice APIs, a backend proxy... without managing the cloud itself (provisioning, deployment, setup, HTTPS certificates, security patches, cloud change...)"),(0,a.kt)("p",null,"In this quick tutorial, you'll learn how to create and deploy a basic Express HTTP Node.js server you can call from HTTP."),(0,a.kt)("h2",{id:"1-prepare-the-project"},"1. Prepare the project"),(0,a.kt)("p",null,"Let's start from our ready-to-use project, and go directly to the ",(0,a.kt)("a",{parentName:"p",href:"#4-create-the-project-and-the-environment"},"step 4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ScaleDynamics/server my-server\ncd my-server/\nnpm install\n")),(0,a.kt)("p",null,"or,"),(0,a.kt)("p",null,"Let's create manually your own ",(0,a.kt)("inlineCode",{parentName:"p"},"my-server")," working directory, and follow the next steps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir my-server\ncd my-server/\n")),(0,a.kt)("h2",{id:"2-create-a-basic-http-expressjs-nodejs-server"},"2. Create a basic HTTP Express.js Node.js server"),(0,a.kt)("h3",{id:"create-a-packagejson-file"},"Create a ",(0,a.kt)("inlineCode",{parentName:"h3"},"package.json")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-server",\n  "version": "1.0.0",\n  "main": "index.js",\n  "scripts": {\n    "start": "node ."\n  }\n}\n')),(0,a.kt)("h3",{id:"install-express"},"Install Express"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install express\n")),(0,a.kt)("h3",{id:"create-indexjs"},"Create ",(0,a.kt)("inlineCode",{parentName:"h3"},"index.js")),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," file in the server directory, and copy-paste the following code into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// my-server/index.js\n\nconst express = require("express");\nconst app = express();\nconst port = process.env.WARP_PORT || 3000;\n\napp.get("/:name?", (req, res) => {\n  const name = req.params.name || "World";\n  const data = {\n    message: `Hello ${name} from Node.js`,\n    node: process.version,\n    date: new Date().toISOString(),\n  };\n  res.json(data);\n});\n\napp.listen(port, () => {\n  console.log(`This app listens on the port ${port}`);\n});\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that server must use ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.WARP_PORT")," to identify which port to listen.")),(0,a.kt)("h2",{id:"3-install-the-scaledynamics-sdk"},"3. Install the ScaleDynamics SDK"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To use the SDK you need Node.js installed on your computer.",(0,a.kt)("br",{parentName:"p"}),"\n","Look at ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")," to install it.")),(0,a.kt)("p",null,"To access our CLI, use ",(0,a.kt)("inlineCode",{parentName:"p"},"npx warp"),". To get installation options of the SDK, look to ",(0,a.kt)("a",{parentName:"p",href:"../caas/caas_sdk"},"SDK installation"),".\nYou can have the list of available commands and help with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp help\n")),(0,a.kt)("h2",{id:"4-create-the-project-and-the-environment"},"4. Create the project and the environment"),(0,a.kt)("p",null,"The deployment of a server continer requires to indicate in which ",(0,a.kt)("strong",{parentName:"p"},"project")," and which ",(0,a.kt)("strong",{parentName:"p"},"environment")," you want to run it."),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"project")," identifies a set of containers to be deployed. Users can use\nproject to logically represents a website, a web app, a microservice, an API..."),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"environment")," defines the cloud execution environment to deploy and run a project.\nFor example you can have 'pre-prod', 'demo', 'staging' or 'production' environments."),(0,a.kt)("h3",{id:"login-to-your-account"},"Login to your account"),(0,a.kt)("p",null,"To access projects and deployment resources you need a ScaleDynamics account. You can ",(0,a.kt)("a",{href:"https://console.scaledynamics.com/auth/signup",target:"_blank",rel:"noopener"},"sign up here")," to create your account. Subscription is FREE, no credit card required."),(0,a.kt)("p",null,"Once your account is created, you can login to your account with your email and password:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp login\n")),(0,a.kt)("h3",{id:"create-a-project"},"Create a project"),(0,a.kt)("p",null,"Let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp project create server\n")),(0,a.kt)("h3",{id:"create-an-environment"},"Create an environment"),(0,a.kt)("p",null,"Let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"demo")," environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env create demo\n")),(0,a.kt)("h2",{id:"5-deploy-the-server"},"5. Deploy the server"),(0,a.kt)("p",null,"You're now ready to deploy the server container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy --project server --env demo\n")),(0,a.kt)("p",null,"During the deployment, you will have to indicate the url where you want to access your contaiiner after deployment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\u2714 Enter a hostname for 'my-server' (fully qualified or not), leave blank for random: \u2026\n")),(0,a.kt)("p",null,"You can enter a name or press return to get a random one."),(0,a.kt)("p",null,"After that step you will have to indicate on which runner to deploy and run your container.\nAll runners that can be used by the env are shown and you can select the right one.\nYou can select the configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"scaledynamics-shared-runner"),"\nthat is a FREE mutalized runner we provide for getting started purposes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"You need to select a runner for deployment configuration 'my-server'\n? Pick a runner or a configuration: \u203a\n\u276f   Config: scaledynamics-shared-runner\n")),(0,a.kt)("p",null,"After deployment the url of your container is dumped on the terminal."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"if you want to know the deployment url, you can access the console or use the following command to get it:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env info\n"))),(0,a.kt)("h2",{id:"6-call-the-server"},"6. Call the server"),(0,a.kt)("p",null,"Now the server is deployed, let's call it from using curl for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://DEPLOYMENT_URL\n")),(0,a.kt)("h2",{id:"chapeau"},"Chapeau!"),(0,a.kt)("p",null,"Congrats', you deployed your first managed Node.js server container."),(0,a.kt)("p",null,"Want to continue? ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.1.x/runners/create"},"Create your first Runner")))}d.isMDXComponent=!0}}]);