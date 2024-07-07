import { Outlet } from 'react-router-dom';
import Header from '../components/header';

const BaseLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default BaseLayout;
