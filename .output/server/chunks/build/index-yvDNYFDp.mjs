import { _ as _export_sfc, d as useRoute, s as storeToRefs } from './server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { u as useStateStore, m as marked$1 } from './state-C-2bMvco.mjs';
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
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const stateStore = useStateStore();
    const { posts, curPage, allPage } = storeToRefs(stateStore);
    posts.value = [];
    curPage.value = 1;
    allPage.value = 0;
    const tags = ref("");
    if (route.query.tags) {
      tags.value = route.query.tags;
    }
    [__temp, __restore] = withAsyncContext(() => stateStore.indexPost({ tags: tags.value })), await __temp, __restore();
    const compiledMarkdown = (value) => {
      return marked$1.parse(value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "post-list" }, _attrs))} data-v-2484314a><ul class="post-list-inner" data-v-2484314a><!--[-->`);
      ssrRenderList(unref(posts), (post) => {
        var _a;
        _push(`<li class="post-item" data-v-2484314a><p class="post-time" data-v-2484314a>${ssrInterpolate(post.created_at)}</p><h1 class="post-title" data-v-2484314a>`);
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
        _push(`</h1>`);
        if (post.abstract) {
          _push(`<div class="post-abstract markdown-body" data-v-2484314a>${(_a = compiledMarkdown(post.abstract)) != null ? _a : ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (post.abstract) {
          _push(`<p data-v-2484314a>`);
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
          _push(`</p>`);
        } else {
          _push(`<!---->`);
        }
        if (post.tags.length) {
          _push(`<p style="${ssrRenderStyle({ "margin-top": "0" })}" data-v-2484314a><!--[-->`);
          ssrRenderList(post.tags.sort((a, b) => a.name.localeCompare(b.name)), (tag) => {
            _push(`<span class="post-tag" data-v-2484314a>${ssrInterpolate(tag.name)}</span>`);
          });
          _push(`<!--]--></p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2484314a"]]);

export { index as default };
//# sourceMappingURL=index-yvDNYFDp.mjs.map
