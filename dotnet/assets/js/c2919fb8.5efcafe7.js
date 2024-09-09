"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[561],{4632:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var r=n(4848),i=n(8453);n(4235),n(8328),n(3078);const t={id:"class-response",title:"Response"},l=void 0,d={id:"api/class-response",title:"Response",description:"[Response] class represents responses which are received by page.",source:"@site/docs/api/class-response.mdx",sourceDirName:"api",slug:"/api/class-response",permalink:"/dotnet/docs/next/api/class-response",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-response",title:"Response"},sidebar:"api",previous:{title:"Request",permalink:"/dotnet/docs/next/api/class-request"},next:{title:"Route",permalink:"/dotnet/docs/next/api/class-route"}},c={},a=[{value:"Methods",id:"methods",level:2},{value:"AllHeadersAsync",id:"response-all-headers",level:3},{value:"BodyAsync",id:"response-body",level:3},{value:"FinishedAsync",id:"response-finished",level:3},{value:"Frame",id:"response-frame",level:3},{value:"FromServiceWorker",id:"response-from-service-worker",level:3},{value:"HeaderValueAsync",id:"response-header-value",level:3},{value:"HeaderValuesAsync",id:"response-header-values",level:3},{value:"Headers",id:"response-headers",level:3},{value:"HeadersArrayAsync",id:"response-headers-array",level:3},{value:"JsonAsync",id:"response-json",level:3},{value:"Ok",id:"response-ok",level:3},{value:"Request",id:"response-request",level:3},{value:"SecurityDetailsAsync",id:"response-security-details",level:3},{value:"ServerAddrAsync",id:"response-server-addr",level:3},{value:"Status",id:"response-status",level:3},{value:"StatusText",id:"response-status-text",level:3},{value:"TextAsync",id:"response-text",level:3},{value:"Url",id:"response-url",level:3}];function o(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/dotnet/docs/next/api/class-response",title:"Response",children:"Response"})," class represents responses which are received by page."]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"response-all-headers",children:"AllHeadersAsync"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.15"}),"\n",(0,r.jsx)("x-search",{children:"response.AllHeadersAsync"}),"\n",(0,r.jsx)(s.p,{children:"An object with all the response HTTP headers associated with this response."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"await Response.AllHeadersAsync();\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.idictionary",title:"IDictionary",children:"IDictionary"}),"<",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),", ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),">",(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-all-headers-return"}),(0,r.jsx)("a",{href:"#response-all-headers-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"response-body",children:"BodyAsync"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"response.BodyAsync"}),"\n",(0,r.jsx)(s.p,{children:"Returns the buffer with response body."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"await Response.BodyAsync();\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.byte",title:"byte",children:"byte"}),"[]",(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-body-return"}),(0,r.jsx)("a",{href:"#response-body-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"response-finished",children:"FinishedAsync"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"response.FinishedAsync"}),"\n",(0,r.jsxs)(s.p,{children:["Waits for this response to finish, returns always ",(0,r.jsx)(s.code,{children:"null"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"await Response.FinishedAsync();\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"?",(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-finished-return"}),(0,r.jsx)("a",{href:"#response-finished-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"response-frame",children:"Frame"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"response.Frame"}),"\n",(0,r.jsxs)(s.p,{children:["Returns the ",(0,r.jsx)(s.a,{href:"/dotnet/docs/next/api/class-frame",title:"Frame",children:"Frame"})," that initiated this response."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"Response.Frame\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/dotnet/docs/next/api/class-frame",title:"Frame",children:"Frame"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-frame-return"}),(0,r.jsx)("a",{href:"#response-frame-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"response-from-service-worker",children:"FromServiceWorker"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.23"}),"\n",(0,r.jsx)("x-search",{children:"response.FromServiceWorker"}),"\n",(0,r.jsxs)(s.p,{children:["Indicates whether this Response was fulfilled by a Service Worker's Fetch Handler (i.e. via ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith",children:"FetchEvent.respondWith"}),")."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"Response.FromServiceWorker\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool",children:"bool"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-from-service-worker-return"}),(0,r.jsx)("a",{href:"#response-from-service-worker-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"response-header-value",children:"HeaderValueAsync"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.15"}),"\n",(0,r.jsx)("x-search",{children:"response.HeaderValueAsync"}),"\n",(0,r.jsxs)(s.p,{children:["Returns the value of the header matching the name. The name is case-insensitive. If multiple headers have the same name (except ",(0,r.jsx)(s.code,{children:"set-cookie"}),"), they are returned as a list separated by ",(0,r.jsx)(s.code,{children:", "}),". For ",(0,r.jsx)(s.code,{children:"set-cookie"}),", the ",(0,r.jsx)(s.code,{children:"\\n"})," separator is used. If no headers are found, ",(0,r.jsx)(s.code,{children:"null"})," is returned."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"await Response.HeaderValueAsync(name);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"name"})," ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-header-value-option-name"}),(0,r.jsx)("a",{href:"#response-header-value-option-name",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"Name of the header."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"?",(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-header-value-return"}),(0,r.jsx)("a",{href:"#response-header-value-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"response-header-values",children:"HeaderValuesAsync"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.15"}),"\n",(0,r.jsx)("x-search",{children:"response.HeaderValuesAsync"}),"\n",(0,r.jsxs)(s.p,{children:["Returns all values of the headers matching the name, for example ",(0,r.jsx)(s.code,{children:"set-cookie"}),". The name is case-insensitive."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"await Response.HeaderValuesAsync(name);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"name"})," ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-header-values-option-name"}),(0,r.jsx)("a",{href:"#response-header-values-option-name",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"Name of the header."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable",title:"IEnumerable",children:"IEnumerable"}),"<",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),">",(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-header-values-return"}),(0,r.jsx)("a",{href:"#response-header-values-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"response-headers",children:"Headers"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"response.Headers"}),"\n",(0,r.jsxs)(s.p,{children:["An object with the response HTTP headers. The header names are lower-cased. Note that this method does not return security-related headers, including cookie-related ones. You can use ",(0,r.jsx)(s.a,{href:"/dotnet/docs/next/api/class-response#response-all-headers",children:"Response.AllHeadersAsync()"})," for complete list of headers that include ",(0,r.jsx)(s.code,{children:"cookie"})," information."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"Response.Headers\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.idictionary",title:"IDictionary",children:"IDictionary"}),"<",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),", ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),">",(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-headers-return"}),(0,r.jsx)("a",{href:"#response-headers-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"response-headers-array",children:"HeadersArrayAsync"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.15"}),"\n",(0,r.jsx)("x-search",{children:"response.HeadersArrayAsync"}),"\n",(0,r.jsxs)(s.p,{children:["An array with all the request HTTP headers associated with this response. Unlike ",(0,r.jsx)(s.a,{href:"/dotnet/docs/next/api/class-response#response-all-headers",children:"Response.AllHeadersAsync()"}),", header names are NOT lower-cased. Headers with multiple entries, such as ",(0,r.jsx)(s.code,{children:"Set-Cookie"}),", appear in the array multiple times."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"await Response.HeadersArrayAsync();\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable",title:"IEnumerable",children:"IEnumerable"}),"<",(0,r.jsx)(s.code,{children:"HttpHeader"}),">",(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-headers-array-return"}),(0,r.jsx)("a",{href:"#response-headers-array-return",class:"list-anchor",children:"#"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"name"})," ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"})]}),"\n",(0,r.jsx)(s.p,{children:"Name of the header."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"value"})," ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"})]}),"\n",(0,r.jsx)(s.p,{children:"Value of the header."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"response-json",children:"JsonAsync"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"response.JsonAsync"}),"\n",(0,r.jsx)(s.p,{children:"Returns the JSON representation of response body."}),"\n",(0,r.jsxs)(s.p,{children:["This method will throw if the response body is not parsable via ",(0,r.jsx)(s.code,{children:"JSON.parse"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"await Response.JsonAsync();\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.text.json.jsonelement",title:"JsonElement",children:"JsonElement"}),"?",(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-json-return"}),(0,r.jsx)("a",{href:"#response-json-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"response-ok",children:"Ok"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"response.Ok"}),"\n",(0,r.jsx)(s.p,{children:"Contains a boolean stating whether the response was successful (status in the range 200-299) or not."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"Response.Ok\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool",children:"bool"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-ok-return"}),(0,r.jsx)("a",{href:"#response-ok-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"response-request",children:"Request"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"response.Request"}),"\n",(0,r.jsxs)(s.p,{children:["Returns the matching ",(0,r.jsx)(s.a,{href:"/dotnet/docs/next/api/class-request",title:"Request",children:"Request"})," object."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"Response.Request\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"/dotnet/docs/next/api/class-request",title:"Request",children:"Request"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-request-return"}),(0,r.jsx)("a",{href:"#response-request-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"response-security-details",children:"SecurityDetailsAsync"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.13"}),"\n",(0,r.jsx)("x-search",{children:"response.SecurityDetailsAsync"}),"\n",(0,r.jsx)(s.p,{children:"Returns SSL and other security information."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"await Response.SecurityDetailsAsync();\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["SecurityDetails?",(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-security-details-return"}),(0,r.jsx)("a",{href:"#response-security-details-return",class:"list-anchor",children:"#"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"issuer"})," ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"? ",(0,r.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,r.jsx)(s.p,{children:"Common Name component of the Issuer field. from the certificate. This should only be used for informational purposes. Optional."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"protocol"})," ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"? ",(0,r.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,r.jsxs)(s.p,{children:["The specific TLS protocol used. (e.g. ",(0,r.jsx)(s.code,{children:"TLS 1.3"}),"). Optional."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"subjectName"})," ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"? ",(0,r.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,r.jsx)(s.p,{children:"Common Name component of the Subject field from the certificate. This should only be used for informational purposes. Optional."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"validFrom"})," [float]? ",(0,r.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,r.jsx)(s.p,{children:"Unix timestamp (in seconds) specifying when this cert becomes valid. Optional."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"validTo"})," [float]? ",(0,r.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,r.jsx)(s.p,{children:"Unix timestamp (in seconds) specifying when this cert becomes invalid. Optional."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"response-server-addr",children:"ServerAddrAsync"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.13"}),"\n",(0,r.jsx)("x-search",{children:"response.ServerAddrAsync"}),"\n",(0,r.jsx)(s.p,{children:"Returns the IP address and port of the server."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"await Response.ServerAddrAsync();\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["ServerAddr?",(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-server-addr-return"}),(0,r.jsx)("a",{href:"#response-server-addr-return",class:"list-anchor",children:"#"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"ipAddress"})," ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"})]}),"\n",(0,r.jsx)(s.p,{children:"IPv4 or IPV6 address of the server."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"port"})," ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int",children:"int"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"response-status",children:"Status"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"response.Status"}),"\n",(0,r.jsx)(s.p,{children:"Contains the status code of the response (e.g., 200 for a success)."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"Response.Status\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int",children:"int"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-status-return"}),(0,r.jsx)("a",{href:"#response-status-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"response-status-text",children:"StatusText"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"response.StatusText"}),"\n",(0,r.jsx)(s.p,{children:'Contains the status text of the response (e.g. usually an "OK" for a success).'}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"Response.StatusText\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-status-text-return"}),(0,r.jsx)("a",{href:"#response-status-text-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"response-text",children:"TextAsync"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"response.TextAsync"}),"\n",(0,r.jsx)(s.p,{children:"Returns the text representation of response body."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"await Response.TextAsync();\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-text-return"}),(0,r.jsx)("a",{href:"#response-text-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"response-url",children:"Url"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"response.Url"}),"\n",(0,r.jsx)(s.p,{children:"Contains the URL of the response."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"Response.Url\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"response-url-return"}),(0,r.jsx)("a",{href:"#response-url-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}}}]);