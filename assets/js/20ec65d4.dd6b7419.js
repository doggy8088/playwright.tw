"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1510],{3836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=n(4848),i=n(8453);n(4235),n(8328),n(3078);const o={id:"test-use-options",title:"Test use options"},r=void 0,l={id:"test-use-options",title:"Test use options",description:"Introduction",source:"@site/docs/test-use-options.mdx",sourceDirName:".",slug:"/test-use-options",permalink:"/docs/next/test-use-options",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"test-use-options",title:"Test use options"},sidebar:"docs",previous:{title:"Test configuration",permalink:"/docs/next/test-configuration"},next:{title:"Annotations",permalink:"/docs/next/test-annotations"}},c={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Basic Options",id:"basic-options",level:3},{value:"Emulation Options",id:"emulation-options",level:3},{value:"Network Options",id:"network-options",level:3},{value:"Recording Options",id:"recording-options",level:3},{value:"Other Options",id:"other-options",level:3},{value:"More browser and context options",id:"more-browser-and-context-options",level:3},{value:"Explicit Context Creation and Option Inheritance",id:"explicit-context-creation-and-option-inheritance",level:3},{value:"Configuration Scopes",id:"configuration-scopes",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["In addition to configuring the test runner you can also configure ",(0,s.jsx)(t.a,{href:"#emulation-options",children:"Emulation"}),", ",(0,s.jsx)(t.a,{href:"#network-options",children:"Network"})," and ",(0,s.jsx)(t.a,{href:"#recording-options",children:"Recording"})," for the ",(0,s.jsx)(t.a,{href:"/docs/next/api/class-browser",title:"Browser",children:"Browser"})," or ",(0,s.jsx)(t.a,{href:"/docs/next/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"}),". These options are passed to the ",(0,s.jsx)(t.code,{children:"use: {}"})," object in the Playwright config."]}),"\n",(0,s.jsx)(t.h3,{id:"basic-options",children:"Basic Options"}),"\n",(0,s.jsx)(t.p,{children:"Set the base URL and storage state for all tests:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  use: {\n    // Base URL to use in actions like `await page.goto('/')`.\n    baseURL: 'http://127.0.0.1:3000',\n\n    // Populates context with given storage state.\n    storageState: 'state.json',\n  },\n});\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Option"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-base-url",children:"testOptions.baseURL"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Base URL used for all pages in the context. Allows navigating by using just the path, for example ",(0,s.jsx)(t.code,{children:"page.goto('/settings')"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-storage-state",children:"testOptions.storageState"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Populates context with given storage state. Useful for easy authentication, ",(0,s.jsx)(t.a,{href:"/docs/next/auth",children:"learn more"}),"."]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"emulation-options",children:"Emulation Options"}),"\n",(0,s.jsxs)(t.p,{children:["With Playwright you can emulate a real device such as a mobile phone or tablet. See our ",(0,s.jsx)(t.a,{href:"/docs/next/test-projects",children:"guide on projects"})," for more info on emulating devices. You can also emulate the ",(0,s.jsx)(t.code,{children:'"geolocation"'}),", ",(0,s.jsx)(t.code,{children:'"locale"'})," and ",(0,s.jsx)(t.code,{children:'"timezone"'})," for all tests or for a specific test as well as set the ",(0,s.jsx)(t.code,{children:'"permissions"'})," to show notifications or change the ",(0,s.jsx)(t.code,{children:'"colorScheme"'}),". See our ",(0,s.jsx)(t.a,{href:"/docs/next/emulation",children:"Emulation"})," guide to learn more."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  use: {\n    // Emulates `'prefers-colors-scheme'` media feature.\n    colorScheme: 'dark',\n\n    // Context geolocation.\n    geolocation: { longitude: 12.492507, latitude: 41.889938 },\n\n    // Emulates the user locale.\n    locale: 'en-GB',\n\n    // Grants specified permissions to the browser context.\n    permissions: ['geolocation'],\n\n    // Emulates the user timezone.\n    timezoneId: 'Europe/Paris',\n\n    // Viewport used for all pages in the context.\n    viewport: { width: 1280, height: 720 },\n  },\n});\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Option"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-color-scheme",children:"testOptions.colorScheme"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.a,{href:"/docs/next/emulation#color-scheme-and-media",children:"Emulates"})," ",(0,s.jsx)(t.code,{children:"'prefers-colors-scheme'"})," media feature, supported values are ",(0,s.jsx)(t.code,{children:"'light'"}),", ",(0,s.jsx)(t.code,{children:"'dark'"}),", ",(0,s.jsx)(t.code,{children:"'no-preference'"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-geolocation",children:"testOptions.geolocation"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Context ",(0,s.jsx)(t.a,{href:"/docs/next/emulation#geolocation",children:"geolocation"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-locale",children:"testOptions.locale"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.a,{href:"/docs/next/emulation#locale--timezone",children:"Emulates"})," the user locale, for example ",(0,s.jsx)(t.code,{children:"en-GB"}),", ",(0,s.jsx)(t.code,{children:"de-DE"}),", etc."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-permissions",children:"testOptions.permissions"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["A list of ",(0,s.jsx)(t.a,{href:"/docs/next/emulation#permissions",children:"permissions"})," to grant to all pages in the context."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-timezone-id",children:"testOptions.timezoneId"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Changes the ",(0,s.jsx)(t.a,{href:"/docs/next/emulation#locale--timezone",children:"timezone"})," of the context."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-viewport",children:"testOptions.viewport"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.a,{href:"/docs/next/emulation#viewport",children:"Viewport"})," used for all pages in the context."]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"network-options",children:"Network Options"}),"\n",(0,s.jsx)(t.p,{children:"Available options to configure networking:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  use: {\n    // Whether to automatically download all the attachments.\n    acceptDownloads: false,\n\n    // An object containing additional HTTP headers to be sent with every request.\n    extraHTTPHeaders: {\n      'X-My-Header': 'value',\n    },\n\n    // Credentials for HTTP authentication.\n    httpCredentials: {\n      username: 'user',\n      password: 'pass',\n    },\n\n    // Whether to ignore HTTPS errors during navigation.\n    ignoreHTTPSErrors: true,\n\n    // Whether to emulate network being offline.\n    offline: true,\n\n    // Proxy settings used for all pages in the test.\n    proxy: {\n      server: 'http://myproxy.com:3128',\n      bypass: 'localhost',\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Option"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-accept-downloads",children:"testOptions.acceptDownloads"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Whether to automatically download all the attachments, defaults to ",(0,s.jsx)(t.code,{children:"true"}),". ",(0,s.jsx)(t.a,{href:"/docs/next/downloads",children:"Learn more"})," about working with downloads."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-extra-http-headers",children:"testOptions.extraHTTPHeaders"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"An object containing additional HTTP headers to be sent with every request. All header values must be strings."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-http-credentials",children:"testOptions.httpCredentials"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Credentials for ",(0,s.jsx)(t.a,{href:"/docs/next/network#http-authentication",children:"HTTP authentication"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-ignore-https-errors",children:"testOptions.ignoreHTTPSErrors"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Whether to ignore HTTPS errors during navigation."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-offline",children:"testOptions.offline"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Whether to emulate network being offline."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-proxy",children:"testOptions.proxy"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.a,{href:"/docs/next/network#http-proxy",children:"Proxy settings"})," used for all pages in the test."]})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["You don't have to configure anything to mock network requests. Just define a custom ",(0,s.jsx)(t.a,{href:"/docs/next/api/class-route",title:"Route",children:"Route"})," that mocks the network for a browser context. See our ",(0,s.jsx)(t.a,{href:"/docs/next/network",children:"network mocking guide"})," to learn more."]})}),"\n",(0,s.jsx)(t.h3,{id:"recording-options",children:"Recording Options"}),"\n",(0,s.jsxs)(t.p,{children:["With Playwright you can capture screenshots, record videos as well as traces of your test. By default these are turned off but you can enable them by setting the ",(0,s.jsx)(t.code,{children:"screenshot"}),", ",(0,s.jsx)(t.code,{children:"video"})," and ",(0,s.jsx)(t.code,{children:"trace"})," options in your ",(0,s.jsx)(t.code,{children:"playwright.config.js"})," file."]}),"\n",(0,s.jsxs)(t.p,{children:["Trace files, screenshots and videos will appear in the test output directory, typically ",(0,s.jsx)(t.code,{children:"test-results"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  use: {\n    // Capture screenshot after each test failure.\n    screenshot: 'only-on-failure',\n\n    // Record trace only when retrying a test for the first time.\n    trace: 'on-first-retry',\n\n    // Record video only when retrying a test for the first time.\n    video: 'on-first-retry'\n  },\n});\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Option"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-screenshot",children:"testOptions.screenshot"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Capture ",(0,s.jsx)(t.a,{href:"/docs/next/screenshots",children:"screenshots"})," of your test. Options include ",(0,s.jsx)(t.code,{children:"'off'"}),", ",(0,s.jsx)(t.code,{children:"'on'"})," and ",(0,s.jsx)(t.code,{children:"'only-on-failure'"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-trace",children:"testOptions.trace"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Playwright can produce test traces while running the tests. Later on, you can view the trace and get detailed information about Playwright execution by opening ",(0,s.jsx)(t.a,{href:"/docs/next/trace-viewer",children:"Trace Viewer"}),". Options include: ",(0,s.jsx)(t.code,{children:"'off'"}),", ",(0,s.jsx)(t.code,{children:"'on'"}),", ",(0,s.jsx)(t.code,{children:"'retain-on-failure'"})," and ",(0,s.jsx)(t.code,{children:"'on-first-retry'"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-video",children:"testOptions.video"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Playwright can record ",(0,s.jsx)(t.a,{href:"/docs/next/videos",children:"videos"})," for your tests. Options include: ",(0,s.jsx)(t.code,{children:"'off'"}),", ",(0,s.jsx)(t.code,{children:"'on'"}),", ",(0,s.jsx)(t.code,{children:"'retain-on-failure'"})," and ",(0,s.jsx)(t.code,{children:"'on-first-retry'"})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"other-options",children:"Other Options"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  use: {\n    // Maximum time each action such as `click()` can take. Defaults to 0 (no limit).\n    actionTimeout: 0,\n\n    // Name of the browser that runs tests. For example `chromium`, `firefox`, `webkit`.\n    browserName: 'chromium',\n\n    // Toggles bypassing Content-Security-Policy.\n    bypassCSP: true,\n\n    // Channel to use, for example \"chrome\", \"chrome-beta\", \"msedge\", \"msedge-beta\".\n    channel: 'chrome',\n\n    // Run browser in headless mode.\n    headless: false,\n\n    // Change the default data-testid attribute.\n    testIdAttribute: 'pw-test-id',\n  },\n});\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Option"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-action-timeout",children:"testOptions.actionTimeout"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Timeout for each Playwright action in milliseconds. Defaults to ",(0,s.jsx)(t.code,{children:"0"})," (no timeout). Learn more about ",(0,s.jsx)(t.a,{href:"/docs/next/test-timeouts",children:"timeouts"})," and how to set them for a single test."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-browser-name",children:"testOptions.browserName"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Name of the browser that runs tests. Defaults to 'chromium'. Options include ",(0,s.jsx)(t.code,{children:"chromium"}),", ",(0,s.jsx)(t.code,{children:"firefox"}),", or ",(0,s.jsx)(t.code,{children:"webkit"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-bypass-csp",children:"testOptions.bypassCSP"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Toggles bypassing Content-Security-Policy. Useful when CSP includes the production origin. Defaults to ",(0,s.jsx)(t.code,{children:"false"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-channel",children:"testOptions.channel"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Browser channel to use. ",(0,s.jsx)(t.a,{href:"/docs/next/browsers",children:"Learn more"})," about different browsers and channels."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-headless",children:"testOptions.headless"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Whether to run the browser in headless mode meaning no browser is shown when running tests. Defaults to ",(0,s.jsx)(t.code,{children:"true"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-testoptions#test-options-test-id-attribute",children:"testOptions.testIdAttribute"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Changes the default ",(0,s.jsxs)(t.a,{href:"/docs/next/locators#locate-by-test-id",children:[(0,s.jsx)(t.code,{children:"data-testid"})," attribute"]})," used by Playwright locators."]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"more-browser-and-context-options",children:"More browser and context options"}),"\n",(0,s.jsxs)(t.p,{children:["Any options accepted by ",(0,s.jsx)(t.a,{href:"/docs/next/api/class-browsertype#browser-type-launch",children:"browserType.launch()"})," or ",(0,s.jsx)(t.a,{href:"/docs/next/api/class-browser#browser-new-context",children:"browser.newContext()"})," can be put into ",(0,s.jsx)(t.code,{children:"launchOptions"})," or ",(0,s.jsx)(t.code,{children:"contextOptions"})," respectively in the ",(0,s.jsx)(t.code,{children:"use"})," section."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  use: {\n    launchOptions: {\n      slowMo: 50,\n    },\n  },\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["However, most common ones like ",(0,s.jsx)(t.code,{children:"headless"})," or ",(0,s.jsx)(t.code,{children:"viewport"})," are available directly in the ",(0,s.jsx)(t.code,{children:"use"})," section - see ",(0,s.jsx)(t.a,{href:"#basic-options",children:"basic options"}),", ",(0,s.jsx)(t.a,{href:"#emulation-options",children:"emulation"})," or ",(0,s.jsx)(t.a,{href:"#network-options",children:"network"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"explicit-context-creation-and-option-inheritance",children:"Explicit Context Creation and Option Inheritance"}),"\n",(0,s.jsxs)(t.p,{children:["If using the built-in ",(0,s.jsx)(t.code,{children:"browser"})," fixture, calling ",(0,s.jsx)(t.a,{href:"/docs/next/api/class-browser#browser-new-context",children:"browser.newContext()"})," will create a context with options inherited from the config:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  use: {\n    userAgent: 'some custom ua',\n    viewport: { width: 100, height: 100 },\n  },\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"An example test illustrating the initial context options are set:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"test('should inherit use options on context when using built-in browser fixture', async ({\n  browser,\n}) => {\n  const context = await browser.newContext();\n  const page = await context.newPage();\n  expect(await page.evaluate(() => navigator.userAgent)).toBe('some custom ua');\n  expect(await page.evaluate(() => window.innerWidth)).toBe(100);\n  await context.close();\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"configuration-scopes",children:"Configuration Scopes"}),"\n",(0,s.jsxs)(t.p,{children:["You can configure Playwright globally, per project, or per test. For example, you can set the locale to be used globally by adding ",(0,s.jsx)(t.code,{children:"locale"})," to the ",(0,s.jsx)(t.code,{children:"use"})," option of the Playwright config, and then override it for a specific project using the ",(0,s.jsx)(t.code,{children:"project"})," option in the config. You can also override it for a specific test by adding ",(0,s.jsx)(t.code,{children:"test.use({})"})," in the test file and passing in the options."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  use: {\n    locale: 'en-GB'\n  },\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can override options for a specific project using the ",(0,s.jsx)(t.code,{children:"project"})," option in the Playwright config."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { defineConfig, devices } from '@playwright/test';\n\nexport default defineConfig({\n  projects: [\n    {\n      name: 'chromium',\n      use: {\n        ...devices['Desktop Chrome'],\n        locale: 'de-DE',\n      },\n    },\n  ],\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can override options for a specific test file by using the ",(0,s.jsx)(t.code,{children:"test.use()"})," method and passing in the options. For example to run tests with the French locale for a specific test:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { test, expect } from '@playwright/test';\n\ntest.use({ locale: 'fr-FR' });\n\ntest('example', async ({ page }) => {\n  // ...\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"The same works inside a describe block. For example to run tests in a describe block with the French locale:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { test, expect } from '@playwright/test';\n\ntest.describe('french language block', () => {\n\n  test.use({ locale: 'fr-FR' });\n\n  test('example', async ({ page }) => {\n    // ...\n  });\n});\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);