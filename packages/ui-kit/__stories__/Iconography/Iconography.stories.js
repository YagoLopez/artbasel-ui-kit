import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { Icon, IconList } from '../../src/components/Icon';

export default {
  title: 'Styles/Iconography',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
};

export const Iconography = () => (
  <Row xs={3} md={4} lg={6} className="g-2">
    {IconList.map((name) => (
      <Col key={name}>
        <Card>
          <Card.Header>
            <b>{name}</b>
          </Card.Header>
          <Card.Body>
            <Icon name={name} />
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);
