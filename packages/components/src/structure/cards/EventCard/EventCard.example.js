const example = {
  type: 'Exhibition',
  responsive: false,
  title: 'Event name goes here',
  date: 'Jul 21, 2021 - Jul 23, 2021',
  venue: {
    name: 'Barbara Wien',
    street: 'Türkenstraße 16',
    postCode: '80333',
    city: 'München',
  },
  eventLink: 'https://artbasel.com',
  schedule: 'Tuesday to Saturday, 10am to 6pm',
  image:
    'http://res.cloudinary.com/dqzqcuqf9/image/upload/c_fill,h_750,w_750,q_auto:good/v1645630777/pexels-photo-1585325_qj4ljc.jpg',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat non nibh id auctor. Nullam varius ex in feugiat egestas. Vestibulum gravida lobortis posuere. Pellentesque consequat non nibh id auctor.',
  linkRenderer: (link, children) => (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  ),
  tags: [
    {
      id: 1,
      label: 'Private',
      type: 'premium',
      theme: 'dark',
    },
    {
      id: 2,
      label: 'Vip',
      type: 'premium',
      theme: 'dark',
    },
    {
      id: 3,
      label: 'Tag',
      type: 'label',
      theme: 'light',
    },
    {
      id: 4,
      label: 'Tag',
      type: 'label',
      theme: 'light',
    },
    {
      id: 5,
      label: 'Tag',
      type: 'label',
      theme: 'light',
    },
  ],
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

export default example;
