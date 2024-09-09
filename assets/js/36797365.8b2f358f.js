"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2409],{4761:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var r=s(4848),i=s(8453);s(4235),s(8328),s(3078);const n={id:"puppeteer",title:"Migrating from Puppeteer"},a=void 0,l={id:"puppeteer",title:"Migrating from Puppeteer",description:"Migration Principles",source:"@site/docs/puppeteer.mdx",sourceDirName:".",slug:"/puppeteer",permalink:"/docs/next/puppeteer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"puppeteer",title:"Migrating from Puppeteer"},sidebar:"docs",previous:{title:"Migrating from Protractor",permalink:"/docs/next/protractor"},next:{title:"Migrating from Testing Library",permalink:"/docs/next/testing-library"}},c={},o=[{value:"Migration Principles",id:"migration-principles",level:2},{value:"Cheat Sheet",id:"cheat-sheet",level:2},{value:"Examples",id:"examples",level:2},{value:"Automation example",id:"automation-example",level:3},{value:"Test example",id:"test-example",level:3},{value:"Testing",id:"testing",level:2},{value:"Playwright Test Super Powers",id:"playwright-test-super-powers",level:2},{value:"Further Reading",id:"further-reading",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"migration-principles",children:"Migration Principles"}),"\n",(0,r.jsxs)(t.p,{children:["This guide describes migration to ",(0,r.jsx)(t.a,{href:"./library",children:"Playwright Library"})," and ",(0,r.jsx)(t.a,{href:"/docs/next/intro",children:"Playwright Test"})," from Puppeteer. The APIs have similarities, but Playwright offers much more possibilities for web testing and cross-browser automation."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Most Puppeteer APIs can be used as is"}),"\n",(0,r.jsxs)(t.li,{children:["The use of ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-elementhandle",title:"ElementHandle",children:"ElementHandle"})," is discouraged, use ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-locator",title:"Locator",children:"Locator"})," objects and web-first assertions instead."]}),"\n",(0,r.jsx)(t.li,{children:"Playwright is cross-browser"}),"\n",(0,r.jsx)(t.li,{children:"You probably don't need explicit wait"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"cheat-sheet",children:"Cheat Sheet"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Puppeteer"}),(0,r.jsx)(t.th,{children:"Playwright Library"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await puppeteer.launch()"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await playwright.chromium.launch()"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"puppeteer.launch({product: 'firefox'})"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await playwright.firefox.launch()"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"WebKit is not supported by Puppeteer"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await playwright.webkit.launch()"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await browser.createIncognitoBrowserContext(...)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await browser.newContext(...)"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.setViewport(...)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.setViewportSize(...)"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.waitForXPath(XPathSelector)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.waitForSelector(XPathSelector)"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.waitForNetworkIdle(...)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.waitForLoadState('networkidle')"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.$eval(...)"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"./test-assertions",children:"Assertions"})," can often be used instead to verify text, attribute, class..."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.$(...)"})}),(0,r.jsxs)(t.td,{children:["Discouraged, use ",(0,r.jsx)(t.a,{href:"./api/class-locator",children:"Locators"})," instead"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.$x(xpath_selector)"})}),(0,r.jsxs)(t.td,{children:["Discouraged, use ",(0,r.jsx)(t.a,{href:"./api/class-locator",children:"Locators"})," instead"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"No methods dedicated to checkbox or radio input"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"await page.locator(selector).check()"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"await page.locator(selector).uncheck()"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.click(selector)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.locator(selector).click()"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.focus(selector)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.locator(selector).focus()"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.hover(selector)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.locator(selector).hover()"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.select(selector, values)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.locator(selector).selectOption(values)"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.tap(selector)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.locator(selector).tap()"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.type(selector, ...)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.locator(selector).fill(...)"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"await page.waitForFileChooser(...)"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"await elementHandle.uploadFile(...)"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.locator(selector).setInputFiles(...)"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.cookies([...urls])"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await browserContext.cookies([urls])"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.deleteCookie(...cookies)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await browserContext.clearCookies()"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await page.setCookie(...cookies)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await browserContext.addCookies(cookies)"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"page.on(...)"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"page.on(...)"}),(0,r.jsx)("br",{}),"In order to intercept and mutate requests, see ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-page#page-route",children:"page.route()"})]})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"page.waitForNavigation"})," and ",(0,r.jsx)(t.code,{children:"page.waitForSelector"})," remain, but in many cases will not be necessary due to ",(0,r.jsx)(t.a,{href:"./actionability",children:"auto-waiting"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The use of ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-elementhandle",title:"ElementHandle",children:"ElementHandle"})," is discouraged, use ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-locator",title:"Locator",children:"Locator"})," objects and web-first assertions instead."]}),"\n",(0,r.jsx)(t.p,{children:"Locators are the central piece of Playwright's auto-waiting and retry-ability. Locators are strict. This means that all operations on locators that imply some target DOM element will throw an exception if more than one element matches a given selector."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.h3,{id:"automation-example",children:"Automation example"}),"\n",(0,r.jsx)(t.p,{children:"Puppeteer:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.setViewport({ width: 1280, height: 800 });\n  await page.goto('https://playwright.dev/', {\n    waitUntil: 'networkidle2',\n  });\n  await page.screenshot({ path: 'example.png' });\n  await browser.close();\n})();\n"})}),"\n",(0,r.jsx)(t.p,{children:"Line-by-line migration to Playwright:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const { chromium } = require('playwright'); // 1\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage(); // 2\n  await page.setViewportSize({ width: 1280, height: 800 }); // 3\n  await page.goto('https://playwright.dev/', {\n    waitUntil: 'networkidle', // 4\n  });\n  await page.screenshot({ path: 'example.png' });\n  await browser.close();\n})();\n"})}),"\n",(0,r.jsx)(t.p,{children:"Migration highlights (see inline comments in the Playwright code snippet):"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Each Playwright Library file has explicit import of ",(0,r.jsx)(t.code,{children:"chromium"}),". Other browsers ",(0,r.jsx)(t.code,{children:"webkit"})," or ",(0,r.jsx)(t.code,{children:"firefox"})," can be used."]}),"\n",(0,r.jsxs)(t.li,{children:["For browser state isolation, consider ",(0,r.jsx)(t.a,{href:"/docs/next/browser-contexts",children:"browser contexts"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"setViewport"})," becomes ",(0,r.jsx)(t.code,{children:"setViewportSize"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"networkidle2"})," becomes ",(0,r.jsx)(t.code,{children:"networkidle"}),". Please note that in most cases it is not useful, thanks to auto-waiting."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"test-example",children:"Test example"}),"\n",(0,r.jsx)(t.p,{children:"Puppeteer with Jest:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import puppeteer from 'puppeteer';\n\ndescribe('Playwright homepage', () => {\n  let browser;\n  let page;\n\n  beforeAll(async () => {\n    browser = await puppeteer.launch();\n    page = await browser.newPage();\n  });\n\n  it('contains hero title', async () => {\n    await page.goto('https://playwright.dev/');\n    await page.waitForSelector('.hero__title');\n    const text = await page.$eval('.hero__title', e => e.textContent);\n    expect(text).toContain('Playwright enables reliable end-to-end testing'); // 5\n  });\n\n  afterAll(() => browser.close());\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"Line-by-line migration to Playwright Test:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { test, expect } from '@playwright/test'; // 1\n\ntest.describe('Playwright homepage', () => {\n  test('contains hero title', async ({ page }) => { // 2, 3\n    await page.goto('https://playwright.dev/');\n    const titleLocator = page.locator('.hero__title'); // 4\n    await expect(titleLocator).toContainText( // 5\n        'Playwright enables reliable end-to-end testing'\n    );\n  });\n});\n"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Each Playwright Test file has explicit import of the ",(0,r.jsx)(t.code,{children:"test"})," and ",(0,r.jsx)(t.code,{children:"expect"})," functions"]}),"\n",(0,r.jsxs)(t.li,{children:["Test function is marked with ",(0,r.jsx)(t.code,{children:"async"})]}),"\n",(0,r.jsxs)(t.li,{children:["Playwright Test is given a ",(0,r.jsx)(t.code,{children:"page"})," as one of its parameters. This is one of the many ",(0,r.jsx)(t.a,{href:"./api/class-fixtures",children:"useful fixtures"})," in Playwright Test. Playwright Test creates an isolated ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-page",title:"Page",children:"Page"})," object for each test. However, if you'd like to reuse a single ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-page",title:"Page",children:"Page"})," object between multiple tests, you can create your own in ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-test#test-before-all",children:"test.beforeAll()"})," and close it in ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-test#test-after-all",children:"test.afterAll()"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Locator creation with ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-page#page-locator",children:"page.locator()"})," is one of the few methods that is sync."]}),"\n",(0,r.jsxs)(t.li,{children:["Use ",(0,r.jsx)(t.a,{href:"./test-assertions",children:"assertions"})," to verify the state instead of ",(0,r.jsx)(t.code,{children:"page.$eval()"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"testing",children:"Testing"}),"\n",(0,r.jsxs)(t.p,{children:["To improve testing, it is advised to use ",(0,r.jsx)(t.a,{href:"./api/class-locator",children:"Locators"})," and web-first ",(0,r.jsx)(t.a,{href:"./test-assertions",children:"Assertions"}),". See ",(0,r.jsx)(t.a,{href:"./writing-tests",children:"Writing Tests"})]}),"\n",(0,r.jsxs)(t.p,{children:["It is common with Puppeteer to use ",(0,r.jsx)(t.code,{children:"page.evaluate()"})," or ",(0,r.jsx)(t.code,{children:"page.$eval()"})," to inspect an ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-elementhandle",title:"ElementHandle",children:"ElementHandle"})," and extract the value of text content, attribute, class... Web-first ",(0,r.jsx)(t.a,{href:"./test-assertions",children:"Assertions"})," offers several matchers for this purpose, it is more reliable and readable."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/intro",children:"Playwright Test"})," is our first-party recommended test runner to be used with Playwright. It provides several features like Page Object Model, parallelism, fixtures or reporters."]}),"\n",(0,r.jsx)(t.h2,{id:"playwright-test-super-powers",children:"Playwright Test Super Powers"}),"\n",(0,r.jsx)(t.p,{children:"Once you're on Playwright Test, you get a lot!"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Full zero-configuration TypeScript support"}),"\n",(0,r.jsxs)(t.li,{children:["Run tests across ",(0,r.jsx)(t.strong,{children:"all web engines"})," (Chrome, Firefox, Safari) on ",(0,r.jsx)(t.strong,{children:"any popular operating system"})," (Windows, macOS, Ubuntu)"]}),"\n",(0,r.jsxs)(t.li,{children:["Full support for multiple origins, ",(0,r.jsx)(t.a,{href:"./api/class-frame",children:"(i)frames"}),", ",(0,r.jsx)(t.a,{href:"./pages",children:"tabs and contexts"})]}),"\n",(0,r.jsx)(t.li,{children:"Run tests in isolation in parallel across multiple browsers"}),"\n",(0,r.jsxs)(t.li,{children:["Built-in test ",(0,r.jsx)(t.a,{href:"/docs/next/test-use-options#recording-options",children:"artifact collection"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"You also get all these \u2728 awesome tools \u2728 that come bundled with Playwright Test:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/next/debug",children:"Playwright Inspector"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/next/codegen-intro",children:"Playwright Test Code generation"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/next/trace-viewer",children:"Playwright Tracing"})," for post-mortem debugging"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,r.jsx)(t.p,{children:"Learn more about Playwright Test runner:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./intro",children:"Getting Started"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./test-fixtures",children:"Fixtures"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/next/locators",children:"Locators"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./test-assertions",children:"Assertions"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./actionability",children:"Auto-waiting"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);