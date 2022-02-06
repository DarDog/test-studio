import React, { useState } from 'react';
import './SideBar.css';
import { NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../Logo/Logo";
import { MY_FACE, NOTIFICATIONS } from "../../constants/constants";
import PointsMenu from "../PointsMeny/PointsMenu";

const SideBar = () => {
  const [ isShort, setIsShort ] = useState(false)
  const setActive = ({ isActive }) => `nav__link ${isShort && 'nav__link_short'}` + ( isActive ? ' nav__link_active' : '' );

  const handleSizeChange = () => {
    setIsShort(!isShort);
  }

  return (
    <nav className={ `nav ${isShort && 'nav_short'}` }>
      <div className='nav__header'>
        <BurgerMenu onClick={handleSizeChange}/>
        { isShort || <Logo /> }
      </div>
      <div className={ `nav__menu ${ isShort && 'nav__menu_short' }` }>
        <div className='nav__container'>
          <form className='nav__form'>
            <input type={ isShort ? 'button' : 'text' } className={ `nav__search ${ isShort && 'nav__search_short' }` } placeholder={ isShort ? '' : 'Search' }/>
          </form>
          <ul className='nav__list'>
            <li className='list__item'>
              <NavLink to='/' className={ setActive }>
                <div className='nav__link-icon nav__link-icon_type_main'/>
                <p className={ `nav__link-text ${ isShort && 'nav__link-text_short' }` }>Главная</p>
              </NavLink>
            </li>
            <li className='list__item'>
              <NavLink to='/inbox' className={ setActive }>
                <div className='nav__link-icon nav__link-icon_type_inbox'/>
                <p className={ `nav__link-text ${ isShort && 'nav__link-text_short' }` }>Входящие</p>
                { NOTIFICATIONS && !isShort > 0 && <div className='nav__link-notifications'>{ NOTIFICATIONS }</div>}
              </NavLink>
            </li>
            <li className='list__item'>
              <NavLink to='/todo' className={ setActive }>
                <div className='nav__link-icon nav__link-icon_type_todo'/>
                <p className={ `nav__link-text ${ isShort && 'nav__link-text_short' }` }>Задачи</p>
              </NavLink>
            </li>
            <li className='list__item'>
              <NavLink to='/activity' className={ setActive }>
                <div className='nav__link-icon nav__link-icon_type_activity'/>
                <p className={ `nav__link-text ${ isShort && 'nav__link-text_short' }` }>Активность</p>
              </NavLink>
            </li>
            <li className='list__item'>
              <NavLink to='/team' className={ setActive }>
                <div className='nav__link-icon nav__link-icon_type_team'/>
                <p className={ `nav__link-text ${ isShort && 'nav__link-text_short' }` }>Команда</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='nav__container'>
          <p className={ `nav__folder ${ isShort && 'nav__folder' }` }>{ isShort ? '' : 'Проекты' }</p>
          <ul className={ `nav__list ${ isShort && 'nav__list_short' }` }>
            <li className='list__item'>
              <NavLink to='/folder/design' className={ setActive }>
                <div className='list__point'/>
                Дизайн
              </NavLink>
            </li>
            <li className='list__item'>
              <NavLink to='/folder/web' className={ setActive }>
                <div className='list__point'/>
                Веб
              </NavLink>
            </li>
            <li className='list__item'>
              <NavLink to='/folder/editing' className={ setActive }>
                <div className='list__point'/>
                Редактура
              </NavLink>
            </li>
          </ul>
          <button className={ `nav__add-button ${ isShort && 'nav__add-button_short' }` }>
            <p className={ `nav__button-text ${ isShort && 'nav__button-text_short' }` }>Создать проект</p>
          </button>
        </div>
      </div>
      <div className={ `nav__footer ${ isShort && 'nav__footer_short' }` }>
        <div className='nav__user'>
          <img src={ MY_FACE } alt="Ваш аватар" className='nav__avatar'/>
          <div className={ `nav__user-info ${ isShort && 'nav__user-info_short' }` }>
            <p className='nav__user-name'>Владислав Субботин</p>
            <p className='nav__user-job'>Фронтенд разработчик</p>
          </div>
        </div>
        { isShort ? '' : <PointsMenu />}
      </div>
    </nav>
  );
};

export default SideBar;
