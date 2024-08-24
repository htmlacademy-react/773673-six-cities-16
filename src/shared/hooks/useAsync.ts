import { DependencyList, useCallback, useEffect, useState } from 'react';

type AsyncCallback<T> = (...args: unknown[]) => Promise<T>;

type Loading = {
  status: 'pending';
  isLoading: true;
  isSuccess: false;
  isError: false;
  data: null;
  error: null;
};

type DoneWithError = {
  status: 'error';
  isLoading: false;
  isSuccess: false;
  isError: true;
  error: Error;
  data: null;
};

type DoneWithSuccess<T> = {
  status: 'success';
  isLoading: false;
  isError: false;
  isSuccess: true;
  data: T;
  error: null;
};

type AsyncState<T> = Loading | DoneWithError | DoneWithSuccess<T>;

type ReturningValue<T> = AsyncState<T>;

const initialState = {
  status: 'pending',
  isLoading: true,
  isError: false,
  isSuccess: false,
  data: null,
  error: null,
} as const;

export const useAsync = <T>(
  callback: AsyncCallback<T>,
  deps: DependencyList,
): ReturningValue<T> => {
  const [state, set] = useState<AsyncState<T>>(initialState);

  const memoizedCallback = useCallback(() => {
    callback()
      .then((value) => {
        set({
          status: 'success',
          isLoading: false,
          isSuccess: true,
          isError: false,
          data: value,
          error: null,
        });
      })
      .catch((err) => {
        set({
          status: 'error',
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: err as Error,
          data: null,
        });
      });
  }, deps);

  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);

  return state;
};
