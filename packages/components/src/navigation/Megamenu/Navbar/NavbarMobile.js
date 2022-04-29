import React, {
  useState, useCallback, useEffect, Fragment,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { CSSTransition } from 'react-transition-group';
import { ArtBaselLogo } from '../../../utils/ArtBaselLogo';
import { ParisPlusLogo } from '../../../utils/ParisPlusLogo';

import { Container, Row, Col } from '../../../structure/Grid';
import { ButtonIcon } from '../../../actions/ButtonIcon';
import { MobileSearch, Search } from '../../../inputs/Search';
import ProfileMobile from './ProfileMobile';
import LanguageMobile from './LanguageMobile';
import CollectionLink from './CollectionLink';

const NavbarMobile = ({
  variant,
  menuData,
  languageData,
  profileData,
  setVisibleMenu,
  userData,
  profileWelcomeHeader,
  loggedCollectionUrl,
  unloggedCollectionUrl,
  onSearch,
  linkRenderer,
  searchPlaceholder,
  visibleMobileNavbar,
  setVisibleMobileNavbar,
  logoVariant,
}) => {
  if (!menuData) {
    return null;
  }

  const [searchText, setSearchText] = useState(null);

  const [visibleProfile, setVisibleProfile] = useState(false);
  const [visibleLanguage, setVisibleLanguage] = useState(false);

  const [containerIsVisible, setContainerIsVisible] = useState(false);
  const [optionsIsVisible, SetOptionsIsVisible] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showSearchBarTransitions, setShowSearchBarTransitions] = useState(false);

  useEffect(() => {
    if (visibleMobileNavbar) {
      setContainerIsVisible(true);
      setTimeout(() => SetOptionsIsVisible(true), 50);
      document.body.style.overflow = 'hidden';
    } else {
      SetOptionsIsVisible(false);
      setTimeout(() => setContainerIsVisible(false), 500);
      document.body.style.overflow = '';
    }
  }, [visibleMobileNavbar]);

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

  const overlayCloseHandler = () => {
    setVisibleMobileNavbar(false);
    setVisibleProfile(false);
    setVisibleLanguage(false);
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

  const toggleLanguageIsVisible = useCallback(() => {
    if (visibleLanguage && typeof languageData.onLanguageClose === 'function') languageData.onLanguageClose();
    if (!visibleLanguage && typeof languageData.onLanguageOpen === 'function') languageData.onLanguageOpen();
    setVisibleLanguage(!visibleLanguage);
  }, [visibleLanguage, visibleLanguage]);

  return (
    <>
      { !showSearchBar
        && !visibleMobileNavbar
        && !visibleLanguage
        && !visibleProfile && <Container fluid>
        <Row gutter="g-0" className="px-3 px-md-5 navbar">
          <Col className="col-auto">
            <ButtonIcon
              icon="menu"
              onClick={() => setVisibleMobileNavbar(!visibleMobileNavbar)}
              aria-controls="navlinksMobile"
              aria-expanded={visibleMobileNavbar}
            />
            </Col>

            {
              variant === 'paris'
              && <Fragment>
                <Col className="ps-3 d-md-none">
                  { linkRenderer(menuData.logoLink,
                  <ParisPlusLogo variant={ logoVariant } width={ 54 } height={ 23 } />,
                  menuData.logoLinkTarget) }
                </Col>
                <Col className="col-auto ps-5 pe-15 d-none d-md-block">
                  { linkRenderer(menuData.logoLink,
                  <ParisPlusLogo variant={ logoVariant } width={ 90 } height={ 39 } />,
                  menuData.logoLinkTarget) }
              </Col>
              </Fragment>
            }

            {
              variant !== 'paris'
              && <Fragment>
                <Col className="ps-3 d-md-none">
                  { linkRenderer(menuData.logoLink,
                  <ArtBaselLogo variant={ logoVariant } width={ 71 } height={ 23 } />,
                  menuData.logoLinkTarget) }
                </Col>
                <Col className="col-auto ps-5 pe-15 d-none d-md-block">
                  { linkRenderer(menuData.logoLink,
                  <ArtBaselLogo variant={ logoVariant } width={ 117 } height={ 39 } />,
                  menuData.logoLinkTarget) }
              </Col>
              </Fragment>
            }

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
            { languageData && <Col className="col-auto d-lg-none">
              <ButtonIcon icon="world" onClick={ () => toggleLanguageIsVisible() } />
            </Col> }
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
      { (visibleMobileNavbar || visibleLanguage || visibleProfile)
        && <Container fluid>
        <Row gutter="g-0" className="px-3 px-md-5 navbar">
          <Col className="col-auto">
              <ButtonIcon
                icon="close"
                onClick={() => {
                  overlayCloseHandler();
                }}
              aria-controls="navlinksMobile"
              aria-expanded={visibleMobileNavbar}
            />
          </Col>
            {
              variant === 'paris'
              && <Fragment>
                <Col className="ps-3 d-md-none">
                  { linkRenderer(menuData.logoLink,
                  <ParisPlusLogo variant={ logoVariant } width={ 54 } height={ 23 } />,
                  menuData.logoLinkTarget) }
                </Col>
                <Col className="col-auto ps-5 pe-15 d-none d-md-block">
                  { linkRenderer(menuData.logoLink,
                  <ParisPlusLogo variant={ logoVariant } width={ 90 } height={ 39 } />,
                  menuData.logoLinkTarget) }
              </Col>
              </Fragment>
            }

            {
              variant !== 'paris'
              && <Fragment>
                <Col className="ps-3 d-md-none">
                  { linkRenderer(menuData.logoLink,
                  <ArtBaselLogo variant={ logoVariant } width={ 71 } height={ 23 } />,
                  menuData.logoLinkTarget) }
                </Col>
                <Col className="col-auto ps-5 pe-15 d-none d-md-block">
                  { linkRenderer(menuData.logoLink,
                  <ArtBaselLogo variant={ logoVariant } width={ 117 } height={ 39 } />,
                  menuData.logoLinkTarget) }
              </Col>
              </Fragment>
            }
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
                    onClick={ () => setVisibleMenu(
                      visibleMobileNavbar && entry.flyout ? entry.label : null,
                    )
                    }
                  >
                    {entry.label}
                  </button>
                ) : (
                    <div className="navlink-mobile">
                      { linkRenderer(entry.link, entry.label, entry.target) }
                    </div>
                )}
              </h4>
            ))}
        </div>
      </Container>
      <div onClick={ overlayCloseHandler }
        className={ classnames('navlinks-mobile-overlay', {
          visible: visibleMobileNavbar || visibleProfile || visibleLanguage,
        }) }
      />
      { showSearchBar && <div className='mobile-search-overlay' onClick={ () => setShowSearchBarTransitions(false) }/> }
      { languageData && <LanguageMobile
        languageData={ languageData }
        isVisible={ visibleLanguage }
        setIsVisible={ setVisibleLanguage }
      /> }
      <ProfileMobile
        profileData = { profileData }
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
  variant: PropTypes.string,
  menuData: PropTypes.object,
  languageData: PropTypes.object,
  profileData: PropTypes.object.isRequired,
  visibleMenu: PropTypes.string,
  setVisibleMenu: PropTypes.func.isRequired,
  visibleMobileNavbar: PropTypes.string,
  setVisibleMobileNavbar: PropTypes.func.isRequired,
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
  logoVariant: PropTypes.oneOf(['default', 'basel', 'miami', 'hongkong', 'cities']),

};

export default NavbarMobile;
