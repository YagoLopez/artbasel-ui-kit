import React, { useCallback, useMemo } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Slider = ({
  min,
  max,
  onChange,
  step,
  isRange,
  disabled,
  value,
  onMouseUp,
}) => {
  const minValue = useMemo(
    () => Number((Array.isArray(value) ? value[0] : value) || min),
    [value, isRange],
  );
  const maxValue = useMemo(() => (isRange ? Number(value[1] || max) : 0), [value, max]);

  const getPercent = useCallback(
    (val) => ((val - min) / (max - min)) * 100,
    [min, max],
  );

  const getRangeStyle = useCallback(() => {
    const minPercent = getPercent(minValue);
    const maxPercent = getPercent(maxValue);

    return {
      left: isRange ? `${minPercent}%` : 0,
      width: `${isRange ? maxPercent - minPercent : minPercent}%`,
    };
  }, [minValue, maxValue, isRange]);

  const normalizeValue = useCallback(
    (v, name) => {
      if (!isRange) return +v;
      if (name === 'min') {
        return Math.min(+v, maxValue);
      }
      return Math.max(+v, minValue);
    },
    [isRange, maxValue, minValue],
  );

  const valuesToChange = useCallback((v, name) => {
    const normalizedValue = normalizeValue(v, name);
    return isRange
      ? [
        name === 'min' ? normalizedValue : minValue,
        name === 'max' ? normalizedValue : maxValue,
      ]
      : normalizedValue;
  }, [isRange, minValue, maxValue]);

  const handleOnChange = useCallback(
    (e) => {
      const { value: v, name } = e.target;
      onChange(valuesToChange(v, name));
    },
    [isRange, minValue, maxValue],
  );

  const handleOnMouseUp = useCallback((e) => {
    const { value: v, name } = e.target;
    onMouseUp(valuesToChange(v, name));
  }, [value]);

  return (
    <div className="slider-container">
      <div className="slider">
        <input
          data-testid="min-value"
          type="range"
          name="min"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleOnChange}
          onMouseUp={handleOnMouseUp}
          onTouchEnd={handleOnMouseUp}
          disabled={disabled}
          className={classnames(
            'thumb thumb--zindex-3',
            'slider-min',
            {
              'is-same-value-min': isRange && minValue === maxValue,
              'thumb--zindex-5': minValue > max - 100,
            },
            'is-range',
          )}
        />
        {isRange && (
          <input
            data-testid="max-value"
            type="range"
            name="max"
            min={min}
            max={max}
            step={step}
            value={maxValue}
            onChange={handleOnChange}
            onMouseUp={handleOnMouseUp}
            onTouchEnd={handleOnMouseUp}
            disabled={disabled}
            className="thumb thumb--zindex-4 is-range"
          />
        )}
        <div className="slider-track" />
        <div
          style={getRangeStyle()}
          className={classnames('slider-range', {
            'is-same-value-max': isRange && minValue === maxValue,
            disabled: disabled === true,
          })}
        />
      </div>
    </div>
  );
};

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  step: PropTypes.number,
  isRange: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  value: [],
  step: 1,
  isRange: false,
  disabled: false,
  onMouseUp: () => null,
};

export default Slider;
