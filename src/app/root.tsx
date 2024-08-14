import { useCheckAuthorization } from '@/hooks/authorization';
import { FC, PropsWithChildren } from 'react';

export const Root: FC<PropsWithChildren> = ({ children }) => {
  useCheckAuthorization();
  return children;
};
