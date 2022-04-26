import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../../utils/Icon';
import { Divider } from '../../Divider';

const OrderCard = ({
  title,
  borderTop,
  borderBottom,
  artworkName,
  year,
  image,
  status,
  onClick,
  cssStyles,
}) => {
  const subtitle = year ? [artworkName, year].join(', ') : artworkName;
  return (
    <div
      data-testid="mch-order-card"
      style={cssStyles}
      onClick={onClick}
    >
      {borderTop && <Divider color="mch-gray-200"/>}
      <div className="order-card">
        <div className="image-col">
          <img src={image} alt="picture" />
        </div>
        <div className="data-col d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-between">
            <h5 className="headline-underline">{title}</h5>
            <p className="subtitle headline-underline">{subtitle}</p>
            <p className="status">{status}</p>
          </div>
          <div className="ml-auto d-flex align-items-center icon-wrapper">
            <Icon name="chevron-right" size={24} />
          </div>
        </div>
      </div>
      {borderBottom && <Divider color="mch-gray-200" />}
    </div>
  );
};

OrderCard.propTypes = {
  title: PropTypes.string.isRequired,
  borderTop: PropTypes.bool,
  borderBottom: PropTypes.bool,
  artworkName: PropTypes.string.isRequired,
  year: PropTypes.string,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  cssStyles: PropTypes.string,
};

OrderCard.defaultProps = {
  borderTop: false,
  borderBottom: false,
  year: null,
  onClick: () => {},
  cssStyles: null,
};

export default OrderCard;
