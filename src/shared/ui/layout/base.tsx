import { Outlet } from 'react-router-dom';

import { Header } from '..';

const BaseLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default BaseLayout;
