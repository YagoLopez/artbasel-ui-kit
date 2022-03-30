import React from 'react';
import '@testing-library/jest-dom';
import {
  cleanup, render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import { act } from 'react-test-renderer';
import SharingButton from './SharingButton';

describe('Test for SharingButton component', () => {
  afterEach(cleanup);

  test('Should render the component', () => {
    render(
      <SharingButton
        media={['facebook', 'whatsapp']}
      />,
    );

    expect(screen.getByTestId('mch-contextual-menu')).toBeInTheDocument();
  });

  test('Should render 2 options with correct labels', async () => {
    const { container } = render(
      <SharingButton
        media={['whatsapp', 'facebook']}
      />,
    );

    const button = container.querySelector('.dropdown-toggle');

    await waitFor(() => fireEvent.click(button));
    const options = container.querySelectorAll('.mch-contextual-item');

    const wpp = options[0].querySelector('span');
    const fb = options[1].querySelector('span');

    expect(options.length).toBe(2);
    expect(fb.innerHTML).toBe('Facebook');
    expect(wpp.innerHTML).toBe('WhatsApp');
  });
});
