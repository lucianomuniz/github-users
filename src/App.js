import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';

const App = () => {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
};

export default App;
