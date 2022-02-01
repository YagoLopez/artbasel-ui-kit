import React from 'react';
import PropTypes from 'prop-types';

import { Accordion } from '../../../structure/Accordion';

const MenuSectionMobile = ({ menuSection, topLink, mobileLabel }) => {
  const entries = [];

  menuSection.cols.forEach((col) => {
    col.menuEntries.forEach((entry) => {
      entries.push(entry);
    });
  });

  return (
    <>
      <h5 className="navlink-mobile-header">
        <a className="navlink-mobile see-all-link" href={topLink}>
          {mobileLabel}
        </a>
      </h5>
      <Accordion defaultActiveKey={0}>
        {entries.map((entry, key) => (
          <Accordion.Item eventKey={String(key)} key={key}>
            <Accordion.Header size="l">{entry.title}</Accordion.Header>
            <Accordion.Body>
              {entry.menuItems.map((item, key1) => (
                <p key={key1}>
                  <a className="item-menu-link" href={item.link}>
                    {item.label}
                  </a>
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
