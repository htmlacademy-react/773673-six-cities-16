import Header from '@/components/header';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default BaseLayout;
