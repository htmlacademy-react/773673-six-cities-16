import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default BaseLayout;
