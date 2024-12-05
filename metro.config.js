const jsoMetroPlugin = require('obfuscator-io-metro-plugin')({
  // for these option look javascript-obfuscator library options from  above url
  compact: false,
  sourceMap: false,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 1,
  numbersToExpressions: true,
  simplify: true,
  shuffleStringArray: true,
  splitStrings: true,
  stringArrayThreshold: 1
})

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const defaultSourceExts = require('metro-config/src/defaults/defaults').sourceExts
const defaultAssetExts = require('metro-config/src/defaults/defaults').assetExts
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

module.exports = mergeConfig(getDefaultConfig(__dirname), {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      assetExts: defaultAssetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...defaultSourceExts, 'svg'],
    },
    ...jsoMetroPlugin
})
