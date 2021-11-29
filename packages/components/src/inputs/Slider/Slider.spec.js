import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Slider from './Slider';

const onChangeMock = jest.fn();
describe('Slider component', () => {
  test('Render Slider component with multirange', () => {
    const element = render(
      <Slider min={0} max={100} step={1} isRange onChange={onChangeMock} />,
    );
    expect(
      element.container.querySelector('.thumb--zindex-3'),
    ).toBeInTheDocument();
    expect(
      element.container.querySelector('.thumb--zindex-4'),
    ).toBeInTheDocument();
  });
  test('Render slider component with single range', () => {
    const element = render(
      <Slider min={0} max={100} step={1} onChange={onChangeMock} />,
    );
    expect(
      element.container.querySelector('.thumb--zindex-3'),
    ).not.toBeInTheDocument();
    expect(
      element.container.querySelector('.thumb--zindex-4'),
    ).toBeInTheDocument();
  });
  test('Render slider component should call onChange with single Range', () => {
    const element = render(
      <Slider min={0} max={100} step={1} onChange={onChangeMock} />,
    );
    const slider = element.container.querySelector('input[type="range"]');
    fireEvent.change(slider, { target: { value: '50' } });
    expect(onChangeMock).toHaveBeenCalledWith(50);
  });
  test('Render slider component should call onChange with multiple Range', () => {
    const element = render(
      <Slider min={0} max={100} isRange step={1} onChange={onChangeMock} />,
    );
    const slider = element.container.querySelectorAll('input[type="range"]');
    fireEvent.change(slider[0], { target: { value: '10' } });
    expect(onChangeMock).toHaveBeenCalledWith([10, 100]);
    fireEvent.change(slider[1], { target: { value: '80' } });
    expect(onChangeMock).toHaveBeenCalledWith([10, 80]);
  });
});
