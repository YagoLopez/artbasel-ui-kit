import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import { Icon } from '../../utils/Icon';

const Banner = ({
  header, body, icon, status, button, linkRenderer,
}) => {
  return <Container className={`banner-container ${status}`} data-testid="mch-banner">
    <Row className='p-7 pb-0'>
    {icon && (<div si className='pe-5 icon-column'>{Icon({ name: icon, height: 24, width: 24 })}</div>)}
      <Col>
      <Row>
      <div className='col text-column mb-7'>
          {header && (<Row className='pt-3 mb-2'><h5>{header}</h5></Row>)}
          {body && (<Row><p className='m-0 pe-10'>{body}</p></Row>)}
        </div>
        {button && (<div className='col link-column pb-7 text-link'><a>{linkRenderer({ ...button })}</a></div>)}
        </Row>
      </Col>

    </Row>

      </Container>;
};

Banner.propTypes = {
  /** In order to not show it send it empty or just don't send it */
  header: PropTypes.string,
  /** In order to not show it send it empty or just don't send it */
  body: PropTypes.string,
  /** In order to not show it send it empty or just don't send it.
   * You can place any Icon from Iconography collection
   */
  icon: PropTypes.string,
  /** You must place any information needed for linkRenderer function.
   * This structure is for the below linkRenderer */
  button: PropTypes.shape({
    link: PropTypes.string,
    label: PropTypes.string,
    target: PropTypes.string,
  }),
  /** Controls the header color */
  status: PropTypes.oneOf(['default', 'informational', 'success', 'warning', 'error']),
  /**  Function to render links */
  linkRenderer: PropTypes.func,
};

Banner.defaultProps = {
  status: 'default',
  linkRenderer: ({ link, label, target }) => <a href={link} target={target}>{label}</a>,
};
export default Banner;
