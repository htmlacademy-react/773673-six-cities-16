import Footer from '@/components/footer';
import Header from '@/components/header';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default BaseLayout;
