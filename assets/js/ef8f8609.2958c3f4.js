"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={id:"ionos",title:"Ionos"},i=void 0,c={unversionedId:"csp/ionos",id:"csp/ionos",title:"Ionos",description:"Connect your account",source:"@site/docs/csp/ionos.md",sourceDirName:"csp",slug:"/csp/ionos",permalink:"/docs/next/csp/ionos",draft:!1,tags:[],version:"current",frontMatter:{id:"ionos",title:"Ionos"},sidebar:"mainSidebar",previous:{title:"Supported CSPs",permalink:"/docs/next/csp/supported"},next:{title:"Create a Runner",permalink:"/docs/next/runners/create"}},s={},l=[{value:"Connect your account",id:"connect-your-account",level:2},{value:"Connect to your Data Center Designer",id:"connect-to-your-data-center-designer",level:3},{value:"Get <strong>email</strong> and <strong>password</strong> for a new administrator user",id:"get-email-and-password-for-a-new-administrator-user",level:3},{value:"Define a <strong>prefix</strong> for resource allocation",id:"define-a-prefix-for-resource-allocation",level:3},{value:"Send info to ScaleDynamics",id:"send-info-to-scaledynamics",level:3},{value:"De-connect your account",id:"de-connect-your-account",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"connect-your-account"},"Connect your account"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"After the connection of your Ionos account, ScaleDynamics will create and manage resources in your account. You should not modify, create, or delete these resources to avoid non deterministic behaviors of the ScaleDynamics platform. To interact with ScaleDynamics, please use only our SDK command lines or our console (",(0,o.kt)("a",{parentName:"p",href:"http://console.scaledynamics.com"},"http://console.scaledynamics.com"),").")),(0,o.kt)("p",null,"To connect a Ionos account, you need to gather several information on your side, and send them to our\nplatform to connect your account."),(0,o.kt)("p",null,"What you need to get:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an ",(0,o.kt)("strong",{parentName:"li"},"email")," and ",(0,o.kt)("strong",{parentName:"li"},"password")," for a new administrator user,"),(0,o.kt)("li",{parentName:"ul"},"define a data center ",(0,o.kt)("strong",{parentName:"li"},"prefix"))),(0,o.kt)("h3",{id:"connect-to-your-data-center-designer"},"Connect to your Data Center Designer"),(0,o.kt)("p",null,"First, connect to ",(0,o.kt)("a",{parentName:"p",href:"https://dcd.ionos.com/"},"DCD")," using your credentials."),(0,o.kt)("h3",{id:"get-email-and-password-for-a-new-administrator-user"},"Get ",(0,o.kt)("strong",{parentName:"h3"},"email")," and ",(0,o.kt)("strong",{parentName:"h3"},"password")," for a new administrator user"),(0,o.kt)("p",null,"To create a new Administrator user, click on '",(0,o.kt)("em",{parentName:"p"},"Management"),"' (on the top bar), then '",(0,o.kt)("em",{parentName:"p"},"Users and Groups"),".'"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/ionos.users.png",width:"400"})),(0,o.kt)("p",null,"Then, click on the '",(0,o.kt)("em",{parentName:"p"},"+ Create"),"' button."),(0,o.kt)("p",null,"On the user panel, enter a fictive First name and Last name (for example '",(0,o.kt)("em",{parentName:"p"},"CaaS"),"', and '",(0,o.kt)("em",{parentName:"p"},"ScaleDynamics"),"'), then choose an ",(0,o.kt)("strong",{parentName:"p"},"email")," and a ",(0,o.kt)("strong",{parentName:"p"},"password")," (remember it because we need it to connect the account). When done, click on '",(0,o.kt)("em",{parentName:"p"},"Create"),"' button."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/ionos.panel.png",width:"270"})),(0,o.kt)("p",null,"After the user panel is refreshed, click on the user you created. Click on the '",(0,o.kt)("em",{parentName:"p"},"Administrator"),"' box and 'on the '",(0,o.kt)("em",{parentName:"p"},"Save"),"' button."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/ionos.admin.png",width:"200"})),(0,o.kt)("h3",{id:"define-a-prefix-for-resource-allocation"},"Define a ",(0,o.kt)("strong",{parentName:"h3"},"prefix")," for resource allocation"),(0,o.kt)("p",null,"The next step is to define a ",(0,o.kt)("strong",{parentName:"p"},"prefix")," string that ScaleDynamics will use to allocate resources in your account. For example, all data center names created by ScaleDynamics will start with that prefix."),(0,o.kt)("h3",{id:"send-info-to-scaledynamics"},"Send info to ScaleDynamics"),(0,o.kt)("p",null,"To send info to ScaleDynamics and connect your Ionos account."),(0,o.kt)("p",null,"Be sure our SDK is installed - see ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/caas/caas_sdk"},"SDK installation")),(0,o.kt)("p",null,"Then use the commands below using"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$PREFIX")," for the ",(0,o.kt)("em",{parentName:"li"},"prefix")," you choosed,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$EMAIL")," for the user ",(0,o.kt)("em",{parentName:"li"},"email")," you created,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$PASSWORD")," for the user ",(0,o.kt)("em",{parentName:"li"},"password")," you created,")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"warp config override --path / /runner/provider/ionos-virtual-machine/platform/prefix $PREFIX\nwarp config override --path / /runner/provider/ionos-virtual-machine/platform/credential/email $EMAIL\nwarp config override --path / /runner/provider/ionos-virtual-machine/platform/credential/token $PASSWORD\n")),(0,o.kt)("p",null,"You're done!"),(0,o.kt)("h2",{id:"de-connect-your-account"},"De-connect your account"),(0,o.kt)("p",null,"To de-connect a Ionos account, be sure our SDK is installed - see ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/caas/caas_sdk"},"SDK installation")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"After Ionos account de-connection ScaleDynamics will not be able to create/delete any Ionos runners.\nSo, before de-connecting, move all container services to other CSP runners, and delete all ionos runners you created.")),(0,o.kt)("p",null,"Then use the commands below using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"warp config revoke --path / /runner/provider/ionos-virtual-machine/platform/prefix\nwarp config revoke --path / /runner/provider/ionos-virtual-machine/platform/credential/email\nwarp config revoke --path / /runner/provider/ionos-virtual-machine/platform/credential/password\n")),(0,o.kt)("p",null,"After that, you will not be able to use Ionos CSP to create/delete runner ressources."))}d.isMDXComponent=!0}}]);