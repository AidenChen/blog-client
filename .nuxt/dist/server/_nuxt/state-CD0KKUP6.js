import { ref, shallowRef, toRef, getCurrentInstance, onServerPrefetch, unref, computed, toValue, reactive } from "vue";
import "hookable";
import "destr";
import { klona } from "klona";
import "devalue";
import { defuFn } from "defu";
import { e as cfg0, f as useNuxtApp, g as asyncDataDefaults, h as createError, j as fetchDefaults, a as useRuntimeConfig, k as defineStore } from "../server.mjs";
import "#internal/nuxt/paths";
import { marked } from "marked";
import hljs from "highlight.js";
import { hash } from "ohash";
const inlineConfig = {
  "nuxt": {}
};
const __appConfig = /* @__PURE__ */ defuFn(cfg0, inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a, _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = !import.meta.prerender || !((_a = nuxtApp.ssrContext) == null ? void 0 : _a._sharedPrerenderCache) ? _handler : () => {
    const value = nuxtApp.ssrContext._sharedPrerenderCache.get(key);
    if (value) {
      return value;
    }
    const promise = nuxtApp.runWithContext(_handler);
    nuxtApp.ssrContext._sharedPrerenderCache.set(key, promise);
    return promise;
  };
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.getCachedData = options.getCachedData ?? getDefaultCachedData;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  options.deep = options.deep ?? asyncDataDefaults.deep;
  options.dedupe = options.dedupe ?? "cancel";
  const hasCachedData = () => options.getCachedData(key, nuxtApp) != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_b = nuxtApp.payload._errors)[key] ?? (_b[key] = null);
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(options.getCachedData(key, nuxtApp) ?? options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer(opts.dedupe ?? options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxtApp.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key, nuxtApp));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = null;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = null;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key].cancelled = true;
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestFetch() {
  var _a;
  return ((_a = useRequestEvent()) == null ? void 0 : _a.$fetch) || globalThis.$fetch;
}
function useFetch(request2, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request2));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request2) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    if (timeoutLength) {
      setTimeout(() => controller.abort(), timeoutLength);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const renderer = new marked.Renderer();
marked.setOptions({
  renderer,
  pedantic: false,
  gfm: true,
  breaks: false,
  highlight: function(code, lang) {
    if (!lang) {
      return hljs.highlightAuto(code).value;
    }
    return hljs.highlight(lang, code).value;
  }
});
const requestFailed = (response) => {
  if (!response) {
    return [true, "网络不佳,请刷新后重试"];
  }
  const { code, message } = response._data;
  if (code !== 200) {
    return [true, message];
  }
  return [false];
};
const request = async (options) => {
  const appConfig = useAppConfig();
  const runtimeConfig = useRuntimeConfig();
  const url = options.url;
  const key = hash(JSON.stringify(options) + url);
  const apiBase = runtimeConfig.public.apiBase;
  const defaultOptions = {
    baseURL: apiBase + appConfig.api.prefix,
    timeout: appConfig.api.timeout,
    credentials: "omit",
    // "include" | "omit" | "same-origin"分别代表始终携带cookie、始终不带cookie、同源携带cookie
    headers: appConfig.api.commonHeaders,
    retry: false
  };
  defaultOptions.onRequest = (context) => {
    const { options: options2 } = context;
    if (options2.method !== "GET" && options2.data) {
      options2.body = options2.data;
      delete options2.data;
    }
  };
  defaultOptions.onResponse = (context) => {
    const { response } = context;
    if (response && response.status === 200) {
      requestFailed(response);
    }
  };
  const newOptions = { ...defaultOptions, ...options };
  const { error, data } = await useFetch(url, { ...newOptions, key }, "$qGUfnIrLvb");
  const errorValue = error.value ?? {};
  const dataValue = data.value ? data.value : {};
  return { error: errorValue, data: dataValue };
};
const getPostList = (params) => request({
  url: "posts",
  method: "get",
  params
});
const getPostDetail = (id) => request({
  url: `posts/${id}`,
  method: "get"
});
const getTagList = () => request({
  url: "tags",
  method: "get"
});
const useStateStore = defineStore("state", () => {
  const currentPost = ref({
    id: "",
    content: ""
  });
  const currentPostCompile = ref("");
  const posts = ref([]);
  const tags = ref([]);
  const selectTags = ref([]);
  const total = ref(0);
  const allPage = ref(0);
  const curPage = ref(0);
  const searchTags = computed(() => {
    return selectTags.value.map((item) => item.id);
  });
  const indexPost = async ({ tags: tags2 = "", index = 1, size = 10 } = {}) => {
    var _a;
    const { error, data } = await getPostList({ tags: tags2, index, size });
    if (error == null ? void 0 : error.message) {
      return;
    }
    posts.value = ((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.items) ?? [];
    total.value = data == null ? void 0 : data.data.total;
    const count = Math.ceil(total.value / size);
    let stateAllPage = count;
    let stateCurPage = index;
    if (isNaN(+count)) {
      stateAllPage = 0;
    }
    if (isNaN(+index)) {
      stateCurPage = 0;
    }
    allPage.value = +stateAllPage;
    curPage.value = +stateCurPage;
  };
  const showPost = (id) => {
    return new Promise((resolve) => {
      let post = posts.value.find((item) => item.id === id);
      if (!post && currentPost.value.id === id) {
        post = currentPost.value;
      }
      if (post && post.content) {
        currentPost.value = post;
        currentPostCompile.value = marked(currentPost.value.content);
        resolve(post);
      }
      getPostDetail(id).then((res) => {
        currentPost.value = res.data.data;
        currentPostCompile.value = marked(currentPost.value.content);
        resolve(res);
      });
    });
  };
  const indexTag = () => {
    return new Promise((resolve) => {
      getTagList().then((res) => {
        tags.value = res.data.data.items;
        resolve(res);
      });
    });
  };
  return {
    posts,
    tags,
    total,
    curPage,
    allPage,
    selectTags,
    searchTags,
    currentPost,
    currentPostCompile,
    indexPost,
    showPost,
    indexTag
  };
});
export {
  useStateStore as u
};
//# sourceMappingURL=state-CD0KKUP6.js.map
