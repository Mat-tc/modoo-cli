const CracoEnvPlugin = require('craco-plugin-env')

const path = require('path')
module.exports = {
  plugins: [
    {
      plugin: CracoEnvPlugin,
      options: {
        variables: {},
      },
    },
  ],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@css': path.resolve(__dirname, 'src/css'),
      '@page': path.resolve(__dirname, 'src/pages'),
    },
  },
  style: {
    postcss: {
      plugins: [require('postcss-nested'), require('autoprefixer')],
    },
  },
}
