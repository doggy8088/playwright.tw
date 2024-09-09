"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6251],{7029:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var n=i(4848),t=i(8453);i(4235),i(8328),i(3078);const r={id:"class-accessibility",title:"Accessibility"},l=void 0,c={id:"api/class-accessibility",title:"Accessibility",description:"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as screen readers or switches.",source:"@site/docs/api/class-accessibility.mdx",sourceDirName:"api",slug:"/api/class-accessibility",permalink:"/docs/next/api/class-accessibility",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-accessibility",title:"Accessibility"},sidebar:"api",previous:{title:"APIResponse",permalink:"/docs/next/api/class-apiresponse"},next:{title:"Browser",permalink:"/docs/next/api/class-browser"}},a={},o=[{value:"Deprecated",id:"deprecated",level:2},{value:"snapshot",id:"accessibility-snapshot",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as ",(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Screen_reader",children:"screen readers"})," or ",(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Switch_access",children:"switches"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Accessibility is a very platform-specific thing. On different platforms, there are different screen readers that might have wildly different output."}),"\n",(0,n.jsx)(s.p,{children:'Rendering engines of Chromium, Firefox and WebKit have a concept of "accessibility tree", which is then translated into different platform-specific APIs. Accessibility namespace gives access to this Accessibility Tree.'}),"\n",(0,n.jsx)(s.p,{children:'Most of the accessibility tree gets filtered out when converting from internal browser AX Tree to Platform-specific AX-Tree or by assistive technologies themselves. By default, Playwright tries to approximate this filtering, exposing only the "interesting" nodes of the tree.'}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"deprecated",children:"Deprecated"}),"\n",(0,n.jsx)(s.h3,{id:"accessibility-snapshot",children:"snapshot"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,n.jsx)("x-search",{children:"accessibility.snapshot"}),"\n",(0,n.jsx)(s.admonition,{title:"Deprecated",type:"warning",children:(0,n.jsxs)(s.p,{children:["This method is deprecated. Please use other libraries such as ",(0,n.jsx)(s.a,{href:"https://www.deque.com/axe/",children:"Axe"})," if you need to test page accessibility. See our Node.js ",(0,n.jsx)(s.a,{href:"https://playwright.dev/docs/accessibility-testing",children:"guide"})," for integration with Axe."]})}),"\n",(0,n.jsx)(s.p,{children:"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page."}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["The Chromium accessibility tree contains nodes that go unused on most platforms and by most screen readers. Playwright will discard them as well for an easier to process tree, unless ",(0,n.jsx)(s.code,{children:"interestingOnly"})," is set to ",(0,n.jsx)(s.code,{children:"false"}),"."]})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.p,{children:"An example of dumping the entire accessibility tree:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"const snapshot = await page.accessibility.snapshot();\nconsole.log(snapshot);\n"})}),"\n",(0,n.jsx)(s.p,{children:"An example of logging the focused node's name:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"const snapshot = await page.accessibility.snapshot();\nconst node = findFocusedNode(snapshot);\nconsole.log(node && node.name);\n\nfunction findFocusedNode(node) {\n  if (node.focused)\n    return node;\n  for (const child of node.children || []) {\n    const foundNode = findFocusedNode(child);\n    if (foundNode)\n      return foundNode;\n  }\n  return null;\n}\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"options"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"})," ",(0,n.jsx)(s.em,{children:"(optional)"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"interestingOnly"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"})," ",(0,n.jsx)(s.em,{children:"(optional)"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"accessibility-snapshot-option-interesting-only"}),(0,n.jsx)("a",{href:"#accessibility-snapshot-option-interesting-only",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["Prune uninteresting nodes from the tree. Defaults to ",(0,n.jsx)(s.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"root"})," ",(0,n.jsx)(s.a,{href:"/docs/next/api/class-elementhandle",title:"ElementHandle",children:"ElementHandle"})," ",(0,n.jsx)(s.em,{children:"(optional)"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"accessibility-snapshot-option-root"}),(0,n.jsx)("a",{href:"#accessibility-snapshot-option-root",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"The root DOM element for the snapshot. Defaults to the whole page."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise",children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null",children:"null"})," | ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"}),">",(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"accessibility-snapshot-return"}),(0,n.jsx)("a",{href:"#accessibility-snapshot-return",class:"list-anchor",children:"#"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"role"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.a,{href:"https://www.w3.org/TR/wai-aria/#usage_intro",children:"role"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"name"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n",(0,n.jsx)(s.p,{children:"A human readable name for the node."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"value"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," | ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})]}),"\n",(0,n.jsx)(s.p,{children:"The current value of the node, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"description"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n",(0,n.jsx)(s.p,{children:"An additional human readable description of the node, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"keyshortcuts"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n",(0,n.jsx)(s.p,{children:"Keyboard shortcuts associated with this node, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"roledescription"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n",(0,n.jsx)(s.p,{children:"A human readable alternative to the role, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"valuetext"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n",(0,n.jsx)(s.p,{children:"A description of the current value, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"disabled"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"})]}),"\n",(0,n.jsx)(s.p,{children:"Whether the node is disabled, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"expanded"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"})]}),"\n",(0,n.jsx)(s.p,{children:"Whether the node is expanded or collapsed, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"focused"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"})]}),"\n",(0,n.jsx)(s.p,{children:"Whether the node is focused, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"modal"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"})]}),"\n",(0,n.jsxs)(s.p,{children:["Whether the node is ",(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Modal_window",children:"modal"}),", if applicable."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"multiline"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"})]}),"\n",(0,n.jsx)(s.p,{children:"Whether the node text input supports multiline, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"multiselectable"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"})]}),"\n",(0,n.jsx)(s.p,{children:"Whether more than one child can be selected, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"readonly"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"})]}),"\n",(0,n.jsx)(s.p,{children:"Whether the node is read only, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"required"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"})]}),"\n",(0,n.jsx)(s.p,{children:"Whether the node is required, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"selected"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"})]}),"\n",(0,n.jsx)(s.p,{children:"Whether the node is selected in its parent node, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"checked"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"}),' | "mixed"']}),"\n",(0,n.jsx)(s.p,{children:'Whether the checkbox is checked, or "mixed", if applicable.'}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"pressed"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"}),' | "mixed"']}),"\n",(0,n.jsx)(s.p,{children:'Whether the toggle button is checked, or "mixed", if applicable.'}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"level"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})]}),"\n",(0,n.jsx)(s.p,{children:"The level of a heading, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"valuemin"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})]}),"\n",(0,n.jsx)(s.p,{children:"The minimum value in a node, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"valuemax"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})]}),"\n",(0,n.jsx)(s.p,{children:"The maximum value in a node, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"autocomplete"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n",(0,n.jsx)(s.p,{children:"What kind of autocomplete is supported by a control, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"haspopup"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n",(0,n.jsx)(s.p,{children:"What kind of popup is currently being shown for a node, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"invalid"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n",(0,n.jsx)(s.p,{children:"Whether and in what way this node's value is invalid, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"orientation"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n",(0,n.jsx)(s.p,{children:"Whether the node is oriented horizontally or vertically, if applicable."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"children"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array",children:"Array"}),"<",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"}),">"]}),"\n",(0,n.jsx)(s.p,{children:"Child nodes, if any, if applicable."}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);