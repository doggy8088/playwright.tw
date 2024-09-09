"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1331],{3230:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=s(4848),n=s(8453);s(4235),s(8328),s(3078);const i={id:"class-apirequest",title:"APIRequest"},l=void 0,c={id:"api/class-apirequest",title:"APIRequest",description:"Exposes API that can be used for the Web API testing. This class is used for creating APIRequestContext] instance which in turn can be used for sending web requests. An instance of this class can be obtained via [playwright.request. For more information see [APIRequestContext].",source:"@site/docs/api/class-apirequest.mdx",sourceDirName:"api",slug:"/api/class-apirequest",permalink:"/docs/next/api/class-apirequest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-apirequest",title:"APIRequest"},sidebar:"api",previous:{title:"Playwright Library",permalink:"/docs/next/api/class-playwright"},next:{title:"APIRequestContext",permalink:"/docs/next/api/class-apirequestcontext"}},a={},o=[{value:"Methods",id:"methods",level:2},{value:"newContext",id:"api-request-new-context",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Exposes API that can be used for the Web API testing. This class is used for creating ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," instance which in turn can be used for sending web requests. An instance of this class can be obtained via ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-playwright#playwright-request",children:"playwright.request"}),". For more information see ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"}),"."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.h3,{id:"api-request-new-context",children:"newContext"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.16"}),"\n",(0,r.jsx)("x-search",{children:"apiRequest.newContext"}),"\n",(0,r.jsxs)(t.p,{children:["Creates new instances of ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Usage"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"await apiRequest.newContext();\nawait apiRequest.newContext(options);\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"options"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"})," ",(0,r.jsx)(t.em,{children:"(optional)"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"baseURL"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," ",(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-base-url"}),(0,r.jsx)("a",{href:"#api-request-new-context-option-base-url",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(t.p,{children:["Methods like ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext#api-request-context-get",children:"apiRequestContext.get()"})," take the base URL into consideration by using the ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/URL",children:(0,r.jsx)(t.code,{children:"URL()"})})," constructor for building the corresponding URL. Examples:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["baseURL: ",(0,r.jsx)(t.code,{children:"http://localhost:3000"})," and sending request to ",(0,r.jsx)(t.code,{children:"/bar.html"})," results in ",(0,r.jsx)(t.code,{children:"http://localhost:3000/bar.html"})]}),"\n",(0,r.jsxs)(t.li,{children:["baseURL: ",(0,r.jsx)(t.code,{children:"http://localhost:3000/foo/"})," and sending request to ",(0,r.jsx)(t.code,{children:"./bar.html"})," results in ",(0,r.jsx)(t.code,{children:"http://localhost:3000/foo/bar.html"})]}),"\n",(0,r.jsxs)(t.li,{children:["baseURL: ",(0,r.jsx)(t.code,{children:"http://localhost:3000/foo"})," (without trailing slash) and navigating to ",(0,r.jsx)(t.code,{children:"./bar.html"})," results in ",(0,r.jsx)(t.code,{children:"http://localhost:3000/bar.html"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"clientCertificates"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array",children:"Array"}),"<",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"}),"> ",(0,r.jsx)(t.em,{children:"(optional)"})," ",(0,r.jsx)("font",{size:"2",children:"Added in: 1.46"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-client-certificates"}),(0,r.jsx)("a",{href:"#api-request-new-context-option-client-certificates",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"origin"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n",(0,r.jsxs)(t.p,{children:["Exact origin that the certificate is valid for. Origin includes ",(0,r.jsx)(t.code,{children:"https"})," protocol, a hostname and optionally a port."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"certPath"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," ",(0,r.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,r.jsx)(t.p,{children:"Path to the file with the certificate in PEM format."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"cert"})," ",(0,r.jsx)(t.a,{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer",children:"Buffer"})," ",(0,r.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,r.jsx)(t.p,{children:"Direct value of the certificate in PEM format."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"keyPath"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," ",(0,r.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,r.jsx)(t.p,{children:"Path to the file with the private key in PEM format."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"key"})," ",(0,r.jsx)(t.a,{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer",children:"Buffer"})," ",(0,r.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,r.jsx)(t.p,{children:"Direct value of the private key in PEM format."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"pfxPath"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," ",(0,r.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,r.jsx)(t.p,{children:"Path to the PFX or PKCS12 encoded private key and certificate chain."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"pfx"})," ",(0,r.jsx)(t.a,{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer",children:"Buffer"})," ",(0,r.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,r.jsx)(t.p,{children:"Direct value of the PFX or PKCS12 encoded private key and certificate chain."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"passphrase"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," ",(0,r.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,r.jsx)(t.p,{children:"Passphrase for the private key (PEM or PFX)."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"TLS Client Authentication allows the server to request a client certificate and verify it."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Details"})}),"\n",(0,r.jsxs)(t.p,{children:["An array of client certificates to be used. Each certificate object must have either both ",(0,r.jsx)(t.code,{children:"certPath"})," and ",(0,r.jsx)(t.code,{children:"keyPath"}),", a single ",(0,r.jsx)(t.code,{children:"pfxPath"}),", or their corresponding direct value equivalents (",(0,r.jsx)(t.code,{children:"cert"})," and ",(0,r.jsx)(t.code,{children:"key"}),", or ",(0,r.jsx)(t.code,{children:"pfx"}),"). Optionally, ",(0,r.jsx)(t.code,{children:"passphrase"})," property should be provided if the certificate is encrypted. The ",(0,r.jsx)(t.code,{children:"origin"})," property should be provided with an exact match to the request origin that the certificate is valid for."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Using Client Certificates in combination with Proxy Servers is not supported."})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["When using WebKit on macOS, accessing ",(0,r.jsx)(t.code,{children:"localhost"})," will not pick up client certificates. You can make it work by replacing ",(0,r.jsx)(t.code,{children:"localhost"})," with ",(0,r.jsx)(t.code,{children:"local.playwright"}),"."]})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"extraHTTPHeaders"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"}),"<",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"}),", ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"}),"> ",(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-extra-http-headers"}),(0,r.jsx)("a",{href:"#api-request-new-context-option-extra-http-headers",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(t.p,{children:"An object containing additional HTTP headers to be sent with every request. Defaults to none."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"httpCredentials"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"})," ",(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-http-credentials"}),(0,r.jsx)("a",{href:"#api-request-new-context-option-http-credentials",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"username"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"password"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"origin"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," ",(0,r.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,r.jsxs)(t.p,{children:["Restrain sending http credentials on specific origin (scheme://host",":port",")."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"send"}),' "unauthorized" | "always" ',(0,r.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,r.jsxs)(t.p,{children:["This option only applies to the requests sent from corresponding ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," and does not affect requests sent from the browser. ",(0,r.jsx)(t.code,{children:"'always'"})," - ",(0,r.jsx)(t.code,{children:"Authorization"})," header with basic authentication credentials will be sent with the each API request. ",(0,r.jsx)(t.code,{children:"'unauthorized"})," - the credentials are only sent when 401 (Unauthorized) response with ",(0,r.jsx)(t.code,{children:"WWW-Authenticate"})," header is received. Defaults to ",(0,r.jsx)(t.code,{children:"'unauthorized'"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Credentials for ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication",children:"HTTP authentication"}),". If no origin is specified, the username and password are sent to any servers upon unauthorized responses."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"ignoreHTTPSErrors"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"})," ",(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-ignore-https-errors"}),(0,r.jsx)("a",{href:"#api-request-new-context-option-ignore-https-errors",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(t.p,{children:["Whether to ignore HTTPS errors when sending network requests. Defaults to ",(0,r.jsx)(t.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"proxy"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"})," ",(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-proxy"}),(0,r.jsx)("a",{href:"#api-request-new-context-option-proxy",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"server"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n",(0,r.jsxs)(t.p,{children:["Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example ",(0,r.jsx)(t.code,{children:"http://myproxy.com:3128"})," or ",(0,r.jsx)(t.code,{children:"socks5://myproxy.com:3128"}),". Short form ",(0,r.jsx)(t.code,{children:"myproxy.com:3128"})," is considered an HTTP proxy."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"bypass"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," ",(0,r.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,r.jsxs)(t.p,{children:["Optional comma-separated domains to bypass proxy, for example ",(0,r.jsx)(t.code,{children:'".com, chromium.org, .domain.com"'}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"username"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," ",(0,r.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,r.jsx)(t.p,{children:"Optional username to use if HTTP proxy requires authentication."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"password"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," ",(0,r.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,r.jsx)(t.p,{children:"Optional password to use if HTTP proxy requires authentication."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Network proxy settings."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"storageState"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," | ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"})," ",(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-storage-state"}),(0,r.jsx)("a",{href:"#api-request-new-context-option-storage-state",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"cookies"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array",children:"Array"}),"<",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"}),">","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"name"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"value"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"domain"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"path"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"expires"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})]}),"\n",(0,r.jsx)(t.p,{children:"Unix time in seconds."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"httpOnly"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"secure"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"sameSite"}),' "Strict" | "Lax" | "None"']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"origins"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array",children:"Array"}),"<",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"}),">","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"origin"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"localStorage"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array",children:"Array"}),"<",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"}),">"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"name"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"value"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-browsercontext#browser-context-storage-state",children:"browserContext.storageState()"})," or ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext#api-request-context-storage-state",children:"apiRequestContext.storageState()"}),". Either a path to the file with saved storage, or the value returned by one of ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-browsercontext#browser-context-storage-state",children:"browserContext.storageState()"})," or ",(0,r.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext#api-request-context-storage-state",children:"apiRequestContext.storageState()"})," methods."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"timeout"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})," ",(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-timeout"}),(0,r.jsx)("a",{href:"#api-request-new-context-option-timeout",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(t.p,{children:["Maximum time in milliseconds to wait for the response. Defaults to ",(0,r.jsx)(t.code,{children:"30000"})," (30 seconds). Pass ",(0,r.jsx)(t.code,{children:"0"})," to disable timeout."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"userAgent"})," ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," ",(0,r.jsx)(t.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-user-agent"}),(0,r.jsx)("a",{href:"#api-request-new-context-option-user-agent",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(t.p,{children:"Specific user agent to use in this context."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise",children:"Promise"}),"<",(0,r.jsx)(t.a,{href:"/docs/next/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"}),">",(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-return"}),(0,r.jsx)("a",{href:"#api-request-new-context-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);