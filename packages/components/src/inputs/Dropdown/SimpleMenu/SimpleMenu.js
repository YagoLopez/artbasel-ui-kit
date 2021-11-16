import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';

const SimpleMenu = ({ options, optionsSelected, onChange }) => {
  const optionSelected = useMemo(() => optionsSelected[0] || {}, [optionsSelected]);
  const handleOnChange = useCallback((e) => {
    const option = options.find(o => o.value === e.target.dataset.value);
    onChange(option || {});
  }, []);

  return (
    <Dropdown.Menu>
      <div className="dropdown-items is-simple">
      {options.map(({ value: v, label: l }) => (
        <Dropdown.Item
          key={v}
          data-value={v}
          active={v === optionSelected.value}
          onClick={handleOnChange}
        >
          {l}
        </Dropdown.Item>
      ))}
      </div>
    </Dropdown.Menu>
  );
};

SimpleMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  optionsSelected: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  onChange: PropTypes.func,
};

SimpleMenu.defaultProps = {
  options: [],
  optionsSelected: [],
  onChange: () => null,
};

export default SimpleMenu;
