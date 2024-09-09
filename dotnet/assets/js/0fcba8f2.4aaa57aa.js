"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4625],{2235:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=n(4848),i=n(8453);n(4235),n(8328),n(3078);const r={id:"class-pageassertions",title:"PageAssertions"},a=void 0,o={id:"api/class-pageassertions",title:"PageAssertions",description:"The [PageAssertions] class provides assertion methods that can be used to make assertions about the [Page] state in the tests.",source:"@site/docs/api/class-pageassertions.mdx",sourceDirName:"api",slug:"/api/class-pageassertions",permalink:"/dotnet/docs/next/api/class-pageassertions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-pageassertions",title:"PageAssertions"},sidebar:"api",previous:{title:"LocatorAssertions",permalink:"/dotnet/docs/next/api/class-locatorassertions"}},l={},c=[{value:"Methods",id:"methods",level:2},{value:"ToHaveTitleAsync",id:"page-assertions-to-have-title",level:3},{value:"ToHaveURLAsync",id:"page-assertions-to-have-url",level:3},{value:"Properties",id:"properties",level:2},{value:"Not",id:"page-assertions-not",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.a,{href:"/dotnet/docs/next/api/class-pageassertions",title:"PageAssertions",children:"PageAssertions"})," class provides assertion methods that can be used to make assertions about the ",(0,t.jsx)(s.a,{href:"/dotnet/docs/next/api/class-page",title:"Page",children:"Page"})," state in the tests."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'using System.Text.RegularExpressions;\nusing Microsoft.Playwright;\nusing Microsoft.Playwright.MSTest;\n\nnamespace PlaywrightTests;\n\n[TestClass]\npublic class ExampleTests : PageTest\n{\n    [TestMethod]\n    public async Task NavigateToLoginPage()\n    {\n        await Page.GetByRole(AriaRole.Button, new() { Name = "Sign In" }).ClickAsync();\n        await Expect(Page).ToHaveURLAsync(new Regex(".*/login"));\n    }\n}\n'})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(s.h3,{id:"page-assertions-to-have-title",children:"ToHaveTitleAsync"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.20"}),"\n",(0,t.jsx)("x-search",{children:"pageAssertions.ToHaveTitleAsync"}),"\n",(0,t.jsx)(s.p,{children:"Ensures the page has the given title."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'await Expect(Page).ToHaveTitleAsync("Playwright");\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"titleOrRegExp"})," ",(0,t.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"})," | ",(0,t.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex",title:"Regex",children:"Regex"})," ",(0,t.jsx)("font",{size:"2",children:"Added in: v1.18"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-option-title-or-reg-exp"}),(0,t.jsx)("a",{href:"#page-assertions-to-have-title-option-title-or-reg-exp",class:"list-anchor",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:"Expected title or RegExp."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"options"})," ",(0,t.jsx)(s.code,{children:"PageAssertionsToHaveTitleOptions?"})," ",(0,t.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Timeout"})," [float]? ",(0,t.jsx)(s.em,{children:"(optional)"})," ",(0,t.jsx)("font",{size:"2",children:"Added in: v1.18"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-option-timeout"}),(0,t.jsx)("a",{href:"#page-assertions-to-have-title-option-timeout",class:"list-anchor",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["Time to retry the assertion for in milliseconds. Defaults to ",(0,t.jsx)(s.code,{children:"5000"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void",children:"void"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-return"}),(0,t.jsx)("a",{href:"#page-assertions-to-have-title-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"page-assertions-to-have-url",children:"ToHaveURLAsync"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.20"}),"\n",(0,t.jsx)("x-search",{children:"pageAssertions.ToHaveURLAsync"}),"\n",(0,t.jsx)(s.p,{children:"Ensures the page is navigated to the given URL."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'await Expect(Page).ToHaveURLAsync(new Regex(".*checkout"));\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"urlOrRegExp"})," ",(0,t.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"})," | ",(0,t.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex",title:"Regex",children:"Regex"})," ",(0,t.jsx)("font",{size:"2",children:"Added in: v1.18"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-option-url-or-reg-exp"}),(0,t.jsx)("a",{href:"#page-assertions-to-have-url-option-url-or-reg-exp",class:"list-anchor",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:"Expected URL string or RegExp."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"options"})," ",(0,t.jsx)(s.code,{children:"PageAssertionsToHaveURLOptions?"})," ",(0,t.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"IgnoreCase"})," ",(0,t.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool",children:"bool"}),"? ",(0,t.jsx)(s.em,{children:"(optional)"})," ",(0,t.jsx)("font",{size:"2",children:"Added in: v1.44"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-option-ignore-case"}),(0,t.jsx)("a",{href:"#page-assertions-to-have-url-option-ignore-case",class:"list-anchor",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["Whether to perform case-insensitive match. ",(0,t.jsx)(s.code,{children:"ignoreCase"})," option takes precedence over the corresponding regular expression flag if specified."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Timeout"})," [float]? ",(0,t.jsx)(s.em,{children:"(optional)"})," ",(0,t.jsx)("font",{size:"2",children:"Added in: v1.18"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-option-timeout"}),(0,t.jsx)("a",{href:"#page-assertions-to-have-url-option-timeout",class:"list-anchor",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["Time to retry the assertion for in milliseconds. Defaults to ",(0,t.jsx)(s.code,{children:"5000"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void",children:"void"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-return"}),(0,t.jsx)("a",{href:"#page-assertions-to-have-url-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"page-assertions-not",children:"Not"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.20"}),"\n",(0,t.jsx)("x-search",{children:"pageAssertions.Not"}),"\n",(0,t.jsxs)(s.p,{children:["Makes the assertion check for the opposite condition. For example, this code tests that the page URL doesn't contain ",(0,t.jsx)(s.code,{children:'"error"'}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:'await Expect(Page).Not.ToHaveURLAsync("error");\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-csharp",children:"Expect(Page).Not\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Type"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/dotnet/docs/next/api/class-pageassertions",title:"PageAssertions",children:"PageAssertions"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);