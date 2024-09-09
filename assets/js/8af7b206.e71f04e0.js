"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[429],{6507:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=n(4848),r=n(8453);n(4235),n(8328),n(3078);const i={id:"class-websocket",title:"WebSocket"},c=void 0,l={id:"api/class-websocket",title:"WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/versioned_docs/version-stable/api/class-websocket.mdx",sourceDirName:"api",slug:"/api/class-websocket",permalink:"/docs/api/class-websocket",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"class-websocket",title:"WebSocket"},sidebar:"api",previous:{title:"WebError",permalink:"/docs/api/class-weberror"},next:{title:"Worker",permalink:"/docs/api/class-worker"}},o={},a=[{value:"Methods",id:"methods",level:2},{value:"isClosed",id:"web-socket-is-closed",level:3},{value:"url",id:"web-socket-url",level:3},{value:"waitForEvent",id:"web-socket-wait-for-event",level:3},{value:"Events",id:"events",level:2},{value:"on(&#39;close&#39;)",id:"web-socket-event-close",level:3},{value:"on(&#39;framereceived&#39;)",id:"web-socket-event-frame-received",level:3},{value:"on(&#39;framesent&#39;)",id:"web-socket-event-frame-sent",level:3},{value:"on(&#39;socketerror&#39;)",id:"web-socket-event-socket-error",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.a,{href:"/docs/api/class-websocket",title:"WebSocket",children:"WebSocket"})," class represents websocket connections in the page."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(s.h3,{id:"web-socket-is-closed",children:"isClosed"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,t.jsx)("x-search",{children:"webSocket.isClosed"}),"\n",(0,t.jsx)(s.p,{children:"Indicates that the web socket has been closed."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"webSocket.isClosed();\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-is-closed-return"}),(0,t.jsx)("a",{href:"#web-socket-is-closed-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"web-socket-url",children:"url"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,t.jsx)("x-search",{children:"webSocket.url"}),"\n",(0,t.jsx)(s.p,{children:"Contains the URL of the WebSocket."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"webSocket.url();\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-url-return"}),(0,t.jsx)("a",{href:"#web-socket-url-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"web-socket-wait-for-event",children:"waitForEvent"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,t.jsx)("x-search",{children:"webSocket.waitForEvent"}),"\n",(0,t.jsx)(s.p,{children:"Waits for event to fire and passes its value into the predicate function. Returns when the predicate returns truthy value. Will throw an error if the webSocket is closed before the event is fired. Returns the event data value."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"await webSocket.waitForEvent(event);\nawait webSocket.waitForEvent(event, optionsOrPredicate, options);\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"event"})," ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-event"}),(0,t.jsx)("a",{href:"#web-socket-wait-for-event-option-event",class:"list-anchor",children:"#"})]}),"\n",(0,t.jsxs)(s.p,{children:["Event name, same one would pass into ",(0,t.jsx)(s.code,{children:"webSocket.on(event)"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"optionsOrPredicate"})," ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function",children:"function"})," | ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"})," ",(0,t.jsx)(s.em,{children:"(optional)"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-options-or-predicate"}),(0,t.jsx)("a",{href:"#web-socket-wait-for-event-option-options-or-predicate",class:"list-anchor",children:"#"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"predicate"})," ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function",children:"function"})]}),"\n",(0,t.jsx)(s.p,{children:"Receives the event data and resolves to truthy value when the waiting should resolve."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"timeout"})," ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})," ",(0,t.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,t.jsxs)(s.p,{children:["Maximum time to wait for in milliseconds. Defaults to ",(0,t.jsx)(s.code,{children:"0"})," - no timeout. The default value can be changed via ",(0,t.jsx)(s.code,{children:"actionTimeout"})," option in the config, or by using the ",(0,t.jsx)(s.a,{href:"/docs/api/class-browsercontext#browser-context-set-default-timeout",children:"browserContext.setDefaultTimeout()"})," or ",(0,t.jsx)(s.a,{href:"/docs/api/class-page#page-set-default-timeout",children:"page.setDefaultTimeout()"})," methods."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Either a predicate that receives an event or an options object. Optional."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"options"})," ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"})," ",(0,t.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"predicate"})," ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function",children:"function"})," ",(0,t.jsx)(s.em,{children:"(optional)"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-predicate"}),(0,t.jsx)("a",{href:"#web-socket-wait-for-event-option-predicate",class:"list-anchor",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:"Receives the event data and resolves to truthy value when the waiting should resolve."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise",children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"}),">",(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-return"}),(0,t.jsx)("a",{href:"#web-socket-wait-for-event-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"events",children:"Events"}),"\n",(0,t.jsx)(s.h3,{id:"web-socket-event-close",children:"on('close')"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,t.jsx)("x-search",{children:"webSocket.on('close')"}),"\n",(0,t.jsx)(s.p,{children:"Fired when the websocket closes."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"webSocket.on('close', data => {});\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Event data"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/api/class-websocket",title:"WebSocket",children:"WebSocket"})}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"web-socket-event-frame-received",children:"on('framereceived')"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.9"}),"\n",(0,t.jsx)("x-search",{children:"webSocket.on('framereceived')"}),"\n",(0,t.jsx)(s.p,{children:"Fired when the websocket receives a frame."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"webSocket.on('framereceived', data => {});\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Event data"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"payload"})," ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," | ",(0,t.jsx)(s.a,{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer",children:"Buffer"})]}),"\n",(0,t.jsx)(s.p,{children:"frame payload"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"web-socket-event-frame-sent",children:"on('framesent')"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.9"}),"\n",(0,t.jsx)("x-search",{children:"webSocket.on('framesent')"}),"\n",(0,t.jsx)(s.p,{children:"Fired when the websocket sends a frame."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"webSocket.on('framesent', data => {});\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Event data"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"payload"})," ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," | ",(0,t.jsx)(s.a,{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer",children:"Buffer"})]}),"\n",(0,t.jsx)(s.p,{children:"frame payload"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"web-socket-event-socket-error",children:"on('socketerror')"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.9"}),"\n",(0,t.jsx)("x-search",{children:"webSocket.on('socketerror')"}),"\n",(0,t.jsx)(s.p,{children:"Fired when the websocket has an error."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"webSocket.on('socketerror', data => {});\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Event data"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);