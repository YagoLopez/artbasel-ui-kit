import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Basic/Typography',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
  decorators: [withDesign],
};

const styleTitle = {
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '20px',
  paddingLeft: '5px',
};

const headerText = 'The quick brown fox jumps over the lazy dog';

export const Typography = () => (
  <>
    <h1>Typography</h1>
    <p />
    <h2>Headings</h2>
    <p>
      Art Basel Headline is used to communicate context and important
      information. It is used in multiple scenarios but never within body text.
    </p>

    <p style={styleTitle}>
      <span className="breakpoints-sizes-text" />
    </p>
    <Row>
      <Col sm={1}>
        <p>H1</p>
      </Col>
      <Col>
        <h1>{headerText}</h1>
      </Col>
    </Row>

    <Row>
      <Col sm={1}>
        <p>H2</p>
      </Col>
      <Col>
        <h2>{headerText}</h2>
      </Col>
    </Row>

    <Row>
      <Col sm={1}>
        <p>H3</p>
      </Col>
      <Col>
        <h3>{headerText}</h3>
      </Col>
    </Row>

    <Row>
      <Col sm={1}>
        <p>H4</p>
      </Col>
      <Col>
        <h4>{headerText}</h4>
      </Col>
    </Row>

    <Row>
      <Col sm={1}>
        <p>H5</p>
      </Col>
      <Col>
        <h5>{headerText}</h5>
      </Col>
    </Row>
  </>
);

Typography.parameters = {
  design: {
    name: 'Figma Design',
    type: 'figma',
    url:
      'https://www.figma.com/file/yI9PhS4L5SWkiTdkOCueD2/AB---Style-Library?node-id=1%3A805',
  },
};
