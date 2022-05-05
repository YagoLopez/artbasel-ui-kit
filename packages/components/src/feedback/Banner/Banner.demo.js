import React from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner';

const BannerDemo = ({
  header, body, icon, status, button, linkRenderer,
}) => {
  return <Banner
    header={header}
    body={body}
    icon={icon}
    button={button}
    status={status}
    linkRenderer={linkRenderer}>
  </Banner>;
};

BannerDemo.propTypes = {
  header: PropTypes.string,
  body: PropTypes.string,
  icon: PropTypes.string,
  button: PropTypes.shape({
    link: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    label: PropTypes.any.isRequired,
  }),
  status: PropTypes.oneOf(['default', 'informational', 'success', 'warning', 'error']),
  linkRenderer: PropTypes.func,
};

export default BannerDemo;
