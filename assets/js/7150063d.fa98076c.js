"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5343],{7630:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=o(4848),s=o(8453),i=(o(4235),o(8328),o(3078),o(4562));const a={id:"test-ui-mode",title:"UI Mode"},r=void 0,c={id:"test-ui-mode",title:"UI Mode",description:"Introduction",source:"@site/docs/test-ui-mode.mdx",sourceDirName:".",slug:"/test-ui-mode",permalink:"/docs/next/test-ui-mode",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"test-ui-mode",title:"UI Mode"},sidebar:"docs",previous:{title:"TypeScript",permalink:"/docs/next/test-typescript"},next:{title:"Web server",permalink:"/docs/next/test-webserver"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Opening UI Mode",id:"opening-ui-mode",level:2},{value:"Running your tests",id:"running-your-tests",level:2},{value:"Filtering tests",id:"filtering-tests",level:2},{value:"Timeline view",id:"timeline-view",level:2},{value:"Actions",id:"actions",level:2},{value:"Pop out and inspect the DOM",id:"pop-out-and-inspect-the-dom",level:2},{value:"Pick locator",id:"pick-locator",level:2},{value:"Source",id:"source",level:2},{value:"Call",id:"call",level:2},{value:"Log",id:"log",level:2},{value:"Errors",id:"errors",level:2},{value:"Console",id:"console",level:2},{value:"Network",id:"network",level:2},{value:"Attachments",id:"attachments",level:2},{value:"Metadata",id:"metadata",level:2},{value:"Watch mode",id:"watch-mode",level:2},{value:"Docker &amp; GitHub Codespaces",id:"docker--github-codespaces",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(t.p,{children:["UI Mode lets you explore, run and debug tests with a time travel experience complete with watch mode. All test files are loaded into the testing sidebar where you can expand each file and describe block to individually run, view, watch and debug each test. Filter tests by ",(0,n.jsx)(t.strong,{children:"text"})," or ",(0,n.jsx)(t.strong,{children:"@tag"})," or by ",(0,n.jsx)(t.strong,{children:"passed"}),", ",(0,n.jsx)(t.strong,{children:"failed"})," and ",(0,n.jsx)(t.strong,{children:"skipped"})," tests as well as by ",(0,n.jsx)(t.a,{href:"./test-projects",children:(0,n.jsx)(t.strong,{children:"projects"})})," as set in your ",(0,n.jsx)(t.code,{children:"playwright.config"})," file. See a full trace of your tests and hover back and forward over each action to see what was happening during each step and pop out the DOM snapshot to a separate window for a better debugging experience."]}),"\n",(0,n.jsx)(i.A,{id:"d0u6XhXknzU",title:"Playwrights UI Mode"}),"\n",(0,n.jsx)(t.h2,{id:"opening-ui-mode",children:"Opening UI Mode"}),"\n",(0,n.jsx)(t.p,{children:"To open UI mode, run the following command in your terminal:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright test --ui\n"})}),"\n",(0,n.jsx)(t.h2,{id:"running-your-tests",children:"Running your tests"}),"\n",(0,n.jsx)(t.p,{children:"Once you launch UI Mode you will see a list of all your test files. You can run all your tests by clicking the triangle icon in the sidebar. You can also run a single test file, a block of tests or a single test by hovering over the name and clicking on the triangle next to it."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/6b87712f-64a5-4d73-a91d-6562b864712c",alt:"running tests in ui mode"})}),"\n",(0,n.jsx)(t.h2,{id:"filtering-tests",children:"Filtering tests"}),"\n",(0,n.jsxs)(t.p,{children:["Filter tests by text or ",(0,n.jsx)(t.code,{children:"@tag"})," or by passed, failed or skipped tests. You can also filter by ",(0,n.jsx)(t.a,{href:"./test-projects",children:"projects"})," as set in your ",(0,n.jsx)(t.code,{children:"playwright.config"})," file. If you are using project dependencies make sure to run your setup tests first before running the tests that depend on them. The UI mode will not take into consideration the setup tests and therefore you will have to manually run them first."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/6f05e589-036d-45d5-9078-38134e1261e4",alt:"filtering tests in ui mode"})}),"\n",(0,n.jsx)(t.h2,{id:"timeline-view",children:"Timeline view"}),"\n",(0,n.jsx)(t.p,{children:"At the top of the trace you can see a timeline view of your test with different colors to highlight navigation and actions. Hover back and forth to see an image snapshot for each action. Double click on an action to see the time range for that action. You can use the slider in the timeline to increase the actions selected and these will be shown in the Actions tab and all console logs and network logs will be filtered to only show the logs for the actions selected."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/811a9985-32aa-4a3e-9869-de32053cf468",alt:"timeline view in ui mode"})}),"\n",(0,n.jsx)(t.h2,{id:"actions",children:"Actions"}),"\n",(0,n.jsxs)(t.p,{children:["In the Actions tab you can see what locator was used for every action and how long each one took to run. Hover over each action of your test and visually see the change in the DOM snapshot. Go back and forward in time and click an action to inspect and debug. Use the Before and After tabs to visually see what happened before and after the action.  ",(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/7b22fab5-7346-4b98-8fdd-a78ed280647f",alt:"use before and after actions in ui mode"})]}),"\n",(0,n.jsx)(t.h2,{id:"pop-out-and-inspect-the-dom",children:"Pop out and inspect the DOM"}),"\n",(0,n.jsx)(t.p,{children:"Pop out the DOM snapshot into its own window for a better debugging experience by clicking on the pop out icon above the DOM snapshot. From there you can open the browser DevTools and inspect the HTML, CSS, Console etc. Go back to UI Mode and click on another action and pop that one out to easily compare the two side by side or debug each individually."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/f9f43a0c-78d7-4574-9a58-c69d2ec53c8f",alt:"pop out dom snapshot in ui mode"})}),"\n",(0,n.jsx)(t.h2,{id:"pick-locator",children:"Pick locator"}),"\n",(0,n.jsx)(t.p,{children:"Click on the pick locator button and hover over the DOM snapshot to see the locator for each element highlighted as you hover. Click on an element to add the locator playground. You can modify the locator in the playground and see if your modified locator matches any locators in the DOM snapshot. Once you are satisfied with the locator you can use the copy button to copy the locator and paste it into your test."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/9e7eeb84-bd26-4010-8614-75e24b56c716",alt:"pick locator in ui mode"})}),"\n",(0,n.jsx)(t.h2,{id:"source",children:"Source"}),"\n",(0,n.jsx)(t.p,{children:"As you hover over each action of your test the line of code for that action is highlighted in the source panel."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/49b9fa2a-8a57-4044-acaa-0a2ea4784c5c",alt:"showing source code of tests in ui mode"})}),"\n",(0,n.jsx)(t.h2,{id:"call",children:"Call"}),"\n",(0,n.jsx)(t.p,{children:"The call tab shows you information about the action such as the time it took, what locator was used, if in strict mode and what key was used."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/442314c3-0b16-4400-bf25-c198f8654849",alt:"showing call tab in ui mode"})}),"\n",(0,n.jsx)(t.h2,{id:"log",children:"Log"}),"\n",(0,n.jsx)(t.p,{children:"See a full log of your test to better understand what Playwright is doing behind the scenes such as scrolling into view, waiting for element to be visible, enabled and stable and performing actions such as click, fill, press etc."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/1d214ee5-2c07-414d-a342-f88d0864ac89",alt:"showing log of tests in ui mode"})}),"\n",(0,n.jsx)(t.h2,{id:"errors",children:"Errors"}),"\n",(0,n.jsx)(t.p,{children:"If your test fails you will see the error messages for each test in the Errors tab. The timeline will also show a red line highlighting where the error occurred. You can also click on the source tab to see on which line of the source code the error is."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/ffca2fd1-5349-41fb-ade9-ace143bb2c58",alt:"showing errors in ui mode"})}),"\n",(0,n.jsx)(t.h2,{id:"console",children:"Console"}),"\n",(0,n.jsx)(t.p,{children:"See console logs from the browser as well as from your test. Different icons are displayed to show you if the console log came from the browser or from the test file."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/b6a44763-da04-4152-bbac-3369ca4a60ac",alt:"showing console logs from tests in ui mode"})}),"\n",(0,n.jsx)(t.h2,{id:"network",children:"Network"}),"\n",(0,n.jsx)(t.p,{children:"The Network tab shows you all the network requests that were made during your test. You can sort by different types of requests, status code, method, request, content type, duration and size. Click on a request to see more information about it such as the request headers, response headers, request body and response body."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/946c2722-447a-4005-9518-b4e9b73a8240",alt:"showing network requests from tests in ui mode"})}),"\n",(0,n.jsx)(t.h2,{id:"attachments",children:"Attachments"}),"\n",(0,n.jsxs)(t.p,{children:['The "Attachments" tab allows you to explore attachments. If you\'re doing ',(0,n.jsx)(t.a,{href:"/docs/next/test-snapshots",children:"visual regression testing"}),", you'll be able to compare screenshots by examining the image diff, the actual image and the expected image. When you click on the expected image you can use the slider to slide one image over the other so you can easily see the differences in your screenshots."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/bb83b406-84ed-4380-a96c-0e62d1388093",alt:"ui mode with attachments"})}),"\n",(0,n.jsx)(t.h2,{id:"metadata",children:"Metadata"}),"\n",(0,n.jsx)(t.p,{children:"Next to the Actions tab you will find the Metadata tab which will show you more information on your test such as the Browser, viewport size, test duration and more."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/befff46e-381a-41c2-8259-e47442add425",alt:"metadata tab in ui mode"})}),"\n",(0,n.jsx)(t.h2,{id:"watch-mode",children:"Watch mode"}),"\n",(0,n.jsx)(t.p,{children:"Next to the name of each test in the sidebar you will find an eye icon. Clicking on the icon will activate watch mode which will re-run the test when you make changes to it. You can watch a number of tests at the same time be clicking the eye icon next to each one or all tests by clicking the eye icon at the top of the sidebar. If you are using VS Code then you can easily open your test by clicking on the file icon next to the eye icon. This will open your test in VS Code right at the line of code that you clicked on."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/20d7d44c-b52d-43ff-8871-8b828671f3da",alt:"watch mode in ui mode"})}),"\n",(0,n.jsx)(t.h2,{id:"docker--github-codespaces",children:"Docker & GitHub Codespaces"}),"\n",(0,n.jsxs)(t.p,{children:["For Docker and GitHub Codespaces environments, you can run UI mode in the browser. In order for an endpoint to be accessible outside of the container, it needs to be bound to the ",(0,n.jsx)(t.code,{children:"0.0.0.0"})," interface:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright test --ui-host=0.0.0.0\n"})}),"\n",(0,n.jsxs)(t.p,{children:["In the case of GitHub Codespaces, the port gets ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#about-forwarded-ports",children:"forwarded automatically"}),", so you can open UI mode in the browser by clicking on the link in the terminal."]}),"\n",(0,n.jsxs)(t.p,{children:["To have a static port, you can pass the ",(0,n.jsx)(t.code,{children:"--ui-port"})," flag:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright test --ui-port=8080 --ui-host=0.0.0.0\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Be aware that when specifying the ",(0,n.jsx)(t.code,{children:"--ui-host=0.0.0.0"})," flag, UI Mode with your traces, the passwords and secrets is accessible from other machines inside your network. In the case of GitHub Codespaces, the ports are only accessible from your account by default."]})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4562:(e,t,o)=>{o.d(t,{A:()=>c});var n=o(4848),s=o(6540),i=function(){return i=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var s in t=arguments[o])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},i.apply(this,arguments)};var a=s.forwardRef((function(e,t){var o=s.useState(!1),n=o[0],a=o[1],r=s.useState(!1),c=r[0],l=r[1],d=encodeURIComponent(e.id),h="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,u=e.title,p=e.poster||"hqdefault",m="&".concat(e.params)||0,g=e.muted?"&mute=1":"",f=e.announce||"Watch",b=e.webp?"webp":"jpg",y=e.webp?"vi_webp":"vi",w=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(y,"/").concat(h,"/").concat(p,".").concat(b):"https://i.ytimg.com/".concat(y,"/").concat(d,"/").concat(p,".").concat(b)),x=e.noCookie;x=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var j=e.playlist?"".concat(x,"/embed/videoseries?autoplay=1").concat(g,"&list=").concat(d).concat(m):"".concat(x,"/embed/").concat(d,"?autoplay=1&state=1").concat(g).concat(m),v=e.activatedClass||"lyt-activated",k=e.adNetwork||!1,I=e.aspectHeight||9,C=e.aspectWidth||16,M=e.iframeClass||"",U=e.playerClass||"lty-playbtn",E=e.wrapperClass||"yt-lite",O=e.onIframeAdded||function(){},A=e.rel?"prefetch":"preload",D=e.containerElement||"article";return s.useEffect((function(){c&&O()}),[c]),s.createElement(s.Fragment,null,s.createElement("link",{rel:A,href:w,as:"image"}),s.createElement(s.Fragment,null,n&&s.createElement(s.Fragment,null,s.createElement("link",{rel:"preconnect",href:x}),s.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),k&&s.createElement(s.Fragment,null,s.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),s.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),s.createElement(D,{onPointerOver:function(){n||a(!0)},onClick:function(){c||l(!0)},className:"".concat(E," ").concat(c?v:""),"data-title":u,style:i({backgroundImage:"url(".concat(w,")")},{"--aspect-ratio":"".concat(I/C*100,"%")})},s.createElement("button",{type:"button",className:U,"aria-label":"".concat(f," ").concat(u)}),c&&s.createElement("iframe",{ref:t,className:M,title:u,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:j})))}));const r="videoContainer_NvH5";const c=function({id:e,title:t,thumbnail:o}){return(0,n.jsx)("div",{className:r,children:(0,n.jsx)(a,{thumbnail:o,id:e,params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:t,poster:"maxresdefault",webp:!0})})}}}]);