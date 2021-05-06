module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/no-v-html': 'off', // This rule reports all uses of v-html directive in order to reduce the risk of injecting potentially unsafe / unescaped html into the browser leading to Cross-Site Scripting (XSS) attacks.
    'vue/no-lone-template': 'off', // If you are using Vue.js 3.x and want to define the <template> element intentionally, you will have to turn this rule off or use "ignoreAccessible" option.
    'vue/no-mutating-props': 'off', // This rule reports mutation of component props.
    'nuxt/no-cjs-in-config': 'off',
  },
}
