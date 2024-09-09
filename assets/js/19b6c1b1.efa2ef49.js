"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[210],{543:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=s(4848),t=s(8453);s(4235),s(8328),s(3078);const r={id:"ci",title:"Continuous Integration"},l=void 0,a={id:"ci",title:"Continuous Integration",description:"Introduction",source:"@site/docs/ci.mdx",sourceDirName:".",slug:"/ci",permalink:"/docs/next/ci",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"ci",title:"Continuous Integration"},sidebar:"docs",previous:{title:"Docker",permalink:"/docs/next/docker"},next:{title:"Selenium Grid (experimental)",permalink:"/docs/next/selenium-grid"}},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Workers",id:"workers",level:2},{value:"CI configurations",id:"ci-configurations",level:2},{value:"GitHub Actions",id:"github-actions",level:3},{value:"On push/pull_request",id:"on-pushpull_request",level:4},{value:"On push/pull_request (sharded)",id:"on-pushpull_request-sharded",level:4},{value:"Via Containers",id:"via-containers",level:4},{value:"On deployment",id:"on-deployment",level:4},{value:"Fail-Fast",id:"fail-fast",level:4},{value:"Docker",id:"docker",level:3},{value:"Azure Pipelines",id:"azure-pipelines",level:3},{value:"Uploading playwright-report folder with Azure Pipelines",id:"uploading-playwright-report-folder-with-azure-pipelines",level:4},{value:"Azure Pipelines (sharded)",id:"azure-pipelines-sharded",level:4},{value:"Azure Pipelines (containerized)",id:"azure-pipelines-containerized",level:4},{value:"CircleCI",id:"circleci",level:3},{value:"Sharding in CircleCI",id:"sharding-in-circleci",level:4},{value:"Jenkins",id:"jenkins",level:3},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",level:3},{value:"GitLab CI",id:"gitlab-ci",level:3},{value:"Sharding",id:"sharding",level:4},{value:"Google Cloud Build",id:"google-cloud-build",level:3},{value:"Drone",id:"drone",level:3},{value:"Caching browsers",id:"caching-browsers",level:2},{value:"Debugging browser launches",id:"debugging-browser-launches",level:2},{value:"Running headed",id:"running-headed",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Playwright tests can be executed in CI environments. We have created sample configurations for common CI providers."}),"\n",(0,i.jsx)(n.p,{children:"3 steps to get your tests running on CI:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ensure CI agent can run browsers"}),": Use ",(0,i.jsx)(n.a,{href:"/docs/next/docker",children:"our Docker image"})," in Linux agents or install your dependencies using the ",(0,i.jsx)(n.a,{href:"./browsers#install-system-dependencies",children:"CLI"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Install Playwright"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Install NPM packages\nnpm ci\n\n# Install Playwright browsers and dependencies\nnpx playwright install --with-deps\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Run your tests"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx playwright test\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"workers",children:"Workers"}),"\n",(0,i.jsxs)(n.p,{children:["We recommend setting ",(0,i.jsx)(n.a,{href:"/docs/next/api/class-testconfig#test-config-workers",children:"workers"}),' to "1" in CI environments to prioritize stability and reproducibility. Running tests sequentially ensures each test gets the full system resources, avoiding potential conflicts. However, if you have a powerful self-hosted CI system, you may enable ',(0,i.jsx)(n.a,{href:"/docs/next/test-parallel",children:"parallel"})," tests. For wider parallelization, consider ",(0,i.jsx)(n.a,{href:"/docs/next/test-parallel#shard-tests-between-multiple-machines",children:"sharding"})," - distributing tests across multiple CI jobs."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="playwright.config.ts"',children:"import { defineConfig, devices } from '@playwright/test';\n\nexport default defineConfig({\n  // Opt out of parallel tests on CI.\n  workers: process.env.CI ? 1 : undefined,\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ci-configurations",children:"CI configurations"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"./browsers#install-system-dependencies",children:"Command line tools"})," can be used to install all operating system dependencies in CI."]}),"\n",(0,i.jsx)(n.h3,{id:"github-actions",children:"GitHub Actions"}),"\n",(0,i.jsx)(n.h4,{id:"on-pushpull_request",children:"On push/pull_request"}),"\n",(0,i.jsxs)(n.p,{children:["Tests will run on push or pull request on branches main/master. The ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/actions/using-workflows/about-workflows",children:"workflow"})," will install all dependencies, install Playwright and then run the tests. It will also create the HTML report."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",metastring:'title=".github/workflows/playwright.yml"',children:"name: Playwright Tests\non:\n  push:\n    branches: [ main, master ]\n  pull_request:\n    branches: [ main, master ]\njobs:\n  test:\n    timeout-minutes: 60\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v4\n    - uses: actions/setup-node@v4\n      with:\n        node-version: 18\n    - name: Install dependencies\n      run: npm ci\n    - name: Install Playwright Browsers\n      run: npx playwright install --with-deps\n    - name: Run Playwright tests\n      run: npx playwright test\n    - uses: actions/upload-artifact@v4\n      if: ${{ !cancelled() }}\n      with:\n        name: playwright-report\n        path: playwright-report/\n        retention-days: 30\n"})}),"\n",(0,i.jsx)(n.h4,{id:"on-pushpull_request-sharded",children:"On push/pull_request (sharded)"}),"\n",(0,i.jsxs)(n.p,{children:["GitHub Actions supports ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs",children:"sharding tests between multiple jobs"}),". Check out our ",(0,i.jsx)(n.a,{href:"./test-sharding",children:"sharding doc"})," to learn more about sharding and to see a ",(0,i.jsx)(n.a,{href:"/docs/next/test-sharding#github-actions-example",children:"GitHub actions example"})," of how to configure a job to run your tests on multiple machines as well as how to merge the HTML reports."]}),"\n",(0,i.jsx)(n.h4,{id:"via-containers",children:"Via Containers"}),"\n",(0,i.jsxs)(n.p,{children:["GitHub Actions support ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/actions/using-jobs/running-jobs-in-a-container",children:"running jobs in a container"})," by using the ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idcontainer",children:(0,i.jsx)(n.code,{children:"jobs.<job_id>.container"})})," option. This is useful to not pollute the host environment with dependencies and to have a consistent environment for e.g. screenshots/visual regression testing across different operating systems."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",metastring:'title=".github/workflows/playwright.yml"',children:"name: Playwright Tests\non:\n  push:\n    branches: [ main, master ]\n  pull_request:\n    branches: [ main, master ]\njobs:\n  playwright:\n    name: 'Playwright Tests'\n    runs-on: ubuntu-latest\n    container:\n      image: mcr.microsoft.com/playwright:v1.47.0-jammy\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 18\n      - name: Install dependencies\n        run: npm ci\n      - name: Run your tests\n        run: npx playwright test\n        env:\n          HOME: /root\n"})}),"\n",(0,i.jsx)(n.h4,{id:"on-deployment",children:"On deployment"}),"\n",(0,i.jsxs)(n.p,{children:["This will start the tests after a ",(0,i.jsx)(n.a,{href:"https://developer.github.com/v3/repos/deployments/",children:"GitHub Deployment"})," went into the ",(0,i.jsx)(n.code,{children:"success"})," state. Services like Vercel use this pattern so you can run your end-to-end tests on their deployed environment."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",metastring:'title=".github/workflows/playwright.yml"',children:"name: Playwright Tests\non:\n  deployment_status:\njobs:\n  test:\n    timeout-minutes: 60\n    runs-on: ubuntu-latest\n    if: github.event.deployment_status.state == 'success'\n    steps:\n    - uses: actions/checkout@v4\n    - uses: actions/setup-node@v4\n      with:\n        node-version: 18\n    - name: Install dependencies\n      run: npm ci\n    - name: Install Playwright\n      run: npx playwright install --with-deps\n    - name: Run Playwright tests\n      run: npx playwright test\n      env:\n        PLAYWRIGHT_TEST_BASE_URL: ${{ github.event.deployment_status.target_url }}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"fail-fast",children:"Fail-Fast"}),"\n",(0,i.jsxs)(n.p,{children:["Large test suites can take very long to execute. By executing a preliminary test run with the ",(0,i.jsx)(n.code,{children:"--only-changed"})," flag, you can run test files that are likely to fail first. This will give you a faster feedback loop and slightly lower CI consumption while working on Pull Requests. To detect test files affected by your changeset, ",(0,i.jsx)(n.code,{children:"--only-changed"})," analyses your suites' dependency graph. This is a heuristic and might miss tests, so it's important that you always run the full test suite after the preliminary test run."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"name: Playwright Tests\non:\n  push:\n    branches: [ main, master ]\n  pull_request:\n    branches: [ main, master ]\njobs:\n  test:\n    timeout-minutes: 60\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v4\n      with:\n        # Force a non-shallow checkout, so that we can reference $GITHUB_BASE_REF.\n        # See https://github.com/actions/checkout for more details.\n        fetch-depth: 0\n    - uses: actions/setup-node@v4\n      with:\n        node-version: 18\n    - name: Install dependencies\n      run: npm ci\n    - name: Install Playwright Browsers\n      run: npx playwright install --with-deps\n    - name: Run changed Playwright tests\n      run: npx playwright test --only-changed=$GITHUB_BASE_REF\n      if: github.event_name == 'pull_request'\n    - name: Run Playwright tests\n      run: npx playwright test\n    - uses: actions/upload-artifact@v4\n      if: ${{ !cancelled() }}\n      with:\n        name: playwright-report\n        path: playwright-report/\n        retention-days: 30\n"})}),"\n",(0,i.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,i.jsxs)(n.p,{children:["We have a ",(0,i.jsx)(n.a,{href:"/docs/next/docker",children:"pre-built Docker image"})," which can either be used directly, or as a reference to update your existing Docker definitions."]}),"\n",(0,i.jsx)(n.p,{children:"Suggested configuration"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Using ",(0,i.jsx)(n.code,{children:"--ipc=host"})," is also recommended when using Chromium. Without it Chromium can run out of memory and crash. Learn more about this option in ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc",children:"Docker docs"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Seeing other weird errors when launching Chromium? Try running your container with ",(0,i.jsx)(n.code,{children:"docker run --cap-add=SYS_ADMIN"})," when developing locally."]}),"\n",(0,i.jsxs)(n.li,{children:["Using ",(0,i.jsx)(n.code,{children:"--init"})," Docker flag or ",(0,i.jsx)(n.a,{href:"https://github.com/Yelp/dumb-init",children:"dumb-init"})," is recommended to avoid special treatment for processes with PID=1. This is a common reason for zombie processes."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"azure-pipelines",children:"Azure Pipelines"}),"\n",(0,i.jsx)(n.p,{children:"For Windows or macOS agents, no additional configuration required, just install Playwright and run your tests."}),"\n",(0,i.jsxs)(n.p,{children:["For Linux agents, you can use ",(0,i.jsx)(n.a,{href:"/docs/next/docker",children:"our Docker container"})," with Azure Pipelines support ",(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/process/container-phases?view=azure-devops",children:"running containerized jobs"}),". Alternatively, you can use ",(0,i.jsx)(n.a,{href:"./browsers#install-system-dependencies",children:"Command line tools"})," to install all necessary dependencies."]}),"\n",(0,i.jsx)(n.p,{children:"For running the Playwright tests use this pipeline task:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"trigger:\n- main\n\npool:\n  vmImage: ubuntu-latest\n\nsteps:\n- task: NodeTool@0\n  inputs:\n    versionSpec: '18'\n  displayName: 'Install Node.js'\n- script: npm ci\n  displayName: 'npm ci'\n- script: npx playwright install --with-deps\n  displayName: 'Install Playwright browsers'\n- script: npx playwright test\n  displayName: 'Run Playwright tests'\n  env:\n    CI: 'true'\n"})}),"\n",(0,i.jsx)(n.h4,{id:"uploading-playwright-report-folder-with-azure-pipelines",children:"Uploading playwright-report folder with Azure Pipelines"}),"\n",(0,i.jsxs)(n.p,{children:["This will make the pipeline run fail if any of the playwright tests fails. If you also want to integrate the test results with Azure DevOps, use the task ",(0,i.jsx)(n.code,{children:"PublishTestResults"})," task like so:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"trigger:\n- main\n\npool:\n  vmImage: ubuntu-latest\n\nsteps:\n- task: NodeTool@0\n  inputs:\n    versionSpec: '18'\n  displayName: 'Install Node.js'\n\n- script: npm ci\n  displayName: 'npm ci'\n- script: npx playwright install --with-deps\n  displayName: 'Install Playwright browsers'\n- script: npx playwright test\n  displayName: 'Run Playwright tests'\n  env:\n    CI: 'true'\n- task: PublishTestResults@2\n  displayName: 'Publish test results'\n  inputs:\n    searchFolder: 'test-results'\n    testResultsFormat: 'JUnit'\n    testResultsFiles: 'e2e-junit-results.xml'\n    mergeTestResults: true\n    failTaskOnFailedTests: true\n    testRunTitle: 'My End-To-End Tests'\n  condition: succeededOrFailed()\n- task: PublishPipelineArtifact@1\n  inputs:\n    targetPath: playwright-report\n    artifact: playwright-report\n    publishLocation: 'pipeline'\n  condition: succeededOrFailed()\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Note: The JUnit reporter needs to be configured accordingly via"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { defineConfig } from '@playwright/test';\n\nexport default defineConfig({\n  reporter: [['junit', { outputFile: 'test-results/e2e-junit-results.xml' }]],\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["in ",(0,i.jsx)(n.code,{children:"playwright.config.ts"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"azure-pipelines-sharded",children:"Azure Pipelines (sharded)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"trigger:\n- main\n\npool:\n  vmImage: ubuntu-latest\n\nstrategy:\n  matrix:\n    chromium-1:\n      project: chromium\n      shard: 1/3\n    chromium-2:\n      project: chromium\n      shard: 2/3\n    chromium-3:\n      project: chromium\n      shard: 3/3\n    firefox-1:\n      project: firefox\n      shard: 1/3\n    firefox-2:\n      project: firefox\n      shard: 2/3\n    firefox-3:\n      project: firefox\n      shard: 3/3\n    webkit-1:\n      project: webkit\n      shard: 1/3\n    webkit-2:\n      project: webkit\n      shard: 2/3\n    webkit-3:\n      project: webkit\n      shard: 3/3\nsteps:\n- task: NodeTool@0\n  inputs:\n    versionSpec: '18'\n  displayName: 'Install Node.js'\n\n- script: npm ci\n  displayName: 'npm ci'\n- script: npx playwright install --with-deps\n  displayName: 'Install Playwright browsers'\n- script: npx playwright test --project=$(project) --shard=$(shard)\n  displayName: 'Run Playwright tests'\n  env:\n    CI: 'true'\n"})}),"\n",(0,i.jsx)(n.h4,{id:"azure-pipelines-containerized",children:"Azure Pipelines (containerized)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"trigger:\n- main\n\npool:\n  vmImage: ubuntu-latest\ncontainer: mcr.microsoft.com/playwright:v1.47.0-noble\n\nsteps:\n- task: NodeTool@0\n  inputs:\n    versionSpec: '18'\n  displayName: 'Install Node.js'\n\n- script: npm ci\n  displayName: 'npm ci'\n- script: npx playwright test\n  displayName: 'Run Playwright tests'\n  env:\n    CI: 'true'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"circleci",children:"CircleCI"}),"\n",(0,i.jsxs)(n.p,{children:["Running Playwright on CircleCI is very similar to running on GitHub Actions. In order to specify the pre-built Playwright ",(0,i.jsx)(n.a,{href:"/docs/next/docker",children:"Docker image"}),", simply modify the agent definition with ",(0,i.jsx)(n.code,{children:"docker:"})," in your config like so:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"executors:\n  pw-jammy-development:\n    docker:\n      - image: mcr.microsoft.com/playwright:v1.47.0-noble\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note: When using the docker agent definition, you are specifying the resource class of where playwright runs to the 'medium' tier ",(0,i.jsx)(n.a,{href:"https://circleci.com/docs/configuration-reference?#docker-execution-environment",children:"here"}),". The default behavior of Playwright is to set the number of workers to the detected core count (2 in the case of the medium tier). Overriding the number of workers to greater than this number will cause unnecessary timeouts and failures."]}),"\n",(0,i.jsx)(n.h4,{id:"sharding-in-circleci",children:"Sharding in CircleCI"}),"\n",(0,i.jsxs)(n.p,{children:["Sharding in CircleCI is indexed with 0 which means that you will need to override the default parallelism ENV VARS. The following example demonstrates how to run Playwright with a CircleCI Parallelism of 4 by adding 1 to the ",(0,i.jsx)(n.code,{children:"CIRCLE_NODE_INDEX"})," to pass into the ",(0,i.jsx)(n.code,{children:"--shard"})," cli arg."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:'  playwright-job-name:\n    executor: pw-jammy-development\n    parallelism: 4\n    steps:\n      - run: SHARD="$((${CIRCLE_NODE_INDEX}+1))"; npx playwright test -- --shard=${SHARD}/${CIRCLE_NODE_TOTAL}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"jenkins",children:"Jenkins"}),"\n",(0,i.jsxs)(n.p,{children:["Jenkins supports Docker agents for pipelines. Use the ",(0,i.jsx)(n.a,{href:"/docs/next/docker",children:"Playwright Docker image"})," to run tests on Jenkins."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:"pipeline {\n   agent { docker { image 'mcr.microsoft.com/playwright:v1.47.0-noble' } }\n   stages {\n      stage('e2e-tests') {\n         steps {\n            sh 'npm ci'\n            sh 'npx playwright test'\n         }\n      }\n   }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"bitbucket-pipelines",children:"Bitbucket Pipelines"}),"\n",(0,i.jsxs)(n.p,{children:["Bitbucket Pipelines can use public ",(0,i.jsx)(n.a,{href:"https://confluence.atlassian.com/bitbucket/use-docker-images-as-build-environments-792298897.html",children:"Docker images as build environments"}),". To run Playwright tests on Bitbucket, use our public Docker image (",(0,i.jsx)(n.a,{href:"/docs/next/docker",children:"see Dockerfile"}),")."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"image: mcr.microsoft.com/playwright:v1.47.0-noble\n"})}),"\n",(0,i.jsx)(n.h3,{id:"gitlab-ci",children:"GitLab CI"}),"\n",(0,i.jsxs)(n.p,{children:["To run Playwright tests on GitLab, use our public Docker image (",(0,i.jsx)(n.a,{href:"/docs/next/docker",children:"see Dockerfile"}),")."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"stages:\n  - test\n\ntests:\n  stage: test\n  image: mcr.microsoft.com/playwright:v1.47.0-noble\n  script:\n  ...\n"})}),"\n",(0,i.jsx)(n.h4,{id:"sharding",children:"Sharding"}),"\n",(0,i.jsxs)(n.p,{children:["GitLab CI supports ",(0,i.jsx)(n.a,{href:"https://docs.gitlab.com/ee/ci/jobs/job_control.html#parallelize-large-jobs",children:"sharding tests between multiple jobs"})," using the ",(0,i.jsx)(n.a,{href:"https://docs.gitlab.com/ee/ci/yaml/index.html#parallel",children:"parallel"})," keyword. The test job will be split into multiple smaller jobs that run in parallel. Parallel jobs are named sequentially from ",(0,i.jsx)(n.code,{children:"job_name 1/N"})," to ",(0,i.jsx)(n.code,{children:"job_name N/N"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"stages:\n  - test\n\ntests:\n  stage: test\n  image: mcr.microsoft.com/playwright:v1.47.0-noble\n  parallel: 7\n  script:\n    - npm ci\n    - npx playwright test --shard=$CI_NODE_INDEX/$CI_NODE_TOTAL\n"})}),"\n",(0,i.jsxs)(n.p,{children:["GitLab CI also supports sharding tests between multiple jobs using the ",(0,i.jsxs)(n.a,{href:"https://docs.gitlab.com/ee/ci/yaml/index.html#parallelmatrix",children:["parallel",":matrix"]})," option. The test job will run multiple times in parallel in a single pipeline, but with different variable values for each instance of the job. In the example below, we have 2 ",(0,i.jsx)(n.code,{children:"PROJECT"})," values and 10 ",(0,i.jsx)(n.code,{children:"SHARD"})," values, resulting in a total of 20 jobs to be run."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"stages:\n  - test\n\ntests:\n  stage: test\n  image: mcr.microsoft.com/playwright:v1.47.0-noble\n  parallel:\n    matrix:\n      - PROJECT: ['chromium', 'webkit']\n        SHARD: ['1/10', '2/10', '3/10', '4/10', '5/10', '6/10', '7/10', '8/10', '9/10', '10/10']\n  script:\n    - npm ci\n    - npx playwright test --project=$PROJECT --shard=$SHARD\n"})}),"\n",(0,i.jsx)(n.h3,{id:"google-cloud-build",children:"Google Cloud Build"}),"\n",(0,i.jsxs)(n.p,{children:["To run Playwright tests on Google Cloud Build, use our public Docker image (",(0,i.jsx)(n.a,{href:"/docs/next/docker",children:"see Dockerfile"}),")."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"steps:\n- name: mcr.microsoft.com/playwright:v1.47.0-noble\n  script: \n  ...\n  env:\n  - 'CI=true'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"drone",children:"Drone"}),"\n",(0,i.jsxs)(n.p,{children:["To run Playwright tests on Drone, use our public Docker image (",(0,i.jsx)(n.a,{href:"/docs/next/docker",children:"see Dockerfile"}),")."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"kind: pipeline\nname: default\ntype: docker\n\nsteps:\n  - name: test\n    image: mcr.microsoft.com/playwright:v1.47.0-jammy\n    commands:\n      - npx playwright test\n"})}),"\n",(0,i.jsx)(n.h2,{id:"caching-browsers",children:"Caching browsers"}),"\n",(0,i.jsxs)(n.p,{children:["Caching browser binaries is not recommended, since the amount of time it takes to restore the cache is comparable to the time it takes to download the binaries. Especially under Linux, ",(0,i.jsx)(n.a,{href:"/docs/next/browsers#install-system-dependencies",children:"operating system dependencies"})," need to be installed, which are not cacheable."]}),"\n",(0,i.jsxs)(n.p,{children:["If you still want to cache the browser binaries between CI runs, cache ",(0,i.jsx)(n.a,{href:"/docs/next/browsers#managing-browser-binaries",children:"these directories"})," in your CI configuration, against a hash of the Playwright version."]}),"\n",(0,i.jsx)(n.h2,{id:"debugging-browser-launches",children:"Debugging browser launches"}),"\n",(0,i.jsxs)(n.p,{children:["Playwright supports the ",(0,i.jsx)(n.code,{children:"DEBUG"})," environment variable to output debug logs during execution. Setting it to ",(0,i.jsx)(n.code,{children:"pw:browser"})," is helpful while debugging ",(0,i.jsx)(n.code,{children:"Error: Failed to launch browser"})," errors."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"DEBUG=pw:browser npx playwright test\n"})}),"\n",(0,i.jsx)(n.h2,{id:"running-headed",children:"Running headed"}),"\n",(0,i.jsxs)(n.p,{children:["By default, Playwright launches browsers in headless mode. See in our ",(0,i.jsx)(n.a,{href:"/docs/next/running-tests#run-tests-in-headed-mode",children:"Running tests"})," guide how to run tests in headed mode."]}),"\n",(0,i.jsxs)(n.p,{children:["On Linux agents, headed execution requires ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Xvfb",children:"Xvfb"})," to be installed. Our ",(0,i.jsx)(n.a,{href:"/docs/next/docker",children:"Docker image"})," and GitHub Action have Xvfb pre-installed. To run browsers in headed mode with Xvfb, add ",(0,i.jsx)(n.code,{children:"xvfb-run"})," before the actual command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"xvfb-run npx playwright test\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);