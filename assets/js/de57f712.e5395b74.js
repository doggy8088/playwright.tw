"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1793],{8867:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>j,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var l=t(4848),n=t(8453);t(4235),t(8328),t(3078);const d={id:"test-cli",title:"\u547d\u4ee4\u5217"},r=void 0,i={id:"test-cli",title:"\u547d\u4ee4\u5217",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/test-cli.mdx",sourceDirName:".",slug:"/test-cli",permalink:"/docs/test-cli",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"test-cli",title:"\u547d\u4ee4\u5217"},sidebar:"docs",previous:{title:"\u8a3b\u91cb",permalink:"/docs/test-annotations"},next:{title:"\u6a21\u64ec",permalink:"/docs/emulation"}},c={},h=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}];function x(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,l.jsx)(s.p,{children:"\u4ee5\u4e0b\u662f\u547d\u4ee4\u5217\u4e2d\u6700\u5e38\u898b\u7684\u9078\u9805\u3002"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u57f7\u884c\u6240\u6709\u6e2c\u8a66"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"npx playwright test\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u57f7\u884c\u55ae\u4e00\u6e2c\u8a66\u6a94\u6848"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"npx playwright test tests/todo-page.spec.ts\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u57f7\u884c\u4e00\u7d44\u6e2c\u8a66\u6a94\u6848"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"npx playwright test tests/todo-page/ tests/landing-page/\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u57f7\u884c\u6a94\u540d\u4e2d\u5305\u542b ",(0,l.jsx)(s.code,{children:"my-spec"})," \u6216 ",(0,l.jsx)(s.code,{children:"my-spec-2"})," \u7684\u6a94\u6848"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"npx playwright test my-spec my-spec-2\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u57f7\u884c my-spec.ts \u4e2d\u7b2c 42 \u884c\u7684\u6e2c\u8a66"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"npx playwright test my-spec.ts:42\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u57f7\u884c\u5177\u6709\u7279\u5b9a\u6a19\u984c\u7684\u6e2c\u8a66"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:'npx playwright test -g "add a todo item"\n'})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5728\u6709\u982d\u700f\u89bd\u5668\u4e2d\u57f7\u884c\u6e2c\u8a66"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"npx playwright test --headed\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5c0d\u7279\u5b9a\u5c08\u6848\u57f7\u884c\u6240\u6709\u6e2c\u8a66"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"npx playwright test --project=chromium\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u505c\u7528",(0,l.jsx)(s.a,{href:"/docs/test-parallel",children:"\u5e73\u884c\u8655\u7406"})]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"npx playwright test --workers=1\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u9078\u64c7\u4e00\u500b",(0,l.jsx)(s.a,{href:"/docs/test-reporters",children:"\u5831\u544a\u5668"})]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"npx playwright test --reporter=dot\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u4f7f\u7528",(0,l.jsx)(s.a,{href:"/docs/debug",children:"Playwright Inspector"})," \u5728\u9664\u932f\u6a21\u5f0f\u4e0b\u57f7\u884c"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"npx playwright test --debug\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5728\u4e92\u52d5\u5f0f UI \u6a21\u5f0f\u4e0b\u57f7\u884c\u6e2c\u8a66\uff0c\u5167\u5efa\u76e3\u770b\u6a21\u5f0f\uff08\u9810\u89bd\uff09"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"npx playwright test --ui\n"})}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5c0b\u6c42\u5e6b\u52a9"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"npx playwright test --help\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,l.jsxs)(s.p,{children:["\u5b8c\u6574\u7684 Playwright Test \u9078\u9805\u96c6\u53ef\u5728",(0,l.jsx)(s.a,{href:"/docs/test-use-options",children:"\u8a2d\u5b9a\u6a94\u6848"}),"\u4e2d\u627e\u5230\u3002\u4ee5\u4e0b\u9078\u9805\u53ef\u4ee5\u50b3\u905e\u5230\u547d\u4ee4\u5217\uff0c\u4e26\u512a\u5148\u65bc\u8a2d\u5b9a\u6a94\u6848:"]}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Option"}),(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:"Non-option arguments"}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u6bcf\u500b\u53c3\u6578\u90fd\u88ab\u8996\u70ba\u6b63\u5247\u8868\u9054\u5f0f\uff0c\u8207\u5b8c\u6574\u7684\u6e2c\u8a66\u6587\u4ef6\u8def\u5f91\u5339\u914d\u3002\u53ea\u6709\u4f86\u81ea\u5339\u914d\u6a21\u5f0f\u7684\u6587\u4ef6\u7684\u6e2c\u8a66\u5c07\u88ab\u57f7\u884c\u3002\u50cf ",(0,l.jsx)(s.code,{children:"$"})," \u6216 ",(0,l.jsx)(s.code,{children:"*"})," \u9019\u6a23\u7684\u7279\u6b8a\u7b26\u865f\u61c9\u8a72\u7528 ",(0,l.jsx)(s.code,{children:"\\"})," \u8f49\u7fa9\u3002\u5728\u8a31\u591a shell/\u7d42\u7aef\u4e2d\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u5f15\u7528\u53c3\u6578\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,l.jsx)(s.code,{children:"-c <file>"})," or ",(0,l.jsx)(s.code,{children:"--config <file>"})]}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u914d\u7f6e\u6587\u4ef6\u3002\u5982\u679c\u672a\u50b3\u905e\uff0c\u9810\u8a2d\u70ba\u7576\u524d\u76ee\u9304\u4e2d\u7684 ",(0,l.jsx)(s.code,{children:"playwright.config.ts"})," \u6216 ",(0,l.jsx)(s.code,{children:"playwright.config.js"}),"\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--debug"})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u4f7f\u7528 Playwright Inspector \u57f7\u884c\u6e2c\u8a66\u3002\u662f ",(0,l.jsx)(s.code,{children:"PWDEBUG=1"})," \u74b0\u5883\u8b8a\u6578\u548c ",(0,l.jsx)(s.code,{children:"--timeout=0 --max-failures=1 --headed --workers=1"})," \u9078\u9805\u7684\u5feb\u6377\u65b9\u5f0f\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--fail-on-flaky-tests"})}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:"\u5305\u542b\u4e0d\u7a69\u5b9a\u6e2c\u8a66\u7684\u6e2c\u8a66\u904b\u884c\u5931\u6557\u3002\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u4e0d\u7a69\u5b9a\u7684\u6e2c\u8a66\u8a08\u7b97\u70ba\u6210\u529f\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--forbid-only"})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u662f\u5426\u7981\u6b62 ",(0,l.jsx)(s.code,{children:"test.only"}),"\u3002\u5728 CI \u4e0a\u5f88\u6709\u7528\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--global-timeout <number>"})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u6574\u500b\u6e2c\u8a66\u904b\u884c\u7684\u7e3d\u8d85\u6642\u6642\u9593\uff08\u6beb\u79d2\uff09\u3002\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u6c92\u6709\u5168\u57df\u8d85\u6642\u3002\u4e86\u89e3\u66f4\u591a\u95dc\u65bc",(0,l.jsx)(s.a,{href:"/docs/test-timeouts",children:"\u5404\u7a2e\u8d85\u6642"}),"\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,l.jsx)(s.code,{children:"-g <grep>"})," or ",(0,l.jsx)(s.code,{children:"--grep <grep>"})]}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u53ea\u904b\u884c\u8207\u6b64\u6b63\u5247\u8868\u9054\u5f0f\u5339\u914d\u7684\u6e2c\u8a66\u3002\u4f8b\u5982\uff0c\u9019\u5c07\u5728\u50b3\u905e ",(0,l.jsx)(s.code,{children:'-g "add to cart"'})," \u6642\u904b\u884c ",(0,l.jsx)(s.code,{children:"'should add to cart'"}),"\u3002\u6b63\u5247\u8868\u9054\u5f0f\u5c07\u91dd\u5c0d\u7531\u5c08\u6848\u540d\u7a31\u3001\u6e2c\u8a66\u6587\u4ef6\u540d\u3001",(0,l.jsx)(s.code,{children:"test.describe"})," \u6a19\u984c\uff08\u5982\u679c\u6709\uff09\u3001\u6e2c\u8a66\u6a19\u984c\u548c\u6240\u6709\u6e2c\u8a66\u6a19\u7c64\u7d44\u6210\u7684\u5b57\u4e32\u9032\u884c\u6e2c\u8a66\uff0c\u9019\u4e9b\u5b57\u4e32\u7531\u7a7a\u683c\u5206\u9694\uff0c\u4f8b\u5982 ",(0,l.jsx)(s.code,{children:"chromium my-test.spec.ts my-suite my-test @smoke"}),"\u3002\u904e\u6ffe\u5668\u4e0d\u9069\u7528\u65bc\u76f8\u4f9d\u5c08\u6848\u7684\u6e2c\u8a66\uff0c\u5373 Playwright \u4ecd\u5c07\u904b\u884c\u6240\u6709\u4f86\u81ea",(0,l.jsx)(s.a,{href:"/docs/test-projects#dependencies",children:"\u5c08\u6848\u76f8\u4f9d\u6027"}),"\u7684\u6e2c\u8a66\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--grep-invert <grep>"})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u53ea\u904b\u884c",(0,l.jsx)(s.strong,{children:"\u4e0d"}),"\u5339\u914d\u6b64\u6b63\u5247\u8868\u9054\u5f0f\u7684\u6e2c\u8a66\u3002\u8207 ",(0,l.jsx)(s.code,{children:"--grep"})," \u76f8\u53cd\u3002\u904e\u6ffe\u5668\u4e0d\u9069\u7528\u65bc\u76f8\u4f9d\u5c08\u6848\u7684\u6e2c\u8a66\uff0c\u5373 Playwright \u4ecd\u5c07\u904b\u884c\u6240\u6709\u4f86\u81ea",(0,l.jsx)(s.a,{href:"/docs/test-projects#dependencies",children:"\u5c08\u6848\u76f8\u4f9d\u6027"}),"\u7684\u6e2c\u8a66\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--headed"})}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:"\u5728\u6709\u982d\u700f\u89bd\u5668\u4e2d\u904b\u884c\u6e2c\u8a66\u3002\u5c0d\u65bc\u5075\u932f\u5f88\u6709\u7528\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--ignore-snapshots"})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u662f\u5426\u5ffd\u7565",(0,l.jsx)(s.a,{href:"/docs/test-snapshots",children:"\u5feb\u7167"}),"\u3002\u7576\u5feb\u7167\u671f\u671b\u503c\u5df2\u77e5\u4e0d\u540c\u6642\u4f7f\u7528\uff0c\u4f8b\u5982\u5728 Linux \u4e0a\u904b\u884c\u6e2c\u8a66\u5c0d\u6bd4 Windows \u622a\u5716\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--last-failed"})}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:"\u53ea\u91cd\u65b0\u904b\u884c\u5931\u6557\u7684\u6e2c\u8a66\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--list"})}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:"\u5217\u51fa\u6240\u6709\u6e2c\u8a66\uff0c\u4f46\u4e0d\u904b\u884c\u5b83\u5011\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,l.jsx)(s.code,{children:"--max-failures <N>"})," or ",(0,l.jsx)(s.code,{children:"-x"})]}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u5728\u7b2c\u4e00\u500b ",(0,l.jsx)(s.code,{children:"N"})," \u500b\u6e2c\u8a66\u5931\u6557\u5f8c\u505c\u6b62\u3002\u50b3\u905e ",(0,l.jsx)(s.code,{children:"-x"})," \u5728\u7b2c\u4e00\u6b21\u5931\u6557\u5f8c\u505c\u6b62\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--no-deps"})}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:"\u5ffd\u7565\u5c08\u6848\u4e4b\u9593\u7684\u76f8\u4f9d\u6027\uff0c\u4e26\u8868\u73fe\u5f97\u597d\u50cf\u5b83\u5011\u672a\u6307\u5b9a\u4e00\u6a23\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--output <dir>"})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u6e2c\u8a66\u751f\u6210\u7684\u5de5\u4ef6\u76ee\u9304\uff0c\u9810\u8a2d\u70ba ",(0,l.jsx)(s.code,{children:"test-results"}),"\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--only-changed [ref]"})}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:'\u53ea\u904b\u884c\u5de5\u4f5c\u6a39\u548c "ref" \u4e4b\u9593\u5df2\u66f4\u6539\u7684\u6e2c\u8a66\u6587\u4ef6\u3002\u9810\u8a2d\u70ba\u904b\u884c\u6240\u6709\u672a\u63d0\u4ea4\u7684\u66f4\u6539\uff0cref=HEAD\u3002\u50c5\u652f\u6301 Git\u3002'})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--pass-with-no-tests"})}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:"\u7576\u672a\u627e\u5230\u6587\u4ef6\u6642\u5141\u8a31\u6e2c\u8a66\u5957\u4ef6\u901a\u904e\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--project <name>"})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u53ea\u904b\u884c\u6307\u5b9a",(0,l.jsx)(s.a,{href:"/docs/test-projects",children:"\u5c08\u6848"}),"\u7684\u6e2c\u8a66\uff0c\u652f\u6301 '*' \u901a\u914d\u7b26\u3002\u9810\u8a2d\u70ba\u904b\u884c\u914d\u7f6e\u6587\u4ef6\u4e2d\u5b9a\u7fa9\u7684\u6240\u6709\u5c08\u6848\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--quiet"})}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:"\u662f\u5426\u6291\u5236\u6e2c\u8a66\u7684 stdout \u548c stderr\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--repeat-each <N>"})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u6bcf\u500b\u6e2c\u8a66\u904b\u884c ",(0,l.jsx)(s.code,{children:"N"})," \u6b21\uff0c\u9810\u8a2d\u70ba\u4e00\u6b21\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--reporter <reporter>"})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u9078\u64c7\u4e00\u500b\u5831\u544a\u5668\uff1a\u7c21\u7d04\u7684 ",(0,l.jsx)(s.code,{children:"dot"}),"\uff0c\u7c21\u6f54\u7684 ",(0,l.jsx)(s.code,{children:"line"})," \u6216\u8a73\u7d30\u7684 ",(0,l.jsx)(s.code,{children:"list"}),"\u3002\u67e5\u770b",(0,l.jsx)(s.a,{href:"/docs/test-reporters",children:"\u5831\u544a\u5668"}),"\u4ee5\u7372\u53d6\u66f4\u591a\u8cc7\u8a0a\u3002\u60a8\u4e5f\u53ef\u4ee5\u50b3\u905e\u4e00\u500b",(0,l.jsx)(s.a,{href:"/docs/test-reporters#custom-reporters",children:"\u81ea\u5b9a\u7fa9\u5831\u544a\u5668"}),"\u6587\u4ef6\u7684\u8def\u5f91\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--retries <number>"})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u4e0d\u7a69\u5b9a\u6e2c\u8a66\u7684\u6700\u5927",(0,l.jsx)(s.a,{href:"/docs/test-retries#retries",children:"\u91cd\u8a66"}),"\u6b21\u6578\uff0c\u9810\u8a2d\u70ba\u96f6\uff08\u4e0d\u91cd\u8a66\uff09\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--shard <shard>"})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,l.jsx)(s.a,{href:"/docs/test-parallel#shard-tests-between-multiple-machines",children:"\u5206\u7247"}),"\u6e2c\u8a66\u4e26\u50c5\u57f7\u884c\u9078\u5b9a\u7684\u5206\u7247\uff0c\u4ee5 ",(0,l.jsx)(s.code,{children:"current/all"})," \u7684\u5f62\u5f0f\u6307\u5b9a\uff0c\u5f9e 1 \u958b\u59cb\uff0c\u4f8b\u5982 ",(0,l.jsx)(s.code,{children:"3/5"}),"\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--timeout <number>"})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u6bcf\u500b\u6e2c\u8a66\u7684\u6700\u5927\u8d85\u6642\u6642\u9593\uff08\u6beb\u79d2\uff09\uff0c\u9810\u8a2d\u70ba 30 \u79d2\u3002\u4e86\u89e3\u66f4\u591a\u95dc\u65bc",(0,l.jsx)(s.a,{href:"/docs/test-timeouts",children:"\u5404\u7a2e\u8d85\u6642"}),"\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--trace <mode>"})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u5f37\u5236\u8ffd\u8e64\u6a21\u5f0f\uff0c\u53ef\u4ee5\u662f ",(0,l.jsx)(s.code,{children:"on"}),"\u3001",(0,l.jsx)(s.code,{children:"off"}),"\u3001",(0,l.jsx)(s.code,{children:"on-first-retry"}),"\u3001",(0,l.jsx)(s.code,{children:"on-all-retries"}),"\u3001",(0,l.jsx)(s.code,{children:"retain-on-failure"})]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.code,{children:"--tsconfig <path>"})}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u9069\u7528\u65bc\u6240\u6709\u5c0e\u5165\u6587\u4ef6\u7684\u55ae\u500b tsconfig \u7684\u8def\u5f91\u3002\u67e5\u770b",(0,l.jsx)(s.a,{href:"/docs/test-typescript#tsconfig-resolution",children:"tsconfig \u89e3\u6790"}),"\u4ee5\u7372\u53d6\u66f4\u591a\u8a73\u60c5\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,l.jsx)(s.code,{children:"--update-snapshots"})," or ",(0,l.jsx)(s.code,{children:"-u"})]}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u662f\u5426\u4f7f\u7528\u5be6\u969b\u7d50\u679c\u66f4\u65b0",(0,l.jsx)(s.a,{href:"/docs/test-snapshots",children:"\u5feb\u7167"}),"\u800c\u4e0d\u662f\u9032\u884c\u6bd4\u8f03\u3002\u7576\u5feb\u7167\u671f\u671b\u503c\u5df2\u66f4\u6539\u6642\u4f7f\u7528\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,l.jsx)(s.code,{children:"--workers <number>"})," or ",(0,l.jsx)(s.code,{children:"-j <number>"})]}),(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:["\u5728",(0,l.jsx)(s.a,{href:"/docs/test-parallel",children:"\u5e73\u884c"}),"\u4e2d\u904b\u884c\u7684\u6700\u5927\u4e26\u767c\u5de5\u4f5c\u7a0b\u5e8f\u6578\u3002"]})]})]})]})]})}function j(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}}}]);