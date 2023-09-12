"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5658],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>v});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=l.createContext({}),s=function(e){var n=l.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=s(e.components);return l.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(t),c=a,v=p["".concat(d,".").concat(c)]||p[c]||u[c]||i;return t?l.createElement(v,r(r({ref:n},m),{},{components:t})):l.createElement(v,r({ref:n},m))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[p]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<i;s++)r[s]=t[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},32073:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var l=t(87462),a=(t(67294),t(3905));const i={id:"release",title:"Release Notes"},r=void 0,o={unversionedId:"release",id:"version-5.3/release",title:"Release Notes",description:"Below the list of updates.",source:"@site/versioned_docs/version-5.3/release.md",sourceDirName:".",slug:"/release",permalink:"/docs/5.3/release",draft:!1,tags:[],version:"5.3",frontMatter:{id:"release",title:"Release Notes"},sidebar:"mainSidebar",previous:{title:"Service states",permalink:"/docs/5.3/services/states"}},d={},s=[{value:"New features",id:"new-features",level:2},{value:"Volumes",id:"volumes",level:3},{value:"<code>warp.config.js</code> configuration file",id:"warpconfigjs-configuration-file",level:4},{value:"Model volume commands",id:"model-volume-commands",level:4},{value:"Volume commands",id:"volume-commands",level:4},{value:"Environment commands",id:"environment-commands",level:4},{value:"Operations",id:"operations",level:3},{value:"Commands",id:"commands",level:4},{value:"Bug fixes",id:"bug-fixes",level:2},{value:"Release 5.3.3",id:"release-533",level:3},{value:"All commands",id:"all-commands",level:4},{value:"<code>warp deploy</code>",id:"warp-deploy",level:4},{value:"<code>warp volume info</code>",id:"warp-volume-info",level:4},{value:"<code>warp deployment</code>",id:"warp-deployment",level:4},{value:"Release 5.3.2",id:"release-532",level:3},{value:"<code>warp runner model list</code> &amp; <code>warp runner model info</code>",id:"warp-runner-model-list--warp-runner-model-info",level:4},{value:"Release 5.3.1",id:"release-531",level:3},{value:"Interactive comands",id:"interactive-comands",level:4},{value:"Interrupting",id:"interrupting",level:4},{value:"Help",id:"help",level:4},{value:"Release 5.3.0",id:"release-530",level:3}],m={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Below the list of updates. "),(0,a.kt)("h2",{id:"new-features"},"New features"),(0,a.kt)("h3",{id:"volumes"},"Volumes"),(0,a.kt)("h4",{id:"warpconfigjs-configuration-file"},(0,a.kt)("inlineCode",{parentName:"h4"},"warp.config.js")," configuration file"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a property ",(0,a.kt)("inlineCode",{parentName:"li"},"volumes")," to declare volume needs of a service")),(0,a.kt)("h4",{id:"model-volume-commands"},"Model volume commands"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"volume model list"),": display all volume models supported"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"volume model info"),": display descriptions and configuration variables of a specific volume model")),(0,a.kt)("h4",{id:"volume-commands"},"Volume commands"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"volume create"),": create a volume"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"volume list"),": list all available volumes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"volume info"),": get info on a specific volume"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"volume delete"),": remove a volume")),(0,a.kt)("h4",{id:"environment-commands"},"Environment commands"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"env volume link"),": link a service volume id to a volume"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"env volume unlink"),": unlink a service volume id")),(0,a.kt)("h3",{id:"operations"},"Operations"),(0,a.kt)("h4",{id:"commands"},"Commands"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"operation info"),": display status, dates and logs of a previous command")),(0,a.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,a.kt)("h3",{id:"release-533"},"Release 5.3.3"),(0,a.kt)("h4",{id:"all-commands"},"All commands"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix creation choice (",(0,a.kt)("em",{parentName:"li"},"aka")," ",(0,a.kt)("inlineCode",{parentName:"li"},"[New \u2026]"),") which was not always displayed as needed "),(0,a.kt)("li",{parentName:"ul"},"Fix issue with filter in interactive mode")),(0,a.kt)("h4",{id:"warp-deploy"},(0,a.kt)("inlineCode",{parentName:"h4"},"warp deploy")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix issue with Ctrl-C")),(0,a.kt)("h4",{id:"warp-volume-info"},(0,a.kt)("inlineCode",{parentName:"h4"},"warp volume info")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add more information")),(0,a.kt)("h4",{id:"warp-deployment"},(0,a.kt)("inlineCode",{parentName:"h4"},"warp deployment")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Filter out more deployments in interactive mode")),(0,a.kt)("h3",{id:"release-532"},"Release 5.3.2"),(0,a.kt)("h4",{id:"warp-runner-model-list--warp-runner-model-info"},(0,a.kt)("inlineCode",{parentName:"h4"},"warp runner model list")," & ",(0,a.kt)("inlineCode",{parentName:"h4"},"warp runner model info")),(0,a.kt)("p",null,"Fix display of models with GPU. Also, add more details on CPU."),(0,a.kt)("h3",{id:"release-531"},"Release 5.3.1"),(0,a.kt)("h4",{id:"interactive-comands"},"Interactive comands"),(0,a.kt)("p",null,"Fix filter when entering a space. Space act as an ",(0,a.kt)("em",{parentName:"p"},"and")," operator, that is ",(0,a.kt)("inlineCode",{parentName:"p"},"foo bar")," filter names with a ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," in it, but not necessary separated by a space."),(0,a.kt)("h4",{id:"interrupting"},"Interrupting"),(0,a.kt)("p",null,"Now, when interrupting a command with ",(0,a.kt)("em",{parentName:"p"},"Ctrl-C"),", an explicit message is displayed saying that the operation is still running in background. The operation id is also displayed to be able to see or wait the progression with ",(0,a.kt)("inlineCode",{parentName:"p"},"warp operation")," commands."),(0,a.kt)("h4",{id:"help"},"Help"),(0,a.kt)("p",null,"Fix helps with commands using ",(0,a.kt)("inlineCode",{parentName:"p"},"--")),(0,a.kt)("h3",{id:"release-530"},"Release 5.3.0"),(0,a.kt)("p",null,"None"))}u.isMDXComponent=!0}}]);