"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2971],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4063:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={id:"caas_overview",title:"Overview",slug:"/"},i=void 0,c={unversionedId:"caas/caas_overview",id:"version-5.0.0/caas/caas_overview",title:"Overview",description:"ScaleDynamics is a Containers-as-a-Service (CaaS) that allows software developers",source:"@site/versioned_docs/version-5.0.0/caas/caas_overview.mdx",sourceDirName:"caas",slug:"/",permalink:"/docs/5.0.0/",draft:!1,tags:[],version:"5.0.0",frontMatter:{id:"caas_overview",title:"Overview",slug:"/"},sidebar:"mainSidebar",next:{title:"Getting Started",permalink:"/docs/5.0.0/getting-started/intro"}},l={},s=[{value:"Runners to run containers",id:"runners-to-run-containers",level:2}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ScaleDynamics is a Containers-as-a-Service (CaaS) that allows software developers\nand IT departments to upload, organize, run, scale, and manage containers by using\ncontainer-based virtualization on top of several different kind of infrastructures\n(public clouds, on-premise). Combined with\nour unique feature to move containers dynamically across different infrastructure\nand the ability to provision and deploy in the same way, and monitor at one place,\nScaleDynamics provides multi-cloud/hybrid workflow management a true reality."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"New to CaaS ? Have a look to ",(0,a.kt)("a",{parentName:"p",href:"/blog/what-is-a-caas"},"What is a CaaS")," to\nknow more")),(0,a.kt)("p",null,"Unlike other CaaS, ScaleDynamics platform works as a SaaS and\ndoes not require infrastructure expertise, it is 100% managed.\nAny developer can use our CaaS to get maximum benefits of containerized architecture."),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/docs/caas.png",width:"500"}),(0,a.kt)("p",null,"ScaleDynamics CaaS")),(0,a.kt)("h2",{id:"runners-to-run-containers"},"Runners to run containers"),(0,a.kt)("p",null,"On our platform a ",(0,a.kt)("i",null,"Runner")," represents a cloud resource to run containers.\nConcretly a runner is a public cloud instance, an on-premise VM or a bare metal server.\nEach runner is identified by a name that you define.\nYou will use that name to indicate on which runner to deploy or move a container."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"More details on how to ",(0,a.kt)("a",{parentName:"p",href:"runners/create"},"create a runner"))),(0,a.kt)("p",null,"All is dynamic and on demand, you can dynamically create or delete a runner, deploy a container to a runner or\nmove a container to another runner on demand."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"More details on ",(0,a.kt)("a",{parentName:"p",href:"containers/deployment"},"deployment"))))}d.isMDXComponent=!0}}]);