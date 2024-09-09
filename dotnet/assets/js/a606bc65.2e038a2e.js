"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[954],{7192:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=s(4848),a=s(8453),r=s(4235),o=s(8328);s(3078);const i={id:"auth",title:"\u8eab\u4efd\u9a57\u8b49"},l=void 0,c={id:"auth",title:"\u8eab\u4efd\u9a57\u8b49",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/auth.mdx",sourceDirName:".",slug:"/auth",permalink:"/dotnet/docs/auth",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"auth",title:"\u8eab\u4efd\u9a57\u8b49"},sidebar:"docs",previous:{title:"\u65b7\u8a00",permalink:"/dotnet/docs/test-assertions"},next:{title:"\u700f\u89bd\u5668",permalink:"/dotnet/docs/browsers"}},h={},d=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u6838\u5fc3\u6982\u5ff5",id:"\u6838\u5fc3\u6982\u5ff5",level:2},{value:"\u5728\u6bcf\u500b\u6e2c\u8a66\u524d\u767b\u5165",id:"\u5728\u6bcf\u500b\u6e2c\u8a66\u524d\u767b\u5165",level:2},{value:"\u91cd\u8907\u4f7f\u7528\u5df2\u767b\u5165\u72c0\u614b",id:"\u91cd\u8907\u4f7f\u7528\u5df2\u767b\u5165\u72c0\u614b",level:2},{value:"\u9032\u968e\u60c5\u5883",id:"\u9032\u968e\u60c5\u5883",level:2},{value:"Session storage",id:"session-storage",level:3}];function g(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright \u5728\u7a31\u70ba",(0,n.jsx)(t.a,{href:"/dotnet/docs/browser-contexts",children:"\u700f\u89bd\u5668\u4e0a\u4e0b\u6587"}),"\u7684\u9694\u96e2\u74b0\u5883\u4e2d\u57f7\u884c\u6e2c\u8a66\u3002\u9019\u7a2e\u9694\u96e2\u6a21\u578b\u63d0\u9ad8\u4e86\u53ef\u91cd\u73fe\u6027\u4e26\u9632\u6b62\u9023\u9396\u6e2c\u8a66\u5931\u6557\u3002\u6e2c\u8a66\u53ef\u4ee5\u52a0\u8f09\u73fe\u6709\u7684\u5df2\u9a57\u8b49\u72c0\u614b\u3002\u9019\u6d88\u9664\u4e86\u5728\u6bcf\u500b\u6e2c\u8a66\u4e2d\u9032\u884c\u8eab\u4efd\u9a57\u8b49\u7684\u9700\u8981\uff0c\u4e26\u52a0\u5feb\u4e86\u6e2c\u8a66\u57f7\u884c\u901f\u5ea6\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u6838\u5fc3\u6982\u5ff5",children:"\u6838\u5fc3\u6982\u5ff5"}),"\n",(0,n.jsx)(t.p,{children:"\u7121\u8ad6\u60a8\u9078\u64c7\u54ea\u7a2e\u9a57\u8b49\u7b56\u7565\uff0c\u60a8\u53ef\u80fd\u6703\u5c07\u5df2\u9a57\u8b49\u7684\u700f\u89bd\u5668\u72c0\u614b\u5b58\u5132\u5728\u6a94\u6848\u7cfb\u7d71\u4e0a\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u6211\u5011\u5efa\u8b70\u5efa\u7acb ",(0,n.jsx)(t.code,{children:"playwright/.auth"})," \u76ee\u9304\u4e26\u5c07\u5176\u6dfb\u52a0\u5230 ",(0,n.jsx)(t.code,{children:".gitignore"})," \u4e2d\u3002\u60a8\u7684\u8eab\u4efd\u9a57\u8b49\u7a0b\u5e8f\u5c07\u751f\u6210\u5df2\u9a57\u8b49\u7684\u700f\u89bd\u5668\u72c0\u614b\u4e26\u5c07\u5176\u4fdd\u5b58\u5230\u6b64 ",(0,n.jsx)(t.code,{children:"playwright/.auth"})," \u76ee\u9304\u4e2d\u7684\u6a94\u6848\u3002\u7a0d\u5f8c\uff0c\u6e2c\u8a66\u5c07\u91cd\u7528\u6b64\u72c0\u614b\u4e26\u4ee5\u5df2\u9a57\u8b49\u7684\u65b9\u5f0f\u958b\u59cb\u3002"]}),"\n",(0,n.jsxs)(r.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,n.jsx)(o.A,{value:"bash",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"mkdir -p playwright/.auth\necho $'\\nplaywright/.auth' >> .gitignore\n"})})}),(0,n.jsx)(o.A,{value:"powershell",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-powershell",children:'New-Item -ItemType Directory -Force -Path playwright\\.auth\nAdd-Content -path .gitignore "`r`nplaywright/.auth"\n'})})}),(0,n.jsx)(o.A,{value:"batch",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-batch",children:'md playwright\\.auth\necho. >> .gitignore\necho "playwright/.auth" >> .gitignore\n'})})})]}),"\n",(0,n.jsx)(t.h2,{id:"\u5728\u6bcf\u500b\u6e2c\u8a66\u524d\u767b\u5165",children:"\u5728\u6bcf\u500b\u6e2c\u8a66\u524d\u767b\u5165"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright API \u53ef\u4ee5",(0,n.jsx)(t.a,{href:"/dotnet/docs/input",children:"\u81ea\u52d5\u5316\u4e92\u52d5"}),"\u8207\u767b\u5165\u8868\u55ae\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u4ee5\u4e0b\u7bc4\u4f8b\u767b\u5165 GitHub\u3002\u4e00\u65e6\u9019\u4e9b\u6b65\u9a5f\u57f7\u884c\u5b8c\u7562\uff0c\u700f\u89bd\u5668\u4e0a\u4e0b\u6587\u5c07\u6703\u88ab\u9a57\u8b49\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'var page = await context.NewPageAsync();\nawait page.GotoAsync("https://github.com/login");\n// Interact with login form\nawait page.GetByLabel("Username or email address").FillAsync("username");\nawait page.GetByLabel("Password").FillAsync("password");\nawait page.GetByRole(AriaRole.Button, new() { Name = "Sign in" }).ClickAsync();\n// Continue with the test\n'})}),"\n",(0,n.jsx)(t.p,{children:"\u91cd\u65b0\u767b\u5165\u6bcf\u500b\u6e2c\u8a66\u6703\u6e1b\u6162\u6e2c\u8a66\u57f7\u884c\u901f\u5ea6\u3002\u70ba\u4e86\u6e1b\u8f15\u9019\u7a2e\u60c5\u6cc1\uff0c\u8acb\u6539\u7528\u73fe\u6709\u7684\u9a57\u8b49\u72c0\u614b\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u91cd\u8907\u4f7f\u7528\u5df2\u767b\u5165\u72c0\u614b",children:"\u91cd\u8907\u4f7f\u7528\u5df2\u767b\u5165\u72c0\u614b"}),"\n",(0,n.jsx)(t.p,{children:"Playwright \u63d0\u4f9b\u4e86\u4e00\u7a2e\u5728\u6e2c\u8a66\u4e2d\u91cd\u8907\u4f7f\u7528\u5df2\u767b\u5165\u72c0\u614b\u7684\u65b9\u6cd5\u3002\u9019\u6a23\u4f60\u53ea\u9700\u767b\u5165\u4e00\u6b21\uff0c\u7136\u5f8c\u5728\u6240\u6709\u6e2c\u8a66\u4e2d\u8df3\u904e\u767b\u5165\u6b65\u9a5f\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["Web apps \u4f7f\u7528\u57fa\u65bc cookie \u6216\u57fa\u65bc token \u7684\u8eab\u4efd\u9a57\u8b49\uff0c\u5df2\u9a57\u8b49\u7684\u72c0\u614b\u5b58\u5132\u70ba",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",children:"cookies"}),"\u6216\u5728",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage",children:"local storage"}),"\u4e2d\u3002Playwright \u63d0\u4f9b",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-browsercontext#browser-context-storage-state",children:"BrowserContext.StorageStateAsync()"}),"\u65b9\u6cd5\uff0c\u53ef\u7528\u65bc\u5f9e\u5df2\u9a57\u8b49\u7684\u4e0a\u4e0b\u6587\u4e2d\u6aa2\u7d22\u5b58\u5132\u72c0\u614b\uff0c\u7136\u5f8c\u4f7f\u7528\u9810\u586b\u72c0\u614b\u5efa\u7acb\u65b0\u7684\u4e0a\u4e0b\u6587\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"Cookies \u548c local storage \u72c0\u614b\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u700f\u89bd\u5668\u4e2d\u4f7f\u7528\u3002\u5b83\u5011\u4f9d\u8cf4\u65bc\u60a8\u7684\u61c9\u7528\u7a0b\u5f0f\u7684\u8eab\u4efd\u9a57\u8b49\u6a21\u578b: \u4e00\u4e9b\u61c9\u7528\u7a0b\u5f0f\u53ef\u80fd\u9700\u8981\u540c\u6642\u4f7f\u7528 cookies \u548c local storage\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u7247\u6bb5\u5f9e\u5df2\u9a57\u8b49\u7684\u4e0a\u4e0b\u6587\u4e2d\u6aa2\u7d22\u72c0\u614b\uff0c\u4e26\u4f7f\u7528\u8a72\u72c0\u614b\u5efa\u7acb\u4e00\u500b\u65b0\u7684\u4e0a\u4e0b\u6587\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'// Save storage state into the file.\n// Tests are executed in <TestProject>\\bin\\Debug\\netX.0\\ therefore relative path is used to reference playwright/.auth created in project root\nawait context.StorageStateAsync(new()\n{\n    Path = "../../../playwright/.auth/state.json"\n});\n\n// Create a new context with the saved storage state.\nvar context = await browser.NewContextAsync(new()\n{\n    StorageStatePath = "../../../playwright/.auth/state.json"\n});\n'})}),"\n",(0,n.jsx)(t.h2,{id:"\u9032\u968e\u60c5\u5883",children:"\u9032\u968e\u60c5\u5883"}),"\n",(0,n.jsx)(t.h3,{id:"session-storage",children:"Session storage"}),"\n",(0,n.jsxs)(t.p,{children:["\u91cd\u8907\u4f7f\u7528\u5df2\u9a57\u8b49\u7684\u72c0\u614b\u6db5\u84cb\u4e86",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",children:" cookies"})," \u548c",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage",children:" local storage"})," \u57fa\u65bc\u9a57\u8b49\u3002\u5f88\u5c11\u4f7f\u7528",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage",children:" session storage"})," \u4f86\u5b58\u5132\u8207\u5df2\u767b\u5165\u72c0\u614b\u76f8\u95dc\u7684\u8cc7\u8a0a\u3002Session storage \u7279\u5b9a\u65bc\u67d0\u500b\u7279\u5b9a\u7684\u57df\uff0c\u4e26\u4e14\u4e0d\u6703\u5728\u9801\u9762\u52a0\u8f09\u4e4b\u9593\u6301\u7e8c\u5b58\u5728\u3002Playwright \u4e0d\u63d0\u4f9b\u6301\u4e45\u5316 session storage \u7684 API\uff0c\u4f46\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u7247\u6bb5\u4f86\u4fdd\u5b58/\u52a0\u8f09 session storage\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'// Get session storage and store as env variable\nvar sessionStorage = await page.EvaluateAsync<string>("() => JSON.stringify(sessionStorage)");\nEnvironment.SetEnvironmentVariable("SESSION_STORAGE", sessionStorage);\n\n// Set session storage in a new context\nvar loadedSessionStorage = Environment.GetEnvironmentVariable("SESSION_STORAGE");\nawait context.AddInitScriptAsync(@"(storage => {\n    if (window.location.hostname === \'example.com\') {\n      const entries = JSON.parse(storage);\n      for (const [key, value] of Object.entries(entries)) {\n        window.sessionStorage.setItem(key, value);\n      }\n    }\n  })(\'" + loadedSessionStorage + "\')");\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}}}]);