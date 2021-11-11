import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TextLink from './TextLink';

const testElementId = 'mch-text-link';

describe('Text Link component', () => {
  test('render text link', () => {
    render(<TextLink>foo</TextLink>);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeDefined();
  });

  test('Text link does not break when no prop onClick is passed', () => {
    render(<TextLink>foo</TextLink>);

    const el = screen.getByTestId(testElementId);

    fireEvent.click(el);
    expect(el).toBeDefined();
  });

  test('Text link disabled prop', () => {
    render(<TextLink disabled={true}>foo</TextLink>);

    const el = screen.getByTestId(testElementId);

    expect(el).toHaveClass('disabled');
  });
});
