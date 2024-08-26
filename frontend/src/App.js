import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import AppFooter from './components/AppFooter';
import appStore, { persistor } from './redux/appStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <div>
      <PersistGate persistor={persistor}>
        {/* step2. Providing redux store to application */}
        <Provider store={appStore}>
          <Header />
          <Outlet />
          <AppFooter />
        </Provider>
      </PersistGate>
    </div>
  );
};

export default App;
