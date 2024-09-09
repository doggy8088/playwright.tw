"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1282],{3642:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>t});var r=n(4848),d=n(8453);n(4235),n(8328),n(3078);const a={id:"class-keyboard",title:"Keyboard"},o=void 0,i={id:"api/class-keyboard",title:"Keyboard",description:"Keyboard provides an api for managing a virtual keyboard. The high level api is Keyboard.type(), which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.",source:"@site/docs/api/class-keyboard.mdx",sourceDirName:"api",slug:"/api/class-keyboard",permalink:"/java/docs/next/api/class-keyboard",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"class-keyboard",title:"Keyboard"},sidebar:"api",previous:{title:"JSHandle",permalink:"/java/docs/next/api/class-jshandle"},next:{title:"Locator",permalink:"/java/docs/next/api/class-locator"}},c={},t=[{value:"Methods",id:"methods",level:2},{value:"down",id:"keyboard-down",level:3},{value:"insertText",id:"keyboard-insert-text",level:3},{value:"press",id:"keyboard-press",level:3},{value:"type",id:"keyboard-type",level:3},{value:"up",id:"keyboard-up",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Keyboard provides an api for managing a virtual keyboard. The high level api is ",(0,r.jsx)(s.a,{href:"/java/docs/next/api/class-keyboard#keyboard-type",children:"Keyboard.type()"}),", which takes raw characters and generates proper ",(0,r.jsx)(s.code,{children:"keydown"}),", ",(0,r.jsx)(s.code,{children:"keypress"}),"/",(0,r.jsx)(s.code,{children:"input"}),", and ",(0,r.jsx)(s.code,{children:"keyup"})," events on your page."]}),"\n",(0,r.jsxs)(s.p,{children:["For finer control, you can use ",(0,r.jsx)(s.a,{href:"/java/docs/next/api/class-keyboard#keyboard-down",children:"Keyboard.down()"}),", ",(0,r.jsx)(s.a,{href:"/java/docs/next/api/class-keyboard#keyboard-up",children:"Keyboard.up()"}),", and ",(0,r.jsx)(s.a,{href:"/java/docs/next/api/class-keyboard#keyboard-insert-text",children:"Keyboard.insertText()"})," to manually fire events as if they were generated from a real keyboard."]}),"\n",(0,r.jsxs)(s.p,{children:["An example of holding down ",(0,r.jsx)(s.code,{children:"Shift"})," in order to select and delete some text:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'page.keyboard().type("Hello World!");\npage.keyboard().press("ArrowLeft");\npage.keyboard().down("Shift");\nfor (int i = 0; i < " World".length(); i++)\n  page.keyboard().press("ArrowLeft");\npage.keyboard().up("Shift");\npage.keyboard().press("Backspace");\n// Result text will end up saying "Hello!"\n'})}),"\n",(0,r.jsxs)(s.p,{children:["An example of pressing uppercase ",(0,r.jsx)(s.code,{children:"A"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'page.keyboard().press("Shift+KeyA");\n// or\npage.keyboard().press("Shift+A");\n'})}),"\n",(0,r.jsx)(s.p,{children:"An example to trigger select-all with the keyboard"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'// on Windows and Linux\npage.keyboard().press("Control+A");\n// on macOS\npage.keyboard().press("Meta+A");\n'})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"keyboard-down",children:"down"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"keyboard.down"}),"\n",(0,r.jsxs)(s.p,{children:["Dispatches a ",(0,r.jsx)(s.code,{children:"keydown"})," event."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"key"})," can specify the intended ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key",children:"keyboardEvent.key"})," value or a single character to generate the text for. A superset of the ",(0,r.jsx)(s.code,{children:"key"})," values can be found ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values",children:"here"}),". Examples of the keys are:"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"F1"})," - ",(0,r.jsx)(s.code,{children:"F12"}),", ",(0,r.jsx)(s.code,{children:"Digit0"}),"- ",(0,r.jsx)(s.code,{children:"Digit9"}),", ",(0,r.jsx)(s.code,{children:"KeyA"}),"- ",(0,r.jsx)(s.code,{children:"KeyZ"}),", ",(0,r.jsx)(s.code,{children:"Backquote"}),", ",(0,r.jsx)(s.code,{children:"Minus"}),", ",(0,r.jsx)(s.code,{children:"Equal"}),", ",(0,r.jsx)(s.code,{children:"Backslash"}),", ",(0,r.jsx)(s.code,{children:"Backspace"}),", ",(0,r.jsx)(s.code,{children:"Tab"}),", ",(0,r.jsx)(s.code,{children:"Delete"}),", ",(0,r.jsx)(s.code,{children:"Escape"}),", ",(0,r.jsx)(s.code,{children:"ArrowDown"}),", ",(0,r.jsx)(s.code,{children:"End"}),", ",(0,r.jsx)(s.code,{children:"Enter"}),", ",(0,r.jsx)(s.code,{children:"Home"}),", ",(0,r.jsx)(s.code,{children:"Insert"}),", ",(0,r.jsx)(s.code,{children:"PageDown"}),", ",(0,r.jsx)(s.code,{children:"PageUp"}),", ",(0,r.jsx)(s.code,{children:"ArrowRight"}),", ",(0,r.jsx)(s.code,{children:"ArrowUp"}),", etc."]}),"\n",(0,r.jsxs)(s.p,{children:["Following modification shortcuts are also supported: ",(0,r.jsx)(s.code,{children:"Shift"}),", ",(0,r.jsx)(s.code,{children:"Control"}),", ",(0,r.jsx)(s.code,{children:"Alt"}),", ",(0,r.jsx)(s.code,{children:"Meta"}),", ",(0,r.jsx)(s.code,{children:"ShiftLeft"}),", ",(0,r.jsx)(s.code,{children:"ControlOrMeta"}),". ",(0,r.jsx)(s.code,{children:"ControlOrMeta"})," resolves to ",(0,r.jsx)(s.code,{children:"Control"})," on Windows and Linux and to ",(0,r.jsx)(s.code,{children:"Meta"})," on macOS."]}),"\n",(0,r.jsxs)(s.p,{children:["Holding down ",(0,r.jsx)(s.code,{children:"Shift"})," will type the text that corresponds to the ",(0,r.jsx)(s.code,{children:"key"})," in the upper case."]}),"\n",(0,r.jsxs)(s.p,{children:["If ",(0,r.jsx)(s.code,{children:"key"})," is a single character, it is case-sensitive, so the values ",(0,r.jsx)(s.code,{children:"a"})," and ",(0,r.jsx)(s.code,{children:"A"})," will generate different respective texts."]}),"\n",(0,r.jsxs)(s.p,{children:["If ",(0,r.jsx)(s.code,{children:"key"})," is a modifier key, ",(0,r.jsx)(s.code,{children:"Shift"}),", ",(0,r.jsx)(s.code,{children:"Meta"}),", ",(0,r.jsx)(s.code,{children:"Control"}),", or ",(0,r.jsx)(s.code,{children:"Alt"}),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",(0,r.jsx)(s.a,{href:"/java/docs/next/api/class-keyboard#keyboard-up",children:"Keyboard.up()"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["After the key is pressed once, subsequent calls to ",(0,r.jsx)(s.a,{href:"/java/docs/next/api/class-keyboard#keyboard-down",children:"Keyboard.down()"})," will have ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat",children:"repeat"})," set to true. To release the key, use ",(0,r.jsx)(s.a,{href:"/java/docs/next/api/class-keyboard#keyboard-up",children:"Keyboard.up()"}),"."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Modifier keys DO influence ",(0,r.jsx)(s.code,{children:"keyboard.down"}),". Holding down ",(0,r.jsx)(s.code,{children:"Shift"})," will type the text in upper case."]})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"Keyboard.down(key);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"key"})," ",(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String",children:"String"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-down-option-key"}),(0,r.jsx)("a",{href:"#keyboard-down-option-key",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["Name of the key to press or a character to generate, such as ",(0,r.jsx)(s.code,{children:"ArrowLeft"})," or ",(0,r.jsx)(s.code,{children:"a"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void",children:"void"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-down-return"}),(0,r.jsx)("a",{href:"#keyboard-down-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"keyboard-insert-text",children:"insertText"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"keyboard.insertText"}),"\n",(0,r.jsxs)(s.p,{children:["Dispatches only ",(0,r.jsx)(s.code,{children:"input"})," event, does not emit the ",(0,r.jsx)(s.code,{children:"keydown"}),", ",(0,r.jsx)(s.code,{children:"keyup"})," or ",(0,r.jsx)(s.code,{children:"keypress"})," events."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'page.keyboard().insertText("\u55e8");\n'})}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Modifier keys DO NOT effect ",(0,r.jsx)(s.code,{children:"keyboard.insertText"}),". Holding down ",(0,r.jsx)(s.code,{children:"Shift"})," will not type the text in upper case."]})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"text"})," ",(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String",children:"String"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-insert-text-option-text"}),(0,r.jsx)("a",{href:"#keyboard-insert-text-option-text",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"Sets input to the specified text value."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void",children:"void"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-insert-text-return"}),(0,r.jsx)("a",{href:"#keyboard-insert-text-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"keyboard-press",children:"press"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"keyboard.press"}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsxs)(s.p,{children:["In most cases, you should use ",(0,r.jsx)(s.a,{href:"/java/docs/next/api/class-locator#locator-press",children:"Locator.press()"})," instead."]})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"key"})," can specify the intended ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key",children:"keyboardEvent.key"})," value or a single character to generate the text for. A superset of the ",(0,r.jsx)(s.code,{children:"key"})," values can be found ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values",children:"here"}),". Examples of the keys are:"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"F1"})," - ",(0,r.jsx)(s.code,{children:"F12"}),", ",(0,r.jsx)(s.code,{children:"Digit0"}),"- ",(0,r.jsx)(s.code,{children:"Digit9"}),", ",(0,r.jsx)(s.code,{children:"KeyA"}),"- ",(0,r.jsx)(s.code,{children:"KeyZ"}),", ",(0,r.jsx)(s.code,{children:"Backquote"}),", ",(0,r.jsx)(s.code,{children:"Minus"}),", ",(0,r.jsx)(s.code,{children:"Equal"}),", ",(0,r.jsx)(s.code,{children:"Backslash"}),", ",(0,r.jsx)(s.code,{children:"Backspace"}),", ",(0,r.jsx)(s.code,{children:"Tab"}),", ",(0,r.jsx)(s.code,{children:"Delete"}),", ",(0,r.jsx)(s.code,{children:"Escape"}),", ",(0,r.jsx)(s.code,{children:"ArrowDown"}),", ",(0,r.jsx)(s.code,{children:"End"}),", ",(0,r.jsx)(s.code,{children:"Enter"}),", ",(0,r.jsx)(s.code,{children:"Home"}),", ",(0,r.jsx)(s.code,{children:"Insert"}),", ",(0,r.jsx)(s.code,{children:"PageDown"}),", ",(0,r.jsx)(s.code,{children:"PageUp"}),", ",(0,r.jsx)(s.code,{children:"ArrowRight"}),", ",(0,r.jsx)(s.code,{children:"ArrowUp"}),", etc."]}),"\n",(0,r.jsxs)(s.p,{children:["Following modification shortcuts are also supported: ",(0,r.jsx)(s.code,{children:"Shift"}),", ",(0,r.jsx)(s.code,{children:"Control"}),", ",(0,r.jsx)(s.code,{children:"Alt"}),", ",(0,r.jsx)(s.code,{children:"Meta"}),", ",(0,r.jsx)(s.code,{children:"ShiftLeft"}),", ",(0,r.jsx)(s.code,{children:"ControlOrMeta"}),". ",(0,r.jsx)(s.code,{children:"ControlOrMeta"})," resolves to ",(0,r.jsx)(s.code,{children:"Control"})," on Windows and Linux and to ",(0,r.jsx)(s.code,{children:"Meta"})," on macOS."]}),"\n",(0,r.jsxs)(s.p,{children:["Holding down ",(0,r.jsx)(s.code,{children:"Shift"})," will type the text that corresponds to the ",(0,r.jsx)(s.code,{children:"key"})," in the upper case."]}),"\n",(0,r.jsxs)(s.p,{children:["If ",(0,r.jsx)(s.code,{children:"key"})," is a single character, it is case-sensitive, so the values ",(0,r.jsx)(s.code,{children:"a"})," and ",(0,r.jsx)(s.code,{children:"A"})," will generate different respective texts."]}),"\n",(0,r.jsxs)(s.p,{children:["Shortcuts such as ",(0,r.jsx)(s.code,{children:'key: "Control+o"'}),", ",(0,r.jsx)(s.code,{children:'key: "Control++'})," or ",(0,r.jsx)(s.code,{children:'key: "Control+Shift+T"'})," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'Page page = browser.newPage();\npage.navigate("https://keycode.info");\npage.keyboard().press("A");\npage.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("A.png"));\npage.keyboard().press("ArrowLeft");\npage.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("ArrowLeft.png")));\npage.keyboard().press("Shift+O");\npage.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("O.png")));\nbrowser.close();\n'})}),"\n",(0,r.jsxs)(s.p,{children:["Shortcut for ",(0,r.jsx)(s.a,{href:"/java/docs/next/api/class-keyboard#keyboard-down",children:"Keyboard.down()"})," and ",(0,r.jsx)(s.a,{href:"/java/docs/next/api/class-keyboard#keyboard-up",children:"Keyboard.up()"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"key"})," ",(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String",children:"String"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-press-option-key"}),(0,r.jsx)("a",{href:"#keyboard-press-option-key",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["Name of the key to press or a character to generate, such as ",(0,r.jsx)(s.code,{children:"ArrowLeft"})," or ",(0,r.jsx)(s.code,{children:"a"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"options"})," ",(0,r.jsx)(s.code,{children:"Keyboard.PressOptions"})," ",(0,r.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"setDelay"})," ",(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double",children:"double"})," ",(0,r.jsx)(s.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-press-option-delay"}),(0,r.jsx)("a",{href:"#keyboard-press-option-delay",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["Time to wait between ",(0,r.jsx)(s.code,{children:"keydown"})," and ",(0,r.jsx)(s.code,{children:"keyup"})," in milliseconds. Defaults to 0."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void",children:"void"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-press-return"}),(0,r.jsx)("a",{href:"#keyboard-press-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"keyboard-type",children:"type"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"keyboard.type"}),"\n",(0,r.jsx)(s.admonition,{type:"caution",children:(0,r.jsxs)(s.p,{children:["In most cases, you should use ",(0,r.jsx)(s.a,{href:"/java/docs/next/api/class-locator#locator-fill",children:"Locator.fill()"})," instead. You only need to press keys one by one if there is special keyboard handling on the page - in this case use ",(0,r.jsx)(s.a,{href:"/java/docs/next/api/class-locator#locator-press-sequentially",children:"Locator.pressSequentially()"}),"."]})}),"\n",(0,r.jsxs)(s.p,{children:["Sends a ",(0,r.jsx)(s.code,{children:"keydown"}),", ",(0,r.jsx)(s.code,{children:"keypress"}),"/",(0,r.jsx)(s.code,{children:"input"}),", and ",(0,r.jsx)(s.code,{children:"keyup"})," event for each character in the text."]}),"\n",(0,r.jsxs)(s.p,{children:["To press a special key, like ",(0,r.jsx)(s.code,{children:"Control"})," or ",(0,r.jsx)(s.code,{children:"ArrowDown"}),", use ",(0,r.jsx)(s.a,{href:"/java/docs/next/api/class-keyboard#keyboard-press",children:"Keyboard.press()"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'// Types instantly\npage.keyboard().type("Hello");\n// Types slower, like a user\npage.keyboard().type("World", new Keyboard.TypeOptions().setDelay(100));\n'})}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Modifier keys DO NOT effect ",(0,r.jsx)(s.code,{children:"keyboard.type"}),". Holding down ",(0,r.jsx)(s.code,{children:"Shift"})," will not type the text in upper case."]})}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["For characters that are not on a US keyboard, only an ",(0,r.jsx)(s.code,{children:"input"})," event will be sent."]})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"text"})," ",(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String",children:"String"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-type-option-text"}),(0,r.jsx)("a",{href:"#keyboard-type-option-text",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"A text to type into a focused element."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"options"})," ",(0,r.jsx)(s.code,{children:"Keyboard.TypeOptions"})," ",(0,r.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"setDelay"})," ",(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double",children:"double"})," ",(0,r.jsx)(s.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-type-option-delay"}),(0,r.jsx)("a",{href:"#keyboard-type-option-delay",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"Time to wait between key presses in milliseconds. Defaults to 0."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void",children:"void"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-type-return"}),(0,r.jsx)("a",{href:"#keyboard-type-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"keyboard-up",children:"up"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"keyboard.up"}),"\n",(0,r.jsxs)(s.p,{children:["Dispatches a ",(0,r.jsx)(s.code,{children:"keyup"})," event."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:"Keyboard.up(key);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"key"})," ",(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String",children:"String"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-up-option-key"}),(0,r.jsx)("a",{href:"#keyboard-up-option-key",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["Name of the key to press or a character to generate, such as ",(0,r.jsx)(s.code,{children:"ArrowLeft"})," or ",(0,r.jsx)(s.code,{children:"a"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void",children:"void"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-up-return"}),(0,r.jsx)("a",{href:"#keyboard-up-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);