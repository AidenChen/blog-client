import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Profile"
  },
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const tags = ["JavaScript", "Node.js", "PHP"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile" }, _attrs))} data-v-f748820f><div class="profile-inner" data-v-f748820f><div class="profile-abstract" data-v-f748820f><img src="https://static.aiden-chen.com/blog/guitar.jpg" alt="\u5934\u50CF" class="profile-avatar" data-v-f748820f><p class="profile-name" data-v-f748820f>Aiden Chen</p><p class="profile-slogan" data-v-f748820f>\u4F1A\u5F53\u51FA\u5CAB\u62FF\u82CD\u51A5</p><ul class="profile-tags" data-v-f748820f><!--[-->`);
      ssrRenderList(tags, (tag, index2) => {
        _push(`<li class="profile-tag" data-v-f748820f><span data-v-f748820f>${ssrInterpolate(tag)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="profile-detail" data-v-f748820f><h2 style="${ssrRenderStyle({ "margin-top": "0" })}" data-v-f748820f>\u57FA\u672C\u4FE1\u606F</h2><h3 data-v-f748820f>92\u5E74/\u7537/\u672C\u79D1/\u798F\u5DDE</h3><div data-v-f748820f>\u6211\u4ECE2014\u5E74\u5F00\u59CB\u81EA\u5B66\u524D\u7AEF\u5F00\u53D1\uFF0C\u66FE\u53C2\u4E0E\u8FC7\u8F66\u8054\u7F51\u3001\u5E94\u6025\u6307\u6325\u3001\u6821\u56ED\u5B89\u5168\u3001\u5185\u6CB3\u8239\u8FD0\u3001\u667A\u80FD\u95E8\u8BCA\u3001\u7279\u6B8A\u6559\u80B2\u3001\u6570\u636E\u5206\u6790\u7B49\u591A\u79CD\u884C\u4E1A\u5E94\u7528\u7684\u5F00\u53D1\uFF0C\u5E76\u5728\u591A\u5BB6\u516C\u53F8\u62C5\u4EFB\u8FC7\u524D\u7AEF\u5F00\u53D1\u8D1F\u8D23\u4EBA\u6216\u67B6\u6784\u5E08\u3002</div><h2 data-v-f748820f>\u6280\u672F\u80FD\u529B</h2><div data-v-f748820f>1\uFF09\u719F\u6089\u6D41\u884C\u7684MVVM\u6846\u67B6\u53CA\u5E38\u7528\u5E93\uFF0C\u5F53\u524D\u4E3B\u8981\u6280\u672F\u6808\u662FVue3\u3002\u63A5\u89E6\u8FC7Angular\uFF08\u65E9\u671F\u7248\u672C\uFF09\u53CAReact\uFF08\u7BA1\u7406\u7CFB\u7EDF\u5F00\u53D1\uFF09\uFF0C\u5C0F\u7A0B\u5E8F\uFF08\u539F\u751F\u3001uniapp\uFF09\u53CA\u6DF7\u5408\u5F00\u53D1\u5747\u6709\u6D89\u730E\u3002\u4F7F\u7528Electron\u5F00\u53D1\u8FC7\u684C\u9762\u5E94\u7528\uFF08\u95E8\u8BCA\u7CFB\u7EDF\uFF09\uFF1B</div><div data-v-f748820f>2\uFF093\u5E74\u517C\u4EFB\u540E\u7AEF\u5F00\u53D1\u7ECF\u9A8C\uFF0C\u719F\u6089PHP\u53CANode.js\u540E\u7AEF\u5F00\u53D1\uFF0C\u6709MySQL\u53CAMongoDB\u6570\u636E\u5E93\u7ECF\u9A8C\uFF0C\u719F\u6089\u4F7F\u7528Linux\u7CFB\u7EDF\uFF1B</div><div data-v-f748820f>3\uFF09\u5F00\u53D1\u8FC7\u591A\u4E2A\u5185\u90E8\u4F7F\u7528\u7684\u901A\u7528\u7C7B\u5E93\u3001\u811A\u624B\u67B6\u5DE5\u5177\u3001\u5DE5\u7A0B\u6A21\u677F\uFF0C\u89E3\u51B3\u8FC7\u591A\u5E73\u53F0\u517C\u5BB9\u95EE\u9898\uFF0C\u6709\u5168\u6D41\u7A0B\u5B9E\u73B0\u9879\u76EESEO\u4F18\u5316\u7684\u64CD\u4F5C\u7ECF\u9A8C\uFF1B</div><div data-v-f748820f>4\uFF09\u4E3B\u5BFC\u8FC7\u524D\u7AEF\u56E2\u961F\u7684\u5DE5\u7A0B\u5316\u5EFA\u8BBE\uFF0C\u5177\u6709\u67B6\u6784\u8BBE\u8BA1\u3001\u6280\u672F\u9009\u578B\u3001\u6027\u80FD\u4F18\u5316\u3001\u89C4\u8303\u5236\u5B9A\u7B49\u65B9\u9762\u7684\u7ECF\u9A8C\u3002</div><h2 data-v-f748820f>\u7BA1\u7406\u7ECF\u9A8C</h2><div data-v-f748820f>1\uFF09\u8D85\u8FC75\u5E74\u7684\u56E2\u961F\u7BA1\u7406\u7ECF\u9A8C\uFF0C\u5E26\u9886\u8FC710\u4EBA\u4EE5\u4E0A\u7684\u56E2\u961F\uFF1B</div><div data-v-f748820f>2\uFF09\u7EC4\u7EC7\u5E76\u5F00\u5C55\u4E86\u591A\u6B21\u56E2\u961F\u5185\u7684\u57F9\u8BAD\uFF1B</div><div data-v-f748820f>3\uFF09\u62E5\u6709\u4E30\u5BCC\u7684\u524D\u7AEF\u5F00\u53D1\u56E2\u961F\u5EFA\u8BBE\u7ECF\u9A8C\uFF1B</div><div data-v-f748820f>4\uFF09\u6839\u636E\u4E1A\u52A1\u7279\u6027\u53CA\u4EBA\u624D\u68AF\u961F\u4F18\u5316\u8FC7\u5DE5\u4F5C\u6D41\u7A0B\u3002</div><h2 data-v-f748820f>\u8054\u7CFB\u65B9\u5F0F</h2><div data-v-f748820f>\u90AE\u7BB1\uFF1Aaidenchen@126.com</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("views/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f748820f"]]);

export { index as default };
//# sourceMappingURL=index-bgBycBVR.mjs.map
