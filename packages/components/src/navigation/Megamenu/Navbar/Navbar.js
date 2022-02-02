import React, {
  useCallback, useRef, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';

import { ArtBaselLogo } from '../../../utils/ArtBaselLogo';
import { Container, Row, Col } from '../../../structure/Grid';
import { Search } from '../../../inputs/Search';
import ProfileFlyout from './ProfileFlyout';
import { PROFILE_FLYOUT } from '../constants';
import CollectionLink from './CollectionLink';

const Navbar = ({
  menuData,
  profileData,
  visibleMenu,
  setVisibleMenu,
  onLogout,
  loggedCollectionUrl,
  unloggedCollectionUrl,
  userData,
  welcomeHeader,
  scrolled,
}) => {
  if (!menuData) {
    return null;
  }

  const underLineTextRef = useRef(null);
  const [underLinePosition, setUnderLinePosition] = useState(null);

  const navLinks = [];

  const createNavLinks = (width, flyout) => {
    const key = navLinks?.length;
    if (navLinks.length < menuData.entries.length) {
      const position = key > 0 ? navLinks[key - 1]?.position + navLinks[key - 1]?.width : 0;
      navLinks.push({
        key,
        position,
        flyout,
        width,
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

    underLineTextRef.current.style.setProperty('width', `${navLinks[key].width}px`);
    underLineTextRef.current.style.setProperty('opacity', 1);
    underLineTextRef.current.style.setProperty(
      'transform', `translateX(${navLinks[key].position}px)`,
    );
  };

  const showColLine = (key, element) => {
    underLineTextRef.current.style.setProperty('width', `${navLinks[key].width}px`);
    underLineTextRef.current.style.setProperty('opacity', 0);
    underLineTextRef.current.style.setProperty(
      'transform', `translateX(${navLinks[key].position}px)`,
    );
    element?.style.setProperty('opacity', 1);
    element?.style.setProperty('width', '100%');
  };

  const handleSetVisibleProfileFlyout = useCallback((open) => {
    setVisibleMenu(open ? PROFILE_FLYOUT : null);
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
    if (!navLinks[underLinePosition].flyout) {
      hideRowUnderline();
    }
  };

  return (
    <Container
      className="navbar-container"
      data-testid="mch-navbar"
    >
      <Row gutter="g-0" className="px-3 px-lg-8 navbar">
        <Col
          className="col-auto pe-5 py-7"
          onMouseEnter={() => setVisibleMenu(null)}
        >
          <a href={menuData.logoLink}>
            <ArtBaselLogo width={130} height={43} />
          </a>
        </Col>
        <Col className="col-auto entries-container">
          <Row gutter="g-0" className="menu-entries">
            {menuData.entries.map((entry) => {
              const width = (10 * (entry.label.length > 7 ? entry.label.length : 7)) - 10;
              const key = createNavLinks(width, !!entry.flyout);
              return (
              <Col
                className="col-auto d-flex align-items-center text-centerm nav-entry"
                key={entry.label}
                onMouseEnter={ (e) => handleEntryMouseEnter(e, entry, key) }
                onMouseLeave={ (e) => handleMouseLeave(e)}
                style={{ width: `${width}px`, height: '102px' }}
              >
                <a href={entry.link} className="m-auto navlink">
                  {entry.label}
                </a>
                <div className="col-underline" />
              </Col>
              );
            })}
            <div ref={underLineTextRef} className="underline-text" />
          </Row>
        </Col>
        <Col
          className="px-5 d-flex justify-content-end"
          onMouseEnter={() => setVisibleMenu(null)}
        >
          <div style={{ minWidth: '280px', maxWidth: '399px', width: '100%' }}>
            <Search placeholder="Search for artworks, events, galleries..." />
          </div>
        </Col>

        <Col className="col-auto px-md-1">
          <ProfileFlyout
            navbarVisible={!scrolled}
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
          <CollectionLink
            isUserLoggedIn={userData?.isUserLoggedIn}
            loggedCollectionUrl={loggedCollectionUrl}
            unloggedCollectionUrl={unloggedCollectionUrl}
          />
        </Col>
      </Row>
    </Container>
  );
};

Navbar.propTypes = {
  menuData: PropTypes.object,
  profileData: PropTypes.object.isRequired,
  visibleMenu: PropTypes.string,
  setVisibleMenu: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  loggedCollectionUrl: PropTypes.string.isRequired,
  unloggedCollectionUrl: PropTypes.string.isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vipStatus: PropTypes.bool.isRequired,
    isUserLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  welcomeHeader: PropTypes.string.isRequired,
  scrolled: PropTypes.bool,
};

Navbar.defaultProps = {
  scrolled: true,
};

export default Navbar;