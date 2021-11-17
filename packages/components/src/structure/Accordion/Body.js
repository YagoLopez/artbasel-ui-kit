import React from 'react';
import PropTypes from 'prop-types';
import AccordionBody from 'react-bootstrap/AccordionBody';

const Body = ({
  cssInternalPrefix, children, className, cssStyles,
}) => (
    <AccordionBody data-testid="mch-accordion-body" className={className} style={cssStyles} bsPrefix={cssInternalPrefix}>
        {children}
    </AccordionBody>
);
Body.propTypes = {
  cssInternalPrefix: PropTypes.string,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  cssStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
Body.defaultProps = {
  cssInternalPrefix: 'accordion-body',
};

export default Body;
