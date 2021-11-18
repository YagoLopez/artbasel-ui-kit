import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const style = {
  height: '8px',
  width: '8px',
};

const Tag = ({ label, live, headerLabel }) => {
  return (
    <div data-testid= "mch-tag" className="tag">
      {
        headerLabel
          && <div className="tag-shadow d-inline-block p-3 bg-black tag-border-radius-start text-white">
            <p className="text-label-small mb-0">
              {headerLabel}
            </p>
          </div>
      }
      <div className={classNames('tag-shadow d-inline-block p-3 bg-white', {
        'tag-border-radius-end': headerLabel,
        'tag-border-radius': !headerLabel,
      })}>
        <p className="text-label-small mb-0">
          {
            live && <div style={style} className="d-inline-block me-2 rounded-circle bg-success" />
          }
          {label}
        </p>
      </div>
    </div>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  live: PropTypes.bool,
  headerLabel: PropTypes.string,
};

Tag.defaultProps = {
  live: false,
};

export default Tag;
