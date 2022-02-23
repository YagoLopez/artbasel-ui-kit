export const example = {
  title: 'Untitled, 2020',
  artistName: 'Josh Smith',
  sectorsData: [
    {
      id: 1,
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
  imageUrl:
    'https://res.cloudinary.com/dqzqcuqf9/image/upload/ar_4:5,c_fill,q_auto:good,w_400/v1645029962/MicrosoftTeams-image_tkqtch.jpg',
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
  onCollectionAdd: () => {},
};

export const imagesArray = [
  'http://res.cloudinary.com/dqzqcuqf9/image/upload/ar_4:5,c_fill,q_auto:good,w_400/v1643407792/mfp-fe-profile-image/puqcutvjyr57aplyucak.jpg',
  'http://res.cloudinary.com/dqzqcuqf9/image/upload/ar_4:5,c_fill,q_auto:good,w_400/v1641528983/mfp-fe-profile-image/wpgraltvuxxulo5k8yhy.jpg',
  'http://res.cloudinary.com/dqzqcuqf9/image/upload/ar_4:5,c_fill,q_auto:good,w_400/v1574443262/mfp-fe-profile-image/j1kipnvlbdszo6ugdhof.jpg',
  'http://res.cloudinary.com/dqzqcuqf9/image/upload/ar_4:5,c_fill,q_auto:good,w_400/v1571995539/mfp-fe-profile-image/o6exeku3aluoloht7bsi.jpg',
  'http://res.cloudinary.com/dqzqcuqf9/image/upload/x_95,y_505,c_crop,w_2821,h_1763/ar_4:5,c_fill,q_auto:good,w_400/v1571243919/mfp-fe-profile-image/uxi2bkhacamjbuyystdj.jpg',
  'http://res.cloudinary.com/dqzqcuqf9/image/upload/x_1164,y_1237,c_crop,w_4714,h_2948/ar_4:5,c_fill,q_auto:good,w_400/v1574297709/mfp-fe-profile-image/qw7k9sy08n6xuqeaarbw.jpg',
];

export default {};
