"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4269],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={id:"create",title:"Create a Runner"},i=void 0,l={unversionedId:"runners/create",id:"runners/create",title:"Create a Runner",description:"On our platform a Runner represents a cloud resource to run containers.",source:"@site/docs/runners/create.md",sourceDirName:"runners",slug:"/runners/create",permalink:"/docs/next/runners/create",draft:!1,tags:[],version:"current",frontMatter:{id:"create",title:"Create a Runner"},sidebar:"mainSidebar",previous:{title:"Ionos",permalink:"/docs/next/csp/ionos"},next:{title:"Add manually a runner",permalink:"/docs/next/runners/add"}},s={},c=[{value:"Models",id:"models",level:2},{value:"Predefined models",id:"predefined-models",level:3},{value:"Custom models",id:"custom-models",level:3},{value:"Create a runner",id:"create-a-runner",level:2},{value:"Visibility",id:"visibility",level:3},{value:"Using the Web console",id:"using-the-web-console",level:3},{value:"Using the SDK",id:"using-the-sdk",level:3},{value:"Example of use",id:"example-of-use",level:4},{value:"Set the visiblity",id:"set-the-visiblity",level:4}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"On our platform a ",(0,a.kt)("i",null,"Runner")," represents a cloud resource to run containers.\nConcretly a runner is a public cloud instance, an on-premise VM or a bare metal server.\nEach runner is identified by a uniq name that you define.\nYou will use that name to indicate on which runner to deploy or assign a container service."),(0,a.kt)("h2",{id:"models"},"Models"),(0,a.kt)("p",null,"The way to create a runner is by using a ",(0,a.kt)("i",null,"model")," that defines the provider, the region and the caracteristics of the underlying cloud resource (number of vCPU, RAM size, disk size, GPUs)."),(0,a.kt)("h3",{id:"predefined-models"},"Predefined models"),(0,a.kt)("p",null,"We provide some predefined runner models available on all the major cloud providers and regional ones."),(0,a.kt)("p",null,"To ease the comparison and the search, models are categorized in several categories: ",(0,a.kt)("em",{parentName:"p"},"Small"),",\n",(0,a.kt)("em",{parentName:"p"},"Medium"),", ",(0,a.kt)("em",{parentName:"p"},"Large"),", ",(0,a.kt)("em",{parentName:"p"},"1XLarge"),", ",(0,a.kt)("em",{parentName:"p"},"2XLarge"),", ",(0,a.kt)("em",{parentName:"p"},"3XLarge")," , ",(0,a.kt)("em",{parentName:"p"},"4XLarge"),". The category ",(0,a.kt)("em",{parentName:"p"},"GPU")," represents models with GPU."),(0,a.kt)("h3",{id:"custom-models"},"Custom models"),(0,a.kt)("p",null,"If you have specifc needs we can add custom models on request. Basically we can provide any kind of resource that can be allocated dynamically on each cloud provider. When added, custom models are visible on the ",(0,a.kt)("em",{parentName:"p"},"Custom")," category.\nTo request a custom model, send a mail to '",(0,a.kt)("a",{parentName:"p",href:"mailto:support@scaledynamics.com"},"support@scaledynamics.com"),"' and precise the configuration you would like: provider, region, number of vCPUs, RAM size, disk size, or GPUs. We will get back to you."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Note that adding a custom model could require an extra fee according to the requested configuration.")),(0,a.kt)("h2",{id:"create-a-runner"},"Create a runner"),(0,a.kt)("h3",{id:"visibility"},"Visibility"),(0,a.kt)("p",null,"When you create a runner you can define its visibility that indicates where the runner can be used:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"organization"),": meaning that all container services or all projects and environments car use the runner,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"project"),", meaning that all container services of that project and its environments car use the runner,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"env"),", meaning that all container services of that environment can use the runner.")),(0,a.kt)("h3",{id:"using-the-web-console"},"Using the Web console"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that you can access the console on ",(0,a.kt)("a",null,(0,a.kt)("a",{parentName:"p",href:"https://console.scaledynamics.com"},"https://console.scaledynamics.com")),".")),(0,a.kt)("p",null,"To add a runner with ",(0,a.kt)("em",{parentName:"p"},"organization")," visibility, click on the 'Runners' tab of the 'Organization' view and click on '+ Runner' button.\nTo add a runner with ",(0,a.kt)("em",{parentName:"p"},"project")," visibility, click on the 'Runners' tab of the 'Project' view, and click on '+ Runner' button.\nTo add a runner with ",(0,a.kt)("em",{parentName:"p"},"environment")," visibility, click on the 'Runners' tab of the 'Environment' view, and click on '+ Runner' button."),(0,a.kt)("p",null,"Then you have to select which runner model you want to create. You can filter by\nprovider, region, categories, size of runners in terms of number of vCPU, RAM size, disk size and GPUs.\nClick on 'Select' button when choosen."),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/docs/models.png",width:"500"}),(0,a.kt)("p",null,"Interface to select a runner model")),(0,a.kt)("p",null,"The next step is to enter a ",(0,a.kt)("em",{parentName:"p"},"name")," for the runner (name must be uniq accros an organization) and an optional ",(0,a.kt)("em",{parentName:"p"},"description"),". Click on the 'Create runner' to launch runner creation."),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/docs/select.png",width:"500"}),(0,a.kt)("p",null,"Interface to set runner name and create runner")),(0,a.kt)("p",null,"Back on the 'Runner' tab, the runner name will appear in the 'Runners' tab, indicating its status. When status is 'Running' you can deploy and run containers on it."),(0,a.kt)("h3",{id:"using-the-sdk"},"Using the SDK"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/caas/caas_sdk"},"SDK installation")," to get the SDK installed.")),(0,a.kt)("p",null,"To get the list of all available models in our catalog use the command below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# List all models\nnpx warp runner model list\n")),(0,a.kt)("p",null,"The command dumps on each line: the model ",(0,a.kt)("em",{parentName:"p"},"name"),", the cloud ",(0,a.kt)("em",{parentName:"p"},"provider"),", the specification of the resource (",(0,a.kt)("em",{parentName:"p"},"cpu"),", ",(0,a.kt)("em",{parentName:"p"},"ram"),", ",(0,a.kt)("em",{parentName:"p"},"disk"),") and the region name."),(0,a.kt)("p",null,"To create the runner, indicate which model name to use and set a runner name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# create a runner <myRunnerName> from a model <modelName>\nnpx warp runner create <myRunnerName> --model <modelName>\n")),(0,a.kt)("h4",{id:"example-of-use"},"Example of use"),(0,a.kt)("p",null,"Suppose you want to create a Runner that will be named ",(0,a.kt)("inlineCode",{parentName:"p"},"my_aws_fr")," with 4vCPUs, 16GiB on AWS in France."),(0,a.kt)("p",null,"Get AWS models in France:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx warp runner model list | grep AWS | grep France | grep '4 vCPU'\naws-ec2-t2.xlarge-4000-eu-west-3                       Global         AWS Elastic Compute Cloud             4 vCPUs   16 GiB            4000 GB    Europe, France, Paris\n")),(0,a.kt)("p",null,"Use the model ",(0,a.kt)("inlineCode",{parentName:"p"},"aws-ec2-t2.xlarge-4000-eu-west-3")," to create the runner:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx warp runner create my_aws_fr --model aws-ec2-t2.xlarge-4000-eu-west-3\n")),(0,a.kt)("h4",{id:"set-the-visiblity"},"Set the visiblity"),(0,a.kt)("p",null,"By default the runner visibility is the organisation. To configure the visibility of the runner, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," optional argument.\n",(0,a.kt)("inlineCode",{parentName:"p"},"path")," is the concatenation of '/project/env' name. '/' mean the current organization."),(0,a.kt)("p",null,"For example to create a runner with visibility on the project 'demo' of the current organization:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'npx warp runner create <myRunnerName> --model <modelName> --path "/demo"\n')),(0,a.kt)("p",null,"For example to create a runner with visibility on the environment 'test' of the 'demo' project of the current organization:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'npx warp runner create <myRunnerName> --model <modelName> --path "/demo/test"\n')))}m.isMDXComponent=!0}}]);