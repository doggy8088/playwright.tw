"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9566],{3664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=n(4848),s=n(8453);n(4235),n(8328),n(3078);const r={id:"extensibility",title:"Extensibility"},o=void 0,l={id:"extensibility",title:"Extensibility",description:"Custom selector engines",source:"@site/docs/extensibility.mdx",sourceDirName:".",slug:"/extensibility",permalink:"/java/docs/next/extensibility",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"extensibility",title:"Extensibility"},sidebar:"docs",previous:{title:"Events",permalink:"/java/docs/next/events"},next:{title:"Frames",permalink:"/java/docs/next/frames"}},c={},a=[{value:"Custom selector engines",id:"custom-selector-engines",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"custom-selector-engines",children:"Custom selector engines"}),"\n",(0,i.jsxs)(t.p,{children:["Playwright supports custom selector engines, registered with ",(0,i.jsx)(t.a,{href:"/java/docs/next/api/class-selectors#selectors-register",children:"Selectors.register()"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Selector engine should have the following properties:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"query"})," function to query first element matching ",(0,i.jsx)(t.code,{children:"selector"})," relative to the ",(0,i.jsx)(t.code,{children:"root"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"queryAll"})," function to query all elements matching ",(0,i.jsx)(t.code,{children:"selector"})," relative to the ",(0,i.jsx)(t.code,{children:"root"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["By default the engine is run directly in the frame's JavaScript context and, for example, can call an application-defined function. To isolate the engine from any JavaScript in the frame, but leave access to the DOM, register the engine with ",(0,i.jsx)(t.code,{children:"{contentScript: true}"})," option. Content script engine is safer because it is protected from any tampering with the global objects, for example altering ",(0,i.jsx)(t.code,{children:"Node.prototype"})," methods. All built-in selector engines run as content scripts. Note that running as a content script is not guaranteed when the engine is used together with other custom engines."]}),"\n",(0,i.jsx)(t.p,{children:"Selectors must be registered before creating the page."}),"\n",(0,i.jsx)(t.p,{children:"An example of registering selector engine that queries elements based on a tag name:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'// Must be a script that evaluates to a selector engine instance.  The script is evaluated in the page context.\nString createTagNameEngine = "{\\n" +\n  "  // Returns the first element matching given selector in the root\'s subtree.\\n" +\n  "  query(root, selector) {\\n" +\n  "    return root.querySelector(selector);\\n" +\n  "  },\\n" +\n  "\\n" +\n  "  // Returns all elements matching given selector in the root\'s subtree.\\n" +\n  "  queryAll(root, selector) {\\n" +\n  "    return Array.from(root.querySelectorAll(selector));\\n" +\n  "  }\\n" +\n  "}";\n\n// Register the engine. Selectors will be prefixed with "tag=".\nplaywright.selectors().register("tag", createTagNameEngine);\n\n// Now we can use "tag=" selectors.\nLocator button = page.locator("tag=button");\nbutton.click();\n\n// We can combine it with built-in locators.\npage.locator("tag=div").getByText("Click me").click();\n\n// We can use it in any methods supporting selectors.\nint buttonCount = (int) page.locator("tag=button").count();\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);