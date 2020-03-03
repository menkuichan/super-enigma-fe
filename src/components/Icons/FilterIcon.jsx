import React, { useState } from 'react';

const FilterIcon = () => {
  const [color, changeColor] = useState('#808080');
  return (
    <svg
      onMouseOver={() => changeColor('#f79b0e')}
      onMouseOut={() => changeColor('#808080')}
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0V2H18V0H0ZM7 12H11V10H7V12ZM15 7H3V5H15V7Z" fill={color} />
    </svg>
  );
};

export default FilterIcon;

// onMouseOver={() => changeColor('black')}
// onMouseOut={() => changeColor('gray')}
