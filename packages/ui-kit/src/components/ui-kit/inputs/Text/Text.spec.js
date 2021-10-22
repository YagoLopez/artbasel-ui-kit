import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Text from './Text';

const testElementId = 'mch-text';

describe('Text component', () => {
  test('render text', () => {
    const label = 'Click me';
    render(<Text>{label}</Text>);

    const el = screen.getByTestId(testElementId);

    expect(el).toBeDefined();
  });

  // test('Text does not break when no prop onClick is passed', () => {
  //   const label = 'Click me';
  //   render(<Text>{label}</Text>);

  //   const el = screen.getByTestId(testElementId);

  //   fireEvent.click(el);
  //   expect(el).toBeDefined();
  // });

  // test('Text disabled prop', () => {
  //   const onClickFn = jest.fn();
  //   const label = 'foo';

  //   render(<Text disabled={true} onClick={onClickFn}>{label}</Text>);

  //   const el = screen.getByTestId(testElementId);

  //   expect(el).toHaveClass('disabled');

  //   fireEvent.click(el);
  //   expect(onClickFn).not.toHaveBeenCalled();
  // });

  // test('click on text with onClick prop', () => {
  //   const onClickFn = jest.fn();
  //   const label = 'foo';
  //   render(<Text onClick={onClickFn}>{label}</Text>);

  //   const el = screen.getByTestId(testElementId);

  //   fireEvent.click(el);
  //   expect(onClickFn).toHaveBeenCalled();
  // });
});
