"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5531],{9677:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>t,metadata:()=>o,toc:()=>h});var i=n(4848),a=n(8453),l=n(4235),r=n(8328);n(3078);const t={id:"class-dialog",title:"Dialog"},d=void 0,o={id:"api/class-dialog",title:"Dialog",description:'Dialog] objects are dispatched by page via the [page.on("dialog") event.',source:"@site/docs/api/class-dialog.mdx",sourceDirName:"api",slug:"/api/class-dialog",permalink:"/python/docs/next/api/class-dialog",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-dialog",title:"Dialog"},sidebar:"api",previous:{title:"ConsoleMessage",permalink:"/python/docs/next/api/class-consolemessage"},next:{title:"Download",permalink:"/python/docs/next/api/class-download"}},c={},h=[{value:"Methods",id:"methods",level:2},{value:"accept",id:"dialog-accept",level:3},{value:"dismiss",id:"dialog-dismiss",level:3},{value:"Properties",id:"properties",level:2},{value:"default_value",id:"dialog-default-value",level:3},{value:"message",id:"dialog-message",level:3},{value:"page",id:"dialog-page",level:3},{value:"type",id:"dialog-type",level:3}];function p(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/python/docs/next/api/class-dialog",title:"Dialog",children:"Dialog"})," objects are dispatched by page via the ",(0,i.jsx)(s.a,{href:"/python/docs/next/api/class-page#page-event-dialog",children:'page.on("dialog")'})," event."]}),"\n",(0,i.jsxs)(s.p,{children:["An example of using ",(0,i.jsx)(s.code,{children:"Dialog"})," class:"]}),"\n",(0,i.jsxs)(l.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,i.jsx)(r.A,{value:"sync",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-py",children:'from playwright.sync_api import sync_playwright, Playwright\n\ndef handle_dialog(dialog):\n    print(dialog.message)\n    dialog.dismiss()\n\ndef run(playwright: Playwright):\n    chromium = playwright.chromium\n    browser = chromium.launch()\n    page = browser.new_page()\n    page.on("dialog", handle_dialog)\n    page.evaluate("alert(\'1\')")\n    browser.close()\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'})})}),(0,i.jsx)(r.A,{value:"async",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-py",children:'import asyncio\nfrom playwright.async_api import async_playwright, Playwright\n\nasync def handle_dialog(dialog):\n    print(dialog.message)\n    await dialog.dismiss()\n\nasync def run(playwright: Playwright):\n    chromium = playwright.chromium\n    browser = await chromium.launch()\n    page = await browser.new_page()\n    page.on("dialog", handle_dialog)\n    page.evaluate("alert(\'1\')")\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n'})})})]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Dialogs are dismissed automatically, unless there is a ",(0,i.jsx)(s.a,{href:"/python/docs/next/api/class-page#page-event-dialog",children:'page.on("dialog")'})," listener. When listener is present, it ",(0,i.jsx)(s.strong,{children:"must"})," either ",(0,i.jsx)(s.a,{href:"/python/docs/next/api/class-dialog#dialog-accept",children:"dialog.accept()"})," or ",(0,i.jsx)(s.a,{href:"/python/docs/next/api/class-dialog#dialog-dismiss",children:"dialog.dismiss()"})," the dialog - otherwise the page will ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking",children:"freeze"})," waiting for the dialog, and actions like click will never finish."]})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"dialog-accept",children:"accept"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"dialog.accept"}),"\n",(0,i.jsx)(s.p,{children:"Returns when the dialog has been accepted."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"dialog.accept()\ndialog.accept(**kwargs)\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"prompt_text"})," ",(0,i.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"})," ",(0,i.jsx)(s.em,{children:"(optional)"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"dialog-accept-option-prompt-text"}),(0,i.jsx)("a",{href:"#dialog-accept-option-prompt-text",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["A text to enter in prompt. Does not cause any effects if the dialog's ",(0,i.jsx)(s.code,{children:"type"})," is not prompt. Optional."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"dialog-accept-return"}),(0,i.jsx)("a",{href:"#dialog-accept-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"dialog-dismiss",children:"dismiss"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"dialog.dismiss"}),"\n",(0,i.jsx)(s.p,{children:"Returns when the dialog has been dismissed."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"dialog.dismiss()\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"dialog-dismiss-return"}),(0,i.jsx)("a",{href:"#dialog-dismiss-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(s.h3,{id:"dialog-default-value",children:"default_value"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"dialog.default_value"}),"\n",(0,i.jsx)(s.p,{children:"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"dialog.default_value\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"dialog-default-value-return"}),(0,i.jsx)("a",{href:"#dialog-default-value-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"dialog-message",children:"message"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"dialog.message"}),"\n",(0,i.jsx)(s.p,{children:"A message displayed in the dialog."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"dialog.message\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"dialog-message-return"}),(0,i.jsx)("a",{href:"#dialog-message-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"dialog-page",children:"page"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.34"}),"\n",(0,i.jsx)("x-search",{children:"dialog.page"}),"\n",(0,i.jsx)(s.p,{children:"The page that initiated this dialog, if available."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"dialog.page\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"})," | ",(0,i.jsx)(s.a,{href:"/python/docs/next/api/class-page",title:"Page",children:"Page"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"dialog-page-return"}),(0,i.jsx)("a",{href:"#dialog-page-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"dialog-type",children:"type"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"dialog.type"}),"\n",(0,i.jsxs)(s.p,{children:["Returns dialog's type, can be one of ",(0,i.jsx)(s.code,{children:"alert"}),", ",(0,i.jsx)(s.code,{children:"beforeunload"}),", ",(0,i.jsx)(s.code,{children:"confirm"})," or ",(0,i.jsx)(s.code,{children:"prompt"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"dialog.type\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"dialog-type-return"}),(0,i.jsx)("a",{href:"#dialog-type-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function g(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);