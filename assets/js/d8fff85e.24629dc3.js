"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"password-protection",title:"Password protection"},i=void 0,s={unversionedId:"services/password-protection",id:"version-5.0/services/password-protection",title:"Password protection",description:"By default, no authentication is required to access your container services.",source:"@site/versioned_docs/version-5.0/services/password-protection.md",sourceDirName:"services",slug:"/services/password-protection",permalink:"/docs/5.0/services/password-protection",draft:!1,tags:[],version:"5.0",frontMatter:{id:"password-protection",title:"Password protection"},sidebar:"mainSidebar",previous:{title:"Custom domains",permalink:"/docs/5.0/services/custom-domains"},next:{title:"Logs",permalink:"/docs/5.0/services/logs"}},c={},l=[{value:"Enabling authentication",id:"enabling-authentication",level:2},{value:"Disabling authentication",id:"disabling-authentication",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, no authentication is required to access your container services."),(0,o.kt)("p",null,"With our platform you can set a password protection to a particular environment\nto restrict access to authorized users only."),(0,o.kt)("h2",{id:"enabling-authentication"},"Enabling authentication"),(0,o.kt)("p",null,"To activate authentication on an environment, you have to add authorized users to an environment using the command below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env auth basic add [user] [password]\n")),(0,o.kt)("p",null,"During the command you will have to select a project and the environment you want to protect. If you don't have fill the command with parameters you will be invited to enter a user name and a password."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note that you can add authentication for multiple users, and that you have to deploy to enable the authentication.")),(0,o.kt)("p",null,"After deployment, when accessing your assets you'll be invite to enter credential."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/authentication.png",alt:"authentication",width:"500"})),(0,o.kt)("h2",{id:"disabling-authentication"},"Disabling authentication"),(0,o.kt)("p",null,"To disable authentication on an environment, you have to delete authorized users to an environment using the command below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env auth basic delete [user]\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note that the authentication is enabled if at least one user is assigned to authentication otherwise is it disabled and that you have to deploy to enable the change.")))}d.isMDXComponent=!0}}]);