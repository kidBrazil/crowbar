// babel.config.js
module.exports = {
  presets: [
    ['@vue/app', {
      useBuiltIns: "entry",
      targets: {
        "android": "4.4",
        "chrome": "49",
        "edge": "16",
        "firefox": "52",
        "ie": "11",
        "ios": "8",
        "safari": "9"
      },
      polyfills: [
        'es7.object.entries',
        'es6.promise',
        'es6.array.iterator',
        'es6.symbol',
        'es6.object.assign'
      ],
      plugins: ["@babel/plugin-transform-parameters"]
    }]
  ]
}
