# vite-admin-start

> The initial vue3 project created with vite


## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - born with fastness!


- 🍍 [State Management via Pinia](https://pinia.vuejs.org)

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - the instant on-demand atomic CSS engine

- 😃 [icons](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 🤙🏻 [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html)enabled

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly


- 🦾 Using TypeScript to ensure strong typing during compilation

- ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest)


<br>

## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.
- [ant-design-vue](https://github.com/vueComponent/ant-design-vue) - 🌈 An enterprise-class UI components based on Ant Design and Vue. 🐜

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### Plugins

- [Vue Router](https://github.com/vuejs/router)
- [Pinia](https://pinia.vuejs.org) - Intuitive, type safe, light and flexible Store for Vue using the composition api
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [`vite-plugin-vue-inspector`](https://github.com/webfansplz/vite-plugin-vue-inspector) - jump to local IDE source code while click the element of browser automatically

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@kriszu/eslint-config](https://github.com/wangsizhu0504/eslint-config), single quotes, no semi.

### Dev tools
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - Unit testing powered by Vite
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)


### Development

```bash
git clone git@github.com:wangsizhu0504/vite-admin-start.git

cd vite-admin-start

pnpm i #  If you don't have pnpm installed, run: npm install -g pnpm

pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

## License

[MIT](./LICENSE) License © 2022-PRESENT [WSZ](https://github.com/wangsizhu0504)
