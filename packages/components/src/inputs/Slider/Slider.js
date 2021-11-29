import React, { useCallback, useEffect, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Slider = ({
  min, max, onChange, step, isRange, disabled, value,
}) => {
  let initMin = min;
  let initMax = max;

  if (isRange) {
    const initVal = Array.isArray(value) ? value : [min, value];
    [initMin, initMax] = initVal;
  } else {
    const initVal = Array.isArray(value) ? value[1] : value;
    initMin = min;
    initMax = initVal;
  }

  const [minVal, setMinVal] = useState(initMin);
  const [maxVal, setMaxVal] = useState(initMax);

  // Convert to percentage
  const getPercent = useCallback((val) => ((val - min) / (max - min)) * 100, [
    min,
    max,
  ]);

  const getRangeStyle = () => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);
    // Preceding with '+' converts the value from type string to type number
    return {
      left: `${minPercent}%`,
      width: `${maxPercent - minPercent}%`,
    };
  };

  // Get min and max values when their state changes
  useEffect(() => {
    if (isRange) {
      onChange([minVal, maxVal]);
    } else {
      onChange(maxVal);
    }
  }, [minVal, maxVal, onChange]);

  useEffect(() => {
    setMinVal(initMin);
    setMaxVal(initMax);
  }, [min, max, value, step, isRange]);

  if (isRange) {
    return (
      <div className="slider-container">
        <div className="slider">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={minVal}
            onChange={(event) => {
              const val = Math.min(+event.target.value, maxVal - step);
              setMinVal(val);
              event.target.value = val.toString();
            }}
            disabled={disabled}
            className={classnames(
              'thumb thumb--zindex-3',
              {
                'thumb--zindex-5': minVal > max - 100,
              },
              'is-range',
            )}
          />
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={maxVal}
            onChange={(event) => {
              const val = Math.max(+event.target.value, minVal + step);
              setMaxVal(val);
              event.target.value = val.toString();
            }}
            disabled={disabled}
            className="thumb thumb--zindex-4 is-range"
          />
          <div className="slider-track" />
          <div
            style={getRangeStyle()}
            className={classnames('slider-range', {
              disabled: disabled === true,
            })}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="slider-container">
        <div className="slider">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={maxVal}
            onChange={(event) => {
              const val = Math.max(+event.target.value, initMin);
              setMaxVal(val);
              event.target.value = val.toString();
            }}
            disabled={disabled}
            className="thumb thumb--zindex-4"
          />
          <div className="slider-track" />
          <div
            style={getRangeStyle()}
            className={classnames('slider-range', {
              disabled: disabled === true,
            })}
          />
        </div>
      </div>
    );
  }
};

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  /** The initial value of the component. A number for single
   * variant or an array of 2 numbers for range variant. */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  step: PropTypes.number,
  isRange: PropTypes.bool,
  disabled: PropTypes.bool,
  /** Called when the component value is changed. Returns a number
   * for single variant or an array of 2 numbers for range variant. */
  onChange: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  value: [0, 100],
  step: 1,
  isRange: false,
  disabled: false,
};

export default Slider;
