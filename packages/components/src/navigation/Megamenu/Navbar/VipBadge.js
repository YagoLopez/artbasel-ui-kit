import React from 'react';
import PropTypes from 'prop-types';

const VipBadge = ({ title }) => {
  return (<h1 className='vip-badge header-uppercase-2 bg-black text-white'>{ title }</h1>);
};

VipBadge.propTypes = {
  title: PropTypes.string.isRequired,
};

VipBadge.defaultProps = {
  title: 'vip',
};

export default VipBadge;
