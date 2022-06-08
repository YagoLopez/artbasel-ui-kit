import React, {
  useEffect, useRef, useState,
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Tabs as BSTabs } from 'react-bootstrap';
import { debounce } from '../../helpers/debounce';
import { ButtonIcon } from '../../actions/ButtonIcon';

const Tabs = ({
  children,
  className,
  id,
  defaultActiveKey,
  onSelect,
  activeKey,
  bottomDividerColor,
}) => {
  const containerRef = useRef(null);

  const [tabsContainer, setTabsContainer] = useState(null);

  const [scrolledPixels, setScrolledPixels] = useState(0);

  const [showLeftScrollArrow, setShowLeftScrollArrow] = useState(false);
  const [showRigthScroll, setShowRigthScrollArrow] = useState(false);

  const [windowSize, setWindowSize] = useState(0);

  const handleScroll = (direction) => {
    let amount = Math.ceil(window.innerWidth / 1.5);

    if (direction === 'left') {
      amount *= -1;
      setShowRigthScrollArrow(true);
    } else {
      setShowLeftScrollArrow(true);
    }
    tabsContainer.scrollBy({ left: amount, behavior: 'smooth' });
  };

  // this code in case design wants autoscroll on click tab
  /* const checkIfElementIsVisible = (e) => {
    const rect = e.getBoundingClientRect();

    return (
      rect.left >= (tabsContainer.scrollLeft)
      && (rect.right <= tabsContainer.scrollLeft
      && rect.right <= window.innerWidth)
    );
  }; */

  const checkScrollArrows = () => {
    const maxPossibleScroll = tabsContainer.scrollWidth - tabsContainer.clientWidth;

    if (scrolledPixels <= 0) {
      setShowLeftScrollArrow(false);
    } else {
      setShowLeftScrollArrow(true);
    }

    if (scrolledPixels >= maxPossibleScroll) {
      setShowRigthScrollArrow(false);
    } else {
      setShowRigthScrollArrow(true);
    }
  };

  const onScroll = debounce(e => { setScrolledPixels(e.target.scrollLeft); }, 250);
  const onWindowResize = debounce(() => setWindowSize(window.innerWidth), 250);

  // this code in case design wants autoscroll on click tab
  /* const onTabClick = (e) => {
    if (!checkIfElementIsVisible(e.target)) {
      tabsContainer.scrollTo({ left: e.target.offsetLeft - 24, behavior: 'smooth' }); }
  }; */

  useEffect(() => {
    if (tabsContainer) {
      checkScrollArrows();
      tabsContainer.addEventListener('scroll', onScroll);
      window.addEventListener('resize', onWindowResize);
      return () => {
        tabsContainer.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onWindowResize);
      };
    }
  }, [tabsContainer, scrolledPixels, windowSize]);

  useEffect(() => {
    if (containerRef.current) {
      setTabsContainer(containerRef.current.getElementsByTagName('ul')[0]);

      /* if (tabsContainer) {
        const tabs = Array.from(tabsContainer.getElementsByTagName('li'));

        tabs.map(elem => {
          return elem.addEventListener('click', onTabClick);
        });

        return () => {
          tabs.map(elem => {
            return elem.removeEventListener('click', onTabClick);
          });
        };
      } */
    }
  }, [containerRef.current]);

  return (
    <div className='position-relative overflow-hidden' ref={containerRef}>

      <div className={classNames('scroll-button scroll-left ps-5 pe-8 py-0 py-md-2', { 'd-none': !showLeftScrollArrow })}>
      <ButtonIcon icon='chevron-left' onClick={() => handleScroll('left')}/>
      </div>

     <BSTabs
      variant="tabs"
      className={classNames(
        'px-7',
        className,
        bottomDividerColor && `divider-color-grey-${bottomDividerColor}`,
      )}
      id={id}
      defaultActiveKey={defaultActiveKey}
      data-testid="mch-tabs"
      activeKey={activeKey}
      onSelect={onSelect}
    >
      {children}
    </BSTabs>

    <div className={classNames('scroll-button scroll-right ps-8 pe-5 py-0 py-md-2', { 'd-none': !showRigthScroll })}>
      <ButtonIcon icon='chevron-right' onClick={() => handleScroll('right')}/>
      </div>

    </div>

  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  id: PropTypes.string,
  defaultActiveKey: PropTypes.string,
  onSelect: PropTypes.func,
  bottomDividerColor: PropTypes.oneOf(['100', '200']),
};

Tabs.defaultProps = {
  bottomDividerColor: '200',
  onSelect: () => null,
};

export default Tabs;
