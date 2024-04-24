import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Profile"
  },
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const tags = ["JavaScript", "Node.js", "PHP"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile" }, _attrs))} data-v-6f00ffbf><div class="profile-inner" data-v-6f00ffbf><div class="profile-abstract" data-v-6f00ffbf><img src="https://static.aiden-chen.com/blog/guitar.jpg" alt="头像" class="profile-avatar" data-v-6f00ffbf><p class="profile-name" data-v-6f00ffbf>Aiden Chen</p><p class="profile-slogan" data-v-6f00ffbf>会当出岫拿苍冥</p><ul class="profile-tags" data-v-6f00ffbf><!--[-->`);
      ssrRenderList(tags, (tag, index2) => {
        _push(`<li class="profile-tag" data-v-6f00ffbf><span data-v-6f00ffbf>${ssrInterpolate(tag)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="profile-detail" data-v-6f00ffbf></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6f00ffbf"]]);
export {
  index as default
};
//# sourceMappingURL=index-ByPC_zff.js.map
