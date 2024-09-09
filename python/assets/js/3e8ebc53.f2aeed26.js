"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4563],{4509:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(4848),s=n(8453),a=n(4235),o=n(8328);n(3078);const i={id:"class-weberror",title:"WebError"},l=void 0,c={id:"api/class-weberror",title:"WebError",description:'WebError] class represents an unhandled exception thrown in the page. It is dispatched via the [browser_context.on("weberror") event.',source:"@site/docs/api/class-weberror.mdx",sourceDirName:"api",slug:"/api/class-weberror",permalink:"/python/docs/next/api/class-weberror",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-weberror",title:"WebError"},sidebar:"api",previous:{title:"Video",permalink:"/python/docs/next/api/class-video"},next:{title:"WebSocket",permalink:"/python/docs/next/api/class-websocket"}},h={},d=[{value:"Properties",id:"properties",level:2},{value:"error",id:"web-error-error",level:3},{value:"page",id:"web-error-page",level:3}];function p(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/python/docs/next/api/class-weberror",title:"WebError",children:"WebError"})," class represents an unhandled exception thrown in the page. It is dispatched via the ",(0,t.jsx)(r.a,{href:"/python/docs/next/api/class-browsercontext#browser-context-event-web-error",children:'browser_context.on("weberror")'})," event."]}),"\n",(0,t.jsxs)(a.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,t.jsx)(o.A,{value:"sync",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-py",children:'# Log all uncaught errors to the terminal\ncontext.on("weberror", lambda web_error: print(f"uncaught exception: {web_error.error}"))\n\n# Navigate to a page with an exception.\npage.goto("data:text/html,<script>throw new Error(\'test\')<\/script>")\n'})})}),(0,t.jsx)(o.A,{value:"async",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-py",children:'# Log all uncaught errors to the terminal\ncontext.on("weberror", lambda web_error: print(f"uncaught exception: {web_error.error}"))\n\n# Navigate to a page with an exception.\nawait page.goto("data:text/html,<script>throw new Error(\'test\')<\/script>")\n'})})})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(r.h3,{id:"web-error-error",children:"error"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.38"}),"\n",(0,t.jsx)("x-search",{children:"webError.error"}),"\n",(0,t.jsx)(r.p,{children:"Unhandled error that was thrown."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Usage"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"web_error.error\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/python/docs/next/api/class-error",title:"Error",children:"Error"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-error-error-return"}),(0,t.jsx)("a",{href:"#web-error-error-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"web-error-page",children:"page"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.38"}),"\n",(0,t.jsx)("x-search",{children:"webError.page"}),"\n",(0,t.jsx)(r.p,{children:"The page that produced this unhandled exception, if any."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Usage"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"web_error.page\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"})," | ",(0,t.jsx)(r.a,{href:"/python/docs/next/api/class-page",title:"Page",children:"Page"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-error-page-return"}),(0,t.jsx)("a",{href:"#web-error-page-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);