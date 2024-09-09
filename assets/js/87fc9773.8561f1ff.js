"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5615],{2815:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>w});var i=t(4848),s=t(8453);t(4235),t(8328),t(3078);const r={id:"webview2",title:"WebView2"},o=void 0,c={id:"webview2",title:"WebView2",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/webview2.mdx",sourceDirName:".",slug:"/webview2",permalink:"/docs/webview2",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"webview2",title:"WebView2"},sidebar:"docs",previous:{title:"\u9304\u5f71",permalink:"/docs/videos"},next:{title:"\u5f9e Protractor \u9077\u79fb",permalink:"/docs/protractor"}},a={},w=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"Writing and running tests",id:"writing-and-running-tests",level:2},{value:"\u9664\u932f",id:"\u9664\u932f",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5c07\u89e3\u91cb\u5982\u4f55\u4f7f\u7528 Playwright \u642d\u914d ",(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/microsoft-edge/webview2/",children:"Microsoft Edge WebView2"}),"\u3002WebView2 \u662f\u4e00\u500b WinForms \u63a7\u5236\u9805\uff0c\u6703\u4f7f\u7528 Microsoft Edge \u4f86\u5448\u73fe\u7db2\u9801\u5167\u5bb9\u3002\u5b83\u662f Microsoft Edge \u700f\u89bd\u5668\u7684\u4e00\u90e8\u5206\uff0c\u9069\u7528\u65bc Windows 10 \u548c Windows 11\u3002Playwright \u53ef\u4ee5\u7528\u4f86\u81ea\u52d5\u5316 WebView2 \u61c9\u7528\u7a0b\u5f0f\uff0c\u4e26\u7528\u4f86\u6e2c\u8a66 WebView2 \u4e2d\u7684\u7db2\u9801\u5167\u5bb9\u3002\u70ba\u4e86\u9023\u63a5\u5230 WebView2\uff0cPlaywright \u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"/docs/api/class-browsertype#browser-type-connect-over-cdp",children:"browserType.connectOverCDP()"}),"\uff0c\u8a72\u65b9\u6cd5\u901a\u904e Chrome DevTools Protocol (CDP) \u9032\u884c\u9023\u63a5\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,i.jsxs)(n.p,{children:["WebView2 \u63a7\u5236\u9805\u53ef\u4ee5\u900f\u904e\u8a2d\u5b9a ",(0,i.jsx)(n.code,{children:"WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS"})," \u74b0\u5883\u8b8a\u6578\u70ba ",(0,i.jsx)(n.code,{children:"--remote-debugging-port=9222"})," \u6216\u547c\u53eb ",(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.wpf.webview2.ensurecorewebview2async?view=webview2-dotnet-1.0.1343.22",children:"EnsureCoreWebView2Async"})," \u4e26\u5e36\u4e0a ",(0,i.jsx)(n.code,{children:"--remote-debugging-port=9222"})," \u53c3\u6578\u4f86\u6307\u793a\u5176\u76e3\u807d\u9032\u5165\u7684 CDP \u9023\u63a5\u3002\u9019\u5c07\u555f\u52d5\u555f\u7528 Chrome DevTools Protocol \u7684 WebView2 \u7a0b\u5e8f\uff0c\u5141\u8a31 Playwright \u9032\u884c\u81ea\u52d5\u5316\u30029222 \u662f\u6b64\u7bc4\u4f8b\u4e2d\u7684\u57e0\u865f\uff0c\u4f46\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u5176\u4ed6\u672a\u4f7f\u7528\u7684\u57e0\u865f\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'await this.webView.EnsureCoreWebView2Async(await CoreWebView2Environment.CreateAsync(null, null, new CoreWebView2EnvironmentOptions()\n{\n  AdditionalBrowserArguments = "--remote-debugging-port=9222",\n})).ConfigureAwait(false);\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u65e6\u5305\u542b WebView2 \u63a7\u5236\u9805\u7684\u61c9\u7528\u7a0b\u5f0f\u6b63\u5728\u57f7\u884c\uff0c\u4f60\u53ef\u4ee5\u901a\u904e Playwright \u9023\u63a5\u5230\u5b83:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const browser = await playwright.chromium.connectOverCDP('http://localhost:9222');\nconst context = browser.contexts()[0];\nconst page = context.pages()[0];\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u70ba\u4e86\u78ba\u4fdd WebView2 \u63a7\u5236\u9805\u5df2\u6e96\u5099\u597d\uff0c\u4f60\u53ef\u4ee5\u7b49\u5f85 ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.wpf.webview2.corewebview2initializationcompleted?view=webview2-dotnet-1.0.1343.22",children:(0,i.jsx)(n.code,{children:"CoreWebView2InitializationCompleted"})})," \u4e8b\u4ef6\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'this.webView.CoreWebView2InitializationCompleted += (_, e) =>\n{\n    if (e.IsSuccess)\n    {\n        Console.WriteLine("WebView2 initialized");\n    }\n};\n'})}),"\n",(0,i.jsx)(n.h2,{id:"writing-and-running-tests",children:"Writing and running tests"}),"\n",(0,i.jsxs)(n.p,{children:["\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0cWebView2 \u63a7\u5236\u9805\u5c07\u5c0d\u6240\u6709\u5be6\u4f8b\u4f7f\u7528\u76f8\u540c\u7684\u7528\u6236\u8cc7\u6599\u76ee\u9304\u3002\u9019\u610f\u5473\u8457\u5982\u679c\u60a8\u5e73\u884c\u57f7\u884c\u591a\u500b\u6e2c\u8a66\uff0c\u5b83\u5011\u5c07\u4e92\u76f8\u5e72\u64fe\u3002\u70ba\u4e86\u907f\u514d\u9019\u7a2e\u60c5\u6cc1\uff0c\u60a8\u61c9\u8a72\u70ba\u6bcf\u500b\u6e2c\u8a66\u8a2d\u7f6e ",(0,i.jsx)(n.code,{children:"WEBVIEW2_USER_DATA_FOLDER"})," \u74b0\u5883\u8b8a\u6578\uff08\u6216\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.wpf.webview2.ensurecorewebview2async?view=webview2-dotnet-1.0.1343.22",children:"WebView2.EnsureCoreWebView2Async Method"}),"\uff09\uff0c\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u6587\u4ef6\u593e\u3002\u9019\u5c07\u78ba\u4fdd\u6bcf\u500b\u6e2c\u8a66\u5728\u5176\u81ea\u5df1\u7684\u7528\u6236\u8cc7\u6599\u76ee\u9304\u4e2d\u57f7\u884c\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528\u4ee5\u4e0b\u5167\u5bb9\uff0cPlaywright \u5c07\u6703\u5c07\u4f60\u7684 WebView2 \u61c9\u7528\u7a0b\u5f0f\u4f5c\u70ba\u5b50\u7a0b\u5e8f\u57f7\u884c\uff0c\u70ba\u5176\u5206\u914d\u4e00\u500b\u552f\u4e00\u7684\u4f7f\u7528\u8005\u8cc7\u6599\u76ee\u9304\uff0c\u4e26\u5c07 ",(0,i.jsx)(n.a,{href:"/docs/api/class-page",children:"Page"})," \u5be6\u4f8b\u63d0\u4f9b\u7d66\u4f60\u7684\u6e2c\u8a66\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="webView2Test.ts"',children:"import { test as base } from '@playwright/test';\nimport fs from 'fs';\nimport os from 'os';\nimport path from 'path';\nimport childProcess from 'child_process';\n\nconst EXECUTABLE_PATH = path.join(\n    __dirname,\n    '../../webview2-app/bin/Debug/net8.0-windows/webview2.exe',\n);\n\nexport const test = base.extend({\n  browser: async ({ playwright }, use, testInfo) => {\n    const cdpPort = 10000 + testInfo.workerIndex;\n    // Make sure that the executable exists and is executable\n    fs.accessSync(EXECUTABLE_PATH, fs.constants.X_OK);\n    const userDataDir = path.join(\n        fs.realpathSync.native(os.tmpdir()),\n        `playwright-webview2-tests/user-data-dir-${testInfo.workerIndex}`,\n    );\n    const webView2Process = childProcess.spawn(EXECUTABLE_PATH, [], {\n      shell: true,\n      env: {\n        ...process.env,\n        WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS: `--remote-debugging-port=${cdpPort}`,\n        WEBVIEW2_USER_DATA_FOLDER: userDataDir,\n      }\n    });\n    await new Promise<void>(resolve => webView2Process.stdout.on('data', data => {\n      if (data.toString().includes('WebView2 initialized'))\n        resolve();\n    }));\n    const browser = await playwright.chromium.connectOverCDP(`http://127.0.0.1:${cdpPort}`);\n    await use(browser);\n    await browser.close();\n    childProcess.execSync(`taskkill /pid ${webView2Process.pid} /T /F`);\n    fs.rmdirSync(userDataDir, { recursive: true });\n  },\n  context: async ({ browser }, use) => {\n    const context = browser.contexts()[0];\n    await use(context);\n  },\n  page: async ({ context }, use) => {\n    const page = context.pages()[0];\n    await use(page);\n  },\n});\n\nexport { expect } from '@playwright/test';\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="example.spec.ts"',children:"import { test, expect } from './webView2Test';\n\ntest('test WebView2', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  const getStarted = page.getByText('Get Started');\n  await expect(getStarted).toBeVisible();\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9664\u932f",children:"\u9664\u932f"}),"\n",(0,i.jsxs)(n.p,{children:['\u5728\u4f60\u7684 webview2 \u63a7\u5236\u9805\u5167\uff0c\u4f60\u53ef\u4ee5\u53f3\u9375\u9ede\u64ca\u4ee5\u6253\u958b\u4e0a\u4e0b\u6587\u9078\u55ae\u4e26\u9078\u64c7 "Inspect" \u4f86\u6253\u958b DevTools \u6216\u6309 ',(0,i.jsx)("kbd",{children:"F12"}),"\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.opendevtoolswindow?view=webview2-dotnet-1.0.1462.37",children:"WebView2.CoreWebView2.OpenDevToolsWindow"})," \u65b9\u6cd5\u4ee5\u7a0b\u5f0f\u78bc\u65b9\u5f0f\u6253\u958b DevTools\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u9700\u9664\u932f\u6e2c\u8a66\uff0c\u8acb\u53c3\u95b1 Playwright ",(0,i.jsx)(n.a,{href:"./debug",children:"\u9664\u932f\u6307\u5357"}),"\u3002"]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);