"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[884],{5102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=n(4848),i=n(8453),o=n(4235),r=n(8328);n(3078);const l={id:"debug",title:"Debugging Tests"},a=void 0,c={id:"debug",title:"Debugging Tests",description:"VS Code debugger",source:"@site/docs/debug.mdx",sourceDirName:".",slug:"/debug",permalink:"/docs/next/debug",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"debug",title:"Debugging Tests"},sidebar:"docs",previous:{title:"Components (experimental)",permalink:"/docs/next/test-components"},next:{title:"Dialogs",permalink:"/docs/next/dialogs"}},h={},d=[{value:"VS Code debugger",id:"vs-code-debugger",level:2},{value:"Error Messages",id:"error-messages",level:3},{value:"Live Debugging",id:"live-debugging",level:3},{value:"Picking a Locator",id:"picking-a-locator",level:3},{value:"Run in Debug Mode",id:"run-in-debug-mode",level:3},{value:"Debug in different Browsers",id:"debug-in-different-browsers",level:3},{value:"Playwright Inspector",id:"playwright-inspector",level:2},{value:"Run in debug mode",id:"run-in-debug-mode-1",level:3},{value:"Debug all tests on all browsers",id:"debug-all-tests-on-all-browsers",level:4},{value:"Debug one test on all browsers",id:"debug-one-test-on-all-browsers",level:4},{value:"Debug on a specific browser",id:"debug-on-a-specific-browser",level:4},{value:"Debug one test on a specific browser",id:"debug-one-test-on-a-specific-browser",level:4},{value:"Stepping through your tests",id:"stepping-through-your-tests",level:3},{value:"Run a test from a specific breakpoint",id:"run-a-test-from-a-specific-breakpoint",level:3},{value:"Live editing locators",id:"live-editing-locators",level:3},{value:"Picking locators",id:"picking-locators",level:3},{value:"Actionability logs",id:"actionability-logs",level:3},{value:"Trace Viewer",id:"trace-viewer",level:2},{value:"Browser Developer Tools",id:"browser-developer-tools",level:2},{value:"playwright.$(selector)",id:"playwrightselector",level:4},{value:"playwright.$$(selector)",id:"playwrightselector-1",level:4},{value:"playwright.inspect(selector)",id:"playwrightinspectselector",level:4},{value:"playwright.locator(selector)",id:"playwrightlocatorselector",level:4},{value:"playwright.selector(element)",id:"playwrightselectorelement",level:4},{value:"Verbose API logs",id:"verbose-api-logs",level:2},{value:"Headed mode",id:"headed-mode",level:2}];function g(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"vs-code-debugger",children:"VS Code debugger"}),"\n",(0,s.jsxs)(t.p,{children:["We recommend using the ",(0,s.jsx)(t.a,{href:"/docs/next/getting-started-vscode",children:"VS Code Extension"})," for debugging for a better developer experience. With the VS Code extension you can debug your tests right in VS Code, see error messages, set breakpoints and step through your tests."]}),"\n",(0,s.jsx)("img",{width:"1269",alt:"running test in debug mode",src:"https://user-images.githubusercontent.com/13063165/212740233-3f278825-13e7-4a88-a118-dd4478d43a16.png"}),"\n",(0,s.jsx)(t.h3,{id:"error-messages",children:"Error Messages"}),"\n",(0,s.jsx)(t.p,{children:"If your test fails VS Code will show you error messages right in the editor showing what was expected, what was received as well as a complete call log."}),"\n",(0,s.jsx)("img",{width:"1269",alt:"error messaging in vs code",src:"https://user-images.githubusercontent.com/13063165/212738654-b573b7c9-05be-476f-ab4c-201bf4265bc0.png"}),"\n",(0,s.jsx)(t.h3,{id:"live-debugging",children:"Live Debugging"}),"\n",(0,s.jsxs)(t.p,{children:["You can debug your test live in VS Code. After running a test with the ",(0,s.jsx)(t.code,{children:"Show Browser"})," option checked, click on any of the locators in VS Code and it will be highlighted in the Browser window. Playwright will also show you if there are multiple matches."]}),"\n",(0,s.jsx)("img",{width:"1394",alt:"live debugging in VS Code",src:"https://user-images.githubusercontent.com/13063165/212884329-0755b007-0d69-4987-b084-38fd5bfb577d.png"}),"\n",(0,s.jsx)(t.p,{children:"You can also edit the locators in VS Code and Playwright will show you the changes live in the browser window."}),"\n",(0,s.jsx)("img",{width:"1394",alt:"live debugging in VS Code",src:"https://user-images.githubusercontent.com/13063165/212884772-5022d4b1-6fab-456f-88e3-506f2354e238.png"}),"\n",(0,s.jsx)(t.h3,{id:"picking-a-locator",children:"Picking a Locator"}),"\n",(0,s.jsxs)(t.p,{children:["Pick a ",(0,s.jsx)(t.a,{href:"/docs/next/locators",children:"locator"})," and copy it into your test file by clicking the ",(0,s.jsx)(t.strong,{children:"Pick locator"})," button form the testing sidebar. Then in the browser click the element you require and it will now show up in the ",(0,s.jsx)(t.strong,{children:"Pick locator"})," box in VS Code. Press 'enter' on your keyboard to copy the locator into the clipboard and then paste anywhere in your code. Or press 'escape' if you want to cancel."]}),"\n",(0,s.jsx)("img",{width:"1394",alt:"Pick locators",src:"https://user-images.githubusercontent.com/13063165/212741666-6479a702-2517-44a3-9eca-e719e13b379c.png"}),"\n",(0,s.jsxs)(t.p,{children:["Playwright will look at your page and figure out the best locator, prioritizing ",(0,s.jsx)(t.a,{href:"/docs/next/locators",children:"role, text and test id locators"}),". If Playwright finds multiple elements matching the locator, it will improve the locator to make it resilient and uniquely identify the target element, so you don't have to worry about failing tests due to locators."]}),"\n",(0,s.jsx)(t.h3,{id:"run-in-debug-mode",children:"Run in Debug Mode"}),"\n",(0,s.jsx)(t.p,{children:"To set a breakpoint click next to the line number where you want the breakpoint to be until a red dot appears. Run the tests in debug mode by right clicking on the line next to the test you want to run."}),"\n",(0,s.jsx)("img",{width:"1269",alt:"setting debug test mode",src:"https://user-images.githubusercontent.com/13063165/212739847-ecb7dcfe-8929-45f3-b24e-f9c4b592f430.png"}),"\n",(0,s.jsx)(t.p,{children:"A browser window will open and the test will run and pause at where the breakpoint is set. You can step through the tests, pause the test and rerun the tests from the menu in VS Code."}),"\n",(0,s.jsx)("img",{width:"1269",alt:"running test in debug mode",src:"https://user-images.githubusercontent.com/13063165/212740233-3f278825-13e7-4a88-a118-dd4478d43a16.png"}),"\n",(0,s.jsx)(t.h3,{id:"debug-in-different-browsers",children:"Debug in different Browsers"}),"\n",(0,s.jsx)(t.p,{children:"By default, debugging is done using the Chromium profile. You can debug your tests on different browsers by right clicking on the debug icon in the testing sidebar and clicking on the 'Select Default Profile' option from the dropdown."}),"\n",(0,s.jsx)("img",{width:"1312",alt:"debugging on specific profile",src:"https://user-images.githubusercontent.com/13063165/212879469-436f8130-c62a-49e1-9d67-c1903b478d5f.png"}),"\n",(0,s.jsx)(t.p,{children:"Then choose the test profile you would like to use for debugging your tests. Each time you run your test in debug mode it will use the profile you selected. You can run tests in debug mode by right clicking the line number where your test is and selecting 'Debug Test' from the menu."}),"\n",(0,s.jsx)("img",{width:"1312",alt:"choosing a profile for debugging",src:"https://user-images.githubusercontent.com/13063165/212880198-eac22c3e-68ce-47da-9163-d6b376ae7575.png"}),"\n",(0,s.jsxs)(t.p,{children:["To learn more about debugging, see ",(0,s.jsx)(t.a,{href:"https://code.visualstudio.com/docs/editor/debugging",children:"Debugging in Visual Studio Code"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"playwright-inspector",children:"Playwright Inspector"}),"\n",(0,s.jsx)(t.p,{children:"The Playwright Inspector is a GUI tool to help you debug your Playwright tests. It allows you to step through your tests, live edit locators, pick locators and see actionability logs."}),"\n",(0,s.jsx)("img",{width:"864",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/13063165/212924587-4b84e5f6-b147-40e9-8c75-d7b9ab6b7ca1.png"}),"\n",(0,s.jsx)(t.h3,{id:"run-in-debug-mode-1",children:"Run in debug mode"}),"\n",(0,s.jsxs)(t.p,{children:["Run your tests with the ",(0,s.jsx)(t.code,{children:"--debug"})," flag to open the inspector. This configures Playwright for debugging and opens the inspector. Additional useful defaults are configured when ",(0,s.jsx)(t.code,{children:"--debug"})," is used:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Browsers launch in headed mode"}),"\n",(0,s.jsx)(t.li,{children:"Default timeout is set to 0 (= no timeout)"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"debug-all-tests-on-all-browsers",children:"Debug all tests on all browsers"}),"\n",(0,s.jsxs)(t.p,{children:["To debug all tests run the test command with the ",(0,s.jsx)(t.code,{children:"--debug"})," flag. This will run tests one by one, and open the inspector and a browser window for each test."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx playwright test --debug\n"})}),"\n",(0,s.jsx)(t.h4,{id:"debug-one-test-on-all-browsers",children:"Debug one test on all browsers"}),"\n",(0,s.jsxs)(t.p,{children:["To debug one test on a specific line, run the test command followed by the name of the test file and the line number of the test you want to debug, followed by the ",(0,s.jsx)(t.code,{children:"--debug"})," flag. This will run a single test in each browser configured in your ",(0,s.jsx)(t.a,{href:"/docs/next/test-projects#configure-projects-for-multiple-browsers",children:(0,s.jsx)(t.code,{children:"playwright.config"})})," and open the inspector."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx playwright test example.spec.ts:10 --debug\n"})}),"\n",(0,s.jsx)(t.h4,{id:"debug-on-a-specific-browser",children:"Debug on a specific browser"}),"\n",(0,s.jsxs)(t.p,{children:["In Playwright you can configure projects in your ",(0,s.jsx)(t.a,{href:"/docs/next/test-projects#configure-projects-for-multiple-browsers",children:(0,s.jsx)(t.code,{children:"playwright.config"})}),". Once configured you can then debug your tests on a specific browser or mobile viewport using the ",(0,s.jsx)(t.code,{children:"--project"})," flag followed by the name of the project configured in your ",(0,s.jsx)(t.code,{children:"playwright.config"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'npx playwright test --project=chromium --debug\nnpx playwright test --project="Mobile Safari" --debug\nnpx playwright test --project="Microsoft Edge" --debug\n'})}),"\n",(0,s.jsx)(t.h4,{id:"debug-one-test-on-a-specific-browser",children:"Debug one test on a specific browser"}),"\n",(0,s.jsxs)(t.p,{children:["To run one test on a specific browser add the name of the test file and the line number of the test you want to debug as well as the ",(0,s.jsx)(t.code,{children:"--project"})," flag followed by the name of the project."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx playwright test example.spec.ts:10 --project=webkit --debug\n"})}),"\n",(0,s.jsx)(t.h3,{id:"stepping-through-your-tests",children:"Stepping through your tests"}),"\n",(0,s.jsx)(t.p,{children:"You can play, pause or step through each action of your test using the toolbar at the top of the Inspector. You can see the current action highlighted in the test code, and matching elements highlighted in the browser window."}),"\n",(0,s.jsx)("img",{width:"1340",alt:"Playwright Inspector and browser",src:"https://user-images.githubusercontent.com/13063165/212936618-84b87acc-bc2e-46ed-994b-32b2ef742e60.png"}),"\n",(0,s.jsx)(t.h3,{id:"run-a-test-from-a-specific-breakpoint",children:"Run a test from a specific breakpoint"}),"\n",(0,s.jsxs)(t.p,{children:["To speed up the debugging process you can add a ",(0,s.jsx)(t.a,{href:"/docs/next/api/class-page#page-pause",children:"page.pause()"})," method to your test. This way you won't have to step through each action of your test to get to the point where you want to debug."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"await page.pause();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Once you add a ",(0,s.jsx)(t.code,{children:"page.pause()"}),' call, run your tests in debug mode. Clicking the "Resume" button in the Inspector will run the test and only stop on the ',(0,s.jsx)(t.code,{children:"page.pause()"}),"."]}),"\n",(0,s.jsx)("img",{width:"1350",alt:"test with page.pause",src:"https://user-images.githubusercontent.com/13063165/219473050-122be4c2-31d0-4cbd-aa8b-8588e8b781a6.png"}),"\n",(0,s.jsx)(t.h3,{id:"live-editing-locators",children:"Live editing locators"}),"\n",(0,s.jsxs)(t.p,{children:["While running in debug mode you can live edit the locators. Next to the 'Pick Locator' button there is a field showing the ",(0,s.jsx)(t.a,{href:"/docs/next/locators",children:"locator"})," that the test is paused on. You can edit this locator directly in the ",(0,s.jsx)(t.strong,{children:"Pick Locator"})," field, and matching elements will be highlighted in the browser window."]}),"\n",(0,s.jsx)("img",{width:"1348",alt:"live editing locators",src:"https://user-images.githubusercontent.com/13063165/212980815-1cf6ef7b-e69a-496c-898a-ec603a3bc562.png"}),"\n",(0,s.jsx)(t.h3,{id:"picking-locators",children:"Picking locators"}),"\n",(0,s.jsxs)(t.p,{children:["While debugging, you might need to choose a more resilient locator. You can do this by clicking on the ",(0,s.jsx)(t.strong,{children:"Pick Locator"})," button and hovering over any element in the browser window. While hovering over an element you will see the code needed to locate this element highlighted below. Clicking an element in the browser will add the locator into the field where you can then either tweak it or copy it into your code."]}),"\n",(0,s.jsx)("img",{width:"1392",alt:"Picking locators",src:"https://user-images.githubusercontent.com/13063165/212968640-ce82a027-9277-4bdf-b0a9-6282fb2becb7.png"}),"\n",(0,s.jsxs)(t.p,{children:["Playwright will look at your page and figure out the best locator, prioritizing ",(0,s.jsx)(t.a,{href:"/docs/next/locators",children:"role, text and test id locators"}),". If Playwright finds multiple elements matching the locator, it will improve the locator to make it resilient and uniquely identify the target element, so you don't have to worry about failing tests due to locators."]}),"\n",(0,s.jsx)(t.h3,{id:"actionability-logs",children:"Actionability logs"}),"\n",(0,s.jsxs)(t.p,{children:["By the time Playwright has paused on a click action, it has already performed ",(0,s.jsx)(t.a,{href:"/docs/next/actionability",children:"actionability checks"})," that can be found in the log. This can help you understand what happened during your test and what Playwright did or tried to do. The log tells you if the element was visible, enabled and stable, if the locator resolved to an element, scrolled into view, and so much more. If actionability can't be reached, it will show the action as pending."]}),"\n",(0,s.jsx)("img",{width:"883",alt:"Actionability Logs",src:"https://user-images.githubusercontent.com/13063165/212968907-5dede739-e0e3-482a-91cd-726a0f5b0b6d.png"}),"\n",(0,s.jsx)(t.h2,{id:"trace-viewer",children:"Trace Viewer"}),"\n",(0,s.jsxs)(t.p,{children:["Playwright ",(0,s.jsx)(t.a,{href:"/docs/next/trace-viewer",children:"Trace Viewer"})," is a GUI tool that lets you explore recorded Playwright traces of your tests. You can go back and forward through each action on the left side, and visually see what was happening during the action. In the middle of the screen, you can see a DOM snapshot for the action. On the right side you can see action details, such as time, parameters, return value and log. You can also explore console messages, network requests and the source code."]}),"\n",(0,s.jsx)("video",{width:"100%",height:"100%",controls:!0,muted:!0,children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)("source",{src:"https://user-images.githubusercontent.com/13063165/219132713-17b9d75b-71e3-42c4-a43f-3f9e2e15f834.mp4",type:"video/mp4"})," Your browser does not support the video tag."]})}),"\n",(0,s.jsxs)(t.p,{children:["To learn more about how to record traces and use the Trace Viewer, check out the ",(0,s.jsx)(t.a,{href:"/docs/next/trace-viewer",children:"Trace Viewer"})," guide."]}),"\n",(0,s.jsx)(t.h2,{id:"browser-developer-tools",children:"Browser Developer Tools"}),"\n",(0,s.jsxs)(t.p,{children:["When running in Debug Mode with ",(0,s.jsx)(t.code,{children:"PWDEBUG=console"}),", a ",(0,s.jsx)(t.code,{children:"playwright"})," object is available in the Developer tools console. Developer tools can help you to:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Inspect the DOM tree and ",(0,s.jsx)(t.strong,{children:"find element selectors"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"See console logs"})," during execution (or learn how to ",(0,s.jsx)(t.a,{href:"/docs/next/api/class-page#page-event-console",children:"read logs via API"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["Check ",(0,s.jsx)(t.strong,{children:"network activity"})," and other developer tools features"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This will also set the default timeouts of Playwright to 0 (= no timeout)."}),"\n",(0,s.jsx)("img",{width:"1399",alt:"Browser Developer Tools with Playwright object",src:"https://user-images.githubusercontent.com/13063165/219128002-898f604d-9697-4b7f-95b5-a6a8260b7282.png"}),"\n",(0,s.jsxs)(t.p,{children:["To debug your tests using the browser developer tools, start by setting a breakpoint in your test to pause the execution using the ",(0,s.jsx)(t.a,{href:"/docs/next/api/class-page#page-pause",children:"page.pause()"})," method."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"await page.pause();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Once you have set a breakpoint in your test, you can then run your test with ",(0,s.jsx)(t.code,{children:"PWDEBUG=console"}),"."]}),"\n",(0,s.jsxs)(o.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,s.jsx)(r.A,{value:"bash",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"PWDEBUG=console npx playwright test\n"})})}),(0,s.jsx)(r.A,{value:"powershell",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-powershell",children:'$env:PWDEBUG="console"\nnpx playwright test\n'})})}),(0,s.jsx)(r.A,{value:"batch",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-batch",children:"set PWDEBUG=console\nnpx playwright test\n"})})})]}),"\n",(0,s.jsxs)(t.p,{children:["Once Playwright launches the browser window, you can open the developer tools. The ",(0,s.jsx)(t.code,{children:"playwright"})," object will be available in the console panel."]}),"\n",(0,s.jsx)(t.h4,{id:"playwrightselector",children:"playwright.$(selector)"}),"\n",(0,s.jsx)(t.p,{children:"Query the Playwright selector, using the actual Playwright query engine, for example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"playwright.$('.auth-form >> text=Log in');\n\n<button>Log in</button>\n"})}),"\n",(0,s.jsx)(t.h4,{id:"playwrightselector-1",children:"playwright.$$(selector)"}),"\n",(0,s.jsxs)(t.p,{children:["Same as ",(0,s.jsx)(t.code,{children:"playwright.$"}),", but returns all matching elements."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"playwright.$$('li >> text=John')\n\n[<li>, <li>, <li>, <li>]\n"})}),"\n",(0,s.jsx)(t.h4,{id:"playwrightinspectselector",children:"playwright.inspect(selector)"}),"\n",(0,s.jsx)(t.p,{children:"Reveal element in the Elements panel."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"playwright.inspect('text=Log in')\n"})}),"\n",(0,s.jsx)(t.h4,{id:"playwrightlocatorselector",children:"playwright.locator(selector)"}),"\n",(0,s.jsx)(t.p,{children:"Create a locator and query matching elements, for example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"playwright.locator('.auth-form', { hasText: 'Log in' });\n\nLocator ()\n  - element: button\n  - elements: [button]\n"})}),"\n",(0,s.jsx)(t.h4,{id:"playwrightselectorelement",children:"playwright.selector(element)"}),"\n",(0,s.jsxs)(t.p,{children:["Generates selector for the given element. For example, select an element in the Elements panel and pass ",(0,s.jsx)(t.code,{children:"$0"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'playwright.selector($0)\n\n"div[id="glow-ingress-block"] >> text=/.*Hello.*/"\n'})}),"\n",(0,s.jsx)(t.h2,{id:"verbose-api-logs",children:"Verbose API logs"}),"\n",(0,s.jsxs)(t.p,{children:["Playwright supports verbose logging with the ",(0,s.jsx)(t.code,{children:"DEBUG"})," environment variable."]}),"\n",(0,s.jsxs)(o.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,s.jsx)(r.A,{value:"bash",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"DEBUG=pw:api npx playwright test\n"})})}),(0,s.jsx)(r.A,{value:"powershell",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-powershell",children:'$env:DEBUG="pw:api"\nnpx playwright test\n'})})}),(0,s.jsx)(r.A,{value:"batch",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-batch",children:"set DEBUG=pw:api\nnpx playwright test\n"})})})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"For WebKit"}),": launching WebKit Inspector during the execution will prevent the Playwright script from executing any further and will reset pre-configured user agent and device emulation."]})}),"\n",(0,s.jsx)(t.h2,{id:"headed-mode",children:"Headed mode"}),"\n",(0,s.jsxs)(t.p,{children:["Playwright runs browsers in headless mode by default. To change this behavior, use ",(0,s.jsx)(t.code,{children:"headless: false"})," as a launch option."]}),"\n",(0,s.jsxs)(t.p,{children:["You can also use the ",(0,s.jsx)(t.code,{children:"slowMo"})," option to slow down execution (by N milliseconds per operation) and follow along while debugging."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Chromium, Firefox, or WebKit\nawait chromium.launch({ headless: false, slowMo: 100 });\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}}}]);