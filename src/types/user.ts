export type UserInfo = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

export enum AuthorizationStatus {
  Auth = 'auth',
  NoAuth = 'no-auth',
  Unknown = 'unknown',
}

export type LoginDTO = {
  email: string;
  password: string;
};
