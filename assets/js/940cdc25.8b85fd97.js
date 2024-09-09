"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6964],{9886:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var l=s(4848),n=s(8453);s(4235),s(8328),s(3078);const i={id:"test-assertions",title:"\u65b7\u8a00"},c=void 0,r={id:"test-assertions",title:"\u65b7\u8a00",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/test-assertions.mdx",sourceDirName:".",slug:"/test-assertions",permalink:"/docs/test-assertions",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"test-assertions",title:"\u65b7\u8a00"},sidebar:"docs",previous:{title:"\u64cd\u4f5c",permalink:"/docs/input"},next:{title:"API \u6e2c\u8a66",permalink:"/docs/api-testing"}},a={},o=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u81ea\u52d5\u91cd\u8a66\u65b7\u8a00",id:"\u81ea\u52d5\u91cd\u8a66\u65b7\u8a00",level:2},{value:"\u975e\u91cd\u8a66\u65b7\u8a00",id:"\u975e\u91cd\u8a66\u65b7\u8a00",level:2},{value:"\u5426\u5b9a\u5339\u914d\u5668",id:"\u5426\u5b9a\u5339\u914d\u5668",level:2},{value:"\u8edf\u6027\u65b7\u8a00",id:"\u8edf\u6027\u65b7\u8a00",level:2},{value:"\u81ea\u8a02 expect \u8a0a\u606f",id:"\u81ea\u8a02-expect-\u8a0a\u606f",level:2},{value:"expect.configure",id:"expectconfigure",level:2},{value:"expect.poll",id:"expectpoll",level:2},{value:"expect.toPass",id:"expecttopass",level:2},{value:"\u4f7f\u7528 expect.extend \u6dfb\u52a0\u81ea\u5b9a\u7fa9\u5339\u914d\u5668",id:"\u4f7f\u7528-expectextend-\u6dfb\u52a0\u81ea\u5b9a\u7fa9\u5339\u914d\u5668",level:2},{value:"\u8207 expect \u51fd\u5f0f\u5eab\u7684\u76f8\u5bb9\u6027",id:"\u8207-expect-\u51fd\u5f0f\u5eab\u7684\u76f8\u5bb9\u6027",level:3},{value:"\u7d50\u5408\u4f86\u81ea\u591a\u500b\u6a21\u7d44\u7684\u81ea\u8a02\u5339\u914d\u5668",id:"\u7d50\u5408\u4f86\u81ea\u591a\u500b\u6a21\u7d44\u7684\u81ea\u8a02\u5339\u914d\u5668",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,l.jsxs)(t.p,{children:["Playwright \u5305\u542b\u4ee5 ",(0,l.jsx)(t.code,{children:"expect"})," \u51fd\u5f0f\u5f62\u5f0f\u7684\u6e2c\u8a66\u65b7\u8a00\u3002\u8981\u9032\u884c\u65b7\u8a00\uff0c\u547c\u53eb ",(0,l.jsx)(t.code,{children:"expect(value)"})," \u4e26\u9078\u64c7\u53cd\u6620\u671f\u671b\u7684\u5339\u914d\u5668\u3002\u6709\u8a31\u591a\u50cf ",(0,l.jsx)(t.code,{children:"toEqual"}),"\u3001",(0,l.jsx)(t.code,{children:"toContain"}),"\u3001",(0,l.jsx)(t.code,{children:"toBeTruthy"})," \u9019\u6a23\u7684",(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions",children:"\u901a\u7528\u5339\u914d\u5668"}),"\u53ef\u4ee5\u7528\u4f86\u65b7\u8a00\u4efb\u4f55\u689d\u4ef6\u3002"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"expect(success).toBeTruthy();\n"})}),"\n",(0,l.jsxs)(t.p,{children:["Playwright \u4e5f\u5305\u62ec\u7279\u5b9a\u65bc\u7db2\u9801\u7684 ",(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions",children:"\u975e\u540c\u6b65\u5339\u914d\u5668"}),"\uff0c\u5b83\u6703\u7b49\u5f85\u76f4\u5230\u9810\u671f\u689d\u4ef6\u6eff\u8db3\u3002\u8acb\u8003\u616e\u4ee5\u4e0b\u7bc4\u4f8b:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"await expect(page.getByTestId('status')).toHaveText('Submitted');\n"})}),"\n",(0,l.jsxs)(t.p,{children:["Playwright \u5c07\u6703\u91cd\u65b0\u6e2c\u8a66\u5177\u6709 ",(0,l.jsx)(t.code,{children:"status"})," \u6e2c\u8a66 id \u7684\u5143\u7d20\uff0c\u76f4\u5230\u7372\u53d6\u7684\u5143\u7d20\u5177\u6709 ",(0,l.jsx)(t.code,{children:'"Submitted"'})," \u6587\u672c\u3002\u5b83\u6703\u91cd\u65b0\u7372\u53d6\u5143\u7d20\u4e26\u4e00\u904d\u53c8\u4e00\u904d\u5730\u6aa2\u67e5\uff0c\u76f4\u5230\u689d\u4ef6\u6eff\u8db3\u6216\u8d85\u6642\u70ba\u6b62\u3002\u4f60\u53ef\u4ee5\u50b3\u905e\u9019\u500b\u8d85\u6642\u6642\u9593\uff0c\u6216\u8005\u901a\u904e\u6e2c\u8a66\u914d\u7f6e\u4e2d\u7684 ",(0,l.jsx)(t.a,{href:"/docs/api/class-testconfig#test-config-expect",children:"testConfig.expect"})," \u503c\u4f86\u914d\u7f6e\u4e00\u6b21\u3002"]}),"\n",(0,l.jsxs)(t.p,{children:["\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u65b7\u8a00\u7684\u8d85\u6642\u6642\u9593\u8a2d\u7f6e\u70ba 5 \u79d2\u3002\u4e86\u89e3\u66f4\u591a\u95dc\u65bc",(0,l.jsx)(t.a,{href:"/docs/test-timeouts",children:"\u5404\u7a2e\u8d85\u6642"}),"\u3002"]}),"\n",(0,l.jsx)(t.h2,{id:"\u81ea\u52d5\u91cd\u8a66\u65b7\u8a00",children:"\u81ea\u52d5\u91cd\u8a66\u65b7\u8a00"}),"\n",(0,l.jsxs)(t.p,{children:["\u4ee5\u4e0b\u65b7\u8a00\u5c07\u91cd\u8a66\u76f4\u5230\u65b7\u8a00\u901a\u904e\uff0c\u6216\u9054\u5230\u65b7\u8a00\u8d85\u6642\u3002\u8acb\u6ce8\u610f\uff0c\u91cd\u8a66\u65b7\u8a00\u662f\u975e\u540c\u6b65\u7684\uff0c\u6240\u4ee5\u4f60\u5fc5\u9808 ",(0,l.jsx)(t.code,{children:"await"})," \u5b83\u5011\u3002"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Assertion"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-attached",children:"await expect(locator).toBeAttached()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5df2\u9644\u52a0"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-checked",children:"await expect(locator).toBeChecked()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u52fe\u9078\u6846\u5df2\u52fe\u9078"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-disabled",children:"await expect(locator).toBeDisabled()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5df2\u505c\u7528"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-editable",children:"await expect(locator).toBeEditable()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u53ef\u7de8\u8f2f"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-empty",children:"await expect(locator).toBeEmpty()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5bb9\u5668\u70ba\u7a7a"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-enabled",children:"await expect(locator).toBeEnabled()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5df2\u555f\u7528"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-focused",children:"await expect(locator).toBeFocused()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5df2\u805a\u7126"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-hidden",children:"await expect(locator).toBeHidden()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u4e0d\u53ef\u898b"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-in-viewport",children:"await expect(locator).toBeInViewport()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u8207\u8996\u53e3\u76f8\u4ea4"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-be-visible",children:"await expect(locator).toBeVisible()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u53ef\u898b"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-contain-text",children:"await expect(locator).toContainText()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5305\u542b\u6587\u5b57"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-accessible-description",children:"await expect(locator).toHaveAccessibleDescription()"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["\u5143\u7d20\u5177\u6709\u5339\u914d\u7684",(0,l.jsx)(t.a,{href:"https://w3c.github.io/accname/#dfn-accessible-description",children:"\u53ef\u8a2a\u554f\u63cf\u8ff0"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-accessible-name",children:"await expect(locator).toHaveAccessibleName()"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["\u5143\u7d20\u5177\u6709\u5339\u914d\u7684",(0,l.jsx)(t.a,{href:"https://w3c.github.io/accname/#dfn-accessible-name",children:"\u53ef\u8a2a\u554f\u540d\u7a31"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-attribute",children:"await expect(locator).toHaveAttribute()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5177\u6709 DOM \u5c6c\u6027"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-class",children:"await expect(locator).toHaveClass()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5177\u6709\u985e\u5225\u5c6c\u6027"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-count",children:"await expect(locator).toHaveCount()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5217\u8868\u5177\u6709\u78ba\u5207\u6578\u91cf\u7684\u5b50\u9805"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-css",children:"await expect(locator).toHaveCSS()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5177\u6709 CSS \u5c6c\u6027"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-id",children:"await expect(locator).toHaveId()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5177\u6709 ID"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-js-property",children:"await expect(locator).toHaveJSProperty()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5177\u6709 JavaScript \u5c6c\u6027"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-role",children:"await expect(locator).toHaveRole()"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["\u5143\u7d20\u5177\u6709\u7279\u5b9a\u7684",(0,l.jsx)(t.a,{href:"https://www.w3.org/TR/wai-aria-1.2/#roles",children:"ARIA \u89d2\u8272"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-screenshot-1",children:"await expect(locator).toHaveScreenshot()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5177\u6709\u622a\u5716"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-text",children:"await expect(locator).toHaveText()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5143\u7d20\u5339\u914d\u6587\u5b57"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-value",children:"await expect(locator).toHaveValue()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u8f38\u5165\u6846\u5177\u6709\u503c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-locatorassertions#locator-assertions-to-have-values",children:"await expect(locator).toHaveValues()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u9078\u64c7\u6846\u5177\u6709\u9078\u4e2d\u7684\u9078\u9805"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1",children:"await expect(page).toHaveScreenshot()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u9801\u9762\u5177\u6709\u622a\u5716"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-pageassertions#page-assertions-to-have-title",children:"await expect(page).toHaveTitle()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u9801\u9762\u5177\u6709\u6a19\u984c"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-pageassertions#page-assertions-to-have-url",children:"await expect(page).toHaveURL()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u9801\u9762\u5177\u6709 URL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-apiresponseassertions#api-response-assertions-to-be-ok",children:"await expect(response).toBeOK()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u56de\u61c9\u5177\u6709 OK \u72c0\u614b"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"\u975e\u91cd\u8a66\u65b7\u8a00",children:"\u975e\u91cd\u8a66\u65b7\u8a00"}),"\n",(0,l.jsx)(t.p,{children:"\u9019\u4e9b\u65b7\u8a00\u5141\u8a31\u6e2c\u8a66\u4efb\u610f\u689d\u4ef6\uff0c\u4f46\u4e0d\u6703\u81ea\u52d5\u91cd\u8a66\u3002\u5927\u591a\u6578\u6642\u5019\uff0c\u7db2\u9801\u6703\u7570\u6b65\u986f\u793a\u8cc7\u8a0a\uff0c\u4f7f\u7528\u4e0d\u91cd\u8a66\u7684\u65b7\u8a00\u53ef\u80fd\u6703\u5c0e\u81f4\u6e2c\u8a66\u4e0d\u7a69\u5b9a\u3002"}),"\n",(0,l.jsxs)(t.p,{children:["\u76e1\u53ef\u80fd\u504f\u597d",(0,l.jsx)(t.a,{href:"#auto-retrying-assertions",children:"\u81ea\u52d5\u91cd\u8a66"}),"\u65b7\u8a00\u3002\u5c0d\u65bc\u9700\u8981\u91cd\u8a66\u7684\u66f4\u8907\u96dc\u65b7\u8a00\uff0c\u4f7f\u7528",(0,l.jsx)(t.a,{href:"#expectpoll",children:(0,l.jsx)(t.code,{children:"expect.poll"})}),"\u6216",(0,l.jsx)(t.a,{href:"#expecttopass",children:(0,l.jsx)(t.code,{children:"expect.toPass"})}),"\u3002"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Assertion"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-be",children:"expect(value).toBe()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u503c\u662f\u76f8\u540c\u7684"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-be-close-to",children:"expect(value).toBeCloseTo()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u6578\u503c\u5927\u7d04\u76f8\u7b49"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-be-defined",children:"expect(value).toBeDefined()"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["\u503c\u4e0d\u662f ",(0,l.jsx)(t.code,{children:"undefined"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-be-falsy",children:"expect(value).toBeFalsy()"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["\u503c\u70ba\u5047\uff0c\u4f8b\u5982 ",(0,l.jsx)(t.code,{children:"false"}),"\u3001",(0,l.jsx)(t.code,{children:"0"}),"\u3001",(0,l.jsx)(t.code,{children:"null"})," \u7b49"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-be-greater-than",children:"expect(value).toBeGreaterThan()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u6578\u503c\u5927\u65bc"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-be-greater-than-or-equal",children:"expect(value).toBeGreaterThanOrEqual()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u6578\u503c\u5927\u65bc\u6216\u7b49\u65bc"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-be-instance-of",children:"expect(value).toBeInstanceOf()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u7269\u4ef6\u662f\u67d0\u500b\u985e\u5225\u7684\u5be6\u4f8b"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-be-less-than",children:"expect(value).toBeLessThan()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u6578\u503c\u5c0f\u65bc"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-be-less-than-or-equal",children:"expect(value).toBeLessThanOrEqual()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u6578\u503c\u5c0f\u65bc\u6216\u7b49\u65bc"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-be-na-n",children:"expect(value).toBeNaN()"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["\u503c\u662f ",(0,l.jsx)(t.code,{children:"NaN"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-be-null",children:"expect(value).toBeNull()"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["\u503c\u662f ",(0,l.jsx)(t.code,{children:"null"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-be-truthy",children:"expect(value).toBeTruthy()"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["\u503c\u70ba\u771f\uff0c\u5373\u4e0d\u662f ",(0,l.jsx)(t.code,{children:"false"}),"\u3001",(0,l.jsx)(t.code,{children:"0"}),"\u3001",(0,l.jsx)(t.code,{children:"null"})," \u7b49"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-be-undefined",children:"expect(value).toBeUndefined()"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["\u503c\u662f ",(0,l.jsx)(t.code,{children:"undefined"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-contain-1",children:"expect(value).toContain()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5b57\u4e32\u5305\u542b\u5b50\u5b57\u4e32"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-contain-2",children:"expect(value).toContain()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u9663\u5217\u6216\u96c6\u5408\u5305\u542b\u4e00\u500b\u5143\u7d20"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-contain-equal",children:"expect(value).toContainEqual()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u9663\u5217\u6216\u96c6\u5408\u5305\u542b\u4e00\u500b\u76f8\u4f3c\u7684\u5143\u7d20"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-equal",children:"expect(value).toEqual()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u503c\u662f\u76f8\u4f3c\u7684 - \u6df1\u5ea6\u76f8\u7b49\u548c\u6a21\u5f0f\u5339\u914d"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-have-length",children:"expect(value).toHaveLength()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u9663\u5217\u6216\u5b57\u4e32\u5177\u6709\u9577\u5ea6"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-have-property",children:"expect(value).toHaveProperty()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u7269\u4ef6\u5177\u6709\u4e00\u500b\u5c6c\u6027"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-match",children:"expect(value).toMatch()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5b57\u4e32\u5339\u914d\u6b63\u5247\u8868\u9054\u5f0f"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-match-object",children:"expect(value).toMatchObject()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u7269\u4ef6\u5305\u542b\u6307\u5b9a\u7684\u5c6c\u6027"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-strict-equal",children:"expect(value).toStrictEqual()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u503c\u662f\u76f8\u4f3c\u7684\uff0c\u5305\u62ec\u5c6c\u6027\u985e\u578b"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-to-throw",children:"expect(value).toThrow()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u51fd\u5f0f\u62cb\u51fa\u4e00\u500b\u932f\u8aa4"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-any",children:"expect(value).any()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5339\u914d\u4efb\u610f\u985e\u5225/\u539f\u59cb\u985e\u578b\u7684\u5be6\u4f8b"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-anything",children:"expect(value).anything()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5339\u914d\u4efb\u4f55\u6771\u897f"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-array-containing",children:"expect(value).arrayContaining()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u9663\u5217\u5305\u542b\u7279\u5b9a\u5143\u7d20"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-close-to",children:"expect(value).closeTo()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u6578\u503c\u5927\u7d04\u76f8\u7b49"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-object-containing",children:"expect(value).objectContaining()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u7269\u4ef6\u5305\u542b\u7279\u5b9a\u5c6c\u6027"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-string-containing",children:"expect(value).stringContaining()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5b57\u4e32\u5305\u542b\u5b50\u5b57\u4e32"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/api/class-genericassertions#generic-assertions-string-matching",children:"expect(value).stringMatching()"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"\u5b57\u4e32\u5339\u914d\u6b63\u5247\u8868\u9054\u5f0f"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"\u5426\u5b9a\u5339\u914d\u5668",children:"\u5426\u5b9a\u5339\u914d\u5668"}),"\n",(0,l.jsxs)(t.p,{children:["\u4e00\u822c\u4f86\u8aaa\uff0c\u6211\u5011\u53ef\u4ee5\u901a\u904e\u5728\u5339\u914d\u5668\u524d\u9762\u6dfb\u52a0 ",(0,l.jsx)(t.code,{children:".not"})," \u4f86\u9810\u671f\u76f8\u53cd\u7684\u7d50\u679c:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"expect(value).not.toEqual(0);\nawait expect(locator).not.toContainText('some text');\n"})}),"\n",(0,l.jsx)(t.h2,{id:"\u8edf\u6027\u65b7\u8a00",children:"\u8edf\u6027\u65b7\u8a00"}),"\n",(0,l.jsxs)(t.p,{children:["\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u65b7\u8a00\u5931\u6557\u5c07\u7d42\u6b62\u6e2c\u8a66\u57f7\u884c\u3002Playwright \u4e5f\u652f\u6301",(0,l.jsx)(t.em,{children:"\u8edf\u65b7\u8a00"}),"\uff1a\u8edf\u65b7\u8a00\u5931\u6557",(0,l.jsx)(t.strong,{children:"\u4e0d\u6703"}),"\u7d42\u6b62\u6e2c\u8a66\u57f7\u884c\uff0c\u4f46\u6703\u5c07\u6e2c\u8a66\u6a19\u8a18\u70ba\u5931\u6557\u3002"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"// Make a few checks that will not stop the test when failed...\nawait expect.soft(page.getByTestId('status')).toHaveText('Success');\nawait expect.soft(page.getByTestId('eta')).toHaveText('1 day');\n\n// ... and continue the test to check more things.\nawait page.getByRole('link', { name: 'next page' }).click();\nawait expect.soft(page.getByRole('heading', { name: 'Make another order' })).toBeVisible();\n"})}),"\n",(0,l.jsx)(t.p,{children:"\u5728\u6e2c\u8a66\u57f7\u884c\u7684\u4efb\u4f55\u6642\u5019\uff0c\u4f60\u53ef\u4ee5\u6aa2\u67e5\u662f\u5426\u6709\u4efb\u4f55\u8edf\u6027\u65b7\u8a00\u5931\u6557:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"// Make a few checks that will not stop the test when failed...\nawait expect.soft(page.getByTestId('status')).toHaveText('Success');\nawait expect.soft(page.getByTestId('eta')).toHaveText('1 day');\n\n// Avoid running further if there were soft assertion failures.\nexpect(test.info().errors).toHaveLength(0);\n"})}),"\n",(0,l.jsx)(t.p,{children:"\u6ce8\u610f\uff0c\u8edf\u65b7\u8a00\u50c5\u9069\u7528\u65bc Playwright \u6e2c\u8a66\u57f7\u884c\u5668\u3002"}),"\n",(0,l.jsx)(t.h2,{id:"\u81ea\u8a02-expect-\u8a0a\u606f",children:"\u81ea\u8a02 expect \u8a0a\u606f"}),"\n",(0,l.jsxs)(t.p,{children:["\u60a8\u53ef\u4ee5\u6307\u5b9a\u4e00\u500b\u81ea\u8a02\u7684\u9810\u671f\u8a0a\u606f\u4f5c\u70ba ",(0,l.jsx)(t.code,{children:"expect"})," \u51fd\u5f0f\u7684\u7b2c\u4e8c\u500b\u53c3\u6578\uff0c\u4f8b\u5982:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"await expect(page.getByText('Name'), 'should be logged in').toBeVisible();\n"})}),"\n",(0,l.jsx)(t.p,{children:"\u6b64\u8a0a\u606f\u5c07\u986f\u793a\u5728\u5831\u544a\u4e2d\uff0c\u7121\u8ad6\u662f\u901a\u904e\u9084\u662f\u5931\u6557\u7684\u671f\u671b\uff0c\u63d0\u4f9b\u6709\u95dc\u65b7\u8a00\u7684\u66f4\u591a\u4e0a\u4e0b\u6587\u3002"}),"\n",(0,l.jsx)(t.p,{children:"\u7576 expect \u901a\u904e\u6642\uff0c\u4f60\u53ef\u80fd\u6703\u770b\u5230\u50cf\u9019\u6a23\u7684\u6210\u529f\u6b65\u9a5f:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-txt",children:"\u2705 should be logged in    @example.spec.ts:18\n"})}),"\n",(0,l.jsx)(t.p,{children:"\u7576 expect \u5931\u6557\u6642\uff0c\u932f\u8aa4\u6703\u770b\u8d77\u4f86\u50cf\u9019\u6a23:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"    Error: should be logged in\n\n    Call log:\n      - expect.toBeVisible with timeout 5000ms\n      - waiting for \"getByText('Name')\"\n\n\n      2 |\n      3 | test('example test', async({ page }) => {\n    > 4 |   await expect(page.getByText('Name'), 'should be logged in').toBeVisible();\n        |                                                                  ^\n      5 | });\n      6 |\n"})}),"\n",(0,l.jsx)(t.p,{children:"\u8edf\u6027\u65b7\u8a00\u4e5f\u652f\u6301\u81ea\u8a02\u8a0a\u606f:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"expect.soft(value, 'my soft assertion').toBe(56);\n"})}),"\n",(0,l.jsx)(t.h2,{id:"expectconfigure",children:"expect.configure"}),"\n",(0,l.jsxs)(t.p,{children:["\u4f60\u53ef\u4ee5\u5efa\u7acb\u4f60\u81ea\u5df1\u7684\u9810\u5148\u914d\u7f6e\u7684 ",(0,l.jsx)(t.code,{children:"expect"})," \u5be6\u4f8b\uff0c\u4ee5\u64c1\u6709\u5176\u81ea\u5df1\u7684\u9810\u8a2d\u503c\uff0c\u4f8b\u5982 ",(0,l.jsx)(t.code,{children:"timeout"})," \u548c ",(0,l.jsx)(t.code,{children:"soft"}),"\u3002"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"const slowExpect = expect.configure({ timeout: 10000 });\nawait slowExpect(locator).toHaveText('Submit');\n\n// Always do soft assertions.\nconst softExpect = expect.configure({ soft: true });\nawait softExpect(locator).toHaveText('Submit');\n"})}),"\n",(0,l.jsx)(t.h2,{id:"expectpoll",children:"expect.poll"}),"\n",(0,l.jsxs)(t.p,{children:["\u4f60\u53ef\u4ee5\u5c07\u4efb\u4f55\u540c\u6b65\u7684 ",(0,l.jsx)(t.code,{children:"expect"})," \u8f49\u63db\u70ba\u975e\u540c\u6b65\u7684\u8f2a\u8a62\uff0c\u4f7f\u7528 ",(0,l.jsx)(t.code,{children:"expect.poll"}),"\u3002"]}),"\n",(0,l.jsx)(t.p,{children:"\u4ee5\u4e0b\u65b9\u6cd5\u5c07\u8f2a\u8a62\u7d66\u5b9a\u51fd\u5f0f\u76f4\u5230\u5b83\u8fd4\u56de HTTP \u72c0\u614b 200:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"await expect.poll(async () => {\n  const response = await page.request.get('https://api.example.com');\n  return response.status();\n}, {\n  // Custom expect message for reporting, optional.\n  message: 'make sure API eventually succeeds',\n  // Poll for 10 seconds; defaults to 5 seconds. Pass 0 to disable timeout.\n  timeout: 10000,\n}).toBe(200);\n"})}),"\n",(0,l.jsx)(t.p,{children:"\u60a8\u4e5f\u53ef\u4ee5\u6307\u5b9a\u81ea\u8a02\u7684\u8f2a\u8a62\u9593\u9694:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"await expect.poll(async () => {\n  const response = await page.request.get('https://api.example.com');\n  return response.status();\n}, {\n  // Probe, wait 1s, probe, wait 2s, probe, wait 10s, probe, wait 10s, probe\n  // ... Defaults to [100, 250, 500, 1000].\n  intervals: [1_000, 2_000, 10_000],\n  timeout: 60_000\n}).toBe(200);\n"})}),"\n",(0,l.jsx)(t.h2,{id:"expecttopass",children:"expect.toPass"}),"\n",(0,l.jsx)(t.p,{children:"\u4f60\u53ef\u4ee5\u91cd\u8a66\u7a0b\u5f0f\u78bc\u5340\u584a\u76f4\u5230\u5b83\u5011\u6210\u529f\u901a\u904e\u3002"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"await expect(async () => {\n  const response = await page.request.get('https://api.example.com');\n  expect(response.status()).toBe(200);\n}).toPass();\n"})}),"\n",(0,l.jsx)(t.p,{children:"\u60a8\u4e5f\u53ef\u4ee5\u6307\u5b9a\u81ea\u8a02\u7684\u903e\u6642\u548c\u91cd\u8a66\u9593\u9694:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"await expect(async () => {\n  const response = await page.request.get('https://api.example.com');\n  expect(response.status()).toBe(200);\n}).toPass({\n  // Probe, wait 1s, probe, wait 2s, probe, wait 10s, probe, wait 10s, probe\n  // ... Defaults to [100, 250, 500, 1000].\n  intervals: [1_000, 2_000, 10_000],\n  timeout: 60_000\n});\n"})}),"\n",(0,l.jsxs)(t.p,{children:["\u8acb\u6ce8\u610f\uff0c\u9810\u8a2d\u60c5\u6cc1\u4e0b ",(0,l.jsx)(t.code,{children:"toPass"})," \u7684\u8d85\u6642\u6642\u9593\u70ba 0\uff0c\u4e14\u4e0d\u6703\u9075\u5faa\u81ea\u8a02\u7684 ",(0,l.jsx)(t.a,{href:"/docs/test-timeouts#expect-timeout",children:"expect timeout"}),"\u3002"]}),"\n",(0,l.jsx)(t.h2,{id:"\u4f7f\u7528-expectextend-\u6dfb\u52a0\u81ea\u5b9a\u7fa9\u5339\u914d\u5668",children:"\u4f7f\u7528 expect.extend \u6dfb\u52a0\u81ea\u5b9a\u7fa9\u5339\u914d\u5668"}),"\n",(0,l.jsxs)(t.p,{children:["\u4f60\u53ef\u4ee5\u900f\u904e\u63d0\u4f9b\u81ea\u8a02\u5339\u914d\u5668\u4f86\u64f4\u5c55 Playwright \u65b7\u8a00\u3002\u9019\u4e9b\u5339\u914d\u5668\u5c07\u53ef\u7528\u65bc ",(0,l.jsx)(t.code,{children:"expect"})," \u7269\u4ef6\u3002"]}),"\n",(0,l.jsxs)(t.p,{children:["\u5728\u9019\u500b\u7bc4\u4f8b\u4e2d\uff0c\u6211\u5011\u6dfb\u52a0\u4e86\u4e00\u500b\u81ea\u5b9a\u7fa9\u7684 ",(0,l.jsx)(t.code,{children:"toHaveAmount"})," \u51fd\u5f0f\u3002\u81ea\u5b9a\u7fa9\u5339\u914d\u5668\u61c9\u8a72\u8fd4\u56de\u4e00\u500b ",(0,l.jsx)(t.code,{children:"message"})," \u56de\u8abf\u548c\u4e00\u500b ",(0,l.jsx)(t.code,{children:"pass"})," \u65d7\u6a19\uff0c\u6307\u793a\u65b7\u8a00\u662f\u5426\u901a\u904e\u3002"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",metastring:'title="fixtures.ts"',children:"import { expect as baseExpect } from '@playwright/test';\nimport type { Page, Locator } from '@playwright/test';\n\nexport { test } from '@playwright/test';\n\nexport const expect = baseExpect.extend({\n  async toHaveAmount(locator: Locator, expected: number, options?: { timeout?: number }) {\n    const assertionName = 'toHaveAmount';\n    let pass: boolean;\n    let matcherResult: any;\n    try {\n      await baseExpect(locator).toHaveAttribute('data-amount', String(expected), options);\n      pass = true;\n    } catch (e: any) {\n      matcherResult = e.matcherResult;\n      pass = false;\n    }\n\n    const message = pass\n      ? () => this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +\n          '\\n\\n' +\n          `Locator: ${locator}\\n` +\n          `Expected: ${this.isNot ? 'not' : ''}${this.utils.printExpected(expected)}\\n` +\n          (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '')\n      : () =>  this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +\n          '\\n\\n' +\n          `Locator: ${locator}\\n` +\n          `Expected: ${this.utils.printExpected(expected)}\\n` +\n          (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '');\n\n    return {\n      message,\n      pass,\n      name: assertionName,\n      expected,\n      actual: matcherResult?.actual,\n    };\n  },\n});\n"})}),"\n",(0,l.jsxs)(t.p,{children:["\u73fe\u5728\u6211\u5011\u53ef\u4ee5\u5728\u6e2c\u8a66\u4e2d\u4f7f\u7528 ",(0,l.jsx)(t.code,{children:"toHaveAmount"}),"\u3002"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",metastring:'title="example.spec.ts"',children:"import { test, expect } from './fixtures';\n\ntest('amount', async () => {\n  await expect(page.locator('.cart')).toHaveAmount(4);\n});\n"})}),"\n",(0,l.jsx)(t.h3,{id:"\u8207-expect-\u51fd\u5f0f\u5eab\u7684\u76f8\u5bb9\u6027",children:"\u8207 expect \u51fd\u5f0f\u5eab\u7684\u76f8\u5bb9\u6027"}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsxs)(t.p,{children:["\u4e0d\u8981\u5c07 Playwright \u7684 ",(0,l.jsx)(t.code,{children:"expect"})," \u8207 ",(0,l.jsxs)(t.a,{href:"https://jestjs.io/docs/expect",children:[(0,l.jsx)(t.code,{children:"expect"})," \u51fd\u5f0f\u5eab"]})," \u6df7\u6dc6\u3002\u5f8c\u8005\u4e26\u672a\u5b8c\u5168\u6574\u5408\u5230 Playwright \u6e2c\u8a66\u57f7\u884c\u5668\u4e2d\uff0c\u56e0\u6b64\u8acb\u78ba\u4fdd\u4f7f\u7528 Playwright \u81ea\u5df1\u7684 ",(0,l.jsx)(t.code,{children:"expect"}),"\u3002"]})}),"\n",(0,l.jsx)(t.h3,{id:"\u7d50\u5408\u4f86\u81ea\u591a\u500b\u6a21\u7d44\u7684\u81ea\u8a02\u5339\u914d\u5668",children:"\u7d50\u5408\u4f86\u81ea\u591a\u500b\u6a21\u7d44\u7684\u81ea\u8a02\u5339\u914d\u5668"}),"\n",(0,l.jsx)(t.p,{children:"\u4f60\u53ef\u4ee5\u7d50\u5408\u4f86\u81ea\u591a\u500b\u6a94\u6848\u6216\u6a21\u7d44\u7684\u81ea\u8a02\u5339\u914d\u5668\u3002"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",metastring:'title="fixtures.ts"',children:"import { mergeTests, mergeExpects } from '@playwright/test';\nimport { test as dbTest, expect as dbExpect } from 'database-test-utils';\nimport { test as a11yTest, expect as a11yExpect } from 'a11y-test-utils';\n\nexport const expect = mergeExpects(dbExpect, a11yExpect);\nexport const test = mergeTests(dbTest, a11yTest);\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",metastring:'title="test.spec.ts"',children:"import { test, expect } from './fixtures';\n\ntest('passes', async ({ database }) => {\n  await expect(database).toHaveDatabaseUser('admin');\n});\n"})})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);