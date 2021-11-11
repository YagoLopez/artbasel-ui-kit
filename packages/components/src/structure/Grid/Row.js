import React from 'react';
import PropTypes from 'prop-types';
import { Row as BSRow } from 'react-bootstrap';
import classNames from 'classnames';

const Row = ({ className, gutter, ...props }) => (
  <BSRow
    data-testid="mch-row"
    className={classNames(gutter, className)}
    {...props}
  />
);

Row.propTypes = {
  className: PropTypes.string,
  gutter: PropTypes.string,
};

Row.defaultProps = {
  gutter: 'g-5 g-md-7 g-lg-8',
};

export default Row;
