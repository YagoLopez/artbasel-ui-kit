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

export const imagesArray = [
  'http://res.cloudinary.com/dqzqcuqf9/image/upload/c_fill,h_600,w_600,q_auto:good/v1643407792/mfp-fe-profile-image/puqcutvjyr57aplyucak.jpg',
  'http://res.cloudinary.com/dqzqcuqf9/image/upload/c_fill,h_600,w_600,q_auto:good/v1641528983/mfp-fe-profile-image/wpgraltvuxxulo5k8yhy.jpg',
  'http://res.cloudinary.com/dqzqcuqf9/image/upload/c_fill,h_600,w_600,q_auto:good/v1574443262/mfp-fe-profile-image/j1kipnvlbdszo6ugdhof.jpg',
  'http://res.cloudinary.com/dqzqcuqf9/image/upload/c_fill,h_600,w_600,q_auto:good/v1571995539/mfp-fe-profile-image/o6exeku3aluoloht7bsi.jpg',
  'http://res.cloudinary.com/dqzqcuqf9/image/upload/x_95,y_505,c_crop,w_2821,h_1763/c_fill,h_600,w_600,q_auto:good/v1571243919/mfp-fe-profile-image/uxi2bkhacamjbuyystdj.jpg',
  'http://res.cloudinary.com/dqzqcuqf9/image/upload/x_1164,y_1237,c_crop,w_4714,h_2948/c_fill,h_600,w_600,q_auto:good/v1574297709/mfp-fe-profile-image/qw7k9sy08n6xuqeaarbw.jpg',
];

export default {};
