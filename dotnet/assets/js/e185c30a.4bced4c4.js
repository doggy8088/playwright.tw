"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1799],{5359:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var t=a(4848),s=a(8453);a(4235),a(8328),a(3078);const i={id:"pages",title:"Pages"},o=void 0,p={id:"pages",title:"Pages",description:"Pages",source:"@site/docs/pages.mdx",sourceDirName:".",slug:"/pages",permalink:"/dotnet/docs/next/pages",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"pages",title:"Pages"},sidebar:"docs",previous:{title:"Page object models",permalink:"/dotnet/docs/next/pom"},next:{title:"Screenshots",permalink:"/dotnet/docs/next/screenshots"}},l={},c=[{value:"Pages",id:"pages",level:2},{value:"Multiple pages",id:"multiple-pages",level:2},{value:"Handling new pages",id:"handling-new-pages",level:2},{value:"Handling popups",id:"handling-popups",level:2}];function r(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"pages",children:"Pages"}),"\n",(0,t.jsxs)(n.p,{children:["Each ",(0,t.jsx)(n.a,{href:"/dotnet/docs/next/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"})," can have multiple pages. A ",(0,t.jsx)(n.a,{href:"/dotnet/docs/next/api/class-page",title:"Page",children:"Page"})," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'// Create a page.\nvar page = await context.NewPageAsync();\n\n// Navigate explicitly, similar to entering a URL in the browser.\nawait page.GotoAsync("http://example.com");\n// Fill an input.\nawait page.Locator("#search").FillAsync("query");\n\n// Navigate implicitly by clicking a link.\nawait page.Locator("#submit").ClickAsync();\n// Expect a new url.\nConsole.WriteLine(page.Url);\n'})}),"\n",(0,t.jsx)(n.h2,{id:"multiple-pages",children:"Multiple pages"}),"\n",(0,t.jsx)(n.p,{children:"Each browser context can host multiple pages (tabs)."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Each page behaves like a focused, active page. Bringing the page to front is not required."}),"\n",(0,t.jsx)(n.li,{children:"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"// Create two pages\nvar pageOne = await context.NewPageAsync();\nvar pageTwo = await context.NewPageAsync();\n\n// Get pages of a browser context\nvar allPages = context.Pages;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"handling-new-pages",children:"Handling new pages"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"page"})," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",(0,t.jsx)(n.code,{children:'target="_blank"'})," links."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'// Get page after a specific action (e.g. clicking a link)\nvar newPage = await context.RunAndWaitForPageAsync(async () =>\n{\n    await page.GetByText("open new tab").ClickAsync();\n});\n// Interact with the new page normally\nawait newPage.GetByRole(AriaRole.Button).ClickAsync();\nConsole.WriteLine(await newPage.TitleAsync());\n'})}),"\n",(0,t.jsx)(n.p,{children:"If the action that triggers the new page is unknown, the following pattern can be used."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"// Get all new pages (including popups) in the context\ncontext.Page += async  (_, page) => {\n    await page.WaitForLoadStateAsync();\n    Console.WriteLine(await page.TitleAsync());\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"handling-popups",children:"Handling popups"}),"\n",(0,t.jsxs)(n.p,{children:["If the page opens a pop-up (e.g. pages opened by ",(0,t.jsx)(n.code,{children:'target="_blank"'})," links), you can get a reference to it by listening to the ",(0,t.jsx)(n.code,{children:"popup"})," event on the page."]}),"\n",(0,t.jsxs)(n.p,{children:["This event is emitted in addition to the ",(0,t.jsx)(n.code,{children:"browserContext.on('page')"})," event, but only for popups relevant to this page."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'// Get popup after a specific action (e.g., click)\nvar popup = await page.RunAndWaitForPopupAsync(async () =>\n{\n    await page.GetByText("open the popup").ClickAsync();\n});\n// Interact with the popup normally\nawait popup.GetByRole(AriaRole.Button).ClickAsync();\nConsole.WriteLine(await popup.TitleAsync());\n'})}),"\n",(0,t.jsx)(n.p,{children:"If the action that triggers the popup is unknown, the following pattern can be used."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"// Get all popups when they open\npage.Popup += async  (_, popup) => {\n    await popup.WaitForLoadStateAsync();\n    Console.WriteLine(await page.TitleAsync());\n};\n"})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}}}]);