import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

const testElementId = 'mch-modal-header';

const onHideMock = jest.fn();

describe('Header component', () => {
  test('render Modal Header', () => {
    render(<Header title="test" subline="optional" filter={true} onHide={onHideMock}/>);
    const el = screen.getByTestId(testElementId);
    expect(el).toBeDefined();
  });
});
