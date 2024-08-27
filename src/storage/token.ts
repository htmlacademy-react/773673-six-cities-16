const STORAGE_KEY = 'six-cities-token';

export const tokenStorage = {
  get: () => localStorage.getItem(STORAGE_KEY),
  set: (token: string) => localStorage.setItem(STORAGE_KEY, token),
  reset: () => localStorage.removeItem(STORAGE_KEY),
};
