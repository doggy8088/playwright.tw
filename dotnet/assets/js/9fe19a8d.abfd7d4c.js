"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7902],{3982:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>t});var s=i(4848),r=i(8453);i(4235),i(8328),i(3078);const c={id:"docker",title:"Docker"},l=void 0,o={id:"docker",title:"Docker",description:"\u7c21\u4ecb",source:"@site/versioned_docs/version-stable/docker.mdx",sourceDirName:".",slug:"/docker",permalink:"/dotnet/docs/docker",draft:!1,unlisted:!1,tags:[],version:"stable",frontMatter:{id:"docker",title:"Docker"},sidebar:"docs",previous:{title:"WebView2",permalink:"/dotnet/docs/webview2"},next:{title:"\u6301\u7e8c\u6574\u5408",permalink:"/dotnet/docs/ci"}},d={},t=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u62c9\u53d6\u6620\u50cf\u6a94",id:"\u62c9\u53d6\u6620\u50cf\u6a94",level:3},{value:"\u57f7\u884c\u8a72\u6620\u50cf\u6a94",id:"\u57f7\u884c\u8a72\u6620\u50cf\u6a94",level:3},{value:"\u7aef\u5230\u7aef\u6e2c\u8a66",id:"\u7aef\u5230\u7aef\u6e2c\u8a66",level:4},{value:"\u722c\u53d6\u548c\u6293\u53d6",id:"\u722c\u53d6\u548c\u6293\u53d6",level:4},{value:"\u5728 CI \u4e0a\u4f7f\u7528",id:"\u5728-ci-\u4e0a\u4f7f\u7528",level:3},{value:"\u5716\u7247\u6a19\u7c64",id:"\u5716\u7247\u6a19\u7c64",level:2},{value:"\u57fa\u790e\u6620\u50cf\u6a94",id:"\u57fa\u790e\u6620\u50cf\u6a94",level:3},{value:"Alpine",id:"alpine",level:4},{value:"\u4f7f\u7528\u4e0d\u540c\u7684 .NET \u7248\u672c",id:"\u4f7f\u7528\u4e0d\u540c\u7684-net-\u7248\u672c",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/microsoft/playwright-dotnet/blob/main/utils/docker/Dockerfile.jammy",title:"Dockerfile.jammy",children:"Dockerfile.jammy"})," \u53ef\u4ee5\u7528\u65bc\u5728 Docker \u74b0\u5883\u4e2d\u57f7\u884c Playwright \u7a0b\u5f0f\u78bc\u3002\u6b64\u6620\u50cf\u5305\u542b ",(0,s.jsx)(n.a,{href:"/dotnet/docs/browsers#install-browsers",children:"Playwright \u700f\u89bd\u5668"})," \u548c ",(0,s.jsx)(n.a,{href:"/dotnet/docs/browsers#install-system-dependencies",children:"\u700f\u89bd\u5668\u7cfb\u7d71\u76f8\u4f9d\u6027"}),"\u3002Playwright \u5957\u4ef6/\u76f8\u4f9d\u5957\u4ef6\u4e0d\u5305\u542b\u5728\u6620\u50cf\u4e2d\uff0c\u61c9\u8a72\u55ae\u7368\u5b89\u88dd\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64 Docker \u6620\u50cf\u6a94\u5df2\u767c\u4f48\u81f3 ",(0,s.jsx)(n.a,{href:"https://mcr.microsoft.com/en-us/product/playwright/dotnet/about",title:"Microsoft Artifact Registry",children:"Microsoft Artifact Registry"}),"\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"\u6b64 Docker \u6620\u50cf\u50c5\u4f9b\u6e2c\u8a66\u548c\u958b\u767c\u7528\u9014\u3002\u5efa\u8b70\u4e0d\u8981\u4f7f\u7528\u6b64 Docker \u6620\u50cf\u8a2a\u554f\u4e0d\u53d7\u4fe1\u4efb\u7684\u7db2\u7ad9\u3002"})}),"\n",(0,s.jsx)(n.h3,{id:"\u62c9\u53d6\u6620\u50cf\u6a94",children:"\u62c9\u53d6\u6620\u50cf\u6a94"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker pull mcr.microsoft.com/playwright/dotnet:v1.46.0-noble\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u57f7\u884c\u8a72\u6620\u50cf\u6a94",children:"\u57f7\u884c\u8a72\u6620\u50cf\u6a94"}),"\n",(0,s.jsxs)(n.p,{children:["\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0cDocker \u6620\u50cf\u5c07\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"root"})," \u7528\u6236\u4f86\u57f7\u884c\u700f\u89bd\u5668\u3002\u9019\u5c07\u505c\u7528 Chromium \u6c99\u76d2\uff0c\u56e0\u70ba root \u7121\u6cd5\u4f7f\u7528\u6c99\u76d2\u3002\u5982\u679c\u4f60\u57f7\u884c\u53d7\u4fe1\u4efb\u7684\u7a0b\u5f0f\u78bc\uff08\u4f8b\u5982\uff0c\u7aef\u5230\u7aef\u6e2c\u8a66\uff09\u4e26\u4e14\u60f3\u907f\u514d\u7ba1\u7406\u55ae\u7368\u7528\u6236\u7684\u9ebb\u7169\uff0c\u90a3\u9ebc root \u7528\u6236\u53ef\u80fd\u6c92\u554f\u984c\u3002\u5c0d\u65bc\u7db2\u9801\u6293\u53d6\u6216\u722c\u884c\uff0c\u6211\u5011\u5efa\u8b70\u5728 Docker \u5bb9\u5668\u5167\u5efa\u7acb\u4e00\u500b\u55ae\u7368\u7684\u7528\u6236\u4e26\u4f7f\u7528 seccomp \u914d\u7f6e\u6a94\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u7aef\u5230\u7aef\u6e2c\u8a66",children:"\u7aef\u5230\u7aef\u6e2c\u8a66"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u53d7\u4fe1\u4efb\u7684\u7db2\u7ad9\u4e0a\uff0c\u4f60\u53ef\u4ee5\u907f\u514d\u5efa\u7acb\u4e00\u500b\u55ae\u7368\u7684\u4f7f\u7528\u8005\u4e26\u4f7f\u7528 root\uff0c\u56e0\u70ba\u4f60\u4fe1\u4efb\u5c07\u5728\u700f\u89bd\u5668\u4e0a\u57f7\u884c\u7684\u7a0b\u5f0f\u78bc\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -it --rm --ipc=host mcr.microsoft.com/playwright/dotnet:v1.46.0-noble /bin/bash\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u722c\u53d6\u548c\u6293\u53d6",children:"\u722c\u53d6\u548c\u6293\u53d6"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4e0d\u53d7\u4fe1\u4efb\u7684\u7db2\u7ad9\u4e0a\uff0c\u5efa\u8b70\u4f7f\u7528\u55ae\u7368\u7684\u4f7f\u7528\u8005\u4f86\u555f\u52d5\u700f\u89bd\u5668\uff0c\u4e26\u7d50\u5408 seccomp \u914d\u7f6e\u6a94\u3002\u5728\u5bb9\u5668\u5167\u6216\u5982\u679c\u60a8\u4f7f\u7528 Docker \u6620\u50cf\u4f5c\u70ba\u57fa\u790e\u6620\u50cf\uff0c\u60a8\u5fc5\u9808\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"adduser"})," \u4f86\u5be6\u73fe\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -it --rm --ipc=host --user pwuser --security-opt seccomp=seccomp_profile.json mcr.microsoft.com/playwright/dotnet:v1.46.0-noble /bin/bash\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/microsoft/playwright/blob/main/utils/docker/seccomp_profile.json",children:(0,s.jsx)(n.code,{children:"seccomp_profile.json"})})," \u662f\u5728\u6c99\u76d2\u4e2d\u57f7\u884c Chromium \u6240\u9700\u7684\u3002\u9019\u662f\u4e00\u500b",(0,s.jsx)(n.a,{href:"https://github.com/docker/engine/blob/d0d99b04cf6e00ed3fc27e81fc3d94e7eda70af3/profiles/seccomp/default.json",children:"\u9810\u8a2d Docker seccomp profile"})," \u4e26\u5177\u6709\u984d\u5916\u7684\u4f7f\u7528\u8005\u540d\u7a31\u7a7a\u9593\u8907\u88fd\u6b0a\u9650:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "comment": "Allow create user namespaces",\n  "names": [\n    "clone",\n    "setns",\n    "unshare"\n  ],\n  "action": "SCMP_ACT_ALLOW",\n  "args": [],\n  "includes": {},\n  "excludes": {}\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\u5efa\u8b70\u5728\u4f7f\u7528 Chrome \u6642\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"--ipc=host"}),"\uff08",(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc",children:"Docker docs"}),"\uff09\u3002\u6c92\u6709\u9019\u500b\u6a19\u8a8c\uff0cChrome \u53ef\u80fd\u6703\u8017\u76e1\u8a18\u61b6\u9ad4\u3002"]})}),"\n",(0,s.jsx)(n.h3,{id:"\u5728-ci-\u4e0a\u4f7f\u7528",children:"\u5728 CI \u4e0a\u4f7f\u7528"}),"\n",(0,s.jsxs)(n.p,{children:["\u8acb\u53c3\u95b1\u6211\u5011\u7684 ",(0,s.jsx)(n.a,{href:"/dotnet/docs/ci",children:"\u6301\u7e8c\u6574\u5408\u6307\u5357"})," \u4ee5\u7372\u53d6\u7bc4\u4f8b\u914d\u7f6e\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5716\u7247\u6a19\u7c64",children:"\u5716\u7247\u6a19\u7c64"}),"\n",(0,s.jsx)(n.p,{children:"\u8acb\u53c3\u898b[\u6240\u6709\u53ef\u7528\u7684\u6620\u50cf\u6a19\u7c64]\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u5011\u76ee\u524d\u767c\u4f48\u5e36\u6709\u4ee5\u4e0b\u6a19\u7c64\u7684\u5716\u7247:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:":v1.46.0"})," - Playwright v1.46.0 \u767c\u4f48\u57fa\u65bc Ubuntu 24.04 LTS (Noble Numbat) \u7684 docker \u6620\u50cf\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:":v1.46.0-noble"})," - Playwright v1.46.0 \u767c\u4f48\u57fa\u65bc Ubuntu 24.04 LTS (Noble Numbat) \u7684 docker \u6620\u50cf\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:":v1.46.0-jammy"})," - Playwright v1.46.0 \u767c\u4f48\u57fa\u65bc Ubuntu 22.04 LTS (Jammy Jellyfish) \u7684 docker \u6620\u50cf\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:":v1.46.0-focal"})," - Playwright v1.46.0 \u767c\u4f48\u57fa\u65bc Ubuntu 20.04 LTS (Focal Fossa) \u7684 docker \u6620\u50cf\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"\u5efa\u8b70\u76e1\u53ef\u80fd\u5c07 Docker \u6620\u50cf\u6a94\u56fa\u5b9a\u5230\u7279\u5b9a\u7248\u672c\u3002\u5982\u679c Docker \u6620\u50cf\u6a94\u4e2d\u7684 Playwright \u7248\u672c\u8207\u5c08\u6848/\u6e2c\u8a66\u4e2d\u7684\u7248\u672c\u4e0d\u5339\u914d\uff0cPlaywright \u5c07\u7121\u6cd5\u627e\u5230\u700f\u89bd\u5668\u53ef\u57f7\u884c\u6a94\u3002"})}),"\n",(0,s.jsx)(n.h3,{id:"\u57fa\u790e\u6620\u50cf\u6a94",children:"\u57fa\u790e\u6620\u50cf\u6a94"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u5011\u76ee\u524d\u6839\u64da\u4ee5\u4e0b ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/_/ubuntu",children:"Ubuntu"})," \u7248\u672c\u767c\u4f48\u6620\u50cf:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ubuntu 24.04 LTS"})," (Noble Numbat), image tags include ",(0,s.jsx)(n.code,{children:"noble"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ubuntu 22.04 LTS"})," (Jammy Jellyfish), image tags include ",(0,s.jsx)(n.code,{children:"jammy"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ubuntu 20.04 LTS"})," (Focal Fossa), image tags include ",(0,s.jsx)(n.code,{children:"focal"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"alpine",children:"Alpine"}),"\n",(0,s.jsxs)(n.p,{children:["Firefox \u548c WebKit \u7684\u700f\u89bd\u5668\u5efa\u69cb\u662f\u70ba ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Glibc",children:"glibc"})," \u51fd\u5f0f\u5eab\u5efa\u69cb\u7684\u3002\u4e0d\u652f\u63f4\u57fa\u65bc ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Musl",children:"musl"})," \u6a19\u6e96\u51fd\u5f0f\u5eab\u7684 Alpine Linux \u548c\u5176\u4ed6\u767c\u884c\u7248\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u4e0d\u540c\u7684-net-\u7248\u672c",children:"\u4f7f\u7528\u4e0d\u540c\u7684 .NET \u7248\u672c"}),"\n",(0,s.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-install-script",children:".NET install script"})," \u4f86\u5b89\u88dd\u4e0d\u540c\u7684 SDK \u7248\u672c:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -sSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin --install-dir /usr/share/dotnet --channel 6.0\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);