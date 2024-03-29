import { useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Home"
  },
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-712f24e8><div class="home-content" data-v-712f24e8><h1 class="home-title" data-v-712f24e8>Aiden Chen</h1><h4 class="home-description" data-v-712f24e8>Think twice &amp; Code once</h4><p data-v-712f24e8>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "home-link",
        to: "/posts"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><p data-v-712f24e8><a class="home-link" target="_blank" href="https://github.com/AidenChen" data-v-712f24e8>Github</a></p><p data-v-712f24e8><a class="home-link" target="_blank" href="https://music.163.com/#/djradio?id=6908010" data-v-712f24e8>Radio</a></p></div><p class="home-footer" data-v-712f24e8>Copyright \xA9 Aiden Chen 2024 <a href="https://beian.miit.gov.cn/" target="_blank" data-v-712f24e8>\u7CA4ICP\u590718011597\u53F7</a></p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/home/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-712f24e8"]]);

export { index as default };
//# sourceMappingURL=index-BKxHwjcx.mjs.map
