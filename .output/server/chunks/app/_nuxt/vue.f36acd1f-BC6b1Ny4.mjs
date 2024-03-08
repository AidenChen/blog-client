import { ref, watchEffect, watch, getCurrentInstance } from 'vue';
import { k as injectHead, r as resolveUnrefHeadInput } from '../server.mjs';

function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  getCurrentInstance();
  return entry;
}

export { useHead as u };
//# sourceMappingURL=vue.f36acd1f-BC6b1Ny4.mjs.map
