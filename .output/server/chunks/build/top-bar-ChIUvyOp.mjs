import { useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, s as storeToRefs } from './server.mjs';
import { u as useStateStore } from './state-BNlnag8C.mjs';
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

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUWMPt08ERACAIBDEomvqxBh18EQogn9us+HsJAAAAt0BPfQU8A2YKULKSdQAQmpIBAMBm4AAtdCIhmRB8RAAAAABJRU5ErkJggg==";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "TopBar"
  },
  __name: "top-bar",
  __ssrInlineRender: true,
  setup(__props) {
    const stateStore = useStateStore();
    const { selectTags } = storeToRefs(stateStore);
    const clearFilter = () => {
      selectTags.value = [];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "top-bar" }, _attrs))} data-v-001ae99e><div class="top-bar-inner" data-v-001ae99e><nav class="site-nav" data-v-001ae99e><img class="top__menu"${ssrRenderAttr("src", _imports_0)} alt="\u83DC\u5355" data-v-001ae99e><div class="trigger" data-v-001ae99e>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "header-link",
        to: "/posts",
        onClick: clearFilter
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` POSTS `);
          } else {
            return [
              createTextVNode(" POSTS ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        class: "header-link",
        to: "/tags"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`TAGS`);
          } else {
            return [
              createTextVNode("TAGS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_router_link, {
        class: "header-link",
        to: "/profile"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`PROFILE`);
          } else {
            return [
              createTextVNode("PROFILE")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "top__title",
        to: "/home",
        onClick: clearFilter
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Aiden Notes `);
          } else {
            return [
              createTextVNode(" Aiden Notes ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/top-bar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const topBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-001ae99e"]]);

export { topBar as default };
//# sourceMappingURL=top-bar-ChIUvyOp.mjs.map