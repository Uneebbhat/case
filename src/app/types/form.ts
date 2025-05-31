export type SignupFormDataType = {
  username: string;
  email: string;
  password: string;
};

export type LoginFormDataType = {
  email: string;
  password: string;
};

export type ForgotPasswordFromDataType = {
  email: string;
};

export type ResetPasswordFormDataType = {
  newPassword: string;
  confirmPassword: string;
};
