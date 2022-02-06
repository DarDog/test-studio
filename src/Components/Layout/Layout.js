import React from 'react';
import './Layout.css';
import { Outlet } from 'react-router-dom';
import SideBar from "../SideBar/SideBar";

const Layout = () => {
  return (
    <main className='main'>
      <SideBar />
      <div className='content'>
        <article className='example-page__header'>
          <ul className='example-page__list'>
            <li className='example-page__item'/>
            <li className='example-page__item'/>
            <li className='example-page__item'/>
          </ul>
          <button className='example-page__button'/>
        </article>
      { <Outlet /> }
      </div>
    </main>
  );
};

export default Layout;
