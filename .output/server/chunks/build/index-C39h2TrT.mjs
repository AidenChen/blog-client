import { _ as _export_sfc, d as useRoute, s as storeToRefs } from './server.mjs';
import { useSSRContext, defineComponent, watch, resolveComponent, resolveDirective, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useStateStore, m as marked$1 } from './state-DYpu_qa9.mjs';
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
    name: "PostList"
  },
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const stateStore = useStateStore();
    const { posts, selectTags, curPage, allPage } = storeToRefs(stateStore);
    watch(() => selectTags.value, async (val) => {
      const tags = val.map((tag) => tag.id).join(",");
      if (!tags)
        return;
      await stateStore.indexPost({
        tags
      });
    });
    const compiledMarkdown = (value) => {
      return marked$1.parse(value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _directive_load_more = resolveDirective("load-more");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "post-list" }, _attrs))} data-v-db2922fe><ul${ssrRenderAttrs(mergeProps({ class: "post-items" }, ssrGetDirectiveProps(_ctx, _directive_load_more, { selector: ".post-list" })))} data-v-db2922fe><!--[-->`);
      ssrRenderList(unref(posts), (post) => {
        var _a;
        _push(`<li class="post-item" data-v-db2922fe><p class="post-time" data-v-db2922fe>${ssrInterpolate(post.created_at)}</p><h1 class="post-title" data-v-db2922fe>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: "/posts/" + post.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(post.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(post.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h1><div class="post-abstract markdown-body" data-v-db2922fe>${(_a = compiledMarkdown(post.abstract)) != null ? _a : ""}</div><p data-v-db2922fe>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: "/posts/" + post.id,
          class: "post-entry"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Read More... `);
            } else {
              return [
                createTextVNode(" Read More... ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</p><p data-v-db2922fe><!--[-->`);
        ssrRenderList(post.tags.sort((a, b) => a.name.localeCompare(b.name)), (tag) => {
          _push(`<span class="post-tag" data-v-db2922fe>${ssrInterpolate(tag.name)}</span>`);
        });
        _push(`<!--]--></p></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/post/post-list/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-db2922fe"]]);

export { index as default };
//# sourceMappingURL=index-C39h2TrT.mjs.map
