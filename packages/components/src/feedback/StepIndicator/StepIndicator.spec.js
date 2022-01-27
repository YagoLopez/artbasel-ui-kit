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
    render(
      <StepIndicator />,
    );

    expect(screen.queryByText(testElementId)).not.toBeInTheDocument();
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
});
