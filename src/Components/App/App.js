import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from "../Layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Layout/>}>
        <Route index/>
        <Route path='inbox'/>
        <Route path='todo'/>
        <Route path='activity'/>
        <Route path='team'/>
        <Route path='folder/:name'/>
      </Route>
    </Routes>
  );
}

export default App;
