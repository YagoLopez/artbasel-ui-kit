import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel, FormControl } from 'react-bootstrap';
import classnames from 'classnames';
import { Icon } from '../../../utils/Icon';

const fn = () => null;

const Toggle = forwardRef(
  (
    {
      label,
      id,
      onClick,
      optionsSelected,
      'aria-expanded': ariaExpanded,
      placeholder,
      helpTextType,
    },
    ref,
  ) => {
    const normalizeValue = useMemo(() => {
      if (!optionsSelected.length) return '';
      const [firstOption, ...rest] = optionsSelected;
      return `${firstOption.label}${rest.length ? `, +${rest.length}` : ''}`;
    }, [optionsSelected]);
    return (
      <FloatingLabel label={label} onClick={onClick} controlId={id}>
        <FormControl
          ref={ref}
          type="text"
          placeholder={placeholder}
          value={normalizeValue}
          onChange={fn}
          className={`help-text-input-${helpTextType} has-icon`}
        />
        <Icon
          name="chevron-down"
          className={classnames({ 'flip-icon': ariaExpanded })}
        />
      </FloatingLabel>
    );
  },
);

Toggle.displayName = 'Toggle';

Toggle.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  optionsSelected: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  placeholder: PropTypes.string.isRequired,
  'aria-expanded': PropTypes.bool.isRequired,
  helpTextType: PropTypes.oneOf(['muted', 'warning', 'danger']),
};

Toggle.defaultProps = {
  label: '',
  onClick: fn,
  optionsSelected: [],
  labelSelected: '',
  helpTextType: 'muted',
};

export default Toggle;
