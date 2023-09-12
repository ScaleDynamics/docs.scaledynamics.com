"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9435],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,v=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75271:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"caas_glossary",title:"Glossary"},o=void 0,s={unversionedId:"caas/caas_glossary",id:"version-5.3/caas/caas_glossary",title:"Glossary",description:"This glossary is a reference for some terms that are used in the documentation.",source:"@site/versioned_docs/version-5.3/caas/caas_glossary.md",sourceDirName:"caas",slug:"/caas/caas_glossary",permalink:"/docs/5.3/caas/caas_glossary",draft:!1,tags:[],version:"5.3",frontMatter:{id:"caas_glossary",title:"Glossary"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/5.3/"},next:{title:"Console",permalink:"/docs/5.3/caas/caas_console"}},l={},c=[{value:"User",id:"user",level:2},{value:"Organization",id:"organization",level:2},{value:"Cloud connector",id:"cloud-connector",level:2},{value:"Runner",id:"runner",level:2},{value:"Project",id:"project",level:2},{value:"Environment",id:"environment",level:2},{value:"Container",id:"container",level:2},{value:"Service",id:"service",level:2},{value:"Inter service traffic (IST)",id:"inter-service-traffic-ist",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This glossary is a reference for some terms that are used in the documentation."),(0,a.kt)("h2",{id:"user"},"User"),(0,a.kt)("p",null,"A user is identified with a unique email address. A user can create or be a member of several organizations."),(0,a.kt)("h2",{id:"organization"},"Organization"),(0,a.kt)("p",null,"An organization represents a company, a cost center or a small team, that is used by several members.\nMembers can have different rights:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Owner")," - all rights"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Administrator")," - all rights except ability to manage billing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Members")," - all rights except ability to invite/revoke new users, and to manage billing")),(0,a.kt)("h2",{id:"cloud-connector"},"Cloud connector"),(0,a.kt)("p",null,"A cloud connector represents credentials that give rights to ScaleDynamics CaaS to allocate/deallocate infrastructure resources on a particular CSP."),(0,a.kt)("h2",{id:"runner"},"Runner"),(0,a.kt)("p",null,"A runner is a cloud/on-premise resource that can is used to run one or multiple services (container instances).\nUser can create or delete runners dynamically. A Runner is able to auto-scale according to its configuration."),(0,a.kt)("h2",{id:"project"},"Project"),(0,a.kt)("p",null,"A project identifies a set of containers to be deployed. Users can use project to logically represents a website, a web app, a microservice, an API...\nAn organization can have multiple projects."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"An environment defines the cloud execution environment to deploy and run a project."),(0,a.kt)("p",null,"User can define several environments for a project (i.e. development, test, staging, pre-production, production...)"),(0,a.kt)("h2",{id:"container"},"Container"),(0,a.kt)("p",null,"A container is a package of software that includes all dependencies: code, runtime, configuration, and system libraries so that it can run on any host system. After build, a container is a docker image."),(0,a.kt)("h2",{id:"service"},"Service"),(0,a.kt)("p",null,"A service corresponds of a running instance of a container. Each service has a name to be identified by the user.\nUser can run multiple services in an environment."),(0,a.kt)("h2",{id:"inter-service-traffic-ist"},"Inter service traffic (IST)"),(0,a.kt)("p",null,"Feature to enable secure TCP level communication between services."))}d.isMDXComponent=!0}}]);