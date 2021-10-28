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
      <span className="breakpoints-storybook-text" />
    </p>
    <Row className="my-3">
      <Col sm={1}>
        <p>Text styles</p>
      </Col>
      <Col>
        <p>Sample Text</p>
      </Col>
    </Row>
    <Row className="my-3">
      <Col sm={1}>
        <p className="mb-0">H1</p>
        <p className="h1-storybook-text-size text-s"></p>

      </Col>
      <Col>
        <h1>{headerText}</h1>
      </Col>
    </Row>

    <Row className="my-3">
      <Col sm={1}>
        <p className="mb-0">H2</p>
        <p className="h2-storybook-text-size text-s"></p>
      </Col>
      <Col>
        <h2>{headerText}</h2>
      </Col>
    </Row>

    <Row className="my-3">
      <Col sm={1}>
        <p className="mb-0">H3</p>
        <p className="h3-storybook-text-size text-s"></p>
      </Col>
      <Col>
        <h3>{headerText}</h3>
      </Col>
    </Row>

    <Row className="my-3">
      <Col sm={1}>
        <p className="mb-0">H4</p>
        <p className="h4-storybook-text-size text-s"></p>
      </Col>
      <Col>
        <h4>{headerText}</h4>
      </Col>
    </Row>

    <Row className="my-3">
      <Col sm={1}>
        <p className="mb-0">H5</p>
        <p className="h5-storybook-text-size text-s"></p>
      </Col>
      <Col>
        <h5>{headerText}</h5>
      </Col>
    </Row>

    <Row className="my-3">
      <Col sm={1}>
        <p className="mb-0">P1</p>
        <span className="text-s">30px</span>
      </Col>
      <Col>
        <p className="p1">{headerText}</p>
      </Col>
    </Row>

    <Row className="my-3">
      <Col sm={1}>
        <p className="mb-0">P2</p>
        <span className="text-s">24px</span>
      </Col>
      <Col>
        <p className="p2">{headerText}</p>
      </Col>
    </Row>

    <Row className="my-3">
      <Col sm={1}>
        <p className="mb-0">TEXT-L</p>
        <span className="text-s">18px</span>
      </Col>
      <Col>
        <p className="text-l">This is for short paragraphs with no more than four lines and is commonly used in the expressive type theme for layouts .</p>
      </Col>
    </Row>

    <Row className="my-3">
      <Col sm={1}>
        <p className="mb-0">TEXT-M</p>
        <span className="text-s">16px</span>
      </Col>
      <Col>
        <p className="text-m">This is commonly used in layouts for long paragraphs with more than four lines. The looser line height and larger size makes for comfortable, long-form reading, in mediums that allow for more space. This size type is rarely used for body copy in components. Always left-align type; never center it.</p>
      </Col>
    </Row>

    <Row className="my-3">
      <Col sm={1}>
        <p className="mb-0">TEXT-M</p>
        <span className="text-s">16px</span>
      </Col>
      <Col>
        <p className="text-s">This is commonly used in layouts for long paragraphs with more than four lines. It is a good size for comfortable, long-form reading. Use this for longer body copy in components such as accordion, list or other components where space is limited. Preferably left-align this type; center aligning it sparingly.</p>
      </Col>
    </Row>

    <Row className="my-3">
      <Col sm={1}>
        <p className="mb-0">TextLink</p>
        <span className="text-s">16px</span>
      </Col>
      <Col>
        <a className="text-link">Read More</a>
      </Col>
    </Row>

    <Row className="my-3">
      <Col sm={1}>
        <p className="mb-0">External Link</p>
        <span className="text-s">16px</span>
      </Col>
      <Col>
        <a className="external-link">Read More</a>
      </Col>
    </Row>

    <Row className="my-3">
      <Col sm={1}>
        <p className="mb-0">Inline Link</p>
        <span className="text-s">16px</span>
      </Col>
      <Col>
        <p>...lorem <a className="text-link">ipsum dolor </a>amet isis</p>
      </Col>
    </Row>

    <Row className="my-3">
      <Col sm={1}>
        <p className="mb-0">LABEL-XL</p>
        <span className="text-s">16px</span>
      </Col>
      <Col>
        <p className="label-xl">This is for use within components or UI elements to display labels, names and other short form information - complimentary to Text-M</p>
      </Col>
    </Row>

    <Row className="my-3">
      <Col sm={1}>
        <p className="mb-0">LABEL-L</p>
        <span className>14px</span>
      </Col>
      <Col>
        <p className="label-l">This is for captions in a layout — not for body copy - complimentary to Text-S</p>
      </Col>
    </Row>

    <Row className="my-3">
      <Col sm={1}>
        <p className="mb-0">LABEL-M</p>
        <span className="text-s">12px</span>
      </Col>
      <Col>
        <p className="label-m">This is for use as tertiary/caption/label or explanatory helper text that appears below a field title within a component.</p>
      </Col>
    </Row>

    <Row className="my-3">
      <Col sm={1}>
        <p className="mb-0">LABEL-S</p>
        <span className="text-s">12px</span>
      </Col>
      <Col>
        <a className="label-s">This is for se as tertiary/caption/label or explanatory helper text that appears below a field title within a component.</a>
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
