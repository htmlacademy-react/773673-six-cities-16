import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/private-route';

import Main from './pages/main';

import Login from './pages/login';
import Offer from './pages/offer';
import Favorites from './pages/favorites';
import NotFound from './pages/not-found';

interface IProps {
  offersCount: number;
}

const App = ({ offersCount }: IProps) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main offersCount={offersCount} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/offer/:id" element={<Offer />} />
      <Route
        path="/favorites"
        element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
