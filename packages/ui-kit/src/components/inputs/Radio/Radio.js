import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import classNames from 'classnames';

const Radio = ({
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
        className={classNames(
          // styles.button,
          // styles[variant],
          // styles[size],
          { disabled },
          className,
        )}
        checked={checked}
        style={cssStyles}
        disabled={disabled}
        type='radio'
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
  checked: PropTypes.bool,
  className: PropTypes.string,
  cssStyles: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  inline: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  label: PropTypes.node,
  onChange: PropTypes.func,
};

Radio.defaultProps = {
  checked: false,
  cssInternalPrefix: 'form-check',
  disabled: false,
  inline: false,
  isInvalid: false,
  isValid: false,
  onChange: () => {},
};

export default Radio;
