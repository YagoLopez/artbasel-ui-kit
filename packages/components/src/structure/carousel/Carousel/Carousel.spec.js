import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Carousel from './Carousel';
import example from './Carousel.example.json';

describe('Carousel component', () => {
  beforeEach(() => {
    cleanup();
  });
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

  test('Should render button when button is set in true.', () => {
    const { container } = render(
      <Carousel title="some title" options={{ button: true, controlButtonLabel: 'SEE ALL' }}>
        {example.cards.map((card, i) => (
          <Carousel.Slide key={i}>
            <img src={card.image} alt="picture" />
            <span>{card.artistName}</span>
          </Carousel.Slide>
        ))}
      </Carousel>,
    );
    const button = container.querySelector('.btn-primary');
    expect(button).toBeInTheDocument();
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

  test('Should not render arrows when there is no need for it', () => {
    const { container } = render(
      <Carousel title="some title">
        <Carousel.Slide>
          <img src={example.cards[0].image} alt="picture" />
          <span>{example.cards[0].artistName}</span>
        </Carousel.Slide>
      </Carousel>,
    );

    const arrows = container.querySelector('.carousel-arrows');
    expect(arrows).toHaveClass('hidden');
  });
});
