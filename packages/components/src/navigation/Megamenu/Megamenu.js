import React, { useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Navbar } from './Navbar';
import NavbarMobile from './Navbar/NavbarMobile';
import MenuFlyout from './Flyout/MenuFlyout';
import MenuFlyoutMobile from './Flyout/MenuFlyoutMobile';

import schema from './Menudata.schema.json';

const { Validator } = require('jsonschema');

const v = new Validator();

const MegaMenuBuilder = forwardRef(
  (
    {
      menuData,
      linkRenderer,
      onSearch,
      profileData,
      profileWelcomeHeader,
      userData,
      onLogout,
      loggedCollectionUrl,
      unloggedCollectionUrl,
      searchPlaceholder,
    },
    ref,
  ) => {
    const [visibleMenu, setVisibleMenu] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    const navBarAnimation = {
      transform: `translateY(${scrolled ? -105 : 0}px)`,
      transitionDuration: '500ms',
    };

    useEffect(() => {
      let oldValue = 0;
      let newValue = 0;

      const onListenScroll = () => {
        newValue = window.pageYOffset;
        if (oldValue < newValue && newValue > 100) {
          setScrolled(true);
        } else if (oldValue > newValue) {
          setScrolled(false);
        }
        oldValue = newValue;
      };

      window.addEventListener('scroll', onListenScroll);

      return () => {
        window.removeEventListener('scroll', onListenScroll);
      };
    }, []);

    return (
      <>
        <div
          style={navBarAnimation}
          className="sticky-top navbar-parent-container"
          ref={ref}
        >
          <div className="d-none d-lg-block">
            <Navbar
              scrolled={scrolled}
              menuData={ menuData }
              linkRenderer={linkRenderer}
              profileData={profileData}
              onLogout={onLogout}
              visibleMenu={visibleMenu}
              setVisibleMenu={setVisibleMenu}
              userData={userData}
              loggedCollectionUrl={loggedCollectionUrl}
              unloggedCollectionUrl={unloggedCollectionUrl}
              profileWelcomeHeader={ profileWelcomeHeader }
              onSearch={onSearch}
              searchPlaceholder={searchPlaceholder}
            />
          </div>
          <div className="d-lg-none">
            <NavbarMobile
              menuData={ menuData }
              linkRenderer={linkRenderer}
              profileData={profileData}
              onLogout={onLogout}
              visibleMenu={visibleMenu}
              setVisibleMenu={setVisibleMenu}
              userData={userData}
              profileWelcomeHeader={profileWelcomeHeader}
              loggedCollectionUrl={loggedCollectionUrl}
              unloggedCollectionUrl={ unloggedCollectionUrl }
              onSearch={onSearch}
              searchPlaceholder={searchPlaceholder}
            />
          </div>
          <div className="megamenu-underline d-md-none d-lg-inline" />
        </div>
        <div className="d-none d-lg-block sticky-top sticky-flyout">
          <MenuFlyout
            menuData={ menuData }
            linkRenderer={linkRenderer}
            visibleMenu={visibleMenu}
            setVisibleMenu={setVisibleMenu}
            userData={userData}
            loggedCollectionUrl={loggedCollectionUrl}
            unloggedCollectionUrl={unloggedCollectionUrl}
          />
        </div>
        <div className="d-lg-none sticky-top">
          <MenuFlyoutMobile
            menuData={ menuData }
            linkRenderer={linkRenderer}
            visibleMenu={visibleMenu}
            setVisibleMenu={setVisibleMenu}
            userData={userData}
            loggedCollectionUrl={loggedCollectionUrl}
            unloggedCollectionUrl={unloggedCollectionUrl}
          />
        </div>
      </>
    );
  },
);

const Megamenu = forwardRef(
  (
    {
      menuData,
      linkRenderer,
      profileData,
      onLogout,
      userData,
      loggedCollectionUrl,
      unloggedCollectionUrl,
      profileWelcomeHeader,
      onSearch,
      searchPlaceholder = 'Search for artworks, events, galleries...',
    },
    ref,
  ) => {
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
        menuData={menuData}
        linkRenderer={linkRenderer}
        profileData={profileData}
        onLogout={onLogout}
        userData={userData}
        profileWelcomeHeader={profileWelcomeHeader}
        loggedCollectionUrl={loggedCollectionUrl}
        unloggedCollectionUrl={unloggedCollectionUrl}
        ref={ref}
        onSearch={onSearch}
        searchPlaceholder={searchPlaceholder}
      />
    );
  },
);

MegaMenuBuilder.displayName = 'MegaMenuBuilder';

MegaMenuBuilder.propTypes = {
  menuData: PropTypes.object.isRequired,
  linkRenderer: PropTypes.func.isRequired,
  profileData: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vipStatus: PropTypes.bool.isRequired,
    isUserLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  profileWelcomeHeader: PropTypes.string.isRequired,
  loggedCollectionUrl: PropTypes.string.isRequired,
  unloggedCollectionUrl: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
};

Megamenu.displayName = 'Megamenu';

Megamenu.propTypes = {
  /** JSON object that contains all information to builkd the Navbar and the flyouts.
  Please check bellow the JSON used on this megamenu test. */
  menuData: PropTypes.object.isRequired,
  /** A renderer for
  all links. */
  linkRenderer: PropTypes.func.isRequired,
  /** A function to be called when user submits a search.
  The searched term is passed as argument. */
  onSearch: PropTypes.func.isRequired,
  /** A JSON object with the
  current user logged in. */
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vipStatus: PropTypes.bool.isRequired,
    isUserLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  /** A string to be shown on the top of User profile flyout.
   Ex: "Welcome, " */
  profileWelcomeHeader: PropTypes.string.isRequired,
  /** A JSON object with the options to be shown in the User Profile Flyout.
   Please check bellow a sample.
  */
  profileData: PropTypes.object.isRequired,
  /** A function to be called for Logout in the
  User Profile Flyout. */
  onLogout: PropTypes.func.isRequired,
  /** The Collection URL when the user is logged in.
  Used in the Collection Icon. */
  loggedCollectionUrl: PropTypes.string.isRequired,
  /** The Collection URL when the user is unlogged.
  Used in the Collection Icon. */
  unloggedCollectionUrl: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string,
};

export default Megamenu;
