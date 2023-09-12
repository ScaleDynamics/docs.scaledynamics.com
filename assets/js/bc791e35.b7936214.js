"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"caas_sdk",title:"SDK installation"},i=void 0,l={unversionedId:"caas/caas_sdk",id:"version-5.4/caas/caas_sdk",title:"SDK installation",description:"Our SDK provides you a CLI you can use to manage projects, environments, runners, and containers.",source:"@site/versioned_docs/version-5.4/caas/caas_sdk.md",sourceDirName:"caas",slug:"/caas/caas_sdk",permalink:"/docs/caas/caas_sdk",draft:!1,tags:[],version:"5.4",frontMatter:{id:"caas_sdk",title:"SDK installation"},sidebar:"mainSidebar",previous:{title:"Console",permalink:"/docs/caas/caas_console"},next:{title:"SDK command line",permalink:"/docs/sdk/cli"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Global installation",id:"global-installation",level:3},{value:"Per user installation",id:"per-user-installation",level:3},{value:"Per <em>node.js</em> installation",id:"per-nodejs-installation",level:3},{value:"Without installation",id:"without-installation",level:3},{value:"Get a ScaleDynamics organization",id:"get-a-scaledynamics-organization",level:2},{value:"Developer session",id:"developer-session",level:2},{value:"Usage",id:"usage",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Our SDK provides you a CLI you can use to manage projects, environments, runners, and containers."),(0,r.kt)("p",null,"It is available on desktop/laptop (windows, mac, linux) and compatible with any IDE, bundler, static site generators, cloud-native web frameworks, CI/CDs, APIs, databases, so it's compatible with what you already use."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"To use our SDK, you need Node.js installed on your computer with the version 12 or higher. Look ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"here")," to install it."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"global-installation"},"Global installation"),(0,r.kt)("p",null,"The preferred way to install the SDK is to install it globally for all users. After that you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"warp")," command as another terminal command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g warp\n")),(0,r.kt)("p",null,"This command may need to be launched with ",(0,r.kt)("em",{parentName:"p"},"root"),"  priviledged on ",(0,r.kt)("em",{parentName:"p"},"Linux")," system. In that case, use the command ",(0,r.kt)("inlineCode",{parentName:"p"},"su")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo"),"."),(0,r.kt)("h3",{id:"per-user-installation"},"Per user installation"),(0,r.kt)("p",null,"On ",(0,r.kt)("em",{parentName:"p"},"Linux")," or ",(0,r.kt)("em",{parentName:"p"},"Mac")," system, you can also install the SDK in your ",(0,r.kt)("em",{parentName:"p"},"home")," directory, without ",(0,r.kt)("em",{parentName:"p"},"root")," access, by using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --prefix=$HOME -g warp\n")),(0,r.kt)("p",null,"Warp will be installed in the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," inside your ",(0,r.kt)("em",{parentName:"p"},"home")," directory or any other directory set by the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--prefix"),". If not already done, you need to update your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," variable to access this directory in your terminal, or in any startup script (",(0,r.kt)("em",{parentName:"p"},"e.g.")," ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),") with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'export PATH="$HOME/bin:$PATH"\n')),(0,r.kt)("p",null,"See this ",(0,r.kt)("a",{parentName:"p",href:"https://opensource.com/article/17/6/set-path-linux"},"blog")," to know how to do that according to your shell."),(0,r.kt)("h3",{id:"per-nodejs-installation"},"Per ",(0,r.kt)("em",{parentName:"h3"},"node.js")," installation"),(0,r.kt)("p",null,"If you work on a ",(0,r.kt)("em",{parentName:"p"},"node.js")," project, another way is to install it locally in your working ",(0,r.kt)("em",{parentName:"p"},"node.js")," project directory. Then you'll use ",(0,r.kt)("inlineCode",{parentName:"p"},"npx warp ...")," to run commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install warp\n")),(0,r.kt)("h3",{id:"without-installation"},"Without installation"),(0,r.kt)("p",null,"At last you can use the SDK without installation using the ",(0,r.kt)("inlineCode",{parentName:"p"},"npx warp ...")," command."),(0,r.kt)("h2",{id:"get-a-scaledynamics-organization"},"Get a ScaleDynamics organization"),(0,r.kt)("p",null,"If you don't have one, you can signup an account and create an new organization (",(0,r.kt)("a",{href:"https://console.scaledynamics.com/auth/sign-up",target:"_blank",rel:"noopener"},"sign up here"),"), or start a one month free trial (",(0,r.kt)("a",{href:"https://console.scaledynamics.com/auth/trial",target:"_blank",rel:"noopener"},"trial here"),"), no credit card required."),(0,r.kt)("h2",{id:"developer-session"},"Developer session"),(0,r.kt)("p",null,"To enter a developer session. You have to use your ScaleDynamics credentials to be identified using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp login\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To get all other available commands you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"warp help"),". Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/sdk/cli"},"SDK command line documentation")," for details and supported options for each one."))}d.isMDXComponent=!0}}]);