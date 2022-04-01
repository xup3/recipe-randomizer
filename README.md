# recipe-randomizer

Let's you once and for all randomize your meals for whatever timeframe you can think about.

Features:

- [ ] You can copy and paste recipes from your favorite recipe website directly into the app
- [ ] The app saves recipes you've already eaten as a history to not repeat your recipes within a given timeframe
- [ ] API interface to integrate a 'add to recipe randomizer' button for recipe websites
- [ ] You can take pictures of your meals and add them to your recipes to remember how good they looked
- [ ] Ratings for your recipes will make it clear who's your favorite
- [ ] Create a shopping/grocery list from one or multiple recipes and send it to your favorite partner (human or app, doesn't matter)
- [ ] Add tags to your recipes like "Yummy", "Vegan only" or whatever you like
- [ ] You can also add a comfy/fuel status to your recipes to remember how good you felt after eating it
- [ ] Also pricepoints of recipes can be added
- [ ] If you want, you can also randomize recipes for a given date in the future or even for a timeframe (multiple dates)
- [ ] Share your accounts with your family, friends or whoever you like

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
