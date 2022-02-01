"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6960],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(h,l(l({ref:n},p),{},{components:t})):r.createElement(h,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(7462),a=t(7294),o=t(2389),l=t(9548),i=t(6010),s="tabItem_LplD";function c(e){var n,t,o,c=e.lazy,p=e.block,u=e.defaultValue,d=e.values,m=e.groupId,h=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,l.lx)(v,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===u?u:null!=(n=null!=u?u:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=k[0])?void 0:o.props.value;if(null!==f&&!v.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),w=y.tabGroupChoices,b=y.setTabGroupChoices,N=(0,a.useState)(f),T=N[0],D=N[1],j=[],P=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=w[m];null!=x&&x!==T&&v.some((function(e){return e.value===x}))&&D(x)}var C=function(e){var n=e.currentTarget,t=j.indexOf(n),r=v[t].value;r!==T&&(P(n),D(r),null!=m&&b(m,r))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;t=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;t=j[a]||j[j.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},h)},v.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return j.push(e)},onKeyDown:O,onFocus:C,onClick:C},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),c?(0,a.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function p(e){var n=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(n)},e))}},30:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=t(9877),i=t(8215),s=["components"],c={id:"docker",title:"Docker server"},p=void 0,u={unversionedId:"getting-started/docker",id:"getting-started/docker",title:"Docker server",description:"On our platform you can deploy any web application using Docker so you can access it with traditional HTTP requests. You can use your favorite programming language (PHP, Java, Go, ...) and any web framework to host all your website or CMS (Wordpress, Drupal, Django, ...) or microservice without managing the cloud itself (provisioning, deployment, setup, HTTPS certificates, security patches, cloud change...)",source:"@site/docs/getting-started/docker.mdx",sourceDirName:"getting-started",slug:"/getting-started/docker",permalink:"/docs/getting-started/docker",tags:[],version:"current",frontMatter:{id:"docker",title:"Docker server"},sidebar:"mainSidebar",previous:{title:"SDK Installation",permalink:"/docs/installation"},next:{title:"Docker server",permalink:"/docs/getting-started/docker"}},d=[{value:"1. Prepare the project",id:"1-prepare-the-project",children:[],level:2},{value:"2. Create a basic HTTP web server with Docker",id:"2-create-a-basic-http-web-server-with-docker",children:[{value:"Create a <code>package.json</code> file",id:"create-a-packagejson-file",children:[],level:4},{value:"Install Express",id:"install-express",children:[],level:4},{value:"Init a new HTTP server",id:"init-a-new-http-server",children:[],level:4},{value:"Init a new Dokerfile",id:"init-a-new-dokerfile",children:[],level:4},{value:"Init a new HTTP server",id:"init-a-new-http-server-1",children:[],level:4},{value:"Init a new Dokerfile",id:"init-a-new-dokerfile-1",children:[],level:4},{value:"Init a new HTTP server",id:"init-a-new-http-server-2",children:[],level:4},{value:"Init a new Dokerfile",id:"init-a-new-dokerfile-2",children:[],level:4},{value:"Init a new HTTP server",id:"init-a-new-http-server-3",children:[],level:4},{value:"Init a new Dokerfile",id:"init-a-new-dokerfile-3",children:[],level:4}],level:2},{value:"3. Install the ScaleDynamics SDK",id:"3-install-the-scaledynamics-sdk",children:[],level:2},{value:"4. Create the project and the environment",id:"4-create-the-project-and-the-environment",children:[{value:"Login to your account",id:"login-to-your-account",children:[],level:3},{value:"Create a project",id:"create-a-project",children:[],level:3},{value:"Create an environment",id:"create-an-environment",children:[],level:3}],level:2},{value:"5. Setup services for the environment",id:"5-setup-services-for-the-environment",children:[],level:2},{value:"6. Deploy the server",id:"6-deploy-the-server",children:[],level:2},{value:"7. Call the server",id:"7-call-the-server",children:[],level:2},{value:"Chapeau!",id:"chapeau",children:[],level:2}],m={toc:d};function h(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"On our platform you can deploy any web application using Docker so you can access it with traditional HTTP requests. You can use your favorite programming language (PHP, Java, Go, ...) and any web framework to host all your website or CMS (Wordpress, Drupal, Django, ...) or microservice without managing the cloud itself (provisioning, deployment, setup, HTTPS certificates, security patches, cloud change...)"),(0,o.kt)("p",null,"In this quick tutorial, you'll learn how to create and deploy a basic web server with Docker you can call from HTTP."),(0,o.kt)("h2",{id:"1-prepare-the-project"},"1. Prepare the project"),(0,o.kt)("p",null,"Let's start from our ready-to-use project, and go directly to the ",(0,o.kt)("a",{parentName:"p",href:"#4-create-the-project-and-the-environment"},"step 4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ScaleDynamics/docker my-docker\ncd my-docker/\nnpm install\n")),(0,o.kt)("p",null,"or,"),(0,o.kt)("p",null,"Let's create manually your own ",(0,o.kt)("inlineCode",{parentName:"p"},"my-docker")," working directory, and follow the next steps"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir my-docker\ncd my-docker/\n")),(0,o.kt)("h2",{id:"2-create-a-basic-http-web-server-with-docker"},"2. Create a basic HTTP web server with Docker"),(0,o.kt)(l.Z,{groupId:"languages",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"node",label:"Node",mdxType:"TabItem"},(0,o.kt)("h4",{id:"create-a-packagejson-file"},"Create a ",(0,o.kt)("inlineCode",{parentName:"h4"},"package.json")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="my-docker/package.json"',title:'"my-docker/package.json"'},'{\n  "name": "my-docker",\n  "version": "1.0.0",\n  "main": "index.js",\n  "scripts": {\n    "start": "node ."\n  }\n}\n')),(0,o.kt)("h4",{id:"install-express"},"Install Express"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install express\n")),(0,o.kt)("h4",{id:"init-a-new-http-server"},"Init a new HTTP server"),(0,o.kt)("p",null,"Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," file in the project directory, and copy-paste the following code into it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="my-docker/index.js"',title:'"my-docker/index.js"'},'const express = require("express");\nconst app = express();\n\nconst port = process.env.PORT || 8080;\n\napp.get("/:name?", (req, res) => {\n  const name = req.params.name || "World";\n  const version = process.version;\n  res.send(`Hello ${name} from Node.js ${version}`);\n});\n\napp.listen(port, () => {\n  console.log(`HTTP server listening on port ${port}`);\n});\n')),(0,o.kt)("h4",{id:"init-a-new-dokerfile"},"Init a new Dokerfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="my-docker/Dokerfile"',title:'"my-docker/Dokerfile"'},'FROM node:lts\nWORKDIR /usr/src/app\nCOPY package*.json ./\nRUN npm install --production --silent\nCOPY . ./\nEXPOSE 8080\nCMD [ "node", "index.js" ]\n'))),(0,o.kt)(i.Z,{value:"deno",label:"Deno",mdxType:"TabItem"},(0,o.kt)("h4",{id:"init-a-new-http-server-1"},"Init a new HTTP server"),(0,o.kt)("p",null,"Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," file in the project directory, and copy-paste the following code into it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="my-docker/index.ts"',title:'"my-docker/index.ts"'},'import { serve } from "https://deno.land/std@0.122.0/http/server.ts";\n\nconst port = 8080;\n\nconst handler = (request: Request): Response => {\n  const url = new URL(request.url);\n  const name = url.pathname.slice(1) || "World";\n  const version = Deno.version.deno;\n  const body = `Hello ${name} from Deno v${version}`;\n  return new Response(body, { status: 200 });\n};\n\nawait serve(handler, { port });\n\nconsole.log(`HTTP server listening on port ${port}`);\n')),(0,o.kt)("h4",{id:"init-a-new-dokerfile-1"},"Init a new Dokerfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="my-docker/Dokerfile"',title:'"my-docker/Dokerfile"'},'FROM denoland/deno:latest\nWORKDIR /usr/src/app\nCOPY . .\nEXPOSE 8080\nCMD ["deno", "run", "--allow-net", "index.ts"]\n'))),(0,o.kt)(i.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,o.kt)("h4",{id:"init-a-new-http-server-2"},"Init a new HTTP server"),(0,o.kt)("p",null,"Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"index.php")," file in the project directory, and copy-paste the following code into it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="my-docker/index.php"',title:'"my-docker/index.php"'},'<?php\n\n$name = $_GET["name"] ?? "World";\n$version = phpversion();\necho "Hello ".$name." from PHP v".$version;\n\n?>\n')),(0,o.kt)("h4",{id:"init-a-new-dokerfile-2"},"Init a new Dokerfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="my-docker/Dokerfile"',title:'"my-docker/Dokerfile"'},"FROM php:apache\nCOPY . /var/www/html\nEXPOSE 80\n"))),(0,o.kt)(i.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,o.kt)("h4",{id:"init-a-new-http-server-3"},"Init a new HTTP server"),(0,o.kt)("p",null,"Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"index.go")," file in the project directory, and copy-paste the following code into it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="my-docker/index.go"',title:'"my-docker/index.go"'},'package main\n\nimport (\n    "fmt"\n    "net/http"\n    "runtime"\n)\n\nfunc handler(w http.ResponseWriter, r *http.Request) {\n    name := r.URL.Path[1:]\n    if name == "" {\n        name = "World"\n    }\n    version := runtime.Version()[2:]\n    fmt.Fprintf(w, "Hello %s from Go v%s", name, version)\n}\n\nfunc main() {\n    port := 8080\n    fmt.Printf("HTTP server listening on port %d", port)\n    http.HandleFunc("/", handler)\n    http.ListenAndServe(fmt.Sprintf(":%d", port), nil)\n}\n')),(0,o.kt)("h4",{id:"init-a-new-dokerfile-3"},"Init a new Dokerfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="my-docker/Dokerfile"',title:'"my-docker/Dokerfile"'},'FROM golang:latest\nWORKDIR /usr/src/app\nCOPY . .\nRUN go build -o /usr/bin/app index.go \nEXPOSE 8080\nCMD [ "/usr/bin/app" ]\n')))),(0,o.kt)("h2",{id:"3-install-the-scaledynamics-sdk"},"3. Install the ScaleDynamics SDK"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To install the SDK you need Node.js installed on your computer.",(0,o.kt)("br",{parentName:"p"}),"\n","Look at ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")," to install it.")),(0,o.kt)("p",null,"Install the SDK to access all CLI commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install warp --save-dev\n")),(0,o.kt)("p",null,"To access our CLI, use ",(0,o.kt)("inlineCode",{parentName:"p"},"npx warp"),". You can have the list of available commands and help with "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp help\n")),(0,o.kt)("h2",{id:"4-create-the-project-and-the-environment"},"4. Create the project and the environment"),(0,o.kt)("p",null,"The deployment of a Docker server requires to indicate in which ",(0,o.kt)("strong",{parentName:"p"},"project")," and which ",(0,o.kt)("strong",{parentName:"p"},"environment")," you want to deploy and execute your module."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"project")," is a name that identifies a website, a web app, a microservice or an API."),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"environment")," is a name that identifies a cloud execution configuration to run modules. For example you can have 'pre-prod', 'demo', 'staging' or 'production' environments. Each one will have it's own cloud resource configuration. "),(0,o.kt)("h3",{id:"login-to-your-account"},"Login to your account"),(0,o.kt)("p",null,"To access projects and deployment resources you need a ScaleDynamics account. You can ",(0,o.kt)("a",{href:"https://console.scaledynamics.com/auth/signup",target:"_blank",rel:"noopener"},"sign up here")," to create your account. Subscription is FREE, no credit card required."),(0,o.kt)("p",null,"Once your account is created, you can login to your account with your email and password:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp login\n")),(0,o.kt)("h3",{id:"create-a-project"},"Create a project"),(0,o.kt)("p",null,"A project identifies a website, a web app, a microservice or an API. "),(0,o.kt)("p",null,"Let's create a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," project, and let's indicate the SDK we are working in it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp project create docker\nnpx warp project select docker\n")),(0,o.kt)("h3",{id:"create-an-environment"},"Create an environment"),(0,o.kt)("p",null,"Let's create a ",(0,o.kt)("inlineCode",{parentName:"p"},"demo")," environment, and let's indicate the SDK we are working in it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env create demo\nnpx warp env select demo\n")),(0,o.kt)("h2",{id:"5-setup-services-for-the-environment"},"5. Setup services for the environment"),(0,o.kt)("p",null,"Before deploying you need to enable the ",(0,o.kt)("em",{parentName:"p"},"Managed HTTP docker")," service and assign cloud resources to run it. To do that, open the ",(0,o.kt)("a",{href:"https://scaledynamics.com/console",target:"_blank",rel:"noopener"},"console"),", select the organization, the ",(0,o.kt)("em",{parentName:"p"},"docker")," project and the ",(0,o.kt)("em",{parentName:"p"},"demo")," environment. Then enable the ",(0,o.kt)("em",{parentName:"p"},"Managed HTTP docker")," service and assign a Shared Free cloud resource on the provider and the region you choose."),(0,o.kt)("p",null,"After subscribing resources, you will see in the console your services configurations."),(0,o.kt)("h2",{id:"6-deploy-the-server"},"6. Deploy the server"),(0,o.kt)("p",null,"You're now ready to deploy the Docker server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy\n")),(0,o.kt)("p",null,"During the deployment, you will have to indicate the url where you want to access your server after deployment. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"\u2714 Enter a hostname for 'docker' (fully qualified or not), leave blank for random: \u2026 \n")),(0,o.kt)("p",null,"You can enter a name or press return to get a random one."),(0,o.kt)("p",null,"After deployment the url to use to call your module is dumped on the terminal."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"if you want to know the deployment url, you can access the console or use the following command to get it:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env info\n"))),(0,o.kt)("h2",{id:"7-call-the-server"},"7. Call the server"),(0,o.kt)("p",null,"Now the server is deployed, let's call it from HTTP using curl for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://DEPLOYMENT_URL\n")),(0,o.kt)("h2",{id:"chapeau"},"Chapeau!"),(0,o.kt)("p",null,"Congrats', you deployed your first Managed HTTP docker. Want to continue?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://scaledynamics.com/pricing"},"Browse our pricing page to browse our catalog of resources"))))}h.isMDXComponent=!0}}]);