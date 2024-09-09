"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6053],{4421:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var t=r(4848),i=r(8453),s=r(4235),c=r(8328);r(3078);const a={id:"trace-viewer-intro",title:"\u8ffd\u8e64\u6aa2\u8996\u5668"},l=void 0,o={id:"trace-viewer-intro",title:"\u8ffd\u8e64\u6aa2\u8996\u5668",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/trace-viewer-intro.mdx",sourceDirName:".",slug:"/trace-viewer-intro",permalink:"/python/docs/trace-viewer-intro",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"trace-viewer-intro",title:"\u8ffd\u8e64\u6aa2\u8996\u5668"},sidebar:"docs",previous:{title:"\u57f7\u884c\u548c\u5075\u932f\u6e2c\u8a66",permalink:"/python/docs/running-tests"},next:{title:"\u8a2d\u5b9a CI",permalink:"/python/docs/ci-intro"}},d={},h=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u9304\u88fd\u8ffd\u8e64",id:"\u9304\u88fd\u8ffd\u8e64",level:2},{value:"\u958b\u555f\u8ffd\u8e64",id:"\u958b\u555f\u8ffd\u8e64",level:2},{value:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h6:"h6",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,t.jsx)(n.p,{children:"Playwright Trace Viewer \u662f\u4e00\u500b GUI \u5de5\u5177\uff0c\u8b93\u4f60\u63a2\u7d22\u5df2\u8a18\u9304\u7684 Playwright Traces \u6e2c\u8a66\uff0c\u9019\u610f\u5473\u8457\u4f60\u53ef\u4ee5\u5728\u6e2c\u8a66\u7684\u6bcf\u500b\u52d5\u4f5c\u4e2d\u524d\u5f8c\u79fb\u52d5\uff0c\u4e26\u76f4\u89c0\u5730\u770b\u5230\u6bcf\u500b\u52d5\u4f5c\u671f\u9593\u767c\u751f\u7684\u60c5\u6cc1\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u4f60\u5c07\u5b78\u5230"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5982\u4f55\u8a18\u9304\u8ffd\u8e64"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u4f55\u6253\u958b\u8ffd\u8e64\u6aa2\u8996\u5668"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9304\u88fd\u8ffd\u8e64",children:"\u9304\u88fd\u8ffd\u8e64"}),"\n",(0,t.jsxs)(n.p,{children:["\u57f7\u884c\u6e2c\u8a66\u4e26\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"--tracing"})," \u65d7\u6a19\u53ef\u4ee5\u8a18\u9304\u8ffd\u8e64\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pytest --tracing on\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u9078\u9805\u7528\u65bc\u8ffd\u8e64\u662f:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"on"}),": \u8a18\u9304\u6bcf\u500b\u6e2c\u8a66\u7684\u8ffd\u8e64"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"off"}),": \u4e0d\u8a18\u9304\u8ffd\u8e64\u3002(\u9810\u8a2d)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"retain-on-failure"}),": \u8a18\u9304\u6bcf\u500b\u6e2c\u8a66\u7684\u8ffd\u8e64\uff0c\u4f46\u79fb\u9664\u6240\u6709\u6210\u529f\u6e2c\u8a66\u57f7\u884c\u7684\u8ffd\u8e64\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u9019\u5c07\u8a18\u9304\u8ffd\u8e64\u4e26\u5c07\u5176\u653e\u5165\u540d\u70ba ",(0,t.jsx)(n.code,{children:"trace.zip"})," \u7684\u6a94\u6848\u4e2d\uff0c\u4f4d\u65bc\u4f60\u7684 ",(0,t.jsx)(n.code,{children:"test-results"})," \u76ee\u9304\u3002"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"\u5982\u679c\u4f60\u6c92\u6709\u4f7f\u7528 Pytest\uff0c\u9ede\u64ca\u9019\u88e1\u5b78\u7fd2\u5982\u4f55\u8a18\u9304\u8ffd\u8e64\u3002"}),(0,t.jsxs)(s.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,t.jsx)(c.A,{value:"sync",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'browser = chromium.launch()\ncontext = browser.new_context()\n\n# Start tracing before creating / navigating a page.\ncontext.tracing.start(screenshots=True, snapshots=True, sources=True)\n\npage = context.new_page()\npage.goto("https://playwright.dev")\n\n# Stop tracing and export it into a zip archive.\ncontext.tracing.stop(path = "trace.zip")\n'})})}),(0,t.jsx)(c.A,{value:"async",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'browser = await chromium.launch()\ncontext = await browser.new_context()\n\n# Start tracing before creating / navigating a page.\nawait context.tracing.start(screenshots=True, snapshots=True, sources=True)\n\npage = await context.new_page()\nawait page.goto("https://playwright.dev")\n\n# Stop tracing and export it into a zip archive.\nawait context.tracing.stop(path = "trace.zip")\n'})})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u958b\u555f\u8ffd\u8e64",children:"\u958b\u555f\u8ffd\u8e64"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 Playwright CLI \u6216\u5728\u700f\u89bd\u5668\u4e2d\u6253\u958b\u4fdd\u5b58\u7684\u8ffd\u8e64\u6a94\u6848\uff08",(0,t.jsx)(n.a,{href:"https://trace.playwright.dev",children:(0,t.jsx)(n.code,{children:"trace.playwright.dev"})}),"\uff09\u3002\u78ba\u4fdd\u6dfb\u52a0\u8ffd\u8e64 zip \u6a94\u6848\u6240\u5728\u7684\u5b8c\u6574\u8def\u5f91\u3002\u6253\u958b\u5f8c\uff0c\u4f60\u53ef\u4ee5\u9ede\u64ca\u6bcf\u500b\u64cd\u4f5c\u6216\u4f7f\u7528\u6642\u9593\u8ef8\u4f86\u67e5\u770b\u6bcf\u500b\u64cd\u4f5c\u524d\u5f8c\u7684\u9801\u9762\u72c0\u614b\u3002\u4f60\u9084\u53ef\u4ee5\u5728\u6e2c\u8a66\u7684\u6bcf\u4e00\u6b65\u4e2d\u6aa2\u67e5\u65e5\u8a8c\u3001\u4f86\u6e90\u548c\u7db2\u8def\u3002\u8ffd\u8e64\u6aa2\u8996\u5668\u6703\u5efa\u7acb\u4e00\u500b DOM \u5feb\u7167\uff0c\u9019\u6a23\u4f60\u53ef\u4ee5\u5b8c\u5168\u4e92\u52d5\uff0c\u6253\u958b\u958b\u767c\u8005\u5de5\u5177\u7b49\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"playwright show-trace trace.zip\n"})}),"\n",(0,t.jsx)(n.h6,{id:""}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/microsoft/playwright/assets/13063165/10fe3585-8401-4051-b1c2-b2e92ac4c274",alt:"playwright trace viewer"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8981\u4e86\u89e3\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u67e5\u770b\u6211\u5011\u7684",(0,t.jsx)(n.a,{href:"/python/docs/trace-viewer",children:"Trace Viewer"}),"\u8a73\u7d30\u6307\u5357\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",children:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/python/docs/ci-intro",children:"\u5728 CI \u4e0a\u4f7f\u7528 GitHub Actions \u57f7\u884c\u6e2c\u8a66"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/python/docs/trace-viewer",children:"\u4e86\u89e3\u66f4\u591a\u95dc\u65bc Trace Viewer \u7684\u8cc7\u8a0a"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);