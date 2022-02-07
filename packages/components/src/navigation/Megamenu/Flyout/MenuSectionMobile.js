import React from 'react';
import PropTypes from 'prop-types';

import { Accordion } from '../../../structure/Accordion';

const MenuSectionMobile = ({
  menuSection, topLink, mobileLabel, linkRenderer,
}) => {
  const entries = [];

  menuSection.cols.forEach((col) => {
    col.menuEntries.forEach((entry) => {
      entries.push(entry);
    });
  });

  return (
    <>
      <h5 className="navlink-mobile-header">
        <div className="navlink-mobile see-all-link">
          { linkRenderer(topLink, mobileLabel) }
        </div>
      </h5>
      <Accordion defaultActiveKey={0}>
        {entries.map((entry, key) => (
          <Accordion.Item eventKey={String(key)} key={key}>
            <Accordion.Header size="l">{entry.title}</Accordion.Header>
            <Accordion.Body>
              {entry.menuItems.map((item, key1) => (
                <p className="item-menu-link" key={key1} >
                  { linkRenderer(item.link, item.label) }
                </p>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

    </>
  );
};

MenuSectionMobile.propTypes = {
  menuSection: PropTypes.object.isRequired,
  topLink: PropTypes.string.isRequired,
  mobileLabel: PropTypes.string.isRequired,
};

export default MenuSectionMobile;
