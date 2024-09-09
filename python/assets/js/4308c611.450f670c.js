"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[693],{2203:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>p,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var t=n(4848),o=n(8453),r=n(4235),a=n(8328);n(3078);const i={id:"class-apiresponseassertions",title:"APIResponseAssertions"},p=void 0,l={id:"api/class-apiresponseassertions",title:"APIResponseAssertions",description:"The [APIResponseAssertions] class provides assertion methods that can be used to make assertions about the [APIResponse] in the tests.",source:"@site/docs/api/class-apiresponseassertions.mdx",sourceDirName:"api",slug:"/api/class-apiresponseassertions",permalink:"/python/docs/next/api/class-apiresponseassertions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-apiresponseassertions",title:"APIResponseAssertions"},sidebar:"api",previous:{title:"Worker",permalink:"/python/docs/next/api/class-worker"},next:{title:"LocatorAssertions",permalink:"/python/docs/next/api/class-locatorassertions"}},c={},h=[{value:"Methods",id:"methods",level:2},{value:"not_to_be_ok",id:"api-response-assertions-not-to-be-ok",level:3},{value:"to_be_ok",id:"api-response-assertions-to-be-ok",level:3}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.a,{href:"/python/docs/next/api/class-apiresponseassertions",title:"APIResponseAssertions",children:"APIResponseAssertions"})," class provides assertion methods that can be used to make assertions about the ",(0,t.jsx)(s.a,{href:"/python/docs/next/api/class-apiresponse",title:"APIResponse",children:"APIResponse"})," in the tests."]}),"\n",(0,t.jsxs)(r.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,t.jsx)(a.A,{value:"sync",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:"from playwright.sync_api import Page, expect\n\ndef test_navigates_to_login_page(page: Page) -> None:\n    # ..\n    response = page.request.get('https://playwright.dev')\n    expect(response).to_be_ok()\n"})})}),(0,t.jsx)(a.A,{value:"async",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:"from playwright.async_api import Page, expect\n\nasync def test_navigates_to_login_page(page: Page) -> None:\n    # ..\n    response = await page.request.get('https://playwright.dev')\n    await expect(response).to_be_ok()\n"})})})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(s.h3,{id:"api-response-assertions-not-to-be-ok",children:"not_to_be_ok"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.19"}),"\n",(0,t.jsx)("x-search",{children:"apiResponseAssertions.not_to_be_ok"}),"\n",(0,t.jsxs)(s.p,{children:["The opposite of ",(0,t.jsx)(s.a,{href:"/python/docs/next/api/class-apiresponseassertions#api-response-assertions-to-be-ok",children:"expect(response).to_be_ok()"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"expect(response).not_to_be_ok()\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-response-assertions-not-to-be-ok-return"}),(0,t.jsx)("a",{href:"#api-response-assertions-not-to-be-ok-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"api-response-assertions-to-be-ok",children:"to_be_ok"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.18"}),"\n",(0,t.jsx)("x-search",{children:"apiResponseAssertions.to_be_ok"}),"\n",(0,t.jsxs)(s.p,{children:["Ensures the response status code is within ",(0,t.jsx)(s.code,{children:"200..299"})," range."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsxs)(r.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,t.jsx)(a.A,{value:"sync",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:"import re\nfrom playwright.sync_api import expect\n\n# ...\nexpect(response).to_be_ok()\n"})})}),(0,t.jsx)(a.A,{value:"async",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:"from playwright.async_api import expect\n\n# ...\nawait expect(response).to_be_ok()\n"})})})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-response-assertions-to-be-ok-return"}),(0,t.jsx)("a",{href:"#api-response-assertions-to-be-ok-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);