import React from 'react';
import { PropTypes } from 'prop-types';
import { navigate } from '@storybook/addon-links';
import { ButtonIcon } from '../../actions/ButtonIcon';

const buildElement = ({
  icon, label, link, target, linkRenderer,
}) => <li key={icon} className="d-inline-block mr-4">{
  linkRenderer(
    link,
    ButtonIcon({
      icon, theme: 'dark', title: label,
    }),
    target,
  )
  }</li>;

const Social = ({ socialMediaData, linkRenderer }) => {
  return <div className='row h-lg-25 h-md-100 ps-md-16 pe-md-16 ps-lg-0 pe-lg-0 pt-8 pb-8 pt-lg-0 pb-lg-0' data-testid="mch-footer-social">
            <h5 className="header-uppercase-2 text-white mb-4 mt-0 d-none d-lg-block">{socialMediaData.title}</h5>
            <ul className='mb-0 d-flex justify-content-between d-lg-block'>
              {socialMediaData.entries.map(entry => buildElement({ ...entry, linkRenderer }))}
            </ul>
          </div>;
};

Social.propTypes = {
  socialMediaData: PropTypes.shape({
    title: PropTypes.string,
    entries: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.string,
      link: PropTypes.string,
    })),
  }).isRequired,
  linkRenderer: PropTypes.func.isRequired,
};

export default Social;
