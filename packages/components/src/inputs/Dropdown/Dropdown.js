import React, {
  useState, useCallback, useMemo, useRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Dropdown as BTPDropdown, FormText } from 'react-bootstrap';
import { Toggle as SelectToggle } from './Toggle';
import { SearchableToggle } from './SearchableTaggle';
import { SimpleMenu } from './SimpleMenu';
import { MultiMenu } from './MultiMenu';
import { SearchableMenu } from './SearchableMenu';

const textClassName = {
  muted: 'text-muted',
  warning: 'text-warning',
  danger: 'text-danger',
};

const findValuesOnOptions = (value, options) => {
  const normalizeValue = Array.isArray(value) ? value : [value];
  return options.filter((option) => normalizeValue.includes(option.value));
};

const Dropdown = ({
  options,
  style,
  label,
  isMultiselect,
  isSearchable,
  value,
  className,
  helpText,
  helpTextType,
  onChange,
  placeholder,
}) => {
  const [optionsSelected, setOptionSelected] = useState(
    findValuesOnOptions(value, options),
  );
  const [isShow, setIsShow] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setOptionSelected(findValuesOnOptions(value, options));
  }, [value]);

  // TODO: Manage new status: SearchableMenu & SearchableTagMenu
  const Menu = useMemo(() => {
    if (isSearchable) {
      return SearchableMenu;
    }

    return isMultiselect ? MultiMenu : SimpleMenu;
  }, [isMultiselect, isSearchable]);

  const iconName = useMemo(() => (isSearchable ? 'search' : 'chevron-down'), [
    isSearchable,
  ]);

  const Toggle = useMemo(
    () => (isSearchable ? SearchableToggle : SelectToggle),
    [isSearchable],
  );

  const optionsFiltered = useMemo(
    () => (isSearchable
      ? options.filter((option) => option.value.toUpperCase().includes(searchText.toUpperCase()))
      : options),
    [options, searchText],
  );

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
    [optionsFiltered, isMultiselect],
  );

  const handleOnToggle = useCallback((isOpen) => {
    setIsShow(isOpen);
  }, []);

  const handleClose = useCallback(() => {
    setIsShow(false);
  }, []);

  const inputRef = useRef(null);

  const handleOnSearch = useCallback((event) => {
    const { value: key } = event.target;

    const searchTextDraft = `${searchText}${key}`;

    setSearchText(searchTextDraft);
    setIsShow(searchTextDraft.length);
    setOptionSelected([]);

    inputRef.current.focus();
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
        iconName={iconName}
        searchText={searchText}
        onSearch={handleOnSearch}
        ref={inputRef}
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
        options={optionsFiltered}
        onChange={handleOnChange}
        optionsSelected={optionsSelected}
        isShow={isShow}
        onClose={handleClose}
        searchText={searchText}
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
  isSearchable: PropTypes.bool,
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
  isSearchable: false,
  helpTextType: 'muted',
  placeholder: 'Select',
  onChange: () => null,
};

export default Dropdown;
