"use strict";
exports.id = 720;
exports.ids = [720];
exports.modules = {

/***/ 1577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-7e7a417e",
  "path": "/Vue/%E6%8C%87%E4%BB%A4%E4%B8%8B+%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7+%E4%BE%A6%E5%90%AC%E5%99%A8.html",
  "title": "vue指令（下）",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "v-for",
      "slug": "v-for",
      "children": [
        {
          "level": 3,
          "title": "基本使用",
          "slug": "基本使用",
          "children": []
        },
        {
          "level": 3,
          "title": "虚拟DOM 和 diff算法",
          "slug": "虚拟dom-和-diff算法",
          "children": []
        },
        {
          "level": 3,
          "title": "v-for 的key的说明",
          "slug": "v-for-的key的说明",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "样式处理",
      "slug": "样式处理",
      "children": [
        {
          "level": 3,
          "title": "v-bind 对于class的增强",
          "slug": "v-bind-对于class的增强",
          "children": []
        },
        {
          "level": 3,
          "title": "v-bind对于style 的增强",
          "slug": "v-bind对于style-的增强",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "基本使用",
      "slug": "基本使用-1",
      "children": []
    },
    {
      "level": 2,
      "title": "计算属性的缓存的问题",
      "slug": "计算属性的缓存的问题",
      "children": []
    },
    {
      "level": 2,
      "title": "计算属性的完整写法",
      "slug": "计算属性的完整写法",
      "children": []
    },
    {
      "level": 2,
      "title": "基本使用",
      "slug": "基本使用-2",
      "children": []
    },
    {
      "level": 2,
      "title": "复杂类型的监听-监听的完整写法",
      "slug": "复杂类型的监听-监听的完整写法",
      "children": []
    },
    {
      "level": 2,
      "title": "成绩案例-监听数据进行缓存",
      "slug": "成绩案例-监听数据进行缓存",
      "children": []
    },
    {
      "level": 2,
      "title": "配置步骤 （两步）",
      "slug": "配置步骤-两步",
      "children": []
    }
  ],
  "git": {}
}


/***/ }),

/***/ 9596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/Vue/指令下+计算属性+侦听器.html.vue?vue&type=template&id=ad0043de

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="vue指令-下" tabindex="-1"><a class="header-anchor" href="#vue指令-下" aria-hidden="true">#</a> vue指令（下）</h1><h2 id="v-for" tabindex="-1"><a class="header-anchor" href="#v-for" aria-hidden="true">#</a> v-for</h2><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3><p>v-for 作用: 遍历对象和数组</p><ol><li>遍历数组 (常用)</li></ol><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;item in 数组名&quot;</span>  item每一项
v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(item, index) in 数组名&quot;</span>  item每一项 index下标

注意：item和index不是定死的，可以是任意的名字，但是需要注意 第一项是值  第二项是下标
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2"><li>遍历对象 (一般不用)</li></ol><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>
  v<span class="token operator">-</span><span class="token keyword">for</span>也可以遍历对象（不常用）
  v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(值, 键) in 对象&quot;</span>
<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value in user<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(value, key) in user<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>key<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text"> ---</span><span class="token punctuation">{</span><span class="token punctuation">{</span>key<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="3"><li>遍历数字</li></ol><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 
  遍历数字
  语法： v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(item, index) in 数字&quot;</span>
  作用：遍历具体的次数 item从<span class="token number">1</span>开始  index下标从<span class="token number">0</span>开始的
