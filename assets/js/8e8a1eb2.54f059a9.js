"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6445],{2604:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var n=s(4848),i=s(8453);s(4235),s(8328),s(3078);const t={id:"class-playwright",title:"Playwright Library"},l=void 0,a={id:"api/class-playwright",title:"Playwright Library",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/docs/api/class-playwright.mdx",sourceDirName:"api",slug:"/api/class-playwright",permalink:"/docs/next/api/class-playwright",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-playwright",title:"Playwright Library"},sidebar:"api",previous:{title:"Playwright Test",permalink:"/docs/next/api/class-test"},next:{title:"APIRequest",permalink:"/docs/next/api/class-apirequest"}},c={},o=[{value:"Properties",id:"properties",level:2},{value:"chromium",id:"playwright-chromium",level:3},{value:"devices",id:"playwright-devices",level:3},{value:"errors",id:"playwright-errors",level:3},{value:"firefox",id:"playwright-firefox",level:3},{value:"request",id:"playwright-request",level:3},{value:"selectors",id:"playwright-selectors",level:3},{value:"webkit",id:"playwright-webkit",level:3}];function h(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"const { chromium, firefox, webkit } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.\n  const page = await browser.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(r.h3,{id:"playwright-chromium",children:"chromium"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,n.jsx)("x-search",{children:"playwright.chromium"}),"\n",(0,n.jsxs)(r.p,{children:["This object can be used to launch or connect to Chromium, returning instances of ",(0,n.jsx)(r.a,{href:"/docs/next/api/class-browser",title:"Browser",children:"Browser"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Usage"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"playwright.chromium\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Type"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/next/api/class-browsertype",title:"BrowserType",children:"BrowserType"})}),"\n"]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"playwright-devices",children:"devices"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,n.jsx)("x-search",{children:"playwright.devices"}),"\n",(0,n.jsxs)(r.p,{children:["Returns a dictionary of devices to be used with ",(0,n.jsx)(r.a,{href:"/docs/next/api/class-browser#browser-new-context",children:"browser.newContext()"})," or ",(0,n.jsx)(r.a,{href:"/docs/next/api/class-browser#browser-new-page",children:"browser.newPage()"}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"const { webkit, devices } = require('playwright');\nconst iPhone = devices['iPhone 6'];\n\n(async () => {\n  const browser = await webkit.launch();\n  const context = await browser.newContext({\n    ...iPhone\n  });\n  const page = await context.newPage();\n  await page.goto('http://example.com');\n  // other actions...\n  await browser.close();\n})();\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Usage"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"playwright.devices\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Type"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"})}),"\n"]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"playwright-errors",children:"errors"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,n.jsx)("x-search",{children:"playwright.errors"}),"\n",(0,n.jsxs)(r.p,{children:["Playwright methods might throw errors if they are unable to fulfill a request. For example, ",(0,n.jsx)(r.a,{href:"/docs/next/api/class-locator#locator-wait-for",children:"locator.waitFor()"})," might fail if the selector doesn't match any nodes during the given timeframe."]}),"\n",(0,n.jsxs)(r.p,{children:["For certain types of errors Playwright uses specific error classes. These classes are available via ",(0,n.jsx)(r.a,{href:"#playwright-errors",children:(0,n.jsx)(r.code,{children:"playwright.errors"})}),"."]}),"\n",(0,n.jsx)(r.p,{children:"An example of handling a timeout error:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"try {\n  await page.locator('.foo').waitFor();\n} catch (e) {\n  if (e instanceof playwright.errors.TimeoutError) {\n    // Do something if this is a timeout.\n  }\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Usage"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"playwright.errors\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Type"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"TimeoutError"})," ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function",children:"function"})]}),"\n",(0,n.jsxs)(r.p,{children:["A class of ",(0,n.jsx)(r.a,{href:"/docs/next/api/class-timeouterror",title:"TimeoutError",children:"TimeoutError"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"playwright-firefox",children:"firefox"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,n.jsx)("x-search",{children:"playwright.firefox"}),"\n",(0,n.jsxs)(r.p,{children:["This object can be used to launch or connect to Firefox, returning instances of ",(0,n.jsx)(r.a,{href:"/docs/next/api/class-browser",title:"Browser",children:"Browser"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Usage"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"playwright.firefox\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Type"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/next/api/class-browsertype",title:"BrowserType",children:"BrowserType"})}),"\n"]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"playwright-request",children:"request"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.16"}),"\n",(0,n.jsx)("x-search",{children:"playwright.request"}),"\n",(0,n.jsx)(r.p,{children:"Exposes API that can be used for the Web API testing."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Usage"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"playwright.request\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Type"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/next/api/class-apirequest",title:"APIRequest",children:"APIRequest"})}),"\n"]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"playwright-selectors",children:"selectors"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,n.jsx)("x-search",{children:"playwright.selectors"}),"\n",(0,n.jsxs)(r.p,{children:["Selectors can be used to install custom selector engines. See ",(0,n.jsx)(r.a,{href:"/docs/next/extensibility",children:"extensibility"})," for more information."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Usage"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"playwright.selectors\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Type"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/next/api/class-selectors",title:"Selectors",children:"Selectors"})}),"\n"]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"playwright-webkit",children:"webkit"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,n.jsx)("x-search",{children:"playwright.webkit"}),"\n",(0,n.jsxs)(r.p,{children:["This object can be used to launch or connect to WebKit, returning instances of ",(0,n.jsx)(r.a,{href:"/docs/next/api/class-browser",title:"Browser",children:"Browser"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Usage"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"playwright.webkit\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Type"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/next/api/class-browsertype",title:"BrowserType",children:"BrowserType"})}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);