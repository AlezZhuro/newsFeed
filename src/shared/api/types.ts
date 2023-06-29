export type SignInError = {
  errors: [string];
  success: boolean;
};

export type AuthHeaders = {
  'access-token': string;
  uid: string;
  client: string;
};

export type AuthSuccessDTO<T> = {
  user: T
}