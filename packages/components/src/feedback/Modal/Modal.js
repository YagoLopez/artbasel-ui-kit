import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Modal as BSModal } from 'react-bootstrap';
import Footer from './Footer';
import Body from './Body';
import Header from './Header';

const Modal = ({
  children, size, show, onHide, filter, className, ...props
}) => {
  return (
    <BSModal
      data-testid="mch-modal"
      size={filter ? 'filter' : size}
      show={show}
      onHide={onHide}
      className={ classnames({ 'modal-fullscreen': filter }, className) }
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
    >
      {children}
    </BSModal>
  );
};

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  filter: PropTypes.bool,
  className: PropTypes.string,
};

Modal.defaultProps = {
  size: 'sm',
  show: false,
  filter: false,
  onHide: () => {},
  className: '',
};

export default Object.assign(Modal, {
  Footer,
  Body,
  Header,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150,
});
