"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4430],{8295:(i,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>h,toc:()=>o});var n=t(4848),s=t(8453);t(4235),t(8328),t(3078);const r={id:"ci-intro",title:"\u8a2d\u5b9a CI"},c=void 0,h={id:"ci-intro",title:"\u8a2d\u5b9a CI",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/ci-intro.mdx",sourceDirName:".",slug:"/ci-intro",permalink:"/python/docs/ci-intro",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"ci-intro",title:"\u8a2d\u5b9a CI"},sidebar:"docs",previous:{title:"\u8ffd\u8e64\u6aa2\u8996\u5668",permalink:"/python/docs/trace-viewer-intro"},next:{title:"Pytest \u5916\u639b\u53c3\u8003",permalink:"/python/docs/test-runners"}},l={},o=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u4f60\u5c07\u5b78\u5230",id:"\u4f60\u5c07\u5b78\u5230",level:4},{value:"\u8a2d\u5b9a GitHub Actions",id:"\u8a2d\u5b9a-github-actions",level:2},{value:"\u5efa\u7acb\u4e00\u500b Repo \u4e26\u63a8\u9001\u5230 GitHub",id:"\u5efa\u7acb\u4e00\u500b-repo-\u4e26\u63a8\u9001\u5230-github",level:2},{value:"\u958b\u555f\u5de5\u4f5c\u6d41\u7a0b",id:"\u958b\u555f\u5de5\u4f5c\u6d41\u7a0b",level:2},{value:"\u6aa2\u8996\u6e2c\u8a66\u65e5\u8a8c",id:"\u6aa2\u8996\u6e2c\u8a66\u65e5\u8a8c",level:2},{value:"\u6aa2\u8996\u8ffd\u8e64",id:"\u6aa2\u8996\u8ffd\u8e64",level:2},{value:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",level:2}];function a(i){const e={a:"a",code:"code",h2:"h2",h4:"h4",h6:"h6",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,n.jsx)(e.p,{children:"Playwright \u6e2c\u8a66\u53ef\u4ee5\u5728\u4efb\u610f CI \u63d0\u4f9b\u8005\u4e0a\u57f7\u884c\u3002\u5728\u672c\u7bc0\u4e2d\uff0c\u6211\u5011\u5c07\u4ecb\u7d39\u5982\u4f55\u4f7f\u7528 GitHub Actions \u5728 GitHub \u4e0a\u57f7\u884c\u6e2c\u8a66\u3002\u5982\u679c\u60a8\u60f3\u4e86\u89e3\u5982\u4f55\u914d\u7f6e\u5176\u4ed6 CI \u63d0\u4f9b\u8005\uff0c\u8acb\u67e5\u770b\u6211\u5011\u95dc\u65bc\u6301\u7e8c\u6574\u5408\u7684\u8a73\u7d30\u6587\u4ef6\u3002"}),"\n",(0,n.jsx)(e.h4,{id:"\u4f60\u5c07\u5b78\u5230",children:"\u4f60\u5c07\u5b78\u5230"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"/python/docs/ci-intro#%E8%A8%AD%E5%AE%9A-github-actions",children:"\u5982\u4f55\u8a2d\u5b9a GitHub Actions"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"/python/docs/ci-intro#%E6%AA%A2%E8%A6%96%E6%B8%AC%E8%A9%A6%E6%97%A5%E8%AA%8C",children:"\u5982\u4f55\u67e5\u770b\u6e2c\u8a66\u65e5\u8a8c"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"/python/docs/ci-intro#%E6%AA%A2%E8%A6%96%E8%BF%BD%E8%B9%A4",children:"\u5982\u4f55\u67e5\u770b\u8ffd\u8e64"})}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"\u8a2d\u5b9a-github-actions",children:"\u8a2d\u5b9a GitHub Actions"}),"\n",(0,n.jsxs)(e.p,{children:["\u8981\u65b0\u589e ",(0,n.jsx)(e.a,{href:"https://docs.github.com/en/actions",children:"GitHub Actions"})," \u6587\u4ef6\uff0c\u9996\u5148\u5efa\u7acb ",(0,n.jsx)(e.code,{children:".github/workflows"})," \u8cc7\u6599\u593e\uff0c\u4e26\u5728\u5176\u4e2d\u65b0\u589e\u4e00\u500b ",(0,n.jsx)(e.code,{children:"playwright.yml"})," \u6587\u4ef6\uff0c\u5305\u542b\u4ee5\u4e0b\u7bc4\u4f8b\u7a0b\u5f0f\u78bc\uff0c\u4ee5\u4fbf\u60a8\u7684\u6e2c\u8a66\u5728\u6bcf\u6b21\u63a8\u9001\u548c\u91dd\u5c0d main/master \u5206\u652f\u7684\u62c9\u53d6\u8acb\u6c42\u6642\u57f7\u884c\u3002"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-yml",metastring:'title=".github/workflows/playwright.yml"',children:"name: Playwright Tests\non:\n  push:\n    branches: [ main, master ]\n  pull_request:\n    branches: [ main, master ]\njobs:\n  test:\n    timeout-minutes: 60\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v4\n    - name: Set up Python\n      uses: actions/setup-python@v4\n      with:\n        python-version: '3.11'\n    - name: Install dependencies\n      run: |\n        python -m pip install --upgrade pip\n        pip install -r requirements.txt\n    - name: Ensure browsers are installed\n      run: python -m playwright install --with-deps\n    - name: Run your tests\n      run: pytest --tracing=retain-on-failure\n    - uses: actions/upload-artifact@v4\n      if: ${{ !cancelled() }}\n      with:\n        name: playwright-traces\n        path: test-results/\n"})}),"\n",(0,n.jsxs)(e.p,{children:["\u8981\u4e86\u89e3\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u53c3\u95b1",(0,n.jsx)(e.a,{href:"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions",children:'"\u4e86\u89e3 GitHub Actions"'}),"\u3002"]}),"\n",(0,n.jsxs)(e.p,{children:["\u67e5\u770b ",(0,n.jsx)(e.code,{children:"jobs.test.steps"})," \u4e2d\u7684\u6b65\u9a5f\u5217\u8868\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u5de5\u4f5c\u6d41\u7a0b\u57f7\u884c\u4e86\u9019\u4e9b\u6b65\u9a5f:"]}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"\u8907\u88fd\u4f60\u7684\u5132\u5b58\u5eab 2. \u5b89\u88dd\u8a9e\u8a00\u76f8\u4f9d\u5957\u4ef6 3. \u5b89\u88dd\u5c08\u6848\u76f8\u4f9d\u5957\u4ef6\u4e26\u5efa\u69cb 4. \u5b89\u88dd Playwright \u700f\u89bd\u5668 5. \u57f7\u884c\u6e2c\u8a66"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"\u5efa\u7acb\u4e00\u500b-repo-\u4e26\u63a8\u9001\u5230-github",children:"\u5efa\u7acb\u4e00\u500b Repo \u4e26\u63a8\u9001\u5230 GitHub"}),"\n",(0,n.jsxs)(e.p,{children:["\u4e00\u65e6\u4f60\u8a2d\u5b9a\u597d\u4f60\u7684 ",(0,n.jsx)(e.a,{href:"#setting-up-github-actions",children:"GitHub actions workflow"})," \u5f8c\uff0c\u4f60\u6240\u9700\u8981\u505a\u7684\u5c31\u662f ",(0,n.jsx)(e.a,{href:"https://docs.github.com/en/get-started/quickstart/create-a-repo",children:"\u5728 GitHub \u4e0a\u5efa\u7acb\u4e00\u500b repo"})," \u6216\u5c07\u4f60\u7684\u7a0b\u5f0f\u78bc\u63a8\u9001\u5230\u73fe\u6709\u7684\u5132\u5b58\u5eab\u3002\u6309\u7167 GitHub \u4e0a\u7684\u6307\u793a\u64cd\u4f5c\uff0c\u4e26\u4e14\u4e0d\u8981\u5fd8\u8a18\u4f7f\u7528 ",(0,n.jsx)(e.code,{children:"git init"})," \u547d\u4ee4 ",(0,n.jsx)(e.a,{href:"https://github.com/git-guides/git-init",children:"\u521d\u59cb\u5316\u4e00\u500b git \u5132\u5b58\u5eab"}),"\uff0c\u9019\u6a23\u4f60\u5c31\u53ef\u4ee5 ",(0,n.jsx)(e.a,{href:"https://github.com/git-guides/git-add",children:"add"}),"\u3001",(0,n.jsx)(e.a,{href:"https://github.com/git-guides/git-commit",children:"commit"})," \u548c ",(0,n.jsx)(e.a,{href:"https://github.com/git-guides/git-push",children:"push"})," \u4f60\u7684\u7a0b\u5f0f\u78bc\u3002"]}),"\n",(0,n.jsx)(e.h6,{id:""}),"\n",(0,n.jsx)("img",{width:"861",alt:"\u5efa\u7acb\u4e00\u500b Repo \u4e26\u63a8\u9001\u5230 GitHub",src:"https://user-images.githubusercontent.com/13063165/183423254-d2735278-a2ab-4d63-bb99-48d8e5e447bc.png"}),"\n",(0,n.jsx)(e.h2,{id:"\u958b\u555f\u5de5\u4f5c\u6d41\u7a0b",children:"\u958b\u555f\u5de5\u4f5c\u6d41\u7a0b"}),"\n",(0,n.jsxs)(e.p,{children:["\u9ede\u64ca ",(0,n.jsx)(e.strong,{children:"Actions"})," \u9801\u7c64\u4ee5\u67e5\u770b\u5de5\u4f5c\u6d41\u7a0b\u3002\u5728\u9019\u88e1\u4f60\u5c07\u770b\u5230\u4f60\u7684\u6e2c\u8a66\u662f\u5426\u901a\u904e\u6216\u5931\u6557\u3002"]}),"\n",(0,n.jsx)(e.h6,{id:"-1"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:"https://user-images.githubusercontent.com/13063165/183423783-58bf2008-514e-4f96-9c12-c9a55703960c.png",alt:"\u958b\u555f\u5de5\u4f5c\u6d41\u7a0b"})}),"\n",(0,n.jsx)(e.h2,{id:"\u6aa2\u8996\u6e2c\u8a66\u65e5\u8a8c",children:"\u6aa2\u8996\u6e2c\u8a66\u65e5\u8a8c"}),"\n",(0,n.jsxs)(e.p,{children:["\u9ede\u64ca\u5de5\u4f5c\u6d41\u7a0b\u57f7\u884c\u5c07\u986f\u793a GitHub \u57f7\u884c\u7684\u6240\u6709\u64cd\u4f5c\uff0c\u9ede\u64ca ",(0,n.jsx)(e.strong,{children:"Run Playwright tests"})," \u5c07\u986f\u793a\u932f\u8aa4\u8a0a\u606f\u3001\u9810\u671f\u7d50\u679c\u548c\u5be6\u969b\u63a5\u6536\u5230\u7684\u7d50\u679c\u4ee5\u53ca\u547c\u53eb\u65e5\u8a8c\u3002"]}),"\n",(0,n.jsx)(e.h6,{id:"-2"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:"https://user-images.githubusercontent.com/13063165/183423783-58bf2008-514e-4f96-9c12-c9a55703960c.png",alt:"\u67e5\u770b\u6e2c\u8a66\u65e5\u8a8c"})}),"\n",(0,n.jsx)(e.h2,{id:"\u6aa2\u8996\u8ffd\u8e64",children:"\u6aa2\u8996\u8ffd\u8e64"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://trace.playwright.dev",children:"trace.playwright.dev"})," \u662f Trace Viewer \u7684\u975c\u614b\u8a17\u7ba1\u8b8a\u9ad4\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u62d6\u653e\u4e0a\u50b3 trace \u6a94\u6848\u3002"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:"https://github.com/microsoft/playwright/assets/13063165/6d5885dc-d511-4c20-b728-040a7ef6cea4",alt:"playwright trace viewer"})}),"\n",(0,n.jsx)(e.h2,{id:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc",children:"\u63a5\u4e0b\u4f86\u662f\u4ec0\u9ebc"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"/python/docs/locators",children:"\u5b78\u7fd2\u5982\u4f55\u4f7f\u7528 Locators"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"/python/docs/input",children:"\u5b78\u7fd2\u5982\u4f55\u57f7\u884c Actions"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"/python/docs/test-assertions",children:"\u5b78\u7fd2\u5982\u4f55\u64b0\u5beb Assertions"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"/python/docs/trace-viewer",children:"\u4e86\u89e3\u66f4\u591a\u95dc\u65bc Trace Viewer"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"/python/docs/ci",children:"\u4e86\u89e3\u66f4\u591a\u5728 GitHub Actions \u4e0a\u57f7\u884c\u6e2c\u8a66\u7684\u65b9\u6cd5"})}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"/python/docs/ci#github-actions",children:"\u4e86\u89e3\u66f4\u591a\u5728\u5176\u4ed6 CI \u63d0\u4f9b\u8005\u4e0a\u57f7\u884c\u6e2c\u8a66"})," // TODO: is this link correct?"]}),"\n"]})]})}function d(i={}){const{wrapper:e}={...(0,s.R)(),...i.components};return e?(0,n.jsx)(e,{...i,children:(0,n.jsx)(a,{...i})}):a(i)}}}]);