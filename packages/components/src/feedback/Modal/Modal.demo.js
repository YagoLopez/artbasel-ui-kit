import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../actions/Button';
import { TextLink } from '../../actions/TextLink';
import Modal from './Modal';

const ModalDemo = ({
  size,
  filter,
  title,
  subline,
  primaryActionText,
  secondaryActionText,
  orientation,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        show={show}
        size={size}
        onHide={handleClose}
        filter={filter}
        title={title}
        subline={subline}
      >
      <Modal.Header onHide={handleClose} title={title} filter={filter} subline={subline} />
        <Modal.Body>
          <p>lorem ipsum</p>
        </Modal.Body>
        <Modal.Footer orientation={orientation}>
          {filter ? (
            <TextLink>{secondaryActionText}</TextLink>
          ) : (
            <Button variant="secondary">{secondaryActionText}</Button>
          )}
          <Button>{primaryActionText}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModalDemo.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  filter: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subline: PropTypes.string.isRequired,
  primaryActionText: PropTypes.string.isRequired,
  secondaryActionText: PropTypes.string.isRequired,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
};

ModalDemo.defaultProps = {
  size: 'sm',
  filter: false,
  orientation: 'horizontal',
};

export default ModalDemo;
