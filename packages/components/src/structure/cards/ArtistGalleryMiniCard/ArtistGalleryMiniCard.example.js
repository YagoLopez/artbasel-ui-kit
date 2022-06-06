export const ArtistMiniCardExample = {
  title: 'Hajime Sorayama',
  image: 'https://picsum.photos/400',
  selectMode: {
    active: false,
    checked: false,
    onChange: () => {},
  },
  unavailableLabel: 'Unavailable to view',
  collectionLink: 'https://artbasel.com',
  linkRenderer: (link, children) => (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  ),
};

export const GalleryMiniCardExample = {
  title: 'Hajime Sorayama',
  tagCities: ['BSL', 'PAR', 'MIA', 'HKG', 'MP'],
  variant: 'gallery',
  image: 'https://picsum.photos/400',
  selectMode: {
    active: false,
    checked: false,
    onChange: () => { },
  },
  unavailableLabel: 'Unavailable to view',
  collectionLink: 'https://artbasel.com',
  linkRenderer: (link, children) => (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  ),
};
