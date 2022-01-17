import {
  fireEvent, render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

import React from 'react';
import { ZoomableImage } from './index';

const args = {
  image:
        'https://dza2a2ql7zktf.cloudfront.net/binaries-cdn/dqzqcuqf9/image/upload/q_auto,dpr_1.0,h_2000/v1573584787/mfp-fe-artworks/ydurfaqymwjhfc74igj5.jpg',
  thumbnail:
        'https://dza2a2ql7zktf.cloudfront.net/binaries-cdn/dqzqcuqf9/image/upload/q_auto,dpr_1.0,h_900/v1573584787/mfp-fe-artworks/ydurfaqymwjhfc74igj5.jpg',
};

describe('Tests for Zoomable Image component', () => {
  test('Should render the children with zoom wrapper', () => {
    render(
      <ZoomableImage {...args} />,
    );

    expect(screen.getByTestId('thumb-image')).toBeInTheDocument();
  });

  test('Should zoom', async () => {
    window.scroll = () => {};

    render(
     <ZoomableImage {...args} />,
    );

    expect(screen.getByTestId('zoomed-image-container')).not.toHaveClass('visible');
    fireEvent.click(screen.getByTestId('mch-button-icon'));
    expect(screen.getByTestId('zoomed-image-container')).toHaveClass('visible');
  });

  test('Should zoom out', async () => {
    window.scroll = () => {};

    render(
     <ZoomableImage {...args} />,
    );

    fireEvent.click(screen.getByTestId('mch-button-icon'));

    expect(screen.getByTestId('zoomed-image-container')).toHaveClass('visible');

    fireEvent.click(screen.getByTestId('zoomed-image-frame'));

    expect(screen.getByTestId('zoomed-image-frame')).not.toHaveClass('zoomed');
  });
});
