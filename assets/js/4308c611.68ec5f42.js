"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[693],{2203:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=n(4848),i=n(8453);n(4235),n(8328),n(3078);const r={id:"class-apiresponseassertions",title:"APIResponseAssertions"},o=void 0,a={id:"api/class-apiresponseassertions",title:"APIResponseAssertions",description:"The [APIResponseAssertions] class provides assertion methods that can be used to make assertions about the [APIResponse] in the tests.",source:"@site/docs/api/class-apiresponseassertions.mdx",sourceDirName:"api",slug:"/api/class-apiresponseassertions",permalink:"/docs/next/api/class-apiresponseassertions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-apiresponseassertions",title:"APIResponseAssertions"},sidebar:"api",previous:{title:"Worker",permalink:"/docs/next/api/class-worker"},next:{title:"GenericAssertions",permalink:"/docs/next/api/class-genericassertions"}},p={},l=[{value:"Methods",id:"methods",level:2},{value:"toBeOK",id:"api-response-assertions-to-be-ok",level:3},{value:"Properties",id:"properties",level:2},{value:"not",id:"api-response-assertions-not",level:3}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.a,{href:"/docs/next/api/class-apiresponseassertions",title:"APIResponseAssertions",children:"APIResponseAssertions"})," class provides assertion methods that can be used to make assertions about the ",(0,t.jsx)(s.a,{href:"/docs/next/api/class-apiresponse",title:"APIResponse",children:"APIResponse"})," in the tests."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"import { test, expect } from '@playwright/test';\n\ntest('navigates to login', async ({ page }) => {\n  // ...\n  const response = await page.request.get('https://playwright.dev');\n  await expect(response).toBeOK();\n});\n"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(s.h3,{id:"api-response-assertions-to-be-ok",children:"toBeOK"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.18"}),"\n",(0,t.jsx)("x-search",{children:"apiResponseAssertions.toBeOK"}),"\n",(0,t.jsxs)(s.p,{children:["Ensures the response status code is within ",(0,t.jsx)(s.code,{children:"200..299"})," range."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"await expect(response).toBeOK();\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise",children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void",children:"void"}),">",(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-response-assertions-to-be-ok-return"}),(0,t.jsx)("a",{href:"#api-response-assertions-to-be-ok-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"api-response-assertions-not",children:"not"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.20"}),"\n",(0,t.jsx)("x-search",{children:"apiResponseAssertions.not"}),"\n",(0,t.jsx)(s.p,{children:"Makes the assertion check for the opposite condition. For example, this code tests that the response status is not successful:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"await expect(response).not.toBeOK();\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"expect(response).not\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Type"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/next/api/class-apiresponseassertions",title:"APIResponseAssertions",children:"APIResponseAssertions"})}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);