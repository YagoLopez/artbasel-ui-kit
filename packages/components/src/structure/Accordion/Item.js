import React from 'react';
import PropTypes from 'prop-types';
import AccordionItem from 'react-bootstrap/AccordionItem';

const Item = ({ cssInternalPrefix, children, eventKey }) => {
  return (
    <AccordionItem eventKey={eventKey} data-testid="mch-accordion-item" bsPrefix={cssInternalPrefix}>
        {children}
    </AccordionItem>
  );
};
Item.propTypes = {
  eventKey: PropTypes.string.isRequired,
  cssInternalPrefix: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Item.defaultProps = {
  cssInternalPrefix: 'accordion-item',
};

export default Item;
