import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../actions/Button';
import StepIndicator from './StepIndicator';

const StepIndicatorDemo = ({ steps, variant }) => {
  const [stepActive, setStepActive] = useState(0);

  return (
    <div>
      <StepIndicator
        activeStep={stepActive}
        stepLabels={steps}
        variant={variant}
        onClickStep={setStepActive}
      />
      <div className='border-top mt-10 py-5'>
        <p className="text-large">Demo Component</p>
        <p className="text-large">Click the buttons to see Step Indicator in Action</p>
      </div>
      <div className='mt-5 d-flex justify-content-between'>
        <Button variant="primary" onClick={() => setStepActive(stepActive - 1)} size="compact" disabled={stepActive === 0}>
          Prev Step
        </Button>
        <Button variant="primary" onClick={() => setStepActive(stepActive + 1)} size="compact" className='ms-5' disabled={stepActive === steps.length + 1}>
          {
            stepActive >= steps.length
              ? 'Finish Steps'
              : 'Next Step'
          }
        </Button>
      </div>
    </div>
  );
};

StepIndicatorDemo.propTypes = {
  steps: PropTypes.array.isRequired,
};

export default StepIndicatorDemo;
