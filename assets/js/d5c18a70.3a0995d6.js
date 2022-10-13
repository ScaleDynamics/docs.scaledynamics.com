"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),p=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function u(e){var t;const{lazy:n,block:l,defaultValue:u,values:m,groupId:k,className:h}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===u?u:u??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:b}=(0,s.U)(),[N,x]=(0,a.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:D}=(0,p.o5)();if(null!=k){const e=w[k];null!=e&&e!==N&&g.some((t=>t.value===e))&&x(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),r=g[n].value;r!==N&&(D(t),x(r),null!=k&&b(k,String(r)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:P,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},30:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={id:"docker",title:"Deploy from a Dockerfile"},s=void 0,p={unversionedId:"getting-started/docker",id:"getting-started/docker",title:"Deploy from a Dockerfile",description:"In this quick tutorial, you'll learn how to create and deploy a basic web server from a DockerFile",source:"@site/docs/getting-started/docker.mdx",sourceDirName:"getting-started",slug:"/getting-started/docker",permalink:"/docs/getting-started/docker",draft:!1,tags:[],version:"current",frontMatter:{id:"docker",title:"Deploy from a Dockerfile"},sidebar:"mainSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started/intro"},next:{title:"Deploy a Node.js server",permalink:"/docs/getting-started/server"}},c={},d=[{value:"1. Prepare the project",id:"1-prepare-the-project",level:2},{value:"2. Create a basic HTTP web server with Docker",id:"2-create-a-basic-http-web-server-with-docker",level:2},{value:"Create a <code>package.json</code> file",id:"create-a-packagejson-file",level:4},{value:"Install Express",id:"install-express",level:4},{value:"Init a new HTTP server",id:"init-a-new-http-server",level:4},{value:"Init a new Dockerfile",id:"init-a-new-dockerfile",level:4},{value:"Init a new HTTP server",id:"init-a-new-http-server-1",level:4},{value:"Init a new Dockerfile",id:"init-a-new-dockerfile-1",level:4},{value:"Init a new HTTP server",id:"init-a-new-http-server-2",level:4},{value:"Init a new Dockerfile",id:"init-a-new-dockerfile-2",level:4},{value:"Install Flask",id:"install-flask",level:4},{value:"Init a new HTTP server",id:"init-a-new-http-server-3",level:4},{value:"Init a new Dockerfile",id:"init-a-new-dockerfile-3",level:4},{value:"Init a new HTTP server",id:"init-a-new-http-server-4",level:4},{value:"Init a new Dockerfile",id:"init-a-new-dockerfile-4",level:4},{value:"Init a new HTTP server",id:"init-a-new-http-server-5",level:4},{value:"Init a new Dockerfile",id:"init-a-new-dockerfile-5",level:4},{value:"3. Install the ScaleDynamics SDK",id:"3-install-the-scaledynamics-sdk",level:2},{value:"4. Create the project and the environment",id:"4-create-the-project-and-the-environment",level:2},{value:"Login to your account",id:"login-to-your-account",level:3},{value:"Create a project",id:"create-a-project",level:3},{value:"Create an environment",id:"create-an-environment",level:3},{value:"5. Deploy the server",id:"5-deploy-the-server",level:2},{value:"6. Call the server",id:"6-call-the-server",level:2},{value:"Chapeau!",id:"chapeau",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this quick tutorial, you'll learn how to create and deploy a basic web server from a DockerFile\non a FREE shared runner we provide for getting started purposes."),(0,a.kt)("h2",{id:"1-prepare-the-project"},"1. Prepare the project"),(0,a.kt)("p",null,"Let's start from our ready-to-use project. Select your favorite web technology and ",(0,a.kt)("inlineCode",{parentName:"p"},"git clone")," the project.",(0,a.kt)("br",{parentName:"p"}),"\n","Then go directly to the ",(0,a.kt)("a",{parentName:"p",href:"#4-create-the-project-and-the-environment"},"step 4")," to prepare the deployment."),(0,a.kt)(o.Z,{groupId:"languages",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"node",label:"Node",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ScaleDynamics/docker-node my-docker\ncd my-docker/\nnpm install\n"))),(0,a.kt)(l.Z,{value:"deno",label:"Deno",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ScaleDynamics/docker-deno my-docker\ncd my-docker/\n"))),(0,a.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ScaleDynamics/docker-php my-docker\ncd my-docker/\n"))),(0,a.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ScaleDynamics/docker-python my-docker\ncd my-docker/\n"))),(0,a.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ScaleDynamics/docker-go my-docker\ncd my-docker/\n"))),(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/ScaleDynamics/docker-java my-docker\ncd my-docker/\n")))),(0,a.kt)("p",null,"or,"),(0,a.kt)("p",null,"Let's create manually your own ",(0,a.kt)("inlineCode",{parentName:"p"},"my-docker")," working directory, and follow the next steps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir my-docker\ncd my-docker/\n")),(0,a.kt)("h2",{id:"2-create-a-basic-http-web-server-with-docker"},"2. Create a basic HTTP web server with Docker"),(0,a.kt)(o.Z,{groupId:"languages",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"node",label:"Node",mdxType:"TabItem"},(0,a.kt)("h4",{id:"create-a-packagejson-file"},"Create a ",(0,a.kt)("inlineCode",{parentName:"h4"},"package.json")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="my-docker/package.json"',title:'"my-docker/package.json"'},'{\n  "name": "my-docker",\n  "version": "1.0.0",\n  "main": "index.js",\n  "scripts": {\n    "start": "node ."\n  }\n}\n')),(0,a.kt)("h4",{id:"install-express"},"Install Express"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install express\n")),(0,a.kt)("h4",{id:"init-a-new-http-server"},"Init a new HTTP server"),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," file in the project directory, and copy-paste the following code into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="my-docker/index.js"',title:'"my-docker/index.js"'},'const express = require("express");\nconst app = express();\n\nconst port = process.env.PORT || 8080;\n\napp.get("/:name?", (req, res) => {\n  const name = req.params.name || "World";\n  const version = process.version;\n  res.send(`Hello ${name} from Node.js ${version}`);\n});\n\napp.listen(port, () => {\n  console.log(`HTTP server listening on port ${port}`);\n});\n')),(0,a.kt)("h4",{id:"init-a-new-dockerfile"},"Init a new Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="my-docker/Dockerfile"',title:'"my-docker/Dockerfile"'},'FROM node:lts\nWORKDIR /usr/src/app\nCOPY package*.json ./\nRUN npm install --production --silent\nCOPY . ./\nEXPOSE 8080\nCMD [ "node", "index.js" ]\n'))),(0,a.kt)(l.Z,{value:"deno",label:"Deno",mdxType:"TabItem"},(0,a.kt)("h4",{id:"init-a-new-http-server-1"},"Init a new HTTP server"),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," file in the project directory, and copy-paste the following code into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="my-docker/index.ts"',title:'"my-docker/index.ts"'},'import { serve } from "https://deno.land/std@0.130.0/http/server.ts";\n\nconst port = 8080;\n\nconst handler = (request: Request): Response => {\n  const url = new URL(request.url);\n  const name = url.pathname.slice(1) || "World";\n  const version = Deno.version.deno;\n  const body = `Hello ${name} from Deno v${version}`;\n  return new Response(body, { status: 200 });\n};\n\nconsole.log(`HTTP server listening on port ${port}`);\n\nawait serve(handler, { port });\n')),(0,a.kt)("h4",{id:"init-a-new-dockerfile-1"},"Init a new Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="my-docker/Dockerfile"',title:'"my-docker/Dockerfile"'},'FROM denoland/deno:latest\nWORKDIR /usr/src/app\nCOPY . .\nEXPOSE 8080\nCMD ["deno", "run", "--allow-net", "index.ts"]\n'))),(0,a.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,a.kt)("h4",{id:"init-a-new-http-server-2"},"Init a new HTTP server"),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"index.php")," file in the project directory, and copy-paste the following code into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="my-docker/index.php"',title:'"my-docker/index.php"'},'<?php\n\n$name = $_GET["name"] ?? "World";\n$version = phpversion();\necho "Hello ".$name." from PHP v".$version;\n\n?>\n')),(0,a.kt)("h4",{id:"init-a-new-dockerfile-2"},"Init a new Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="my-docker/Dockerfile"',title:'"my-docker/Dockerfile"'},"FROM php:apache\nCOPY . /var/www/html\nEXPOSE 80\n"))),(0,a.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)("h4",{id:"install-flask"},"Install Flask"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python3 -m pip install flask\n")),(0,a.kt)("h4",{id:"init-a-new-http-server-3"},"Init a new HTTP server"),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"index.py")," file in the project directory, and copy-paste the following code into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="my-docker/index.py"',title:'"my-docker/index.py"'},"import platform\n\nfrom flask import Flask\n\napp = Flask(__name__)\n\n@app.route('/')\n@app.route('/<name>')\ndef index(name='World'):\n    version = platform.python_version()\n    return 'Hello {} from Python v{}'.format(name, version)\n\nif __name__ == '__main__':\n    app.run(host='0.0.0.0', port=8080)\n")),(0,a.kt)("h4",{id:"init-a-new-dockerfile-3"},"Init a new Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="my-docker/Dockerfile"',title:'"my-docker/Dockerfile"'},'FROM python:latest\nCOPY . .\nRUN python3 -m pip install flask\nEXPOSE 8080\nCMD ["python", "-u", "index.py"]\n'))),(0,a.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)("h4",{id:"init-a-new-http-server-4"},"Init a new HTTP server"),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"index.go")," file in the project directory, and copy-paste the following code into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="my-docker/index.go"',title:'"my-docker/index.go"'},'package main\n\nimport (\n    "fmt"\n    "net/http"\n    "runtime"\n)\n\nfunc handler(w http.ResponseWriter, r *http.Request) {\n    name := r.URL.Path[1:]\n    if name == "" {\n        name = "World"\n    }\n    version := runtime.Version()[2:]\n    fmt.Fprintf(w, "Hello %s from Go v%s", name, version)\n}\n\nfunc main() {\n    port := 8080\n    fmt.Printf("HTTP server listening on port %d", port)\n    http.HandleFunc("/", handler)\n    http.ListenAndServe(fmt.Sprintf(":%d", port), nil)\n}\n')),(0,a.kt)("h4",{id:"init-a-new-dockerfile-4"},"Init a new Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="my-docker/Dockerfile"',title:'"my-docker/Dockerfile"'},'FROM golang:latest\nWORKDIR /usr/src/app\nCOPY . .\nRUN go build -o /usr/bin/app index.go\nEXPOSE 8080\nCMD ["/usr/bin/app"]\n'))),(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("h4",{id:"init-a-new-http-server-5"},"Init a new HTTP server"),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Main.java")," file in the project directory, and copy-paste the following code into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="my-docker/Main.java"',title:'"my-docker/Main.java"'},'import java.io.IOException;\nimport java.io.OutputStream;\nimport java.io.UnsupportedEncodingException;\nimport java.net.InetSocketAddress;\nimport java.net.URLDecoder;\nimport java.util.HashMap;\nimport java.util.Map;\n\nimport com.sun.net.httpserver.HttpExchange;\nimport com.sun.net.httpserver.HttpHandler;\nimport com.sun.net.httpserver.HttpServer;\n\npublic class Main {\n  static final int PORT = 8080;\n  public static void main(String[] args) throws Exception {\n\n    HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);\n    server.createContext("/", new MyHandler());\n    server.setExecutor(null);\n    server.start();\n    System.out.println("Server started on port " + PORT);\n  }\n\n  static class MyHandler implements HttpHandler {\n    @Override\n    public void handle(HttpExchange exchange) throws IOException {\n      Map<String, String> params = Main.parseQueryString(exchange.getRequestURI().getQuery());\n      String version = System.getProperty("java.version");\n      String name = params.get("name") != null ? params.get("name") : "unknown";\n\n      String response = "Hello " + name + " from Java " + version;\n\n      exchange.sendResponseHeaders(200, response.length());\n      OutputStream os = exchange.getResponseBody();\n      os.write(response.getBytes());\n\n      System.out.println("Response: " + response + " sent to " + exchange.getRemoteAddress());\n\n      os.close();\n    }\n  }\n\n  public static Map<String, String> parseQueryString(String qs) {\n    Map<String, String> result = new HashMap<>();\n    if (qs == null)\n      return result;\n\n    int last = 0, next, l = qs.length();\n    while (last < l) {\n        next = qs.indexOf(\'&\', last);\n        if (next == -1)\n            next = l;\n\n        if (next > last) {\n            int eqPos = qs.indexOf(\'=\', last);\n            try {\n                if (eqPos < 0 || eqPos > next)\n                    result.put(URLDecoder.decode(qs.substring(last, next), "utf-8"), "");\n                else\n                    result.put(URLDecoder.decode(qs.substring(last, eqPos), "utf-8"), URLDecoder.decode(qs.substring(eqPos + 1, next), "utf-8"));\n            } catch (UnsupportedEncodingException e) {\n                throw new RuntimeException(e);\n            }\n        }\n        last = next + 1;\n    }\n    return result;\n  }\n}\n')),(0,a.kt)("h4",{id:"init-a-new-dockerfile-5"},"Init a new Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="my-docker/Dockerfile"',title:'"my-docker/Dockerfile"'},'FROM openjdk:17\nCOPY . /usr/src/myapp\nWORKDIR /usr/src/myapp\nRUN javac Main.java\nEXPOSE 8080\nCMD ["java", "Main"]\n')))),(0,a.kt)("h2",{id:"3-install-the-scaledynamics-sdk"},"3. Install the ScaleDynamics SDK"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To install the SDK you need Node.js installed on your computer.",(0,a.kt)("br",{parentName:"p"}),"\n","Look at ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")," to install it.")),(0,a.kt)("p",null,"Install the SDK to access all CLI commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install warp --save-dev\n")),(0,a.kt)("p",null,"To access our CLI, use ",(0,a.kt)("inlineCode",{parentName:"p"},"npx warp"),". You can have the list of available commands and help with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp help\n")),(0,a.kt)("p",null,"Then, create or update the ",(0,a.kt)("inlineCode",{parentName:"p"},".dockerignore")," file as below to exclude the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folder from your deployment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="my-docker/.dockerignore"',title:'"my-docker/.dockerignore"'},"node_modules/\n")),(0,a.kt)("h2",{id:"4-create-the-project-and-the-environment"},"4. Create the project and the environment"),(0,a.kt)("p",null,"The deployment of a Docker server requires to indicate in which ",(0,a.kt)("strong",{parentName:"p"},"project")," and which ",(0,a.kt)("strong",{parentName:"p"},"environment")," you want to deploy and execute your module."),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"project")," is a name that identifies a website, a web app, a microservice or an API."),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"environment")," is a name that identifies a cloud execution configuration to run modules. For example you can have 'pre-prod', 'demo', 'staging' or 'production' environments. Each one will have it's own cloud resource configuration."),(0,a.kt)("h3",{id:"login-to-your-account"},"Login to your account"),(0,a.kt)("p",null,"To access projects and deployment resources you need a ScaleDynamics account. You can ",(0,a.kt)("a",{href:"https://console.scaledynamics.com/auth/signup",target:"_blank",rel:"noopener"},"sign up here")," to create your account. Subscription is FREE, no credit card required."),(0,a.kt)("p",null,"Once your account is created, you can login to your account with your email and password:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp login\n")),(0,a.kt)("h3",{id:"create-a-project"},"Create a project"),(0,a.kt)("p",null,"A project identifies a website, a web app, a microservice or an API."),(0,a.kt)("p",null,"Let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," project, and let's indicate the SDK we are working in it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp project create docker\nnpx warp project select docker\n")),(0,a.kt)("h3",{id:"create-an-environment"},"Create an environment"),(0,a.kt)("p",null,"Let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"demo")," environment, and let's indicate the SDK we are working in it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env create demo\nnpx warp env select demo\n")),(0,a.kt)("h2",{id:"5-deploy-the-server"},"5. Deploy the server"),(0,a.kt)("p",null,"You're now ready to deploy the Docker server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp deploy\n")),(0,a.kt)("p",null,"During the deployment, you will have to indicate the url where you want to access your server after deployment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\u2714 Enter a hostname for 'my-docker' (fully qualified or not), leave blank for random: \u2026\n")),(0,a.kt)("p",null,"You can enter a name or press return to get a random one."),(0,a.kt)("p",null,"After that step you will have to indicate on which runner to deploy and run your container.\nAll runners that can be used by the env are shown and you can select the right one.\nYou can select the configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"scaledynamics-shared-runner"),"\nthat is a FREE mutalized runner we provide for getting started purposes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"You need to select a runner for deployment configuration 'my-docker'\n? Pick a runner or a configuration: \u203a\n\u276f   Config: scaledynamics-shared-runner\n")),(0,a.kt)("p",null,"After deployment the url to use to call your module is dumped on the terminal."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"if you want to know the deployment url, you can access the console or use the following command to get it:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx warp env info\n"))),(0,a.kt)("h2",{id:"6-call-the-server"},"6. Call the server"),(0,a.kt)("p",null,"Now the server is deployed, let's call it from HTTP using curl for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://DEPLOYMENT_URL\n")),(0,a.kt)("h2",{id:"chapeau"},"Chapeau!"),(0,a.kt)("p",null,"Congrats', you deployed your first Managed HTTP docker."),(0,a.kt)("p",null,"Want to continue? ",(0,a.kt)("a",{parentName:"p",href:"../runners/create"},"Create your first Runner")))}m.isMDXComponent=!0}}]);