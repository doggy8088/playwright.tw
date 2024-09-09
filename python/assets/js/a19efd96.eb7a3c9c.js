"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9364],{9027:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>h});var s=a(4848),l=a(8453),i=a(4235),c=a(8328);a(3078);const t={id:"emulation",title:"Emulation"},r=void 0,o={id:"emulation",title:"Emulation",description:"Introduction",source:"@site/docs/emulation.mdx",sourceDirName:".",slug:"/emulation",permalink:"/python/docs/next/emulation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"emulation",title:"Emulation"},sidebar:"docs",previous:{title:"Downloads",permalink:"/python/docs/next/downloads"},next:{title:"Evaluating JavaScript",permalink:"/python/docs/next/evaluating"}},d={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Devices",id:"devices",level:2},{value:"Viewport",id:"viewport",level:2},{value:"isMobile",id:"ismobile",level:2},{value:"Locale &amp; Timezone",id:"locale--timezone",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Geolocation",id:"geolocation",level:2},{value:"Color Scheme and Media",id:"color-scheme-and-media",level:2},{value:"User Agent",id:"user-agent",level:2},{value:"Offline",id:"offline",level:2},{value:"JavaScript Enabled",id:"javascript-enabled",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["With Playwright you can test your app on any browser as well as emulate a real device such as a mobile phone or tablet. Simply configure the devices you would like to emulate and Playwright will simulate the browser behavior such as ",(0,s.jsx)(n.code,{children:'"userAgent"'}),", ",(0,s.jsx)(n.code,{children:'"screenSize"'}),", ",(0,s.jsx)(n.code,{children:'"viewport"'})," and if it ",(0,s.jsx)(n.code,{children:'"hasTouch"'})," enabled. You can also emulate the ",(0,s.jsx)(n.code,{children:'"geolocation"'}),", ",(0,s.jsx)(n.code,{children:'"locale"'})," and ",(0,s.jsx)(n.code,{children:'"timezone"'})," for all tests or for a specific test as well as set the ",(0,s.jsx)(n.code,{children:'"permissions"'})," to show notifications or change the ",(0,s.jsx)(n.code,{children:'"colorScheme"'}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"devices",children:"Devices"}),"\n",(0,s.jsxs)(n.p,{children:["Playwright comes with a ",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json",children:"registry of device parameters"})," using ",(0,s.jsx)(n.a,{href:"/python/docs/next/api/class-playwright#playwright-devices",children:"playwright.devices"})," for selected desktop, tablet and mobile devices. It can be used to simulate browser behavior for a specific device such as user agent, screen size, viewport and if it has touch enabled. All tests will run with the specified device parameters."]}),"\n",(0,s.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,s.jsx)(c.A,{value:"sync",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"from playwright.sync_api import sync_playwright, Playwright\n\ndef run(playwright: Playwright):\n    iphone_13 = playwright.devices['iPhone 13']\n    browser = playwright.webkit.launch(headless=False)\n    context = browser.new_context(\n        **iphone_13,\n    )\n\nwith sync_playwright() as playwright:\n    run(playwright)\n"})})}),(0,s.jsx)(c.A,{value:"async",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"import asyncio\nfrom playwright.async_api import async_playwright, Playwright\n\nasync def run(playwright: Playwright):\n    iphone_13 = playwright.devices['iPhone 13']\n    browser = await playwright.webkit.launch(headless=False)\n    context = await browser.new_context(\n        **iphone_13,\n    )\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n"})})})]}),"\n",(0,s.jsx)("img",{width:"458",alt:"playwright.dev website emulated for iPhone 13",src:"https://user-images.githubusercontent.com/13063165/220411073-76fe59f9-9a2d-463d-8e30-c19a7deca133.png"}),"\n",(0,s.jsx)(n.h2,{id:"viewport",children:"Viewport"}),"\n",(0,s.jsxs)(n.p,{children:["The viewport is included in the device but you can override it for some tests with ",(0,s.jsx)(n.a,{href:"/python/docs/next/api/class-page#page-set-viewport-size",children:"page.set_viewport_size()"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Test file:"}),"\n",(0,s.jsx)(n.p,{children:"The same works inside a test file."}),"\n",(0,s.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,s.jsx)(c.A,{value:"sync",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"# Create context with given viewport\ncontext = browser.new_context(\n  viewport={ 'width': 1280, 'height': 1024 }\n)\n\n# Resize viewport for individual page\npage.set_viewport_size({\"width\": 1600, \"height\": 1200})\n\n# Emulate high-DPI\ncontext = browser.new_context(\n  viewport={ 'width': 2560, 'height': 1440 },\n  device_scale_factor=2,\n)\n"})})}),(0,s.jsx)(c.A,{value:"async",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"# Create context with given viewport\ncontext = await browser.new_context(\n  viewport={ 'width': 1280, 'height': 1024 }\n)\n\n# Resize viewport for individual page\nawait page.set_viewport_size({\"width\": 1600, \"height\": 1200})\n\n# Emulate high-DPI\ncontext = await browser.new_context(\n  viewport={ 'width': 2560, 'height': 1440 },\n  device_scale_factor=2,\n)\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"ismobile",children:"isMobile"}),"\n",(0,s.jsx)(n.p,{children:"Whether the meta viewport tag is taken into account and touch events are enabled."}),"\n",(0,s.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,s.jsx)(c.A,{value:"sync",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"context = browser.new_context(\n  isMobile=false\n)\n"})})}),(0,s.jsx)(c.A,{value:"async",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"context = await browser.new_context(\n  isMobile=false\n)\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"locale--timezone",children:"Locale & Timezone"}),"\n",(0,s.jsx)(n.p,{children:"Emulate the user Locale and Timezone which can be set globally for all tests in the config and then overridden for particular tests."}),"\n",(0,s.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,s.jsx)(c.A,{value:"sync",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"context = browser.new_context(\n  locale='de-DE',\n  timezone_id='Europe/Berlin',\n)\n"})})}),(0,s.jsx)(c.A,{value:"async",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"context = await browser.new_context(\n  locale='de-DE',\n  timezone_id='Europe/Berlin',\n)\n"})})})]}),"\n",(0,s.jsx)("img",{width:"1394",alt:"Bing in german lang and timezone",src:"https://user-images.githubusercontent.com/13063165/220416571-ccc96ab1-44bb-4579-8430-64502fc24a15.png"}),"\n",(0,s.jsx)(n.h2,{id:"permissions",children:"Permissions"}),"\n",(0,s.jsx)(n.p,{children:"Allow app to show system notifications."}),"\n",(0,s.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,s.jsx)(c.A,{value:"sync",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"context = browser.new_context(\n  permissions=['notifications'],\n)\n"})})}),(0,s.jsx)(c.A,{value:"async",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"context = await browser.new_context(\n  permissions=['notifications'],\n)\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Allow notifications for a specific domain."}),"\n",(0,s.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,s.jsx)(c.A,{value:"sync",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"context.grant_permissions(['notifications'], origin='https://skype.com')\n"})})}),(0,s.jsx)(c.A,{value:"async",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"await context.grant_permissions(['notifications'], origin='https://skype.com')\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Revoke all permissions with ",(0,s.jsx)(n.a,{href:"/python/docs/next/api/class-browsercontext#browser-context-clear-permissions",children:"browser_context.clear_permissions()"}),"."]}),"\n",(0,s.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,s.jsx)(c.A,{value:"sync",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"context.clear_permissions()\n"})})}),(0,s.jsx)(c.A,{value:"async",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"await context.clear_permissions()\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"geolocation",children:"Geolocation"}),"\n",(0,s.jsxs)(n.p,{children:["Grant ",(0,s.jsx)(n.code,{children:'"geolocation"'})," permissions and set geolocation to a specific area."]}),"\n",(0,s.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,s.jsx)(c.A,{value:"sync",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'context = browser.new_context(\n  geolocation={"longitude": 41.890221, "latitude": 12.492348},\n  permissions=["geolocation"]\n)\n'})})}),(0,s.jsx)(c.A,{value:"async",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'context = await browser.new_context(\n  geolocation={"longitude": 41.890221, "latitude": 12.492348},\n  permissions=["geolocation"]\n)\n'})})})]}),"\n",(0,s.jsx)("img",{width:"1394",alt:"geolocation for italy on bing maps",src:"https://user-images.githubusercontent.com/13063165/220417670-bb22d815-f5cd-47c4-8562-0b88165eac27.png"}),"\n",(0,s.jsx)(n.p,{children:"Change the location later:"}),"\n",(0,s.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,s.jsx)(c.A,{value:"sync",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'context.set_geolocation({"longitude": 48.858455, "latitude": 2.294474})\n'})})}),(0,s.jsx)(c.A,{value:"async",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'await context.set_geolocation({"longitude": 48.858455, "latitude": 2.294474})\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"})," you can only change geolocation for all pages in the context."]}),"\n",(0,s.jsx)(n.h2,{id:"color-scheme-and-media",children:"Color Scheme and Media"}),"\n",(0,s.jsxs)(n.p,{children:["Emulate the users ",(0,s.jsx)(n.code,{children:'"colorScheme"'}),". Supported values are 'light', 'dark', 'no-preference'. You can also emulate the media type with ",(0,s.jsx)(n.a,{href:"/python/docs/next/api/class-page#page-emulate-media",children:"page.emulate_media()"}),"."]}),"\n",(0,s.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,s.jsx)(c.A,{value:"sync",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"# Create context with dark mode\ncontext = browser.new_context(\n  color_scheme='dark' # or 'light'\n)\n\n# Create page with dark mode\npage = browser.new_page(\n  color_scheme='dark' # or 'light'\n)\n\n# Change color scheme for the page\npage.emulate_media(color_scheme='dark')\n\n# Change media for page\npage.emulate_media(media='print')\n"})})}),(0,s.jsx)(c.A,{value:"async",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"# Create context with dark mode\ncontext = await browser.new_context(\n  color_scheme='dark' # or 'light'\n)\n\n# Create page with dark mode\npage = await browser.new_page(\n  color_scheme='dark' # or 'light'\n)\n\n# Change color scheme for the page\nawait page.emulate_media(color_scheme='dark')\n\n# Change media for page\nawait page.emulate_media(media='print')\n"})})})]}),"\n",(0,s.jsx)("img",{width:"1394",alt:"playwright web in dark mode",src:"https://user-images.githubusercontent.com/13063165/220411638-55d2b051-4678-4da7-9f0b-ed22f5a3c47c.png"}),"\n",(0,s.jsx)(n.h2,{id:"user-agent",children:"User Agent"}),"\n",(0,s.jsxs)(n.p,{children:["The User Agent is included in the device and therefore you  will rarely need to change it however if you do need to test a different user agent you can override it with the ",(0,s.jsx)(n.code,{children:"userAgent"})," property."]}),"\n",(0,s.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,s.jsx)(c.A,{value:"sync",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"context = browser.new_context(\n  user_agent='My user agent'\n)\n"})})}),(0,s.jsx)(c.A,{value:"async",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"context = await browser.new_context(\n  user_agent='My user agent'\n)\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"offline",children:"Offline"}),"\n",(0,s.jsx)(n.p,{children:"Emulate the network being offline."}),"\n",(0,s.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,s.jsx)(c.A,{value:"sync",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"context = browser.new_context(\n  offline=True\n)\n"})})}),(0,s.jsx)(c.A,{value:"async",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"context = await browser.new_context(\n  offline=True\n)\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"javascript-enabled",children:"JavaScript Enabled"}),"\n",(0,s.jsx)(n.p,{children:"Emulate a user scenario where JavaScript is disabled."}),"\n",(0,s.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,s.jsx)(c.A,{value:"sync",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"context = browser.new_context(\n  java_script_enabled=False\n)\n"})})}),(0,s.jsx)(c.A,{value:"async",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"context = await browser.new_context(\n  java_script_enabled=False\n)\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);