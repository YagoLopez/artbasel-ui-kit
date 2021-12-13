import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Modal as BSModal } from 'react-bootstrap';
import { ButtonIcon } from '../../actions/ButtonIcon';
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
      className={classnames({ 'modal-fullscreen': filter })}
    >
      <BSModal.Header>
        <div>
          {filter ? (
            <h5 className="modal-title">{title}</h5>
          ) : (
            <h3 className="modal-title">{title}</h3>
          )}
          {subline && <p className="modal-subline mb-0">{subline}</p>}
        </div>
        <ButtonIcon icon="close" onClick={onHide} className="btn-close" />
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
