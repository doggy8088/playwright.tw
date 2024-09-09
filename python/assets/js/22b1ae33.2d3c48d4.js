"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4268],{8854:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=i(4848),r=i(8453);i(4235),i(8328),i(3078);const t={id:"selenium-grid",title:"Selenium Grid (experimental)"},o=void 0,l={id:"selenium-grid",title:"Selenium Grid (experimental)",description:"Introduction",source:"@site/docs/selenium-grid.mdx",sourceDirName:".",slug:"/selenium-grid",permalink:"/python/docs/next/selenium-grid",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"selenium-grid",title:"Selenium Grid (experimental)"},sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/python/docs/next/ci"},next:{title:"Supported languages",permalink:"/python/docs/next/languages"}},a={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Starting Selenium Grid",id:"starting-selenium-grid",level:2},{value:"Connecting Playwright to Selenium Grid",id:"connecting-playwright-to-selenium-grid",level:2},{value:"Passing additional capabilities",id:"passing-additional-capabilities",level:3},{value:"Passing additional headers",id:"passing-additional-headers",level:3},{value:"Detailed logs",id:"detailed-logs",level:3},{value:"Using Selenium Docker",id:"using-selenium-docker",level:2},{value:"Standalone mode",id:"standalone-mode",level:3},{value:"Hub and nodes mode",id:"hub-and-nodes-mode",level:3},{value:"Selenium 3",id:"selenium-3",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["Playwright can connect to ",(0,s.jsx)(n.a,{href:"https://www.selenium.dev/documentation/grid/",children:"Selenium Grid Hub"})," that runs Selenium 4 to launch ",(0,s.jsx)(n.strong,{children:"Google Chrome"})," or ",(0,s.jsx)(n.strong,{children:"Microsoft Edge"})," browser, instead of running browser on the local machine. Note this feature is ",(0,s.jsx)(n.strong,{children:"experimental"})," and is prioritized accordingly."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["There is a risk of Playwright integration with Selenium Grid Hub breaking in the future. Make sure you weight risks against benefits before using it.  ",(0,s.jsx)("br",{})," ",(0,s.jsx)("br",{})," ",(0,s.jsxs)("details",{children:[" ",(0,s.jsxs)("summary",{children:[" ",(0,s.jsx)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"},children:"More details"})," "]}),"  Internally, Playwright connects to the browser using ",(0,s.jsx)(n.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"Chrome DevTools Protocol"})," websocket. Selenium 4 currently exposes this capability. However, this ",(0,s.jsx)(n.a,{href:"https://github.com/SeleniumHQ/selenium/issues/11590#issuecomment-1436113950",children:"might not be the case in the future"}),". If Selenium drops this capability, Playwright will stop working with it. "]})]})}),"\n",(0,s.jsxs)(n.p,{children:["Before connecting Playwright to your Selenium Grid, make sure that grid works with ",(0,s.jsx)(n.a,{href:"https://www.selenium.dev/documentation/webdriver/",children:"Selenium WebDriver"}),". For example, run ",(0,s.jsx)(n.a,{href:"https://github.com/SeleniumHQ/selenium/tree/trunk/javascript/node/selenium-webdriver/example",children:"one of the examples"})," and pass ",(0,s.jsx)(n.code,{children:"SELENIUM_REMOTE_URL"})," environment variable. If webdriver example does not work, look for any errors at your Selenium hub/node/standalone output and search ",(0,s.jsx)(n.a,{href:"https://github.com/SeleniumHQ/selenium/issues",children:"Selenium issues"})," for a possible solution."]}),"\n",(0,s.jsx)(n.h2,{id:"starting-selenium-grid",children:"Starting Selenium Grid"}),"\n",(0,s.jsxs)(n.p,{children:["If you run distributed Selenium Grid, Playwright needs selenium nodes to be registered with an accessible address, so that it could connect to the browsers. To make sure it works as expected, set ",(0,s.jsx)(n.code,{children:"SE_NODE_GRID_URL"})," environment variable pointing to the hub when running selenium nodes."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Start selenium node\nSE_NODE_GRID_URL="http://<selenium-hub-ip>:4444" java -jar selenium-server-<version>.jar node\n'})}),"\n",(0,s.jsx)(n.h2,{id:"connecting-playwright-to-selenium-grid",children:"Connecting Playwright to Selenium Grid"}),"\n",(0,s.jsxs)(n.p,{children:["To connect Playwright to ",(0,s.jsx)(n.strong,{children:"Selenium Grid 4"}),", set ",(0,s.jsx)(n.code,{children:"SELENIUM_REMOTE_URL"})," environment variable pointing to your Selenium Grid Hub. Note that this only works for Google Chrome and Microsoft Edge."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SELENIUM_REMOTE_URL=http://<selenium-hub-ip>:4444 pytest --browser chromium\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You don't have to change your code, just use your testing harness or ",(0,s.jsx)(n.a,{href:"/python/docs/next/api/class-browsertype#browser-type-launch",children:"browser_type.launch()"})," as usual."]}),"\n",(0,s.jsx)(n.h3,{id:"passing-additional-capabilities",children:"Passing additional capabilities"}),"\n",(0,s.jsxs)(n.p,{children:["If your grid requires additional capabilities to be set (for example, you use an external service), you can set ",(0,s.jsx)(n.code,{children:"SELENIUM_REMOTE_CAPABILITIES"})," environment variable to provide JSON-serialized capabilities."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SELENIUM_REMOTE_URL=http://<selenium-hub-ip>:4444 SELENIUM_REMOTE_CAPABILITIES=\"{'mygrid:options':{os:'windows',username:'John',password:'secure'}}\" pytest --browser chromium\n"})}),"\n",(0,s.jsx)(n.h3,{id:"passing-additional-headers",children:"Passing additional headers"}),"\n",(0,s.jsxs)(n.p,{children:["If your grid requires additional headers to be set (for example, you should provide authorization token to use browsers in your cloud), you can set ",(0,s.jsx)(n.code,{children:"SELENIUM_REMOTE_HEADERS"})," environment variable to provide JSON-serialized headers."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SELENIUM_REMOTE_URL=http://<selenium-hub-ip>:4444 SELENIUM_REMOTE_HEADERS=\"{'Authorization':'OAuth 12345'}\" pytest --browser chromium\n"})}),"\n",(0,s.jsx)(n.h3,{id:"detailed-logs",children:"Detailed logs"}),"\n",(0,s.jsxs)(n.p,{children:["Run with ",(0,s.jsx)(n.code,{children:"DEBUG=pw:browser*"})," environment variable to see how Playwright is connecting to Selenium Grid."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"DEBUG=pw:browser* SELENIUM_REMOTE_URL=http://internal.grid:4444 pytest --browser chromium\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you file an issue, please include this log."}),"\n",(0,s.jsx)(n.h2,{id:"using-selenium-docker",children:"Using Selenium Docker"}),"\n",(0,s.jsxs)(n.p,{children:["One easy way to use Selenium Grid is to run official docker containers. Read more in ",(0,s.jsx)(n.a,{href:"https://github.com/SeleniumHQ/docker-selenium",children:"selenium docker images"})," documentation. For experimental arm images, see ",(0,s.jsx)(n.a,{href:"https://github.com/seleniumhq-community/docker-seleniarm",children:"docker-seleniarm"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"standalone-mode",children:"Standalone mode"}),"\n",(0,s.jsxs)(n.p,{children:["Here is an example of running selenium standalone and connecting Playwright to it. Note that hub and node are on the same ",(0,s.jsx)(n.code,{children:"localhost"}),", and we pass ",(0,s.jsx)(n.code,{children:"SE_NODE_GRID_URL"})," environment variable pointing to it."]}),"\n",(0,s.jsx)(n.p,{children:"First start Selenium."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'docker run -d -p 4444:4444 --shm-size="2g" -e SE_NODE_GRID_URL="http://localhost:4444" selenium/standalone-chrome:4.3.0-20220726\n\n# Alternatively for arm architecture\ndocker run -d -p 4444:4444 --shm-size="2g" -e SE_NODE_GRID_URL="http://localhost:4444" seleniarm/standalone-chromium:103.0\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then run Playwright."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SELENIUM_REMOTE_URL=http://localhost:4444 pytest --browser chromium\n"})}),"\n",(0,s.jsx)(n.h3,{id:"hub-and-nodes-mode",children:"Hub and nodes mode"}),"\n",(0,s.jsxs)(n.p,{children:["Here is an example of running selenium hub and a single selenium node, and connecting Playwright to the hub. Note that hub and node have different IPs, and we pass ",(0,s.jsx)(n.code,{children:"SE_NODE_GRID_URL"})," environment variable pointing to the hub when starting node containers."]}),"\n",(0,s.jsx)(n.p,{children:"First start the hub container and one or more node containers."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'docker run -d -p 4442-4444:4442-4444 --name selenium-hub selenium/hub:4.3.0-20220726\ndocker run -d -p 5555:5555 \\\n    --shm-size="2g" \\\n    -e SE_EVENT_BUS_HOST=<selenium-hub-ip> \\\n    -e SE_EVENT_BUS_PUBLISH_PORT=4442 \\\n    -e SE_EVENT_BUS_SUBSCRIBE_PORT=4443 \\\n    -e SE_NODE_GRID_URL="http://<selenium-hub-ip>:4444"\n    selenium/node-chrome:4.3.0-20220726\n\n# Alternatively for arm architecture\ndocker run -d -p 4442-4444:4442-4444 --name selenium-hub seleniarm/hub:4.3.0-20220728\ndocker run -d -p 5555:5555 \\\n    --shm-size="2g" \\\n    -e SE_EVENT_BUS_HOST=<selenium-hub-ip> \\\n    -e SE_EVENT_BUS_PUBLISH_PORT=4442 \\\n    -e SE_EVENT_BUS_SUBSCRIBE_PORT=4443 \\\n    -e SE_NODE_GRID_URL="http://<selenium-hub-ip>:4444"\n    seleniarm/node-chromium:103.0\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then run Playwright."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SELENIUM_REMOTE_URL=http://<selenium-hub-ip>:4444 pytest --browser chromium\n"})}),"\n",(0,s.jsx)(n.h2,{id:"selenium-3",children:"Selenium 3"}),"\n",(0,s.jsxs)(n.p,{children:["Internally, Playwright connects to the browser using ",(0,s.jsx)(n.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"Chrome DevTools Protocol"})," websocket. Selenium 4 exposes this capability, while Selenium 3 does not."]}),"\n",(0,s.jsx)(n.p,{children:"This means that Selenium 3 is supported in a best-effort manner, where Playwright tries to connect to the grid node directly. Grid nodes must be directly accessible from the machine that runs Playwright."})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);