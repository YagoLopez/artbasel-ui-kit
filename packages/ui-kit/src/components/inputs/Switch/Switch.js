import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import classNames from 'classnames';

const Switch = ({
  checked,
  className,
  cssInternalPrefix,
  cssStyles,
  disabled,
  id,
  inline,
  isInvalid,
  isValid,
  onChange,
}) => (
      <Form.Switch
        data-testid="mch-switch"
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
        bsPrefix={cssInternalPrefix}
        id={id}
        inline={inline}
        isInvalid={isInvalid}
        isValid={isValid}
        onChange={onChange || (() => {})}
      ></Form.Switch>
);

Switch.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  cssStyles: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  inline: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  checked: false,
  cssInternalPrefix: 'form-check',
  disabled: false,
  inline: false,
  isInvalid: false,
  isValid: false,
  onChange: () => {},
};

export default Switch;
