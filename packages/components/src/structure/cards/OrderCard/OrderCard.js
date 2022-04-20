import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Icon } from '../../../utils/Icon';

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
      className={classnames('order-card', {
        'border-top': borderTop,
        'border-bottom': borderBottom,
      })}
      style={cssStyles}
      onClick={onClick}
    >
      <div className="image-col">
        <img src={image} alt="picture" />
      </div>
      <div className="data-col d-flex justify-content-between">
        <div className="d-flex flex-column justify-content-between">
          <h5>{title}</h5>
          <p className="subtitle">{subtitle}</p>
          <p className="status">{status}</p>
        </div>
        <div className="ml-auto d-flex align-items-center icon-wrapper">
          <Icon name="chevron-right" size={24} />
        </div>
      </div>
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
  borderTop: true,
  borderBottom: true,
  year: null,
  onClick: () => {},
  cssStyles: null,
};

export default OrderCard;
