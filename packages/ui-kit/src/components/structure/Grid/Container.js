import React from 'react';
import { Container as BSContainer } from 'react-bootstrap';

const Container = (props) => (
  <BSContainer data-testid="mch-container" {...props} />
);

export default Container;
