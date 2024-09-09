"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6903],{4505:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var l=s(4848),t=s(8453),a=s(4235),r=s(8328);s(3078);const i={id:"intro",title:"Installation"},d=void 0,o={id:"intro",title:"Installation",description:"Introduction",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/next/intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"intro",title:"Installation"},sidebar:"docs",next:{title:"Writing tests",permalink:"/docs/next/writing-tests"}},h={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Installing Playwright",id:"installing-playwright",level:2},{value:"What&#39;s Installed",id:"whats-installed",level:2},{value:"Running the Example Test",id:"running-the-example-test",level:2},{value:"HTML Test Reports",id:"html-test-reports",level:2},{value:"Running the Example Test in UI Mode",id:"running-the-example-test-in-ui-mode",level:2},{value:"Updating Playwright",id:"updating-playwright",level:2},{value:"System requirements",id:"system-requirements",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,l.jsx)(n.p,{children:"Playwright Test was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"You will learn"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/next/intro#installing-playwright",children:"How to install Playwright"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/next/intro#whats-installed",children:"What's Installed"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/next/intro#running-the-example-test",children:"How to run the example test"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/next/intro#html-test-reports",children:"How to open the HTML test report"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"installing-playwright",children:"Installing Playwright"}),"\n",(0,l.jsxs)(n.p,{children:["Get started by installing Playwright using npm, yarn or pnpm. Alternatively you can also get started and run your tests using the ",(0,l.jsx)(n.a,{href:"/docs/next/getting-started-vscode",children:"VS Code Extension"}),"."]}),"\n",(0,l.jsxs)(a.A,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"},{label:"pnpm",value:"pnpm"}],children:[(0,l.jsx)(r.A,{value:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npm init playwright@latest\n"})})}),(0,l.jsx)(r.A,{value:"yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"yarn create playwright\n"})})}),(0,l.jsx)(r.A,{value:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pnpm create playwright\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Run the install command and select the following to get started:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Choose between TypeScript or JavaScript (default is TypeScript)"}),"\n",(0,l.jsx)(n.li,{children:"Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)"}),"\n",(0,l.jsx)(n.li,{children:"Add a GitHub Actions workflow to easily run tests on CI"}),"\n",(0,l.jsx)(n.li,{children:"Install Playwright browsers (default is true)"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"whats-installed",children:"What's Installed"}),"\n",(0,l.jsx)(n.p,{children:"Playwright will download the browsers needed as well as create the following files."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"playwright.config.ts\npackage.json\npackage-lock.json\ntests/\n  example.spec.ts\ntests-examples/\n  demo-todo-app.spec.ts\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.a,{href:"/docs/next/test-configuration",children:"playwright.config"})," is where you can add configuration for Playwright including modifying which browsers you would like to run Playwright on. If you are running tests inside an already existing project then dependencies will be added directly to your ",(0,l.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"tests"})," folder contains a basic example test to help you get started with testing. For a more detailed example check out the ",(0,l.jsx)(n.code,{children:"tests-examples"})," folder which contains tests written to test a todo app."]}),"\n",(0,l.jsx)(n.h2,{id:"running-the-example-test",children:"Running the Example Test"}),"\n",(0,l.jsxs)(n.p,{children:["By default tests will be run on all 3 browsers, chromium, firefox and webkit using 3 workers. This can be configured in the ",(0,l.jsx)(n.a,{href:"/docs/next/test-configuration",children:"playwright.config file"}),". Tests are run in headless mode meaning no browser will open up when running the tests. Results of the tests and test logs will be shown in the terminal."]}),"\n",(0,l.jsxs)(a.A,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"},{label:"pnpm",value:"pnpm"}],children:[(0,l.jsx)(r.A,{value:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npx playwright test\n"})})}),(0,l.jsx)(r.A,{value:"yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"yarn playwright test\n"})})}),(0,l.jsx)(r.A,{value:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pnpm exec playwright test\n"})})})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.img,{src:"https://github.com/microsoft/playwright/assets/13063165/981c1b2b-dc7e-4b85-b241-272b44da6628",alt:"tests running in command line"}),"  See our doc on ",(0,l.jsx)(n.a,{href:"/docs/next/running-tests",children:"Running Tests"})," to learn more about running tests in headed mode, running multiple tests, running specific tests etc."]}),"\n",(0,l.jsx)(n.h2,{id:"html-test-reports",children:"HTML Test Reports"}),"\n",(0,l.jsxs)(n.p,{children:["After your test completes, an ",(0,l.jsx)(n.a,{href:"/docs/next/test-reporters#html-reporter",children:"HTML Reporter"})," will be generated, which shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests and flaky tests. You can click on each test and explore the test's errors as well as each step of the test. By default, the HTML report is opened automatically if some of the tests failed."]}),"\n",(0,l.jsxs)(a.A,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"},{label:"pnpm",value:"pnpm"}],children:[(0,l.jsx)(r.A,{value:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npx playwright show-report\n"})})}),(0,l.jsx)(r.A,{value:"yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"yarn playwright show-report\n"})})}),(0,l.jsx)(r.A,{value:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pnpm exec playwright show-report\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://github.com/microsoft/playwright/assets/13063165/38ec17a7-9e61-4002-b137-a93812765501",alt:"HTML Report"})}),"\n",(0,l.jsx)(n.h2,{id:"running-the-example-test-in-ui-mode",children:"Running the Example Test in UI Mode"}),"\n",(0,l.jsxs)(n.p,{children:["Run your tests with ",(0,l.jsx)(n.a,{href:"/docs/next/test-ui-mode",children:"UI Mode"})," for a better developer experience with time travel debugging, watch mode and more."]}),"\n",(0,l.jsxs)(a.A,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"},{label:"pnpm",value:"pnpm"}],children:[(0,l.jsx)(r.A,{value:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npx playwright test --ui\n"})})}),(0,l.jsx)(r.A,{value:"yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"yarn playwright test --ui\n"})})}),(0,l.jsx)(r.A,{value:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pnpm exec playwright test --ui\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://github.com/microsoft/playwright/assets/13063165/c5b501cc-4f5d-485a-87cc-66044c651786",alt:"UI Mode"})}),"\n",(0,l.jsxs)(n.p,{children:["Check out or ",(0,l.jsx)(n.a,{href:"/docs/next/test-ui-mode",children:"detailed guide on UI Mode"})," to learn more about its features."]}),"\n",(0,l.jsx)(n.h2,{id:"updating-playwright",children:"Updating Playwright"}),"\n",(0,l.jsx)(n.p,{children:"To update Playwright to the latest version run the following command:"}),"\n",(0,l.jsxs)(a.A,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"},{label:"pnpm",value:"pnpm"}],children:[(0,l.jsx)(r.A,{value:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npm install -D @playwright/test@latest\n# Also download new browser binaries and their dependencies:\nnpx playwright install --with-deps\n"})})}),(0,l.jsx)(r.A,{value:"yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @playwright/test@latest\n# Also download new browser binaries and their dependencies:\nyarn playwright install --with-deps\n"})})}),(0,l.jsx)(r.A,{value:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pnpm install --save-dev @playwright/test@latest\n# Also download new browser binaries and their dependencies:\npnpm exec playwright install --with-deps\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"You can always check which version of Playwright you have by running the following command:"}),"\n",(0,l.jsxs)(a.A,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"},{label:"pnpm",value:"pnpm"}],children:[(0,l.jsx)(r.A,{value:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"npx playwright --version\n"})})}),(0,l.jsx)(r.A,{value:"yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"yarn playwright --version\n"})})}),(0,l.jsx)(r.A,{value:"pnpm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pnpm exec playwright --version\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"system-requirements",children:"System requirements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Node.js 18+"}),"\n",(0,l.jsx)(n.li,{children:"Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL)."}),"\n",(0,l.jsx)(n.li,{children:"macOS 13 Ventura, or macOS 14 Sonoma."}),"\n",(0,l.jsx)(n.li,{children:"Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, Ubuntu 24.04, on x86-64 and arm64 architecture."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"whats-next",children:"What's next"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/next/writing-tests",children:"Write tests using web first assertions, page fixtures and locators"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/next/running-tests",children:"Run single test, multiple tests, headed mode"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/next/codegen-intro",children:"Generate tests with Codegen"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/next/trace-viewer-intro",children:"See a trace of your tests"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}}}]);