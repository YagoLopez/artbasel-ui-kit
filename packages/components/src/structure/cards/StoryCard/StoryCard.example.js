const example = {
  title: 'Heading',
  responsive: false,
  subtitle: 'Artist, Label',
  date: '00/00/0000',
  image:
    'https://res.cloudinary.com/dqzqcuqf9/image/upload/v1646917949/pexels-photo-4362302_jcofqi.jpg',
  description:
    'A founder of the 1960s Dusseldorf-based Group Zero, Otto Piene is best known for his paintings made with smoke and fire. Called Rauchbilder (smoke pictures), Piene applied solvent to pigmented paper and lit it on fire, developing images in the residual soot.',
  button: {
    type: 'primary',
    label: 'See all artworks',
  },
  video: false,
  storyLink: 'https://artbasel.com',
  linkRenderer: (link, children) => (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  ),
  equalHeight: false,
};

export default example;
