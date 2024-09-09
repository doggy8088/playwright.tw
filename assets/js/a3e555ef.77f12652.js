"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[626],{5179:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var r=n(4848),l=n(8453),i=n(4235),t=n(8328);n(3078);const c={id:"test-retries",title:"\u91cd\u8a66"},d=void 0,a={id:"test-retries",title:"\u91cd\u8a66",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/test-retries.mdx",sourceDirName:".",slug:"/test-retries",permalink:"/docs/test-retries",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"test-retries",title:"\u91cd\u8a66"},sidebar:"docs",previous:{title:"\u5831\u544a\u5668",permalink:"/docs/test-reporters"},next:{title:"\u5206\u7247",permalink:"/docs/test-sharding"}},o={},h=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u5931\u6557",id:"\u5931\u6557",level:2},{value:"\u91cd\u8a66",id:"\u91cd\u8a66",level:2},{value:"\u5e8f\u5217\u6a21\u5f0f",id:"\u5e8f\u5217\u6a21\u5f0f",level:2},{value:"\u5728\u6e2c\u8a66\u4e4b\u9593\u91cd\u7528\u55ae\u9801",id:"\u5728\u6e2c\u8a66\u4e4b\u9593\u91cd\u7528\u55ae\u9801",level:2}];function x(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,r.jsxs)(s.p,{children:["\u6e2c\u8a66\u91cd\u8a66\u662f\u4e00\u7a2e\u5728\u6e2c\u8a66\u5931\u6557\u6642\u81ea\u52d5\u91cd\u65b0\u57f7\u884c\u6e2c\u8a66\u7684\u65b9\u6cd5\u3002\u9019\u5728\u6e2c\u8a66\u4e0d\u7a69\u5b9a\u4e14\u5076\u723e\u5931\u6557\u6642\u975e\u5e38\u6709\u7528\u3002\u6e2c\u8a66\u91cd\u8a66\u5728",(0,r.jsx)(s.a,{href:"/docs/test-configuration",children:"\u914d\u7f6e\u6587\u4ef6"}),"\u4e2d\u914d\u7f6e\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u5931\u6557",children:"\u5931\u6557"}),"\n",(0,r.jsx)(s.p,{children:"Playwright Test \u5728\u5de5\u4f5c\u7a0b\u5e8f\u4e2d\u57f7\u884c\u6e2c\u8a66\u3002\u9019\u4e9b\u7a0b\u5e8f\u662f\u4f5c\u696d\u7cfb\u7d71\u7a0b\u5e8f\uff0c\u7368\u7acb\u57f7\u884c\uff0c\u7531\u6e2c\u8a66\u57f7\u884c\u5668\u5354\u8abf\u3002\u6240\u6709\u5de5\u4f5c\u7a0b\u5e8f\u90fd\u6709\u76f8\u540c\u7684\u74b0\u5883\uff0c\u6bcf\u500b\u90fd\u555f\u52d5\u81ea\u5df1\u7684\u700f\u89bd\u5668\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u8003\u616e\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u7247\u6bb5:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"import { test } from '@playwright/test';\n\ntest.describe('suite', () => {\n  test.beforeAll(async () => { /* ... */ });\n  test('first good', async ({ page }) => { /* ... */ });\n  test('second flaky', async ({ page }) => { /* ... */ });\n  test('third good', async ({ page }) => { /* ... */ });\n  test.afterAll(async () => { /* ... */ });\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u7576",(0,r.jsx)(s.strong,{children:"\u6240\u6709\u6e2c\u8a66\u901a\u904e"}),"\u6642\uff0c\u5b83\u5011\u5c07\u5728\u76f8\u540c\u7684\u5de5\u4f5c\u7a0b\u5e8f\u4e2d\u6309\u9806\u5e8f\u57f7\u884c\u3002"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Worker process \u958b\u59cb","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"beforeAll"})," hook \u57f7\u884c"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"first good"})," \u901a\u904e"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"second flaky"})," \u901a\u904e"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"third good"})," \u901a\u904e"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"afterAll"})," hook \u57f7\u884c"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c",(0,r.jsx)(s.strong,{children:"\u4efb\u4f55\u6e2c\u8a66\u5931\u6557"}),"\uff0cPlaywright Test \u6703\u4e1f\u68c4\u6574\u500b\u5de5\u4f5c\u7a0b\u5e8f\u4ee5\u53ca\u700f\u89bd\u5668\uff0c\u4e26\u555f\u52d5\u4e00\u500b\u65b0\u7684\u3002\u6e2c\u8a66\u5c07\u5728\u65b0\u7684\u5de5\u4f5c\u7a0b\u5e8f\u4e2d\u5f9e\u4e0b\u4e00\u500b\u6e2c\u8a66\u958b\u59cb\u7e7c\u7e8c\u3002"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Worker process #1 starts","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"beforeAll"})," hook \u57f7\u884c"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"first good"})," \u901a\u904e"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"second flaky"})," \u5931\u6557"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"afterAll"})," hook \u57f7\u884c"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Worker process #2 starts","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"beforeAll"})," hook \u518d\u6b21\u57f7\u884c"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"third good"})," \u901a\u904e"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"afterAll"})," hook \u57f7\u884c"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u4f60",(0,r.jsxs)(s.strong,{children:["\u555f\u7528 ",(0,r.jsx)(s.a,{href:"#retries",children:"retries"})]}),", \u7b2c\u4e8c\u500b worker process \u5c07\u6703\u5f9e\u91cd\u8a66\u5931\u6557\u7684\u6e2c\u8a66\u958b\u59cb\u4e26\u7e7c\u7e8c\u3002"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Worker process #1 starts","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"beforeAll"})," hook \u57f7\u884c"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"first good"})," \u901a\u904e"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"second flaky"})," \u5931\u6557"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"afterAll"})," hook \u57f7\u884c"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Worker process #2 starts","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"beforeAll"})," hook \u518d\u6b21\u57f7\u884c"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"second flaky"})," \u91cd\u8a66\u4e26\u901a\u904e"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"third good"})," \u901a\u904e"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"afterAll"})," hook \u57f7\u884c"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\u9019\u500b\u65b9\u6848\u5c0d\u65bc\u7368\u7acb\u6e2c\u8a66\u5b8c\u7f8e\u904b\u4f5c\uff0c\u4e26\u4fdd\u8b49\u5931\u6557\u7684\u6e2c\u8a66\u4e0d\u6703\u5f71\u97ff\u6b63\u5e38\u7684\u6e2c\u8a66\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"\u91cd\u8a66",children:"\u91cd\u8a66"}),"\n",(0,r.jsxs)(s.p,{children:["Playwright \u652f\u63f4",(0,r.jsx)(s.strong,{children:"\u6e2c\u8a66\u91cd\u8a66"}),"\u3002\u555f\u7528\u5f8c\uff0c\u5931\u6557\u7684\u6e2c\u8a66\u5c07\u6703\u88ab\u91cd\u8a66\u591a\u6b21\uff0c\u76f4\u5230\u901a\u904e\u70ba\u6b62\uff0c\u6216\u76f4\u5230\u9054\u5230\u6700\u5927\u91cd\u8a66\u6b21\u6578\u70ba\u6b62\u3002\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u5931\u6557\u7684\u6e2c\u8a66\u4e0d\u6703\u88ab\u91cd\u8a66\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"# Give failing tests 3 retry attempts\nnpx playwright test --retries=3\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u60a8\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u91cd\u8a66\u6b21\u6578:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  // Give failing tests 3 retry attempts\n  retries: 3,\n});\n"})}),"\n",(0,r.jsx)(s.p,{children:"Playwright Test \u6703\u5c07\u6e2c\u8a66\u5206\u985e\u5982\u4e0b:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'"passed" - \u7b2c\u4e00\u6b21\u57f7\u884c\u6642\u901a\u904e\u7684\u6e2c\u8a66;'}),"\n",(0,r.jsx)(s.li,{children:'"flaky" - \u7b2c\u4e00\u6b21\u57f7\u884c\u6642\u5931\u6557\uff0c\u4f46\u91cd\u8a66\u6642\u901a\u904e\u7684\u6e2c\u8a66;'}),"\n",(0,r.jsx)(s.li,{children:'"failed" - \u7b2c\u4e00\u6b21\u57f7\u884c\u6642\u5931\u6557\u4e14\u6240\u6709\u91cd\u8a66\u90fd\u5931\u6557\u7684\u6e2c\u8a66\u3002'}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"Running 3 tests using 1 worker\n\n  \u2713 example.spec.ts:4:2 \u203a first passes (438ms)\n  x example.spec.ts:5:2 \u203a second flaky (691ms)\n  \u2713 example.spec.ts:5:2 \u203a second flaky (522ms)\n  \u2713 example.spec.ts:6:2 \u203a third passes (932ms)\n\n  1 flaky\n    example.spec.ts:5:2 \u203a second flaky\n  2 passed (4s)\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u60a8\u53ef\u4ee5\u5728\u57f7\u884c\u6642\u4f7f\u7528 ",(0,r.jsx)(s.a,{href:"/docs/api/class-testinfo#test-info-retry",children:"testInfo.retry"})," \u6aa2\u6e2c\u91cd\u8a66\uff0c\u9019\u5c0d\u4efb\u610f\u6e2c\u8a66\u3001\u639b\u9264\u6216\u56fa\u5b9a\u88dd\u7f6e\u90fd\u662f\u53ef\u8a2a\u554f\u7684\u3002\u9019\u88e1\u6709\u4e00\u500b\u7bc4\u4f8b\uff0c\u5728\u91cd\u8a66\u4e4b\u524d\u6e05\u9664\u4e00\u4e9b\u4f3a\u670d\u5668\u7aef\u72c0\u614b\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"import { test, expect } from '@playwright/test';\n\ntest('my test', async ({ page }, testInfo) => {\n  if (testInfo.retry)\n    await cleanSomeCachesOnTheServer();\n  // ...\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u60a8\u53ef\u4ee5\u70ba\u7279\u5b9a\u7684\u4e00\u7d44\u6e2c\u8a66\u6216\u55ae\u500b\u6a94\u6848\u6307\u5b9a\u91cd\u8a66\u6b21\u6578\uff0c\u8acb\u53c3\u95b1 ",(0,r.jsx)(s.a,{href:"/docs/api/class-test#test-describe-configure",children:"test.describe.configure()"}),"\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"import { test, expect } from '@playwright/test';\n\ntest.describe(() => {\n  // All tests in this describe group will get 2 retry attempts.\n  test.describe.configure({ retries: 2 });\n\n  test('test 1', async ({ page }) => {\n    // ...\n  });\n\n  test('test 2', async ({ page }) => {\n    // ...\n  });\n});\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u5e8f\u5217\u6a21\u5f0f",children:"\u5e8f\u5217\u6a21\u5f0f"}),"\n",(0,r.jsxs)(s.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(s.a,{href:"/docs/api/class-test#test-describe-serial",children:"test.describe.serial()"})," \u5c07\u76f8\u4f9d\u6e2c\u8a66\u5206\u7d44\uff0c\u4ee5\u78ba\u4fdd\u5b83\u5011\u59cb\u7d42\u4e00\u8d77\u4e14\u6309\u9806\u5e8f\u57f7\u884c\u3002\u5982\u679c\u5176\u4e2d\u4e00\u500b\u6e2c\u8a66\u5931\u6557\uff0c\u6240\u6709\u5f8c\u7e8c\u6e2c\u8a66\u5c07\u88ab\u8df3\u904e\u3002\u8a72\u7d44\u4e2d\u7684\u6240\u6709\u6e2c\u8a66\u5c07\u4e00\u8d77\u91cd\u8a66\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u8003\u616e\u4ee5\u4e0b\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"test.describe.serial"})," \u7684\u7a0b\u5f0f\u78bc\u7247\u6bb5:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"import { test } from '@playwright/test';\n\ntest.describe.configure({ mode: 'serial' });\n\ntest.beforeAll(async () => { /* ... */ });\ntest('first good', async ({ page }) => { /* ... */ });\ntest('second flaky', async ({ page }) => { /* ... */ });\ntest('third good', async ({ page }) => { /* ... */ });\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u57f7\u884c\u6642\u6c92\u6709 ",(0,r.jsx)(s.a,{href:"#retries",children:"\u91cd\u8a66"})," \u7684\u60c5\u6cc1\u4e0b\uff0c\u5931\u6557\u5f8c\u7684\u6240\u6709\u6e2c\u8a66\u90fd\u6703\u88ab\u8df3\u904e\uff1a"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Worker process #1:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"beforeAll"})," hook \u57f7\u884c"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"first good"})," \u901a\u904e"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"second flaky"})," \u5931\u6557"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"third good"})," \u5b8c\u5168\u8df3\u904e"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u57f7\u884c ",(0,r.jsx)(s.a,{href:"#retries",children:"retries"})," \u6642\uff0c\u6240\u6709\u6e2c\u8a66\u6703\u4e00\u8d77\u91cd\u8a66\uff1a"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Worker process #1:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"beforeAll"})," hook \u57f7\u884c"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"first good"})," \u901a\u904e"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"second flaky"})," \u5931\u6557"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"third good"})," \u88ab\u8df3\u904e"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Worker process #2:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"beforeAll"})," hook \u518d\u6b21\u57f7\u884c"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"first good"})," \u518d\u6b21\u901a\u904e"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"second flaky"})," \u901a\u904e"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"third good"})," \u901a\u904e"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"\u901a\u5e38\u6700\u597d\u4f7f\u60a8\u7684\u6e2c\u8a66\u4fdd\u6301\u7368\u7acb\uff0c\u9019\u6a23\u5b83\u5011\u53ef\u4ee5\u6709\u6548\u5730\u7368\u7acb\u57f7\u884c\u548c\u91cd\u8a66\u3002"})}),"\n",(0,r.jsx)(s.h2,{id:"\u5728\u6e2c\u8a66\u4e4b\u9593\u91cd\u7528\u55ae\u9801",children:"\u5728\u6e2c\u8a66\u4e4b\u9593\u91cd\u7528\u55ae\u9801"}),"\n",(0,r.jsxs)(s.p,{children:["Playwright Test \u70ba\u6bcf\u500b\u6e2c\u8a66\u5efa\u7acb\u4e00\u500b\u7368\u7acb\u7684 ",(0,r.jsx)(s.a,{href:"/docs/api/class-page",title:"Page",children:"Page"})," \u7269\u4ef6\u3002\u7136\u800c\uff0c\u5982\u679c\u4f60\u60f3\u5728\u591a\u500b\u6e2c\u8a66\u4e4b\u9593\u91cd\u8907\u4f7f\u7528\u55ae\u500b ",(0,r.jsx)(s.a,{href:"/docs/api/class-page",title:"Page",children:"Page"})," \u7269\u4ef6\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,r.jsx)(s.a,{href:"/docs/api/class-test#test-before-all",children:"test.beforeAll()"})," \u4e2d\u5efa\u7acb\u81ea\u5df1\u7684\u7269\u4ef6\uff0c\u4e26\u5728 ",(0,r.jsx)(s.a,{href:"/docs/api/class-test#test-after-all",children:"test.afterAll()"})," \u4e2d\u95dc\u9589\u5b83\u3002"]}),"\n",(0,r.jsxs)(i.A,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],children:[(0,r.jsx)(t.A,{value:"ts",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="example.spec.ts"',children:"import { test, type Page } from '@playwright/test';\n\ntest.describe.configure({ mode: 'serial' });\n\nlet page: Page;\n\ntest.beforeAll(async ({ browser }) => {\n  page = await browser.newPage();\n});\n\ntest.afterAll(async () => {\n  await page.close();\n});\n\ntest('runs first', async () => {\n  await page.goto('https://playwright.dev/');\n});\n\ntest('runs second', async () => {\n  await page.getByText('Get Started').click();\n});\n"})})}),(0,r.jsx)(t.A,{value:"js",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="example.spec.js"',children:"// @ts-check\n\nconst { test } = require('@playwright/test');\n\ntest.describe.configure({ mode: 'serial' });\n\n/** @type {import('@playwright/test').Page} */\nlet page;\n\ntest.beforeAll(async ({ browser }) => {\n  page = await browser.newPage();\n});\n\ntest.afterAll(async () => {\n  await page.close();\n});\n\ntest('runs first', async () => {\n  await page.goto('https://playwright.dev/');\n});\n\ntest('runs second', async () => {\n  await page.getByText('Get Started').click();\n});\n"})})})]})]})}function j(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);