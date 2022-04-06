import React, {
  useState, useEffect, useCallback, forwardRef,
} from 'react';
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
      languageData,
      profileData,
      profileWelcomeHeader,
      userData,
      loggedCollectionUrl,
      unloggedCollectionUrl,
      collectionButtonTitle,
      searchPlaceholder,
      logoVariant,
    },
    ref,
  ) => {
    const [visibleMenu, setVisibleMenu] = useState(null);
    const [visibleMobileNavbar, setVisibleMobileNavbar] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    const handleMenuFlyoutSetVisibleMenu = useCallback((menu) => {
      setVisibleMenu(menu);
      setVisibleMobileNavbar(null);
    }, []);

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
              languageData={languageData}
              visibleMenu={visibleMenu}
              setVisibleMenu={setVisibleMenu}
              userData={userData}
              loggedCollectionUrl={loggedCollectionUrl}
              unloggedCollectionUrl={unloggedCollectionUrl}
              collectionButtonTitle={collectionButtonTitle}
              profileWelcomeHeader={ profileWelcomeHeader }
              onSearch={onSearch}
              searchPlaceholder={ searchPlaceholder }
              logoVariant={ logoVariant }
            />
          </div>
          <div className="d-lg-none">
            <NavbarMobile
              menuData={ menuData }
              linkRenderer={linkRenderer}
              profileData={profileData}
              languageData={languageData}
              visibleMenu={visibleMenu}
              setVisibleMenu={ setVisibleMenu }
              visibleMobileNavbar={ visibleMobileNavbar }
              setVisibleMobileNavbar={ setVisibleMobileNavbar }
              userData={userData}
              profileWelcomeHeader={profileWelcomeHeader}
              loggedCollectionUrl={loggedCollectionUrl}
              unloggedCollectionUrl={ unloggedCollectionUrl }
              onSearch={onSearch}
              searchPlaceholder={ searchPlaceholder }
              logoVariant={ logoVariant }
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
            setVisibleMenu={handleMenuFlyoutSetVisibleMenu}
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
      languageData,
      profileData,
      userData,
      loggedCollectionUrl,
      unloggedCollectionUrl,
      collectionButtonTitle,
      profileWelcomeHeader,
      onSearch,
      searchPlaceholder,
      logoVariant,
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
        linkRenderer={ linkRenderer }
        languageData={languageData}
        profileData={profileData}
        userData={userData}
        profileWelcomeHeader={profileWelcomeHeader}
        loggedCollectionUrl={loggedCollectionUrl}
        unloggedCollectionUrl={ unloggedCollectionUrl }
        collectionButtonTitle={collectionButtonTitle}
        ref={ref}
        onSearch={onSearch}
        searchPlaceholder={ searchPlaceholder }
        logoVariant={menuData.logoVariant ?? logoVariant}
      />
    );
  },
);

MegaMenuBuilder.displayName = 'MegaMenuBuilder';

MegaMenuBuilder.propTypes = {
  menuData: PropTypes.object.isRequired,
  linkRenderer: PropTypes.func.isRequired,
  languageData: PropTypes.object,
  profileData: PropTypes.object.isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vipStatus: PropTypes.bool.isRequired,
    isUserLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  profileWelcomeHeader: PropTypes.string.isRequired,
  loggedCollectionUrl: PropTypes.string.isRequired,
  unloggedCollectionUrl: PropTypes.string.isRequired,
  collectionButtonTitle: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  logoVariant: PropTypes.oneOf(['default', 'basel', 'miami', 'hongkong', 'cities']),

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

  /** A JSON object with the options to be shown in the Language Flyout.
   Please check bellow a sample.
  */
  languageData: PropTypes.shape({
    LanguageHeader: PropTypes.string.isRequired,
    LanguageEntries: PropTypes.array.isRequired,
    LanguageSelected: PropTypes.string.isRequired,
    onLanguageClick: PropTypes.func,
  }),

  /** A string to be shown on the top of User profile flyout.
   Ex: "Welcome, " */
  profileWelcomeHeader: PropTypes.string.isRequired,
  /** A JSON object with the options to be shown in the User Profile Flyout.
   Please check bellow a sample.
  */
  profileData: PropTypes.shape({
    entries: PropTypes.array.isRequired,
    onProfileClick: PropTypes.func,
    onProfileOpen: PropTypes.func,
    onProfileClose: PropTypes.func,
    /** A function to be called for Logout in the
  User Profile Menu. */
    onProfileLogout: PropTypes.func.isRequired,
  }).isRequired,
  /** The Collection URL when the user is logged in.
  Used in the Collection Icon. */
  loggedCollectionUrl: PropTypes.string.isRequired,
  /** The Collection URL when the user is unlogged.
  Used in the Collection Icon. */
  unloggedCollectionUrl: PropTypes.string.isRequired,
  /** The Collection button's title,
  displayed when hover. */
  collectionButtonTitle: PropTypes.string,
  /** The placeholder label
  for search fields. */
  searchPlaceholder: PropTypes.string,
  /** The Artbasel logo variant.
  This prop will be ignored if provided in the menuData. */
  logoVariant: PropTypes.oneOf(['default', 'basel', 'miami', 'hongkong', 'cities']),
};

Megamenu.defaultProps = {
  linkRenderer: (link, label) => <a href={ link }>{ label }</a>,
  searchPlaceholder: 'Search for artworks, events, galleries...',
  logoVariant: 'default',
};

export default Megamenu;
