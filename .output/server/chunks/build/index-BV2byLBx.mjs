import { _ as _export_sfc, d as useRoute, s as storeToRefs } from './server.mjs';
import { useSSRContext, defineComponent, ref, computed, withAsyncContext, mergeProps, unref } from 'vue';
import { u as useHead } from './index-BabADJUJ.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useStateStore } from './state-CPQcwJkB.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'marked';
import 'highlight.js';
import 'marked-highlight';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "PostDetail"
  },
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const stateStore = useStateStore();
    const { currentPost, currentPostCompile } = storeToRefs(stateStore);
    const catalog = ref([]);
    const listHeight = ref([]);
    const scrollY = ref(0);
    const currentIndex = computed(() => {
      for (let i = 0; i < listHeight.value.length; i += 1) {
        const height1 = listHeight.value[i];
        const height2 = listHeight.value[i + 1];
        if (!height2 || scrollY.value >= height1 && scrollY.value < height2) {
          return i;
        }
      }
      return 0;
    });
    ref(null);
    ref(null);
    [__temp, __restore] = withAsyncContext(() => stateStore.showPost(route.params.id)), await __temp, __restore();
    useHead({
      title: currentPost.value.title
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "post-detail" }, _attrs))} data-v-66610f03><div class="post-detail-inner" data-v-66610f03><div class="catalog" data-v-66610f03><div class="catalog-inner" data-v-66610f03><p class="catalog-title" style="${ssrRenderStyle(unref(catalog).length ? null : { display: "none" })}" data-v-66610f03>CATALOG</p><ul class="catalog-items" data-v-66610f03><!--[-->`);
      ssrRenderList(unref(catalog), (item, index2) => {
        _push(`<li class="${ssrRenderClass(["catalog-item-" + item.tagName, "catalog-item"])}" data-v-66610f03><a class="${ssrRenderClass([{ "catalog-link-active": index2 === unref(currentIndex) }, "catalog-link"])}"${ssrRenderAttr("href", item.href)} data-v-66610f03>${ssrInterpolate(item.text)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="post-wrapper" data-v-66610f03><h1 class="post-title" data-v-66610f03>${ssrInterpolate(unref(currentPost).title)}</h1><p class="post-time" data-v-66610f03>${ssrInterpolate(unref(currentPost).created_at)}</p><div class="markdown-body" data-v-66610f03>${(_a = unref(currentPostCompile)) != null ? _a : ""}</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/post/post-detail/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-66610f03"]]);

export { index as default };
//# sourceMappingURL=index-BV2byLBx.mjs.map
