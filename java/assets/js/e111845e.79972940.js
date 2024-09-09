"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5497],{7645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(4848),s=n(8453);n(4235),n(8328),n(3078);const i={id:"running-tests",title:"\u57f7\u884c\u548c\u5075\u932f\u6e2c\u8a66"},a=void 0,o={id:"running-tests",title:"\u57f7\u884c\u548c\u5075\u932f\u6e2c\u8a66",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/running-tests.mdx",sourceDirName:".",slug:"/running-tests",permalink:"/java/docs/running-tests",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"running-tests",title:"\u57f7\u884c\u548c\u5075\u932f\u6e2c\u8a66"},sidebar:"docs",previous:{title:"\u751f\u6210\u6e2c\u8a66",permalink:"/java/docs/codegen-intro"},next:{title:"\u8ffd\u8e64\u6aa2\u8996\u5668",permalink:"/java/docs/trace-viewer-intro"}},l={},c=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u5728\u6709\u982d\u6a21\u5f0f\u4e0b\u57f7\u884c\u6e2c\u8a66",id:"\u5728\u6709\u982d\u6a21\u5f0f\u4e0b\u57f7\u884c\u6e2c\u8a66",level:3},{value:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,r.jsxs)(t.p,{children:["Playwright \u6e2c\u8a66\u53ef\u4ee5\u901a\u904e\u591a\u7a2e\u65b9\u5f0f\u57f7\u884c\u3002\u6211\u5011\u5efa\u8b70\u5c07\u5176\u9023\u63a5\u5230\u60a8\u559c\u611b\u7684\u6e2c\u8a66\u57f7\u884c\u5668\uff0c\u4f8b\u5982 ",(0,r.jsx)(t.a,{href:"/java/docs/test-runners",children:"JUnit"}),"\uff0c\u56e0\u70ba\u5b83\u4f7f\u60a8\u80fd\u5920\u5e73\u884c\u57f7\u884c\u6e2c\u8a66\u3001\u57f7\u884c\u55ae\u500b\u6e2c\u8a66\u7b49\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["\u4f60\u53ef\u4ee5\u57f7\u884c\u55ae\u4e00\u6e2c\u8a66\u3001\u4e00\u7d44\u6e2c\u8a66\u6216\u6240\u6709\u6e2c\u8a66\u3002\u6e2c\u8a66\u53ef\u4ee5\u5728\u4e00\u500b\u700f\u89bd\u5668\u6216\u591a\u500b\u700f\u89bd\u5668\u4e0a\u57f7\u884c\u3002\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u6e2c\u8a66\u4ee5\u7121\u982d\u6a21\u5f0f\u57f7\u884c\uff0c\u9019\u610f\u5473\u8457\u5728\u57f7\u884c\u6e2c\u8a66\u6642\u4e0d\u6703\u6253\u958b\u700f\u89bd\u5668\u8996\u7a97\uff0c\u7d50\u679c\u6703\u986f\u793a\u5728\u7d42\u7aef\u6a5f\u3002\u5982\u679c\u4f60\u9858\u610f\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"launch(new BrowserType.LaunchOptions().setHeadless(false))"})," \u9078\u9805\u4ee5\u6709\u982d\u6a21\u5f0f\u57f7\u884c\u6e2c\u8a66\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["\u5728 ",(0,r.jsx)(t.a,{href:"https://junit.org/junit5/",children:"JUnit"})," \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,r.jsx)(t.a,{href:"https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/BeforeAll.html",children:"@BeforeAll"})," \u65b9\u6cd5\u4e2d\u521d\u59cb\u5316 ",(0,r.jsx)(t.a,{href:"/java/docs/api/class-playwright",title:"Playwright",children:"Playwright"})," \u548c ",(0,r.jsx)(t.a,{href:"/java/docs/api/class-browser",title:"Browser",children:"Browser"}),"\uff0c\u4e26\u5728 ",(0,r.jsx)(t.a,{href:"https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/AfterAll.html",children:"@AfterAll"})," \u4e2d\u92b7\u6bc0\u5b83\u5011\u3002\u5728\u4e0b\u9762\u7684\u7bc4\u4f8b\u4e2d\uff0c\u6240\u6709\u4e09\u500b\u6e2c\u8a66\u65b9\u6cd5\u4f7f\u7528\u76f8\u540c\u7684 ",(0,r.jsx)(t.a,{href:"/java/docs/api/class-browser",title:"Browser",children:"Browser"}),"\u3002\u6bcf\u500b\u6e2c\u8a66\u4f7f\u7528\u5176\u81ea\u5df1\u7684 ",(0,r.jsx)(t.a,{href:"/java/docs/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"})," \u548c ",(0,r.jsx)(t.a,{href:"/java/docs/api/class-page",title:"Page",children:"Page"}),"\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'package org.example;\n\nimport com.microsoft.playwright.Browser;\nimport com.microsoft.playwright.BrowserContext;\nimport com.microsoft.playwright.Page;\nimport com.microsoft.playwright.Playwright;\nimport org.junit.jupiter.api.*;\n\nimport static org.junit.jupiter.api.Assertions.assertEquals;\nimport static org.junit.jupiter.api.Assertions.assertTrue;\n\npublic class TestExample {\n  // Shared between all tests in this class.\n  static Playwright playwright;\n  static Browser browser;\n\n  // New instance for each test method.\n  BrowserContext context;\n  Page page;\n\n  @BeforeAll\n  static void launchBrowser() {\n    playwright = Playwright.create();\n    browser = playwright.chromium().launch();\n  }\n\n  @AfterAll\n  static void closeBrowser() {\n    playwright.close();\n  }\n\n  @BeforeEach\n  void createContextAndPage() {\n    context = browser.newContext();\n    page = context.newPage();\n  }\n\n  @AfterEach\n  void closeContext() {\n    context.close();\n  }\n\n  @Test\n  void shouldClickButton() {\n    page.navigate("data:text/html,<script>var result;<\/script><button onclick=\'result=\\"Clicked\\"\'>Go</button>");\n    page.locator("button").click();\n    assertEquals("Clicked", page.evaluate("result"));\n  }\n\n  @Test\n  void shouldCheckTheBox() {\n    page.setContent("<input id=\'checkbox\' type=\'checkbox\'></input>");\n    page.locator("input").check();\n    assertTrue((Boolean) page.evaluate("() => window[\'checkbox\'].checked"));\n  }\n\n  @Test\n  void shouldSearchWiki() {\n    page.navigate("https://www.wikipedia.org/");\n    page.locator("input[name=\\"search\\"]").click();\n    page.locator("input[name=\\"search\\"]").fill("playwright");\n    page.locator("input[name=\\"search\\"]").press("Enter");\n    assertEquals("https://en.wikipedia.org/wiki/Playwright", page.url());\n  }\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["\u8acb\u53c3\u898b",(0,r.jsx)(t.a,{href:"/java/docs/test-runners",children:"\u6b64\u8655"}),"\u4e86\u89e3\u6709\u95dc\u5982\u4f55\u5e73\u884c\u57f7\u884c\u6e2c\u8a66\u7b49\u7684\u66f4\u591a\u8a73\u7d30\u8cc7\u8a0a\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["\u8acb\u53c3\u95b1\u5be6\u9a57\u6027 ",(0,r.jsx)(t.a,{href:"/java/docs/junit",children:"JUnit integration"})," \u4ee5\u81ea\u52d5\u521d\u59cb\u5316 Playwright \u7269\u4ef6\u53ca\u66f4\u591a\u3002"]}),"\n",(0,r.jsx)(t.h3,{id:"\u5728\u6709\u982d\u6a21\u5f0f\u4e0b\u57f7\u884c\u6e2c\u8a66",children:"\u5728\u6709\u982d\u6a21\u5f0f\u4e0b\u57f7\u884c\u6e2c\u8a66"}),"\n",(0,r.jsxs)(t.p,{children:["\u5982\u679c\u4f60\u9858\u610f\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"launch(new BrowserType.LaunchOptions().setHeadless(false))"})," \u9078\u9805\u5728\u6709\u982d\u6a21\u5f0f\u4e0b\u57f7\u884c\u4f60\u7684\u6e2c\u8a66\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",children:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/java/docs/debug",children:"\u5075\u932f\u6e2c\u8a66"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/java/docs/codegen",children:"\u4f7f\u7528\u7a0b\u5f0f\u78bc\u7522\u751f\u5668\u751f\u6210\u6e2c\u8a66"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/java/docs/trace-viewer-intro",children:"\u67e5\u770b\u6e2c\u8a66\u7684\u8ffd\u8e64"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);