import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ButtonIcon } from '../../../actions/ButtonIcon';

const LanguageFlyout = ({
  languageData: {
    languageHeader,
    languageEntries,
    languageSelected,
    onLanguageClick,
  },
  setIsVisible,
  isVisible,
  navbarVisible,
}) => {
  const menuRef = useRef(null);

  const toggleIsVisible = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible, setIsVisible]);

  const handleFlyoutClick = (type) => {
    if (typeof onLanguageClick === 'function' && type) onLanguageClick(type);
    setIsVisible(null);
  };

  useEffect(() => {
    if (!navbarVisible) {
      setIsVisible(null);
    }
  }, [navbarVisible]);

  return (
    <>
      <ButtonIcon
        icon="world"
        onClick={toggleIsVisible}
        className="profile-btn"
      />
      <div className="profileflyout-container">
        <div className={classnames('underline-text language-switcher', { 'd-none': !isVisible, 'd-block': isVisible })} />
          {isVisible && (
            <ul className="profileflyout-menu language-switcher" ref={menuRef}>
                <li className='item-menu-label'>
                    <p className="language-header mb-0">{languageHeader}</p>
                </li>
                {languageEntries.map((entry) => (
                  <li className={ classnames('item-menu-label item-menu-link', { selected: entry.type === languageSelected }) }
                    onClick={ () => handleFlyoutClick(entry.type) }
                    key={ entry.label }>
                      { entry.label }
                    </li>
                ))}
            </ul>
          )}
      </div>
      <div
        className={classnames('megamenu-overlay',
          { visible: isVisible })} onClick={toggleIsVisible}
      />
      </>
  );
};

LanguageFlyout.propTypes = {
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
  isVisible: PropTypes.bool.isRequired,
  navbarVisible: PropTypes.bool,
};

LanguageFlyout.defaultProps = {
  navbarVisible: true,
};

export default LanguageFlyout;
