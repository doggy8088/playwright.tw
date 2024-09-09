"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3863],{1107:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var n=s(4848),i=s(8453);s(4235),s(8328),s(3078);const r={id:"test-typescript",title:"TypeScript"},o=void 0,c={id:"test-typescript",title:"TypeScript",description:"Introduction",source:"@site/docs/test-typescript.mdx",sourceDirName:".",slug:"/test-typescript",permalink:"/docs/next/test-typescript",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"test-typescript",title:"TypeScript"},sidebar:"docs",previous:{title:"Timeouts",permalink:"/docs/next/test-timeouts"},next:{title:"UI Mode",permalink:"/docs/next/test-ui-mode"}},l={},a=[{value:"Introduction",id:"introduction",level:2},{value:"tsconfig.json",id:"tsconfigjson",level:2},{value:"tsconfig path mapping",id:"tsconfig-path-mapping",level:3},{value:"tsconfig resolution",id:"tsconfig-resolution",level:3},{value:"Manually compile tests with TypeScript",id:"manually-compile-tests-with-typescript",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"Playwright supports TypeScript out of the box. You just write tests in TypeScript, and Playwright will read them, transform to JavaScript and run."}),"\n",(0,n.jsx)(t.p,{children:"Note that Playwright does not check the types and will run tests even if there are non-critical TypeScript compilation errors. We recommend you run TypeScript compiler alongside Playwright. For example on GitHub actions:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"jobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n    ...\n    - name: Run type checks\n      run: npx tsc -p tsconfig.json --noEmit\n    - name: Run Playwright tests\n      run: npx playwright test\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For local development, you can run ",(0,n.jsx)(t.code,{children:"tsc"})," in ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/configuring-watch.html",children:"watch"})," mode like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"npx tsc -p tsconfig.json --noEmit -w\n"})}),"\n",(0,n.jsx)(t.h2,{id:"tsconfigjson",children:"tsconfig.json"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright will pick up ",(0,n.jsx)(t.code,{children:"tsconfig.json"})," for each source file it loads. Note that Playwright ",(0,n.jsx)(t.strong,{children:"only supports"})," the following tsconfig options: ",(0,n.jsx)(t.code,{children:"allowJs"}),", ",(0,n.jsx)(t.code,{children:"baseUrl"}),", ",(0,n.jsx)(t.code,{children:"paths"})," and ",(0,n.jsx)(t.code,{children:"references"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["We recommend setting up a separate ",(0,n.jsx)(t.code,{children:"tsconfig.json"})," in the tests directory so that you can change some preferences specifically for the tests. Here is an example directory structure."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-txt",children:"src/\n    source.ts\n\ntests/\n    tsconfig.json  # test-specific tsconfig\n    example.spec.ts\n\ntsconfig.json  # generic tsconfig for all typescript sources\n\nplaywright.config.ts\n"})}),"\n",(0,n.jsx)(t.h3,{id:"tsconfig-path-mapping",children:"tsconfig path mapping"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright supports ",(0,n.jsx)(t.a,{href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping",children:"path mapping"})," declared in the ",(0,n.jsx)(t.code,{children:"tsconfig.json"}),". Make sure that ",(0,n.jsx)(t.code,{children:"baseUrl"})," is also set."]}),"\n",(0,n.jsxs)(t.p,{children:["Here is an example ",(0,n.jsx)(t.code,{children:"tsconfig.json"})," that works with Playwright:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "@myhelper/*": ["packages/myhelper/*"] // This mapping is relative to "baseUrl".\n    }\n  }\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"You can now import using the mapped paths:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="example.spec.ts"',children:"import { test, expect } from '@playwright/test';\nimport { username, password } from '@myhelper/credentials';\n\ntest('example', async ({ page }) => {\n  await page.getByLabel('User Name').fill(username);\n  await page.getByLabel('Password').fill(password);\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"tsconfig-resolution",children:"tsconfig resolution"}),"\n",(0,n.jsxs)(t.p,{children:["By default, Playwright will look up a closest tsconfig for each imported file by going up the directory structure and looking for ",(0,n.jsx)(t.code,{children:"tsconfig.json"})," or ",(0,n.jsx)(t.code,{children:"jsconfig.json"}),". This way, you can create a ",(0,n.jsx)(t.code,{children:"tests/tsconfig.json"})," file that will be used only for your tests and Playwright will pick it up automatically."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"# Playwright will choose tsconfig automatically\nnpx playwright test\n"})}),"\n",(0,n.jsx)(t.p,{children:"Alternatively, you can specify a single tsconfig file to use in the command line, and Playwright will use it for all imported files, not only test files."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"# Pass a specific tsconfig\nnpx playwright test --tsconfig=tsconfig.test.json\n"})}),"\n",(0,n.jsx)(t.h2,{id:"manually-compile-tests-with-typescript",children:"Manually compile tests with TypeScript"}),"\n",(0,n.jsxs)(t.p,{children:["Sometimes, Playwright Test will not be able to transform your TypeScript code correctly, for example when you are using experimental or very recent features of TypeScript, usually configured in ",(0,n.jsx)(t.code,{children:"tsconfig.json"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"In this case, you can perform your own TypeScript compilation before sending the tests to Playwright."}),"\n",(0,n.jsxs)(t.p,{children:["First add a ",(0,n.jsx)(t.code,{children:"tsconfig.json"})," file inside the tests directory:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "compilerOptions": {\n        "target": "ESNext",\n        "module": "commonjs",\n        "moduleResolution": "Node",\n        "sourceMap": true,\n        "outDir": "../tests-out",\n    }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.code,{children:"package.json"}),", add two scripts:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "scripts": {\n    "pretest": "tsc --incremental -p tests/tsconfig.json",\n    "test": "playwright test -c tests-out"\n  }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"pretest"})," script runs typescript on the tests. ",(0,n.jsx)(t.code,{children:"test"})," will run the tests that have been generated to the ",(0,n.jsx)(t.code,{children:"tests-out"})," directory. The ",(0,n.jsx)(t.code,{children:"-c"})," argument configures the test runner to look for tests inside the ",(0,n.jsx)(t.code,{children:"tests-out"})," directory."]}),"\n",(0,n.jsxs)(t.p,{children:["Then ",(0,n.jsx)(t.code,{children:"npm run test"})," will build the tests and run them."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}}}]);