"use strict";
exports.id = 399;
exports.ids = [399];
exports.modules = {

/***/ 1177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1054ac98",
  "path": "/Vue/%E7%BB%84%E4%BB%B6%E5%9F%BA%E7%A1%80+%E7%BB%84%E4%BB%B6%E9%80%9A%E8%AE%AF.html",
  "title": "组件化开发",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "什么是组件化开发",
      "slug": "什么是组件化开发",
      "children": []
    },
    {
      "level": 2,
      "title": "组件的注册",
      "slug": "组件的注册",
      "children": [
        {
          "level": 3,
          "title": "局部注册",
          "slug": "局部注册",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "全局注册组件",
      "slug": "全局注册组件",
      "children": [
        {
          "level": 3,
          "title": "组件名的大小写",
          "slug": "组件名的大小写",
          "children": []
        },
        {
          "level": 3,
          "title": "通过 name 注册组件 (了解)",
          "slug": "通过-name-注册组件-了解",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "组件的样式冲突  scoped",
      "slug": "组件的样式冲突-scoped",
      "children": []
    },
    {
      "level": 2,
      "title": "组件通信 - 父传子 props 传值",
      "slug": "组件通信-父传子-props-传值",
      "children": []
    },
    {
      "level": 2,
      "title": "v-for 遍历展示组件练习",
      "slug": "v-for-遍历展示组件练习",
      "children": []
    },
    {
      "level": 2,
      "title": "单向数据流",
      "slug": "单向数据流",
      "children": []
    },
    {
      "level": 2,
      "title": "组件通信 - 子传父",
      "slug": "组件通信-子传父",
      "children": []
    },
    {
      "level": 2,
      "title": "props 校验",
      "slug": "props-校验",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 7488:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/Vue/组件基础+组件通讯.html.vue?vue&type=template&id=6181d99b



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = (0,external_vue_.resolveComponent)("ExternalLinkIcon")

  _push(`<!--[--><h1 id="组件化开发" tabindex="-1"><a class="header-anchor" href="#组件化开发" aria-hidden="true">#</a> 组件化开发</h1><h2 id="什么是组件化开发" tabindex="-1"><a class="header-anchor" href="#什么是组件化开发" aria-hidden="true">#</a> 什么是组件化开发</h2><p><strong>组件化开发</strong> 指的是：根据封装的思想，把页面上 <code>可重用的部分</code> 封装为 <code>组件</code>，从而方便项目的 开发 和 维护。</p><p><strong>一个页面， 可以拆分成一个个组件，一个组件就是一个整体, 每个组件可以有自己独立的 结构 样式 和 行为</strong></p><p>例如：http://www.ibootstrap.cn/ 所展示的效果，就契合了组件化开发的思想。</p><p>用户可以通过拖拽组件的方式，快速生成一个页面的布局结构。</p><p>前端组件化开发的好处主要体现在以下两方面：</p><ul><li><p>提高了前端代码的<strong>复用性和灵活性</strong></p></li><li><p>提升了开发效率和后期的<strong>可维护性</strong></p></li></ul><p>vue 是一个完全支持组件化开发的框架。vue 中规定组件的后缀名是 <code>.vue</code>。</p><h2 id="组件的注册" tabindex="-1"><a class="header-anchor" href="#组件的注册" aria-hidden="true">#</a> 组件的注册</h2><p>刚才我们创建使用的是 App.vue 根组件, 这个比较特殊, 是最大的一个根组件</p><p>而App.vue根组件内, 还可以写入一些小组件, 而这些组件, 要使用, 就需要先注册!</p><p><strong>注册组件有两种注册方式</strong>: 分为“全局注册”和“局部注册”两种</p><ul><li>被全局注册的组件，可以在任意的组件模板范围中使用 通过<code>Vue.component()</code></li><li>被局部注册的组件，只能在当前注册的组件模板范围内使用 通过<code>components</code></li></ul><h3 id="局部注册" tabindex="-1"><a class="header-anchor" href="#局部注册" aria-hidden="true">#</a> 局部注册</h3><ul><li>把独立的组件封装一个<code>.vue文件中</code>，推荐放到<code>components</code>文件夹</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>components
  <span class="token operator">--</span> HmHeader<span class="token punctuation">.</span>vue
  <span class="token operator">--</span> HmContent<span class="token punctuation">.</span>vue
  <span class="token operator">--</span> HmFooter<span class="token punctuation">.</span>vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>通过组件的<code>components</code>配置 局部注册组件</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> HmHeader <span class="token keyword">from</span> <span class="token string">&#39;./components/HmHeader&#39;</span>
<span class="token keyword">import</span> HmContent <span class="token keyword">from</span> <span class="token string">&#39;./components/HmContent&#39;</span>
<span class="token keyword">import</span> HmFooter <span class="token keyword">from</span> <span class="token string">&#39;./components/HmFooter&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// data methods filters computed watch</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 组件名: 组件</span>
    <span class="token comment">// 组件名：注意，不能和html内置的标签重名</span>
    <span class="token comment">// 使用的时候：直接通过组件名去使用</span>
    <span class="token comment">// HmHeader  HmHeader  hm-header</span>
    HmHeader<span class="token punctuation">,</span>
    HmContent<span class="token punctuation">,</span>
    HmFooter
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>==注意点：注册的组件的名字不能和HTML内置的标签重名==</p><ul><li>可以在模板中使用组件，，，，使用组件和使用html的标签是一样的，，，可以多次使用</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    &lt;!-- 组件注册好了，就跟使用html标签一样了 --&gt;
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hm-header</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hm-header</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hm-content</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hm-content</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hm-footer</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hm-footer</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>==局部注册的组件只能在当前组件中使用==</p><h2 id="全局注册组件" tabindex="-1"><a class="header-anchor" href="#全局注册组件" aria-hidden="true">#</a> 全局注册组件</h2><ul><li>在<code>components</code>文件夹中创建一些新的组件</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>components
  <span class="token operator">--</span> HmHeader<span class="token punctuation">.</span>vue
  <span class="token operator">--</span> HmContent<span class="token punctuation">.</span>vue
  <span class="token operator">--</span> HmFooter<span class="token punctuation">.</span>vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>在<code>main.js</code>中通过<code>Vue.component()</code>全局注册组件</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> HmHeader <span class="token keyword">from</span> <span class="token string">&#39;./components/HmHeader&#39;</span>
<span class="token keyword">import</span> HmContent <span class="token keyword">from</span> <span class="token string">&#39;./components/HmContent&#39;</span>
<span class="token keyword">import</span> HmFooter <span class="token keyword">from</span> <span class="token string">&#39;./components/HmFooter&#39;</span>

<span class="token comment">// 全局注册</span>
<span class="token comment">// Vue.component(名字, 组件)</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;HmHeader&#39;</span><span class="token punctuation">,</span> HmHeader<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;HmContent&#39;</span><span class="token punctuation">,</span> HmContent<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;HmFooter&#39;</span><span class="token punctuation">,</span> HmFooter<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>使用</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    &lt;!-- 组件注册好了，就跟使用html标签一样了 --&gt;
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hm-header</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hm-header</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hm-content</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hm-content</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hm-footer</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hm-footer</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>==注意：全局注册的组件 可以在任意的组件中去使用==</p><h3 id="组件名的大小写" tabindex="-1"><a class="header-anchor" href="#组件名的大小写" aria-hidden="true">#</a> 组件名的大小写</h3><p>在进行组件的注册时，定义组件名的方式有两种：</p><ul><li><p>注册使用短横线命名法，例如 hm-header 和 hm-main</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;hm-button&#39;</span><span class="token punctuation">,</span> HmButton<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>使用时 <code>&lt;hm-button&gt; &lt;/hm-button&gt;</code></p></li><li><p>注册使用大驼峰命名法，例如 HmHeader 和 HmMain</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;HmButton&#39;</span><span class="token punctuation">,</span> HmButton<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>使用时 <code>&lt;HmButton&gt; &lt;/HmButton&gt;</code> 和 <code>&lt;hm-button&gt; &lt;/hm-button&gt;</code> 都可以</p></li></ul><p>推荐定义组件名时, 用大驼峰命名法, 更加方便</p><p>全局注册</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;HmButton&#39;</span><span class="token punctuation">,</span> HmButton<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>局部注册:</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  HmHeader<span class="token punctuation">,</span>
  HmMain<span class="token punctuation">,</span>
  HmFooter
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>使用时, 推荐遵循html5规范, 小写横杠隔开</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hm-header</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hm-header</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hm-main</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hm-main</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hm-footer</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hm-footer</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="通过-name-注册组件-了解" tabindex="-1"><a class="header-anchor" href="#通过-name-注册组件-了解" aria-hidden="true">#</a> 通过 name 注册组件 (了解)</h3><blockquote><p>组件在开发者工具中显示的名字可以通过name进行修改</p></blockquote><p>在注册组件期间，除了可以直接提供组件的注册名称之外，还可以把组件的 name 属性作为注册后组件的名称</p><p>组件内容:</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">按钮组件</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
export default {
  name: &#39;HmButton&#39;
}
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
button {
  width: 80px;
  height: 50px;
  border-radius: 5px;
  background-color: pink;
}
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>进行注册:</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> HmButton <span class="token keyword">from</span> <span class="token string">&#39;./components/hm-button.vue&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>HmButton<span class="token punctuation">.</span>name<span class="token punctuation">,</span> HmButton<span class="token punctuation">)</span>  <span class="token comment">// 等价于 app.component(&#39;HmButton&#39;, HmButton)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="组件的样式冲突-scoped" tabindex="-1"><a class="header-anchor" href="#组件的样式冲突-scoped" aria-hidden="true">#</a> 组件的样式冲突 <code>scoped</code></h2><p>默认情况下，写在组件中的样式会<code>全局生效</code>，因此很容易造成多个组件之间的样式冲突问题。</p><p>组件样式默认会作用到全局, 就会影响到整个 index.html 中的 dom 元素</p><ul><li><p><code>全局样式</code>: 默认组件中的样式会作用到全局</p></li><li><p><code>局部样式</code>: 可以给组件加上 scoped 属性, 可以让样式只作用于当前组件</p></li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
div {
  background-color: pink;
}
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>原理:</p><ol><li><p>添加scoped后, 会给当前组件中所有元素, 添加上一个自定义属性</p></li><li><p>添加scoped后, 每个style样式, 也会加上对应的属性选择器</p></li></ol><p>最终效果: 必须是当前组件的元素, 才会有这个自定义属性, 才会被这个样式作用到</p><h1 id="组件通信" tabindex="-1"><a class="header-anchor" href="#组件通信" aria-hidden="true">#</a> 组件通信</h1><p>每个组件都有自己的数据, 提供在data中, 每个组件的数据是独立的, 组件数据无法互相直接访问 (合理的)</p><p>但是如果需要跨组件访问数据, 就需要用到组件通信</p><p>组件通信的方式有很多: 现在先关注两种, 父传子 子传父</p><h2 id="组件通信-父传子-props-传值" tabindex="-1"><a class="header-anchor" href="#组件通信-父传子-props-传值" aria-hidden="true">#</a> 组件通信 - 父传子 props 传值</h2><p>语法:</p><ol><li>父组件通过给子组件加属性传值</li></ol><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Son</span></span> <span class="token attr-name">price</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>不错<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:info</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Son</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>子组件中, 通过props属性接收</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>需求: 封装一个商品组件 my-product</strong></p><p><code>my-product.vue</code></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-product<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>标题: {{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>价格: {{ price }}元<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ info }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.my-product</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #000<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="v-for-遍历展示组件练习" tabindex="-1"><a class="header-anchor" href="#v-for-遍历展示组件练习" aria-hidden="true">#</a> v-for 遍历展示组件练习</h2><p><strong>需求: 遍历展示商品列表</strong></p><p>假定, 发送请求回来的商品数据,</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">proname</span><span class="token operator">:</span> <span class="token string">&#39;超级好吃的棒棒糖&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">proprice</span><span class="token operator">:</span> <span class="token number">18.8</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">proname</span><span class="token operator">:</span> <span class="token string">&#39;超级好吃的大鸡腿&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">proprice</span><span class="token operator">:</span> <span class="token number">34.2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">proname</span><span class="token operator">:</span> <span class="token string">&#39;超级无敌的冰激凌&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">proprice</span><span class="token operator">:</span> <span class="token number">14.2</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>v-for 遍历展示</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">我是app组件的内容</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-product</span> 
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">:price</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.proprice<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.proname<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">:info</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-product</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="单向数据流" tabindex="-1"><a class="header-anchor" href="#单向数据流" aria-hidden="true">#</a> 单向数据流</h2><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">/* 
  在vue中需要遵循单向数据流原则
  1. 父组件的数据发生了改变，子组件会自动跟着变
  2. 子组件不能直接修改父组件传递过来的props  props是只读的
*/</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>==如果父组件传给子组件的是一个对象，子组件修改对象的属性，是不会报错的，，，，也应该避免==</p><h2 id="组件通信-子传父" tabindex="-1"><a class="header-anchor" href="#组件通信-子传父" aria-hidden="true">#</a> 组件通信 - 子传父</h2><p><strong>需求: 砍价</strong></p><ol><li><p>子组件可以通过 <code>this.\$emit(&#39;事件名&#39;, 参数1, 参数2, ...)</code> 触发事件的同时传参的</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">\$emit</span><span class="token punctuation">(</span><span class="token string">&#39;sayPrice&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>父组件给子组件注册一个自定义事件</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token operator">&lt;</span>my<span class="token operator">-</span>product 
  <span class="token operator">...</span>
  @sayPrice<span class="token operator">=</span><span class="token string">&quot;sayPrice&quot;</span><span class="token operator">&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-product</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>父组件并提供对应的函数接收参数</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">sayPrice</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ol><h2 id="props-校验" tabindex="-1"><a class="header-anchor" href="#props-校验" aria-hidden="true">#</a> props 校验</h2><p><strong>props 是父传子, 传递给子组件的数据, 为了提高 子组件被使用时 的稳定性, 可以进行props校验</strong>, 验证传递的数据是否符合要求</p><p>默认的数组形式, 不会进行校验, 如果希望校验, 需要提供对象形式的 props</p><p>风格指南：https://cn.vuejs.org/v2/style-guide/#Prop-%E5%AE%9A%E4%B9%89%E5%BF%85%E8%A6%81</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>props 提供了多种数据验证方案，例如：</p><ul><li>基础的类型检查 Number</li><li>多个可能的类型 [String, Number]</li><li>必填项校验 required: true</li><li>默认值 default: 100</li><li>自定义验证函数</li></ul><p>官网语法: <a href="https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81" target="_blank" rel="noopener noreferrer">地址`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 基础的类型检查</span>
    <span class="token literal-property property">propA</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token comment">// 多个可能的类型</span>
    <span class="token literal-property property">propB</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 必填的字符串</span>
    <span class="token literal-property property">propC</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 带有默认值的数字</span>
    <span class="token literal-property property">propD</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">100</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// -------------------------------------------------------------------------</span>
    <span class="token comment">// 自定义验证函数</span>
    <span class="token literal-property property">propF</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这个值必须匹配下列字符串中的一个</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;danger&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/Vue/组件基础+组件通讯.html.vue?vue&type=template&id=6181d99b

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/Vue/组件基础+组件通讯.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const _html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=399.app.js.map