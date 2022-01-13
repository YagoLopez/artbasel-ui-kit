import React, { useCallback, useState } from 'react';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import PropTypes from 'prop-types';
import { Icon } from '../../utils/Icon';

const ZoomableMedia = ({ children }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImgLoad = useCallback(() => {
    setIsZoomed(prevState => !prevState);
  }, []);

  return (
      <div className='zoomable-image' onClick={handleImgLoad}>
        <div className='image-frame d-flex justify-content-center align-items-center' data-testid='zoomed-content'>
          <ControlledZoom isZoomed={isZoomed} overlayBgColorStart={'rgba(0, 0, 0, 0.5)'} overlayBgColorEnd={'rgba(0, 0, 0, 1)'}>
            {children}
          </ControlledZoom>
        </div>
        <div className='d-flex justify-content-end button-container'>
          <Icon name="expand"/>
        </div>
      </div>
  );
};

ZoomableMedia.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ZoomableMedia;
