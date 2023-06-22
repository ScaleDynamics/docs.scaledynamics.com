"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2692],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6616:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={id:"metrics",title:"Container metrics"},o=void 0,s={unversionedId:"services/metrics",id:"services/metrics",title:"Container metrics",description:"The platform provides you with a set of metrics to monitor your containers directly from the console, on the runner view.",source:"@site/docs/services/metrics.md",sourceDirName:"services",slug:"/services/metrics",permalink:"/docs/services/metrics",draft:!1,tags:[],version:"current",frontMatter:{id:"metrics",title:"Container metrics"},sidebar:"mainSidebar",previous:{title:"View Services",permalink:"/docs/services/view"},next:{title:"Service states",permalink:"/docs/services/states"}},c={},l=[{value:"Available Container Metrics",id:"available-container-metrics",level:3},{value:"Extensions",id:"extensions",level:3}],m={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The platform provides you with a set of metrics to monitor your containers directly from the console, on the runner view."),(0,a.kt)("p",null,"Every metric is provided for a given container over a period of an hour or a day. You can access them for the last 24 hours, the last 7 days or the last 30 days (metrics above 30 days are erased)."),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("img",{src:"/img/docs/metrics-service.png",width:"800"})),(0,a.kt)("h3",{id:"available-container-metrics"},"Available Container Metrics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Number of 2XX requests"),(0,a.kt)("li",{parentName:"ul"},"Number of 3XX requests"),(0,a.kt)("li",{parentName:"ul"},"Number of 4XX responses"),(0,a.kt)("li",{parentName:"ul"},"Number of 5XX responses"),(0,a.kt)("li",{parentName:"ul"},"upTime and Downtime (in seconds)"),(0,a.kt)("li",{parentName:"ul"},"Number of restarts (ex: after a deploy, or after a bug in the container that kills it)"),(0,a.kt)("li",{parentName:"ul"},"Request execution time (min, max and average per request in seconds)"),(0,a.kt)("li",{parentName:"ul"},"Request Data-in volume (data received min, max and average per request in bytes)"),(0,a.kt)("li",{parentName:"ul"},"Request data-out volume (data sent min, max and average per request in bytes)")),(0,a.kt)("h3",{id:"extensions"},"Extensions"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Extensions are only available on request and could implies an additional fee. Please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:sales@scaledynamics.com"},"sales@scaledynamics.com"),".")),(0,a.kt)("p",null,"On request it is possible to"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"connect a ",(0,a.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"Prometheus")," system to integrate your metrics with your monitoring system (eg. Grafana)."),(0,a.kt)("li",{parentName:"ul"},"get other specific metrics"),(0,a.kt)("li",{parentName:"ul"},"extend the retention of the metrics (3 months, 1 year or more)"),(0,a.kt)("li",{parentName:"ul"},"access metrics using an API key to access them")),(0,a.kt)("p",null,"If you're interested by these extensions contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:sales@scaledynamics.com"},"sales@scaledynamics.com")))}p.isMDXComponent=!0}}]);