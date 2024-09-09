"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8441],{7971:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=s(4848),i=s(8453);s(4235),s(8328),s(3078);const r={id:"class-apirequest",title:"APIRequest"},o=void 0,c={id:"api/class-apirequest",title:"APIRequest",description:"Exposes API that can be used for the Web API testing. This class is used for creating APIRequestContext] instance which in turn can be used for sending web requests. An instance of this class can be obtained via [Playwright.APIRequest. For more information see [APIRequestContext].",source:"@site/versioned_docs/version-stable/api/class-apirequest.mdx",sourceDirName:"api",slug:"/api/class-apirequest",permalink:"/dotnet/docs/api/class-apirequest",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"class-apirequest",title:"APIRequest"},sidebar:"api",previous:{title:"Playwright",permalink:"/dotnet/docs/api/class-playwright"},next:{title:"APIRequestContext",permalink:"/dotnet/docs/api/class-apirequestcontext"}},a={},l=[{value:"Methods",id:"methods",level:2},{value:"NewContextAsync",id:"api-request-new-context",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Exposes API that can be used for the Web API testing. This class is used for creating ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," instance which in turn can be used for sending web requests. An instance of this class can be obtained via ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-playwright#playwright-request",children:"Playwright.APIRequest"}),". For more information see ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"}),"."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.h3,{id:"api-request-new-context",children:"NewContextAsync"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.16"}),"\n",(0,n.jsx)("x-search",{children:"apiRequest.NewContextAsync"}),"\n",(0,n.jsxs)(t.p,{children:["Creates new instances of ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Usage"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"await ApiRequest.NewContextAsync(options);\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Arguments"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"options"})," ",(0,n.jsx)(t.code,{children:"ApiRequestNewContextOptions?"})," ",(0,n.jsx)(t.em,{children:"(optional)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"BaseURL"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"? ",(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-base-url"}),(0,n.jsx)("a",{href:"#api-request-new-context-option-base-url",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["Methods like ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-apirequestcontext#api-request-context-get",children:"ApiRequestContext.GetAsync()"})," take the base URL into consideration by using the ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/URL",children:(0,n.jsx)(t.code,{children:"URL()"})})," constructor for building the corresponding URL. Examples:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["baseURL: ",(0,n.jsx)(t.code,{children:"http://localhost:3000"})," and sending request to ",(0,n.jsx)(t.code,{children:"/bar.html"})," results in ",(0,n.jsx)(t.code,{children:"http://localhost:3000/bar.html"})]}),"\n",(0,n.jsxs)(t.li,{children:["baseURL: ",(0,n.jsx)(t.code,{children:"http://localhost:3000/foo/"})," and sending request to ",(0,n.jsx)(t.code,{children:"./bar.html"})," results in ",(0,n.jsx)(t.code,{children:"http://localhost:3000/foo/bar.html"})]}),"\n",(0,n.jsxs)(t.li,{children:["baseURL: ",(0,n.jsx)(t.code,{children:"http://localhost:3000/foo"})," (without trailing slash) and navigating to ",(0,n.jsx)(t.code,{children:"./bar.html"})," results in ",(0,n.jsx)(t.code,{children:"http://localhost:3000/bar.html"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"ClientCertificates"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable",title:"IEnumerable",children:"IEnumerable"}),"?<ClientCertificates> ",(0,n.jsx)(t.em,{children:"(optional)"})," ",(0,n.jsx)("font",{size:"2",children:"Added in: 1.46"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-client-certificates"}),(0,n.jsx)("a",{href:"#api-request-new-context-option-client-certificates",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Origin"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"})]}),"\n",(0,n.jsxs)(t.p,{children:["Exact origin that the certificate is valid for. Origin includes ",(0,n.jsx)(t.code,{children:"https"})," protocol, a hostname and optionally a port."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"CertPath"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"? ",(0,n.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,n.jsx)(t.p,{children:"Path to the file with the certificate in PEM format."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Cert"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.byte",title:"byte",children:"byte"}),"[]? ",(0,n.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,n.jsx)(t.p,{children:"Direct value of the certificate in PEM format."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"KeyPath"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"? ",(0,n.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,n.jsx)(t.p,{children:"Path to the file with the private key in PEM format."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Key"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.byte",title:"byte",children:"byte"}),"[]? ",(0,n.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,n.jsx)(t.p,{children:"Direct value of the private key in PEM format."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"PfxPath"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"? ",(0,n.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,n.jsx)(t.p,{children:"Path to the PFX or PKCS12 encoded private key and certificate chain."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Pfx"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.byte",title:"byte",children:"byte"}),"[]? ",(0,n.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,n.jsx)(t.p,{children:"Direct value of the PFX or PKCS12 encoded private key and certificate chain."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Passphrase"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"? ",(0,n.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,n.jsx)(t.p,{children:"Passphrase for the private key (PEM or PFX)."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"TLS Client Authentication allows the server to request a client certificate and verify it."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Details"})}),"\n",(0,n.jsxs)(t.p,{children:["An array of client certificates to be used. Each certificate object must have either both ",(0,n.jsx)(t.code,{children:"certPath"})," and ",(0,n.jsx)(t.code,{children:"keyPath"}),", a single ",(0,n.jsx)(t.code,{children:"pfxPath"}),", or their corresponding direct value equivalents (",(0,n.jsx)(t.code,{children:"cert"})," and ",(0,n.jsx)(t.code,{children:"key"}),", or ",(0,n.jsx)(t.code,{children:"pfx"}),"). Optionally, ",(0,n.jsx)(t.code,{children:"passphrase"})," property should be provided if the certificate is encrypted. The ",(0,n.jsx)(t.code,{children:"origin"})," property should be provided with an exact match to the request origin that the certificate is valid for."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Using Client Certificates in combination with Proxy Servers is not supported."})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["When using WebKit on macOS, accessing ",(0,n.jsx)(t.code,{children:"localhost"})," will not pick up client certificates. You can make it work by replacing ",(0,n.jsx)(t.code,{children:"localhost"})," with ",(0,n.jsx)(t.code,{children:"local.playwright"}),"."]})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"ExtraHTTPHeaders"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.idictionary",title:"IDictionary",children:"IDictionary"}),"?<",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),", ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"> ",(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-extra-http-headers"}),(0,n.jsx)("a",{href:"#api-request-new-context-option-extra-http-headers",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsx)(t.p,{children:"An object containing additional HTTP headers to be sent with every request. Defaults to none."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"HttpCredentials"})," HttpCredentials? ",(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-http-credentials"}),(0,n.jsx)("a",{href:"#api-request-new-context-option-http-credentials",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Username"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Password"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Origin"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"? ",(0,n.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,n.jsxs)(t.p,{children:["Restrain sending http credentials on specific origin (scheme://host",":port",")."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Send"})," ",(0,n.jsx)(t.code,{children:"enum HttpCredentialsSend { Unauthorized, Always }?"})," ",(0,n.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,n.jsxs)(t.p,{children:["This option only applies to the requests sent from corresponding ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})," and does not affect requests sent from the browser. ",(0,n.jsx)(t.code,{children:"'always'"})," - ",(0,n.jsx)(t.code,{children:"Authorization"})," header with basic authentication credentials will be sent with the each API request. ",(0,n.jsx)(t.code,{children:"'unauthorized"})," - the credentials are only sent when 401 (Unauthorized) response with ",(0,n.jsx)(t.code,{children:"WWW-Authenticate"})," header is received. Defaults to ",(0,n.jsx)(t.code,{children:"'unauthorized'"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Credentials for ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication",children:"HTTP authentication"}),". If no origin is specified, the username and password are sent to any servers upon unauthorized responses."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"IgnoreHTTPSErrors"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool",children:"bool"}),"? ",(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-ignore-https-errors"}),(0,n.jsx)("a",{href:"#api-request-new-context-option-ignore-https-errors",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["Whether to ignore HTTPS errors when sending network requests. Defaults to ",(0,n.jsx)(t.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Proxy"})," Proxy? ",(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-proxy"}),(0,n.jsx)("a",{href:"#api-request-new-context-option-proxy",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Server"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"})]}),"\n",(0,n.jsxs)(t.p,{children:["Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example ",(0,n.jsx)(t.code,{children:"http://myproxy.com:3128"})," or ",(0,n.jsx)(t.code,{children:"socks5://myproxy.com:3128"}),". Short form ",(0,n.jsx)(t.code,{children:"myproxy.com:3128"})," is considered an HTTP proxy."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Bypass"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"? ",(0,n.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,n.jsxs)(t.p,{children:["Optional comma-separated domains to bypass proxy, for example ",(0,n.jsx)(t.code,{children:'".com, chromium.org, .domain.com"'}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Username"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"? ",(0,n.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,n.jsx)(t.p,{children:"Optional username to use if HTTP proxy requires authentication."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Password"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"? ",(0,n.jsx)(t.em,{children:"(optional)"})]}),"\n",(0,n.jsx)(t.p,{children:"Optional password to use if HTTP proxy requires authentication."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Network proxy settings."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"StorageState"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"? ",(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-storage-state"}),(0,n.jsx)("a",{href:"#api-request-new-context-option-storage-state",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-browsercontext#browser-context-storage-state",children:"BrowserContext.StorageStateAsync()"})," or ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-apirequestcontext#api-request-context-storage-state",children:"ApiRequestContext.StorageStateAsync()"}),". Either a path to the file with saved storage, or the value returned by one of ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-browsercontext#browser-context-storage-state",children:"BrowserContext.StorageStateAsync()"})," or ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-apirequestcontext#api-request-context-storage-state",children:"ApiRequestContext.StorageStateAsync()"})," methods."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"StorageStatePath"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"? ",(0,n.jsx)(t.em,{children:"(optional)"})," ",(0,n.jsx)("font",{size:"2",children:"Added in: v1.18"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-storage-state-path"}),(0,n.jsx)("a",{href:"#api-request-new-context-option-storage-state-path",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-browsercontext#browser-context-storage-state",children:"BrowserContext.StorageStateAsync()"}),". Path to the file with saved storage state."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Timeout"})," [float]? ",(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-timeout"}),(0,n.jsx)("a",{href:"#api-request-new-context-option-timeout",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(t.p,{children:["Maximum time in milliseconds to wait for the response. Defaults to ",(0,n.jsx)(t.code,{children:"30000"})," (30 seconds). Pass ",(0,n.jsx)(t.code,{children:"0"})," to disable timeout."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"UserAgent"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),"? ",(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-user-agent"}),(0,n.jsx)("a",{href:"#api-request-new-context-option-user-agent",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsx)(t.p,{children:"Specific user agent to use in this context."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"api-request-new-context-return"}),(0,n.jsx)("a",{href:"#api-request-new-context-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);