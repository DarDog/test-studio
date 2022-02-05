import React from 'react';
import './Logo.css';
import { LOGO } from "../../constants/constants";

const Logo = () => {
  return(
    <img className='logo' alt='Логотип сайта' src={LOGO}/>
  );
};

export default Logo;
