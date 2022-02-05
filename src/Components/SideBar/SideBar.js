import React from 'react';
import './SideBar.css';
import { NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../Logo/Logo";
import { MY_FACE, NOTIFICATIONS } from "../../constants/constants";
import PointsMenu from "../PointsMeny/PointsMenu";

const SideBar = () => {
  const setActive = ({ isActive }) => 'nav__link ' + ( isActive ? 'nav__link_active' : '' );


  return (
    <nav className='nav'>
      <div className='nav__header'>
        <BurgerMenu/>
        <Logo/>
      </div>
      <div className='nav__menu'>
        <div className='nav__container'>
          <form className='nav__form'>
            <input type="text" className='nav__search' placeholder='Search'/>
          </form>
          <ul className='nav__list'>
            <li className='list__item'>
              <NavLink to='/' className={ setActive }>
                <div className='nav__link-icon nav__link-icon_type_main'/>
                Главная
              </NavLink>
            </li>
            <li className='list__item'>
              <NavLink to='/inbox' className={ setActive }>
                <div className='nav__link-icon nav__link-icon_type_inbox'/>
                Входящие
                { NOTIFICATIONS > 0 && <div className='nav__link-notifications'>{ NOTIFICATIONS }</div>}
              </NavLink>
            </li>
            <li className='list__item'>
              <NavLink to='/todo' className={ setActive }>
                <div className='nav__link-icon nav__link-icon_type_todo'/>
                Задачи
              </NavLink>
            </li>
            <li className='list__item'>
              <NavLink to='/activity' className={ setActive }>
                <div className='nav__link-icon nav__link-icon_type_activity'/>
                Активность
              </NavLink>
            </li>
            <li className='list__item'>
              <NavLink to='/team' className={ setActive }>
                <div className='nav__link-icon nav__link-icon_type_team'/>
                Команда
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='nav__container'>
          <p className='nav__folder'>Проекты</p>
          <ul className='nav__list'>
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
          <button className='nav__add-button'>Создать проект</button>
        </div>
      </div>
      <div className='nav__footer'>
        <div className='nav__user'>
          <img src={ MY_FACE } alt="Ваш аватар" className='nav__avatar'/>
          <div className='nav__user-info'>
            <p className='nav__user-name'>Владислав Субботин</p>
            <p className='nav__user-job'>Фронтенд разработчик</p>
          </div>
        </div>
        <PointsMenu />
      </div>
    </nav>
  );
};

export default SideBar;
