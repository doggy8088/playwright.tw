"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7013],{8492:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=s(4848),o=s(8453);s(4235),s(8328),s(3078);const i={id:"api-testing",title:"API testing"},a=void 0,r={id:"api-testing",title:"API testing",description:"Introduction",source:"@site/docs/api-testing.mdx",sourceDirName:".",slug:"/api-testing",permalink:"/docs/next/api-testing",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"api-testing",title:"API testing"},sidebar:"docs",previous:{title:"Assertions",permalink:"/docs/next/test-assertions"},next:{title:"Authentication",permalink:"/docs/next/auth"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Writing API Test",id:"writing-api-test",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Writing tests",id:"writing-tests",level:3},{value:"Setup and teardown",id:"setup-and-teardown",level:3},{value:"Using request context",id:"using-request-context",level:2},{value:"Sending API requests from UI tests",id:"sending-api-requests-from-ui-tests",level:2},{value:"Establishing preconditions",id:"establishing-preconditions",level:3},{value:"Validating postconditions",id:"validating-postconditions",level:3},{value:"Reusing authentication state",id:"reusing-authentication-state",level:2},{value:"Context request vs global request",id:"context-request-vs-global-request",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright can be used to get access to the ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Representational_state_transfer",children:"REST"})," API of your application."]}),"\n",(0,n.jsx)(t.p,{children:"Sometimes you may want to send requests to the server directly from Node.js without loading a page and running js code in it. A few examples where it may come in handy:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Test your server API."}),"\n",(0,n.jsx)(t.li,{children:"Prepare server side state before visiting the web application in a test."}),"\n",(0,n.jsx)(t.li,{children:"Validate server side post-conditions after running some actions in the browser."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["All of that could be achieved via ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," methods."]}),"\n",(0,n.jsx)(t.h2,{id:"writing-api-test",children:"Writing API Test"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," can send all kinds of HTTP(S) requests over network."]}),"\n",(0,n.jsxs)(t.p,{children:["The following example demonstrates how to use Playwright to test issues creation via ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/rest",children:"GitHub API"}),". The test suite will do the following:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Create a new repository before running tests."}),"\n",(0,n.jsx)(t.li,{children:"Create a few issues and validate server state."}),"\n",(0,n.jsx)(t.li,{children:"Delete the repository after running tests."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["GitHub API requires authorization, so we'll configure the token once for all tests. While at it, we'll also set the ",(0,n.jsx)(t.code,{children:"baseURL"})," to simplify the tests. You can either put them in the configuration file, or in the test file with ",(0,n.jsx)(t.code,{children:"test.use()"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\nexport default defineConfig({\n  use: {\n    // All requests we send go to this API endpoint.\n    baseURL: 'https://api.github.com',\n    extraHTTPHeaders: {\n      // We set this header per GitHub guidelines.\n      'Accept': 'application/vnd.github.v3+json',\n      // Add authorization token to all requests.\n      // Assuming personal access token available in the environment.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    },\n  }\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Proxy configuration"})}),"\n",(0,n.jsxs)(t.p,{children:["If your tests need to run behind a proxy, you can specify this in the config and the ",(0,n.jsx)(t.code,{children:"request"})," fixture will pick it up automatically:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\nexport default defineConfig({\n  use: {\n    proxy: {\n      server: 'http://my-proxy:8080',\n      username: 'user',\n      password: 'secret'\n    },\n  }\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"writing-tests",children:"Writing tests"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright Test comes with the built-in ",(0,n.jsx)(t.code,{children:"request"})," fixture that respects configuration options like ",(0,n.jsx)(t.code,{children:"baseURL"})," or ",(0,n.jsx)(t.code,{children:"extraHTTPHeaders"})," we specified and is ready to send some requests."]}),"\n",(0,n.jsx)(t.p,{children:"Now we can add a few tests that will create new issues in the repository."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const REPO = 'test-repo-1';\nconst USER = 'github-username';\n\ntest('should create a bug report', async ({ request }) => {\n  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {\n    data: {\n      title: '[Bug] report 1',\n      body: 'Bug description',\n    }\n  });\n  expect(newIssue.ok()).toBeTruthy();\n\n  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);\n  expect(issues.ok()).toBeTruthy();\n  expect(await issues.json()).toContainEqual(expect.objectContaining({\n    title: '[Bug] report 1',\n    body: 'Bug description'\n  }));\n});\n\ntest('should create a feature request', async ({ request }) => {\n  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {\n    data: {\n      title: '[Feature] request 1',\n      body: 'Feature description',\n    }\n  });\n  expect(newIssue.ok()).toBeTruthy();\n\n  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);\n  expect(issues.ok()).toBeTruthy();\n  expect(await issues.json()).toContainEqual(expect.objectContaining({\n    title: '[Feature] request 1',\n    body: 'Feature description'\n  }));\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"setup-and-teardown",children:"Setup and teardown"}),"\n",(0,n.jsxs)(t.p,{children:["These tests assume that repository exists. You probably want to create a new one before running tests and delete it afterwards. Use ",(0,n.jsx)(t.code,{children:"beforeAll"})," and ",(0,n.jsx)(t.code,{children:"afterAll"})," hooks for that."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"test.beforeAll(async ({ request }) => {\n  // Create a new repository\n  const response = await request.post('/user/repos', {\n    data: {\n      name: REPO\n    }\n  });\n  expect(response.ok()).toBeTruthy();\n});\n\ntest.afterAll(async ({ request }) => {\n  // Delete the repository\n  const response = await request.delete(`/repos/${USER}/${REPO}`);\n  expect(response.ok()).toBeTruthy();\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"using-request-context",children:"Using request context"}),"\n",(0,n.jsxs)(t.p,{children:["Behind the scenes, ",(0,n.jsxs)(t.a,{href:"./api/class-fixtures#fixtures-request",children:[(0,n.jsx)(t.code,{children:"request"})," fixture"]})," will actually call ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-apirequest#api-request-new-context",children:"apiRequest.newContext()"}),". You can always do that manually if you'd like more control. Below is a standalone script that does the same as ",(0,n.jsx)(t.code,{children:"beforeAll"})," and ",(0,n.jsx)(t.code,{children:"afterAll"})," from above."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { request } from '@playwright/test';\nconst REPO = 'test-repo-1';\nconst USER = 'github-username';\n\n(async () => {\n  // Create a context that will issue http requests.\n  const context = await request.newContext({\n    baseURL: 'https://api.github.com',\n  });\n\n  // Create a repository.\n  await context.post('/user/repos', {\n    headers: {\n      'Accept': 'application/vnd.github.v3+json',\n      // Add GitHub personal access token.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    },\n    data: {\n      name: REPO\n    }\n  });\n\n  // Delete a repository.\n  await context.delete(`/repos/${USER}/${REPO}`, {\n    headers: {\n      'Accept': 'application/vnd.github.v3+json',\n      // Add GitHub personal access token.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    }\n  });\n})();\n"})}),"\n",(0,n.jsx)(t.h2,{id:"sending-api-requests-from-ui-tests",children:"Sending API requests from UI tests"}),"\n",(0,n.jsxs)(t.p,{children:["While running tests inside browsers you may want to make calls to the HTTP API of your application. It may be helpful if you need to prepare server state before running a test or to check some postconditions on the server after performing some actions in the browser. All of that could be achieved via ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," methods."]}),"\n",(0,n.jsx)(t.h3,{id:"establishing-preconditions",children:"Establishing preconditions"}),"\n",(0,n.jsx)(t.p,{children:"The following test creates a new issue via API and then navigates to the list of all issues in the project to check that it appears at the top of the list."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { test, expect } from '@playwright/test';\n\nconst REPO = 'test-repo-1';\nconst USER = 'github-username';\n\n// Request context is reused by all tests in the file.\nlet apiContext;\n\ntest.beforeAll(async ({ playwright }) => {\n  apiContext = await playwright.request.newContext({\n    // All requests we send go to this API endpoint.\n    baseURL: 'https://api.github.com',\n    extraHTTPHeaders: {\n      // We set this header per GitHub guidelines.\n      'Accept': 'application/vnd.github.v3+json',\n      // Add authorization token to all requests.\n      // Assuming personal access token available in the environment.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    },\n  });\n});\n\ntest.afterAll(async ({ }) => {\n  // Dispose all responses.\n  await apiContext.dispose();\n});\n\ntest('last created issue should be first in the list', async ({ page }) => {\n  const newIssue = await apiContext.post(`/repos/${USER}/${REPO}/issues`, {\n    data: {\n      title: '[Feature] request 1',\n    }\n  });\n  expect(newIssue.ok()).toBeTruthy();\n\n  await page.goto(`https://github.com/${USER}/${REPO}/issues`);\n  const firstIssue = page.locator(`a[data-hovercard-type='issue']`).first();\n  await expect(firstIssue).toHaveText('[Feature] request 1');\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"validating-postconditions",children:"Validating postconditions"}),"\n",(0,n.jsx)(t.p,{children:"The following test creates a new issue via user interface in the browser and then uses checks if it was created via API:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { test, expect } from '@playwright/test';\n\nconst REPO = 'test-repo-1';\nconst USER = 'github-username';\n\n// Request context is reused by all tests in the file.\nlet apiContext;\n\ntest.beforeAll(async ({ playwright }) => {\n  apiContext = await playwright.request.newContext({\n    // All requests we send go to this API endpoint.\n    baseURL: 'https://api.github.com',\n    extraHTTPHeaders: {\n      // We set this header per GitHub guidelines.\n      'Accept': 'application/vnd.github.v3+json',\n      // Add authorization token to all requests.\n      // Assuming personal access token available in the environment.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    },\n  });\n});\n\ntest.afterAll(async ({ }) => {\n  // Dispose all responses.\n  await apiContext.dispose();\n});\n\ntest('last created issue should be on the server', async ({ page }) => {\n  await page.goto(`https://github.com/${USER}/${REPO}/issues`);\n  await page.getByText('New Issue').click();\n  await page.getByRole('textbox', { name: 'Title' }).fill('Bug report 1');\n  await page.getByRole('textbox', { name: 'Comment body' }).fill('Bug description');\n  await page.getByText('Submit new issue').click();\n  const issueId = page.url().substr(page.url().lastIndexOf('/'));\n\n  const newIssue = await apiContext.get(\n      `https://api.github.com/repos/${USER}/${REPO}/issues/${issueId}`\n  );\n  expect(newIssue.ok()).toBeTruthy();\n  expect(newIssue.json()).toEqual(expect.objectContaining({\n    title: 'Bug report 1'\n  }));\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"reusing-authentication-state",children:"Reusing authentication state"}),"\n",(0,n.jsxs)(t.p,{children:["Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",children:"cookies"}),". Playwright provides ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext#api-request-context-storage-state",children:"apiRequestContext.storageState()"})," method that can be used to retrieve storage state from an authenticated context and then create new contexts with that state."]}),"\n",(0,n.jsxs)(t.p,{children:["Storage state is interchangeable between ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"})," and ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"}),". You can use it to log in via API calls and then create a new context with cookies already there. The following code snippet retrieves state from an authenticated ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," and creates a new ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"})," with that state."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const requestContext = await request.newContext({\n  httpCredentials: {\n    username: 'user',\n    password: 'passwd'\n  }\n});\nawait requestContext.get(`https://api.example.com/login`);\n// Save storage state into the file.\nawait requestContext.storageState({ path: 'state.json' });\n\n// Create a new context with the saved storage state.\nconst context = await browser.newContext({ storageState: 'state.json' });\n"})}),"\n",(0,n.jsx)(t.h2,{id:"context-request-vs-global-request",children:"Context request vs global request"}),"\n",(0,n.jsxs)(t.p,{children:["There are two types of ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["associated with a ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"})]}),"\n",(0,n.jsxs)(t.li,{children:["isolated instance, created via ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-apirequest#api-request-new-context",children:"apiRequest.newContext()"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The main difference is that ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," accessible via ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-browsercontext#browser-context-request",children:"browserContext.request"})," and ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-page#page-request",children:"page.request"})," will populate request's ",(0,n.jsx)(t.code,{children:"Cookie"})," header from the browser context and will automatically update browser cookies if ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-apiresponse",title:"APIResponse",children:"APIResponse"})," has ",(0,n.jsx)(t.code,{children:"Set-Cookie"})," header:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"test('context request will share cookie storage with its browser context', async ({\n  page,\n  context,\n}) => {\n  await context.route('https://www.github.com/', async route => {\n    // Send an API request that shares cookie storage with the browser context.\n    const response = await context.request.fetch(route.request());\n    const responseHeaders = response.headers();\n\n    // The response will have 'Set-Cookie' header.\n    const responseCookies = new Map(responseHeaders['set-cookie']\n        .split('\\n')\n        .map(c => c.split(';', 2)[0].split('=')));\n    // The response will have 3 cookies in 'Set-Cookie' header.\n    expect(responseCookies.size).toBe(3);\n    const contextCookies = await context.cookies();\n    // The browser context will already contain all the cookies from the API response.\n    expect(new Map(contextCookies.map(({ name, value }) =>\n      [name, value])\n    )).toEqual(responseCookies);\n\n    await route.fulfill({\n      response,\n      headers: { ...responseHeaders, foo: 'bar' },\n    });\n  });\n  await page.goto('https://www.github.com/');\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If you don't want ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," to use and update cookies from the browser context, you can manually create a new instance of ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," which will have its own isolated cookies:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"test('global context request has isolated cookie storage', async ({\n  page,\n  context,\n  browser,\n  playwright\n}) => {\n  // Create a new instance of APIRequestContext with isolated cookie storage.\n  const request = await playwright.request.newContext();\n  await context.route('https://www.github.com/', async route => {\n    const response = await request.fetch(route.request());\n    const responseHeaders = response.headers();\n\n    const responseCookies = new Map(responseHeaders['set-cookie']\n        .split('\\n')\n        .map(c => c.split(';', 2)[0].split('=')));\n    // The response will have 3 cookies in 'Set-Cookie' header.\n    expect(responseCookies.size).toBe(3);\n    const contextCookies = await context.cookies();\n    // The browser context will not have any cookies from the isolated API request.\n    expect(contextCookies.length).toBe(0);\n\n    // Manually export cookie storage.\n    const storageState = await request.storageState();\n    // Create a new context and initialize it with the cookies from the global request.\n    const browserContext2 = await browser.newContext({ storageState });\n    const contextCookies2 = await browserContext2.cookies();\n    // The new browser context will already contain all the cookies from the API response.\n    expect(\n        new Map(contextCookies2.map(({ name, value }) => [name, value]))\n    ).toEqual(responseCookies);\n\n    await route.fulfill({\n      response,\n      headers: { ...responseHeaders, foo: 'bar' },\n    });\n  });\n  await page.goto('https://www.github.com/');\n  await request.dispose();\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);