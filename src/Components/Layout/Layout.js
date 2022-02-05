import React from 'react';
import './Layout.css';
import { Outlet } from 'react-router-dom';
import SideBar from "../SideBar/SideBar";

const Layout = () => {
  return (
    <main className='main'>
      <SideBar />
    </main>
  );
};

export default Layout;
