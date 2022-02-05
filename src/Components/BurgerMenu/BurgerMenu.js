import React from 'react';
import './BurgerMenu.css';

const BurgerMenu = ({ onClick }) => {
  return (
    <button className='burger' type='button' onClick={onClick}/>
  );
};

export default BurgerMenu;
