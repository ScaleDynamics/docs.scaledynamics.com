"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6347],{3905:(e,n,o)=>{o.d(n,{Zo:()=>m,kt:()=>y});var t=o(67294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},m=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(o),d=a,y=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return o?t.createElement(y,i(i({ref:n},m),{},{components:o})):t.createElement(y,i({ref:n},m))}));function y(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},68785:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=o(87462),a=(o(67294),o(3905));const r={id:"custom-domains",title:"Custom domains"},i=void 0,s={unversionedId:"services/custom-domains",id:"version-5.2/services/custom-domains",title:"Custom domains",description:"To access your services, we provide you random test urls running on scaledynamics.site, or scaledynamics.cloud.",source:"@site/versioned_docs/version-5.2/services/custom-domains.md",sourceDirName:"services",slug:"/services/custom-domains",permalink:"/docs/5.2/services/custom-domains",draft:!1,tags:[],version:"5.2",frontMatter:{id:"custom-domains",title:"Custom domains"},sidebar:"mainSidebar",previous:{title:"Configuration file",permalink:"/docs/5.2/services/configuration-file"},next:{title:"Password protection",permalink:"/docs/5.2/services/password-protection"}},c={},l=[{value:"Assign your custom domain during the deployment",id:"assign-your-custom-domain-during-the-deployment",level:2},{value:"Assign your custom domain before the deployment",id:"assign-your-custom-domain-before-the-deployment",level:2},{value:"View service configurations",id:"view-service-configurations",level:2}],m={toc:l},p="wrapper";function u(e){let{components:n,...o}=e;return(0,a.kt)(p,(0,t.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To access your services, we provide you random test urls running on scaledynamics.site, or scaledynamics.cloud.\nIn this page you describe how you can connect a custom domain to a service, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"api.yourcompany.com"),"."),(0,a.kt)("h2",{id:"assign-your-custom-domain-during-the-deployment"},"Assign your custom domain during the deployment"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You can only set one custom domain per service per environment and you can't change it later. If you want to change it, you need to delete the service/environment and create a new one.")),(0,a.kt)("p",null,"You can assign your custom domain during the first deployment of your services.\nIndeed, interactively you have to provide an url for each service you deploy the first time."),(0,a.kt)("p",null,"Suppose you want one docker service available at ",(0,a.kt)("inlineCode",{parentName:"p"},"api.yourcompany.com"),"."),(0,a.kt)("p",null,"Use the deploy command. When asked to provide the url, enter ",(0,a.kt)("inlineCode",{parentName:"p"},"api.yourcompany.com"),"."),(0,a.kt)("p",null,"The command will dump something like that"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Base URL ID 'docker' with hostname 'api.yourcompany.com' added.\nPlease deploy:\n  - a DNS CNAME record under the name 'xxxxx.api.yourcompany.com' with value 'api.yourcompany.com.scaledynamics.link.' before deploying\n  - a DNS CNAME record under the name 'api.yourcompany.com' with value 'xxxxx.scaledynamics.site.' when you want your URL live\n")),(0,a.kt)("p",null,"And the command will stop. Now follow the guideline and add those two DNS CNAME records with the value provided in your domain name provider's DNS configuration."),(0,a.kt)("p",null,"When done, launch the deploy command again."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The deploy can be done only if the first DNS CNAME is propagated, otherwise it fails.")),(0,a.kt)("p",null,"After deployment, your service is available on your custom domain ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.yourcompany.com")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"To get your custom domain live, you need to get the second DNS CNAME propagated, otherwise it doesn't work.")),(0,a.kt)("h2",{id:"assign-your-custom-domain-before-the-deployment"},"Assign your custom domain before the deployment"),(0,a.kt)("p",null,"If before deploying you know the service names that will be used (see ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.2/services/deployment#setting-service-name"},"service names"),"), you can assign the url for each service before deploying,"),(0,a.kt)("p",null,"For example suppose you are deploying a docker service named 'my-docker-service' and you want to use it on your custom domain ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.yourcompany.com"),"."),(0,a.kt)("p",null,"Before deploying, use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env base-url add my-docker-service api.yourcompany.com\n")),(0,a.kt)("p",null,"The command will dump something like that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Base URL ID 'docker' with hostname 'api.yourcompany.com' added.\nPlease deploy:\n  - a DNS CNAME record under the name 'xxxxx.api.yourcompany.com' with value 'api.yourcompany.com.scaledynamics.link.' before deploying\n  - a DNS CNAME record under the name 'api.yourcompany.com' with value 'xxxxx.scaledynamics.site.' when you want your URL live\n")),(0,a.kt)("p",null,"Now follow the guideline and add those two DNS CNAME records with the value provided in your domain name provider's DNS configuration."),(0,a.kt)("p",null,"When done, you can deploy your service."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The deploy can be done only if the first DNS CNAME is propagated, otherwise it fails.")),(0,a.kt)("p",null,"After deployment, your service is available on your custom domain ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.yourcompany.com")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"To get your custom domain live, you need to get the second DNS CNAME propagated, otherwise it doesn't work.")),(0,a.kt)("h2",{id:"view-service-configurations"},"View service configurations"),(0,a.kt)("p",null,"To get the list of all services, names and associated urls, use the command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env info\n")),(0,a.kt)("p",null,"In the example above, the command will dump something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Name: env-name\nBase URLs:\n  docker: api.yourcompany.com (custom)\nDNS Records:\n  Type: 'CNAME' Name: 'xxxxx.api.yourcompany.com' Value: 'api.yourcompany.com.scaledynamics.link.'\n  Type: 'CNAME' Name: 'api.yourcompany.com' Value: 'xxxxx.scaledynamics.site.'\nDeployments: deployment-2022-12-05T17:22:17.692Z\n")))}u.isMDXComponent=!0}}]);