"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2407],{1357:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=n(4848),t=n(8453);n(4235),n(8328),n(3078);const r={id:"class-cdpsession",title:"CDPSession"},c=void 0,d={id:"api/class-cdpsession",title:"CDPSession",description:"The CDPSession instances are used to talk raw Chrome Devtools Protocol:",source:"@site/versioned_docs/version-stable/api/class-cdpsession.mdx",sourceDirName:"api",slug:"/api/class-cdpsession",permalink:"/dotnet/docs/api/class-cdpsession",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"class-cdpsession",title:"CDPSession"},sidebar:"api",previous:{title:"BrowserType",permalink:"/dotnet/docs/api/class-browsertype"},next:{title:"CDPSessionEvent",permalink:"/dotnet/docs/api/class-cdpsessionevent"}},o={},a=[{value:"Methods",id:"methods",level:2},{value:"DetachAsync",id:"cdp-session-detach",level:3},{value:"Event",id:"cdp-session-event",level:3},{value:"SendAsync",id:"cdp-session-send",level:3}];function l(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"CDPSession"})," instances are used to talk raw Chrome Devtools Protocol:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["protocol methods can be called with ",(0,i.jsx)(s.code,{children:"session.send"})," method."]}),"\n",(0,i.jsxs)(s.li,{children:["protocol events can be subscribed to with ",(0,i.jsx)(s.code,{children:"session.on"})," method."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Useful links:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Documentation on DevTools Protocol can be found here: ",(0,i.jsx)(s.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"DevTools Protocol Viewer"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Getting Started with DevTools Protocol: ",(0,i.jsx)(s.a,{href:"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md",children:"https://github.com/aslushnikov/getting-started-with-cdp/blob/master/README.md"})]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-csharp",children:'var client = await Page.Context.NewCDPSessionAsync(Page);\nawait client.SendAsync("Runtime.enable");\nclient.Event("Animation.animationCreated").OnEvent += (_, _) => Console.WriteLine("Animation created!");\nvar response = await client.SendAsync("Animation.getPlaybackRate");\nvar playbackRate = response.Value.GetProperty("playbackRate").GetDouble();\nConsole.WriteLine("playback rate is " + playbackRate);\nawait client.SendAsync("Animation.setPlaybackRate", new() { { "playbackRate", playbackRate / 2 } });\n'})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"cdp-session-detach",children:"DetachAsync"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"cdpSession.DetachAsync"}),"\n",(0,i.jsx)(s.p,{children:"Detaches the CDPSession from the target. Once detached, the CDPSession object won't emit any events and can't be used to send messages."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-csharp",children:"await CdpSession.DetachAsync();\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void",children:"void"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"cdp-session-detach-return"}),(0,i.jsx)("a",{href:"#cdp-session-detach-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"cdp-session-event",children:"Event"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v.1.30"}),"\n",(0,i.jsx)("x-search",{children:"cdpSession.Event"}),"\n",(0,i.jsx)(s.p,{children:"Returns an event emitter for the given CDP event name."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-csharp",children:"CdpSession.Event(eventName);\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"eventName"})," ",(0,i.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"})," ",(0,i.jsx)("font",{size:"2",children:"Added in: v1.30"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"cdp-session-event-option-event-name"}),(0,i.jsx)("a",{href:"#cdp-session-event-option-event-name",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"CDP event name."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/dotnet/docs/api/class-cdpsessionevent",title:"CDPSessionEvent",children:"CDPSessionEvent"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"cdp-session-event-return"}),(0,i.jsx)("a",{href:"#cdp-session-event-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"cdp-session-send",children:"SendAsync"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"cdpSession.SendAsync"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-csharp",children:"await CdpSession.SendAsync(method, params);\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"method"})," ",(0,i.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"cdp-session-send-option-method"}),(0,i.jsx)("a",{href:"#cdp-session-send-option-method",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"Protocol method name."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"args"})," [Map]?<",(0,i.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),", Args> ",(0,i.jsx)(s.em,{children:"(optional)"})," ",(0,i.jsx)("font",{size:"2",children:"Added in: v1.30"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"cdp-session-send-option-params"}),(0,i.jsx)("a",{href:"#cdp-session-send-option-params",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"Optional method parameters."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["[JsonElement?]",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"cdp-session-send-return"}),(0,i.jsx)("a",{href:"#cdp-session-send-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);