"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),c=n(67392),p=n(50012);function u(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=k({queryString:n,groupId:r}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=s??u;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var g=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),r=c[n].value;r!==i&&(u(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function b(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(f,(0,r.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return a.createElement(b,(0,r.Z)({key:String(t)},e))}},94594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(74866),l=n(85162);const i={id:"docker",title:"Deploy from a Dockerfile"},s=void 0,c={unversionedId:"getting-started/docker",id:"version-5.2.x/getting-started/docker",title:"Deploy from a Dockerfile",description:"In this quick tutorial, you'll learn how to create and deploy a basic web server from a DockerFile.",source:"@site/versioned_docs/version-5.2.x/getting-started/docker.mdx",sourceDirName:"getting-started",slug:"/getting-started/docker",permalink:"/docs/5.2.x/getting-started/docker",draft:!1,tags:[],version:"5.2.x",frontMatter:{id:"docker",title:"Deploy from a Dockerfile"},sidebar:"mainSidebar",previous:{title:"SDK command line",permalink:"/docs/5.2.x/sdk/cli"},next:{title:"Deploy a Node.js server",permalink:"/docs/5.2.x/getting-started/server"}},p={},u=[{value:"1. Prepare the project",id:"1-prepare-the-project",level:2},{value:"2. Create a basic HTTP web server with Docker",id:"2-create-a-basic-http-web-server-with-docker",level:2},{value:"Create a <code>package.json</code> file",id:"create-a-packagejson-file",level:4},{value:"Install Express",id:"install-express",level:4},{value:"Init a new HTTP server",id:"init-a-new-http-server",level:4},{value:"Init a new Dockerfile",id:"init-a-new-dockerfile",level:4},{value:"Init a new HTTP server",id:"init-a-new-http-server-1",level:4},{value:"Init a new Dockerfile",id:"init-a-new-dockerfile-1",level:4},{value:"Init a new HTTP server",id:"init-a-new-http-server-2",level:4},{value:"Init a new Dockerfile",id:"init-a-new-dockerfile-2",level:4},{value:"Install Flask",id:"install-flask",level:4},{value:"Init a new HTTP server",id:"init-a-new-http-server-3",level:4},{value:"Init a new Dockerfile",id:"init-a-new-dockerfile-3",level:4},{value:"Init a new HTTP server",id:"init-a-new-http-server-4",level:4},{value:"Init a new Dockerfile",id:"init-a-new-dockerfile-4",level:4},{value:"Init a new HTTP server",id:"init-a-new-http-server-5",level:4},{value:"Init a new Dockerfile",id:"init-a-new-dockerfile-5",level:4},{value:"3. Install the ScaleDynamics SDK",id:"3-install-the-scaledynamics-sdk",level:2},{value:"4. Create the project and the environment",id:"4-create-the-project-and-the-environment",level:2},{value:"Login to your account",id:"login-to-your-account",level:3},{value:"Create a project",id:"create-a-project",level:3},{value:"Create an environment",id:"create-an-environment",level:3},{value:"5. Deploy the server",id:"5-deploy-the-server",level:2},{value:"6. Call the server",id:"6-call-the-server",level:2},{value:"Chapeau!",id:"chapeau",level:2}],d={toc:u},m="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this quick tutorial, you'll learn how to create and deploy a basic web server from a DockerFile."),(0,a.kt)("h2",{id:"1-prepare-the-project"},"1. Prepare the project"),(0,a.kt)("p",null,"Let's start from our ready-to-use project. Select your favorite web technology and ",(0,a.kt)("inlineCode",{parentName:"p"},"git clone")," the project.",(0,a.kt)("br",{parentName:"p"}),"\n","Then go directly to the ",(0,a.kt)("a",{parentName:"p",href:"#4-create-the-project-and-the-environment"},"step 4")," to prepare the deployment."),(0,a.kt)(o.Z,{groupId:"languages",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"node",label:"Node",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ScaleDynamics/docker-node my-docker\ncd my-docker/\nnpm install\n"))),(0,a.kt)(l.Z,{value:"deno",label:"Deno",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ScaleDynamics/docker-deno my-docker\ncd my-docker/\n"))),(0,a.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ScaleDynamics/docker-php my-docker\ncd my-docker/\n"))),(0,a.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ScaleDynamics/docker-python my-docker\ncd my-docker/\n"))),(0,a.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ScaleDynamics/docker-go my-docker\ncd my-docker/\n"))),(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ScaleDynamics/docker-java my-docker\ncd my-docker/\n")))),(0,a.kt)("p",null,"or,"),(0,a.kt)("p",null,"Let's create manually your own ",(0,a.kt)("inlineCode",{parentName:"p"},"my-docker")," working directory, and follow the next steps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir my-docker\ncd my-docker/\n")),(0,a.kt)("h2",{id:"2-create-a-basic-http-web-server-with-docker"},"2. Create a basic HTTP web server with Docker"),(0,a.kt)(o.Z,{groupId:"languages",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"node",label:"Node",mdxType:"TabItem"},(0,a.kt)("h4",{id:"create-a-packagejson-file"},"Create a ",(0,a.kt)("inlineCode",{parentName:"h4"},"package.json")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="my-docker/package.json"',title:'"my-docker/package.json"'},'{\n  "name": "my-docker",\n  "version": "1.0.0",\n  "main": "index.js",\n  "scripts": {\n    "start": "node ."\n  }\n}\n')),(0,a.kt)("h4",{id:"install-express"},"Install Express"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install express\n")),(0,a.kt)("h4",{id:"init-a-new-http-server"},"Init a new HTTP server"),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," file in the project directory, and copy-paste the following code into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="my-docker/index.js"',title:'"my-docker/index.js"'},'const express = require("express");\nconst app = express();\n\nconst port = process.env.PORT || 8080;\n\napp.get("/:name?", (req, res) => {\n  const name = req.params.name || "World";\n  const version = process.version;\n  res.send(`Hello ${name} from Node.js ${version}`);\n});\n\napp.listen(port, () => {\n  console.log(`HTTP server listening on port ${port}`);\n});\n')),(0,a.kt)("h4",{id:"init-a-new-dockerfile"},"Init a new Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="my-docker/Dockerfile"',title:'"my-docker/Dockerfile"'},'FROM node:lts\nWORKDIR /usr/src/app\nCOPY package*.json ./\nRUN npm install --production --silent\nCOPY . ./\nEXPOSE 8080\nCMD [ "node", "index.js" ]\n'))),(0,a.kt)(l.Z,{value:"deno",label:"Deno",mdxType:"TabItem"},(0,a.kt)("h4",{id:"init-a-new-http-server-1"},"Init a new HTTP server"),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," file in the project directory, and copy-paste the following code into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="my-docker/index.ts"',title:'"my-docker/index.ts"'},'import { serve } from "https://deno.land/std@0.130.0/http/server.ts";\n\nconst port = 8080;\n\nconst handler = (request: Request): Response => {\n  const url = new URL(request.url);\n  const name = url.pathname.slice(1) || "World";\n  const version = Deno.version.deno;\n  const body = `Hello ${name} from Deno v${version}`;\n  return new Response(body, { status: 200 });\n};\n\nconsole.log(`HTTP server listening on port ${port}`);\n\nawait serve(handler, { port });\n')),(0,a.kt)("h4",{id:"init-a-new-dockerfile-1"},"Init a new Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="my-docker/Dockerfile"',title:'"my-docker/Dockerfile"'},'FROM denoland/deno:latest\nWORKDIR /usr/src/app\nCOPY . .\nEXPOSE 8080\nCMD ["deno", "run", "--allow-net", "index.ts"]\n'))),(0,a.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,a.kt)("h4",{id:"init-a-new-http-server-2"},"Init a new HTTP server"),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"index.php")," file in the project directory, and copy-paste the following code into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="my-docker/index.php"',title:'"my-docker/index.php"'},'<?php\n\n$name = $_GET["name"] ?? "World";\n$version = phpversion();\necho "Hello ".$name." from PHP v".$version;\n\n?>\n')),(0,a.kt)("h4",{id:"init-a-new-dockerfile-2"},"Init a new Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="my-docker/Dockerfile"',title:'"my-docker/Dockerfile"'},"FROM php:apache\nCOPY . /var/www/html\nEXPOSE 80\n"))),(0,a.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("h4",{id:"install-flask"},"Install Flask"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python3 -m pip install flask\n")),(0,a.kt)("h4",{id:"init-a-new-http-server-3"},"Init a new HTTP server"),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"index.py")," file in the project directory, and copy-paste the following code into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="my-docker/index.py"',title:'"my-docker/index.py"'},"import platform\n\nfrom flask import Flask\n\napp = Flask(__name__)\n\n@app.route('/')\n@app.route('/<name>')\ndef index(name='World'):\n    version = platform.python_version()\n    return 'Hello {} from Python v{}'.format(name, version)\n\nif __name__ == '__main__':\n    app.run(host='0.0.0.0', port=8080)\n")),(0,a.kt)("h4",{id:"init-a-new-dockerfile-3"},"Init a new Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="my-docker/Dockerfile"',title:'"my-docker/Dockerfile"'},'FROM python:latest\nCOPY . .\nRUN python3 -m pip install flask\nEXPOSE 8080\nCMD ["python", "-u", "index.py"]\n'))),(0,a.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)("h4",{id:"init-a-new-http-server-4"},"Init a new HTTP server"),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"index.go")," file in the project directory, and copy-paste the following code into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="my-docker/index.go"',title:'"my-docker/index.go"'},'package main\n\nimport (\n    "fmt"\n    "net/http"\n    "runtime"\n)\n\nfunc handler(w http.ResponseWriter, r *http.Request) {\n    name := r.URL.Path[1:]\n    if name == "" {\n        name = "World"\n    }\n    version := runtime.Version()[2:]\n    fmt.Fprintf(w, "Hello %s from Go v%s", name, version)\n}\n\nfunc main() {\n    port := 8080\n    fmt.Printf("HTTP server listening on port %d", port)\n    http.HandleFunc("/", handler)\n    http.ListenAndServe(fmt.Sprintf(":%d", port), nil)\n}\n')),(0,a.kt)("h4",{id:"init-a-new-dockerfile-4"},"Init a new Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="my-docker/Dockerfile"',title:'"my-docker/Dockerfile"'},'FROM golang:latest\nWORKDIR /usr/src/app\nCOPY . .\nRUN go build -o /usr/bin/app index.go\nEXPOSE 8080\nCMD ["/usr/bin/app"]\n'))),(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("h4",{id:"init-a-new-http-server-5"},"Init a new HTTP server"),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Main.java")," file in the project directory, and copy-paste the following code into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="my-docker/Main.java"',title:'"my-docker/Main.java"'},'import java.io.IOException;\nimport java.io.OutputStream;\nimport java.io.UnsupportedEncodingException;\nimport java.net.InetSocketAddress;\nimport java.net.URLDecoder;\nimport java.util.HashMap;\nimport java.util.Map;\n\nimport com.sun.net.httpserver.HttpExchange;\nimport com.sun.net.httpserver.HttpHandler;\nimport com.sun.net.httpserver.HttpServer;\n\npublic class Main {\n  static final int PORT = 8080;\n  public static void main(String[] args) throws Exception {\n\n    HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);\n    server.createContext("/", new MyHandler());\n    server.setExecutor(null);\n    server.start();\n    System.out.println("Server started on port " + PORT);\n  }\n\n  static class MyHandler implements HttpHandler {\n    @Override\n    public void handle(HttpExchange exchange) throws IOException {\n      Map<String, String> params = Main.parseQueryString(exchange.getRequestURI().getQuery());\n      String version = System.getProperty("java.version");\n      String name = params.get("name") != null ? params.get("name") : "unknown";\n\n      String response = "Hello " + name + " from Java " + version;\n\n      exchange.sendResponseHeaders(200, response.length());\n      OutputStream os = exchange.getResponseBody();\n      os.write(response.getBytes());\n\n      System.out.println("Response: " + response + " sent to " + exchange.getRemoteAddress());\n\n      os.close();\n    }\n  }\n\n  public static Map<String, String> parseQueryString(String qs) {\n    Map<String, String> result = new HashMap<>();\n    if (qs == null)\n      return result;\n\n    int last = 0, next, l = qs.length();\n    while (last < l) {\n        next = qs.indexOf(\'&\', last);\n        if (next == -1)\n            next = l;\n\n        if (next > last) {\n            int eqPos = qs.indexOf(\'=\', last);\n            try {\n                if (eqPos < 0 || eqPos > next)\n                    result.put(URLDecoder.decode(qs.substring(last, next), "utf-8"), "");\n                else\n                    result.put(URLDecoder.decode(qs.substring(last, eqPos), "utf-8"), URLDecoder.decode(qs.substring(eqPos + 1, next), "utf-8"));\n            } catch (UnsupportedEncodingException e) {\n                throw new RuntimeException(e);\n            }\n        }\n        last = next + 1;\n    }\n    return result;\n  }\n}\n')),(0,a.kt)("h4",{id:"init-a-new-dockerfile-5"},"Init a new Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="my-docker/Dockerfile"',title:'"my-docker/Dockerfile"'},'FROM openjdk:17\nCOPY . /usr/src/myapp\nWORKDIR /usr/src/myapp\nRUN javac Main.java\nEXPOSE 8080\nCMD ["java", "Main"]\n')))),(0,a.kt)("h2",{id:"3-install-the-scaledynamics-sdk"},"3. Install the ScaleDynamics SDK"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To use the SDK you need Node.js installed on your computer.",(0,a.kt)("br",{parentName:"p"}),"\n","Look at ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")," to install it.")),(0,a.kt)("p",null,"To access our CLI, use ",(0,a.kt)("inlineCode",{parentName:"p"},"npx warp"),". To get installation options of the SDK, look to ",(0,a.kt)("a",{parentName:"p",href:"../caas/caas_sdk"},"SDK installation"),".\nYou can have the list of available commands and help with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp help\n")),(0,a.kt)("p",null,"Then, create or update the ",(0,a.kt)("inlineCode",{parentName:"p"},".dockerignore")," file as below to exclude the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder from your deployment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="my-docker/.dockerignore"',title:'"my-docker/.dockerignore"'},"node_modules/\n")),(0,a.kt)("h2",{id:"4-create-the-project-and-the-environment"},"4. Create the project and the environment"),(0,a.kt)("p",null,"The deployment of a Docker container requires to indicate in which ",(0,a.kt)("strong",{parentName:"p"},"project")," and which ",(0,a.kt)("strong",{parentName:"p"},"environment")," you want to run it."),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"project")," identifies a set of containers to be deployed. Users can use\nproject to logically represents a website, a web app, a microservice, an API..."),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"environment")," defines the cloud execution environment to deploy and run a project.\nFor example you can have 'pre-prod', 'demo', 'staging' or 'production' environments."),(0,a.kt)("h3",{id:"login-to-your-account"},"Login to your account"),(0,a.kt)("p",null,"To access projects and deployment resources you need a ScaleDynamics account. You can ",(0,a.kt)("a",{href:"https://console.scaledynamics.com/auth/signup",target:"_blank",rel:"noopener"},"sign up here")," to create your account. Subscription is FREE, no credit card required."),(0,a.kt)("p",null,"Once your account is created, you can login to your account with your email and password:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp login\n")),(0,a.kt)("h3",{id:"create-a-project"},"Create a project"),(0,a.kt)("p",null,"Let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp project create docker\n")),(0,a.kt)("h3",{id:"create-an-environment"},"Create an environment"),(0,a.kt)("p",null,"Let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"demo")," environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env create demo\n")),(0,a.kt)("h2",{id:"5-deploy-the-server"},"5. Deploy the server"),(0,a.kt)("p",null,"You're now ready to deploy the server container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy --project docker --env demo\n")),(0,a.kt)("p",null,"During the deployment, you will have to indicate the url where you want to access your server after deployment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\u2714 Enter a hostname for 'my-docker' (fully qualified or not), leave blank for random: \u2026\n")),(0,a.kt)("p",null,"You can enter a name or press return to get a random one."),(0,a.kt)("p",null,"After that step you will have to indicate on which runner to deploy and run your container.\nAll runners that can be used are shown and you can select the right one.\nYou can select the configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"scaledynamics-shared-runner"),"\nthat is a FREE mutalized runner we provide for getting started purposes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"You need to select a runner for deployment configuration 'my-docker'\n? Pick a runner or a configuration: \u203a\n\u276f   Config: scaledynamics-shared-runner\n")),(0,a.kt)("p",null,"After deployment the url of your container is dumped on the terminal."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"if you want to know the deployment url, you can access the console or use the following command to get it:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env info\n"))),(0,a.kt)("h2",{id:"6-call-the-server"},"6. Call the server"),(0,a.kt)("p",null,"Now the server is deployed, let's call it from HTTP using curl for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://DEPLOYMENT_URL\n")),(0,a.kt)("h2",{id:"chapeau"},"Chapeau!"),(0,a.kt)("p",null,"Congrats', you deployed your first Managed HTTP docker."),(0,a.kt)("p",null,"Want to continue? ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.2.x/runners/create"},"Create your first Runner")))}k.isMDXComponent=!0}}]);