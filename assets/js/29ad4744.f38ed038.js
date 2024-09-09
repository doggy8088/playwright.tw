"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9712],{2787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(4848),r=n(8453);n(4235),n(8328),n(3078);const i={id:"mock-browser-apis",title:"\u6a21\u64ec\u700f\u89bd\u5668 APIs"},s=void 0,c={id:"mock-browser-apis",title:"\u6a21\u64ec\u700f\u89bd\u5668 APIs",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/mock-browser.mdx",sourceDirName:".",slug:"/mock-browser-apis",permalink:"/docs/mock-browser-apis",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"mock-browser-apis",title:"\u6a21\u64ec\u700f\u89bd\u5668 APIs"},sidebar:"docs",previous:{title:"\u6a21\u64ec API",permalink:"/docs/mock"},next:{title:"\u5c0e\u822a",permalink:"/docs/navigations"}},o={},l=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb-1",level:2},{value:"\u5efa\u7acb\u6a21\u64ec",id:"\u5efa\u7acb\u6a21\u64ec",level:2},{value:"\u6a21\u64ec\u552f\u8b80 API",id:"\u6a21\u64ec\u552f\u8b80-api",level:2},{value:"\u9a57\u8b49 API \u547c\u53eb",id:"\u9a57\u8b49-api-\u547c\u53eb",level:2},{value:"\u66f4\u65b0\u6a21\u64ec",id:"\u66f4\u65b0\u6a21\u64ec",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,a.jsx)(t.p,{children:"Playwright \u63d0\u4f9b\u5c0d\u5927\u591a\u6578\u700f\u89bd\u5668\u529f\u80fd\u7684\u539f\u751f\u652f\u63f4\u3002\u7136\u800c\uff0c\u6709\u4e00\u4e9b\u5be6\u9a57\u6027 API \u548c\u5c1a\u672a\u5b8c\u5168\u88ab\u6240\u6709\u700f\u89bd\u5668\u652f\u63f4\u7684 API\u3002\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0cPlaywright \u901a\u5e38\u4e0d\u63d0\u4f9b\u5c08\u7528\u7684\u81ea\u52d5\u5316 API\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u6a21\u64ec\u4f86\u6e2c\u8a66\u61c9\u7528\u7a0b\u5f0f\u7684\u884c\u70ba\u3002\u672c\u6307\u5357\u7d66\u51fa\u4e86\u4e00\u4e9b\u7bc4\u4f8b\u3002"}),"\n",(0,a.jsx)(t.h2,{id:"\u7c21\u4ecb-1",children:"\u7c21\u4ecb"}),"\n",(0,a.jsxs)(t.p,{children:["\u8b93\u6211\u5011\u8003\u616e\u4e00\u500b\u4f7f\u7528 ",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery",children:"battery API"})," \u4f86\u986f\u793a\u60a8\u88dd\u7f6e\u96fb\u6c60\u72c0\u614b\u7684\u7db2\u9801\u61c9\u7528\u7a0b\u5f0f\u3002\u6211\u5011\u5c07\u6a21\u64ec battery API \u4e26\u6aa2\u67e5\u9801\u9762\u662f\u5426\u6b63\u78ba\u986f\u793a\u96fb\u6c60\u72c0\u614b\u3002"]}),"\n",(0,a.jsx)(t.h2,{id:"\u5efa\u7acb\u6a21\u64ec",children:"\u5efa\u7acb\u6a21\u64ec"}),"\n",(0,a.jsxs)(t.p,{children:["\u7531\u65bc\u9801\u9762\u53ef\u80fd\u5728\u8f09\u5165\u6642\u975e\u5e38\u65e9\u5c31\u547c\u53eb API\uff0c\u56e0\u6b64\u5728\u9801\u9762\u958b\u59cb\u8f09\u5165\u4e4b\u524d\u8a2d\u5b9a\u6240\u6709\u6a21\u64ec\u662f\u5f88\u91cd\u8981\u7684\u3002\u6700\u7c21\u55ae\u7684\u65b9\u6cd5\u662f\u547c\u53eb ",(0,a.jsx)(t.a,{href:"/docs/api/class-page#page-add-init-script",children:"page.addInitScript()"}),"\uff1a"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"await page.addInitScript(() => {\n  const mockBattery = {\n    level: 0.75,\n    charging: true,\n    chargingTime: 1800,\n    dischargingTime: Infinity,\n    addEventListener: () => { }\n  };\n  // Override the method to always return mock battery info.\n  window.navigator.getBattery = async () => mockBattery;\n});\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u4e00\u65e6\u5b8c\u6210\u9019\u4e9b\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u700f\u89bd\u9801\u9762\u4e26\u6aa2\u67e5\u5176 UI \u72c0\u614b:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// Configure mock API before each test.\ntest.beforeEach(async ({ page }) => {\n  await page.addInitScript(() => {\n    const mockBattery = {\n      level: 0.90,\n      charging: true,\n      chargingTime: 1800, // seconds\n      dischargingTime: Infinity,\n      addEventListener: () => { }\n    };\n    // Override the method to always return mock battery info.\n    window.navigator.getBattery = async () => mockBattery;\n  });\n});\n\ntest('show battery status', async ({ page }) => {\n  await page.goto('/');\n  await expect(page.locator('.battery-percentage')).toHaveText('90%');\n  await expect(page.locator('.battery-status')).toHaveText('Adapter');\n  await expect(page.locator('.battery-fully')).toHaveText('00:30');\n});\n\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u6a21\u64ec\u552f\u8b80-api",children:"\u6a21\u64ec\u552f\u8b80 API"}),"\n",(0,a.jsx)(t.p,{children:"\u6709\u4e9b API \u662f\u552f\u8b80\u7684\uff0c\u56e0\u6b64\u60a8\u7121\u6cd5\u6307\u6d3e\u7d66 navigator \u5c6c\u6027\u3002\u4f8b\u5982\uff0c"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"// Following line will have no effect.\nnavigator.cookieEnabled = true;\n"})}),"\n",(0,a.jsxs)(t.p,{children:["\u7136\u800c\uff0c\u5982\u679c\u8a72\u5c6c\u6027\u662f",(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#configurable",children:"\u53ef\u914d\u7f6e\u7684"}),"\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528\u666e\u901a\u7684 JavaScript \u8986\u84cb\u5b83:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"await page.addInitScript(() => {\n  Object.defineProperty(Object.getPrototypeOf(navigator), 'cookieEnabled', { value: false });\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u9a57\u8b49-api-\u547c\u53eb",children:"\u9a57\u8b49 API \u547c\u53eb"}),"\n",(0,a.jsxs)(t.p,{children:["\u6709\u6642\u6aa2\u67e5\u9801\u9762\u662f\u5426\u9032\u884c\u4e86\u6240\u6709\u9810\u671f\u7684 API \u547c\u53eb\u662f\u5f88\u6709\u7528\u7684\u3002\u60a8\u53ef\u4ee5\u8a18\u9304\u6240\u6709 API \u65b9\u6cd5\u547c\u53eb\uff0c\u7136\u5f8c\u5c07\u5b83\u5011\u8207\u9ec3\u91d1\u7d50\u679c\u9032\u884c\u6bd4\u8f03\u3002",(0,a.jsx)(t.a,{href:"/docs/api/class-page#page-expose-function",children:"page.exposeFunction()"})," \u53ef\u80fd\u6703\u5728\u5c07\u8a0a\u606f\u5f9e\u9801\u9762\u50b3\u56de\u6e2c\u8a66\u7a0b\u5f0f\u78bc\u6642\u6d3e\u4e0a\u7528\u5834\uff1a"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"test('log battery calls', async ({ page }) => {\n  const log = [];\n  // Expose function for pushing messages to the Node.js script.\n  await page.exposeFunction('logCall', msg => log.push(msg));\n  await page.addInitScript(() => {\n    const mockBattery = {\n      level: 0.75,\n      charging: true,\n      chargingTime: 1800,\n      dischargingTime: Infinity,\n      // Log addEventListener calls.\n      addEventListener: (name, cb) => logCall(`addEventListener:${name}`)\n    };\n    // Override the method to always return mock battery info.\n    window.navigator.getBattery = async () => {\n      logCall('getBattery');\n      return mockBattery;\n    };\n  });\n\n  await page.goto('/');\n  await expect(page.locator('.battery-percentage')).toHaveText('75%');\n\n  // Compare actual calls with golden.\n  expect(log).toEqual([\n    'getBattery',\n    'addEventListener:chargingchange',\n    'addEventListener:levelchange'\n  ]);\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u66f4\u65b0\u6a21\u64ec",children:"\u66f4\u65b0\u6a21\u64ec"}),"\n",(0,a.jsx)(t.p,{children:"\u8981\u6e2c\u8a66\u61c9\u7528\u7a0b\u5f0f\u662f\u5426\u6b63\u78ba\u53cd\u6620\u96fb\u6c60\u72c0\u614b\u66f4\u65b0\uff0c\u91cd\u8981\u7684\u662f\u78ba\u4fdd\u6a21\u64ec\u96fb\u6c60\u7269\u4ef6\u89f8\u767c\u8207\u700f\u89bd\u5668\u5be6\u73fe\u76f8\u540c\u7684\u4e8b\u4ef6\u3002\u4ee5\u4e0b\u6e2c\u8a66\u5c55\u793a\u4e86\u5982\u4f55\u5be6\u73fe\u9019\u4e00\u9ede:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"test('update battery status (no golden)', async ({ page }) => {\n  await page.addInitScript(() => {\n    // Mock class that will notify corresponding listeners when battery status changes.\n    class BatteryMock {\n      level = 0.10;\n      charging = false;\n      chargingTime = 1800;\n      dischargingTime = Infinity;\n      _chargingListeners = [];\n      _levelListeners = [];\n      addEventListener(eventName, listener) {\n        if (eventName === 'chargingchange')\n          this._chargingListeners.push(listener);\n        if (eventName === 'levelchange')\n          this._levelListeners.push(listener);\n      }\n      // Will be called by the test.\n      _setLevel(value) {\n        this.level = value;\n        this._levelListeners.forEach(cb => cb());\n      }\n      _setCharging(value) {\n        this.charging = value;\n        this._chargingListeners.forEach(cb => cb());\n      }\n    }\n    const mockBattery = new BatteryMock();\n    // Override the method to always return mock battery info.\n    window.navigator.getBattery = async () => mockBattery;\n    // Save the mock object on window for easier access.\n    window.mockBattery = mockBattery;\n  });\n\n  await page.goto('/');\n  await expect(page.locator('.battery-percentage')).toHaveText('10%');\n\n  // Update level to 27.5%\n  await page.evaluate(() => window.mockBattery._setLevel(0.275));\n  await expect(page.locator('.battery-percentage')).toHaveText('27.5%');\n  await expect(page.locator('.battery-status')).toHaveText('Battery');\n\n  // Emulate connected adapter\n  await page.evaluate(() => window.mockBattery._setCharging(true));\n  await expect(page.locator('.battery-status')).toHaveText('Adapter');\n  await expect(page.locator('.battery-fully')).toHaveText('00:30');\n});\n"})})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);