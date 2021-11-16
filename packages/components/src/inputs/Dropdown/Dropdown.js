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
  const [show, setShow] = useState(false);
  const Menu = useMemo(() => (isMultiselect ? MultiMenu : SimpleMenu), [isMultiselect]);
  const dropdownRef = useRef(null);

  const handleOnChange = useCallback(
    (option) => {
      if (isMultiselect) {
        setOptionSelected(option);
      } else {
        setOptionSelected([option]);
        onChange(option.value);
      }
    },
    [options, isMultiselect],
  );

  const handleSubmit = useCallback(() => {
    onChange(optionsSelected.map((o) => o.value));
    setShow(false);
  }, [optionsSelected]);

  const handleOnToggle = useCallback(
    (isOpen, { source }) => {
      setShow(isOpen);
      if (source === 'rootClose' && isMultiselect) handleSubmit();
    },
    [handleSubmit],
  );

  return (
    <BTPDropdown
      show={show}
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
      />
      <FormText className={textClassName[helpTextType]}>{helpText}</FormText>
      <Menu
        options={options}
        onChange={handleOnChange}
        onSubmit={handleSubmit}
        optionsSelected={optionsSelected}
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
