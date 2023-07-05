"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6289],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>v});var r=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=r.createContext({}),l=function(e){var a=r.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=l(e.components);return r.createElement(c.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=t,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(v,i(i({ref:a},u),{},{components:n})):r.createElement(v,i({ref:a},u))}));function v(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s[d]="string"==typeof e?e:t,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3621:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),t=(n(67294),n(3905));const o={id:"caas_overview",title:"Overview",slug:"/"},i=void 0,s={unversionedId:"caas/caas_overview",id:"version-5.0.x/caas/caas_overview",title:"Overview",description:"Containers-as-a-Service",source:"@site/versioned_docs/version-5.0.x/caas/caas_overview.mdx",sourceDirName:"caas",slug:"/",permalink:"/docs/5.0.x/",draft:!1,tags:[],version:"5.0.x",frontMatter:{id:"caas_overview",title:"Overview",slug:"/"},sidebar:"mainSidebar",next:{title:"Glossary",permalink:"/docs/5.0.x/caas/caas_glossary"}},c={},l=[{value:"Containers-as-a-Service",id:"containers-as-a-service",level:2},{value:"Why use containers",id:"why-use-containers",level:2},{value:"An advanced CaaS",id:"an-advanced-caas",level:2},{value:"Try our CaaS",id:"try-our-caas",level:2}],u={toc:l},d="wrapper";function p(e){let{components:a,...n}=e;return(0,t.kt)(d,(0,r.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"containers-as-a-service"},"Containers-as-a-Service"),(0,t.kt)("p",null,"ScaleDynamics is an enterprise-grade Containers-as-a-Service (CaaS) platform operating\ncontainers at scale. It provides transparent container build, deployment\nand orchestration and use execution metrics to\nautomatically scale container services up and down."),(0,t.kt)("p",null,"ScaleDynamics is cloud agnostic and supported several cloud service providers (CSPs)\nincluding all the major cloud providers, and regional ones\n(see ",(0,t.kt)("a",{href:"https://www.scaledynamics.com",target:"_blank",rel:"noopener"},(0,t.kt)("a",{parentName:"p",href:"https://www.scaledynamics.com"},"https://www.scaledynamics.com")),"\nfor the list of CSP partners). ScaleDynamics is also available for on-premise management."),(0,t.kt)("p",null,"With ScaleDynamics, developers can make new containerized apps, apis, SaaS, microservices, deploy and host them\nin the cloud without learning how the underlying infrastructure,\ncontainer deployment, management and orchestration stack (like Kubernetes) works. With CaaS, there is no additional software to install or configure,\nall is managed from resource allocation, -, and container deployment, running and monitoring."),(0,t.kt)("div",{class:"text--center"},(0,t.kt)("img",{src:"/img/docs/ScaleDynamics-Containers-as-a-Service.png",width:"400"})),(0,t.kt)("h2",{id:"why-use-containers"},"Why use containers"),(0,t.kt)("p",null,"In the range of cloud computing services, CaaS is considered a kind of subset of Infrastructure-as-a-Service (IaaS)\nand is found between IaaS and Platform-as-a-Service (PaaS)."),(0,t.kt)("p",null,"The basic resources of CaaS are containers, which are a popular deployment mechanism for cloud-native apps and microservices. CaaS also increases portability between environments, whether hybrid or multi-cloud."),(0,t.kt)("p",null,"Using containers has many benefits:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Portability: Apps developed in containers have everything they need to run and can be deployed\nin multiple environments, including private and public clouds. Portability\nmeans flexibility because you can more easily move workloads between environments and providers."),(0,t.kt)("li",{parentName:"ul"},"Scalability: Containers have the ability to scale dynamically vertically or horizontally when needed,\nenabling to manage dynamic traffic variations, and also reduce costs dramatically."),(0,t.kt)("li",{parentName:"ul"},"Efficiency: Containers require fewer resources than virtual machines (VMs) since they don\u2019t need\na separate operating system. You can run several containers on a single server, enabling\ninfrastructure cost reduction."),(0,t.kt)("li",{parentName:"ul"},"Increased security: Containers are isolated from each other, which means if one container is compromised,\nothers won\u2019t be affected. Developer can incorporate specific security requirements and practices\ninto golden images to maintain security requirements even in different cloud environments and different footprints."),(0,t.kt)("li",{parentName:"ul"},"Speed: Because of their autonomy from the operating system, starting and stopping a container is a matter of seconds.\nThis also allows for faster development and operational speed, as well as a faster, smoother user experience.")),(0,t.kt)("h2",{id:"an-advanced-caas"},"An advanced CaaS"),(0,t.kt)("p",null,"Comparing to other CaaS, ScaleDynamics additional features:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Our catalog provides a large choice of cloud providers, regions, and configurations ready to use,"),(0,t.kt)("li",{parentName:"ul"},"Our CaaS supports GPU resources. You don't have to manage the setup of the underlying image, and focus on using the GPU from containers directly,"),(0,t.kt)("li",{parentName:"ul"},"Our built-in dynamics container workload move, provides developer to change any-time\nthe cloud provider resource to run its container services. Manually upscale, downscale, move to another resource, region and also cloud provider in one command line.\nMore that that, group or - our containers across resources to reduce to the minimum your infrastructure cost."),(0,t.kt)("li",{parentName:"ul"},"As we believe that Carbon impact control is important, we provide all our users a CO2eq estimation according to the resource/region/provider it uses.")),(0,t.kt)("h2",{id:"try-our-caas"},"Try our CaaS"),(0,t.kt)("p",null,"Discover and try our ScaleDynamics Containers-as-a-Service:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Deploy you first container service in less than 2' ",(0,t.kt)("a",{parentName:"li",href:"/docs/5.0.x/getting-started/docker"},"Get started")),(0,t.kt)("li",{parentName:"ul"},"Discover our CSP resource catalog and how to ",(0,t.kt)("a",{parentName:"li",href:"/docs/5.0.x/runners/create"},"manage runners")),(0,t.kt)("li",{parentName:"ul"},"Explore our features to manage your ",(0,t.kt)("a",{parentName:"li",href:"/docs/5.0.x/services/deployment"},"container services"))))}p.isMDXComponent=!0}}]);