"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9299],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),u=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return o.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||r;return t?o.createElement(f,i(i({ref:n},s),{},{components:t})):o.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5033:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=t(7462),a=(t(7294),t(3905));const r={id:"5.0.0",title:"Version 5.0.0 - Excalibur"},i=void 0,l={unversionedId:"release/5.0.0",id:"release/5.0.0",title:"Version 5.0.0 - Excalibur",description:"Below the list of updates in this release. Please have a look to Breaking changes with previous version of the plaform and Action required to know if you have something to do.",source:"@site/docs/release/5.0.0.md",sourceDirName:"release",slug:"/release/5.0.0",permalink:"/docs/release/5.0.0",draft:!1,tags:[],version:"current",frontMatter:{id:"5.0.0",title:"Version 5.0.0 - Excalibur"},sidebar:"mainSidebar",previous:{title:"Configuration file",permalink:"/docs/module/configuration-file"}},d={},u=[{value:"Updates and new features on the CLI",id:"updates-and-new-features-on-the-cli",level:2},{value:"Introducting Runner management",id:"introducting-runner-management",level:3},{value:"<code>deploy</code> command extensions and limitations removal",id:"deploy-command-extensions-and-limitations-removal",level:3},{value:"Build logs extension",id:"build-logs-extension",level:3},{value:"Better interactivity",id:"better-interactivity",level:3},{value:"Updates and new features on the console",id:"updates-and-new-features-on-the-console",level:2},{value:"&#39;Runners&#39; view",id:"runners-view",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Speedup project and env page loading time",id:"speedup-project-and-env-page-loading-time",level:3},{value:"Breaking change",id:"breaking-change",level:2},{value:"Action required",id:"action-required",level:2},{value:"If you have deployed containers with a previous version of the platform and want to redeploy",id:"if-you-have-deployed-containers-with-a-previous-version-of-the-platform-and-want-to-redeploy",level:3},{value:"If you don&#39;t have a <code>warp.config.js</code> configuration file in the directory to deploy, you need to create a new one as follows:",id:"if-you-dont-have-a-warpconfigjs-configuration-file-in-the-directory-to-deploy-you-need-to-create-a-new-one-as-follows",level:4},{value:"If you already have a <code>warp.config.js</code> configuration file in the directory to deploy, you need to modify it as follows.",id:"if-you-already-have-a-warpconfigjs-configuration-file-in-the-directory-to-deploy-you-need-to-modify-it-as-follows",level:4},{value:"If you allocated runners with a previous version",id:"if-you-allocated-runners-with-a-previous-version",level:3}],s={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Below the list of updates in this release. Please have a look to ",(0,a.kt)("a",{parentName:"p",href:"#breaking-change"},"Breaking changes")," with previous version of the plaform and ",(0,a.kt)("a",{parentName:"p",href:"#action-required"},"Action required")," to know if you have something to do."),(0,a.kt)("h2",{id:"updates-and-new-features-on-the-cli"},"Updates and new features on the CLI"),(0,a.kt)("h3",{id:"introducting-runner-management"},"Introducting Runner management"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/runners/create"},"Runner")," page for details."),(0,a.kt)("p",null,"On the CLI you can now get the list of runner models you can use to create a runner"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add command ",(0,a.kt)("inlineCode",{parentName:"li"},"runner model list")," - ")),(0,a.kt)("p",null,"Get the list of created runners, create dynamically a runner, delete a runner and get info of the runner"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add commands ",(0,a.kt)("inlineCode",{parentName:"li"},"runner list"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"runner create"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"runner delete")," & ",(0,a.kt)("inlineCode",{parentName:"li"},"runner info"))),(0,a.kt)("p",null,"Move a container to another runner dynamically"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add command ",(0,a.kt)("inlineCode",{parentName:"li"},"env runner set"))),(0,a.kt)("h3",{id:"deploy-command-extensions-and-limitations-removal"},(0,a.kt)("inlineCode",{parentName:"h3"},"deploy")," command extensions and limitations removal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can now assign each container to the runner you select. A runner can run several containers."),(0,a.kt)("li",{parentName:"ul"},"You can deploy multiple containers during one deploy"),(0,a.kt)("li",{parentName:"ul"},"Remove limit of deployment duration"),(0,a.kt)("li",{parentName:"ul"},"Remove limit on total size of a deployment"),(0,a.kt)("li",{parentName:"ul"},"Remove limit on individual file size"),(0,a.kt)("li",{parentName:"ul"},"Add support of UTF-8 file name"),(0,a.kt)("li",{parentName:"ul"},"Add support for long path and long file name"),(0,a.kt)("li",{parentName:"ul"},"Add support for file and directory permission"),(0,a.kt)("li",{parentName:"ul"},"Add support for symbolic and hard link")),(0,a.kt)("h3",{id:"build-logs-extension"},"Build logs extension"),(0,a.kt)("p",null,"Docker image build logs are now accessible"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Extend command ",(0,a.kt)("inlineCode",{parentName:"li"},"deployment logs")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"build")," level")),(0,a.kt)("h3",{id:"better-interactivity"},"Better interactivity"),(0,a.kt)("p",null,"To speedup the selection of interactive fields"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add filter during prompt (match entries that contains the filter)")),(0,a.kt)("h2",{id:"updates-and-new-features-on-the-console"},"Updates and new features on the console"),(0,a.kt)("h3",{id:"runners-view"},"'Runners' view"),(0,a.kt)("p",null,"Introduction of a new view that shows all Runners of an organization/project and which containers\nare running on them."),(0,a.kt)("h3",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/metrics/"},"Metrics")," are now provided for each Runner and for each container to give info to the developer."),(0,a.kt)("h3",{id:"speedup-project-and-env-page-loading-time"},"Speedup project and env page loading time"),(0,a.kt)("p",null,"Loading time has been improved for projet and env page."),(0,a.kt)("h2",{id:"breaking-change"},"Breaking change"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change default container name for ",(0,a.kt)("inlineCode",{parentName:"li"},"docker")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"hosting"),". Before, the default name of the container was the name of the type of deployment (",(0,a.kt)("em",{parentName:"li"},"aka")," ",(0,a.kt)("inlineCode",{parentName:"li"},"docker")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"hosting"),"). Now this is the name of the parent directory. See ",(0,a.kt)("a",{parentName:"li",href:"/docs/containers/deployment"},"Deployment"),"."),(0,a.kt)("li",{parentName:"ul"},"The base url and runner configuration was linked on the type of the container (",(0,a.kt)("em",{parentName:"li"},"aka")," ",(0,a.kt)("inlineCode",{parentName:"li"},"docker"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"hosting"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"server")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"module"),"), now they are linked to the name of containers. See ",(0,a.kt)("a",{parentName:"li",href:"/docs/containers/deployment"},"Deployment")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/containers/custom-domains"},"Custom domains"))),(0,a.kt)("h2",{id:"action-required"},"Action required"),(0,a.kt)("h3",{id:"if-you-have-deployed-containers-with-a-previous-version-of-the-platform-and-want-to-redeploy"},"If you have deployed containers with a previous version of the platform and want to redeploy"),(0,a.kt)("p",null,"Although containers deployed with a previous version of the platform are still active, it is necessary to make a simple modification on your side of your deployment scripts in order to be able to redeploy these containers with the new version of the platform."),(0,a.kt)("h4",{id:"if-you-dont-have-a-warpconfigjs-configuration-file-in-the-directory-to-deploy-you-need-to-create-a-new-one-as-follows"},"If you don't have a ",(0,a.kt)("inlineCode",{parentName:"h4"},"warp.config.js")," configuration file in the directory to deploy, you need to create a new one as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are deploying a container of type 'docker' (dockerfile)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"module.exports = {\n  docker: 'docker'\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are deploying a 'hosting' type container (static assets)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"module.exports = {\n  hosting: 'hosting'\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are deploying a 'server' type container (nodejs server)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"module.exports = {\n  server: 'server'\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are deploying a container of type 'module' (nodejs module)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"module.exports = {\n  module: 'module'\n};\n")),(0,a.kt)("h4",{id:"if-you-already-have-a-warpconfigjs-configuration-file-in-the-directory-to-deploy-you-need-to-modify-it-as-follows"},"If you already have a ",(0,a.kt)("inlineCode",{parentName:"h4"},"warp.config.js")," configuration file in the directory to deploy, you need to modify it as follows."),(0,a.kt)("p",null,"If you specified the deployment type (",(0,a.kt)("inlineCode",{parentName:"p"},'docker: "xxx"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'hosting: "xxx"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'server: "xxx"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'module: "xxx"'),"), modify the line using the type as an attribute (",(0,a.kt)("inlineCode",{parentName:"p"},'docker: "docker"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'hosting: "hosting"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'server: "server"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'module: "module"'),").\nIf you did not specify the service type, add it as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are deploying a container of type 'docker' (dockerfile)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"module.exports = {\n  docker: 'docker'\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are deploying a 'hosting' type container (static assets)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"module.exports = {\n  hosting: 'hosting'\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are deploying a 'server' type container (nodejs server)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"module.exports = {\n  server: 'server'\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are deploying a container of type 'module' (nodejs module)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"module.exports = {\n  module: 'module'\n};\n")),(0,a.kt)("h3",{id:"if-you-allocated-runners-with-a-previous-version"},"If you allocated runners with a previous version"),(0,a.kt)("p",null,"In case you have allocated runners with a previous version of the plateform, you will see them in the 'Runners' page of the console."),(0,a.kt)("p",null,"Nevertheless, these runners can only be used in the environment where you assigned them, so you cannot deploy another container on it\nif it is not part of the same environment."),(0,a.kt)("p",null,"If you want to have one runner running multiple containers of your organization, or project, you have to ",(0,a.kt)("a",{parentName:"p",href:"/docs/runners/create"},"create a new runner"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/containers/move"},"move the containers")," running on older runners to it, and ",(0,a.kt)("a",{parentName:"p",href:"/docs/runners/delete"},"delete the odler runner"),"."))}p.isMDXComponent=!0}}]);