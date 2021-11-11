import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Snackbar from './Snackbar';
import SnackbarContainer from './SnackbarContainer';
import Button from '../../actions/Button/Button';
import { IconList } from '../../utils/Icon';

const SnackbarDemo = ({
  message,
  leadingIcon,
  actionText,
  autohide,
  type,
  onAction,
  delay,
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <SnackbarContainer position="top-end">
        <Snackbar
          message={message}
          leadingIcon={leadingIcon}
          autohide={autohide}
          show={show}
          type={type}
          onClose={() => setShow(false)}
          actionText={actionText}
          onAction={onAction}
          delay={delay}
        />
      </SnackbarContainer>

      <Button variant="primary" onClick={() => setShow(true)}>
        Show Snackbar
      </Button>
    </>
  );
};

SnackbarDemo.propTypes = {
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
};

SnackbarDemo.defaultProps = {
  animation: true,
  show: false,
  onAction: null,
  actionText: null,
  leadingIcon: undefined,
  type: 'default',
  delay: 5000,
  autohide: true,
};

export default SnackbarDemo;
