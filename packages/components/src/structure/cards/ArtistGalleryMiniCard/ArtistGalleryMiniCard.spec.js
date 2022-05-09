import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ArtistGalleryMiniCard from './ArtistGalleryMiniCard';

describe('Tests for Mini Card', () => {
  test('Should render the component', () => {
    render(
      <ArtistGalleryMiniCard title='Hajime Sorayama' image='https://picsum.photos/400' />,
    );

    expect(screen.getByTestId('mch-artist-gallery-card-mini')).toBeDefined();
  });

  test('Should not render the component', () => {
    render(
      <ArtistGalleryMiniCard />,
    );

    expect(screen.queryByText('mch-artist-gallery-card-mini')).not.toBeInTheDocument();
  });

  test('Should render gallery variant', () => {
    render(
      <ArtistGalleryMiniCard variant='gallery' tagCities={['BSL']} title='Hajime Sorayama' image='https://picsum.photos/400' />,
    );

    const element = screen.getByText('BSL');

    expect(element).toBeInTheDocument();
  });

  test('Should render the component with checkbox', () => {
    const selectMode = {
      active: true,
      checked: false,
      onChange: () => { },
    };

    render(
      <ArtistGalleryMiniCard selectMode={selectMode} title="Hajime Sorayama" image="https://picsum.photos/400" />,
    );

    const element = screen.getByTestId('mch-checkbox');

    expect(element).toBeInTheDocument();
  });
});
