"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7564],{6440:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>h,toc:()=>d});var r=l(4848),n=l(8453),a=l(4235),i=l(8328);l(3078);const t={id:"browsers",title:"Browsers"},o=void 0,h={id:"browsers",title:"Browsers",description:"Introduction",source:"@site/docs/browsers.mdx",sourceDirName:".",slug:"/browsers",permalink:"/python/docs/next/browsers",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"browsers",title:"Browsers"},sidebar:"docs",previous:{title:"Authentication",permalink:"/python/docs/next/auth"},next:{title:"Chrome extensions",permalink:"/python/docs/next/chrome-extensions"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Install browsers",id:"install-browsers",level:2},{value:"Install system dependencies",id:"install-system-dependencies",level:2},{value:"Configure Browsers",id:"configure-browsers",level:2},{value:"Run tests on different browsers",id:"run-tests-on-different-browsers",level:3},{value:"Chromium",id:"chromium",level:3},{value:"Google Chrome &amp; Microsoft Edge",id:"google-chrome--microsoft-edge",level:3},{value:"Installing Google Chrome &amp; Microsoft Edge",id:"installing-google-chrome--microsoft-edge",level:4},{value:"When to use Google Chrome &amp; Microsoft Edge and when not to?",id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to",level:4},{value:"Defaults",id:"defaults",level:5},{value:"Regression testing",id:"regression-testing",level:5},{value:"Media codecs",id:"media-codecs",level:5},{value:"Enterprise policy",id:"enterprise-policy",level:5},{value:"Firefox",id:"firefox",level:3},{value:"WebKit",id:"webkit",level:3},{value:"Install behind a firewall or a proxy",id:"install-behind-a-firewall-or-a-proxy",level:2},{value:"Download from artifact repository",id:"download-from-artifact-repository",level:2},{value:"Managing browser binaries",id:"managing-browser-binaries",level:2},{value:"Stale browser removal",id:"stale-browser-removal",level:3},{value:"Uninstall browsers",id:"uninstall-browsers",level:3}];function p(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(s.p,{children:"Each version of Playwright needs specific versions of browser binaries to operate. You will need to use the Playwright CLI to install these browsers."}),"\n",(0,r.jsxs)(s.p,{children:["With every release, Playwright updates the versions of the browsers it supports, so that the latest Playwright would support the latest browsers at any moment. It means that every time you update Playwright, you might need to re-run the ",(0,r.jsx)(s.code,{children:"install"})," CLI command."]}),"\n",(0,r.jsx)(s.h2,{id:"install-browsers",children:"Install browsers"}),"\n",(0,r.jsx)(s.p,{children:"Playwright can install supported browsers. Running the command without arguments will install the default browsers."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"playwright install\n"})}),"\n",(0,r.jsx)(s.p,{children:"You can also install specific browsers by providing an argument:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"playwright install webkit\n"})}),"\n",(0,r.jsx)(s.p,{children:"See all supported browsers:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"playwright install --help\n"})}),"\n",(0,r.jsx)(s.h2,{id:"install-system-dependencies",children:"Install system dependencies"}),"\n",(0,r.jsx)(s.p,{children:"System dependencies can get installed automatically. This is useful for CI environments."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"playwright install-deps\n"})}),"\n",(0,r.jsx)(s.p,{children:"You can also install the dependencies for a single browser by passing it as an argument:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"playwright install-deps chromium\n"})}),"\n",(0,r.jsxs)(s.p,{children:["It's also possible to combine ",(0,r.jsx)(s.code,{children:"install-deps"})," with ",(0,r.jsx)(s.code,{children:"install"})," so that the browsers and OS dependencies are installed with a single command."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"playwright install --with-deps chromium\n"})}),"\n",(0,r.jsxs)(s.p,{children:["See ",(0,r.jsx)(s.a,{href:"/python/docs/next/intro#system-requirements",children:"system requirements"})," for officially supported operating systems."]}),"\n",(0,r.jsx)(s.h2,{id:"configure-browsers",children:"Configure Browsers"}),"\n",(0,r.jsxs)(s.p,{children:["Playwright can run tests on Chromium, WebKit and Firefox browsers as well as branded browsers such as Google Chrome and Microsoft Edge. It can also run on emulated tablet and mobile devices. See the ",(0,r.jsx)(s.a,{href:"https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json",children:"registry of device parameters"})," for a complete list of selected desktop, tablet and mobile devices."]}),"\n",(0,r.jsx)(s.h3,{id:"run-tests-on-different-browsers",children:"Run tests on different browsers"}),"\n",(0,r.jsx)(s.p,{children:"Run tests on a specific browser:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pytest test_login.py --browser webkit\n"})}),"\n",(0,r.jsx)(s.p,{children:"Run tests on multiple browsers:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pytest test_login.py --browser webkit --browser firefox\n"})}),"\n",(0,r.jsx)(s.p,{children:"Test against mobile viewports:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'pytest test_login.py --device="iPhone 13"\n'})}),"\n",(0,r.jsx)(s.p,{children:"Test against branded browsers:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pytest test_login.py --browser-channel msedge\n"})}),"\n",(0,r.jsx)(s.h3,{id:"chromium",children:"Chromium"}),"\n",(0,r.jsx)(s.p,{children:"For Google Chrome, Microsoft Edge and other Chromium-based browsers, by default, Playwright uses open source Chromium builds. Since the Chromium project is ahead of the branded browsers, when the world is on Google Chrome N, Playwright already supports Chromium N+1 that will be released in Google Chrome and Microsoft Edge a few weeks later."}),"\n",(0,r.jsx)(s.h3,{id:"google-chrome--microsoft-edge",children:"Google Chrome & Microsoft Edge"}),"\n",(0,r.jsx)(s.p,{children:"While Playwright can download and use the recent Chromium build, it can operate against the branded Google Chrome and Microsoft Edge browsers available on the machine (note that Playwright doesn't install them by default). In particular, the current Playwright version will support Stable and Beta channels of these browsers."}),"\n",(0,r.jsxs)(s.p,{children:["Available channels are ",(0,r.jsx)(s.code,{children:"chrome"}),", ",(0,r.jsx)(s.code,{children:"msedge"}),", ",(0,r.jsx)(s.code,{children:"chrome-beta"}),", ",(0,r.jsx)(s.code,{children:"msedge-beta"})," or ",(0,r.jsx)(s.code,{children:"msedge-dev"}),"."]}),"\n",(0,r.jsx)(s.admonition,{type:"warning",children:(0,r.jsx)(s.p,{children:"Certain Enterprise Browser Policies may impact Playwright's ability to launch and control Google Chrome and Microsoft Edge. Running in an environment with browser policies is outside of the Playwright project's scope."})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pytest test_login.py --browser-channel msedge\n"})}),"\n",(0,r.jsx)(s.h4,{id:"installing-google-chrome--microsoft-edge",children:"Installing Google Chrome & Microsoft Edge"}),"\n",(0,r.jsx)(s.p,{children:"If Google Chrome or Microsoft Edge is not available on your machine, you can install them using the Playwright command line tool:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"playwright install msedge\n"})}),"\n",(0,r.jsx)(s.admonition,{type:"warning",children:(0,r.jsx)(s.p,{children:"Google Chrome or Microsoft Edge installations will be installed at the default global location of your operating system overriding your current browser installation."})}),"\n",(0,r.jsxs)(s.p,{children:["Run with the ",(0,r.jsx)(s.code,{children:"--help"})," option to see a full a list of browsers that can be installed."]}),"\n",(0,r.jsx)(s.h4,{id:"when-to-use-google-chrome--microsoft-edge-and-when-not-to",children:"When to use Google Chrome & Microsoft Edge and when not to?"}),"\n",(0,r.jsx)(s.h5,{id:"defaults",children:"Defaults"}),"\n",(0,r.jsx)(s.p,{children:"Using the default Playwright configuration with the latest Chromium is a good idea most of the time. Since Playwright is ahead of Stable channels for the browsers, it gives peace of mind that the upcoming Google Chrome or Microsoft Edge releases won't break your site. You catch breakage early and have a lot of time to fix it before the official Chrome update."}),"\n",(0,r.jsx)(s.h5,{id:"regression-testing",children:"Regression testing"}),"\n",(0,r.jsxs)(s.p,{children:["Having said that, testing policies often require regression testing to be performed against the current publicly available browsers. In this case, you can opt into one of the stable channels, ",(0,r.jsx)(s.code,{children:'"chrome"'})," or ",(0,r.jsx)(s.code,{children:'"msedge"'}),"."]}),"\n",(0,r.jsx)(s.h5,{id:"media-codecs",children:"Media codecs"}),"\n",(0,r.jsx)(s.p,{children:"Another reason for testing using official binaries is to test functionality related to media codecs. Chromium does not have all the codecs that Google Chrome or Microsoft Edge are bundling due to various licensing considerations and agreements. If your site relies on this kind of codecs (which is rarely the case), you will also want to use the official channel."}),"\n",(0,r.jsx)(s.h5,{id:"enterprise-policy",children:"Enterprise policy"}),"\n",(0,r.jsx)(s.p,{children:"Google Chrome and Microsoft Edge respect enterprise policies, which include limitations to the capabilities, network proxy, mandatory extensions that stand in the way of testing. So if you are part of the organization that uses such policies, it is easiest to use bundled Chromium for your local testing, you can still opt into stable channels on the bots that are typically free of such restrictions."}),"\n",(0,r.jsx)(s.h3,{id:"firefox",children:"Firefox"}),"\n",(0,r.jsxs)(s.p,{children:["Playwright's Firefox version matches the recent ",(0,r.jsx)(s.a,{href:"https://www.mozilla.org/en-US/firefox/new/",children:"Firefox Stable"})," build. Playwright doesn't work with the branded version of Firefox since it relies on patches."]}),"\n",(0,r.jsx)(s.h3,{id:"webkit",children:"WebKit"}),"\n",(0,r.jsx)(s.p,{children:"Playwright's WebKit is derived from the latest WebKit main branch sources, often before these updates are incorporated into Apple Safari and other WebKit-based browsers. This gives a lot of lead time to react on the potential browser update issues. Playwright doesn't work with the branded version of Safari since it relies on patches. Instead, you can test using the most recent WebKit build. Note that availability of certain features, which depend heavily on the underlying platform, may vary between operating systems."}),"\n",(0,r.jsx)(s.h2,{id:"install-behind-a-firewall-or-a-proxy",children:"Install behind a firewall or a proxy"}),"\n",(0,r.jsx)(s.p,{children:"By default, Playwright downloads browsers from Microsoft's CDN."}),"\n",(0,r.jsx)(s.p,{children:"Sometimes companies maintain an internal proxy that blocks direct access to the public resources. In this case, Playwright can be configured to download browsers via a proxy server."}),"\n",(0,r.jsxs)(a.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,r.jsx)(i.A,{value:"bash",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pip install playwright\nHTTPS_PROXY=https://192.0.2.1 playwright install\n"})})}),(0,r.jsx)(i.A,{value:"powershell",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:'$Env:HTTPS_PROXY="https://192.0.2.1"\npip install playwright\nplaywright install\n'})})}),(0,r.jsx)(i.A,{value:"batch",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-batch",children:"set HTTPS_PROXY=https://192.0.2.1\npip install playwright\nplaywright install\n"})})})]}),"\n",(0,r.jsxs)(s.p,{children:["If the requests of the proxy get intercepted with a custom untrusted certificate authority (CA) and it yields to ",(0,r.jsx)(s.code,{children:"Error: self signed certificate in certificate chain"})," while downloading the browsers, you must set your custom root certificates via the ",(0,r.jsx)(s.a,{href:"https://nodejs.org/api/cli.html#node_extra_ca_certsfile",children:(0,r.jsx)(s.code,{children:"NODE_EXTRA_CA_CERTS"})})," environment variable before installing the browsers:"]}),"\n",(0,r.jsxs)(a.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,r.jsx)(i.A,{value:"bash",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'export NODE_EXTRA_CA_CERTS="/path/to/cert.pem"\n'})})}),(0,r.jsx)(i.A,{value:"powershell",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:'$Env:NODE_EXTRA_CA_CERTS="C:\\certs\\root.crt"\n'})})}),(0,r.jsx)(i.A,{value:"batch",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-batch",children:'set NODE_EXTRA_CA_CERTS="C:\\certs\\root.crt"\n'})})})]}),"\n",(0,r.jsxs)(s.p,{children:["If your network is slow to connect to Playwright browser archive, you can increase the connection timeout in milliseconds with ",(0,r.jsx)(s.code,{children:"PLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT"})," environment variable:"]}),"\n",(0,r.jsxs)(a.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,r.jsx)(i.A,{value:"bash",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pip install playwright\nPLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT=120000 playwright install\n"})})}),(0,r.jsx)(i.A,{value:"powershell",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:'$Env:PLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT="120000"\npip install playwright\nplaywright install\n'})})}),(0,r.jsx)(i.A,{value:"batch",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-batch",children:"set PLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT=120000\npip install playwright\nplaywright install\n"})})})]}),"\n",(0,r.jsxs)(s.p,{children:["If you are ",(0,r.jsx)(s.a,{href:"#install-system-dependencies",children:"installing dependencies"})," and need to use a proxy on Linux, make sure to run the command as a root user. Otherwise, Playwright will attempt to become a root and will not pass environment variables like ",(0,r.jsx)(s.code,{children:"HTTPS_PROXY"})," to the linux package manager."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo HTTPS_PROXY=https://192.0.2.1 playwright install-deps\n"})}),"\n",(0,r.jsx)(s.h2,{id:"download-from-artifact-repository",children:"Download from artifact repository"}),"\n",(0,r.jsx)(s.p,{children:"By default, Playwright downloads browsers from Microsoft's CDN."}),"\n",(0,r.jsxs)(s.p,{children:["Sometimes companies maintain an internal artifact repository to host browser binaries. In this case, Playwright can be configured to download from a custom location using the ",(0,r.jsx)(s.code,{children:"PLAYWRIGHT_DOWNLOAD_HOST"})," env variable."]}),"\n",(0,r.jsxs)(a.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,r.jsx)(i.A,{value:"bash",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pip install playwright\nPLAYWRIGHT_DOWNLOAD_HOST=http://192.0.2.1 playwright install\n"})})}),(0,r.jsx)(i.A,{value:"powershell",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:'$Env:PLAYWRIGHT_DOWNLOAD_HOST="http://192.0.2.1"\npip install playwright\nplaywright install\n'})})}),(0,r.jsx)(i.A,{value:"batch",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-batch",children:"set PLAYWRIGHT_DOWNLOAD_HOST=http://192.0.2.1\npip install playwright\nplaywright install\n"})})})]}),"\n",(0,r.jsxs)(s.p,{children:["It is also possible to use a per-browser download hosts using ",(0,r.jsx)(s.code,{children:"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST"}),", ",(0,r.jsx)(s.code,{children:"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST"})," and ",(0,r.jsx)(s.code,{children:"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST"})," env variables that take precedence over ",(0,r.jsx)(s.code,{children:"PLAYWRIGHT_DOWNLOAD_HOST"}),"."]}),"\n",(0,r.jsxs)(a.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,r.jsx)(i.A,{value:"bash",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pip install playwright\nPLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=http://203.0.113.3 PLAYWRIGHT_DOWNLOAD_HOST=http://192.0.2.1 playwright install\n"})})}),(0,r.jsx)(i.A,{value:"powershell",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:'$Env:PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST="http://203.0.113.3"\n$Env:PLAYWRIGHT_DOWNLOAD_HOST="http://192.0.2.1"\npip install playwright\nplaywright install\n'})})}),(0,r.jsx)(i.A,{value:"batch",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-batch",children:"set PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=http://203.0.113.3\nset PLAYWRIGHT_DOWNLOAD_HOST=http://192.0.2.1\npip install playwright\nplaywright install\n"})})})]}),"\n",(0,r.jsx)(s.h2,{id:"managing-browser-binaries",children:"Managing browser binaries"}),"\n",(0,r.jsx)(s.p,{children:"Playwright downloads Chromium, WebKit and Firefox browsers into the OS-specific cache folders:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"%USERPROFILE%\\AppData\\Local\\ms-playwright"})," on Windows"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"~/Library/Caches/ms-playwright"})," on macOS"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"~/.cache/ms-playwright"})," on Linux"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"These browsers will take a few hundred megabytes of disk space when installed:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"du -hs ~/Library/Caches/ms-playwright/*\n281M  chromium-XXXXXX\n187M  firefox-XXXX\n180M  webkit-XXXX\n"})}),"\n",(0,r.jsx)(s.p,{children:"You can override default behavior using environment variables. When installing Playwright, ask it to download browsers into a specific location:"}),"\n",(0,r.jsxs)(a.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,r.jsx)(i.A,{value:"bash",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pip install playwright\nPLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers python -m playwright install\n"})})}),(0,r.jsx)(i.A,{value:"powershell",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:'$Env:PLAYWRIGHT_BROWSERS_PATH="$Env:USERPROFILE\\pw-browsers"\npip install playwright\nplaywright install\n'})})}),(0,r.jsx)(i.A,{value:"batch",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-batch",children:"set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\npip install playwright\nplaywright install\n"})})})]}),"\n",(0,r.jsx)(s.p,{children:"When running Playwright scripts, ask it to search for browsers in a shared location."}),"\n",(0,r.jsxs)(a.A,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],children:[(0,r.jsx)(i.A,{value:"bash",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers python playwright_script.py\n"})})}),(0,r.jsx)(i.A,{value:"powershell",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-powershell",children:'\n$Env:PLAYWRIGHT_BROWSERS_PATH="$Env:USERPROFILE\\pw-browsers"\npython playwright_script.py\n'})})}),(0,r.jsx)(i.A,{value:"batch",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-batch",children:"set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\npython playwright_script.py\n"})})})]}),"\n",(0,r.jsx)(s.p,{children:"Playwright keeps track of packages that need those browsers and will garbage collect them as you update Playwright to the newer versions."}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Developers can opt-in in this mode via exporting ",(0,r.jsx)(s.code,{children:"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers"})," in their ",(0,r.jsx)(s.code,{children:".bashrc"}),"."]})}),"\n",(0,r.jsx)(s.h3,{id:"stale-browser-removal",children:"Stale browser removal"}),"\n",(0,r.jsx)(s.p,{children:"Playwright keeps track of the clients that use its browsers. When there are no more clients that require a particular version of the browser, that version is deleted from the system. That way you can safely use Playwright instances of different versions and at the same time, you don't waste disk space for the browsers that are no longer in use."}),"\n",(0,r.jsxs)(s.p,{children:["To opt-out from the unused browser removal, you can set the ",(0,r.jsx)(s.code,{children:"PLAYWRIGHT_SKIP_BROWSER_GC=1"})," environment variable."]}),"\n",(0,r.jsx)(s.h3,{id:"uninstall-browsers",children:"Uninstall browsers"}),"\n",(0,r.jsx)(s.p,{children:"This will remove the browsers (chromium, firefox, webkit) of the current Playwright installation:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"playwright uninstall\n"})}),"\n",(0,r.jsxs)(s.p,{children:["To remove browsers of other Playwright installations as well, pass ",(0,r.jsx)(s.code,{children:"--all"})," flag:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"playwright uninstall --all\n"})})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);