"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4660],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=o.createContext({}),p=function(e){var r=o.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return o.createElement(d.Provider,{value:r},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},v=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),v=n,m=c["".concat(d,".").concat(v)]||c[v]||s[v]||a;return t?o.createElement(m,i(i({ref:r},u),{},{components:t})):o.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=v;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}v.displayName="MDXCreateElement"},83737:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(87462),n=(t(67294),t(3905));const a={id:"providers",title:"Predefined provider models"},i="Predefined infrastructure models",l={unversionedId:"providers/providers",id:"version-1.1.x/providers/providers",title:"Predefined provider models",description:"We provide predefined provider models ready to use for public cloud providers infrastructure configurations on most of their availability regions.",source:"@site/oxygenit_versioned_docs/version-1.1.x/providers/providers.md",sourceDirName:"providers",slug:"/providers/",permalink:"/oxygenit/providers/",draft:!1,tags:[],version:"1.1.x",frontMatter:{id:"providers",title:"Predefined provider models"},sidebar:"mainSidebar",previous:{title:"Get your API key",permalink:"/oxygenit/api-get-key"},next:{title:"Amazon Web Services",permalink:"/oxygenit/providers/aws"}},d={},p=[{value:"Carbon computation data origin",id:"carbon-computation-data-origin",level:2},{value:"Detailed providers documentation",id:"detailed-providers-documentation",level:2},{value:"Amazon Web Services",id:"amazon-web-services",level:3},{value:"Azure",id:"azure",level:3},{value:"Google Cloud Platform",id:"google-cloud-platform",level:3},{value:"3DS Outscale",id:"3ds-outscale",level:3},{value:"Scaleway",id:"scaleway",level:3}],u={toc:p},c="wrapper";function s(e){let{components:r,...t}=e;return(0,n.kt)(c,(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"predefined-infrastructure-models"},"Predefined infrastructure models"),(0,n.kt)("p",null,"We provide ",(0,n.kt)("strong",{parentName:"p"},"predefined")," provider models ready to use for public cloud providers infrastructure configurations on most of their availability regions.\nThere is a total of ",(0,n.kt)("b",null,"801.414 predefined models"),"."),(0,n.kt)("p",null,"Currently we provide models for"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AWS"),(0,n.kt)("li",{parentName:"ul"},"Azure"),(0,n.kt)("li",{parentName:"ul"},"GCP"),(0,n.kt)("li",{parentName:"ul"},"3DS Outscale"),(0,n.kt)("li",{parentName:"ul"},"Scaleway")),(0,n.kt)("h2",{id:"carbon-computation-data-origin"},"Carbon computation data origin"),(0,n.kt)("p",null,"To do the carbon computation we rely on the PuE and the energy provider carbon factor per datacenter region."),(0,n.kt)("p",null,"We have 4 different data origins:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[PROVIDER]"," The provider gives us the PuE and the energy provider carbon factor,"),(0,n.kt)("li",{parentName:"ul"},"[PUBLIC]"," We found reliable public data either from the PuE and the energy provider carbon factor,"),(0,n.kt)("li",{parentName:"ul"},"[AVERAGE]"," We are taken average PuE and energy provider carbon factor of a country that have been published by a Governemental agency,"),(0,n.kt)("li",{parentName:"ul"},"[NONE]"," We don't have enough information to estimate PuE and energy provider carbon factor")),(0,n.kt)("p",null,"We provide for each provider and all regions the origin of these data on each detailed provider page."),(0,n.kt)("h2",{id:"detailed-providers-documentation"},"Detailed providers documentation"),(0,n.kt)("h3",{id:"amazon-web-services"},"Amazon Web Services"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/oxygenit/providers/aws"},"Amazon Web Services provider documentation")),(0,n.kt)("h3",{id:"azure"},"Azure"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/oxygenit/providers/azure"},"Azure provider documentation")),(0,n.kt)("h3",{id:"google-cloud-platform"},"Google Cloud Platform"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/oxygenit/providers/gcp"},"Google Cloud Platform provider documentation")),(0,n.kt)("h3",{id:"3ds-outscale"},"3DS Outscale"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/oxygenit/providers/outscale"},"3DS Outscale provider documentation")),(0,n.kt)("h3",{id:"scaleway"},"Scaleway"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/oxygenit/providers/scaleway"},"Scaleway provider documentation")))}s.isMDXComponent=!0}}]);