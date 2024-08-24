import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import AppFooter from './components/AppFooter';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <AppFooter />
    </div>
  );
};

export default App;
