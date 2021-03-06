import React from 'react';
import PropTypes from 'prop-types';

import { Accordion } from '../../../structure/Accordion';

const MenuSectionMobile = ({
  menuSection, topLink, topLinkTarget, mobileLabel, linkRenderer, setVisibleMenu,
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
        <div className="navlink-mobile see-all-link" onClick={() => setVisibleMenu(null)}>
          { linkRenderer(topLink, mobileLabel, topLinkTarget) }
        </div>
      </h5>
      <Accordion defaultActiveKey={0}>
        {entries.map((entry, key) => (
          <Accordion.Item eventKey={String(key)} key={key}>
            <Accordion.Header size="l">{entry.title}</Accordion.Header>
            <Accordion.Body>
              {entry.menuItems.map((item, key1) => (
                <p className="item-menu-link" key={key1} onClick={() => setVisibleMenu(null)}>
                  { linkRenderer(item.link, item.label, item.target) }
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
  topLinkTarget: PropTypes.string,
  mobileLabel: PropTypes.string.isRequired,
  linkRenderer: PropTypes.func.isRequired,
  setVisibleMenu: PropTypes.func.isRequired,
};

export default MenuSectionMobile;
