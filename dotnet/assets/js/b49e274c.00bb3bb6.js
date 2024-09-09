"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2769],{2915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var i=n(4848),o=n(8453);n(4235),n(8328),n(3078);const a={id:"input",title:"Actions"},s=void 0,l={id:"input",title:"Actions",description:"Introduction",source:"@site/docs/input.mdx",sourceDirName:".",slug:"/input",permalink:"/dotnet/docs/next/input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"input",title:"Actions"},sidebar:"docs",previous:{title:"Release notes",permalink:"/dotnet/docs/next/release-notes"},next:{title:"Auto-waiting",permalink:"/dotnet/docs/next/actionability"}},c={},r=[{value:"Introduction",id:"introduction",level:2},{value:"Text input",id:"text-input",level:2},{value:"Checkboxes and radio buttons",id:"checkboxes-and-radio-buttons",level:2},{value:"Select options",id:"select-options",level:2},{value:"Mouse click",id:"mouse-click",level:2},{value:"Forcing the click",id:"forcing-the-click",level:4},{value:"Programmatic click",id:"programmatic-click",level:4},{value:"Type characters",id:"type-characters",level:2},{value:"Keys and shortcuts",id:"keys-and-shortcuts",level:2},{value:"Upload files",id:"upload-files",level:2},{value:"Focus element",id:"focus-element",level:2},{value:"Drag and Drop",id:"drag-and-drop",level:2},{value:"Dragging manually",id:"dragging-manually",level:3},{value:"Scrolling",id:"scrolling",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"Playwright can interact with HTML Input elements such as text inputs, checkboxes, radio buttons, select options, mouse clicks, type characters, keys and shortcuts as well as upload files and focus elements."}),"\n",(0,i.jsx)(t.h2,{id:"text-input",children:"Text input"}),"\n",(0,i.jsxs)(t.p,{children:["Using ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-locator#locator-fill",children:"Locator.FillAsync()"})," is the easiest way to fill out the form fields. It focuses the element and triggers an ",(0,i.jsx)(t.code,{children:"input"})," event with the entered text. It works for ",(0,i.jsx)(t.code,{children:"<input>"}),", ",(0,i.jsx)(t.code,{children:"<textarea>"})," and ",(0,i.jsx)(t.code,{children:"[contenteditable]"})," elements."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// Text input\nawait page.GetByRole(AriaRole.Textbox).FillAsync("Peter");\n\n// Date input\nawait page.GetByLabel("Birth date").FillAsync("2020-02-02");\n\n// Time input\nawait page.GetByLabel("Appointment time").FillAsync("13-15");\n\n// Local datetime input\nawait page.GetByLabel("Local time").FillAsync("2020-03-02T05:15");\n'})}),"\n",(0,i.jsx)(t.h2,{id:"checkboxes-and-radio-buttons",children:"Checkboxes and radio buttons"}),"\n",(0,i.jsxs)(t.p,{children:["Using ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-locator#locator-set-checked",children:"Locator.SetCheckedAsync()"})," is the easiest way to check and uncheck a checkbox or a radio button. This method can be used with ",(0,i.jsx)(t.code,{children:"input[type=checkbox]"}),", ",(0,i.jsx)(t.code,{children:"input[type=radio]"})," and ",(0,i.jsx)(t.code,{children:"[role=checkbox]"})," elements."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// Check the checkbox\nawait page.GetByLabel("I agree to the terms above").CheckAsync();\n\n// Assert the checked state\nawait Expect(page.GetByLabel("Subscribe to newsletter")).ToBeCheckedAsync();\n\n// Select the radio button\nawait page.GetByLabel("XL").CheckAsync();\n'})}),"\n",(0,i.jsx)(t.h2,{id:"select-options",children:"Select options"}),"\n",(0,i.jsxs)(t.p,{children:["Selects one or multiple options in the ",(0,i.jsx)(t.code,{children:"<select>"})," element with ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-locator#locator-select-option",children:"Locator.SelectOptionAsync()"}),". You can specify option ",(0,i.jsx)(t.code,{children:"value"}),", or ",(0,i.jsx)(t.code,{children:"label"})," to select. Multiple options can be selected."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// Single selection matching the value or label\nawait page.GetByLabel("Choose a color").SelectOptionAsync("blue");\n\n// Single selection matching the label\nawait page.GetByLabel("Choose a color").SelectOptionAsync(new SelectOptionValue { Label = "blue" });\n\n// Multiple selected items\nawait page.GetByLabel("Choose multiple colors").SelectOptionAsync(new[] { "blue", "green", "red" });\n'})}),"\n",(0,i.jsx)(t.h2,{id:"mouse-click",children:"Mouse click"}),"\n",(0,i.jsx)(t.p,{children:"Performs a simple human click."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// Generic click\nawait page.GetByRole(AriaRole.Button).ClickAsync();\n\n// Double click\nawait page.GetByText("Item").DblClickAsync();\n\n// Right click\nawait page.GetByText("Item").ClickAsync(new() { Button = MouseButton.Right });\n\n// Shift + click\nawait page.GetByText("Item").ClickAsync(new() { Modifiers = new[] { KeyboardModifier.Shift } });\n\n// Ctrl + click or Windows and Linux\n// Meta + click on macOS\nawait page.GetByText("Item").ClickAsync(new() { Modifiers = new[] { KeyboardModifier.ControlOrMeta } });\n\n// Hover over element\nawait page.GetByText("Item").HoverAsync();\n\n// Click the top left corner\nawait page.GetByText("Item").ClickAsync(new() { position = new Position { X = 0, Y = 0 } });\n'})}),"\n",(0,i.jsx)(t.p,{children:"Under the hood, this and other pointer-related methods:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"wait for element with given selector to be in DOM"}),"\n",(0,i.jsxs)(t.li,{children:["wait for it to become displayed, i.e. not empty, no ",(0,i.jsx)(t.code,{children:"display:none"}),", no ",(0,i.jsx)(t.code,{children:"visibility:hidden"})]}),"\n",(0,i.jsx)(t.li,{children:"wait for it to stop moving, for example, until css transition finishes"}),"\n",(0,i.jsx)(t.li,{children:"scroll the element into view"}),"\n",(0,i.jsx)(t.li,{children:"wait for it to receive pointer events at the action point, for example, waits until element becomes non-obscured by other elements"}),"\n",(0,i.jsx)(t.li,{children:"retry if the element is detached during any of the above checks"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"forcing-the-click",children:"Forcing the click"}),"\n",(0,i.jsxs)(t.p,{children:["Sometimes, apps use non-trivial logic where hovering the element overlays it with another element that intercepts the click. This behavior is indistinguishable from a bug where element gets covered and the click is dispatched elsewhere. If you know this is taking place, you can bypass the ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/actionability",children:"actionability"})," checks and force the click:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"await page.GetByRole(AriaRole.Button).ClickAsync(new() { Force = true });\n"})}),"\n",(0,i.jsx)(t.h4,{id:"programmatic-click",children:"Programmatic click"}),"\n",(0,i.jsxs)(t.p,{children:["If you are not interested in testing your app under the real conditions and want to simulate the click by any means possible, you can trigger the ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click",children:(0,i.jsx)(t.code,{children:"HTMLElement.click()"})})," behavior via simply dispatching a click event on the element with ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-locator#locator-dispatch-event",children:"Locator.DispatchEventAsync()"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'await page.GetByRole(AriaRole.Button).DispatchEventAsync("click");\n'})}),"\n",(0,i.jsx)(t.h2,{id:"type-characters",children:"Type characters"}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["Most of the time, you should input text with ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-locator#locator-fill",children:"Locator.FillAsync()"}),". See the ",(0,i.jsx)(t.a,{href:"#text-input",children:"Text input"})," section above. You only need to type characters if there is special keyboard handling on the page."]})}),"\n",(0,i.jsxs)(t.p,{children:["Type into the field character by character, as if it was a user with a real keyboard with ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-locator#locator-press-sequentially",children:"Locator.PressSequentiallyAsync()"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// Press keys one by one\nawait Page.Locator("#area").PressSequentiallyAsync("Hello World!");\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This method will emit all the necessary keyboard events, with all the ",(0,i.jsx)(t.code,{children:"keydown"}),", ",(0,i.jsx)(t.code,{children:"keyup"}),", ",(0,i.jsx)(t.code,{children:"keypress"})," events in place. You can even specify the optional ",(0,i.jsx)(t.code,{children:"delay"})," between the key presses to simulate real user behavior."]}),"\n",(0,i.jsx)(t.h2,{id:"keys-and-shortcuts",children:"Keys and shortcuts"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// Hit Enter\nawait page.GetByText("Submit").PressAsync("Enter");\n\n// Dispatch Control+Right\nawait page.GetByRole(AriaRole.Textbox).PressAsync("Control+ArrowRight");\n\n// Press $ sign on keyboard\nawait page.GetByRole(AriaRole.Textbox).PressAsync("$");\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-locator#locator-press",children:"Locator.PressAsync()"})," method focuses the selected element and produces a single keystroke. It accepts the logical key names that are emitted in the ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key",children:"keyboardEvent.key"})," property of the keyboard events:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-txt",children:"Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,\nArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,\nArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["You can alternatively specify a single character you'd like to produce such as ",(0,i.jsx)(t.code,{children:'"a"'})," or ",(0,i.jsx)(t.code,{children:'"#"'}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Following modification shortcuts are also supported: ",(0,i.jsx)(t.code,{children:"Shift, Control, Alt, Meta"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Simple version produces a single character. This character is case-sensitive, so ",(0,i.jsx)(t.code,{children:'"a"'})," and ",(0,i.jsx)(t.code,{children:'"A"'})," will produce different results."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// <input id=name>\nawait page.Locator("#name").PressAsync("Shift+A");\n\n// <input id=name>\nawait page.Locator("#name").PressAsync("Shift+ArrowLeft");\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Shortcuts such as ",(0,i.jsx)(t.code,{children:'"Control+o"'})," or ",(0,i.jsx)(t.code,{children:'"Control+Shift+T"'})," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."]}),"\n",(0,i.jsxs)(t.p,{children:["Note that you still need to specify the capital ",(0,i.jsx)(t.code,{children:"A"})," in ",(0,i.jsx)(t.code,{children:"Shift-A"})," to produce the capital character. ",(0,i.jsx)(t.code,{children:"Shift-a"})," produces a lower-case one as if you had the ",(0,i.jsx)(t.code,{children:"CapsLock"})," toggled."]}),"\n",(0,i.jsx)(t.h2,{id:"upload-files",children:"Upload files"}),"\n",(0,i.jsxs)(t.p,{children:["You can select input files for upload using the ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-locator#locator-set-input-files",children:"Locator.SetInputFilesAsync()"})," method. It expects first argument to point to an ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",children:"input element"})," with the type ",(0,i.jsx)(t.code,{children:'"file"'}),". Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the current working directory. Empty array clears the selected files."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// Select one file\nawait page.GetByLabel("Upload file").SetInputFilesAsync("myfile.pdf");\n\n// Select multiple files\nawait page.GetByLabel("Upload files").SetInputFilesAsync(new[] { "file1.txt", "file12.txt" });\n\n// Select a directory\nawait page.GetByLabel("Upload directory").SetInputFilesAsync("mydir");\n\n// Remove all the selected files\nawait page.GetByLabel("Upload file").SetInputFilesAsync(new[] {});\n\n// Upload buffer from memory\nawait page.GetByLabel("Upload file").SetInputFilesAsync(new FilePayload\n{\n    Name = "file.txt",\n    MimeType = "text/plain",\n    Buffer = System.Text.Encoding.UTF8.GetBytes("this is a test"),\n});\n'})}),"\n",(0,i.jsxs)(t.p,{children:["If you don't have input element in hand (it is created dynamically), you can handle the ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-page#page-event-file-chooser",children:"Page.FileChooser"})," event or use a corresponding waiting method upon your action:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'var fileChooser = page.RunAndWaitForFileChooserAsync(async () =>\n{\n    await page.GetByLabel("Upload file").ClickAsync();\n});\nawait fileChooser.SetFilesAsync("myfile.pdf");\n'})}),"\n",(0,i.jsx)(t.h2,{id:"focus-element",children:"Focus element"}),"\n",(0,i.jsxs)(t.p,{children:["For the dynamic pages that handle focus events, you can focus the given element with ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-locator#locator-focus",children:"Locator.FocusAsync()"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'await page.GetByLabel("Password").FocusAsync();\n'})}),"\n",(0,i.jsx)(t.h2,{id:"drag-and-drop",children:"Drag and Drop"}),"\n",(0,i.jsxs)(t.p,{children:["You can perform drag&drop operation with ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-locator#locator-drag-to",children:"Locator.DragToAsync()"}),". This method will:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Hover the element that will be dragged."}),"\n",(0,i.jsx)(t.li,{children:"Press left mouse button."}),"\n",(0,i.jsx)(t.li,{children:"Move mouse to the element that will receive the drop."}),"\n",(0,i.jsx)(t.li,{children:"Release left mouse button."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'await page.Locator("#item-to-be-dragged").DragToAsync(page.Locator("#item-to-drop-at"));\n'})}),"\n",(0,i.jsx)(t.h3,{id:"dragging-manually",children:"Dragging manually"}),"\n",(0,i.jsxs)(t.p,{children:["If you want precise control over the drag operation, use lower-level methods like ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-locator#locator-hover",children:"Locator.HoverAsync()"}),", ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-mouse#mouse-down",children:"Mouse.DownAsync()"}),", ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-mouse#mouse-move",children:"Mouse.MoveAsync()"})," and ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-mouse#mouse-up",children:"Mouse.UpAsync()"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'await page.Locator("#item-to-be-dragged").HoverAsync();\nawait page.Mouse.DownAsync();\nawait page.Locator("#item-to-drop-at").HoverAsync();\nawait page.Mouse.UpAsync();\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["If your page relies on the ",(0,i.jsx)(t.code,{children:"dragover"})," event being dispatched, you need at least two mouse moves to trigger it in all browsers. To reliably issue the second mouse move, repeat your ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-mouse#mouse-move",children:"Mouse.MoveAsync()"})," or ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-locator#locator-hover",children:"Locator.HoverAsync()"})," twice. The sequence of operations would be: hover the drag element, mouse down, hover the drop element, hover the drop element second time, mouse up."]})}),"\n",(0,i.jsx)(t.h2,{id:"scrolling",children:"Scrolling"}),"\n",(0,i.jsx)(t.p,{children:"Most of the time, Playwright will automatically scroll for you before doing any actions. Therefore, you do not need to scroll explicitly."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"// Scrolls automatically so that button is visible\nawait page.GetByRole(AriaRole.Button).ClickAsync();\n"})}),"\n",(0,i.jsx)(t.p,{children:'However, in rare cases you might need to manually scroll. For example, you might want to force an "infinite list" to load more elements, or position the page for a specific screenshot. In such a case, the most reliable way is to find an element that you want to make visible at the bottom, and scroll it into view.'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// Scroll the footer into view, forcing an "infinite list" to load more content\nawait page.GetByText("Footer text").ScrollIntoViewIfNeededAsync();\n'})}),"\n",(0,i.jsxs)(t.p,{children:["If you would like to control the scrolling more precisely, use ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-mouse#mouse-wheel",children:"Mouse.WheelAsync()"})," or ",(0,i.jsx)(t.a,{href:"/dotnet/docs/next/api/class-locator#locator-evaluate",children:"Locator.EvaluateAsync()"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'// Position the mouse and scroll with the mouse wheel\nawait page.GetByTestId("scrolling-container").HoverAsync();\nawait page.Mouse.WheelAsync(0, 10);\n\n// Alternatively, programmatically scroll a specific element\nawait page.GetByTestId("scrolling-container").EvaluateAsync("e => e.scrollTop += 100");\n'})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);