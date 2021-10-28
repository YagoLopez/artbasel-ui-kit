import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import classNames from 'classnames';

const textClassName = {
  muted: 'text-muted',
  warning: 'text-warning',
  danger: 'text-danger',
};

const Text = ({
  className,
  cssStyles,
  cssInternalPrefix,
  type,
  disabled,
  label,
  value,
  helpText,
  helpTextType,
  trailingIcon,
  placeholder,
  onChange,
}) => (
    <div data-testid="mch-text">
      <FloatingLabel controlId="floatingInput" label={label}>
        <Form.Control
          className={classNames(
            `help-text-input-${helpTextType}`,
            className,
          )}
          style={cssStyles}
          bsPrefix={cssInternalPrefix}
          type={type}
          defaultValue={value}
          placeholder={placeholder}
          aria-describedby="passwordHelpBlock"
          disabled={disabled}
          onChange={onChange}
        />
        {trailingIcon && <i className="trailing-icon" data-testid="trailing-icon"/>}
      </FloatingLabel>
      <Form.Text className={textClassName[helpTextType]}>
        {helpText}
      </Form.Text>
    </div>
);

Text.propTypes = {
  className: PropTypes.string,
  cssStyles: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  type: PropTypes.oneOf(['text', 'tel', 'email', 'password']),
  disabled: PropTypes.bool,
  helpText: PropTypes.string,
  helpTextType: PropTypes.oneOf(['muted', 'warning', 'danger']),
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  trailingIcon: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Text.defaultProps = {
  cssInternalPrefix: '',
  type: 'text',
  disabled: false,
  label: '',
  helpTextType: 'muted',
  value: '',
  trailingIcon: false,
  placeholder: ' ',
  onChange: () => {},
};

export default Text;
