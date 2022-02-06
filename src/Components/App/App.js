import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from "../Layout/Layout";
import Component from "../Componeny/Component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Layout/>}>
        <Route index element={ <Component /> }/>
        <Route path='inbox' element={ <Component /> }/>
        <Route path='todo' element={ <Component /> }/>
        <Route path='activity' element={ <Component /> }/>
        <Route path='team' element={ <Component /> }/>
        <Route path='folder/:name' element={ <Component /> }/>
      </Route>
    </Routes>
  );
}

export default App;
