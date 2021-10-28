/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import Thumbnail from './Thumbnail';

console.error = jest.fn();
const img = 'https://i.postimg.cc/j2jLYjNW/bosque300x450.jpg';

describe('Tests for Thumbnail component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    const result = render(
      <Thumbnail src={img} />
    );
    const thumbnail = result.container.querySelector('.thumbnail');
    expect(thumbnail).toBeInTheDocument();
  });

  test('Should not render the component without required prop', () => {
    render(
      <Thumbnail />
    );
    expect(console.error).toBeCalled();
  });
});