import React from 'react';
import PropTypes from 'prop-types';
import { Button as BSPButton } from 'react-bootstrap';
import classNames from 'classnames';
import { Icon, IconList } from '../../utils/Icon';

const TextLink = ({
  children,
  className,
  cssInternalPrefix,
  cssStyles,
  disabled,
  href,
  onClick,
  icon,
  iconAlign,
}) => (
  <BSPButton
    data-testid="mch-text-link"
    className={classNames({ [`icon-${iconAlign}`]: icon }, className)}
    style={cssStyles}
    onClick={onClick}
    disabled={disabled}
    type={null}
    variant="link"
    href={href}
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

TextLink.propTypes = {
  children: PropTypes.string.isRequired,
  cssStyles: PropTypes.string,
  className: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(IconList),
  iconAlign: PropTypes.oneOf(['left', 'right']),
  href: PropTypes.string, /* TODO: to be deprecated */
  onClick: PropTypes.func,
};

TextLink.defaultProps = {
  cssInternalPrefix: 'btn',
  disabled: false,
  href: '#',
  iconAlign: 'left',
  onClick: null,
};

export default TextLink;
