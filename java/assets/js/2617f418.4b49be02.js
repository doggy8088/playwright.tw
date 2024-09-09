"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9266],{2423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(4848),a=n(8453);n(4235),n(8328),n(3078);const i={id:"junit",title:"JUnit (experimental)"},r=void 0,l={id:"junit",title:"JUnit (experimental)",description:"Introduction",source:"@site/docs/junit.mdx",sourceDirName:".",slug:"/junit",permalink:"/java/docs/next/junit",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"junit",title:"JUnit (experimental)"},sidebar:"docs",previous:{title:"Test Runners",permalink:"/java/docs/next/test-runners"},next:{title:"Release notes",permalink:"/java/docs/next/release-notes"}},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Fixtures",id:"fixtures",level:2},{value:"Customizing options",id:"customizing-options",level:2},{value:"Running Tests in Parallel",id:"running-tests-in-parallel",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"With a few lines of code, you can hook up Playwright to your favorite Java test runner."}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.a,{href:"https://junit.org/junit5/",children:"JUnit"}),", you can use Playwright ",(0,s.jsx)(t.a,{href:"/java/docs/next/junit#fixtures",children:"fixtures"})," to automatically initialize ",(0,s.jsx)(t.a,{href:"/java/docs/next/api/class-playwright",title:"Playwright",children:"Playwright"}),", ",(0,s.jsx)(t.a,{href:"/java/docs/next/api/class-browser",title:"Browser",children:"Browser"}),", ",(0,s.jsx)(t.a,{href:"/java/docs/next/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"})," or ",(0,s.jsx)(t.a,{href:"/java/docs/next/api/class-page",title:"Page",children:"Page"}),". In the example below, all three test methods use the same ",(0,s.jsx)(t.a,{href:"/java/docs/next/api/class-browser",title:"Browser",children:"Browser"}),". Each test uses its own ",(0,s.jsx)(t.a,{href:"/java/docs/next/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"})," and ",(0,s.jsx)(t.a,{href:"/java/docs/next/api/class-page",title:"Page",children:"Page"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'package org.example;\n\nimport com.microsoft.playwright.Page;\nimport com.microsoft.playwright.junit.UsePlaywright;\nimport org.junit.jupiter.api.Test;\n\nimport static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;\nimport static org.junit.jupiter.api.Assertions.assertEquals;\n\n@UsePlaywright\npublic class TestExample {\n  @Test\n  void shouldClickButton(Page page) {\n    page.navigate("data:text/html,<script>var result;<\/script><button onclick=\'result=\\"Clicked\\"\'>Go</button>");\n    page.locator("button").click();\n    assertEquals("Clicked", page.evaluate("result"));\n  }\n\n  @Test\n  void shouldCheckTheBox(Page page) {\n    page.setContent("<input id=\'checkbox\' type=\'checkbox\'></input>");\n    page.locator("input").check();\n    assertEquals(true, page.evaluate("window[\'checkbox\'].checked"));\n  }\n\n  @Test\n  void shouldSearchWiki(Page page) {\n    page.navigate("https://www.wikipedia.org/");\n    page.locator("input[name=\\"search\\"]").click();\n    page.locator("input[name=\\"search\\"]").fill("playwright");\n    page.locator("input[name=\\"search\\"]").press("Enter");\n    assertThat(page).hasURL("https://en.wikipedia.org/wiki/Playwright");\n  }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"fixtures",children:"Fixtures"}),"\n",(0,s.jsxs)(t.p,{children:["Simply add JUnit annotation ",(0,s.jsx)(t.code,{children:"@UsePlaywright"})," to your test classes to enable Playwright fixtures. Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'@UsePlaywright\npublic class TestExample {\n\n  @Test\n  void basicTest(Page page) {\n    page.navigate("https://playwright.dev/");\n\n    assertThat(page).hasTitle(Pattern.compile("Playwright"));\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Page page"})," argument tells JUnit to setup the ",(0,s.jsx)(t.code,{children:"page"})," fixture and provide it to your test method."]}),"\n",(0,s.jsx)(t.p,{children:"Here is a list of the pre-defined fixtures:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Fixture"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"page"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/java/docs/next/api/class-page",title:"Page",children:"Page"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Isolated page for this test run."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"browserContext"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/java/docs/next/api/class-browsercontext",title:"BrowserContext",children:"BrowserContext"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Isolated context for this test run. The ",(0,s.jsx)(t.code,{children:"page"})," fixture belongs to this context as well."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"browser"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/java/docs/next/api/class-browser",title:"Browser",children:"Browser"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Browsers are shared across tests to optimize resources."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"playwright"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/java/docs/next/api/class-playwright",title:"Playwright",children:"Playwright"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Playwright instance is shared between tests running on the same thread."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"request"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/java/docs/next/api/class-apirequestcontext",title:"APIRequestContext",children:"APIRequestContext"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Isolated APIRequestContext for this test run. Learn how to do ",(0,s.jsx)(t.a,{href:"./api-testing",children:"API testing"}),"."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"customizing-options",children:"Customizing options"}),"\n",(0,s.jsxs)(t.p,{children:["To customize fixture options, you should implement an ",(0,s.jsx)(t.code,{children:"OptionsFactory"})," and specify the class in the ",(0,s.jsx)(t.code,{children:"@UsePlaywright()"})," annotation."]}),"\n",(0,s.jsxs)(t.p,{children:["You can easily override launch options for ",(0,s.jsx)(t.a,{href:"/java/docs/next/api/class-browsertype#browser-type-launch",children:"BrowserType.launch()"}),", or context options for ",(0,s.jsx)(t.a,{href:"/java/docs/next/api/class-browser#browser-new-context",children:"Browser.newContext()"})," and ",(0,s.jsx)(t.a,{href:"/java/docs/next/api/class-apirequest#api-request-new-context",children:"APIRequest.newContext()"}),". See the following example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'import com.microsoft.playwright.junit.Options;\nimport com.microsoft.playwright.junit.OptionsFactory;\nimport com.microsoft.playwright.junit.UsePlaywright;\n\n@UsePlaywright(MyTest.CustomOptions.class)\npublic class MyTest {\n\n  public static class CustomOptions implements OptionsFactory {\n    @Override\n    public Options getOptions() {\n      return new Options()\n          .setHeadless(false)\n          .setContextOption(new Browser.NewContextOptions()\n              .setBaseURL("https://github.com"))\n          .setApiRequestOptions(new APIRequest.NewContextOptions()\n              .setBaseURL("https://playwright.dev"));\n    }\n  }\n\n  @Test\n  public void testWithCustomOptions(Page page, APIRequestContext request) {\n    page.navigate("/");\n    assertThat(page).hasURL(Pattern.compile("github"));\n\n    APIResponse response = request.get("/");\n    assertTrue(response.text().contains("Playwright"));\n  }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"running-tests-in-parallel",children:"Running Tests in Parallel"}),"\n",(0,s.jsxs)(t.p,{children:["By default JUnit will run all tests sequentially on a single thread. Since JUnit 5.3 you can change this behavior to run tests in parallel to speed up execution (see ",(0,s.jsx)(t.a,{href:"https://junit.org/junit5/docs/snapshot/user-guide/index.html#writing-tests-parallel-execution",children:"this page"}),"). Since it is not safe to use same Playwright objects from multiple threads without extra synchronization we recommend you create Playwright instance per thread and use it on that thread exclusively. Here is an example how to run multiple test classes in parallel."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'@UsePlaywright\nclass Test1 {\n  @Test\n  void shouldClickButton(Page page) {\n    page.navigate("data:text/html,<script>var result;<\/script><button onclick=\'result=\\"Clicked\\"\'>Go</button>");\n    page.locator("button").click();\n    assertEquals("Clicked", page.evaluate("result"));\n  }\n\n  @Test\n  void shouldCheckTheBox(Page page) {\n    page.setContent("<input id=\'checkbox\' type=\'checkbox\'></input>");\n    page.locator("input").check();\n    assertEquals(true, page.evaluate("window[\'checkbox\'].checked"));\n  }\n\n  @Test\n  void shouldSearchWiki(Page page) {\n    page.navigate("https://www.wikipedia.org/");\n    page.locator("input[name=\\"search\\"]").click();\n    page.locator("input[name=\\"search\\"]").fill("playwright");\n    page.locator("input[name=\\"search\\"]").press("Enter");\n    assertThat(page).hasURL("https://en.wikipedia.org/wiki/Playwright");\n  }\n}\n\n@UsePlaywright\nclass Test2 {\n  @Test\n  void shouldReturnInnerHTML(Page page) {\n    page.setContent("<div>hello</div>");\n    assertEquals("hello", page.innerHTML("css=div"));\n  }\n\n  @Test\n  void shouldClickButton(Page page) {\n    Page popup = page.waitForPopup(() -> {\n      page.evaluate("window.open(\'about:blank\');");\n    });\n    assertEquals("about:blank", popup.url());\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Configure JUnit to run tests in each class sequentially and run multiple classes on parallel threads (with max number of thread equal to 1/2 of the number of CPU cores):"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"junit.jupiter.execution.parallel.enabled = true\njunit.jupiter.execution.parallel.mode.default = same_thread\njunit.jupiter.execution.parallel.mode.classes.default = concurrent\njunit.jupiter.execution.parallel.config.strategy=dynamic\njunit.jupiter.execution.parallel.config.dynamic.factor=0.5\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);