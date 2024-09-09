"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1207],{1802:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var t=s(4848),i=s(8453),l=s(4235),a=s(8328);s(3078);const r={id:"intro",title:"\u5b89\u88dd"},c=void 0,d={id:"intro",title:"\u5b89\u88dd",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/dotnet/docs/intro",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"intro",title:"\u5b89\u88dd"},sidebar:"docs",next:{title:"\u64b0\u5beb\u6e2c\u8a66",permalink:"/dotnet/docs/writing-tests"}},o={},h=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u6dfb\u52a0\u7bc4\u4f8b\u6e2c\u8a66",id:"\u6dfb\u52a0\u7bc4\u4f8b\u6e2c\u8a66",level:2},{value:"\u57f7\u884c\u7bc4\u4f8b\u6e2c\u8a66",id:"\u57f7\u884c\u7bc4\u4f8b\u6e2c\u8a66",level:2},{value:"\u7cfb\u7d71\u9700\u6c42",id:"\u7cfb\u7d71\u9700\u6c42",level:2},{value:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",level:2}];function x(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,t.jsx)(n.p,{children:"Playwright \u662f\u5c08\u70ba\u6eff\u8db3\u7aef\u5230\u7aef\u6e2c\u8a66\u9700\u6c42\u800c\u5efa\u7acb\u7684\u3002Playwright \u652f\u63f4\u6240\u6709\u73fe\u4ee3\u6e32\u67d3\u5f15\u64ce\uff0c\u5305\u62ec Chromium\u3001WebKit \u548c Firefox\u3002\u5728 Windows\u3001Linux \u548c macOS \u4e0a\u9032\u884c\u6e2c\u8a66\uff0c\u53ef\u4ee5\u662f\u672c\u5730\u6216 CI \u4e0a\uff0c\u7121\u982d\u6216\u6709\u982d\uff0c\u4e26\u5177\u6709\u539f\u751f\u884c\u52d5\u6a21\u64ec\u529f\u80fd\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u9078\u64c7\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"/dotnet/docs/test-runners#mstest",children:"MSTest base classes"})," \u6216 ",(0,t.jsx)(n.a,{href:"/dotnet/docs/test-runners#nunit",children:"NUnit base classes"})," \u4f86\u64b0\u5beb\u7aef\u5230\u7aef\u6e2c\u8a66\uff0c\u9019\u4e9b\u662f Playwright \u63d0\u4f9b\u7684\u3002\u9019\u4e9b\u985e\u5225\u652f\u63f4\u5728\u591a\u500b\u700f\u89bd\u5668\u5f15\u64ce\u4e0a\u57f7\u884c\u6e2c\u8a66\u3001\u5e73\u884c\u8655\u7406\u6e2c\u8a66\u3001\u8abf\u6574\u555f\u52d5/\u4e0a\u4e0b\u6587\u9078\u9805\uff0c\u4e26\u5728\u6bcf\u500b\u6e2c\u8a66\u4e2d\u81ea\u52d5\u7372\u53d6 ",(0,t.jsx)(n.a,{href:"/dotnet/docs/api/class-page",title:"Page",children:"Page"}),"/",(0,t.jsx)(n.a,{href:"/dotnet/docs/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"})," \u5be6\u4f8b\u3002\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"/dotnet/docs/library",children:"\u51fd\u5f0f\u5eab"})," \u624b\u52d5\u64b0\u5beb\u6e2c\u8a66\u57fa\u790e\u8a2d\u65bd\u3002"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u958b\u59cb\u5efa\u7acb\u4e00\u500b\u65b0\u5c08\u6848\uff0c\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"dotnet new"}),"\u3002\u9019\u5c07\u5efa\u7acb ",(0,t.jsx)(n.code,{children:"PlaywrightTests"})," \u76ee\u9304\uff0c\u5176\u4e2d\u5305\u542b\u4e00\u500b ",(0,t.jsx)(n.code,{children:"UnitTest1.cs"})," \u6a94\u6848:"]}),"\n"]}),"\n",(0,t.jsxs)(l.A,{groupId:"test-runners",defaultValue:"mstest",values:[{label:"MSTest",value:"mstest"},{label:"NUnit",value:"nunit"}],children:[(0,t.jsx)(a.A,{value:"nunit",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dotnet new nunit -n PlaywrightTests\ncd PlaywrightTests\n"})})}),(0,t.jsx)(a.A,{value:"mstest",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dotnet new mstest -n PlaywrightTests\ncd PlaywrightTests\n"})})})]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u5b89\u88dd\u5fc5\u8981\u7684 Playwright \u76f8\u4f9d\u5957\u4ef6:"}),"\n"]}),"\n",(0,t.jsxs)(l.A,{groupId:"test-runners",defaultValue:"mstest",values:[{label:"MSTest",value:"mstest"},{label:"NUnit",value:"nunit"}],children:[(0,t.jsx)(a.A,{value:"nunit",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dotnet add package Microsoft.Playwright.NUnit\n"})})}),(0,t.jsx)(a.A,{value:"mstest",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dotnet add package Microsoft.Playwright.MSTest\n"})})})]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["\u5efa\u69cb\u5c08\u6848\uff0c\u4f7f ",(0,t.jsx)(n.code,{children:"playwright.ps1"})," \u53ef\u7528\u65bc ",(0,t.jsx)(n.code,{children:"bin"})," \u76ee\u9304\u5167:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dotnet build\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5b89\u88dd\u6240\u9700\u7684\u700f\u89bd\u5668\u3002\u6b64\u7bc4\u4f8b\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"net8.0"}),"\uff0c\u5982\u679c\u60a8\u4f7f\u7528\u4e0d\u540c\u7248\u672c\u7684 .NET\uff0c\u60a8\u9700\u8981\u8abf\u6574\u547d\u4ee4\u4e26\u5c07 ",(0,t.jsx)(n.code,{children:"net8.0"})," \u66f4\u6539\u70ba\u60a8\u7684\u7248\u672c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pwsh bin/Debug/net8.0/playwright.ps1 install\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c ",(0,t.jsx)(n.code,{children:"pwsh"})," \u4e0d\u53ef\u7528\uff0c\u4f60\u5c07\u9700\u8981",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/powershell/scripting/install/installing-powershell",children:"\u5b89\u88dd PowerShell"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6dfb\u52a0\u7bc4\u4f8b\u6e2c\u8a66",children:"\u6dfb\u52a0\u7bc4\u4f8b\u6e2c\u8a66"}),"\n",(0,t.jsxs)(n.p,{children:["\u7de8\u8f2f ",(0,t.jsx)(n.code,{children:"UnitTest1.cs"})," \u6587\u4ef6\uff0c\u4f7f\u7528\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u4f86\u5efa\u7acb\u4e00\u500b\u7bc4\u4f8b\u7aef\u5230\u7aef\u6e2c\u8a66:"]}),"\n",(0,t.jsxs)(l.A,{groupId:"test-runners",defaultValue:"mstest",values:[{label:"MSTest",value:"mstest"},{label:"NUnit",value:"nunit"}],children:[(0,t.jsx)(a.A,{value:"nunit",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",metastring:'title="UnitTest1.cs"',children:'using System.Text.RegularExpressions;\nusing System.Threading.Tasks;\nusing Microsoft.Playwright;\nusing Microsoft.Playwright.NUnit;\nusing NUnit.Framework;\n\nnamespace PlaywrightTests;\n\n[Parallelizable(ParallelScope.Self)]\n[TestFixture]\npublic class ExampleTest : PageTest\n{\n    [Test]\n    public async Task HasTitle()\n    {\n        await Page.GotoAsync("https://playwright.dev");\n\n        // Expect a title "to contain" a substring.\n        await Expect(Page).ToHaveTitleAsync(new Regex("Playwright"));\n    }\n\n    [Test]\n    public async Task GetStartedLink()\n    {\n        await Page.GotoAsync("https://playwright.dev");\n\n        // Click the get started link.\n        await Page.GetByRole(AriaRole.Link, new() { Name = "Get started" }).ClickAsync();\n\n        // Expects page to have a heading with the name of Installation.\n        await Expect(Page.GetByRole(AriaRole.Heading, new() { Name = "Installation" })).ToBeVisibleAsync();\n    } \n}\n'})})}),(0,t.jsx)(a.A,{value:"mstest",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",metastring:'title="UnitTest1.cs"',children:'using System.Text.RegularExpressions;\nusing Microsoft.Playwright;\nusing Microsoft.Playwright.MSTest;\n\nnamespace PlaywrightTests;\n\n[TestClass]\npublic class ExampleTest : PageTest\n{\n    [TestMethod]\n    public async Task HasTitle()\n    {\n        await Page.GotoAsync("https://playwright.dev");\n\n        // Expect a title "to contain" a substring.\n        await Expect(Page).ToHaveTitleAsync(new Regex("Playwright"));\n    }\n\n    [TestMethod]\n    public async Task GetStartedLink()\n    {\n        await Page.GotoAsync("https://playwright.dev");\n\n        // Click the get started link.\n        await Page.GetByRole(AriaRole.Link, new() { Name = "Get started" }).ClickAsync();\n\n        // Expects page to have a heading with the name of Installation.\n        await Expect(Page.GetByRole(AriaRole.Heading, new() { Name = "Installation" })).ToBeVisibleAsync();\n    } \n}\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u57f7\u884c\u7bc4\u4f8b\u6e2c\u8a66",children:"\u57f7\u884c\u7bc4\u4f8b\u6e2c\u8a66"}),"\n",(0,t.jsxs)(n.p,{children:["\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u6e2c\u8a66\u5c07\u5728 Chromium \u4e0a\u57f7\u884c\u3002\u9019\u53ef\u4ee5\u901a\u904e ",(0,t.jsx)(n.code,{children:"BROWSER"})," \u74b0\u5883\u8b8a\u6578\u9032\u884c\u914d\u7f6e\uff0c\u6216\u901a\u904e\u8abf\u6574 ",(0,t.jsx)(n.a,{href:"/dotnet/docs/running-tests",children:"launch configuration options"})," \u4f86\u5be6\u73fe\u3002\u6e2c\u8a66\u5728\u7121\u982d\u6a21\u5f0f\u4e0b\u57f7\u884c\uff0c\u9019\u610f\u5473\u8457\u5728\u57f7\u884c\u6e2c\u8a66\u6642\u4e0d\u6703\u6253\u958b\u700f\u89bd\u5668\u3002\u6e2c\u8a66\u7d50\u679c\u548c\u6e2c\u8a66\u65e5\u8a8c\u5c07\u986f\u793a\u5728\u7d42\u7aef\u4e2d\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dotnet test\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8acb\u53c3\u95b1\u6211\u5011\u7684",(0,t.jsx)(n.a,{href:"/dotnet/docs/running-tests",children:"\u57f7\u884c\u548c\u9664\u932f\u6e2c\u8a66"}),"\u6587\u4ef6\uff0c\u4ee5\u4e86\u89e3\u66f4\u591a\u95dc\u65bc\u5728\u6709\u982d\u6a21\u5f0f\u4e0b\u57f7\u884c\u6e2c\u8a66\u3001\u57f7\u884c\u591a\u500b\u6e2c\u8a66\u3001\u57f7\u884c\u7279\u5b9a\u914d\u7f6e\u7b49\u8cc7\u8a0a\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u7cfb\u7d71\u9700\u6c42",children:"\u7cfb\u7d71\u9700\u6c42"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Playwright \u4ee5 .NET Standard 2.0 \u51fd\u5f0f\u5eab\u767c\u4f48\u3002\u6211\u5011\u63a8\u85a6 .NET 8\u3002"}),"\n",(0,t.jsx)(n.li,{children:"Windows 10+\u3001Windows Server 2016+ \u6216 Windows Subsystem for Linux (WSL)\u3002"}),"\n",(0,t.jsx)(n.li,{children:"macOS 13 Ventura \u6216 macOS 14 Sonoma\u3002"}),"\n",(0,t.jsx)(n.li,{children:"Debian 11\u3001Debian 12\u3001Ubuntu 20.04 \u6216 Ubuntu 22.04\u3001Ubuntu 24.04\uff0c\u5728 x86-64 \u548c arm64 \u67b6\u69cb\u4e0a\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",children:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/dotnet/docs/writing-tests",children:"\u4f7f\u7528 web first assertions\u3001page fixtures \u548c locators \u64b0\u5beb\u6e2c\u8a66"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/dotnet/docs/running-tests",children:"\u57f7\u884c\u55ae\u4e00\u6e2c\u8a66\u3001\u591a\u500b\u6e2c\u8a66\u3001headed \u6a21\u5f0f"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/dotnet/docs/codegen-intro",children:"\u4f7f\u7528 Codegen \u7522\u751f\u6e2c\u8a66"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/dotnet/docs/trace-viewer-intro",children:"\u67e5\u770b\u6e2c\u8a66\u7684 trace"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/dotnet/docs/ci-intro",children:"\u5728 CI \u4e0a\u57f7\u884c\u6e2c\u8a66"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/dotnet/docs/test-runners",children:"\u4e86\u89e3\u66f4\u591a\u95dc\u65bc MSTest \u548c NUnit \u57fa\u790e\u985e\u5225"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}}}]);