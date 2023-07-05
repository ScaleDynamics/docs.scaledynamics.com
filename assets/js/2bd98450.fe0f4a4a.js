"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"connectors",title:"Connectors"},c=void 0,i={unversionedId:"csp/connectors",id:"version-5.1.x/csp/connectors",title:"Connectors",description:"ScaleDynamics supports the management of several Cloud Service Providers(CSP).",source:"@site/versioned_docs/version-5.1.x/csp/connectors.md",sourceDirName:"csp",slug:"/csp/connectors",permalink:"/docs/5.1.x/csp/connectors",draft:!1,tags:[],version:"5.1.x",frontMatter:{id:"connectors",title:"Connectors"},sidebar:"mainSidebar",previous:{title:"Deploy Static assets",permalink:"/docs/5.1.x/getting-started/hosting"},next:{title:"Ionos",permalink:"/docs/5.1.x/csp/ionos"}},s={},l=[{value:"Connectors documentation",id:"connectors-documentation",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ScaleDynamics supports the management of several Cloud Service Providers(CSP).\nIn order to use a CSP, for security reasons you will need to authorize it's usage in your organization\n(during the cloud connector connection steps, or in the 'subscription' organization tab)."),(0,o.kt)("p",null,"When enabled you can add cloud connectors that gives credentials to\nScaleDynamics CaaS to manage each cloud provider infrastructure."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"ScaleDynamics CaaS doesn't provide infrastrcutre resources, but manages your CSP accounts to\nallocate infrastructure resources. So you need to get a CSP account for all CSP you\nwant to use and connects it to our CaaS. It also means that you will receive one invoice\nper CSP, and one invoice from ScaleDynamics for container and infrastructure management.")),(0,o.kt)("h2",{id:"connectors-documentation"},"Connectors documentation"),(0,o.kt)("p",null,"Please have a look to the connector documentation for each cloud provider you want to\nconnect on ScaleDynamics CaaS:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/5.1.x/csp/ionos"},"Ionos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/5.1.x/csp/equinix"},"Equinix")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/5.1.x/csp/outscale"},"Outscale")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/5.1.x/csp/scaleway"},"Scaleway")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/5.1.x/csp/gcp"},"Google Cloud")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/5.1.x/csp/azure"},"Azure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/5.1.x/csp/aws"},"AWS"))))}d.isMDXComponent=!0}}]);