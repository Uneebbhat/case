interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className=" h-[100dvh]">{children}</div>;
};

export default AuthLayout;
