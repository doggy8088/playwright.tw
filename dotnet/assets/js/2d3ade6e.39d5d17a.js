"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9375],{4562:(e,t,i)=>{i.d(t,{A:()=>c});var n=i(4848),a=i(6540),l=function(){return l=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)};var r=a.forwardRef((function(e,t){var i=a.useState(!1),n=i[0],r=i[1],s=a.useState(!1),c=s[0],o=s[1],d=encodeURIComponent(e.id),h="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,m=e.title,u=e.poster||"hqdefault",g="&".concat(e.params)||0,p=e.muted?"&mute=1":"",v=e.announce||"Watch",f=e.webp?"webp":"jpg",w=e.webp?"vi_webp":"vi",x=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(w,"/").concat(h,"/").concat(u,".").concat(f):"https://i.ytimg.com/".concat(w,"/").concat(d,"/").concat(u,".").concat(f)),y=e.noCookie;y=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var j=e.playlist?"".concat(y,"/embed/videoseries?autoplay=1").concat(p,"&list=").concat(d).concat(g):"".concat(y,"/embed/").concat(d,"?autoplay=1&state=1").concat(p).concat(g),b=e.activatedClass||"lyt-activated",C=e.adNetwork||!1,k=e.aspectHeight||9,N=e.aspectWidth||16,_=e.iframeClass||"",E=e.playerClass||"lty-playbtn",A=e.wrapperClass||"yt-lite",P=e.onIframeAdded||function(){},T=e.rel?"prefetch":"preload",S=e.containerElement||"article";return a.useEffect((function(){c&&P()}),[c]),a.createElement(a.Fragment,null,a.createElement("link",{rel:T,href:x,as:"image"}),a.createElement(a.Fragment,null,n&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:y}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),C&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement(S,{onPointerOver:function(){n||r(!0)},onClick:function(){c||o(!0)},className:"".concat(A," ").concat(c?b:""),"data-title":m,style:l({backgroundImage:"url(".concat(x,")")},{"--aspect-ratio":"".concat(k/N*100,"%")})},a.createElement("button",{type:"button",className:E,"aria-label":"".concat(v," ").concat(m)}),c&&a.createElement("iframe",{ref:t,className:_,title:m,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:j})))}));const s="videoContainer_NvH5";const c=function({id:e,title:t,thumbnail:i}){return(0,n.jsx)("div",{className:s,children:(0,n.jsx)(r,{thumbnail:i,id:e,params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:t,poster:"maxresdefault",webp:!0})})}},7076:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(4848),a=(i(6540),i(8618));const l={nav:"nav_gg0Z"};const r=function({links:e}){return(0,n.jsx)("nav",{className:"container",children:(0,n.jsx)("ul",{className:l.nav,children:e.map((e=>(0,n.jsx)("li",{className:l.links,children:(0,n.jsx)(a.A,{href:e.href,children:e.label})})))})})}},611:(e,t,i)=>{i.d(t,{A:()=>a});var n=i(4848);i(6540);const a=function({title:e,description:t}){return(0,n.jsxs)("section",{className:"margin-top--lg margin-bottom--lg text--center container",children:[(0,n.jsx)("h1",{children:e}),(0,n.jsx)("p",{children:t})]})}},3308:(e,t,i)=>{i.d(t,{A:()=>m});var n=i(4848),a=(i(6540),i(4164)),l=i(8618),r=i(4562);const s={videoList:"videoList_jK3T",videoCardHeader:"videoCardHeader_Shf4",videoCardTitle:"videoCardTitle_l_Mb",videoCardTags:"videoCardTags_gzrd",videoCardHighlights:"videoCardHighlights_iL0g",tag:"tag_bF1g",speaker:"speaker_FGpP",language:"language_iFRo"};function c(e){const t=e.version.split(" & ");return`version-${t[t.length-1].replace(".","")}`}function o({video:e}){return(0,n.jsxs)("li",{className:"card shadow--md",children:[(0,n.jsx)("div",{className:s.videoCardVideo,children:e.id?(0,n.jsx)(r.A,{id:e.id,title:e.title,thumbnail:e.thumbnail}):(0,n.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("img",{src:e.src,alt:e.title})})}),(0,n.jsxs)("div",{className:"card__body",children:[e.conference||e.host?(0,n.jsxs)("div",{className:s.videoCardHeader,children:[(0,n.jsx)("h4",{className:s.videoCardTitle,children:e.conference||e.host}),e.year?(0,n.jsx)("span",{children:e.year}):null]}):null,e.version?(0,n.jsx)("div",{className:s.videoCardHeader,children:(0,n.jsx)(l.A,{href:`/docs/release-notes#${c(e)}`,children:(0,n.jsxs)("h4",{className:s.videoCardTitle,children:["Playwright v",e.version]})})}):null,e.title?(0,n.jsx)("p",{className:s.videoCardTitle,children:e.title}):null]}),(0,n.jsxs)("div",{className:"card__footer",children:[e.speakers?(0,n.jsx)(d,{video:e}):null,e.highlights?(0,n.jsx)("div",{className:s.videoCardHighlights,children:(0,n.jsx)(h,{video:e})}):null]})]},e.title)}function d({video:e}){return(0,n.jsxs)("div",{className:s.videoCardTags,children:[(0,n.jsx)("div",{children:e.speakers?e.speakers.map((e=>(0,n.jsxs)("span",{className:s.speaker,children:[e," \xa0"]}))):null}),e.language?(0,n.jsx)("span",{className:s.language,children:e.language}):null]})}function h({video:e}){return(0,n.jsx)("div",{className:s.videoCardHighlights,children:e.highlights?e.highlights.map((e=>(0,n.jsxs)("span",{className:s.tag,children:[e," \xa0"]},e))):null})}const m=function({videos:e}){return(0,n.jsx)("section",{className:"margin-top--lg margin-bottom--xl",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("ul",{className:(0,a.A)("clean-list",s.videoList),children:e.map((e=>(0,n.jsx)(o,{video:e},e.title)))})})})}},4911:(e,t,i)=>{i.d(t,{A:()=>n});const n=[{label:"\u7814\u8a0e\u6703\u5f71\u7247",href:"/community/conference-videos"},{label:"\u767c\u884c\u5f71\u7247",href:"/community/release-videos"},{label:"\u76f4\u64ad\u5f71\u7247",href:"/community/live-streams"},{label:"\u7cbe\u9078\u5f71\u7247",href:"/community/feature-videos"},{label:"\u6559\u5b78\u5f71\u7247",href:"/community/learn-videos"}]},1379:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var n=i(4848),a=(i(6540),i(2779)),l=i(3308),r=i(611),s=i(7076),c=i(4911);const o=[{title:"How to Run Tests in Playwright with the VS Code Extension",description:"",id:"mQmcIBMsc38",year:"2024"},{title:"How to Generate Tests in playwright with the VS Code Extension",description:"",id:"5XIZPqKkdBA",year:"2024"},{title:"Get Started with end-to-end testing: Playwright. Introduction",description:"",id:"4-LwodVujTg"},{title:"Get Started with end-to-end testing: Playwright. Getting Started",description:"",id:"JdMkZUePkSE"},{title:"Get Started with end-to-end testing: Playwright. Running Tests",description:"",id:"DcVYaZ8QDsw"},{title:"Get Started with end-to-end testing: Playwright. Writing Tests",description:"",id:"GKG9g_JGZPc"},{title:"Get Started with end-to-end testing: Playwright. Debugging Tests",description:"",id:"oYCSzYG-Bbg"},{title:"Get Started with end-to-end testing: Playwright. Running Tests on CI",description:"",id:"gRXPp6RuExU"}],d="Learn Videos",h="Check out the latest videos for learning Playwright";function m(){return(0,n.jsx)(a.A,{title:d,description:h,children:(0,n.jsxs)("main",{className:"margin-vert--lg",children:[(0,n.jsx)(r.A,{title:d,description:h}),(0,n.jsx)(s.A,{links:c.A}),(0,n.jsx)(l.A,{videos:o})]})})}}}]);