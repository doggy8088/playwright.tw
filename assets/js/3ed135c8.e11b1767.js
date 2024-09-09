"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9287],{480:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var n=r(4848),l=r(8453);r(4235),r(8328),r(3078);const i={id:"class-logger",title:"Logger"},a=void 0,t={id:"api/class-logger",title:"Logger",description:"Playwright generates a lot of logs and they are accessible via the pluggable logger sink.",source:"@site/versioned_docs/version-stable/api/class-logger.mdx",sourceDirName:"api",slug:"/api/class-logger",permalink:"/docs/api/class-logger",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"class-logger",title:"Logger"},sidebar:"api",previous:{title:"Locator",permalink:"/docs/api/class-locator"},next:{title:"Mouse",permalink:"/docs/api/class-mouse"}},o={},c=[{value:"Methods",id:"methods",level:2},{value:"isEnabled",id:"logger-is-enabled",level:3},{value:"log",id:"logger-log",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Playwright generates a lot of logs and they are accessible via the pluggable logger sink."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch({\n    logger: {\n      isEnabled: (name, severity) => name === 'api',\n      log: (name, severity, message, args) => console.log(`${name} ${message}`)\n    }\n  });\n  // ...\n})();\n"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"logger-is-enabled",children:"isEnabled"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,n.jsx)("x-search",{children:"logger.isEnabled"}),"\n",(0,n.jsx)(s.p,{children:"Determines whether sink is interested in the logger with the given name and severity."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"logger.isEnabled(name, severity);\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"name"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"logger-is-enabled-option-name"}),(0,n.jsx)("a",{href:"#logger-is-enabled-option-name",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"logger name"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"severity"}),' "verbose" | "info" | "warning" | "error"',(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"logger-is-enabled-option-severity"}),(0,n.jsx)("a",{href:"#logger-is-enabled-option-severity",class:"list-anchor",children:"#"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"logger-is-enabled-return"}),(0,n.jsx)("a",{href:"#logger-is-enabled-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"logger-log",children:"log"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,n.jsx)("x-search",{children:"logger.log"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"logger.log(name, severity, message, args, hints);\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"name"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"logger-log-option-name"}),(0,n.jsx)("a",{href:"#logger-log-option-name",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"logger name"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"severity"}),' "verbose" | "info" | "warning" | "error"',(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"logger-log-option-severity"}),(0,n.jsx)("a",{href:"#logger-log-option-severity",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"message"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," | ",(0,n.jsx)(s.a,{href:"https://nodejs.org/api/errors.html#errors_class_error",title:"Error",children:"Error"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"logger-log-option-message"}),(0,n.jsx)("a",{href:"#logger-log-option-message",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"log message format"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"args"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array",children:"Array"}),"<",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"}),">",(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"logger-log-option-args"}),(0,n.jsx)("a",{href:"#logger-log-option-args",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"message arguments"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"hints"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"logger-log-option-hints"}),(0,n.jsx)("a",{href:"#logger-log-option-hints",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"color"})," ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," ",(0,n.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,n.jsx)(s.p,{children:"Optional preferred logger color."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"optional formatting hints"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);