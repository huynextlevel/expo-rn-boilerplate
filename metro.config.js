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
  stringArrayThreshold: 1,
})

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const { obfuscatorPlugin } = require('obfuscator-io-metro-plugin')

const defaultConfig = getDefaultConfig(__dirname)
const { assetExts, sourceExts } = defaultConfig.resolver

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer/react-native'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
  ...jsoMetroPlugin,
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
