"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[425],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=s(t),c=o,k=p["".concat(d,".").concat(c)]||p[c]||m[c]||l;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=c;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r[p]="string"==typeof e?e:o,i[1]=r;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},55170:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var a=t(87462),o=(t(67294),t(3905));const l={id:"release",title:"Release Notes"},i=void 0,r={unversionedId:"release",id:"version-5.0.x/release",title:"Release Notes",description:"Below the list of updates. Please have a look to breaking changes with previous versions of the plaform to know if you have something to do.",source:"@site/versioned_docs/version-5.0.x/release.md",sourceDirName:".",slug:"/release",permalink:"/docs/5.0.x/release",draft:!1,tags:[],version:"5.0.x",frontMatter:{id:"release",title:"Release Notes"},sidebar:"mainSidebar",previous:{title:"Service states",permalink:"/docs/5.0.x/services/states"}},d={},s=[{value:"Release 5.0.3",id:"release-503",level:2},{value:"<code>runner info</code> and <code>runner list</code> commands",id:"runner-info-and-runner-list-commands",level:3},{value:"<code>env runner set</code> command",id:"env-runner-set-command",level:3},{value:"<code>env base-url add</code> command",id:"env-base-url-add-command",level:3},{value:"<code>deploy</code> command",id:"deploy-command",level:3},{value:"<code>deployment info</code> command",id:"deployment-info-command",level:3},{value:"Release 5.0.2",id:"release-502",level:2},{value:"Configuration file",id:"configuration-file",level:3},{value:"<code>runner</code> commands",id:"runner-commands",level:3},{value:"<code>deployment logs</code> command",id:"deployment-logs-command",level:3},{value:"Release 5.0.1",id:"release-501",level:2},{value:"<code>runner create</code> update",id:"runner-create-update",level:3},{value:"<code>env info</code> update",id:"env-info-update",level:3},{value:"new <code>whereami</code> command",id:"new-whereami-command",level:3},{value:"Release 5.0.0",id:"release-500",level:2},{value:"Introducting Runner management",id:"introducting-runner-management",level:3},{value:"<code>deploy</code> command extensions and limitations removal",id:"deploy-command-extensions-and-limitations-removal",level:3},{value:"Build logs extension",id:"build-logs-extension",level:3},{value:"Better interactivity",id:"better-interactivity",level:3},{value:"Console &#39;Runners&#39; view",id:"console-runners-view",level:4},{value:"Console Metrics",id:"console-metrics",level:4},{value:"Speedup project and env page loading time",id:"speedup-project-and-env-page-loading-time",level:4},{value:"Breaking changes",id:"breaking-changes",level:2},{value:"Release 5.0.3",id:"release-503-1",level:3},{value:"Release 5.0.2",id:"release-502-1",level:3},{value:"Release 5.0.1",id:"release-501-1",level:3},{value:"Release 5.0.0",id:"release-500-1",level:3},{value:"If you have deployed containers with a previous version of the platform and want to redeploy",id:"if-you-have-deployed-containers-with-a-previous-version-of-the-platform-and-want-to-redeploy",level:4},{value:"If you don&#39;t have a <code>warp.config.js</code> configuration file in the directory to deploy, you need to create a new one as follows:",id:"if-you-dont-have-a-warpconfigjs-configuration-file-in-the-directory-to-deploy-you-need-to-create-a-new-one-as-follows",level:4},{value:"If you already have a <code>warp.config.js</code> configuration file in the directory to deploy, you need to modify it as follows.",id:"if-you-already-have-a-warpconfigjs-configuration-file-in-the-directory-to-deploy-you-need-to-modify-it-as-follows",level:4},{value:"If you allocated runners with a previous version",id:"if-you-allocated-runners-with-a-previous-version",level:4}],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Below the list of updates. Please have a look to ",(0,o.kt)("a",{parentName:"p",href:"#breaking-changes"},"breaking changes")," with previous versions of the plaform to know if you have something to do."),(0,o.kt)("h2",{id:"release-503"},"Release 5.0.3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Speed up some commands")),(0,o.kt)("h3",{id:"runner-info-and-runner-list-commands"},(0,o.kt)("inlineCode",{parentName:"h3"},"runner info")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"runner list")," commands"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Display the cloud provider account used by a runner")),(0,o.kt)("h3",{id:"env-runner-set-command"},(0,o.kt)("inlineCode",{parentName:"h3"},"env runner set")," command"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix issue that set a de-provisioned runner to an env in non interactive mode")),(0,o.kt)("h3",{id:"env-base-url-add-command"},(0,o.kt)("inlineCode",{parentName:"h3"},"env base-url add")," command"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Remove prompt in non interactive mode")),(0,o.kt)("h3",{id:"deploy-command"},(0,o.kt)("inlineCode",{parentName:"h3"},"deploy")," command"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Uploading files is now more robust"),(0,o.kt)("li",{parentName:"ul"},"Remove spinner when uploading files in non interactive mode")),(0,o.kt)("h3",{id:"deployment-info-command"},(0,o.kt)("inlineCode",{parentName:"h3"},"deployment info")," command"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix logs levels info")),(0,o.kt)("h2",{id:"release-502"},"Release 5.0.2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Speedup some operations"),(0,o.kt)("li",{parentName:"ul"},"In interactive mode, the browser to select a project and/or an env is now more simple"),(0,o.kt)("li",{parentName:"ul"},"Fix an issue that set interactivity in some non-interactive session")),(0,o.kt)("h3",{id:"configuration-file"},"Configuration file"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The name of a service can be anything except ",(0,o.kt)("inlineCode",{parentName:"li"},"/")),(0,o.kt)("li",{parentName:"ul"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"baseUrl")," configuration in service to be able to map a private port to your base URL (in replacement of the ",(0,o.kt)("inlineCode",{parentName:"li"},"baseUrlId"),", which remains allowed, but deprecated). See ",(0,o.kt)("a",{parentName:"li",href:"./services/configuration-file#deploymentbaseurl"},"documentation"),".")),(0,o.kt)("h3",{id:"runner-commands"},(0,o.kt)("inlineCode",{parentName:"h3"},"runner")," commands"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All ",(0,o.kt)("inlineCode",{parentName:"li"},"runner")," command are now independent of the project or env selected"),(0,o.kt)("li",{parentName:"ul"},"An option ",(0,o.kt)("inlineCode",{parentName:"li"},"--path")," is available to specified the project or env for ",(0,o.kt)("inlineCode",{parentName:"li"},"info")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"list")," commands. By default the ",(0,o.kt)("inlineCode",{parentName:"li"},"list")," will display all runners of your organization, and the ",(0,o.kt)("inlineCode",{parentName:"li"},"info")," will search the runner in all your organization."),(0,o.kt)("li",{parentName:"ul"},"In interactive mode, if there is some ambiguities in the name of a runner, a choice will be prompted to avoid adding ",(0,o.kt)("inlineCode",{parentName:"li"},"--path")," option"),(0,o.kt)("li",{parentName:"ul"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"--output-format")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"model list")," to output in ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"YAML")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"CSV")),(0,o.kt)("li",{parentName:"ul"},"Display the path in ",(0,o.kt)("inlineCode",{parentName:"li"},"info")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"list")," commands")),(0,o.kt)("h3",{id:"deployment-logs-command"},(0,o.kt)("inlineCode",{parentName:"h3"},"deployment logs")," command"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"--service")," to restrict the log to a specific set of services"),(0,o.kt)("li",{parentName:"ul"},"In interactive mode, the list of deployment is now sort by deployment date"),(0,o.kt)("li",{parentName:"ul"},"In interactive mode, the available log levels are displayed"),(0,o.kt)("li",{parentName:"ul"},"In interactive mode, all deployments without logs according to your options (",(0,o.kt)("inlineCode",{parentName:"li"},"--level"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"--since"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"--until"),", \u2026) are grayed"),(0,o.kt)("li",{parentName:"ul"},"The default log level of a deployment is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"build")," if there was an error during build, or all execution levels if there was no build error (",(0,o.kt)("em",{parentName:"li"},"aka")," ",(0,o.kt)("inlineCode",{parentName:"li"},"stdout"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"stdin"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"system"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"access"),", \u2026)")),(0,o.kt)("h2",{id:"release-501"},"Release 5.0.1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Speed up some commands")),(0,o.kt)("h3",{id:"runner-create-update"},(0,o.kt)("inlineCode",{parentName:"h3"},"runner create")," update"),(0,o.kt)("p",null,"Command ",(0,o.kt)("inlineCode",{parentName:"p"},"runner model create")," has been extended with a new optional flag named ",(0,o.kt)("inlineCode",{parentName:"p"},"--path"),"\nSee the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.0.x/runners/create"},"Runner")," page for details."),(0,o.kt)("h3",{id:"env-info-update"},(0,o.kt)("inlineCode",{parentName:"h3"},"env info")," update"),(0,o.kt)("p",null,"Command ",(0,o.kt)("inlineCode",{parentName:"p"},"env info")," now also dumps all containers that have been deployed in the environment.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.0.x/services/deployment"},"Deployment")," page for details."),(0,o.kt)("h3",{id:"new-whereami-command"},"new ",(0,o.kt)("inlineCode",{parentName:"h3"},"whereami")," command"),(0,o.kt)("p",null,"Command ",(0,o.kt)("inlineCode",{parentName:"p"},"whereami")," dumps the selected project (if it has been selected) and the selected env (if it has been selected).\nSo you know where you work anytime.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.0.x/services/deployment"},"Deployment")," page for details."),(0,o.kt)("h2",{id:"release-500"},"Release 5.0.0"),(0,o.kt)("h3",{id:"introducting-runner-management"},"Introducting Runner management"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.0.x/runners/create"},"Runner")," page for details."),(0,o.kt)("p",null,"On the CLI you can now get the list of runner models you can use to create a runner"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add command ",(0,o.kt)("inlineCode",{parentName:"li"},"runner model list")," - ")),(0,o.kt)("p",null,"Get the list of created runners, create dynamically a runner, delete a runner and get info of the runner"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add commands ",(0,o.kt)("inlineCode",{parentName:"li"},"runner list"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"runner create"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"runner delete")," & ",(0,o.kt)("inlineCode",{parentName:"li"},"runner info"))),(0,o.kt)("p",null,"Move a container to another runner dynamically"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add command ",(0,o.kt)("inlineCode",{parentName:"li"},"env runner set"))),(0,o.kt)("h3",{id:"deploy-command-extensions-and-limitations-removal"},(0,o.kt)("inlineCode",{parentName:"h3"},"deploy")," command extensions and limitations removal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can now assign each container to the runner you select. A runner can run several containers."),(0,o.kt)("li",{parentName:"ul"},"You can deploy multiple containers during one deploy"),(0,o.kt)("li",{parentName:"ul"},"Remove limit of deployment duration"),(0,o.kt)("li",{parentName:"ul"},"Remove limit on total size of a deployment"),(0,o.kt)("li",{parentName:"ul"},"Remove limit on individual file size"),(0,o.kt)("li",{parentName:"ul"},"Add support of UTF-8 file name"),(0,o.kt)("li",{parentName:"ul"},"Add support for long path and long file name"),(0,o.kt)("li",{parentName:"ul"},"Add support for file and directory permission"),(0,o.kt)("li",{parentName:"ul"},"Add support for symbolic and hard link")),(0,o.kt)("h3",{id:"build-logs-extension"},"Build logs extension"),(0,o.kt)("p",null,"Docker image build logs are now accessible"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Extend command ",(0,o.kt)("inlineCode",{parentName:"li"},"deployment logs")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"build")," level")),(0,o.kt)("h3",{id:"better-interactivity"},"Better interactivity"),(0,o.kt)("p",null,"To speedup the selection of interactive fields"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add filter during prompt (match entries that contains the filter)")),(0,o.kt)("h4",{id:"console-runners-view"},"Console 'Runners' view"),(0,o.kt)("p",null,"Introduction of a new view that shows all Runners of an organization/project and which containers\nare running on them."),(0,o.kt)("h4",{id:"console-metrics"},"Console Metrics"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/5.0.x/runners/metrics"},"Metrics")," are now provided for each Runner and for each container to give info to the developer."),(0,o.kt)("h4",{id:"speedup-project-and-env-page-loading-time"},"Speedup project and env page loading time"),(0,o.kt)("p",null,"Loading time has been improved for projet and env page."),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking changes"),(0,o.kt)("h3",{id:"release-503-1"},"Release 5.0.3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"None")),(0,o.kt)("h3",{id:"release-502-1"},"Release 5.0.2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In script using ",(0,o.kt)("inlineCode",{parentName:"li"},"runner")," commands, you may need to adapt them to add a ",(0,o.kt)("inlineCode",{parentName:"li"},"--path")," option")),(0,o.kt)("h3",{id:"release-501-1"},"Release 5.0.1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"None")),(0,o.kt)("h3",{id:"release-500-1"},"Release 5.0.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Change default container name for ",(0,o.kt)("inlineCode",{parentName:"li"},"docker")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"hosting"),". Before, the default name of the container was the name of the type of deployment (",(0,o.kt)("em",{parentName:"li"},"aka")," ",(0,o.kt)("inlineCode",{parentName:"li"},"docker")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"hosting"),"). Now this is the name of the parent directory. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/5.0.x/services/deployment"},"Deployment"),"."),(0,o.kt)("li",{parentName:"ul"},"The base url and runner configuration was linked on the type of the container (",(0,o.kt)("em",{parentName:"li"},"aka")," ",(0,o.kt)("inlineCode",{parentName:"li"},"docker"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"hosting"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"server")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"module"),"), now they are linked to the name of containers. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/5.0.x/services/deployment"},"Deployment")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/5.0.x/services/custom-domains"},"Custom domains"))),(0,o.kt)("h4",{id:"if-you-have-deployed-containers-with-a-previous-version-of-the-platform-and-want-to-redeploy"},"If you have deployed containers with a previous version of the platform and want to redeploy"),(0,o.kt)("p",null,"Although containers deployed with a previous version of the platform are still active, it is necessary to make a simple modification on your side of your deployment scripts in order to be able to redeploy these containers with the new version of the platform."),(0,o.kt)("h4",{id:"if-you-dont-have-a-warpconfigjs-configuration-file-in-the-directory-to-deploy-you-need-to-create-a-new-one-as-follows"},"If you don't have a ",(0,o.kt)("inlineCode",{parentName:"h4"},"warp.config.js")," configuration file in the directory to deploy, you need to create a new one as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are deploying a container of type 'docker' (dockerfile)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"module.exports = {\n  docker: 'docker'\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are deploying a 'hosting' type container (static assets)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"module.exports = {\n  hosting: 'hosting'\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are deploying a 'server' type container (nodejs server)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"module.exports = {\n  server: 'server'\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are deploying a container of type 'module' (nodejs module)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"module.exports = {\n  module: 'module'\n};\n")),(0,o.kt)("h4",{id:"if-you-already-have-a-warpconfigjs-configuration-file-in-the-directory-to-deploy-you-need-to-modify-it-as-follows"},"If you already have a ",(0,o.kt)("inlineCode",{parentName:"h4"},"warp.config.js")," configuration file in the directory to deploy, you need to modify it as follows."),(0,o.kt)("p",null,"If you specified the deployment type (",(0,o.kt)("inlineCode",{parentName:"p"},'docker: "xxx"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'hosting: "xxx"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'server: "xxx"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'module: "xxx"'),"), modify the line using the type as an attribute (",(0,o.kt)("inlineCode",{parentName:"p"},'docker: "docker"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'hosting: "hosting"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'server: "server"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'module: "module"'),").\nIf you did not specify the service type, add it as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are deploying a container of type 'docker' (dockerfile)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"module.exports = {\n  docker: 'docker'\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are deploying a 'hosting' type container (static assets)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"module.exports = {\n  hosting: 'hosting'\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are deploying a 'server' type container (nodejs server)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"module.exports = {\n  server: 'server'\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are deploying a container of type 'module' (nodejs module)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"module.exports = {\n  module: 'module'\n};\n")),(0,o.kt)("h4",{id:"if-you-allocated-runners-with-a-previous-version"},"If you allocated runners with a previous version"),(0,o.kt)("p",null,"In case you have allocated runners with a previous version of the plateform, you will see them in the 'Runners' page of the console."),(0,o.kt)("p",null,"Nevertheless, these runners can only be used in the environment where you assigned them, so you cannot deploy another container on it\nif it is not part of the same environment."),(0,o.kt)("p",null,"If you want to have one runner running multiple containers of your organization, or project, you have to ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.0.x/runners/create"},"create a new runner"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.0.x/services/move"},"move the containers")," running on older runners to it, and ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.0.x/runners/delete"},"delete the odler runner"),"."))}m.isMDXComponent=!0}}]);