"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6458],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(y,i(i({ref:n},s),{},{components:t})):o.createElement(y,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4465:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],c={id:"custom-domains",title:"Custom domains"},l=void 0,u={unversionedId:"advanced-usage/custom-domains",id:"advanced-usage/custom-domains",title:"Custom domains",description:"The platform provides you test urls running on scaledynamics.site, or scaledynamics.cloud.",source:"@site/docs/advanced-usage/custom-domains.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/custom-domains",permalink:"/docs/advanced-usage/custom-domains",tags:[],version:"current",frontMatter:{id:"custom-domains",title:"Custom domains"},sidebar:"mainSidebar",previous:{title:"Configuration file",permalink:"/docs/advanced-usage/configuration-file"},next:{title:"Password protection",permalink:"/docs/advanced-usage/password-protection"}},s=[{value:"1. Create a new deployment environment",id:"1-create-a-new-deployment-environment",children:[],level:2},{value:"2. Assign your custom domain for deployment",id:"2-assign-your-custom-domain-for-deployment",children:[],level:2},{value:"3. deploy",id:"3-deploy",children:[],level:2}],d={toc:s};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The platform provides you test urls running on scaledynamics.site, or scaledynamics.cloud."),(0,a.kt)("p",null,"You can easily connect your custom domains to make your assets live at ",(0,a.kt)("inlineCode",{parentName:"p"},"www.yourcompany.com")," for example."),(0,a.kt)("h2",{id:"1-create-a-new-deployment-environment"},"1. Create a new deployment environment"),(0,a.kt)("p",null,"Before deploying, you need to create a new deployment environment, and start using it. You need to have selected a project before."),(0,a.kt)("p",null,"For example, let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"prod")," env (use the name you want)."),(0,a.kt)("p",null,"In your asset directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env create prod\nnpx warp env select prod\n")),(0,a.kt)("h2",{id:"2-assign-your-custom-domain-for-deployment"},"2. Assign your custom domain for deployment"),(0,a.kt)("p",null,"Then we will connect the url of your deployment to that environment. In our case we want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"www.yourcompany.com")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env base-url add hosting www.yourcompany.com\n")),(0,a.kt)("p",null,"The command will dump something like that"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Base URL ID 'hosting' with hostname 'www.yourcompany.com' added.\nPlease deploy:\n  - a DNS CNAME record under the name 'xxxxx.www.yourcompany.com' with value 'www.yourcompany.com.scaledynamics.link.' before deploying\n  - a DNS CNAME record under the name 'www.yourcompany.com' with value 'xxxxx.scaledynamics.site.' when you want your URL live\n")),(0,a.kt)("p",null,"Follow the guideline and add those two DNS CNAME records with the value provided in your domain name provider's DNS configuration."),(0,a.kt)("h2",{id:"3-deploy"},"3. deploy"),(0,a.kt)("p",null,"Now you can deploy as usual."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy\n")),(0,a.kt)("p",null,"After deployment, the command will dump your url ",(0,a.kt)("inlineCode",{parentName:"p"},"https://www.yourcompany.com")," you can access your assets."))}p.isMDXComponent=!0}}]);