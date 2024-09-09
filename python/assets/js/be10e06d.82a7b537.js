"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4186],{7919:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var t=n(4848),l=n(8453),i=n(4235),r=n(8328);n(3078);const c={id:"class-clock",title:"Clock"},a=void 0,o={id:"api/class-clock",title:"Clock",description:"Accurately simulating time-dependent behavior is essential for verifying the correctness of applications. Learn more about clock emulation.",source:"@site/docs/api/class-clock.mdx",sourceDirName:"api",slug:"/api/class-clock",permalink:"/python/docs/next/api/class-clock",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-clock",title:"Clock"},sidebar:"api",previous:{title:"CDPSession",permalink:"/python/docs/next/api/class-cdpsession"},next:{title:"ConsoleMessage",permalink:"/python/docs/next/api/class-consolemessage"}},d={},h=[{value:"Methods",id:"methods",level:2},{value:"fast_forward",id:"clock-fast-forward",level:3},{value:"install",id:"clock-install",level:3},{value:"pause_at",id:"clock-pause-at",level:3},{value:"resume",id:"clock-resume",level:3},{value:"run_for",id:"clock-run-for",level:3},{value:"set_fixed_time",id:"clock-set-fixed-time",level:3},{value:"set_system_time",id:"clock-set-system-time",level:3}];function x(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Accurately simulating time-dependent behavior is essential for verifying the correctness of applications. Learn more about ",(0,t.jsx)(s.a,{href:"/python/docs/next/clock",children:"clock emulation"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Note that clock is installed for the entire ",(0,t.jsx)(s.a,{href:"/python/docs/next/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"}),", so the time in all the pages and iframes is controlled by the same clock."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(s.h3,{id:"clock-fast-forward",children:"fast_forward"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,t.jsx)("x-search",{children:"clock.fast_forward"}),"\n",(0,t.jsx)(s.p,{children:"Advance the clock by jumping forward in time. Only fires due timers at most once. This is equivalent to user closing the laptop lid for a while and reopening it later, after given time."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,t.jsx)(r.A,{value:"sync",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:'page.clock.fast_forward(1000)\npage.clock.fast_forward("30:00")\n'})})}),(0,t.jsx)(r.A,{value:"async",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:'await page.clock.fast_forward(1000)\nawait page.clock.fast_forward("30:00")\n'})})})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"ticks"})," ",(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int",children:"int"})," | ",(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-fast-forward-option-ticks"}),(0,t.jsx)("a",{href:"#clock-fast-forward-option-ticks",class:"list-anchor",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:'Time may be the number of milliseconds to advance the clock by or a human-readable string. Valid string formats are "08" for eight seconds, "01:00" for one minute and "02:34:10" for two hours, 34 minutes and ten seconds.'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-fast-forward-return"}),(0,t.jsx)("a",{href:"#clock-fast-forward-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"clock-install",children:"install"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,t.jsx)("x-search",{children:"clock.install"}),"\n",(0,t.jsx)(s.p,{children:"Install fake implementations for the following time-related functions:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"Date"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"setTimeout"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"clearTimeout"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"setInterval"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"clearInterval"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"requestAnimationFrame"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"cancelAnimationFrame"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"requestIdleCallback"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"cancelIdleCallback"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"performance"})}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Fake timers are used to manually control the flow of time in tests. They allow you to advance time, fire timers, and control the behavior of time-dependent functions. See ",(0,t.jsx)(s.a,{href:"/python/docs/next/api/class-clock#clock-run-for",children:"clock.run_for()"})," and ",(0,t.jsx)(s.a,{href:"/python/docs/next/api/class-clock#clock-fast-forward",children:"clock.fast_forward()"})," for more information."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"clock.install()\nclock.install(**kwargs)\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"time"})," ",(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"})," | ",(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"})," | ",(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/datetime.html#datetime.datetime",title:"datetime",children:"datetime"})," ",(0,t.jsx)(s.em,{children:"(optional)"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-install-option-time"}),(0,t.jsx)("a",{href:"#clock-install-option-time",class:"list-anchor",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:"Time to initialize with, current system time by default."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-install-return"}),(0,t.jsx)("a",{href:"#clock-install-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"clock-pause-at",children:"pause_at"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,t.jsx)("x-search",{children:"clock.pause_at"}),"\n",(0,t.jsxs)(s.p,{children:["Advance the clock by jumping forward in time and pause the time. Once this method is called, no timers are fired unless ",(0,t.jsx)(s.a,{href:"/python/docs/next/api/class-clock#clock-run-for",children:"clock.run_for()"}),", ",(0,t.jsx)(s.a,{href:"/python/docs/next/api/class-clock#clock-fast-forward",children:"clock.fast_forward()"}),", ",(0,t.jsx)(s.a,{href:"/python/docs/next/api/class-clock#clock-pause-at",children:"clock.pause_at()"})," or ",(0,t.jsx)(s.a,{href:"/python/docs/next/api/class-clock#clock-resume",children:"clock.resume()"})," is called."]}),"\n",(0,t.jsx)(s.p,{children:"Only fires due timers at most once. This is equivalent to user closing the laptop lid for a while and reopening it at the specified time and pausing."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,t.jsx)(r.A,{value:"sync",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:'page.clock.pause_at(datetime.datetime(2020, 2, 2))\npage.clock.pause_at("2020-02-02")\n'})})}),(0,t.jsx)(r.A,{value:"async",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:'await page.clock.pause_at(datetime.datetime(2020, 2, 2))\nawait page.clock.pause_at("2020-02-02")\n'})})})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"time"})," ",(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"})," | ",(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"})," | ",(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/datetime.html#datetime.datetime",title:"datetime",children:"datetime"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-pause-at-option-time"}),(0,t.jsx)("a",{href:"#clock-pause-at-option-time",class:"list-anchor",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:"Time to pause at."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-pause-at-return"}),(0,t.jsx)("a",{href:"#clock-pause-at-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"clock-resume",children:"resume"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,t.jsx)("x-search",{children:"clock.resume"}),"\n",(0,t.jsx)(s.p,{children:"Resumes timers. Once this method is called, time resumes flowing, timers are fired as usual."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"clock.resume()\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-resume-return"}),(0,t.jsx)("a",{href:"#clock-resume-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"clock-run-for",children:"run_for"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,t.jsx)("x-search",{children:"clock.run_for"}),"\n",(0,t.jsx)(s.p,{children:"Advance the clock, firing all the time-related callbacks."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,t.jsx)(r.A,{value:"sync",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:'page.clock.run_for(1000);\npage.clock.run_for("30:00")\n'})})}),(0,t.jsx)(r.A,{value:"async",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:'await page.clock.run_for(1000);\nawait page.clock.run_for("30:00")\n'})})})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"ticks"})," ",(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int",children:"int"})," | ",(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-run-for-option-ticks"}),(0,t.jsx)("a",{href:"#clock-run-for-option-ticks",class:"list-anchor",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:'Time may be the number of milliseconds to advance the clock by or a human-readable string. Valid string formats are "08" for eight seconds, "01:00" for one minute and "02:34:10" for two hours, 34 minutes and ten seconds.'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-run-for-return"}),(0,t.jsx)("a",{href:"#clock-run-for-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"clock-set-fixed-time",children:"set_fixed_time"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,t.jsx)("x-search",{children:"clock.set_fixed_time"}),"\n",(0,t.jsxs)(s.p,{children:["Makes ",(0,t.jsx)(s.code,{children:"Date.now"})," and ",(0,t.jsx)(s.code,{children:"new Date()"})," return fixed fake time at all times, keeps all the timers running."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,t.jsx)(r.A,{value:"sync",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:'page.clock.set_fixed_time(datetime.datetime.now())\npage.clock.set_fixed_time(datetime.datetime(2020, 2, 2))\npage.clock.set_fixed_time("2020-02-02")\n'})})}),(0,t.jsx)(r.A,{value:"async",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:'await page.clock.set_fixed_time(datetime.datetime.now())\nawait page.clock.set_fixed_time(datetime.datetime(2020, 2, 2))\nawait page.clock.set_fixed_time("2020-02-02")\n'})})})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"time"})," ",(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"})," | ",(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"})," | ",(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/datetime.html#datetime.datetime",title:"datetime",children:"datetime"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-set-fixed-time-option-time"}),(0,t.jsx)("a",{href:"#clock-set-fixed-time-option-time",class:"list-anchor",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:"Time to be set."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-set-fixed-time-return"}),(0,t.jsx)("a",{href:"#clock-set-fixed-time-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"clock-set-system-time",children:"set_system_time"}),"\n",(0,t.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added in: v1.45"}),"\n",(0,t.jsx)("x-search",{children:"clock.set_system_time"}),"\n",(0,t.jsx)(s.p,{children:"Sets current system time but does not trigger any timers."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Usage"})}),"\n",(0,t.jsxs)(i.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,t.jsx)(r.A,{value:"sync",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:'page.clock.set_system_time(datetime.datetime.now())\npage.clock.set_system_time(datetime.datetime(2020, 2, 2))\npage.clock.set_system_time("2020-02-02")\n'})})}),(0,t.jsx)(r.A,{value:"async",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:'await page.clock.set_system_time(datetime.datetime.now())\nawait page.clock.set_system_time(datetime.datetime(2020, 2, 2))\nawait page.clock.set_system_time("2020-02-02")\n'})})})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"time"})," ",(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float",children:"float"})," | ",(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str",children:"str"})," | ",(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/datetime.html#datetime.datetime",title:"datetime",children:"datetime"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-set-system-time-option-time"}),(0,t.jsx)("a",{href:"#clock-set-system-time-option-time",class:"list-anchor",children:"#"})]}),"\n",(0,t.jsx)(s.p,{children:"Time to be set."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://docs.python.org/3/library/constants.html#None",title:"None",children:"NoneType"}),(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"clock-set-system-time-return"}),(0,t.jsx)("a",{href:"#clock-set-system-time-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}}}]);