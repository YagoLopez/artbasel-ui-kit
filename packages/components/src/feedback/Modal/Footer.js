import React from 'react';
import PropTypes from 'prop-types';
import ModalFooter from 'react-bootstrap/ModalFooter';

const Footer = ({ children, className }) => (
  <ModalFooter
    data-testid="mch-modal-footer"
    className={className}
  >
    {children}
  </ModalFooter>
);

Footer.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Footer;
