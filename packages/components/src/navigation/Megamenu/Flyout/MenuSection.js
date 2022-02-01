import React from 'react';
import PropTypes from 'prop-types';

import { Container, Col, Row } from '../../../structure/Grid';

const MenuSection = ({ menuSection }) => {
  return (
    <Col>
      <Container>
        <Row gutter="g-5">
          {menuSection.cols.map((col, key2) => (
            <Col key={key2}>
              {col.menuEntries.map((menuEntry, key3) => (
                <Row gutter="g-0 mb-7" key={key3}>
                  <h5 className="mb-5">{menuEntry.title}</h5>
                  {menuEntry.menuItems.map((item, key4) => (
                    <p key={key4} className="text-small">
                      <a className="item-menu-link" href={item.link}>
                        {item.label}
                      </a>
                    </p>
                  ))}
                </Row>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </Col>
  );
};

MenuSection.propTypes = {
  menuSection: PropTypes.object.isRequired,
};

export default MenuSection;
