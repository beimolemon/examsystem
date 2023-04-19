'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'student',
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: { // 开发环境主要配置
    open: true,
    host: 'localhost', // 后端的接口域名
    port: 8001, // 前端启动的端口
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://8.130.19.2:8000', // 后端接口地址，和后端保持一致
        changeOrigin: true
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack (config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
