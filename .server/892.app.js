"use strict";
exports.id = 892;
exports.ids = [892];
exports.modules = {

/***/ 9892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/vuepress-theme-aurora/lib/client/layouts/Layout.vue?vue&type=template&id=e2d750e4&ts=true


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_common = (0,external_vue_.resolveComponent)("common");
  const _component_Home = (0,external_vue_.resolveComponent)("Home");
  const _component_Page = (0,external_vue_.resolveComponent)("Page");
  const _component_home_bottom = (0,external_vue_.resolveComponent)("home-bottom");
  const _component_Footer = (0,external_vue_.resolveComponent)("Footer");
  _push(`<!--[-->`);
  _push((0,server_renderer.ssrRenderComponent)(_component_common, {
    "is-sticky-sidebar": !_ctx.frontmatter.home,
    "head-line": _ctx.headLine,
    "is-show-head-line": !_ctx.frontmatter.home,
    "is-home-page": _ctx.frontmatter.home,
    "is-show-catalog": !_ctx.frontmatter.home,
    "is-show-top-img": _ctx.getIsHome
  }, {
    center1: (0,external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.frontmatter.home) {
          _push2((0,server_renderer.ssrRenderComponent)(_component_Home, {
            "theme-property": _ctx.themeProperty,
            "show-random-say": true,
            "is-home": _ctx.frontmatter.home
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.frontmatter.home ? ((0,external_vue_.openBlock)(), (0,external_vue_.createBlock)(_component_Home, {
            key: 0,
            "theme-property": _ctx.themeProperty,
            "show-random-say": true,
            "is-home": _ctx.frontmatter.home
          }, null, 8, ["theme-property", "is-home"])) : (0,external_vue_.createCommentVNode)("", true)
        ];
      }
    }),
    center2: (0,external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (!_ctx.frontmatter.home) {
          _push2((0,server_renderer.ssrRenderComponent)(_component_Page, {
            "path-name": _ctx.page.path,
            "theme-property": _ctx.themeProperty,
            key: _ctx.page.path
          }, {
            top: (0,external_vue_.withCtx)((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "page-top", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  (0,external_vue_.renderSlot)(_ctx.$slots, "page-top")
                ];
              }
            }),
            bottom: (0,external_vue_.withCtx)((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "page-bottom", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  (0,external_vue_.renderSlot)(_ctx.$slots, "page-bottom")
                ];
              }
            }),
            _: 3
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          !_ctx.frontmatter.home ? ((0,external_vue_.openBlock)(), (0,external_vue_.createBlock)(_component_Page, {
            "path-name": _ctx.page.path,
            onGetHeadLine: _ctx.getHeadLine,
            "theme-property": _ctx.themeProperty,
            key: _ctx.page.path
          }, {
            top: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.renderSlot)(_ctx.$slots, "page-top")
            ]),
            bottom: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.renderSlot)(_ctx.$slots, "page-bottom")
            ]),
            _: 3
          }, 8, ["path-name", "onGetHeadLine", "theme-property"])) : (0,external_vue_.createCommentVNode)("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
  if (_ctx.frontmatter.home) {
    _push((0,server_renderer.ssrRenderComponent)(_component_home_bottom, _attrs, {
      "home-footer": (0,external_vue_.withCtx)((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2((0,server_renderer.ssrRenderComponent)(_component_Footer, {
            "theme-property": _ctx.themeProperty,
            "is-home": !_ctx.frontmatter.home,
            "is-show-footer": true
          }, null, _parent2, _scopeId));
        } else {
          return [
            (0,external_vue_.createVNode)(_component_Footer, {
              "theme-property": _ctx.themeProperty,
              "is-home": !_ctx.frontmatter.home,
              "is-show-footer": true
            }, null, 8, ["theme-property", "is-home"])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}

;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/layouts/Layout.vue?vue&type=template&id=e2d750e4&ts=true

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(2253);
// EXTERNAL MODULE: ./node_modules/@vuepress/client/lib/index.js
var lib = __webpack_require__(7621);
// EXTERNAL MODULE: ./node_modules/vuepress-theme-aurora/lib/client/composables/index.js + 7 modules
var composables = __webpack_require__(6590);
// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(9755);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
// EXTERNAL MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/Home.vue + 17 modules
var Home = __webpack_require__(3054);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/vuepress-theme-aurora/lib/client/components/Page.vue?vue&type=template&id=52858aee



function Pagevue_type_template_id_52858aee_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_poster = (0,external_vue_.resolveComponent)("poster")
  const _component_Content = (0,external_vue_.resolveComponent)("Content")
  const _component_PageMeta = (0,external_vue_.resolveComponent)("PageMeta")
  const _component_b_center = (0,external_vue_.resolveComponent)("b-center")
  const _component_page_next = (0,external_vue_.resolveComponent)("page-next")
  const _component_donate = (0,external_vue_.resolveComponent)("donate")
  const _component_RecommendPage = (0,external_vue_.resolveComponent)("RecommendPage")
  const _component_comment = (0,external_vue_.resolveComponent)("comment")

  _push(`<!--[--><main style="${(0,server_renderer.ssrRenderStyle)(_ctx.$store.state.borderRadiusStyle + _ctx.$store.state.opacityStyle)}" class="page sidebar-single-enter-animate" id="article-page">`)
  ;(0,server_renderer.ssrRenderSlot)(_ctx.$slots, "top", {}, null, _push, _parent)
  _push(`<div id="theme-default-content" class="${(0,server_renderer.ssrRenderClass)([!_ctx.isHideH1 ? 'hide-h1-tag' : 'show-h1-tag', "theme-default-content pageContent medium-zoom-content"])}"><div class="page-top-share"><div class="page-top-share-next">`)
  _push((0,server_renderer.ssrRenderComponent)(_component_poster, {
    title: _ctx.originPageData.title,
    content: _ctx.posterContent
  }, null, _parent))
  _push(`</div></div>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Content, null, null, _parent))
  _push(`</div>`)
  if (_ctx.showPageMeta) {
    _push((0,server_renderer.ssrRenderComponent)(_component_PageMeta, null, null, _parent))
  } else {
    _push(`<!---->`)
  }
  (0,server_renderer.ssrRenderSlot)(_ctx.$slots, "bottom", {}, null, _push, _parent)
  _push(`</main>`)
  if (_ctx.themeProperty.articlePagination === undefined ? true : _ctx.themeProperty.articlePagination) {
    _push((0,server_renderer.ssrRenderComponent)(_component_b_center, _attrs, {
      "page-center1": (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push((0,server_renderer.ssrRenderComponent)(_component_page_next, null, null, _parent, _scopeId))
        } else {
          return [
            (0,external_vue_.createVNode)(_component_page_next)
          ]
        }
      }),
      _: 1
    }, _parent))
  } else {
    _push(`<!---->`)
  }
  _push(`<div>`)
  if (_ctx.showDonate) {
    _push((0,server_renderer.ssrRenderComponent)(_component_donate, null, null, _parent))
  } else {
    _push(`<!---->`)
  }
  _push(`</div><div class="recommend-page">`)
  _push((0,server_renderer.ssrRenderComponent)(_component_RecommendPage, { "theme-property": _ctx.themeProperty }, null, _parent))
  _push(`</div>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_comment, { "path-name": _ctx.pathName }, null, _parent))
  _push(`<!--]-->`)
}
;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/Page.vue?vue&type=template&id=52858aee

// EXTERNAL MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/Mood.vue + 5 modules
var Mood = __webpack_require__(1822);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/vuepress-theme-aurora/lib/client/components/PageMeta.vue?vue&type=template&id=497475fa&ts=true


function PageMetavue_type_template_id_497475fa_ts_true_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavLink = (0,external_vue_.resolveComponent)("NavLink");
  _push(`<footer${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({ class: "page-meta" }, _attrs))}>`);
  if (_ctx.editNavLink) {
    _push(`<div${(0,server_renderer.ssrRenderAttr)("data", _ctx.editNavLink.link)}${(0,server_renderer.ssrRenderAttr)("chu", _ctx.getEditLink)} class="meta-item edit-link">`);
    _push((0,server_renderer.ssrRenderComponent)(_component_NavLink, {
      class: "meta-item-label",
      item: _ctx.editNavLink
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.lastUpdated) {
    _push(`<div class="meta-item last-updated"><span class="meta-item-label">${(0,server_renderer.ssrInterpolate)(_ctx.themeLocale.lastUpdatedText)}: </span><span class="meta-item-info">${(0,server_renderer.ssrInterpolate)(_ctx.lastUpdated)}</span></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.contributors && _ctx.contributors.length) {
    _push(`<div class="meta-item contributors"><span class="meta-item-label">${(0,server_renderer.ssrInterpolate)(_ctx.themeLocale.contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
    (0,server_renderer.ssrRenderList)(_ctx.contributors, (contributor, index) => {
      _push(`<!--[--><span class="contributor"${(0,server_renderer.ssrRenderAttr)("title", `email: ${contributor.email}`)}>${(0,server_renderer.ssrInterpolate)(contributor.name)}</span>`);
      if (index !== _ctx.contributors.length - 1) {
        _push(`<!--[-->, <!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</footer>`);
}

;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/PageMeta.vue?vue&type=template&id=497475fa&ts=true

// EXTERNAL MODULE: ./node_modules/vuepress-theme-aurora/lib/client/utils/index.js + 2 modules
var utils = __webpack_require__(1628);
// EXTERNAL MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/NavLink.vue + 4 modules
var NavLink = __webpack_require__(4580);
// EXTERNAL MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/global/Poster.vue + 10 modules
var Poster = __webpack_require__(3836);
// EXTERNAL MODULE: ./docs/.vuepress/.temp/my-data.js
var my_data = __webpack_require__(4125);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/vuepress-theme-aurora/lib/client/components/PageMeta.vue?vue&type=script&lang=ts







const useEditNavLink = () => {
  const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
  const page = (0,lib/* usePageData */.Vi)();
  const frontmatter = (0,lib/* usePageFrontmatter */.I2)();
  return (0,external_vue_.computed)(() => {
    var _a, _b;
    const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale.value.editLink) != null ? _b : true;
    if (!showEditLink) {
      return null;
    }
    const {
      repo,
      docsRepo = repo,
      docsBranch = "main",
      docsDir = "",
      editLinkText
    } = themeLocale.value;
    if (!docsRepo)
      return null;
    const editLink = (0,utils/* resolveEditLink */.Fg)({
      docsRepo,
      docsBranch,
      docsDir,
      filePathRelative: page.value.filePathRelative,
      editLinkPattern: themeLocale.value.editLinkPattern
    });
    if (!editLink)
      return null;
    return {
      text: editLinkText != null ? editLinkText : "Edit this page",
      link: editLink
    };
  });
};
const useLastUpdated = () => {
  const siteLocale = (0,lib/* useSiteLocaleData */.I5)();
  const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
  const page = (0,lib/* usePageData */.Vi)();
  const frontmatter = (0,lib/* usePageFrontmatter */.I2)();
  return (0,external_vue_.computed)(() => {
    var _a, _b, _c, _d;
    const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale.value.lastUpdated) != null ? _b : true;
    if (!showLastUpdated)
      return null;
    if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
      return null;
    const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
    return updatedDate.toLocaleString(siteLocale.value.lang);
  });
};
const useContributors = () => {
  const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
  const page = (0,lib/* usePageData */.Vi)();
  const frontmatter = (0,lib/* usePageFrontmatter */.I2)();
  return (0,external_vue_.computed)(() => {
    var _a, _b, _c, _d;
    const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale.value.contributors) != null ? _b : true;
    if (!showContributors)
      return null;
    return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
  });
};
/* harmony default export */ const PageMetavue_type_script_lang_ts = ((0,external_vue_.defineComponent)({
  name: "PageMeta",
  components: {
    Poster: Poster/* default */.Z,
    NavLink: NavLink/* default */.Z
  },
  data() {
    return {
      editNavLink: {
        link: "",
        text: ""
      }
    };
  },
  setup() {
    const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return {
      themeLocale,
      lastUpdated,
      contributors
    };
  },
  computed: {
    getEditLink() {
      const page1 = (0,lib/* usePageData */.Vi)();
      const page = (0,lib/* usePageData */.Vi)();
      const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
      let editNavLink = useEditNavLink();
      let githubActions = themeLocale.value.githubActions;
      if (githubActions && themeLocale.value.docsRepo !== void 0) {
        new Promise((resolve, reject) => {
          let path = page.value.path;
          for (let i = 0; i < my_data/* default.length */.Z.length; i++) {
            if (my_data/* default */.Z[i].path == path) {
              resolve(my_data/* default */.Z[i].filePathRelative);
            }
          }
        }).then((filePathRelative) => {
          let docsRepo = themeLocale.value.docsRepo;
          let docsBranch = "";
          if (themeLocale.value.docsBranch !== void 0) {
            docsBranch = themeLocale.value.docsBranch;
          } else {
            docsBranch = "main";
          }
          this.editNavLink.link = docsRepo + "/edit/" + docsBranch + "/docs/" + filePathRelative;
          this.editNavLink.text = editNavLink.value.text;
        });
      }
    }
  }
}));

;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/PageMeta.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/PageMeta.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(PageMetavue_type_script_lang_ts, [['ssrRender',PageMetavue_type_template_id_497475fa_ts_true_ssrRender]])

/* harmony default export */ const PageMeta = (__exports__);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/vuepress-theme-aurora/lib/client/components/PageNav.vue?vue&type=template&id=d92a7598&ts=true


function PageNavvue_type_template_id_d92a7598_ts_true_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavLink = (0,external_vue_.resolveComponent)("NavLink");
  if (_ctx.prevNavLink || _ctx.nextNavLink) {
    _push(`<nav${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({ class: "page-nav" }, _attrs))}><p class="inner">`);
    if (_ctx.prevNavLink) {
      _push(`<span class="prev"> \u2190 `);
      _push((0,server_renderer.ssrRenderComponent)(_component_NavLink, { item: _ctx.prevNavLink }, null, _parent));
      _push(`</span>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.nextNavLink) {
      _push(`<span class="next">`);
      _push((0,server_renderer.ssrRenderComponent)(_component_NavLink, { item: _ctx.nextNavLink }, null, _parent));
      _push(` \u2192 </span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</p></nav>`);
  } else {
    _push(`<!---->`);
  }
}

;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/PageNav.vue?vue&type=template&id=d92a7598&ts=true

// EXTERNAL MODULE: ./node_modules/@vuepress/shared/lib/esm/index.js + 13 modules
var esm = __webpack_require__(5897);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/vuepress-theme-aurora/lib/client/components/PageNav.vue?vue&type=script&lang=ts






const resolveFromFrontmatterConfig = (conf) => {
  if (conf === false) {
    return null;
  }
  if ((0,esm/* isString */.HD)(conf)) {
    return (0,composables/* useNavLink */.sC)(conf);
  }
  if ((0,esm/* isPlainObject */.PO)(conf)) {
    return conf;
  }
  return false;
};
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
  const index = sidebarItems.findIndex((item) => item.link === currentPath);
  if (index !== -1) {
    const targetItem = sidebarItems[index + offset];
    if (!(targetItem == null ? void 0 : targetItem.link)) {
      return null;
    }
    return targetItem;
  }
  for (const item of sidebarItems) {
    if (item.children) {
      const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
      if (childResult) {
        return childResult;
      }
    }
  }
  return null;
};
/* harmony default export */ const PageNavvue_type_script_lang_ts = ((0,external_vue_.defineComponent)({
  name: "PageNav",
  components: {
    NavLink: NavLink/* default */.Z
  },
  setup() {
    const frontmatter = (0,lib/* usePageFrontmatter */.I2)();
    const sidebarItems = (0,composables/* useSidebarItems */.VU)();
    const route = (0,external_vue_router_.useRoute)();
    const prevNavLink = (0,external_vue_.computed)(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = (0,external_vue_.computed)(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return {
      prevNavLink,
      nextNavLink
    };
  }
}));

;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/PageNav.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/PageNav.vue




;
const PageNav_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(PageNavvue_type_script_lang_ts, [['ssrRender',PageNavvue_type_template_id_d92a7598_ts_true_ssrRender]])

/* harmony default export */ const PageNav = (PageNav_exports_);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/vuepress-theme-aurora/lib/client/components/RecommendPage.vue?vue&type=template&id=c52ca8f0



function RecommendPagevue_type_template_id_c52ca8f0_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_recommend_item = (0,external_vue_.resolveComponent)("recommend-item")

  if ($props.themeProperty.showRecommend === undefined ? true : $props.themeProperty.showRecommend) {
    _push(`<main${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({
      style: _ctx.$store.state.borderRadiusStyle + _ctx.$store.state.opacityStyle,
      class: "page box"
    }, _attrs))}><h2 id="recommend-top-title">推荐阅读</h2><div id="recommend" class="recommend"><!--[-->`)
    ;(0,server_renderer.ssrRenderList)($data.allPages, (item, index) => {
      _push((0,server_renderer.ssrRenderComponent)(_component_recommend_item, {
        item: item,
        key: index,
        "theme-property": $props.themeProperty,
        index: index
      }, null, _parent))
    })
    _push(`<!--]--></div></main>`)
  } else {
    _push(`<!---->`)
  }
}
;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/RecommendPage.vue?vue&type=template&id=c52ca8f0

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/vuepress-theme-aurora/lib/client/components/child/RecommendItem.vue?vue&type=template&id=5646f461



function RecommendItemvue_type_template_id_5646f461_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = (0,external_vue_.resolveComponent)("router-link")

  _push(`<div${
    (0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({
      class: "recommend-item",
      id: "recommend-item"
    }, _attrs))
  }><div style="${
    (0,server_renderer.ssrRenderStyle)($options.setSpanStyle($props.index))
  }" class="recommend-top"><div class="recommend-bottom"><div class="aurora-recommend-bo">`)
  _push((0,server_renderer.ssrRenderComponent)(_component_router_link, { to: $options.getHref }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<span class="aurora-hover-color-animate"${
          _scopeId
        }>${
          (0,server_renderer.ssrInterpolate)($props.item.title === "" ? $data.recommendNoTitle : $props.item.title)
        }</span>`)
      } else {
        return [
          (0,external_vue_.createVNode)("span", { class: "aurora-hover-color-animate" }, (0,external_vue_.toDisplayString)($props.item.title === "" ? $data.recommendNoTitle : $props.item.title), 1)
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div></div></div></div>`)
}
;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/child/RecommendItem.vue?vue&type=template&id=5646f461

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/vuepress-theme-aurora/lib/client/components/child/RecommendItem.vue?vue&type=script&lang=js


/* harmony default export */ const RecommendItemvue_type_script_lang_js = ({
  name: "RecommendItem",
  data() {
    return {
      recommendNoTitle: '`╮(￣▽￣)╭`'
    }
  },
  props: {
    item: null,
    index: null,
    themeProperty: ''
  },
  computed: {
    getRecommendTag() {

      return this.item.categories
      if (this.themeProperty.sidebarTag === "categories") {
        if (this.item.categories.length === 0) {
          return this.item.tag
        }
        return this.item.categories
      }

      if (this.item.tag.length === 0) {
        return this.item.categories
      }
      return this.item.tag
    },
    setSpanStyle() {
      return (index) => {
        let background_color = ''
        if (this.themeProperty.randomColor !== undefined) {
          background_color = this.themeProperty.randomColor[
              this.getRandomInt(0,this.themeProperty.randomColor.length -1)]
        }else {
          background_color = this.$store.state.defaultRandomColors[
              this.getRandomInt(0,this.$store.state.defaultRandomColors.length -1)]
        }
        return "background-color: "+background_color + ";"
      }
    },
    getHref() {
      return this.item.articleUrl
    }
  },
  created() {
    if (this.themeProperty.recommendNoTitle !== undefined) {
      this.recommendNoTitle = this.themeProperty.recommendNoTitle
    }
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
    }
  },

});

;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/child/RecommendItem.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/child/RecommendItem.vue




;
const RecommendItem_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(RecommendItemvue_type_script_lang_js, [['ssrRender',RecommendItemvue_type_template_id_5646f461_ssrRender]])

/* harmony default export */ const RecommendItem = (RecommendItem_exports_);
;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/vuepress-theme-aurora/lib/client/components/RecommendPage.vue?vue&type=script&lang=js



/* harmony default export */ const RecommendPagevue_type_script_lang_js = ({
  name: "RecommendPage",
  components: {
    RecommendItem: RecommendItem,
  },
  data() {
    return {
      allPages: null,
    }
  },
  props: {
    themeProperty: ''
  },
  mounted() {
    setTimeout(() => {
      let allPages = this.$store.state.allPageMap

      new Promise((resolve,reject) => {
        let allPageArr = []

        let recommendPageLength = 30
        if (this.themeProperty.recommendPageLength !== undefined && this.themeProperty.recommendPageLength != null) {
          recommendPageLength = this.themeProperty.recommendPageLength
        }
        if (recommendPageLength < allPages.length) {
          for (let i = 0; i < recommendPageLength; i++) {
            //console.log(allPages[i].articleUrl)
            allPageArr.push(allPages[this.getRandomInt(0,allPages.length -1)])
          }
        }else {
          for (let i = 0; i < allPages.length; i++) {
            //console.log(allPages[i].articleUrl)
            allPageArr.push(allPages[this.getRandomInt(0,allPages.length -1)])
          }
        }
        resolve(allPageArr)
      }).then((allPageArr) => {
        this.allPages = allPageArr
      })
    },700)
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
    }
  },

});

;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/RecommendPage.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/RecommendPage.vue




;
const RecommendPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(RecommendPagevue_type_script_lang_js, [['ssrRender',RecommendPagevue_type_template_id_c52ca8f0_ssrRender]])

/* harmony default export */ const RecommendPage = (RecommendPage_exports_);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/vuepress-theme-aurora/lib/client/components/child/page/PageNext.vue?vue&type=template&id=1d73afc6



function PageNextvue_type_template_id_1d73afc6_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = (0,external_vue_.resolveComponent)("router-link")

  _push(`<div${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({
    style: $options.getBgSrc,
    class: "page-bottom-next"
  }, _attrs))}><div class="page-next-left page-next-item">`)
  _push((0,server_renderer.ssrRenderComponent)(_component_router_link, {
    to: $data.prePage.path === undefined ? '' : $data.prePage.path
  }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<span${
          (0,server_renderer.ssrRenderAttr)("data", $data.prePage.path)
        } class="aurora-hover-color-animate"${
          _scopeId
        }>${
          (0,server_renderer.ssrInterpolate)($data.prePage.title === "" ? $data.recommendNoTitle : $data.prePage.title)
        }</span>`)
      } else {
        return [
          (0,external_vue_.createVNode)("span", {
            data: $data.prePage.path,
            class: "aurora-hover-color-animate"
          }, (0,external_vue_.toDisplayString)($data.prePage.title === "" ? $data.recommendNoTitle : $data.prePage.title), 9, ["data"])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`</div>`)
  if ($data.nextPage !== '') {
    _push(`<div class="page-next-right page-next-item">`)
    _push((0,server_renderer.ssrRenderComponent)(_component_router_link, {
      to: $data.nextPage.path === undefined ? '' : $data.nextPage.path
    }, {
      default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<span${
            (0,server_renderer.ssrRenderAttr)("data", $data.nextPage.path)
          } class="aurora-hover-color-animate"${
            _scopeId
          }>${
            (0,server_renderer.ssrInterpolate)($data.nextPage.title === "" ? $data.recommendNoTitle : $data.nextPage.title)
          }</span>`)
        } else {
          return [
            (0,external_vue_.createVNode)("span", {
              data: $data.nextPage.path,
              class: "aurora-hover-color-animate"
            }, (0,external_vue_.toDisplayString)($data.nextPage.title === "" ? $data.recommendNoTitle : $data.nextPage.title), 9, ["data"])
          ]
        }
      }),
      _: 1
    }, _parent))
    _push(`</div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div>`)
}
;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/child/page/PageNext.vue?vue&type=template&id=1d73afc6

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/vuepress-theme-aurora/lib/client/components/child/page/PageNext.vue?vue&type=script&lang=js



/* harmony default export */ const PageNextvue_type_script_lang_js = ({
  name: "PageNextItem",
  data() {
    return {
      //当前的激活的目录的数组
      currentCatalogObjectArr: null,
      prePage: '',
      nextPage: '',
      themeConfig: {},
      recommendNoTitle: "╮(￣▽￣)╭"
    }
  },
  computed: {
    getBgSrc() {
      let num1 = this.getRandomInt(-9999,999)
      let num2 = this.getRandomInt(0,300)
      let num3 = this.getRandomInt(0,30)
      let num = num2 / num3 * num1 + num2

      const themeLocale = (0,composables/* useThemeLocaleData */.X6)()

      let homePageImgApi = themeLocale.value.homePageImgApi

      if (homePageImgApi === undefined) {
        homePageImgApi = this.$store.state.defaultHomePageImgApi
      }
      let path = homePageImgApi + "?time=" + num
      return '--homePageImgApi: url('+ path +');'
    }
  },
  created() {
    this.themeConfig = (0,composables/* useThemeData */.BV)().value
    if (this.themeConfig.recommendNoTitle !== undefined) {
      this.recommendNoTitle = this.themeConfig.recommendNoTitle
    }
    let loadingCatalog = setInterval(() =>{
      if (this.$store.state.currentCatalogObjectArr.length !== 0) {
        this.currentCatalogObjectArr = this.$store.state.currentCatalogObjectArr
        clearInterval(loadingCatalog)
        this.setPageNext()
      }
    },50)
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
    },
    setPageNext() {
      if (this.currentCatalogObjectArr.length === 1) {
        //只有一个
        this.prePage = this.currentCatalogObjectArr[0]
        return
      }

      //侧边栏对象数组存在多个值 获取当前路由
      let routePath = this.$route.path
      let targetIndex = 0

      let excludePathArr = []

      if ((0,composables/* useThemeData */.BV)().value.excludePath !== undefined) {
        excludePathArr = (0,composables/* useThemeData */.BV)().value.excludePath
      }

      new Promise((resolve,reject) => {
        let currentCatalogObjectArr = this.currentCatalogObjectArr.filter(page => {
          return !excludePathArr.includes(page.path)
        })
        resolve(currentCatalogObjectArr)
      }).then((currentCatalogObjectArr) => {
        new Promise((resolve,reject) => {
          for (let i = 0; i < currentCatalogObjectArr.length; i++) {
            if (currentCatalogObjectArr[i].path === routePath) {
              targetIndex = i
              break
            }
          }
          resolve(currentCatalogObjectArr)
        }).then((currentCatalogObjectArr) => {
          let prePageObject = currentCatalogObjectArr[(targetIndex - 1) % currentCatalogObjectArr.length]
          this.prePage = prePageObject === undefined ? currentCatalogObjectArr[currentCatalogObjectArr.length -1] : prePageObject
          this.nextPage = currentCatalogObjectArr[(targetIndex + 1) % currentCatalogObjectArr.length]
        })
      })
    }
  }
});

;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/child/page/PageNext.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/child/page/PageNext.vue




;
const PageNext_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(PageNextvue_type_script_lang_js, [['ssrRender',PageNextvue_type_template_id_1d73afc6_ssrRender]])

/* harmony default export */ const PageNext = (PageNext_exports_);
;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/vuepress-theme-aurora/lib/client/components/Page.vue?vue&type=script&lang=js











/* harmony default export */ const Pagevue_type_script_lang_js = ((0,external_vue_.defineComponent)({
  name: 'Page',
  components: {
    PageMeta: PageMeta,
    PageNav: PageNav,
    RecommendPage: RecommendPage,
    Mood: Mood/* default */.Z,
    PageNext: PageNext
  },
  data() {
    return {
      lazyLoadingImg: 'https://ooszy.cco.vin/img/blog-public/ljz.gif',
      originPageData: '',
      posterContent: '',
      title: '',
      showMobileCatalog: true,
      showPageMeta: true,
      isHideH1: true
    }
  },
  props: {
    pathName: '',
    themeProperty: ''
  },
  computed: {
    showDonate() {
      let showArticleDonate = true
      try {
        showArticleDonate = this.themeProperty.donate.articlePage
      }catch (e) {

      }
      return showArticleDonate
    }
  },
  emits: ['getHeadLine'],
  created() {
    if (this.$route.hash !== "") {
      this.$router.push(this.$route.hash)
    }

    this.showPageMeta = this.themeProperty.showPageMeta

    //如果手机端侧边栏打开的，那么就关闭
    if (this.$store.state.openMobileSidebar) {
      this.$store.commit("setOpenMobileSidebar",{
        openMobileSidebar: false
      })
    }
    //设置sidebar的class
    const page = (0,lib/* usePageData */.Vi)()
    this.originPageData = page

    if (page.value.frontmatter.title === undefined) {
      this.isHideH1 = false
    }

    this.$emit('getHeadLine',page.value.title)
    let lazyLoadingImg = this.themeProperty.lazyLoadingImg
    this.lazyLoadingImg = lazyLoadingImg === undefined ? "https://ooszy.cco.vin/img/blog-public/ljz.gif" : lazyLoadingImg
  },
  methods: {
    getPosterText() {
      return new Promise((resolve,reject) => {
        let allP = jquery_default()(".pageContent p")
        let content = ''
        if (allP.length > 30) {
          for (let i = 0; i < 30; i++) {
            content = content + allP[i].innerText
          }
        }else {
          for (let i = 0; i < allP.length; i++) {
            content = content + allP[i].innerText
          }
        }
        content = content.replace(/\r\n/g,"")
        content = content.replace(/\n/g,"");
        content = content.replace(/\s/g,"")
        content = content.replace("#","")
        content = content.replace("#\n","")
        content = content.replace("##\n","")
        content = content.replace("##","")
        resolve(content)
      })
    },
    start() {
      let imgs = jquery_default()(".pageContent img")
      for (let i = 0; i < imgs.length; i++) {
        let clientWidth = document.body.clientWidth
        let img = imgs[i]
        let top = img.offsetTop
        let scrollTop = jquery_default()(window).scrollTop();
        let scrollCz = ''
        if (clientWidth < 600) {
          scrollCz = top - scrollTop - 350
        }else {
          scrollCz = top - (scrollTop + 50)
        }
        if (scrollCz < 0) {
          this.loadImg(img)
        }
      }
    },
    loadImg(img) {
      let originSrc = img.getAttribute("originSrc")
      if (originSrc === null) {
        return;
      }
      img.setAttribute("src",originSrc)
    },
    setOtherProperty(keyword,description) {
      /*const page = usePageData()
      let title = document.querySelector('meta[property="og:title"]')
      let descriptionDom = document.querySelector('meta[property="og:description"]')
      if (descriptionDom === null) {
        //head中没有keyword 添加一个
        let keywordMeta = $('<meta property="og:description" content="'+description+'">').get(0)
        document.querySelector("head").appendChild(keywordMeta)
      }else {
        //已经存在keyword属性的dom 设置其content
        descriptionDom.setAttribute("content",description)
      }

      if (title === null) {
        //head中没有keyword 添加一个
        let keywordMeta = $('<meta property="og:title" content="'+page.value.title+'">').get(0)
        document.querySelector("head").appendChild(keywordMeta)
      }else {
        //已经存在keyword属性的dom 设置其content
        descriptionDom.setAttribute("content",page.value.title)
      }*/

    },
    setDesc(description) {
      let descriptionDom = document.querySelectorAll('meta[name="description"]')
      if (descriptionDom.length !== 0) {
        new Promise((resolve,reject) => {
          for (let i = 0; i < descriptionDom.length; i++) {
            document.querySelector("head").removeChild(descriptionDom[i])
          }
          resolve()
        }).then(() => {
          let descriptionMeta = jquery_default()('<meta name="description" content="'+ description +'">').get(0)
          document.querySelector("head").appendChild(descriptionMeta)
        })
      }else {
        let descriptionMeta = jquery_default()('<meta name="description" content="'+ description +'">').get(0)
        document.querySelector("head").appendChild(descriptionMeta)
      }
    },
    setKeyword(keyword) {
      let keywordDom= document.querySelector('meta[name="keyword"]')
      if (keywordDom === null) {
        //head中没有keyword 添加一个
        let keywordMeta = jquery_default()('<meta name="keyword" content="'+keyword+'">').get(0)
        document.querySelector("head").appendChild(keywordMeta)
      }else {
        //已经存在keyword属性的dom 设置其content
        keywordDom.setAttribute("content",keyword)
      }
    },
    setMeta() {
      //设置meta标签的keyword和description
      let frontmatterDesc = this.originPageData.frontmatter.description
      let frontmatterKeyword = this.originPageData.frontmatter.keyword

      let keyword = ''
      let description = ''

      let content = document.querySelector("#theme-default-content").innerText
      //截取220个字符作为描述和关键字信息
      content = content.replace(/[\r\n]/g,"");
      content = content.replace(" ","")

      if (content.length > 220) {
        content = content.substr(0,220)
      }

      if (frontmatterDesc === undefined || frontmatterDesc == null) {
        description = content
      }else {
        description = frontmatterDesc
      }

      if (frontmatterKeyword === undefined || frontmatterKeyword == null) {
        if (content.length > 90) {
          keyword = content.substr(0,90)
        }else {
          keyword = content
        }
      }else {
        keyword = frontmatterKeyword
      }

      this.setKeyword(keyword)
      this.setDesc(description)
      this.setOtherProperty(keyword,description)
    }
  },
  mounted() {
    jquery_default()(window).on("scroll",() => {
      this.start()
    })

    this.$nextTick(() => {
      this.getPosterText().then((res) => {
        this.posterContent = res
      })
      this.setMeta()
      let h1s = jquery_default()("#c-page h1")
      if (h1s.length > 0) {
        jquery_default()(h1s[0]).css('display','none')
      }


      let medium_zoom_content_h1Tag = document.querySelectorAll(".medium-zoom-content h1 a");
      let medium_zoom_content_h2Tag = document.querySelectorAll(".medium-zoom-content h2 a");
      let medium_zoom_content_h3Tag = document.querySelectorAll(".medium-zoom-content h3 a");
      let medium_zoom_content_h4Tag = document.querySelectorAll(".medium-zoom-content h4 a,.medium-zoom-content h5 a,.medium-zoom-content h6 a");

      for (let i = 0; i < medium_zoom_content_h1Tag.length; i++) {
        medium_zoom_content_h1Tag[i].innerText = ''
      }

      for (let i = 0; i < medium_zoom_content_h2Tag.length; i++) {
        if (this.themeProperty.articleH2Icon !== undefined) {
          medium_zoom_content_h2Tag[i].innerText = this.themeProperty.articleH2Icon
        }else {
          medium_zoom_content_h2Tag[i].innerText = "🌸"
        }
      }

      for (let i = 0; i < medium_zoom_content_h3Tag.length; i++) {
        if (this.themeProperty.articleH3Icon !== undefined) {
          medium_zoom_content_h3Tag[i].innerText = this.themeProperty.articleH3Icon
        }else {
          medium_zoom_content_h3Tag[i].innerText = "🐳"
        }
      }

      for (let i = 0; i < medium_zoom_content_h4Tag.length; i++) {
        if (this.themeProperty.articleH4Icon !== undefined) {
          medium_zoom_content_h4Tag[i].innerText = this.themeProperty.articleH4Icon
        }else {
          medium_zoom_content_h4Tag[i].innerText = "⛄"
        }
      }
    })
  }
}));

;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/Page.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/components/Page.vue




;
const Page_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Pagevue_type_script_lang_js, [['ssrRender',Pagevue_type_template_id_52858aee_ssrRender]])

/* harmony default export */ const Page = (Page_exports_);
;// CONCATENATED MODULE: ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-31.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/vuepress-theme-aurora/lib/client/layouts/Layout.vue?vue&type=script&lang=ts







/* harmony default export */ const Layoutvue_type_script_lang_ts = ((0,external_vue_.defineComponent)({
  name: "Layout",
  components: {
    Home: Home/* default */.Z,
    Page: Page,
    Transition: external_vue_.Transition
  },
  props: {
    showPrintTextValue: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  setup() {
    const page = (0,lib/* usePageData */.Vi)();
    const frontmatter = (0,lib/* usePageFrontmatter */.I2)();
    const themeLocale = (0,composables/* useThemeLocaleData */.X6)();
    const shouldShowNavbar = (0,external_vue_.computed)(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = (0,composables/* useSidebarItems */.VU)();
    const isSidebarOpen = (0,external_vue_.ref)(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
      if (isSidebarOpen.value) {
        jquery_default()("#c-sidebar").css("display", "block");
      }
    };
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e) => {
      touchStart.x = e.changedTouches[0].clientX;
      touchStart.y = e.changedTouches[0].clientY;
    };
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStart.x;
      const dy = e.changedTouches[0].clientY - touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80) {
          toggleSidebar(true);
        } else {
          toggleSidebar(false);
        }
      }
    };
    let unregisterRouterHook;
    (0,external_vue_.onMounted)(() => {
      const router = (0,external_vue_router_.useRouter)();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    (0,external_vue_.onUnmounted)(() => {
      unregisterRouterHook();
    });
    const scrollPromise = (0,composables/* useScrollPromise */.P$)();
    const onBeforeEnter = scrollPromise.resolve;
    const onBeforeLeave = scrollPromise.pending;
    return {
      frontmatter,
      page,
      shouldShowNavbar,
      toggleSidebar,
      onTouchStart,
      onTouchEnd,
      onBeforeEnter,
      onBeforeLeave
    };
  },
  created() {
    this.themeProperty = (0,composables/* useThemeData */.BV)().value;
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      next();
    });
  },
  data() {
    return {
      isShow: false,
      animeImg: "",
      headLine: "",
      isShowSideBar: "",
      themeProperty: null
    };
  },
  methods: {
    showPrintText(value) {
      console.log(value);
    },
    getHeadLine(title) {
      this.headLine = title;
    }
  },
  computed: {
    setBackgroundUrl() {
      return "background-image: url(" + this.animeImg + ");";
    },
    getIsHome() {
      const frontmatter = (0,lib/* usePageFrontmatter */.I2)();
      let isHome = frontmatter.value.home;
      this.isShowSideBar = isHome === void 0;
      return this.isShowSideBar;
    }
  }
}));

;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/layouts/Layout.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/vuepress-theme-aurora/lib/client/layouts/Layout.vue




;
const Layout_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Layoutvue_type_script_lang_ts, [['ssrRender',ssrRender]])

/* harmony default export */ const Layout = (Layout_exports_);

/***/ })

};
;
//# sourceMappingURL=892.app.js.map