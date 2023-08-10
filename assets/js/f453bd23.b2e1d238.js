"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={id:"introduction",title:"Introduction"},i=void 0,c={unversionedId:"oxygenit/introduction",id:"version-5.3.x/oxygenit/introduction",title:"Introduction",description:"OxygenIT carbon calculator",source:"@site/versioned_docs/version-5.3.x/oxygenit/introduction.md",sourceDirName:"oxygenit",slug:"/oxygenit/introduction",permalink:"/docs/oxygenit/introduction",draft:!1,tags:[],version:"5.3.x",frontMatter:{id:"introduction",title:"Introduction"},sidebar:"mainSidebar",previous:{title:"Service states",permalink:"/docs/services/states"},next:{title:"API description",permalink:"/docs/oxygenit/api-description"}},s={},l=[{value:"OxygenIT carbon calculator",id:"oxygenit-carbon-calculator",level:2},{value:"Same method applied to any infrastructure",id:"same-method-applied-to-any-infrastructure",level:3},{value:"Available immediatly using our CaaS without integration",id:"available-immediatly-using-our-caas-without-integration",level:3},{value:"Available using APIs",id:"available-using-apis",level:3},{value:"Use cases",id:"use-cases",level:2},{value:"Energy, operational and embodied carbon footprint",id:"energy-operational-and-embodied-carbon-footprint",level:2},{value:"Infrastructure models",id:"infrastructure-models",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"oxygenit-carbon-calculator"},"OxygenIT carbon calculator"),(0,o.kt)("p",null,"As we believe that Cloud/IT Sustainability is important for IT users, we designed a new cloud carbon calculator that is able to compute the\noperational energy consumption and carbon footprint, and the embodied carbon footprint for different infrastructures\n(public cloud infrastructures, custom or on-premise ones). The computation takes care of the provider, the location of\nthe data center, its PuE and carbon energy provider emissions."),(0,o.kt)("h3",{id:"same-method-applied-to-any-infrastructure"},"Same method applied to any infrastructure"),(0,o.kt)("p",null,"Our OxygenIT carbon calculator computes in the same way independantly of the public cloud or infrastructure used. That means that computations\ncan be used to compare different infrastructure, which is an important criteria in order to\ndefine concrete carbon footprint reduction plans."),(0,o.kt)("h3",{id:"available-immediatly-using-our-caas-without-integration"},"Available immediatly using our CaaS without integration"),(0,o.kt)("p",null,"When using our platform, these metrics (Energy Consumption, Co2eq usage and Co2eq embodiment) are automatically provided for the infrastructure managed by\nScaleDynamics CaaS on each ",(0,o.kt)("strong",{parentName:"p"},"Runner")," view. With these metrics users can get the carbon footprint for their cloud workflows, per infrastructure component."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/carbon-metrics.png",width:"600"})),(0,o.kt)("h3",{id:"available-using-apis"},"Available using APIs"),(0,o.kt)("p",null,"As there is no such calculator available on the market today, we had lots of requests of companies and organizations interested to get access\nto our OxygenIT carbon calculator to use it on their legacy/owned infrastructures. This is why we designed and opened these APIs to give access to our carbon calculator in order to compute\nenergy and carbon footprint on their particular infrastructure and define action plans."),(0,o.kt)("h2",{id:"use-cases"},"Use cases"),(0,o.kt)("p",null,"Concretly organizations can use our carbon calculator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"to calculate their carbon footprint from execution data (load of each VM/server) and communication data,"),(0,o.kt)("li",{parentName:"ul"},"to calculate in real time their energy and carbon footprint emissions,"),(0,o.kt)("li",{parentName:"ul"},"to estimate what could be the reduction or the increase in term of carbon footprint by changing of region within the same cloud provider, or going to another cloud provider, or select the best on-premise infrastructure."),(0,o.kt)("li",{parentName:"ul"},"create use cases to show the problem to IT teams,"),(0,o.kt)("li",{parentName:"ul"},"... anything that could help manage sustainability and go to a Green IT!")),(0,o.kt)("h2",{id:"energy-operational-and-embodied-carbon-footprint"},"Energy, operational and embodied carbon footprint"),(0,o.kt)("p",null,"The carbon footprint corresponding to the equivalent emissions of a software load on a given infrastructure has two components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The operational footprint, i.e. the CO2 emissions linked to the (electrical) energy consumption of (the part of) the infrastructure actually allocated to run the sofware,"),(0,o.kt)("li",{parentName:"ul"},"The construction footprint (\u201cembodied\u201d), related to the construction and installation of (part of) the infrastructure.")),(0,o.kt)("p",null,"Our calculator computes the energy consumption and the operational footprint, and the construction footprint for an instance or a dedicated server.\nThe computation takes into account the availability zone, the instance or server architecture micro-architecture model and specifications (ram, disk...), the operational load and data communications."),(0,o.kt)("h2",{id:"infrastructure-models"},"Infrastructure models"),(0,o.kt)("p",null,"Our calculator relies on a modelization of the infrastructure in terms of micro-architecture, processor generation, type and volume of RAM and disk... and also on a modelization\nof the data center PuE and energy provider carbon factors."),(0,o.kt)("p",null,"We created some ",(0,o.kt)("strong",{parentName:"p"},"predefined")," models for some public cloud providers infrastructure configurations on most of their availability regions (total of 332.414 models) and we are using these models in our CaaS to compute carbon metrics.\nCurrently we provide models for AWS, GCP, Azure and Scaleway. We have strong relations and partnerships with Cloud Service Providers\nand we work with them in order to provide to our users a maximum of predefined public cloud models ready to use.\nThe calculator can also use ",(0,o.kt)("strong",{parentName:"p"},"raw")," models to modelize any kind of custom public infrastructures, private or on-premise ones."))}p.isMDXComponent=!0}}]);