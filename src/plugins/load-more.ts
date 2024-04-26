import type { Directive } from 'vue';

const loadMore: Directive = {
  mounted (el: HTMLElement, binding: any) {
    const handleScroll = () => {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      const scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      if (scrollHeight - (scrollTop + clientHeight) <= 0.5) {
        el.dispatchEvent(new CustomEvent('load-more'))
      }
    }
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll);
  },
  // unmounted (el: HTMLElement, binding: any) {
  //   const { dir } = binding;
  //   window.removeEventListener('scroll', dir.handleScroll);
  // },
  getSSRProps () {
    return {};
  }
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('loadMore', loadMore);
});
