"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[173],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(o),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return o?n.createElement(h,l(l({ref:t},c),{},{components:o})):n.createElement(h,l({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},37058:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=o(87462),a=(o(67294),o(3905));const r={slug:"deno-on-cloud",title:"Run a Deno app in production on Cloud",authors:["nico"],tags:["Deno","TypeScript","Docker","cloud","deploy"]},l=void 0,i={permalink:"/blog/deno-on-cloud",source:"@site/blog/2022-04-08-deno-on-cloud/index.md",title:"Run a Deno app in production on Cloud",description:"Deno is a modern runtime for JavaScript or TypeScript on server side that has been getting some hype recently. Not a fork of Node.js, but it's a robust alternative on several points, such as performance and security.",date:"2022-04-08T00:00:00.000Z",formattedDate:"April 8, 2022",tags:[{label:"Deno",permalink:"/blog/tags/deno"},{label:"TypeScript",permalink:"/blog/tags/type-script"},{label:"Docker",permalink:"/blog/tags/docker"},{label:"cloud",permalink:"/blog/tags/cloud"},{label:"deploy",permalink:"/blog/tags/deploy"}],readingTime:6.23,hasTruncateMarker:!0,authors:[{name:"Nicolas Pennec",title:"Full Stack Engineer @ ScaleDynamics",key:"nico"}],frontMatter:{slug:"deno-on-cloud",title:"Run a Deno app in production on Cloud",authors:["nico"],tags:["Deno","TypeScript","Docker","cloud","deploy"]},prevItem:{title:"Make a simple Fastify API with TypeScript and deploy it",permalink:"/blog/fastify-typescript-api"},nextItem:{title:"Deploy a Spring Boot Kotlin application with Docker",permalink:"/blog/spring-kotlin-petclinic"}},s={authorsImageUrls:[void 0]},p=[{value:"What is Deno?",id:"what-is-deno",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deno installation",id:"deno-installation",level:2},{value:"Code &amp; Run your Deno project",id:"code--run-your-deno-project",level:2},{value:"Deploy your Deno app on Cloud",id:"deploy-your-deno-app-on-cloud",level:2},{value:"Open your account",id:"open-your-account",level:3},{value:"Prepare your project &amp; env",id:"prepare-your-project--env",level:3},{value:"Select a Cloud resource",id:"select-a-cloud-resource",level:3},{value:"Deploy on Cloud",id:"deploy-on-cloud",level:3},{value:"Go further with Metrics",id:"go-further-with-metrics",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Deno is a modern runtime for JavaScript or TypeScript on server side that has been getting some hype recently. Not a fork of Node.js, but it's a robust alternative on several points, such as performance and security."),(0,a.kt)("p",null,"Let's see together how to install and use Deno on your laptop by developing a basic web app with a server written in TypeScript. So how to easily deploy and scale any Deno application in production with Docker on the cloud provider of your choice."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deno logo",src:o(84903).Z,width:"230",height:"230"})),(0,a.kt)("h2",{id:"what-is-deno"},"What is Deno?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://deno.land/"},"Deno")," is a modern, simple and secure runtime for JavaScript and TypeScript that uses ",(0,a.kt)("a",{parentName:"p",href:"https://v8.dev/"},"V8")," and is built in ",(0,a.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust"),". It is an open source project created by Ryan Dahl, creator of ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js"),"."),(0,a.kt)("p",null,"For the little story, Ryan Dahl officially released the first version of Deno in May 2018. This new server-side runtime was designed to address several design issues intrinsic to the Node.js runtime. During the JSconf EU of 2018, Dahl himself admitted ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=M3BM9TB-8yA"},"10 things he regrets about Node.js"),", especially about dependencies, modules, and security."),(0,a.kt)("p",null,"It's important to be mindful that Deno is not a replacement or a fork of the Node runtime, although its name is an anagram of Node \ud83d\ude43"),(0,a.kt)("p",null,"Its purpose is to be an alternative to Node.js with the following key features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Secure by default."),(0,a.kt)("li",{parentName:"ul"},"Native support of TypeScript."),(0,a.kt)("li",{parentName:"ul"},"Ships a single executable file with no dependencies."),(0,a.kt)("li",{parentName:"ul"},"Built-in utilities, like linter, formatter, or bundler."),(0,a.kt)("li",{parentName:"ul"},"Set of reviewed standard modules that guarantee compatibility with Deno.")),(0,a.kt)("p",null,"Since the 1.0 release in May 2020, Deno is officially stable and production ready. The runtime evolves very quickly with regular releases and shipping of new standard libraries that cover wide needs for developers, see ",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/std/"},"https://deno.land/std/"),"."),(0,a.kt)("p",null,"Under the hood Deno was built with Rust, for its core part and the event loop. Take a look at the source code of Deno publishes on GitHub: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno"},"https://github.com/denoland/deno")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To follow this tutorial, we will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Basic knowledge of ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeScript"),"."),(0,a.kt)("li",{parentName:"ul"},"Basic knowledge of ",(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker"),", and more specifically about ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/builder/"},"Dockerfile"),"."),(0,a.kt)("li",{parentName:"ul"},"Node.js <= 12, required for the deployment step. We recommend to install the ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"latest LTS version"),".")),(0,a.kt)("h2",{id:"deno-installation"},"Deno installation"),(0,a.kt)("p",null,"You can easily install Deno on your computer using the installers below:"),(0,a.kt)("p",null,"Shell (Linux, Mac):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fsSL https://deno.land/install.sh | sh\n")),(0,a.kt)("p",null,"PowerShell (Windows):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"iwr https://deno.land/install.ps1 -useb | iex\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno_install"},"deno_install")," for more installation options."),(0,a.kt)("p",null,"Finally, check your Deno installation with the ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"deno --version\n")),(0,a.kt)("p",null,"Once installed, Deno can also upgrade itself to the latest release, using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"deno upgrade\n")),(0,a.kt)("h2",{id:"code--run-your-deno-project"},"Code & Run your Deno project"),(0,a.kt)("p",null,'For this tutorial, we will write a simple HTTP server that returns a customizable "',(0,a.kt)("em",{parentName:"p"},"hello world"),'" message and your current Deno version installed.'),(0,a.kt)("p",null,"First of all, create a new directory ",(0,a.kt)("inlineCode",{parentName:"p"},"deno-app"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir deno-app\ncd deno-app\n")),(0,a.kt)("p",null,"Create a new TypeScript file ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," in the project directory, and copy the following code into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="deno-app/index.ts"',title:'"deno-app/index.ts"'},'import { serve } from "https://deno.land/std@0.134.0/http/server.ts";\n\nconst port = 8080;\n\nconst handler = (request: Request): Response => {\n  const url = new URL(request.url);\n  const name = url.pathname.slice(1) || "World";\n  const version = Deno.version.deno;\n  const body = `Hello ${name} from Deno v${version}`;\n  return new Response(body, { status: 200 });\n};\n\nconsole.log(`HTTP server listening on port ${port}`);\n\nawait serve(handler, { port });\n')),(0,a.kt)("blockquote",null,(0,a.kt)("h3",{parentName:"blockquote",id:"-developer-tip"},"\ud83d\udca1 Developer tip"),(0,a.kt)("p",{parentName:"blockquote"},"If you are using Visual Studio Code, we recommend to install the ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno"},"Deno VS Code plugin"),". This extension adds support of Deno to your IDE and some helpers!",(0,a.kt)("br",{parentName:"p"}),"\n","To enable the Deno plugin in your project, open the VS Code command palette with ",(0,a.kt)("em",{parentName:"p"},"Ctrl+Shift+P"),", and run the ",(0,a.kt)("em",{parentName:"p"},"Deno: Initialize Workspace Configuration")," command.")),(0,a.kt)("p",null,"Next, launch your script with your local runtime through the ",(0,a.kt)("inlineCode",{parentName:"p"},"deno run")," command. Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"--watch")," flag to watch for file changes and restart process automatically. For security concerns, you have to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--allow-net")," flag to allow the network access."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"deno run --watch --allow-net index.ts\n")),(0,a.kt)("p",null,'Open your favorite browser, and go the following URL "',(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/you"},"http://localhost:8080/you"),'" to test your fresh Deno application. You can make a change in your source code to observe the livereload feature in action.'),(0,a.kt)("h2",{id:"deploy-your-deno-app-on-cloud"},"Deploy your Deno app on Cloud"),(0,a.kt)("p",null,"To easily deploy your Deno server on the cloud provider of your choice (AWS, Azure, GCP, ...), we will use the ScaleDynamics platform to speed up the deployment process without devops knowledge."),(0,a.kt)("h3",{id:"open-your-account"},"Open your account"),(0,a.kt)("p",null,"First, create a free account on the ScaleDynamics platform. Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://console.scaledynamics.com/auth/signup/"},"sign up form"),", no credit card required!"),(0,a.kt)("p",null,"Once your account is ready, with a confirmed email and a default organization created, you have to install the ScaleDynamics SDK on your device:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install warp\n")),(0,a.kt)("p",null,"Then login once to your ScaleDynamics account with the command below, and select your default organization:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx warp login\n")),(0,a.kt)("h3",{id:"prepare-your-project--env"},"Prepare your project & env"),(0,a.kt)("p",null,"Now let's create a new \"",(0,a.kt)("strong",{parentName:"p"},"deno-app"),'" project in your current organization:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx warp project create deno-app\n")),(0,a.kt)("p",null,'And create a new "',(0,a.kt)("strong",{parentName:"p"},"prod"),'" environment, using the command below:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx warp env create prod\n")),(0,a.kt)("h3",{id:"select-a-cloud-resource"},"Select a Cloud resource"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to your ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://console.scaledynamics.com"},"ScaleDynamics Console"))," to select your new Organization > Project > Environment."),(0,a.kt)("li",{parentName:"ol"},'Click on the "',(0,a.kt)("strong",{parentName:"li"},"Add new service"),'" button in the Environment panel.'),(0,a.kt)("li",{parentName:"ol"},'Select the "',(0,a.kt)("strong",{parentName:"li"},"Managed HTTP Docker"),'" service to deploy a HTTP docker using your favorite stack.'),(0,a.kt)("li",{parentName:"ol"},'Select a Cloud resource to run your web app. You can choose the free "',(0,a.kt)("strong",{parentName:"li"},"shared"),'" provider for this tutorial, or select the cloud provider and region of your choice.'),(0,a.kt)("li",{parentName:"ol"},'Finally click on the "',(0,a.kt)("strong",{parentName:"li"},"Apply"),'" action to confirm your cloud resource creation.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ScaleDynamics Console in action",src:o(41737).Z,width:"1633",height:"1218"})),(0,a.kt)("h3",{id:"deploy-on-cloud"},"Deploy on Cloud"),(0,a.kt)("p",null,"Your cloud resource is ready now. Go back to your source code, and create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," at root of your project, in order to run your Deno server with Docker."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="deno-app/Dockerfile"',title:'"deno-app/Dockerfile"'},'FROM denoland/deno:latest\nWORKDIR /usr/src/app\nCOPY . .\nEXPOSE 8080\nCMD ["deno", "run", "--allow-net", "index.ts"]\n')),(0,a.kt)("p",null,"In your terminal, run the ",(0,a.kt)("inlineCode",{parentName:"p"},"warp deploy")," command to start a deployment of your Deno application, thanks to the ScaleDynamics SDK, and follow the interactive mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx warp deploy\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ScaleDynamics deployment in action",src:o(80126).Z,width:"1408",height:"645"})),(0,a.kt)("p",null,"Your server is live \ud83d\ude80"),(0,a.kt)("p",null,"The SDK will return the public URL of your web app. You can now write an awesome Deno application, deploy it and scale it on Cloud with ",(0,a.kt)("a",{parentName:"p",href:"https://scaledynamics.com/"},"ScaleDynamics"),"."),(0,a.kt)("p",null,"Learn more about ",(0,a.kt)("inlineCode",{parentName:"p"},"warp deploy")," command and its capabilities in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.scaledynamics.com/docs/sdk/cli#deploy"},"SDK documentation"),". For an optimized use, we recommend to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.scaledynamics.com/docs/containers/cicd"},"deploy from a CI/CD workflow"),"."),(0,a.kt)("h2",{id:"go-further-with-metrics"},"Go further with Metrics"),(0,a.kt)("p",null,"Once your application running in production, it is crucial to monitor it to track its health status (CPU, memory, ...), any server errors, or the carbon footprint of your project."),(0,a.kt)("p",null,"From the ScaleDynamics Console, you have a realtime monitoring of your web application with the Metrics dashboard of each Cloud resource. Every metric is provided for a given resource over a period of an hour or a day. You can access them for the last 24 hours, the last 7 days or the last 30 days."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ScaleDynamics metrics in action",src:o(61845).Z,width:"2318",height:"1466"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that this feature is currently available for all cloud resources available on the platform (public cloud, on-premise, ...), except free shared resources. So, for production use we recommend upgrading your service to a dedicated resource.")),(0,a.kt)("p",null,"Know more details about ",(0,a.kt)("a",{parentName:"p",href:"https://docs.scaledynamics.com/docs/containers/metrics"},"Metrics on the ScaleDynamics documentation"),"."),(0,a.kt)("p",null,"Thanks for reading \ud83d\ude4f"),(0,a.kt)("p",null,"Your turn now to have fun with Deno and run it on Cloud!"))}d.isMDXComponent=!0},84903:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/deno-logo-826e43a9355f23358054427ffeea2c4e.png"},41737:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/sd-console-adf0e85f02ad58f2b3343de01406a2e8.png"},80126:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/sd-deploy-8a246aa8e6103ca894301a03782a7a39.png"},61845:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/sd-metrics-5d12c6f7916dd90fb2169961d7649f26.png"}}]);