import React from 'react';
import PropTypes from 'prop-types';
import Links from './Links';
import Payment from './Payment';
import Social from './Social';
import Legal from './Legal';

import schema from './Footer.schema.json';
import { Divider } from '../../structure/Divider';

const { Validator } = require('jsonschema');

const v = new Validator();

const FooterBuilder = ({
  variant, footerData, socialMedia, paymentMethods, legalData, linkRenderer,
}) => {
  return <>
    <footer className=" bg-black text-white">
          <div className="container pt-10 pb-8 ps-5 pe-5 ps-md-7 pe-md-7 pb-md-8 p-lg-8 pt-lg-12   row">
            <section className="col-lg-9 col-md-12 left-section">
                <Links cols={footerData.cols} linkRenderer={linkRenderer}></Links>
              </section>
              <section className="col-lg-3 col-md-0 right-section text-lg-start text-md-center">
                <Divider className='d-none d-md-block d-lg-none' color='mch-gray-500' size='s'></Divider>
                <Social socialMediaData={socialMedia} linkRenderer={linkRenderer}></Social>
                <Divider className='d-lg-none' color='mch-gray-500' size='s'></Divider>
                <Payment paymentData={paymentMethods}></Payment>
              </section>
              <Divider className='' color='mch-gray-500' size='s'></Divider>
              <section className="row mt-7 bottom-section">
                <Legal variant={variant} legalData={legalData} linkRenderer={linkRenderer}></Legal>
              </section>
            </div>
    </footer>
  </>;
};

const Footer = ({
  variant, footerData, socialMedia, paymentMethods, legalData, linkRenderer,
}) => {
  const jsonValidation = v.validate(footerData, schema);
  const { errors } = jsonValidation;
  if (errors.length > 0) {
    console.log(errors);
    return (
      <p>
        Footer Component: Error Validation JSON Schema. Please check console
        log.
      </p>
    );
  }

  return (<FooterBuilder footerData={footerData} variant={variant}
    socialMedia={socialMedia} paymentMethods={paymentMethods}
    legalData={legalData} linkRenderer={linkRenderer}></FooterBuilder>);
};

const labelLink = {
  label: PropTypes.string,
  link: PropTypes.string,
};

FooterBuilder.displayName = 'FooterBuilder';

FooterBuilder.propTypes = {
  variant: PropTypes.string,
  footerData: PropTypes.object.isRequired,
  socialMedia: PropTypes.object.isRequired,
  paymentMethods: PropTypes.object.isRequired,
  legalData: PropTypes.object.isRequired,
  linkRenderer: PropTypes.func.isRequired,
};

Footer.displayName = 'Footer';

Footer.propTypes = {
  /** JSON of arrays. Each array contains the information of one of the footer columnso
  Please check bellow the JSON used on this footer test. */
  footerData: PropTypes.shape({ cols: [PropTypes.object].isRequired }).isRequired,
  /** JSON object that contains the data about social media section */
  socialMedia: PropTypes.shape({
    title: PropTypes.string,
    entries: PropTypes.arrayOf(PropTypes.shape(labelLink)),
  }).isRequired,
  /** JSON object that contains the data about payments section */
  paymentMethods: PropTypes.shape({
    title: PropTypes.string,
    entries: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  /** JSON object that contains the bottom data about legal concerns */
  legalData: PropTypes.shape({
    copyright: PropTypes.string,
    entries: PropTypes.arrayOf(PropTypes.shape(labelLink)),
  }).isRequired,
  /** A renderer for
  all links. */
  linkRenderer: PropTypes.func.isRequired,
  /** The footer
   variant. */
  variant: PropTypes.oneOf(['artbasel', 'paris']),
};

Footer.defaultProps = {
  variant: 'artbasel',
  linkRenderer: (link, children, target) => <a href={link} target={target}>{children}</a>,
};

export default Footer;