<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in 10<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text"> ---</span><span class="token punctuation">{</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="虚拟dom-和-diff算法" tabindex="-1"><a class="header-anchor" href="#虚拟dom-和-diff算法" aria-hidden="true">#</a> 虚拟DOM 和 diff算法</h3><p>**vue就地复用策略：**Vue会尽可能的就地（同层级，同位置），对比虚拟dom，复用旧dom结构，进行差异化更新。</p><p><strong>虚拟dom</strong>: 本质就是一个个保存节点信息, 属性和内容的 描述真实dom的 JS 对象</p><p><strong>diff算法：</strong></p><ul><li><p>策略1：</p><p>先同层级根元素比较，如果根元素变化，那么不考虑复用，整个dom树删除重建</p><p>先同层级根元素比较，如果根元素不变，对比出属性的变化更新，并考虑往下递归复用。</p></li><li><p>策略2：</p><p>对比同级兄弟元素时，默认按照<strong>下标</strong>进行对比复用。</p><p>对比同级兄弟元素时，如果指定了 key，就会 <strong>按照相同 key 的元素</strong> 来进行对比。</p></li></ul><h3 id="v-for-的key的说明" tabindex="-1"><a class="header-anchor" href="#v-for-的key的说明" aria-hidden="true">#</a> v-for 的key的说明</h3><ol><li><p>设置 和 不设置 key 有什么区别？</p><ul><li>不设置 key， 默认同级兄弟元素按照下标进行比较。</li><li>设置了key，按照相同key的新旧元素比较。</li></ul></li><li><p>key值要求是?</p><ul><li>字符串或者数值，唯一不重复</li><li>有 id 用 id, 有唯一值用唯一值，实在都没有，才用索引</li></ul></li><li><p>key的好处?</p><p>key的作用：提高虚拟DOM的对比复用性能</p></li></ol><p>以后：只要是写到列表渲染，都推荐加上 key 属性。且 key 推荐是设置成 id， 实在没有，就设置成 index</p><h2 id="样式处理" tabindex="-1"><a class="header-anchor" href="#样式处理" aria-hidden="true">#</a> 样式处理</h2><h3 id="v-bind-对于class的增强" tabindex="-1"><a class="header-anchor" href="#v-bind-对于class的增强" aria-hidden="true">#</a> v-bind 对于class的增强</h3><p>v-bind 对于类名操作的增强, 注意点, :class 不会影响到原来的 class 属性</p><p>:class=&quot;对象/数组&quot;</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    &lt;!-- 
      v-bind： 作用：设置动态属性
      v-bind针对 class和style 进行增强
      允许使用对象或者数组
        对象：如果键值对的值为true，那么就有这个，否则没有这个类
        数组：数组中所有的类都会添加到盒子上
    --&gt;
    &lt;!-- </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isRed ? <span class="token punctuation">&#39;</span>red<span class="token punctuation">&#39;</span>: <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">123</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> --&gt;
    &lt;!-- </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{red: isRed, pink: isPink}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">123</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> --&gt;
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>arr<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">123</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="v-bind对于style-的增强" tabindex="-1"><a class="header-anchor" href="#v-bind对于style-的增强" aria-hidden="true">#</a> v-bind对于style 的增强</h3><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    &lt;!-- 
      :style也可以使用对象或者数组
     --&gt;
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[styleObj1, styleObj2]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">123</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h1 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性" aria-hidden="true">#</a> 计算属性</h1><h2 id="基本使用-1" tabindex="-1"><a class="header-anchor" href="#基本使用-1" aria-hidden="true">#</a> 基本使用</h2><p>需求：翻转字符串案例</p><blockquote><p>计算属性是一个属性，写法上是一个函数，这个函数的返回值就是计算属性最终的值。</p></blockquote><blockquote><ol><li>计算属性必须定义在 computed 节点中</li></ol></blockquote><blockquote><ol start="2"><li>计算属性必须是一个 function,计算属性必须有返回值</li></ol></blockquote><blockquote><ol start="3"><li>计算属性不能被当作方法调用,当成属性来用</li></ol></blockquote><p>定义计算属性</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// 组件的数据： 需要计算的属性</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">reverseMsg</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>使用计算属性</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token punctuation">{</span> reverseMsg <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="计算属性的缓存的问题" tabindex="-1"><a class="header-anchor" href="#计算属性的缓存的问题" aria-hidden="true">#</a> 计算属性的缓存的问题</h2><p>计算属性： 缓存</p><p>计算属性只要计算了一次，就会把结果缓存起来，以后多次使用计算属性，直接使用缓存的结果，只会计算一次。</p><p>计算属性依赖的属性一旦发生了改变，计算属性会重新计算一次，并且缓存</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// 计算属性只要计算了一次，就会把结果缓存起来，以后多次使用计算属性，直接使用缓存的结果，只会计算一次。</span>
<span class="token comment">// 计算属性依赖的属性一旦发生了改变，计算属性会重新计算一次，并且缓存</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">reverseMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我执行了&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="计算属性的完整写法" tabindex="-1"><a class="header-anchor" href="#计算属性的完整写法" aria-hidden="true">#</a> 计算属性的完整写法</h2><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// 1. 计算属性默认情况下只能获取，不能修改。</span>
<span class="token comment">// 2. 计算属性的完整写法</span>
<span class="token comment">/* 
  computed: {
    full() {},
    full: {
      get() {
        return this.first + &#39; &#39; + this.last
      },
      set(value) {

      }
    }
  }
*/</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">full</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h1 id="属性监听" tabindex="-1"><a class="header-anchor" href="#属性监听" aria-hidden="true">#</a> 属性监听</h1><h2 id="基本使用-2" tabindex="-1"><a class="header-anchor" href="#基本使用-2" aria-hidden="true">#</a> 基本使用</h2><p>当需要监听某个数据是否发生改变，就要用到watch</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">/* 
  watch: {
    // 只要属性发生了改变，这个函数就会执行
    属性: function () {

    }
  }
