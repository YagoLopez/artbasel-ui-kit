import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Radio } from '../Radio';

const RadioButtonField = ({
  id, title, description, priceLabel, tabIndex, onChange, checked, size, className,
}) => {
  const handleChange = useCallback(() => {
    onChange(checked);
  }, [checked]);

  return (
    <div
    data-testid="mch-radio-button-field"
    tabIndex={tabIndex}
    key={checked}
    onClick={handleChange}
    className={classNames('radioButtonField-container', className, size, { focus: checked })}>
        <div className="radio-field-label">
          <Radio
            checked={checked}
            type="radio"
            id={id}
            label={title}
            onChange={onChange}
            />
          <div className="radio-label-container">
            <p className="text-label-large">{title}</p>
            <p className="text-small descriptor-text">{description}</p>
          </div>
        </div>
        <div className="radio-price-container">
          <p className="text-label-xlarge">{priceLabel}</p>
        </div>
    </div>
  );
};

RadioButtonField.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priceLabel: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium']),
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  tabIndex: PropTypes.number,
  className: PropTypes.string,
};

RadioButtonField.defaultProps = {
  tabIndex: 0,
  size: 'medium',
  onChange: () => {},
};

export default RadioButtonField;
