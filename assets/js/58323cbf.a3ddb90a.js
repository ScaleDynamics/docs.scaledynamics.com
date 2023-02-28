"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1753],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(y,l(l({ref:n},c),{},{components:t})):a.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6160:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const i={id:"add",title:"Add manually a runner"},l=void 0,o={unversionedId:"runners/add",id:"version-5.0.3/runners/add",title:"Add manually a runner",description:"Adding manualy a runner is a feature only available for Ultimate plans. Please contact sales@scaledynamics.com.",source:"@site/versioned_docs/version-5.0.3/runners/add.md",sourceDirName:"runners",slug:"/runners/add",permalink:"/docs/runners/add",draft:!1,tags:[],version:"5.0.3",frontMatter:{id:"add",title:"Add manually a runner"},sidebar:"mainSidebar",previous:{title:"Create a Runner",permalink:"/docs/runners/create"},next:{title:"View Runners",permalink:"/docs/runners/view"}},s={},u=[{value:"Prerequesites",id:"prerequesites",level:2},{value:"Script to download",id:"script-to-download",level:2},{value:"Using the script",id:"using-the-script",level:2},{value:"Example",id:"example",level:3},{value:"Exemples of instances",id:"exemples-of-instances",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Adding manualy a runner is a feature only available for Ultimate plans. Please contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:sales@scaledynamics.com"},"sales@scaledynamics.com"),".")),(0,r.kt)("p",null,"In the case you already have an instance, a VM or a bare server and you want to transform it as a Container machine\nthat can be running in a public cloud or on-premise, and you want\nto manage it with out CaaS, meaning our platform will take care of container service management."),(0,r.kt)("h2",{id:"prerequesites"},"Prerequesites"),(0,r.kt)("p",null,"The instance, on-premise VM or a bare metal server must"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"be running an amd64 linux based operating system, distribution Debian 10, Debian 11, or CentOs 7,"),(0,r.kt)("li",{parentName:"ul"},"have a public IP,"),(0,r.kt)("li",{parentName:"ul"},"have port 443 opened to everywhere all time,"),(0,r.kt)("li",{parentName:"ul"},"During the connection step, have port 22 opened for the remote Address: 35.233.111.9. Note that ssh root login is disabled and can only be used using a private key.")),(0,r.kt)("h2",{id:"script-to-download"},"Script to download"),(0,r.kt)("p",null,"We provide a ",(0,r.kt)("em",{parentName:"p"},"add-runner")," script to setup and provision the instance, VM or server to ScaleDynamics as a Runner.\nAfter being added, the new runner works as others, so you can deploy and run containers, access metrics..."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"add-runner")," script is available for some Linux distributions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Debian 10 - ",(0,r.kt)("a",{href:"https://gitlab.com/ScaleDynamics/support/-/snippets/2252182"},"Download")),(0,r.kt)("li",{parentName:"ul"},"Debian 11 - ",(0,r.kt)("a",{href:"https://gitlab.com/ScaleDynamics/support/-/snippets/2252182"},"Download")),(0,r.kt)("li",{parentName:"ul"},"CentOs 7 - ",(0,r.kt)("a",{href:"https://gitlab.com/ScaleDynamics/support/-/snippets/2250434"},"Download"))),(0,r.kt)("p",null,"If you're using another linux distribution, please contact us (",(0,r.kt)("a",{parentName:"p",href:"mailto:support@scaledynamics.com"},"support@scaledynamics.com"),")."),(0,r.kt)("h2",{id:"using-the-script"},"Using the script"),(0,r.kt)("p",null,"To use the script you need to have"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"api_key")," which is a specific API Key must be provided by ScaleDynamics please contact us (",(0,r.kt)("a",{parentName:"li",href:"mailto:support@scaledynamics.com"},"support@scaledynamics.com"),"),"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"org_id")," which indicates on which organisation to add the runner. You can get it on the organization view of the console, in settings tab."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"linux_model")," which indicates the type of linux based distribution. There are also provided by ScaleDynamics on request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"runner_name")," which indicates the name of the runner you want to create.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./add-runner.sh <api_key> <org_id> <linux_model> <runner_name>\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Below and example on how to add a Debian based linux runner with name ",(0,r.kt)("inlineCode",{parentName:"p"},"my-runner-01"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./add-runner.sh <connect_api_key> <org_id> sd-on-premise-debian my-runner-01\n")),(0,r.kt)("h2",{id:"exemples-of-instances"},"Exemples of instances"),(0,r.kt)("p",null,"Below some instance kind per cloud you can connect to ScaleDynamics (this list is not exhaustive.\nYou can connect any kind of public cloud, in-house, on-premise instance or bare metal servers that meet our ",(0,r.kt)("a",{parentName:"p",href:"#prerequesites"},"prerequesites"),")."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AWS EC2 instances"),(0,r.kt)("li",{parentName:"ul"},"GCP public cloud instances"),(0,r.kt)("li",{parentName:"ul"},"Azure public cloud instances"),(0,r.kt)("li",{parentName:"ul"},"Scaleway public cloud instances or bare metal servers"),(0,r.kt)("li",{parentName:"ul"},"OVH public cloud instances or bare metal servers"),(0,r.kt)("li",{parentName:"ul"},"Outscale public cloud instances"),(0,r.kt)("li",{parentName:"ul"},"Ionos public cloud instances"),(0,r.kt)("li",{parentName:"ul"},"Equinix bare metal servers")))}d.isMDXComponent=!0}}]);