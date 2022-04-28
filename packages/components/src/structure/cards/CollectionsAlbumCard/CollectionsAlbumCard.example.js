import React from 'react';

const albumExample = {
  variant: 'album',
  images: [
    'https://picsum.photos/300?random=1',
    'https://picsum.photos/300?random=2',
    'https://picsum.photos/300?random=3',
    'https://picsum.photos/300?random=4',
  ],
  numberOfFollowers: 10,
  collectionName: 'Abstract Name',
  author: 'Cameron Johnson',
  collectionLink: 'https://artbasel.com',
  linkRenderer: (link, children) => (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  ),
};

const lessFourImagesExample = {
  variant: 'album',
  images: [
    'https://picsum.photos/300?random=1',
    'https://picsum.photos/300?random=2',
  ],
  numberOfFollowers: 10,
  collectionName: 'Abstract Name',
  author: 'Cameron Johnson',
  collectionLink: 'https://artbasel.com',
  linkRenderer: (link, children) => (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  ),
};

export { albumExample, lessFourImagesExample };
