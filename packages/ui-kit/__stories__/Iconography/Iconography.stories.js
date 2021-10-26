import React from 'react';

import { withDesign } from 'storybook-addon-designs';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { Icon, IconList } from '../../src/components/Icon';

export default {
  title: 'Basic/Iconography',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
  decorators: [withDesign],
};

export const Iconography = () => (
  <>
    <h1>Iconography</h1>
    <p>Icons are graphical representations of actions, entities or concepts.</p>
    <h2>Icons</h2>

    <Row xs={3} md={4} lg={6} className="g-2">
      {IconList.map((name) => (
        <div
          style={{
            margin: '5px',
            width: '120px',
            height: '120px',
            backgroundColor: '#EEEEEE',
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ alignSelf: 'center', justifySelf: 'center' }}>
            {name}
          </div>
          <div
            style={{
              height: '40px',
              alignSelf: 'center',
              justifySelf: 'center',
            }}
          >
            <Icon name={name} />
          </div>
        </div>
      ))}
    </Row>
  </>
);

Iconography.parameters = {
  design: {
    name: 'Figma Design',
    type: 'figma',
    url:
      'https://www.figma.com/file/TENnOP4K38G6r3vDL3emCP/AB---Style-Guide?node-id=77%3A3984',
  },
};
