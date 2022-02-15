import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import classnames from 'classnames';

import { ButtonIcon } from '../../actions/ButtonIcon';
import useRefEvents from './useRefEvents';
import { Icon } from '../../utils';

const MobileSearch = ({
  placeholder,
  className,
  value,
  disabled,
  onChange,
  onBackButton,
}) => {
  const inputRef = useRef(null);
  const { isFocus, hasValue } = useRefEvents(inputRef);

  const onRemove = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
      onChange({ target: { value: '' } });
    }
  }, []);

  return (
    <InputGroup
      className={classnames('mobile-search-input', className, {
        focus: isFocus || hasValue,
      })}
      data-testid="mch-search"
    >
      <ButtonIcon
        icon="arrow-left"
        onClick={onBackButton}
        className="arrow-left"
        size="xs"
      />
      <FormControl
        ref={inputRef}
        placeholder={placeholder}
        defaultValue={value}
        type="text"
        disabled={disabled}
        onChange={onChange}
      />
      {isFocus || hasValue ? (
        <InputGroup.Text onClick={onRemove} as="button" type="button" data-testid="remove-search">
          <Icon name="close" size={24} />
        </InputGroup.Text>
      ) : (
        <InputGroup.Text id="mobile-input-group">
          <Icon name="search" size={24} color='#BABFC4'/>
        </InputGroup.Text>
      )}
    </InputGroup>
  );
};

MobileSearch.propTypes = {
  onBackButton: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

MobileSearch.defaultProps = {
  placeholder: '',
  className: '',
  value: '',
  disabled: false,
  onChange: () => {
  },
};

export { MobileSearch };
