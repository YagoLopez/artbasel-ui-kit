import React from 'react';
import PropTypes from 'prop-types';
import ContextualButton from '../ContextualButton/ContextualButton';

const SharingButton = ({
  media,
  size,
  variant,
  theme,
  title,
  position,
  copyLinkLabel,
  align,
  showLabel,
  scrollbar,
}) => {
  const openWindow = (link) => window.open(link);
  const openSizedWindow = (link) => window.open(link, '', 'width=500,height=500');
  const openMailWindow = (link) => window.open(link, 'mail');

  const mediaSelector = {
    facebook: {
      label: 'Facebook',
      function: () => openSizedWindow(
        `https://www.facebook.com/sharer/sharer.php?u=${window?.location?.href}&quote=${document?.title}`,
      ),
    },
    whatsapp: {
      label: 'WhatsApp',
      function: () => openSizedWindow(
        `https://${
          /(android|iphone|ipad|mobile)/i.test(navigator.userAgent)
            ? 'api'
            : 'web'
        }.whatsapp.com/send?text=${document?.title} ${window?.location?.href}`,
      ),
    },
    linkedin: {
      label: 'LinkedIn',
      function: () => openSizedWindow(
        `https://www.linkedin.com/sharing/share-offsite/?url=${window?.location?.href}`,
      ),
    },
    twitter: {
      label: 'Twitter',
      function: () => openSizedWindow(
        `https://twitter.com/share?url=${window?.location?.href}&text=${document?.title}`,
      ),
    },
    weebo: {
      label: 'Weibo',
      function: () => openSizedWindow(
        `https://service.weibo.com/share/share.php?url=${window?.location?.href}&title=${document?.title}`,
      ),
    },
    wechat: {
      label: 'WeChat',
      function: () => openWindow(
        `https://www.addtoany.com/ext/wechat/share/#url=${window?.location?.href}`,
      ),
    },
    mail: {
      label: 'Email',
      function: () => openMailWindow(
        `mailto:?subject=${document?.title}&body=${
          window?.location?.href?.split('?')[0]
        }`,
      ),
    },
    'link-default': {
      label: copyLinkLabel,
      function: () => navigator?.clipboard?.writeText(window?.location?.href) || {},
    },
  };

  return typeof window !== 'undefined' ? (
    <ContextualButton
      icon="share"
      size={size}
      variant={variant}
      theme={theme}
      title={title}
      position={position}
      align={align}
      showLabel={showLabel}
      scrollbar={scrollbar}
    >
      {media.map((item, index) => (
        <ContextualButton.Item
          key={index}
          icon={item}
          onClick={mediaSelector[item].function}
        >
          {mediaSelector[item].label}
        </ContextualButton.Item>
      ))}
    </ContextualButton>
  ) : null;
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
  size: PropTypes.oneOf(['xs', 's', 'm', 'lg']),
  variant: PropTypes.oneOf(['default', 'outline', 'fill']),
  theme: PropTypes.oneOf(['light', 'dark']),
  title: PropTypes.string,
  copyLinkLabel: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  showLabel: PropTypes.bool,
  scrollbar: PropTypes.bool,
};

SharingButton.defaultProps = {
  size: 'm',
  variant: 'default',
  theme: 'light',
  title: 'Share to social media',
  position: 'bottom',
  align: 'start',
  copyLinkLabel: 'Copy Link',
  showLabel: true,
  scrollbar: false,
};

export default SharingButton;
