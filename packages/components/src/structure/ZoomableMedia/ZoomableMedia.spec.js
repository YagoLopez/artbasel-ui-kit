import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

import React from 'react';
import { ZoomableMedia } from './index';

describe('Tests for Zoomable Media component', () => {
  test('Should render the children with zoom wrapper', () => {
    render(
      <ZoomableMedia>
        <div>My content</div>
      </ZoomableMedia>,
    );

    expect(screen.getByText('My content')).toBeInTheDocument();
    expect(screen.getByTestId('zoomed-content').children[0]).toHaveAttribute(
      'data-rmiz-wrap',
      'visible',
    );
  });

  test('Should zoom', async () => {
    window.scroll = () => {};
    render(
      <ZoomableMedia>
        <div>My content</div>
      </ZoomableMedia>,
    );

    fireEvent.click(screen.getByTestId('zoomed-content'));
    expect(screen.queryByRole('dialog')).toBeDefined();
  });

  describe('Zoomed content', () => {
    beforeEach(() => {
      window.scroll = () => {};
      render(
        <ZoomableMedia>
          <div>My content</div>
        </ZoomableMedia>,
      );
      fireEvent.click(screen.getByTestId('zoomed-content'));
      expect(screen.queryByRole('dialog')).toBeDefined();
    });

    test('Should unzoom', async () => {
      fireEvent.click(screen.queryByRole('dialog').children[1]);

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });
  });
});
