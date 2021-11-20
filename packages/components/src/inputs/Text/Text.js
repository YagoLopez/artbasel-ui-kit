import React, { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FloatingLabel, FormText } from 'react-bootstrap';
import classnames from 'classnames';

const textClassName = {
  muted: 'text-muted',
  warning: 'text-warning',
  danger: 'text-danger',
};

const Text = ({
  className,
  id,
  cssStyles,
  cssInternalPrefix,
  type,
  disabled,
  label,
  value,
  helpText,
  helpTextType,
  validated,
  placeholder,
  onChange,
}) => {
  const [passwordIcon, setPasswordIcon] = useState('hide');
  const isPassword = useMemo(() => type === 'password', [type]);
  const handleSetShowPassword = useCallback(() => {
    setPasswordIcon((prevState) => (prevState === 'hide' ? 'show' : 'hide'));
  }, []);

  return (
    <div data-testid="mch-text">
      <FloatingLabel controlId={id} label={label}>
        <FormControl
          className={classnames(`help-text-input-${helpTextType}`, className, {
            'has-icon': isPassword || validated,
          })}
          style={cssStyles}
          bsPrefix={cssInternalPrefix}
          type={isPassword && passwordIcon === 'show' ? 'text' : type}
          defaultValue={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
        />
        {(validated || isPassword) && (
          <i
            className={classnames({
              'validate-icon': validated,
              [`eye-${passwordIcon}-icon`]: isPassword,
            })}
            onClick={isPassword ? handleSetShowPassword : undefined}
            data-testid="text-icon"
          />
        )}
      </FloatingLabel>
      {helpText && (
        <FormText
          className={textClassName[helpTextType]}
          as="div"
          data-testid="help-text"
        >
          {helpText}
        </FormText>
      )}
    </div>
  );
};

Text.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  cssStyles: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  type: PropTypes.oneOf(['text', 'tel', 'email', 'password']),
  disabled: PropTypes.bool,
  helpText: PropTypes.string,
  helpTextType: PropTypes.oneOf(['muted', 'warning', 'danger']),
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  validated: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Text.defaultProps = {
  id: 'floatingInput',
  cssInternalPrefix: '',
  type: 'text',
  disabled: false,
  label: '',
  helpTextType: 'muted',
  value: '',
  validated: false,
  placeholder: ' ',
  onChange: () => {},
};

export default Text;
