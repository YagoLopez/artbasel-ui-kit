export const example = {
  title: 'Headline',
  collaboratedAccounts:
    'Lynda Benglis • Joe Bradley • Louise Bourgeois • Tracey Emin • Günther Förg • Roni Horn • Joe Bradley • Louise Bourgeois • Tracey Emin • Günther Förg',
  ownerAccount: 'Gallery Name',
  theme: 'light',
  sectorsData: [
    {
      id: 1,
      name: 'Meridians',
      onClick: () => {},
    },
    {
      id: 2,
      name: 'Parcour',
      onClick: () => {},
    },
  ],
  linkRenderer: (link, children) => (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  ),
  roomLink: 'https://artbasel.com',
  ownerAccountLink: 'https://artbasel.com',
  type: 'hybrid',
  imageUrl:
    'https://res.cloudinary.com/dqzqcuqf9/image/upload/v1644497479/pix_lykotn.png',
  liveChat: false,
  openingSoon: {
    active: false,
    label: 'Opening Soon',
    onClick: () => {},
  },
  visited: {
    active: false,
    label: 'Visited',
    onClick: () => {},
  },
  curator: {
    active: false,
    label: 'Curator’s Pick | Example Name',
    onClick: () => {},
  },
  show: {
    active: false,
    label: 'OVR: Show Name',
    onClick: () => {},
  },
  unavailableToView: {
    active: false,
    label: 'Unavailable to view',
    onClick: () => {},
  },
  selectMode: {
    active: false,
    checked: false,
    onChange: () => {},
    disabled: false,
  },
  collection: {
    active: false,
    onClick: () => {},
  },
};

export default {};
