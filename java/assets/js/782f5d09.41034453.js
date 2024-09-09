"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3563],{6947:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var t=c(4848),a=c(8453);c(4235),c(8328),c(3078),c(4562);const s={id:"codegen",title:"\u6e2c\u8a66\u7522\u751f\u5668"},r=void 0,i={id:"codegen",title:"\u6e2c\u8a66\u7522\u751f\u5668",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/codegen.mdx",sourceDirName:".",slug:"/codegen",permalink:"/java/docs/codegen",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"codegen",title:"\u6e2c\u8a66\u7522\u751f\u5668"},sidebar:"docs",previous:{title:"\u9801\u9762",permalink:"/java/docs/pages"},next:{title:"\u8ffd\u8e64\u6aa2\u8996\u5668",permalink:"/java/docs/trace-viewer"}},l={},o=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u4f7f\u7528 Playwright Inspector \u751f\u6210\u6e2c\u8a66",id:"\u4f7f\u7528-playwright-inspector-\u751f\u6210\u6e2c\u8a66",level:2},{value:"\u57f7\u884c\u7a0b\u5f0f\u78bc\u7522\u751f\u5668",id:"\u57f7\u884c\u7a0b\u5f0f\u78bc\u7522\u751f\u5668",level:3},{value:"\u9304\u88fd\u6e2c\u8a66",id:"\u9304\u88fd\u6e2c\u8a66",level:3},{value:"\u7522\u751f\u5b9a\u4f4d\u5668",id:"\u7522\u751f\u5b9a\u4f4d\u5668",level:3},{value:"\u6a21\u64ec",id:"\u6a21\u64ec",level:2},{value:"\u6a21\u64ec viewport \u5927\u5c0f",id:"\u6a21\u64ec-viewport-\u5927\u5c0f",level:3},{value:"\u6a21\u64ec\u88dd\u7f6e",id:"\u6a21\u64ec\u88dd\u7f6e",level:3},{value:"\u6a21\u64ec\u8272\u5f69\u65b9\u6848",id:"\u6a21\u64ec\u8272\u5f69\u65b9\u6848",level:3},{value:"\u6a21\u64ec\u5730\u7406\u4f4d\u7f6e\u3001\u8a9e\u8a00\u548c\u6642\u5340",id:"\u6a21\u64ec\u5730\u7406\u4f4d\u7f6e\u8a9e\u8a00\u548c\u6642\u5340",level:3},{value:"\u4fdd\u7559\u9a57\u8b49\u72c0\u614b",id:"\u4fdd\u7559\u9a57\u8b49\u72c0\u614b",level:3},{value:"\u767b\u5165",id:"\u767b\u5165",level:4},{value:"\u8f09\u5165\u5df2\u9a57\u8b49\u72c0\u614b",id:"\u8f09\u5165\u5df2\u9a57\u8b49\u72c0\u614b",level:4},{value:"\u8a18\u9304\u4f7f\u7528\u81ea\u8a02\u8a2d\u5b9a",id:"\u8a18\u9304\u4f7f\u7528\u81ea\u8a02\u8a2d\u5b9a",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h6:"h6",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,t.jsxs)(n.p,{children:["Playwright \u5177\u6709\u5728\u700f\u89bd\u5668\u4e2d\u57f7\u884c\u64cd\u4f5c\u6642\u70ba\u4f60\u751f\u6210\u6e2c\u8a66\u7684\u80fd\u529b\uff0c\u9019\u662f\u4e00\u500b\u5feb\u901f\u958b\u59cb\u6e2c\u8a66\u7684\u597d\u65b9\u6cd5\u3002Playwright \u6703\u67e5\u770b\u4f60\u7684\u9801\u9762\u4e26\u627e\u51fa\u6700\u4f73\u5b9a\u4f4d\u5668\uff0c\u512a\u5148\u8003\u616e",(0,t.jsx)(n.a,{href:"/java/docs/locators",children:"\u89d2\u8272\u3001\u6587\u672c\u548c\u6e2c\u8a66 ID \u5b9a\u4f4d\u5668"}),"\u3002\u5982\u679c\u751f\u6210\u5668\u767c\u73fe\u591a\u500b\u5143\u7d20\u5339\u914d\u5b9a\u4f4d\u5668\uff0c\u5b83\u5c07\u6539\u9032\u5b9a\u4f4d\u5668\uff0c\u4f7f\u5176\u5177\u6709\u552f\u4e00\u8b58\u5225\u76ee\u6a19\u5143\u7d20\u7684\u5f48\u6027\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528-playwright-inspector-\u751f\u6210\u6e2c\u8a66",children:"\u4f7f\u7528 Playwright Inspector \u751f\u6210\u6e2c\u8a66"}),"\n",(0,t.jsxs)(n.p,{children:["\u7576\u57f7\u884c ",(0,t.jsx)(n.code,{children:"codegen"})," \u547d\u4ee4\u6642\uff0c\u6703\u6253\u958b\u5169\u500b\u8996\u7a97\uff0c\u4e00\u500b\u662f\u8207\u60a8\u5e0c\u671b\u6e2c\u8a66\u7684\u7db2\u7ad9\u4e92\u52d5\u7684\u700f\u89bd\u5668\u8996\u7a97\uff0c\u53e6\u4e00\u500b\u662f Playwright Inspector \u8996\u7a97\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u8a18\u9304\u60a8\u7684\u6e2c\u8a66\uff0c\u7136\u5f8c\u5c07\u5b83\u5011\u8907\u88fd\u5230\u60a8\u7684\u7de8\u8f2f\u5668\u4e2d\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u57f7\u884c\u7a0b\u5f0f\u78bc\u7522\u751f\u5668",children:"\u57f7\u884c\u7a0b\u5f0f\u78bc\u7522\u751f\u5668"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"codegen"})," \u547d\u4ee4\u4f86\u57f7\u884c\u6e2c\u8a66\u7522\u751f\u5668\uff0c\u5f8c\u9762\u8ddf\u8457\u4f60\u60f3\u8981\u751f\u6210\u6e2c\u8a66\u7684\u7db2\u7ad9 URL\u3002URL \u662f\u53ef\u9078\u7684\uff0c\u4f60\u53ef\u4ee5\u96a8\u6642\u5728\u6c92\u6709\u5b83\u7684\u60c5\u6cc1\u4e0b\u57f7\u884c\u547d\u4ee4\uff0c\u7136\u5f8c\u76f4\u63a5\u5c07 URL \u6dfb\u52a0\u5230\u700f\u89bd\u5668\u7a97\u53e3\u4e2d\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'mvn exec:java -e -D exec.mainClass=com.microsoft.playwright.CLI -D exec.args="codegen demo.playwright.dev/todomvc"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u9304\u88fd\u6e2c\u8a66",children:"\u9304\u88fd\u6e2c\u8a66"}),"\n",(0,t.jsxs)(n.p,{children:["\u57f7\u884c ",(0,t.jsx)(n.code,{children:"codegen"})," \u6307\u4ee4\u4e26\u5728\u700f\u89bd\u5668\u8996\u7a97\u4e2d\u57f7\u884c\u64cd\u4f5c\u3002Playwright \u5c07\u70ba\u4f7f\u7528\u8005\u4e92\u52d5\u751f\u6210\u7a0b\u5f0f\u78bc\uff0c\u60a8\u53ef\u4ee5\u5728 Playwright Inspector \u8996\u7a97\u4e2d\u770b\u5230\u9019\u4e9b\u7a0b\u5f0f\u78bc\u3002\u4e00\u65e6\u60a8\u5b8c\u6210\u9304\u88fd\u6e2c\u8a66\uff0c\u505c\u6b62\u9304\u88fd\u4e26\u6309\u4e0b ",(0,t.jsx)(n.strong,{children:"copy"})," \u6309\u9215\u5c07\u751f\u6210\u7684\u6e2c\u8a66\u8907\u88fd\u5230\u60a8\u7684\u7de8\u8f2f\u5668\u4e2d\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u6e2c\u8a66\u7522\u751f\u5668\uff0c\u4f60\u53ef\u4ee5\u8a18\u9304:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u50cf\u9ede\u64ca\u6216\u586b\u5beb\u9019\u6a23\u7684\u64cd\u4f5c\uff0c\u53ea\u9700\u8207\u9801\u9762\u4e92\u52d5"}),"\n",(0,t.jsxs)(n.li,{children:["\u900f\u904e\u9ede\u64ca\u5de5\u5177\u5217\u4e0a\u7684\u5176\u4e2d\u4e00\u500b\u5716\u6a19\uff0c\u7136\u5f8c\u9ede\u64ca\u9801\u9762\u4e0a\u7684\u4e00\u500b\u5143\u7d20\u4f86\u9032\u884c\u65b7\u8a00\u3002\u4f60\u53ef\u4ee5\u9078\u64c7:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"'assert visibility'"})," \u4f86\u65b7\u8a00\u4e00\u500b\u5143\u7d20\u662f\u53ef\u898b\u7684"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"'assert text'"})," \u4f86\u65b7\u8a00\u4e00\u500b\u5143\u7d20\u5305\u542b\u7279\u5b9a\u7684\u6587\u672c"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"'assert value'"})," \u4f86\u65b7\u8a00\u4e00\u500b\u5143\u7d20\u5177\u6709\u7279\u5b9a\u7684\u503c"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h6,{id:""}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/microsoft/playwright/assets/13063165/ec9c4071-4af8-4ae7-8b36-aebcc29bdbbb",alt:"recording a test"})}),"\n",(0,t.jsx)(n.h6,{id:"-1"}),"\n",(0,t.jsxs)(n.p,{children:["\u7576\u4f60\u5b8c\u6210\u8207\u9801\u9762\u4e92\u52d5\u5f8c\uff0c\u6309\u4e0b ",(0,t.jsx)(n.strong,{children:"record"})," \u6309\u9215\u505c\u6b62\u9304\u88fd\uff0c\u4e26\u4f7f\u7528 ",(0,t.jsx)(n.strong,{children:"copy"})," \u6309\u9215\u5c07\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u8907\u88fd\u5230\u4f60\u7684\u7de8\u8f2f\u5668\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.strong,{children:"clear"})," \u6309\u9215\u4f86\u6e05\u9664\u7a0b\u5f0f\u78bc\u4ee5\u91cd\u65b0\u958b\u59cb\u9304\u88fd\u3002\u5b8c\u6210\u5f8c\uff0c\u95dc\u9589 Playwright \u6aa2\u67e5\u5668\u8996\u7a97\u6216\u505c\u6b62\u7d42\u7aef\u6a5f\u547d\u4ee4\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u7522\u751f\u5b9a\u4f4d\u5668",children:"\u7522\u751f\u5b9a\u4f4d\u5668"}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528\u6e2c\u8a66\u7522\u751f\u5668\u751f\u6210 ",(0,t.jsx)(n.a,{href:"/java/docs/locators",children:"\u5b9a\u4f4d\u5668"}),"\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u6309\u4e0b ",(0,t.jsx)(n.code,{children:"'Record'"})," \u6309\u9215\u4ee5\u505c\u6b62\u9304\u88fd\uff0c\u7136\u5f8c ",(0,t.jsx)(n.code,{children:"'Pick Locator'"})," \u6309\u9215\u6703\u51fa\u73fe\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u9ede\u64ca ",(0,t.jsx)(n.code,{children:"'Pick Locator'"})," \u6309\u9215\uff0c\u7136\u5f8c\u5c07\u6ed1\u9f20\u61f8\u505c\u5728\u700f\u89bd\u5668\u8996\u7a97\u4e2d\u7684\u5143\u7d20\u4e0a\uff0c\u4ee5\u67e5\u770b\u6bcf\u500b\u5143\u7d20\u4e0b\u65b9\u7a81\u986f\u7684\u5b9a\u4f4d\u5668\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u8981\u9078\u64c7\u5b9a\u4f4d\u5668\uff0c\u8acb\u9ede\u64ca\u60a8\u60f3\u5b9a\u4f4d\u7684\u5143\u7d20\uff0c\u8a72\u5b9a\u4f4d\u5668\u7684\u7a0b\u5f0f\u78bc\u5c07\u51fa\u73fe\u5728 Pick Locator \u6309\u9215\u65c1\u908a\u7684\u6b04\u4f4d\u4e2d\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u60a8\u53ef\u4ee5\u5728\u6b64\u6b04\u4f4d\u4e2d\u7de8\u8f2f\u5b9a\u4f4d\u5668\u4ee5\u9032\u884c\u5fae\u8abf\uff0c\u6216\u4f7f\u7528\u8907\u88fd\u6309\u9215\u5c07\u5176\u8907\u88fd\u4e26\u8cbc\u5230\u60a8\u7684\u7a0b\u5f0f\u78bc\u4e2d\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h6,{id:"-2"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/microsoft/playwright/assets/13063165/733b48fd-5edf-4150-93f0-018adc52b6ff",alt:"picking a locator"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6a21\u64ec",children:"\u6a21\u64ec"}),"\n",(0,t.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528\u6e2c\u8a66\u7522\u751f\u5668\u4f86\u4f7f\u7528\u6a21\u64ec\u751f\u6210\u6e2c\u8a66\uff0c\u4ee5\u4fbf\u70ba\u7279\u5b9a\u7684\u8996\u53e3\u3001\u8a2d\u5099\u3001\u914d\u8272\u65b9\u6848\u751f\u6210\u6e2c\u8a66\uff0c\u4e26\u6a21\u64ec\u5730\u7406\u4f4d\u7f6e\u3001\u8a9e\u8a00\u6216\u6642\u5340\u3002\u6e2c\u8a66\u7522\u751f\u5668\u9084\u53ef\u4ee5\u5728\u4fdd\u7559\u8a8d\u8b49\u72c0\u614b\u7684\u540c\u6642\u751f\u6210\u6e2c\u8a66\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u6a21\u64ec-viewport-\u5927\u5c0f",children:"\u6a21\u64ec viewport \u5927\u5c0f"}),"\n",(0,t.jsxs)(n.p,{children:["Playwright \u958b\u555f\u4e00\u500b\u700f\u89bd\u5668\u8996\u7a97\uff0c\u5176\u8996\u53e3\u8a2d\u5b9a\u70ba\u7279\u5b9a\u7684\u5bec\u5ea6\u548c\u9ad8\u5ea6\uff0c\u4e26\u4e14\u5728\u6e2c\u8a66\u9700\u8981\u5728\u76f8\u540c\u689d\u4ef6\u4e0b\u57f7\u884c\u6642\u4e0d\u5177\u97ff\u61c9\u6027\u3002\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"--viewport"})," \u9078\u9805\u4f86\u7522\u751f\u5177\u6709\u4e0d\u540c\u8996\u53e3\u5927\u5c0f\u7684\u6e2c\u8a66\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'mvn exec:java -e -D exec.mainClass=com.microsoft.playwright.CLI -D exec.args="codegen --viewport-size=800,600 playwright.dev"\n'})}),"\n",(0,t.jsx)(n.h6,{id:"-3"}),"\n",(0,t.jsx)("img",{width:"870",alt:"\u7a0b\u5f0f\u78bc\u7522\u751f\u5668\u70ba playwright.dev \u7db2\u7ad9\u751f\u6210\u6e2c\u8a66\u7a0b\u5f0f\u78bc\uff0c\u4f7f\u7528\u7279\u5b9a\u7684\u8996\u7a97 java",src:"https://user-images.githubusercontent.com/13063165/220402748-12a856c2-b3ff-4155-b82d-64dad9c46886.png"}),"\n",(0,t.jsx)(n.h3,{id:"\u6a21\u64ec\u88dd\u7f6e",children:"\u6a21\u64ec\u88dd\u7f6e"}),"\n",(0,t.jsxs)(n.p,{children:["\u8a18\u9304\u8173\u672c\u548c\u6e2c\u8a66\uff0c\u540c\u6642\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"--device"})," \u9078\u9805\u6a21\u64ec\u79fb\u52d5\u88dd\u7f6e\uff0c\u8a72\u9078\u9805\u8a2d\u5b9a\u4e86\u8996\u7a97\u5927\u5c0f\u548c\u4f7f\u7528\u8005\u4ee3\u7406\u7b49\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mvn exec:java -e -D exec.mainClass=com.microsoft.playwright.CLI -D exec.args='codegen --device=\"iPhone 13\" playwright.dev'\n"})}),"\n",(0,t.jsx)(n.h6,{id:"-4"}),"\n",(0,t.jsx)("img",{width:"1300",alt:"Codegen \u7522\u751f\u7a0b\u5f0f\u78bc\u4ee5\u6e2c\u8a66\u6a21\u64ec iPhone 13 \u7684 playwright.dev \u7db2\u7ad9",src:"https://user-images.githubusercontent.com/13063165/220922591-241e6a59-a920-4cb1-97a2-d46c33ea17c5.png"}),"\n",(0,t.jsx)(n.h3,{id:"\u6a21\u64ec\u8272\u5f69\u65b9\u6848",children:"\u6a21\u64ec\u8272\u5f69\u65b9\u6848"}),"\n",(0,t.jsxs)(n.p,{children:["\u8a18\u9304\u8173\u672c\u548c\u6e2c\u8a66\uff0c\u540c\u6642\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"--color-scheme"})," \u9078\u9805\u6a21\u64ec\u914d\u8272\u65b9\u6848\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'mvn exec:java -e -D exec.mainClass=com.microsoft.playwright.CLI -D exec.args="codegen --color-scheme=dark playwright.dev"\n'})}),"\n",(0,t.jsx)(n.h6,{id:"-5"}),"\n",(0,t.jsx)("img",{width:"1394",alt:"\u7a0b\u5f0f\u78bc\u7522\u751f\u5668\u70ba playwright.dev \u7db2\u7ad9\u5728\u6df1\u8272\u6a21\u5f0f\u4e0b\u751f\u6210\u6e2c\u8a66\u7a0b\u5f0f\u78bc java",src:"https://user-images.githubusercontent.com/13063165/220930514-3b105fab-c87e-4f58-affa-d11d570122a8.png"}),"\n",(0,t.jsx)(n.h3,{id:"\u6a21\u64ec\u5730\u7406\u4f4d\u7f6e\u8a9e\u8a00\u548c\u6642\u5340",children:"\u6a21\u64ec\u5730\u7406\u4f4d\u7f6e\u3001\u8a9e\u8a00\u548c\u6642\u5340"}),"\n",(0,t.jsxs)(n.p,{children:["\u8a18\u9304\u8173\u672c\u548c\u6e2c\u8a66\uff0c\u540c\u6642\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"--timezone"}),"\u3001",(0,t.jsx)(n.code,{children:"--geolocation"})," \u548c ",(0,t.jsx)(n.code,{children:"--lang"})," \u9078\u9805\u4f86\u6a21\u64ec\u6642\u5340\u3001\u8a9e\u8a00\u548c\u4f4d\u7f6e\u3002\u9801\u9762\u6253\u958b\u5f8c:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u63a5\u53d7 cookies"}),"\n",(0,t.jsx)(n.li,{children:"\u5728\u53f3\u4e0a\u89d2\uff0c\u9ede\u64ca\u5b9a\u4f4d\u6211\u6309\u9215\u4ee5\u67e5\u770b\u5730\u7406\u4f4d\u7f6e\u7684\u4f5c\u7528\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'mvn exec:java -e -D exec.mainClass=com.microsoft.playwright.CLI -D exec.args=\'codegen --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" bing.com/maps\'\n'})}),"\n",(0,t.jsx)(n.h6,{id:"-6"}),"\n",(0,t.jsx)("img",{width:"1394",alt:"\u7a0b\u5f0f\u78bc\u7522\u751f\u5668\u7522\u751f\u6e2c\u8a66\u7a0b\u5f0f\u78bc\uff0c\u986f\u793a\u6642\u5340\u3001\u5730\u7406\u4f4d\u7f6e\u70ba\u7f85\u99ac\uff0c\u7fa9\u5927\u5229\u548c\u7fa9\u5927\u5229\u8a9e java",src:"https://user-images.githubusercontent.com/13063165/220932268-9012163f-7673-4072-aa91-13b3c8f57799.png"}),"\n",(0,t.jsx)(n.h3,{id:"\u4fdd\u7559\u9a57\u8b49\u72c0\u614b",children:"\u4fdd\u7559\u9a57\u8b49\u72c0\u614b"}),"\n",(0,t.jsxs)(n.p,{children:["\u57f7\u884c ",(0,t.jsx)(n.code,{children:"codegen"})," \u4e26\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"--save-storage"})," \u4f86\u5728\u5de5\u4f5c\u968e\u6bb5\u7d50\u675f\u6642\u4fdd\u5b58 ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",children:"cookies"})," \u548c ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",children:"localStorage"}),"\u3002\u9019\u5c0d\u65bc\u5206\u5225\u8a18\u9304\u8eab\u4efd\u9a57\u8b49\u6b65\u9a5f\u4e26\u5728\u7a0d\u5f8c\u8a18\u9304\u66f4\u591a\u6e2c\u8a66\u6642\u91cd\u7528\u975e\u5e38\u6709\u7528\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'mvn exec:java -e -D exec.mainClass=com.microsoft.playwright.CLI -D exec.args="codegen github.com/microsoft/playwright  --save-storage=auth.json"\n'})}),"\n",(0,t.jsx)(n.h6,{id:"-7"}),"\n",(0,t.jsx)("img",{width:"1394",alt:"github page before logging in java",src:"https://user-images.githubusercontent.com/13063165/220929236-08129e16-82a9-46a3-9f1c-3e59619c6289.png"}),"\n",(0,t.jsx)(n.h4,{id:"\u767b\u5165",children:"\u767b\u5165"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u57f7\u884c\u8eab\u4efd\u9a57\u8b49\u4e26\u95dc\u9589\u700f\u89bd\u5668\u5f8c\uff0c",(0,t.jsx)(n.code,{children:"auth.json"})," \u5c07\u5305\u542b\u5132\u5b58\u72c0\u614b\uff0c\u60a8\u53ef\u4ee5\u5728\u6e2c\u8a66\u4e2d\u91cd\u8907\u4f7f\u7528\u3002"]}),"\n",(0,t.jsx)("img",{width:"1394",alt:"login to GitHub screen",src:"https://user-images.githubusercontent.com/13063165/220561688-04b2b984-4ba6-4446-8b0a-8058876e2a02.png"}),"\n",(0,t.jsxs)(n.p,{children:["\u78ba\u4fdd\u4f60\u53ea\u5728\u672c\u5730\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"auth.json"}),"\uff0c\u56e0\u70ba\u5b83\u5305\u542b\u654f\u611f\u8cc7\u8a0a\u3002\u5c07\u5176\u6dfb\u52a0\u5230 ",(0,t.jsx)(n.code,{children:".gitignore"})," \u6216\u5728\u751f\u6210\u6e2c\u8a66\u5b8c\u6210\u5f8c\u522a\u9664\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u8f09\u5165\u5df2\u9a57\u8b49\u72c0\u614b",children:"\u8f09\u5165\u5df2\u9a57\u8b49\u72c0\u614b"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"--load-storage"})," \u4f86\u6d88\u8017 ",(0,t.jsx)(n.code,{children:"auth.json"})," \u4e2d\u5148\u524d\u8f09\u5165\u7684\u5b58\u5132\u3002\u9019\u6a23\uff0c\u6240\u6709 ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",children:"cookies"})," \u548c ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",children:"localStorage"})," \u90fd\u6703\u88ab\u6062\u5fa9\uff0c\u4f7f\u5927\u591a\u6578\u7db2\u9801\u61c9\u7528\u7a0b\u5f0f\u9032\u5165\u5df2\u9a57\u8b49\u72c0\u614b\uff0c\u7121\u9700\u518d\u6b21\u767b\u5165\u3002\u9019\u610f\u5473\u8457\u4f60\u53ef\u4ee5\u5f9e\u5df2\u767b\u5165\u72c0\u614b\u7e7c\u7e8c\u751f\u6210\u6e2c\u8a66\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'mvn exec:java -e -D exec.mainClass=com.microsoft.playwright.CLI -D exec.args="codegen --load-storage=auth.json github.com/microsoft/playwright"\n'})}),"\n",(0,t.jsx)(n.h6,{id:"-8"}),"\n",(0,t.jsx)("img",{width:"1394",alt:"github \u767b\u5165\u986f\u793a\u4f7f\u7528 load storage java",src:"https://user-images.githubusercontent.com/13063165/220928075-1e38347b-9d0d-4d9e-9a67-506c717893df.png"}),"\n",(0,t.jsx)(n.h2,{id:"\u8a18\u9304\u4f7f\u7528\u81ea\u8a02\u8a2d\u5b9a",children:"\u8a18\u9304\u4f7f\u7528\u81ea\u8a02\u8a2d\u5b9a"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u5728\u4e00\u4e9b\u975e\u6a19\u6e96\u8a2d\u5b9a\u4e2d\u4f7f\u7528\u7a0b\u5f0f\u78bc\u7522\u751f\u5668\uff08\u4f8b\u5982\uff0c\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"/java/docs/api/class-browsercontext#browser-context-route",children:"BrowserContext.route()"}),"\uff09\uff0c\u53ef\u4ee5\u547c\u53eb ",(0,t.jsx)(n.a,{href:"/java/docs/api/class-page#page-pause",children:"Page.pause()"}),"\uff0c\u9019\u5c07\u958b\u555f\u4e00\u500b\u5e36\u6709\u7a0b\u5f0f\u78bc\u7522\u751f\u5668\u63a7\u5236\u7684\u55ae\u7368\u7a97\u53e3\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      // Make sure to run headed.\n      Browser browser = chromium.launch(new BrowserType.LaunchOptions().setHeadless(false));\n      // Setup context however you like.\n      BrowserContext context = browser.newContext(/* pass any options */);\n      context.route("**/*", route -> route.resume());\n      // Pause the page, and start recording manually.\n      Page page = context.newPage();\n      page.pause();\n    }\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4562:(e,n,c)=>{c.d(n,{A:()=>l});var t=c(4848),a=c(6540),s=function(){return s=Object.assign||function(e){for(var n,c=1,t=arguments.length;c<t;c++)for(var a in n=arguments[c])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},s.apply(this,arguments)};var r=a.forwardRef((function(e,n){var c=a.useState(!1),t=c[0],r=c[1],i=a.useState(!1),l=i[0],o=i[1],d=encodeURIComponent(e.id),h="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,g=e.title,p=e.poster||"hqdefault",x="&".concat(e.params)||0,m=e.muted?"&mute=1":"",j=e.announce||"Watch",u=e.webp?"webp":"jpg",v=e.webp?"vi_webp":"vi",w=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(v,"/").concat(h,"/").concat(p,".").concat(u):"https://i.ytimg.com/".concat(v,"/").concat(d,"/").concat(p,".").concat(u)),b=e.noCookie;b=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var f=e.playlist?"".concat(b,"/embed/videoseries?autoplay=1").concat(m,"&list=").concat(d).concat(x):"".concat(b,"/embed/").concat(d,"?autoplay=1&state=1").concat(m).concat(x),y=e.activatedClass||"lyt-activated",C=e.adNetwork||!1,k=e.aspectHeight||9,P=e.aspectWidth||16,I=e.iframeClass||"",D=e.playerClass||"lty-playbtn",E=e.wrapperClass||"yt-lite",N=e.onIframeAdded||function(){},L=e.rel?"prefetch":"preload",S=e.containerElement||"article";return a.useEffect((function(){l&&N()}),[l]),a.createElement(a.Fragment,null,a.createElement("link",{rel:L,href:w,as:"image"}),a.createElement(a.Fragment,null,t&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:b}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),C&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement(S,{onPointerOver:function(){t||r(!0)},onClick:function(){l||o(!0)},className:"".concat(E," ").concat(l?y:""),"data-title":g,style:s({backgroundImage:"url(".concat(w,")")},{"--aspect-ratio":"".concat(k/P*100,"%")})},a.createElement("button",{type:"button",className:D,"aria-label":"".concat(j," ").concat(g)}),l&&a.createElement("iframe",{ref:n,className:I,title:g,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:f})))}));const i="videoContainer_NvH5";const l=function({id:e,title:n,thumbnail:c}){return(0,t.jsx)("div",{className:i,children:(0,t.jsx)(r,{thumbnail:c,id:e,params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:n,poster:"maxresdefault",webp:!0})})}}}]);