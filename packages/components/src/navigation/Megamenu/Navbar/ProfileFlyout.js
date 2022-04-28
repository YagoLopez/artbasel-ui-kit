import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ButtonIcon } from '../../../actions/ButtonIcon';
import VipBadge from './VipBadge';

const ProfileFlyout = ({
  profileData: {
    entries, onProfileClick, onProfileClose, onProfileOpen, onProfileLogout,
  },
  setIsVisible,
  isVisible,
  userData: { name: userName, vipStatus, isUserLoggedIn },
  profileWelcomeHeader,
  navbarVisible,
  linkRenderer,
}) => {
  const menuRef = useRef(null);

  const toggleIsVisible = useCallback(() => {
    if (typeof onProfileClick === 'function') onProfileClick();
    if (isVisible && typeof onProfileClose === 'function') onProfileClose();
    if (!isVisible && typeof onProfileOpen === 'function') onProfileOpen();
    setIsVisible(!isVisible);
  }, [isVisible, setIsVisible]);

  const onClickAction = useCallback(() => {
    if (typeof onProfileLogout === 'function') onProfileLogout();
    setIsVisible(null);
    if (typeof onProfileClose === 'function') onProfileClose();
  }, [setIsVisible]);

  const isProfileButton = (target) => {
    const isIcon = target.nodeName === 'svg' || target.nodeName === 'path';
    return isIcon || target.className.includes('profile-btn');
  };

  const handleFlyoutClickAction = (event) => {
    const isProfileBtn = isProfileButton(event.target);
    if (menuRef.current && !isProfileBtn) {
      setIsVisible(null);
      if (typeof onProfileClose === 'function') onProfileClose();
    }
  };

  useEffect(() => {
    if (!navbarVisible) {
      setIsVisible(null);
    }
  }, [navbarVisible]);

  useEffect(() => {
    document.addEventListener('click', handleFlyoutClickAction);
    return () => document.removeEventListener('click', handleFlyoutClickAction);
  }, []);

  return (
    <>
      <ButtonIcon
        icon="guest"
        onClick={toggleIsVisible}
        className="profile-btn"
      />
      <div className="profileflyout-container">
        <div className={classnames('underline-text', { 'd-none': !isVisible, 'd-block': isVisible })} />
      {isVisible && (
          <ul className="profileflyout-menu" ref={menuRef}>
            {isUserLoggedIn
              && <li className='item-menu-label'>
                <div className='d-flex justify-content-between'>
                  <div>
                    <p className="text-label-large mb-0">{profileWelcomeHeader}</p>
                    <p className='text-label-large mb-0'>{userName}</p>
                  </div>
                  {vipStatus && <VipBadge />}
                </div>

              </li>
            }
          {entries.map((o) => (o.type === 'action' ? (
              <li className="item-menu-label" onClick={onClickAction} key={o.label}>
                {o.label}
              </li>
          ) : (
              <li className="item-menu-label item-menu-link" onClick={() => setIsVisible(null)} key={o.label}>
                { linkRenderer(o.link, o.label, o.target) }
              </li>
          )))}
        </ul>
      )}
      </div>
      <div
        className={classnames('megamenu-overlay',
          { visible: isVisible })}
      />
      </>
  );
};

ProfileFlyout.propTypes = {
  profileData: PropTypes.shape({
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        link: PropTypes.string,
      }),
    ),
    onProfileClick: PropTypes.func,
    onProfileOpen: PropTypes.func,
    onProfileClose: PropTypes.func,
    onProfileLogout: PropTypes.func.isRequired,
  }).isRequired,
  setIsVisible: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vipStatus: PropTypes.bool.isRequired,
    isUserLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  profileWelcomeHeader: PropTypes.string.isRequired,
  navbarVisible: PropTypes.bool,
  linkRenderer: PropTypes.func.isRequired,
};

ProfileFlyout.defaultProps = {
  navbarVisible: true,
};

export default ProfileFlyout;
