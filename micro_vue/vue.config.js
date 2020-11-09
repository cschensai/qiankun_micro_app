module.exports = {
  publicPath: 'http://localhost:7200/',
  configureWebpack: {
    output: {
      library: 'vueApp',
      libraryTarget: 'umd',
    },
  },
  devServer: {
    port: 7200,
    headers: {
      // 解决跨域
      'Access-Control-Allow-Origin': '*'
    }
  }
}