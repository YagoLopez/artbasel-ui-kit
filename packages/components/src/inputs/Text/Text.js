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
  'data-testid': dataTestId,
  name,
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
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          data-testid={dataTestId}
          name={name}
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
  'data-testid': PropTypes.string,
  name: PropTypes.string,
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
  'data-testid': null,
  name: null,
};

export default Text;
