import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ModalFooter from 'react-bootstrap/ModalFooter';

const Footer = ({ children, className, orientation }) => (
  <ModalFooter
    data-testid="mch-modal-footer"
    className={ classnames(className, { vertical: orientation === 'vertical' }) }
  >
    {children}
  </ModalFooter>
);

Footer.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.string,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
};

Footer.defaultProps = {
  orientation: 'horizontal',
};

export default Footer;
