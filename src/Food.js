import React from 'react';
import './Food.css';

const Food = ({cellSize, left, top}) => {
  return <div className="food" style={{ width: `${cellSize}px`, height: `${cellSize}px`, left: `${left}px`, top: `${top}px` }}></div>
}

export default Food;