import { u as useRouter, s as storeToRefs, _ as _export_sfc } from "../server.mjs";
import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { u as useStateStore } from "./state-CD0KKUP6.js";
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
import "marked";
import "highlight.js";
import "ohash";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRouter();
    const stateStore = useStateStore();
    const { tags } = storeToRefs(stateStore);
    [__temp, __restore] = withAsyncContext(() => stateStore.indexTag()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tag" }, _attrs))} data-v-6ffd823e><ul class="tag-items" data-v-6ffd823e><!--[-->`);
      ssrRenderList(unref(tags), (tag, index2) => {
        _push(`<li class="tag-item" data-v-6ffd823e><span data-v-6ffd823e>${ssrInterpolate(tag.name)}</span></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/tag/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6ffd823e"]]);
export {
  index as default
};
//# sourceMappingURL=index-CifWrHbu.js.map
