"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,v=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"caas_glossary",title:"Glossary"},o=void 0,s={unversionedId:"caas/caas_glossary",id:"caas/caas_glossary",title:"Glossary",description:"This glossary is a reference for some terms that are used in the documentation.",source:"@site/docs/caas/caas_glossary.md",sourceDirName:"caas",slug:"/caas/caas_glossary",permalink:"/docs/next/caas/caas_glossary",draft:!1,tags:[],version:"current",frontMatter:{id:"caas_glossary",title:"Glossary"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/next/"},next:{title:"Console",permalink:"/docs/next/caas/caas_console"}},l={},c=[{value:"User",id:"user",level:2},{value:"Organization",id:"organization",level:2},{value:"Cloud connector",id:"cloud-connector",level:2},{value:"Runner",id:"runner",level:2},{value:"Project",id:"project",level:2},{value:"Environment",id:"environment",level:2},{value:"Container",id:"container",level:2},{value:"Service",id:"service",level:2},{value:"Inter service traffic (IST)",id:"inter-service-traffic-ist",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This glossary is a reference for some terms that are used in the documentation."),(0,a.kt)("h2",{id:"user"},"User"),(0,a.kt)("p",null,"A user is identified with a unique email address. A user can create or be a member of several organizations."),(0,a.kt)("h2",{id:"organization"},"Organization"),(0,a.kt)("p",null,"An organization represents a company, a cost center or a small team, that is used by several members.\nMembers can have different rights:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Owner")," - all rights"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Administrator")," - all rights except ability to manage billing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Members")," - all rights except ability to invite/revoke new users, and to manage billing")),(0,a.kt)("h2",{id:"cloud-connector"},"Cloud connector"),(0,a.kt)("p",null,"A cloud connector represents credentials that give rights to ScaleDynamics CaaS to allocate/deallocate infrastructure resources on a particular CSP."),(0,a.kt)("h2",{id:"runner"},"Runner"),(0,a.kt)("p",null,"A runner is a cloud/on-premise resource that can is used to run one or multiple services (container instances).\nUser can create or delete runners dynamically. A Runner is able to auto-scale according to its configuration."),(0,a.kt)("h2",{id:"project"},"Project"),(0,a.kt)("p",null,"A project identifies a set of containers to be deployed. Users can use project to logically represents a website, a web app, a microservice, an API...\nAn organization can have multiple projects."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"An environment defines the cloud execution environment to deploy and run a project."),(0,a.kt)("p",null,"User can define several environments for a project (i.e. development, test, staging, pre-production, production...)"),(0,a.kt)("h2",{id:"container"},"Container"),(0,a.kt)("p",null,"A container is a package of software that includes all dependencies: code, runtime, configuration, and system libraries so that it can run on any host system. After build, a container is a docker image."),(0,a.kt)("h2",{id:"service"},"Service"),(0,a.kt)("p",null,"A service corresponds of a running instance of a container. Each service has a name to be identified by the user.\nUser can run multiple services in an environment."),(0,a.kt)("h2",{id:"inter-service-traffic-ist"},"Inter service traffic (IST)"),(0,a.kt)("p",null,"Feature to enable secure TCP level communication between services."))}d.isMDXComponent=!0}}]);