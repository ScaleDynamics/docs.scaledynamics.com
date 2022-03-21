"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1387],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6646:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],i={slug:"nest-github-actions",title:"CI/CD with a simple NestJS server",authors:["clem"],tags:["NestJS","SSR","cloud","ScaleDynamics","deploy"]},s=void 0,u={permalink:"/blog/nest-github-actions",source:"@site/blog/2022-02-28-nest-github-actions/index.mdx",title:"CI/CD with a simple NestJS server",description:"In this tutorial, we will see how we can make a CI/CD (Continuous Integration and Continuous Delivery) script with GitHub Actions and a simple NestJS server.",date:"2022-02-28T00:00:00.000Z",formattedDate:"February 28, 2022",tags:[{label:"NestJS",permalink:"/blog/tags/nest-js"},{label:"SSR",permalink:"/blog/tags/ssr"},{label:"cloud",permalink:"/blog/tags/cloud"},{label:"ScaleDynamics",permalink:"/blog/tags/scale-dynamics"},{label:"deploy",permalink:"/blog/tags/deploy"}],readingTime:6.785,truncated:!0,authors:[{name:"Cl\xe9ment Poisson",title:"Full Stack Engineer @ ScaleDynamics",key:"clem"}],frontMatter:{slug:"nest-github-actions",title:"CI/CD with a simple NestJS server",authors:["clem"],tags:["NestJS","SSR","cloud","ScaleDynamics","deploy"]},prevItem:{title:"How to deploy Drupal on cloud with Docker",permalink:"/blog/drupal-on-docker"},nextItem:{title:"Deploy a Next.js SSR application",permalink:"/blog/next-js-ssr"}},c={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Goals",id:"goals",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating the project",id:"creating-the-project",level:2},{value:"Account creation and ressource selection",id:"account-creation-and-ressource-selection",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Configuration file",id:"configuration-file",level:3},{value:"Build",id:"build",level:3},{value:"Login",id:"login",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Automation with GitHub Actions",id:"automation-with-github-actions",level:2},{value:"Create a GitHub repository",id:"create-a-github-repository",level:3},{value:"Define our workflow",id:"define-our-workflow",level:3},{value:"Create the workflow",id:"create-the-workflow",level:3},{value:"API key for login",id:"api-key-for-login",level:3},{value:"Test it",id:"test-it",level:3},{value:"Go further",id:"go-further",level:2}],d={toc:p};function h(e){var t=e.components,i=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, we will see how we can make a CI/CD (Continuous Integration and Continuous Delivery) script with GitHub Actions and a simple NestJS server."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nestjs.com/"},"NestJS")," is a Framework for building Node.js server side application. It is built with TypeScript and use Express or Fastify HTTP server framework under the hood. It's architecture is heavily inspired by Angular. It integrates a lot of features and is very easy to use."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions")," is GitHub take on CI/CD. It allows you to automate your build process and deploy your code directly from your GitHub repository."),(0,r.kt)("h2",{id:"goals"},"Goals"),(0,r.kt)("p",null,"Our goal is to create a simple NestJS server with the Nest CLI, deploy it using ScaleDynamics cloud platform and then automate it with GitHub Actions. We'll learn how you can use GitHub Actions to deploy with the ScaleDynamics platform."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To follow along, you will need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/"},"GitHub")," account and a repository ready to be used with GitHub Actions."),(0,r.kt)("li",{parentName:"ul"},"Knowledge of ",(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git")," and have it installed on your machine."),(0,r.kt)("li",{parentName:"ul"},"Node.js and yarn / npm installed. You can go ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"here")," to download the latest version of Node.js and npm.")),(0,r.kt)("h2",{id:"creating-the-project"},"Creating the project"),(0,r.kt)("p",null,"To create the project, we can use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/#installation"},"Nest CLI")," or clone a project starter from GitHub:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -g @nestjs/cli\nnest new my-server\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/nestjs/typescript-starter.git my-server\n")),(0,r.kt)("p",null,"Move into the project folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd my-server\n")),(0,r.kt)("p",null,"You can test if the project is working locally by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm run start\n")),(0,r.kt)("p",null,"You can check you receive ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World!")," by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl localhost:3000\n")),(0,r.kt)("p",null,"Now that we saw the project working, we just need to make a change in the scripts of the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file. When the server is deployed with ScaleDynamics, the server is started with the ",(0,r.kt)("inlineCode",{parentName:"p"},"start"),"command. We will change it so it launch the server in production mode by default and not in dev mode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'// package.json\n"scripts": {\n    "prebuild": "rimraf dist",\n    "build": "nest build",\n    "format": "prettier --write \\"src/**/*.ts\\" \\"test/**/*.ts\\"",\n    "dev": "nest start",\n    "dev:watch": "nest start --watch",\n    "dev:debug": "nest start --debug --watch",\n    "start": "node dist/main",\n    "lint": "eslint \\"{src,apps,libs,test}/**/*.ts\\" --fix",\n    "test": "jest",\n    "test:watch": "jest --watch",\n    "test:cov": "jest --coverage",\n    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",\n    "test:e2e": "jest --config ./test/jest-e2e.json"\n  },\n')),(0,r.kt)("p",null,"Everything is ready to be deployed !"),(0,r.kt)("h2",{id:"account-creation-and-ressource-selection"},"Account creation and ressource selection"),(0,r.kt)("p",null,"To deploy this server on ScaleDynamics's cloud, you need an account and create an environment with a ressource for it. The cloud resource provides virtual CPU and storage capacities used to execute the app. In this tutorial we will use a free shared resource available on ScaleDynamics\u2019s cloud. These are the best one for testing. In this tutorial we will see later how you can upgrade to a dedicated production resource on the public cloud provider and region of your choice."),(0,r.kt)("p",null,"If you don't have an account, feel free to create one ",(0,r.kt)("a",{parentName:"p",href:"https://console.scaledynamics.com/auth/signup/"},"here")," (it's free and no credit card are required). Once your account is created, sign in."),(0,r.kt)("p",null,"Let's create a project and an environment on the ScaleDynamics's ",(0,r.kt)("a",{parentName:"p",href:"https://scaledynamics.com/console"},"console"),". Select your organization, create a new project, then create a new environmnent. Now we need to choose what kind of service we need for our deployment. There are four types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"managed HTTP docker"),(0,r.kt)("li",{parentName:"ul"},"managed Node.js server"),(0,r.kt)("li",{parentName:"ul"},"managed Node.js module"),(0,r.kt)("li",{parentName:"ul"},"static assets hosting")),(0,r.kt)("p",null,"For our NestJS server, we need a (surprise) server. Let's pick the managed Node.js server. You can learn more on the other types in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.scaledynamics.com/"},"ScaleDynamics documentation"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Environment creation",src:n(6131).Z,width:"2610",height:"1504"})),(0,r.kt)("h2",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"The environment is ready to run our application, let's deploy on it."),(0,r.kt)("h3",{id:"configuration-file"},"Configuration file"),(0,r.kt)("p",null,"First, let's add a configuration to tell the SDK what type of application we want to deploy. At the root of the project, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"warp.config.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// warp.config.js\nmodule.exports = {\n  server: "nest",\n};\n')),(0,r.kt)("h3",{id:"build"},"Build"),(0,r.kt)("p",null,"Build the project to let Nest compile TypeScript and optimize and bundle everything for us:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn build\n")),(0,r.kt)("h3",{id:"login"},"Login"),(0,r.kt)("p",null,"Log into your account and select your organization via the prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx warp login\n")),(0,r.kt)("h3",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"Finally, we can run the deployment command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx warp deploy\n")),(0,r.kt)("p",null,"This command will dump something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Deploy dump",src:n(6895).Z,width:"1318",height:"356"})),(0,r.kt)("p",null,"You can see that a server was detected from your configuration file. Now follow the prompt, select the project you created, then the environment. The prompt will also ask you for a hostname, you can leave it blank for a random name or use the one you want. Finally, you can select a host."),(0,r.kt)("p",null,"The deployment will be done in a few minutes. At the end, the command will dump something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Deploy end dump",src:n(4470).Z,width:"1276",height:"390"})),(0,r.kt)("p",null,"You can now open test it by visiting the URL dumped or doing a curl request."),(0,r.kt)("h2",{id:"automation-with-github-actions"},"Automation with GitHub Actions"),(0,r.kt)("p",null,"To simplify and automate this process, let's use GitHub Actions."),(0,r.kt)("h3",{id:"create-a-github-repository"},"Create a GitHub repository"),(0,r.kt)("p",null,"Before we can automate the process, you need to create a GitHub repository and upload the project there.\nYou can learn more about it on the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/"},"GitHub documentation"),"."),(0,r.kt)("h3",{id:"define-our-workflow"},"Define our workflow"),(0,r.kt)("p",null,"Now let's think about what workflow we want to automate. Our final goal is to deploy our server, but before deploying, we need to check the quality of the code, test it, build the project and finally deploy it. For this example there will be four steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lint our code with ESLint"),(0,r.kt)("li",{parentName:"ul"},"Test our code with Jest"),(0,r.kt)("li",{parentName:"ul"},"Build our project"),(0,r.kt)("li",{parentName:"ul"},"Deploy it")),(0,r.kt)("p",null,"The NestJS startup project we use got everything to do so."),(0,r.kt)("h3",{id:"create-the-workflow"},"Create the workflow"),(0,r.kt)("p",null,"Let's create a new workflow by creating a new folder at the root of the project called ",(0,r.kt)("inlineCode",{parentName:"p"},".github")," and an other folder inside called ",(0,r.kt)("inlineCode",{parentName:"p"},"workflows"),". Inside ",(0,r.kt)("inlineCode",{parentName:"p"},"workflows"),", create a ",(0,r.kt)("inlineCode",{parentName:"p"},"main.yml")," file and copy this code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"name: Deploy\n\n# Controls when the workflow will run\non:\n  # Allows you to run this workflow manually from the Actions tab\n  workflow_dispatch:\n\n# A workflow run is made up of one or more jobs that can run sequentially or in parallel\njobs:\n  deploy:\n    name: Deploy\n    runs-on: ubuntu-latest\n    env:\n      # replace with your project/env name\n      ORG_PROJECT: nest-test\n      DEPLOY_ENV: dev\n    # Steps represent a sequence of tasks that will be executed as part of the job\n    steps:\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\n      - uses: actions/checkout@v2\n\n      - name: Install dependencies\n        run: yarn\n\n      - name: Lint the codebase\n        run: yarn lint\n\n      - name: Test our code\n        run: yarn test\n\n      - name: Build\n        run: yarn build\n\n      - name: Login\n        run: npx warp login --api-key=${{ secrets.SD_API_KEY }}\n\n      - name: Deploy\n        run: npx warp deploy --project ${ORG_PROJECT} --env ${DEPLOY_ENV}\n")),(0,r.kt)("h3",{id:"api-key-for-login"},"API key for login"),(0,r.kt)("p",null,"Your workflow is ready, but for the login step, we need an API key to authenticate with ScaleDynamics. This API key can be created on the ",(0,r.kt)("a",{parentName:"p",href:"https://console.scaledynamics.com"},"ScaleDynamics console"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"API key creation",src:n(2966).Z,width:"2760",height:"1422"})),(0,r.kt)("p",null,"Once your API key is created, we can create a secret in your repository so we can use it in our workflow:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"GitHub secret creation",src:n(4450).Z,width:"2388",height:"1418"})),(0,r.kt)("h3",{id:"test-it"},"Test it"),(0,r.kt)("p",null,"Now you can try it by going into the Actions tab on your repository and trigger the workflow:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Trigger workflow",src:n(8423).Z,width:"2676",height:"1132"})),(0,r.kt)("p",null,"The workflow will run and you will be able to see the job ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy"),". Click on it and you can see all the steps that are executed. At the end if all go well you should have something like:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Workflow results",src:n(9117).Z,width:"2778",height:"1178"})),(0,r.kt)("p",null,"If there is an error along the way you will be able to easily spot it and fix it."),(0,r.kt)("h2",{id:"go-further"},"Go further"),(0,r.kt)("p",null,"This was a simple example of setting up CI/CD to deploy an server with ScaleDynamics, but you can do way more things with it. For exemple, you could lint the code on every commit to ensure styling coherence and ensure no mistake are present in your codebase, or you could deploy you code in preproduction at every commit on a branch ",(0,r.kt)("inlineCode",{parentName:"p"},"preprod"),". The sky is the limit."),(0,r.kt)("p",null,"If you want to know more, I encourage you to read this ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/teamcity/ci-cd-guide/"},"JetBrains guide"),". It's related to their TeamCity CI/CD platform but they perfeclty explain the principles and what you can do with CI/CD in general."),(0,r.kt)("p",null,"Enjoy !"))}h.isMDXComponent=!0},8423:function(e,t,n){t.Z=n.p+"assets/images/actions-trigger-workflow-ec92cfa779a39ede114b1c4ead21fd4b.png"},6895:function(e,t,n){t.Z=n.p+"assets/images/deploy-dump-nest-98ab138d20ef88242243426a46839fe8.png"},4470:function(e,t,n){t.Z=n.p+"assets/images/deploy-end-dump-8d1235d0d2022eaae2f22dd9aaa95098.png"},4450:function(e,t,n){t.Z=n.p+"assets/images/github-secret-f4222d91dea9bcae5d34bf796d9cbe6b.png"},9117:function(e,t,n){t.Z=n.p+"assets/images/workflow-results-6912096b4f8f40946634b478fd8ac301.png"},2966:function(e,t,n){t.Z=n.p+"assets/images/create-api-key-0d862ccaf56b4ebbdeb0b86d3b8777f3.gif"},6131:function(e,t,n){t.Z=n.p+"assets/images/create-env-deploy-4a47be049c74e4b720e5b5815e6c1dcc.gif"}}]);