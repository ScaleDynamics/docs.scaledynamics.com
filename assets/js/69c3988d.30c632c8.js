"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={slug:"fastify-typescript-api",title:"Make a simple Fastify API with TypeScript and deploy it",authors:["clem"],tags:["Node.js","TypeScript","API","deploy","Fastify"]},i=void 0,l={permalink:"/blog/fastify-typescript-api",source:"@site/blog/2022-04-14-fastify-api/index.mdx",title:"Make a simple Fastify API with TypeScript and deploy it",description:"In this tutorial, we will see how to build a simple API with Fastify and TypeScript, and how to deploy it on the ScaleDynamics Platform.",date:"2022-04-14T00:00:00.000Z",formattedDate:"April 14, 2022",tags:[{label:"Node.js",permalink:"/blog/tags/node-js"},{label:"TypeScript",permalink:"/blog/tags/type-script"},{label:"API",permalink:"/blog/tags/api"},{label:"deploy",permalink:"/blog/tags/deploy"},{label:"Fastify",permalink:"/blog/tags/fastify"}],readingTime:5.12,hasTruncateMarker:!0,authors:[{name:"Cl\xe9ment Poisson",title:"Full Stack Engineer @ ScaleDynamics",key:"clem"}],frontMatter:{slug:"fastify-typescript-api",title:"Make a simple Fastify API with TypeScript and deploy it",authors:["clem"],tags:["Node.js","TypeScript","API","deploy","Fastify"]},prevItem:{title:"What is Containers-as-a-Service",permalink:"/blog/what-is-a-caas"},nextItem:{title:"Run a Deno app in production on Cloud",permalink:"/blog/deno-on-cloud"}},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Goals",id:"goals",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup the project",id:"setup-the-project",level:2},{value:"Build the API",id:"build-the-api",level:2},{value:"Account creation and resource selection",id:"account-creation-and-resource-selection",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Configuration file",id:"configuration-file",level:3},{value:"Build",id:"build",level:3},{value:"Login",id:"login",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Go further: dedicated resources",id:"go-further-dedicated-resources",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we will see how to build a simple API with Fastify and TypeScript, and how to deploy it on the ScaleDynamics Platform."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.fastify.io/"},"Fastify")," is a Node.js web framework for building HTTP APIs. It is designed to be easy to use, and to be fast. It has a powerful plugin architecture inspired by Express and Hapi. It is design with developper experience in mind without sacrificing performance."),(0,o.kt)("h2",{id:"goals"},"Goals"),(0,o.kt)("p",null,"Our goal will be to build a simple starting point for a Fastify API with TypeScript that will return some users fetched from ",(0,o.kt)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/"},"jsonplaceholder"),". Then we will deploy it on the ScaleDynamics Platform to be able to use it from any application."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To follow along, you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node.js and yarn / npm installed. You can go ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"here")," to download the latest version of Node.js and npm"),(0,o.kt)("li",{parentName:"ul"},"Some basic ",(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"TypeScript")," knowledge")),(0,o.kt)("h2",{id:"setup-the-project"},"Setup the project"),(0,o.kt)("p",null,"Let's create a folder and initialize a npm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir fastify-api\nyarn init\n")),(0,o.kt)("p",null,"Don't bother with the options in the prompt, you can directly use this code in your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "fastify",\n  "version": "1.0.0",\n  "main": "src/index.ts",\n  "license": "MIT",\n  "scripts": {\n    "build": "tsc -p tsconfig.json",\n    "start": "node ./dist/index.js"\n  },\n  "dependencies": {\n    "@types/node": "^17.0.23",\n    "axios": "^0.26.1",\n    "fastify": "^3.28.0"\n  },\n  "devDependencies": {\n    "typescript": "^4.6.3"\n  }\n}\n')),(0,o.kt)("p",null,"Install the dependencies by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn\n")),(0,o.kt)("p",null,"Now we need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," to configure TypeScript, so let's run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx tsc --init\n")),(0,o.kt)("p",null,"We need now to make some changes to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "target": "esnext" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,\n    "module": "commonjs" /* Specify what module code is generated. */,\n    "outDir": "./dist" /* Specify an output folder for all emitted files. */,\n    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */,\n    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,\n    "strict": true /* Enable all strict type-checking options. */\n  }\n}\n')),(0,o.kt)("p",null,"The project is now ready, let's build our API:"),(0,o.kt)("h2",{id:"build-the-api"},"Build the API"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder at the root of your project, and create a ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," file inside it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import axios from "axios";\nimport fastify from "fastify";\n\nconst server = fastify();\n\nserver.get("/users", async (): Promise<User[]> => {\n  return (await axios.get("https://jsonplaceholder.typicode.com/users")).data;\n});\n\nserver.listen(8080, (err, address) => {\n  if (err) {\n    console.error(err);\n    process.exit(1);\n  }\n  console.log(`Server listening at ${address}`);\n});\n')),(0,o.kt)("p",null,"Our API will simply return a list of users fetched from ",(0,o.kt)("a",{parentName:"p",href:"https://jsonplaceholder.typicode.com/"},"jsonplaceholder")," when we call ",(0,o.kt)("inlineCode",{parentName:"p"},"/users"),"."),(0,o.kt)("p",null,"We need to add the definition of the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," type, so create a ",(0,o.kt)("inlineCode",{parentName:"p"},"domain")," folder and a ",(0,o.kt)("inlineCode",{parentName:"p"},"user.d.ts")," file inside:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type User = {\n  id: number;\n  name: string;\n  username: string;\n  email: string;\n  address: Address;\n  phone: string;\n  website: string;\n  company: Company;\n};\n\ntype Address = {\n  street: string;\n  suite: string;\n  city: string;\n  zipcode: string;\n  geo: Geolocalisation;\n};\n\ntype Geolocalisation = {\n  lat: string;\n  lng: string;\n};\n\ntype Company = {\n  name: string;\n  catchPhrase: string;\n  bs: string;\n};\n")),(0,o.kt)("p",null,"We can now build our code to transform it into JavaScript and run it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn build\nyarn start\n")),(0,o.kt)("p",null,"Try to get the users by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl localhost:8080/users\n")),(0,o.kt)("p",null,"You should dump the users like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"user-dump",src:n(44523).Z,width:"2136",height:"1172"})),(0,o.kt)("p",null,"Perfect ! Now let's deploy our API on the ScaleDynamics Platform."),(0,o.kt)("h2",{id:"account-creation-and-resource-selection"},"Account creation and resource selection"),(0,o.kt)("p",null,"To deploy this application on ScaleDynamics's cloud, you need an account and create an environment with a resource for it. The cloud resource provides virtual CPU and storage capacities used to execute the app. In this tutorial we will use a free shared resource available on ScaleDynamics\u2019s cloud. These are the best one for testing. In this tutorial we will see later how you can upgrade to a dedicated production resource on the public cloud provider and region of your choice."),(0,o.kt)("p",null,"If you don't have an account, feel free to create one ",(0,o.kt)("a",{parentName:"p",href:"https://console.scaledynamics.com/auth/signup/"},"here")," (it's free and no credit card are required). Once your account is created, sign in."),(0,o.kt)("p",null,"Let's create a project and an environment on the ScaleDynamics's ",(0,o.kt)("a",{parentName:"p",href:"https://console.scaledynamics.com"},"console"),". Select your organization, create a new project, then create a new environment. Now we need to choose what kind of service we need for our deployment. There are four types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"managed HTTP docker"),(0,o.kt)("li",{parentName:"ul"},"managed Node.js server"),(0,o.kt)("li",{parentName:"ul"},"managed Node.js module"),(0,o.kt)("li",{parentName:"ul"},"static assets hosting")),(0,o.kt)("p",null,"For our API, we need a server. Let's pick the managed Node.js server. You can learn more on the other types in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.scaledynamics.com/"},"ScaleDynamics documentation"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Environment creation",src:n(63172).Z,width:"2610",height:"1504"})),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"The environment is ready to run our application, let's deploy on it."),(0,o.kt)("h3",{id:"configuration-file"},"Configuration file"),(0,o.kt)("p",null,"First, let's add a configuration to tell the SDK what type of application we want to deploy. At the root of the project, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"warp.config.js")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// warp.config.js\nmodule.exports = {\n  server: "fastify",\n};\n')),(0,o.kt)("h3",{id:"build"},"Build"),(0,o.kt)("p",null,"Build the project to compile the TypeScript code into JavaScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn build\n")),(0,o.kt)("h3",{id:"login"},"Login"),(0,o.kt)("p",null,"Log into your account and select your organization via the prompt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx warp login\n")),(0,o.kt)("h3",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"Finally, we can run the deployment command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx warp deploy ./\n")),(0,o.kt)("p",null,"This command will dump something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deploy dump",src:n(28903).Z,width:"1340",height:"660"})),(0,o.kt)("p",null,"You can see that a server was detected from your configuration file. Now follow the prompt, select the project you created, then the environment. The prompt will also ask you for a hostname, you can leave it blank for a random name or use the one you want. Finally, you can select a host."),(0,o.kt)("p",null,"The deployment will take a few minutes."),(0,o.kt)("p",null,"When it's done, you can open your browser and go to the URL and TADA ! Your API is live !"),(0,o.kt)("h2",{id:"go-further-dedicated-resources"},"Go further: dedicated resources"),(0,o.kt)("p",null,"If you want to use dedicated resources, you can upgrade dynamically to a non shared resource. As shown below it's as simple as a few mouse clicks."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Upgrade to dedicated",src:n(20277).Z,width:"2610",height:"1504"})),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"At this stage, you have a fully functional application. You can learn more on the ScaleDynamics ",(0,o.kt)("a",{parentName:"p",href:"https://docs.scaledynamics.com/"},"documentation"),", like how to get the logs of your server, use a custom domain, implement a CI/CD pipeline, etc."),(0,o.kt)("p",null,"Enjoy !"))}u.isMDXComponent=!0},28903:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deploy-dump-eb891ea794c7b3c544d06dc24f03b9d3.png"},44523:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/users-dump-28923b78bac7cc84f7e28776397c03a2.png"},63172:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-env-deploy-4a47be049c74e4b720e5b5815e6c1dcc.gif"},20277:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/upgrade-resources-d681d9045259ce1378973bec8f4f0d1c.gif"}}]);