"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"nest-github-actions","metadata":{"permalink":"/blog/nest-github-actions","source":"@site/blog/2022-02-28-nest-github-actions/index.mdx","title":"CI/CD with a simple NestJS server","description":"In this tutorial, we will see how we can make a CI/CD (Continuous Integration and Continuous Delivery) script with GitHub Actions and a simple NestJS server.","date":"2022-02-28T00:00:00.000Z","formattedDate":"February 28, 2022","tags":[{"label":"NestJS","permalink":"/blog/tags/nest-js"},{"label":"SSR","permalink":"/blog/tags/ssr"},{"label":"cloud","permalink":"/blog/tags/cloud"},{"label":"ScaleDynamics","permalink":"/blog/tags/scale-dynamics"},{"label":"deploy","permalink":"/blog/tags/deploy"}],"readingTime":6.785,"truncated":true,"authors":[{"name":"Cl\xe9ment Poisson","title":"Full Stack Engineer @ ScaleDynamics","key":"clem"}],"frontMatter":{"slug":"nest-github-actions","title":"CI/CD with a simple NestJS server","authors":["clem"],"tags":["NestJS","SSR","cloud","ScaleDynamics","deploy"]},"nextItem":{"title":"Deploy a Next.js SSR application","permalink":"/blog/next-js-ssr"}},"content":"In this tutorial, we will see how we can make a CI/CD (Continuous Integration and Continuous Delivery) script with GitHub Actions and a simple NestJS server.\\n\\n\x3c!--truncate--\x3e\\n\\n## Introduction\\n\\n[NestJS](https://nestjs.com/) is a Framework for building Node.js server side application. It is built with TypeScript and use Express or Fastify HTTP server framework under the hood. It\'s architecture is heavily inspired by Angular. It integrates a lot of features and is very easy to use.\\n\\n[GitHub Actions](https://github.com/features/actions) is GitHub take on CI/CD. It allows you to automate your build process and deploy your code directly from your GitHub repository.\\n\\n## Goals\\n\\nOur goal is to create a simple NestJS server with the Nest CLI, deploy it using ScaleDynamics cloud platform and then automate it with GitHub Actions. We\'ll learn how you can use GitHub Actions to deploy with the ScaleDynamics platform.\\n\\n## Prerequisites\\n\\nTo follow along, you will need:\\n\\n- A [GitHub](https://github.com/) account and a repository ready to be used with GitHub Actions.\\n- Knowledge of [Git](https://git-scm.com/) and have it installed on your machine.\\n- Node.js and yarn / npm installed. You can go [here](https://nodejs.org/en/download/) to download the latest version of Node.js and npm.\\n\\n## Creating the project\\n\\nTo create the project, we can use the [Nest CLI](https://docs.nestjs.com/#installation) or clone a project starter from GitHub:\\n\\n```shell\\nnpm i -g @nestjs/cli\\nnest new my-server\\n```\\n\\nor\\n\\n```shell\\ngit clone https://github.com/nestjs/typescript-starter.git my-server\\n```\\n\\nMove into the project folder:\\n\\n```shell\\ncd my-server\\n```\\n\\nYou can test if the project is working locally by running:\\n\\n```shell\\nnpm run start\\n```\\n\\nYou can check you receive `Hello World!` by running:\\n\\n```shell\\ncurl localhost:3000\\n```\\n\\nNow that we saw the project working, we just need to make a change in the scripts of the `package.json` file. When the server is deployed with ScaleDynamics, the server is started with the `start`command. We will change it so it launch the server in production mode by default and not in dev mode.\\n\\n```json\\n// package.json\\n\\"scripts\\": {\\n    \\"prebuild\\": \\"rimraf dist\\",\\n    \\"build\\": \\"nest build\\",\\n    \\"format\\": \\"prettier --write \\\\\\"src/**/*.ts\\\\\\" \\\\\\"test/**/*.ts\\\\\\"\\",\\n    \\"dev\\": \\"nest start\\",\\n    \\"dev:watch\\": \\"nest start --watch\\",\\n    \\"dev:debug\\": \\"nest start --debug --watch\\",\\n    \\"start\\": \\"node dist/main\\",\\n    \\"lint\\": \\"eslint \\\\\\"{src,apps,libs,test}/**/*.ts\\\\\\" --fix\\",\\n    \\"test\\": \\"jest\\",\\n    \\"test:watch\\": \\"jest --watch\\",\\n    \\"test:cov\\": \\"jest --coverage\\",\\n    \\"test:debug\\": \\"node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand\\",\\n    \\"test:e2e\\": \\"jest --config ./test/jest-e2e.json\\"\\n  },\\n```\\n\\nEverything is ready to be deployed !\\n\\n## Account creation and ressource selection\\n\\nTo deploy this server on ScaleDynamics\'s cloud, you need an account and create an environment with a ressource for it. The cloud resource provides virtual CPU and storage capacities used to execute the app. In this tutorial we will use a free shared resource available on ScaleDynamics\u2019s cloud. These are the best one for testing. In this tutorial we will see later how you can upgrade to a dedicated production resource on the public cloud provider and region of your choice.\\n\\nIf you don\'t have an account, feel free to create one [here](https://console.scaledynamics.com/auth/signup/) (it\'s free and no credit card are required). Once your account is created, sign in.\\n\\nLet\'s create a project and an environment on the ScaleDynamics\'s [console](https://scaledynamics.com/console). Select your organization, create a new project, then create a new environmnent. Now we need to choose what kind of service we need for our deployment. There are four types:\\n\\n- managed HTTP docker\\n- managed Node.js server\\n- managed Node.js module\\n- static assets hosting\\n\\nFor our NestJS server, we need a (surprise) server. Let\'s pick the managed Node.js server. You can learn more on the other types in the [ScaleDynamics documentation](https://docs.scaledynamics.com/).\\n\\n![Environment creation](../assets/create-env-deploy.gif)\\n\\n## Deployment\\n\\nThe environment is ready to run our application, let\'s deploy on it.\\n\\n### Configuration file\\n\\nFirst, let\'s add a configuration to tell the SDK what type of application we want to deploy. At the root of the project, create a `warp.config.js` file:\\n\\n```javascript\\n// warp.config.js\\nmodule.exports = {\\n  server: \\"nest\\",\\n};\\n```\\n\\n### Build\\n\\nBuild the project to let Nest compile TypeScript and optimize and bundle everything for us:\\n\\n```shell\\nyarn build\\n```\\n\\n### Login\\n\\nLog into your account and select your organization via the prompt:\\n\\n```shell\\nnpx warp login\\n```\\n\\n### Deploy\\n\\nFinally, we can run the deployment command:\\n\\n```shell\\nnpx warp deploy\\n```\\n\\nThis command will dump something like this:\\n\\n![Deploy dump](./deploy-dump-nest.png)\\n\\nYou can see that a server was detected from your configuration file. Now follow the prompt, select the project you created, then the environment. The prompt will also ask you for a hostname, you can leave it blank for a random name or use the one you want. Finally, you can select a host.\\n\\nThe deployment will be done in a few minutes. At the end, the command will dump something like this:\\n\\n![Deploy end dump](./deploy-end-dump.png)\\n\\nYou can now open test it by visiting the URL dumped or doing a curl request.\\n\\n## Automation with GitHub Actions\\n\\nTo simplify and automate this process, let\'s use GitHub Actions.\\n\\n### Create a GitHub repository\\n\\nBefore we can automate the process, you need to create a GitHub repository and upload the project there.\\nYou can learn more about it on the [GitHub documentation](https://docs.github.com/).\\n\\n### Define our workflow\\n\\nNow let\'s think about what workflow we want to automate. Our final goal is to deploy our server, but before deploying, we need to check the quality of the code, test it, build the project and finally deploy it. For this example there will be four steps:\\n\\n- Lint our code with ESLint\\n- Test our code with Jest\\n- Build our project\\n- Deploy it\\n\\nThe NestJS startup project we use got everything to do so.\\n\\n### Create the workflow\\n\\nLet\'s create a new workflow by creating a new folder at the root of the project called `.github` and an other folder inside called `workflows`. Inside `workflows`, create a `main.yml` file and copy this code:\\n\\n```yml\\nname: Deploy\\n\\n# Controls when the workflow will run\\non:\\n  # Allows you to run this workflow manually from the Actions tab\\n  workflow_dispatch:\\n\\n# A workflow run is made up of one or more jobs that can run sequentially or in parallel\\njobs:\\n  deploy:\\n    name: Deploy\\n    runs-on: ubuntu-latest\\n    env:\\n      # replace with your project/env name\\n      ORG_PROJECT: nest-test\\n      DEPLOY_ENV: dev\\n    # Steps represent a sequence of tasks that will be executed as part of the job\\n    steps:\\n      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it\\n      - uses: actions/checkout@v2\\n\\n      - name: Install dependencies\\n        run: yarn\\n\\n      - name: Lint the codebase\\n        run: yarn lint\\n\\n      - name: Test our code\\n        run: yarn test\\n\\n      - name: Build\\n        run: yarn build\\n\\n      - name: Login\\n        run: npx warp login --api-key=${{ secrets.SD_API_KEY }}\\n\\n      - name: Deploy\\n        run: npx warp deploy --project ${ORG_PROJECT} --env ${DEPLOY_ENV}\\n```\\n\\n### API key for login\\n\\nYour workflow is ready, but for the login step, we need an API key to authenticate with ScaleDynamics. This API key can be created on the [ScaleDynamics console](https://console.scaledynamics.com):\\n\\n![API key creation](../assets/create-api-key.gif)\\n\\nOnce your API key is created, we can create a secret in your repository so we can use it in our workflow:\\n\\n![GitHub secret creation](./github-secret.png)\\n\\n### Test it\\n\\nNow you can try it by going into the Actions tab on your repository and trigger the workflow:\\n\\n![Trigger workflow](./actions-trigger-workflow.png)\\n\\nThe workflow will run and you will be able to see the job `deploy`. Click on it and you can see all the steps that are executed. At the end if all go well you should have something like:\\n\\n![Workflow results](./workflow-results.png)\\n\\nIf there is an error along the way you will be able to easily spot it and fix it.\\n\\n## Go further\\n\\nThis was a simple example of setting up CI/CD to deploy an server with ScaleDynamics, but you can do way more things with it. For exemple, you could lint the code on every commit to ensure styling coherence and ensure no mistake are present in your codebase, or you could deploy you code in preproduction at every commit on a branch `preprod`. The sky is the limit.\\n\\nIf you want to know more, I encourage you to read this [JetBrains guide](https://www.jetbrains.com/teamcity/ci-cd-guide/). It\'s related to their TeamCity CI/CD platform but they perfeclty explain the principles and what you can do with CI/CD in general.\\n\\nEnjoy !"},{"id":"next-js-ssr","metadata":{"permalink":"/blog/next-js-ssr","source":"@site/blog/2022-02-10-next-js-srr/index.mdx","title":"Deploy a Next.js SSR application","description":"In this tutorial, we will see how you can deploy a simple server side rendered Next.js application on ScaleDynamics.","date":"2022-02-10T00:00:00.000Z","formattedDate":"February 10, 2022","tags":[{"label":"Next.js","permalink":"/blog/tags/next-js"},{"label":"SSR","permalink":"/blog/tags/ssr"},{"label":"cloud","permalink":"/blog/tags/cloud"},{"label":"ScaleDynamics","permalink":"/blog/tags/scale-dynamics"},{"label":"deploy","permalink":"/blog/tags/deploy"}],"readingTime":6.445,"truncated":true,"authors":[{"name":"Cl\xe9ment Poisson","title":"Full Stack Engineer @ ScaleDynamics","key":"clem"}],"frontMatter":{"slug":"next-js-ssr","title":"Deploy a Next.js SSR application","authors":["clem"],"tags":["Next.js","SSR","cloud","ScaleDynamics","deploy"]},"prevItem":{"title":"CI/CD with a simple NestJS server","permalink":"/blog/nest-github-actions"}},"content":"In this tutorial, we will see how you can deploy a simple server side rendered Next.js application on ScaleDynamics.\\n\\n\x3c!--truncate--\x3e\\n\\n## Introduction\\n\\nNext.js is a powerful React framework for building production ready applications that provides built-in features like routing, hot reload, or static generation, that ease the development. In this tutorial we focus on the Server Side Rendering (SSR) feature. Using SSR, the server is in charge of rendering the pages on each request. SSR is ideal for SEO, because search engines can easily index and crawl content because it can be rendered before the page is loaded.\\n\\n## Goals\\n\\nOur goal is to create a simple Next.js application using SSR and TypeScript, and deploy it using ScaleDynamics cloud platform that provides free cloud resources for testing. We\'ll learn how simple it is to configure your cloud resource and deploy your application.\\n\\n## Prerequisites\\n\\nTo follow along, you will need:\\n\\n- Basic knowledge of Javascript / TypeScript\\n- Basic knowledge of [React](https://reactjs.org/) and [Next.js](https://nextjs.org/)\\n- Node.js and yarn / npm installed. You can go [here](https://nodejs.org/en/download/) to download the latest version of Node.js and npm.\\n\\n## Building the app\\n\\nLet\'s use [Next.js CLI](https://nextjs.org/docs/api-reference/create-next-app) to create an app called `next-ssr`:\\n\\n```shell\\n# you can remove --typescript if you want only Javascript\\n# just ignore the typing in the following of the tutorial\\nyarn create next-app --typescript\\n```\\n\\nTo fill our app with some fake data, let\'s install [`axios`](https://axios-http.com/) to fetch them:\\n\\n```shell\\nyarn add axios\\n```\\n\\nWe will use [JSONPlaceholder](https://jsonplaceholder.typicode.com/) to provide some fake user data.\\n\\nTo activate the SSR, we need to use a specific function called `getServerSideProps` and add it to our main page. So let\'s rewrite our `pages/index.tsx` file:\\n\\n```typescript\\n// pages/index.tsx\\nimport axios from \\"axios\\";\\nimport type { GetServerSideProps, NextPage } from \\"next\\";\\nimport Head from \\"next/head\\";\\nimport styles from \\"../styles/Home.module.css\\";\\n\\ntype HomeProps = {\\n  users: User[];\\n};\\n\\nconst Home = ({ users }: HomeProps): JSX.Element => {\\n  return (\\n    <div className={styles.container}>\\n      <Head>\\n        <title>Next SSR with ScaleDynamics</title>\\n        <meta name=\\"description\\" content=\\"Simple SSR app deploy with ScaleDynamics platform\\" />\\n        <link rel=\\"icon\\" href=\\"/favicon.ico\\" />\\n      </Head>\\n\\n      <main className={styles.main}>\\n        <h1 className={styles.title}>Welcome to my SSR App</h1>\\n        <pre>{JSON.stringify(users, null, 2)}</pre>\\n      </main>\\n    </div>\\n  );\\n};\\n\\nexport const getServerSideProps: GetServerSideProps = async () => {\\n  const { data } = await axios.get(\\"https://jsonplaceholder.typicode.com/users\\");\\n\\n  return {\\n    props: {\\n      users: data,\\n    },\\n  };\\n};\\n\\nexport default Home;\\n```\\n\\nYou will probably get an error from your IDE concerning the type User. Create a folder name `domain` and add a file called `user.d.ts`:\\n\\n```typescript\\n// domain/user.d.ts\\ntype User = {\\n  id: number;\\n  name: string;\\n  username: string;\\n  email: string;\\n  address: {\\n    street: string;\\n    suite: string;\\n    city: string;\\n    zipcode: string;\\n    geo: {\\n      lat: string;\\n      lng: string;\\n    };\\n  };\\n  phone: string;\\n  website: string;\\n  company: {\\n    name: string;\\n    catchPhrase: string;\\n    bs: string;\\n  };\\n};\\n```\\n\\nNow we can see the result by running the application in dev mode:\\n\\n```shell\\nyarn dev\\n```\\n\\nYou should optain:\\n\\n![First view](./first-view-app.png)\\n\\nCool! So now we are fetching data but we are displaying them as JSON data using the `JSON.stringify` function. Let\'s make that a bit prettier with a component and some css.\\n\\nCreate a folder called `components` and two files:\\n\\n```typescript\\n// components/user.tsx\\nimport styles from \\"./user.module.css\\";\\n\\ntype UserProps = {\\n  user: User;\\n};\\n\\nconst User = ({ user }: UserProps): JSX.Element => {\\n  return (\\n    <div className={styles.container}>\\n      <div className={styles.infos}>\\n        <span>Name: {user.name}</span>\\n        <span>Username: {user.username}</span>\\n        <span>Email: {user.email}</span>\\n        <span>Phone: {user.phone}</span>\\n      </div>\\n      <div className={styles.address}>\\n        <span>Street: {user.address.street}</span>\\n        <span>Suit: {user.address.suite}</span>\\n        <span>City: {user.address.city}</span>\\n        <span>Zipcode: {user.address.zipcode}</span>\\n      </div>\\n    </div>\\n  );\\n};\\n\\nexport default User;\\n```\\n\\n```css\\n/* user.module.css */\\n.container {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: flex-start;\\n  padding: 0;\\n  margin: 0;\\n  background-color: #fafafa;\\n  border: 1px solid #e0e0e0;\\n  border-radius: 4px;\\n  padding: 10px;\\n  margin: 10px;\\n  width: 500px;\\n  max-width: 500px;\\n}\\n\\n.infos {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  justify-content: flex-start;\\n  padding: 10px;\\n  margin: 0;\\n  width: 100%;\\n}\\n\\n.address {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  justify-content: flex-start;\\n  padding: 10px;\\n  margin: 0;\\n  width: 100%;\\n}\\n```\\n\\nNow we need to modify our `pages/index.tsx` file to use our brand new component:\\n\\n```typescript\\n// pages/index.tsx\\nimport axios from \\"axios\\";\\nimport type { GetServerSideProps } from \\"next\\";\\nimport Head from \\"next/head\\";\\nimport styles from \\"../styles/Home.module.css\\";\\nimport User from \\"../components/user/user\\";\\n\\ntype HomeProps = {\\n  users: User[];\\n};\\n\\nconst Home = ({ users }: HomeProps): JSX.Element => {\\n  const usersDisplay = users.map((user: User): JSX.Element => <User key={user.id} user={user} />);\\n\\n  return (\\n    <div className={styles.container}>\\n      <Head>\\n        <title>Next SSR with ScaleDynamics</title>\\n        <meta name=\\"description\\" content=\\"Simple SSR app deploy with ScaleDynamics platform\\" />\\n        <link rel=\\"icon\\" href=\\"/favicon.ico\\" />\\n      </Head>\\n\\n      <main className={styles.main}>\\n        <h1 className={styles.title}>Welcome to my SSR App</h1>\\n        {usersDisplay}\\n      </main>\\n    </div>\\n  );\\n};\\n\\nexport const getServerSideProps: GetServerSideProps = async () => {\\n  const users = await (await axios.get(\\"https://jsonplaceholder.typicode.com/users\\")).data;\\n\\n  return {\\n    props: {\\n      users,\\n    },\\n  };\\n};\\n\\nexport default Home;\\n```\\n\\nWith the dev mode running, the app should look like this:\\n\\n![Finished view](./finished-view-app.png)\\n\\nThe application is ready, now let\'s look at the deployment part !\\n\\n## Account creation and ressource selection\\n\\nTo deploy this application on ScaleDynamics\'s cloud, you need an account and create an environment with a ressource for it. The cloud resource provides virtual CPU and storage capacities used to execute the app. In this tutorial we will use a free shared resource available on ScaleDynamics\u2019s cloud. These are the best one for testing. In this tutorial we will see later how you can upgrade to a dedicated production resource on the public cloud provider and region of your choice.\\n\\nIf you don\'t have an account, feel free to create one [here](https://console.scaledynamics.com/auth/signup/) (it\'s free and no credit card are required). Once your account is created, sign in.\\n\\nLet\'s create a project and an environment on the ScaleDynamics\'s [console](https://scaledynamics.com/console). Select your organization, create a new project, then create a new environmnent. Now we need to choose what kind of service we need for our deployment. There are four types:\\n\\n- managed HTTP docker\\n- managed Node.js server\\n- managed Node.js module\\n- static assets hosting\\n\\nFor our Next.js server side rendered, we need a server. Let\'s pick the managed Node.js server. You can learn more on the other types in the [ScaleDynamics documentation](https://docs.scaledynamics.com/).\\n\\n![Environment creation](../assets/create-env-deploy.gif)\\n\\n## Deployment\\n\\nThe environment is ready to run our application, let\'s deploy on it.\\n\\n### Configuration file\\n\\nFirst, let\'s add a configuration to tell the SDK what type of application we want to deploy. At the root of the project, create a `warp.config.js` file:\\n\\n```javascript\\n// warp.config.js\\nmodule.exports = {\\n  server: \\"next-ssr\\",\\n};\\n```\\n\\n### Build\\n\\nBuild the project to let Next optimize and bundle everything for us:\\n\\n```shell\\nyarn build\\n```\\n\\n### Login\\n\\nLog into your account and select your organization via the prompt:\\n\\n```shell\\nnpx warp login\\n```\\n\\n### Deploy\\n\\nFinally, we can run the deployment command:\\n\\n```shell\\nnpx warp deploy ./\\n```\\n\\nThis command will dump something like this:\\n\\n![Deploy dump](./deploy-dump-next.png)\\n\\nYou can see that a server was detected from your configuration file. Now follow the prompt, select the project you created, then the environment. The prompt will also ask you for a hostname, you can leave it blank for a random name or use the one you want. Finally, you can select a host.\\n\\nThe deployment will be done in a few minutes. At the end, the command will dump something like this:\\n\\n![Deploy end dump](./deploy-end-dump.png)\\n\\nYou can now open your browser and go to the URL and TADA ! Your Next.js application is live !\\n\\n## Go further: dedicated resources\\n\\nIf you want to use dedicated resources, you can upgrade dynamically to a non shared resource. As shown below it\'s as simple as a few mouse clicks.\\n\\n![Upgrade to dedicated](../assets/upgrade-resources.gif)\\n\\n## Next steps\\n\\nAt this stage, you have a fully functional application. You can learn more on the ScaleDynamics [documentation](https://docs.scaledynamics.com/), like how to get the logs of your server, use a custom domain, implement a CI/CD pipeline, etc.\\n\\nEnjoy !"}]}')}}]);