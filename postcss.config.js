module.exports = {
  plugins: [
    require('postcss-image-set-polyfill'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      browsers: 'last 2 versions',
      stage: 3,
    }),
    // Adds PostCSS Normalize as the reset css with default options,
    // so that it honors browserslist config in package.json
    // which in turn let's users customize the target behavior as per their needs.
    require('postcss-normalize'),
    require('postcss-pxtorem')({
      rootValue: 37.5,
      propList: ['*'],
      selectorBlackList: ['html'],
    }),
  ],
}
