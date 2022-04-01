export const example = {
  // artwork data
  artworkTitle: 'Art Name',
  artistsData: [
    {
      id: 1,
      name: 'Artist Name',
      url: 'https://artbasel.com/#1',
      linkRenderer: (link, children) => (
        <a href={link} target="_blank" rel="noreferrer">
          {children}
        </a>
      ),
    },
  ],
  year: '1982',
  price: 'USD 9,999',
  status: 'Reserved',
  galleryName: 'Gallery Name',
  imageUrl:
    'https://res.cloudinary.com/dqzqcuqf9/image/upload/v1646415941/1_c8ugts.jpg',
  showsData: [
    {
      id: 1,
      name: 'Basel',
      onClick: () => {},
    },
    {
      id: 2,
      name: 'Miami Beach',
      onClick: () => {},
    },
    {
      id: 3,
      name: 'Hong Kong',
      onClick: () => {},
    },
  ],
  // options
  imageType: 'square', // square, contained, masonry
  pageType: 'room', // room, listing, catalogue
  collection: {
    active: false,
    onClick: () => {},
  },
  theme: 'light',
  selectMode: {
    active: false,
    checked: false,
    onChange: () => {},
    disabled: false,
  },
  inquiry: {
    active: true,
    label: 'Sales Inquiry',
    onClick: () => {},
  },
  // tags
  viewAtFair: {
    active: false,
    label: 'On view at the fair',
    onClick: () => {},
  },
  onlineExclusive: {
    active: false,
    label: 'Online Exclusive',
    onClick: () => {},
  },
  unavailableToView: {
    active: false,
    label: 'Unavailable to view',
    onClick: () => {},
  },
  show: {
    active: false,
    label: 'OVR: Show Name',
    onClick: () => {},
  },
  // links
  artworkLink: 'https://artbasel.com/artworks',
  galleryLink: 'https://artbasel.com/galleries',
  linkRenderer: (link, children) => (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  ),
};

export default {};
