import React from 'react';
import PropTypes from 'prop-types';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import classNames from 'classnames';

const Header = ({
  cssInternalPrefix, children, onClick, size, cssStyles, className,
}) => (
    <AccordionHeader style={cssStyles} onClick={onClick} className={classNames(`size-${size}`, className)} data-testid="mch-accordion-header" bsPrefix={cssInternalPrefix}>
        {children}
    </AccordionHeader>
);
Header.propTypes = {
  cssInternalPrefix: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['default', 'l']),
  cssStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  className: PropTypes.string,
};
Header.defaultProps = {
  cssInternalPrefix: 'accordion-header',
  size: 'default',
  onClick: () => {},
};

export default Header;
