"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8160],{692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(4848),a=n(8453),i=n(4235),c=n(8328);n(3078);const o={id:"trace-viewer-intro",title:"Trace viewer"},s=void 0,l={id:"trace-viewer-intro",title:"Trace viewer",description:"Introduction",source:"@site/docs/trace-viewer-intro.mdx",sourceDirName:".",slug:"/trace-viewer-intro",permalink:"/python/docs/next/trace-viewer-intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"trace-viewer-intro",title:"Trace viewer"},sidebar:"docs",previous:{title:"Running and debugging tests",permalink:"/python/docs/next/running-tests"},next:{title:"Setting up CI",permalink:"/python/docs/next/ci-intro"}},h={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Recording a trace",id:"recording-a-trace",level:2},{value:"Opening the trace",id:"opening-the-trace",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",h6:"h6",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"Playwright Trace Viewer is a GUI tool that lets you explore recorded Playwright traces of your tests meaning you can go back and forward though each action of your test and visually see what was happening during each action."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"You will learn"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"How to record a trace"}),"\n",(0,r.jsx)(t.li,{children:"How to open the trace viewer"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"recording-a-trace",children:"Recording a trace"}),"\n",(0,r.jsxs)(t.p,{children:["Traces can be recorded by running your tests with the ",(0,r.jsx)(t.code,{children:"--tracing"})," flag."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pytest --tracing on\n"})}),"\n",(0,r.jsx)(t.p,{children:"Options for tracing are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"on"}),": Record trace for each test"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"off"}),": Do not record trace. (default)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"retain-on-failure"}),": Record trace for each test, but remove all traces from successful test runs."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["This will record the trace and place it into the file named ",(0,r.jsx)(t.code,{children:"trace.zip"})," in your ",(0,r.jsx)(t.code,{children:"test-results"})," directory."]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"If you are not using Pytest, click here to learn how to record traces."}),(0,r.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,r.jsx)(c.A,{value:"sync",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",children:'browser = chromium.launch()\ncontext = browser.new_context()\n\n# Start tracing before creating / navigating a page.\ncontext.tracing.start(screenshots=True, snapshots=True, sources=True)\n\npage = context.new_page()\npage.goto("https://playwright.dev")\n\n# Stop tracing and export it into a zip archive.\ncontext.tracing.stop(path = "trace.zip")\n'})})}),(0,r.jsx)(c.A,{value:"async",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",children:'browser = await chromium.launch()\ncontext = await browser.new_context()\n\n# Start tracing before creating / navigating a page.\nawait context.tracing.start(screenshots=True, snapshots=True, sources=True)\n\npage = await context.new_page()\nawait page.goto("https://playwright.dev")\n\n# Stop tracing and export it into a zip archive.\nawait context.tracing.stop(path = "trace.zip")\n'})})})]})]}),"\n",(0,r.jsx)(t.h2,{id:"opening-the-trace",children:"Opening the trace"}),"\n",(0,r.jsxs)(t.p,{children:["You can open the saved trace using the Playwright CLI or in your browser on ",(0,r.jsx)(t.a,{href:"https://trace.playwright.dev",children:(0,r.jsx)(t.code,{children:"trace.playwright.dev"})}),". Make sure to add the full path to where your trace's zip file is located. Once opened you can click on each action or use the timeline to see the state of the page before and after each action. You can also inspect the log, source and network during each step of the test. The trace viewer creates a DOM snapshot so you can fully interact with it, open devtools etc."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"playwright show-trace trace.zip\n"})}),"\n",(0,r.jsx)(t.h6,{id:""}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/10fe3585-8401-4051-b1c2-b2e92ac4c274",alt:"playwright trace viewer"})}),"\n",(0,r.jsxs)(t.p,{children:["To learn more check out our detailed guide on ",(0,r.jsx)(t.a,{href:"/python/docs/next/trace-viewer",children:"Trace Viewer"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"whats-next",children:"What's next"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/python/docs/next/ci-intro",children:"Run tests on CI with GitHub Actions"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/python/docs/next/trace-viewer",children:"Learn more about Trace Viewer"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);