"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3217],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9250:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={id:"installation",title:"SDK Installation"},s=void 0,u={unversionedId:"installation",id:"installation",title:"SDK Installation",description:"Our SDK provides you a CLI you can use to deploy your HTTP docker, Node.js server, Node.js module or static assets.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",tags:[],version:"current",frontMatter:{id:"installation",title:"SDK Installation"},sidebar:"mainSidebar",previous:{title:"Glossary",permalink:"/docs/glossary"},next:{title:"Docker server",permalink:"/docs/getting-started/docker"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Create your ScaleDynamics account",id:"create-your-scaledynamics-account",level:2},{value:"Deployment session",id:"deployment-session",level:2},{value:"Usage",id:"usage",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Our SDK provides you a CLI you can use to deploy your HTTP docker, Node.js server, Node.js module or static assets."),(0,a.kt)("p",null,"We designed it to run on desktop/laptop (windows, mac, linux) and be compatible with any IDE, bundler, static site generators, cloud-native web frameworks, CI/CDs, APIs, databases, so it's compatible with what you already use."),(0,a.kt)("p",null,"The SDK provides key features to deploy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With one command line, deploy static assets, one Node.js server or one Node.js module, or everything at once in one particular execution environment"),(0,a.kt)("li",{parentName:"ul"},"Create as many projects as needed to identify your web apps, SaaS or microservices"),(0,a.kt)("li",{parentName:"ul"},"Create the cloud execution environment needed for projects: development, test, staging, preproduction, production..."),(0,a.kt)("li",{parentName:"ul"},"Our CLI is script friendly to be integrated it into your own CI/CD workflow using role accounts")),(0,a.kt)("p",null,"Specifically for Managed modules our SDK provides everything to develop and emulate module execution:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JavaScript support"),(0,a.kt)("li",{parentName:"ul"},"TypeScript is fully supported: get typed, easing the communication with team members"),(0,a.kt)("li",{parentName:"ul"},"The local cloud emulation environment replicates faithfully the cloud environment of a Node.js server on laptop"),(0,a.kt)("li",{parentName:"ul"},"Integrated live-reload. Change any line of client or server code and see what happens in real-time: no rebuild, no redeploy, no restart"),(0,a.kt)("li",{parentName:"ul"},"Remote emulation to access remote resources, or develop for a specific device, install our emulator on a phone or on a remote server")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To use our SDK, you need Node.js installed on your computer with the version 12 or higher. Look ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"here")," to install it."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"The SDK can be installed locally (and you'll use ",(0,a.kt)("inlineCode",{parentName:"p"},"npx warp ...")," to run commands):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install warp\n")),(0,a.kt)("p",null,"or can be installed globally:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g warp\n")),(0,a.kt)("h2",{id:"create-your-scaledynamics-account"},"Create your ScaleDynamics account"),(0,a.kt)("p",null,"You need a ScaleDynamics account select resources and be able to deploy. You can ",(0,a.kt)("a",{href:"https://console.scaledynamics.com/auth/signup",target:"_blank",rel:"noopener"},"sign up here")," to create it. Subscription is FREE, no credit card required."),(0,a.kt)("h2",{id:"deployment-session"},"Deployment session"),(0,a.kt)("p",null,"Note that before deploying you need to enter a session. You have to use your ScaleDynamics credentials to be identified using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp login\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To get all other available commands you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"warp help"),". Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"api/cli"},"command line documentation")," for details and supported options for each one."))}m.isMDXComponent=!0}}]);