"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6884],{9145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(4848),i=n(8453);n(4235),n(8328),n(3078);const r={id:"codegen-intro",title:"Generating tests"},s=void 0,a={id:"codegen-intro",title:"Generating tests",description:"Introduction",source:"@site/docs/codegen-intro.mdx",sourceDirName:".",slug:"/codegen-intro",permalink:"/java/docs/next/codegen-intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"codegen-intro",title:"Generating tests"},sidebar:"docs",previous:{title:"Writing tests",permalink:"/java/docs/next/writing-tests"},next:{title:"Running and debugging tests",permalink:"/java/docs/next/running-tests"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Running Codegen",id:"running-codegen",level:2},{value:"Recording a test",id:"recording-a-test",level:3},{value:"Generating locators",id:"generating-locators",level:3},{value:"Emulation",id:"emulation",level:3},{value:"What&#39;s Next",id:"whats-next",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h6:"h6",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(t.p,{children:"Playwright comes with the ability to generate tests out of the box and is a great way to quickly get started with testing. It will open two windows, a browser window where you interact with the website you wish to test and the Playwright Inspector window where you can record your tests, copy the tests, clear your tests as well as change the language of your tests."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"You will learn"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/java/docs/next/codegen#recording-a-test",children:"How to record a test"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/java/docs/next/codegen#generating-locators",children:"How to generate locators"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"running-codegen",children:"Running Codegen"}),"\n",(0,o.jsxs)(t.p,{children:["Use the ",(0,o.jsx)(t.code,{children:"codegen"})," command to run the test generator followed by the URL of the website you want to generate tests for. The URL is optional and you can always run the command without it and then add the URL directly into the browser window instead."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'mvn exec:java -e -D exec.mainClass=com.microsoft.playwright.CLI -D exec.args="codegen demo.playwright.dev/todomvc"\n'})}),"\n",(0,o.jsx)(t.h3,{id:"recording-a-test",children:"Recording a test"}),"\n",(0,o.jsxs)(t.p,{children:["Run ",(0,o.jsx)(t.code,{children:"codegen"})," and perform actions in the browser. Playwright will generate the code for the user interactions. ",(0,o.jsx)(t.code,{children:"Codegen"})," will look at the rendered page and figure out the recommended locator, prioritizing role, text and test id locators. If the generator identifies multiple elements matching the locator, it will improve the locator to make it resilient and uniquely identify the target element, therefore eliminating and reducing test(s) failing and flaking due to locators."]}),"\n",(0,o.jsx)(t.p,{children:"With the test generator you can record:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Actions like click or fill by simply interacting with the page"}),"\n",(0,o.jsxs)(t.li,{children:["Assertions by clicking on one of the icons in the toolbar and then clicking on an element on the page to assert against. You can choose:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"'assert visibility'"})," to assert that an element is visible"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"'assert text'"})," to assert that an element contains specific text"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"'assert value'"})," to assert that an element has a specific value"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h6,{id:""}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/ec9c4071-4af8-4ae7-8b36-aebcc29bdbbb",alt:"recording a test"})}),"\n",(0,o.jsx)(t.h6,{id:"-1"}),"\n",(0,o.jsxs)(t.p,{children:["When you have finished interacting with the page, press the ",(0,o.jsx)(t.code,{children:"'record'"})," button to stop the recording and use the ",(0,o.jsx)(t.code,{children:"'copy'"})," button to copy the generated code to your editor."]}),"\n",(0,o.jsxs)(t.p,{children:["Use the ",(0,o.jsx)(t.code,{children:"'clear'"})," button to clear the code to start recording again. Once finished close the Playwright inspector window or stop the terminal command."]}),"\n",(0,o.jsxs)(t.p,{children:["To learn more about generating tests check out or detailed guide on ",(0,o.jsx)(t.a,{href:"/java/docs/next/codegen",children:"Codegen"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"generating-locators",children:"Generating locators"}),"\n",(0,o.jsxs)(t.p,{children:["You can generate ",(0,o.jsx)(t.a,{href:"/java/docs/next/locators",children:"locators"})," with the test generator."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Press the ",(0,o.jsx)(t.code,{children:"'Record'"})," button to stop the recording and the ",(0,o.jsx)(t.code,{children:"'Pick Locator'"})," button will appear."]}),"\n",(0,o.jsxs)(t.li,{children:["Click on the ",(0,o.jsx)(t.code,{children:"'Pick Locator'"})," button and then hover over elements in the browser window to see the locator highlighted underneath each element."]}),"\n",(0,o.jsx)(t.li,{children:"To choose a locator click on the element you would like to locate and the code for that locator will appear in the locator playground next to the Pick Locator button."}),"\n",(0,o.jsx)(t.li,{children:"You can then edit the locator in the locator playground to fine tune it and see the matching element highlighted in the browser window."}),"\n",(0,o.jsx)(t.li,{children:"Use the copy button to copy the locator and paste it into your code."}),"\n"]}),"\n",(0,o.jsx)(t.h6,{id:"-2"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/733b48fd-5edf-4150-93f0-018adc52b6ff",alt:"picking a locator"})}),"\n",(0,o.jsx)(t.h3,{id:"emulation",children:"Emulation"}),"\n",(0,o.jsxs)(t.p,{children:["You can also generate tests using emulation so as to generate a test for a specific viewport, device, color scheme, as well as emulate the geolocation, language or timezone. The test generator can also generate a test while preserving authenticated state. Check out the ",(0,o.jsx)(t.a,{href:"/java/docs/next/codegen#emulation",children:"Test Generator"})," guide to learn more."]}),"\n",(0,o.jsx)(t.h2,{id:"whats-next",children:"What's Next"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/java/docs/next/trace-viewer-intro",children:"See a trace of your tests"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);