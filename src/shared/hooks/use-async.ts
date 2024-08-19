import { useCallback, useEffect, useState } from 'react';

export const useAsync = <T>(
  callback: (...args: unknown[]) => Promise<T>,
  dependencies: unknown[] = [],
) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | Error>();
  const [value, setValue] = useState<T | null>(null);

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(null);
    setValue(null);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
};
