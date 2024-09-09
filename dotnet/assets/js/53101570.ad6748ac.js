"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6479],{5160:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(4848),i=t(8453);t(4235),t(8328),t(3078);const r={id:"class-playwrightassertions",title:"PlaywrightAssertions"},a=void 0,o={id:"api/class-playwrightassertions",title:"PlaywrightAssertions",description:"Playwright gives you Web-First Assertions with convenience methods for creating assertions that will wait and retry until the expected condition is met.",source:"@site/docs/api/class-playwrightassertions.mdx",sourceDirName:"api",slug:"/api/class-playwrightassertions",permalink:"/dotnet/docs/next/api/class-playwrightassertions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-playwrightassertions",title:"PlaywrightAssertions"}},l={},c=[{value:"Methods",id:"methods",level:2},{value:"Expect(response)",id:"playwright-assertions-expect-api-response",level:3},{value:"Expect(locator)",id:"playwright-assertions-expect-locator",level:3},{value:"Expect(page)",id:"playwright-assertions-expect-page",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Playwright gives you Web-First Assertions with convenience methods for creating assertions that will wait and retry until the expected condition is met."}),"\n",(0,n.jsx)(s.p,{children:"Consider the following example:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:'using Microsoft.Playwright;\nusing Microsoft.Playwright.MSTest;\n\nnamespace PlaywrightTests;\n\n[TestClass]\npublic class ExampleTests : PageTest\n{\n    [TestMethod]\n    public async Task StatusBecomesSubmitted()\n    {\n        await Page.GetByRole(AriaRole.Button, new() { Name = "Submit" }).ClickAsync();\n        await Expect(Page.Locator(".status")).ToHaveTextAsync("Submitted");\n    }\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Playwright will be re-testing the node with the selector ",(0,n.jsx)(s.code,{children:".status"})," until fetched Node has the ",(0,n.jsx)(s.code,{children:'"Submitted"'})," text. It will be re-fetching the node and checking it over and over, until the condition is met or until the timeout is reached. You can pass this timeout as an option."]}),"\n",(0,n.jsx)(s.p,{children:"By default, the timeout for assertions is set to 5 seconds."}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"playwright-assertions-expect-api-response",children:"Expect(response)"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.18"}),"\n",(0,n.jsx)("x-search",{children:"playwrightAssertions.Expect(response)"}),"\n",(0,n.jsxs)(s.p,{children:["Creates a ",(0,n.jsx)(s.a,{href:"/dotnet/docs/next/api/class-apiresponseassertions",title:"APIResponseAssertions",children:"APIResponseAssertions"})," object for the given ",(0,n.jsx)(s.a,{href:"/dotnet/docs/next/api/class-apiresponse",title:"APIResponse",children:"APIResponse"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"response"})," ",(0,n.jsx)(s.a,{href:"/dotnet/docs/next/api/class-apiresponse",title:"APIResponse",children:"APIResponse"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-api-response-option-response"}),(0,n.jsx)("a",{href:"#playwright-assertions-expect-api-response-option-response",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/dotnet/docs/next/api/class-apiresponse",title:"APIResponse",children:"APIResponse"})," object to use for assertions."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/dotnet/docs/next/api/class-apiresponseassertions",title:"APIResponseAssertions",children:"APIResponseAssertions"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-api-response-return"}),(0,n.jsx)("a",{href:"#playwright-assertions-expect-api-response-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"playwright-assertions-expect-locator",children:"Expect(locator)"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.18"}),"\n",(0,n.jsx)("x-search",{children:"playwrightAssertions.Expect(locator)"}),"\n",(0,n.jsxs)(s.p,{children:["Creates a ",(0,n.jsx)(s.a,{href:"/dotnet/docs/next/api/class-locatorassertions",title:"LocatorAssertions",children:"LocatorAssertions"})," object for the given ",(0,n.jsx)(s.a,{href:"/dotnet/docs/next/api/class-locator",title:"Locator",children:"Locator"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:"await Expect(locator).ToBeVisibleAsync();\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"locator"})," ",(0,n.jsx)(s.a,{href:"/dotnet/docs/next/api/class-locator",title:"Locator",children:"Locator"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-locator-option-locator"}),(0,n.jsx)("a",{href:"#playwright-assertions-expect-locator-option-locator",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/dotnet/docs/next/api/class-locator",title:"Locator",children:"Locator"})," object to use for assertions."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/dotnet/docs/next/api/class-locatorassertions",title:"LocatorAssertions",children:"LocatorAssertions"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-locator-return"}),(0,n.jsx)("a",{href:"#playwright-assertions-expect-locator-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"playwright-assertions-expect-page",children:"Expect(page)"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.18"}),"\n",(0,n.jsx)("x-search",{children:"playwrightAssertions.Expect(page)"}),"\n",(0,n.jsxs)(s.p,{children:["Creates a ",(0,n.jsx)(s.a,{href:"/dotnet/docs/next/api/class-pageassertions",title:"PageAssertions",children:"PageAssertions"})," object for the given ",(0,n.jsx)(s.a,{href:"/dotnet/docs/next/api/class-page",title:"Page",children:"Page"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-csharp",children:'await Expect(Page).ToHaveTitleAsync("News");\n'})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"page"})," ",(0,n.jsx)(s.a,{href:"/dotnet/docs/next/api/class-page",title:"Page",children:"Page"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-page-option-page"}),(0,n.jsx)("a",{href:"#playwright-assertions-expect-page-option-page",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/dotnet/docs/next/api/class-page",title:"Page",children:"Page"})," object to use for assertions."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/dotnet/docs/next/api/class-pageassertions",title:"PageAssertions",children:"PageAssertions"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"playwright-assertions-expect-page-return"}),(0,n.jsx)("a",{href:"#playwright-assertions-expect-page-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);