import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ButtonIcon } from '../../../actions/ButtonIcon';

const ZoomableImage = ({ image, thumbnail }) => {
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);
  const [imageIsZoomed, setImageIsZoomed] = useState(false);

  const handleZoomToggle = useCallback(() => {
    if (!overlayIsVisible) {
      setOverlayIsVisible(true);
      setTimeout(() => setImageIsZoomed(true), 50);
    } else {
      setImageIsZoomed(false);
      setTimeout(() => setOverlayIsVisible(false), 350);
    }
  }, [overlayIsVisible]);

  return (
    <>
      <div className={classnames('zoomed-image-container', { visible: overlayIsVisible })} data-testid='zoomed-image-container'>
        <div className={classnames('zoomed-image-frame', { zoomed: imageIsZoomed })} data-testid='zoomed-image-frame' onClick={handleZoomToggle}>
          <img src={ image} data-testid="full-image"/>
        </div>
      </div>
      <div className="zoomable-image-container">
        <div className="image-frame" data-testid='viewer-content'>
          <img src={ thumbnail } data-testid="thumb-image"/>
        </div>
        <div className="d-flex justify-content-end button-container">
          <ButtonIcon icon="expand" onClick={handleZoomToggle} />
        </div>
      </div>
    </>
  );
};

ZoomableImage.propTypes = {
  image: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default ZoomableImage;
