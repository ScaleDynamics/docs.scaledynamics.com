"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7024],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8575:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const s={id:"session",title:"Project, environment, session"},a=void 0,i={unversionedId:"services/session",id:"services/session",title:"Project, environment, session",description:"After login with the CLI, most of CLI commands need to know in which project or environment to run.",source:"@site/docs/services/session.md",sourceDirName:"services",slug:"/services/session",permalink:"/docs/next/services/session",draft:!1,tags:[],version:"current",frontMatter:{id:"session",title:"Project, environment, session"},sidebar:"mainSidebar",previous:{title:"Deployment",permalink:"/docs/next/services/deployment"},next:{title:"Configuration file",permalink:"/docs/next/services/configuration-file"}},c={},l=[{value:"Projects and environments",id:"projects-and-environments",level:2},{value:"Working session",id:"working-session",level:2},{value:"Setting the working session",id:"setting-the-working-session",level:2},{value:"Knowing where you are working",id:"knowing-where-you-are-working",level:2},{value:"Unsetting the working session",id:"unsetting-the-working-session",level:2}],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After login with the CLI, most of CLI commands need to know in which ",(0,o.kt)("strong",{parentName:"p"},"project")," or ",(0,o.kt)("strong",{parentName:"p"},"environment")," to run."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"What is a project or an environment? have a look to ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/caas/caas_glossary"},"Glossary"),".")),(0,o.kt)("h2",{id:"projects-and-environments"},"Projects and environments"),(0,o.kt)("p",null,"You can use the console or the cli to create projects and environments."),(0,o.kt)("p",null,"On the cli use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# to create a project\nnpx warp project create\n\n# to create an environment in a project\nnpx warp env create\n")),(0,o.kt)("p",null,"If you don't specifiy in which project and env to deploy, you'll be invited to indicate ineractively in which project/environment you are deploying."),(0,o.kt)("p",null,"To indicate in which project/environment you'r working on, you can use additional parameter to the commands. For example for the deploy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy --project <project> --env <environment>\n")),(0,o.kt)("h2",{id:"working-session"},"Working session"),(0,o.kt)("p",null,"We provide a Working session where you can select the default ",(0,o.kt)("strong",{parentName:"p"},"project")," and/or ",(0,o.kt)("strong",{parentName:"p"},"environment")," you are working on. When selected, these values will be used by default for all commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# to select a project\nnpx warp project select\n\n# to select an environment in a project\nnpx warp env select\n")),(0,o.kt)("h2",{id:"setting-the-working-session"},"Setting the working session"),(0,o.kt)("p",null,"We also provide a Working session where you can select the default ",(0,o.kt)("strong",{parentName:"p"},"project")," and/or ",(0,o.kt)("strong",{parentName:"p"},"environment")," you are working on. When selected, these values will be used by default for all commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# to select a project\nnpx warp project select\n\n# to select an environment in a project\nnpx warp env select\n")),(0,o.kt)("h2",{id:"knowing-where-you-are-working"},"Knowing where you are working"),(0,o.kt)("p",null,"If during the session you want to check what has been selected, use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# to view selected project/environment\nnpx warp whereami\n")),(0,o.kt)("h2",{id:"unsetting-the-working-session"},"Unsetting the working session"),(0,o.kt)("p",null,"To unselect a ",(0,o.kt)("strong",{parentName:"p"},"project","*")," and/or ",(0,o.kt)("strong",{parentName:"p"},"environment")," you previously selected, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# to deselect a project\nnpx warp project deselect\n\n# to deselect an environment in a project\nnpx warp env deselect\n")))}d.isMDXComponent=!0}}]);