"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2925],{1451:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=s(4848),r=s(8453);s(4235),s(8328),s(3078);const i={id:"test-parallel",title:"Parallelism"},a=void 0,l={id:"test-parallel",title:"Parallelism",description:"Introduction",source:"@site/docs/test-parallel.mdx",sourceDirName:".",slug:"/test-parallel",permalink:"/docs/next/test-parallel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"test-parallel",title:"Parallelism"},sidebar:"docs",previous:{title:"Global setup and teardown",permalink:"/docs/next/test-global-setup-teardown"},next:{title:"Parameterize tests",permalink:"/docs/next/test-parameterize"}},o={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Worker processes",id:"worker-processes",level:2},{value:"Limit workers",id:"limit-workers",level:2},{value:"Disable parallelism",id:"disable-parallelism",level:2},{value:"Parallelize tests in a single file",id:"parallelize-tests-in-a-single-file",level:2},{value:"Serial mode",id:"serial-mode",level:2},{value:"Shard tests between multiple machines",id:"shard-tests-between-multiple-machines",level:2},{value:"Limit failures and fail fast",id:"limit-failures-and-fail-fast",level:2},{value:"Worker index and parallel index",id:"worker-index-and-parallel-index",level:2},{value:"Isolate test data between parallel workers",id:"isolate-test-data-between-parallel-workers",level:3},{value:"Control test order",id:"control-test-order",level:2},{value:"Sort test files alphabetically",id:"sort-test-files-alphabetically",level:3},{value:"Use a &quot;test list&quot; file",id:"use-a-test-list-file",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time. By default, ",(0,n.jsx)(t.strong,{children:"test files"})," are run in parallel. Tests in a single file are run in order, in the same worker process."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["You can configure tests using ",(0,n.jsx)(t.a,{href:"#parallelize-tests-in-a-single-file",children:(0,n.jsx)(t.code,{children:"test.describe.configure"})})," to run ",(0,n.jsx)(t.strong,{children:"tests in a single file"})," in parallel."]}),"\n",(0,n.jsxs)(t.li,{children:["You can configure ",(0,n.jsx)(t.strong,{children:"entire project"})," to have all tests in all files to run in parallel using ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-testproject#test-project-fully-parallel",children:"testProject.fullyParallel"})," or ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-testconfig#test-config-fully-parallel",children:"testConfig.fullyParallel"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["To ",(0,n.jsx)(t.strong,{children:"disable"})," parallelism limit the number of ",(0,n.jsx)(t.a,{href:"#disable-parallelism",children:"workers to one"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You can control the number of ",(0,n.jsx)(t.a,{href:"#limit-workers",children:"parallel worker processes"})," and ",(0,n.jsx)(t.a,{href:"#limit-failures-and-fail-fast",children:"limit the number of failures"})," in the whole test suite for efficiency."]}),"\n",(0,n.jsx)(t.h2,{id:"worker-processes",children:"Worker processes"}),"\n",(0,n.jsx)(t.p,{children:"All tests run in worker processes. These processes are OS processes, running independently, orchestrated by the test runner. All workers have identical environments and each starts its own browser."}),"\n",(0,n.jsx)(t.p,{children:"You can't communicate between the workers. Playwright Test reuses a single worker as much as it can to make testing faster, so multiple test files are usually run in a single worker one after another."}),"\n",(0,n.jsxs)(t.p,{children:["Workers are always shutdown after a ",(0,n.jsx)(t.a,{href:"/docs/next/test-retries#failures",children:"test failure"})," to guarantee pristine environment for following tests."]}),"\n",(0,n.jsx)(t.h2,{id:"limit-workers",children:"Limit workers"}),"\n",(0,n.jsxs)(t.p,{children:["You can control the maximum number of parallel worker processes via ",(0,n.jsx)(t.a,{href:"/docs/next/test-cli",children:"command line"})," or in the ",(0,n.jsx)(t.a,{href:"/docs/next/test-configuration",children:"configuration file"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"From the command line:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright test --workers 4\n"})}),"\n",(0,n.jsx)(t.p,{children:"In the configuration file:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  // Limit the number of workers on CI, use default locally\n  workers: process.env.CI ? 2 : undefined,\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"disable-parallelism",children:"Disable parallelism"}),"\n",(0,n.jsxs)(t.p,{children:["You can disable any parallelism by allowing just a single worker at any time. Either set ",(0,n.jsx)(t.code,{children:"workers: 1"})," option in the configuration file or pass ",(0,n.jsx)(t.code,{children:"--workers=1"})," to the command line."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright test --workers=1\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parallelize-tests-in-a-single-file",children:"Parallelize tests in a single file"}),"\n",(0,n.jsxs)(t.p,{children:["By default, tests in a single file are run in order. If you have many independent tests in a single file, you might want to run them in parallel with ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-test#test-describe-configure",children:"test.describe.configure()"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Note that parallel tests are executed in separate worker processes and cannot share any state or global variables. Each test executes all relevant hooks just for itself, including ",(0,n.jsx)(t.code,{children:"beforeAll"})," and ",(0,n.jsx)(t.code,{children:"afterAll"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { test } from '@playwright/test';\n\ntest.describe.configure({ mode: 'parallel' });\n\ntest('runs in parallel 1', async ({ page }) => { /* ... */ });\ntest('runs in parallel 2', async ({ page }) => { /* ... */ });\n"})}),"\n",(0,n.jsx)(t.p,{children:"Alternatively, you can opt-in all tests into this fully-parallel mode in the configuration file:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  fullyParallel: true,\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can also opt in for fully-parallel mode for just a few projects:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  // runs all tests in all files of a specific project in parallel\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n      fullyParallel: true,\n    },\n  ]\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"serial-mode",children:"Serial mode"}),"\n",(0,n.jsx)(t.p,{children:"You can annotate inter-dependent tests as serial. If one of the serial tests fails, all subsequent tests are skipped. All tests in a group are retried together."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Using serial is not recommended. It is usually better to make your tests isolated, so they can be run independently."})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { test, type Page } from '@playwright/test';\n\n// Annotate entire file as serial.\ntest.describe.configure({ mode: 'serial' });\n\nlet page: Page;\n\ntest.beforeAll(async ({ browser }) => {\n  page = await browser.newPage();\n});\n\ntest.afterAll(async () => {\n  await page.close();\n});\n\ntest('runs first', async () => {\n  await page.goto('https://playwright.dev/');\n});\n\ntest('runs second', async () => {\n  await page.getByText('Get Started').click();\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"shard-tests-between-multiple-machines",children:"Shard tests between multiple machines"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright Test can shard a test suite, so that it can be executed on multiple machines. See ",(0,n.jsx)(t.a,{href:"/docs/next/test-sharding",children:"sharding guide"})," for more details."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright test --shard=2/3\n"})}),"\n",(0,n.jsx)(t.h2,{id:"limit-failures-and-fail-fast",children:"Limit failures and fail fast"}),"\n",(0,n.jsxs)(t.p,{children:["You can limit the number of failed tests in the whole test suite by setting ",(0,n.jsx)(t.code,{children:"maxFailures"})," config option or passing ",(0,n.jsx)(t.code,{children:"--max-failures"})," command line flag."]}),"\n",(0,n.jsx)(t.p,{children:'When running with "max failures" set, Playwright Test will stop after reaching this number of failed tests and skip any tests that were not executed yet. This is useful to avoid wasting resources on broken test suites.'}),"\n",(0,n.jsx)(t.p,{children:"Passing command line option:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright test --max-failures=10\n"})}),"\n",(0,n.jsx)(t.p,{children:"Setting in the configuration file:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  // Limit the number of failures on CI to save resources\n  maxFailures: process.env.CI ? 10 : undefined,\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"worker-index-and-parallel-index",children:"Worker index and parallel index"}),"\n",(0,n.jsxs)(t.p,{children:["Each worker process is assigned two ids: a unique worker index that starts with 1, and a parallel index that is between ",(0,n.jsx)(t.code,{children:"0"})," and ",(0,n.jsx)(t.code,{children:"workers - 1"}),". When a worker is restarted, for example after a failure, the new worker process has the same ",(0,n.jsx)(t.code,{children:"parallelIndex"})," and a new ",(0,n.jsx)(t.code,{children:"workerIndex"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can read an index from environment variables ",(0,n.jsx)(t.code,{children:"process.env.TEST_WORKER_INDEX"})," and ",(0,n.jsx)(t.code,{children:"process.env.TEST_PARALLEL_INDEX"}),", or access them through ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-testinfo#test-info-worker-index",children:"testInfo.workerIndex"})," and ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-testinfo#test-info-parallel-index",children:"testInfo.parallelIndex"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"isolate-test-data-between-parallel-workers",children:"Isolate test data between parallel workers"}),"\n",(0,n.jsxs)(t.p,{children:["You can leverage ",(0,n.jsx)(t.code,{children:"process.env.TEST_WORKER_INDEX"})," or ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-testinfo#test-info-worker-index",children:"testInfo.workerIndex"})," mentioned above to isolate user data in the database between tests running on different workers. All tests run by the worker reuse the same user."]}),"\n",(0,n.jsxs)(t.p,{children:["Create ",(0,n.jsx)(t.code,{children:"playwright/fixtures.ts"})," file that will ",(0,n.jsxs)(t.a,{href:"./test-fixtures#creating-a-fixture",children:["create ",(0,n.jsx)(t.code,{children:"dbUserName"})," fixture"]})," and initialize a new user in the test database. Use ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-testinfo#test-info-worker-index",children:"testInfo.workerIndex"})," to differentiate between workers."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright/fixtures.ts"',children:"import { test as baseTest, expect } from '@playwright/test';\n// Import project utils for managing users in the test database.\nimport { createUserInTestDatabase, deleteUserFromTestDatabase } from './my-db-utils';\n\nexport * from '@playwright/test';\nexport const test = baseTest.extend<{}, { dbUserName: string }>({\n  // Returns db user name unique for the worker.\n  dbUserName: [async ({ }, use) => {\n    // Use workerIndex as a unique identifier for each worker.\n    const userName = `user-${test.info().workerIndex}`;\n    // Initialize user in the database.\n    await createUserInTestDatabase(userName);\n    await use(userName);\n    // Clean up after the tests are done.\n    await deleteUserFromTestDatabase(userName);\n  }, { scope: 'worker' }],\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Now, each test file should import ",(0,n.jsx)(t.code,{children:"test"})," from our fixtures file instead of ",(0,n.jsx)(t.code,{children:"@playwright/test"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="tests/example.spec.ts"',children:"// Important: import our fixtures.\nimport { test, expect } from '../playwright/fixtures';\n\ntest('test', async ({ dbUserName }) => {\n  // Use the user name in the test.\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"control-test-order",children:"Control test order"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright Test runs tests from a single file in the order of declaration, unless you ",(0,n.jsx)(t.a,{href:"#parallelize-tests-in-a-single-file",children:"parallelize tests in a single file"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["There is no guarantee about the order of test execution across the files, because Playwright Test runs test files in parallel by default. However, if you ",(0,n.jsx)(t.a,{href:"#disable-parallelism",children:"disable parallelism"}),', you can control test order by either naming your files in alphabetical order or using a "test list" file.']}),"\n",(0,n.jsx)(t.h3,{id:"sort-test-files-alphabetically",children:"Sort test files alphabetically"}),"\n",(0,n.jsxs)(t.p,{children:["When you ",(0,n.jsx)(t.strong,{children:"disable parallel test execution"}),", Playwright Test runs test files in alphabetical order. You can use some naming convention to control the test order, for example ",(0,n.jsx)(t.code,{children:"001-user-signin-flow.spec.ts"}),", ",(0,n.jsx)(t.code,{children:"002-create-new-document.spec.ts"})," and so on."]}),"\n",(0,n.jsx)(t.h3,{id:"use-a-test-list-file",children:'Use a "test list" file'}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Tests lists are discouraged and supported as a best-effort only. Some features such as VS Code Extension and tracing may not work properly with test lists."})}),"\n",(0,n.jsx)(t.p,{children:"You can put your tests in helper functions in multiple files. Consider the following example where tests are not defined directly in the file, but rather in a wrapper function."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="feature-a.spec.ts"',children:"import { test, expect } from '@playwright/test';\n\nexport default function createTests() {\n  test('feature-a example test', async ({ page }) => {\n    // ... test goes here\n  });\n}\n\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="feature-b.spec.ts"',children:"import { test, expect } from '@playwright/test';\n\nexport default function createTests() {\n  test.use({ viewport: { width: 500, height: 500 } });\n\n  test('feature-b example test', async ({ page }) => {\n    // ... test goes here\n  });\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can create a test list file that will control the order of tests - first run ",(0,n.jsx)(t.code,{children:"feature-b"})," tests, then ",(0,n.jsx)(t.code,{children:"feature-a"})," tests. Note how each test file is wrapped in a ",(0,n.jsx)(t.code,{children:"test.describe()"})," block that calls the function where tests are defined. This way ",(0,n.jsx)(t.code,{children:"test.use()"})," calls only affect tests from a single file."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="test.list.ts"',children:"import { test } from '@playwright/test';\nimport featureBTests from './feature-b.spec.ts';\nimport featureATests from './feature-a.spec.ts';\n\ntest.describe(featureBTests);\ntest.describe(featureATests);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Now ",(0,n.jsx)(t.strong,{children:"disable parallel execution"})," by setting workers to one, and specify your test list file."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  workers: 1,\n  testMatch: 'test.list.ts',\n});\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Do not define your tests directly in a helper file. This could lead to unexpected results because your tests are now dependent on the order of ",(0,n.jsx)(t.code,{children:"import"}),"/",(0,n.jsx)(t.code,{children:"require"})," statements. Instead, wrap tests in a function that will be explicitly called by a test list file, as in the example above."]})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);