/*
|-----------------------------------------
| setting up CreateExampleData for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { boilerPageInterface } from "./type";

export const exampleBoilerPlateData: boilerPageInterface = {
  pageName: "BoilerPlate",
  data: [
    {
      context: [
        {
          id: "001",
          important: true,
          title: "NEXT",
          documentation: [
            {
              id: "1",
              url: "https://nextjs.org/",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/create-next-app",
              name: "Go NPM",
            },
          ],
          description: [
            "The React Framework for the Web",
            "To create front-end and backend",
          ],
          code: [
            { id: "1", Terminal: "npx create-next-app@latest" },
            { id: "2", npm: "npx create-next-app@latest" },
            { id: "3", yarn: "yarn create next-app" },
          ],
        },
        {
          id: "002",
          title: "JAVASCRIPT",
          documentation: [
            {
              id: "1",
              url: "https://www.w3schools.com/js/",
              name: "Go Documentation",
            },
          ],
        },
        {
          id: "003",
          title: "REACT",
          documentation: [
            {
              id: "1",
              url: "https://www.w3schools.com/react/default.asp",
              name: "Go Documentation",
            },
          ],
        },
        {
          id: "004",
          title: "NODE",
          documentation: [
            {
              id: "1",
              url: "https://www.w3schools.com/nodejs/nodejs_server.asp",
              name: "Go Documentation",
            },
          ],
        },
        {
          id: "005",
          title: "EXPRESS",
          documentation: [
            {
              id: "1",
              url: "https://expressjs.com/",
              name: "Go Documentation",
            },
          ],
        },
        {
          id: "006",
          title: "HTML",
          documentation: [
            {
              id: "1",
              url: "https://www.w3schools.com/html/default.asp",
              name: "Go Documentation",
            },
          ],
        },
        {
          id: "007",
          title: "CSS",
          documentation: [
            {
              id: "1",
              url: "https://www.w3schools.com/css/default.asp",
              name: "Go Documentation",
            },
          ],
        },
        {
          id: "008",
          title: "VITE",
          documentation: [
            {
              id: "1",
              url: "https://vitejs.dev/",
              name: "Go Documentation",
            },
          ],
        },
        {
          id: "009",
          important: true,
          title: "REACT-HOOK-FORM",
          documentation: [
            {
              id: "1",
              url: "https://react-hook-form.com/",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/react-hook-form",
              name: "Go NPM",
            },
          ],
          description: [
            "Performant, flexible and extensible forms with easy-to-use validation.",
            "Faster create form with validation",
          ],
          code: [
            { id: "1", npm: "npm install react-hook-form" },
            { id: "2", yarn: "yarn add react-hook-form" },
          ],
        },
        {
          id: "010",
          title: "REACT-TOAST",
          documentation: [
            {
              id: "1",
              name: "Go NPM ",
              url: "https://www.npmjs.com/package/react-toastify",
            },
          ],
          code: [
            { id: "1", npm: "npm i react-toastify" },
            { id: "2", yarn: "yarn add react-toastify" },
          ],
        },
        {
          id: "011",
          important: true,
          title: "REDUX",
          documentation: [
            {
              id: "1",
              url: "https://redux.js.org/",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/redux",
              name: "Go NPM",
            },
          ],
          description: ["Store management with Caching mechanism"],
          code: [
            { id: "1", npm: "npm i react-hook-form" },
            { id: "2", yarn: "yarn add react-hook-form" },
          ],
        },
        {
          id: "012",
          important: true,
          title: "CORS",
          documentation: [
            {
              id: "1",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/cors",
              name: "Go NPM",
            },
          ],
          description: [
            "a browser security feature that allows web pages to access resources from other domains",
          ],
          code: [
            { id: "1", npm: "npm i cors" },
            { id: "2", yarn: "yarn add cors" },
          ],
        },
        {
          id: "013",
          important: true,
          title: "ZOD",
          documentation: [
            {
              id: "1",
              url: "https://zod.dev/",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/zod",
              name: "Go NPM",
            },
          ],
          description: [
            "TypeScript-first schema validation with static type inference",
          ],
          code: [
            { id: "1", npm: "" },
            { id: "2", yarn: "yarn add " },
          ],
        },
        {
          id: "014",
          important: true,
          title: "ZUSTAND",
          documentation: [
            {
              id: "1",
              url: "https://zod.dev/?id=table-of-contents",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/zod",
              name: "Go NPM",
            },
          ],
          description: [""],
          code: [
            { id: "1", npm: "npm i zod" },
            { id: "2", yarn: "yarn add zod" },
          ],
        },
        {
          id: "015",
          important: true,
          title: "TANSTACK",
          documentation: [
            {
              id: "1",
              url: "https://tanstack.com/query/latest",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/@tanstack/react-query",
              name: "Go NPM",
            },
          ],
          description: [
            "Powerful asynchronous state management for TS/JS, React, Solid, Vue, Svelte and Angular",
          ],
          code: [
            { id: "1", npm: "npm i @tanstack/react-query" },
            { id: "2", yarn: "yarn add @tanstack/react-query" },
          ],
        },
        {
          id: "016",
          important: true,
          title: "REACT-NATIVE",
          documentation: [
            {
              id: "1",
              url: "https://reactnative.dev/",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/react-native",
              name: "Go NPM",
            },
          ],
          description: [
            "Create native apps for Android, iOS, and more using React",
          ],
          code: [
            { id: "1", npm: "npx create-expo-app AwesomeProject" },
            { id: "2", yarn: "yarn create expo-app AwesomeProject" },
          ],
        },
        {
          id: "017",
          important: true,
          title: "ELECTRON",
          documentation: [
            {
              id: "1",
              url: "https://www.electronjs.org/",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/electron",
              name: "Go NPM",
            },
          ],
          description: [
            "Build cross-platform desktop apps with JavaScript, HTML, and CSS",
          ],
          code: [
            { id: "1", npm: "npm install --save-dev electron" },
            { id: "2", yarn: "yarn add --dev electron" },
          ],
        },
        {
          id: "018",
          important: true,
          title: "Async Storage",
          documentation: [
            {
              id: "1",
              url: "",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "",
              name: "Go NPM",
            },
          ],
          description: [
            "AsyncStorage is an unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It should be used instead of LocalStorage.",
          ],
          code: [
            {
              id: "1",
              npm: "npm i @react-native-async-storage/async-storage",
            },
            {
              id: "2",
              yarn: "yarn add @react-native-async-storage/async-storage",
            },
          ],
        },
        {
          id: "019",
          important: true,
          title: "Google Firebase",
          documentation: [
            {
              id: "1",
              url: "https://firebase.google.com/docs/auth/web/firebaseui",
              name: "Go Documentation",
            },
          ],
          description: ["Auth using Firebase"],
          code: [
            { id: "1", npm: "$ npm install firebaseui --save" },
            { id: "2", yarn: "yarn add firebaseui" },
          ],
        },
        {
          id: "020",
          title: "Tailwind",
          documentation: [
            {
              id: "1",
              url: "https://tailwindcss.com/",
              name: "Go Document",
            },
          ],
        },
        {
          id: "021",
          title: "Bootstrap",
          documentation: [
            {
              id: "1",
              url: "https://getbootstrap.com/",
              name: "Document",
            },
          ],
        },
        {
          id: "022",
          important: true,
          title: "ShadCN",
          documentation: [
            {
              id: "1",
              url: "https://ui.shadcn.com/docs",
              name: "Go Documentation",
            },
          ],
          description: ["Build your component library"],
        },
        {
          id: "023",
          title: "DaisyUI",
          documentation: [
            {
              id: "1",
              url: "https://daisyui.com/",
              name: "Go Documentation",
            },
          ],
          description: ["The most popular component library for Tailwind CSS"],
        },
        {
          id: "024",
          important: true,
          title: "RabbitMQ",
          documentation: [
            {
              id: "1",
              url: "https://www.rabbitmq.com/",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/rabbitmq-client",
              name: "Go NPM",
            },
          ],
          description: [
            "Node.js client library for RabbitMQ. Publish messages, declare rules for routing those messages into queues, consume messages from queues.",
          ],
          code: [
            { id: "1", npm: "npm i amqplib" },
            { id: "2", npm: "npm i rabbitmq-client" },
            { id: "3", yarn: "yarn add amqplib" },
            { id: "4", yarn: "yarn add rabbitmq-client" },
          ],
        },
        {
          id: "025",
          important: true,
          title: "Redis",
          documentation: [
            {
              id: "1",
              url: "https://redis.io/",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/redis",
              name: "Go NPM",
            },
          ],
          description: ["SEE HOW FAST FEELS"],
          code: [
            { id: "1", npm: "npm i redis" },
            { id: "2", yarn: "yarn add redis" },
          ],
        },
        {
          id: "026",
          important: true,
          title: "MongoDB & Mongoose",
          documentation: [
            {
              id: "1",
              url: "https://www.mongodb.com/docs/",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/mongodb",
              name: "Go NPM",
            },
          ],
          description: ["Database @ User friendly for JavaScript development"],
          code: [
            { id: "1", npm: "npm i mongodb" },
            { id: "2", yarn: "yarn add mongodb" },
          ],
        },
        {
          id: "027",
          important: true,
          title: "MySQL",
          documentation: [
            {
              id: "1",
              url: "https://dev.mysql.com/doc/",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/mysql",
              name: "Go NPM",
            },
          ],
          description: [
            "This is a node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.",
          ],
          code: [
            { id: "1", npm: "npm i mysql" },
            { id: "2", yarn: "yarn add mysql" },
          ],
        },
        {
          id: "028",
          important: true,
          title: "PUPPETEER",
          documentation: [
            {
              id: "1",
              url: "https://pptr.dev/",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/puppeteer",
              name: "Go NPM",
            },
          ],
          description: [
            "Puppeteer is a Node.js library which provides a high-level API to control Chrome/Chromium over the DevTools Protocol. Puppeteer runs in headless mode by default, but can be configured to run in full ('headful') Chrome/Chromium.",
          ],
          code: [
            { id: "1", npm: "npm i puppeteer" },
            { id: "2", yarn: "yarn add puppeteer" },
          ],
        },
        {
          id: "029",
          important: true,
          title: "REACT-ADMIN",
          documentation: [
            {
              id: "1",
              url: "https://marmelab.com/react-admin/documentation.html",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/react-admin",
              name: "Go NPM",
            },
          ],
          description: [
            "A frontend Framework for building data-driven applications running in the browser on top of REST/GraphQL APIs, using ES6, React and Material Design. Previously named admin-on-rest. Open sourced and maintained by marmelab.",
          ],
          code: [
            { id: "1", npm: "npm i react-admin" },
            { id: "2", yarn: "yarn add react-admin" },
          ],
        },
        {
          id: "030",
          title: "Copy To Clipboard",
          documentation: [
            {
              id: "1",
              url: "https://github.com/sudodoki/copy-to-clipboard#readme",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/copy-to-clipboard",
              name: "Go NPM",
            },
          ],
          description: [
            "Simple module exposing copy function that will try to use execCommand with fallback to IE-specific clipboardData interface and finally, resort to usual prompt with proper text content and message.",
          ],
          code: [
            { id: "1", npm: "npm i copy-to-clipboard" },
            { id: "2", yarn: "yarn add copy-to-clipboard" },
          ],
        },
        {
          id: "031",
          title: "Material UI",
          documentation: [
            {
              id: "1",
              url: "https://mui.com/material-ui/getting-started/installation/",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "https://www.npmjs.com/package/@mui/material",
              name: "Go NPM",
            },
          ],
          description: [
            "Install Material UI, the world's most popular React UI framework.",
          ],
          code: [
            {
              id: "1",
              npm: "npm install @mui/material @emotion/react @emotion/styled",
            },
            {
              id: "2",
              yarn: "yarn add @mui/material @emotion/react @emotion/styled",
            },
          ],
        },
        {
          id: "",
          title: "",
          documentation: [
            {
              id: "1",
              url: "",
              name: "Go Documentation",
            },
            {
              id: "2",
              url: "",
              name: "Go NPM",
            },
          ],
          description: [""],
          code: [
            { id: "1", npm: "" },
            { id: "2", yarn: "yarn add " },
          ],
        },
      ],
    },
  ],
};
