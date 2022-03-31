"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"spring-kotlin-petclinic","metadata":{"permalink":"/blog/spring-kotlin-petclinic","source":"@site/blog/2022-03-25-spring-kotlin-petclinic/index.mdx","title":"Deploy a Spring Boot Kotlin application with Docker","description":"In this tutorial, we will see how to deploy a Spring Boot Kotlin application with Docker and the ScaleDynamics Platform.","date":"2022-03-25T00:00:00.000Z","formattedDate":"March 25, 2022","tags":[{"label":"Spring","permalink":"/blog/tags/spring"},{"label":"Docker","permalink":"/blog/tags/docker"},{"label":"Kotlin","permalink":"/blog/tags/kotlin"},{"label":"deploy","permalink":"/blog/tags/deploy"}],"readingTime":4.325,"truncated":true,"authors":[{"name":"Cl\xe9ment Poisson","title":"Full Stack Engineer @ ScaleDynamics","key":"clem"}],"frontMatter":{"slug":"spring-kotlin-petclinic","title":"Deploy a Spring Boot Kotlin application with Docker","authors":["clem"],"tags":["Spring","Docker","Kotlin","deploy"]},"nextItem":{"title":"How to deploy Drupal on cloud with Docker","permalink":"/blog/drupal-on-docker"}},"content":"In this tutorial, we will see how to deploy a Spring Boot Kotlin application with Docker and the ScaleDynamics Platform.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Introduction\\n\\n[Spring Boot](https://spring.io/projects/spring-boot) is a Java-based web application framework that is designed to build simple, stand-alone, production-grade applications. It is built on top of the conventional Spring framework. In Spring Boot everything is auto-configured. It also support Kotlin, which in our case is the language used in the application we will deploy.\\n\\n[Kotlin](https://kotlinlang.org/) is a statically typed programming language that is designed to be a modern, safe and efficient alternative to Java. It mainly target the JVM, but can also be compile in JavaScript or native code. Since 2019, Kotlin is the preferred language for Android app developpers.\\n\\n[Docker](https://www.docker.com/) is a containerization platform that allows you to run applications in a container. It is used to build and run applications on the cloud.\\n\\n## Goals\\n\\nOur goal will be to clone the Spring Petclinic sample application, use the Docker app to run it locally and then deploy it on the ScaleDynamics Platform.\\n\\n## Prerequisites\\n\\nTo follow along, you will need:\\n\\n- [Docker](https://www.docker.com/get-started) on your system to run the application locally.\\n- Node.js and yarn / npm installed. You can go [here](https://nodejs.org/en/download/) to download the latest version of Node.js and npm.\\n- [Git](https://git-scm.com/) installed.\\n\\n## Setup the project\\n\\nThe project we will clone is the Spring Petclinic sample appication in Kotlin. You can find the repository [here](https://github.com/spring-petclinic/spring-petclinic-kotlin).\\n\\nNow let\'s get the project by running the following command:\\n\\n```sh\\ngit clone https://github.com/spring-petclinic/spring-petclinic-kotlin.git\\n```\\n\\nThe project is now ready, let\'s run it locally with Docker !\\n\\n## Run the application locally\\n\\nFirst of all, you need to launch the Docker app on your system.\\n\\n### Build the image\\n\\nBefore being able to run the application, we need to build the image. The project has already a ready to use Dockerfile, so we just need to run the following command inside the project directory:\\n\\n```sh\\n# the `--tag` option is used to name the image.\\ndocker build . --tag spring-petclinic-kotlin\\n```\\n\\nI got some error on a Mac M1 chip:\\n\\n![Error docker build](./error-docker-build.png)\\n\\nIf you encountered the same issue, you can modify the Dockerfile like this:\\n\\n```dockerfile\\nFROM gradle:7.4.1 AS build\\nCOPY --chown=gradle:gradle . /home/gradle/src\\nWORKDIR /home/gradle/src\\nRUN gradle build\\n\\nFROM openjdk:8-jre-slim\\nEXPOSE 8080\\nCOPY --from=build /home/gradle/src/build/libs/spring-petclinic-kotlin-2.6.2.jar /app/\\nRUN bash -c \'touch /app/spring-petclinic-kotlin-2.6.2.jar\'\\nENTRYPOINT [\\"java\\", \\"-XX:+UnlockExperimentalVMOptions\\", \\"-XX:+UseCGroupMemoryLimitForHeap\\", \\"-Djava.security.egd=file:/dev/./urandom\\",\\"-jar\\",\\"/app/spring-petclinic-kotlin-2.6.2.jar\\"]\\n```\\n\\nThose modifications include:\\n\\n- changing the gradle image\\n- changing the name of the jar built by gradle\\n\\nNow the image is ready to be run.\\n\\n### Run the image\\n\\nYou can run this docker image using the docker application directly or with the command:\\n\\n```sh\\ndocker run -p 8080:8080 spring-petclinic-kotlin\\n```\\n\\nThe application is now running on [localhost:8080](http://localhost:8080), you can now access it in your browser. It should look like:\\n\\n![Petclinic app](./petclinic-app.png)\\n\\nLet\'s deploy it !\\n\\n## Account creation and resource selection\\n\\nTo deploy this server on ScaleDynamics\'s cloud, you need an account and create an environment with a resource for it. The cloud resource provides virtual CPU and storage capacities used to execute the app. In this tutorial we will use a free shared resource available on ScaleDynamics\u2019s cloud. These are the best one for testing. In this tutorial we will see later how you can upgrade to a dedicated production resource on the public cloud provider and region of your choice.\\n\\nIf you don\'t have an account, feel free to create one [here](https://console.scaledynamics.com/auth/signup/) (it\'s free and no credit card are required). Once your account is created, sign in.\\n\\nLet\'s create a project and an environment on the ScaleDynamics\'s [console](https://scaledynamics.com/console). Select your organization, create a new project, then create a new environment. Now we need to choose what kind of service we need for our deployment. There are four types:\\n\\n- managed HTTP docker\\n- managed Node.js server\\n- managed Node.js module\\n- static assets hosting\\n\\nFor our application, we use docker to run it. Let\'s pick the managed HTTP docker. You can learn more on the other types in the [ScaleDynamics documentation](https://docs.scaledynamics.com/).\\n\\n![Environment creation](./env-creation.gif)\\n\\n## Deploy the application\\n\\nThe environment has the resource needed, let\'s deploy on it.\\n\\n### Login\\n\\nLog into your account and select your organization via the prompt:\\n\\n```shell\\nnpx warp login\\n```\\n\\n### Deploy\\n\\nFinally, we can run the deployment command:\\n\\n```shell\\nnpx warp deploy\\n```\\n\\nYou can see that the Dockerfile was detected by the SDK. You can just follow the prompt, select the project you created, then the environment. The prompt will also ask you for a hostname, you can leave it blank for a random name or use the one you want. Finally, you can select a host. and then it will do it\'s magic.\\n\\nThis command will dump something like this:\\n\\n![Deployment output](./deploy-dump.png)\\n\\nYou can now open your browser and go to the URL and TADA ! Your application is live !\\n\\n## Go further\\n\\nThis was a simple example of deploying a simple application with docker on the ScaleDynamics Platform. You can pretty much go with any other language, framework or library you want to use.\\n\\nIf you are interested in CI/CD, there is a tutorial on how to implement it [here](https://docs.scaledynamics.com/blog/nest-github-actions).\\n\\nEnjoy !"},{"id":"drupal-on-docker","metadata":{"permalink":"/blog/drupal-on-docker","source":"@site/blog/2022-03-09-drupal-on-docker/index.md","title":"How to deploy Drupal on cloud with Docker","description":"Drupal is an open source content management platform powering millions of websites and applications.","date":"2022-03-09T00:00:00.000Z","formattedDate":"March 9, 2022","tags":[{"label":"Drupal","permalink":"/blog/tags/drupal"},{"label":"Docker","permalink":"/blog/tags/docker"},{"label":"cloud","permalink":"/blog/tags/cloud"},{"label":"ScaleDynamics","permalink":"/blog/tags/scale-dynamics"},{"label":"deploy","permalink":"/blog/tags/deploy"}],"readingTime":6.065,"truncated":true,"authors":[{"name":"Nicolas Pennec","title":"Full Stack Engineer @ ScaleDynamics","key":"nico"}],"frontMatter":{"slug":"drupal-on-docker","title":"How to deploy Drupal on cloud with Docker","authors":["nico"],"tags":["Drupal","Docker","cloud","ScaleDynamics","deploy"]},"prevItem":{"title":"Deploy a Spring Boot Kotlin application with Docker","permalink":"/blog/spring-kotlin-petclinic"},"nextItem":{"title":"CI/CD with a simple NestJS server","permalink":"/blog/nest-github-actions"}},"content":"Drupal is an open source content management platform powering millions of websites and applications.\\nWe will see how you can easily deploy a simple Drupal website on Docker to the cloud with ScaleDynamics.\\n\\n\x3c!--truncate--\x3e\\n\\n## Introduction\\n\\n[Drupal](https://www.drupal.org/) is one of the most popular CMS (Content Management Software).\\nBuild with [PHP](https://www.php.net/), It is a versatile open source platform for building amazing digital experiences.\\nDrupal is used to make many of the websites and applications you use every day, see the [official showcases](https://www.drupal.com/showcases).\\n\\n![Drupal logo](./drupal-logo.png)\\n\\nDrupal has great standard features, like easy content authoring, reliable performance, and excellent security.\\nBut what sets it apart is its flexibility; modularity is one of its core principles.\\n\\n\x3c!-- ## Goals --\x3e\\n\\n## Prerequisites\\n\\nTo follow this tutorial, we will need:\\n\\n- Node.js <= 12, we recommend to install the [latest LTS version](https://nodejs.org/en/download/)\\n- Basic knowledge of [Docker](https://www.docker.com/), and more specifically about [Dockerfile](https://docs.docker.com/engine/reference/builder/)\\n\\n## Init your Drupal application\\n\\nFrom your terminal, start by creating a new folder named `drupal-app` and change directory into it:\\n\\n```shell\\nmkdir drupal-app\\ncd drupal-app\\n```\\n\\nThen create a new file named `Dockerfile` and paste the following code into it, in order to build you container from an [official image of Drupal](https://hub.docker.com/_/drupal) downloaded from [Docker Hub](https://hub.docker.com/):\\n\\n```dockerfile title=\\"drupal-app/Dockerfile\\"\\nFROM drupal:latest\\nEXPOSE 80\\n```\\n\\nIn this configuration, we have chosen the official Drupal image with the `latest` tag. For a production use case, we recommend setting a stable version with a specified number, like `drupal:9.3` for example.\\n\\n## Configure your cloud deployment\\n\\nThe application is ready, now let\'s look at the deployment part.\\n\\n### Account creation and resource selection\\n\\nTo deploy this application on ScaleDynamics\'s cloud, you need an account and create an environment with a resource for it. The cloud resource provides virtual CPU and storage capacities used to execute the app. In this tutorial we will use a free shared resource available on ScaleDynamics\u2019s cloud. These are the best one for testing. In this tutorial we will see later how you can upgrade to a dedicated production resource on the public cloud provider and region of your choice.\\n\\nIf you don\'t have an account, feel free to create one [here](https://console.scaledynamics.com/auth/signup/) (it\'s free and no credit card are required). Once your account is created, sign in.\\n\\nLet\'s create a project and an environment on the ScaleDynamics\'s [Console](https://scaledynamics.com/console). Select your organization, create a new project, then create a new environment. Now you need to choose what kind of service is required for your deployment. There are four types:\\n\\n- Managed HTTP Docker\\n- Managed Node.js server\\n- Managed Node.js module\\n- Static assets hosting\\n\\nFor this Drupal project, we need a Docker container to run the PHP server. Let\'s pick the **managed HTTP Docker**. You can learn more on the other types in the [ScaleDynamics documentation](https://docs.scaledynamics.com/).\\n\\n![Environment creation](../assets/create-env-deploy.gif)\\n\\n### Configuration file\\n\\nNow let\'s add a configuration to tell the SDK what type of application we want to deploy.  \\nAt the root of the project, create a new file named `warp.config.js` with the following content:\\n\\n```js title=\\"drupal-app/warp.config.js\\"\\nmodule.exports = {\\n  docker: \\"drupal-app\\",\\n};\\n```\\n\\n## Deploy your Drupal container\\n\\nNext to deploy your container on the ScaleDynamics platform, you have to use the CLI from SDK.\\n\\n### Install SDK\\n\\nFirst, install once our public SDK called [`warp`](https://www.npmjs.com/package/warp) and available on the official npm registry: https://www.npmjs.com/package/warp\\n\\nInstall the library as development dependency in your project:\\n\\n```shell\\nnpm init -y\\nnpm install --save-dev warp\\n```\\n\\nOr, install it as an npm global dependency on your system:\\n\\n```shell\\nnpm install -g warp\\n```\\n\\nFor the next steps, we will use the `npx` command to run each `warp` command.  \\nThe `npx` command allows you to run an arbitrary command from an npm package (either one installed locally, or fetched remotely), in a similar context as running it via `npm run`.\\n\\nIf you need help on the `warp` CLI, just run the help command as below:\\n\\n```shell\\nnpx warp --help\\n```\\n\\nSee more about [SDK installation](https://docs.scaledynamics.com/docs/installation) and its use in the ScaleDynamics documentation.\\n\\n### Login to ScaleDynamics\\n\\nFor the first time, you must login to the ScaleDynamics platform. So run once the `warp login` command to enter your account credentials:\\n\\n```shell\\nnpx warp login\\n```\\n\\nNote that the prompt will ask you to select an organization, only if you have more than one!\\n\\n### Run deployment\\n\\nNow it\'s time to deploy your awesome Drupal project on your managed cloud resource.\\n\\nTo achieve that step, you just need to run the `warp deploy` simple command line:\\n\\n```shell\\nnpx warp deploy\\n```\\n\\nThe deploy command will detect that your application needs to be deployed as Docker resource. The interactive mode will ask you to pick a project and an environnement, in order to deploy your Drupal container on cloud. Then you will have to choose a domain name as public URL. Leave blank if you want a generate random one.\\n\\n![npx deploy](./npx-deploy.png)\\n\\nYour Drupal container is now deployed and ready to use from the returned public URL! On the next step, you will have to configure your Drupal website.\\n\\nIn addition, you can automate your deployment and avoid interactive mode with the following options. It can be useful to run that operation from your [CI/CD pipeline](https://docs.scaledynamics.com/docs/advanced-usage/cicd) by example.\\n\\n```shell\\nnpx warp deploy --project <project-name> --env <env-name>\\n```\\n\\nSee more about `warp deploy` command in the [SDK documentation](https://docs.scaledynamics.com/docs/sdk/cli#deploy)\\n\\n## Setup your Drupal website\\n\\nOpen your browser, go the URL of your managed Docker resource that now serves your Drupal container and start the setup \\"set-by-step\\" of your website.\\n\\nThe first load will show you the Drupal interactive initial setup. First, pick your language on form and continue.\\n\\n![drupal setup step 1](./drupal-setup-1.png)\\n\\nThen select the \\"**Demo: Umami Food Magazine**\\" as current installation profile. This option will generate a ready-to-use website sample built from the Drupal CMS that show off some of its most common capabilities. If you are already familiar with the Drupal platform, choose a \\"Standard\\" or \\"Minimal\\" profile according to your needs.\\n\\n![drupal setup step 2](./drupal-setup-2.png)\\n\\nNext step, select the \\"**SQLite**\\" database for this sample and set your admin password. For production usage, we recommend using an external database, like MySQL or PostgreSQL. You can easily find a DBaaS (Database-as-a-Service) provider to host your data.\\n\\n![drupal setup step 3](./drupal-setup-3.png)\\n\\nFinally step, just wait for the complete installation...\\n\\n![drupal setup step 4](./drupal-setup-4.png)\\n\\nWell done! Your new Drupal website is now live on the cloud provider of your choice.\\n\\n![drupal website homepage](./drupal-homepage.png)\\n\\nYou can go in the \\"**Log in**\\" section of your published website, enter your admin credentials and try the awesome features offered by the Drupal platform \ud83d\ude80\\n\\n![drupal website homepage](./drupal-admin.png)\\n\\nNote that you can easily import, export, and synchronize your Drupal configuration from the administration page. See details on the [Drupal documentation](https://www.drupal.org/docs/configuration-management/managing-your-sites-configuration).\\n\\n## Go further with dedicated resources\\n\\nIf you need a powerful resource with more vCPU, RAM or storage to host your production server, you can upgrade dynamically to a dedicated resource from your [ScaleDynamics Console](https://console.scaledyn.com/). As shown below it\'s as simple as a few clicks.\\n\\n![Upgrade to dedicated](../assets/upgrade-resources.gif)\\n\\n## What\u2019s next\\n\\nAt this stage, you have an awesome Drupal website published on cloud with Docker.\\n\\nYou can learn more on the [ScaleDynamics documentation](https://docs.scaledynamics.com/), like how to get the logs of your server, use a custom domain, implement a CI/CD pipeline, etc.\\n\\nEnjoy!"},{"id":"nest-github-actions","metadata":{"permalink":"/blog/nest-github-actions","source":"@site/blog/2022-02-28-nest-github-actions/index.mdx","title":"CI/CD with a simple NestJS server","description":"In this tutorial, we will see how we can make a CI/CD (Continuous Integration and Continuous Delivery) script with GitHub Actions and a simple NestJS server.","date":"2022-02-28T00:00:00.000Z","formattedDate":"February 28, 2022","tags":[{"label":"NestJS","permalink":"/blog/tags/nest-js"},{"label":"SSR","permalink":"/blog/tags/ssr"},{"label":"cloud","permalink":"/blog/tags/cloud"},{"label":"ScaleDynamics","permalink":"/blog/tags/scale-dynamics"},{"label":"deploy","permalink":"/blog/tags/deploy"}],"readingTime":6.785,"truncated":true,"authors":[{"name":"Cl\xe9ment Poisson","title":"Full Stack Engineer @ ScaleDynamics","key":"clem"}],"frontMatter":{"slug":"nest-github-actions","title":"CI/CD with a simple NestJS server","authors":["clem"],"tags":["NestJS","SSR","cloud","ScaleDynamics","deploy"]},"prevItem":{"title":"How to deploy Drupal on cloud with Docker","permalink":"/blog/drupal-on-docker"},"nextItem":{"title":"Deploy a Next.js SSR application","permalink":"/blog/next-js-ssr"}},"content":"In this tutorial, we will see how we can make a CI/CD (Continuous Integration and Continuous Delivery) script with GitHub Actions and a simple NestJS server.\\n\\n\x3c!--truncate--\x3e\\n\\n## Introduction\\n\\n[NestJS](https://nestjs.com/) is a Framework for building Node.js server side application. It is built with TypeScript and use Express or Fastify HTTP server framework under the hood. It\'s architecture is heavily inspired by Angular. It integrates a lot of features and is very easy to use.\\n\\n[GitHub Actions](https://github.com/features/actions) is GitHub take on CI/CD. It allows you to automate your build process and deploy your code directly from your GitHub repository.\\n\\n## Goals\\n\\nOur goal is to create a simple NestJS server with the Nest CLI, deploy it using ScaleDynamics cloud platform and then automate it with GitHub Actions. We\'ll learn how you can use GitHub Actions to deploy with the ScaleDynamics platform.\\n\\n## Prerequisites\\n\\nTo follow along, you will need:\\n\\n- A [GitHub](https://github.com/) account and a repository ready to be used with GitHub Actions.\\n- Knowledge of [Git](https://git-scm.com/) and have it installed on your machine.\\n- Node.js and yarn / npm installed. You can go [here](https://nodejs.org/en/download/) to download the latest version of Node.js and npm.\\n\\n## Creating the project\\n\\nTo create the project, we can use the [Nest CLI](https://docs.nestjs.com/#installation) or clone a project starter from GitHub:\\n\\n```shell\\nnpm i -g @nestjs/cli\\nnest new my-server\\n```\\n\\nor\\n\\n```shell\\ngit clone https://github.com/nestjs/typescript-starter.git my-server\\n```\\n\\nMove into the project folder:\\n\\n```shell\\ncd my-server\\n```\\n\\nYou can test if the project is working locally by running:\\n\\n```shell\\nnpm run start\\n```\\n\\nYou can check you receive `Hello World!` by running:\\n\\n```shell\\ncurl localhost:3000\\n```\\n\\nNow that we saw the project working, we just need to make a change in the scripts of the `package.json` file. When the server is deployed with ScaleDynamics, the server is started with the `start`command. We will change it so it launch the server in production mode by default and not in dev mode.\\n\\n```json\\n// package.json\\n\\"scripts\\": {\\n    \\"prebuild\\": \\"rimraf dist\\",\\n    \\"build\\": \\"nest build\\",\\n    \\"format\\": \\"prettier --write \\\\\\"src/**/*.ts\\\\\\" \\\\\\"test/**/*.ts\\\\\\"\\",\\n    \\"dev\\": \\"nest start\\",\\n    \\"dev:watch\\": \\"nest start --watch\\",\\n    \\"dev:debug\\": \\"nest start --debug --watch\\",\\n    \\"start\\": \\"node dist/main\\",\\n    \\"lint\\": \\"eslint \\\\\\"{src,apps,libs,test}/**/*.ts\\\\\\" --fix\\",\\n    \\"test\\": \\"jest\\",\\n    \\"test:watch\\": \\"jest --watch\\",\\n    \\"test:cov\\": \\"jest --coverage\\",\\n    \\"test:debug\\": \\"node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand\\",\\n    \\"test:e2e\\": \\"jest --config ./test/jest-e2e.json\\"\\n  },\\n```\\n\\nEverything is ready to be deployed !\\n\\n## Account creation and ressource selection\\n\\nTo deploy this server on ScaleDynamics\'s cloud, you need an account and create an environment with a ressource for it. The cloud resource provides virtual CPU and storage capacities used to execute the app. In this tutorial we will use a free shared resource available on ScaleDynamics\u2019s cloud. These are the best one for testing. In this tutorial we will see later how you can upgrade to a dedicated production resource on the public cloud provider and region of your choice.\\n\\nIf you don\'t have an account, feel free to create one [here](https://console.scaledynamics.com/auth/signup/) (it\'s free and no credit card are required). Once your account is created, sign in.\\n\\nLet\'s create a project and an environment on the ScaleDynamics\'s [console](https://scaledynamics.com/console). Select your organization, create a new project, then create a new environmnent. Now we need to choose what kind of service we need for our deployment. There are four types:\\n\\n- managed HTTP docker\\n- managed Node.js server\\n- managed Node.js module\\n- static assets hosting\\n\\nFor our NestJS server, we need a (surprise) server. Let\'s pick the managed Node.js server. You can learn more on the other types in the [ScaleDynamics documentation](https://docs.scaledynamics.com/).\\n\\n![Environment creation](../assets/create-env-deploy.gif)\\n\\n## Deployment\\n\\nThe environment is ready to run our application, let\'s deploy on it.\\n\\n### Configuration file\\n\\nFirst, let\'s add a configuration to tell the SDK what type of application we want to deploy. At the root of the project, create a `warp.config.js` file:\\n\\n```javascript\\n// warp.config.js\\nmodule.exports = {\\n  server: \\"nest\\",\\n};\\n```\\n\\n### Build\\n\\nBuild the project to let Nest compile TypeScript and optimize and bundle everything for us:\\n\\n```shell\\nyarn build\\n```\\n\\n### Login\\n\\nLog into your account and select your organization via the prompt:\\n\\n```shell\\nnpx warp login\\n```\\n\\n### Deploy\\n\\nFinally, we can run the deployment command:\\n\\n```shell\\nnpx warp deploy\\n```\\n\\nThis command will dump something like this:\\n\\n![Deploy dump](./deploy-dump-nest.png)\\n\\nYou can see that a server was detected from your configuration file. Now follow the prompt, select the project you created, then the environment. The prompt will also ask you for a hostname, you can leave it blank for a random name or use the one you want. Finally, you can select a host.\\n\\nThe deployment will be done in a few minutes. At the end, the command will dump something like this:\\n\\n![Deploy end dump](./deploy-end-dump.png)\\n\\nYou can now open test it by visiting the URL dumped or doing a curl request.\\n\\n## Automation with GitHub Actions\\n\\nTo simplify and automate this process, let\'s use GitHub Actions.\\n\\n### Create a GitHub repository\\n\\nBefore we can automate the process, you need to create a GitHub repository and upload the project there.\\nYou can learn more about it on the [GitHub documentation](https://docs.github.com/).\\n\\n### Define our workflow\\n\\nNow let\'s think about what workflow we want to automate. Our final goal is to deploy our server, but before deploying, we need to check the quality of the code, test it, build the project and finally deploy it. For this example there will be four steps:\\n\\n- Lint our code with ESLint\\n- Test our code with Jest\\n- Build our project\\n- Deploy it\\n\\nThe NestJS startup project we use got everything to do so.\\n\\n### Create the workflow\\n\\nLet\'s create a new workflow by creating a new folder at the root of the project called `.github` and an other folder inside called `workflows`. Inside `workflows`, create a `main.yml` file and copy this code:\\n\\n```yml\\nname: Deploy\\n\\n# Controls when the workflow will run\\non:\\n  # Allows you to run this workflow manually from the Actions tab\\n  workflow_dispatch:\\n\\n# A workflow run is made up of one or more jobs that can run sequentially or in parallel\\njobs:\\n  deploy:\\n    name: Deploy\\n    runs-on: ubuntu-latest\\n    env:\\n      # replace with your project/env name\\n      ORG_PROJECT: nest-test\\n      DEPLOY_ENV: dev\\n    # Steps represent a sequence of tasks that will be executed as part of the job\\n    steps:\\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\\n      - uses: actions/checkout@v2\\n\\n      - name: Install dependencies\\n        run: yarn\\n\\n      - name: Lint the codebase\\n        run: yarn lint\\n\\n      - name: Test our code\\n        run: yarn test\\n\\n      - name: Build\\n        run: yarn build\\n\\n      - name: Login\\n        run: npx warp login --api-key=${{ secrets.SD_API_KEY }}\\n\\n      - name: Deploy\\n        run: npx warp deploy --project ${ORG_PROJECT} --env ${DEPLOY_ENV}\\n```\\n\\n### API key for login\\n\\nYour workflow is ready, but for the login step, we need an API key to authenticate with ScaleDynamics. This API key can be created on the [ScaleDynamics console](https://console.scaledynamics.com):\\n\\n![API key creation](../assets/create-api-key.gif)\\n\\nOnce your API key is created, we can create a secret in your repository so we can use it in our workflow:\\n\\n![GitHub secret creation](./github-secret.png)\\n\\n### Test it\\n\\nNow you can try it by going into the Actions tab on your repository and trigger the workflow:\\n\\n![Trigger workflow](./actions-trigger-workflow.png)\\n\\nThe workflow will run and you will be able to see the job `deploy`. Click on it and you can see all the steps that are executed. At the end if all go well you should have something like:\\n\\n![Workflow results](./workflow-results.png)\\n\\nIf there is an error along the way you will be able to easily spot it and fix it.\\n\\n## Go further\\n\\nThis was a simple example of setting up CI/CD to deploy an server with ScaleDynamics, but you can do way more things with it. For exemple, you could lint the code on every commit to ensure styling coherence and ensure no mistake are present in your codebase, or you could deploy you code in preproduction at every commit on a branch `preprod`. The sky is the limit.\\n\\nIf you want to know more, I encourage you to read this [JetBrains guide](https://www.jetbrains.com/teamcity/ci-cd-guide/). It\'s related to their TeamCity CI/CD platform but they perfectly explain the principles and what you can do with CI/CD in general.\\n\\nEnjoy !"},{"id":"next-js-ssr","metadata":{"permalink":"/blog/next-js-ssr","source":"@site/blog/2022-02-10-next-js-srr/index.mdx","title":"Deploy a Next.js SSR application","description":"In this tutorial, we will see how you can deploy a simple server side rendered Next.js application on ScaleDynamics.","date":"2022-02-10T00:00:00.000Z","formattedDate":"February 10, 2022","tags":[{"label":"Next.js","permalink":"/blog/tags/next-js"},{"label":"SSR","permalink":"/blog/tags/ssr"},{"label":"cloud","permalink":"/blog/tags/cloud"},{"label":"ScaleDynamics","permalink":"/blog/tags/scale-dynamics"},{"label":"deploy","permalink":"/blog/tags/deploy"}],"readingTime":6.445,"truncated":true,"authors":[{"name":"Cl\xe9ment Poisson","title":"Full Stack Engineer @ ScaleDynamics","key":"clem"}],"frontMatter":{"slug":"next-js-ssr","title":"Deploy a Next.js SSR application","authors":["clem"],"tags":["Next.js","SSR","cloud","ScaleDynamics","deploy"]},"prevItem":{"title":"CI/CD with a simple NestJS server","permalink":"/blog/nest-github-actions"}},"content":"In this tutorial, we will see how you can deploy a simple server side rendered Next.js application on ScaleDynamics.\\n\\n\x3c!--truncate--\x3e\\n\\n## Introduction\\n\\nNext.js is a powerful React framework for building production ready applications that provides built-in features like routing, hot reload, or static generation, that ease the development. In this tutorial we focus on the Server Side Rendering (SSR) feature. Using SSR, the server is in charge of rendering the pages on each request. SSR is ideal for SEO, because search engines can easily index and crawl content because it can be rendered before the page is loaded.\\n\\n## Goals\\n\\nOur goal is to create a simple Next.js application using SSR and TypeScript, and deploy it using ScaleDynamics cloud platform that provides free cloud resources for testing. We\'ll learn how simple it is to configure your cloud resource and deploy your application.\\n\\n## Prerequisites\\n\\nTo follow along, you will need:\\n\\n- Basic knowledge of Javascript / TypeScript\\n- Basic knowledge of [React](https://reactjs.org/) and [Next.js](https://nextjs.org/)\\n- Node.js and yarn / npm installed. You can go [here](https://nodejs.org/en/download/) to download the latest version of Node.js and npm.\\n\\n## Building the app\\n\\nLet\'s use [Next.js CLI](https://nextjs.org/docs/api-reference/create-next-app) to create an app called `next-ssr`:\\n\\n```shell\\n# you can remove --typescript if you want only Javascript\\n# just ignore the typing in the following of the tutorial\\nyarn create next-app --typescript\\n```\\n\\nTo fill our app with some fake data, let\'s install [`axios`](https://axios-http.com/) to fetch them:\\n\\n```shell\\nyarn add axios\\n```\\n\\nWe will use [JSONPlaceholder](https://jsonplaceholder.typicode.com/) to provide some fake user data.\\n\\nTo activate the SSR, we need to use a specific function called `getServerSideProps` and add it to our main page. So let\'s rewrite our `pages/index.tsx` file:\\n\\n```typescript\\n// pages/index.tsx\\nimport axios from \\"axios\\";\\nimport type { GetServerSideProps, NextPage } from \\"next\\";\\nimport Head from \\"next/head\\";\\nimport styles from \\"../styles/Home.module.css\\";\\n\\ntype HomeProps = {\\n  users: User[];\\n};\\n\\nconst Home = ({ users }: HomeProps): JSX.Element => {\\n  return (\\n    <div className={styles.container}>\\n      <Head>\\n        <title>Next SSR with ScaleDynamics</title>\\n        <meta name=\\"description\\" content=\\"Simple SSR app deploy with ScaleDynamics platform\\" />\\n        <link rel=\\"icon\\" href=\\"/favicon.ico\\" />\\n      </Head>\\n\\n      <main className={styles.main}>\\n        <h1 className={styles.title}>Welcome to my SSR App</h1>\\n        <pre>{JSON.stringify(users, null, 2)}</pre>\\n      </main>\\n    </div>\\n  );\\n};\\n\\nexport const getServerSideProps: GetServerSideProps = async () => {\\n  const { data } = await axios.get(\\"https://jsonplaceholder.typicode.com/users\\");\\n\\n  return {\\n    props: {\\n      users: data,\\n    },\\n  };\\n};\\n\\nexport default Home;\\n```\\n\\nYou will probably get an error from your IDE concerning the type User. Create a folder name `domain` and add a file called `user.d.ts`:\\n\\n```typescript\\n// domain/user.d.ts\\ntype User = {\\n  id: number;\\n  name: string;\\n  username: string;\\n  email: string;\\n  address: {\\n    street: string;\\n    suite: string;\\n    city: string;\\n    zipcode: string;\\n    geo: {\\n      lat: string;\\n      lng: string;\\n    };\\n  };\\n  phone: string;\\n  website: string;\\n  company: {\\n    name: string;\\n    catchPhrase: string;\\n    bs: string;\\n  };\\n};\\n```\\n\\nNow we can see the result by running the application in dev mode:\\n\\n```shell\\nyarn dev\\n```\\n\\nYou should optain:\\n\\n![First view](./first-view-app.png)\\n\\nCool! So now we are fetching data but we are displaying them as JSON data using the `JSON.stringify` function. Let\'s make that a bit prettier with a component and some css.\\n\\nCreate a folder called `components` and two files:\\n\\n```typescript\\n// components/user.tsx\\nimport styles from \\"./user.module.css\\";\\n\\ntype UserProps = {\\n  user: User;\\n};\\n\\nconst User = ({ user }: UserProps): JSX.Element => {\\n  return (\\n    <div className={styles.container}>\\n      <div className={styles.infos}>\\n        <span>Name: {user.name}</span>\\n        <span>Username: {user.username}</span>\\n        <span>Email: {user.email}</span>\\n        <span>Phone: {user.phone}</span>\\n      </div>\\n      <div className={styles.address}>\\n        <span>Street: {user.address.street}</span>\\n        <span>Suit: {user.address.suite}</span>\\n        <span>City: {user.address.city}</span>\\n        <span>Zipcode: {user.address.zipcode}</span>\\n      </div>\\n    </div>\\n  );\\n};\\n\\nexport default User;\\n```\\n\\n```css\\n/* user.module.css */\\n.container {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: flex-start;\\n  padding: 0;\\n  margin: 0;\\n  background-color: #fafafa;\\n  border: 1px solid #e0e0e0;\\n  border-radius: 4px;\\n  padding: 10px;\\n  margin: 10px;\\n  width: 500px;\\n  max-width: 500px;\\n}\\n\\n.infos {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  justify-content: flex-start;\\n  padding: 10px;\\n  margin: 0;\\n  width: 100%;\\n}\\n\\n.address {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  justify-content: flex-start;\\n  padding: 10px;\\n  margin: 0;\\n  width: 100%;\\n}\\n```\\n\\nNow we need to modify our `pages/index.tsx` file to use our brand new component:\\n\\n```typescript\\n// pages/index.tsx\\nimport axios from \\"axios\\";\\nimport type { GetServerSideProps } from \\"next\\";\\nimport Head from \\"next/head\\";\\nimport styles from \\"../styles/Home.module.css\\";\\nimport User from \\"../components/user/user\\";\\n\\ntype HomeProps = {\\n  users: User[];\\n};\\n\\nconst Home = ({ users }: HomeProps): JSX.Element => {\\n  const usersDisplay = users.map((user: User): JSX.Element => <User key={user.id} user={user} />);\\n\\n  return (\\n    <div className={styles.container}>\\n      <Head>\\n        <title>Next SSR with ScaleDynamics</title>\\n        <meta name=\\"description\\" content=\\"Simple SSR app deploy with ScaleDynamics platform\\" />\\n        <link rel=\\"icon\\" href=\\"/favicon.ico\\" />\\n      </Head>\\n\\n      <main className={styles.main}>\\n        <h1 className={styles.title}>Welcome to my SSR App</h1>\\n        {usersDisplay}\\n      </main>\\n    </div>\\n  );\\n};\\n\\nexport const getServerSideProps: GetServerSideProps = async () => {\\n  const users = await (await axios.get(\\"https://jsonplaceholder.typicode.com/users\\")).data;\\n\\n  return {\\n    props: {\\n      users,\\n    },\\n  };\\n};\\n\\nexport default Home;\\n```\\n\\nWith the dev mode running, the app should look like this:\\n\\n![Finished view](./finished-view-app.png)\\n\\nThe application is ready, now let\'s look at the deployment part !\\n\\n## Account creation and ressource selection\\n\\nTo deploy this application on ScaleDynamics\'s cloud, you need an account and create an environment with a ressource for it. The cloud resource provides virtual CPU and storage capacities used to execute the app. In this tutorial we will use a free shared resource available on ScaleDynamics\u2019s cloud. These are the best one for testing. In this tutorial we will see later how you can upgrade to a dedicated production resource on the public cloud provider and region of your choice.\\n\\nIf you don\'t have an account, feel free to create one [here](https://console.scaledynamics.com/auth/signup/) (it\'s free and no credit card are required). Once your account is created, sign in.\\n\\nLet\'s create a project and an environment on the ScaleDynamics\'s [console](https://scaledynamics.com/console). Select your organization, create a new project, then create a new environmnent. Now we need to choose what kind of service we need for our deployment. There are four types:\\n\\n- managed HTTP docker\\n- managed Node.js server\\n- managed Node.js module\\n- static assets hosting\\n\\nFor our Next.js server side rendered, we need a server. Let\'s pick the managed Node.js server. You can learn more on the other types in the [ScaleDynamics documentation](https://docs.scaledynamics.com/).\\n\\n![Environment creation](../assets/create-env-deploy.gif)\\n\\n## Deployment\\n\\nThe environment is ready to run our application, let\'s deploy on it.\\n\\n### Configuration file\\n\\nFirst, let\'s add a configuration to tell the SDK what type of application we want to deploy. At the root of the project, create a `warp.config.js` file:\\n\\n```javascript\\n// warp.config.js\\nmodule.exports = {\\n  server: \\"next-ssr\\",\\n};\\n```\\n\\n### Build\\n\\nBuild the project to let Next optimize and bundle everything for us:\\n\\n```shell\\nyarn build\\n```\\n\\n### Login\\n\\nLog into your account and select your organization via the prompt:\\n\\n```shell\\nnpx warp login\\n```\\n\\n### Deploy\\n\\nFinally, we can run the deployment command:\\n\\n```shell\\nnpx warp deploy ./\\n```\\n\\nThis command will dump something like this:\\n\\n![Deploy dump](./deploy-dump-next.png)\\n\\nYou can see that a server was detected from your configuration file. Now follow the prompt, select the project you created, then the environment. The prompt will also ask you for a hostname, you can leave it blank for a random name or use the one you want. Finally, you can select a host.\\n\\nThe deployment will be done in a few minutes. At the end, the command will dump something like this:\\n\\n![Deploy end dump](./deploy-end-dump.png)\\n\\nYou can now open your browser and go to the URL and TADA ! Your Next.js application is live !\\n\\n## Go further: dedicated resources\\n\\nIf you want to use dedicated resources, you can upgrade dynamically to a non shared resource. As shown below it\'s as simple as a few mouse clicks.\\n\\n![Upgrade to dedicated](../assets/upgrade-resources.gif)\\n\\n## Next steps\\n\\nAt this stage, you have a fully functional application. You can learn more on the ScaleDynamics [documentation](https://docs.scaledynamics.com/), like how to get the logs of your server, use a custom domain, implement a CI/CD pipeline, etc.\\n\\nEnjoy !"}]}')}}]);