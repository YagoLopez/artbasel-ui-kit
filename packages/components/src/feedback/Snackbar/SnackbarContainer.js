import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-bootstrap';

const Snackbar = ({
  children,
  position,
  className,
  cssInternalPrefix,
  cssStyles,
}) => {
  return (
    <ToastContainer
      data-testid="mch-snackbar-container"
      position={position}
      bsPrefix={cssInternalPrefix}
      className={className}
      style={cssStyles}
    >
      {children}
    </ToastContainer>
  );
};

Snackbar.propTypes = {
  position: PropTypes.oneOf([
    'top-start',
    'top-center',
    'top-end',
    'middle-start',
    'middle-center',
    'middle-end',
    'bottom-start',
    'bottom-center',
    'bottom-end',
  ]),
  cssStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  className: PropTypes.string,
  cssInternalPrefix: PropTypes.string,
};

Snackbar.defaultProps = {
  cssInternalPrefix: 'toast-container',
  position: 'top-end',
};

export default Snackbar;
