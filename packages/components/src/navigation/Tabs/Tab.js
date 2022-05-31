import React from 'react';
import { Tab as BSTab } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Tab = ({
  children,
  title,
  eventKey,
}) => (
  <BSTab
    title={title}
    eventKey={eventKey}
  >
    {children}
  </BSTab>
);

Tab.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  eventKey: PropTypes.string,
};

export default Tab;
