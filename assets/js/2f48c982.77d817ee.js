"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(y,i(i({ref:t},s),{},{components:n})):o.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={id:"deployment",title:"Deployment"},i=void 0,l={unversionedId:"containers/deployment",id:"version-5.0.0/containers/deployment",title:"Deployment",description:"Our SDK provides you a CLI to deploy.",source:"@site/versioned_docs/version-5.0.0/containers/deployment.md",sourceDirName:"containers",slug:"/containers/deployment",permalink:"/docs/5.0.0/containers/deployment",draft:!1,tags:[],version:"5.0.0",frontMatter:{id:"deployment",title:"Deployment"},sidebar:"mainSidebar",previous:{title:"Delete a runner",permalink:"/docs/5.0.0/runners/delete"},next:{title:"Configuration file",permalink:"/docs/5.0.0/containers/configuration-file"}},p={},c=[{value:"Principle",id:"principle",level:2},{value:"Projects and environments",id:"projects-and-environments",level:3},{value:"Configuration",id:"configuration",level:3},{value:"First deployment",id:"first-deployment",level:3},{value:"Deploy one or multiple containers",id:"deploy-one-or-multiple-containers",level:2},{value:"After deployment",id:"after-deployment",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Our SDK provides you a CLI to deploy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy\n")),(0,r.kt)("h2",{id:"principle"},"Principle"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy")," command is able to deploy a container"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"from a dockerfile"),(0,r.kt)("li",{parentName:"ul"},"from a nodeJs server"),(0,r.kt)("li",{parentName:"ul"},"from static assets")),(0,r.kt)("p",null,"During the deployment, the platform manages the setup of the endpoints, the creation of HTTPS certificates, the docker image build and storage in a private repository, the deployment of the image and run on the selected runner."),(0,r.kt)("h3",{id:"projects-and-environments"},"Projects and environments"),(0,r.kt)("p",null,"To deploy you need to indicate in which project and in which environment you want to deploy your containers."),(0,r.kt)("p",null,"You can use the console or the cli to create projects and environments."),(0,r.kt)("p",null,"On the cli use "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# to create a project\nnpx warp project create\n\n# to create an environment in a project\nnpx warp env create\n")),(0,r.kt)("p",null,"During each deploy you'll be invited to indicate in which project/environment you are deploying."),(0,r.kt)("p",null,"During a session you can select the project/environment you want to use to avoid to enter it during the deploy command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# to select a project\nnpx warp project select\n\n# to select an environment in a project\nnpx warp env select\n")),(0,r.kt)("p",null,"If during the session you want to check what has been selected, use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# to view selected project/environment\nnpx warp whereami\n")),(0,r.kt)("p",null,"You can also use a configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"warp.config.js")," ",(0,r.kt)("a",{parentName:"p",href:"configuration-file"},"configuration file"),", or use additional parameter to the deploy command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy --project <project> --env <env>\n")),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The deploy command can be applied on one or multiple directories."),(0,r.kt)("p",null,"For each directory the command is applied, it searches for a ",(0,r.kt)("inlineCode",{parentName:"p"},"warp.config.js")," ",(0,r.kt)("a",{parentName:"p",href:"configuration-file"},"configuration file")," that indicate how to configure the deployment of container. "),(0,r.kt)("p",null,"If there is no configuration file or deployement configuration, the command identifies automatically the deployment configuration in that way:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if there is a ",(0,r.kt)("inlineCode",{parentName:"li"},"Dockerfile"),", it will deploy from the dockerfile and use the deployment type 'docker'"),(0,r.kt)("li",{parentName:"ul"},"if there is a ",(0,r.kt)("inlineCode",{parentName:"li"},"public"),"or ",(0,r.kt)("inlineCode",{parentName:"li"},"hosting")," directory, it will deploy static assets and use the deployment type 'hosting'"),(0,r.kt)("li",{parentName:"ul"},"if there is a ",(0,r.kt)("inlineCode",{parentName:"li"},"scripts.start")," in a ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),", it will deploy a nodeJs server and use the deployment type 'server'"),(0,r.kt)("li",{parentName:"ul"},"if there is a ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," in a ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),", it will deploy a nodeJs module and use the deployment type 'module' (see ",(0,r.kt)("a",{parentName:"li",href:"/docs/5.0.0/module/module-as-a-service"},"beta module-as-a-service"),")")),(0,r.kt)("h3",{id:"first-deployment"},"First deployment"),(0,r.kt)("p",null,"During the first deployment two additional configurations are required for each container:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the runner name to deploy on"),(0,r.kt)("li",{parentName:"ul"},"the url to use to access the container")),(0,r.kt)("p",null,"These infos can also be specified in the configuration file. But if there are missing, you will have to interactively enter your values."),(0,r.kt)("p",null,"About urls, we provide test urls for testing/dev deployments, but you can also assigned you custom domain on an container see ",(0,r.kt)("a",{parentName:"p",href:"custom-domains"},"Use custom domains")),(0,r.kt)("p",null,"At last, a name to identify the container that is deployed, and other following deployment will be set.\nIf there is a name specified in the configuration it is used. Otherwise the command line sets\nautomatically a name in that way according to the deployment type:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the case  'server' or 'module', the package name in ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json"),"is used."),(0,r.kt)("li",{parentName:"ul"},"For 'docker' the parent dirname of where is located the Dockerfile is used."),(0,r.kt)("li",{parentName:"ul"},"For 'hosting' the parent dirname of where is located ",(0,r.kt)("inlineCode",{parentName:"li"},"public"),"or ",(0,r.kt)("inlineCode",{parentName:"li"},"static"),"is used.")),(0,r.kt)("h2",{id:"deploy-one-or-multiple-containers"},"Deploy one or multiple containers"),(0,r.kt)("p",null,"If no parameter is used, the command will scan inside the directory you run the command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy\n")),(0,r.kt)("p",null,"You can also indicate which directory to deploy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy <directory>\n")),(0,r.kt)("p",null,"To deploy a specific configuration (that can be used for one or multiple container deployment)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy <configuration_file>\n")),(0,r.kt)("p",null,"To deploy multiple containers at once, indicate the list of directories to deploy, by doing this way, the command will create a global configuration merging all sub configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy <directory1> <directory2> <directory3>\n")),(0,r.kt)("p",null,"In that case you can also use configuration files and directories "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy <configuration_file1> <directory1> <directory2> <configuration_file2>\n")),(0,r.kt)("h2",{id:"after-deployment"},"After deployment"),(0,r.kt)("p",null,"After deploying in an environment, you can have info about what has been deployed using "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env info\n")),(0,r.kt)("p",null,"The command will show you, the url, runners, containers, deployments you done in the environment."))}d.isMDXComponent=!0}}]);