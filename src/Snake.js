import React from 'react';
import './Snake.css';

const Snake = ({cellSize, left, top}) => {
  return <div className="snake" style={{ width: `${cellSize}px`, height: `${cellSize}px`, left: `${left}px`, top: `${top}px` }}></div>
}

export default Snake;