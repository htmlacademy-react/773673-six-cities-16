import { RouterProvider } from 'react-router-dom';
import router from './router';

import { Provider } from 'react-redux';
import { store } from '@/store';
import { Root } from './root';

const App = () => (
  <Provider store={store}>
    <Root>
      <RouterProvider router={router} />
    </Root>
  </Provider>
);

export default App;
