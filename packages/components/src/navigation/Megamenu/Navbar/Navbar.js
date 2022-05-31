import React, {
  useCallback, useRef, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';

import { ArtBaselLogo } from '../../../utils/ArtBaselLogo';
import { ParisPlusLogo } from '../../../utils/ParisPlusLogo';
import { Container, Row, Col } from '../../../structure/Grid';
import { Search } from '../../../inputs/Search';
import ProfileFlyout from './ProfileFlyout';
import LanguageFlyout from './LanguageFlyout';
import { PROFILE_FLYOUT, LANGUAGE_FLYOUT } from '../constants';
import CollectionLink from './CollectionLink';

const Navbar = ({
  variant,
  menuData,
  linkRenderer,
  profileData,
  languageData,
  visibleMenu,
  setVisibleMenu,
  loggedCollectionUrl,
  unloggedCollectionUrl,
  collectionButtonTitle,
  userData,
  profileWelcomeHeader,
  scrolled,
  onSearch,
  searchPlaceholder,
  logoVariant,
}) => {
  if (!menuData) {
    return null;
  }

  const underLineTextRef = useRef(null);
  const linksRef = useRef([]);
  const [underLinePosition, setUnderLinePosition] = useState(null);
  const [searchText, setSearchText] = useState(null);

  const navLinks = [];

  const createNavLinks = (flyout) => {
    const key = navLinks?.length;
    if (navLinks.length < menuData.entries.length) {
      navLinks.push({
        key,
        flyout,
      });
    }
    return key;
  };

  const hideRowUnderline = () => {
    underLineTextRef.current.style.setProperty('width', '0px');
    setUnderLinePosition(null);
  };

  const hideColUnderline = (element, key) => {
    if (element) {
      element?.style.setProperty('width', '0px');
    }
    if (key !== null && key !== undefined) {
      const line = document.querySelectorAll('.col-underline')[key];
      line?.style.setProperty('opacity', 0);
      line?.style.setProperty('width', '0px');
    }
  };

  const hideUnderlines = () => {
    document.querySelectorAll('.col-underline').forEach((e) => {
      e.style.setProperty('width', '0px');
    });
    hideRowUnderline();
  };

  useEffect(() => {
    if (navLinks[underLinePosition]?.flyout && !visibleMenu) {
      hideUnderlines();
    }
  }, [visibleMenu]);

  const showRowLine = (key) => {
    const prevKey = key > 0 ? key - 1 : 0;
    hideColUnderline(null, prevKey);

    const nextKey = navLinks.length >= key + 2 ? key + 1 : null;
    hideColUnderline(null, nextKey);

    const width = linksRef.current[key].offsetWidth;
    const position = linksRef.current[key].offsetLeft;

    underLineTextRef.current.style.setProperty('width', `${width}px`);
    underLineTextRef.current.style.setProperty('opacity', 1);
    underLineTextRef.current.style.setProperty(
      'transform', `translateX(${position}px)`,
    );
  };

  const showColLine = (key, element) => {
    const width = linksRef.current[key].offsetWidth;
    const position = linksRef.current[key].offsetLeft;

    underLineTextRef.current.style.setProperty('width', `${width}px`);
    underLineTextRef.current.style.setProperty('opacity', 0);
    underLineTextRef.current.style.setProperty(
      'transform', `translateX(${position}px)`,
    );
    element?.style.setProperty('opacity', 1);
    element?.style.setProperty('width', '100%');
  };

  const handleSetVisibleProfileFlyout = useCallback((open) => {
    setVisibleMenu(open ? PROFILE_FLYOUT : null);
  }, []);

  const handleSetVisibleLanguageFlyout = useCallback((open) => {
    setVisibleMenu(open ? LANGUAGE_FLYOUT : null);
  }, []);

  const handleEntryMouseEnter = (event, entry, key) => {
    const element = event.target.querySelector('.col-underline');
    setVisibleMenu(entry.flyout ? entry.label : null);

    if (underLineTextRef.current) {
      if (underLinePosition !== null) {
        showRowLine(key);
      } else {
        showColLine(key, element);
      }
      setUnderLinePosition(key);
    }
  };

  const handleMouseLeave = (event) => {
    if (!visibleMenu) {
      const element = event.target.querySelector('.col-underline');
      hideColUnderline(element);
    }

    if (!navLinks || !navLinks[underLinePosition]) return;

    if (!('flyout' in navLinks[underLinePosition]) || navLinks[underLinePosition].flyout === undefined || navLinks[underLinePosition].flyout === false) {
      hideRowUnderline();
    }
  };

  const onSearchChangeHandler = (event) => {
    if (event.target.value !== '') { setSearchText(event.target.value); }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onSearch(searchText);
  };

  const renderNavLinks = () => {
    return menuData.entries.map((entry) => {
      const key = createNavLinks(!!entry.flyout);
      return (
        <div
          className="col-auto d-flex align-items-center text-center nav-entry px-4"
          key={entry.label}
          onMouseEnter={(e) => handleEntryMouseEnter(e, entry, key)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          ref={(element) => { linksRef.current[key] = element; }}
        >
          <div className="m-auto navlink" data-text={entry.label}>
            {linkRenderer(entry.link, entry.label, entry.target)}
          </div>
          <div className="col-underline" />
        </div>
      );
    });
  };

  return (
    <Container className="navbar-container" data-testid="mch-navbar">
      <Row gutter="g-0" className="px-3 px-lg-8 navbar">

        {
          variant === 'paris'
          && <Col className="col-auto pe-5 py-7" onMouseEnter={ () => setVisibleMenu(null) }>
            { linkRenderer(
              menuData.logoLink,
              <ParisPlusLogo variant={ logoVariant } width={ 100 } height={ 43 } />,
              menuData.logoLinkTarget,
            ) }
          </Col>
        }

        {
          variant !== 'paris'
          && <Col className="col-auto pe-5 py-7" onMouseEnter={ () => setVisibleMenu(null) }>
            { linkRenderer(
              menuData.logoLink,
              <ArtBaselLogo variant={ logoVariant } width={ 130 } height={ 43 } />,
              menuData.logoLinkTarget,
            ) }
          </Col>
        }

        <Col className="entries-container col-auto">
          <Row gutter="g-0" className="menu-entries">
            <div className="menu-entries-edge" onMouseEnter={() => setVisibleMenu(null)} />
            <div className='row flex-nowrap'>
            { renderNavLinks() }
            </div>
            <div className="menu-entries-edge" />
            <div ref={underLineTextRef} className="underline-text" />
          </Row>
        </Col>
        <Col
          className="px-5 d-flex justify-content-end"
          onMouseEnter={() => setVisibleMenu(null)}
        >
          <div className="search-field">
            <form onSubmit={submitHandler}>
              <Search
                placeholder={searchPlaceholder}
                onChange={onSearchChangeHandler}
              />
            </form>
          </div>
        </Col>

        { languageData && <Col className="col-auto px-md-1">
          <LanguageFlyout
            navbarVisible={ !scrolled }
            languageData={ languageData }
            setIsVisible={ handleSetVisibleLanguageFlyout }
            isVisible={ visibleMenu === LANGUAGE_FLYOUT }
            linkRenderer={ linkRenderer }
          />
        </Col>
        }

        <Col className="col-auto px-md-1">
          <ProfileFlyout
            navbarVisible={!scrolled}
            profileData={profileData}
            onChangeProfileStatus={setVisibleMenu}
            setIsVisible={handleSetVisibleProfileFlyout}
            isVisible={visibleMenu === PROFILE_FLYOUT}
            userData={userData}
            profileWelcomeHeader={profileWelcomeHeader}
            linkRenderer={linkRenderer}
          />
        </Col>

        <Col className="col-auto px-md-1">
          <CollectionLink
            isUserLoggedIn={userData?.isUserLoggedIn}
            loggedCollectionUrl={loggedCollectionUrl}
            unloggedCollectionUrl={ unloggedCollectionUrl }
            collectionButtonTitle={collectionButtonTitle}
            linkRenderer={linkRenderer}
          />
        </Col>
      </Row>
    </Container>
  );
};

Navbar.propTypes = {
  variant: PropTypes.string,
  menuData: PropTypes.object,
  linkRenderer: PropTypes.func.isRequired,
  languageData: PropTypes.object,
  profileData: PropTypes.object.isRequired,
  visibleMenu: PropTypes.string,
  setVisibleMenu: PropTypes.func.isRequired,
  loggedCollectionUrl: PropTypes.string.isRequired,
  unloggedCollectionUrl: PropTypes.string.isRequired,
  collectionButtonTitle: PropTypes.string,
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vipStatus: PropTypes.bool.isRequired,
    isUserLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  profileWelcomeHeader: PropTypes.string.isRequired,
  scrolled: PropTypes.bool,
  onSearch: PropTypes.func.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  logoVariant: PropTypes.oneOf(['default', 'basel', 'miami', 'hongkong', 'cities']),

};

Navbar.defaultProps = {
  scrolled: true,
};

export default Navbar;
