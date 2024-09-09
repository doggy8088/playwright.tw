"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7707],{5347:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=s(4848),o=s(8453);s(4235),s(8328),s(3078);const i={id:"api-testing",title:"API \u6e2c\u8a66"},a=void 0,r={id:"api-testing",title:"API \u6e2c\u8a66",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/api-testing.mdx",sourceDirName:".",slug:"/api-testing",permalink:"/docs/api-testing",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"api-testing",title:"API \u6e2c\u8a66"},sidebar:"docs",previous:{title:"\u65b7\u8a00",permalink:"/docs/test-assertions"},next:{title:"\u8eab\u4efd\u9a57\u8b49",permalink:"/docs/auth"}},c={},l=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u64b0\u5beb API \u6e2c\u8a66",id:"\u64b0\u5beb-api-\u6e2c\u8a66",level:2},{value:"\u8a2d\u5b9a",id:"\u8a2d\u5b9a",level:3},{value:"\u64b0\u5beb\u6e2c\u8a66",id:"\u64b0\u5beb\u6e2c\u8a66",level:3},{value:"\u8a2d\u5b9a\u548c\u62c6\u5378",id:"\u8a2d\u5b9a\u548c\u62c6\u5378",level:3},{value:"\u4f7f\u7528\u8acb\u6c42\u4e0a\u4e0b\u6587",id:"\u4f7f\u7528\u8acb\u6c42\u4e0a\u4e0b\u6587",level:2},{value:"\u5f9e UI \u6e2c\u8a66\u767c\u9001 API \u8acb\u6c42",id:"\u5f9e-ui-\u6e2c\u8a66\u767c\u9001-api-\u8acb\u6c42",level:2},{value:"\u5efa\u7acb\u524d\u63d0\u689d\u4ef6",id:"\u5efa\u7acb\u524d\u63d0\u689d\u4ef6",level:3},{value:"\u9a57\u8b49\u5f8c\u7f6e\u689d\u4ef6",id:"\u9a57\u8b49\u5f8c\u7f6e\u689d\u4ef6",level:3},{value:"\u91cd\u8907\u4f7f\u7528\u8a8d\u8b49\u72c0\u614b",id:"\u91cd\u8907\u4f7f\u7528\u8a8d\u8b49\u72c0\u614b",level:2},{value:"Context request vs \u5168\u57df request",id:"context-request-vs-\u5168\u57df-request",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright \u53ef\u4ee5\u7528\u4f86\u5b58\u53d6\u4f60\u7684\u61c9\u7528\u7a0b\u5f0f\u7684 ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Representational_state_transfer",children:"REST"})," API\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u6709\u6642\u4f60\u53ef\u80fd\u60f3\u8981\u76f4\u63a5\u5f9e Node.js \u5411\u4f3a\u670d\u5668\u767c\u9001\u8acb\u6c42\uff0c\u800c\u4e0d\u9700\u8981\u52a0\u8f09\u9801\u9762\u4e26\u5728\u5176\u4e2d\u57f7\u884c js \u7a0b\u5f0f\u78bc\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u53ef\u80fd\u6703\u6d3e\u4e0a\u7528\u5834\u7684\u7bc4\u4f8b:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u6e2c\u8a66\u4f60\u7684\u4f3a\u670d\u5668 API\u3002"}),"\n",(0,n.jsx)(t.li,{children:"\u5728\u6e2c\u8a66\u4e2d\u8a2a\u554f web \u61c9\u7528\u7a0b\u5f0f\u4e4b\u524d\u6e96\u5099\u4f3a\u670d\u5668\u7aef\u72c0\u614b\u3002"}),"\n",(0,n.jsx)(t.li,{children:"\u5728\u700f\u89bd\u5668\u4e2d\u57f7\u884c\u4e00\u4e9b\u64cd\u4f5c\u5f8c\u9a57\u8b49\u4f3a\u670d\u5668\u7aef\u5f8c\u7f6e\u689d\u4ef6\u3002"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["\u6240\u6709\u9019\u4e9b\u90fd\u53ef\u4ee5\u901a\u904e ",(0,n.jsx)(t.a,{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," \u65b9\u6cd5\u5be6\u73fe\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u64b0\u5beb-api-\u6e2c\u8a66",children:"\u64b0\u5beb API \u6e2c\u8a66"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," \u53ef\u4ee5\u900f\u904e\u7db2\u8def\u767c\u9001\u5404\u7a2e HTTP(S) \u8acb\u6c42\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u4ee5\u4e0b\u7bc4\u4f8b\u5c55\u793a\u5982\u4f55\u4f7f\u7528 Playwright \u6e2c\u8a66\u901a\u904e ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/rest",children:"GitHub API"})," \u5efa\u7acb\u554f\u984c\u3002\u6e2c\u8a66\u5957\u4ef6\u5c07\u57f7\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u5efa\u7acb\u4e00\u500b\u65b0\u7684\u5132\u5b58\u5eab\u5f8c\u57f7\u884c\u6e2c\u8a66\u3002"}),"\n",(0,n.jsx)(t.li,{children:"\u5efa\u7acb\u4e00\u4e9b\u554f\u984c\u4e26\u9a57\u8b49\u4f3a\u670d\u5668\u72c0\u614b\u3002"}),"\n",(0,n.jsx)(t.li,{children:"\u57f7\u884c\u6e2c\u8a66\u5f8c\u522a\u9664\u5132\u5b58\u5eab\u3002"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"\u8a2d\u5b9a",children:"\u8a2d\u5b9a"}),"\n",(0,n.jsxs)(t.p,{children:["GitHub API \u9700\u8981\u6388\u6b0a\uff0c\u56e0\u6b64\u6211\u5011\u5c07\u70ba\u6240\u6709\u6e2c\u8a66\u8a2d\u5b9a\u4e00\u6b21\u6027 token\u3002\u5728\u6b64\u540c\u6642\uff0c\u6211\u5011\u4e5f\u6703\u8a2d\u5b9a ",(0,n.jsx)(t.code,{children:"baseURL"})," \u4ee5\u7c21\u5316\u6e2c\u8a66\u3002\u4f60\u53ef\u4ee5\u5c07\u5b83\u5011\u653e\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u6216\u8005\u5728\u6e2c\u8a66\u6587\u4ef6\u4e2d\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"test.use()"}),"\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\nexport default defineConfig({\n  use: {\n    // All requests we send go to this API endpoint.\n    baseURL: 'https://api.github.com',\n    extraHTTPHeaders: {\n      // We set this header per GitHub guidelines.\n      'Accept': 'application/vnd.github.v3+json',\n      // Add authorization token to all requests.\n      // Assuming personal access token available in the environment.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    },\n  }\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"\u4ee3\u7406\u914d\u7f6e"})}),"\n",(0,n.jsxs)(t.p,{children:["\u5982\u679c\u4f60\u7684\u6e2c\u8a66\u9700\u8981\u5728\u4ee3\u7406\u4f3a\u670d\u5668\u5f8c\u9762\u57f7\u884c\uff0c\u4f60\u53ef\u4ee5\u5728\u914d\u7f6e\u4e2d\u6307\u5b9a\u9019\u4e00\u9ede\uff0c",(0,n.jsx)(t.code,{children:"request"})," \u56fa\u5b9a\u88dd\u7f6e\u6703\u81ea\u52d5\u9078\u53d6\u5b83:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\nexport default defineConfig({\n  use: {\n    proxy: {\n      server: 'http://my-proxy:8080',\n      username: 'user',\n      password: 'secret'\n    },\n  }\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"\u64b0\u5beb\u6e2c\u8a66",children:"\u64b0\u5beb\u6e2c\u8a66"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright Test \u5167\u5efa ",(0,n.jsx)(t.code,{children:"request"})," fixture\uff0c\u9075\u5faa\u6211\u5011\u6307\u5b9a\u7684 ",(0,n.jsx)(t.code,{children:"baseURL"})," \u6216 ",(0,n.jsx)(t.code,{children:"extraHTTPHeaders"})," \u7b49\u914d\u7f6e\u9078\u9805\uff0c\u4e26\u6e96\u5099\u767c\u9001\u4e00\u4e9b\u8acb\u6c42\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u73fe\u5728\u6211\u5011\u53ef\u4ee5\u65b0\u589e\u4e00\u4e9b\u6e2c\u8a66\uff0c\u9019\u4e9b\u6e2c\u8a66\u5c07\u5728\u5132\u5b58\u5eab\u4e2d\u5efa\u7acb\u65b0\u7684\u554f\u984c\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const REPO = 'test-repo-1';\nconst USER = 'github-username';\n\ntest('should create a bug report', async ({ request }) => {\n  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {\n    data: {\n      title: '[Bug] report 1',\n      body: 'Bug description',\n    }\n  });\n  expect(newIssue.ok()).toBeTruthy();\n\n  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);\n  expect(issues.ok()).toBeTruthy();\n  expect(await issues.json()).toContainEqual(expect.objectContaining({\n    title: '[Bug] report 1',\n    body: 'Bug description'\n  }));\n});\n\ntest('should create a feature request', async ({ request }) => {\n  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {\n    data: {\n      title: '[Feature] request 1',\n      body: 'Feature description',\n    }\n  });\n  expect(newIssue.ok()).toBeTruthy();\n\n  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);\n  expect(issues.ok()).toBeTruthy();\n  expect(await issues.json()).toContainEqual(expect.objectContaining({\n    title: '[Feature] request 1',\n    body: 'Feature description'\n  }));\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"\u8a2d\u5b9a\u548c\u62c6\u5378",children:"\u8a2d\u5b9a\u548c\u62c6\u5378"}),"\n",(0,n.jsxs)(t.p,{children:["\u9019\u4e9b\u6e2c\u8a66\u5047\u8a2d\u8cc7\u6599\u5eab\u5df2\u5b58\u5728\u3002\u4f60\u53ef\u80fd\u60f3\u5728\u57f7\u884c\u6e2c\u8a66\u4e4b\u524d\u5efa\u7acb\u4e00\u500b\u65b0\u7684\uff0c\u4e26\u5728\u4e4b\u5f8c\u522a\u9664\u5b83\u3002\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"beforeAll"})," \u548c ",(0,n.jsx)(t.code,{children:"afterAll"})," \u9264\u5b50\u4f86\u5be6\u73fe\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"test.beforeAll(async ({ request }) => {\n  // Create a new repository\n  const response = await request.post('/user/repos', {\n    data: {\n      name: REPO\n    }\n  });\n  expect(response.ok()).toBeTruthy();\n});\n\ntest.afterAll(async ({ request }) => {\n  // Delete the repository\n  const response = await request.delete(`/repos/${USER}/${REPO}`);\n  expect(response.ok()).toBeTruthy();\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u4f7f\u7528\u8acb\u6c42\u4e0a\u4e0b\u6587",children:"\u4f7f\u7528\u8acb\u6c42\u4e0a\u4e0b\u6587"}),"\n",(0,n.jsxs)(t.p,{children:["\u5e55\u5f8c\uff0c",(0,n.jsxs)(t.a,{href:"./api/class-fixtures#fixtures-request",children:[(0,n.jsx)(t.code,{children:"request"})," fixture"]})," \u5be6\u969b\u4e0a\u6703\u547c\u53eb ",(0,n.jsx)(t.a,{href:"/docs/api/class-apirequest#api-request-new-context",children:"apiRequest.newContext()"}),"\u3002\u5982\u679c\u4f60\u60f3\u8981\u66f4\u591a\u63a7\u5236\u6b0a\uff0c\u4f60\u53ef\u4ee5\u624b\u52d5\u57f7\u884c\u3002\u4ee5\u4e0b\u662f\u4e00\u500b\u7368\u7acb\u7684\u8173\u672c\uff0c\u5b83\u8207\u4e0a\u9762\u7684 ",(0,n.jsx)(t.code,{children:"beforeAll"})," \u548c ",(0,n.jsx)(t.code,{children:"afterAll"})," \u505a\u540c\u6a23\u7684\u4e8b\u60c5\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { request } from '@playwright/test';\nconst REPO = 'test-repo-1';\nconst USER = 'github-username';\n\n(async () => {\n  // Create a context that will issue http requests.\n  const context = await request.newContext({\n    baseURL: 'https://api.github.com',\n  });\n\n  // Create a repository.\n  await context.post('/user/repos', {\n    headers: {\n      'Accept': 'application/vnd.github.v3+json',\n      // Add GitHub personal access token.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    },\n    data: {\n      name: REPO\n    }\n  });\n\n  // Delete a repository.\n  await context.delete(`/repos/${USER}/${REPO}`, {\n    headers: {\n      'Accept': 'application/vnd.github.v3+json',\n      // Add GitHub personal access token.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    }\n  });\n})();\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u5f9e-ui-\u6e2c\u8a66\u767c\u9001-api-\u8acb\u6c42",children:"\u5f9e UI \u6e2c\u8a66\u767c\u9001 API \u8acb\u6c42"}),"\n",(0,n.jsxs)(t.p,{children:["\u5728\u700f\u89bd\u5668\u5167\u57f7\u884c\u6e2c\u8a66\u6642\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u547c\u53eb\u61c9\u7528\u7a0b\u5f0f\u7684 HTTP API\u3002\u5982\u679c\u60a8\u9700\u8981\u5728\u57f7\u884c\u6e2c\u8a66\u4e4b\u524d\u6e96\u5099\u4f3a\u670d\u5668\u72c0\u614b\u6216\u5728\u700f\u89bd\u5668\u4e2d\u57f7\u884c\u67d0\u4e9b\u64cd\u4f5c\u5f8c\u6aa2\u67e5\u4f3a\u670d\u5668\u4e0a\u7684\u4e00\u4e9b\u5f8c\u7f6e\u689d\u4ef6\uff0c\u9019\u53ef\u80fd\u6703\u5f88\u6709\u5e6b\u52a9\u3002\u6240\u6709\u9019\u4e9b\u90fd\u53ef\u4ee5\u901a\u904e ",(0,n.jsx)(t.a,{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," \u65b9\u6cd5\u4f86\u5be6\u73fe\u3002"]}),"\n",(0,n.jsx)(t.h3,{id:"\u5efa\u7acb\u524d\u63d0\u689d\u4ef6",children:"\u5efa\u7acb\u524d\u63d0\u689d\u4ef6"}),"\n",(0,n.jsx)(t.p,{children:"\u4ee5\u4e0b\u6e2c\u8a66\u901a\u904e API \u5efa\u7acb\u4e00\u500b\u65b0\u554f\u984c\uff0c\u7136\u5f8c\u5c0e\u822a\u5230\u5c08\u6848\u4e2d\u6240\u6709\u554f\u984c\u7684\u5217\u8868\uff0c\u4ee5\u6aa2\u67e5\u5b83\u662f\u5426\u51fa\u73fe\u5728\u5217\u8868\u9802\u90e8\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { test, expect } from '@playwright/test';\n\nconst REPO = 'test-repo-1';\nconst USER = 'github-username';\n\n// Request context is reused by all tests in the file.\nlet apiContext;\n\ntest.beforeAll(async ({ playwright }) => {\n  apiContext = await playwright.request.newContext({\n    // All requests we send go to this API endpoint.\n    baseURL: 'https://api.github.com',\n    extraHTTPHeaders: {\n      // We set this header per GitHub guidelines.\n      'Accept': 'application/vnd.github.v3+json',\n      // Add authorization token to all requests.\n      // Assuming personal access token available in the environment.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    },\n  });\n});\n\ntest.afterAll(async ({ }) => {\n  // Dispose all responses.\n  await apiContext.dispose();\n});\n\ntest('last created issue should be first in the list', async ({ page }) => {\n  const newIssue = await apiContext.post(`/repos/${USER}/${REPO}/issues`, {\n    data: {\n      title: '[Feature] request 1',\n    }\n  });\n  expect(newIssue.ok()).toBeTruthy();\n\n  await page.goto(`https://github.com/${USER}/${REPO}/issues`);\n  const firstIssue = page.locator(`a[data-hovercard-type='issue']`).first();\n  await expect(firstIssue).toHaveText('[Feature] request 1');\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"\u9a57\u8b49\u5f8c\u7f6e\u689d\u4ef6",children:"\u9a57\u8b49\u5f8c\u7f6e\u689d\u4ef6"}),"\n",(0,n.jsx)(t.p,{children:"\u4ee5\u4e0b\u6e2c\u8a66\u901a\u904e\u700f\u89bd\u5668\u4e2d\u7684\u4f7f\u7528\u8005\u4ecb\u9762\u5efa\u7acb\u4e00\u500b\u65b0\u554f\u984c\uff0c\u7136\u5f8c\u4f7f\u7528\u6aa2\u67e5\u662f\u5426\u901a\u904e API \u5efa\u7acb:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { test, expect } from '@playwright/test';\n\nconst REPO = 'test-repo-1';\nconst USER = 'github-username';\n\n// Request context is reused by all tests in the file.\nlet apiContext;\n\ntest.beforeAll(async ({ playwright }) => {\n  apiContext = await playwright.request.newContext({\n    // All requests we send go to this API endpoint.\n    baseURL: 'https://api.github.com',\n    extraHTTPHeaders: {\n      // We set this header per GitHub guidelines.\n      'Accept': 'application/vnd.github.v3+json',\n      // Add authorization token to all requests.\n      // Assuming personal access token available in the environment.\n      'Authorization': `token ${process.env.API_TOKEN}`,\n    },\n  });\n});\n\ntest.afterAll(async ({ }) => {\n  // Dispose all responses.\n  await apiContext.dispose();\n});\n\ntest('last created issue should be on the server', async ({ page }) => {\n  await page.goto(`https://github.com/${USER}/${REPO}/issues`);\n  await page.getByText('New Issue').click();\n  await page.getByRole('textbox', { name: 'Title' }).fill('Bug report 1');\n  await page.getByRole('textbox', { name: 'Comment body' }).fill('Bug description');\n  await page.getByText('Submit new issue').click();\n  const issueId = page.url().substr(page.url().lastIndexOf('/'));\n\n  const newIssue = await apiContext.get(\n      `https://api.github.com/repos/${USER}/${REPO}/issues/${issueId}`\n  );\n  expect(newIssue.ok()).toBeTruthy();\n  expect(newIssue.json()).toEqual(expect.objectContaining({\n    title: 'Bug report 1'\n  }));\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u91cd\u8907\u4f7f\u7528\u8a8d\u8b49\u72c0\u614b",children:"\u91cd\u8907\u4f7f\u7528\u8a8d\u8b49\u72c0\u614b"}),"\n",(0,n.jsxs)(t.p,{children:["Web apps \u4f7f\u7528\u57fa\u65bc cookie \u6216 token \u7684\u8eab\u4efd\u9a57\u8b49\uff0c\u5df2\u9a57\u8b49\u7684\u72c0\u614b\u5b58\u5132\u70ba ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",children:"cookies"}),"\u3002Playwright \u63d0\u4f9b ",(0,n.jsx)(t.a,{href:"/docs/api/class-apirequestcontext#api-request-context-storage-state",children:"apiRequestContext.storageState()"})," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u7528\u4f86\u5f9e\u5df2\u9a57\u8b49\u7684\u4e0a\u4e0b\u6587\u4e2d\u6aa2\u7d22\u5b58\u5132\u72c0\u614b\uff0c\u7136\u5f8c\u4f7f\u7528\u8a72\u72c0\u614b\u5efa\u7acb\u65b0\u7684\u4e0a\u4e0b\u6587\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u5132\u5b58\u72c0\u614b\u5728 ",(0,n.jsx)(t.a,{href:"/docs/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"})," \u548c ",(0,n.jsx)(t.a,{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," \u4e4b\u9593\u662f\u53ef\u4e92\u63db\u7684\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u901a\u904e API \u547c\u53eb\u767b\u5165\uff0c\u7136\u5f8c\u5efa\u7acb\u4e00\u500b\u5df2\u7d93\u5305\u542b cookies \u7684\u65b0 context\u3002\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u7247\u6bb5\u5f9e\u5df2\u9a57\u8b49\u7684 ",(0,n.jsx)(t.a,{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," \u4e2d\u6aa2\u7d22\u72c0\u614b\uff0c\u4e26\u4f7f\u7528\u8a72\u72c0\u614b\u5efa\u7acb\u4e00\u500b\u65b0\u7684 ",(0,n.jsx)(t.a,{href:"/docs/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"}),"\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const requestContext = await request.newContext({\n  httpCredentials: {\n    username: 'user',\n    password: 'passwd'\n  }\n});\nawait requestContext.get(`https://api.example.com/login`);\n// Save storage state into the file.\nawait requestContext.storageState({ path: 'state.json' });\n\n// Create a new context with the saved storage state.\nconst context = await browser.newContext({ storageState: 'state.json' });\n"})}),"\n",(0,n.jsx)(t.h2,{id:"context-request-vs-\u5168\u57df-request",children:"Context request vs \u5168\u57df request"}),"\n",(0,n.jsxs)(t.p,{children:["\u6709\u5169\u7a2e\u985e\u578b\u7684 ",(0,n.jsx)(t.a,{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"}),"\uff1a"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\u8207 ",(0,n.jsx)(t.a,{href:"/docs/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"})," \u76f8\u95dc"]}),"\n",(0,n.jsxs)(t.li,{children:["\u5efa\u7acb\u7684\u9694\u96e2\u5be6\u4f8b\uff0c\u901a\u904e ",(0,n.jsx)(t.a,{href:"/docs/api/class-apirequest#api-request-new-context",children:"apiRequest.newContext()"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["\u4e3b\u8981\u7684\u5340\u5225\u5728\u65bc\u901a\u904e ",(0,n.jsx)(t.a,{href:"/docs/api/class-browsercontext#browser-context-request",children:"browserContext.request"})," \u548c ",(0,n.jsx)(t.a,{href:"/docs/api/class-page#page-request",children:"page.request"})," \u8a2a\u554f\u7684 ",(0,n.jsx)(t.a,{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," \u6703\u5f9e\u700f\u89bd\u5668 context \u586b\u5145\u8acb\u6c42\u7684 ",(0,n.jsx)(t.code,{children:"Cookie"})," \u6a19\u982d\uff0c\u4e26\u4e14\u5982\u679c ",(0,n.jsx)(t.a,{href:"/docs/api/class-apiresponse",title:"APIResponse",children:"APIResponse"})," \u6709 ",(0,n.jsx)(t.code,{children:"Set-Cookie"})," \u6a19\u982d\uff0c\u5247\u6703\u81ea\u52d5\u66f4\u65b0\u700f\u89bd\u5668 cookies\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"test('context request will share cookie storage with its browser context', async ({\n  page,\n  context,\n}) => {\n  await context.route('https://www.github.com/', async route => {\n    // Send an API request that shares cookie storage with the browser context.\n    const response = await context.request.fetch(route.request());\n    const responseHeaders = response.headers();\n\n    // The response will have 'Set-Cookie' header.\n    const responseCookies = new Map(responseHeaders['set-cookie']\n        .split('\\n')\n        .map(c => c.split(';', 2)[0].split('=')));\n    // The response will have 3 cookies in 'Set-Cookie' header.\n    expect(responseCookies.size).toBe(3);\n    const contextCookies = await context.cookies();\n    // The browser context will already contain all the cookies from the API response.\n    expect(new Map(contextCookies.map(({ name, value }) =>\n      [name, value])\n    )).toEqual(responseCookies);\n\n    await route.fulfill({\n      response,\n      headers: { ...responseHeaders, foo: 'bar' },\n    });\n  });\n  await page.goto('https://www.github.com/');\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u5982\u679c\u4f60\u4e0d\u5e0c\u671b ",(0,n.jsx)(t.a,{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," \u4f7f\u7528\u548c\u66f4\u65b0\u4f86\u81ea\u700f\u89bd\u5668\u4e0a\u4e0b\u6587\u7684 cookies\uff0c\u4f60\u53ef\u4ee5\u624b\u52d5\u5efa\u7acb\u4e00\u500b\u65b0\u7684 ",(0,n.jsx)(t.a,{href:"/docs/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," \u5be6\u4f8b\uff0c\u9019\u5c07\u64c1\u6709\u5176\u81ea\u8eab\u9694\u96e2\u7684 cookies:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"test('global context request has isolated cookie storage', async ({\n  page,\n  context,\n  browser,\n  playwright\n}) => {\n  // Create a new instance of APIRequestContext with isolated cookie storage.\n  const request = await playwright.request.newContext();\n  await context.route('https://www.github.com/', async route => {\n    const response = await request.fetch(route.request());\n    const responseHeaders = response.headers();\n\n    const responseCookies = new Map(responseHeaders['set-cookie']\n        .split('\\n')\n        .map(c => c.split(';', 2)[0].split('=')));\n    // The response will have 3 cookies in 'Set-Cookie' header.\n    expect(responseCookies.size).toBe(3);\n    const contextCookies = await context.cookies();\n    // The browser context will not have any cookies from the isolated API request.\n    expect(contextCookies.length).toBe(0);\n\n    // Manually export cookie storage.\n    const storageState = await request.storageState();\n    // Create a new context and initialize it with the cookies from the global request.\n    const browserContext2 = await browser.newContext({ storageState });\n    const contextCookies2 = await browserContext2.cookies();\n    // The new browser context will already contain all the cookies from the API response.\n    expect(\n        new Map(contextCookies2.map(({ name, value }) => [name, value]))\n    ).toEqual(responseCookies);\n\n    await route.fulfill({\n      response,\n      headers: { ...responseHeaders, foo: 'bar' },\n    });\n  });\n  await page.goto('https://www.github.com/');\n  await request.dispose();\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}}}]);