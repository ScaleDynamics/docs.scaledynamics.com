"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>v});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),p=o,v=c["".concat(s,".").concat(p)]||c[p]||d[p]||r;return n?l.createElement(v,a(a({ref:t},m),{},{components:n})):l.createElement(v,a({ref:t},m))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<r;u++)a[u]=n[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},83634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var l=n(87462),o=(n(67294),n(3905));const r={id:"release",title:"Release Notes"},a=void 0,i={unversionedId:"release",id:"version-5.3.x/release",title:"Release Notes",description:"Below the list of updates.",source:"@site/versioned_docs/version-5.3.x/release.md",sourceDirName:".",slug:"/release",permalink:"/docs/release",draft:!1,tags:[],version:"5.3.x",frontMatter:{id:"release",title:"Release Notes"},sidebar:"mainSidebar",previous:{title:"API examples",permalink:"/docs/carbon/api-examples"}},s={},u=[{value:"New features",id:"new-features",level:2},{value:"Volumes",id:"volumes",level:3},{value:"<code>warp.config.js</code> configuration file",id:"warpconfigjs-configuration-file",level:4},{value:"Model volume commands",id:"model-volume-commands",level:4},{value:"Volume commands",id:"volume-commands",level:4},{value:"Environment commands",id:"environment-commands",level:4},{value:"Operations",id:"operations",level:3},{value:"Commands",id:"commands",level:4},{value:"Bug fixes",id:"bug-fixes",level:2},{value:"Release 5.3.0",id:"release-530",level:3}],m={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Below the list of updates. "),(0,o.kt)("h2",{id:"new-features"},"New features"),(0,o.kt)("h3",{id:"volumes"},"Volumes"),(0,o.kt)("h4",{id:"warpconfigjs-configuration-file"},(0,o.kt)("inlineCode",{parentName:"h4"},"warp.config.js")," configuration file"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a property ",(0,o.kt)("inlineCode",{parentName:"li"},"volumes")," to declare volume needs of a service")),(0,o.kt)("h4",{id:"model-volume-commands"},"Model volume commands"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"volume model list"),": display all volume models supported"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"volume model info"),": display descriptions and configuration variables of a specific volume model")),(0,o.kt)("h4",{id:"volume-commands"},"Volume commands"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"volume create"),": create a volume"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"volume list"),": list all available volumes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"volume info"),": get info on a specific volume"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"volume delete"),": remove a volume")),(0,o.kt)("h4",{id:"environment-commands"},"Environment commands"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"env volume link"),": link a service volume id to a volume"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"env volume unlink"),": unlink a service volume id")),(0,o.kt)("h3",{id:"operations"},"Operations"),(0,o.kt)("h4",{id:"commands"},"Commands"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"operation info"),": display status, dates and logs of a previous command")),(0,o.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,o.kt)("h3",{id:"release-530"},"Release 5.3.0"),(0,o.kt)("p",null,"None"))}d.isMDXComponent=!0}}]);