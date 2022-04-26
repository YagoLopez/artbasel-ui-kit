import React from 'react';
import '@testing-library/jest-dom';
import {
  cleanup, render, screen, fireEvent,
} from '@testing-library/react';
import OrderCard from './OrderCard';
import example from './OrderCard.example.json';

const Component = (props) => <OrderCard {...props} />;

describe('Test for OrderCard component', () => {
  afterEach(cleanup);

  test('should render the component', () => {
    render(<Component {...example} />);

    expect(screen.getByTestId('mch-order-card')).toBeInTheDocument();
  });

  test('should call onClick function', () => {
    const onClickFn = jest.fn();

    render(<Component {...{ ...example, onClick: onClickFn }} />);
    const card = screen.getByTestId('mch-order-card');

    fireEvent.click(card);
    expect(onClickFn).toHaveBeenCalled();
  });

  test('should not display divider component according to props', () => {
    render(<Component {...{ ...example, borderTop: false, borderBottom: false }} />);
    const divider = screen.queryByTestId('mch-divider');

    expect(divider).not.toBeInTheDocument();
  });

  test('should display divider component according to props', () => {
    render(<Component {...{ ...example, borderTop: true, borderBottom: true }} />);
    const card = screen.getByTestId('mch-order-card');
    const divider = card.querySelectorAll('.divider');

    expect(divider.length).toBe(2);
  });
});
