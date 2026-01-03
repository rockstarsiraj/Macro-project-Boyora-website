import { Navbar, LoginForm } from "../../components";

export const AuthLogin = () => {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center mt-32 ">
        <LoginForm />
      </main>
    </>
  );
};
