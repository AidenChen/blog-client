
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "fa6bc8d6-9c1e-432d-a5e7-e13b7425caae"
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
