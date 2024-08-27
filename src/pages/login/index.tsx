import { Link } from 'react-router-dom';
import { AuthForm } from './ui/auth-form';
import { cities } from '@/consts/cities';

const getRandomCity = () => cities[Math.floor(Math.random() * cities.length)];

const Login = () => {
  const randomCity = getRandomCity();
  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <AuthForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={`/${randomCity.name}`}>
                <span>{randomCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;
