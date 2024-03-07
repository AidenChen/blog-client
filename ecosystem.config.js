module.exports = {
  apps: [
    {
      name: 'blog-client',
      port: 80,
      // exec_mode: 'cluster',
      // instances: 'max',
      script: './.output/server/index.mjs',
      'error_file': '/dev/null',
      'out_file': '/dev/null',
      env: {
        NODE_ENV: 'production'
      },
      env_development: {
        NODE_ENV: 'development'
      }
    }
  ]
};
