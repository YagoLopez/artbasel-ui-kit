const example = {
  title: 'Heading',
  subtitle: 'Subtitle',
  image:
    'https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_Live_Conversations.jpg',
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  cta: [
    {
      id: 1,
      label: 'TextLink Label',
      contentLink: 'https://artbasel.com/#1',
      linkRenderer: (link, children) => (
        <a href={link} target="_blank" rel="noreferrer">
          {children}
        </a>
      ),
    },
  ],
  responsive: false,
  reverse: false,
  videoPlayer: false,
  videoIcon: false,
  urlVideo:
    'https://res.cloudinary.com/dqzqcuqf9/video/upload/vc_h264/v1648188493/artbasel-admin/fsum03r2ohhwbfjhrkya.m3u8',
  isHtml: false,
};

export default example;
