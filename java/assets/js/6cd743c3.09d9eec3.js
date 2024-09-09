"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5944],{7781:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(4848),r=a(8453);a(4235),a(8328),a(3078),a(4562);const s={id:"trace-viewer",title:"Trace viewer"},i=void 0,o={id:"trace-viewer",title:"Trace viewer",description:"Introduction",source:"@site/docs/trace-viewer.mdx",sourceDirName:".",slug:"/trace-viewer",permalink:"/java/docs/next/trace-viewer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"trace-viewer",title:"Trace viewer"},sidebar:"docs",previous:{title:"Test generator",permalink:"/java/docs/next/codegen"},next:{title:"Videos",permalink:"/java/docs/next/videos"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Trace Viewer features",id:"trace-viewer-features",level:2},{value:"Actions",id:"actions",level:3},{value:"Screenshots",id:"screenshots",level:3},{value:"Snapshots",id:"snapshots",level:3},{value:"Source",id:"source",level:3},{value:"Call",id:"call",level:3},{value:"Log",id:"log",level:3},{value:"Errors",id:"errors",level:3},{value:"Console",id:"console",level:3},{value:"Network",id:"network",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Recording a trace",id:"recording-a-trace",level:2},{value:"Opening the trace",id:"opening-the-trace",level:2},{value:"Using trace.playwright.dev",id:"using-traceplaywrightdev",level:2},{value:"Viewing remote traces",id:"viewing-remote-traces",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright Trace Viewer is a GUI tool that helps you explore recorded Playwright traces after the script has run. Traces are a great way for debugging your tests when they fail on CI. You can open traces ",(0,n.jsx)(t.a,{href:"#opening-the-trace",children:"locally"})," or in your browser on ",(0,n.jsx)(t.a,{href:"https://trace.playwright.dev",children:"trace.playwright.dev"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"trace-viewer-features",children:"Trace Viewer features"}),"\n",(0,n.jsx)(t.h3,{id:"actions",children:"Actions"}),"\n",(0,n.jsx)(t.p,{children:"In the Actions tab you can see what locator was used for every action and how long each one took to run. Hover over each action of your test and visually see the change in the DOM snapshot. Go back and forward in time and click an action to inspect and debug. Use the Before and After tabs to visually see what happened before and after the action."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/948b65cd-f0fd-4c7f-8e53-2c632b5a07f1",alt:"actions tab in trace viewer"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Selecting each action reveals:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"action snapshots"}),"\n",(0,n.jsx)(t.li,{children:"action log"}),"\n",(0,n.jsx)(t.li,{children:"source code location"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"screenshots",children:"Screenshots"}),"\n",(0,n.jsxs)(t.p,{children:["When tracing with the ",(0,n.jsx)(t.code,{children:"screenshots"})," option turned on (default), each trace records a screencast and renders it as a film strip. You can hover over the film strip to see a magnified image of for each action and state which helps you easily find the action you want to inspect."]}),"\n",(0,n.jsx)(t.p,{children:"Double click on an action to see the time range for that action. You can use the slider in the timeline to increase the actions selected and these will be shown in the Actions tab and all console logs and network logs will be filtered to only show the logs for the actions selected."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/b04a7d75-54bb-4ab2-9e30-e76f6f74a2c8",alt:"timeline view in trace viewer"})}),"\n",(0,n.jsx)(t.h3,{id:"snapshots",children:"Snapshots"}),"\n",(0,n.jsxs)(t.p,{children:["When tracing with the ",(0,n.jsx)(t.code,{children:"snapshots"})," option turned on (default), Playwright captures a set of complete DOM snapshots for each action. Depending on the type of the action, it will capture:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Before"}),(0,n.jsx)(t.td,{children:"A snapshot at the time action is called."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Action"}),(0,n.jsx)(t.td,{children:"A snapshot at the moment of the performed input. This type of snapshot is especially useful when exploring where exactly Playwright clicked."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"After"}),(0,n.jsx)(t.td,{children:"A snapshot after the action."})]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:"Here is what the typical Action snapshot looks like:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/7168d549-eb0a-4964-9c93-483f03711fa9",alt:"action tab in trace viewer"})}),"\n",(0,n.jsx)(t.p,{children:"Notice how it highlights both, the DOM Node as well as the exact click position."}),"\n",(0,n.jsx)(t.h3,{id:"source",children:"Source"}),"\n",(0,n.jsx)(t.p,{children:"When you click on an action in the sidebar, the line of code for that action is highlighted in the source panel."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/daa8845d-c250-4923-aa7a-5d040da9adc5",alt:"showing source code tab in trace viewer"})}),"\n",(0,n.jsx)(t.h3,{id:"call",children:"Call"}),"\n",(0,n.jsx)(t.p,{children:"The call tab shows you information about the action such as the time it took, what locator was used, if in strict mode and what key was used."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/95498580-f9dd-4932-a123-c37fe7cfc3c2",alt:"showing call tab in trace viewer"})}),"\n",(0,n.jsx)(t.h3,{id:"log",children:"Log"}),"\n",(0,n.jsx)(t.p,{children:"See a full log of your test to better understand what Playwright is doing behind the scenes such as scrolling into view, waiting for element to be visible, enabled and stable and performing actions such as click, fill, press etc."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/de621461-3bab-4140-b39d-9f02d6672dbf",alt:"showing log of tests in trace viewer"})}),"\n",(0,n.jsx)(t.h3,{id:"errors",children:"Errors"}),"\n",(0,n.jsx)(t.p,{children:"If your test fails you will see the error messages for each test in the Errors tab. The timeline will also show a red line highlighting where the error occurred. You can also click on the source tab to see on which line of the source code the error is."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/e9ef77b3-05d1-4df2-852c-981023723d34",alt:"showing errors in trace viewer"})}),"\n",(0,n.jsx)(t.h3,{id:"console",children:"Console"}),"\n",(0,n.jsx)(t.p,{children:"See console logs from the browser as well as from your test. Different icons are displayed to show you if the console log came from the browser or from the test file."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/4107c08d-1eaf-421c-bdd4-9dd2aa641d4a",alt:"showing log of tests in trace viewer"})}),"\n",(0,n.jsxs)(t.p,{children:["Double click on an action from your test in the actions sidebar. This will filter the console to only show the logs that were made during that action. Click the ",(0,n.jsx)(t.em,{children:"Show all"})," button to see all console logs again."]}),"\n",(0,n.jsx)(t.p,{children:"Use the timeline to filter actions, by clicking a start point and dragging to an ending point. The console tab will also be filtered to only show the logs that were made during the actions selected."}),"\n",(0,n.jsx)(t.h3,{id:"network",children:"Network"}),"\n",(0,n.jsx)(t.p,{children:"The Network tab shows you all the network requests that were made during your test. You can sort by different types of requests, status code, method, request, content type, duration and size. Click on a request to see more information about it such as the request headers, response headers, request body and response body."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/0a3d1671-8ccd-4f7a-a844-35f5eb37f236",alt:"network requests tab in trace viewer"})}),"\n",(0,n.jsxs)(t.p,{children:["Double click on an action from your test in the actions sidebar. This will filter the network requests to only show the requests that were made during that action. Click the ",(0,n.jsx)(t.em,{children:"Show all"})," button to see all network requests again."]}),"\n",(0,n.jsx)(t.p,{children:"Use the timeline to filter actions, by clicking a start point and dragging to an ending point. The network tab will also be filtered to only show the network requests that were made during the actions selected."}),"\n",(0,n.jsx)(t.h3,{id:"metadata",children:"Metadata"}),"\n",(0,n.jsx)(t.p,{children:"Next to the Actions tab you will find the Metadata tab which will show you more information on your test such as the Browser, viewport size, test duration and more."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/82ab3d33-1ec9-4b8a-9cf2-30a6e2d59091",alt:"meta data in trace viewer"})}),"\n",(0,n.jsx)(t.h2,{id:"recording-a-trace",children:"Recording a trace"}),"\n",(0,n.jsxs)(t.p,{children:["Traces can be recorded using the ",(0,n.jsx)(t.a,{href:"/java/docs/next/api/class-browsercontext#browser-context-tracing",children:"BrowserContext.tracing()"})," API as follows:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'Browser browser = browserType.launch();\nBrowserContext context = browser.newContext();\n\n// Start tracing before creating / navigating a page.\ncontext.tracing().start(new Tracing.StartOptions()\n  .setScreenshots(true)\n  .setSnapshots(true)\n  .setSources(true));\n\nPage page = context.newPage();\npage.navigate("https://playwright.dev");\n\n// Stop tracing and export it into a zip archive.\ncontext.tracing().stop(new Tracing.StopOptions()\n  .setPath(Paths.get("trace.zip")));\n'})}),"\n",(0,n.jsxs)(t.p,{children:["This will record the trace and place it into the file named ",(0,n.jsx)(t.code,{children:"trace.zip"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"opening-the-trace",children:"Opening the trace"}),"\n",(0,n.jsxs)(t.p,{children:["You can open the saved trace using the Playwright CLI or in your browser on ",(0,n.jsx)(t.a,{href:"https://trace.playwright.dev",children:(0,n.jsx)(t.code,{children:"trace.playwright.dev"})}),". Make sure to add the full path to where your ",(0,n.jsx)(t.code,{children:"trace.zip"})," file is located."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'mvn exec:java -e -D exec.mainClass=com.microsoft.playwright.CLI -D exec.args="show-trace trace.zip"\n'})}),"\n",(0,n.jsxs)(t.h2,{id:"using-traceplaywrightdev",children:["Using ",(0,n.jsx)(t.a,{href:"https://trace.playwright.dev",children:"trace.playwright.dev"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://trace.playwright.dev",children:"trace.playwright.dev"})," is a statically hosted variant of the Trace Viewer. You can upload trace files using drag and drop."]}),"\n",(0,n.jsx)("img",{width:"1119",alt:"Drop Playwright Trace to load",src:"https://user-images.githubusercontent.com/13063165/194577918-b4d45726-2692-4093-8a28-9e73552617ef.png"}),"\n",(0,n.jsx)(t.h2,{id:"viewing-remote-traces",children:"Viewing remote traces"}),"\n",(0,n.jsx)(t.p,{children:"You can open remote traces using its URL. They could be generated on a CI run which makes it easy to view the remote trace without having to manually download the file."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'mvn exec:java -e -D exec.mainClass=com.microsoft.playwright.CLI -D exec.args="show-trace https://example.com/trace.zip"\n'})}),"\n",(0,n.jsx)(t.p,{children:"You can also pass the URL of your uploaded trace (e.g. inside your CI) from some accessible storage as a parameter. CORS (Cross-Origin Resource Sharing) rules might apply."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-txt",children:"https://trace.playwright.dev/?trace=https://demo.playwright.dev/reports/todomvc/data/cb0fa77ebd9487a5c899f3ae65a7ffdbac681182.zip\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4562:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(4848),r=a(6540),s=function(){return s=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)};var i=r.forwardRef((function(e,t){var a=r.useState(!1),n=a[0],i=a[1],o=r.useState(!1),c=o[0],l=o[1],h=encodeURIComponent(e.id),d="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,p=e.title,u=e.poster||"hqdefault",g="&".concat(e.params)||0,w=e.muted?"&mute=1":"",m=e.announce||"Watch",f=e.webp?"webp":"jpg",x=e.webp?"vi_webp":"vi",b=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(x,"/").concat(d,"/").concat(u,".").concat(f):"https://i.ytimg.com/".concat(x,"/").concat(h,"/").concat(u,".").concat(f)),v=e.noCookie;v=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var y=e.playlist?"".concat(v,"/embed/videoseries?autoplay=1").concat(w,"&list=").concat(h).concat(g):"".concat(v,"/embed/").concat(h,"?autoplay=1&state=1").concat(w).concat(g),j=e.activatedClass||"lyt-activated",k=e.adNetwork||!1,C=e.aspectHeight||9,T=e.aspectWidth||16,S=e.iframeClass||"",I=e.playerClass||"lty-playbtn",E=e.wrapperClass||"yt-lite",N=e.onIframeAdded||function(){},A=e.rel?"prefetch":"preload",D=e.containerElement||"article";return r.useEffect((function(){c&&N()}),[c]),r.createElement(r.Fragment,null,r.createElement("link",{rel:A,href:b,as:"image"}),r.createElement(r.Fragment,null,n&&r.createElement(r.Fragment,null,r.createElement("link",{rel:"preconnect",href:v}),r.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),k&&r.createElement(r.Fragment,null,r.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),r.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),r.createElement(D,{onPointerOver:function(){n||i(!0)},onClick:function(){c||l(!0)},className:"".concat(E," ").concat(c?j:""),"data-title":p,style:s({backgroundImage:"url(".concat(b,")")},{"--aspect-ratio":"".concat(C/T*100,"%")})},r.createElement("button",{type:"button",className:I,"aria-label":"".concat(m," ").concat(p)}),c&&r.createElement("iframe",{ref:t,className:S,title:p,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:y})))}));const o="videoContainer_NvH5";const c=function({id:e,title:t,thumbnail:a}){return(0,n.jsx)("div",{className:o,children:(0,n.jsx)(i,{thumbnail:a,id:e,params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:t,poster:"maxresdefault",webp:!0})})}}}]);