import { useState, useCallback } from 'react';

export const useForceUpdate = () => {
  const [, setState] = useState<boolean>(true);
  const forceUpdate = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  return forceUpdate;
};
