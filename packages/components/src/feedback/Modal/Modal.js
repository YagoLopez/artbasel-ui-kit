import React from 'react';
import PropTypes from 'prop-types';
import { Modal as BSModal } from 'react-bootstrap';
import Footer from './Footer';
import Body from './Body';

const Modal = ({
  children, size, show, onHide, filter, title, subline,
}) => {
  return (
    <BSModal
      data-testid="mch-modal"
      size={filter ? 'filter' : size}
      show={show}
      onHide={onHide}
    >
      <BSModal.Header closeButton className="p-5 px-md-8">
        <div>
          {filter ? (
            <h5 className="pt-3 modal-title-filter">{title}</h5>
          ) : (
            <h3 className="pt-3 modal-title">{title}</h3>
          )}
          {subline && <p className="modal-subline mb-0">{subline}</p>}
        </div>
      </BSModal.Header>
      {children}
    </BSModal>
  );
};

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subline: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  filter: PropTypes.bool,
};

Modal.defaultProps = {
  size: 'sm',
  show: false,
  filter: false,
  onHide: () => {},
};

export default Object.assign(Modal, {
  Footer,
  Body,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150,
});
