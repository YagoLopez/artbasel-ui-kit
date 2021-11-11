# Components

## Description

React UI components.

## Installation

```
yarn add @mch-ui-kit/components
```

```
npm --save install @mch-ui-kit/components
```

Additionally install the peer dependencies (if not present)

```
yarn add react
```

```
npm --save install react
```

## Components
### Actions
  - Button
  - ButtonBackToTop
  - ButtonFilter
  - ButtonIcon
  - ButtonToggle
  - TextLink

### Feedback
  - Modal
  - Snackbar

### Inputs
  - Checkbox
  - Dropdown
  - Email
  - Password
  - Radio
  - Search
  - Switch
  - Text
  - TextArea

### Structure
  - Accordions
  - Cards
  - Grid
  - ProductTitle

## Usage

```jsx
import { Button } from '@mch-ui-kit/components';

const Example = () => {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
    </div>
  );
};

export default Example;
```