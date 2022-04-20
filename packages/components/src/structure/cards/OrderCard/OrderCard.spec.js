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

  test('should have correct css classes according to props', () => {
    render(<Component {...{ ...example, borderTop: false }} />);
    const card = screen.getByTestId('mch-order-card');

    expect(card).not.toHaveClass('border-top');
  });
});
