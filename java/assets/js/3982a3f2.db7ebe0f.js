"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6889],{4701:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(4848),r=t(8453);t(4235),t(8328),t(3078);const o={id:"network",title:"Network"},a=void 0,i={id:"network",title:"Network",description:"Introduction",source:"@site/docs/network.mdx",sourceDirName:".",slug:"/network",permalink:"/java/docs/next/network",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"network",title:"Network"},sidebar:"docs",previous:{title:"Navigations",permalink:"/java/docs/next/navigations"},next:{title:"Other locators",permalink:"/java/docs/next/other-locators"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Mock APIs",id:"mock-apis",level:2},{value:"HTTP Authentication",id:"http-authentication",level:2},{value:"HTTP Proxy",id:"http-proxy",level:2},{value:"Network events",id:"network-events",level:2},{value:"Variations",id:"variations",level:4},{value:"Handle requests",id:"handle-requests",level:2},{value:"Variations",id:"variations-1",level:4},{value:"Modify requests",id:"modify-requests",level:2},{value:"Abort requests",id:"abort-requests",level:2},{value:"Modify responses",id:"modify-responses",level:2},{value:"WebSockets",id:"websockets",level:2},{value:"Missing Network Events and Service Workers",id:"missing-network-events-and-service-workers",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(s.p,{children:["Playwright provides APIs to ",(0,n.jsx)(s.strong,{children:"monitor"})," and ",(0,n.jsx)(s.strong,{children:"modify"})," browser network traffic, both HTTP and HTTPS. Any requests that a page does, including ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",children:"XHRs"})," and ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:"fetch"})," requests, can be tracked, modified and handled."]}),"\n",(0,n.jsx)(s.h2,{id:"mock-apis",children:"Mock APIs"}),"\n",(0,n.jsxs)(s.p,{children:["Check out our ",(0,n.jsx)(s.a,{href:"/java/docs/next/mock",children:"API mocking guide"})," to learn more on how to"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"mock API requests and never hit the API"}),"\n",(0,n.jsx)(s.li,{children:"perform the API request and modify the response"}),"\n",(0,n.jsx)(s.li,{children:"use HAR files to mock network requests."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"http-authentication",children:"HTTP Authentication"}),"\n",(0,n.jsx)(s.p,{children:"Perform HTTP Authentication."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setHttpCredentials("bill", "pa55w0rd"));\nPage page = context.newPage();\npage.navigate("https://example.com");\n'})}),"\n",(0,n.jsx)(s.h2,{id:"http-proxy",children:"HTTP Proxy"}),"\n",(0,n.jsx)(s.p,{children:"You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually."}),"\n",(0,n.jsx)(s.p,{children:"You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass proxy for."}),"\n",(0,n.jsx)(s.p,{children:"Here is an example of a global proxy:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:"Browser browser = chromium.launch(new BrowserType.LaunchOptions()\n  .setProxy(new Proxy(\"http://myproxy.com:3128\")\n  .setUsername('usr')\n  .setPassword('pwd')));\n"})}),"\n",(0,n.jsx)(s.p,{children:"Its also possible to specify it per context:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'Browser browser = chromium.launch();\nBrowserContext context = browser.newContext(new Browser.NewContextOptions()\n  .setProxy(new Proxy("http://myproxy.com:3128")));\n'})}),"\n",(0,n.jsx)(s.h2,{id:"network-events",children:"Network events"}),"\n",(0,n.jsxs)(s.p,{children:["You can monitor all the ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-request",title:"Request",children:"Request"}),"s and ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-response",title:"Response",children:"Response"}),"s:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch();\n      Page page = browser.newPage();\n      page.onRequest(request -> System.out.println(">> " + request.method() + " " + request.url()));\n      page.onResponse(response -> System.out.println("<<" + response.status() + " " + response.url()));\n      page.navigate("https://example.com");\n      browser.close();\n    }\n  }\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Or wait for a network response after the button click with ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-page#page-wait-for-response",children:"Page.waitForResponse()"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'// Use a glob URL pattern\nResponse response = page.waitForResponse("**/api/fetch_data", () -> {\n  page.getByText("Update").click();\n});\n'})}),"\n",(0,n.jsx)(s.h4,{id:"variations",children:"Variations"}),"\n",(0,n.jsxs)(s.p,{children:["Wait for ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-response",title:"Response",children:"Response"}),"s with ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-page#page-wait-for-response",children:"Page.waitForResponse()"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'// Use a RegExp\nResponse response = page.waitForResponse(Pattern.compile("\\\\.jpeg$"), () -> {\n  page.getByText("Update").click();\n});\n\n// Use a predicate taking a Response object\nResponse response = page.waitForResponse(r -> r.url().contains(token), () -> {\n  page.getByText("Update").click();\n});\n'})}),"\n",(0,n.jsx)(s.h2,{id:"handle-requests",children:"Handle requests"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'page.route("**/api/fetch_data", route -> route.fulfill(new Route.FulfillOptions()\n  .setStatus(200)\n  .setBody(testData)));\npage.navigate("https://example.com");\n'})}),"\n",(0,n.jsx)(s.p,{children:"You can mock API endpoints via handling the network requests in your Playwright script."}),"\n",(0,n.jsx)(s.h4,{id:"variations-1",children:"Variations"}),"\n",(0,n.jsxs)(s.p,{children:["Set up route on the entire browser context with ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-browsercontext#browser-context-route",children:"BrowserContext.route()"})," or page with ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-page#page-route",children:"Page.route()"}),". It will apply to popup windows and opened links."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'browserContext.route("**/api/login", route -> route.fulfill(new Route.FulfillOptions()\n  .setStatus(200)\n  .setBody("accept")));\npage.navigate("https://example.com");\n'})}),"\n",(0,n.jsx)(s.h2,{id:"modify-requests",children:"Modify requests"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'// Delete header\npage.route("**/*", route -> {\n  Map<String, String> headers = new HashMap<>(route.request().headers());\n  headers.remove("X-Secret");\n    route.resume(new Route.ResumeOptions().setHeaders(headers));\n});\n\n// Continue requests as POST.\npage.route("**/*", route -> route.resume(new Route.ResumeOptions().setMethod("POST")));\n'})}),"\n",(0,n.jsx)(s.p,{children:"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."}),"\n",(0,n.jsx)(s.h2,{id:"abort-requests",children:"Abort requests"}),"\n",(0,n.jsxs)(s.p,{children:["You can abort requests using ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-page#page-route",children:"Page.route()"})," and ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-route#route-abort",children:"Route.abort()"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'page.route("**/*.{png,jpg,jpeg}", route -> route.abort());\n\n// Abort based on the request type\npage.route("**/*", route -> {\n  if ("image".equals(route.request().resourceType()))\n    route.abort();\n  else\n    route.resume();\n});\n'})}),"\n",(0,n.jsx)(s.h2,{id:"modify-responses",children:"Modify responses"}),"\n",(0,n.jsxs)(s.p,{children:["To modify a response use ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," to get the original response and then pass the response to ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-route#route-fulfill",children:"Route.fulfill()"}),". You can override individual fields on the response via options:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'page.route("**/title.html", route -> {\n  // Fetch original response.\n  APIResponse response = route.fetch();\n  // Add a prefix to the title.\n  String body = response.text();\n  body = body.replace("<title>", "<title>My prefix:");\n  Map<String, String> headers = response.headers();\n  headers.put("content-type": "text/html");\n  route.fulfill(new Route.FulfillOptions()\n    // Pass all fields from the response.\n    .setResponse(response)\n    // Override response body.\n    .setBody(body)\n    // Force content type to be html.\n    .setHeaders(headers));\n});\n'})}),"\n",(0,n.jsx)(s.h2,{id:"websockets",children:"WebSockets"}),"\n",(0,n.jsxs)(s.p,{children:["Playwright supports ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",children:"WebSockets"})," inspection out of the box. Every time a WebSocket is created, the ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-page#page-event-web-socket",children:"Page.onWebSocket(handler)"})," event is fired. This event contains the ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-websocket",title:"WebSocket",children:"WebSocket"})," instance for further web socket frames inspection:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:'page.onWebSocket(ws -> {\n  log("WebSocket opened: " + ws.url());\n  ws.onFrameSent(frameData -> log(frameData.text()));\n  ws.onFrameReceived(frameData -> log(frameData.text()));\n  ws.onClose(ws1 -> log("WebSocket closed"));\n});\n'})}),"\n",(0,n.jsx)(s.h2,{id:"missing-network-events-and-service-workers",children:"Missing Network Events and Service Workers"}),"\n",(0,n.jsxs)(s.p,{children:["Playwright's built-in ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-browsercontext#browser-context-route",children:"BrowserContext.route()"})," and ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-page#page-route",children:"Page.route()"})," allow your tests to natively route requests and perform mocking and interception."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["If you're using Playwright's native ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-browsercontext#browser-context-route",children:"BrowserContext.route()"})," and ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-page#page-route",children:"Page.route()"}),", and it appears network events are missing, disable Service Workers by setting ",(0,n.jsx)(s.code,{children:"Browser.newContext.serviceWorkers"})," to ",(0,n.jsx)(s.code,{children:"'block'"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["It might be that you are using a mock tool such as Mock Service Worker (MSW). While this tool works out of the box for mocking responses, it adds its own Service Worker that takes over the network requests, hence making them invisible to ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-browsercontext#browser-context-route",children:"BrowserContext.route()"})," and ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-page#page-route",children:"Page.route()"}),". If you are interested in both network testing and mocking, consider using built-in ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-browsercontext#browser-context-route",children:"BrowserContext.route()"})," and ",(0,n.jsx)(s.a,{href:"/java/docs/next/api/class-page#page-route",children:"Page.route()"})," for ",(0,n.jsx)(s.a,{href:"#handle-requests",children:"response mocking"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["If you're interested in not solely using Service Workers for testing and network mocking, but in routing and listening for requests made by Service Workers themselves, please see ",(0,n.jsx)(s.a,{href:"https://github.com/microsoft/playwright/issues/15684",children:"this experimental feature"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);