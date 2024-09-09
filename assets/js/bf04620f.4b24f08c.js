"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3941],{3304:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var i=n(4848),r=n(8453);n(4235),n(8328),n(3078);const l={id:"class-clock",title:"Clock"},t=void 0,c={id:"api/class-clock",title:"Clock",description:"Accurately simulating time-dependent behavior is essential for verifying the correctness of applications. Learn more about clock emulation.",source:"@site/versioned_docs/version-stable/api/class-clock.mdx",sourceDirName:"api",slug:"/api/class-clock",permalink:"/docs/api/class-clock",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"class-clock",title:"Clock"},sidebar:"api",previous:{title:"CDPSession",permalink:"/docs/api/class-cdpsession"},next:{title:"ConsoleMessage",permalink:"/docs/api/class-consolemessage"}},a={},o=[{value:"Methods",id:"methods",level:2},{value:"fastForward",id:"clock-fast-forward",level:3},{value:"install",id:"clock-install",level:3},{value:"pauseAt",id:"clock-pause-at",level:3},{value:"resume",id:"clock-resume",level:3},{value:"runFor",id:"clock-run-for",level:3},{value:"setFixedTime",id:"clock-set-fixed-time",level:3},{value:"setSystemTime",id:"clock-set-system-time",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Accurately simulating time-dependent behavior is essential for verifying the correctness of applications. Learn more about ",(0,i.jsx)(s.a,{href:"/docs/clock",children:"clock emulation"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Note that clock is installed for the entire ",(0,i.jsx)(s.a,{href:"/docs/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"}),", so the time in all the pages and iframes is controlled by the same clock."]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"clock-fast-forward",children:"fastForward"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,i.jsx)("x-search",{children:"clock.fastForward"}),"\n",(0,i.jsx)(s.p,{children:"Advance the clock by jumping forward in time. Only fires due timers at most once. This is equivalent to user closing the laptop lid for a while and reopening it later, after given time."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"await page.clock.fastForward(1000);\nawait page.clock.fastForward('30:00');\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"ticks"})," ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})," | ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-fast-forward-option-ticks"}),(0,i.jsx)("a",{href:"#clock-fast-forward-option-ticks",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:'Time may be the number of milliseconds to advance the clock by or a human-readable string. Valid string formats are "08" for eight seconds, "01:00" for one minute and "02:34:10" for two hours, 34 minutes and ten seconds.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise",children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void",children:"void"}),">",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-fast-forward-return"}),(0,i.jsx)("a",{href:"#clock-fast-forward-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"clock-install",children:"install"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,i.jsx)("x-search",{children:"clock.install"}),"\n",(0,i.jsx)(s.p,{children:"Install fake implementations for the following time-related functions:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"Date"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"setTimeout"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"clearTimeout"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"setInterval"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"clearInterval"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"requestAnimationFrame"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"cancelAnimationFrame"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"requestIdleCallback"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"cancelIdleCallback"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"performance"})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Fake timers are used to manually control the flow of time in tests. They allow you to advance time, fire timers, and control the behavior of time-dependent functions. See ",(0,i.jsx)(s.a,{href:"/docs/api/class-clock#clock-run-for",children:"clock.runFor()"})," and ",(0,i.jsx)(s.a,{href:"/docs/api/class-clock#clock-fast-forward",children:"clock.fastForward()"})," for more information."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"await clock.install();\nawait clock.install(options);\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"options"})," ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",children:"Object"})," ",(0,i.jsx)(s.em,{children:"(optional)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"time"})," ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})," | ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," | [Date] ",(0,i.jsx)(s.em,{children:"(optional)"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-install-option-time"}),(0,i.jsx)("a",{href:"#clock-install-option-time",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"Time to initialize with, current system time by default."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise",children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void",children:"void"}),">",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-install-return"}),(0,i.jsx)("a",{href:"#clock-install-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"clock-pause-at",children:"pauseAt"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,i.jsx)("x-search",{children:"clock.pauseAt"}),"\n",(0,i.jsxs)(s.p,{children:["Advance the clock by jumping forward in time and pause the time. Once this method is called, no timers are fired unless ",(0,i.jsx)(s.a,{href:"/docs/api/class-clock#clock-run-for",children:"clock.runFor()"}),", ",(0,i.jsx)(s.a,{href:"/docs/api/class-clock#clock-fast-forward",children:"clock.fastForward()"}),", ",(0,i.jsx)(s.a,{href:"/docs/api/class-clock#clock-pause-at",children:"clock.pauseAt()"})," or ",(0,i.jsx)(s.a,{href:"/docs/api/class-clock#clock-resume",children:"clock.resume()"})," is called."]}),"\n",(0,i.jsx)(s.p,{children:"Only fires due timers at most once. This is equivalent to user closing the laptop lid for a while and reopening it at the specified time and pausing."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"await page.clock.pauseAt(new Date('2020-02-02'));\nawait page.clock.pauseAt('2020-02-02');\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"time"})," ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})," | ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," | [Date]",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-pause-at-option-time"}),(0,i.jsx)("a",{href:"#clock-pause-at-option-time",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"Time to pause at."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise",children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void",children:"void"}),">",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-pause-at-return"}),(0,i.jsx)("a",{href:"#clock-pause-at-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"clock-resume",children:"resume"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,i.jsx)("x-search",{children:"clock.resume"}),"\n",(0,i.jsx)(s.p,{children:"Resumes timers. Once this method is called, time resumes flowing, timers are fired as usual."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"await clock.resume();\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise",children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void",children:"void"}),">",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-resume-return"}),(0,i.jsx)("a",{href:"#clock-resume-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"clock-run-for",children:"runFor"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,i.jsx)("x-search",{children:"clock.runFor"}),"\n",(0,i.jsx)(s.p,{children:"Advance the clock, firing all the time-related callbacks."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"await page.clock.runFor(1000);\nawait page.clock.runFor('30:00');\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"ticks"})," ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})," | ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"}),(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-run-for-option-ticks"}),(0,i.jsx)("a",{href:"#clock-run-for-option-ticks",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:'Time may be the number of milliseconds to advance the clock by or a human-readable string. Valid string formats are "08" for eight seconds, "01:00" for one minute and "02:34:10" for two hours, 34 minutes and ten seconds.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise",children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void",children:"void"}),">",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-run-for-return"}),(0,i.jsx)("a",{href:"#clock-run-for-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"clock-set-fixed-time",children:"setFixedTime"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,i.jsx)("x-search",{children:"clock.setFixedTime"}),"\n",(0,i.jsxs)(s.p,{children:["Makes ",(0,i.jsx)(s.code,{children:"Date.now"})," and ",(0,i.jsx)(s.code,{children:"new Date()"})," return fixed fake time at all times, keeps all the timers running."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"await page.clock.setFixedTime(Date.now());\nawait page.clock.setFixedTime(new Date('2020-02-02'));\nawait page.clock.setFixedTime('2020-02-02');\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"time"})," ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})," | ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," | [Date]",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-set-fixed-time-option-time"}),(0,i.jsx)("a",{href:"#clock-set-fixed-time-option-time",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"Time to be set in milliseconds."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise",children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void",children:"void"}),">",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-set-fixed-time-return"}),(0,i.jsx)("a",{href:"#clock-set-fixed-time-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"clock-set-system-time",children:"setSystemTime"}),"\n",(0,i.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,i.jsx)("x-search",{children:"clock.setSystemTime"}),"\n",(0,i.jsx)(s.p,{children:"Sets current system time but does not trigger any timers."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"await page.clock.setSystemTime(Date.now());\nawait page.clock.setSystemTime(new Date('2020-02-02'));\nawait page.clock.setSystemTime('2020-02-02');\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"time"})," ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number",children:"number"})," | ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string",children:"string"})," | [Date]",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-set-system-time-option-time"}),(0,i.jsx)("a",{href:"#clock-set-system-time-option-time",class:"list-anchor",children:"#"})]}),"\n",(0,i.jsx)(s.p,{children:"Time to be set in milliseconds."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise",children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void",children:"void"}),">",(0,i.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-set-system-time-return"}),(0,i.jsx)("a",{href:"#clock-set-system-time-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);