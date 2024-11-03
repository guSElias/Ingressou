const { configure } = require('quasar/wrappers');

module.exports = configure(function (/* ctx */) {
  return {
    // app boot file (/src/boot)
    boot: ['supabase'],

    css: ['app.css'],

    extras: [
      'roboto-font', // optional
      'material-icons', // optional
    ],

    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node20',
      },
      vueRouterMode: 'hash',
      vitePlugins: [
        [
          'vite-plugin-checker',
          {
            vueTsc: {
              tsconfigPath: 'tsconfig.vue-tsc.json',
            },
            eslint: {
              lintCommand: 'eslint "./**/*.{js,ts,mjs,cjs,vue}"',
            },
          },
          { server: false },
        ],
      ],
    },

    devServer: {
      open: true, // opens browser window automatically
    },

    framework: {
      config: {
        brand: {
          primary: '#e1c340',
          secondary: '#f5f5f5',
          accent: '#9C27B0',
          dark: '#1d1d1d',
          'dark-page': '#121212',
          positive: '#4caf50',
          negative: '#e53935',
          info: '#42a5f5',
          warning: '#ffb300',
        },
      },

      plugins: ['Notify'], // Adicione o plugin Notify aqui
    },

    animations: [],

    ssr: {
      pwa: false,
      prodPort: 3000,
      middlewares: ['render'],
    },

    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
    },

    cordova: {},

    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: {
        appId: 'ingressou',
      },
    },

    bex: {
      contentScripts: ['my-content-script'],
    },
  };
});
