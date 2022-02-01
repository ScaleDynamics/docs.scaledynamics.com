"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6962],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1379:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"typescript",title:"TypeScript support"},p=void 0,s={unversionedId:"module/typescript",id:"module/typescript",title:"TypeScript support",description:"In this page we explain how you can use TypeScript to build your modules.",source:"@site/docs/module/typescript.md",sourceDirName:"module",slug:"/module/typescript",permalink:"/docs/module/typescript",tags:[],version:"current",frontMatter:{id:"typescript",title:"TypeScript support"},sidebar:"mainSidebar",previous:{title:"Develop your modules",permalink:"/docs/module/development"},next:{title:"Call from browser using a script",permalink:"/docs/module/call-from-browser"}},c=[{value:"Install TypeScript",id:"install-typescript",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Using JS and JSDoc to generate types",id:"using-js-and-jsdoc-to-generate-types",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this page we explain how you can use ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," to build your modules."),(0,a.kt)("h2",{id:"install-typescript"},"Install TypeScript"),(0,a.kt)("p",null,"First of all, you need to install TypeScript in your project or globally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g typescript #globally\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev typescript #in your project\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You need to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file at the root of your module. You can use these options to make everything work with the SDK:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "target": "ES6",\n    "module": "CommonJS",\n    "strict": true,\n    "declaration": true,\n    "outDir": "dist",\n    "moduleResolution": "node"\n  },\n  "include": ["src/**/*.ts"]\n}\n')),(0,a.kt)("p",null,"The target has to be set at ",(0,a.kt)("inlineCode",{parentName:"p"},"ES6")," and the module at ",(0,a.kt)("inlineCode",{parentName:"p"},"CommonJS"),", for compatibility reasons."),(0,a.kt)("p",null,"Since the SDK works with ",(0,a.kt)("inlineCode",{parentName:"p"},"js")," file and doesn't handle native TypeScript, you have to give it the main result file from the compilation. Since Javascript is not strongly typed, you need to also set/define the path to the generated definition file to use them where you import your module. Open your ",(0,a.kt)("inlineCode",{parentName:"p"},"warp.config.js")," file to add an ",(0,a.kt)("a",{parentName:"p",href:"../advanced-usage/configuration-file#expose"},(0,a.kt)("inlineCode",{parentName:"a"},"expose"))," object to give warp the js file build from TypeScript and the types (optional)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// without types\nexpose: 'dist/index.js'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// with types\nexpose: {\n  source: 'dist/index.js',\n  type: 'dist/index.d.ts',\n},\n")),(0,a.kt)("p",null,"Finally, you can use the TypeScript compiler directly in a terminal or create npm scripts in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},' "scripts": {\n  "ts-watch": "tsc --watch",\n  "ts-build": "tsc"\n }\n')),(0,a.kt)("p",null,"After that, you are able to use your fully typed module wherever you import it."),(0,a.kt)("h2",{id:"using-js-and-jsdoc-to-generate-types"},"Using JS and JSDoc to generate types"),(0,a.kt)("p",null,"If you want to make a module in JavaScript but use it in a TypeScript environnement (an Angular frontend for example) and want to use types, you can write JSDoc and use the TypeScript compiler to generate them. Change the ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," options to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "strict": true,\n    "allowJs": true,\n    "declaration": true,\n    "emitDeclarationOnly": true,\n    "outDir": "dist",\n    "moduleResolution": "node"\n  },\n  "include": ["src/**/*.js"]\n}\n')),(0,a.kt)("p",null,"TypeScript will only generate the types files from the jsdoc. You can add the main type file on your ",(0,a.kt)("inlineCode",{parentName:"p"},"warp.config.js")," file. This TypeScript declaration file can import any other declaration file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"expose: {\n  source: 'src/index.js',\n  type: 'dist/index.d.ts',\n},\n")),(0,a.kt)("p",null,"With this solution, you can't have live reload on the types. Every time you update your JSDoc, you need to launch the TypeScript compiler to build the declarations files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tsc build\n")))}d.isMDXComponent=!0}}]);