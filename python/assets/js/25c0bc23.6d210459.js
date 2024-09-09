"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7749],{2263:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>x,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var l=s(4848),d=s(8453),a=s(4235),o=s(8328);s(3078);const t={id:"class-download",title:"Download"},r=void 0,i={id:"api/class-download",title:"Download",description:'Download] objects are dispatched by page via the [page.on("download") event.',source:"@site/versioned_docs/version-stable/api/class-download.mdx",sourceDirName:"api",slug:"/api/class-download",permalink:"/python/docs/api/class-download",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"class-download",title:"Download"},sidebar:"api",previous:{title:"Dialog",permalink:"/python/docs/api/class-dialog"},next:{title:"ElementHandle",permalink:"/python/docs/api/class-elementhandle"}},h={},c=[{value:"Methods",id:"methods",level:2},{value:"cancel",id:"download-cancel",level:3},{value:"delete",id:"download-delete",level:3},{value:"failure",id:"download-failure",level:3},{value:"path",id:"download-path",level:3},{value:"save_as",id:"download-save-as",level:3},{value:"Properties",id:"properties",level:2},{value:"page",id:"download-page",level:3},{value:"suggested_filename",id:"download-suggested-filename",level:3},{value:"url",id:"download-url",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/python/docs/api/class-download",title:"Download",children:"Download"})," objects are dispatched by page via the ",(0,l.jsx)(n.a,{href:"/python/docs/api/class-page#page-event-download",children:'page.on("download")'})," event."]}),"\n",(0,l.jsx)(n.p,{children:"All the downloaded files belonging to the browser context are deleted when the browser context is closed."}),"\n",(0,l.jsx)(n.p,{children:"Download event is emitted once the download starts. Download path becomes available once download completes."}),"\n",(0,l.jsxs)(a.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,l.jsx)(o.A,{value:"sync",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:'# Start waiting for the download\nwith page.expect_download() as download_info:\n    # Perform the action that initiates download\n    page.get_by_text("Download file").click()\ndownload = download_info.value\n\n# Wait for the download process to complete and save the downloaded file somewhere\ndownload.save_as("/path/to/save/at/" + download.suggested_filename)\n'})})}),(0,l.jsx)(o.A,{value:"async",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:'# Start waiting for the download\nasync with page.expect_download() as download_info:\n    # Perform the action that initiates download\n    await page.get_by_text("Download file").click()\ndownload = await download_info.value\n\n# Wait for the download process to complete and save the downloaded file somewhere\nawait download.save_as("/path/to/save/at/" + download.suggested_filename)\n'})})})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsx)(n.h3,{id:"download-cancel",children:"cancel"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.13"}),"\n",(0,l.jsx)("x-search",{children:"download.cancel"}),"\n",(0,l.jsxs)(n.p,{children:["Cancels a download. Will not fail if the download is already finished or canceled. Upon successful cancellations, ",(0,l.jsx)(n.code,{children:"download.failure()"})," would resolve to ",(0,l.jsx)(n.code,{children:"'canceled'"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Usage"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"download.cancel()\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"download-cancel-return"}),(0,l.jsx)("a",{href:"#download-cancel-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"download-delete",children:"delete"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,l.jsx)("x-search",{children:"download.delete"}),"\n",(0,l.jsx)(n.p,{children:"Deletes the downloaded file. Will wait for the download to finish if necessary."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Usage"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"download.delete()\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"download-delete-return"}),(0,l.jsx)("a",{href:"#download-delete-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"download-failure",children:"failure"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,l.jsx)("x-search",{children:"download.failure"}),"\n",(0,l.jsx)(n.p,{children:"Returns download error if any. Will wait for the download to finish if necessary."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Usage"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"download.failure()\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"})," | ",(0,l.jsx)(n.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"download-failure-return"}),(0,l.jsx)("a",{href:"#download-failure-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"download-path",children:"path"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,l.jsx)("x-search",{children:"download.path"}),"\n",(0,l.jsx)(n.p,{children:"Returns path to the downloaded file for a successful download, or throws for a failed/canceled download. The method will wait for the download to finish if necessary. The method throws when connected remotely."}),"\n",(0,l.jsxs)(n.p,{children:["Note that the download's file name is a random GUID, use ",(0,l.jsx)(n.a,{href:"/python/docs/api/class-download#download-suggested-filename",children:"download.suggested_filename"})," to get suggested file name."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Usage"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"download.path()\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path",children:"pathlib.Path"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"download-path-return"}),(0,l.jsx)("a",{href:"#download-path-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"download-save-as",children:"save_as"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,l.jsx)("x-search",{children:"download.save_as"}),"\n",(0,l.jsx)(n.p,{children:"Copy the download to a user-specified path. It is safe to call this method while the download is still in progress. Will wait for the download to finish if necessary."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Usage"})}),"\n",(0,l.jsxs)(a.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,l.jsx)(o.A,{value:"sync",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:'download.save_as("/path/to/save/at/" + download.suggested_filename)\n'})})}),(0,l.jsx)(o.A,{value:"async",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:'await download.save_as("/path/to/save/at/" + download.suggested_filename)\n'})})})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Arguments"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"path"})," ",(0,l.jsx)(n.a,{href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union",children:"Union"}),"[",(0,l.jsx)(n.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"}),", ",(0,l.jsx)(n.a,{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path",children:"pathlib.Path"}),"]",(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"download-save-as-option-path"}),(0,l.jsx)("a",{href:"#download-save-as-option-path",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsx)(n.p,{children:"Path where the download should be copied."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"download-save-as-return"}),(0,l.jsx)("a",{href:"#download-save-as-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsx)(n.h3,{id:"download-page",children:"page"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.12"}),"\n",(0,l.jsx)("x-search",{children:"download.page"}),"\n",(0,l.jsx)(n.p,{children:"Get the page that the download belongs to."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Usage"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"download.page\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/python/docs/api/class-page",title:"Page",children:"Page"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"download-page-return"}),(0,l.jsx)("a",{href:"#download-page-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"download-suggested-filename",children:"suggested_filename"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,l.jsx)("x-search",{children:"download.suggested_filename"}),"\n",(0,l.jsxs)(n.p,{children:["Returns suggested filename for this download. It is typically computed by the browser from the ",(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition",children:(0,l.jsx)(n.code,{children:"Content-Disposition"})})," response header or the ",(0,l.jsx)(n.code,{children:"download"})," attribute. See the spec on ",(0,l.jsx)(n.a,{href:"https://html.spec.whatwg.org/#downloading-resources",children:"whatwg"}),". Different browsers can use different logic for computing it."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Usage"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"download.suggested_filename\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"download-suggested-filename-return"}),(0,l.jsx)("a",{href:"#download-suggested-filename-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"download-url",children:"url"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,l.jsx)("x-search",{children:"download.url"}),"\n",(0,l.jsx)(n.p,{children:"Returns downloaded url."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Usage"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"download.url\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"download-url-return"}),(0,l.jsx)("a",{href:"#download-url-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}}}]);