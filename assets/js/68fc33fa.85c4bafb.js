"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||c;return n?o.createElement(k,i(i({ref:t},p),{},{components:n})):o.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const c={id:"equinix",title:"Equinix"},i=void 0,a={unversionedId:"csp/equinix",id:"version-5.0.x/csp/equinix",title:"Equinix",description:"Connect your account",source:"@site/versioned_docs/version-5.0.x/csp/equinix.md",sourceDirName:"csp",slug:"/csp/equinix",permalink:"/docs/5.0.x/csp/equinix",draft:!1,tags:[],version:"5.0.x",frontMatter:{id:"equinix",title:"Equinix"},sidebar:"mainSidebar",previous:{title:"Ionos",permalink:"/docs/5.0.x/csp/ionos"},next:{title:"Outscale",permalink:"/docs/5.0.x/csp/outscale"}},s={},l=[{value:"Connect your account",id:"connect-your-account",level:2},{value:"Connect to your Equinix console",id:"connect-to-your-equinix-console",level:3},{value:"Get <strong>projectId</strong> and <strong>token</strong>",id:"get-projectid-and-token",level:3},{value:"Create the connector",id:"create-the-connector",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"connect-your-account"},"Connect your account"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"After the connection of your Equinix account, ScaleDynamics will create and manage resources in your account. You should not modify, create, or delete these resources to avoid non deterministic behaviors of the ScaleDynamics platform. To interact with ScaleDynamics, please use only our SDK command lines or our console (",(0,r.kt)("a",{parentName:"p",href:"http://console.scaledynamics.com"},"http://console.scaledynamics.com"),").")),(0,r.kt)("p",null,"To connect an Equinix account, you need to gather several information on your side."),(0,r.kt)("p",null,"What you need to get:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("strong",{parentName:"li"},"projectId")," and a ",(0,r.kt)("strong",{parentName:"li"},"token")," to give ScaleDynamics authorizations to manage that project.")),(0,r.kt)("h3",{id:"connect-to-your-equinix-console"},"Connect to your Equinix console"),(0,r.kt)("p",null,"First, connect to ",(0,r.kt)("a",{parentName:"p",href:"https://console.equinix.com/"},"Equinix console")," using your credentials."),(0,r.kt)("h3",{id:"get-projectid-and-token"},"Get ",(0,r.kt)("strong",{parentName:"h3"},"projectId")," and ",(0,r.kt)("strong",{parentName:"h3"},"token")),(0,r.kt)("p",null,"Let's create a project to get its ",(0,r.kt)("strong",{parentName:"p"},"projectId")," and create a ",(0,r.kt)("strong",{parentName:"p"},"token")," to manage that project."),(0,r.kt)("p",null,"First, use the dropdown at the top left, to select the organization you want to create the project."),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{src:"/img/docs/csp/equinix.org.png",width:"250"})),(0,r.kt)("p",null,"Then on the 'project' tab, click on 'Add new' project button."),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{src:"/img/docs/csp/equinix.addnew.png",width:"700"})),(0,r.kt)("p",null,"Provides a name, for example 'ScaleDynamics' and create the project."),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{src:"/img/docs/csp/equinix.addproject.png",width:"400"})),(0,r.kt)("p",null,"After the project creation, on the project view, click on 'project settings' of the side bar. On the 'General' panel you'll find the ",(0,r.kt)("strong",{parentName:"p"},"projectId")," to use."),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{src:"/img/docs/csp/equinix.project.png",width:"700"})),(0,r.kt)("p",null,"Then, goes on the API KEY tab, click on the 'Add new key' button and create a new API key with 'Read/Write' permissions. For example, let's create the API key named 'ScaleDynamics CaaS'."),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{src:"/img/docs/csp/equinix.addapi.png",width:"450"})),(0,r.kt)("p",null,"After creation, click on the 'Copy' button to copy the API key token to use it as ",(0,r.kt)("strong",{parentName:"p"},"token")),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{src:"/img/docs/csp/equinix.apikey.png",width:"700"})),(0,r.kt)("h3",{id:"create-the-connector"},"Create the connector"),(0,r.kt)("p",null,"On the console, select the 'cloud connectors' tab, then click on the '+ Cloud connector'.\nIf the cloud provider is not in your subscription, you'll be invited to subscribe it in your plan."),(0,r.kt)("p",null,"Then, use ",(0,r.kt)("strong",{parentName:"p"},"projectId")," and ",(0,r.kt)("strong",{parentName:"p"},"token"),"  in the form."))}d.isMDXComponent=!0}}]);