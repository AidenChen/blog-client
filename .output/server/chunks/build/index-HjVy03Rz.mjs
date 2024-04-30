import { _ as _export_sfc, u as useRouter, s as storeToRefs } from './server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useStateStore } from './state-DbRa7TEM.mjs';
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
    name: "Tag"
  },
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRouter();
    const stateStore = useStateStore();
    const { tags } = storeToRefs(stateStore);
    [__temp, __restore] = withAsyncContext(() => stateStore.indexTag()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tag" }, _attrs))} data-v-86d36b96><ul class="tag-inner" data-v-86d36b96><!--[-->`);
      ssrRenderList(unref(tags), (tag, index2) => {
        _push(`<li class="tag-item" data-v-86d36b96><span data-v-86d36b96>${ssrInterpolate(tag.name)}</span></li>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-86d36b96"]]);

export { index as default };
//# sourceMappingURL=index-HjVy03Rz.mjs.map
