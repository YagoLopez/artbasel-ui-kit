import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Accordion as OriginalAccordion } from 'react-bootstrap';
import Item from './Item';
import Header from './Header';
import Body from './Body';

const Accordion = ({ cssInternalPrefix, theme, ...props }) => {
  return (
<OriginalAccordion data-testid="mch-accordion" bsPrefix={cssInternalPrefix} className={classNames(theme)} {...props} />);
};

Accordion.propTypes = {
  cssInternalPrefix: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
};

Accordion.defaultProps = {
  cssInternalPrefix: 'accordion',
  theme: 'light',
};

export default Object.assign(Accordion, { Item, Header, Body });
