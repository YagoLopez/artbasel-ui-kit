import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '../../utils/Icon';

const StepIndicator = ({
  activeStep,
  stepLabels,
  onClickStep,
  variant,
}) => {
  if (!stepLabels) {
    return null;
  }

  return (
    <div
      className={classNames('d-flex step-indicator', {
        'flex-column': variant === 'vertical',
      })}
      test-dataid="mch-step-indicator"
    >
      {
        stepLabels.map((step, i) => (
          <div
            key={i}
            className={classNames('d-flex', {
              'w-100': i !== 0 && variant === 'horizontal',
              'flex-column': variant === 'vertical',
            })}
          >
            <div
              className={classNames('d-flex',
                variant === 'horizontal' ? 'container-line' : 'vertical-container-line',
                {
                  'd-none': i === 0,
                  'flex-column': variant === 'vertical',
                })}
            >
              <div className={activeStep >= i ? 'line' : 'line-disabled'} />
            </div>
            <div
              className={classNames('step-indicator-container', {
                pointer: activeStep > i,
              })}
              onClick={(activeStep > i) ? (() => onClickStep(i)) : null}
            >
              <div className={classNames('position-relative', { 'd-flex': variant === 'vertical' })}>
                {
                  activeStep === i
                    && <div
                        className={classNames('d-flex justify-content-center align-items-center background-point-step', {
                          vertical: variant === 'vertical',
                        })}
                      >
                        <div className='active' />
                      </div>
                }
                {
                  activeStep > i
                    && <div
                        className={classNames('d-flex justify-content-center align-items-center background-point-step pointer', {
                          vertical: variant === 'vertical',
                        })}
                        >
                          <Icon name="checkmark" color={'white'} />
                        </div>
                }
                {
                  activeStep < i
                    && <div
                        className={classNames('d-flex justify-content-center align-items-center background-point-step-transparent', {
                          vertical: variant === 'vertical',
                        })}
                        >
                          <div className='inactive' />
                        </div>
                }
                <div className={classNames('d-flex', variant === 'horizontal' ? 'justify-content-center' : 'align-items-center pb-3')}>
                    <p className={classNames('text-center mb-0 text-link position-absolute text-uppercase label-style', {
                      'label-style-disabled': activeStep < i,
                      vertical: variant === 'vertical',
                    })}>{step}</p>
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
  /** A string limited to one of the follows */
  variant: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Called when user clicks on a completed step.
  The clicked step number will be used as argument */
  onClickStep: PropTypes.func.isRequired,
};

StepIndicator.defaultProps = {
  activeStep: 0,
  variant: 'horizontal',
  onClickStep: () => {},
};

export default StepIndicator;
