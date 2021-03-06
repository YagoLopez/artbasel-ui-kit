import React from 'react';
import PropTypes from 'prop-types';
import { Splide } from '@splidejs/react-splide';
import Slide from './Slide';
import ButtonIcon from '../../../actions/ButtonIcon/ButtonIcon';

const CarouselPDP = ({
  children,
  cssStyles,
  showBackButton,
  goBack,
  onMove,
  onMoved,
  onDrag,
}) => {
  const options = {
    width: '100%',
    perPage: 1,
    pagination: true,
    arrows: false,
  };

  const renderPagination = (data) => {
    const { items } = data.Components.Pagination;
    items[0]?.li.parentNode.classList.add('carousel-pdp-pagination');
    items.map((item) => {
      item.li?.classList?.add('carousel-pdp-pagination-item');
      return true;
    });
  };

  return (
    <div
      data-testid="mch-carousel-pdp"
      className="carousel-pdp-container"
      style={cssStyles}
    >
      {showBackButton
        && <ButtonIcon
          icon="arrow-left"
          onClick={goBack}
          className="carousel-back-btn"
        />
      }
      <Splide
        options={options}
        onPaginationMounted={renderPagination}
        onMove={onMove}
        onMoved={onMoved}
        onDrag={onDrag}
      >
        {children}
      </Splide>
    </div>
  );
};

CarouselPDP.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  cssStyles: PropTypes.string,
  showBackButton: PropTypes.bool,
  goBack: PropTypes.func,
  onMove: PropTypes.func,
  onMoved: PropTypes.func,
  onDrag: PropTypes.func,
};

CarouselPDP.defaultProps = {
  cssStyles: null,
  showBackButton: false,
  goBack: () => {},
  onMove: () => {},
  onMoved: () => {},
  onDrag: () => {},
};

export default Object.assign(CarouselPDP, { Slide });
