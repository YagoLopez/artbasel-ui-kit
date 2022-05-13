import React from 'react';
import '@testing-library/jest-dom';
import {
  cleanup,
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import ReusableBanner from './ReusableBanner';
import { example } from './ReusableBanner.example';

describe('Tests for Step Indicator component', () => {
  afterEach(cleanup);

  const testElementId = 'reusable-banner';

  test('Should not render component', () => {
    render(
      <ReusableBanner />,
    );

    expect(screen.queryByText(testElementId)).not.toBeInTheDocument();
  });

  test('Should render the component', () => {
    render(
      <ReusableBanner {...example} />,
    );
    expect(screen.queryByText(example.eyebrow)).toBeInTheDocument();
  });

  test('Should call onClick with correct values', () => {
    render(
      <ReusableBanner {...example} />,
    );

    const el = screen.queryByText(example.primaryButton.label);
    fireEvent.mouseOver(el);

    expect(el).toHaveClass('hover-button');
  });
});
