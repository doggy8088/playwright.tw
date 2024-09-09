"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9256],{9359:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var s=l(4848),n=l(8453);l(4235),l(8328),l(3078);const i={id:"actionability",title:"Auto-waiting"},c=void 0,r={id:"actionability",title:"Auto-waiting",description:"Introduction",source:"@site/docs/actionability.mdx",sourceDirName:".",slug:"/actionability",permalink:"/docs/next/actionability",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"actionability",title:"Auto-waiting"},sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/next/auth"},next:{title:"Best Practices",permalink:"/docs/next/best-practices"}},d={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Forcing actions",id:"forcing-actions",level:2},{value:"Assertions",id:"assertions",level:2},{value:"Visible",id:"visible",level:2},{value:"Stable",id:"stable",level:2},{value:"Enabled",id:"enabled",level:2},{value:"Editable",id:"editable",level:2},{value:"Receives Events",id:"receives-events",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given ",(0,s.jsx)(t.code,{children:"timeout"}),", action fails with the ",(0,s.jsx)(t.code,{children:"TimeoutError"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, for ",(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-click",children:"locator.click()"}),", Playwright will ensure that:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"locator resolves to exactly one element"}),"\n",(0,s.jsxs)(t.li,{children:["element is ",(0,s.jsx)(t.a,{href:"#visible",title:"Visible",children:"Visible"})]}),"\n",(0,s.jsxs)(t.li,{children:["element is ",(0,s.jsx)(t.a,{href:"#stable",title:"Stable",children:"Stable"}),", as in not animating or completed animation"]}),"\n",(0,s.jsxs)(t.li,{children:["element ",(0,s.jsx)(t.a,{href:"#receives-events",title:"Receives Events",children:"Receives Events"}),", as in not obscured by other elements"]}),"\n",(0,s.jsxs)(t.li,{children:["element is ",(0,s.jsx)(t.a,{href:"#enabled",title:"Enabled",children:"Enabled"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Here is the complete list of actionability checks performed for each action:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Action"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"#visible",title:"Visible",children:"Visible"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"#stable",title:"Stable",children:"Stable"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"#receives-events",title:"Receives Events",children:"Receives Events"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"#enabled",title:"Enabled",children:"Enabled"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"#editable",title:"Editable",children:"Editable"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-check",children:"locator.check()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-click",children:"locator.click()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-dblclick",children:"locator.dblclick()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-set-checked",children:"locator.setChecked()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-tap",children:"locator.tap()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-uncheck",children:"locator.uncheck()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-hover",children:"locator.hover()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-drag-to",children:"locator.dragTo()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-screenshot",children:"locator.screenshot()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-fill",children:"locator.fill()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-clear",children:"locator.clear()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-select-option",children:"locator.selectOption()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-select-text",children:"locator.selectText()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-scroll-into-view-if-needed",children:"locator.scrollIntoViewIfNeeded()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Yes"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-blur",children:"locator.blur()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-dispatch-event",children:"locator.dispatchEvent()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-focus",children:"locator.focus()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-press",children:"locator.press()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-press-sequentially",children:"locator.pressSequentially()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-set-input-files",children:"locator.setInputFiles()"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"forcing-actions",children:"Forcing actions"}),"\n",(0,s.jsxs)(t.p,{children:["Some actions like ",(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-click",children:"locator.click()"})," support ",(0,s.jsx)(t.code,{children:"force"})," option that disables non-essential actionability checks, for example passing truthy ",(0,s.jsx)(t.code,{children:"force"})," to ",(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-click",children:"locator.click()"})," method will not check that the target element actually receives click events."]}),"\n",(0,s.jsx)(t.h2,{id:"assertions",children:"Assertions"}),"\n",(0,s.jsx)(t.p,{children:"Playwright includes auto-retrying assertions that remove flakiness by waiting until the condition is met, similarly to auto-waiting before actions."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Assertion"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-attached",children:"expect(locator).toBeAttached()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Element is attached"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-checked",children:"expect(locator).toBeChecked()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Checkbox is checked"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-disabled",children:"expect(locator).toBeDisabled()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Element is disabled"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-editable",children:"expect(locator).toBeEditable()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Element is editable"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-empty",children:"expect(locator).toBeEmpty()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Container is empty"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-enabled",children:"expect(locator).toBeEnabled()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Element is enabled"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-focused",children:"expect(locator).toBeFocused()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Element is focused"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-hidden",children:"expect(locator).toBeHidden()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Element is not visible"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-in-viewport",children:"expect(locator).toBeInViewport()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Element intersects viewport"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-visible",children:"expect(locator).toBeVisible()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Element is visible"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-contain-text",children:"expect(locator).toContainText()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Element contains text"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-attribute",children:"expect(locator).toHaveAttribute()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Element has a DOM attribute"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-class",children:"expect(locator).toHaveClass()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Element has a class property"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-count",children:"expect(locator).toHaveCount()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"List has exact number of children"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-css",children:"expect(locator).toHaveCSS()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Element has CSS property"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-id",children:"expect(locator).toHaveId()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Element has an ID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-js-property",children:"expect(locator).toHaveJSProperty()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Element has a JavaScript property"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-text",children:"expect(locator).toHaveText()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Element matches text"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-value",children:"expect(locator).toHaveValue()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Input has a value"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-values",children:"expect(locator).toHaveValues()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Select has options selected"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-pageassertions#page-assertions-to-have-title",children:"expect(page).toHaveTitle()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Page has a title"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-pageassertions#page-assertions-to-have-url",children:"expect(page).toHaveURL()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Page has a URL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/next/api/class-apiresponseassertions#api-response-assertions-to-be-ok",children:"expect(response).toBeOK()"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Response has an OK status"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Learn more in the ",(0,s.jsx)(t.a,{href:"/docs/next/test-assertions",children:"assertions guide"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"visible",children:"Visible"}),"\n",(0,s.jsxs)(t.p,{children:["Element is considered visible when it has non-empty bounding box and does not have ",(0,s.jsx)(t.code,{children:"visibility:hidden"})," computed style."]}),"\n",(0,s.jsx)(t.p,{children:"Note that according to this definition:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Elements of zero size ",(0,s.jsx)(t.strong,{children:"are not"})," considered visible."]}),"\n",(0,s.jsxs)(t.li,{children:["Elements with ",(0,s.jsx)(t.code,{children:"display:none"})," ",(0,s.jsx)(t.strong,{children:"are not"})," considered visible."]}),"\n",(0,s.jsxs)(t.li,{children:["Elements with ",(0,s.jsx)(t.code,{children:"opacity:0"})," ",(0,s.jsx)(t.strong,{children:"are"})," considered visible."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"stable",children:"Stable"}),"\n",(0,s.jsx)(t.p,{children:"Element is considered stable when it has maintained the same bounding box for at least two consecutive animation frames."}),"\n",(0,s.jsx)(t.h2,{id:"enabled",children:"Enabled"}),"\n",(0,s.jsxs)(t.p,{children:["Element is considered enabled unless it is a ",(0,s.jsx)(t.code,{children:"<button>"}),", ",(0,s.jsx)(t.code,{children:"<select>"}),", ",(0,s.jsx)(t.code,{children:"<input>"})," or ",(0,s.jsx)(t.code,{children:"<textarea>"})," with a ",(0,s.jsx)(t.code,{children:"disabled"})," property."]}),"\n",(0,s.jsx)(t.h2,{id:"editable",children:"Editable"}),"\n",(0,s.jsxs)(t.p,{children:["Element is considered editable when it is ",(0,s.jsx)(t.a,{href:"#enabled",title:"Enabled",children:"enabled"})," and does not have ",(0,s.jsx)(t.code,{children:"readonly"})," property set."]}),"\n",(0,s.jsx)(t.h2,{id:"receives-events",children:"Receives Events"}),"\n",(0,s.jsxs)(t.p,{children:["Element is considered receiving pointer events when it is the hit target of the pointer event at the action point. For example, when clicking at the point ",(0,s.jsx)(t.code,{children:"(10;10)"}),", Playwright checks whether some other element (usually an overlay) will instead capture the click at ",(0,s.jsx)(t.code,{children:"(10;10)"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, consider a scenario where Playwright will click ",(0,s.jsx)(t.code,{children:"Sign Up"})," button regardless of when the ",(0,s.jsx)(t.a,{href:"/docs/next/api/class-locator#locator-click",children:"locator.click()"})," call was made:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["page is checking that user name is unique and ",(0,s.jsx)(t.code,{children:"Sign Up"})," button is disabled;"]}),"\n",(0,s.jsxs)(t.li,{children:["after checking with the server, the disabled ",(0,s.jsx)(t.code,{children:"Sign Up"})," button is replaced with another one that is now enabled."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);