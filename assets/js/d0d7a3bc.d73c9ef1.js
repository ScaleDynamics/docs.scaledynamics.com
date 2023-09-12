"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1453],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},57460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const o={id:"autoscaling",title:"Auto scaling"},i=void 0,c={unversionedId:"runners/autoscaling",id:"version-5.3/runners/autoscaling",title:"Auto scaling",description:"Scaledynamics caas provides an autoscaling feature that adapts dynamically the infrastructure according",source:"@site/versioned_docs/version-5.3/runners/autoscaling.md",sourceDirName:"runners",slug:"/runners/autoscaling",permalink:"/docs/5.3/runners/autoscaling",draft:!1,tags:[],version:"5.3",frontMatter:{id:"autoscaling",title:"Auto scaling"},sidebar:"mainSidebar",previous:{title:"Runner metrics",permalink:"/docs/5.3/runners/metrics"},next:{title:"Runner states",permalink:"/docs/5.3/runners/states"}},l={},u=[{value:"Scale up configuration",id:"scale-up-configuration",level:2},{value:"Scale down configuration",id:"scale-down-configuration",level:2},{value:"Old runner deallocation time",id:"old-runner-deallocation-time",level:2}],s={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Scaledynamics caas provides an autoscaling feature that adapts dynamically the infrastructure according\nto runner state. This is particularly usefull when traffic can change according to traffic."),(0,a.kt)("p",null,"ScaleDynamics Auto Scaling monitors your infrastructure and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost."),(0,a.kt)("p",null,"It\u2019s easy to get started with ScaleDynamics Auto Scaling using the ScaleDynamics Console. ScaleDynamics Auto Scaling is available at no additional charge."),(0,a.kt)("p",null,"Principle of auto scaling is to define some events to minitor during a period of time to scale-up (move containers running on the current runner to a higher runner configuration), or scale-down (move containers running on the current runner to a smaller runner configuration). The runners will be allocated on the same provider and region of the first runner you selected."),(0,a.kt)("p",null,"On the 'Runners' page that show all runner, you will see on which runners the auto scaling is enabled.\nTo enable or disable the auto scaling, click on 'view' runner to access auto scaling settings."),(0,a.kt)("p",null,"When enabling or setting the runner configuration, you have to configure events for scaling up. The interface provides\na predefined configuration."),(0,a.kt)("h2",{id:"scale-up-configuration"},"Scale up configuration"),(0,a.kt)("p",null,"You have to define on which CPU and RAM threshold during a period of time is met on the current runner to realize a scale up.\nFor example, scale up when CPU of the current runner is higher or equals to 75% during 2 seconds.\nYou also have to indicate which maximum runner configuration you can allocate in term of cpu, ram or disk to\nhave a cost control of your infrastructure."),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/docs/autoscaling.up.png",width:"500"}),(0,a.kt)("p",null,"Scale up configuration")),(0,a.kt)("h2",{id:"scale-down-configuration"},"Scale down configuration"),(0,a.kt)("p",null,"As for the scale-up, you have to define on which CPU and RAM threshold during a period of time is met on the current runner to realize a scale down.\nFor example, scale down when CPU of the current runner is smaller or equals to 20% during 60 seconds.\nYou also have to indicate which minimum runner configuration you can allocate in term of cpu, ram or disk."),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/docs/autoscaling.down.png",width:"500"}),(0,a.kt)("p",null,"Scale down configuration")),(0,a.kt)("h2",{id:"old-runner-deallocation-time"},"Old runner deallocation time"),(0,a.kt)("p",null,"When scaling-up the platform allocate a higher runner and move containers on the new runner, and DNS is changed\nto redirect the traffic to the new runner. That means that until the DNS is updated, the previous traffic still\ngoes on the previous runner for a period a time, which is in general 60 minutes. So during that time the previous runner\nis kept alive before shutdown. This is why you have to set the old runner deallocation time for auto-scaling."),(0,a.kt)("p",null,"Note that when scaling-down, the platform reuses old runners still alive to move containers on it."),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/docs/autoscaling.deallocate.png",width:"500"}),(0,a.kt)("p",null,"Runner deallocation time")))}p.isMDXComponent=!0}}]);