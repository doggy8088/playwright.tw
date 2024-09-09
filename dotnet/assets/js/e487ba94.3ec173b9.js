"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5711],{5542:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=s(4848),i=s(8453);s(4235),s(8328),s(3078);const a={id:"browser-contexts",title:"Isolation"},o=void 0,r={id:"browser-contexts",title:"Isolation",description:"Introduction",source:"@site/docs/browser-contexts.mdx",sourceDirName:".",slug:"/browser-contexts",permalink:"/dotnet/docs/next/browser-contexts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"browser-contexts",title:"Isolation"},sidebar:"docs",previous:{title:"Handles",permalink:"/dotnet/docs/next/handles"},next:{title:"Locators",permalink:"/dotnet/docs/next/locators"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is Test Isolation?",id:"what-is-test-isolation",level:2},{value:"Why is Test Isolation Important?",id:"why-is-test-isolation-important",level:2},{value:"Two Ways of Test Isolation",id:"two-ways-of-test-isolation",level:2},{value:"How Playwright Achieves Test Isolation",id:"how-playwright-achieves-test-isolation",level:2},{value:"Multiple Contexts in a Single Test",id:"multiple-contexts-in-a-single-test",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"Tests written with Playwright execute in isolated clean-slate environments called browser contexts. This isolation model improves reproducibility and prevents cascading test failures."}),"\n",(0,n.jsx)(t.h2,{id:"what-is-test-isolation",children:"What is Test Isolation?"}),"\n",(0,n.jsxs)(t.p,{children:["Test Isolation is when each test is completely isolated from another test. Every test runs independently from any other test. This means that each test has its own local storage, session storage, cookies etc. Playwright achieves this using ",(0,n.jsx)(t.a,{href:"/dotnet/docs/next/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"}),"s which are equivalent to incognito-like profiles. They are fast and cheap to create and are completely isolated, even when running in a single browser. Playwright creates a context for each test, and provides a default ",(0,n.jsx)(t.a,{href:"/dotnet/docs/next/api/class-page",title:"Page",children:"Page"})," in that context."]}),"\n",(0,n.jsx)(t.h2,{id:"why-is-test-isolation-important",children:"Why is Test Isolation Important?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"No failure carry-over. If one test fails it doesn't affect the other test."}),"\n",(0,n.jsx)(t.li,{children:"Easy to debug errors or flakiness, because you can run just a single test as many times as you'd like."}),"\n",(0,n.jsx)(t.li,{children:"Don't have to think about the order when running in parallel, sharding, etc."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"two-ways-of-test-isolation",children:"Two Ways of Test Isolation"}),"\n",(0,n.jsx)(t.p,{children:'There are two different strategies when it comes to Test Isolation: start from scratch or cleanup in between. The problem with cleaning up in between tests is that it can be easy to forget to clean up and some things are impossible to clean up such as "visited links". State from one test can leak into the next test which could cause your test to fail and make debugging harder as the problem comes from another test. Starting from scratch means everything is new, so if the test fails you only have to look within that test to debug.'}),"\n",(0,n.jsx)(t.h2,{id:"how-playwright-achieves-test-isolation",children:"How Playwright Achieves Test Isolation"}),"\n",(0,n.jsx)(t.p,{children:"Playwright uses browser contexts to achieve Test Isolation. Each test has its own Browser Context. Running the test creates a new browser context each time.  When using Playwright as a Test Runner, browser contexts are created by default. Otherwise, you can create browser contexts manually."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"using var playwright = await Playwright.CreateAsync();\nvar browser = await playwright.Chromium.LaunchAsync();\nvar context = await browser.NewContextAsync();\nvar page = await context.NewPageAsync();\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme. Check out our ",(0,n.jsx)(t.a,{href:"/dotnet/docs/next/emulation",children:"Emulation"})," guide for more details."]}),"\n",(0,n.jsx)(t.h2,{id:"multiple-contexts-in-a-single-test",children:"Multiple Contexts in a Single Test"}),"\n",(0,n.jsx)(t.p,{children:"Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like a chat."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        // Create a Chromium browser instance\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        await using var userContext = await browser.NewContextAsync();\n        await using var adminContext = await browser.NewContextAsync();\n        // Create pages and interact with contexts independently.\n    }\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);