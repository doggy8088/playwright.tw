"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7803],{9018:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=s(4848),a=s(8453);s(4235),s(8328),s(3078);const i={id:"class-formdata",title:"FormData"},r=void 0,l={id:"api/class-formdata",title:"FormData",description:"The [FormData] is used create form data that is sent via [APIRequestContext].",source:"@site/versioned_docs/version-stable/api/class-formdata.mdx",sourceDirName:"api",slug:"/api/class-formdata",permalink:"/dotnet/docs/api/class-formdata",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"class-formdata",title:"FormData"},sidebar:"api",previous:{title:"FileChooser",permalink:"/dotnet/docs/api/class-filechooser"},next:{title:"Frame",permalink:"/dotnet/docs/api/class-frame"}},d={},o=[{value:"Methods",id:"methods",level:2},{value:"Append",id:"form-data-append",level:3},{value:"Set",id:"form-data-set",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-formdata",title:"FormData",children:"FormData"})," is used create form data that is sent via ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"}),"."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.h3,{id:"form-data-append",children:"Append"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.44"}),"\n",(0,n.jsx)("x-search",{children:"formData.Append"}),"\n",(0,n.jsxs)(t.p,{children:["Appends a new value onto an existing key inside a FormData object, or adds the key if it does not already exist. File values can be passed either as ",(0,n.jsx)(t.code,{children:"Path"})," or as ",(0,n.jsx)(t.code,{children:"FilePayload"}),". Multiple fields with the same name can be added."]}),"\n",(0,n.jsxs)(t.p,{children:["The difference between ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-formdata#form-data-set",children:"FormData.Set()"})," and ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-formdata#form-data-append",children:"FormData.Append()"})," is that if the specified key already exists, ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-formdata#form-data-set",children:"FormData.Set()"})," will overwrite all existing values with the new one, whereas ",(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-formdata#form-data-append",children:"FormData.Append()"})," will append the new value onto the end of the existing set of values."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'var multipart = Context.APIRequest.CreateFormData();\n// Only name and value are set.\nmultipart.Append("firstName", "John");\n// Name, value, filename and Content-Type are set.\nmultipart.Append("attachment", new FilePayload()\n{\n    Name = "pic.jpg",\n    MimeType = "image/jpeg",\n    Buffer = File.ReadAllBytes("john.jpg")\n});\n// Name, value, filename and Content-Type are set.\nmultipart.Append("attachment", new FilePayload()\n{\n    Name = "table.csv",\n    MimeType = "text/csv",\n    Buffer = File.ReadAllBytes("my-tble.csv")\n});\nawait Page.APIRequest.PostAsync("https://localhost/submit", new() { Multipart = multipart });\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Usage"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"FormData.Append(name, value);\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Arguments"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"name"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"form-data-append-option-name"}),(0,n.jsx)("a",{href:"#form-data-append-option-name",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsx)(t.p,{children:"Field name."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"value"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"})," | ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool",children:"bool"})," | ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int",children:"int"})," | Value",(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"form-data-append-option-value"}),(0,n.jsx)("a",{href:"#form-data-append-option-value",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Name"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"})]}),"\n",(0,n.jsx)(t.p,{children:"File name"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"MimeType"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"})]}),"\n",(0,n.jsx)(t.p,{children:"File type"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Buffer"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.byte",title:"byte",children:"byte"}),"[]"]}),"\n",(0,n.jsx)(t.p,{children:"File content"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Field value."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-formdata",title:"FormData",children:"FormData"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"form-data-append-return"}),(0,n.jsx)("a",{href:"#form-data-append-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"form-data-set",children:"Set"}),"\n",(0,n.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.18"}),"\n",(0,n.jsx)("x-search",{children:"formData.Set"}),"\n",(0,n.jsxs)(t.p,{children:["Sets a field on the form. File values can be passed either as ",(0,n.jsx)(t.code,{children:"Path"})," or as ",(0,n.jsx)(t.code,{children:"FilePayload"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'var multipart = Context.APIRequest.CreateFormData();\n// Only name and value are set.\nmultipart.Set("firstName", "John");\n// Name, value, filename and Content-Type are set.\nmultipart.Set("profilePicture", new FilePayload()\n{\n    Name = "john.jpg",\n    MimeType = "image/jpeg",\n    Buffer = File.ReadAllBytes("john.jpg")\n});\nmultipart.Set("age", 30);\nawait Page.APIRequest.PostAsync("https://localhost/submit", new() { Multipart = multipart });\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Usage"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:"FormData.Set(name, value);\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Arguments"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"name"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"form-data-set-option-name"}),(0,n.jsx)("a",{href:"#form-data-set-option-name",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsx)(t.p,{children:"Field name."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"value"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"})," | ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool",children:"bool"})," | ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.int32",title:"int",children:"int"})," | Value",(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"form-data-set-option-value"}),(0,n.jsx)("a",{href:"#form-data-set-option-value",class:"list-anchor",children:"#"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Name"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"})]}),"\n",(0,n.jsx)(t.p,{children:"File name"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"MimeType"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"})]}),"\n",(0,n.jsx)(t.p,{children:"File type"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Buffer"})," ",(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.byte",title:"byte",children:"byte"}),"[]"]}),"\n",(0,n.jsx)(t.p,{children:"File content"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Field value."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/dotnet/docs/api/class-formdata",title:"FormData",children:"FormData"}),(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"form-data-set-return"}),(0,n.jsx)("a",{href:"#form-data-set-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);