"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||c;return n?o.createElement(k,r(r({ref:t},p),{},{components:n})):o.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,r[1]=i;for(var s=2;s<c;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const c={id:"do",title:"Digital ocean"},r=void 0,i={unversionedId:"csp/do",id:"csp/do",title:"Digital ocean",description:"Connect your account",source:"@site/docs/csp/do.md",sourceDirName:"csp",slug:"/csp/do",permalink:"/docs/next/csp/do",draft:!1,tags:[],version:"current",frontMatter:{id:"do",title:"Digital ocean"},sidebar:"mainSidebar",previous:{title:"AWS",permalink:"/docs/next/csp/aws"},next:{title:"Create a Runner",permalink:"/docs/next/runners/create"}},l={},s=[{value:"Connect your account",id:"connect-your-account",level:2},{value:"Connect to Digital Ocean console",id:"connect-to-digital-ocean-console",level:3},{value:"Optionnaly - Create a new team and a new project",id:"optionnaly---create-a-new-team-and-a-new-project",level:3},{value:"Create a new team",id:"create-a-new-team",level:4},{value:"Create a new project",id:"create-a-new-project",level:4},{value:"Create a token",id:"create-a-token",level:3},{value:"Create the connector",id:"create-the-connector",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"connect-your-account"},"Connect your account"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"After the connection of your Digital Ocean account, ScaleDynamics will create and manage resources in your account. You should not modify, create, or delete these resources to avoid non deterministic behaviors of the ScaleDynamics platform. To interact with ScaleDynamics, please use only our SDK command lines or our console (",(0,a.kt)("a",{parentName:"p",href:"http://console.scaledynamics.com"},"http://console.scaledynamics.com"),").")),(0,a.kt)("p",null,"To connect a Digital Ocean account, you need to get a ",(0,a.kt)("strong",{parentName:"p"},"token")," for a team/project."),(0,a.kt)("h3",{id:"connect-to-digital-ocean-console"},"Connect to Digital Ocean console"),(0,a.kt)("p",null,"First, connect to ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.digitalocean.com/login/"},"Digital Ocean console")," using your credentials."),(0,a.kt)("h3",{id:"optionnaly---create-a-new-team-and-a-new-project"},"Optionnaly - Create a new team and a new project"),(0,a.kt)("p",null,"To isolate the access rights of ScaleDynamics, we recommand to create a new team,\nand a new project that we will use to allocate infrastructure resources. You can also\nuse an exisiting team/project if you want, and do the ",(0,a.kt)("a",{parentName:"p",href:"#create-a-token"},"Create a token")," step."),(0,a.kt)("h4",{id:"create-a-new-team"},"Create a new team"),(0,a.kt)("p",null,"To create a new team, click on the top right user icon and click on 'Create a team'"),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/docs/csp/do.team.select.png",width:"200"})),(0,a.kt)("p",null,"Then, you'll have three steps to do. On the first one, you have to choose a team name.\nEnter ",(0,a.kt)("inlineCode",{parentName:"p"},"scaledynamics-team"),"then click on continue."),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/docs/csp/do.team.create.png",width:"300"})),(0,a.kt)("p",null,"On the next panel, you'll have to add a payment method.\nThen, on the 'Invite Members', click on 'Skip and Go to team'"),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/docs/csp/do.team.skip.png",width:"500"})),(0,a.kt)("h4",{id:"create-a-new-project"},"Create a new project"),(0,a.kt)("p",null,"On the team panel, click on the left sidebar, click on '+ New Project'.\nOn the project creation dialog, use ",(0,a.kt)("inlineCode",{parentName:"p"},"scaledynamics-caas")," as project name.\nEnter other infos and click on 'Create Project'"),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/docs/csp/do.project.create.png",width:"300"})),(0,a.kt)("h3",{id:"create-a-token"},"Create a token"),(0,a.kt)("p",null,"The next step is to create a ",(0,a.kt)("strong",{parentName:"p"},"token"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you skipped the previous steps creating a new team and a new project, please select the team/project you want\nScaledynamics CaaS to use to allocate infrastructure resources.")),(0,a.kt)("p",null,"On the side bar in the selected project, click on 'API' button."),(0,a.kt)("p",null,"On the API panel, click on 'Token', 'Generate New Token'."),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/docs/csp/do.api.png",width:"400"})),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"scaledynamics-token"),"as name, set expiration to 'no expiry', and check 'Write' optional scope."),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/docs/csp/do.new.token.png",width:"400"})),(0,a.kt)("p",null,"On the next token panel, copy the newly created token you will use as the ",(0,a.kt)("strong",{parentName:"p"},"token")," for the connector."),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/docs/csp/do.token.png",width:"400"})),(0,a.kt)("h3",{id:"create-the-connector"},"Create the connector"),(0,a.kt)("p",null,"On the ScaleDynamics console, select the 'cloud connectors' tab, then click on the '+ Cloud connector'.\nSelect Digital Ocean."),(0,a.kt)("p",null,"Then, give a name and an optional description to your connector"),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/docs/csp/scaledynamics.connector.name.png",width:"400"})),(0,a.kt)("p",null,"At last, fill ",(0,a.kt)("strong",{parentName:"p"},"token"),". You can set an optional peremption date. Then click on 'Create' button."),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/docs/csp/do.connector.create.png",width:"400"})))}u.isMDXComponent=!0}}]);