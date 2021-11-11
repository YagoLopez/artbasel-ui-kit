import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Dropdown as BTPDropdown, FormText } from 'react-bootstrap';
import Toggle from './Toggle';

const textClassName = {
  muted: 'text-muted',
  warning: 'text-warning',
  danger: 'text-danger',
};

const Dropdown = ({
  options, style, label, value, className, helpText, helpTextType, onChange, placeholder,
}) => {
  const [optionSelect, setOptionSelect] = useState(
    options.find((o) => o.value === value) || {},
  );
  const handleClick = useCallback(
    (event) => {
      const selected = options.find((o) => o.value === event.target.dataset.value);
      onChange(selected.value);
      setOptionSelect(selected);
    },
    [options],
  );

  return (
    <BTPDropdown style={style} className={classnames(className)}>
      <BTPDropdown.Toggle
        as={Toggle}
        label={label}
        labelSelected={optionSelect.label}
        placeholder={placeholder}
      />
      <FormText className={textClassName[helpTextType]}>{helpText}</FormText>
      <BTPDropdown.Menu>
        {options.map(({ value: v, label: l }) => (
          <BTPDropdown.Item
            key={v}
            data-value={v}
            active={v === optionSelect.value}
            onClick={handleClick}
          >
            {l}
          </BTPDropdown.Item>
        ))}
      </BTPDropdown.Menu>
    </BTPDropdown>
  );
};

Dropdown.propTypes = {
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  label: PropTypes.string,
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
  helpTextType: 'muted',
  placeholder: 'Select',
  onChange: () => null,
};

export default Dropdown;
