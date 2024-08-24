import { useAuthorize } from '@/hooks/user';
import { FC, useState } from 'react';

type AuthFormData = {
  email: string;
  password: string;
};

export const AuthForm: FC = () => {
  const authorize = useAuthorize();

  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
  });

  const handleEmailChanged = (value: string) => {
    setFormData((prevState) => ({ ...prevState, email: value }));
  };

  const handlePasswordChanged = (value: string) => {
    setFormData((prevState) => ({ ...prevState, password: value }));
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    authorize(formData);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="login__form form"
      action="#"
      method="post"
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(event) => handleEmailChanged(event.target.value)}
          required
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => handlePasswordChanged(event.target.value)}
          required
        />
      </div>
      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
};
