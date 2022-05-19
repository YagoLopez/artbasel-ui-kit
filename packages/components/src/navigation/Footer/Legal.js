import React from 'react';
import { PropTypes } from 'prop-types';
import { UbsLogo } from '../../utils';

const Legal = ({ variant, legalData, linkRenderer }) => {
  const getLogo = () => {
    if (variant === 'artbasel') {
      return UbsLogo({ color: 'white', width: 55, height: 20 });
    } else if (variant === 'paris') {
      /* We render the same logo now, but in future it might change */
      return UbsLogo({ color: 'white', width: 55, height: 20 });
    }

    return <></>;
  };

  const buildLink = ({ label, link, target }) => {
    return <li key={label} className="d-inline-block me-5">{linkRenderer(link, label, target)}</li>;
  };

  const hasData = (obj) => obj && Object.keys(obj).length;

  if (hasData(legalData)) {
    return (<div className='row' data-testid="mch-footer-legal">
    <div className='col-md-6 text-start'>
      <ul className='p-0 text-label-small mb-8 mb-md-0'>
          {legalData.entries.map(link => buildLink(link))}
    </ul>
    </div>
    <div className='col-md-6 text-end copyright-container'>
      <ul className='p-0 m-0 text-small'>
      <li className='d-inline-block ms-md-5 float-start float-md-none text-small copyright'>{legalData.copyright}</li>
      <li className='d-inline-block ms-md-5 float-end'>{getLogo()}</li>

      </ul>

    </div>
  </div>);
  } else {
    return (<></>);
  }
};

Legal.propTypes = {
  variant: PropTypes.string,
  legalData: PropTypes.shape({
    copyright: PropTypes.string,
    entries: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    })),
  }).isRequired,
  linkRenderer: PropTypes.func.isRequired,
};

export default Legal;
