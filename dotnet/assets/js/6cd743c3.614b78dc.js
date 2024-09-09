"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5944],{7781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(4848),s=n(8453),r=n(4235),i=n(8328);n(3078),n(4562);const o={id:"trace-viewer",title:"Trace viewer"},c=void 0,l={id:"trace-viewer",title:"Trace viewer",description:"Introduction",source:"@site/docs/trace-viewer.mdx",sourceDirName:".",slug:"/trace-viewer",permalink:"/dotnet/docs/next/trace-viewer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"trace-viewer",title:"Trace viewer"},sidebar:"docs",previous:{title:"Test generator",permalink:"/dotnet/docs/next/codegen"},next:{title:"Videos",permalink:"/dotnet/docs/next/videos"}},h={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Trace Viewer features",id:"trace-viewer-features",level:2},{value:"Actions",id:"actions",level:3},{value:"Screenshots",id:"screenshots",level:3},{value:"Snapshots",id:"snapshots",level:3},{value:"Source",id:"source",level:3},{value:"Call",id:"call",level:3},{value:"Log",id:"log",level:3},{value:"Errors",id:"errors",level:3},{value:"Console",id:"console",level:3},{value:"Network",id:"network",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Recording a trace",id:"recording-a-trace",level:2},{value:"Run trace only on failure",id:"run-trace-only-on-failure",level:2},{value:"Opening the trace",id:"opening-the-trace",level:2},{value:"Using trace.playwright.dev",id:"using-traceplaywrightdev",level:2},{value:"Viewing remote traces",id:"viewing-remote-traces",level:2}];function u(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(t.p,{children:["Playwright Trace Viewer is a GUI tool that helps you explore recorded Playwright traces after the script has run. Traces are a great way for debugging your tests when they fail on CI. You can open traces ",(0,a.jsx)(t.a,{href:"#opening-the-trace",children:"locally"})," or in your browser on ",(0,a.jsx)(t.a,{href:"https://trace.playwright.dev",children:"trace.playwright.dev"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"trace-viewer-features",children:"Trace Viewer features"}),"\n",(0,a.jsx)(t.h3,{id:"actions",children:"Actions"}),"\n",(0,a.jsx)(t.p,{children:"In the Actions tab you can see what locator was used for every action and how long each one took to run. Hover over each action of your test and visually see the change in the DOM snapshot. Go back and forward in time and click an action to inspect and debug. Use the Before and After tabs to visually see what happened before and after the action."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/948b65cd-f0fd-4c7f-8e53-2c632b5a07f1",alt:"actions tab in trace viewer"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Selecting each action reveals:"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"action snapshots"}),"\n",(0,a.jsx)(t.li,{children:"action log"}),"\n",(0,a.jsx)(t.li,{children:"source code location"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"screenshots",children:"Screenshots"}),"\n",(0,a.jsxs)(t.p,{children:["When tracing with the ",(0,a.jsx)(t.code,{children:"screenshots"})," option turned on (default), each trace records a screencast and renders it as a film strip. You can hover over the film strip to see a magnified image of for each action and state which helps you easily find the action you want to inspect."]}),"\n",(0,a.jsx)(t.p,{children:"Double click on an action to see the time range for that action. You can use the slider in the timeline to increase the actions selected and these will be shown in the Actions tab and all console logs and network logs will be filtered to only show the logs for the actions selected."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/b04a7d75-54bb-4ab2-9e30-e76f6f74a2c8",alt:"timeline view in trace viewer"})}),"\n",(0,a.jsx)(t.h3,{id:"snapshots",children:"Snapshots"}),"\n",(0,a.jsxs)(t.p,{children:["When tracing with the ",(0,a.jsx)(t.code,{children:"snapshots"})," option turned on (default), Playwright captures a set of complete DOM snapshots for each action. Depending on the type of the action, it will capture:"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Before"}),(0,a.jsx)(t.td,{children:"A snapshot at the time action is called."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Action"}),(0,a.jsx)(t.td,{children:"A snapshot at the moment of the performed input. This type of snapshot is especially useful when exploring where exactly Playwright clicked."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"After"}),(0,a.jsx)(t.td,{children:"A snapshot after the action."})]})]})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.p,{children:"Here is what the typical Action snapshot looks like:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/7168d549-eb0a-4964-9c93-483f03711fa9",alt:"action tab in trace viewer"})}),"\n",(0,a.jsx)(t.p,{children:"Notice how it highlights both, the DOM Node as well as the exact click position."}),"\n",(0,a.jsx)(t.h3,{id:"source",children:"Source"}),"\n",(0,a.jsx)(t.p,{children:"When you click on an action in the sidebar, the line of code for that action is highlighted in the source panel."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/daa8845d-c250-4923-aa7a-5d040da9adc5",alt:"showing source code tab in trace viewer"})}),"\n",(0,a.jsx)(t.h3,{id:"call",children:"Call"}),"\n",(0,a.jsx)(t.p,{children:"The call tab shows you information about the action such as the time it took, what locator was used, if in strict mode and what key was used."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/95498580-f9dd-4932-a123-c37fe7cfc3c2",alt:"showing call tab in trace viewer"})}),"\n",(0,a.jsx)(t.h3,{id:"log",children:"Log"}),"\n",(0,a.jsx)(t.p,{children:"See a full log of your test to better understand what Playwright is doing behind the scenes such as scrolling into view, waiting for element to be visible, enabled and stable and performing actions such as click, fill, press etc."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/de621461-3bab-4140-b39d-9f02d6672dbf",alt:"showing log of tests in trace viewer"})}),"\n",(0,a.jsx)(t.h3,{id:"errors",children:"Errors"}),"\n",(0,a.jsx)(t.p,{children:"If your test fails you will see the error messages for each test in the Errors tab. The timeline will also show a red line highlighting where the error occurred. You can also click on the source tab to see on which line of the source code the error is."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/e9ef77b3-05d1-4df2-852c-981023723d34",alt:"showing errors in trace viewer"})}),"\n",(0,a.jsx)(t.h3,{id:"console",children:"Console"}),"\n",(0,a.jsx)(t.p,{children:"See console logs from the browser as well as from your test. Different icons are displayed to show you if the console log came from the browser or from the test file."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/4107c08d-1eaf-421c-bdd4-9dd2aa641d4a",alt:"showing log of tests in trace viewer"})}),"\n",(0,a.jsxs)(t.p,{children:["Double click on an action from your test in the actions sidebar. This will filter the console to only show the logs that were made during that action. Click the ",(0,a.jsx)(t.em,{children:"Show all"})," button to see all console logs again."]}),"\n",(0,a.jsx)(t.p,{children:"Use the timeline to filter actions, by clicking a start point and dragging to an ending point. The console tab will also be filtered to only show the logs that were made during the actions selected."}),"\n",(0,a.jsx)(t.h3,{id:"network",children:"Network"}),"\n",(0,a.jsx)(t.p,{children:"The Network tab shows you all the network requests that were made during your test. You can sort by different types of requests, status code, method, request, content type, duration and size. Click on a request to see more information about it such as the request headers, response headers, request body and response body."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/0a3d1671-8ccd-4f7a-a844-35f5eb37f236",alt:"network requests tab in trace viewer"})}),"\n",(0,a.jsxs)(t.p,{children:["Double click on an action from your test in the actions sidebar. This will filter the network requests to only show the requests that were made during that action. Click the ",(0,a.jsx)(t.em,{children:"Show all"})," button to see all network requests again."]}),"\n",(0,a.jsx)(t.p,{children:"Use the timeline to filter actions, by clicking a start point and dragging to an ending point. The network tab will also be filtered to only show the network requests that were made during the actions selected."}),"\n",(0,a.jsx)(t.h3,{id:"metadata",children:"Metadata"}),"\n",(0,a.jsx)(t.p,{children:"Next to the Actions tab you will find the Metadata tab which will show you more information on your test such as the Browser, viewport size, test duration and more."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/82ab3d33-1ec9-4b8a-9cf2-30a6e2d59091",alt:"meta data in trace viewer"})}),"\n",(0,a.jsx)(t.h2,{id:"recording-a-trace",children:"Recording a trace"}),"\n",(0,a.jsxs)(t.p,{children:["Traces can be recorded using the ",(0,a.jsx)(t.a,{href:"/dotnet/docs/next/api/class-browsercontext#browser-context-tracing",children:"BrowserContext.Tracing"})," API as follows:"]}),"\n",(0,a.jsxs)(r.A,{groupId:"test-runners",defaultValue:"mstest",values:[{label:"MSTest",value:"mstest"},{label:"NUnit",value:"nunit"}],children:[(0,a.jsx)(i.A,{value:"nunit",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:'namespace PlaywrightTests;\n\n[Parallelizable(ParallelScope.Self)]\n[TestFixture]\npublic class Tests : PageTest\n{\n    [SetUp]\n    public async Task Setup()\n    {\n        await Context.Tracing.StartAsync(new()\n        {\n            Title = TestContext.CurrentContext.Test.ClassName + "." + TestContext.CurrentContext.Test.Name,\n            Screenshots = true,\n            Snapshots = true,\n            Sources = true\n        });\n    }\n\n    [TearDown]\n    public async Task TearDown()\n    {\n        // This will produce e.g.:\n        // bin/Debug/net8.0/playwright-traces/PlaywrightTests.Tests.Test1.zip\n        await Context.Tracing.StopAsync(new()\n        {\n            Path = Path.Combine(\n                TestContext.CurrentContext.WorkDirectory,\n                "playwright-traces",\n                $"{TestContext.CurrentContext.Test.ClassName}.{TestContext.CurrentContext.Test.Name}.zip"\n            )\n        });\n    }\n\n    [Test]\n    public async Task TestYourOnlineShop()\n    {\n        // ..\n    }\n}\n'})})}),(0,a.jsx)(i.A,{value:"mstest",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:'using System.Text.RegularExpressions;\nusing Microsoft.Playwright;\nusing Microsoft.Playwright.MSTest;\n\nnamespace PlaywrightTestsMSTest;\n\n[TestClass]\npublic class UnitTest1 : PageTest\n{\n    [TestInitialize]\n    public async Task TestInitialize()\n    {\n         await Context.Tracing.StartAsync(new()\n        {\n            Title = TestContext.TestName,\n            Screenshots = true,\n            Snapshots = true,\n            Sources = true\n        });\n    }\n\n    [TestCleanup]\n    public async Task TestCleanup()\n    {\n        // This will produce e.g.:\n        // bin/Debug/net8.0/playwright-traces/PlaywrightTests.UnitTest1.zip\n        await Context.Tracing.StopAsync(new()\n        {\n            Path = Path.Combine(\n                Environment.CurrentDirectory,\n                "playwright-traces",\n                $"{TestContext.FullyQualifiedTestClassName}.zip"\n            )\n        });\n    }\n\n    [TestMethod]\n    public async Task TestYourOnlineShop()\n    {\n        // ...\n    }\n}\n'})})})]}),"\n",(0,a.jsxs)(t.p,{children:["This will record the trace and place it into the ",(0,a.jsx)(t.code,{children:"bin/Debug/net8.0/playwright-traces/"})," directory."]}),"\n",(0,a.jsx)(t.h2,{id:"run-trace-only-on-failure",children:"Run trace only on failure"}),"\n",(0,a.jsx)(t.p,{children:"Setup your tests to record a trace only when the test fails:"}),"\n",(0,a.jsxs)(r.A,{groupId:"test-runners",defaultValue:"mstest",values:[{label:"MSTest",value:"mstest"},{label:"NUnit",value:"nunit"}],children:[(0,a.jsx)(i.A,{value:"nunit",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:'namespace PlaywrightTests;\n\n[Parallelizable(ParallelScope.Self)]\n[TestFixture]\npublic class ExampleTest : PageTest\n{\n    [SetUp]\n    public async Task Setup()\n    {\n        await Context.Tracing.StartAsync(new()\n        {\n            Title = $"{TestContext.CurrentContext.Test.ClassName}.{TestContext.CurrentContext.Test.Name}",\n            Screenshots = true,\n            Snapshots = true,\n            Sources = true\n        });\n    }\n\n    [TearDown]\n    public async Task TearDown()\n    {\n        var failed = TestContext.CurrentContext.Result.Outcome == NUnit.Framework.Interfaces.ResultState.Error\n            || TestContext.CurrentContext.Result.Outcome == NUnit.Framework.Interfaces.ResultState.Failure;\n\n        await Context.Tracing.StopAsync(new()\n        {\n            Path = failed ? Path.Combine(\n                TestContext.CurrentContext.WorkDirectory,\n                "playwright-traces",\n                $"{TestContext.CurrentContext.Test.ClassName}.{TestContext.CurrentContext.Test.Name}.zip"\n            ) : null,\n        });\n    }\n\n    [Test]\n    public async Task GetStartedLink()\n    {\n        // ..\n    }\n}\n'})})}),(0,a.jsx)(i.A,{value:"mstest",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:'using System.Text.RegularExpressions;\nusing Microsoft.Playwright;\nusing Microsoft.Playwright.MSTest;\n\nnamespace PlaywrightTests;\n\n[TestClass]\npublic class ExampleTest : PageTest\n{\n    [TestInitialize]\n    public async Task TestInitialize()\n    {\n         await Context.Tracing.StartAsync(new()\n        {\n            Title = $"{TestContext.FullyQualifiedTestClassName}.{TestContext.TestName}",\n            Screenshots = true,\n            Snapshots = true,\n            Sources = true\n        });\n    }\n\n    [TestCleanup]\n    public async Task TestCleanup()\n    {\n        var failed = new[] { UnitTestOutcome.Failed, UnitTestOutcome.Error, UnitTestOutcome.Timeout, UnitTestOutcome.Aborted }.Contains(TestContext.CurrentTestOutcome);\n\n        await Context.Tracing.StopAsync(new()\n        {\n            Path = failed ? Path.Combine(\n                Environment.CurrentDirectory,\n                "playwright-traces",\n                $"{TestContext.FullyQualifiedTestClassName}.{TestContext.TestName}.zip"\n            ) : null,\n        });\n    }\n\n    [TestMethod]\n    public async Task GetStartedLink()\n    {\n        // ...\n    }\n}\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"opening-the-trace",children:"Opening the trace"}),"\n",(0,a.jsxs)(t.p,{children:["You can open the saved trace using the Playwright CLI or in your browser on ",(0,a.jsx)(t.a,{href:"https://trace.playwright.dev",children:(0,a.jsx)(t.code,{children:"trace.playwright.dev"})}),". Make sure to add the full path to where your ",(0,a.jsx)(t.code,{children:"trace.zip"})," file is located."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pwsh bin/Debug/netX/playwright.ps1 show-trace trace.zip\n"})}),"\n",(0,a.jsxs)(t.h2,{id:"using-traceplaywrightdev",children:["Using ",(0,a.jsx)(t.a,{href:"https://trace.playwright.dev",children:"trace.playwright.dev"})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://trace.playwright.dev",children:"trace.playwright.dev"})," is a statically hosted variant of the Trace Viewer. You can upload trace files using drag and drop."]}),"\n",(0,a.jsx)("img",{width:"1119",alt:"Drop Playwright Trace to load",src:"https://user-images.githubusercontent.com/13063165/194577918-b4d45726-2692-4093-8a28-9e73552617ef.png"}),"\n",(0,a.jsx)(t.h2,{id:"viewing-remote-traces",children:"Viewing remote traces"}),"\n",(0,a.jsx)(t.p,{children:"You can open remote traces using its URL. They could be generated on a CI run which makes it easy to view the remote trace without having to manually download the file."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pwsh bin/Debug/netX/playwright.ps1 show-trace https://example.com/trace.zip\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can also pass the URL of your uploaded trace (e.g. inside your CI) from some accessible storage as a parameter. CORS (Cross-Origin Resource Sharing) rules might apply."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-txt",children:"https://trace.playwright.dev/?trace=https://demo.playwright.dev/reports/todomvc/data/cb0fa77ebd9487a5c899f3ae65a7ffdbac681182.zip\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},4562:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(4848),s=n(6540),r=function(){return r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},r.apply(this,arguments)};var i=s.forwardRef((function(e,t){var n=s.useState(!1),a=n[0],i=n[1],o=s.useState(!1),c=o[0],l=o[1],h=encodeURIComponent(e.id),d="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,u=e.title,p=e.poster||"hqdefault",g="&".concat(e.params)||0,w=e.muted?"&mute=1":"",m=e.announce||"Watch",x=e.webp?"webp":"jpg",f=e.webp?"vi_webp":"vi",y=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(f,"/").concat(d,"/").concat(p,".").concat(x):"https://i.ytimg.com/".concat(f,"/").concat(h,"/").concat(p,".").concat(x)),b=e.noCookie;b=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var T=e.playlist?"".concat(b,"/embed/videoseries?autoplay=1").concat(w,"&list=").concat(h).concat(g):"".concat(b,"/embed/").concat(h,"?autoplay=1&state=1").concat(w).concat(g),j=e.activatedClass||"lyt-activated",v=e.adNetwork||!1,C=e.aspectHeight||9,k=e.aspectWidth||16,S=e.iframeClass||"",N=e.playerClass||"lty-playbtn",P=e.wrapperClass||"yt-lite",A=e.onIframeAdded||function(){},E=e.rel?"prefetch":"preload",I=e.containerElement||"article";return s.useEffect((function(){c&&A()}),[c]),s.createElement(s.Fragment,null,s.createElement("link",{rel:E,href:y,as:"image"}),s.createElement(s.Fragment,null,a&&s.createElement(s.Fragment,null,s.createElement("link",{rel:"preconnect",href:b}),s.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),v&&s.createElement(s.Fragment,null,s.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),s.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),s.createElement(I,{onPointerOver:function(){a||i(!0)},onClick:function(){c||l(!0)},className:"".concat(P," ").concat(c?j:""),"data-title":u,style:r({backgroundImage:"url(".concat(y,")")},{"--aspect-ratio":"".concat(C/k*100,"%")})},s.createElement("button",{type:"button",className:N,"aria-label":"".concat(m," ").concat(u)}),c&&s.createElement("iframe",{ref:t,className:S,title:u,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:T})))}));const o="videoContainer_NvH5";const c=function({id:e,title:t,thumbnail:n}){return(0,a.jsx)("div",{className:o,children:(0,a.jsx)(i,{thumbnail:n,id:e,params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:t,poster:"maxresdefault",webp:!0})})}}}]);