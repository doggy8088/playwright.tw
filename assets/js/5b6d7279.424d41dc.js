"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9499],{1842:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var n=s(4848),i=s(8453);s(4235),s(8328),s(3078);const r={id:"test-configuration",title:"Test configuration"},l=void 0,o={id:"test-configuration",title:"Test configuration",description:"Introduction",source:"@site/docs/test-configuration.mdx",sourceDirName:".",slug:"/test-configuration",permalink:"/docs/next/test-configuration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"test-configuration",title:"Test configuration"},sidebar:"docs",previous:{title:"Canary releases",permalink:"/docs/next/canary-releases"},next:{title:"Test use options",permalink:"/docs/next/test-use-options"}},c={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Basic Configuration",id:"basic-configuration",level:2},{value:"Filtering Tests",id:"filtering-tests",level:2},{value:"Advanced Configuration",id:"advanced-configuration",level:2},{value:"Expect Options",id:"expect-options",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright has many options to configure how your tests are run. You can specify these options in the configuration file. Note that test runner options are ",(0,n.jsx)(t.strong,{children:"top-level"}),", do not put them into the ",(0,n.jsx)(t.code,{children:"use"})," section."]}),"\n",(0,n.jsx)(t.h2,{id:"basic-configuration",children:"Basic Configuration"}),"\n",(0,n.jsx)(t.p,{children:"Here are some of the most common configuration options."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { defineConfig, devices } from '@playwright/test';\n\nexport default defineConfig({\n  // Look for test files in the \"tests\" directory, relative to this configuration file.\n  testDir: 'tests',\n\n  // Run all tests in parallel.\n  fullyParallel: true,\n\n  // Fail the build on CI if you accidentally left test.only in the source code.\n  forbidOnly: !!process.env.CI,\n\n  // Retry on CI only.\n  retries: process.env.CI ? 2 : 0,\n\n  // Opt out of parallel tests on CI.\n  workers: process.env.CI ? 1 : undefined,\n\n  // Reporter to use\n  reporter: 'html',\n\n  use: {\n    // Base URL to use in actions like `await page.goto('/')`.\n    baseURL: 'http://127.0.0.1:3000',\n\n    // Collect trace when retrying the failed test.\n    trace: 'on-first-retry',\n  },\n  // Configure projects for major browsers.\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n  ],\n  // Run your local dev server before starting the tests.\n  webServer: {\n    command: 'npm run start',\n    url: 'http://127.0.0.1:3000',\n    reuseExistingServer: !process.env.CI,\n  },\n});\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Option"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-testconfig#test-config-forbid-only",children:"testConfig.forbidOnly"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Whether to exit with an error if any tests are marked as ",(0,n.jsx)(t.code,{children:"test.only"}),". Useful on CI."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-testconfig#test-config-fully-parallel",children:"testConfig.fullyParallel"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["have all tests in all files to run in parallel. See ",(0,n.jsx)(t.a,{href:"./test-parallel",children:"Parallelism"})," and ",(0,n.jsx)(t.a,{href:"./test-sharding",children:"Sharding"})," for more details."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-testconfig#test-config-projects",children:"testConfig.projects"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Run tests in multiple configurations or on multiple browsers"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-testconfig#test-config-reporter",children:"testConfig.reporter"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Reporter to use. See ",(0,n.jsx)(t.a,{href:"/docs/next/test-reporters",children:"Test Reporters"})," to learn more about which reporters are available."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-testconfig#test-config-retries",children:"testConfig.retries"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["The maximum number of retry attempts per test. See ",(0,n.jsx)(t.a,{href:"/docs/next/test-retries",children:"Test Retries"})," to learn more about retries."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-testconfig#test-config-test-dir",children:"testConfig.testDir"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Directory with the test files."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-testconfig#test-config-use",children:"testConfig.use"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Options with ",(0,n.jsx)(t.code,{children:"use{}"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-testconfig#test-config-web-server",children:"testConfig.webServer"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["To launch a server during the tests, use the ",(0,n.jsx)(t.code,{children:"webServer"})," option"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-testconfig#test-config-workers",children:"testConfig.workers"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["The maximum number of concurrent worker processes to use for parallelizing tests. Can also be set as percentage of logical CPU cores, e.g. ",(0,n.jsx)(t.code,{children:"'50%'."}),". See ",(0,n.jsx)(t.a,{href:"./test-parallel",children:"Parallelism"})," and ",(0,n.jsx)(t.a,{href:"./test-sharding",children:"Sharding"})," for more details."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"filtering-tests",children:"Filtering Tests"}),"\n",(0,n.jsx)(t.p,{children:"Filter tests by glob patterns or regular expressions."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  // Glob patterns or regular expressions to ignore test files.\n  testIgnore: '*test-assets',\n\n  // Glob patterns or regular expressions that match test files.\n  testMatch: '*todo-tests/*.spec.ts',\n});\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Option"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-testconfig#test-config-test-ignore",children:"testConfig.testIgnore"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Glob patterns or regular expressions that should be ignored when looking for the test files. For example, ",(0,n.jsx)(t.code,{children:"'*test-assets'"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-testconfig#test-config-test-match",children:"testConfig.testMatch"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Glob patterns or regular expressions that match test files. For example, ",(0,n.jsx)(t.code,{children:"'*todo-tests/*.spec.ts'"}),". By default, Playwright runs ",(0,n.jsx)("code",{children:".*(test|spec).(js|ts|mjs)"})," files."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"advanced-configuration",children:"Advanced Configuration"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  // Folder for test artifacts such as screenshots, videos, traces, etc.\n  outputDir: 'test-results',\n\n  // path to the global setup files.\n  globalSetup: require.resolve('./global-setup'),\n\n  // path to the global teardown files.\n  globalTeardown: require.resolve('./global-teardown'),\n\n  // Each test is given 30 seconds.\n  timeout: 30000,\n\n});\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Option"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-testconfig#test-config-global-setup",children:"testConfig.globalSetup"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Path to the global setup file. This file will be required and run before all the tests. It must export a single function."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-testconfig#test-config-global-teardown",children:"testConfig.globalTeardown"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Path to the global teardown file. This file will be required and run after all the tests. It must export a single function."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-testconfig#test-config-output-dir",children:"testConfig.outputDir"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Folder for test artifacts such as screenshots, videos, traces, etc."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-testconfig#test-config-timeout",children:"testConfig.timeout"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Playwright enforces a ",(0,n.jsx)(t.a,{href:"/docs/next/test-timeouts",children:"timeout"})," for each test, 30 seconds by default. Time spent by the test function, fixtures, beforeEach and afterEach hooks is included in the test timeout."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"expect-options",children:"Expect Options"}),"\n",(0,n.jsx)(t.p,{children:"Configuration for the expect assertion library."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  expect: {\n    // Maximum time expect() should wait for the condition to be met.\n    timeout: 5000,\n\n    toHaveScreenshot: {\n      // An acceptable amount of pixels that could be different, unset by default.\n      maxDiffPixels: 10,\n    },\n\n    toMatchSnapshot: {\n      // An acceptable ratio of pixels that are different to the\n      // total amount of pixels, between 0 and 1.\n      maxDiffPixelRatio: 0.1,\n    },\n  },\n\n});\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Option"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-testconfig#test-config-expect",children:"testConfig.expect"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.a,{href:"/docs/next/test-assertions",children:"Web first assertions"})," like ",(0,n.jsx)(t.code,{children:"expect(locator).toHaveText()"})," have a separate timeout of 5 seconds by default. This is the maximum time the ",(0,n.jsx)(t.code,{children:"expect()"})," should wait for the condition to be met. Learn more about ",(0,n.jsx)(t.a,{href:"/docs/next/test-timeouts",children:"test and expect timeouts"})," and how to set them for a single test."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-pageassertions#page-assertions-to-have-screenshot-1",children:"expect(page).toHaveScreenshot()"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Configuration for the ",(0,n.jsx)(t.code,{children:"expect(locator).toHaveScreenshot()"})," method."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/docs/next/api/class-snapshotassertions#snapshot-assertions-to-match-snapshot-1",children:"expect(value).toMatchSnapshot()"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Configuration for the ",(0,n.jsx)(t.code,{children:"expect(locator).toMatchSnapshot()"})," method."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);