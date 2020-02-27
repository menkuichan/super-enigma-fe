import React, { useState } from 'react';
import RadioGroup from '.';
import { SORT_FILTERS } from '../../constants';

const RadioGroupExample = () => {
  const [value, setValue] = useState(SORT_FILTERS[0].value);

  return (
    <RadioGroup
      data={SORT_FILTERS}
      value={value}
      onChange={setValue}
    />
  );
};

export default RadioGroupExample;
