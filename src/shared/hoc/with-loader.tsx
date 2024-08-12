import { PropsWithChildren, type FC } from 'react';
import { Spinner } from '../ui';

type Props = PropsWithChildren<{ isLoading: boolean }>;

export const WithLoader: FC<Props> = ({ isLoading, children }: Props) =>
  isLoading ? <Spinner /> : children;
