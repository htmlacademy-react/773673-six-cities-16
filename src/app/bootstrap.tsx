import { useLoadFavorites } from '@/hooks/favorites';
import { useCheckAuthorization } from '@/hooks/user';
import { FC, PropsWithChildren } from 'react';

export const Bootstrap: FC<PropsWithChildren> = ({ children }) => {
  useCheckAuthorization();
  useLoadFavorites();
  return children;
};
