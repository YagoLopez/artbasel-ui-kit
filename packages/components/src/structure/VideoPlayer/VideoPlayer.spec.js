import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import VideoPlayer from './VideoPlayer';

const component = <VideoPlayer
  data-testid="video-player"
  startOnMouseEnter
  controls={true}
  url="https://www.youtube.com/watch?v=4N-iMm9TWWI&ab_channel=HealingNatureSounds"
/>;

describe('VideoPlayer component', () => {
  let instance;
  beforeEach(() => {
    instance = render(component);
  });

  it('Renders the player', () => {
    const player = screen.getByTestId('video-player');
    expect(player).toBeInTheDocument();
  });
});
