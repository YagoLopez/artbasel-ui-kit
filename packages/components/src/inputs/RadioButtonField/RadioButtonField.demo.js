import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { RadioButtonField } from '.';

const RadioButtonFieldDemo = (props) => {
  const [checked, setChecked] = useState(props.checked);

  const handleOnChange = useCallback(() => {
    setChecked(prevState => !prevState);
  }, []);

  return <RadioButtonField {...props} checked={checked} onChange={handleOnChange} />;
};

RadioButtonFieldDemo.propTypes = {
  checked: PropTypes.bool,
};

export default RadioButtonFieldDemo;
