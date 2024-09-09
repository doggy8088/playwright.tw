"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2783],{9637:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var n=s(4848),a=s(8453),o=s(4235),i=s(8328);s(3078);const r={id:"auth",title:"Authentication"},l=void 0,c={id:"auth",title:"Authentication",description:"Introduction",source:"@site/docs/auth.mdx",sourceDirName:".",slug:"/auth",permalink:"/java/docs/next/auth",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"auth",title:"Authentication"},sidebar:"docs",previous:{title:"Assertions",permalink:"/java/docs/next/test-assertions"},next:{title:"Browsers",permalink:"/java/docs/next/browsers"}},d={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Core concepts",id:"core-concepts",level:2},{value:"Signing in before each test",id:"signing-in-before-each-test",level:2},{value:"Reusing signed in state",id:"reusing-signed-in-state",level:2},{value:"Advanced scenarios",id:"advanced-scenarios",level:2},{value:"Session storage",id:"session-storage",level:3}];function g(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(t.p,{children:["Playwright executes tests in isolated environments called ",(0,n.jsx)(t.a,{href:"/java/docs/next/browser-contexts",children:"browser contexts"}),". This isolation model improves reproducibility and prevents cascading test failures. Tests can load existing authenticated state. This eliminates the need to authenticate in every test and speeds up test execution."]}),"\n",(0,n.jsx)(t.h2,{id:"core-concepts",children:"Core concepts"}),"\n",(0,n.jsx)(t.p,{children:"Regardless of the authentication strategy you choose, you are likely to store authenticated browser state on the file system."}),"\n",(0,n.jsxs)(t.p,{children:["We recommend to create ",(0,n.jsx)(t.code,{children:"playwright/.auth"})," directory and add it to your ",(0,n.jsx)(t.code,{children:".gitignore"}),". Your authentication routine will produce authenticated browser state and save it to a file in this ",(0,n.jsx)(t.code,{children:"playwright/.auth"})," directory. Later on, tests will reuse this state and start already authenticated."]}),"\n",(0,n.jsxs)(o.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,n.jsx)(i.A,{value:"bash",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"mkdir -p playwright/.auth\necho $'\\nplaywright/.auth' >> .gitignore\n"})})}),(0,n.jsx)(i.A,{value:"powershell",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-powershell",children:'New-Item -ItemType Directory -Force -Path playwright\\.auth\nAdd-Content -path .gitignore "`r`nplaywright/.auth"\n'})})}),(0,n.jsx)(i.A,{value:"batch",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-batch",children:'md playwright\\.auth\necho. >> .gitignore\necho "playwright/.auth" >> .gitignore\n'})})})]}),"\n",(0,n.jsx)(t.h2,{id:"signing-in-before-each-test",children:"Signing in before each test"}),"\n",(0,n.jsxs)(t.p,{children:["The Playwright API can ",(0,n.jsx)(t.a,{href:"/java/docs/next/input",children:"automate interaction"})," with a login form."]}),"\n",(0,n.jsx)(t.p,{children:"The following example logs into GitHub. Once these steps are executed, the browser context will be authenticated."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'Page page = context.newPage();\npage.navigate("https://github.com/login");\n// Interact with login form\npage.getByLabel("Username or email address").fill("username");\npage.getByLabel("Password").fill("password");\npage.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Sign in"))\n    .click();\n// Continue with the test\n'})}),"\n",(0,n.jsx)(t.p,{children:"Redoing login for every test can slow down test execution. To mitigate that, reuse existing authentication state instead."}),"\n",(0,n.jsx)(t.h2,{id:"reusing-signed-in-state",children:"Reusing signed in state"}),"\n",(0,n.jsx)(t.p,{children:"Playwright provides a way to reuse the signed-in state in the tests. That way you can log in only once and then skip the log in step for all of the tests."}),"\n",(0,n.jsxs)(t.p,{children:["Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",children:"cookies"})," or in ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage",children:"local storage"}),". Playwright provides ",(0,n.jsx)(t.a,{href:"/java/docs/next/api/class-browsercontext#browser-context-storage-state",children:"BrowserContext.storageState()"})," method that can be used to retrieve storage state from authenticated contexts and then create new contexts with prepopulated state."]}),"\n",(0,n.jsx)(t.p,{children:"Cookies and local storage state can be used across different browsers. They depend on your application's authentication model: some apps might require both cookies and local storage."}),"\n",(0,n.jsx)(t.p,{children:"The following code snippet retrieves state from an authenticated context and creates a new context with that state."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'// Save storage state into the file.\ncontext.storageState(new BrowserContext.StorageStateOptions().setPath(Paths.get("state.json")));\n\n// Create a new context with the saved storage state.\nBrowserContext context = browser.newContext(\n  new Browser.NewContextOptions().setStorageStatePath(Paths.get("state.json")));\n'})}),"\n",(0,n.jsx)(t.h2,{id:"advanced-scenarios",children:"Advanced scenarios"}),"\n",(0,n.jsx)(t.h3,{id:"session-storage",children:"Session storage"}),"\n",(0,n.jsxs)(t.p,{children:["Reusing authenticated state covers ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",children:"cookies"})," and ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage",children:"local storage"})," based authentication. Rarely, ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage",children:"session storage"})," is used for storing information associated with the signed-in state. Session storage is specific to a particular domain and is not persisted across page loads. Playwright does not provide API to persist session storage, but the following snippet can be used to save/load session storage."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'// Get session storage and store as env variable\nString sessionStorage = (String) page.evaluate("JSON.stringify(sessionStorage)");\nSystem.getenv().put("SESSION_STORAGE", sessionStorage);\n\n// Set session storage in a new context\nString sessionStorage = System.getenv("SESSION_STORAGE");\ncontext.addInitScript("(storage => {\\n" +\n  "  if (window.location.hostname === \'example.com\') {\\n" +\n  "    const entries = JSON.parse(storage);\\n" +\n  "     for (const [key, value] of Object.entries(entries)) {\\n" +\n  "      window.sessionStorage.setItem(key, value);\\n" +\n  "    };\\n" +\n  "  }\\n" +\n  "})(\'" + sessionStorage + "\')");\n'})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}}}]);