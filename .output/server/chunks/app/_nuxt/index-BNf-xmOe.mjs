import { _ as _export_sfc, i as useRoute, s as storeToRefs } from '../server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref } from 'vue';
import { u as useHead } from './vue.f36acd1f-BC6b1Ny4.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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
    [__temp, __restore] = withAsyncContext(() => stateStore.showPost(route.params.id)), await __temp, __restore();
    useHead({
      title: currentPost.value.title
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "post-detail" }, _attrs))} data-v-373c5c1c><div class="post-detail-inner" data-v-373c5c1c><div class="post-wrapper" data-v-373c5c1c><h1 class="post-title" data-v-373c5c1c>${ssrInterpolate(unref(currentPost).title)}</h1><p class="post-time" data-v-373c5c1c>${ssrInterpolate(unref(currentPost).created_at)}</p><div class="markdown-body" data-v-373c5c1c>${unref(currentPostCompile)}</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/post/post-detail/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-373c5c1c"]]);

export { index as default };
//# sourceMappingURL=index-BNf-xmOe.mjs.map
