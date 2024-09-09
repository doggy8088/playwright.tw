"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[641],{3458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(4848),r=n(8453);n(4235),n(8328),n(3078);const s={id:"ci-intro",title:"Setting up CI"},o=void 0,a={id:"ci-intro",title:"Setting up CI",description:"Introduction",source:"@site/docs/ci-intro.mdx",sourceDirName:".",slug:"/ci-intro",permalink:"/docs/next/ci-intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"ci-intro",title:"Setting up CI"},sidebar:"docs",previous:{title:"Trace viewer",permalink:"/docs/next/trace-viewer-intro"},next:{title:"Getting started - VS Code",permalink:"/docs/next/getting-started-vscode"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"You will learn",id:"you-will-learn",level:4},{value:"Setting up GitHub Actions",id:"setting-up-github-actions",level:2},{value:"Create a Repo and Push to GitHub",id:"create-a-repo-and-push-to-github",level:2},{value:"Opening the Workflows",id:"opening-the-workflows",level:2},{value:"Viewing Test Logs",id:"viewing-test-logs",level:2},{value:"HTML Report",id:"html-report",level:2},{value:"Downloading the HTML Report",id:"downloading-the-html-report",level:3},{value:"Viewing the HTML Report",id:"viewing-the-html-report",level:3},{value:"Viewing the Trace",id:"viewing-the-trace",level:2},{value:"Publishing report on the web",id:"publishing-report-on-the-web",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h6:"h6",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["Playwright tests can be run on any CI provider. This guide covers one way of running tests on GitHub using GitHub actions. If you would like to learn more, or how to configure other CI providers, check out our detailed ",(0,i.jsx)(t.a,{href:"/docs/next/ci",children:"doc on Continuous Integration"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"you-will-learn",children:"You will learn"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/ci-intro#setting-up-github-actions",children:"How to set up GitHub Actions"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/ci-intro#viewing-test-logs",children:"How to view test logs"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/ci-intro#viewing-the-html-report",children:"How to view the HTML report"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/ci-intro#viewing-the-trace",children:"How to view the trace"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/ci-intro#publishing-report-on-the-web",children:"How to publish report on the web"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"setting-up-github-actions",children:"Setting up GitHub Actions"}),"\n",(0,i.jsxs)(t.p,{children:["When ",(0,i.jsx)(t.a,{href:"/docs/next/intro",children:"installing Playwright"})," using the ",(0,i.jsx)(t.a,{href:"/docs/next/getting-started-vscode",children:"VS Code extension"})," or with ",(0,i.jsx)(t.code,{children:"npm init playwright@latest"})," you are given the option to add a ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/actions",children:"GitHub Actions"})," workflow. This creates a ",(0,i.jsx)(t.code,{children:"playwright.yml"})," file inside a ",(0,i.jsx)(t.code,{children:".github/workflows"})," folder containing everything you need so that your tests run on each push and pull request into the main/master branch. Here's how that file looks:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",metastring:'title=".github/workflows/playwright.yml"',children:"name: Playwright Tests\non:\n  push:\n    branches: [ main, master ]\n  pull_request:\n    branches: [ main, master ]\njobs:\n  test:\n    timeout-minutes: 60\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v4\n    - uses: actions/setup-node@v4\n      with:\n        node-version: lts/*\n    - name: Install dependencies\n      run: npm ci\n    - name: Install Playwright Browsers\n      run: npx playwright install --with-deps\n    - name: Run Playwright tests\n      run: npx playwright test\n    - uses: actions/upload-artifact@v4\n      if: ${{ !cancelled() }}\n      with:\n        name: playwright-report\n        path: playwright-report/\n        retention-days: 30\n"})}),"\n",(0,i.jsx)(t.p,{children:"The workflow performs these steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Clone your repository 2. Install Node.js 3. Install NPM Dependencies 4. Install Playwright Browsers 5. Run Playwright tests 6. Upload HTML report to the GitHub UI"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about this, see ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions",children:'"Understanding GitHub Actions"'}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"create-a-repo-and-push-to-github",children:"Create a Repo and Push to GitHub"}),"\n",(0,i.jsxs)(t.p,{children:["Once you have your ",(0,i.jsx)(t.a,{href:"#setting-up-github-actions",children:"GitHub actions workflow"})," setup then all you need to do is ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/get-started/quickstart/create-a-repo",children:"Create a repo on GitHub"})," or push your code to an existing repository. Follow the instructions on GitHub and don't forget to ",(0,i.jsx)(t.a,{href:"https://github.com/git-guides/git-init",children:"initialize a git repository"})," using the ",(0,i.jsx)(t.code,{children:"git init"})," command so you can ",(0,i.jsx)(t.a,{href:"https://github.com/git-guides/git-add",children:"add"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/git-guides/git-commit",children:"commit"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/git-guides/git-push",children:"push"})," your code."]}),"\n",(0,i.jsx)(t.h6,{id:""}),"\n",(0,i.jsx)("img",{width:"861",alt:"Create a Repo and Push to GitHub",src:"https://user-images.githubusercontent.com/13063165/183423254-d2735278-a2ab-4d63-bb99-48d8e5e447bc.png"}),"\n",(0,i.jsx)(t.h2,{id:"opening-the-workflows",children:"Opening the Workflows"}),"\n",(0,i.jsxs)(t.p,{children:["Click on the ",(0,i.jsx)(t.strong,{children:"Actions"})," tab to see the workflows. Here you will see if your tests have passed or failed."]}),"\n",(0,i.jsx)(t.h6,{id:"-1"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/13063165/183423783-58bf2008-514e-4f96-9c12-c9a55703960c.png",alt:"opening the workflow"})}),"\n",(0,i.jsx)(t.h2,{id:"viewing-test-logs",children:"Viewing Test Logs"}),"\n",(0,i.jsxs)(t.p,{children:["Clicking on the workflow run will show you the all the actions that GitHub performed and clicking on ",(0,i.jsx)(t.strong,{children:"Run Playwright tests"})," will show the error messages, what was expected and what was received as well as the call log."]}),"\n",(0,i.jsx)(t.h6,{id:"-2"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/13063165/183423783-58bf2008-514e-4f96-9c12-c9a55703960c.png",alt:"Viewing Test Logs"})}),"\n",(0,i.jsx)(t.h2,{id:"html-report",children:"HTML Report"}),"\n",(0,i.jsx)(t.p,{children:"The HTML Report shows you a full report of your tests. You can filter the report by browsers, passed tests, failed tests, skipped tests and flaky tests."}),"\n",(0,i.jsx)(t.h3,{id:"downloading-the-html-report",children:"Downloading the HTML Report"}),"\n",(0,i.jsxs)(t.p,{children:["In the Artifacts section click on the ",(0,i.jsx)(t.strong,{children:"playwright-report"})," to download your report in the format of a zip file."]}),"\n",(0,i.jsx)("img",{width:"972",alt:"Downloading the HTML Report",src:"https://user-images.githubusercontent.com/13063165/183437023-524f1803-84e4-4862-9ce3-1d55af0e023e.png"}),"\n",(0,i.jsx)(t.h3,{id:"viewing-the-html-report",children:"Viewing the HTML Report"}),"\n",(0,i.jsxs)(t.p,{children:["Locally opening the report will not work as expected as you need a web server in order for everything to work correctly. First, extract the zip, preferably in a folder that already has Playwright installed. Using the command line change into the directory where the report is and use ",(0,i.jsx)(t.code,{children:"npx playwright show-report"})," followed by the name of the extracted folder. This will serve up the report and enable you to view it in your browser."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npx playwright show-report name-of-my-extracted-playwright-report\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/c5f60e56-fb75-4a2d-a4b6-054b8c5d69c1",alt:"viewing the HTML report"})}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about reports check out our detailed guide on ",(0,i.jsx)(t.a,{href:"/docs/next/test-reporters#html-reporter",children:"HTML Reporter"})]}),"\n",(0,i.jsx)(t.h2,{id:"viewing-the-trace",children:"Viewing the Trace"}),"\n",(0,i.jsxs)(t.p,{children:["Once you have served the report using ",(0,i.jsx)(t.code,{children:"npx playwright show-report"}),", click on the trace icon next to the test's file name as seen in the image above. You can then view the trace of your tests and inspect each action to try to find out why the tests are failing."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/microsoft/playwright/assets/13063165/10fe3585-8401-4051-b1c2-b2e92ac4c274",alt:"playwright trace viewer"})}),"\n",(0,i.jsx)(t.h2,{id:"publishing-report-on-the-web",children:"Publishing report on the web"}),"\n",(0,i.jsx)(t.p,{children:"Downloading the HTML report as a zip file is not very convenient. However, we can utilize Azure Storage's static websites hosting capabilities to easily and efficiently serve HTML reports on the Internet, requiring minimal configuration."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create an ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create",children:"Azure Storage account"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Enable ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-how-to#enable-static-website-hosting",children:"Static website hosting"})," for the storage account."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Create a Service Principal in Azure and grant it access to Azure Blob storage. Upon successful execution, the command will display the credentials which will be used in the next step."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'az ad sp create-for-rbac --name "github-actions" --role "Storage Blob Data Contributor" --scopes /subscriptions/<SUBSCRIPTION_ID>/resourceGroups/<RESOURCE_GROUP_NAME>/providers/Microsoft.Storage/storageAccounts/<STORAGE_ACCOUNT_NAME>\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Use the credentials from the previous step to set up encrypted secrets in your GitHub repository. Go to your repository's settings, under ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository",children:"GitHub Actions secrets"}),", and add the following secrets:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"AZCOPY_SPA_APPLICATION_ID"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"AZCOPY_SPA_CLIENT_SECRET"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"AZCOPY_TENANT_ID"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For a detailed guide on how to authorize a service principal using a client secret, refer to ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-authorize-azure-active-directory#authorize-a-service-principal-by-using-a-client-secret-1",children:"this Microsoft documentation"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Add a step that uploads the HTML report to Azure Storage."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title=".github/workflows/playwright.yml"',children:"...\n    - name: Upload HTML report to Azure\n      shell: bash\n      run: |\n        REPORT_DIR='run-${{ github.run_id }}-${{ github.run_attempt }}'\n        azcopy cp --recursive \"./playwright-report/*\" \"https://<STORAGE_ACCOUNT_NAME>.blob.core.windows.net/\\$web/$REPORT_DIR\"\n        echo \"::notice title=HTML report url::https://<STORAGE_ACCOUNT_NAME>.z1.web.core.windows.net/$REPORT_DIR/index.html\"\n      env:\n        AZCOPY_AUTO_LOGIN_TYPE: SPN\n        AZCOPY_SPA_APPLICATION_ID: '${{ secrets.AZCOPY_SPA_APPLICATION_ID }}'\n        AZCOPY_SPA_CLIENT_SECRET: '${{ secrets.AZCOPY_SPA_CLIENT_SECRET }}'\n        AZCOPY_TENANT_ID: '${{ secrets.AZCOPY_TENANT_ID }}'\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The contents of the ",(0,i.jsx)(t.code,{children:"$web"})," storage container can be accessed from a browser by using the ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-how-to?tabs=azure-portal#portal-find-url",children:"public URL"})," of the website."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["This step will not work for pull requests created from a forked repository because such workflow ",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow",children:"doesn't have access to the secrets"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"whats-next",children:"What's Next"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/locators",children:"Learn how to use Locators"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/input",children:"Learn how to perform Actions"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/test-assertions",children:"Learn how to write Assertions"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/trace-viewer",children:"Learn more about the Trace Viewer"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/next/ci",children:"Learn more ways of running tests on GitHub Actions"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/next/ci#github-actions",children:"Learn more about running tests on other CI providers"})," // TODO: is this link correct?"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);