import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../utils/Icon';

const StepIndicator = ({ activeStep, stepLabels, onClickStep }) => {
  if (!stepLabels) {
    return null;
  }

  return (
    <div className='d-flex step-indicator' test-dataid="mch-step-indicator">
      {
        stepLabels.map((step, i) => (
        <div className={`d-flex ${i !== 0 && 'w-100'}`} key={i}>
          <div className={`d-flex container-line ${i === 0 && 'd-none'}`}>
            <div className={activeStep >= i ? 'line' : 'line-disabled'} />
          </div>
          <div className='step-indicator-container' onClick={(activeStep > i) ? (() => onClickStep(i)) : null}>
            <div>
              {
                activeStep === i
                  && <div className='d-flex justify-content-center align-items-center background-point-step'><div className='active' /></div>
              }
              {
                activeStep > i
                  && <div className='d-flex justify-content-center align-items-center background-point-step'><Icon name="checkmark" color={'white'} /></div>
              }
              {
                activeStep < i
                  && <div className='d-flex justify-content-center align-items-center background-point-step-transparent'><div className='inactive' /></div>
              }
            </div>
            <p className={`text-center mb-0 text-link text-uppercase label-style ${activeStep < i && 'label-style-disabled'}`}>{step}</p>
          </div>
        </div>
        ))
      }
    </div>
  );
};

StepIndicator.propTypes = {
  /** The number of the step to be active */
  activeStep: PropTypes.number.isRequired,
  /** An array of string with the step labels */
  stepLabels: PropTypes.array.isRequired,
  /** Called when user clicks on a completed step.
  The clicked step number will be used as argument */
  onClickStep: PropTypes.func.isRequired,
};

StepIndicator.defaultProps = {
  activeStep: 0,
  stepLabels: [],
  onClickStep: () => {},
};

export default StepIndicator;
