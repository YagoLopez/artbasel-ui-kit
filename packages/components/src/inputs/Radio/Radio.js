import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import classNames from 'classnames';

const Radio = ({
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
}) => (
  <Form.Check
    data-testid="mch-radio"
    className={classNames({ disabled }, className, `align-${align}`)}
    checked={checked}
    style={cssStyles}
    disabled={disabled}
    type="radio"
    bsPrefix={cssInternalPrefix}
    id={id}
    inline={inline}
    isInvalid={isInvalid}
    isValid={isValid}
    label={label}
    onChange={onChange || (() => {})}
  ></Form.Check>
);

Radio.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
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
};

Radio.defaultProps = {
  align: 'right',
  cssInternalPrefix: 'form-check',
  disabled: false,
  inline: false,
  isInvalid: false,
  isValid: false,
  onChange: () => {},
};

export default Radio;