*/</span>
<span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 参数1： value    变化后的值</span>
  <span class="token comment">// 参数2： oldValue 变化前的值</span>
  <span class="token function">msg</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;你变了&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="复杂类型的监听-监听的完整写法" tabindex="-1"><a class="header-anchor" href="#复杂类型的监听-监听的完整写法" aria-hidden="true">#</a> 复杂类型的监听-监听的完整写法</h2><blockquote><p>如果监听的是复杂数据类型，需要深度监听，需要指定deep为true,需要用到监听的完整的写法</p></blockquote><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token comment">// 1. 默认情况下，watch只能监听到简单类型的数据变化,如果监听的是复杂类型，只会监听地址是否发生改变，不会监听对象内部属性的变化。</span>
<span class="token comment">// 2. 需要使用监听的完整写法 是一个对象</span>
<span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// friend (value) {</span>
  <span class="token comment">//   console.log(&#39;你变了&#39;, value)</span>
  <span class="token comment">// }</span>
  <span class="token literal-property property">friend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// handler 数据发生变化，需要执行的处理程序</span>
    <span class="token comment">// deep: true  如果true,代表深度监听，不仅会监听地址的变化，还会监听对象内部属性的变化</span>
    <span class="token comment">// immediate: 立即 立刻  是否立即监听 默认是false  如果是true,代表页面一加载，会先执行一次处理程序</span>
    <span class="token function">handler</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;你变了&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="成绩案例-监听数据进行缓存" tabindex="-1"><a class="header-anchor" href="#成绩案例-监听数据进行缓存" aria-hidden="true">#</a> 成绩案例-监听数据进行缓存</h2><ul><li>监听list的变化</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;score-case&#39;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>获取list数据的时候不能写死，从localStorage中获取</li></ul><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;score-case&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h1 id="vscode断点调试" tabindex="-1"><a class="header-anchor" href="#vscode断点调试" aria-hidden="true">#</a> vscode断点调试</h1><p>前言：作为前端开发，我们经常会遇到代码错误，需要进行调试</p><p>常见的调试方案：</p><ul><li>不调试，直接看代码找问题</li><li>console.log 打印日志</li><li><strong>用 VSCode 的 debugger 来调试</strong> （<strong>断点调试</strong>）</li></ul><p>前两种，适合找一些简易的错误，如果短时间错误没有排查出来，建议使用 <strong>vscode断点调试</strong>。</p><h2 id="配置步骤-两步" tabindex="-1"><a class="header-anchor" href="#配置步骤-两步" aria-hidden="true">#</a> 配置步骤 （两步）</h2><ol><li><p>新建 <code>.vscode</code> 目录, <code>launch.json</code> 文件， 填入配置内容</p><p>注意：<code>端口号</code> 需要和 启动服务器 <code>端口号</code> 统一</p></li></ol><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Launch Chrome&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pwa-chrome&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8080&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;sourceMapPathOverrides&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;webpack://src/*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceFolder}/src/*&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="2"><li><code>vue.config.js</code> 填入配置内容</li></ol><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vue/cli-service&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">transpileDependencies</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// -----------------------------------------------------------</span>
  <span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置断点调试，实际上线时，可删除</span>
    config<span class="token punctuation">.</span>output<span class="token punctuation">.</span><span class="token function-variable function">devtoolModuleFilenameTemplate</span> <span class="token operator">=</span> <span class="token parameter">info</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> resPath <span class="token operator">=</span> info<span class="token punctuation">.</span>resourcePath
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">webpack://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>resPath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// -----------------------------------------------------------</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/Vue/指令下+计算属性+侦听器.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const _html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=720.app.js.map