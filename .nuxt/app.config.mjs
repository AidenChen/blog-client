
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "488f2d18-d862-447a-b0e7-9a347b68d204"
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
