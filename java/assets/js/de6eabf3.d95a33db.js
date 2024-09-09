"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5645],{761:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(4848),s=t(8453);t(4235),t(8328),t(3078);const i={id:"events",title:"\u4e8b\u4ef6"},r=void 0,l={id:"events",title:"\u4e8b\u4ef6",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/events.mdx",sourceDirName:".",slug:"/events",permalink:"/java/docs/events",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"events",title:"\u4e8b\u4ef6"},sidebar:"docs",previous:{title:"\u57f7\u884c JavaScript",permalink:"/java/docs/evaluating"},next:{title:"\u5ef6\u5c55\u6027",permalink:"/java/docs/extensibility"}},p={},d=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u7b49\u5f85\u4e8b\u4ef6",id:"\u7b49\u5f85\u4e8b\u4ef6",level:2},{value:"\u6dfb\u52a0/\u79fb\u9664\u4e8b\u4ef6\u76e3\u807d\u5668",id:"\u6dfb\u52a0\u79fb\u9664\u4e8b\u4ef6\u76e3\u807d\u5668",level:2},{value:"\u6dfb\u52a0\u4e00\u6b21\u6027\u76e3\u807d\u5668",id:"\u6dfb\u52a0\u4e00\u6b21\u6027\u76e3\u807d\u5668",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,a.jsx)(n.p,{children:"Playwright \u5141\u8a31\u76e3\u807d\u7db2\u9801\u4e0a\u767c\u751f\u7684\u5404\u7a2e\u985e\u578b\u4e8b\u4ef6\uff0c\u4f8b\u5982\u7db2\u8def\u8acb\u6c42\u3001\u5b50\u9801\u9762\u7684\u5efa\u7acb\u3001\u5c08\u7528\u5de5\u4f5c\u8005\u7b49\u3002\u6709\u5e7e\u7a2e\u65b9\u5f0f\u53ef\u4ee5\u8a02\u95b1\u6b64\u985e\u4e8b\u4ef6\uff0c\u4f8b\u5982\u7b49\u5f85\u4e8b\u4ef6\u6216\u6dfb\u52a0\u6216\u79fb\u9664\u4e8b\u4ef6\u76e3\u807d\u5668\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u7b49\u5f85\u4e8b\u4ef6",children:"\u7b49\u5f85\u4e8b\u4ef6"}),"\n",(0,a.jsx)(n.p,{children:"\u5927\u591a\u6578\u60c5\u6cc1\u4e0b\uff0c\u8173\u672c\u9700\u8981\u7b49\u5f85\u7279\u5b9a\u4e8b\u4ef6\u767c\u751f\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5178\u578b\u7684\u4e8b\u4ef6\u7b49\u5f85\u6a21\u5f0f\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u7b49\u5f85\u5177\u6709\u6307\u5b9a url \u7684\u8acb\u6c42\uff0c\u4f7f\u7528 ",(0,a.jsx)(n.a,{href:"/java/docs/api/class-page#page-wait-for-request",children:"Page.waitForRequest()"}),"\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'// The callback lambda defines scope of the code that is expected to\n// trigger request.\nRequest request = page.waitForRequest("**/*logo*.png", () -> {\n  page.navigate("https://wikipedia.org");\n});\nSystem.out.println(request.url());\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u7b49\u5f85\u5f48\u51fa\u8996\u7a97:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'// The callback lambda defines scope of the code that is expected to\n// create popup window.\nPage popup = page.waitForPopup(() -> {\n  page.getByText("open the popup").click();\n});\npopup.navigate("https://wikipedia.org");\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u6dfb\u52a0\u79fb\u9664\u4e8b\u4ef6\u76e3\u807d\u5668",children:"\u6dfb\u52a0/\u79fb\u9664\u4e8b\u4ef6\u76e3\u807d\u5668"}),"\n",(0,a.jsx)(n.p,{children:"\u6709\u6642\uff0c\u4e8b\u4ef6\u6703\u96a8\u6a5f\u767c\u751f\uff0c\u8207\u5176\u7b49\u5f85\u5b83\u5011\uff0c\u4e0d\u5982\u8655\u7406\u5b83\u5011\u3002Playwright \u652f\u63f4\u50b3\u7d71\u8a9e\u8a00\u6a5f\u5236\u4f86\u8a02\u95b1\u548c\u53d6\u6d88\u8a02\u95b1\u4e8b\u4ef6:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'page.onRequest(request -> System.out.println("Request sent: " + request.url()));\nConsumer<Request> listener = request -> System.out.println("Request finished: " + request.url());\npage.onRequestFinished(listener);\npage.navigate("https://wikipedia.org");\n\n// Remove previously added listener, each on* method has corresponding off*\npage.offRequestFinished(listener);\npage.navigate("https://www.openstreetmap.org/");\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u6dfb\u52a0\u4e00\u6b21\u6027\u76e3\u807d\u5668",children:"\u6dfb\u52a0\u4e00\u6b21\u6027\u76e3\u807d\u5668"}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u67d0\u500b\u4e8b\u4ef6\u9700\u8981\u8655\u7406\u4e00\u6b21\uff0c\u6709\u4e00\u500b\u65b9\u4fbf\u7684 API \u53ef\u4ee5\u4f7f\u7528:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'page.onceDialog(dialog -> dialog.accept("2021"));\npage.evaluate("prompt(\'Enter a number:\')");\n'})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}}}]);