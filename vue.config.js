const autoprefixer = require('autoprefixer');
const postcss_px2rem = require('postcss-px2rem');

const port = process.env.port || process.env.npm_config_port || 8835

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  publicPath: './',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [autoprefixer(), postcss_px2rem({
          remUnit: 37.5,
          propList: ['*']
        })]
      },
      sass: {
          sourceMap: true
      }
    }
  },
  devServer: {
    port: port,
    open: false,
    disableHostCheck: true,
    compress: true,
    hot: true,
    // proxy: {
    //   '/mf': {
    //     target: 'https://monitorf.shwawo.com/',
    //     ws: true,
    //     changeOrigin: true
    //   }
    // }
  },
};