import React from 'react';
import { ProgressBar as BSPProgressBar } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProgressBar = ({
  percentage, variant, width, ...rest
}) => {
  return (
    <BSPProgressBar
      now={percentage}
      variant={variant}
      {...rest}
      style={{ width }}
    />
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  variant: PropTypes.oneOf(['primary', 'dark', 'danger', 'warning', 'success']),
  width: PropTypes.string,
};

ProgressBar.defaultProps = {
  variant: 'dark',
  width: '100%',
};
export default ProgressBar;
