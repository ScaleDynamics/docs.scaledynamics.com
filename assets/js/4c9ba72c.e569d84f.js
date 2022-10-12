"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(y,s(s({ref:t},u),{},{components:n})):a.createElement(y,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={id:"caas_sdk",title:"SDK"},s=void 0,l={unversionedId:"caas/caas_sdk",id:"caas/caas_sdk",title:"SDK",description:"Our SDK provides you a CLI you can use to manage projects, environments, runners, and containers.",source:"@site/docs/caas/caas_sdk.md",sourceDirName:"caas",slug:"/caas/caas_sdk",permalink:"/docs/caas/caas_sdk",draft:!1,tags:[],version:"current",frontMatter:{id:"caas_sdk",title:"SDK"},sidebar:"mainSidebar",previous:{title:"Console",permalink:"/docs/caas/caas_console"},next:{title:"Glossary",permalink:"/docs/caas/caas_glossary"}},i={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Create your ScaleDynamics account",id:"create-your-scaledynamics-account",level:2},{value:"Developer session",id:"developer-session",level:2},{value:"Usage",id:"usage",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Our SDK provides you a CLI you can use to manage projects, environments, runners, and containers."),(0,r.kt)("p",null,"It is available on desktop/laptop (windows, mac, linux) and compatible with any IDE, bundler, static site generators, cloud-native web frameworks, CI/CDs, APIs, databases, so it's compatible with what you already use."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"To use our SDK, you need Node.js installed on your computer with the version 12 or higher. Look ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"here")," to install it."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The SDK can be installed locally (and you'll use ",(0,r.kt)("inlineCode",{parentName:"p"},"npx warp ...")," to run commands):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install warp\n")),(0,r.kt)("p",null,"or can be installed globally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g warp\n")),(0,r.kt)("h2",{id:"create-your-scaledynamics-account"},"Create your ScaleDynamics account"),(0,r.kt)("p",null,"You need a ScaleDynamics account to be able to login. You can ",(0,r.kt)("a",{href:"https://console.scaledynamics.com/auth/signup",target:"_blank",rel:"noopener"},"sign up here")," to create it. Subscription is FREE, no credit card required."),(0,r.kt)("h2",{id:"developer-session"},"Developer session"),(0,r.kt)("p",null,"To enter a developer session. You have to use your ScaleDynamics credentials to be identified using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp login\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To get all other available commands you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"warp help"),". Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/sdk/cli"},"command line documentation")," for details and supported options for each one."))}p.isMDXComponent=!0}}]);