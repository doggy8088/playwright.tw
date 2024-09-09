"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2785],{8476:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>h,toc:()=>c});var i=n(4848),t=n(8453),r=n(4235),a=n(8328);n(3078);const l={id:"class-video",title:"Video"},d=void 0,h={id:"api/class-video",title:"Video",description:"When browser context is created with the recordVideo option, each page has a video object associated with it.",source:"@site/docs/api/class-video.mdx",sourceDirName:"api",slug:"/api/class-video",permalink:"/python/docs/next/api/class-video",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-video",title:"Video"},sidebar:"api",previous:{title:"Tracing",permalink:"/python/docs/next/api/class-tracing"},next:{title:"WebError",permalink:"/python/docs/next/api/class-weberror"}},o={},c=[{value:"Methods",id:"methods",level:2},{value:"delete",id:"video-delete",level:3},{value:"path",id:"video-path",level:3},{value:"save_as",id:"video-save-as",level:3}];function p(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["When browser context is created with the ",(0,i.jsx)(s.code,{children:"recordVideo"})," option, each page has a video object associated with it."]}),"\n",(0,i.jsxs)(r.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,i.jsx)(a.A,{value:"sync",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-py",children:"print(page.video.path())\n"})})}),(0,i.jsx)(a.A,{value:"async",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-py",children:"print(await page.video.path())\n"})})})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"video-delete",children:"delete"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.11"}),"\n",(0,i.jsx)("x-search",{children:"video.delete"}),"\n",(0,i.jsx)(s.p,{children:"Deletes the video file. Will wait for the video to finish if necessary."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"video.delete()\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"video-delete-return"}),(0,i.jsx)("a",{href:"#video-delete-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"video-path",children:"path"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,i.jsx)("x-search",{children:"video.path"}),"\n",(0,i.jsx)(s.p,{children:"Returns the file system path this video will be recorded to. The video is guaranteed to be written to the filesystem upon closing the browser context. This method throws when connected remotely."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"video.path()\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path",children:"pathlib.Path"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"video-path-return"}),(0,i.jsx)("a",{href:"#video-path-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"video-save-as",children:"save_as"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.11"}),"\n",(0,i.jsx)("x-search",{children:"video.save_as"}),"\n",(0,i.jsx)(s.p,{children:"Saves the video to a user-specified path. It is safe to call this method while the video is still in progress, or after the page has closed. This method waits until the page is closed and the video is fully saved."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"video.save_as(path)\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"path"})," ",(0,i.jsx)(s.a,{href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union",children:"Union"}),"[",(0,i.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"}),", ",(0,i.jsx)(s.a,{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path",children:"pathlib.Path"}),"]",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"video-save-as-option-path"}),(0,i.jsx)("a",{href:"#video-save-as-option-path",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"Path where the video should be saved."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"video-save-as-return"}),(0,i.jsx)("a",{href:"#video-save-as-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);