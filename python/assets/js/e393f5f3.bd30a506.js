"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[641],{3458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(4848),s=n(8453);n(4235),n(8328),n(3078);const r={id:"ci-intro",title:"Setting up CI"},o=void 0,a={id:"ci-intro",title:"Setting up CI",description:"Introduction",source:"@site/docs/ci-intro.mdx",sourceDirName:".",slug:"/ci-intro",permalink:"/python/docs/next/ci-intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"ci-intro",title:"Setting up CI"},sidebar:"docs",previous:{title:"Trace viewer",permalink:"/python/docs/next/trace-viewer-intro"},next:{title:"Pytest Plugin Reference",permalink:"/python/docs/next/test-runners"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"You will learn",id:"you-will-learn",level:4},{value:"Setting up GitHub Actions",id:"setting-up-github-actions",level:2},{value:"Create a Repo and Push to GitHub",id:"create-a-repo-and-push-to-github",level:2},{value:"Opening the Workflows",id:"opening-the-workflows",level:2},{value:"Viewing Test Logs",id:"viewing-test-logs",level:2},{value:"Viewing the Trace",id:"viewing-the-trace",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h4:"h4",h6:"h6",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"Playwright tests can be ran on any CI provider. In this section we will cover running tests on GitHub using GitHub actions. If you would like to see how to configure other CI providers check out our detailed doc on Continuous Integration."}),"\n",(0,i.jsx)(t.h4,{id:"you-will-learn",children:"You will learn"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/python/docs/next/ci-intro#setting-up-github-actions",children:"How to set up GitHub Actions"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/python/docs/next/ci-intro#viewing-test-logs",children:"How to view test logs"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/python/docs/next/ci-intro#viewing-the-trace",children:"How to view the trace"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"setting-up-github-actions",children:"Setting up GitHub Actions"}),"\n",(0,i.jsxs)(t.p,{children:["To add a ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/actions",children:"GitHub Actions"})," file first create ",(0,i.jsx)(t.code,{children:".github/workflows"})," folder and inside it add a ",(0,i.jsx)(t.code,{children:"playwright.yml"})," file containing the example code below so that your tests will run on each push and pull request for the main/master branch."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",metastring:'title=".github/workflows/playwright.yml"',children:"name: Playwright Tests\non:\n  push:\n    branches: [ main, master ]\n  pull_request:\n    branches: [ main, master ]\njobs:\n  test:\n    timeout-minutes: 60\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v4\n    - name: Set up Python\n      uses: actions/setup-python@v4\n      with:\n        python-version: '3.11'\n    - name: Install dependencies\n      run: |\n        python -m pip install --upgrade pip\n        pip install -r requirements.txt\n    - name: Ensure browsers are installed\n      run: python -m playwright install --with-deps\n    - name: Run your tests\n      run: pytest --tracing=retain-on-failure\n    - uses: actions/upload-artifact@v4\n      if: ${{ !cancelled() }}\n      with:\n        name: playwright-traces\n        path: test-results/\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about this, see ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions",children:'"Understanding GitHub Actions"'}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Looking at the list of steps in ",(0,i.jsx)(t.code,{children:"jobs.test.steps"}),", you can see that the workflow performs these steps:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Clone your repository 2. Install language dependencies 3. Install project dependencies and build 4. Install Playwright Browsers 5. Run tests"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"create-a-repo-and-push-to-github",children:"Create a Repo and Push to GitHub"}),"\n",(0,i.jsxs)(t.p,{children:["Once you have your ",(0,i.jsx)(t.a,{href:"#setting-up-github-actions",children:"GitHub actions workflow"})," setup then all you need to do is ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/get-started/quickstart/create-a-repo",children:"Create a repo on GitHub"})," or push your code to an existing repository. Follow the instructions on GitHub and don't forget to ",(0,i.jsx)(t.a,{href:"https://github.com/git-guides/git-init",children:"initialize a git repository"})," using the ",(0,i.jsx)(t.code,{children:"git init"})," command so you can ",(0,i.jsx)(t.a,{href:"https://github.com/git-guides/git-add",children:"add"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/git-guides/git-commit",children:"commit"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/git-guides/git-push",children:"push"})," your code."]}),"\n",(0,i.jsx)(t.h6,{id:""}),"\n",(0,i.jsx)("img",{width:"861",alt:"Create a Repo and Push to GitHub",src:"https://user-images.githubusercontent.com/13063165/183423254-d2735278-a2ab-4d63-bb99-48d8e5e447bc.png"}),"\n",(0,i.jsx)(t.h2,{id:"opening-the-workflows",children:"Opening the Workflows"}),"\n",(0,i.jsxs)(t.p,{children:["Click on the ",(0,i.jsx)(t.strong,{children:"Actions"})," tab to see the workflows. Here you will see if your tests have passed or failed."]}),"\n",(0,i.jsx)(t.h6,{id:"-1"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/13063165/183423783-58bf2008-514e-4f96-9c12-c9a55703960c.png",alt:"opening the workflow"})}),"\n",(0,i.jsx)(t.h2,{id:"viewing-test-logs",children:"Viewing Test Logs"}),"\n",(0,i.jsxs)(t.p,{children:["Clicking on the workflow run will show you the all the actions that GitHub performed and clicking on ",(0,i.jsx)(t.strong,{children:"Run Playwright tests"})," will show the error messages, what was expected and what was received as well as the call log."]}),"\n",(0,i.jsx)(t.h6,{id:"-2"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/13063165/183423783-58bf2008-514e-4f96-9c12-c9a55703960c.png",alt:"Viewing Test Logs"})}),"\n",(0,i.jsx)(t.h2,{id:"viewing-the-trace",children:"Viewing the Trace"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://trace.playwright.dev",children:"trace.playwright.dev"})," is a statically hosted variant of the Trace Viewer. You can upload trace files using drag and drop."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/6d5885dc-d511-4c20-b728-040a7ef6cea4",alt:"playwright trace viewer"})}),"\n",(0,i.jsx)(t.h2,{id:"whats-next",children:"What's Next"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/python/docs/next/locators",children:"Learn how to use Locators"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/python/docs/next/input",children:"Learn how to perform Actions"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/python/docs/next/test-assertions",children:"Learn how to write Assertions"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/python/docs/next/trace-viewer",children:"Learn more about the Trace Viewer"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/python/docs/next/ci",children:"Learn more ways of running tests on GitHub Actions"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/python/docs/next/ci#github-actions",children:"Learn more about running tests on other CI providers"})," // TODO: is this link correct?"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);