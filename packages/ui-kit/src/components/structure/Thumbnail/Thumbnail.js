import React, { useRef, useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Thumbnail = ({
  src,
  width,
  height
}) => {

  const imgRef = useRef(null);
  
  const [maskSize, setMaskSize] = useState({width: 0, height: 0});
  const [imgSize, setImgSize] = useState({width: 0, height: 0});
  const [imgElement, setImgElement] = useState(null);

  const setImageSize = (chngattr, attr) => {
    const img = imgRef.current.querySelector('img');

    img.style[chngattr] = `${maskSize[chngattr]}px`;
    img.style[attr] = 'auto';

    const direction = attr === 'height' ? 'Y' : 'X';
    img.style.transform = `translate${direction}(-${(img[attr] - maskSize[attr]) / 2}px)`;

  };

  useEffect(() => {
    if (imgRef.current) {
      setMaskSize({
        width: imgRef.current.offsetWidth,
        height: imgRef.current.offsetHeight
      });
    }
  }, [imgRef.current, height, width]);

  useEffect(() => {
    if (imgSize.width > 0 && maskSize.width > 0) {
      const attrs = imgSize.width <= imgSize.height
        ? { changing: 'width', cover: 'height'}
        : { changing: 'height', cover: 'width'};

      setImageSize(attrs.changing, attrs.cover);

      if (imgElement[attrs.cover] < maskSize[attrs.cover]) {
        setImageSize(attrs.cover, attrs.changing);
      }
    }
  }, [imgSize, maskSize]);

  const handleImgSize = (e) => {
    setImgSize({
      width: e.target.width,
      height: e.target.height
    });
    setImgElement(e.target);
  };

  return (
    <div
      className="thumbnail"
      ref={imgRef}
      style={{width, height}}
    >
      <Image src={src} onLoad={handleImgSize} />
    </div>
  );
};

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};

Thumbnail.defaultProps = {
  width: null,
  height: null
};

export default Thumbnail;
