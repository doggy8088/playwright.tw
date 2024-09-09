"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7168],{536:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=s(4848),r=s(8453);s(4235),s(8328),s(3078);const i={id:"class-websocket",title:"WebSocket"},o=void 0,l={id:"api/class-websocket",title:"WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/docs/api/class-websocket.mdx",sourceDirName:"api",slug:"/api/class-websocket",permalink:"/python/docs/next/api/class-websocket",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-websocket",title:"WebSocket"},sidebar:"api",previous:{title:"WebError",permalink:"/python/docs/next/api/class-weberror"},next:{title:"Worker",permalink:"/python/docs/next/api/class-worker"}},c={},d=[{value:"Methods",id:"methods",level:2},{value:"expect_event",id:"web-socket-wait-for-event",level:3},{value:"wait_for_event",id:"web-socket-wait-for-event-2",level:3},{value:"Properties",id:"properties",level:2},{value:"is_closed",id:"web-socket-is-closed",level:3},{value:"url",id:"web-socket-url",level:3},{value:"Events",id:"events",level:2},{value:"on(&quot;close&quot;)",id:"web-socket-event-close",level:3},{value:"on(&quot;framereceived&quot;)",id:"web-socket-event-frame-received",level:3},{value:"on(&quot;framesent&quot;)",id:"web-socket-event-frame-sent",level:3},{value:"on(&quot;socketerror&quot;)",id:"web-socket-event-socket-error",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/python/docs/next/api/class-websocket",title:"WebSocket",children:"WebSocket"})," class represents websocket connections in the page."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.h3,{id:"web-socket-wait-for-event",children:"expect_event"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,n.jsx)("x-search",{children:"webSocket.expect_event"}),"\n",(0,n.jsx)(t.p,{children:"Waits for event to fire and passes its value into the predicate function. Returns when the predicate returns truthy value. Will throw an error if the webSocket is closed before the event is fired. Returns the event data value."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Usage"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"web_socket.expect_event(event)\nweb_socket.expect_event(event, **kwargs)\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Arguments"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"event"})," ",(0,n.jsx)(t.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-event"}),(0,n.jsx)("a",{href:"#web-socket-wait-for-event-option-event",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["Event name, same one would pass into ",(0,n.jsx)(t.code,{children:"webSocket.on(event)"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"predicate"})," ",(0,n.jsx)(t.a,{href:"https://docs.python.org/3/library/typing.html#typing.Callable",title:"Callable",children:"Callable"})," ",(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-predicate"}),(0,n.jsx)("a",{href:"#web-socket-wait-for-event-option-predicate",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsx)(t.p,{children:"Receives the event data and resolves to truthy value when the waiting should resolve."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"timeout"})," ",(0,n.jsx)(t.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"})," ",(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-timeout"}),(0,n.jsx)("a",{href:"#web-socket-wait-for-event-option-timeout",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["Maximum time to wait for in milliseconds. Defaults to ",(0,n.jsx)(t.code,{children:"30000"})," (30 seconds). Pass ",(0,n.jsx)(t.code,{children:"0"})," to disable timeout. The default value can be changed by using the ",(0,n.jsx)(t.a,{href:"/python/docs/next/api/class-browsercontext#browser-context-set-default-timeout",children:"browser_context.set_default_timeout()"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.python.org/3/reference/datamodel.html#context-managers",title:"Event context manager",children:"EventContextManager"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-return"}),(0,n.jsx)("a",{href:"#web-socket-wait-for-event-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"web-socket-wait-for-event-2",children:"wait_for_event"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,n.jsx)("x-search",{children:"webSocket.wait_for_event"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["In most cases, you should use ",(0,n.jsx)(t.a,{href:"/python/docs/next/api/class-websocket#web-socket-wait-for-event",children:"web_socket.expect_event()"}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:["Waits for given ",(0,n.jsx)(t.code,{children:"event"})," to fire. If predicate is provided, it passes event's value into the ",(0,n.jsx)(t.code,{children:"predicate"})," function and waits for ",(0,n.jsx)(t.code,{children:"predicate(event)"})," to return a truthy value. Will throw an error if the socket is closed before the ",(0,n.jsx)(t.code,{children:"event"})," is fired."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Usage"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"web_socket.wait_for_event(event)\nweb_socket.wait_for_event(event, **kwargs)\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Arguments"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"event"})," ",(0,n.jsx)(t.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-2-option-event"}),(0,n.jsx)("a",{href:"#web-socket-wait-for-event-2-option-event",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["Event name, same one typically passed into ",(0,n.jsx)(t.code,{children:"*.on(event)"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"predicate"})," ",(0,n.jsx)(t.a,{href:"https://docs.python.org/3/library/typing.html#typing.Callable",title:"Callable",children:"Callable"})," ",(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-2-option-predicate"}),(0,n.jsx)("a",{href:"#web-socket-wait-for-event-2-option-predicate",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsx)(t.p,{children:"Receives the event data and resolves to truthy value when the waiting should resolve."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"timeout"})," ",(0,n.jsx)(t.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"})," ",(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-2-option-timeout"}),(0,n.jsx)("a",{href:"#web-socket-wait-for-event-2-option-timeout",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["Maximum time to wait for in milliseconds. Defaults to ",(0,n.jsx)(t.code,{children:"30000"})," (30 seconds). Pass ",(0,n.jsx)(t.code,{children:"0"})," to disable timeout. The default value can be changed by using the ",(0,n.jsx)(t.a,{href:"/python/docs/next/api/class-browsercontext#browser-context-set-default-timeout",children:"browser_context.set_default_timeout()"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.python.org/3/library/typing.html#typing.Any",title:"Any",children:"Any"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-2-return"}),(0,n.jsx)("a",{href:"#web-socket-wait-for-event-2-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(t.h3,{id:"web-socket-is-closed",children:"is_closed"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,n.jsx)("x-search",{children:"webSocket.is_closed"}),"\n",(0,n.jsx)(t.p,{children:"Indicates that the web socket has been closed."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Usage"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"web_socket.is_closed()\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool",children:"bool"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-is-closed-return"}),(0,n.jsx)("a",{href:"#web-socket-is-closed-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"web-socket-url",children:"url"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,n.jsx)("x-search",{children:"webSocket.url"}),"\n",(0,n.jsx)(t.p,{children:"Contains the URL of the WebSocket."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Usage"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"web_socket.url\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-url-return"}),(0,n.jsx)("a",{href:"#web-socket-url-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,n.jsx)(t.h3,{id:"web-socket-event-close",children:'on("close")'}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,n.jsx)("x-search",{children:'webSocket.on("close")'}),"\n",(0,n.jsx)(t.p,{children:"Fired when the websocket closes."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Usage"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'web_socket.on("close", handler)\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Event data"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/python/docs/next/api/class-websocket",title:"WebSocket",children:"WebSocket"})}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"web-socket-event-frame-received",children:'on("framereceived")'}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.9"}),"\n",(0,n.jsx)("x-search",{children:'webSocket.on("framereceived")'}),"\n",(0,n.jsx)(t.p,{children:"Fired when the websocket receives a frame."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Usage"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'web_socket.on("framereceived", handler)\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Event data"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"})," | ",(0,n.jsx)(t.a,{href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes",children:"bytes"})]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"web-socket-event-frame-sent",children:'on("framesent")'}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.9"}),"\n",(0,n.jsx)("x-search",{children:'webSocket.on("framesent")'}),"\n",(0,n.jsx)(t.p,{children:"Fired when the websocket sends a frame."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Usage"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'web_socket.on("framesent", handler)\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Event data"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"})," | ",(0,n.jsx)(t.a,{href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes",children:"bytes"})]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"web-socket-event-socket-error",children:'on("socketerror")'}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.9"}),"\n",(0,n.jsx)("x-search",{children:'webSocket.on("socketerror")'}),"\n",(0,n.jsx)(t.p,{children:"Fired when the websocket has an error."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Usage"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'web_socket.on("socketerror", handler)\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Event data"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}}}]);