"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9630],{2138:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=n(4848),t=n(8453),i=n(4235),a=n(8328);n(3078);const l={id:"library",title:"Library"},o=void 0,c={id:"library",title:"Library",description:"Introduction",source:"@site/docs/library.mdx",sourceDirName:".",slug:"/library",permalink:"/docs/next/library",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"library",title:"Library"},sidebar:"docs",previous:{title:"Web server",permalink:"/docs/next/test-webserver"},next:{title:"Accessibility testing",permalink:"/docs/next/accessibility-testing"}},h={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Differences when using library",id:"differences-when-using-library",level:2},{value:"Library Example",id:"library-example",level:3},{value:"Test Example",id:"test-example",level:3},{value:"Key Differences",id:"key-differences",level:3},{value:"Usage",id:"usage",level:2},{value:"First script",id:"first-script",level:2},{value:"Record scripts",id:"record-scripts",level:2},{value:"Browser downloads",id:"browser-downloads",level:2},{value:"TypeScript support",id:"typescript-support",level:2},{value:"In JavaScript",id:"in-javascript",level:3},{value:"In TypeScript",id:"in-typescript",level:3}];function p(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(r.p,{children:"Playwright Library provides unified APIs for launching and interacting with browsers, while Playwright Test provides all this plus a fully managed end-to-end Test Runner and experience."}),"\n",(0,s.jsxs)(r.p,{children:["Under most circumstances, for end-to-end testing, you'll want to use ",(0,s.jsx)(r.code,{children:"@playwright/test"})," (Playwright Test), and not ",(0,s.jsx)(r.code,{children:"playwright"})," (Playwright Library) directly. To get started with Playwright Test, follow the ",(0,s.jsx)(r.a,{href:"/docs/next/intro",children:"Getting Started Guide"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"differences-when-using-library",children:"Differences when using library"}),"\n",(0,s.jsx)(r.h3,{id:"library-example",children:"Library Example"}),"\n",(0,s.jsx)(r.p,{children:"The following is an example of using the Playwright Library directly to launch Chromium, go to a page, and check its title:"}),"\n",(0,s.jsxs)(i.A,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],children:[(0,s.jsx)(a.A,{value:"ts",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import { chromium, devices } from 'playwright';\nimport assert from 'node:assert';\n\n(async () => {\n  // Setup\n  const browser = await chromium.launch();\n  const context = await browser.newContext(devices['iPhone 11']);\n  const page = await context.newPage();\n\n  // The actual interesting bit\n  await context.route('**.jpg', route => route.abort());\n  await page.goto('https://example.com/');\n\n  assert(await page.title() === 'Example Domain'); // \ud83d\udc4e not a Web First assertion\n\n  // Teardown\n  await context.close();\n  await browser.close();\n})();\n"})})}),(0,s.jsx)(a.A,{value:"js",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const assert = require('node:assert');\nconst { chromium, devices } = require('playwright');\n\n(async () => {\n  // Setup\n  const browser = await chromium.launch();\n  const context = await browser.newContext(devices['iPhone 11']);\n  const page = await context.newPage();\n\n  // The actual interesting bit\n  await context.route('**.jpg', route => route.abort());\n  await page.goto('https://example.com/');\n\n  assert(await page.title() === 'Example Domain'); // \ud83d\udc4e not a Web First assertion\n\n  // Teardown\n  await context.close();\n  await browser.close();\n})();\n"})})})]}),"\n",(0,s.jsxs)(r.p,{children:["Run it with ",(0,s.jsx)(r.code,{children:"node my-script.js"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"test-example",children:"Test Example"}),"\n",(0,s.jsx)(r.p,{children:"A test to achieve similar behavior, would look like:"}),"\n",(0,s.jsxs)(i.A,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],children:[(0,s.jsx)(a.A,{value:"ts",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import { expect, test, devices } from '@playwright/test';\n\ntest.use(devices['iPhone 11']);\n\ntest('should be titled', async ({ page, context }) => {\n  await context.route('**.jpg', route => route.abort());\n  await page.goto('https://example.com/');\n\n  await expect(page).toHaveTitle('Example');\n});\n"})})}),(0,s.jsx)(a.A,{value:"js",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const { expect, test, devices } = require('@playwright/test');\n\ntest.use(devices['iPhone 11']);\n\ntest('should be titled', async ({ page, context }) => {\n  await context.route('**.jpg', route => route.abort());\n  await page.goto('https://example.com/');\n\n  await expect(page).toHaveTitle('Example');\n});\n"})})})]}),"\n",(0,s.jsxs)(r.p,{children:["Run it with ",(0,s.jsx)(r.code,{children:"npx playwright test"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"key-differences",children:"Key Differences"}),"\n",(0,s.jsx)(r.p,{children:"The key differences to note are as follows:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Library"}),(0,s.jsx)(r.th,{children:"Test"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Installation"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"npm install playwright"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"npm init playwright@latest"})," - note ",(0,s.jsx)(r.code,{children:"install"})," vs. ",(0,s.jsx)(r.code,{children:"init"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Install browsers"}),(0,s.jsxs)(r.td,{children:["Install ",(0,s.jsx)(r.code,{children:"@playwright/browser-chromium"}),", ",(0,s.jsx)(r.code,{children:"@playwright/browser-firefox"})," and/or ",(0,s.jsx)(r.code,{children:"@playwright/browser-webkit"})]}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"npx playwright install"})," or ",(0,s.jsx)(r.code,{children:"npx playwright install chromium"})," for a single one"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"import"})," from"]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"playwright"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"@playwright/test"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Initialization"}),(0,s.jsxs)(r.td,{children:["Explicitly need to: ",(0,s.jsxs)("ol",{children:[(0,s.jsxs)("li",{children:["Pick a browser to use, e.g. ",(0,s.jsx)(r.code,{children:"chromium"})]}),(0,s.jsxs)("li",{children:["Launch browser with ",(0,s.jsx)(r.a,{href:"/docs/next/api/class-browsertype#browser-type-launch",children:"browserType.launch()"})]}),(0,s.jsxs)("li",{children:["Create a context with ",(0,s.jsx)(r.a,{href:"/docs/next/api/class-browser#browser-new-context",children:"browser.newContext()"}),", ",(0,s.jsx)("em",{children:"and"})," pass any context options explicitly, e.g. ",(0,s.jsx)(r.code,{children:"devices['iPhone 11']"})]}),(0,s.jsxs)("li",{children:["Create a page with ",(0,s.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-new-page",children:"browserContext.newPage()"})]})]})]}),(0,s.jsxs)(r.td,{children:["An isolated ",(0,s.jsx)(r.code,{children:"page"})," and ",(0,s.jsx)(r.code,{children:"context"})," are provided to each test out-of the box, along with other ",(0,s.jsx)(r.a,{href:"/docs/next/test-fixtures#built-in-fixtures",children:"built-in fixtures"}),". No explicit creation. If referenced by the test in its arguments, the Test Runner will create them for the test. (i.e. lazy-initialization)"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Assertions"}),(0,s.jsx)(r.td,{children:"No built-in Web-First Assertions"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.a,{href:"/docs/next/test-assertions",children:"Web-First assertions"})," like: ",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(r.a,{href:"/docs/next/api/class-pageassertions#page-assertions-to-have-title",children:"expect(page).toHaveTitle()"})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.a,{href:"/docs/next/api/class-pageassertions#page-assertions-to-have-screenshot-1",children:"expect(page).toHaveScreenshot()"})})]})," which auto-wait and retry for the condition to be met."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Cleanup"}),(0,s.jsxs)(r.td,{children:["Explicitly need to: ",(0,s.jsxs)("ol",{children:[(0,s.jsxs)("li",{children:["Close context with ",(0,s.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-close",children:"browserContext.close()"})]}),(0,s.jsxs)("li",{children:["Close browser with ",(0,s.jsx)(r.a,{href:"/docs/next/api/class-browser#browser-close",children:"browser.close()"})]})]})]}),(0,s.jsxs)(r.td,{children:["No explicit close of ",(0,s.jsx)(r.a,{href:"/docs/next/test-fixtures#built-in-fixtures",children:"built-in fixtures"}),"; the Test Runner will take care of it."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Running"}),(0,s.jsx)(r.td,{children:"When using the Library, you run the code as a node script, possibly with some compilation first."}),(0,s.jsxs)(r.td,{children:["When using the Test Runner, you use the ",(0,s.jsx)(r.code,{children:"npx playwright test"})," command. Along with your ",(0,s.jsx)(r.a,{href:"/docs/next/test-configuration",children:"config"}),", the Test Runner handles any compilation and choosing what to run and how to run it."]})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"In addition to the above, Playwright Test, as a full-featured Test Runner, includes:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"/docs/next/test-configuration",children:"Configuration Matrix and Projects"}),": In the above example, in the Playwright Library version, if we wanted to run with a different device or browser, we'd have to modify the script and plumb the information through. With Playwright Test, we can just specify the ",(0,s.jsx)(r.a,{href:"/docs/next/test-configuration",children:"matrix of configurations"})," in one place, and it will create run the one test under each of these configurations."]}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/next/test-parallel",children:"Parallelization"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/next/test-assertions",children:"Web-First Assertions"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/next/test-reporters",children:"Reporting"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/next/test-retries",children:"Retries"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/docs/next/trace-viewer-intro",children:"Easily Enabled Tracing"})}),"\n",(0,s.jsx)(r.li,{children:"and more\u2026"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(r.p,{children:["Use npm or Yarn to install Playwright library in your Node.js project. See ",(0,s.jsx)(r.a,{href:"/docs/next/intro#system-requirements",children:"system requirements"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"npm i -D playwright\n"})}),"\n",(0,s.jsx)(r.p,{children:"You will also need to install browsers - either manually or by adding a package that will do it for you automatically."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"# Download the Chromium, Firefox and WebKit browser\nnpx playwright install chromium firefox webkit\n\n# Alternatively, add packages that will download a browser upon npm install\nnpm i -D @playwright/browser-chromium @playwright/browser-firefox @playwright/browser-webkit\n"})}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"/docs/next/browsers#managing-browser-binaries",children:"managing browsers"})," for more options."]}),"\n",(0,s.jsxs)(r.p,{children:["Once installed, you can import Playwright in a Node.js script, and launch any of the 3 browsers (",(0,s.jsx)(r.code,{children:"chromium"}),", ",(0,s.jsx)(r.code,{children:"firefox"})," and ",(0,s.jsx)(r.code,{children:"webkit"}),")."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const { chromium } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  // Create pages, interact with UI elements, assert values\n  await browser.close();\n})();\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Playwright APIs are asynchronous and return Promise objects. Our code examples use ",(0,s.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await",children:"the async/await pattern"})," to ease readability. The code is wrapped in an unnamed async arrow function which is invoking itself."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"(async () => { // Start of async arrow function\n  // Function code\n  // ...\n})(); // End of the function and () to invoke itself\n"})}),"\n",(0,s.jsx)(r.h2,{id:"first-script",children:"First script"}),"\n",(0,s.jsxs)(r.p,{children:["In our first script, we will navigate to ",(0,s.jsx)(r.code,{children:"https://playwright.dev/"})," and take a screenshot in WebKit."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"const { webkit } = require('playwright');\n\n(async () => {\n  const browser = await webkit.launch();\n  const page = await browser.newPage();\n  await page.goto('https://playwright.dev/');\n  await page.screenshot({ path: `example.png` });\n  await browser.close();\n})();\n"})}),"\n",(0,s.jsxs)(r.p,{children:["By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",(0,s.jsx)(r.code,{children:"headless: false"})," flag while launching the browser. You can also use ",(0,s.jsx)(r.code,{children:"slowMo"})," to slow down execution. Learn more in the debugging tools ",(0,s.jsx)(r.a,{href:"/docs/next/debug",children:"section"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"firefox.launch({ headless: false, slowMo: 50 });\n"})}),"\n",(0,s.jsx)(r.h2,{id:"record-scripts",children:"Record scripts"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/next/test-cli",children:"Command line tools"})," can be used to record user interactions and generate JavaScript code."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"npx playwright codegen wikipedia.org\n"})}),"\n",(0,s.jsx)(r.h2,{id:"browser-downloads",children:"Browser downloads"}),"\n",(0,s.jsx)(r.p,{children:"To download Playwright browsers run:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"# Explicitly download browsers\nnpx playwright install\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Alternatively, you can add ",(0,s.jsx)(r.code,{children:"@playwright/browser-chromium"}),", ",(0,s.jsx)(r.code,{children:"@playwright/browser-firefox"})," and ",(0,s.jsx)(r.code,{children:"@playwright/browser-webkit"})," packages to automatically download the respective browser during the package installation."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"# Use a helper package that downloads a browser on npm install\nnpm install @playwright/browser-chromium\n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Download behind a firewall or a proxy"})}),"\n",(0,s.jsxs)(r.p,{children:["Pass ",(0,s.jsx)(r.code,{children:"HTTPS_PROXY"})," environment variable to download through a proxy."]}),"\n",(0,s.jsxs)(i.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,s.jsx)(a.A,{value:"bash",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"# Manual\nHTTPS_PROXY=https://192.0.2.1 npx playwright install\n\n# Through @playwright/browser-chromium, @playwright/browser-firefox\n# and @playwright/browser-webkit helper packages\nHTTPS_PROXY=https://192.0.2.1 npm install\n"})})}),(0,s.jsx)(a.A,{value:"powershell",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:"# Manual\n$Env:HTTPS_PROXY=https://192.0.2.1\nnpx playwright install\n\n# Through @playwright/browser-chromium, @playwright/browser-firefox\n# and @playwright/browser-webkit helper packages\n$Env:HTTPS_PROXY=https://192.0.2.1\nnpm install\n"})})}),(0,s.jsx)(a.A,{value:"batch",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-batch",children:"# Manual\nset HTTPS_PROXY=https://192.0.2.1\nnpx playwright install\n\n# Through @playwright/browser-chromium, @playwright/browser-firefox\n# and @playwright/browser-webkit helper packages\nset HTTPS_PROXY=https://192.0.2.1\nnpm install\n"})})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Download from artifact repository"})}),"\n",(0,s.jsxs)(r.p,{children:["By default, Playwright downloads browsers from Microsoft's CDN. Pass ",(0,s.jsx)(r.code,{children:"PLAYWRIGHT_DOWNLOAD_HOST"})," environment variable to download from an internal artifacts repository instead."]}),"\n",(0,s.jsxs)(i.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,s.jsx)(a.A,{value:"bash",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"# Manual\nPLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 npx playwright install\n\n# Through @playwright/browser-chromium, @playwright/browser-firefox\n# and @playwright/browser-webkit helper packages\nPLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 npm install\n"})})}),(0,s.jsx)(a.A,{value:"powershell",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:"# Manual\n$Env:PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\nnpx playwright install\n\n# Through @playwright/browser-chromium, @playwright/browser-firefox\n# and @playwright/browser-webkit helper packages\n$Env:PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\nnpm install\n"})})}),(0,s.jsx)(a.A,{value:"batch",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-batch",children:"# Manual\nset PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\nnpx playwright install\n\n# Through @playwright/browser-chromium, @playwright/browser-firefox\n# and @playwright/browser-webkit helper packages\nset PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\nnpm install\n"})})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Skip browser download"})}),"\n",(0,s.jsxs)(r.p,{children:["In certain cases, it is desired to avoid browser downloads altogether because browser binaries are managed separately. This can be done by setting ",(0,s.jsx)(r.code,{children:"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD"})," variable before installing packages."]}),"\n",(0,s.jsxs)(i.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,s.jsx)(a.A,{value:"bash",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"# When using @playwright/browser-chromium, @playwright/browser-firefox\n# and @playwright/browser-webkit helper packages\nPLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm install\n"})})}),(0,s.jsx)(a.A,{value:"powershell",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",children:"# When using @playwright/browser-chromium, @playwright/browser-firefox\n# and @playwright/browser-webkit helper packages\n$Env:PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1\nnpm install\n"})})}),(0,s.jsx)(a.A,{value:"batch",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-batch",children:"# When using @playwright/browser-chromium, @playwright/browser-firefox\n# and @playwright/browser-webkit helper packages\nset PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1\nnpm install\n"})})})]}),"\n",(0,s.jsx)(r.h2,{id:"typescript-support",children:"TypeScript support"}),"\n",(0,s.jsx)(r.p,{children:"Playwright includes built-in support for TypeScript. Type definitions will be imported automatically. It is recommended to use type-checking to improve the IDE experience."}),"\n",(0,s.jsx)(r.h3,{id:"in-javascript",children:"In JavaScript"}),"\n",(0,s.jsx)(r.p,{children:"Add the following to the top of your JavaScript file to get type-checking in VS Code or WebStorm."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"// @ts-check\n// ...\n"})}),"\n",(0,s.jsx)(r.p,{children:"Alternatively, you can use JSDoc to set types for variables."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"/** @type {import('playwright').Page} */\nlet page;\n"})}),"\n",(0,s.jsx)(r.h3,{id:"in-typescript",children:"In TypeScript"}),"\n",(0,s.jsx)(r.p,{children:"TypeScript support will work out-of-the-box. Types can also be imported explicitly."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"let page: import('playwright').Page;\n"})})]})}function x(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}}}]);