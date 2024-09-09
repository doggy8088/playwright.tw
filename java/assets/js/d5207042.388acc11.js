"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6715],{664:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>h});var t=a(4848),i=a(8453);a(4235),a(8328),a(3078);const n={id:"multithreading",title:"\u591a\u57f7\u884c\u7dd2"},s=void 0,o={id:"multithreading",title:"\u591a\u57f7\u884c\u7dd2",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/threading.mdx",sourceDirName:".",slug:"/multithreading",permalink:"/java/docs/multithreading",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"multithreading",title:"\u591a\u57f7\u884c\u7dd2"},sidebar:"docs",previous:{title:"\u6a21\u64ec API",permalink:"/java/docs/mock"},next:{title:"\u5c0e\u822a",permalink:"/java/docs/navigations"}},l={},h=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u540c\u6b65 API \u548c\u4e8b\u4ef6\u5206\u6d3e",id:"\u540c\u6b65-api-\u548c\u4e8b\u4ef6\u5206\u6d3e",level:2},{value:"Page.waitForTimeout() vs. Thread.sleep()",id:"pagewaitfortimeout-vs-threadsleep",level:3}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,t.jsxs)(r.p,{children:["Playwright Java \u4e26\u4e0d\u662f\u57f7\u884c\u7dd2\u5b89\u5168\u7684\uff0c\u4e5f\u5c31\u662f\u8aaa\uff0c\u6240\u6709\u5176\u65b9\u6cd5\u4ee5\u53ca\u6240\u6709\u7531\u5176\u5efa\u7acb\u7684\u7269\u4ef6\uff08\u4f8b\u5982 ",(0,t.jsx)(r.a,{href:"/java/docs/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"}),"\u3001",(0,t.jsx)(r.a,{href:"/java/docs/api/class-browser",title:"Browser",children:"Browser"}),"\u3001",(0,t.jsx)(r.a,{href:"/java/docs/api/class-page",title:"Page",children:"Page"})," \u7b49\uff09\u90fd\u61c9\u8a72\u5728\u5efa\u7acb Playwright \u7269\u4ef6\u7684\u540c\u4e00\u57f7\u884c\u7dd2\u4e0a\u547c\u53eb\uff0c\u6216\u8005\u61c9\u5be6\u4f5c\u9069\u7576\u7684\u540c\u6b65\u5316\u4ee5\u78ba\u4fdd\u5728\u4efb\u4f55\u7d66\u5b9a\u6642\u9593\u53ea\u6709\u4e00\u500b\u57f7\u884c\u7dd2\u547c\u53eb Playwright \u65b9\u6cd5\u3002\u8a71\u96d6\u5982\u6b64\uff0c\u53ef\u4ee5\u5728\u5404\u81ea\u7684\u57f7\u884c\u7dd2\u4e0a\u5efa\u7acb\u591a\u500b Playwright \u5be6\u4f8b\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"\u9019\u88e1\u662f\u4e00\u500b\u7bc4\u4f8b\uff0c\u5176\u4e2d\u4e09\u500b Playwright \u5be6\u4f8b\u5206\u5225\u5728\u5404\u81ea\u7684\u57f7\u884c\u7dd2\u4e0a\u5efa\u7acb\u3002\u6bcf\u500b\u5be6\u4f8b\u555f\u52d5\u81ea\u5df1\u7684\u700f\u89bd\u5668\u7a0b\u5e8f\u4e26\u5c0d\u5176\u9032\u884c\u6e2c\u8a66\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'package org.example;\n\nimport com.microsoft.playwright.*;\n\nimport java.nio.file.Paths;\n\nimport static java.util.Arrays.asList;\n\npublic class PlaywrightThread extends Thread {\n  private final String browserName;\n\n  private PlaywrightThread(String browserName) {\n    this.browserName = browserName;\n  }\n\n  public static void main(String[] args) throws InterruptedException {\n    // Create separate playwright thread for each browser.\n    for (String browserName: asList("chromium", "webkit", "firefox")) {\n      Thread thread = new PlaywrightThread(browserName);\n      thread.start();\n    }\n  }\n\n  @Override\n  public void run() {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType browserType = getBrowserType(playwright, browserName);\n      Browser browser = browserType.launch();\n      Page page = browser.newPage();\n      page.navigate("https://playwright.dev/");\n      page.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("user-agent-" + browserName + ".png")));\n    }\n  }\n\n  private static BrowserType getBrowserType(Playwright playwright, String browserName) {\n    switch (browserName) {\n      case "chromium":\n        return playwright.chromium();\n      case "webkit":\n        return playwright.webkit();\n      case "firefox":\n        return playwright.firefox();\n      default:\n        throw new IllegalArgumentException();\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"\u540c\u6b65-api-\u548c\u4e8b\u4ef6\u5206\u6d3e",children:"\u540c\u6b65 API \u548c\u4e8b\u4ef6\u5206\u6d3e"}),"\n",(0,t.jsxs)(r.p,{children:["\u5728\u540c\u6b65\u7684 Playwright API \u4e2d\uff0c\u6240\u6709\u4e8b\u4ef6\u50c5\u5728 Playwright \u57f7\u884c\u5176\u8a0a\u606f\u8ff4\u5708\u6642\u624d\u6703\u88ab\u5206\u6d3e\u3002\u7576\u4f60\u547c\u53eb\u4efb\u4f55 API \u65b9\u6cd5\u6642\uff0c\u9019\u6703\u81ea\u52d5\u767c\u751f\uff0c\u5982\u679c\u5806\u758a\u4e0a\u6c92\u6709\u6d3b\u8e8d\u7684 Playwright \u547c\u53eb\uff0c\u5247\u4e0d\u6703\u767c\u751f\u3002\u5982\u679c\u4f60\u9700\u8981\u7b49\u5f85\u4e00\u500b\u4e8b\u4ef6\uff0c\u6700\u597d\u7684\u65b9\u6cd5\u662f\u901a\u904e ",(0,t.jsx)(r.code,{children:"waitFor*"})," \u65b9\u6cd5\u4e4b\u4e00\u4f86\u5b8c\u6210\u3002"]}),"\n",(0,t.jsx)(r.h3,{id:"pagewaitfortimeout-vs-threadsleep",children:"Page.waitForTimeout() vs. Thread.sleep()"}),"\n",(0,t.jsxs)(r.p,{children:["\u540c\u6b65 API \u7684\u4e00\u500b\u5f8c\u679c\u662f\uff0c\u5982\u679c\u4f60\u56e0\u70ba\u67d0\u7a2e\u539f\u56e0\u547c\u53eb ",(0,t.jsx)(r.code,{children:"Thread.sleep()"}),"\uff0c\u90a3\u9ebc\u7576\u57f7\u884c\u7dd2\u5728\u7761\u7720\u6642\u4e0d\u6703\u89f8\u767c\u4efb\u4f55\u4e8b\u4ef6\u3002\u5982\u679c\u4f60\u5e0c\u671b\u5728\u7a0b\u5f0f\u57f7\u884c\u6642\u5f9e\u700f\u89bd\u5668\u5206\u6d3e\u4e8b\u4ef6"]}),"\n",(0,t.jsxs)(r.p,{children:["\u57f7\u884c\u5df2\u66ab\u505c\u4f7f\u7528 ",(0,t.jsx)(r.a,{href:"/java/docs/api/class-page#page-wait-for-timeout",children:"Page.waitForTimeout()"})," \u6216 ",(0,t.jsx)(r.a,{href:"/java/docs/api/class-frame#frame-wait-for-timeout",children:"Frame.waitForTimeout()"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'page.onResponse(response -> System.out.println(response.url()));\npage.navigate("https://playwright.dev");\nSystem.out.println("-- did navigate --");\n// Block current thread for 60s and ensure the events are dispatched.\npage.waitForTimeout(60_000);\n'})})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);