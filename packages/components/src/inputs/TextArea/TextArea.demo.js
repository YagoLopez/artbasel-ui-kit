import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea';

const TextAreaDemo = (props) => {
  const [value, setValue] = useState(props.value);

  const handleOnChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return <TextArea {...props} value={value} onChange={handleOnChange} />;
};

TextAreaDemo.propTypes = {
  value: PropTypes.string,
};

export default TextAreaDemo;
