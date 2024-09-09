"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4117],{3708:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var t=a(4848),i=a(8453);a(4235),a(8328),a(3078);const s={id:"pages",title:"\u9801\u9762"},o=void 0,l={id:"pages",title:"\u9801\u9762",description:"\u9801\u9762",source:"@site/versioned_docs/version-stable/pages.mdx",sourceDirName:".",slug:"/pages",permalink:"/docs/pages",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"pages",title:"\u9801\u9762"},sidebar:"docs",previous:{title:"\u9801\u9762\u7269\u4ef6\u6a21\u578b",permalink:"/docs/pom"},next:{title:"\u622a\u5716",permalink:"/docs/screenshots"}},c={},p=[{value:"\u9801\u9762",id:"\u9801\u9762",level:2},{value:"\u591a\u500b\u9801\u9762",id:"\u591a\u500b\u9801\u9762",level:2},{value:"\u8655\u7406\u65b0\u9801\u9762",id:"\u8655\u7406\u65b0\u9801\u9762",level:2},{value:"\u8655\u7406\u5f48\u51fa\u8996\u7a97",id:"\u8655\u7406\u5f48\u51fa\u8996\u7a97",level:2}];function r(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u9801\u9762",children:"\u9801\u9762"}),"\n",(0,t.jsxs)(n.p,{children:["\u6bcf\u500b ",(0,t.jsx)(n.a,{href:"/docs/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"})," \u53ef\u4ee5\u6709\u591a\u500b\u9801\u9762\u3002 ",(0,t.jsx)(n.a,{href:"/docs/api/class-page",title:"Page",children:"Page"})," \u6307\u7684\u662f\u700f\u89bd\u5668\u4e0a\u4e0b\u6587\u4e2d\u7684\u55ae\u500b\u5206\u9801\u6216\u5f48\u51fa\u8996\u7a97\u3002\u5b83\u61c9\u8a72\u7528\u65bc\u5c0e\u822a\u5230 URL \u4e26\u8207\u9801\u9762\u5167\u5bb9\u9032\u884c\u4e92\u52d5\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Create a page.\nconst page = await context.newPage();\n\n// Navigate explicitly, similar to entering a URL in the browser.\nawait page.goto('http://example.com');\n// Fill an input.\nawait page.locator('#search').fill('query');\n\n// Navigate implicitly by clicking a link.\nawait page.locator('#submit').click();\n// Expect a new url.\nconsole.log(page.url());\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u591a\u500b\u9801\u9762",children:"\u591a\u500b\u9801\u9762"}),"\n",(0,t.jsx)(n.p,{children:"\u6bcf\u500b\u700f\u89bd\u5668\u4e0a\u4e0b\u6587\u53ef\u4ee5\u627f\u8f09\u591a\u500b\u9801\u9762 (\u6a19\u7c64)\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6bcf\u500b\u9801\u9762\u90fd\u50cf\u4e00\u500b\u5c08\u6ce8\u7684\u3001\u6d3b\u8e8d\u7684\u9801\u9762\u3002\u4e0d\u9700\u8981\u5c07\u9801\u9762\u5e36\u5230\u524d\u9762\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u4e0a\u4e0b\u6587\u5167\u7684\u9801\u9762\u9075\u5faa\u4e0a\u4e0b\u6587\u7d1a\u5225\u7684\u6a21\u64ec\uff0c\u4f8b\u5982\u8996\u7a97\u5927\u5c0f\u3001\u81ea\u8a02\u7db2\u8def\u8def\u5f91\u6216\u700f\u89bd\u5668\u8a9e\u8a00\u74b0\u5883\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Create two pages\nconst pageOne = await context.newPage();\nconst pageTwo = await context.newPage();\n\n// Get pages of a browser context\nconst allPages = context.pages();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u8655\u7406\u65b0\u9801\u9762",children:"\u8655\u7406\u65b0\u9801\u9762"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"page"})," \u4e8b\u4ef6\u5728\u700f\u89bd\u5668\u4e0a\u4e0b\u6587\u4e2d\u53ef\u4ee5\u7528\u4f86\u7372\u53d6\u5728\u8a72\u4e0a\u4e0b\u6587\u4e2d\u5efa\u7acb\u7684\u65b0\u9801\u9762\u3002\u9019\u53ef\u4ee5\u7528\u4f86\u8655\u7406\u7531 ",(0,t.jsx)(n.code,{children:'target="_blank"'})," \u9023\u7d50\u6253\u958b\u7684\u65b0\u9801\u9762\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Start waiting for new page before clicking. Note no await.\nconst pagePromise = context.waitForEvent('page');\nawait page.getByText('open new tab').click();\nconst newPage = await pagePromise;\n// Interact with the new page normally.\nawait newPage.getByRole('button').click();\nconsole.log(await newPage.title());\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u89f8\u767c\u65b0\u9801\u9762\u7684\u52d5\u4f5c\u672a\u77e5\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u6a21\u5f0f\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Get all new pages (including popups) in the context\ncontext.on('page', async page => {\n  await page.waitForLoadState();\n  console.log(await page.title());\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u8655\u7406\u5f48\u51fa\u8996\u7a97",children:"\u8655\u7406\u5f48\u51fa\u8996\u7a97"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u9801\u9762\u6253\u958b\u4e86\u4e00\u500b\u5f48\u51fa\u8996\u7a97\uff08\u4f8b\u5982\u7531 ",(0,t.jsx)(n.code,{children:'target="_blank"'})," \u9023\u7d50\u6253\u958b\u7684\u9801\u9762\uff09\uff0c\u4f60\u53ef\u4ee5\u901a\u904e\u76e3\u807d\u9801\u9762\u7684 ",(0,t.jsx)(n.code,{children:"popup"})," \u4e8b\u4ef6\u4f86\u7372\u53d6\u5c0d\u5b83\u7684\u5f15\u7528\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6b64\u4e8b\u4ef6\u9664\u4e86 ",(0,t.jsx)(n.code,{children:"browserContext.on('page')"})," \u4e8b\u4ef6\u5916\uff0c\u9084\u6703\u91dd\u5c0d\u8207\u6b64\u9801\u9762\u76f8\u95dc\u7684\u5f48\u51fa\u8996\u7a97\u767c\u51fa\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Start waiting for popup before clicking. Note no await.\nconst popupPromise = page.waitForEvent('popup');\nawait page.getByText('open the popup').click();\nconst popup = await popupPromise;\n// Interact with the new popup normally.\nawait popup.getByRole('button').click();\nconsole.log(await popup.title());\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u89f8\u767c\u5f48\u51fa\u8996\u7a97\u7684\u52d5\u4f5c\u672a\u77e5\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u6a21\u5f0f\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Get all popups when they open\npage.on('popup', async popup => {\n  await popup.waitForLoadState();\n  console.log(await popup.title());\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}}}]);