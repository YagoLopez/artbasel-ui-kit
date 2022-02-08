import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel, FormControl } from 'react-bootstrap';
import { Icon } from '../../../utils/Icon';

const fn = (e) => console.log('Soy onchange ', e);

const SearchableToggle = forwardRef(
  (
    {
      label,
      onClick,
      optionsSelected,
      placeholder,
      helpTextType,
      searchText,
      onSearch,
    },
    ref,
  ) => {
    const normalizeValue = useMemo(() => {
      if (!optionsSelected.length) {
        return searchText;
      }

      // TODO: Searchable Tags has multipleSelection (isSearchable true & isMultiple true)
      const [firstOption] = optionsSelected;

      return firstOption.label;
    }, [optionsSelected, searchText]);

    // TODO: Pending -> Enable write in form control text input

    return (
      <FloatingLabel label={label} onClick={onClick}>
        <FormControl
          ref={ref}
          type="text"
          placeholder={placeholder}
          value={normalizeValue}
          onChange={onSearch}
          className={`help-text-input-${helpTextType} has-icon searchable-input`}
        />
        <Icon name="search" />
      </FloatingLabel>
    );
  },
);

SearchableToggle.displayName = 'SearchableToggle';

SearchableToggle.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  optionsSelected: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  placeholder: PropTypes.string.isRequired,
  helpTextType: PropTypes.oneOf(['muted', 'warning', 'danger']),
  searchText: PropTypes.string,
  onSearch: PropTypes.func,
};

SearchableToggle.defaultProps = {
  label: '',
  onClick: fn,
  optionsSelected: [],
  labelSelected: '',
  helpTextType: 'muted',
  searchText: '',
  onSearch: fn,
};

export default SearchableToggle;
