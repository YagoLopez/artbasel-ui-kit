import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import ZoomViewer from './ZoomViewer';

const Component = <ZoomViewer.Gallery data-testid="zoom-gallery">
    <ZoomViewer.Item
      original="https://dza2a2ql7zktf.cloudfront.net/binaries-cdn/dqzqcuqf9/image/upload/q_auto,dpr_1.0,h_300/v1573584787/mfp-fe-artworks/ydurfaqymwjhfc74igj5.jpg"
      thumbnail="https://dza2a2ql7zktf.cloudfront.net/binaries-cdn/dqzqcuqf9/image/upload/q_auto,dpr_1.0,h_300/v1573584787/mfp-fe-artworks/ydurfaqymwjhfc74igj5.jpg"
      width="3538"
      height="3000"
    >
      {({ ref, open }) => (
        <a onClick={open}>
          <img
            ref={ ref }
            data-testid="thumbnail"
            src="https://dza2a2ql7zktf.cloudfront.net/binaries-cdn/dqzqcuqf9/image/upload/q_auto,dpr_1.0,h_300/v1573584787/mfp-fe-artworks/ydurfaqymwjhfc74igj5.jpg"
          />
        </a>
      )}
    </ZoomViewer.Item>
  </ZoomViewer.Gallery>;

describe('ZoomViewer component', () => {
  const fullScreenClasses = 'pswp--open pswp--visible';

  beforeEach(() => {
    render(Component);
  });

  it('Renders gallery', () => {
    const zoomGallery = screen.getByTestId('zoom-gallery');
    expect(zoomGallery).toBeInTheDocument();
  });

  it('Not full screen before clicking the thumbnail', () => {
    expect(screen.getByTestId('zoom-gallery')).not.toHaveClass(fullScreenClasses);
  });

  it('Goes full screen when clicking the thumbnail', () => {
    fireEvent.click(screen.getByTestId('thumbnail'));
    expect(screen.getByTestId('zoom-gallery')).toHaveClass(fullScreenClasses);
  });
});
