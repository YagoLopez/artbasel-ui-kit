import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Navbar } from './Navbar';
import NavbarMobile from './Navbar/NavbarMobile';
import MenuFlyout from './Flyout/MenuFlyout';
import MenuFlyoutMobile from './Flyout/MenuFlyoutMobile';

import schema from './Menudata.schema.json';

const { Validator } = require('jsonschema');

const v = new Validator();
// console.log(v.validate(megamenu, schema));

const MegaMenuBuilder = ({
  menuData, profileData, onLogout,
  loggedCollectionUrl, unloggedCollectionUrl,
  userData, welcomeHeader,
}) => {
  const [visibleMenu, setVisibleMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navBarAnimation = { transform: `translateY(${scrolled ? -105 : 0}px)`, transitionDuration: '500ms' };

  const onListenScroll = () => {
    let oldValue = 0;
    let newValue = 0;
    window.addEventListener('scroll', () => {
      newValue = window.pageYOffset;
      if (oldValue < newValue && newValue > 100) {
        setScrolled(true);
      } else if (oldValue > newValue) {
        setScrolled(false);
      }
      oldValue = newValue;
    });
  };

  useEffect(() => {
    onListenScroll();
    return onListenScroll();
  }, []);

  return (
    <>
      <div style={navBarAnimation} className="sticky-top navbar-parent-container">
        <div className="d-none d-lg-block">
          <Navbar
            scrolled={scrolled}
            menuData={menuData}
            profileData={profileData}
            onLogout={onLogout}
            visibleMenu={visibleMenu}
            setVisibleMenu={setVisibleMenu}
            userData={userData}
            loggedCollectionUrl={loggedCollectionUrl}
            unloggedCollectionUrl={unloggedCollectionUrl}
            welcomeHeader={welcomeHeader}
          />
        </div>
        <div className="d-lg-none">
          <NavbarMobile
            menuData={menuData}
            profileData={profileData}
            onLogout={onLogout}
            visibleMenu={visibleMenu}
            setVisibleMenu={setVisibleMenu}
            userData={userData}
            welcomeHeader={welcomeHeader}
            loggedCollectionUrl={loggedCollectionUrl}
            unloggedCollectionUrl={unloggedCollectionUrl}
          />
        </div>
        <div className="megamenu-underline d-md-none d-lg-inline" />
      </div>
      <div className="d-none d-lg-block sticky-top sticky-flyout">
        <MenuFlyout
          menuData={menuData}
          visibleMenu={visibleMenu}
          setVisibleMenu={setVisibleMenu}
        />
      </div>
      <div className="d-lg-none sticky-top">
        <MenuFlyoutMobile
          menuData={menuData}
          visibleMenu={visibleMenu}
          setVisibleMenu={setVisibleMenu}
        />
      </div>
    </>
  );
};

const Megamenu = ({
  menuData, profileData,
  onLogout, userData,
  loggedCollectionUrl,
  unloggedCollectionUrl, welcomeHeader,
}) => {
  const jsonValidation = v.validate(menuData, schema);
  const { errors } = jsonValidation;
  if (errors.length > 0) {
    console.log(errors);
    return (
      <p>
        Megamenu Component: Error Validation JSON Schema. Please check console
        log.
      </p>
    );
  }
  return (
    <MegaMenuBuilder
      profileData={profileData}
      onLogout={onLogout}
      menuData={menuData}
      userData={userData}
      welcomeHeader={welcomeHeader}
      loggedCollectionUrl={loggedCollectionUrl}
      unloggedCollectionUrl={unloggedCollectionUrl}

    />
  );
};

MegaMenuBuilder.propTypes = {
  menuData: PropTypes.object.isRequired,
  profileData: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vipStatus: PropTypes.bool.isRequired,
    isUserLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  welcomeHeader: PropTypes.string.isRequired,
  loggedCollectionUrl: PropTypes.string.isRequired,
  unloggedCollectionUrl: PropTypes.string.isRequired,
};

Megamenu.propTypes = {
  menuData: PropTypes.object.isRequired,
  profileData: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vipStatus: PropTypes.bool.isRequired,
    isUserLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  welcomeHeader: PropTypes.string.isRequired,
  loggedCollectionUrl: PropTypes.string.isRequired,
  unloggedCollectionUrl: PropTypes.string.isRequired,
};

export default Megamenu;
