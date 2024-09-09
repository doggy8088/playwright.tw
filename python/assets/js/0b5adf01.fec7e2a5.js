"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2364],{4447:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var l=n(4848),i=n(8453),o=n(4235),t=n(8328);n(3078);const r={id:"class-mouse",title:"Mouse"},c=void 0,a={id:"api/class-mouse",title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/versioned_docs/version-stable/api/class-mouse.mdx",sourceDirName:"api",slug:"/api/class-mouse",permalink:"/python/docs/api/class-mouse",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"class-mouse",title:"Mouse"},sidebar:"api",previous:{title:"Locator",permalink:"/python/docs/api/class-locator"},next:{title:"Page",permalink:"/python/docs/api/class-page"}},d={},h=[{value:"Methods",id:"methods",level:2},{value:"click",id:"mouse-click",level:3},{value:"dblclick",id:"mouse-dblclick",level:3},{value:"down",id:"mouse-down",level:3},{value:"move",id:"mouse-move",level:3},{value:"up",id:"mouse-up",level:3},{value:"wheel",id:"mouse-wheel",level:3}];function x(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.p,{children:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."}),"\n",(0,l.jsxs)(s.p,{children:["Every ",(0,l.jsx)(s.code,{children:"page"})," object has its own Mouse, accessible with ",(0,l.jsx)(s.a,{href:"/python/docs/api/class-page#page-mouse",children:"page.mouse"}),"."]}),"\n",(0,l.jsxs)(o.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,l.jsx)(t.A,{value:"sync",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-py",children:"# using \u2018page.mouse\u2019 to trace a 100x100 square.\npage.mouse.move(0, 0)\npage.mouse.down()\npage.mouse.move(0, 100)\npage.mouse.move(100, 100)\npage.mouse.move(100, 0)\npage.mouse.move(0, 0)\npage.mouse.up()\n"})})}),(0,l.jsx)(t.A,{value:"async",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-py",children:"# using \u2018page.mouse\u2019 to trace a 100x100 square.\nawait page.mouse.move(0, 0)\nawait page.mouse.down()\nawait page.mouse.move(0, 100)\nawait page.mouse.move(100, 100)\nawait page.mouse.move(100, 0)\nawait page.mouse.move(0, 0)\nawait page.mouse.up()\n"})})})]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsx)(s.h3,{id:"mouse-click",children:"click"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,l.jsx)("x-search",{children:"mouse.click"}),"\n",(0,l.jsxs)(s.p,{children:["Shortcut for ",(0,l.jsx)(s.a,{href:"/python/docs/api/class-mouse#mouse-move",children:"mouse.move()"}),", ",(0,l.jsx)(s.a,{href:"/python/docs/api/class-mouse#mouse-down",children:"mouse.down()"}),", ",(0,l.jsx)(s.a,{href:"/python/docs/api/class-mouse#mouse-up",children:"mouse.up()"}),"."]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Usage"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-python",children:"mouse.click(x, y)\nmouse.click(x, y, **kwargs)\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"x"})," ",(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-click-option-x"}),(0,l.jsx)("a",{href:"#mouse-click-option-x",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"X coordinate relative to the main frame's viewport in CSS pixels."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"y"})," ",(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-click-option-y"}),(0,l.jsx)("a",{href:"#mouse-click-option-y",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"Y coordinate relative to the main frame's viewport in CSS pixels."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"button"}),' "left" | "right" | "middle" ',(0,l.jsx)(s.em,{children:"(optional)"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-click-option-button"}),(0,l.jsx)("a",{href:"#mouse-click-option-button",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["Defaults to ",(0,l.jsx)(s.code,{children:"left"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"click_count"})," ",(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int",children:"int"})," ",(0,l.jsx)(s.em,{children:"(optional)"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-click-option-click-count"}),(0,l.jsx)("a",{href:"#mouse-click-option-click-count",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["defaults to 1. See ",(0,l.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail",children:"UIEvent.detail"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"delay"})," ",(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"})," ",(0,l.jsx)(s.em,{children:"(optional)"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-click-option-delay"}),(0,l.jsx)("a",{href:"#mouse-click-option-delay",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["Time to wait between ",(0,l.jsx)(s.code,{children:"mousedown"})," and ",(0,l.jsx)(s.code,{children:"mouseup"})," in milliseconds. Defaults to 0."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-click-return"}),(0,l.jsx)("a",{href:"#mouse-click-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"mouse-dblclick",children:"dblclick"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,l.jsx)("x-search",{children:"mouse.dblclick"}),"\n",(0,l.jsxs)(s.p,{children:["Shortcut for ",(0,l.jsx)(s.a,{href:"/python/docs/api/class-mouse#mouse-move",children:"mouse.move()"}),", ",(0,l.jsx)(s.a,{href:"/python/docs/api/class-mouse#mouse-down",children:"mouse.down()"}),", ",(0,l.jsx)(s.a,{href:"/python/docs/api/class-mouse#mouse-up",children:"mouse.up()"}),", ",(0,l.jsx)(s.a,{href:"/python/docs/api/class-mouse#mouse-down",children:"mouse.down()"})," and ",(0,l.jsx)(s.a,{href:"/python/docs/api/class-mouse#mouse-up",children:"mouse.up()"}),"."]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Usage"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-python",children:"mouse.dblclick(x, y)\nmouse.dblclick(x, y, **kwargs)\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"x"})," ",(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-x"}),(0,l.jsx)("a",{href:"#mouse-dblclick-option-x",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"X coordinate relative to the main frame's viewport in CSS pixels."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"y"})," ",(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-y"}),(0,l.jsx)("a",{href:"#mouse-dblclick-option-y",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"Y coordinate relative to the main frame's viewport in CSS pixels."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"button"}),' "left" | "right" | "middle" ',(0,l.jsx)(s.em,{children:"(optional)"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-button"}),(0,l.jsx)("a",{href:"#mouse-dblclick-option-button",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["Defaults to ",(0,l.jsx)(s.code,{children:"left"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"delay"})," ",(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"})," ",(0,l.jsx)(s.em,{children:"(optional)"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-delay"}),(0,l.jsx)("a",{href:"#mouse-dblclick-option-delay",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["Time to wait between ",(0,l.jsx)(s.code,{children:"mousedown"})," and ",(0,l.jsx)(s.code,{children:"mouseup"})," in milliseconds. Defaults to 0."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-dblclick-return"}),(0,l.jsx)("a",{href:"#mouse-dblclick-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"mouse-down",children:"down"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,l.jsx)("x-search",{children:"mouse.down"}),"\n",(0,l.jsxs)(s.p,{children:["Dispatches a ",(0,l.jsx)(s.code,{children:"mousedown"})," event."]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Usage"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-python",children:"mouse.down()\nmouse.down(**kwargs)\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"button"}),' "left" | "right" | "middle" ',(0,l.jsx)(s.em,{children:"(optional)"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-down-option-button"}),(0,l.jsx)("a",{href:"#mouse-down-option-button",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["Defaults to ",(0,l.jsx)(s.code,{children:"left"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"click_count"})," ",(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int",children:"int"})," ",(0,l.jsx)(s.em,{children:"(optional)"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-down-option-click-count"}),(0,l.jsx)("a",{href:"#mouse-down-option-click-count",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["defaults to 1. See ",(0,l.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail",children:"UIEvent.detail"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-down-return"}),(0,l.jsx)("a",{href:"#mouse-down-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"mouse-move",children:"move"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,l.jsx)("x-search",{children:"mouse.move"}),"\n",(0,l.jsxs)(s.p,{children:["Dispatches a ",(0,l.jsx)(s.code,{children:"mousemove"})," event."]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Usage"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-python",children:"mouse.move(x, y)\nmouse.move(x, y, **kwargs)\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"x"})," ",(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-move-option-x"}),(0,l.jsx)("a",{href:"#mouse-move-option-x",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"X coordinate relative to the main frame's viewport in CSS pixels."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"y"})," ",(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-move-option-y"}),(0,l.jsx)("a",{href:"#mouse-move-option-y",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"Y coordinate relative to the main frame's viewport in CSS pixels."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"steps"})," ",(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int",children:"int"})," ",(0,l.jsx)(s.em,{children:"(optional)"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-move-option-steps"}),(0,l.jsx)("a",{href:"#mouse-move-option-steps",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["Defaults to 1. Sends intermediate ",(0,l.jsx)(s.code,{children:"mousemove"})," events."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-move-return"}),(0,l.jsx)("a",{href:"#mouse-move-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"mouse-up",children:"up"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,l.jsx)("x-search",{children:"mouse.up"}),"\n",(0,l.jsxs)(s.p,{children:["Dispatches a ",(0,l.jsx)(s.code,{children:"mouseup"})," event."]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Usage"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-python",children:"mouse.up()\nmouse.up(**kwargs)\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"button"}),' "left" | "right" | "middle" ',(0,l.jsx)(s.em,{children:"(optional)"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-up-option-button"}),(0,l.jsx)("a",{href:"#mouse-up-option-button",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["Defaults to ",(0,l.jsx)(s.code,{children:"left"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"click_count"})," ",(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int",children:"int"})," ",(0,l.jsx)(s.em,{children:"(optional)"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-up-option-click-count"}),(0,l.jsx)("a",{href:"#mouse-up-option-click-count",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsxs)(s.p,{children:["defaults to 1. See ",(0,l.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail",children:"UIEvent.detail"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-up-return"}),(0,l.jsx)("a",{href:"#mouse-up-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"mouse-wheel",children:"wheel"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.15"}),"\n",(0,l.jsx)("x-search",{children:"mouse.wheel"}),"\n",(0,l.jsxs)(s.p,{children:["Dispatches a ",(0,l.jsx)(s.code,{children:"wheel"})," event. This method is usually used to manually scroll the page. See ",(0,l.jsx)(s.a,{href:"/python/docs/input#scrolling",children:"scrolling"})," for alternative ways to scroll."]}),"\n",(0,l.jsx)(s.admonition,{type:"note",children:(0,l.jsx)(s.p,{children:"Wheel events may cause scrolling if they are not handled, and this method does not wait for the scrolling to finish before returning."})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Usage"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-python",children:"mouse.wheel(delta_x, delta_y)\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"delta_x"})," ",(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-wheel-option-delta-x"}),(0,l.jsx)("a",{href:"#mouse-wheel-option-delta-x",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"Pixels to scroll horizontally."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"delta_y"})," ",(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-wheel-option-delta-y"}),(0,l.jsx)("a",{href:"#mouse-wheel-option-delta-y",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"Pixels to scroll vertically."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-wheel-return"}),(0,l.jsx)("a",{href:"#mouse-wheel-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}}}]);