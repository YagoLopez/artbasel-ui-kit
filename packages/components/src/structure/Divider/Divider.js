import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const colorsList = [
  'mch-black',
  'mch-white',
  'mch-gray-100',
  'mch-gray-200',
  'mch-gray-300',
  'mch-gray-400',
  'mch-gray-500',
];

const Divider = ({
  orientation, size, color, className,
}) => {
  return orientation === 'horizontal' ? (
    <div data-testid="mch-divider" className="divider">
      <hr className={classNames(size, color, className)} />
    </div>
  ) : (
    <div
      data-testid="mch-divider"
      className={classNames('divider vertical vr', size, color, className)}
    />
  );
};

Divider.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOf(['s', 'm']),
  color: PropTypes.oneOf(colorsList).isRequired,
  className: PropTypes.string,
};

Divider.defaultProps = {
  orientation: 'horizontal',
  size: 'm',
  color: 'mch-black',
  className: '',
};

export default Divider;
