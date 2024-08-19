import { useCheckAuthorization } from '@/hooks/user';
import { FC, PropsWithChildren } from 'react';

export const Bootstrap: FC<PropsWithChildren> = ({ children }) => {
  useCheckAuthorization();
  return children;
};
