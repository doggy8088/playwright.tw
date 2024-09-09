"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6108],{7849:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>h,default:()=>g,frontMatter:()=>t,metadata:()=>c,toc:()=>p});var l=a(4848),i=a(8453),r=a(4235),s=a(8328);a(3078);const t={id:"library",title:"\u958b\u59cb\u4f7f\u7528 - \u51fd\u5f0f\u5eab"},h=void 0,c={id:"library",title:"\u958b\u59cb\u4f7f\u7528 - \u51fd\u5f0f\u5eab",description:"\u5b89\u88dd",source:"@site/versioned_docs/version-stable/library.mdx",sourceDirName:".",slug:"/library",permalink:"/python/docs/library",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"library",title:"\u958b\u59cb\u4f7f\u7528 - \u51fd\u5f0f\u5eab"},sidebar:"docs",previous:{title:"Pytest \u5916\u639b\u53c3\u8003",permalink:"/python/docs/test-runners"},next:{title:"\u767c\u884c\u8aaa\u660e",permalink:"/python/docs/release-notes"}},o={},p=[{value:"\u5b89\u88dd",id:"\u5b89\u88dd",level:2},{value:"Pip",id:"pip",level:3},{value:"Conda",id:"conda",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u7b2c\u4e00\u500b\u8173\u672c",id:"\u7b2c\u4e00\u500b\u8173\u672c",level:2},{value:"\u4e92\u52d5\u6a21\u5f0f (REPL)",id:"\u4e92\u52d5\u6a21\u5f0f-repl",level:2},{value:"Pyinstaller",id:"pyinstaller",level:2},{value:"\u5df2\u77e5\u554f\u984c",id:"\u5df2\u77e5\u554f\u984c",level:2},{value:"<code>time.sleep()</code> \u5c0e\u81f4\u904e\u6642\u72c0\u614b",id:"timesleep-\u5c0e\u81f4\u904e\u6642\u72c0\u614b",level:3},{value:"\u8207 Windows \u4e0a\u7684 <code>SelectorEventLoop</code> \u4e0d\u76f8\u5bb9",id:"\u8207-windows-\u4e0a\u7684-selectoreventloop-\u4e0d\u76f8\u5bb9",level:3},{value:"\u57f7\u884c\u7dd2",id:"\u57f7\u884c\u7dd2",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u5b89\u88dd",children:"\u5b89\u88dd"}),"\n",(0,l.jsx)(n.h3,{id:"pip",children:"Pip"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://pypi.python.org/pypi/playwright/",children:(0,l.jsx)(n.img,{src:"https://badge.fury.io/py/playwright.svg",alt:"PyPI version"})})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pip install --upgrade pip\npip install playwright\nplaywright install\n"})}),"\n",(0,l.jsx)(n.h3,{id:"conda",children:"Conda"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://anaconda.org/Microsoft/playwright",children:(0,l.jsx)(n.img,{src:"https://img.shields.io/conda/v/microsoft/playwright",alt:"Anaconda version"})})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"conda config --add channels conda-forge\nconda config --add channels microsoft\nconda install playwright\nplaywright install\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u9019\u4e9b\u547d\u4ee4\u6703\u4e0b\u8f09 Playwright \u5957\u4ef6\u4e26\u5b89\u88dd Chromium\u3001Firefox \u548c WebKit \u7684\u700f\u89bd\u5668\u4e8c\u9032\u4f4d\u6a94\u3002\u8981\u4fee\u6539\u6b64\u884c\u70ba\uff0c\u8acb\u53c3\u95b1",(0,l.jsx)(n.a,{href:"/python/docs/browsers#install-browsers",children:"\u5b89\u88dd\u53c3\u6578"}),"\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,l.jsxs)(n.p,{children:["\u4e00\u65e6\u5b89\u88dd\u5b8c\u6210\uff0c\u4f60\u53ef\u4ee5\u5728 Python \u8173\u672c\u4e2d ",(0,l.jsx)(n.code,{children:"import"})," Playwright\uff0c\u4e26\u555f\u52d5\u4efb\u610f 3 \u500b\u700f\u89bd\u5668\uff08",(0,l.jsx)(n.code,{children:"chromium"}),"\u3001",(0,l.jsx)(n.code,{children:"firefox"})," \u548c ",(0,l.jsx)(n.code,{children:"webkit"}),"\uff09\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:'from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto("http://playwright.dev")\n    print(page.title())\n    browser.close()\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Playwright \u652f\u63f4\u5169\u7a2e API \u8b8a\u9ad4: \u540c\u6b65\u548c\u975e\u540c\u6b65\u3002\u5982\u679c\u4f60\u7684\u73fe\u4ee3\u5c08\u6848\u4f7f\u7528 ",(0,l.jsx)(n.a,{href:"https://docs.python.org/3/library/asyncio.html",children:"asyncio"}),"\uff0c\u4f60\u61c9\u8a72\u4f7f\u7528\u975e\u540c\u6b65 API:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        browser = await p.chromium.launch()\n        page = await browser.new_page()\n        await page.goto("http://playwright.dev")\n        print(await page.title())\n        await browser.close()\n\nasyncio.run(main())\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u7b2c\u4e00\u500b\u8173\u672c",children:"\u7b2c\u4e00\u500b\u8173\u672c"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u6211\u5011\u7684\u7b2c\u4e00\u500b\u7a0b\u5f0f\u78bc\u4e2d\uff0c\u6211\u5011\u5c07\u5c0e\u822a\u5230 ",(0,l.jsx)(n.code,{children:"https://playwright.dev/"})," \u4e26\u5728 WebKit \u4e2d\u622a\u5716\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:'from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.webkit.launch()\n    page = browser.new_page()\n    page.goto("https://playwright.dev/")\n    page.screenshot(path="example.png")\n    browser.close()\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0cPlaywright \u6703\u5728\u7121\u982d\u6a21\u5f0f\u4e0b\u57f7\u884c\u700f\u89bd\u5668\u3002\u8981\u67e5\u770b\u700f\u89bd\u5668 UI\uff0c\u555f\u52d5\u700f\u89bd\u5668\u6642\u50b3\u905e ",(0,l.jsx)(n.code,{children:"headless=False"})," \u65d7\u6a19\u3002\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"slow_mo"})," \u4f86\u6e1b\u6162\u57f7\u884c\u901f\u5ea6\u3002\u5728\u5075\u932f\u5de5\u5177",(0,l.jsx)(n.a,{href:"/python/docs/debug",children:"\u90e8\u5206"}),"\u4e86\u89e3\u66f4\u591a\u8cc7\u8a0a\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:"firefox.launch(headless=False, slow_mo=50)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u4e92\u52d5\u6a21\u5f0f-repl",children:"\u4e92\u52d5\u6a21\u5f0f (REPL)"}),"\n",(0,l.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u555f\u52d5\u4e92\u52d5\u5f0f python REPL:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"python\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7136\u5f8c\u5728\u5176\u4e2d\u555f\u52d5 Playwright \u4ee5\u9032\u884c\u5feb\u901f\u5be6\u9a57:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:'from playwright.sync_api import sync_playwright\nplaywright = sync_playwright().start()\n# Use playwright.chromium, playwright.firefox or playwright.webkit\n# Pass headless=False to launch() to see the browser UI\nbrowser = playwright.chromium.launch()\npage = browser.new_page()\npage.goto("https://playwright.dev/")\npage.screenshot(path="example.png")\nbrowser.close()\nplaywright.stop()\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u7570\u6b65 REPL\uff0c\u4f8b\u5982 ",(0,l.jsx)(n.code,{children:"asyncio"})," REPL:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"python -m asyncio\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",children:'from playwright.async_api import async_playwright\nplaywright = await async_playwright().start()\nbrowser = await playwright.chromium.launch()\npage = await browser.new_page()\nawait page.goto("https://playwright.dev/")\nawait page.screenshot(path="example.png")\nawait browser.close()\nawait playwright.stop()\n'})}),"\n",(0,l.jsx)(n.h2,{id:"pyinstaller",children:"Pyinstaller"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 Playwright \u642d\u914d ",(0,l.jsx)(n.a,{href:"https://www.pyinstaller.org/",children:"Pyinstaller"})," \u5efa\u7acb\u7368\u7acb\u7684\u53ef\u57f7\u884c\u6a94\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-py",metastring:'title="main.py"',children:'from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch()\n    page = browser.new_page()\n    page.goto("https://playwright.dev/")\n    page.screenshot(path="example.png")\n    browser.close()\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u4f60\u60f3\u5c07\u700f\u89bd\u5668\u8207\u53ef\u57f7\u884c\u6a94\u7d91\u7d81\u5728\u4e00\u8d77:"}),"\n",(0,l.jsxs)(r.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,l.jsx)(s.A,{value:"bash",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"PLAYWRIGHT_BROWSERS_PATH=0 playwright install chromium\npyinstaller -F main.py\n"})})}),(0,l.jsx)(s.A,{value:"powershell",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-powershell",children:'$env:PLAYWRIGHT_BROWSERS_PATH="0"\nplaywright install chromium\npyinstaller -F main.py\n'})})}),(0,l.jsx)(s.A,{value:"batch",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-batch",children:"set PLAYWRIGHT_BROWSERS_PATH=0\nplaywright install chromium\npyinstaller -F main.py\n"})})})]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"\u5c07\u700f\u89bd\u5668\u8207\u53ef\u57f7\u884c\u6a94\u6346\u7d81\u5728\u4e00\u8d77\u6703\u751f\u6210\u66f4\u5927\u7684\u4e8c\u9032\u4f4d\u6a94\u6848\u3002\u5efa\u8b70\u50c5\u6346\u7d81\u60a8\u4f7f\u7528\u7684\u700f\u89bd\u5668\u3002"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5df2\u77e5\u554f\u984c",children:"\u5df2\u77e5\u554f\u984c"}),"\n",(0,l.jsxs)(n.h3,{id:"timesleep-\u5c0e\u81f4\u904e\u6642\u72c0\u614b",children:[(0,l.jsx)(n.code,{children:"time.sleep()"})," \u5c0e\u81f4\u904e\u6642\u72c0\u614b"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5f88\u53ef\u80fd\u4f60\u4e0d\u9700\u8981\u624b\u52d5\u7b49\u5f85\uff0c\u56e0\u70ba Playwright \u6709",(0,l.jsx)(n.a,{href:"/python/docs/actionability",children:"\u81ea\u52d5\u7b49\u5f85"}),"\u3002\u5982\u679c\u4f60\u4ecd\u7136\u4f9d\u8cf4\u5b83\uff0c\u4f60\u61c9\u8a72\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"page.wait_for_timeout(5000)"})," \u800c\u4e0d\u662f ",(0,l.jsx)(n.code,{children:"time.sleep(5)"}),"\uff0c\u6700\u597d\u5b8c\u5168\u4e0d\u8981\u7b49\u5f85\u8d85\u6642\uff0c\u4f46\u6709\u6642\u5b83\u5c0d\u9664\u932f\u5f88\u6709\u7528\u3002\u5728\u9019\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u4f7f\u7528\u6211\u5011\u7684\u7b49\u5f85\uff08",(0,l.jsx)(n.code,{children:"wait_for_timeout"}),"\uff09\u65b9\u6cd5\u800c\u4e0d\u662f ",(0,l.jsx)(n.code,{children:"time"})," \u6a21\u7d44\u3002\u9019\u662f\u56e0\u70ba\u6211\u5011\u5167\u90e8\u4f9d\u8cf4\u975e\u540c\u6b65\u64cd\u4f5c\uff0c\u800c\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"time.sleep(5)"})," \u6642\uff0c\u5b83\u5011\u7121\u6cd5\u6b63\u78ba\u8655\u7406\u3002"]}),"\n",(0,l.jsxs)(n.h3,{id:"\u8207-windows-\u4e0a\u7684-selectoreventloop-\u4e0d\u76f8\u5bb9",children:["\u8207 Windows \u4e0a\u7684 ",(0,l.jsx)(n.code,{children:"SelectorEventLoop"})," \u4e0d\u76f8\u5bb9"]}),"\n",(0,l.jsxs)(n.p,{children:["Playwright \u5728\u5b50\u7a0b\u5e8f\u4e2d\u57f7\u884c\u9a45\u52d5\u7a0b\u5f0f\uff0c\u56e0\u6b64\u5728 Windows \u4e0a\u9700\u8981 ",(0,l.jsx)(n.code,{children:"asyncio"})," \u7684 ",(0,l.jsx)(n.code,{children:"ProactorEventLoop"}),"\uff0c\u56e0\u70ba ",(0,l.jsx)(n.code,{children:"SelectorEventLoop"})," \u4e0d\u652f\u63f4\u975e\u540c\u6b65\u5b50\u7a0b\u5e8f\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 Windows Python 3.7 \u4e0a\uff0cPlaywright \u5c07\u9810\u8a2d\u4e8b\u4ef6\u8ff4\u5708\u8a2d\u7f6e\u70ba ",(0,l.jsx)(n.code,{children:"ProactorEventLoop"}),"\uff0c\u56e0\u70ba\u5b83\u662f Python 3.8+ \u7684\u9810\u8a2d\u503c\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u57f7\u884c\u7dd2",children:"\u57f7\u884c\u7dd2"}),"\n",(0,l.jsxs)(n.p,{children:["Playwright \u7684 API \u4e0d\u662f\u7dda\u7a0b\u5b89\u5168\u7684\u3002\u5982\u679c\u4f60\u5728\u591a\u7dda\u7a0b\u74b0\u5883\u4e2d\u4f7f\u7528 Playwright\uff0c\u4f60\u61c9\u8a72\u70ba\u6bcf\u500b\u7dda\u7a0b\u5efa\u7acb\u4e00\u500b playwright \u5be6\u4f8b\u3002\u8a73\u60c5\u8acb\u53c3\u95b1",(0,l.jsx)(n.a,{href:"https://github.com/microsoft/playwright-python/issues/623",children:"\u7dda\u7a0b\u554f\u984c"}),"\u3002"]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);