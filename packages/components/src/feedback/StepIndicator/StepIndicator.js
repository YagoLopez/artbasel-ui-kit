import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '../../utils/Icon';

const StepIndicator = ({ activeStep, stepLabels, onClickStep }) => {
  if (!stepLabels) {
    return null;
  }

  return (
    <div className='d-flex step-indicator' test-dataid="mch-step-indicator">
      {
        stepLabels.map((step, i) => (
        <div className={classNames('d-flex', { 'w-100': i !== 0 })} key={i}>
            <div className={classNames('d-flex container-line', { 'd-none': i === 0 })}>
            <div className={activeStep >= i ? 'line' : 'line-disabled'} />
          </div>
            <div
              className={classNames('step-indicator-container', {
                pointer: activeStep > i,
              })}
              onClick={(activeStep > i) ? (() => onClickStep(i)) : null}
            >
            <div className='position-relative'>
              {
                activeStep === i
                  && <div className='d-flex justify-content-center align-items-center background-point-step'><div className='active' /></div>
              }
              {
                activeStep > i
                  && <div className='d-flex justify-content-center align-items-center background-point-step pointer'><Icon name="checkmark" color={'white'} /></div>
              }
              {
                activeStep < i
                  && <div className='d-flex justify-content-center align-items-center background-point-step-transparent'><div className='inactive' /></div>
              }
              <div className='d-flex justify-content-center'>
                  <p className={classNames('text-center mb-0 text-link position-absolute text-uppercase label-style', { 'label-style-disabled': activeStep < i })}>{step}</p>
              </div>
            </div>
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
  onClickStep: () => {},
};

export default StepIndicator;
