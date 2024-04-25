import type { Directive } from 'vue';

const loadMore: Directive = {
  mounted (el: HTMLElement, binding: any) {
    const defaultOptions = {
      selector: ''
    }
    const config = Object.assign({}, defaultOptions, binding.value)
    const element = config.selector ? document.querySelector(config.selector) : el

    const handleScroll = () => {
      const scrollTop = element.scrollTop
      const scrollHeight = element.scrollHeight
      const clientHeight = element.clientHeight
      if (scrollTop + clientHeight >= scrollHeight) {
        el.dispatchEvent(new CustomEvent('load-more'))
      }
    };

    element.removeEventListener('scroll', handleScroll);
    element.addEventListener('scroll', handleScroll);
  },
  getSSRProps () {
    return {};
  }
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('loadMore', loadMore);
});
