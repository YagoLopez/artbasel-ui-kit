import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../actions/Button/Button';
import ButtonIcon from '../../actions/ButtonIcon/ButtonIcon';
import VideoPlayer from '../mediaviewer/VideoPlayer/VideoPlayer';
import SharingButton from '../../actions/SharingButton/SharingButton';

const videoOptions = {
  playing: true,
  controls: false,
  startOnMouseEnter: true,
  pauseOnMouseLeave: false,
  loop: true,
  width: 'auto',
  height: '75vh',
  muted: true,
};

const ReusableBanner = ({
  background, eyebrow, headline, text, primaryButton,
  shareButtonAction, calendarButtonAction, buttonVisibility,
  mediaPriority, backgroundVideo, isHtml,
}) => {
  return (
    <section className="reusable-banner" test-dataid="reusable-banner" style={{ backgroundImage: `${mediaPriority === 'image' ? `url(${background})` : 'none'}` }}>
      <main className="d-flex align-items-center h-100 justify-content-center">
        {
          mediaPriority === 'video' && (
            <div className='position-absolute d-flex justify-content-center'>
              <VideoPlayer {...videoOptions} url={backgroundVideo} />
            </div>
          )
        }
        <div className="text-center position-relative">
          { eyebrow && <h5 className="text-white pb-3">{eyebrow}</h5> }
          <div className='d-flex justify-content-center'>
            {headline && <h1 className="text-white title-size headline-truncated">{headline}</h1> }
          </div>
          {(isHtml && text) && (
            <div className='d-flex justify-content-center pt-2 '>
              <div
                dangerouslySetInnerHTML={{ __html: text }}
                className='text-large text-white px-5 text-size m-0 text-truncated'
                as="div"
              />
            </div>
          )}
          {
            (!isHtml && text) && (
              <div className='d-flex justify-content-center pt-2'>
                <p className='text-large text-white px-5 text-size m-0 text-truncated'>{text}</p>
              </div>
            )
          }
          {
            (primaryButton || shareButtonAction || calendarButtonAction) && (buttonVisibility !== 'neverShow') && (
              <section className='d-flex justify-content-center'>
                <div className='position-absolute d-flex mt-8'>
                  {
                    primaryButton && (
                      <Button
                        onClick={primaryButton?.onClick}
                        className={classNames('me-3', {
                          'hover-button': buttonVisibility === 'hover',
                          'd-none': buttonVisibility === 'never',
                          'opacity-100': buttonVisibility === 'always',
                        })}
                      >
                        {primaryButton?.label}
                      </Button>
                    )
                  }
                  {
                    shareButtonAction?.length > 0 && (
                      <div className={classNames('me-3', {
                        'hover-button': buttonVisibility === 'hover',
                        'd-none': buttonVisibility === 'never',
                        'opacity-100': buttonVisibility === 'always',
                      })}>
                        <SharingButton
                          size="lg"
                          variant="fill"
                          media={shareButtonAction}
                        />
                      </div>
                    )
                  }
                  {
                    calendarButtonAction && (
                      <ButtonIcon
                        icon="calendar"
                        onClick={calendarButtonAction}
                        size="lg"
                        title="Calendar"
                        variant="fill"
                        className={classNames({
                          'hover-button': buttonVisibility === 'hover',
                          'd-none': buttonVisibility === 'never',
                          'opacity-100': buttonVisibility === 'always',
                        })}
                      />
                    )
                  }
                </div>
              </section>
            )
          }
        </div>
      </main>
    </section>
  );
};

ReusableBanner.propTypes = {
  background: PropTypes.string,
  eyebrow: PropTypes.string,
  headline: PropTypes.string,
  text: PropTypes.string,
  primaryButton: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
  }),
  shareButtonAction: PropTypes.arrayOf(
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
  ),
  calendarButtonAction: PropTypes.func,
  buttonVisibility: PropTypes.oneOf(['hover', 'always', 'never']),
  mediaPriority: PropTypes.oneOf(['image', 'video']),
  backgroundVideo: PropTypes.string,
  isHtml: PropTypes.bool,
};

ReusableBanner.defaultProps = {
  buttonVisibility: 'hover',
  mediaPriority: 'image',
  isHtml: false,
};

export default ReusableBanner;
