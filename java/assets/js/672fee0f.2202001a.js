"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2910],{5453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(4848),s=n(8453),r=n(4235),i=n(8328);n(3078);const l={id:"test-runners",title:"Test Runners"},o=void 0,c={id:"test-runners",title:"Test Runners",description:"Introduction",source:"@site/docs/test-runners.mdx",sourceDirName:".",slug:"/test-runners",permalink:"/java/docs/next/test-runners",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"test-runners",title:"Test Runners"},sidebar:"docs",previous:{title:"Setting up CI",permalink:"/java/docs/next/ci-intro"},next:{title:"JUnit (experimental)",permalink:"/java/docs/next/junit"}},h={},p=[{value:"Introduction",id:"introduction",level:2},{value:"JUnit",id:"junit",level:2},{value:"Running Tests in Parallel",id:"running-tests-in-parallel",level:3},{value:"Using Gradle",id:"using-gradle",level:3},{value:"TestNG",id:"testng",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"With a few lines of code, you can hook up Playwright to your favorite Java test runner."}),"\n",(0,a.jsx)(t.p,{children:"Playwright and Browser instances can be reused between tests for better performance. We recommend running each test case in a new BrowserContext, this way browser state will be isolated between the tests."}),"\n",(0,a.jsx)(t.h2,{id:"junit",children:"JUnit"}),"\n",(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(t.a,{href:"https://junit.org/junit5/",children:"JUnit"})," you can initialize ",(0,a.jsx)(t.a,{href:"/java/docs/next/api/class-playwright",title:"Playwright",children:"Playwright"})," and ",(0,a.jsx)(t.a,{href:"/java/docs/next/api/class-browser",title:"Browser",children:"Browser"})," in ",(0,a.jsx)(t.a,{href:"https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/BeforeAll.html",children:"@BeforeAll"})," method and destroy them in ",(0,a.jsx)(t.a,{href:"https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/AfterAll.html",children:"@AfterAll"}),". In the example below all three test methods use the same ",(0,a.jsx)(t.a,{href:"/java/docs/next/api/class-browser",title:"Browser",children:"Browser"}),". Each test uses its own ",(0,a.jsx)(t.a,{href:"/java/docs/next/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"})," and ",(0,a.jsx)(t.a,{href:"/java/docs/next/api/class-page",title:"Page",children:"Page"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'package org.example;\n\nimport com.microsoft.playwright.Browser;\nimport com.microsoft.playwright.BrowserContext;\nimport com.microsoft.playwright.Page;\nimport com.microsoft.playwright.Playwright;\nimport org.junit.jupiter.api.*;\n\nimport static org.junit.jupiter.api.Assertions.assertEquals;\nimport static org.junit.jupiter.api.Assertions.assertTrue;\n\npublic class TestExample {\n  // Shared between all tests in this class.\n  static Playwright playwright;\n  static Browser browser;\n\n  // New instance for each test method.\n  BrowserContext context;\n  Page page;\n\n  @BeforeAll\n  static void launchBrowser() {\n    playwright = Playwright.create();\n    browser = playwright.chromium().launch();\n  }\n\n  @AfterAll\n  static void closeBrowser() {\n    playwright.close();\n  }\n\n  @BeforeEach\n  void createContextAndPage() {\n    context = browser.newContext();\n    page = context.newPage();\n  }\n\n  @AfterEach\n  void closeContext() {\n    context.close();\n  }\n\n  @Test\n  void shouldClickButton() {\n    page.navigate("data:text/html,<script>var result;<\/script><button onclick=\'result=\\"Clicked\\"\'>Go</button>");\n    page.locator("button").click();\n    assertEquals("Clicked", page.evaluate("result"));\n  }\n\n  @Test\n  void shouldCheckTheBox() {\n    page.setContent("<input id=\'checkbox\' type=\'checkbox\'></input>");\n    page.locator("input").check();\n    assertTrue((Boolean) page.evaluate("() => window[\'checkbox\'].checked"));\n  }\n\n  @Test\n  void shouldSearchWiki() {\n    page.navigate("https://www.wikipedia.org/");\n    page.locator("input[name=\\"search\\"]").click();\n    page.locator("input[name=\\"search\\"]").fill("playwright");\n    page.locator("input[name=\\"search\\"]").press("Enter");\n    assertEquals("https://en.wikipedia.org/wiki/Playwright", page.url());\n  }\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["See experimental ",(0,a.jsx)(t.a,{href:"/java/docs/next/junit",children:"JUnit integration"})," to automatically initialize Playwright objects and more."]}),"\n",(0,a.jsx)(t.h3,{id:"running-tests-in-parallel",children:"Running Tests in Parallel"}),"\n",(0,a.jsxs)(t.p,{children:["By default JUnit will run all tests sequentially on a single thread. Since JUnit 5.3 you can change this behavior to run tests in parallel to speed up execution (see ",(0,a.jsx)(t.a,{href:"https://junit.org/junit5/docs/snapshot/user-guide/index.html#writing-tests-parallel-execution",children:"this page"}),"). Since it is not safe to use same Playwright objects from multiple threads without extra synchronization we recommend you create Playwright instance per thread and use it on that thread exclusively. Here is an example how to run multiple test classes in parallel."]}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.a,{href:"https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/TestInstance.html",children:(0,a.jsx)(t.code,{children:"@TestInstance(TestInstance.Lifecycle.PER_CLASS)"})})," annotation to make JUnit create one instance of a class for all test methods within that class (by default each JUnit will create a new instance of the class for each test method). Store ",(0,a.jsx)(t.a,{href:"/java/docs/next/api/class-playwright",title:"Playwright",children:"Playwright"})," and ",(0,a.jsx)(t.a,{href:"/java/docs/next/api/class-browser",title:"Browser",children:"Browser"})," objects in instance fields. They will be shared between tests. Each instance of the class will use its own copy of Playwright."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'// Subclasses will inherit PER_CLASS behavior.\n@TestInstance(TestInstance.Lifecycle.PER_CLASS)\nclass TestFixtures {\n  // Shared between all tests in the class.\n  Playwright playwright;\n  Browser browser;\n\n  @BeforeAll\n  void launchBrowser() {\n    playwright = Playwright.create();\n    browser = playwright.chromium().launch();\n  }\n\n  @AfterAll\n  void closeBrowser() {\n    playwright.close();\n  }\n\n  // New instance for each test method.\n  BrowserContext context;\n  Page page;\n\n  @BeforeEach\n  void createContextAndPage() {\n    context = browser.newContext();\n    page = context.newPage();\n  }\n\n  @AfterEach\n  void closeContext() {\n    context.close();\n  }\n}\n\nclass Test1 extends TestFixtures {\n  @Test\n  void shouldClickButton() {\n    page.navigate("data:text/html,<script>var result;<\/script><button onclick=\'result=\\"Clicked\\"\'>Go</button>");\n    page.locator("button").click();\n    assertEquals("Clicked", page.evaluate("result"));\n  }\n\n  @Test\n  void shouldCheckTheBox() {\n    page.setContent("<input id=\'checkbox\' type=\'checkbox\'></input>");\n    page.locator("input").check();\n    assertTrue((Boolean) page.evaluate("() => window[\'checkbox\'].checked"));\n  }\n\n  @Test\n  void shouldSearchWiki() {\n    page.navigate("https://www.wikipedia.org/");\n    page.locator("input[name=\\"search\\"]").click();\n    page.locator("input[name=\\"search\\"]").fill("playwright");\n    page.locator("input[name=\\"search\\"]").press("Enter");\n    assertEquals("https://en.wikipedia.org/wiki/Playwright", page.url());\n  }\n}\n\nclass Test2 extends TestFixtures {\n  @Test\n  void shouldReturnInnerHTML() {\n    page.setContent("<div>hello</div>");\n    assertEquals("hello", page.innerHTML("css=div"));\n  }\n\n  @Test\n  void shouldClickButton() {\n    Page popup = page.waitForPopup(() -> {\n      page.evaluate("window.open(\'about:blank\');");\n    });\n    assertEquals("about:blank", popup.url());\n  }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Configure JUnit to run tests in each class sequentially and run multiple classes on parallel threads (with max number of thread equal to 1/2 of the number of CPU cores):"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"junit.jupiter.execution.parallel.enabled = true\njunit.jupiter.execution.parallel.mode.default = same_thread\njunit.jupiter.execution.parallel.mode.classes.default = concurrent\njunit.jupiter.execution.parallel.config.strategy=dynamic\njunit.jupiter.execution.parallel.config.dynamic.factor=0.5\n"})}),"\n",(0,a.jsx)(t.h3,{id:"using-gradle",children:"Using Gradle"}),"\n",(0,a.jsx)(t.p,{children:"You can use a Gradle build configuration script, written in Groovy or Kotlin."}),"\n",(0,a.jsxs)(r.A,{defaultValue:"gradle",values:[{label:"build.gradle",value:"gradle"},{label:"build.gradle.kts",value:"gradle-kotlin"}],children:[(0,a.jsx)(i.A,{value:"gradle",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"plugins {\n  application\n  id 'java'\n}\n\nrepositories {\n  mavenCentral()\n}\n\ndependencies {\n  implementation 'com.microsoft.playwright:playwright:1.46.0'\n}\n\napplication {\n  mainClass = 'org.example.App'\n}\n\n// Usage: ./gradlew playwright --args=\"help\"\ntask playwright(type: JavaExec) {\n  classpath sourceSets.test.runtimeClasspath\n  mainClass = 'com.microsoft.playwright.CLI'\n}\n\ntest {\n  useJUnitPlatform()\n}\n"})})}),(0,a.jsx)(i.A,{value:"gradle-kotlin",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'plugins {\n  application\n  id("java")\n}\n\nrepositories {\n  mavenCentral()\n}\n\ndependencies {\n  implementation("com.microsoft.playwright:playwright:1.46.0")\n}\n\napplication {\n  mainClass.set("org.example.App")\n}\n\n// Usage: ./gradlew playwright --args="help"\ntasks.register<JavaExec>("playwright") {\n  classpath(sourceSets["test"].runtimeClasspath)\n  mainClass.set("com.microsoft.playwright.CLI")\n}\n\ntasks.test {\n  useJUnitPlatform()\n  testLogging {\n    events("passed", "skipped", "failed")\n  }\n}\n'})})})]}),"\n",(0,a.jsx)(t.p,{children:"Tests can then be launched as follows:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"./gradlew run\n"})}),"\n",(0,a.jsx)(t.p,{children:"Also, Playwright command line tools can be run with :"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'./gradlew playwright --args="help"\n'})}),"\n",(0,a.jsx)(t.h2,{id:"testng",children:"TestNG"}),"\n",(0,a.jsxs)(t.p,{children:["In ",(0,a.jsx)(t.a,{href:"https://testng.org/",children:"TestNG"})," you can initialize ",(0,a.jsx)(t.a,{href:"/java/docs/next/api/class-playwright",title:"Playwright",children:"Playwright"})," and ",(0,a.jsx)(t.a,{href:"/java/docs/next/api/class-browser",title:"Browser",children:"Browser"})," in ",(0,a.jsx)(t.a,{href:"https://javadoc.io/doc/org.testng/testng/latest/org/testng/annotations/BeforeClass.html",children:"@BeforeClass"})," method and destroy them in ",(0,a.jsx)(t.a,{href:"https://javadoc.io/doc/org.testng/testng/latest/org/testng/annotations/AfterClass.html",children:"@AfterClass"}),". In the example below all three test methods use the same ",(0,a.jsx)(t.a,{href:"/java/docs/next/api/class-browser",title:"Browser",children:"Browser"}),". Each test uses its own ",(0,a.jsx)(t.a,{href:"/java/docs/next/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"})," and ",(0,a.jsx)(t.a,{href:"/java/docs/next/api/class-page",title:"Page",children:"Page"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'package org.example;\n\nimport com.microsoft.playwright.Browser;\nimport com.microsoft.playwright.BrowserContext;\nimport com.microsoft.playwright.Page;\nimport com.microsoft.playwright.Playwright;\nimport org.testng.annotations.*;\n\nimport static org.testng.Assert.assertEquals;\nimport static org.testng.Assert.assertTrue;\n\npublic class TestExample {\n  // Shared between all tests in this class.\n  Playwright playwright;\n  Browser browser;\n\n  // New instance for each test method.\n  BrowserContext context;\n  Page page;\n\n  @BeforeClass\n  void launchBrowser() {\n    playwright = Playwright.create();\n    browser = playwright.chromium().launch();\n  }\n\n  @AfterClass\n  void closeBrowser() {\n    playwright.close();\n  }\n\n  @BeforeMethod\n  void createContextAndPage() {\n    context = browser.newContext();\n    page = context.newPage();\n  }\n\n  @AfterMethod\n  void closeContext() {\n    context.close();\n  }\n\n  @Test\n  void shouldClickButton() {\n    page.navigate("data:text/html,<script>var result;<\/script><button onclick=\'result=\\"Clicked\\"\'>Go</button>");\n    page.locator("button").click();\n    assertEquals("Clicked", page.evaluate("result"));\n  }\n\n  @Test\n  void shouldCheckTheBox() {\n    page.setContent("<input id=\'checkbox\' type=\'checkbox\'></input>");\n    page.locator("input").check();\n    assertTrue((Boolean) page.evaluate("() => window[\'checkbox\'].checked"));\n  }\n\n  @Test\n  void shouldSearchWiki() {\n    page.navigate("https://www.wikipedia.org/");\n    page.locator("input[name=\\"search\\"]").click();\n    page.locator("input[name=\\"search\\"]").fill("playwright");\n    page.locator("input[name=\\"search\\"]").press("Enter");\n    assertEquals("https://en.wikipedia.org/wiki/Playwright", page.url());\n  }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);