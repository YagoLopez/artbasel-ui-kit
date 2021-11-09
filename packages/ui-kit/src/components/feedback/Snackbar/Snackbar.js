import React, { useState, useMemo, useCallback } from 'react';
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
}) => {
  const [show, setShow] = useState(true);

  const onCloseAction = useCallback(() => setShow(false), []);

  const isError = useMemo(() => type === 'error', [type]);

  const getBg = useMemo(() => (isError ? 'danger' : 'dark'), [isError]);

  return (
    <Toast
      data-testid="mch-snackbar"
      delay={delay}
      autohide={autohide && !isError}
      onClose={onCloseAction}
      show={show}
      bg={getBg}
    >
      <Toast.Body>
        {leadingIcon && (
          <Icon
            className="toast-default-icon toast-leading-icon"
            name={leadingIcon}
            size={24}
          />
        )}
        <div className="me-auto toast-message">{message}</div>
        <div className="toast-action" onClick={onAction}>
          {actionText}
        </div>
        <Icon
          className="toast-default-icon"
          name="close"
          size={24}
          onClick={onCloseAction}
        />
      </Toast.Body>
    </Toast>
  );
};

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  leadingIcon: PropTypes.oneOf(IconList),
  onAction: PropTypes.func,
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
};

Snackbar.defaultProps = {
  onAction: null,
  actionText: null,
  leadingIcon: undefined,
  type: 'default',
  delay: 5000,
  autohide: true,
};

export default Snackbar;
