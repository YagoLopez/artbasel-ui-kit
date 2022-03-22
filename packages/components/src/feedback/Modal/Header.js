import React from 'react';
import PropTypes from 'prop-types';
import ModalHeader from 'react-bootstrap/ModalHeader';
import { ButtonIcon } from '../../actions/ButtonIcon';

const Header = ({
  filter, title, subline, onHide,
}) => (
    <ModalHeader data-testid="mch-modal-header">
    <div>
      {filter ? (
        <h5 className="modal-title">{title}</h5>
      ) : (
        <h4 className="modal-title">{title}</h4>
      )}
      {subline && <p className="modal-subline mb-0">{subline}</p>}
    </div>
    <ButtonIcon icon="close" onClick={onHide} className="btn-close" />
  </ModalHeader>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.bool,
  subline: PropTypes.string,
  onHide: PropTypes.func,
};

Header.defaultProps = {
  filter: false,
  subline: '',
  onHide: () => {},
};

export default Header;
