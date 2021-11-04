import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { InputGroup, FormControl } from 'react-bootstrap';
import useRefEvents from './useRefEvents';

const Search = ({
  placeholder, className, value, disabled, onChange,
}) => {
  const inputRef = useRef(null);
  const { isFocus, hasValue } = useRefEvents(inputRef);

  const onRemove = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }, []);

  return (
    <InputGroup
      className={classnames('search-input', className, { focus: isFocus || hasValue })}
      data-testid="mch-search"
    >
      <InputGroup.Text>
        <i className="search-icon" />
      </InputGroup.Text>
      <FormControl
        ref={inputRef}
        placeholder={placeholder}
        defaultValue={value}
        type="text"
        disabled={disabled}
        onChange={onChange}
      />
      <InputGroup.Text onClick={onRemove} >
      <i className="remove-icon" data-testid="remove-search" />
      </InputGroup.Text>
    </InputGroup>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Search.defaultProps = {
  placeholder: '',
  className: '',
  value: '',
  disabled: false,
  onChange: () => {},
};

export default Search;
