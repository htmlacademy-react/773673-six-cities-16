import { useEffect } from 'react';
import { useAppDispatch } from './store';
import { LoginDTO } from '@/types/user';
import { checkAuthorized, login, logout } from '@/store/user';

export const useCheckAuthorization = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuthorized());
  }, [dispatch]);
};

export const useAuthorize = () => {
  const dispatch = useAppDispatch();

  const authorizeCallback = ({ email, password }: LoginDTO) => {
    dispatch(login({ email, password }));
  };

  return authorizeCallback;
};

export const useLogout = () => {
  const dispatch = useAppDispatch();

  const logoutCallback = () => {
    dispatch(logout());
  };

  return logoutCallback;
};