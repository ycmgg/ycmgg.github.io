"use strict";
exports.id = 717;
exports.ids = [717];
exports.modules = {

/***/ 9234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-ef444906",
  "path": "/Git/git.html",
  "title": "Git",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "git基础入门",
      "slug": "git基础入门",
      "children": [
        {
          "level": 3,
          "title": "git的安装",
          "slug": "git的安装",
          "children": []
        },
        {
          "level": 3,
          "title": "git三个区",
          "slug": "git三个区",
          "children": []
        },
        {
          "level": 3,
          "title": "git基本命令",
          "slug": "git基本命令",
          "children": []
        },
        {
          "level": 3,
          "title": "git重置",
          "slug": "git重置",
          "children": []
        },
        {
          "level": 3,
          "title": "git忽视文件",
          "slug": "git忽视文件",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "git分支操作",
      "slug": "git分支操作",
      "children": [
        {
          "level": 3,
          "title": "为什么要有分支？",
          "slug": "为什么要有分支",
          "children": []
        },
        {
          "level": 3,
          "title": "git分支命令",
          "slug": "git分支命令",
          "children": []
        },
        {
          "level": 3,
          "title": "git合并冲突",
          "slug": "git合并冲突",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "git远程仓库",
      "slug": "git远程仓库",
      "children": [
        {
          "level": 3,
          "title": "github、gitee、gitlab",
          "slug": "github、gitee、gitlab",
          "children": []
        },
        {
          "level": 3,
          "title": "码云创建远程仓库",
          "slug": "码云创建远程仓库",
          "children": []
        },
        {
          "level": 3,
          "title": "SSH免密码登陆",
          "slug": "ssh免密码登陆",
          "children": []
        },
        {
          "level": 3,
          "title": "SSH免密码登录配置",
          "slug": "ssh免密码登录配置",
          "children": []
        },
        {
          "level": 3,
          "title": "git push",
          "slug": "git-push",
          "children": []
        },
        {
          "level": 3,
          "title": "git remote",
          "slug": "git-remote",
          "children": []
        },
        {
          "level": 3,
          "title": "git clone",
          "slug": "git-clone",
          "children": []
        },
        {
          "level": 3,
          "title": "git pull",
          "slug": "git-pull",
          "children": []
        },
        {
          "level": 3,
          "title": "下载远端分支本地",
          "slug": "下载远端分支本地",
          "children": []
        }
      ]
    }
  ],
  "git": {}
}


/***/ }),

