"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1799],{5359:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var t=a(4848),p=a(8453),l=a(4235),s=a(8328);a(3078);const i={id:"pages",title:"Pages"},c=void 0,o={id:"pages",title:"Pages",description:"Pages",source:"@site/docs/pages.mdx",sourceDirName:".",slug:"/pages",permalink:"/python/docs/next/pages",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"pages",title:"Pages"},sidebar:"docs",previous:{title:"Page object models",permalink:"/python/docs/next/pom"},next:{title:"Screenshots",permalink:"/python/docs/next/screenshots"}},r={},g=[{value:"Pages",id:"pages",level:2},{value:"Multiple pages",id:"multiple-pages",level:2},{value:"Handling new pages",id:"handling-new-pages",level:2},{value:"Handling popups",id:"handling-popups",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,p.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"pages",children:"Pages"}),"\n",(0,t.jsxs)(n.p,{children:["Each ",(0,t.jsx)(n.a,{href:"/python/docs/next/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"})," can have multiple pages. A ",(0,t.jsx)(n.a,{href:"/python/docs/next/api/class-page",title:"Page",children:"Page"})," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."]}),"\n",(0,t.jsxs)(l.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,t.jsx)(s.A,{value:"sync",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"page = context.new_page()\n\n# Navigate explicitly, similar to entering a URL in the browser.\npage.goto('http://example.com')\n# Fill an input.\npage.locator('#search').fill('query')\n\n# Navigate implicitly by clicking a link.\npage.locator('#submit').click()\n# Expect a new url.\nprint(page.url)\n"})})}),(0,t.jsx)(s.A,{value:"async",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"page = await context.new_page()\n\n# Navigate explicitly, similar to entering a URL in the browser.\nawait page.goto('http://example.com')\n# Fill an input.\nawait page.locator('#search').fill('query')\n\n# Navigate implicitly by clicking a link.\nawait page.locator('#submit').click()\n# Expect a new url.\nprint(page.url)\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"multiple-pages",children:"Multiple pages"}),"\n",(0,t.jsx)(n.p,{children:"Each browser context can host multiple pages (tabs)."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Each page behaves like a focused, active page. Bringing the page to front is not required."}),"\n",(0,t.jsx)(n.li,{children:"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale."}),"\n"]}),"\n",(0,t.jsxs)(l.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,t.jsx)(s.A,{value:"sync",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# create two pages\npage_one = context.new_page()\npage_two = context.new_page()\n\n# get pages of a browser context\nall_pages = context.pages\n"})})}),(0,t.jsx)(s.A,{value:"async",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# create two pages\npage_one = await context.new_page()\npage_two = await context.new_page()\n\n# get pages of a browser context\nall_pages = context.pages\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"handling-new-pages",children:"Handling new pages"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"page"})," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",(0,t.jsx)(n.code,{children:'target="_blank"'})," links."]}),"\n",(0,t.jsxs)(l.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,t.jsx)(s.A,{value:"sync",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# Get page after a specific action (e.g. clicking a link)\nwith context.expect_page() as new_page_info:\n    page.get_by_text("open new tab").click() # Opens a new tab\nnew_page = new_page_info.value\n\n# Interact with the new page normally\nnew_page.get_by_role("button").click()\nprint(new_page.title())\n'})})}),(0,t.jsx)(s.A,{value:"async",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# Get page after a specific action (e.g. clicking a link)\nasync with context.expect_page() as new_page_info:\n    await page.get_by_text("open new tab").click() # Opens a new tab\nnew_page = await new_page_info.value\n\n# Interact with the new page normally\nawait new_page.get_by_role("button").click()\nprint(await new_page.title())\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"If the action that triggers the new page is unknown, the following pattern can be used."}),"\n",(0,t.jsxs)(l.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,t.jsx)(s.A,{value:"sync",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# Get all new pages (including popups) in the context\ndef handle_page(page):\n    page.wait_for_load_state()\n    print(page.title())\n\ncontext.on("page", handle_page)\n'})})}),(0,t.jsx)(s.A,{value:"async",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# Get all new pages (including popups) in the context\nasync def handle_page(page):\n    await page.wait_for_load_state()\n    print(await page.title())\n\ncontext.on("page", handle_page)\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"handling-popups",children:"Handling popups"}),"\n",(0,t.jsxs)(n.p,{children:["If the page opens a pop-up (e.g. pages opened by ",(0,t.jsx)(n.code,{children:'target="_blank"'})," links), you can get a reference to it by listening to the ",(0,t.jsx)(n.code,{children:"popup"})," event on the page."]}),"\n",(0,t.jsxs)(n.p,{children:["This event is emitted in addition to the ",(0,t.jsx)(n.code,{children:"browserContext.on('page')"})," event, but only for popups relevant to this page."]}),"\n",(0,t.jsxs)(l.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,t.jsx)(s.A,{value:"sync",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# Get popup after a specific action (e.g., click)\nwith page.expect_popup() as popup_info:\n    page.get_by_text("open the popup").click()\npopup = popup_info.value\n\n# Interact with the popup normally\npopup.get_by_role("button").click()\nprint(popup.title())\n'})})}),(0,t.jsx)(s.A,{value:"async",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# Get popup after a specific action (e.g., click)\nasync with page.expect_popup() as popup_info:\n    await page.get_by_text("open the popup").click()\npopup = await popup_info.value\n\n# Interact with the popup normally\nawait popup.get_by_role("button").click()\nprint(await popup.title())\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"If the action that triggers the popup is unknown, the following pattern can be used."}),"\n",(0,t.jsxs)(l.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,t.jsx)(s.A,{value:"sync",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# Get all popups when they open\ndef handle_popup(popup):\n    popup.wait_for_load_state()\n    print(popup.title())\n\npage.on("popup", handle_popup)\n'})})}),(0,t.jsx)(s.A,{value:"async",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# Get all popups when they open\nasync def handle_popup(popup):\n    await popup.wait_for_load_state()\n    print(await popup.title())\n\npage.on("popup", handle_popup)\n'})})})]})]})}function u(e={}){const{wrapper:n}={...(0,p.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);