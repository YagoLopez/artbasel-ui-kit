import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel, FormControl } from 'react-bootstrap';
import classnames from 'classnames';
import { Icon } from '../../Icon';

const fn = () => null;

const Toggle = forwardRef(({
  label, onClick, labelSelected, 'aria-expanded': ariaExpanded, placeholder,
}, ref) => (
  <FloatingLabel label={label} onClick={onClick}>
    <FormControl
      ref={ref}
      type="text"
      placeholder={placeholder}
      value={labelSelected}
      onChange={fn}
    />
    <Icon
      name="dropdown"
      className={classnames({ 'flip-icon': ariaExpanded })}
    />
  </FloatingLabel>
));

Toggle.displayName = 'Toggles';

Toggle.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  labelSelected: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  'aria-expanded': PropTypes.bool.isRequired,
};

Toggle.defaultProps = {
  label: '',
  onClick: fn,
  labelSelected: '',
};

export default Toggle;
