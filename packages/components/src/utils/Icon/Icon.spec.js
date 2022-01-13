import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Icon, { IconList } from './Icon';

const testElementId = 'mch-icon';

describe('Icon component', () => {
  test('render one icon', () => {
    render(<Icon name="delete" />);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeDefined();
  });
});

describe('Tests for each Icon component', () => {
  afterEach(cleanup);

  test.each(IconList)('Icon $icon', (icon) => {
    const element = render(<Icon name={icon} />);

    const iconRendered = element.getByTestId(testElementId);

    expect(iconRendered).toBeInTheDocument();
  });
});
