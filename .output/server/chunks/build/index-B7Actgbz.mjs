import { _ as _export_sfc, d as useRoute, s as storeToRefs } from './server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, watchEffect, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useStateStore, m as marked$1 } from './state-BNlnag8C.mjs';
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
    const { posts, selectTags, searchTags } = storeToRefs(stateStore);
    if (route.query.tags) {
      selectTags.value = [{ id: route.query.tags }];
    } else {
      [__temp, __restore] = withAsyncContext(() => stateStore.indexPost()), await __temp, __restore();
    }
    watchEffect(async () => {
      await stateStore.indexPost({
        tags: searchTags.value.join(",")
      });
    });
    const compiledMarkdown = (value) => {
      return marked$1.parse(value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "post-list" }, _attrs))} data-v-215cffce>`);
      if (unref(posts).length !== 0) {
        _push(`<ul class="post-items" data-v-215cffce><!--[-->`);
        ssrRenderList(unref(posts), (post, index2) => {
          var _a;
          _push(`<li class="post-item" data-v-215cffce><p class="post-time" data-v-215cffce>${ssrInterpolate(post.created_at)}</p><h1 class="post-title" data-v-215cffce>`);
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
          _push(`</h1><div class="post-abstract markdown-body" data-v-215cffce>${(_a = compiledMarkdown(post.abstract)) != null ? _a : ""}</div><p data-v-215cffce>`);
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
          _push(`</p><p data-v-215cffce><!--[-->`);
          ssrRenderList(post.tags, (tag, index22) => {
            _push(`<span class="post-tag" data-v-215cffce>${ssrInterpolate(tag.name)}</span>`);
          });
          _push(`<!--]--></p></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/post/post-list/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-215cffce"]]);

export { index as default };
//# sourceMappingURL=index-B7Actgbz.mjs.map