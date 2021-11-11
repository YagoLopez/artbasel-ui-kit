import React from 'react';
import PropTypes from 'prop-types';
import { Toast } from 'react-bootstrap';
import { Icon, IconList } from '../../Icon';

const Snackbar = ({
  onAction,
  actionText,
  leadingIcon,
  message,
  type,
  delay,
  autohide,
  onClose,
  show,
  className,
  cssInternalPrefix,
  cssStyles,
}) => {
  return (
    <Toast
      data-testid="mch-snackbar"
      delay={delay}
      autohide={autohide && !(type === 'error')}
      onClose={onClose}
      show={show}
      bg={type === 'error' ? 'danger' : 'dark'}
      className={className}
      style={cssStyles}
      bsPrefix={cssInternalPrefix}
    >
      <Toast.Body>
        {leadingIcon && (
          <Icon className="toast-leading-icon" name={leadingIcon} />
        )}
        <div className="toast-message me-auto">{message}</div>
        <div className="toast-action" onClick={onAction}>
          {actionText}
        </div>
        <Icon className="toast-close-icon" name="close" onClick={onClose} />
      </Toast.Body>
    </Toast>
  );
};

Snackbar.propTypes = {
  animation: PropTypes.bool,
  message: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  leadingIcon: PropTypes.oneOf(IconList),
  onAction: PropTypes.func,
  onClose: PropTypes.func,
  actionText: PropTypes.string,
  type: PropTypes.oneOf(['default', 'error']),
  delay: (props, propName) => {
    const propValue = props[propName];
    if (propValue < 4000 || propValue > 10000) {
      return new Error(
        `The value ${propValue} of prop ${propName} isn't within range (4000ms to 10000ms)`,
      );
    }
  },
  autohide: PropTypes.bool,
  cssStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  className: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
};

Snackbar.defaultProps = {
  cssInternalPrefix: 'toast',
  animation: true,
  show: false,
  onAction: null,
  actionText: null,
  leadingIcon: undefined,
  type: 'default',
  delay: 5000,
  autohide: true,
};

export default Snackbar;
