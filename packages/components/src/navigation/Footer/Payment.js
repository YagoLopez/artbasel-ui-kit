import React from 'react';
import PropTypes from 'prop-types';

import { PaymentMethodLogo } from '../../utils';

const buildElement = (icon) => <li key={icon} className="d-inline-block me-5 me-lg-4">{PaymentMethodLogo({ name: icon, width: 32, height: 24 })}</li>;

const Payment = ({ paymentData }) => {
  return (<div className='row h-lg-25 h-md-100 pb-10 pt-8 ps-md-16 pe-md-16 ps-lg-0 pe-lg-0 pt-lg-0 pb-lg-0' data-testid="mch-footer-payment">
            <h5 className="header-uppercase-2 text-white mt-8 mb-4 d-none d-lg-block">{paymentData.title}</h5>
            <ul className='mb-0 text-center text-lg-start d-lg-block'>
              {paymentData.entries.map(icon => buildElement(icon))}
            </ul>
          </div>);
};

Payment.propTypes = {
  paymentData: PropTypes.shape({
    title: PropTypes.string,
    entries: PropTypes.arrayOf(
      PropTypes.string,
    ),
  }).isRequired,
};

export default Payment;
