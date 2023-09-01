"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var c=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,c,o=function(e,t){if(null==e)return{};var n,c,o={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=c.createContext({}),l=function(e){var t=c.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return c.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.createElement(c.Fragment,{},t)}},g=c.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),g=o,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||r;return n?c.createElement(m,a(a({ref:t},p),{},{components:n})):c.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<r;l++)a[l]=n[l];return c.createElement.apply(null,a)}return c.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var c=n(87462),o=(n(67294),n(3905));const r={id:"gcp",title:"Google Cloud"},a=void 0,i={unversionedId:"csp/gcp",id:"version-5.3/csp/gcp",title:"Google Cloud",description:"Connect your account",source:"@site/versioned_docs/version-5.3/csp/gcp.md",sourceDirName:"csp",slug:"/csp/gcp",permalink:"/docs/csp/gcp",draft:!1,tags:[],version:"5.3",frontMatter:{id:"gcp",title:"Google Cloud"},sidebar:"mainSidebar",previous:{title:"Azure",permalink:"/docs/csp/azure"},next:{title:"AWS",permalink:"/docs/csp/aws"}},s={},l=[{value:"Connect your account",id:"connect-your-account",level:2},{value:"Connect to your Google Cloud console",id:"connect-to-your-google-cloud-console",level:3},{value:"Create a &#39;scaledynamics-caas&#39; project and get <strong>projectID</strong>",id:"create-a-scaledynamics-caas-project-and-get-projectid",level:3},{value:"Create a service account for that project and get the <strong>email</strong>",id:"create-a-service-account-for-that-project-and-get-the-email",level:3},{value:"Add key for the service account and get the <strong>privateKey</strong>",id:"add-key-for-the-service-account-and-get-the-privatekey",level:3},{value:"Enable APIS",id:"enable-apis",level:3},{value:"Create the connector",id:"create-the-connector",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,c.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"connect-your-account"},"Connect your account"),(0,o.kt)("p",null,"To use our CaaS on Google Cloud, you need to create a projet and provide rights to our CaaS. We will create infrastructure resources in that project.\nWe don't need a global access to your account, only to one project (which is good for security). So, you can configure other services like a managed database\nin your Google Cloud account, we will not see them."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"After the connection of your Google Cloud account, ScaleDynamics will create and manage resources in one of your project of your account. You should not modify, create, or delete these resources to avoid non deterministic behaviors of the ScaleDynamics platform. To interact with ScaleDynamics, please use only our SDK command lines or our console (",(0,o.kt)("a",{parentName:"p",href:"http://console.scaledynamics.com"},"http://console.scaledynamics.com"),").")),(0,o.kt)("p",null,"To connect a Google Cloud account, you need to gather several information on your side: an ",(0,o.kt)("strong",{parentName:"p"},"email"),", a ",(0,o.kt)("strong",{parentName:"p"},"privateKey"),", and a ",(0,o.kt)("strong",{parentName:"p"},"projectID"),"."),(0,o.kt)("h3",{id:"connect-to-your-google-cloud-console"},"Connect to your Google Cloud console"),(0,o.kt)("p",null,"First, connect to ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/"},"Google Cloud console")),(0,o.kt)("h3",{id:"create-a-scaledynamics-caas-project-and-get-projectid"},"Create a 'scaledynamics-caas' project and get ",(0,o.kt)("strong",{parentName:"h3"},"projectID")),(0,o.kt)("p",null,"Click on the top left dropdow"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/gcp.project.bar.png",width:"450"})),(0,o.kt)("p",null,"On the panel click on 'New project'."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/gcp.project.new.png",width:"150"})),(0,o.kt)("p",null,"On the panel, set project name to 'scaledynamics-caas', and click on 'Create' button. You can change attached organization and location according to your needs."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/gcp.project.create.png",width:"450"})),(0,o.kt)("p",null,"On the top right dropdow select 'scaledynamics-caas' project. Access the project dashboard and you will find on the project ID to use as the ",(0,o.kt)("strong",{parentName:"p"},"projectID")),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/gcp.project.view.png",width:"450"})),(0,o.kt)("h3",{id:"create-a-service-account-for-that-project-and-get-the-email"},"Create a service account for that project and get the ",(0,o.kt)("strong",{parentName:"h3"},"email")),(0,o.kt)("p",null,"Select the project 'scaledynamics-caas' in the top left dropdown. Click on the top left icon, and select 'IAM & Admin' and 'Service accounts'"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/gcp.service.select.png",width:"350"})),(0,o.kt)("p",null,"Click on '+ CREATE SERVICE ACCOUNT'"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/gcp.service.select.create.png",width:"450"})),(0,o.kt)("p",null,"On the panel, put 'Service account name' to 'scaledynamics', 'description' to 'scaledynamics service account'. Then click on 'CREATE and CONTINUE' button."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/gcp.service.create.details.png",width:"450"})),(0,o.kt)("p",null,"On the panel, add 'Owner' Role, then click on 'Done' button."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/gcp.service.create.role.png",width:"450"})),(0,o.kt)("p",null,"On the service accounts panel, you will see a recap of your different service accounts. You will find the 'scaledynamics' service line.\nOn that line, you'll get an email that you can copy and use as the ",(0,o.kt)("strong",{parentName:"p"},"email")," for your connector info."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/gcp.service.view.png",width:"650"})),(0,o.kt)("h3",{id:"add-key-for-the-service-account-and-get-the-privatekey"},"Add key for the service account and get the ",(0,o.kt)("strong",{parentName:"h3"},"privateKey")),(0,o.kt)("p",null,"The next step is to create a private key. On the 'scaledynamics' service account line, click on the three bullets at the right, and select 'Manage keys'"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/gcp.service.keys.manage.png",width:"650"})),(0,o.kt)("p",null,"On the next panel, select 'Add keys', 'Create a new key'"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/gcp.service.keys.select.png",width:"150"})),(0,o.kt)("p",null,"On the next panel, select 'JSON' and click on 'Create'"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/gcp.service.keys.create.png",width:"450"})),(0,o.kt)("p",null,"A JSON file will be uploaded in your browser."),(0,o.kt)("p",null,"Open the JSON file. Copy the property ",(0,o.kt)("inlineCode",{parentName:"p"},"private_key")," as ",(0,o.kt)("strong",{parentName:"p"},"privateKey")," to use it when creating the connector."),(0,o.kt)("h3",{id:"enable-apis"},"Enable APIS"),(0,o.kt)("p",null,"The last step is to enable compute engine APIs. on the top left dropdown, select 'scaledynamics-caas' project, then access the dashboard."),(0,o.kt)("p",null,"On the API panel, click on 'Go to APIs overview'"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/gcp.api.goto.png",width:"350"})),(0,o.kt)("p",null,"Then, click on '+ Enable APIs and services'"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/gcp.api.select.png",width:"350"})),(0,o.kt)("p",null,"On the API search, type 'compute engine'."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/gcp.api.computeengine.png",width:"700"})),(0,o.kt)("p",null,"Click on 'compute engine' icon, and click on Enable and wait for enabling done."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/gcp.api.enable.png",width:"350"})),(0,o.kt)("h3",{id:"create-the-connector"},"Create the connector"),(0,o.kt)("p",null,"Now you're ready to add a connector. On the ScaleDynamics console, select the 'cloud connectors' tab, then click on the '+ Cloud connector'.\nSelect Google Cloud."),(0,o.kt)("p",null,"Then, give a name and an optional description to your connector  "),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/scaledynamics.connector.name.png",width:"400"})),(0,o.kt)("p",null,"At last, fill  ",(0,o.kt)("strong",{parentName:"p"},"email"),", ",(0,o.kt)("strong",{parentName:"p"},"privateKey"),", and ",(0,o.kt)("strong",{parentName:"p"},"projectID"),". Set an optional peremption date and click on 'Create' button."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/gcp.connector.create.png",width:"400"})))}u.isMDXComponent=!0}}]);