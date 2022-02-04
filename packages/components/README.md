# Components

## Description

React UI components.

## Installation

```
yarn add @mch-group/uikit-components
```
or
```
npm --save install @mch-group/uikit-components
```

Additionally install the peer dependencies (if not present)

```
yarn add react
```
or
```
npm --save install react
```

## Usage

```jsx
import { Button } from '@mch-group/uikit-components';

const Example = () => {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
    </div>
  );
};

export default Example;
```

## Available components

To check avaliable components, please run the Storybook:

```
yarn storybook
```
or 
```
npm run storybook
```

This will start a local server running Storybook with demos and documentation for all available components, avalaible on 

```
http://localhost:6006
```