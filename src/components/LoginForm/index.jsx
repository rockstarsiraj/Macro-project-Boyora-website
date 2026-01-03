import { useLogin } from "../../context/LoginContext";
import { userLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const { loginDispatch, email, password } = useLogin();
  const navigate = useNavigate();
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const data = await userLogin(email, password);
    if (Object.keys(data)?.length > 0) {
      localStorage.setItem("token", data.access_token);
    }
    console.log({ data });
    loginDispatch({
      type: "TOKEN",
      payload: {
        token: data,
      },
    });
    if (data.access_token) {
      navigate("/");
    }
  };
  const onEmailChange = (e) => {
    loginDispatch({
      type: "EMAIL",
      payload: {
        value: e.target.value,
      },
    });
  };
  const onPasswordChange = (e) => {
    loginDispatch({
      type: "PASSWORD",
      payload: {
        value: e.target.value,
      },
    });
  };
  return (
    <form
      onSubmit={onFormSubmit}
      className=" shadow-md  w-[500px] p-10 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))]

from-[#6366f1]
via-[#a5b4fc]
to-[#e0e7ff]"
    >
      <h2 className="flex justify-center text-3xl">Login</h2>
      <div className="flex flex-col gap-2">
        <span>Email *</span>
        <input
          className="border-b-2"
          onChange={onEmailChange}
          type="email"
          required
          placeholder="Siraj77@gmail.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span>Password *</span>
        <input
          className="border-b-2"
          onChange={onPasswordChange}
          type="password"
          required
          placeholder="Enter the Password..."
        />
      </div>
      <div className="mx-4">
        <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
          Login
        </button>
      </div>
    </form>
  );
};
