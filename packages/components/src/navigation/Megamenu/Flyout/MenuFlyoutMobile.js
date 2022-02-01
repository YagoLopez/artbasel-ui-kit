import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Offcanvas } from 'react-bootstrap';

import { Container, Row, Col } from '../../../structure/Grid';
import { ButtonIcon } from '../../../actions/ButtonIcon';

import CardSectionMobile from './CardSectionMobile';
import MenuSectionMobile from './MenuSectionMobile';

const MenuFlyoutMobile = ({ menuData, visibleMenu, setVisibleMenu }) => {
  const handleClose = useCallback(() => {
    setVisibleMenu(null);
  }, []);

  return (
    <>
      {menuData.entries.map(
        (entry) => entry.flyout && (
            <Offcanvas
              key={entry.label}
              show={visibleMenu === entry.label}
              onHide={handleClose}
              placement="start"
              className="megamenu-container-mobile d-lg-none"
              backdrop={false}
            >
            <Container fluid className="menu-mobile-header">
                <Row gutter="g-0" className="px-3 px-md-5 header">
                  <Col className="col-auto">
                    <ButtonIcon
                      icon="arrow-left"
                      onClick={handleClose}
                    />
                  </Col>
                  <Col className="col-auto pt-3 d-md-none" ><h4>{entry.label}</h4></Col>
                  <Col className="col-auto pt-3 d-none d-md-block"><h3>{entry.label}</h3></Col>
                  <Col className="col-auto ps-9"></Col>
                </Row>
              </Container>

              <Offcanvas.Body className="menu-mobile-body">
                <Row gutter="g-0" className="menu-mobile-section">
                  <MenuSectionMobile
                    menuSection={entry.flyout.menuSection}
                    topLink={entry.link}
                    mobileLabel={entry.mobileLabel}
                  />
                  <CardSectionMobile cardSection={entry.flyout.cardSection} />
                </Row>
              </Offcanvas.Body>
            </Offcanvas>
        ),
      )}
    </>
  );
};

MenuFlyoutMobile.propTypes = {
  menuData: PropTypes.object.isRequired,
  visibleMenu: PropTypes.string,
  setVisibleMenu: PropTypes.func.isRequired,
};

export default MenuFlyoutMobile;
