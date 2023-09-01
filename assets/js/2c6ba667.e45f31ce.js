"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1128],{3905:(t,a,e)=>{e.d(a,{Zo:()=>m,kt:()=>g});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function p(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=n.createContext({}),u=function(t){var a=n.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},m=function(t){var a=u(t.components);return n.createElement(d.Provider,{value:a},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),o=u(e),N=r,g=o["".concat(d,".").concat(N)]||o[N]||k[N]||l;return e?n.createElement(g,i(i({ref:a},m),{},{components:e})):n.createElement(g,i({ref:a},m))}));function g(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=N;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=t,p[o]="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=e[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}N.displayName="MDXCreateElement"},98942:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=e(87462),r=(e(67294),e(3905));const l={id:"azure",title:"Azure"},i=void 0,p={unversionedId:"providers/azure",id:"version-1.1.0/providers/azure",title:"Azure",description:"Instance types",source:"@site/oxygenit_versioned_docs/version-1.1.0/providers/azure.md",sourceDirName:"providers",slug:"/providers/azure",permalink:"/oxygenit/providers/azure",draft:!1,tags:[],version:"1.1.0",frontMatter:{id:"azure",title:"Azure"},sidebar:"mainSidebar",previous:{title:"Amazon Web Services",permalink:"/oxygenit/providers/aws"},next:{title:"Google cloud platform",permalink:"/oxygenit/providers/gcp"}},d={},u=[{value:"Instance types",id:"instance-types",level:2},{value:"GPU configuration",id:"gpu-configuration",level:2},{value:"Carbon computation data origin",id:"carbon-computation-data-origin",level:2}],m={toc:u},o="wrapper";function k(t){let{components:a,...e}=t;return(0,r.kt)(o,(0,n.Z)({},m,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"instance-types"},"Instance types"),(0,r.kt)("p",null,"Azure supports only fixed instance types."),(0,r.kt)("h2",{id:"gpu-configuration"},"GPU configuration"),(0,r.kt)("p",null,"There is need to specify a gpu configuration in the instance model, it is already included from the fixed instance type."),(0,r.kt)("h2",{id:"carbon-computation-data-origin"},"Carbon computation data origin"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To do the carbon computation we need to get the PuE and the energy provider carbon factor per datacenter region and we have 4 origins:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"[PROVIDER]"," The provider gives us the PuE and the energy provider carbon factor,"),(0,r.kt)("li",{parentName:"ul"},"[PUBLIC]"," We found reliable public data either from the PuE and the energy provider carbon factor,"),(0,r.kt)("li",{parentName:"ul"},"[AVERAGE]"," We are taking an average PuE and energy provider carbon factor of a country that have been published by a Governemental agency,"),(0,r.kt)("li",{parentName:"ul"},"[NONE]"," We don't have enough information to estimate PuE and energy provider carbon factor."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Region"),(0,r.kt)("th",{parentName:"tr",align:null},"Origin"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"southafrica"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"southafricanorth"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"southafricawest"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"australia"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"australiacentral"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"australiacentral2"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"australiaeast"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"australiasoutheast"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apeast"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apsoutheast"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"japaneast"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"japanwest"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"japan"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"korea"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"koreacentral"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"koreasouth"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asia"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asiapacific"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eastasia"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eastasiastage"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"southeastasia"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"southeastasiastage"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"india"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"centralindia"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jioindiacentral"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jioindiawest"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"southindia"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"westindia"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"northeurope"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"westeurope"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"francecentral"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"francesouth"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"france"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"swedencentral"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"switzerland"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"switzerlandnorth"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"switzerlandwest"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uk"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uksouth"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ukwest"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"germany"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"germanynorth"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"germanywestcentral"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"norway"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"norwayeast"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"norwaywest"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uae"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uaecentral"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uaenorth"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"canada"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"canadacentral"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"canadaeast"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CentralUS"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"centraluseuap"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"centralusstage"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EastUS"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eastusstage"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EastUS2"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eastus2euap"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eastus2stage"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EastUS3"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NorthCentralUs"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"northcentralusstage"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SouthCentralUS"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"southcentralusstage"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unitedstates"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unitedstateseuap"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WestCentralUS"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"USNorth"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WestUS"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"westusstage"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"westus2"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"westus2stage"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"westus3"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"brazil"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"brazilsouth"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"brazilsoutheast"),(0,r.kt)("td",{parentName:"tr",align:null},"PUBLIC")))))}k.isMDXComponent=!0}}]);