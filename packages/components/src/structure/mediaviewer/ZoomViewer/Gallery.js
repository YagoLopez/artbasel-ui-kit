import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import { CustomGallery as PSCustomGallery, DefaultLayout } from 'react-photoswipe-gallery';

const Gallery = ({
  children, options, id, onOpen, ...restProps
}) => {
  const layoutRef = useRef();
  return (<PSCustomGallery
        data-testid="mch-zoomviewer-gallery"
        layoutRef={ layoutRef }
        ui={ PhotoswipeUIDefault }
        options={ options }
        id={ id }
        onOpen={ onOpen }
    >
        { children }
    <DefaultLayout
      shareButton={ false }
      fullscreenButton={ false }
      ref={ layoutRef }
      { ...restProps } />
    </PSCustomGallery>
  );
};

Gallery.propTypes = {
  children: PropTypes.object.isRequired,
  options: PropTypes.object,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Gallery.defaultProps = {
  options: { getDoubleTapZoom: () => 1, barsSize: { top: 64, bottom: 64 } },
};

export default Gallery;
