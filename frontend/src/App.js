import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import AppFooter from './components/AppFooter';
import appStore from './redux/appStore';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <div>
      {/* step2. Providing redux store to application */}
      <Provider store={appStore}>
        <Header />
        <Outlet />
        <AppFooter />
      </Provider>
    </div>
  );
};

export default App;
