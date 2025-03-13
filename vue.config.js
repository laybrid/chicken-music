const { defineConfig } = require('@vue/cli-service')
const registerRouter = require('./backend/router')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    onBeforeSetupMiddleware(deserve) {
      registerRouter(deserve.app)
    }
  }
})
