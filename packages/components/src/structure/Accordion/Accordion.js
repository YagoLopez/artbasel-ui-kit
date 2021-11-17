import React from 'react';
import PropTypes from 'prop-types';
import { Accordion as OriginalAccordion } from 'react-bootstrap';
import Item from './Item';
import Header from './Header';
import Body from './Body';

const Accordion = ({ cssInternalPrefix, ...props }) => {
  return (
<OriginalAccordion data-testid="mch-accordion" bsPrefix={cssInternalPrefix} {...props} />);
};

Accordion.propTypes = {
  cssInternalPrefix: PropTypes.string,
};

Accordion.defaultProps = {
  cssInternalPrefix: 'accordion',
};

export default Object.assign(Accordion, { Item, Header, Body });
