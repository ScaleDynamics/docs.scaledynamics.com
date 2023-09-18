"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1452],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var c=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},o=Object.keys(e);for(c=0;c<o.length;c++)a=o[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)a=o[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=c.createContext({}),l=function(e){var t=c.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return c.createElement(i.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return c.createElement(c.Fragment,{},t)}},u=c.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||y[u]||o;return a?c.createElement(m,s(s({ref:t},p),{},{components:a})):c.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[d]="string"==typeof e?e:n,s[1]=r;for(var l=2;l<o;l++)s[l]=a[l];return c.createElement.apply(null,s)}return c.createElement.apply(null,a)}u.displayName="MDXCreateElement"},56359:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var c=a(87462),n=(a(67294),a(3905));const o={id:"scaleway",title:"Scaleway"},s=void 0,r={unversionedId:"csp/scaleway",id:"version-5.1/csp/scaleway",title:"Scaleway",description:"Connect your account",source:"@site/versioned_docs/version-5.1/csp/scaleway.md",sourceDirName:"csp",slug:"/csp/scaleway",permalink:"/docs/5.1/csp/scaleway",draft:!1,tags:[],version:"5.1",frontMatter:{id:"scaleway",title:"Scaleway"},sidebar:"mainSidebar",previous:{title:"Outscale",permalink:"/docs/5.1/csp/outscale"},next:{title:"Azure",permalink:"/docs/5.1/csp/azure"}},i={},l=[{value:"Connect your account",id:"connect-your-account",level:2},{value:"Connect to your Scaleway console",id:"connect-to-your-scaleway-console",level:3},{value:"Get a <strong>projectId</strong>",id:"get-a-projectid",level:3},{value:"Create a <strong>secretKey</strong> to give rights to ScaleDynamics CaaS",id:"create-a-secretkey-to-give-rights-to-scaledynamics-caas",level:3},{value:"Add a public ScaleDynamics SSH key",id:"add-a-public-scaledynamics-ssh-key",level:4},{value:"Get <strong>secretKey</strong> in IAM",id:"get-secretkey-in-iam",level:4},{value:"Create a &#39;scaledynamics-policy&#39; policy for the scaledynamics project",id:"create-a-scaledynamics-policy-policy-for-the-scaledynamics-project",level:5},{value:"Create a &#39;scaledynamics-caas&#39; application",id:"create-a-scaledynamics-caas-application",level:5},{value:"Create a &#39;scaledynamics-key&#39; API Key",id:"create-a-scaledynamics-key-api-key",level:5},{value:"Create the connector",id:"create-the-connector",level:3}],p={toc:l},d="wrapper";function y(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,c.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"connect-your-account"},"Connect your account"),(0,n.kt)("p",null,"To use our CaaS on Scaleway, you need to create a projet and provide rights to our CaaS. We will create infrastructure resources in that project.\nWe don't need a global access to your account, only to one project (which is good for security). So, you can configure other services like a managed database\nin your Scaleway account, we will not see them."),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"After the connection of your Scaleway account, ScaleDynamics will create and manage resources in one of your project of your account. You should not modify, create, or delete these resources to avoid non deterministic behaviors of the ScaleDynamics platform. To interact with ScaleDynamics, please use only our SDK command lines or our console (",(0,n.kt)("a",{parentName:"p",href:"http://console.scaledynamics.com"},"http://console.scaledynamics.com"),").")),(0,n.kt)("p",null,"To connect a Scaleway account, you need to gather several information on your side."),(0,n.kt)("p",null,"What you need to get:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("strong",{parentName:"li"},"projectId")," and a ",(0,n.kt)("strong",{parentName:"li"},"secretKey")," that provides access to that project management.")),(0,n.kt)("h3",{id:"connect-to-your-scaleway-console"},"Connect to your Scaleway console"),(0,n.kt)("p",null,"First, connect to ",(0,n.kt)("a",{parentName:"p",href:"https://console.scaleway.com/"},"Scaleway console")," using your credentials."),(0,n.kt)("h3",{id:"get-a-projectid"},"Get a ",(0,n.kt)("strong",{parentName:"h3"},"projectId")),(0,n.kt)("p",null,"First you have to create a project named 'scaledynamics' and get its ID (the ",(0,n.kt)("strong",{parentName:"p"},"projectId"),")."),(0,n.kt)("p",null,"On the top left dropdown click on '+ create project'"),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaleway.project.drop.png",width:"350"})),(0,n.kt)("p",null,"Then set project name to 'scaledynamics' and click on 'Create Project' button."),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaleway.project.create.png",width:"550"})),(0,n.kt)("p",null,"After the creation, go in the 'settings' tab and note the ",(0,n.kt)("strong",{parentName:"p"},"projectId")," we will need it to create a scaleway connector."),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaleway.project.id.png",width:"550"})),(0,n.kt)("h3",{id:"create-a-secretkey-to-give-rights-to-scaledynamics-caas"},"Create a ",(0,n.kt)("strong",{parentName:"h3"},"secretKey")," to give rights to ScaleDynamics CaaS"),(0,n.kt)("h4",{id:"add-a-public-scaledynamics-ssh-key"},"Add a public ScaleDynamics SSH key"),(0,n.kt)("p",null,"In the project panel, go in the 'SSH keys' tab."),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaleway.ssh.tab.png",width:"700"})),(0,n.kt)("p",null,"Then click on '+ Add a new SSH key and copy paste ScaleDynamics public ssh key below"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDNK3JQu8+sRvvYNmHQXBLPUv+FjXptk1VOzPzf143UDro4fd1XvIcm86t7UuY4rvocqlC7nTVgURTU/OwW2oFbUc2n+xDZlIHDdCUbQ8CYfB7m8s7bCzfDcF2pwtyFhkSPs4v4zUxVOfarQIDXklLv2DhghAoMMqetLPz0SselC0qlFcWzx6xA9yKNppl7MR/ynspBikjuEZ85Qy3z+ZsBOsMi/DT/88TLaIoWeIbCImZhjobTDi94bUfRBaOIG0u9tHr0PoXSKrNxY72g/5PyoO9feUi95UsY6iSF6i1Xni6Q40YaFL2+8nKa/6Wte+daDt5M71sjNJZhjs1uIydB starbase-prod@scaledynamics.com\n")),(0,n.kt)("p",null,"Add a required description, put 'scaledynamics' and click on 'Add SSH key'."),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaleway.ssh.add.png",width:"500"})),(0,n.kt)("h4",{id:"get-secretkey-in-iam"},"Get ",(0,n.kt)("strong",{parentName:"h4"},"secretKey")," in IAM"),(0,n.kt)("h5",{id:"create-a-scaledynamics-policy-policy-for-the-scaledynamics-project"},"Create a 'scaledynamics-policy' policy for the scaledynamics project"),(0,n.kt)("p",null,"Using the top right dropdown, select IAM"),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaleway.iam.select.png",width:"300"})),(0,n.kt)("p",null,"Select the 'Policies' tab and click on the '+' button to create a new policy."),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaleway.policies.tab.png",width:"700"})),(0,n.kt)("p",null,"In the panel, create a policy named 'scaledynamics-policy' and click on 'Add rules'."),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaleway.policies.rules.png",width:"600"})),(0,n.kt)("p",null,"Then, select 'Access to resources', choose 'scaledynamics' project, then click on 'Validate'"),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaleway.policies.resources.png",width:"600"})),(0,n.kt)("p",null,"Then, select 'AllProductsFullAccess' in permissions, and click on 'Validate'"),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaleway.policies.permissions.png",width:"600"})),(0,n.kt)("p",null,"Finalize the policy creation by clicking on the 'Create policy' button."),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaleway.policies.create.png",width:"500"})),(0,n.kt)("h5",{id:"create-a-scaledynamics-caas-application"},"Create a 'scaledynamics-caas' application"),(0,n.kt)("p",null,"Get back in IAM and select the 'Applications' tab and click on the '+' button to create a new application."),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaleway.app.tab.png",width:"700"})),(0,n.kt)("p",null,"In the panel, set application name to 'scaledynamics-caas', attach the 'scaledynamics-policy' and click on 'Create application'."),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaleway.app.create.png",width:"600"})),(0,n.kt)("h5",{id:"create-a-scaledynamics-key-api-key"},"Create a 'scaledynamics-key' API Key"),(0,n.kt)("p",null,"Get back in IAM and select the 'API Key' tab and click on the '+' button to create a new API key."),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaleway.api.tab.png",width:"700"})),(0,n.kt)("p",null,"Click on 'An application' and select 'scaledynamics-caas' application. Set the Description to 'scaledynamics-key', and click on 'Generate API key'"),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaleway.api.generate.png",width:"550"})),(0,n.kt)("p",null,"After creation, you'll see the key. Please note the 'Secret key' that we will use as the ",(0,n.kt)("strong",{parentName:"p"},"secretKey")," "),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaleway.api.show.png",width:"500"})),(0,n.kt)("h3",{id:"create-the-connector"},"Create the connector"),(0,n.kt)("p",null,"On the ScaleDynamics console, select the 'cloud connectors' tab, then click on the '+ Cloud connector'.\nSelect Scaleway. If it is the first time you add a Scaleway connector, for security reasons the owner will\nbe invited to enable Scaleway provider cloud for the organzation. "),(0,n.kt)("p",null,"Then, give a name and an optional description to your connector  "),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaledynamics.connector.name.png",width:"400"})),(0,n.kt)("p",null,"At last, fill ",(0,n.kt)("strong",{parentName:"p"},"projectId")," and the API Key ",(0,n.kt)("strong",{parentName:"p"},"secretKey"),". Set an optional peremption date and click on 'Create' button."),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("img",{src:"/img/docs/csp/scaleway.connector.create.png",width:"400"})))}y.isMDXComponent=!0}}]);