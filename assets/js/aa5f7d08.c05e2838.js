"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5817],{5044:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(4848),n=s(8453);s(4235),s(8328),s(3078);const i={id:"service-workers-experimental",title:"(Experimental) Service Worker Network Events"},o=void 0,c={id:"service-workers-experimental",title:"(Experimental) Service Worker Network Events",description:"Introduction",source:"@site/docs/service-workers-experimental-network-events.mdx",sourceDirName:".",slug:"/service-workers-experimental",permalink:"/docs/next/service-workers-experimental",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"service-workers-experimental",title:"(Experimental) Service Worker Network Events"}},a={},d=[{value:"Introduction",id:"introduction",level:2},{value:"How to Enable",id:"how-to-enable",level:2},{value:"Service Worker Fetch",id:"service-worker-fetch",level:2},{value:"Accessing Service Workers and Waiting for Activation",id:"accessing-service-workers-and-waiting-for-activation",level:3},{value:"Network Events and Routing",id:"network-events-and-routing",level:3},{value:"Advanced Example",id:"advanced-example",level:4},{value:"Routing Service Worker Requests Only",id:"routing-service-worker-requests-only",level:2},{value:"Known Limitations",id:"known-limitations",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsxs)(r.p,{children:["If you're looking to do general network mocking, routing, and interception, please see the ",(0,t.jsx)(r.a,{href:"/docs/next/network",children:"Network Guide"})," first. Playwright provides built-in APIs for this use case that don't require the information below. However, if you're interested in requests made by Service Workers themselves, please read below."]})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API",children:"Service Workers"})," provide a browser-native method of handling requests made by a page with the native ",(0,t.jsxs)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:["Fetch API (",(0,t.jsx)(r.code,{children:"fetch"}),")"]})," along with other network-requested assets (like scripts, css, and images)."]}),"\n",(0,t.jsxs)(r.p,{children:["They can act as a ",(0,t.jsx)(r.strong,{children:"network proxy"})," between the page and the external network to perform caching logic or can provide users with an offline experience if the Service Worker adds a ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent#examples",children:"FetchEvent"})," listener."]}),"\n",(0,t.jsx)(r.p,{children:"Many sites that use Service Workers simply use them as a transparent optimization technique. While users might notice a faster experience, the app's implementation is unaware of their existence. Running the app with or without Service Workers enabled appears functionally equivalent."}),"\n",(0,t.jsx)(r.h2,{id:"how-to-enable",children:"How to Enable"}),"\n",(0,t.jsxs)(r.p,{children:["Playwright's inspection and routing of requests made by Service Workers are ",(0,t.jsx)(r.strong,{children:"experimental"})," and disabled by default."]}),"\n",(0,t.jsxs)(r.p,{children:["Set the ",(0,t.jsx)(r.code,{children:"PW_EXPERIMENTAL_SERVICE_WORKER_NETWORK_EVENTS"})," environment variable to ",(0,t.jsx)(r.code,{children:"1"})," (or any other value) to enable the feature. Only Chrome/Chromium are currently supported."]}),"\n",(0,t.jsxs)(r.p,{children:["If you're using (or are interested in using this feature), please comment on ",(0,t.jsx)(r.a,{href:"https://github.com/microsoft/playwright/issues/15684",children:"this issue"})," letting us know your use case."]}),"\n",(0,t.jsx)(r.h2,{id:"service-worker-fetch",children:"Service Worker Fetch"}),"\n",(0,t.jsx)(r.h3,{id:"accessing-service-workers-and-waiting-for-activation",children:"Accessing Service Workers and Waiting for Activation"}),"\n",(0,t.jsxs)(r.p,{children:["You can use ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-service-workers",children:"browserContext.serviceWorkers()"})," to list the Service ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-worker",title:"Worker",children:"Worker"}),"s, or specifically watch for the Service ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-worker",title:"Worker",children:"Worker"})," if you anticipate a page will trigger its ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register",children:"registration"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"const serviceWorkerPromise = context.waitForEvent('serviceworker');\nawait page.goto('/example-with-a-service-worker.html');\nconst serviceworker = await serviceWorkerPromise;\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-service-worker",children:"browserContext.on('serviceworker')"})," is fired ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.strong,{children:"before"})})," the Service Worker's main script has been evaluated, so ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.strong,{children:"before"})})," calling service",(0,t.jsx)(r.a,{href:"/docs/next/api/class-worker#worker-evaluate",children:"worker.evaluate()"})," you should wait on its activation."]}),"\n",(0,t.jsx)(r.p,{children:"There are more idiomatic methods of waiting for a Service Worker to be activated, but the following is an implementation agnostic method:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"await page.evaluate(async () => {\n  const registration = await window.navigator.serviceWorker.getRegistration();\n  if (registration.active?.state === 'activated')\n    return;\n  await new Promise(res =>\n    window.navigator.serviceWorker.addEventListener('controllerchange', res),\n  );\n});\n"})}),"\n",(0,t.jsx)(r.h3,{id:"network-events-and-routing",children:"Network Events and Routing"}),"\n",(0,t.jsxs)(r.p,{children:["Any network request made by the ",(0,t.jsx)(r.strong,{children:"Service Worker"})," will have:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request",children:"browserContext.on('request')"})," and its corresponding events (",(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request-finished",children:"browserContext.on('requestfinished')"})," and ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-response",children:"browserContext.on('response')"}),", or ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request-failed",children:"browserContext.on('requestfailed')"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-route",children:"browserContext.route()"})," will see the request"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/next/api/class-request#request-service-worker",children:"request.serviceWorker()"})," will be set to the Service ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-worker",title:"Worker",children:"Worker"})," instance, and ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-request#request-frame",children:"request.frame()"})," will ",(0,t.jsx)(r.strong,{children:"throw"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/next/api/class-response#response-from-service-worker",children:"response.fromServiceWorker()"})," will return ",(0,t.jsx)(r.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Additionally, any network request made by the ",(0,t.jsx)(r.strong,{children:"Page"})," (including its sub-",(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"}),"s) will have:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request",children:"browserContext.on('request')"})," and its corresponding events (",(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request-finished",children:"browserContext.on('requestfinished')"})," and ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-response",children:"browserContext.on('response')"}),", or ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request-failed",children:"browserContext.on('requestfailed')"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/next/api/class-page#page-event-request",children:"page.on('request')"})," and its corresponding events (",(0,t.jsx)(r.a,{href:"/docs/next/api/class-page#page-event-request-finished",children:"page.on('requestfinished')"})," and ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-page#page-event-response",children:"page.on('response')"}),", or ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-page#page-event-request-failed",children:"page.on('requestfailed')"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/next/api/class-page#page-route",children:"page.route()"})," and ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-page#page-route",children:"page.route()"})," will ",(0,t.jsx)(r.strong,{children:"not"})," see the request (if a Service Worker's fetch handler was registered)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/next/api/class-request#request-service-worker",children:"request.serviceWorker()"})," will be set to ",(0,t.jsx)(r.code,{children:"null"}),", and ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-request#request-frame",children:"request.frame()"})," will return the ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/next/api/class-response#response-from-service-worker",children:"response.fromServiceWorker()"})," will return ",(0,t.jsx)(r.code,{children:"true"})," (if a Service Worker's fetch handler was registered)"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Many Service Worker implementations simply execute the request from the page (possibly with some custom caching/offline logic omitted for simplicity):"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="transparent-service-worker.js"',children:"self.addEventListener('fetch', event => {\n  // actually make the request\n  const responsePromise = fetch(event.request);\n  // send it back to the page\n  event.respondWith(responsePromise);\n});\n\nself.addEventListener('activate', event => {\n  event.waitUntil(clients.claim());\n});\n"})}),"\n",(0,t.jsx)(r.p,{children:"If a page registers the above Service Worker:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-html",children:"\x3c!-- filename: index.html --\x3e\n<script>\n  window.registrationPromise = navigator.serviceWorker.register('/transparent-service-worker.js');\n<\/script>\n"})}),"\n",(0,t.jsxs)(r.p,{children:["On the first visit to the page via ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-page#page-goto",children:"page.goto()"}),", the following Request/Response events would be emitted (along with the corresponding network lifecycle events):"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Event"}),(0,t.jsx)(r.th,{children:"Owner"}),(0,t.jsx)(r.th,{children:"URL"}),(0,t.jsx)(r.th,{children:"Routed"}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-response#response-from-service-worker",children:"response.fromServiceWorker()"})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request",children:"browserContext.on('request')"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"})}),(0,t.jsx)(r.td,{children:"index.html"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-page#page-event-request",children:"page.on('request')"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"})}),(0,t.jsx)(r.td,{children:"index.html"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request",children:"browserContext.on('request')"})}),(0,t.jsxs)(r.td,{children:["Service ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-worker",title:"Worker",children:"Worker"})]}),(0,t.jsx)(r.td,{children:"transparent-service-worker.js"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request",children:"browserContext.on('request')"})}),(0,t.jsxs)(r.td,{children:["Service ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-worker",title:"Worker",children:"Worker"})]}),(0,t.jsx)(r.td,{children:"data.json"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request",children:"browserContext.on('request')"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"})}),(0,t.jsx)(r.td,{children:"data.json"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Yes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-page#page-event-request",children:"page.on('request')"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"})}),(0,t.jsx)(r.td,{children:"data.json"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Yes"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:'Since the example Service Worker just acts a basic transparent "proxy":'}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["There's 2 ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request",children:"browserContext.on('request')"})," events for ",(0,t.jsx)(r.code,{children:"data.json"}),"; one ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"}),"-owned, the other Service ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-worker",title:"Worker",children:"Worker"}),"-owned."]}),"\n",(0,t.jsxs)(r.li,{children:["Only the Service ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-worker",title:"Worker",children:"Worker"}),"-owned request for the resource was routable via ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-route",children:"browserContext.route()"}),"; the ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"}),"-owned events for ",(0,t.jsx)(r.code,{children:"data.json"})," are not routeable, as they would not have even had the possibility to hit the external network since the Service Worker has a fetch handler registered."]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"caution",children:(0,t.jsxs)(r.p,{children:["It's important to note: calling ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-request#request-frame",children:"request.frame()"})," or ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-response#response-frame",children:"response.frame()"})," will ",(0,t.jsx)(r.strong,{children:"throw"})," an exception, if called on a ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-request",title:"Request",children:"Request"}),"/",(0,t.jsx)(r.a,{href:"/docs/next/api/class-response",title:"Response",children:"Response"})," that has a non-null ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-request#request-service-worker",children:"request.serviceWorker()"}),"."]})}),"\n",(0,t.jsx)(r.h4,{id:"advanced-example",children:"Advanced Example"}),"\n",(0,t.jsx)(r.p,{children:"When a Service Worker handles a page's request, the Service Worker can make 0 to n requests to the external network. The Service Worker might respond directly from a cache, generate a response in memory, rewrite the request, make two requests and then combine into 1, etc."}),"\n",(0,t.jsx)(r.p,{children:"Consider the code snippets below to understand Playwright's view into the Request/Responses and how it impacts routing in some of these cases."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="complex-service-worker.js"',children:"self.addEventListener('install', function(event) {\n  event.waitUntil(\n      caches.open('v1').then(function(cache) {\n      // 1. Pre-fetches and caches /addressbook.json\n        return cache.add('/addressbook.json');\n      })\n  );\n});\n\n// Opt to handle FetchEvent's from the page\nself.addEventListener('fetch', event => {\n  event.respondWith(\n      (async () => {\n        // 1. Try to first serve directly from caches\n        const response = await caches.match(event.request);\n        if (response)\n          return response;\n\n        // 2. Re-write request for /foo to /bar\n        if (event.request.url.endsWith('foo'))\n          return fetch('./bar');\n\n        // 3. Prevent tracker.js from being retrieved, and returns a placeholder response\n        if (event.request.url.endsWith('tracker.js')) {\n          return new Response('console.log(\"no trackers!\")', {\n            status: 200,\n            headers: { 'Content-Type': 'text/javascript' },\n          });\n        }\n\n        // 4. Otherwise, fallthrough, perform the fetch and respond\n        return fetch(event.request);\n      })()\n  );\n});\n\nself.addEventListener('activate', event => {\n  event.waitUntil(clients.claim());\n});\n"})}),"\n",(0,t.jsx)(r.p,{children:"And a page that simply registers the Service Worker:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-html",children:"\x3c!-- filename: index.html --\x3e\n<script>\n  window.registrationPromise = navigator.serviceWorker.register('/complex-service-worker.js');\n<\/script>\n"})}),"\n",(0,t.jsxs)(r.p,{children:["On the first visit to the page via ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-page#page-goto",children:"page.goto()"}),", the following Request/Response events would be emitted:"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Event"}),(0,t.jsx)(r.th,{children:"Owner"}),(0,t.jsx)(r.th,{children:"URL"}),(0,t.jsx)(r.th,{children:"Routed"}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-response#response-from-service-worker",children:"response.fromServiceWorker()"})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request",children:"browserContext.on('request')"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"})}),(0,t.jsx)(r.td,{children:"index.html"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-page#page-event-request",children:"page.on('request')"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"})}),(0,t.jsx)(r.td,{children:"index.html"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request",children:"browserContext.on('request')"})}),(0,t.jsxs)(r.td,{children:["Service ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-worker",title:"Worker",children:"Worker"})]}),(0,t.jsx)(r.td,{children:"complex-service-worker.js"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request",children:"browserContext.on('request')"})}),(0,t.jsxs)(r.td,{children:["Service ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-worker",title:"Worker",children:"Worker"})]}),(0,t.jsx)(r.td,{children:"addressbook.json"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:["It's important to note that ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Cache/add",children:(0,t.jsx)(r.code,{children:"cache.add"})})," caused the Service Worker to make a request (Service ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-worker",title:"Worker",children:"Worker"}),"-owned), even before ",(0,t.jsx)(r.code,{children:"addressbook.json"})," was asked for in the page."]}),"\n",(0,t.jsx)(r.p,{children:"Once the Service Worker is activated and handling FetchEvents, if the page makes the following requests:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"await page.evaluate(() => fetch('/addressbook.json'));\nawait page.evaluate(() => fetch('/foo'));\nawait page.evaluate(() => fetch('/tracker.js'));\nawait page.evaluate(() => fetch('/fallthrough.txt'));\n"})}),"\n",(0,t.jsx)(r.p,{children:"The following Request/Response events would be emitted:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Event"}),(0,t.jsx)(r.th,{children:"Owner"}),(0,t.jsx)(r.th,{children:"URL"}),(0,t.jsx)(r.th,{children:"Routed"}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-response#response-from-service-worker",children:"response.fromServiceWorker()"})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request",children:"browserContext.on('request')"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"})}),(0,t.jsx)(r.td,{children:"addressbook.json"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Yes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-page#page-event-request",children:"page.on('request')"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"})}),(0,t.jsx)(r.td,{children:"addressbook.json"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Yes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request",children:"browserContext.on('request')"})}),(0,t.jsxs)(r.td,{children:["Service ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-worker",title:"Worker",children:"Worker"})]}),(0,t.jsx)(r.td,{children:"bar"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request",children:"browserContext.on('request')"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"})}),(0,t.jsx)(r.td,{children:"foo"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Yes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-page#page-event-request",children:"page.on('request')"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"})}),(0,t.jsx)(r.td,{children:"foo"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Yes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request",children:"browserContext.on('request')"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"})}),(0,t.jsx)(r.td,{children:"tracker.js"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Yes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-page#page-event-request",children:"page.on('request')"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"})}),(0,t.jsx)(r.td,{children:"tracker.js"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Yes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request",children:"browserContext.on('request')"})}),(0,t.jsxs)(r.td,{children:["Service ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-worker",title:"Worker",children:"Worker"})]}),(0,t.jsx)(r.td,{children:"fallthrough.txt"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-browsercontext#browser-context-event-request",children:"browserContext.on('request')"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"})}),(0,t.jsx)(r.td,{children:"fallthrough.txt"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Yes"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-page#page-event-request",children:"page.on('request')"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"})}),(0,t.jsx)(r.td,{children:"fallthrough.txt"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Yes"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"It's important to note:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The page requested ",(0,t.jsx)(r.code,{children:"/foo"}),", but the Service Worker requested ",(0,t.jsx)(r.code,{children:"/bar"}),", so there are only ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"}),"-owned events for ",(0,t.jsx)(r.code,{children:"/foo"}),", but not ",(0,t.jsx)(r.code,{children:"/bar"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Likewise, the Service Worker never hit the network for ",(0,t.jsx)(r.code,{children:"tracker.js"}),", so only ",(0,t.jsx)(r.a,{href:"/docs/next/api/class-frame",title:"Frame",children:"Frame"}),"-owned events were emitted for that request."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"routing-service-worker-requests-only",children:"Routing Service Worker Requests Only"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"await context.route('**', async route => {\n  if (route.request().serviceWorker()) {\n    // NB: calling route.request().frame() here would THROW\n    return route.fulfill({\n      contentType: 'text/plain',\n      status: 200,\n      body: 'from sw',\n    });\n  } else {\n    return route.continue();\n  }\n});\n"})}),"\n",(0,t.jsx)(r.h2,{id:"known-limitations",children:"Known Limitations"}),"\n",(0,t.jsxs)(r.p,{children:["Requests for updated Service Worker main script code currently cannot be routed (",(0,t.jsx)(r.a,{href:"https://github.com/microsoft/playwright/issues/14711",children:"https://github.com/microsoft/playwright/issues/14711"}),")."]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);