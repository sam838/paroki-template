module.exports = {
  apps: [
    {
      name: 'filsafatwm-nuxt',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}