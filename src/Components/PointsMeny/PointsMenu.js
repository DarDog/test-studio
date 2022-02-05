import React from 'react';
import './PointsMenu.css';

const PointsMenu = ({ onClick }) => {
  return (
    <button className='points-menu' onClick={onClick}/>
  );
};

export default PointsMenu;
