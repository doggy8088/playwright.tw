"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4416],{649:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>h,toc:()=>c});var s=i(4848),l=i(8453);i(4235),i(8328),i(3078);const r={id:"selenium-grid",title:"Selenium Grid (\u5be6\u9a57\u6027)"},d=void 0,h={id:"selenium-grid",title:"Selenium Grid (\u5be6\u9a57\u6027)",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/selenium-grid.mdx",sourceDirName:".",slug:"/selenium-grid",permalink:"/java/docs/selenium-grid",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"selenium-grid",title:"Selenium Grid (\u5be6\u9a57\u6027)"},sidebar:"docs",previous:{title:"\u6301\u7e8c\u6574\u5408",permalink:"/java/docs/ci"},next:{title:"\u652f\u63f4\u7684\u8a9e\u8a00",permalink:"/java/docs/languages"}},t={},c=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u958b\u59cb Selenium Grid",id:"\u958b\u59cb-selenium-grid",level:2},{value:"\u9023\u63a5 Playwright \u5230 Selenium Grid",id:"\u9023\u63a5-playwright-\u5230-selenium-grid",level:2},{value:"\u50b3\u905e\u984d\u5916\u7684\u529f\u80fd",id:"\u50b3\u905e\u984d\u5916\u7684\u529f\u80fd",level:3},{value:"\u50b3\u905e\u984d\u5916\u7684\u6a19\u982d",id:"\u50b3\u905e\u984d\u5916\u7684\u6a19\u982d",level:3},{value:"\u4f7f\u7528 Selenium Docker",id:"\u4f7f\u7528-selenium-docker",level:2},{value:"\u7368\u7acb\u6a21\u5f0f",id:"\u7368\u7acb\u6a21\u5f0f",level:3},{value:"Hub and nodes \u6a21\u5f0f",id:"hub-and-nodes-\u6a21\u5f0f",level:3},{value:"Selenium 3",id:"selenium-3",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,s.jsxs)(n.p,{children:["Playwright \u53ef\u4ee5\u9023\u63a5\u5230 ",(0,s.jsx)(n.a,{href:"https://www.selenium.dev/documentation/grid/",children:"Selenium Grid Hub"})," \u57f7\u884c Selenium 4 \u4f86\u555f\u52d5 ",(0,s.jsx)(n.strong,{children:"Google Chrome"})," \u6216 ",(0,s.jsx)(n.strong,{children:"Microsoft Edge"})," \u700f\u89bd\u5668\uff0c\u800c\u4e0d\u662f\u5728\u672c\u5730\u6a5f\u5668\u4e0a\u57f7\u884c\u700f\u89bd\u5668\u3002\u8acb\u6ce8\u610f\uff0c\u6b64\u529f\u80fd\u662f",(0,s.jsx)(n.strong,{children:"\u5be6\u9a57\u6027"}),"\u7684\uff0c\u4e26\u4e14\u6703\u76f8\u61c9\u5730\u512a\u5148\u8655\u7406\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Playwright \u8207 Selenium Grid Hub \u6574\u5408\u5728\u672a\u4f86\u53ef\u80fd\u6703\u4e2d\u65b7\u3002\u4f7f\u7528\u524d\u8acb\u78ba\u4fdd\u6b0a\u8861\u98a8\u96aa\u8207\u6536\u76ca\u3002  ",(0,s.jsx)("br",{})," ",(0,s.jsx)("br",{})," ",(0,s.jsxs)("details",{children:[" ",(0,s.jsxs)("summary",{children:[" ",(0,s.jsx)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"},children:"\u66f4\u591a\u8a73\u60c5"})," "]}),"  \u5167\u90e8\uff0cPlaywright \u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"Chrome DevTools Protocol"})," websocket \u9023\u63a5\u5230\u700f\u89bd\u5668\u3002Selenium 4 \u76ee\u524d\u66b4\u9732\u4e86\u9019\u500b\u529f\u80fd\u3002\u7136\u800c\uff0c",(0,s.jsx)(n.a,{href:"https://github.com/SeleniumHQ/selenium/issues/11590#issuecomment-1436113950",children:"\u672a\u4f86\u53ef\u80fd\u4e0d\u6703\u662f\u9019\u6a23"}),"\u3002\u5982\u679c Selenium \u653e\u68c4\u9019\u500b\u529f\u80fd\uff0cPlaywright \u5c07\u7121\u6cd5\u518d\u8207\u5176\u4e00\u8d77\u5de5\u4f5c\u3002 "]})]})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u5c07 Playwright \u9023\u63a5\u5230\u4f60\u7684 Selenium Grid \u4e4b\u524d\uff0c\u8acb\u78ba\u4fdd\u8a72 grid \u80fd\u5920\u8207 ",(0,s.jsx)(n.a,{href:"https://www.selenium.dev/documentation/webdriver/",children:"Selenium WebDriver"})," \u4e00\u8d77\u5de5\u4f5c\u3002\u4f8b\u5982\uff0c\u57f7\u884c",(0,s.jsx)(n.a,{href:"https://github.com/SeleniumHQ/selenium/tree/trunk/javascript/node/selenium-webdriver/example",children:"\u5176\u4e2d\u4e00\u500b\u7bc4\u4f8b"}),"\u4e26\u50b3\u905e ",(0,s.jsx)(n.code,{children:"SELENIUM_REMOTE_URL"})," \u74b0\u5883\u8b8a\u6578\u3002\u5982\u679c webdriver \u7bc4\u4f8b\u7121\u6cd5\u57f7\u884c\uff0c\u8acb\u67e5\u770b\u4f60\u7684 Selenium hub/node/standalone \u8f38\u51fa\u4e2d\u7684\u4efb\u4f55\u932f\u8aa4\uff0c\u4e26\u641c\u7d22 ",(0,s.jsx)(n.a,{href:"https://github.com/SeleniumHQ/selenium/issues",children:"Selenium issues"})," \u4ee5\u5c0b\u627e\u53ef\u80fd\u7684\u89e3\u6c7a\u65b9\u6848\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u958b\u59cb-selenium-grid",children:"\u958b\u59cb Selenium Grid"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u57f7\u884c\u5206\u6563\u5f0f Selenium Grid\uff0cPlaywright \u9700\u8981\u5c07 selenium \u7bc0\u9ede\u8a3b\u518a\u5230\u53ef\u8a2a\u554f\u7684\u5730\u5740\uff0c\u4ee5\u4fbf\u5b83\u80fd\u5920\u9023\u63a5\u5230\u700f\u89bd\u5668\u3002\u70ba\u4e86\u78ba\u4fdd\u5b83\u6309\u9810\u671f\u5de5\u4f5c\uff0c\u8acb\u5728\u57f7\u884c selenium \u7bc0\u9ede\u6642\u8a2d\u7f6e ",(0,s.jsx)(n.code,{children:"SE_NODE_GRID_URL"})," \u74b0\u5883\u8b8a\u6578\u6307\u5411 hub\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Start selenium node\nSE_NODE_GRID_URL="http://<selenium-hub-ip>:4444" java -jar selenium-server-<version>.jar node\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u9023\u63a5-playwright-\u5230-selenium-grid",children:"\u9023\u63a5 Playwright \u5230 Selenium Grid"}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u5c07 Playwright \u9023\u63a5\u5230 ",(0,s.jsx)(n.strong,{children:"Selenium Grid 4"}),"\uff0c\u8acb\u8a2d\u5b9a ",(0,s.jsx)(n.code,{children:"SELENIUM_REMOTE_URL"})," \u74b0\u5883\u8b8a\u6578\u6307\u5411\u4f60\u7684 Selenium Grid Hub\u3002\u8acb\u6ce8\u610f\uff0c\u9019\u50c5\u9069\u7528\u65bc Google Chrome \u548c Microsoft Edge\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SELENIUM_REMOTE_URL=http://<selenium-hub-ip>:4444 mvn test\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u4e0d\u9700\u8981\u66f4\u6539\u4f60\u7684\u7a0b\u5f0f\u78bc\uff0c\u53ea\u9700\u50cf\u5f80\u5e38\u4e00\u6a23\u4f7f\u7528\u4f60\u7684\u6e2c\u8a66\u5de5\u5177\u6216 ",(0,s.jsx)(n.a,{href:"/java/docs/api/class-browsertype#browser-type-launch",children:"BrowserType.launch()"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u50b3\u905e\u984d\u5916\u7684\u529f\u80fd",children:"\u50b3\u905e\u984d\u5916\u7684\u529f\u80fd"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u7684\u7db2\u683c\u9700\u8981\u8a2d\u5b9a\u984d\u5916\u7684\u529f\u80fd\uff08\u4f8b\u5982\uff0c\u4f60\u4f7f\u7528\u5916\u90e8\u670d\u52d9\uff09\uff0c\u4f60\u53ef\u4ee5\u8a2d\u5b9a ",(0,s.jsx)(n.code,{children:"SELENIUM_REMOTE_CAPABILITIES"})," \u74b0\u5883\u8b8a\u6578\u4f86\u63d0\u4f9b JSON \u5e8f\u5217\u5316\u7684\u529f\u80fd\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SELENIUM_REMOTE_URL=http://<selenium-hub-ip>:4444 SELENIUM_REMOTE_CAPABILITIES=\"{'mygrid:options':{os:'windows',username:'John',password:'secure'}}\" mvn test\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u50b3\u905e\u984d\u5916\u7684\u6a19\u982d",children:"\u50b3\u905e\u984d\u5916\u7684\u6a19\u982d"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u7684\u7db2\u683c\u9700\u8981\u8a2d\u7f6e\u984d\u5916\u7684\u6a19\u982d\uff08\u4f8b\u5982\uff0c\u4f60\u61c9\u8a72\u63d0\u4f9b\u6388\u6b0a token \u4ee5\u5728\u4f60\u7684\u96f2\u4e2d\u4f7f\u7528\u700f\u89bd\u5668\uff09\uff0c\u4f60\u53ef\u4ee5\u8a2d\u7f6e ",(0,s.jsx)(n.code,{children:"SELENIUM_REMOTE_HEADERS"})," \u74b0\u5883\u8b8a\u6578\u4f86\u63d0\u4f9b JSON \u5e8f\u5217\u5316\u7684\u6a19\u982d\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SELENIUM_REMOTE_URL=http://<selenium-hub-ip>:4444 SELENIUM_REMOTE_HEADERS=\"{'Authorization':'OAuth 12345'}\" mvn test\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"DEBUG=pw:browser*"})," \u74b0\u5883\u8b8a\u6578\u4e0b\u57f7\u884c\uff0c\u4ee5\u67e5\u770b Playwright \u5982\u4f55\u9023\u63a5\u5230 Selenium Grid\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"DEBUG=pw:browser* SELENIUM_REMOTE_URL=http://internal.grid:4444 mvn test\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u4f60\u63d0\u4ea4\u554f\u984c\uff0c\u8acb\u5305\u542b\u6b64\u65e5\u8a8c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528-selenium-docker",children:"\u4f7f\u7528 Selenium Docker"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 Selenium Grid \u7684\u4e00\u500b\u7c21\u55ae\u65b9\u6cd5\u662f\u57f7\u884c\u5b98\u65b9\u7684 docker \u5bb9\u5668\u3002\u95b1\u8b80\u66f4\u591a\u5728 ",(0,s.jsx)(n.a,{href:"https://github.com/SeleniumHQ/docker-selenium",children:"selenium docker images"})," \u6587\u4ef6\u3002\u5c0d\u65bc\u5be6\u9a57\u6027\u7684 arm \u6620\u50cf\uff0c\u8acb\u53c3\u898b ",(0,s.jsx)(n.a,{href:"https://github.com/seleniumhq-community/docker-seleniarm",children:"docker-seleniarm"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u7368\u7acb\u6a21\u5f0f",children:"\u7368\u7acb\u6a21\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u9019\u88e1\u662f\u4e00\u500b\u57f7\u884c selenium standalone \u4e26\u9023\u63a5 Playwright \u7684\u7bc4\u4f8b\u3002\u8acb\u6ce8\u610f\uff0chub \u548c node \u4f4d\u65bc\u76f8\u540c\u7684 ",(0,s.jsx)(n.code,{children:"localhost"}),"\uff0c\u6211\u5011\u50b3\u905e\u6307\u5411\u5b83\u7684 ",(0,s.jsx)(n.code,{children:"SE_NODE_GRID_URL"})," \u74b0\u5883\u8b8a\u6578\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u9996\u5148\u555f\u52d5 Selenium\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'docker run -d -p 4444:4444 --shm-size="2g" -e SE_NODE_GRID_URL="http://localhost:4444" selenium/standalone-chrome:4.3.0-20220726\n\n# Alternatively for arm architecture\ndocker run -d -p 4444:4444 --shm-size="2g" -e SE_NODE_GRID_URL="http://localhost:4444" seleniarm/standalone-chromium:103.0\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u5f8c\u57f7\u884c Playwright\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SELENIUM_REMOTE_URL=http://localhost:4444 mvn test\n"})}),"\n",(0,s.jsx)(n.h3,{id:"hub-and-nodes-\u6a21\u5f0f",children:"Hub and nodes \u6a21\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u9019\u88e1\u662f\u4e00\u500b\u57f7\u884c selenium hub \u548c\u55ae\u500b selenium \u7bc0\u9ede\u7684\u7bc4\u4f8b\uff0c\u4e26\u5c07 Playwright \u9023\u63a5\u5230 hub\u3002\u8acb\u6ce8\u610f\uff0chub \u548c\u7bc0\u9ede\u6709\u4e0d\u540c\u7684 IP\uff0c\u4e26\u4e14\u5728\u555f\u52d5\u7bc0\u9ede\u5bb9\u5668\u6642\uff0c\u6211\u5011\u50b3\u905e\u6307\u5411 hub \u7684 ",(0,s.jsx)(n.code,{children:"SE_NODE_GRID_URL"})," \u74b0\u5883\u8b8a\u6578\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u9996\u5148\u555f\u52d5 hub \u5bb9\u5668\u548c\u4e00\u500b\u6216\u591a\u500b node \u5bb9\u5668\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'docker run -d -p 4442-4444:4442-4444 --name selenium-hub selenium/hub:4.3.0-20220726\ndocker run -d -p 5555:5555 \\\n    --shm-size="2g" \\\n    -e SE_EVENT_BUS_HOST=<selenium-hub-ip> \\\n    -e SE_EVENT_BUS_PUBLISH_PORT=4442 \\\n    -e SE_EVENT_BUS_SUBSCRIBE_PORT=4443 \\\n    -e SE_NODE_GRID_URL="http://<selenium-hub-ip>:4444"\n    selenium/node-chrome:4.3.0-20220726\n\n# Alternatively for arm architecture\ndocker run -d -p 4442-4444:4442-4444 --name selenium-hub seleniarm/hub:4.3.0-20220728\ndocker run -d -p 5555:5555 \\\n    --shm-size="2g" \\\n    -e SE_EVENT_BUS_HOST=<selenium-hub-ip> \\\n    -e SE_EVENT_BUS_PUBLISH_PORT=4442 \\\n    -e SE_EVENT_BUS_SUBSCRIBE_PORT=4443 \\\n    -e SE_NODE_GRID_URL="http://<selenium-hub-ip>:4444"\n    seleniarm/node-chromium:103.0\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u5f8c\u57f7\u884c Playwright\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"SELENIUM_REMOTE_URL=http://<selenium-hub-ip>:4444 mvn test\n"})}),"\n",(0,s.jsx)(n.h2,{id:"selenium-3",children:"Selenium 3"}),"\n",(0,s.jsxs)(n.p,{children:["\u5167\u90e8\uff0cPlaywright \u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"Chrome DevTools Protocol"})," websocket \u9023\u63a5\u5230\u700f\u89bd\u5668\u3002Selenium 4 \u66b4\u9732\u4e86\u9019\u7a2e\u80fd\u529b\uff0c\u800c Selenium 3 \u5247\u6c92\u6709\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u9019\u610f\u5473\u8457 Selenium 3 \u4ee5\u6700\u4f73\u52aa\u529b\u65b9\u5f0f\u652f\u63f4\uff0cPlaywright \u5617\u8a66\u76f4\u63a5\u9023\u63a5\u5230\u7db2\u683c\u7bc0\u9ede\u3002\u7db2\u683c\u7bc0\u9ede\u5fc5\u9808\u80fd\u5920\u5f9e\u57f7\u884c Playwright \u7684\u6a5f\u5668\u76f4\u63a5\u8a2a\u554f\u3002"})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);