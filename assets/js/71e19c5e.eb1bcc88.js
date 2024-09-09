"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6923],{1493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(4848),a=n(8453),c=(n(4235),n(8328),n(3078),n(4562));const o={id:"clock",title:"Clock"},l=void 0,s={id:"clock",title:"Clock",description:"Introduction",source:"@site/docs/clock.mdx",sourceDirName:".",slug:"/clock",permalink:"/docs/next/clock",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"clock",title:"Clock"},sidebar:"docs",previous:{title:"Chrome extensions",permalink:"/docs/next/chrome-extensions"},next:{title:"Components (experimental)",permalink:"/docs/next/test-components"}},r={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Test with predefined time",id:"test-with-predefined-time",level:2},{value:"Consistent time and timers",id:"consistent-time-and-timers",level:2},{value:"Test inactivity monitoring",id:"test-inactivity-monitoring",level:2},{value:"Tick through time manually, firing all the timers consistently",id:"tick-through-time-manually-firing-all-the-timers-consistently",level:2},{value:"Related Videos",id:"related-videos",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["Accurately simulating time-dependent behavior is essential for verifying the correctness of applications. Utilizing ",(0,i.jsx)(t.a,{href:"/docs/next/api/class-clock",title:"Clock",children:"Clock"})," functionality allows developers to manipulate and control time within tests, enabling the precise validation of features such as rendering time, timeouts, scheduled tasks without the delays and variability of real-time execution."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"/docs/next/api/class-clock",title:"Clock",children:"Clock"})," API provides the following methods to control time:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"setFixedTime"}),": Sets the fixed time for ",(0,i.jsx)(t.code,{children:"Date.now()"})," and ",(0,i.jsx)(t.code,{children:"new Date()"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"install"}),": initializes the clock and allows you to:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"pauseAt"}),": Pauses the time at a specific time."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"fastForward"}),": Fast forwards the time."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"runFor"}),": Runs the time for a specific duration."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"resume"}),": Resumes the time."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"setSystemTime"}),": Sets the current system time."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The recommended approach is to use ",(0,i.jsx)(t.code,{children:"setFixedTime"})," to set the time to a specific value. If that doesn't work for your use case, you can use ",(0,i.jsx)(t.code,{children:"install"})," which allows you to pause time later on, fast forward it, tick it, etc. ",(0,i.jsx)(t.code,{children:"setSystemTime"})," is only recommended for advanced use cases."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/next/api/class-page#page-clock",children:"page.clock"})," overrides native global classes and functions related to time allowing them to be manually controlled:   - ",(0,i.jsx)(t.code,{children:"Date"}),"   - ",(0,i.jsx)(t.code,{children:"setTimeout"}),"   - ",(0,i.jsx)(t.code,{children:"clearTimeout"}),"   - ",(0,i.jsx)(t.code,{children:"setInterval"}),"   - ",(0,i.jsx)(t.code,{children:"clearInterval"}),"   - ",(0,i.jsx)(t.code,{children:"requestAnimationFrame"}),"   - ",(0,i.jsx)(t.code,{children:"cancelAnimationFrame"}),"   - ",(0,i.jsx)(t.code,{children:"requestIdleCallback"}),"   - ",(0,i.jsx)(t.code,{children:"cancelIdleCallback"}),"   - ",(0,i.jsx)(t.code,{children:"performance"}),"   - ",(0,i.jsx)(t.code,{children:"Event.timeStamp"})]})}),"\n",(0,i.jsx)(t.h2,{id:"test-with-predefined-time",children:"Test with predefined time"}),"\n",(0,i.jsxs)(t.p,{children:["Often you only need to fake ",(0,i.jsx)(t.code,{children:"Date.now"})," while keeping the timers going. That way the time flows naturally, but ",(0,i.jsx)(t.code,{children:"Date.now"})," always returns a fixed value."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<div id="current-time" data-testid="current-time"></div>\n<script>\n  const renderTime = () => {\n    document.getElementById(\'current-time\').textContent =\n        new Date().toLocaleString();\n  };\n  setInterval(renderTime, 1000);\n<\/script>\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"await page.clock.setFixedTime(new Date('2024-02-02T10:00:00'));\nawait page.goto('http://localhost:3333');\nawait expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:00:00 AM');\n\nawait page.clock.setFixedTime(new Date('2024-02-02T10:30:00'));\n// We know that the page has a timer that updates the time every second.\nawait expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:30:00 AM');\n"})}),"\n",(0,i.jsx)(t.h2,{id:"consistent-time-and-timers",children:"Consistent time and timers"}),"\n",(0,i.jsxs)(t.p,{children:["Sometimes your timers depend on ",(0,i.jsx)(t.code,{children:"Date.now"})," and are confused when the ",(0,i.jsx)(t.code,{children:"Date.now"})," value does not change over time. In this case, you can install the clock and fast forward to the time of interest when testing."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<div id="current-time" data-testid="current-time"></div>\n<script>\n  const renderTime = () => {\n    document.getElementById(\'current-time\').textContent =\n        new Date().toLocaleString();\n  };\n  setInterval(renderTime, 1000);\n<\/script>\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// Initialize clock with some time before the test time and let the page load\n// naturally. `Date.now` will progress as the timers fire.\nawait page.clock.install({ time: new Date('2024-02-02T08:00:00') });\nawait page.goto('http://localhost:3333');\n\n// Pretend that the user closed the laptop lid and opened it again at 10am,\n// Pause the time once reached that point.\nawait page.clock.pauseAt(new Date('2024-02-02T10:00:00'));\n\n// Assert the page state.\nawait expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:00:00 AM');\n\n// Close the laptop lid again and open it at 10:30am.\nawait page.clock.fastForward('30:00');\nawait expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:30:00 AM');\n"})}),"\n",(0,i.jsx)(t.h2,{id:"test-inactivity-monitoring",children:"Test inactivity monitoring"}),"\n",(0,i.jsx)(t.p,{children:"Inactivity monitoring is a common feature in web applications that logs out users after a period of inactivity. Testing this feature can be tricky because you need to wait for a long time to see the effect. With the help of the clock, you can speed up time and test this feature quickly."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<div id=\"remaining-time\" data-testid=\"remaining-time\"></div>\n<script>\n  const endTime = Date.now() + 5 * 60_000;\n  const renderTime = () => {\n    const diffInSeconds = Math.round((endTime - Date.now()) / 1000);\n    if (diffInSeconds <= 0) {\n      document.getElementById('remaining-time').textContent =\n        'You have been logged out due to inactivity.';\n    } else {\n      document.getElementById('remaining-time').textContent =\n        `You will be logged out in ${diffInSeconds} seconds.`;\n    }\n    setTimeout(renderTime, 1000);\n  };\n  renderTime();\n<\/script>\n<button type=\"button\">Interaction</button>\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// Initial time does not matter for the test, so we can pick current time.\nawait page.clock.install();\nawait page.goto('http://localhost:3333');\n// Interact with the page\nawait page.getByRole('button').click();\n\n// Fast forward time 5 minutes as if the user did not do anything.\n// Fast forward is like closing the laptop lid and opening it after 5 minutes.\n// All the timers due will fire once immediately, as in the real browser.\nawait page.clock.fastForward('05:00');\n\n// Check that the user was logged out automatically.\nawait expect(page.getByText('You have been logged out due to inactivity.')).toBeVisible();\n"})}),"\n",(0,i.jsx)(t.h2,{id:"tick-through-time-manually-firing-all-the-timers-consistently",children:"Tick through time manually, firing all the timers consistently"}),"\n",(0,i.jsx)(t.p,{children:"In rare cases, you may want to tick through time manually, firing all timers and animation frames in the process to achieve a fine-grained control over the passage of time."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<div id="current-time" data-testid="current-time"></div>\n<script>\n  const renderTime = () => {\n    document.getElementById(\'current-time\').textContent =\n        new Date().toLocaleString();\n  };\n  setInterval(renderTime, 1000);\n<\/script>\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"// Initialize clock with a specific time, let the page load naturally.\nawait page.clock.install({ time: new Date('2024-02-02T08:00:00') });\nawait page.goto('http://localhost:3333');\n\n// Pause the time flow, stop the timers, you now have manual control\n// over the page time.\nawait page.clock.pauseAt(new Date('2024-02-02T10:00:00'));\nawait expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:00:00 AM');\n\n// Tick through time manually, firing all timers in the process.\n// In this case, time will be updated in the screen 2 times.\nawait page.clock.runFor(2000);\nawait expect(page.getByTestId('current-time')).toHaveText('2/2/2024, 10:00:02 AM');\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-videos",children:"Related Videos"}),"\n",(0,i.jsx)(c.A,{id:"54_aC-rVKHg",title:"Playwright 1.45"})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},4562:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(4848),a=n(6540),c=function(){return c=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)};var o=a.forwardRef((function(e,t){var n=a.useState(!1),i=n[0],o=n[1],l=a.useState(!1),s=l[0],r=l[1],d=encodeURIComponent(e.id),m="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,h=e.title,u=e.poster||"hqdefault",p="&".concat(e.params)||0,g=e.muted?"&mute=1":"",x=e.announce||"Watch",f=e.webp?"webp":"jpg",w=e.webp?"vi_webp":"vi",y=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(w,"/").concat(m,"/").concat(u,".").concat(f):"https://i.ytimg.com/".concat(w,"/").concat(d,"/").concat(u,".").concat(f)),v=e.noCookie;v=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var j=e.playlist?"".concat(v,"/embed/videoseries?autoplay=1").concat(g,"&list=").concat(d).concat(p):"".concat(v,"/embed/").concat(d,"?autoplay=1&state=1").concat(g).concat(p),k=e.activatedClass||"lyt-activated",T=e.adNetwork||!1,b=e.aspectHeight||9,I=e.aspectWidth||16,C=e.iframeClass||"",D=e.playerClass||"lty-playbtn",E=e.wrapperClass||"yt-lite",F=e.onIframeAdded||function(){},A=e.rel?"prefetch":"preload",B=e.containerElement||"article";return a.useEffect((function(){s&&F()}),[s]),a.createElement(a.Fragment,null,a.createElement("link",{rel:A,href:y,as:"image"}),a.createElement(a.Fragment,null,i&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:v}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),T&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement(B,{onPointerOver:function(){i||o(!0)},onClick:function(){s||r(!0)},className:"".concat(E," ").concat(s?k:""),"data-title":h,style:c({backgroundImage:"url(".concat(y,")")},{"--aspect-ratio":"".concat(b/I*100,"%")})},a.createElement("button",{type:"button",className:D,"aria-label":"".concat(x," ").concat(h)}),s&&a.createElement("iframe",{ref:t,className:C,title:h,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:j})))}));const l="videoContainer_NvH5";const s=function({id:e,title:t,thumbnail:n}){return(0,i.jsx)("div",{className:l,children:(0,i.jsx)(o,{thumbnail:n,id:e,params:"autoplay=1&autohide=1&showinfo=0&rel=0",title:t,poster:"maxresdefault",webp:!0})})}}}]);