"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1768],{7381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=n(4848),s=n(8453);n(4235),n(8328),n(3078);const i={id:"testing-library",title:"Migrating from Testing Library"},c=void 0,l={id:"testing-library",title:"Migrating from Testing Library",description:"Migration principles",source:"@site/docs/testing-library.mdx",sourceDirName:".",slug:"/testing-library",permalink:"/docs/next/testing-library",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"testing-library",title:"Migrating from Testing Library"},sidebar:"docs",previous:{title:"Migrating from Puppeteer",permalink:"/docs/next/puppeteer"},next:{title:"Docker",permalink:"/docs/next/docker"}},o={},a=[{value:"Migration principles",id:"migration-principles",level:2},{value:"Cheat Sheet",id:"cheat-sheet",level:2},{value:"Example",id:"example",level:2},{value:"Migrating queries",id:"migrating-queries",level:2},{value:"Replacing <code>waitFor</code>",id:"replacing-waitfor",level:2},{value:"Replacing <code>within</code>",id:"replacing-within",level:2},{value:"Playwright Test Super Powers",id:"playwright-test-super-powers",level:2},{value:"Further Reading",id:"further-reading",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"migration-principles",children:"Migration principles"}),"\n",(0,r.jsxs)(t.p,{children:["This guide describes migration to Playwright's ",(0,r.jsx)(t.a,{href:"./test-components",children:"Experimental Component Testing"})," from ",(0,r.jsx)(t.a,{href:"https://testing-library.com/docs/dom-testing-library/intro/",children:"DOM Testing Library"}),", ",(0,r.jsx)(t.a,{href:"https://testing-library.com/docs/react-testing-library/intro/",children:"React Testing Library"}),", ",(0,r.jsx)(t.a,{href:"https://testing-library.com/docs/vue-testing-library/intro",children:"Vue Testing Library"})," and ",(0,r.jsx)(t.a,{href:"https://testing-library.com/docs/svelte-testing-library/intro",children:"Svelte Testing Library"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If you use DOM Testing Library in the browser (for example, you bundle end-to-end tests with webpack), you can switch directly to Playwright Test. Examples below are focused on component tests, but for end-to-end test you just need to replace ",(0,r.jsx)(t.code,{children:"await mount"})," with ",(0,r.jsx)(t.code,{children:"await page.goto('http://localhost:3000/')"})," to open the page under test."]})}),"\n",(0,r.jsx)(t.h2,{id:"cheat-sheet",children:"Cheat Sheet"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Testing Library"}),(0,r.jsx)(t.th,{children:"Playwright"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://testing-library.com/docs/queries/about#screen",children:"screen"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"./api/class-page",children:"page"})," and ",(0,r.jsx)(t.a,{href:"./api/class-locator",children:"component"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://testing-library.com/docs/queries/about",children:"queries"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"./locators",children:"locators"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://testing-library.com/docs/dom-testing-library/api-async",children:"async helpers"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"./test-assertions",children:"assertions"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://testing-library.com/docs/user-event/intro",children:"user events"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"./api/class-locator",children:"actions"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await user.click(screen.getByText('Click me'))"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await component.getByText('Click me').click()"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await user.click(await screen.findByText('Click me'))"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await component.getByText('Click me').click()"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await user.type(screen.getByLabelText('Password'), 'secret')"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await component.getByLabel('Password').fill('secret')"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"expect(screen.getByLabelText('Password')).toHaveValue('secret')"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"await expect(component.getByLabel('Password')).toHaveValue('secret')"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"screen.getByRole('button', { pressed: true })"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"component.getByRole('button', { pressed: true })"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"screen.getByLabelText('...')"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"component.getByLabel('...')"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"screen.queryByPlaceholderText('...')"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"component.getByPlaceholder('...')"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"screen.findByText('...')"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"component.getByText('...')"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"screen.getByTestId('...')"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"component.getByTestId('...')"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"render(<Component />);"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"mount(<Component />);"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"const { unmount } = render(<Component />);"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"const { unmount } = await mount(<Component />);"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"const { rerender } = render(<Component />);"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"const { update } = await mount(<Component />);"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"Testing Library:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import React from 'react';\nimport { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\n\ntest('sign in', async () => {\n  // Setup the page.\n  const user = userEvent.setup();\n  render(<SignInPage />);\n\n  // Perform actions.\n  await user.type(screen.getByLabelText('Username'), 'John');\n  await user.type(screen.getByLabelText('Password'), 'secret');\n  await user.click(screen.getByRole('button', { name: 'Sign in' }));\n\n  // Verify signed in state by waiting until \"Welcome\" message appears.\n  expect(await screen.findByText('Welcome, John')).toBeInTheDocument();\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"Line-by-line migration to Playwright Test:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const { test, expect } = require('@playwright/experimental-ct-react'); // 1\n\ntest('sign in', async ({ mount }) => { // 2\n  // Setup the page.\n  const component = await mount(<SignInPage />); // 3\n\n  // Perform actions.\n  await component.getByLabel('Username').fill('John'); // 4\n  await component.getByLabel('Password').fill('secret');\n  await component.getByRole('button', { name: 'Sign in' }).click();\n\n  // Verify signed in state by waiting until \"Welcome\" message appears.\n  await expect(component.getByText('Welcome, John')).toBeVisible(); // 5\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"Migration highlights (see inline comments in the Playwright Test code snippet):"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Import everything from ",(0,r.jsx)(t.code,{children:"@playwright/experimental-ct-react"})," (or -vue, -svelte) for component tests, or from ",(0,r.jsx)(t.code,{children:"@playwright/test"})," for end-to-end tests."]}),"\n",(0,r.jsxs)(t.li,{children:["Test function is given a ",(0,r.jsx)(t.code,{children:"page"})," that is isolated from other tests, and ",(0,r.jsx)(t.code,{children:"mount"})," that renders a component in this page. These are two of the ",(0,r.jsx)(t.a,{href:"./api/class-fixtures",children:"useful fixtures"})," in Playwright Test."]}),"\n",(0,r.jsxs)(t.li,{children:["Replace ",(0,r.jsx)(t.code,{children:"render"})," with ",(0,r.jsx)(t.code,{children:"mount"})," that returns a ",(0,r.jsx)(t.a,{href:"./locators",children:"component locator"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Use locators created with ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-locator",children:"locator.locator()"})," or ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-page#page-locator",children:"page.locator()"})," to perform most of the actions."]}),"\n",(0,r.jsxs)(t.li,{children:["Use ",(0,r.jsx)(t.a,{href:"./test-assertions",children:"assertions"})," to verify the state."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"migrating-queries",children:"Migrating queries"}),"\n",(0,r.jsxs)(t.p,{children:["All queries like ",(0,r.jsx)(t.code,{children:"getBy..."}),", ",(0,r.jsx)(t.code,{children:"findBy..."}),", ",(0,r.jsx)(t.code,{children:"queryBy..."})," and their multi-element counterparts are replaced with ",(0,r.jsx)(t.code,{children:"component.getBy..."})," locators. Locators always auto-wait and retry when needed, so you don't have to worry about choosing the right method. When you want to do a ",(0,r.jsx)(t.a,{href:"./locators#lists",children:"list operation"}),", e.g. assert a list of texts, Playwright automatically performs multi-element operations."]}),"\n",(0,r.jsxs)(t.h2,{id:"replacing-waitfor",children:["Replacing ",(0,r.jsx)(t.code,{children:"waitFor"})]}),"\n",(0,r.jsxs)(t.p,{children:["Playwright includes ",(0,r.jsx)(t.a,{href:"./test-assertions",children:"assertions"})," that automatically wait for the condition, so you don't usually need an explicit ",(0,r.jsx)(t.code,{children:"waitFor"}),"/",(0,r.jsx)(t.code,{children:"waitForElementToBeRemoved"})," call."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"// Testing Library\nawait waitFor(() => {\n  expect(getByText('the lion king')).toBeInTheDocument();\n});\nawait waitForElementToBeRemoved(() => queryByText('the mummy'));\n\n// Playwright\nawait expect(page.getByText('the lion king')).toBeVisible();\nawait expect(page.getByText('the mummy')).toBeHidden();\n"})}),"\n",(0,r.jsxs)(t.p,{children:["When you cannot find a suitable assertion, use ",(0,r.jsx)(t.a,{href:"./test-assertions#expectpoll",children:(0,r.jsx)(t.code,{children:"expect.poll"})})," instead."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"await expect.poll(async () => {\n  const response = await page.request.get('https://api.example.com');\n  return response.status();\n}).toBe(200);\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"replacing-within",children:["Replacing ",(0,r.jsx)(t.code,{children:"within"})]}),"\n",(0,r.jsxs)(t.p,{children:["You can create a locator inside another locator with ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-locator",children:"locator.locator()"})," method."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"// Testing Library\nconst messages = document.getElementById('messages');\nconst helloMessage = within(messages).getByText('hello');\n\n// Playwright\nconst messages = component.getByTestId('messages');\nconst helloMessage = messages.getByText('hello');\n"})}),"\n",(0,r.jsx)(t.h2,{id:"playwright-test-super-powers",children:"Playwright Test Super Powers"}),"\n",(0,r.jsx)(t.p,{children:"Once you're on Playwright Test, you get a lot!"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Full zero-configuration TypeScript support"}),"\n",(0,r.jsxs)(t.li,{children:["Run tests across ",(0,r.jsx)(t.strong,{children:"all web engines"})," (Chrome, Firefox, Safari) on ",(0,r.jsx)(t.strong,{children:"any popular operating system"})," (Windows, macOS, Ubuntu)"]}),"\n",(0,r.jsxs)(t.li,{children:["Full support for multiple origins, ",(0,r.jsx)(t.a,{href:"./api/class-frame",children:"(i)frames"}),", ",(0,r.jsx)(t.a,{href:"./pages",children:"tabs and contexts"})]}),"\n",(0,r.jsx)(t.li,{children:"Run tests in isolation in parallel across multiple browsers"}),"\n",(0,r.jsxs)(t.li,{children:["Built-in test ",(0,r.jsx)(t.a,{href:"/docs/next/test-use-options#recording-options",children:"artifact collection"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"You also get all these \u2728 awesome tools \u2728 that come bundled with Playwright Test:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/next/getting-started-vscode",children:"Visual Studio Code integration"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/next/test-ui-mode",children:"UI mode"})," for debugging tests with a time travel experience complete with watch mode."]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/next/debug#playwright-inspector",children:"Playwright Inspector"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/next/codegen-intro",children:"Playwright Test Code generation"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/next/trace-viewer",children:"Playwright Tracing"})," for post-mortem debugging"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,r.jsx)(t.p,{children:"Learn more about Playwright Test runner:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./intro",children:"Getting Started"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./test-components",children:"Experimental Component Testing"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/next/locators",children:"Locators"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./test-assertions",children:"Assertions"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"./actionability",children:"Auto-waiting"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);