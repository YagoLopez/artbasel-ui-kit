import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Container, Row } from '../../../structure/Grid';
import CardSection from './CardSection';
import MenuSection from './MenuSection';
import { PROFILE_FLYOUT } from '../constants';

const MenuFlyout = ({ menuData, visibleMenu, setVisibleMenu }) => {
  return (
    <>
       <Container
            className={classnames(
              'megamenu-white-overlay',
              { visible: visibleMenu !== null && visibleMenu !== PROFILE_FLYOUT },
            ) }

            ></Container>
      {menuData.entries.map(
        (entry) => entry.flyout && (
            <Container
            className={classnames(
              'megamenu-top-container position-fixed',
              { visible: visibleMenu === entry.label },
            ) }

              key={entry.label}
              onMouseLeave={() => setVisibleMenu(null)}
            >
            <Container
            className={classnames(
              'megamenu-container',
            ) }>
                <Row gutter="g-0">
                  {/*  Cards Section */}
                  <MenuSection menuSection={entry.flyout.menuSection} />
                  <CardSection cardSection={entry.flyout.cardSection} />
                </Row>
              </Container>
            </Container>
        ),
      )}
      <div
        className={classnames('megamenu-overlay',
          { visible: visibleMenu !== null && visibleMenu !== PROFILE_FLYOUT })}
      />
    </>
  );
};

MenuFlyout.propTypes = {
  menuData: PropTypes.object.isRequired,
  visibleMenu: PropTypes.string,
  setVisibleMenu: PropTypes.func,
};

export default MenuFlyout;
