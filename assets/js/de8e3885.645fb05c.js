"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(y,a(a({ref:t},c),{},{components:n})):i.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const r={id:"deployment",title:"Deployment"},a=void 0,l={unversionedId:"services/deployment",id:"version-5.3/services/deployment",title:"Deployment",description:"Our SDK provides you a CLI to deploy one or several services.",source:"@site/versioned_docs/version-5.3/services/deployment.md",sourceDirName:"services",slug:"/services/deployment",permalink:"/docs/5.3/services/deployment",draft:!1,tags:[],version:"5.3",frontMatter:{id:"deployment",title:"Deployment"},sidebar:"mainSidebar",previous:{title:"Runner states",permalink:"/docs/5.3/runners/states"},next:{title:"Project, environment, session",permalink:"/docs/5.3/services/session"}},s={},p=[{value:"Principle",id:"principle",level:2},{value:"Build and deploy",id:"build-and-deploy",level:3},{value:"Deploy an existing docker image",id:"deploy-an-existing-docker-image",level:3},{value:"Deploy one or multiple services",id:"deploy-one-or-multiple-services",level:2},{value:"Configuration setup",id:"configuration-setup",level:2},{value:"Zero configuration",id:"zero-configuration",level:3},{value:"Configuration to deploy an existing docker image",id:"configuration-to-deploy-an-existing-docker-image",level:3},{value:"First deployment",id:"first-deployment",level:2},{value:"Setting service name",id:"setting-service-name",level:2},{value:"After deployment",id:"after-deployment",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Our SDK provides you a CLI to deploy one or several services."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy\n")),(0,o.kt)("h2",{id:"principle"},"Principle"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command is able to deploy a service"),(0,o.kt)("h3",{id:"build-and-deploy"},"Build and deploy"),(0,o.kt)("p",null,"If deploying from a dockerfile, a nodeJs server, or static assets, the platform manages the docker image build for the corresponding service type in a private internal repository, the deployment of the docker image on the selected runner, the setup of the endpoints, the creation of HTTPS certificates and the run on the selected runner."),(0,o.kt)("h3",{id:"deploy-an-existing-docker-image"},"Deploy an existing docker image"),(0,o.kt)("p",null,"You can also deploy an existing docker image available on a public or private repository. In that case the platform manages the deployment of the docker image on the selected runner, the setup of the endpoints, the creation of HTTPS certificates and the run on the selected runner."),(0,o.kt)("p",null,"To deploy you need to indicate in which project and in which environment you want to deploy your service. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.3/services/session"},"Project, Environment and working session"),"."),(0,o.kt)("h2",{id:"deploy-one-or-multiple-services"},"Deploy one or multiple services"),(0,o.kt)("p",null,"The deploy command can be used to deploy one of several services at once."),(0,o.kt)("p",null,"If no parameter is used, the command will scan inside the directory you run the command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy\n")),(0,o.kt)("p",null,"You can also indicate which directory to deploy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy <directory>\n")),(0,o.kt)("p",null,"To deploy multiple services at once, indicate the list of directories to deploy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy <directory1> <directory2> <directory3>\n")),(0,o.kt)("h2",{id:"configuration-setup"},"Configuration setup"),(0,o.kt)("p",null,"For each directory the command is applied, it searches for a ",(0,o.kt)("inlineCode",{parentName:"p"},"warp.config.js")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.3/services/configuration-file"},"configuration file")," that indicate how to configure the deployment of the service. You can configure the build or docker to use."),(0,o.kt)("h3",{id:"zero-configuration"},"Zero configuration"),(0,o.kt)("p",null,"If there is no configuration file or deployment configuration, the command identifies automatically the deployment configuration in that way:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if there is a ",(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile"),", it will deploy from the dockerfile and use the deployment type 'docker'"),(0,o.kt)("li",{parentName:"ul"},"if there is a ",(0,o.kt)("inlineCode",{parentName:"li"},"public"),"or ",(0,o.kt)("inlineCode",{parentName:"li"},"hosting")," directory, it will deploy static assets and use the deployment type 'hosting'"),(0,o.kt)("li",{parentName:"ul"},"if there is a ",(0,o.kt)("inlineCode",{parentName:"li"},"scripts.start")," in a ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),", it will deploy a nodeJs server and use the deployment type 'server'")),(0,o.kt)("h3",{id:"configuration-to-deploy-an-existing-docker-image"},"Configuration to deploy an existing docker image"),(0,o.kt)("p",null,"To indicate which image to deploy, add in your configuration file an ",(0,o.kt)("inlineCode",{parentName:"p"},"\xecmage"),"object with properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"name"),": the name of the image to start the container from. It must follow this format: ",(0,o.kt)("inlineCode",{parentName:"p"},"[<registry>/][<project>/]<name>[:<tag>|@<digest>]"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"credentials.login"),": login to access the image registry,")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"credentials.password"),": password to access the image registry"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\nmodule.exports = {\n  ...\n  image: {\n    name: ...,\n    credential: {\n      login:...,\n      password: ...\n    },\n  }\n  ...\n")),(0,o.kt)("h2",{id:"first-deployment"},"First deployment"),(0,o.kt)("p",null,"During the first deployment two additional configurations are required for each container:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the public url to use to access the container"),(0,o.kt)("li",{parentName:"ul"},"the runner name to deploy on")),(0,o.kt)("p",null,"These infos can also be specified in the configuration file. But if there are missing, you will have to interactively enter your values."),(0,o.kt)("p",null,"About urls, we provide random test urls for testing/development, but you can also assigned you custom domain on an container see ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.3/services/custom-domains"},"Use custom domains")),(0,o.kt)("h2",{id:"setting-service-name"},"Setting service name"),(0,o.kt)("p",null,"To identify each service that is deployed, a service name is assigned to each service."),(0,o.kt)("p",null,"To assign a name to a service use the configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"warp.config.js"),"."),(0,o.kt)("p",null,"For example to assign 'my-service-name' when deploying from a Dockerfile use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  docker: "my-service-name",\n};\n')),(0,o.kt)("p",null,"If there is a configuration file, the name of the service is used.\nOtherwise the command line sets automatically a name in that way according to the deployment type:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For 'docker' the parent dirname of where is located the Dockerfile is used."),(0,o.kt)("li",{parentName:"ul"},"For 'server', the package name in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json"),"is used."),(0,o.kt)("li",{parentName:"ul"},"For 'hosting' the parent dirname of where is located ",(0,o.kt)("inlineCode",{parentName:"li"},"public"),"or ",(0,o.kt)("inlineCode",{parentName:"li"},"static"),"is used.")),(0,o.kt)("h2",{id:"after-deployment"},"After deployment"),(0,o.kt)("p",null,"After deploying in an environment, you can have info about what has been deployed using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env info\n")),(0,o.kt)("p",null,"The command will show you, the url, runners, services and deployments you done in the environment."))}u.isMDXComponent=!0}}]);