"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6983],{8960:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>g});var l=n(4848),i=n(8453),o=n(4235),s=n(8328);n(3078);const t={id:"dialogs",title:"Dialogs"},d=void 0,r={id:"dialogs",title:"Dialogs",description:"Introduction",source:"@site/docs/dialogs.mdx",sourceDirName:".",slug:"/dialogs",permalink:"/python/docs/next/dialogs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"dialogs",title:"Dialogs"},sidebar:"docs",previous:{title:"Debugging Tests",permalink:"/python/docs/next/debug"},next:{title:"Downloads",permalink:"/python/docs/next/downloads"}},c={},g=[{value:"Introduction",id:"introduction",level:2},{value:"alert(), confirm(), prompt() dialogs",id:"alert-confirm-prompt-dialogs",level:2},{value:"beforeunload dialog",id:"beforeunload-dialog",level:2},{value:"Print dialogs",id:"print-dialogs",level:2}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h2,{id:"introduction",children:"Introduction"}),"\n",(0,l.jsxs)(a.p,{children:["Playwright can interact with the web page dialogs such as ",(0,l.jsx)(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/alert",children:(0,l.jsx)(a.code,{children:"alert"})}),", ",(0,l.jsx)(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm",children:(0,l.jsx)(a.code,{children:"confirm"})}),", ",(0,l.jsx)(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt",children:(0,l.jsx)(a.code,{children:"prompt"})})," as well as ",(0,l.jsx)(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event",children:(0,l.jsx)(a.code,{children:"beforeunload"})})," confirmation. For print dialogs, see ",(0,l.jsx)(a.a,{href:"#print-dialogs",children:"Print"}),"."]}),"\n",(0,l.jsx)(a.h2,{id:"alert-confirm-prompt-dialogs",children:"alert(), confirm(), prompt() dialogs"}),"\n",(0,l.jsxs)(a.p,{children:["By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to either ",(0,l.jsx)(a.a,{href:"/python/docs/next/api/class-dialog#dialog-accept",children:"dialog.accept()"})," or ",(0,l.jsx)(a.a,{href:"/python/docs/next/api/class-dialog#dialog-dismiss",children:"dialog.dismiss()"})," it."]}),"\n",(0,l.jsxs)(o.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,l.jsx)(s.A,{value:"sync",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-py",children:'page.on("dialog", lambda dialog: dialog.accept())\npage.get_by_role("button").click()\n'})})}),(0,l.jsx)(s.A,{value:"async",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-py",children:'page.on("dialog", lambda dialog: dialog.accept())\nawait page.get_by_role("button".click())\n'})})})]}),"\n",(0,l.jsx)(a.admonition,{type:"note",children:(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.a,{href:"/python/docs/next/api/class-page#page-event-dialog",children:'page.on("dialog")'})," listener ",(0,l.jsx)(a.strong,{children:"must handle"})," the dialog. Otherwise your action will stall, be it ",(0,l.jsx)(a.a,{href:"/python/docs/next/api/class-locator#locator-click",children:"locator.click()"})," or something else. That's because dialogs in Web are modals and therefore block further page execution until they are handled."]})}),"\n",(0,l.jsx)(a.p,{children:"As a result, the following snippet will never resolve:"}),"\n",(0,l.jsx)(a.admonition,{type:"warning",children:(0,l.jsx)(a.p,{children:"WRONG!"})}),"\n",(0,l.jsxs)(o.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,l.jsx)(s.A,{value:"sync",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-py",children:'page.on("dialog", lambda dialog: print(dialog.message))\npage.get_by_role("button").click() # Will hang here\n'})})}),(0,l.jsx)(s.A,{value:"async",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-py",children:'page.on("dialog", lambda dialog: print(dialog.message))\nawait page.get_by_role("button").click() # Will hang here\n'})})})]}),"\n",(0,l.jsx)(a.admonition,{type:"note",children:(0,l.jsxs)(a.p,{children:["If there is no listener for ",(0,l.jsx)(a.a,{href:"/python/docs/next/api/class-page#page-event-dialog",children:'page.on("dialog")'}),", all dialogs are automatically dismissed."]})}),"\n",(0,l.jsx)(a.h2,{id:"beforeunload-dialog",children:"beforeunload dialog"}),"\n",(0,l.jsxs)(a.p,{children:["When ",(0,l.jsx)(a.a,{href:"/python/docs/next/api/class-page#page-close",children:"page.close()"})," is invoked with the truthy ",(0,l.jsx)(a.code,{children:"run_before_unload"})," value, the page runs its unload handlers. This is the only case when ",(0,l.jsx)(a.a,{href:"/python/docs/next/api/class-page#page-close",children:"page.close()"})," does not wait for the page to actually close, because it might be that the page stays open in the end of the operation."]}),"\n",(0,l.jsxs)(a.p,{children:["You can register a dialog handler to handle the ",(0,l.jsx)(a.code,{children:"beforeunload"})," dialog yourself:"]}),"\n",(0,l.jsxs)(o.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,l.jsx)(s.A,{value:"sync",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-py",children:"def handle_dialog(dialog):\n    assert dialog.type == 'beforeunload'\n    dialog.dismiss()\n\npage.on('dialog', lambda: handle_dialog)\npage.close(run_before_unload=True)\n"})})}),(0,l.jsx)(s.A,{value:"async",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-py",children:"async def handle_dialog(dialog):\n    assert dialog.type == 'beforeunload'\n    await dialog.dismiss()\n\npage.on('dialog', lambda: handle_dialog)\nawait page.close(run_before_unload=True)\n"})})})]}),"\n",(0,l.jsx)(a.h2,{id:"print-dialogs",children:"Print dialogs"}),"\n",(0,l.jsxs)(a.p,{children:["In order to assert that a print dialog via ",(0,l.jsx)(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/print",children:(0,l.jsx)(a.code,{children:"window.print"})})," was triggered, you can use the following snippet:"]}),"\n",(0,l.jsxs)(o.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,l.jsx)(s.A,{value:"sync",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-py",children:'page.goto("<url>")\n\npage.evaluate("(() => {window.waitForPrintDialog = new Promise(f => window.print = f);})()")\npage.get_by_text("Print it!").click()\n\npage.wait_for_function("window.waitForPrintDialog")\n'})})}),(0,l.jsx)(s.A,{value:"async",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-py",children:'await page.goto("<url>")\n\nawait page.evaluate("(() => {window.waitForPrintDialog = new Promise(f => window.print = f);})()")\nawait page.get_by_text("Print it!").click()\n\nawait page.wait_for_function("window.waitForPrintDialog")\n'})})})]}),"\n",(0,l.jsx)(a.p,{children:"This will wait for the print dialog to be opened after the button is clicked. Make sure to evaluate the script before clicking the button / after the page is loaded."})]})}function p(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}}}]);