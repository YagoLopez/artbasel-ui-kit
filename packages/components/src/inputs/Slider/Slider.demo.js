import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Slider } from '.';

const SliderDemo = (props) => {
  const [value, setValue] = useState(props.value);

  const onChanged = (val) => {
    setValue(val);
    props.onChange(val);
  };

  return <Slider {...props} value={value} onChange={onChanged} />;
};

SliderDemo.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  onChange: PropTypes.func,
};

export default SliderDemo;
