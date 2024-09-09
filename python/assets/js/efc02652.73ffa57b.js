"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6754],{5492:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var l=s(4848),n=s(8453);s(4235),s(8328),s(3078);const r={id:"writing-tests",title:"\u64b0\u5beb\u6e2c\u8a66"},i=void 0,c={id:"writing-tests",title:"\u64b0\u5beb\u6e2c\u8a66",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/writing-tests.mdx",sourceDirName:".",slug:"/writing-tests",permalink:"/python/docs/writing-tests",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"writing-tests",title:"\u64b0\u5beb\u6e2c\u8a66"},sidebar:"docs",previous:{title:"\u5b89\u88dd",permalink:"/python/docs/intro"},next:{title:"\u751f\u6210\u6e2c\u8a66",permalink:"/python/docs/codegen-intro"}},o={},a=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u7b2c\u4e00\u500b\u6e2c\u8a66",id:"\u7b2c\u4e00\u500b\u6e2c\u8a66",level:2},{value:"Actions",id:"actions",level:2},{value:"\u5c0e\u89bd",id:"\u5c0e\u89bd",level:3},{value:"\u4e92\u52d5",id:"\u4e92\u52d5",level:3},{value:"\u57fa\u672c\u64cd\u4f5c",id:"\u57fa\u672c\u64cd\u4f5c",level:3},{value:"\u65b7\u8a00",id:"\u65b7\u8a00",level:2},{value:"\u6e2c\u8a66\u9694\u96e2",id:"\u6e2c\u8a66\u9694\u96e2",level:3},{value:"\u4f7f\u7528 fixtures",id:"\u4f7f\u7528-fixtures",level:3},{value:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,l.jsx)(t.p,{children:"Playwright \u6e2c\u8a66\u5f88\u7c21\u55ae\uff0c\u5c31\u5169\u4ef6\u4e8b\uff1a"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"\u57f7\u884c\u52d5\u4f5c"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"\u6839\u64da\u9810\u671f\u65b7\u8a00\u72c0\u614b"})}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["\u5728\u57f7\u884c\u52d5\u4f5c\u4e4b\u524d\u7121\u9700\u7b49\u5f85\u4efb\u4f55\u4e8b\u60c5: Playwright \u6703\u5728\u57f7\u884c\u6bcf\u500b\u52d5\u4f5c\u4e4b\u524d\u81ea\u52d5\u7b49\u5f85\u5404\u7a2e",(0,l.jsx)(t.a,{href:"/python/docs/actionability",children:"\u53ef\u64cd\u4f5c\u6027"}),"\u6aa2\u67e5\u901a\u904e\u3002"]}),"\n",(0,l.jsx)(t.p,{children:"\u4e5f\u4e0d\u9700\u8981\u5728\u57f7\u884c\u6aa2\u67e5\u6642\u8655\u7406\u7af6\u722d\u689d\u4ef6 - Playwright \u65b7\u8a00\u7684\u8a2d\u8a08\u65b9\u5f0f\u662f\u63cf\u8ff0\u6700\u7d42\u9700\u8981\u6eff\u8db3\u7684\u671f\u671b\u3002"}),"\n",(0,l.jsx)(t.p,{children:"\u5c31\u662f\u9019\u6a23\uff01\u9019\u4e9b\u8a2d\u8a08\u9078\u64c7\u4f7f Playwright \u7528\u6236\u53ef\u4ee5\u5b8c\u5168\u5fd8\u8a18\u6e2c\u8a66\u4e2d\u7684\u4e0d\u7a69\u5b9a\u8d85\u6642\u548c\u7af6\u901f\u6aa2\u67e5\u3002"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"\u4f60\u5c07\u5b78\u5230"})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/python/docs/writing-tests#%E7%AC%AC%E4%B8%80%E5%80%8B%E6%B8%AC%E8%A9%A6",children:"\u5982\u4f55\u64b0\u5beb\u7b2c\u4e00\u500b\u6e2c\u8a66"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/python/docs/writing-tests#actions#%E4%BA%92%E5%8B%95",children:"\u5982\u4f55\u57f7\u884c\u64cd\u4f5c"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/python/docs/writing-tests#%E6%96%B7%E8%A8%80",children:"\u5982\u4f55\u4f7f\u7528\u65b7\u8a00"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/python/docs/writing-tests#%E6%B8%AC%E8%A9%A6%E9%9A%94%E9%9B%A2",children:"\u6e2c\u8a66\u5982\u4f55\u9694\u96e2\u57f7\u884c"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/python/docs/writing-tests#%E4%BD%BF%E7%94%A8%E6%B8%AC%E8%A9%A6%E6%8E%9B%E9%89%A4",children:"\u5982\u4f55\u4f7f\u7528\u6e2c\u8a66\u9264\u5b50"})}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"\u7b2c\u4e00\u500b\u6e2c\u8a66",children:"\u7b2c\u4e00\u500b\u6e2c\u8a66"}),"\n",(0,l.jsxs)(t.p,{children:["\u770b\u770b\u4ee5\u4e0b\u7bc4\u4f8b\uff0c\u4e86\u89e3\u5982\u4f55\u64b0\u5beb\u6e2c\u8a66\u3002\u8acb\u6ce8\u610f\u6a94\u6848\u540d\u7a31\u5982\u4f55\u9075\u5faa ",(0,l.jsx)(t.code,{children:"test_"})," \u524d\u7db4\u7d04\u5b9a\u4ee5\u53ca\u6bcf\u500b\u6e2c\u8a66\u540d\u7a31\u3002"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",metastring:'title="test_example.py"',children:'import re\nfrom playwright.sync_api import Page, expect\n\ndef test_has_title(page: Page):\n    page.goto("https://playwright.dev/")\n\n    # Expect a title "to contain" a substring.\n    expect(page).to_have_title(re.compile("Playwright"))\n\ndef test_get_started_link(page: Page):\n    page.goto("https://playwright.dev/")\n\n    # Click the get started link.\n    page.get_by_role("link", name="Get started").click()\n\n    # Expects page to have a heading with the name of Installation.\n    expect(page.get_by_role("heading", name="Installation")).to_be_visible()\n'})}),"\n",(0,l.jsx)(t.h2,{id:"actions",children:"Actions"}),"\n",(0,l.jsx)(t.h3,{id:"\u5c0e\u89bd",children:"\u5c0e\u89bd"}),"\n",(0,l.jsx)(t.p,{children:"\u5927\u591a\u6578\u6e2c\u8a66\u5c07\u5f9e\u5c0e\u822a\u9801\u9762\u5230 URL \u958b\u59cb\u3002\u4e4b\u5f8c\uff0c\u6e2c\u8a66\u5c07\u80fd\u5920\u8207\u9801\u9762\u5143\u7d20\u4e92\u52d5\u3002"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:'page.goto("https://playwright.dev/")\n'})}),"\n",(0,l.jsxs)(t.p,{children:["Playwright \u6703\u7b49\u5f85\u9801\u9762\u9054\u5230\u8f09\u5165\u72c0\u614b\u5f8c\u518d\u7e7c\u7e8c\u524d\u9032\u3002\u4e86\u89e3\u66f4\u591a\u95dc\u65bc ",(0,l.jsx)(t.a,{href:"/python/docs/api/class-page#page-goto",children:"page.goto()"})," \u9078\u9805\u3002"]}),"\n",(0,l.jsx)(t.h3,{id:"\u4e92\u52d5",children:"\u4e92\u52d5"}),"\n",(0,l.jsxs)(t.p,{children:["\u57f7\u884c\u64cd\u4f5c\u5f9e\u5b9a\u4f4d\u5143\u7d20\u958b\u59cb\u3002Playwright \u4f7f\u7528 ",(0,l.jsx)(t.a,{href:"/python/docs/locators",children:"Locators API"})," \u4f86\u5be6\u73fe\u9019\u4e00\u9ede\u3002Locators \u4ee3\u8868\u4e86\u4e00\u7a2e\u5728\u4efb\u4f55\u6642\u523b\u5728\u9801\u9762\u4e0a\u627e\u5230\u5143\u7d20\u7684\u65b9\u6cd5\uff0c\u4e86\u89e3\u66f4\u591a\u95dc\u65bc\u53ef\u7528\u7684 ",(0,l.jsx)(t.a,{href:"/python/docs/locators",children:"\u4e0d\u540c\u985e\u578b"})," \u7684 locators\u3002Playwright \u6703\u5728\u57f7\u884c\u64cd\u4f5c\u4e4b\u524d\u7b49\u5f85\u5143\u7d20\u8b8a\u5f97 ",(0,l.jsx)(t.a,{href:"/python/docs/actionability",children:"\u53ef\u64cd\u4f5c"}),"\uff0c\u56e0\u6b64\u7121\u9700\u7b49\u5f85\u5b83\u8b8a\u5f97\u53ef\u7528\u3002"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:'# Create a locator.\nget_started = page.get_by_role("link", name="Get started")\n\n# Click it.\nget_started.click()\n'})}),"\n",(0,l.jsx)(t.p,{children:"\u5728\u5927\u591a\u6578\u60c5\u6cc1\u4e0b\uff0c\u5b83\u5c07\u5beb\u5728\u4e00\u884c\u4e2d:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:'page.get_by_role("link", name="Get started").click()\n'})}),"\n",(0,l.jsx)(t.h3,{id:"\u57fa\u672c\u64cd\u4f5c",children:"\u57fa\u672c\u64cd\u4f5c"}),"\n",(0,l.jsxs)(t.p,{children:["\u9019\u662f\u6700\u53d7\u6b61\u8fce\u7684 Playwright \u64cd\u4f5c\u6e05\u55ae\u3002\u8acb\u6ce8\u610f\uff0c\u9084\u6709\u66f4\u591a\u64cd\u4f5c\uff0c\u56e0\u6b64\u8acb\u52d9\u5fc5\u67e5\u770b ",(0,l.jsx)(t.a,{href:"/python/docs/api/class-locator",children:"Locator API"})," \u90e8\u5206\u4ee5\u4e86\u89e3\u66f4\u591a\u8cc7\u8a0a\u3002"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Action"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-locator#locator-check",children:"locator.check()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u52fe\u9078\u8f38\u5165\u7684\u6838\u53d6\u65b9\u584a"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-locator#locator-click",children:"locator.click()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u9ede\u64ca\u5143\u7d20"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-locator#locator-uncheck",children:"locator.uncheck()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u53d6\u6d88\u52fe\u9078\u8f38\u5165\u7684\u6838\u53d6\u65b9\u584a"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-locator#locator-hover",children:"locator.hover()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5c07\u6ed1\u9f20\u61f8\u505c\u5728\u5143\u7d20\u4e0a"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-locator#locator-fill",children:"locator.fill()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u586b\u5beb\u8868\u55ae\u6b04\u4f4d\uff0c\u8f38\u5165\u6587\u5b57"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-locator#locator-focus",children:"locator.focus()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u805a\u7126\u5143\u7d20"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-locator#locator-press",children:"locator.press()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u6309\u4e0b\u55ae\u500b\u9375"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-locator#locator-set-input-files",children:"locator.set_input_files()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u9078\u64c7\u8981\u4e0a\u50b3\u7684\u6a94\u6848"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-locator#locator-select-option",children:"locator.select_option()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5728\u4e0b\u62c9\u9078\u55ae\u4e2d\u9078\u64c7\u9078\u9805"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"\u65b7\u8a00",children:"\u65b7\u8a00"}),"\n",(0,l.jsxs)(t.p,{children:["Playwright \u5305\u542b",(0,l.jsx)(t.a,{href:"/python/docs/test-assertions",children:"\u65b7\u8a00"}),'\uff0c\u9019\u4e9b\u65b7\u8a00\u5c07\u7b49\u5f85\u76f4\u5230\u9810\u671f\u689d\u4ef6\u6eff\u8db3\u3002\u4f7f\u7528\u9019\u4e9b\u65b7\u8a00\u53ef\u4ee5\u4f7f\u6e2c\u8a66\u4e0d\u6613\u5931\u6557\u4e14\u5177\u6709\u5f48\u6027\u3002\u4f8b\u5982\uff0c\u9019\u6bb5\u7a0b\u5f0f\u78bc\u5c07\u7b49\u5f85\u76f4\u5230\u9801\u9762\u7372\u5f97\u5305\u542b "Playwright" \u7684\u6a19\u984c:']}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:'import re\nfrom playwright.sync_api import expect\n\nexpect(page).to_have_title(re.compile("Playwright"))\n'})}),"\n",(0,l.jsxs)(t.p,{children:["\u4ee5\u4e0b\u662f\u6700\u53d7\u6b61\u8fce\u7684\u975e\u540c\u6b65\u65b7\u8a00\u6e05\u55ae\u3002\u8acb\u6ce8\u610f\uff0c\u9084\u6709",(0,l.jsx)(t.a,{href:"/python/docs/test-assertions",children:"\u66f4\u591a"}),"\u53ef\u4ee5\u719f\u6089\uff1a"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Assertion"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-locatorassertions#locator-assertions-to-be-checked",children:"expect(locator).to_be_checked"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u52fe\u9078\u6846\u5df2\u52fe\u9078"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-locatorassertions#locator-assertions-to-be-enabled",children:"expect(locator).to_be_enabled"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u63a7\u5236\u9805\u5df2\u555f\u7528"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-locatorassertions#locator-assertions-to-be-visible",children:"expect(locator).to_be_visible"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u53ef\u898b"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-locatorassertions#locator-assertions-to-contain-text",children:"expect(locator).to_contain_text"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5305\u542b\u6587\u5b57"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-locatorassertions#locator-assertions-to-have-attribute",children:"expect(locator).to_have_attribute"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5177\u6709\u5c6c\u6027"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-locatorassertions#locator-assertions-to-have-count",children:"expect(locator).to_have_count"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5217\u8868\u5177\u6709\u7d66\u5b9a\u7684\u9577\u5ea6"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-locatorassertions#locator-assertions-to-have-text",children:"expect(locator).to_have_text"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u7b26\u5408\u6587\u5b57"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-locatorassertions#locator-assertions-to-have-value",children:"expect(locator).to_have_value"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u8f38\u5165\u5143\u7d20\u5177\u6709\u503c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-pageassertions#page-assertions-to-have-title",children:"expect(page).to_have_title"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u9801\u9762\u5177\u6709\u6a19\u984c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/python/docs/api/class-pageassertions#page-assertions-to-have-url",children:"expect(page).to_have_url"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u9801\u9762\u5177\u6709 URL"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"\u6e2c\u8a66\u9694\u96e2",children:"\u6e2c\u8a66\u9694\u96e2"}),"\n",(0,l.jsxs)(t.p,{children:["Playwright Pytest \u5916\u639b\u662f\u57fa\u65bc\u6e2c\u8a66\u56fa\u5b9a\u88dd\u7f6e\u7684\u6982\u5ff5\uff0c\u4f8b\u5982",(0,l.jsx)(t.a,{href:"/python/docs/test-runners",children:"\u5167\u5efa page \u56fa\u5b9a\u88dd\u7f6e"}),"\uff0c\u5b83\u6703\u50b3\u905e\u5230\u4f60\u7684\u6e2c\u8a66\u4e2d\u3002\u7531\u65bc",(0,l.jsx)(t.a,{href:"./browser-contexts",children:"\u700f\u89bd\u5668\u4e0a\u4e0b\u6587"}),"\u7684\u539f\u56e0\uff0c\u9801\u9762\u5728\u6e2c\u8a66\u4e4b\u9593\u662f\u9694\u96e2\u7684\uff0c\u9019\u76f8\u7576\u65bc\u4e00\u500b\u5168\u65b0\u7684\u700f\u89bd\u5668\u914d\u7f6e\u6a94\u6848\uff0c\u6bcf\u500b\u6e2c\u8a66\u90fd\u6703\u7372\u5f97\u4e00\u500b\u5168\u65b0\u7684\u74b0\u5883\uff0c\u5373\u4f7f\u591a\u500b\u6e2c\u8a66\u5728\u55ae\u500b\u700f\u89bd\u5668\u4e2d\u57f7\u884c\u3002"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",metastring:'title="test_example.py"',children:'from playwright.sync_api import Page\n\ndef test_example_test(page: Page):\n  pass\n  # "page" belongs to an isolated BrowserContext, created for this specific test.\n\ndef test_another_test(page: Page):\n  pass\n  # "page" in this second test is completely isolated from the first test.\n'})}),"\n",(0,l.jsx)(t.h3,{id:"\u4f7f\u7528-fixtures",children:"\u4f7f\u7528 fixtures"}),"\n",(0,l.jsxs)(t.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528\u5404\u7a2e ",(0,l.jsx)(t.a,{href:"https://docs.pytest.org/en/6.2.x/fixture.html#autouse-fixtures-fixtures-you-don-t-have-to-request",children:"fixtures"})," \u5728\u6e2c\u8a66\u4e4b\u524d\u6216\u4e4b\u5f8c\u57f7\u884c\u7a0b\u5f0f\u78bc\uff0c\u4e26\u5728\u5b83\u5011\u4e4b\u9593\u5171\u4eab\u7269\u4ef6\u3002\u4e00\u500b ",(0,l.jsx)(t.code,{children:"function"})," \u7bc4\u570d\u7684 fixture\uff0c\u4f8b\u5982\u4f7f\u7528 autouse\uff0c\u884c\u70ba\u985e\u4f3c\u65bc beforeEach/afterEach\u3002\u800c\u4e00\u500b ",(0,l.jsx)(t.code,{children:"module"})," \u7bc4\u570d\u7684 fixture \u4f7f\u7528 autouse\uff0c\u884c\u70ba\u985e\u4f3c\u65bc beforeAll/afterAll\uff0c\u6703\u5728\u6240\u6709\u6e2c\u8a66\u4e4b\u524d\u548c\u4e4b\u5f8c\u57f7\u884c\u3002"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",metastring:'title="test_example.py"',children:'import pytest\nfrom playwright.sync_api import Page, expect\n\n@pytest.fixture(scope="function", autouse=True)\ndef before_each_after_each(page: Page):\n\n    print("before the test runs")\n\n    # Go to the starting url before each test.\n    page.goto("https://playwright.dev/")\n    yield\n\n    print("after the test runs")\n\ndef test_main_navigation(page: Page):\n    # Assertions use the expect API.\n    expect(page).to_have_url("https://playwright.dev/")\n'})}),"\n",(0,l.jsx)(t.h2,{id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",children:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/python/docs/running-tests",children:"\u57f7\u884c\u55ae\u4e00\u6e2c\u8a66\u3001\u591a\u500b\u6e2c\u8a66\u3001headed \u6a21\u5f0f"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/python/docs/codegen-intro",children:"\u4f7f\u7528\u7a0b\u5f0f\u78bc\u7522\u751f\u5668\u751f\u6210\u6e2c\u8a66"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/python/docs/trace-viewer-intro",children:"\u67e5\u770b\u6e2c\u8a66\u7684\u8ffd\u8e64"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"/python/docs/ci-intro",children:"\u4f7f\u7528 GitHub Actions \u5728 CI \u4e0a\u57f7\u884c\u6e2c\u8a66"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}}}]);