import { RouterProvider } from 'react-router-dom';
import router from './router/route';

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { Bootstrap } from './bootstrap';

const App = () => (
  <Provider store={store}>
    <Bootstrap>
      <RouterProvider router={router} />
    </Bootstrap>
  </Provider>
);

export default App;