# Getting Started

This is a Bootstrap version of the MCH UI kit.

## Installing

Install dependencies

`yarn install`

## Themes Package

### Editing a theme

Edit the files inside the boostrap folder, in themes package.

### Build the themes package

```
cd packages/themes
yarn build
```

Will be created a dist folder with the css files

There is an option the activate a watch, so it can rebuilt at every save.

```
cd packages/themes
yarn watch
```

Using this option, all the changes made on theme will be reflected on the Storybook

## Running the storybook

```
cd packages/ui-kit
yarn storybook
```

#### IMPORTANT

Please make a theme build before running the storybook

### Build the ui-kit package

```
cd packages/ui-kit
yarn build
```

Will be created a dist folder with the js files

