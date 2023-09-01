"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8853],{3905:(e,o,t)=>{t.d(o,{Zo:()=>u,kt:()=>m});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),s=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):c(c({},o),e)),t},u=function(e){var o=s(e.components);return n.createElement(l.Provider,{value:o},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},f=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return t?n.createElement(m,c(c({ref:o},u),{},{components:t})):n.createElement(m,c({ref:o},u))}));function m(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},13057:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const a={id:"connectors",title:"What is a connector"},c=void 0,i={unversionedId:"csp/connectors",id:"version-5.2/csp/connectors",title:"What is a connector",description:"Principle",source:"@site/versioned_docs/version-5.2/csp/connectors.md",sourceDirName:"csp",slug:"/csp/connectors",permalink:"/docs/5.2/csp/connectors",draft:!1,tags:[],version:"5.2",frontMatter:{id:"connectors",title:"What is a connector"},sidebar:"mainSidebar",previous:{title:"Deploy Static assets",permalink:"/docs/5.2/getting-started/hosting"},next:{title:"Ionos",permalink:"/docs/5.2/csp/ionos"}},l={},s=[{value:"Principle",id:"principle",level:2},{value:"Adding a connector",id:"adding-a-connector",level:2},{value:"For Ionos",id:"for-ionos",level:3},{value:"For Equinix",id:"for-equinix",level:3},{value:"For Outscale",id:"for-outscale",level:3},{value:"For Scaleway",id:"for-scaleway",level:3},{value:"For Google Cloud",id:"for-google-cloud",level:3},{value:"For Azure",id:"for-azure",level:3},{value:"For AWS",id:"for-aws",level:3},{value:"For Digital Ocean",id:"for-digital-ocean",level:3}],u={toc:s},p="wrapper";function d(e){let{components:o,...t}=e;return(0,r.kt)(p,(0,n.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"principle"},"Principle"),(0,r.kt)("p",null,"ScaleDynamics provides a managed Containers-as-a-Service on top of different\nCloud Service Providers (CSP) infrastructures."),(0,r.kt)("p",null,"A connector provides your CSP account credentials to ScaleDynamics. After a connector is added, ScaleDynamics will allocate\ninfrastructure resources in your CSP account using these credentials."),(0,r.kt)("p",null,"When you want to use a particular CSP infrastructure you need to add at least one connector for that CSP.\nOf course you can create as many connector you need if you want to access multiple CSP infrastructures."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"ScaleDynamics CaaS doesn't provide infrastructure resources, but manages your CSP accounts to\nallocate infrastructure resources. So you need to add at least a connnector for each CSP you\nwant to use. It also means that you will receive one invoice\nper CSP for the infrastructure cost, and one invoice from ScaleDynamics for container and infrastructure management.")),(0,r.kt)("h2",{id:"adding-a-connector"},"Adding a connector"),(0,r.kt)("p",null,"Please have a look on how to add a connector\nfor each cloud provider you want to\nconnect on ScaleDynamics CaaS:"),(0,r.kt)("h3",{id:"for-ionos"},"For Ionos"),(0,r.kt)("p",null,"Have a look to ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.2/csp/ionos"},"Ionos connector documentation"),"."),(0,r.kt)("h3",{id:"for-equinix"},"For Equinix"),(0,r.kt)("p",null,"Have a look to ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.2/csp/equinix"},"Equinix connector documentation"),"."),(0,r.kt)("h3",{id:"for-outscale"},"For Outscale"),(0,r.kt)("p",null,"Have a look to ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.2/csp/outscale"},"Outscale connector documentation"),"."),(0,r.kt)("h3",{id:"for-scaleway"},"For Scaleway"),(0,r.kt)("p",null,"Have a look to ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.2/csp/scaleway"},"Scaleway connector documentation"),"."),(0,r.kt)("h3",{id:"for-google-cloud"},"For Google Cloud"),(0,r.kt)("p",null,"Have a look to ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.2/csp/gcp"},"Google Cloud connector documentation"),"."),(0,r.kt)("h3",{id:"for-azure"},"For Azure"),(0,r.kt)("p",null,"Have a look to ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.2/csp/azure"},"Azure connector documentation"),"."),(0,r.kt)("h3",{id:"for-aws"},"For AWS"),(0,r.kt)("p",null,"Have a look to ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.2/csp/aws"},"AWS connector documentation"),"."),(0,r.kt)("h3",{id:"for-digital-ocean"},"For Digital Ocean"),(0,r.kt)("p",null,"Have a look to ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.2/csp/do"},"Digital Ocean connector documentation"),"."))}d.isMDXComponent=!0}}]);