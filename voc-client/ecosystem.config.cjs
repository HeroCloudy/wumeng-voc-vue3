module.exports = {
  apps: [
    {
      name: 'voc-client',
      port: '9090',
      exec_mode: 'cluster',
      instances: '1',
      script: './.output/server/index.mjs',
      env: {
        NUXT_PUBLIC_API_URL: 'http://1.12.240.190:81/voc-api/api',
      },
    },
  ],
}
