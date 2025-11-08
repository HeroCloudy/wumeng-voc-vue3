module.exports = {
  apps: [
    {
      name: 'voc-portal',
      port: '8080',
      exec_mode: 'cluster',
      instances: '1',
      script: './.output/server/index.mjs',
      env: {
        NUXT_PUBLIC_EDITOR_URL: 'http://1.12.240.190:81/voc-editor',
      },
    },
  ],
}
