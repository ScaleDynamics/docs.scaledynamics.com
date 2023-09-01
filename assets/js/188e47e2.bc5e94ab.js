"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"metrics",title:"Runner metrics"},i=void 0,s={unversionedId:"runners/metrics",id:"version-5.3/runners/metrics",title:"Runner metrics",description:"The platform provides you with a set of metrics to monitor your runners directly from the console, on the runner view .",source:"@site/versioned_docs/version-5.3/runners/metrics.md",sourceDirName:"runners",slug:"/runners/metrics",permalink:"/docs/runners/metrics",draft:!1,tags:[],version:"5.3",frontMatter:{id:"metrics",title:"Runner metrics"},sidebar:"mainSidebar",previous:{title:"Delete a runner",permalink:"/docs/runners/delete"},next:{title:"Auto scaling",permalink:"/docs/runners/autoscaling"}},c={},l=[{value:"Standard Runner Metrics",id:"standard-runner-metrics",level:2},{value:"Carbon metrics",id:"carbon-metrics",level:2},{value:"Extensions",id:"extensions",level:2}],u={toc:l},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The platform provides you with a set of metrics to monitor your runners directly from the console, on the runner view ."),(0,o.kt)("p",null,"Every metric is provided for a given runner over a period of an hour or a day. You can access them for the last 24 hours, the last 7 days or the last 30 days (metrics above 30 days are erased)."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/docs/metrics-runner.png",width:"800"})),(0,o.kt)("h2",{id:"standard-runner-metrics"},"Standard Runner Metrics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CPU Load (in % min, max and average)"),(0,o.kt)("li",{parentName:"ul"},"Memory Load (in % min, max and average)"),(0,o.kt)("li",{parentName:"ul"},"Data-In volume (data received in bytes)"),(0,o.kt)("li",{parentName:"ul"},"Data-Out volume (data sent in bytes)")),(0,o.kt)("h2",{id:"carbon-metrics"},"Carbon metrics"),(0,o.kt)("p",null,"As described in the ",(0,o.kt)("a",{parentName:"p",href:"/oxygenit/introduction"},"carbon calculator introduction")," our platform integrates a carbon calculator that is able to compute the\noperational energy consumption and carbon footprint, and the embodied carbon footprint. The computation takes care of the provider, the location of\nthe data center, its POE and carbon energy provider emissions (have a look to the ",(0,o.kt)("a",{parentName:"p",href:"/oxygenit/introduction"},"carbon calculator documentation")," for more information)."),(0,o.kt)("p",null,"When using our platform, these metrics are automatically provided for each runner:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Energy Consumption, an estimate of the energy consumption based on the resource, its location, the CPU and RAM load, as well as the volume of data (in watt/hour)"),(0,o.kt)("li",{parentName:"ul"},"Co2eq usage, an estimate of the carbon footprint usage based on the energy consumption and specifics of the resource (in gCO2-eq)"),(0,o.kt)("li",{parentName:"ul"},"Co2eq embodiment, an estimate of the carbon footprint embodiment based on specifics of the resource (in gCO2-eq)")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In case you want to compute the carbon footprint for your legacy code (bare metal servers, instances or VMs) that are not managed by ScaleDynamics\nyou can use our carbon calculator using APIs. Have a look to\n",(0,o.kt)("a",{parentName:"p",href:"/oxygenit/introduction"},"carbon calculator documentation")," for more information")),(0,o.kt)("h2",{id:"extensions"},"Extensions"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Extensions are only available on request and could implies an additional fee. Please contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:sales@scaledynamics.com"},"sales@scaledynamics.com"),".")),(0,o.kt)("p",null,"On request it is possible to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"connect a ",(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"Prometheus")," system to integrate your metrics with your monitoring system (eg. Grafana)."),(0,o.kt)("li",{parentName:"ul"},"get other specific metrics"),(0,o.kt)("li",{parentName:"ul"},"extend the retention of the metrics (3 months, 1 year or more)")),(0,o.kt)("p",null,"If you're interested by these extensions contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:sales@scaledynamics.com"},"sales@scaledynamics.com")))}p.isMDXComponent=!0}}]);