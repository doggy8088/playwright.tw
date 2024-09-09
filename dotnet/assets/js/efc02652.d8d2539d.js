"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6754],{5492:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var n=s(4848),l=s(8453),i=s(4235),a=s(8328);s(3078);const c={id:"writing-tests",title:"\u64b0\u5beb\u6e2c\u8a66"},r=void 0,o={id:"writing-tests",title:"\u64b0\u5beb\u6e2c\u8a66",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/writing-tests.mdx",sourceDirName:".",slug:"/writing-tests",permalink:"/dotnet/docs/writing-tests",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"writing-tests",title:"\u64b0\u5beb\u6e2c\u8a66"},sidebar:"docs",previous:{title:"\u5b89\u88dd",permalink:"/dotnet/docs/intro"},next:{title:"\u751f\u6210\u6e2c\u8a66",permalink:"/dotnet/docs/codegen-intro"}},d={},h=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u7b2c\u4e00\u500b\u6e2c\u8a66",id:"\u7b2c\u4e00\u500b\u6e2c\u8a66",level:2},{value:"Actions",id:"actions",level:2},{value:"\u5c0e\u89bd",id:"\u5c0e\u89bd",level:3},{value:"\u4e92\u52d5",id:"\u4e92\u52d5",level:3},{value:"\u57fa\u672c\u64cd\u4f5c",id:"\u57fa\u672c\u64cd\u4f5c",level:3},{value:"\u65b7\u8a00",id:"\u65b7\u8a00",level:2},{value:"\u6e2c\u8a66\u9694\u96e2",id:"\u6e2c\u8a66\u9694\u96e2",level:2},{value:"\u4f7f\u7528\u6e2c\u8a66\u639b\u9264",id:"\u4f7f\u7528\u6e2c\u8a66\u639b\u9264",level:2},{value:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",level:2}];function x(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,n.jsx)(t.p,{children:"Playwright \u6e2c\u8a66\u5f88\u7c21\u55ae\uff0c\u5c31\u5169\u4ef6\u4e8b\uff1a"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"\u57f7\u884c\u52d5\u4f5c"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"\u6839\u64da\u9810\u671f\u65b7\u8a00\u72c0\u614b"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["\u5728\u57f7\u884c\u52d5\u4f5c\u4e4b\u524d\u7121\u9700\u7b49\u5f85\u4efb\u4f55\u4e8b\u60c5: Playwright \u6703\u5728\u57f7\u884c\u6bcf\u500b\u52d5\u4f5c\u4e4b\u524d\u81ea\u52d5\u7b49\u5f85\u5404\u7a2e",(0,n.jsx)(t.a,{href:"/dotnet/docs/actionability",children:"\u53ef\u64cd\u4f5c\u6027"}),"\u6aa2\u67e5\u901a\u904e\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u4e5f\u4e0d\u9700\u8981\u5728\u57f7\u884c\u6aa2\u67e5\u6642\u8655\u7406\u7af6\u722d\u689d\u4ef6 - Playwright \u65b7\u8a00\u7684\u8a2d\u8a08\u65b9\u5f0f\u662f\u63cf\u8ff0\u6700\u7d42\u9700\u8981\u6eff\u8db3\u7684\u671f\u671b\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u5c31\u662f\u9019\u6a23\uff01\u9019\u4e9b\u8a2d\u8a08\u9078\u64c7\u4f7f Playwright \u7528\u6236\u53ef\u4ee5\u5b8c\u5168\u5fd8\u8a18\u6e2c\u8a66\u4e2d\u7684\u4e0d\u7a69\u5b9a\u8d85\u6642\u548c\u7af6\u901f\u6aa2\u67e5\u3002"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"\u4f60\u5c07\u5b78\u5230"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/dotnet/docs/writing-tests#%E7%AC%AC%E4%B8%80%E5%80%8B%E6%B8%AC%E8%A9%A6",children:"\u5982\u4f55\u64b0\u5beb\u7b2c\u4e00\u500b\u6e2c\u8a66"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/dotnet/docs/writing-tests#actions#%E4%BA%92%E5%8B%95",children:"\u5982\u4f55\u57f7\u884c\u64cd\u4f5c"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/dotnet/docs/writing-tests#%E6%96%B7%E8%A8%80",children:"\u5982\u4f55\u4f7f\u7528\u65b7\u8a00"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/dotnet/docs/writing-tests#%E6%B8%AC%E8%A9%A6%E9%9A%94%E9%9B%A2",children:"\u6e2c\u8a66\u5982\u4f55\u9694\u96e2\u57f7\u884c"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/dotnet/docs/writing-tests#%E4%BD%BF%E7%94%A8%E6%B8%AC%E8%A9%A6%E6%8E%9B%E9%89%A4",children:"\u5982\u4f55\u4f7f\u7528\u6e2c\u8a66\u9264\u5b50"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"\u7b2c\u4e00\u500b\u6e2c\u8a66",children:"\u7b2c\u4e00\u500b\u6e2c\u8a66"}),"\n",(0,n.jsx)(t.p,{children:"\u8acb\u770b\u4ee5\u4e0b\u7bc4\u4f8b\u4f86\u4e86\u89e3\u5982\u4f55\u64b0\u5beb\u6e2c\u8a66\u3002"}),"\n",(0,n.jsxs)(i.A,{groupId:"test-runners",defaultValue:"mstest",values:[{label:"MSTest",value:"mstest"},{label:"NUnit",value:"nunit"}],children:[(0,n.jsx)(a.A,{value:"nunit",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",metastring:'title="UnitTest1.cs"',children:'using System.Text.RegularExpressions;\nusing System.Threading.Tasks;\nusing Microsoft.Playwright;\nusing Microsoft.Playwright.NUnit;\nusing NUnit.Framework;\n\nnamespace PlaywrightTests;\n\n[Parallelizable(ParallelScope.Self)]\n[TestFixture]\npublic class ExampleTest : PageTest\n{\n    [Test]\n    public async Task HasTitle()\n    {\n        await Page.GotoAsync("https://playwright.dev");\n\n        // Expect a title "to contain" a substring.\n        await Expect(Page).ToHaveTitleAsync(new Regex("Playwright"));\n    }\n\n    [Test]\n    public async Task GetStartedLink()\n    {\n        await Page.GotoAsync("https://playwright.dev");\n\n        // Click the get started link.\n        await Page.GetByRole(AriaRole.Link, new() { Name = "Get started" }).ClickAsync();\n\n        // Expects page to have a heading with the name of Installation.\n        await Expect(Page.GetByRole(AriaRole.Heading, new() { Name = "Installation" })).ToBeVisibleAsync();\n    }\n}\n'})})}),(0,n.jsx)(a.A,{value:"mstest",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",metastring:'title="UnitTest1.cs"',children:'using System.Text.RegularExpressions;\nusing System.Threading.Tasks;\nusing Microsoft.Playwright;\nusing Microsoft.Playwright.MSTest;\nusing Microsoft.VisualStudio.TestTools.UnitTesting;\n\nnamespace PlaywrightTests;\n\n[TestClass]\npublic class ExampleTest : PageTest\n{\n    [TestMethod]\n    public async Task HasTitle()\n    {\n        await Page.GotoAsync("https://playwright.dev");\n\n        // Expect a title "to contain" a substring.\n        await Expect(Page).ToHaveTitleAsync(new Regex("Playwright"));\n    }\n\n    [TestMethod]\n    public async Task GetStartedLink()\n    {\n        await Page.GotoAsync("https://playwright.dev");\n\n        // Click the get started link.\n        await Page.GetByRole(AriaRole.Link, new() { Name = "Get started" }).ClickAsync();\n\n        // Expects page to have a heading with the name of Installation.\n        await Expect(Page.GetByRole(AriaRole.Heading, new() { Name = "Installation" })).ToBeVisibleAsync();\n    }\n}\n'})})})]}),"\n",(0,n.jsx)(t.h2,{id:"actions",children:"Actions"}),"\n",(0,n.jsx)(t.h3,{id:"\u5c0e\u89bd",children:"\u5c0e\u89bd"}),"\n",(0,n.jsx)(t.p,{children:"\u5927\u591a\u6578\u6e2c\u8a66\u5c07\u5f9e\u5c0e\u822a\u9801\u9762\u5230 URL \u958b\u59cb\u3002\u4e4b\u5f8c\uff0c\u6e2c\u8a66\u5c07\u80fd\u5920\u8207\u9801\u9762\u5143\u7d20\u4e92\u52d5\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'await Page.GotoAsync("https://playwright.dev");\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Playwright \u6703\u7b49\u5f85\u9801\u9762\u9054\u5230\u8f09\u5165\u72c0\u614b\u5f8c\u518d\u7e7c\u7e8c\u524d\u9032\u3002\u4e86\u89e3\u66f4\u591a\u95dc\u65bc ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-page#page-goto",children:"Page.GotoAsync()"})," \u9078\u9805\u3002"]}),"\n",(0,n.jsx)(t.h3,{id:"\u4e92\u52d5",children:"\u4e92\u52d5"}),"\n",(0,n.jsxs)(t.p,{children:["\u57f7\u884c\u64cd\u4f5c\u5f9e\u5b9a\u4f4d\u5143\u7d20\u958b\u59cb\u3002Playwright \u4f7f\u7528 ",(0,n.jsx)(t.a,{href:"/dotnet/docs/locators",children:"Locators API"})," \u4f86\u5be6\u73fe\u9019\u4e00\u9ede\u3002Locators \u4ee3\u8868\u4e86\u4e00\u7a2e\u5728\u4efb\u4f55\u6642\u523b\u5728\u9801\u9762\u4e0a\u627e\u5230\u5143\u7d20\u7684\u65b9\u6cd5\uff0c\u4e86\u89e3\u66f4\u591a\u95dc\u65bc\u53ef\u7528\u7684 ",(0,n.jsx)(t.a,{href:"/dotnet/docs/locators",children:"\u4e0d\u540c\u985e\u578b"})," \u7684 locators\u3002Playwright \u6703\u5728\u57f7\u884c\u64cd\u4f5c\u4e4b\u524d\u7b49\u5f85\u5143\u7d20\u8b8a\u5f97 ",(0,n.jsx)(t.a,{href:"/dotnet/docs/actionability",children:"\u53ef\u64cd\u4f5c"}),"\uff0c\u56e0\u6b64\u7121\u9700\u7b49\u5f85\u5b83\u8b8a\u5f97\u53ef\u7528\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'// Create a locator.\nvar getStarted = Page.GetByRole(AriaRole.Link, new() { Name = "Get started" });\n\n// Click it.\nawait getStarted.ClickAsync();\n'})}),"\n",(0,n.jsx)(t.p,{children:"\u5728\u5927\u591a\u6578\u60c5\u6cc1\u4e0b\uff0c\u5b83\u5c07\u5beb\u5728\u4e00\u884c\u4e2d:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'await Page.GetByRole(AriaRole.Link, new() { Name = "Get started" }).ClickAsync();\n'})}),"\n",(0,n.jsx)(t.h3,{id:"\u57fa\u672c\u64cd\u4f5c",children:"\u57fa\u672c\u64cd\u4f5c"}),"\n",(0,n.jsxs)(t.p,{children:["\u9019\u662f\u6700\u53d7\u6b61\u8fce\u7684 Playwright \u64cd\u4f5c\u6e05\u55ae\u3002\u8acb\u6ce8\u610f\uff0c\u9084\u6709\u66f4\u591a\u64cd\u4f5c\uff0c\u56e0\u6b64\u8acb\u52d9\u5fc5\u67e5\u770b ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locator",children:"Locator API"})," \u90e8\u5206\u4ee5\u4e86\u89e3\u66f4\u591a\u8cc7\u8a0a\u3002"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Action"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locator#locator-check",children:"Locator.CheckAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u52fe\u9078\u8f38\u5165\u7684\u8907\u9078\u6846"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locator#locator-click",children:"Locator.ClickAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u9ede\u64ca\u5143\u7d20"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locator#locator-uncheck",children:"Locator.UncheckAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u53d6\u6d88\u52fe\u9078\u8f38\u5165\u7684\u8907\u9078\u6846"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locator#locator-hover",children:"Locator.HoverAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u5c07\u6ed1\u9f20\u61f8\u505c\u5728\u5143\u7d20\u4e0a"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locator#locator-fill",children:"Locator.FillAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u586b\u5beb\u8868\u55ae\u6b04\u4f4d\uff0c\u8f38\u5165\u6587\u5b57"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locator#locator-focus",children:"Locator.FocusAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u805a\u7126\u5143\u7d20"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locator#locator-press",children:"Locator.PressAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u6309\u4e0b\u55ae\u4e00\u9375"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locator#locator-set-input-files",children:"Locator.SetInputFilesAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u9078\u64c7\u8981\u4e0a\u50b3\u7684\u6a94\u6848"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locator#locator-select-option",children:"Locator.SelectOptionAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u5728\u4e0b\u62c9\u9078\u55ae\u4e2d\u9078\u64c7\u9078\u9805"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\u65b7\u8a00",children:"\u65b7\u8a00"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright \u63d0\u4f9b\u4e86\u4e00\u500b\u540d\u70ba ",(0,n.jsx)(t.a,{href:"./test-assertions",children:"Expect"})," \u7684\u975e\u540c\u6b65\u51fd\u5f0f\uff0c\u7528\u65bc\u65b7\u8a00\u4e26\u7b49\u5f85\u76f4\u5230\u9810\u671f\u689d\u4ef6\u88ab\u6eff\u8db3\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'await Expect(Page).ToHaveTitleAsync(new Regex("Playwright"));\n'})}),"\n",(0,n.jsxs)(t.p,{children:["\u4ee5\u4e0b\u662f\u6700\u53d7\u6b61\u8fce\u7684\u975e\u540c\u6b65\u65b7\u8a00\u6e05\u55ae\u3002\u8acb\u6ce8\u610f\uff0c\u9084\u6709",(0,n.jsx)(t.a,{href:"/dotnet/docs/test-assertions",children:"\u66f4\u591a"}),"\u53ef\u4ee5\u719f\u6089\uff1a"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Assertion"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locatorassertions#locator-assertions-to-be-checked",children:"Expect(Locator).ToBeCheckedAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Checkbox \u5df2\u52fe\u9078"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locatorassertions#locator-assertions-to-be-enabled",children:"Expect(Locator).ToBeEnabledAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u63a7\u5236\u9805\u5df2\u555f\u7528"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locatorassertions#locator-assertions-to-be-visible",children:"Expect(Locator).ToBeVisibleAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u53ef\u898b"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locatorassertions#locator-assertions-to-contain-text",children:"Expect(Locator).ToContainTextAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5305\u542b\u6587\u5b57"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locatorassertions#locator-assertions-to-have-attribute",children:"Expect(Locator).ToHaveAttributeAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5177\u6709\u5c6c\u6027"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locatorassertions#locator-assertions-to-have-count",children:"Expect(Locator).ToHaveCountAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5217\u8868\u5177\u6709\u7d66\u5b9a\u7684\u9577\u5ea6"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locatorassertions#locator-assertions-to-have-text",children:"Expect(Locator).ToHaveTextAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5339\u914d\u6587\u5b57"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-locatorassertions#locator-assertions-to-have-value",children:"Expect(Locator).ToHaveValueAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u8f38\u5165\u5143\u7d20\u5177\u6709\u503c"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-pageassertions#page-assertions-to-have-title",children:"Expect(Page).ToHaveTitleAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u9801\u9762\u5177\u6709\u6a19\u984c"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-pageassertions#page-assertions-to-have-url",children:"Expect(Page).ToHaveURLAsync()"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"\u9801\u9762\u5177\u6709 URL"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\u6e2c\u8a66\u9694\u96e2",children:"\u6e2c\u8a66\u9694\u96e2"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright NUnit \u548c MSTest \u6e2c\u8a66\u6846\u67b6\u57fa\u985e\u5c07\u901a\u904e\u63d0\u4f9b\u55ae\u7368\u7684 ",(0,n.jsx)(t.code,{children:"Page"})," \u5be6\u4f8b\u4f86\u9694\u96e2\u6bcf\u500b\u6e2c\u8a66\u3002\u7531\u65bc\u700f\u89bd\u5668\u4e0a\u4e0b\u6587\uff0c\u9801\u9762\u5728\u6e2c\u8a66\u4e4b\u9593\u662f\u9694\u96e2\u7684\uff0c\u9019\u76f8\u7576\u65bc\u4e00\u500b\u5168\u65b0\u7684\u700f\u89bd\u5668\u914d\u7f6e\u6a94\u6848\uff0c\u6bcf\u500b\u6e2c\u8a66\u90fd\u6703\u7372\u5f97\u4e00\u500b\u5168\u65b0\u7684\u74b0\u5883\uff0c\u5373\u4f7f\u591a\u500b\u6e2c\u8a66\u5728\u55ae\u500b\u700f\u89bd\u5668\u4e2d\u57f7\u884c\u3002"]}),"\n",(0,n.jsxs)(i.A,{groupId:"test-runners",defaultValue:"mstest",values:[{label:"MSTest",value:"mstest"},{label:"NUnit",value:"nunit"}],children:[(0,n.jsx)(a.A,{value:"nunit",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",metastring:'title="UnitTest1.cs"',children:'using System.Threading.Tasks;\nusing Microsoft.Playwright.NUnit;\nusing NUnit.Framework;\n\nnamespace PlaywrightTests;\n\n[Parallelizable(ParallelScope.Self)]\n[TestFixture]\npublic class ExampleTest : PageTest\n{\n    [Test]\n    public async Task BasicTest()\n    {\n        await Page.GotoAsync("https://playwright.dev");\n    }\n}\n'})})}),(0,n.jsx)(a.A,{value:"mstest",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",metastring:'title="UnitTest1.cs"',children:'using System.Threading.Tasks;\nusing Microsoft.Playwright.MSTest;\nusing Microsoft.VisualStudio.TestTools.UnitTesting;\n\nnamespace PlaywrightTests;\n\n[TestClass]\npublic class ExampleTest : PageTest\n{\n    [TestMethod]\n    public async Task BasicTest()\n    {\n        await Page.GotoAsync("https://playwright.dev");\n    }\n}\n'})})})]}),"\n",(0,n.jsx)(t.h2,{id:"\u4f7f\u7528\u6e2c\u8a66\u639b\u9264",children:"\u4f7f\u7528\u6e2c\u8a66\u639b\u9264"}),"\n",(0,n.jsxs)(t.p,{children:["\u60a8\u53ef\u4ee5\u5728 NUnit \u4e2d\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"SetUp"}),"/",(0,n.jsx)(t.code,{children:"TearDown"})," \u6216\u5728 MSTest \u4e2d\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"TestInitialize"}),"/",(0,n.jsx)(t.code,{children:"TestCleanup"})," \u4f86\u6e96\u5099\u548c\u6e05\u7406\u60a8\u7684\u6e2c\u8a66\u74b0\u5883:"]}),"\n",(0,n.jsxs)(i.A,{groupId:"test-runners",defaultValue:"mstest",values:[{label:"MSTest",value:"mstest"},{label:"NUnit",value:"nunit"}],children:[(0,n.jsx)(a.A,{value:"nunit",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",metastring:'title="UnitTest1.cs"',children:'using System.Threading.Tasks;\nusing Microsoft.Playwright.NUnit;\nusing NUnit.Framework;\n\nnamespace PlaywrightTests;\n\n[Parallelizable(ParallelScope.Self)]\n[TestFixture]\npublic class ExampleTest : PageTest\n{\n    [Test]\n    public async Task MainNavigation()\n    {\n        // Assertions use the expect API.\n        await Expect(Page).ToHaveURLAsync("https://playwright.dev/");\n    }\n\n    [SetUp]\n    public async Task SetUp()\n    {\n        await Page.GotoAsync("https://playwright.dev");\n    }\n}\n'})})}),(0,n.jsx)(a.A,{value:"mstest",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",metastring:'title="UnitTest1.cs"',children:'using System.Threading.Tasks;\nusing Microsoft.Playwright.MSTest;\nusing Microsoft.VisualStudio.TestTools.UnitTesting;\n\nnamespace PlaywrightTests;\n\n[TestClass]\npublic class ExampleTest : PageTest\n{\n    [TestMethod]\n    public async Task MainNavigation()\n    {\n        // Assertions use the expect API.\n        await Expect(Page).ToHaveURLAsync("https://playwright.dev/");\n    }\n\n    [TestInitialize]\n    public async Task TestInitialize()\n    {\n        await Page.GotoAsync("https://playwright.dev");\n    }\n}\n'})})})]}),"\n",(0,n.jsx)(t.h2,{id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",children:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/dotnet/docs/running-tests",children:"\u57f7\u884c\u55ae\u4e00\u6e2c\u8a66\u3001\u591a\u500b\u6e2c\u8a66\u3001\u6709\u982d\u6a21\u5f0f"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/dotnet/docs/codegen-intro",children:"\u4f7f\u7528\u7a0b\u5f0f\u78bc\u7522\u751f\u5668\u751f\u6210\u6e2c\u8a66"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/dotnet/docs/trace-viewer-intro",children:"\u67e5\u770b\u6e2c\u8a66\u7684\u8ffd\u8e64"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/dotnet/docs/ci-intro",children:"\u5728 CI \u4e0a\u57f7\u884c\u6e2c\u8a66"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/dotnet/docs/test-runners",children:"\u4e86\u89e3\u66f4\u591a\u95dc\u65bc MSTest \u548c NUnit \u57fa\u985e"})}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}}}]);