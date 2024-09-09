"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6418],{9199:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=s(4848),l=s(8453);s(4235),s(8328),s(3078);const i={id:"test-configuration",title:"\u6e2c\u8a66\u8a2d\u5b9a"},r=void 0,c={id:"test-configuration",title:"\u6e2c\u8a66\u8a2d\u5b9a",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/test-configuration.mdx",sourceDirName:".",slug:"/test-configuration",permalink:"/docs/test-configuration",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"test-configuration",title:"\u6e2c\u8a66\u8a2d\u5b9a"},sidebar:"docs",previous:{title:"\u91d1\u7d72\u96c0\u767c\u4f48",permalink:"/docs/canary-releases"},next:{title:"\u6e2c\u8a66\u4f7f\u7528\u9078\u9805",permalink:"/docs/test-use-options"}},o={},d=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u57fa\u672c\u914d\u7f6e",id:"\u57fa\u672c\u914d\u7f6e",level:2},{value:"\u904e\u6ffe\u6e2c\u8a66",id:"\u904e\u6ffe\u6e2c\u8a66",level:2},{value:"\u9032\u968e\u8a2d\u5b9a",id:"\u9032\u968e\u8a2d\u5b9a",level:2},{value:"\u9810\u671f\u9078\u9805",id:"\u9810\u671f\u9078\u9805",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright \u6709\u8a31\u591a\u9078\u9805\u53ef\u4ee5\u914d\u7f6e\u4f60\u7684\u6e2c\u8a66\u5982\u4f55\u57f7\u884c\u3002\u4f60\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u6307\u5b9a\u9019\u4e9b\u9078\u9805\u3002\u6ce8\u610f\uff0c\u6e2c\u8a66\u57f7\u884c\u5668\u9078\u9805\u662f",(0,n.jsx)(t.strong,{children:"\u9802\u5c64"}),"\u7684\uff0c\u4e0d\u8981\u5c07\u5b83\u5011\u653e\u5165 ",(0,n.jsx)(t.code,{children:"use"})," \u90e8\u5206\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u57fa\u672c\u914d\u7f6e",children:"\u57fa\u672c\u914d\u7f6e"}),"\n",(0,n.jsx)(t.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u6700\u5e38\u898b\u7684\u914d\u7f6e\u9078\u9805\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { defineConfig, devices } from '@playwright/test';\n\nexport default defineConfig({\n  // Look for test files in the \"tests\" directory, relative to this configuration file.\n  testDir: 'tests',\n\n  // Run all tests in parallel.\n  fullyParallel: true,\n\n  // Fail the build on CI if you accidentally left test.only in the source code.\n  forbidOnly: !!process.env.CI,\n\n  // Retry on CI only.\n  retries: process.env.CI ? 2 : 0,\n\n  // Opt out of parallel tests on CI.\n  workers: process.env.CI ? 1 : undefined,\n\n  // Reporter to use\n  reporter: 'html',\n\n  use: {\n    // Base URL to use in actions like `await page.goto('/')`.\n    baseURL: 'http://127.0.0.1:3000',\n\n    // Collect trace when retrying the failed test.\n    trace: 'on-first-retry',\n  },\n  // Configure projects for major browsers.\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n  ],\n  // Run your local dev server before starting the tests.\n  webServer: {\n    command: 'npm run start',\n    url: 'http://127.0.0.1:3000',\n    reuseExistingServer: !process.env.CI,\n  },\n});\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Option"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-testconfig#test-config-forbid-only",children:"testConfig.forbidOnly"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["\u5982\u679c\u4efb\u4f55\u6e2c\u8a66\u6a19\u8a18\u70ba ",(0,n.jsx)(t.code,{children:"test.only"}),"\uff0c\u662f\u5426\u4ee5\u932f\u8aa4\u9000\u51fa\u3002\u5c0d CI \u6709\u7528\u3002"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-testconfig#test-config-fully-parallel",children:"testConfig.fullyParallel"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["\u8b93\u6240\u6709\u6a94\u6848\u4e2d\u7684\u6240\u6709\u6e2c\u8a66\u5e73\u884c\u57f7\u884c\u3002\u67e5\u770b ",(0,n.jsx)(t.a,{href:"./test-parallel",children:"Parallelism"})," \u548c ",(0,n.jsx)(t.a,{href:"./test-sharding",children:"Sharding"})," \u4ee5\u4e86\u89e3\u66f4\u591a\u8a73\u60c5\u3002"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-testconfig#test-config-projects",children:"testConfig.projects"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u5728\u591a\u500b\u914d\u7f6e\u6216\u591a\u500b\u700f\u89bd\u5668\u4e0a\u57f7\u884c\u6e2c\u8a66"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-testconfig#test-config-reporter",children:"testConfig.reporter"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["\u4f7f\u7528\u7684\u5831\u544a\u5668\u3002\u67e5\u770b ",(0,n.jsx)(t.a,{href:"/docs/test-reporters",children:"Test Reporters"})," \u4ee5\u4e86\u89e3\u66f4\u591a\u53ef\u7528\u7684\u5831\u544a\u5668\u3002"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-testconfig#test-config-retries",children:"testConfig.retries"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["\u6bcf\u500b\u6e2c\u8a66\u7684\u6700\u5927\u91cd\u8a66\u6b21\u6578\u3002\u67e5\u770b ",(0,n.jsx)(t.a,{href:"/docs/test-retries",children:"Test Retries"})," \u4ee5\u4e86\u89e3\u66f4\u591a\u95dc\u65bc\u91cd\u8a66\u7684\u8cc7\u8a0a\u3002"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-testconfig#test-config-test-dir",children:"testConfig.testDir"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u6e2c\u8a66\u6a94\u6848\u6240\u5728\u7684\u76ee\u9304\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-testconfig#test-config-use",children:"testConfig.use"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["\u5e36\u6709 ",(0,n.jsx)(t.code,{children:"use{}"})," \u7684\u9078\u9805"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-testconfig#test-config-web-server",children:"testConfig.webServer"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["\u8981\u5728\u6e2c\u8a66\u671f\u9593\u555f\u52d5\u4f3a\u670d\u5668\uff0c\u8acb\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"webServer"})," \u9078\u9805"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-testconfig#test-config-workers",children:"testConfig.workers"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["\u7528\u65bc\u5e73\u884c\u5316\u6e2c\u8a66\u7684\u6700\u5927\u4e26\u884c\u5de5\u4f5c\u7a0b\u5e8f\u6578\u3002\u4e5f\u53ef\u4ee5\u8a2d\u7f6e\u70ba\u908f\u8f2f CPU \u6838\u5fc3\u7684\u767e\u5206\u6bd4\uff0c\u4f8b\u5982 ",(0,n.jsx)(t.code,{children:"'50%'"}),"\u3002\u67e5\u770b ",(0,n.jsx)(t.a,{href:"./test-parallel",children:"Parallelism"})," \u548c ",(0,n.jsx)(t.a,{href:"./test-sharding",children:"Sharding"})," \u4ee5\u4e86\u89e3\u66f4\u591a\u8a73\u60c5\u3002"]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\u904e\u6ffe\u6e2c\u8a66",children:"\u904e\u6ffe\u6e2c\u8a66"}),"\n",(0,n.jsx)(t.p,{children:"\u7be9\u9078\u6e2c\u8a66\u4f9d\u64da glob \u6a21\u5f0f\u6216\u6b63\u5247\u8868\u9054\u5f0f\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  // Glob patterns or regular expressions to ignore test files.\n  testIgnore: '*test-assets',\n\n  // Glob patterns or regular expressions that match test files.\n  testMatch: '*todo-tests/*.spec.ts',\n});\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Option"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-testconfig#test-config-test-ignore",children:"testConfig.testIgnore"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["\u61c9\u8a72\u5728\u5c0b\u627e\u6e2c\u8a66\u6a94\u6848\u6642\u5ffd\u7565\u7684 Glob \u6a21\u5f0f\u6216\u6b63\u5247\u8868\u9054\u5f0f\u3002\u4f8b\u5982\uff0c",(0,n.jsx)(t.code,{children:"'*test-assets'"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-testconfig#test-config-test-match",children:"testConfig.testMatch"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["\u5339\u914d\u6e2c\u8a66\u6a94\u6848\u7684 Glob \u6a21\u5f0f\u6216\u6b63\u5247\u8868\u9054\u5f0f\u3002\u4f8b\u5982\uff0c",(0,n.jsx)(t.code,{children:"'*todo-tests/*.spec.ts'"}),"\u3002\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0cPlaywright \u57f7\u884c ",(0,n.jsx)("code",{children:".*(test|spec).(js|ts|mjs)"})," \u6a94\u6848\u3002"]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\u9032\u968e\u8a2d\u5b9a",children:"\u9032\u968e\u8a2d\u5b9a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  // Folder for test artifacts such as screenshots, videos, traces, etc.\n  outputDir: 'test-results',\n\n  // path to the global setup files.\n  globalSetup: require.resolve('./global-setup'),\n\n  // path to the global teardown files.\n  globalTeardown: require.resolve('./global-teardown'),\n\n  // Each test is given 30 seconds.\n  timeout: 30000,\n\n});\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Option"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-testconfig#test-config-global-setup",children:"testConfig.globalSetup"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u5168\u57df\u8a2d\u5b9a\u6a94\u6848\u7684\u8def\u5f91\u3002\u6b64\u6a94\u6848\u5c07\u5728\u6240\u6709\u6e2c\u8a66\u4e4b\u524d\u88ab\u8981\u6c42\u4e26\u57f7\u884c\u3002\u5b83\u5fc5\u9808\u532f\u51fa\u4e00\u500b\u51fd\u5f0f\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-testconfig#test-config-global-teardown",children:"testConfig.globalTeardown"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u5168\u57df\u62c6\u5378\u6a94\u6848\u7684\u8def\u5f91\u3002\u6b64\u6a94\u6848\u5c07\u5728\u6240\u6709\u6e2c\u8a66\u4e4b\u5f8c\u88ab\u8981\u6c42\u4e26\u57f7\u884c\u3002\u5b83\u5fc5\u9808\u532f\u51fa\u4e00\u500b\u51fd\u5f0f\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-testconfig#test-config-output-dir",children:"testConfig.outputDir"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u6e2c\u8a66\u5de5\u4ef6\u7684\u8cc7\u6599\u593e\uff0c\u4f8b\u5982\u622a\u5716\u3001\u5f71\u7247\u3001\u8ffd\u8e64\u7b49\u3002"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-testconfig#test-config-timeout",children:"testConfig.timeout"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Playwright \u70ba\u6bcf\u500b\u6e2c\u8a66\u5f37\u5236\u57f7\u884c\u4e00\u500b",(0,n.jsx)(t.a,{href:"/docs/test-timeouts",children:"\u8d85\u6642"}),"\uff0c\u9810\u8a2d\u70ba30\u79d2\u3002\u6e2c\u8a66\u51fd\u5f0f\u3001fixtures\u3001beforeEach \u548c afterEach hooks \u6240\u82b1\u8cbb\u7684\u6642\u9593\u90fd\u5305\u542b\u5728\u6e2c\u8a66\u8d85\u6642\u5167\u3002"]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\u9810\u671f\u9078\u9805",children:"\u9810\u671f\u9078\u9805"}),"\n",(0,n.jsx)(t.p,{children:"\u914d\u7f6e expect \u65b7\u8a00\u51fd\u5f0f\u5eab\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  expect: {\n    // Maximum time expect() should wait for the condition to be met.\n    timeout: 5000,\n\n    toHaveScreenshot: {\n      // An acceptable amount of pixels that could be different, unset by default.\n      maxDiffPixels: 10,\n    },\n\n    toMatchSnapshot: {\n      // An acceptable ratio of pixels that are different to the\n      // total amount of pixels, between 0 and 1.\n      maxDiffPixelRatio: 0.1,\n    },\n  },\n\n});\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Option"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-testconfig#test-config-expect",children:"testConfig.expect"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.a,{href:"/docs/test-assertions",children:"Web first assertions"})," like ",(0,n.jsx)(t.code,{children:"expect(locator).toHaveText()"})," \u6709\u4e00\u500b\u9810\u8a2d\u70ba 5 \u79d2\u7684\u55ae\u7368\u8d85\u6642\u6642\u9593\u3002\u9019\u662f ",(0,n.jsx)(t.code,{children:"expect()"})," \u61c9\u7b49\u5f85\u689d\u4ef6\u6eff\u8db3\u7684\u6700\u9577\u6642\u9593\u3002\u4e86\u89e3\u66f4\u591a\u95dc\u65bc ",(0,n.jsx)(t.a,{href:"/docs/test-timeouts",children:"test and expect timeouts"})," \u4ee5\u53ca\u5982\u4f55\u70ba\u55ae\u500b\u6e2c\u8a66\u8a2d\u7f6e\u5b83\u5011\u3002"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1",children:"expect(page).toHaveScreenshot()"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"expect(locator).toHaveScreenshot()"})," \u65b9\u6cd5\u7684\u914d\u7f6e\u3002"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/api/class-snapshotassertions#snapshot-assertions-to-match-snapshot-1",children:"expect(value).toMatchSnapshot()"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"expect(locator).toMatchSnapshot()"})," \u65b9\u6cd5\u7684\u914d\u7f6e\u3002"]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}}}]);