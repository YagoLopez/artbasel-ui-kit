const example = {
  title: 'Heading',
  subtitle: 'Subtitle',
  image:
  'https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_Live_Conversations.jpg',
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  button: {
    type: 'textlink',
    label: 'TextLink Label',
  },
  contentLink: 'https://artbasel.com',
  linkRenderer: (link, children) => (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  ),
  responsive: false,
  reverse: false,
  video: false,
};

export default example;