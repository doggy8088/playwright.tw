"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[429],{6507:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=n(4848),t=n(8453);n(4235),n(8328),n(3078);const a={id:"class-websocket",title:"WebSocket"},i=void 0,c={id:"api/class-websocket",title:"WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/versioned_docs/version-stable/api/class-websocket.mdx",sourceDirName:"api",slug:"/api/class-websocket",permalink:"/java/docs/api/class-websocket",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"class-websocket",title:"WebSocket"},sidebar:"api",previous:{title:"WebError",permalink:"/java/docs/api/class-weberror"},next:{title:"WebSocketFrame",permalink:"/java/docs/api/class-websocketframe"}},l={},o=[{value:"Methods",id:"methods",level:2},{value:"isClosed",id:"web-socket-is-closed",level:3},{value:"url",id:"web-socket-url",level:3},{value:"waitForFrameReceived",id:"web-socket-wait-for-frame-received",level:3},{value:"waitForFrameSent",id:"web-socket-wait-for-frame-sent",level:3},{value:"Events",id:"events",level:2},{value:"onClose(handler)",id:"web-socket-event-close",level:3},{value:"onFrameReceived(handler)",id:"web-socket-event-frame-received",level:3},{value:"onFrameSent(handler)",id:"web-socket-event-frame-sent",level:3},{value:"onSocketError(handler)",id:"web-socket-event-socket-error",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.a,{href:"/java/docs/api/class-websocket",title:"WebSocket",children:"WebSocket"})," class represents websocket connections in the page."]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"web-socket-is-closed",children:"isClosed"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"webSocket.isClosed"}),"\n",(0,r.jsx)(s.p,{children:"Indicates that the web socket has been closed."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"WebSocket.isClosed();\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean",children:"boolean"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-is-closed-return"}),(0,r.jsx)("a",{href:"#web-socket-is-closed-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"web-socket-url",children:"url"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"webSocket.url"}),"\n",(0,r.jsx)(s.p,{children:"Contains the URL of the WebSocket."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"WebSocket.url();\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String",children:"String"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-url-return"}),(0,r.jsx)("a",{href:"#web-socket-url-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"web-socket-wait-for-frame-received",children:"waitForFrameReceived"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.10"}),"\n",(0,r.jsx)("x-search",{children:"webSocket.waitForFrameReceived"}),"\n",(0,r.jsxs)(s.p,{children:["Performs action and waits for a frame to be sent. If predicate is provided, it passes ",(0,r.jsx)(s.a,{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame",children:"WebSocketFrame"})," value into the ",(0,r.jsx)(s.code,{children:"predicate"})," function and waits for ",(0,r.jsx)(s.code,{children:"predicate(webSocketFrame)"})," to return a truthy value. Will throw an error if the WebSocket or Page is closed before the frame is received."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"WebSocket.waitForFrameReceived(callback);\nWebSocket.waitForFrameReceived(callback, options);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"options"})," ",(0,r.jsx)(s.code,{children:"WebSocket.WaitForFrameReceivedOptions"})," ",(0,r.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"setPredicate"})," ",(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Predicate.html",title:"Predicate",children:"Predicate"}),"<",(0,r.jsx)(s.a,{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame",children:"WebSocketFrame"}),"> ",(0,r.jsx)(s.em,{children:"(optional)"})," ",(0,r.jsx)("font",{size:"2",children:"Added in: v1.9"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-frame-received-option-predicate"}),(0,r.jsx)("a",{href:"#web-socket-wait-for-frame-received-option-predicate",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["Receives the ",(0,r.jsx)(s.a,{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame",children:"WebSocketFrame"})," object and resolves to truthy value when the waiting should resolve."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"setTimeout"})," ",(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double",children:"double"})," ",(0,r.jsx)(s.em,{children:"(optional)"})," ",(0,r.jsx)("font",{size:"2",children:"Added in: v1.9"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-frame-received-option-timeout"}),(0,r.jsx)("a",{href:"#web-socket-wait-for-frame-received-option-timeout",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["Maximum time to wait for in milliseconds. Defaults to ",(0,r.jsx)(s.code,{children:"30000"})," (30 seconds). Pass ",(0,r.jsx)(s.code,{children:"0"})," to disable timeout. The default value can be changed by using the ",(0,r.jsx)(s.a,{href:"/java/docs/api/class-browsercontext#browser-context-set-default-timeout",children:"BrowserContext.setDefaultTimeout()"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"callback"})," ",(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Runnable.html",title:"Runnable",children:"Runnable"})," ",(0,r.jsx)("font",{size:"2",children:"Added in: v1.9"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-frame-received-option-callback"}),(0,r.jsx)("a",{href:"#web-socket-wait-for-frame-received-option-callback",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"Callback that performs the action triggering the event."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame",children:"WebSocketFrame"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-frame-received-return"}),(0,r.jsx)("a",{href:"#web-socket-wait-for-frame-received-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"web-socket-wait-for-frame-sent",children:"waitForFrameSent"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.10"}),"\n",(0,r.jsx)("x-search",{children:"webSocket.waitForFrameSent"}),"\n",(0,r.jsxs)(s.p,{children:["Performs action and waits for a frame to be sent. If predicate is provided, it passes ",(0,r.jsx)(s.a,{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame",children:"WebSocketFrame"})," value into the ",(0,r.jsx)(s.code,{children:"predicate"})," function and waits for ",(0,r.jsx)(s.code,{children:"predicate(webSocketFrame)"})," to return a truthy value. Will throw an error if the WebSocket or Page is closed before the frame is sent."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"WebSocket.waitForFrameSent(callback);\nWebSocket.waitForFrameSent(callback, options);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"options"})," ",(0,r.jsx)(s.code,{children:"WebSocket.WaitForFrameSentOptions"})," ",(0,r.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"setPredicate"})," ",(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Predicate.html",title:"Predicate",children:"Predicate"}),"<",(0,r.jsx)(s.a,{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame",children:"WebSocketFrame"}),"> ",(0,r.jsx)(s.em,{children:"(optional)"})," ",(0,r.jsx)("font",{size:"2",children:"Added in: v1.9"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-frame-sent-option-predicate"}),(0,r.jsx)("a",{href:"#web-socket-wait-for-frame-sent-option-predicate",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["Receives the ",(0,r.jsx)(s.a,{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame",children:"WebSocketFrame"})," object and resolves to truthy value when the waiting should resolve."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"setTimeout"})," ",(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double",children:"double"})," ",(0,r.jsx)(s.em,{children:"(optional)"})," ",(0,r.jsx)("font",{size:"2",children:"Added in: v1.9"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-frame-sent-option-timeout"}),(0,r.jsx)("a",{href:"#web-socket-wait-for-frame-sent-option-timeout",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["Maximum time to wait for in milliseconds. Defaults to ",(0,r.jsx)(s.code,{children:"30000"})," (30 seconds). Pass ",(0,r.jsx)(s.code,{children:"0"})," to disable timeout. The default value can be changed by using the ",(0,r.jsx)(s.a,{href:"/java/docs/api/class-browsercontext#browser-context-set-default-timeout",children:"BrowserContext.setDefaultTimeout()"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"callback"})," ",(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Runnable.html",title:"Runnable",children:"Runnable"})," ",(0,r.jsx)("font",{size:"2",children:"Added in: v1.9"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-frame-sent-option-callback"}),(0,r.jsx)("a",{href:"#web-socket-wait-for-frame-sent-option-callback",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"Callback that performs the action triggering the event."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame",children:"WebSocketFrame"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-frame-sent-return"}),(0,r.jsx)("a",{href:"#web-socket-wait-for-frame-sent-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"events",children:"Events"}),"\n",(0,r.jsx)(s.h3,{id:"web-socket-event-close",children:"onClose(handler)"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"webSocket.onClose(handler)"}),"\n",(0,r.jsx)(s.p,{children:"Fired when the websocket closes."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"WebSocket.onClose(handler)\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Event data"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/java/docs/api/class-websocket",title:"WebSocket",children:"WebSocket"})}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"web-socket-event-frame-received",children:"onFrameReceived(handler)"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.9"}),"\n",(0,r.jsx)("x-search",{children:"webSocket.onFrameReceived(handler)"}),"\n",(0,r.jsx)(s.p,{children:"Fired when the websocket receives a frame."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"WebSocket.onFrameReceived(handler)\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Event data"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame",children:"WebSocketFrame"})}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"web-socket-event-frame-sent",children:"onFrameSent(handler)"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.9"}),"\n",(0,r.jsx)("x-search",{children:"webSocket.onFrameSent(handler)"}),"\n",(0,r.jsx)(s.p,{children:"Fired when the websocket sends a frame."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"WebSocket.onFrameSent(handler)\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Event data"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame",children:"WebSocketFrame"})}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"web-socket-event-socket-error",children:"onSocketError(handler)"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.9"}),"\n",(0,r.jsx)("x-search",{children:"webSocket.onSocketError(handler)"}),"\n",(0,r.jsx)(s.p,{children:"Fired when the websocket has an error."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"WebSocket.onSocketError(handler)\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Event data"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String",children:"String"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);