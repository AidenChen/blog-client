export default defineAppConfig({
  /* 总体运作方式的配置 */
  nameSpace: 'blog-client',
  /* 网络请求相关配置 */
  api: {
    prefix: 'api', // 接口前缀
    timeout: 120000, // 默认120秒超时
    commonHeaders: {} // 公共请求头
  },
  /* 辅助开发的flag */
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV !== 'development'
});
