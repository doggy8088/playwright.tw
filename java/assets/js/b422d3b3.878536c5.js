"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5531],{9677:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=a(4848),n=a(8453);a(4235),a(8328),a(3078);const l={id:"class-dialog",title:"Dialog"},r=void 0,d={id:"api/class-dialog",title:"Dialog",description:"Dialog] objects are dispatched by page via the [Page.onDialog(handler) event.",source:"@site/docs/api/class-dialog.mdx",sourceDirName:"api",slug:"/api/class-dialog",permalink:"/java/docs/next/api/class-dialog",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-dialog",title:"Dialog"},sidebar:"api",previous:{title:"ConsoleMessage",permalink:"/java/docs/next/api/class-consolemessage"},next:{title:"Download",permalink:"/java/docs/next/api/class-download"}},t={},c=[{value:"Methods",id:"methods",level:2},{value:"accept",id:"dialog-accept",level:3},{value:"defaultValue",id:"dialog-default-value",level:3},{value:"dismiss",id:"dialog-dismiss",level:3},{value:"message",id:"dialog-message",level:3},{value:"page",id:"dialog-page",level:3},{value:"type",id:"dialog-type",level:3}];function o(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/java/docs/next/api/class-dialog",title:"Dialog",children:"Dialog"})," objects are dispatched by page via the ",(0,i.jsx)(s.a,{href:"/java/docs/next/api/class-page#page-event-dialog",children:"Page.onDialog(handler)"})," event."]}),"\n",(0,i.jsxs)(s.p,{children:["An example of using ",(0,i.jsx)(s.code,{children:"Dialog"})," class:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch();\n      Page page = browser.newPage();\n      page.onDialog(dialog -> {\n        System.out.println(dialog.message());\n        dialog.dismiss();\n      });\n      page.evaluate(\"alert('1')\");\n      browser.close();\n    }\n  }\n}\n"})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Dialogs are dismissed automatically, unless there is a ",(0,i.jsx)(s.a,{href:"/java/docs/next/api/class-page#page-event-dialog",children:"Page.onDialog(handler)"})," listener. When listener is present, it ",(0,i.jsx)(s.strong,{children:"must"})," either ",(0,i.jsx)(s.a,{href:"/java/docs/next/api/class-dialog#dialog-accept",children:"Dialog.accept()"})," or ",(0,i.jsx)(s.a,{href:"/java/docs/next/api/class-dialog#dialog-dismiss",children:"Dialog.dismiss()"})," the dialog - otherwise the page will ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking",children:"freeze"})," waiting for the dialog, and actions like click will never finish."]})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"dialog-accept",children:"accept"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"dialog.accept"}),"\n",(0,i.jsx)(s.p,{children:"Returns when the dialog has been accepted."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"Dialog.accept();\nDialog.accept(promptText);\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"promptText"})," ",(0,i.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String",children:"String"})," ",(0,i.jsx)(s.em,{children:"(optional)"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"dialog-accept-option-prompt-text"}),(0,i.jsx)("a",{href:"#dialog-accept-option-prompt-text",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["A text to enter in prompt. Does not cause any effects if the dialog's ",(0,i.jsx)(s.code,{children:"type"})," is not prompt. Optional."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void",children:"void"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"dialog-accept-return"}),(0,i.jsx)("a",{href:"#dialog-accept-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"dialog-default-value",children:"defaultValue"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"dialog.defaultValue"}),"\n",(0,i.jsx)(s.p,{children:"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"Dialog.defaultValue();\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String",children:"String"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"dialog-default-value-return"}),(0,i.jsx)("a",{href:"#dialog-default-value-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"dialog-dismiss",children:"dismiss"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"dialog.dismiss"}),"\n",(0,i.jsx)(s.p,{children:"Returns when the dialog has been dismissed."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"Dialog.dismiss();\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void",children:"void"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"dialog-dismiss-return"}),(0,i.jsx)("a",{href:"#dialog-dismiss-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"dialog-message",children:"message"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"dialog.message"}),"\n",(0,i.jsx)(s.p,{children:"A message displayed in the dialog."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"Dialog.message();\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String",children:"String"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"dialog-message-return"}),(0,i.jsx)("a",{href:"#dialog-message-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"dialog-page",children:"page"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.34"}),"\n",(0,i.jsx)("x-search",{children:"dialog.page"}),"\n",(0,i.jsx)(s.p,{children:"The page that initiated this dialog, if available."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"Dialog.page();\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null",children:"null"})," | ",(0,i.jsx)(s.a,{href:"/java/docs/next/api/class-page",title:"Page",children:"Page"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"dialog-page-return"}),(0,i.jsx)("a",{href:"#dialog-page-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"dialog-type",children:"type"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"dialog.type"}),"\n",(0,i.jsxs)(s.p,{children:["Returns dialog's type, can be one of ",(0,i.jsx)(s.code,{children:"alert"}),", ",(0,i.jsx)(s.code,{children:"beforeunload"}),", ",(0,i.jsx)(s.code,{children:"confirm"})," or ",(0,i.jsx)(s.code,{children:"prompt"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"Dialog.type();\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String",children:"String"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"dialog-type-return"}),(0,i.jsx)("a",{href:"#dialog-type-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}}}]);