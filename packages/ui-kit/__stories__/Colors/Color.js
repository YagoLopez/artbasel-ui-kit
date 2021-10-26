/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

export const Color = ({ color, name }) => (
  <div className="me-4 my-4">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="72.000000pt" height="72.000000pt" viewBox="0 0 72.000000 72.000000" preserveAspectRatio="xMidYMid meet" className="color-shadow" style={{ filter: 'drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25))' }}>
      <g transform="translate(0.000000,72.000000) scale(0.100000,-0.100000)" fill={color} stroke="none">
        <path d="M162 474 c4 -150 18 -190 87 -239 36 -25 52 -30 104 -30 112 0 191 66 204 172 8 70 -29 147 -89 189 -40 28 -47 29 -175 33 l-135 3 4 -128z" />
      </g>
    </svg>
    <h6 className="text-center" style={{ width: '100px' }}>{name}</h6>
  </div>
);

export default Color;

Color.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
