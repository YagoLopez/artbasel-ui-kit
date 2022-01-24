import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({
  children,
  title,
  eventKey,
}) => {
  if (!children || !title) {
    return null;
  }

  return (
    <div
      title={title}
      eventKey={eventKey}
      data-testid="mch-tab"
    >
      {children}
    </div>
  );
};

Tab.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  eventKey: PropTypes.string,
};

export default Tab;
