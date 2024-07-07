import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/private-route';

import { OfferRespone } from './types/offers';

import Main from './pages/main';
import Login from './pages/login';
import Offer from './pages/offer';
import Favorites from './pages/favorites';
import NotFound from './pages/not-found';

interface IProps {
  offersCount: number;
  offersList: OfferRespone[];
}

const App = ({ offersCount, offersList }: IProps) => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Main offersCount={offersCount} offersList={offersList} />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/offer/:id" element={<Offer />} />
      <Route
        path="/favorites"
        element={
          <PrivateRoute>
            <Favorites offersList={offersList} />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