/***/ 9054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ git_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/.temp/pages/Git/git.html.vue?vue&type=template&id=3248efe4



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = (0,external_vue_.resolveComponent)("ExternalLinkIcon")

  _push(`<!--[--><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><h2 id="git基础入门" tabindex="-1"><a class="header-anchor" href="#git基础入门" aria-hidden="true">#</a> git基础入门</h2><blockquote><p>Git是一款免费、开源的<strong>分布式</strong> <strong>版本控制系统</strong> ，用于敏捷高效地处理任何或小或大的项目。</p></blockquote><blockquote><p>Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。</p></blockquote><h3 id="git的安装" tabindex="-1"><a class="header-anchor" href="#git的安装" aria-hidden="true">#</a> git的安装</h3><p><a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer">下载地址`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></p><p>注意：</p><ol><li>不要安装在中文目录</li><li>不要使用桌面管理软件</li></ol><p>安装很简单，一直下一步即可。在任意的目录下右键，能看到菜单, 就表示安装成功了。</p><h3 id="git三个区" tabindex="-1"><a class="header-anchor" href="#git三个区" aria-hidden="true">#</a> git三个区</h3><p>要对某个项目使用git进行管理，需要使用<code>git init</code>命令初始化git仓库 <code>git init</code>会在当前目录生成一个隐藏文件夹 .git 不要去修改这个文件夹下的任意东西。</p><p>git仓库会分成三个区</p><p>工作区：我们书写代码的地方，工作的目录就叫工作区。</p><p>暂存区：暂时存储的区域，在git中，代码无法直接从工作区提交到仓库区，而是需要先从工作区添加到暂存区，然后才能从暂存区提交到仓库区。暂存区的目的是避免误操作。</p><p>本地仓库区：将保存在暂存区域的内容永久转储到 Git 仓库中，生成版本号。生成版本号之后，就可以任何的回退到某一个具体的版本。</p><h3 id="git基本命令" tabindex="-1"><a class="header-anchor" href="#git基本命令" aria-hidden="true">#</a> git基本命令</h3><h4 id="git-init" tabindex="-1"><a class="header-anchor" href="#git-init" aria-hidden="true">#</a> git init</h4><ul><li>作用：初始化git仓库，想要使用git对某个项目进行管理，需要<code>git init</code>进行初始化</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 初始化仓库， 在当前目录下生成一个隐藏文件夹.git</span>
<span class="token function">git</span> init
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="git-add" tabindex="-1"><a class="header-anchor" href="#git-add" aria-hidden="true">#</a> git add</h4><ul><li>作用：将文件由 <code>工作区</code> 添加到 <code>暂存区</code>，在git中，文件无法直接从工作区直接添加到仓库区，必须先从工作区添加到暂存区，再从暂存区添加到仓库区。</li><li>命令：<code>git add 文件名/目录名</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 将index.html添加到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> index.html

<span class="token comment"># 将css目录下所有的文件添加到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> css

<span class="token comment"># 将当前目录下所有的js文件添加到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> *.js

<span class="token comment"># 添加当前目录下所有的文件</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> <span class="token function">add</span> -A
<span class="token function">git</span> <span class="token function">add</span> --all
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="git-commit" tabindex="-1"><a class="header-anchor" href="#git-commit" aria-hidden="true">#</a> git commit</h4><p>作用：将文件由 暂存区 添加到 仓库区，生成版本号</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 将文件从暂存区提交到仓库</span>
<span class="token function">git</span> commit -m <span class="token string">&quot;提交说明&quot;</span>

<span class="token comment"># 如果是一个已经暂存过的文件，可以快速提交，如果是未追踪的文件，那么命令将不生效。</span>
<span class="token function">git</span> commit -a -m <span class="token string">&#39;提交说明&#39;</span>

<span class="token comment"># 修改最近的一次提交说明， 如果提交说明不小心输错了，可以使用这个命令</span>
<span class="token function">git</span> commit --amend -m <span class="token string">&quot;提交说明&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="git-config配置" tabindex="-1"><a class="header-anchor" href="#git-config配置" aria-hidden="true">#</a> git config配置</h4><p>如果是第一次提交，需要配置提交者信息，推荐和公司邮箱一致（可以用QQ邮箱）</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code># git config  user.name 你的目标用户名
# git config  user.email 你的目标邮箱名

# 使用--global参数，配置全局的用户名和邮箱，只需要配置一次即可
git config  --global user.name jepson
git config  --global user.email jepsonpp@qq.com

# 查看配置信息
git config --list

# 取消配置
git config --unset --global user.name
git config --unset --global user.email 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="git-status" tabindex="-1"><a class="header-anchor" href="#git-status" aria-hidden="true">#</a> git status</h4><ul><li><p>作用：查看文件的状态</p></li><li><p>命令：<code>git status</code></p><ul><li>红色表示工作区中的文件需要提交</li><li>绿色表示暂存区中的文件需要提交</li></ul></li><li><p>命令：<code>git stauts -s</code> 简化日志输出格式</p></li></ul><h4 id="git-log" tabindex="-1"><a class="header-anchor" href="#git-log" aria-hidden="true">#</a> git log</h4><ul><li>作用：查看提交日志</li><li><code>git log</code> 查看提交的日志</li><li><code>git log --oneline</code> 简洁的日志信息</li></ul><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="" originSrc="./assets/git01.png" data="aurora"></p><h3 id="git重置" tabindex="-1"><a class="header-anchor" href="#git重置" aria-hidden="true">#</a> git重置</h3><h4 id="git-reset" tabindex="-1"><a class="header-anchor" href="#git-reset" aria-hidden="true">#</a> git reset</h4><ul><li><p>作用：版本回退，将代码恢复到已经提交的某一个版本中。</p></li><li><p><code>git reset --hard 版本号</code> 将代码回退到某个指定的版本(版本号只要有前几位即可)</p></li><li><p><code>git reset --hard head~1</code>将版本回退到上一次提交</p><ul><li>~1:上一次提交</li><li>~2:上上次提交</li><li>~0:当前提交</li></ul></li><li><p>当使用了<code>git reset</code>命令后，版本会回退，使用<code>git log</code>只能看到当前版本之前的信息。使用<code>git reflog</code>可以查看所有的版本信息</p></li></ul><h3 id="git忽视文件" tabindex="-1"><a class="header-anchor" href="#git忽视文件" aria-hidden="true">#</a> git忽视文件</h3><blockquote><p>在仓库中，有些文件是不想被git管理的，比如数据的配置密码、写代码的一些思路，node_modules等。git可以通过配置从而达到忽视掉一些文件，这样这些文件就可以不用提交了。</p></blockquote><ul><li>在仓库的根目录创建一个<code>.gitignore</code>的文件，文件名是固定的。</li><li>将不需要被git管理的文件路径添加到<code>.gitignore</code>中</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 忽视idea.txt文件</span>
idea.txt

<span class="token comment"># 忽视css下的index.js文件</span>
css/index.js

<span class="token comment"># 忽视css下的所有的js文件</span>
css/*.js

<span class="token comment"># 忽视css文件夹</span>
css
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="git分支操作" tabindex="-1"><a class="header-anchor" href="#git分支操作" aria-hidden="true">#</a> git分支操作</h2><p>分支就是科幻电影里面的平行宇宙，当你正在电脑前努力学习Git的时候，另一个你正在另一个平行宇宙里努力学习SVN。</p><p>如果两个平行宇宙互不干扰，那对现在的你也没啥影响。不过，在某个时间点，两个平行宇宙合并了，结果，你既学会了Git又学会了SVN！</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="" originSrc="./assets/fenzhi.png" data="aurora"></p><h3 id="为什么要有分支" tabindex="-1"><a class="header-anchor" href="#为什么要有分支" aria-hidden="true">#</a> 为什么要有分支？</h3><ul><li>如果你要开发一个新的功能，需要2周时间，第一周你只能写50%代码，如果此时立即提交，代码没写完，不完整的代码会影响到别人无法工作。如果等代码写完再提交，代码很容易丢失，风险很大。</li><li>有了分支，你就可以创建一个属于自己的分支，别人看不到，也不影响别人，你在自己的分支上工作，提交到自己的分支上，等到功能开发完毕，一次性的合并到原来的分支。这样既安全，又不影响他人工作。</li></ul><h3 id="git分支命令" tabindex="-1"><a class="header-anchor" href="#git分支命令" aria-hidden="true">#</a> git分支命令</h3><blockquote><p>在git中，分支实质上仅仅是一个指针，每次代码提交后，这个分支指针就会向后移动，保证一直指向最后一次提交的的版本。git中使用HEAD指向当前分支</p></blockquote><h4 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支" aria-hidden="true">#</a> 创建分支</h4><ul><li><code>git branch 分支名称</code>创建分支，分支中的代码，在创建时与当前分支的内容完全相同。</li><li>git在第一次提交时，就有了一个叫<code>master</code>的主分支。</li><li><code>git branch dev</code>，创建了一个叫做dev的分支</li></ul><h4 id="查看分支" tabindex="-1"><a class="header-anchor" href="#查看分支" aria-hidden="true">#</a> 查看分支</h4><ul><li><code>git branch</code>可以查看所有的分支，</li><li>在当前分支的前面会有一个<code>*</code></li><li>在git中，有一个特殊指针<code>HEAD</code>,永远会指向当前分支</li></ul><h4 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支" aria-hidden="true">#</a> 切换分支</h4><ul><li><code>git checkout 分支名称</code>切换分支 HEAD指针指向了另一个分支</li><li>在当前分支的任何操作，都不会影响到其他的分支，除非进行了分支合并。</li><li>提交代码时，会生产版本号，当前分支会指向最新的版本号。</li></ul><h4 id="创建并切换分支" tabindex="-1"><a class="header-anchor" href="#创建并切换分支" aria-hidden="true">#</a> 创建并切换分支</h4><ul><li><code>git checkout -b 分支名称</code> 创建并切换分支</li><li>切换分支会做两件事情 <ul><li>创建一个新分支</li><li>把head指针指向当前的分支</li></ul></li></ul><h4 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支" aria-hidden="true">#</a> 删除分支</h4><ul><li><code>git branch -d 分支名称</code> 可以删除分支</li><li>注意：不能在当前分支删除当前分支，需要切换到其他分支才能删除。</li><li>注意：<code>master</code>分支是可以删除的，但是不推荐那么做。</li></ul><h4 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支" aria-hidden="true">#</a> 合并分支</h4><ul><li><code>git merge 分支名称</code> 将其他分支的内容合并到当前分支。</li><li>在<code>master</code>分支中执行<code>git merge dev</code> 将<code>dev</code>分支中的代码合并到<code>master</code>分支</li><li><a href="https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E6%96%B0%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6" target="_blank" rel="noopener noreferrer">分支合并`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a></li></ul><h3 id="git合并冲突" tabindex="-1"><a class="header-anchor" href="#git合并冲突" aria-hidden="true">#</a> git合并冲突</h3><ul><li>对于同一个文件，如果有多个分支需要合并时，容易出现冲突。</li><li>合并分支时，如果出现冲突，只能手动处理，再次提交，一般的作法，把自己的代码放到冲突代码的后面即可。</li></ul><blockquote></blockquote><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#btn-login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">serialize</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;form&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 非空校验</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">.</span>username<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">tip</span><span class="token punctuation">(</span><span class="token string">&#39;请输入用户名&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">.</span>password<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">tip</span><span class="token punctuation">(</span><span class="token string">&#39;请输入密码&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>password<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">tip</span><span class="token punctuation">(</span><span class="token string">&#39;密码的长度不能小于6位&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;user-token&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>token<span class="token punctuation">)</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;user-name&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>username<span class="token punctuation">)</span>
    <span class="token function">tip</span><span class="token punctuation">(</span><span class="token string">&#39;登录成功&#39;</span><span class="token punctuation">)</span>
    location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;./index.html&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">tip</span><span class="token punctuation">(</span><span class="token string">&#39;用户名或者密码错误&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="git远程仓库" tabindex="-1"><a class="header-anchor" href="#git远程仓库" aria-hidden="true">#</a> git远程仓库</h2><h3 id="github、gitee、gitlab" tabindex="-1"><a class="header-anchor" href="#github、gitee、gitlab" aria-hidden="true">#</a> github、gitee、gitlab</h3><ul><li>git是一个版本控制工具。</li><li>github是一个代码托管平台，开源社区，是git的一个远程代码仓库平台。</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//1. gitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名gitHub。</span>
<span class="token comment">//2. github免费，代码所有人都能看到，但是只有你自己能修改。付费的可以隐藏。</span>
<span class="token comment">//3. 创建git项目时，不能有中文。</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><a href="https://github.com/" target="_blank" rel="noopener noreferrer">github官网`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>： 国外开源 git 代码托管平台</p><p><a href="https://git.oschina.net/" target="_blank" rel="noopener noreferrer">开源中国-git`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>: 国内开源 git 代码托管平台</p><p><a href="https://about.gitlab.com/" target="_blank" rel="noopener noreferrer">gitlab`)
  _push((0,server_renderer.ssrRenderComponent)(_component_ExternalLinkIcon, null, null, _parent))
  _push(`</a>：企业级 git 代码托管平台</p><h3 id="码云创建远程仓库" tabindex="-1"><a class="header-anchor" href="#码云创建远程仓库" aria-hidden="true">#</a> 码云创建远程仓库</h3><ol><li><p>新建右上角仓库</p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20220514184557788" originSrc="assets/image-20220514184557788.png" data="aurora"></p></li><li><p>输入仓库名 <strong>不勾初始化！！！</strong></p><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20220514184702951" originSrc="assets/image-20220514184702951.png" data="aurora"></p></li><li><p>点击创建</p></li></ol><p><img src="https://ooszy.cco.vin/img/blog-public/ljz.gif" alt="image-20220514184807839" originSrc="assets/image-20220514184807839.png" data="aurora"></p><h3 id="ssh免密码登陆" tabindex="-1"><a class="header-anchor" href="#ssh免密码登陆" aria-hidden="true">#</a> SSH免密码登陆</h3><p>git支持多种数据传输协议：</p><ul><li>https协议：<code>https://gitee.com/jepsonpp/test.git</code> 需要输入用户名和密码</li><li>ssh协议：<code>git@gitee.com:jepsonpp/test.git</code> 可以配置免密码登录</li></ul><p>每次push或者pull代码，如果使用https协议，那么都需要输入用户名和密码进行身份的确认，非常麻烦。</p><ul><li>github为了账户的安全，需要对每一次push请求都要验证用户的身份，只有合法的用户才可以push</li><li>使用ssh协议，配置ssh免密码，可以做到免密码往github推送代码</li></ul><h3 id="ssh免密码登录配置" tabindex="-1"><a class="header-anchor" href="#ssh免密码登录配置" aria-hidden="true">#</a> SSH免密码登录配置</h3><ul><li>1 创建SSH Key：<code>ssh-keygen -t rsa</code> （注意：这些命令需要在bash中敲）</li><li>2 在文件路径 <code>C:\\用户\\当前用户名\\</code> 找到 <code>.ssh</code> 文件夹</li><li>3 文件夹中有两个文件： <ul><li>私钥：<code>id_rsa</code></li><li>公钥：<code>id_rsa.pub</code></li></ul></li><li>4 在 <code>码云-&gt; 设置 -&gt; SSH公钥</code>页面中</li><li>5 粘贴 公钥 <code>id_rsa.pub</code> 内容到对应文本框中， 添加公钥</li></ul><h3 id="git-push" tabindex="-1"><a class="header-anchor" href="#git-push" aria-hidden="true">#</a> git push</h3><ul><li>作用：将本地仓库中代码提交到远程仓库</li><li><code>git push 仓库地址 分支名</code> 将代码提交到远程仓库对应分支</li><li>例子：<code>git push git@gitee.com:jepsonpp/test.git master</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git push &lt;远程主机名&gt; &lt;本地分支名&gt;:&lt;远程分支名&gt;
如果本地分支名与远程分支名相同，则可以省略冒号
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="git-remote" tabindex="-1"><a class="header-anchor" href="#git-remote" aria-hidden="true">#</a> git remote</h3><p>每次push操作都需要带上远程仓库的地址，非常的麻烦，我们可以给仓库地址设置一个别名</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 给远程仓库设置一个别名</span>
<span class="token function">git</span> remote <span class="token function">add</span> 仓库别名 仓库地址
<span class="token function">git</span> remote <span class="token function">add</span> origin git@gitee.com:jepsonpp/test.git

<span class="token comment"># 删除origin这个别名</span>
<span class="token function">git</span> remote remove origin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>演示命令：<code>git push -u 仓库别名 分支名</code></p><h3 id="git-clone" tabindex="-1"><a class="header-anchor" href="#git-clone" aria-hidden="true">#</a> git clone</h3><ul><li>作用：克隆远程仓库的代码到本地</li><li>git clone [远程仓库地址]</li><li><code>git clone git@gitee.com:jepsonpp/test.git</code>会在本地新建一个<code>test</code>文件夹</li><li>在test中包含了一个<code>.git</code>目录，用于保存所有的版本记录，同时test文件中还有最新的代码，可以进行后续的开发。</li><li>git克隆默认会使用远程仓库的项目名字，也可以自己指定。命令：<code>git clone [远程仓库地址] [本地项目名]</code></li></ul><p>tips: <code>git branch -a</code> 查看分支</p><h3 id="git-pull" tabindex="-1"><a class="header-anchor" href="#git-pull" aria-hidden="true">#</a> git pull</h3><ul><li><p>作用：拉取更新，将远程的代码下载合并到本地的分支</p></li><li><p>通常在push前，需要先pull一次。</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 获取远程仓库的更新，并且与本地的分支进行合并</span>
<span class="token function">git</span> pull
<span class="token function">git</span> pull <span class="token operator">&lt;</span>远程主机名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>分支名<span class="token operator">&gt;</span>
<span class="token function">git</span> pull origin login  <span class="token comment"># 获取远程分支的更新，并更新合并到login分支</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="下载远端分支本地" tabindex="-1"><a class="header-anchor" href="#下载远端分支本地" aria-hidden="true">#</a> 下载远端分支本地</h3><p><code>checkout</code> 的 <code>-t </code>(或) <code>--track </code>)选项仅在创建新的(本地)分支时使用</p><p>先在本地建立一个分支，并切换到该分支，然后从远程分支上同步代码到该分支上，并建立关联</p><div class="language-git ext-git line-numbers-mode"><pre class="language-git"><code>git checkout -t origin/develop     #远端分支名和本地新建分支名同名
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>后续拉取该分支的更新，就是切换到该分支，git pull origin 分支名</strong></p><ol><li>将数据可视化项目上传到码云仓库, 主分支与开发分支均要上传</li></ol><div class="language-git ext-git line-numbers-mode"><pre class="language-git"><code>git push origin master

git push origin develop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>删除本地项目，通过克隆把远端仓库项目拉取下来，切换到develop分支</li></ol><div class="language-git ext-git line-numbers-mode"><pre class="language-git"><code>git clone 仓库地址

git checkout -t origin/develop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/Git/git.html.vue?vue&type=template&id=3248efe4

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./docs/.vuepress/.temp/pages/Git/git.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const git_html = (__exports__);

/***/ })

};
;
//# sourceMappingURL=717.app.js.map