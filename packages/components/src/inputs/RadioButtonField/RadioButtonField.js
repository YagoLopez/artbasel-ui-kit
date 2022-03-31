import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Radio } from '../Radio';

const RadioButtonField = ({
  id,
  title,
  description,
  priceLabel,
  tabIndex,
  onChange,
  checked,
  className,
  name,
  disabled,
  ...props
}) => (
  <label
    data-testid="mch-radio-button-field"
    tabIndex={tabIndex}
    className={classNames('radio-button-field-container', className, {
      focus: checked, disabled,
    })}
    htmlFor={id}
  >
    <div className="radio-field-label">
      <Radio
        checked={checked}
        id={id}
        label={title}
        onChange={onChange}
        name={ name }
        disabled={disabled}
        {...props}
      />
      <div className={classNames('radio-label-container', { disabled })}>
        <p className='text-label-large'>{title}</p>
        <p className={classNames('text-small descriptor-text', { disabled })}>{description}</p>
      </div>
    </div>
    <div className={classNames('radio-label-container', { disabled })}>
      <p className="text-label-xlarge">{priceLabel}</p>
    </div>
  </label>
);

RadioButtonField.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priceLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  tabIndex: PropTypes.number,
  className: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
};

RadioButtonField.defaultProps = {
  tabIndex: 0,
  onChange: () => {},
};

export default RadioButtonField;
