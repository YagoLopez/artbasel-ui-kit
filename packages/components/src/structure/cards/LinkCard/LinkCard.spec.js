import React from 'react';
import '@testing-library/jest-dom';
import {
  cleanup, render, screen, fireEvent,
} from '@testing-library/react';
import LinkCard from './LinkCard';
import example from './LinkCard.example.json';

const Component = (props) => <LinkCard {...props} />;

describe('Test for LinkCard component', () => {
  afterEach(cleanup);

  const defaultProps = {
    title: example.title,
  };

  test('should render the component', () => {
    render(<Component {...defaultProps} />);

    const [firstEl] = screen.queryAllByText(example.title);

    expect(firstEl).toBeInTheDocument();
  });

  test('should call onClick function', () => {
    const onClickFn = jest.fn();

    render(<Component {...{ ...defaultProps, onClick: onClickFn }} />);

    const el = screen.getByTestId('mch-link-card');

    fireEvent.click(el);
    expect(onClickFn).toHaveBeenCalled();
  });

  test('should not render secondary variant styles', () => {
    const container = render(<Component {...defaultProps} />);

    expect(
      container.container.querySelector('.secondary'),
    ).not.toBeInTheDocument();
  });

  test('when render secondary variant then should render secondary variant styles', () => {
    const container = render(
      <Component {...{ ...defaultProps, variant: 'secondary' }} />,
    );

    expect(container.container.querySelector('.secondary')).toBeInTheDocument();
  });

  test('when show description is true then should render description', () => {
    render(
      <Component
        {...{
          ...defaultProps,
          showDescription: true,
          description: example.description,
        }}
      />,
    );

    expect(screen.getByText(example.description)).toBeInTheDocument();
  });
});
