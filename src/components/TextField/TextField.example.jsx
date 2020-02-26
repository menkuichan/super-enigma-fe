import React, { useState } from 'react';
import TextField from '.';

const TextFieldExample = () => {
  const [value, setValue] = useState('1998');

  const onHandleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      value={value}
      onChange={onHandleChange}
    />
  );
};

export default TextFieldExample;
