import React from 'react';
import PropTypes from 'prop-types';
import { Button as BSPButton } from 'react-bootstrap';
import classNames from 'classnames';
import { Icon } from '../../utils/Icon';

const ButtonFilter = ({
  className,
  cssInternalPrefix,
  cssStyles,
  disabled,
  checked,
  onClick,
}) => (
  <div className="position-relative d-inline-block">
    <BSPButton
      data-testid="mch-button-filter"
      className={classNames('btn-filter position-relative', className)}
      style={cssStyles}
      onClick={onClick}
      disabled={disabled}
      bsPrefix={cssInternalPrefix}
    >
      <Icon name="filter" size={24} />
    </BSPButton>
    {checked && <Icon name="check" size={24} className="icon-check" />}
  </div>
);

ButtonFilter.propTypes = {
  cssStyles: PropTypes.string,
  className: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonFilter.defaultProps = {
  cssInternalPrefix: 'btn',
  disabled: false,
  checked: false,
  onClick: () => {},
};

export default ButtonFilter;
