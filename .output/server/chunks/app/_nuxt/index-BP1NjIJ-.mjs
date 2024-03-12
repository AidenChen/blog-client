import { _ as _export_sfc, u as useRouter, s as storeToRefs } from '../server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useStateStore } from './state-BCyuQfVS.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../../nitro/node-server.mjs';
import 'fs';
import 'path';
import 'unhead';
import 'vue-router';
import 'marked';

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

export { index as default };
//# sourceMappingURL=index-BP1NjIJ-.mjs.map
