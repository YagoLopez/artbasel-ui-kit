import React, {
  useRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import classnames from 'classnames';
import { Icon } from '../../../utils/Icon';
import Slide from './Slide';

const Carousel = ({
  title,
  options,
  cssStyles,
  children,
  exceedTrack,
}) => {
  const carousel = useRef();
  const prevArrow = useRef();
  const nextArrow = useRef();

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

  const enableArrow = (arrow) => {
    if (arrow.current.classList.contains('disabled')) {
      arrow.current.classList.remove('disabled');
      arrow.current.disabled = false;
    }
  };
  const disableArrow = (arrow) => {
    if (!arrow.current.classList.contains('disabled')) {
      arrow.current.classList.add('disabled');
      arrow.current.disabled = true;
    }
  };

  useEffect(() => {
    if (carousel.current && prevArrow.current) {
      disableArrow(prevArrow);
    }
  }, []);

  const handleItemMove = (_, index) => {
    const items = carousel.current.querySelectorAll('li');
    const itemCount = items?.length || 0;
    const lastItem = itemCount > 0 ? items[itemCount - 1] : 0;
    const lastItemVisible = lastItem.classList.contains('is-visible');

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
      data-textid="mch-carousel"
      style={cssStyles}
      className="carousel-container pt-8 pt-xl-11 pb-9 pb-xl-11"
    >
      <h3 className="pb-7 pb-xl-9">{title}</h3>
      <Splide
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
  cssStyles: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Carousel.defaultProps = {
  options: {
    width: '100%',
    rewind: false,
    perMove: 1,
    perPage: null,
    pagination: false,
    arrows: 2,
  },
  cssStyles: null,
  children: null,
  exceedTrack: false,
};

export default Object.assign(Carousel, { Slide });
