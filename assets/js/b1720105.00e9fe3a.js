"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6821],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99947:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={id:"diagram",title:"Block diagram of the estimator"},i=void 0,c={unversionedId:"carbon/diagram",id:"version-5.2.x/carbon/diagram",title:"Block diagram of the estimator",description:"The block diagram of the estimator is shown below.",source:"@site/versioned_docs/version-5.2.x/carbon/diagram.md",sourceDirName:"carbon",slug:"/carbon/diagram",permalink:"/docs/carbon/diagram",draft:!1,tags:[],version:"5.2.x",frontMatter:{id:"diagram",title:"Block diagram of the estimator"},sidebar:"mainSidebar",previous:{title:"Methodology",permalink:"/docs/carbon/methodology"},next:{title:"API",permalink:"/docs/carbon/api"}},l={},p=[],s={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The block diagram of the estimator is shown below."),(0,o.kt)("p",null,"The estimator is based on a model which makes it possible to describe the different components of an infrastructure. The model can be predefined (predefined model) or custom (raw model input)."),(0,o.kt)("p",null,"Once the models have been defined, the various estimates are based on energy consumption data for each of the components used (pre-def-infra data)."),(0,o.kt)("p",null,"For the calculation of the energy consumption, the operating data (CPU load, volume of data exchanged per hour) ('metrics' on the diagram) are taken into account. from the energy consumption is deduced the operational carbon footprint."),(0,o.kt)("p",null,"For the construction carbon footprint, it is calculated based on the duration of use of the instance."),(0,o.kt)("mermaid",{value:"flowchart TD;\ndb[(pre-def infras data)];\nin1>pre-defined model input];\nin2>raw model input];\nin3>metrics];\no1>Watt.h];\no2>g CO2 eq];\no3>g CO2 eq];\np1{{infra data lookup}};\np2{{base data lookup}};\nc1{{energy estimation}};\nc2{{operation carbon}};\nc3{{embodied carbon}};\nn1{ };\nsubgraph models;\nin1--\x3ep1;\nin2--\x3ep2;\ndb--\x3ep1;\nend;\np1--\x3en1;\np2--\x3en1;\nsubgraph compute;\nn1--\x3ec1;\nc1--\x3ec2;\nn1--\x3ec3;\nend;\nin3--\x3ec1;\nsubgraph outputs;\nc2--\x3eo2;\nc1--\x3eo1;\nc3--\x3eo3;\nend;"}))}u.isMDXComponent=!0}}]);