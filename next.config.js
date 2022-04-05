const withAntdLess = require('next-plugin-antd-less')
// const withCSS = require('@zeit/next-css')

module.exports = {
  // Or better still you can specify a path to a file
  lessVarsFilePath: './styles/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },

  // Other Config Here...

  webpack(config) {
    return config
  },

  // ONLY for Next.js 10, if you use Next.js 11, delete this block
  future: {
    webpack5: true,
  },
}
