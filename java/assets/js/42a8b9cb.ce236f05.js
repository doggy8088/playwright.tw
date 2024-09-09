"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6946],{9031:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=a(4848),n=a(8453);a(4235),a(8328),a(3078);const i={id:"multithreading",title:"Multithreading"},s=void 0,o={id:"multithreading",title:"Multithreading",description:"Introduction",source:"@site/docs/threading.mdx",sourceDirName:".",slug:"/multithreading",permalink:"/java/docs/next/multithreading",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"multithreading",title:"Multithreading"},sidebar:"docs",previous:{title:"Mock APIs",permalink:"/java/docs/next/mock"},next:{title:"Navigations",permalink:"/java/docs/next/navigations"}},h={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Synchronous API and event dispatching",id:"synchronous-api-and-event-dispatching",level:2},{value:"Page.waitForTimeout() vs. Thread.sleep()",id:"pagewaitfortimeout-vs-threadsleep",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(t.p,{children:["Playwright Java is not thread safe, i.e. all its methods as well as methods on all objects created by it (such as ",(0,r.jsx)(t.a,{href:"/java/docs/next/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"}),", ",(0,r.jsx)(t.a,{href:"/java/docs/next/api/class-browser",title:"Browser",children:"Browser"}),", ",(0,r.jsx)(t.a,{href:"/java/docs/next/api/class-page",title:"Page",children:"Page"})," etc.) are expected to be called on the same thread where the Playwright object was created or proper synchronization should be implemented to ensure only one thread calls Playwright methods at any given time. Having said that it's okay to create multiple Playwright instances each on its own thread."]}),"\n",(0,r.jsx)(t.p,{children:"Here is an example where three playwright instances are created each on its own thread. Each instance launches its own browser process and runs the test against it."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'package org.example;\n\nimport com.microsoft.playwright.*;\n\nimport java.nio.file.Paths;\n\nimport static java.util.Arrays.asList;\n\npublic class PlaywrightThread extends Thread {\n  private final String browserName;\n\n  private PlaywrightThread(String browserName) {\n    this.browserName = browserName;\n  }\n\n  public static void main(String[] args) throws InterruptedException {\n    // Create separate playwright thread for each browser.\n    for (String browserName: asList("chromium", "webkit", "firefox")) {\n      Thread thread = new PlaywrightThread(browserName);\n      thread.start();\n    }\n  }\n\n  @Override\n  public void run() {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType browserType = getBrowserType(playwright, browserName);\n      Browser browser = browserType.launch();\n      Page page = browser.newPage();\n      page.navigate("https://playwright.dev/");\n      page.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("user-agent-" + browserName + ".png")));\n    }\n  }\n\n  private static BrowserType getBrowserType(Playwright playwright, String browserName) {\n    switch (browserName) {\n      case "chromium":\n        return playwright.chromium();\n      case "webkit":\n        return playwright.webkit();\n      case "firefox":\n        return playwright.firefox();\n      default:\n        throw new IllegalArgumentException();\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"synchronous-api-and-event-dispatching",children:"Synchronous API and event dispatching"}),"\n",(0,r.jsxs)(t.p,{children:["In the synchronous Playwright API all events are dispatched only when Playwright is running its message loop. This happens automatically when you call any of the API methods and doesn't happen if there are no active Playwright calls on the stack. If you need to wait for an event the best way to do this is via one of the ",(0,r.jsx)(t.code,{children:"waitFor*"})," methods."]}),"\n",(0,r.jsx)(t.h3,{id:"pagewaitfortimeout-vs-threadsleep",children:"Page.waitForTimeout() vs. Thread.sleep()"}),"\n",(0,r.jsxs)(t.p,{children:["One consequence of the synchronous API is that if you for whatever reason call ",(0,r.jsx)(t.code,{children:"Thread.sleep()"})," no events will be fired while the thread is sleeping. If you want events from the browser to be dispatched while the program"]}),"\n",(0,r.jsxs)(t.p,{children:["execution is paused use ",(0,r.jsx)(t.a,{href:"/java/docs/next/api/class-page#page-wait-for-timeout",children:"Page.waitForTimeout()"})," or ",(0,r.jsx)(t.a,{href:"/java/docs/next/api/class-frame#frame-wait-for-timeout",children:"Frame.waitForTimeout()"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'page.onResponse(response -> System.out.println(response.url()));\npage.navigate("https://playwright.dev");\nSystem.out.println("-- did navigate --");\n// Block current thread for 60s and ensure the events are dispatched.\npage.waitForTimeout(60_000);\n'})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);