import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { s as storeToRefs, _ as _export_sfc } from "../server.mjs";
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
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "top-bar" }, _attrs))} data-v-9bd8d612><div class="top-bar-inner" data-v-9bd8d612><nav class="site-nav" data-v-9bd8d612><img class="top__menu"${ssrRenderAttr("src", _imports_0)} alt="菜单" data-v-9bd8d612><div class="trigger" data-v-9bd8d612>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "header-link",
        to: "/posts",
        onClick: clearFilter
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` HOME `);
          } else {
            return [
              createTextVNode(" HOME ")
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
        to: "/posts",
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
const topBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9bd8d612"]]);
export {
  topBar as default
};
//# sourceMappingURL=top-bar-Bz5kxpRd.js.map
