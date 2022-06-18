import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
