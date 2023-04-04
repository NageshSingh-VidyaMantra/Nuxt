<script setup></script>

<template>
  <section class="my-10 border-4 border-lime-500 rounded-xl p-5 bg-[#222] shadow-xl shadow-black">
    <h1 class="styleHeading">Client side rendering</h1>
    <div class="styleDivBox">
      <div class="styleDivSpanBox"><span class="styleSpanBox"></span></div>
      <p class="stylePBox">When a user requests a page from browser to the server for a web page, the server sends back a
        single HTML page that is pretty much empty.</p>
    </div>
    <div class="styleDivBox">
      <div class="styleDivSpanBox"><span class="styleSpanBox"></span></div>
      <p class="stylePBox">It also sends back a JS bundel to the browser, which kick-starts the <span
          class="highLight">VUE application ( considering SPA )</span> and render the content on the page. </p>
    </div>
    <div class="styleDivBox">
      <div class="styleDivSpanBox"><span class="styleSpanBox"></span></div>
      <p class="stylePBox">As we can see rendering take place at browser, it is called <span class="highLight">Client-Side
          Rendering.</span></p>
    </div>
    <div class="flex justify-center items-center my-10">
      <ul class="bg-[#444] p-5 rounded-lg shadow-md shadow-black text-left">
        <p class="text-lime-400 text-2xl mb-5">Drawback of CSR</p>
        <li class="styleLi">Poor SEO (Search Engine Optimization)</li>
        <li class="styleLi">Take time Load Page</li>
      </ul>
    </div>
  </section>

  <section class="my-10 border-4 border-lime-500 rounded-xl p-5 bg-[#222] shadow-xl shadow-black">
    <h1 class="styleHeading">Server side rendering</h1>
  <div class="styleDivBox">
    <div class="styleDivSpanBox"><span class="styleSpanBox"></span></div>
    <p class="stylePBox">When a user requests a page from browser to the server for a web page, the NUXT server
      generates the HTML content of the requested page and sends it to the client. This means that the initial page load
      is faster, since the client receives pre-rendered content instead of an empty page that requires additional time
      to load and render.</p>
  </div>
  <div class="styleDivBox">
    <div class="styleDivSpanBox"><span class="styleSpanBox"></span></div>
    <p class="stylePBox">It also sends back a JS bundel, which initiate a process called hydration to implemant all of
      the view functionality and interactivity into the page content and from then on it much behave like a typical SPA.
    </p>
  </div>
  <div class="styleDivBox">
    <div class="styleDivSpanBox"><span class="styleSpanBox"></span></div>
    <p class="stylePBox">Work as a combination of CSR & SSR, SSR for initial request and CSR for SPA on client website
    </p>
  </div>
  <div class="styleDivBox">
    <div class="styleDivSpanBox"><span class="styleSpanBox"></span></div>
    <p class="stylePBox">In Nuxt.js, <span class="highLight">hydrate</span> refers to the process of rendering the
      initial HTML content of a web page on the server-side and then reusing that content on the client-side. This
      process is also known as <span class="highLight">server-side rendering (SSR)</span> and is a core feature of
      Nuxt.js.</p>
  </div>
  <div class="styleDivBox">
    <div class="styleDivSpanBox"><span class="styleSpanBox"></span></div>
    <p class="stylePBox">During the server-side rendering process, Nuxt.js generates HTML, CSS, and JavaScript code that
      represent the initial state of the web page.</p>
  </div>
  <div class="styleDivBox">
    <div class="styleDivSpanBox"><span class="styleSpanBox"></span></div>
    <p class="stylePBox">When the page is loaded in the user's browser, the JavaScript code is executed and the page is
      rehydrated, meaning that the initial HTML content is reused and JavaScript takes over to handle any dynamic
      behavior of the web page.</p>
  </div>
  <div class="flex justify-center items-center my-10">
    <ul class="w-[600px] bg-[#444] p-5 rounded-lg shadow-md shadow-black text-left">
      <p class="mb-5 text-lime-400 text-2xl">This approach provides several benefits</p>
      <li class="styleLi">including faster page load times</li>
      <li class="styleLi">improved search engine optimization (SEO),</li>
      <li class="styleLi">better user experience on slow networks.</li>
    </ul>
  </div>
  <div class="styleDivBox">
    <div class="styleDivSpanBox"><span class="styleSpanBox"></span></div>
    <p class="stylePBox">Nuxt.js handles the hydration process automatically, making it easy for developers to build
      performant web applications that can be rendered both on the server and the client-side.</p>
  </div>
</section></template>

