const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
const obfuscatorIoMetroPlugin = require('obfuscator-io-metro-plugin')({
  compact: false,
  sourceMap: false,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 1,
  numbersToExpressions: true,
  simplify: true,
  stringArrayShuffle: true,
  splitStrings: true,
  stringArrayThreshold: 1,
}, {
  runInDev: false,
  logObfuscatedFiles: true,
});

const config = mergeConfig(getDefaultConfig(__dirname), {
  transformer: {
    minifierPath: 'metro-minify-terser',
    minifierConfig: {
      // Add any additional Terser configuration here
    },
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  ...obfuscatorIoMetroPlugin, // Add this to your previous module configuration
});

module.exports = wrapWithReanimatedMetroConfig(
  withNativeWind(config, { input: './global.css' }),
);
