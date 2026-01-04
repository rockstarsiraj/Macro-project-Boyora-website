import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin, useCart, useWish } from "../../context";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isAccountDropDownOpen, setIsAccountDropDownOpen] = useState(false);
  const { token, loginDispatch } = useLogin();
  const { cart } = useCart();
  const { wish } = useWish();
  const onLoginClick = () => {
    if (!token?.access_token) {
      navigate("/auth/login");
    } else {
      loginDispatch({
        type: "LOGOUT",
      });
      navigate("/auth/login");
    }
  };

  return (
    <header className="flex  items-center  w-full bg-green-900 py-4 px-8 text-slate-50 ">
      <div className="flex items-center gap-2" >
        <img src="/images/shop2.png" alt="shop" className="h-14 w-14 object-contain bg-transparent 
        "/>
       
        <h1
          onClick={() => navigate("/")}
          className="text-5xl text-amber-200 font-semibold hover:cursor-pointer "
        >
          
          Buyora
        </h1>
      </div>
      <nav className=" ml-auto flex  gap-8  text-white ">
        <div className="icon-badge relative  ">
          <span
            onClick={() => navigate("/wish")}
            className="material-symbols-outlined text-3xl hover:cursor-pointer"
          >
            favorite{" "}
          </span>
          <div className="badge-number avatar-badge d-flex justify-center bg-red-600">
            {wish.length}
          </div>
        </div>

        <div className="icon-badge relative  ">
          <span
            onClick={() => navigate("/cart")}
            className="material-symbols-outlined text-3xl hover:cursor-pointer"
          >
            shopping_cart
          </span>
          <div className="badge-number avatar-badge d-flex justify-center bg-red-600">
            {cart.length}
          </div>
        </div>

        <div className="relative">
          <span
            onClick={() => setIsAccountDropDownOpen(!isAccountDropDownOpen)}
            className="material-symbols-outlined text-3xl hover:cursor-pointer"
          >
            account_circle
          </span>
          {isAccountDropDownOpen && (
            <div className="absolute bg-green-400">
              <button
                onClick={onLoginClick}
                className="border-b  rounded-full hover:cursor-pointer "
              >
                {token?.access_token ? "Logout" : "login"}
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
