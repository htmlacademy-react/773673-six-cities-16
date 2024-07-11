import { Link } from 'react-router-dom';

import './styles.css';

const NotFound = () => (
  <div className="page">
    <div className="container">
      <main className="page-not-found ">
        <h1 className="page-not-found__title"> 404 Not Found</h1>
        <Link to="/" className="not-found__button">
          На главную
        </Link>
      </main>
    </div>
  </div>
);

export default NotFound;
