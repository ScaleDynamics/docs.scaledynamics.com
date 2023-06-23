"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||c;return n?o.createElement(y,a(a({ref:t},p),{},{components:n})):o.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<c;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const c={id:"outscale",title:"Outscale"},a=void 0,s={unversionedId:"csp/outscale",id:"csp/outscale",title:"Outscale",description:"Connect your account",source:"@site/docs/csp/outscale.md",sourceDirName:"csp",slug:"/csp/outscale",permalink:"/docs/next/csp/outscale",draft:!1,tags:[],version:"current",frontMatter:{id:"outscale",title:"Outscale"},sidebar:"mainSidebar",previous:{title:"Equinix",permalink:"/docs/next/csp/equinix"},next:{title:"Scaleway",permalink:"/docs/next/csp/scaleway"}},i={},l=[{value:"Connect your account",id:"connect-your-account",level:2},{value:"Connect to your Cockpit console",id:"connect-to-your-cockpit-console",level:3},{value:"Get <strong>region</strong>",id:"get-region",level:3},{value:"Get <strong>accessKey</strong> and <strong>secretKey</strong>",id:"get-accesskey-and-secretkey",level:3},{value:"Create the connector",id:"create-the-connector",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"connect-your-account"},"Connect your account"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"After the connection of your Outscale account, ScaleDynamics will create and manage resources in your account. You should not modify, create, or delete these resources to avoid non deterministic behaviors of the ScaleDynamics platform. To interact with ScaleDynamics, please use only our SDK command lines or our console (",(0,r.kt)("a",{parentName:"p",href:"http://console.scaledynamics.com"},"http://console.scaledynamics.com"),").")),(0,r.kt)("p",null,"To connect an outscale account, you need to gather several information on your side: an ",(0,r.kt)("strong",{parentName:"p"},"accessKey"),", a ",(0,r.kt)("strong",{parentName:"p"},"secretKey"),", and a ",(0,r.kt)("strong",{parentName:"p"},"region"),"."),(0,r.kt)("h3",{id:"connect-to-your-cockpit-console"},"Connect to your Cockpit console"),(0,r.kt)("p",null,"First, connect to ",(0,r.kt)("a",{parentName:"p",href:"https://cockpit-eu-west-2.outscale.com/"},"the cockpit console")," using your credentials."),(0,r.kt)("h3",{id:"get-region"},"Get ",(0,r.kt)("strong",{parentName:"h3"},"region")),(0,r.kt)("p",null,"As you may know, in outscale each cockpit is linked to a region. On the top bar is show the region name. You will need that ",(0,r.kt)("strong",{parentName:"p"},"region")," name\n(for example on the bar below, it is ",(0,r.kt)("em",{parentName:"p"},"eu-west-2"),")"),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{src:"/img/docs/csp/outscale.bar.png",width:"700"})),(0,r.kt)("h3",{id:"get-accesskey-and-secretkey"},"Get ",(0,r.kt)("strong",{parentName:"h3"},"accessKey")," and ",(0,r.kt)("strong",{parentName:"h3"},"secretKey")),(0,r.kt)("p",null,"Next step is to create an ",(0,r.kt)("strong",{parentName:"p"},"accessKey")," anda  ",(0,r.kt)("strong",{parentName:"p"},"secretKey"),"."),(0,r.kt)("p",null,"On the top left, select the dropdown and click on 'Users and Policies Management'"),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{src:"/img/docs/csp/outscale.drop.png",width:"300"})),(0,r.kt)("p",null,"On the Users and policies panel, select one user, click on '+ CREATE AK' button, and when a confirmation panel opens, click on 'GENERATE' button."),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{src:"/img/docs/csp/outscale.users.png",width:"700"})),(0,r.kt)("p",null,"After Access key creation, you will find the ",(0,r.kt)("strong",{parentName:"p"},"accessKey")," by viewing user details. "),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{src:"/img/docs/csp/outscale.userdetail.png",width:"700"})),(0,r.kt)("p",null,"A file has also be automatically downloaded, and when you open it, you'll get the ",(0,r.kt)("strong",{parentName:"p"},"secretKey"),"."),(0,r.kt)("h3",{id:"create-the-connector"},"Create the connector"),(0,r.kt)("p",null,"On the ScaleDynamics console, select the 'cloud connectors' tab, then click on the '+ Cloud connector'.\nSelect Outscale. If it is the first time you add a Outscale connector, for security reasons the owner will\nbe invited to enable Outscale provider cloud for the organzation. "),(0,r.kt)("p",null,"Then, give a name and an optional description to your connector  "),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{src:"/img/docs/csp/scaledynamics.connector.name.png",width:"400"})),(0,r.kt)("p",null,"At last, fill ",(0,r.kt)("strong",{parentName:"p"},"accessKey"),", ",(0,r.kt)("strong",{parentName:"p"},"secretKey")," and select the ",(0,r.kt)("strong",{parentName:"p"},"region"),". You can set an optional peremption date. Then click on 'Create' button."),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{src:"/img/docs/csp/outscale.connector.create.png",width:"400"})))}d.isMDXComponent=!0}}]);