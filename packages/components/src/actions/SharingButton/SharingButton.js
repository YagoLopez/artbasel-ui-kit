import React from 'react';
import PropTypes from 'prop-types';
import ContextualButton from '../ContextualButton/ContextualButton';

const SharingButton = ({
  media,
  showLabel,
  position,
  align,
  theme,
}) => {
  const pageTitle = document.title;
  const pageUrl = window.location.href;
  const isMobile = () => /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
  const service = isMobile ? 'api' : 'web';

  const openWindow = (link) => window.open(link);
  const openSizedWindow = (link) => window.open(link, '', 'width=500,height=500');
  const openMailWindow = (link) => window.open(link, 'mail');

  const mediaSelector = {
    facebook: {
      label: 'Facebook',
      function: () => openSizedWindow(`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}&quote=${pageTitle}`),
    },
    whatsapp: {
      label: 'WhatsApp',
      function: () => openSizedWindow(`https://${service}.whatsapp.com/send?text=${pageTitle} ${pageUrl}`),
    },
    linkedin: {
      label: 'LinkedIn',
      function: () => openSizedWindow(`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`),
    },
    twitter: {
      label: 'Twitter',
      function: () => openSizedWindow(`https://twitter.com/share?url=${pageUrl}&text=${pageTitle}`),
    },
    weebo: {
      label: 'Weibo',
      function: () => openSizedWindow(`https://service.weibo.com/share/share.php?url=${pageUrl}&title=${pageTitle}`),
    },
    wechat: {
      label: 'WeChat',
      function: () => openWindow(`https://www.addtoany.com/ext/wechat/share/#url=${pageUrl}`),
    },
    mail: {
      label: 'Email',
      function: () => openMailWindow(`mailto:?subject=${pageTitle}&body=${pageUrl}`),
    },
    'link-default': {
      label: 'Copy Link',
      function: () => navigator.clipboard.writeText(pageUrl),
    },
  };

  return (
    <ContextualButton
      icon="share"
      showLabel={showLabel}
      position={position}
      align={align}
      theme={theme}
    >
      {
        media.map((item, index) => {
          return (
            <ContextualButton.Item
              key={index}
              icon={item}
              onClick={mediaSelector[item].function}
            >
              {mediaSelector[item].label}
            </ContextualButton.Item>
          );
        })
      }
    </ContextualButton>
  );
};

SharingButton.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.oneOf([
      'facebook',
      'whatsapp',
      'linkedin',
      'twitter',
      'weebo',
      'wechat',
      'mail',
      'link-default',
    ]),
  ).isRequired,
  showLabel: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  theme: PropTypes.oneOf(['light', 'dark']),
};

SharingButton.defaultProps = {
  showLabel: true,
  icon: 'context',
  position: 'bottom',
  align: 'start',
  theme: 'light',
};

export default SharingButton;
