"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4262],{8644:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var i=n(4848),l=n(8453);n(4235),n(8328),n(3078);const o={id:"class-mouse",title:"Mouse"},c=void 0,t={id:"api/class-mouse",title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/docs/api/class-mouse.mdx",sourceDirName:"api",slug:"/api/class-mouse",permalink:"/dotnet/docs/next/api/class-mouse",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-mouse",title:"Mouse"},sidebar:"api",previous:{title:"Locator",permalink:"/dotnet/docs/next/api/class-locator"},next:{title:"Page",permalink:"/dotnet/docs/next/api/class-page"}},r={},d=[{value:"Methods",id:"methods",level:2},{value:"ClickAsync",id:"mouse-click",level:3},{value:"DblClickAsync",id:"mouse-dblclick",level:3},{value:"DownAsync",id:"mouse-down",level:3},{value:"MoveAsync",id:"mouse-move",level:3},{value:"UpAsync",id:"mouse-up",level:3},{value:"WheelAsync",id:"mouse-wheel",level:3}];function a(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."}),"\n",(0,i.jsxs)(s.p,{children:["Every ",(0,i.jsx)(s.code,{children:"page"})," object has its own Mouse, accessible with ",(0,i.jsx)(s.a,{href:"/dotnet/docs/next/api/class-page#page-mouse",children:"Page.Mouse"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-csharp",children:"await Page.Mouse.MoveAsync(0, 0);\nawait Page.Mouse.DownAsync();\nawait Page.Mouse.MoveAsync(0, 100);\nawait Page.Mouse.MoveAsync(100, 100);\nawait Page.Mouse.MoveAsync(100, 0);\nawait Page.Mouse.MoveAsync(0, 0);\nawait Page.Mouse.UpAsync();\n"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"mouse-click",children:"ClickAsync"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"mouse.ClickAsync"}),"\n",(0,i.jsxs)(s.p,{children:["Shortcut for ",(0,i.jsx)(s.a,{href:"/dotnet/docs/next/api/class-mouse#mouse-move",children:"Mouse.MoveAsync()"}),", ",(0,i.jsx)(s.a,{href:"/dotnet/docs/next/api/class-mouse#mouse-down",children:"Mouse.DownAsync()"}),", ",(0,i.jsx)(s.a,{href:"/dotnet/docs/next/api/class-mouse#mouse-up",children:"Mouse.UpAsync()"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-csharp",children:"await Mouse.ClickAsync(x, y, options);\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"x"})," [float]",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-click-option-x"}),(0,i.jsx)("a",{href:"#mouse-click-option-x",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"X coordinate relative to the main frame's viewport in CSS pixels."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"y"})," [float]",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-click-option-y"}),(0,i.jsx)("a",{href:"#mouse-click-option-y",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"Y coordinate relative to the main frame's viewport in CSS pixels."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"options"})," ",(0,i.jsx)(s.code,{children:"MouseClickOptions?"})," ",(0,i.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Button"})," ",(0,i.jsx)(s.code,{children:"enum MouseButton { Left, Right, Middle }?"})," ",(0,i.jsx)(s.em,{children:"(optional)"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-click-option-button"}),(0,i.jsx)("a",{href:"#mouse-click-option-button",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["Defaults to ",(0,i.jsx)(s.code,{children:"left"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"ClickCount"})," ",(0,i.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int",children:"int"}),"? ",(0,i.jsx)(s.em,{children:"(optional)"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-click-option-click-count"}),(0,i.jsx)("a",{href:"#mouse-click-option-click-count",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["defaults to 1. See ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail",children:"UIEvent.detail"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Delay"})," [float]? ",(0,i.jsx)(s.em,{children:"(optional)"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-click-option-delay"}),(0,i.jsx)("a",{href:"#mouse-click-option-delay",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["Time to wait between ",(0,i.jsx)(s.code,{children:"mousedown"})," and ",(0,i.jsx)(s.code,{children:"mouseup"})," in milliseconds. Defaults to 0."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void",children:"void"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-click-return"}),(0,i.jsx)("a",{href:"#mouse-click-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"mouse-dblclick",children:"DblClickAsync"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"mouse.DblClickAsync"}),"\n",(0,i.jsxs)(s.p,{children:["Shortcut for ",(0,i.jsx)(s.a,{href:"/dotnet/docs/next/api/class-mouse#mouse-move",children:"Mouse.MoveAsync()"}),", ",(0,i.jsx)(s.a,{href:"/dotnet/docs/next/api/class-mouse#mouse-down",children:"Mouse.DownAsync()"}),", ",(0,i.jsx)(s.a,{href:"/dotnet/docs/next/api/class-mouse#mouse-up",children:"Mouse.UpAsync()"}),", ",(0,i.jsx)(s.a,{href:"/dotnet/docs/next/api/class-mouse#mouse-down",children:"Mouse.DownAsync()"})," and ",(0,i.jsx)(s.a,{href:"/dotnet/docs/next/api/class-mouse#mouse-up",children:"Mouse.UpAsync()"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-csharp",children:"await Mouse.DblClickAsync(x, y, options);\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"x"})," [float]",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-x"}),(0,i.jsx)("a",{href:"#mouse-dblclick-option-x",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"X coordinate relative to the main frame's viewport in CSS pixels."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"y"})," [float]",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-y"}),(0,i.jsx)("a",{href:"#mouse-dblclick-option-y",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"Y coordinate relative to the main frame's viewport in CSS pixels."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"options"})," ",(0,i.jsx)(s.code,{children:"MouseDblClickOptions?"})," ",(0,i.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Button"})," ",(0,i.jsx)(s.code,{children:"enum MouseButton { Left, Right, Middle }?"})," ",(0,i.jsx)(s.em,{children:"(optional)"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-button"}),(0,i.jsx)("a",{href:"#mouse-dblclick-option-button",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["Defaults to ",(0,i.jsx)(s.code,{children:"left"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Delay"})," [float]? ",(0,i.jsx)(s.em,{children:"(optional)"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-dblclick-option-delay"}),(0,i.jsx)("a",{href:"#mouse-dblclick-option-delay",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["Time to wait between ",(0,i.jsx)(s.code,{children:"mousedown"})," and ",(0,i.jsx)(s.code,{children:"mouseup"})," in milliseconds. Defaults to 0."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void",children:"void"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-dblclick-return"}),(0,i.jsx)("a",{href:"#mouse-dblclick-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"mouse-down",children:"DownAsync"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"mouse.DownAsync"}),"\n",(0,i.jsxs)(s.p,{children:["Dispatches a ",(0,i.jsx)(s.code,{children:"mousedown"})," event."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-csharp",children:"await Mouse.DownAsync(options);\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"options"})," ",(0,i.jsx)(s.code,{children:"MouseDownOptions?"})," ",(0,i.jsx)(s.em,{children:"(optional)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Button"})," ",(0,i.jsx)(s.code,{children:"enum MouseButton { Left, Right, Middle }?"})," ",(0,i.jsx)(s.em,{children:"(optional)"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-down-option-button"}),(0,i.jsx)("a",{href:"#mouse-down-option-button",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["Defaults to ",(0,i.jsx)(s.code,{children:"left"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"ClickCount"})," ",(0,i.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int",children:"int"}),"? ",(0,i.jsx)(s.em,{children:"(optional)"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-down-option-click-count"}),(0,i.jsx)("a",{href:"#mouse-down-option-click-count",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["defaults to 1. See ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail",children:"UIEvent.detail"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void",children:"void"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-down-return"}),(0,i.jsx)("a",{href:"#mouse-down-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"mouse-move",children:"MoveAsync"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"mouse.MoveAsync"}),"\n",(0,i.jsxs)(s.p,{children:["Dispatches a ",(0,i.jsx)(s.code,{children:"mousemove"})," event."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-csharp",children:"await Mouse.MoveAsync(x, y, options);\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"x"})," [float]",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-move-option-x"}),(0,i.jsx)("a",{href:"#mouse-move-option-x",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"X coordinate relative to the main frame's viewport in CSS pixels."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"y"})," [float]",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-move-option-y"}),(0,i.jsx)("a",{href:"#mouse-move-option-y",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"Y coordinate relative to the main frame's viewport in CSS pixels."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"options"})," ",(0,i.jsx)(s.code,{children:"MouseMoveOptions?"})," ",(0,i.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Steps"})," ",(0,i.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int",children:"int"}),"? ",(0,i.jsx)(s.em,{children:"(optional)"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-move-option-steps"}),(0,i.jsx)("a",{href:"#mouse-move-option-steps",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["Defaults to 1. Sends intermediate ",(0,i.jsx)(s.code,{children:"mousemove"})," events."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void",children:"void"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-move-return"}),(0,i.jsx)("a",{href:"#mouse-move-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"mouse-up",children:"UpAsync"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"mouse.UpAsync"}),"\n",(0,i.jsxs)(s.p,{children:["Dispatches a ",(0,i.jsx)(s.code,{children:"mouseup"})," event."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-csharp",children:"await Mouse.UpAsync(options);\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"options"})," ",(0,i.jsx)(s.code,{children:"MouseUpOptions?"})," ",(0,i.jsx)(s.em,{children:"(optional)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Button"})," ",(0,i.jsx)(s.code,{children:"enum MouseButton { Left, Right, Middle }?"})," ",(0,i.jsx)(s.em,{children:"(optional)"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-up-option-button"}),(0,i.jsx)("a",{href:"#mouse-up-option-button",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["Defaults to ",(0,i.jsx)(s.code,{children:"left"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"ClickCount"})," ",(0,i.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int",children:"int"}),"? ",(0,i.jsx)(s.em,{children:"(optional)"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-up-option-click-count"}),(0,i.jsx)("a",{href:"#mouse-up-option-click-count",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsxs)(s.p,{children:["defaults to 1. See ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail",children:"UIEvent.detail"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void",children:"void"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-up-return"}),(0,i.jsx)("a",{href:"#mouse-up-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"mouse-wheel",children:"WheelAsync"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.15"}),"\n",(0,i.jsx)("x-search",{children:"mouse.WheelAsync"}),"\n",(0,i.jsxs)(s.p,{children:["Dispatches a ",(0,i.jsx)(s.code,{children:"wheel"})," event. This method is usually used to manually scroll the page. See ",(0,i.jsx)(s.a,{href:"/dotnet/docs/next/input#scrolling",children:"scrolling"})," for alternative ways to scroll."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Wheel events may cause scrolling if they are not handled, and this method does not wait for the scrolling to finish before returning."})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-csharp",children:"await Mouse.WheelAsync(deltaX, deltaY);\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"deltaX"})," [float]",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-wheel-option-delta-x"}),(0,i.jsx)("a",{href:"#mouse-wheel-option-delta-x",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"Pixels to scroll horizontally."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"deltaY"})," [float]",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-wheel-option-delta-y"}),(0,i.jsx)("a",{href:"#mouse-wheel-option-delta-y",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"Pixels to scroll vertically."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void",children:"void"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"mouse-wheel-return"}),(0,i.jsx)("a",{href:"#mouse-wheel-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);