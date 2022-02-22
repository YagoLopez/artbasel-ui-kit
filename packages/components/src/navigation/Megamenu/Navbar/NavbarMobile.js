import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { CSSTransition } from 'react-transition-group';
import { ArtBaselLogo } from '../../../utils/ArtBaselLogo';
import { Container, Row, Col } from '../../../structure/Grid';
import { ButtonIcon } from '../../../actions/ButtonIcon';
import { MobileSearch, Search } from '../../../inputs/Search';
import ProfileMobile from './ProfileMobile';
import { PROFILE_FLYOUT } from '../constants';
import CollectionLink from './CollectionLink';

const NavbarMobile = ({
  menuData,
  profileData,
  visibleMenu,
  setVisibleMenu,
  onLogout,
  userData,
  profileWelcomeHeader,
  loggedCollectionUrl,
  unloggedCollectionUrl,
  onSearch,
  linkRenderer,
  searchPlaceholder,
}) => {
  if (!menuData) {
    return null;
  }

  const [searchText, setSearchText] = useState(null);

  const [visibleLinks, setVisibleLinks] = useState(false);
  const [visibleProfile, setVisibleProfile] = useState(false);

  const [containerIsVisible, setContainerIsVisible] = useState(false);
  const [optionsIsVisible, SetOptionsIsVisible] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showSearchBarTransitions, setShowSearchBarTransitions] = useState(false);

  const handleSetVisibleProfileFlyout = useCallback((open) => {
    setVisibleMenu(open ? PROFILE_FLYOUT : null);
  }, []);

  useEffect(() => {
    if (visibleLinks) {
      setContainerIsVisible(true);
      setTimeout(() => SetOptionsIsVisible(true), 50);
      document.body.style.overflow = 'hidden';
    } else {
      SetOptionsIsVisible(false);
      setTimeout(() => setContainerIsVisible(false), 500);
      document.body.style.overflow = '';
    }
  }, [visibleLinks]);

  useEffect(() => {
    if (showSearchBar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [showSearchBar]);

  const onSearchChangeHandler = (event) => {
    if (event.target.value !== '') { setSearchText(event.target.value); }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onSearch(searchText);
  };

  const toggleProfileIsVisible = useCallback(() => {
    if (typeof profileData.onProfileClick === 'function') profileData.onProfileClick();
    if (visibleProfile && typeof profileData.onProfileClose === 'function') profileData.onProfileClose();
    if (!visibleProfile && typeof profileData.onProfileOpen === 'function') profileData.onProfileOpen();
    setVisibleProfile(!visibleProfile);
  }, [visibleProfile, visibleProfile]);

  return (
    <>
      {!showSearchBar && !visibleLinks && !visibleProfile && <Container fluid>
        <Row gutter="g-0" className="px-3 px-md-5 navbar">
          <Col className="col-auto">
            <ButtonIcon
              icon="menu"
              onClick={() => setVisibleLinks(!visibleLinks)}
              aria-controls="navlinksMobile"
              aria-expanded={visibleLinks}
            />
          </Col>

          <Col className="ps-3 d-md-none">
             { linkRenderer(menuData.logoLink, <ArtBaselLogo width={71} height={23} />) }
          </Col>
          <Col className="col-auto ps-5 pe-15 d-none d-md-block">
             { linkRenderer(menuData.logoLink, <ArtBaselLogo width={117} height={39} />) }
          </Col>

          <Col className='col-auto d-md-none'>
            <ButtonIcon
              icon="search"
              onClick={() => {
                setShowSearchBarTransitions(true);
              }} />
          </Col>
          <Col className="px-3 px-md-5 d-none d-md-block">
            <form onSubmit={submitHandler}>
              <Search placeholder={searchPlaceholder} onChange={ onSearchChangeHandler } />
            </form>
          </Col>
          <Col className="col-auto d-lg-none">
            <ButtonIcon icon="guest" onClick={() => toggleProfileIsVisible()}/>
          </Col>
          <Col className="col-auto px-md-1">
            <CollectionLink isUserLoggedIn={userData?.isUserLoggedIn}
              loggedCollectionUrl={loggedCollectionUrl}
              unloggedCollectionUrl={ unloggedCollectionUrl }
            linkRenderer={linkRenderer}/>
          </Col>
        </Row>
      </Container>}
      <CSSTransition
        in={showSearchBarTransitions}
        classNames="mobilefade"
        unmountOnExit
        timeout={200}
        onEnter={() => setShowSearchBar(true)}
        onExited={() => setShowSearchBar(false)}
      >
        <Container fluid>
          <Row gutter="g-0">
            <Col className={classnames('col-auto', 'd-md-none', 'w-100')}>
              <form onSubmit={submitHandler}>
              <MobileSearch
                value={searchText}
                placeholder={searchPlaceholder}
                onChange={onSearchChangeHandler}
                onBackButton={() => {
                  setSearchText('');
                  setShowSearchBarTransitions(false);
                }}
              />
              </form>
            </Col>
          </Row>
        </Container>
      </CSSTransition>
      { (visibleLinks || visibleProfile)
        && <Container fluid>
        <Row gutter="g-0" className="px-3 px-md-5 navbar">
          <Col className="col-auto">
              <ButtonIcon
                icon="close"
                onClick={() => {
                  if (visibleLinks) {
                    setVisibleLinks(false);
                  }

                  if (visibleProfile) {
                    toggleProfileIsVisible(false);
                  }
                }}
              aria-controls="navlinksMobile"
              aria-expanded={visibleLinks}
            />
          </Col>
          <Col className="ps-3 d-md-none">
             { linkRenderer(menuData.logoLink, <ArtBaselLogo width={71} height={23} />) }
          </Col>
          <Col className="col-auto ps-5 pe-15 d-none d-md-block">
             { linkRenderer(menuData.logoLink, <ArtBaselLogo width={117} height={39} />) }
          </Col>
        </Row>
      </Container>
      }
      <Container className={ classnames('navlinks-mobile-container', {
        visible: containerIsVisible,
      }) }>
        <div className={ classnames('navlinks-mobile-section', {
          visible: optionsIsVisible,
        }) }>
            {menuData.entries.map((entry) => (
              <h4 className="navlink-mobile-header navlink-mobile" key={entry.label}>
                {entry.flyout ? (
                  <button
                    className="navlink-mobile flyout"
                    onClick={() => setVisibleMenu(visibleLinks && entry.flyout ? entry.label : null)
                    }
                  >
                    {entry.label}
                  </button>
                ) : (
                    <div className="navlink-mobile">
                      { linkRenderer(entry.link, entry.label) }
                    </div>
                )}
              </h4>
            ))}
        </div>
      </Container>
      <div
        className={ classnames('navlinks-mobile-overlay', {
          visible: visibleLinks || visibleProfile,
        }) }
      />
      { showSearchBar && <div className='mobile-search-overlay' /> }
      <ProfileMobile
        profileData = { profileData }
        onLogout = {onLogout}
        isVisible = {visibleProfile}
        setIsVisible = {setVisibleProfile}
        userData= { userData }
        profileWelcomeHeader={ profileWelcomeHeader }
        linkRenderer={linkRenderer}
       />
    </>
  );
};

NavbarMobile.propTypes = {
  menuData: PropTypes.object,
  profileData: PropTypes.object.isRequired,
  visibleMenu: PropTypes.string,
  setVisibleMenu: PropTypes.func.isRequired,
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
  linkRenderer: PropTypes.func.isRequired,
};

export default NavbarMobile;
