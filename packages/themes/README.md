# Themes

## Description

Collection of custom bootstrap themes using Sass.

## Installation

```
yarn add @mch-ui-kit/themes
```

```
npm --save install @mch-ui-kit/themes
```

## Themes
- artbasel

## Structure
- bootstrap/
  - {theme}/
    - resources/                -> Resources required by the theme in base 64.
    - scss/                     -> Custom scss and mixers.
    - variables/                -> Redefinition and new variables.
    - {theme}_isolate.scss      -> Theme configuration for isolate usage.
    - {theme}.scss              -> Full theme configuration.
- dist/
  - {theme}/
    - {theme}_isolate.css
    - {theme}.css

## Usage

```jsx
import '@mch-ui-kit/themes/dist/artbasel/artbasel.css';

<h1>Sample Text</h1>
<button className="btn btn-secondary"></button>
```