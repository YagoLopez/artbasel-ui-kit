import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from './index';

const columns = (elements, xs, sm, md, lg, xl, xxl) => {
  return Array.from({ length: elements }, (v, k) => k + 1).map((column) => (
    <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} key={column}>
      <div className="p-5" style={{ backgroundColor: '#eee' }}>
        {column}
      </div>
    </Col>
  ));
};

const GridDemo = ({
  elements, gutter, xs, sm, md, lg, xl, xxl,
}) => {
  return (
    <Container className="text-center">
      <Row gutter={gutter}>{columns(elements, xs, sm, md, lg, xl, xxl)}</Row>
    </Container>
  );
};

GridDemo.propTypes = {
  elements: PropTypes.number,
  gutter: PropTypes.string,
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  xxl: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
    PropTypes.string,
  ]),
};
export default GridDemo;
