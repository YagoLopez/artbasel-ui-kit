import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const args = (({
    startOnMouseEnter,
    pauseOnMouseLeave,
    url,
    playing,
    ...rest
  }) => rest)(props);

  const [isPlaying, setIsPlaying] = useState(props.playing);

  const handleMouseEnter = () => {
    if (props.startOnMouseEnter) {
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (props.pauseOnMouseLeave) {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    setIsPlaying(props.playing);
  }, [props.playing]);

  return (
    <div
      data-testid="mch-video-player"
      className='player-wrapper'
    >
      <ReactPlayer
        className={props.className}
        {...args}
        playing={isPlaying}
        url={props.url}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onEnded={() => props.setPlaying(true)}
      />
    </div>
  );
};

const {
  string, bool, number, array, oneOfType, shape, object, func, node,
} = PropTypes;

VideoPlayer.propTypes = {
  className: string,
  setPlaying: func,
  startOnMouseEnter: bool,
  pauseOnMouseLeave: bool,
  url: oneOfType([string, array, object]),
  playing: bool,
  loop: bool,
  controls: bool,
  volume: number,
  muted: bool,
  playbackRate: number,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  style: object,
  progressInterval: number,
  playsinline: bool,
  pip: bool,
  stopOnUnmount: bool,
  light: oneOfType([bool, string]),
  playIcon: node,
  previewTabIndex: number,
  fallback: node,
  wrapper: oneOfType([
    string,
    func,
    shape({ render: func.isRequired }),
  ]),
  config: shape({
    soundcloud: shape({
      options: object,
    }),
    youtube: shape({
      playerVars: object,
      embedOptions: object,
      onUnstarted: func,
    }),
    facebook: shape({
      appId: string,
      version: string,
      playerId: string,
      attributes: object,
    }),
    dailymotion: shape({
      params: object,
    }),
    vimeo: shape({
      playerOptions: object,
      title: string,
    }),
    file: shape({
      attributes: object,
      tracks: array,
      forceVideo: bool,
      forceAudio: bool,
      forceHLS: bool,
      forceDASH: bool,
      forceFLV: bool,
      hlsOptions: object,
      hlsVersion: string,
      dashVersion: string,
      flvVersion: string,
    }),
    wistia: shape({
      options: object,
      playerId: string,
      customControls: array,
    }),
    mixcloud: shape({
      options: object,
    }),
    twitch: shape({
      options: object,
      playerId: string,
    }),
    vidyard: shape({
      options: object,
    }),
  }),
  onReady: func,
  onStart: func,
  onPlay: func,
  onPause: func,
  onBuffer: func,
  onBufferEnd: func,
  onEnded: func,
  onError: func,
  onDuration: func,
  onSeek: func,
  onProgress: func,
  onClickPreview: func,
  onEnablePIP: func,
  onDisablePIP: func,
};

const noop = () => {};

VideoPlayer.defaultProps = {
  startOnMouseEnter: true,
  pauseOnMouseLeave: false,
  playing: false,
  loop: false,
  controls: false,
  volume: null,
  muted: false,
  playbackRate: 1,
  width: '100%',
  height: '100%',
  style: {},
  progressInterval: 1000,
  playsinline: false,
  pip: false,
  stopOnUnmount: true,
  light: false,
  fallback: null,
  wrapper: 'div',
  previewTabIndex: 0,
  config: {
    soundcloud: {
      options: {
        visual: true, // Undocumented, but makes player fill container and look better
        buying: false,
        liking: false,
        download: false,
        sharing: false,
        show_comments: false,
        show_playcount: false,
      },
    },
    youtube: {
      playerVars: {
        playsinline: 1,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1,
      },
      embedOptions: {},
      onUnstarted: noop,
    },
    facebook: {
      appId: '1309697205772819',
      version: 'v3.3',
      playerId: null,
      attributes: {},
    },
    dailymotion: {
      params: {
        api: 1,
        'endscreen-enable': false,
      },
    },
    vimeo: {
      playerOptions: {
        autopause: false,
        byline: false,
        portrait: false,
        title: false,
      },
      title: null,
    },
    file: {
      attributes: {},
      tracks: [],
      forceVideo: false,
      forceAudio: false,
      forceHLS: false,
      forceDASH: false,
      forceFLV: false,
      hlsOptions: {},
      hlsVersion: '1.1.4',
      dashVersion: '3.1.3',
      flvVersion: '1.5.0',
    },
    wistia: {
      options: {},
      playerId: null,
      customControls: null,
    },
    mixcloud: {
      options: {
        hide_cover: 1,
      },
    },
    twitch: {
      options: {},
      playerId: null,
    },
    vidyard: {
      options: {},
    },
  },
  onReady: noop,
  onStart: noop,
  onPlay: noop,
  onPause: noop,
  onBuffer: noop,
  onBufferEnd: noop,
  onEnded: noop,
  onError: noop,
  onDuration: noop,
  onSeek: noop,
  onProgress: noop,
  onClickPreview: noop,
  onEnablePIP: noop,
  onDisablePIP: noop,
};

export default VideoPlayer;
