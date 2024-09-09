"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6053],{4421:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var n=t(4848),i=t(8453);t(4235),t(8328),t(3078);const a={id:"trace-viewer-intro",title:"\u8ffd\u8e64\u6aa2\u8996\u5668"},s=void 0,c={id:"trace-viewer-intro",title:"\u8ffd\u8e64\u6aa2\u8996\u5668",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/trace-viewer-intro.mdx",sourceDirName:".",slug:"/trace-viewer-intro",permalink:"/java/docs/trace-viewer-intro",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"trace-viewer-intro",title:"\u8ffd\u8e64\u6aa2\u8996\u5668"},sidebar:"docs",previous:{title:"\u57f7\u884c\u548c\u5075\u932f\u6e2c\u8a66",permalink:"/java/docs/running-tests"},next:{title:"\u8a2d\u5b9a CI",permalink:"/java/docs/ci-intro"}},l={},o=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u9304\u88fd\u8ffd\u8e64",id:"\u9304\u88fd\u8ffd\u8e64",level:2},{value:"\u958b\u555f\u8ffd\u8e64",id:"\u958b\u555f\u8ffd\u8e64",level:2},{value:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",h6:"h6",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,n.jsx)(r.p,{children:"Playwright Trace Viewer \u662f\u4e00\u500b GUI \u5de5\u5177\uff0c\u8b93\u4f60\u63a2\u7d22\u5df2\u8a18\u9304\u7684 Playwright Traces \u6e2c\u8a66\uff0c\u9019\u610f\u5473\u8457\u4f60\u53ef\u4ee5\u5728\u6e2c\u8a66\u7684\u6bcf\u500b\u52d5\u4f5c\u4e2d\u524d\u5f8c\u79fb\u52d5\uff0c\u4e26\u76f4\u89c0\u5730\u770b\u5230\u6bcf\u500b\u52d5\u4f5c\u671f\u9593\u767c\u751f\u7684\u60c5\u6cc1\u3002"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"\u4f60\u5c07\u5b78\u5230"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u5982\u4f55\u8a18\u9304\u8ffd\u8e64"}),"\n",(0,n.jsx)(r.li,{children:"\u5982\u4f55\u6253\u958b\u8ffd\u8e64\u6aa2\u8996\u5668"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"\u9304\u88fd\u8ffd\u8e64",children:"\u9304\u88fd\u8ffd\u8e64"}),"\n",(0,n.jsxs)(r.p,{children:["\u8ffd\u8e64\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(r.a,{href:"/java/docs/api/class-browsercontext#browser-context-tracing",children:"BrowserContext.tracing()"})," API \u9304\u88fd\u5982\u4e0b:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'Browser browser = browserType.launch();\nBrowserContext context = browser.newContext();\n\n// Start tracing before creating / navigating a page.\ncontext.tracing().start(new Tracing.StartOptions()\n  .setScreenshots(true)\n  .setSnapshots(true)\n  .setSources(true));\n\nPage page = context.newPage();\npage.navigate("https://playwright.dev");\n\n// Stop tracing and export it into a zip archive.\ncontext.tracing().stop(new Tracing.StopOptions()\n  .setPath(Paths.get("trace.zip")));\n'})}),"\n",(0,n.jsxs)(r.p,{children:["\u9019\u5c07\u8a18\u9304\u8ffd\u8e64\u4e26\u5c07\u5176\u653e\u5165\u540d\u70ba ",(0,n.jsx)(r.code,{children:"trace.zip"})," \u7684\u6a94\u6848\u4e2d\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u958b\u555f\u8ffd\u8e64",children:"\u958b\u555f\u8ffd\u8e64"}),"\n",(0,n.jsxs)(r.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 Playwright CLI \u6216\u5728\u700f\u89bd\u5668\u4e2d\u6253\u958b\u4fdd\u5b58\u7684\u8ffd\u8e64\u6a94\u6848\uff08",(0,n.jsx)(r.a,{href:"https://trace.playwright.dev",children:(0,n.jsx)(r.code,{children:"trace.playwright.dev"})}),"\uff09\u3002\u78ba\u4fdd\u6dfb\u52a0\u8ffd\u8e64 zip \u6a94\u6848\u6240\u5728\u7684\u5b8c\u6574\u8def\u5f91\u3002\u6253\u958b\u5f8c\uff0c\u4f60\u53ef\u4ee5\u9ede\u64ca\u6bcf\u500b\u64cd\u4f5c\u6216\u4f7f\u7528\u6642\u9593\u8ef8\u4f86\u67e5\u770b\u6bcf\u500b\u64cd\u4f5c\u524d\u5f8c\u7684\u9801\u9762\u72c0\u614b\u3002\u4f60\u9084\u53ef\u4ee5\u5728\u6e2c\u8a66\u7684\u6bcf\u4e00\u6b65\u4e2d\u6aa2\u67e5\u65e5\u8a8c\u3001\u4f86\u6e90\u548c\u7db2\u8def\u3002\u8ffd\u8e64\u6aa2\u8996\u5668\u6703\u5efa\u7acb\u4e00\u500b DOM \u5feb\u7167\uff0c\u9019\u6a23\u4f60\u53ef\u4ee5\u5b8c\u5168\u4e92\u52d5\uff0c\u6253\u958b\u958b\u767c\u8005\u5de5\u5177\u7b49\u3002"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:'mvn exec:java -e -D exec.mainClass=com.microsoft.playwright.CLI -D exec.args="show-trace trace.zip"\n'})}),"\n",(0,n.jsx)(r.h6,{id:""}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:"https://github.com/microsoft/playwright/assets/13063165/10fe3585-8401-4051-b1c2-b2e92ac4c274",alt:"playwright trace viewer"})}),"\n",(0,n.jsxs)(r.p,{children:["\u8981\u4e86\u89e3\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u67e5\u770b\u6211\u5011\u7684",(0,n.jsx)(r.a,{href:"/java/docs/trace-viewer",children:"Trace Viewer"}),"\u8a73\u7d30\u6307\u5357\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",children:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/java/docs/ci-intro",children:"\u5728 CI \u4e0a\u4f7f\u7528 GitHub Actions \u57f7\u884c\u6e2c\u8a66"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/java/docs/trace-viewer",children:"\u4e86\u89e3\u66f4\u591a\u95dc\u65bc Trace Viewer \u7684\u8cc7\u8a0a"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);