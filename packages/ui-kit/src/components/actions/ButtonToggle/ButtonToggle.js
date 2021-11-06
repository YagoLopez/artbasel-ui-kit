import React from 'react';
import PropTypes from 'prop-types';
import { Button as BSPButton } from 'react-bootstrap';
import classNames from 'classnames';

const ButtonToggle = ({
  children,
  className,
  cssInternalPrefix,
  cssStyles,
  disabled,
  active,
  onClick,
}) => (
  <>
    <BSPButton
      variant=""
      data-testid="mch-button-toggle"
      className={classNames(
        'btn-toggle position-relative icon-left',
        className,
        { 'toggle-active': active },
      )}
      style={cssStyles}
      onClick={onClick}
      disabled={disabled}
      bsPrefix={cssInternalPrefix}
    >
      {children}
      {active && <i data-testid="toggle-icon" />}
    </BSPButton>
  </>
);

ButtonToggle.propTypes = {
  cssStyles: PropTypes.string,
  className: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonToggle.defaultProps = {
  cssInternalPrefix: 'btn',
  disabled: false,
  active: false,
  onClick: () => {},
};

export default ButtonToggle;
