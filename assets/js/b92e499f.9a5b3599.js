"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8787],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"hosting",title:"Deploy Static assets"},l=void 0,i={unversionedId:"getting-started/hosting",id:"version-5.1.x/getting-started/hosting",title:"Deploy Static assets",description:"In this quick tutorial, you'll learn how to create and deploy static assets you can access from HTTPS on a FREE shared runner we provide for getting started purposes. We will take an example of a basic index.html file.",source:"@site/versioned_docs/version-5.1.x/getting-started/hosting.md",sourceDirName:"getting-started",slug:"/getting-started/hosting",permalink:"/docs/5.1.x/getting-started/hosting",draft:!1,tags:[],version:"5.1.x",frontMatter:{id:"hosting",title:"Deploy Static assets"},sidebar:"mainSidebar",previous:{title:"Deploy a Node.js server",permalink:"/docs/5.1.x/getting-started/server"},next:{title:"Connectors",permalink:"/docs/5.1.x/csp/connectors"}},s={},c=[{value:"1. Prepare the directory and create a basic html file",id:"1-prepare-the-directory-and-create-a-basic-html-file",level:2},{value:"Create working directory",id:"create-working-directory",level:3},{value:"Create a <code>package.json</code> file",id:"create-a-packagejson-file",level:3},{value:"Create html file to deploy",id:"create-html-file-to-deploy",level:3},{value:"2. Install the ScaleDynamics SDK",id:"2-install-the-scaledynamics-sdk",level:2},{value:"3. Create the project and the environment",id:"3-create-the-project-and-the-environment",level:2},{value:"Login to your account",id:"login-to-your-account",level:3},{value:"Create a project",id:"create-a-project",level:3},{value:"Create an environment",id:"create-an-environment",level:3},{value:"4. Deploy the server",id:"4-deploy-the-server",level:2},{value:"5. Access",id:"5-access",level:2},{value:"Chapeau!",id:"chapeau",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this quick tutorial, you'll learn how to create and deploy static assets you can access from HTTPS on a FREE shared runner we provide for getting started purposes. We will take an example of a basic index.html file."),(0,r.kt)("h2",{id:"1-prepare-the-directory-and-create-a-basic-html-file"},"1. Prepare the directory and create a basic html file"),(0,r.kt)("h3",{id:"create-working-directory"},"Create working directory"),(0,r.kt)("p",null,"Let's start from our ready-to-use project, and go directly to the ",(0,r.kt)("a",{parentName:"p",href:"#3-create-the-project-and-the-environment"},"step 3")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ScaleDynamics/hosting my-hosting\ncd my-hosting/\nnpm install\n")),(0,r.kt)("p",null,"or,"),(0,r.kt)("p",null,"Let's create manually your own ",(0,r.kt)("inlineCode",{parentName:"p"},"my-hosting")," working directory, and follow the next steps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir my-hosting\nmkdir my-hosting/public\ncd my-hosting/\n")),(0,r.kt)("h3",{id:"create-a-packagejson-file"},"Create a ",(0,r.kt)("inlineCode",{parentName:"h3"},"package.json")," file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm init -y\n")),(0,r.kt)("h3",{id:"create-html-file-to-deploy"},"Create html file to deploy"),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"public/index.html")," file, and copy-paste the following code into it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Test web page!</title>\n  </head>\n  <body>\n    <p>Chapeau! your assets are available online.</p>\n  </body>\n</html>\n")),(0,r.kt)("h2",{id:"2-install-the-scaledynamics-sdk"},"2. Install the ScaleDynamics SDK"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To use the SDK you need Node.js installed on your computer.",(0,r.kt)("br",{parentName:"p"}),"\n","Look at ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")," to install it.")),(0,r.kt)("p",null,"To access our CLI, use ",(0,r.kt)("inlineCode",{parentName:"p"},"npx warp"),". To get installation options of the SDK, look to ",(0,r.kt)("a",{parentName:"p",href:"../caas/caas_sdk"},"SDK installation"),".\nYou can have the list of available commands and help with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp help\n")),(0,r.kt)("h2",{id:"3-create-the-project-and-the-environment"},"3. Create the project and the environment"),(0,r.kt)("p",null,"The deployment of a static asset container requires to indicate in which ",(0,r.kt)("strong",{parentName:"p"},"project")," and which ",(0,r.kt)("strong",{parentName:"p"},"environment")," you want to run it."),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"project")," identifies a set of containers to be deployed. Users can use\nproject to logically represents a website, a web app, a microservice, an API..."),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"environment")," defines the cloud execution environment to deploy and run a project.\nFor example you can have 'pre-prod', 'demo', 'staging' or 'production' environments."),(0,r.kt)("h3",{id:"login-to-your-account"},"Login to your account"),(0,r.kt)("p",null,"To access projects and deployment resources you need a ScaleDynamics account. You can ",(0,r.kt)("a",{href:"https://console.scaledynamics.com/auth/signup",target:"_blank",rel:"noopener"},"sign up here")," to create your account. Subscription is FREE, no credit card required."),(0,r.kt)("p",null,"Once your account is created, you can login to your account with your email and password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp login\n")),(0,r.kt)("h3",{id:"create-a-project"},"Create a project"),(0,r.kt)("p",null,"Let's create a ",(0,r.kt)("inlineCode",{parentName:"p"},"asset")," project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp project create server\n")),(0,r.kt)("h3",{id:"create-an-environment"},"Create an environment"),(0,r.kt)("p",null,"Let's create a ",(0,r.kt)("inlineCode",{parentName:"p"},"demo")," environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env create demo\n")),(0,r.kt)("h2",{id:"4-deploy-the-server"},"4. Deploy the server"),(0,r.kt)("p",null,"You're now ready to deploy the assets container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy --project asset --env demo\n")),(0,r.kt)("p",null,"During the deployment, you will have to indicate the url you want to access your server after deployment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"\u2714 Enter a hostname for 'my-hosting' (fully qualified or not), leave blank for random: \u2026\n")),(0,r.kt)("p",null,"You can enter a name or press return to get a random one."),(0,r.kt)("p",null,"After that step you will have to indicate on which runner to deploy and run your container.\nAll runners that can be used by the env are shown and you can select the right one.\nYou can select the configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"scaledynamics-shared-runner"),"\nthat is a FREE mutalized runner we provide for getting started purposes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"You need to select a runner for deployment configuration 'my-hosting'\n? Pick a runner or a configuration: \u203a\n\u276f   Config: scaledynamics-shared-runner\n")),(0,r.kt)("p",null,"After deployment the url of your container is dumped on the terminal."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"if you want to know the deployment url, you can access the console or use the following command to get it:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env info\n"))),(0,r.kt)("h2",{id:"5-access"},"5. Access"),(0,r.kt)("p",null,"Now assets are deployed, let's access them on https:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"https://DEPLOYMENT_URL\n")),(0,r.kt)("h2",{id:"chapeau"},"Chapeau!"),(0,r.kt)("p",null,"Congrats', you deployed your static assets container."),(0,r.kt)("p",null,"Want to continue? ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.1.x/runners/create"},"Create your first Runner")))}d.isMDXComponent=!0}}]);