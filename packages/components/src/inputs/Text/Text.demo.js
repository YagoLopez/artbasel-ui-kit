import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Text } from '.';

const TextDemo = (props) => {
  const [value, setValue] = useState(props.value);

  const handleOnChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return <Text {...props} value={value} onChange={handleOnChange} />;
};

TextDemo.propTypes = {
  value: PropTypes.string,
};

export default TextDemo;
