"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3894],{4998:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>t});var i=s(4848),c=s(8453);s(4235),s(8328),s(3078);const d={id:"codegen-intro",title:"\u751f\u6210\u6e2c\u8a66"},r=void 0,l={id:"codegen-intro",title:"\u751f\u6210\u6e2c\u8a66",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/codegen-intro.mdx",sourceDirName:".",slug:"/codegen-intro",permalink:"/python/docs/codegen-intro",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"codegen-intro",title:"\u751f\u6210\u6e2c\u8a66"},sidebar:"docs",previous:{title:"\u64b0\u5beb\u6e2c\u8a66",permalink:"/python/docs/writing-tests"},next:{title:"\u57f7\u884c\u548c\u5075\u932f\u6e2c\u8a66",permalink:"/python/docs/running-tests"}},h={},t=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u57f7\u884c\u7a0b\u5f0f\u78bc\u7522\u751f\u5668",id:"\u57f7\u884c\u7a0b\u5f0f\u78bc\u7522\u751f\u5668",level:2},{value:"\u9304\u88fd\u6e2c\u8a66",id:"\u9304\u88fd\u6e2c\u8a66",level:3},{value:"\u7522\u751f\u5b9a\u4f4d\u5668",id:"\u7522\u751f\u5b9a\u4f4d\u5668",level:3},{value:"\u6a21\u64ec",id:"\u6a21\u64ec",level:3},{value:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h6:"h6",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,i.jsx)(n.p,{children:"Playwright \u5167\u5efa\u4e86\u751f\u6210\u6e2c\u8a66\u7684\u529f\u80fd\uff0c\u662f\u5feb\u901f\u958b\u59cb\u6e2c\u8a66\u7684\u597d\u65b9\u6cd5\u3002\u5b83\u6703\u6253\u958b\u5169\u500b\u8996\u7a97\uff0c\u4e00\u500b\u662f\u8207\u4f60\u5e0c\u671b\u6e2c\u8a66\u7684\u7db2\u7ad9\u4e92\u52d5\u7684\u700f\u89bd\u5668\u8996\u7a97\uff0c\u53e6\u4e00\u500b\u662f Playwright Inspector \u8996\u7a97\uff0c\u4f60\u53ef\u4ee5\u5728\u5176\u4e2d\u8a18\u9304\u4f60\u7684\u6e2c\u8a66\u3001\u8907\u88fd\u6e2c\u8a66\u3001\u6e05\u9664\u6e2c\u8a66\u4ee5\u53ca\u66f4\u6539\u6e2c\u8a66\u7684\u8a9e\u8a00\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u4f60\u5c07\u5b78\u5230"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/python/docs/codegen#%E9%8C%84%E8%A3%BD%E6%B8%AC%E8%A9%A6",children:"\u5982\u4f55\u8a18\u9304\u4e00\u500b\u6e2c\u8a66"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/python/docs/codegen#%E7%94%A2%E7%94%9F%E5%AE%9A%E4%BD%8D%E5%99%A8",children:"\u5982\u4f55\u7522\u751f\u5b9a\u4f4d\u5668"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u57f7\u884c\u7a0b\u5f0f\u78bc\u7522\u751f\u5668",children:"\u57f7\u884c\u7a0b\u5f0f\u78bc\u7522\u751f\u5668"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"codegen"})," \u547d\u4ee4\u4f86\u57f7\u884c\u6e2c\u8a66\u7522\u751f\u5668\uff0c\u5f8c\u9762\u8ddf\u8457\u4f60\u60f3\u8981\u751f\u6210\u6e2c\u8a66\u7684\u7db2\u7ad9 URL\u3002URL \u662f\u53ef\u9078\u7684\uff0c\u4f60\u53ef\u4ee5\u96a8\u6642\u5728\u6c92\u6709\u5b83\u7684\u60c5\u6cc1\u4e0b\u57f7\u884c\u547d\u4ee4\uff0c\u7136\u5f8c\u76f4\u63a5\u5c07 URL \u6dfb\u52a0\u5230\u700f\u89bd\u5668\u7a97\u53e3\u4e2d\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"playwright codegen demo.playwright.dev/todomvc\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u9304\u88fd\u6e2c\u8a66",children:"\u9304\u88fd\u6e2c\u8a66"}),"\n",(0,i.jsxs)(n.p,{children:["\u57f7\u884c ",(0,i.jsx)(n.code,{children:"codegen"})," \u4e26\u5728\u700f\u89bd\u5668\u4e2d\u57f7\u884c\u64cd\u4f5c\u3002Playwright \u6703\u70ba\u4f7f\u7528\u8005\u4e92\u52d5\u751f\u6210\u7a0b\u5f0f\u78bc\u3002",(0,i.jsx)(n.code,{children:"Codegen"})," \u6703\u67e5\u770b\u6e32\u67d3\u7684\u9801\u9762\u4e26\u627e\u51fa\u63a8\u85a6\u7684\u5b9a\u4f4d\u5668\uff0c\u512a\u5148\u8003\u616e\u89d2\u8272\u3001\u6587\u672c\u548c\u6e2c\u8a66 ID \u5b9a\u4f4d\u5668\u3002\u5982\u679c\u751f\u6210\u5668\u8b58\u5225\u51fa\u591a\u500b\u5339\u914d\u5b9a\u4f4d\u5668\u7684\u5143\u7d20\uff0c\u5b83\u6703\u6539\u9032\u5b9a\u4f4d\u5668\uff0c\u4f7f\u5176\u5177\u6709\u5f48\u6027\u4e26\u552f\u4e00\u8b58\u5225\u76ee\u6a19\u5143\u7d20\uff0c\u5f9e\u800c\u6d88\u9664\u548c\u6e1b\u5c11\u7531\u65bc\u5b9a\u4f4d\u5668\u5c0e\u81f4\u7684\u6e2c\u8a66\u5931\u6557\u548c\u4e0d\u7a69\u5b9a\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u6e2c\u8a66\u7522\u751f\u5668\uff0c\u4f60\u53ef\u4ee5\u8a18\u9304:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u50cf\u9ede\u64ca\u6216\u586b\u5beb\u9019\u6a23\u7684\u64cd\u4f5c\uff0c\u53ea\u9700\u8207\u9801\u9762\u4e92\u52d5"}),"\n",(0,i.jsxs)(n.li,{children:["\u900f\u904e\u9ede\u64ca\u5de5\u5177\u5217\u4e0a\u7684\u5176\u4e2d\u4e00\u500b\u5716\u6a19\uff0c\u7136\u5f8c\u9ede\u64ca\u9801\u9762\u4e0a\u7684\u4e00\u500b\u5143\u7d20\u4f86\u9032\u884c\u65b7\u8a00\u3002\u4f60\u53ef\u4ee5\u9078\u64c7:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"'assert visibility'"})," \u4f86\u65b7\u8a00\u4e00\u500b\u5143\u7d20\u662f\u53ef\u898b\u7684"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"'assert text'"})," \u4f86\u65b7\u8a00\u4e00\u500b\u5143\u7d20\u5305\u542b\u7279\u5b9a\u7684\u6587\u672c"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"'assert value'"})," \u4f86\u65b7\u8a00\u4e00\u500b\u5143\u7d20\u5177\u6709\u7279\u5b9a\u7684\u503c"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h6,{id:""}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/microsoft/playwright/assets/13063165/9751b609-6e4c-486b-a961-f86f177b1d58",alt:"\u9304\u88fd\u6e2c\u8a66"})}),"\n",(0,i.jsx)(n.h6,{id:"-1"}),"\n",(0,i.jsxs)(n.p,{children:["\u7576\u4f60\u5b8c\u6210\u8207\u9801\u9762\u4e92\u52d5\u6642\uff0c\u6309\u4e0b",(0,i.jsx)(n.code,{children:"'record'"}),"\u6309\u9215\u4ee5\u505c\u6b62\u9304\u88fd\uff0c\u4e26\u4f7f\u7528",(0,i.jsx)(n.code,{children:"'copy'"}),"\u6309\u9215\u5c07\u7522\u751f\u7684\u7a0b\u5f0f\u78bc\u8907\u88fd\u5230\u4f60\u7684\u7de8\u8f2f\u5668\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"'clear'"})," \u6309\u9215\u4f86\u6e05\u9664\u7a0b\u5f0f\u78bc\u4ee5\u91cd\u65b0\u958b\u59cb\u9304\u88fd\u3002\u5b8c\u6210\u5f8c\u95dc\u9589 Playwright \u6aa2\u67e5\u5668\u8996\u7a97\u6216\u505c\u6b62\u7d42\u7aef\u6a5f\u547d\u4ee4\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8981\u4e86\u89e3\u66f4\u591a\u6709\u95dc\u751f\u6210\u6e2c\u8a66\u7684\u8cc7\u8a0a\uff0c\u8acb\u67e5\u770b\u6211\u5011\u7684",(0,i.jsx)(n.a,{href:"/python/docs/codegen",children:"\u7a0b\u5f0f\u78bc\u7522\u751f\u5668"}),"\u8a73\u7d30\u6307\u5357\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u7522\u751f\u5b9a\u4f4d\u5668",children:"\u7522\u751f\u5b9a\u4f4d\u5668"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528\u6e2c\u8a66\u7522\u751f\u5668\u751f\u6210",(0,i.jsx)(n.a,{href:"/python/docs/locators",children:"\u5b9a\u4f4d\u5668"}),"\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6309\u4e0b ",(0,i.jsx)(n.code,{children:"'Record'"})," \u6309\u9215\u505c\u6b62\u9304\u88fd\uff0c\u7136\u5f8c\u6703\u51fa\u73fe ",(0,i.jsx)(n.code,{children:"'Pick Locator'"})," \u6309\u9215\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u9ede\u64ca ",(0,i.jsx)(n.code,{children:"'Pick Locator'"})," \u6309\u9215\uff0c\u7136\u5f8c\u5c07\u6ed1\u9f20\u61f8\u505c\u5728\u700f\u89bd\u5668\u8996\u7a97\u4e2d\u7684\u5143\u7d20\u4e0a\uff0c\u4ee5\u67e5\u770b\u6bcf\u500b\u5143\u7d20\u4e0b\u65b9\u7a81\u51fa\u986f\u793a\u7684\u5b9a\u4f4d\u5668\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u8981\u9078\u64c7\u5b9a\u4f4d\u5668\uff0c\u8acb\u9ede\u64ca\u60a8\u60f3\u8981\u5b9a\u4f4d\u7684\u5143\u7d20\uff0c\u8a72\u5b9a\u4f4d\u5668\u7684\u7a0b\u5f0f\u78bc\u5c07\u51fa\u73fe\u5728 Pick Locator \u6309\u9215\u65c1\u908a\u7684\u5b9a\u4f4d\u5668\u64cd\u4f5c\u5340\u4e2d\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u7136\u5f8c\uff0c\u60a8\u53ef\u4ee5\u5728\u5b9a\u4f4d\u5668\u64cd\u4f5c\u5340\u4e2d\u7de8\u8f2f\u5b9a\u4f4d\u5668\u4ee5\u9032\u884c\u5fae\u8abf\uff0c\u4e26\u5728\u700f\u89bd\u5668\u8996\u7a97\u4e2d\u67e5\u770b\u5339\u914d\u7684\u5143\u7d20\u7a81\u51fa\u986f\u793a\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u4f7f\u7528\u8907\u88fd\u6309\u9215\u8907\u88fd\u5b9a\u4f4d\u5668\u4e26\u5c07\u5176\u8cbc\u5230\u60a8\u7684\u7a0b\u5f0f\u78bc\u4e2d\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h6,{id:"-2"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/microsoft/playwright/assets/13063165/95d11f48-96a4-46b9-9c2a-63c3aa4fdce7",alt:"\u9078\u64c7\u4e00\u500b\u5b9a\u4f4d\u5668"})}),"\n",(0,i.jsx)(n.h3,{id:"\u6a21\u64ec",children:"\u6a21\u64ec"}),"\n",(0,i.jsxs)(n.p,{children:["\u60a8\u9084\u53ef\u4ee5\u4f7f\u7528\u6a21\u64ec\u4f86\u751f\u6210\u6e2c\u8a66\uff0c\u4ee5\u4fbf\u70ba\u7279\u5b9a\u7684\u8996\u53e3\u3001\u8a2d\u5099\u3001\u914d\u8272\u65b9\u6848\u751f\u6210\u6e2c\u8a66\uff0c\u4e26\u6a21\u64ec\u5730\u7406\u4f4d\u7f6e\u3001\u8a9e\u8a00\u6216\u6642\u5340\u3002\u6e2c\u8a66\u751f\u6210\u5668\u9084\u53ef\u4ee5\u5728\u4fdd\u7559\u8eab\u4efd\u9a57\u8b49\u72c0\u614b\u7684\u540c\u6642\u751f\u6210\u6e2c\u8a66\u3002\u67e5\u770b ",(0,i.jsx)(n.a,{href:"/python/docs/codegen#%E6%A8%A1%E6%93%AC",children:"\u6e2c\u8a66\u7522\u751f\u5668"})," \u6307\u5357\u4ee5\u4e86\u89e3\u66f4\u591a\u8cc7\u8a0a\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",children:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/python/docs/trace-viewer-intro",children:"\u67e5\u770b\u4f60\u7684\u6e2c\u8a66\u8ffd\u8e64"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}}}]);