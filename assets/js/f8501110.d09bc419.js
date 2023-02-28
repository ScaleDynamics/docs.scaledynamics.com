"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1021],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2004:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={id:"create",title:"Create a Runner"},l=void 0,i={unversionedId:"runners/create",id:"version-5.0.0/runners/create",title:"Create a Runner",description:"On our platform a Runner represents a cloud resource to run containers.",source:"@site/versioned_docs/version-5.0.0/runners/create.md",sourceDirName:"runners",slug:"/runners/create",permalink:"/docs/5.0.0/runners/create",draft:!1,tags:[],version:"5.0.0",frontMatter:{id:"create",title:"Create a Runner"},sidebar:"mainSidebar",previous:{title:"Glossary",permalink:"/docs/5.0.0/caas/caas_glossary"},next:{title:"Add manually a runner",permalink:"/docs/5.0.0/runners/add"}},s={},u=[{value:"Models",id:"models",level:2},{value:"Predefined models",id:"predefined-models",level:3},{value:"Custom models",id:"custom-models",level:3},{value:"Using the Web console",id:"using-the-web-console",level:3},{value:"Using the SDK",id:"using-the-sdk",level:3},{value:"Assigning the runner to an org, and project, and env",id:"assigning-the-runner-to-an-org-and-project-and-env",level:2},{value:"Example",id:"example",level:3}],c={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"On our platform a ",(0,a.kt)("i",null,"Runner")," represents a cloud resource to run containers.\nConcretly a runner is a public cloud instance, an on-premise VM or a bare metal server.\nEach runner is identified by a name that you define.\nYou will use that name to indicate on which runner to deploy or move a container."),(0,a.kt)("h2",{id:"models"},"Models"),(0,a.kt)("p",null,"The way to create a runner is by using a ",(0,a.kt)("i",null,"model")," that defines the provider, the region and the caracteristics of the underlying cloud\nresource (number of vCPU, RAM size, disk size, GPUs)."),(0,a.kt)("h3",{id:"predefined-models"},"Predefined models"),(0,a.kt)("p",null,"We provide some predefined runner models available on AWS, Azure, GCP and ScaleWay."),(0,a.kt)("p",null,"These models have been categorized in several categories of runners aka ",(0,a.kt)("em",{parentName:"p"},"Small"),",\n",(0,a.kt)("em",{parentName:"p"},"Medium"),", ",(0,a.kt)("em",{parentName:"p"},"Large")," to ease the comparison across\nthe different clouds."),(0,a.kt)("h3",{id:"custom-models"},"Custom models"),(0,a.kt)("p",null,"In case you don't have the right runner configuration model, we can add custom models\nfor your organisation. To do that, send a mail to '",(0,a.kt)("a",{parentName:"p",href:"mailto:support@scaledynamics.com"},"support@scaledynamics.com"),"'\nand precise the configuration you would like in terms of number of vCPUs, RAM size, disk size, GPUs."),(0,a.kt)("h3",{id:"using-the-web-console"},"Using the Web console"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that you can access the console on ",(0,a.kt)("a",null,(0,a.kt)("a",{parentName:"p",href:"https://console.scaledynamics.com"},"https://console.scaledynamics.com")),".")),(0,a.kt)("p",null,"To add a runner that can be used in the organization, in the 'Organization' view, click on the 'Runners' tab and click on 'Create Runner' button."),(0,a.kt)("p",null,"To add a runner that can be only used in a project, in the 'Project' view, click on the 'Runners' tab and click on 'Create Runner' button."),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/docs/models.png",width:"500"}),(0,a.kt)("p",null,"Interface to create a runner")),(0,a.kt)("p",null,"You have to indicate a Runner name uid and select the runner model you want to use. You can filter by\nprovider, region and size of runners in terms of number of vCPU, RAM size, disk size, GPUs.\nWhen you have selected a model, click on the order button to create the runner."),(0,a.kt)("p",null,"The new runner will appear in the 'Runners' tab, indicating its status."),(0,a.kt)("h3",{id:"using-the-sdk"},"Using the SDK"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0.0/caas/caas_sdk"},"SDK installation")," to get the SDK installed.")),(0,a.kt)("p",null,"With the command below list all available models."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# List all models\nnpx warp runner model list\n")),(0,a.kt)("p",null,"To create the runner indicate which model to use and set a name for your runner."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# create a runner <myRunnerName> from a model <modelId>\nnpx warp runner create <myRunnerName> --model <modelId>\n")),(0,a.kt)("h2",{id:"assigning-the-runner-to-an-org-and-project-and-env"},"Assigning the runner to an org, and project, and env"),(0,a.kt)("p",null,"You can assign a runner to be used to isolate the usage of a runner"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"on an organization, meaning that all containers or all projects and environments car use that runner to run,"),(0,a.kt)("li",{parentName:"ul"},"on an project, meaning that all containers of that project and its environments car use that runner to run,"),(0,a.kt)("li",{parentName:"ul"},"on an env, meaning that all containers or that environment car use that runner to run.")),(0,a.kt)("p",null,"Do do that, on the console it depends on which runners view at organization, project or environment level you are adding a runner."),(0,a.kt)("p",null,"On the cli, you have to indicate the ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," optional argument. ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," is the concatenation of /project/env name. / mean the current organization you are in session. For example to assign\na runner on the project 'demo' of the current organization use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# create a runner <myRunnerName> from a model <modelId> on the demo project of the current org\nnpx warp runner create <myRunnerName> --model <modelId> --path "/demo"\n')),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Suppose you want to create a Runner that will be named ",(0,a.kt)("inlineCode",{parentName:"p"},"my_aws_fr")," with 4vCPUs, 16GiB on AWS in France."),(0,a.kt)("p",null,"Get AWS models in France:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx warp runner model list | grep AWS | grep France\naws-ec2-t2.micro-500-eu-west-3                         Global         AWS Elastic Compute Cloud             1 vCPU    1 GiB             500 GB     Europe, France, Paris\naws-ec2-t2.xlarge-4000-eu-west-3                       Global         AWS Elastic Compute Cloud             4 vCPUs   16 GiB            4000 GB    Europe, France, Paris\naws-ec2-t2.medium-1000-eu-west-3                       Global         AWS Elastic Compute Cloud             2 vCPUs   4 GiB             1000 GB    Europe, France, Paris\n")),(0,a.kt)("p",null,"Use the model ",(0,a.kt)("inlineCode",{parentName:"p"},"aws-ec2-t2.xlarge-4000-eu-west-3")," to create the runner:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx warp runner create my_aws_fr --model aws-ec2-t2.xlarge-4000-eu-west-3 \n")))}p.isMDXComponent=!0}}]);