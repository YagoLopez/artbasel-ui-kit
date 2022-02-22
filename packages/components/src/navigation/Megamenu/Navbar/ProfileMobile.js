import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Container } from '../../../structure/Grid';
import VipBadge from './VipBadge';

const ProfileMobile = ({
  profileData: { entries, onProfileLogout, onProfileClose },
  isVisible,
  setIsVisible,
  userData: { name: userName, vipStatus, isUserLoggedIn },
  profileWelcomeHeader, linkRenderer,
}) => {
  const [containerIsVisible, setContainerIsVisible] = useState(false);
  const [optionsIsVisible, SetOptionsIsVisible] = useState(false);

  const onClickAction = useCallback(() => {
    if (typeof onProfileLogout === 'function') onProfileLogout();
    setIsVisible(null);
    if (typeof onProfileClose === 'function') onProfileClose();
  }, [setIsVisible]);

  useEffect(() => {
    if (isVisible) {
      setContainerIsVisible(true);
      setTimeout(() => SetOptionsIsVisible(true), 50);
      document.body.style.overflow = 'hidden';
    } else {
      SetOptionsIsVisible(false);
      setTimeout(() => setContainerIsVisible(false), 500);
      document.body.style.overflow = '';
    }
  }, [isVisible]);

  return (
    <Container className={ classnames('navlinks-mobile-container', { visible: containerIsVisible }) }>
       <div className={ classnames('navlinks-mobile-section', {
         visible: optionsIsVisible,
       }) }>
        <div className={classnames('mobile-item-left', { 'd-none': !isUserLoggedIn })}>
          <h5 className='navlink-mobile-header'>
            <div className='navlink-mobile link-profile-header justify-content-between'>
              <div>
                <h5 >{profileWelcomeHeader}</h5>
                <h5 >{userName}</h5>
              </div>
              {vipStatus && <VipBadge />}
            </div>
          </h5>
        </div>

        <div className={ classnames('mobile-item-midle', { 'd-none': !isUserLoggedIn }) }>
          {
            entries.filter(o => o.type !== 'action').map(o => <div className="navlink-mobile-header item" key={ o.label }>
                  <div className="navlink-mobile link-profile text-medium">
                    { linkRenderer(o.link, o.label) }
              </div>
              </div>)
          }
        </div>

                <div className='mobile-item-right'>
          {
            entries.filter(o => o.type === 'action').map(o => <p className='navlink-mobile-header' key={o.label}>
            <button className="navlink-mobile link-profile link-logout text-medium" onClick={onClickAction} key={o.label}>
                {o.label}
            </button>
          </p>)
          }
        </div>

      </div>

    </Container>
  );
};

ProfileMobile.propTypes = {
  profileData: PropTypes.shape({
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        link: PropTypes.string,
      }),
    ),
    onProfileLogout: PropTypes.func.isRequired,
    onProfileClose: PropTypes.func,
  }).isRequired,
  setIsVisible: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vipStatus: PropTypes.bool.isRequired,
    isUserLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  profileWelcomeHeader: PropTypes.string.isRequired,
  linkRenderer: PropTypes.func.isRequired,
};

export default ProfileMobile;
