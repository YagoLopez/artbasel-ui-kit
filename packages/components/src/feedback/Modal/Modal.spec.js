import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

const testElementId = 'mch-modal';

describe('Modal component', () => {
  test('render modal', () => {
    render(
      <Modal show={true} title="Modal">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </Modal>,
    );

    const el = screen.getByTestId(testElementId);

    expect(el).toBeDefined();
  });

  test('Modal filter prop', () => {
    render(
    <Modal show={true} filter title="Modal">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </Modal>,
    );

    const el = screen.getByTestId(testElementId);

    expect(el).toHaveClass('modal-filter');
  });

  test('Modal subline prop', () => {
    const subline = 'Subline (optional)';

    render(
      <Modal show={true} title="Modal" subline={subline}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </Modal>,
    );

    const el = screen.getByTestId(testElementId);

    expect(el).toBeInTheDocument(subline);
  });
});
