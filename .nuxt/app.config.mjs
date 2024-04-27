
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "00d698a2-5dcf-412f-b39e-cfeb01684f39"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "E:/workspace/code/blog/blog-client/src/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, inlineConfig)
