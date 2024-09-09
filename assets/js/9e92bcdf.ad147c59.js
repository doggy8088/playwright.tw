"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6395],{5264:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=s(4848),t=s(8453);s(4235),s(8328),s(3078);const o={id:"class-weberror",title:"WebError"},a=void 0,i={id:"api/class-weberror",title:"WebError",description:"WebError] class represents an unhandled exception thrown in the page. It is dispatched via the [browserContext.on('weberror') event.",source:"@site/versioned_docs/version-stable/api/class-weberror.mdx",sourceDirName:"api",slug:"/api/class-weberror",permalink:"/docs/api/class-weberror",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"class-weberror",title:"WebError"},sidebar:"api",previous:{title:"Video",permalink:"/docs/api/class-video"},next:{title:"WebSocket",permalink:"/docs/api/class-websocket"}},l={},c=[{value:"Methods",id:"methods",level:2},{value:"error",id:"web-error-error",level:3},{value:"page",id:"web-error-page",level:3}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/api/class-weberror",title:"WebError",children:"WebError"})," class represents an unhandled exception thrown in the page. It is dispatched via the ",(0,n.jsx)(r.a,{href:"/docs/api/class-browsercontext#browser-context-event-web-error",children:"browserContext.on('weberror')"})," event."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"// Log all uncaught errors to the terminal\ncontext.on('weberror', webError => {\n  console.log(`Uncaught exception: \"${webError.error()}\"`);\n});\n\n// Navigate to a page with an exception.\nawait page.goto('data:text/html,<script>throw new Error(\"Test\")<\/script>');\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(r.h3,{id:"web-error-error",children:"error"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.38"}),"\n",(0,n.jsx)("x-search",{children:"webError.error"}),"\n",(0,n.jsx)(r.p,{children:"Unhandled error that was thrown."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Usage"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"webError.error();\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://nodejs.org/api/errors.html#errors_class_error",title:"Error",children:"Error"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-error-error-return"}),(0,n.jsx)("a",{href:"#web-error-error-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"web-error-page",children:"page"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.38"}),"\n",(0,n.jsx)("x-search",{children:"webError.page"}),"\n",(0,n.jsx)(r.p,{children:"The page that produced this unhandled exception, if any."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Usage"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"webError.page();\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null",children:"null"})," | ",(0,n.jsx)(r.a,{href:"/docs/api/class-page",title:"Page",children:"Page"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-error-page-return"}),(0,n.jsx)("a",{href:"#web-error-page-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);