import React, { useCallback, useState } from 'react';
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
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = useCallback(() => {
    setIsChecked(!isChecked);
    onChange(checked);
  }, [checked, isChecked]);

  return (
    <div
      data-testid="mch-radio-button-field"
      tabIndex={tabIndex}
      onClick={handleChange}
      className={classNames('radioButtonField-container', className, {
        focus: isChecked,
      })}
    >
      <div className="radio-field-label">
        <Radio
          checked={isChecked}
          id={id}
          label={title}
          onChange={onChange}
          name={name}
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
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  tabIndex: PropTypes.number,
  className: PropTypes.string,
  name: PropTypes.string,
};

RadioButtonField.defaultProps = {
  tabIndex: 0,
  onChange: () => {},
};

export default RadioButtonField;
