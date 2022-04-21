import React from 'react';
import PropTypes from 'prop-types';
import Accordion from './Accordion';

const AccordionDemo = ({
  theme,
  title1,
  title2,
  title3,
  body1,
  body2,
  body3,
  size,
}) => (
    <Accordion theme={theme}
    >
<Accordion.Item eventKey="0">
<Accordion.Header size={size}>{title1}</Accordion.Header>
<Accordion.Body>
     {body1}
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
<Accordion.Header size={size}>{title2}</Accordion.Header>
<Accordion.Body>
     {body2}
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
<Accordion.Header size={size}>{title3}</Accordion.Header>
<Accordion.Body>
     {body3}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
);

AccordionDemo.propTypes = {
  theme: PropTypes.string,
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  body1: PropTypes.string,
  body2: PropTypes.string,
  body3: PropTypes.string,
  size: PropTypes.string,
};

export default AccordionDemo;
