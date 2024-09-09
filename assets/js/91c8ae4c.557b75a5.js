"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7237],{9211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(4848),s=n(8453);n(4235),n(8328),n(3078);const i={id:"evaluating",title:"Evaluating JavaScript"},r=void 0,o={id:"evaluating",title:"Evaluating JavaScript",description:"Introduction",source:"@site/docs/evaluating.mdx",sourceDirName:".",slug:"/evaluating",permalink:"/docs/next/evaluating",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"evaluating",title:"Evaluating JavaScript"},sidebar:"docs",previous:{title:"Downloads",permalink:"/docs/next/downloads"},next:{title:"Events",permalink:"/docs/next/events"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Different environments",id:"different-environments",level:2},{value:"Evaluation Argument",id:"evaluation-argument",level:2},{value:"Init scripts",id:"init-scripts",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h6:"h6",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"/docs/next/api/class-page#page-evaluate",children:"page.evaluate()"})," API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like ",(0,a.jsx)(t.code,{children:"window"})," and ",(0,a.jsx)(t.code,{children:"document"})," can be used in ",(0,a.jsx)(t.code,{children:"evaluate"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const href = await page.evaluate(() => document.location.href);\n"})}),"\n",(0,a.jsx)(t.p,{children:"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const status = await page.evaluate(async () => {\n  const response = await fetch(location.href);\n  return response.status;\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"different-environments",children:"Different environments"}),"\n",(0,a.jsx)(t.p,{children:"Evaluated scripts run in the browser environment, while your test runs in a testing environments. This means you cannot use variables from your test in the page and vice versa. Instead, you should pass them explicitly as an argument."}),"\n",(0,a.jsxs)(t.p,{children:["The following snippet is ",(0,a.jsx)(t.strong,{children:"WRONG"})," because it uses the variable directly:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const data = 'some data';\nconst result = await page.evaluate(() => {\n  // WRONG: there is no \"data\" in the web page.\n  window.myApp.use(data);\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The following snippet is ",(0,a.jsx)(t.strong,{children:"CORRECT"})," because it passes the value explicitly as an argument:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const data = 'some data';\n// Pass |data| as a parameter.\nconst result = await page.evaluate(data => {\n  window.myApp.use(data);\n}, data);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"evaluation-argument",children:"Evaluation Argument"}),"\n",(0,a.jsxs)(t.p,{children:["Playwright evaluation methods like ",(0,a.jsx)(t.a,{href:"/docs/next/api/class-page#page-evaluate",children:"page.evaluate()"})," take a single optional argument. This argument can be a mix of ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable",children:"Serializable"})," values and ",(0,a.jsx)(t.a,{href:"/docs/next/api/class-jshandle",title:"JSHandle",children:"JSHandle"})," instances. Handles are automatically converted to the value they represent."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// A primitive value.\nawait page.evaluate(num => num, 42);\n\n// An array.\nawait page.evaluate(array => array.length, [1, 2, 3]);\n\n// An object.\nawait page.evaluate(object => object.foo, { foo: 'bar' });\n\n// A single handle.\nconst button = await page.evaluateHandle('window.button');\nawait page.evaluate(button => button.textContent, button);\n\n// Alternative notation using JSHandle.evaluate.\nawait button.evaluate((button, from) => button.textContent.substring(from), 5);\n\n// Object with multiple handles.\nconst button1 = await page.evaluateHandle('window.button1');\nconst button2 = await page.evaluateHandle('window.button2');\nawait page.evaluate(\n    o => o.button1.textContent + o.button2.textContent,\n    { button1, button2 });\n\n// Object destructuring works. Note that property names must match\n// between the destructured object and the argument.\n// Also note the required parenthesis.\nawait page.evaluate(\n    ({ button1, button2 }) => button1.textContent + button2.textContent,\n    { button1, button2 });\n\n// Array works as well. Arbitrary names can be used for destructuring.\n// Note the required parenthesis.\nawait page.evaluate(\n    ([b1, b2]) => b1.textContent + b2.textContent,\n    [button1, button2]);\n\n// Any mix of serializables and handles works.\nawait page.evaluate(\n    x => x.button1.textContent + x.list[0].textContent + String(x.foo),\n    { button1, list: [button2], foo: null });\n"})}),"\n",(0,a.jsx)(t.h2,{id:"init-scripts",children:"Init scripts"}),"\n",(0,a.jsx)(t.p,{children:"Sometimes it is convenient to evaluate something in the page before it starts loading. For example, you might want to setup some mocks or test data."}),"\n",(0,a.jsxs)(t.p,{children:["In this case, use ",(0,a.jsx)(t.a,{href:"/docs/next/api/class-page#page-add-init-script",children:"page.addInitScript()"})," or ",(0,a.jsx)(t.a,{href:"/docs/next/api/class-browsercontext#browser-context-add-init-script",children:"browserContext.addInitScript()"}),". In the example below, we will replace ",(0,a.jsx)(t.code,{children:"Math.random()"})," with a constant value."]}),"\n",(0,a.jsxs)(t.p,{children:["First, create a ",(0,a.jsx)(t.code,{children:"preload.js"})," file that contains the mock."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// preload.js\nMath.random = () => 42;\n"})}),"\n",(0,a.jsx)(t.p,{children:"Next, add init script to the page."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import { test, expect } from '@playwright/test';\nimport path from 'path';\n\ntest.beforeEach(async ({ page }) => {\n  // Add script for every test in the beforeEach hook.\n  // Make sure to correctly resolve the script path.\n  await page.addInitScript({ path: path.resolve(__dirname, '../mocks/preload.js') });\n});\n"})}),"\n",(0,a.jsx)(t.h6,{id:""}),"\n",(0,a.jsx)(t.p,{children:"Alternatively, you can pass a function instead of creating a preload script file. This is more convenient for short or one-off scripts. You can also pass an argument this way."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import { test, expect } from '@playwright/test';\n\n// Add script for every test in the beforeEach hook.\ntest.beforeEach(async ({ page }) => {\n  const value = 42;\n  await page.addInitScript(value => {\n    Math.random = () => value;\n  }, value);\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);