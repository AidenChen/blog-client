
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "20a3891c-f6d1-4f7b-96f2-0ee5b9a67774"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/aiden/Documents/code/blog/blog-client/src/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, inlineConfig)
