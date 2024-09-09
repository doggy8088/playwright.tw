"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5542],{6527:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>v,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var o=i(4848),s=i(8453),r=i(4235),n=i(8328);i(3078);const d={id:"videos",title:"Videos"},a=void 0,l={id:"videos",title:"Videos",description:"Introduction",source:"@site/docs/videos.mdx",sourceDirName:".",slug:"/videos",permalink:"/docs/next/videos",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"videos",title:"Videos"},sidebar:"docs",previous:{title:"Trace viewer",permalink:"/docs/next/trace-viewer"},next:{title:"WebView2",permalink:"/docs/next/webview2"}},c={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Record video",id:"record-video",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(t.p,{children:"With Playwright you can record videos for your tests."}),"\n",(0,o.jsx)(t.h2,{id:"record-video",children:"Record video"}),"\n",(0,o.jsxs)(t.p,{children:["Playwright Test can record videos for your tests, controlled by the ",(0,o.jsx)(t.code,{children:"video"})," option in your Playwright config. By default videos are off."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"'off'"})," - Do not record video."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"'on'"})," - Record video for each test."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"'retain-on-failure'"})," - Record video for each test, but remove all videos from successful test runs."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"'on-first-retry'"})," - Record video only when retrying a test for the first time."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Video files will appear in the test output directory, typically ",(0,o.jsx)(t.code,{children:"test-results"}),". See ",(0,o.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-video",children:"testOptions.video"})," for advanced video configuration."]}),"\n",(0,o.jsxs)(t.p,{children:["Videos are saved upon ",(0,o.jsx)(t.a,{href:"/docs/next/browser-contexts",children:"browser context"})," closure at the end of a test. If you create a browser context manually, make sure to await ",(0,o.jsx)(t.a,{href:"/docs/next/api/class-browsercontext#browser-context-close",children:"browserContext.close()"}),"."]}),"\n",(0,o.jsxs)(r.A,{groupId:"js-flavor",defaultValue:"test",values:[{label:"Test",value:"test"},{label:"Library",value:"library"}],children:[(0,o.jsx)(n.A,{value:"test",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\nexport default defineConfig({\n  use: {\n    video: 'on-first-retry',\n  },\n});\n"})})}),(0,o.jsx)(n.A,{value:"library",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const context = await browser.newContext({ recordVideo: { dir: 'videos/' } });\n// Make sure to await close, so that videos are saved.\nawait context.close();\n"})})})]}),"\n",(0,o.jsx)(t.p,{children:"You can also specify video size. The video size defaults to the viewport size scaled down to fit 800x800. The video of the viewport is placed in the top-left corner of the output video, scaled down to fit if necessary. You may need to set the viewport size to match your desired video size."}),"\n",(0,o.jsxs)(r.A,{groupId:"js-flavor",defaultValue:"test",values:[{label:"Test",value:"test"},{label:"Library",value:"library"}],children:[(0,o.jsx)(n.A,{value:"test",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\nexport default defineConfig({\n  use: {\n    video: {\n      mode: 'on-first-retry',\n      size: { width: 640, height: 480 }\n    }\n  },\n});\n"})})}),(0,o.jsx)(n.A,{value:"library",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const context = await browser.newContext({\n  recordVideo: {\n    dir: 'videos/',\n    size: { width: 640, height: 480 },\n  }\n});\n"})})})]}),"\n",(0,o.jsxs)(t.p,{children:["For multi-page scenarios, you can access the video file associated with the page via the ",(0,o.jsx)(t.a,{href:"/docs/next/api/class-page#page-video",children:"page.video()"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const path = await page.video().path();\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"Note that the video is only available after the page or browser context is closed."})})]})}function v(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}}}]);