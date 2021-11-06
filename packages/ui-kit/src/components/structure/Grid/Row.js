import React from 'react';
import PropTypes from 'prop-types';
import { Row as BSRow } from 'react-bootstrap';
import classNames from 'classnames';

const Row = ({ className, ...props }) => (
  <BSRow
    data-testid="mch-row"
    className={classNames('g-5 g-sm-5 g-md-7 g-lg-8', className)}
    {...props}
  />
);

Row.propTypes = {
  className: PropTypes.string,
};

export default Row;
