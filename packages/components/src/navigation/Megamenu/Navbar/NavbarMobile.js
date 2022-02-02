import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ArtBaselLogo } from '../../../utils/ArtBaselLogo';
import { Container, Row, Col } from '../../../structure/Grid';
import { ButtonIcon } from '../../../actions/ButtonIcon';
import { Search } from '../../../inputs/Search';
import ProfileFlyout from './ProfileFlyout';
import { PROFILE_FLYOUT } from '../constants';
import CollectionLink from './CollectionLink';
import ProfileMobile from './ProfileMobile';

const NavbarMobile = ({
  menuData,
  profileData,
  visibleMenu,
  setVisibleMenu,
  onLogout,
  userData,
  welcomeHeader,
  loggedCollectionUrl,
  unloggedCollectionUrl,
}) => {
  if (!menuData) {
    return null;
  }
  const [visibleLinks, setVisibleLinks] = useState(false);
  const [visibleProfile, setVisibleProfile] = useState(false);

  const [containerIsVisible, setContainerIsVisible] = useState(false);
  const [optionsIsVisible, SetOptionsIsVisible] = useState(false);

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

  return (
    <>
      {!visibleLinks && !visibleProfile && <Container fluid>
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
            <a href={menuData.logoLink}>
              <ArtBaselLogo width={71} height={23} />
            </a>
          </Col>
          <Col className="col-auto ps-5 pe-15 d-none d-md-block">
            <a href={menuData.logoLink}>
              <ArtBaselLogo width={117} height={39} />
            </a>
          </Col>
          <Col className="col-auto d-md-none">
            <ButtonIcon icon="search" />
          </Col>
          <Col className="px-3 px-md-5 d-none d-md-block">
            <Search placeholder="Search for artworks, events, galleries..." />
          </Col>
          <Col className="col-auto d-lg-none">
            <ButtonIcon icon="guest" onClick={() => setVisibleProfile(!visibleProfile)}/>
          </Col>
          <Col className="col-auto px-md-1 d-none d-lg-block">
            <ProfileFlyout
              profileData={profileData}
              onChangeProfileStatus={setVisibleMenu}
              onLogout={onLogout}
              setIsVisible={handleSetVisibleProfileFlyout}
              isVisible={visibleMenu === PROFILE_FLYOUT}
              userData={userData}
              welcomeHeader={welcomeHeader}
            />
          </Col>
          <Col className="col-auto px-md-1">
            <CollectionLink isUserLoggedIn={userData?.isUserLoggedIn}
              loggedCollectionUrl={loggedCollectionUrl}
              unloggedCollectionUrl={unloggedCollectionUrl} />
          </Col>
        </Row>
      </Container>}
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
                    setVisibleProfile(false);
                  }
                }}
              aria-controls="navlinksMobile"
              aria-expanded={visibleLinks}
            />
          </Col>
          <Col className="ps-3 d-md-none">
            <ArtBaselLogo width={71} height={23} />
          </Col>
          <Col className="col-auto ps-5 pe-15 d-none d-md-block">
            <a href={menuData.logoLink}>
              <ArtBaselLogo width={117} height={39} />
            </a>
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
              <h4 className="navlink-mobile-header" key={entry.label}>
                {entry.flyout ? (
                  <button
                    className="navlink-mobile flyout"
                    onClick={() => setVisibleMenu(visibleLinks && entry.flyout ? entry.label : null)
                    }
                  >
                    {entry.label}
                  </button>
                ) : (
                  <a className="navlink-mobile" href={entry.link}>
                    {entry.label}
                  </a>
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
      <ProfileMobile
        profileData = { profileData }
        onLogout = {onLogout}
        isVisible = {visibleProfile}
        setIsVisible = {setVisibleProfile}
        userData= { userData }
        welcomeHeader={welcomeHeader}
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
  welcomeHeader: PropTypes.string.isRequired,
  loggedCollectionUrl: PropTypes.string.isRequired,
  unloggedCollectionUrl: PropTypes.string.isRequired,
};

export default NavbarMobile;
