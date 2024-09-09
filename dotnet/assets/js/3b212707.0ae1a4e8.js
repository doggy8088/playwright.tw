"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7933],{9325:(e,l,s)=>{s.r(l),s.d(l,{assets:()=>d,contentTitle:()=>t,default:()=>g,frontMatter:()=>c,metadata:()=>h,toc:()=>o});var n=s(4848),r=s(8453),a=s(4235),i=s(8328);s(3078);const c={id:"debug",title:"\u5075\u932f\u6e2c\u8a66"},t=void 0,h={id:"debug",title:"\u5075\u932f\u6e2c\u8a66",description:"Playwright Inspector",source:"@site/versioned_docs/version-stable/debug.mdx",sourceDirName:".",slug:"/debug",permalink:"/dotnet/docs/debug",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"debug",title:"\u5075\u932f\u6e2c\u8a66"},sidebar:"docs",previous:{title:"\u6642\u9418",permalink:"/dotnet/docs/clock"},next:{title:"\u5c0d\u8a71\u6846",permalink:"/dotnet/docs/dialogs"}},d={},o=[{value:"Playwright Inspector",id:"playwright-inspector",level:2},{value:"\u5728\u9664\u932f\u6a21\u5f0f\u4e0b\u57f7\u884c",id:"\u5728\u9664\u932f\u6a21\u5f0f\u4e0b\u57f7\u884c",level:3},{value:"\u9010\u6b65\u57f7\u884c\u4f60\u7684\u6e2c\u8a66",id:"\u9010\u6b65\u57f7\u884c\u4f60\u7684\u6e2c\u8a66",level:3},{value:"\u5f9e\u7279\u5b9a\u7684\u65b7\u9ede\u57f7\u884c\u6e2c\u8a66",id:"\u5f9e\u7279\u5b9a\u7684\u65b7\u9ede\u57f7\u884c\u6e2c\u8a66",level:3},{value:"\u5373\u6642\u7de8\u8f2f\u5b9a\u4f4d\u5668",id:"\u5373\u6642\u7de8\u8f2f\u5b9a\u4f4d\u5668",level:3},{value:"\u9078\u64c7\u5b9a\u4f4d\u5668",id:"\u9078\u64c7\u5b9a\u4f4d\u5668",level:3},{value:"\u53ef\u64cd\u4f5c\u6027\u65e5\u8a8c",id:"\u53ef\u64cd\u4f5c\u6027\u65e5\u8a8c",level:3},{value:"Trace Viewer",id:"trace-viewer",level:2},{value:"\u700f\u89bd\u5668\u958b\u767c\u8005\u5de5\u5177",id:"\u700f\u89bd\u5668\u958b\u767c\u8005\u5de5\u5177",level:2},{value:"playwright.$(selector)",id:"playwrightselector",level:4},{value:"playwright.$$(selector)",id:"playwrightselector-1",level:4},{value:"playwright.inspect(selector)",id:"playwrightinspectselector",level:4},{value:"playwright.locator(selector)",id:"playwrightlocatorselector",level:4},{value:"playwright.selector(element)",id:"playwrightselectorelement",level:4},{value:"\u5197\u9577\u7684 API \u65e5\u8a8c",id:"\u5197\u9577\u7684-api-\u65e5\u8a8c",level:2},{value:"Headed mode",id:"headed-mode",level:2}];function p(e){const l={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"playwright-inspector",children:"Playwright Inspector"}),"\n",(0,n.jsx)(l.p,{children:"Playwright Inspector \u662f\u4e00\u500b GUI \u5de5\u5177\uff0c\u53ef\u4ee5\u5e6b\u52a9\u4f60\u5075\u932f Playwright \u6e2c\u8a66\u3002\u5b83\u5141\u8a31\u4f60\u9010\u6b65\u57f7\u884c\u6e2c\u8a66\u3001\u5373\u6642\u7de8\u8f2f\u5b9a\u4f4d\u5668\u3001\u9078\u64c7\u5b9a\u4f4d\u5668\u4e26\u67e5\u770b\u53ef\u64cd\u4f5c\u6027\u65e5\u8a8c\u3002"}),"\n",(0,n.jsx)("img",{width:"864",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/13063165/212924587-4b84e5f6-b147-40e9-8c75-d7b9ab6b7ca1.png"}),"\n",(0,n.jsx)(l.h3,{id:"\u5728\u9664\u932f\u6a21\u5f0f\u4e0b\u57f7\u884c",children:"\u5728\u9664\u932f\u6a21\u5f0f\u4e0b\u57f7\u884c"}),"\n",(0,n.jsxs)(l.p,{children:["\u5c07 ",(0,n.jsx)(l.code,{children:"PWDEBUG"})," \u74b0\u5883\u8b8a\u6578\u8a2d\u7f6e\u70ba\u5728\u5075\u932f\u6a21\u5f0f\u4e0b\u57f7\u884c\u4f60\u7684 Playwright \u6e2c\u8a66\u3002\u9019\u6703\u914d\u7f6e Playwright \u9032\u884c\u5075\u932f\u4e26\u6253\u958b\u6aa2\u67e5\u5668\u3002\u7576\u8a2d\u7f6e ",(0,n.jsx)(l.code,{children:"PWDEBUG=1"})," \u6642\uff0c\u6703\u914d\u7f6e\u5176\u4ed6\u6709\u7528\u7684\u9810\u8a2d\u503c:"]}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"\u700f\u89bd\u5668\u5728\u6709\u982d\u6a21\u5f0f\u4e0b\u555f\u52d5"}),"\n",(0,n.jsx)(l.li,{children:"\u9810\u8a2d\u8d85\u6642\u8a2d\u5b9a\u70ba 0\uff08= \u7121\u8d85\u6642\uff09"}),"\n"]}),"\n",(0,n.jsxs)(a.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,n.jsx)(i.A,{value:"bash",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",children:"PWDEBUG=1 dotnet test\n"})})}),(0,n.jsx)(i.A,{value:"powershell",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-powershell",children:"$env:PWDEBUG=1\ndotnet test\n"})})}),(0,n.jsx)(i.A,{value:"batch",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-batch",children:"set PWDEBUG=1\ndotnet test\n"})})})]}),"\n",(0,n.jsx)(l.h3,{id:"\u9010\u6b65\u57f7\u884c\u4f60\u7684\u6e2c\u8a66",children:"\u9010\u6b65\u57f7\u884c\u4f60\u7684\u6e2c\u8a66"}),"\n",(0,n.jsx)(l.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528 Inspector \u9802\u90e8\u7684\u5de5\u5177\u6b04\u4f86\u64ad\u653e\u3001\u66ab\u505c\u6216\u9010\u6b65\u57f7\u884c\u6e2c\u8a66\u7684\u6bcf\u500b\u52d5\u4f5c\u3002\u60a8\u53ef\u4ee5\u5728\u6e2c\u8a66\u7a0b\u5f0f\u78bc\u4e2d\u770b\u5230\u7576\u524d\u52d5\u4f5c\u88ab\u7a81\u51fa\u986f\u793a\uff0c\u4e26\u4e14\u5728\u700f\u89bd\u5668\u8996\u7a97\u4e2d\u5339\u914d\u7684\u5143\u7d20\u4e5f\u6703\u88ab\u7a81\u51fa\u986f\u793a\u3002"}),"\n",(0,n.jsx)("img",{width:"1340",alt:"Playwright Inspector \u548c\u700f\u89bd\u5668",src:"https://user-images.githubusercontent.com/13063165/212936618-84b87acc-bc2e-46ed-994b-32b2ef742e60.png"}),"\n",(0,n.jsx)(l.h3,{id:"\u5f9e\u7279\u5b9a\u7684\u65b7\u9ede\u57f7\u884c\u6e2c\u8a66",children:"\u5f9e\u7279\u5b9a\u7684\u65b7\u9ede\u57f7\u884c\u6e2c\u8a66"}),"\n",(0,n.jsxs)(l.p,{children:["\u70ba\u4e86\u52a0\u901f\u9664\u932f\u904e\u7a0b\uff0c\u4f60\u53ef\u4ee5\u5728\u6e2c\u8a66\u4e2d\u52a0\u5165 ",(0,n.jsx)(l.a,{href:"/dotnet/docs/api/class-page#page-pause",children:"Page.PauseAsync()"})," \u65b9\u6cd5\u3002\u9019\u6a23\u4f60\u5c31\u4e0d\u5fc5\u9010\u6b65\u57f7\u884c\u6e2c\u8a66\u7684\u6bcf\u500b\u52d5\u4f5c\u4f86\u5230\u9054\u4f60\u60f3\u8981\u9664\u932f\u7684\u9ede\u3002"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-csharp",children:"await page.PauseAsync();\n"})}),"\n",(0,n.jsxs)(l.p,{children:["\u4e00\u65e6\u4f60\u6dfb\u52a0\u4e86 ",(0,n.jsx)(l.code,{children:"page.pause()"}),' \u547c\u53eb\uff0c\u8acb\u5728\u9664\u932f\u6a21\u5f0f\u4e0b\u57f7\u884c\u4f60\u7684\u6e2c\u8a66\u3002\u9ede\u64ca Inspector \u4e2d\u7684 "Resume" \u6309\u9215\u5c07\u6703\u57f7\u884c\u6e2c\u8a66\u4e26\u53ea\u5728 ',(0,n.jsx)(l.code,{children:"page.pause()"})," \u505c\u6b62\u3002"]}),"\n",(0,n.jsx)("img",{width:"1350",alt:"\u6e2c\u8a66\u8207 page.pause",src:"https://user-images.githubusercontent.com/13063165/219473050-122be4c2-31d0-4cbd-aa8b-8588e8b781a6.png"}),"\n",(0,n.jsx)(l.h3,{id:"\u5373\u6642\u7de8\u8f2f\u5b9a\u4f4d\u5668",children:"\u5373\u6642\u7de8\u8f2f\u5b9a\u4f4d\u5668"}),"\n",(0,n.jsxs)(l.p,{children:["\u5728\u5075\u932f\u6a21\u5f0f\u4e0b\u57f7\u884c\u6642\uff0c\u4f60\u53ef\u4ee5\u5373\u6642\u7de8\u8f2f\u5b9a\u4f4d\u5668\u3002\u5728 'Pick Locator' \u6309\u9215\u65c1\u908a\u6709\u4e00\u500b\u6b04\u4f4d\u986f\u793a\u6e2c\u8a66\u66ab\u505c\u7684",(0,n.jsx)(l.a,{href:"/dotnet/docs/locators",children:"\u5b9a\u4f4d\u5668"}),"\u3002\u4f60\u53ef\u4ee5\u76f4\u63a5\u5728 ",(0,n.jsx)(l.strong,{children:"Pick Locator"})," \u6b04\u4f4d\u4e2d\u7de8\u8f2f\u6b64\u5b9a\u4f4d\u5668\uff0c\u5339\u914d\u7684\u5143\u7d20\u5c07\u5728\u700f\u89bd\u5668\u8996\u7a97\u4e2d\u88ab\u9ad8\u4eae\u986f\u793a\u3002"]}),"\n",(0,n.jsx)(l.h3,{id:"\u9078\u64c7\u5b9a\u4f4d\u5668",children:"\u9078\u64c7\u5b9a\u4f4d\u5668"}),"\n",(0,n.jsxs)(l.p,{children:["\u5728\u9664\u932f\u6642\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u9078\u64c7\u4e00\u500b\u66f4\u5177\u5f48\u6027\u7684\u5b9a\u4f4d\u5668\u3002\u4f60\u53ef\u4ee5\u901a\u904e\u9ede\u64ca ",(0,n.jsx)(l.strong,{children:"Pick Locator"})," \u6309\u9215\u4e26\u5c07\u6ed1\u9f20\u61f8\u505c\u5728\u700f\u89bd\u5668\u8996\u7a97\u4e2d\u7684\u4efb\u4f55\u5143\u7d20\u4e0a\u4f86\u5b8c\u6210\u6b64\u64cd\u4f5c\u3002\u7576\u6ed1\u9f20\u61f8\u505c\u5728\u67d0\u500b\u5143\u7d20\u4e0a\u6642\uff0c\u4f60\u6703\u5728\u4e0b\u65b9\u770b\u5230\u5b9a\u4f4d\u6b64\u5143\u7d20\u6240\u9700\u7684\u7a0b\u5f0f\u78bc\u88ab\u9ad8\u4eae\u986f\u793a\u3002\u9ede\u64ca\u700f\u89bd\u5668\u4e2d\u7684\u5143\u7d20\u6703\u5c07\u5b9a\u4f4d\u5668\u6dfb\u52a0\u5230\u6b04\u4f4d\u4e2d\uff0c\u7136\u5f8c\u4f60\u53ef\u4ee5\u8abf\u6574\u5b83\u6216\u5c07\u5176\u8907\u88fd\u5230\u4f60\u7684\u7a0b\u5f0f\u78bc\u4e2d\u3002"]}),"\n",(0,n.jsxs)(l.p,{children:["Playwright \u6703\u67e5\u770b\u4f60\u7684\u9801\u9762\u4e26\u627e\u51fa\u6700\u4f73\u5b9a\u4f4d\u5668\uff0c\u512a\u5148\u8003\u616e",(0,n.jsx)(l.a,{href:"/dotnet/docs/locators",children:"\u89d2\u8272\u3001\u6587\u672c\u548c\u6e2c\u8a66 ID \u5b9a\u4f4d\u5668"}),"\u3002\u5982\u679c Playwright \u627e\u5230\u591a\u500b\u5339\u914d\u5b9a\u4f4d\u5668\u7684\u5143\u7d20\uff0c\u5b83\u6703\u6539\u9032\u5b9a\u4f4d\u5668\uff0c\u4f7f\u5176\u5177\u6709\u5f48\u6027\u4e26\u552f\u4e00\u8b58\u5225\u76ee\u6a19\u5143\u7d20\uff0c\u56e0\u6b64\u4f60\u4e0d\u5fc5\u64d4\u5fc3\u56e0\u5b9a\u4f4d\u5668\u800c\u5c0e\u81f4\u6e2c\u8a66\u5931\u6557\u3002"]}),"\n",(0,n.jsx)(l.h3,{id:"\u53ef\u64cd\u4f5c\u6027\u65e5\u8a8c",children:"\u53ef\u64cd\u4f5c\u6027\u65e5\u8a8c"}),"\n",(0,n.jsxs)(l.p,{children:["\u5728 Playwright \u66ab\u505c\u9ede\u64ca\u52d5\u4f5c\u6642\uff0c\u5b83\u5df2\u7d93\u57f7\u884c\u4e86\u53ef\u4ee5\u5728\u65e5\u8a8c\u4e2d\u627e\u5230\u7684",(0,n.jsx)(l.a,{href:"/dotnet/docs/actionability",children:"actionability checks"}),"\u3002\u9019\u53ef\u4ee5\u5e6b\u52a9\u4f60\u4e86\u89e3\u6e2c\u8a66\u671f\u9593\u767c\u751f\u4e86\u4ec0\u9ebc\u4ee5\u53ca Playwright \u505a\u4e86\u4ec0\u9ebc\u6216\u8a66\u5716\u505a\u4ec0\u9ebc\u3002\u65e5\u8a8c\u6703\u544a\u8a34\u4f60\u5143\u7d20\u662f\u5426\u53ef\u898b\u3001\u555f\u7528\u548c\u7a69\u5b9a\uff0c\u5b9a\u4f4d\u5668\u662f\u5426\u89e3\u6790\u70ba\u5143\u7d20\u3001\u6efe\u52d5\u5230\u8996\u5716\u4e2d\uff0c\u9084\u6709\u66f4\u591a\u3002\u5982\u679c\u7121\u6cd5\u9054\u5230\u884c\u52d5\u6027\uff0c\u5b83\u6703\u986f\u793a\u8a72\u884c\u52d5\u70ba\u5f85\u8655\u7406\u3002"]}),"\n",(0,n.jsx)(l.h2,{id:"trace-viewer",children:"Trace Viewer"}),"\n",(0,n.jsxs)(l.p,{children:["Playwright ",(0,n.jsx)(l.a,{href:"/dotnet/docs/trace-viewer",children:"Trace Viewer"})," \u662f\u4e00\u500b GUI \u5de5\u5177\uff0c\u8b93\u4f60\u63a2\u7d22\u6e2c\u8a66\u4e2d\u8a18\u9304\u7684 Playwright Traces\u3002\u4f60\u53ef\u4ee5\u5728\u5de6\u5074\u4f86\u56de\u700f\u89bd\u6bcf\u500b\u52d5\u4f5c\uff0c\u4e26\u76f4\u89c0\u5730\u770b\u5230\u52d5\u4f5c\u671f\u9593\u767c\u751f\u7684\u4e8b\u60c5\u3002\u5728\u87a2\u5e55\u4e2d\u9593\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u8a72\u52d5\u4f5c\u7684 DOM \u5feb\u7167\u3002\u5728\u53f3\u5074\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u52d5\u4f5c\u7684\u8a73\u7d30\u8cc7\u8a0a\uff0c\u5982\u6642\u9593\u3001\u53c3\u6578\u3001\u8fd4\u56de\u503c\u548c\u65e5\u8a8c\u3002\u4f60\u9084\u53ef\u4ee5\u63a2\u7d22\u4e3b\u63a7\u53f0\u8a0a\u606f\u3001\u7db2\u8def\u8acb\u6c42\u548c\u539f\u59cb\u7a0b\u5f0f\u78bc\u3002"]}),"\n",(0,n.jsx)("video",{width:"100%",height:"100%",controls:!0,muted:!0,children:(0,n.jsxs)(l.p,{children:[(0,n.jsx)("source",{src:"https://user-images.githubusercontent.com/13063165/219132713-17b9d75b-71e3-42c4-a43f-3f9e2e15f834.mp4",type:"video/mp4"})," \u60a8\u7684\u700f\u89bd\u5668\u4e0d\u652f\u63f4 video \u6a19\u7c64\u3002"]})}),"\n",(0,n.jsxs)(l.p,{children:["\u8981\u4e86\u89e3\u66f4\u591a\u95dc\u65bc\u5982\u4f55\u8a18\u9304\u8ffd\u8e64\u548c\u4f7f\u7528 Trace Viewer \u7684\u8cc7\u8a0a\uff0c\u8acb\u67e5\u770b ",(0,n.jsx)(l.a,{href:"/dotnet/docs/trace-viewer",children:"Trace Viewer"})," \u6307\u5357\u3002"]}),"\n",(0,n.jsx)(l.h2,{id:"\u700f\u89bd\u5668\u958b\u767c\u8005\u5de5\u5177",children:"\u700f\u89bd\u5668\u958b\u767c\u8005\u5de5\u5177"}),"\n",(0,n.jsxs)(l.p,{children:["\u7576\u4ee5 Debug \u6a21\u5f0f\u4e26\u4f7f\u7528 ",(0,n.jsx)(l.code,{children:"PWDEBUG=console"})," \u57f7\u884c\u6642\uff0c\u958b\u767c\u8005\u5de5\u5177\u7684\u63a7\u5236\u53f0\u4e2d\u6703\u6709\u4e00\u500b ",(0,n.jsx)(l.code,{children:"playwright"})," \u7269\u4ef6\u53ef\u7528\u3002\u958b\u767c\u8005\u5de5\u5177\u53ef\u4ee5\u5e6b\u52a9\u4f60\uff1a"]}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["\u6aa2\u67e5 DOM \u6a39\u4e26",(0,n.jsx)(l.strong,{children:"\u627e\u5230\u5143\u7d20\u9078\u64c7\u5668"})]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.strong,{children:"\u67e5\u770b\u57f7\u884c\u671f\u9593\u7684\u63a7\u5236\u53f0\u65e5\u8a8c"}),"\uff08\u6216\u5b78\u7fd2\u5982\u4f55",(0,n.jsx)(l.a,{href:"/dotnet/docs/api/class-page#page-event-console",children:"\u901a\u904e API \u95b1\u8b80\u65e5\u8a8c"}),"\uff09"]}),"\n",(0,n.jsxs)(l.li,{children:["\u6aa2\u67e5",(0,n.jsx)(l.strong,{children:"\u7db2\u8def\u6d3b\u52d5"}),"\u548c\u5176\u4ed6\u958b\u767c\u8005\u5de5\u5177\u529f\u80fd"]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"\u9019\u4e5f\u6703\u5c07 Playwright \u7684\u9810\u8a2d\u8d85\u6642\u8a2d\u5b9a\u70ba 0\uff08= \u7121\u8d85\u6642\uff09\u3002"}),"\n",(0,n.jsx)("img",{width:"1399",alt:"\u700f\u89bd\u5668\u958b\u767c\u8005\u5de5\u5177\u8207 Playwright \u7269\u4ef6",src:"https://user-images.githubusercontent.com/13063165/219128002-898f604d-9697-4b7f-95b5-a6a8260b7282.png"}),"\n",(0,n.jsxs)(l.p,{children:["\u8981\u4f7f\u7528\u700f\u89bd\u5668\u958b\u767c\u8005\u5de5\u5177\u5075\u932f\u6e2c\u8a66\uff0c\u9996\u5148\u5728\u6e2c\u8a66\u4e2d\u8a2d\u7f6e\u4e00\u500b\u65b7\u9ede\u4ee5\u4f7f\u7528 ",(0,n.jsx)(l.a,{href:"/dotnet/docs/api/class-page#page-pause",children:"Page.PauseAsync()"})," \u65b9\u6cd5\u66ab\u505c\u57f7\u884c\u3002"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-csharp",children:"await page.PauseAsync();\n"})}),"\n",(0,n.jsxs)(l.p,{children:["\u4e00\u65e6\u4f60\u5728\u6e2c\u8a66\u4e2d\u8a2d\u7f6e\u4e86\u4e00\u500b\u65b7\u9ede\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(l.code,{children:"PWDEBUG=console"})," \u4f86\u57f7\u884c\u4f60\u7684\u6e2c\u8a66\u3002"]}),"\n",(0,n.jsxs)(a.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,n.jsx)(i.A,{value:"bash",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",children:"PWDEBUG=console dotnet test\n"})})}),(0,n.jsx)(i.A,{value:"powershell",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-powershell",children:"$env:PWDEBUG=console\ndotnet test\n"})})}),(0,n.jsx)(i.A,{value:"batch",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-batch",children:"set PWDEBUG=console\ndotnet test\n"})})})]}),"\n",(0,n.jsxs)(l.p,{children:["\u4e00\u65e6 Playwright \u555f\u52d5\u700f\u89bd\u5668\u8996\u7a97\uff0c\u4f60\u53ef\u4ee5\u958b\u555f\u958b\u767c\u8005\u5de5\u5177\u3002",(0,n.jsx)(l.code,{children:"playwright"})," \u7269\u4ef6\u5c07\u5728\u4e3b\u63a7\u53f0\u9762\u677f\u4e2d\u53ef\u7528\u3002"]}),"\n",(0,n.jsx)(l.h4,{id:"playwrightselector",children:"playwright.$(selector)"}),"\n",(0,n.jsx)(l.p,{children:"\u67e5\u8a62 Playwright \u9078\u64c7\u5668\uff0c\u4f7f\u7528\u5be6\u969b\u7684 Playwright \u67e5\u8a62\u5f15\u64ce\uff0c\u4f8b\u5982:"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",children:"playwright.$('.auth-form >> text=Log in');\n\n<button>Log in</button>\n"})}),"\n",(0,n.jsx)(l.h4,{id:"playwrightselector-1",children:"playwright.$$(selector)"}),"\n",(0,n.jsxs)(l.p,{children:["\u8207 ",(0,n.jsx)(l.code,{children:"playwright.$"})," \u76f8\u540c\uff0c\u4f46\u8fd4\u56de\u6240\u6709\u5339\u914d\u7684\u5143\u7d20\u3002"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",children:"playwright.$$('li >> text=John')\n\n[<li>, <li>, <li>, <li>]\n"})}),"\n",(0,n.jsx)(l.h4,{id:"playwrightinspectselector",children:"playwright.inspect(selector)"}),"\n",(0,n.jsx)(l.p,{children:"\u5728 Elements \u9762\u677f\u4e2d\u986f\u793a\u5143\u7d20\u3002"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",children:"playwright.inspect('text=Log in')\n"})}),"\n",(0,n.jsx)(l.h4,{id:"playwrightlocatorselector",children:"playwright.locator(selector)"}),"\n",(0,n.jsx)(l.p,{children:"\u5efa\u7acb\u4e00\u500b\u5b9a\u4f4d\u5668\u4e26\u67e5\u8a62\u5339\u914d\u7684\u5143\u7d20\uff0c\u4f8b\u5982:"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",children:"playwright.locator('.auth-form', { hasText: 'Log in' });\n\nLocator ()\n  - element: button\n  - elements: [button]\n"})}),"\n",(0,n.jsx)(l.h4,{id:"playwrightselectorelement",children:"playwright.selector(element)"}),"\n",(0,n.jsxs)(l.p,{children:["\u7522\u751f\u7d66\u5b9a\u5143\u7d20\u7684\u9078\u64c7\u5668\u3002\u4f8b\u5982\uff0c\u5728 Elements \u9762\u677f\u4e2d\u9078\u64c7\u4e00\u500b\u5143\u7d20\u4e26\u50b3\u905e ",(0,n.jsx)(l.code,{children:"$0"}),":"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",children:'playwright.selector($0)\n\n"div[id="glow-ingress-block"] >> text=/.*Hello.*/"\n'})}),"\n",(0,n.jsx)(l.h2,{id:"\u5197\u9577\u7684-api-\u65e5\u8a8c",children:"\u5197\u9577\u7684 API \u65e5\u8a8c"}),"\n",(0,n.jsxs)(l.p,{children:["Playwright \u652f\u63f4\u4f7f\u7528 ",(0,n.jsx)(l.code,{children:"DEBUG"})," \u74b0\u5883\u8b8a\u6578\u9032\u884c\u8a73\u7d30\u65e5\u8a8c\u8a18\u9304\u3002"]}),"\n",(0,n.jsxs)(a.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,n.jsx)(i.A,{value:"bash",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-bash",children:"DEBUG=pw:api dotnet run\n"})})}),(0,n.jsx)(i.A,{value:"powershell",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-powershell",children:'$env:DEBUG="pw:api"\ndotnet run\n'})})}),(0,n.jsx)(i.A,{value:"batch",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-batch",children:"set DEBUG=pw:api\ndotnet run\n"})})})]}),"\n",(0,n.jsx)(l.admonition,{type:"note",children:(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.strong,{children:"\u5c0d\u65bc WebKit"}),": \u5728\u57f7\u884c\u671f\u9593\u555f\u52d5 WebKit Inspector \u5c07\u6703\u963b\u6b62 Playwright \u8173\u672c\u7e7c\u7e8c\u57f7\u884c\uff0c\u4e26\u4e14\u6703\u91cd\u7f6e\u9810\u5148\u914d\u7f6e\u7684\u4f7f\u7528\u8005\u4ee3\u7406\u548c\u88dd\u7f6e\u6a21\u64ec\u3002"]})}),"\n",(0,n.jsx)(l.h2,{id:"headed-mode",children:"Headed mode"}),"\n",(0,n.jsxs)(l.p,{children:["Playwright \u9810\u8a2d\u4ee5\u7121\u982d\u6a21\u5f0f\u57f7\u884c\u700f\u89bd\u5668\u3002\u8981\u66f4\u6539\u6b64\u884c\u70ba\uff0c\u8acb\u4f7f\u7528 ",(0,n.jsx)(l.code,{children:"headless: false"})," \u4f5c\u70ba\u555f\u52d5\u9078\u9805\u3002"]}),"\n",(0,n.jsxs)(l.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(l.code,{children:"slowMo"})," \u9078\u9805\u4f86\u6e1b\u6162\u57f7\u884c\u901f\u5ea6\uff08\u6bcf\u6b21\u64cd\u4f5c N \u6beb\u79d2\uff09\uff0c\u4e26\u5728\u5075\u932f\u6642\u8ddf\u96a8\u3002"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-csharp",children:"// Chromium, Firefox, or WebKit\nawait using var browser = await playwright.Chromium.LaunchAsync(new()\n{\n    Headless = false,\n    SlowMo = 100\n});\n"})})]})}function g(e={}){const{wrapper:l}={...(0,r.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}}}]);