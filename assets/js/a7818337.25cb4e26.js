"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[255],{6556:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=s(4848),i=s(8453);s(4235),s(8328),s(3078);const a={id:"best-practices",title:"Best Practices"},r=void 0,o={id:"best-practices",title:"Best Practices",description:"Introduction",source:"@site/docs/best-practices.mdx",sourceDirName:".",slug:"/best-practices",permalink:"/docs/next/best-practices",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"best-practices",title:"Best Practices"},sidebar:"docs",previous:{title:"Auto-waiting",permalink:"/docs/next/actionability"},next:{title:"Browsers",permalink:"/docs/next/browsers"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Testing philosophy",id:"testing-philosophy",level:2},{value:"Test user-visible behavior",id:"test-user-visible-behavior",level:3},{value:"Make tests as isolated as possible",id:"make-tests-as-isolated-as-possible",level:3},{value:"Avoid testing third-party dependencies",id:"avoid-testing-third-party-dependencies",level:3},{value:"Testing with a database",id:"testing-with-a-database",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Use locators",id:"use-locators",level:3},{value:"Use chaining and filtering",id:"use-chaining-and-filtering",level:4},{value:"Prefer user-facing attributes to XPath or CSS selectors",id:"prefer-user-facing-attributes-to-xpath-or-css-selectors",level:4},{value:"Generate locators",id:"generate-locators",level:3},{value:"Use <code>codegen</code> to generate locators",id:"use-codegen-to-generate-locators",level:4},{value:"Use the VS Code extension to generate locators",id:"use-the-vs-code-extension-to-generate-locators",level:4},{value:"Use web first assertions",id:"use-web-first-assertions",level:3},{value:"Don&#39;t use manual assertions",id:"dont-use-manual-assertions",level:4},{value:"Configure debugging",id:"configure-debugging",level:3},{value:"Local debugging",id:"local-debugging",level:4},{value:"Debugging on CI",id:"debugging-on-ci",level:4},{value:"Use Playwright&#39;s Tooling",id:"use-playwrights-tooling",level:3},{value:"Test across all browsers",id:"test-across-all-browsers",level:3},{value:"Keep your Playwright dependency up to date",id:"keep-your-playwright-dependency-up-to-date",level:3},{value:"Run tests on CI",id:"run-tests-on-ci",level:3},{value:"Lint your tests",id:"lint-your-tests",level:3},{value:"Use parallelism and sharding",id:"use-parallelism-and-sharding",level:3},{value:"Productivity tips",id:"productivity-tips",level:2},{value:"Use Soft assertions",id:"use-soft-assertions",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"This guide should help you to make sure you are following our best practices and writing tests that are more resilient."}),"\n",(0,n.jsx)(t.h2,{id:"testing-philosophy",children:"Testing philosophy"}),"\n",(0,n.jsx)(t.h3,{id:"test-user-visible-behavior",children:"Test user-visible behavior"}),"\n",(0,n.jsx)(t.p,{children:"Automated tests should verify that the application code works for the end users, and avoid relying on implementation details such as things which users will not typically use, see, or even know about such as the name of a function, whether something is an array, or the CSS class of some element. The end user will see or interact with what is rendered on the page, so your test should typically only see/interact with the same rendered output."}),"\n",(0,n.jsx)(t.h3,{id:"make-tests-as-isolated-as-possible",children:"Make tests as isolated as possible"}),"\n",(0,n.jsxs)(t.p,{children:["Each test should be completely isolated from another test and should run independently with its own local storage, session storage, data, cookies etc. ",(0,n.jsx)(t.a,{href:"/docs/next/browser-contexts",children:"Test isolation"})," improves reproducibility, makes debugging easier and prevents cascading test failures."]}),"\n",(0,n.jsxs)(t.p,{children:["In order to avoid repetition for a particular part of your test you can use ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-test",children:"before and after hooks"}),". Within your test file add a before hook to run a part of your test before each test such as going to a particular URL or logging in to a part of your app. This keeps your tests isolated as no test relies on another. However it is also ok to have a little duplication when tests are simple enough especially if it keeps your tests clearer and easier to read and maintain."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { test } from '@playwright/test';\n\ntest.beforeEach(async ({ page }) => {\n  // Runs before each test and signs in each page.\n  await page.goto('https://github.com/login');\n  await page.getByLabel('Username or email address').fill('username');\n  await page.getByLabel('Password').fill('password');\n  await page.getByRole('button', { name: 'Sign in' }).click();\n});\n\ntest('first', async ({ page }) => {\n  // page is signed in.\n});\n\ntest('second', async ({ page }) => {\n  // page is signed in.\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can also reuse the signed-in state in the tests with ",(0,n.jsx)(t.a,{href:"/docs/next/auth#basic-shared-account-in-all-tests",children:"setup project"}),". That way you can log in only once and then skip the log in step for all of the tests."]}),"\n",(0,n.jsx)(t.h3,{id:"avoid-testing-third-party-dependencies",children:"Avoid testing third-party dependencies"}),"\n",(0,n.jsx)(t.p,{children:"Only test what you control. Don't try to test links to external sites or third party servers that you do not control. Not only is it time consuming and can slow down your tests but also you cannot control the content of the page you are linking to, or if there are cookie banners or overlay pages or anything else that might cause your test to fail."}),"\n",(0,n.jsxs)(t.p,{children:["Instead, use the ",(0,n.jsx)(t.a,{href:"/docs/next/network#handle-requests",children:"Playwright Network API"})," and guarantee the response needed."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"await page.route('**/api/fetch_data_third_party_dependency', route => route.fulfill({\n  status: 200,\n  body: testData,\n}));\nawait page.goto('https://example.com');\n"})}),"\n",(0,n.jsx)(t.h3,{id:"testing-with-a-database",children:"Testing with a database"}),"\n",(0,n.jsx)(t.p,{children:"If working with a database then make sure you control the data. Test against a staging environment and make sure it doesn't change. For visual regression tests make sure the operating system and browser versions are the same."}),"\n",(0,n.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsx)(t.h3,{id:"use-locators",children:"Use locators"}),"\n",(0,n.jsxs)(t.p,{children:["In order to write end to end tests we need to first find elements on the webpage. We can do this by using Playwright's built in ",(0,n.jsx)(t.a,{href:"/docs/next/locators",children:"locators"}),". Locators come with auto waiting and retry-ability. Auto waiting means that Playwright performs a range of actionability checks on the elements, such as ensuring the element is visible and enabled before it performs the click. To make tests resilient, we recommend prioritizing user-facing attributes and explicit contracts."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// \ud83d\udc4d\npage.getByRole('button', { name: 'submit' });\n"})}),"\n",(0,n.jsx)(t.h4,{id:"use-chaining-and-filtering",children:"Use chaining and filtering"}),"\n",(0,n.jsxs)(t.p,{children:["Locators can be ",(0,n.jsx)(t.a,{href:"/docs/next/locators#matching-inside-a-locator",children:"chained"})," to narrow down the search to a particular part of the page."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const product = page.getByRole('listitem').filter({ hasText: 'Product 2' });\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can also ",(0,n.jsx)(t.a,{href:"/docs/next/locators#filtering-locators",children:"filter locators"})," by text or by another locator."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"await page\n    .getByRole('listitem')\n    .filter({ hasText: 'Product 2' })\n    .getByRole('button', { name: 'Add to cart' })\n    .click();\n"})}),"\n",(0,n.jsx)(t.h4,{id:"prefer-user-facing-attributes-to-xpath-or-css-selectors",children:"Prefer user-facing attributes to XPath or CSS selectors"}),"\n",(0,n.jsx)(t.p,{children:"Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests. For example consider selecting this button by its CSS classes. Should the designer change something then the class might change breaking your test."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// \ud83d\udc4e\npage.locator('button.buttonIcon.episode-actions-later');\n"})}),"\n",(0,n.jsx)(t.p,{children:"Use locators that are resilient to changes in the DOM."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// \ud83d\udc4d\npage.getByRole('button', { name: 'submit' });\n"})}),"\n",(0,n.jsx)(t.h3,{id:"generate-locators",children:"Generate locators"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright has a ",(0,n.jsx)(t.a,{href:"/docs/next/codegen",children:"test generator"})," that can generate tests and pick locators for you. It will look at your page and figure out the best locator, prioritizing role, text and test id locators. If the generator finds multiple elements matching the locator, it will improve the locator to make it resilient and uniquely identify the target element, so you don't have to worry about failing tests due to locators."]}),"\n",(0,n.jsxs)(t.h4,{id:"use-codegen-to-generate-locators",children:["Use ",(0,n.jsx)(t.code,{children:"codegen"})," to generate locators"]}),"\n",(0,n.jsxs)(t.p,{children:["To pick a locator run the ",(0,n.jsx)(t.code,{children:"codegen"})," command followed by the URL that you would like to pick a locator from."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright codegen playwright.dev\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This will open a new browser window as well as the Playwright inspector. To pick a locator first click on the 'Record' button to stop the recording. By default when you run the ",(0,n.jsx)(t.code,{children:"codegen"})," command it will start a new recording. Once you stop the recording the 'Pick Locator' button will be available to click."]}),"\n",(0,n.jsx)(t.p,{children:"You can then hover over any element on your page in the browser window and see the locator highlighted below your cursor. Clicking on an element will add the locator into the Playwright inspector. You can either copy the locator and paste into your test file or continue to explore the locator by editing it in the Playwright Inspector, for example by modifying the text, and seeing the results in the browser window."}),"\n",(0,n.jsx)("img",{width:"1394",alt:"generating locators with codegen",loading:"lazy",src:"https://user-images.githubusercontent.com/13063165/212103268-e7d8ee8b-d307-4cba-be13-831f3fbb1f40.png"}),"\n",(0,n.jsx)(t.h4,{id:"use-the-vs-code-extension-to-generate-locators",children:"Use the VS Code extension to generate locators"}),"\n",(0,n.jsxs)(t.p,{children:["You can also use the ",(0,n.jsx)(t.a,{href:"/docs/next/getting-started-vscode",children:"VS Code Extension"})," to generate locators as well as record a test. The VS Code extension also gives you a great developer experience when writing, running, and debugging tests."]}),"\n",(0,n.jsx)("img",{width:"1394",alt:"generating locators in vs code with codegen",loading:"lazy",src:"https://user-images.githubusercontent.com/13063165/212269873-aca04043-16ce-4627-906f-7351d09740ab.png"}),"\n",(0,n.jsx)(t.h3,{id:"use-web-first-assertions",children:"Use web first assertions"}),"\n",(0,n.jsxs)(t.p,{children:["Assertions are a way to verify that the expected result and the actual result matched or not. By using ",(0,n.jsx)(t.a,{href:"/docs/next/test-assertions",children:"web first assertions"})," Playwright will wait until the expected condition is met. For example, when testing an alert message, a test would click a button that makes a message appear and check that the alert message is there. If the alert message takes half a second to appear, assertions such as ",(0,n.jsx)(t.code,{children:"toBeVisible()"})," will wait and retry if needed."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// \ud83d\udc4d\nawait expect(page.getByText('welcome')).toBeVisible();\n\n// \ud83d\udc4e\nexpect(await page.getByText('welcome').isVisible()).toBe(true);\n"})}),"\n",(0,n.jsx)(t.h4,{id:"dont-use-manual-assertions",children:"Don't use manual assertions"}),"\n",(0,n.jsxs)(t.p,{children:["Don't use manual assertions that are not awaiting the expect. In the code below the await is inside the expect rather than before it. When using assertions such as ",(0,n.jsx)(t.code,{children:"isVisible()"})," the test won't wait a single second, it will just check the locator is there and return immediately."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// \ud83d\udc4e\nexpect(await page.getByText('welcome').isVisible()).toBe(true);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Use web first assertions such as ",(0,n.jsx)(t.code,{children:"toBeVisible()"})," instead."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// \ud83d\udc4d\nawait expect(page.getByText('welcome')).toBeVisible();\n"})}),"\n",(0,n.jsx)(t.h3,{id:"configure-debugging",children:"Configure debugging"}),"\n",(0,n.jsx)(t.h4,{id:"local-debugging",children:"Local debugging"}),"\n",(0,n.jsxs)(t.p,{children:["For local debugging we recommend you ",(0,n.jsx)(t.a,{href:"/docs/next/getting-started-vscode#live-debugging",children:"debug your tests live in VSCode."})," by installing the ",(0,n.jsx)(t.a,{href:"/docs/next/getting-started-vscode",children:"VS Code extension"}),". You can run tests in debug mode by right clicking on the line next to the test you want to run which will open a browser window and pause at where the breakpoint is set."]}),"\n",(0,n.jsx)("img",{width:"1338",alt:"debugging tests in vscode",loading:"lazy",src:"https://user-images.githubusercontent.com/13063165/212274675-5c6e1647-2aab-40fd-9804-8680c1ac2d16.png"}),"\n",(0,n.jsx)(t.p,{children:"You can live debug your test by clicking or editing the locators in your test in VS Code which will highlight this locator in the browser window as well as show you any other matching locators found on the page."}),"\n",(0,n.jsx)("img",{width:"1394",alt:"live debugging locators in vscode",loading:"lazy",src:"https://user-images.githubusercontent.com/13063165/212273189-da271dc4-0f59-4138-92a8-10e719066cbe.png"}),"\n",(0,n.jsxs)(t.p,{children:["You can also debug your tests with the Playwright inspector by running your tests with the ",(0,n.jsx)(t.code,{children:"--debug"})," flag."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright test --debug\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can then step through your test, view actionability logs and edit the locator live and see it highlighted in the browser window. This will show you which locators match, how many of them there are."}),"\n",(0,n.jsx)("img",{width:"1350",alt:"debugging with the playwright inspector",loading:"lazy",src:"https://user-images.githubusercontent.com/13063165/212276296-4f5b18e7-2bd7-4766-9aa5-783517bd4aa2.png"}),"\n",(0,n.jsxs)(t.p,{children:["To debug a specific test add the name of the test file and the line number of the test followed by the ",(0,n.jsx)(t.code,{children:"--debug"})," flag."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright test example.spec.ts:9 --debug\n"})}),"\n",(0,n.jsx)(t.h4,{id:"debugging-on-ci",children:"Debugging on CI"}),"\n",(0,n.jsxs)(t.p,{children:["For CI failures, use the Playwright ",(0,n.jsx)(t.a,{href:"/docs/next/trace-viewer",children:"trace viewer"})," instead of videos and screenshots. The trace viewer gives you a full trace of your tests as a local Progressive Web App (PWA) that can easily be shared. With the trace viewer you can view the timeline, inspect DOM snapshots for each action using dev tools, view network requests and more."]}),"\n",(0,n.jsx)("img",{width:"1516",alt:"playwrights trace viewer",loading:"lazy",src:"https://user-images.githubusercontent.com/13063165/212277895-c63d94c2-bd06-4881-864e-62790a072ca3.png"}),"\n",(0,n.jsxs)(t.p,{children:["Traces are configured in the Playwright config file and are set to run on CI on the first retry of a failed test. We don't recommend setting this to ",(0,n.jsx)(t.code,{children:"on"})," so that traces are run on every test as it's very performance heavy. However you can run a trace locally when developing with the ",(0,n.jsx)(t.code,{children:"--trace"})," flag."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright test --trace on\n"})}),"\n",(0,n.jsx)(t.p,{children:"Once you run this command your traces will be recorded for each test and can be viewed directly from the HTML report."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright show-report\n"})}),"\n",(0,n.jsx)("img",{width:"1516",alt:"Playwrights HTML report",loading:"lazy",src:"https://user-images.githubusercontent.com/13063165/212279022-d929d4c0-2271-486a-a75f-166ac231d25f.png"}),"\n",(0,n.jsx)(t.p,{children:"Traces can be opened by clicking on the icon next to the test file name or by opening each of the test reports and scrolling down to the traces section."}),"\n",(0,n.jsx)("img",{width:"1516",alt:"Screenshot 2023-01-13 at 09 58 34",loading:"lazy",src:"https://user-images.githubusercontent.com/13063165/212279699-c9eb134f-4f4e-4f19-805c-37596d3272a6.png"}),"\n",(0,n.jsx)(t.h3,{id:"use-playwrights-tooling",children:"Use Playwright's Tooling"}),"\n",(0,n.jsx)(t.p,{children:"Playwright comes with a range of tooling to help you write tests."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.a,{href:"/docs/next/getting-started-vscode",children:"VS Code extension"})," gives you a great developer experience when writing, running, and debugging tests."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.a,{href:"/docs/next/codegen",children:"test generator"})," can generate tests and pick locators for you."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.a,{href:"/docs/next/trace-viewer",children:"trace viewer"})," gives you a full trace of your tests as a local PWA that can easily be shared. With the trace viewer you can view the timeline, inspect DOM snapshots for each action, view network requests and more."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.a,{href:"./test-ui-mode",children:"UI Mode"})," lets you explore, run and debug tests with a time travel experience complete with watch mode. All test files are loaded into the testing sidebar where you can expand each file and describe block to individually run, view, watch and debug each test."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"./test-typescript",children:"TypeScript"})," in Playwright works out of the box and gives you better IDE integrations. Your IDE will show you everything you can do and highlight when you do something wrong. No TypeScript experience is needed and it is not necessary for your code to be in TypeScript, all you need to do is create your tests with a ",(0,n.jsx)(t.code,{children:".ts"})," extension."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"test-across-all-browsers",children:"Test across all browsers"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright makes it easy to test your site across all ",(0,n.jsx)(t.a,{href:"/docs/next/test-projects#configure-projects-for-multiple-browsers",children:"browsers"})," no matter what platform you are on. Testing across all browsers ensures your app works for all users. In your config file you can set up projects adding the name and which browser or device to use."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig, devices } from '@playwright/test';\n\nexport default defineConfig({\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n    {\n      name: 'firefox',\n      use: { ...devices['Desktop Firefox'] },\n    },\n    {\n      name: 'webkit',\n      use: { ...devices['Desktop Safari'] },\n    },\n  ],\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"keep-your-playwright-dependency-up-to-date",children:"Keep your Playwright dependency up to date"}),"\n",(0,n.jsx)(t.p,{children:"By keeping your Playwright version up to date you will be able to test your app on the latest browser versions and catch failures before the latest browser version is released to the public."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install -D @playwright/test@latest\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Check the ",(0,n.jsx)(t.a,{href:"/docs/next/release-notes",children:"release notes"})," to see what the latest version is and what changes have been released."]}),"\n",(0,n.jsx)(t.p,{children:"You can see what version of Playwright you have by running the following command."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright --version\n"})}),"\n",(0,n.jsx)(t.h3,{id:"run-tests-on-ci",children:"Run tests on CI"}),"\n",(0,n.jsxs)(t.p,{children:["Setup CI/CD and run your tests frequently. The more often you run your tests the better. Ideally you should run your tests on each commit and pull request. Playwright comes with a ",(0,n.jsx)(t.a,{href:"/docs/next/ci-intro",children:"GitHub actions workflow"})," so that tests will run on CI for you with no setup required. Playwright can also be setup on the ",(0,n.jsx)(t.a,{href:"/docs/next/ci",children:"CI environment"})," of your choice."]}),"\n",(0,n.jsxs)(t.p,{children:["Use Linux when running your tests on CI as it is cheaper. Developers can use whatever environment when running locally but use linux on CI. Consider setting up ",(0,n.jsx)(t.a,{href:"/docs/next/test-sharding",children:"Sharding"})," to make CI faster."]}),"\n",(0,n.jsx)(t.h3,{id:"lint-your-tests",children:"Lint your tests"}),"\n",(0,n.jsxs)(t.p,{children:["We recommend TypeScript and linting with ESLint for your tests to catch errors early. Use ",(0,n.jsx)(t.a,{href:"https://typescript-eslint.io/rules/no-floating-promises/",children:(0,n.jsx)(t.code,{children:"@typescript-eslint/no-floating-promises"})})," ",(0,n.jsx)(t.a,{href:"https://eslint.org",children:"ESLint"})," rule to make sure there are no missing awaits before the asynchronous calls to the Playwright API. On your CI you can run ",(0,n.jsx)(t.code,{children:"tsc --noEmit"})," to ensure that functions are called with the right signature."]}),"\n",(0,n.jsx)(t.h3,{id:"use-parallelism-and-sharding",children:"Use parallelism and sharding"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright runs tests in ",(0,n.jsx)(t.a,{href:"/docs/next/test-parallel",children:"parallel"})," by default. Tests in a single file are run in order, in the same worker process. If you have many independent tests in a single file, you might want to run them in parallel"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { test } from '@playwright/test';\n\ntest.describe.configure({ mode: 'parallel' });\n\ntest('runs in parallel 1', async ({ page }) => { /* ... */ });\ntest('runs in parallel 2', async ({ page }) => { /* ... */ });\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Playwright can ",(0,n.jsx)(t.a,{href:"/docs/next/test-parallel#shard-tests-between-multiple-machines",children:"shard"})," a test suite, so that it can be executed on multiple machines."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright test --shard=1/3\n"})}),"\n",(0,n.jsx)(t.h2,{id:"productivity-tips",children:"Productivity tips"}),"\n",(0,n.jsx)(t.h3,{id:"use-soft-assertions",children:"Use Soft assertions"}),"\n",(0,n.jsxs)(t.p,{children:["If your test fails, Playwright will give you an error message showing what part of the test failed which you can see either in VS Code, the terminal, the HTML report, or the trace viewer. However, you can also use ",(0,n.jsx)(t.a,{href:"/docs/next/test-assertions#soft-assertions",children:"soft assertions"}),". These do not immediately terminate the test execution, but rather compile and display a list of failed assertions once the test ended."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// Make a few checks that will not stop the test when failed...\nawait expect.soft(page.getByTestId('status')).toHaveText('Success');\n\n// ... and continue the test to check more things.\nawait page.getByRole('link', { name: 'next page' }).click();\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);