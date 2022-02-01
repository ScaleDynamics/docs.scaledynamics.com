"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"mainSidebar":[{"type":"category","label":"Overview","collapsible":false,"items":[{"type":"link","label":"Introduction","href":"/docs/","docId":"introduction"},{"type":"link","label":"Features","href":"/docs/features","docId":"features"},{"type":"link","label":"Glossary","href":"/docs/glossary","docId":"glossary"},{"type":"link","label":"SDK Installation","href":"/docs/installation","docId":"installation"}],"collapsed":false},{"type":"category","label":"Getting Started","collapsible":false,"items":[{"type":"link","label":"Docker server","href":"/docs/getting-started/docker","docId":"getting-started/docker"},{"type":"link","label":"Node.js server","href":"/docs/getting-started/server","docId":"getting-started/server"},{"type":"link","label":"Static hosting","href":"/docs/getting-started/hosting","docId":"getting-started/hosting"},{"type":"category","label":"Node.js module","collapsible":true,"items":[{"type":"link","label":"Getting started","href":"/docs/module/getting-started","docId":"module/getting-started"},{"type":"link","label":"Develop your modules","href":"/docs/module/development","docId":"module/development"},{"type":"link","label":"TypeScript support","href":"/docs/module/typescript","docId":"module/typescript"},{"type":"category","label":"Usage","items":[{"type":"link","label":"Call from browser using a script","href":"/docs/module/call-from-browser","docId":"module/call-from-browser"},{"type":"link","label":"Call from browser using HTML","href":"/docs/module/call-from-html","docId":"module/call-from-html"},{"type":"link","label":"Call from Node.js","href":"/docs/module/call-from-nodejs","docId":"module/call-from-nodejs"},{"type":"link","label":"Frontend frameworks integration","href":"/docs/module/integrates-in-frameworks","docId":"module/integrates-in-frameworks"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Output format","href":"/docs/module/output-format","docId":"module/output-format"}],"collapsed":true,"href":"/docs/module/module-as-a-service"}],"collapsed":false},{"type":"category","label":"Advanced usage","collapsible":true,"items":[{"type":"link","label":"Configuration file","href":"/docs/advanced-usage/configuration-file","docId":"advanced-usage/configuration-file"},{"type":"link","label":"Custom domains","href":"/docs/advanced-usage/custom-domains","docId":"advanced-usage/custom-domains"},{"type":"link","label":"Password protection","href":"/docs/advanced-usage/password-protection","docId":"advanced-usage/password-protection"},{"type":"link","label":"Logs","href":"/docs/advanced-usage/logs","docId":"advanced-usage/logs"},{"type":"link","label":"Environment variables","href":"/docs/advanced-usage/env-variables","docId":"advanced-usage/env-variables"},{"type":"link","label":"CI/CD","href":"/docs/advanced-usage/cicd","docId":"advanced-usage/cicd"}],"collapsed":true}],"sdkSidebar":[{"type":"link","label":"CLI","href":"/docs/sdk/cli","docId":"sdk/cli"},{"type":"link","label":"Engine","href":"/docs/sdk/engine","docId":"sdk/engine"}]},"docs":{"advanced-usage/cicd":{"id":"advanced-usage/cicd","title":"Continuous Integration & Delivery (CI/CD)","description":"This page is an agnostic overview of how to use our platform to build and deploy your project with a platform like Github Actions or Gitlab CI. This will give you keys to create the perfect script to deploy your project. There is an example for Github Actions and Gitlab CI at the end of this page.","sidebar":"mainSidebar"},"advanced-usage/configuration-file":{"id":"advanced-usage/configuration-file","title":"Configuration file","description":"The configuration is a optional Javascript file where you can easily configure some parameters of your project. For example, you can chose the output format and the directory for a node module project, or configure the folder you want to deploy, etc. The file is a module that exports a default object, or an array of objects. Alternatively, you can export a function that return these same objects. If you use the CLI, the configuration file\'s values are overridden by the CLI\'s parameters. This file is optional because our SDK can detect a basic configuration (if you have a dockerfile for example).","sidebar":"mainSidebar"},"advanced-usage/custom-domains":{"id":"advanced-usage/custom-domains","title":"Custom domains","description":"The platform provides you test urls running on scaledynamics.site, or scaledynamics.cloud.","sidebar":"mainSidebar"},"advanced-usage/env-variables":{"id":"advanced-usage/env-variables","title":"Environment variables","description":"Our platform defines environment variables that you can use in your project, and allow you to add any variables you want in the configuration file.","sidebar":"mainSidebar"},"advanced-usage/logs":{"id":"advanced-usage/logs","title":"Logs","description":"With the CLI of the SDK, you can access the execution logs of all your deployed projects.","sidebar":"mainSidebar"},"advanced-usage/password-protection":{"id":"advanced-usage/password-protection","title":"Password protection","description":"This is only available for the host of static assets.","sidebar":"mainSidebar"},"advanced-usage/unit-tests":{"id":"advanced-usage/unit-tests","title":"Unit tests","description":""},"features":{"id":"features","title":"Features","description":"Each service has specific features. Most advanced features are only available for Managed Node.js modules.","sidebar":"mainSidebar"},"getting-started/docker":{"id":"getting-started/docker","title":"Docker server","description":"On our platform you can deploy any web application using Docker so you can access it with traditional HTTP requests. You can use your favorite programming language (PHP, Java, Go, ...) and any web framework to host all your website or CMS (Wordpress, Drupal, Django, ...) or microservice without managing the cloud itself (provisioning, deployment, setup, HTTPS certificates, security patches, cloud change...)","sidebar":"mainSidebar"},"getting-started/hosting":{"id":"getting-started/hosting","title":"Static hosting","description":"In this quick tutorial, you\'ll learn how to create and deploy static assets you can access from HTTPS. We will take an example of a basic index.html file.","sidebar":"mainSidebar"},"getting-started/server":{"id":"getting-started/server","title":"Node.js server","description":"On our platform you can deploy a standard HTTP Node.js server (i.e. using Express, Koa, Fastify, ...) so you can access it with traditional HTTP requests. You can use your favorite Node.js web framework to host all all your website by serving your static assets and backend, your microservice APIs, a backend proxy... without managing the cloud itself (provisioning, deployment, setup, HTTPS certificates, security patches, cloud change...)","sidebar":"mainSidebar"},"glossary":{"id":"glossary","title":"Glossary","description":"Our tech / platform contains some terms that are used in the documentation. This glossary is a reference for these terms.","sidebar":"mainSidebar"},"installation":{"id":"installation","title":"SDK Installation","description":"Our SDK provides you a CLI you can use to deploy your HTTP docker, Node.js server, Node.js module or static assets.","sidebar":"mainSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"<ThemedImage","sidebar":"mainSidebar"},"module/call-from-browser":{"id":"module/call-from-browser","title":"Call from browser using a script","description":"To use the cloud Node.js module from a Browser script, you need first to import the client module that was generated after build. You also need to import the Warp Engine that will provide you access to the functions of the module you want to use in your script.","sidebar":"mainSidebar"},"module/call-from-html":{"id":"module/call-from-html","title":"Call from browser using HTML","description":"To use the cloud Node.js module from a Browser script, you need first to import the client module that was generated after build. You also need to import the Warp Engine that will provide you access to the functions of the module you want to use in your script.","sidebar":"mainSidebar"},"module/call-from-nodejs":{"id":"module/call-from-nodejs","title":"Call from Node.js","description":"To use the cloud Node.js module from a Node.js script or another Node.js module, you need first to import the client module that was generated after build. You also need to import the Warp Engine that will provide you access to the functions of the module you want to use in your script.","sidebar":"mainSidebar"},"module/development":{"id":"module/development","title":"Develop your modules","description":"In this page we describe how to build, emulate and develop a cloud Node.js module on our platform.","sidebar":"mainSidebar"},"module/getting-started":{"id":"module/getting-started","title":"Getting started","description":"On our platform a Node.js module can be run as-a-service. It is similar to a microservice. All exported asynchronous functions of a module are transformed by our platform as API calls of a microservice.","sidebar":"mainSidebar"},"module/integrates-in-frameworks":{"id":"module/integrates-in-frameworks","title":"Frontend frameworks integration","description":"Follow the next steps to integrate your client module inside the most popular frameworks: Angular, React and Vue.js.","sidebar":"mainSidebar"},"module/module-as-a-service":{"id":"module/module-as-a-service","title":"Module-as-a-Service","description":"ScaleDynamics is the first cloud platform providing a managed Node.js module service. It is the most advanced and simple way to create microservices or backends in the cloud, it also opens new cloud management features.","sidebar":"mainSidebar"},"module/output-format":{"id":"module/output-format","title":"Output format","description":"Our platform provide two output formats for your node modules, but we recommend to use only one, the umd format. The main reason is that the node_modules format can have issues with live reload with some modern frameworks / bundler, mainly because of the cache. So you can still use it but at your discretion.","sidebar":"mainSidebar"},"module/typescript":{"id":"module/typescript","title":"TypeScript support","description":"In this page we explain how you can use TypeScript to build your modules.","sidebar":"mainSidebar"},"sdk/cli":{"id":"sdk/cli","title":"SDK Command-line Interface","description":"warp is the name of our project SDK.","sidebar":"sdkSidebar"},"sdk/engine":{"id":"sdk/engine","title":"Warp engine","description":"Npm module","sidebar":"sdkSidebar"}}}')}}]);