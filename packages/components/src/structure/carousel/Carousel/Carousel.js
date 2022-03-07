import React, {
  useRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { Splide } from '@splidejs/react-splide';
import classnames from 'classnames';
import { Icon } from '../../../utils/Icon';
import Slide from './Slide';

const Carousel = ({
  title,
  options,
  cssStyles,
  children,
  exceedTrack,
  showTopBorders,
  showBottomBorders,
}) => {
  const carousel = useRef();
  const prevArrow = useRef();
  const nextArrow = useRef();
  const splideRef = useRef();
  const items = {};

  /* There is a default options objetc in case its not passed as prop.
    But in case the object is passed, we set default attrs in case not
    every attr is set.
  */
  const carouselOptions = {
    width: options?.width || '100%',
    rewind: options?.rewind || false,
    perMove: options?.perMove || 1,
    perPage: options?.perPage || null,
    pagination: options?.pagination || false,
    arrows: options?.arrows || 2,
    ...options,
  };

  const enableArrow = ({ current }) => {
    if (current?.classList.contains('disabled')) {
      current.classList.remove('disabled');
      current.disabled = false;
    }
  };
  const disableArrow = ({ current }) => {
    if (!current?.classList.contains('disabled')) {
      current.classList.add('disabled');
      current.disabled = true;
    }
  };

  const handleWheelSwipe = (e) => {
    if (e.deltaX > 1) {
      splideRef.current.splide.go('+1');
    } else if (e.deltaX < 1) {
      splideRef.current.splide.go('-1');
    }
  };

  useEffect(() => {
    if (carousel.current && prevArrow.current) {
      const li = carousel.current.querySelectorAll('li');
      items.elements = li;
      items.count = li?.length || 0;
      carousel.current.addEventListener('wheel', handleWheelSwipe);
      disableArrow(prevArrow);
    }
  }, []);

  const handleItemMove = (_, index) => {
    const lastItem = items.count > 0 ? items.elements[items.count - 1] : 0;
    const lastItemVisible = lastItem?.classList.contains('is-visible');

    if (index === 0) {
      disableArrow(prevArrow);
    } else {
      enableArrow(prevArrow);
    }

    if (lastItemVisible) {
      disableArrow(nextArrow);
    } else {
      enableArrow(nextArrow);
    }
  };

  const renderCustomControls = () => (
    <div className="carousel-arrows splide__arrows">
      <button
        className="splide__arrow--prev btn-icon"
        role="button"
        ref={prevArrow}
      >
        <Icon name="chevron-right" size={24} />
      </button>
      <button
        className="splide__arrow--next btn-icon"
        role="button"
        ref={nextArrow}
      >
        <Icon name="chevron-right" size={24} />
      </button>
    </div>
  );

  return (
    <div ref={carousel}
      data-testid="mch-carousel"
      style={cssStyles}
      className={classnames(
        'carousel-container pb-9 pb-xl-11',
        {
          'top-bordered': showTopBorders,
          'bottom-bordered': showBottomBorders,
        },
      )}
    >
      <h3 className="pb-7 pb-xl-9 header-uppercase-1">{title}</h3>
      <Splide
        ref={splideRef}
        className={classnames({
          'exceed-track': exceedTrack,
          unlimited: !options.perPage,
        })}
        renderControls={ options.arrows && renderCustomControls}
        onMoved={handleItemMove}
        options={carouselOptions}
      >
        {children}
      </Splide>
    </div>
  );
};

Carousel.propTypes = {
  title: PropTypes.string.isRequired,
  /** Used to force the carousel width exceed its container
   and use the total page width.
   This prop requires the attribute overflow-x: hidden on the
   main container or body to avoid an horizontal scrollbar.
   Please refer to code sample. */
  exceedTrack: PropTypes.bool,
  options: PropTypes.shape({
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    rewind: PropTypes.bool,
    perMove: PropTypes.number,
    perPage: PropTypes.number,
    pagination: PropTypes.bool,
    arrows: PropTypes.number,
  }),
  showTopBorders: PropTypes.bool,
  showBottomBorders: PropTypes.bool,
  cssStyles: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Carousel.defaultProps = {
  title: null,
  options: {
    width: '100%',
    rewind: false,
    perMove: 1,
    perPage: null,
    pagination: false,
    arrows: 2,
  },
  showTopBorders: true,
  showBottomBorders: true,
  cssStyles: null,
  children: null,
  exceedTrack: false,
};

export default Object.assign(Carousel, { Slide });
