import React from 'react';
import '@testing-library/jest-dom';
import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import StepIndicator from './StepIndicator';

describe('Tests for Step Indicator component', () => {
  afterEach(cleanup);

  const testElementId = 'mch-step-indicator';

  const data = {
    activeStep: 2,
    stepLabels: ['Start', 'Step 1', 'Step 2', 'Step 3', 'End'],
  };

  test('Should render the component', () => {
    const onClickStep = jest.fn();
    render(
      <StepIndicator {...data} onClickStep={onClickStep} />,
    );
    expect(screen.queryByText(data.stepLabels[0])).toBeInTheDocument();
  });

  test('Should not render component', () => {
    console.error = jest.fn();
    render(
      <StepIndicator />,
    );

    expect(screen.queryByText(testElementId)).not.toBeInTheDocument();
    expect(console.error).toBeCalled();
  });

  test('Should call onClick with correct values', () => {
    const onClickStep = jest.fn();

    render(
      <StepIndicator {...data} onClickStep={onClickStep}/>,
    );

    const el = screen.getByText(data.stepLabels[0]);
    fireEvent.click(el);

    expect(onClickStep).toHaveBeenCalled();
  });

  test('Should have vertical css class according to variant prop', () => {
    const { container } = render(
      <StepIndicator {...data} variant="vertical" />,
    );
    const verticalLineContainer = container.querySelector('.vertical-container-line');
    const horizontalLineContainer = container.querySelector('.container-line');
    const verticalClass = container.querySelectorAll('.vertical');

    expect(verticalLineContainer).toBeInTheDocument();
    expect(horizontalLineContainer).not.toBeInTheDocument();
    expect(verticalClass.length).toBe(10);
  });

  test('Should not have vertical css class according to variant prop', () => {
    const { container } = render(
      <StepIndicator {...data} />,
    );
    const verticalLineContainer = container.querySelector('.vertical-container-line');
    const horizontalLineContainer = container.querySelector('.container-line');
    const verticalClass = container.querySelectorAll('.vertical');

    expect(verticalLineContainer).not.toBeInTheDocument();
    expect(horizontalLineContainer).toBeInTheDocument();
    expect(verticalClass.length).toBe(0);
  });
});
