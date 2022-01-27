import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../actions/Button';
import StepIndicator from './StepIndicator';

const StepIndicatorDemo = ({ steps }) => {
  const [stepActive, setStepActive] = useState(1);

  return (
    <div>
      <StepIndicator activeStep={stepActive} stepLabels={steps} onClickStep={setStepActive} />
      <div className='mt-10 d-flex justify-content-between'>
        <Button variant="primary" onClick={() => setStepActive(stepActive - 1)} size="compact" disabled={stepActive === 1}>
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
