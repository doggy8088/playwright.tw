"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5944],{7781:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var n=a(4848),r=a(8453),s=a(4235),i=a(8328),o=(a(3078),a(4562));const c={id:"trace-viewer",title:"Trace viewer"},l=void 0,h={id:"trace-viewer",title:"Trace viewer",description:"Introduction",source:"@site/docs/trace-viewer.mdx",sourceDirName:".",slug:"/trace-viewer",permalink:"/docs/next/trace-viewer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"trace-viewer",title:"Trace viewer"},sidebar:"docs",previous:{title:"Test generator",permalink:"/docs/next/codegen"},next:{title:"Videos",permalink:"/docs/next/videos"}},d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Trace Viewer features",id:"trace-viewer-features",level:2},{value:"Actions",id:"actions",level:3},{value:"Screenshots",id:"screenshots",level:3},{value:"Snapshots",id:"snapshots",level:3},{value:"Source",id:"source",level:3},{value:"Call",id:"call",level:3},{value:"Log",id:"log",level:3},{value:"Errors",id:"errors",level:3},{value:"Console",id:"console",level:3},{value:"Network",id:"network",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Attachments",id:"attachments",level:3},{value:"Recording a trace locally",id:"recording-a-trace-locally",level:2},{value:"Recording a trace on CI",id:"recording-a-trace-on-ci",level:2},{value:"Opening the trace",id:"opening-the-trace",level:2},{value:"Using trace.playwright.dev",id:"using-traceplaywrightdev",level:2},{value:"Viewing remote traces",id:"viewing-remote-traces",level:2}];function u(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h6:"h6",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright Trace Viewer is a GUI tool that helps you explore recorded Playwright traces after the script has run. Traces are a great way for debugging your tests when they fail on CI. You can open traces ",(0,n.jsx)(t.a,{href:"#opening-the-trace",children:"locally"})," or in your browser on ",(0,n.jsx)(t.a,{href:"https://trace.playwright.dev",children:"trace.playwright.dev"}),"."]}),"\n",(0,n.jsx)(t.h6,{id:""}),"\n",(0,n.jsx)(o.A,{id:"yP6AnTxC34s",title:"Viewing Playwright Traces"}),"\n",(0,n.jsx)(t.h2,{id:"trace-viewer-features",children:"Trace Viewer features"}),"\n",(0,n.jsx)(t.h3,{id:"actions",children:"Actions"}),"\n",(0,n.jsx)(t.p,{children:"In the Actions tab you can see what locator was used for every action and how long each one took to run. Hover over each action of your test and visually see the change in the DOM snapshot. Go back and forward in time and click an action to inspect and debug. Use the Before and After tabs to visually see what happened before and after the action."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/948b65cd-f0fd-4c7f-8e53-2c632b5a07f1",alt:"actions tab in trace viewer"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Selecting each action reveals:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"action snapshots"}),"\n",(0,n.jsx)(t.li,{children:"action log"}),"\n",(0,n.jsx)(t.li,{children:"source code location"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"screenshots",children:"Screenshots"}),"\n",(0,n.jsxs)(t.p,{children:["When tracing with the ",(0,n.jsx)(t.code,{children:"screenshots"})," option turned on (default), each trace records a screencast and renders it as a film strip. You can hover over the film strip to see a magnified image of for each action and state which helps you easily find the action you want to inspect."]}),"\n",(0,n.jsx)(t.p,{children:"Double click on an action to see the time range for that action. You can use the slider in the timeline to increase the actions selected and these will be shown in the Actions tab and all console logs and network logs will be filtered to only show the logs for the actions selected."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/b04a7d75-54bb-4ab2-9e30-e76f6f74a2c8",alt:"timeline view in trace viewer"})}),"\n",(0,n.jsx)(t.h3,{id:"snapshots",children:"Snapshots"}),"\n",(0,n.jsxs)(t.p,{children:["When tracing with the ",(0,n.jsx)(t.code,{children:"snapshots"})," option turned on (default), Playwright captures a set of complete DOM snapshots for each action. Depending on the type of the action, it will capture:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Before"}),(0,n.jsx)(t.td,{children:"A snapshot at the time action is called."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Action"}),(0,n.jsx)(t.td,{children:"A snapshot at the moment of the performed input. This type of snapshot is especially useful when exploring where exactly Playwright clicked."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"After"}),(0,n.jsx)(t.td,{children:"A snapshot after the action."})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"Here is what the typical Action snapshot looks like:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/7168d549-eb0a-4964-9c93-483f03711fa9",alt:"action tab in trace viewer"})}),"\n",(0,n.jsx)(t.p,{children:"Notice how it highlights both, the DOM Node as well as the exact click position."}),"\n",(0,n.jsx)(t.h3,{id:"source",children:"Source"}),"\n",(0,n.jsx)(t.p,{children:"When you click on an action in the sidebar, the line of code for that action is highlighted in the source panel."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/daa8845d-c250-4923-aa7a-5d040da9adc5",alt:"showing source code tab in trace viewer"})}),"\n",(0,n.jsx)(t.h3,{id:"call",children:"Call"}),"\n",(0,n.jsx)(t.p,{children:"The call tab shows you information about the action such as the time it took, what locator was used, if in strict mode and what key was used."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/95498580-f9dd-4932-a123-c37fe7cfc3c2",alt:"showing call tab in trace viewer"})}),"\n",(0,n.jsx)(t.h3,{id:"log",children:"Log"}),"\n",(0,n.jsx)(t.p,{children:"See a full log of your test to better understand what Playwright is doing behind the scenes such as scrolling into view, waiting for element to be visible, enabled and stable and performing actions such as click, fill, press etc."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/de621461-3bab-4140-b39d-9f02d6672dbf",alt:"showing log of tests in trace viewer"})}),"\n",(0,n.jsx)(t.h3,{id:"errors",children:"Errors"}),"\n",(0,n.jsx)(t.p,{children:"If your test fails you will see the error messages for each test in the Errors tab. The timeline will also show a red line highlighting where the error occurred. You can also click on the source tab to see on which line of the source code the error is."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/e9ef77b3-05d1-4df2-852c-981023723d34",alt:"showing errors in trace viewer"})}),"\n",(0,n.jsx)(t.h3,{id:"console",children:"Console"}),"\n",(0,n.jsx)(t.p,{children:"See console logs from the browser as well as from your test. Different icons are displayed to show you if the console log came from the browser or from the test file."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/4107c08d-1eaf-421c-bdd4-9dd2aa641d4a",alt:"showing log of tests in trace viewer"})}),"\n",(0,n.jsxs)(t.p,{children:["Double click on an action from your test in the actions sidebar. This will filter the console to only show the logs that were made during that action. Click the ",(0,n.jsx)(t.em,{children:"Show all"})," button to see all console logs again."]}),"\n",(0,n.jsx)(t.p,{children:"Use the timeline to filter actions, by clicking a start point and dragging to an ending point. The console tab will also be filtered to only show the logs that were made during the actions selected."}),"\n",(0,n.jsx)(t.h3,{id:"network",children:"Network"}),"\n",(0,n.jsx)(t.p,{children:"The Network tab shows you all the network requests that were made during your test. You can sort by different types of requests, status code, method, request, content type, duration and size. Click on a request to see more information about it such as the request headers, response headers, request body and response body."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/0a3d1671-8ccd-4f7a-a844-35f5eb37f236",alt:"network requests tab in trace viewer"})}),"\n",(0,n.jsxs)(t.p,{children:["Double click on an action from your test in the actions sidebar. This will filter the network requests to only show the requests that were made during that action. Click the ",(0,n.jsx)(t.em,{children:"Show all"})," button to see all network requests again."]}),"\n",(0,n.jsx)(t.p,{children:"Use the timeline to filter actions, by clicking a start point and dragging to an ending point. The network tab will also be filtered to only show the network requests that were made during the actions selected."}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"Metadata"}),"\n",(0,n.jsx)(t.p,{children:"Next to the Actions tab you will find the Metadata tab which will show you more information on your test such as the Browser, viewport size, test duration and more."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/82ab3d33-1ec9-4b8a-9cf2-30a6e2d59091",alt:"meta data in trace viewer"})}),"\n",(0,n.jsx)(t.h3,{id:"attachments",children:"Attachments"}),"\n",(0,n.jsxs)(t.p,{children:['The "Attachments" tab allows you to explore attachments. If you\'re doing ',(0,n.jsx)(t.a,{href:"/docs/next/test-snapshots",children:"visual regression testing"}),", you'll be able to compare screenshots by examining the image diff, the actual image and the expected image. When you click on the expected image you can use the slider to slide one image over the other so you can easily see the differences in your screenshots."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/4386178a-5808-4fa8-9436-315350a23b04",alt:"attachments tab in trace viewer"})}),"\n",(0,n.jsx)(t.h2,{id:"recording-a-trace-locally",children:"Recording a trace locally"}),"\n",(0,n.jsxs)(t.p,{children:["To record a trace during development mode set the ",(0,n.jsx)(t.code,{children:"--trace"})," flag to ",(0,n.jsx)(t.code,{children:"on"})," when running your tests. You can also use ",(0,n.jsx)(t.a,{href:"/docs/next/test-ui-mode",children:"UI Mode"})," for a better developer experience."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright test --trace on\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can then open the HTML report and click on the trace icon to open the trace."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright show-report\n"})}),"\n",(0,n.jsx)(t.h2,{id:"recording-a-trace-on-ci",children:"Recording a trace on CI"}),"\n",(0,n.jsxs)(t.p,{children:["Traces should be run on continuous integration on the first retry of a failed test by setting the ",(0,n.jsx)(t.code,{children:"trace: 'on-first-retry'"})," option in the test configuration file. This will produce a ",(0,n.jsx)(t.code,{children:"trace.zip"})," file for each test that was retried."]}),"\n",(0,n.jsxs)(s.A,{groupId:"js-flavor",defaultValue:"test",values:[{label:"Test",value:"test"},{label:"Library",value:"library"}],children:[(0,n.jsx)(i.A,{value:"test",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\nexport default defineConfig({\n  retries: 1,\n  use: {\n    trace: 'on-first-retry',\n  },\n});\n"})})}),(0,n.jsx)(i.A,{value:"library",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const browser = await chromium.launch();\nconst context = await browser.newContext();\n\n// Start tracing before creating / navigating a page.\nawait context.tracing.start({ screenshots: true, snapshots: true });\n\nconst page = await context.newPage();\nawait page.goto('https://playwright.dev');\n\n// Stop tracing and export it into a zip archive.\nawait context.tracing.stop({ path: 'trace.zip' });\n"})})})]}),"\n",(0,n.jsx)(t.p,{children:"Available options to record a trace:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"'on-first-retry'"})," - Record a trace only when retrying a test for the first time."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"'on-all-retries'"})," - Record traces for all test retries."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"'off'"})," - Do not record a trace."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"'on'"})," - Record a trace for each test. (not recommended as it's performance heavy)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"'retain-on-failure'"})," - Record a trace for each test, but remove it from successful test runs."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["You can also use ",(0,n.jsx)(t.code,{children:"trace: 'retain-on-failure'"})," if you do not enable retries but still want traces for failed tests."]}),"\n",(0,n.jsxs)(t.p,{children:["There are more granular options available, see ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-trace",children:"testOptions.trace"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you are not using Playwright as a Test Runner, use the ",(0,n.jsx)(t.a,{href:"/docs/next/api/class-browsercontext#browser-context-tracing",children:"browserContext.tracing"})," API instead."]}),"\n",(0,n.jsx)(t.h2,{id:"opening-the-trace",children:"Opening the trace"}),"\n",(0,n.jsxs)(t.p,{children:["You can open the saved trace using the Playwright CLI or in your browser on ",(0,n.jsx)(t.a,{href:"https://trace.playwright.dev",children:(0,n.jsx)(t.code,{children:"trace.playwright.dev"})}),". Make sure to add the full path to where your ",(0,n.jsx)(t.code,{children:"trace.zip"})," file is located."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright show-trace path/to/trace.zip\n"})}),"\n",(0,n.jsxs)(t.h2,{id:"using-traceplaywrightdev",children:["Using ",(0,n.jsx)(t.a,{href:"https://trace.playwright.dev",children:"trace.playwright.dev"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://trace.playwright.dev",children:"trace.playwright.dev"})," is a statically hosted variant of the Trace Viewer. You can upload trace files using drag and drop."]}),"\n",(0,n.jsx)("img",{width:"1119",alt:"Drop Playwright Trace to load",src:"https://user-images.githubusercontent.com/13063165/194577918-b4d45726-2692-4093-8a28-9e73552617ef.png"}),"\n",(0,n.jsx)(t.h2,{id:"viewing-remote-traces",children:"Viewing remote traces"}),"\n",(0,n.jsx)(t.p,{children:"You can open remote traces using its URL. They could be generated on a CI run which makes it easy to view the remote trace without having to manually download the file."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright show-trace https://example.com/trace.zip\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can also pass the URL of your uploaded trace (e.g. inside your CI) from some accessible storage as a parameter. CORS (Cross-Origin Resource Sharing) rules might apply."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-txt",children:"https://trace.playwright.dev/?trace=https://demo.playwright.dev/reports/todomvc/data/cb0fa77ebd9487a5c899f3ae65a7ffdbac681182.zip\n"})})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},4562:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(4848),r=a(6540),s=function(){return s=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)};var i=r.forwardRef((function(e,t){var a=r.useState(!1),n=a[0],i=a[1],o=r.useState(!1),c=o[0],l=o[1],h=encodeURIComponent(e.id),d="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,p=e.title,u=e.poster||"hqdefault",g="&".concat(e.params)||0,w=e.muted?"&mute=1":"",f=e.announce||"Watch",m=e.webp?"webp":"jpg",x=e.webp?"vi_webp":"vi",y=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(x,"/").concat(d,"/").concat(u,".").concat(m):"https://i.ytimg.com/".concat(x,"/").concat(h,"/").concat(u,".").concat(m)),j=e.noCookie;j=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var b=e.playlist?"".concat(j,"/embed/videoseries?autoplay=1").concat(w,"&list=").concat(h).concat(g):"".concat(j,"/embed/").concat(h,"?autoplay=1&state=1").concat(w).concat(g),v=e.activatedClass||"lyt-activated",k=e.adNetwork||!1,C=e.aspectHeight||9,T=e.aspectWidth||16,A=e.iframeClass||"",I=e.playerClass||"lty-playbtn",N=e.wrapperClass||"yt-lite",R=e.onIframeAdded||function(){},S=e.rel?"prefetch":"preload",E=e.containerElement||"article";return r.useEffect((function(){c&&R()}),[c]),r.createElement(r.Fragment,null,r.createElement("link",{rel:S,href:y,as:"image"}),r.createElement(r.Fragment,null,n&&r.createElement(r.Fragment,null,r.createElement("link",{rel:"preconnect",href:j}),r.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),k&&r.createElement(r.Fragment,null,r.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),r.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),r.createElement(E,{onPointerOver:function(){n||i(!0)},onClick:function(){c||l(!0)},className:"".concat(N," ").concat(c?v:""),"data-title":p,style:s({backgroundImage:"url(".concat(y,")")},{"--aspect-ratio":"".concat(C/T*100,"%")})},r.createElement("button",{type:"button",className:I,"aria-label":"".concat(f," ").concat(p)}),c&&r.createElement("iframe",{ref:t,className:A,title:p,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:b})))}));const o="videoContainer_NvH5";const c=function({id:e,title:t,thumbnail:a}){return(0,n.jsx)("div",{className:o,children:(0,n.jsx)(i,{thumbnail:a,id:e,params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:t,poster:"maxresdefault",webp:!0})})}}}]);