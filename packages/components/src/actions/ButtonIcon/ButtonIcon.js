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
  cssStyles: PropTypes.string,
  className: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(IconList),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'outline', 'fill']),
  theme: PropTypes.oneOf(['light', 'dark']),
  size: PropTypes.oneOf(['xs', 's', 'm', 'lg']),
};

ButtonIcon.defaultProps = {
  cssInternalPrefix: 'btn',
  disabled: false,
  onClick: () => {},
  icon: 'close',
  variant: 'default',
  theme: 'light',
  size: 'm',
};

export default ButtonIcon;
