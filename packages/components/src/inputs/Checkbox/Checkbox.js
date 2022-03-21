import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import classNames from 'classnames';

const Checkbox = ({
  align,
  checked,
  className,
  cssInternalPrefix,
  cssStyles,
  disabled,
  id,
  inline,
  isInvalid,
  isValid,
  label,
  onChange,
  value,
  name,
  theme,
}) => (
  <Form.Check
    data-testid="mch-checkbox"
    className={classNames({ disabled }, className, `align-${align}`, theme)}
    checked={checked}
    style={cssStyles}
    disabled={disabled}
    type="checkbox"
    bsPrefix={cssInternalPrefix}
    id={id}
    inline={inline}
    isInvalid={isInvalid}
    isValid={isValid}
    label={label}
    onChange={onChange}
    value={value}
    name={name}
  ></Form.Check>
);

Checkbox.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
  name: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
  checked: PropTypes.bool,
  className: PropTypes.string,
  cssStyles: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  inline: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Checkbox.defaultProps = {
  theme: 'light',
  align: 'right',
  cssInternalPrefix: 'form-check',
  disabled: false,
  inline: false,
  isInvalid: false,
  isValid: false,
  onChange: () => null,
};

export default Checkbox;
