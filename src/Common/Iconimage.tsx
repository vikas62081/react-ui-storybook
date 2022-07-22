import React from 'react';

export const Image = ({ height = 50, width = 50, link }: any) => {
  return (
    <svg width={width} height={width} xmlns="http://www.w3.org/2000/svg">
      <image href={link} height={height} width={width} />
    </svg>
  );
};
