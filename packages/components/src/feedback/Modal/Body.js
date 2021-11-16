import React from 'react';
import PropTypes from 'prop-types';
import ModalBody from 'react-bootstrap/ModalBody';

const Body = ({ children, className }) => (
  <ModalBody
    data-testid="mch-modal-body"
    className={className}
  >
    {children}
  </ModalBody>
);

Body.propTypes = {
  children: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Body;
