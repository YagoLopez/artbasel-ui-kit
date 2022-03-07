import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const colorsList = ['mch-black', 'mch-white', 'mch-gray-100', 'mch-gray-200', 'mch-gray-300'];

const Divider = ({ orientation, size, color }) => {
  return (
    orientation === 'horizontal' ? (
        <div data-testid="mch-divider" className="divider">
            <hr className={classNames(size, color)} />
        </div>

    ) : <div data-testid="mch-divider" className={classNames('divider vertical vr', size, color)} />

  );
};

Divider.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOf(['s', 'm']),
  color: PropTypes.oneOf(colorsList).isRequired,
};

Divider.defaultProps = {
  orientation: 'horizontal',
  size: 'm',
  color: 'mch-black',
};

export default Divider;
