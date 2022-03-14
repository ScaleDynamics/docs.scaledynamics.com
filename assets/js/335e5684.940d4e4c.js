"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8099],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},426:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"hosting",title:"Static hosting"},s=void 0,c={unversionedId:"getting-started/hosting",id:"getting-started/hosting",title:"Static hosting",description:"In this quick tutorial, you'll learn how to create and deploy static assets you can access from HTTPS. We will take an example of a basic index.html file.",source:"@site/docs/getting-started/hosting.md",sourceDirName:"getting-started",slug:"/getting-started/hosting",permalink:"/docs/getting-started/hosting",tags:[],version:"current",frontMatter:{id:"hosting",title:"Static hosting"},sidebar:"mainSidebar",previous:{title:"Node.js server",permalink:"/docs/getting-started/server"},next:{title:"Module-as-a-Service",permalink:"/docs/module/module-as-a-service"}},p={},u=[{value:"1. Prepare the directory and create a basic html file",id:"1-prepare-the-directory-and-create-a-basic-html-file",level:2},{value:"Create working directory",id:"create-working-directory",level:3},{value:"Create a <code>package.json</code> file",id:"create-a-packagejson-file",level:3},{value:"Create html file to deploy",id:"create-html-file-to-deploy",level:3},{value:"2. Install the ScaleDynamics SDK",id:"2-install-the-scaledynamics-sdk",level:2},{value:"3. Create the project and the environment",id:"3-create-the-project-and-the-environment",level:2},{value:"Login to your account",id:"login-to-your-account",level:3},{value:"Create a project",id:"create-a-project",level:3},{value:"Create an environment",id:"create-an-environment",level:3},{value:"4. Setup services for the environment",id:"4-setup-services-for-the-environment",level:2},{value:"5. Deploy the server",id:"5-deploy-the-server",level:2},{value:"6. Access",id:"6-access",level:2},{value:"Next",id:"next",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this quick tutorial, you'll learn how to create and deploy static assets you can access from HTTPS. We will take an example of a basic index.html file."),(0,o.kt)("h2",{id:"1-prepare-the-directory-and-create-a-basic-html-file"},"1. Prepare the directory and create a basic html file"),(0,o.kt)("h3",{id:"create-working-directory"},"Create working directory"),(0,o.kt)("p",null,"Let's start from our ready-to-use project, and go directly to the ",(0,o.kt)("a",{parentName:"p",href:"#3-create-the-project-and-the-environment"},"step 3")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ScaleDynamics/hosting my-hosting\ncd my-hosting/\nnpm install\n")),(0,o.kt)("p",null,"or,"),(0,o.kt)("p",null,"Let's create manually your own ",(0,o.kt)("inlineCode",{parentName:"p"},"my-hosting")," working directory, and follow the next steps"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir my-hosting\nmkdir my-hosting/public\ncd my-hosting/\n")),(0,o.kt)("h3",{id:"create-a-packagejson-file"},"Create a ",(0,o.kt)("inlineCode",{parentName:"h3"},"package.json")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm init -y\n")),(0,o.kt)("h3",{id:"create-html-file-to-deploy"},"Create html file to deploy"),(0,o.kt)("p",null,"Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"public/index.html")," file, and copy-paste the following code into it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<!doctype html>\n<html>\n  <head>\n    <title>Test web page!</title>\n  </head>\n  <body>\n    <p>Chapeau! your assets are available online.</p>\n  </body>\n</html>\n")),(0,o.kt)("h2",{id:"2-install-the-scaledynamics-sdk"},"2. Install the ScaleDynamics SDK"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To install the SDK you need Node.js installed on your computer.",(0,o.kt)("br",{parentName:"p"}),"\n","Look at ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")," to install it.")),(0,o.kt)("p",null,"Install the SDK to access all CLI commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install warp --save-dev\n")),(0,o.kt)("p",null,"To access our CLI, use ",(0,o.kt)("inlineCode",{parentName:"p"},"npx warp"),". You can have the list of available commands and help with "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp help\n")),(0,o.kt)("h2",{id:"3-create-the-project-and-the-environment"},"3. Create the project and the environment"),(0,o.kt)("p",null,"The deployment of a static assets requires to indicate in which ",(0,o.kt)("strong",{parentName:"p"},"project")," and which ",(0,o.kt)("strong",{parentName:"p"},"environment")," you want to deploy them."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"project")," is a name that identifies a website, a web app, a microservice or an API."),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"environment")," is a name that identifies a cloud execution configuration to serve your assets. For example you can have 'pre-prod', 'demo', 'staging' or 'production' environments. Each one will have it's own cloud resource configuration. "),(0,o.kt)("h3",{id:"login-to-your-account"},"Login to your account"),(0,o.kt)("p",null,"To access projects and deployment resources you need a ScaleDynamics account. You can ",(0,o.kt)("a",{href:"https://console.scaledynamics.com/auth/signup",target:"_blank",rel:"noopener"},"sign up here")," to create your account. Subscription is FREE, no credit card required."),(0,o.kt)("p",null,"Once your account is created, you can login to your account with your email and password:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp login\n")),(0,o.kt)("h3",{id:"create-a-project"},"Create a project"),(0,o.kt)("p",null,"A project identifies a website, a web app, a microservice or an API. "),(0,o.kt)("p",null,"Let's create a ",(0,o.kt)("inlineCode",{parentName:"p"},"hosting")," project, and let's indicate the SDK we are working in it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp project create hosting\nnpx warp project select hosting\n")),(0,o.kt)("h3",{id:"create-an-environment"},"Create an environment"),(0,o.kt)("p",null,"Let's create a ",(0,o.kt)("inlineCode",{parentName:"p"},"demo")," environment, and let's indicate the SDK we are working in it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env create demo\nnpx warp env select demo\n")),(0,o.kt)("h2",{id:"4-setup-services-for-the-environment"},"4. Setup services for the environment"),(0,o.kt)("p",null,"Before deploying you need to enable the ",(0,o.kt)("em",{parentName:"p"},"Static asset hosting")," service and assign cloud resources to run it. To do that, open the ",(0,o.kt)("a",{href:"https://scaledynamics.com/console",target:"_blank",rel:"noopener"},"console"),", select the organization, the ",(0,o.kt)("em",{parentName:"p"},"hosting")," project and the ",(0,o.kt)("em",{parentName:"p"},"demo")," environment. Then enable the ",(0,o.kt)("em",{parentName:"p"},"Static asset hosting")," service and assign a Shared Free cloud resource on the provider and the region you choose."),(0,o.kt)("p",null,"After subscribing resources, you will see in the console your services configurations."),(0,o.kt)("h2",{id:"5-deploy-the-server"},"5. Deploy the server"),(0,o.kt)("p",null,"Now you can deploy the assets. By default all files/directories in ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," will be deployed and make accessible on HTTPS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy\n")),(0,o.kt)("p",null,"During the deployment, you will have to indicate the url you want to access your server after deployment. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"\u2714 Enter a hostname for 'hosting' (fully qualified or not), leave blank for random: \u2026 \n")),(0,o.kt)("p",null,"You can enter a name or press return to get a random one."),(0,o.kt)("p",null,"After deployment the url to serve your assets is dumped on the terminal."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"if you want to know the deployment url, you can access the console or use the following command to get it:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env info\n"))),(0,o.kt)("h2",{id:"6-access"},"6. Access"),(0,o.kt)("p",null,"Now assets are deployed, let's access them on https:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"https://DEPLOYMENT_URL\n")),(0,o.kt)("h2",{id:"next"},"Next"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://scaledynamics.com/pricing"},"Browse our pricing page to browse our catalog of resources"))))}m.isMDXComponent=!0}}]);