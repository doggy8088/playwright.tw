"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6053],{4421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(4848),c=r(8453),i=(r(4235),r(8328),r(3078),r(4562));const a={id:"trace-viewer-intro",title:"\u8ffd\u8e64\u6aa2\u8996\u5668"},l=void 0,s={id:"trace-viewer-intro",title:"\u8ffd\u8e64\u6aa2\u8996\u5668",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/trace-viewer-intro.mdx",sourceDirName:".",slug:"/trace-viewer-intro",permalink:"/docs/trace-viewer-intro",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"trace-viewer-intro",title:"\u8ffd\u8e64\u6aa2\u8996\u5668"},sidebar:"docs",previous:{title:"\u57f7\u884c\u548c\u5075\u932f\u6e2c\u8a66",permalink:"/docs/running-tests"},next:{title:"\u8a2d\u5b9a CI",permalink:"/docs/ci-intro"}},o={},d=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u8a18\u9304\u8ffd\u8e64",id:"\u8a18\u9304\u8ffd\u8e64",level:2},{value:"\u958b\u555f HTML \u5831\u544a",id:"\u958b\u555f-html-\u5831\u544a",level:2},{value:"\u958b\u555f\u8ffd\u8e64",id:"\u958b\u555f\u8ffd\u8e64",level:2},{value:"\u67e5\u770b\u8ffd\u8e64",id:"\u67e5\u770b\u8ffd\u8e64",level:2},{value:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,n.jsx)(t.p,{children:"Playwright Trace Viewer \u662f\u4e00\u500b GUI \u5de5\u5177\uff0c\u53ef\u8b93\u4f60\u63a2\u7d22\u5df2\u8a18\u9304\u7684 Playwright Traces \u6e2c\u8a66\uff0c\u9019\u610f\u5473\u8457\u4f60\u53ef\u4ee5\u5728\u6e2c\u8a66\u7684\u6bcf\u500b\u52d5\u4f5c\u4e2d\u4f86\u56de\u67e5\u770b\uff0c\u4e26\u76f4\u89c0\u5730\u770b\u5230\u6bcf\u500b\u52d5\u4f5c\u671f\u9593\u767c\u751f\u7684\u60c5\u6cc1\u3002"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"\u4f60\u5c07\u5b78\u5230"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u5982\u4f55\u8a18\u9304\u8ffd\u8e64"}),"\n",(0,n.jsx)(t.li,{children:"\u5982\u4f55\u958b\u555f HTML \u5831\u544a"}),"\n",(0,n.jsx)(t.li,{children:"\u5982\u4f55\u958b\u555f\u4e26\u67e5\u770b\u8ffd\u8e64"}),"\n"]}),"\n",(0,n.jsx)(i.A,{id:"yP6AnTxC34s",title:"\u67e5\u770b Playwright Traces"}),"\n",(0,n.jsx)(t.h2,{id:"\u8a18\u9304\u8ffd\u8e64",children:"\u8a18\u9304\u8ffd\u8e64"}),"\n",(0,n.jsxs)(t.p,{children:["\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c",(0,n.jsx)(t.a,{href:"/docs/trace-viewer#recording-a-trace-on-ci",children:"playwright.config"})," \u6587\u4ef6\u5c07\u5305\u542b\u5efa\u7acb\u6bcf\u500b\u6e2c\u8a66\u7684 ",(0,n.jsx)(t.code,{children:"trace.zip"})," \u6587\u4ef6\u6240\u9700\u7684\u914d\u7f6e\u3002\u8ffd\u8e64\u88ab\u8a2d\u5b9a\u70ba ",(0,n.jsx)(t.code,{children:"on-first-retry"})," \u57f7\u884c\uff0c\u9019\u610f\u5473\u8457\u5b83\u5011\u5c07\u5728\u7b2c\u4e00\u6b21\u91cd\u8a66\u5931\u6557\u7684\u6e2c\u8a66\u6642\u57f7\u884c\u3002\u6b64\u5916\uff0c\u7576\u5728 CI \u4e0a\u57f7\u884c\u6642\uff0c",(0,n.jsx)(t.code,{children:"retries"})," \u88ab\u8a2d\u7f6e\u70ba 2\uff0c\u800c\u5728\u672c\u5730\u57f7\u884c\u6642\u8a2d\u7f6e\u70ba 0\u3002\u9019\u610f\u5473\u8457\u8ffd\u8e64\u5c07\u5728\u7b2c\u4e00\u6b21\u91cd\u8a66\u5931\u6557\u7684\u6e2c\u8a66\u6642\u8a18\u9304\uff0c\u4f46\u4e0d\u6703\u5728\u7b2c\u4e00\u6b21\u57f7\u884c\u548c\u7b2c\u4e8c\u6b21\u91cd\u8a66\u6642\u8a18\u9304\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig } from '@playwright/test';\nexport default defineConfig({\n  retries: process.env.CI ? 2 : 0, // set to 2 when running on CI\n  // ...\n  use: {\n    trace: 'on-first-retry', // record traces on first retry of each test\n  },\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u8981\u4e86\u89e3\u66f4\u591a\u95dc\u65bc\u8a18\u9304\u8ffd\u8e64\u7684\u53ef\u7528\u9078\u9805\uff0c\u8acb\u67e5\u770b\u6211\u5011\u5728 ",(0,n.jsx)(t.a,{href:"/docs/trace-viewer",children:"Trace Viewer"})," \u4e0a\u7684\u8a73\u7d30\u6307\u5357\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u8ffd\u8e64\u901a\u5e38\u5728\u6301\u7e8c\u6574\u5408\uff08CI\uff09\u74b0\u5883\u4e2d\u57f7\u884c\uff0c\u56e0\u70ba\u5728\u672c\u5730\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(t.a,{href:"/docs/test-ui-mode",children:"UI Mode"})," \u4f86\u958b\u767c\u548c\u9664\u932f\u6e2c\u8a66\u3002\u7136\u800c\uff0c\u5982\u679c\u4f60\u60f3\u5728\u672c\u5730\u57f7\u884c\u8ffd\u8e64\u800c\u4e0d\u4f7f\u7528 ",(0,n.jsx)(t.a,{href:"/docs/test-ui-mode",children:"UI Mode"}),"\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"--trace on"})," \u5f37\u5236\u958b\u555f\u8ffd\u8e64\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright test --trace on\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u958b\u555f-html-\u5831\u544a",children:"\u958b\u555f HTML \u5831\u544a"}),"\n",(0,n.jsx)(t.p,{children:"HTML \u5831\u544a\u6703\u986f\u793a\u6240\u6709\u5df2\u57f7\u884c\u7684\u6e2c\u8a66\u5831\u544a\uff0c\u4ee5\u53ca\u5728\u54ea\u4e9b\u700f\u89bd\u5668\u4e0a\u57f7\u884c\u4ee5\u53ca\u6240\u82b1\u8cbb\u7684\u6642\u9593\u3002\u6e2c\u8a66\u53ef\u4ee5\u6309\u901a\u904e\u7684\u6e2c\u8a66\u3001\u5931\u6557\u7684\u6e2c\u8a66\u3001\u4e0d\u7a69\u5b9a\u7684\u6e2c\u8a66\u6216\u8df3\u904e\u7684\u6e2c\u8a66\u9032\u884c\u7be9\u9078\u3002\u4f60\u4e5f\u53ef\u4ee5\u641c\u5c0b\u7279\u5b9a\u7684\u6e2c\u8a66\u3002\u9ede\u64ca\u6e2c\u8a66\u6703\u6253\u958b\u8a73\u7d30\u8996\u5716\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u66f4\u591a\u6709\u95dc\u6e2c\u8a66\u7684\u8cc7\u8a0a\uff0c\u5982\u932f\u8aa4\u3001\u6e2c\u8a66\u6b65\u9a5f\u548c\u8ffd\u8e64\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npx playwright show-report\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u958b\u555f\u8ffd\u8e64",children:"\u958b\u555f\u8ffd\u8e64"}),"\n",(0,n.jsx)(t.p,{children:"\u5728 HTML \u5831\u544a\u4e2d\uff0c\u9ede\u64ca\u6e2c\u8a66\u540d\u7a31\u6a94\u6848\u540d\u7a31\u65c1\u908a\u7684\u8ffd\u8e64\u5716\u793a\u4ee5\u76f4\u63a5\u958b\u555f\u6240\u9700\u6e2c\u8a66\u7684\u8ffd\u8e64\u3002"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/a3da1fb5-6619-4c03-98aa-adf65c376525",alt:"playwright html report"})}),"\n",(0,n.jsxs)(t.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u9ede\u64ca\u6253\u958b\u6e2c\u8a66\u7684\u8a73\u7d30\u8996\u5716\uff0c\u5411\u4e0b\u6efe\u52d5\u5230",(0,n.jsx)(t.code,{children:"'Traces'"}),"\u6a19\u7c64\uff0c\u4e26\u901a\u904e\u9ede\u64ca\u8ffd\u8e64\u622a\u5716\u4f86\u6253\u958b\u8ffd\u8e64\u3002"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/2b583d6f-5241-4ecf-83a8-650072d4a201",alt:"playwright html report detailed view"})}),"\n",(0,n.jsxs)(t.p,{children:["\u8981\u4e86\u89e3\u6709\u95dc\u5831\u544a\u5668\u7684\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u67e5\u770b\u6211\u5011\u95dc\u65bc\u5831\u544a\u5668\u7684\u8a73\u7d30\u6307\u5357\uff0c\u5305\u62ec",(0,n.jsx)(t.a,{href:"/docs/test-reporters#html-reporter",children:"HTML \u5831\u544a\u5668"}),"\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u67e5\u770b\u8ffd\u8e64",children:"\u67e5\u770b\u8ffd\u8e64"}),"\n",(0,n.jsx)(t.p,{children:"\u67e5\u770b\u6e2c\u8a66\u7684\u8ffd\u8e64\uff0c\u901a\u904e\u9ede\u64ca\u6bcf\u500b\u64cd\u4f5c\u6216\u4f7f\u7528\u6642\u9593\u8ef8\u61f8\u505c\uff0c\u67e5\u770b\u64cd\u4f5c\u524d\u5f8c\u9801\u9762\u7684\u72c0\u614b\u3002\u6aa2\u67e5\u6e2c\u8a66\u6bcf\u4e00\u6b65\u9a5f\u671f\u9593\u7684\u65e5\u8a8c\u3001\u4f86\u6e90\u548c\u7db2\u8def\u3001\u932f\u8aa4\u548c\u63a7\u5236\u53f0\u3002\u8ffd\u8e64\u6aa2\u8996\u5668\u6703\u5efa\u7acb\u4e00\u500b DOM \u5feb\u7167\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u5b8c\u5168\u4e92\u52d5\u4e26\u6253\u958b\u700f\u89bd\u5668 DevTools \u6aa2\u67e5 HTML\u3001CSS \u7b49\u3002"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/10fe3585-8401-4051-b1c2-b2e92ac4c274",alt:"playwright trace viewer"})}),"\n",(0,n.jsxs)(t.p,{children:["\u8981\u4e86\u89e3\u66f4\u591a\u95dc\u65bc\u8ffd\u8e64\u7684\u8cc7\u8a0a\uff0c\u8acb\u67e5\u770b\u6211\u5011\u7684",(0,n.jsx)(t.a,{href:"/docs/trace-viewer",children:"\u8ffd\u8e64\u6aa2\u8996\u5668"}),"\u8a73\u7d30\u6307\u5357\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",children:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/ci-intro",children:"\u5728 CI \u4e0a\u4f7f\u7528 GitHub Actions \u57f7\u884c\u6e2c\u8a66"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/trace-viewer",children:"\u4e86\u89e3\u66f4\u591a\u95dc\u65bc Trace Viewer \u7684\u8cc7\u8a0a"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4562:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(4848),c=r(6540),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var c in t=arguments[r])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},i.apply(this,arguments)};var a=c.forwardRef((function(e,t){var r=c.useState(!1),n=r[0],a=r[1],l=c.useState(!1),s=l[0],o=l[1],d=encodeURIComponent(e.id),h="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,p=e.title,u=e.poster||"hqdefault",m="&".concat(e.params)||0,f=e.muted?"&mute=1":"",g=e.announce||"Watch",x=e.webp?"webp":"jpg",j=e.webp?"vi_webp":"vi",w=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(j,"/").concat(h,"/").concat(u,".").concat(x):"https://i.ytimg.com/".concat(j,"/").concat(d,"/").concat(u,".").concat(x)),v=e.noCookie;v=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var y=e.playlist?"".concat(v,"/embed/videoseries?autoplay=1").concat(f,"&list=").concat(d).concat(m):"".concat(v,"/embed/").concat(d,"?autoplay=1&state=1").concat(f).concat(m),b=e.activatedClass||"lyt-activated",C=e.adNetwork||!1,k=e.aspectHeight||9,T=e.aspectWidth||16,I=e.iframeClass||"",E=e.playerClass||"lty-playbtn",M=e.wrapperClass||"yt-lite",H=e.onIframeAdded||function(){},N=e.rel?"prefetch":"preload",L=e.containerElement||"article";return c.useEffect((function(){s&&H()}),[s]),c.createElement(c.Fragment,null,c.createElement("link",{rel:N,href:w,as:"image"}),c.createElement(c.Fragment,null,n&&c.createElement(c.Fragment,null,c.createElement("link",{rel:"preconnect",href:v}),c.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),C&&c.createElement(c.Fragment,null,c.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),c.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),c.createElement(L,{onPointerOver:function(){n||a(!0)},onClick:function(){s||o(!0)},className:"".concat(M," ").concat(s?b:""),"data-title":p,style:i({backgroundImage:"url(".concat(w,")")},{"--aspect-ratio":"".concat(k/T*100,"%")})},c.createElement("button",{type:"button",className:E,"aria-label":"".concat(g," ").concat(p)}),s&&c.createElement("iframe",{ref:t,className:I,title:p,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:y})))}));const l="videoContainer_NvH5";const s=function({id:e,title:t,thumbnail:r}){return(0,n.jsx)("div",{className:l,children:(0,n.jsx)(a,{thumbnail:r,id:e,params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:t,poster:"maxresdefault",webp:!0})})}}}]);