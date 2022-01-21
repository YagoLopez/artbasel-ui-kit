import React from 'react';
import PropTypes from 'prop-types';
import { Button as BSPButton } from 'react-bootstrap';
import classNames from 'classnames';
import { Icon, IconList } from '../../utils/Icon';

const ButtonIcon = ({
  className,
  cssInternalPrefix,
  cssStyles,
  disabled,
  icon,
  onClick,
  variant,
  theme,
  size,
}) => (
  <BSPButton
    data-testid="mch-button-icon"
    className={classNames(`btn-icon ${variant} ${size}`, className, theme)}
    style={cssStyles}
    onClick={onClick}
    disabled={disabled}
    bsPrefix={cssInternalPrefix}
    variant=""
  >
    <Icon name={icon} size={24} />
  </BSPButton>
);

ButtonIcon.propTypes = {
  icon: PropTypes.oneOf(IconList),
  variant: PropTypes.oneOf(['default', 'outline', 'fill']),
  theme: PropTypes.oneOf(['light', 'dark']),
  size: PropTypes.oneOf(['xs', 's', 'm', 'lg']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  cssStyles: PropTypes.string,
  className: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
};

ButtonIcon.defaultProps = {
  icon: 'close',
  variant: 'default',
  theme: 'light',
  size: 'm',
  disabled: false,
  onClick: () => {},
  cssInternalPrefix: 'btn',
};

export default ButtonIcon;
