import React from 'react';
import './BurgerMenu.css';

const BurgerMenu = ({ onClick }) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <button className='burger' type='button' onClick={handleClick}/>
  );
};

export default BurgerMenu;
