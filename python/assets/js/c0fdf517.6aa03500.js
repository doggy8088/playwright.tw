"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[415],{8268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var o=n(4848),a=n(8453),i=n(4235),s=n(8328);n(3078),n(4562);const r={id:"codegen",title:"Test generator"},c=void 0,l={id:"codegen",title:"Test generator",description:"Introduction",source:"@site/docs/codegen.mdx",sourceDirName:".",slug:"/codegen",permalink:"/python/docs/next/codegen",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"codegen",title:"Test generator"},sidebar:"docs",previous:{title:"Screenshots",permalink:"/python/docs/next/screenshots"},next:{title:"Trace viewer",permalink:"/python/docs/next/trace-viewer"}},d={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Generate tests with the Playwright Inspector",id:"generate-tests-with-the-playwright-inspector",level:2},{value:"Running Codegen",id:"running-codegen",level:3},{value:"Recording a test",id:"recording-a-test",level:3},{value:"Generating locators",id:"generating-locators",level:3},{value:"Emulation",id:"emulation",level:2},{value:"Emulate viewport size",id:"emulate-viewport-size",level:3},{value:"Emulate devices",id:"emulate-devices",level:3},{value:"Emulate color scheme",id:"emulate-color-scheme",level:3},{value:"Emulate geolocation, language and timezone",id:"emulate-geolocation-language-and-timezone",level:3},{value:"Preserve authenticated state",id:"preserve-authenticated-state",level:3},{value:"Login",id:"login",level:4},{value:"Load authenticated state",id:"load-authenticated-state",level:4},{value:"Record using custom setup",id:"record-using-custom-setup",level:2}];function g(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h6:"h6",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(t.p,{children:["Playwright comes with the ability to generate tests for you as you perform actions in the browser and is a great way to quickly get started with testing. Playwright will look at your page and figure out the best locator, prioritizing ",(0,o.jsx)(t.a,{href:"/python/docs/next/locators",children:"role, text and test id locators"}),". If the generator finds multiple elements matching the locator, it will improve the locator to make it resilient that uniquely identify the target element."]}),"\n",(0,o.jsx)(t.h2,{id:"generate-tests-with-the-playwright-inspector",children:"Generate tests with the Playwright Inspector"}),"\n",(0,o.jsxs)(t.p,{children:["When running the ",(0,o.jsx)(t.code,{children:"codegen"})," command two windows will be opened, a browser window where you interact with the website you wish to test and the Playwright Inspector window where you can record your tests and then copy them into your editor."]}),"\n",(0,o.jsx)(t.h3,{id:"running-codegen",children:"Running Codegen"}),"\n",(0,o.jsxs)(t.p,{children:["Use the ",(0,o.jsx)(t.code,{children:"codegen"})," command to run the test generator followed by the URL of the website you want to generate tests for. The URL is optional and you can always run the command without it and then add the URL directly into the browser window instead."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"playwright codegen demo.playwright.dev/todomvc\n"})}),"\n",(0,o.jsx)(t.h3,{id:"recording-a-test",children:"Recording a test"}),"\n",(0,o.jsxs)(t.p,{children:["Run the ",(0,o.jsx)(t.code,{children:"codegen"})," command and perform actions in the browser window. Playwright will generate the code for the user interactions which you can see in the Playwright Inspector window. Once you have finished recording your test stop the recording and press the ",(0,o.jsx)(t.strong,{children:"copy"})," button to copy your generated test into your editor."]}),"\n",(0,o.jsx)(t.p,{children:"With the test generator you can record:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Actions like click or fill by simply interacting with the page"}),"\n",(0,o.jsxs)(t.li,{children:["Assertions by clicking on one of the icons in the toolbar and then clicking on an element on the page to assert against. You can choose:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"'assert visibility'"})," to assert that an element is visible"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"'assert text'"})," to assert that an element contains specific text"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"'assert value'"})," to assert that an element has a specific value"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h6,{id:""}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/9751b609-6e4c-486b-a961-f86f177b1d58",alt:"recording a test"})}),"\n",(0,o.jsx)(t.h6,{id:"-1"}),"\n",(0,o.jsxs)(t.p,{children:["When you have finished interacting with the page, press the ",(0,o.jsx)(t.strong,{children:"record"})," button to stop the recording and use the ",(0,o.jsx)(t.strong,{children:"copy"})," button to copy the generated code to your editor."]}),"\n",(0,o.jsxs)(t.p,{children:["Use the ",(0,o.jsx)(t.strong,{children:"clear"})," button to clear the code to start recording again. Once finished, close the Playwright inspector window or stop the terminal command."]}),"\n",(0,o.jsx)(t.h3,{id:"generating-locators",children:"Generating locators"}),"\n",(0,o.jsxs)(t.p,{children:["You can generate ",(0,o.jsx)(t.a,{href:"/python/docs/next/locators",children:"locators"})," with the test generator."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Press the ",(0,o.jsx)(t.code,{children:"'Record'"})," button to stop the recording and the ",(0,o.jsx)(t.code,{children:"'Pick Locator'"})," button will appear."]}),"\n",(0,o.jsxs)(t.li,{children:["Click on the ",(0,o.jsx)(t.code,{children:"'Pick Locator'"})," button and then hover over elements in the browser window to see the locator highlighted underneath each element."]}),"\n",(0,o.jsx)(t.li,{children:"To choose a locator, click on the element you would like to locate and the code for that locator will appear in the field next to the Pick Locator button."}),"\n",(0,o.jsx)(t.li,{children:"You can then edit the locator in this field to fine tune it or use the copy button to copy it and paste it into your code."}),"\n"]}),"\n",(0,o.jsx)(t.h6,{id:"-2"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/95d11f48-96a4-46b9-9c2a-63c3aa4fdce7",alt:"picking a locator"})}),"\n",(0,o.jsx)(t.h2,{id:"emulation",children:"Emulation"}),"\n",(0,o.jsx)(t.p,{children:"You can use the test generator to generate tests using emulation so as to generate a test for a specific viewport, device, color scheme, as well as emulate the geolocation, language or timezone. The test generator can also generate a test while preserving authenticated state."}),"\n",(0,o.jsx)(t.h3,{id:"emulate-viewport-size",children:"Emulate viewport size"}),"\n",(0,o.jsxs)(t.p,{children:["Playwright opens a browser window with its viewport set to a specific width and height and is not responsive as tests need to be run under the same conditions. Use the ",(0,o.jsx)(t.code,{children:"--viewport"})," option to generate tests with a different viewport size."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"playwright codegen --viewport-size=800,600 playwright.dev\n"})}),"\n",(0,o.jsx)(t.h6,{id:"-3"}),"\n",(0,o.jsx)("img",{width:"870",alt:"Codegen generating code for tests for playwright.dev website with a specific viewport python",src:"https://user-images.githubusercontent.com/13063165/220403118-7704b708-dea3-44b3-97a4-04c2b9d1d0fa.png"}),"\n",(0,o.jsx)(t.h3,{id:"emulate-devices",children:"Emulate devices"}),"\n",(0,o.jsxs)(t.p,{children:["Record scripts and tests while emulating a mobile device using the ",(0,o.jsx)(t.code,{children:"--device"})," option which sets the viewport size and user agent among others."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'playwright codegen --device="iPhone 13" playwright.dev\n'})}),"\n",(0,o.jsx)(t.h6,{id:"-4"}),"\n",(0,o.jsx)("img",{width:"1300",alt:"Codegen generating code for tests for playwright.dev website emulated for iPhone 13 python",src:"https://user-images.githubusercontent.com/13063165/220922790-5c5a4d1a-e27d-4c9b-90ac-13cf9c925706.png"}),"\n",(0,o.jsx)(t.h3,{id:"emulate-color-scheme",children:"Emulate color scheme"}),"\n",(0,o.jsxs)(t.p,{children:["Record scripts and tests while emulating the color scheme with the ",(0,o.jsx)(t.code,{children:"--color-scheme"})," option."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"playwright codegen --color-scheme=dark playwright.dev\n"})}),"\n",(0,o.jsx)(t.h6,{id:"-5"}),"\n",(0,o.jsx)("img",{width:"1394",alt:"Codegen generating code for tests for playwright.dev website in dark mode python",src:"https://user-images.githubusercontent.com/13063165/220930714-737647fd-ae99-4dd3-b7a4-4f3eb4fe712d.png"}),"\n",(0,o.jsx)(t.h3,{id:"emulate-geolocation-language-and-timezone",children:"Emulate geolocation, language and timezone"}),"\n",(0,o.jsxs)(t.p,{children:["Record scripts and tests while emulating timezone, language & location using the ",(0,o.jsx)(t.code,{children:"--timezone"}),", ",(0,o.jsx)(t.code,{children:"--geolocation"})," and ",(0,o.jsx)(t.code,{children:"--lang"})," options. Once the page opens:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Accept the cookies"}),"\n",(0,o.jsx)(t.li,{children:"On the top right, click on the locate me button to see geolocation in action."}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'playwright codegen --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" bing.com/maps\n'})}),"\n",(0,o.jsx)(t.h6,{id:"-6"}),"\n",(0,o.jsx)("img",{width:"1394",alt:"Codegen generating code for tests for bing maps showing timezone, geolocation as Rome, Italy and in Italian language python",src:"https://user-images.githubusercontent.com/13063165/220932413-f2943956-dd38-4560-94b9-51968076210d.png"}),"\n",(0,o.jsx)(t.h3,{id:"preserve-authenticated-state",children:"Preserve authenticated state"}),"\n",(0,o.jsxs)(t.p,{children:["Run ",(0,o.jsx)(t.code,{children:"codegen"})," with ",(0,o.jsx)(t.code,{children:"--save-storage"})," to save ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",children:"cookies"})," and ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",children:"localStorage"})," at the end of the session. This is useful to separately record an authentication step and reuse it later when recording more tests."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"playwright codegen github.com/microsoft/playwright --save-storage=auth.json\n"})}),"\n",(0,o.jsx)(t.h6,{id:"-7"}),"\n",(0,o.jsx)("img",{width:"1394",alt:"github page before logging in python",src:"https://user-images.githubusercontent.com/13063165/220929429-8756ec49-fbf2-46e0-8f41-d25f5f5a6623.png"}),"\n",(0,o.jsx)(t.h4,{id:"login",children:"Login"}),"\n",(0,o.jsxs)(t.p,{children:["After performing authentication and closing the browser, ",(0,o.jsx)(t.code,{children:"auth.json"})," will contain the storage state which you can then reuse in your tests."]}),"\n",(0,o.jsx)("img",{width:"1394",alt:"login to GitHub screen",src:"https://user-images.githubusercontent.com/13063165/220561688-04b2b984-4ba6-4446-8b0a-8058876e2a02.png"}),"\n",(0,o.jsxs)(t.p,{children:["Make sure you only use the ",(0,o.jsx)(t.code,{children:"auth.json"})," locally as it contains sensitive information. Add it to your ",(0,o.jsx)(t.code,{children:".gitignore"})," or delete it once you have finished generating your tests."]}),"\n",(0,o.jsx)(t.h4,{id:"load-authenticated-state",children:"Load authenticated state"}),"\n",(0,o.jsxs)(t.p,{children:["Run with ",(0,o.jsx)(t.code,{children:"--load-storage"})," to consume the previously loaded storage from the ",(0,o.jsx)(t.code,{children:"auth.json"}),". This way, all ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",children:"cookies"})," and ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",children:"localStorage"})," will be restored, bringing most web apps to the authenticated state without the need to login again. This means you can continue generating tests from the logged in state."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"playwright codegen --load-storage=auth.json github.com/microsoft/playwright\n"})}),"\n",(0,o.jsx)(t.h6,{id:"-8"}),"\n",(0,o.jsx)("img",{width:"1394",alt:"github signed in showing use of load storage python",src:"https://user-images.githubusercontent.com/13063165/220928211-ca1d4dc9-9966-414e-ab23-a3ef1d2d5ed9.png"}),"\n",(0,o.jsx)(t.h2,{id:"record-using-custom-setup",children:"Record using custom setup"}),"\n",(0,o.jsxs)(t.p,{children:["If you would like to use codegen in some non-standard setup (for example, use ",(0,o.jsx)(t.a,{href:"/python/docs/next/api/class-browsercontext#browser-context-route",children:"browser_context.route()"}),"), it is possible to call ",(0,o.jsx)(t.a,{href:"/python/docs/next/api/class-page#page-pause",children:"page.pause()"})," that will open a separate window with codegen controls."]}),"\n",(0,o.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,o.jsx)(s.A,{value:"sync",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",children:"from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    # Make sure to run headed.\n    browser = p.chromium.launch(headless=False)\n\n    # Setup context however you like.\n    context = browser.new_context() # Pass any options\n    context.route('**/*', lambda route: route.continue_())\n\n    # Pause the page, and start recording manually.\n    page = context.new_page()\n    page.pause()\n"})})}),(0,o.jsx)(s.A,{value:"async",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",children:"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        # Make sure to run headed.\n        browser = await p.chromium.launch(headless=False)\n\n        # Setup context however you like.\n        context = await browser.new_context() # Pass any options\n        await context.route('**/*', lambda route: route.continue_())\n\n        # Pause the page, and start recording manually.\n        page = await context.new_page()\n        await page.pause()\n\nasyncio.run(main())\n"})})})]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},4562:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(4848),a=n(6540),i=function(){return i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};var s=a.forwardRef((function(e,t){var n=a.useState(!1),o=n[0],s=n[1],r=a.useState(!1),c=r[0],l=r[1],d=encodeURIComponent(e.id),h="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,g=e.title,u=e.poster||"hqdefault",p="&".concat(e.params)||0,m=e.muted?"&mute=1":"",w=e.announce||"Watch",x=e.webp?"webp":"jpg",y=e.webp?"vi_webp":"vi",j=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(y,"/").concat(h,"/").concat(u,".").concat(x):"https://i.ytimg.com/".concat(y,"/").concat(d,"/").concat(u,".").concat(x)),f=e.noCookie;f=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var b=e.playlist?"".concat(f,"/embed/videoseries?autoplay=1").concat(m,"&list=").concat(d).concat(p):"".concat(f,"/embed/").concat(d,"?autoplay=1&state=1").concat(m).concat(p),v=e.activatedClass||"lyt-activated",k=e.adNetwork||!1,P=e.aspectHeight||9,E=e.aspectWidth||16,R=e.iframeClass||"",C=e.playerClass||"lty-playbtn",z=e.wrapperClass||"yt-lite",I=e.onIframeAdded||function(){},_=e.rel?"prefetch":"preload",N=e.containerElement||"article";return a.useEffect((function(){c&&I()}),[c]),a.createElement(a.Fragment,null,a.createElement("link",{rel:_,href:j,as:"image"}),a.createElement(a.Fragment,null,o&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:f}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),k&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement(N,{onPointerOver:function(){o||s(!0)},onClick:function(){c||l(!0)},className:"".concat(z," ").concat(c?v:""),"data-title":g,style:i({backgroundImage:"url(".concat(j,")")},{"--aspect-ratio":"".concat(P/E*100,"%")})},a.createElement("button",{type:"button",className:C,"aria-label":"".concat(w," ").concat(g)}),c&&a.createElement("iframe",{ref:t,className:R,title:g,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:b})))}));const r="videoContainer_NvH5";const c=function({id:e,title:t,thumbnail:n}){return(0,o.jsx)("div",{className:r,children:(0,o.jsx)(s,{thumbnail:n,id:e,params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:t,poster:"maxresdefault",webp:!0})})}}}]);