import React from 'react';
import PropTypes from 'prop-types';
import { Button as BSPButton } from 'react-bootstrap';
import classNames from 'classnames';
import { Icon, IconList } from '../../utils/Icon';

const Button = ({
  children,
  className,
  cssInternalPrefix,
  cssStyles,
  disabled,
  icon,
  iconAlign,
  onClick,
  size,
  type,
  variant,
  theme,
}) => (
  <BSPButton
    data-testid="mch-button"
    className={classNames(`size-${size}`, className, {
      [`icon-${iconAlign}`]: icon,
    }, theme)}
    style={cssStyles}
    onClick={onClick}
    disabled={disabled}
    type={type}
    variant={variant}
    bsPrefix={cssInternalPrefix}
  >
    {icon ? (
      <>
        <Icon name={icon} size={24} />
        {children}
      </>
    ) : (
      <>{children}</>
    )}
  </BSPButton>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  cssStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  className: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(IconList),
  iconAlign: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['compact', 'dynamic']),
  theme: PropTypes.oneOf(['light', 'dark']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  cssInternalPrefix: 'btn',
  disabled: false,
  type: 'button',
  variant: 'primary',
  onClick: () => {},
  size: 'dynamic',
  theme: 'light',
};

export default Button;
