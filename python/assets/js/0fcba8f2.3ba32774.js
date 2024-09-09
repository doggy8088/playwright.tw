"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4625],{2235:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>h,toc:()=>d});var n=t(4848),r=t(8453),i=t(4235),a=t(8328);t(3078);const l={id:"class-pageassertions",title:"PageAssertions"},o=void 0,h={id:"api/class-pageassertions",title:"PageAssertions",description:"The [PageAssertions] class provides assertion methods that can be used to make assertions about the [Page] state in the tests.",source:"@site/docs/api/class-pageassertions.mdx",sourceDirName:"api",slug:"/api/class-pageassertions",permalink:"/python/docs/next/api/class-pageassertions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-pageassertions",title:"PageAssertions"},sidebar:"api",previous:{title:"LocatorAssertions",permalink:"/python/docs/next/api/class-locatorassertions"}},c={},d=[{value:"Methods",id:"methods",level:2},{value:"not_to_have_title",id:"page-assertions-not-to-have-title",level:3},{value:"not_to_have_url",id:"page-assertions-not-to-have-url",level:3},{value:"to_have_title",id:"page-assertions-to-have-title",level:3},{value:"to_have_url",id:"page-assertions-to-have-url",level:3}];function p(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.a,{href:"/python/docs/next/api/class-pageassertions",title:"PageAssertions",children:"PageAssertions"})," class provides assertion methods that can be used to make assertions about the ",(0,n.jsx)(s.a,{href:"/python/docs/next/api/class-page",title:"Page",children:"Page"})," state in the tests."]}),"\n",(0,n.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,n.jsx)(a.A,{value:"sync",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-py",children:'import re\nfrom playwright.sync_api import Page, expect\n\ndef test_navigates_to_login_page(page: Page) -> None:\n    # ..\n    page.get_by_text("Sign in").click()\n    expect(page).to_have_url(re.compile(r".*/login"))\n'})})}),(0,n.jsx)(a.A,{value:"async",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-py",children:'import re\nfrom playwright.async_api import Page, expect\n\nasync def test_navigates_to_login_page(page: Page) -> None:\n    # ..\n    await page.get_by_text("Sign in").click()\n    await expect(page).to_have_url(re.compile(r".*/login"))\n'})})})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"page-assertions-not-to-have-title",children:"not_to_have_title"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.20"}),"\n",(0,n.jsx)("x-search",{children:"pageAssertions.not_to_have_title"}),"\n",(0,n.jsxs)(s.p,{children:["The opposite of ",(0,n.jsx)(s.a,{href:"/python/docs/next/api/class-pageassertions#page-assertions-to-have-title",children:"expect(page).to_have_title()"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"expect(page).not_to_have_title(title_or_reg_exp)\nexpect(page).not_to_have_title(title_or_reg_exp, **kwargs)\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"title_or_reg_exp"})," ",(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"})," | ",(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/re.html",title:"Pattern",children:"Pattern"})," ",(0,n.jsx)("font",{size:"2",children:"Added in: v1.18"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-title-option-title-or-reg-exp"}),(0,n.jsx)("a",{href:"#page-assertions-not-to-have-title-option-title-or-reg-exp",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"Expected title or RegExp."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"timeout"})," ",(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"})," ",(0,n.jsx)(s.em,{children:"(optional)"})," ",(0,n.jsx)("font",{size:"2",children:"Added in: v1.18"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-title-option-timeout"}),(0,n.jsx)("a",{href:"#page-assertions-not-to-have-title-option-timeout",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["Time to retry the assertion for in milliseconds. Defaults to ",(0,n.jsx)(s.code,{children:"5000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-title-return"}),(0,n.jsx)("a",{href:"#page-assertions-not-to-have-title-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"page-assertions-not-to-have-url",children:"not_to_have_url"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.20"}),"\n",(0,n.jsx)("x-search",{children:"pageAssertions.not_to_have_url"}),"\n",(0,n.jsxs)(s.p,{children:["The opposite of ",(0,n.jsx)(s.a,{href:"/python/docs/next/api/class-pageassertions#page-assertions-to-have-url",children:"expect(page).to_have_url()"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"expect(page).not_to_have_url(url_or_reg_exp)\nexpect(page).not_to_have_url(url_or_reg_exp, **kwargs)\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"url_or_reg_exp"})," ",(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"})," | ",(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/re.html",title:"Pattern",children:"Pattern"})," ",(0,n.jsx)("font",{size:"2",children:"Added in: v1.18"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-url-option-url-or-reg-exp"}),(0,n.jsx)("a",{href:"#page-assertions-not-to-have-url-option-url-or-reg-exp",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"Expected URL string or RegExp."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"ignore_case"})," ",(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool",children:"bool"})," ",(0,n.jsx)(s.em,{children:"(optional)"})," ",(0,n.jsx)("font",{size:"2",children:"Added in: v1.44"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-url-option-ignore-case"}),(0,n.jsx)("a",{href:"#page-assertions-not-to-have-url-option-ignore-case",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["Whether to perform case-insensitive match. ",(0,n.jsx)(s.code,{children:"ignore_case"})," option takes precedence over the corresponding regular expression flag if specified."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"timeout"})," ",(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"})," ",(0,n.jsx)(s.em,{children:"(optional)"})," ",(0,n.jsx)("font",{size:"2",children:"Added in: v1.18"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-url-option-timeout"}),(0,n.jsx)("a",{href:"#page-assertions-not-to-have-url-option-timeout",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["Time to retry the assertion for in milliseconds. Defaults to ",(0,n.jsx)(s.code,{children:"5000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-not-to-have-url-return"}),(0,n.jsx)("a",{href:"#page-assertions-not-to-have-url-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"page-assertions-to-have-title",children:"to_have_title"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.20"}),"\n",(0,n.jsx)("x-search",{children:"pageAssertions.to_have_title"}),"\n",(0,n.jsx)(s.p,{children:"Ensures the page has the given title."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,n.jsx)(a.A,{value:"sync",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-py",children:'import re\nfrom playwright.sync_api import expect\n\n# ...\nexpect(page).to_have_title(re.compile(r".*checkout"))\n'})})}),(0,n.jsx)(a.A,{value:"async",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-py",children:'import re\nfrom playwright.async_api import expect\n\n# ...\nawait expect(page).to_have_title(re.compile(r".*checkout"))\n'})})})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"title_or_reg_exp"})," ",(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"})," | ",(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/re.html",title:"Pattern",children:"Pattern"})," ",(0,n.jsx)("font",{size:"2",children:"Added in: v1.18"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-option-title-or-reg-exp"}),(0,n.jsx)("a",{href:"#page-assertions-to-have-title-option-title-or-reg-exp",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"Expected title or RegExp."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"timeout"})," ",(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"})," ",(0,n.jsx)(s.em,{children:"(optional)"})," ",(0,n.jsx)("font",{size:"2",children:"Added in: v1.18"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-option-timeout"}),(0,n.jsx)("a",{href:"#page-assertions-to-have-title-option-timeout",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["Time to retry the assertion for in milliseconds. Defaults to ",(0,n.jsx)(s.code,{children:"5000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-title-return"}),(0,n.jsx)("a",{href:"#page-assertions-to-have-title-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"page-assertions-to-have-url",children:"to_have_url"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.20"}),"\n",(0,n.jsx)("x-search",{children:"pageAssertions.to_have_url"}),"\n",(0,n.jsx)(s.p,{children:"Ensures the page is navigated to the given URL."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Usage"})}),"\n",(0,n.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,n.jsx)(a.A,{value:"sync",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-py",children:'import re\nfrom playwright.sync_api import expect\n\n# ...\nexpect(page).to_have_url(re.compile(".*checkout"))\n'})})}),(0,n.jsx)(a.A,{value:"async",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-py",children:'import re\nfrom playwright.async_api import expect\n\n# ...\nawait expect(page).to_have_url(re.compile(".*checkout"))\n'})})})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"url_or_reg_exp"})," ",(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"})," | ",(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/re.html",title:"Pattern",children:"Pattern"})," ",(0,n.jsx)("font",{size:"2",children:"Added in: v1.18"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-option-url-or-reg-exp"}),(0,n.jsx)("a",{href:"#page-assertions-to-have-url-option-url-or-reg-exp",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsx)(s.p,{children:"Expected URL string or RegExp."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"ignore_case"})," ",(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool",children:"bool"})," ",(0,n.jsx)(s.em,{children:"(optional)"})," ",(0,n.jsx)("font",{size:"2",children:"Added in: v1.44"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-option-ignore-case"}),(0,n.jsx)("a",{href:"#page-assertions-to-have-url-option-ignore-case",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["Whether to perform case-insensitive match. ",(0,n.jsx)(s.code,{children:"ignore_case"})," option takes precedence over the corresponding regular expression flag if specified."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"timeout"})," ",(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"})," ",(0,n.jsx)(s.em,{children:"(optional)"})," ",(0,n.jsx)("font",{size:"2",children:"Added in: v1.18"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-option-timeout"}),(0,n.jsx)("a",{href:"#page-assertions-to-have-url-option-timeout",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(s.p,{children:["Time to retry the assertion for in milliseconds. Defaults to ",(0,n.jsx)(s.code,{children:"5000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"page-assertions-to-have-url-return"}),(0,n.jsx)("a",{href:"#page-assertions-to-have-url-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}}}]);