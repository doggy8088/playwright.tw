"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3941],{3304:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var l=n(4848),i=n(8453);n(4235),n(8328),n(3078);const a={id:"class-clock",title:"Clock"},t=void 0,c={id:"api/class-clock",title:"Clock",description:"Accurately simulating time-dependent behavior is essential for verifying the correctness of applications. Learn more about clock emulation.",source:"@site/versioned_docs/version-stable/api/class-clock.mdx",sourceDirName:"api",slug:"/api/class-clock",permalink:"/java/docs/api/class-clock",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"class-clock",title:"Clock"},sidebar:"api",previous:{title:"CDPSession",permalink:"/java/docs/api/class-cdpsession"},next:{title:"ConsoleMessage",permalink:"/java/docs/api/class-consolemessage"}},r={},o=[{value:"Methods",id:"methods",level:2},{value:"fastForward",id:"clock-fast-forward",level:3},{value:"install",id:"clock-install",level:3},{value:"pauseAt",id:"clock-pause-at",level:3},{value:"resume",id:"clock-resume",level:3},{value:"runFor",id:"clock-run-for",level:3},{value:"setFixedTime",id:"clock-set-fixed-time",level:3},{value:"setSystemTime",id:"clock-set-system-time",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:["Accurately simulating time-dependent behavior is essential for verifying the correctness of applications. Learn more about ",(0,l.jsx)(s.a,{href:"/java/docs/clock",children:"clock emulation"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Note that clock is installed for the entire ",(0,l.jsx)(s.a,{href:"/java/docs/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"}),", so the time in all the pages and iframes is controlled by the same clock."]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsx)(s.h3,{id:"clock-fast-forward",children:"fastForward"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,l.jsx)("x-search",{children:"clock.fastForward"}),"\n",(0,l.jsx)(s.p,{children:"Advance the clock by jumping forward in time. Only fires due timers at most once. This is equivalent to user closing the laptop lid for a while and reopening it later, after given time."}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Usage"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'page.clock().fastForward(1000);\npage.clock().fastForward("30:00");\n'})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ticks"})," ",(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"long",children:"long"})," | ",(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String",children:"String"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-fast-forward-option-ticks"}),(0,l.jsx)("a",{href:"#clock-fast-forward-option-ticks",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:'Time may be the number of milliseconds to advance the clock by or a human-readable string. Valid string formats are "08" for eight seconds, "01:00" for one minute and "02:34:10" for two hours, 34 minutes and ten seconds.'}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void",children:"void"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-fast-forward-return"}),(0,l.jsx)("a",{href:"#clock-fast-forward-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"clock-install",children:"install"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,l.jsx)("x-search",{children:"clock.install"}),"\n",(0,l.jsx)(s.p,{children:"Install fake implementations for the following time-related functions:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"Date"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"setTimeout"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"clearTimeout"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"setInterval"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"clearInterval"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"requestAnimationFrame"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"cancelAnimationFrame"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"requestIdleCallback"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"cancelIdleCallback"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.code,{children:"performance"})}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["Fake timers are used to manually control the flow of time in tests. They allow you to advance time, fire timers, and control the behavior of time-dependent functions. See ",(0,l.jsx)(s.a,{href:"/java/docs/api/class-clock#clock-run-for",children:"Clock.runFor()"})," and ",(0,l.jsx)(s.a,{href:"/java/docs/api/class-clock#clock-fast-forward",children:"Clock.fastForward()"})," for more information."]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Usage"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:"Clock.install();\nClock.install(options);\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"options"})," ",(0,l.jsx)(s.code,{children:"Clock.InstallOptions"})," ",(0,l.jsx)(s.em,{children:"(optional)"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"setTime"})," ",(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"long",children:"long"})," | ",(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String",children:"String"})," | ",(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Date.html",title:"Date",children:"Date"})," ",(0,l.jsx)(s.em,{children:"(optional)"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-install-option-time"}),(0,l.jsx)("a",{href:"#clock-install-option-time",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"Time to initialize with, current system time by default."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void",children:"void"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-install-return"}),(0,l.jsx)("a",{href:"#clock-install-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"clock-pause-at",children:"pauseAt"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,l.jsx)("x-search",{children:"clock.pauseAt"}),"\n",(0,l.jsxs)(s.p,{children:["Advance the clock by jumping forward in time and pause the time. Once this method is called, no timers are fired unless ",(0,l.jsx)(s.a,{href:"/java/docs/api/class-clock#clock-run-for",children:"Clock.runFor()"}),", ",(0,l.jsx)(s.a,{href:"/java/docs/api/class-clock#clock-fast-forward",children:"Clock.fastForward()"}),", ",(0,l.jsx)(s.a,{href:"/java/docs/api/class-clock#clock-pause-at",children:"Clock.pauseAt()"})," or ",(0,l.jsx)(s.a,{href:"/java/docs/api/class-clock#clock-resume",children:"Clock.resume()"})," is called."]}),"\n",(0,l.jsx)(s.p,{children:"Only fires due timers at most once. This is equivalent to user closing the laptop lid for a while and reopening it at the specified time and pausing."}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Usage"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'SimpleDateFormat format = new SimpleDateFormat("yyy-MM-dd");\npage.clock().pauseAt(format.parse("2020-02-02"));\npage.clock().pauseAt("2020-02-02");\n'})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"time"})," ",(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"long",children:"long"})," | ",(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String",children:"String"})," | ",(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Date.html",title:"Date",children:"Date"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-pause-at-option-time"}),(0,l.jsx)("a",{href:"#clock-pause-at-option-time",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"Time to pause at."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void",children:"void"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-pause-at-return"}),(0,l.jsx)("a",{href:"#clock-pause-at-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"clock-resume",children:"resume"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,l.jsx)("x-search",{children:"clock.resume"}),"\n",(0,l.jsx)(s.p,{children:"Resumes timers. Once this method is called, time resumes flowing, timers are fired as usual."}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Usage"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:"Clock.resume();\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void",children:"void"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-resume-return"}),(0,l.jsx)("a",{href:"#clock-resume-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"clock-run-for",children:"runFor"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,l.jsx)("x-search",{children:"clock.runFor"}),"\n",(0,l.jsx)(s.p,{children:"Advance the clock, firing all the time-related callbacks."}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Usage"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'page.clock().runFor(1000);\npage.clock().runFor("30:00");\n'})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"ticks"})," ",(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"long",children:"long"})," | ",(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String",children:"String"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-run-for-option-ticks"}),(0,l.jsx)("a",{href:"#clock-run-for-option-ticks",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:'Time may be the number of milliseconds to advance the clock by or a human-readable string. Valid string formats are "08" for eight seconds, "01:00" for one minute and "02:34:10" for two hours, 34 minutes and ten seconds.'}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void",children:"void"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-run-for-return"}),(0,l.jsx)("a",{href:"#clock-run-for-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"clock-set-fixed-time",children:"setFixedTime"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,l.jsx)("x-search",{children:"clock.setFixedTime"}),"\n",(0,l.jsxs)(s.p,{children:["Makes ",(0,l.jsx)(s.code,{children:"Date.now"})," and ",(0,l.jsx)(s.code,{children:"new Date()"})," return fixed fake time at all times, keeps all the timers running."]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Usage"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'page.clock().setFixedTime(new Date());\npage.clock().setFixedTime(new SimpleDateFormat("yyy-MM-dd").parse("2020-02-02"));\npage.clock().setFixedTime("2020-02-02");\n'})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"time"})," ",(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"long",children:"long"})," | ",(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String",children:"String"})," | ",(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Date.html",title:"Date",children:"Date"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-set-fixed-time-option-time"}),(0,l.jsx)("a",{href:"#clock-set-fixed-time-option-time",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"Time to be set in milliseconds."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void",children:"void"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-set-fixed-time-return"}),(0,l.jsx)("a",{href:"#clock-set-fixed-time-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"clock-set-system-time",children:"setSystemTime"}),"\n",(0,l.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,l.jsx)("x-search",{children:"clock.setSystemTime"}),"\n",(0,l.jsx)(s.p,{children:"Sets current system time but does not trigger any timers."}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Usage"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'page.clock().setSystemTime(new Date());\npage.clock().setSystemTime(new SimpleDateFormat("yyy-MM-dd").parse("2020-02-02"));\npage.clock().setSystemTime("2020-02-02");\n'})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"time"})," ",(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"long",children:"long"})," | ",(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String",children:"String"})," | ",(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Date.html",title:"Date",children:"Date"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-set-system-time-option-time"}),(0,l.jsx)("a",{href:"#clock-set-system-time-option-time",class:"list-anchor",children:"#"})]}),"\n",(0,l.jsx)(s.p,{children:"Time to be set in milliseconds."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void",children:"void"}),(0,l.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-set-system-time-return"}),(0,l.jsx)("a",{href:"#clock-set-system-time-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);