"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9719],{3876:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var n=i(4848),t=i(8453),a=i(4235),l=i(8328);i(3078);const o={id:"accessibility-testing",title:"Accessibility testing"},c=void 0,r={id:"accessibility-testing",title:"Accessibility testing",description:"Introduction",source:"@site/docs/accessibility-testing.mdx",sourceDirName:".",slug:"/accessibility-testing",permalink:"/docs/next/accessibility-testing",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"accessibility-testing",title:"Accessibility testing"},sidebar:"docs",previous:{title:"Library",permalink:"/docs/next/library"},next:{title:"Actions",permalink:"/docs/next/input"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Example accessibility tests",id:"example-accessibility-tests",level:2},{value:"Scanning an entire page",id:"scanning-an-entire-page",level:3},{value:"Configuring axe to scan a specific part of a page",id:"configuring-axe-to-scan-a-specific-part-of-a-page",level:3},{value:"Scanning for WCAG violations",id:"scanning-for-wcag-violations",level:3},{value:"Handling known issues",id:"handling-known-issues",level:2},{value:"Excluding individual elements from a scan",id:"excluding-individual-elements-from-a-scan",level:3},{value:"Disabling individual scan rules",id:"disabling-individual-scan-rules",level:3},{value:"Using snapshots to allow specific known issues",id:"using-snapshots-to-allow-specific-known-issues",level:3},{value:"Exporting scan results as a test attachment",id:"exporting-scan-results-as-a-test-attachment",level:2},{value:"Using a test fixture for common axe configuration",id:"using-a-test-fixture-for-common-axe-configuration",level:2},{value:"Creating a fixture",id:"creating-a-fixture",level:3},{value:"Using a fixture",id:"using-a-fixture",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(s.p,{children:"Playwright can be used to test your application for many types of accessibility issues."}),"\n",(0,n.jsx)(s.p,{children:"A few examples of problems this can catch include:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Text that would be hard to read for users with vision impairments due to poor color contrast with the background behind it"}),"\n",(0,n.jsx)(s.li,{children:"UI controls and form elements without labels that a screen reader could identify"}),"\n",(0,n.jsx)(s.li,{children:"Interactive elements with duplicate IDs which can confuse assistive technologies"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The following examples rely on the ",(0,n.jsx)(s.a,{href:"https://npmjs.org/@axe-core/playwright",children:(0,n.jsx)(s.code,{children:"@axe-core/playwright"})})," package which adds support for running the ",(0,n.jsx)(s.a,{href:"https://www.deque.com/axe/",children:"axe accessibility testing engine"})," as part of your Playwright tests."]}),"\n",(0,n.jsx)(s.admonition,{title:"Disclaimer",type:"note",children:(0,n.jsxs)(s.p,{children:["Automated accessibility tests can detect some common accessibility problems such as missing or invalid properties. But many accessibility problems can only be discovered through manual testing. We recommend using a combination of automated testing, manual accessibility assessments, and inclusive user testing.  For manual assessments, we recommend ",(0,n.jsx)(s.a,{href:"https://accessibilityinsights.io/docs/web/overview/?referrer=playwright-accessibility-testing-js",children:"Accessibility Insights for Web"}),", a free and open source dev tool that walks you through assessing a website for ",(0,n.jsx)(s.a,{href:"https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&levels=aaa",children:"WCAG 2.1 AA"})," coverage."]})}),"\n",(0,n.jsx)(s.h2,{id:"example-accessibility-tests",children:"Example accessibility tests"}),"\n",(0,n.jsx)(s.p,{children:"Accessibility tests work just like any other Playwright test. You can either create separate test cases for them, or integrate accessibility scans and assertions into your existing test cases."}),"\n",(0,n.jsx)(s.p,{children:"The following examples demonstrate a few basic accessibility testing scenarios."}),"\n",(0,n.jsx)(s.h3,{id:"scanning-an-entire-page",children:"Scanning an entire page"}),"\n",(0,n.jsx)(s.p,{children:"This example demonstrates how to test an entire page for automatically detectable accessibility violations. The test:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Imports the ",(0,n.jsx)(s.code,{children:"@axe-core/playwright"})," package"]}),"\n",(0,n.jsx)(s.li,{children:"Uses normal Playwright Test syntax to define a test case"}),"\n",(0,n.jsx)(s.li,{children:"Uses normal Playwright syntax to navigate to the page under test"}),"\n",(0,n.jsxs)(s.li,{children:["Awaits ",(0,n.jsx)(s.code,{children:"AxeBuilder.analyze()"})," to run the accessibility scan against the page"]}),"\n",(0,n.jsxs)(s.li,{children:["Uses normal Playwright Test ",(0,n.jsx)(s.a,{href:"./test-assertions",children:"assertions"})," to verify that there are no violations in the returned scan results"]}),"\n"]}),"\n",(0,n.jsxs)(a.A,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],children:[(0,n.jsx)(l.A,{value:"ts",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"import { test, expect } from '@playwright/test';\nimport AxeBuilder from '@axe-core/playwright'; // 1\n\ntest.describe('homepage', () => { // 2\n  test('should not have any automatically detectable accessibility issues', async ({ page }) => {\n    await page.goto('https://your-site.com/'); // 3\n\n    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4\n\n    expect(accessibilityScanResults.violations).toEqual([]); // 5\n  });\n});\n"})})}),(0,n.jsx)(l.A,{value:"js",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"const { test, expect } = require('@playwright/test');\nconst AxeBuilder = require('@axe-core/playwright').default; // 1\n\ntest.describe('homepage', () => { // 2\n  test('should not have any automatically detectable accessibility issues', async ({ page }) => {\n    await page.goto('https://your-site.com/'); // 3\n\n    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4\n\n    expect(accessibilityScanResults.violations).toEqual([]); // 5\n  });\n});\n"})})})]}),"\n",(0,n.jsx)(s.h3,{id:"configuring-axe-to-scan-a-specific-part-of-a-page",children:"Configuring axe to scan a specific part of a page"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"@axe-core/playwright"})," supports many configuration options for axe. You can specify these options by using a Builder pattern with the ",(0,n.jsx)(s.code,{children:"AxeBuilder"})," class."]}),"\n",(0,n.jsxs)(s.p,{children:["For example, you can use ",(0,n.jsx)(s.a,{href:"https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md#axebuilderincludeselector-string--string",children:(0,n.jsx)(s.code,{children:"AxeBuilder.include()"})})," to constrain an accessibility scan to only run against one specific part of a page."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"AxeBuilder.analyze()"})," will scan the page ",(0,n.jsx)(s.em,{children:"in its current state"})," when you call it. To scan parts of a page that are revealed based on UI interactions, use ",(0,n.jsx)(s.a,{href:"/docs/next/locators",children:"Locators"})," to interact with the page before invoking ",(0,n.jsx)(s.code,{children:"analyze()"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"test('navigation menu should not have automatically detectable accessibility violations', async ({\n  page,\n}) => {\n  await page.goto('https://your-site.com/');\n\n  await page.getByRole('button', { name: 'Navigation Menu' }).click();\n\n  // It is important to waitFor() the page to be in the desired\n  // state *before* running analyze(). Otherwise, axe might not\n  // find all the elements your test expects it to scan.\n  await page.locator('#navigation-menu-flyout').waitFor();\n\n  const accessibilityScanResults = await new AxeBuilder({ page })\n      .include('#navigation-menu-flyout')\n      .analyze();\n\n  expect(accessibilityScanResults.violations).toEqual([]);\n});\n"})}),"\n",(0,n.jsx)(s.h3,{id:"scanning-for-wcag-violations",children:"Scanning for WCAG violations"}),"\n",(0,n.jsxs)(s.p,{children:["By default, axe checks against a wide variety of accessibility rules. Some of these rules correspond to specific success criteria from the ",(0,n.jsx)(s.a,{href:"https://www.w3.org/TR/WCAG21/",children:"Web Content Accessibility Guidelines (WCAG)"}),', and others are "best practice" rules that are not specifically required by any WCAG criterion.']}),"\n",(0,n.jsxs)(s.p,{children:['You can constrain an accessibility scan to only run those rules which are "tagged" as corresponding to specific WCAG success criteria by using ',(0,n.jsx)(s.a,{href:"https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md#axebuilderwithtagstags-stringarray",children:(0,n.jsx)(s.code,{children:"AxeBuilder.withTags()"})}),". For example, ",(0,n.jsx)(s.a,{href:"https://accessibilityinsights.io/docs/web/getstarted/fastpass/?referrer=playwright-accessibility-testing-js",children:"Accessibility Insights for Web's Automated Checks"})," only include axe rules that test for violations of WCAG A and AA success criteria; to match that behavior, you would use the tags ",(0,n.jsx)(s.code,{children:"wcag2a"}),", ",(0,n.jsx)(s.code,{children:"wcag2aa"}),", ",(0,n.jsx)(s.code,{children:"wcag21a"}),", and ",(0,n.jsx)(s.code,{children:"wcag21aa"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Note that automated testing cannot detect all types of WCAG violations."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {\n  await page.goto('https://your-site.com/');\n\n  const accessibilityScanResults = await new AxeBuilder({ page })\n      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])\n      .analyze();\n\n  expect(accessibilityScanResults.violations).toEqual([]);\n});\n"})}),"\n",(0,n.jsxs)(s.p,{children:["You can find a complete listing of the rule tags axe-core supports in ",(0,n.jsx)(s.a,{href:"https://www.deque.com/axe/core-documentation/api-documentation/#axe-core-tags",children:'the "Axe-core Tags" section of the axe API documentation'}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"handling-known-issues",children:"Handling known issues"}),"\n",(0,n.jsx)(s.p,{children:'A common question when adding accessibility tests to an application is "how do I suppress known violations?" The following examples demonstrate a few techniques you can use.'}),"\n",(0,n.jsx)(s.h3,{id:"excluding-individual-elements-from-a-scan",children:"Excluding individual elements from a scan"}),"\n",(0,n.jsxs)(s.p,{children:["If your application contains a few specific elements with known issues, you can use ",(0,n.jsx)(s.a,{href:"https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md#axebuilderexcludeselector-string--string",children:(0,n.jsx)(s.code,{children:"AxeBuilder.exclude()"})})," to exclude them from being scanned until you're able to fix the issues."]}),"\n",(0,n.jsx)(s.p,{children:"This is usually the simplest option, but it has some important downsides:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"exclude()"})," will exclude the specified elements ",(0,n.jsx)(s.em,{children:"and all of their descendants"}),". Avoid using it with components that contain many children."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"exclude()"})," will prevent ",(0,n.jsx)(s.em,{children:"all"})," rules from running against the specified elements, not just the rules corresponding to known issues."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Here is an example of excluding one element from being scanned in one specific test:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"test('should not have any accessibility violations outside of elements with known issues', async ({\n  page,\n}) => {\n  await page.goto('https://your-site.com/page-with-known-issues');\n\n  const accessibilityScanResults = await new AxeBuilder({ page })\n      .exclude('#element-with-known-issue')\n      .analyze();\n\n  expect(accessibilityScanResults.violations).toEqual([]);\n});\n"})}),"\n",(0,n.jsxs)(s.p,{children:["If the element in question is used repeatedly in many pages, consider ",(0,n.jsx)(s.a,{href:"#using-a-test-fixture-for-common-axe-configuration",children:"using a test fixture"})," to reuse the same ",(0,n.jsx)(s.code,{children:"AxeBuilder"})," configuration across multiple tests."]}),"\n",(0,n.jsx)(s.h3,{id:"disabling-individual-scan-rules",children:"Disabling individual scan rules"}),"\n",(0,n.jsxs)(s.p,{children:["If your application contains many different preexisting violations of a specific rule, you can use ",(0,n.jsx)(s.a,{href:"https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md#axebuilderdisablerulesrules-stringarray",children:(0,n.jsx)(s.code,{children:"AxeBuilder.disableRules()"})})," to temporarily disable individual rules until you're able to fix the issues."]}),"\n",(0,n.jsxs)(s.p,{children:["You can find the rule IDs to pass to ",(0,n.jsx)(s.code,{children:"disableRules()"})," in the ",(0,n.jsx)(s.code,{children:"id"})," property of the violations you want to suppress. A ",(0,n.jsx)(s.a,{href:"https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md",children:"complete list of axe's rules"})," can be found in ",(0,n.jsx)(s.code,{children:"axe-core"}),"'s documentation."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"test('should not have any accessibility violations outside of rules with known issues', async ({\n  page,\n}) => {\n  await page.goto('https://your-site.com/page-with-known-issues');\n\n  const accessibilityScanResults = await new AxeBuilder({ page })\n      .disableRules(['duplicate-id'])\n      .analyze();\n\n  expect(accessibilityScanResults.violations).toEqual([]);\n});\n"})}),"\n",(0,n.jsx)(s.h3,{id:"using-snapshots-to-allow-specific-known-issues",children:"Using snapshots to allow specific known issues"}),"\n",(0,n.jsxs)(s.p,{children:["If you would like to allow for a more granular set of known issues, you can use ",(0,n.jsx)(s.a,{href:"/docs/next/test-snapshots",children:"Snapshots"})," to verify that a set of preexisting violations has not changed. This approach avoids the downsides of using ",(0,n.jsx)(s.code,{children:"AxeBuilder.exclude()"})," at the cost of slightly more complexity and fragility."]}),"\n",(0,n.jsxs)(s.p,{children:["Do not use a snapshot of the entire ",(0,n.jsx)(s.code,{children:"accessibilityScanResults.violations"})," array. It contains implementation details of the elements in question, such as a snippet of their rendered HTML; if you include these in your snapshots, it will make your tests prone to breaking every time one of the components in question changes for an unrelated reason:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"// Don't do this! This is fragile.\nexpect(accessibilityScanResults.violations).toMatchSnapshot();\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Instead, create a ",(0,n.jsx)(s.em,{children:"fingerprint"})," of the violation(s) in question that contains only enough information to uniquely identify the issue, and use a snapshot of the fingerprint:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"// This is less fragile than snapshotting the entire violations array.\nexpect(violationFingerprints(accessibilityScanResults)).toMatchSnapshot();\n\n// my-test-utils.js\nfunction violationFingerprints(accessibilityScanResults) {\n  const violationFingerprints = accessibilityScanResults.violations.map(violation => ({\n    rule: violation.id,\n    // These are CSS selectors which uniquely identify each element with\n    // a violation of the rule in question.\n    targets: violation.nodes.map(node => node.target),\n  }));\n\n  return JSON.stringify(violationFingerprints, null, 2);\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"exporting-scan-results-as-a-test-attachment",children:"Exporting scan results as a test attachment"}),"\n",(0,n.jsxs)(s.p,{children:["Most accessibility tests are primarily concerned with the ",(0,n.jsx)(s.code,{children:"violations"})," property of the axe scan results. However, the scan results contain more than just ",(0,n.jsx)(s.code,{children:"violations"}),". For example, the results also contain information about rules which passed and about elements which axe found to have inconclusive results for some rules. This information can be useful for debugging tests that aren't detecting all the violations you expect them to."]}),"\n",(0,n.jsxs)(s.p,{children:["To include ",(0,n.jsx)(s.em,{children:"all"})," of the scan results as part of your test results for debugging purposes, you can add the scan results as a test attachment with ",(0,n.jsx)(s.a,{href:"./api/class-testinfo#test-info-attach",children:(0,n.jsx)(s.code,{children:"testInfo.attach()"})}),". ",(0,n.jsx)(s.a,{href:"./test-reporters",children:"Reporters"})," can then embed or link the full results as part of your test output."]}),"\n",(0,n.jsx)(s.p,{children:"The following example demonstrates attaching scan results to a test:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"test('example with attachment', async ({ page }, testInfo) => {\n  await page.goto('https://your-site.com/');\n\n  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();\n\n  await testInfo.attach('accessibility-scan-results', {\n    body: JSON.stringify(accessibilityScanResults, null, 2),\n    contentType: 'application/json'\n  });\n\n  expect(accessibilityScanResults.violations).toEqual([]);\n});\n"})}),"\n",(0,n.jsx)(s.h2,{id:"using-a-test-fixture-for-common-axe-configuration",children:"Using a test fixture for common axe configuration"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"./test-fixtures",children:"Test fixtures"})," are a good way to share common ",(0,n.jsx)(s.code,{children:"AxeBuilder"})," configuration across many tests. Some scenarios where this might be useful include:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Using a common set of rules among all of your tests"}),"\n",(0,n.jsx)(s.li,{children:"Suppressing a known violation in a common element which appears in many different pages"}),"\n",(0,n.jsx)(s.li,{children:"Attaching standalone accessibility reports consistently for many scans"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The following example demonstrates creating and using a test fixture that covers each of those scenarios."}),"\n",(0,n.jsx)(s.h3,{id:"creating-a-fixture",children:"Creating a fixture"}),"\n",(0,n.jsxs)(s.p,{children:["This example fixture creates an ",(0,n.jsx)(s.code,{children:"AxeBuilder"})," object which is pre-configured with shared ",(0,n.jsx)(s.code,{children:"withTags()"})," and ",(0,n.jsx)(s.code,{children:"exclude()"})," configuration."]}),"\n",(0,n.jsxs)(a.A,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],children:[(0,n.jsx)(l.A,{value:"ts",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="axe-test.ts"',children:"import { test as base } from '@playwright/test';\nimport AxeBuilder from '@axe-core/playwright';\n\ntype AxeFixture = {\n  makeAxeBuilder: () => AxeBuilder;\n};\n\n// Extend base test by providing \"makeAxeBuilder\"\n//\n// This new \"test\" can be used in multiple test files, and each of them will get\n// a consistently configured AxeBuilder instance.\nexport const test = base.extend<AxeFixture>({\n  makeAxeBuilder: async ({ page }, use, testInfo) => {\n    const makeAxeBuilder = () => new AxeBuilder({ page })\n        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])\n        .exclude('#commonly-reused-element-with-known-issue');\n\n    await use(makeAxeBuilder);\n  }\n});\nexport { expect } from '@playwright/test';\n"})})}),(0,n.jsx)(l.A,{value:"js",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"// axe-test.js\nconst base = require('@playwright/test');\nconst AxeBuilder = require('@axe-core/playwright').default;\n\n// Extend base test by providing \"makeAxeBuilder\"\n//\n// This new \"test\" can be used in multiple test files, and each of them will get\n// a consistently configured AxeBuilder instance.\nexports.test = base.test.extend({\n  makeAxeBuilder: async ({ page }, use, testInfo) => {\n    const makeAxeBuilder = () => new AxeBuilder({ page })\n        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])\n        .exclude('#commonly-reused-element-with-known-issue');\n\n    await use(makeAxeBuilder);\n  }\n});\nexports.expect = base.expect;\n"})})})]}),"\n",(0,n.jsx)(s.h3,{id:"using-a-fixture",children:"Using a fixture"}),"\n",(0,n.jsxs)(s.p,{children:["To use the fixture, replace the earlier examples' ",(0,n.jsx)(s.code,{children:"new AxeBuilder({ page })"})," with the newly defined ",(0,n.jsx)(s.code,{children:"makeAxeBuilder"})," fixture:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"const { test, expect } = require('./axe-test');\n\ntest('example using custom fixture', async ({ page, makeAxeBuilder }) => {\n  await page.goto('https://your-site.com/');\n\n  const accessibilityScanResults = await makeAxeBuilder()\n      // Automatically uses the shared AxeBuilder configuration,\n      // but supports additional test-specific configuration too\n      .include('#specific-element-under-test')\n      .analyze();\n\n  expect(accessibilityScanResults.violations).toEqual([]);\n});\n"})})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);