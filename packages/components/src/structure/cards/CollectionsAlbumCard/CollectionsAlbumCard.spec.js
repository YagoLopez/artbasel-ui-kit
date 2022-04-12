import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CollectionsAlbumCard from './CollectionsAlbumCard';
import { albumExample } from './CollectionsAlbumCard.example';

describe('Tests for Collections Album Card', () => {
  const noCollectionText = 'Get the art you love organised in one place. Share it to get support or inspire others.';

  test('Should render the component', () => {
    render(
      <CollectionsAlbumCard />,
    );

    expect(screen.getByTestId('mch-collections-album-card')).toBeDefined();
  });

  test('Should render the component', () => {
    render(
      <CollectionsAlbumCard variant='new'/>,
    );

    const element = screen.getByText('Create new collection');

    expect(element).toBeInTheDocument();
  });

  test('Should render the component', () => {
    render(
      <CollectionsAlbumCard {...albumExample} />,
    );

    const element = screen.getByText(albumExample.collectionName);

    expect(element).toBeInTheDocument();
  });

  test('Should render the component', () => {
    render(
      <CollectionsAlbumCard variant='new' noCollectionText={noCollectionText} />,
    );

    const element = screen.getByText(noCollectionText);

    expect(element).toBeInTheDocument();
  });
});
