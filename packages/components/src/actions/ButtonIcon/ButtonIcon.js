import React from 'react';
import PropTypes from 'prop-types';
import { Button as BSPButton } from 'react-bootstrap';
import classNames from 'classnames';
import { Icon, IconList } from '../../Icon';

const ButtonIcon = ({
  className,
  cssInternalPrefix,
  cssStyles,
  disabled,
  icon,
  onClick,
}) => (
  <BSPButton
    data-testid="mch-button-icon"
    className={classNames('btn-icon', className)}
    style={cssStyles}
    onClick={onClick}
    disabled={disabled}
    bsPrefix={cssInternalPrefix}
  >
    <Icon name={icon} size={24} />
  </BSPButton>
);

ButtonIcon.propTypes = {
  cssStyles: PropTypes.string,
  className: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(IconList),
  onClick: PropTypes.func,
};

ButtonIcon.defaultProps = {
  cssInternalPrefix: 'btn',
  disabled: false,
  onClick: () => {},
  icon: 'close',
};

export default ButtonIcon;
