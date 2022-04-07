import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Container } from '../../../structure/Grid';

const LanguageMobile = ({
  languageData: {
    languageHeader,
    languageEntries,
    languageSelected,
    onLanguageClick,
  },
  isVisible,
  setIsVisible,
}) => {
  const [containerIsVisible, setContainerIsVisible] = useState(false);
  const [optionsIsVisible, SetOptionsIsVisible] = useState(false);

  const handleFlyoutClick = (type) => {
    if (typeof onLanguageClick === 'function' && type) onLanguageClick(type);
    setIsVisible(null);
  };

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
      <div className={ classnames('navlinks-mobile-section', { visible: optionsIsVisible }) }>
          <div className='navlink-mobile-header'>
            <div className='navlink-mobile link-language-header justify-content-between'>
                {languageHeader}
            </div>
          </div>
          <div className='mobile-item-midle'>
            {
            languageEntries.map(entry => <div className='navlink-mobile-header item' key={ entry.label }>
                <div className={ classnames('navlink-mobile link-profile text-medium', { selected: entry.type === languageSelected }) } onClick={() => handleFlyoutClick(entry.type)}>
                  { entry.label }
                </div>
                </div>)
            }
          </div>
      </div>
    </Container>
  );
};

LanguageMobile.propTypes = {
  languageData: PropTypes.shape({
    languageHeader: PropTypes.string.isRequired,
    languageSelected: PropTypes.string.isRequired,
    languageEntries: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ),
    onLanguageClick: PropTypes.func,
  }).isRequired,
  setIsVisible: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
};

export default LanguageMobile;
