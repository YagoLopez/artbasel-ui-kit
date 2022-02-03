import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CarouselPDP from './CarouselPDP';

const examples = [
  {
    image: 'https://source.unsplash.com/random/800x700?sig=1',
    text: 'Text 01',
  },
  {
    image: 'https://source.unsplash.com/random/800x700?sig=1',
    text: 'Text 02',
  },
  {
    image: 'https://source.unsplash.com/random/800x700?sig=1',
    text: 'Text 03',
  },
  {
    image: 'https://source.unsplash.com/random/800x700?sig=1',
    text: 'Text 04',
  },
];

describe('CarouselPDP component', () => {
  test('Should render component and show first element component', () => {
    const { container } = render(
      <CarouselPDP>
        {examples.map((example, key) => (
          <CarouselPDP.Slide key={key}>
            <img src={example.image} alt="img" />
            <span>{example.text}</span>
          </CarouselPDP.Slide>
        ))}
      </CarouselPDP>,
    );
    const images = container.querySelectorAll('img');
    expect(images.length).toBe(4);
  });
});
