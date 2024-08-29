import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import AppFooter from './components/AppFooter';
import appStore, { persistor } from './redux/appStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/ThemeProvider';

const App = () => {
  return (
    <>
      <PersistGate persistor={persistor}>
        {/* step2. Providing redux store to application */}
        <Provider store={appStore}>
          <ThemeProvider>
              <Header />
              <Outlet />
              <AppFooter />
          </ThemeProvider>
        </Provider>
      </PersistGate>
    </>
  );
};

export default App;
