import React from 'react';
import './Snake.css';

const Snake = ({CELLSIZE}) => {
  console.log(CELLSIZE);
  return <div className="snake" style={{ width: `${CELLSIZE}px`, height: `${CELLSIZE}px` }}></div>
}

export default Snake;