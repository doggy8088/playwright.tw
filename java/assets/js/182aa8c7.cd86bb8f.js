"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6518],{4772:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(4848),o=r(8453);r(4235),r(8328),r(3078);const i={id:"class-timeouterror",title:"TimeoutError"},n=void 0,s={id:"api/class-timeouterror",title:"TimeoutError",description:"* extends: [PlaywrightException]",source:"@site/docs/api/class-timeouterror.mdx",sourceDirName:"api",slug:"/api/class-timeouterror",permalink:"/java/docs/next/api/class-timeouterror",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-timeouterror",title:"TimeoutError"},sidebar:"api",previous:{title:"Selectors",permalink:"/java/docs/next/api/class-selectors"},next:{title:"Touchscreen",permalink:"/java/docs/next/api/class-touchscreen"}},c={},l=[];function p(e){const t={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["extends: ",(0,a.jsx)(t.a,{href:"/java/docs/next/api/class-playwrightexception",title:"PlaywrightException",children:"PlaywrightException"})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["TimeoutError is emitted whenever certain operations are terminated due to timeout, e.g. ",(0,a.jsx)(t.a,{href:"/java/docs/next/api/class-locator#locator-wait-for",children:"Locator.waitFor()"})," or ",(0,a.jsx)(t.a,{href:"/java/docs/next/api/class-browsertype#browser-type-launch",children:"BrowserType.launch()"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'package org.example;\n\nimport com.microsoft.playwright.*;\n\npublic class TimeoutErrorExample {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      Browser browser = playwright.firefox().launch();\n      BrowserContext context = browser.newContext();\n      Page page = context.newPage();\n      try {\n        page.locator("text=Example").click(new Locator.ClickOptions().setTimeout(100));\n      } catch (TimeoutError e) {\n        System.out.println("Timeout!");\n      }\n    }\n  }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}}}]);