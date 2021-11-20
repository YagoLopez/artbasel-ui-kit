import React, {
  useState, useCallback, useMemo, useRef,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Dropdown as BTPDropdown, FormText } from 'react-bootstrap';
import { Toggle } from './Toggle';
import { SimpleMenu } from './SimpleMenu';
import { MultiMenu } from './MultiMenu';

const textClassName = {
  muted: 'text-muted',
  warning: 'text-warning',
  danger: 'text-danger',
};

const initializeValues = (value, options) => {
  const normalizeValue = Array.isArray(value) ? value : [value];
  return options.filter((option) => normalizeValue.includes(option.value));
};

const Dropdown = ({
  options,
  style,
  label,
  isMultiselect,
  value,
  className,
  helpText,
  helpTextType,
  onChange,
  placeholder,
}) => {
  const [optionsSelected, setOptionSelected] = useState(
    initializeValues(value, options),
  );
  const [isShow, setIsShow] = useState(false);
  const Menu = useMemo(() => (isMultiselect ? MultiMenu : SimpleMenu), [
    isMultiselect,
  ]);
  const dropdownRef = useRef(null);

  const handleOnChange = useCallback(
    (option) => {
      if (isMultiselect) {
        setOptionSelected(option);
        onChange(option.map((o) => o.value));
      } else {
        setOptionSelected([option]);
        onChange(option.value);
      }
    },
    [options, isMultiselect],
  );

  const handleOnToggle = useCallback((isOpen) => {
    setIsShow(isOpen);
  }, []);

  const handleClose = useCallback(() => {
    setIsShow(false);
  }, []);

  return (
    <BTPDropdown
      show={isShow}
      style={style}
      className={classnames(className)}
      onToggle={handleOnToggle}
      ref={dropdownRef}
    >
      <BTPDropdown.Toggle
        as={Toggle}
        label={label}
        optionsSelected={optionsSelected}
        placeholder={placeholder}
        helpTextType={helpTextType}
      />
      {helpText && (
        <FormText
          className={textClassName[helpTextType]}
          as="div"
          data-testid="help-text"
        >
          {helpText}
        </FormText>
      )}
      <Menu
        options={options}
        onChange={handleOnChange}
        optionsSelected={optionsSelected}
        isShow={isShow}
        onClose={handleClose}
      />
    </BTPDropdown>
  );
};

Dropdown.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  label: PropTypes.string,
  isMultiselect: PropTypes.bool,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  helpTextType: PropTypes.oneOf(['muted', 'warning', 'danger']),
  onChange: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
};

Dropdown.defaultProps = {
  value: '',
  options: [],
  label: '',
  isMultiselect: false,
  helpTextType: 'muted',
  placeholder: 'Select',
  onChange: () => null,
};

export default Dropdown;
