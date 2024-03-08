import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "top-bar"
declare module "../../node_modules/.pnpm/nuxt@3.10.3_sass@1.71.1_vite@5.1.4/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}