"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1496],{2879:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=n(4848),d=n(8453);n(4235),n(8328),n(3078);const i={id:"class-keyboard",title:"Keyboard"},o=void 0,c={id:"api/class-keyboard",title:"Keyboard",description:"Keyboard provides an api for managing a virtual keyboard. The high level api is Keyboard.TypeAsync(), which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.",source:"@site/versioned_docs/version-stable/api/class-keyboard.mdx",sourceDirName:"api",slug:"/api/class-keyboard",permalink:"/dotnet/docs/api/class-keyboard",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"class-keyboard",title:"Keyboard"},sidebar:"api",previous:{title:"JSHandle",permalink:"/dotnet/docs/api/class-jshandle"},next:{title:"Locator",permalink:"/dotnet/docs/api/class-locator"}},t={},a=[{value:"Methods",id:"methods",level:2},{value:"DownAsync",id:"keyboard-down",level:3},{value:"InsertTextAsync",id:"keyboard-insert-text",level:3},{value:"PressAsync",id:"keyboard-press",level:3},{value:"TypeAsync",id:"keyboard-type",level:3},{value:"UpAsync",id:"keyboard-up",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Keyboard provides an api for managing a virtual keyboard. The high level api is ",(0,r.jsx)(s.a,{href:"/dotnet/docs/api/class-keyboard#keyboard-type",children:"Keyboard.TypeAsync()"}),", which takes raw characters and generates proper ",(0,r.jsx)(s.code,{children:"keydown"}),", ",(0,r.jsx)(s.code,{children:"keypress"}),"/",(0,r.jsx)(s.code,{children:"input"}),", and ",(0,r.jsx)(s.code,{children:"keyup"})," events on your page."]}),"\n",(0,r.jsxs)(s.p,{children:["For finer control, you can use ",(0,r.jsx)(s.a,{href:"/dotnet/docs/api/class-keyboard#keyboard-down",children:"Keyboard.DownAsync()"}),", ",(0,r.jsx)(s.a,{href:"/dotnet/docs/api/class-keyboard#keyboard-up",children:"Keyboard.UpAsync()"}),", and ",(0,r.jsx)(s.a,{href:"/dotnet/docs/api/class-keyboard#keyboard-insert-text",children:"Keyboard.InsertTextAsync()"})," to manually fire events as if they were generated from a real keyboard."]}),"\n",(0,r.jsxs)(s.p,{children:["An example of holding down ",(0,r.jsx)(s.code,{children:"Shift"})," in order to select and delete some text:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:'await page.Keyboard.TypeAsync("Hello World!");\nawait page.Keyboard.PressAsync("ArrowLeft");\n\nawait page.Keyboard.DownAsync("Shift");\nfor (int i = 0; i < " World".Length; i++)\n    await page.Keyboard.PressAsync("ArrowLeft");\n\nawait page.Keyboard.UpAsync("Shift");\n\nawait page.Keyboard.PressAsync("Backspace");\n// Result text will end up saying "Hello!"\n'})}),"\n",(0,r.jsxs)(s.p,{children:["An example of pressing uppercase ",(0,r.jsx)(s.code,{children:"A"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:'await page.Keyboard.PressAsync("Shift+KeyA");\n// or\nawait page.Keyboard.PressAsync("Shift+A");\n'})}),"\n",(0,r.jsx)(s.p,{children:"An example to trigger select-all with the keyboard"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:'// on Windows and Linux\nawait page.Keyboard.PressAsync("Control+A");\n// on macOS\nawait page.Keyboard.PressAsync("Meta+A");\n'})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"keyboard-down",children:"DownAsync"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"keyboard.DownAsync"}),"\n",(0,r.jsxs)(s.p,{children:["Dispatches a ",(0,r.jsx)(s.code,{children:"keydown"})," event."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"key"})," can specify the intended ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key",children:"keyboardEvent.key"})," value or a single character to generate the text for. A superset of the ",(0,r.jsx)(s.code,{children:"key"})," values can be found ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values",children:"here"}),". Examples of the keys are:"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"F1"})," - ",(0,r.jsx)(s.code,{children:"F12"}),", ",(0,r.jsx)(s.code,{children:"Digit0"}),"- ",(0,r.jsx)(s.code,{children:"Digit9"}),", ",(0,r.jsx)(s.code,{children:"KeyA"}),"- ",(0,r.jsx)(s.code,{children:"KeyZ"}),", ",(0,r.jsx)(s.code,{children:"Backquote"}),", ",(0,r.jsx)(s.code,{children:"Minus"}),", ",(0,r.jsx)(s.code,{children:"Equal"}),", ",(0,r.jsx)(s.code,{children:"Backslash"}),", ",(0,r.jsx)(s.code,{children:"Backspace"}),", ",(0,r.jsx)(s.code,{children:"Tab"}),", ",(0,r.jsx)(s.code,{children:"Delete"}),", ",(0,r.jsx)(s.code,{children:"Escape"}),", ",(0,r.jsx)(s.code,{children:"ArrowDown"}),", ",(0,r.jsx)(s.code,{children:"End"}),", ",(0,r.jsx)(s.code,{children:"Enter"}),", ",(0,r.jsx)(s.code,{children:"Home"}),", ",(0,r.jsx)(s.code,{children:"Insert"}),", ",(0,r.jsx)(s.code,{children:"PageDown"}),", ",(0,r.jsx)(s.code,{children:"PageUp"}),", ",(0,r.jsx)(s.code,{children:"ArrowRight"}),", ",(0,r.jsx)(s.code,{children:"ArrowUp"}),", etc."]}),"\n",(0,r.jsxs)(s.p,{children:["Following modification shortcuts are also supported: ",(0,r.jsx)(s.code,{children:"Shift"}),", ",(0,r.jsx)(s.code,{children:"Control"}),", ",(0,r.jsx)(s.code,{children:"Alt"}),", ",(0,r.jsx)(s.code,{children:"Meta"}),", ",(0,r.jsx)(s.code,{children:"ShiftLeft"}),", ",(0,r.jsx)(s.code,{children:"ControlOrMeta"}),". ",(0,r.jsx)(s.code,{children:"ControlOrMeta"})," resolves to ",(0,r.jsx)(s.code,{children:"Control"})," on Windows and Linux and to ",(0,r.jsx)(s.code,{children:"Meta"})," on macOS."]}),"\n",(0,r.jsxs)(s.p,{children:["Holding down ",(0,r.jsx)(s.code,{children:"Shift"})," will type the text that corresponds to the ",(0,r.jsx)(s.code,{children:"key"})," in the upper case."]}),"\n",(0,r.jsxs)(s.p,{children:["If ",(0,r.jsx)(s.code,{children:"key"})," is a single character, it is case-sensitive, so the values ",(0,r.jsx)(s.code,{children:"a"})," and ",(0,r.jsx)(s.code,{children:"A"})," will generate different respective texts."]}),"\n",(0,r.jsxs)(s.p,{children:["If ",(0,r.jsx)(s.code,{children:"key"})," is a modifier key, ",(0,r.jsx)(s.code,{children:"Shift"}),", ",(0,r.jsx)(s.code,{children:"Meta"}),", ",(0,r.jsx)(s.code,{children:"Control"}),", or ",(0,r.jsx)(s.code,{children:"Alt"}),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",(0,r.jsx)(s.a,{href:"/dotnet/docs/api/class-keyboard#keyboard-up",children:"Keyboard.UpAsync()"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["After the key is pressed once, subsequent calls to ",(0,r.jsx)(s.a,{href:"/dotnet/docs/api/class-keyboard#keyboard-down",children:"Keyboard.DownAsync()"})," will have ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat",children:"repeat"})," set to true. To release the key, use ",(0,r.jsx)(s.a,{href:"/dotnet/docs/api/class-keyboard#keyboard-up",children:"Keyboard.UpAsync()"}),"."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Modifier keys DO influence ",(0,r.jsx)(s.code,{children:"keyboard.down"}),". Holding down ",(0,r.jsx)(s.code,{children:"Shift"})," will type the text in upper case."]})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"await Keyboard.DownAsync(key);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"key"})," ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-down-option-key"}),(0,r.jsx)("a",{href:"#keyboard-down-option-key",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["Name of the key to press or a character to generate, such as ",(0,r.jsx)(s.code,{children:"ArrowLeft"})," or ",(0,r.jsx)(s.code,{children:"a"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void",children:"void"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-down-return"}),(0,r.jsx)("a",{href:"#keyboard-down-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"keyboard-insert-text",children:"InsertTextAsync"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"keyboard.InsertTextAsync"}),"\n",(0,r.jsxs)(s.p,{children:["Dispatches only ",(0,r.jsx)(s.code,{children:"input"})," event, does not emit the ",(0,r.jsx)(s.code,{children:"keydown"}),", ",(0,r.jsx)(s.code,{children:"keyup"})," or ",(0,r.jsx)(s.code,{children:"keypress"})," events."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:'await page.Keyboard.PressAsync("\u55e8");\n'})}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Modifier keys DO NOT effect ",(0,r.jsx)(s.code,{children:"keyboard.insertText"}),". Holding down ",(0,r.jsx)(s.code,{children:"Shift"})," will not type the text in upper case."]})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"text"})," ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-insert-text-option-text"}),(0,r.jsx)("a",{href:"#keyboard-insert-text-option-text",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"Sets input to the specified text value."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void",children:"void"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-insert-text-return"}),(0,r.jsx)("a",{href:"#keyboard-insert-text-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"keyboard-press",children:"PressAsync"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"keyboard.PressAsync"}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsxs)(s.p,{children:["In most cases, you should use ",(0,r.jsx)(s.a,{href:"/dotnet/docs/api/class-locator#locator-press",children:"Locator.PressAsync()"})," instead."]})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"key"})," can specify the intended ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key",children:"keyboardEvent.key"})," value or a single character to generate the text for. A superset of the ",(0,r.jsx)(s.code,{children:"key"})," values can be found ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values",children:"here"}),". Examples of the keys are:"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"F1"})," - ",(0,r.jsx)(s.code,{children:"F12"}),", ",(0,r.jsx)(s.code,{children:"Digit0"}),"- ",(0,r.jsx)(s.code,{children:"Digit9"}),", ",(0,r.jsx)(s.code,{children:"KeyA"}),"- ",(0,r.jsx)(s.code,{children:"KeyZ"}),", ",(0,r.jsx)(s.code,{children:"Backquote"}),", ",(0,r.jsx)(s.code,{children:"Minus"}),", ",(0,r.jsx)(s.code,{children:"Equal"}),", ",(0,r.jsx)(s.code,{children:"Backslash"}),", ",(0,r.jsx)(s.code,{children:"Backspace"}),", ",(0,r.jsx)(s.code,{children:"Tab"}),", ",(0,r.jsx)(s.code,{children:"Delete"}),", ",(0,r.jsx)(s.code,{children:"Escape"}),", ",(0,r.jsx)(s.code,{children:"ArrowDown"}),", ",(0,r.jsx)(s.code,{children:"End"}),", ",(0,r.jsx)(s.code,{children:"Enter"}),", ",(0,r.jsx)(s.code,{children:"Home"}),", ",(0,r.jsx)(s.code,{children:"Insert"}),", ",(0,r.jsx)(s.code,{children:"PageDown"}),", ",(0,r.jsx)(s.code,{children:"PageUp"}),", ",(0,r.jsx)(s.code,{children:"ArrowRight"}),", ",(0,r.jsx)(s.code,{children:"ArrowUp"}),", etc."]}),"\n",(0,r.jsxs)(s.p,{children:["Following modification shortcuts are also supported: ",(0,r.jsx)(s.code,{children:"Shift"}),", ",(0,r.jsx)(s.code,{children:"Control"}),", ",(0,r.jsx)(s.code,{children:"Alt"}),", ",(0,r.jsx)(s.code,{children:"Meta"}),", ",(0,r.jsx)(s.code,{children:"ShiftLeft"}),", ",(0,r.jsx)(s.code,{children:"ControlOrMeta"}),". ",(0,r.jsx)(s.code,{children:"ControlOrMeta"})," resolves to ",(0,r.jsx)(s.code,{children:"Control"})," on Windows and Linux and to ",(0,r.jsx)(s.code,{children:"Meta"})," on macOS."]}),"\n",(0,r.jsxs)(s.p,{children:["Holding down ",(0,r.jsx)(s.code,{children:"Shift"})," will type the text that corresponds to the ",(0,r.jsx)(s.code,{children:"key"})," in the upper case."]}),"\n",(0,r.jsxs)(s.p,{children:["If ",(0,r.jsx)(s.code,{children:"key"})," is a single character, it is case-sensitive, so the values ",(0,r.jsx)(s.code,{children:"a"})," and ",(0,r.jsx)(s.code,{children:"A"})," will generate different respective texts."]}),"\n",(0,r.jsxs)(s.p,{children:["Shortcuts such as ",(0,r.jsx)(s.code,{children:'key: "Control+o"'}),", ",(0,r.jsx)(s.code,{children:'key: "Control++'})," or ",(0,r.jsx)(s.code,{children:'key: "Control+Shift+T"'})," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:'await page.GotoAsync("https://keycode.info");\nawait page.Keyboard.PressAsync("A");\nawait page.ScreenshotAsync(new() { Path = "A.png" });\nawait page.Keyboard.PressAsync("ArrowLeft");\nawait page.ScreenshotAsync(new() { Path = "ArrowLeft.png" });\nawait page.Keyboard.PressAsync("Shift+O");\nawait page.ScreenshotAsync(new() { Path = "O.png" });\nawait browser.CloseAsync();\n'})}),"\n",(0,r.jsxs)(s.p,{children:["Shortcut for ",(0,r.jsx)(s.a,{href:"/dotnet/docs/api/class-keyboard#keyboard-down",children:"Keyboard.DownAsync()"})," and ",(0,r.jsx)(s.a,{href:"/dotnet/docs/api/class-keyboard#keyboard-up",children:"Keyboard.UpAsync()"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"key"})," ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-press-option-key"}),(0,r.jsx)("a",{href:"#keyboard-press-option-key",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["Name of the key to press or a character to generate, such as ",(0,r.jsx)(s.code,{children:"ArrowLeft"})," or ",(0,r.jsx)(s.code,{children:"a"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"options"})," ",(0,r.jsx)(s.code,{children:"KeyboardPressOptions?"})," ",(0,r.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Delay"})," [float]? ",(0,r.jsx)(s.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-press-option-delay"}),(0,r.jsx)("a",{href:"#keyboard-press-option-delay",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["Time to wait between ",(0,r.jsx)(s.code,{children:"keydown"})," and ",(0,r.jsx)(s.code,{children:"keyup"})," in milliseconds. Defaults to 0."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void",children:"void"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-press-return"}),(0,r.jsx)("a",{href:"#keyboard-press-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"keyboard-type",children:"TypeAsync"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"keyboard.TypeAsync"}),"\n",(0,r.jsx)(s.admonition,{type:"caution",children:(0,r.jsxs)(s.p,{children:["In most cases, you should use ",(0,r.jsx)(s.a,{href:"/dotnet/docs/api/class-locator#locator-fill",children:"Locator.FillAsync()"})," instead. You only need to press keys one by one if there is special keyboard handling on the page - in this case use ",(0,r.jsx)(s.a,{href:"/dotnet/docs/api/class-locator#locator-press-sequentially",children:"Locator.PressSequentiallyAsync()"}),"."]})}),"\n",(0,r.jsxs)(s.p,{children:["Sends a ",(0,r.jsx)(s.code,{children:"keydown"}),", ",(0,r.jsx)(s.code,{children:"keypress"}),"/",(0,r.jsx)(s.code,{children:"input"}),", and ",(0,r.jsx)(s.code,{children:"keyup"})," event for each character in the text."]}),"\n",(0,r.jsxs)(s.p,{children:["To press a special key, like ",(0,r.jsx)(s.code,{children:"Control"})," or ",(0,r.jsx)(s.code,{children:"ArrowDown"}),", use ",(0,r.jsx)(s.a,{href:"/dotnet/docs/api/class-keyboard#keyboard-press",children:"Keyboard.PressAsync()"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:'await page.Keyboard.TypeAsync("Hello"); // types instantly\nawait page.Keyboard.TypeAsync("World", new() { Delay = 100 }); // types slower, like a user\n'})}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Modifier keys DO NOT effect ",(0,r.jsx)(s.code,{children:"keyboard.type"}),". Holding down ",(0,r.jsx)(s.code,{children:"Shift"})," will not type the text in upper case."]})}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["For characters that are not on a US keyboard, only an ",(0,r.jsx)(s.code,{children:"input"})," event will be sent."]})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"text"})," ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-type-option-text"}),(0,r.jsx)("a",{href:"#keyboard-type-option-text",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"A text to type into a focused element."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"options"})," ",(0,r.jsx)(s.code,{children:"KeyboardTypeOptions?"})," ",(0,r.jsx)(s.em,{children:"(optional)"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Delay"})," [float]? ",(0,r.jsx)(s.em,{children:"(optional)"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-type-option-delay"}),(0,r.jsx)("a",{href:"#keyboard-type-option-delay",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"Time to wait between key presses in milliseconds. Defaults to 0."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void",children:"void"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-type-return"}),(0,r.jsx)("a",{href:"#keyboard-type-return",class:"list-anchor",children:"#"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"keyboard-up",children:"UpAsync"}),"\n",(0,r.jsx)("font",{size:"2",style:{position:"relative",top:"-20px"},children:"Added before v1.9"}),"\n",(0,r.jsx)("x-search",{children:"keyboard.UpAsync"}),"\n",(0,r.jsxs)(s.p,{children:["Dispatches a ",(0,r.jsx)(s.code,{children:"keyup"})," event."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Usage"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-csharp",children:"await Keyboard.UpAsync(key);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Arguments"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"key"})," ",(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string",children:"string"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-up-option-key"}),(0,r.jsx)("a",{href:"#keyboard-up-option-key",class:"list-anchor",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["Name of the key to press or a character to generate, such as ",(0,r.jsx)(s.code,{children:"ArrowLeft"})," or ",(0,r.jsx)(s.code,{children:"a"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void",children:"void"}),(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",class:"list-anchor-link",id:"keyboard-up-return"}),(0,r.jsx)("a",{href:"#keyboard-up-return",class:"list-anchor",children:"#"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);