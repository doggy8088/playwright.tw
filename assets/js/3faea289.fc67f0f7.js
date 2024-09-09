"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5726],{6812:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var r=i(4848),s=i(8453);i(4235),i(8328),i(3078);const t={id:"class-android",title:"Android"},o=void 0,a={id:"api/class-android",title:"Android",description:"Playwright has experimental support for Android automation. This includes Chrome for Android and Android WebView.",source:"@site/docs/api/class-android.mdx",sourceDirName:"api",slug:"/api/class-android",permalink:"/docs/next/api/class-android",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-android",title:"Android"},sidebar:"api",previous:{title:"TestStep",permalink:"/docs/next/api/class-teststep"},next:{title:"AndroidDevice",permalink:"/docs/next/api/class-androiddevice"}},d={},l=[{value:"Methods",id:"methods",level:2},{value:"connect",id:"android-connect",level:3},{value:"devices",id:"android-devices",level:3},{value:"launchServer",id:"android-launch-server",level:3},{value:"setDefaultTimeout",id:"android-set-default-timeout",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Playwright has ",(0,r.jsx)(n.strong,{children:"experimental"})," support for Android automation. This includes Chrome for Android and Android WebView."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Requirements"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Android device or AVD Emulator."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://developer.android.com/studio/command-line/adb",children:"ADB daemon"})," running and authenticated with your device. Typically running ",(0,r.jsx)(n.code,{children:"adb devices"})," is all you need to do."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://play.google.com/store/apps/details?id=com.android.chrome",children:(0,r.jsx)(n.code,{children:"Chrome 87"})})," or newer installed on the device"]}),"\n",(0,r.jsxs)(n.li,{children:['"Enable command line on non-rooted devices" enabled in ',(0,r.jsx)(n.code,{children:"chrome://flags"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Known limitations"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Raw USB operation is not yet supported, so you need ADB."}),"\n",(0,r.jsx)(n.li,{children:'Device needs to be awake to produce screenshots. Enabling "Stay awake" developer mode will help.'}),"\n",(0,r.jsx)(n.li,{children:"We didn't run all the tests against the device, so not everything works."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"How to run"})}),"\n",(0,r.jsx)(n.p,{children:"An example of the Android automation script would be:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const { _android: android } = require('playwright');\n\n(async () => {\n  // Connect to the device.\n  const [device] = await android.devices();\n  console.log(`Model: ${device.model()}`);\n  console.log(`Serial: ${device.serial()}`);\n  // Take screenshot of the whole device.\n  await device.screenshot({ path: 'device.png' });\n\n  {\n    // --------------------- WebView -----------------------\n\n    // Launch an application with WebView.\n    await device.shell('am force-stop org.chromium.webview_shell');\n    await device.shell('am start org.chromium.webview_shell/.WebViewBrowserActivity');\n    // Get the WebView.\n    const webview = await device.webView({ pkg: 'org.chromium.webview_shell' });\n\n    // Fill the input box.\n    await device.fill({\n      res: 'org.chromium.webview_shell:id/url_field',\n    }, 'github.com/microsoft/playwright');\n    await device.press({\n      res: 'org.chromium.webview_shell:id/url_field',\n    }, 'Enter');\n\n    // Work with WebView's page as usual.\n    const page = await webview.page();\n    await page.waitForNavigation({ url: /.*microsoft\\/playwright.*/ });\n    console.log(await page.title());\n  }\n\n  {\n    // --------------------- Browser -----------------------\n\n    // Launch Chrome browser.\n    await device.shell('am force-stop com.android.chrome');\n    const context = await device.launchBrowser();\n\n    // Use BrowserContext as usual.\n    const page = await context.newPage();\n    await page.goto('https://webkit.org/');\n    console.log(await page.evaluate(() => window.location.href));\n    await page.screenshot({ path: 'page.png' });\n\n    await context.close();\n  }\n\n  // Close the device.\n  await device.close();\n})();\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"android-connect",children:"connect"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.28"}),"\n",(0,r.jsx)("x-search",{children:"android.connect"}),"\n",(0,r.jsxs)(n.p,{children:["This methods attaches Playwright to an existing Android device. Use ",(0,r.jsx)(n.a,{href:"/docs/next/api/class-android#android-launch-server",children:"android.launchServer()"})," to launch a new Android server instance."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Usage"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"await android.connect(wsEndpoint);\nawait android.connect(wsEndpoint, options);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"wsEndpoint"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-connect-option-ws-endpoint"}),(0,r.jsx)("a",{href:"#android-connect-option-ws-endpoint",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"A browser websocket endpoint to connect to."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"options"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"})," ",(0,r.jsx)(n.em,{children:"(optional)"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"headers"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"}),"<",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"}),", ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"}),"> ",(0,r.jsx)(n.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-connect-option-headers"}),(0,r.jsx)("a",{href:"#android-connect-option-headers",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Additional HTTP headers to be sent with web socket connect request. Optional."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"slowMo"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})," ",(0,r.jsx)(n.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-connect-option-slow-mo"}),(0,r.jsx)("a",{href:"#android-connect-option-slow-mo",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Slows down Playwright operations by the specified amount of milliseconds. Useful so that you can see what is going on. Defaults to ",(0,r.jsx)(n.code,{children:"0"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"timeout"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})," ",(0,r.jsx)(n.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-connect-option-timeout"}),(0,r.jsx)("a",{href:"#android-connect-option-timeout",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Maximum time in milliseconds to wait for the connection to be established. Defaults to ",(0,r.jsx)(n.code,{children:"30000"})," (30 seconds). Pass ",(0,r.jsx)(n.code,{children:"0"})," to disable timeout."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise",children:"Promise"}),"<",(0,r.jsx)(n.a,{href:"/docs/next/api/class-androiddevice",title:"AndroidDevice",children:"AndroidDevice"}),">",(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-connect-return"}),(0,r.jsx)("a",{href:"#android-connect-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"android-devices",children:"devices"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.9"}),"\n",(0,r.jsx)("x-search",{children:"android.devices"}),"\n",(0,r.jsx)(n.p,{children:"Returns the list of detected Android devices."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Usage"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"await android.devices();\nawait android.devices(options);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"options"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"})," ",(0,r.jsx)(n.em,{children:"(optional)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"host"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," ",(0,r.jsx)(n.em,{children:"(optional)"})," ",(0,r.jsx)("font",{size:"2",children:"Added in: v1.22"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-devices-option-host"}),(0,r.jsx)("a",{href:"#android-devices-option-host",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Optional host to establish ADB server connection. Default to ",(0,r.jsx)(n.code,{children:"127.0.0.1"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"omitDriverInstall"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"})," ",(0,r.jsx)(n.em,{children:"(optional)"})," ",(0,r.jsx)("font",{size:"2",children:"Added in: v1.21"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-devices-option-omit-driver-install"}),(0,r.jsx)("a",{href:"#android-devices-option-omit-driver-install",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Prevents automatic playwright driver installation on attach. Assumes that the drivers have been installed already."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"port"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})," ",(0,r.jsx)(n.em,{children:"(optional)"})," ",(0,r.jsx)("font",{size:"2",children:"Added in: v1.20"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-devices-option-port"}),(0,r.jsx)("a",{href:"#android-devices-option-port",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Optional port to establish ADB server connection. Default to ",(0,r.jsx)(n.code,{children:"5037"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise",children:"Promise"}),"<",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array",children:"Array"}),"<",(0,r.jsx)(n.a,{href:"/docs/next/api/class-androiddevice",title:"AndroidDevice",children:"AndroidDevice"}),">>",(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-devices-return"}),(0,r.jsx)("a",{href:"#android-devices-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"android-launch-server",children:"launchServer"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.28"}),"\n",(0,r.jsx)("x-search",{children:"android.launchServer"}),"\n",(0,r.jsx)(n.p,{children:"Launches Playwright Android server that clients can connect to. See the following example:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Usage"})}),"\n",(0,r.jsx)(n.p,{children:"Server Side:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const { _android } = require('playwright');\n\n(async () => {\n  const browserServer = await _android.launchServer({\n    // If you have multiple devices connected and want to use a specific one.\n    // deviceSerialNumber: '<deviceSerialNumber>',\n  });\n  const wsEndpoint = browserServer.wsEndpoint();\n  console.log(wsEndpoint);\n})();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Client Side:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const { _android } = require('playwright');\n\n(async () => {\n  const device = await _android.connect('<wsEndpoint>');\n\n  console.log(device.model());\n  console.log(device.serial());\n  await device.shell('am force-stop com.android.chrome');\n  const context = await device.launchBrowser();\n\n  const page = await context.newPage();\n  await page.goto('https://webkit.org/');\n  console.log(await page.evaluate(() => window.location.href));\n  await page.screenshot({ path: 'page-chrome-1.png' });\n\n  await context.close();\n})();\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"options"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"})," ",(0,r.jsx)(n.em,{children:"(optional)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"adbHost"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," ",(0,r.jsx)(n.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-launch-server-option-adb-host"}),(0,r.jsx)("a",{href:"#android-launch-server-option-adb-host",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Optional host to establish ADB server connection. Default to ",(0,r.jsx)(n.code,{children:"127.0.0.1"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"adbPort"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})," ",(0,r.jsx)(n.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-launch-server-option-adb-port"}),(0,r.jsx)("a",{href:"#android-launch-server-option-adb-port",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Optional port to establish ADB server connection. Default to ",(0,r.jsx)(n.code,{children:"5037"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"deviceSerialNumber"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," ",(0,r.jsx)(n.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-launch-server-option-device-serial-number"}),(0,r.jsx)("a",{href:"#android-launch-server-option-device-serial-number",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Optional device serial number to launch the browser on. If not specified, it will throw if multiple devices are connected."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"host"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," ",(0,r.jsx)(n.em,{children:"(optional)"})," ",(0,r.jsx)("font",{size:"2",children:"Added in: v1.45"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-launch-server-option-host"}),(0,r.jsx)("a",{href:"#android-launch-server-option-host",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Host to use for the web socket. It is optional and if it is omitted, the server will accept connections on the unspecified IPv6 address (::) when IPv6 is available, or the unspecified IPv4 address (0.0.0.0) otherwise. Consider hardening it with picking a specific interface."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"omitDriverInstall"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"})," ",(0,r.jsx)(n.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-launch-server-option-omit-driver-install"}),(0,r.jsx)("a",{href:"#android-launch-server-option-omit-driver-install",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Prevents automatic playwright driver installation on attach. Assumes that the drivers have been installed already."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"port"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})," ",(0,r.jsx)(n.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-launch-server-option-port"}),(0,r.jsx)("a",{href:"#android-launch-server-option-port",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Port to use for the web socket. Defaults to 0 that picks any available port."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"wsPath"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," ",(0,r.jsx)(n.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-launch-server-option-ws-path"}),(0,r.jsx)("a",{href:"#android-launch-server-option-ws-path",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Path at which to serve the Android Server. For security, this defaults to an unguessable string."}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Any process or web page (including those running in Playwright) with knowledge of the ",(0,r.jsx)(n.code,{children:"wsPath"})," can take control of the OS user. For this reason, you should use an unguessable token when using this option."]})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise",children:"Promise"}),"<",(0,r.jsx)(n.a,{href:"/docs/next/api/class-browserserver",title:"BrowserServer",children:"BrowserServer"}),">",(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-launch-server-return"}),(0,r.jsx)("a",{href:"#android-launch-server-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"android-set-default-timeout",children:"setDefaultTimeout"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.9"}),"\n",(0,r.jsx)("x-search",{children:"android.setDefaultTimeout"}),"\n",(0,r.jsxs)(n.p,{children:["This setting will change the default maximum time for all the methods accepting ",(0,r.jsx)(n.code,{children:"timeout"})," option."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Usage"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"android.setDefaultTimeout(timeout);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"timeout"})," ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"android-set-default-timeout-option-timeout"}),(0,r.jsx)("a",{href:"#android-set-default-timeout-option-timeout",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Maximum time in milliseconds"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);