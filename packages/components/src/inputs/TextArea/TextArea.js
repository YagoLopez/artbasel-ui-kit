import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel, Form, FormText } from 'react-bootstrap';

const textClassName = {
  muted: 'text-muted',
  warning: 'text-warning',
  danger: 'text-danger',
};

const TextArea = ({
  label,
  disabled,
  name,
  id,
  onChange,
  onBlur,
  readOnly,
  value,
  ref,
  cssStyles,
  helpText,
  helpTextType,
  countChar,
  maxCharacters,
  cssInternalPrefix,
  'data-testid': dataTestId,
}) => {
  const [count, setCount] = useState(0);
  const [countError, setCountError] = useState(false);

  const getCharactersCount = useCallback((val) => {
    if (val) {
      setCount(val.length);
      if (value.length > maxCharacters) {
        setCountError(true);
      } else { setCountError(false); }
    } else { setCount(0); }
  }, [value, maxCharacters]);

  useEffect(() => {
    getCharactersCount(value);
  }, [value]);

  return (
    <div data-testid="mch-text-area-field">
      <FloatingLabel controlId={id} label={label}>
        <Form.Control
          name={name}
          bsPrefix={cssInternalPrefix}
          style={cssStyles}
          readOnly={readOnly}
          defaultValue="Hello!"
          placeholder={label}
          onChange={onChange}
          value={value}
          data-testid={dataTestId}
          onBlur={onBlur}
          disabled={disabled}
          ref={ref}
          as="textarea"
          className={`help-text-input-${countError ? 'danger' : helpTextType}`}
        />
      </FloatingLabel>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {helpText && (
        <FormText
          className={textClassName[!countError ? helpTextType : 'danger']}
          as="div"
          data-testid="help-text"
        >
          {helpText}
        </FormText>
      )}
      {countChar && (
        <FormText
          className={textClassName[!countError ? 'muted' : 'danger']}
          as="div"
          data-testid="help-text"
        >
          {count}/{maxCharacters}
        </FormText>
      )}
      </div>
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  'data-testid': PropTypes.string,
  helpText: PropTypes.string,
  helpTextType: PropTypes.oneOf(['muted', 'warning', 'danger']),
  ref: PropTypes.string,
  cssStyles: PropTypes.object || PropTypes.any,
  countChar: PropTypes.bool,
  maxCharacters: PropTypes.number,
};

TextArea.defaultProps = {
  label: 'label',
  id: 'floatingInput',
  helpText: 'Helper Text',
  value: '',
  cssInternalPrefix: 'form-control textarea',
  disabled: false,
  isInvalid: false,
  'data-testid': null,
  isValid: false,
  countChar: true,
  name: null,
  maxCharacters: 100,
  onChange: () => {},
  onBlur: () => {},
};

export default TextArea;
