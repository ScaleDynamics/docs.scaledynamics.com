"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var c=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,c,o=function(e,t){if(null==e)return{};var n,c,o={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=c.createContext({}),l=function(e){var t=c.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return c.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.createElement(c.Fragment,{},t)}},m=c.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?c.createElement(h,s(s({ref:t},u),{},{components:n})):c.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[d]="string"==typeof e?e:o,s[1]=r;for(var l=2;l<a;l++)s[l]=n[l];return c.createElement.apply(null,s)}return c.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var c=n(87462),o=(n(67294),n(3905));const a={id:"aws",title:"AWS"},s=void 0,r={unversionedId:"csp/aws",id:"version-5.2.x/csp/aws",title:"AWS",description:"Connect your account",source:"@site/versioned_docs/version-5.2.x/csp/aws.md",sourceDirName:"csp",slug:"/csp/aws",permalink:"/docs/5.2.x/csp/aws",draft:!1,tags:[],version:"5.2.x",frontMatter:{id:"aws",title:"AWS"},sidebar:"mainSidebar",previous:{title:"Google Cloud",permalink:"/docs/5.2.x/csp/gcp"},next:{title:"Digital ocean",permalink:"/docs/5.2.x/csp/do"}},i={},l=[{value:"Connect your account",id:"connect-your-account",level:2},{value:"Connect to your AWS console",id:"connect-to-your-aws-console",level:3},{value:"Create a new account",id:"create-a-new-account",level:3},{value:"Logout and signin on the new account",id:"logout-and-signin-on-the-new-account",level:3},{value:"Add a user in the &#39;scaledynamics-caas&#39; account",id:"add-a-user-in-the-scaledynamics-caas-account",level:3},{value:"get  <strong>accessKeyId</strong> and <strong>secretAccessKey</strong>",id:"get--accesskeyid-and-secretaccesskey",level:3},{value:"Create the connector",id:"create-the-connector",level:3}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,c.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"connect-your-account"},"Connect your account"),(0,o.kt)("p",null,"To use our CaaS on AWS, you need to create an account and provide rights to our CaaS. We will create infrastructure resources in that account.\nWe don't need a global access to your overall account, only to one (which is good for security)."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"After the connection of your AWS account, ScaleDynamics will create and manage resources in one of your project of your account. You should not modify, create, or delete these resources to avoid non deterministic behaviors of the ScaleDynamics platform. To interact with ScaleDynamics, please use only our SDK command lines or our console (",(0,o.kt)("a",{parentName:"p",href:"http://console.scaledynamics.com"},"http://console.scaledynamics.com"),").")),(0,o.kt)("p",null,"To connect a AWS account, you need to gather several information on your side: an ",(0,o.kt)("strong",{parentName:"p"},"accessKeyId")," and a ",(0,o.kt)("strong",{parentName:"p"},"secretAccessKey"),"."),(0,o.kt)("h3",{id:"connect-to-your-aws-console"},"Connect to your AWS console"),(0,o.kt)("p",null,"First, connect to ",(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/"},"AWS console")," as the Root user of the aws account."),(0,o.kt)("h3",{id:"create-a-new-account"},"Create a new account"),(0,o.kt)("p",null,"Using the rigth top dropdown, click on 'organization' to view the organization panel. "),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/aws.dropdown.png",width:"300"})),(0,o.kt)("p",null,"Then, click on 'Add account'. On the creation account panel, enter 'scaledynamics-caas' as account name, and enter an email from you. The email must be different, so you can use (email+caaws@) if you need. Then click on 'Create AWS account'."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/aws.account.create.png",width:"600"})),(0,o.kt)("p",null,"You'll be back on the Root organization panel, the wait for the end of project creation."),(0,o.kt)("h3",{id:"logout-and-signin-on-the-new-account"},"Logout and signin on the new account"),(0,o.kt)("p",null,"When done, you have to logout and signin with the email address you used in the account setting. As it is a new user,\nyou don't have a password, so use 'Forgot password' to set a new password to be able to signin\nwith the email."),(0,o.kt)("h3",{id:"add-a-user-in-the-scaledynamics-caas-account"},"Add a user in the 'scaledynamics-caas' account"),(0,o.kt)("p",null,"Open the IAM for the account (use the top left dropdown and click on IAM)."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/aws.iam.png",width:"500"})),(0,o.kt)("p",null,"On the IAM panel, click on 'Users' on the left side and then, click on 'Add users'."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/aws.iam.users.png",width:"600"})),(0,o.kt)("p",null,"Add a user name 'scaledynamics-user', don't click on console access, and click on 'next'"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/aws.iam.users.details.png",width:"600"})),(0,o.kt)("p",null,"On the permissions panel, click on 'Attach policies directly'. In the filter type 'ec2full', then click on 'AmazonEC2FullAccess' check box. Then click on 'Next'"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/aws.iam.users.permissions.png",width:"600"})),(0,o.kt)("p",null,"On the review panel, click on 'Create user'"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/aws.iam.users.review.png",width:"600"})),(0,o.kt)("h3",{id:"get--accesskeyid-and-secretaccesskey"},"get  ",(0,o.kt)("strong",{parentName:"h3"},"accessKeyId")," and ",(0,o.kt)("strong",{parentName:"h3"},"secretAccessKey")),(0,o.kt)("p",null,"Last step is to create an access key for that user"),(0,o.kt)("p",null,"In the 'Users' panel, click on the user name 'scaledynamics-user'. In the user panel, click on 'Security credentials' tab."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/aws.iam.user.png",width:"600"})),(0,o.kt)("p",null,"In the tab, click on 'Create access key'"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/aws.iam.user.access.png",width:"600"})),(0,o.kt)("p",null,"In the step1, access key selection, click on 'Application running outside AWS', then click on 'Next'."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/aws.iam.user.access.app.png",width:"400"})),(0,o.kt)("p",null,"In the description, set 'scaledynamics-key' and click on 'Create access key'"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/aws.iam.user.access.desc.png",width:"500"})),(0,o.kt)("p",null,"On the Retrieve access key, you will find the 'Access key' that you will use as the ",(0,o.kt)("strong",{parentName:"p"},"accessKeyId")," for the connector and the\n'secret access key' you will use as the ",(0,o.kt)("strong",{parentName:"p"},"secretAccessKey"),". Please keep these two strings to be able to provide them when\nadding the connector."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/aws.iam.user.access.key.png",width:"500"})),(0,o.kt)("h3",{id:"create-the-connector"},"Create the connector"),(0,o.kt)("p",null,"On the ScaleDynamics console, select the 'cloud connectors' tab, then click on the '+ Cloud connector'.\nSelect AWS. "),(0,o.kt)("p",null,"Then, give a name and an optional description to your connector  "),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/scaledynamics.connector.name.png",width:"400"})),(0,o.kt)("p",null,"At last, fill  ",(0,o.kt)("strong",{parentName:"p"},"accessKeyId")," and ",(0,o.kt)("strong",{parentName:"p"},"secretAccessKey"),". Set an optional peremption date and click on 'Create' button."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/csp/aws.connector.create.png",width:"400"})))}p.isMDXComponent=!0}}]);