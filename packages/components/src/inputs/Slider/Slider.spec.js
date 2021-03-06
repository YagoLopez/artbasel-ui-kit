import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Slider from './Slider';

const Component = (props) => (
  <Slider min={0} max={100} isRange step={1} onChange={jest.fn} {...props} />
);

describe('Slider component', () => {
  describe('renderer', () => {
    it('should render with range', () => {
      render(<Component />);

      const minInputElement = screen.getByTestId('min-value');
      const maxInputElement = screen.queryByTestId('max-value');

      expect(minInputElement).toBeInTheDocument();
      expect(maxInputElement).toBeInTheDocument();
    });

    it('should render with single', () => {
      render(<Component isRange={false} value={27} />);

      const minInputElement = screen.getByTestId('min-value');
      const maxInputElement = screen.queryByTestId('max-value');

      expect(minInputElement).toBeInTheDocument();
      expect(maxInputElement).not.toBeInTheDocument();
    });

    it('should update render range when max is changed', () => {
      const { rerender } = render(<Component max={100} value={[0, 20]}/>);
      expect(screen.getByTestId('slider-range').style).toHaveProperty(
        'width',
        '20%',
      );

      rerender(<Component max={40} value={[0, 20]} />);

      expect(screen.getByTestId('slider-range').style).toHaveProperty('width', '50%');
    });

    it('should update render range when min is changed', () => {
      const { rerender } = render(<Component min={0} value={[0, 20]}/>);
      expect(screen.getByTestId('slider-range').style).toHaveProperty(
        'left',
        '0%',
      );
      expect(screen.getByTestId('slider-range').style).toHaveProperty(
        'width',
        '20%',
      );

      rerender(<Component max={100} min={20} value={[40, 50]} isRange />);

      expect(screen.getByTestId('slider-range').style).toHaveProperty('left', '25%');
      expect(screen.getByTestId('slider-range').style).toHaveProperty('width', '12.5%');
    });
  });

  describe('actions', () => {
    describe('with range slider', () => {
      it('should call onChange when change range', () => {
        const onChangeSpy = jest.fn();
        render(<Component onChange={onChangeSpy}/>);

        const minInputElement = screen.getByTestId('min-value');
        const maxInputElement = screen.getByTestId('max-value');

        fireEvent.change(minInputElement, { target: { value: 10 } });
        expect(onChangeSpy).toHaveBeenCalledWith([10, 100]);

        fireEvent.change(maxInputElement, { target: { value: 90 } });
        expect(onChangeSpy).toHaveBeenCalledWith([0, 90]);

        expect(onChangeSpy).toHaveBeenCalledTimes(2);
      });

      it('should call onMouseUp when mouse up on inputs', () => {
        const onMouseUpSpy = jest.fn();
        render(<Component onMouseUp={onMouseUpSpy} value={[23, 45]}/>);

        const minInputElement = screen.getByTestId('min-value');
        const maxInputElement = screen.getByTestId('max-value');

        fireEvent.mouseUp(minInputElement, { target: { value: 10 } });
        expect(onMouseUpSpy).toHaveBeenCalledWith([10, 45]);

        fireEvent.mouseUp(maxInputElement, { target: { value: 90 } });
        expect(onMouseUpSpy).toHaveBeenCalledWith([23, 90]);

        expect(onMouseUpSpy).toHaveBeenCalledTimes(2);
      });

      it('should set min and max as same value', () => {
        const onChangeSpy = jest.fn();
        render(<Component value={[20, 21]} onChange={onChangeSpy}/>);

        const maxInputElement = screen.getByTestId('max-value');

        fireEvent.change(maxInputElement, { target: { value: '20' } });

        expect(onChangeSpy).toHaveBeenCalledWith([20, 20]);
      });
    });

    describe('with single slider', () => {
      it('should call onChange when change simple', () => {
        const onChangeSpy = jest.fn();
        render(<Component isRange={false} onChange={onChangeSpy} value={23}/>);

        const minInputElement = screen.getByTestId('min-value');

        fireEvent.change(minInputElement, { target: { value: 10 } });
        expect(onChangeSpy).toHaveBeenCalledWith(10);

        expect(onChangeSpy).toHaveBeenCalledTimes(1);
      });

      it('should call onChange when change simple', () => {
        const onMouseUpSpy = jest.fn();
        render(<Component isRange={false} onMouseUp={onMouseUpSpy}/>);

        const minInputElement = screen.getByTestId('min-value');

        fireEvent.mouseUp(minInputElement, { target: { value: 10 } });
        expect(onMouseUpSpy).toHaveBeenCalledWith(10);

        expect(onMouseUpSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
