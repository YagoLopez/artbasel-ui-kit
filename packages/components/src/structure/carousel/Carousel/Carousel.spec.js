import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';
import example from './Carousel.example.json';

describe('Carousel component', () => {
  test('Render Carousel component', () => {
    const { container } = render(
      <Carousel title="some title">
        {example.cards.map((card, i) => (
          <Carousel.Slide key={i}>
            <img src={card.image} alt="picture" />
            <span>{card.artistName}</span>
          </Carousel.Slide>
        ))}
      </Carousel>,
    );
    const images = container.querySelectorAll('img');
    expect(images.length).toBe(6);
  });

  test('Should render custom arrows', () => {
    const { container } = render(
      <Carousel title="some title">
        {example.cards.map((card, i) => (
          <Carousel.Slide key={i}>
            <img src={card.image} alt="picture" />
            <span>{card.artistName}</span>
          </Carousel.Slide>
        ))}
      </Carousel>,
    );
    const arrows = container.querySelector('.carousel-arrows');
    expect(arrows).toBeInTheDocument();
  });

  test('Should not render custom arrows when perPage attr is set', () => {
    const { container } = render(
      <Carousel title="some title" options={{ perPage: 4 }}>
        {example.cards.map((card, i) => (
          <Carousel.Slide key={i}>
            <img src={card.image} alt="picture" />
            <span>{card.artistName}</span>
          </Carousel.Slide>
        ))}
      </Carousel>,
    );
    const arrows = container.querySelector('.carousel-arrows');
    expect(arrows).not.toBeInTheDocument();
  });

  test('Should see the prev arrow disabled', () => {
    const { container } = render(
      <Carousel title="some title">
        {example.cards.map((card, i) => (
          <Carousel.Slide key={i}>
            <img src={card.image} alt="picture" />
            <span>{card.artistName}</span>
          </Carousel.Slide>
        ))}
      </Carousel>,
    );
    const prevArrow = container.querySelector('.splide__arrow--prev');
    expect(prevArrow).toHaveClass('disabled');
  });

  test('Should see the arrows enabled or disabled according to events', () => {
    const { container } = render(
      <Carousel title="some title">
        {example.cards.map((card, i) => (
          <Carousel.Slide key={i}>
            <img src={card.image} alt="picture" />
            <span>{card.artistName}</span>
          </Carousel.Slide>
        ))}
      </Carousel>,
    );
    const prevArrow = container.querySelector('.splide__arrow--prev');
    const nextArrow = container.querySelector('.splide__arrow--next');

    fireEvent.click(nextArrow);
    expect(prevArrow).not.toHaveClass('disabled');

    fireEvent.click(prevArrow);
    expect(prevArrow).toHaveClass('disabled');
  });
});
