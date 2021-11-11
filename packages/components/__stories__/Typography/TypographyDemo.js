import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

const TypographyDemo = ({ headersTextSample, textSample }) => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h3>Headers Samples</h3>
          <hr />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>h1</p>
          <h1>{headersTextSample}</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>h2</p>
          <h2>{headersTextSample}</h2>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>h3</p>
          <h3>{headersTextSample}</h3>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>h4</p>
          <h4>{headersTextSample}</h4>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>h5</p>
          <h5>{headersTextSample}</h5>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>p.text-paragraph-1</p>
          <p className="text-paragraph-1">{headersTextSample}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>p.text-paragraph-2</p>
          <p className="text-paragraph-2">{headersTextSample}</p>
        </Col>
      </Row>
      <Row className="mt-8">
        <Col>
          <h3>Text Classes Samples</h3>
          <hr />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>p.text-small</p>
          <p className="text-small">{textSample}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>p.text-medium</p>
          <p className="text-medium">{textSample}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>p.text-large</p>
          <p className="text-small">{textSample}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>p.text-label-small</p>
          <p className="text-label-small">{textSample}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>p.text-label-medium</p>
          <p className="text-label-medium">{textSample}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>p.text-label-large</p>
          <p className="text-label-large">{textSample}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <p>p.text-label-xlarge</p>
          <p className="text-label-lxarge">{textSample}</p>
        </Col>
      </Row>
    </Container>
  );
};

TypographyDemo.propTypes = {
  headersTextSample: PropTypes.string,
  textSample: PropTypes.string,
};

export default TypographyDemo;
