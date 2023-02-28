"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4073],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),p=a,f=c["".concat(d,".").concat(p)]||c[p]||m[p]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={id:"release",title:"Release Notes"},l=void 0,i={unversionedId:"release",id:"release",title:"Release Notes",description:"Below the list of updates in this release. Please have a look to breaking changes with previous version of the plaform to know if you have something to do.",source:"@site/docs/release.md",sourceDirName:".",slug:"/release",permalink:"/docs/next/release",draft:!1,tags:[],version:"current",frontMatter:{id:"release",title:"Release Notes"}},d={},s=[{value:"Updates and new features on the CLI",id:"updates-and-new-features-on-the-cli",level:2},{value:"Overall",id:"overall",level:3},{value:"<code>runner info</code> and <code>runner list</code> commands",id:"runner-info-and-runner-list-commands",level:3},{value:"<code>env runner set</code> command",id:"env-runner-set-command",level:3},{value:"<code>env base-url add</code> command",id:"env-base-url-add-command",level:3},{value:"<code>deploy</code> command",id:"deploy-command",level:3},{value:"<code>deployment info</code> command",id:"deployment-info-command",level:3},{value:"Breaking changes",id:"breaking-changes",level:2}],u={toc:s},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Below the list of updates in this release. Please have a look to ",(0,a.kt)("a",{parentName:"p",href:"#breaking-changes"},"breaking changes")," with previous version of the plaform to know if you have something to do."),(0,a.kt)("h2",{id:"updates-and-new-features-on-the-cli"},"Updates and new features on the CLI"),(0,a.kt)("h3",{id:"overall"},"Overall"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Speed up some commands")),(0,a.kt)("h3",{id:"runner-info-and-runner-list-commands"},(0,a.kt)("inlineCode",{parentName:"h3"},"runner info")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"runner list")," commands"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Display the cloud provider account used by a runner")),(0,a.kt)("h3",{id:"env-runner-set-command"},(0,a.kt)("inlineCode",{parentName:"h3"},"env runner set")," command"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix issue that set a de-provisioned runner to an env in non interactive mode")),(0,a.kt)("h3",{id:"env-base-url-add-command"},(0,a.kt)("inlineCode",{parentName:"h3"},"env base-url add")," command"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove prompt in non interactive mode")),(0,a.kt)("h3",{id:"deploy-command"},(0,a.kt)("inlineCode",{parentName:"h3"},"deploy")," command"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uploading files is now more robust"),(0,a.kt)("li",{parentName:"ul"},"Remove spinner when uploading files in non interactive mode")),(0,a.kt)("h3",{id:"deployment-info-command"},(0,a.kt)("inlineCode",{parentName:"h3"},"deployment info")," command"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix logs levels info")),(0,a.kt)("h2",{id:"breaking-changes"},"Breaking changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"None")))}m.isMDXComponent=!0}}]);