import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Container, Row } from '../../../structure/Grid';
import CardSection from './CardSection';
import MenuSection from './MenuSection';
import { PROFILE_FLYOUT, LANGUAGE_FLYOUT } from '../constants';

const MenuFlyout = ({
  menuData, visibleMenu, setVisibleMenu, linkRenderer,
}) => {
  return (
    <>
       <Container
            className={classnames(
              'megamenu-white-overlay',
              {
                visible: visibleMenu !== null
                  && visibleMenu !== PROFILE_FLYOUT
                  && visibleMenu !== LANGUAGE_FLYOUT,
              },
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
            >
            <Container
            className={classnames(
              'megamenu-container',
            ) }>
                <Row gutter="g-0">
                  {/*  Cards Section */}
                <MenuSection
                  menuSection={ entry.flyout.menuSection }
                  linkRenderer={ linkRenderer }
                  setVisibleMenu={setVisibleMenu} />
                <CardSection
                  cardSection={ entry.flyout.cardSection }
                  linkRenderer={ linkRenderer }
                  setVisibleMenu={ setVisibleMenu } />
                </Row>
              </Container>
            </Container>
        ),
      )}
      <div
        className={classnames('megamenu-overlay',
          {
            visible: visibleMenu !== null
              && visibleMenu !== PROFILE_FLYOUT
              && visibleMenu !== LANGUAGE_FLYOUT,
          }) }
        onMouseEnter={() => setVisibleMenu(null)}
      />
    </>
  );
};

MenuFlyout.propTypes = {
  menuData: PropTypes.object.isRequired,
  linkRenderer: PropTypes.func.isRequired,
  visibleMenu: PropTypes.string,
  setVisibleMenu: PropTypes.func,
};

export default MenuFlyout;
