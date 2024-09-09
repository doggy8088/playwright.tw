"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6143],{4562:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(4848),i=a(6540),l=function(){return l=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},l.apply(this,arguments)};var r=i.forwardRef((function(e,t){var a=i.useState(!1),n=a[0],r=a[1],s=i.useState(!1),c=s[0],o=s[1],d=encodeURIComponent(e.id),h="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,m=e.title,u=e.poster||"hqdefault",p="&".concat(e.params)||0,v=e.muted?"&mute=1":"",g=e.announce||"Watch",f=e.webp?"webp":"jpg",x=e.webp?"vi_webp":"vi",j=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(x,"/").concat(h,"/").concat(u,".").concat(f):"https://i.ytimg.com/".concat(x,"/").concat(d,"/").concat(u,".").concat(f)),y=e.noCookie;y=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var b=e.playlist?"".concat(y,"/embed/videoseries?autoplay=1").concat(v,"&list=").concat(d).concat(p):"".concat(y,"/embed/").concat(d,"?autoplay=1&state=1").concat(v).concat(p),C=e.activatedClass||"lyt-activated",w=e.adNetwork||!1,k=e.aspectHeight||9,N=e.aspectWidth||16,_=e.iframeClass||"",A=e.playerClass||"lty-playbtn",E=e.wrapperClass||"yt-lite",T=e.onIframeAdded||function(){},F=e.rel?"prefetch":"preload",H=e.containerElement||"article";return i.useEffect((function(){c&&T()}),[c]),i.createElement(i.Fragment,null,i.createElement("link",{rel:F,href:j,as:"image"}),i.createElement(i.Fragment,null,n&&i.createElement(i.Fragment,null,i.createElement("link",{rel:"preconnect",href:y}),i.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),w&&i.createElement(i.Fragment,null,i.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),i.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),i.createElement(H,{onPointerOver:function(){n||r(!0)},onClick:function(){c||o(!0)},className:"".concat(E," ").concat(c?C:""),"data-title":m,style:l({backgroundImage:"url(".concat(j,")")},{"--aspect-ratio":"".concat(k/N*100,"%")})},i.createElement("button",{type:"button",className:A,"aria-label":"".concat(g," ").concat(m)}),c&&i.createElement("iframe",{ref:t,className:_,title:m,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:b})))}));const s="videoContainer_NvH5";const c=function({id:e,title:t,thumbnail:a}){return(0,n.jsx)("div",{className:s,children:(0,n.jsx)(r,{thumbnail:a,id:e,params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:t,poster:"maxresdefault",webp:!0})})}},7076:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(4848),i=(a(6540),a(8618));const l={nav:"nav_gg0Z"};const r=function({links:e}){return(0,n.jsx)("nav",{className:"container",children:(0,n.jsx)("ul",{className:l.nav,children:e.map((e=>(0,n.jsx)("li",{className:l.links,children:(0,n.jsx)(i.A,{href:e.href,children:e.label})})))})})}},611:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(4848);a(6540);const i=function({title:e,description:t}){return(0,n.jsxs)("section",{className:"margin-top--lg margin-bottom--lg text--center container",children:[(0,n.jsx)("h1",{children:e}),(0,n.jsx)("p",{children:t})]})}},3308:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(4848),i=(a(6540),a(4164)),l=a(8618),r=a(4562);const s={videoList:"videoList_jK3T",videoCardHeader:"videoCardHeader_Shf4",videoCardTitle:"videoCardTitle_l_Mb",videoCardTags:"videoCardTags_gzrd",videoCardHighlights:"videoCardHighlights_iL0g",tag:"tag_bF1g",speaker:"speaker_FGpP",language:"language_iFRo"};function c(e){const t=e.version.split(" & ");return`version-${t[t.length-1].replace(".","")}`}function o({video:e}){return(0,n.jsxs)("li",{className:"card shadow--md",children:[(0,n.jsx)("div",{className:s.videoCardVideo,children:e.id?(0,n.jsx)(r.A,{id:e.id,title:e.title,thumbnail:e.thumbnail}):(0,n.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("img",{src:e.src,alt:e.title})})}),(0,n.jsxs)("div",{className:"card__body",children:[e.conference||e.host?(0,n.jsxs)("div",{className:s.videoCardHeader,children:[(0,n.jsx)("h4",{className:s.videoCardTitle,children:e.conference||e.host}),e.year?(0,n.jsx)("span",{children:e.year}):null]}):null,e.version?(0,n.jsx)("div",{className:s.videoCardHeader,children:(0,n.jsx)(l.A,{href:`/docs/release-notes#${c(e)}`,children:(0,n.jsxs)("h4",{className:s.videoCardTitle,children:["Playwright v",e.version]})})}):null,e.title?(0,n.jsx)("p",{className:s.videoCardTitle,children:e.title}):null]}),(0,n.jsxs)("div",{className:"card__footer",children:[e.speakers?(0,n.jsx)(d,{video:e}):null,e.highlights?(0,n.jsx)("div",{className:s.videoCardHighlights,children:(0,n.jsx)(h,{video:e})}):null]})]},e.title)}function d({video:e}){return(0,n.jsxs)("div",{className:s.videoCardTags,children:[(0,n.jsx)("div",{children:e.speakers?e.speakers.map((e=>(0,n.jsxs)("span",{className:s.speaker,children:[e," \xa0"]}))):null}),e.language?(0,n.jsx)("span",{className:s.language,children:e.language}):null]})}function h({video:e}){return(0,n.jsx)("div",{className:s.videoCardHighlights,children:e.highlights?e.highlights.map((e=>(0,n.jsxs)("span",{className:s.tag,children:[e," \xa0"]},e))):null})}const m=function({videos:e}){return(0,n.jsx)("section",{className:"margin-top--lg margin-bottom--xl",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("ul",{className:(0,i.A)("clean-list",s.videoList),children:e.map((e=>(0,n.jsx)(o,{video:e},e.title)))})})})}},4911:(e,t,a)=>{a.d(t,{A:()=>n});const n=[{label:"\u7814\u8a0e\u6703\u5f71\u7247",href:"/community/conference-videos"},{label:"\u767c\u884c\u5f71\u7247",href:"/community/release-videos"},{label:"\u76f4\u64ad\u5f71\u7247",href:"/community/live-streams"},{label:"\u7cbe\u9078\u5f71\u7247",href:"/community/feature-videos"},{label:"\u6559\u5b78\u5f71\u7247",href:"/community/learn-videos"}]},5240:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(4848),i=(a(6540),a(2779)),l=a(3308),r=a(611),s=a(7076),c=a(4911);const o=[{title:"Trace Viewer",description:"",id:"yP6AnTxC34s",year:"2024"},{title:"Codegen",description:"",id:"5XIZPqKkdBA",year:"2024"},{title:"UI Mode",description:"",id:"d0u6XhXknzU",year:"2023"},{title:"Component Tests (preview)",description:"",id:"y3YxX4sFJbM",year:"2022"}],d="Feature Videos",h="Check out the latest Playwright feature videos";function m(){return(0,n.jsx)(i.A,{title:d,description:h,children:(0,n.jsxs)("main",{className:"margin-vert--lg",children:[(0,n.jsx)(r.A,{title:d,description:h}),(0,n.jsx)(s.A,{links:c.A}),(0,n.jsx)(l.A,{videos:o})]})})}}}]);