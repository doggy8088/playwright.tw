"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7015],{8437:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>h,default:()=>y,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var l=a(4848),s=a(8453),t=a(4235),r=a(8328);a(3078);const d={id:"handles",title:"\u63a7\u5236\u4ee3\u78bc (Handles)"},h=void 0,c={id:"handles",title:"\u63a7\u5236\u4ee3\u78bc (Handles)",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/handles.mdx",sourceDirName:".",slug:"/handles",permalink:"/python/docs/handles",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"handles",title:"\u63a7\u5236\u4ee3\u78bc (Handles)"},sidebar:"docs",previous:{title:"\u6846\u67b6 (Frames)",permalink:"/python/docs/frames"},next:{title:"\u9694\u96e2",permalink:"/python/docs/browser-contexts"}},i={},o=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"API \u53c3\u8003",id:"api-\u53c3\u8003",level:3},{value:"\u5143\u7d20\u8655\u7406\u5668",id:"\u5143\u7d20\u8655\u7406\u5668",level:2},{value:"Handles as parameters",id:"handles-as-parameters",level:2},{value:"Handle Lifecycle",id:"handle-lifecycle",level:2},{value:"API \u53c3\u8003",id:"api-\u53c3\u8003-1",level:3},{value:"\u5b9a\u4f4d\u5668 vs ElementHandle",id:"\u5b9a\u4f4d\u5668-vs-elementhandle",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,l.jsx)(n.p,{children:"Playwright \u53ef\u4ee5\u5efa\u7acb\u6307\u5411\u9801\u9762 DOM \u5143\u7d20\u6216\u9801\u9762\u5167\u4efb\u610f\u5176\u4ed6\u7269\u4ef6\u7684\u63a7\u5236\u4ee3\u78bc\u3002\u9019\u4e9b\u63a7\u5236\u4ee3\u78bc\u5b58\u5728\u65bc Playwright \u7a0b\u5e8f\u4e2d\uff0c\u800c\u5be6\u969b\u7269\u4ef6\u5b58\u5728\u65bc\u700f\u89bd\u5668\u4e2d\u3002\u6709\u5169\u7a2e\u985e\u578b\u7684\u63a7\u5236\u4ee3\u78bc:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/python/docs/api/class-jshandle",title:"JSHandle",children:"JSHandle"})," \u53c3\u8003\u9801\u9762\u4e2d\u7684\u4efb\u610f JavaScript \u7269\u4ef6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/python/docs/api/class-elementhandle",title:"ElementHandle",children:"ElementHandle"})," \u53c3\u8003\u9801\u9762\u4e2d\u7684 DOM \u5143\u7d20\uff0c\u5b83\u6709\u984d\u5916\u7684\u65b9\u6cd5\u5141\u8a31\u5c0d\u5143\u7d20\u57f7\u884c\u64cd\u4f5c\u4e26\u65b7\u8a00\u5b83\u5011\u7684\u5c6c\u6027\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u7531\u65bc\u9801\u9762\u4e2d\u7684\u4efb\u4f55 DOM \u5143\u7d20\u4e5f\u662f JavaScript \u7269\u4ef6\uff0c\u56e0\u6b64\u4efb\u4f55 ",(0,l.jsx)(n.a,{href:"/python/docs/api/class-elementhandle",title:"ElementHandle",children:"ElementHandle"})," \u4e5f\u662f ",(0,l.jsx)(n.a,{href:"/python/docs/api/class-jshandle",title:"JSHandle",children:"JSHandle"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u64cd\u4f5c\u67c4\u7528\u65bc\u5c0d\u9801\u9762\u4e2d\u7684\u90a3\u4e9b\u5be6\u969b\u7269\u4ef6\u9032\u884c\u64cd\u4f5c\u3002\u4f60\u53ef\u4ee5\u5728\u64cd\u4f5c\u67c4\u4e0a\u9032\u884c\u8a55\u4f30\uff0c\u7372\u53d6\u64cd\u4f5c\u67c4\u5c6c\u6027\uff0c\u5c07\u64cd\u4f5c\u67c4\u4f5c\u70ba\u8a55\u4f30\u53c3\u6578\u50b3\u905e\uff0c\u5c07\u9801\u9762\u7269\u4ef6\u5e8f\u5217\u5316\u70ba JSON \u7b49\u7b49\u3002\u8acb\u53c3\u95b1 ",(0,l.jsx)(n.a,{href:"https://example.com",children:"JSHandle"})," \u985e\u5225 API \u4ee5\u4e86\u89e3\u9019\u4e9b\u548c\u65b9\u6cd5\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"api-\u53c3\u8003",children:"API \u53c3\u8003"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/python/docs/api/class-jshandle",title:"JSHandle",children:"JSHandle"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/python/docs/api/class-elementhandle",title:"ElementHandle",children:"ElementHandle"})}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u9019\u662f\u7372\u53d6 ",(0,l.jsx)(n.a,{href:"/python/docs/api/class-jshandle",title:"JSHandle",children:"JSHandle"})," \u7684\u6700\u7c21\u55ae\u65b9\u6cd5\u3002"]}),"\n",(0,l.jsxs)(t.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,l.jsx)(r.A,{value:"sync",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:"js_handle = page.evaluate_handle('window')\n#  Use jsHandle for evaluations.\n"})})}),(0,l.jsx)(r.A,{value:"async",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:"js_handle = await page.evaluate_handle('window')\n#  Use jsHandle for evaluations.\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u5143\u7d20\u8655\u7406\u5668",children:"\u5143\u7d20\u8655\u7406\u5668"}),"\n",(0,l.jsx)(n.admonition,{title:"\u4e0d\u5efa\u8b70",type:"warning",children:(0,l.jsxs)(n.p,{children:["\u4e0d\u5efa\u8b70\u4f7f\u7528 ",(0,l.jsx)(n.a,{href:"/python/docs/api/class-elementhandle",title:"ElementHandle",children:"ElementHandle"}),"\uff0c\u8acb\u6539\u7528 ",(0,l.jsx)(n.a,{href:"/python/docs/api/class-locator",title:"Locator",children:"Locator"})," \u7269\u4ef6\u548c web-first \u65b7\u8a00\u3002"]})}),"\n",(0,l.jsxs)(n.p,{children:["\u7576\u9700\u8981 ",(0,l.jsx)(n.a,{href:"/python/docs/api/class-elementhandle",title:"ElementHandle",children:"ElementHandle"})," \u6642\uff0c\u5efa\u8b70\u4f7f\u7528 ",(0,l.jsx)(n.a,{href:"https://playwright.dev/python/docs/api/class-page#page-wait-for-selector",children:"page.wait_for_selector()"})," \u6216 ",(0,l.jsx)(n.a,{href:"https://playwright.dev/python/docs/api/class-frame#frame-wait-for-selector",children:"frame.wait_for_selector()"})," \u65b9\u6cd5\u4f86\u7372\u53d6\u3002\u9019\u4e9b API \u6703\u7b49\u5f85\u5143\u7d20\u9644\u52a0\u4e26\u53ef\u898b\u3002"]}),"\n",(0,l.jsxs)(t.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,l.jsx)(r.A,{value:"sync",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:"# Get the element handle\nelement_handle = page.wait_for_selector('#box')\n\n# Assert bounding box for the element\nbounding_box = element_handle.bounding_box()\nassert bounding_box.width == 100\n\n# Assert attribute for the element\nclass_names = element_handle.get_attribute('class')\nassert 'highlighted' in class_names\n"})})}),(0,l.jsx)(r.A,{value:"async",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:"# Get the element handle\nelement_handle = page.wait_for_selector('#box')\n\n# Assert bounding box for the element\nbounding_box = await element_handle.bounding_box()\nassert bounding_box.width == 100\n\n# Assert attribute for the element\nclass_names = await element_handle.get_attribute('class')\nassert 'highlighted' in class_names\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"handles-as-parameters",children:"Handles as parameters"}),"\n",(0,l.jsxs)(n.p,{children:["\u63a7\u5236\u4ee3\u78bc (Handles) \u53ef\u4ee5\u50b3\u905e\u5230 ",(0,l.jsx)(n.a,{href:"/python/docs/api/class-page#page-evaluate",children:"page.evaluate()"})," \u548c\u985e\u4f3c\u7684\u65b9\u6cd5\u4e2d\u3002\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u7247\u6bb5\u5728\u9801\u9762\u4e2d\u5efa\u7acb\u4e00\u500b\u65b0\u9663\u5217\uff0c\u4f7f\u7528\u8cc7\u6599\u521d\u59cb\u5316\u5b83\uff0c\u4e26\u5c07\u6b64\u9663\u5217\u7684\u63a7\u5236\u4ee3\u78bc (Handles) \u8fd4\u56de\u5230 Playwright\u3002\u7136\u5f8c\u5728\u5f8c\u7e8c\u7684\u8a55\u4f30\u4e2d\u4f7f\u7528\u8a72\u63a7\u5236\u4ee3\u78bc (Handles) :"]}),"\n",(0,l.jsxs)(t.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,l.jsx)(r.A,{value:"sync",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:'# Create new array in page.\nmy_array_handle = page.evaluate_handle("""() => {\n  window.myArray = [1];\n  return myArray;\n}""")\n\n# Get current length of the array.\nlength = page.evaluate("a => a.length", my_array_handle)\n\n# Add one more element to the array using the handle\npage.evaluate("(arg) => arg.myArray.push(arg.newElement)", {\n  \'myArray\': my_array_handle,\n  \'newElement\': 2\n})\n\n# Release the object when it\'s no longer needed.\nmy_array_handle.dispose()\n'})})}),(0,l.jsx)(r.A,{value:"async",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:'# Create new array in page.\nmy_array_handle = await page.evaluate_handle("""() => {\n  window.myArray = [1];\n  return myArray;\n}""")\n\n# Get current length of the array.\nlength = await page.evaluate("a => a.length", my_array_handle)\n\n# Add one more element to the array using the handle\nawait page.evaluate("(arg) => arg.myArray.push(arg.newElement)", {\n  \'myArray\': my_array_handle,\n  \'newElement\': 2\n})\n\n# Release the object when it\'s no longer needed.\nawait my_array_handle.dispose()\n'})})})]}),"\n",(0,l.jsx)(n.h2,{id:"handle-lifecycle",children:"Handle Lifecycle"}),"\n",(0,l.jsxs)(n.p,{children:["\u63a7\u5236\u4ee3\u78bc (Handles) \u53ef\u4ee5\u4f7f\u7528\u9801\u9762\u65b9\u6cd5\u7372\u53d6\uff0c\u4f8b\u5982 ",(0,l.jsx)(n.a,{href:"/python/docs/api/class-page#page-evaluate-handle",children:"page.evaluate_handle()"}),"\u3001",(0,l.jsx)(n.a,{href:"/python/docs/api/class-page#page-query-selector",children:"page.query_selector()"})," \u6216 ",(0,l.jsx)(n.a,{href:"/python/docs/api/class-page#page-query-selector-all",children:"page.query_selector_all()"})," \u6216\u5176\u6846\u67b6\u5c0d\u61c9\u65b9\u6cd5 ",(0,l.jsx)(n.a,{href:"/python/docs/api/class-frame#frame-evaluate-handle",children:"frame.evaluate_handle()"}),"\u3001",(0,l.jsx)(n.a,{href:"/python/docs/api/class-frame#frame-query-selector",children:"frame.query_selector()"})," \u6216 ",(0,l.jsx)(n.a,{href:"/python/docs/api/class-frame#frame-query-selector-all",children:"frame.query_selector_all()"}),"\u3002\u4e00\u65e6\u5efa\u7acb\uff0c\u63a7\u5236\u4ee3\u78bc (Handles) \u5c07\u4fdd\u7559\u7269\u4ef6\u514d\u65bc ",(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management",children:"\u5783\u573e\u56de\u6536"}),"\uff0c\u9664\u975e\u9801\u9762\u5c0e\u822a\u6216\u901a\u904e ",(0,l.jsx)(n.a,{href:"/python/docs/api/class-jshandle#js-handle-dispose",children:"js_handle.dispose()"})," \u65b9\u6cd5\u624b\u52d5\u8655\u7f6e\u63a7\u5236\u4ee3\u78bc (Handles) \u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"api-\u53c3\u8003-1",children:"API \u53c3\u8003"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/python/docs/api/class-jshandle",title:"JSHandle",children:"JSHandle"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/python/docs/api/class-elementhandle",title:"ElementHandle",children:"ElementHandle"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/python/docs/api/class-elementhandle#element-handle-bounding-box",children:"element_handle.bounding_box()"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/python/docs/api/class-elementhandle#element-handle-get-attribute",children:"element_handle.get_attribute()"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/python/docs/api/class-elementhandle#element-handle-inner-text",children:"element_handle.inner_text()"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/python/docs/api/class-elementhandle#element-handle-inner-html",children:"element_handle.inner_html()"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/python/docs/api/class-elementhandle#element-handle-text-content",children:"element_handle.text_content()"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/python/docs/api/class-jshandle#js-handle-evaluate",children:"js_handle.evaluate()"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/python/docs/api/class-page#page-evaluate-handle",children:"page.evaluate_handle()"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/python/docs/api/class-page#page-query-selector",children:"page.query_selector()"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/python/docs/api/class-page#page-query-selector-all",children:"page.query_selector_all()"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5b9a\u4f4d\u5668-vs-elementhandle",children:"\u5b9a\u4f4d\u5668 vs ElementHandle"}),"\n",(0,l.jsx)(n.admonition,{type:"caution",children:(0,l.jsxs)(n.p,{children:["\u6211\u5011\u53ea\u5efa\u8b70\u5728\u9700\u8981\u5c0d\u975c\u614b\u9801\u9762\u9032\u884c\u5927\u91cf DOM \u904d\u6b77\u7684\u7f55\u898b\u60c5\u6cc1\u4e0b\u4f7f\u7528 ",(0,l.jsx)(n.a,{href:"/python/docs/api/class-elementhandle",title:"ElementHandle",children:"ElementHandle"}),"\u3002\u5c0d\u65bc\u6240\u6709\u4f7f\u7528\u8005\u64cd\u4f5c\u548c\u65b7\u8a00\uff0c\u8acb\u6539\u7528\u5b9a\u4f4d\u5668\u3002"]})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/python/docs/api/class-locator",title:"Locator",children:"Locator"})," \u548c ",(0,l.jsx)(n.a,{href:"/python/docs/api/class-elementhandle",title:"ElementHandle",children:"ElementHandle"})," \u4e4b\u9593\u7684\u5340\u5225\u5728\u65bc\u5f8c\u8005\u6307\u5411\u7279\u5b9a\u5143\u7d20\uff0c\u800c Locator \u6355\u6349\u5982\u4f55\u6aa2\u7d22\u8a72\u5143\u7d20\u7684\u908f\u8f2f\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u4ee5\u4e0b\u7bc4\u4f8b\u4e2d\uff0chandle \u6307\u5411\u9801\u9762\u4e0a\u7684\u7279\u5b9a DOM \u5143\u7d20\u3002\u5982\u679c\u8a72\u5143\u7d20\u66f4\u6539\u4e86\u6587\u672c\u6216\u88ab React \u7528\u65bc\u6e32\u67d3\u5b8c\u5168\u4e0d\u540c\u7684\u7d44\u4ef6\uff0chandle \u4ecd\u7136\u6307\u5411\u90a3\u500b\u975e\u5e38\u904e\u6642\u7684 DOM \u5143\u7d20\u3002\u9019\u53ef\u80fd\u6703\u5c0e\u81f4\u610f\u5916\u7684\u884c\u70ba\u3002"}),"\n",(0,l.jsxs)(t.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,l.jsx)(r.A,{value:"sync",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:'handle = page.query_selector("text=Submit")\nhandle.hover()\nhandle.click()\n'})})}),(0,l.jsx)(r.A,{value:"async",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:'handle = await page.query_selector("text=Submit")\nawait handle.hover()\nawait handle.click()\n'})})})]}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528\u5b9a\u4f4d\u5668\u6642\uff0c\u6bcf\u6b21\u4f7f\u7528\u5b9a\u4f4d\u5668\u6642\uff0c\u6703\u4f7f\u7528\u9078\u64c7\u5668\u5728\u9801\u9762\u4e2d\u5b9a\u4f4d\u6700\u65b0\u7684 DOM \u5143\u7d20\u3002\u56e0\u6b64\uff0c\u5728\u4e0b\u9762\u7684\u7a0b\u5f0f\u78bc\u7247\u6bb5\u4e2d\uff0c\u57fa\u790e DOM \u5143\u7d20\u5c07\u88ab\u5b9a\u4f4d\u5169\u6b21\u3002"}),"\n",(0,l.jsxs)(t.A,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],children:[(0,l.jsx)(r.A,{value:"sync",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:'locator = page.get_by_text("Submit")\nlocator.hover()\nlocator.click()\n'})})}),(0,l.jsx)(r.A,{value:"async",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:'locator = page.get_by_text("Submit")\nawait locator.hover()\nawait locator.click()\n'})})})]})]})}function y(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}}}]);