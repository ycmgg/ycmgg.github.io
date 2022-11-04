"use strict";
exports.id = 811;
exports.ids = [811];
exports.modules = {

/***/ 8561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-a25da32e",
  "path": "/Vue/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F+%E8%B7%AF%E7%94%B1+%E7%BB%84%E4%BB%B6%E7%BC%93%E5%AD%98.html",
  "title": "生命周期",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "研究生命周期的意义",
      "slug": "研究生命周期的意义",
      "children": []
    },
    {
      "level": 2,
      "title": "生命周期函数(钩子函数)",
      "slug": "生命周期函数-钩子函数",
      "children": []
    },
    {
      "level": 2,
      "title": "组件生命周期分类",
      "slug": "组件生命周期分类",
      "children": []
    },
    {
      "level": 2,
      "title": "SPA - 单页应用程序",
      "slug": "spa-单页应用程序",
      "children": [
        {
          "level": 3,
          "title": "优势",
          "slug": "优势",
          "children": []
        },
        {
          "level": 3,
          "title": "缺点",
          "slug": "缺点",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "路由介绍",
      "slug": "路由介绍",
      "children": []
    },
    {
      "level": 2,
      "title": "vue-router介绍",
      "slug": "vue-router介绍",
      "children": [
        {
          "level": 3,
          "title": "路由 - 组件分类",
          "slug": "路由-组件分类",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "vue-router使用",
      "slug": "vue-router使用",
      "children": []
    },
    {
      "level": 2,
      "title": "配置路由规则",
      "slug": "配置路由规则",
      "children": []
    },
    {
      "level": 2,
      "title": "路由的封装",
      "slug": "路由的封装",
      "children": []
    },
    {
      "level": 2,
      "title": "vue路由 - 声明式导航",
      "slug": "vue路由-声明式导航",
      "children": [
        {
          "level": 3,
          "title": "声明式导航 - 基础使用",
          "slug": "声明式导航-基础使用",
          "children": []
        },
        {
          "level": 3,
          "title": "导航高亮",
          "slug": "导航高亮",
          "children": []
        },
        {
          "level": 3,
          "title": "路由使用巩固 - 练习",
          "slug": "路由使用巩固-练习",
          "children": []
        },
        {
          "level": 3,
          "title": "声明式导航 - 跳转传参",
          "slug": "声明式导航-跳转传参",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "vue路由 - 重定向和模式",
      "slug": "vue路由-重定向和模式",
      "children": [
        {
          "level": 3,
          "title": "路由 - 重定向",
          "slug": "路由-重定向",
          "children": []
        },
        {
          "level": 3,
          "title": "路由 - 404页面",
          "slug": "路由-404页面",
          "children": []
        },
        {
          "level": 3,
          "title": "路由 - 模式设置",
          "slug": "路由-模式设置",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "vue路由 - 编程式导航",
      "slug": "vue路由-编程式导航",
      "children": [
        {
          "level": 3,
          "title": "编程式导航 - 基础使用",
          "slug": "编程式导航-基础使用",
          "children": []
        },
        {
          "level": 3,
          "title": "编程式导航 - 跳转传参",
          "slug": "编程式导航-跳转传参",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "组件缓存 keep-alive",
      "slug": "组件缓存-keep-alive",
      "children": [
        {
          "level": 3,
          "title": "基本语法",
          "slug": "基本语法",
          "children": []
        },
        {
          "level": 3,
          "title": "keep-alive对应的两个钩子",
          "slug": "keep-alive对应的两个钩子",
          "children": []
        }
      ]
    }
  ],
  "git": {}
}


/***/ }),

/***/ 2634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/Vue/生命周期+路由+组件缓存.html.vue?vue&type=template&id=d0966568



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = (0,external_vue_.resolveComponent)("ExternalLinkIcon")

  _push(`<!--[--><h1 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h1><h2 id="研究生命周期的意义" tabindex="-1"><a class="header-anchor" href="#研究生命周期的意义" aria-hidden="true">#</a> 研究生命周期的意义</h2><p>生命周期 =&gt; 一个事物从出生 到 消亡的全部过程</p><p>生命周期（Life Cycle）是指一个组件从<code>创建</code>-&gt; <code>运行</code> -&gt; <code>销毁</code>的整个阶段，强调的是一个时间段</p><ul><li>张三出生，表示这个人生命周期的开始</li><li>张三离世，表示这个人生命周期的结束</li><li>中间张三的一生，就是张三的生命周期</li></ul><p>我们可以把<code>每个 vue 组件运行的过程</code>，也概括为生命周期：</p><ul><li>vue 组件的初始化，表示生命周期的开始</li><li>vue 组件的销毁，表示生命周期的结束</li><li>vue 组件中间运行的过程，就是组件的生命周期</li></ul><h2 id="生命周期函数-钩子函数" tabindex="-1"><a class="header-anchor" href="#生命周期函数-钩子函数" aria-hidden="true">#</a> 生命周期函数(钩子函数)</h2><p><strong>生命周期函数：是由 vue 框架提供的内置函数，会伴随着组件的生命周期，自动按次序执行。</strong></p><p>生命周期函数的作用：允许程序员在<code>特定的时间点</code>，执行某些特定的操作。</p><p>例如，组件创建完毕后，可以在created 生命周期函数中发起Ajax 请求，从而初始化 data 数据。</p><h2 id="组件生命周期分类" tabindex="-1"><a class="header-anchor" href="#组件生命周期分类" aria-hidden="true">#</a> 组件生命周期分类</h2><p>vue 组件的生命周期函数，可以分为 3 大类：</p><ul><li>组件<code>初始化阶段</code>的生命周期函数</li><li>组件<code>运行阶段</code>的生命周期函数</li><li>组件<code>销毁阶段</code>的生命周期函数</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1.</span> beforeCreate：data数据初始化之前，组件还没有数据
<span class="token number">2.</span> <span class="token literal-property property">created</span><span class="token operator">:</span> data数据初始化之后，可以获取到组件的数据
<span class="token number">3.</span> beforeMount：<span class="token constant">DOM</span>渲染之前，<span class="token constant">DOM</span>还没渲染
<span class="token number">4.</span> mounted：<span class="token constant">DOM</span>渲染之后，可以操作<span class="token constant">DOM</span>了
<span class="token number">5.</span> <span class="token literal-property property">beforeUpdate</span><span class="token operator">:</span> 数据更新，<span class="token constant">DOM</span>更新前
<span class="token number">6.</span> <span class="token literal-property property">updated</span><span class="token operator">:</span> 数据更新，<span class="token constant">DOM</span>更新后
<span class="token number">7.</span> <span class="token literal-property property">beforeDestroy</span><span class="token operator">:</span> 组件销毁前
<span class="token number">8.</span> <span class="token literal-property property">destroyed</span><span class="token operator">:</span> 组件销毁后
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h1 id="单页应用程序与路由" tabindex="-1"><a class="header-anchor" href="#单页应用程序与路由" aria-hidden="true">#</a> 单页应用程序与路由</h1><h2 id="spa-单页应用程序" tabindex="-1"><a class="header-anchor" href="#spa-单页应用程序" aria-hidden="true">#</a> SPA - 单页应用程序</h2><ul><li>SPA： <code>Single Page Application</code> 单页面应用程序</li><li>MPA : <code>Multiple Page Application</code>多页面应用程序</li></ul><p><a href="https://baike.baidu.com/item/SPA/17536313?fr=aladdin" target="_blank" rel="noopener noreferrer">SPA `)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p><p><a href="https://music.163.com/" target="_blank" rel="noopener noreferrer">网易云音乐`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p><h3 id="优势" tabindex="-1"><a class="header-anchor" href="#优势" aria-hidden="true">#</a> 优势</h3><ul><li>传统的多页面应用程序，每次请求服务器返回的都是一整个完整的页面</li><li>单页面应用程序只有第一次会加载完整的页面</li><li>以后每次请求仅仅获取必要的数据，减少了请求体积，加快页面响应速度，降低了对服务器的压力</li><li>SPA更好的用户体验，运行更加流畅</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ol><li>开发成本高 (需要学习路由) <code>vue-router react-router</code></li><li><strong>不利于 SEO</strong> 搜索引擎优化 谷歌浏览器在解决这个问题 ssr:服务端渲染 server side rendering</li></ol><h2 id="路由介绍" tabindex="-1"><a class="header-anchor" href="#路由介绍" aria-hidden="true">#</a> 路由介绍</h2><ul><li><strong>路由</strong> : 是浏览器 <strong>URL 中的哈希值</strong>( # hash) 与 <strong>展示视图内容(组件)</strong> 之间的对应规则 <ul><li>简单来说,路由就是一套映射规则(一对一的对应规则), 由开发人员制定规则.-</li><li>当 URL 中的哈希值( <code>#</code> hash) 发生改变后,路由会根据制定好的<strong>规则</strong>, 展示对应的视图内容(组件)</li></ul></li><li><strong>为什么要学习路由?</strong><ul><li>渐进式 =&gt;vue =&gt; vuer-router (管理组件之间的跳转)</li><li>在 web App 中, 经常会出现通过一个页面来展示和管理整个应用的功能.</li><li>SPA 往往是功能复杂的应用,为了有效管理所有视图内容,前端路由 应运而生.</li></ul></li><li><strong>vue 中的路由</strong> : 是 <strong>hash</strong> 和 <strong>component</strong> 的对应关系, <strong>一个哈希值对应一个组件</strong></li></ul><blockquote><p>目标: 设备和ip的映射关系</p></blockquote><blockquote><p>目标: 路径和组件的映射关系</p></blockquote><h1 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> vue-router</h1><h2 id="vue-router介绍" tabindex="-1"><a class="header-anchor" href="#vue-router介绍" aria-hidden="true">#</a> vue-router介绍</h2><blockquote><p>目标: 如何在Vue项目中集成路由</p></blockquote><p>官网: https://router.vuejs.org/zh/</p><h3 id="路由-组件分类" tabindex="-1"><a class="header-anchor" href="#路由-组件分类" aria-hidden="true">#</a> 路由 - 组件分类</h3><blockquote><p>目标: .vue文件分2类, 一个是页面组件, 一个是复用组件</p></blockquote><p>.vue文件本质无区别, 方便大家学习和理解, 总结的一个经验</p><p>src/views(或pages) 文件夹 和 src/components文件夹</p><ul><li>页面组件 - 页面展示 - 配合路由用</li><li>复用组件 - 展示数据/常用于复用</li></ul><blockquote><p>总结: views下的页面组件, 配合路由切换, components下的一般引入到views下的vue中复用展示数据</p></blockquote><h2 id="vue-router使用" tabindex="-1"><a class="header-anchor" href="#vue-router使用" aria-hidden="true">#</a> vue-router使用</h2><blockquote><p>目标: 学会vue官方提供的vue-router路由系统功能模块使用</p></blockquote><p>App.vue - 页面标签和样式准备(==可复制继续写==)</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer_wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#/find<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>发现音乐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#/my<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我的音乐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#/part<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>朋友<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.footer_wrap</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.footer_wrap a</span> <span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px 0<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.footer_wrap a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.top</span> <span class="token punctuation">{</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 62px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p><a href="https://router.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">vue-router文档`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p><ul><li>安装</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> vue-router@3.5.3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>导入路由 <code>main.js</code>中</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>使用路由插件</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// 在vue中，使用使用vue的插件，都需要调用Vue.use()</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>创建路由对象</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>关联到vue实例</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>==效果：地址栏中自动增加了 #==</p><h2 id="配置路由规则" tabindex="-1"><a class="header-anchor" href="#配置路由规则" aria-hidden="true">#</a> 配置路由规则</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 4. 创建一个路由对象</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 路由的规则</span>
  <span class="token comment">// route: 一条路由规则</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 路径 锚点</span>
      <span class="token comment">// 组件</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/find&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> Find<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/my&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> My<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/friend&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> Friend<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>==必须指定路由的出口==</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;top&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 路由的出口 <span class="token operator">--</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="路由的封装" tabindex="-1"><a class="header-anchor" href="#路由的封装" aria-hidden="true">#</a> 路由的封装</h2><ul><li>新建文件<code>router/index.js</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">// 2. 导入VueRouter</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token keyword">import</span> Find <span class="token keyword">from</span> <span class="token string">&#39;../views/Find&#39;</span>
<span class="token keyword">import</span> My <span class="token keyword">from</span> <span class="token string">&#39;../views/My&#39;</span>
<span class="token keyword">import</span> Friend <span class="token keyword">from</span> <span class="token string">&#39;../views/Friend&#39;</span>

<span class="token comment">// 3. 使用vue插件  vue的插件想要生效必须调用一个方法  Vue.use(XXXX)</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>

<span class="token comment">// 4. 创建一个路由对象</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 路由的规则</span>
  <span class="token comment">// route: 一条路由规则</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 路径 锚点</span>
      <span class="token comment">// 组件</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/find&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> Find<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/my&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> My<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/friend&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> Friend<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><ul><li>main.js中</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 5. 关联路由对象和vue实例 data methods</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
  router<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">\$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="vue路由-声明式导航" tabindex="-1"><a class="header-anchor" href="#vue路由-声明式导航" aria-hidden="true">#</a> vue路由 - 声明式导航</h2><h3 id="声明式导航-基础使用" tabindex="-1"><a class="header-anchor" href="#声明式导航-基础使用" aria-hidden="true">#</a> 声明式导航 - 基础使用</h3><blockquote><p>目标: 可用全局组件router-link来替代a标签</p></blockquote><ol><li>vue-router提供了一个全局组件 router-link</li><li>router-link实质上最终会渲染成a链接 to属性等价于提供 href属性(to无需#)</li><li>router-link提供了声明式导航高亮的功能(自带类名)</li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer_wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/find<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>发现音乐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/my<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我的音乐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/part<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>朋友<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* 省略了 其他样式 */</span>
<span class="token selector">.router-link-exact-active,
.router-link-active</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #555 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><blockquote><p>总结: 链接导航, 用router-link配合to, 实现点击切换路由</p></blockquote><h3 id="导航高亮" tabindex="-1"><a class="header-anchor" href="#导航高亮" aria-hidden="true">#</a> 导航高亮</h3><blockquote><p>RouterLink会自动给当前导航添加两个类名</p></blockquote><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 
  RouterLink会自动给当前的链接添加两个类名
    router<span class="token operator">-</span>link<span class="token operator">-</span>active<span class="token operator">:</span> 激活的导航链接   模糊匹配
    router<span class="token operator">-</span>link<span class="token operator">-</span>exact<span class="token operator">-</span>active<span class="token operator">:</span>  激活的导航链接 精确匹配

    <span class="token literal-property property">exact</span><span class="token operator">:</span> 必须要精确匹配
  <span class="token operator">--</span><span class="token operator">&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RouterLink</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">exact</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">发现音乐</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RouterLink</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RouterLink</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/my<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">我的音乐</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RouterLink</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RouterLink</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/friend<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">朋友</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RouterLink</span></span><span class="token punctuation">&gt;</span></span>
      
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>可以修改默认高亮的类名</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">linkActiveClass</span><span class="token operator">:</span> <span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">linkExactActiveClass</span><span class="token operator">:</span> <span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// route: 一条规则</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="路由使用巩固-练习" tabindex="-1"><a class="header-anchor" href="#路由使用巩固-练习" aria-hidden="true">#</a> 路由使用巩固 - 练习</h3><p>目标：实现以下切换效果</p><h3 id="声明式导航-跳转传参" tabindex="-1"><a class="header-anchor" href="#声明式导航-跳转传参" aria-hidden="true">#</a> 声明式导航 - 跳转传参</h3><blockquote><p>目标: 在跳转路由时, 可以给路由对应的组件内传值</p></blockquote><p>在router-link上的to属性传值, 语法格式如下</p><ul><li><p>/path?参数名=值</p></li><li><p>/path/:id – 需要路由对象提前配置 path: “/path/参数名”</p></li></ul><p>对应页面组件接收传递过来的值</p><ul><li><p>\$route.query.参数名</p></li><li><p>\$route.params.参数名</p></li></ul><ol><li><p>创建views/Part.vue - 准备接收路由上传递的参数和值</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>关注明星<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>发现精彩<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>寻找伙伴<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>加入我们<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>人名: {{ \$route.query.name }} -- {{ \$route.params.username }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p>路由定义</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/part&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Part
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/part/:username&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 有:的路径代表要接收具体的值</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Part
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p>导航跳转, 传值给MyGoods.vue组件</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/part?name=小传<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>朋友-小传<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/part/小智<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>朋友-小智<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ol><h2 id="vue路由-重定向和模式" tabindex="-1"><a class="header-anchor" href="#vue路由-重定向和模式" aria-hidden="true">#</a> vue路由 - 重定向和模式</h2><h3 id="路由-重定向" tabindex="-1"><a class="header-anchor" href="#路由-重定向" aria-hidden="true">#</a> 路由 - 重定向</h3><blockquote><p>目标: 匹配path后, 强制切换到目标path上</p></blockquote><ul><li>网页打开url默认hash值是/路径</li><li>redirect是设置要重定向到哪个路由路径</li></ul><p>例如: 网页默认打开, 匹配路由&quot;/&quot;, 强制切换到&quot;/find&quot;上</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 默认hash值路径</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&quot;/find&quot;</span> <span class="token comment">// 重定向到/find</span>
    <span class="token comment">// 浏览器url中#后的路径被改变成/find-重新匹配数组规则</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>总结: 强制重定向后, 还会重新来数组里匹配一次规则</p></blockquote><h3 id="路由-404页面" tabindex="-1"><a class="header-anchor" href="#路由-404页面" aria-hidden="true">#</a> 路由 - 404页面</h3><blockquote><p>目标: 如果路由hash值, 没有和数组里规则匹配</p></blockquote><p>默认给一个404页面</p><p>语法: 路由最后, path匹配*(任意路径) – 前面不匹配就命中最后这个, 显示对应组件页面</p><ol><li><p>创建NotFound页面</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../assets/404.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">img</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li><li><p>在main.js - 修改路由配置</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> NotFound <span class="token keyword">from</span> <span class="token string">&#39;@/views/NotFound&#39;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// ...省略了其他配置</span>
  <span class="token comment">// 404在最后(规则是从前往后逐个比较path)</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> NotFound
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li></ol><blockquote><p>总结: 如果路由未命中任何规则, 给出一个兜底的404页面</p></blockquote><h3 id="路由-模式设置" tabindex="-1"><a class="header-anchor" href="#路由-模式设置" aria-hidden="true">#</a> 路由 - 模式设置</h3><blockquote><p>目标: 修改路由在地址栏的模式</p></blockquote><p>hash路由例如: http://localhost:8080/#/home</p><p>history路由例如: http://localhost:8080/home (以后上线需要服务器端支持)</p><p><a href="https://router.vuejs.org/zh/api/#mode" target="_blank" rel="noopener noreferrer">模式文档`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p><p>router/index.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes<span class="token punctuation">,</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;history&quot;</span> <span class="token comment">// 打包上线后需要后台支持, 模式是hash</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="vue路由-编程式导航" tabindex="-1"><a class="header-anchor" href="#vue路由-编程式导航" aria-hidden="true">#</a> vue路由 - 编程式导航</h2><blockquote><p>编程式导航用JS代码跳转</p><p>声明式导航用a标签</p></blockquote><h3 id="编程式导航-基础使用" tabindex="-1"><a class="header-anchor" href="#编程式导航-基础使用" aria-hidden="true">#</a> 编程式导航 - 基础使用</h3><blockquote><p>目标: 用JS代码来进行跳转</p></blockquote><p>语法:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>\$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;路由路径&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 都去 router/index.js定义</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;路由名&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol><li>main.js - 路由数组里, 给路由起名字</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/find&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Find&quot;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> Find
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/my&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;My&quot;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> My
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/part&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Part&quot;</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> Part
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ol start="2"><li>App.vue - 换成span 配合js的编程式导航跳转</li></ol><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer_wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn(<span class="token punctuation">&#39;</span>/find<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>Find<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>发现音乐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn(<span class="token punctuation">&#39;</span>/my<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>My<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我的音乐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn(<span class="token punctuation">&#39;</span>/part<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>Part<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>朋友<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 目标: 编程式导航 - js方式跳转路由</span>
<span class="token comment">// 语法:</span>
<span class="token comment">// this.\$router.push({path: &quot;路由路径&quot;})</span>
<span class="token comment">// this.\$router.push({name: &quot;路由名&quot;})</span>
<span class="token comment">// 注意:</span>
<span class="token comment">// 虽然用name跳转, 但是url的hash值还是切换path路径值</span>
<span class="token comment">// 场景:</span>
<span class="token comment">// 方便修改: name路由名(在页面上看不见随便定义)</span>
<span class="token comment">// path可以在url的hash值看到(尽量符合组内规范)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">btn</span><span class="token punctuation">(</span><span class="token parameter">targetPath<span class="token punctuation">,</span> targetName</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 方式1: path跳转</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>\$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// path: targetPath,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> targetName
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h3 id="编程式导航-跳转传参" tabindex="-1"><a class="header-anchor" href="#编程式导航-跳转传参" aria-hidden="true">#</a> 编程式导航 - 跳转传参</h3><blockquote><p>目标: JS跳转路由, 传参</p></blockquote><p>语法 query / params 任选 一个</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>\$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;路由路径&quot;</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;路由名&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    	<span class="token string-property property">&quot;参数名&quot;</span><span class="token operator">:</span> 值
    <span class="token punctuation">}</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token string-property property">&quot;参数名&quot;</span><span class="token operator">:</span> 值
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 对应路由接收   \$route.params.参数名   取值</span>
<span class="token comment">// 对应路由接收   \$route.query.参数名    取值</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>==格外注意: 使用path会自动忽略params==</p><p>App.vue</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer_wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn(<span class="token punctuation">&#39;</span>/find<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>Find<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>发现音乐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn(<span class="token punctuation">&#39;</span>/my<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>My<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我的音乐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>oneBtn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>朋友-小传<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>twoBtn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>朋友-小智<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 目标: 编程式导航 - 跳转路由传参</span>
<span class="token comment">// 方式1:</span>
<span class="token comment">// params =&gt; \$route.params.参数名</span>
<span class="token comment">// 方式2:</span>
<span class="token comment">// query =&gt; \$route.query.参数名</span>
<span class="token comment">// 重要: path会自动忽略params</span>
<span class="token comment">// 推荐: name+query方式传参</span>
<span class="token comment">// 注意: 如果当前url上&quot;hash值和?参数&quot;与你要跳转到的&quot;hash值和?参数&quot;一致, 爆出冗余导航的问题, 不会跳转路由</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">btn</span><span class="token punctuation">(</span><span class="token parameter">targetPath<span class="token punctuation">,</span> targetName</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 方式1: path跳转</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>\$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token comment">// path: targetPath,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> targetName
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">oneBtn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>\$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Part&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;小传&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">twoBtn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>\$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Part&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;小智&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h2 id="组件缓存-keep-alive" tabindex="-1"><a class="header-anchor" href="#组件缓存-keep-alive" aria-hidden="true">#</a> 组件缓存 keep-alive</h2><h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h3><p>思考：从面经 点到 收藏，又点回 面经，面经的数据需要重新加载么？不需要，希望缓存下来！</p><p>如果希望组件被缓存下来，可以在外面包一个 keep-alive 组件 ~</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20220613022957478" originSrc="images/image-20220613022957478.png" data="aurora"></p><p><code>src/views/Layout.vue</code></p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h5-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabbar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/article<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">面经</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/collect<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">收藏</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/like<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">喜欢</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/user<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">我的</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="keep-alive对应的两个钩子" tabindex="-1"><a class="header-anchor" href="#keep-alive对应的两个钩子" aria-hidden="true">#</a> keep-alive对应的两个钩子</h3><p>当组件被keep-alive管理时，会多出两个生命周期钩子，activated / deactivated</p><p><code>src/views/Article.vue</code></p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ArticlePage&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">articles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>
      <span class="token string">&#39;https://mock.boxuegu.com/mock/3083/articles&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>articles <span class="token operator">=</span> data<span class="token punctuation">.</span>result<span class="token punctuation">.</span>rows<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>articles<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">activated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;缓存组件被激活&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">deactivated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;缓存组件被隐藏&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/Vue/生命周期+路由+组件缓存.html.vue?vue&type=template&id=d0966568

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/Vue/生命周期+路由+组件缓存.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const _html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=811.app.js.map